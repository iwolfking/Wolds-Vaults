/* scripts made by Douwsky
for Iskall85's Vaulthunters */

// adding recipes

craftingTable.addShaped("mininggadgets_mininggadget", <item:mininggadgets:mininggadget>, [
    [<item:the_vault:vault_diamond>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:extraordinary_larimar>],
    [<item:the_vault:vault_diamond>, <item:the_vault:gem_pog>, <item:minecraft:redstone_block>],
    [<item:the_vault:vault_diamond>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShapeless("mininggadgets_shapeless_mininggadget_simple", <item:mininggadgets:mininggadget_simple>, [
    <item:mininggadgets:mininggadget>
]);

craftingTable.addShapeless("mininggadgets_shapeless_mininggadget_fancy", <item:mininggadgets:mininggadget_fancy>, [
    <item:mininggadgets:mininggadget_simple>
]);

craftingTable.addShapeless("mininggadgets_shapeless_mininggadget_2", <item:mininggadgets:mininggadget>, [
    <item:mininggadgets:mininggadget_fancy>
]);

craftingTable.addShaped("mininggadgets_table", <item:mininggadgets:modificationtable>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:gem_pog>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:vault_diamond>, <item:mininggadgets:upgrade_empty>, <item:the_vault:vault_diamond>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("mininggadgets_upgrade_module", <item:mininggadgets:upgrade_empty>, [
    [<item:minecraft:redstone_block>, <item:minecraft:redstone_block>, <item:minecraft:redstone_block>],
    [<item:the_vault:vault_diamond>, <item:the_vault:magic_silk_block>, <item:the_vault:vault_diamond>],
    [<item:minecraft:redstone_block>, <item:minecraft:redstone_block>, <item:minecraft:redstone_block>]
]);

craftingTable.addShaped("mininggadgets_efficiency1_upgrade", <item:mininggadgets:upgrade_efficiency_1>, [
    [<item:minecraft:redstone_block>, <item:the_vault:chromatic_steel_ingot>, <item:minecraft:redstone_block>],
    [<item:the_vault:chromatic_steel_ingot>, <item:mininggadgets:upgrade_empty>, <item:the_vault:chromatic_steel_ingot>],
    [<item:minecraft:redstone_block>, <item:the_vault:chromatic_steel_ingot>, <item:minecraft:redstone_block>]
]);

craftingTable.addShaped("mininggadgets_efficiency2_upgrade", <item:mininggadgets:upgrade_efficiency_2>, [
    [<item:the_vault:chromatic_steel_block>, <item:the_vault:vault_diamond>, <item:the_vault:chromatic_steel_block>],
    [<item:the_vault:vault_diamond>, <item:mininggadgets:upgrade_efficiency_1>, <item:the_vault:vault_diamond>],
    [<item:the_vault:chromatic_steel_block>, <item:the_vault:vault_diamond>, <item:the_vault:chromatic_steel_block>]
]);

craftingTable.addShaped("mininggadgets_efficiency3_upgrade", <item:mininggadgets:upgrade_efficiency_3>, [
    [<item:the_vault:chromatic_steel_block>, <item:the_vault:vault_diamond>, <item:the_vault:chromatic_steel_block>],
    [<item:the_vault:vault_diamond>, <item:mininggadgets:upgrade_efficiency_2>, <item:the_vault:vault_diamond>],
    [<item:the_vault:chromatic_steel_block>, <item:the_vault:vault_diamond>, <item:the_vault:chromatic_steel_block>]
]);

craftingTable.addShaped("mininggadgets_efficiency4_upgrade", <item:mininggadgets:upgrade_efficiency_4>, [
    [<item:the_vault:chromatic_steel_block>, <item:the_vault:black_chromatic_steel_ingot>, <item:the_vault:chromatic_steel_block>],
    [<item:the_vault:black_chromatic_steel_ingot>, <item:mininggadgets:upgrade_efficiency_3>, <item:the_vault:black_chromatic_steel_ingot>],
    [<item:the_vault:chromatic_steel_block>, <item:the_vault:black_chromatic_steel_ingot>, <item:the_vault:chromatic_steel_block>]
]);

craftingTable.addShaped("mininggadgets_efficiency5_upgrade", <item:mininggadgets:upgrade_efficiency_5>, [
    [<item:the_vault:extraordinary_larimar>, <item:the_vault:vault_diamond_block>, <item:the_vault:extraordinary_larimar>],
    [<item:the_vault:vault_diamond_block>, <item:mininggadgets:upgrade_efficiency_4>, <item:the_vault:vault_diamond_block>],
    [<item:the_vault:extraordinary_larimar>, <item:the_vault:vault_diamond_block>, <item:the_vault:extraordinary_larimar>]
]);

craftingTable.addShaped("mininggadgets_void_upgrade", <item:mininggadgets:upgrade_void_junk>, [
    [<item:the_vault:perfect_larimar>, <item:the_vault:vault_diamond>, <item:the_vault:perfect_larimar>],
    [<item:the_vault:carbon>, <item:mininggadgets:upgrade_empty>, <item:the_vault:carbon>],
    [<item:the_vault:chromatic_iron_block>, <item:the_vault:chromatic_steel_block>, <item:the_vault:chromatic_iron_block>]
]);

craftingTable.addShaped("mininggadgets_magnet_upgrade", <item:mininggadgets:upgrade_magnet>, [
    [<item:the_vault:vault_diamond>, <item:the_vault:perfect_echo_gem>, <item:the_vault:vault_diamond>],
    [<item:the_vault:chromatic_steel_ingot>, <item:mininggadgets:upgrade_empty>, <item:the_vault:chromatic_steel_ingot>],
    [<item:minecraft:redstone_block>, <item:minecraft:gold_block>, <item:minecraft:redstone_block>]
]);

craftingTable.addShaped("mininggadgets_3x3_upgrade", <item:mininggadgets:upgrade_three_by_three>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:gem_pog>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:gem_echo>, <item:mininggadgets:upgrade_empty>, <item:the_vault:gem_echo>],
    [<item:minecraft:redstone_block>, <item:the_vault:vault_diamond_block>, <item:minecraft:redstone_block>]
]);

craftingTable.addShaped("mininggadgets_fortune_1", <item:mininggadgets:upgrade_fortune_1>, [
    [<item:the_vault:vault_diamond>, <item:the_vault:chromatic_iron_block>, <item:the_vault:vault_diamond>],
    [<item:the_vault:gem_echo>, <item:mininggadgets:upgrade_empty>, <item:the_vault:gem_echo>],
    [<item:the_vault:chromatic_steel_block>, <item:the_vault:chromatic_iron_block>, <item:the_vault:chromatic_steel_block>]
]);

craftingTable.addShaped("mininggadgets_fortune_2", <item:mininggadgets:upgrade_fortune_2>, [
    [<item:the_vault:vault_diamond>, <item:the_vault:chromatic_iron_block>, <item:the_vault:vault_diamond>],
    [<item:the_vault:gem_echo>, <item:mininggadgets:upgrade_fortune_1>, <item:the_vault:gem_echo>],
    [<item:the_vault:chromatic_steel_block>, <item:the_vault:chromatic_iron_block>, <item:the_vault:chromatic_steel_block>]
]);

craftingTable.addShaped("mininggadgets_fortune_3", <item:mininggadgets:upgrade_fortune_3>, [
    [<item:the_vault:vault_diamond_block>, <item:the_vault:chromatic_iron_block>, <item:the_vault:vault_diamond_block>],
    [<item:the_vault:gem_echo>, <item:mininggadgets:upgrade_fortune_2>, <item:the_vault:gem_echo>],
    [<item:the_vault:chromatic_steel_block>, <item:the_vault:chromatic_steel_block>, <item:the_vault:chromatic_steel_block>]
]);

craftingTable.addShaped("mininggadgets_range_1", <item:mininggadgets:upgrade_range_1>, [
    [<item:the_vault:vault_diamond>, <item:the_vault:chromatic_iron_block>, <item:the_vault:vault_diamond>],
    [<item:minecraft:tinted_glass>, <item:mininggadgets:upgrade_empty>, <item:minecraft:tinted_glass>],
    [<item:the_vault:chromatic_steel_block>, <item:the_vault:chromatic_iron_block>, <item:the_vault:chromatic_steel_block>]
]);

craftingTable.addShaped("mininggadgets_range_2", <item:mininggadgets:upgrade_range_2>, [
    [<item:the_vault:vault_diamond>, <item:the_vault:chromatic_iron_block>, <item:the_vault:vault_diamond>],
    [<item:minecraft:tinted_glass>, <item:mininggadgets:upgrade_range_1>, <item:minecraft:tinted_glass>],
    [<item:the_vault:chromatic_steel_block>, <item:the_vault:chromatic_iron_block>, <item:the_vault:chromatic_steel_block>]
]);

craftingTable.addShaped("mininggadgets_range_3", <item:mininggadgets:upgrade_range_3>, [
    [<item:the_vault:vault_diamond_block>, <item:the_vault:chromatic_iron_block>, <item:the_vault:vault_diamond_block>],
    [<item:minecraft:tinted_glass>, <item:mininggadgets:upgrade_range_2>, <item:minecraft:tinted_glass>],
    [<item:the_vault:chromatic_steel_block>, <item:the_vault:chromatic_steel_block>, <item:the_vault:chromatic_steel_block>]
]);

craftingTable.addShaped("mininggadgets_battery_1", <item:mininggadgets:upgrade_battery_1>, [
    [<item:minecraft:smooth_quartz>, <item:the_vault:chromatic_iron_block>, <item:minecraft:smooth_quartz>],
    [<item:minecraft:smooth_quartz>, <item:mininggadgets:upgrade_empty>, <item:minecraft:smooth_quartz>],
    [<item:minecraft:smooth_quartz>, <item:minecraft:smooth_quartz>, <item:minecraft:smooth_quartz>]
]);

craftingTable.addShaped("mininggadgets_battery_2", <item:mininggadgets:upgrade_battery_2>, [
    [<item:the_vault:vault_diamond>, <item:the_vault:chromatic_iron_block>, <item:the_vault:vault_diamond>],
    [<item:minecraft:smooth_quartz>, <item:mininggadgets:upgrade_battery_1>, <item:minecraft:smooth_quartz>],
    [<item:the_vault:chromatic_steel_block>, <item:minecraft:smooth_quartz>, <item:the_vault:chromatic_steel_block>]
]);

craftingTable.addShaped("mininggadgets_battery_3", <item:mininggadgets:upgrade_battery_3>, [
    [<item:the_vault:vault_diamond_block>, <item:the_vault:chromatic_steel_block>, <item:the_vault:vault_diamond_block>],
    [<item:minecraft:gold_block>, <item:mininggadgets:upgrade_battery_2>, <item:minecraft:gold_block>],
    [<item:the_vault:chromatic_steel_block>, <item:the_vault:chromatic_steel_block>, <item:the_vault:chromatic_steel_block>]
]);

craftingTable.addShaped("mininggadgets_silk_upgrade", <item:mininggadgets:upgrade_silk>, [
    [<item:the_vault:magic_silk>, <item:minecraft:golden_apple>, <item:the_vault:magic_silk>],
    [<item:the_vault:chromatic_steel_ingot>, <item:mininggadgets:upgrade_empty>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:magic_silk>, <item:the_vault:magic_silk_block>, <item:the_vault:magic_silk>]
]);