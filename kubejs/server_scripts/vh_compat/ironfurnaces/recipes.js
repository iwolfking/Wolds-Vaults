let removedOutputsIAF = [
    'ironfurnaces:augment_generator',
];
onEvent("recipes", event => {
    removedOutputsIAF.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('ironfurnaces:augment_generator'),
        [
            'SRS',
            'PFP',
            'SRS'
        ], {
        S: 'the_vault:chromatic_steel_ingot',
        R: 'the_vault:vault_diamond',
        P: 'the_vault:magic_silk_block',
        F: 'irongenerators:iron_generator'
    })

       // Iron Generator
    event.shaped('irongenerators:iron_generator', [
        'III',
        'IFI',
        'III'
    ], {
        I: 'the_vault:chromatic_iron_ingot',
        F: 'minecraft:furnace'
    }).id('irongenerators:iron_generator');

    // Copper Generator
    event.shaped('irongenerators:copper_generator', [
        'ISI',
        'SGS',
        'ISI'
    ], {
        I: 'the_vault:chromatic_steel_ingot',
        S: '#forge:storage_blocks/copper',
        G: '#forge:generators'
    }).id('irongenerators:copper_generator');

    // Gold Generator
    event.shaped('irongenerators:gold_generator', [
        'IGI',
        'GGG',
        'IGI'
    ], {
        I: 'the_vault:chromatic_steel_ingot',
        G: 'minecraft:gold_block'
    }).id('irongenerators:gold_generator');

    // Diamond Generator
    event.shaped('irongenerators:diamond_generator', [
        'IDI',
        'GDG',
        'IDI'
    ], {
        I: 'the_vault:chromatic_steel_ingot',
        D: 'the_vault:vault_diamond_block',
        G: 'minecraft:diamond_block'
    }).id('irongenerators:diamond_generator');

    // Netherite Generator
    event.shaped('irongenerators:netherite_generator', [
        'NDN',
        'GDG',
        'NBN'
    ], {
        N: 'minecraft:netherite_block',
        D: 'irongenerators:diamond_generator',
        G: '#forge:generators',
        B: 'the_vault:black_chromatic_steel_block'
    }).id('irongenerators:netherite_generator');

    // Heater
    event.shaped('ironfurnaces:heater', [
        'PCP',
        'PRP',
        'PFP'
    ], {
        P: 'the_vault:polished_vault_stone',
        C: 'minecraft:comparator',
        R: 'minecraft:redstone_block',
        F: '#forge:furnaces'
    }).id('ironfurnaces:heater');

    // Item Heater
    event.shaped('ironfurnaces:item_heater', [
        'PIP',
        'RCR',
        'PDP'
    ], {
        P: 'the_vault:polished_vault_stone',
        I: 'the_vault:chromatic_iron_ingot',
        R: 'minecraft:redstone_block',
        C: 'minecraft:comparator',
        D: 'the_vault:vault_diamond'
    }).id('ironfurnaces:item_heater');

    // Item Copy
    event.shaped('ironfurnaces:item_copy', [
        'PMP',
        'MFM',
        'PMP'
    ], {
        P: 'the_vault:polished_vault_stone',
        M: 'the_vault:magic_silk',
        F: '#forge:furnaces'
    }).id('ironfurnaces:item_copy');

    // Item Linker
    event.shaped('ironfurnaces:item_linker', [
        'B  ',
        ' M ',
        '  B'
    ], {
        B: 'the_vault:black_chromatic_steel_ingot',
        M: 'ironfurnaces:rainbow_core'
    }).id('ironfurnaces:item_linker');

    // Augment Factory
    event.shaped('ironfurnaces:augment_factory', [
        'III',
        'FEF',
        'III'
    ], {
        I: 'the_vault:chromatic_steel_ingot',
        F: 'ironfurnaces:iron_furnace',
        E: 'the_vault:echo_pog'
    }).id('ironfurnaces:augment_factory');

    // Iron Furnace
    event.shaped('ironfurnaces:iron_furnace', [
        'GIG',
        'IFI',
        'III'
    ], {
        G: 'the_vault:gem_larimar',
        I: 'the_vault:chromatic_steel_ingot',
        F: 'minecraft:furnace'
    }).id('ironfurnaces:iron_furnace');

    // Gold Furnace
    event.shaped('ironfurnaces:gold_furnace', [
        'GGG',
        'IFI',
        'III'
    ], {
        G: 'minecraft:gold_block',
        I: 'the_vault:chromatic_steel_ingot',
        F: 'ironfurnaces:iron_furnace'
    }).id('ironfurnaces:gold_furnace');

    // Diamond Furnace
    event.shaped('ironfurnaces:diamond_furnace', [
        'GDG',
        'IFI',
        'III'
    ], {
        G: 'the_vault:gem_larimar',
        D: 'minecraft:diamond_block',
        I: 'the_vault:chromatic_steel_ingot',
        F: 'ironfurnaces:gold_furnace'
    }).id('ironfurnaces:diamond_furnace');

    // Emerald Furnace
    event.shaped('ironfurnaces:emerald_furnace', [
        'GEG',
        'IFI',
        'III'
    ], {
        G: 'the_vault:gem_larimar',
        E: 'minecraft:emerald_block',
        I: 'the_vault:chromatic_steel_ingot',
        F: 'ironfurnaces:diamond_furnace'
    }).id('ironfurnaces:emerald_furnace');

    // Crystal Furnace
    event.shaped('ironfurnaces:crystal_furnace', [
        'GCG',
        'IFI',
        'III'
    ], {
        G: 'the_vault:gem_larimar',
        C: 'the_vault:vault_diamond_block',
        I: 'the_vault:chromatic_steel_ingot',
        F: 'ironfurnaces:emerald_furnace'
    }).id('ironfurnaces:crystal_furnace');

    // Obsidian Furnace
    event.shaped('ironfurnaces:obsidian_furnace', [
        'GOG',
        'IFI',
        'III'
    ], {
        G: 'the_vault:gem_larimar',
        O: 'minecraft:crying_obsidian',
        I: 'the_vault:chromatic_steel_ingot',
        F: 'ironfurnaces:crystal_furnace'
    }).id('ironfurnaces:obsidian_furnace');

    // Netherite Furnace
    event.shaped('ironfurnaces:netherite_furnace', [
        'GNG',
        'IFI',
        'III'
    ], {
        G: 'the_vault:gem_larimar',
        N: 'minecraft:netherite_block',
        I: 'the_vault:chromatic_steel_ingot',
        F: 'ironfurnaces:obsidian_furnace'
    }).id('ironfurnaces:netherite_furnace');

    // Rainbow Core
    event.shaped('ironfurnaces:rainbow_core', [
        'III',
        'F E F',
        'III'
    ], {
        I: 'the_vault:chromatic_steel_ingot',
        F: 'ironfurnaces:netherite_furnace',
        E: 'the_vault:echo_pog'
    }).id('ironfurnaces:rainbow_core');

    // Rainbow Plating (shapeless, x8)
    event.shapeless(Item.of('ironfurnaces:rainbow_plating', 8), [
        'ironfurnaces:iron_furnace',
        'ironfurnaces:gold_furnace',
        'ironfurnaces:diamond_furnace',
        'ironfurnaces:obsidian_furnace',
        'ironfurnaces:crystal_furnace',
        'ironfurnaces:netherite_furnace'
    ]).id('ironfurnaces:rainbow_plating');






})


onEvent('tags.items', event => {
    event.add('forge:generators', [
        'irongenerators:stone_generator',
        'irongenerators:iron_generator',
        'irongenerators:copper_generator',
        'irongenerators:gold_generator',
        'irongenerators:diamond_generator',
        'irongenerators:netherite_generator'
    ]);
    
    event.add('forge:furnaces', [
        'minecraft:furnace',
        'ironfurnaces:iron_furnace',
        'ironfurnaces:gold_furnace',
        'ironfurnaces:diamond_furnace',
        'ironfurnaces:emerald_furnace',
        'ironfurnaces:crystal_furnace',
        'ironfurnaces:obsidian_furnace',
        'ironfurnaces:netherite_furnace'
    ]);
});