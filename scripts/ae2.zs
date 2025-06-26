/* scripts made by Douwsky
for Iskall85's Vaulthunters */

// adding recipes

craftingTable.addShaped("ae2_logic_processor", <item:ae2:logic_processor>, [
    [<item:minecraft:air>, <item:minecraft:gold_ingot>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:ae2:silicon>, <item:minecraft:air>],
    [<item:the_vault:gem_larimar>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:gem_larimar>]
]);

craftingTable.addShaped("ae2_engineering_processor", <item:ae2:engineering_processor>, [
    [<item:minecraft:air>, <item:minecraft:diamond>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:ae2:silicon>, <item:minecraft:air>],
    [<item:the_vault:gem_larimar>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:gem_larimar>]
]);

craftingTable.addShaped("ae2_calculation_processor", <item:ae2:calculation_processor>, [
    [<item:minecraft:air>, <item:minecraft:redstone>, <item:minecraft:air>],
    [<item:minecraft:air>, <item:ae2:silicon>, <item:minecraft:air>],
    [<item:the_vault:gem_larimar>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:gem_larimar>]
]);

craftingTable.addShaped("ae2_controller", <item:ae2:controller>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:perfect_larimar>, <item:the_vault:chromatic_steel_ingot>],
    [<item:ae2:fluix_crystal>, <item:ae2:engineering_processor>, <item:ae2:fluix_crystal>],
    [<item:the_vault:chromatic_steel_ingot>, <item:ae2:fluix_crystal>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("ae2_1k_component", <item:ae2:cell_component_1k>, [
    [<item:the_vault:vault_essence>, <item:ae2:certus_quartz_crystal>, <item:the_vault:vault_essence>],
    [<item:the_vault:chromatic_iron_ingot>, <item:ae2:logic_processor>, <item:the_vault:chromatic_iron_ingot>],
    [<item:minecraft:redstone>, <item:ae2:certus_quartz_crystal>, <item:minecraft:redstone>]
]);

craftingTable.addShapeless("ae2_storage_cell_1k_shapeless", <item:ae2:item_storage_cell_1k>, [
    <item:ae2:item_cell_housing>, <item:ae2:cell_component_1k>
]);

craftingTable.addShaped("ae2_4k_component", <item:ae2:cell_component_4k>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:ae2:calculation_processor>, <item:the_vault:chromatic_steel_ingot>],
    [<item:ae2:cell_component_1k>, <item:the_vault:perfect_larimar>, <item:ae2:cell_component_1k>],
    [<item:minecraft:redstone>, <item:ae2:cell_component_1k>, <item:minecraft:redstone>]
]);

craftingTable.addShapeless("ae2_storage_cell_4k_shapeless", <item:ae2:item_storage_cell_4k>, [
    <item:ae2:item_cell_housing>, <item:ae2:cell_component_4k>
]);

craftingTable.addShaped("ae2_16k_component", <item:ae2:cell_component_16k>, [
    [<item:the_vault:black_chromatic_steel_ingot>, <item:ae2:calculation_processor>, <item:the_vault:black_chromatic_steel_ingot>],
    [<item:ae2:cell_component_4k>, <item:minecraft:redstone>, <item:ae2:cell_component_4k>],
    [<item:the_vault:black_chromatic_steel_ingot>, <item:ae2:cell_component_4k>, <item:the_vault:black_chromatic_steel_ingot>]
]);

craftingTable.addShapeless("ae2_storage_cell_16k_shapeless", <item:ae2:item_storage_cell_16k>, [
    <item:ae2:item_cell_housing>, <item:ae2:cell_component_16k>
]);

craftingTable.addShaped("ae2_64k_component", <item:ae2:cell_component_64k>, [
    [<item:the_vault:black_chromatic_steel_ingot>, <item:ae2:calculation_processor>, <item:the_vault:black_chromatic_steel_ingot>],
    [<item:ae2:cell_component_16k>, <item:the_vault:gem_pog>, <item:ae2:cell_component_16k>],
    [<item:the_vault:black_chromatic_steel_ingot>, <item:ae2:cell_component_16k>, <item:the_vault:black_chromatic_steel_ingot>]
]);

craftingTable.addShapeless("ae2_storage_cell_64k_shapeless", <item:ae2:item_storage_cell_64k>, [
    <item:ae2:item_cell_housing>, <item:ae2:cell_component_64k>
]);

craftingTable.addShaped("ae2_256k_component", <item:ae2:cell_component_256k>, [
    [<item:the_vault:black_chromatic_steel_ingot>, <item:ae2:calculation_processor>, <item:the_vault:black_chromatic_steel_ingot>],
    [<item:ae2:cell_component_64k>, <item:the_vault:pog_prism>, <item:ae2:cell_component_64k>],
    [<item:the_vault:black_chromatic_steel_ingot>, <item:ae2:cell_component_64k>, <item:the_vault:black_chromatic_steel_ingot>]
]);

craftingTable.addShapeless("ae2_storage_cell_256k_shapeless", <item:ae2:item_storage_cell_256k>, [
    <item:ae2:item_cell_housing>, <item:ae2:cell_component_256k>
]);

craftingTable.addShaped("ae2_cell_housing", <item:ae2:item_cell_housing>, [
    [<item:the_vault:chromatic_iron_ingot>, <item:minecraft:redstone>, <item:the_vault:chromatic_iron_ingot>],
    [<item:minecraft:redstone>, <item:minecraft:air>, <item:minecraft:redstone>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("ae2_fluid_cell_housing", <item:ae2:fluid_cell_housing>, [
    [<item:the_vault:chromatic_iron_ingot>, <item:minecraft:redstone>, <item:the_vault:chromatic_iron_ingot>],
    [<item:minecraft:redstone>, <item:minecraft:air>, <item:minecraft:redstone>],
    [<item:minecraft:copper_block>, <item:minecraft:copper_block>, <item:minecraft:copper_block>]
]);

craftingTable.addShaped("ae2_drive", <item:ae2:drive>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:ae2:engineering_processor>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:black_chromatic_steel_ingot>, <item:ae2:fluix_glass_cable>, <item:the_vault:black_chromatic_steel_ingot>],
    [<item:the_vault:chromatic_steel_ingot>, <item:ae2:engineering_processor>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("ae2_formation_core", <item:ae2:formation_core>, [
    [<item:minecraft:air>, <item:the_vault:gem_larimar>, <item:minecraft:air>],
    [<tag:items:forge:gems/certus_quartz>, <item:ae2:fluix_block>, <item:ae2:logic_processor>],
    [<item:minecraft:air>, <item:the_vault:gem_larimar>, <item:minecraft:air>]
]);

craftingTable.addShaped("ae2_annihilation_core", <item:ae2:annihilation_core>, [
    [<item:minecraft:air>, <item:the_vault:gem_larimar>, <item:minecraft:air>],
    [<tag:items:forge:gems/quartz>, <item:ae2:fluix_block>, <item:ae2:logic_processor>],
    [<item:minecraft:air>, <item:the_vault:gem_larimar>, <item:minecraft:air>]
]);

craftingTable.addShaped("ae2_molecular_assembler", <item:ae2:molecular_assembler>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:pog_prism>, <item:the_vault:chromatic_steel_ingot>],
    [<item:ae2:formation_core>, <item:minecraft:crafting_table>, <item:ae2:annihilation_core>],
    [<item:the_vault:chromatic_steel_ingot>, <item:woldsvaults:chroma_core>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("ae2_interface", <item:ae2:interface>, [
    [<item:the_vault:chromatic_steel_ingot>, <tag:items:forge:glass>, <item:the_vault:chromatic_steel_ingot>],
    [<item:ae2:formation_core>, <item:the_vault:perfect_larimar>, <item:ae2:annihilation_core>],
    [<item:the_vault:chromatic_steel_ingot>, <tag:items:forge:glass>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShapeless("ae2_shapeless_interface", <item:ae2:interface>, [
    <item:ae2:cable_interface>
]);

craftingTable.addShaped("ae2_inscriber", <item:ae2:inscriber>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:perfect_larimar>, <item:the_vault:chromatic_steel_ingot>],
    [<item:minecraft:waxed_copper_block>, <item:minecraft:air>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:perfect_larimar>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("ae2_quartz_fiber", <item:ae2:quartz_fiber> *4, [
    [<tag:items:forge:glass>, <item:the_vault:chromatic_iron_ingot>, <tag:items:forge:glass>],
    [<tag:items:ae2:all_quartz_dust>, <tag:items:ae2:all_quartz_dust>, <tag:items:ae2:all_quartz_dust>],
    [<tag:items:forge:glass>, <item:the_vault:chromatic_iron_ingot>, <tag:items:forge:glass>]
]);

craftingTable.addShapeless("ae2_shapeless_terminal", <item:ae2:terminal>, [
    <item:ae2:annihilation_core>, <tag:items:ae2:illuminated_panel>,
    <item:ae2:logic_processor>, <item:ae2:formation_core>,
    <item:the_vault:gem_pog>
]);

craftingTable.addShaped("ae2_crafting_grid", <item:ae2:crafting_terminal>, [
    [<item:the_vault:black_chromatic_steel_ingot>, <item:the_vault:gem_pog>, <item:the_vault:black_chromatic_steel_ingot>],
    [<item:the_vault:gem_pog>, <item:ae2:terminal>, <item:minecraft:crafting_table>],
    [<item:the_vault:black_chromatic_steel_ingot>, <item:the_vault:gem_pog>, <item:the_vault:black_chromatic_steel_ingot>]
]);

craftingTable.addShapeless("ae2_shapeless_pattern_encoding_terminal", <item:ae2:pattern_encoding_terminal>, [
    <item:ae2:crafting_terminal>, <item:ae2:engineering_processor>,
    <item:ae2:blank_pattern>, <item:the_vault:omega_pog>
]);

craftingTable.addShaped("ae2_charger", <item:ae2:charger>, [
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_iron_ingot>],
    [<item:the_vault:chromatic_iron_block>, <item:minecraft:air>, <item:minecraft:air>],
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_iron_ingot>]
]);

craftingTable.addShapeless("ae2_cable_anchor", <item:ae2:cable_anchor> *3, [
<item:the_vault:chromatic_iron_ingot>, <tag:items:ae2:knife>.asIIngredient().anyDamage().transformDamage(10)
]);

craftingTable.addShaped("ae2_basic_card", <item:ae2:basic_card>, [
    [<item:minecraft:gold_block>, <item:the_vault:chromatic_iron_ingot>, <item:minecraft:air>],
    [<item:minecraft:redstone>, <item:ae2:calculation_processor>, <item:the_vault:chromatic_iron_ingot>],
    [<item:minecraft:gold_block>, <item:the_vault:chromatic_iron_ingot>, <item:minecraft:air>]
]);

craftingTable.addShaped("ae2_advanced_card", <item:ae2:advanced_card>, [
    [<item:the_vault:gem_larimar>, <item:the_vault:chromatic_iron_ingot>, <item:minecraft:air>],
    [<item:the_vault:gem_larimar>, <item:ae2:basic_card>, <item:the_vault:chromatic_iron_ingot>],
    [<item:the_vault:gem_larimar>, <item:the_vault:chromatic_iron_ingot>, <item:minecraft:air>]
]);

craftingTable.addShaped("ae2_shapeless_acceleration_card", <item:ae2:speed_card>, [
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:gem_larimar>, <item:the_vault:chromatic_iron_ingot>],
    [<item:the_vault:vault_essence>, <item:ae2:advanced_card>, <item:the_vault:vault_essence>],
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:gem_larimar>, <item:the_vault:chromatic_iron_ingot>]
]);

craftingTable.addShapeless("ae2_shapeless_crafting_card", <item:ae2:crafting_card>, [
    <item:ae2:basic_card>, <item:minecraft:crafting_table>,
    <item:the_vault:gem_pog>
]);

craftingTable.addShaped("ae2_energy_cell", <item:ae2:energy_cell>, [
    [<item:ae2:quartz_block>, <tag:items:forge:gems/fluix>, <item:ae2:quartz_block>],
    [<item:the_vault:chromatic_steel_ingot>, <item:the_vault:perfect_larimar>, <item:the_vault:chromatic_steel_ingot>],
    [<item:ae2:quartz_block>, <tag:items:forge:gems/fluix>, <item:ae2:quartz_block>]
]);

craftingTable.addShaped("ae2_crafting_unit", <item:ae2:crafting_unit>, [
    [<item:the_vault:chromatic_iron_ingot>, <item:ae2:calculation_processor>, <item:the_vault:chromatic_iron_ingot>],
    [<tag:items:ae2:smart_cable>, <item:ae2:logic_processor>, <tag:items:ae2:smart_cable>],
    [<item:the_vault:chromatic_iron_ingot>, <item:ae2:calculation_processor>, <item:the_vault:chromatic_iron_ingot>]
]);


craftingTable.addShapeless("ae2_shapeless_wireless_crafting_terminal", <item:ae2:wireless_crafting_terminal>, [
<item:ae2:wireless_terminal>, <item:ae2:calculation_processor>, <item:the_vault:echo_pog>, <item:minecraft:crafting_table>
]);

craftingTable.addShaped("ae2_energy_acceptor", <item:ae2:energy_acceptor>, [
    [<item:the_vault:chromatic_iron_ingot>, <item:ae2:quartz_vibrant_glass>, <item:the_vault:chromatic_iron_ingot>],
    [<item:ae2:quartz_vibrant_glass>, <item:the_vault:chromatic_iron_ingot>, <item:ae2:quartz_vibrant_glass>],
    [<item:the_vault:chromatic_iron_ingot>, <item:ae2:quartz_vibrant_glass>, <item:the_vault:chromatic_iron_ingot>]
]);

craftingTable.addShapeless("ae2_shapeless_energy_acceptor", <item:ae2:energy_acceptor>, [
<item:ae2:cable_energy_acceptor>
]);

craftingTable.addShaped("ae2_wireless_access_point", <item:ae2:wireless_access_point>, [
    [<item:the_vault:chromatic_steel_ingot>, <item:ae2:wireless_receiver>, <item:the_vault:chromatic_steel_ingot>],
    [<item:the_vault:perfect_larimar>, <item:ae2:calculation_processor>, <item:the_vault:perfect_larimar>],
    [<item:the_vault:chromatic_steel_ingot>, <item:ae2:fluix_glass_cable>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("ae2_wireless_receiver", <item:ae2:wireless_receiver>, [
    [<item:minecraft:air>, <item:ae2:fluix_pearl>, <item:minecraft:air>],
    [<item:the_vault:chromatic_steel_ingot>, <item:ae2:fluix_glass_cable>, <item:the_vault:chromatic_steel_ingot>],
    [<item:minecraft:air>, <item:the_vault:chromatic_steel_ingot>, <item:minecraft:air>]
]);

craftingTable.addShaped("ae2_quartz_growth_accelerator", <item:ae2:quartz_growth_accelerator>, [
    [<item:the_vault:perfect_larimar>, <item:ae2:fluix_glass_cable>, <item:the_vault:perfect_larimar>],
    [<item:ae2:quartz_vibrant_glass>, <item:ae2:fluix_block>, <item:ae2:quartz_vibrant_glass>],
    [<item:the_vault:chromatic_steel_ingot>, <item:ae2:fluix_glass_cable>, <item:the_vault:chromatic_steel_ingot>]
]);

craftingTable.addShaped("ae2_network_wireless_booster", <item:ae2:wireless_booster>, [
    [<item:the_vault:gem_larimar>, <item:the_vault:perfect_larimar>, <item:the_vault:gem_larimar>], 
    [<tag:items:forge:dusts/fluix>, <tag:items:ae2:all_certus_quartz>, <tag:items:forge:dusts/ender_pearl>],
    [<item:the_vault:chromatic_iron_block>, <item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_iron_block>]
]);

craftingTable.addShaped("ae2_pattern_provider", <item:ae2:pattern_provider>, [
    [<item:the_vault:chromatic_iron_ingot>, <item:the_vault:pog_prism>, <item:the_vault:chromatic_iron_ingot>], 
    [<item:ae2:formation_core>, <item:minecraft:crafting_table>, <item:ae2:annihilation_core>],
    [<item:the_vault:chromatic_iron_ingot>, <item:woldsvaults:chroma_core>, <item:the_vault:chromatic_iron_ingot>]
]);

craftingTable.addShaped("ae2_pattern", <item:ae2:blank_pattern>, [
    [<item:the_vault:magic_silk>, <item:the_vault:magic_silk>, <item:the_vault:magic_silk>],
    [<item:woldsvaults:infused_driftwood>, <tag:items:forge:gems/certus_quartz>, <item:woldsvaults:infused_driftwood>],
    [<item:the_vault:chromatic_iron_ingot>,<item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>]
]);

craftingTable.addShaped("quantum_ring", <item:ae2:quantum_ring> *8, [
    [<item:the_vault:black_chromatic_steel_ingot>,  <item:ae2:logic_processor>, <item:the_vault:black_chromatic_steel_ingot>], 
    [ <item:ae2:engineering_processor>, <item:ae2:dense_energy_cell>, <tag:items:ae2:smart_dense_cable>],
    [<item:the_vault:black_chromatic_steel_ingot>,  <item:ae2:logic_processor>, <item:the_vault:black_chromatic_steel_ingot>]]
);

craftingTable.addShaped("singularity", <item:ae2:singularity>, [
    [<item:the_vault:extraordinary_larimar>,  <item:the_vault:black_chromatic_steel_ingot>, <item:the_vault:extraordinary_larimar>], 
    [<item:the_vault:black_chromatic_steel_ingot>, <item:the_vault:vault_diamond_block>, <item:the_vault:black_chromatic_steel_ingot>], 
    [<item:the_vault:extraordinary_larimar>, <item:the_vault:black_chromatic_steel_ingot>, <item:the_vault:extraordinary_larimar>]]
);
craftingTable.addShaped("io_port", <item:ae2:io_port>, [
    [<item:the_vault:chromatic_steel_ingot>,  <item:the_vault:chromatic_steel_ingot>, <item:the_vault:chromatic_steel_ingot>], 
    [<item:the_vault:vault_diamond>, <tag:items:ae2:glass_cable>, <item:the_vault:vault_diamond>], 
    [<item:the_vault:chromatic_iron_ingot>, <item:ae2:logic_processor>, <item:the_vault:chromatic_iron_ingot>]]
);

craftingTable.addShaped("security_station", <item:ae2:security_station>, [
    [<item:the_vault:chromatic_iron_ingot>, <item:ae2:engineering_processor>, <item:the_vault:chromatic_iron_ingot>], 
    [<item:ae2:fluix_glass_cable>, <item:the_vault:vault_diamond>, <item:ae2:fluix_glass_cable>], 
    [<item:the_vault:chromatic_iron_ingot>, <item:ae2:engineering_processor>, <item:the_vault:chromatic_iron_ingot>]
]);

smithing.addRecipe("ae2t_disk_smithing", <item:ae2things:disk_housing>, <item:ae2:item_cell_housing>, <item:the_vault:wutodic_silver_ingot>);

craftingTable.addShapeless("ae2t_storage_cell_1k_shapeless", <item:ae2things:disk_drive_1k>, [
    <item:ae2things:disk_housing>, <item:ae2:cell_component_1k>
]);

craftingTable.addShapeless("ae2t_storage_cell_4k_shapeless", <item:ae2things:disk_drive_4k>, [
    <item:ae2things:disk_housing>, <item:ae2:cell_component_4k>
]);

craftingTable.addShapeless("ae2t_storage_cell_16k_shapeless", <item:ae2things:disk_drive_16k>, [
    <item:ae2things:disk_housing>, <item:ae2:cell_component_16k>
]);

craftingTable.addShapeless("ae2t_storage_cell_64k_shapeless", <item:ae2things:disk_drive_64k>, [
    <item:ae2things:disk_housing>, <item:ae2:cell_component_64k>
]);

craftingTable.addShapeless("ae2t_storage_cell_256k_shapeless", <item:ae2things:disk_drive_256k>, [
    <item:ae2things:disk_housing>, <item:ae2:cell_component_256k>
]);

craftingTable.addShaped("ae2t_advanced_inscriber", <item:ae2things:advanced_inscriber>, [
    [<item:the_vault:perfect_larimar>, <item:minecraft:hopper>, <item:the_vault:perfect_larimar>],
    [<item:ae2:engineering_processor>, <item:ae2:inscriber>, <item:ae2:engineering_processor>],
    [<item:the_vault:perfect_larimar>, <item:minecraft:hopper>, <item:the_vault:perfect_larimar>]
]);