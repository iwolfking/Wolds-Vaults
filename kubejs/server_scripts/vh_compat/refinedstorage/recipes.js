onEvent("recipes", event => {
    event.remove({ id: 'refinedstorage:quartz_enriched_iron' })
        const dye = {
      "white_dye": "white",
      "red_dye": "red",
      "lime_dye": "lime",
      "light_gray_dye": "light_gray",
      "gray_dye": "gray",
      "black_dye": "black",
      "orange_dye": "orange",
      "green_dye": "green",
      "yellow_dye": "yellow",
      "cyan_dye": "cyan",
      "purple_dye": "purple",
      "blue_dye": "blue",
      "brown_dye": "brown",
      "pink_dye": "pink",
      "magenta_dye": "magenta"
    };

    // Processors
    event.shaped(Item.of('refinedstorage:basic_processor'), [
        ' I ',
        ' S ',
        ' I '
    ], {
        I: 'the_vault:chromatic_iron_ingot',
        S: 'refinedstorage:silicon'
    });

    event.shaped(Item.of('refinedstorage:improved_processor'), [
        ' G ',
        ' B ',
        'LLL'
    ], {
        G: 'minecraft:gold_ingot',
        B: 'refinedstorage:basic_processor',
        L: 'the_vault:gem_larimar',
        _: 'the_vault:chromatic_steel_ingot' // central line
    });

    event.shaped(Item.of('refinedstorage:advanced_processor'), [
        ' D ',
        ' B ',
        'LLL'
    ], {
        D: 'minecraft:diamond',
        B: 'refinedstorage:basic_processor',
        L: 'the_vault:gem_larimar',
        _: 'the_vault:chromatic_steel_ingot'
    });

    // Storage parts/disks
    event.shaped(Item.of('refinedstorage:1k_storage_part'), [
        'V V',
        'IRI',
        'SLS'
    ], {
        V: 'the_vault:vault_essence',
        I: 'the_vault:chromatic_steel_ingot',
        R: 'minecraft:redstone',
        S: 'refinedstorage:silicon',
        L: 'the_vault:gem_larimar'
    });

    event.shapeless('refinedstorage:1k_storage_disk', [
        'refinedstorage:storage_housing',
        'refinedstorage:1k_storage_part'
    ]);

    event.shaped(Item.of('refinedstorage:4k_storage_part'), [
        'ICI',
        'PSP',
        'IPI'
    ], {
        I: 'the_vault:chromatic_steel_ingot',
        C: 'the_vault:vault_diamond',
        P: 'refinedstorage:1k_storage_part',
        S: 'the_vault:perfect_larimar'
    });

    event.shapeless('refinedstorage:4k_storage_disk', [
        'refinedstorage:storage_housing',
        'refinedstorage:4k_storage_part'
    ]);

    event.shaped(Item.of('refinedstorage:16k_storage_part'), [
        'BVB',
        'PRP',
        'BRB'
    ], {
        B: 'the_vault:black_chromatic_steel_ingot',
        V: 'the_vault:vault_diamond',
        P: 'refinedstorage:4k_storage_part',
        R: 'minecraft:redstone'
    });

    event.shapeless('refinedstorage:16k_storage_disk', [
        'refinedstorage:storage_housing',
        'refinedstorage:16k_storage_part'
    ]);

    event.shaped(Item.of('refinedstorage:64k_storage_part'), [
        'BVB',
        'PXP',
        'BRB'
    ], {
        B: 'the_vault:black_chromatic_steel_ingot',
        V: 'the_vault:vault_diamond_block',
        P: 'refinedstorage:16k_storage_part',
        X: 'the_vault:echo_pog',
        R: 'refinedstorage:16k_storage_part'
    });

    event.shapeless('refinedstorage:64k_storage_disk', [
        'refinedstorage:storage_housing',
        'refinedstorage:64k_storage_part'
    ]);

    // Quartz enriched iron
    event.shaped(Item.of('refinedstorage:quartz_enriched_iron', 2), [
        'LI ',
        'IQ ',
        '   '
    ], {
        L: 'the_vault:gem_larimar',
        I: 'the_vault:chromatic_iron_ingot',
        Q: 'minecraft:quartz'
    });

    // Machine casing
    event.shaped('refinedstorage:machine_casing', [
        'ICI',
        'D V',
        'ICI'
    ], {
        I: 'the_vault:chromatic_steel_ingot',
        C: 'refinedstorage:quartz_enriched_iron',
        D: 'the_vault:vault_diamond',
        V: 'refinedstorage:quartz_enriched_iron'
    });

    // Disk drives, grids, and wireless grids
    event.shaped('refinedstorage:disk_drive', [
        'CFC',
        'CMC',
        'CAC'
    ], {
        C: 'the_vault:chromatic_steel_ingot',
        F: '#forge:chests',
        M: 'refinedstorage:machine_casing',
        A: 'refinedstorage:advanced_processor'
    });

    event.shaped('refinedstorage:grid', [
        'CGC',
        'LPL',
        'CAC'
    ], {
        C: 'the_vault:chromatic_steel_ingot',
        G: 'the_vault:gem_pog',
        L: 'the_vault:gem_larimar',
        P: 'the_vault:perfect_larimar',
        A: 'refinedstorage:advanced_processor'
    });

    event.shapeless('refinedstorage:grid', ['#refinedstorage:grid', 'minecraft:light_blue_dye']);
    event.shapeless('refinedstorage:crafting_grid', ['#refinedstorage:crafting_grid', 'minecraft:light_blue_dye']);
    event.shapeless('refinedstorage:detector', ['#refinedstorage:detector', 'minecraft:light_blue_dye']);
    event.shapeless('refinedstorage:wireless_transmitter', ['#refinedstorage:wireless_transmitter', 'minecraft:light_blue_dye']);

    // Dyes
    for (const [dyeId, dyeName] of Object.entries(dye)) {
        event.shapeless(`refinedstorage:${dyeName}_grid`, ['#refinedstorage:grid', `minecraft:${dyeId}`]);
        event.shapeless(`refinedstorage:${dyeName}_crafting_grid`, ['#refinedstorage:crafting_grid', `minecraft:${dyeId}`]);
        event.shapeless(`refinedstorage:${dyeName}_detector`, ['#refinedstorage:detector', `minecraft:${dyeId}`]);
        event.shapeless(`refinedstorage:${dyeName}_wireless_transmitter`, ['#refinedstorage:wireless_transmitter', `minecraft:${dyeId}`]);
        event.shapeless(`refinedstorage:${dyeName}_controller`, ['#refinedstorage:controller', `minecraft:${dyeId}`]);
    }

    // Example for the controller
    event.shaped('refinedstorage:controller', [
        'CAC',
        'DMC',
        'CPC'
    ], {
        C: 'the_vault:chromatic_steel_ingot',
        A: 'refinedstorage:advanced_processor',
        D: 'refinedstorage:destruction_core',
        M: 'refinedstorage:machine_casing',
        P: 'refinedstorage:construction_core'
    });

    // Shapeless fluid disks
    event.shapeless('refinedstorage:64k_fluid_storage_disk', ['refinedstorage:storage_housing', 'refinedstorage:64k_fluid_storage_part']);
    event.shapeless('refinedstorage:256k_fluid_storage_disk', ['refinedstorage:storage_housing', 'refinedstorage:256k_fluid_storage_part']);
    event.shapeless('refinedstorage:1024k_fluid_storage_disk', ['refinedstorage:storage_housing', 'refinedstorage:1024k_fluid_storage_part']);
    event.shapeless('refinedstorage:4096k_fluid_storage_disk', ['refinedstorage:storage_housing', 'refinedstorage:4096k_fluid_storage_part']);
})