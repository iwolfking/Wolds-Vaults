let removedOutputsWS = [
    'waystones:sharestone'
];
onEvent("recipes", event => {
    removedOutputsWS.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('waystones:sharestone'),
        [
            'DBD',
            'DGD',
            'OOO'
        ], {
        O: 'the_vault:chromatic_steel_ingot',
        D: 'waystones:warp_dust',
        G: 'waystones:warp_stone',
        B: 'the_vault:polished_vault_stone'
    })

        // --- Warp Stone ---
    event.shaped('waystones:warp_stone', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'the_vault:vault_essence',
        B: 'the_vault:perfect_wutodie'
    }).id('waystones:warp_stone')


    // --- Warp Dust ---
    event.shapeless('waystones:warp_dust', [
        'the_vault:gem_wutodie',
        'the_vault:vault_essence'
    ]).id('waystones:warp_dust')


    // --- Waystone ---
    event.shaped('waystones:waystone', [
        'ABA',
        'CDC',
        'EEE'
    ], {
        A: 'waystones:warp_dust',
        B: '#forge:stone',
        C: 'waystones:warp_stone',
        D: 'waystones:warp_dust',
        E: 'the_vault:wutodic_silver_ingot'
    }).id('waystones:waystone')


    // --- Mossy Waystone ---
    event.shaped('waystones:mossy_waystone', [
        'ABA',
        'CDC',
        'EEE'
    ], {
        A: 'waystones:warp_dust',
        B: '#forge:cobblestone/mossy',
        C: 'waystones:warp_stone',
        D: 'waystones:warp_dust',
        E: 'the_vault:wutodic_silver_ingot'
    }).id('waystones:mossy_waystone')


    // --- Sandy Waystone ---
    event.shaped('waystones:sandy_waystone', [
        'ABA',
        'CDC',
        'EEE'
    ], {
        A: 'waystones:warp_dust',
        B: '#forge:sandstone',
        C: 'waystones:warp_stone',
        D: 'waystones:warp_dust',
        E: 'the_vault:wutodic_silver_ingot'
    }).id('waystones:sandy_waystone')


    // --- Warp Plate ---
    event.shaped('waystones:warp_plate', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'the_vault:polished_vault_stone',
        B: 'waystones:warp_dust',
        C: 'the_vault:perfect_larimar',
        D: 'waystones:warp_dust',
        E: 'the_vault:polished_vault_stone'
    }).id('waystones:warp_plate')

    
})