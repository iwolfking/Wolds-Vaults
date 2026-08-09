# Greed → Completion Crate: every table and every line of logic

Traced 2026-08-08 against `wv-development` master (+ the `fix/fang-echo-double-dipping` working
tree, which differs only by an unrelated LuckHelper block) and pack `feature/increase-hyper-scaling`.

Everything here is **woldsvaults-side**. The base `the_vault` completion-crate tables contain no
`greed_coin` at all — confirmed by grepping the whole pack `config/` tree.

---

## 1. File map

| Thing | Where |
|---|---|
| The injection logic | `mixins/vaulthunters/custom/MixinRunner.java` → `addGreedCoinsToCrate` |
| The accessor it writes through | `mixins/vaulthunters/accessors/CrateLootGeneratorAccessor.java` |
| Table definitions (datagen source) | `datagen/ModVaultLootTablesProvider.java` |
| Generated tables | `src/generated/resources/data/woldsvaults/vault_configs/gen/loot_tables/greed_crate_bonus_*.json` |
| Table registration | `.../vault_configs/vault_loot_tables/loot_tables.json` (keys 1–17, all version `1.0`) |
| Hyper knobs | `config/HyperObjectiveConfig.java` → pack `config/the_vault/hyper_objective.json` |
| `greedy_crate_tier` modifier | `datagen/ModVaultModifiersProvider.java` → `.../vault/modifiers/wolds_builtin_modifiers.json` |
| Second (hyper) injector | `objectives/hyper/HyperCrateRewards.java` |

These are **addon-jar** `vault_configs`, merged over the pack at runtime by vhapi. There is no
pack-side copy of the greed tables — editing the pack config cannot touch them.

---

## 2. THE HEADLINE: 17 tables exist, exactly 1 is ever rolled

`ModVaultLootTablesProvider` builds 17 `greed_crate_bonus_*` tables, one per vault objective. The
mixin used to pick between them:

```java
ResourceLocation lootTableKey = WoldsVaults.id("greed_crate_bonus_" + VaultUtils.getMainObjectiveKey(vault));
```

Commit **`c366d7ad` "Temporary fix for weird greed crate behaviour"** (iwolfking, 2026-06-13)
replaced that with:

```java
ResourceLocation lootTableKey = WoldsVaults.id("greed_crate_bonus_scavenger");
```

and added the vault-type exclusion guard. That is still the code today. **The other 16 tables are
dead data.** Since 2026-06-13, every greed crate bonus in every eligible vault rolls the
*scavenger* table.

Likely cause of the "weird behaviour": `getMainObjectiveKey` returns the registered crystal
objective type id, and a large number of them have no matching table (`hyper`, `corrupted`, `cake`,
`boss`, `herald`, `unhinged_scavenger_bingo`, `speedrun`, `ascension`, `paradox`, `personal`,
`raid`, `pvp`, `time_trial`, `rebirth`, …). Those all hit the `!VaultRegistry.LOOT_TABLE.contains`
early-return and silently granted **zero** greed bonus. Conversely `greed_crate_bonus_obelisk` has
no matching objective key at all and could never have fired.

**Naming-contract gotcha if per-objective selection is restored**: `TypeSupplierAdapter.register`
does `classToType.put(class, id)` into a HashMap, so a class registered under two ids resolves to
whichever registration ran **last**. `ScalingBallisticBingoCrystalObjective` is registered as both
`ballistic_bingo` (vhapi `CustomObjectiveRegistryEntry`) and `scaling_ballistic_bingo` (direct
register); same for `SpeedrunCrystalObjective` → `speedrun` / `brb_speedrun`. Registration order,
not the table name, decides which key you get.

### Table inventory

| Table | Coin roll | Rest of table | Live? |
|---|---|---|---|
| `greed_crate_bonus_scavenger` | 3–5 | generic pools | **YES — the only one used** |
| `greed_crate_bonus_zealot` | 3–5 | generic pools | dead |
| `greed_crate_bonus_rune_boss` | 3–5 | generic pools | dead |
| `greed_crate_bonus_alchemy` | 3–5 | generic pools | dead |
| `greed_crate_bonus_chaos` | 3–5 | generic pools | dead |
| `greed_crate_bonus_unhinged_scavenger` | 5–7 | generic pools | dead |
| `greed_crate_bonus_survival` | 3–4 | generic pools | dead |
| `greed_crate_bonus_ballistic_bingo` | 3–4 | generic pools | dead |
| `greed_crate_bonus_scavenger_bingo` | 3–4 | generic pools | dead |
| `greed_crate_bonus_obelisk` | 3–4 | generic pools | dead (no such objective key) |
| `greed_crate_bonus_bingo` | 2–3 | generic pools | dead |
| `greed_crate_bonus_enchanted_elixir` | 2–3 | generic pools | dead |
| `greed_crate_bonus_brutal_bosses` | 2–3 | generic pools | dead |
| `greed_crate_bonus_elixir` | 2–2 | generic pools | dead |
| `greed_crate_bonus_monolith` | — | `minecraft:air` only | dead + vault type excluded |
| `greed_crate_bonus_haunted_braziers` | — | `minecraft:air` only | dead |
| `greed_crate_bonus_vault_royale` | — | `minecraft:air` only | dead + vault type excluded |

The 14 "real" tables are **byte-identical apart from the coin min/max**. Every one calls the same
`addGenericGreedPools(builder)` for entries 1–4.

---

## 3. Trigger conditions

Registered per-`Runner` at `Runner.initServer` TAIL; fires on `CommonEvents.CRATE_AWARD_EVENT`.

```java
if (isNotOwnCratePreAward(event)) return;                    // PRE phase only, own listener only
int greedTier = PlayerGreedTreeData.get(...).getGreedTier(player.getUUID());
if (vaultLevel >= 100
    && greedTier > 0
    && !isRoyaleVault && !isBrazierVault && !isCakeVault && !isSpecialVault) { ... }
```

* **PRE-phase guard** — `CRATE_AWARD_EVENT` is a server-global bus fired twice (PRE/POST) for every
  crate in every vault. Without the guard each live Runner injects a roll into everyone's crate.
* **Vault level ≥ 100** — hard gate, not scaled.
* **Greed tier > 0** — a tier-0 player gets nothing.
* **Excluded**: Vault Royale, Monolith/Braziers, Cake, and `isSpecialVault` = any royale, Herald,
  Ascension, PvP, Raid, Rebirth.
* Each runner rolls **independently** off **their own** greed tier.

---

## 4. The live table — `woldsvaults:greed_crate_bonus_scavenger`

Selection is recursive-descent (`LootPool.getRandomFlat` → `WeightedTree.getRandom` then `flatten`),
each entry rolls independently, item counts are `uniform(min,max)` inclusive both ends.

### Entry 0 — Greed Coins · 1 roll

| Item | Weight | p | Count |
|---|---|---|---|
| `the_vault:greed_coin` | 1 | 100% | 3–5 |

E = 4 coins before the greed-tier/greedy-tier maths in §5.

### Entry 1 — Foci · 3 rolls (total weight 11)

| Item | Weight | p | Count |
|---|---|---|---|
| `the_vault:vorpal_focus` | 2 | 18.18% | 2 |
| `the_vault:waning_focus` | 2 | 18.18% | 2 |
| `the_vault:waxing_focus` | 2 | 18.18% | 2 |
| `the_vault:cryonic_focus` | 1 | 9.09% | 1 |
| `the_vault:pyretic_focus` | 1 | 9.09% | 1 |
| `the_vault:opportunistic_focus` | 1 | 9.09% | 1 |
| `the_vault:empowered_chaotic_focus` | 1 | 9.09% | 1 |
| `woldsvaults:eccentric_focus` | 1 | 9.09% | 2 |

E = 1.636 items/roll × 3 = **4.91 foci**.

### Entry 2 — Currency · 3 rolls (total weight 4)

| Item | Weight | p | Count |
|---|---|---|---|
| `the_vault:vault_gold` | 3 | 75% | 4–9 |
| `the_vault:vault_platinum` | 1 | 25% | 3–5 |

E = 5.875 items/roll × 3 = **17.63 currency** (13.0 gold + 3.0 platinum). This is the fattest entry
by item count, by a wide margin.

### Entry 3 — Map · 1 roll (total weight 2)

| Item | Weight | p | Count | NBT |
|---|---|---|---|---|
| `minecraft:air` | 1 | 50% | 1 | — (empty, stripped by `loot.removeIf(isEmpty)`) |
| `the_vault:map` | 1 | 50% | 1 | `gear_roll_type_pool: gear_completion`, `map_tier: -1` |

E = **0.5 maps**.

### Entry 4 — Grab bag · 1 roll (total weight 249)

| Item | Weight | p | Count |
|---|---|---|---|
| `the_vault:soul_vortex` | 16 | 6.43% | 1 |
| `the_vault:spicy_hearty_burger` | 16 | 6.43% | 1–4 |
| `the_vault:gem_pog` | 16 | 6.43% | 3 |
| `the_vault:sour_orange` | 16 | 6.43% | 3 |
| `the_vault:bitter_lemon` | 16 | 6.43% | 6 |
| `woldsvaults:soul_ichor` | 14 | 5.62% | 8 |
| `the_vault:unidentified_treasure_key` | 12 | 4.82% | 2 |
| `the_vault:recharge_core` | 12 | 4.82% | 1 |
| `woldsvaults:altar_recatalyzer` | 12 | 4.82% | 8 |
| `woldsvaults:companion_reroller` | 12 | 4.82% | 1 |
| `woldsvaults:gem_box` | 12 | 4.82% | 32 |
| `the_vault:card_juice` | 10 | 4.02% | 32 |
| `the_vault:jewel_pouch` | 10 | 4.02% | 16 |
| `woldsvaults:augment_box` | 10 | 4.02% | 1–4 |
| `woldsvaults:hasty_pomegranate` | 10 | 4.02% | 3 |
| `woldsvaults:omega_box` | 8 | 3.21% | 1–4 |
| `woldsvaults:inscription_box` | 8 | 3.21% | 1–4 |
| `woldsvaults:catalyst_box` | 8 | 3.21% | 2–4 |
| `woldsvaults:repair_augmenter` | 8 | 3.21% | 1 |
| `the_vault:deck_socket` (`Modifier: @completion_crate`) | 6 | 2.41% | 1 |
| `woldsvaults:concealed_chaos` | 4 | 1.61% | 1 |
| `woldsvaults:general_decor_scroll` | 4 | 1.61% | 1 |
| `the_vault:deck_socket` (`@completion_crate`, `ModifierRoll: greater`) | 3 | 1.20% | 1 |
| `the_vault:companion_egg` | 2 | 0.80% | 1 |
| `woldsvaults:uber_chaos_catalyst` | 2 | 0.80% | 1 |
| `the_vault:mystic_pear` | 1 | 0.40% | 1 |
| `woldsvaults:capstone_all_seeing_eye` | 1 | 0.40% | 1 |

E = **6.10 items**, exactly one stack.

### Totals per crate (greed tier 1, non-hyper)

| Entry | Stacks | E[items] |
|---|---|---|
| 0 Coins | 1 | 4.00 |
| 1 Foci | 3 | 4.91 |
| 2 Currency | 3 | 17.63 |
| 3 Map | 0.5 | 0.50 |
| 4 Grab bag | 1 | 6.10 |
| **Total** | **8.5** | **33.13** |

For scale: the whole base completion crate at level 100 is E≈27.3 items (`base_crate_100`) up to
E≈87.8 (`base_crate_cursed_2_100`). The greed bonus is a **second crate's worth of loot**, and
unlike the base table it does not scale with crate tiers (see §6).

---

## 5. Coin scaling

```java
if (reward.getItem().equals(ModItems.GREED_COIN)) {
    int count = reward.getCount() + (greedTier - 1);
    if (greedyCrateTiers > 0) {
        count = Math.round(count * (1.0F + cfg.getGreedyCoinBonusPerStack() * greedyCrateTiers));
    }
    reward.setCount(count);
}
```

* `greedTier` adds **flat +1 coin per tier above 1** — additive, not multiplicative.
  E[coins] = `greedTier + 3`.
* `greedyCrateTiers` = stacks of the `woldsvaults:greedy_crate_tier` vault modifier
  (`chance: 0.0`, pure marker; tooltip "+100% Greed Coins in the completion crate").
  Granted **only** by `HyperEscalationManager.onBossKilled`: +1 per hyperboss kill, +2 at score
  ≥ `scoreDoubleGreedy` (1,000,000), +3 at ≥ `scoreTripleGreedy` (5,000,000).
* `greedyCoinBonusPerStack` = **1.0** (both in the addon default and live pack
  `config/the_vault/hyper_objective.json`).

⇒ **E[coins] = round((greedTier + 3) × (1 + 1.0 × greedyCrateTiers))**

| greedTier ↓ / greedy tiers → | 0 | 1 | 2 | 3 | 5 |
|---|---|---|---|---|---|
| 1 | 4 | 8 | 12 | 16 | 24 |
| 5 | 8 | 16 | 24 | 32 | 48 |
| 10 | 13 | 26 | 39 | 52 | 78 |

Coins are the **only** part of the table touched by greed tier. Everything else is flat.

---

## 6. The hyper double-pass

```java
float hyperBonusQuantity = HyperVaultObjective.get(vault)
        .map(o -> o.getOr(AwardCrateObjective.ITEM_QUANTITY, 0.0F))
        .orElse(-1.0F) * cfg.getGreedBonusTierEfficiency();
boolean hyper = hyperBonusQuantity >= 0.0F;
```

* Non-hyper vault → `-1 × 0.15 = -0.15` → `hyper = false` → **one pass at quantity 0**, everything
  from the table goes in.
* Hyper vault → **two passes**:
  * pass 1 at quantity 0 keeps **only greed coins** (non-coins hit `continue`);
  * pass 2 at quantity `0.15 × ITEM_QUANTITY` keeps **only non-coins**.
* `greedBonusTierEfficiency` = **0.15** (default and live pack value).
* `ITEM_QUANTITY` here is the value stored **on the objective** by `CrateItemQuantityModifier`
  (`crate_tier` ×1.0, `super_crate_tier` ×4.0, `crate_quantity` ×0.01, `map_crate_quantity` raw).
  It does **not** include the deck `BountyDeckModifier` or prestige `CrateTierPrestigePower`
  additions — those are summed into a local `AtomicReference` at award time in
  `AwardCrateObjective` and never written back to the objective.
* Hyper grants crate tiers on a quadratic ramp: kill *k* grants `5k` tiers, rising to `7k`/`9k`/`15k`
  past scores 250k / 1.5M / 25M. So a 5-kill run at low score ≈ 75 crate tiers ⇒ the non-coin greed
  bonus rolls at `1 + 0.15 × 75` = **×12.25** quantity.
* `LootTableGenerator.generateEntry` applies quantity **per entry** with stochastic rounding
  (`fRoll = roll × (1 + q)`, then `(int)fRoll + (rand < frac ? 1 : 0)`) — expectation exact,
  **no cap** (the 54-roll cap and the woldsvaults `1.1·ln(x+1)` log-nerf both live in
  `TieredLootTableGenerator`, which this plain generator never touches).

---

## 7. How the injected items reach the crate

`MixinRunner` writes into the base `CrateLootGenerator.additionalItems` list via the accessor mixin.
In `CrateLootGenerator.createLoot`:

```java
if (this.lootTable != null) { ...LootTableGenerator with itemQuantity... }
this.additionalItems.forEach(stack -> loot.add(stack.copy()));   // <-- raw, no quantity applied
this.mergeLoot(loot);
loot.removeIf(ItemStack::isEmpty);
loot.addAll(this.createSpecialLoot(...));
Collections.shuffle(loot);
```

Consequences worth knowing before reworking:

* Additional items **bypass the crate's `itemQuantity` entirely** — crate tiers, sigil
  `extraCrateTiers`, deck bounty modifiers and prestige crate-tier powers do **not** multiply the
  greed bonus. The hyper second pass exists precisely to work around this.
* `mergeLoot` runs after, so injected stacks merge with identical base-table stacks up to max stack
  size. Nothing is dropped; `VaultCrateBlock.getCrateWithLootOversized` writes an unbounded list.
* `AwardCrateObjective.LOOT_MULTIPLIER` is applied *after* `generate()`, so it **does** multiply the
  greed bonus along with everything else.
* Only two things in the whole addon register on `CRATE_AWARD_EVENT`: this handler and
  `addHyperScoreRewardsToCrate` (§8). There is no other greed→crate path.

---

## 8. The other greed loot: hyper score-tier injections

`HyperCrateRewards.rollForVault(vault, greedTier, random)` — pools live in
`config/the_vault/hyper_objective.json`. Markers `rare_crate_tier` / `epic_crate_tier` /
`omega_crate_tier` are added by hyperboss kills scoring past 75k / 150k / 500k; each **stack** rolls
the pool `rareRolls`/`epicRolls`/`omegaRolls` (4/3/3) times, +1 draw for stacks earned at score
≥ 2,000,000.

Greed-scaled lines (`count *= greedTier`, a tier-0 player loses the roll entirely):

| Pool | Line | Weight | p per draw | Count |
|---|---|---|---|---|
| Epic (Σ120) | greed coins | 10 | 8.33% | `1 × greedTier` |
| Omega (Σ611) | greed coins | 300 | **49.10%** | `uniform(2,3) × greedTier` |
| Rare (Σ342) | random etching, rolled **at greed tier** (floored to 1) | 5 | 1.46% | 1 |

Greed-adjacent but *not* tier-scaled: `woldsvaults:greedy_ticket` — epic w=5 (4.17%) ×1,
omega w=20 (3.27%) ×3.

The omega pool is where the real greed-coin firehose is: nearly half of every omega draw is
`2–3 × greedTier` coins, 3–4 draws per omega marker stack.

---

## 9. Levers, ranked by blast radius

| Lever | Where | Current |
|---|---|---|
| Which table is rolled | `MixinRunner:105` — hardcoded | `greed_crate_bonus_scavenger` |
| Eligibility gate | `MixinRunner:104` | level ≥ 100, tier > 0, 4 vault-type exclusions |
| Coin base roll | table entry 0 | uniform(3,5) |
| Coin per-tier bonus | `MixinRunner:125` — hardcoded `+ (greedTier - 1)` | flat +1/tier |
| Coin greedy multiplier | `hyper_objective.json` `greedyCoinBonusPerStack` | 1.0 |
| Greedy tiers per kill | `hyper_objective.json` `scoreDoubleGreedy`/`scoreTripleGreedy` | 1M / 5M |
| Non-coin hyper scaling | `hyper_objective.json` `greedBonusTierEfficiency` | 0.15 |
| The other 4 entries | `ModVaultLootTablesProvider.addGenericGreedPools` | shared by all 14 tables |
| Hyper coin firehose | `hyper_objective.json` `omegaRewards[greedCoins]` | w=300/611, 2–3 × tier |

Three of the four are **rebuild-required** (hardcoded in the mixin or in datagen); only the
`hyper_objective.json` knobs are live-tunable from the pack. Note also that the greed tables are
addon-jar `vault_configs` with no pack-side copy, so pack config alone cannot retune them.

Related: [[project-greed-rework]] [[reference-crate-tier-loot-scaling]]
