/* scripts made by Douwsky
for Iskall85's Vaulthunters */

// adding recipes

// adding Tags for Recipe's Sake
<tag:items:drawers:drawers>.add([
 <tag:items:storagedrawers:drawers>,
 <tag:items:framedcompactdrawers:frame_triple>
]);

var logs = {
  "oak_log": "oak",
  "birch_log": "birch",
  "warped_stem": "warped",
  "jungle_log": "jungle",
  "acacia_log": "acacia",
  "dark_oak_log": "dark_oak",
  "spruce_log": "spruce",
  "crimson_stem": "crimson"
};

for logId, logName in logs {
  craftingTable.addShaped("storagedrawers_" + logName + "_full_drawers_1", <item:storagedrawers:${logName}_full_drawers_1>, [
    [<item:the_vault:driftwood>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:driftwood>],
    [<item:the_vault:chromatic_iron_ingot>, <item:minecraft:${logId}>, <item:the_vault:chromatic_iron_ingot>],
    [<item:the_vault:driftwood>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:driftwood>]
  ]);

  craftingTable.addShaped("storagedrawers_" + logName + "_full_drawers_2", <item:storagedrawers:${logName}_full_drawers_2>, [
    [<item:the_vault:driftwood>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:driftwood>],
    [<item:the_vault:chromatic_iron_ingot>, <item:minecraft:${logId}>, <item:the_vault:chromatic_iron_ingot>],
    [<item:the_vault:driftwood>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:driftwood>]
  ]);

  craftingTable.addShaped("storagedrawers_" + logName + "_full_drawers_4", <item:storagedrawers:${logName}_full_drawers_4>, [
    [<item:the_vault:driftwood>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:driftwood>],
    [<item:the_vault:chromatic_iron_ingot>, <item:minecraft:${logId}>, <item:the_vault:chromatic_iron_ingot>],
    [<item:the_vault:driftwood>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:driftwood>]
  ]);

    craftingTable.addShaped("storagedrawers_" + logName + "_half_drawers_1", <item:storagedrawers:${logName}_half_drawers_1>, [
    [<item:the_vault:driftwood>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:driftwood>],
    [<item:the_vault:chromatic_iron_ingot>, <item:minecraft:${logName}_slab>, <item:the_vault:chromatic_iron_ingot>],
    [<item:the_vault:driftwood>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:driftwood>]
  ]);

  craftingTable.addShaped("storagedrawers_" + logName + "_half_drawers_2", <item:storagedrawers:${logName}_half_drawers_2>, [
    [<item:the_vault:driftwood>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:driftwood>],
    [<item:the_vault:chromatic_iron_ingot>, <item:minecraft:${logName}_slab>, <item:the_vault:chromatic_iron_ingot>],
    [<item:the_vault:driftwood>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:driftwood>]
  ]);

  craftingTable.addShaped("storagedrawers_" + logName + "_half_drawers_4", <item:storagedrawers:${logName}_half_drawers_4>, [
    [<item:the_vault:driftwood>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:driftwood>],
    [<item:the_vault:chromatic_iron_ingot>, <item:minecraft:${logName}_slab>, <item:the_vault:chromatic_iron_ingot>],
    [<item:the_vault:driftwood>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:driftwood>]
  ]);

// Framed Drawers

  craftingTable.addShaped("framed" + logName + "_storage_drawer", <item:framedcompactdrawers:framed_full_one>, [
    [<item:minecraft:stick>, <item:minecraft:stick>, <item:minecraft:stick>],
    [<item:minecraft:stick>, <item:storagedrawers:${logName}_full_drawers_1>, <item:minecraft:stick>],
    [<item:minecraft:stick>, <item:minecraft:stick>, <item:minecraft:stick>]
  ]);

    craftingTable.addShaped("framed" + logName + "_storage_drawer_2", <item:framedcompactdrawers:framed_full_two>, [
    [<item:minecraft:stick>, <item:minecraft:stick>, <item:minecraft:stick>],
    [<item:minecraft:stick>, <item:storagedrawers:${logName}_full_drawers_2>, <item:minecraft:stick>],
    [<item:minecraft:stick>, <item:minecraft:stick>, <item:minecraft:stick>]
  ]);

    craftingTable.addShaped("framed" + logName + "_storage_drawer_4", <item:framedcompactdrawers:framed_full_four>, [
    [<item:minecraft:stick>, <item:minecraft:stick>, <item:minecraft:stick>],
    [<item:minecraft:stick>, <item:storagedrawers:${logName}_full_drawers_4>, <item:minecraft:stick>],
    [<item:minecraft:stick>, <item:minecraft:stick>, <item:minecraft:stick>]
  ]);

    craftingTable.addShaped("framed" + logName + "_half_drawer", <item:framedcompactdrawers:framed_half_one>, [
    [<item:minecraft:stick>, <item:minecraft:stick>, <item:minecraft:stick>],
    [<item:minecraft:stick>, <item:storagedrawers:${logName}_half_drawers_1>, <item:minecraft:stick>],
    [<item:minecraft:stick>, <item:minecraft:stick>, <item:minecraft:stick>]
  ]);

    craftingTable.addShaped("framed" + logName + "_half_drawer_2", <item:framedcompactdrawers:framed_half_two>, [
    [<item:minecraft:stick>, <item:minecraft:stick>, <item:minecraft:stick>],
    [<item:minecraft:stick>, <item:storagedrawers:${logName}_half_drawers_2>, <item:minecraft:stick>],
    [<item:minecraft:stick>, <item:minecraft:stick>, <item:minecraft:stick>]
  ]);

    craftingTable.addShaped("framed" + logName + "_half_drawer_4", <item:framedcompactdrawers:framed_half_four>, [
    [<item:minecraft:stick>, <item:minecraft:stick>, <item:minecraft:stick>],
    [<item:minecraft:stick>, <item:storagedrawers:${logName}_half_drawers_4>, <item:minecraft:stick>],
    [<item:minecraft:stick>, <item:minecraft:stick>, <item:minecraft:stick>]
  ]);
}

craftingTable.addShaped("storagedrawers_controller", <item:storagedrawers:controller>, [
    [<item:the_vault:black_chromatic_steel_ingot>, <item:the_vault:extraordinary_larimar>, <item:the_vault:black_chromatic_steel_ingot>],
    [<tag:items:drawers:drawers>, <item:the_vault:gem_pog>, <tag:items:drawers:drawers>],
    [<item:the_vault:black_chromatic_steel_ingot>, <item:the_vault:extraordinary_larimar>, <item:the_vault:black_chromatic_steel_ingot>]
]);

craftingTable.addShaped("storagedrawers_controller_slave", <item:storagedrawers:controller_slave>, [
    [<item:the_vault:polished_vault_stone>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:polished_vault_stone>],
    [<item:the_vault:chromatic_steel_ingot>, <tag:items:drawers:drawers>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:polished_vault_stone>, <item:the_vault:vault_diamond>, <item:the_vault:polished_vault_stone>]
]);

craftingTable.addShaped("storagedrawers_compacting_drawers_3", <item:storagedrawers:compacting_drawers_3>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:vault_diamond>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:extraordinary_larimar>, <tag:items:drawers:drawers>, <item:the_vault:extraordinary_larimar>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:vault_diamond>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("storagedrawers_key", <item:storagedrawers:drawer_key>, [
    [<item:the_vault:vault_diamond>, <item:the_vault:chromatic_steel_ingot>, <item:minecraft:air>],
    [<item:storagedrawers:upgrade_template>, <tag:items:drawers:drawers>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:the_vault:vault_diamond>, <item:minecraft:air>]
]);

craftingTable.addShaped("storagedrawers_upgrade_template", <item:storagedrawers:upgrade_template> *4, [
    [<item:the_vault:magic_silk>, <item:the_vault:gem_larimar>, <item:the_vault:magic_silk>],
    [<item:woldsvaults:infused_driftwood>, <tag:items:drawers:drawers>, <item:woldsvaults:infused_driftwood>],
    [<item:the_vault:magic_silk>, <item:the_vault:gem_larimar>, <item:the_vault:magic_silk>]
]);

craftingTable.addShaped("storagedrawers_iron_storage_upgrade", <item:storagedrawers:iron_storage_upgrade>, [
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:vault_essence>, <item:the_vault:chromatic_iron_ingot>],
    [<item:the_vault:vault_essence>, <item:storagedrawers:upgrade_template>, <item:the_vault:vault_essence>],
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:vault_essence>, <item:the_vault:chromatic_iron_ingot>]
]);

craftingTable.addShaped("storagedrawers_gold_storage_upgrade", <item:storagedrawers:gold_storage_upgrade>, [
    [<item:the_vault:chromatic_gold_nugget>, <item:the_vault:vault_essence>, <item:the_vault:chromatic_gold_nugget>],
    [<item:the_vault:vault_essence>, <item:storagedrawers:upgrade_template>, <item:the_vault:vault_essence>],
    [<item:the_vault:chromatic_gold_nugget>, <item:the_vault:vault_essence>, <item:the_vault:chromatic_gold_nugget>]
]);

craftingTable.addShaped("storagedrawers_diamond_storage_upgrade", <item:storagedrawers:diamond_storage_upgrade>, [
    [<item:the_vault:chromatic_gold_nugget>, <item:the_vault:vault_diamond>, <item:the_vault:chromatic_gold_nugget>],
    [<item:the_vault:vault_diamond>, <item:storagedrawers:upgrade_template>, <item:the_vault:vault_diamond>],
    [<item:the_vault:chromatic_gold_nugget>, <item:the_vault:vault_diamond>, <item:the_vault:chromatic_gold_nugget>]
]);

craftingTable.addShaped("storagedrawers_emerald_storage_upgrade", <item:storagedrawers:emerald_storage_upgrade>, [
    [<item:woldsvaults:chroma_core>, <item:the_vault:black_chromatic_steel_ingot>, <item:woldsvaults:chroma_core>],
    [<item:the_vault:black_chromatic_steel_ingot>, <item:storagedrawers:upgrade_template>, <item:the_vault:black_chromatic_steel_ingot>],
    [<item:woldsvaults:chroma_core>, <item:the_vault:black_chromatic_steel_ingot>, <item:woldsvaults:chroma_core>]
]);

craftingTable.addShaped("storagedrawers_void_upgrade", <item:storagedrawers:void_upgrade>, [
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:carbon>, <item:the_vault:chromatic_iron_ingot>],
    [<item:minecraft:cactus>, <item:storagedrawers:upgrade_template>, <item:minecraft:cactus>],
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:carbon>, <item:the_vault:chromatic_iron_ingot>]
]);