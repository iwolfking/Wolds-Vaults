let removedOutputsBBB = [
    'sophisticatedbackpacks:crafting_upgrade',
    'sophisticatedbackpacks:compacting_upgrade',
    'sophisticatedbackpacks:advanced_compacting_upgrade',
    'sophisticatedbackpacks:smelting_upgrade',
    'sophisticatedbackpacks:auto_smelting_upgrade',
    'sophisticatedbackpacks:smoking_upgrade',
    'sophisticatedbackpacks:auto_smoking_upgrade',
    'sophisticatedbackpacks:blasting_upgrade',
    'sophisticatedbackpacks:auto_blasting_upgrade',
    'sophisticatedbackpacks:copper_backpack',
    'sophisticatedbackpacks:stack_upgrade_starter_tier'
];
onEvent("recipes", event => {
    removedOutputsBBB.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.remove({ id: 'sophisticatedbackpacks:void_upgrade' })
    event.remove({ id: 'sophisticatedbackpacks:advanced_void_upgrade' })

    event.shaped(Item.of('sophisticatedbackpacks:crafting_upgrade'),
        [
            'ITI',
            'XCX',
            'IGI'
        ], {
        C: 'sophisticatedbackpacks:upgrade_base',
        I: 'the_vault:chromatic_steel_ingot',
        T: 'craftingstation:crafting_station',
        G: 'the_vault:vault_diamond',
        X: 'the_vault:vault_essence'
    })

    event.shaped(Item.of('sophisticatedbackpacks:everlasting_upgrade'),
        [
            'XOX',
            'OCO',
            'XOX'
        ], {
        C: 'sophisticatedbackpacks:upgrade_base',
        O: 'minecraft:nether_star',
        X: 'the_vault:pog_prism'
    }).id('sophisticatedbackpacks:everlasting_upgrade')

    event.shaped(Item.of('sophisticatedbackpacks:xp_pump_upgrade'),
        [
            'XAX',
            'BCB',
            'XAX'
        ], {
        C: 'sophisticatedbackpacks:pump_upgrade',
        A: 'the_vault:gem_pog',
        B: 'minecraft:experience_bottle',
        X: 'the_vault:vault_diamond'
    }).id('sophisticatedbackpacks:xp_pump_upgrade')

    event.shaped(Item.of('sophisticatedbackpacks:tank_upgrade'),
        [
            'XOX',
            'OCO',
            'XOX'
        ], {
        C: 'sophisticatedbackpacks:upgrade_base',
        O: '#forge:glass',
        X: 'the_vault:chromatic_gold_ingot'
    }).id('sophisticatedbackpacks:tank_upgrade')

    event.shaped(Item.of('sophisticatedbackpacks:pump_upgrade'),
        [
            'XBX',
            'ACD',
            'XBX'
        ], {
        C: 'sophisticatedbackpacks:upgrade_base',
        X: '#forge:glass',
        B: 'minecraft:bucket',
        A: 'the_vault:chromatic_steel_block',
        D: 'the_vault:vault_diamond_block'
    }).id('sophisticatedbackpacks:pump_upgrade')

    event.shaped(Item.of('sophisticatedbackpacks:advanced_pump_upgrade'),
        [
            'ADA',
            'GCG',
            'RRR'
        ], {
        C: 'sophisticatedbackpacks:pump_upgrade',
        A: 'the_vault:vault_diamond',
        G: 'the_vault:chromatic_gold_ingot',
        R: 'the_vault:vault_essence',
        D: 'minecraft:dispenser'
    }).id('sophisticatedbackpacks:advanced_pump_upgrade')

    event.shaped(Item.of('sophisticatedbackpacks:battery_upgrade'),
        [
            'XOX',
            'OCO',
            'XOX'
        ], {
        C: 'sophisticatedbackpacks:upgrade_base',
        O: 'the_vault:vault_essence_1',
        X: 'the_vault:chromatic_gold_block'
    }).id('sophisticatedbackpacks:battery_upgrade')

    event.shaped(Item.of('sophisticatedbackpacks:tool_swapper_upgrade'),
        [
            'YAY',
            'BCE',
            'XDX'
        ], {
        C: 'sophisticatedbackpacks:upgrade_base',
        A: 'minecraft:netherite_sword',
        B: 'minecraft:netherite_pickaxe',
        E: 'minecraft:netherite_axe',
        D: 'minecraft:netherite_shovel',
        X: 'the_vault:chromatic_steel_block',
        Y: 'the_vault:gem_pog'
    }).id('sophisticatedbackpacks:tool_swapper_upgrade')

    event.shaped(Item.of('sophisticatedbackpacks:advanced_tool_swapper_upgrade'),
        [
            ' T ',
            'XCX',
            'III'
        ], {
        C: 'sophisticatedbackpacks:tool_swapper_upgrade',
        I: 'the_vault:vault_diamond_block',
        T: 'the_vault:gem_pog',
        X: 'the_vault:chromatic_gold_block'
    }).id('sophisticatedbackpacks:advanced_tool_swapper_upgrade')

    event.shaped(Item.of('sophisticatedbackpacks:compacting_upgrade'),
        [
            'ITI',
            'XCX',
            'IGI'
        ], {
        C: 'sophisticatedbackpacks:upgrade_base',
        I: 'the_vault:vault_diamond_block',
        T: 'minecraft:piston',
        G: 'the_vault:pog_prism',
        X: 'the_vault:vault_essence_2'
    })

    event.shaped(Item.of('sophisticatedbackpacks:advanced_compacting_upgrade'),
        [
            'ITI',
            'XCX',
            'IGI'
        ], {
        C: 'sophisticatedbackpacks:compacting_upgrade',
        I: 'minecraft:piston',
        T: 'the_vault:omega_pog',
        G: 'the_vault:black_chromatic_steel_block',
        X: 'the_vault:vault_essence_2'
    })

    event.shaped(Item.of('sophisticatedbackpacks:smelting_upgrade'),
        [
            'ITI',
            'XCX',
            'IGI'
        ], {
        C: 'sophisticatedbackpacks:upgrade_base',
        I: 'the_vault:chromatic_iron_ingot',
        T: 'minecraft:furnace',
        G: 'the_vault:vault_diamond',
        X: 'the_vault:vault_essence'
    })

    event.shaped(Item.of('sophisticatedbackpacks:auto_smelting_upgrade'),
        [
            'ITI',
            'XCX',
            'IGI'
        ], {
        C: 'sophisticatedbackpacks:smelting_upgrade',
        I: 'the_vault:vault_essence_1',
        T: 'minecraft:hopper',
        G: 'the_vault:pog_prism',
        X: 'the_vault:chromatic_steel_block'
    })

    event.shaped(Item.of('sophisticatedbackpacks:smoking_upgrade'),
        [
            'ITI',
            'XCX',
            'IGI'
        ], {
        C: 'sophisticatedbackpacks:upgrade_base',
        I: 'the_vault:chromatic_iron_ingot',
        T: 'minecraft:smoker',
        G: 'the_vault:vault_diamond',
        X: 'the_vault:vault_essence'
    })

    event.shaped(Item.of('sophisticatedbackpacks:auto_smoking_upgrade'),
        [
            'ITI',
            'XCX',
            'IGI'
        ], {
        C: 'sophisticatedbackpacks:smoking_upgrade',
        I: 'the_vault:vault_essence_1',
        T: 'minecraft:hopper',
        G: 'the_vault:pog_prism',
        X: 'the_vault:chromatic_steel_block'
    })

    event.shaped(Item.of('sophisticatedbackpacks:blasting_upgrade'),
        [
            'ITI',
            'XCX',
            'IGI'
        ], {
        C: 'sophisticatedbackpacks:upgrade_base',
        I: 'the_vault:chromatic_iron_ingot',
        T: 'minecraft:blast_furnace',
        G: 'the_vault:vault_diamond',
        X: 'the_vault:vault_essence'
    })

    event.shaped(Item.of('sophisticatedbackpacks:auto_blasting_upgrade'),
        [
            'ITI',
            'XCX',
            'IGI'
        ], {
        C: 'sophisticatedbackpacks:blasting_upgrade',
        I: 'the_vault:vault_essence_1',
        T: 'minecraft:hopper',
        G: 'the_vault:pog_prism',
        X: 'the_vault:chromatic_steel_block'
    })

    event.shaped(Item.of('sophisticatedbackpacks:inception_upgrade'),
        [
            'IXI',
            'ICI',
            'IGI'
        ], {
        C: 'sophisticatedbackpacks:stack_upgrade_tier_4',
        I: 'the_vault:echo_pog_1',
        G: 'the_vault:wold_star',
        X: 'the_vault:omega_pog_1'
    }).id('sophisticatedbackpacks:inception_upgrade')

    event.shaped(Item.of('sophisticatedbackpacks:void_upgrade'),
        [
            'SXS',
            'BCB',
            'ABA'
        ], {
        C: 'sophisticatedbackpacks:upgrade_base',
        S: 'the_vault:chromatic_steel_ingot',
        B: 'the_vault:vault_diamond',
        A: 'the_vault:chromatic_steel_block',
        X: 'the_vault:void_liquid_bucket'
    }).id('sophisticatedbackpacks:void_upgrade_alt')

    event.shaped(Item.of('sophisticatedbackpacks:advanced_void_upgrade'),
        [
            'SXS',
            'BCB',
            'ALA'
        ], {
        C: 'sophisticatedbackpacks:void_upgrade',
        S: 'the_vault:black_chromatic_steel_ingot',
        B: 'the_vault:vault_diamond',
        A: 'minecraft:redstone_block',
        X: 'the_vault:void_liquid_bucket',
        L: 'the_vault:carbon'
    }).id('sophisticatedbackpacks:advanced_void_upgrade_alt')

})