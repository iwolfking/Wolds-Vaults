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
        C: 'ae2:acceleration_card',
        P: 'ae2:calculation_processor',
        E: 'the_vault:extraordinary_wutodie'
    }).id('expatternprovider:ebus_out')

     event.shaped(Item.of('expatternprovider:ex_import_bus_part'),
        [
            'BCE',
            'CPE'
        ], {
        B: 'ae2:import_bus',
        C: 'ae2:acceleration_card',
        P: 'ae2:calculation_processor',
        E: 'the_vault:extraordinary_wutodie'
    }).id('expatternprovider:ebus_in')

})