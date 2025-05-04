let removedOutputsBST = [
    'bonsaitrees3:bonsaipot',
];
onEvent("recipes", event => {
    removedOutputsBST.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('bonsaitrees3:bonsaipot'),
        [
            'BVB',
            'BMB',
            'III'
        ], {
        B: '#forge:ingots/brick',
        V: 'woldsvaults:chroma_core',
        M: 'the_vault:packed_vault_meat_block',
        I: 'the_vault:chromatic_steel_ingot'
    })

})