/* scripts made by Douwsky
for Iskall85's Vaulthunters */

// adding recipes

<tag:items:forge:generators>.add([<item:irongenerators:stone_generator>, <item:irongenerators:iron_generator>, <item:irongenerators:copper_generator>, <item:irongenerators:gold_generator>, <item:irongenerators:diamond_generator>, <item:irongenerators:netherite_generator>]);

craftingTable.addShaped("irongenerators_irongenerator", <item:irongenerators:iron_generator>, [
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>],
    [<item:the_vault:chromatic_iron_ingot>, <item:minecraft:furnace>, <item:the_vault:chromatic_iron_ingot>],
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>]
]);

craftingTable.addShaped("irongenerators_copper_generator", <item:irongenerators:copper_generator>, [
    [<item:the_vault:chromatic_steel_ingot>, <tag:items:forge:storage_blocks/copper>, <item:the_vault:chromatic_steel_ingot>],
    [<tag:items:forge:storage_blocks/copper>, <tag:items:forge:generators>, <tag:items:forge:storage_blocks/copper>],
    [<item:the_vault:chromatic_steel_ingot>, <tag:items:forge:storage_blocks/copper>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("irongenerators_gold_generator", <item:irongenerators:gold_generator>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:minecraft:gold_block>, <item:the_vault:chromatic_steel_ingot>],
    [<item:minecraft:gold_block>, <tag:items:forge:generators>, <item:minecraft:gold_block>],
    [<item:the_vault:chromatic_steel_ingot>, <item:minecraft:gold_block>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("irongenerators_diamond_generator", <item:irongenerators:diamond_generator>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:minecraft:diamond_block>, <item:the_vault:chromatic_steel_ingot>],
    [<item:minecraft:diamond_block>, <tag:items:forge:generators>, <item:minecraft:diamond_block>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:vault_diamond_block>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("irongenerators_netherite_generator", <item:irongenerators:netherite_generator>, [
    [<item:minecraft:netherite_block>, <item:irongenerators:diamond_generator>, <item:minecraft:netherite_block>],
    [<item:irongenerators:diamond_generator>, <tag:items:forge:generators>, <item:irongenerators:diamond_generator>],
    [<item:minecraft:netherite_block>, <item:the_vault:black_chromatic_steel_block>, <item:minecraft:netherite_block>]
]);

craftingTable.addShaped("ironfurnaces_heater", <item:ironfurnaces:heater>, [
    [<item:the_vault:polished_vault_stone>, <item:minecraft:comparator>, <item:the_vault:polished_vault_stone>],
    [<item:the_vault:polished_vault_stone>, <item:minecraft:redstone_block>, <item:the_vault:polished_vault_stone>],
    [<item:the_vault:polished_vault_stone>, <tag:items:forge:furnaces>, <item:the_vault:polished_vault_stone>]
]);

craftingTable.addShaped("ironfurnaces_item_heater", <item:ironfurnaces:item_heater>, [
    [<item:the_vault:polished_vault_stone>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:polished_vault_stone>],
    [<item:minecraft:redstone_block>, <item:minecraft:comparator>, <item:minecraft:redstone_block>],
    [<item:the_vault:polished_vault_stone>, <item:the_vault:vault_diamond>, <item:the_vault:polished_vault_stone>]
]);

craftingTable.addShaped("ironfurnaces_item_copy", <item:ironfurnaces:item_copy>, [
    [<item:the_vault:polished_vault_stone>, <item:the_vault:magic_silk>, <item:the_vault:polished_vault_stone>],
    [<item:the_vault:magic_silk>, <tag:items:forge:furnaces>, <item:the_vault:magic_silk>],
    [<item:the_vault:polished_vault_stone>, <item:the_vault:magic_silk>, <item:the_vault:polished_vault_stone>]
]);

craftingTable.addShaped("ironfurnaces_item_linker", <item:ironfurnaces:item_linker>, [
    [<item:the_vault:black_chromatic_steel_ingot>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:ironfurnaces:rainbow_core>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:the_vault:black_chromatic_steel_ingot>]
]);

craftingTable.addShaped("ironfurnaces_augment_factory", <item:ironfurnaces:augment_factory>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>],
    [<item:ironfurnaces:iron_furnace>, <item:the_vault:echo_pog>, <item:ironfurnaces:iron_furnace>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("ironfurnaces_iron_furnace", <item:ironfurnaces:iron_furnace>, [
    [<item:the_vault:gem_larimar>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:gem_larimar>],
    [<item:the_vault:chromatic_steel_ingot>, <item:minecraft:furnace>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("ironfurnaces_gold_furnace", <item:ironfurnaces:gold_furnace>, [
    [<item:the_vault:gem_larimar>, <item:minecraft:gold_block>, <item:the_vault:gem_larimar>],
    [<item:the_vault:chromatic_steel_ingot>, <item:ironfurnaces:iron_furnace>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("ironfurnaces_diamond_furnace", <item:ironfurnaces:diamond_furnace>, [
    [<item:the_vault:gem_larimar>, <item:minecraft:diamond_block>, <item:the_vault:gem_larimar>],
    [<item:the_vault:chromatic_steel_ingot>, <item:ironfurnaces:gold_furnace>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("ironfurnaces_emerald_furnace", <item:ironfurnaces:emerald_furnace>, [
    [<item:the_vault:gem_larimar>, <item:minecraft:emerald_block>, <item:the_vault:gem_larimar>],
    [<item:the_vault:chromatic_steel_ingot>, <item:ironfurnaces:diamond_furnace>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("ironfurnaces_crystal_furnace", <item:ironfurnaces:crystal_furnace>, [
    [<item:the_vault:gem_larimar>, <item:the_vault:vault_diamond_block>, <item:the_vault:gem_larimar>],
    [<item:the_vault:chromatic_steel_ingot>, <item:ironfurnaces:emerald_furnace>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("ironfurnaces_obsidian_furnace", <item:ironfurnaces:obsidian_furnace>, [
    [<item:the_vault:gem_larimar>, <item:minecraft:crying_obsidian>, <item:the_vault:gem_larimar>],
    [<item:the_vault:chromatic_steel_ingot>, <item:ironfurnaces:crystal_furnace>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("ironfurnaces_netherite_furnace", <item:ironfurnaces:netherite_furnace>, [
    [<item:the_vault:gem_larimar>, <item:minecraft:netherite_block>, <item:the_vault:gem_larimar>],
    [<item:the_vault:chromatic_steel_ingot>, <item:ironfurnaces:obsidian_furnace>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("ironfurnaces_rainbow_core", <item:ironfurnaces:rainbow_core>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>],
    [<item:ironfurnaces:netherite_furnace>, <item:the_vault:echo_pog>, <item:ironfurnaces:netherite_furnace>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShapeless("ironfurnaces_nrainbow_plating", <item:ironfurnaces:rainbow_plating> *8, [
    <item:ironfurnaces:iron_furnace>, <item:ironfurnaces:gold_furnace>, <item:ironfurnaces:diamond_furnace>,
    <item:ironfurnaces:obsidian_furnace>, <item:ironfurnaces:crystal_furnace>, <item:ironfurnaces:netherite_furnace>
]);

craftingTable.addShaped("ironfurnaces_augment_generator", <item:ironfurnaces:augment_generator>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:vault_diamond_block>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:magic_silk_block>, <item:the_vault:echo_pog>, <item:the_vault:magic_silk_block>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:vault_diamond_block>, <item:the_vault:chromatic_steel_ingot>]
]);
