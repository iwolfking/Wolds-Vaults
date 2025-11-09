onEvent('recipes', event => {

    // Shaped: Sender Module 1
    event.shaped('modularrouters:sender_module_1', [
        '  ',
        'GBG',
        ' C '
    ], {
        B: 'modularrouters:blank_module',
        G: 'the_vault:gem_larimar',
        C: 'the_vault:vault_essence'
    }).id('modularrouters:sender_module_1');

    // Shaped: Sender Module 2
    event.shaped('modularrouters:sender_module_2', [
        'ECE',
        '#B#',
        'EPE'
    ], {
        E: 'the_vault:vault_essence',
        C: 'the_vault:vault_diamond',
        B: 'modularrouters:blank_module',
        '#': '#forge:chests',
        P: 'the_vault:perfect_larimar'
    }).id('modularrouters:sender_module_2');

    // Shapeless: Sender Module 3
    event.shapeless('modularrouters:sender_module_3', [
        'modularrouters:sender_module_2',
        'the_vault:perfect_echo_gem',
        'minecraft:ender_chest',
        'the_vault:gem_pog',
        'woldsvaults:pogominium_ingot',
        'the_vault:gem_pog',
        'modularrouters:sender_module_2',
        'modularrouters:blank_upgrade'
    ]).id('modularrouters:sender_module_3');

    // Shaped: Distributor Module
    event.shaped('modularrouters:distributor_module', [
        'EDE',
        '#B#',
        'EPE'
    ], {
        E: 'the_vault:vault_essence',
        D: 'the_vault:vault_diamond_block',
        B: 'modularrouters:blank_module',
        '#': '#forge:chests',
        P: 'the_vault:extraordinary_larimar'
    }).id('modularrouters:distributor_module');

    // Shapeless: Vacuum Hopper Module
    event.shapeless('modularrouters:vacuum_module', [
        'modularrouters:blank_module',
        'the_vault:chromatic_steel_block',
        'minecraft:hopper',
        'the_vault:gem_pog',
        'the_vault:chromatic_steel_ingot'
    ]).id('modularrouters:vacuum_module');

    // Shaped: Modular Router (x2)
    event.shaped('modularrouters:modular_router', 2, [
        'PLP',
        'LBL',
        'PLP'
    ], {
        P: 'the_vault:perfect_larimar',
        L: 'the_vault:chromatic_steel_ingot',
        B: 'modularrouters:blank_module'
    }).id('modularrouters:modular_router');

    // Shaped: Blank Module (x3)
    event.shaped('modularrouters:blank_module', 3, [
        'EPE',
        'SMS',
        'LLL'
    ], {
        E: 'the_vault:vault_essence',
        P: 'the_vault:extraordinary_larimar',
        S: 'the_vault:magic_silk',
        M: 'the_vault:magic_silk_block',
        L: 'the_vault:chromatic_steel_ingot'
    }).id('modularrouters:blank_module');

    // Shaped: Blank Upgrade (x2)
    event.shaped('modularrouters:blank_upgrade', 2, [
        'GLG',
        'LML',
        'GLG'
    ], {
        G: 'the_vault:gem_larimar',
        L: 'the_vault:chromatic_steel_ingot',
        M: 'the_vault:magic_silk_block'
    }).id('modularrouters:blank_upgrade');

    // Shapeless: Stack Upgrade (x2)
    event.shapeless('modularrouters:stack_upgrade', 2, [
        'the_vault:magic_silk_block',
        'the_vault:perfect_larimar',
        'modularrouters:blank_upgrade'
    ]).id('modularrouters:stack_upgrade');

    // Shapeless: Stack Augment
    event.shapeless('modularrouters:stack_augment', [
        'modularrouters:augment_core',
        'the_vault:chromatic_steel_ingot',
        'modularrouters:stack_upgrade'
    ]).id('modularrouters:stack_augment');

    // Shaped: Augment Core (x8)
    event.shaped('modularrouters:augment_core', 8, [
        'GLG',
        'EME',
        'GLG'
    ], {
        G: 'the_vault:gem_larimar',
        L: 'the_vault:chromatic_steel_ingot',
        E: 'the_vault:vault_essence',
        M: 'the_vault:magic_silk_block'
    }).id('modularrouters:augment_core');

    // Shapeless: Void Module
    event.shapeless('modularrouters:void_module', [
        'modularrouters:blank_module',
        'the_vault:magic_silk_block',
        'the_vault:carbon',
        'the_vault:chromatic_iron_block'
    ]).id('modularrouters:void_module');

    // Shaped: Puller Module 1
    event.shaped('modularrouters:puller_module_1', [
        '   ',
        'GBG',
        ' C '
    ], {
        B: 'modularrouters:blank_module',
        G: 'the_vault:gem_larimar',
        C: 'the_vault:vault_essence',
        H: 'minecraft:hopper'
    }).id('modularrouters:puller_module_1');

    // Shaped: Puller Module 2
    event.shaped('modularrouters:puller_module_2', [
        'EHE',
        'DBD',
        'EPE'
    ], {
        E: 'the_vault:vault_essence',
        H: 'minecraft:hopper',
        D: 'the_vault:vault_diamond',
        B: 'modularrouters:blank_module',
        P: 'the_vault:perfect_larimar'
    }).id('modularrouters:puller_module_2');

});
