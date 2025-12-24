onEvent("recipes", event => {
    event.remove({ output: 'the_vault:angel_block' })
    event.remove({ id: 'the_vault:vault_catalyst_reroll' })
    event.remove({id: 'the_vault:infused_eternal_soul'})
    event.remove({output: 'the_vault:coin_pouch'})
    event.remove({id: 'the_vault:echoing_ingot'})
    event.remove({id: 'the_vault:smelt_etching'})
    event.remove({id: 'the_vault:crystal_seal_ordinator_run'})
    event.remove({id: 'the_vault:crystal_seal_ordinator_build'})
    event.remove({id: 'the_vault:vault_compass'})

    event.shaped(Item.of('the_vault:crystal_budding'),
        [
            'AEA',
            'ECE',
            'AEA'
        ], {
        C: 'the_vault:living_rock_block_cobble',
        E: 'the_vault:gem_larimar',
        A: 'minecraft:amethyst_block'
    }).id('the_vault:crystal_budding')

    event.shaped(Item.of('the_vault:mystical_powder'),
        [
            ' E ',
            'DBD',
            'AEA'
        ], {
        E: 'the_vault:vault_essence',
        D: 'the_vault:vault_diamond',
        A: 'the_vault:dreamstone',
        B: 'the_vault:extraordinary_benitoite'
    }).id('the_vault:mystical_powder')

    event.shaped(Item.of('the_vault:mystery_egg'),
        [
            'EPE',
            'MNM',
            'EDE'
        ], {
        E: 'the_vault:vault_essence',
        M: '#the_vault:spawnegg',
        D: 'the_vault:vault_diamond',
        P: 'the_vault:gem_painite',
        N: 'the_vault:perfect_larimar'
    }).id('the_vault:mystery_egg')

    event.shaped(Item.of('the_vault:angel_block'),
        [
            'XBX',
            'ECE',
            'XBX'
        ], {
        C: 'the_vault:gem_pog',
        X: 'the_vault:black_chromatic_steel_ingot',
        B: 'the_vault:phoenix_feather',
        E: 'the_vault:knowledge_star'
    }).id('the_vault:angel_block')

    event.shaped(Item.of('the_vault:vault_compass'),
        [
            'DPD',
            'ICI',
            'DID'
        ], {
        D: 'the_vault:vault_diamond_block',
        P: 'the_vault:echo_pog',
        I: 'the_vault:black_chromatic_steel_ingot',
        C: 'minecraft:compass'
    }).id('the_vault:vault_compass')
    
    event.shaped(Item.of('the_vault:vault_charm_controller'),
        [
            'DDD',
            'IPI',
            ' I '
        ], {
        D: 'the_vault:magic_silk_block',
        P: 'woldsvaults:chroma_core',
        I: 'the_vault:chromatic_steel_ingot'
    }).id('the_vault:vault_charm_controller')

    event.shapeless('the_vault:capstone_vendoor_hunter', ['woldsvaults:capstone_vendoors']).id('woldsvaults:vendoor_capstone_conversion')

    event.shapeless('the_vault:vault_palladium', ['9x the_vault:vault_platinum'])
    event.shapeless('the_vault:vault_iridium', ['9x the_vault:vault_palladium'])
    event.shapeless('9x the_vault:vault_platinum', ['the_vault:vault_palladium'])
    event.shapeless('9x the_vault:vault_palladium', ['the_vault:vault_iridium'])
    event.shapeless('9x the_vault:vault_catalyst_fragment', ['the_vault:vault_catalyst'])
    event.shapeless('the_vault:vault_catalyst', ['9x the_vault:vault_catalyst_fragment'])

    event.shapeless('9x the_vault:vault_catalyst_fragment', ['the_vault:vault_catalyst'])
    event.shapeless('the_vault:phoenix_feather', ['9x the_vault:phoenix_dust'])
    event.shapeless('9x the_vault:phoenix_dust', ['the_vault:phoenix_feather'])
    event.shapeless('9x the_vault:regret_chunk', ['the_vault:regret_orb'])
    event.shapeless('9x the_vault:regret_nugget', ['the_vault:regret_chunk'])
    event.shapeless('the_vault:chromatic_steel_block', ['4x the_vault:chromatic_iron_block', '2x woldsvaults:carbon_block'])

    event.shapeless(Item.of('the_vault:spicy_hearty_burger'), ['the_vault:cheese_burger_feast', 'the_vault:burger_chili']).id('woldsvaults:cheeseburger_feast_upgrade')
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:gilded_affinity"}'), ['the_vault:nullifying_focus', 'woldsvaults:smashed_vault_gem_cluster', 'the_vault:gilded_ingot']).id('woldsvaults:chiseling_focus_gilded')
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:ornate_affinity"}'), ['the_vault:nullifying_focus', 'woldsvaults:smashed_vault_gem_cluster', 'the_vault:ornate_ingot'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:living_affinity"}'), ['the_vault:nullifying_focus', 'woldsvaults:smashed_vault_gem_cluster', 'the_vault:mossy_bone'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:wooden_affinity"}'), ['the_vault:nullifying_focus', 'woldsvaults:smashed_vault_gem_cluster', 'the_vault:wooden_chunk'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:coin_affinity"}'), ['the_vault:nullifying_focus', 'woldsvaults:smashed_vault_gem_cluster', 'the_vault:vault_bronze'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:picking"}'), ['the_vault:nullifying_focus', 'woldsvaults:smashed_vault_gem_cluster', 'minecraft:iron_pickaxe'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:shovelling"}'), ['the_vault:nullifying_focus', 'woldsvaults:smashed_vault_gem_cluster', 'minecraft:iron_shovel'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:axing"}'), ['the_vault:nullifying_focus', 'woldsvaults:smashed_vault_gem_cluster', 'minecraft:iron_axe'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:reaping"}'), ['the_vault:nullifying_focus', 'woldsvaults:smashed_vault_gem_cluster', 'minecraft:iron_hoe'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:pulverizing"}'), ['the_vault:nullifying_focus', 'woldsvaults:smashed_vault_gem_cluster', 'minecraft:piston'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:smelting"}'), ['the_vault:nullifying_focus', 'woldsvaults:smashed_vault_gem_cluster', 'minecraft:furnace'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:hydrovoid"}'), ['the_vault:nullifying_focus', 'woldsvaults:smashed_vault_gem_cluster', 'minecraft:sponge'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:immortality"}'), ['the_vault:nullifying_focus', 'woldsvaults:smashed_vault_gem_cluster', 'the_vault:eternal_soul'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:copiously"}'), ['the_vault:nullifying_focus', 'woldsvaults:smashed_vault_gem_cluster', 'minecraft:gold_ingot'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:durability"}'), ['the_vault:nullifying_focus', 'woldsvaults:smashed_vault_gem_cluster', 'minecraft:iron_ingot'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:hammer_size"}'), ['the_vault:nullifying_focus', 'woldsvaults:smashed_vault_gem_cluster', 'minecraft:iron_block'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:hammering"}'), ['the_vault:nullifying_focus', 'woldsvaults:smashed_vault_gem_cluster', 'minecraft:iron_nugget'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:mining_speed"}'), ['the_vault:nullifying_focus', 'woldsvaults:smashed_vault_gem_cluster', 'minecraft:lapis_lazuli'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:item_quantity"}'), ['the_vault:nullifying_focus', 'woldsvaults:smashed_vault_gem_cluster', 'minecraft:chest'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:item_rarity"}'), ['the_vault:nullifying_focus', 'woldsvaults:smashed_vault_gem_cluster', 'minecraft:emerald'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:reach"}'), ['the_vault:nullifying_focus', 'woldsvaults:smashed_vault_gem_cluster', 'minecraft:stick'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:soulbound"}'), ['the_vault:nullifying_focus', 'woldsvaults:smashed_vault_gem_cluster', 'minecraft:soul_sand'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:trap_disarming"}'), ['the_vault:nullifying_focus', 'woldsvaults:smashed_vault_gem_cluster', 'minecraft:lever'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:rotating"}'), ['the_vault:nullifying_focus', 'woldsvaults:smashed_vault_gem_cluster', 'minecraft:diamond'])
    event.shapeless(Item.of('woldsvaults:chiseling_focus', '{modifier:"the_vault:dismantle_chance"}'), ['the_vault:nullifying_focus', 'woldsvaults:smashed_vault_gem_cluster', 'minecraft:copper_ingot'])
    event.shapeless(Item.of('woldsvaults:stylish_focus'), ['minecraft:ender_pearl', 'woldsvaults:smashed_vault_gem_cluster', 'minecraft:diamond'])
})
