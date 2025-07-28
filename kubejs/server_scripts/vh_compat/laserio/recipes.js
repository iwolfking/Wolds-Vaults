let removedOutputsLI = [
    'laserio:laser_connector',
    'laserio:laser_node',
    'laserio:laser_wrench',
    'laserio:card_holder',
    'laserio:card_item',
    'laserio:card_fluid',
    'laserio:card_energy',
    'laserio:card_redstone',
    'laserio:filter_basic',
    'laserio:logic_chip_raw',
    'laserio:overclocker_card',
    'laserio:overclocker_node'
];
onEvent("recipes", event => {
    removedOutputsLI.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('laserio:laser_connector'),
        [
            ' O ',
            'LCL',
            'III'
        ], {
        I: 'the_vault:chromatic_steel_ingot',
        O: 'the_vault:gem_painite',
        L: 'minecraft:redstone_block',
        C: 'laserio:logic_chip'
    })

    event.shaped(Item.of('laserio:laser_node'),
        [
            'ILI',
            'LCL',
            'ILI'
        ], {
        I: 'minecraft:iron_block',
        C: 'laserio:laser_connector',
        L: 'the_vault:chromatic_iron_ingot'
    })

    event.shaped(Item.of('laserio:laser_wrench'),
        [
            'I I',
            ' C ',
            ' I '
        ], {
        I: 'the_vault:chromatic_iron_ingot',
        C: 'laserio:logic_chip'
    })

    event.shaped(Item.of('laserio:card_holder'),
        [
            'I I',
            'SCS',
            'I I'
        ], {
        I: 'the_vault:chromatic_steel_ingot',
        C: 'laserio:logic_chip',
        S: 'minecraft:chest'
    })

    event.shaped(Item.of('laserio:card_item'),
        [
            'RLR',
            'QCQ',
            'NNN'
        ], {
        R: 'minecraft:redstone_block',
        L: 'the_vault:perfect_larimar',
        Q: 'minecraft:quartz',
        N: 'the_vault:chromatic_iron_ingot',
        C: 'laserio:logic_chip'
    })

    event.shaped(Item.of('laserio:card_fluid'),
        [
            'RLR',
            'QCQ',
            'NBN'
        ], {
        R: 'minecraft:redstone_block',
        L: 'the_vault:perfect_larimar',
        Q: 'minecraft:quartz',
        N: 'the_vault:chromatic_iron_ingot',
        B: 'minecraft:bucket',
        C: 'laserio:logic_chip'
    })

    event.shaped(Item.of('laserio:card_energy'),
        [
            'RLR',
            'QCQ',
            'NRN'
        ], {
        R: 'minecraft:redstone_block',
        L: 'the_vault:perfect_larimar',
        Q: 'minecraft:quartz',
        N: 'the_vault:chromatic_iron_ingot',
        C: 'laserio:logic_chip'
    })

    event.shaped(Item.of('laserio:card_redstone'),
        [
            'RLR',
            'QCQ',
            'NNN'
        ], {
        R: 'minecraft:redstone_block',
        L: 'the_vault:perfect_larimar',
        Q: 'minecraft:quartz',
        N: 'the_vault:chromatic_iron_ingot',
        C: 'laserio:logic_chip'
    })

    event.shaped(Item.of('laserio:filter_basic'),
        [
            'ILI',
            'LCL',
            'ILI'
        ], {
        I: 'the_vault:chromatic_steel_nugget',
        C: 'laserio:logic_chip',
        L: '#forge:glass_panes'
    })

    event.shaped(Item.of('laserio:logic_chip_raw'),
        [
            'INI',
            'LCL',
            'INI'
        ], {
        I: 'minecraft:redstone',
        C: '#forge:storage_blocks/quartz',
        L: 'minecraft:clay_ball',
        N: 'the_vault:gem_larimar'
    })

    event.shaped(Item.of('laserio:overclocker_card'),
        [
            ' I ',
            'LCL',
            'III'
        ], {
        I: 'the_vault:chromatic_steel_ingot',
        C: 'laserio:logic_chip',
        L: 'the_vault:perfect_larimar',
    })

    event.shaped(Item.of('laserio:overclocker_node'),
        [
            ' I ',
            'LCL',
            'III'
        ], {
        I: 'the_vault:vault_diamond',
        C: 'laserio:logic_chip',
        L: 'the_vault:perfect_larimar',
    })

    event.shapeless('laserio:card_item', ['laserio:card_item'])
    event.shapeless('laserio:card_fluid', ['laserio:card_fluid'])
    event.shapeless('laserio:card_energy', ['laserio:card_energy'])
    event.shapeless('laserio:card_redstone', ['laserio:card_redstone'])

})