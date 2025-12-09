let removedOutputsQP = [
    'quarryplus:quarry',
    'quarryplus:solid_fuel_quarry',
    'quarryplus:workbench',
    'quarryplus:mover',
    'quarryplus_mining_well',
    'quarryplus:pump_plus',
    'quarryplus:adv_quarry',
    'quarryplus:marker',
    'quarryplus:fuel_module_normal',
    'quarryplus:mini_quarry'
];
onEvent("recipes", event => {
    removedOutputsQP.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.remove({ id: 'quarryplus:mining_well' })

    event.custom({
        "type": "quarryplus:workbench_recipe",
        "subType": "default",
        "result": {
            "item": "quarryplus:quarry",
            "count": 1
        },
        "energy": 320000.0,
        "showInJEI": true,
        "ingredients": [
            {
                "item": "the_vault:vault_diamond_block",
                "count": 9
            },
            {
                "item": "woldvaults:chromatic_gold_ingot",
                "count": 32
            },
            {
                "item": "the_vault:chromatic_steel_ingot",
                "count": 64
            },
            {
                "item": "the_vault:black_chromatic_steel_ingot",
                "count": 4
            },
            {
                "item": "quarryplus:solid_fuel_quarry",
                "count": 1
            },
            {
                "item": "the_vault:echo_pog",
                "count": 1
            }
        ],
        "conditions": [
            {
                "value": "quarry",
                "type": "quarryplus:machine_enabled"
            }
        ]
    })

    event.shaped(Item.of('quarryplus:solid_fuel_quarry'),
        [
            'GGG',
            'DCD',
            'LLL'
        ], {
        G: 'ironfurnaces:netherite_furnace',
        D: 'the_vault:vault_diamond_block',
        C: 'compressium:vault_essence_block_1',
        L: 'the_vault:chromatic_steel_block'

    })

    event.shaped(Item.of('quarryplus:workbench'),
        [
            'GGG',
            'DCD',
            'LLL'
        ], {
        G: 'the_vault:chromatic_iron_block',
        D: 'the_vault:vault_diamond_block',
        C: 'minecraft:diamond_block',
        L: 'the_vault:extraordinary_larimar'

    })

    event.custom({
        "type": "quarryplus:workbench_recipe",
        "subType": "default",
        "result": {
            "item": "quarryplus:mover",
            "count": 1
        },
        "energy": 320000.0,
        "showInJEI": true,
        "ingredients": [
            {
                "item": "the_vault:extraordinary_larimar",
                "count": 8
            },
            {
                "item": "woldvaults:chromatic_gold_ingot",
                "count": 8
            },
            {
                "item": "the_vault:chromatic_steel_ingot",
                "count": 16
            },
            {
                "item": "the_vault:vault_essence",
                "count": 64
            },
            {
                "item": "minecraft:obsidian",
                "count": 64
            },
            {
                "item": "the_vault:vault_anvil",
                "count": 2
            },
            {
                "item": "the_vault:gem_pog",
                "count": 8
            }
        ],
        "conditions": [
            {
                "value": "mover",
                "type": "quarryplus:machine_enabled"
            }
        ]
    })

    event.custom({
        "type": "quarryplus:workbench_recipe",
        "subType": "default",
        "result": {
            "item": "quarryplus:mining_well",
            "count": 1
        },
        "energy": 160000.0,
        "showInJEI": true,
        "ingredients": [
            {
                "item": "the_vault:extraordinary_larimar",
                "count": 4
            },
            {
                "item": "woldvaults:chromatic_gold_ingot",
                "count": 8
            },
            {
                "item": "the_vault:chromatic_steel_ingot",
                "count": 8
            },
            {
                "item": "the_vault:vault_essence",
                "count": 32
            },
            {
                "item": "createoreexcavation:netherite_drill",
                "count": 1
            }
        ],
        "conditions": [
            {
                "value": "mining_well",
                "type": "quarryplus:machine_enabled"
            }
        ]
    })

    event.custom({
        "type": "quarryplus:workbench_recipe",
        "subType": "default",
        "result": {
            "item": "quarryplus:pump_plus",
            "count": 1
        },
        "energy": 160000.0,
        "showInJEI": true,
        "ingredients": [
            {
                "item": "the_vault:extraordinary_larimar",
                "count": 4
            },
            {
                "item": "woldvaults:chromatic_gold_ingot",
                "count": 16
            },
            {
                "item": "the_vault:chromatic_steel_ingot",
                "count": 48
            },
            {
                "item": "the_vault:black_chromatic_steel_ingot",
                "count": 2
            },
            {
                "item": "the_vault:vault_essence",
                "count": 64
            },
            {
                "item": "minecraft:glass",
                "count": 512
            },
            {
                "item": "createoreexcavation:extractor",
                "count": 1
            },
            {
                "item": "minecraft:cactus",
                "count": 80
            }
        ],
        "conditions": [
            {
                "value": "pump_plus",
                "type": "quarryplus:machine_enabled"
            }
        ]
    })

    event.custom({
        "type": "quarryplus:workbench_recipe",
        "subType": "default",
        "result": {
            "item": "quarryplus:adv_quarry",
            "count": 1
        },
        "energy": 3200000.0,
        "showInJEI": true,
        "ingredients": [
            {
                "item": "quarryplus:quarry",
                "count": 3
            },
            {
                "item": "quarryplus:pump_plus",
                "count": 2
            },
            {
                "item": "quarryplus:marker",
                "count": 3
            },
            {
                "item": "the_vault:vault_diamond_block",
                "count": 8
            },
            {
                "item": "the_vault:perfect_echo_gem",
                "count": 2
            },
            {
                "item": "minecraft:ender_eye",
                "count": 64
            },
            {
                "item": "mekanism:digital_miner",
                "count": 1
            },
            {
                "item": "createoreexcavation:drilling_machine",
                "count": 1
            },
            {
                "item": "mininggadgets:mininggadget",
                "count": 1
            }
        ],
        "conditions": [
            {
                "value": "adv_quarry",
                "type": "quarryplus:machine_enabled"
            }
        ]
    })

    event.custom({
        "type": "quarryplus:workbench_recipe",
        "subType": "default",
        "result": {
            "item": "quarryplus:mini_quarry",
            "count": 1
        },
        "energy": 10000.0,
        "showInJEI": true,
        "ingredients": [
            {
                "item": "the_vault:vault_diamond_block",
                "count": 1
            },
            {
                "item": "woldvaults:chromatic_gold_ingot",
                "count": 16
            },
            {
                "item": "the_vault:chromatic_steel_ingot",
                "count": 32
            },
            {
                "item": "the_vault:vault_essence",
                "count": 32
            },
            {
                "item": "the_vault:extraordinary_larimar",
                "count": 2
            },
            {
                "item": "minecraft:comparator",
                "count": 4
            }
        ],
        "conditions": [
            {
                "value": "mini_quarry",
                "type": "quarryplus:machine_enabled"
            }
        ]
    })

    event.custom({
        "type": "quarryplus:workbench_recipe",
        "subType": "default",
        "result": {
            "item": "quarryplus:marker",
            "count": 1
        },
        "energy": 10000.0,
        "showInJEI": true,
        "ingredients": [
            {
                "item": "woldvaults:chromatic_gold_ingot",
                "count": 7
            },
            {
                "item": "the_vault:chromatic_steel_ingot",
                "count": 8
            },
            {
                "item": "the_vault:vault_essence",
                "count": 12
            },
            {
                "item": "the_vault:extraordinary_larimar",
                "count": 1
            },
            {
                "item": "minecraft:lapis_lazuli",
                "count": 12
            }
        ],
        "conditions": [
            {
                "value": "marker",
                "type": "quarryplus:machine_enabled"
            }
        ]
    })

    event.custom({
        "type": "quarryplus:workbench_recipe",
        "subType": "default",
        "result": {
            "item": "quarryplus:fuel_module_normal",
            "count": 1
        },
        "energy": 3600.0,
        "showInJEI": true,
        "ingredients": [
            {
                "item": "woldvaults:chromatic_gold_ingot",
                "count": 16
            },
            {
                "item": "minecraft:blaze_rod",
                "count": 16
            },
            {
                "item": "minecraft:netherrack",
                "count": 64
            },
            {
                "item": "ironfurnaces:diamond_furnace",
                "count": 3
            }
        ],
        "conditions": [
            {
                "value": "fuel_module_normal",
                "type": "quarryplus:machine_enabled"
            }
        ]
    })

})