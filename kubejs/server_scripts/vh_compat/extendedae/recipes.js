onEvent("recipes", event => {
    event.shaped(Item.of('expatternprovider:wireless_connect'),
        [
            'PXP',
            'ETE',
            'PXP'
        ], {
        P: 'the_vault:black_chromatic_steel_ingot',
        E: '#ae2:smart_cable',
        X: 'ae2:wireless_receiver',
        T: 'ae2:engineering_processor'
    }).id('expatternprovider:wireless_connector')

    event.shaped(Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:water"}}'),
        [
            'GBG',
            'TCT',
            'DDD'
        ], {
        G: 'ae2:quartz_glass',
        B: 'the_vault:infinite_water_bucket',
        D: 'the_vault:wutodic_silver_ingot',
        C: 'ae2:cell_component_16k',
        T: 'the_vault:extraordinary_benitoite'
    }).id('expatternprovider:water_cell')

    event.shaped(Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:i",id:"minecraft:cobblestone"}}'),
        [
            'GBG',
            'TCT',
            'DDD'
        ], {
        G: 'ae2:quartz_glass',
        B: 'compressium:cobblestone_5',
        D: 'the_vault:wutodic_silver_ingot',
        C: 'ae2:cell_component_16k',
        T: 'the_vault:extraordinary_benitoite'
    }).id('expatternprovider:cobblestone_cell')

    event.shaped(Item.of('expatternprovider:ex_export_bus_part'),
        [
            'BCE',
            'CPE'
        ], {
        B: 'ae2:export_bus',
        C: 'ae2:speed_card',
        P: 'ae2:calculation_processor',
        E: 'the_vault:extraordinary_wutodie'
    }).id('expatternprovider:ebus_out')

     event.shaped(Item.of('expatternprovider:ex_import_bus_part'),
        [
            'BCE',
            'CPE'
        ], {
        B: 'ae2:import_bus',
        C: 'ae2:speed_card',
        P: 'ae2:calculation_processor',
        E: 'the_vault:extraordinary_wutodie'
    }).id('expatternprovider:ebus_in')

    event.shaped(Item.of('expatternprovider:wireless_hub'),
        [
            'PXP',
            'ETE',
            'PXP'
        ], {
        P: 'the_vault:chromatic_steel_ingot',
        E: 'the_vault:gem_pog',
        X: 'ae2:wireless_receiver',
        T: 'expatternprovider:wireless_connect'
    }).id('expatternprovider:wireless_hub')

    event.shaped(Item.of('expatternprovider:ex_molecular_assembler'),
        [
            'PXP',
            'XTX',
            'PXP'
        ], {
        P: 'ae2:fluix_crystal',
        X: 'ae2:molecular_assembler',
        T: 'the_vault:extraordinary_echo_gem'
    }).id('expatternprovider:ex_molecular_assembler')

    event.shaped(Item.of('expatternprovider:assembler_matrix_frame'),
        [
            'PXP',
            'XTX',
            'PXP'
        ], {
        P: 'the_vault:perfect_benitoite',
        X: 'the_vault:chromatic_iron_ingot',
        T: 'ae2:quartz_glass'
    }).id('expatternprovider:assembler_matrix_frame')

    event.shaped(Item.of('expatternprovider:assembler_matrix_pattern'),
        [
            'PXP',
            'ETE',
            'PXP'
        ], {
        P: 'ae2:blue_lumen_paint_ball',
        X: '#expatternprovider:extended_pattern_provider',
        T: 'expatternprovider:assembler_matrix_frame',
        E: 'the_vault:gem_pog'
    }).id('expatternprovider:assembler_matrix_pattern')

    event.shaped(Item.of('expatternprovider:assembler_matrix_crafter'),
        [
            'PXP',
            'ETE',
            'PXP'
        ], {
        P: 'ae2:purple_lumen_paint_ball',
        X: 'expatternprovider:ex_molecular_assembler',
        T: 'expatternprovider:assembler_matrix_frame',
        E: 'the_vault:gem_pog'
    }).id('expatternprovider:assembler_matrix_crafter')

    event.shaped(Item.of('expatternprovider:assembler_matrix_speed'),
        [
            'PXP',
            'ETE',
            'PXP'
        ], {
        P: 'ae2:red_lumen_paint_ball',
        X: 'ae2:speed_card',
        T: 'expatternprovider:assembler_matrix_frame',
        E: 'the_vault:gem_pog'
    }).id('expatternprovider:assembler_matrix_speed')

})