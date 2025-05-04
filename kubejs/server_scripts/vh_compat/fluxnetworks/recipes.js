
onEvent("recipes", event => {
    event.shaped(Item.of('fluxnetworks:flux_controller'),
        [
            'BCB',
            'D D',
            'BIB'
        ], {
        B: 'fluxnetworks:flux_block',
        D: 'fluxnetworks:flux_dust',
        C: 'fluxnetworks:flux_core',
        I: 'woldsvaults:pogominium_ingot'

    }).id('fluxnetworks:fluxcontroller')
})