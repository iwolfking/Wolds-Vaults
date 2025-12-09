let removedOutputsDPP = [
    'davespotioneering:white_umbrella',
    'davespotioneering:orange_umbrella',
    'davespotioneering:magenta_umbrella',
    'davespotioneering:light_blue_umbrella',
    'davespotioneering:yellow_umbrella',
    'davespotioneering:lime_umbrella',
    'davespotioneering:pink_umbrella',
    'davespotioneering:gray_umbrella',
    'davespotioneering:light_gray_umbrella',
    'davespotioneering:cyan_umbrella',
    'davespotioneering:purple_umbrella',
    'davespotioneering:blue_umbrella',
    'davespotioneering:brown_umbrella',
    'davespotioneering:green_umbrella',
    'davespotioneering:red_umbrella',
    'davespotioneering:black_umbrella',
    'davespotioneering:gilded_umbrella',
    'davespotioneering:aged_umbrella'
];
onEvent("recipes", event => {
    removedOutputsDPP.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('davespotioneering:compound_brewing_stand'),
        [
            ' H ',
            'OSO',
            'DDD'
        ], {
        H: 'the_vault:extraordinary_wutodie',
        O: 'the_vault:black_chromatic_steel_ingot',
        S: 'minecraft:brewing_stand',
        D: 'the_vault:polished_vault_stone'
    }).id('davespotioneering:compound_brewing_stand')

    event.shaped(Item.of('davespotioneering:reinforced_cauldron'),
        [
            'GXG',
            'GCG',
            'GYG'
        ], {
        G: 'minecraft:glass_bottle',
        C: 'davespotioneering:netherite_gauntlet',
        X: 'the_vault:gem_pog',
        Y: 'minecraft:lever'
    }).id('davespotioneering:reinforced_cauldron')

    event.shaped(Item.of('davespotioneering:potioneer_gauntlet'),
        [
            'GXG',
            'GCG',
            'GXG'
        ], {
        G: 'woldvaults:chromatic_gold_ingot',
        C: 'minecraft:cauldron',
        X: 'the_vault:gem_pog'
    }).id('davespotioneering:potioneer_gauntlet')

    event.smithing('davespotioneering:netherite_gauntlet', 'davespotioneering:rudimentary_gauntlet', 'the_vault:black_chromatic_steel_ingot').id('minecraft:netherite_gauntlet_smithing')

})