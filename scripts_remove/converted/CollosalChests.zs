/* scripts made by Douwsky
for Iskall85's Vaulthunters */

// adding recipes

// Wood
craftingTable.addShaped("colossalchests_chest_wall_wood", <item:colossalchests:chest_wall_wood>, [
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:driftwood>, <item:the_vault:chromatic_iron_ingot>],
    [<item:the_vault:driftwood>, <tag:items:minecraft:logs>, <item:the_vault:driftwood>],
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:driftwood>, <item:the_vault:chromatic_iron_ingot>]
]);

craftingTable.addShaped("colossalchests_chest_interface_wood", <item:colossalchests:interface_wood>, [
    [<item:the_vault:driftwood>, <item:the_vault:polished_vault_stone>, <item:the_vault:driftwood>],
    [<item:the_vault:polished_vault_stone>, <item:colossalchests:colossal_chest_wood>, <item:the_vault:polished_vault_stone>],
    [<item:the_vault:driftwood>, <item:the_vault:polished_vault_stone>, <item:the_vault:driftwood>]
]);

craftingTable.addShapeless("colossalchests_chest_wood", <item:colossalchests:colossal_chest_wood>, [
 <item:colossalchests:chest_wall_wood>, <item:the_vault:gem_larimar>, <item:the_vault:gem_larimar>,
 <item:the_vault:gem_larimar>
]);

// Copper
craftingTable.addShaped("colossalchests_chest_wall_copper", <item:colossalchests:chest_wall_copper>, [
    [<tag:items:forge:storage_blocks/copper>, <item:the_vault:chromatic_iron_ingot>, <tag:items:forge:storage_blocks/copper>],
    [<item:the_vault:chromatic_iron_ingot>, <item:colossalchests:chest_wall_wood>, <item:the_vault:chromatic_iron_ingot>],
    [<tag:items:forge:storage_blocks/copper>, <item:the_vault:chromatic_iron_ingot>, <tag:items:forge:storage_blocks/copper>]
]);

craftingTable.addShaped("colossalchests_chest_interface_copper", <item:colossalchests:interface_copper>, [
    [<tag:items:forge:storage_blocks/copper>, <item:the_vault:chromatic_iron_ingot>, <tag:items:forge:storage_blocks/copper>],
    [<item:the_vault:chromatic_iron_ingot>, <item:colossalchests:interface_wood>, <item:the_vault:chromatic_iron_ingot>],
    [<tag:items:forge:storage_blocks/copper>, <item:the_vault:chromatic_iron_ingot>, <tag:items:forge:storage_blocks/copper>]
]);

craftingTable.addShapeless("colossalchests_chest_copper", <item:colossalchests:colossal_chest_copper>, [
 <item:colossalchests:colossal_chest_wood>, <item:the_vault:gem_larimar>, <item:the_vault:gem_larimar>,
 <item:minecraft:copper_block>, <item:the_vault:gem_larimar>
]);

// Iron
craftingTable.addShaped("colossalchests_chest_wall_iron", <item:colossalchests:chest_wall_iron>, [
    [<tag:items:forge:storage_blocks/iron>, <item:the_vault:chromatic_iron_ingot>, <tag:items:forge:storage_blocks/iron>],
    [<item:the_vault:chromatic_iron_ingot>, <item:colossalchests:chest_wall_copper>, <item:the_vault:chromatic_iron_ingot>],
    [<tag:items:forge:storage_blocks/iron>, <item:the_vault:chromatic_iron_ingot>, <tag:items:forge:storage_blocks/iron>]
]);

craftingTable.addShaped("colossalchests_chest_interface_iron", <item:colossalchests:interface_iron>, [
[<tag:items:forge:storage_blocks/iron>, <item:the_vault:chromatic_iron_ingot>, <tag:items:forge:storage_blocks/iron>],
    [<item:the_vault:chromatic_iron_ingot>, <item:colossalchests:interface_copper>, <item:the_vault:chromatic_iron_ingot>],
    [<tag:items:forge:storage_blocks/iron>, <item:the_vault:chromatic_iron_ingot>, <tag:items:forge:storage_blocks/iron>]
]);

craftingTable.addShapeless("colossalchests_chest_iron", <item:colossalchests:colossal_chest_iron>, [
 <item:colossalchests:colossal_chest_copper>, <item:the_vault:gem_larimar>, <item:the_vault:gem_larimar>,
 <item:the_vault:chromatic_steel_ingot>, <item:the_vault:gem_larimar>
]);

// Gold
craftingTable.addShaped("colossalchests_chest_wall_gold", <item:colossalchests:chest_wall_gold>, [
    [<tag:items:forge:storage_blocks/gold>, <item:the_vault:chromatic_steel_ingot>, <tag:items:forge:storage_blocks/gold>],
    [<item:the_vault:chromatic_steel_ingot>, <item:colossalchests:chest_wall_iron>, <item:the_vault:chromatic_steel_ingot>],
    [<tag:items:forge:storage_blocks/gold>, <item:the_vault:chromatic_steel_ingot>, <tag:items:forge:storage_blocks/gold>]
]);

craftingTable.addShaped("colossalchests_chest_interface_gold", <item:colossalchests:interface_gold>, [
    [<tag:items:forge:storage_blocks/gold>, <item:the_vault:chromatic_steel_ingot>, <tag:items:forge:storage_blocks/gold>],
    [<item:the_vault:chromatic_steel_ingot>, <item:colossalchests:interface_iron>, <item:the_vault:chromatic_steel_ingot>],
    [<tag:items:forge:storage_blocks/gold>, <item:the_vault:chromatic_steel_ingot>, <tag:items:forge:storage_blocks/gold>]
]);

craftingTable.addShapeless("colossalchests_chest_gold", <item:colossalchests:colossal_chest_gold>, [
 <item:colossalchests:colossal_chest_iron>, <item:the_vault:perfect_larimar>, <item:the_vault:perfect_larimar>,
 <item:minecraft:gold_block>, <item:the_vault:perfect_larimar>
]);

// Diamond
craftingTable.addShaped("colossalchests_chest_wall_diamond", <item:colossalchests:chest_wall_diamond>, [
    [<tag:items:forge:storage_blocks/diamond>, <item:the_vault:chromatic_steel_ingot>, <tag:items:forge:storage_blocks/diamond>],
    [<item:the_vault:chromatic_steel_ingot>, <item:colossalchests:chest_wall_gold>, <item:the_vault:chromatic_steel_ingot>],
    [<tag:items:forge:storage_blocks/diamond>, <item:the_vault:chromatic_steel_ingot>, <tag:items:forge:storage_blocks/diamond>]
]);

craftingTable.addShaped("colossalchests_chest_interface_diamond", <item:colossalchests:interface_diamond>, [
    [<tag:items:forge:storage_blocks/diamond>, <item:the_vault:chromatic_steel_ingot>, <tag:items:forge:storage_blocks/diamond>],
    [<item:the_vault:chromatic_steel_ingot>, <item:colossalchests:interface_gold>, <item:the_vault:chromatic_steel_ingot>],
    [<tag:items:forge:storage_blocks/diamond>, <item:the_vault:chromatic_steel_ingot>, <tag:items:forge:storage_blocks/diamond>]
]);

craftingTable.addShapeless("colossalchests_chest_diamond", <item:colossalchests:colossal_chest_diamond>, [
 <item:colossalchests:colossal_chest_gold>, <item:the_vault:extraordinary_larimar>, <item:the_vault:extraordinary_larimar>,
 <item:minecraft:diamond_block>, <item:the_vault:extraordinary_larimar>
]);

// Obsidian
craftingTable.addShaped("colossalchests_chest_wall_obsidian", <item:colossalchests:chest_wall_obsidian>, [
    [<item:the_vault:vault_diamond>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:vault_diamond>],
    [<item:minecraft:obsidian>, <item:colossalchests:chest_wall_diamond>, <item:minecraft:obsidian>],
    [<item:the_vault:vault_diamond>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:vault_diamond>]
]);

craftingTable.addShaped("colossalchests_chest_interface_obsidian", <item:colossalchests:interface_obsidian>, [
    [<item:the_vault:vault_diamond>, <item:the_vault:black_chromatic_steel_ingot>, <item:the_vault:vault_diamond>],
    [<item:minecraft:obsidian>, <item:colossalchests:interface_diamond>, <item:minecraft:obsidian>],
    [<item:the_vault:vault_diamond>, <item:the_vault:black_chromatic_steel_ingot>, <item:the_vault:vault_diamond>]
]);

craftingTable.addShapeless("colossalchests_chest_obsidian", <item:colossalchests:colossal_chest_obsidian>, [
 <item:colossalchests:colossal_chest_diamond>, <item:the_vault:extraordinary_larimar>, <item:the_vault:extraordinary_larimar>,
 <item:minecraft:obsidian>, <item:the_vault:extraordinary_larimar>
]);

craftingTable.addShapeless("colossalchests_upgrade_tool", <item:colossalchests:upgrade_tool>, [
 <item:the_vault:magic_silk>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:perfect_larimar>
]);

craftingTable.addShapeless("colossalchests_upgrade_tool_downgrade", <item:colossalchests:upgrade_tool>, [
 <item:colossalchests:upgrade_tool_reverse>
]);