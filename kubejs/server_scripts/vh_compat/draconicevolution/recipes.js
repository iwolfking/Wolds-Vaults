let removedOutputsDE = [
    "draconicevolution:draconium_core",
    "draconicevolution:wyvern_core",
    "draconicevolution:module_core",
    /draconicadditions:.*_harness/,
    /draconicadditions:.chaos_*/,
    /draconicadditions:.*_necklace/,
    /draconicevolution:.*dislocator/,
    /draconicevolution:.*_sword/,
    /draconicevolution:.*_staff/,
    /draconicevolution:.*magnet/,
    /draconicevolution:.*_pickaxe/,
    /draconicadditions:.*_necklace/,
    /draconicevolution:.*_chestpiece/,
    /draconicevolution:.*_jump_module/,
    /draconicevolution:.*_step_module/,
    /draconicevolution:.*_feed_module/,
    /draconicevolution:.*_undying_module/,
    /draconicevolution:.*_flight_module/,
    /draconicevolution:.*_recovery_module/,
    /draconicevolution:.*_capacity_module/,
    /draconicevolution:.*_control_module/,
    /draconicevolution:.*_immune_module/,
    /draconicevolution:.*_comp_module/,
    /draconicevolution:.*_damage_module/,
    /draconicevolution:.*_collection_module/,
    /draconicevolution:.*_filter_module/,
    /draconicevolution:.*_aoe_module/,
    /draconicevolution:.*_speed_module/,
    /draconicevolution:.*relay_crystal/
];
onEvent("recipes", event => {
    removedOutputsDE.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('draconicevolution:draconium_core'),
        [
            'STS',
            'TRT',
            'STS',
        ], {
            S: '#forge:ingots/draconium',
            T: 'the_vault:black_chromatic_steel_ingot',
            R: 'woldsvaults:pog_prism',
        })
    event.shaped(Item.of('draconicevolution:wyvern_core'),
        [
            'STS',
            'TRT',
            'STS',
        ], {
            S: 'the_vault:echoing_ingot',
            T: 'draconicevolution:draconium_core',
            R: 'woldsvaults:extraordinary_pog_prism',
        })
    event.shaped(Item.of('draconicevolution:generator'),
        [
            'STS',
            'TFT',
            'SRS',
        ], {
            S: 'the_vault:black_chromatic_steel_ingot',
            T: 'the_vault:chromatic_steel_ingot',
            R: 'draconicevolution:draconium_core',
            F: 'woldsvaults:chromatic_iron_vault_infuser'
        })
    event.shaped(Item.of('draconicevolution:grinder'),
        [
            'SDS',
            'TWT',
            'SHS',
        ], {
            S: 'the_vault:black_chromatic_steel_ingot',
            D: '#forge:ingots/draconium',
            T: 'minecraft:netherite_sword',
            W: 'draconicevolution:wyvern_energy_core',
            H: '#forge:heads'
        })
    event.shaped(Item.of('draconicevolution:basic_relay_crystal'),
        [
            ' D ',
            'DWD',
            'HHH',
        ], {
            D: 'the_vault:extraordinary_echo_gem'
            W: 'draconicevolution:wyvern_energy_core'
            H: 'draconicevolution:draconium_block'
        })
    event.shaped(Item.of('draconicevolution:wyvern_relay_crystal'),
        [
            'HDH',
            'DWD',
            'HDH',
        ], {
            D: 'draconicevolution:basic_relay_crystal'
            W: 'draconicevolution:wyvern_core'
            H: 'draconicevolution:draconium_block'
        })
    event.shaped(Item.of('draconicevolution:wyvern_energy_core'),
        [
            'HDH',
            'DWD',
            'HDH',
        ], {
            D: 'draconicevolution:draconium_core'
            W: 'woldsvaults:prismatic_fiber_block'
            H: '#forge:ingots/draconium'
        })
    event.shaped(Item.of('draconicevolution:module_core'),
        [
            'IRI',
            'GWG',
            'IRI',
        ], {
            I: 'the_vault:chromatic_iron_block'
            W: '#forge:ingots/draconium'
            G: 'woldsvaults:chromatic_gold_ingot'
            R: 'minecraft:redstone_block'
        })


})
