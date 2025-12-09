let removedOutputsPC = [
    "pneumaticcraft:ingot_iron_compressed",
    "pneumaticcraft:printed_circuit_board",
    "pneumaticcraft:pressure_tube",
    "pneumaticcraft:spawner_core_shell",
    "pneumaticcraft:gps_tool",
    "pneumaticcraft:unassembled_netherite_drill_bit",
    "pneumaticcraft:memory_stick",
    "pneumaticcraft:vortex_cannon",
    "pneumaticcraft:amadron_tablet",
    "pneumaticcraft:minigun",
    "pneumaticcraft:jackhammer",
    "pneumaticcraft:drone",
    "pneumaticcraft:crop_support",
    "pneumaticcraft:pressure_chamber_wall",
    "pneumaticcraft:aerial_interface",
    "pneumaticcraft:refinery",
    "pneumaticcraft:refinery_output",
    "pneumaticcraft:small_tank",
    "pneumaticcraft:medium_tank",
    "pneumaticcraft:large_tank",
    "pneumaticcraft:spawner_extractor",
    "pneumaticcraft:reinforced_stone",
    "pneumaticcraft:jet_boots_upgrade_1",
    "pneumaticcraft:jet_boots_upgrade_2",
    "pneumaticcraft:jet_boots_upgrade_3",
    "pneumaticcraft:jet_boots_upgrade_4",
    "pneumaticcraft:jet_boots_upgrade_5",
    "pneumaticcraft:jumping_upgrade_1",
    "pneumaticcraft:jumping_upgrade_2",
    "pneumaticcraft:jumping_upgrade_3",
    "pneumaticcraft:jumping_upgrade_4",
    "pneumaticcraft:elytra_upgrade",
    "pneumaticcraft:air_canister"
];
onEvent("recipes", event => {
    removedOutputsPC.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.remove({ 'id': 'pneumaticcraft:explosion_crafting/compressed_iron_ingot' })
    event.remove({ id: 'pneumaticcraft:explosion_crafting/compressed_iron_block' })
    event.remove({ 'id': 'pneumaticcraft:pressure_chamber/compressed_iron_ingot' })
    event.remove({ id: 'pneumaticcraft:pressure_chamber/compressed_iron_block' })
    event.remove({ 'id': 'pneumaticcraft:pressure_chamber/turbine_blade' })
    event.remove({ 'id': 'pneumaticcraft:pressure_chamber/transistor' })
    event.remove({ 'id': 'pneumaticcraft:pressure_chamber/capacitor' })
    event.remove({ 'id': 'pneumaticcraft:thermo_plant/diamond_drill_bit' })
    event.remove({ 'id': 'pneumaticcraft:thermo_plant/plastic_from_lpg' })
    event.remove({ 'id': 'pneumaticcraft:thermo_plant/plastic_from_biodiesel' })
    event.remove({ 'id': 'pneumaticcraft:thermo_plant/upgrade_matrix' })

    event.custom({
        "type": 'pneumaticcraft:explosion_crafting',
        "input": {
            "item": 'the_vault:chromatic_iron_ingot'
        },
        "loss_rate": 20,
        "results": [
            {
                "item": "pneumaticcraft:ingot_iron_compressed"
            }
        ]
    });

    event.custom({
        "type": 'pneumaticcraft:explosion_crafting',
        "input": {
            "item": 'the_vault:chromatic_iron_block'
        },
        "loss_rate": 20,
        "results": [
            {
                "item": "pneumaticcraft:compressed_iron_block"
            }
        ]
    });

    event.custom({
        "type": 'pneumaticcraft:pressure_chamber',
        "inputs": [
            {
                "item": 'the_vault:chromatic_iron_ingot'
            }
        ],
        "pressure": 2.0,
        "results": [
            {
                "item": "pneumaticcraft:ingot_iron_compressed"
            }
        ]
    });

    event.custom({
        "type": 'pneumaticcraft:pressure_chamber',
        "inputs": [
            {
                "item": 'the_vault:chromatic_iron_block'
            }
        ],
        "pressure": 2.0,
        "results": [
            {
                "item": "pneumaticcraft:compressed_iron_block"
            }
        ]
    });

    event.custom({
        "type": 'pneumaticcraft:pressure_chamber',
        "inputs": [
            {
                "item": 'the_vault:chromatic_steel_ingot'
            },
            {
                "type": "pneumaticcraft:stacked_item",
                "item": 'minecraft:redstone',
                "count": 4
            },
            {
                "item": 'minecraft:gold_ingot'
            }
        ],
        "pressure": 1.0,
        "results": [
            {
                "item": "pneumaticcraft:turbine_blade"
            }
        ]
    });

    event.custom({
        "type": 'pneumaticcraft:pressure_chamber',
        "inputs": [
            {
                "item": 'the_vault:chromatic_steel_ingot'
            },
            {
                "item": 'the_vault:vault_essence',
                "count": 1
            },
            {
                "item": 'minecraft:gold_ingot'
            },
            {
                "item": 'the_vault:perfect_larimar'
            },
            {
                "item": 'pneumaticcraft:plastic'
            }
        ],
        "pressure": 1.0,
        "results": [
            {
                "item": "pneumaticcraft:transistor"
            }
        ]
    });


    event.custom({
        "type": 'pneumaticcraft:pressure_chamber',
        "inputs": [
            {
                "item": 'the_vault:chromatic_steel_ingot'
            },
            {
                "item": 'minecraft:slime_ball'
            },
            {
                "item": 'minecraft:gold_ingot'
            },
            {
                "item": 'the_vault:perfect_benitoite'
            },
            {
                "item": 'pneumaticcraft:plastic'
            }
        ],
        "pressure": 1.0,
        "results": [
            {
                "item": "pneumaticcraft:capacitor"
            }
        ]
    });

    event.custom({
        "type": 'pneumaticcraft:pressure_chamber',
        "inputs": [
            {
                "type": "pneumaticcraft:stacked_item",
                "item": 'minecraft:iron_ingot',
                "count": 3
            },
            {
                "type": "pneumaticcraft:stacked_item",
                "item": 'minecraft:string',
                "count": 1
            },
            {
                "item": 'minecraft:leather',
                "count": 1
            }
        ],
        "pressure": 4.0,
        "results": [
            {
                "item": "minecraft:iron_horse_armor"
            }
        ]
    });

    event.custom({
        "type": 'pneumaticcraft:pressure_chamber',
        "inputs": [
            {
                "type": "pneumaticcraft:stacked_item",
                "item": 'minecraft:gold_ingot',
                "count": 3
            },
            {
                "type": "pneumaticcraft:stacked_item",
                "item": 'minecraft:string',
                "count": 1
            },
            {
                "item": 'minecraft:leather',
                "count": 1
            }
        ],
        "pressure": 4.0,
        "results": [
            {
                "item": "minecraft:golden_horse_armor"
            }
        ]
    });

    event.custom({
        "type": 'pneumaticcraft:pressure_chamber',
        "inputs": [
            {
                "type": "pneumaticcraft:stacked_item",
                "item": 'minecraft:diamond',
                "count": 3
            },
            {
                "type": "pneumaticcraft:stacked_item",
                "item": 'minecraft:string',
                "count": 1
            },
            {
                "item": 'minecraft:leather',
                "count": 1
            }
        ],
        "pressure": 4.0,
        "results": [
            {
                "item": "minecraft:diamond_horse_armor"
            }
        ]
    });


    event.custom({
        "type": 'pneumaticcraft:pressure_chamber',
        "inputs": [
            {
                "type": "pneumaticcraft:stacked_item",
                "item": 'pneumaticcraft:capacitor',
                "count": 2
            },
            {
                "type": "pneumaticcraft:stacked_item",
                "item": 'pneumaticcraft:transistor',
                "count": 2
            },
            {
                "item": 'pneumaticcraft:unassembled_pcb',
                "count": 1
            },
            {
                "type": "pneumaticcraft:stacked_item",
                "item": 'the_vault:black_chromatic_steel_ingot',
                "count": 2
            }
        ],
        "pressure": 2.0,
        "results": [
            {
                "item": "pneumaticcraft:printed_circuit_board"
            }
        ]
    });

    // event.custom({
    //     "type": 'pneumaticcraft:pressure_chamber',
    //     "inputs": [
    //         {
    //             "type": "pneumaticcraft:stacked_item",
    //             "item": 'the_vault:vault_catalyst_fragment',
    //             "count": 6
    //         },
    //         {
    //             "item": 'pneumaticcraft:plastic'
    //         }
    //     ],
    //     "pressure": 5.0,
    //     "results": [
    //         {
    //             "item": "the_vault:vault_catalyst"
    //         }
    //     ]
    // });

    event.custom({
        "type": 'pneumaticcraft:thermo_plant',
        "exothermic": false,
        "fluid_input": {
            "type": "pneumaticcraft:fluid",
            "amount": 100,
            "tag": "forge:biodiesel"
        },
        "fluid_output": {
            "amount": 1000,
            "fluid": "pneumaticcraft:plastic"
        },
        "item_input": {
            "item": "the_vault:gem_larimar"
        },
        "temperature": {
            "min_temp": 373
        }
    });

    event.custom({
        "type": 'pneumaticcraft:thermo_plant',
        "exothermic": false,
        "fluid_input": {
            "type": "pneumaticcraft:fluid",
            "amount": 8000,
            "tag": "forge:lpg"
        },
        "item_output": {
            "item": "pneumaticcraft:drill_bit_diamond"
        },
        "item_input": {
            "item": "the_vault:vault_diamond_block"
        },
        "temperature": {
            "min_temp": 500
        }
    });

    event.custom({
        "type": 'pneumaticcraft:thermo_plant',
        "exothermic": false,
        "fluid_input": {
            "type": "pneumaticcraft:fluid",
            "amount": 100,
            "tag": "forge:lpg"
        },
        "fluid_output": {
            "amount": 1000,
            "fluid": "pneumaticcraft:plastic"
        },
        "item_input": {
            "item": "the_vault:gem_larimar"
        },
        "temperature": {
            "min_temp": 373
        }
    });

    event.custom({
        "type": 'pneumaticcraft:thermo_plant',
        "exothermic": false,
        "fluid_input": {
            "type": "pneumaticcraft:fluid",
            "amount": 1000,
            "fluid": "minecraft:water"
        },
        "item_output": {
            "count": 2,
            "item": "pneumaticcraft:upgrade_matrix"
        },
        "item_input": {
            "item": "the_vault:perfect_larimar"
        },
        "pressure": 2.0,
        "temperature": {
            "min_temp": 273
        }
    });

    event.shaped(Item.of('pneumaticcraft:spawner_core_shell'),
        [
            'IGI',
            'GEG',
            'IGI'
        ], {
        I: 'pneumaticcraft:ingot_iron_compressed',
        G: 'pneumaticcraft:pressure_chamber_glass',
        E: 'the_vault:perfect_black_opal'
    })

    event.shaped(Item.of('pneumaticcraft:gps_tool'),
        [
            ' G ',
            'PEP',
            'PDP'
        ], {
        P: 'pneumaticcraft:plastic',
        G: 'minecraft:redstone_torch',
        E: '#forge:glass_panes',
        D: 'the_vault:vault_diamond'
    })

    event.shaped(Item.of('pneumaticcraft:memory_stick'),
        [
            'DGD',
            'PEP',
            'I I'
        ], {
        P: 'pneumaticcraft:plastic',
        G: 'the_vault:perfect_benitoite',
        E: 'minecraft:soul_sand',
        D: 'the_vault:vault_diamond',
        I: 'minecraft:gold_ingot'
    })

    event.shaped(Item.of('pneumaticcraft:vortex_cannon'),
        [
            'IDI',
            'C  ',
            'ILI'
        ], {
        I: 'pneumaticcraft:ingot_iron_compressed',
        D: 'the_vault:gem_pog',
        C: 'pneumaticcraft:air_canister',
        L: 'minecraft:lever'
    })

    event.shaped(Item.of('pneumaticcraft:minigun'),
        [
            'C  ',
            'DIH',
            'GL '
        ], {
        I: 'pneumaticcraft:ingot_iron_compressed',
        D: 'the_vault:gem_pog',
        C: 'pneumaticcraft:air_canister',
        L: 'minecraft:lever',
        H: 'pneumaticcraft:cannon_barrel',
        G: 'the_vault:black_chromatic_steel_ingot'
    })

    event.shaped(Item.of('pneumaticcraft:jackhammer'),
        [
            'PBP',
            'ITI',
            'DWD'
        ], {
        I: 'pneumaticcraft:ingot_iron_compressed',
        D: 'the_vault:vault_diamond_block',
        W: 'pneumaticcraft:pneumatic_cylinder',
        T: 'pneumaticcraft:pressure_tube',
        B: 'the_vault:extraordinary_black_opal',
        P: 'pneumaticcraft:plastic'
    })

    event.shaped(Item.of('pneumaticcraft:amadron_tablet'),
        [
            'GXG',
            'PEP',
            'PDP'
        ], {
        P: 'pneumaticcraft:plastic',
        G: 'the_vault:black_chromatic_steel_ingot',
        E: 'pneumaticcraft:gps_tool',
        D: 'pneumaticcraft:air_canister',
        X: 'the_vault:gem_pog'
    })

    event.shaped(Item.of('pneumaticcraft:drone'),
        [
            'BTB',
            'TPT',
            'XTX'
        ], {
        B: 'the_vault:black_chromatic_steel_ingot',
        T: 'pneumaticcraft:turbine_rotor',
        P: 'pneumaticcraft:printed_circuit_board',
        X: 'the_vault:gem_pog'
    })

    event.shaped(Item.of('8x pneumaticcraft:pressure_tube'),
        [
            'TPT'
        ], {
        P: 'the_vault:perfect_larimar',
        T: 'pneumaticcraft:ingot_iron_compressed',
    })

    event.shaped(Item.of('pneumaticcraft:spawner_extractor'),
        [
            'ITI',
            'WPW',
            'BDB'
        ], {
        I: 'pneumaticcraft:ingot_iron_compressed',
        T: 'pneumaticcraft:pressure_tube',
        W: 'pneumaticcraft:pressure_chamber_wall',
        P: 'pneumaticcraft:spawner_agitator',
        B: 'the_vault:chromatic_steel_block',
        D: 'pneumaticcraft:drill_pipe'
    })

    event.shaped(Item.of('pneumaticcraft:small_tank'),
        [
            'BTB',
            'TPT',
            'BTB'
        ], {
        B: 'the_vault:gem_larimar',
        T: 'pneumaticcraft:ingot_iron_compressed',
        P: '#forge:glass'
    })

    event.shaped(Item.of('pneumaticcraft:medium_tank'),
        [
            'BDB',
            'TPT',
            'BDB'
        ], {
        B: 'pneumaticcraft:plastic',
        T: 'the_vault:chromatic_steel_ingot',
        P: 'pneumaticcraft:advanced_pressure_tube',
        D: 'pneumaticcraft:small_tank'
    })

    event.shaped(Item.of('pneumaticcraft:large_tank'),
        [
            'BDB',
            'TPT',
            'BDB'
        ], {
        B: 'pneumaticcraft:plastic',
        T: 'the_vault:vault_diamond',
        P: 'pneumaticcraft:advanced_pressure_tube',
        D: 'pneumaticcraft:medium_tank'
    })

    event.shaped(Item.of('pneumaticcraft:refinery_output'),
        [
            'BBB',
            'TPT',
            'BBB'
        ], {
        B: 'pneumaticcraft:ingot_iron_compressed',
        T: '#forge:glass',
        P: 'the_vault:vault_diamond'
    })

    event.shaped(Item.of('pneumaticcraft:refinery'),
        [
            'BBB',
            'TPT',
            'BBB'
        ], {
        B: 'pneumaticcraft:reinforced_stone_slab',
        T: 'the_vault:perfect_larimar',
        P: 'pneumaticcraft:small_tank'
    })

    event.shaped(Item.of('pneumaticcraft:aerial_interface'),
        [
            'WHW',
            'PSP',
            'WTW'
        ], {
        W: 'pneumaticcraft:pressure_chamber_wall',
        H: 'pneumaticcraft:omnidirectional_hopper',
        P: 'the_vault:echo_pog',
        S: 'minecraft:nether_star',
        T: 'woldvaults:wold_star'
    })

    event.shaped(Item.of('pneumaticcraft:pressure_chamber_wall'),
        [
            'SBS',
            'S S',
            'SBS'
        ], {
        S: 'pneumaticcraft:reinforced_bricks',
        B: 'the_vault:gem_black_opal'
    })

    event.shaped(Item.of('pneumaticcraft:reinforced_stone', 8),
        [
            'SSS',
            'SIS',
            'SSS'
        ], {
        S: 'the_vault:vault_stone',
        I: 'pneumaticcraft:ingot_iron_compressed'
    })

    event.shaped(Item.of('pneumaticcraft:crop_support'),
        [
            'L L',
            'S S',
            'S S'
        ], {
        S: 'pneumaticcraft:ingot_iron_compressed',
        L: 'the_vault:perfect_larimar'
    })

    event.shaped(Item.of('pneumaticcraft:air_canister'),
        [
            ' T ',
            'SRS',
            'SRS'
        ], {
        S: 'pneumaticcraft:ingot_iron_compressed',
        T: 'pneumaticcraft:pressure_tube',
        R: 'the_vault:perfect_larimar'
    })

    event.shapeless('pneumaticcraft:unassembled_netherite_drill_bit', ["pneumaticcraft:drill_bit_diamond", "the_vault:echoing_ingot"])
    event.shapeless('9x pneumaticcraft:ingot_iron_compressed', ["pneumaticcraft:compressed_iron_block"])

})