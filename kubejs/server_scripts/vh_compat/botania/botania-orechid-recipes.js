onEvent('recipes', event => {
	
	// Removing current orechid recipes for minecraft:stone because Vazkii is insane.
	event.remove({type: "botania:orechid",input: "minecraft:stone"});
	event.remove({type: "botania:orechid",input: "minecraft:deepslate"});
	event.remove({output: 'botania:orechid' });
	
	// New Orechid recipe:
	event.recipes.botania.petal_apothecary({
		"type": "botania:petal_apothecary",
		"output": {"item": "botania:orechid"},
		"ingredients": [
			{"tag": "botania:petals/gray"},
			{"tag": "botania:petals/yellow"},
			{"tag": "botania:petals/green"},
			{"tag": "botania:petals/red"},
			{"item": "the_vault:echo_pog"},
			{"item": "botania:rune_pride"},
			{"item": "botania:rune_greed"},
			{"item": "botania:redstone_root"},
			{"item": "botania:pixie_dust"}
		]
	})	

	// Redoing all the recipes. Yeah I know chromatic iron doesn't have a stone texture, we will persist however.
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:stone","output": {"type": "block","block": "minecraft:coal_ore"},"weight": 300});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:stone","output": {"type": "block","block": "minecraft:iron_ore"},"weight": 125});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:stone","output": {"type": "block","block": "minecraft:copper_ore"},"weight": 50});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:stone","output": {"type": "block","block": "the_vault:chromatic_iron_ore"},"weight": 40});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:stone","output": {"type": "block","block": "minecraft:redstone_ore"},"weight": 30});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:stone","output": {"type": "block","block": "minecraft:lapis_ore"},"weight": 25});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:stone","output": {"type": "block","block": "minecraft:gold_ore"},"weight": 20});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:stone","output": {"type": "block","block": "minecraft:emerald_ore"},"weight": 20});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:stone","output": {"type": "block","block": "minecraft:diamond_ore"},"weight": 15});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:stone","output": {"type": "block","block": "ae2:quartz_ore"},"weight": 7});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:stone","output": {"type": "block","block": "create:zinc_ore"},"weight": 7});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:stone","output": {"type": "block","block": "immersiveengineering:ore_aluminum"},"weight": 7});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:stone","output": {"type": "block","block": "mekanism:osmium_ore"},"weight": 7});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:stone","output": {"type": "block","block": "mekanism:uranium_ore"},"weight": 7});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:stone","output": {"type": "block","block": "mekanism:fluorite_ore"},"weight": 7});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:stone","output": {"type": "block","block": "mekanism:lead_ore"},"weight": 7});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:stone","output": {"type": "block","block": "powah:uraninite_ore"},"weight": 7});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:stone","output": {"type": "block","block": "rftoolsbase:dimensionalshard_overworld"},"weight": 7});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:stone","output": {"type": "block","block": "thermal:cinnabar_ore"},"weight": 7});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:stone","output": {"type": "block","block": "thermal:niter_ore"},"weight": 7});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:stone","output": {"type": "block","block": "thermal:tin_ore"},"weight": 7});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:stone","output": {"type": "block","block": "thermal:lead_ore"},"weight": 7});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:stone","output": {"type": "block","block": "thermal:silver_ore"},"weight": 7});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:stone","output": {"type": "block","block": "thermal:nickel_ore"},"weight": 7});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:stone","output": {"type": "block","block": "thermal:apatite_ore"},"weight": 7});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:deepslate","output": {"type": "block","block": "minecraft:deepslate_iron_ore"},"weight": 250});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:deepslate","output": {"type": "block","block": "minecraft:deepslate_lapis_ore"},"weight": 175});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:deepslate","output": {"type": "block","block": "minecraft:deepslate_redstone_ore"},"weight": 150});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:deepslate","output": {"type": "block","block": "minecraft:deepslate_gold_ore"},"weight": 125});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:deepslate","output": {"type": "block","block": "minecraft:deepslate_diamond_ore"},"weight": 100});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:deepslate","output": {"type": "block","block": "minecraft:deepslate_coal_ore"},"weight": 75});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:deepslate","output": {"type": "block","block": "minecraft:deepslate_copper_ore"},"weight": 75});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:deepslate","output": {"type": "block","block": "minecraft:deepslate_emerald_ore"},"weight": 50});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:deepslate","output": {"type": "block","block": "ae2:deepslate_quartz_ore"},"weight": 15});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:deepslate","output": {"type": "block","block": "create:deepslate_zinc_ore"},"weight": 15});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:deepslate","output": {"type": "block","block": "immersiveengineering:deepslate_ore_aluminum"},"weight": 15});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:deepslate","output": {"type": "block","block": "mekanism:deepslate_osmium_ore"},"weight": 15});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:deepslate","output": {"type": "block","block": "mekanism:deepslate_uranium_ore"},"weight": 15});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:deepslate","output": {"type": "block","block": "mekanism:deepslate_fluorite_ore"},"weight": 15});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:deepslate","output": {"type": "block","block": "mekanism:deepslate_lead_ore"},"weight": 15});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:deepslate","output": {"type": "block","block": "powah:deepslate_uraninite_ore"},"weight": 15});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:deepslate","output": {"type": "block","block": "thermal:deepslate_cinnabar_ore"},"weight": 15});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:deepslate","output": {"type": "block","block": "thermal:deepslate_niter_ore"},"weight": 15});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:deepslate","output": {"type": "block","block": "thermal:deepslate_tin_ore"},"weight": 15});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:deepslate","output": {"type": "block","block": "thermal:deepslate_lead_ore"},"weight": 15});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:deepslate","output": {"type": "block","block": "thermal:deepslate_silver_ore"},"weight": 15});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:deepslate","output": {"type": "block","block": "thermal:deepslate_nickel_ore"},"weight": 15});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:deepslate","output": {"type": "block","block": "thermal:deepslate_apatite_ore"},"weight": 15});
	event.recipes.botania.orechid({"type": "botania:orechid","input": "minecraft:deepslate","output": {"type": "block","block": "the_vault:chromatic_iron_ore"},"weight": 225});
});
