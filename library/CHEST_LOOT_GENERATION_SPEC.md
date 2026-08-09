# Wold's Vaults — Chest Loot Generation: Code & Config Reference

**Purpose.** A ground-truth map of *how a Vault Hunters / Wold's Vaults chest decides what items to
spawn when a player opens (or breaks) it.* Written so an agent that has never seen this codebase can
start modifying the **loot pools / loot groups** — and make them "responsive to Item Quantity and
Item Rarity" — without re-deriving the pipeline.

**Scope.** This is about loot *content generation* (what comes **out** of a chest). It is **not**
about chest *placement / spawning* (where chests appear, how many, decorator_add/cascade, jigsaw
room assembly) — that's a separate code chain documented elsewhere (the `wv-chest-sim` /
`routerunner` projects). The two only meet at one field: the placed chest block carries an NBT
`LootTable` key that this pipeline later resolves (see §7).

**Every file:line below was read directly from the decompiled jars on 2026-07-02.** Verify against
the code before relying on any citation — decompiled line numbers drift if the jar is re-decompiled.

---

## 0. Where the code lives (and how to read it)

This modpack repo (`C:\Users\river\Wolds-Vaults`) is **packwiz pointers + a data/config layer only** —
no Java is committed here. Two jars hold the actual loot code; both are already decompiled on disk:

| What | Decompiled root | Java package | Source |
|---|---|---|---|
| **Base mod** `the_vault` (Vault Hunters 3rd Ed.) — closed source | `C:\Users\river\wv_decompile\target_decompiled\` | `iskallia.vault.*` | CurseForge project `458203`, jar `the_vault-1.18.2-3.21.5.6573.jar` |
| **Addon** `woldsvaults` (Wold's Vaults Tweaks & Compat) — **open source** | `C:\Users\river\wv_decompile\addon_decompiled\` | `xyz.iwolfking.woldsvaults.*` | `github.com/iwolfking/Wolds-Vaults-Official-Mod`, CF project `958799`, jar `wolds-vaults-official-mod-0.31.6.jar` |
| **Editable data layer** (loot tables, configs — *this is what you refactor*) | `C:\Users\river\Wolds-Vaults\config\the_vault\` | — (JSON) | this repo |

**Re-decompile workflow** (if the jars change): the jars ship inside CurseForge instances
(`C:\Users\river\curseforge\minecraft\Instances\...\mods\`); decompile with CFR
(`repo1.maven.org/maven2/org/benf/cfr/0.152/cfr-0.152.jar`) using the bundled JRE at
`C:\Users\river\curseforge\minecraft\Install\java\Jre_21\bin\java.exe`. The jar has ~7700 classes —
binary-grep the raw `.class` files for string literals first, then CFR only the classes you need.

**Golden rule for this pack:** for *any* "how does mechanic X work" question, check **both** jars.
The base jar gives you the vanilla VH mechanic; `woldsvaults`' `mixins/vaulthunters/` package often
silently rewrites it. Loot quantity is a live example (§6.3).

---

## 1. The pipeline at a glance

When a chest is first opened/broken and needs to fill itself:

```
VaultChestTileEntity.generateChestLoot()               ← trigger (not shown; calls the below)
  └─ CHEST_LOOT_GENERATION event (PRE)  → resolves which LootTable the chest uses
  └─ generateLootTable(version, player, loot, random)   ← target_decompiled …/block/entity/VaultChestTileEntity.java:268
        ├─ quantity = ItemQuantityHelper.getItemQuantity(player)   (+ chest's own itemQuantity field)
        ├─ rarity   = ItemRarityHelper.getItemRarity(player)       (+ chest's own itemRarity field)
        ├─ key = VaultRegistry.LOOT_TABLE.getKey(chest.lootTable)  ← resolves NBT key → LootTable object
        ├─ if TREASURE_CHEST:  new LootTableGenerator(version, key, 0.0f)          ← plain, no rarity, no cap
        └─ else:               new TieredLootTableGenerator(version, key, rarity, quantity, 54)  ← the main path
              └─ generator.generate(random)
                    ├─ LOOT_GENERATION event (PRE)   ← crystal modifiers add to itemQuantity/itemRarity HERE
                    ├─ roll count  = f(base roll, itemQuantity)     ← §6.1, log-compressed by addon mixin
                    ├─ generateEntry(): draw `roll` items, rarity reweights sub-pools  ← §6.2
                    ├─ cdf = percentile of the draw vs. base weights ← §6.4 (drives displayed tier)
                    └─ LOOT_GENERATION event (POST)  ← crystal modifiers remove their bonus HERE
        └─ chest.rarity = VAULT_CHEST.getRarity(cdf)   ← Common/Rare/Epic/Omega label   ← §8
  └─ CHEST_LOOT_GENERATION event (POST)
  └─ fillLoot(): merge/split stacks, shuffle into the chest's 27 (or 54 for treasure) slots
```

**Two takeaways that define the whole design:**
- **Item Quantity → controls *how many rolls* (draws)**, nothing else. More quantity = more items, same odds.
- **Item Rarity → controls *the weighting between sub-pools***, nothing else. More rarity = draws shift
  toward the rarer sub-pools. It does **not** add rolls.

---

## 2. Entry point — `VaultChestTileEntity` (base mod)

`target_decompiled/iskallia/vault/block/entity/VaultChestTileEntity.java`

- **`generateLootTable(...)` — lines 268–292.** The branch that picks the generator:
  - `quantity`/`rarity` computed at **269–272**. Vault **barrels** force both to `0.0f`
    (`instanceof VaultBarrelBlock`). Otherwise `quantity = ItemQuantityHelper.getItemQuantity(player)`
    and `rarity = ItemRarityHelper.getItemRarity(player)`, then **the chest's own baked fields are
    added**: `rarity += this.itemRarity; quantity += this.itemQuantity;` (271–272). Those two fields
    let a specific placed chest carry a static bonus.
  - `key = VaultRegistry.LOOT_TABLE.getKey(this.f_59605_)` (**273**) — `f_59605_` is the chest's
    current `LootTable` (set from the `CHEST_LOOT_GENERATION` PRE event at **250**, which reads the
    block's NBT `LootTable` key — see §7).
  - **Treasure chest** (`ModBlocks.TREASURE_CHEST`, line **275**): `new LootTableGenerator(version, key, 0.0f)`
    — item-quantity forced to 0, rarity label hard-set to `COMMON` (**279**). Treasure chests are
    structurally exempt from the tiered system.
  - **Everything else** (**281–286**): `new TieredLootTableGenerator(version, key, rarity, quantity, 54)`.
    The trailing `54` is `maxRolls` — the hard cap on roll count. After generating, the displayed tier
    is `this.rarity = ModConfigs.VAULT_CHEST.getRarity(generator.getCDF())` (**285**).
- **Slot count:** `TREASURE_CHEST ? 54 : 27` recurs at 262/301/316 — treasure chests are double
  chests (54 slots), all other vault chests are single (27).

---

## 3. Stat sourcing — how Item Quantity / Item Rarity are computed

`target_decompiled/iskallia/vault/util/calc/ItemQuantityHelper.java` and `ItemRarityHelper.java`

Both sum the gear attribute across the player's equipped gear, then run a moddable hook:

- **`ItemQuantityHelper.getItemQuantity(entity)` — lines 20–27:**
  1. `snapshot.getAttributeValue(ModGearAttributes.ITEM_QUANTITY, floatSum())` — plain **additive** sum
     of the `the_vault:item_quantity` attribute across all gear (no diminishing returns here). (23)
  2. `CommonEvents.PLAYER_STAT.invoke(PlayerStat.ITEM_QUANTITY, entity, result)` — moddable stat hook. (24)
  3. `result *= ModGameRules.LOOT multiplier; result += (LOOT multiplier − 1)` — a server-wide `LOOT`
     gamerule scales quantity. (25–26)
- **`ItemRarityHelper.getItemRarity(entity)` — lines 18–23:** identical shape but **only** steps 1–2
  (gear sum of `the_vault:item_rarity` + `PLAYER_STAT.ITEM_RARITY` hook). **No gamerule multiplier.**

Result is a fraction, e.g. `+300%` quantity → `3.0`. These raw values are what feed §6. The gear
attribute ids (`item_quantity`, `item_rarity`, and crafted/mod variants) are defined in
`config\the_vault\gear_modifiers\*.json` and are good grep anchors.

---

## 4. Item Quantity & Item Rarity — the exact effect (summary)

| Stat | What it scales | Where | Shape |
|---|---|---|---|
| **Item Quantity** | Roll **count** (number of draws from the table) | `TieredLootTableGenerator.generate` §6.1 | `E[rolls] = min(baseRoll·(1 + Q), 54)` — **but** the addon mixin rewrites `Q → 1.1·ln(Q+1)`, so it's **logarithmic & capped** in this pack |
| **Item Quantity (per-item)** | Stack **size** of specific items only | `itemQuantityOverrides` §6.2/§9 | linear, only if a crystal modifier set an `ItemPredicate` filter |
| **Item Rarity** | **Weight** of sub-pools 2..N (not the first) | `TieredLootTableGenerator.generateEntry` §6.2 | `weight_i · (1 + R)` for i≥1; **linear, uncapped** |

Neither stat changes *which items* are in a pool or a single item's base weight — only how many
draws happen and how the draws are distributed across the sub-pools.

---

## 5. The loot-table data model (what the JSON deserializes into)

All in `target_decompiled/iskallia/vault/core/world/loot/`:

- **`LootTable.java`** — a list of **`Entry`** (lines 115–163). Each `Entry` = `{ IntRoll roll, LootPool pool }`.
  JSON: `{"entries":[{"roll":{...}, "pool":[...]}]}`. `roll` is an `IntRoll` (`{"type":"uniform","min":..,"max":..}`
  or a constant) = the **base** number of draws before quantity scaling.
- **`LootPool.java`** — `extends WeightedTree<LootEntry>` (lines 31–71). A pool's `getChildren()` is a
  **`WeightedList<Object>`** where each child is **either** a nested `LootPool` (a sub-pool / "tree")
  **or** a leaf `LootEntry`. `getRandomFlat(version, random)` picks a weighted child, recursing into
  sub-pools, then `flatten()`s to a concrete entry.
- **`WeightedTree.java`** (`…/core/util/`) — the recursion engine. `getRandom(...)` (52–73) weighted-picks
  a child; if it's another `WeightedTree`, recurse; else return the leaf. There's a variant with a
  `step` callback (65–73) that `TieredLootTableGenerator` uses to count which top-level sub-pool got hit.
- **`entry/LootEntry.java`** — interface: `getStack`, `getOverStack`, `flatten`, `validate`.
  - **`entry/ItemLootEntry.java`** — a concrete item. Fields `item, nbt, count(IntRoll)` (41–55). JSON is
    either a bare string `"the_vault:vault_diamond"` **or** `{"id":"…","nbt":{…},"count":{…}}`
    (read/write at 129–217). `flatten` returns itself.
  - **`entry/ReferenceLootEntry.java`** — an indirection to a **named shared pool**. Field `reference`
    (ResourceLocation). JSON `{"reference":"the_vault:some_pool_id"}`. `flatten` (58–64) resolves via
    `VaultRegistry.LOOT_POOL` and draws from it. **This is the mechanism for shared "loot groups"** —
    the current chest tables don't use it (they're fully inline), but you can factor common item sets
    into `config\the_vault\gen\1.0\loot_pools\*.json` and reference them (see §7, `rune_0.json`).

### Concrete tiered-table example
`config\the_vault\gen\1.0\loot_tables\gilded_chest_50.json` (level-50 gilded chest):

```jsonc
{ "entries": [ {
  "roll": { "type": "uniform", "min": 12, "max": 15 },   // base draws before quantity scaling
  "pool": [
    { "weight": 70, "pool": [ /* sub-pool A: common — NEVER gets the rarity bonus */ ] },
    { "weight": 20, "pool": [ /* sub-pool B: gets weight×(1+rarity) */ ] },
    { "weight":  4, "pool": [ /* sub-pool C: gets weight×(1+rarity) */ ] },
    { "weight":  2, "pool": [ /* sub-pool D: rarest — gets weight×(1+rarity) */ ] }
] } ] }
```

This exact shape (**1 entry; top pool with exactly 4 sub-pools, all pools**) is what
`TieredLootTableGenerator.supports()` checks — see §6.5 before you change the sub-pool count.

---

## 6. The core generator — `TieredLootTableGenerator` (base mod)

`target_decompiled/iskallia/vault/core/world/loot/generator/TieredLootTableGenerator.java`
(extends `LootTableGenerator.java` in the same package).

### 6.1 Roll count (Item Quantity) — `generate()` lines 98–129
1. `LOOT_GENERATION` PRE event fires (**100**) — *crystal modifiers inject their quantity/rarity here.*
2. `entry = table.getEntries().get(0)` (**101**); `roll = entry.getRoll().get(random)` (**102**) — base draws.
3. Version branch (this pack runs the newest, `Version.latest()`, so the **third** branch, **108–116**):
   ```java
   fRoll = roll * (1.0f + this.itemQuantity);
   roll = 0;
   while (fRoll > 0 && random.nextFloat() < fRoll) { roll++; fRoll -= 1; }  // stochastic rounding
   roll = Math.min(roll, this.maxRolls);                                    // maxRolls = 54
   ```
   So `E[rolls] = min(baseRoll·(1+itemQuantity), 54)`.

### 6.2 Sub-pool reweighting (Item Rarity) + per-item quantity — `generateEntry()` lines 131–164
- Builds an `adjustedPool`: iterating the top pool's children, **index 0 keeps its base weight**
  (**140**), **every other child is multiplied by `(1 + itemRarity)`** (**138**). So rarity boosts
  sub-pools B/C/D but never A. As `R→∞`, A's share → 0 and B/C/D converge to their weight ratio
  among themselves (linear in `1/R`, not exponential).
- Draws `roll` times (**144**). Each draw records which top sub-pool was hit (`frequencies[]`, for the
  CDF) and produces the item.
- **Per-item quantity** (**153–160**): a drawn stack's amount is scaled by `itemQuantityOverrides`
  (an `ItemPredicate → Float` map) if any predicate matches, via the same stochastic-rounding loop.
  This map is normally empty; it's populated by filtered `LootItemQuantityModifier`s (§10). Note this
  is **separate** from the global roll-count quantity — it changes stack size for matched items only.

### 6.3 The Wold's Vaults override — quantity is log-compressed
`addon_decompiled/xyz/iwolfking/woldsvaults/mixins/vaulthunters/MixinTieredLootTableGenerator.java`

```java
@ModifyExpressionValue(method="generate",
    at=@At(value="FIELD", target="…/TieredLootTableGenerator;itemQuantity:F", opcode=180))  // GETFIELD
private float alterItemQuantityScaling(float originalValue) {
    return 1.1f * (float) Math.log(originalValue + 1.0f);
}
```
This wraps **every read of `itemQuantity` inside `generate()`**, so the effective roll formula in this
pack is:
```
E[rolls] = min( baseRoll · (1 + 1.1·ln(rawItemQuantity + 1)), 54 )
```
**Brutally diminishing.** Raw `+700%` (Q=7) → factor `1+1.1·ln(8) ≈ 3.29×`, i.e. an *effective* +229%.
The 54 cap is effectively unreachable (needs raw Q north of ~+1400%). Applied **unconditionally**
(an early build had an `if (originalValue<=1) return originalValue` guard; it was removed and is **not**
in the shipped 0.31.6 jar). **No equivalent mixin touches `itemRarity`** — rarity is the plain,
uncapped linear `(1+R)` from §6.2. If your refactor wants a different quantity curve, this mixin is
the single place the pack already changes it.

### 6.4 Displayed-tier percentile — the `CDF` inner class (lines 189–301)
After the draw, `generate()` computes `cdf = CACHE.computeIfAbsent(new CDFKey(key), CDF::new).get(frequencies)`
(**127**). The `CDF` is the exact multinomial CDF of the observed sub-pool hit-distribution **under the
unboosted base weights**. Lower cdf = the draw landed more in the rare sub-pools than baseline predicts.
This percentile — **not** the items themselves — is what assigns the chest's Common/Rare/Epic/Omega
label (§8). (Rarity boosting the draws makes low-cdf outcomes more likely, which is why more Item
Rarity ⇒ more Omega-labelled chests.)

### 6.5 ⚠️ The 4-sub-pool invariant — read before restructuring pools
- **`supports(table)` (76–84):** true iff the table has **exactly 1 entry**, its top pool has **exactly
  4 children**, and **all 4 are `LootPool`s** (no bare item leaves at the top level).
- **`addCache(table)` (61–74):** pre-computes the CDF distributions for roll counts 1..53.
- **Only caller:** `ModConfigs.java:727–733` — on config (re)load, `clearCache()` then for every loot
  table `if (!supports(table)) continue; addCache(table);`.

**What this means for a refactor:**
- The chest **always** uses `TieredLootTableGenerator` for non-treasure chests **regardless** of
  `supports()`. The CDF is also computed **lazily** in `generate()` (127) if not pre-cached. So a table
  with a different sub-pool count **still generates loot** — rarity still scales all-but-the-first pool.
- **But** if you deviate from exactly-4-pools: (a) the load-time CDF **pre-warm is skipped** → the full
  multinomial CDF is computed **lazily on first open** (the `permute` over up-to-54 draws across N pools
  can be a noticeable one-time hitch, and cost grows with pool count), and (b) the Common/Rare/Epic/Omega
  **tier readout** is now computed over a different-shaped distribution than the tuned 4-tier one — the
  labels will still appear but their calibration (§8 thresholds) was chosen for the 4-pool shape.
- **Hard requirements** (violating these throws): **≥1 entry** (`getEntries().get(0)`), and each top
  child must be a **pool**, not a bare item (the rarity loop casts children to `LootPool` at 138/140).
- **Safe move:** keep the 1-entry / 4-pool skeleton; change the *contents, weights, and roll ranges*
  freely. That's the low-risk lever for "more interesting" loot.

---

## 7. Treasure-chest generator — `LootTableGenerator` (base mod)

`target_decompiled/…/loot/generator/LootTableGenerator.java` — the base class, used directly only for
Treasure Chests.
- **`generateEntry` (83–102):** `roll = entry.getRoll().get(random)`; `fRoll = roll·(1+itemQuantity)`;
  single stochastic round (**no `maxRolls` cap**). Iterates **all** entries (72–81), no sub-pool
  rarity reweighting at all. There is **no `itemRarity` field** on this class.
- Treasure chests are invoked with `itemQuantity = 0.0f` (§2), so in practice they roll their flat
  base table. The per-item `itemQuantityOverrides` mechanism (90–98) still exists here.

---

## 8. Displayed rarity tier — `VaultChestConfig.getRarity(cdf)`

Code: `target_decompiled/iskallia/vault/config/VaultChestConfig.java` — `getRarity(double cdf)`
(71–82) walks `RARITY_DISTRIBUTION` (an ordered map) and returns the tier whose threshold the cdf
falls under (buckets the percentile). **Base-mod defaults** (`reset()`, 86–89):
`OMEGA 0.05 / EPIC 0.2 / RARE 0.4 / COMMON 1.0`.

**This pack overrides them** — `config\the_vault\vault_chest.json`:
```json
"RARITY_DISTRIBUTION": { "COMMON": 1.0, "RARE": 0.3, "EPIC": 0.1, "OMEGA": 0.03 }
```
Tighter than vanilla ⇒ Wold's Vaults chests roll high tiers **less** often. This is purely the *label*
(and any tier-gated effects), driven by the §6.4 cdf — it does not itself change the items drawn.
Same file also configures chest **trap** effects (mob trap / explosion / poison / etc.), unrelated to loot.

---

## 9. The editable config data layer (what you actually refactor)

Root: `C:\Users\river\Wolds-Vaults\config\the_vault\`

### 9.1 The loot-table registry manifest — `gen\loot_tables.json`
Maps each loot-table **key** → the **file** that defines it (per data version `"1.0"`). This resolves
the naming mismatch you'll notice: the placeholder bakes key `the_vault:gilded_chest_lvl50`, but the
file is `gilded_chest_50.json`:
```json
{ "id": "the_vault:gilded_chest_lvl50", "name": "Gilded Chest lvl50",
  "1.0": "config/the_vault/gen/1.0/loot_tables/gilded_chest_50.json" }
```
**Any new loot table must be registered here** to get a key. This manifest is the index of every loot
table in the pack (~250 entries: chests, strongboxes, crates, barrels, altars, dungeon variants, maps…).

### 9.2 The chest loot tables — `gen\1.0\loot_tables\`
The files you'll rewrite for "more interesting" chest loot. Naming convention
`{type}_chest_{levelBracket}.json`. **The tiered chest families** (all use the 4-sub-pool structure):
- `wooden_chest_{0,20,30}`, `gilded_chest_{0,20,50}`, `living_chest_{0,10,20,30,40,50,60,70}`,
  `ornate_chest_{0,20,30,50,65}` — plus `*_strongbox_*` upgrades and `*_chest_raw` / `*_chest_100_map`
  variants, and `flesh_chest_0`, `hardened_chest_0`, `enigma_chest_0`.
- **`treasure_chest_*`** use the plain generator (§7).
- **⚠️ Two parallel copies exist.** `gen\1.0\loot_tables\gilded_chest_50.json` (key
  `the_vault:gilded_chest_lvl50`, used by generic vault-room chests) **and**
  `gen\1.0\loot_tables\dungeon\gilded_chest_50.json` (key `the_vault:dungeon/gilded_chest_lvl50`, used
  by dungeon rooms). If you change one, decide whether the dungeon twin needs the same change.

### 9.3 How a placed chest binds to a table (level brackets) — `gen\1.0\palettes\**\*_chest_placeholder.json`
`palettes\generic\gilded_chest_placeholder.json` maps the `GILDED_CHEST` placeholder block → a real
block **with the `LootTable` NBT key baked in**, chosen by vault level:
```jsonc
{ "level": 50, "probability": 1.0, "success": {
    "the_vault:gilded_chest{LootTable:\"the_vault:gilded_chest_lvl50\"}": 19,   // 19-in-20 normal
    "the_vault:gilded_strongbox{LootTable:\"the_vault:gilded_strongbox_lvl50\"}": 1 } }  // 1-in-20 strongbox
```
So the **level→table mapping and the chest/strongbox split live here**, not in the loot table. Brackets
seen: 0 / 20 / 50 / 80 / 100 (the placeholder picks the highest bracket ≤ vault level). There are
`generic`, `dungeon_rooms`, `raw`, and `chaos` palette variants — the `_lvl` key each points to differs.

### 9.4 Shared "loot groups" — `gen\1.0\loot_pools\*.json`
Standalone weighted item pools (schema = a bare JSON array of `{"weight":N,"item":…}`), referenced from
loot tables via `ReferenceLootEntry` (`{"reference":"the_vault:<id>"}`, §5). Example `rune_0.json` is a
flat weighted list of `the_vault:rune` items. The **chest** tables currently inline everything and use
**no** references — but this is the sanctioned way to define a reusable "loot group" once and share it
across tables. Registered in `gen\loot_pools.json` (sibling manifest to `loot_tables.json`).

### 9.5 "Loot groups" in the JEI sense — `loot_info.json` (+ addon registry)
`config\the_vault\loot_info.json` defines the **JEI "Loot Info" display groups**: for each source block
it lists a `display` name and the `lootTableKeys` (with the level each applies at) shown to players.
The addon's `MixinLootInfoGroupDefinitionRegistry`
(`addon_decompiled/…/mixins/vaulthunters/custom/MixinLootInfoGroupDefinitionRegistry.java`) registers
the **block → preview-icon** mapping for these groups. If your refactor adds/renames chest loot tables,
update `loot_info.json` (and this registry mixin if adding new source blocks) so JEI stays truthful —
this is display metadata only, it does **not** affect generation.

---

## 10. Recommended extension points for the refactor

You have three levers, cheapest first. **Prefer the event API (B) over a mixin (C)** unless you need to
change the math shape itself.

**A. Pure data (no code).** Edit the loot tables (§9.2), weights, roll ranges, sub-pool composition,
and the tier thresholds (§8). Zero build step; respects the 4-pool invariant if you keep the skeleton.
This alone makes loot "more interesting"; it does **not** change *how* Q/R scale it.

**B. Event-driven code (the sanctioned hook).** The base mod's own loot-scaling modifiers are the exact
template to copy. `LootItemRarityModifier` / `LootItemQuantityModifier`
(`target_decompiled/…/core/vault/modifier/modifier/`) register on the loot event and mutate the
generator's **public fields**:
```java
// LootItemRarityModifier.initServer (34–39) — pattern to copy:
CommonEvents.LOOT_GENERATION.pre().register(uuid, data -> getGenerator(...).ifPresent(gen ->
    gen.itemRarity += this.percentage));      // add before roll
CommonEvents.LOOT_GENERATION.post().register(uuid, data ->
    gen.itemRarity -= this.percentage);       // remove after (scope to this generation)
// LootItemQuantityModifier (34–47) is identical but touches gen.itemQuantity,
//   or gen.itemQuantityOverrides.put(filter, pct) when an ItemPredicate filter is set (per-item scaling).
```
Key facts for your own listener:
- The event arg exposes `data.getGenerator()`; guard `instanceof TieredLootTableGenerator` and check the
  source is a vault listener (see `getGenerator()`, 42–58 / 50–66).
- `TieredLootTableGenerator` exposes **public** `itemRarity`, `itemQuantity`, `itemQuantityOverrides`,
  and `getCDF()` / `getItems()` / `setItems()`. **PRE** fires before the roll math (§6.1 line 100), so
  setting `itemQuantity`/`itemRarity` there changes the draw; **POST** (128) fires after, so you can
  post-process the generated `items` list (e.g. inject/transform items as a function of the realized
  `cdf` — a clean way to make loot "responsive to rarity" beyond just sub-pool reweighting).
- These modifiers are attached to a run via vault-crystal modifiers defined in
  `config\the_vault\vault_modifiers.json` (`modifier_type` = the loot_item_quantity / loot_item_rarity
  classes). That's the data side of the event hook.

**C. Mixin (change the math shape).** Only if you must alter the formula itself — the pack already does
this for quantity (§6.3). Add a `woldsvaults`-style mixin in the addon (or a new addon jar) targeting
`TieredLootTableGenerator.generate` / `generateEntry`. This is the heaviest option (needs a build) and
the easiest to break silently; reach for B first.

---

## 11. Gotchas / non-obvious facts (checklist)

- **Quantity ≠ rarity in mechanism.** Quantity = roll count (§6.1); rarity = sub-pool weighting (§6.2).
  A refactor that wants "rarity affects *which* items" beyond the 4-tier split needs new code (option B/C).
- **Quantity is already log-compressed in this pack** by the addon mixin (§6.3) and the 54 cap is
  effectively dead. Any "make quantity more impactful" work must reckon with that mixin.
- **Rarity is uncapped and linear.** No mixin touches it. Very high rarity converges sub-pool shares to
  the B/C/D weight ratio (A→0), sub-linearly (∝1/R).
- **The first sub-pool is special** — it *never* receives the rarity multiplier. Put your "floor/common"
  loot there; put escalating tiers in pools 2..N.
- **Keep it 1-entry / 4-pools-of-pools** unless you accept lazy-CDF cost and tier re-calibration (§6.5).
- **Two copies** of each chest table (generic vs `dungeon/`) — §9.2.
- **Register new tables** in `gen\loot_tables.json`, new shared pools in `gen\loot_pools.json` (§9.1/9.4).
- **Level brackets & the chest/strongbox split live in the placeholder JSON** (§9.3), not the table.
- **Treasure & barrel chests are exempt** (quantity forced 0; treasure has no rarity path) (§2/§7).
- **`itemQuantityOverrides`** is a real second quantity channel (per-item stack size via `ItemPredicate`)
  populated only by filtered quantity modifiers (§6.2/§10B) — easy to miss.
- **Displayed tier is a percentile, not a threshold on items** (§6.4/§8) — editing item weights shifts
  the whole tier distribution as a side effect.
- **JEI loot info** (`loot_info.json` + registry mixin) must be updated by hand to match table changes
  (§9.5) or the in-game preview lies.

---

## 12. Open / not fully verified (be honest with these)

- **Exact `IntRoll` type registry** (`uniform`, `constant`, others) — schema inferred from usage
  (`Adapters.INT_ROLL`), not exhaustively enumerated. Check `core/world/roll/IntRoll*` if you need
  non-uniform roll distributions.
- **`ItemPredicate` grammar** for `itemQuantityOverrides` filters — the class exists
  (`core/world/data/item/ItemPredicate`); its full JSON form wasn't traced here.
- **Whether the `dungeon/` chest tables are the ones dungeon rooms actually bind to** — inferred from the
  key naming + the `palettes\dungeon_rooms\` variant; confirm by reading that placeholder if you target
  dungeon chests specifically.
- **`enigma_chest` loot mechanism** — an Enigma-specific spawn/upgrade path was *not found* in the
  shipped game code in prior deep decompiles; its `enigma_chest_0.json` table exists but how it's driven
  is unconfirmed.
- Line numbers are from the 2026-07-02 CFR decompile of the pinned jars; re-verify if the jar version
  changes.
```

---

## 13. Live addon source clone (for the code half of the refactor)

The **open-source addon** is cloned (full history) at **`C:\Users\river\wv-development\`** —
`github.com/iwolfking/Wolds-Vaults-Official-Mod`, Forge **1.18.2 / 40.3.11**, official mappings,
`gradlew` present, `the_vault`/`vhapi` dev jars in `libs\`. (Builds need a JDK 17 — one exists at
`C:\Users\river\jdk17\jdk-17.0.19+10`; the box otherwise has only a JRE 21.) The
`addon_decompiled\` mixin source cited above is **byte-identical** to this live tree (verified for
`MixinTieredLootTableGenerator`), so §6.3 holds against latest HEAD, not just the 0.31.6 jar.

**Where the two halves of the refactor live:**
- **Data half — loot pools/tables/groups** → hand-written JSON in the *pack* repo
  (`C:\Users\river\Wolds-Vaults\config\the_vault\...`, §9). **Verified: the core vault chest tables are
  NOT datagen-generated** — no datagen provider emits `*_chest_lvl*`; the addon's datagen
  (`AbstractLootTableProvider` subclasses) only produces crates, `woldsvaults`-namespace tables, and
  Compressium block-drop tables (output → `wv-development\src\generated\resources\`). So editing the
  pack chest JSON directly is safe (no overwrite).
- **Code half — make loot respond to Q/R** → addon Java at
  `wv-development\src\main\java\xyz\iwolfking\woldsvaults\`. Key files:
  - `mixins\vaulthunters\MixinTieredLootTableGenerator.java` — the quantity-curve mixin (§6.3). Change
    the formula here.
  - `modifiers\vault\map\modifiers\LootItem{Quantity,Rarity}ModifierSettable.java` +
    `VaultLootableWeightModifierSettable.java` — the addon's **own** Q/R/weight loot modifiers, built on
    the `LOOT_GENERATION` event (§10B) via `SettableValueVaultModifier`. **Copy these as the template**
    for new Q/R-responsive modifiers. (Note: the Settable ones do `itemQuantity += value` at *both* PRE
    and POST rather than the base mod's `+= / -=`; harmless only because the generator is per-chest —
    fix to `-=` at POST if you reuse the pattern in a longer-lived generator.)
  - `src\main\resources\woldsvaults.mixins.json` — mixin registry; add new mixins here.
  - `datagen\ModVaultLootTablesProvider.java` / `ModLegacyLootTablesProvider.java` /
    `ModLootInfoProvider.java` — if you'd rather *generate* new tables/loot-info in code than hand-write
    JSON.

---

*Companion note:* this file lives next to the decompiled source it cites (`target_decompiled\`,
`addon_decompiled\`) so every path resolves. Move it wherever the loot-refactor project ends up — the
absolute paths above stay valid on this machine.
