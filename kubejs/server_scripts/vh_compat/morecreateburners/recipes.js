onEvent("recipes", event => {
    event.shaped(Item.of('moreburners:copper_coil'),
        [
            ' C ',
            'CDC',
            ' C '
        ], {
        C: 'minecraft:copper_ingot',
        D: 'the_vault:vault_diamond'
    }).id('moreburners:copper_coil')

    event.shaped(Item.of('moreburners:nickel_coil'),
        [
            ' C ',
            'CDC',
            ' C '
        ], {
        C: 'create:brass_ingot',
        D: 'woldsvaults:chromatic_gold_block'
    }).id('moreburners:nickel_coil')

    event.shaped(Item.of('moreburners:converter_cover'),
        [
            'CVC',
            'VDV',
            'CVC'
        ], {
        C: 'create:brass_sheet',
        D: 'create:sturdy_sheet',
        V: 'woldsvaults:chromatic_gold_ingot'
    }).id('moreburners:converter_cover')
})