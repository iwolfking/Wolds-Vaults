onEvent('recipes', event => {
    event.shaped(Item.of('the_vault:gem_box'),
        [
            'XGX',
            'GRG',
            'XGX'
        ], {
        G: 'the_vault:smashed_vault_gem',
        X: 'the_vault:vault_diamond',
        R: 'the_vault:vault_essence_1'
    })
})