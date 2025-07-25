/* scripts made by Douwsky
for Iskall85's Vaulthunters */

import crafttweaker.api.ingredient.IIngredient;

// adding recipes

var ingots as IIngredient[string] = {
  "bronze": <tag:items:forge:ingots/bronze>.asIIngredient(),
  "iron": <item:minecraft:iron_ingot> as IIngredient,
  "gold": <item:minecraft:gold_ingot> as IIngredient,
  "copper": <item:minecraft:copper_ingot> as IIngredient,
  "netherite": <item:minecraft:netherite_ingot> as IIngredient,
  "tin": <tag:items:forge:ingots/tin>.asIIngredient(),
  "lead": <tag:items:forge:ingots/lead>.asIIngredient(),
  "silver": <item:thermal:silver_ingot> as IIngredient,
  "nickel": <item:thermal:nickel_ingot> as IIngredient,
  "electrum": <item:thermal:electrum_ingot> as IIngredient,
  "invar": <item:thermal:invar_ingot> as IIngredient,
  "constantan": <item:thermal:constantan_ingot> as IIngredient,
  "signalum": <item:thermal:signalum_ingot> as IIngredient,
  "lumium": <item:thermal:lumium_ingot> as IIngredient,
  "enderium": <item:thermal:enderium_ingot> as IIngredient,
} as IIngredient[string];

var gems = {
    "lapis": "lapis_lazuli",
    "diamond": "diamond",
    "emerald": "emerald",
    "quartz": "quartz",
};  

for ingotId, ingotName in ingots {
  <recipetype:thermal:press>.remove(<item:thermal:${ingotId}_gear>);
  <recipetype:thermal:press>.addRecipe("thermal_" + ingotId + "_gear_press_vh", [<item:thermal:${ingotId}_gear>], <fluid:minecraft:empty>, [ingotName * 4, <item:the_vault:perfect_larimar>], 500);
craftingTable.addShaped("thermal_" + ingotId + "_gear", <item:thermal:${ingotId}_gear>, [
    [<item:the_vault:gem_larimar>, ingotName, <item:the_vault:gem_larimar>],
    [ingotName, <item:the_vault:chromatic_iron_ingot>, ingotName],
    [<item:the_vault:gem_larimar>, ingotName, <item:the_vault:gem_larimar>]
]);

craftingTable.addShaped("thermal_" + ingotId + "_plate", <item:thermal:${ingotId}_plate>, [
    [ingotName, <item:the_vault:gem_larimar>, ingotName],
    [<item:the_vault:gem_larimar>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:gem_larimar>],
    [ingotName, <item:the_vault:gem_larimar>, ingotName]
]);
}

<recipetype:thermal:press>.addRecipe("thermal_tin_gear_gear_press_vh_2", [<item:thermal:tin_gear>], <fluid:minecraft:empty>, [<item:thermal:tin_ingot> * 4, <item:the_vault:perfect_larimar>], 500);

<recipetype:thermal:press>.addRecipe("thermal_lead_gear_press_vh_2", [<item:thermal:lead_gear>], <fluid:minecraft:empty>, [<item:thermal:lead_ingot> * 4, <item:the_vault:perfect_larimar>], 500);

<recipetype:thermal:press>.addRecipe("thermal_bronze_gear_press_vh_2", [<item:thermal:bronze_gear>], <fluid:minecraft:empty>, [<item:thermal:bronze_ingot> * 4, <item:the_vault:perfect_larimar>], 500);

for gemId, gemName in gems {
  craftingTable.addShaped("thermal_" + gemId + "_gear", <item:thermal:${gemId}_gear>, [
    [<item:the_vault:gem_larimar>, <item:minecraft:${gemName}>, <item:the_vault:gem_larimar>],
    [<item:minecraft:${gemName}>, <item:the_vault:chromatic_iron_ingot>, <item:minecraft:${gemName}>],
    [<item:the_vault:gem_larimar>, <item:minecraft:${gemName}>, <item:the_vault:gem_larimar>]
]);
}

<recipetype:thermal:pulverizer>.addRecipe("ore_to_dust", [<item:the_vault:chromatic_iron_dust> *4 % -100], <item:the_vault:chromatic_iron_ore>, 3, 4000);
<recipetype:thermal:pulverizer>.addRecipe("raw_to_dust", [<item:the_vault:chromatic_iron_dust> *2 % -100], <item:the_vault:raw_chromatic_iron>, 3, 4000);
<recipetype:thermal:pulverizer>.addRecipe("ingot_to_dust", [<item:the_vault:chromatic_iron_dust> *1 % -100], <item:the_vault:chromatic_iron_ingot>, 3, 2000);

<recipetype:thermal:pulverizer>.addRecipe("vaultstone_to_rock", [<item:the_vault:vault_cobblestone> % 100, <item:the_vault:vault_rock> % 12], <item:the_vault:vault_stone>, 3, 2000);

craftingTable.addShaped("thermal_rf_coil", <item:thermal:rf_coil>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:the_vault:perfect_larimar>],
    [<item:minecraft:air>, <tag:items:forge:storage_blocks/redstone>, <item:minecraft:air>],
    [<item:the_vault:perfect_larimar>, <item:minecraft:air>, <item:minecraft:air>]
]);

craftingTable.addShaped("thermal_redstone_servo", <item:thermal:redstone_servo>, [
    [<item:minecraft:air>, <tag:items:forge:storage_blocks/redstone>, <item:minecraft:air>],
    [<item:minecraft:air>, <tag:items:forge:storage_blocks/iron>, <item:minecraft:air>],
    [<item:minecraft:air>, <tag:items:forge:storage_blocks/redstone>, <item:minecraft:air>]
]);

craftingTable.addShaped("thermal_machine_frame", <item:thermal:machine_frame>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>],
    [<item:minecraft:redstone_block>, <item:the_vault:perfect_larimar>, <item:minecraft:redstone_block>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:vault_diamond>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("thermal_fluid_cell_frame", <item:thermal:fluid_cell_frame>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:perfect_larimar>, <item:the_vault:chromatic_steel_ingot>],
    [<item:minecraft:milk_bucket>, <item:thermal:machine_frame>, <item:minecraft:lava_bucket>],
    [<item:the_vault:chromatic_steel_ingot>, <item:minecraft:water_bucket>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("thermal_fluid_cell", <item:thermal:fluid_cell>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:perfect_larimar>, <item:the_vault:chromatic_steel_ingot>],
    [<item:minecraft:milk_bucket>, <item:thermal:fluid_cell_frame>, <item:minecraft:lava_bucket>],
    [<item:the_vault:chromatic_steel_ingot>, <item:minecraft:water_bucket>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("thermal_energy_cell_frame", <item:thermal:energy_cell_frame>, [
    [<item:thermal:cured_rubber_block>, <item:minecraft:redstone_block>, <item:thermal:cured_rubber_block>],
    [<item:the_vault:chromatic_steel_ingot>, <item:thermal:machine_frame>, <item:the_vault:chromatic_steel_ingot>],
    [<item:thermal:cured_rubber_block>, <item:thermal:rf_coil>, <item:thermal:cured_rubber_block>]
]);

craftingTable.addShaped("thermal_energy_cell", <item:thermal:energy_cell>, [
    [<item:thermal:cured_rubber_block>, <item:minecraft:redstone_block>, <item:thermal:cured_rubber_block>],
    [<item:the_vault:chromatic_steel_ingot>, <item:thermal:energy_cell_frame>, <item:the_vault:chromatic_steel_ingot>],
    [<item:thermal:cured_rubber_block>, <item:thermal:rf_coil>, <item:thermal:cured_rubber_block>]
]);

craftingTable.addShaped("thermal_wrench", <item:thermal:wrench>, [
    [<item:the_vault:chromatic_iron_ingot>, <item:minecraft:air>, <item:the_vault:chromatic_iron_ingot>],
    [<item:minecraft:air>, <tag:items:forge:gears>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:the_vault:chromatic_steel_ingot>, <item:minecraft:air>]
]);

craftingTable.addShaped("thermal_magmatic_dynamo", <item:thermal:dynamo_magmatic>, [
    [<item:minecraft:air>, <item:thermal:rf_coil>, <item:minecraft:air>],
    [<item:the_vault:chromatic_steel_ingot>, <item:thermal:invar_gear>, <item:the_vault:chromatic_steel_ingot>],
    [<item:thermal:invar_block>, <item:minecraft:redstone_block>, <item:thermal:invar_block>]
]);

craftingTable.addShaped("thermal_numismatic_dynamo", <item:thermal:dynamo_numismatic>, [
    [<item:minecraft:air>, <item:thermal:rf_coil>, <item:minecraft:air>],
    [<item:the_vault:chromatic_steel_ingot>, <item:thermal:tin_gear>, <item:the_vault:chromatic_steel_ingot>],
    [<item:thermal:constantan_block>, <item:minecraft:redstone_block>, <item:thermal:constantan_block>]
]);

craftingTable.addShaped("thermal_lapidary_dynamo", <item:thermal:dynamo_lapidary>, [
    [<item:minecraft:air>, <item:thermal:rf_coil>, <item:minecraft:air>],
    [<item:the_vault:chromatic_steel_ingot>, <item:thermal:gold_gear>, <item:the_vault:chromatic_steel_ingot>],
    [<item:minecraft:lapis_block>, <item:minecraft:redstone_block>, <item:minecraft:lapis_block>]
]);

craftingTable.addShaped("thermal_disenchantment_dynamo", <item:thermal:dynamo_disenchantment>, [
    [<item:minecraft:air>, <item:thermal:rf_coil>, <item:minecraft:air>],
    [<item:the_vault:chromatic_steel_ingot>, <item:thermal:silver_gear>, <item:the_vault:chromatic_steel_ingot>],
    [<item:minecraft:experience_bottle>, <item:minecraft:redstone_block>, <item:minecraft:experience_bottle>]
]);

craftingTable.addShaped("thermal_gourmand_dynamo", <item:thermal:dynamo_gourmand>, [
    [<item:minecraft:air>, <item:thermal:rf_coil>, <item:minecraft:air>],
    [<item:the_vault:chromatic_steel_ingot>, <item:thermal:copper_gear>, <item:the_vault:chromatic_steel_ingot>],
    [<item:thermal:tin_block>, <item:minecraft:redstone_block>, <item:thermal:tin_block>]
]);

craftingTable.addShaped("thermal_stirling_dynamo", <item:thermal:dynamo_stirling>, [
    [<item:minecraft:air>, <item:thermal:rf_coil>, <item:minecraft:air>],
    [<item:the_vault:chromatic_steel_ingot>, <item:thermal:iron_gear>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:polished_vault_stone>, <item:minecraft:redstone_block>, <item:the_vault:polished_vault_stone>]
]);

craftingTable.addShaped("thermal_compression_dynamo", <item:thermal:dynamo_compression>, [
    [<item:minecraft:air>, <item:thermal:rf_coil>, <item:minecraft:air>],
    [<item:the_vault:chromatic_steel_ingot>, <item:thermal:copper_gear>, <item:the_vault:chromatic_steel_ingot>],
    [<item:thermal:bronze_block>, <item:minecraft:redstone_block>, <item:thermal:bronze_block>]
]);

craftingTable.addShaped("thermal_phyto_insolator", <item:thermal:machine_insolator>, [
    [<item:minecraft:air>, <item:thermal:rf_coil>, <item:minecraft:air>],
    [<item:the_vault:black_chromatic_steel_ingot>, <item:thermal:machine_frame>, <item:the_vault:black_chromatic_steel_ingot>],
    [<item:thermal:lumium_gear>, <item:the_vault:echo_pog>, <item:thermal:lumium_gear>]
]);

craftingTable.addShaped("thermal_pulverizor", <item:thermal:machine_pulverizer>, [
    [<item:minecraft:air>, <item:the_vault:chromatic_steel_ingot>, <item:minecraft:air>],
    [<item:supplementaries:flint_block>, <item:thermal:machine_frame>, <item:supplementaries:flint_block>],
    [<item:thermal:copper_gear>, <item:thermal:rf_coil>, <item:thermal:copper_gear>]
]);

craftingTable.addShaped("thermal_vacuumulator", <item:thermal:device_collector>, [
    [<tag:items:forge:storage_blocks/tin>, <item:the_vault:gem_pog>, <tag:items:forge:storage_blocks/tin>],
    [<item:minecraft:tinted_glass>, <item:thermal:machine_frame>, <item:minecraft:tinted_glass>],
    [<tag:items:forge:storage_blocks/tin>, <item:thermal:redstone_servo>, <tag:items:forge:storage_blocks/tin>]
]);

craftingTable.addShaped("thermal_igneous_extruder", <item:thermal:device_rock_gen>, [
    [<item:the_vault:black_chromatic_steel_ingot>, <item:thermal:constantan_gear>, <item:the_vault:black_chromatic_steel_ingot>],
    [<item:minecraft:tinted_glass>, <item:thermal:machine_frame>, <item:minecraft:tinted_glass>],
    [<item:the_vault:black_chromatic_steel_ingot>, <item:thermal:redstone_servo>, <item:the_vault:black_chromatic_steel_ingot>]
]);

craftingTable.addShaped("thermal_aqueous_accumulator", <item:thermal:device_water_gen>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>],
    [<item:minecraft:tinted_glass>, <item:the_vault:infinite_water_bucket>.transformReplace(<item:minecraft:air>), <item:minecraft:tinted_glass>],
    [<item:the_vault:chromatic_steel_ingot>, <item:thermal:redstone_servo>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("thermal_satchel", <item:thermal:satchel>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:magic_silk_block>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:magic_silk_block>, <tag:items:minecraft:wool>, <item:the_vault:magic_silk_block>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:magic_silk_block>, <item:the_vault:chromatic_steel_ingot>]
]);

<recipetype:thermal:brewer>.addRecipe("healing_pot", <fluid:cofh_core:potion>.withTag({Potion: "minecraft:healing"}) * 1000,
 <item:minecraft:golden_apple>, <fluid:cofh_core:potion>.withTag({Potion: "minecraft:awkward"}) * 1000, 500);

<recipetype:thermal:insolator>.addRecipe("insolator_spore_blossom", [<item:minecraft:spore_blossom> *2], <item:minecraft:spore_blossom>, 1500, 30000);
 
<recipetype:thermal:insolator>.addRecipe("insolator_crimson_fungi", [<item:minecraft:crimson_fungus> % 110, <item:minecraft:crimson_stem> % 600, <item:minecraft:shroomlight> % 5, <item:minecraft:nether_wart_block> % 5], <item:minecraft:crimson_fungus>, 1500, 30000);

<recipetype:thermal:insolator>.addRecipe("insolator_warped_fungi", [<item:minecraft:warped_fungus> % 110, <item:minecraft:warped_stem> % 600, <item:minecraft:shroomlight> % 5, <item:minecraft:warped_wart_block> % 5], <item:minecraft:warped_fungus>, 1500, 30000);

<recipetype:thermal:pulverizer>.addRecipe("fluix_to_dust", [<item:ae2:fluix_dust>], <item:ae2:fluix_crystal>, 3, 2000);

<recipetype:thermal:pulverizer>.addRecipe("certus_to_dust", [<item:ae2:certus_quartz_dust>], <item:ae2:certus_quartz_crystal>, 3, 2000);

<recipetype:thermal:pulverizer>.addRecipe("ender_to_dust", [<item:ae2:ender_dust>], <item:minecraft:ender_pearl>, 3, 2000);

<recipetype:thermal:insolator>.addRecipe("insolator_seagrass", [<item:minecraft:seagrass> % 200], <item:minecraft:seagrass>, 1000, 10000);

<recipetype:thermal:insolator>.addRecipe("insolator_bigdrip", [<item:minecraft:big_dripleaf> % 200], <item:minecraft:big_dripleaf>, 1000, 10000);

<recipetype:thermal:insolator>.addRecipe("insolator_smalldrip", [<item:minecraft:small_dripleaf> % 200], <item:minecraft:small_dripleaf>, 1000, 10000);

<recipetype:thermal:pulverizer>.addRecipe("buildinggadgets_block_to_paste_thermal", [<item:buildinggadgets:construction_paste> % 411], <item:buildinggadgets:construction_block_dense>, 3, 2000);

var clusters = {
  "cluster_bomignite": "bomignite",
  "cluster_tubium": "tubium",
  "cluster_ashium": "ashium",
  "cluster_upaline": "upaline",
  "cluster_xenium": "xenium",
  "cluster_gorginite": "gorginite",
  "cluster_petzanite": "petzanite",
  "cluster_iskallium": "iskallium",
  "cluster_sparkletine": "sparkletine"
};

for clusterId, clusterName in clusters {
    <recipetype:thermal:press>.addRecipe("press_" + clusterName +"_key", [<item:the_vault:key_${clusterName}>], <fluid:minecraft:empty>, [<item:the_vault:cluster_${clusterName}>, <item:the_vault:blank_key>], 500);
}
