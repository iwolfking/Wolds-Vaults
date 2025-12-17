let removedOutputsMAG = [
    'mysticalagriculture:inferium_farmland',
    'mysticalagriculture:prudentium_farmland',
    'mysticalagriculture:tertium_farmland',
    'mysticalagriculture:imperium_farmland',
    'mysticalagriculture:supremium_farmland',
    'mysticalagriculture:inferium_furnace',
    'mysticalagriculture:prudentium_furnace',
    'mysticalagriculture:tertium_furnace',
    'mysticalagriculture:imperium_furnace',
    'mysticalagriculture:supremium_furnace',
    'mysticalagriculture:infusion_pedestal',
    'mysticalagriculture:infusion_altar',
    'mysticalagriculture:machine_frame',
    'mysticalagriculture:basic_reprocessor',
    'mysticalagriculture:inferium_reprocessor',
    'mysticalagriculture:prudentium_reprocessor',
    'mysticalagriculture:tertium_reprocessor',
    'mysticalagriculture:imperium_reprocessor',
    'mysticalagriculture:supremium_reprocessor',
    'mysticalagriculture:inferium_helmet',
    'mysticalagriculture:soulium_seed_base',
    'mysticalagriculture:watering_can',
    'mysticalagriculture:prosperity_seed_base',
    'mysticalagriculture:air_agglomeratio',
    'mysticalagriculture:water_agglomeratio',
    'mysticalagriculture:fire_agglomeratio',
    'mysticalagriculture:earth_agglomeratio',
    'mysticalagriculture:nature_agglomeratio',
    'mysticalagriculture:dye_agglomeratio',
    'mysticalagriculture:nether_agglomeratio',
    'mysticalagriculture:coral_agglomeratio',
    'mysticalagriculture:honey_agglomeratio',
    'mysticalagriculture:prismarine_agglomeratio',
    'mysticalagriculture:end_agglomeratio',
    'mysticalagriculture:mystical_flower_agglomeratio'
];
onEvent("recipes", event => {
    removedOutputsMAG.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.forEachRecipe({ type: 'botanypots:crop', seed: 'mysticalagriculture:*_seeds' }, r => {
        if (r.json.get("results") == null) return
        let rObj = JSON.parse(r.json)
        rObj.results = rObj.results.filter((result) => { return !/mysticalagriculture:.*_seeds/.test(result.output.item) })
        r.json = rObj
    })



    event.remove({ output: /mysticalagriculture:.*_helmet/ })
    event.remove({ output: /mysticalagriculture:.*_chestplate/ })
    event.remove({ output: /mysticalagriculture:.*_leggings/ })
    event.remove({ output: /mysticalagriculture:.*_boots/ })
    event.remove({ output: /mysticalagriculture:.*_sword/ })
    event.remove({ output: /mysticalagriculture:.*_pickaxe/ })
    event.remove({ output: /mysticalagriculture:.*_shovel/ })
    event.remove({ output: /mysticalagriculture:.*_axe/ })
    event.remove({ output: /mysticalagriculture:.*_bow/ })
    event.remove({ output: /mysticalagriculture:.*_crossbow/ })
    event.remove({ id: 'mysticalagriculture:prosperity_ingot' })
    event.remove({ id: 'mysticalagriculture:inferium_gemstone' })
    event.remove({ id: 'mysticalagriculture:prudentium_gemstone' })
    event.remove({ id: 'mysticalagriculture:tertium_gemstone' })
    event.remove({ id: 'mysticalagriculture:imperium_gemstone' })
    event.remove({ id: 'mysticalagriculture:supremium_gemstone' })
    event.remove({ id: 'mysticalagriculture:soulium_gemstone' })

    event.shaped(Item.of('mysticalagriculture:inferium_essence'),
        [
            'EXE',
            'XVX',
            'EXE'
        ], {
        V: 'woldsvaults:vault_essence_block',
        X: 'the_vault:vault_diamond',
        E: 'the_vault:gem_larimar'
    })

    event.shaped(Item.of('mysticalagriculture:prosperity_shard'),
        [
            'EXE',
            'BVB',
            'EXE'
        ], {
        V: 'the_vault:extraordinary_larimar',
        X: 'botania:mana_diamond',
        E: 'the_vault:magic_silk_block',
        B: 'the_vault:perfect_benitoite'
    })

    event.shaped(Item.of('mysticalagriculture:inferium_gemstone'),
        [
            'EXE',
            'TVT',
            'EXE'
        ], {
        V: 'mysticalagriculture:prosperity_gemstone',
        X: 'woldsvaults:vault_essence_block',
        E: 'the_vault:extraordinary_larimar',
        T: 'mysticalagriculture:inferium_essence'
    })

    event.shaped(Item.of('mysticalagriculture:prudentium_gemstone'),
        [
            'EXE',
            'TVT',
            'EXE'
        ], {
        V: 'mysticalagriculture:prosperity_gemstone',
        X: 'woldsvaults:vault_essence_block',
        E: 'the_vault:extraordinary_larimar',
        T: 'mysticalagriculture:prudentium_essence'
    })

    event.shaped(Item.of('mysticalagriculture:tertium_gemstone'),
        [
            'EXE',
            'TVT',
            'EXE'
        ], {
        V: 'mysticalagriculture:prosperity_gemstone',
        X: 'woldsvaults:vault_essence_block',
        E: 'the_vault:extraordinary_larimar',
        T: 'mysticalagriculture:tertium_essence'
    })

    event.shaped(Item.of('mysticalagriculture:tertium_gemstone'),
        [
            'EXE',
            'TVT',
            'EXE'
        ], {
        V: 'mysticalagriculture:prosperity_gemstone',
        X: 'woldsvaults:vault_essence_block',
        E: 'the_vault:extraordinary_larimar',
        T: 'mysticalagriculture:tertium_essence'
    })

    event.shaped(Item.of('mysticalagriculture:imperium_gemstone'),
        [
            'EXE',
            'TVT',
            'EXE'
        ], {
        V: 'mysticalagriculture:prosperity_gemstone',
        X: 'woldsvaults:vault_essence_block',
        E: 'the_vault:extraordinary_larimar',
        T: 'mysticalagriculture:imperium_essence'
    })

    event.shaped(Item.of('mysticalagriculture:supremium_gemstone'),
        [
            'EXE',
            'TVT',
            'EXE'
        ], {
        V: 'mysticalagriculture:prosperity_gemstone',
        X: 'woldsvaults:vault_essence_block',
        E: 'the_vault:extraordinary_larimar',
        T: 'mysticalagriculture:supremium_essence'
    })

    event.shaped(Item.of('mysticalagriculture:soulium_gemstone'),
        [
            'EXE',
            'TVT',
            'EXE'
        ], {
        V: 'mysticalagriculture:prosperity_gemstone',
        X: 'woldsvaults:vault_essence_block',
        E: 'the_vault:extraordinary_larimar',
        T: 'mysticalagriculture:soulium_dust'
    })

    event.shaped(Item.of('mysticalagriculture:prosperity_ingot'),
        [
            ' X ',
            'XVX',
            ' X '
        ], {
        V: 'the_vault:chromatic_iron_ingot',
        X: 'mysticalagriculture:prosperity_shard'
    })

    event.shaped(Item.of('mysticalagriculture:prosperity_seed_base'),
        [
            'EXE',
            'XVX',
            'EXE'
        ], {
        V: '#forge:seeds',
        X: 'mysticalagriculture:prosperity_shard',
        E: 'the_vault:extraordinary_larimar'
    })

    event.shaped(Item.of('mysticalagriculture:inferium_farmland'),
        [
            'EXE',
            'XVX',
            'EXE'
        ], {
        V: 'minecraft:farmland',
        X: 'mysticalagriculture:inferium_essence',
        E: 'woldsvaults:vault_essence_block'
    })


    event.shaped(Item.of('mysticalagriculture:prudentium_farmland'),
        [
            'EXE',
            'XVX',
            'EXE'
        ], {
        V: 'mysticalagriculture:inferium_farmland',
        X: 'mysticalagriculture:prudentium_essence',
        E: 'woldsvaults:vault_essence_block'
    })

    event.shaped(Item.of('mysticalagriculture:tertium_farmland'),
        [
            'EXE',
            'XVX',
            'EXE'
        ], {
        V: 'mysticalagriculture:prudentium_farmland',
        X: 'mysticalagriculture:tertium_essence',
        E: 'woldsvaults:vault_essence_block'
    })

    event.shaped(Item.of('mysticalagriculture:imperium_farmland'),
        [
            'EXE',
            'XVX',
            'EXE'
        ], {
        V: 'mysticalagriculture:tertium_farmland',
        X: 'mysticalagriculture:imperium_essence',
        E: 'woldsvaults:vault_essence_block'
    })

    event.shaped(Item.of('mysticalagriculture:supremium_farmland'),
        [
            'EXE',
            'XVX',
            'EXE'
        ], {
        V: 'mysticalagriculture:imperium_farmland',
        X: 'mysticalagriculture:supremium_essence',
        E: 'woldsvaults:vault_essence_block'
    })

    event.shaped(Item.of('mysticalagriculture:inferium_furnace'),
        [
            'IEI',
            'IVI',
            'IBI'
        ], {
        V: 'minecraft:furnace',
        I: 'mysticalagriculture:inferium_ingot',
        E: 'mysticalagriculture:inferium_essence',
        B: 'mysticalagriculture:inferium_block'
    })

    event.shaped(Item.of('mysticalagriculture:prudentium_furnace'),
        [
            'IEI',
            'IVI',
            'IBI'
        ], {
        V: 'mysticalagriculture:inferium_furnace',
        I: 'mysticalagriculture:prudentium_ingot',
        E: 'mysticalagriculture:prudentium_essence',
        B: 'mysticalagriculture:prudentium_block'
    })

    event.shaped(Item.of('mysticalagriculture:tertium_furnace'),
        [
            'IEI',
            'IVI',
            'IBI'
        ], {
        V: 'mysticalagriculture:prudentium_furnace',
        I: 'mysticalagriculture:tertium_ingot',
        E: 'mysticalagriculture:tertium_essence',
        B: 'mysticalagriculture:tertium_block'
    })

    event.shaped(Item.of('mysticalagriculture:imperium_furnace'),
        [
            'IEI',
            'IVI',
            'IBI'
        ], {
        V: 'mysticalagriculture:tertium_furnace',
        I: 'mysticalagriculture:imperium_ingot',
        E: 'mysticalagriculture:imperium_essence',
        B: 'mysticalagriculture:imperium_block'
    })

    event.shaped(Item.of('mysticalagriculture:supremium_furnace'),
        [
            'IEI',
            'IVI',
            'IBI'
        ], {
        V: 'mysticalagriculture:imperium_furnace',
        I: 'mysticalagriculture:supremium_ingot',
        E: 'mysticalagriculture:supremium_essence',
        B: 'mysticalagriculture:supremium_block'
    })

    event.shapeless('mysticalagriculture:soulstone', ['the_vault:eternal_soul', 'minecraft:soul_sand', 'minecraft:stone'])

    event.shaped(Item.of('mysticalagriculture:infusion_pedestal'),
        [
            'IEI',
            'IVI',
            'IVI'
        ], {
        V: 'the_vault:chromatic_steel_block',
        I: 'woldsvaults:chromatic_gold_ingot',
        E: 'the_vault:extraordinary_painite'
    })

    event.shaped(Item.of('mysticalagriculture:infusion_altar'),
        [
            'IEI',
            ' V ',
            'BVB'
        ], {
        V: 'the_vault:chromatic_steel_block',
        I: 'woldsvaults:chromatic_gold_ingot',
        E: 'the_vault:extraordinary_painite',
        B: 'the_vault:chromatic_iron_block'
    })

    event.shaped(Item.of('mysticalagriculture:machine_frame'),
        [
            'EXE',
            'XVX',
            'EXE'
        ], {
        V: 'the_vault:black_chromatic_steel_block',
        X: 'the_vault:extraordinary_larimar',
        E: 'the_vault:chromatic_steel_ingot'
    })

    event.shaped(Item.of('mysticalagriculture:basic_reprocessor'),
        [
            'EXE',
            'TVT',
            'EXE'
        ], {
        V: 'mysticalagriculture:machine_frame',
        X: 'mysticalagriculture:soulium_ingot',
        E: 'the_vault:chromatic_steel_ingot',
        T: 'minecraft:diamond_hoe'
    })

    event.shaped(Item.of('mysticalagriculture:inferium_reprocessor'),
        [
            'IEI',
            'IVI',
            'IBI'
        ], {
        V: 'mysticalagriculture:basic_reprocessor',
        I: 'mysticalagriculture:inferium_ingot',
        E: 'mysticalagriculture:inferium_essence',
        B: 'mysticalagriculture:inferium_block'
    })

    event.shaped(Item.of('mysticalagriculture:prudentium_reprocessor'),
        [
            'IEI',
            'IVI',
            'IBI'
        ], {
        V: 'mysticalagriculture:inferium_reprocessor',
        I: 'mysticalagriculture:prudentium_ingot',
        E: 'mysticalagriculture:prudentium_essence',
        B: 'mysticalagriculture:prudentium_block'
    })

    event.shaped(Item.of('mysticalagriculture:tertium_reprocessor'),
        [
            'IEI',
            'IVI',
            'IBI'
        ], {
        V: 'mysticalagriculture:prudentium_reprocessor',
        I: 'mysticalagriculture:tertium_ingot',
        E: 'mysticalagriculture:tertium_essence',
        B: 'mysticalagriculture:tertium_block'
    })

    event.shaped(Item.of('mysticalagriculture:imperium_reprocessor'),
        [
            'IEI',
            'IVI',
            'IBI'
        ], {
        V: 'mysticalagriculture:tertium_reprocessor',
        I: 'mysticalagriculture:imperium_ingot',
        E: 'mysticalagriculture:imperium_essence',
        B: 'mysticalagriculture:imperium_block'
    })

    event.shaped(Item.of('mysticalagriculture:supremium_reprocessor'),
        [
            'IEI',
            'IVI',
            'IBI'
        ], {
        V: 'mysticalagriculture:imperium_reprocessor',
        I: 'mysticalagriculture:supremium_ingot',
        E: 'mysticalagriculture:supremium_essence',
        B: 'mysticalagriculture:supremium_block'
    })

    event.shaped(Item.of('mysticalagriculture:soulium_dust'),
        [
            'EPE',
            'XVX',
            'EPE'
        ], {
        V: 'the_vault:vault_essence',
        X: 'the_vault:eternal_soul',
        E: 'the_vault:vault_meat_block',
        P: 'the_vault:perfect_painite'
    })

    event.shaped(Item.of('mysticalagriculture:soulium_seed_base'),
        [
            'EXE',
            'XVX',
            'EXE'
        ], {
        V: 'mysticalagriculture:prosperity_seed_base',
        X: 'mysticalagriculture:soulium_dust',
        E: 'the_vault:vault_meat_block'
    })

    event.shaped(Item.of('mysticalagriculture:watering_can'),
        [
            ' BI',
            'IVI',
            ' I '
        ], {
        V: 'minecraft:bucket',
        I: 'the_vault:chromatic_iron_ingot',
        B: 'minecraft:bone_meal'
    })

    event.shaped(Item.of('woldsvaults:pogging_seed_base'),
        [
            'EXE',
            'XVX',
            'EXE'
        ], {
        V: 'mysticalagriculture:prosperity_seed_base',
        X: 'the_vault:gem_pog',
        E: 'the_vault:extraordinary_black_opal'
    })

    event.shaped(Item.of('woldsvaults:echoing_seed_base'),
        [
            'EXE',
            'XVX',
            'EXE'
        ], {
        V: 'woldsvaults:pogging_seed_base',
        X: 'the_vault:echo_pog',
        E: 'woldsvaults:pog_prism'
    })

    event.shaped(Item.of('cloudstorage:cloud', 16),
        [
            'EE ',
            'EE '
        ], {
        E: 'mysticalagriculture:air_essence'
    })

    event.shaped(Item.of('cloudstorage:balloon_bit', 16),
        [
            ' E ',
            ' E ',
            ' E '
        ], {
        E: 'mysticalagriculture:air_essence'
    })

    event.shaped(Item.of('mysticalagriculture:nature_agglomeratio'),
        [
            'EXE',
            'XCX',
            'EXE'
        ], {
        E: 'the_vault:vault_diamond',
        X: 'woldsvaults:vault_essence_block',
        C: 'botania:world_seed'
    })

    event.shaped(Item.of('mysticalagriculture:air_agglomeratio'),
        [
            'EXE',
            'XCX',
            'EXE'
        ], {
        E: 'the_vault:vault_diamond',
        X: 'woldsvaults:vault_essence_block',
        C: 'botania:rune_air'
    })

    event.shaped(Item.of('mysticalagriculture:earth_agglomeratio'),
        [
            'EXE',
            'XCX',
            'EXE'
        ], {
        E: 'the_vault:vault_diamond',
        X: 'woldsvaults:vault_essence_block',
        C: 'botania:rune_earth'
    })

    event.shaped(Item.of('mysticalagriculture:water_agglomeratio'),
        [
            'EXE',
            'XCX',
            'EXE'
        ], {
        E: 'the_vault:vault_diamond',
        X: 'woldsvaults:vault_essence_block',
        C: 'botania:rune_water'
    })

    event.shaped(Item.of('mysticalagriculture:fire_agglomeratio'),
        [
            'EXE',
            'XCX',
            'EXE'
        ], {
        E: 'the_vault:vault_diamond',
        X: 'woldsvaults:vault_essence_block',
        C: 'botania:rune_fire'
    })

    event.shaped(Item.of('mysticalagriculture:air_agglomeratio'),
        [
            'EXE',
            'XCX',
            'EXE'
        ], {
        E: 'the_vault:vault_diamond',
        X: 'woldsvaults:vault_essence_block',
        C: 'botania:rune_air'
    })

    event.shaped(Item.of('mysticalagriculture:dye_agglomeratio'),
        [
            'EXE',
            'XCX',
            'EXE'
        ], {
        E: 'the_vault:vault_diamond',
        X: 'woldsvaults:vault_essence_block',
        C: '#forge:dyes'
    })

    event.shaped(Item.of('mysticalagriculture:nether_agglomeratio'),
        [
            'EXE',
            'XCX',
            'EXE'
        ], {
        E: 'the_vault:vault_diamond',
        X: 'woldsvaults:vault_essence_block',
        C: 'botania:rune_wrath'
    })

    event.shaped(Item.of('mysticalagriculture:end_agglomeratio'),
        [
            'EXE',
            'XCX',
            'EXE'
        ], {
        E: 'the_vault:vault_diamond',
        X: 'woldsvaults:vault_essence_block',
        C: 'botania:rune_envy'
    })

    event.shaped(Item.of('mysticalagriculture:mystical_flower_agglomeratio'),
        [
            'EXE',
            'XCX',
            'EXE'
        ], {
        E: 'the_vault:vault_diamond',
        X: 'woldsvaults:vault_essence_block',
        C: '#botania:mystical_flowers'
    })

    event.shaped(Item.of('mysticalagriculture:prismarine_agglomeratio'),
        [
            'EXE',
            'XCX',
            'EXE'
        ], {
        E: 'the_vault:vault_diamond',
        X: 'woldsvaults:vault_essence_block',
        C: 'botania:rune_greed'
    })

    event.shaped(Item.of('mysticalagriculture:honey_agglomeratio'),
        [
            'EXE',
            'XCX',
            'EXE'
        ], {
        E: 'the_vault:vault_diamond',
        X: 'woldsvaults:vault_essence_block',
        C: 'botania:rune_autumn'
    })

    event.shaped(Item.of('mysticalagriculture:coral_agglomeratio'),
        [
            'EXE',
            'XCX',
            'EXE'
        ], {
        E: 'the_vault:vault_diamond',
        X: 'woldsvaults:vault_essence_block',
        C: 'botania:rune_summer'
    })

})