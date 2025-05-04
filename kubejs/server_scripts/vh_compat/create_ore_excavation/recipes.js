let removedOutputsCOE = [
    'createoreexcavation:drill',
    'createoreexcavation:diamond_drill',
    'createoreexcavation:netherite_drill',
    'createoreexcavation:vein_finder'
];
onEvent("recipes", event => {
    removedOutputsCOE.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.remove({ id: 'createoreexcavation:drilling_machine' })
    event.remove({ id: 'createoreexcavation:extractor' })

    event.shaped(Item.of('createoreexcavation:drilling_machine'),
        [
            'BSB',
            'MPM',
            'BDB'
        ], {
        B: 'the_vault:chromatic_steel_block',
        S: 'create:copper_casing',
        M: 'create:precision_mechanism',
        P: 'the_vault:echo_pog',
        D: 'create:mechanical_drill'
    })

    event.shaped(Item.of('createoreexcavation:extractor'),
        [
            'BSB',
            'MPM',
            'BDB'
        ], {
        B: 'create:brass_block',
        S: 'create:hose_pulley',
        M: 'create:precision_mechanism',
        P: 'the_vault:gem_pog',
        D: 'create:mechanical_drill'
    })

    event.shaped(Item.of('createoreexcavation:drill'),
        [
            'Bb ',
            'bBb',
            ' bb'
        ], {
        B: 'the_vault:chromatic_iron_block',
        b: 'the_vault:chromatic_iron_ingot'
    })

    event.shaped(Item.of('createoreexcavation:diamond_drill'),
        [
            'Bb ',
            'bDb',
            ' bb'
        ], {
        B: 'the_vault:vault_diamond_block',
        b: 'the_vault:vault_diamond',
        D: 'createoreexcavation:drill'
    })

    event.shaped(Item.of('createoreexcavation:vein_finder'),
        [
            'EA ',
            'RS ',
            '  S'
        ], {
        E: 'minecraft:ender_eye',
        A: 'the_vault:vault_diamond',
        R: '#minecraft:redstone_ores',
        S: 'the_vault:driftwood'
    })

    event.smithing('createoreexcavation:netherite_drill', 'createoreexcavation:diamond_drill', 'the_vault:black_chromatic_steel_ingot')
})