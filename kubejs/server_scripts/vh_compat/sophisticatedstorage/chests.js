onEvent("recipes", event => {
    /**
     * Make sure that ingredients and outputs are ItemStackJS objects (can be created using Item.of()), using item ids alone will not work
     */
    function strongboxUpgrade(result, key) {
        return event.custom({
            type: "sophisticatedstorage:storage_tier_upgrade",
            key: key,
            pattern: ['IXI', 'XCX', 'IXI'],
            result: result
        })
    }
  
    event.shaped(Item.of('sophisticatedstorage:treasure_chest'),
        [
            'ITI',
            'XCX',
            'ITI'
        ], {
        C: 'the_vault:treasure_chest',
        X: 'the_vault:vault_diamond_block',
        I: 'the_vault:pog_prism',
        T: 'the_vault:extraordinary_larimar'
    })

    event.shaped(Item.of('sophisticatedstorage:wooden_chest'),
        [
            'IXI',
            'XCX',
            'IXI'
        ], {
        C: 'the_vault:wooden_chest',
        X: 'the_vault:vault_diamond',
        I: 'the_vault:wooden_planks'
    })

    event.shaped(Item.of('sophisticatedstorage:hardened_chest'),
        [
            'IXI',
            'XCX',
            'IXI'
        ], {
        C: 'the_vault:hardened_chest',
        X: 'the_vault:vault_stone',
        I: 'the_vault:chromatic_iron_ingot'
    })

    event.shaped(Item.of('sophisticatedstorage:flesh_chest'),
        [
            'IXI',
            'XCX',
            'IXI'
        ], {
        C: 'the_vault:flesh_chest',
        X: 'the_vault:gem_painite',
        I: 'the_vault:vault_meat_block'
    })

    event.shaped(Item.of('sophisticatedstorage:enigma_chest'),
        [
            'IXI',
            'XCX',
            'IXI'
        ], {
        C: 'the_vault:enigma_chest',
        X: 'the_vault:black_chromatic_steel_ingot',
        I: 'the_vault:perfect_wutodie'
    })


    event.shaped(Item.of('sophisticatedstorage:altar_chest'),
        [
            'IXI',
            'XCX',
            'IXI'
        ], {
        C: 'the_vault:altar_chest',
        X: 'the_vault:black_chromatic_steel_ingot',
        I: 'the_vault:perfect_larimar'
    })

    event.shaped(Item.of('sophisticatedstorage:living_chest'),
        [
            'IXI',
            'XCX',
            'IXI'
        ], {
        C: 'the_vault:living_chest',
        X: 'the_vault:mossy_bone_block',
        I: 'the_vault:perfect_alexandrite'
    })

    event.shaped(Item.of('sophisticatedstorage:ornate_chest'),
        [
            'IXI',
            'XCX',
            'IXI'
        ], {
        C: 'the_vault:ornate_chest',
        X: 'the_vault:ornate_block',
        I: 'the_vault:perfect_painite'
    })

    event.shaped(Item.of('sophisticatedstorage:gilded_chest'),
        [
            'IXI',
            'XCX',
            'IXI'
        ], {
        C: 'the_vault:gilded_chest',
        X: 'the_vault:gilded_block',
        I: 'the_vault:chromatic_gold_ingot'
    })

    strongboxUpgrade(Item.of('sophisticatedstorage:ornate_strongbox'),
        {
            C: Item.of('sophisticatedstorage:ornate_chest'),
            X: Item.of('the_vault:perfect_painite'),
            I: Item.of('the_vault:ornate_chest_scroll')
        })

    strongboxUpgrade(Item.of('sophisticatedstorage:gilded_strongbox'),
        {
            C: Item.of('sophisticatedstorage:gilded_chest'),
            X: Item.of('the_vault:chromatic_gold_ingot'),
            I: Item.of('the_vault:gilded_chest_scroll')
        })

    strongboxUpgrade(Item.of('sophisticatedstorage:living_strongbox'),
        {
            C: Item.of('sophisticatedstorage:living_chest'),
            X: Item.of('the_vault:perfect_alexandrite'),
            I: Item.of('the_vault:living_chest_scroll')
        })
})
