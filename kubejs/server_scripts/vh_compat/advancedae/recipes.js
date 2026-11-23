onEvent("recipes", event => {
    event.shaped(Item.of('advanced_ae:reaction_chamber'),
        [
            'FMF',
            'FCF',
            'DBD'
        ], {
        F: 'ae2:fluix_block',
        D: 'the_vault:black_chromatic_steel_ingot',
        M: 'ae2:condenser',
        C: 'the_vault:echo_pog',
        B: 'the_vault:chromatic_steel_block'
    }).id('advanced_ae:reactionchamber')

    event.shaped(Item.of('advanced_ae:quantum_structure'),
        [
            'GSG',
            'SXS',
            'GSG'
        ], {
        G: 'ae2:quartz_glass',
        S: 'the_vault:chromatic_steel_ingot',
        X: 'the_vault:perfect_black_opal'
    }).id('advanced_ae:quantumstructure')

    event.custom(
        {
            "type": "advanced_ae:reaction",
            "energy": 200000,
            "fluid": {
                "fluidStack": {
                    "Amount": 100,
                    "FluidName": "minecraft:lava"
                }
            },
            "input_items": [
                {
                    "amount": 1,
                    "ingredient": {
                        "item": "ae2:singularity"
                    }
                },
                {
                    "amount": 2,
                    "ingredient": {
                        "item": "the_vault:extraordinary_wutodie"
                    }
                },
                {
                    "amount": 2,
                    "ingredient": {
                        "item": "the_vault:extraordinary_painite"
                    }
                },
                {
                    "amount": 2,
                    "ingredient": {
                        "item": "the_vault:perfect_black_opal"
                    }
                }
            ],
            "output": {
                "#": 2,
                "#c": "ae2:i",
                "id": "advanced_ae:shattered_singularity"
            }
        }
    ).id('advanced_ae:shatteredsingularity')

    event.custom(
        {
            "type": "advanced_ae:reaction",
            "energy": 1000000,
            "fluid": {
                "fluidStack": {
                    "Amount": 1000,
                    "FluidName": "advanced_ae:quantum_infusion_source"
                }
            },
            "input_items": [
                {
                    "amount": 8,
                    "ingredient": {
                        "item": "advanced_ae:quantum_alloy"
                    }
                },
                {
                    "amount": 2,
                    "ingredient": {
                        "item": "the_vault:perfect_echo"
                    }
                },
                {
                    "amount": 1,
                    "ingredient": {
                        "item": "the_vault:gem_pog"
                    }
                }
            ],
            "output": {
                "#": 1,
                "#c": "ae2:i",
                "id": "advanced_ae:quantum_alloy_plate"
            }
        }
    ).id('advanced_ae:quantum_alloy_plate')

    event.custom(
        {
            "type": "advanced_ae:reaction",
            "energy": 200000,
            "fluid": {
                "fluidStack": {
                    "Amount": 1000,
                    "FluidName": "advanced_ae:quantum_infusion_source"
                }
            },
            "input_items": [
                {
                    "amount": 4,
                    "ingredient": {
                        "item": "the_vault:vault_ingot"
                    }
                },
                {
                    "amount": 4,
                    "ingredient": {
                        "item": "advanced_ae:shattered_singularity"
                    }
                },
                {
                    "amount": 4,
                    "ingredient": {
                        "item": "ae2:singularity"
                    }
                }
            ],
            "output": {
                "#": 1,
                "#c": "ae2:i",
                "id": "advanced_ae:quantum_alloy"
            }
        }
    ).id('advanced_ae:quantum_alloy')
})