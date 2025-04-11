onEvent("recipes", event => {
    event.shapeless('occultism:datura_seeds', ['minecraft:wheat_seeds', 'the_vault:eternal_soul', 'the_vault:vault_essence']).id('occultism:datura_seeds')

    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": [
            {
                "item": "the_vault:vault_diamond"
            }
        ],
        "result": {
            "item": "occultism:spirit_attuned_gem"
        }
    }).id('occultism:spirit_fire/spirit_attuned_gem')

    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": [
            {
                "item": "the_vault:carbon"
            }
        ],
        "result": {
            "item": "occultism:purified_ink"
        }
    }).id('occultism:spirit_fire/purified_ink')

    event.custom({
        "type": "occultism:spirit_fire",
        "ingredient": [
            {
                "item": "minecraft:ancient_debris"
            }
        ],
        "result": {
            "item": "occultism:raw_iesnium"
        }
    }).id('occultism:spirit_fire/raw_iesnium')


    event.shaped(Item.of('occultism:chalk_white_impure'),
        [
            'GAE',
            'GAE',
            'GAE'
        ], {
        G: 'occultism:burnt_otherstone',
        A: 'occultism:otherworld_ashes',
        E: 'the_vault:vault_essence'
    }).id('occultism:crafting/chalk_white_impure')

    event.shaped(Item.of('occultism:spirit_attuned_crystal'),
        [
            ' C ',
            'CPC',
            ' C '
        ], {
        C: 'occultism:spirit_attuned_gem',
        P: 'the_vault:gem_pog'
    }).id('occultism:crafting/spirit_attuned_crystal')


    event.shaped(Item.of('occultism:divination_rod'),
        [
            'SGS',
            'S S',
            ' S '
        ], {
        G: 'occultism:spirit_attuned_gem',
        S: 'the_vault:driftwood'
    }).id('occultism:crafting/divination_rod')

    event.shaped(Item.of('occultism:butcher_knife'),
        [
            ' IS',
            'IS ',
            'S  '
        ], {
        I: 'the_vault:chromatic_iron_ingot',
        S: 'the_vault:driftwood'
    }).id('occultism:crafting/butcher_knife')

    event.shaped(Item.of('occultism:iesnium_pickaxe'),
        [
            'ILI',
            ' S ',
            ' S '
        ], {
        I: 'occultism:iesnium_ingot',
        S: 'the_vault:driftwood',
        L: 'the_vault:extraordinary_larimar'
    }).id('occultism:crafting/iesnium_pickaxe')

    event.shaped(Item.of('occultism:golden_sacrificial_bowl'),
        [
            'GGG',
            'GBG',
            'GGG'
        ], {
        G: 'the_vault:chromatic_gold_ingot',
        B: 'occultism:sacrificial_bowl'
    }).id('occultism:crafting/golden_sacrificial_bowl')

    event.shaped(Item.of('occultism:wormhole_frame'),
        [
            ' G ',
            'GBG',
            ' G '
        ], {
        G: 'the_vault:chromatic_gold_ingot',
        B: 'occultism:otherstone_frame'
    }).id('occultism:crafting/wormhole_frame')

    event.shaped(Item.of('occultism:storage_remote_inert'),
        [
            'GTG',
            'LGL',
            'BBB'
        ], {
        G: 'the_vault:chromatic_gold_ingot',
        T: 'occultism:otherstone_tablet',
        L: 'the_vault:extraordinary_larimar',
        B: 'minecraft:stone_button'
    }).id('occultism:crafting/storage_remote_inert')

    event.shaped(Item.of('occultism:lens_frame'),
        [
            'SSS',
            'IXI',
            'SSS'
        ], {
        I: '#forge:ingots/silver',
        S: 'occultism:otherstone',
        X: 'the_vault:wutodic_silver_ingot'
    }).id('occultism:crafting/lens_frame')

    event.shaped(Item.of('occultism:magic_lamp_empty'),
        [
            'PI ',
            'IXI',
            ' II'
        ], {
        I: 'the_vault:wutodic_silver_ingot',
        X: 'occultism:iesnium_ingot',
        P: 'the_vault:gem_pog'
    }).id('occultism:crafting/magic_lamp_empty')

    event.shaped(Item.of('occultism:sacrificial_bowl'),
        [
            'S S',
            'GGG'
        ], {
        S: 'the_vault:perfect_black_opal',
        G: 'occultism:otherstone'
    }).id('occultism:crafting/sacrificial_bowl')

    event.shaped(Item.of('occultism:candle_white'),
        [
            'S',
            'T',
            'M'
        ], {
        S: 'minecraft:string',
        T: 'occultism:tallow',
        M: 'the_vault:magic_silk'
    }).id('occultism:crafting/candle_white')

    event.shapeless('occultism:chalk_red_impure', ['occultism:chalk_white_impure', 'occultism:afrit_essence', 'minecraft:blaze_powder', 'the_vault:perfect_painite']).id('occultism:crafting/chalk_red_impure')
    event.shapeless('occultism:chalk_gold_impure', ['occultism:chalk_white_impure', '#forge:dusts/gold', 'minecraft:glowstone_dust', 'the_vault:chromatic_gold_ingot']).id('occultism:crafting/chalk_gold_impure')
    event.shapeless('occultism:chalk_purple_impure', ['occultism:chalk_white_impure', '2x #forge:dusts/obsidian', 'occultism:crushed_end_stone', 'the_vault:gem_echo']).id('occultism:crafting/chalk_purple_impure')
})