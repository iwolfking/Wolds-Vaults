let removedOutputsWB = [
    'aeinfinitybooster:infinity_card',
    'rsinfinitybooster:infinity_card',
    'aeinfinitybooster:dimension_card',
    'rsinfinitybooster:dimension_card'
];
onEvent("recipes", event => {
    removedOutputsWB.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('aeinfinitybooster:infinity_card'),
        [
            'PBP',
            'BSB',
            'LLL'
        ], {
        P: 'the_vault:echo_pog',
        B: 'ae2:wireless_booster',
        S: 'woldsvaults:pogominium_ingot',
        L: 'the_vault:cluster_netherite'

    })

    event.shaped(Item.of('rsinfinitybooster:infinity_card'),
        [
            'PBP',
            'BSB',
            'LLL'
        ], {
        P: 'the_vault:echo_pog',
        B: 'refinedstorage:range_upgrade',
        S: 'woldsvaults:pogominium_ingot',
        L: 'the_vault:cluster_netherite'

    })

    event.shaped(Item.of('rsinfinitybooster:dimension_card'),
        [
            'PSP',
            'SXS',
            'PSP'
        ], {
        S: 'the_vault:wold_star',
        P: 'rsinfinitybooster:infinity_card',
        X: 'the_vault:echo_pog'
    })

    event.shaped(Item.of('aeinfinitybooster:dimension_card'),
        [
            'PSP',
            'SXS',
            'PSP'
        ], {
        S: 'the_vault:wold_star',
        P: 'aeinfinitybooster:infinity_card',
        X: 'the_vault:echo_pog'
    })


})