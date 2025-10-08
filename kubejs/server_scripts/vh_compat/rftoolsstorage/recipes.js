let removedOutputsRFS = [
    'rftoolsstorage:modular_storage',
    'rftoolsstorage:storage_module0',
    'rftoolsstorage:storage_module1',
    'rftoolsstorage:storage_module2',
    'rftoolsstorage:storage_module3',
    'rftoolsstorage:storage_scanner',
    'rftoolsbase:tablet',
    'rftoolsstorage:storage_control_module',
    'rftoolsbase:machine_infuser',
    'rftoolsutility:crafter1',
    'rftoolsutility:crafter2',
    'rftoolsutility:crafter3',
    'rftoolsutility:screen',
    'rftoolsutility:screen_controller',
    'rftoolsutility:matter_beamer',
    'rftoolsutility:spawner',
    'rftoolsutility:syringe',
    'rftoolsutility:tank',
    'rftoolsutility:environmental_controller',
    'rftoolsutility:module_template',
    'rftoolsutility:moduleplus_template',
    'rftoolsbase:infused_diamond',
    'rftoolsbase:infused_enderpearl',
    'rftoolsutility:flight_module',
    'rftoolsutility:inventory_module',
    'rftoolsutility:inventoryplus_module'
];
onEvent("recipes", event => {
    removedOutputsRFS.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('rftoolsstorage:modular_storage'),
        [
            'RCR',
            'QFQ',
            'RQR'
        ], {
        R: 'the_vault:chromatic_steel_ingot',
        C: 'minecraft:chest',
        Q: 'the_vault:perfect_larimar',
        F: 'rftoolsbase:machine_frame'
    })

    event.shaped(Item.of('rftoolsstorage:storage_module0'),
        [
            ' C ',
            'GFG',
            'QRQ'
        ], {
        G: 'the_vault:chromatic_steel_nugget',
        C: 'minecraft:chest',
        Q: 'the_vault:perfect_larimar',
        F: 'the_vault:chromatic_steel_ingot',
        R: 'minecraft:redstone_block'
    })

    event.shaped(Item.of('rftoolsstorage:storage_module1'),
        [
            ' C ',
            'GFG',
            'QRQ'
        ], {
        G: 'the_vault:chromatic_steel_ingot',
        C: 'minecraft:gold_block',
        Q: 'the_vault:perfect_larimar',
        F: 'rftoolsstorage:storage_module0',
        R: 'minecraft:redstone_block'
    })

    event.shaped(Item.of('rftoolsstorage:storage_module2'),
        [
            ' C ',
            'GFG',
            'QRQ'
        ], {
        G: 'the_vault:chromatic_steel_block',
        C: 'the_vault:vault_diamond',
        Q: 'the_vault:perfect_larimar',
        F: 'rftoolsstorage:storage_module1',
        R: 'minecraft:redstone_block'
    })

    event.shaped(Item.of('rftoolsstorage:storage_module3'),
        [
            'ICI',
            'GFG',
            'QRQ'
        ], {
        G: 'the_vault:black_chromatic_steel_ingot',
        C: 'the_vault:vault_diamond',
        Q: 'the_vault:perfect_larimar',
        F: 'rftoolsstorage:storage_module2',
        R: 'minecraft:diamond_block',
        I: 'rftoolsbase:infused_diamond'
    })

    event.shaped(Item.of('rftoolsstorage:storage_scanner'),
        [
            'RQR',
            'CFC',
            'RQR'
        ], {
        R: 'the_vault:black_chromatic_steel_ingot',
        C: 'the_vault:chromatic_steel_ingot',
        Q: 'the_vault:perfect_larimar',
        F: 'rftoolsbase:machine_frame'
    })

    event.shaped(Item.of('rftoolsbase:tablet'),
        [
            'RCR',
            'QFQ',
            'RQR'
        ], {
        R: 'the_vault:black_chromatic_steel_ingot',
        C: 'the_vault:mystical_powder',
        Q: 'the_vault:perfect_painite',
        F: 'the_vault:gem_pog'
    })

    event.shaped(Item.of('rftoolsstorage:storage_control_module'),
        [
            ' C ',
            'QFQ',
            ' C '
        ], {
        C: 'the_vault:driftwood_planks',
        Q: 'the_vault:vault_essence',
        F: 'the_vault:chromatic_steel_ingot'
    })

    event.shaped(Item.of('rftoolsstorage:dump_module'),
        [
            ' C ',
            'QFQ',
            ' C '
        ], {
        C: '#minecraft:wooden_buttons',
        Q: 'the_vault:vault_essence',
        F: 'the_vault:chromatic_steel_ingot'
    })

    event.shaped(Item.of('rftoolsbase:machine_infuser'),
        [
            'RCR',
            'QFQ',
            'RCR'
        ], {
        R: 'rftoolsbase:dimensionalshard',
        C: 'the_vault:vault_essence',
        Q: 'the_vault:extraordinary_larimar',
        F: 'rftoolsbase:machine_frame'
    })

    event.shaped(Item.of('rftoolsutility:crafter1'),
        [
            'RCR',
            'QFQ',
            'RCR'
        ], {
        R: 'the_vault:black_chromatic_steel_ingot',
        C: 'the_vault:gem_pog',
        Q: 'minecraft:crafting_table',
        F: 'rftoolsbase:machine_frame'
    })

    event.shaped(Item.of('rftoolsutility:crafter2'),
        [
            'RVR',
            'QFQ',
            'RCR'
        ], {
        R: 'the_vault:black_chromatic_steel_ingot',
        C: 'the_vault:echo_pog',
        Q: 'minecraft:crafting_table',
        F: 'rftoolsutility:crafter1',
        V: 'the_vault:vault_diamond'
    })

    event.shaped(Item.of('rftoolsutility:crafter3'),
        [
            'RVR',
            'QFQ',
            'RCR'
        ], {
        R: 'the_vault:black_chromatic_steel_ingot',
        C: 'the_vault:echo_pog',
        Q: 'minecraft:crafting_table',
        F: 'rftoolsutility:crafter2',
        V: 'the_vault:vault_diamond_block'
    })

    event.shaped(Item.of('rftoolsutility:screen'),
        [
            'RRR',
            'RFR',
            'CCC'
        ], {
        R: 'minecraft:tinted_glass',
        C: 'the_vault:chromatic_iron_ingot',
        F: 'rftoolsbase:machine_base',
    })

    event.shaped(Item.of('rftoolsutility:screen_controller'),
        [
            'RER',
            'CFC',
            'RCR'
        ], {
        R: 'the_vault:perfect_larimar',
        C: 'the_vault:chromatic_steel_ingot',
        F: 'rftoolsbase:machine_frame',
        E: 'the_vault:gem_black_opal'
    })

    event.shaped(Item.of('rftoolsutility:matter_beamer'),
        [
            'RCR',
            'CFC',
            'RCR'
        ], {
        R: 'the_vault:vault_diamond',
        C: 'quark:blaze_lantern',
        F: 'rftoolsbase:machine_frame'
    })

    event.shaped(Item.of('rftoolsutility:spawner'),
        [
            'RGR',
            'CFB',
            'RPR'
        ], {
        R: 'the_vault:vault_diamond',
        C: 'the_vault:gem_pog',
        P: 'the_vault:eternal_soul',
        G: 'the_vault:packed_vault_meat_block',
        B: 'quark:blaze_lantern',
        F: 'rftoolsbase:machine_frame'
    })

    event.shaped(Item.of('rftoolsutility:syringe'),
        [
            'P  ',
            ' R ',
            '  B'
        ], {
        R: 'the_vault:chromatic_steel_ingot',
        B: 'minecraft:glass_bottle',
        P: 'the_vault:gem_painite'
    })

    event.shaped(Item.of('rftoolsutility:tank'),
        [
            'PPP',
            'FRF',
            'BBB'
        ], {
        R: 'rftoolsbase:machine_frame',
        B: 'the_vault:chromatic_steel_ingot',
        P: 'minecraft:tinted_glass',
        F: 'minecraft:bucket'
    })

    event.shaped(Item.of('rftoolsutility:environmental_controller'),
        [
            'RGR',
            'CFB',
            'RPR'
        ], {
        R: 'the_vault:black_chromatic_steel_ingot',
        C: 'compressium:gold_1',
        P: 'compressium:emerald_1',
        G: 'compressium:diamond_1',
        B: 'compressium:iron_1',
        F: 'rftoolsbase:machine_frame'
    })

    event.shaped(Item.of('rftoolsutility:module_template'),
        [
            'RCR',
            'CFC',
            'RCR'
        ], {
        R: 'rftoolsbase:dimensionalshard',
        C: 'the_vault:chromatic_iron_ingot',
        F: 'rftoolsbase:infused_diamond'
    })

    event.shaped(Item.of('rftoolsutility:moduleplus_template'),
        [
            'RCR',
            'CFC',
            'RCR'
        ], {
        R: 'the_vault:perfect_larimar',
        C: 'the_vault:vault_diamond',
        F: 'rftoolsutility:module_template'
    })

    event.shaped(Item.of('rftoolsbase:infused_diamond'),
        [
            'RLR',
            'LFL',
            'RLR'
        ], {
        R: 'rftoolsbase:dimensionalshard',
        F: 'the_vault:vault_diamond',
        L: 'the_vault:gem_larimar'
    })

    event.shaped(Item.of('rftoolsbase:infused_enderpearl'),
        [
            'RLR',
            'LFL',
            'RLR'
        ], {
        R: 'rftoolsbase:dimensionalshard',
        F: 'the_vault:bounty_pearl',
        L: 'the_vault:gem_larimar'
    })

    event.shaped(Item.of('rftoolsutility:matter_transmitter'),
        [
            'GGG',
            'LFL',
            'RRR'
        ], {
        R: 'the_vault:chromatic_steel_ingot',
        F: 'rftoolsbase:machine_frame',
        L: 'the_vault:perfect_benitoite',
        G: 'minecraft:ender_pearl'
    })


    event.shaped(Item.of('rftoolsutility:matter_receiver'),
        [
            'RRR',
            'LFL',
            'GGG'
        ], {
        R: 'the_vault:chromatic_steel_ingot',
        F: 'rftoolsbase:machine_frame',
        L: 'the_vault:perfect_benitoite',
        G: 'minecraft:ender_pearl'
    })

    event.shaped(Item.of('rftoolsutility:dialing_device'),
        [
            'RRR',
            'LFL',
            'RRR'
        ], {
        R: 'minecraft:redstone_block',
        F: 'rftoolsbase:machine_frame',
        L: 'the_vault:perfect_larimar'
    })

    event.shaped(Item.of('rftoolsutility:matter_booster'),
        [
            'LRL',
            'RFR',
            'LRL'
        ], {
        R: 'minecraft:redstone_block',
        F: 'rftoolsbase:machine_frame',
        L: 'the_vault:chromatic_iron_ingot'
    })

    event.shaped(Item.of('rftoolsutility:charged_porter'),
        [
            ' R ',
            'RFR',
            'LRL'
        ], {
        R: 'rftoolsbase:infused_enderpearl',
        F: 'minecraft:redstone_block',
        L: 'the_vault:chromatic_iron_ingot'
    })

    event.shaped(Item.of('rftoolsutility:matter_booster'),
        [
            'LRL',
            'RFR',
            'LRL'
        ], {
        R: 'rftoolsbase:infused_diamond',
        F: 'rftoolsutility:charged_porter',
        L: 'minecraft:redstone_block'
    })



})