/* scripts made by Douwsky
for Iskall85's Vaulthunters */

// adding recipes

import mods.mekanism.api.ingredient.ChemicalStackIngredient.InfusionStackIngredient;
import mods.mekanism.api.ingredient.ChemicalStackIngredient.GasStackIngredient;
import mods.mekanism.api.ingredient.ChemicalStackIngredient.SlurryStackIngredient;
import mods.mekanism.api.ingredient.FluidStackIngredient;
import mods.mekanism.api.ingredient.ItemStackIngredient;
import mods.mekanism.recipe.Combining;

<recipetype:mekanism:crushing>.addRecipe("crush_vaultstone_to_rock", ItemStackIngredient.from(<item:the_vault:vault_stone> *2), <item:the_vault:vault_rock>);

<recipetype:mekanism:dissolution>.addRecipe("chromaticore_to_dirty_slurry", ItemStackIngredient.from(<item:the_vault:chromatic_iron_ore>), GasStackIngredient.from(<gas:mekanism:sulfuric_acid>), <slurry:crafttweaker:the_vault_dirty_chromatic_iron_slurry> * 1000);
<recipetype:mekanism:dissolution>.addRecipe("chromaticraw_to_dirty_slurry", ItemStackIngredient.from(<item:the_vault:raw_chromatic_iron>), GasStackIngredient.from(<gas:mekanism:sulfuric_acid>), <slurry:crafttweaker:the_vault_dirty_chromatic_iron_slurry> * 600);
<recipetype:mekanism:dissolution>.addRecipe("chromaticblock_to_dirty_slurry", ItemStackIngredient.from(<item:the_vault:raw_chromatic_iron_block>), GasStackIngredient.from(<gas:mekanism:sulfuric_acid>), <slurry:crafttweaker:the_vault_dirty_chromatic_iron_slurry> * 6000);

<recipetype:mekanism:washing>.addRecipe("cleaning_chromatic_slurry", FluidStackIngredient.from(<tag:fluids:minecraft:water>, 10), SlurryStackIngredient.from(<slurry:crafttweaker:the_vault_dirty_chromatic_iron_slurry>), <slurry:crafttweaker:the_vault_clean_chromatic_iron_slurry>);

furnace.addJsonRecipe("recipe_name", {
 ingredient: <item:the_vault:chromatic_iron_dust>,
 result: <item:the_vault:chromatic_iron_ingot>.registryName,
 experience: 0.35 as float,
 cookingtime:250
 });

<recipetype:mekanism:enriching>.addRecipe("dirty_dust_to_clean_dust", ItemStackIngredient.from(<item:the_vault:chromatic_iron_dirty_dust>), <item:the_vault:chromatic_iron_dust>);
<recipetype:mekanism:enriching>.addRecipe("raw_to_clean_dust", ItemStackIngredient.from(<item:the_vault:raw_chromatic_iron> *3), <item:the_vault:chromatic_iron_dust> *4);
<recipetype:mekanism:enriching>.addRecipe("raw_ore_block_leaves_to_clean_dust", ItemStackIngredient.from(<item:the_vault:raw_chromatic_iron_block>), <item:the_vault:chromatic_iron_dust> *12);
<recipetype:mekanism:enriching>.addRecipe("ore_to_clean_dust", ItemStackIngredient.from(<item:the_vault:chromatic_iron_ore>), <item:the_vault:chromatic_iron_dust> *2);

<recipetype:mekanism:crushing>.addRecipe("chromatic_clump_to_dirty_dust", ItemStackIngredient.from(<item:the_vault:chromatic_iron_clump>), <item:the_vault:chromatic_iron_dirty_dust>);

<recipetype:mekanism:purifying>.addRecipe("raw_block_to_clump", ItemStackIngredient.from(<item:the_vault:raw_chromatic_iron_block>), GasStackIngredient.from(<gas:mekanism:oxygen>), <item:the_vault:chromatic_iron_clump> *18);
<recipetype:mekanism:purifying>.addRecipe("raw_to_clump", ItemStackIngredient.from(<item:the_vault:raw_chromatic_iron>), GasStackIngredient.from(<gas:mekanism:oxygen>), <item:the_vault:chromatic_iron_clump> *2);
<recipetype:mekanism:purifying>.addRecipe("ore_to_clump", ItemStackIngredient.from(<item:the_vault:chromatic_iron_ore>), GasStackIngredient.from(<gas:mekanism:oxygen>), <item:the_vault:chromatic_iron_clump> *3);
<recipetype:mekanism:purifying>.addRecipe("shard_to_clump", ItemStackIngredient.from(<item:the_vault:chromatic_iron_shard>), GasStackIngredient.from(<gas:mekanism:oxygen>), <item:the_vault:chromatic_iron_clump>);

<recipetype:mekanism:injecting>.addRecipe("raw_block_to_shard", ItemStackIngredient.from(<item:the_vault:raw_chromatic_iron_block>), GasStackIngredient.from(<gas:mekanism:hydrogen_chloride>, 4), <item:the_vault:chromatic_iron_shard> *24);
<recipetype:mekanism:injecting>.addRecipe("raw_to_shard", ItemStackIngredient.from(<item:the_vault:raw_chromatic_iron> *3), GasStackIngredient.from(<gas:mekanism:hydrogen_chloride>, 2), <item:the_vault:chromatic_iron_shard> *8);
<recipetype:mekanism:injecting>.addRecipe("ore_to_shard", ItemStackIngredient.from(<item:the_vault:chromatic_iron_ore>), GasStackIngredient.from(<gas:mekanism:hydrogen_chloride>, 2), <item:the_vault:chromatic_iron_shard> *4);
<recipetype:mekanism:injecting>.addRecipe("crystal_to_shard", ItemStackIngredient.from(<item:the_vault:chromatic_iron_crystal>), GasStackIngredient.from(<gas:mekanism:hydrogen_chloride>, 2), <item:the_vault:chromatic_iron_shard>);

<recipetype:mekanism:crystallizing>.addRecipe("slurry_to_crystal", SlurryStackIngredient.from(<slurry:crafttweaker:the_vault_clean_chromatic_iron_slurry> * 200), <item:the_vault:chromatic_iron_crystal>);

<recipetype:mekanism:infusion_conversion>.addRecipe("infusion_conversion/larimar/from_larimar", ItemStackIngredient.from(<item:the_vault:gem_larimar>), <infuse_type:crafttweaker:the_vault_larimar> * 10);
<recipetype:mekanism:infusion_conversion>.addRecipe("infusion_conversion/larimar/from_perfect_larimar", ItemStackIngredient.from(<item:the_vault:perfect_larimar>), <infuse_type:crafttweaker:the_vault_larimar> * 50);
<recipetype:mekanism:infusion_conversion>.addRecipe("infusion_conversion/larimar/from_extraordinary_larimar", ItemStackIngredient.from(<item:the_vault:extraordinary_larimar>), <infuse_type:crafttweaker:the_vault_larimar> * 250);

<recipetype:mekanism:infusion_conversion>.addRecipe("infusion_conversion/larimar/from_echo", ItemStackIngredient.from(<item:the_vault:gem_echo>), <infuse_type:crafttweaker:the_vault_echo> * 75);
<recipetype:mekanism:infusion_conversion>.addRecipe("infusion_conversion/larimar/from_perfect_echo", ItemStackIngredient.from(<item:the_vault:perfect_echo_gem>), <infuse_type:crafttweaker:the_vault_echo> * 375);
<recipetype:mekanism:infusion_conversion>.addRecipe("infusion_conversion/larimar/from_extraordinary_echo", ItemStackIngredient.from(<item:the_vault:extraordinary_echo_gem>), <infuse_type:crafttweaker:the_vault_echo> * 1875);

<recipetype:mekanism:metallurgic_infusing>.addRecipe("infused_alloy", ItemStackIngredient.from(<item:the_vault:chromatic_iron_ingot>), InfusionStackIngredient.from(<infuse_type:crafttweaker:the_vault_larimar> * 40), <item:mekanism:alloy_infused>);

<recipetype:mekanism:metallurgic_infusing>.addRecipe("atomic_alloy", ItemStackIngredient.from(<item:mekanism:alloy_reinforced>), InfusionStackIngredient.from(<infuse_type:crafttweaker:the_vault_echo> * 25), <item:mekanism:alloy_atomic>);

<recipetype:mekanism:metallurgic_infusing>.addRecipe("basic_circuit", ItemStackIngredient.from(<item:the_vault:chromatic_steel_ingot>), InfusionStackIngredient.from(<infuse_type:crafttweaker:the_vault_larimar> * 160), <item:mekanism:basic_control_circuit>);

craftingTable.addShapeless("mekanism_alloy_reinforced", <item:mekanism:alloy_reinforced>, [
    <item:mekanism:alloy_infused>, <item:the_vault:vault_diamond>
]);

craftingTable.addShaped("mekanism_metallurgic_infuser", <item:mekanism:metallurgic_infuser>, [
    [<item:the_vault:chromatic_steel_ingot>, <tag:items:forge:furnaces>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:vault_diamond>, <item:mekanism:block_osmium>, <item:the_vault:vault_diamond>],
    [<item:the_vault:chromatic_steel_ingot>, <tag:items:forge:furnaces>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("mekanism_basic_pressurized_tube", <item:mekanism:basic_pressurized_tube> *4, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:the_vault:chromatic_steel_ingot>, <item:minecraft:tinted_glass>, <item:the_vault:chromatic_steel_ingot>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);

craftingTable.addShaped("mekanism_upgrade_filter", <item:mekanism:upgrade_filter> *2, [
    [<item:minecraft:air>, <item:minecraft:tinted_glass>, <item:minecraft:air>],
    [<item:mekanism:alloy_infused>, <tag:items:forge:storage_blocks/tin>, <item:mekanism:alloy_infused>],
    [<item:minecraft:air>, <item:minecraft:tinted_glass>, <item:minecraft:air>]
]);



craftingTable.addShaped("mekanism_upgrade_stone_generator", <item:mekanism:upgrade_stone_generator> *1, [
    [<item:minecraft:air>, <item:minecraft:tinted_glass>, <item:minecraft:air>],
    [<item:mekanism:alloy_infused>, <item:compressium:cobblestone_1>, <item:mekanism:alloy_infused>],
    [<item:minecraft:air>, <item:minecraft:tinted_glass>, <item:minecraft:air>]
]);







<recipetype:mekanism:crushing>.addRecipe("buildinggadgets_block_to_paste_mekanism", ItemStackIngredient.from(<item:buildinggadgets:construction_block_dense>), <item:buildinggadgets:construction_paste> * 4);