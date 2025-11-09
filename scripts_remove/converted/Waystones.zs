/* scripts made by Douwsky
for Iskall85's Vaulthunters */

// adding recipes

craftingTable.addShaped("waystones_warp_stone", <item:waystones:warp_stone>, [
    [<item:minecraft:air>, <item:the_vault:vault_essence>, <item:minecraft:air>],
    [<item:the_vault:vault_essence>, <item:the_vault:perfect_wutodie>, <item:the_vault:vault_essence>],
    [<item:minecraft:air>, <item:the_vault:vault_essence>, <item:minecraft:air>]
]);

craftingTable.addShapeless("waystones_warp_dust", <item:waystones:warp_dust>, [
 <item:the_vault:gem_wutodie>,
 <item:the_vault:vault_essence>
]);

craftingTable.addShaped("waystones_waystone", <item:waystones:waystone>, [
    [<item:waystones:warp_dust>, <tag:items:forge:stone>, <item:waystones:warp_dust>],
    [<item:waystones:warp_dust>, <item:waystones:warp_stone>, <item:waystones:warp_dust>],
    [<item:the_vault:wutodic_silver_ingot>, <item:the_vault:wutodic_silver_ingot>, <item:the_vault:wutodic_silver_ingot>]
]);

craftingTable.addShaped("waystones_mossy_waystone", <item:waystones:mossy_waystone>, [
    [<item:waystones:warp_dust>, <tag:items:forge:cobblestone/mossy>, <item:waystones:warp_dust>],
    [<item:waystones:warp_dust>, <item:waystones:warp_stone>, <item:waystones:warp_dust>],
    [<item:the_vault:wutodic_silver_ingot>, <item:the_vault:wutodic_silver_ingot>, <item:the_vault:wutodic_silver_ingot>]
]);

craftingTable.addShaped("waystones_sandy_waystone", <item:waystones:sandy_waystone>, [
    [<item:waystones:warp_dust>, <tag:items:forge:sandstone>, <item:waystones:warp_dust>],
    [<item:waystones:warp_dust>, <item:waystones:warp_stone>, <item:waystones:warp_dust>],
    [<item:the_vault:wutodic_silver_ingot>, <item:the_vault:wutodic_silver_ingot>, <item:the_vault:wutodic_silver_ingot>]
]);

craftingTable.addShaped("waystones_warp_plate", <item:waystones:warp_plate>, [
    [<item:the_vault:polished_vault_stone>, <item:waystones:warp_dust>, <item:the_vault:polished_vault_stone>],
    [<item:waystones:warp_dust>, <item:the_vault:perfect_larimar>, <item:waystones:warp_dust>],
    [<item:the_vault:polished_vault_stone>, <item:waystones:warp_dust>, <item:the_vault:polished_vault_stone>]
]);