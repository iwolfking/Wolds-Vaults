/* scripts made by Douwsky
for Iskall85's Vaulthunters */

// adding recipes

import crafttweaker.api.tag.MCTag;
import crafttweaker.api.recipe.Brewing;
import mods.mekanism.recipe.Combining;
import mods.mekanism.api.ingredient.ItemStackIngredient;

var dyes = {
  "white_dye": "white",
  "red_dye": "red",
  "lime_dye": "lime",
  "light_gray_dye": "light_gray",
  "light_blue_dye": "light_blue",
  "gray_dye": "gray",
  "black_dye": "black",
  "orange_dye": "orange",
  "yellow_dye": "yellow",
  "green_dye": "green",
  "cyan_dye": "cyan",
  "purple_dye": "purple",
  "blue_dye": "blue",
  "brown_dye": "brown",
  "pink_dye": "pink",
  "magenta_dye": "magenta"
};

for dyeId, dyeName in dyes {
craftingTable.addShaped("minecraft_" + dyeName + "_concrete_powder", <item:minecraft:${dyeName}_concrete_powder> *8, [
    [<tag:items:forge:concrete_powders>, <tag:items:forge:concrete_powders>, <tag:items:forge:concrete_powders>],
    [<tag:items:forge:concrete_powders>, <item:minecraft:${dyeId}>, <tag:items:forge:concrete_powders>],
    [<tag:items:forge:concrete_powders>, <tag:items:forge:concrete_powders>, <tag:items:forge:concrete_powders>]
]);

craftingTable.addShaped("minecraft_" + dyeName + "_concrete", <item:minecraft:${dyeName}_concrete> *8, [
    [<tag:items:forge:concrete>, <tag:items:forge:concrete>, <tag:items:forge:concrete>],
    [<tag:items:forge:concrete>, <item:minecraft:${dyeId}>, <tag:items:forge:concrete>],
    [<tag:items:forge:concrete>, <tag:items:forge:concrete>, <tag:items:forge:concrete>]
]);
}

craftingTable.addShaped("goldenapple", <item:minecraft:golden_apple>, [
    [<item:minecraft:gold_block>, <item:minecraft:gold_ingot>, <item:minecraft:gold_block>],
    [<item:minecraft:gold_ingot>, <item:minecraft:apple>, <item:minecraft:gold_ingot>],
    [<item:minecraft:gold_block>, <item:minecraft:gold_ingot>, <item:minecraft:gold_block>]
]);


craftingTable.addShaped("cage_dust", <item:ispawner:cage_dust>, [
    [<item:minecraft:air>, <item:the_vault:gem_painite>, <item:minecraft:air>],
    [<item:the_vault:gem_painite>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:gem_painite>],
    [<item:minecraft:air>, <item:the_vault:gem_painite>, <item:minecraft:air>]
]);

craftingTable.addShapeless("suspicious_weaknes_red_stew", <item:minecraft:suspicious_stew>.withTag({Effects: [{EffectId: 18 as byte, EffectDuration: 180 as int}]}), [
    <item:minecraft:red_tulip>, <item:minecraft:red_mushroom>, <item:minecraft:bowl>,
    <item:minecraft:brown_mushroom>
]);

craftingTable.addShapeless("suspicious_weaknes_orange_stew", <item:minecraft:suspicious_stew>.withTag({Effects: [{EffectId: 18 as byte, EffectDuration: 180 as int}]}), [
    <item:minecraft:orange_tulip>, <item:minecraft:red_mushroom>, <item:minecraft:bowl>,
    <item:minecraft:brown_mushroom>
]);

craftingTable.addShapeless("suspicious_weaknes_white_stew", <item:minecraft:suspicious_stew>.withTag({Effects: [{EffectId: 18 as byte, EffectDuration: 180 as int}]}), [
    <item:minecraft:white_tulip>, <item:minecraft:red_mushroom>, <item:minecraft:bowl>,
    <item:minecraft:brown_mushroom>
]);

craftingTable.addShapeless("suspicious_weaknes_pink_stew", <item:minecraft:suspicious_stew>.withTag({Effects: [{EffectId: 18 as byte, EffectDuration: 180 as int}]}), [
    <item:minecraft:pink_tulip>, <item:minecraft:red_mushroom>, <item:minecraft:bowl>,
    <item:minecraft:brown_mushroom>
]);

craftingTable.addShapeless("suspicious_fire_res_stew", <item:minecraft:suspicious_stew>.withTag({Effects: [{EffectId: 12 as byte, EffectDuration: 80 as int}]}), [
    <item:minecraft:allium>, <item:minecraft:red_mushroom>, <item:minecraft:bowl>,
    <item:minecraft:brown_mushroom>
]);

craftingTable.addShapeless("suspicious_wither_stew", <item:minecraft:suspicious_stew>.withTag({Effects: [{EffectId: 12 as byte, EffectDuration: 80 as int}]}), [
    <item:minecraft:wither_rose>, <item:minecraft:red_mushroom>, <item:minecraft:bowl>,
    <item:minecraft:brown_mushroom>
]);

craftingTable.addShapeless("suspicious_blindness_stew", <item:minecraft:suspicious_stew>.withTag({Effects: [{EffectId: 15 as byte, EffectDuration: 160 as int}]}), [
    <item:minecraft:azure_bluet>, <item:minecraft:red_mushroom>, <item:minecraft:bowl>,
    <item:minecraft:brown_mushroom>
]);

craftingTable.addShapeless("suspicious_nightvision_stew", <item:minecraft:suspicious_stew>.withTag({Effects: [{EffectId: 16 as byte, EffectDuration: 100 as int}]}), [
    <item:minecraft:poppy>, <item:minecraft:red_mushroom>, <item:minecraft:bowl>,
    <item:minecraft:brown_mushroom>
]);

craftingTable.addShapeless("suspicious_saturation_dandelion_stew", <item:minecraft:suspicious_stew>.withTag({Effects: [{EffectId: 23 as byte, EffectDuration: 7 as int}]}), [
    <item:minecraft:dandelion>, <item:minecraft:red_mushroom>, <item:minecraft:bowl>,
    <item:minecraft:brown_mushroom>
]);

craftingTable.addShapeless("suspicious_saturation_orchid_stew", <item:minecraft:suspicious_stew>.withTag({Effects: [{EffectId: 23 as byte, EffectDuration: 7 as int}]}), [
    <item:minecraft:blue_orchid>, <item:minecraft:red_mushroom>, <item:minecraft:bowl>,
    <item:minecraft:brown_mushroom>
]);

craftingTable.addShapeless("suspicious_jump_stew", <item:minecraft:suspicious_stew>.withTag({Effects: [{EffectId: 8 as byte, EffectDuration: 120 as int}]}), [
    <item:minecraft:cornflower>, <item:minecraft:red_mushroom>, <item:minecraft:bowl>,
    <item:minecraft:brown_mushroom>
]);

craftingTable.addShapeless("suspicious_poison_stew", <item:minecraft:suspicious_stew>.withTag({Effects: [{EffectId: 19 as byte, EffectDuration: 240 as int}]}), [
    <item:minecraft:lily_of_the_valley>, <item:minecraft:red_mushroom>, <item:minecraft:bowl>,
    <item:minecraft:brown_mushroom>
]);

brewing.addRecipe(<item:minecraft:potion>.withTag({Potion: "minecraft:healing"}), <item:minecraft:golden_apple>, <item:minecraft:potion>.withTag({Potion: "minecraft:awkward"}));

brewing.addRecipe(<item:minecraft:splash_potion>.withTag({Potion: "minecraft:splash_healing"}), <item:minecraft:golden_apple>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:awkward"}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:night_vision"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:night_vision" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:long_night_vision"}), <item:the_vault:vault_nugget>, <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:night_vision" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:invisibility"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:invisibility" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:long_invisibility"}), <item:the_vault:vault_nugget>, <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:invisibility" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:leaping"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:leaping" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:long_leaping"}), <item:the_vault:vault_nugget>, <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:leaping" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:strong_leaping"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:strong_leaping" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:fire_resistance"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:night_vision" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:long_fire_resistance"}), <item:the_vault:vault_nugget>, <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:fire_resistance" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:swiftness"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:swiftness" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:long_swiftness"}), <item:the_vault:vault_nugget>, <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:swiftness" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:strong_swiftness"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:strong_swiftness" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:slowness"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:slowness" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:long_slowness"}), <item:the_vault:vault_nugget>, <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:slowness" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:strong_slowness"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:strong_slowness" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:water_breathing"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:water_breathing" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:long_water_breathing"}), <item:the_vault:vault_nugget>, <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:water_breathing" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:healing"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:healing" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:strong_healing"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:strong_healing" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:harming"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:harming" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:strong_harming"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:strong_harming" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:poison"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:poison" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:long_poison"}), <item:the_vault:vault_nugget>, <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:poison" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:strong_poison"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:strong_poison" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:strength"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:strength" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:long_strength"}), <item:the_vault:vault_nugget>, <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:strength" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:strong_strength"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:strong_strength" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:weakness"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:weakness" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:long_weakness"}), <item:the_vault:vault_nugget>, <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:weakness" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:luck"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:luck" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:slow_falling"}), <item:the_vault:gem_pog>, <item:minecraft:splash_potion>.withTag({Potion: "minecraft:slow_falling" as string}));

brewing.addRecipe(<item:minecraft:lingering_potion>.withTag({Potion: "minecraft:long_slow_falling"}), <item:the_vault:vault_nugget>, <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:slow_falling" as string}));

craftingTable.addShapeless("vault_hunters_guide", <item:patchouli:guide_book>.withTag({"patchouli:book": "patchouli:the_vault_main_guide" as string}), [
    <item:minecraft:book>, <item:minecraft:cobblestone>
]);

craftingTable.addShapeless("vault_lexicon", <item:patchouli:guide_book>.withTag({"patchouli:book": "patchouli:vault_lexicon" as string}), [
    <item:minecraft:book>, <item:minecraft:wooden_sword>
]);

craftingTable.addShaped("bundle", <item:minecraft:bundle>, [
    [<item:minecraft:rabbit_hide>, <item:the_vault:magic_silk>, <item:minecraft:rabbit_hide>],
    [<item:the_vault:magic_silk>, <item:minecraft:air>, <item:the_vault:magic_silk>],
    [<item:the_vault:magic_silk>, <item:the_vault:magic_silk>, <item:the_vault:magic_silk>]
]);

craftingTable.addShaped("enercell", <item:enercell:enercell>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:vault_essence>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_iron_block>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:extraordinary_larimar>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("bamboo_planks", <item:twigs:stripped_bamboo_planks>, [
    [<item:twigs:stripped_bamboo>, <item:twigs:stripped_bamboo>, <item:twigs:stripped_bamboo>],
    [<item:twigs:stripped_bamboo>, <item:twigs:stripped_bamboo>, <item:twigs:stripped_bamboo>],
    [<item:twigs:stripped_bamboo>, <item:twigs:stripped_bamboo>, <item:twigs:stripped_bamboo>]
]);

craftingTable.addShaped("quiver", <item:supplementaries:quiver>, [
    [<item:minecraft:air>, <tag:items:forge:leather>, <item:the_vault:magic_silk>],
    [<tag:items:forge:leather>, <tag:items:minecraft:arrows>, <item:the_vault:magic_silk>],
    [<item:the_vault:magic_silk>, <item:the_vault:magic_silk>, <item:the_vault:perfect_larimar>]
]);

craftingTable.addShaped("pink_to_green_azalea", <item:quark:azalea_log> *3, [
    [<item:ecologics:azalea_log>],
    [<item:ecologics:azalea_log>],
    [<item:ecologics:azalea_log>]
]);

craftingTable.addShaped("green_to_pink_azalea", <item:ecologics:azalea_log> *3, [
    [<item:quark:azalea_log>],
    [<item:quark:azalea_log>],
    [<item:quark:azalea_log>]
]);

craftingTable.addShaped("pebble", <item:twigs:pebble> *4, [
    [<item:the_vault:polished_vault_stone>, <item:minecraft:air>, <item:minecraft:air>],
    [<tag:items:forge:stone>, <item:minecraft:air>, <tag:items:forge:stone>],
    [<item:the_vault:polished_vault_stone>, <item:minecraft:air>, <item:minecraft:air>]
]);

craftingTable.addShaped("scaffolding", <item:minecraft:scaffolding> *6, [
    [<item:the_vault:wooden_chunk>, <item:the_vault:wooden_chunk>, <item:the_vault:wooden_chunk>],
    [<item:the_vault:wooden_chunk>, <item:minecraft:air>, <item:the_vault:wooden_chunk>],
    [<item:the_vault:wooden_chunk>, <item:minecraft:air>, <item:the_vault:wooden_chunk>]
]);

craftingTable.addShapeless("necrotic_bones", <item:minecraft:bone>, [
    <item:architects_palette:withered_bone>, <item:architects_palette:withered_bone>, <item:architects_palette:withered_bone>,
    <item:architects_palette:withered_bone>, <item:architects_palette:withered_bone>, <item:architects_palette:withered_bone>,
    <item:architects_palette:withered_bone>, <item:architects_palette:withered_bone>
]);

craftingTable.addShapeless("supp_ash", <item:supplementaries:ash> *8, [
    <item:minecraft:flint>, <tag:items:minecraft:logs>
]);

craftingTable.addShapeless("experience_convert", <item:minecraft:experience_bottle>, [
    <item:create:experience_nugget>
]);

<recipetype:mekanism:combining>.addRecipe("cobweb", ItemStackIngredient.from(<item:minecraft:string>), ItemStackIngredient.from(<item:minecraft:vine>), <item:minecraft:cobweb>);

<recipetype:create:item_application>.addRecipe("cobweb2", [<item:minecraft:cobweb>],
<item:minecraft:vine>, <item:minecraft:string>);

<recipetype:create:item_application>.addRecipe("shroomlight", [<item:minecraft:shroomlight>],
<item:minecraft:glowstone>, <item:minecraft:nether_wart>);

<recipetype:create:item_application>.addRecipe("dead_horn_coral", [<item:minecraft:dead_horn_coral_block>],
<item:minecraft:cactus>, <item:minecraft:dried_kelp>);

<recipetype:create:item_application>.addRecipe("horn_coral", [<item:minecraft:horn_coral_block>],
<item:minecraft:dead_horn_coral_block>, <item:minecraft:sunflower>);

<recipetype:create:item_application>.addRecipe("hanging_roots", [<item:minecraft:hanging_roots>],
<item:minecraft:vine>, <item:minecraft:rotten_flesh>);

<recipetype:create:item_application>.addRecipe("weeping_vines", [<item:minecraft:weeping_vines>],
<item:minecraft:vine>, <item:minecraft:nether_wart>);

<recipetype:create:item_application>.addRecipe("dead_bush", [<item:minecraft:dead_bush>],
<item:minecraft:grass>, <item:minecraft:rotten_flesh>);

<recipetype:create:item_application>.addRecipe("coarse_dirt", [<item:minecraft:coarse_dirt>],
<item:minecraft:gravel>, <item:minecraft:rotten_flesh>);

<recipetype:create:item_application>.addRecipe("rooted_dirt", [<item:minecraft:rooted_dirt>],
<item:minecraft:coarse_dirt>, <item:minecraft:rotten_flesh>);


// craftingTable.addShaped("brew1", <item:the_vault:bottle>.withTag({charges:6 as int,recharge:"time" as string,type:"brew" as string,vaultGearData:"[L;7069878597367160218L,-6692775768183260158L,1514722424829610009L,3527585455153845571L,2753168875257675788L,2987536090647L,565248L,8830586978304L]"}), [
//     [<item:the_vault:vault_diamond_block>, <item:minecraft:poppy>, <item:the_vault:vault_diamond_block>],
//     [<item:the_vault:hearty_apple>, <item:minecraft:glass_bottle>, <item:the_vault:hearty_apple>],
//     [<item:the_vault:poisonous_mushroom>, <item:the_vault:echo_pog>, <item:the_vault:poisonous_mushroom>]
// ]);
// <recipetype:minecraft:crafting_shaped>.addJsonRecipe("brew1", 
// {
//     "pattern": [
//     "dfd",
//     "aba",
//     "cec"
//   ],
//   "key": {
//     "a": {
//       "item": "the_vault:hearty_apple"
//     },
//     "b": {
//       "item": "minecraft:glass_bottle"
//     },
//     "c": {
//       "item": "the_vault:poisonous_mushroom"
//     },
//     "d": {
//       "item": "the_vault:vault_diamond_block"
//     },
//     "e": {
//       "item": "the_vault:echo_pog"
//     },
//     "f": {
//       "item": "minecraft:poppy"
//     }
//   },
//   "result": {
//     "item": "the_vault:bottle",
//     "count": 1,
//     "nbt": "{charges:6,recharge:\"time\",type:\"brew\",vaultGearData:[L;7069878597367160218L,-6692775768183260158L,1514722424829610009L,3527585455153845571L,2753168875257675788L,2987536090647L,565248L,8830586978304L]}"
//   }
// });

// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_beach" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_blood_moon" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_cave_deepslate" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_cave_geode" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_cave_wasteland" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_desert" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_easter_egg" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_easter_pastel" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_fairy_ring" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_festive" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_gingerbread" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_haunted" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_ice" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_ice_cave" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_living_cave" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_mesa" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_mushroom" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_nether_soul" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_cave" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_factory_void" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_end_void" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_flooded" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_lush_cave" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_nether_blackstone" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_nether_crimson" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_deep_mesa" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_nether_warped" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_plastic" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_poison" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_sandy_cave" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_sea_floor" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_season_fall" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_season_spring" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_season_summer" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_season_winter" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_shipwreck" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_sweet" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_void" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_white" as string});
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:diy_vault_blank" as string})
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:diy_vault_cave" as string})
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:diy_vault_desert" as string})
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:diy_vault_ice" as string})
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:diy_vault_lush_cave" as string})
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:diy_vault_mesa" as string})
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:diy_vault_nether_crimson" as string})
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:diy_vault_nether_warped" as string})
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:diy_vault_void" as string})
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:raw_vault_cave" as string})
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:raw_vault_cave_andersite" as string})
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:raw_vault_cave_andersite_lvl10" as string})
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:raw_vault_cave_andersite_lvl20" as string})
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:raw_vault_cave_diorite" as string})
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:raw_vault_cave_diorite_lvl10" as string})
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:raw_vault_cave_diorite_lvl20" as string})
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:raw_vault_cave_diorite_lvl30" as string})
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:raw_vault_cave_granite" as string})
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:raw_vault_cave_granite_lvl10" as string})
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:raw_vault_cave_granite_lvl20" as string})
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:raw_vault_cave_granite_lvl30" as string})
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:raw_vault_cave_lvl10" as string})
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:raw_vault_cave_lvl20" as string})
// <tag:items:forge:gems>.add(<item:the_vault:augment>.withTag({theme: "the_vault:raw_vault_cave_lvl30" as string})


<tag:items:vault:augments>.add(<item:the_vault:augment>);

craftingTable.addShapeless("chaos_augment", <item:the_vault:augment>.withTag({theme: "the_vault:classic_vault_chaos" as string}), [
    <tag:items:vault:augments>, <tag:items:vault:augments>, <tag:items:vault:augments>
]);