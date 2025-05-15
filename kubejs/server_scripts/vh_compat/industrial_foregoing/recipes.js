let removedOutputsIFG = [
    'industrialforegoing:machine_frame_pity',
    'industrialforegoing:fluid_extractor',
    'industrialforegoing:latex_processing_unit',
    'industrialforegoing:dissolution_chamber',
    'industrialforegoing:iron_gear',
    'industrialforegoing:gold_gear',
    'industrialforegoing:diamond_gear',
    'industrialforegoing:conveyor',
    'industrialforegoing:mob_duplicator',
    'industrialforegoing:mob_imprisonment_tool',
    'industrialforegoing:plant_gatherer',
    'industrialforegoing:plant_sower',
    'industrialforegoing:mob_slaughter_factory',
    'industrialforegoing:animal_rancher',
    'industrialforegoing:mob_crusher',
    'industrialforegoing:hydroponic_bed',
    'industrialforegoing:spores_recreator',
    'industrialforegoing:common_black_hole_unit',
    'industrialforegoing:pity_black_hole_unit',
    'industrialforegoing:simple_black_hole_unit',
    'industrialforegoing:advanced_black_hole_unit',
    'industrialforegoing:supreme_black_hole_unit',
    'industrialforegoing:common_black_hole_tank',
    'industrialforegoing:pity_black_hole_tank',
    'industrialforegoing:simple_black_hole_tank',
    'industrialforegoing:advanced_black_hole_tank',
    'industrialforegoing:supreme_black_hole_tank',
    'industrialforegoing:enchantment_factory'
];
onEvent("recipes", event => {
    removedOutputsIFG.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.remove({ id: 'industrialforegoing:dissolution_chamber/range_addon0' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/range_addon1' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/range_addon2' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/range_addon3' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/range_addon4' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/range_addon5' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/range_addon6' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/range_addon7' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/range_addon8' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/range_addon9' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/range_addon10' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/range_addon11' })





    event.replaceInput(
        { mod: 'industrialforegoing' }, // Arg 1: the filter
        '#forge:gears/gold',            // Arg 2: the item to replace
        'industrialforegoing:gold_gear'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    )

    event.replaceInput(
        { mod: 'industrialforegoing' }, // Arg 1: the filter
        '#forge:gears/diamond',            // Arg 2: the item to replace
        'industrialforegoing:diamond_gear'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    )

    event.replaceInput(
        { mod: 'industrialforegoing' }, // Arg 1: the filter
        '#forge:gears/iron',            // Arg 2: the item to replace
        'industrialforegoing:iron_gear'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    )

    event.remove({ id: 'industrialforegoing:dissolution_chamber/infinity_backpack' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/simple_machine_frame' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/advanced_machine_frame' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/supreme_machine_frame' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/infinity_drill' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/infinity_saw' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/infinity_hammer' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/infinity_trident' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/infinity_launcher' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/infinity_nuke' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/laser_lens0' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/laser_lens1' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/laser_lens2' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/laser_lens3' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/laser_lens4' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/laser_lens5' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/laser_lens6' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/laser_lens7' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/laser_lens8' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/laser_lens9' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/laser_lens10' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/laser_lens11' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/laser_lens12' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/laser_lens13' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/laser_lens14' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/laser_lens15' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/range_addon_0' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/range_addon_1' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/range_addon_2' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/range_addon_3' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/range_addon_4' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/range_addon_5' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/range_addon_6' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/range_addon_7' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/range_addon_8' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/range_addon_9' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/range_addon_10' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/range_addon_11' })


    event.remove({ id: 'industrialforegoing:dissolution_chamber/speed_addon_1' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/speed_addon_2' })
    event.remove({ id: 'mifa:dissolution_chamber/speed_addon_3' })
    event.remove({ id: 'mifa:dissolution_chamber/speed_addon_4' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/processing_addon_1' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/processing_addon_2' })
    event.remove({ id: 'mifa:dissolution_chamber/processing_addon_3' })
    event.remove({ id: 'mifa:dissolution_chamber/processing_addon_4' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/efficiency_addon_1' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/efficiency_addon_2' })
    event.remove({ id: 'mifa:dissolution_chamber/efficiency_addon_3' })
    event.remove({ id: 'mifa:dissolution_chamber/efficiency_addon_4' })



    event.shaped(Item.of('industrialforegoing:machine_frame_pity'),
        [
            'PRP',
            'RMR',
            'PRP'
        ], {
            P: 'the_vault:driftwood_planks',
            R: 'the_vault:chromatic_steel_ingot',
            M: 'the_vault:perfect_larimar'
        })

    event.shaped(Item.of('industrialforegoing:fluid_extractor'),
        [
            'PpP',
            'RMR',
            'PTP'
        ], {
            P: 'the_vault:chromatic_steel_ingot',
            p: 'minecraft:light_weighted_pressure_plate',
            R: 'minecraft:redstone_block',
            M: 'industrialforegoing:machine_frame_pity',
            T: 'minecraft:piston'
        })

    event.shaped(Item.of('industrialforegoing:latex_processing_unit'),
        [
            'PpP',
            'RMr',
            'PTP'
        ], {
            P: 'the_vault:chromatic_steel_ingot',
            p: 'minecraft:redstone_block',
            R: 'minecraft:water_bucket',
            r: 'industrialforegoing:latex_bucket',
            M: 'industrialforegoing:machine_frame_pity',
            T: 'minecraft:furnace'
        })


    event.shaped(Item.of('industrialforegoing:dissolution_chamber'),
        [
            'PpP',
            'RMR',
            'ITI'
        ], {
            P: '#forge:plastic',
            p: 'the_vault:chromatic_steel_block',
            R: 'minecraft:bucket',
            M: 'industrialforegoing:machine_frame_pity',
            T: 'industrialforegoing:diamond_gear',
            I: 'the_vault:chromatic_steel_ingot'
        })

    event.shaped(Item.of('industrialforegoing:biofuel_generator'),
        [
            'PpP',
            'RMR',
            'ITI'
        ], {
            P: '#forge:plastic',
            p: 'minecraft:furnace',
            R: 'minecraft:piston',
            M: 'industrialforegoing:machine_frame_pity',
            I: 'industrialforegoing:diamond_gear',
            T: 'the_vault:chromatic_steel_block'
        })

    event.shaped(Item.of('industrialforegoing:iron_gear'),
        [
            ' I ',
            'ILI',
            ' I '
        ], {
            I: 'the_vault:chromatic_iron_ingot',
            L: 'the_vault:gem_larimar'
        })

    event.shaped(Item.of('industrialforegoing:gold_gear'),
        [
            ' I ',
            'ILI',
            ' I '
        ], {
            I: 'the_vault:chromatic_gold_ingot',
            L: 'the_vault:perfect_larimar'
        })

    event.shaped(Item.of('industrialforegoing:diamond_gear'),
        [
            ' I ',
            'ILI',
            ' I '
        ], {
            I: 'the_vault:vault_diamond',
            L: 'the_vault:perfect_larimar'
        })

    event.shaped(Item.of('industrialforegoing:conveyor', 6),
        [
            'III',
            'PLP',
            'III'
        ], {
            I: '#forge:plastic',
            P: 'the_vault:chromatic_iron_ingot',
            L: 'minecraft:redstone'
        })

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "tag": "forge:plastic"
            },
            {
                "tag": "industrialforegoing:machine_frame/pity"
            },
            {
                "tag": "forge:plastic"
            },
            {
                "item": "the_vault:black_chromatic_steel_ingot"
            },
            {
                "item": "the_vault:black_chromatic_steel_ingot"
            },
            {
                "item": "the_vault:chromatic_steel_ingot"
            },
            {
                "item": 'industrialforegoing:gold_gear'
            },
            {
                "item": "the_vault:chromatic_steel_ingot"
            }
        ],
        "inputFluid": "{Amount:250,FluidName:\"industrialforegoing:latex\"}",
        "output": {
            "count": 1,
            "item": "industrialforegoing:machine_frame_simple"
        },
        "processingTime": 300
    })

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "tag": "forge:plastic"
            },
            {
                "tag": "industrialforegoing:machine_frame/simple"
            },
            {
                "tag": "forge:plastic"
            },
            {
                "item": "the_vault:black_chromatic_steel_ingot"
            },
            {
                "item": "the_vault:black_chromatic_steel_ingot"
            },
            {
                "item": "the_vault:extraordinary_larimar"
            },
            {
                "item": 'industrialforegoing:diamond_gear'
            },
            {
                "item": "the_vault:extraordinary_larimar"
            }
        ],
        "inputFluid": "{Amount:500,FluidName:\"industrialforegoing:pink_slime\"}",
        "output": {
            "count": 1,
            "item": "industrialforegoing:machine_frame_advanced"
        },
        "processingTime": 300
    })

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "tag": "forge:plastic"
            },
            {
                "tag": "industrialforegoing:machine_frame/advanced"
            },
            {
                "tag": "forge:plastic"
            },
            {
                "item": "the_vault:gem_pog"
            },
            {
                "item": "the_vault:gem_pog"
            },
            {
                "item": 'industrialforegoing:diamond_gear'
            },
            {
                "item": "the_vault:chromatic_steel_block"
            },
            {
                "item": 'industrialforegoing:diamond_gear'
            }

        ],
        "inputFluid": "{Amount:135,FluidName:\"industrialforegoing:ether_gas\"}",
        "output": {
            "count": 1,
            "item": "industrialforegoing:machine_frame_supreme"
        },
        "processingTime": 300
    })

    event.custom(
        {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [
                {
                    "tag": "forge:glass_panes"
                },
                {
                    "tag": "forge:glass_panes"
                },
                {
                    "tag": "forge:glass_panes"
                },
                {
                    "tag": "forge:glass_panes"
                },
                {
                    "tag": "forge:dyes/white"
                },
                {
                    "item": "the_vault:extraordinary_larimar"
                },
                {
                    "item": "the_vault:extraordinary_larimar"
                },
                {
                    "item": "the_vault:extraordinary_larimar"
                }
            ],
            "inputFluid": "{Amount:250,FluidName:\"industrialforegoing:latex\"}",
            "output": {
                "count": 1,
                "item": "industrialforegoing:laser_lens0"
            },
            "processingTime": 100
        }
    )

    event.custom(
        {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [
                {
                    "item": "the_vault:vault_diamond_block"
                },
                {
                    "item": "minecraft:netherite_shovel"
                },
                {
                    "item": "the_vault:vault_diamond_block"
                },
                {
                    "item": "the_vault:vault_diamond_block"
                },
                {
                    "item": "industrialforegoing:range_addon11"
                },
                {
                    "item": "industrialforegoing:diamond_gear"
                },
                {
                    "item": "industrialforegoing:diamond_gear"
                },
                {
                    "item": "the_vault:black_chromatic_steel_block"
                }
            ],
            "inputFluid": "{Amount:2000,FluidName:\"industrialforegoing:pink_slime\"}",
            "output": {
                "count": 1,
                "item": "industrialforegoing:infinity_drill",
                "nbt": "{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:\"biofuel\"},Selected:\"POOR\",Special:0b}"
            },
            "processingTime": 400
        }
    )

    event.custom(
        {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [
                {
                    "item": "the_vault:vault_diamond_block"
                },
                {
                    "item": "minecraft:netherite_pickaxe"
                },
                {
                    "item": "minecraft:netherite_axe"
                },
                {
                    "item": "minecraft:netherite_axe"
                },
                {
                    "item": "industrialforegoing:range_addon11"
                },
                {
                    "item": "industrialforegoing:diamond_gear"
                },
                {
                    "item": "industrialforegoing:diamond_gear"
                },
                {
                    "item": "the_vault:black_chromatic_steel_block"
                }
            ],
            "inputFluid": "{Amount:2000,FluidName:\"industrialforegoing:pink_slime\"}",
            "output": {
                "count": 1,
                "item": "industrialforegoing:infinity_saw",
                "nbt": "{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:\"biofuel\"},Selected:\"POOR\",Special:0b}"
            },
            "processingTime": 400
        }
    )

    event.custom(
        {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [
                {
                    "item": "the_vault:vault_diamond_block"
                },
                {
                    "item": "the_vault:vault_diamond_block"
                },
                {
                    "item": "minecraft:trident"
                },
                {
                    "item": "minecraft:netherite_hoe"
                },
                {
                    "item": "industrialforegoing:range_addon11"
                },
                {
                    "item": "industrialforegoing:diamond_gear"
                },
                {
                    "item": "industrialforegoing:diamond_gear"
                },
                {
                    "item": "the_vault:black_chromatic_steel_block"
                }
            ],
            "inputFluid": "{Amount:2000,FluidName:\"industrialforegoing:pink_slime\"}",
            "output": {
                "count": 1,
                "item": "industrialforegoing:infinity_trident",
                "nbt": "{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:\"biofuel\"},Selected:\"POOR\",Special:0b}"
            },
            "processingTime": 400
        }
    )


    event.custom(
        {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [
                {
                    "item": "the_vault:perfect_larimar"
                },
                {
                    "item": "the_vault:perfect_larimar"
                },
                {
                    "item": "the_vault:memory_powder"
                },
                {
                    "item": "the_vault:memory_powder"
                },
                {
                    "item": 'industrialforegoing:gold_gear'
                },
                {
                    "item": 'industrialforegoing:gold_gear'
                },
                {
                    "item": "minecraft:sugar"
                },
                {
                    "item": "minecraft:sugar"
                }
            ],
            "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:latex\"}",
            "output": {
                "count": 1,
                "item": "industrialforegoing:speed_addon_1",
                "nbt": "{TitaniumAugment:{Speed:2.0f}}"
            },
            "processingTime": 200
        }
    )

    event.custom(
        {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [
                {
                    "item": "the_vault:extraordinary_larimar"
                },
                {
                    "item": "the_vault:extraordinary_larimar"
                },
                {
                    "item": "the_vault:memory_powder"
                },
                {
                    "item": "the_vault:memory_powder"
                },
                {
                    "item": 'industrialforegoing:diamond_gear'
                },
                {
                    "item": 'industrialforegoing:diamond_gear'
                },
                {
                    "item": "minecraft:sugar"
                },
                {
                    "item": "minecraft:sugar"
                }
            ],
            "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:latex\"}",
            "output": {
                "count": 1,
                "item": "industrialforegoing:speed_addon_2",
                "nbt": "{TitaniumAugment:{Speed:3.0f}}"
            },
            "processingTime": 200
        }
    )

    event.custom(
        {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [
                {
                    "item": "woldsvaults:pogominium_ingot"
                },
                {
                    "item": "woldsvaults:pogominium_ingot"
                },
                {
                    "item": "the_vault:memory_shard"
                },
                {
                    "item": "the_vault:memory_shard"
                },
                {
                    "item": 'industrialforegoing:speed_addon_2'
                },
                {
                    "item": 'mifa:netherite_gear'
                },
                {
                    "item": "supplementaries:sugar_cube"
                },
                {
                    "item": "supplementaries:sugar_cube"
                }
            ],
            "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:pink_slime\"}",
            "output": {
                "count": 1,
                "item": "mifa:speed_addon_3",
                "nbt": "{TitaniumAugment:{Speed:4.0f}}"
            },
            "processingTime": 200
        }
    )

    event.custom(
        {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [
                {
                    "item": "the_vault:echoing_ingot"
                },
                {
                    "item": "the_vault:echoing_ingot"
                },
                {
                    "item": "the_vault:memory_shard"
                },
                {
                    "item": "the_vault:memory_shard"
                },
                {
                    "item": "mifa:speed_addon_3"
                },
                {
                    "item": 'mifa:netherite_gear'
                },
                {
                    "item": "supplementaries:sugar_cube"
                },
                {
                    "item": "supplementaries:sugar_cube"
                }
            ],
            "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:ether_gas\"}",
            "output": {
                "count": 1,
                "item": "mifa:speed_addon_4",
                "nbt": "{TitaniumAugment:{Speed:5.0f}}"
            },
            "processingTime": 200
        }
    )

    event.custom(

        {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [
                {
                    "item": "the_vault:chromatic_steel_block"
                },
                {
                    "item": "the_vault:chromatic_steel_block"
                },
                {
                    "item": "the_vault:memory_powder"
                },
                {
                    "item": "the_vault:memory_powder"
                },
                {
                    "tag": "forge:gears/diamond"
                },
                {
                    "item": 'industrialforegoing:diamond_gear'
                },
                {
                    "item": "minecraft:furnace"
                },
                {
                    "item": "minecraft:crafting_table"
                }
            ],
            "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:latex\"}",
            "output": {
                "count": 1,
                "item": "industrialforegoing:processing_addon_1",
                "nbt": "{TitaniumAugment:{Processing:2.0f}}"
            },
            "processingTime": 200
        }
    )

    event.custom(
        {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [
                {
                    "item": "the_vault:chromatic_steel_block"
                },
                {
                    "item": "the_vault:vault_diamond_block"
                },
                {
                    "item": "the_vault:black_chromatic_steel_ingot"
                },
                {
                    "item": "the_vault:black_chromatic_steel_ingot"
                },
                {
                    "tag": "forge:gears/diamond"
                },
                {
                    "tag": "forge:gears/diamond"
                },
                {
                    "item": "minecraft:furnace"
                },
                {
                    "item": "minecraft:crafting_table"
                }
            ],
            "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:latex\"}",
            "output": {
                "count": 1,
                "item": "industrialforegoing:processing_addon_2",
                "nbt": "{TitaniumAugment:{Processing:3.0f}}"
            },
            "processingTime": 200
        }
    )

    event.custom(
        {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [
                {
                    "item": "the_vault:black_chromatic_steel_block"
                },
                {
                    "item": "the_vault:black_chromatic_steel_block"
                },
                {
                    "item": "woldsvaults:pogominium_ingot"
                },
                {
                    "item": "woldsvaults:pogominium_ingot"
                },
                {
                    "item": 'industrialforegoing:processing_addon_2'
                },
                {
                    "item": 'mifa:netherite_gear'
                },
                {
                    "item": "woldsvaults:chromatic_iron_vault_infuser"
                },
                {
                    "item": "minecraft:crafting_table"
                }
            ],
            "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:pink_slime\"}",
            "output": {
                "count": 1,
                "item": "mifa:processing_addon_3",
                "nbt": "{TitaniumAugment:{Processing:4.0f}}"
            },
            "processingTime": 200
        }
    )

    event.custom(
        {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [
                {
                    "item": "the_vault:black_chromatic_steel_block"
                },
                {
                    "item": "the_vault:black_chromatic_steel_block"
                },
                {
                    "item": "the_vault:echoing_ingot"
                },
                {
                    "item": "the_vault:echoing_ingot"
                },
                {
                    "item": 'mifa:processing_addon_3'
                },
                {
                    "item": 'mifa:netherite_gear'
                },
                {
                    "item": "woldsvaults:chromatic_steel_vault_infuser"
                },
                {
                    "item": "minecraft:crafting_table"
                }
            ],
            "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:ether_gas\"}",
            "output": {
                "count": 1,
                "item": "mifa:processing_addon_4",
                "nbt": "{TitaniumAugment:{Processing:5.0f}}"
            },
            "processingTime": 200
        }
    )

    event.custom(
        {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [
                {
                    "item": "the_vault:perfect_painite"
                },
                {
                    "item": "the_vault:perfect_painite"
                },
                {
                    "item": "the_vault:memory_powder"
                },
                {
                    "item": "the_vault:memory_powder"
                },
                {
                    "item": 'industrialforegoing:gold_gear'
                },
                {
                    "item": 'industrialforegoing:gold_gear'
                },
                {
                    "item": "minecraft:blaze_rod"
                },
                {
                    "item": "minecraft:blaze_rod"
                }
            ],
            "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:latex\"}",
            "output": {
                "count": 1,
                "item": "industrialforegoing:efficiency_addon_1",
                "nbt": "{TitaniumAugment:{Efficiency:2.0f}}"
            },
            "processingTime": 200
        }
    )

    event.custom(
        {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [
                {
                    "item": "the_vault:extraordinary_painite"
                },
                {
                    "item": "the_vault:extraordinary_painite"
                },
                {
                    "item": "the_vault:memory_powder"
                },
                {
                    "item": "the_vault:memory_powder"
                },
                {
                    "item": "industrialforegoing:efficiency_addon_1"
                },
                {
                    "item": 'industrialforegoing:diamond_gear'
                },
                {
                    "item": "minecraft:blaze_rod"
                },
                {
                    "item": "minecraft:blaze_rod"
                }
            ],
            "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:latex\"}",
            "output": {
                "count": 1,
                "item": "industrialforegoing:efficiency_addon_2",
                "nbt": "{TitaniumAugment:{Efficiency:3.0f}}"
            },
            "processingTime": 200
        }
    )

    event.custom(
        {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [
                {
                    "item": "woldsvaults:pogominium_ingot"
                },
                {
                    "item": "woldsvaults:pogominium_ingot"
                },
                {
                    "item": "the_vault:memory_shard"
                },
                {
                    "item": "the_vault:memory_shard"
                },
                {
                    "item": "industrialforegoing:efficiency_addon_2"
                },
                {
                    "item": 'mifa:netherite_gear'
                },
                {
                    "item": "quark:blaze_lantern"
                },
                {
                    "item": "quark:blaze_lantern"
                }
            ],
            "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:pink_slime\"}",
            "output": {
                "count": 1,
                "item": "mifa:efficiency_addon_3",
                "nbt": "{TitaniumAugment:{Efficiency:4.0f}}"
            },
            "processingTime": 200
        }
    )

    event.custom(
        {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [
                {
                    "item": "the_vault:echoing_ingot"
                },
                {
                    "item": "the_vault:echoing_ingot"
                },
                {
                    "item": "the_vault:memory_shard"
                },
                {
                    "item": "the_vault:memory_shard"
                },
                {
                    "item": "mifa:efficiency_addon_3"
                },
                {
                    "item": 'mifa:netherite_gear'
                },
                {
                    "item": "quark:blaze_lantern"
                },
                {
                    "item": "quark:blaze_lantern"
                }
            ],
            "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:ether_gas\"}",
            "output": {
                "count": 1,
                "item": "mifa:efficiency_addon_4",
                "nbt": "{TitaniumAugment:{Efficiency:5.0f}}"
            },
            "processingTime": 200
        }
    )



    event.shaped(Item.of('industrialforegoing:plant_gatherer'),
        [
            'PpP',
            'RMR',
            'ITI'
        ], {
            P: '#forge:plastic',
            p: 'minecraft:diamond_hoe',
            R: 'minecraft:diamond_axe',
            M: 'industrialforegoing:machine_frame_simple',
            T: 'minecraft:redstone_block',
            I: '#forge:gears/gold'
        })

    // event.shaped(Item.of('industrialforegoing:plant_gatherer'),
    //     [
    //         'PpP',
    //         'RMR',
    //         'ITI'
    //     ], {
    //     P: '#forge:plastic',
    //     p: 'minecraft:glass_bottle',
    //     R: 'the_vault:vault_essence',
    //     M: 'industrialforegoing:machine_frame_simple',
    //     T: 'minecraft:redstone_block',
    //     I: 'industrialforegoing:diamond_gear'
    // })

    event.shaped(Item.of('industrialforegoing:plant_sower'),
        [
            'PpP',
            'RMR',
            'ITI'
        ], {
            P: '#forge:plastic',
            p: 'minecraft:flower_pot',
            R: 'minecraft:piston',
            M: 'industrialforegoing:machine_frame_pity',
            T: 'minecraft:redstone_block',
            I: 'industrialforegoing:iron_gear'
        })

    event.shaped(Item.of('industrialforegoing:mob_slaughter_factory'),
        [
            'PpP',
            'RMR',
            'ITI'
        ], {
            P: '#forge:plastic',
            p: 'industrialforegoing:diamond_gear',
            R: 'minecraft:diamond_sword',
            M: 'industrialforegoing:machine_frame_simple',
            T: 'minecraft:redstone_block',
            I: 'minecraft:diamond_axe'
        })

    event.shaped(Item.of('industrialforegoing:animal_rancher'),
        [
            'PPP',
            'RMR',
            'ITI'
        ], {
            P: '#forge:plastic',
            R: 'minecraft:shears',
            M: 'industrialforegoing:machine_frame_simple',
            T: 'minecraft:bucket',
            I: 'industrialforegoing:gold_gear'
        })

    event.shaped(Item.of('industrialforegoing:enchantment_extractor'),
        [
            'PNP',
            'BMB',
            'ITI'
        ], {
            P: '#forge:plastic',
            N: 'the_vault:omega_pog',
            B: 'woldsvaults:extraordinary_pog_prism',
            M: 'industrialforegoing:machine_frame_supreme',
            I: 'the_vault:vault_diamond_block_1',
            T: 'the_vault:chromatic_gold_block'
        }).id('industrialforegoing:enchantment_extractor')

    event.shaped(Item.of('industrialforegoing:enchantment_applicator'),
        [
            'PPP',
            'BMB',
            'IBI'
        ], {
            P: '#forge:plastic',
            B: 'the_vault:vault_anvil',
            M: 'industrialforegoing:machine_frame_supreme',
            I: 'industrialforegoing:gold_gear'
        }).id('industrialforegoing:enchantment_applicator')

    event.shaped(Item.of('industrialforegoing:mob_crusher'),
        [
            'PpP',
            'RMR',
            'ITI'
        ], {
            P: '#forge:plastic',
            p: 'minecraft:netherite_sword',
            R: 'the_vault:magic_silk_block',
            M: 'industrialforegoing:machine_frame_advanced',
            T: 'the_vault:chromatic_steel_block',
            I: 'industrialforegoing:diamond_gear'
        })



    event.shaped(Item.of('industrialforegoing:hydroponic_bed'),
        [
            'PpP',
            'RMR',
            'ITI'
        ], {
            P: '#forge:plastic',
            p: 'the_vault:packed_vault_meat_block',
            R: 'minecraft:diamond_hoe',
            M: 'industrialforegoing:machine_frame_simple',
            T: 'industrialforegoing:fertilizer',
            I: 'industrialforegoing:diamond_gear'
        })

    event.shaped(Item.of('industrialforegoing:spores_recreator'),
        [
            'PPP',
            'RMR',
            'ITI'
        ], {
            P: '#forge:plastic',
            R: '#forge:mushrooms',
            M: 'industrialforegoing:machine_frame_simple',
            T: 'the_vault:chromatic_steel_block',
            I: 'industrialforegoing:gold_gear'
        })


    event.shaped(Item.of('industrialforegoing:common_black_hole_unit'),
        [
            'PPP',
            'RMR',
            'RTR'
        ], {
            P: 'the_vault:chromatic_iron_ingot',
            R: '#forge:chests/wooden',
            M: 'industrialforegoing:iron_gear',
            T: 'industrialforegoing:machine_frame_pity'
        })

    event.shaped(Item.of('industrialforegoing:pity_black_hole_unit'),
        [
            'PPP',
            'RMR',
            'CTC'
        ], {
            P: '#forge:plastic',
            C: '#forge:chests/wooden',
            R: 'the_vault:vault_essence',
            M: 'minecraft:ender_pearl',
            T: 'industrialforegoing:machine_frame_pity'
        })

    event.shaped(Item.of('industrialforegoing:simple_black_hole_unit'),
        [
            'PPP',
            'RMR',
            'CTC'
        ], {
            P: '#forge:plastic',
            C: 'the_vault:chromatic_steel_block',
            R: 'the_vault:extraordinary_larimar',
            M: 'the_vault:vault_diamond',
            T: 'industrialforegoing:machine_frame_simple'
        })

    event.shaped(Item.of('industrialforegoing:advanced_black_hole_unit'),
        [
            'PPP',
            'RMR',
            'CTC'
        ], {
            P: 'the_vault:extraordinary_larimar',
            C: 'the_vault:chromatic_steel_block',
            R: 'the_vault:mystical_powder',
            M: 'the_vault:vault_diamond_block',
            T: 'industrialforegoing:machine_frame_advanced'
        })

    event.shaped(Item.of('industrialforegoing:supreme_black_hole_unit'),
        [
            'PPP',
            'RMR',
            'CTC'
        ], {
            P: 'the_vault:extraordinary_black_opal',
            C: 'the_vault:echoing_ingot',
            R: 'the_vault:echo_pog',
            M: 'the_vault:vault_diamond_block',
            T: 'industrialforegoing:machine_frame_supreme'
        })

    event.shaped(Item.of('industrialforegoing:common_black_hole_tank'),
        [
            'PPP',
            'RMR',
            'RTR'
        ], {
            P: 'the_vault:chromatic_iron_ingot',
            R: 'minecraft:bucket',
            M: 'industrialforegoing:iron_gear',
            T: 'industrialforegoing:machine_frame_pity'
        })

    event.shaped(Item.of('industrialforegoing:pity_black_hole_tank'),
        [
            'PPP',
            'RMR',
            'CTC'
        ], {
            P: '#forge:plastic',
            C: 'minecraft:bucket',
            R: 'the_vault:vault_essence',
            M: 'minecraft:ender_pearl',
            T: 'industrialforegoing:machine_frame_pity'
        })

    event.shaped(Item.of('industrialforegoing:simple_black_hole_tank'),
        [
            'PbP',
            'RMR',
            'CTC'
        ], {
            P: '#forge:plastic',
            b: 'minecraft:bucket',
            C: 'the_vault:chromatic_steel_block',
            R: 'the_vault:extraordinary_larimar',
            M: 'the_vault:vault_diamond',
            T: 'industrialforegoing:machine_frame_simple'
        })

    event.shaped(Item.of('industrialforegoing:advanced_black_hole_tank'),
        [
            'PbP',
            'RMR',
            'CTC'
        ], {
            P: 'the_vault:extraordinary_larimar',
            b: 'minecraft:bucket',
            C: 'the_vault:chromatic_steel_block',
            R: 'the_vault:mystical_powder',
            M: 'the_vault:vault_diamond_block',
            T: 'industrialforegoing:machine_frame_advanced'
        })

    event.shaped(Item.of('industrialforegoing:supreme_black_hole_tank'),
        [
            'PbP',
            'RMR',
            'CTC'
        ], {
            P: 'the_vault:extraordinary_black_opal',
            b: 'minecraft:bucket',
            C: 'the_vault:echoing_ingot',
            R: 'the_vault:echo_pog',
            M: 'the_vault:vault_diamond_block',
            T: 'industrialforegoing:machine_frame_supreme'
        })

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": "the_vault:vault_essence"
            },
            {
                "item": "the_vault:vault_essence"
            },
            {
                "item": "minecraft:glass_pane"
            },
            {
                "item": "minecraft:glass_pane"
            },
            {
                "item": "the_vault:vault_stone"
            },
            {
                "item": "the_vault:vault_stone"
            },
            {
                "item": "the_vault:vault_stone"
            },
            {
                "item": "the_vault:vault_stone"
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:latex\"}",
        "output": {
            "count": 1,
            "item": "industrialforegoing:range_addon0",
            "nbt": "{TitaniumAugment:{Range:0.0f}}"
        },
        "processingTime": 200
    })

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": "the_vault:vault_essence"
            },
            {
                "item": "the_vault:vault_essence"
            },
            {
                "item": "minecraft:glass_pane"
            },
            {
                "item": "minecraft:glass_pane"
            },
            {
                "item": "minecraft:lapis_lazuli"
            },
            {
                "item": "minecraft:lapis_lazuli"
            },
            {
                "item": "minecraft:lapis_lazuli"
            },
            {
                "item": "minecraft:lapis_lazuli"
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:latex\"}",
        "output": {
            "count": 1,
            "item": "industrialforegoing:range_addon1",
            "nbt": "{TitaniumAugment:{Range:1.0f}}"
        },
        "processingTime": 200
    })

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": "the_vault:vault_essence"
            },
            {
                "item": "the_vault:vault_essence"
            },
            {
                "item": "minecraft:glass_pane"
            },
            {
                "item": "minecraft:glass_pane"
            },
            {
                "item": "the_vault:magic_silk"
            },
            {
                "item": "the_vault:magic_silk"
            },
            {
                "item": "the_vault:magic_silk"
            },
            {
                "item": "the_vault:magic_silk"
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:latex\"}",
        "output": {
            "count": 1,
            "item": "industrialforegoing:range_addon2",
            "nbt": "{TitaniumAugment:{Range:2.0f}}"
        },
        "processingTime": 200
    })

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": "the_vault:vault_essence"
            },
            {
                "item": "the_vault:vault_essence"
            },
            {
                "item": "minecraft:glass_pane"
            },
            {
                "item": "minecraft:glass_pane"
            },
            {
                "item": "the_vault:chromatic_iron_ingot"
            },
            {
                "item": "the_vault:chromatic_iron_ingot"
            },
            {
                "item": "the_vault:chromatic_iron_ingot"
            },
            {
                "item": "the_vault:chromatic_iron_ingot"
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:latex\"}",
        "output": {
            "count": 1,
            "item": "industrialforegoing:range_addon2",
            "nbt": "{TitaniumAugment:{Range:2.0f}}"
        },
        "processingTime": 200
    })

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": "the_vault:perfect_larimar"
            },
            {
                "item": "the_vault:perfect_larimar"
            },
            {
                "item": "minecraft:glass_pane"
            },
            {
                "item": "minecraft:glass_pane"
            },
            {
                "item": "the_vault:chromatic_iron_ingot"
            },
            {
                "item": "the_vault:chromatic_iron_ingot"
            },
            {
                "item": "the_vault:chromatic_iron_ingot"
            },
            {
                "item": "the_vault:chromatic_iron_ingot"
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:latex\"}",
        "output": {
            "count": 1,
            "item": "industrialforegoing:range_addon3",
            "nbt": "{TitaniumAugment:{Range:3.0f}}"
        },
        "processingTime": 200
    })

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": "the_vault:perfect_larimar"
            },
            {
                "item": "the_vault:perfect_larimar"
            },
            {
                "item": "minecraft:glass_pane"
            },
            {
                "item": "minecraft:glass_pane"
            },
            {
                "item": "the_vault:chromatic_steel_ingot"
            },
            {
                "item": "the_vault:chromatic_steel_ingot"
            },
            {
                "item": "the_vault:chromatic_steel_ingot"
            },
            {
                "item": "the_vault:chromatic_steel_ingot"
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:latex\"}",
        "output": {
            "count": 1,
            "item": "industrialforegoing:range_addon4",
            "nbt": "{TitaniumAugment:{Range:4.0f}}"
        },
        "processingTime": 200
    })

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": "the_vault:extraordinary_larimar"
            },
            {
                "item": "the_vault:perfect_larimar"
            },
            {
                "item": "minecraft:glass_pane"
            },
            {
                "item": "minecraft:glass_pane"
            },
            {
                "item": "the_vault:vault_diamond"
            },
            {
                "item": "the_vault:vault_diamond"
            },
            {
                "item": "the_vault:vault_diamond"
            },
            {
                "item": "the_vault:vault_diamond"
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:latex\"}",
        "output": {
            "count": 1,
            "item": "industrialforegoing:range_addon5",
            "nbt": "{TitaniumAugment:{Range:5.0f}}"
        },
        "processingTime": 200
    })

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": "the_vault:extraordinary_larimar"
            },
            {
                "item": "the_vault:extraordinary_larimar"
            },
            {
                "item": "minecraft:glass_pane"
            },
            {
                "item": "minecraft:glass_pane"
            },
            {
                "item": "the_vault:vault_diamond"
            },
            {
                "item": "the_vault:vault_diamond"
            },
            {
                "item": "the_vault:perfect_larimar"
            },
            {
                "item": "the_vault:perfect_larimar"
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:latex\"}",
        "output": {
            "count": 1,
            "item": "industrialforegoing:range_addon6",
            "nbt": "{TitaniumAugment:{Range:6.0f}}"
        },
        "processingTime": 200
    })

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": "the_vault:extraordinary_larimar"
            },
            {
                "item": "the_vault:extraordinary_larimar"
            },
            {
                "item": "minecraft:glass_pane"
            },
            {
                "item": "minecraft:glass_pane"
            },
            {
                "item": "the_vault:perfect_larimar"
            },
            {
                "item": "the_vault:perfect_larimar"
            },
            {
                "item": "the_vault:perfect_larimar"
            },
            {
                "item": "the_vault:perfect_larimar"
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:latex\"}",
        "output": {
            "count": 1,
            "item": "industrialforegoing:range_addon7",
            "nbt": "{TitaniumAugment:{Range:7.0f}}"
        },
        "processingTime": 200
    })

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": "the_vault:extraordinary_larimar"
            },
            {
                "item": "the_vault:extraordinary_larimar"
            },
            {
                "item": "minecraft:glass_pane"
            },
            {
                "item": "minecraft:glass_pane"
            },
            {
                "item": "the_vault:extraordinary_larimar"
            },
            {
                "item": "the_vault:extraordinary_larimar"
            },
            {
                "item": "the_vault:extraordinary_larimar"
            },
            {
                "item": "the_vault:extraordinary_larimar"
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:latex\"}",
        "output": {
            "count": 1,
            "item": "industrialforegoing:range_addon8",
            "nbt": "{TitaniumAugment:{Range:8.0f}}"
        },
        "processingTime": 200
    })

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": "the_vault:extraordinary_larimar"
            },
            {
                "item": "the_vault:extraordinary_larimar"
            },
            {
                "item": "minecraft:glass_pane"
            },
            {
                "item": "minecraft:glass_pane"
            },
            {
                "item": "the_vault:vault_diamond_block"
            },
            {
                "item": "the_vault:extraordinary_larimar"
            },
            {
                "item": "the_vault:extraordinary_larimar"
            },
            {
                "item": "the_vault:extraordinary_larimar"
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:latex\"}",
        "output": {
            "count": 1,
            "item": "industrialforegoing:range_addon9",
            "nbt": "{TitaniumAugment:{Range:9.0f}}"
        },
        "processingTime": 200
    })

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": "the_vault:extraordinary_larimar"
            },
            {
                "item": "the_vault:extraordinary_larimar"
            },
            {
                "item": "minecraft:glass_pane"
            },
            {
                "item": "minecraft:glass_pane"
            },
            {
                "item": "the_vault:vault_diamond_block"
            },
            {
                "item": "the_vault:vault_diamond_block"
            },
            {
                "item": "the_vault:extraordinary_larimar"
            },
            {
                "item": "the_vault:extraordinary_larimar"
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:latex\"}",
        "output": {
            "count": 1,
            "item": "industrialforegoing:range_addon10",
            "nbt": "{TitaniumAugment:{Range:10.0f}}"
        },
        "processingTime": 200
    })

    event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
            {
                "item": "the_vault:extraordinary_larimar"
            },
            {
                "item": "the_vault:extraordinary_larimar"
            },
            {
                "item": "industrialforegoing:range_addon10"
            },
            {
                "item": "minecraft:glass_pane"
            },
            {
                "item": "the_vault:vault_diamond_block"
            },
            {
                "item": "the_vault:vault_diamond_block"
            },
            {
                "item": "the_vault:perfect_echo_gem"
            },
            {
                "item": "the_vault:perfect_echo_gem"
            }
        ],
        "inputFluid": "{Amount:1000,FluidName:\"industrialforegoing:latex\"}",
        "output": {
            "count": 1,
            "item": "industrialforegoing:range_addon11",
            "nbt": "{TitaniumAugment:{Range:11.0f}}"
        },
        "processingTime": 200
    })





})