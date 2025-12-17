onEvent("recipes", event => {
    event.shaped(Item.of('ars_nouveau:dull_trinket'),
        [
            ' I ',
            'IGI',
            ' I '
        ], {
        I: 'woldsvaults:chromatic_gold_nugget',
        G: 'ars_nouveau:source_gem'
    }).id('ars_nouveau:dull_trinket')

    event.shaped(Item.of('ars_nouveau:ring_of_potential'),
        [
            'III',
            'IGI',
            'III'
        ], {
        I: 'woldsvaults:chromatic_gold_nugget',
        G: 'ars_nouveau:source_gem'
    }).id('ars_nouveau:ring_of_potential')

    event.shaped(Item.of('ars_nouveau:blank_parchment'),
        [
            'III',
            'IGI',
            'III'
        ], {
        G: 'the_vault:magic_silk',
        I: 'ars_nouveau:magebloom_fiber'
    }).id('ars_nouveau:blank_parchment')

    event.shaped(Item.of('ars_nouveau:novice_spell_book'),
        [
            'UPK',
            'SBA',
            'WWW'
        ], {
        B: 'minecraft:book',
        P: 'the_vault:gem_pog',
        U: 'minecraft:iron_pickaxe',
        S: 'minecraft:iron_shovel',
        A: 'minecraft:iron_axe',
        K: 'minecraft:iron_sword',
        W: 'the_vault:wutodic_mass'
    }).id('ars_nouveau:novice_spell_book')

    event.shaped(Item.of('ars_nouveau:apprentice_spell_book'),
        [
            'BOD',
            'DDW',
            'WRR'
        ], {
        B: 'ars_nouveau:novice_spell_book',
        O: 'the_vault:black_chromatic_steel_ingot',
        D: 'the_vault:vault_diamond_block',
        W: 'the_vault:magic_silk_block',
        R: 'the_vault:gem_pog'
    }).id('ars_nouveau:apprentice_spell_book_upgrade')

    event.shaped(Item.of('ars_nouveau:archmage_spell_book'),
        [
            'BOX',
            'DDW',
            'WWR'
        ], {
        B: 'ars_nouveau:apprentice_spell_book',
        O: 'the_vault:echo_pog',
        D: 'woldsvaults:chromatic_gold_block',
        W: 'the_vault:hardened_wutodic_mass',
        R: 'minecraft:totem_of_undying',
        X: 'ars_nouveau:wilden_tribute'
    }).id('ars_nouveau:archmage_spell_book_upgrade')


    event.shaped(Item.of('ars_nouveau:dowsing_rod'),
        [
            ' I ',
            'D D'
        ], {
        I: 'woldsvaults:chromatic_gold_ingot',
        D: 'ars_nouveau:archwood_planks'
    }).id('ars_nouveau:dowsing_rod')

    event.shaped(Item.of('ars_nouveau:agronomic_sourcelink'),
        [
            'LGL',
            'DWD',
            'LGL'
        ], {
        L: 'the_vault:perfect_larimar',
        D: 'woldsvaults:chromatic_gold_ingot',
        W: 'minecraft:wheat',
        G: 'ars_nouveau:source_gem'
    }).id('ars_nouveau:agronomic_sourcelink')

    event.shaped(Item.of('ars_nouveau:volcanic_sourcelink'),
        [
            'LGL',
            'DWD',
            'LGL'
        ], {
        L: 'the_vault:perfect_larimar',
        D: 'woldsvaults:chromatic_gold_ingot',
        W: 'minecraft:lava_bucket',
        G: 'ars_nouveau:source_gem'
    }).id('ars_nouveau:volcanic_sourcelink')

    event.shaped(Item.of('ars_nouveau:alchemical_sourcelink'),
        [
            'LGL',
            'DWD',
            'LGL'
        ], {
        L: 'the_vault:perfect_larimar',
        D: 'woldsvaults:chromatic_gold_ingot',
        W: 'minecraft:brewing_stand',
        G: 'ars_nouveau:source_gem'
    }).id('ars_nouveau:alchemical_sourcelink')

    event.shaped(Item.of('ars_nouveau:mycelial_sourcelink'),
        [
            'LGL',
            'DWD',
            'LGL'
        ], {
        L: 'the_vault:perfect_larimar',
        D: 'woldsvaults:chromatic_gold_ingot',
        W: 'minecraft:mushroom_stew',
        G: 'ars_nouveau:source_gem'
    }).id('ars_nouveau:mycelial_sourcelink')

    event.shaped(Item.of('ars_nouveau:vitalic_sourcelink'),
        [
            'LGL',
            'DWD',
            'LGL'
        ], {
        L: 'the_vault:perfect_larimar',
        D: 'woldsvaults:chromatic_gold_ingot',
        W: 'minecraft:glistering_melon_slice',
        G: 'ars_nouveau:source_gem'
    }).id('ars_nouveau:vitalic_sourcelink')

    event.shaped(Item.of('ars_nouveau:source_jar'),
        [
            'SSS',
            'GLG',
            'SSS'
        ], {
        S: 'ars_nouveau:archwood_slab',
        G: '#forge:glass',
        L: 'the_vault:perfect_larimar'
    }).id('ars_nouveau:source_jar')

    event.shaped(Item.of('ars_nouveau:enchanting_apparatus'),
        [
            'SDS',
            'S S',
            'BBB'
        ], {
        S: 'woldsvaults:chromatic_gold_ingot',
        D: 'the_vault:perfect_wutodie',
        B: 'ars_nouveau:arcane_stone'
    }).id('ars_nouveau:enchanting_apparatus')

    event.shaped(Item.of('ars_nouveau:scribes_table'),
        [
            'SSS',
            'GLG',
            'G G'
        ], {
        S: 'ars_nouveau:archwood_slab',
        G: 'the_vault:driftwood',
        L: '#forge:logs/archwood'
    }).id('ars_nouveau:scribes_table')

    event.shaped(Item.of('ars_nouveau:relay'),
        [
            'G G',
            'GLG',
            'G G'
        ], {
        G: 'woldsvaults:chromatic_gold_ingot',
        L: 'ars_nouveau:source_gem_block'
    }).id('ars_nouveau:relay')


    event.shaped(Item.of('ars_nouveau:imbuement_chamber'),
        [
            'GIG',
            'GLG',
            'GIG'
        ], {
        G: 'ars_nouveau:archwood_planks',
        L: 'the_vault:perfect_larimar',
        I: 'woldsvaults:chromatic_gold_ingot'
    }).id('ars_nouveau:imbuement_chamber')

    event.shaped(Item.of('ars_nouveau:arcane_core'),
        [
            'GGG',
            'ILI',
            'GGG'
        ], {
        G: 'ars_nouveau:arcane_stone',
        L: 'the_vault:perfect_larimar',
        I: 'woldsvaults:chromatic_gold_ingot'
    }).id('ars_nouveau:arcane_core')


    event.shaped(Item.of('ars_nouveau:basic_spell_turret'),
        [
            'GGG',
            'GLI',
            'III'
        ], {
        G: 'ars_nouveau:source_gem',
        L: 'the_vault:chromatic_steel_block',
        I: 'woldsvaults:chromatic_gold_ingot'
    }).id('ars_nouveau:basic_spell_turret')


    event.remove({ id: 'ars_nouveau:mundane_belt' })
    event.remove({ id: 'ars_nouveau:belt_of_unstable_gifts' })
    event.remove({ id: 'ars_nouveau:belt_of_levitation' })
    event.remove({ id: 'ars_nouveau:wixie_charm' })
    event.shapeless('ars_nouveau:runic_chalk', ['ars_nouveau:manipulation_essence', 'ars_nouveau:magebloom_fiber', 'the_vault:magic_silk']).id('ars_nouveau:runic_chalk')
    event.shapeless('ars_nouveau:ritual_brazier', ['ars_nouveau:arcane_pedestal', 'ars_nouveau:source_gem_block', '3x woldsvaults:chromatic_gold_ingot', 'the_vault:hardened_wutodic_mass']).id('ars_nouveau:ritual_brazier')
    event.shapeless('ars_creo:starbuncle_wheel', ['ars_nouveau:starbuncle_charm', 'create:water_wheel', 'the_vault:vault_diamond_block']).id('ars_creo:starbuncle_wheel')
})