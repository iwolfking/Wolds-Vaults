if (Platform.isLoaded('waterframes')) {
onEvent("recipes", event => {
    removedOutputsWS.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('waterframes:remote'),
        [
            'ICI',
            'IRI',
            'BBB'
        ], {
        I: 'the_vault:chromatic_iron_ingot',
        C: 'the_vault:vault_diamond_block',
        R: 'the_vault:vault_essence',
        B: 'minecraft:stone_button'
    }).id('waterframes:remote')

    event.shaped(Item.of('waterframes:frame'),
        [
            'ICI',
            'IRI',
            'IBI'
        ], {
        I: 'the_vault:black_chromatic_steel_ingot',
        C: 'the_vault:gem_pog',
        R: 'minecraft:tinted_glass',
        B: 'waterframes:remote'
    }).id('waterframes:frame')

     event.shaped(Item.of('waterframes:tv'),
        [
            'III',
            'IRI',
            'IBI'
        ], {
        I: 'the_vault:black_chromatic_steel_ingot',
        R: 'minecraft:tinted_glass',
        B: 'waterframes:remote'
    }).id('waterframes:tv')

     event.shaped(Item.of('waterframes:big_tv'),
        [
            'IRI',
            'IRI',
            'IBI'
        ], {
        I: 'the_vault:black_chromatic_steel_ingot',
        R: 'minecraft:tinted_glass',
        B: 'waterframes:remote'
    }).id('waterframes:big_tv')

      event.shaped(Item.of('waterframes:projector'),
        [
            'IIL',
            'IRL',
            'IBL'
        ], {
        I: 'the_vault:black_chromatic_steel_ingot',
        R: 'minecraft:glowstone',
        L: 'the_vault:vault_diamond',
        B: 'waterframes:remote'
    }).id('waterframes:projector')


    event.shapeless(Item.of('waterframes:tv_box'), ['minecraft:note_block', 'waterframes:tv']).id('waterframes:tv_box')

})
}
