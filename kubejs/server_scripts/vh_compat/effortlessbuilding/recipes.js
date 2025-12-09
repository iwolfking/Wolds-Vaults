let removedOutputsEB = [
    'effortlessbuilding:reach_upgrade1',
    'effortlessbuilding:reach_upgrade2',
    'effortlessbuilding:reach_upgrade3'
];
onEvent("recipes", event => {
    removedOutputsEB.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('effortlessbuilding:reach_upgrade1'),
        [
            'PXP',
            'XTX',
            'PXP'
        ], {
        P: 'the_vault:perfect_benitoite',
        X: 'minecraft:slime_ball',
        T: 'the_vault:extraordinary_larimar'
    })


    event.shaped(Item.of('effortlessbuilding:reach_upgrade2'),
        [
            'PXP',
            'XTX',
            'PXP'
        ], {
        P: 'the_vault:vault_diamond_block',
        X: 'quark:blaze_lantern',
        T: 'the_vault:extraordinary_larimar'
    })


    event.shaped(Item.of('effortlessbuilding:reach_upgrade3'),
        [
            'PXP',
            'XTX',
            'PXP'
        ], {
        P: 'the_vault:extraordinary_benitoite',
        X: 'the_vault:extraordinary_larimar',
        T: 'woldvaults:pog_prism'
    })


})