/* scripts made by Douwsky
for Iskall85's Vaulthunters */

// adding recipes

var mobs = [
    "red",
    "red"
];

craftingTable.addShaped("cage_piece", <item:ispawner:cage_piece>, [
    [<item:ispawner:cage_dust>, <item:ispawner:cage_dust>, <item:ispawner:cage_dust>],
    [<item:ispawner:cage_dust>, <item:the_vault:black_chromatic_steel_ingot>, <item:ispawner:cage_dust>],
    [<item:ispawner:cage_dust>, <item:ispawner:cage_dust>, <item:ispawner:cage_dust>]
]);

craftingTable.addShaped("survival_spawner", <item:ispawner:survival_spawner>, [
    [<item:the_vault:black_chromatic_steel_ingot>, <item:ispawner:cage_piece>, <item:the_vault:black_chromatic_steel_ingot>],
    [<item:ispawner:cage_piece>, <item:the_vault:echo_pog>, <item:ispawner:cage_piece>],
    [<item:the_vault:black_chromatic_steel_ingot>, <item:ispawner:cage_piece>, <item:the_vault:black_chromatic_steel_ingot>]
]);

craftingTable.addShaped("cagerium_cage", <item:cagerium:cage>, [
    [<item:the_vault:wutodic_silver_ingot>, <item:the_vault:wutodic_silver_ingot>, <item:the_vault:wutodic_silver_ingot>],
    [<item:the_vault:wutodic_silver_ingot>, <item:cagerium:ominous_skull>, <item:the_vault:wutodic_silver_ingot>],
    [<item:the_vault:chromatic_steel_block>, <item:the_vault:chromatic_steel_block>, <item:the_vault:chromatic_steel_block>]
]);

craftingTable.addShaped("cagerium_terrarium", <item:cagerium:terrarium>, [
    [<tag:items:forge:glass>, <tag:items:forge:glass>, <tag:items:forge:glass>],
    [<tag:items:forge:glass>, <item:the_vault:vault_meat_block>, <tag:items:forge:glass>],
    [<item:cagerium:binding_wood_plate>, <item:cagerium:binding_wood_plate>, <item:cagerium:binding_wood_plate>]
]);

craftingTable.addShaped("cagerium_plate", <item:cagerium:plate>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:the_vault:black_chromatic_steel_block>, <item:cagerium:binding_gemstone>, <item:the_vault:black_chromatic_steel_block>],
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]
]);

craftingTable.addShaped("cagerium_ominous_skull", <item:cagerium:ominous_skull>, [
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:wutodic_mass>, <item:the_vault:chromatic_iron_ingot>],
    [<item:the_vault:black_chromatic_steel_ingot>, <item:minecraft:wither_skeleton_skull>, <item:the_vault:black_chromatic_steel_ingot>],
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:extraordinary_larimar>, <item:the_vault:chromatic_iron_ingot>]
]);

craftingTable.addShaped("cagerium_wood_binding_plate", <item:cagerium:binding_wood_plate>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:driftwood>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:driftwood>, <item:the_vault:perfect_larimar>, <item:the_vault:driftwood>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:driftwood>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("cagerium_binding_gemstone", <item:cagerium:binding_gemstone>, [
    [<item:the_vault:wutodic_mass>, <item:the_vault:extraordinary_larimar>, <item:the_vault:wutodic_mass>],
    [<item:the_vault:extraordinary_larimar>, <item:the_vault:echo_pog>, <item:the_vault:extraordinary_larimar>],
    [<item:the_vault:wutodic_mass>, <item:the_vault:extraordinary_larimar>, <item:the_vault:wutodic_mass>]
]);

craftingTable.addShaped("cagerium_burning_upgrade", <item:cagerium:burning_upgrade>, [
    [<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:minecraft:flint_and_steel>, <item:minecraft:air>],
    [<item:the_vault:extraordinary_larimar>, <item:the_vault:black_chromatic_steel_ingot>, <item:the_vault:extraordinary_larimar>]
]);

craftingTable.addShaped("cagerium_skeleton_key", <item:cagerium:skeleton_key>, [
    [<item:minecraft:air>, <item:the_vault:perfect_larimar>, <item:minecraft:air>],
    [<item:the_vault:vault_diamond>, <item:the_vault:mystery_egg>, <item:the_vault:vault_diamond>],
    [<item:minecraft:air>, <item:the_vault:perfect_larimar>, <item:minecraft:air>]
]);

// <item:cagerium:capacity_upgrade>
// <item:cagerium:capacity_upgrade>.withTag({EntityType: "minecraft:cod" as string})
// <item:minecraft:cod_spawn_egg>