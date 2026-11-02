onEvent("recipes", event => {

    event.shaped(Item.of('justdirethings:gooblock_tier1'),
        [
            'SRS',
            'PFP',
            'SRS'
        ], {
        S: 'minecraft:clay',
        R: 'the_vault:vault_sweets_block',
        P: 'the_vault:vault_meat_block',
        F: 'minecraft:dirt'
    }).id('justdirethings:gooblock_tier1')

    event.shaped(Item.of('justdirethings:gooblock_tier2'),
        [
            'SRS',
            'PFP',
            'SRS'
        ], {
        S: 'minecraft:blaze_powder',
        R: 'woldsvaults:vault_essence_block',
        P: 'the_vault:vault_diamond',
        F: 'justdirethings:gooblock_tier1'
    }).id('justdirethings:gooblock_tier2')

    event.shaped(Item.of('justdirethings:gooblock_tier3'),
        [
            'SRS',
            'PFP',
            'SRS'
        ], {
        S: 'the_vault:gem_echo',
        R: 'minecraft:end_stone',
        P: 'the_vault:void_liquid_bucket',
        F: 'justdirethings:gooblock_tier2'
    }).id('justdirethings:gooblock_tier3')

    event.replaceIngredient({ id: 'justdirethings:gooblock_tier3' }, 'the_vault:void_liquid_bucket', Item.of('the_vault:void_liquid_bucket').replaceIngredient('minecraft:bucket'))

    event.shaped(Item.of('justdirethings:gooblock_tier4'),
        [
            'SPS',
            'PFP',
            'SRS'
        ], {
        S: 'woldsvaults:carbon_block',
        R: 'the_vault:echo_pog',
        P: 'the_vault:black_chromatic_steel_ingot',
        F: 'justdirethings:gooblock_tier3'
    }).id('justdirethings:gooblock_tier4')

    event.shaped(Item.of('justdirethings:itemcollector'),
        [
            ' R ',
            'PFP',
            'SSS'
        ], {
        S: 'justdirethings:ferricore_ingot',
        R: 'the_vault:vault_diamond',
        P: 'minecraft:hopper',
        F: 'minecraft:ender_pearl'
    }).id('justdirethings:itemcollector')

    event.shaped(Item.of('justdirethings:blockbreakert1'),
        [
            'SRS',
            'PFP',
            'STS'
        ], {
        S: 'justdirethings:ferricore_ingot',
        R: 'the_vault:vault_diamond_block',
        P: 'the_vault:vault_ingot',
        F: 'minecraft:observer',
        T: 'woldsvaults:vault_essence_block'
    }).id('justdirethings:blockbreakert1')

    event.shaped(Item.of('justdirethings:blockbreakert2'),
        [
            'SRS',
            'RFR',
            'STS'
        ], {
        S: 'justdirethings:celestigem',
        R: 'minecraft:ender_eye',
        F: 'justdirethings:blockbreakert1',
        T: 'woldsvaults:vault_essence_block'
    }).id('justdirethings:blockbreakert2')


    event.shaped(Item.of('justdirethings:blockplacert1'),
        [
            'SRS',
            'PFP',
            'STS'
        ], {
        S: 'justdirethings:ferricore_ingot',
        R: 'the_vault:vault_diamond_block',
        P: 'the_vault:vault_ingot',
        F: 'minecraft:dispenser',
        T: 'woldsvaults:vault_essence_block'
    }).id('justdirethings:blockplacert1')

    event.shaped(Item.of('justdirethings:blockplacert2'),
        [
            'SRS',
            'RFR',
            'STS'
        ], {
        S: 'justdirethings:celestigem',
        R: 'minecraft:ender_eye',
        F: 'justdirethings:blockplacert1',
        T: 'woldsvaults:vault_essence_block'
    }).id('justdirethings:blockplacert2')

    event.shaped(Item.of('justdirethings:clickert1'),
        [
            'SRS',
            'PFP',
            'STS'
        ], {
        S: 'justdirethings:ferricore_ingot',
        R: 'the_vault:vault_diamond_block',
        P: 'the_vault:vault_ingot',
        F: 'minecraft:dispenser',
        T: 'woldsvaults:chroma_core'
    }).id('justdirethings:clickert1')

    event.shaped(Item.of('justdirethings:clickert2'),
        [
            'SRS',
            'RFR',
            'STS'
        ], {
        S: 'justdirethings:celestigem',
        R: 'minecraft:ender_eye',
        F: 'justdirethings:clickert1',
        T: 'woldsvaults:vault_essence_block'
    }).id('justdirethings:clickert2')


    event.shaped(Item.of('justdirethings:sensort1'),
        [
            'SRS',
            'PFP',
            'STS'
        ], {
        S: 'justdirethings:ferricore_ingot',
        R: 'minecraft:ender_eye',
        P: 'the_vault:chromatic_iron_ingot',
        F: 'minecraft:observer',
        T: 'the_vault:vault_essence'
    }).id('justdirethings:sensort1')

    event.shaped(Item.of('justdirethings:sensort2'),
        [
            'SRS',
            'RFR',
            'STS'
        ], {
        S: 'justdirethings:celestigem',
        R: 'minecraft:ender_eye',
        F: 'justdirethings:sensort1',
        T: 'woldsvaults:vault_essence_block'
    }).id('justdirethings:sensort2')

    event.shaped(Item.of('justdirethings:sensort1'),
        [
            'STS',
            'PFP',
            'STS'
        ], {
        S: 'justdirethings:ferricore_ingot',
        P: 'the_vault:chromatic_iron_ingot',
        F: 'minecraft:dropper',
        T: 'the_vault:vault_essence'
    }).id('justdirethings:sensort1')

    event.shaped(Item.of('justdirethings:sensort2'),
        [
            'SRS',
            'RFR',
            'STS'
        ], {
        S: 'justdirethings:celestigem',
        R: 'minecraft:ender_eye',
        F: 'justdirethings:droppert1',
        T: 'woldsvaults:vault_essence_block'
    }).id('justdirethings:sensort2')

    event.shaped(Item.of('justdirethings:blockswappert1'),
        [
            'SRS',
            'PFP',
            'STS'
        ], {
        S: 'justdirethings:blazegold_ingot',
        R: 'the_vault:vault_diamond',
        P: 'the_vault:vault_ingot',
        F: 'minecraft:observer',
        T: 'the_vault:extraordinary_wutodie'
    }).id('justdirethings:blockswappert1')

    event.shaped(Item.of('justdirethings:blockswappert2'),
        [
            'SRS',
            'RFR',
            'STS'
        ], {
        S: 'justdirethings:eclipsealloy_ingot',
        R: 'the_vault:gem_echo',
        F: 'justdirethings:blockswappert1',
        T: 'the_vault:black_chromatic_steel_ingot'
    }).id('justdirethings:blockswappert2')

    event.shaped(Item.of('justdirethings:playeraccessor'),
        [
            'STS',
            'RFR',
            'STS'
        ], {
        S: 'justdirethings:eclipsealloy_ingot',
        R: 'the_vault:black_chromatic_steel_block',
        F: 'woldsvaults:wold_star',
        T: 'woldsvaults:echo_pog_block'
    }).id('justdirethings:playeraccessor')

    event.shaped(Item.of('justdirethings:experienceholder'),
        [
            ' R ',
            'PFP',
            'SSS'
        ], {
        S: 'justdirethings:blazegold_ingot',
        R: 'woldsvaults:chroma_core',
        P: 'minecraft:book',
        F: 'minecraft:ender_pearl'
    }).id('justdirethings:experienceholder')

    event.shaped(Item.of('justdirethings:fluidcollectort1'),
        [
            'SRS',
            'PFP',
            'STS'
        ], {
        S: 'justdirethings:ferricore_ingot',
        P: 'the_vault:chromatic_iron_ingot',
        F: 'minecraft:dropper',
        R: 'minecraft:bucket',
        T: 'the_vault:vault_essence'
    }).id('justdirethings:fluidcollectort1')

    event.shaped(Item.of('justdirethings:fluidcollectort2'),
        [
            'SRS',
            'RFR',
            'STS'
        ], {
        S: 'justdirethings:celestigem',
        R: 'minecraft:ender_eye',
        F: 'justdirethings:fluidcollectort1',
        T: 'woldsvaults:vault_essence_block'
    }).id('justdirethings:fluidcollectort2')

    event.shaped(Item.of('justdirethings:fluidplacert1'),
        [
            'SRS',
            'PFP',
            'STS'
        ], {
        S: 'justdirethings:ferricore_ingot',
        P: 'the_vault:chromatic_steel_ingot',
        F: 'minecraft:dropper',
        R: 'minecraft:bucket',
        T: 'the_vault:vault_essence'
    }).id('justdirethings:fluidcollectort1')

    event.shaped(Item.of('justdirethings:fluidplacert2'),
        [
            'SRS',
            'RFR',
            'STS'
        ], {
        S: 'justdirethings:celestigem',
        R: 'minecraft:ender_eye',
        F: 'justdirethings:fluidplacert1',
        T: 'woldsvaults:vault_essence_block'
    }).id('justdirethings:fluidplacert2')

    event.remove({ id: 'justdirethings:generatort1' })

    event.shaped(Item.of('justdirethings:generatorfluidt1'),
        [
            'SRS',
            'PFP',
            'STS'
        ], {
        S: 'justdirethings:blazegold_ingot',
        P: 'woldsvaults:vault_ingot',
        F: 'minecraft:blast_furnace',
        R: 'minecraft:bucket',
        T: 'the_vault:vault_diamond'
    }).id('justdirethings:generatorfluidt1')

    event.shaped(Item.of('justdirethings:experienceholder'),
        [
            ' R ',
            'PFP',
            'SSS'
        ], {
        S: 'justdirethings:blazegold_ingot',
        R: 'justdirethings:celestigem',
        P: 'the_vault:vault_ingot',
        F: 'minecraft:ender_pearl'
    }).id('justdirethings:experienceholder')

    event.custom({
        "type": "justdirethings:goospread",
        "id": "justdirethings:dire_iron_block",
        "input": {
            "Name": "the_vault:chromatic_iron_block"
        },
        "output": {
            "Properties": {
                "facing": "north"
            },
            "Name": "justdirethings:raw_ferricore_ore"
        },
        "tierRequirement": 1,
        "craftingDuration": 2400
    }).id('justdirethings:raw_ferricore_ore-goospread')

    event.custom({
        "type": "justdirethings:goospread",
        "id": "justdirethings:dire_gold_block",
        "input": {
            "Name": "woldsvaults:chromatic_gold_block"
        },
        "output": {
            "Properties": {
                "facing": "north"
            },
            "Name": "justdirethings:raw_blazegold_ore"
        },
        "tierRequirement": 2,
        "craftingDuration": 2400
    }).id('justdirethings:raw_blazegold_ore-goospread')

    event.custom({
        "type": "justdirethings:goospread",
        "id": "justdirethings:dire_diamond_block",
        "input": {
            "Name": "the_vault:vault_diamond_block"
        },
        "output": {
            "Properties": {
                "facing": "north"
            },
            "Name": "justdirethings:raw_celestigem_ore"
        },
        "tierRequirement": 3,
        "craftingDuration": 4800
    }).id('justdirethings:raw_celestigem_ore-goospread')

    event.custom({
        "type": "justdirethings:goospread",
        "id": "justdirethings:dire_netherite_block",
        "input": {
            "Name": "the_vault:black_chromatic_steel_block"
        },
        "output": {
            "Properties": {
                "facing": "north"
            },
            "Name": "justdirethings:raw_eclipsealloy_ore"
        },
        "tierRequirement": 4,
        "craftingDuration": 4800
    }).id('justdirethings:raw_eclipsealloy_ore-goospread')

    event.custom({
        "type": "justdirethings:goospread",
        "id": "justdirethings:budding_time_amethyst",
        "input": {
            "Name": "the_vault:crystal_budding"
        },
        "output": {
            "Properties": {
                "stage": "0"
            },
            "Name": "justdirethings:time_crystal_budding_block"
        },
        "tierRequirement": 4,
        "craftingDuration": 4800
    }).id('justdirethings:budding_time_amethyst')

     event.remove({ id: 'justdirethings:totem_of_death_recall' })

     event.shaped(Item.of('justdirethings:pocket_generator'),
        [
            'SRS',
            'PFP',
            'SRS'
        ], {
        S: 'justdirethings:ferricore_ingot',
        P: 'minecraft:coal_block',
        F: 'minecraft:blast_furnace',
        R: 'the_vault:extraordinary_larimar',
    }).id('justdirethings:pocket_generator')

    event.shaped(Item.of('justdirethings:blazejet_wand'),
        [
            ' TS',
            ' RT',
            'R  '
        ], {
        R: 'justdirethings:ferricore_ingot',
        S: 'justdirethings:blazegold_ingot',
        T: 'the_vault:gem_pog',
    }).id('justdirethings:blazejet_wand')

    event.shaped(Item.of('justdirethings:voidshift_wand'),
        [
            ' TS',
            ' WT',
            'R  '
        ], {
        R: 'justdirethings:blazegold_ingot',
        S: 'justdirethings:celestigem',
        W: 'justdirethings:blazejet_wand',
        T: 'woldsvaults:pog_prism'
    }).id('justdirethings:voidshift_wand')

    event.shaped(Item.of('justdirethings:eclipsegate_wand'),
        [
            ' TS',
            ' WT',
            'R  '
        ], {
        R: 'justdirethings:celestigem',
        S: 'justdirethings:eclipsealloy_ingot',
        W: 'justdirethings:voidshift_wand',
        T: 'the_vault:echo_pog'
    }).id('justdirethings:eclipsegate_wand')

    event.shaped(Item.of('justdirethings:time_wand'),
        [
            ' TS',
            ' WT',
            'R  '
        ], {
        S: 'justdirethings:time_crystal',
        T: 'justdirethings:eclipsealloy_ingot',
        R: 'justdirethings:ferricore_ingot',
        W: 'the_vault:echo_pog'
    }).id('justdirethings:time_wand')

     event.shaped(Item.of('justdirethings:portalgun'),
        [
            ' II',
            'IEI',
            'I  '
        ], {
        I: 'justdirethings:blazegold_ingot',
        E: 'the_vault:gem_pog'
    }).id('justdirethings:portalgun')

    event.shaped(Item.of('justdirethings:portalgun_v2'),
        [
            ' IG',
            'IEI',
            'ICP'
        ], {
        I: 'justdirethings:blazegold_ingot',
        E: 'justdirethings:portal_fluid_catalyst',
        C: 'justdirethings:fluid_canister',
        G: 'justdirethings:celestigem',
        P: 'the_vault:gem_pog'
    }).id('justdirethings:portalgun_v2')

    event.shaped(Item.of('justdirethings:polymorphic_wand_v2'),
        [
            ' TS',
            ' WT',
            'R  '
        ], {
        R: 'justdirethings:celestigem',
        S: 'justdirethings:eclipsealloy_ingot',
        W: 'justdirethings:polymorphic_wand',
        T: 'woldsvaults:extraordinary_pog_prism'
    }).id('justdirethings:polymorphic_wand_v2')

    event.remove({ id: /^justdirethings:upgrade_/ })
    
})