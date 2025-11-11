let removedOutputsCCAE = [
    'createaddition:rolling_mill',
    'createaddition:connector',
    'createaddition:large_connector',
    'createaddition:redstone_relay',
    'createaddition:capacitor',
    'createaddition:spool',
    'bobberdetector:bobber_detector'
];

function makeTrackRecipe(event, output, base) {
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": { "item": base },
        "transitionalItem": { "item": "create:incomplete_track" },
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "create:incomplete_track" },
                    [
                        { "item": "the_vault:perfect_larimar" }
                    ]
                ],
                "results": [
                    { "item": "create:incomplete_track" }
                ]
            },
             {
                "type": "create:deploying",
                "ingredients": [
                    { "item": "create:incomplete_track" },
                    [
                        { "item": "the_vault:chromatic_iron_ingot" }
                    ]
                ],
                "results": [
                    { "item": "create:incomplete_track" }
                ]
            },
            {
                "type": "create:pressing",
                "ingredients": [
                    { "item": "create:incomplete_track" }
                ],
                "results": [
                    { "item": "create:incomplete_track" }
                ]
            }
        ],
        "results": [
            { "item": output,
              "count": 64,
              "chance": 87.0
            },
            { "item": "minecraft:andesite",
              "count": 1,
              "chance": 3.0
            },
            { "item": "create:andesite_alloy",
              "count": 1,
              "chance": 2.0
            },
            { "item": "create:shaft",
              "count": 1,
              "chance": 4.0
            },
            { "item": "create:cogwheel",
              "count": 1,
              "chance": 4.0
            }
        ],
        "loops": 2
    }).id(`railways:sequenced_assembly/${output.split(':')[1]}`)
}


onEvent("recipes", event => {
    removedOutputsCCAE.forEach(id => {
        event.remove({ 'output': `${id}` })
    })
    event.remove({ 'id': 'create:mechanical_crafting/wand_of_symmetry' })

    event.remove({ id: 'createaddition:mechanical_crafting/electric_motor' })
    event.remove({ id: 'createaddition:mechanical_crafting/alternator' })
    event.remove({ id: 'createaddition:mechanical_crafting/tesla_coil' })

    event.shaped(Item.of('createaddition:electric_motor'),
        [
            'BPB',
            'SCS',
            'XRX'
        ], {
        B: 'the_vault:black_chromatic_steel_ingot',
        S: 'create:brass_sheet',
        C: 'createaddition:copper_spool',
        R: 'createaddition:iron_rod',
        X: 'createaddition:capacitor',
        P: 'the_vault:gem_pog'
    })

    event.shaped(Item.of('createaddition:alternator'),
        [
            'BPB',
            'SCS',
            'XRX'
        ], {
        B: 'the_vault:black_chromatic_steel_ingot',
        S: 'create:iron_sheet',
        C: 'createaddition:copper_spool',
        R: 'createaddition:iron_rod',
        X: 'createaddition:capacitor',
        P: 'the_vault:extraordinary_larimar'
    })


    event.shaped(Item.of('createaddition:rolling_mill'),
        [
            'SPS',
            'APA',
            'ACA'
        ], {
        S: 'the_vault:chromatic_steel_ingot',
        P: 'create:shaft',
        A: 'create:andesite_alloy',
        C: 'create:andesite_casing'
    })

    event.shapeless('2x createaddition:connector', ['createaddition:copper_rod', 'create:andesite_alloy', 'minecraft:slime_ball', 'the_vault:vault_diamond'])
    event.shapeless('createaddition:large_connector', ['createaddition:gold_rod', 'create:andesite_alloy', 'minecraft:slime_ball', 'the_vault:vault_diamond'])
    event.shapeless('createaddition:large_connector', ['createaddition:electrum_rod', 'create:andesite_alloy', 'create:andesite_alloy', 'minecraft:slime_ball', 'the_vault:vault_essence'])


    event.shaped(Item.of('bobberdetector:bobber_detector'),
        [
            'APA',
            'RTR',
            'AMA'
        ], {
        A: 'create:andesite_alloy_block',
        R: 'the_vault:extraordinary_larimar',
        M: 'the_vault:vault_meat_block',
        P: 'minecraft:fishing_rod',
        T: 'create:content_observer'
    })

    event.shaped(Item.of('createaddition:redstone_relay'),
        [
            ' R ',
            'CTC',
            'SSS'
        ], {
        R: 'minecraft:repeater',
        C: 'createaddition:connector',
        T: 'create:electron_tube',
        S: 'the_vault:vault_stone'
    })

    event.shaped(Item.of('createaddition:capacitor'),
        [
            'Z',
            'C',
            'D'
        ], {
        Z: '#forge:plates/zinc',
        C: '#forge:plates/copper',
        D: 'the_vault:vault_diamond'
    })

    event.shaped(Item.of('createaddition:spool', 16),
        [
            'Z',
            'D',
            'Z'
        ], {
        Z: '#forge:plates/iron',
        D: 'the_vault:chromatic_iron_ingot'
    })

    event.shaped(Item.of('createaddition:tesla_coil', 1),
        [
            'STS',
            'CBC',
            'ZXZ'
        ], {
        T: 'create:electron_tube',
        S: 'create:brass_sheet',
        C: 'createaddition:capacitor',
        B: 'create:brass_casing',
        Z: 'the_vault:chromatic_steel_block',
        X: 'the_vault:extraordinary_larimar'
    })

    event.custom(
        {
            "type": "createaddition:charging",
            "input": {
                "item": "minecraft:snowball",
                "count": 1
            },
            "result": {
                "item": "powah:charged_snowball",
                "count": 1
            },
            "energy": 230000,
            "maxChargeRate": 20000
        }
    )

    event.custom(
        {
            "type": "createaddition:charging",
            "input": {
                "item": "minecraft:amethyst_shard",
                "count": 1
            },
            "result": {
                "item": "hexcasting:charged_amethyst",
                "count": 1
            },
            "energy": 10000,
            "maxChargeRate": 1000
        }
    )

    //event.shapeless('create:experience_nugget', ['4x minecraft:experience_bottle'])
    event.shapeless('4x minecraft:experience_bottle', ['create:experience_nugget'])

    event.custom({
        "type": "create:mechanical_crafting",
        "pattern": [
            " L ",
            " R ",
            "SSS",
            "SSS",
            " H "
        ],
        "key": {
            "L": {
                "item": "the_vault:echoing_ingot"
            },
            "R": {
                "item": "the_vault:omega_pog"
            },
            "H": {
                "item": "create:brass_hand"
            },
            "S": {
                "item": "the_vault:black_chromatic_steel_ingot"
            }
        },
        "result": {
            "item": "create:extendo_grip"
        },
        "acceptMirrored": false
    }).id('create:mechanical_crafting/extendo_grip')


    const trackMap = {
        "railways:track_acacia": "minecraft:acacia_slab",
        "railways:track_birch": "minecraft:birch_slab",
        "railways:track_blackstone": "minecraft:blackstone_slab",
        "railways:track_oak": "minecraft:oak_slab",
        "railways:track_spruce": "minecraft:spruce_slab",
        "railways:track_dark_oak": "minecraft:dark_oak_slab",
        "railways:track_crimson": "minecraft:crimson_slab",
        "railways:track_warped": "minecraft:warped_slab",
        "railways:track_ender": "minecraft:end_stone_brick_slab",
        "railways:track_hexcasting_edified": "hexcasting:akashic_slab",
        "railways:track_monorail": "create:metal_girder",
        "railways:track_tieless": "minecraft:glass_pane",
        "railways:track_jungle": "minecraft:jungle_slab",
        "railways:track_phantom": "minecraft:phantom_membrane",
    }


    for (const [output, base] of Object.entries(trackMap)) {
        makeTrackRecipe(event,output, base)
    }

})