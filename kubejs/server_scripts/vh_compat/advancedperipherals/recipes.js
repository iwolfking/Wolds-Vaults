let removedOutputsAPCC = [
    'advancedperipherals:peripheral_casing',
    'advancedperipherals:chunk_controller'
];
onEvent("recipes", event => {
    removedOutputsAPCC.forEach(id => {
        event.remove({ 'output': `${id}` })
    })
    //event.remove({ output: /advancedperipherals:.*_core/ })
    event.replaceInput({ id: 'advancedperipherals:computer_tool' }, 'minecraft:iron_ingot', 'the_vault:chromatic_iron_ingot')
    event.replaceInput({ id: 'advancedperipherals:memory_card' }, 'minecraft:iron_ingot', 'the_vault:chromatic_steel_ingot')
    event.replaceInput({ id: 'advancedperipherals:nbt_storage' }, 'minecraft:iron_ingot', 'the_vault:chromatic_steel_ingot')
    event.replaceInput({ id: 'advancedperipherals:ar_goggles' }, 'minecraft:ender_pearl', 'the_vault:perfect_black_opal')
    event.shaped(Item.of('advancedperipherals:peripheral_casing'),
        [
            'IBI',
            'BCB',
            'IBI'
        ], {
        I: 'the_vault:wutodic_silver_ingot',
        B: 'the_vault:perfect_larimar',
        C: 'the_vault:gem_pog'
    })

    event.shaped(Item.of('advancedperipherals:inventory_manager'),
        [
            'ITI',
            'XCX',
            'IXI'
        ], {
        I: 'the_vault:black_chromatic_steel_block',
        X: 'the_vault:omega_pog',
        C: 'advancedperipherals:peripheral_casing',
        T: 'the_vault:wold_star'
    }).id('advancedperipherals:inventory_manager')



})