/* scripts made by Douwsky
for Iskall85's Vaulthunters */

// adding recipes

craftingTable.addShaped("ultimate_upgrade", <item:pipez:ultimate_upgrade>, [
    [<item:the_vault:gem_echo>, <item:the_vault:black_chromatic_steel_ingot>, <item:the_vault:gem_echo>], 
    [<item:the_vault:magic_silk_block>, <item:pipez:advanced_upgrade>, <item:the_vault:magic_silk_block>], 
    [<item:the_vault:gem_echo>, <item:the_vault:black_chromatic_steel_ingot>, <item:the_vault:gem_echo>], 
]);

craftingTable.addShaped("advanced_upgrade", <item:pipez:advanced_upgrade>, [
    [<item:the_vault:vault_diamond>, <item:the_vault:black_chromatic_steel_ingot>, <item:the_vault:vault_diamond>], 
    [<item:the_vault:magic_silk_block>, <item:pipez:improved_upgrade>, <item:the_vault:magic_silk_block>], 
    [<item:the_vault:vault_diamond>, <item:the_vault:black_chromatic_steel_ingot>, <item:the_vault:vault_diamond>], 
]);

craftingTable.addShaped("improved_upgrade", <item:pipez:improved_upgrade>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:minecraft:redstone_block>, <item:the_vault:chromatic_steel_ingot>], 
    [<item:minecraft:redstone_block>, <item:pipez:basic_upgrade>, <item:minecraft:redstone_block>], 
    [<item:the_vault:chromatic_steel_ingot>, <item:woldsvaults:chroma_core>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("basic_upgrade", <item:pipez:basic_upgrade>, [
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:vault_essence>, <item:the_vault:chromatic_iron_ingot>], 
    [<item:the_vault:vault_essence>, <item:minecraft:redstone_block>, <item:the_vault:vault_essence>], 
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:vault_essence>, <item:the_vault:chromatic_iron_ingot>]
]);

craftingTable.addShaped("universal_pipe", <item:pipez:universal_pipe> * 6, [
    [<item:pipez:item_pipe>, <item:pipez:energy_pipe>, <item:pipez:fluid_pipe>], 
    [<item:the_vault:chromatic_iron_ingot>, <tag:items:forge:storage_blocks/redstone>, <item:the_vault:chromatic_iron_ingot>], 
    [<item:pipez:item_pipe>, <item:pipez:energy_pipe>, <item:pipez:fluid_pipe>]
]);

craftingTable.addShaped("gas_pipe", <item:pipez:gas_pipe> * 16, [
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>], 
    [<item:mekanism:alloy_infused>, <item:minecraft:redstone_block>, <item:mekanism:alloy_infused>], 
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>]
]);

craftingTable.addShaped("energy_pipe", <item:pipez:energy_pipe> * 16, [
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>], 
    [<item:the_vault:perfect_larimar>, <item:minecraft:redstone_block>, <item:the_vault:perfect_larimar>], 
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>]
]);

craftingTable.addShaped("fluid_pipe", <item:pipez:fluid_pipe> * 16, [
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>], 
    [<item:the_vault:perfect_larimar>, <item:minecraft:bucket>, <item:the_vault:perfect_larimar>], 
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>]
]);

craftingTable.addShaped("item_pipe", <item:pipez:item_pipe> * 16, [
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>], 
    [<item:the_vault:perfect_larimar>, <item:minecraft:dropper>, <item:the_vault:perfect_larimar>], 
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>]
]);

craftingTable.addShaped("wrench", <item:pipez:wrench>, [
    [<item:minecraft:air>, <item:minecraft:flint>, <item:minecraft:air>], 
    [<item:minecraft:air>, <tag:items:forge:rods>, <item:minecraft:flint>], 
    [<tag:items:forge:rods>, <item:minecraft:air>, <item:minecraft:air>]
]);

craftingTable.addShaped("filter_destination_tool", <item:pipez:filter_destination_tool>, [
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>], 
    [<item:minecraft:redstone_block>, <tag:items:forge:glass_panes>, <item:minecraft:redstone_block>], 
    [<item:the_vault:chromatic_iron_ingot>, <tag:items:minecraft:buttons>, <item:the_vault:chromatic_iron_ingot>]
]);