onEvent('recipes', event => {
	
	// THIS CONFLICTS WITH VH3 OOB CRAFTTWEAKER RECIPES!
	// REMOVE THE CURRENT RECIPES FROM CRAFTTWEAKER AS WELL AS THE REMOVAL RECIPES FOR THE FOLLOWING BELOW
	event.remove({output: 'powah:dielectric_paste'});
	event.remove({output: 'powah:dielectric_rod'});
	event.remove({output: 'powah:dielectric_rod_horizontal'});
	event.remove({output: 'powah:capacitor_basic_tiny'});
	
	// Dielectric Paste 24
	event.shapeless(
	'24x powah:dielectric_paste',
	[
		'the_vault:gem_larimar',
		'the_vault:carbon',
		'the_vault:chromatic_iron_ingot',
		'the_vault:chromatic_iron_ingot',
		'the_vault:magic_silk',
		'minecraft:lava_bucket'
	]	
	).replaceIngredient('minecraft:lava_bucket','minecraft:bucket');
	// Dielectric Paste 16
	event.shapeless(
	'16x powah:dielectric_paste',
	[
		'the_vault:gem_larimar',
		'the_vault:carbon',
		'the_vault:chromatic_iron_ingot',
		'the_vault:magic_silk'
	]	
	);
	
	//Dielectric Rod Conversions
	event.shapeless('powah:dielectric_rod','powah:dielectric_rod_horizontal');
	event.shapeless('powah:dielectric_rod_horizontal','powah:dielectric_rod');
	
	// Dielectric Rod Horizontal 8
	event.shaped('8x powah:dielectric_rod_horizontal',
	[
		'DDD',
		'LCL',
		'DDD'
	],{
		D:'powah:dielectric_paste',
		L:'the_vault:gem_larimar',
		C:'the_vault:chromatic_iron_ingot'
	});
	
	// Dielectric Rod Horizontal 8
	event.shaped('8x powah:dielectric_rod',
	[
		'DLD',
		'DCD',
		'DLD'
	],{
		D:'powah:dielectric_paste',
		L:'the_vault:gem_larimar',
		C:'the_vault:chromatic_iron_ingot'
	});
	
	// Tiny Capacitor 8
	event.shaped('8x powah:capacitor_basic_tiny',
	[
		'MLM',
		'LCL',
		'MLM'
	],{
		M: 'the_vault:magic_silk',
		L: 'the_vault:gem_larimar',
		C: 'the_vault:chromatic_iron_ingot'
	});
	
	event.custom({ 
		"type": "powah:energizing",
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
	  }).id('powah:energizing/steel_energized')
});
