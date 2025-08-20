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
})






