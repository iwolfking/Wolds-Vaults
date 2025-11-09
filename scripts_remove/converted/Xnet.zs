/* scripts made by Douwsky
for Iskall85's Vaulthunters */

// adding recipes

var dyes = {
  "red_dye": "red",
  "yellow_dye": "yellow",
  "green_dye": "green",
  "blue_dye": "blue"
};

craftingTable.addShaped("xnet_controller", <item:xnet:controller>, [
    [<item:minecraft:repeater>, <item:minecraft:comparator>, <item:minecraft:repeater>],
    [<item:the_vault:perfect_larimar>, <item:rftoolsbase:machine_frame>, <item:the_vault:perfect_larimar>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:vault_diamond>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("xnet_router", <item:xnet:router>, [
    [<item:minecraft:powered_rail>, <item:minecraft:comparator>, <item:minecraft:powered_rail>],
    [<item:the_vault:perfect_larimar>, <item:xnet:controller>, <item:the_vault:perfect_larimar>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:vault_diamond>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("xnet_wireless_router", <item:xnet:wireless_router>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:vault_diamond>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:extraordinary_larimar>, <item:xnet:router>, <item:the_vault:extraordinary_larimar>],
    [<item:minecraft:redstone_block>, <item:the_vault:chromatic_steel_block>, <item:minecraft:redstone_block>]
]);

craftingTable.addShaped("xnet_antenna", <item:xnet:antenna>, [
    [<item:minecraft:iron_bars>, <item:the_vault:chromatic_iron_ingot>, <item:minecraft:iron_bars>],
    [<item:minecraft:iron_bars>, <item:the_vault:chromatic_iron_ingot>, <item:minecraft:iron_bars>],
    [<item:the_vault:gem_larimar>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:gem_larimar>]
]);

craftingTable.addShaped("xnet_antenna_base", <item:xnet:antenna_base>, [
    [<item:minecraft:air>, <item:the_vault:chromatic_iron_ingot>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:the_vault:chromatic_iron_ingot>, <item:minecraft:air>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_iron_block>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("xnet_antenna_dish", <item:xnet:antenna_dish>, [
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:perfect_larimar>, <item:the_vault:chromatic_iron_ingot>],
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_steel_block>, <item:the_vault:chromatic_iron_ingot>],
    [<item:minecraft:air>, <item:the_vault:chromatic_steel_ingot>, <item:minecraft:air>]
]);

craftingTable.addShaped("xnet_routing_cable", <item:xnet:netcable_routing> *16, [
    [<item:the_vault:magic_silk>, <item:the_vault:perfect_larimar>, <item:the_vault:magic_silk>],
    [<item:minecraft:redstone_block>, <item:the_vault:chromatic_iron_ingot>, <item:minecraft:redstone_block>],
    [<item:the_vault:magic_silk>, <item:minecraft:redstone_block>, <item:the_vault:magic_silk>]
]);

craftingTable.addShaped("xnet_connector_cable", <item:xnet:connector_routing>, [
    [<item:the_vault:magic_silk>, <item:the_vault:extraordinary_larimar>, <item:the_vault:magic_silk>],
    [<item:minecraft:redstone_block>, <item:xnet:netcable_routing>, <item:minecraft:redstone_block>],
    [<item:the_vault:magic_silk>, <item:minecraft:redstone_block>, <item:the_vault:magic_silk>]
]);

craftingTable.addShaped("xnet_advanced_connector_cable", <item:xnet:advanced_connector_routing>, [
    [<item:the_vault:magic_silk>, <item:the_vault:chromatic_steel_block>, <item:the_vault:magic_silk>],
    [<item:minecraft:redstone_block>, <item:xnet:connector_routing>, <item:minecraft:redstone_block>],
    [<item:the_vault:magic_silk_block>, <item:minecraft:redstone_block>, <item:the_vault:magic_silk_block>]
]);

for dyeId, dyeName in dyes {
craftingTable.addShapeless("xnet_netcable_" + dyeName, <item:xnet:netcable_${dyeName}>, [
<item:xnet:netcable_routing>, <item:minecraft:${dyeId}>
]);

craftingTable.addShapeless("xnet_connector_" + dyeName, <item:xnet:connector_${dyeName}>, [
<item:xnet:connector_routing>, <item:minecraft:${dyeId}>
]);

craftingTable.addShapeless("xnet_advanced_connector_" + dyeName, <item:xnet:advanced_connector_${dyeName}>, [
<item:xnet:advanced_connector_routing>, <item:minecraft:${dyeId}>
]);
}