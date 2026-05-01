onEvent("recipes", event => {

    event.shaped(Item.of('minecraft:bucket'),
        [
            '   ',
            'B B',
            ' B '
        ], {
            B: 'the_vault:chromatic_iron_ingot'
        })


    event.shaped(Item.of('minecraft:shears'),
        [
            ' B ',
            'B  ',
            '   '
        ], {
            B: 'the_vault:chromatic_iron_ingot'
        })

    event.shapeless('minecraft:beetroot', ['minecraft:beetroot_seeds'])
})