onEvent('recipes', event => {



    //Seals
    event.shaped(Item.of('the_vault:crystal_seal_unhinged'),
        [
            'XGX',
            'XRX',
            'XBX'
        ], {
        G: 'the_vault:packed_vault_meat_block',
        X: 'the_vault:dreamstone',
        R: 'the_vault:crystal_seal_hunter',
        B: 'the_vault:extraordinary_painite'
    }).id('woldsvaults:crystal_seal_unhinged')

    event.shaped(Item.of('the_vault:crystal_seal_spirits'),
        [
            'XGX',
            'XRX',
            'XBX'
        ], {
        G: 'minecraft:scaffolding',
        X: 'the_vault:eternal_soul',
        R: 'the_vault:crystal_seal_scout',
        B: 'the_vault:extraordinary_wutodie'
    }).id('woldsvaults:crystal_seal_spirits')

    event.shaped(Item.of('the_vault:crystal_seal_architect'),
        [
            'LGL',
            'XRX',
            'LBL'
        ], {
        G: 'minecraft:scaffolding',
        X: 'the_vault:wutodic_silver_ingot',
        R: 'the_vault:crystal_seal_empty',
        B: 'the_vault:perfect_larimar',
        L: 'the_vault:vault_essence'
    }).id('woldsvaults:crystal_seal_architect')

    event.shaped(Item.of('the_vault:crystal_seal_enchanter'),
        [
            'XGX',
            'XRX',
            'XBX'
        ], {
        G: 'minecraft:enchanting_table',
        X: 'the_vault:vault_essence_1',
        R: 'the_vault:crystal_seal_sage',
        B: 'the_vault:extraordinary_alexandrite'
    }).id('woldsvaults:crystal_seal_enchanter')

    event.shaped(Item.of('the_vault:crystal_seal_titan'),
        [
            'XGX',
            'XRX',
            'XBX'
        ], {
        G: 'minecraft:diamond_sword',
        X: 'the_vault:vault_essence_1',
        R: 'the_vault:crystal_seal_executioner',
        B: 'the_vault:vault_diamond_block'
    }).id('woldsvaults:crystal_seal_titan')

    event.shaped(Item.of('the_vault:crystal_seal_doomsayer'),
        [
            'XGX',
            'XRX',
            'XBX'
        ], {
        G: 'minecraft:soul_campfire',
        X: 'the_vault:vault_essence_1',
        R: 'the_vault:crystal_seal_prophet',
        B: 'the_vault:extraordinary_alexandrite'
    }).id('woldsvaults:crystal_seal_doomsayer')

    event.shaped(Item.of('the_vault:crystal_seal_trial_chamber'),
        [
            'XGX',
            'XRX',
            'XBX'
        ], {
        G: 'minecraft:wooden_sword',
        X: 'the_vault:vault_stone',
        R: 'the_vault:vault_rock',
        B: 'minecraft:copper_ingot'
    }).id('woldsvaults:crystal_seal_trial_chamber')

    // event.shaped(Item.of('the_vault:augment_box'),
    //     [
    //         'GXG',
    //         'XRX',
    //         'GXG'
    //     ], {
    //     G: 'the_vault:gem_larimar',
    //     R: 'the_vault:vault_essence_1',
    //     X: 'the_vault:augment'
    // }).id('woldsvaults:augment_box')

    event.shaped(Item.of('woldsvaults:inscription_box'),
        [
            'GXG',
            'XRX',
            'GXG'
        ], {
        G: 'the_vault:wutodic_mass',
        R: 'the_vault:gem_pog',
        X: 'the_vault:inscription'
    }).id('woldsvaults:inscription_box')

    // event.shaped(Item.of('the_vault:faceted_focus'),
    //     [
    //         'GXG',
    //         'XRX',
    //         'GXG'
    //     ], {
    //     G: 'the_vault:vault_diamond',
    //     R: 'the_vault:amplifying_focus',
    //     X: 'the_vault:faceted_focus'
    // })

    event.shaped(Item.of('the_vault:pog_prism'),
        [
            'ABC',
            'XRX',
            'DEF'
        ], {
        A: 'the_vault:perfect_larimar',
        B: 'the_vault:perfect_benitoite',
        C: 'the_vault:perfect_alexandrite',
        D: 'the_vault:perfect_painite',
        E: 'the_vault:perfect_wutodie',
        F: 'the_vault:perfect_black_opal',
        R: 'the_vault:gem_echo',
        X: 'the_vault:gem_pog'
    }).id('woldsvaults:pog_prism')

    event.shaped(Item.of('woldsvaults:extraordinary_pog_prism'),
        [
            'CAE',
            'XRX',
            'DAF'
        ], {
        A: 'the_vault:echo_pog',
        C: 'the_vault:extraordinary_alexandrite',
        D: 'the_vault:extraordinary_painite',
        E: 'the_vault:extraordinary_wutodie',
        F: 'the_vault:extraordinary_black_opal',
        R: 'the_vault:extraordinary_echo_gem',
        X: 'the_vault:pog_prism'
    }).id('woldsvaults:extraordinary_pog_prism')

    event.shaped(Item.of('the_vault:orb_frame'),
        [
            'SXE',
            'XRX',
            'VXM'
        ], {
        X: 'the_vault:extraordinary_black_opal',
        R: 'the_vault:omega_pog',
        S: 'the_vault:sublime_vault_substance',
        E: 'the_vault:sublime_vault_elixir',
        M: 'the_vault:memory_crystal',
        V: 'the_vault:sublime_vault_vision'
    }).id('woldsvaults:orb_frame')


    event.shapeless('botania:uninfused_terrasteel_ingot', ['botania:manasteel_ingot', 'botania:mana_pearl', 'botania:mana_diamond', 'the_vault:vault_essence', 'the_vault:vault_diamond', 'the_vault:chromatic_steel_ingot'])

    event.shaped(Item.of('the_vault:vault_salvager'),
        [
            '   ',
            'X X',
            'GBG'
        ], {
        G: 'the_vault:black_chromatic_steel_ingot',
        X: 'the_vault:vault_recycler',
        B: 'the_vault:echo_pog'
    }).id('woldsvaults:vault_salvager')



    //Smashed Vault Gem
    event.shapeless('the_vault:smashed_vault_gem_cluster', ['4x the_vault:smashed_vault_gem']).id('woldsvaults:smashed_gem_cluster')
    event.shapeless('4x the_vault:smashed_vault_gem', ['the_vault:smashed_vault_gem_cluster']).id('woldsvaults:smashed_vault_gem')


    //Gem Blocks
    //event.shapeless('the_vault:block_gem_larimar', ['8x the_vault:gem_larimar'])
    //event.shapeless('the_vault:block_gem_benitoite', ['8x the_vault:gem_benitoite'])
    //event.shapeless('the_vault:block_gem_painite', ['8x the_vault:gem_painite'])
    //event.shapeless('the_vault:block_gem_alexandrite', ['8x the_vault:gem_alexandrite'])
    //event.shapeless('the_vault:block_gem_wutodie', ['8x the_vault:gem_wutodie'])
    //event.shapeless('the_vault:block_gem_black_opal', ['8x the_vault:gem_black_opal'])
    //event.shapeless('the_vault:block_gem_echo', ['8x the_vault:gem_echo'])

    //event.shapeless('the_vault:block_gem_sparkletine', ['8x the_vault:gem_sparkletine'])
    //event.shapeless('the_vault:block_gem_iskallium', ['8x the_vault:gem_iskallium'])
    //event.shapeless('the_vault:block_gem_ashium', ['8x the_vault:gem_ashium'])
    //event.shapeless('the_vault:block_gem_xenium', ['8x the_vault:gem_xenium'])
    //event.shapeless('the_vault:block_gem_upaline', ['8x the_vault:gem_upaline'])
    //event.shapeless('the_vault:block_gem_gorginite', ['8x the_vault:gem_gorginite'])
    //event.shapeless('the_vault:block_gem_petzanite', ['8x the_vault:gem_petzanite'])
    //event.shapeless('the_vault:block_gem_tubium', ['8x the_vault:gem_tubium'])
    //event.shapeless('the_vault:block_gem_bomignite', ['8x the_vault:gem_bomignite'])

    //event.shapeless('8x the_vault:gem_larimar', ['the_vault:block_gem_larimar'])
    //event.shapeless('8x the_vault:gem_benitoite', ['the_vault:block_gem_benitoite'])
    //event.shapeless('8x the_vault:gem_alexandrite', ['the_vault:block_gem_alexandrite'])
    //event.shapeless('8x the_vault:gem_painite', ['the_vault:block_gem_painite'])
    //event.shapeless('8x the_vault:gem_wutodie', ['the_vault:block_gem_wutodie'])
    //event.shapeless('8x the_vault:gem_black_opal', ['the_vault:block_gem_black_opal'])
    //event.shapeless('8x the_vault:gem_echo', ['the_vault:block_gem_echo'])

    //event.shapeless('8x the_vault:gem_sparkletine', ['the_vault:block_gem_sparkletine'])
    //event.shapeless('8x the_vault:gem_iskallium', ['the_vault:block_gem_iskallium'])
    //event.shapeless('8x the_vault:gem_ashium', ['the_vault:block_gem_ashium'])
    //event.shapeless('8x the_vault:gem_xenium', ['the_vault:block_gem_xenium'])
    //event.shapeless('8x the_vault:gem_upaline', ['the_vault:block_gem_upaline'])
    //event.shapeless('8x the_vault:gem_gorginite', ['the_vault:block_gem_gorginite'])
    //event.shapeless('8x the_vault:gem_petzanite', ['the_vault:block_gem_petzanite'])
    //event.shapeless('8x the_vault:gem_tubium', ['the_vault:block_gem_tubium'])
    //event.shapeless('8x the_vault:gem_bomignite', ['the_vault:block_gem_bomignite'])

    event.shaped(Item.of('the_vault:block_gem_wutodie'),
        [
            ' X ',
            'XOX',
            ' X '
        ], {
        X: 'the_vault:gem_wutodie',
        O: 'the_vault:chromatic_iron_block'
    }).id('the_vault:block_gem_wutodie')


    //Chromatic Gold
    event.shapeless('the_vault:chromatic_gold_ingot', ['2x minecraft:gold_ingot', 'the_vault:vault_essence_1', 'the_vault:magic_silk']).id('woldsvaults:chromatic_gold_ingot')
    event.shapeless('9x the_vault:chromatic_gold_nugget', ['the_vault:chromatic_gold_ingot']).id('woldsvaults:chromatic_gold_nugget')
    event.shapeless('the_vault:chromatic_gold_ingot', ['9x the_vault:chromatic_gold_nugget']).id('woldsvaults:chromatic_gold_from_nugget')
    event.shapeless('9x the_vault:chromatic_gold_ingot', ['the_vault:chromatic_gold_block']).id('woldsvaults:chromatic_gold_from_block')
    event.shapeless('the_vault:chromatic_gold_block', ['9x the_vault:chromatic_gold_ingot']).id('woldsvaults:chromatic_gold_block')

    //Vault Ingot Stuff
    event.shapeless('the_vault:vault_ingot', ['the_vault:chromatic_iron_ingot', 'the_vault:chromatic_steel_ingot', 'the_vault:chromatic_gold_ingot', 'the_vault:smashed_vault_gem_cluster']).id('woldsvaults:vault_ingot')

    event.shapeless('woldsvaults:arcane_shard', ['9x woldsvaults:arcane_essence']).id('woldsvaults:arcane_shard')

    event.shaped(Item.of('woldsvaults:expertise_orb'),
        [
            'XXX',
            'XOX',
            'XXX'
        ], {
        X: 'woldsvaults:arcane_shard',
        O: 'the_vault:orb_frame'
    }).id('woldsvaults:expertise_orb')

    // event.shaped(Item.of('woldsvaults:waning_augmenter'),
    //     [
    //         'XTX',
    //         'TOT',
    //         'XTX'
    //     ], {
    //     X: 'the_vault:waning_focus',
    //     O: 'the_vault:pog_prism',
    //     T: 'the_vault:black_chromatic_steel_ingot'
    // })

    // event.shaped(Item.of('woldsvaults:waxing_augmenter'),
    //     [
    //         'XTX',
    //         'TOT',
    //         'XTX'
    //     ], {
    //     X: 'the_vault:waxing_focus',
    //     O: 'the_vault:pog_prism',
    //     T: 'the_vault:black_chromatic_steel_ingot'
    // })

    event.shaped(Item.of('woldsvaults:repair_augmenter'),
        [
            'XTX',
            'TOT',
            'XTX'
        ], {
        X: 'the_vault:resilient_focus',
        O: 'the_vault:pog_prism',
        T: 'the_vault:black_chromatic_steel_ingot'
    }).id('woldsvaults:repair_augmenter')


    event.shaped(Item.of('woldsvaults:vault_rock_candy'),
        [
            'XSX',
            'XOX',
            'XSX'
        ], {
        X: 'the_vault:vault_rock',
        O: 'the_vault:vault_sweets',
        S: 'minecraft:sugar'
    }).id('woldsvaults:vault_rock_candy')

    event.shaped(Item.of('woldsvaults:mercy_orb'),
        [
            'XSX',
            'SOS',
            'XSX'
        ], {
        X: 'the_vault:gem_painite',
        O: 'minecraft:pink_wool',
        S: 'the_vault:cluster_gorginite'
    }).id('woldsvaults:mercy_orb')

    event.shaped(Item.of('woldsvaults:crystal_reinforcement'),
        [
            'YXY',
            'OOO',
            'YSY'
        ], {
        X: 'the_vault:omega_pog_1',
        S: 'the_vault:echo_pog_1',
        Y: 'woldsvaults:extraordinary_pog_prism',
        O: 'the_vault:wold_star_chunk',
    }).id('woldsvaults:crystal_reinforcement')

    event.shaped(Item.of('woldsvaults:resonating_reinforcement'),
        [
            'SXS',
            'YOY',
            'SXS'
        ], {
        X: 'the_vault:pog_prism',
        Y: 'the_vault:chromatic_steel_block',
        O: 'the_vault:hardened_wutodic_mass',
        S: 'the_vault:black_chromatic_steel_ingot'
    }).id('woldsvaults:resonating_reinforcement')

    //placeholder recipe
    event.shaped(Item.of('woldsvaults:uber_chaos_catalyst'),
        [
            'CCC',
            'COC',
            'CCC'
        ], {
        C: 'the_vault:vault_catalyst_chaos',
        O: 'woldsvaults:heart_of_chaos'
    }).id('woldsvaults:uber_chaos_catalyst')

    event.shaped(Item.of('the_vault:memory_powder'),
        [
            'CCC',
            'COC',
            'CCC'
        ], {
        C: 'the_vault:knowledge_star_essence',
        O: 'the_vault:perfect_benitoite'
    }).id('woldsvaults:memory_powder')

    event.shaped(Item.of('the_vault:red_vault_essence'),
        [
            'CCC',
            'COC',
            'CCC'
        ], {
        C: 'the_vault:vault_essence',
        O: 'the_vault:perfect_painite'
    }).id('the_vault:memory_shard')

    event.shaped(Item.of('the_vault:memory_shard'),
        [
            'CCC',
            'COC',
            'CCC'
        ], {
        C: 'the_vault:memory_powder',
        O: 'the_vault:perfect_benitoite'
    }).id('the_vault:red_vault_essence')

    event.shaped(Item.of('the_vault:sublime_vault_substance'),
        [
            'CAC',
            'DOD',
            'CAC'
        ], {
        C: 'the_vault:extraordinary_painite',
        A: 'the_vault:extraordinary_alexandrite',
        D: 'the_vault:vault_essence_1',
        O: 'the_vault:packed_vault_meat_block'
    }).id('the_vault:sublime_vault_substance')

    event.shaped(Item.of('the_vault:sublime_vault_vision'),
        [
            'CDC',
            'DOD',
            'CDC'
        ], {
        C: 'the_vault:mystical_powder',
        D: 'the_vault:dreamstone',
        O: 'the_vault:pog_prism'
    }).id('the_vault:sublime_vault_vision')

    event.shaped(Item.of('the_vault:sublime_vault_elixir'),
        [
            'CDC',
            'DOD',
            'CDC'
        ], {
        C: 'the_vault:vault_diamond_block',
        D: 'the_vault:hardened_wutodic_mass',
        O: 'minecraft:glass_bottle'
    }).id('the_vault:sublime_vault_elixir')

    event.shaped(Item.of('woldsvaults:heart_of_chaos'),
        [
            'BMB',
            'EXE',
            'BUB'
        ], {
        X: 'the_vault:sublime_vault_substance',
        E: 'the_vault:sublime_vault_elixir',
        M: 'the_vault:memory_crystal',
        U: 'the_vault:pog_prism',
        B: 'the_vault:black_chromatic_steel_ingot'
    }).id('woldsvaults:heart_of_chaos')


})