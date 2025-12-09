
onEvent("recipes", event => {

    event.shaped(Item.of('toolbelt:belt', 1),
        [
            'SLS',
            'L L',
            'LIL'
        ], {
        S: 'the_vault:magic_silk_block',
        L: 'minecraft:leather',
        I: 'woldvaults:pog_prism'
    }).id('toolbelt:belt')

    event.shaped(Item.of('toolbelt:pouch', 1),
        [
            'SIS',
            'L L',
            'SOS'
        ], {
        S: 'the_vault:magic_silk_block',
        L: 'minecraft:leather',
        I: 'woldsvaults:chromatic_gold_block',
        O: 'the_vault:gem_pog'
    }).id('toolbelt:pouch')


})