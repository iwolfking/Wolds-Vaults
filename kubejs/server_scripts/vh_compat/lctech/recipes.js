onEvent("recipes", event => {
    event.shaped(Item.of('lctech:iron_tank'),
        [
            'IGI',
            'DXD',
            'IGI'
        ], {
        I: 'the_vault:chromatic_iron_block',
        G: 'minecraft:glass',
        X: 'the_vault:extraordinary_larimar',
        D: 'the_vault:vault_diamond'
    }).id('lctech:iron_tank')

    event.shaped(Item.of('lctech:gold_tank'),
        [
            'IGI',
            'DXD',
            'IGI'
        ], {
        I: 'woldsvaults:chromatic_gold_block',
        G: 'minecraft:glass',
        D: 'the_vault:vault_diamond',
        X: 'lctech:iron_tank'
    }).id('lctech:gold_tank')

    event.shaped(Item.of('lctech:diamond_tank'),
        [
            'IGI',
            'DXD',
            'IGI'
        ], {
        I: 'the_vault:vault_diamond_block',
        G: 'minecraft:glass',
        D: 'the_vault:vault_diamond',
        X: 'lctech:gold_tank'
    }).id('lctech:diamond_tank')

    event.remove({id: 'lctech:fluid_capacity_upgrade_1'})
    event.remove({id: 'lctech:fluid_capacity_upgrade_2'})
    event.remove({id: 'lctech:fluid_capacity_upgrade_3'})
})