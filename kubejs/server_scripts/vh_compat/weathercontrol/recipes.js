
onEvent("recipes", event => {
    event.shaped(Item.of('weather_control:rm_casing'),
        [
            'AXA',
            'XBX',
            'AXA'
        ], {
        A: 'minecraft:dark_prismarine',
        X: 'the_vault:black_chromatic_steel_ingot',
        B: 'the_vault:ancient_copper_conduit_block'
    }).id('weather_control:rm_recipe_casing')

    event.shaped(Item.of('weather_control:rm_sensor'),
        [
            'AXA',
            'XBX',
            'AXA'
        ], {
        A: 'minecraft:dark_prismarine',
        X: 'the_vault:black_chromatic_steel_ingot',
        B: 'woldsvaults:pog_prism'
    }).id('weather_control:rm_recipe_sensor')

    event.shaped(Item.of('weather_control:rm_core'),
        [
            'AXA',
            'XBX',
            'ASA'
        ], {
        A: 'minecraft:dark_prismarine',
        X: 'the_vault:black_chromatic_steel_ingot',
        B: 'minecraft:heart_of_the_sea',
        S: 'the_vault:echo_pog'
    }).id('weather_control:rm_recipe_core')


    event.shaped(Item.of('weather_control:rm_vent'),
        [
            'AXA',
            'UBU',
            'AXA'
        ], {
        A: 'minecraft:dark_prismarine',
        X: 'the_vault:black_chromatic_steel_ingot',
        B: 'minecraft:oxidized_copper',
        U: 'minecraft:iron_bars'
    }).id('weather_control:rm_recipe_vent')

    event.shaped(Item.of('weather_control:dw_casing'),
        [
            'AXA',
            'XBX',
            'AXA'
        ], {
        A: 'minecraft:purpur_block',
        X: 'the_vault:black_chromatic_steel_ingot',
        B: 'minecraft:amethyst_block'
    }).id('weather_control:dw_recipe_casing')

    event.shaped(Item.of('weather_control:dw_vent'),
        [
            'AXA',
            'UBU',
            'AXA'
        ], {
        A: 'minecraft:purpur_block',
        X: 'the_vault:black_chromatic_steel_ingot',
        B: 'minecraft:amethyst_block',
        U: 'minecraft:iron_bars'
    }).id('weather_control:dw_recipe_vent')

    event.shaped(Item.of('weather_control:dw_sensor'),
        [
            'AXA',
            'XBX',
            'AXA'
        ], {
        A: 'minecraft:purpur_block',
        X: 'the_vault:black_chromatic_steel_ingot',
        B: 'woldsvaults:extraordinary_pog_prism'
    }).id('weather_control:dw_recipe_sensor')

    event.shaped(Item.of('weather_control:dw_core'),
        [
            'AXA',
            'XBX',
            'ASA'
        ], {
        A: 'minecraft:purpur_block',
        X: 'the_vault:black_chromatic_steel_ingot',
        B: 'minecraft:dragon_breath',
        S: 'the_vault:echo_pog'
    }).id('weather_control:dw_recipe_core')

    event.shaped(Item.of('weather_control:mini_housing'),
        [
            'GGG',
            'XBX',
            'AAA'
        ], {
        G: 'minecraft:glass',
        A: 'the_vault:chromatic_steel_block',
        X: 'the_vault:black_chromatic_steel_block',
        B: 'woldsvaults:extraordinary_pog_prism'
    }).id('weather_control:recipe_mini_housing')


})