// ================================
// 1️⃣ Tags
// ================================
onEvent('tags.items', event => {
    event.add('drawers:drawers', [
        '#storagedrawers:drawers',
        '#framedcompactdrawers:frame_triple'
    ]);
});

// ================================
// 2️⃣ Recipes
// ================================
onEvent('recipes', event => {

    const logs = {
        oak_log: 'oak',
        birch_log: 'birch',
        warped_stem: 'warped',
        jungle_log: 'jungle',
        acacia_log: 'acacia',
        dark_oak_log: 'dark_oak',
        spruce_log: 'spruce',
        crimson_stem: 'crimson'
    };

    // Framed Full Drawers 1, 2, 4
    const fullNames = ['one','two','four'];
    // Framed Half Drawers 1, 2, 4
    const halfNames = ['one','two','four'];
    for (const [logId, logName] of Object.entries(logs)) {

        // Full Drawers 1, 2, 4
        ['1','2','4'].forEach(n => {
            event.shaped(`storagedrawers:${logName}_full_drawers_${n}`, [
                'DID',
                'ILI',
                'DID'
            ], {
                D: 'the_vault:driftwood',
                I: 'the_vault:chromatic_iron_ingot',
                L: `minecraft:${logId}`
            }).id(`storagedrawers:${logName}_full_drawers_${n}`);
        });

        // Half Drawers 1, 2, 4
        ['1','2','4'].forEach(n => {
            event.shaped(`storagedrawers:${logName}_half_drawers_${n}`, [
                'DID',
                'ISI',
                'DID'
            ], {
                D: 'the_vault:driftwood',
                I: 'the_vault:chromatic_iron_ingot',
                S: `minecraft:${logName}_slab`
            }).id(`storagedrawers:${logName}_half_drawers_${n}`);
        });


        ['1','2','4'].forEach((n, idx) => {
            event.shaped(`framedcompactdrawers:framed_full_${fullNames[idx]}`, [
                'SSS',
                'SFS',
                'SSS'
            ], {
                S: 'minecraft:stick',
                F: `storagedrawers:${logName}_full_drawers_${n}`
            }).id(`framedcompactdrawers:framed_full_${fullNames[idx]}`);
        });


        ['1','2','4'].forEach((n, idx) => {
            event.shaped(`framedcompactdrawers:framed_half_${halfNames[idx]}`, [
                'SSS',
                'SFS',
                'SSS'
            ], {
                S: 'minecraft:stick',
                F: `storagedrawers:${logName}_half_drawers_${n}`
            }).id(`framedcompactdrawers:framed_half_${halfNames[idx]}`);
        });

    }

    // Controllers
    event.shaped('storagedrawers:controller', [
        'EBE',
        'DGD',
        'EBE'
    ], {
        E: 'the_vault:black_chromatic_steel_ingot',
        B: 'the_vault:extraordinary_larimar',
        D: '#drawers:drawers',
        G: 'the_vault:gem_pog'
    }).id('storagedrawers:controller');

    event.shaped('storagedrawers:controller_slave', [
        'PIP',
        'IDI',
        'PDP'
    ], {
        P: 'the_vault:polished_vault_stone',
        I: 'the_vault:chromatic_steel_ingot',
        D: '#drawers:drawers'
    }).id('storagedrawers:controller_slave');

    // Compacting Drawers
    event.shaped('storagedrawers:compacting_drawers_3', [
        'ICI',
        'EDE',
        'ICI'
    ], {
        I: 'the_vault:chromatic_steel_ingot',
        C: 'the_vault:vault_diamond',
        E: 'the_vault:extraordinary_larimar',
        D: '#drawers:drawers'
    }).id('storagedrawers:compacting_drawers_3');

    // Drawer Key
    event.shaped('storagedrawers:drawer_key', [
        'VI ',
        'UD ',
        ' V '
    ], {
        V: 'the_vault:vault_diamond',
        I: 'the_vault:chromatic_steel_ingot',
        U: 'storagedrawers:upgrade_template',
        D: '#drawers:drawers'
    }).id('storagedrawers:drawer_key');

    // Upgrade Template x4
    event.shaped(Item.of('storagedrawers:upgrade_template', 4), [
        'GMG',
        'D D',
        'GMG'
    ], {
        G: 'the_vault:magic_silk',
        M: 'the_vault:gem_larimar',
        D: 'woldsvaults:infused_driftwood'
    }).id('storagedrawers:upgrade_template');

    // Storage Upgrades
    event.shaped('storagedrawers:iron_storage_upgrade', [
        'EVE',
        'VUV',
        'EVE'
    ], {
        E: 'the_vault:chromatic_iron_ingot',
        V: 'the_vault:vault_essence',
        U: 'storagedrawers:upgrade_template'
    }).id('storagedrawers:iron_storage_upgrade');

    event.shaped('storagedrawers:gold_storage_upgrade', [
        'GVG',
        'VUV',
        'GVG'
    ], {
        G: 'the_vault:chromatic_gold_nugget',
        V: 'the_vault:vault_essence',
        U: 'storagedrawers:upgrade_template'
    }).id('storagedrawers:gold_storage_upgrade');

    event.shaped('storagedrawers:diamond_storage_upgrade', [
        'GVG',
        'VUV',
        'GVG'
    ], {
        G: 'the_vault:chromatic_gold_nugget',
        V: 'the_vault:vault_diamond',
        U: 'storagedrawers:upgrade_template'
    }).id('storagedrawers:diamond_storage_upgrade');

    event.shaped('storagedrawers:emerald_storage_upgrade', [
        'CEC',
        'EUE',
        'CEC'
    ], {
        C: 'woldsvaults:chroma_core',
        E: 'the_vault:black_chromatic_steel_ingot',
        U: 'storagedrawers:upgrade_template'
    }).id('storagedrawers:emerald_storage_upgrade');

    event.shaped('storagedrawers:void_upgrade', [
        'EVE',
        'CUC',
        'EVE'
    ], {
        E: 'the_vault:chromatic_iron_ingot',
        V: 'the_vault:carbon',
        C: 'minecraft:cactus',
        U: 'storagedrawers:upgrade_template'
    }).id('storagedrawers:void_upgrade');

});
