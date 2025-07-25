/* scripts made by Douwsky
for Iskall85's Vaulthunters */

// adding recipes

<recipetype:create:crushing>.addRecipe("crushed_vaultstone_to_rock", [<item:the_vault:vault_rock> % 12, <item:the_vault:vault_cobblestone>], <item:the_vault:vault_stone>, 350);

<recipetype:create:crushing>.addRecipe("chromatic_ore_to_dust", [<item:the_vault:chromatic_iron_dust> *2], <item:the_vault:chromatic_iron_ore>, 350);
<recipetype:create:crushing>.addRecipe("chromatic_raw_to_dust", [<item:the_vault:chromatic_iron_dust> *2], <item:the_vault:raw_chromatic_iron>, 350);
<recipetype:create:crushing>.addRecipe("raw_chromatic_block_to_dust", [<item:the_vault:chromatic_iron_dust> *18], <item:the_vault:raw_chromatic_iron_block>, 2350);

<recipetype:create:cutting>.addRecipe("crushed", [<item:create:shaft> *2],
<item:create:andesite_alloy>, 450);

<recipetype:create:deploying>.addRecipe("cogwheel",
<item:create:shaft>, <item:the_vault:gem_larimar>, [<item:create:cogwheel>]);

<recipetype:create:deploying>.addRecipe("large_cogwheel",
<item:create:cogwheel>, <item:the_vault:perfect_larimar>, [<item:create:large_cogwheel>]);

<recipetype:create:deploying>.addRecipe("andesite_casing",
<item:the_vault:chromatic_iron_block>, <item:create:andesite_alloy>, [<item:create:andesite_casing>]);

<recipetype:create:item_application>.addRecipe("andesite_casing_in_world", [<item:create:andesite_casing>],
<item:the_vault:chromatic_iron_block>, <item:create:andesite_alloy>);

<recipetype:create:deploying>.addRecipe("brass_casing",
<item:the_vault:chromatic_iron_block>, <item:create:brass_block>, [<item:create:brass_casing>]);

<recipetype:create:item_application>.addRecipe("brass_casing_in_world", [<item:create:brass_casing>],
<item:the_vault:chromatic_iron_block>, <item:create:brass_block>);

<recipetype:create:deploying>.addRecipe("copper_casing",
<item:the_vault:chromatic_iron_block>, <tag:items:forge:storage_blocks/copper>, [<item:create:copper_casing>]);

<recipetype:create:item_application>.addRecipe("copper_casing_in_world", [<item:create:copper_casing>],
<item:the_vault:chromatic_iron_block>, <tag:items:forge:storage_blocks/copper>);

<recipetype:create:item_application>.addRecipe("track_signal", [<item:create:track_signal>],
<item:create:railway_casing>, <item:create:electron_tube>);

<recipetype:create:item_application>.addRecipe("track_station", [<item:create:track_station>],
<item:create:railway_casing>, <item:minecraft:compass>);

<recipetype:create:sequenced_assembly>.builder("sequenced");

<recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_blast_brick")
                                                      .transitionTo(<item:create:incomplete_track>)
                                                      .require(<tag:items:minecraft:slabs>)
                                                      .loops(2)
                                                      .addOutput(<item:create:track> * 64, 32)
                                                      .addOutput(<item:minecraft:andesite>, 1)
                                                      .addOutput(<item:create:cogwheel>, 1)
                                                      .addOutput(<item:minecraft:stick>, 1)
                                                      .addOutput(<item:minecraft:iron_nugget>, 1)
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:the_vault:perfect_larimar>))
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:the_vault:chromatic_iron_ingot>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.duration(50)));

craftingTable.addShaped("create_andesite_alloy", <item:create:andesite_alloy> *2, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:minecraft:andesite>, <item:the_vault:chromatic_iron_ingot>, <item:minecraft:andesite>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);

craftingTable.addShaped("create_shaft", <item:create:shaft> *5, [
    [<item:minecraft:air>, <item:create:andesite_alloy>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:the_vault:chromatic_iron_ingot>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:create:andesite_alloy>, <item:minecraft:air>]
]);

craftingTable.addShaped("create_belt", <item:create:belt_connector>, [
    [<item:minecraft:dried_kelp>, <item:minecraft:dried_kelp>, <item:minecraft:dried_kelp>],
    [<item:minecraft:air>, <item:the_vault:chromatic_iron_ingot>, <item:minecraft:air>],
    [<item:minecraft:dried_kelp>, <item:minecraft:dried_kelp>, <item:minecraft:dried_kelp>]
]);

craftingTable.addShapeless("create_cogwheel_shapeless", <item:create:cogwheel>, [
    <item:create:shaft>, <item:the_vault:gem_larimar>,
]);

craftingTable.addShapeless("create_large_cogwheel_shapeless", <item:create:large_cogwheel>, [
    <item:create:cogwheel>, <item:the_vault:perfect_larimar>,
]);

craftingTable.addShapeless("create_large_cogwheel_shapeless2", <item:create:large_cogwheel>, [
    <item:create:shaft>, <item:the_vault:perfect_larimar>, <item:the_vault:driftwood>
]);

craftingTable.addShaped("create_hand_crank", <item:create:hand_crank>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:the_vault:driftwood>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:driftwood>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:create:andesite_alloy>]
]);

craftingTable.addShaped("create_crushing_wheel", <item:create:crushing_wheel>, [
    [<item:create:andesite_alloy>, <item:woldsvaults:infused_driftwood>, <item:create:andesite_alloy>],
    [<item:woldsvaults:infused_driftwood>, <item:woldsvaults:chroma_core>, <item:woldsvaults:infused_driftwood>],
    [<item:create:andesite_alloy>, <item:woldsvaults:infused_driftwood>, <item:create:andesite_alloy>]
]);

craftingTable.addShaped("create_cart_assembler", <item:create:cart_assembler>, [
    [<item:the_vault:extraordinary_larimar>, <item:woldsvaults:pogominium_ingot>, <item:the_vault:extraordinary_larimar>],
    [<item:the_vault:vault_diamond_block>, <item:the_vault:echo_pog>, <item:the_vault:vault_diamond_block>],
    [<item:the_vault:extraordinary_larimar>, <item:create:andesite_alloy>, <item:the_vault:extraordinary_larimar>]
]);

craftingTable.addShaped("create_electron_tube", <item:create:electron_tube>, [
    [<item:minecraft:air>, <item:create:polished_rose_quartz>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:redstone_torch>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:the_vault:chromatic_iron_nugget>, <item:minecraft:air>]
]);

craftingTable.addShaped("create_chute", <item:create:chute> *2, [
    [<item:create:andesite_alloy>, <item:create:andesite_alloy>, <item:minecraft:air>],
    [<tag:items:forge:plates/iron>, <tag:items:forge:plates/iron>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);

craftingTable.addShaped("create_smart_chute", <item:create:smart_chute>, [
    [<item:minecraft:air>, <tag:items:forge:plates/gold>, <item:minecraft:air>],
    [<item:the_vault:perfect_larimar>, <item:create:chute>, <item:the_vault:perfect_larimar>],
    [<item:minecraft:air>, <item:create:electron_tube>, <item:minecraft:air>]
]);

craftingTable.addShaped("create_waterwheel", <item:create:water_wheel>, [
    [<item:woldsvaults:infused_driftwood>, <item:woldsvaults:infused_driftwood>, <item:woldsvaults:infused_driftwood>],
    [<item:the_vault:chromatic_steel_ingot>, <item:minecraft:water_bucket>, <item:the_vault:chromatic_steel_ingot>],
    [<item:woldsvaults:infused_driftwood>, <item:woldsvaults:infused_driftwood>, <item:woldsvaults:infused_driftwood>]
]);

craftingTable.addShaped("create_large_waterwheel", <item:create:large_water_wheel>, [
    [<item:woldsvaults:infused_driftwood>, <item:woldsvaults:infused_driftwood>, <item:woldsvaults:infused_driftwood>],
    [<item:create:water_wheel>, <item:woldsvaults:chroma_core>, <item:create:water_wheel>],
    [<item:woldsvaults:infused_driftwood>, <item:woldsvaults:infused_driftwood>, <item:woldsvaults:infused_driftwood>]
]);

craftingTable.addShaped("create_basin", <item:create:basin>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:create:andesite_alloy>, <item:the_vault:perfect_larimar>, <item:create:andesite_alloy>],
    [<item:create:andesite_alloy>, <item:create:andesite_alloy>, <item:create:andesite_alloy>]
]);

craftingTable.addShaped("create_mechanical_bearing", <item:create:mechanical_bearing>, [
    [<item:minecraft:air>, <item:the_vault:driftwood>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:create:andesite_casing>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:create:shaft>, <item:minecraft:air>]
]);

craftingTable.addShaped("create_linear_chassis", <item:create:linear_chassis> *2, [
    [<item:minecraft:air>, <item:create:andesite_alloy>, <item:minecraft:air>],
    [<item:the_vault:driftwood>, <item:the_vault:driftwood>, <item:the_vault:driftwood>],
    [<item:minecraft:air>, <item:create:andesite_alloy>, <item:minecraft:air>]
]);

craftingTable.addShapeless("create_linear_chassis_shapeless", <item:create:linear_chassis>, [
    <item:create:secondary_linear_chassis>
]);

craftingTable.addShaped("create_radial_chassis", <item:create:radial_chassis> *2, [
    [<item:minecraft:air>, <item:the_vault:driftwood>, <item:minecraft:air>],
    [<item:create:andesite_alloy>, <item:the_vault:driftwood>, <item:create:andesite_alloy>],
    [<item:minecraft:air>, <item:the_vault:driftwood>, <item:minecraft:air>]
]);

craftingTable.addShaped("create_mechanical_piston", <item:create:mechanical_piston>, [
    [<item:minecraft:air>, <item:the_vault:driftwood>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:create:andesite_casing>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:create:piston_extension_pole>, <item:minecraft:air>]
]);

craftingTable.addShaped("create_piston_extension_pole", <item:create:piston_extension_pole>, [
    [<item:minecraft:air>, <item:the_vault:driftwood>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:create:andesite_alloy>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:the_vault:driftwood>, <item:minecraft:air>]
]);

craftingTable.addShapeless("create_sticky_mechanical_piston", <item:create:sticky_mechanical_piston>, [
    <item:create:mechanical_piston>, <item:the_vault:magic_silk>
]);

craftingTable.addShaped("create_empty_blaze_burner", <item:create:empty_blaze_burner>, [
    [<item:the_vault:chromatic_steel_ingot>, <tag:items:forge:plates/iron>, <item:the_vault:chromatic_steel_ingot>],
    [<tag:items:forge:plates/iron>, <item:the_vault:polished_vault_stone>, <tag:items:forge:plates/iron>],
    [<item:the_vault:chromatic_steel_ingot>, <tag:items:forge:plates/iron>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("create_wrench", <item:create:wrench>, [
    [<tag:items:forge:plates/gold>, <tag:items:forge:plates/gold>, <item:minecraft:air>],
    [<tag:items:forge:plates/gold>, <item:create:large_cogwheel>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:the_vault:driftwood>, <item:minecraft:air>]
]);

craftingTable.addShaped("create_gantry_shaft", <item:create:gantry_shaft> *2, [
    [<item:minecraft:air>, <item:create:andesite_alloy>, <item:minecraft:air>],
    [<item:the_vault:vault_essence>, <item:minecraft:redstone_block>, <item:the_vault:vault_essence>],
    [<item:minecraft:air>, <item:create:andesite_alloy>, <item:minecraft:air>]
]);

craftingTable.addShaped("create_rotation_speed_controller", <item:create:rotation_speed_controller> , [
    [<item:minecraft:air>, <item:create:precision_mechanism>, <item:minecraft:air>],
    [<item:the_vault:vault_essence>, <item:create:brass_casing>, <item:the_vault:vault_essence>],
    [<item:minecraft:air>, <item:the_vault:gem_pog>, <item:minecraft:air>]
]);

craftingTable.addShaped("createwindmill_bearing", <item:create:windmill_bearing>, [
    [<item:the_vault:vault_diamond>, <item:the_vault:gem_pog>, <item:the_vault:vault_diamond>],
    [<item:the_vault:black_chromatic_steel_ingot>, <item:the_vault:polished_vault_stone>, <item:the_vault:black_chromatic_steel_ingot>],
    [<item:minecraft:air>, <item:create:shaft>,<item:minecraft:air>]
]);

craftingTable.addShaped("create_gantry_carriage", <item:create:gantry_carriage>, [
    [<item:minecraft:air>, <item:the_vault:driftwood>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:create:andesite_casing>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:create:cogwheel>, <item:minecraft:air>]
]);

craftingTable.addShaped("create_steam_engine", <item:create:steam_engine>, [
    [<item:the_vault:black_chromatic_steel_ingot>, <tag:items:forge:plates/gold>, <item:the_vault:black_chromatic_steel_ingot>],
    [<item:the_vault:vault_diamond_block>, <item:create:brass_casing>, <item:the_vault:vault_diamond_block>],
    [<item:the_vault:black_chromatic_steel_ingot>, <item:the_vault:pog_prism>, <item:the_vault:black_chromatic_steel_ingot>]
]);

craftingTable.addShaped("create_vault", <item:create:item_vault> *3, [
    [<item:the_vault:vault_essence>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:vault_essence>],
    [<item:the_vault:chromatic_iron_ingot>, <item:create:andesite_casing>, <item:the_vault:chromatic_iron_ingot>],
    [<item:the_vault:vault_essence>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:vault_essence>]
]);

<recipetype:create:mixing>.addRecipe("mixing_healing_potion", <constant:create:heat_condition:heated>, [<fluid:create:potion>.withTag({Potion: "minecraft:healing", Bottle:"REGULAR"}) *1000], [
    <item:minecraft:golden_apple>,], [<fluid:create:potion>.withTag({Potion: "minecraft:awkward", Bottle:"REGULAR"}) *1000], 100);

<recipetype:create:mixing>.addRecipe("mixing_healing_potion_2", <constant:create:heat_condition:heated>, [<fluid:create:potion>.withTag({Potion: "minecraft:strong_healing", Bottle:"REGULAR"}) *1000], [
    <item:minecraft:glowstone_dust>,], [<fluid:create:potion>.withTag({Potion: "minecraft:healing", Bottle:"REGULAR"}) *1000], 100);

craftingTable.addShapeless("create_veridium_shapeless", <item:create:veridium> *2, [
    <item:create:copper_nugget>, <item:minecraft:warped_planks>, <item:minecraft:cobbled_deepslate>,
]);
 
craftingTable.addShapeless("create_crimsite_shapeless", <item:create:crimsite> *2, [
    <item:minecraft:iron_nugget>, <item:minecraft:crimson_planks>, <item:minecraft:cobbled_deepslate>,
]);
 
craftingTable.addShapeless("create_ochrum_shapeless", <item:create:ochrum> *2, [
    <item:minecraft:gold_nugget>, <item:ecologics:coconut_planks>, <item:minecraft:cobbled_deepslate>,
]);
 
craftingTable.addShapeless("create_asurine_shapeless", <item:create:asurine> *2, [
    <item:create:zinc_nugget>, <item:architects_palette:twisted_planks>, <item:minecraft:cobbled_deepslate>,
]);
 
craftingTable.addShapeless("create_limestone_shapeless", <item:create:limestone> *2, [
    <item:architects_palette:algal_blend>, <item:minecraft:birch_planks>, <item:minecraft:stone>,
]);

craftingTable.addShaped("create_schematicannon", <item:create:schematicannon>, [
    [<item:minecraft:air>, <item:the_vault:chromatic_iron_block>, <item:minecraft:air>], 
    [<item:woldsvaults:infused_driftwood>, <item:the_vault:chromatic_iron_block>, <item:woldsvaults:infused_driftwood>], 
    [<item:minecraft:smooth_stone>, <item:the_vault:vault_diamond_block>, <item:minecraft:smooth_stone>]
]);

craftingTable.addShaped("create_schematic_table", <item:create:schematic_table>, [
    [<item:the_vault:driftwood>, <item:the_vault:driftwood>, <item:the_vault:driftwood>], 
    [<item:minecraft:air>, <item:minecraft:smooth_stone>, <item:minecraft:air>], 
    [<item:minecraft:air>, <item:minecraft:smooth_stone>, <item:minecraft:air>]
]);

craftingTable.addShapeless("create_empty_schematic", <item:create:empty_schematic>, [<item:the_vault:magic_silk>, <tag:items:forge:dyes/light_blue>]);

craftingTable.addShapeless("create_andesite_alloy_unpack", <item:create:andesite_alloy> *9, [
    <item:create:andesite_alloy_block>
]);

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
    <recipetype:create:sequenced_assembly>.addRecipe(<recipetype:create:sequenced_assembly>.builder("seq_" + clusterName + "_key")
                                                      .transitionTo(<item:create:incomplete_track>)
                                                      .require(<item:the_vault:cluster_${clusterName}>)
                                                      .loops(0)
                                                      .addOutput(<item:the_vault:key_${clusterName}> * 1, 32)
                                                      .addStep<mods.createtweaker.DeployerApplicationRecipe>((rb) => rb.require(<item:the_vault:blank_key>))
                                                      .addStep<mods.createtweaker.PressingRecipe>((rb) => rb.duration(500)));

}
