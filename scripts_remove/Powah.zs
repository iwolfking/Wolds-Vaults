import mods.jei.JEI;

/* scripts made by Douwsky
for Iskall85's Vaulthunters */

// adding recipes


var cellTypes = [
  "basic",
  "hardened",
  "blazing",
  "niotic",
  "spirited",
  "nitro"
 ];

for type in cellTypes {
	craftingTable.remove(<item:powah:energy_cell_${type}>);
	craftingTable.remove(<item:powah:reactor_${type}>);
	craftingTable.remove(<item:powah:player_transmitter_${type}>);
	JEI.hideIngredient(<item:powah:player_transmitter_${type}>);
}

craftingTable.remove(<item:powah:player_transmitter_starter>);
JEI.hideIngredient(<item:powah:player_transmitter_starter>);

<recipetype:powah:energizing>.addJsonRecipe("crystal_nitro", { //
  "ingredients": [
	{"tag": "forge:nether_stars"},
	{"item": "powah:blazing_crystal_block"},
    {"item": "the_vault:black_chromatic_steel_ingot"},
  	{"item": "the_vault:gem_echo"}
  ],
  "energy": 8500000,
  "result": {
	"item": "powah:crystal_nitro",
	"count": 3
  }
});

<recipetype:powah:energizing>.addJsonRecipe("crystal_spirited", { //
  "ingredients": [
	{"tag": "forge:storage_blocks/emerald"},
	{"item": "the_vault:vault_diamond"},
    {"item": "the_vault:chromatic_steel_ingot"},
	{"item": "the_vault:gem_black_opal"},
   	{"item": "the_vault:perfect_larimar"}
  ],
  "energy": 500000,
  "result": {
	"item": "powah:crystal_spirited",
	"count": 3
  }
});

<recipetype:powah:energizing>.addJsonRecipe("crystal_niotic", { //
  "ingredients": [
	{"item": "the_vault:vault_diamond"},
    {"item": "the_vault:carbon"},
   	{"item": "the_vault:perfect_larimar"}
  ],
  "energy": 120000,
  "result": {
	"item": "powah:crystal_niotic",
	"count": 3
  }
});

<recipetype:powah:energizing>.addJsonRecipe("crystal_blazing", { //
  "ingredients": [
	{"item": "minecraft:blaze_powder"},
	{"item": "minecraft:blaze_powder"},
	{"item": "minecraft:blaze_powder"},
	{"item": "minecraft:blaze_powder"},
   	{"item": "the_vault:perfect_larimar"}
  ],
  "energy": 27000,
  "result": {
	"item": "powah:crystal_blazing",
	"count": 2
  }
});

<recipetype:powah:energizing>.addJsonRecipe("crystal_blazing2", { //
  "ingredients": [
	{"item": "minecraft:blaze_rod"},
   	{"item": "the_vault:perfect_larimar"}
  ],
  "energy": 48000,
  "result": {
	"item": "powah:crystal_blazing",
	"count": 2
  }
});

<recipetype:powah:energizing>.addJsonRecipe("steel_energized_block", { //
  "ingredients": [
	{"item": "the_vault:chromatic_steel_block"},
  	{"item": "the_vault:perfect_larimar"},
  	{"item": "the_vault:perfect_larimar"}
  ],
  "energy": 44000,
  "result": {
	"item": "powah:energized_steel_block",
	"count": 4
  }
});

<recipetype:powah:energizing>.addJsonRecipe("steel_energized", { //
  "ingredients": [
	{"item": "the_vault:chromatic_steel_ingot"},
  	{"item": "the_vault:gem_larimar"},
  	{"item": "the_vault:vault_essence"}
  ],
  "energy": 10000,
  "result": {
	"item": "powah:steel_energized",
	"count": 2
  }
});


<recipetype:powah:energizing>.addJsonRecipe("ender_core", { //
  "ingredients": [
	{"item": "quark:ender_watcher"},
	{"item": "powah:dielectric_casing"},
	{"item": "powah:capacitor_basic_tiny"},
  	{"item": "the_vault:perfect_larimar"}
  ],
  "energy": 23000,
  "result": {
	"item": "powah:ender_core",
	"count": 1
  }
});

<recipetype:powah:energizing>.addJsonRecipe("charged_snowball", { //
  "ingredients": [
	{"item": "minecraft:snowball"},
  	{"item": "the_vault:perfect_larimar"}
  ],
  "energy": 230000,
  "result": {
	"item": "powah:charged_snowball",
	"count": 1
  }
});

<recipetype:powah:energizing>.addJsonRecipe("dry_ice", { //
  "ingredients": [
	{"item": "minecraft:blue_ice"},
	{"item": "minecraft:blue_ice"},
	{"item": "minecraft:blue_ice"},
    {"item": "the_vault:vault_essence"},
  	{"item": "the_vault:perfect_larimar"}
  ],
  "energy": 2430,
  "result": {
	"item": "powah:dry_ice",
	"count": 1
  }
});

craftingTable.addShaped("powah_dielectric_casing", <item:powah:dielectric_casing>, [
	[<item:the_vault:chromatic_iron_ingot>, <item:powah:dielectric_rod_horizontal>, <item:the_vault:chromatic_iron_ingot>],
	[<item:powah:dielectric_rod>, <item:the_vault:chromatic_steel_ingot>, <item:powah:dielectric_rod>],
	[<item:the_vault:chromatic_iron_ingot>, <item:powah:dielectric_rod_horizontal>, <item:the_vault:chromatic_iron_ingot>]
]);

craftingTable.addShaped("powah_solar_panel_starter", <item:powah:solar_panel_starter>, [
	[<item:powah:photoelectric_pane>, <item:the_vault:chromatic_iron_ingot>, <item:powah:photoelectric_pane>],
	[<item:powah:capacitor_basic_tiny>, <item:powah:dielectric_casing>, <item:powah:capacitor_basic_tiny>],
	[<item:powah:dielectric_paste>, <item:powah:dielectric_paste>, <item:powah:dielectric_paste>]
]);

craftingTable.addShaped("powah_solar_panel_basic", <item:powah:solar_panel_basic>, [
	[<item:the_vault:chromatic_iron_ingot>, <item:powah:solar_panel_starter>, <item:the_vault:chromatic_iron_ingot>],
	[<item:powah:capacitor_basic>, <item:powah:dielectric_casing>, <item:powah:capacitor_basic>],
	[<item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>]
]);

craftingTable.addShaped("powah_solar_panel_hardened", <item:powah:solar_panel_hardened>, [
	[<item:the_vault:chromatic_iron_ingot>, <item:powah:solar_panel_basic>, <item:the_vault:chromatic_iron_ingot>],
	[<item:powah:capacitor_hardened>, <item:powah:dielectric_casing>, <item:powah:capacitor_hardened>],
	[<item:powah:steel_energized>, <item:powah:steel_energized>, <item:powah:steel_energized>]
]);

craftingTable.addShaped("powah_solar_panel_blazing", <item:powah:solar_panel_blazing>, [
	[<item:the_vault:chromatic_iron_ingot>, <item:powah:solar_panel_hardened>, <item:the_vault:chromatic_iron_ingot>],
	[<item:powah:capacitor_blazing>, <item:powah:dielectric_casing>, <item:powah:capacitor_blazing>],
	[<item:powah:crystal_blazing>, <item:powah:crystal_blazing>, <item:powah:crystal_blazing>]
]);

craftingTable.addShaped("powah_solar_panel_niotic", <item:powah:solar_panel_niotic>, [
	[<item:the_vault:chromatic_steel_ingot>, <item:powah:solar_panel_blazing>, <item:the_vault:chromatic_steel_ingot>],
	[<item:powah:capacitor_niotic>, <item:powah:dielectric_casing>, <item:powah:capacitor_niotic>],
	[<item:powah:crystal_niotic>, <item:powah:crystal_niotic>, <item:powah:crystal_niotic>]
]);

craftingTable.addShaped("powah_solar_panel_spirited", <item:powah:solar_panel_spirited>, [
	[<item:the_vault:chromatic_steel_ingot>, <item:powah:solar_panel_niotic>, <item:the_vault:chromatic_steel_ingot>],
	[<item:powah:capacitor_spirited>, <item:powah:dielectric_casing>, <item:powah:capacitor_spirited>],
	[<item:powah:crystal_spirited>, <item:powah:crystal_spirited>, <item:powah:crystal_spirited>]
]);

craftingTable.addShaped("powah_solar_panel_nitro", <item:powah:solar_panel_nitro>, [
	[<item:the_vault:chromatic_steel_ingot>, <item:powah:solar_panel_spirited>, <item:the_vault:chromatic_steel_ingot>],
	[<item:powah:capacitor_nitro>, <item:powah:dielectric_casing>, <item:powah:capacitor_nitro>],
	[<item:powah:crystal_nitro>, <item:powah:crystal_nitro>, <item:powah:crystal_nitro>]
]);

craftingTable.addShaped("powah_thermoelectric_plate", <item:powah:thermoelectric_plate>, [
	[<item:quark:blaze_lantern>, <item:the_vault:chromatic_iron_ingot>, <item:quark:blaze_lantern>],
	[<item:the_vault:chromatic_iron_ingot>, <item:powah:capacitor_basic_tiny>, <item:the_vault:chromatic_iron_ingot>],
	[<item:quark:blaze_lantern>, <item:the_vault:chromatic_iron_ingot>, <item:quark:blaze_lantern>]
]);

craftingTable.addShaped("powah_energizing_orb", <item:powah:energizing_orb>, [
	[<item:minecraft:tinted_glass>, <item:minecraft:tinted_glass>, <item:minecraft:tinted_glass>],
	[<item:minecraft:tinted_glass>, <item:powah:dielectric_casing>, <item:minecraft:tinted_glass>],
	[<item:powah:dielectric_rod_horizontal>, <item:powah:dielectric_rod_horizontal>, <item:powah:dielectric_rod_horizontal>]
]);

craftingTable.addShaped("powah_photoelectric_pane", <item:powah:photoelectric_pane>, [
	[<item:the_vault:driftwood>, <item:powah:dielectric_paste>, <item:the_vault:driftwood>],
	[<item:powah:dielectric_paste>, <item:minecraft:tinted_glass>, <item:powah:dielectric_paste>],
	[<item:the_vault:driftwood>, <item:powah:dielectric_paste>, <item:the_vault:driftwood>]
]);

craftingTable.addShaped("powah_large_basic_capacitor", <item:powah:capacitor_basic_large>, [
	[<item:the_vault:magic_silk>, <item:the_vault:gem_larimar>, <item:the_vault:magic_silk>],
	[<item:powah:capacitor_basic>, <item:the_vault:chromatic_steel_ingot>, <item:powah:capacitor_basic>],
	[<item:the_vault:magic_silk>, <item:the_vault:gem_larimar>, <item:the_vault:magic_silk>]
]);
craftingTable.addShaped("powah_capacitor_basic", <item:powah:capacitor_basic>, [
	[<item:powah:dielectric_paste>, <item:the_vault:gem_larimar>, <item:powah:dielectric_paste>],
	[<item:powah:capacitor_basic_tiny>, <item:the_vault:vault_essence>, <item:powah:capacitor_basic_tiny>],
	[<item:powah:dielectric_paste>, <item:the_vault:gem_larimar>, <item:powah:dielectric_paste>]
]);

craftingTable.addShaped("powah_capacitor_blazing", <item:powah:capacitor_blazing>, [
	[<item:powah:dielectric_paste>, <item:powah:crystal_blazing>, <item:powah:dielectric_paste>],
	[<item:powah:crystal_blazing>, <item:powah:capacitor_hardened>, <item:powah:crystal_blazing>],
	[<item:powah:dielectric_paste>, <item:powah:crystal_blazing>, <item:powah:dielectric_paste>]
]);

craftingTable.addShaped("powah_capacitor_niotic", <item:powah:capacitor_niotic>, [
	[<item:powah:dielectric_paste>, <item:powah:crystal_niotic>, <item:powah:dielectric_paste>],
	[<item:powah:crystal_niotic>, <item:powah:capacitor_blazing>, <item:powah:crystal_niotic>],
	[<item:powah:dielectric_paste>, <item:powah:crystal_niotic>, <item:powah:dielectric_paste>]
]);

craftingTable.addShaped("powah_capacitor_spirited", <item:powah:capacitor_spirited>, [
	[<item:powah:dielectric_paste>, <item:powah:crystal_spirited>, <item:powah:dielectric_paste>],
	[<item:powah:crystal_spirited>, <item:powah:capacitor_niotic>, <item:powah:crystal_spirited>],
	[<item:powah:dielectric_paste>, <item:powah:crystal_spirited>, <item:powah:dielectric_paste>]
]);

craftingTable.addShaped("powah_capacitor_nitro", <item:powah:capacitor_nitro>, [
	[<item:powah:dielectric_paste>, <item:powah:crystal_nitro>, <item:powah:dielectric_paste>],
	[<item:powah:crystal_nitro>, <item:powah:capacitor_spirited>, <item:powah:crystal_nitro>],
	[<item:powah:dielectric_paste>, <item:powah:crystal_nitro>, <item:powah:dielectric_paste>]
]);

craftingTable.addShaped("powah_energy_cell_starter", <item:powah:energy_cell_starter>, [
	[<item:the_vault:chromatic_iron_ingot>, <item:powah:capacitor_basic_tiny>, <item:the_vault:chromatic_iron_ingot>], 
	[<item:powah:capacitor_basic_tiny>, <item:powah:dielectric_casing>, <item:powah:capacitor_basic_tiny>], 
	[<item:the_vault:chromatic_iron_ingot>, <item:powah:capacitor_basic_tiny>, <item:the_vault:chromatic_iron_ingot>]
]);

craftingTable.addShaped("powah_ender_cell_starter", <item:powah:ender_cell_starter> * 2, [
	[<item:minecraft:obsidian>, <item:the_vault:chromatic_iron_nugget>, <item:minecraft:obsidian>], 
	[<item:the_vault:chromatic_iron_nugget>, <item:powah:ender_core>, <item:the_vault:chromatic_iron_nugget>], 
	[<item:minecraft:obsidian>, <item:the_vault:chromatic_iron_nugget>, <item:minecraft:obsidian>]
]);

craftingTable.addShaped("powah_cable_starter", <item:powah:energy_cable_starter> * 12, [
	[<item:powah:dielectric_rod_horizontal>, <item:powah:dielectric_rod_horizontal>, <item:powah:dielectric_rod_horizontal>], 
	[<item:the_vault:chromatic_iron_nugget>, <item:powah:capacitor_basic_tiny>, <item:the_vault:chromatic_iron_nugget>], 
	[<item:powah:dielectric_rod_horizontal>, <item:powah:dielectric_rod_horizontal>, <item:powah:dielectric_rod_horizontal>]
]);

craftingTable.addShaped("powah_battery_basic", <item:powah:battery_basic>, [
	[<item:powah:dielectric_paste>, <item:the_vault:chromatic_iron_ingot>, <item:powah:dielectric_paste>], 
	[<item:powah:capacitor_basic_large>, <item:minecraft:redstone_block>, <item:powah:capacitor_basic_large>], 
	[<item:powah:dielectric_paste>, <item:powah:battery_starter>, <item:powah:dielectric_paste>]
]);

craftingTable.addShaped("powah_energy_cell_basic", <item:powah:energy_cell_basic>, [
	[<item:the_vault:chromatic_iron_ingot>, <item:powah:capacitor_basic>, <item:the_vault:chromatic_iron_ingot>], 
	[<item:powah:capacitor_basic>, <item:powah:dielectric_casing>, <item:powah:capacitor_basic>], 
	[<item:the_vault:chromatic_iron_ingot>, <item:powah:capacitor_basic>, <item:the_vault:chromatic_iron_ingot>]
]);

craftingTable.addShaped("powah_energy_cell_basic_2", <item:powah:energy_cell_basic>, [
	[<item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>], 
	[<item:powah:dielectric_casing>, <item:powah:energy_cell_starter>, <item:powah:dielectric_casing>], 
	[<item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>]
]);

craftingTable.addShaped("powah_energy_cell_hardened", <item:powah:energy_cell_hardened>, [
	[<item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>], 
	[<item:powah:dielectric_casing>, <item:powah:energy_cell_basic>, <item:powah:dielectric_casing>], 
	[<item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>]
]);

craftingTable.addShaped("powah_energy_cell_blazing", <item:powah:energy_cell_blazing>, [
	[<item:powah:crystal_blazing>, <item:powah:capacitor_blazing>, <item:powah:crystal_blazing>], 
	[<item:powah:dielectric_casing>, <item:powah:energy_cell_hardened>, <item:powah:dielectric_casing>], 
	[<item:powah:crystal_blazing>, <item:powah:capacitor_blazing>, <item:powah:crystal_blazing>]
]);

craftingTable.addShaped("powah_energy_cell_niotic", <item:powah:energy_cell_niotic>, [
	[<item:powah:crystal_niotic>, <item:powah:capacitor_niotic>, <item:powah:crystal_niotic>], 
	[<item:powah:dielectric_casing>, <item:powah:energy_cell_blazing>, <item:powah:dielectric_casing>], 
	[<item:powah:crystal_niotic>, <item:powah:capacitor_niotic>, <item:powah:crystal_niotic>]
]);

craftingTable.addShaped("powah_energy_cell_spirited", <item:powah:energy_cell_spirited>, [
	[<item:powah:crystal_spirited>, <item:powah:capacitor_spirited>, <item:powah:crystal_spirited>], 
	[<item:powah:dielectric_casing>, <item:powah:energy_cell_niotic>, <item:powah:dielectric_casing>], 
	[<item:powah:crystal_spirited>, <item:powah:capacitor_spirited>, <item:powah:crystal_spirited>]
]);

craftingTable.addShaped("powah_energy_cell_nitro", <item:powah:energy_cell_nitro>, [
	[<item:powah:crystal_nitro>, <item:powah:capacitor_nitro>, <item:powah:crystal_nitro>], 
	[<item:powah:dielectric_casing>, <item:powah:energy_cell_spirited>, <item:powah:dielectric_casing>], 
	[<item:powah:crystal_nitro>, <item:powah:capacitor_nitro>, <item:powah:crystal_nitro>]
]);

craftingTable.addShaped("powah_cable_basic", <item:powah:energy_cable_basic> * 6, [[<item:powah:dielectric_rod_horizontal>, <item:powah:dielectric_rod_horizontal>, <item:powah:dielectric_rod_horizontal>], [<item:powah:energy_cable_starter>, <item:powah:capacitor_basic>, <item:powah:energy_cable_starter>], [<item:powah:dielectric_rod_horizontal>, <item:powah:dielectric_rod_horizontal>, <item:powah:dielectric_rod_horizontal>]]);

craftingTable.addShaped("powah_cable_basic_2", <item:powah:energy_cable_basic> * 12, [[<item:powah:dielectric_rod_horizontal>, <item:powah:dielectric_rod_horizontal>, <item:powah:dielectric_rod_horizontal>], [<item:the_vault:chromatic_iron_ingot>, <item:powah:capacitor_basic>, <item:the_vault:chromatic_iron_ingot>], [<item:powah:dielectric_rod_horizontal>, <item:powah:dielectric_rod_horizontal>, <item:powah:dielectric_rod_horizontal>]]);

craftingTable.addShaped("powah_furnator_basic", <item:powah:furnator_basic>, [[<item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>], [<item:powah:capacitor_basic>, <item:powah:dielectric_casing>, <item:powah:capacitor_basic>], [<item:the_vault:chromatic_iron_ingot>, <item:powah:furnator_starter>, <item:the_vault:chromatic_iron_ingot>]]);

craftingTable.addShaped("powah_magmator_basic", <item:powah:magmator_basic>, [[<item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>, <item:the_vault:chromatic_iron_ingot>], [<item:powah:capacitor_basic>, <item:powah:dielectric_casing>, <item:powah:capacitor_basic>], [<item:the_vault:chromatic_iron_ingot>, <item:powah:magmator_starter>, <item:the_vault:chromatic_iron_ingot>]]);

craftingTable.addShaped("powah_thermo_generator_basic", <item:powah:thermo_generator_basic>, [[<item:powah:dielectric_paste>, <item:the_vault:chromatic_iron_ingot>, <item:powah:dielectric_paste>], [<item:powah:capacitor_basic>, <item:powah:dielectric_casing>, <item:powah:capacitor_basic>], [<item:powah:thermoelectric_plate>, <item:powah:thermo_generator_starter>, <item:powah:thermoelectric_plate>]]);

craftingTable.addShaped("powah_reactor_basic", <item:powah:reactor_basic> * 4, [
	[<item:powah:reactor_starter>, <item:powah:uraninite>, <item:powah:reactor_starter>], 
	[<item:powah:capacitor_basic_large>, <item:powah:uraninite>, <item:powah:capacitor_basic_large>], 
	[<item:powah:reactor_starter>, <item:powah:uraninite>, <item:powah:reactor_starter>]
]);

craftingTable.addShaped("powah_reactor_niotic", <item:powah:reactor_niotic> * 4, [
	[<item:powah:reactor_blazing>, <item:powah:uraninite>, <item:powah:reactor_blazing>], 
	[<item:powah:capacitor_niotic>, <item:powah:uraninite>, <item:powah:capacitor_niotic>], 
	[<item:powah:reactor_blazing>, <item:powah:uraninite>, <item:powah:reactor_blazing>]
]);

craftingTable.addShaped("powah_reactor_hardened", <item:powah:reactor_hardened> * 4, [
	[<item:powah:reactor_basic>, <item:powah:uraninite>, <item:powah:reactor_basic>], 
	[<item:powah:capacitor_hardened>, <item:powah:uraninite>, <item:powah:capacitor_hardened>], 
	[<item:powah:reactor_basic>, <item:powah:uraninite>, <item:powah:reactor_basic>]
]);

craftingTable.addShaped("powah_reactor_blazing", <item:powah:reactor_blazing> * 4, [
	[<item:powah:reactor_hardened>, <item:powah:uraninite>, <item:powah:reactor_hardened>], 
	[<item:powah:capacitor_blazing>, <item:powah:uraninite>, <item:powah:capacitor_blazing>], 
	[<item:powah:reactor_hardened>, <item:powah:uraninite>, <item:powah:reactor_hardened>]
]);

craftingTable.addShaped("powah_reactor_spirited", <item:powah:reactor_spirited> * 4, [
	[<item:powah:reactor_niotic>, <item:powah:uraninite>, <item:powah:reactor_niotic>], 
	[<item:powah:capacitor_spirited>, <item:powah:uraninite>, <item:powah:capacitor_spirited>], 
	[<item:powah:reactor_niotic>, <item:powah:uraninite>, <item:powah:reactor_niotic>]
]);

craftingTable.addShaped("powah_reactor_nitro", <item:powah:reactor_nitro> * 4, [
	[<item:powah:reactor_spirited>, <item:powah:uraninite>, <item:powah:reactor_spirited>],
	[<item:powah:capacitor_nitro>, <item:powah:uraninite>, <item:powah:capacitor_nitro>], 
	[<item:powah:reactor_spirited>, <item:powah:uraninite>, <item:powah:reactor_spirited>]
]);

