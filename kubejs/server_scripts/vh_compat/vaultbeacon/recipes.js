
onEvent("recipes", event => {

    event.shaped(Item.of('vaultbeacon:vault_beacon'),
        [
            ' B ',
            'BGB',
            'OXO'
        ], {
        B: '#forge:glass',
        G: 'woldsvaults:pog_prism',
        O: 'the_vault:chromatic_steel_block',
        X: 'minecraft:obsidian'
    }).id('vaultbeacon:vault_beacon')

})