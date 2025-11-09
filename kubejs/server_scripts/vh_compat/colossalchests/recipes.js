onEvent('recipes', event => {

    // Wood
    event.shaped('colossalchests:chest_wall_wood', [
        'IDI',
        'DLD',
        'IDI'
    ], {
        I: 'the_vault:chromatic_iron_ingot',
        D: 'the_vault:driftwood',
        L: '#minecraft:logs'
    }).id('colossalchests:chest_wall_wood');

    event.shaped('colossalchests:interface_wood', [
        'DPD',
        'PCP',
        'DPD'
    ], {
        D: 'the_vault:driftwood',
        P: 'the_vault:polished_vault_stone',
        C: 'colossalchests:colossal_chest_wood'
    }).id('colossalchests:interface_wood');

    event.shapeless('colossalchests:colossal_chest_wood', [
        'colossalchests:chest_wall_wood',
        'the_vault:gem_larimar',
        'the_vault:gem_larimar',
        'the_vault:gem_larimar'
    ]).id('colossalchests:colossal_chest_wood');

    // Copper
    event.shaped('colossalchests:chest_wall_copper', [
        'ICI',
        'CDC',
        'ICI'
    ], {
        I: 'the_vault:chromatic_iron_ingot',
        C: '#forge:storage_blocks/copper',
        D: 'colossalchests:chest_wall_wood'
    }).id('colossalchests:chest_wall_copper');

    event.shaped('colossalchests:interface_copper', [
        'CIC',
        'IDI',
        'CIC'
    ], {
        I: 'the_vault:chromatic_iron_ingot',
        C: '#forge:storage_blocks/copper',
        D: 'colossalchests:interface_wood'
    }).id('colossalchests:interface_copper');

    event.shapeless('colossalchests:colossal_chest_copper', [
        'colossalchests:colossal_chest_wood',
        'the_vault:gem_larimar',
        'the_vault:gem_larimar',
        'minecraft:copper_block',
        'the_vault:gem_larimar'
    ]).id('colossalchests:colossal_chest_copper');

    // Iron
    event.shaped('colossalchests:chest_wall_iron', [
        'ICI',
        'CDC',
        'ICI'
    ], {
        I: 'the_vault:chromatic_iron_ingot',
        C: '#forge:storage_blocks/iron',
        D: 'colossalchests:chest_wall_copper'
    }).id('colossalchests:chest_wall_iron');

    event.shaped('colossalchests:interface_iron', [
        'CIC',
        'IDI',
        'CIC'
    ], {
        I: 'the_vault:chromatic_iron_ingot',
        C: '#forge:storage_blocks/iron',
        D: 'colossalchests:interface_copper'
    }).id('colossalchests:interface_iron');

    event.shapeless('colossalchests:colossal_chest_iron', [
        'colossalchests:colossal_chest_copper',
        'the_vault:gem_larimar',
        'the_vault:gem_larimar',
        'the_vault:chromatic_steel_ingot',
        'the_vault:gem_larimar'
    ]).id('colossalchests:colossal_chest_iron');

    // Gold
    event.shaped('colossalchests:chest_wall_gold', [
        'ICI',
        'CDC',
        'ICI'
    ], {
        I: 'the_vault:chromatic_steel_ingot',
        C: '#forge:storage_blocks/gold',
        D: 'colossalchests:chest_wall_iron'
    }).id('colossalchests:chest_wall_gold');

    event.shaped('colossalchests:interface_gold', [
        'CIC',
        'IDI',
        'CIC'
    ], {
        I: 'the_vault:chromatic_steel_ingot',
        C: '#forge:storage_blocks/gold',
        D: 'colossalchests:interface_iron'
    }).id('colossalchests:interface_gold');

    event.shapeless('colossalchests:colossal_chest_gold', [
        'colossalchests:colossal_chest_iron',
        'the_vault:perfect_larimar',
        'the_vault:perfect_larimar',
        'minecraft:gold_block',
        'the_vault:perfect_larimar'
    ]).id('colossalchests:colossal_chest_gold');

    // Diamond
    event.shaped('colossalchests:chest_wall_diamond', [
        'ICI',
        'CDC',
        'ICI'
    ], {
        I: 'the_vault:chromatic_steel_ingot',
        C: '#forge:storage_blocks/diamond',
        D: 'colossalchests:chest_wall_gold'
    }).id('colossalchests:chest_wall_diamond');

    event.shaped('colossalchests:interface_diamond', [
        'CIC',
        'IDI',
        'CIC'
    ], {
        I: 'the_vault:chromatic_steel_ingot',
        C: '#forge:storage_blocks/diamond',
        D: 'colossalchests:interface_gold'
    }).id('colossalchests:interface_diamond');

    event.shapeless('colossalchests:colossal_chest_diamond', [
        'colossalchests:colossal_chest_gold',
        'the_vault:extraordinary_larimar',
        'the_vault:extraordinary_larimar',
        'minecraft:diamond_block',
        'the_vault:extraordinary_larimar'
    ]).id('colossalchests:colossal_chest_diamond');

    // Obsidian
    event.shaped('colossalchests:chest_wall_obsidian', [
        'IDI',
        'CDC',
        'IDI'
    ], {
        I: 'the_vault:chromatic_steel_ingot',
        D: 'the_vault:vault_diamond',
        C: 'colossalchests:chest_wall_diamond'
    }).id('colossalchests:chest_wall_obsidian');

    event.shaped('colossalchests:interface_obsidian', [
        'IDI',
        'CDC',
        'IDI'
    ], {
        I: 'the_vault:black_chromatic_steel_ingot',
        D: 'the_vault:vault_diamond',
        C: 'colossalchests:interface_diamond'
    }).id('colossalchests:interface_obsidian');

    event.shapeless('colossalchests:colossal_chest_obsidian', [
        'colossalchests:colossal_chest_diamond',
        'the_vault:extraordinary_larimar',
        'the_vault:extraordinary_larimar',
        'minecraft:obsidian',
        'the_vault:extraordinary_larimar'
    ]).id('colossalchests:colossal_chest_obsidian');

    // Upgrade tools
    event.shapeless('colossalchests:upgrade_tool', [
        'the_vault:magic_silk',
        'the_vault:chromatic_steel_ingot',
        'the_vault:perfect_larimar'
    ]).id('colossalchests:upgrade_tool');

    event.shapeless('colossalchests:upgrade_tool', [
        'colossalchests:upgrade_tool_reverse'
    ]).id('colossalchests:upgrade_tool_downgrade');

});
