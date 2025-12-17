let removedOutputsSFM = [
    'sfm:manager',
    'sfm:cable',
    'sfm:disk',
    'sfm:labelgun'
];
onEvent("recipes", event => {
    removedOutputsSFM.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('sfm:manager'),
        [
            'CBC',
            'BRB',
            'CBC'
        ], {
        C: 'the_vault:chromatic_steel_block',
        B: 'sfm:cable',
        R: 'the_vault:echo_pog'

    })

    event.shaped(Item.of('sfm:cable', 16),
        [
            'CGC',
            'BRB',
            'CGC'
        ], {
        C: 'the_vault:chromatic_steel_ingot',
        B: 'the_vault:perfect_larimar',
        R: '#forge:chests',
        G: 'woldsvaults:chromatic_gold_ingot'
    })

    event.shaped(Item.of('sfm:disk'),
        [
            'CGC',
            'BRX',
            'LGL'
        ], {
        C: 'the_vault:magic_silk_block',
        B: 'the_vault:extraordinary_painite',
        X: 'the_vault:extraordinary_benitoite',
        R: 'minecraft:redstone_block',
        L: 'the_vault:vault_essence',
        G: 'minecraft:repeater'
    })

    event.shaped(Item.of('sfm:labelgun'),
        [
            ' GX',
            ' CB',
            'C  '
        ], {
        C: 'the_vault:driftwood',
        X: 'minecraft:oak_sign',
        B: 'minecraft:black_dye',
        G: 'minecraft:blue_dye'
    })


})