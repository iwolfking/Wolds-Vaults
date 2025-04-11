let removedOutputsMEKA = [
    'mekanism:atomic_disassembler',
    'mekanism:steel_casing',
    'mekanism:qio_drive_base',
    'mekanism:qio_drive_hyper_dense',
    'mekanism:qio_drive_time_dilating',
    'mekanism:qio_drive_supermassive',
    'mekanism:upgrade_speed',
    'mekanism:upgrade_energy',
    'mekanism:upgrade_gas',
    'mekanism:energy_tablet',
    'mekanism:basic_universal_cable',
    'mekanism:basic_mechanical_pipe',
    'mekanism:basic_thermodynamic_conductor',
    'mekanism:basic_fluid_tank',
    'mekanism:advanced_fluid_tank',
    'mekanism:elite_fluid_tank',
    'mekanism:ultimate_fluid_tank',
    'mekanism:basic_energy_cube',
    'mekanism:advanced_energy_cube',
    'mekanism:elite_energy_cube',
    'mekanism:ultimate_energy_cube',
    'mekanism:basic_tier_installer',
    'mekanism:advanced_tier_installer',
    'mekanism:elite_tier_installer',
    'mekanism:ultimate_tier_installer',
    'mekanism:digital_miner',
    'mekanismgenerators:gas_burning_generator',
    'mekanismgenerators:wind_generator',
    'mekanismgenerators:fusion_reactor_controller'
];

let mekmachines = [
    "enriching_factory",
    "compressing_factory",
    "combining_factory",
    "crushing_factory",
    "infusing_factory",
    "purifying_factory",
    "smelting_factory",
    "injecting_factory",
    "sawing_factory",
    "energy_cube"
];

let basemachines = [
    'enrichment_chamber',
    'osmium_compressor',
    'combiner',
    'crusher',
    'metallurgic_infuser',
    'purification_chamber',
    'energized_smelter',
    'chemical_injection_chamber',
    'precision_sawmill'
];

onEvent("recipes", event => {
    removedOutputsMEKA.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    mekmachines.forEach(machine => {
        event.remove({ 'output': `mekanism:basic_${machine}` })
        event.remove({ 'output': `mekanism:advanced_${machine}` })
        event.remove({ 'output': `mekanism:elite_${machine}` })
        event.remove({ 'output': `mekanism:ultimate_${machine}` })

        event.shaped(Item.of(`mekanism:advanced_${machine}`),
            [
                'RCR',
                'IMI',
                'RCR'
            ], {
            R: 'mekanism:alloy_infused',
            C: 'mekanism:advanced_control_circuit',
            I: 'the_vault:chromatic_steel_ingot',
            M: `mekanism:basic_${machine}`
        })

        event.shaped(Item.of(`mekanism:elite_${machine}`),
            [
                'RCR',
                'IMI',
                'RCR'
            ], {
            R: 'mekanism:alloy_reinforced',
            C: 'mekanism:elite_control_circuit',
            I: 'the_vault:chromatic_gold_ingot',
            M: `mekanism:advanced_${machine}`
        })

        event.shaped(Item.of(`mekanism:ultimate_${machine}`),
            [
                'RCR',
                'IMI',
                'RCR'
            ], {
            R: 'mekanism:alloy_atomic',
            C: 'mekanism:ultimate_control_circuit',
            I: 'the_vault:gem_pog',
            M: `mekanism:elite_${machine}`
        })

    })


    event.shaped(Item.of(`mekanism:basic_energy_cube`), [
        'RCR',
        'IMI',
        'RCR'
    ], {
        R: 'the_vault:chromatic_steel_ingot',
        C: 'mekanism:basic_control_circuit',
        I: 'mekanism:energy_tablet',
        M: `mekanism:steel_casing`
    });

    for (let i = 0; i < basemachines.length; i++) {
        let base = basemachines[i];
        let machine = mekmachines[i];

        event.shaped(Item.of(`mekanism:basic_${machine}`), [
            'RCR',
            'IMI',
            'RCR'
        ], {
            R: '#forge:dusts/redstone',
            C: 'mekanism:basic_control_circuit',
            I: 'the_vault:chromatic_iron_ingot',
            M: `mekanism:${base}`
        });
    }


    // Remove if needed, but considering its disabled in vaults, methinks its fine
    event.shaped(Item.of('mekanism:atomic_disassembler'),
        [
            'CWC',
            'EPE',
            'AOA'
        ], {
        C: 'mekanism:ultimate_control_circuit',
        W: 'the_vault:wold_star_chunk',
        E: 'mekanism:energy_tablet',
        P: 'minecraft:netherite_pickaxe',
        A: 'mekanism:alloy_atomic',
        O: 'mekanism:block_refined_obsidian'
    }).id('mekanism:atomic_disassembler')

    event.shaped(Item.of('mekanism:steel_casing'),
        [
            'SGS',
            'LOL',
            'SGS'
        ], {
        S: 'the_vault:chromatic_steel_ingot',
        G: '#forge:glass',
        L: 'the_vault:perfect_larimar',
        O: '#forge:ingots/osmium'
    })

    event.shaped(Item.of('mekanism:qio_drive_base'),
        [
            'SCS',
            'CPC',
            'SCS'
        ], {
        S: 'the_vault:chromatic_steel_ingot',
        C: 'mekanism:advanced_control_circuit',
        P: 'mekanism:pellet_polonium'
    })

    event.shaped(Item.of('mekanism:qio_drive_hyper_dense'),
        [
            'SCS',
            'DPD',
            'SDS'
        ], {
        S: 'the_vault:chromatic_gold_ingot',
        C: 'mekanism:elite_control_circuit',
        D: 'mekanism:qio_drive_base',
        P: 'the_vault:gem_pog'
    })

    event.shaped(Item.of('mekanism:qio_drive_time_dilating'),
        [
            'SCS',
            'DPD',
            'SDS'
        ], {
        S: 'the_vault:wutodic_silver_ingot',
        C: 'mekanism:ultimate_control_circuit',
        D: 'mekanism:qio_drive_hyper_dense',
        P: 'the_vault:echo_pog'
    })

    event.shaped(Item.of('mekanism:qio_drive_supermassive'),
        [
            'SCS',
            'DPD',
            'SDS'
        ], {
        S: 'the_vault:black_chromatic_steel_ingot',
        C: 'mekanism:pellet_antimatter',
        D: 'mekanism:qio_drive_time_dilating',
        P: 'the_vault:omega_pog'
    })

    event.shaped(Item.of('mekanism:upgrade_speed'),
        [
            ' G ',
            'AOA',
            ' G '
        ], {
        G: '#forge:glass',
        A: 'mekanism:alloy_infused',
        O: '#forge:ingots/osmium',
    })

    event.shaped(Item.of('mekanism:upgrade_speed', 2),
        [
            ' G ',
            'AOA',
            ' G '
        ], {
        G: '#forge:glass/tinted',
        A: 'mekanism:alloy_infused',
        O: '#forge:dusts/osmium',
    })

    event.shaped(Item.of('mekanism:upgrade_speed', 4),
        [
            ' G ',
            'AOA',
            ' G '
        ], {
        G: '#forge:glass/tinted',
        A: 'mekanism:alloy_reinforced',
        O: '#forge:dusts/osmium',
    })

    event.shaped(Item.of('mekanism:upgrade_speed', 8),
        [
            ' G ',
            'AOA',
            ' G '
        ], {
        G: '#forge:glass/tinted',
        A: 'mekanism:alloy_atomic',
        O: '#forge:dusts/osmium',
    })

    event.shaped(Item.of('mekanism:upgrade_energy'),
        [
            ' G ',
            'AOA',
            ' G '
        ], {
        G: '#forge:glass',
        A: 'mekanism:alloy_infused',
        O: '#forge:ingots/gold',
    })

    event.shaped(Item.of('mekanism:upgrade_energy', 2),
        [
            ' G ',
            'AOA',
            ' G '
        ], {
        G: '#forge:glass/tinted',
        A: 'mekanism:alloy_infused',
        O: '#forge:dusts/gold',
    })

    event.shaped(Item.of('mekanism:upgrade_energy', 4),
        [
            ' G ',
            'AOA',
            ' G '
        ], {
        G: '#forge:glass/tinted',
        A: 'mekanism:alloy_reinforced',
        O: '#forge:dusts/gold',
    })

    event.shaped(Item.of('mekanism:upgrade_energy', 8),
        [
            ' G ',
            'AOA',
            ' G '
        ], {
        G: '#forge:glass/tinted',
        A: 'mekanism:alloy_atomic',
        O: '#forge:dusts/gold',
    })

    event.shaped(Item.of('mekanism:upgrade_gas'),
        [
            ' G ',
            'AOA',
            ' G '
        ], {
        G: '#forge:glass',
        A: 'mekanism:alloy_infused',
        O: '#forge:ingots/iron',
    })

    event.shaped(Item.of('mekanism:upgrade_gas', 2),
        [
            ' G ',
            'AOA',
            ' G '
        ], {
        G: '#forge:glass/tinted',
        A: 'mekanism:alloy_infused',
        O: '#forge:dusts/iron',
    })

    event.shaped(Item.of('mekanism:upgrade_gas', 4),
        [
            ' G ',
            'AOA',
            ' G '
        ], {
        G: '#forge:glass/tinted',
        A: 'mekanism:alloy_reinforced',
        O: '#forge:dusts/iron',
    })

    event.shaped(Item.of('mekanism:upgrade_gas', 8),
        [
            ' G ',
            'AOA',
            ' G '
        ], {
        G: '#forge:glass/tinted',
        A: 'mekanism:alloy_atomic',
        O: '#forge:dusts/iron',
    })

    event.shaped(Item.of('mekanism:energy_tablet'),
        [
            'RGR',
            'ACA',
            'RGR'
        ], {
        R: '#forge:dusts/redstone',
        G: '#forge:ingots/gold',
        A: 'mekanism:alloy_infused',
        C: 'the_vault:chromatic_gold_ingot'
    })

    event.shaped(Item.of('mekanism:energy_tablet'),
        [
            'RGR',
            'ACA',
            'RGR'
        ], {
        R: '#forge:dusts/redstone',
        G: '#forge:ingots/gold',
        A: 'mekanism:alloy_infused',
        C: 'the_vault:chromatic_gold_ingot'
    })

    event.shaped(Item.of('mekanism:basic_universal_cable', 4),
        [
            '   ',
            'SOS',
            '   '
        ], {
        S: 'the_vault:chromatic_steel_ingot',
        O: '#forge:dusts/redstone'
    })

    event.shaped(Item.of('mekanism:basic_mechanical_pipe', 4),
        [
            '   ',
            'SOS',
            '   '
        ], {
        S: 'the_vault:chromatic_steel_ingot',
        O: 'minecraft:bucket'
    })

    event.shaped(Item.of('mekanism:basic_thermodynamic_conductor', 4),
        [
            '   ',
            'SOS',
            '   '
        ], {
        S: 'the_vault:chromatic_steel_ingot',
        O: '#forge:ingots/copper'
    })

    event.shaped(Item.of('mekanism:basic_fluid_tank'),
        [
            'RSR',
            'S S',
            'RSR'
        ], {
        R: '#forge:dusts/redstone',
        S: '#forge:ingots/steel'
    })

    event.shaped(Item.of('mekanism:advanced_fluid_tank'),
        [
            'RSR',
            'STS',
            'RSR'
        ], {
        R: 'mekanism:alloy_infused',
        S: 'the_vault:chromatic_steel_ingot',
        T: 'mekanism:basic_fluid_tank'
    })

    event.shaped(Item.of('mekanism:elite_fluid_tank'),
        [
            'RSR',
            'STS',
            'RSR'
        ], {
        R: 'mekanism:alloy_reinforced',
        S: 'the_vault:chromatic_gold_ingot',
        T: 'mekanism:advanced_fluid_tank'
    })

    event.shaped(Item.of('mekanism:ultimate_fluid_tank'),
        [
            'RSR',
            'STS',
            'RSR'
        ], {
        R: 'mekanism:alloy_atomic',
        S: 'the_vault:wutodic_silver_ingot',
        T: 'mekanism:elite_fluid_tank'
    })

    event.shaped(Item.of('mekanism:basic_tier_installer'),
        [
            'RCR',
            'IWI',
            'RCR'
        ], {
        R: '#forge:dusts/redstone',
        C: 'mekanism:basic_control_circuit',
        I: 'the_vault:chromatic_iron_ingot',
        W: 'the_vault:driftwood_planks'
    })

    event.shaped(Item.of('mekanism:advanced_tier_installer'),
        [
            'RCR',
            'IWI',
            'RCR'
        ], {
        R: 'mekanism:alloy_infused',
        C: 'mekanism:advanced_control_circuit',
        I: 'the_vault:chromatic_steel_ingot',
        W: 'the_vault:driftwood_planks'
    })

    event.shaped(Item.of('mekanism:elite_tier_installer'),
        [
            'RCR',
            'IWI',
            'RCR'
        ], {
        R: 'mekanism:alloy_reinforced',
        C: 'mekanism:elite_control_circuit',
        I: 'the_vault:chromatic_gold_ingot',
        W: 'the_vault:driftwood_planks'
    })

    event.shaped(Item.of('mekanism:ultimate_tier_installer'),
        [
            'RCR',
            'IWI',
            'RCR'
        ], {
        R: 'mekanism:alloy_atomic',
        C: 'mekanism:ultimate_control_circuit',
        I: 'the_vault:gem_pog',
        W: 'the_vault:driftwood_planks'
    })

    event.shaped(Item.of('mekanismgenerators:gas_burning_generator'),
        [
            'APA',
            'ECE',
            'APA'
        ], {
        A: 'mekanism:alloy_reinforced',
        P: 'the_vault:pog_prism',
        E: 'mekanism:electrolytic_core',
        C: 'mekanism:steel_casing'
    })

    event.shaped(Item.of('mekanismgenerators:wind_generator'),
        [
            ' S ',
            'SAS',
            'ECE'
        ], {
        S: 'the_vault:chromatic_steel_ingot',
        A: 'mekanism:alloy_infused',
        E: 'mekanism:energy_tablet',
        C: 'mekanism:basic_control_circuit'
    })

    event.shaped(Item.of('mekanismgenerators:fusion_reactor_controller'),
        [
            'CGC',
            'FEF',
            'FFF'
        ], {
        C: 'mekanism:ultimate_control_circuit',
        G: 'minecraft:glass_pane',
        F: 'mekanismgenerators:fusion_reactor_frame',
        E: 'woldsvaults:extraordinary_pog_prism'
    })

    event.shaped(Item.of('mekanism:digital_miner'),
        [
            'AEA',
            'IRI',
            'TCT'
        ], {
        A: 'mekanism:alloy_atomic',
        E: 'the_vault:echo_pog',
        I: 'mekanism:logistical_sorter',
        R: 'mekanism:robit',
        T: 'mekanism:teleportation_core',
        C: 'mekanism:steel_casing'
    })

    // This is literally just a joke recipe, you cant actually craft this, the internal buffer of a antiprotonic nucleosynthensizer is 10000mB, this recipe requires 10001mB
    event.custom({
        "type": "mekanism:nucleosynthesizing",
        "duration": 250,
        "gasInput": {
            "amount": 10001,
            "gas": "mekanism:antimatter"
        },
        "itemInput": {
            "ingredient": {
                "item": "minecraft:dirt"
            }
        },
        "output": {
            "item": "the_vault:wold_star",
            "nbt": "{RepairCost:0,display:{Name:'{\"text\":\":)\"}'}}"
        }
    })
})