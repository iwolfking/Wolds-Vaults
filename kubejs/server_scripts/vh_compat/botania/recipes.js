onEvent("recipes", event => {
    event.remove({ mod: 'botania', output: 'botania:terrasteel_ingot' })

    // event.custom({
    //     "type": "botania:runic_altar",
    //     "ingredients": [
    //         {
    //             "tag": "botania:mana_dusts"
    //         },
    //         {
    //             "tag": "botania:manasteel_ingots"
    //         },
    //         {
    //             "item": "minecraft:diamond"
    //         },
    //         {
    //             "item": "minecraft:diamond"
    //         },
    //         {
    //             "item": "the_vault:vault_essence"
    //         },
    //         {
    //             "item": "the_vault:vault_essence"
    //         }
    //     ],
    //     "mana": 10000,
    //     "output": {
    //         "count": 1,
    //         "item": "the_vault:dreamstone"
    //     }
    // })

    event.custom({
        "type": "botania:terra_plate",
        "ingredients": [
            {
                "item": "botania:uninfused_terrasteel_ingot"
            }
        ],
        "mana": 500000,
        "result": {
            "item": "botania:terrasteel_ingot"
        }
    })

})