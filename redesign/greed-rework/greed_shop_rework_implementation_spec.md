# Greed Crate Loot — Rework Implementation Spec

Companion to the main working doc (`WV Greed Rework.md`, same folder). That doc owns the *design*;
this one owns the **implementation detail, resolved edge cases, and measured numbers** for the
greed → completion-crate loot system specifically, so the main doc stays clean.

- **Current-system trace**: `library\GREED_CRATE_BONUS.md` (every file, mixin, formula, weight)
- **New tables**: `Wold's Vaults Greed Rework.xlsx` (same folder), tab **Greed Crate Loot** (GCL 1–7)
- **Rank / medallion ladder**: `WV Greed Rework.md`, "Greed Medallions"
- **Broader feasibility audit**: `GREED_REWORK_FEASIBILITY.md` (same folder)

Status: **design locked, not being coded yet.** Nothing below has been implemented.

---

## 1. The architectural change

The selection axis flips. This is the whole point of the rework and it also fixes a live bug.

| | Current | New |
|---|---|---|
| Loot table chosen by | **objective** — 17 tables | **medallion GCL** — 7 tables |
| Objective's role | picks the table | scalar coin multiplier only |
| Coins live in | the loot table (entry 0) + hardcoded mixin math | a formula outside the table |
| Loot scales with | *nothing* — flat for every player, tier and objective | medallion tier |
| Player's stake | ambient greed tier, un-opt-outable | per-crystal medallion, chosen |

**The bug this fixes**: `MixinRunner.addGreedCoinsToCrate` originally did
`WoldsVaults.id("greed_crate_bonus_" + VaultUtils.getMainObjectiveKey(vault))`. Objectives with no
matching table hit the `!VaultRegistry.LOOT_TABLE.contains` early return and silently granted
**zero** greed loot. Commit `c366d7ad` ("Temporary fix for weird greed crate behaviour",
2026-06-13) papered over it by hardcoding `greed_crate_bonus_scavenger`, which is still the shipped
behaviour — **16 of the 17 tables are dead data today.** Under the new design the objective only
feeds a multiplier, so an unlisted objective degrades to `1 × BGC` instead of nothing.

**Second consequence — the hyper double-pass can go away.** The current two-pass hack
(`greedBonusTierEfficiency` 0.15, roll once for coins at quantity 0 and again for non-coins at
scaled quantity) exists *only* because coins live inside the loot table and had to be shielded from
quantity scaling. With coins computed in code and appended as their own stack, you roll the GCL
table once and add the coin stack. One less moving part, one less config knob.

---

## 2. Resolved decisions

Answers given 2026-08-09; these close the open questions raised against the first draft.

### D1 — Hyper coins: pure substitution, everything else untouched
The greedy-crate-tier multiplier and the rare/epic/omega crate-tier coin injections are **unchanged**.
The only edit is the *base* number: what used to be `uniform(3,5) + (greedTier − 1)` becomes
`2 × BGC`. Greedy crate tiers still multiply that base.

```
hyper coins = floor( 2 × BGC ) × (1 + greedyCoinBonusPerStack × greedyCrateTiers)
```

`greedyCoinBonusPerStack` stays 1.0; `scoreDoubleGreedy` / `scoreTripleGreedy` (1M / 5M) and the
+1/+2/+3 stacks-per-kill schedule in `HyperEscalationManager.onBossKilled` are untouched.
`HyperCrateRewards` (epic `1 × greedTier` coins, omega `2–3 × greedTier` coins, rare random etching
at greed tier) is untouched.

> **Implementation note, not a design question:** those three `HyperCrateRewards` lines read
> `greedTier` as their input. Since ranks replace tiers, they inherit whatever `getGreedTier()` is
> redefined to return — per `GREED_REWORK_FEASIBILITY.md` the plan is to redefine it as the rank
> index, which keeps them working with no code change. Worth a deliberate confirmation at
> implementation time rather than an accident.

### D2 — Braziers are out entirely
Brazier and Haunted Brazier vaults are **completely removed from greed tables**: no coins *and* no
GCL loot. The existing `!VaultUtils.isBrazierVault(vault)` guard already covers Monolith; Haunted
Braziers (`haunted_braziers`, an addon objective) needs its own exclusion — it is **not** covered by
`isBrazierVault`, which only tests `MonolithObjective`. The three air-only placeholder tables
(`monolith`, `haunted_braziers`, `vault_royale`) become unnecessary and should be deleted rather
than ported.

### D3 — Objective multipliers (updated table)
`1 × BGC` is the fallback for every objective not listed. Three additions and one placement change
from the spreadsheet's column G:

| Objective | Multiplier | Change |
|---|---|---|
| Scavenger — **and every unlisted objective** | `1 × BGC` | fallback |
| Brutal Bosses | `1.2 × BGC` | — |
| Zealot | `1.2 × BGC` | — |
| Rune Boss | `1.2 × BGC × max(1, log₁₀(runes))` | scales — see §4.4 |
| **Unhinged Scavenger Hunt** | `1.2 × BGC` | **NEW** |
| **Enchanted Elixir** | `1.2 × BGC` | **NEW** |
| Alchemy | `1.5 × BGC` | — |
| **Chaos** | `1.5 × BGC` | **NEW** |
| Bingo / Scavingo / **Unhinged Collector** | `1.5 × BGC × 1.025^BingoLines` | Collector folded in |
| Ballistic Bingo | `1.6 × BGC × 1.03^BingoLines` | — |
| Corrupted | `2 × BGC` | — |
| Hyper | `2 × BGC` × greedy-tier multiplier (D1) | — |
| Brazier / Haunted Brazier | *excluded entirely* (D2) | — |

Result rounds **down** (`floor`).

> **Interpretation flag.** The instruction was "add unhinged scavenger and enchanted elixir as their
> own separate 1.2 × BGC entries, and unhinged scavenger should live in the bingo/scavingo line."
> Read as: **Unhinged Scavenger *Hunt*** (`unhinged_scavenger`, the plain objective) gets its own
> 1.2× line, and **Unhinged *Collector*** (`unhinged_scavenger_bingo`, the board variant) is what
> belongs in the Bingo/Scavingo line — that's the objective the original question was about, and
> it's the only one of the two with bingo lines for the `1.025^L` term to read. If the intent was
> instead that the Hunt itself sits on the Bingo/Scavingo line, delete its 1.2× row above.

### D4 — Medallion "+X% Crate Loot" does not touch the GCL table
It applies to the **regular** completion crate only. This is already how the code behaves:
`CrateLootGenerator.createLoot` adds `additionalItems` raw, after the loot-table generation, so they
bypass `itemQuantity` entirely. **The existing bypass is the desired behaviour — preserve it, don't
"fix" it.** Crate tiers, sigil `extraCrateTiers`, deck bounty modifiers and prestige crate-tier
powers likewise must not reach the GCL table.

### D5 — Map generation deferred
The GCL tables want tier *ranges* (`T1-3` … `T3-6`) plus a rarity floor (`Epic+` at GCL 7). The
current NBT carries a single `the_vault:map_tier` int and a `gear_roll_type_pool` string, so this
needs either a roll at generation time, several weighted entries per band, or a dedicated map roll
table. **Deferred — decide at implementation time.**

### D6 — Scavenger 1 / 2 medallions: coins only
BGC 2 and 3 respectively, **no GCL table**. GCL loot starts at Scavenger 3.

### D7 — Legend+ scales coins forever, loot caps at GCL 7
BGC +1 per Legend+ rank with no corresponding GCL 8+. Intentional: going deeper buys coins, not
better crate loot.

### D8 — The vault level ≥ 100 gate stays
Unchanged. Every greed rank sits after level 100 anyway, so the gate is never the binding constraint.

---

## 3. The GCL tables

Five entries per tier. **Coins are no longer a table entry** — they're the D3 formula, injected as a
separate stack. Entry order matches the current implementation: coins, focus, currency, maps,
common, mythic.

### 3.1 Focus — 3 rolls, identical at every GCL

Re-added 2026-08-09 at the current implementation's exact weights and counts, pending hand-tuning.

| Item | Weight | p | Count |
|---|---|---|---|
| Vorpal Focus | 2 | 18.18% | 2 |
| Waning Focus | 2 | 18.18% | 2 |
| Waxing Focus | 2 | 18.18% | 2 |
| Eccentric Focus | 1 | 9.09% | 2 |
| Cryonic Focus | 1 | 9.09% | 1 |
| Pyretic Focus | 1 | 9.09% | 1 |
| Opportunistic Focus | 1 | 9.09% | 1 |
| Empowered Chaotic Focus | 1 | 9.09% | 1 |

E = 1.636/roll × 3 = **4.91 foci**, flat across all 7 tiers until retuned. This is currently the
only entry that does **not** scale with GCL — a per-tier ramp is the obvious cleanup.

### 3.2 Currency — 2 rolls

| | GCL1 | GCL2 | GCL3 | GCL4 | GCL5 | GCL6 | GCL7 |
|---|---|---|---|---|---|---|---|
| Vault Gold | 15 / 3-6 | 15 / 3-8 | 15 / 5-8 | 15 / 5-8 | 15 / 6-12 | 15 / 6-12 | 15 / 6-12 |
| Vault Platinum | 5 / 2-3 | 5 / 2-4 | 6 / 3-4 | 8 / 4-5 | 8 / 4-6 | 8 / 4-6 | 10 / 5-8 |
| E[gold] | 6.75 | 8.25 | 9.29 | 8.48 | 11.74 | 11.74 | 10.80 |
| E[platinum] | 1.25 | 1.50 | 2.00 | 3.13 | 3.48 | 3.48 | 5.20 |

Weight split drifts 75/25 → 60/40, deliberately shifting the currency reward toward platinum.
**Gold is below its current value (14.63) at every GCL including 7**; platinum passes its current
value (3.00) at GCL 4.

### 3.3 Maps — 1 roll

| | GCL1 | GCL2 | GCL3 | GCL4 | GCL5 | GCL6 | GCL7 |
|---|---|---|---|---|---|---|---|
| Air (no map) | 5 | 5 | 5 | 5 | 5 | 5 | 5 |
| Vault Map | 5 / T1-3 | 5 / T1-4 | 5 / T2-5 | 6 / T2-5 | 6 / T2-6 | 6 / T3-6 | 6 / T3-6 **Epic+** |
| map chance | 50% | 50% | 50% | 54.5% | 54.5% | 54.5% | 54.5% |

Current system: flat 50%, `map_tier: -1`, no rarity floor. See D5.

### 3.4 Common — 2 rolls (GCL 1–5), 3 rolls (GCL 6–7)

Weight / count per tier:

| Item | GCL1 | GCL2 | GCL3 | GCL4 | GCL5 | GCL6 | GCL7 |
|---|---|---|---|---|---|---|---|
| Soul Vortex | 16/1 | 16/1 | 16/1 | 16/1 | 12/2 | 12/2 | 12/2 |
| Spicy Hearty Burger | 16/1-3 | 16/1-3 | 16/1-3 | 16/3-6 | 16/3-6 | 16/3-6 | 16/5-10 |
| gem_pog | 16/1-2 | 16/2-3 | 16/2-3 | 16/4-5 | 16/6 | 16/6 | 16/8 |
| bitter_lemon | 12/2 | 12/3 | 12/4 | 10/6 | 10/6 | 10/6 | 8/6 |
| soul_ichor | 12/1 | 12/2 | 12/2 | 12/3 | 14/3 | 14/3 | 16/4 |
| Unidentified Treasure Key | 12/1 | 12/1 | 12/1 | 12/2 | 12/4 | 12/4 | 12/4 |
| Recharge Core | 12/1 | 12/1 | 12/1 | 12/1 | 10/1 | 10/1 | 10/1 |
| Altar Recatalyzer | 12/2 | 12/2 | 12/4 | 12/6 | 12/6 | 12/6 | 12/6 |
| Card Juice | 10/10 | 10/16 | 10/24 | 12/30 | 14/32 | 14/32 | 14/48 |
| Jewel Pouch | 8/6 | 8/6 | 8/12 | 10/14 | 10/16 | 10/16 | 12/16 |
| Augment Box | 8/1-2 | 8/1-2 | 8/2-3 | 8/2-3 | 8/2-4 | 8/2-4 | 8/2-4 |
| Hasty Pomegranate | 8/1 | 8/1 | 8/1 | 8/1 | 8/3 | 8/3 | 8/3 |
| Inscription Box | 6/1-2 | 6/1-2 | 6/2-3 | 6/2-3 | 6/2-4 | 6/2-4 | 6/2-4 |
| Catalyst Box | 6/1-2 | 6/1-2 | 6/2-3 | 6/2-3 | 6/2-4 | 6/2-4 | 6/2-4 |
| Repair Augmenter | 4/1 | 4/1 | 5/1 | 5/1 | 5/1 | 5/1 | 5/1 |
| Deck Socket (normal) | 4/1 | 4/1 | 5/1 | 6/1 | 6/1 | 6/1 | 7/1 |
| Sour Orange | — | 12/2 | 12/2 | 14/3 | 14/4 | 14/4 | 16/4 |
| Companion Reroller | — | — | — | — | — | 8/1 | 8/1 |

**Card Juice dominance** — its contribution runs 1.23 → **10.50** items, which is 43% of the GCL 7
Common entry and 23% of the whole table. Nothing else in Common exceeds ~3. Flagged as O2.

### 3.5 Mythic — 1 roll, mostly blank

| Item | GCL1 | GCL2 | GCL3 | GCL4 | GCL5 | GCL6 | GCL7 |
|---|---|---|---|---|---|---|---|
| Air (nothing) | 150 | 150 | 150 | 140 | 140 | 140 | 130 |
| Concealed Chaos | 2 | 2 | 2 | 2 | 3 | 3 | 3 |
| Companion Egg | 1 | 2 | 2 | 2 | 2 | 2 | 2 |
| Uber Chaos Catalyst | 1 | 1 | 1 | 2 | 2 | 2 | 2 |
| All Seeing Eye Capstone | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| Mystic Pear | — | — | 1 | 1 | 1 | 1 | 1 |
| Omega Box | — | — | — | 5 / 1-4 | 5 / 2-4 | 5 / 2-4 | 8 / 2-4 |
| Deck Socket (Greater) | — | — | — | 1 | 1 | 1 | 2 |
| **hit rate** | **3.2%** | **3.8%** | **4.5%** | **9.1%** | **9.7%** | **9.7%** | **12.8%** |

New archetype. The current system has no blank slot at all — every grab-bag roll produces something,
and chase items compete directly against `card_juice ×32` in the same 249-weight pool. Current
equivalent hit rate is ~8.4%, flat.

### 3.6 Totals

E[items] per crate, excluding coins:

| Entry | GCL1 | GCL2 | GCL3 | GCL4 | GCL5 | GCL6 | GCL7 |
|---|---|---|---|---|---|---|---|
| Focus | 4.91 | 4.91 | 4.91 | 4.91 | 4.91 | 4.91 | 4.91 |
| Currency | 8.00 | 9.75 | 11.29 | 11.61 | 15.22 | 15.22 | 16.00 |
| Maps | 0.50 | 0.50 | 0.50 | 0.55 | 0.55 | 0.55 | 0.55 |
| Common | 4.32 | 5.45 | 7.50 | 10.77 | 13.22 | 19.11 | 24.16 |
| Mythic | 0.03 | 0.04 | 0.04 | 0.14 | 0.16 | 0.16 | 0.23 |
| **Total** | **17.76** | **20.65** | **24.24** | **27.98** | **34.05** | **39.94** | **45.85** |
| vs current (29.13) | −39% | −29% | −17% | −4% | +17% | +37% | +57% |

**Break-even is between GCL 4 and GCL 5** — i.e. around Hunter 3 / Master 1–2. Below that a
medallion run yields less crate loot than today's flat table; above it, more, up to +57% at Legend.
(Before the Focus entry was restored, break-even sat exactly at GCL 5.)

---

## 4. Coins

### 4.1 BGC and GCL by medallion tier

| Medallion | BGC | GCL | E[items] | vs current |
|---|---|---|---|---|
| Scavenger 1 | 2 | — | 0 | no table |
| Scavenger 2 | 3 | — | 0 | no table |
| Scavenger 3 | 3 | 1 | 17.76 | −39% |
| Looter 1 | 4 | 1 | 17.76 | −39% |
| Looter 2 | 5 | 1 | 17.76 | −39% |
| Looter 3 | 5 | 2 | 20.65 | −29% |
| Hunter 1 | 6 | 2 | 20.65 | −29% |
| Hunter 2 | 7 | 3 | 24.24 | −17% |
| Hunter 3 | 8 | 4 | 27.98 | −4% |
| Master 1 | 9 | 4 | 27.98 | −4% |
| Master 2 | 10 | 4 | 27.98 | −4% |
| Master 3 | 11 | 5 | 34.05 | +17% |
| Champion 1 | 12 | 5 | 34.05 | +17% |
| Champion 2 | 13 | 6 | 39.94 | +37% |
| Champion 3 | 14 | 6 | 39.94 | +37% |
| Legend | 15 | 7 | 45.85 | +57% |
| Legend+N | 15+N | 7 | 45.85 | +57% |

### 4.2 Coin yield, `floor(BGC × multiplier)`

| Objective | Scav1 | Scav3 | Loot1 | Loot3 | Hunt1 | Hunt3 | Mast1 | Mast3 | Champ1 | Champ3 | Legend |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Default / Scavenger | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 11 | 12 | 14 | 15 |
| Brutal Bosses / Zealot / Unh. Scav / Ench. Elixir / Rune Boss ≤10 runes | 2 | 3 | 4 | 6 | 7 | 9 | 10 | 13 | 14 | 16 | 18 |
| Alchemy / Chaos / Bingo 0L | 3 | 4 | 6 | 7 | 9 | 12 | 13 | 16 | 18 | 21 | 22 |
| Bingo/Scavingo 6 lines | 3 | 5 | 6 | 8 | 10 | 13 | 15 | 19 | 20 | 24 | 26 |
| Bingo/Scavingo 12 lines | 4 | 6 | 8 | 10 | 12 | 16 | 18 | 22 | 24 | 28 | 30 |
| Ballistic Bingo 0 lines | 3 | 4 | 6 | 8 | 9 | 12 | 14 | 17 | 19 | 22 | 24 |
| Ballistic Bingo 12 lines | 4 | 6 | 9 | 11 | 13 | 18 | 20 | 25 | 27 | 31 | 34 |
| Corrupted / Hyper (0 kills) | 4 | 6 | 8 | 10 | 12 | 16 | 18 | 22 | 24 | 28 | 30 |

Line-count growth: `1.025^L` = 1.00 / 1.08 / 1.16 / 1.25 / 1.35 at L = 0/3/6/9/12.
`1.03^L` = 1.00 / 1.09 / 1.19 / 1.31 / 1.43.

Current system for comparison: `greedTier + 3`, identical for every objective (tier 1 → 4,
tier 5 → 8, tier 10 → 13, tier 12 → 15). Legend at 1× equals today's greed tier 12, so the normal-play
ceiling is roughly preserved while the objective spread is entirely new — today the objective is
literally irrelevant to coin yield.

### 4.3 Hyper coins, `floor(2 × BGC) × (1 + N)`

| Medallion | N=0 | N=1 | N=2 | N=3 | N=5 | N=8 |
|---|---|---|---|---|---|---|
| Scavenger 1 (BGC 2) | 4 | 8 | 12 | 16 | 24 | 36 |
| Hunter 1 (BGC 6) | 12 | 24 | 36 | 48 | 72 | 108 |
| Master 1 (BGC 9) | 18 | 36 | 54 | 72 | 108 | 162 |
| Legend (BGC 15) | 30 | 60 | 90 | 120 | 180 | 270 |

Current: `(greedTier+3) × (1+N)` — tier 1 → 4/8/12/16/24/36, tier 10 → 13/26/39/52/78/117.
A Scavenger 1 medallion reproduces today's tier-1 yield exactly; Legend roughly doubles today's
tier-10 yield. Hyper remains far and away the best coin objective, as intended.

### 4.4 Rune Boss, `floor(1.2 × BGC × max(1, log₁₀(runes)))`

Boss runes are **collected in-run**, not fixed by the crystal — `config/the_vault/vault_rune_boss.json`
drops them from chests (2% wooden, 4% living/ornate/gilded) and ores, so the count is a function of
how much of the vault gets looted. At this pack's chest density the reachable range runs well into
three figures, which is what makes the log term worth having.

| runes | multiplier | Scav1 | Looter1 | Hunter1 | Master1 | Champ1 | Legend |
|---|---|---|---|---|---|---|---|
| ≤10 | 1.200 | 2 | 4 | 7 | 10 | 14 | 18 |
| 25 | 1.678 | 3 | 6 | 10 | 15 | 20 | 25 |
| 50 | 2.039 | 4 | 8 | 12 | 18 | 24 | 30 |
| 100 | 2.400 | 4 | 9 | 14 | 21 | 28 | 36 |
| 250 | 2.878 | 5 | 11 | 17 | 25 | 34 | 43 |

The clamp only bites below 10 runes; past that it's a genuine, slowly-compounding reward for
looting the vault out. At 100 runes Rune Boss doubles its floor value and becomes the second-best
coin objective behind Hyper; at 250 it passes Hyper's zero-kill yield.

---

## 5. Item-level delta vs the current table

**Removed entirely** (present today, absent from every GCL):

| Item | Current contribution |
|---|---|
| `gem_box` ×32 | 4.82% of grab bag → 1.54 items/crate |
| `general_decor_scroll` | 1.61% → 0.02 items/crate |

**Restored** after the first draft: the whole Focus entry (8 items, 4.91 items/crate).

**Rank-gated introductions** (new — the current table has no unlock moments at all): Sour Orange
(GCL 2+), Mystic Pear (GCL 3+), Omega Box and greater Deck Socket (GCL 4+), Companion Reroller
(GCL 6+), map `Epic+` floor (GCL 7 only).

**Relocated**: Mystic Pear, Omega Box, greater Deck Socket, Companion Egg, Uber Chaos Catalyst,
All Seeing Eye Capstone and Concealed Chaos all move out of the shared grab bag into the dedicated
Mythic slot.

---

## 6. Code seams (for when this gets built)

| What | Where today | Change |
|---|---|---|
| Table selection | `MixinRunner.java:105`, hardcoded string | → `f(medallion GCL)`, 7 keys |
| Eligibility gate | `MixinRunner.java:104` | keep lvl ≥ 100 (D8); add Haunted Braziers to exclusions (D2) |
| Coin count | `MixinRunner.java:125`, hardcoded `+ (greedTier - 1)` | → `floor(BGC × objectiveMultiplier)`, injected as its own stack |
| Coin greedy multiplier | `MixinRunner.java:127`, `hyper_objective.json` | unchanged (D1) |
| Hyper double-pass | `MixinRunner.java:111-152`, `greedBonusTierEfficiency` | **deletable** — coins no longer ride the table |
| Injection point | `CrateLootGeneratorAccessor` → `additionalItems` | unchanged; the quantity bypass is now intentional (D4) |
| Tables | `ModVaultLootTablesProvider.addGenericGreedPools` + 17 `add(...)` calls | → 7 GCL builders; delete the 3 air-only tables |
| Score-tier injections | `HyperCrateRewards` | unchanged (D1); confirm its `greedTier` input |

The greed tables are addon-jar `vault_configs` with **no pack-side copy**, merged over the pack at
runtime by vhapi — pack config alone cannot retune them. Any per-pack tuning knob has to be added
deliberately.

---

## 7. Open items

- **O1 — Rune Boss notation only.** The spreadsheet wrote `floor(1, log_10(runes))`; `floor` doesn't
  take two arguments, so this is recorded as `max(1, log₁₀(runes))`, a clamp at 1. The term is
  otherwise live and correct — see §4.4. (An earlier draft of this doc claimed it was a no-op on the
  assumption that rune counts top out near 10; that assumption was wrong. Runes are collected in-run
  from chests and ores, and 100+ is reachable.)
- **O2 — Card Juice is 43% of the GCL 7 Common entry** (10.50 of 24.16 items). Confirm that's
  deliberate rather than a count that ran away during tuning.
- **O3 — Focus entry is flat across all 7 tiers.** Re-added at current values as a starting point;
  it's the only entry that doesn't ramp, so it dilutes progressively at higher GCLs (28% of GCL 1,
  11% of GCL 7). Needs a per-tier pass.
- **O4 — Gold is down at every GCL** versus today (10.80 at GCL 7 vs 14.63 now) while platinum is up.
  Intentional currency-shift or an unintended nerf to gold income?
- **O5 — D5 map generation** (tier ranges + rarity floor) still needs a mechanism.
- ~~O6 — Column G of the spreadsheet is out of sync with §4.~~ **Resolved 2026-08-09**: column G of
  the Greed Crate Loot tab was rewritten to match §4.2 — braziers moved to an exclusion line, the
  Unhinged Scavenger / Enchanted Elixir / Chaos lines added, Unhinged Collector folded into the
  bingo line, `floor(1, …)` corrected to `max(1, …)`, and the hyper line annotated to say greedy
  crate tiers still apply. Sheet and spec now agree.

---

## 8. Data hygiene

**Every count range in the Greed Crate Loot tab is stored as a real Excel date.** `3-6` lives in the
file as `2026-03-06`, `5-10` as `2026-05-10`. Decode month → min, day → max. The decoding was
validated by monotonicity: every decoded series is non-decreasing across GCL 1→7, which would not
happen by chance.

Two consequences for tooling:
1. A range whose min exceeds 12 (e.g. `13-20`) stays **text** while the rest stay dates, so any
   generator script must handle both types.
2. The Focus rows added on 2026-08-09 are stored as **plain integers** with `General` formatting —
   they were briefly written with an inherited date format and corrected. Keep that column as text
   or General if the block is ever rebuilt.

Backup of the pre-edit workbook: `Downloads\Wold's Vaults Greed Rework.backup-2026-08-09.xlsx`.
