onEvent('recipes', event => {

    event.remove({ mod: 'angelring' });

    event.shaped(Item.of('angelring:itemdiamondring'),
        [
            'GXG',
            'XRX',
            'GXG'
        ], {
        G: 'compressium:vault_essence_block_1',
        X: 'compressium:vault_diamond_block_1',
        R: 'woldvaults:pog_prism'
    })

    event.shaped(Item.of('woldsvaults:chromatic_iron_angel_ring'),
        [
            'GGG',
            'ARA',
            'GGG'
        ], {
        G: 'the_vault:chromatic_iron_block',
        A: 'the_vault:angel_block',
        R: 'angelring:itemdiamondring'
    })

    event.shaped(Item.of('woldsvaults:chromatic_gold_angel_ring'),
        [
            'GGG',
            'ARA',
            'GGG'
        ], {
        G: 'woldsvaults:chromatic_gold_block',
        A: 'the_vault:angel_block',
        R: 'woldsvaults:chromatic_iron_angel_ring'
    })

    event.shaped(Item.of('woldsvaults:chromatic_steel_angel_ring'),
        [
            'GXG',
            'ARA',
            'GXG'
        ], {
        G: 'the_vault:chromatic_steel_block',
        A: 'the_vault:angel_block',
        R: 'woldsvaults:chromatic_gold_angel_ring',
        X: 'woldvaults:pog_prism'
    })

    event.shaped(Item.of('woldsvaults:black_chromatic_steel_angel_ring'),
        [
            'GXG',
            'ARA',
            'GXG'
        ], {
        G: 'the_vault:black_chromatic_steel_block',
        A: 'the_vault:angel_block',
        R: 'woldsvaults:chromatic_steel_angel_ring',
        X: 'the_vault:echo_pog'
    })

    event.shaped(Item.of('woldsvaults:prismatic_angel_ring'),
        [
            'GXG',
            'ARA',
            'GXG'
        ], {
        G: 'woldsvaults:pog_prism',
        A: 'the_vault:angel_block',
        R: 'woldsvaults:black_chromatic_steel_angel_ring',
        X: 'the_vault:omega_pog'
    })

})