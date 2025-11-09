onEvent('recipes', event => {

    // Building Gadget
    event.shaped('buildinggadgets:gadget_building', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'the_vault:chromatic_steel_ingot',
        B: 'the_vault:extraordinary_larimar',
        C: 'the_vault:vault_diamond',
        D: 'the_vault:chromatic_steel_ingot',
        E: 'the_vault:chromatic_steel_block'
    }).id('buildinggadgets:gadget_building');

    // Destruction Gadget
    event.shaped('buildinggadgets:gadget_destruction', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'the_vault:chromatic_steel_ingot',
        B: 'the_vault:gem_pog',
        C: 'the_vault:gem_echo',
        D: 'buildinggadgets:gadget_building'
    }).id('buildinggadgets:gadget_destruction');

    // Exchange Gadget
    event.shaped('buildinggadgets:gadget_exchanging', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'the_vault:chromatic_steel_ingot',
        B: 'the_vault:chromatic_steel_block',
        C: 'the_vault:vault_essence',
        D: 'buildinggadgets:gadget_building'
    }).id('buildinggadgets:gadget_exchanging');

    // Copy Paste Gadget
    event.shaped('buildinggadgets:gadget_copy_paste', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'the_vault:chromatic_steel_ingot',
        B: 'minecraft:redstone_block',
        C: 'the_vault:vault_essence',
        D: 'buildinggadgets:gadget_building'
    }).id('buildinggadgets:gadget_copy_paste');

    // Dense Paste Block (Water) produces 8
    event.shaped(Item.of('buildinggadgets:construction_block_dense', 8), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'buildinggadgets:construction_block_powder',
        B: 'minecraft:water_bucket'
    }).id('buildinggadgets:dense_paste_block_water');

});