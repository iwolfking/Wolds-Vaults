
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

      // Flux Dust
    event.shaped('fluxnetworks:flux_dust', [
        'AB'
    ], {
        A: 'the_vault:chromatic_iron_ingot',
        B: 'minecraft:redstone'
    }).id('fluxnetworks:flux_dust');

    // Flux Core (produces 2)
    event.shaped(Item.of('fluxnetworks:flux_core', 2), [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'fluxnetworks:flux_dust',
        B: 'the_vault:gem_larimar',
        C: 'minecraft:obsidian',
        D: 'the_vault:vault_diamond'
    }).id('fluxnetworks:flux_core');

    // Flux Block
    event.shaped('fluxnetworks:flux_block', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'the_vault:gem_larimar',
        B: 'fluxnetworks:flux_core',
        C: 'fluxnetworks:flux_core',
        D: 'the_vault:vault_diamond'
    }).id('fluxnetworks:flux_block');

    // Flux Point
    event.shaped('fluxnetworks:flux_point', [
        'ABA',
        ' C ',
        'ADA'
    ], {
        A: 'fluxnetworks:flux_core',
        B: 'woldsvaults:chroma_core',
        C: 'fluxnetworks:flux_block',
        D: 'the_vault:gem_pog'
    }).id('fluxnetworks:flux_point');

    // Flux Plug
    event.shaped('fluxnetworks:flux_plug', [
        'ABA',
        ' C ',
        'ADA'
    ], {
        A: 'fluxnetworks:flux_core',
        B: 'the_vault:gem_pog',
        C: 'fluxnetworks:flux_block',
        D: 'woldsvaults:chroma_core'
    }).id('fluxnetworks:flux_plug');
})