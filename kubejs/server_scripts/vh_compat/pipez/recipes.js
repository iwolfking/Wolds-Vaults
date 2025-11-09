onEvent('recipes', event => {

    // Ultimate Upgrade
    event.shaped('pipez:ultimate_upgrade', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'the_vault:gem_echo',
        B: 'the_vault:black_chromatic_steel_ingot',
        C: 'pipez:advanced_upgrade',
        D: 'the_vault:magic_silk_block'
    }).id('pipez:ultimate_upgrade');

    // Advanced Upgrade
    event.shaped('pipez:advanced_upgrade', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'the_vault:vault_diamond',
        B: 'the_vault:black_chromatic_steel_ingot',
        C: 'pipez:improved_upgrade',
        D: 'the_vault:magic_silk_block'
    }).id('pipez:advanced_upgrade');

    // Improved Upgrade
    event.shaped('pipez:improved_upgrade', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'the_vault:chromatic_steel_ingot',
        B: 'minecraft:redstone_block',
        C: 'pipez:basic_upgrade',
        D: 'woldsvaults:chroma_core'
    }).id('pipez:improved_upgrade');

    // Basic Upgrade
    event.shaped('pipez:basic_upgrade', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'the_vault:chromatic_iron_ingot',
        B: 'the_vault:vault_essence',
        C: 'minecraft:redstone_block'
    }).id('pipez:basic_upgrade');

    // Universal Pipe (output 6)
    event.shaped('pipez:universal_pipe', [
        'ABC',
        'DED',
        'ABC'
    ], {
        A: 'pipez:item_pipe',
        B: 'pipez:energy_pipe',
        C: 'pipez:fluid_pipe',
        D: 'the_vault:chromatic_iron_ingot',
        E: '#forge:storage_blocks/redstone'
    }, 6).id('pipez:universal_pipe');

    // Gas Pipe (output 16)
    event.shaped('pipez:gas_pipe', [
        'AAA',
        'BDB',
        'AAA'
    ], {
        A: 'the_vault:chromatic_iron_ingot',
        B: 'mekanism:alloy_infused',
        D: 'minecraft:redstone_block'
    }, 16).id('pipez:gas_pipe');

    // Energy Pipe (output 16)
    event.shaped('pipez:energy_pipe', [
        'AAA',
        'BDB',
        'AAA'
    ], {
        A: 'the_vault:chromatic_iron_ingot',
        B: 'the_vault:perfect_larimar',
        D: 'minecraft:redstone_block'
    }, 16).id('pipez:energy_pipe');

    // Fluid Pipe (output 16)
    event.shaped('pipez:fluid_pipe', [
        'AAA',
        'BDB',
        'AAA'
    ], {
        A: 'the_vault:chromatic_iron_ingot',
        B: 'the_vault:perfect_larimar',
        D: 'minecraft:bucket'
    }, 16).id('pipez:fluid_pipe');

    // Item Pipe (output 16)
    event.shaped('pipez:item_pipe', [
        'AAA',
        'BDB',
        'AAA'
    ], {
        A: 'the_vault:chromatic_iron_ingot',
        B: 'the_vault:perfect_larimar',
        D: 'minecraft:dropper'
    }, 16).id('pipez:item_pipe');

    // Wrench
    event.shaped('pipez:wrench', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'minecraft:air',
        B: 'minecraft:flint',
        C: '#forge:rods',
        D: 'minecraft:flint',
        E: 'minecraft:air',
        F: 'minecraft:air'
    }).id('pipez:wrench');

    // Filter Destination Tool
    event.shaped('pipez:filter_destination_tool', [
        'AAA',
        'BDB',
        'AEA'
    ], {
        A: 'the_vault:chromatic_iron_ingot',
        B: 'minecraft:redstone_block',
        D: '#forge:glass_panes',
        E: '#minecraft:buttons'
    }).id('pipez:filter_destination_tool');

});
