# Greed System — Challenge Crystal Reference

Complete reference of every challenge crystal sold by the Greed Trader, for the greed-system rework.
Compiled 2026-08-05 from pack configs + decompiled the_vault 3.21.5 + wv-development source (commit bf7f24be).

**Sources**
- Crystal definitions: `Wolds-Vaults\config\the_vault\challenge_crystal.json` (22 crystals)
- **Addon overlay**: `wolds-vaults-official-mod-0.33.2.jar!data/woldsvaults/vault_configs/challenge_crystal/wolds_challenges.json` redefines 10 of the 22 (pitch_black, ultra_hard, elixir_of_doom, ballistic_bingo_blackout, blackout_scavingo, gods_challenge, big_bad_brew, chaos_chaos_chaos, rage_cage, survival_of_the_fittest). vhapi's `ChallengeCrystalConfigLoader` merges with `putAll` → **jar wins on id collision**. Diffed 2026-08-06: 9 are byte-identical to the pack config; only `ballistic_bingo_blackout` differs (jar adds `sealCount: 2`).
- Trader wiring: `Wolds-Vaults\config\the_vault\greed\greed_trader.json` → `challenges` section
- Modifier meanings: `Wolds-Vaults\config\the_vault\vault_modifiers.json`
- Behavior verified in: `wv_decompile\target_decompiled\iskallia\vault\...` (base mod) and `wv-development\src\...` (woldsvaults addon)

---

## System-level facts (apply to everything below)

- **Trader gating**: each challenge has a `minTier` (greed tier where it starts appearing); every one has `maxTier: -1` (never rotates out). Offers per greed tier (`maxChallengesPerTier`): **3** at tiers 0–2, **4** at tiers 3–5, **5** at tiers 6–10. Rebuying costs **5 coins** (`challengeRebuyCoinCost`).
- **All 22 crystals** are `exhausted: true` (cannot be catalysted/modified), `random_modifiers: false`, `clarity: false`.
- **Time mechanics** (verified in `ValueCrystalTime` + `VaultTimeModifier`): the crystal's `time` roll **sets** the base clock; `extended`/`shortened` modifiers then **add/subtract** at vault start. Extended = **+2 min/stack** (2400t), Shortened = **−1 min/stack** (−1200t). Crystals with no `time` entry use the pack default of **25 min** (30,000t, from `vault_crystal.json` `TIMES`).
- **`objective_probability`** = generation probability for the objective's POI pieces (exit gateways for bingo variants, lodestones for elixir, monolith placeholders, etc.). The chaos objective reads it but never uses it.
- **Sigils** (`config\the_vault\sigils\`): multiply objective targets and rewards. Adept ×1.5 (+2 crate tiers, difficulty weight 0.5), Expert ×2 (+3 tiers), Veteran ×4 (+5 tiers), Legend ×6 (+6 tiers). Each also swaps the bingo/scav task pool to its own tier (e.g. `the_vault:expert`) and sets monolith/rune-boss baselines. (Master ×2.5/+4 exists but no challenge uses it.)
- **Modifiers on nearly every crystal**: `rotten` = "Rotten", Vault Powerups have no effect (on 21/22 — only Survival of the Fittest lacks it); `no_companion` = "Companionless", no companions (on all 22).

---

## The crystals (ordered by greed tier unlock)

### Tier 1

#### Unstable Shuffle (`t1_shuffle_grounds`)
> "Watch your step, as ground cracks below you, your only way out is by blacking out the shuffling board."
- Objective: **Bingo 5×5 BLACKOUT** (all 25 tiles), probability 1.0
- Layout: **polygon** — diamond with vertices (±12,0)/(0,±12), tunnel span 1 (≈12-cell-radius diamond map)
- Time: default 25 min
- Modifiers:
  - **Shuffle ×1** (`regenerate: true`) — verified in `BingoObjective`: *every time you complete a line, all incomplete tiles re-roll into brand-new tasks* (not just position swaps)
  - Rotten
  - **Locked ×1** — vault cannot be bailed (the only crystal with this)
- Hazard: **Collapsing Floor** (`unstable_ground` / `the_vault:collapsing_floor`, "standing still crumbles the ground") — the only crystal with a hazard

#### Pitch Black (`pitch_black`)
> "Lights out! You are blinded, fumbling through a spooky dark cavern..."
- Objective: **Haunted Braziers, target 10** (monolith-style: light 10 braziers; each gives a rolled brazier effect; braziers beyond target overstack for loot)
- Theme: `the_vault:classic_vault_dark_cavern`
- Time: **10 min** (12,000t)
- Modifiers: **Light's Out** (permanent Darkness — `wildbackport:darkness`); **All Bad Haunted Braziers** (effect pool restricted to negatives); **Anti-Blindness Immunity** (blindness cannot be prevented by any immunity); Rotten; Companionless

### Tier 2

#### Trapped (`scav_rolled`)
> "Can you find what you need in time if most chests are trapped?"
- Objective: **Scavenger**, probability 1.0 · Sigil: **Expert** (×2 item targets, XP ×2, +3 crate tiers)
- Time: 25 min
- Modifiers:
  - **Rigged ×4** — trap_disarm_chance −100% each → −400%; below 0% it *increases* trapped chests
  - **Surprise Boxes ×1** — 25% chance opened chests spawn 1/2/4 mobs (weights 6/4/2; aggressive cows w10, t3 endermen w4, mimicubes w1, …)
  - **Armed ×4** (woldsvaults) — 4%/stack chests drop live thermal grenades (slime/explosive/fire w4 each, ender w1)
  - Rotten; Companionless

#### Ballistic Blackout (`ballistic_bingo_blackout`)
> "Like a Bingo but more..."
- Objective: **Ballistic Bingo 6×6 BLACKOUT** (36 tiles), probability 0.25. The pack config omits `sealCount` (default 1 → 5×5), but the addon jar's overlay version — which wins at runtime — sets `sealCount: 2` → board = 5 + 2 − 1 = **6×6**. (Scaling objective type: seals can push to 12×12 max.) Task table (69 tasks, `ballistic_bingo.json`) is restriction-heavy: 16× take-no-damage, 15× kill, 15× loot-chest, 5× use-no-mana, 5× find-room, 5× deal-no-damage, 4× mine, 3× interact
- Time: 25 min · Modifiers: Rotten; Companionless only

### Tier 3

#### Rune Master (`rune_master`)
> "Only the strongest of warriors will be able to master the runes."
- Objective: **Rune Boss**, probability 0.05, **minimum runes 35** (for scale: adept sigil default is 8, expert 14, veteran 24, legend 32 — this exceeds legend)
- Time: 25 min · No sigil · Modifiers: Rotten; Companionless only

#### Elixir of Doom (`elixir_of_doom`)
> "RNG, more like Ridiculous Negative Garbage."
- Objective: **Enchanted Elixir**, probability 0.25 (fill the elixir bar; random vault events fire at evenly-spaced fill breakpoints — normally 10–24 events)
- Sigil: **Expert**
- Time: 25 min
- Modifiers: **All Bad Enchanted Elixir** (event pool restricted to NEGATIVE-tagged only); **Events Extravaganza** (event count forced to **50**); Rotten; Companionless

#### Collectathon (`blackout_scavingo`)
> "Get them all and then some more! Blackout that board!"
- Objective: **Scavenger Bingo 5×5 BLACKOUT**, probability 0.25, `modifierPool: the_vault:bingos` — verified: *each completed line* adds **1× "Bingo!"** (+10% Item Quantity, +10% Item Rarity, +10% XP, +25% soul chance) **and 1× Crate Tier** (+1 completion-crate tier). A 5×5 blackout has 12 lines (5 rows + 5 cols + 2 diagonals) → up to **+12 crate tiers** stacked by the end
- Time: 25 min · Modifiers: Rotten; Companionless only

### Tier 4

#### Royale King (`royale_king`)
> "An empty adventure, a clean slate, are you afraid?"
- Objective: **Vault Royale**, min level 50, probability 0.2, **dust target uniform 80–120**, start crate `the_vault:royale_start_crate`
- Theme: pool `woldsvaults:royale` · Layout: **vault_royale, radius 10**, boss room `the_vault:vault/rooms/special/royale_boss`
- Time: 25 − 10 = **15 min** (Shortened ×10)
- Modifiers: Shortened ×10; Companionless; **Royale ×1** (group → **Royale Crates**: decorator_add, 20 attempts/chunk of royale loot crates, whitelist COMMON+ORE — but this pack's `MixinDecoratorAddModifier` bypasses room whitelists, so they place everywhere; + **Soulless**: mobs drop no soul shards)

### Tier 5

#### Gone in 60 seconds (`gone_in_60_seconds`)
> "A good movie, how good is it inside a vault though…"
- Objective: **Elixir**, probability 0.5 · Sigil: **Expert** (elixir target ×2)
- Time: base **60 seconds** (1200t) + Extended ×25 (+50 min) = **51 min effective** — the "60 seconds" is only the base the modifiers stack onto
- Modifiers: Extended ×25; **Creeping Doom ×1** (every 60s adds 1 Challenge Stack — see Rage Cage for stack contents; over 51 min that's ~50 stacks); Companionless

#### Survival of the Fittest (`survival_of_the_fittest`)
> "Last as long as you can... but you won't."
- Objective: **Survival**, probability 0.5, **target 30 = survive 30 minutes** (`TIME_REQUIRED = target×60×20t`). Wave groups escalate through `t1, t1_t2, t2, t2_t3, t3, t3_t4, t4, t5, t6, t7` — **one step every 3000t (2.5 min)**; spawn roll every 20t per player (8–64 block radius). After surviving: find the exit portal
- Clock mechanic (verified in `SurvivalVaultHelper`): vault clock is **force-set to 2.5 min at start**; **kills add 20–60 ticks (1–3 s) each**, scaled by mob class — elites ×3, guardians ×2, horde ×0.5, **minions ×0** — you sustain the timer by killing
- Also runs periodic survival challenge events (mob buff/on-hits/effect/crit…) and crate-tier reward events (`survival_objective.json`)
- Modifiers: **Companionless only** — the sole crystal without Rotten

### Tier 6

#### The Pacifist (`the_pacifist`)
> "So you say this is more efficient, faster, better, stronger? Weak…"
- Objective: **Bingo 5×5, NOT blackout** (one line — row/column/diagonal — wins), probability 1.0 · Sigil: **Expert**
- Time: 25 min
- Modifiers: **Fading ×1** (damage removes hearts instead of emptying them — no healing back); Rotten; Companionless

#### God's Challenge (`gods_challenge`)
> "It seems the god's are impressed with you... time to prove yourself to them."
- Objective: **Zealot, target 10** — verified: counts completed **god altar events** (10 altars), then find exit. (Config takes no probability; code passes 0 — altars spawn at their natural room rates)
- Layout: **infinite** · Theme: pool `woldsvaults:god_themes`
- Modifiers: Rotten; Companionless; plus all four god challenge groups (children are authoritative; display text claims per-stack percentages that don't match):
  - **Velara's**: Angry ×4 (+40% mob damage), Chunky ×4 (+40% HP), Regenerating Mobs (15% chance Regen VI)
  - **Wendarr's**: +40% dmg, +40% HP, Voiding (10% on-hit time drain)
  - **Tenos's**: +40% dmg, +40% HP, Rended (−25% player cooldown reduction)
  - **Idona's**: Angry ×8 (+80% dmg), Chunky ×8 (+80% HP), +6% mob speed, Onslaught (+50% spawns)
  - Net: **+200% mob damage, +200% mob HP, +50% spawns, +6% speed, −25% CDR, regen + time-steal on-hit**

### Tier 7

#### Luckiest Win (`luckiest_win`)
> "You will need luck, skill, and a lot of luck."
- Objective: **Scavenger Bingo 5×5, NOT blackout** (one line wins), probability 1.0, no modifierPool (lines award nothing extra) · Sigil: **Veteran** (×4 targets, XP ×4, +5 crate tiers)
- Time: 25 min
- Modifiers: chest-cascade package — Wooden ×1 (+25%), Living ×2 (+50%), Gilded ×3 (+75%), Ornate ×4 (+100%), Wealthy ×5 (+125% coin piles); Rotten; Companionless

#### Big Bad Brew (`big_bad_brew`)
> "Alchemy? I never even passed Geometry!"
- Objective: **Alchemy**, probability 0.5, **required progress 10.0** — i.e. 1000% brew progress. Normal alchemy vaults require 1.0–3.0 by level, so this is 3.3–10× a standard one. Ingredient values (`alchemy_objective.json`): deadly +0.25, ruthless +0.15, neutral +0.05, volatile −0.25…+0.5, refined −0.05, empowered −0.15 (risky ingredients also roll negative modifier pools) — ≈40 pure-deadly brews to finish
- Layout: **infinite**
- Modifiers: **Bubble, Toil, and Trouble ×4** (each = +20% mob dmg, +20% mob HP, and 10% on-hit chances of Slow/Poison/Wither/Bleed → totals **+80% dmg/HP and 40% each curse**); Rotten; Companionless

### Tier 8

#### The Speedrunner (`the_speedrunner`)
> "Do you remember how it used to be? Do you romanticise it?"
- Objective: **Monolith, target 25** (light 25 monoliths), probability 1.0
- Time: 25 − 15 = **10 min** (Shortened ×15)
- Modifiers: Shortened ×15; Rotten; Companionless

### Tier 9

#### Time you say (`time_you_say`)
> "You thought you wanted more time inside a vault, I dont know, try it."
- Objective: **Elixir**, probability 0.5 · Sigil: **LEGEND** (elixir target ×6, XP ×6, +6 crate tiers) — the only Legend-sigil challenge
- Time: 25 + 50 = **75 min** (Extended ×25)
- Modifiers: Extended ×25; **Creeping Doom** (1 Challenge Stack per minute — up to ~75 stacks by the end: mobs approach +1500% dmg/HP); Companionless

#### Chaos Chaos Chaos (`chaos_chaos_chaos`)
> "OH, IT'S JUST A SIMPLE NUMBERS GAME"
- Objective: **Chaos**, probability 1.0 (unused by chaos). Verified: challenge chaos always uses the `default` pool from `chaos.json` → **7–11 tasks (uniform), 4 min (4800t) per task**, mysteryChance 0. Timing out a task doesn't fail the vault — the task is discarded and a fresh one rolls (you still owe the full count). Task table: 5× loot-chest types, 8× kill-entity, 3× mine, 3× interact, 3× take-no-damage, 2× deal-no-damage, 1× loot-item. (The `big_chaos` 25-task pool exists in config but nothing references it.)
- Layout: **infinite** · Theme: `the_vault:classic_vault_chaos` · Sigil: **Adept** (×1.5)
- Modifiers:
  - **Chaos Return** — completing a task teleports you back to spawn
  - **Unhinged** — ⚠️ verified no-op: `inline_pool` pointing at pool `the_vault:unhinged`, which **does not exist** in this pack's `vault_modifier_pools.json` → resolves to zero modifiers (cosmetic only)
  - Rotten; Companionless

### Tier 10

#### The Speed Blackout (`speed_blackout_bingo`)
> "Speed, luck and precision wins the race."
- Objective: **Bingo 4×4 BLACKOUT** (the only 4×4 board), probability 1.0
- Time: 25 − 10 = **15 min** (Shortened ×10)
- Modifiers: Shortened ×10; Rotten; Companionless

### Tier 11

#### Frenzy Adventures (`one_shot_frenzy`)
> "Mobs is lava, dont get touched, dont get hit, for you will fail."
- Objective: **Elixir**, probability 0.5 · Sigil: **Expert**
- Time: 25 min
- Modifiers: **One Hit** (any damage kills you); Companionless

#### Rage Cage (`rage_cage`)
> "The elites are back for more, and brought reinforcements!"
- Objective: **Brutal Bosses** — ⚠️ config says target 7 / wave 5, but the code **ignores both** (`//TODO: Add Sigil Support` in `BrutalBossesCrystalObjective.configure`): actual roll is **3–5 boss obelisks** (`random.nextInt(3)+3`), each spawning a wave of **1–3 brutal bosses** (`random.nextInt(3)+1`), probability 1.0
- Layout: **infinite**
- Modifiers:
  - **Challenge Stack ×5** — each stack = Angry ×2 (+20% dmg), Chunky ×2 (+20% HP), +1.5% speed → ×5 totals **+100% dmg, +100% HP, +7.5% speed** (display text claims "10%/stack + spawns" but the children say otherwise)
  - **Infernal** — 25% of mobs spawn with 3 Infernal modifiers
  - **Rage Cage** — retro-spawner: every 100t (5s), 50% chance to spawn 2–6 mobs (weights 2:2, 3:6, 4:4, 5:2, 6:1 — vault spiders w8, t3 creepers w6, t3 drow…) around each player
  - Rotten; Companionless

### Tier 12

#### Celebrations (`celebrations`)
> "It's time to celebrate! Or is it?"
- Objective: **Cake, target 100** (eat 100 cakes; every cake rolls modifiers onto the vault from the `the_vault:cake_adds` pool)
- Theme: `the_vault:classic_vault_chaos_cake` · Layout: **spiral**, half_length 99, rotated CLOCKWISE_90 — one enormous spiral corridor
- Time: 25 min · Modifiers: Rotten; Companionless only

#### Ultra Hard (`ultra_hard`)
> "Who said challenges were supposed to be fun, anyway?"
- Objective: **Elixir**, probability 0.4 · Sigil: **Expert** · Theme: pool `woldsvaults:map_themes`
- Time: 25 min
- Modifiers: **Champion's Realm ×4** (+25% champion spawn chance each → +100%); **No Champ Loot** (champion loot chance −1000% — they drop nothing); **Fading** (damage removes hearts); **Hard Locked** (difficulty forced to at least Hard); Rotten; Companionless

---

## Gotchas worth carrying into the rework

1. **Rage Cage's brutal bosses ignore the crystal config** — target/wave are dead knobs until the TODO in `BrutalBossesCrystalObjective` is implemented. If the rework wants "7 bosses at wave 5" to mean something, that's addon code work, not config.
2. **`the_vault:unhinged` on Chaos³ is a silent no-op** (missing pool). Either define the pool or drop the modifier in the rework.
3. **Grouped-modifier display text lies** in several places (god challenges, challenge_stack) — the `children` counts are what actually apply. Worth normalizing if touched.
4. Challenge chaos **cannot** currently use the 25-task `big_chaos` pool — the crystal objective hardcodes `default`.
5. Trader `minTier` goes up to 12 but `maxChallengesPerTier` is only defined for tiers 0–10 — tiers 11+ fall outside the explicit cap map.
6. The `CHALLENGE` block at greed_trader.json:1437 is `roomPoolsByType` (challenge *room* pools for trader room products) — unrelated to challenge crystals, don't conflate when rewiring.
7. **Two config layers**: 10 of the 22 crystals are ALSO shipped inside the addon jar (`vault_configs/challenge_crystal/`) and silently override the pack config on id collision. Editing those 10 in the pack config does nothing until the jar copy is changed (or the rework moves them fully to one layer). Ballistic Blackout's 6×6 board is the live proof — the pack config says 5×5.

## Quick tier-unlock index

| Greed tier | Challenges unlocked |
|---|---|
| 1 | Unstable Shuffle, Pitch Black |
| 2 | Trapped, Ballistic Blackout |
| 3 | Rune Master, Elixir of Doom, Collectathon |
| 4 | Royale King |
| 5 | Gone in 60 seconds, Survival of the Fittest |
| 6 | The Pacifist, God's Challenge |
| 7 | Luckiest Win, Big Bad Brew |
| 8 | The Speedrunner |
| 9 | Time you say, Chaos Chaos Chaos |
| 10 | The Speed Blackout |
| 11 | Frenzy Adventures, Rage Cage |
| 12 | Celebrations, Ultra Hard |
