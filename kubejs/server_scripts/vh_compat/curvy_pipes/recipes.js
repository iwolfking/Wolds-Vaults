let tiers = [
    'tiny', 'small', 'medium', 'large', 'huge'
];

let types = [
    'item', 'fluid', 'energy',
];

onEvent("recipes", event => {
    event.remove({ mod: 'curvy_pipes' })

    types.forEach( type =>
        tiers.forEach( tier =>
            event.shaped(Item.of(`curvy_pipes:${tier}_${type}_pipe`, 16),
                [
                    'SMS',
                    'GTG',
                    'SMS'
                ], {
                    T: typeItem(type),
                    M: main(tier),
                    S: sub(tier),
                    G: gem(tier),
                })
        )
    )
    event.shaped(Item.of(`curvy_pipes:redstone_cable`, 16),
        [
            'III',
            'RRR',
            'III'
        ], {
            I: 'the_vault:chromatic_iron_ingot',
            R: 'minecraft:redstone'
        })
})

function gem(tier) {
    switch (tier) {
        case 'tiny' : return 'the_vault:gem_larimar'
        case 'small' : return 'the_vault:perfect_larimar'
        case 'medium' : return 'the_vault:perfect_larimar'
        case 'large' : return 'the_vault:extraordinary_larimar'
        case 'huge' : return 'the_vault:extraordinary_larimar'
    }
}
function main(tier) {
    switch (tier) {
        case 'tiny' : return 'the_vault:chromatic_iron_ingot'
        case 'small' : return 'woldsvaults:chromatic_gold_ingot'
        case 'medium' : return 'the_vault:chromatic_steel_ingot'
        case 'large' : return 'the_vault:black_chromatic_steel_ingot'
        case 'huge' : return 'the_vault:black_chromatic_steel_ingot'
    }
}

function sub(tier) {
    if (tier === 'large') {
        return 'the_vault:chromatic_steel_ingot'
    }
    return main(tier)
}

function typeItem(type) {
    switch (type) {
        case 'item' : return 'minecraft:hopper'
        case 'fluid' : return 'minecraft:bucket'
        case 'energy' : return 'minecraft:redstone_block'
    }
}