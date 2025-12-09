let removedOutputsRFTP = [
];
onEvent("recipes", event => {
    removedOutputsRFTP.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.replaceInput({ id: 'rftoolspower:powercell_card' }, 'minecraft:paper', 'the_vault:magic_silk')
    event.replaceInput({ id: 'rftoolspower:endergenic' }, 'minecraft:diamond', 'the_vault:vault_diamond')
    event.replaceInput({ id: 'rftoolspower:cell1' }, 'minecraft:redstone', 'the_vault:vault_essence')
    event.replaceInput({ id: 'rftoolspower:cell2' }, 'minecraft:redstone', 'the_vault:carbon')
    event.replaceInput({ id: 'rftoolspower:cell3' }, 'minecraft:redstone', 'the_vault:gem_black_opal')
    event.replaceInput({ id: 'rftoolspower:dimensionalcell_simple' }, 'minecraft:diamond', 'the_vault:perfect_larimar')

    event.shaped(Item.of('rftoolspower:blazing_agitator'),
        [
            'GGG',
            'DCD',
            'LLL'
        ], {
        G: 'minecraft:blaze_rod',
        D: 'the_vault:perfect_larimar',
        L: 'the_vault:chromatic_steel_ingot',
        C: 'rftoolsbase:machine_frame'

    }).id('rftoolspower:blazing_agitator')

    event.shaped(Item.of('rftoolspower:blazing_infuser'),
        [
            'GDG',
            'LCL',
            'GDG'
        ], {
        G: 'the_vault:chromatic_steel_ingot',
        D: 'minecraft:blaze_rod',
        L: 'the_vault:vault_diamond_block',
        C: 'rftoolsbase:machine_frame'
    }).id('rftoolspower:blazing_infuser')

    event.shaped(Item.of('rftoolspower:coalgenerator'),
        [
            'GDG',
            'GCG',
            'GDG'
        ], {
        G: 'the_vault:carbon',
        D: 'the_vault:perfect_larimar',
        C: 'rftoolsbase:machine_frame'
    }).id('rftoolspower:coalgenerator')

    event.shaped(Item.of('rftoolspower:power_core1'),
        [
            ' D ',
            'GCG',
            ' G '
        ], {
        G: 'minecraft:redstone',
        D: 'the_vault:vault_diamond',
        C: 'woldvaults:vault_essence_block'
    }).id('rftoolspower:power_core1')

    event.shaped(Item.of('rftoolspower:power_core2'),
        [
            'XDX',
            'GCG',
            'XGX'
        ], {
        G: 'minecraft:redstone',
        D: 'the_vault:perfect_larimar',
        C: 'woldvaults:vault_essence_block',
        X: 'the_vault:vault_essence'
    }).id('rftoolspower:power_core2')

    event.shaped(Item.of('rftoolspower:power_core3'),
        [
            'XDX',
            'GCG',
            'XGX'
        ], {
        G: 'the_vault:chromatic_steel_ingot',
        D: 'the_vault:extraordinary_larimar',
        C: 'woldvaults:vault_essence_block',
        X: 'woldvaults:vault_essence_block'
    }).id('rftoolspower:power_core3')

    event.shaped(Item.of('rftoolspower:dimensionalcell'),
        [
            'XDX',
            'GCG',
            'XGX'
        ], {
        G: 'the_vault:vault_diamond',
        D: 'the_vault:vault_diamond_block',
        C: 'rftoolspower:dimensionalcell_simple',
        X: 'woldvaults:vault_essence_block'
    }).id('rftoolspower:dimensionalcell')





})