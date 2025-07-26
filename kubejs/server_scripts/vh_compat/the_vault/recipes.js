onEvent("recipes", event => {
    event.remove({ output: 'the_vault:angel_block' })
    event.remove({ id: 'the_vault:vault_catalyst_reroll' })
    event.remove({ output: 'the_vault:treasure_keyring'})
    event.remove({id: 'the_vault:infused_eternal_soul'})
    event.remove({output: 'the_vault:coin_pouch'})
    event.remove({id: 'the_vault:echoing_ingot'})
    event.remove({id: 'the_vault:smelt_etching'})
    event.remove({id: 'the_vault:crystal_seal_ordinator_run'})
    event.remove({id: 'the_vault:crystal_seal_ordinator_build'})

    event.shaped(Item.of('the_vault:crystal_budding'),
        [
            'AEA',
            'ECE',
            'AEA'
        ], {
        C: 'the_vault:living_rock_block_cobble',
        E: 'the_vault:gem_larimar',
        A: 'minecraft:amethyst_block'
    })

    event.shaped(Item.of('the_vault:mystical_powder'),
        [
            ' E ',
            'DBD',
            'AEA'
        ], {
        E: 'the_vault:vault_essence',
        D: 'the_vault:vault_diamond',
        A: 'the_vault:dreamstone',
        B: 'the_vault:perfect_benitoite'
    })

    event.shaped(Item.of('the_vault:mystery_egg'),
        [
            'EPE',
            'MNM',
            'EDE'
        ], {
        E: 'the_vault:vault_essence',
        M: '#the_vault:spawnegg',
        D: 'the_vault:vault_diamond',
        P: 'the_vault:gem_painite',
        N: 'the_vault:perfect_larimar'
    }).id('the_vault:mystery_egg')

    event.shaped(Item.of('the_vault:angel_block'),
        [
            'XBX',
            'ECE',
            'XBX'
        ], {
        C: 'the_vault:gem_pog',
        X: 'the_vault:black_chromatic_steel_ingot',
        B: 'the_vault:phoenix_feather',
        E: 'the_vault:knowledge_star'
    })

    event.shapeless('the_vault:capstone_vendoor_hunter', ['woldsvaults:capstone_vendoors'])

    event.shapeless('9x the_vault:vault_diamond', ['the_vault:vault_diamond_block'])

    event.shapeless('the_vault:vault_palladium', ['9x the_vault:vault_platinum'])
    event.shapeless('the_vault:vault_iridium', ['9x the_vault:vault_palladium'])
    event.shapeless('9x the_vault:vault_platinum', ['the_vault:vault_palladium'])
    event.shapeless('9x the_vault:vault_palladium', ['the_vault:vault_iridium'])
    event.shapeless('9x the_vault:vault_catalyst_fragment', ['the_vault:vault_catalyst'])
    event.shapeless('the_vault:vault_catalyst', ['9x the_vault:vault_catalyst_fragment'])

    event.shapeless('9x the_vault:vault_catalyst_fragment', ['the_vault:vault_catalyst'])
    event.shapeless('the_vault:phoenix_feather', ['9x the_vault:phoenix_dust'])
    event.shapeless('9x the_vault:phoenix_dust', ['the_vault:phoenix_feather'])
    event.shapeless('9x the_vault:regret_chunk', ['the_vault:regret_orb'])
    event.shapeless('9x the_vault:regret_nugget', ['the_vault:regret_chunk'])
    event.shapeless('the_vault:chromatic_steel_block', ['4x the_vault:chromatic_iron_block', '2x the_vault:carbon_block'])

    //Deck Conversion
    //event.shapeless(Item.of('the_vault:booster_pack', '{Item:{Count:1,id:"arcane"}}').strongNbt(), [Item.of('the_vault:card_deck', '{Item:{Count:1,id:"lost"}}').strongNbt()])
    event.custom({
        "type": "crafting_shapeless",
        "ingredients": [
            {
                "type": "forge:partial_nbt",
                "item": "the_vault:card_deck",
                "count": 1,
                "nbt": {
                    "id": "lost"
                }
            }
        ],
        "result": {
            "type": "forge:nbt",
            "item": "the_vault:booster_pack",
            "count": 1,
            "nbt": {
                "id": "the_vault:lost_pack"
            }
        }
    })

    event.custom({
        "type": "crafting_shapeless",
        "ingredients": [
            {
                "type": "forge:partial_nbt",
                "item": "the_vault:card_deck",
                "count": 1,
                "nbt": {
                    "id": "champion"
                }
            }
        ],
        "result": {
            "type": "forge:nbt",
            "item": "the_vault:booster_pack",
            "count": 1,
            "nbt": {
                "id": "the_vault:champion_pack"
            }
        }
    })

    event.custom({
        "type": "crafting_shapeless",
        "ingredients": [
            {
                "type": "forge:partial_nbt",
                "item": "the_vault:card_deck",
                "count": 1,
                "nbt": {
                    "id": "extended"
                }
            }
        ],
        "result": {
            "type": "forge:nbt",
            "item": "the_vault:booster_pack",
            "count": 1,
            "nbt": {
                "id": "the_vault:champion_pack"
            }
        }
    })

    event.custom({
        "type": "crafting_shapeless",
        "ingredients": [
            {
                "type": "forge:partial_nbt",
                "item": "the_vault:card_deck",
                "count": 1,
                "nbt": {
                    "id": "gdungeon"
                }
            }
        ],
        "result": {
            "type": "forge:nbt",
            "item": "the_vault:booster_pack",
            "count": 1,
            "nbt": {
                "id": "the_vault:dungeon_pack"
            }
        }
    })

    event.custom({
        "type": "crafting_shapeless",
        "ingredients": [
            {
                "type": "forge:partial_nbt",
                "item": "the_vault:card_deck",
                "count": 1,
                "nbt": {
                    "id": "ldungeon"
                }
            }
        ],
        "result": {
            "type": "forge:nbt",
            "item": "the_vault:booster_pack",
            "count": 1,
            "nbt": {
                "id": "the_vault:dungeon_pack"
            }
        }
    })

    event.custom({
        "type": "crafting_shapeless",
        "ingredients": [
            {
                "type": "forge:partial_nbt",
                "item": "the_vault:card_deck",
                "count": 1,
                "nbt": {
                    "id": "odungeon"
                }
            }
        ],
        "result": {
            "type": "forge:nbt",
            "item": "the_vault:booster_pack",
            "count": 1,
            "nbt": {
                "id": "the_vault:dungeon_pack"
            }
        }
    })

    event.custom({
        "type": "crafting_shapeless",
        "ingredients": [
            {
                "type": "forge:partial_nbt",
                "item": "the_vault:card_deck",
                "count": 1,
                "nbt": {
                    "id": "treasure"
                }
            }
        ],
        "result": {
            "type": "forge:nbt",
            "item": "the_vault:booster_pack",
            "count": 1,
            "nbt": {
                "id": "the_vault:treasure_pack"
            }
        }
    })

    event.custom({
        "type": "crafting_shapeless",
        "ingredients": [
            {
                "type": "forge:partial_nbt",
                "item": "the_vault:card_deck",
                "count": 1,
                "nbt": {
                    "id": "black"
                }
            }
        ],
        "result": {
            "type": "forge:nbt",
            "item": "the_vault:booster_pack",
            "count": 1,
            "nbt": {
                "id": "the_vault:black_pack"
            }
        }
    })

    event.custom({
        "type": "crafting_shapeless",
        "ingredients": [
            {
                "type": "forge:partial_nbt",
                "item": "the_vault:card_deck",
                "count": 1,
                "nbt": {
                    "id": "merchant"
                }
            }
        ],
        "result": {
            "type": "forge:nbt",
            "item": "the_vault:booster_pack",
            "count": 1,
            "nbt": {
                "id": "the_vault:merchant_pack"
            }
        }
    })

    event.custom({
        "type": "crafting_shapeless",
        "ingredients": [
            {
                "type": "forge:partial_nbt",
                "item": "the_vault:card_deck",
                "count": 1,
                "nbt": {
                    "id": "large"
                }
            }
        ],
        "result": {
            "type": "forge:nbt",
            "item": "the_vault:booster_pack",
            "count": 1,
            "nbt": {
                "id": "the_vault:mix_pack"
            }
        }
    })

    event.custom({
        "type": "crafting_shapeless",
        "ingredients": [
            {
                "type": "forge:partial_nbt",
                "item": "the_vault:card_deck",
                "count": 1,
                "nbt": {
                    "id": "double"
                }
            }
        ],
        "result": {
            "type": "forge:nbt",
            "item": "the_vault:booster_pack",
            "count": 1,
            "nbt": {
                "id": "the_vault:mix_pack"
            }
        }
    })
    event.shapeless(Item.of('the_vault:spicy_hearty_burger'), ['the_vault:cheese_burger_feast', 'the_vault:burger_chili']).id('woldsvaults:cheeseburger_feast_upgrade')
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:gilded_affinity"}'), ['the_vault:nullifying_focus', 'the_vault:smashed_vault_gem_cluster', 'the_vault:gilded_ingot']).id('woldsvaults:chiseling_focus_gilded')
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:ornate_affinity"}'), ['the_vault:nullifying_focus', 'the_vault:smashed_vault_gem_cluster', 'the_vault:ornate_ingot'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:living_affinity"}'), ['the_vault:nullifying_focus', 'the_vault:smashed_vault_gem_cluster', 'the_vault:mossy_bone'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:wooden_affinity"}'), ['the_vault:nullifying_focus', 'the_vault:smashed_vault_gem_cluster', 'the_vault:wooden_chunk'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:coin_affinity"}'), ['the_vault:nullifying_focus', 'the_vault:smashed_vault_gem_cluster', 'the_vault:vault_bronze'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:picking"}'), ['the_vault:nullifying_focus', 'the_vault:smashed_vault_gem_cluster', 'minecraft:iron_pickaxe'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:shovelling"}'), ['the_vault:nullifying_focus', 'the_vault:smashed_vault_gem_cluster', 'minecraft:iron_shovel'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:axing"}'), ['the_vault:nullifying_focus', 'the_vault:smashed_vault_gem_cluster', 'minecraft:iron_axe'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:reaping"}'), ['the_vault:nullifying_focus', 'the_vault:smashed_vault_gem_cluster', 'minecraft:iron_hoe'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:pulverizing"}'), ['the_vault:nullifying_focus', 'the_vault:smashed_vault_gem_cluster', 'minecraft:piston'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:smelting"}'), ['the_vault:nullifying_focus', 'the_vault:smashed_vault_gem_cluster', 'minecraft:furnace'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:hydrovoid"}'), ['the_vault:nullifying_focus', 'the_vault:smashed_vault_gem_cluster', 'minecraft:sponge'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:immortality"}'), ['the_vault:nullifying_focus', 'the_vault:smashed_vault_gem_cluster', 'the_vault:eternal_soul'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:copiously"}'), ['the_vault:nullifying_focus', 'the_vault:smashed_vault_gem_cluster', 'minecraft:gold_ingot'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:durability"}'), ['the_vault:nullifying_focus', 'the_vault:smashed_vault_gem_cluster', 'minecraft:iron_ingot'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:hammer_size"}'), ['the_vault:nullifying_focus', 'the_vault:smashed_vault_gem_cluster', 'minecraft:iron_block'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:hammering"}'), ['the_vault:nullifying_focus', 'the_vault:smashed_vault_gem_cluster', 'minecraft:iron_nugget'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:mining_speed"}'), ['the_vault:nullifying_focus', 'the_vault:smashed_vault_gem_cluster', 'minecraft:lapis_lazuli'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:item_quantity"}'), ['the_vault:nullifying_focus', 'the_vault:smashed_vault_gem_cluster', 'minecraft:chest'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:item_rarity"}'), ['the_vault:nullifying_focus', 'the_vault:smashed_vault_gem_cluster', 'minecraft:emerald'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:reach"}'), ['the_vault:nullifying_focus', 'the_vault:smashed_vault_gem_cluster', 'minecraft:stick'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:soulbound"}'), ['the_vault:nullifying_focus', 'the_vault:smashed_vault_gem_cluster', 'minecraft:soul_sand'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:trap_disarming"}'), ['the_vault:nullifying_focus', 'the_vault:smashed_vault_gem_cluster', 'minecraft:lever'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:rotating"}'), ['the_vault:nullifying_focus', 'the_vault:smashed_vault_gem_cluster', 'minecraft:diamond'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:dismantle_chance"}'), ['the_vault:nullifying_focus', 'the_vault:smashed_vault_gem_cluster', 'minecraft:copper_ingot'])
    event.shapeless(Item.of('woldsvaults:stylish_focus'), ['minecraft:ender_pearl', 'the_vault:smashed_vault_gem_cluster', 'minecraft:diamond'])
})
