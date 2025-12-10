let removedOutputsENT = [
    'entangled:block',
    'entangled:item'
];
onEvent("recipes", event => {
    removedOutputsENT.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shapeless('entangled:block', ['entangled:block'])

    event.shaped(Item.of('entangled:block'),
        [
            'PXP',
            'XTX',
            'PXP'
        ], {
        P: 'the_vault:extraordinary_painite',
        X: 'the_vault:black_chromatic_steel_ingot',
        T: 'woldsvaults:pog_prism'
    })

    event.shaped(Item.of('entangled:item'),
        [
            ' XP',
            ' TX',
            'T  '
        ], {
        P: 'the_vault:vault_diamond',
        X: 'minecraft:ender_pearl',
        T: 'the_vault:driftwood'
    })


})