/* scripts made by Douwsky
for Iskall85's Vaulthunters */

// adding recipes

craftingTable.addShaped("buildinggadgets_building_gadget", <item:buildinggadgets:gadget_building>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:extraordinary_larimar>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:vault_diamond>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:vault_diamond>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_block>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("buildinggadgets_destruction_gadget", <item:buildinggadgets:gadget_destruction>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:gem_pog>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:gem_echo>, <item:buildinggadgets:gadget_building>, <item:the_vault:gem_echo>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:gem_pog>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("buildinggadgets_exchange_gadget", <item:buildinggadgets:gadget_exchanging>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_block>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:vault_essence>, <item:buildinggadgets:gadget_building>, <item:the_vault:vault_essence>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_block>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("buildinggadgets_copy_paste_gadget", <item:buildinggadgets:gadget_copy_paste>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:minecraft:redstone_block>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:vault_essence>, <item:buildinggadgets:gadget_building>, <item:the_vault:vault_essence>],
    [<item:the_vault:chromatic_steel_ingot>, <item:minecraft:redstone_block>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("dense_paste_block_water", <item:buildinggadgets:construction_block_dense> * 8, [
    [<item:buildinggadgets:construction_block_powder>, <item:buildinggadgets:construction_block_powder>, <item:buildinggadgets:construction_block_powder>], 
    [<item:buildinggadgets:construction_block_powder>, <item:minecraft:water_bucket>.reuse(), <item:buildinggadgets:construction_block_powder>], 
    [<item:buildinggadgets:construction_block_powder>, <item:buildinggadgets:construction_block_powder>, <item:buildinggadgets:construction_block_powder>]
]);