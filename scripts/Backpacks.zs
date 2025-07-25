/* scripts made by Douwsky
for Iskall85's Vaulthunters */

// adding recipes

// Basic Backpack
craftingTable.addShaped("sophisticatedbackpacks_pouch", <item:sophisticatedbackpacks:backpack>, [
    [<item:minecraft:shulker_shell>, <item:the_vault:vault_diamond>, <item:minecraft:shulker_shell>],
    [<item:the_vault:perfect_larimar>, <item:the_vault:magic_silk_block>, <item:the_vault:perfect_larimar>],
    [<item:minecraft:shulker_shell>, <item:the_vault:vault_diamond>, <item:minecraft:shulker_shell>]
]);

// Uprading your backpack
<recipetype:crafting>.addJsonRecipe("sophisticatedbackpacks_double_pouch", { 
  "type": "sophisticatedbackpacks:backpack_upgrade",
  "pattern": [
    "ILI",
    "PBP",
    "MSM"],
  "key": {
    "I": {"item": "the_vault:vault_diamond"},
    "P": {"item": "the_vault:extraordinary_larimar"},
    "L": {"item": "the_vault:vault_diamond_block"},
    "S": {"item": "the_vault:magic_silk"},
    "M": {"item": "the_vault:magic_silk_block"},
    "B": {"item": "sophisticatedbackpacks:backpack"}},
  "result": {"item": "sophisticatedbackpacks:iron_backpack"}
});

<recipetype:crafting>.addJsonRecipe("sophisticatedbackpacks_belt", { 
  "type": "sophisticatedbackpacks:backpack_upgrade",
  "pattern": [
    "ILI",
    "PBP",
    "MSM"],
  "key": {
    "I": {"item": "the_vault:vault_diamond"},
    "P": {"item": "the_vault:extraordinary_larimar"},
    "L": {"item": "the_vault:gem_pog"},
    "S": {"item": "the_vault:magic_silk"},
    "M": {"item": "the_vault:magic_silk_block"},
    "B": {"item": "sophisticatedbackpacks:iron_backpack"}},
  "result": {"item": "sophisticatedbackpacks:gold_backpack"}
});

<recipetype:crafting>.addJsonRecipe("sophisticatedbackpacks_small_backpack", { 
  "type": "sophisticatedbackpacks:backpack_upgrade",
  "pattern": [
    "IXI",
    "PBP",
    "MSM"],
  "key": {
    "I": {"item": "the_vault:vault_diamond"},
    "P": {"item": "woldsvaults:chroma_core"},
    "S": {"item": "the_vault:magic_silk_block"},
    "X": {"item": "the_vault:pog_prism"},
    "M": {"item": "woldsvaults:prismatic_fiber"},
    "B": {"item": "sophisticatedbackpacks:gold_backpack"}},
  "result": {"item": "sophisticatedbackpacks:diamond_backpack"}
});

<recipetype:crafting>.addJsonRecipe("sophisticatedbackpacks_big_backpack", { 
  "type": "sophisticatedbackpacks:backpack_upgrade",
  "pattern": [
    "ILI",
    "PBP",
    "SMS"],
  "key": {
    "I": {"item": "the_vault:magic_silk_block"},
    "P": {"item": "woldsvaults:chroma_core"},
    "L": {"item": "the_vault:vault_diamond_block"},
    "S": {"item": "woldsvaults:prismatic_fiber"},
    "M": {"item": "the_vault:echo_pog"},
    "B": {"item": "sophisticatedbackpacks:diamond_backpack"}},
  "result": {"item": "sophisticatedbackpacks:netherite_backpack"}
});

// Backpack Upgrades
craftingTable.addShaped("sophisticatedbackpacks_upgrade_base", <item:sophisticatedbackpacks:upgrade_base>, [
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:vault_essence>, <item:the_vault:chromatic_iron_ingot>],
    [<item:the_vault:perfect_larimar>, <item:the_vault:magic_silk_block>, <item:the_vault:perfect_larimar>],
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:vault_essence>, <item:the_vault:chromatic_iron_ingot>]
]);

craftingTable.addShaped("sophisticatedbackpacks_stack_upgrade_1", <item:sophisticatedbackpacks:stack_upgrade_tier_1>, [
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:vault_diamond>, <item:the_vault:chromatic_iron_ingot>],
    [<item:the_vault:perfect_larimar>, <item:sophisticatedbackpacks:upgrade_base>, <item:the_vault:perfect_larimar>],
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:vault_diamond>, <item:the_vault:chromatic_iron_ingot>]
]);

craftingTable.addShaped("sophisticatedbackpacks_stack_upgrade_2", <item:sophisticatedbackpacks:stack_upgrade_tier_2>, [
    [<item:the_vault:chromatic_iron_block>, <item:the_vault:vault_diamond>, <item:the_vault:chromatic_iron_block>],
    [<item:the_vault:extraordinary_larimar>, <item:sophisticatedbackpacks:stack_upgrade_tier_1>, <item:the_vault:extraordinary_larimar>],
    [<item:the_vault:chromatic_iron_block>, <item:the_vault:vault_diamond>, <item:the_vault:chromatic_iron_block>]
]);

craftingTable.addShaped("sophisticatedbackpacks_stack_upgrade_3", <item:sophisticatedbackpacks:stack_upgrade_tier_3>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:gem_pog>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:extraordinary_larimar>, <item:sophisticatedbackpacks:stack_upgrade_tier_2>, <item:the_vault:extraordinary_larimar>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:gem_pog>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("sophisticatedbackpacks_stack_upgrade_4", <item:sophisticatedbackpacks:stack_upgrade_tier_4>, [
    [<item:the_vault:black_chromatic_steel_ingot>, <item:the_vault:vault_diamond_block>, <item:the_vault:black_chromatic_steel_ingot>],
    [<item:the_vault:extraordinary_larimar>, <item:sophisticatedbackpacks:stack_upgrade_tier_3>, <item:the_vault:extraordinary_larimar>],
    [<item:the_vault:black_chromatic_steel_ingot>, <item:the_vault:echo_pog>, <item:the_vault:black_chromatic_steel_ingot>]
]);

craftingTable.addShaped("sophisticatedbackpacks_refill_upgrade", <item:sophisticatedbackpacks:refill_upgrade>, [
    [<item:the_vault:magic_silk>, <item:the_vault:gem_pog>, <item:the_vault:magic_silk>],
    [<item:the_vault:chromatic_steel_ingot>, <item:sophisticatedbackpacks:upgrade_base>, <item:the_vault:chromatic_steel_ingot>],
    [<item:minecraft:redstone_block>, <item:the_vault:vault_diamond_block>, <item:minecraft:redstone_block>]
]);

craftingTable.addShaped("sophisticatedbackpacks_void_upgrade", <item:sophisticatedbackpacks:void_upgrade>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:gem_echo>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:vault_diamond>, <item:sophisticatedbackpacks:upgrade_base>, <item:the_vault:vault_diamond>],
    [<item:the_vault:chromatic_steel_block>, <item:the_vault:vault_diamond>, <item:the_vault:chromatic_steel_block>]
]);

craftingTable.addShaped("sophisticatedbackpacks_advanced_void_upgrade", <item:sophisticatedbackpacks:advanced_void_upgrade>, [
    [<item:the_vault:black_chromatic_steel_ingot>, <item:the_vault:gem_echo>, <item:the_vault:black_chromatic_steel_ingot>],
    [<item:the_vault:chromatic_steel_block>, <item:sophisticatedbackpacks:void_upgrade>, <item:the_vault:chromatic_steel_block>],
    [<item:minecraft:redstone_block>, <item:the_vault:carbon>, <item:minecraft:redstone_block>]
]);

craftingTable.addShaped("sophisticatedbackpacks_feeding_upgrade", <item:sophisticatedbackpacks:feeding_upgrade>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:minecraft:golden_carrot>, <item:the_vault:chromatic_steel_ingot>],
    [<item:minecraft:golden_apple>, <item:sophisticatedbackpacks:upgrade_base>, <item:minecraft:glistering_melon_slice>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:packed_vault_meat_block>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("sophisticatedbackpacks_advanced_feeding_upgrade", <item:sophisticatedbackpacks:advanced_feeding_upgrade>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:vault_diamond>, <item:the_vault:chromatic_steel_ingot>],
    [<item:minecraft:gold_block>, <item:sophisticatedbackpacks:feeding_upgrade>, <item:minecraft:gold_block>],
    [<item:minecraft:redstone_block>, <item:the_vault:vault_diamond>, <item:minecraft:redstone_block>]
]);

craftingTable.addShaped("sophisticatedbackpacks_pickup_upgrade", <item:sophisticatedbackpacks:pickup_upgrade>, [
    [<item:the_vault:vault_diamond>, <item:minecraft:hopper>, <item:the_vault:vault_diamond>],
    [<item:the_vault:magic_silk>, <item:sophisticatedbackpacks:upgrade_base>, <item:the_vault:magic_silk>],
    [<item:the_vault:chromatic_steel_ingot>, <item:minecraft:redstone_block>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("sophisticatedbackpacks_advanced_pickup_upgrade", <item:sophisticatedbackpacks:advanced_pickup_upgrade>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:vault_diamond>, <item:the_vault:chromatic_steel_ingot>],
    [<item:minecraft:gold_block>, <item:sophisticatedbackpacks:pickup_upgrade>, <item:minecraft:gold_block>],
    [<item:minecraft:redstone_block>, <item:the_vault:vault_diamond>, <item:minecraft:redstone_block>]
]);

craftingTable.addShaped("sophisticatedbackpacks_filter_upgrade", <item:sophisticatedbackpacks:filter_upgrade>, [
    [<item:the_vault:perfect_larimar>, <item:the_vault:magic_silk>, <item:the_vault:perfect_larimar>],
    [<item:the_vault:magic_silk>, <item:sophisticatedbackpacks:upgrade_base>, <item:the_vault:magic_silk>],
    [<item:minecraft:redstone_block>, <item:the_vault:magic_silk>, <item:minecraft:redstone_block>]
]);

craftingTable.addShaped("sophisticatedbackpacks_advanced_filter_upgrade", <item:sophisticatedbackpacks:advanced_filter_upgrade>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:vault_diamond>, <item:the_vault:chromatic_steel_ingot>],
    [<item:minecraft:gold_block>, <item:sophisticatedbackpacks:filter_upgrade>, <item:minecraft:gold_block>],
    [<item:minecraft:redstone_block>, <item:the_vault:vault_diamond>, <item:minecraft:redstone_block>]
]);

craftingTable.addShaped("sophisticatedbackpacks_restock_upgrade", <item:sophisticatedbackpacks:restock_upgrade>, [
    [<item:the_vault:chromatic_iron_block>, <item:the_vault:gem_echo>, <item:the_vault:chromatic_iron_block>],
    [<item:the_vault:magic_silk>, <item:sophisticatedbackpacks:upgrade_base>, <item:the_vault:magic_silk>],
    [<item:the_vault:chromatic_steel_block>, <item:the_vault:black_chromatic_steel_ingot>, <item:the_vault:chromatic_steel_block>]
]);

craftingTable.addShaped("sophisticatedbackpacks_advanced_restock_upgrade", <item:sophisticatedbackpacks:advanced_restock_upgrade>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:vault_diamond>, <item:the_vault:chromatic_steel_ingot>],
    [<item:minecraft:gold_block>, <item:sophisticatedbackpacks:restock_upgrade>, <item:minecraft:gold_block>],
    [<item:minecraft:redstone_block>, <item:the_vault:vault_diamond>, <item:minecraft:redstone_block>]
]);

craftingTable.addShaped("sophisticatedbackpacks_deposit_upgrade", <item:sophisticatedbackpacks:deposit_upgrade>, [
    [<item:the_vault:chromatic_iron_block>, <item:the_vault:black_chromatic_steel_ingot>, <item:the_vault:chromatic_iron_block>],
    [<item:the_vault:magic_silk>, <item:sophisticatedbackpacks:upgrade_base>, <item:the_vault:magic_silk>],
    [<item:the_vault:chromatic_steel_block>, <item:the_vault:gem_echo>, <item:the_vault:chromatic_steel_block>]
]);

craftingTable.addShaped("sophisticatedbackpacks_advanced_deposit_upgrade", <item:sophisticatedbackpacks:advanced_deposit_upgrade>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:vault_diamond>, <item:the_vault:chromatic_steel_ingot>],
    [<item:minecraft:gold_block>, <item:sophisticatedbackpacks:deposit_upgrade>, <item:minecraft:gold_block>],
    [<item:minecraft:redstone_block>, <item:the_vault:vault_diamond>, <item:minecraft:redstone_block>]
]);

craftingTable.addShaped("sophisticatedbackpacks_advanced_refill_upgrade", <item:sophisticatedbackpacks:advanced_refill_upgrade>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:vault_diamond_block>, <item:the_vault:chromatic_steel_ingot>],
    [<item:sophisticatedbackpacks:refill_upgrade>, <item:the_vault:gem_pog>, <item:sophisticatedbackpacks:refill_upgrade>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>]
]);
