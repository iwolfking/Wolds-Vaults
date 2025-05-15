let removedOutputsF = [
    'farmingforblockheads:market'
];
onEvent("recipes", event => {
    removedOutputsF.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.remove({ output: 'farmingforblockheads:red_fertilizer' })
    event.remove({ output: 'farmingforblockheads:yellow_fertilizer' })
    event.remove({ output: 'farmingforblockheads:green_fertilizer' })

    event.shaped(Item.of('farmingforblockheads:market'),
        [
            'POP',
            'L L',
            'LLL'
        ], {
            P: 'the_vault:wooden_planks',
            O: 'the_vault:perfect_painite',
            L: 'the_vault:driftwood_planks'
        })

    event.shaped(Item.of('farmingforblockheads:red_fertilizer'),
        [
            'RRR',
            'COC',
            'LLL'
        ], {
            R: 'minecraft:red_dye',
            O: 'minecraft:wheat_seeds',
            L: 'minecraft:bone_meal',
            C: 'the_vault:chromatic_iron_nugget'
        })

    event.shaped(Item.of('farmingforblockheads:yellow_fertilizer'),
        [
            'YYY',
            'COC',
            'LLL'
        ], {
            Y: 'minecraft:yellow_dye',
            O: 'minecraft:wheat_seeds',
            L: 'minecraft:bone_meal',
            C: 'the_vault:chromatic_iron_nugget'
        })

    event.shaped(Item.of('farmingforblockheads:green_fertilizer'),
        [
            'GGG',
            'COC',
            'LLL'
        ], {
            G: 'minecraft:green_dye',
            O: 'minecraft:wheat_seeds',
            L: 'minecraft:bone_meal',
            C: 'the_vault:chromatic_iron_nugget'
        })

})