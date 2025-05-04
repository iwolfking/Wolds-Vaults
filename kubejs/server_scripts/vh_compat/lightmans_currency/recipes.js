let removedOutputsLCT = [
    'lightmanscurrency:wallet_iron',
    'lightmanscurrency:wallet_gold',
    'lightmanscurrency:wallet_emerald',
    'lightmanscurrency:wallet_diamond',
    'lightmanscurrency:wallet_netherite'
];
onEvent("recipes", event => {
    removedOutputsLCT.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.custom({
        "type": "lightmanscurrency:crafting_wallet_upgrade",
        "group": "wallet_upgrading",
        "ingredients": [
            {
                "item": "lightmanscurrency:wallet_copper"
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
            },
            {
                "item": "the_vault:magic_silk_block"
            }
        ],
        "result": {
            "item": "lightmanscurrency:wallet_iron"
        }
    })

    event.custom({
        "type": "lightmanscurrency:crafting_wallet_upgrade",
        "group": "wallet_upgrading",
        "ingredients": [
            {
                "item": "lightmanscurrency:wallet_iron"
            },
            {
                "item": "the_vault:chromatic_gold_ingot"
            },
            {
                "item": "the_vault:chromatic_gold_ingot"
            },
            {
                "item": "the_vault:chromatic_gold_ingot"
            },
            {
                "item": "the_vault:chromatic_gold_ingot"
            },
            {
                "item": "the_vault:magic_silk_block"
            }
        ],
        "result": {
            "item": "lightmanscurrency:wallet_gold"
        }
    })

    event.custom({
        "type": "lightmanscurrency:crafting_wallet_upgrade",
        "group": "wallet_upgrading",
        "ingredients": [
            {
                "item": "lightmanscurrency:wallet_gold"
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
                "item": "minecraft:emerald_block"
            },
            {
                "item": "the_vault:gem_pog"
            }
        ],
        "result": {
            "item": "lightmanscurrency:wallet_emerald"
        }
    })

    event.custom({
        "type": "lightmanscurrency:crafting_wallet_upgrade",
        "group": "wallet_upgrading",
        "ingredients": [
            {
                "item": "lightmanscurrency:wallet_emerald"
            },
            {
                "item": "the_vault:vault_diamond_block"
            },
            {
                "item": "the_vault:vault_diamond_block"
            },
            {
                "item": "the_vault:vault_diamond_block"
            },
            {
                "item": "the_vault:vault_diamond_block"
            },
            {
                "item": "the_vault:gem_pog"
            }
        ],
        "result": {
            "item": "lightmanscurrency:wallet_diamond"
        }
    })

    event.custom({
        "type": "lightmanscurrency:crafting_wallet_upgrade",
        "group": "wallet_upgrading",
        "ingredients": [
            {
                "item": "lightmanscurrency:wallet_diamond"
            },
            {
                "item": "the_vault:black_chromatic_steel_ingot"
            },
            {
                "item": "the_vault:black_chromatic_steel_ingot"
            },
            {
                "item": "the_vault:black_chromatic_steel_ingot"
            },
            {
                "item": "the_vault:black_chromatic_steel_ingot"
            },
            {
                "item": "the_vault:gem_pog"
            }
        ],
        "result": {
            "item": "lightmanscurrency:wallet_netherite"
        }
    })

})