// scripts made by Douwsky
// for Iskall85's Vaulthunters

onEvent('recipes', event => {

    event.shaped('easy_piglins:barterer', [
        'GGG',
        'GCG',
        'SRS'
    ], {
        G: 'minecraft:glass',
        C: 'the_vault:chromatic_gold_block',
        S: 'the_vault:wutodic_silver_ingot',
        R: 'minecraft:red_nether_bricks'
    }).id('easy_piglins:barterer');

    event.shaped('easy_villagers:trader', [
        'GGG',
        'GPG',
        'CCC'
    ], {
        G: 'minecraft:glass',
        P: 'the_vault:perfect_larimar',
        C: 'the_vault:chromatic_iron_ingot'
    }).id('easy_villagers:trader');

    event.shaped('easy_villagers:auto_trader', [
        'GMG',
        'T R T',
        'BBB'
    ], {
        G: 'minecraft:glass',
        M: 'the_vault:gem_pog',
        T: 'woldsvaults:chroma_core',
        B: 'the_vault:black_chromatic_steel_ingot',
        R: 'easy_villagers:trader'
    }).id('easy_villagers:auto_trader');

    event.shaped('easy_villagers:farmer', [
        'GGG',
        'GTG',
        'CSC'
    ], {
        G: 'minecraft:glass',
        T: 'easy_villagers:trader',
        C: 'the_vault:chromatic_steel_ingot',
        S: 'the_vault:chromatic_steel_block'
    }).id('easy_villagers:farmer');

    event.shaped('easy_villagers:iron_farm', [
        'GGG',
        'GFG',
        'TBT'
    ], {
        G: 'minecraft:glass',
        F: 'easy_villagers:farmer',
        T: 'woldsvaults:chroma_core',
        B: 'the_vault:black_chromatic_steel_ingot'
    }).id('easy_villagers:iron_farm');

});
