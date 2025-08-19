
onEvent("recipes", event => {
    event.shaped(Item.of('vaultfruitbag:bag'),
        [
            'gsg',
            'wew',
            'www'
        ], {
        e: 'the_vault:vault_diamond',
        w: 'the_vault:magic_silk',
        g: 'the_vault:chromatic_gold_nugget',
        s: 'minecraft:string'
    }).id('vaultfruitbag:bag')

})