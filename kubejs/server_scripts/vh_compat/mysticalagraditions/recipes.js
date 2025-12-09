let removedOutputsMAGA = [
    'mysticalagradditions:insanium_farmland',
    'mysticalagradditions:nitro_crystal_crux',
    'mysticalagradditions:dragon_egg_crux',
    'mysticalagradditions:gaia_spirit_crux',
    'mysticalagradditions:nether_star_crux'
];
onEvent("recipes", event => {
    removedOutputsMAGA.forEach(id => {
        event.remove({ 'output': `${id}` })
    })




    event.remove({ output: /mysticalagradditions:.*_apple/ })
    event.remove({ output: /mysticalagradditions:.*_paxel/ })

    event.shaped(Item.of('mysticalagradditions:insanium_farmland'),
        [
            'EXE',
            'XVX',
            'EXE'
        ], {
        V: 'mysticalagriculture:supremium_farmland',
        X: 'mysticalagriculture:supremium_essence',
        E: 'compressium:vault_essence_block_1'
    })

    event.shaped(Item.of('mysticalagradditions:nether_star_crux'),
        [
            'EYE',
            'XVX',
            'EYE'
        ], {
        V: 'woldsvaults:extraordinary_pog_prism',
        X: 'mysticalagradditions:withering_soul',
        Y: 'minecraft:nether_star',
        E: 'mysticalagradditions:insanium_essence'
    })

    event.shaped(Item.of('mysticalagradditions:dragon_egg_crux'),
        [
            'EYE',
            'XVX',
            'EYE'
        ], {
        V: 'woldsvaults:extraordinary_pog_prism',
        X: 'mysticalagradditions:dragon_scale',
        Y: 'the_vault:black_chromatic_steel_block',
        E: 'mysticalagradditions:insanium_essence'
    })

    event.shaped(Item.of('mysticalagradditions:gaia_spirit_crux'),
        [
            'EYE',
            'XVX',
            'EXE'
        ], {
        V: 'woldsvaults:extraordinary_pog_prism',
        X: 'botania:gaia_ingot',
        Y: 'botania:terrasteel_block',
        E: 'mysticalagradditions:insanium_essence'
    })

    event.shaped(Item.of('mysticalagradditions:nitro_crystal_crux'),
        [
            'EYE',
            'XVX',
            'EYE'
        ], {
        V: 'woldsvaults:extraordinary_pog_prism',
        X: 'the_vault:omega_pog',
        Y: 'powah:crystal_nitro',
        E: 'mysticalagradditions:insanium_essence'
    })
})