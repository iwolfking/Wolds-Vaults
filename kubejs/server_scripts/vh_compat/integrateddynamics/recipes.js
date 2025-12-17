let removedOutputsID = [
    'integratednbt:nbt_extractor',
    'integratednbt:nbt_extractor_remote',
    'integratedcrafting:part_interface_crafting',
    'integratedcrafting:part_crafting_writer',
    'integrateddynamics:wrench',
    'integrateddynamics:variable_transformer_input',
    'integrateddynamics:variable_transformer_output',
    'integrateddynamics:variablestore',
    'integrateddynamics:logic_programmer',
    'integrateddynamics:logic_director',
    'integrateddynamics:cable',
    'integrateddynamics:energy_battery',
    'integrateddynamics:coal_generator',
    'integrateddynamics:drying_basin',
    'integrateddynamics:squeezer',
    'integrateddynamics:mechanical_squeezer',
    'integrateddynamics:mechanical_drying_basin',
    'integrateddynamics:part_audio_reader',
    'integrateddynamics:part_block_reader',
    'integrateddynamics:part_entity_reader',
    'integrateddynamics:part_extradimensional_reader',
    'integrateddynamics:part_fluid_reader',
    'integrateddynamics:part_inventory_reader',
    'integrateddynamics:part_machine_reader',
    'integrateddynamics:part_network_reader',
    'integrateddynamics:part_redstone_reader',
    'integrateddynamics:part_world_reader',
    'integrateddynamics:part_audio_writer',
    'integrateddynamics:part_effect_writer',
    'integrateddynamics:part_entity_writer',
    'integrateddynamics:part_machine_writer',
    'integrateddynamics:part_inventory_writer',
    'integrateddynamics:part_redstone_writer',
    'integrateddynamics:part_static_light_panel',
    'integrateddynamics:part_display_panel',
    'integrateddynamics:part_connector_mono_directional',
    'integratedterminals:part_terminal_storage',
    'integratedterminals:part_terminal_crafting_job',
    'integratedterminals:part_storage_terminal',
    'integratedterminals:terminal_storage_portable',
    'integratedtunnels:part_interface_energy',
    'integratedtunnels:part_interface_item',
    'integratedtunnels:part_interface_fluid',
    'integratedtunnels:part_player_simulator'
];
onEvent("recipes", event => {
    removedOutputsID.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    //Remove JUST the new variable card recipe
    event.remove({ id: 'integrateddynamics:crafting/variable' })
    event.remove({ id: 'integrateddynamics:crafting/part_connector_omni_directional' })

    event.shaped(Item.of('integrateddynamics:wrench'),
        [
            ' ML',
            ' MM',
            'M  '
        ], {
        M: 'integrateddynamics:crystalized_menril_chunk',
        L: 'the_vault:extraordinary_larimar'
    })

    event.shaped(Item.of('integrateddynamics:variable', 24),
        [
            'LML',
            'MPM',
            'LML'
        ], {
        M: 'integrateddynamics:crystalized_menril_block',
        L: 'the_vault:perfect_larimar',
        P: 'minecraft:paper'
    })

    event.shaped(Item.of('integrateddynamics:variable_transformer_input', 4),
        [
            'LVL',
            'MPM',
            'LVL'
        ], {
        M: 'integrateddynamics:crystalized_menril_chunk',
        L: 'the_vault:vault_essence',
        P: 'minecraft:sticky_piston',
        V: 'integrateddynamics:variable'
    })

    event.shaped(Item.of('integrateddynamics:variable_transformer_output', 4),
        [
            'LVL',
            'MPM',
            'LVL'
        ], {
        M: 'integrateddynamics:crystalized_menril_chunk',
        L: 'the_vault:vault_essence',
        P: 'minecraft:piston',
        V: 'integrateddynamics:variable'
    })

    event.shaped(Item.of('integrateddynamics:logic_director'),
        [
            'CVC',
            'MPM',
            'CVC'
        ], {
        C: 'integrateddynamics:crystalized_chorus_chunk',
        M: 'the_vault:extraordinary_larimar',
        P: 'the_vault:wutodic_silver_block',
        V: 'integrateddynamics:crystalized_menril_chunk'
    })

    event.shaped(Item.of('integrateddynamics:cable', 3),
        [
            'VVV',
            'MPM',
            'VVV'
        ], {
        M: 'the_vault:chromatic_steel_ingot',
        P: 'the_vault:perfect_larimar',
        V: 'integrateddynamics:crystalized_menril_chunk'
    })

    event.shaped(Item.of('integrateddynamics:variablestore'),
        [
            'VMV',
            'PCP',
            'VMV'
        ], {
        M: 'the_vault:chromatic_iron_block',
        P: 'the_vault:perfect_larimar',
        V: 'integrateddynamics:crystalized_menril_chunk',
        C: 'minecraft:chest'
    })

    event.shaped(Item.of('integrateddynamics:logic_programmer'),
        [
            'VMV',
            'PCP',
            'VMV'
        ], {
        M: 'the_vault:chromatic_steel_block',
        P: 'the_vault:vault_diamond',
        V: 'the_vault:perfect_larimar',
        C: 'integrateddynamics:crystalized_menril_block'
    })

    event.shaped(Item.of('integrateddynamics:energy_battery'),
        [
            'IMI',
            'ICI',
            'VMV'
        ], {
        I: 'the_vault:chromatic_steel_ingot',
        V: 'the_vault:chromatic_steel_block',
        C: 'minecraft:redstone_block',
        M: 'integrateddynamics:crystalized_menril_block'
    })

    event.shaped(Item.of('integrateddynamics:coal_generator'),
        [
            'VMV',
            'VCV',
            'PEP'
        ], {
        V: 'the_vault:chromatic_iron_ingot',
        C: 'minecraft:furnace',
        M: 'integrateddynamics:crystalized_menril_block',
        E: 'integrateddynamics:energy_battery',
        P: 'the_vault:wooden_planks'
    })

    event.shaped(Item.of('integrateddynamics:drying_basin'),
        [
            'VMV',
            'C C',
            'VMV'
        ], {
        V: 'the_vault:driftwood_planks',
        C: 'the_vault:chromatic_steel_ingot',
        M: 'minecraft:black_dye'
    })

    event.shaped(Item.of('integrateddynamics:squeezer'),
        [
            'VBV',
            'V V',
            'MCM'
        ], {
        V: 'the_vault:driftwood',
        C: 'the_vault:chromatic_steel_ingot',
        M: 'the_vault:driftwood_planks',
        B: 'the_vault:chromatic_iron_block'
    })

    event.shaped(Item.of('integrateddynamics:mechanical_squeezer'),
        [
            'LVL',
            'EME',
            'LPL'
        ], {
        V: 'the_vault:vault_diamond',
        E: 'integrateddynamics:energy_battery',
        M: 'integrateddynamics:squeezer',
        P: 'the_vault:perfect_black_opal',
        L: 'the_vault:extraordinary_larimar'
    })

    event.shaped(Item.of('integrateddynamics:mechanical_drying_basin'),
        [
            'LVL',
            'EME',
            'LPL'
        ], {
        V: 'the_vault:vault_diamond',
        E: 'integrateddynamics:energy_battery',
        M: 'integrateddynamics:drying_basin',
        P: 'the_vault:perfect_black_opal',
        L: 'the_vault:extraordinary_larimar'
    })

    event.shaped(Item.of('integrateddynamics:part_audio_reader'),
        [
            'VPV',
            'PCP',
            'VPV'
        ], {
        P: 'minecraft:note_block',
        V: 'the_vault:vault_essence',
        C: 'integrateddynamics:variable_transformer_input'
    })

    event.shaped(Item.of('integrateddynamics:part_block_reader'),
        [
            'VPV',
            'PCP',
            'VPV'
        ], {
        P: 'the_vault:living_rock_block_cobble',
        V: 'the_vault:vault_essence',
        C: 'integrateddynamics:variable_transformer_input'
    })

    event.shaped(Item.of('integrateddynamics:part_entity_reader'),
        [
            'VPV',
            'PCP',
            'VPV'
        ], {
        P: 'minecraft:porkchop',
        V: 'the_vault:vault_essence',
        C: 'integrateddynamics:variable_transformer_input'
    })

    event.shaped(Item.of('integrateddynamics:part_extradimensional_reader'),
        [
            'VPV',
            'PCP',
            'VPV'
        ], {
        P: 'minecraft:ender_eye',
        V: 'the_vault:vault_essence',
        C: 'integrateddynamics:variable_transformer_input'
    })

    event.shaped(Item.of('integrateddynamics:part_fluid_reader'),
        [
            'VBV',
            'PCP',
            'VBV'
        ], {
        P: 'minecraft:bucket',
        B: 'minecraft:water_bucket',
        V: 'the_vault:vault_essence',
        C: 'integrateddynamics:variable_transformer_input'
    })

    event.shaped(Item.of('integrateddynamics:part_inventory_reader'),
        [
            'VPV',
            'PCP',
            'VPV'
        ], {
        P: 'minecraft:chest',
        V: 'the_vault:vault_essence',
        C: 'integrateddynamics:variable_transformer_input'
    })

    event.shaped(Item.of('integrateddynamics:part_machine_reader'),
        [
            'VFV',
            'PCP',
            'VTV'
        ], {
        P: 'the_vault:chromatic_iron_ingot',
        V: 'the_vault:vault_essence',
        C: 'integrateddynamics:variable_transformer_input',
        F: 'minecraft:furnace',
        T: 'minecraft:crafting_table'
    })

    event.shaped(Item.of('integrateddynamics:part_network_reader'),
        [
            'VPV',
            'PCP',
            'VPV'
        ], {
        P: 'integrateddynamics:cable',
        V: 'the_vault:vault_essence',
        C: 'integrateddynamics:variable_transformer_input'
    })

    event.shaped(Item.of('integrateddynamics:part_redstone_reader'),
        [
            'VPV',
            'BCB',
            'VPV'
        ], {
        P: 'minecraft:redstone',
        B: 'minecraft:redstone_block',
        V: 'the_vault:vault_essence',
        C: 'integrateddynamics:variable_transformer_input'
    })

    event.shaped(Item.of('integrateddynamics:part_world_reader'),
        [
            'VPV',
            'PCP',
            'VPV'
        ], {
        P: 'minecraft:obsidian',
        V: 'the_vault:vault_essence',
        C: 'integrateddynamics:variable_transformer_input'
    })

    event.shaped(Item.of('integrateddynamics:part_audio_writer'),
        [
            'VPV',
            'PCP',
            'VPV'
        ], {
        P: 'minecraft:note_block',
        V: 'the_vault:vault_essence',
        C: 'integrateddynamics:variable_transformer_output'
    })

    event.shaped(Item.of('integrateddynamics:part_entity_writer'),
        [
            'VPV',
            'PCP',
            'VPV'
        ], {
        P: 'minecraft:porkchop',
        V: 'the_vault:vault_essence',
        C: 'integrateddynamics:variable_transformer_output'
    })
    event.shaped(Item.of('integrateddynamics:part_effect_writer'),
        [
            'VPV',
            'PCP',
            'VPV'
        ], {
        P: 'minecraft:fire_charge',
        V: 'the_vault:vault_essence',
        C: 'integrateddynamics:variable_transformer_output'
    })

    event.shaped(Item.of('integrateddynamics:part_inventory_writer'),
        [
            'VPV',
            'PCP',
            'VPV'
        ], {
        P: 'minecraft:chest',
        V: 'the_vault:vault_essence',
        C: 'integrateddynamics:variable_transformer_output'
    })

    event.shaped(Item.of('integrateddynamics:part_machine_writer'),
        [
            'VFV',
            'PCP',
            'VTV'
        ], {
        P: 'the_vault:chromatic_iron_ingot',
        V: 'the_vault:vault_essence',
        C: 'integrateddynamics:variable_transformer_output',
        F: 'minecraft:furnace',
        T: 'minecraft:crafting_table'
    })

    event.shaped(Item.of('integrateddynamics:part_redstone_writer'),
        [
            'VPV',
            'BCB',
            'VPV'
        ], {
        P: 'minecraft:redstone',
        B: 'minecraft:redstone_block',
        V: 'the_vault:vault_essence',
        C: 'integrateddynamics:variable_transformer_output'
    })

    event.shaped(Item.of('integrateddynamics:part_static_light_panel'),
        [
            'VLV',
            'BCR',
            'VLV'
        ], {
        B: 'integrateddynamics:menril_berries',
        L: 'the_vault:gem_larimar',
        V: 'the_vault:vault_essence',
        C: 'integrateddynamics:variable_transformer_output',
        R: 'minecraft:redstone_block'
    })

    event.shaped(Item.of('integrateddynamics:part_display_panel'),
        [
            'VBV',
            'PCP',
            'VBV'
        ], {
        P: 'integrateddynamics:part_static_light_panel',
        B: 'integrateddynamics:menril_berries',
        V: 'the_vault:gem_larimar',
        C: 'integrateddynamics:variable_transformer_output'
    })

    event.shaped(Item.of('integrateddynamics:part_connector_mono_directional'),
        [
            'VOV',
            'PPP',
            'VIV'
        ], {
        I: 'integrateddynamics:variable_transformer_input',
        P: 'integrateddynamics:cable',
        V: 'the_vault:perfect_larimar',
        O: 'integrateddynamics:variable_transformer_output'
    })

    event.shaped(Item.of('integrateddynamics:part_connector_omni_directional', 2),
        [
            'VIV',
            'CPC',
            'VIV'
        ], {
        I: 'integrateddynamics:logic_director',
        P: 'integrateddynamics:cable',
        C: 'integrateddynamics:part_connector_mono_directional',
        V: 'the_vault:perfect_black_opal'
    }).id('integrateddynamics:special/part_connector_omni_directional')

    event.shaped(Item.of('integratedterminals:terminal_storage_portable'),
        [
            'IVI',
            'PCP',
            'IEI'
        ], {
        P: 'the_vault:extraordinary_larimar',
        V: 'the_vault:perfect_black_opal',
        C: 'integratedterminals:part_terminal_storage',
        E: 'the_vault:echo_pog',
        I: 'the_vault:black_chromatic_steel_ingot'

    })

    event.shaped(Item.of('integratedterminals:part_terminal_storage'),
        [
            'VSV',
            'OCI',
            'VBV'
        ], {
        V: 'woldsvaults:vault_essence_block',
        C: 'integrateddynamics:part_display_panel',
        B: 'woldsvaults:pog_prism',
        O: 'integrateddynamics:variable_transformer_output',
        I: 'integrateddynamics:variable_transformer_input',
        S: 'the_vault:chromatic_steel_block'
    })

    event.shaped(Item.of('integratedterminals:part_terminal_crafting_job'),
        [
            'VSV',
            ' C ',
            'VBV'
        ], {
        V: 'woldsvaults:vault_essence_block',
        C: 'integrateddynamics:part_display_panel',
        B: 'minecraft:crafting_table',
        S: 'integratedterminals:menril_glass'
    })

    event.shaped(Item.of('integratedtunnels:part_interface_energy', 4),
        [
            'MMM',
            'BCB',
            'BBB'
        ], {
        C: 'integrateddynamics:energy_battery',
        B: 'integrateddynamics:crystalized_menril_chunk',
        M: 'the_vault:chromatic_steel_ingot'
    })

    event.shaped(Item.of('integratedtunnels:part_interface_item', 4),
        [
            'MMM',
            'VCV',
            'BBB'
        ], {
        C: 'minecraft:chest',
        B: 'integrateddynamics:crystalized_menril_chunk',
        M: 'the_vault:chromatic_steel_ingot',
        V: 'the_vault:vault_essence'
    })

    event.shaped(Item.of('integratedtunnels:part_interface_fluid', 4),
        [
            'MMM',
            'VCV',
            'BBB'
        ], {
        C: 'minecraft:bucket',
        B: 'integrateddynamics:crystalized_menril_chunk',
        M: 'the_vault:chromatic_steel_ingot',
        V: 'the_vault:vault_essence'
    })

    event.shaped(Item.of('integratedtunnels:part_player_simulator'),
        [
            '   ',
            'iPI',
            'eBE'
        ], {
        i: 'integratedtunnels:part_exporter_world_item',
        e: 'integratedtunnels:part_importer_world_item',
        I: 'integratedtunnels:part_exporter_world_block',
        E: 'integratedtunnels:part_importer_world_block',
        B: 'minecraft:emerald_block',
        P: 'the_vault:extraordinary_larimar'
    })

    event.shaped(Item.of('integratednbt:nbt_extractor'),
        [
            'MMM',
            'RCR',
            'BBB'
        ], {
        C: 'integrateddynamics:logic_programmer',
        B: 'integrateddynamics:crystalized_menril_block',
        M: 'the_vault:chromatic_steel_ingot',
        R: 'the_vault:perfect_painite'
    })

    event.shaped(Item.of('integratednbt:nbt_extractor_remote'),
        [
            'MMM',
            'RCR',
            'BEB'
        ], {
        C: 'integrateddynamics:logic_programmer',
        B: 'integrateddynamics:crystalized_menril_block',
        M: 'the_vault:chromatic_steel_ingot',
        R: 'the_vault:perfect_painite',
        E: 'the_vault:black_chromatic_steel_ingot'
    })

    event.shaped(Item.of('integratedcrafting:part_interface_crafting'),
        [
            'BCB',
            'OMI',
            'BCB'
        ], {
        B: 'the_vault:black_chromatic_steel_ingot',
        C: 'the_vault:wooden_planks',
        O: 'integrateddynamics:variable_transformer_output',
        I: 'integrateddynamics:variable_transformer_input',
        M: 'woldsvaults:pog_prism'
    })

    event.shaped(Item.of('integratedcrafting:part_crafting_writer'),
        [
            'LBL',
            'TOT',
            'LBL'
        ], {
        B: 'the_vault:black_chromatic_steel_ingot',
        T: 'the_vault:wooden_planks',
        O: 'integrateddynamics:variable_transformer_output',
        L: 'the_vault:extraordinary_larimar'
    })

})