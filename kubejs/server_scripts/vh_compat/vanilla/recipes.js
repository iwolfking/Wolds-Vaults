onEvent("recipes", event => {

    event.shaped(Item.of('minecraft:bucket'),
        [
            '   ',
            'C C',
            ' C '
        ], {
            C: 'the_vault:chromatic_iron_ingot'
        })


    event.shaped(Item.of('minecraft:shears'),
        [
            ' C ',
            'C  ',
            '   '
        ], {
            C: 'the_vault:chromatic_iron_ingot'
        })

    event.shapeless('minecraft:beetroot', ['minecraft:beetroot_seeds'])
})