onEvent('recipes', event => {

    // Chromatic Iron Block
    event.smelting('the_vault:chromatic_iron_block', 'the_vault:raw_chromatic_iron_block').xp(1.0).cookingTime(200).id('the_vault:raw2blockchromatic');

    // Thermal Nickel Block
    event.smelting('thermal:nickel_block', 'thermal:raw_nickel_block').xp(1.0).cookingTime(200).id('thermal:raw2blocknickel');

    // Thermal Silver Block
    event.smelting('thermal:silver_block', 'thermal:raw_silver_block').xp(1.0).cookingTime(200).id('thermal:raw2blocksilver');

    // Thermal Lead Block
    event.smelting('thermal:lead_block', 'thermal:raw_lead_block').xp(1.0).cookingTime(200).id('thermal:raw2blocklead');

    // Thermal Tin Block
    event.smelting('thermal:tin_block', 'thermal:raw_tin_block').xp(1.0).cookingTime(200).id('thermal:raw2blocktin');

    // Mekanism Uranium Block
    event.smelting('mekanism:block_uranium', 'mekanism:block_raw_uranium').xp(1.0).cookingTime(200).id('mekanism:raw2blockuranium');

    // Mekanism Lead Block
    event.smelting('mekanism:block_lead', 'mekanism:block_raw_lead').xp(1.0).cookingTime(200).id('mekanism:raw2blocklead2');

    // Mekanism Tin Block
    event.smelting('mekanism:block_tin', 'mekanism:block_raw_tin').xp(1.0).cookingTime(200).id('mekanism:raw2blocktin2');

    // Mekanism Osmium Block
    event.smelting('mekanism:block_osmium', 'mekanism:block_raw_osmium').xp(1.0).cookingTime(200).id('mekanism:raw2blockosmium');

    // Create Zinc Block
    event.smelting('create:zinc_block', 'create:raw_zinc_block').xp(1.0).cookingTime(200).id('create:raw2blockzinc');

    // Minecraft Gold Block
    event.smelting('minecraft:gold_block', 'minecraft:raw_gold_block').xp(1.0).cookingTime(200).id('minecraft:raw2blockgold');

    // Minecraft Copper Block
    event.smelting('minecraft:copper_block', 'minecraft:raw_copper_block').xp(1.0).cookingTime(200).id('minecraft:raw2blockcopper');

    // Minecraft Iron Block
    event.smelting('minecraft:iron_block', 'minecraft:raw_iron_block').xp(1.0).cookingTime(200).id('minecraft:raw2blockiron');

});
