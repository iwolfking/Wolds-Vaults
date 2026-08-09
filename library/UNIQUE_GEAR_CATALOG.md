# Unique Gear Catalog — Wold's Vaults

Every unique in the game — **merged runtime view** (pack config + woldsvaults addon jar overlay) —
showing the **top roll per modifier**. For the greed-system rework / ancient-unique design.
Compiled 2026-08-06 from pack configs + wolds-vaults-official-mod-0.33.2.jar + decompiled the_vault 3.21.5 / vhapi 5.8.0.

**Sources (two config layers merge at runtime!)**
- Pack layer: `Wolds-Vaults\config\the_vault\unique_gear.json` + `gear_modifiers\unique.json` + `unique_codex.json`
- Addon layer: `wolds-vaults-official-mod-0.33.2.jar!data/woldsvaults/vault_configs/` (`gear/unique_gear/unique_gear.json`, `gear/gear_modifiers/unique.json`, `unique_codex/unique_codex.json`) — loaded by vhapi's `VHAPIDataLoader` + `UniqueGearConfigLoader`/`CustomVaultGearLoader`
- Merge semantics (verified in vhapi 5.8.0 decompile): registry `putAll` → **jar wins on id collision** (Chainlash + The Baguette are overridden by the jar); pools merge **additively**; tier groups **append** after the pack's (→ pack wins duplicate-identifier lookups). No other mod in the pack ships `vault_configs` (all 441 jars scanned).
- Roll mechanics verified in `GearRollHelper`, `UniqueGearConfig`, `VaultGearTierConfig`, `VaultGearLegendaryHelper`, `ImbuementAltarTileEntity` (base) + `MixinGearRollHelper`, `MixinImbuementAltarTileEntity` (woldsvaults)

## How uniques roll (verified in code)

- When gear identifies as UNIQUE rarity, the piece carries a `gear_unique_pool` attribute (stamped by whatever item/loot granted it). `UniqueGearConfig.getRandomEntry(pool)` picks a weighted unique from that pool; missing pool attribute falls back to `the_vault:default` **which contains only Kaleidoscope**.
- Every modifier identifier resolves against the **merged UNIQUE tier config** (pack `gear_modifiers/unique.json` + jar additions appended).
- **Bracket selection at drop** (`getModifiersForLevel`): a bracket is eligible iff `minLevel ≤ itemLevel` and (`maxLevel = -1` or `itemLevel ≤ maxLevel`). The roll is a weighted pick among **ALL eligible brackets** — weights are flat, so a level-100 drop picks **uniformly among every still-open bracket**. The top bracket is NOT guaranteed (the "span" note gives the full L100 range).
- **Brackets above L100** exist as headroom for tier-jump mechanics (`maxAndIncreaseTier`: highest bracket ≤ level, then +N brackets):
  - Legendary at identification (+2), Wold's Corrupted/Greater identify rolls (+1), crafting greater step (+1), antique MAKE_LEGENDARY (+2) — **none of these ever fire on uniques** (the unique identify path returns first; others are non-unique pipelines).
  - **Imbuement Altar (+1) — the one path that works on uniques.** No rarity gate; once per item; targets one explicit PREFIX/SUFFIX (non-boolean, not noImbuement-tagged); success chance boosted by the greed-tree Imbuement node. Wold's `MixinImbuementAltarTileEntity` additionally filters out modifiers that are already at their reachable max, so imbue options only list mods that can still climb.
- Net for a level-100 unique: natural affixes roll uniformly among open brackets; **imbuement can push exactly one prefix/suffix one bracket up** (into L101 where defined); **L102 brackets are unreachable on uniques**.
- Wold's separate **MYTHIC rarity** (own `*_mythic.json` configs, `MixinModConfigs`/`MixinVaultGearTierConfig`) is a different lane and does not touch unique rolls.
- Values are raw config numbers: fractional values on `*_percent`/chance-style attributes are fractions of 1 (0.15 = 15%).

## Summary (62 uniques at runtime)

| Unique | ID | Item | Source | Pools | Drops in |
|---|---|---|---|---|---|
| Crystal Double Blade | `the_vault:crystal_double_blade` | sword | pack | — | — |
| Honey Stick | `the_vault:honey_stick` | sword | pack | `honey_stick`, `crafted`, `collection` | Villages |
| Inflated Justice | `the_vault:inflated_justice` | sword | pack | `inflated_justice`, `crafted`, `collection` | Raid Vaults |
| Iskallibur | `the_vault:iskallibur` | sword | pack | `iskallibur`, `crafted`, `collection` | X-Mark Room |
| Lava Chicken Sword | `woldsvaults:lava_chicken_sword` | sword | addon | `crafted`, `collection`, `lava_chicken_sword` | Survival |
| Everfrost | `woldsvaults:everfrost` | sword | addon | `crafted`, `collection`, `everfrost` | Vendoors |
| Everflame | `woldsvaults:everflame` | sword | addon | `crafted`, `collection`, `everflame` | Vendoors |
| Hexblade | `woldsvaults:hexblade` | sword | addon | `crafted`, `collection`, `hexblade` | Vendoors |
| Mineral Greatsword | `woldsvaults:mineral_greatsword` | sword | addon | `crafted`, `collection`, `mineral_greatsword` | Vendoors |
| Grass Sword | `woldsvaults:grass_sword` | sword | addon | `crafted`, `collection`, `grass_sword` | Vendoors |
| Aurora Scissors | `woldsvaults:aurora_scissors` | sword | addon | `crafted`, `collection`, `aurora_scissors` | Black Market |
| Young Kitsune Blade | `woldsvaults:young_kitsune` | sword | addon | `crafted`, `collection`, `young_kitsune` | Vendoors |
| Butcher's Axe | `the_vault:butcher_axe` | axe | pack | `butcher_axe`, `crafted`, `collection` | Villages |
| Starforge | `the_vault:starforge` | axe | pack | `starforge`, `crafted`, `collection` | Raid Vaults |
| Leviathan | `woldsvaults:leviathan` | axe | addon | `crafted`, `collection`, `leviathan` | Bounty Reward |
| Zombie Horse Axe | `woldsvaults:zombie_horse_axe` | axe | addon | `crafted`, `collection`, `zombie_horse_axe` | Graveyard Room |
| Zeus's Fury | `woldsvaults:ocean_current` | trident | addon | `crafted`, `collection`, `ocean_current` | Bounty |
| Fork of the Glutton | `woldsvaults:fork_of_the_glutton` | trident | addon | `crafted`, `collection`, `fork_of_the_glutton` | Survival Gear Reward |
| Tri-Rang | `woldsvaults:trirang` | rang | addon | `crafted`, `collection`, `trirang` | Bounty Reward |
| Bamboo Fightstick | `woldsvaults:bamboo_fightstick` | battlestaff | addon | `crafted`, `collection`, `bamboo_fightstick` | Vendoors |
| Jester Hat | `the_vault:jester` | helmet | pack | `default_or`, `jester`, `crafted`, `collection` | The Laboratory |
| Stormcrown | `the_vault:stormcrown` | helmet | pack | `stormcrown`, `crafted`, `collection` | Raid Vaults |
| Helm of the Warbound | `the_vault:warbound_helmet` | helmet | pack | `warbound_helmet`, `crafted`, `collection` | Raid Vaults |
| Ann-Mari | `the_vault:annmari` | chestplate | pack | `annmari`, `crafted`, `collection` | X-Mark |
| The Castle | `the_vault:castle` | chestplate | pack | `default_or`, `castle`, `crafted`, `collection` | Raid Vaults |
| Crystal Plate | `the_vault:crystalplate` | chestplate | pack | `default_or`, `crystalplate`, `crafted`, `collection` | The Laboratory |
| Frozen Throne | `the_vault:frozen_throne` | chestplate | pack | `frozen_throne`, `crafted`, `collection` | Villages |
| The Sweetheart | `the_vault:sweetheart` | chestplate | pack | `default_or`, `crafted` | — |
| Vitalis Plate | `the_vault:vitalis` | chestplate | pack | `vitalis`, `crafted`, `collection` | — |
| Crashguards | `the_vault:crashguards` | leggings | pack | `crashguards`, `crafted`, `collection` | The Laboratory |
| Swarmwalkers | `the_vault:swarmwalkers` | leggings | pack | `swarmwalkers`, `crafted`, `collection` | Raid Vaults |
| Frostguards | `the_vault:frostguards` | boots | pack | `frostguards`, `crafted`, `collection` | The Factory |
| Pacifist Sandals | `the_vault:pacifist_sandals` | boots | pack | `pacifist_sandals`, `crafted`, `collection` | The Laboratory |
| Plague Steppers | `woldsvaults:plague_steppers` | boots | addon | `crafted`, `collection`, `plague_steppers` | Black Market |
| Gladiator's Buckler | `the_vault:gladiator_buckler` | shield | pack | `gladiator_buckler`, `crafted`, `collection` | Villages |
| Grim Shield | `the_vault:grim` | shield | pack | `default_or`, `testers`, `grim_shield`, `crafted`, `collection` | Raid Vaults |
| Rosethorn Ivy | `the_vault:ivy` | shield | pack | `ivy`, `crafted`, `collection` | X-Mark Room |
| Pestilence Wall | `the_vault:pestilence_wall` | shield | pack | `pestilence_wall`, `crafted`, `collection` | The Laboratory |
| Frostwarden | `the_vault:frostwarden` | shield | pack | `frostwarden`, `crafted`, `collection` | Memory Room |
| The Broodmother | `the_vault:broodmother` | shield | pack | `broodmother`, `crafted`, `collection` | Memory Room |
| Ender Rings | `the_vault:ender_rings` | focus | pack | `ender_rings`, `crafted`, `collection` | Memory Room |
| Frozen Orb | `the_vault:frozen_orb` | focus | pack | `frozen_orb`, `crafted`, `collection` | Raid Vaults |
| Echoflare | `the_vault:echoflare` | focus | pack | `echoflare`, `crafted`, `collection` | — |
| Chroma Brew | `woldsvaults:chroma_brew` | focus | addon | `crafted`, `collection`, `chroma_brew` | Laboratory |
| The Baguette | `the_vault:baguette` | wand | addon (override) | `baguette`, `crafted`, `collection` | The Laboratory |
| Chainlash | `the_vault:chainlash` | wand | addon (override) | `chainlash`, `crafted`, `collection` | The Laboratory |
| Inferno's Reach | `the_vault:inferno_reach` | wand | pack | `inferno_reach`, `crafted`, `collection` | Raid Vaults |
| Pocket Penguin | `woldsvaults:pocket_penguin` | plushie | addon | `crafted`, `collection`, `pocket_penguin` | Laboratory |
| The Wicked Witch | `woldsvaults:wicked_witch` | plushie | addon | `crafted`, `collection`, `wicked_witch` | Laboratory |
| Safer Spaces | `woldsvaults:safer_spaces` | plushie | addon | `crafted`, `collection`, `safer_spaces` | Black Market |
| Kaleidoscope | `the_vault:kaleidoscope` | jewel | pack | `default`, `kaleidoscope`, `crafted`, `collection` | The Laboratory |
| Manabloom | `the_vault:manabloom` | jewel | pack | `manabloom`, `crafted`, `collection` | X-Mark Room |
| Pax | `the_vault:pax` | jewel | pack | `pax`, `crafted`, `collection` | The Factory |
| Frozen Heart | `the_vault:frozen_heart` | jewel | pack | `frozen_heart`, `crafted`, `collection` | — |
| Shatterering Jewel | `woldsvaults:shattering_jewel` | jewel | addon | `collection`, `shattering_jewel` | Gateways |
| Eternal Stella | `woldsvaults:eternal_stella` | jewel | addon | `crafted`, `collection`, `eternal_stella` | Black Market |
| Treasured Jewel | `woldsvaults:treasure_jewel` | jewel | addon | `crafted`, `collection`, `treasure_jewel` | Craftable |
| Quickstone | `the_vault:quickstone` | magnet | pack | `quickstone`, `crafted`, `collection` | Memory Room |
| Aural Magnet | `woldsvaults:aural_magnet` | magnet | addon | `crafted`, `collection`, `aural_magnet` | Survival Gear Reward |
| Chonknet | `woldsvaults:chonknet` | magnet | addon | `crafted`, `collection`, `chonknet` | Bounty Reward |
| Treasure Hunter's Magnet | `woldsvaults:treasure_magnet` | magnet | addon | `crafted`, `collection`, `treasure_magnet` | Treasure Pedestal |
| Bloodfetcher | `woldsvaults:bloodseeking_magnet` | magnet | addon | `crafted`, `collection`, `bloodseeking_magnet` | Dungeon Pedestal |

## Pools (merged: pack `unique_gear.json` + jar additions)

| Pool | Contents (weight) |
|---|---|
| `the_vault:default_or` | Jester Hat (1), The Sweetheart (1), The Castle (1), Grim Shield (1), Crystal Plate (1) |
| `the_vault:default` | Kaleidoscope (1) |
| `the_vault:testers` | Grim Shield (1) |
| `the_vault:honey_stick` | Honey Stick (1) |
| `the_vault:inflated_justice` | Inflated Justice (1) |
| `the_vault:iskallibur` | Iskallibur (1) |
| `the_vault:butcher_axe` | Butcher's Axe (1) |
| `the_vault:starforge` | Starforge (1) |
| `the_vault:jester` | Jester Hat (1) |
| `the_vault:stormcrown` | Stormcrown (1) |
| `the_vault:warbound_helmet` | Helm of the Warbound (1) |
| `the_vault:annmari` | Ann-Mari (1) |
| `the_vault:castle` | The Castle (1) |
| `the_vault:crystalplate` | Crystal Plate (1) |
| `the_vault:frozen_throne` | Frozen Throne (1) |
| `the_vault:vitalis` | Vitalis Plate (1) |
| `the_vault:crashguards` | Crashguards (1) |
| `the_vault:swarmwalkers` | Swarmwalkers (1) |
| `the_vault:frostguards` | Frostguards (1) |
| `the_vault:pacifist_sandals` | Pacifist Sandals (1) |
| `the_vault:gladiator_buckler` | Gladiator's Buckler (1) |
| `the_vault:grim_shield` | Grim Shield (1) |
| `the_vault:ivy` | Rosethorn Ivy (1) |
| `the_vault:pestilence_wall` | Pestilence Wall (1) |
| `the_vault:frostwarden` | Frostwarden (1) |
| `the_vault:ender_rings` | Ender Rings (1) |
| `the_vault:frozen_orb` | Frozen Orb (1) |
| `the_vault:echoflare` | Echoflare (1) |
| `the_vault:baguette` | The Baguette (1) |
| `the_vault:chainlash` | Chainlash (1) |
| `the_vault:inferno_reach` | Inferno's Reach (1) |
| `the_vault:broodmother` | The Broodmother (1) |
| `the_vault:kaleidoscope` | Kaleidoscope (1) |
| `the_vault:manabloom` | Manabloom (1) |
| `the_vault:pax` | Pax (1) |
| `the_vault:frozen_heart` | Frozen Heart (1) |
| `the_vault:quickstone` | Quickstone (1) |
| `the_vault:crafted` | Jester Hat (1), The Sweetheart (1), The Castle (1), Grim Shield (1), Stormcrown (1), Helm of the Warbound (1), Crystal Plate (1), Frozen Throne (1), Crashguards (1), Swarmwalkers (1), Frostguards (1), Echoflare (1), Ann-Mari (1), Vitalis Plate (1), Pacifist Sandals (1), Gladiator's Buckler (1), the_vault:grim_shield (1), Rosethorn Ivy (1), Pestilence Wall (1), Frostwarden (1), Ender Rings (1), Frozen Orb (1), The Baguette (1), Chainlash (1), Inferno's Reach (1), The Broodmother (1), Kaleidoscope (1), Manabloom (1), Pax (1), Frozen Heart (1), Iskallibur (1), Starforge (1), Butcher's Axe (1), Honey Stick (1), Inflated Justice (1), Quickstone (1), Zeus's Fury (1), Fork of the Glutton (1), Aural Magnet (1), Pocket Penguin (1), Chroma Brew (1), Lava Chicken Sword (1), Eternal Stella (1), Treasured Jewel (1), The Wicked Witch (1), Chonknet (1), Treasure Hunter's Magnet (1), Bloodfetcher (1), Leviathan (1), Zombie Horse Axe (1), Tri-Rang (1), Everfrost (1), Everflame (1), Hexblade (1), Mineral Greatsword (1), Grass Sword (1), Aurora Scissors (1), Young Kitsune Blade (1), Safer Spaces (1), Bamboo Fightstick (1), Plague Steppers (1) |
| `the_vault:collection` | Jester Hat (1), The Castle (1), Grim Shield (1), Stormcrown (1), Helm of the Warbound (1), Crystal Plate (1), Frozen Throne (1), Crashguards (1), Swarmwalkers (1), Frostguards (1), Echoflare (1), Ann-Mari (1), Vitalis Plate (1), Pacifist Sandals (1), Gladiator's Buckler (1), the_vault:grim_shield (1), Rosethorn Ivy (1), Pestilence Wall (1), Frostwarden (1), Ender Rings (1), Frozen Orb (1), The Baguette (1), Chainlash (1), Inferno's Reach (1), The Broodmother (1), Kaleidoscope (1), Manabloom (1), Pax (1), Frozen Heart (1), Iskallibur (1), Starforge (1), Butcher's Axe (1), Honey Stick (1), Inflated Justice (1), Quickstone (1), Zeus's Fury (1), Fork of the Glutton (1), Aural Magnet (1), Pocket Penguin (1), Chroma Brew (1), Lava Chicken Sword (1), Shatterering Jewel (1), Eternal Stella (1), Treasured Jewel (1), The Wicked Witch (1), Chonknet (1), Treasure Hunter's Magnet (1), Bloodfetcher (1), Leviathan (1), Zombie Horse Axe (1), Tri-Rang (1), Everfrost (1), Everflame (1), Hexblade (1), Mineral Greatsword (1), Grass Sword (1), Aurora Scissors (1), Young Kitsune Blade (1), Safer Spaces (1), Bamboo Fightstick (1), Plague Steppers (1) |
| `woldsvaults:ocean_current` | Zeus's Fury (1) |
| `woldsvaults:fork_of_the_glutton` | Fork of the Glutton (1) |
| `woldsvaults:aural_magnet` | Aural Magnet (1) |
| `woldsvaults:pocket_penguin` | Pocket Penguin (1) |
| `woldsvaults:chroma_brew` | Chroma Brew (1) |
| `woldsvaults:lava_chicken_sword` | Lava Chicken Sword (1) |
| `woldsvaults:shattering_jewel` | Shatterering Jewel (1) |
| `woldsvaults:eternal_stella` | Eternal Stella (1) |
| `woldsvaults:treasure_jewel` | Treasured Jewel (1) |
| `woldsvaults:wicked_witch` | The Wicked Witch (1) |
| `woldsvaults:chonknet` | Chonknet (1) |
| `woldsvaults:treasure_magnet` | Treasure Hunter's Magnet (1) |
| `woldsvaults:bloodseeking_magnet` | Bloodfetcher (1) |
| `woldsvaults:leviathan` | Leviathan (1) |
| `woldsvaults:zombie_horse_axe` | Zombie Horse Axe (1) |
| `woldsvaults:trirang` | Tri-Rang (1) |
| `woldsvaults:everfrost` | Everfrost (1) |
| `woldsvaults:everflame` | Everflame (1) |
| `woldsvaults:hexblade` | Hexblade (1) |
| `woldsvaults:mineral_greatsword` | Mineral Greatsword (1) |
| `woldsvaults:grass_sword` | Grass Sword (1) |
| `woldsvaults:aurora_scissors` | Aurora Scissors (1) |
| `woldsvaults:young_kitsune` | Young Kitsune Blade (1) |
| `woldsvaults:safer_spaces` | Safer Spaces (1) |
| `woldsvaults:bamboo_fightstick` | Bamboo Fightstick (1) |
| `woldsvaults:plague_steppers` | Plague Steppers (1) |

---

# Swords

## Crystal Double Blade (`the_vault:crystal_double_blade`)

**Item:** sword · **Source:** pack config · **Model:** `the_vault:gear/sword/crystalblade` · **Pools:** none (only obtainable if something rolls this registry id directly)

> *(no codex page)*

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_attack_damage` → **attack_damage**: **90 to 100** (L100+ bracket; 1 of 6 brackets open at L100, span 45 to 100)
- `the_vault:base_attack_speed` → **attack_speed**: **-2.29 to -2.2** (L50+ bracket; 1 of 2 brackets open at L100, span -2.4 to -2.2)

**PREFIX**
- `the_vault:mod_ap` → **ability_power**: **45 to 50** (L96+ bracket; 1 of 6 brackets open at L100, span 21 to 50)

**SUFFIX**
- `the_vault:mod_attack_range` → **attack_range** [tags: focusAttackRange]: **0.41 to 0.5** (L75+ bracket; 1 of 4 brackets open at L100, span 0.1 to 0.5)
- `the_vault:mod_attack_speed_percent` → **attack_speed_percent** [tags: focusAttackSpeedPercent, noLegendary]: **0.21 to 0.25** (L96+ bracket; 1 of 4 brackets open at L100, span 0.05 to 0.25)

## Honey Stick (`the_vault:honey_stick`)

**Item:** sword · **Source:** pack config · **Model:** `the_vault:gear/sword/honey_wand`, `the_vault:gear/sword/honey_wand_dark`, `the_vault:gear/sword/honey_wand_no_bee` · **Pools:** `the_vault:honey_stick` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> Keep the mobs away from you with ease by shocking them with most strikes.
>
> Drops in: Villages

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_attack_damage` → **attack_damage**: **90 to 100** (L100+ bracket; 1 of 6 brackets open at L100, span 45 to 100)
- `the_vault:base_attack_speed` → **attack_speed**: **-2.29 to -2.2** (L50+ bracket; 1 of 2 brackets open at L100, span -2.4 to -2.2)
- `the_vault:base_sweeping_hit_damage` → **sweeping_hit_damage**: **0.71 to 0.8** (L94+ bracket; 1 of 5 brackets open at L100, span 0.31 to 0.8)

**PREFIX**
- `the_vault:mod_attack_speed_percent` → **attack_speed_percent** [tags: focusAttackSpeedPercent, noLegendary]: **0.21 to 0.25** (L96+ bracket; 1 of 4 brackets open at L100, span 0.05 to 0.25)

**SUFFIX**
- `the_vault:u_shocking_hit` → **shocking_hit_chance** [tags: focusShocking]: **0.81 to 1** (L65+ bracket; 1 of 4 brackets open at L100, span 0.2 to 1)
- `the_vault:u_stun_hit` → **on_hit_stun** [tags: focusStun]: **0.21 to 0.3** (L86+ bracket; 1 of 5 brackets open at L100, span 0.04 to 0.3)
  - jump-only tiers: L101: 0.31 to 0.4 (imbuement)

## Inflated Justice (`the_vault:inflated_justice`)

**Item:** sword · **Source:** pack config · **Model:** `the_vault:gear/sword/inflatedjustice`, `the_vault:gear/sword/inflatedjustice_bam`, `the_vault:gear/sword/inflatedjustice_wop` · **Pools:** `the_vault:inflated_justice` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> Tired of the little ones? Inflated Justice will be your best friend with its area attacks and increased toddler damage.
>
> Drops in: Raid Vaults

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_attack_damage` → **attack_damage**: **90 to 100** (L100+ bracket; 1 of 6 brackets open at L100, span 45 to 100)
- `the_vault:base_attack_speed` → **attack_speed**: **-2.29 to -2.2** (L50+ bracket; 1 of 2 brackets open at L100, span -2.4 to -2.2)
- `the_vault:base_sweeping_hit_damage` → **sweeping_hit_damage**: **0.71 to 0.8** (L94+ bracket; 1 of 5 brackets open at L100, span 0.31 to 0.8)

**PREFIX**
- `the_vault:mod_attack_damage` → **attack_damage** [tags: focusAttackDamage]: **49 to 55** (L87+ bracket; 1 of 5 brackets open at L100, span 19 to 55)
  - jump-only tiers: L101: 56 to 65 (imbuement) · L102: 66 to 72 (needs +2 jump — unreachable on uniques)
- `the_vault:mod_damage_baby` → **damage_baby** [tags: focusDamageToddler]: **0.6 to 1** (L90+ bracket)
  - jump-only tiers: L101: 1.01 to 2 (imbuement)

**SUFFIX**
- `the_vault:u_on_hit_aoe` → **on_hit_aoe** [tags: focusChaining]: **5 to 5** (L95+ bracket; 1 of 4 brackets open at L100, span 2 to 5)

## Iskallibur (`the_vault:iskallibur`)

**Item:** sword · **Source:** pack config · **Model:** `the_vault:gear/sword/iskallibur_sword`, `the_vault:gear/sword/pinkskallibur`, `the_vault:gear/sword/iskallibur_broad` · **Pools:** `the_vault:iskallibur` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> Wielding Iskallibur makes you stronger while fighting.
>
> Drops in: X-Mark Room

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_attack_damage` → **attack_damage**: **90 to 100** (L100+ bracket; 1 of 6 brackets open at L100, span 45 to 100)
- `the_vault:base_attack_speed` → **attack_speed**: **-2.29 to -2.2** (L50+ bracket; 1 of 2 brackets open at L100, span -2.4 to -2.2)
- `the_vault:base_sweeping_hit_damage` → **sweeping_hit_damage**: **0.71 to 0.8** (L94+ bracket; 1 of 5 brackets open at L100, span 0.31 to 0.8)

**PREFIX**
- `the_vault:mod_attack_damage` → **attack_damage** [tags: focusAttackDamage]: **49 to 55** (L87+ bracket; 1 of 5 brackets open at L100, span 19 to 55)
  - jump-only tiers: L101: 56 to 65 (imbuement) · L102: 66 to 72 (needs +2 jump — unreachable on uniques)

**SUFFIX**
- `the_vault:u_relentless_strike` → **relentless_strike** [tags: noLegendary]: L0+: 0.13 to 0.16
- `the_vault:mod_attack_speed_percent` → **attack_speed_percent** [tags: focusAttackSpeedPercent, noLegendary]: **0.21 to 0.25** (L96+ bracket; 1 of 4 brackets open at L100, span 0.05 to 0.25)

## Lava Chicken Sword (`woldsvaults:lava_chicken_sword`)

**Item:** sword · **Source:** addon jar · **Model:** `woldsvaults:gear/sword/lava_chicken_sword` · **Pools:** `the_vault:crafted` (w1), `the_vault:collection` (w1), `woldsvaults:lava_chicken_sword` (w1)

> L-l-l-lava, ch-ch-ch-chicken, this lava chicken drumstick will burn the hell out of yourself and your enemies
>
> Drops in: Survival

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_attack_damage` → **attack_damage**: **90 to 100** (L100+ bracket; 1 of 6 brackets open at L100, span 45 to 100)
- `the_vault:base_attack_speed` → **attack_speed**: **-2.29 to -2.2** (L50+ bracket; 1 of 2 brackets open at L100, span -2.4 to -2.2)

**PREFIX**
- `the_vault:mod_burning_hit_lava_chicken` → **burning_hit_chance**: **0.16 to 0.2** (L75+ bracket; 1 of 2 brackets open at L100, span 0.14 to 0.2) (jar tiers)
- `the_vault:mod_dripping_lava` → **dripping_lava**: L0+: {"flag": true} (jar tiers)
- `the_vault:u_on_hit_aoe` → **on_hit_aoe** [tags: focusChaining]: **5 to 5** (L95+ bracket; 1 of 4 brackets open at L100, span 2 to 5)

**SUFFIX**
- `the_vault:jester_lucky_hit` → **lucky_hit_chance**: **0.06 to 0.15** (L50+ bracket; 1 of 2 brackets open at L100, span 0.05 to 0.15)
- `the_vault:u_stun_hit` → **on_hit_stun** [tags: focusStun]: **0.21 to 0.3** (L86+ bracket; 1 of 5 brackets open at L100, span 0.04 to 0.3)
  - jump-only tiers: L101: 0.31 to 0.4 (imbuement)

## Everfrost (`woldsvaults:everfrost`)

**Item:** sword · **Source:** addon jar · **Model:** `the_vault:gear/sword/everfrost` · **Pools:** `the_vault:crafted` (w1), `the_vault:collection` (w1), `woldsvaults:everfrost` (w1)

> This frozen Sword boosts the power of your Glacial Blast!
>
> Drops in: Vendoors

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_attack_damage` → **attack_damage**: **90 to 100** (L100+ bracket; 1 of 6 brackets open at L100, span 45 to 100)
- `the_vault:base_attack_speed` → **attack_speed**: **-2.29 to -2.2** (L50+ bracket; 1 of 2 brackets open at L100, span -2.4 to -2.2)

**PREFIX**
- `the_vault:mod_attack_damage` → **attack_damage** [tags: focusAttackDamage]: **49 to 55** (L87+ bracket; 1 of 5 brackets open at L100, span 19 to 55)
  - jump-only tiers: L101: 56 to 65 (imbuement) · L102: 66 to 72 (needs +2 jump — unreachable on uniques)
- `the_vault:mod_everfrost_blast` → **added_ability_level**: **{"abilityKey": "Ice_Bolt_Blast", "levelChange": 3}** (L50+ bracket; 1 of 3 brackets open at L100)

**SUFFIX**
- `the_vault:mod_area_of_effect` → **area_of_effect** [tags: focusEffectRadius]: **0.17 to 0.2** (L89+ bracket; 1 of 3 brackets open at L100, span 0.08 to 0.2)
  - jump-only tiers: L101: 0.21 to 0.26 (imbuement) · L102: 0.27 to 0.32 (needs +2 jump — unreachable on uniques)
- `the_vault:unique_glacial_hypothermia` → **ability_special_modification**: **6 to 6 {"specialModificationKey": "the_vault:glacial_blast_hypothermia", "abilityKey": "Ice_Bolt_Blast", "textColor": 14076214, "highlightColor": 6082075}** (L80+ bracket; 1 of 4 brackets open at L100, span 3 to 6)

## Everflame (`woldsvaults:everflame`)

**Item:** sword · **Source:** addon jar · **Model:** `the_vault:gear/sword/everflame` · **Pools:** `the_vault:crafted` (w1), `the_vault:collection` (w1), `woldsvaults:everflame` (w1)

> This flaming Sword gives you the ability to shoot TWO fireballs!
>
> Drops in: Vendoors

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_attack_damage` → **attack_damage**: **90 to 100** (L100+ bracket; 1 of 6 brackets open at L100, span 45 to 100)
- `the_vault:base_attack_speed` → **attack_speed**: **-2.29 to -2.2** (L50+ bracket; 1 of 2 brackets open at L100, span -2.4 to -2.2)

**PREFIX**
- `the_vault:mod_attack_damage` → **attack_damage** [tags: focusAttackDamage]: **49 to 55** (L87+ bracket; 1 of 5 brackets open at L100, span 19 to 55)
  - jump-only tiers: L101: 56 to 65 (imbuement) · L102: 66 to 72 (needs +2 jump — unreachable on uniques)
- `the_vault:mod_everflame_fireball` → **added_ability_level**: **{"abilityKey": "Fireball_Base", "levelChange": 3}** (L50+ bracket; 1 of 3 brackets open at L100)

**SUFFIX**
- `the_vault:mod_area_of_effect` → **area_of_effect** [tags: focusEffectRadius]: **0.17 to 0.2** (L89+ bracket; 1 of 3 brackets open at L100, span 0.08 to 0.2)
  - jump-only tiers: L101: 0.21 to 0.26 (imbuement) · L102: 0.27 to 0.32 (needs +2 jump — unreachable on uniques)
- `the_vault:unique_everflame_modification` → **ability_special_modification**: **0.5 to 0.65 {"specialModificationKey": "the_vault:fireball_special_modification", "abilityKey": "Fireball_Base", "textColor": 14076214, "highlightColor": 6082075}** (L80+ bracket; 1 of 4 brackets open at L100, span 0.15 to 0.65)

## Hexblade (`woldsvaults:hexblade`)

**Item:** sword · **Source:** addon jar · **Model:** `the_vault:gear/sword/hexblade` · **Pools:** `the_vault:crafted` (w1), `the_vault:collection` (w1), `woldsvaults:hexblade` (w1)

> This Sword can apply a myriad of negative effects to your foes!
>
> Drops in: Vendoors

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_attack_damage` → **attack_damage**: **90 to 100** (L100+ bracket; 1 of 6 brackets open at L100, span 45 to 100)
- `the_vault:base_attack_speed` → **attack_speed**: **-2.29 to -2.2** (L50+ bracket; 1 of 2 brackets open at L100, span -2.4 to -2.2)

**PREFIX**
- `the_vault:mod_hexing_chance` → **hexing_chance** [tags: focusHexing]: **0.31 to 0.35** (L90+ bracket; 1 of 4 brackets open at L100, span 0.11 to 0.35)
- `the_vault:mod_ability_increase` → **ability_power_percent** [tags: focusAbilityDamage, antiqueAnyAbilityPower]: **0.16 to 0.2** (L87+ bracket; 1 of 3 brackets open at L100, span 0.08 to 0.2)
  - jump-only tiers: L101: 0.21 to 0.5 (imbuement)

**SUFFIX**
- `the_vault:mod_attack_speed_percent` → **attack_speed_percent** [tags: focusAttackSpeedPercent, noLegendary]: **0.21 to 0.25** (L96+ bracket; 1 of 4 brackets open at L100, span 0.05 to 0.25)
- `the_vault:mod_attack_range` → **attack_range** [tags: focusAttackRange]: **0.41 to 0.5** (L75+ bracket; 1 of 4 brackets open at L100, span 0.1 to 0.5)

## Mineral Greatsword (`woldsvaults:mineral_greatsword`)

**Item:** sword · **Source:** addon jar · **Model:** `the_vault:gear/sword/mineral_greatsword` · **Pools:** `the_vault:crafted` (w1), `the_vault:collection` (w1), `woldsvaults:mineral_greatsword` (w1)

> This colossal Sword can hit hard and stun your foes!
>
> Drops in: Vendoors

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_attack_damage` → **attack_damage**: **90 to 100** (L100+ bracket; 1 of 6 brackets open at L100, span 45 to 100)
- `the_vault:base_attack_speed_greatsword` → **attack_speed**: **-2.7 to -2.65** (L50+ bracket; 1 of 2 brackets open at L100, span -2.8 to -2.65)

**PREFIX**
- `the_vault:mod_attack_damage_mineral_greatsword` → **attack_damage** [tags: focusAttackDamage]: **66 to 70** (L87+ bracket; 1 of 5 brackets open at L100, span 36 to 70)
  - jump-only tiers: L101: 71 to 75 (imbuement) · L102: 76 to 80 (needs +2 jump — unreachable on uniques)

**SUFFIX**
- `the_vault:mineral_greatsword_stun` → **on_hit_stun** [tags: focusStun]: L0+: 0.4 to 0.5
- `the_vault:mod_attack_range` → **attack_range** [tags: focusAttackRange]: **0.41 to 0.5** (L75+ bracket; 1 of 4 brackets open at L100, span 0.1 to 0.5)

## Grass Sword (`woldsvaults:grass_sword`)

**Item:** sword · **Source:** addon jar · **Model:** `the_vault:gear/sword/grass_blade` · **Pools:** `the_vault:crafted` (w1), `the_vault:collection` (w1), `woldsvaults:grass_sword` (w1)

> This lovely Sword can use your Thorns Damage to deal additional damage on-hit!
>
> Drops in: Vendoors

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_attack_damage` → **attack_damage**: **90 to 100** (L100+ bracket; 1 of 6 brackets open at L100, span 45 to 100)
- `the_vault:base_attack_speed` → **attack_speed**: **-2.29 to -2.2** (L50+ bracket; 1 of 2 brackets open at L100, span -2.4 to -2.2)

**PREFIX**
- `the_vault:base_thorns_damage_flat_sword` → **thorns_damage_flat**: **31 to 45** (L80+ bracket; 1 of 2 brackets open at L100, span 19 to 45)
- `the_vault:u_grass_sword_healing_eff` → **healing_effectiveness** [tags: focusHealingEff]: **0.16 to 0.25** (L51+ bracket)

**SUFFIX**
- `the_vault:thorns_scaling_damage_grass_sword` → **thorns_scaling_damage**: **0.31 to 0.5** (L40+ bracket; 1 of 2 brackets open at L100, span 0.15 to 0.5)

## Aurora Scissors (`woldsvaults:aurora_scissors`)

**Item:** sword · **Source:** addon jar · **Model:** `the_vault:gear/sword/aurora_scissors` · **Pools:** `the_vault:crafted` (w1), `the_vault:collection` (w1), `woldsvaults:aurora_scissors` (w1)

> This lovely Sword can use your Ability Power to deal additional damage on-hit!
>
> Drops in: Black Market

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_attack_damage` → **attack_damage**: **90 to 100** (L100+ bracket; 1 of 6 brackets open at L100, span 45 to 100)
- `the_vault:base_attack_speed` → **attack_speed**: **-2.29 to -2.2** (L50+ bracket; 1 of 2 brackets open at L100, span -2.4 to -2.2)

**PREFIX**
- `the_vault:mod_ap` → **ability_power**: **45 to 50** (L96+ bracket; 1 of 6 brackets open at L100, span 21 to 50)
- `the_vault:mod_soul_chance_scissors` → **soul_chance** [tags: focusSoulChance]: **0.67 to 1** (L40+ bracket)

**SUFFIX**
- `the_vault:ap_scaling_damage_scissors` → **ap_scaling_damage**: **0.26 to 0.35** (L40+ bracket; 1 of 2 brackets open at L100, span 0.1 to 0.35)
- `the_vault:mod_attack_speed_percent` → **attack_speed_percent** [tags: focusAttackSpeedPercent, noLegendary]: **0.21 to 0.25** (L96+ bracket; 1 of 4 brackets open at L100, span 0.05 to 0.25)

## Young Kitsune Blade (`woldsvaults:young_kitsune`)

**Item:** sword · **Source:** addon jar · **Model:** `the_vault:gear/sword/young_kitsune` · **Pools:** `the_vault:crafted` (w1), `the_vault:collection` (w1), `woldsvaults:young_kitsune` (w1)

> The weaker they are, the harder they fall!
>
> Drops in: Vendoors

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_attack_damage` → **attack_damage**: **90 to 100** (L100+ bracket; 1 of 6 brackets open at L100, span 45 to 100)
- `the_vault:base_attack_speed` → **attack_speed**: **-2.29 to -2.2** (L50+ bracket; 1 of 2 brackets open at L100, span -2.4 to -2.2)

**PREFIX**
- `the_vault:mod_execution_young_kitsune` → **execution_damage** [tags: focusResistance]: **0.06 to 0.1** (L65+ bracket; 1 of 2 brackets open at L100, span 0.03 to 0.1)

**SUFFIX**
- `the_vault:mod_attack_speed_percent` → **attack_speed_percent** [tags: focusAttackSpeedPercent, noLegendary]: **0.21 to 0.25** (L96+ bracket; 1 of 4 brackets open at L100, span 0.05 to 0.25)

---

# Axes

## Butcher's Axe (`the_vault:butcher_axe`)

**Item:** axe · **Source:** pack config · **Model:** `the_vault:gear/axe/butchers_bone_cleaver` · **Pools:** `the_vault:butcher_axe` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> A heavy guardian axe that deals brutal blows and can occasionally heal its wielder on a killing strike
>
> Drops in: Villages

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_attack_damage` → **attack_damage**: **90 to 100** (L100+ bracket; 1 of 6 brackets open at L100, span 45 to 100)
- `the_vault:base_attack_speed` → **attack_speed**: **-2.29 to -2.2** (L50+ bracket; 1 of 2 brackets open at L100, span -2.4 to -2.2)
- `the_vault:base_double_hit_chance` → **double_hit_chance**: **0.71 to 0.81** (L65+ bracket; 1 of 5 brackets open at L100, span 0.2 to 0.81)

**PREFIX**
- `the_vault:mod_attack_damage` → **attack_damage** [tags: focusAttackDamage]: **49 to 55** (L87+ bracket; 1 of 5 brackets open at L100, span 19 to 55)
  - jump-only tiers: L101: 56 to 65 (imbuement) · L102: 66 to 72 (needs +2 jump — unreachable on uniques)
- `the_vault:unique_rampage_level` — ⚠ NOT FOUND in merged unique tier config (will not roll)

**SUFFIX**
- `the_vault:u_on_kill_heal` → **on_kill_heal** [tags: noImbuement]: L0+: {"chance": {"min": 0.05, "max": 0.2, "step": 0.01}, "amount": {"min": 2.0, "max": 2.0, "step": 0.0}}

## Starforge (`the_vault:starforge`)

**Item:** axe · **Source:** pack config · **Model:** `the_vault:gear/axe/starforge` · **Pools:** `the_vault:starforge` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> An imbued axe that gathers arcane force with each strike, occasionally unleashing a powerful blast.
>
> Drops in: Raid Vaults

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_attack_damage` → **attack_damage**: **90 to 100** (L100+ bracket; 1 of 6 brackets open at L100, span 45 to 100)
- `the_vault:base_attack_speed` → **attack_speed**: **-2.29 to -2.2** (L50+ bracket; 1 of 2 brackets open at L100, span -2.4 to -2.2)

**PREFIX**
- `the_vault:mod_ap` → **ability_power**: **45 to 50** (L96+ bracket; 1 of 6 brackets open at L100, span 21 to 50)

**SUFFIX**
- `the_vault:mod_attack_speed_percent` → **attack_speed_percent** [tags: focusAttackSpeedPercent, noLegendary]: **0.21 to 0.25** (L96+ bracket; 1 of 4 brackets open at L100, span 0.05 to 0.25)
- `the_vault:u_arcane_nova_on_hit` → **arcane_nova_on_hit** [tags: noImbuement]: L0+: {"hitsRequired": {"min": 6, "max": 10, "step": 1}, "radius": {"min": 3.0, "max": 6.0, "step": 1}, "percentAbilityPower": {"min": 0.5, "max": 2.0, "step": 0.05}}

## Leviathan (`woldsvaults:leviathan`)

**Item:** axe · **Source:** addon jar · **Model:** `the_vault:gear/axe/leviathan` · **Pools:** `the_vault:crafted` (w1), `the_vault:collection` (w1), `woldsvaults:leviathan` (w1)

> This heavy hitter of an Axe hits for massive max health damage but is extremely slow! 
>
> Drops in: Bounty Reward

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:u_leviathan_attack_damage` → **attack_damage**: **109 to 132** (L100+ bracket; 1 of 6 brackets open at L100, span 56 to 132)
- `the_vault:u_leviathan_attack_speed` → **attack_speed**: **-3.5 to -3.35** (L50+ bracket)

**PREFIX**
- `the_vault:u_leviathan_reaving_damage` → **reaving_damage** [tags: focusReavingDamage]: **0.51 to 0.75** (L50+ bracket)

## Zombie Horse Axe (`woldsvaults:zombie_horse_axe`)

**Item:** axe · **Source:** addon jar · **Model:** `the_vault:gear/axe/zombie_horse` · **Pools:** `the_vault:crafted` (w1), `the_vault:collection` (w1), `woldsvaults:zombie_horse_axe` (w1)

> This spooky Axe can put out extremely deadly Poison clouds and makes you move faster!
>
> Drops in: Graveyard Room

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:u_leviathan_attack_damage` → **attack_damage**: **109 to 132** (L100+ bracket; 1 of 6 brackets open at L100, span 56 to 132)
- `the_vault:base_attack_speed_axe` → **attack_speed**: **-2.85 to -2.6** (L50+ bracket; 1 of 2 brackets open at L100, span -2.95 to -2.6)

**PREFIX**
- `the_vault:u_movement_horse` → **movement_speed**: **0.3 to 0.4** (L80+ bracket; 1 of 3 brackets open at L100, span 0.1 to 0.4)
- `the_vault:mod_attack_range` → **attack_range** [tags: focusAttackRange]: **0.41 to 0.5** (L75+ bracket; 1 of 4 brackets open at L100, span 0.1 to 0.5)

**SUFFIX**
- `the_vault:mod_poison_cloud_zombie_horse` → **effect_cloud** [tags: focusPoisonCloud]: **{"tooltipDisplayName": "Poison VII", "potion": "minecraft:empty", "additionalEffects": [{"effect": "minecraft:poison", "duration": 100, "amplifier": 16, "showParticles": true, "showIcon": true}], "duration": 300, "radius": 6.0, "color": 4236591, "affectsOwner": false, "triggerChance": 0.15}** (L80+ bracket; 1 of 3 brackets open at L100)

---

# Tridents

## Zeus's Fury (`woldsvaults:ocean_current`)

**Item:** trident · **Source:** addon jar · **Model:** `woldsvaults:gear/trident/ocean_current` · **Pools:** `the_vault:crafted` (w1), `the_vault:collection` (w1), `woldsvaults:ocean_current` (w1)

> The fury of the gods embodied within a Trident
>
> Channel their rage into fierce lightning.
>
> Drops in: Bounty

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:trident_damage_low` → **attack_damage**: **70 to 80** (L100+ bracket; 1 of 6 brackets open at L100, span 40 to 80) (jar tiers)
- `the_vault:trident_loyalty_zeus` → **trident_loyalty**: **4 to 6** (L70+ bracket; 1 of 2 brackets open at L100, span 2 to 6) (jar tiers)
- `the_vault:trident_channeling` → **trident_channeling**: L0+: {"flag": true} (jar tiers)

**PREFIX**
- `the_vault:channeling_chance_zeus` → **trident_channeling_chance**: **0.75 to 1** (L90+ bracket; 1 of 3 brackets open at L100, span 0.25 to 1) (jar tiers)
- `the_vault:second_judgement_zeus` → **second_judgement**: **0.5 to 0.75** (L65+ bracket; 1 of 2 brackets open at L100, span 0.25 to 0.75) (jar tiers)
- `the_vault:windup_time_zeus` → **trident_wind_up_percent**: **0.5 to 0.75** (L65+ bracket) (jar tiers)

**SUFFIX**
- `the_vault:shocking_hit_zeus` → **shocking_hit_chance**: L0+: 0.25 to 0.25 (jar tiers)
- `the_vault:slowness_cloud_zeus` → **effect_cloud**: **{"tooltipDisplayName": "Slowness I", "potion": "minecraft:empty", "additionalEffects": [{"effect": "minecraft:slowness", "duration": 140, "amplifier": 0}], "duration": 120, "radius": 4.0, "color": 5926017, "affectsOwner": false, "triggerChance": 0.05}** (L0+ bracket; 1 of 3 brackets open at L100) (jar tiers)

## Fork of the Glutton (`woldsvaults:fork_of_the_glutton`)

**Item:** trident · **Source:** addon jar · **Model:** `woldsvaults:gear/trident/fork` · **Pools:** `the_vault:crafted` (w1), `the_vault:collection` (w1), `woldsvaults:fork_of_the_glutton` (w1)

> Feast upon your foes!
>
> Drops in: Survival Gear Reward

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:trident_damage` → **attack_damage**: **95 to 115** (L100+ bracket; 1 of 6 brackets open at L100, span 44 to 115) (jar tiers)
- `the_vault:trident_loyalty` → **trident_loyalty**: **3 to 4** (L70+ bracket; 1 of 3 brackets open at L100, span 1 to 4) (jar tiers)

**PREFIX**
- `the_vault:mod_hit_hearts_fork` → **hit_hearts**: **0.5 to 0.75** (L85+ bracket; 1 of 3 brackets open at L100, span 0.3 to 0.75) (jar tiers)
- `the_vault:mod_tank_damage_fork` → **damage_tank**: L0+: 0.5 to 1 (jar tiers)
- `the_vault:mod_soul_quantity_fork` → **soul_chance_percentile**: L0+: 0.25 to 0.25 (jar tiers)

**SUFFIX**
- `the_vault:mod_healing_cloud_fork` → **effect_cloud**: **{"tooltipDisplayName": "Healing I", "potion": "minecraft:empty", "additionalEffects": [{"effect": "minecraft:instant_health", "duration": 20, "amplifier": 0}], "duration": 80, "radius": 4.0, "color": 16262179, "affectsOwner": true, "triggerChance": 0.05}** (L0+ bracket; 1 of 3 brackets open at L100) (jar tiers)
- `the_vault:jester_lucky_hit` → **lucky_hit_chance**: **0.06 to 0.15** (L50+ bracket; 1 of 2 brackets open at L100, span 0.05 to 0.15)

---

# Vaultarangs

## Tri-Rang (`woldsvaults:trirang`)

**Item:** rang · **Source:** addon jar · **Model:** `the_vault:gear/rang/trirang` · **Pools:** `the_vault:crafted` (w1), `the_vault:collection` (w1), `woldsvaults:trirang` (w1)

> This numeric obsessed Vaultarang can do quite a bit of damage!
>
> Drops in: Bounty Reward

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:rang_standard_attack_speed` → **attack_speed**: **-2.5 to -2.4** (L50+ bracket; 1 of 2 brackets open at L100, span -2.6 to -2.4)
- `the_vault:rang_standard_attack_damage` → **attack_damage**: **60.5 to 65** (L100+ bracket; 1 of 6 brackets open at L100, span 35 to 65)
- `the_vault:rang_standard_range` → **range**: **25 to 30** (L90+ bracket; 1 of 4 brackets open at L100, span 14 to 30)
- `the_vault:rang_standard_velocity` → **velocity**: **0.07 to 0.08** (L75+ bracket; 1 of 3 brackets open at L100, span 0.03 to 0.08)

**PREFIX**
- `the_vault:trirang_chaining` → **on_hit_chain** [tags: focusChaining]: L0+: 3 to 3
- `the_vault:trirang_piercing` → **piercing** [tags: focusPiercing]: L0+: 3 to 3
- `the_vault:trirang_returning` → **returning_damage** [tags: focusReturnDamage]: L0+: 0.33 to 0.33

**SUFFIX**
- `the_vault:trirang_lucky_hit` → **lucky_hit_chance** [tags: focusLuckyHitChance]: L0+: 0.03 to 0.03
- `the_vault:trirang_stun` → **on_hit_stun** [tags: focusStun]: L0+: 0.03 to 0.03
- `the_vault:trirang_shock` → **shocking_hit_chance** [tags: focusShocking]: L0+: 0.03 to 0.03

---

# Battlestaves

## Bamboo Fightstick (`woldsvaults:bamboo_fightstick`)

**Item:** battlestaff · **Source:** addon jar · **Model:** `the_vault:gear/battlestaff/bamboo_fightstick` · **Pools:** `the_vault:crafted` (w1), `the_vault:collection` (w1), `woldsvaults:bamboo_fightstick` (w1)

> Trigger Lucky Hits extremely often with this weak stick!
>
> Drops in: Vendoors

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_attack_damage_battlestaff_stick` → **attack_damage**: **14 to 15** (L100+ bracket; 1 of 6 brackets open at L100, span 9 to 15)
- `the_vault:base_lucky_hit_battlestaff_stick` → **lucky_hit_chance**: L0+: 0.45 to 0.55
- `the_vault:base_attack_speed_battlestaff_stick` → **attack_speed**: **-1.9 to -1.65** (L50+ bracket; 1 of 2 brackets open at L100, span -2 to -1.65)
- `the_vault:base_attack_range_battlestaff_stick` → **attack_range** [tags: focusAttackRange]: **0.41 to 0.5** (L75+ bracket; 1 of 4 brackets open at L100, span 0.15 to 0.5)

---

# Helmets

## Jester Hat (`the_vault:jester`)

**Item:** helmet · **Source:** pack config · **Model:** `the_vault:gear/armor/jester/helmet`, `the_vault:gear/armor/jester_sad/helmet`, `the_vault:gear/armor/jester_purple_green/helmet` · **Pools:** `the_vault:default_or` (w1), `the_vault:jester` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> Feeling Lucky?
> The Jester Hat has two Lucky Hit rolls!
>
> Drops in: The Laboratory

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_armor` → **armor**: **28 to 30** (L97+ bracket; 1 of 4 brackets open at L100, span 17 to 30)
- `the_vault:base_lucky_hit_chance` → **lucky_hit_chance**: **0.05 to 0.07** (L40+ bracket; 1 of 2 brackets open at L100, span 0.03 to 0.07)

**SUFFIX**
- `the_vault:u_item_rarity` → **item_rarity** [tags: focusItemRarity]: L90+: 0.2 to 0.3
- `the_vault:jester_lucky_hit_percentile` → **jester_lucky_hit_chance_percentile** [tags: focusLuckyHitChance]: L0+: 0.5 to 1

## Stormcrown (`the_vault:stormcrown`)

**Item:** helmet · **Source:** pack config · **Model:** `the_vault:gear/armor/stormcrown/helmet`, `the_vault:gear/armor/thundercrown_silver/helmet`, `the_vault:gear/armor/thundercrown_gold/helmet` · **Pools:** `the_vault:stormcrown` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> Imbued with the power of thunder Stormcrown changes the way Storm Arrow can be used.
>
> Drops in: Raid Vaults

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_ap` → **ability_power**: **45 to 50** (L96+ bracket; 1 of 6 brackets open at L100, span 21 to 50)

**PREFIX**
- `the_vault:unique_storm_arrow_level` → **added_ability_level** [tags: focusAbilityPower, focusAbilityPowerStormArrow]: **{"abilityKey": "Storm_Arrow_Base", "levelChange": 2}** (L25+ bracket)
  - jump-only tiers: L101: {"abilityKey": "Storm_Arrow_Base", "levelChange": 2} (imbuement)
- `the_vault:storm_aoe_reduce` → **ability_area_of_effect_percent**: L90+: -0.8 to -0.6 {"abilityKey": "Storm_Arrow_Base"}
- `the_vault:storm_cooldown` → **ability_cooldown_percent**: L90+: -0.75 to -0.5 {"abilityKey": "Storm_Arrow_Base"}

**SUFFIX**
- `the_vault:mod_mana_regen` → **mana_regen** [tags: focusManaRegen]: **0.81 to 1** (L92+ bracket; 1 of 5 brackets open at L100, span 0.41 to 1)
  - jump-only tiers: L101: 1.01 to 1.3 (imbuement) · L102: 1.31 to 2 (needs +2 jump — unreachable on uniques)

## Helm of the Warbound (`the_vault:warbound_helmet`)

**Item:** helmet · **Source:** pack config · **Model:** `the_vault:gear/armor/spiral_guardian/helmet`, `the_vault:gear/armor/helm_of_the_warbound_aquatic/helmet`, `the_vault:gear/armor/helm_of_the_warbound_amythyst/helmet` · **Pools:** `the_vault:warbound_helmet` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> This helmet gives your Scatter Javelins extra power!
>
> Drops in: Raid Vaults

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_armor` → **armor**: **28 to 30** (L97+ bracket; 1 of 4 brackets open at L100, span 17 to 30)

**PREFIX**
- `the_vault:mod_jav_scatter` → **added_ability_level**: **{"abilityKey": "Javelin_Scatter", "levelChange": 3}** (L50+ bracket; 1 of 3 brackets open at L100)
- `the_vault:mod_damage_increase` → **damage_increase** [tags: focusDamage]: **0.29 to 0.35** (L90+ bracket; 1 of 3 brackets open at L100, span 0.15 to 0.35)
  - jump-only tiers: L101: 0.36 to 0.5 (imbuement) · L102: 0.51 to 0.75 (needs +2 jump — unreachable on uniques)

**SUFFIX**
- `the_vault:mod_cooldown_reduction` → **cooldown_reduction** [tags: focusCooldown]: **0.26 to 0.28** (L90+ bracket; 1 of 6 brackets open at L100, span 0.05 to 0.28)
- `the_vault:mod_mana_regen` → **mana_regen** [tags: focusManaRegen]: **0.81 to 1** (L92+ bracket; 1 of 5 brackets open at L100, span 0.41 to 1)
  - jump-only tiers: L101: 1.01 to 1.3 (imbuement) · L102: 1.31 to 2 (needs +2 jump — unreachable on uniques)

---

# Chestplates

## Ann-Mari (`the_vault:annmari`)

**Item:** chestplate · **Source:** pack config · **Model:** `the_vault:gear/armor/phoenix_chestplate/chestplate` · **Pools:** `the_vault:annmari` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> Let the great Ann-Mari watch over you, always having your back.
>
> Drops in: X-Mark

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_armor` → **armor**: **28 to 30** (L97+ bracket; 1 of 4 brackets open at L100, span 17 to 30)
- `the_vault:u_base_crit_hit` → **critical_hit_mitigation**: **0.16 to 0.3** (L40+ bracket)
- `the_vault:base_ap` → **ability_power**: **45 to 50** (L96+ bracket; 1 of 6 brackets open at L100, span 21 to 50)

**PREFIX**
- `the_vault:u_mod_armor` → **armor** [tags: focusArmor]: L90+: 8 to 10
- `the_vault:mod_health` → **health** [tags: focusHealth]: **12 to 12** (L88+ bracket; 1 of 5 brackets open at L100, span 4 to 12)
  - jump-only tiers: L101: 13 to 15 (imbuement) · L102: 16 to 18 (needs +2 jump — unreachable on uniques)
- `the_vault:mod_added_ability_level_groupheal` → **added_ability_level** [tags: focusAbilityPower, focusAbilityPowerFireball]: **{"abilityKey": "Heal_Group", "levelChange": 2}** (L65+ bracket; 1 of 6 brackets open at L100)
  - jump-only tiers: L101: {"abilityKey": "Heal_Group", "levelChange": 7} (imbuement)

**SUFFIX**
- `the_vault:heal_cooldown` → **ability_cooldown_percent**: L0+: -0.75 to -0.25 {"abilityKey": "Heal_Group"}
- `the_vault:u_phoenix` → **phoenix**: L0+: 1 to 1

## The Castle (`the_vault:castle`)

**Item:** chestplate · **Source:** pack config · **Model:** `the_vault:gear/armor/castle/chestplate`, `the_vault:gear/armor/castle_ruin/chestplate`, `the_vault:gear/armor/castle_tower/chestplate` · **Pools:** `the_vault:default_or` (w1), `the_vault:castle` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> Stand your ground and become the fortress. The Castle builds Bastion while you remain still, reducing final damage taken and knocking back direct attackers.
>
> Drops in: Raid Vaults

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_armor` → **armor**: **28 to 30** (L97+ bracket; 1 of 4 brackets open at L100, span 17 to 30)
- `the_vault:u_critical_hit_mitigation` → **critical_hit_mitigation**: **0.21 to 0.5** (L40+ bracket)

**PREFIX**
- `the_vault:u_mod_armor` → **armor** [tags: focusArmor]: L90+: 8 to 10
- `the_vault:mod_resistance` → **resistance** [tags: focusResistance]: **0.13 to 0.16** (L82+ bracket; 1 of 3 brackets open at L100, span 0.07 to 0.16)
  - jump-only tiers: L101: 0.17 to 0.18 (imbuement) · L102: 0.19 to 0.2 (needs +2 jump — unreachable on uniques)
- `the_vault:mod_resistance` → **resistance** [tags: focusResistance]: **0.13 to 0.16** (L82+ bracket; 1 of 3 brackets open at L100, span 0.07 to 0.16)
  - jump-only tiers: L101: 0.17 to 0.18 (imbuement) · L102: 0.19 to 0.2 (needs +2 jump — unreachable on uniques)

**SUFFIX**
- `the_vault:u_castle_knockback_resistance` → **knockback_resistance** [tags: focusKnockbackRes, noLegendary, noImbuement]: L0+: 1 to 1
- `the_vault:u_castle_bastion` → **castle_bastion** [tags: noLegendary, noImbuement]: L0+: 0.06 to 0.1

## Crystal Plate (`the_vault:crystalplate`)

**Item:** chestplate · **Source:** pack config · **Model:** `the_vault:gear/armor/crystalplate/chestplate`, `the_vault:gear/armor/crystalplate_green/chestplate`, `the_vault:gear/armor/crystalplate_pink/chestplate` · **Pools:** `the_vault:default_or` (w1), `the_vault:crystalplate` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> Forged from the ashes of the great Wizards, the Crystal Plate empowers all your abilities.
>
> Drops in: The Laboratory

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:u_all_skills` → **added_ability_level**: **{"levelChange": 2, "abilityKey": "all_abilities"}** (L25+ bracket; 1 of 2 brackets open at L100)
- `the_vault:base_ap` → **ability_power**: **45 to 50** (L96+ bracket; 1 of 6 brackets open at L100, span 21 to 50)

**PREFIX**
- `the_vault:mod_ap` → **ability_power**: **45 to 50** (L96+ bracket; 1 of 6 brackets open at L100, span 21 to 50)

**SUFFIX**
- `the_vault:mod_mana_regen` → **mana_regen** [tags: focusManaRegen]: **0.81 to 1** (L92+ bracket; 1 of 5 brackets open at L100, span 0.41 to 1)
  - jump-only tiers: L101: 1.01 to 1.3 (imbuement) · L102: 1.31 to 2 (needs +2 jump — unreachable on uniques)
- `the_vault:mod_area_of_effect` → **area_of_effect** [tags: focusEffectRadius]: **0.17 to 0.2** (L89+ bracket; 1 of 3 brackets open at L100, span 0.08 to 0.2)
  - jump-only tiers: L101: 0.21 to 0.26 (imbuement) · L102: 0.27 to 0.32 (needs +2 jump — unreachable on uniques)

## Frozen Throne (`the_vault:frozen_throne`)

**Item:** chestplate · **Source:** pack config · **Model:** `the_vault:gear/armor/frozen_throne/chestplate`, `the_vault:gear/armor/frozen_throne_black_ice/chestplate`, `the_vault:gear/armor/frozen_throne_snowflake/chestplate` · **Pools:** `the_vault:frozen_throne` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> Empower your inner Ice with this magical piece of armour.
>
> Drops in: Villages

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_armor` → **armor**: **28 to 30** (L97+ bracket; 1 of 4 brackets open at L100, span 17 to 30)
- `the_vault:u_base_crit_hit` → **critical_hit_mitigation**: **0.16 to 0.3** (L40+ bracket)

**PREFIX**
- `the_vault:unique_added_ability_level_frostnova` → **added_ability_level** [tags: focusAbilityPower, focusAbilityPowerNova]: **{"abilityKey": "Nova_Slow", "levelChange": 2}** (L25+ bracket)
  - jump-only tiers: L101: {"abilityKey": "Nova_Slow", "levelChange": 2} (imbuement)

**SUFFIX**
- `the_vault:u_frost_nova_on_damage` → **ability_on_damage** [tags: noLegendary]: L0+: {"abilityId": "Nova_Slow", "chance": {"min": 0.05, "max": 0.2, "step": 0.01}, "level": {"min": 2, "max": 7, "step": 1}}

## The Sweetheart (`the_vault:sweetheart`)

**Item:** chestplate · **Source:** pack config · **Model:** `the_vault:gear/armor/sweetheart/chestplate` · **Pools:** `the_vault:default_or` (w1), `the_vault:crafted` (w1)

> *(no codex page)*

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_health` → **health** [tags: focusHealth]: **12 to 12** (L88+ bracket; 1 of 5 brackets open at L100, span 4 to 12)
  - jump-only tiers: L101: 13 to 15 (imbuement) · L102: 16 to 18 (needs +2 jump — unreachable on uniques)

**PREFIX**
- `the_vault:mod_health` → **health** [tags: focusHealth]: **12 to 12** (L88+ bracket; 1 of 5 brackets open at L100, span 4 to 12)
  - jump-only tiers: L101: 13 to 15 (imbuement) · L102: 16 to 18 (needs +2 jump — unreachable on uniques)
- `the_vault:mod_health` → **health** [tags: focusHealth]: **12 to 12** (L88+ bracket; 1 of 5 brackets open at L100, span 4 to 12)
  - jump-only tiers: L101: 13 to 15 (imbuement) · L102: 16 to 18 (needs +2 jump — unreachable on uniques)

## Vitalis Plate (`the_vault:vitalis`)

**Item:** chestplate · **Source:** pack config · **Model:** `the_vault:gear/armor/vitalis/chestplate` · **Pools:** `the_vault:vitalis` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> A life-infused chestplate that can sometimes heal its wearer when blocking incoming attacks.
>
> Drops from: Goblins

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_block_chance` — ⚠ NOT FOUND in merged unique tier config (will not roll)
- `the_vault:base_armor` → **armor**: **28 to 30** (L97+ bracket; 1 of 4 brackets open at L100, span 17 to 30)

**PREFIX**
- `the_vault:mod_health` → **health** [tags: focusHealth]: **12 to 12** (L88+ bracket; 1 of 5 brackets open at L100, span 4 to 12)
  - jump-only tiers: L101: 13 to 15 (imbuement) · L102: 16 to 18 (needs +2 jump — unreachable on uniques)
- `the_vault:u_mod_armor` → **armor** [tags: focusArmor]: L90+: 8 to 10
- `the_vault:mod_resistance` → **resistance** [tags: focusResistance]: **0.13 to 0.16** (L82+ bracket; 1 of 3 brackets open at L100, span 0.07 to 0.16)
  - jump-only tiers: L101: 0.17 to 0.18 (imbuement) · L102: 0.19 to 0.2 (needs +2 jump — unreachable on uniques)

**SUFFIX**
- `the_vault:mod_mana_regen` → **mana_regen** [tags: focusManaRegen]: **0.81 to 1** (L92+ bracket; 1 of 5 brackets open at L100, span 0.41 to 1)
  - jump-only tiers: L101: 1.01 to 1.3 (imbuement) · L102: 1.31 to 2 (needs +2 jump — unreachable on uniques)
- `the_vault:mod_added_ability_level_heal` → **added_ability_level** [tags: focusAbilityPower, focusAbilityPowerHeal]: **{"abilityKey": "Heal_Base", "levelChange": 2}** (L0+ bracket; 1 of 3 brackets open at L100)
- `the_vault:u_block_heal` → **block_heal** [tags: noLegendary, noImbuement]: L0+: {"chance": {"min": 0.2, "max": 0.5, "step": 0.05}, "amount": {"min": 2.0, "max": 2.0, "step": 0.0}}

---

# Leggings

## Crashguards (`the_vault:crashguards`)

**Item:** leggings · **Source:** pack config · **Model:** `the_vault:gear/armor/crashguards/leggings`, `the_vault:gear/armor/crashguards_safety/leggings`, `the_vault:gear/armor/crashguards_chute/leggings` · **Pools:** `the_vault:crashguards` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> If you like flight, these leggings gives you immunity to crashing.
>
> Drops in: The Laboratory

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_armor` → **armor**: **28 to 30** (L97+ bracket; 1 of 4 brackets open at L100, span 17 to 30)
- `the_vault:base_mana_additive` → **mana_additive**: **51 to 60** (L95+ bracket; 1 of 2 brackets open at L100, span 41 to 60)

**PREFIX**
- `the_vault:u_mod_armor` → **armor** [tags: focusArmor]: L90+: 8 to 10
- `the_vault:mod_resistance` → **resistance** [tags: focusResistance]: **0.13 to 0.16** (L82+ bracket; 1 of 3 brackets open at L100, span 0.07 to 0.16)
  - jump-only tiers: L101: 0.17 to 0.18 (imbuement) · L102: 0.19 to 0.2 (needs +2 jump — unreachable on uniques)
- `the_vault:u_knockback_resistance` → **knockback_resistance** [tags: focusKnockbackRes]: L90+: 0.5 to 1

**SUFFIX**
- `the_vault:mod_kinetic_immunity` → **kinetic_immunity**: L0+: {"flag": true}
- `the_vault:u_item_rarity` → **item_rarity** [tags: focusItemRarity]: L90+: 0.2 to 0.3

## Swarmwalkers (`the_vault:swarmwalkers`)

**Item:** leggings · **Source:** pack config · **Model:** `the_vault:gear/armor/bee_knight/leggings`, `the_vault:gear/armor/swarmwalkers_comb/leggings`, `the_vault:gear/armor/swarmwalker_fly/leggings` · **Pools:** `the_vault:swarmwalkers` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> Run like the wind with these magically infused pair of leggings!
>
> Drops in: Raid Vaults

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_armor` → **armor**: **28 to 30** (L97+ bracket; 1 of 4 brackets open at L100, span 17 to 30)

**PREFIX**
- `the_vault:u_movement` → **movement_speed**: **0.21 to 0.3** (L80+ bracket; 1 of 3 brackets open at L100, span 0.05 to 0.3)
- `the_vault:u_knockback_resistance` → **knockback_resistance** [tags: focusKnockbackRes]: L90+: 0.5 to 1

**SUFFIX**
- `the_vault:u_effect_avoidance` → **effect_list_avoidance** [tags: focusEffAvoidance]: **{"effectKeys": ["minecraft:poison", "minecraft:wither", "minecraft:levitation", "minecraft:slowness", "minecraft:blindness", "minecraft:hunger", "the_vault:bleed"], "name": "the_vault.gear_attribute.effect_avoidance.avoidance.bad_effects", "minChance": 0.71, "maxChance": 1.0, "step": 0.01}** (L80+ bracket; 1 of 3 brackets open at L100)
- `the_vault:mod_mana_regen` → **mana_regen** [tags: focusManaRegen]: **0.81 to 1** (L92+ bracket; 1 of 5 brackets open at L100, span 0.41 to 1)
  - jump-only tiers: L101: 1.01 to 1.3 (imbuement) · L102: 1.31 to 2 (needs +2 jump — unreachable on uniques)

---

# Boots

## Frostguards (`the_vault:frostguards`)

**Item:** boots · **Source:** pack config · **Model:** `the_vault:gear/armor/frost_guard/boots`, `the_vault:gear/armor/frost_guard_snowy/boots`, `the_vault:gear/armor/frost_guard_black_ice/boots` · **Pools:** `the_vault:frostguards` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> Frostguards offers a unique feature by leaving a trail of chill wherever you walk.
>
> Drops in: The Factory

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_armor` → **armor**: **28 to 30** (L97+ bracket; 1 of 4 brackets open at L100, span 17 to 30)
- `the_vault:base_movement` — ⚠ NOT FOUND in merged unique tier config (will not roll)

**PREFIX**
- `the_vault:u_coldsnap` → **added_ability_level** [tags: focusAbilityPower, focusAbilityPowerStonefall]: **{"abilityKey": "Stonefall_Cold", "levelChange": 1}** (L0+ bracket; 1 of 4 brackets open at L100)
- `the_vault:u_mod_armor` → **armor** [tags: focusArmor]: L90+: 8 to 10

**SUFFIX**
- `the_vault:u_chilled_effect_trail` → **effect_trail**: L0+: {"effectId": "the_vault:chilled", "durationTicks": {"min": 60, "max": 160, "step": 20}}

## Pacifist Sandals (`the_vault:pacifist_sandals`)

**Item:** boots · **Source:** pack config · **Model:** `the_vault:gear/armor/pacifistsandals/boots`, `the_vault:gear/armor/pacifistsandals_winged/boots`, `the_vault:gear/armor/pacifistsandals_hippie/boots` · **Pools:** `the_vault:pacifist_sandals` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> Not much of a fighter? Pacifist Sandals will provide you with great utility.
>
> Drops in: The Laboratory

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:u_pacifist_movement` → **movement_speed**: **0.31 to 0.35** (L90+ bracket; 1 of 3 brackets open at L100, span 0.11 to 0.35)

**PREFIX**
- `the_vault:u_knockback_resistance` → **knockback_resistance** [tags: focusKnockbackRes]: L90+: 0.5 to 1

**SUFFIX**
- `the_vault:u_entropic_bind` → **added_ability_level**: **{"abilityKey": "Empower_Slowness_Aura", "levelChange": 1}** (L25+ bracket; 1 of 3 brackets open at L100)

## Plague Steppers (`woldsvaults:plague_steppers`)

**Item:** boots · **Source:** addon jar · **Model:** `the_vault:gear/armor/plague/boots` · **Pools:** `the_vault:crafted` (w1), `the_vault:collection` (w1), `woldsvaults:plague_steppers` (w1)

> Spread your stink around with these sick digs for your feet!
>
> Drops in: Black Market

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_armor` → **armor**: **28 to 30** (L97+ bracket; 1 of 4 brackets open at L100, span 17 to 30)
- `the_vault:base_movement` — ⚠ NOT FOUND in merged unique tier config (will not roll)

**PREFIX**
- `the_vault:u_mod_armor` → **armor** [tags: focusArmor]: L90+: 8 to 10
- `the_vault:mod_poison_nova_level` → **added_ability_level**: **{"abilityKey": "Nova_Dot", "levelChange": 4}** (L75+ bracket; 1 of 4 brackets open at L100) (jar tiers)

**SUFFIX**
- `the_vault:mod_poison_trail` → **effect_trail**: **{"durationTicks": {"step": 20, "min": 240, "max": 300}, "effectId": "minecraft:poison"}** (L90+ bracket; 1 of 2 brackets open at L100) (jar tiers)

---

# Shields

## Gladiator's Buckler (`the_vault:gladiator_buckler`)

**Item:** shield · **Source:** pack config · **Model:** `the_vault:gear/shield/gladiator_buckler`, `the_vault:gear/shield/gladiator_buckler_snake`, `the_vault:gear/shield/gladiator_buckler_raven` · **Pools:** `the_vault:gladiator_buckler` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> Become faster and more enraged by wielding this fighter forged buckler.
>
> Drops in: Villages

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:u_base_block` → **block**: **0.26 to 0.4** (L85+ bracket; 1 of 3 brackets open at L100, span 0.16 to 0.4)

**PREFIX**
- `the_vault:mod_attack_speed_percent` → **attack_speed_percent** [tags: focusAttackSpeedPercent, noLegendary]: **0.21 to 0.25** (L96+ bracket; 1 of 4 brackets open at L100, span 0.05 to 0.25)

**SUFFIX**
- `the_vault:u_third_attack` → **third_attack** [tags: noLegendary]: L0+: 0.4 to 1.2

## Grim Shield (`the_vault:grim`)

**Item:** shield · **Source:** pack config · **Model:** `the_vault:gear/shield/grim`, `the_vault:gear/shield/grimshield_overgrown`, `the_vault:gear/shield/grimshield_demon` · **Pools:** `the_vault:default_or` (w1), `the_vault:testers` (w1), `the_vault:grim_shield` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> Scare the mobs away with this fearful shield of doom.
>
> Drops in: Raid Vaults

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**PREFIX**
- `the_vault:mod_fear` → **added_ability_level**: **{"abilityKey": "Taunt_Repel", "levelChange": 8}** (L65+ bracket; 1 of 3 brackets open at L100)

**SUFFIX**
- `the_vault:fear_effect_increase` → **ability_area_of_effect_percent**: **0.61 to 1 {"abilityKey": "Taunt_Repel"}** (L80+ bracket; 1 of 3 brackets open at L100, span 0.2 to 1)

## Rosethorn Ivy (`the_vault:ivy`)

**Item:** shield · **Source:** pack config · **Model:** `the_vault:gear/shield/glass_flower`, `the_vault:gear/shield/rose_thorn_ivy_wither`, `the_vault:gear/shield/rose_thorn_ivy_fall`, `the_vault:gear/shield/rose_thorn_ivy_poison` · **Pools:** `the_vault:ivy` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> If thorns is your preferred way of killing, no shield does it better than Rosethorn Ivy.
>
> Drops in: X-Mark Room

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:base_thorns_damage_flat` → **thorns_damage_flat**: **41 to 50** (L90+ bracket; 1 of 3 brackets open at L100, span 23 to 50)

**PREFIX**
- `the_vault:u_thorns_damage` → **thorns_damage_flat** [tags: focusThornsDamage]: **41 to 50** (L90+ bracket; 1 of 2 brackets open at L100, span 21 to 50)
- `the_vault:u_lucky_thorns` → **lucky_thorns** [tags: noLegendary]: L0+: {"flag": true}

**SUFFIX**
- `the_vault:mod_damage_increase` → **damage_increase** [tags: focusDamage]: **0.29 to 0.35** (L90+ bracket; 1 of 3 brackets open at L100, span 0.15 to 0.35)
  - jump-only tiers: L101: 0.36 to 0.5 (imbuement) · L102: 0.51 to 0.75 (needs +2 jump — unreachable on uniques)
- `the_vault:u_lucky_hit_chance` → **lucky_hit_chance** [tags: focusLuckyHitChance]: **0.06 to 0.1** (L50+ bracket; 1 of 2 brackets open at L100, span 0.02 to 0.1)

## Pestilence Wall (`the_vault:pestilence_wall`)

**Item:** shield · **Source:** pack config · **Model:** `the_vault:gear/shield/slab`, `the_vault:gear/shield/pestilence_nautilus`, `the_vault:gear/shield/pestilence_spider` · **Pools:** `the_vault:pestilence_wall` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> This uniquely composed shield turns your Entropic Bind poisonous.
>
> Drops in: The Laboratory

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:u_base_block` → **block**: **0.26 to 0.4** (L85+ bracket; 1 of 3 brackets open at L100, span 0.16 to 0.4)

**PREFIX**
- `the_vault:u_knockback_resistance` → **knockback_resistance** [tags: focusKnockbackRes]: L90+: 0.5 to 1

**SUFFIX**
- `the_vault:unique_entropic_poison` → **ability_special_modification**: **7 to 12 {"specialModificationKey": "the_vault:entropic_bind_poison", "abilityKey": "Empower_Slowness_Aura", "textColor": 14076214, "highlightColor": 6082075}** (L50+ bracket; 1 of 2 brackets open at L100, span 1 to 12)

## Frostwarden (`the_vault:frostwarden`)

**Item:** shield · **Source:** pack config · **Model:** `the_vault:gear/shield/frostwarden`, `the_vault:gear/shield/frostwarden_black_ice`, `the_vault:gear/shield/frostwarden_snowy` · **Pools:** `the_vault:frostwarden` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> A chilling shield that occasionally freezes attackers when blocking their strikes.
>
> Drops in: Memory Room

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:u_base_block` → **block**: **0.26 to 0.4** (L85+ bracket; 1 of 3 brackets open at L100, span 0.16 to 0.4)

**PREFIX**
- `the_vault:unique_ice_bolt_level` — ⚠ NOT FOUND in merged unique tier config (will not roll)

**SUFFIX**
- `the_vault:u_block_glacial_prison` → **block_glacial_prison** [tags: noLegendary, noImbuement]: L0+: 0.2 to 0.5

## The Broodmother (`the_vault:broodmother`)

**Item:** shield · **Source:** pack config · **Model:** `the_vault:gear/shield/spider`, `the_vault:gear/shield/poison_spider` · **Pools:** `the_vault:broodmother` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> A shield that can create webs to trap enemies and slow them down.
>
> Drops in: Memory Room

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:u_base_block` → **block**: **0.26 to 0.4** (L85+ bracket; 1 of 3 brackets open at L100, span 0.16 to 0.4)

**PREFIX**
- `the_vault:mod_damage_increase` → **damage_increase** [tags: focusDamage]: **0.29 to 0.35** (L90+ bracket; 1 of 3 brackets open at L100, span 0.15 to 0.35)
  - jump-only tiers: L101: 0.36 to 0.5 (imbuement) · L102: 0.51 to 0.75 (needs +2 jump — unreachable on uniques)
- `the_vault:mod_resistance` → **resistance** [tags: focusResistance]: **0.13 to 0.16** (L82+ bracket; 1 of 3 brackets open at L100, span 0.07 to 0.16)
  - jump-only tiers: L101: 0.17 to 0.18 (imbuement) · L102: 0.19 to 0.2 (needs +2 jump — unreachable on uniques)

**SUFFIX**
- `the_vault:u_broodmother_web` → **broodmother_web** [tags: noLegendary, noImbuement]: **{"chance": {"min": 0.2, "max": 0.7, "step": 0.05}, "percentAttackDamage": {"min": 0.6, "max": 1.2, "step": 0.05}}** (L65+ bracket; 1 of 2 brackets open at L100)

---

# Foci

## Ender Rings (`the_vault:ender_rings`)

**Item:** focus · **Source:** pack config · **Model:** `the_vault:gear/focus/ender_rings`, `the_vault:gear/focus/ender_rings_arrow`, `the_vault:gear/focus/ender_rings_endstone` · **Pools:** `the_vault:ender_rings` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> These rings allow the bearer to bend space.
>
> Drops in: Memory Room

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**PREFIX**
- `the_vault:mod_added_ability_level_dashwarp` → **added_ability_level** [tags: focusAbilityPower, focusAbilityPowerDashWarp]: **{"abilityKey": "Dash_Warp", "levelChange": 1}** (L0+ bracket; 1 of 2 brackets open at L100)
  - jump-only tiers: L101: {"abilityKey": "Dash_Warp", "levelChange": 3} (imbuement)
- `the_vault:mod_warp_projectile_speed` → **warp_projectile_speed** [tags: noImbuement]: **0.1 to 0.25** (L0+ bracket; 1 of 2 brackets open at L100, span 0.1 to 0.5)

**SUFFIX**
- `the_vault:warp_cooldown` → **ability_cooldown_percent** [tags: noImbuement]: **-0.26 to -0.5 {"abilityKey": "Dash_Warp"}** (L50+ bracket)
- `the_vault:mod_mana_regen` → **mana_regen** [tags: focusManaRegen]: **0.81 to 1** (L92+ bracket; 1 of 5 brackets open at L100, span 0.41 to 1)
  - jump-only tiers: L101: 1.01 to 1.3 (imbuement) · L102: 1.31 to 2 (needs +2 jump — unreachable on uniques)

## Frozen Orb (`the_vault:frozen_orb`)

**Item:** focus · **Source:** pack config · **Model:** `the_vault:gear/focus/frozenorb`, `the_vault:gear/focus/frozenorb_black_ice`, `the_vault:gear/focus/frozenorb_snowy` · **Pools:** `the_vault:frozen_orb` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> If you love playing with Ice nothing does it better than a Frozen Orb.
>
> Drops in: Raid Vaults

**BASE_ATTRIBUTE**
- `the_vault:offhand_base_durability` → **durability** [tags: resilientFocusTarget]: **9202 to 10501** (L88+ bracket; 1 of 4 brackets open at L100, span 4331 to 10501)

**IMPLICIT**
- `the_vault:base_offhand_mana_additive` → **mana_additive**: **91 to 100** (L96+ bracket; 1 of 5 brackets open at L100, span 10 to 100)

**PREFIX**
- `the_vault:unique_added_ability_level_frostnova` → **added_ability_level** [tags: focusAbilityPower, focusAbilityPowerNova]: **{"abilityKey": "Nova_Slow", "levelChange": 2}** (L25+ bracket)
  - jump-only tiers: L101: {"abilityKey": "Nova_Slow", "levelChange": 2} (imbuement)
- `the_vault:unique_frost_nova_vulnerability` → **ability_special_modification**: **5 to 6 {"specialModificationKey": "the_vault:frost_nova_vulnerability", "abilityKey": "Nova_Slow", "textColor": 14076214, "highlightColor": 6082075}** (L80+ bracket; 1 of 3 brackets open at L100, span 1 to 6)

**SUFFIX**
- `the_vault:unique_lucky_hit_chance` → **lucky_hit_chance** [tags: focusLuckyHitChance]: L90+: 0.09 to 0.12

## Echoflare (`the_vault:echoflare`)

**Item:** focus · **Source:** pack config · **Model:** `the_vault:gear/focus/echoflare` · **Pools:** `the_vault:echoflare` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> A spellbound tome that echoes past magic, sometimes erasing the cooldown of the last ability cast.
>
> Drops from: Goblins

**BASE_ATTRIBUTE**
- `the_vault:offhand_base_durability` → **durability** [tags: resilientFocusTarget]: **9202 to 10501** (L88+ bracket; 1 of 4 brackets open at L100, span 4331 to 10501)

**IMPLICIT**
- `the_vault:base_offhand_mana_additive` → **mana_additive**: **91 to 100** (L96+ bracket; 1 of 5 brackets open at L100, span 10 to 100)

**PREFIX**
- `the_vault:unique_dash_level` — ⚠ NOT FOUND in merged unique tier config (will not roll)

**SUFFIX**
- `the_vault:mod_mana_regen` → **mana_regen** [tags: focusManaRegen]: **0.81 to 1** (L92+ bracket; 1 of 5 brackets open at L100, span 0.41 to 1)
  - jump-only tiers: L101: 1.01 to 1.3 (imbuement) · L102: 1.31 to 2 (needs +2 jump — unreachable on uniques)
- `the_vault:mod_ability_cooldown_skip` → **ability_cooldown_skip** [tags: nolegendary, noImbuement]: L0+: 0.05 to 0.2

## Chroma Brew (`woldsvaults:chroma_brew`)

**Item:** focus · **Source:** addon jar · **Model:** `woldsvaults:gear/focus/chroma_brew` · **Pools:** `the_vault:crafted` (w1), `the_vault:collection` (w1), `woldsvaults:chroma_brew` (w1)

> A nasty brew of chemicals to boost you and inflict upon your foes!
>
> Drops in: Laboratory

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:mod_max_mana` — ⚠ NOT FOUND in merged unique tier config (will not roll)

**PREFIX**
- `the_vault:mod_healing_cloud_brew` → **effect_cloud**: **{"tooltipDisplayName": "Healing V", "potion": "minecraft:empty", "additionalEffects": [{"effect": "minecraft:instant_health", "duration": 20, "amplifier": 2}], "duration": 240, "radius": 4.0, "color": 16262179, "affectsOwner": true, "triggerChance": 0.05}** (L75+ bracket; 1 of 5 brackets open at L100) (jar tiers)
- `the_vault:mod_wither_cloud_brew` → **effect_cloud**: **{"tooltipDisplayName": "Wither V", "potion": "minecraft:empty", "additionalEffects": [{"effect": "minecraft:wither", "duration": 200, "amplifier": 4}], "duration": 300, "radius": 4.0, "color": 3484199, "affectsOwner": false, "triggerChance": 0.05}** (L75+ bracket; 1 of 5 brackets open at L100) (jar tiers)
- `the_vault:mod_bleed_cloud_brew` → **effect_cloud**: **{"tooltipDisplayName": "Bleed V", "potion": "minecraft:empty", "additionalEffects": [{"effect": "the_vault:bleed", "duration": 200, "amplifier": 4}], "duration": 300, "radius": 4.0, "color": 16711680, "affectsOwner": false, "triggerChance": 0.05}** (L75+ bracket; 1 of 5 brackets open at L100) (jar tiers)
- `the_vault:mod_poison_cloud_brew` → **effect_cloud**: **{"tooltipDisplayName": "Poison V", "potion": "minecraft:empty", "additionalEffects": [{"effect": "minecraft:poison", "duration": 200, "amplifier": 4}], "duration": 300, "radius": 4.0, "color": 5149489, "affectsOwner": false, "triggerChance": 0.05}** (L75+ bracket; 1 of 5 brackets open at L100) (jar tiers)

**SUFFIX**
- `the_vault:mod_slowness_cloud_brew` → **effect_cloud**: **{"tooltipDisplayName": "Slowness V", "potion": "minecraft:empty", "additionalEffects": [{"effect": "minecraft:slowness", "duration": 200, "amplifier": 4}], "duration": 300, "radius": 4.0, "color": 5926017, "affectsOwner": false, "triggerChance": 0.05}** (L75+ bracket; 1 of 5 brackets open at L100) (jar tiers)
- `the_vault:mod_weakness_cloud_brew` → **effect_cloud**: **{"tooltipDisplayName": "Weakness V", "potion": "minecraft:empty", "additionalEffects": [{"effect": "minecraft:weakness", "duration": 300, "amplifier": 0}], "duration": 300, "radius": 4.0, "color": 4738376, "affectsOwner": false, "triggerChance": 0.05}** (L75+ bracket; 1 of 5 brackets open at L100) (jar tiers)
- `the_vault:mod_effect_cloud_chance` → **effect_cloud_chance_additive**: **0.09 to 0.12** (L85+ bracket; 1 of 3 brackets open at L100, span 0.03 to 0.12) (jar tiers)
- `the_vault:mod_diffuse_level` → **added_ability_level**: **{"abilityKey": "Expunge_Base", "levelChange": 4}** (L75+ bracket; 1 of 4 brackets open at L100) (jar tiers)

---

# Wands

## The Baguette (`the_vault:baguette`)

**Item:** wand · **Source:** addon jar (overrides pack config) · **Model:** `the_vault:gear/wand/baguette` · **Pools:** `the_vault:baguette` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> Hungry? This freshly baked Baguette will taste good at any time. 
>
> Drops in: The Laboratory

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:u_saturation` → **effect**: L0+: {"effectKey": "minecraft:saturation", "amplifier": 1}
- `the_vault:u_regeneration` → **effect**: L0+: {"effectKey": "minecraft:regeneration", "amplifier": 1}

**SUFFIX**
- `the_vault:u_baguette_healingeff` → **healing_effectiveness** [tags: focusHealingEff, noLegendary]: **0.45 to 0.5** (L98+ bracket; 1 of 3 brackets open at L100, span 0.32 to 0.5)

## Chainlash (`the_vault:chainlash`)

**Item:** wand · **Source:** addon jar (overrides pack config) · **Model:** `the_vault:gear/wand/chaining_wand` · **Pools:** `the_vault:chainlash` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> This weird wand empowers your on-hit attacks by chaining them, increasing your reach greatly. It also decreases the amount of damage loss that chaining usually entails. 
>
> Drops in: The Laboratory

**BASE_ATTRIBUTE**
- `the_vault:offhand_base_durability` → **durability** [tags: resilientFocusTarget]: **9202 to 10501** (L88+ bracket; 1 of 4 brackets open at L100, span 4331 to 10501)

**IMPLICIT**
- `the_vault:u_chaining` → **on_hit_chain** [tags: focusChaining]: **2 to 4** (L75+ bracket)

**PREFIX**
- `the_vault:u_chaining_damage` → **chaining_damage**: **0.91 to 1** (L97+ bracket; 1 of 3 brackets open at L100, span 0.51 to 1)

**SUFFIX**
- `the_vault:unique_area_of_effect` → **area_of_effect** [tags: focusEffectRadius]: **0.17 to 0.2** (L89+ bracket; 1 of 3 brackets open at L100, span 0.08 to 0.2)

## Inferno's Reach (`the_vault:inferno_reach`)

**Item:** wand · **Source:** pack config · **Model:** `the_vault:gear/wand/infernos_reach`, `the_vault:gear/wand/infernos_reach_soul`, `the_vault:gear/wand/infernos_reach_diorite` · **Pools:** `the_vault:inferno_reach` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> Used by the strongest fire wizards, Inferno's Reach empowers your Fireball ability.
>
> Drops in: Raid Vaults

**BASE_ATTRIBUTE**
- `the_vault:offhand_base_durability` → **durability** [tags: resilientFocusTarget]: **9202 to 10501** (L88+ bracket; 1 of 4 brackets open at L100, span 4331 to 10501)

**IMPLICIT**
- `the_vault:base_ap` → **ability_power**: **45 to 50** (L96+ bracket; 1 of 6 brackets open at L100, span 21 to 50)

**PREFIX**
- `the_vault:mod_ability_increase` → **ability_power_percent** [tags: focusAbilityDamage, antiqueAnyAbilityPower]: **0.16 to 0.2** (L87+ bracket; 1 of 3 brackets open at L100, span 0.08 to 0.2)
  - jump-only tiers: L101: 0.21 to 0.5 (imbuement)
- `the_vault:mod_added_ability_level_fireball` → **added_ability_level** [tags: focusAbilityPower, focusAbilityPowerFireball]: **{"abilityKey": "Fireball_Base", "levelChange": 2}** (L65+ bracket; 1 of 3 brackets open at L100)
  - jump-only tiers: L101: {"abilityKey": "Fireball_Base", "levelChange": 4} (imbuement)

**SUFFIX**
- `the_vault:fireball_aoe_increase` → **ability_area_of_effect_percent**: **0.25 to 0.5 {"abilityKey": "Fireball_Base"}** (L65+ bracket; 1 of 2 brackets open at L100, span 0.1 to 0.5)
- `the_vault:mod_cooldown_reduction` → **cooldown_reduction** [tags: focusCooldown]: **0.26 to 0.28** (L90+ bracket; 1 of 6 brackets open at L100, span 0.05 to 0.28)
- `the_vault:unique_area_of_effect` → **area_of_effect** [tags: focusEffectRadius]: **0.17 to 0.2** (L89+ bracket; 1 of 3 brackets open at L100, span 0.08 to 0.2)

---

# Plushies

## Pocket Penguin (`woldsvaults:pocket_penguin`)

**Item:** plushie · **Source:** addon jar · **Model:** `woldsvaults:gear/plushie/pocket_penguin` · **Pools:** `the_vault:crafted` (w1), `the_vault:collection` (w1), `woldsvaults:pocket_penguin` (w1)

> What an aggressive little penguin!
>
> Drops in: Laboratory

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:mod_max_mana` — ⚠ NOT FOUND in merged unique tier config (will not roll)

**PREFIX**
- `the_vault:mod_javelin_base_level` → **added_ability_level**: **{"abilityKey": "Javelin_Base", "levelChange": 1}** (L0+ bracket; 1 of 2 brackets open at L100) (jar tiers)
- `the_vault:mod_implode_level` → **added_ability_level**: **{"abilityKey": "Implode", "levelChange": 1}** (L0+ bracket; 1 of 2 brackets open at L100) (jar tiers)
- `the_vault:mod_imploding_javelin` → **javelin_implode**: L0+: {"flag": true} (jar tiers)

**SUFFIX**
- `the_vault:javelin_mana_cost` → **ability_mana_cost_percent**: L0+: 1.5 to 3 {"abilityKey": "Javelin_Base"} (jar tiers)
- `the_vault:javelin_cooldown_increase` → **ability_cooldown_percent**: L0+: 12 to 16 {"abilityKey": "Javelin_Base"} (jar tiers)
- `the_vault:mod_mana_regen` → **mana_regen** [tags: focusManaRegen]: **0.81 to 1** (L92+ bracket; 1 of 5 brackets open at L100, span 0.41 to 1)
  - jump-only tiers: L101: 1.01 to 1.3 (imbuement) · L102: 1.31 to 2 (needs +2 jump — unreachable on uniques)

## The Wicked Witch (`woldsvaults:wicked_witch`)

**Item:** plushie · **Source:** addon jar · **Model:** `the_vault:gear/plushie/witch` · **Pools:** `the_vault:crafted` (w1), `the_vault:collection` (w1), `woldsvaults:wicked_witch` (w1)

> This funky Plushie gives you much greater Effect Duration and Effect Avoidance with the downside of lowering your Cooldown Reduction
>
> Drops in: Laboratory

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**PREFIX**
- `the_vault:u_witch_effect_duration` → **effect_duration** [tags: focusDuration]: **1 to 1** (L70+ bracket)
- `the_vault:u_witch_cooldown_reduction` → **cooldown_reduction** [tags: focusCooldown]: **-0.6 to -0.4** (L70+ bracket)

**SUFFIX**
- `the_vault:u_witch_effect_avoidance` → **effect_list_avoidance** [tags: focusEffAvoidance]: **{"effectKeys": ["minecraft:poison", "minecraft:wither", "minecraft:levitation", "minecraft:slowness", "minecraft:blindness", "minecraft:hunger", "the_vault:bleed", "the_vault:chilled", "the_vault:corruption"], "name": "the_vault.gear_attribute.effect_avoidance.avoidance.bad_effects", "minChance": 0.5, "maxChance": 1.0, "step": 0.05}** (L51+ bracket)

## Safer Spaces (`woldsvaults:safer_spaces`)

**Item:** plushie · **Source:** addon jar · **Model:** `the_vault:gear/plushie/safer_spaces` · **Pools:** `the_vault:crafted` (w1), `the_vault:collection` (w1), `woldsvaults:safer_spaces` (w1)

> ???
>
> Drops in: Black Market

**BASE_ATTRIBUTE**
- `the_vault:base_durability` → **durability** [tags: resilientFocusTarget]: **12339 to 14538** (L90+ bracket; 1 of 3 brackets open at L100, span 8842 to 14538)

**IMPLICIT**
- `the_vault:saferspaceeffect` → **unique_effect** [tags: noLegendary]: **{"effectKey": "woldsvaults:safer_space", "amplifier": 3}** (L91+ bracket; 1 of 2 brackets open at L100)
- `the_vault:u_safer_block` → **block** [tags: noLegendary]: **0.23 to 0.25** (L85+ bracket; 1 of 3 brackets open at L100, span 0.15 to 0.25)
- `the_vault:u_safer_block` → **block** [tags: noLegendary]: **0.23 to 0.25** (L85+ bracket; 1 of 3 brackets open at L100, span 0.15 to 0.25)

---

# Jewels

## Kaleidoscope (`the_vault:kaleidoscope`)

**Item:** jewel · **Source:** pack config · **Model:** `the_vault:gear/jewel/kaleidoscope` · **Pools:** `the_vault:default` (w1), `the_vault:kaleidoscope` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> This unique jewel has prismatic properties, giving your tool multiple functions all in one.
>
> Drops in: The Laboratory

**IMPLICIT**
- `the_vault:u_jewel_size` → **jewel_size** [tags: focusHealth]: L0+: 10 to 10

**PREFIX**
- `the_vault:u_wooden_affinity` → **wooden_affinity** [tags: noLegendary]: L0+: {"flag": true}
- `the_vault:u_coin_affinity` → **coin_affinity** [tags: noLegendary]: L0+: {"flag": true}
- `the_vault:u_gilded_affinity` → **gilded_affinity** [tags: noLegendary]: L0+: {"flag": true}
- `the_vault:u_ornate_affinity` → **ornate_affinity** [tags: noLegendary]: L0+: {"flag": true}
- `the_vault:u_living_affinity` → **living_affinity** [tags: noLegendary]: L0+: {"flag": true}

## Manabloom (`the_vault:manabloom`)

**Item:** jewel · **Source:** pack config · **Model:** `the_vault:gear/jewel/manabloom` · **Pools:** `the_vault:manabloom` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> Looting chests become even more rewarding with Manabloom in your tool, as it adds mana generation when looting.
>
> Drops in: X-Mark Room

**IMPLICIT**
- `the_vault:u_jewel_size_manabloom` → **jewel_size** [tags: focusJewel]: L0+: 10 to 20

**PREFIX**
- `the_vault:u_mana_looting` → **mana_per_looted_tile**: L0+: {"tileEntityGroupId": "the_vault:chest", "displayName": "Chests", "manaGenerationChance": {"min": 0.2, "max": 0.6, "step": 0.01}, "manaGenerated": {"min": 1, "max": 3, "step": 1}}

## Pax (`the_vault:pax`)

**Item:** jewel · **Source:** pack config · **Model:** `the_vault:gear/jewel/pax` · **Pools:** `the_vault:pax` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> Make your tool multi-purpose with just this one unique jewel.
>
> Drops in: The Factory

**IMPLICIT**
- `the_vault:u_jewel_size_pax` → **jewel_size** [tags: focusHealth]: L0+: 5 to 15

**PREFIX**
- `the_vault:u_picking` → **picking** [tags: noLegendary]: L0+: {"flag": true}
- `the_vault:u_axing` → **axing** [tags: noLegendary]: L0+: {"flag": true}
- `the_vault:u_shovelling` → **shovelling** [tags: noLegendary]: L0+: {"flag": true}
- `the_vault:u_reaping` → **reaping** [tags: noLegendary]: L0+: {"flag": true}

## Frozen Heart (`the_vault:frozen_heart`)

**Item:** jewel · **Source:** pack config · **Model:** `the_vault:gear/jewel/frost` · **Pools:** `the_vault:frozen_heart` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> A cold-forged jewel that may unleash a slowing frost nova when looting valuable chests.
>
> Drops from: Goblins

**IMPLICIT**
- `the_vault:u_jewel_size` → **jewel_size** [tags: focusHealth]: L0+: 10 to 10

**SUFFIX**
- `the_vault:u_ability_cast_on_loot` → **ability_cast_on_loot** [tags: noImbuement]: L0+: {"abilityId": "Nova_Slow", "tileEntityGroupId": "the_vault:chest", "displayName": "Omega Chest", "chance": {"min": 0.05, "max": 0.2, "step": 0.05}, "level": {"min": 4, "max": 8, "step": 1}}

## Shatterering Jewel (`woldsvaults:shattering_jewel`)

**Item:** jewel · **Source:** addon jar · **Model:** `the_vault:gear/jewel/breaching` · **Pools:** `the_vault:collection` (w1), `woldsvaults:shattering_jewel` (w1)

> A very special jewel that makes all sliceablechests be broken the same way as Wooden chests (break in one go)
>
> Drops in: Gateways

**IMPLICIT**
- `the_vault:u_jewel_size_stella` → **jewel_size** [tags: focusHealth]: L0+: 20 to 35

**PREFIX**
- `the_vault:breaching_jewel` → **woldsvaults:breaching** [tags: noLegendary]: L0+: {"flag": true}

## Eternal Stella (`woldsvaults:eternal_stella`)

**Item:** jewel · **Source:** addon jar · **Model:** `the_vault:gear/jewel/stella` · **Pools:** `the_vault:crafted` (w1), `the_vault:collection` (w1), `woldsvaults:eternal_stella` (w1)

> This lovely jewel gives your Vault Tool 100% Vanilla Immortality, making it no longer take durability in the overworld.
>
> Drops in: Black Market

**IMPLICIT**
- `the_vault:u_jewel_size_stella` → **jewel_size** [tags: focusHealth]: L0+: 20 to 35

**PREFIX**
- `the_vault:u_immortality` → **immortality**: L0+: 1 to 1

## Treasured Jewel (`woldsvaults:treasure_jewel`)

**Item:** jewel · **Source:** addon jar · **Model:** `the_vault:gear/jewel/treasure` · **Pools:** `the_vault:crafted` (w1), `the_vault:collection` (w1), `woldsvaults:treasure_jewel` (w1)

> This jewel gives your tool affinity towards Treasure Chests allowing you to mine them instead of having to open them by hand!
>
> Drops in: Craftable

**IMPLICIT**
- `the_vault:u_jewel_size_treasure` → **jewel_size** [tags: focusHealth]: L0+: 5 to 5

**PREFIX**
- `the_vault:u_treasure_affinity` → **treasure_affinity** [tags: noLegendary]: L0+: {"flag": true}

---

# Magnets

## Quickstone (`the_vault:quickstone`)

**Item:** magnet · **Source:** pack config · **Model:** `the_vault:gear/magnets/quickstone` · **Pools:** `the_vault:quickstone` (w1), `the_vault:crafted` (w1), `the_vault:collection` (w1)

> A strong magnet that provides a sharp boost to mining speed.
>
> Drops in: Memory Room

**BASE_ATTRIBUTE**
- `the_vault:magnet_base_durability` → **durability** [tags: resilientFocusTarget]: **23401 to 30000** (L50+ bracket; 1 of 2 brackets open at L100, span 15000 to 30000)

**IMPLICIT**
- `the_vault:base_range` → **range**: **20.1 to 25** (L99+ bracket; 1 of 3 brackets open at L100, span 15.1 to 25)
- `the_vault:base_velocity` → **velocity**: **0.21 to 0.25** (L85+ bracket; 1 of 2 brackets open at L100, span 0.16 to 0.25)

**PREFIX**
- `the_vault:copiously` → **copiously** [tags: focusCopiously]: **0.21 to 0.25** (L93+ bracket; 1 of 3 brackets open at L100, span 0.11 to 0.25)
  - jump-only tiers: L101: 0.26 to 0.3 (imbuement) · L102: 0.31 to 0.4 (needs +2 jump — unreachable on uniques)

**SUFFIX**
- `the_vault:u_mining_speed_percent` → **mining_speed_percent** [tags: focusMiningSpeedPercent]: L0+: 0.2 to 0.5

## Aural Magnet (`woldsvaults:aural_magnet`)

**Item:** magnet · **Source:** addon jar · **Model:** `woldsvaults:gear/magnet/aural` · **Pools:** `the_vault:crafted` (w1), `the_vault:collection` (w1), `woldsvaults:aural_magnet` (w1)

> The top choice for aura farmers!
>
> Drops in: Survival Gear Reward

**BASE_ATTRIBUTE**
- `the_vault:base_magnet_durability` → **durability** [tags: resilientFocusTarget]: **23401 to 30000** (L50+ bracket; 1 of 2 brackets open at L100, span 15000 to 30000)

**IMPLICIT**
- `the_vault:u_base_magnet_range` → **range**: **20.1 to 25** (L99+ bracket; 1 of 3 brackets open at L100, span 15.1 to 25)
- `the_vault:base_endergized` → **endergized**: L0+: {"flag": true}

**PREFIX**
- `the_vault:mod_prime_amp_level` → **added_talent_level**: **{"talentKey": "Prime_Amplification", "levelChange": 1}** (L0+ bracket; 1 of 2 brackets open at L100) (jar tiers)
- `the_vault:mod_empower_level` → **added_ability_level**: **{"abilityKey": "Empower", "levelChange": 1}** (L0+ bracket; 1 of 2 brackets open at L100) (jar tiers)
- `the_vault:mod_nova_level` → **added_ability_level**: **{"abilityKey": "Nova", "levelChange": 1}** (L0+ bracket; 1 of 2 brackets open at L100) (jar tiers)

**SUFFIX**
- `the_vault:unique_area_of_effect` → **area_of_effect** [tags: focusEffectRadius]: **0.17 to 0.2** (L89+ bracket; 1 of 3 brackets open at L100, span 0.08 to 0.2)
- `the_vault:mod_ability_increase` → **ability_power_percent** [tags: focusAbilityDamage, antiqueAnyAbilityPower]: **0.16 to 0.2** (L87+ bracket; 1 of 3 brackets open at L100, span 0.08 to 0.2)
  - jump-only tiers: L101: 0.21 to 0.5 (imbuement)
- `the_vault:mod_mana_regen` → **mana_regen** [tags: focusManaRegen]: **0.81 to 1** (L92+ bracket; 1 of 5 brackets open at L100, span 0.41 to 1)
  - jump-only tiers: L101: 1.01 to 1.3 (imbuement) · L102: 1.31 to 2 (needs +2 jump — unreachable on uniques)

## Chonknet (`woldsvaults:chonknet`)

**Item:** magnet · **Source:** addon jar · **Model:** `the_vault:magnets/heart_magnet` · **Pools:** `the_vault:crafted` (w1), `the_vault:collection` (w1), `woldsvaults:chonknet` (w1)

> This thick Magnet gives you much greater Max Health and Healing Efficiency with the downside of lowering your Item Quantity and Item Rarity 
>
> Drops in: Bounty Reward

**BASE_ATTRIBUTE**
- `the_vault:base_magnet_durability` → **durability** [tags: resilientFocusTarget]: **23401 to 30000** (L50+ bracket; 1 of 2 brackets open at L100, span 15000 to 30000)

**IMPLICIT**
- `the_vault:u_base_magnet_range` → **range**: **20.1 to 25** (L99+ bracket; 1 of 3 brackets open at L100, span 15.1 to 25)
- `the_vault:base_endergized` → **endergized**: L0+: {"flag": true}

**PREFIX**
- `the_vault:u_chunky_magnet_health` → **health_percentile**: **0.25 to 0.25** (L51+ bracket)
- `the_vault:u_chunky_magnet_healing` → **healing_effectiveness** [tags: focusHealingEff]: **0.45 to 0.65** (L51+ bracket)

**SUFFIX**
- `the_vault:u_chunky_magnet_item_quantity` → **item_quantity** [tags: focusItemQuantity]: **-0.3 to -0.15** (L51+ bracket)
- `the_vault:u_chunky_magnet_item_rarity` → **item_rarity** [tags: focusItemRarity]: **-0.3 to -0.15** (L51+ bracket)

## Treasure Hunter's Magnet (`woldsvaults:treasure_magnet`)

**Item:** magnet · **Source:** addon jar · **Model:** `the_vault:magnets/treasure_magnet` · **Pools:** `the_vault:crafted` (w1), `the_vault:collection` (w1), `woldsvaults:treasure_magnet` (w1)

> This powerful Magnet gives you much greater Item Quantity and Item Raritywith the downside of lowering your Max Health and Max Mana 
>
> Drops in: Treasure Pedestal

**BASE_ATTRIBUTE**
- `the_vault:base_magnet_durability` → **durability** [tags: resilientFocusTarget]: **23401 to 30000** (L50+ bracket; 1 of 2 brackets open at L100, span 15000 to 30000)

**IMPLICIT**
- `the_vault:u_base_magnet_range` → **range**: **20.1 to 25** (L99+ bracket; 1 of 3 brackets open at L100, span 15.1 to 25)
- `the_vault:base_endergized` → **endergized**: L0+: {"flag": true}

**PREFIX**
- `the_vault:u_treasure_magnet_item_rarity` → **item_rarity** [tags: focusItemQuantity]: **1.25 to 2** (L75+ bracket; 1 of 2 brackets open at L100, span 1 to 2)
- `the_vault:u_treasure_magnet_item_quantity` → **item_quantity** [tags: focusItemQuantity]: **1.25 to 2** (L75+ bracket; 1 of 2 brackets open at L100, span 1 to 2)
- `the_vault:u_lucky_lucky_tm` → **effect**: L0+: {"effectKey": "minecraft:luck", "amplifier": 1} (jar tiers)

**SUFFIX**
- `the_vault:u_treasure_magnet_health` → **health_percentile**: **-0.5 to -0.5** (L51+ bracket)
- `the_vault:u_treasure_magnet_mana` → **mana_additive_percentile**: **-0.5 to -0.5** (L51+ bracket)

## Bloodfetcher (`woldsvaults:bloodseeking_magnet`)

**Item:** magnet · **Source:** addon jar · **Model:** `the_vault:magnets/bloody_magnet` · **Pools:** `the_vault:crafted` (w1), `the_vault:collection` (w1), `woldsvaults:bloodseeking_magnet` (w1)

> This deadly Magnet gives you hit harder and leech life back on hit with the downside of lowering your Trap Disarm and Mana Regen 
>
> Drops in: Dungeon Pedestal

**BASE_ATTRIBUTE**
- `the_vault:base_magnet_durability` → **durability** [tags: resilientFocusTarget]: **23401 to 30000** (L50+ bracket; 1 of 2 brackets open at L100, span 15000 to 30000)

**IMPLICIT**
- `the_vault:u_base_magnet_range` → **range**: **20.1 to 25** (L99+ bracket; 1 of 3 brackets open at L100, span 15.1 to 25)
- `the_vault:base_endergized` → **endergized**: L0+: {"flag": true}

**PREFIX**
- `the_vault:u_bloody_magnet_increase` → **damage_increase** [tags: focusDamage]: **0.5 to 0.55** (L65+ bracket; 1 of 2 brackets open at L100, span 0.25 to 0.55)
- `the_vault:u_bloody_magnet_leech` → **leech** [tags: focusDamage]: **0.04 to 0.04** (L90+ bracket; 1 of 3 brackets open at L100, span 0.02 to 0.04)

**SUFFIX**
- `the_vault:u_bloody_magnet_trap_disarm` → **trap_disarming**: **-0.75 to -1** (L75+ bracket; 1 of 2 brackets open at L100, span -0.75 to -0.75)
- `the_vault:u_bloody_magnet_mana_regen` → **mana_regen** [tags: focusHealingEff]: **-0.75 to -1** (L75+ bracket; 1 of 2 brackets open at L100, span -0.75 to -0.75)
- `the_vault:u_cursed_unlucky` → **effect**: L0+: {"effectKey": "minecraft:unluck", "amplifier": 1} (jar tiers)

---

## Data health notes

Identifiers referenced by the merged registry but **missing from the merged unique tier config** (these affix slots roll nothing at runtime):
- Butcher's Axe (`the_vault:butcher_axe`) — PREFIX: `the_vault:unique_rampage_level`
- Vitalis Plate (`the_vault:vitalis`) — IMPLICIT: `the_vault:base_block_chance`
- Frostguards (`the_vault:frostguards`) — IMPLICIT: `the_vault:base_movement`
- Plague Steppers (`woldsvaults:plague_steppers`) — IMPLICIT: `the_vault:base_movement`
- Frostwarden (`the_vault:frostwarden`) — PREFIX: `the_vault:unique_ice_bolt_level`
- Echoflare (`the_vault:echoflare`) — PREFIX: `the_vault:unique_dash_level`
- Chroma Brew (`woldsvaults:chroma_brew`) — IMPLICIT: `the_vault:mod_max_mana`
- Pocket Penguin (`woldsvaults:pocket_penguin`) — IMPLICIT: `the_vault:mod_max_mana`

Jar-overridden registry entries (jar version wins at runtime): `the_vault:chainlash`, `the_vault:baguette`.
The pack config's Chainlash (broken `mod_on_hit_chain` implicit) and Baguette entries are dead data — the jar versions replace them.

Identifiers defined in BOTH pack and jar tier configs (pack definition wins lookups): `the_vault:jester_lucky_hit`, `the_vault:u_critical_hit_mitigation`, `the_vault:u_saturation`, `the_vault:u_broodmother_web`, `the_vault:u_phoenix`

Uniques with **no codex page**: Crystal Double Blade (`the_vault:crystal_double_blade`), The Sweetheart (`the_vault:sweetheart`)
