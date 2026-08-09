# Greed Rework — Feasibility Audit

**Written 2026-08-08.** Scope: the spec in `WV Greed Rework.md` + config sheet
`Wold's Vaults Greed Rework.xlsx` (both in this folder). Constraint: everything must be done from the
`woldsvaults` addon via Mixin + addon-registered content — no base-mod source access.

Verified against: `the_vault` 3.21.5 decompile (`target_decompiled/`), `woldsvaults` working
checkout (`C:\Users\river\wv-development`), pack configs (`C:\Users\river\Wolds-Vaults\config`),
vhapi 5.8.0 decompile. Line numbers are from the 3.21.5 decompile — pack runs 3.21.6, re-check
anything load-bearing.

Companion docs, all in `library\` at the pack-repo root: `SKILL_TREE_SCREEN_GUIDE.md` (screen/tree architecture, datagen pipeline),
`GREED_CHALLENGE_CRYSTALS.md` (the 22 challenge crystals), `UNIQUE_GEAR_CATALOG.md` (uniques,
for ancient uniques).

---

## 0. Verdict

**Feasible. Invasiveness: high but not exotic — it is *wide*, not *deep*.**

The reason is structural: almost nothing in this rework requires fighting the base mod. The five
systems it depends on (Task framework, CommonEvents bus, vault modifiers, Skill/tree framework,
SavedData+sync) are all already open to the addon, and the addon already has working precedent
for every category of thing the spec asks for — custom objectives, custom abilities, custom
blocks+containers+screens, custom SavedData, custom gear attributes, enum extension, and greed
mixins specifically.

What makes it big is surface area, not difficulty:

| Subsystem | Invasiveness | Why |
|---|---|---|
| Rank ladder (replaces tiers) | **Low–Medium** | Greed tier is one `int` behind `PlayerGreedTreeData.getGreedTier`. Redefine it, don't rip it. ~57 read sites all keep working. |
| Milestones (replaces quests) | **Medium** | Task framework does 80% of it. The hard part is persistence + exactness, not hooks. |
| Challenges screen | **Low** | `GreedTree.completedChallengeIds` already tracks this; addon already mixins the cycle logic. |
| Greed Medallions (replaces tier difficulty) | **Medium** | ~70% expressible as an existing `GroupedModifier`. Assassins/Champion/GCL need code. |
| Greed shop retune | **Low** | Config + one reroll-currency swap. |
| Rank-up trials | **Medium** | `RebirthObjective.endGreedTrial` is one seam; new objectives are precedented. |
| God alignment trees (replaces greed tree) | **Medium–High** | Tree framework reusable wholesale, but it's 4 trees × 3 node classes + a new tab + per-god SavedData. |
| God XP / maps as god quests | **Low–Medium** | Maps are *addon-owned code* (`items/gear/VaultMapItem.java`). Full control. |
| God Ultimates | **Low** | Addon already registers 7 custom abilities. |
| God Charms → Piety | **Low** | Addon already mixins `GodCharmItem` + `GodCharmRollHelper`. |
| **UI (all of it)** | **High** | Biggest single cost. Milestones screen, challenges screen, 4 god trees, rank panel, medallion infuser, cauldron rework. |

**Realistically the UI and the milestone-persistence layer are the two things that will eat the
schedule**, not the game logic.

Two things I could not fully verify and that need a decision or a spike before committing:
the **AD/AP damage split** milestones (no ready-made classification exists) and **"Block Attacks"**
(couldn't locate a block/parry event). See §4.3.

---

## 1. The load-bearing insight: don't rip out greed tier, redefine it

`PlayerGreedTreeData.getGreedTier(uuid)` is read from **~57 call sites** across the base mod
(`grep -rn "getGreedTier"`). It gates, among other things:

- level cap — `PlayerVaultStats.getLevelCap(tier) = 100 + tier*25` (`PlayerVaultStats.java:74`)
- etching tier — `EtchingAnvilRecipe.java:82`, `EtchingApplicationTableContainer.java:92`
- personal vault crafting/unlock — `PersonalVaultBlock.java:88`, `PersonalVaultRequestCraftMessage.java:78`
- coin pouch greed slot — `CoinPouchContainer.java:54`
- greed trader access + buy gating — `GreedTraderEntity.java:146`, `ServerboundGreedTraderBuyMessage.java:54`
- greed cauldron / greedy anchor access — `GreedCauldronBlock.java:160`, `GreedyAnchorBlock.java:121`
- gear `GREED_TIER` requirement tooltips — `VaultGearTooltipItem.java:255`
- **mob H/D scaling** — `VaultMobsConfig.scale` (`VaultMobsConfig.java:80`)
- assassin spawn chance — `GreedAssassinSpawnHandler.java:160`
- vault XP multiplier — `VaultLevelsConfig.getGreedTierXpMultiplier`

If **rank index** (Scav1=1 … Legend=16, Legend+ = 17+) *is* the greed-tier int, every one of those
sites keeps working with zero mixins, and you only have to touch the handful whose *semantics*
change. That is the difference between a ~15-mixin job and a ~60-mixin job.

Concretely:

- **Keep**: `PlayerGreedTreeData` as the rank/reputation store. Rank = `greedTier`, rep = `greedReputation`.
  Both already have setters, sync (`GreedTreeMessage`), a client mirror (`ClientGreedTreeData`),
  and a debug command (`GreedCommand`).
- **Retarget** (mixin, ~4 sites): the ones where the spec moves difficulty from *player rank* to
  *crystal medallion* — `VaultMobsConfig.scale`, `GreedAssassinSpawnHandler`, `PlayerEvents.java:283`,
  `MixinLivingEntity.java:359/385` (both base-mod greed-tier damage sites, reached via
  `SidedHelper.getGreedTier`).
- **Rebase**: `getLevelCap` — 16 ranks × 25 = level 500 cap, almost certainly not what you want.
  One mixin on `PlayerVaultStats.getLevelCap`.
- **Retune**: `getGreedTierXpMultiplier` — same reason, now indexed by 16 not ~4.

⚠️ `config/the_vault/greed/greed.json` currently defines only **4** `tierThresholds` (0/50/100/200)
and 13 vessel phases. The rank ladder needs 16+ entries; `GreedConfig.getReputationThreshold`
needs checking for its out-of-range behaviour before you rely on it (or just replace the read).

⚠️ Greed tier and reputation live **inside the `GreedTree` object** (`GreedTree.getGreedTier`
at `greed/GreedTree.java:751`), which is serialized through `Adapters.SKILL`. If you delete the
greed tree you must keep `GreedTree` alive as a data carrier or migrate rank/rep into an
addon-owned SavedData with a one-time import. **Recommended: keep `GreedTree` as the carrier**
(zero migration risk, zero base-mod breakage) and simply stop rendering the node graph.

---

## 2. What the greed tree actually provides (and what must be re-provided)

Removing the tree is not free — five gameplay effects hang off it, all read through a single
helper, `iskallia.vault.greed.GreedNodeHelper`:

| Effect | Helper method | Consumed at |
|---|---|---|
| Extra vault time | `getAdditionalVaultTimeTicks` | `core/vault/player/ClassicListenersLogic` |
| Vault XP multiplier | `getXpGainMultiplier` / `getClientXpGainMultiplier` | `world/data/VaultPlayerStats`, `client/data/ClientVaultXpTracker`, `client/gui/screen/summary/VaultExitContainerScreenData` |
| Imbuement chance bonus | `getImbuementChanceBonus` | `block/entity/ImbuementAltarTileEntity` |
| Greed reputation multiplier | `getGreedReputationMultiplier` | `GreedAssassinSpawnHandler`, `PlayerGreedTreeData.completeQuest`, `ServerVaults` |
| Cryonic focus (free mod lock) | `hasCryonicFocusFreeze` | `gear/modification/operation/LockModifierModification` |

**This is a clean seam: 6 call sites, 1 class.** Mixin `GreedNodeHelper` so each method reads the
*god tree* instead of the greed tree, and all five effects transfer to the new system with no
changes to their consumers.

The 11 existing node classes (`greed/node/*.java` — `StatBoostGreedNode`, `GearAttributeGreedNode`,
`AbilityUpgradeGreedNode`, `VaultTimeGreedNode`, `XpGainGreedNode`, `ImbuementChanceGreedNode`,
`SkillPointGreedNode`, `MetaProgressionGreedNode`, `CryonicFocusGreedNode`, `GreedReputationGreedNode`,
`RootGreedNode`) are ordinary `Skill`s and are **directly reusable as god-tree node types** — the
spec's "Basic Nodes = run-of-the-mill stats" maps 1:1 onto `StatBoostGreedNode` /
`GearAttributeGreedNode`. Only the Minor/Major nodes with new functionality need new classes,
registered the same way the addon already registers node types
(`mixins/vaulthunters/skills/MixinSkill.java` → `Skill.Adapter.register(...)`).

**The 25%-carryover / minor-transfer-slot rule is new machinery with no precedent.** Skills apply
themselves via `onAdd`/`onRemove` on the player; a "25% of another tree's basic nodes" rule means
either (a) scaled shadow copies of foreign nodes applied on charm swap, or (b) a mixin on the
stat-collection path that folds in a scaled contribution. (a) is safer and matches how the
framework already works. Budget real time for this — it is the single most novel mechanic in the
god-tree half of the spec.

---

## 3. Milestones — the event-hook audit

### 3.1 The framework already exists and is the right one

`iskallia.vault.task.*` is a full task framework: 50+ task types, a JSON type registry
(`Task.Adapter`, `Task.java:318-361`), progress counters (`TargetTaskCounter`,
`SlidingTimedTargetTaskCounter`), predicates (`TilePredicate`, `EntityPredicate`), bit/NBT/JSON
serialization, and renderers. It is what the current greed quests use.

The current wiring (`greed/GreedQuestVaultHandler.java`) is the template for milestones:

- on `CommonEvents.LISTENER_JOIN` (Runner) → `task.onAttach(context)` with an
  `EntityTaskSource` bound to the player UUID
- every 20 ticks while in a `VirtualWorld` → copy task state into the slot + `syncQuestData`
- on `LISTENER_LEAVE` → detach, evaluate, award

**`MultiVaultTask` already exists** (`task/MultiVaultTask.java`) and is precisely the
"progress persists across vaults" primitive the milestone system needs — it keeps a persistent
`vaultContext` and re-derives which players are currently in a vault on `SERVER_TICK`, with
`VaultListenerMode` SOLO/OWNER/ALL. Milestones should be built on this, not on `SingleVaultTask`.

### 3.2 Milestone → hook map

Confidence: **V** = verified in code, **L** = likely (mechanism located, exact hook not read),
**?** = gap, needs a spike.

| # | Milestone | Hook | Conf |
|---|---|---|---|
| 3–6 | Living / Ornate / Gilded / Wooden Looter | `CHEST_LOOT_GENERATION.post()` + `TilePredicate` — exactly what `LootChestTask` does (`task/LootChestTask.java:43-63`); event carries the opening player | **V** |
| 7 | Treasure Hunter (treasure doors) | `TREASURE_ROOM_OPEN` — Data has `getPlayer()` | **V** |
| 8 | Shop Hunter (vendoors) | `VENDOOR_ROOM_OPEN` — Data has `getPlayer()` | **V** |
| 22 | Diggy Diggy Jewel (vault ores) | `PLAYER_MINE` / `MineBlockTask` (addon already has `MixinMineBlockTask`) | **V** |
| 46 | Amazon Worker (wooden boxes) | same chest path; box is an addon chest type (`MixinVaultChestTypeEnum`) | **L** |
| 78 | Nullified (nullite ore) | `MineBlockTask` on the block id | **L** |
| 49 | Dedicated Looter (25k each, back to back, one vault) | no primitive — custom per-vault ordered state machine | **custom** |
| 9 | Bingo!!! (lines) | `BingoTask` / `BingoObjectiveTask` exist; per-*line* granularity not confirmed | **L** |
| 10 | Drink Up (elixir) | `core/vault/objective/elixir/ElixirTask` (addon already mixins it for perf) | **L** |
| 11 | Brutalized (brutal bosses) | `ENTITY_DEATH` + `ModConfigs.ENTITY_GROUPS` | **V** |
| 12 | Scavingo lines | `ScavengerBingoCrystalObjective` + addon's `Scaling…` variant | **L** |
| 13 | Chaos objectives | `ChaosTask` | **L** |
| 14 | Hyperion (crate tiers from hyper kills) | **addon-owned** hyper objective — full source control | **V** |
| 15 | Alchemist | base alchemy objective progress | **L** |
| 16 | Vaults Hunted | `VAULT_END` / `FinishVaultTask` | **V** |
| 17 | Light the Flame (braziers) | **addon-owned** `HauntedBraziersObjective` | **V** |
| 18 | I Will Survive (survival vault time) | `LISTENER_TICK` + objective type check | **V** |
| 19 | Runic Ritual (rune bosses) | `RUNE_BOSS_START` + `RuneBossObjectiveTask` | **V** |
| 20 | Eternal Darkness (corrupted pillars) | **addon-owned** `CorruptedObjective` | **V** |
| 52 | Royale Paine | `VAULT_END` + objective type | **V** |
| 53 | Stairway to Heaven (ascension) | `VAULT_END` + `AscensionObjective` (addon mixins it) | **V** |
| 50 | Seen It All (all vault types) | set accumulation at `VAULT_END` | **V** |
| 21 | SLAYERRR (kill mobs) | `ENTITY_DEATH` / `KillEntityTask` | **V** |
| 23 | Hack'n Slash (AD damage) | `ENTITY_DAMAGE`/`ENTITY_HURT` fire, but **no AD/AP classification exists on the payload** — `EntityDamageEvent` is a thin `ForgeEvent` wrapper over vanilla `LivingDamageEvent` | **?** |
| 24 | Archmage (AP damage) | same gap | **?** |
| 25 | Spell Spammer (mana) | `MANA_MODIFY` — Data has `ManaAction` + old/new amount | **V** |
| 26 | Electric Conduit (lightning kills) | needs damage-source attribution; partially the same gap as 23/24 | **?** |
| 27 | Master of Chains (chaining kills) | `ENTITY_CHAIN_ATTACKED` — Data has `getAttacker()` + `getAttackedMobs()` | **V** |
| 28 | Defense! (block attacks) | **could not locate a block/parry event or handler.** `mod_block_chance` exists as a gear modifier; the roll site was not found | **?** |
| 29 | Woosh (dodge attacks) | dodge is **addon-owned** (`the_vault:dodge_percent`, handled in `events/LivingEntityEvents.java`) — trivially instrumentable | **V** |
| 36 | Five Leaf Clover (lucky hits) | lucky-hit system exists in both mods (addon has lucky-hit talents) | **L** |
| 39 | BOOM (explosion kills) | `ENTITY_DEATH` + `DamageSource.isExplosion()` | **L** |
| 30 | Fail Vaults | `VAULT_END` + result | **V** |
| 31 | Master Smith (max vault forge) | one-shot state check | **L** |
| 32–35 | God level ×4 | new system — self-defined | **n/a** |
| 37 | Explorer (mapped vaults) | maps are **addon-owned** (`items/gear/VaultMapItem.java`) | **V** |
| 38 | I Live Here Now (vault time) | `LISTENER_TICK` | **V** |
| 40 | Legendary! (omega rooms) | `DISCOVER_ROOM_EVENT` — Data has `getPlayer()`, `getRoomId()`, `getVault()` | **V** |
| 41 | Challenged (challenge rooms) | `CHALLENGE_ROOM_COMPLETE` — Data has `getPlayers()` | **V** |
| 42 | Dungeoneer (dungeon bosses) | `DUNGEON_ROOM_OPEN` + `ENTITY_DEATH` | **L** |
| 43 | The Vault of Vaults (composite, one vault) | custom composite tracker | **custom** |
| 44 | Flawless Victory | `TakeNoDamageTask` | **V** |
| 45 | Wanted Criminal (black market) | `BLACK_MARKET_TRADE` — Data has `getPlayer()`, `getShardCost()` | **V** |
| 47 | Archeologist (identify ancient uniques) | identify path exists; ancient uniques themselves are new content | **L** |
| 48 | Send a Prayer (god altars) | `GOD_ALTAR_EVENT` — Data has task/vault/pos/context | **V** |
| 51 | Born Again (phoenix modifiers) | `VAULT_MODIFIER_REMOVE` + `PhoenixModifierSnapshotData` | **L** |
| 54 | Villain (vendoor cockroaches) | `ENTITY_DEATH` + type filter | **V** |
| 76 | Pal Trainer (companions lvl 10) | companion system | **L** |
| 77 | Vault Veteran | derived from other milestones | **V** |
| 55–75 | 21× challenge-crystal milestones | `GreedTree.completedChallengeIds` already exists and the addon already mixins the cycle logic (`MixinGreedTree.checkChallengesCycleReset`) | **V** |

**Headline: ~85% of the milestone list has a ready-made, player-attributed hook.** The gaps are
narrow and all in the same family (damage-source classification), plus two bespoke composite
milestones (49, 43) that need their own tracker regardless.

### 3.3 "Exact and updates in vault" — the real problem

This is where the design work is, and it is **not** about hooks.

**Problem A — persistence granularity.** Milestone progress is global and permanent. The obvious
implementation (`SavedData.setDirty()` on every increment) is wrong: "Loot 1M living chests" and
"Kill 1.5M mobs" mean millions of dirty marks. Correct approach:

- keep live counters in memory, per player, attached on `LISTENER_JOIN`
- `setDirty()` on a throttle (every N ticks, or on threshold crossing), **plus** unconditionally
  on `LISTENER_LEAVE`, `VAULT_END`, player logout and server stop
- accept that a hard crash loses at most the throttle window

Note the existing quest handler is already sloppy here for reference: the 20-tick sync branch
in `GreedQuestVaultHandler.onPlayerTick` calls `syncQuestData` but **does not** call `setDirty()`
— in-vault quest progress only persists because something else marks the SavedData dirty. Don't
copy that.

**Problem B — client sync cost.** ~50 milestones × 5 tiers, updating live in-vault. Do **not**
send the whole milestone set every second. Send deltas (only counters that changed since last
send), and only for milestones the client currently has open — or a compact "changed ids +
values" packet. The addon has its own network channel (`network/NetworkHandler.java`,
`BaseNetworkHandler`) so packet design is entirely yours.

**Problem C — attribution in parties.** The sheet says "must be done BY PLAYER". `EntityTaskSource`
matches specific UUIDs, and every event in the table above carries a player, so per-player
attribution is achievable. But check the interaction with `LevelSyncData` (team XP sharing) and
with `VaultListenerMode` — decide explicitly whether party members get credit for a shared kill.

**Problem D — the counters must survive vault crash/disconnect mid-vault.** Because milestone
progress is monotonic and global (unlike quests, which reset on failure), you can commit
increments immediately into the in-memory global counter rather than holding them in a
per-vault task and merging at the end. That is strictly simpler *and* more crash-safe. **I'd
recommend not using `Task` objects as the storage at all** — use the Task framework's *event
plumbing and predicates*, but write into your own counter store.

### 3.4 Dispatcher design (the shape that makes this cheap)

One listener per event, fanning out to monotonic counters, deltas flushed on a throttle. What
that does and does not buy:

- ✅ **Removes** the O(R) `Event.invoke` dispatch cost entirely (and its 5× ForgeEvent
  amplification) — R grows by +1 per event no matter how many milestones exist.
- ⚠️ **Does not remove** the per-milestone *predicate* cost. `ENTITY_DEATH` fires and something
  still has to ask: brutal boss? dungeon boss? cockroach? explosion kill? chain kill? That work
  moves inside your dispatcher, where it's a plain array walk with no allocation and runs once
  instead of five times — much cheaper, but not free.

Five refinements that make the remaining cost negligible:

1. **Pre-index at load: event type → milestone specs.** `ENTITY_DEATH` walks ~8 kill milestones,
   not all 60.
2. **Skip completed milestones.** Max-tier "SLAYERRR" costs zero. On a long-lived save the walk
   shrinks over time, which is the right direction.
3. **Cheap gates first.** Killer is a player? Player is in a vault? Bail before entity-group
   lookups or damage-source classification.
4. **Compute derived facts once per event, not per milestone.** If three milestones need the
   entity group, resolve it once and pass it down.
5. **Counters are plain `long`s.** Increment is free; all real cost is predicate + sync.

**Two ways an action reaches the counters — use both:**

- **(a) Bus-routed** — dispatcher subscribes to `CommonEvents` (one listener per event) and routes.
  Necessary for base-mod actions you don't own: chest loot, mob deaths, room discovery, mining,
  black market, god altars, challenge rooms.
- **(b) Direct call** — addon-owned action sites call `Milestones.advance(player, id, n)` directly,
  skipping the bus entirely. Available for **maps, haunted braziers, corrupted vaults, hyper,
  dodge, and the hyper crate-tier milestone** — all addon code.

(b) is strictly cheaper and should be preferred wherever you own the call site.

**Delta sync**: maintain a dirty-id set per player, flush on a tick throttle. 200 mob kills in
3 seconds must produce one packet with one changed counter, not 200 packets. Precedent for the
"filter by a relevant-key map before doing work" pattern exists in-pack: Unobtanium's
`OptimizeCollectionQuest` (§6.3).

---

## 4. Greed Medallions

### 4.1 Most of the effect list is already a vault modifier

`core/vault/modifier/modifier/` has ~50 modifier types. The medallion effect list maps onto them
almost line for line:

| Medallion line | Existing modifier |
|---|---|
| +N% H/D | `MobAttributeModifier` |
| +N% Mobs | `MobSpawnCountModifier` (and/or `MobSpawnTickModifier`) |
| +N% Crate Loot | `CrateItemQuantityModifier` |
| +N% Chest Rolls | `LootItemQuantityModifier` |
| +N% Objective Difficulty | `ObjectiveTargetModifier` |
| −N% Trap Disarm | `PlayerStatModifier` / `PlayerAttributeModifier` (verify the trap-disarm stat id) |
| the whole bundle | `GroupedModifier` |

So a medallion tier can largely be **a single `GroupedModifier` defined in config**, applied to
the crystal at craft time. That is a very large chunk of the medallion system with *zero* Java.

⚠️ The spec says medallion buffs are **multiplicative** with everything else. Verify per modifier
— e.g. `VaultMobsConfig.scale` currently does `difficulty.getHeathMultiplier() + greedBonus`
(**additive**, `VaultMobsConfig.java:93-97`). Making the medallion multiplicative there is a
mixin on that method.

⚠️ Modifier stacking is per-`Modifiers.Entry` and additive-by-repetition (see
`reference-mod-source-locations` notes on `CrystalModifiers.configure`). Confirm a grouped
medallion doesn't accidentally interact with stack-size display formatters.

### 4.2 What needs real code

- **Assassins.** `GreedAssassinSpawnHandler` is a static Forge `@SubscribeEvent` handler reading
  the *player's* greed tier (`:160`) with hardcoded chances in `getBaseSpawnChance` (`:189-197`).
  Retargeting to the crystal's medallion tier + the per-tier ladder (more assassins, inherit vault
  modifiers, negative effects on hit, buffing auras, infernal modifiers) means `@Overwrite`ing
  `getBaseSpawnChance` and `spawnGreedAssassin`, or cancelling at the head and reimplementing.
  The spawn/scale plumbing (`EntityScaler.scale`, `findDistantSpawnPos`) is reusable as-is.
- **"The Vault Champion hunts you" / "grows enraged"** — new behaviour, no precedent. Budget it.
- **Greed Crate Loot tier (GCL 1–7)** — crate tiers feed `ITEM_QUANTITY` on `AwardCrateObjective`
  and scale **linearly and uncapped** (`(1+N)`, see `reference-crate-tier-loot-scaling`). Adding
  GCL is adding to that sum — mechanically easy, but note GCL 7 on top of existing tiers is a
  large multiplier; balance carefully.
- **Reading the medallion inside the vault.** `CrystalData` (`item/crystal/CrystalData.java:131+`)
  is a fixed field set with explicit NBT read/write; adding a `medallion` field means mixin +
  shadowing the NBT methods. **Cheaper alternative:** the full crystal NBT is already stored on
  the vault as `Vault.CRYSTAL` (`core/vault/Vault.java:85`), so if the medallion rides along as
  a modifier + a marker tag you can read it in-vault without touching `CrystalData`'s field list
  or the `Vault.FIELDS` version enum (which you should avoid — adding a `FieldKey` requires a new
  `Version` constant in a base-mod enum).
- **Craft-time gating** (can only craft/apply ≤ your rank; one medallion per crystal, locked
  after) — Medallion Infuser is a new addon block + container + screen. The addon already ships
  8 of these (`init/ModContainers.java`), so this is routine.

---

## 5. God alignment system

- **Trees**: reuse `SkillTree`/`TieredSkill`/`Skill.Adapter`. Node types registered via
  `MixinSkill` (existing pattern, ~35 registrations already). Config lives in pack
  `config/the_vault/greed/*`-style JSON — **note there is no vhapi loader for greed tree nodes
  or styles**, so if you follow that path the pack is the only source. If you want datagen, put
  the god trees under a config path that *does* have a loader (talents/prestige-style) or add a
  loader to vhapi.
- **A new screen tab**: `SkillTabContainerElement` hardcodes the tab list (icons array + index→
  message switch). Adding a "Gods" tab = a mixin on that class + a new `ServerboundOpen…Message`
  + `MenuType` + `MenuScreens.register`. All precedented; see `library\SKILL_TREE_SCREEN_GUIDE.md` §2.4.
- **Per-god state** (XP, level, points, sacrifices, piety, MTS slots): addon-owned SavedData.
  Precedent already in-repo: `api/data/PlayerGodMasteryData.java`.
- **God XP from altars/maps**: `GOD_ALTAR_EVENT` gives you altar completions with god context;
  maps are addon code (`items/gear/VaultMapItem.java`, `modifiers/vault/map/`,
  `recipes/crystal/MapModificationRecipe.java`, `integration/vaultfilters/MapTierAttribute.java`).
  The "Bonus XP implicit that drops if modified in the artisan table" is entirely inside
  `MapModificationRecipe` — full control.
- **God Ultimates**: 4 new abilities, registered exactly like the existing 7 custom abilities
  (`ColossusAbility`, `SneakyGetawayAbility`, `LevitateAbility`, `ExpungeAbility`,
  `ConcentrateAbility`, `EvokerFangsAbility`, `MeteorStormAbility`). The "placeholder ability that
  morphs based on equipped charm" is best done as **one** registered ability that dispatches at
  cast time on the active god — one class, not five, and it avoids ability-tree state churn.
  `Bullet Time` (slowing the vault timer) touches `CLOCK_MODIFIER` / `VaultTimeModifier` —
  the only ultimate that isn't a straightforward player-effect ability.
- **God Charms → Piety**: addon already mixins `MixinGodCharmItem` and `MixinGodCharmRollHelper`.
  Base god reputation is **hard-capped at 50** (`PlayerReputationData.getReputation`/`addReputation`),
  and the addon already extends that cap via `GodMasteryHelper` — so the "1 rep = 10 piety"
  conversion has a working precedent to build on. Mythic charms = a new rarity path through
  `GodCharmRollHelper`.

---

## 6. Performance — the actual answer

### 6.1 Mixin volume is essentially free

Mixin is load-time bytecode transformation. `@Inject`/`@ModifyExpressionValue`/`@Overwrite`
compile down to direct calls (or wholesale replacement) inside the target method — there is no
dispatch table, no reflection, no per-call lookup at runtime. The addon already ships
**496 common + 52 client mixins** (`woldsvaults.mixins.json`). Adding 40–80 more for this rework
is a ~10–15% increase in *mixin application work at class-load time* and approximately **zero
steady-state cost**.

The three real per-call costs to be aware of, all small and all avoidable:

1. `@Inject(cancellable = true)` allocates a `CallbackInfo`/`CallbackInfoReturnable` **per call**.
   On a hot path (per-entity-tick, per-damage) prefer `@ModifyExpressionValue`, `@ModifyVariable`,
   or non-cancellable `@Inject`.
2. `@Redirect`/`@WrapOperation` add one extra static call; `WrapOperation` may allocate an
   `Operation` capture. Fine for cold paths, avoid on per-tick paths.
3. `@Overwrite` costs nothing at runtime but costs you a merge conflict every base-mod update —
   that's a maintenance cost, not a perf one.

So: **a large mixin change, if well written, will not measurably hurt TPS.**

### 6.2 What *will* hurt: the `CommonEvents` listener count

This is the finding that matters, and it is already a live problem in the base mod.

`iskallia.vault.core.event.Event.invoke(T)` (`core/event/Event.java:41-56`) does this on **every
single dispatch**:

```java
for (Integer priority : this.getListeners().keySet()) {          // getListeners() = new TreeMap + putAll
    new ArrayList<>(this.getListeners().get(priority).values())   // getListeners() AGAIN, + ArrayList copy
        .forEach(list -> { for (Consumer c : new ArrayList(list)) c.accept(data); });  // ArrayList copy per reference
}
```

`getListeners()` builds a **fresh reverse-ordered `TreeMap` and `putAll`s the whole listener map**,
and it is called `1 + P` times per invoke (P = number of distinct priority buckets). Then one
`ArrayList` copy of the values collection per priority, then **one `ArrayList` copy per registered
reference object**. Net: allocation and iteration cost is **O(R)** per dispatch, where R = the
number of distinct `reference` objects registered on that event.

It gets worse on the hot events. 26 of the 109 `CommonEvents` are `ForgeEvent`-backed, and
`ForgeEvent.initialize()` registers a Forge listener for **all five `EventPriority` values**, each
calling `invoke`:

```java
for (EventPriority priority : EventPriority.values())
    MinecraftForge.EVENT_BUS.addListener(priority, true, event -> this.invoke(event));
```

Each vault-side listener then self-guards with `if (e.getPhase() == eventPriority)` — so it only
*executes* once, but **the full O(R) dispatch loop runs five times per Forge event**. Verified on
`EntityTickEvent`, `ServerTickEvent`, `EntityDeathEvent`, `EntityDamageEvent`, `PlayerMineEvent`.

**Implication for this rework, stated plainly:**

- ❌ Registering one listener per milestone per player would be a genuine TPS problem.
  50 milestones × 8 players = +400 references on `ENTITY_DEATH`; every mob death then copies a
  400-entry map five times over.
- ✅ Register **exactly one** listener per event, owned by a single milestone dispatcher, which
  fans out internally to whichever counters care. R grows by +1 per event regardless of how many
  milestones exist. Internal fan-out is a plain array walk with no allocation.
- ✅ Same rule for `SERVER_TICK`: `MultiVaultTask.onAttach` registers a `SERVER_TICK` listener
  **per task instance** (`task/MultiVaultTask.java:64`). Do not instantiate ~50 `MultiVaultTask`s
  per player.
- ⚠️ Never touch `ENTITY_TICK` from milestone code. It fires per entity per tick, ×5.

**Bonus opportunity:** fixing `Event.invoke` itself (cache the sorted priority list, drop the
defensive copies, or make the 5× ForgeEvent amplification a single dispatch that filters by phase)
is a small, contained mixin that would speed up *the whole modpack*, not just the greed rework.
Nothing in the addon currently optimizes it. If you're already opening this system up, it is the
highest-leverage perf change available and I'd bundle it.

### 6.3 Unobtanium does NOT cover this (checked)

Checked `unobtainium-1.25.0.jar` (pack pins 1.25.1, project 1162330). Its `unobtainium.mixins.json`
declares **35 common + 19 client** mixins and its config plugin `WoldMixinPlugin.getMixins()`
returns `null`, so there are no dynamically-added mixins — the declared list is the whole set.

**Nothing targets `iskallia.vault.core.event.Event` or `ForgeEvent`.** The dispatch overhead in
§6.2 is entirely untouched. Its `the_vault.optimizations.*` package is a different family of fix:

- `DropCoalesceCaptureMixin` / `ContainerDropCoalesceCaptureMixin` / `HammerDropCoalesceMixin` /
  `VeinMinerBreakCoalesceMixin` / `CopiousOreDropCoalesceMixin` / `XpCoalesceCaptureMixin` —
  item/XP entity coalescing (fewer dropped entities), not event dispatch
- `MagnetDirectPickupMixin` / `MagnetPopResourcePickupMixin`, `HunterRefreshMixin`
- `OptimizeCollectionQuest` — a `@Redirect` that filters the item stream by a quest-relevant item
  map *before* mapping. **This is exactly the pattern §3.3 recommends**, just applied to collection
  quests: pre-index by key, test the cheap gate first.
- `MixinPartialTile` — **an empty class** in 1.25.0 (verified with `javap`: only a default ctor).
  Shipped but does nothing. Don't count on it for the `LootChestTask`/`PartialTile` allocation path.
- `FixInfluencesMemoryLeak` — cancels a leaking `AltarProgressEvent` registration. Directionally
  the same insight (fewer live registrations = better) but it's a leak fix, not a bus fix.
- `FixLevelCap` — exists in the jar but is **not listed in mixins.json and the plugin adds
  nothing**, so it is dead code at runtime. Relevant because it touches `PlayerVaultStats.addVaultExp`
  level-capping, which §1 also touches: check whether it gets registered in a later version before
  you write a competing mixin there.

Net: the `Event.invoke` optimization is still unclaimed, and still the highest-leverage change.

---

## 7. Risk register

| Risk | Severity | Notes |
|---|---|---|
| **UI scope** | High | 6 new/reworked screens. The greed screen is a *fork* of the shared framework (`GreedElementContainerScreen` inlines its own pan+dialog, `GreedPanRegion` reimplements pan/zoom) — fixes to shared classes don't reach it. Decide early: fork it again, or rebase onto `SplitTabContent`. |
| **AD/AP damage classification** | Medium | No ready-made hook. Needs a spike: find how ability damage is tagged and whether a stable classifier exists. If not, either drop those two milestones or add a damage-source tag from the addon's own ability code (which only covers addon abilities). |
| **"Block Attacks" hook** | Medium | Could not locate the block/parry roll site. `mod_block_chance` exists as a gear modifier; the handler was not found in either jar. Needs a spike. |
| **Save migration** | Medium | Existing players have greed tiers, unlocked nodes, quest slots, challenge history. `GreedTree.removeOrphanedNodes` + the config-merge watcher in `PlayerGreedTreeData.onTick` give you a migration hook, but the tier→rank remap and node refunds need an explicit one-time migration keyed off a version int. |
| **`Vault.FIELDS` versioning** | Medium | Adding a vault field requires a new `Version` enum constant in the base mod. **Avoid** — ride on `Vault.CRYSTAL` / modifiers instead. |
| **vhapi loader gaps** | Low–Medium | No loader exists for greed tree nodes/styles; `greed/trader` loader is a **no-op** in 5.8.0 (`GreedTraderConfigLoader.afterConfigsLoad` is empty) — the addon's existing trader datagen is dead data. Plan god-tree config authoring around this. |
| **Client/server type-registry symmetry** | Low | Skill/Task type strings are written into bit streams and NBT. Every `register(...)` must run identically on both sides or you get desyncs/crashes. |
| **the_vault version drift** | Low | Decompile is 3.21.5, pack runs 3.21.6. Re-verify anything `@Overwrite`-shaped. |

---

## 8. Suggested build order

Each phase is independently shippable and testable, which matters for a rework this size.

1. **Rank ladder over the existing tier int.** Retarget thresholds, level cap, XP multiplier.
   No new UI beyond text. Everything else keeps working. *Smallest change that proves the model.*
2. **`Event.invoke` optimization mixin.** Do this *before* adding listeners, so you can measure.
3. **Milestone engine (headless).** Single dispatcher per event, in-memory counters, throttled
   SavedData, delta sync packet, `/greed` debug command extensions. No screen yet — verify via
   commands and logs.
4. **Milestones screen + challenges screen.** Wire the 21 challenge milestones onto the existing
   `completedChallengeIds`.
5. **Medallions.** Config-only `GroupedModifier` tiers first (H/D, mobs, crate, chest rolls,
   objective difficulty), then the Medallion Infuser block/UI, then assassins, then Champion.
6. **Rank-up trials.** `RebirthObjective.endGreedTrial` retune for intra-rank; new objective for
   rank-jump (toned-down Hyper) — reuse the addon's own hyper objective.
7. **God alignment.** Per-god SavedData + XP from altars/maps + cauldron sacrifices → then the
   trees + tab → then charms/piety → then ultimates.
8. **Shop retune + greedy ticket reroll.** Config plus one currency swap in
   `PlayerGreedTraderData.getResetCost` / `ServerboundGreedTraderResetMessage`.
9. **Delete the greed tree UI** last, once the god trees carry the five `GreedNodeHelper` effects.

---

## 9. Open questions for you

1. **Level cap.** 16 ranks × 25 = level 500 under the current formula. What should the cap curve be?
2. **Party credit.** Do milestones credit only the acting player, or all vault listeners? The sheet
   says "must be done BY PLAYER" — confirming this means solo attribution everywhere.
3. **The 25% carryover rule** — is it 25% of *node values* on unspent-but-unlocked foreign basic
   nodes, or 25% of the *aggregate stat* the foreign tree grants? These are different systems.
4. **AD/AP milestones** — keep them (accepting a spike + possibly imperfect classification), or
   replace with something with a clean hook?
5. **Existing-save handling** — full reset of greed progress on update, or migrate tier→rank and
   refund node points?
6. **God-tree config authoring** — pack JSON (like the current greed tree, no datagen) or add a
   vhapi loader so it can be datagen'd from the addon?

---

## 10. Notes on process

- No worktree created. This audit produced no code; when the implementation run starts, make a
  worktree for `wv-development` — its checkout moves between sessions and carries WIP
  (see `project_fused_trinket_double_effect` memory).
- The spreadsheet is mostly empty: only **Greed Milestones** (rows 3–78) and **Ancient Unique
  Modifiers** have content. `Greed Shop Contents`, `Greed Crate Loot`, `Rank Up Trials`,
  `God Tree Nodes`, `God Sacrifices`, `God Charm Rolls + Piety`, `God XP`, `God Ultimates` are all
  1×1 empty sheets. Those numbers are blockers for phases 5–8, not for 1–4.
- Milestone categories are encoded as **cell fill colour** and there are five, not four:
  blue=looting, red=combat, yellow=misc, green=challenge, and a purple/`theme` group
  (rows 9–20, 50, 52, 53) covering vault-type/objective milestones — roughly 29% of all
  reputation. Worth naming that category explicitly in the UI.
