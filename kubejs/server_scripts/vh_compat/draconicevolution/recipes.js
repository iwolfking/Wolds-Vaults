let removedOutputsDE = [
    "draconicadditions:chaotic_auto_feed_module",
    "draconicevolution:draconium_core",
    "draconicevolution:wyvern_core",
    "draconicevolution:module_core",
    "draconicevolution:disenchanter",
    "draconicevolution:particle_generator",
    "draconicevolution:energy_core_stabilizer",
    "draconicevolution:grinder",
    "draconicevolution:wyvern_energy_core",
    "draconicevolution:small_chaos_frag",
    "draconicevolution:draconium_chest",
    "draconicevolution:celestial_manipulator",
    "draconicevolution:dislocation_inhibitor",
    "draconicevolution:crafting_core",
    "draconicevolution:basic_crafting_injector",
    "draconicevolution:reactor_prt_focus_ring",
    "draconicevolution:reactor_prt_stab_frame",

    /draconicadditions:.*_tick_accel/,
    /draconicadditions:.*_harness/,
    /draconicadditions:.*chaos_*/,
    /draconicadditions:.*_necklace/,
    /draconicevolution:.*_gate/,
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
    /draconicevolution:.(basic|wyvern)_relay_crystal/
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
            D: 'the_vault:extraordinary_echo_gem',
            W: 'draconicevolution:wyvern_energy_core',
            H: 'draconicevolution:draconium_block'
        })


    event.shaped(Item.of('draconicevolution:wyvern_relay_crystal'),
        [
            'HDH',
            'DWD',
            'HDH',
        ], {
            D: 'draconicevolution:basic_relay_crystal',
            W: 'draconicevolution:wyvern_core',
            H: 'draconicevolution:draconium_block'
        })


    event.shaped(Item.of('draconicevolution:wyvern_energy_core'),
        [
            'HDH',
            'DWD',
            'HDH',
        ], {
            D: 'draconicevolution:draconium_core',
            W: 'woldsvaults:prismatic_fiber_block',
            H: '#forge:ingots/draconium'
        })


    event.shaped(Item.of('draconicevolution:module_core'),
        [
            'IRI',
            'GWG',
            'IRI',
        ], {
            I: 'the_vault:chromatic_iron_block',
            W: '#forge:ingots/draconium',
            G: 'woldsvaults:chromatic_gold_ingot',
            R: 'minecraft:redstone_block'
        })

    event.shaped(Item.of('draconicevolution:disenchanter'),
        [
            'PCP',
            'VEV',
            'BBB',
        ], {
            P: 'the_vault:echo_pog',
            C: 'draconicevolution:draconium_core',
            V: 'minecraft:enchanted_book',
            E: 'minecraft:enchanting_table',
            B: 'woldsvaults:pog_block'
        })

    event.shaped(Item.of('draconicevolution:particle_generator'),
        [
            'IRI',
            'GWG',
            'IRI',
        ], {
            I: 'the_vault:chromatic_iron_block',
            W: 'draconicevolution:draconium_core',
            G: 'woldsvaults:chromatic_gold_ingot',
            R: 'botania:blaze_block'
        })

    event.shaped(Item.of('draconicevolution:energy_core_stabilizer'),
        [
            'I I',
            ' W ',
            'I I',
        ], {
            I: 'the_vault:extraordinary_larimar',
            W: 'draconicevolution:particle_generator'
        })
    event.shaped(Item.of('draconicevolution:small_chaos_frag'),
        [
            'I I',
            ' W ',
            'I I',
        ], {
            I: 'the_vault:extraordinary_larimar',
            W: 'the_vault:perfect_echo_gem'
        })


    event.shaped(Item.of('draconicevolution:crafting_core'),
        [
            'CCC',
            'CWC',
            'CCC',
        ], {
            C: 'compressium:chromatic_steel_block_2',
            W: 'draconicevolution:wyvern_core'
        })


    event.shaped(Item.of('draconicevolution:basic_crafting_injector'),
        [
            'CWC',
            'CGC',
            'BWB',
        ], {
            C: 'compressium:chromatic_steel_block_1',
            W: 'draconicevolution:wyvern_core',
            G: 'woldsvaults:chromatic_gold_block',
            B: 'the_vault:black_chromatic_steel_block'
        })

    event.shaped(Item.of('draconicevolution:reactor_prt_focus_ring'),
        [
            'CCC',
            'CWC',
            'CCC',
        ], {
            C: 'the_vault:black_chromatic_steel_ingot',
            W: 'draconicevolution:chaotic_energy_core'
        })

    event.shaped(Item.of('draconicevolution:reactor_prt_stab_frame'),
        [
            'CCC',
            'WDD',
            'CCC',
        ], {
            C: 'the_vault:black_chromatic_steel_ingot',
            W: 'draconicevolution:chaotic_energy_core',
            D: 'draconicevolution:awakened_draconium_ingot'
        })

    event.shaped(Item.of('draconicevolution:flux_gate'),
        [
            'CPC',
            'RWR',
            'CMC',
        ], {
            C: 'the_vault:chromatic_iron_ingot',
            P: 'draconicevolution:potentiometer',
            R: 'minecraft:redstone_block',
            W: 'draconicevolution:draconium_core',
            M: 'minecraft:comparator'
        })

    event.shaped(Item.of('draconicevolution:fluid_gate'),
        [
            'CPC',
            'RWR',
            'CMC',
        ], {
            C: 'the_vault:chromatic_iron_ingot',
            P: 'draconicevolution:potentiometer',
            R: 'minecraft:bucket',
            W: 'draconicevolution:draconium_core',
            M: 'minecraft:comparator'
        })

    event.shaped(Item.of('draconicevolution:dragon_heart'),
        [
            'CCC',
            'CWC',
            'CCC',
        ], {
            C: 'draconicevolution:chaos_shard',
            W: 'draconicevolution:wyvern_core'
        })

})
