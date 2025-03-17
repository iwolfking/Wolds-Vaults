let removedOutputsES = [
    'extrastorage:advanced_exporter',
    'extrastorage:advanced_importer',
    'extrastorage:raw_neural_processor',
    'extrastorage:neural_processor',
    'extrastorage:storagepart_256k',
    'extrastorage:storagepart_1024k',
    'extrastorage:storagepart_4096k',
    'extrastorage:storagepart_16384k',
    'extrastorage:storagepart_16384k_fluid',
    'extrastorage:storagepart_65536k_fluid',
    'extrastorage:storagepart_262144k_fluid',
    'extrastorage:storagepart_1048576k_fluid',
    'extrastorage:disk_256k',
    'extrastorage:disk_1024k',
    'extrastorage:disk_4096k',
    'extrastorage:disk_16384k',
    'extrastorage:disk_16384k_fluid',
    'extrastorage:disk_65536k_fluid',
    'extrastorage:disk_262144k_fluid',
    'extrastorage:disk_1048576k_fluid',
    'extrastorage:iron_crafter',
    'extrastorage:gold_crafter',
    'extrastorage:diamond_crafter',
    'extrastorage:netherite_crafter'
];
onEvent("recipes", event => {
    removedOutputsES.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('extrastorage:advanced_exporter'),
        [
            ' P ',
            'GEG',
            ' P '
        ], {
        P: 'the_vault:vault_diamond',
        G: 'refinedstorage:improved_processor',
        E: 'refinedstorage:exporter'
    })

    event.shaped(Item.of('extrastorage:advanced_importer'),
        [
            ' P ',
            'GEG',
            ' P '
        ], {
        P: 'the_vault:vault_diamond',
        G: 'refinedstorage:improved_processor',
        E: 'refinedstorage:importer'
    })

    // event.shaped(Item.of('extrastorage:raw_neural_processor'),
    //     [
    //         'AQI',
    //         'QTQ',
    //         'OPO'
    //     ], {
    //     A: 'refinedstorage:raw_advanced_processor',
    //     Q: 'the_vault:gem_echo',
    //     I: 'refinedstorage:raw_improved_processor',
    //     T: 'minecraft:crafting_table',
    //     O: 'minecraft:obsidian',
    //     P: 'refinedstorage:processor_binding'
    // })

    event.shaped(Item.of('extrastorage:neural_processor'),
        [
            'AXB',
            'OEO',
            'SOS'
        ], {
        A: 'refinedstorage:advanced_processor',
        B: 'refinedstorage:improved_processor',
        E: 'the_vault:perfect_echo_gem',
        S: 'the_vault:black_chromatic_steel_ingot',
        O: 'minecraft:obsidian',
        X: 'the_vault:gem_pog'
    })



    event.shaped(Item.of('extrastorage:storagepart_256k'),
        [
            'PIP',
            'CRC',
            'PCP'
        ], {
        P: 'refinedstorage:advanced_processor',
        I: 'the_vault:echoing_ingot',
        C: 'refinedstorage:64k_storage_part',
        R: 'the_vault:echo_pog'
    })

    event.shaped(Item.of('extrastorage:storagepart_4096k'),
        [
            'PIP',
            'CRC',
            'PCP'
        ], {
        P: 'refinedstorage:advanced_processor',
        I: 'the_vault:echoing_ingot',
        C: 'extrastorage:storagepart_256k',
        R: 'the_vault:omega_pog'
    })

    event.shaped(Item.of('extrastorage:storagepart_16384k'),
        [
            'PIP',
            'CRC',
            'PCP'
        ], {
        P: 'extrastorage:neural_processor',
        I: 'the_vault:echo_pog',
        C: 'extrastorage:storagepart_4096k',
        R: 'the_vault:omega_pog'
    })

    event.shaped(Item.of('extrastorage:storagepart_16384k_fluid'),
        [
            'PIP',
            'CRC',
            'PCP'
        ], {
        P: 'refinedstorage:advanced_processor',
        I: 'the_vault:echoing_ingot',
        C: 'refinedstorage:4096k_fluid_storage_part',
        R: 'the_vault:echo_pog'
    })

    event.shaped(Item.of('extrastorage:storagepart_65536k_fluid'),
        [
            'PIP',
            'CRC',
            'PCP'
        ], {
        P: 'refinedstorage:advanced_processor',
        I: 'the_vault:echoing_ingot',
        C: 'extrastorage:storagepart_16384k_fluid',
        R: 'the_vault:omega_pog'
    })

    event.shaped(Item.of('extrastorage:storagepart_262144k_fluid'),
        [
            'PIP',
            'CRC',
            'PCP'
        ], {
        P: 'refinedstorage:advanced_processor',
        I: 'the_vault:echoing_ingot',
        C: 'extrastorage:storagepart_65536k_fluid',
        R: 'the_vault:omega_pog'
    })

    event.shaped(Item.of('extrastorage:storagepart_1048576k_fluid'),
        [
            'PRP',
            'CRC',
            'PCP'
        ], {
        P: 'refinedstorage:advanced_processor',
        C: 'extrastorage:storagepart_262144k_fluid',
        R: 'the_vault:omega_pog'
    })

    event.shapeless('extrastorage:disk_256k', ['refinedstorage:storage_housing', 'extrastorage:storagepart_256k'])
    event.shapeless('extrastorage:disk_1024k', ['refinedstorage:storage_housing', 'extrastorage:storagepart_1024k'])
    event.shapeless('extrastorage:disk_4096k', ['refinedstorage:storage_housing', 'extrastorage:storagepart_4096k'])
    event.shapeless('extrastorage:disk_16384k', ['refinedstorage:storage_housing', 'extrastorage:storagepart_16384k'])
    event.shapeless('extrastorage:disk_16384k_fluid', ['refinedstorage:storage_housing', 'extrastorage:storagepart_16384k_fluid'])
    event.shapeless('extrastorage:disk_65536k_fluid', ['refinedstorage:storage_housing', 'extrastorage:storagepart_65536k_fluid'])
    event.shapeless('extrastorage:disk_262144k_fluid', ['refinedstorage:storage_housing', 'extrastorage:storagepart_262144k_fluid'])
    event.shapeless('extrastorage:disk_1048576k_fluid', ['refinedstorage:storage_housing', 'extrastorage:storagepart_1048576k_fluid'])

    event.shaped(Item.of('extrastorage:iron_crafter'),
        [
            'ICI',
            'XBX',
            'I I'
        ], {
        I: 'the_vault:black_chromatic_steel_ingot',
        C: 'the_vault:gem_pog',
        B: '#refinedstorage:crafter',
        X: 'refinedstorage:advanced_processor'
    })

    event.shaped(Item.of('extrastorage:gold_crafter'),
        [
            'ICI',
            'XBX',
            'I I'
        ], {
        I: 'compressium:gold_1',
        C: 'the_vault:echo_pog',
        B: 'extrastorage:iron_crafter',
        X: 'refinedstorage:advanced_processor'
    })

    event.shaped(Item.of('extrastorage:diamond_crafter'),
        [
            'ICI',
            'XBX',
            'I I'
        ], {
        I: 'the_vault:vault_diamond_block',
        C: 'the_vault:echo_pog',
        B: 'extrastorage:gold_crafter',
        X: 'extrastorage:neural_processor'
    })

    event.shaped(Item.of('extrastorage:netherite_crafter'),
        [
            'ICI',
            'XBX',
            'IPI'
        ], {
        I: 'minecraft:netherite_block',
        C: 'the_vault:echoing_ingot',
        B: 'extrastorage:diamond_crafter',
        P: 'the_vault:omega_pog',
        X: 'extrastorage:neural_processor'
    })
})