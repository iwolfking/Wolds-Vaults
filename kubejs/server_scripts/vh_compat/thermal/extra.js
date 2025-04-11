let removedOutputsTEE = [
    'thermal_extra:soul_infused_dust',
    'thermal_extra:shellite_dust',
    'thermal_extra:twinite_dust',
    'thermal_extra:dragonsteel_dust',
    'thermal_extra:upgrade_augment',
    'thermal_extra:area_radius_augment_1',
    'thermal_extra:area_radius_augment_2',
    'thermal_extra:area_radius_augment_3',
    'thermal_extra:area_radius_augment_4',
    'thermal_extra:rf_coil_augment_1',
    'thermal_extra:rf_coil_augment_2',
    'thermal_extra:rf_coil_augment_3',
    'thermal_extra:rf_coil_augment_4',
    'thermal_extra:rf_coil_augment_5',
    'thermal_extra:rf_coil_storage_augment_1',
    'thermal_extra:rf_coil_storage_augment_2',
    'thermal_extra:rf_coil_storage_augment_3',
    'thermal_extra:rf_coil_storage_augment_4',
    'thermal_extra:rf_coil_storage_augment_5',
    'thermal_extra:rf_coil_xfer_augment_1',
    'thermal_extra:rf_coil_xfer_augment_2',
    'thermal_extra:rf_coil_xfer_augment_3',
    'thermal_extra:rf_coil_xfer_augment_4',
    'thermal_extra:rf_coil_xfer_augment_5',
    'thermal_extra:fluid_tank_augment_1',
    'thermal_extra:fluid_tank_augment_2',
    'thermal_extra:fluid_tank_augment_3',
    'thermal_extra:fluid_tank_augment_4',
    'thermal_extra:fluid_tank_augment_5',
    'thermal_extra:machine_speed_augment_1',
    'thermal_extra:machine_speed_augment_2',
    'thermal_extra:machine_speed_augment_3',
    'thermal_extra:machine_speed_augment_4'
];
onEvent("recipes", event => {
    removedOutputsTEE.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.remove({ id: 'thermal_extra:machine/smelter/soul_infused_ingot' })
    event.remove({ id: 'thermal_extra:machine/smelter/twinite_ingot' })
    event.remove({ id: 'thermal_extra:machine/smelter/shellite_ingot' })
    event.remove({ id: 'thermal_extra:machine/smelter/dragonsteel_ingot' })

    const extraMetals = ['soul_infused', 'shellite', 'twinite', 'dragonsteel']

    event.shapeless('4x thermal_extra:soul_infused_dust', ['3x thermal_extra:soul_sand_dust', '#forge:dusts/apatite', '2x thermal:invar_dust', '2x the_vault:eternal_soul'])
    event.shapeless('4x thermal_extra:shellite_dust', ['3x minecraft:shulker_shell', '#forge:dusts/apatite', 'thermal_extra:soul_infused_dust', 'the_vault:extraordinary_wutodie'])
    event.shapeless('4x thermal_extra:twinite_dust', ['3x #forge:dusts/amethyst', '#forge:dusts/apatite', '2x thermal_extra:shellite_dust', '2x the_vault:extraordinary_alexandrite'])
    event.shapeless('4x thermal_extra:dragonsteel_dust', ['3x minecraft:dragon_breath', 'thermal_extra:twinite_dust', '#forge:dusts/netherite', 'the_vault:perfect_echo_gem', 'the_vault:perfect_black_opal'])

    event.shaped(Item.of('thermal_extra:upgrade_augment'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:black_chromatic_steel_ingot',
        D: 'thermal_extra:dragonsteel_gear',
        C: 'thermal:upgrade_augment_3'
    })

    extraMetals.forEach(metal => {
        event.remove({ 'output': `thermal_extra:${metal}_gear` })
        event.shaped(Item.of(`thermal_extra:${metal}_gear`),
            [
                'PDP',
                'DCD',
                'PDP'
            ], {
            P: 'the_vault:perfect_larimar',
            D: `thermal_extra:${metal}_ingot`,
            C: 'minecraft:iron_nugget'
        })

        event.custom({
            "type": "thermal:press",
            "ingredients": [
                {
                    "item": `thermal_extra:${metal}_ingot`,
                    "count": 4
                },
                {
                    "item": "the_vault:extraordinary_larimar"
                }
            ],
            "result": [
                {
                    "item": `thermal_extra:${metal}_gear`
                }
            ]
        })
    })

    event.shaped(Item.of('thermal_extra:area_radius_augment_1'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:chromatic_gold_ingot',
        D: 'thermal_extra:soul_infused_gear',
        C: 'thermal:area_radius_augment'
    })

    event.shaped(Item.of('thermal_extra:area_radius_augment_2'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:extraordinary_larimar',
        D: 'thermal:enderium_gear',
        C: 'thermal_extra:area_radius_augment_1'
    })

    event.shaped(Item.of('thermal_extra:area_radius_augment_3'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:chromatic_steel_ingot',
        D: 'thermal_extra:shellite_gear',
        C: 'thermal_extra:area_radius_augment_2'
    })

    event.shaped(Item.of('thermal_extra:area_radius_augment_4'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:extraordinary_wutodie',
        D: 'thermal_extra:twinite_gear',
        C: 'thermal_extra:area_radius_augment_3'
    })

    event.shaped(Item.of('thermal_extra:rf_coil_augment_1'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:chromatic_gold_ingot',
        D: 'thermal_extra:soul_infused_gear',
        C: 'thermal:rf_coil_augment'
    })

    event.shaped(Item.of('thermal_extra:rf_coil_augment_2'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:extraordinary_larimar',
        D: 'thermal:enderium_gear',
        C: 'thermal_extra:rf_coil_augment_1'
    })

    event.shaped(Item.of('thermal_extra:rf_coil_augment_3'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:chromatic_steel_block',
        D: 'thermal_extra:shellite_gear',
        C: 'thermal_extra:rf_coil_augment_2'
    })

    event.shaped(Item.of('thermal_extra:rf_coil_augment_4'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:black_chromatic_steel_ingot',
        D: 'thermal_extra:twinite_gear',
        C: 'thermal_extra:rf_coil_augment_3'
    })

    event.shaped(Item.of('thermal_extra:rf_coil_augment_5'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:pog_prism',
        D: 'thermal_extra:dragonsteel_gear',
        C: 'thermal_extra:rf_coil_augment_4'
    })

    event.shaped(Item.of('thermal_extra:rf_coil_storage_augment_1'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:chromatic_gold_ingot',
        D: 'thermal_extra:soul_infused_gear',
        C: 'thermal:rf_coil_storage_augment'
    })

    event.shaped(Item.of('thermal_extra:rf_coil_storage_augment_2'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:extraordinary_larimar',
        D: 'thermal:enderium_gear',
        C: 'thermal_extra:rf_coil_storage_augment_1'
    })

    event.shaped(Item.of('thermal_extra:rf_coil_storage_augment_3'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:chromatic_steel_block',
        D: 'thermal_extra:shellite_gear',
        C: 'thermal_extra:rf_coil_storage_augment_2'
    })

    event.shaped(Item.of('thermal_extra:rf_coil_storage_augment_4'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:black_chromatic_steel_ingot',
        D: 'thermal_extra:twinite_gear',
        C: 'thermal_extra:rf_coil_storage_augment_3'
    })

    event.shaped(Item.of('thermal_extra:rf_coil_storage_augment_5'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:pog_prism',
        D: 'thermal_extra:dragonsteel_gear',
        C: 'thermal_extra:rf_coil_storage_augment_4'
    })

    event.shaped(Item.of('thermal_extra:rf_coil_xfer_augment_1'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:chromatic_gold_ingot',
        D: 'thermal_extra:soul_infused_gear',
        C: 'thermal:rf_coil_xfer_augment'
    })

    event.shaped(Item.of('thermal_extra:rf_coil_xfer_augment_2'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:extraordinary_larimar',
        D: 'thermal:enderium_gear',
        C: 'thermal_extra:rf_coil_xfer_augment_1'
    })

    event.shaped(Item.of('thermal_extra:rf_coil_xfer_augment_3'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:chromatic_steel_block',
        D: 'thermal_extra:shellite_gear',
        C: 'thermal_extra:rf_coil_xfer_augment_2'
    })

    event.shaped(Item.of('thermal_extra:rf_coil_xfer_augment_4'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:black_chromatic_steel_ingot',
        D: 'thermal_extra:twinite_gear',
        C: 'thermal_extra:rf_coil_xfer_augment_3'
    })

    event.shaped(Item.of('thermal_extra:rf_coil_xfer_augment_5'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:pog_prism',
        D: 'thermal_extra:dragonsteel_gear',
        C: 'thermal_extra:rf_coil_xfer_augment_4'
    })

    event.shaped(Item.of('thermal_extra:fluid_tank_augment_1'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:chromatic_gold_ingot',
        D: 'thermal_extra:soul_infused_gear',
        C: 'thermal:fluid_tank_augment'
    })

    event.shaped(Item.of('thermal_extra:fluid_tank_augment_2'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:extraordinary_larimar',
        D: 'thermal:enderium_gear',
        C: 'thermal_extra:fluid_tank_augment_1'
    })

    event.shaped(Item.of('thermal_extra:fluid_tank_augment_3'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:chromatic_steel_block',
        D: 'thermal_extra:shellite_gear',
        C: 'thermal_extra:fluid_tank_augment_2'
    })

    event.shaped(Item.of('thermal_extra:fluid_tank_augment_4'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:black_chromatic_steel_ingot',
        D: 'thermal_extra:twinite_gear',
        C: 'thermal_extra:fluid_tank_augment_3'
    })

    event.shaped(Item.of('thermal_extra:fluid_tank_augment_5'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:pog_prism',
        D: 'thermal_extra:dragonsteel_gear',
        C: 'thermal_extra:fluid_tank_augment_4'
    })

    event.shaped(Item.of('thermal_extra:machine_speed_augment_1'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:vault_essence_2',
        D: 'thermal_extra:soul_infused_gear',
        C: 'thermal:machine_speed_augment'
    })

    event.shaped(Item.of('thermal_extra:machine_speed_augment_2'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:vault_diamond_block',
        D: 'thermal:enderium_gear',
        C: 'thermal_extra:machine_speed_augment_1'
    })

    event.shaped(Item.of('thermal_extra:machine_speed_augment_3'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:chromatic_steel_block',
        D: 'thermal_extra:shellite_gear',
        C: 'thermal_extra:machine_speed_augment_2'
    })

    event.shaped(Item.of('thermal_extra:machine_speed_augment_4'),
        [
            'PDP',
            'DCD',
            'PDP'
        ], {
        P: 'the_vault:pog_prism',
        D: 'thermal_extra:twinite_gear',
        C: 'thermal_extra:machine_speed_augment_3'
    })




})

