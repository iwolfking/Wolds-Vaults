let removedOutputsMek = [
];
onEvent("recipes", event => {
    let mekanismMetals = ['tin', 'bronze', 'osmium', 'lead', 'uranium']
    let vanillaMetals = ['iron', 'gold', 'copper']
    let thermalMetals = ['silver', 'nickel']
    let vaultOreGems = ['larimar', 'benitoite', 'painite', 'black_opal', 'alexandrite', 'iskallium', 'gorginite', 'sparkletine', 'ashium', 'bomignite', 'tubium', 'wutodie', 'upaline', 'petzanite', 'xenium', 'echo']

    removedOutputsMek.forEach(id => {
        event.remove({ 'output': `${id}` })
    })


    //TODO: Rework Mekanism catalyst generating
    // event.custom({
    //     "type": "mekanism:nucleosynthesizing",
    //     "duration": 1250,
    //     "gasInput": {
    //         "amount": 10,
    //         "gas": "mekanism:antimatter"
    //     },
    //     "itemInput": {
    //         "ingredient": {
    //             "item": "minecraft:netherite_scrap"
    //         }
    //     },
    //     "output": {
    //         "item": "the_vault:vault_catalyst_fragment"
    //     }
    // })

    mekanismMetals.forEach(metal => {
        event.custom(
            {
                "type": "mekanism:combining",
                "extraInput": {
                    "ingredient": {
                        "item": "the_vault:chromatic_iron_ingot"
                    }
                },
                "mainInput": {
                    "amount": 1,
                    "ingredient": {
                        "tag": `forge:dusts/${metal}`
                    }
                },
                "output": {
                    "item": `mekanism:ingot_${metal}`
                }
            }
        )
    })

    vanillaMetals.forEach(metal => {
        event.custom(
            {
                "type": "mekanism:combining",
                "extraInput": {
                    "ingredient": {
                        "item": "the_vault:chromatic_iron_ingot"
                    }
                },
                "mainInput": {
                    "amount": 1,
                    "ingredient": {
                        "tag": `forge:dusts/${metal}`
                    }
                },
                "output": {
                    "item": `minecraft:${metal}_ingot`
                }
            }
        )
    })

    thermalMetals.forEach(metal => {
        event.custom(
            {
                "type": "mekanism:combining",
                "extraInput": {
                    "ingredient": {
                        "item": "the_vault:chromatic_iron_ingot"
                    }
                },
                "mainInput": {
                    "amount": 1,
                    "ingredient": {
                        "tag": `forge:dusts/${metal}`
                    }
                },
                "output": {
                    "item": `thermal:${metal}_ingot`
                }
            }
        )
    })

    event.custom(
        {
                "type": "mekanism:combining",
                "extraInput": {
                    "ingredient": {
                        "item": "the_vault:vault_stone"
                    }
                },
                "mainInput": {
                    "amount": 32,
                    "ingredient": {
                        "item": 'woldsvaults:nullite_fragment'
                    }
                },
                "output": {
                    "item": 'woldsvaults:nullite_ore'
                }
            }
    )

    vaultOreGems.forEach(gem => {
        event.custom(
            {
                "type": "mekanism:combining",
                "extraInput": {
                    "ingredient": {
                        "item": "the_vault:vault_stone"
                    }
                },
                "mainInput": {
                    "amount": 32,
                    "ingredient": {
                        "item": `the_vault:gem_${gem}`
                    }
                },
                "output": {
                    "item": `the_vault:ore_${gem}`,
                    "nbt": '{type:"vault_stone"}'
                }
            }
        )

        event.custom(
            {
                "type": "mekanism:combining",
                "extraInput": {
                    "ingredient": {
                        "item": "minecraft:diorite"
                    }
                },
                "mainInput": {
                    "amount": 32,
                    "ingredient": {
                        "item": `the_vault:gem_${gem}`
                    }
                },
                "output": {
                    "item": `the_vault:ore_${gem}`,
                    "nbt": '{type:"white"}'
                }
            }
        )

        event.custom(
            {
                "type": "mekanism:combining",
                "extraInput": {
                    "ingredient": {
                        "item": "minecraft:stone"
                    }
                },
                "mainInput": {
                    "amount": 32,
                    "ingredient": {
                        "item": `the_vault:gem_${gem}`
                    }
                },
                "output": {
                    "item": `the_vault:ore_${gem}`,
                    "nbt": '{type:"stone"}'
                }
            }
        )
    })





})