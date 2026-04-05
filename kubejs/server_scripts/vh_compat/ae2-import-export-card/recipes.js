onEvent("recipes", event => {
    event.shaped(Item.of('ae2insertexportcard:insert_card'),
        [
            'ERE',
            'IXC',
            'PRP'
        ], {
        E: 'ae2:engineering_processor',
        R: 'the_vault:black_chromatic_steel_block',
        I: 'ae2:import_bus',
        C: 'ae2:advanced_card',
        P: 'ae2:calculation_processor',
        X: 'the_vault:echo_pog'
    }).id('ae2insertexportcard:insert_card')

    event.shaped(Item.of('ae2insertexportcard:export_card'),
        [
            'ERE',
            'IXC',
            'PRP'
        ], {
        E: 'ae2:engineering_processor',
        R: 'the_vault:black_chromatic_steel_block',
        I: 'ae2:export_bus',
        C: 'ae2:advanced_card',
        P: 'ae2:calculation_processor',
        X: 'the_vault:echo_pog'
    }).id('ae2insertexportcard:export_card')
})