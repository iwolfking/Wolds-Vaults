
onEvent("recipes", event => {
    event.custom({
        "type": "immersiveengineering:blueprint",
        "inputs": [
            {
                "tag": "forge:treated_wood_slab"
            },
            {
                "item": "the_vault:perfect_larimar"
            },
            {
                "tag": "forge:dusts/redstone"
            },
            {
                "tag": "forge:wires/electrum"
            },
            {
                "item": "the_vault:vault_diamond"
            }
        ],
        "category": "components",
        "result": {
            "item": "immersiveengineering:component_electronic"
        }
    }).id('immersiveengineering:blueprint/component_electronic')

    event.custom({
        "type": "immersiveengineering:blueprint",
        "inputs": [
            {
                "tag": "forge:glass"
            },
            {
                "tag": "forge:plates/nickel"
            },
            {
                "tag": "forge:wires/copper"
            },
            {
                "item": "woldvaults:vault_essence_block"
            },
            {
                "item": "the_vault:vault_diamond"
            }
        ],
        "category": "components",
        "result": {
            "item": "immersiveengineering:electron_tube",
            "count": 3
        }
    }).id('immersiveengineering:blueprint/electron_tube')

    event.custom({
        "type": "immersiveengineering:blueprint",
        "inputs": [
            {
                "tag": "forge:plates/plastic"
            },
            {
                "count": 2,
                "base_ingredient": {
                    "item": "immersiveengineering:electron_tube"
                }
            },
            {
                "tag": "forge:wires/aluminum"
            },
            {
                "item": "woldvaults:chromatic_gold_ingot"
            },
            {
                "item": "the_vault:vault_diamond"
            }
        ],
        "category": "components",
        "result": {
            "item": "immersiveengineering:component_electronic_adv"
        }
    }).id('immersiveengineering:blueprint/component_electronic_adv')

    event.custom({
        "type": "immersiveengineering:blueprint",
        "inputs": [
            {
                "tag": "forge:plates/plastic"
            },
            {
                "tag": "forge:plates/copper"
            },
            {
                "item": "the_vault:magic_silk_block"
            }
        ],
        "category": "components",
        "result": {
            "item": "immersiveengineering:circuit_board"
        }
    }).id('immersiveengineering:blueprint/circuit_board')

    event.custom({
        "type": "immersiveengineering:blueprint",
        "inputs": [
            {
                "tag": "forge:glass"
            },
            {
                "count": 3,
                "base_ingredient": [
                    {
                        "item": "minecraft:paper"
                    },
                    {
                        "item": "minecraft:bamboo"
                    }
                ]
            },
            {
                "tag": "forge:ingots/copper"
            },
            {
                "item": "the_vault:perfect_larimar"
            }
        ],
        "category": "components",
        "result": {
            "item": "immersiveengineering:light_bulb",
            "count": 3
        }
    })
})