onEvent("recipes", event => {

    event.remove({ 'id': 'peripherals:enchanting_interface' })

    event.shaped(Item.of('peripherals:trading_interface'),
        [
            'XIX',
            'IRI',
            'XIX'
        ], {
        R: 'woldsvaults:pog_prism',
        I: 'minecraft:emerald_block',
        X: 'the_vault:chromatic_steel_ingot'

    }).id('peripherals:trading_interface')

    event.shaped(Item.of('peripherals:xp_collector'),
        [
            'XHX',
            'IGI',
            'XRX'
        ], {
        R: 'woldsvaults:pog_prism',
        I: 'minecraft:lapis_block',
        X: 'the_vault:chromatic_steel_ingot',
        H: 'minecraft:hopper',
        G: 'minecraft:glass_bottle'

    }).id('peripherals:xp_collector')

    event.shaped(Item.of('peripherals:xp_bottler'),
        [
            'XHX',
            'IGI',
            'XRX'
        ], {
        R: 'woldsvaults:pog_prism',
        I: 'minecraft:lapis_block',
        X: 'the_vault:chromatic_steel_ingot',
        H: 'minecraft:redstone',
        G: 'minecraft:glass_bottle'

    }).id('peripherals:xp_bottler')

    event.shaped(Item.of('peripherals:loom_interface'),
        [
            'XLX',
            'IRI',
            'XIX'
        ], {
        R: 'the_vault:gem_pog',
        I: 'the_vault:magic_silk_block',
        X: 'the_vault:chromatic_steel_ingot',
        L: 'minecraft:loom'

    }).id('peripherals:loom_interface')

    event.shaped(Item.of('peripherals:grinder'),
        [
            'XLX',
            'IRI',
            'XBX'
        ], {
        R: 'woldsvaults:pog_prism',
        I: 'the_vault:perfect_black_opal',
        X: 'the_vault:chromatic_steel_ingot',
        L: 'minecraft:netherite_sword',
        B: 'the_vault:vault_diamond_block'

    }).id('peripherals:grinder')

    event.shaped(Item.of('peripherals:grindstone_interface'),
        [
            'XLX',
            'IRI',
            'XIX'
        ], {
        R: 'the_vault:gem_pog',
        I: 'minecraft:iron_bars',
        X: 'the_vault:chromatic_steel_ingot',
        L: 'minecraft:grindstone'

    }).id('peripherals:grindstone_interface')

    event.shaped(Item.of('peripherals:anvil_interface'),
        [
            'XLX',
            'IRI',
            'XIX'
        ], {
        R: 'the_vault:gem_pog',
        I: 'the_vault:chromatic_iron_block',
        X: 'the_vault:chromatic_steel_ingot',
        L: 'the_vault:vault_anvil'

    }).id('peripherals:anvil_interface')

    event.shaped(Item.of('peripherals:beehive_interface'),
        [
            'XLX',
            'IRI',
            'XIX'
        ], {
        R: 'the_vault:gem_pog',
        I: 'minecraft:honeycomb_block',
        X: 'the_vault:chromatic_steel_ingot',
        L: 'minecraft:honey_bottle'

    }).id('peripherals:beehive_interface')

    event.shaped(Item.of('peripherals:spawner_interface'),
        [
            'XLX',
            'IRI',
            'XIX'
        ], {
        R: 'woldsvaults:pog_prism',
        I: 'the_vault:black_chromatic_steel_ingot',
        X: 'the_vault:chromatic_steel_ingot',
        L: 'minecraft:nether_star'

    }).id('peripherals:spawner_interface')
})