onEvent("recipes", event => {
    let corals = ['tube', 'brain', 'bubble', 'fire', 'horn']

    event.recipes.thermal.press('the_vault:bitter_lemon', ['16x the_vault:sweet_kiwi', 'thermal:press_packing_3x3_die'])
    event.recipes.thermal.press('the_vault:sour_orange', ['9x the_vault:bitter_lemon', 'thermal:press_packing_3x3_die'])

    corals.forEach(coral => {
        event.custom({
            "type": "thermal:pyrolyzer",
            "ingredient": {
                "item": `minecraft:${coral}_coral`
            },
            "result": [
                {
                    "item": `minecraft:dead_${coral}_coral`
                },
                {
                    "fluid": "minecraft:water",
                    "amount": 25
                }
            ],
            "experience": 0.05
        })

        event.custom({
            "type": "thermal:pyrolyzer",
            "ingredient": {
                "item": `minecraft:${coral}_coral_fan`
            },
            "result": [
                {
                    "item": `minecraft:dead_${coral}_coral_fan`
                },
                {
                    "fluid": "minecraft:water",
                    "amount": 25
                }
            ],
            "experience": 0.05
        })
    })

    event.remove({ output: 'thermal:energy_duct' })
    event.remove({ output: 'thermal:fluid_duct' })
    event.remove({ output: 'thermal:fluid_duct_windowed' })
    event.remove({ output: 'thermal:item_buffer' })
    event.remove({ output: 'thermal:filter_attachment' })
    event.remove({ output: 'thermal:servo_attachment' })
    event.remove({ output: 'thermal:turbo_servo_attachment' })

    event.shaped(Item.of('thermal:energy_duct', 4),
        [
            'PXP',
            'KTK',
            'PXP'
        ], {
        P: 'the_vault:vault_essence',
        X: 'minecraft:redstone',
        T: '#c:glass_blocks',
        K: '#forge:ingots/lead'
    })

    event.shaped(Item.of('thermal:fluid_duct', 4),
        [
            'PPP',
            'KTK',
            'PPP'
        ], {
        P: 'the_vault:vault_essence',
        T: '#forge:ingots/lead',
        K: '#forge:ingots/bronze'
    })

    event.shaped(Item.of('thermal:fluid_duct_windowed', 4),
        [
            'PPP',
            'KTK',
            'PPP'
        ], {
        P: 'the_vault:vault_essence',
        T: '#c:glass_blocks',
        K: '#forge:ingots/bronze'
    })

    event.shaped(Item.of('thermal:item_buffer'),
        [
            'KPK',
            'XTX',
            'KPK'
        ], {
        T: 'thermal:signalum_ingot',
        K: '#forge:ingots/tin',
        X: 'the_vault:driftwood_planks',
        P: 'the_vault:chromatic_steel_ingot'
    })

    event.shaped(Item.of('thermal:filter_attachment', 2),
        [
            'KTK',
            'XPX'
        ], {
        P: 'the_vault:magic_silk_block',
        T: '#c:glass_blocks',
        K: 'the_vault:chromatic_steel_nugget',
        X: 'the_vault:chromatic_iron_ingot'
    })

    event.shaped(Item.of('thermal:servo_attachment', 2),
        [
            'KTK',
            'XPX'
        ], {
        P: 'the_vault:vault_essence_1',
        T: '#c:glass_blocks',
        K: 'the_vault:chromatic_steel_nugget',
        X: 'the_vault:chromatic_iron_ingot'
    })

    event.shaped(Item.of('thermal:turbo_servo_attachment', 1),
        [
            'KTK',
            'XPX'
        ], {
        P: 'thermal:redstone_servo',
        T: '#c:glass_blocks',
        K: 'the_vault:chromatic_steel_ingot',
        X: '#forge:ingots/invar'
    })
})

