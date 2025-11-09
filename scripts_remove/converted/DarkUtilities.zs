/* scripts made by Douwsky
for Iskall85's Vaulthunters */

// adding recipes

stoneCutter.addRecipe("darkutils_blank_plate", <item:darkutils:blank_plate>, <item:the_vault:chromatic_iron_ingot>);

craftingTable.addShaped("darkutils_vector_plate", <item:darkutils:vector_plate> *4, [
    [<item:darkutils:blank_plate>, <item:darkutils:blank_plate>, <item:darkutils:blank_plate>],
    [<item:the_vault:gem_larimar>, <item:the_vault:magic_silk>, <item:the_vault:gem_larimar>],
    [<item:darkutils:blank_plate>, <item:darkutils:blank_plate>, <item:darkutils:blank_plate>]
]);

craftingTable.addShaped("darkutils_vector_plate_fast", <item:darkutils:vector_plate_fast> *6, [
    [<item:darkutils:vector_plate>, <item:darkutils:vector_plate>, <item:darkutils:vector_plate>],
    [<item:the_vault:perfect_larimar>, <item:the_vault:magic_silk>, <item:the_vault:perfect_larimar>],
    [<item:darkutils:vector_plate>, <item:darkutils:vector_plate>, <item:darkutils:vector_plate>]
]);

craftingTable.addShaped("darkutils_vector_plate_extreme", <item:darkutils:vector_plate_extreme> *6, [
    [<item:darkutils:vector_plate_fast>, <item:darkutils:vector_plate_fast>, <item:darkutils:vector_plate_fast>],
    [<item:the_vault:extraordinary_larimar>, <item:the_vault:magic_silk>, <item:the_vault:extraordinary_larimar>],
    [<item:darkutils:vector_plate_fast>, <item:darkutils:vector_plate_fast>, <item:darkutils:vector_plate_fast>]
]);

craftingTable.addShaped("darkutils_vector_plate_ultra", <item:darkutils:vector_plate_ultra> *4, [
    [<item:darkutils:vector_plate_extreme>, <item:darkutils:vector_plate_extreme>, <item:darkutils:vector_plate_extreme>],
    [<item:the_vault:perfect_echo_gem>, <item:the_vault:gem_pog>, <item:the_vault:perfect_echo_gem>],
    [<item:darkutils:vector_plate_extreme>, <item:darkutils:vector_plate_extreme>, <item:darkutils:vector_plate_extreme>]
]);

craftingTable.addShaped("darkutils_damage_plate", <item:darkutils:damage_plate>, [
    [<item:darkutils:blank_plate>, <item:darkutils:blank_plate>, <item:darkutils:blank_plate>],
    [<item:the_vault:black_chromatic_steel_ingot>, <item:the_vault:gem_pog>, <item:the_vault:black_chromatic_steel_ingot>],
    [<item:darkutils:blank_plate>, <item:darkutils:blank_plate>, <item:darkutils:blank_plate>]
]);

craftingTable.addShaped("darkutils_damage_plate_player", <item:darkutils:damage_plate_player>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:the_vault:echo_pog>, <item:minecraft:air>],
    [<item:the_vault:black_chromatic_steel_ingot>, <item:darkutils:damage_plate>, <item:the_vault:black_chromatic_steel_ingot>]
]);

