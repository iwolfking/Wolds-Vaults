# Greed Trader Shop — Full Catalog & Tiering Scout

Scouted 2026-08-08 for the greed rank-system rework. Companion to `GREED_CHALLENGE_CRYSTALS.md`
(same config file, challenges half) and `UNIQUE_GEAR_CATALOG.md`.

**Source of truth:** `Wolds-Vaults/config/the_vault/greed/greed_trader.json` (pack config).
**Verified against:** the_vault 3.21.5 decompile (`GreedTraderConfig`, `PlayerGreedTraderData`,
`GreedTree`), woldsvaults 0.33.x source at `wv-development`, vhapi `EtchingConfigLoader`.

## Config-layer answer (the thing to check first)

**The greed shop's item content is 100% pack config.** The addon does *not* add, remove, or reweight
a single shop entry.

- The addon's only greed-trader overlay is
  `data/woldsvaults/vault_configs/greed/trader/wolds_greed_challenges.json`, whose `tierPools` and
  `pools` maps are **both empty** — it carries 10 challenge entries and nothing else. So regardless
  of merge semantics, it contributes zero shop offers.
- `MixinGreedTraderEntity` — Mr. Greedy leash/anchor movement only.
- `MixinGreedTraderScreen` — adds the coin-count display and the "Shop resets in" countdown. Cosmetic.
- `MixinPlayerGreedTraderData` — **caps shop reset cost at 36 coins**. The only addon change with
  mechanical effect on the shop.

The addon *does* inject content into things the shop sells, one layer down:

| Addon surface | Effect on the shop |
|---|---|
| `vault_configs/gear/etching/wolds_etchings.json` | **+14 etchings** into the `random_etching` pool (vhapi `putAll`, jar wins id collisions). 5 of them carry real `minGreedTier` gates. |
| `ModGearAttributes.MAP_TIER` + `VaultMapItem` + `MixinVaultGearHelper` | The entire vault-map tier system is addon code. `greed_maps` sells addon items. |
| `vault_configs/companion_relics/wolds_relic_pools.json` | Adds only a `woldsvaults:random` pool — **not** referenced by any greed relic pool. No shop effect. |

---

## How the shop actually works (code-verified)

`PlayerGreedTraderData.getOffers(uuid, greedTier, vaultLevel)`:

1. **Slot count is `greedTier + 1`.** Hardcoded in `calculateSlotCount`. Not configurable.
2. **`getAvailableEntries(tier)` is CUMULATIVE** — it concatenates `tierPools` **1 through N**, not
   just tier N. Every entry ever declared at a lower tier stays in the pool forever, at its original
   weight *and its original price band*.
3. Each slot independently weight-picks one `TradeEntry` from that combined list. **Duplicates are
   allowed**; there is no de-dup across slots.
4. `"pool"`-type entries then weight-pick a `PoolEntry` from `getPoolEntries(poolId, tier)`, which
   applies a **second** gate: `minGreedTier <= tier <= maxGreedTier` (`-1` = no cap).
5. Price: `PoolEntry.rollCoinCost` wins if either of its min/max is `> 0`; otherwise it falls back to
   the `TradeEntry`'s roll; otherwise `globalCoinCost` (5). Uniform int over `[min, max]`.
6. Pool items get `LootInitialization.initializeVaultLoot(stack, playerVaultLevel)` — gear rolls at
   the buyer's **vault level**, not their greed tier.

**Dead-slot behaviour:** if the chosen entry's pool resolves empty, `rollOffers` does `continue` —
**no retry, the slot is silently lost**. You get fewer items than you have slots. This is currently
firing hard (see Bugs).

**Tier-up is additive, not a reroll:** going from tier A to B appends `B - A` fresh offers and leaves
existing ones untouched. Tier-*down* rerolls everything.

**Rerolls:** `getResetCost = 3 + resetCount`, capped at **36** by the woldsvaults mixin.
`resetCount` zeroes on tier-up. Quest reroll = `5 + questRerollCount`, uncapped.

**Reputation today:** `GreedTree.incrementGreedTier()` does `++greedTier; greedReputation = 0` —
**rep resets to zero every tier-up**, i.e. it is a per-tier counter, not a running total.
Also `getMaxUnlockableNodes() = greedTier * 3` (greed-tree node budget scales off tier).
`CATCHUP_TIER = 13`.

---

## Master catalog — every offer the shop can produce

16 distinct offer types are declared. **14 can actually appear**; 2 never do.

| Offer | Type | What you get | First tier | Actually produces at | Price band (min–max across all tiers) |
|---|---|---|---|---|---|
| `random_etching` | `random_etching` | 1 of 26 etchings, **uniform** | 1 | 0–13+ | 10–42 |
| `catalyst_t1` | pool→catalyst | Super catalyst, size **10**, 1 cascade modifier | 1 | 0–13+ | 15–52 |
| `catalyst_t2` | pool→catalyst | Super catalyst, size **12**, 1–2 good modifiers | 5 | 5–13+ | 25–73 |
| `catalyst_t3` | pool→catalyst | Super catalyst, size **16**, 1–2 treasure modifiers | 10 | 10–13+ | 35–72 |
| `greed_catalysts_t1` | pool→catalyst | **Greedy** catalyst, size 3–5, 1 cascade mod | 1 | **0–5 only** | 20–43 |
| `greed_catalysts_t2` | pool→catalyst | Plain catalyst, size 3–4, 1 cascade mod (not greedy, not super) | 6 | 6–13+ | 25–66 |
| `super_inscriptions` | pool→inscription | Super inscription, 3 variants | 1 | 0–13+ | 20–62 |
| `random_crystals` | pool→crystal | Vault crystal, 5–15 normal + 0–3 treasure + 0–2 temporal mods | 1 | 0–13+ | **15–20 (fixed)** |
| `greed_maps` | pool→item | Vault map, 4 variants | 1 | 0–13+ | 35–50 |
| `greater_cores` | pool→item | `deck_socket` → 1 of 12 **Greater** greed cores | 3 | 3–13+ | 40–98 |
| `greed_booster_packs` | pool→item | Greed Pack (3 cards) / Mega Greed Pack (5 cards) | 4 | 4–13+ | 20–56 |
| `greed_companion_relics` | pool→item | Base greed relic, 6 pools | 3 | 3–13+ | 33–106 |
| `greed_companion_relics_t1` | pool→item | `_t1` relic pools | 6 | **6–8 only** | 66–106 |
| `greed_companion_relics_t2` | pool→item | `_t2` relic pools | 9 | **9–11 only** | 128–196 |
| `greed_companion_relics_t3` | pool→item | `_t3` relic pools | 12 | 12–13+ | 164–200 |
| `xp_burger` | `xp_burger` | Greedy Meal, 2M–10M XP | 3 | 3–13+ | 40–90 |
| `general_items` | pool→item | `woldsvaults:omega_box` | 3 | **NEVER** (weight 0) | — |

---

## Per-tier effective shop

`slots = tier + 1`. Share = probability that a given slot rolls that offer. "Dead" = weight that
resolves to an empty pool and silently drops the slot.

| Tier | Slots | Entries | Total wt | Dead wt | % slots empty |
|---|---|---|---|---|---|
| 0 | 1 | 6 | 18 | 0 | 0% |
| 1 | 2 | 6 | 18 | 0 | 0% |
| 2 | 3 | 12 | 36 | 0 | 0% |
| 3 | 4 | 22 | 59 | 0 | 0% |
| 4 | 5 | 32 | 84 | 0 | 0% |
| 5 | 6 | 43 | 112 | 0 | 0% |
| 6 | 7 | 55 | 142 | 18 | **12.7%** |
| 7 | 8 | 67 | 172 | 21 | **12.2%** |
| 8 | 9 | 79 | 202 | 24 | **11.9%** |
| 9 | 10 | 91 | 232 | 33 | **14.2%** |
| 10 | 11 | 104 | 264 | 36 | **13.6%** |
| 11 | 12 | 118 | 296 | 39 | **13.2%** |
| 12 | 13 | 132 | 328 | 48 | **14.6%** |
| 13+ | 14+ | 132 | 328 | 48 | **14.6%** |

### Tiers 0–2 — identical *composition* (same offers, same shares)

| Offer | Weight @T0/T1 | Weight @T2 | Share (all three) | Price |
|---|---|---|---|---|
| random_etching | 5 | 10 | 27.8% | 10–20 (→10–22 at T2) |
| catalyst_t1 | 4 | 8 | 22.2% | 15–30 (→15–32) |
| super_inscriptions | 4 | 8 | 22.2% | 20–40 (→20–42) |
| greed_catalysts_t1 | 3 | 6 | 16.7% | 20–35 (→20–37) |
| greed_maps | 1 | 2 | 5.6% | 35–50 |
| random_crystals | 1 | 2 | 5.6% | 15–20 |
| **total** | **18** | **36** | | |

"Identical composition" means the same offer set at the same *relative* shares across all three tiers,
for two separate reasons:

- **Tier 0 = tier 1.** `getAvailableEntries` opens with `effectiveTier = Math.max(1, greedTier)`, so
  greed tier 0 reads the tier-**1** pool. There is no tier-0 block. Tier 0 and tier 1 are the same
  6 entries, weight 18; the only difference between them is 1 slot vs 2.
- **Tier 2's block is a weight-for-weight duplicate of tier 1's** (same six offers, same 5/4/4/3/1/1,
  merely reordered in the file). Cumulative stacking therefore doubles every weight to 10/8/8/6/2/2 —
  total 36 — and every share is unchanged. Only the price bands move, and only upward
  (tier 2's `12–22` etching band widens the union to 10–22 without lifting the floor).

Shares are just `TradeEntry.weight / 18`: 5/18 = 27.8%, 4/18 = 22.2%, 3/18 = 16.7%, 1/18 = 5.6%.

**Inner pool weights are mostly inert down here.** At tiers 0–2, `catalyst_t1`, `random_crystals` and
`greed_catalysts_t1` each contain exactly one entry, and `greed_maps` has only its `0–4`-gated entry
live — so all four are forced picks and their `PoolEntry.weight` never matters. The one place the
second layer actually does something at these tiers is `super_inscriptions`, where entries 1 and 2 are
live (weights 32 and 8, the third being gated `3+`) → **80% COMMON / 20% OMEGA** within that 22.2%.

### Tier 6 (first tier with dead slots)

| Offer | Weight | Share | Price |
|---|---|---|---|
| random_etching | 30 | 21.1% | 10–30 |
| catalyst_t1 | 24 | 16.9% | 15–40 |
| super_inscriptions | 24 | 16.9% | 20–50 |
| **greed_catalysts_t1** | **18** | **0%** | **DEAD** |
| greater_cores | 8 | 5.6% | 40–86 |
| greed_maps | 6 | 4.2% | 35–50 |
| random_crystals | 6 | 4.2% | 15–20 |
| greed_companion_relics | 6 | 4.2% | 33–106 |
| greed_booster_packs | 6 | 4.2% | 20–44 |
| catalyst_t2 | 6 | 4.2% | 25–49 |
| xp_burger | 4 | 2.8% | 40–90 |
| greed_companion_relics_t1 | 2 | 1.4% | 66–106 |
| greed_catalysts_t2 | 2 | 1.4% | 25–42 |
| general_items | 0 | 0% | never |

### Tier 12 (endgame composition)

| Offer | Weight | Share | Price |
|---|---|---|---|
| random_etching | 60 | 18.3% | **10–42** |
| catalyst_t1 | 48 | 14.6% | **15–52** |
| super_inscriptions | 48 | 14.6% | **20–62** |
| **greed_catalysts_t1** | **36** | **0%** | **DEAD** |
| catalyst_t2 | 24 | 7.3% | 25–73 |
| greater_cores | 20 | 6.1% | 40–98 |
| greed_booster_packs | 18 | 5.5% | 20–56 |
| greed_catalysts_t2 | 14 | 4.3% | 25–66 |
| greed_maps | 12 | 3.7% | 35–50 |
| random_crystals | 12 | 3.7% | **15–20** |
| xp_burger | 10 | 3.0% | 40–90 |
| greed_companion_relics | 6 | 1.8% | 33–106 |
| **greed_companion_relics_t1** | **6** | **0%** | **DEAD** |
| **greed_companion_relics_t2** | **6** | **0%** | **DEAD** |
| catalyst_t3 | 6 | 1.8% | 35–72 |
| greed_companion_relics_t3 | 2 | 0.6% | 164–200 |
| general_items | 0 | 0% | never |

**Note the price columns.** Because tier pools are cumulative, the *minimum* price never rises. A
tier-12 player still draws 10-coin etchings and 15-coin catalysts from the tier-1 entries. The
per-tier `+2 min / +2 max` escalation in the config only widens the band upward; it never raises the
floor. The 12 re-declarations per offer exist *solely* to do that, and they are what inflate the file
to 132 entries for 16 offer types.

---

## Pool contents

### `greed_maps` — 4 entries, weight 10 each

| Gate | `gear_roll_type_pool` | Rarity outcomes | `map_tier` NBT |
|---|---|---|---|
| tier 0–4 | `gear_completion_crate_mono` | Scrappy+ (100%) | −1 |
| tier 5+ | `gear_completion` | Rare+ 50 / Epic+ 35 / Omega 15 | −1 |
| tier 8–11 | `strong_omega` | Epic+ 40 / Omega 10 | −1 |
| tier 11+ | `gear_treasure_map` | Rare+ 40 / Epic+ 12 / Omega 8 / Omega+ 1 | **4** |

**Map tier is NOT gated by greed tier.** `map_tier: -1` means "unrolled"; `VaultMapItem.tickRoll`
then assigns a random tier while the map is unidentified:

| Attribute | Displayed tier | Chance |
|---|---|---|
| 0 | **T1** | 25% |
| 1 | **T2** | 15% |
| 2 | **T3** | 25% |
| 3 | **T4** | 20% |
| 4 | **T5** | 10% |
| 5 | **T6** | 5% |

So a greed-tier-0 player buying the 35–50 coin map has a 5% shot at a **Tier 6** map today.
Displayed tier = attribute + 1, so the tier-11+ entry's `map_tier: 4` is a fixed **T5** map.
`MixinModConfigs.TOTAL_MAP_TIERS = 6`.

### Catalyst builders

| Pool | Gate | Size | Modifier pool | Count | isSuper | isGreedy |
|---|---|---|---|---|---|---|
| `catalyst_t1` | 0+ | 10 (const) | `cascade_modifiers` | 1 | **yes** | no |
| `catalyst_t2` | 5+ | 12 (const) | `good_modifiers` | 1–2 | **yes** | no |
| `catalyst_t3` | 10+ | 16 (const) | `treasure_modifiers` | 1–2 | **yes** | no |
| `greed_catalysts_t1` | **0–5** | 3–5 (uniform) | `cascade_modifiers` | 1 | no | **yes** |
| `greed_catalysts_t2` | 6+ | 3–4 (uniform) | `cascade_modifiers` | 1 | no | no |

#### `isGreedy` is purely cosmetic — "Greedy" and plain catalysts are mechanically identical

`isGreedy` is read in exactly **four** places across the whole codebase, none of them mechanical:

1. `InfusedCatalystItem.getName` → prefixes the name with `"Greedy "` (only when `!isSuper`; Super wins).
2. `CatalystItemRenderer:33` → swaps to the `the_vault:catalyst/greedy#inventory` model.
3. `InfusedCatalystItem.hasCustomGlint` → `isSuper || isGreedy`. So a plain catalyst has **no glint**.
4. woldsvaults `VaultCatalystInfusionRecipe` → an Ars Nouveau `make_greedy` infusion action sets the flag.

Nothing reads it in the anvil recipe, the crystal workbench, the Personal Vault, or modifier
application. **A Greedy Catalyst and a plain Catalyst of the same size and modifiers behave identically.**

#### `isSuper` is the flag that actually matters

| | `isSuper = true` | `isSuper = false` (Greedy *and* plain) |
|---|---|---|
| Anvil onto a vault crystal | **Blocked** — `CatalystAnvilRecipe` returns false | Allowed |
| Personal Vault catalyst grid | **Only these fit** (`CatalystSlot.mayPlace` requires isSuper) | Rejected |
| Tooltip | "Used to modify your Personal Vault"; **size hidden** | Shows `Size: N` |
| `size` field | **Completely inert** (see below) | Real — consumes crystal capacity |

On the anvil path, `size` is added to the crystal's size, and **if the crystal's remaining `capacity`
is less than the catalyst's `size`, a `catalyst_curse` modifier is rolled onto it**. So for
crystal-applied catalysts, **smaller size is strictly better** — same modifiers, less capacity burned,
no curse risk.

**`size` does nothing on Super catalysts.** `InfusedCatalystItem.getSize` is only read by
`CatalystAnvilRecipe`, `CrystalWorkbenchTileEntity`, and the tooltip/shop display — all non-Super
paths. Every Personal Vault path (`PersonalVaultData`, `PersonalCrystalModifiers`,
`PersonalVaultScreen`) reads **only `getModifiers`**. So `catalyst_t1`'s size 10, `_t2`'s 12 and
`_t3`'s 16 are **dead numbers**, and the tooltip hides them anyway. The only real difference between
those three is the modifier pool (`cascade` → `good` → `treasure`) and count (1 → 1–2 → 1–2).

#### History: the size-1–2 nerf

Confirmed in git. The most recent edit to this file, `5f9d9884` *"Tweak greed trader weights a bit"*,
nerfed both greedy pools:

| Pool | Before `5f9d9884` | After |
|---|---|---|
| `greed_catalysts_t1` | size 3–4 | size **3–5** |
| `greed_catalysts_t2` | size **1–2** | size **3–4** |

Since smaller size is better, both were nerfs, and `_t2` was the big one — size 1–2 catalysts let you
stack many modifiers onto a single crystal without approaching the capacity/curse threshold.

Note `greed_catalysts_t2` has had `isGreedy: false` **since the pool was created** (traced back
through `ed47d178` "VH U21.3") — it is not a recent regression, and since the flag is cosmetic it
only means the tier-2 item shows up as a plain, unglinted "Vault Catalyst" while the tier-1 item is a
glinting "Greedy Vault Catalyst". Cosmetically the t2 reads as a *downgrade*; mechanically the only
real change is the size band.

### `random_crystals` — 1 entry, weight 50

`minCoinCost 15 / maxCoinCost 20` on the **pool entry**, which overrides the `TradeEntry` band.
Crystal contents: `normal_modifiers` ×**5–15**, `treasure_modifiers` ×0–3, `temporal_modifiers` ×0–2,
duplicates allowed, level = buyer's vault level.

### `super_inscriptions` — 3 entries

| Weight | Gate | Room | Time |
|---|---|---|---|
| 32 | 0+ | 1× COMMON | 1200–3600 |
| 8 | 0+ | 1× OMEGA | 200–800 |
| 4 | 3+ | 1× OMEGA | 1200–2400 |

Room type resolves through `roomPoolsByType` (CHALLENGE 11 pools, OMEGA 12 pools, weight 10 each).

### `greater_cores` — 1 entry

`the_vault:deck_socket` with `{Modifier:"@greed", ModifierRoll:"greater"}` → rolls one of 12 deck
modifiers from `card/deck_modifiers.json` pool `greed`, at its **greater** value band:

| Core | Weight | Share |
|---|---|---|
| harvest, bounty, crimson, azure, viridian, golden | 4 each | 10.5% each |
| equilibrium, fortune, empyreal, pure | 3 each | 7.9% each |
| shiny, steadfast | 1 each | 2.6% each |

Total weight 38. Example band: Harvest greater = 0.30–0.50 (vs base 0.10–0.30, lesser 0.05).

### `greed_booster_packs` — 2 entries

| Item | Weight | Gate | Cards | Contents |
|---|---|---|---|---|
| `the_vault:greed_pack` | 10 | 0+ | 3 | `@greed` card pool, **tier 1**, 10% Foil |
| `the_vault:mega_greed_pack` | 6 | 6+ | 5 | same, **tier 1**, 10% Foil |

The `@greed` **card** pool (`card/modifiers.json`) is 16 Greed Cards — 4 directions × 4 colours,
weight 8 each. Their `multiplierPool` is `tier 1 → 3.0`, `tier 2 → 4.0`, `tier 3 → 5.0`, `maxTier 3`.
**Both packs hardcode `tier: [{value: 1}]`**, so the shop can only ever hand out T1 greed cards.

> Two different pools are both spelled `@greed` and they are not the same thing:
> `card/modifiers.json` → the 16 Greed **Cards**; `card/deck_modifiers.json` → the 12 Greed **Cores**.
> The item type decides which registry resolves it.

### Companion relic pools

All six sub-pools are the same shape across `_t1/_t2/_t3`: coins, wooden, ornate, gilded, living,
plentiful. Weights 10/10/5/5/5/10.

Note `the_vault:greed_gilded` and `the_vault:greed_living` have **no tiered variants** — `_t1`, `_t2`
and `_t3` all reuse the *base* gilded/living pools. Only coins/wooden/ornate/plentiful actually tier up.

`companion_relics.json` also defines **`_t4` pools** (`greed_coins_t4`, `greed_wooden_t4`,
`greed_ornate_t4`, `greed_plentiful_t4`) that **nothing references** — free headroom already built.

### Modifier pools

| Pool | Entries | Contents |
|---|---|---|
| `normal_modifiers` | 12 | wooden_cascade 13.5%, gilded/living/ornate/coin_cascade + plentiful + more_mobs_cata 10.8% each, wooden_bonus 5.4%, gilded/living/ornate/coin_pile 4.1% each |
| `cascade_modifiers` | 7 | wooden_cascade 17.2%, other six 13.8% each |
| `good_modifiers` | 5 | gilded, living, ornate, coin_pile, wooden_bonus — 20% each |
| `treasure_modifiers` | 4 | hoard, treasure, dungeon_doors, vendoor_doors — 25% each |
| `temporal_modifiers` | 16 | flat 6.25% each: overpower, champion_domain, loot_goblin, door_hunter, ultimate_regeneration, kill_nuke, kill_charm, kill_hunter, kill_totem, bronze_nuke, glued_mobs, rock_solid, pylon_hunter, soul_fest, daycare, lunar |

### Etchings — 26 at runtime

13 pack + 14 addon − 1 id collision (`woldsvaults:ingenium`, addon wins). Picked **uniformly** —
`etching.json`'s `weight` field is **not read** by `rollRandomEtching`.

| minGreedTier | Count | Etchings |
|---|---|---|
| **0** | 21 | assassin, blood, divinity, dragon, dream, dryad, golem, phoenix, rift, treasure, vampire, zod *(all `the_vault:`)*; concentrate_drain, diffuse_chemical_bomb, fireball_greedball, fireball_volley_mitosis, levitation_slow_falling, prudent_chaos, purist_common, reaving_hemmorage, reverberation *(all `woldsvaults:`)* |
| 4 | 2 | `woldsvaults:colossus_titan_resistance`, `woldsvaults:pyramid_scheme` |
| 6 | 1 | `woldsvaults:ingenium` |
| 7 | 2 | `woldsvaults:divinity`, `woldsvaults:sneaky_getaway_ninja` |

Eligible counts: 21 at tiers 0–3, 23 at 4–5, 24 at 6, **26 at 7+**. **No pack etching sets a gate** —
every `the_vault:` etching including `zod` and `divinity` is buyable at greed tier 0.

---

## Bugs and dead config

1. **`greed_catalysts_t1` is the single largest dead weight in the game.** The pool caps at
   `maxGreedTier 5`, but the `TradeEntry` referencing it is re-declared at **every tier 1–12**.
   From tier 6 on, that accumulated weight (18 → 36) resolves to an empty pool and drops the slot.
   **~12–15% of every shop slot from tier 6 upward produces nothing at all.** Fix is one of: cap the
   entry's declarations at tier 5, or lift the pool's `maxGreedTier`.
2. **`greed_companion_relics_t1`** (`maxGreedTier 8`) is still referenced at tiers 9–12 → 6 more dead
   weight. **`_t2`** (`maxGreedTier 11`) same at tier 12.
3. **`random_crystals` price is broken-cheap.** The pool entry's `15–20` overrides the `TradeEntry`
   band, so the `40–100 … 62–166` written across all 12 tiers is **dead text**. A 5–15-modifier
   crystal at buyer's vault level costs 15–20 coins forever. Either the override or the tier bands is
   a mistake; given the item, the 15–20 looks like the accident.
4. **`general_items` has `weight: 0`** at all three of its declarations (tiers 3, 11, 12) →
   `woldsvaults:omega_box` is unreachable.
5. **`companion_super_relics` and `modified_super_inscriptions` are empty and unreferenced** — dead config.
6. **`greed_catalysts_t2` loses `isGreedy`** relative to `_t1` — cosmetic only (name/model/glint),
   and it has been that way since the pool was created, so it's not a regression. But it does mean
   the "higher tier" item looks plainer than the lower one.
7. **Map tier is completely ungated** (see above).
8. **`maxQuestsPerTier` is `{0:3, 1:3, 2:3}`** — flat 3 forever. `maxChallengesPerTier` does ramp
   3→4→5 across tiers 0–10.
9. Pre-identification the map tooltip prints the raw `the_vault:map_tier` NBT un-offset while the
   post-identification path prints `attribute + 1` — the `map_tier: 4` entry is a **T5** map.

---

## Mapping onto the new rank ladder

Your 16 ranks vs. the engine's 13 tiers (0–12, `CATCHUP_TIER` 13).

### Already free — no code needed

- **"+1 shop slot" per rank.** `calculateSlotCount = greedTier + 1` is exactly this, *provided ranks
  map 1:1 onto `greedTier`*. Scavenger 1 = tier 0 (1 slot) … Legend = tier 15 (16 slots).
- **Per-rank content unlocks.** Both gating layers (`tierPools` key, and `minGreedTier`/`maxGreedTier`
  on pool entries) already do exactly what the ladder describes.
- **Greater Core staging** ("some" → "more" → "all"). Split the 12-entry `@greed` deck-modifier pool
  into `greater_cores_t1/t2/t3` and gate them at Looter 2 / Hunter 2 / Master 2. Pure config.
- **Greedy relic levels 2 and 3.** `_t1/_t2/_t3` pools already exist, plus unreferenced `_t4`.
- **Map tiers 1–6.** Set `the_vault:map_tier` explicitly per entry instead of `-1` and gate by rank.
  Remember the off-by-one: NBT 0 = T1, NBT 5 = T6.
- **Ancient uniques / Mystery Deck / god alignments / challenges** can all be added as new gated
  `pools` entries — the shop takes arbitrary `itemStack` with NBT.

### Needs new code (addon mixin) — flagging early

| Ladder feature | Why config can't do it |
|---|---|
| **Champion 3: −10% greed shop cost** | There is no cost-multiplier hook anywhere. `rollCoinCost` returns a raw uniform int. Needs a mixin on `PlayerGreedTraderData.rollSingleOffer` / `rollFromPool` or on `GreedTraderConfig.rollCoinCost`. |
| **Cumulative reputation thresholds** | `incrementGreedTier()` sets `greedReputation = 0`. Rep is per-tier today. Your numbers (0/75/100/125/…/1000) read as *per-rank-up costs*, which matches the current reset behaviour — **but if you meant running totals, that's a mixin.** Worth pinning down before anything else. |
| **God-level gates (H1 lvl 2, M1 lvl 4, C1 lvl 6, Legend lvl 8)** | Tier-up has no external predicate. Needs a hook on whatever advances the tier. |
| **Greed card tiers T1–T4 (1.8×–3×)** | Cards cap at `maxTier 3` with flat rolls 3.0/4.0/5.0, and both greed packs hardcode `tier: 1`. Your 4 tiers at 1.8–3.0× is a rewrite of `multiplierPool` **and** needs `maxTier: 4`; the pack `tier` roll then becomes the rank-gated knob (or sell cards directly). |
| **"+ancient drop chance" (M1, C2)** | Not a shop property at all. |
| **Tiers 13–15** | `tierPools` stops at 12. Slots keep growing but no new content is declared. Needs entries for the top 3 ranks. |

### Open question on the ladder itself

**Champion 1 is the only rank after Scavenger 1 with no "+1 shop slot"** in your list. Every other
rank has one. Since `calculateSlotCount` is a flat `tier + 1`, a rank that grants no slot needs a
mixin to break the formula — so if that omission was a typo it's free, and if it was deliberate it
costs code. Worth confirming.

---

## Suggested reorganisation

### 1. Stop re-declaring entries per tier

This is the big one. The cumulative union means **each offer type only needs to be declared once, at
the rank where it unlocks.** The current 132-entry tier-12 list collapses to ~20 entries. You lose the
per-tier price escalation — but that escalation never raised the price *floor*, so it was already
doing almost nothing. Config becomes directly readable as "this unlocks at this rank", which is
exactly what the rank ladder needs.

If you still want prices to climb with rank, do it with a single rank-scaled multiplier in the same
mixin that implements Champion 3's −10%. One knob instead of 132 hand-tuned pairs.

### 2. Move gating to `minGreedTier`, keep `tierPools` for the unlock moment

Two layers currently fight each other — that's what produces the dead slots. Cleanest split:

- `tierPools[rank]` = **the rank at which this offer type first appears.** Declared once.
- `minGreedTier`/`maxGreedTier` on pool entries = **which variant** within that offer type.

Then a `greed_maps` entry declared once at Scavenger 3 can carry six pool entries gated
`0–2 / 0–2 / …` that swap T1–T3 → T4 → T5 → T6 as rank climbs, with zero dead weight, because the
pool always has *something* in range.

**Never let a pool go fully empty in a rank range where its `tierPools` entry is live.** That single
rule kills bugs 1 and 2.

### 3. Sample rank → shop map

Using your ladder, one declaration per row:

| Rank | Tier | Slots | New shop entry |
|---|---|---|---|
| Scavenger 1 | 0 | 1 | etchings, `catalyst_t1`, `super_inscriptions`, `random_crystals` |
| Scavenger 2 | 1 | 2 | greed booster pack (T1 cards) |
| Scavenger 3 | 2 | 3 | `greed_maps` — pool gated to **T1–T3** |
| Looter 1 | 3 | 4 | god alignments, `greed_companion_relics` (base), challenge crystals |
| Looter 2 | 4 | 5 | `greater_cores_t1`; `greed_maps` pool opens **T4** |
| Looter 3 | 5 | 6 | T2 greed cards |
| Hunter 1 | 6 | 7 | ancient uniques; `greed_maps` opens **T5** |
| Hunter 2 | 7 | 8 | `greater_cores_t2`, Mystery Deck |
| Hunter 3 | 8 | 9 | `greed_companion_relics_t1`, T3 greed cards |
| Master 1 | 9 | 10 | `greed_maps` opens **T6** |
| Master 2 | 10 | 11 | `greater_cores_t3` (full 12-core pool), `catalyst_t3` |
| Master 3 | 11 | 12 | `greed_companion_relics_t2` |
| Champion 1 | 12 | 13 | T4 greed cards |
| Champion 2 | 13 | 14 | `greed_companion_relics_t3` |
| Champion 3 | 14 | 15 | −10% cost (mixin) |
| Legend | 15 | 16 | `_t4` relic pools — already built, currently unreferenced |

### 4. Item types worth rebalancing while you're in here

- **Etchings are 18–28% of every slot at every rank** and are entirely ungated on the pack side. If
  etchings are meant to feel like a reward, they need `minGreedTier` values (the addon's 14 already
  demonstrate the pattern). If they're meant to be filler, their weight of 5-per-declaration is high.
- **`random_crystals` at 15–20 coins is the best value in the shop by a wide margin** and never
  changes. Decide deliberately whether that's the intent.
- **`greed_companion_relics` prices are non-monotonic** — base pool is 66–106 at tiers 3–4 but drops
  to **33–53** at tier 5+, then `_t1` jumps back to 66–106. The tier-5 entry looks like a typo.
- **`xp_burger` never scales.** Flat 2M–10M XP for 40–90 coins from tier 3 to 13.
- **`greed_maps` price never moves** — 35–50 at every single tier, while the item behind it goes from
  Scrappy+ to Omega+.

---

## Reproducing this

`scratchpad/greed_shop_scout.py` (session `aab2e874`) models the exact runtime path — cumulative
`getAvailableEntries`, the pool gate, the cost-precedence rule, and the dead-slot detection — and
prints every table above. Re-run it after editing `greed_trader.json` to see the effective
distribution and catch newly-created dead weight.
