# Skill-Tree Screen Guide — Talents, Prestige Powers, Greed Tree

How Vault Hunters' node-tree screens work end to end (config JSON → client data → rendering →
click/unlock flow), and how to author new content for them — **preferring datagen in
wv-development wherever the pipeline supports it**, per Wold's house style.

**Sources examined (2026-08-06):**
- Base mod: decompiled `the_vault-1.18.2-3.21.5.6573` at `wv_decompile\target_decompiled\`.
  The pack currently runs **3.21.6** — line numbers below are from 3.21.5 and may drift slightly.
- vhapi: decompiled **5.8.0** (the runtime jar from instance (4)) at
  `scratchpad ...\vhapi_full\decomp\` during this investigation. Note wv-development *compiles*
  against `local:vhapi:5.6.0` (`build.gradle:392`) — one observed behavioral difference is called
  out in §5.2.
- Addon source: `C:\Users\river\wv-development\src\main\java\xyz\iwolfking\woldsvaults\`.
- Pack configs: `C:\Users\river\Wolds-Vaults\config\the_vault\`.

Path shorthands used below: `B:` = `target_decompiled\iskallia\vault\`, `A:` =
`wv-development\src\main\java\xyz\iwolfking\woldsvaults\`, `P:` = `Wolds-Vaults\config\the_vault\`.

---

## 1. The big picture

All three screens are **tabs of one shared player-menu shell** and follow one architecture:

```
click tab icon ──► ServerboundOpenXxxMessage ──► server: NetworkHooks.openGui(MenuProvider)
                                                        │  (tree serialized into open packet*)
                                                        ▼
                     MenuScreens factory builds XxxElementContainerScreen (client)
                              │
                              ├── SkillTabContainerElement  (top tab strip, shared)
                              └── SplitTabContent
                                    ├── XxxPanRegion   (left ~55%: pannable/zoomable node graph)
                                    │     widgets built from GUI-styles config {id → x,y,icon,frame}
                                    │     connectors built from gates / parent edges
                                    │     click node ──► dialog.setSelected(...)
                                    └── XxxDialog      (right side: name, description, Learn button)
                                          Learn ──► XxxLevelMessage ──► server validates, spends
                                                     points, syncs tree back (KnownXxxMessage)
```
\* Greed differs: its container carries no payload; the tree arrives via a separate
`GreedTreeMessage` sync.

**Tab switching is a full server round-trip** (each tab click sends an open-message and the server
opens a new container) — not a client-side screen swap.

### Comparison table

| | **Talents** | **Prestige Powers** | **Greed Tree** |
|---|---|---|---|
| Screen (tab #) | `TalentsElementContainerScreen` (2) | `PrestigePowersElementContainerScreen` (5) | `GreedElementContainerScreen` (6) |
| Screen base | `SkillsElementContainerScreen<TalentTree>` | `SkillsElementContainerScreen<PrestigeTree>` | `AbstractSkillTabElementContainerScreen<GreedContainer>` — a **fork**, see §4.3 |
| Pan region | `TalentPanRegion` (extends `SkillPanRegion`) | `PrestigePowersPanRegion` (extends `SkillPanRegion`) | `GreedPanRegion` (standalone reimplementation) |
| Dialog | `TalentDialog` (extends `SkillDialog`) | `PrestigePowersDialog` (extends `SkillDialog`) | `GreedDialog` (extends `AbstractDialog`) |
| Node widget | `TalentWidget` (extends `SkillWidget`) | `PrestigePowerWidget` (extends `SkillWidget`) | `GreedNodeWidget` |
| Container / registry name | `NBTElementContainer<TalentTree>` / `talent_tab` | `NBTElementContainer<PrestigeTree>` / `prestige_powers_tab` | `GreedContainer` (slotless, empty) / `greed_container` |
| Open message | `ServerboundOpenTalentsMessage` | `ServerboundOpenPrestigePowersMessage` | `ServerboundOpenGreedMessage` |
| Content config | `P:talents.json` (`TalentsConfig`) | `P:prestige_powers.json` (`PrestigePowersConfig`) | `P:greed\greed_nodes.json` (`GreedNodesConfig`) |
| GUI config | `P:talents_gui_styles.json` | `P:prestige_powers_gui_styles.json` (styles **+ headers**) | `P:greed\greed_gui_styles.json` (+ `greed_tree.json` spacing) |
| Descriptions | `P:skill_descriptions.json` (shared) | same file | same file |
| Gates | `P:skill_gates.json` (shared) | same file (currently no prestige entries) | n/a — edges are `parent` fields in the node config |
| Learn message | `TalentLevelMessage` | `PrestigePowerLevelMessage` | `GreedUnlockNodeMessage` |
| Currency | skill points; regret costs Vault Gold | **knowledge points** (`learnKnowledgeCost`); no regret UI | budget = `greedTier × 3`, roots free |
| Extra gate | `unlockLevel`, skill gates | `requiredGreedTier` + level 100 + Herald kill | ≥1 parent unlocked; tier 0 = whole tree locked |
| Server data (SavedData) | `PlayerTalentsData` | `PlayerPrestigePowersData` | `PlayerGreedTreeData` |
| Client sync msg → cache | `KnownTalentsMessage` → `ClientTalentData` | `KnownPrestigePowersMessage` → `ClientPrestigePowersData` | `GreedTreeMessage` → `ClientGreedTreeData` |
| Content datagen-able? | **Yes** (`AbstractTalentProvider`) — addon provider currently a broken no-op | **Yes** (`AbstractPrestigePowerProvider`) — addon provider commented out | **No** — no vhapi provider/loader exists; pack config only |
| Styles datagen-able? | **Yes, live today** (`ModTalentStyleProvider`) | **Yes** (`AbstractPrestigePowerStyleProvider`) — commented out; **headers cannot be datagen'd** | **No** |

Everything is keyed by the skill **`id`** string: content entry, GUI style, description, gates,
and the learn message all use the same id. `name` is only the display string (no lang keys
anywhere in these screens).

---

## 2. The shared framework

### 2.1 Element framework primer (`B:client\gui\framework\`)

The modern UI toolkit all these screens sit on. Enough to build with:

- **Spatials** — `ISpatial` = x/y/z + width/height. Build with the fluent factory:
  `Spatials.positionXY(8, 6).size(100, 20)` (`framework\spatial\Spatials.java`). Every mutator
  returns the mutable spatial, so it chains.
- **Elements** — everything on screen is an element extending
  `AbstractSpatialElement` (CRTP: `class Foo extends AbstractSpatialElement<Foo>`). An element
  opts into subsystems purely by interface: `IRenderedElement` (drawn), `IGuiEventElement`
  (mouse/key — override the `onMouseClicked`-style hooks, never the SRG `m_` methods),
  `ITooltipElement`, `IUpdateableElement` (ticked), `ILayoutElement`.
  `ElementStore.addElement` files it into the right lists via instanceof checks
  (`framework\element\spi\ElementStore.java:30-52`). **Render order = insertion order; there is
  no z-sorting pass.**
- **Layout** — each element has a `fixedSpatial` (its constructor position) and a `worldSpatial`
  computed at layout time: `world = fixed + parent`, then your optional
  `.layout((screen, gui, parent, world) -> ...)` lambda mutates it
  (`AbstractSpatialElement.layoutSelf`). Screens re-layout when `requestLayout()` is called.
- **Containers** — `ContainerElement` nests elements (children laid out against the parent's
  world spatial); `ElasticContainerElement` auto-grows to its children's bounding box (the tab
  strip uses this). Scroll variants: `VerticalScrollClipContainer` etc.
- **Useful leaves** — `NineSliceElement` (9-slice window background, e.g.
  `ScreenTextures.DEFAULT_WINDOW_BACKGROUND`), `TextureAtlasElement`, `LabelElement`,
  `ButtonElement`, `SlotsElement`, `TabElement`.
- **Screens** — `AbstractElementContainerScreen<C extends AbstractContainerMenu>`
  (`framework\screen\`): ctor takes `(container, inventory, title, IElementRenderer,
  ITooltipRendererFactory)`; you `setGuiSize(...)` and `addElement(...)`. Render order:
  layout → background → elements → vanilla slots → tooltips. Use
  `ScreenRenderers.getImmediate()` as the renderer (all skill screens do).
  `AbstractElementScreen` is the non-container twin.
- **Tooltips** — `element.tooltip(Tooltips.single(() -> new TextComponent("hi")))`;
  `Tooltips.multi/shift/advanced` for variants.
- Best addon-side template for a fresh framework screen:
  `A:client\screens\ScavengerPouchScreen.java`.

### 2.2 The skill-tab shell

`B:client\gui\screen\player\AbstractSkillTabElementContainerScreen.java` — tiny. Its ctor adds:
1. the tab strip: `new SkillTabContainerElement(Spatials.positionXYZ(15, -28, 1), getTabIndex())`
2. a `LabelElement` with `getTabTitle()` at the top of the content area.

Subclasses implement exactly two things: `int getTabIndex()` and `MutableComponent getTabTitle()`.
Note `getTabIndex()` is called **from the super constructor** — return a constant.

**`SkillTabContainerElement`** (`B:client\gui\screen\player\element\SkillTabContainerElement.java`)
**is the hardcoded list of tabs.** Line ~26 has the icon array
(`TAB_ICON_STATISTICS, ABILITIES, TALENTS, EXPERTISES, RESEARCHES, PRESTIGE_POWERS, GREED`),
each tab at `x = 31*i - 10`, and a switch mapping index → `ServerboundOpenXxxMessage`. Adding a
tab means editing this file (or mixing into it from the addon).

The per-tree layer under it, `legacy\LegacySkillTreeElementContainerScreen`:
- holds `protected final TabContent content = this.getTabContent();` — **a field initializer
  calling an abstract method**, so `getTabContent()` runs before your subclass ctor body; only
  use container data inside it.
- routes mouse events to the content, renders content *before* the framework elements, and adds
  the third abstract: `renderPointOverlay(PoseStack)` (helpers exist for skill / knowledge /
  archetype point overlays).
- implements **`ILegacySkillTreeScreen`** (`update()` + `getTabContent()`), which is what
  `VaultLevelMessage.handle` uses to refresh whichever skill screen is open
  (`B:network\message\VaultLevelMessage.java:82-85`) — implement it to get free live refresh.

### 2.3 SplitTabContent: pan region + dialog

`B:client\gui\screen\player\legacy\SplitTabContent.java` composes the two halves:

- `panRegion.getBounds()` is **hardcoded to the left 55%**:
  `Rectangle(30, 60, width*0.55 - 30, height - 90)` (`AbstractPanRegion.getBounds`).
- The dialog gets everything to the right of it, repositioned every frame:
  `x = panBounds.right + 15`, width `parentScreen.width - 21 - x`.
- Mouse routing: inside pan bounds → pan region; otherwise → dialog.
- It also draws the border frame and the vault-XP bar at the pan region's top-right.

**`AbstractPanRegion`** (`...\legacy\tab\split\spi\AbstractPanRegion.java`) — extends vanilla
`Screen`, not an element. Provides drag-to-pan, zoom-to-cursor on scroll
(`scale += 0.25 * sign * scale`, clamped 0.3–5.0, override `clampViewportScale` to change),
a re-center button, and **static per-class persistence of pan/zoom across opens**. Subclasses
implement `update()` (build widgets) and `getWidgets()`.

**`SkillPanRegion<T, S, W>`** (`...\split\pan\SkillPanRegion.java`) — the generic graph host that
Talents/Expertises/Prestige use:
- `update()` iterates **`getStyles()`** (the GUI config map) — *not* the tree — and calls your
  `initSkillWidget(tree, skillName, style, widgets, groups)` per entry.
  **A skill with no style entry never becomes a widget → it is invisible.** This is the #1
  "why doesn't my node show up" cause.
- Builds `ConnectorWidget`s from `ModConfigs.SKILL_GATES`: `dependsOn` → grey `ARROW`,
  `lockedBy` → red `DOUBLE_ARROW` (suppressed by the gate's `ignoreArrow`).
- `m_6375_` un-projects the mouse through the pan/zoom transform, hit-tests widgets, and calls
  `skillDialog.setSkillGroup(widget.getSkill())` — that's the entire click→dialog wiring.
- Render transform: `translate(midpoint of bounds) → scale(viewportScale) →
  translate(viewportTranslation)`; draws groups → connectors → widgets.

**`AbstractDialog`** (`...\split\spi\AbstractDialog.java`) — extends `GuiComponent`. Everything
inside is in bounds-local coordinates. Base `render` only lays out the learn/regret buttons
(pinned to the bottom); subclasses draw heading + a `ScrollableContainer` description.
**`SkillDialog`** (`...\split\dialog\SkillDialog.java`) is the shared tree-dialog: learn-button
label/state machine, descriptions from `ModConfigs.SKILL_DESCRIPTIONS.getDescriptionFor(id)`
plus an auto-generated "Cost: 1 ▶ 1 ▶ 2 / Level requirement" tail, and `upgradeSkill()` which
**optimistically applies `learn()` client-side** before sending the serverbound message
(desync-if-rejected is cosmetic; the next Known-message resyncs).

### 2.4 Opening & registration plumbing (all the touch points)

| Concern | Where |
|---|---|
| Open messages (one per tab, singleton, empty payload) | `B:network\message\ServerboundOpen{Statistics,Abilities,Talents,Expertises,Researches,PrestigePowers,Greed}Message.java` |
| Message registration (sequential ids — order matters) | `B:init\ModNetwork.java` (talents ~:347, greed ~:589) |
| Server handler pattern | `handle`: get player tree from SavedData → `NetworkHooks.openGui(player, MenuProvider, buf -> tree.writeBits(...))` |
| MenuTypes | `B:init\ModContainers.java` — fields ~:119-125 + `IForgeMenuType.create` factories decoding the buffer; registry names in one `registerAll` array ~:550 |
| Screen binding | `B:init\ModScreens.java:111+` — `MenuScreens.register(ModContainers.X, XScreen::new)`; screen ctor must be `(container, inventory, title)` |
| Keybinds | `H` → opens Statistics tab (`B:init\ModKeybinds.java:80`, handled `B:event\InputEvents.java:243`); `P` → prestige activation radial (`ModKeybinds.java:101`, `InputEvents.java:241`) |
| Live refresh | `VaultLevelMessage` → `ILegacySkillTreeScreen.update()`; greed additionally `GreedTreeMessage` → `GreedElementContainerScreen.update()` |

### 2.5 Textures & atlases

- All UV constants live in `B:client\gui\framework\ScreenTextures.java`. The legacy pan/dialog
  chrome draws from raw `textures/gui/ability_tree.png` (`UI_RESOURCE`) and
  `textures/gui/screen/black_bg.png`; node frames from `textures/gui/skill_widget.png`
  (via `B:client\gui\helper\SkillFrame.java` — `STAR / RECTANGULAR / SQUARE / CIRCLE`).
- **Per-tree icon atlases** are stitched at startup from the GUI config:
  `B:init\ModTextureAtlases.java` registers `SKILLS` (source dir `textures/gui/skills`,
  sprite list = `TALENTS_GUI` styles), `PRESTIGE` (`textures/gui/prestige`, from
  `PRESTIGE_POWERS_GUI`), `ABILITIES`, `RESEARCHES`, etc. Style values like
  `the_vault:gui/skills/intelligence` are **atlas sprite ids** → file
  `assets/<ns>/textures/gui/skills/intelligence.png`.
- **Cross-namespace icons only work because of vhapi**: `MixinResourceTextureAtlasHolder`
  force-allows non-`the_vault` namespaces and `MixinModTextureAtlases` swaps the SKILLS sprite
  list for a scan of `/textures/gui/skills` across all packs/mods. So the addon just drops PNGs
  in `assets/woldsvaults/textures/gui/skills/` and references `woldsvaults:gui/skills/<name>`.
- **Greed node icons are different**: `GreedNodeWidget` binds the style's icon as a **full
  texture path** (`the_vault:textures/gui/greed/nodes/<name>.png`), not an atlas sprite.
- Tab-strip icons come from the `SCREEN` atlas, which auto-scans `textures/gui/screen/`
  (null sprite-list supplier), so a new `tab_icon_<name>.png` there needs no registration.

---

## 3. The shared data layer

### 3.1 Tree model and the type registry

- `SkillTree` (list of `Skill`) → subclasses `TalentTree`, `PrestigeTree`, `GreedTree`,
  `ExpertiseTree`, `AbilityTree`.
- Each visible node is a **`TieredSkill`** (`B:skill\base\TieredSkill.java`): outer
  `{id, name, maxLearnableTier}` + a `tiers` list of per-rank leaf skills. `tier` = learned rank;
  `bonusTier` = gear/greed "overlevel" ranks on top (`tiers.length` may exceed
  `maxLearnableTier` on purpose — that's the overlevel headroom).
- **JSON `type` → Java class dispatch** happens in the GSON hierarchy adapter
  `Skill.Adapter` (`B:skill\base\Skill.java:367+`), a `TypeSupplierAdapter<Skill>` with a big
  `register("<type>", Class, Ctor::new)` table (`"tiered"`, `"talents"`, `"prestige"`,
  `"greed_tree"`, every talent/power/node type...).
- **The addon adds types by mixin** — `A:mixins\vaulthunters\skills\MixinSkill.java`:
  `@Mixin(Skill.Adapter.class)` + `@Inject(method="<init>()V", at=@At("RETURN"))` calling
  `this.register("mind_meld", ...)`, `this.register("reach_cap_power", ...)`, etc. There is no
  API call for this; the mixin is the mechanism. Client and server must register identically —
  the type string is written into bit streams and NBT.

### 3.2 Config JSON shapes

**Content configs** (`{ "tree": { "skills": [...] } }`):

```jsonc
// talents.json — 87 skills; per-tier values, costs, level gates
{ "type": "tiered", "id": "Intelligence", "name": "Intelligence", "maxLearnableTier": 4,
  "tiers": [ { "type": "gear_attribute", "attribute": "the_vault:ability_power", "value": 8.0,
               "learnPointCost": 1, "regretPointCost": 1, "unlockLevel": 0,
               "id": "intelligence_1" }, ... ] }

// prestige_powers.json — 44 skills; knowledge cost + greed-tier gate
{ "type": "tiered", "id": "Toolsmith", "name": "Echoing Hammersmith",
  "tiers": [ { "type": "tool_capacity_power", "capacityIncrease": 75,
               "learnPointCost": 0, "learnKnowledgeCost": 100, "regretPointCost": 1,
               "unlockLevel": 0, "tier": 2, "requiredGreedTier": 2 } ] }

// greed/greed_nodes.json — 118 nodes; binary, edges inline, no costs
{ "id": "off_t2_greed_reputation", "name": "+25% Greed Reputation", "present": false,
  "parent": "off_t3_skillpoint_1",          // or "parents": ["a","b"] — DAG supported
  "tier": 2, "reputationMultiplier": 0.25, "type": "greed_reputation" }
```

**GUI configs** — all use `iskallia.vault.config.entry.SkillStyle`
(`x, y, frameType, icon, inactiveIcon`), keyed by skill id:

```jsonc
// talents_gui_styles.json (62 entries — fewer than the 87 skills; unstyled = invisible)
{ "styles": { "Intelligence": { "x": 308, "y": 0, "frameType": "RECTANGULAR",
                                "icon": "the_vault:gui/skills/intelligence" } } }

// prestige_powers_gui_styles.json — ALSO has "headers" (the Tier 1..12 boxes)
{ "headers": [ { "text": "Tier 1", "x": -150, "y": -22, "width": 100, "height": 16,
                 "headerColor": -8355712, "textColor": -1, "containerHeight": 50 }, ... ],
  "styles":  { "EnderAnchorPower": { "x": -130, "y": 10, "frameType": "RECTANGULAR",
                 "icon": "the_vault:gui/prestige/the_anchor",
                 "inactiveIcon": "the_vault:gui/prestige/the_anchor_inactive" } } }

// greed/greed_gui_styles.json — icon is a FULL texture path here
{ "styles": { "off_t1_atk_ap_1": { "x": -137, "y": 212, "frameType": "CIRCLE",
                "icon": "the_vault:textures/gui/greed/nodes/attack_dmg_ability_power_percentage.png" } } }
```

**Shared configs:**

```jsonc
// skill_descriptions.json — vanilla text-component arrays, keyed by skill id
{ "descriptions": { "Cagerium": [ {"text": "Unlocks the "},
                                  {"text": "Cagerium", "color": "yellow"}, ... ] } }
// missing key → red "No description for <id>, yet" in the dialog.
// Locale variants: config/the_vault/lang/<locale>/skill_descriptions.json.
// Symbolic colors (e.g. "$text") resolved through colors.json at load.

// skill_gates.json — locks + connector arrows for talent-style screens
{ "SKILL_GATES": { "entries": { "Potent_Elixir": {
    "dependsOn": [ {"amount": 15, "type": "talent_points_spent"},
                   {"id": "Prudent", "type": "constant"} ],
    "lockedBy":  [ {"id": "Healthy_Elixir", "type": "constant"} ],
    "ignoreArrow": false } } } }
```

Gate types: `constant`, `either` in the base registry (`B:skill\SkillGates.java:28`);
`talent_points_spent` exists only in newer the_vault builds (the addon compiles against curse
file 8508967; the pack's 3.21.6 runtime has it — the decompiled 3.21.5 does not). Gates match
ids across **all** trees (talents + abilities + expertises), so cross-tree dependencies work.

### 3.3 Per-player data & sync

Same pattern for all three (`B:world\data\Player{Talents,PrestigePowers,GreedTree}Data.java`):
- SavedData holding `Map<UUID, Tree>`; a player's tree is lazily created as a **deep copy of the
  config tree**.
- **Config-change migration**: a `WorldTickEvent` watcher detects that `ModConfigs.X` was
  replaced (datapack reload / vhapi merge), then per-player `mergeFrom(newConfigTree)` re-applies
  learned state by matching ids and refunds/recomputes points. This is why config edits propagate
  to existing players without a wipe — and why **renaming an id is a destructive act** (greed
  strips unlocks of vanished ids via `removeOrphanedNodes`; talents refund the points).
- Sync to client: whole tree bit-serialized (`ArrayBitBuffer` long[]) in
  `Known{Talents,PrestigePowers}Message` / `GreedTreeMessage`, cached in static
  `Client{Talent,PrestigePowers,GreedTree}Data`. Sent on login and after every mutate.
- The *screen* gets its tree from the container's open-packet payload
  (`NBTElementContainer.getData()`), not from the client cache — except greed, which reads the
  cache. The client caches feed HUD/stat calcs (and the prestige radial).
- Points (skill/knowledge/prestige counts) travel separately in `VaultLevelMessage` →
  `VaultBarOverlay` statics.
- The base mod does **not** sync `config/the_vault/*.json` to clients — both sides read their
  own files (single-player: same files; server: clients need the pack). vhapi *does* sync its
  datapack-layer `vault_configs` to clients on login (`VHAPI.onLogin` → compressed JSON map),
  so datagen'd content is automatically client-correct.

---

## 4. Per-screen specifics

### 4.1 Talents (the reference implementation)

- Widget: `SkillWidget` frame state = one `vOffset` row into `skill_widget.png`
  (locked +62 / hover -31 / unlocked +31 / affordable 0). **There is no "maxed" frame** — maxed
  shows via filled pips + the `Learned` button label.
- Pips: up to 4 per row, filled = `getUnmodifiedTier()` — **gear bonusTier does not fill pips**.
- Lock = `SKILL_GATES.isLocked(id, tree) || vaultLevel < unlockLevel`; locked swaps to
  `inactiveIcon` when present.
- Learn: `TalentLevelMessage(id, true)`; server re-checks gates, `TieredSkill.learn` deducts
  `learnPointCost` from skill points. Regret (`false`) **costs Vault Gold** equal to
  `regretPointCost` and is blocked while an unlocked dependent exists.
- `GroupedSkill` (choice-of-N in one slot, e.g. old Javelin choices) is supported by
  `TalentPanRegion.initSkillWidget` — child styles become offsets relative to the parent style,
  wrapped in a `TalentGroupWidget` box. Wold's tree currently has **no** GroupedSkill; mutual
  exclusivity is done with `lockedBy` gates instead (renders as red double arrows).
- Talent scrolls: `B:item\TalentScrollItem.loadModels` reads `talents_gui_styles.json` **directly
  from disk** and requests a model `the_vault:skills/<last-path-segment-of-icon>` for every style
  entry — so every styled talent needs a scroll model (addon datagens these, §5.4).

### 4.2 Prestige Powers

- **Currency is knowledge points**, not prestige points: every pack entry has
  `learnPointCost: 0` and a real `learnKnowledgeCost` (50–2000). The screen overlay shows
  knowledge points. Prestige points exist in commands/stat sync but aren't spent here.
- **The real progression gate is `requiredGreedTier`** (checked against
  `PlayerGreedTreeData.getGreedTier`); the whole tab is scrimmed until vault level 100 + Herald
  completion (`ClientGreedData.isCompletedHerald`). The inner `tier` field is **cosmetic
  metadata** — nothing reads it; the "Tier N" grouping is purely the header + xy positions.
- Headers: `PrestigeHeaderStyle` list draws the 12 tier boxes. Empirical grid of the pack config:
  header `i`: `x = -150 + 130*(i%3)`, `y = -22 + 72*(i/3)`; power slot `j` under it:
  `x = header.x + 20 + 30*j`, `y = header.y + 32` (3 slots per header; all 36 currently full —
  a 13th tier needs a new header entry, hand-edited, see §5.3).
- No regret button (`updateRegretButton` sets it null); the server path still exists and would
  charge Vault Gold + refund knowledge.
- 8 powers currently have **no style entry** and are therefore invisible
  (`AetherSparkTrinket, CatDodge, ChainMiner, ElytraWings, RegenerationPower, ShadowCloakPower,
  TheCarapace, TripleJump`) — presumably intentional retirement, but it demonstrates the
  styles-drive-visibility rule.
- **Second screen**: the activation radial (`P` key) — `PrestigePowerSelectionScreen` +
  `PrestigeSelectionWidget`, built from `ClientPrestigePowersData.getLearnedActivatablePrestigeNodes()`
  (powers whose tier is an `ActivatePrestigePower`). Angle-based hit-test; click toggles via
  `ServerboundPrestigePowerToggleMessage`. Active state persists in SavedData NBT.
- Icons live in the **`the_vault` namespace even for addon powers**
  (`A:...\resources\assets\the_vault\textures\gui\prestige\*.png`, `<x>.png` + `<x>_inactive.png`
  pairs) because the PRESTIGE atlas sources that directory. `inactiveIcon` is shown when the
  greed tier is not reached — it means "gated", not "not learned".
- **Addon gotcha, load-bearing**: vanilla `TieredSkill.learn()` does **not** call the individual
  tier's overridden `learn()`. Any power whose effect happens *at learn time*
  (e.g. `CraftingRecipePower` unlocking a recipe) silently does nothing without
  `A:mixins\vaulthunters\fixes\MixinPrestigePowerLevelMessage.java`, which re-invokes
  `power.learn(context)` on the concrete tier after the vanilla call. New side-effectful powers
  need the same treatment.
- Addon power classes (`A:prestige\`): extend `PrestigePower`, **must** have a no-arg ctor, and
  override all serializer pairs calling super first: `writeNbt/readNbt`, `writeJson/readJson`,
  `writeBits/readBits`. Effects are consumed by mixins querying
  `PrestigePowerHelper.getPrestigePowersOfType(player, Type.class)` (or
  `ServerPrestigePowerHelper` by UUID, or the client cache).

### 4.3 Greed Tree

- **The screen is a fork, not a reuse**: `GreedElementContainerScreen` returns `null` from
  `getTabContent()` and inlines the pan+dialog composition; `GreedPanRegion` reimplements
  pan/zoom from scratch (zoom clamp 0.25–2.0); `GreedDialog` extends `AbstractDialog` directly.
  Behaviorally it matches the others, but code changes to the shared classes won't affect it.
- **Edges are data**: each node's `parent`/`parents` strings (multi-parent DAG supported;
  children derived by scan). No skill_gates involvement — connectors come straight from parents.
- **Unlock economy**: no coins/reputation spent on the tree. Budget =
  `greedTier × 3` (`GreedTree.getMaxUnlockableNodes`), root-type nodes free. Greed coins &
  reputation belong to the trader/cauldron economy; reputation drives tier-ups
  (`GreedConfig.tierThresholds`), tiers come from completing Greed Trial vaults
  (`RebirthObjective` → `incrementGreedTier`).
- Server validation (`GreedTree.canUnlockNode`): exists, not unlocked, budget remaining,
  root OR ≥1 parent unlocked. Nodes are **binary** — no ranks, no maxed state.
- Layout: `GreedPanRegion.update()` computes a radial fallback layout
  (depth × `greed_tree.json autoLayout.spacing`), but **any style entry overrides it** — and the
  pack styles every node, so the radial code is effectively dormant. A node without a style falls
  back to computed position **and renders with no icon**.
- Node size by `tier` (≥3 → 46px, ≥2 or root → 38, else 30); frame from `SkillStyle.frameType`;
  circle/star hit-test is radial. The single `isRoot()` node (`greed_root` only — wing roots
  have parents) renders the **player's skin head** instead of frame+icon.
- Tier-0 players see a dark scrim + "Take the Greed Trials to unlock Greed Nodes!" and clicks
  are swallowed.
- Dialog with no node selected shows the trial briefing (difficulty % from
  `greed\trials_screen.json`); with a node selected, description comes from the shared
  `skill_descriptions.json` keyed by node id.
- Respec: `GreedTree.resetAllNodes` — in-game via the addon's Greed Infused Neuralizer
  (`A:items\GreedTreeResetItem.java`, `woldsvaults:greed_neuralizer`). Single-node `lockNode`
  exists server-side but has no message/UI.
- **The greed trader screen is a different animal**: `GreedTraderScreen` is a modern
  element-framework screen (quests/challenges sub-screens, its own sync/buy messages) reached
  from the trader entity — none of the legacy pan/dialog machinery. Don't pattern-match it when
  building tree screens.
- Addon touches greed **behavior** (challenge cycling `MixinGreedTree`, quest auto-refresh
  `MixinPlayerGreedTreeData`, herald-discovery `MixinPlayerGreedData`) but adds **no nodes and no
  node types**.

**Dead greed config, do not edit expecting results:** `greed\greed_progression.json` (loaded,
never read), `greed_tree.json` → `tierFrameTextures` + `autoLayout.angleOffset` +
`autoLayout.startRadius` (no callers; only `spacing` and the center-node id are read), top-level
`P:greed.json` and `P:vault_greed_altar.json` (orphans — no config class claims those names;
the live files are the ones inside `P:greed\`).

---

## 5. The datagen pipeline (preferred authoring path)

### 5.1 How it works, end to end

1. **Providers** (`A:datagen\Mod*Provider.java`, registered in `DataGenerators.gatherData`)
   extend vhapi's `xyz.iwolfking.vhapi.api.datagen.Abstract*Provider` classes. Each binds a
   `configPath` and a typed `Builder`; `add("<fileName>", builder -> ...)` constructs a real
   `iskallia.vault.config.*Config` object and GSON-serializes it — **generated JSON is
   shape-identical to the pack's `config/the_vault/` files.**
2. `gradlew runData` writes to `src/generated/resources/data/woldsvaults/vault_configs/<configPath>/<fileName>.json`.
   `build.gradle:152` adds `src/generated/resources` to main resources → **ships inside the jar**.
   The `com.radimous.vh-addon-dev` plugin pulls the pack zip into `run-data/config/the_vault/`
   so provider helpers can read live `ModConfigs` at generation time (that's how the
   description helpers append to *existing* pack descriptions).
3. **Runtime**: vhapi's `VHAPIDataLoader` (a `SimpleJsonResourceReloadListener` over
   `vault_configs`) collects every `data/*/vault_configs/**.json` from all mods/datapacks. After
   the_vault's own configs load, each registered **loader** (`VaultConfigProcessor` subclass)
   filters entries by its directory prefix, deserializes them into the config class, and merges
   into the live `ModConfigs.*` in its `afterConfigsLoad`.
4. **Merge mode is chosen by filename substring**: contains `remove` / `replace` / `overwrite`
   (per-loader; see table) — anything else appends/merges. Watch out: `overrides` does **not**
   match `overwrite` (Wold's `wolds_skill_gate_overrides.json` is a plain merge, deliberately).
5. On login vhapi sends the compressed merged `vault_configs` map to the client
   (`VHAPIConfig.SERVER.syncDatapackConfigs`), so clients see the same merged data.
6. The SavedData config-merge watchers (§3.3) then migrate existing players.

### 5.2 Loader → merge semantics for this domain (vhapi 5.8.0)

| `vault_configs/` dir | Config merged into | Merge behavior (filename keywords) |
|---|---|---|
| `talents/talents` | `ModConfigs.TALENTS.tree.skills` | append; `remove` = drop matching ids; `replace` = swap tiers+maxLearnableTier of matching ids |
| `talents/talent_gui` | `TALENTS_GUI.styles` | per-key `putAll` only (no keywords; the `overwrite/` folder prefix Wold's uses is **cosmetic**) |
| `prestige/powers` | `PRESTIGE_POWERS.tree.skills` | append; `remove`; `replace` (swap tiers) |
| `prestige/prestige_gui` | `PRESTIGE_POWERS_GUI` | per-key `putAll`; `remove`; **`overwrite` replaces the whole config and wipes `headers` — never use it** |
| `skill/gates` | `SKILL_GATES.gates.entries` | per-key put; `remove`; `overwrite` (wholesale) |
| `skill/descriptions` | `SKILL_DESCRIPTIONS.descriptions` | `putAll` (+ color-string substitution); later keys win |
| `expertise/expertises`, `expertise/expertise_gui` | expertise equivalents | same pattern as talents |
| `abilities/ability_gui` | `ABILITIES_GUI` | putAll; `remove`; `overwrite`; **`add_spec`** merges specialization styles into existing ability styles |
| `greed/cauldron` | `GREED_CAULDRON.demands` | append; `remove` / `replace` matched **by item** |
| `greed/trader` | — | **NO-OP.** `GreedTraderConfigLoader.afterConfigsLoad` is an empty body in 5.8.0. See below. |
| *(greed nodes / tree / gui styles)* | — | **No loader exists at all.** Pack config is the only source. |

**The greed/trader trap**: `A:datagen\ModGreedTraderProvider.java` emits
`greed/trader/wolds_greed_challenges.json` into the jar, but the loader merges nothing — the
addon's trader datagen is **dead data at runtime**. It goes unnoticed because the pack's
`P:greed\greed_trader.json` independently contains all 22 challenges (verified: `rage_cage`,
`ultra_hard`, etc. are present there). Treat the pack file as the live source for trader content
until vhapi implements that loader.

Version note: agents cross-read the addon's compile-time vhapi 5.6.0 and my decompile of the
runtime 5.8.0; all loader behaviors above matched between the two except none contradicted —
but if vhapi is bumped, re-verify this table (it is the load-bearing part of the pipeline).

### 5.3 What can and cannot be datagen'd (current reality)

| Content | vhapi provider | Addon provider status | Live today? |
|---|---|---|---|
| Talent definitions | `AbstractTalentProvider` (`talents/talents`) | `ModTalentsProvider` — **BUG: extends `AbstractTalentStyleProvider` (copy-paste), body empty → emits nothing.** Content is hand-kept in `P:talents.json` (87 skills incl. Wold's) | ✗ (fixable) |
| Talent layout/styles | `AbstractTalentStyleProvider` (`talents/talent_gui`) | `ModTalentStyleProvider` — **LIVE**; emits `overwrite/wolds_talents.json` (62 styles), content-identical to `P:talents_gui_styles.json` | ✓ |
| Skill gates | `AbstractSkillGatesProvider` (`skill/gates`) | `ModSkillGatesProvider` — LIVE (3 files) | ✓ |
| Skill descriptions | `AbstractSkillDescriptionsProvider` (`skill/descriptions`) | `ModSkillDescriptionsProvider` — LIVE (7 files, incl. talent overlevels + prestige prose) | ✓ |
| Prestige powers | `AbstractPrestigePowerProvider` (`prestige/powers`) | `ModPrestigePowersProvider` — registered but body **fully commented out**; powers hand-kept in `P:prestige_powers.json` | ✗ (fixable) |
| Prestige styles | `AbstractPrestigePowerStyleProvider` (`prestige/prestige_gui`) | `ModPrestigePowerStylesProvider` — commented out. **Builder has `addStyle` only — `headers` can never be datagen'd**; new tier rows are always a hand-edit to `P:prestige_powers_gui_styles.json` | ✗ |
| Greed trader challenges | `AbstractGreedTraderProvider` | `ModGreedTraderProvider` — emits, but **runtime loader is a no-op** (§5.2) | ✗ (vhapi gap) |
| Greed cauldron demands | `AbstractGreedCauldronProvider` | `ModGreedCauldronProvider` — LIVE | ✓ |
| Greed tree nodes / styles | **none** | — | ✗ (pack config only) |

So the honest current split, per screen:
- **Talents**: styles/gates/descriptions datagen'd; *definitions* in pack config (until
  `ModTalentsProvider` is fixed to `extends AbstractTalentProvider`).
- **Prestige**: descriptions datagen'd; definitions + styles + headers in pack config
  (providers exist ready to be uncommented; headers stay manual regardless).
- **Greed tree**: everything in pack config (`P:greed\greed_nodes.json`,
  `greed_gui_styles.json`, `skill_descriptions.json`), by necessity.

### 5.4 Provider APIs & the addon's authoring conventions

**Talent definitions** (`AbstractTalentProvider.Builder`) — ~26 typed methods, all
`(id, name, maxLearnableTier, unlockLevel, learnPointCost, numberOfTiers, ...scaling fns...)`:
`addGearAttributeTalent`, `addEffectTalent`, `addVanillaAttributeTalent`, `addPuristTalent`,
`addStackingGearAttributeTalent`, lucky-hit/on-hit/on-kill/javelin variants, plus generic
`addTalent(id, name, maxTier, unlockLevel, cost, nTiers, IntFunction<LearnableSkill>)` for
custom types. Example (the commented-out reference in `ModTalentsProvider`):

```java
add("replace/intelligence", b -> b.addGearAttributeTalent(
    "Intelligence", "Intelligence", 8, 0, 1, 100,
    ModGearAttributes.ABILITY_POWER, i -> 10 * i));
```

**Talent layout DSL** (`A:datagen\lib\WoldsTalentStyleProvider.java`) — the pattern to copy for
any grid-style tree: `addRow(startX, y, frame, List<TalentElement>)` walks left→right at 64px
spacing (`addRowBelow` = +80px). Elements: `TalentData(name, icon[, inactiveIcon, frame])`,
`ChoiceGroup(List<TalentData>)` (stacks N in one column slot), `EmptySpace(px)`. Rows in use:
Core y=0 / Advanced 80 / Specialisation 160 / Greater 240 / Finale 320, `startX = -332`.

**Prestige powers** (`AbstractPrestigePowerProvider.Builder`):

```java
add("wolds_powers", b -> b.add("SpiritsHand", "Spirit's Hand",
    /*pointCost*/ 25, /*knowledgeCost*/ 1250, /*unlockLevel*/ 100, /*regretCost*/ 1,
    /*tier*/ 7, /*tierLock→requiredGreedTier*/ 6, /*numberOfTiers*/ 3,
    tier -> new ReachPrestigePower(0.5F + 0.25F * tier)));
```
Builder quirks (differ from the hand-written config!): per-tier ids get a **0-based** suffix
(`spiritshand_0`) vs the pack's `_1` convention; `tierLock` is applied to tier 0 **only**; the
outer regret cost is hardcoded 1. Harmless, but don't mix builder output and hand entries for
the same id.

**Descriptions** (`AbstractSkillDescriptionsProvider.Builder.addDescription(id, jsonArray -> ...)`)
with `JsonDescription.text/simple(text[, color])` pieces. Two helpers worth reusing:
- `A:api\util\datagen\TalentDescriptionsHelper.appendOverlevelDescription(...)` — copies the
  *existing* pack description and appends the overlevel paragraph (reads `run-data` configs).
- `A:api\util\datagen\PrestigePowersDescriptionsHelper.generateDescriptions(...)` — walks the
  live prestige config and appends an auto-generated per-tier numeric line per power type
  (extend its `processPrestigeDescriptionByType` instanceof chain for new types).

**Gates** (`AbstractSkillGatesProvider.Builder`):
```java
builder.add("Potent_Elixir", e -> {
    e.dependsOn(t -> { t.add(new TalentPointsSpentSkillGate(15)); t.constant("Prudent"); });
    e.lockedBy(l -> l.constant("Healthy_Elixir"));
});
```

**Icons & models**: talent icons → `assets/woldsvaults/textures/gui/skills/<name>.png` (16×16,
auto-stitched, reference `woldsvaults:gui/skills/<name>`); prestige icons →
`assets/the_vault/textures/gui/prestige/<name>.png` + `_inactive` pair (must be `the_vault`
namespace); every styled talent also needs a scroll model via
`ModItemModelProvider.skillScroll("<name>")` (matches the icon's last path segment).

**Dual-layer caution**: several things exist in BOTH the pack config and the addon jar layer
(talent styles today; trader challenges). The loaders merge jar-on-top-of-pack, so duplicates
are usually benign for maps (per-key overwrite) but **`tree.skills` appends** — shipping the
same skill id in both `P:talents.json` and a `talents/talents` datagen file would duplicate the
node. Pick one home per id.

---

## 6. Recipes

### 6.1 Add a talent (datagen-preferred)

1. *(one-time fix)* Make `A:datagen\ModTalentsProvider` actually `extends AbstractTalentProvider`
   and give `registerConfigs()` a body; **or** keep adding definitions to `P:talents.json`
   (current practice).
2. Definition: `add("wolds_talents", b -> b.addXxxTalent("My_Talent", "My Talent", ...))`
   → `vault_configs/talents/talents/wolds_talents.json` (appends at runtime).
3. Layout: add `new TalentData("My_Talent", "woldsvaults:gui/skills/my_talent")` to the right
   row in `ModTalentStyleProvider` (mind `EmptySpace` alignment). Without a style the talent is
   invisible.
4. Icon: `assets/woldsvaults/textures/gui/skills/my_talent.png` (16×16).
5. Description: `ModSkillDescriptionsProvider` → `builder.addDescription("My_Talent", ...)`;
   plus `TalentDescriptionsHelper.appendOverlevelDescription` if `tiers.length > maxLearnableTier`.
6. Gates/arrows: `ModSkillGatesProvider` → `builder.add("My_Talent", e -> ...)`. No gate entry =
   unconnected, always-unlockable island (arrows come from gates, not from any parent field).
7. Scroll model: `ModItemModelProvider.skillScroll("my_talent")`.
8. Custom behavior only: new class under `A:talent\**` + `MixinSkill.addSkills` registration of
   its `"type"` string, then use that type in the tier factory/JSON.
9. `gradlew runData`, commit regenerated JSON with the source change.

### 6.2 Add a prestige power

**Instance of an existing type** — currently: hand-edit `P:prestige_powers.json` +
`P:prestige_powers_gui_styles.json` (grid formula §4.2; all 36 slots full — a new tier needs a
hand-added header). Datagen path: uncomment/author `ModPrestigePowersProvider` +
`ModPrestigePowerStylesProvider` (§5.4) — remembering headers stay manual and the same id must
not also remain in the pack file.
Then: icon pair in `assets/the_vault/textures/gui/prestige/`, description in
`ModSkillDescriptionsProvider.getBuiltInPrestigePowers()`.

**New Java type** — additionally: class in `A:prestige\` (no-arg ctor + the three serializer
pairs), register in `MixinSkill`, consume via `PrestigePowerHelper` from a mixin/event, extend
`PrestigePowersDescriptionsHelper.processPrestigeDescriptionByType` for the auto tier line, and
**if `learn()` has side effects, extend `MixinPrestigePowerLevelMessage`** (§4.2 gotcha).
Toggleable powers extend `ActivatePrestigePower` and appear automatically in the P-key radial
once learned.

### 6.3 Add a greed node (pack config only — no datagen exists)

1. `P:greed\greed_nodes.json` → append to `tree.skills`:
   ```json
   { "id": "util_t2_my_node", "name": "+5% Whatever", "present": false,
     "parent": "util_t1_reach_2", "tier": 2,
     "entries": [ { "attribute": "the_vault:item_rarity", "value": 0.05 } ],
     "type": "greed_gear_attribute" }
   ```
   (`parents: [..]` for multi-parent. `tier` = size/fallback radius, not cost. Registered-but-
   unused types available: `greed_stat_boost`, `greed_ability_upgrade`, `greed_meta_progression`,
   `greed_vault_time`.)
2. `P:greed\greed_gui_styles.json` → `"util_t2_my_node": { "x":…, "y":…, "frameType":"CIRCLE",
   "icon":"the_vault:textures/gui/greed/nodes/foo.png" }` — full texture path, 16×16 file must
   exist (reuse one or ship via addon assets/resource pack).
3. Optional: `P:skill_descriptions.json` entry keyed by the node id.
4. Reload/restart — `PlayerGreedTreeData` auto-merges into existing players, preserving unlocks.
   **Never rename existing ids** (unlocks stripped as orphans).
5. New node *type* = Java: subclass `GreedNode` (serializers + `onUnlock`/`onRemove`), register
   in `Skill.Adapter` via `MixinSkill`, and add an aggregator in the `GreedNodeHelper` style +
   call site — nothing consumes a new type automatically.

### 6.4 Build a brand-new screen of this kind

Realistic addon-side options, in increasing effort:

- **(a) Standalone screen, own opener** — the fully-supported path. Copy the talent vertical:
  tree class (extend `SkillTree` to reuse `SkillsElementContainerScreen` + `SkillPanRegion` +
  `SkillDialog` generics), `NBTElementContainer` MenuType + screen registration **in your own
  mod's registries**, your own open message (keybind/item/block), your own GUI-styles config via
  a vhapi-loader-style datapack file or plain addon config. You get pan/zoom, styles-driven
  layout, gates arrows, dialog and learn flow for free.
- **(b) New tab in the shared strip** — needs base-mod edits or mixins into:
  `SkillTabContainerElement` (icon array + switch — the one hard touch point),
  plus your `ServerboundOpenXxxMessage` registered on **your own** network channel (don't renumber
  the_vault's), MenuType + `MenuScreens.register`, `ScreenTextures`-style tab icon (drop
  `tab_icon_<name>.png` into a screen-atlas-scanned dir), and a screen extending
  `LegacySkillTreeElementContainerScreen` implementing `getTabIndex()` (next free = 7),
  `getTabTitle()`, `getTabContent()` → `SplitTabContent(this, dialog, panRegion)`, and
  `renderPointOverlay`. Remember: `getTabContent()` runs before your ctor body; strip width is
  `31*i - 10` so watch collisions past ~8 tabs.
- **(c) The greed route (fork everything)** — only if the split layout itself must change
  (modal confirmations, non-55% split, custom container payload). Budget for reimplementing
  pan/zoom/persistence and border rendering; use `GreedElementContainerScreen` +
  `GreedPanRegion` as the donor.

Checklist of registration touch points for (b) — the full list with line refs is in §2.4:
MenuType field+factory+registry name → open message+handler → network registration →
`MenuScreens.register` → tab strip entry → tab icon asset → (optional) per-node atlas
(`ModTextureAtlases` pattern) → GUI-styles config + loader if datagen-driven.

---

## 7. Gotchas compendium (hard-won, verify before assuming otherwise)

1. **No style entry → invisible node** — the pan regions iterate the styles map, not the tree
   (talents: 87 skills / 62 styles; prestige: 44 / 36).
2. **`ModTalentsProvider` extends the wrong base class** (`AbstractTalentStyleProvider`) with an
   empty body — talent-definition datagen is silently a no-op today.
3. **`GreedTraderConfigLoader` is an empty no-op** (vhapi 5.8.0) — greed trader datagen output
   ships but never merges; the pack config carries the real trader content.
4. **Prestige `headers` cannot be datagen'd** (style builder has `addStyle` only) and a
   `*overwrite*` filename in `prestige/prestige_gui` wholesale-replaces the GUI config and wipes
   headers.
5. **`TieredSkill.learn()` doesn't dispatch to tier subclasses' `learn()`** —
   `MixinPrestigePowerLevelMessage` exists solely to fix this for `CraftingRecipePower`; every
   new side-effectful power needs the same.
6. **Optimistic client learn** — `SkillDialog.upgradeSkill` applies `learn()` locally before the
   server validates; rejection leaves a cosmetic desync until the next sync message.
7. **Renaming skill ids is destructive** — SavedData merge matches by id; greed strips orphaned
   unlocks, talents refund points.
8. **Filename keyword traps** — merge mode = substring match on the *file path*: `remove`,
   `replace`, `overwrite`, `add_spec` (abilities only). `overrides` ≠ `overwrite`. The
   `overwrite/` folder in talent-style output is cosmetic (that loader has no overwrite branch).
9. **`talent_points_spent` gate type** exists only in newer the_vault builds — fine on the pack's
   3.21.6 runtime, absent from the 3.21.5 decompile; don't test against the old jar.
10. **Prestige `tier` field is cosmetic**; the real gate is `requiredGreedTier`. Grouping is
    positional.
11. **Greed icons are full texture paths; talent/prestige icons are atlas sprite ids** — and
    prestige icons must live in the `the_vault` namespace, while talent icons can live in
    `woldsvaults` (vhapi stitch mixins).
12. **Dead code/config**: `AbstractPanWidget` (no references — don't build on it),
    `greed_progression.json`, `greed_tree.json` frame textures/angle/radius fields, top-level
    `greed.json` + `vault_greed_altar.json`, `MagnetMasteryPrestigePowerAccessor` (empty mixin),
    Archetypes tab (`TAB_INDEX` collides with Researches, unreachable from the strip),
    `prestige_powers_OLD.json` / `prestige_powers_gui_styles_OLD.json` (inert backups —
    `getName()` is hardcoded).
13. **Static pan/zoom persistence** is keyed by pan-region class and never cleared — a new pan
    region class gets its own; a reused class shares state across worlds.
14. **`SkillPanRegion` widgets only render `TieredSkill`s whose parent isn't a `GroupedSkill`**;
    grouped children get offset-styles + a group box instead.
15. **The greed screen's `GreedContainer` carries no tree** — it relies on `ClientGreedTreeData`
    having been synced; the other screens deserialize the tree from the open packet.
