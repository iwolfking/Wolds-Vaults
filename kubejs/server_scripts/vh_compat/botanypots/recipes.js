onEvent("recipes", event => {
    event.custom({
        "type": "botanypots:crop",
        "seed": {
            "item": "mysticalagriculture:chromatic_iron_seeds"
        },
        "categories": [
            "supremium"
        ],
        "growthTicks": 1800,
        "display": {
            "type": "botanypots:aging",
            "block": "mysticalagriculture:iron_crop"
        },
        "drops": [
            {
                "chance": 1.00,
                "output": {
                    "item": "mysticalagriculture:chromatic_iron_essence"
                }
            }
        ]
    })

    event.custom({
        "type": "botanypots:crop",
        "seed": {
            "item": "mysticalagriculture:gaia_spirit_seeds"
        },
        "categories": [
            "insanium"
        ],
        "growthTicks": 4800,
        "display": {
            "type": "botanypots:aging",
            "block": "mysticalagriculture:gaia_spirit_crop"
        },
        "drops": [
            {
                "chance": 1.00,
                "output": {
                    "item": "mysticalagriculture:gaia_spirit_essence"
                }
            }
        ]
    })

    event.custom({
        "type": "botanypotstiers:crop",
        "seed": {
            "item": "mysticalagriculture:chromatic_iron_seeds"
        },
        "categories": [
            "supremium"
        ],
        "growthTicks": 1800,
        "display": {
            "type": "botanypotstiers:aging",
            "block": "mysticalagriculture:iron_crop"
        },
        "drops": [
            {
                "chance": 1.00,
                "output": {
                    "item": "mysticalagriculture:chromatic_iron_essence"
                }
            }
        ]
    })

    event.custom(
        {
            "type": "botanypots:crop",
            "seed": {
                "item": "minecraft:potato"
            },
            "categories": [
                "dirt",
                "farmland"
            ],
            "growthTicks": 1200,
            "display": {
                "type": "botanypots:aging",
                "block": "minecraft:potatoes"
            },
            "drops": [
                {
                    "chance": 1.00,
                    "output": {
                        "item": "minecraft:potato"
                    },
                    "minRolls": 1,
                    "maxRolls": 2
                },
                {
                    "chance": 0.02,
                    "output": {
                        "item": "minecraft:poisonous_potato"
                    },
                    "minRolls": 1,
                    "maxRolls": 1
                }
            ]
        }
    ).id('botanypots:minecraft/potato')

        const materials = {
        // terracotta
        "terracotta": "terracotta",
        "white_terracotta": "white",
        "red_terracotta": "red",
        "lime_terracotta": "lime",
        "light_gray_terracotta": "light_gray",
        "gray_terracotta": "gray",
        "black_terracotta": "black",
        "orange_terracotta": "orange",
        "yellow_terracotta": "yellow",
        "cyan_terracotta": "cyan",
        "purple_terracotta": "purple",
        "blue_terracotta": "blue",
        "light_blue_terracotta": "light_blue",
        "brown_terracotta": "brown",
        "pink_terracotta": "pink",
        "green_terracotta": "green",
        "magenta_terracotta": "magenta",
        // glazed terracotta
        "white_glazed_terracotta": "white_glazed",
        "red_glazed_terracotta": "red_glazed",
        "lime_glazed_terracotta": "lime_glazed",
        "light_gray_glazed_terracotta": "light_gray_glazed",
        "gray_glazed_terracotta": "gray_glazed",
        "black_glazed_terracotta": "black_glazed",
        "orange_glazed_terracotta": "orange_glazed",
        "yellow_glazed_terracotta": "yellow_glazed",
        "cyan_glazed_terracotta": "cyan_glazed",
        "purple_glazed_terracotta": "purple_glazed",
        "blue_glazed_terracotta": "blue_glazed",
        "light_blue_glazed_terracotta": "light_blue_glazed",
        "brown_glazed_terracotta": "brown_glazed",
        "pink_glazed_terracotta": "pink_glazed",
        "green_glazed_terracotta": "green_glazed",
        "magenta_glazed_terracotta": "magenta_glazed",
        // concrete
        "white_concrete": "white_concrete",
        "red_concrete": "red_concrete",
        "lime_concrete": "lime_concrete",
        "light_gray_concrete": "light_gray_concrete",
        "gray_concrete": "gray_concrete",
        "black_concrete": "black_concrete",
        "orange_concrete": "orange_concrete",
        "yellow_concrete": "yellow_concrete",
        "cyan_concrete": "cyan_concrete",
        "purple_concrete": "purple_concrete",
        "blue_concrete": "blue_concrete",
        "light_blue_concrete": "light_blue_concrete",
        "brown_concrete": "brown_concrete",
        "pink_concrete": "pink_concrete",
        "green_concrete": "green_concrete",
        "magenta_concrete": "magenta_concrete"
    };

    for (const [materialId, materialName] of Object.entries(materials)) {

        // Hopper Botany Pot
        event.shaped(Item.of(`botanypots:${materialId}_hopper_botany_pot`), [
            ' B ',
            'CSC',
            ' H '
        ], {
            B: 'the_vault:gem_pog',
            C: 'the_vault:black_chromatic_steel_ingot',
            S: `botanypots:${materialId}_botany_pot`,
            H: 'minecraft:hopper'
        }).id(`botanypots:${materialId}_hopper_botany_pot`);

        // Regular Botany Pot
        event.shaped(Item.of(`botanypots:${materialId}_botany_pot`), [
            'AMA',
            'APA',
            'CCC'
        ], {
            A: `minecraft:${materialId}`,
            M: 'woldsvaults:chroma_core',
            P: 'the_vault:packed_vault_meat_block',
            C: 'the_vault:chromatic_steel_ingot'
        }).id(`botanypots:${materialId}_botany_pot`);
    }

})