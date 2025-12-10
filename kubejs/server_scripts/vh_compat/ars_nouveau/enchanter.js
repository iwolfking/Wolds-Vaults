onEvent("recipes", event => {
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [
            {
                "item": "minecraft:book"
            }
        ],
        "pedestalItems": [
            {
                "item": {
                    "item": "the_vault:chromatic_iron_ingot"
                }
            },
            {
                "item": {
                    "item": "the_vault:chromatic_iron_ingot"
                }
            },
            {
                "item": {
                    "item": "the_vault:chromatic_iron_ingot"
                }
            },
            {
                "item": {
                    "item": "the_vault:chromatic_iron_ingot"
                }
            },
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            },
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            },
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            },
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            }
        ],
        "output": {
            "item": "ars_nouveau:bookwyrm_charm"
        },
        "sourceCost": 0,
        "keepNbtOfReagent": false
    }).id('ars_nouveau:bookwyrm_charm')

    event.custom({
        "type": "ars_nouveau:imbuement",
        "input": {
            "item": "the_vault:wutodic_silver_ingot"
        },
        "output": "ars_nouveau:source_gem",
        "count": 1,
        "source": 500,
        "pedestalItems": []
    }).id('ars_nouveau:imbuement_lapis')

    event.custom({
        "type": "ars_nouveau:imbuement",
        "input": {
            "item": "the_vault:wutodic_silver_block"
        },
        "output": "ars_nouveau:source_gem_block",
        "count": 1,
        "source": 2000,
        "pedestalItems": []
    }).id('ars_nouveau:imbuement_amethyst_block')

    event.shapeless('ars_nouveau:source_gem_block', ['9x ars_nouveau:source_gem']).id('ars_nouveau:source_gem_block')
    event.shapeless('9x ars_nouveau:source_gem', ['ars_nouveau:source_gem_block']).id('ars_nouveau:source_gem_block_2')

    event.remove({ id: 'ars_nouveau:imbuement_amethyst' })

    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [
            {
                "item": "minecraft:stick"
            }
        ],
        "pedestalItems": [
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            },
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            },
            {
                "item": {
                    "item": "woldsvaults:chromatic_gold_ingot"
                }
            }
        ],
        "output": {
            "item": "ars_nouveau:dominion_wand"
        },
        "sourceCost": 0,
        "keepNbtOfReagent": false
    }).id('ars_nouveau:dominion_wand')

    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [
            {
                "item": "ars_nouveau:starbuncle_shards"
            }
        ],
        "pedestalItems": [
            {
                "item": {
                    "item": "woldsvaults:chromatic_gold_nugget"
                }
            },
            {
                "item": {
                    "item": "woldsvaults:chromatic_gold_nugget"
                }
            },
            {
                "item": {
                    "item": "woldsvaults:chromatic_gold_nugget"
                }
            },
            {
                "item": {
                    "item": "woldsvaults:chromatic_gold_nugget"
                }
            },
            {
                "item": {
                    "item": "woldsvaults:chromatic_gold_nugget"
                }
            },
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            },
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            },
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            }
        ],
        "output": {
            "item": "ars_nouveau:starbuncle_charm"
        },
        "sourceCost": 0,
        "keepNbtOfReagent": false
    }).id('ars_nouveau:starbuncle_charm')

    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [
            {
                "item": "ars_nouveau:ring_of_potential"
            }
        ],
        "pedestalItems": [
            {
                "item": {
                    "item": "the_vault:vault_diamond"
                }
            },
            {
                "item": {
                    "item": "the_vault:vault_diamond"
                }
            },
            {
                "item": {
                    "item": "the_vault:vault_diamond"
                }
            },
            {
                "item": {
                    "item": "the_vault:vault_diamond"
                }
            },
            {
                "item": {
                    "tag": "forge:ender_pearls"
                }
            },
            {
                "item": {
                    "tag": "forge:ender_pearls"
                }
            },
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            },
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            }
        ],
        "output": {
            "item": "ars_nouveau:ring_of_lesser_discount"
        },
        "sourceCost": 0,
        "keepNbtOfReagent": false
    }).id('ars_nouveau:ring_of_lesser_discount')

    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [
            {
                "item": "ars_nouveau:ring_of_lesser_discount"
            }
        ],
        "pedestalItems": [
            {
                "item": {
                    "item": "the_vault:vault_diamond"
                }
            },
            {
                "item": {
                    "item": "the_vault:vault_diamond"
                }
            },
            {
                "item": {
                    "item": "the_vault:vault_diamond"
                }
            },
            {
                "item": {
                    "item": "the_vault:vault_diamond"
                }
            },
            {
                "item": {
                    "tag": "forge:rods/blaze"
                }
            },
            {
                "item": {
                    "tag": "forge:rods/blaze"
                }
            },
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            },
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            }
        ],
        "output": {
            "item": "ars_nouveau:ring_of_greater_discount"
        },
        "sourceCost": 0,
        "keepNbtOfReagent": false
    }).id('ars_nouveau:ring_of_greater_discount')

    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [
            {
                "item": "ars_nouveau:dull_trinket"
            }
        ],
        "pedestalItems": [
            {
                "item": {
                    "item": "the_vault:vault_diamond"
                }
            },
            {
                "item": {
                    "item": "the_vault:vault_diamond"
                }
            },
            {
                "item": {
                    "item": "woldsvaults:chromatic_gold_ingot"
                }
            },
            {
                "item": {
                    "item": "woldsvaults:chromatic_gold_ingot"
                }
            },
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            },
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            },
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            },
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            }
        ],
        "output": {
            "item": "ars_nouveau:amulet_of_mana_regen"
        },
        "sourceCost": 0,
        "keepNbtOfReagent": false
    }).id('ars_nouveau:amulet_of_mana_regen')

    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [
            {
                "item": "ars_nouveau:dull_trinket"
            }
        ],
        "pedestalItems": [
            {
                "item": {
                    "item": "the_vault:vault_diamond"
                }
            },
            {
                "item": {
                    "item": "the_vault:vault_diamond"
                }
            },
            {
                "item": {
                    "item": "the_vault:vault_diamond"
                }
            },
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            },
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            },
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            },
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            },
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            }
        ],
        "output": {
            "item": "ars_nouveau:amulet_of_mana_boost"
        },
        "sourceCost": 0,
        "keepNbtOfReagent": false
    }).id('ars_nouveau:amulet_of_mana_boost')

    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [
            {
                "item": "ars_nouveau:whirlisprig_shards"
            }
        ],
        "pedestalItems": [
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            },
            {
                "item": {
                    "item": "ars_nouveau:magebloom_crop"
                }
            },
            {
                "item": {
                    "item": "ars_nouveau:magebloom"
                }
            },
            {
                "item": {
                    "item": "the_vault:vault_diamond_block"
                }
            },
            {
                "item": {
                    "item": "minecraft:oak_sapling"
                }
            },
            {
                "item": {
                    "item": "minecraft:spruce_sapling"
                }
            },
            {
                "item": {
                    "item": "minecraft:birch_sapling"
                }
            },
            {
                "item": {
                    "tag": "forge:seeds/wheat"
                }
            }
        ],
        "output": {
            "item": "ars_nouveau:whirlisprig_charm"
        },
        "sourceCost": 0,
        "keepNbtOfReagent": false
    }).id('ars_nouveau:whirlisprig_charm')

    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [
            {
                "tag": "forge:logs/archwood"
            }
        ],
        "pedestalItems": [
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            },
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            },
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            },
            {
                "item": {
                    "tag": "forge:gems/source"
                }
            },
            {
                "item": {
                    "item": "woldsvaults:chromatic_gold_ingot"
                }
            },
            {
                "item": {
                    "item": "woldsvaults:chromatic_gold_ingot"
                }
            },
            {
                "item": {
                    "item": "ars_nouveau:air_essence"
                }
            },
            {
                "item": {
                    "item": "ars_nouveau:manipulation_essence"
                }
            }
        ],
        "output": {
            "item": "ars_nouveau:wand"
        },
        "sourceCost": 0,
        "keepNbtOfReagent": false
    }).id('ars_nouveau:wand')

    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [
            {
                "item": "minecraft:glass_bottle"
            }
        ],
        "pedestalItems": [
            {
                "item": {
                    "item": "minecraft:lava_bucket"
                }
            },
            {
                "item": {
                    "item": "the_vault:void_liquid_bucket"
                }
            },
            {
                "item": {
                    "item": "ars_nouveau:allow_scroll"
                }
            },
            {
                "item": {
                    "item": "the_vault:perfect_echo_gem"
                }
            }
        ],
        "output": {
            "item": "ars_nouveau:void_jar"
        },
        "sourceCost": 0,
        "keepNbtOfReagent": false
    }).id('ars_nouveau:void_jar')

    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [
            {
                "item": "minecraft:bow"
            }
        ],
        "pedestalItems": [
            {
                "item": {
                    "tag": "forge:storage_blocks/source"
                }
            },
            {
                "item": {
                    "tag": "forge:storage_blocks/source"
                }
            },
            {
                "item": {
                    "item": "woldsvaults:chromatic_gold_block"
                }
            },
            {
                "item": {
                    "item": "woldsvaults:chromatic_gold_block"
                }
            },
            {
                "item": {
                    "item": "the_vault:gem_pog"
                }
            },
            {
                "item": {
                    "item": "ars_nouveau:manipulation_essence"
                }
            }
        ],
        "output": {
            "item": "ars_nouveau:spell_bow"
        },
        "sourceCost": 0,
        "keepNbtOfReagent": false
    }).id('ars_nouveau:spell_bow')

    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [
            {
                "item": "minecraft:glass_bottle"
            }
        ],
        "pedestalItems": [
            {
                "item": {
                    "item": "ars_nouveau:abjuration_essence"
                }
            },
            {
                "item": {
                    "item": "ars_nouveau:abjuration_essence"
                }
            },
            {
                "item": {
                    "tag": "forge:storage_blocks/source"
                }
            },
            {
                "item": {
                    "item": "woldsvaults:chromatic_gold_block"
                }
            },
            {
                "item": {
                    "item": "woldsvaults:chromatic_gold_block"
                }
            },
            {
                "item": {
                    "item": "woldsvaults:chromatic_gold_block"
                }
            }
        ],
        "output": {
            "item": "ars_nouveau:potion_flask"
        },
        "sourceCost": 0,
        "keepNbtOfReagent": false
    }).id('ars_nouveau:potion_flask')

    event.remove({ id: 'ars_nouveau:enchanters_shield' })

    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [
            {
                "item": "minecraft:diamond_sword"
            }
        ],
        "pedestalItems": [
            {
                "item": {
                    "item": "the_vault:gem_pog"
                }
            },
            {
                "item": {
                    "item": "woldsvaults:chromatic_gold_block"
                }
            },
            {
                "item": {
                    "item": "woldsvaults:chromatic_gold_block"
                }
            },
            {
                "item": {
                    "tag": "forge:storage_blocks/source"
                }
            },
            {
                "item": {
                    "tag": "forge:storage_blocks/source"
                }
            }
        ],
        "output": {
            "item": "ars_nouveau:enchanters_sword"
        },
        "sourceCost": 0,
        "keepNbtOfReagent": false
    }).id('ars_nouveau:enchanters_sword')

    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [
            {
                "tag": "forge:storage_blocks/source"
            }
        ],
        "pedestalItems": [
            {
                "item": {
                    "item": "ars_nouveau:wilden_horn"
                }
            },
            {
                "item": {
                    "item": "ars_nouveau:wilden_spike"
                }
            },
            {
                "item": {
                    "item": "ars_nouveau:wilden_wing"
                }
            },
            {
                "item": {
                    "item": "ars_nouveau:wilden_tribute"
                }
            },
            {
                "item": {
                    "item": "woldsvaults:chromatic_gold_ingot"
                }
            }
        ],
        "output": {
            "item": "ars_nouveau:summon_focus"
        },
        "sourceCost": 0,
        "keepNbtOfReagent": false
    }).id('ars_nouveau:summon_focus')


    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [
            {
                "tag": "forge:storage_blocks/source"
            }
        ],
        "pedestalItems": [
            {
                "item": {
                    "tag": "forge:glass"
                }
            },
            {
                "item": {
                    "tag": "forge:glass"
                }
            },
            {
                "item": {
                    "item": "ars_nouveau:manipulation_essence"
                }
            },
            {
                "item": {
                    "item": "ars_nouveau:manipulation_essence"
                }
            },
            {
                "item": {
                    "tag": "forge:logs/archwood"
                }
            },
            {
                "item": {
                    "tag": "forge:logs/archwood"
                }
            },
            {
                "item": {
                    "item": "woldsvaults:chromatic_gold_ingot"
                }
            },
            {
                "item": {
                    "item": "woldsvaults:chromatic_gold_ingot"
                }
            },
            {
                "item": {
                    "item": "the_vault:gem_pog"
                }
            }
        ],
        "output": {
            "item": "ars_nouveau:enchanters_mirror"
        },
        "sourceCost": 0,
        "keepNbtOfReagent": false
    }).id('ars_nouveau:enchanters_mirror')

    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [
            {
                "item": "ars_nouveau:manipulation_essence"
            }
        ],
        "pedestalItems": [
            {
                "item": {
                    "item": "woldsvaults:chromatic_gold_block"
                }
            },
            {
                "item": {
                    "item": "minecraft:piston"
                }
            },
            {
                "item": {
                    "item": "minecraft:slime_block"
                }
            },
            {
                "item": {
                    "item": "the_vault:vault_diamond_block"
                }
            }
        ],
        "output": {
            "item": "ars_nouveau:shapers_focus"
        },
        "sourceCost": 0,
        "keepNbtOfReagent": false
    }).id('ars_nouveau:shapers_focus')

    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [
            {
                "item": "ars_nouveau:potion_jar"
            }
        ],
        "pedestalItems": [
            {
                "item": {
                    "item": "ars_nouveau:abjuration_essence"
                }
            },
            {
                "item": {
                    "item": "ars_nouveau:abjuration_essence"
                }
            },
            {
                "item": {
                    "item": "woldsvaults:chromatic_gold_block"
                }
            },
            {
                "item": {
                    "item": "woldsvaults:chromatic_gold_block"
                }
            },
            {
                "item": {
                    "tag": "forge:rods/blaze"
                }
            },
            {
                "item": {
                    "tag": "forge:rods/blaze"
                }
            },
            {
                "item": {
                    "tag": "forge:rods/blaze"
                }
            },
            {
                "item": {
                    "tag": "forge:rods/blaze"
                }
            }
        ],
        "output": {
            "item": "ars_nouveau:potion_melder"
        },
        "sourceCost": 0,
        "keepNbtOfReagent": false
    }).id('ars_nouveau:potion_melder')

    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "reagent": [
            {
                "item": "ars_nouveau:basic_spell_turret"
            }
        ],
        "pedestalItems": [
            {
                "item": {
                    "tag": "forge:storage_blocks/source"
                }
            },
            {
                "item": {
                    "tag": "forge:rods/blaze"
                }
            },
            {
                "item": {
                    "tag": "forge:rods/blaze"
                }
            },
            {
                "item": {
                    "item": "the_vault:wutodic_mass"
                }
            },
            {
                "item": {
                    "item": "the_vault:wutodic_mass"
                }
            }
        ],
        "output": {
            "item": "ars_nouveau:spell_turret"
        },
        "sourceCost": 0,
        "keepNbtOfReagent": false
    }).id('ars_nouveau:spell_turret')
})