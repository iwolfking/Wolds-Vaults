/* scripts made by Douwsky
for Iskall85's Vaulthunters */

// adding recipes

import mods.botania.recipe.manager.RuneAltarRecipeManager;
import mods.botania.recipe.manager.ElvenTradeRecipeManager;
import mods.botania.recipe.manager.ManaInfusionRecipeManager;
import mods.botania.recipe.manager.PetalApothecaryRecipeManager;
import mods.botania.recipe.manager.TerraPlateRecipeManager;

var apothecary = {
  "default": <item:minecraft:cobblestone>,
  "forest": <item:botania:metamorphic_forest_cobblestone>,
  "plains": <item:botania:metamorphic_plains_cobblestone>,
  "mountain": <item:botania:metamorphic_mountain_cobblestone>,
  "fungal": <item:botania:metamorphic_fungal_cobblestone>,
  "swamp": <item:botania:metamorphic_swamp_cobblestone>,
  "desert": <item:botania:metamorphic_desert_cobblestone>,
  "taiga": <item:botania:metamorphic_taiga_cobblestone>,
  "mesa": <item:botania:metamorphic_mesa_cobblestone>,
  "mossy": <item:minecraft:mossy_cobblestone>,
};

for biome, stoneType in apothecary {
  craftingTable.remove(<item:botania:apothecary_${biome}>);

  craftingTable.addShaped("botania_" + biome + "apothecary", <item:botania:apothecary_${biome}>, [
    [stoneType, <tag:items:botania:petals>, stoneType],
    [<item:minecraft:air>, <item:the_vault:perfect_larimar>, <item:minecraft:air>],
    [stoneType, stoneType, stoneType]
]);
}

craftingTable.addShapeless("ender_air", <item:botania:ender_air_bottle>, [
    <item:minecraft:end_stone>, <item:botania:mana_pearl>, <item:minecraft:glass_bottle>,
    <item:minecraft:chorus_fruit>
]);

<recipetype:botania:mana_infusion>.addRecipe("mana_diamond", <item:botania:mana_diamond>,
 <item:the_vault:vault_diamond>, 10000);

 <recipetype:botania:mana_infusion>.addRecipe("manasteel_ingot", <item:botania:manasteel_ingot>,
 <item:the_vault:chromatic_iron_ingot>, 5000);

<recipetype:botania:terra_plate>.addRecipe("terra_plate_test", <item:botania:terrasteel_ingot>, 500000,
<item:the_vault:chromatic_steel_ingot>, <item:the_vault:vault_diamond>, <item:botania:mana_diamond>, <item:botania:manasteel_ingot>, <item:botania:mana_pearl>, <item:the_vault:vault_essence>);

<recipetype:botania:petal_apothecary>.addRecipe("pure_daisy", <item:botania:pure_daisy>,
 <tag:items:botania:petals/white>, <item:the_vault:chromatic_steel_ingot>, <tag:items:botania:petals/white>, <item:the_vault:perfect_larimar>, <tag:items:botania:petals/white>);

<recipetype:botania:petal_apothecary>.addRecipe("hopperhock", <item:botania:hopperhock>,
 <tag:items:botania:petals/gray>, <tag:items:botania:petals/gray>, <tag:items:botania:petals/light_gray>, <tag:items:botania:petals/light_gray>, <item:botania:redstone_root>, <item:the_vault:gem_pog>, <item:botania:rune_air>);

<recipetype:botania:elven_trade>.addRecipe("elven_trade_pixie_dust", [<item:botania:pixie_dust>],
  <item:botania:mana_pearl>, <item:the_vault:perfect_larimar>);

<recipetype:botania:elven_trade>.addRecipe("elven_trade_elementium_ingot", [<item:botania:elementium_ingot>],
  <item:botania:manasteel_ingot>, <item:the_vault:chromatic_steel_ingot>);

<recipetype:botania:elven_trade>.addRecipe("elven_trade_dragonstone", [<item:botania:dragonstone>],
  <item:botania:mana_diamond>, <item:the_vault:extraordinary_larimar>);

<recipetype:botania:elven_trade>.addRecipe("elven_trade_dreamwood", [<item:botania:dreamwood>],
  <item:botania:livingwood>);

<recipetype:botania:brew>.addRecipe("rune_altar_test", <brew:botania:healing>, <item:minecraft:golden_apple>, <item:minecraft:nether_wart>);

craftingTable.addShaped("botania_mana_pool", <item:botania:mana_pool>, [
    [<item:the_vault:perfect_larimar>, <item:botania:livingrock_bricks>]
]);

craftingTable.addShaped("botania_runic_altar", <item:botania:runic_altar>, [
    [<item:botania:mana_diamond>, <item:botania:mana_pool>]
]);
craftingTable.addShapeless("botania_bifrost_glass", <item:botania:bifrost_perm>, [
   <item:botania:elf_glass>
]);

<recipetype:botania:runic_altar>.addRecipe("rune_water", <item:botania:rune_water>, 10000,
 <item:minecraft:fishing_rod>, <item:botania:blue_petal>, <item:botania:manasteel_ingot>, <item:botania:mana_powder>, <item:the_vault:perfect_larimar>);

<recipetype:botania:runic_altar>.addRecipe("rune_fire", <item:botania:rune_fire>, 10000,
 <item:minecraft:nether_wart>, <item:minecraft:nether_brick>, <item:botania:manasteel_ingot>, <item:botania:mana_powder>, <item:the_vault:perfect_larimar>);

<recipetype:botania:runic_altar>.addRecipe("rune_earth", <item:botania:rune_earth>, 10000,
 <tag:items:forge:mushrooms>, <item:minecraft:coal_block>, <item:botania:manasteel_ingot>, <item:botania:mana_powder>, <item:the_vault:perfect_larimar>);

<recipetype:botania:runic_altar>.addRecipe("rune_air", <item:botania:rune_air>, 10000,
 <item:minecraft:feather>, <tag:items:minecraft:carpets>, <item:botania:manasteel_ingot>, <item:botania:mana_powder>, <item:the_vault:perfect_larimar>);

<recipetype:botania:runic_altar>.addRecipe("rune_mana", <item:botania:rune_mana>, 15000,
 <item:botania:mana_diamond>, <item:botania:mana_pearl>, <item:botania:manasteel_ingot>, <item:botania:manasteel_ingot>, <item:botania:manasteel_ingot>, <item:the_vault:perfect_larimar>);

craftingTable.addShaped("botania_manasteel_block", <item:botania:manasteel_block>, [
    [<item:botania:manasteel_ingot>, <item:botania:manasteel_ingot>, <item:botania:manasteel_ingot>],
    [<item:botania:manasteel_ingot>, <item:botania:manasteel_ingot>, <item:botania:manasteel_ingot>],
    [<item:botania:manasteel_ingot>, <item:botania:manasteel_ingot>, <item:botania:manasteel_ingot>]
]);

craftingTable.addShaped("botania_terrasteel_block", <item:botania:terrasteel_block>, [
    [<item:botania:terrasteel_ingot>, <item:botania:terrasteel_ingot>, <item:botania:terrasteel_ingot>],
    [<item:botania:terrasteel_ingot>, <item:botania:terrasteel_ingot>, <item:botania:terrasteel_ingot>],
    [<item:botania:terrasteel_ingot>, <item:botania:terrasteel_ingot>, <item:botania:terrasteel_ingot>]
]);

craftingTable.addShaped("botania_elementium_block", <item:botania:elementium_block>, [
    [<item:botania:elementium_ingot>, <item:botania:elementium_ingot>, <item:botania:elementium_ingot>],
    [<item:botania:elementium_ingot>, <item:botania:elementium_ingot>, <item:botania:elementium_ingot>],
    [<item:botania:elementium_ingot>, <item:botania:elementium_ingot>, <item:botania:elementium_ingot>]
]);

craftingTable.addShaped("botania_mana_diamond_block", <item:botania:mana_diamond_block>, [
    [<item:botania:mana_diamond>, <item:botania:mana_diamond>, <item:botania:mana_diamond>],
    [<item:botania:mana_diamond>, <item:botania:mana_diamond>, <item:botania:mana_diamond>],
    [<item:botania:mana_diamond>, <item:botania:mana_diamond>, <item:botania:mana_diamond>]
]);

craftingTable.addShaped("botania_dragonstone_block", <item:botania:dragonstone_block>, [
    [<item:botania:dragonstone>, <item:botania:dragonstone>, <item:botania:dragonstone>],
    [<item:botania:dragonstone>, <item:botania:dragonstone>, <item:botania:dragonstone>],
    [<item:botania:dragonstone>, <item:botania:dragonstone>, <item:botania:dragonstone>]
]);

craftingTable.addShaped("botania_livingwood_twig", <item:botania:livingwood_twig>, [
    [<item:minecraft:air>, <tag:items:botania:livingwood_logs>, <item:minecraft:air>],
    [<item:minecraft:air>, <tag:items:botania:livingwood_logs>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:the_vault:driftwood>, <item:minecraft:air>]
]);

craftingTable.addShaped("botania_dreamwood_twig", <item:botania:dreamwood_twig>, [
    [<item:minecraft:air>, <tag:items:botania:dreamwood_logs>, <item:minecraft:air>],
    [<item:minecraft:air>, <tag:items:botania:dreamwood_logs>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:the_vault:driftwood>, <item:minecraft:air>]
]);

craftingTable.addShaped("botania_wand", <item:botania:twig_wand>.withTag({color1: 6 as int, color2: 6 as int}), [
    [<item:minecraft:air>, <item:botania:pink_petal_block>, <item:botania:livingwood_twig>],
    [<item:minecraft:air>, <item:botania:livingwood_twig>, <item:the_vault:perfect_larimar>],
    [<item:botania:livingwood_twig>, <item:the_vault:driftwood>, <item:minecraft:air>]
]);

craftingTable.addShaped("botania_elvenwood_wand", <item:botania:dreamwood_wand>.withTag({color1: 5 as int, color2: 5 as int}), [
    [<item:minecraft:air>, <item:botania:lime_petal_block>, <item:botania:dreamwood_twig>],
    [<item:minecraft:air>, <item:botania:dreamwood_twig>, <item:the_vault:extraordinary_larimar>],
    [<item:botania:dreamwood_twig>, <item:the_vault:driftwood>, <item:minecraft:air>]
]);

craftingTable.addShaped("botania_spark", <item:botania:spark>, [
    [<item:the_vault:gem_larimar>, <tag:items:botania:petals>, <item:the_vault:gem_larimar>],
    [<item:quark:blaze_lantern>, <item:minecraft:gold_block>, <item:quark:blaze_lantern>],
    [<item:the_vault:gem_larimar>, <tag:items:botania:petals>, <item:the_vault:gem_larimar>]
]);

craftingTable.addShaped("botania_fancy_pool", <item:botania:fabulous_pool>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:botania:bifrost_perm>, <item:botania:mana_pool>, <item:botania:bifrost_perm>],
    [<item:botania:bifrost_perm>, <item:botania:bifrost_perm>, <item:botania:bifrost_perm>]
]);

craftingTable.addShaped("botania_flux_field", <item:botania:mana_fluxfield>, [
    [<item:botania:livingrock>, <item:the_vault:chromatic_steel_ingot>, <item:botania:livingrock>],
    [<item:the_vault:chromatic_steel_ingot>, <item:botania:terrasteel_block>, <item:the_vault:chromatic_steel_ingot>],
    [<item:botania:livingrock>, <item:the_vault:chromatic_steel_ingot>, <item:botania:livingrock>]
]);


craftingTable.addShaped("botania_mana_spreader", <item:botania:mana_spreader>, [[<tag:items:botania:livingwood_logs>, <tag:items:botania:livingwood_logs>, <tag:items:botania:livingwood_logs>], [<item:the_vault:perfect_larimar>, <tag:items:botania:petals>,<item:minecraft:air>], [<tag:items:botania:livingwood_logs>, <tag:items:botania:livingwood_logs>, <tag:items:botania:livingwood_logs>]]);

craftingTable.addShaped("botania_alchemy_catalyst", <item:botania:alchemy_catalyst>, [[<item:botania:livingrock>, <item:the_vault:vault_essence>, <item:botania:livingrock>], [<item:minecraft:brewing_stand>, <item:botania:mana_pearl>, <item:minecraft:brewing_stand>], [<item:botania:livingrock>, <item:the_vault:vault_essence>, <item:botania:livingrock>]]);

<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_flowering_azalea",
    <item:minecraft:flowering_azalea>,
    <item:minecraft:azalea>,
    10000,
    <block:botania:alchemy_catalyst>
);

<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_spore_blossom",
    <item:minecraft:spore_blossom>,
    <item:minecraft:flowering_azalea>,
    10000,
    <block:botania:alchemy_catalyst>
);

<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_azalea",
    <item:minecraft:azalea>,
    <item:minecraft:spore_blossom>,
    10000,
    <block:botania:alchemy_catalyst>
);

// <recipetype:botania:mana_infusion>.addRecipe("mana_infusion_vault_stone",  <item:the_vault:chipped_vault_rock>,
//  <item:the_vault:vault_stone> *2, 10000, <block:botania:alchemy_catalyst>);

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
    <recipetype:botania:terra_plate>.addRecipe("terra_plate_" + clusterName +"_key", <item:the_vault:key_${clusterName}>, 5000,
<item:the_vault:cluster_${clusterName}>, <item:the_vault:blank_key>);
}
