onEvent("recipes", event => {
    event.custom({
        "bookshelf:load_conditions": [
            {
                "type": "bookshelf:item_exists",
                "values": "snad:suol_snad"
            }
        ],
        "type": "botanypotstiers:soil",
        "input": {
            "item": "snad:suol_snad"
        },
        "display": {
            "block": "snad:suol_snad"
        },
        "categories": [
            "soul_sand",
            "nether"
        ],
        "growthModifier": 1.5
    })

    event.custom(
        {
            "bookshelf:load_conditions": [
                {
                    "type": "bookshelf:item_exists",
                    "values": [
                        "mysticalagriculture:gaia_spirit_seeds",
                        "mysticalagriculture:gaia_spirit_essence"
                    ]
                }
            ],
            "type": "botanypotstiers:crop",
            "seed": {
                "item": "mysticalagriculture:gaia_spirit_seeds"
            },
            "categories": [
                "insanium"
            ],
            "growthTicks": 4800,
            "display": {
                "type": "botanypotstiers:aging",
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
        }
    )
})



