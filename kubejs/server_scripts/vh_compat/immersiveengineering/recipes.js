
onEvent("recipes", event => {
    event.shaped(Item.of('immersiveengineering:cokebrick', 3),
        [
            'XLX',
            'TBT',
            'XLX'
        ], {
        X: 'minecraft:clay_ball',
        T: '#forge:ingots/brick',
        B: '#forge:sandstone',
        L: 'the_vault:carbon'

    }).id('immersiveengineering:crafting/cokebrick')

    event.shaped(Item.of('immersiveengineering:blastbrick', 3),
        [
            'XLX',
            'TBT',
            'XLX'
        ], {
        X: 'minecraft:nether_brick',
        T: '#forge:ingots/brick',
        B: 'minecraft:magma_block',
        L: 'the_vault:chromatic_steel_ingot'

    }).id('immersiveengineering:crafting/blastbrick')

    event.shaped(Item.of('immersiveengineering:craftingtable', 1),
        [
            'XXX',
            'TBT',
            'T T'
        ], {
        X: '#forge:treated_wood_slab',
        T: 'immersiveengineering:stick_treated',
        B: 'craftingstation:crafting_station'

    }).id('immersiveengineering:crafting/craftingtable')

    event.shaped(Item.of('immersiveengineering:workbench', 1),
        [
            '   ',
            'ISS',
            'T F'
        ], {
        T: 'immersiveengineering:craftingtable',
        I: 'the_vault:chromatic_iron_block',
        S: '#forge:treated_wood_slab',
        F: 'the_vault:perfect_larimar'

    }).id('immersiveengineering:crafting/workbench')

    event.shaped(Item.of('immersiveengineering:turntable', 1),
        [
            '   ',
            'SXS',
            'TCT'
        ], {
        S: 'the_vault:chromatic_iron_ingot',
        X: '#forge:treated_wood',
        T: 'minecraft:redstone',
        C: 'immersiveengineering:coil_lv'

    }).id('immersiveengineering:crafting/turntable')

    event.shaped(Item.of('immersiveengineering:crate', 1),
        [
            'WWW',
            'WLW',
            'WWW'
        ], {
        W: '#forge:treated_wood',
        L: 'the_vault:perfect_larimar'

    }).id('immersiveengineering:crafting/crate')

    event.shaped(Item.of('immersiveengineering:sorter', 1),
        [
            'WRW',
            'ILI',
            'WCW'
        ], {
        W: '#forge:treated_wood',
        L: 'immersiveengineering:component_iron',
        I: 'the_vault:chromatic_steel_ingot',
        C: 'immersiveengineering:conveyor_basic',
        R: 'minecraft:redstone'

    }).id('immersiveengineering:crafting/sorter')

    event.shaped(Item.of('immersiveengineering:item_batcher', 1),
        [
            'WRW',
            'ILI',
            'WCW'
        ], {
        W: '#forge:treated_wood',
        L: 'immersiveengineering:component_iron',
        I: 'the_vault:chromatic_steel_ingot',
        C: 'immersiveengineering:component_electronic',
        R: 'minecraft:redstone'

    }).id('immersiveengineering:crafting/item_batcher')

    event.shaped(Item.of('immersiveengineering:fluid_sorter', 1),
        [
            'WRW',
            'ILI',
            'WCW'
        ], {
        W: '#forge:treated_wood',
        L: 'immersiveengineering:component_iron',
        I: 'the_vault:chromatic_steel_ingot',
        C: 'immersiveengineering:fluid_pipe',
        R: 'minecraft:redstone'

    }).id('immersiveengineering:crafting/item_batcher')

    event.shaped(Item.of('immersiveengineering:windmill', 1),
        [
            'WWW',
            'WLW',
            'WWW'
        ], {
        W: 'immersiveengineering:windmill_blade',
        L: 'the_vault:perfect_larimar'

    }).id('immersiveengineering:crafting/windmill')

    event.shaped(Item.of('immersiveengineering:watermill', 1),
        [
            'IWI',
            'WLW',
            'IWI'
        ], {
        W: 'immersiveengineering:windmill_blade',
        L: '#forge:ingots/steel',
        I: 'the_vault:gem_larimar'

    }).id('immersiveengineering:crafting/watermill')

    event.shaped(Item.of('immersiveengineering:capacitor_lv', 1),
        [
            'WPW',
            'ILI',
            'WPW'
        ], {
        W: '#forge:treated_wood',
        L: 'immersiveengineering:redstone_acid_bucket',
        I: 'the_vault:chromatic_iron_ingot',
        P: '#forge:plates/lead'
    }).id('immersiveengineering:crafting/capacitor_lv')

    event.shaped(Item.of('immersiveengineering:capacitor_hv', 1),
        [
            'WpW',
            'ILI',
            'WPW'
        ], {
        W: '#forge:treated_wood',
        L: 'immersiveengineering:redstone_acid_bucket',
        I: 'the_vault:vault_diamond_block',
        P: 'immersiveengineering:ingot_hop_graphite',
        p: '#forge:plates/aluminum'
    }).id('immersiveengineering:crafting/capacitor_hv')

    event.shaped(Item.of('immersiveengineering:fluid_placer', 1),
        [
            'XTX',
            'TBT',
            'XTX'
        ], {
        X: '#forge:plates/iron',
        T: 'minecraft:iron_bars',
        B: 'the_vault:vault_diamond'

    }).id('immersiveengineering:crafting/fluid_placer')

    event.shaped(Item.of('immersiveengineering:component_iron', 1),
        [
            'XTX',
            'TBT',
            'XTX'
        ], {
        X: '#forge:plates/iron',
        B: 'minecraft:copper_ingot',
        T: 'the_vault:carbon'

    }).id('immersiveengineering:crafting/component_iron')

    event.shaped(Item.of('immersiveengineering:component_steel', 1),
        [
            'XTX',
            'TBT',
            'XTX'
        ], {
        X: '#forge:plates/steel',
        B: 'the_vault:vault_diamond',
        T: 'the_vault:chromatic_steel_ingot'

    }).id('immersiveengineering:crafting/component_steel')

    event.shaped(Item.of('immersiveengineering:light_engineering', 4),
        [
            'XTX',
            'TBT',
            'XTX'
        ], {
        X: 'immersiveengineering:sheetmetal_iron',
        T: 'immersiveengineering:component_iron',
        B: 'the_vault:chromatic_iron_block'

    }).id('immersiveengineering:crafting/light_engineering')

    event.shaped(Item.of('immersiveengineering:heavy_engineering', 4),
        [
            'XTX',
            'TBT',
            'XTX'
        ], {
        X: 'immersiveengineering:sheetmetal_steel',
        T: 'immersiveengineering:component_steel',
        B: 'woldsvaults:chromatic_gold_block'

    }).id('immersiveengineering:crafting/heavy_engineering')

    event.shaped(Item.of('immersiveengineering:rs_engineering', 4),
        [
            'XTX',
            'TBT',
            'XTX'
        ], {
        X: 'immersiveengineering:sheetmetal_iron',
        T: 'minecraft:redstone',
        B: 'the_vault:vault_diamond_block'

    }).id('immersiveengineering:crafting/rs_engineering')

    event.shapeless('immersiveengineering:blastbrick_reinforced', ['immersiveengineering:blastbrick', '#forge:plates/steel', 'the_vault:magic_silk'])

    event.shaped(Item.of('immersiveengineering:hemp_fabric', 1),
        [
            'XXX',
            'TBT',
            'XXX'
        ], {
        X: 'immersiveengineering:hemp_fiber',
        T: 'the_vault:magic_silk',
        B: 'the_vault:driftwood'

    }).id('immersiveengineering:crafting/hemp_fabric')

    event.shaped(Item.of('immersiveengineering:conveyor_basic', 8),
        [
            '   ',
            'TTT',
            'XBX'
        ], {
        T: 'immersiveengineering:ersatz_leather',
        X: 'the_vault:chromatic_iron_ingot',
        B: 'the_vault:vault_diamond'

    }).id('immersiveengineering:crafting/conveyor_basic')

    event.shaped(Item.of('immersiveengineering:alloybrick', 2),
        [
            'TXB',
            'XTB',
            '   '
        ], {
        T: '#forge:sandstone',
        X: '#forge:ingots/brick',
        B: 'the_vault:vault_diamond',

    }).id('immersiveengineering:crafting/alloybrick')

    // event.shaped(Item.of('immersiveengineering:alloybrick', 2),
    //     [
    //         '  H',
    //         'SR ',
    //         'IS '
    //     ], {
    //     T: '#forge:sandstone',
    //     X: '#forge:ingots/brick',
    //     B: 'the_vault:vault_diamond'

    // }).id('immersiveengineering:crafting/alloybrick')

    event.shaped(Item.of('immersiveengineering:cloche', 1),
        [
            'GBG',
            'GXG',
            'WCW'
        ], {
        W: '#forge:treated_wood',
        G: '#forge:glass',
        C: 'immersiveengineering:component_iron',
        B: 'immersiveengineering:light_bulb',
        X: 'the_vault:black_chromatic_steel_ingot'

    }).id('immersiveengineering:crafting/cloche')

    event.shaped(Item.of('immersiveengineering:coil_lv', 1),
        [
            'WWW',
            'WLW',
            'WWW'
        ], {
        W: 'immersiveengineering:wirecoil_copper',
        L: 'the_vault:vault_diamond_block'
    }).id('immersiveengineering:crafting/coil_lv')

    event.shaped(Item.of('immersiveengineering:coil_mv', 1),
        [
            'WWW',
            'WLW',
            'WWW'
        ], {
        W: 'immersiveengineering:wirecoil_electrum',
        L: 'woldsvaults:chromatic_gold_block'
    }).id('immersiveengineering:crafting/coil_mv')

    event.shaped(Item.of('immersiveengineering:coil_hv', 1),
        [
            'WWW',
            'WLW',
            'WWW'
        ], {
        W: 'immersiveengineering:wirecoil_steel',
        L: 'the_vault:black_chromatic_steel_ingot'
    }).id('immersiveengineering:crafting/coil_hv')

    event.shaped(Item.of('immersiveengineering:steel_scaffolding_standard', 6),
        [
            'III',
            ' R ',
            'RSR'
        ], {
        I: '#forge:ingots/steel',
        R: '#forge:rods/steel',
        S: 'the_vault:chromatic_steel_ingot'
    }).id('immersiveengineering:crafting/steel_scaffolding_standard')

    event.shaped(Item.of('immersivepetroleum:gas_generator', 1),
        [
            'PPP',
            'XGE',
            'PPP'
        ], {
        P: '#forge:plates/iron',
        G: 'immersiveengineering:generator',
        E: 'immersiveengineering:capacitor_lv',
        X: 'the_vault:gem_pog'
    }).id('immersivepetroleum:gas_generator')

    event.shaped(Item.of('immersiveengineering:connector_lv', 4),
        [
            ' X ',
            'BCB',
            'BCB'
        ], {
        C: '#forge:ingots/copper',
        B: '#immersiveengineering:connector_insulator',
        X: 'the_vault:chromatic_steel_ingot'
    }).id('immersiveengineering:crafting/connector_lv')

    event.shaped(Item.of('immersiveengineering:connector_mv', 4),
        [
            ' X ',
            'BCB',
            'BCB'
        ], {
        C: '#forge:ingots/electrum',
        B: '#immersiveengineering:connector_insulator',
        X: 'woldsvaults:chromatic_gold_ingot'
    }).id('immersiveengineering:crafting/connector_mv')

    event.shaped(Item.of('immersiveengineering:connector_hv', 4),
        [
            ' X ',
            'BCB',
            'BCB'
        ], {
        C: '#forge:ingots/aluminum',
        B: '#immersiveengineering:connector_insulator',
        X: 'the_vault:perfect_larimar'
    }).id('immersiveengineering:crafting/connector_hv')

    event.shaped(Item.of('controlengineering:bus_relay', 4),
        [
            ' X ',
            'PCP',
            'BBB'
        ], {
        C: 'minecraft:redstone',
        B: 'minecraft:terracotta',
        X: 'the_vault:vault_diamond',
        P: '#forge:plates/aluminum'
    }).id('controlengineering:bus_relay')

    event.shaped(Item.of('controlengineering:bus_interface', 1),
        [
            ' X ',
            'PCP',
            'BTB'
        ], {
        C: 'minecraft:redstone',
        B: 'minecraft:terracotta',
        X: 'the_vault:perfect_larimar',
        P: '#forge:plates/aluminum',
        T: 'controlengineering:bus_wire_coil'
    }).id('controlengineering:bus_interface')

    event.shaped(Item.of('controlengineering:empty_tape', 1),
        [
            'WWW',
            'WLW',
            'WWW'
        ], {
        W: 'the_vault:magic_silk',
        L: 'minecraft:pink_dye'

    }).id('controlengineering:empty_tape')

    event.shaped(Item.of('immersiveengineering:fluid_pipe', 8),
        [
            'WWW',
            ' X ',
            'WWW'
        ], {
        W: '#railways:internal/plates/iron_plates',
        X: 'the_vault:perfect_larimar'

    }).id('immersiveengineering:crafting/fluid_pipe')

    event.custom({
        "type": "immersiveengineering:crusher",
        "secondaries": [
            {
                "chance": 0.33333334,
                "output": {
                    "item": "the_vault:chromatic_iron_dust"
                }
            }
        ],
        "result": {
            "item": "the_vault:chromatic_iron_dust"
        },
        "input": {
            "item": "the_vault:raw_chromatic_iron"
        },
        "energy": 6000
    })

    event.custom({
        "type": "immersiveengineering:mineral_mix",
        "ores": [
            {
                "chance": 1.0,
                "output": {
                    "item": "the_vault:chromatic_iron_ore"
                }
            },
            {
                "chance": 0.3,
                "output": {
                    "item": "the_vault:vault_stone"
                }
            }
        ],
        "spoils": [
            {
                "chance": 0.2,
                "output": {
                    "item": "minecraft:deepslate"
                }
            },
            {
                "chance": 0.5,
                "output": {
                    "item": "the_vault:vault_cobblestone"
                }
            },
            {
                "chance": 0.3,
                "output": {
                    "item": "minecraft:cobbled_deepslate"
                }
            }
        ],
        "dimensions": [
            "minecraft:overworld"
        ],
        "weight": 10,
        "fail_chance": 0.10
    }).id('woldsvaults:chromatic_iron_mineral_vein')

    event.custom({
        "type": "immersiveengineering:mineral_mix",
        "ores": [
            {
                "chance": 1.0,
                "output": {
                    "item": "ae2:quartz_ore"
                }
            }
        ],
        "spoils": [
            {
                "chance": 0.2,
                "output": {
                    "item": "ae2:sky_stone_block"
                }
            },
            {
                "chance": 0.5,
                "output": {
                    "item": "minecraft:cobblestone"
                }
            },
            {
                "chance": 0.3,
                "output": {
                    "item": "minecraft:stone"
                }
            }
        ],
        "dimensions": [
            "minecraft:overworld"
        ],
        "weight": 15,
        "fail_chance": 0.2
    }).id('woldsvaults:certus_quartz_mineral_vein')

})