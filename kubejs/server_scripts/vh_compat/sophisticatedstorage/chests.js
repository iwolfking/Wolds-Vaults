onEvent("recipes", event => {
    // /**
    //  * Make sure that ingredients and outputs are ItemStackJS objects (can be created using Item.of()), using item ids alone will not work
    //  */
    // function strongboxUpgrade(result, key) {
    //     return event.custom({
    //         type: "sophisticatedstorage:storage_tier_upgrade",
    //         key: key,
    //         pattern: ['IXI', 'XCX', 'IXI'],
    //         result: result
    //     })
    // }

    // event.shaped(Item.of('sophisticatedstorage:unique_crate'),
    //     [
    //         'ITI',
    //         'XCX',
    //         'IEI'
    //     ], {
    //     C: 'the_vault:unique_crate_scroll',
    //     X: 'woldsvaults:chromatic_gold_block',
    //     I: 'woldsvaults:chroma_core',
    //     T: 'the_vault:gem_pog',
    //     E: 'woldsvaults:enigma_egg'
    // }).id('sophisticatedstorage:unique_crate')
  
    // event.shaped(Item.of('sophisticatedstorage:treasure_chest'),
    //     [
    //         'ITI',
    //         'XCX',
    //         'ITI'
    //     ], {
    //     C: 'the_vault:treasure_chest_scroll',
    //     X: 'the_vault:vault_diamond_block',
    //     I: 'woldsvaults:pog_prism',
    //     T: 'the_vault:extraordinary_larimar'
    // }).id('sophisticatedstorage:treasure_chest')

    // event.shaped(Item.of('sophisticatedstorage:wooden_chest'),
    //     [
    //         'IXI',
    //         'XCX',
    //         'IXI'
    //     ], {
    //     C: 'the_vault:wooden_chest_scroll',
    //     X: 'the_vault:vault_diamond',
    //     I: 'the_vault:driftwood_planks'
    // }).id('sophisticatedstorage:wooden_chest')

    // event.shaped(Item.of('sophisticatedstorage:wooden_barrel'),
    //     [
    //         'IXI',
    //         'PCP',
    //         'IXI'
    //     ], {
    //     C: 'the_vault:wooden_chest_scroll',
    //     X: 'the_vault:vault_diamond',
    //     I: 'woldsvaults:infused_driftwood',
    //     P: 'the_vault:chromatic_steel_ingot'
    // }).id('sophisticatedstorage:wooden_barrel')

    // event.shaped(Item.of('sophisticatedstorage:hardened_chest'),
    //     [
    //         'IXI',
    //         'XCX',
    //         'IXI'
    //     ], {
    //     C: 'the_vault:hardened_chest_scroll',
    //     X: 'the_vault:vault_diamond',
    //     I: 'the_vault:chromatic_iron_ingot'
    // }).id('sophisticatedstorage:hardened_chest')

    // event.shaped(Item.of('sophisticatedstorage:flesh_chest'),
    //     [
    //         'IXI',
    //         'XCX',
    //         'IXI'
    //     ], {
    //     C: 'the_vault:flesh_chest_scroll',
    //     X: 'the_vault:gem_painite',
    //     I: 'the_vault:vault_meat_block'
    // }).id('sophisticatedstorage:flesh_chest')

    // event.shaped(Item.of('sophisticatedstorage:enigma_chest'),
    //     [
    //         'IXI',
    //         'XCX',
    //         'IXI'
    //     ], {
    //     C: 'the_vault:enigma_chest_scroll',
    //     X: 'the_vault:black_chromatic_steel_ingot',
    //     I: 'the_vault:wutodic_mass'
    // }).id('sophisticatedstorage:enigma_chest')


    // event.shaped(Item.of('sophisticatedstorage:altar_chest'),
    //     [
    //         'IXI',
    //         'XCX',
    //         'IXI'
    //     ], {
    //     C: 'the_vault:altar_chest_scroll',
    //     X: 'the_vault:black_chromatic_steel_ingot',
    //     I: 'the_vault:extraordinary_larimar'
    // }).id('sophisticatedstorage:altar_chest')

    // event.shaped(Item.of('sophisticatedstorage:living_chest'),
    //     [
    //         'IXI',
    //         'XCX',
    //         'IXI'
    //     ], {
    //     C: 'the_vault:living_chest_scroll',
    //     X: 'woldsvaults:chroma_core',
    //     I: 'the_vault:vault_meat_block'
    // }).id('sophisticatedstorage:living_chest')

    // event.shaped(Item.of('sophisticatedstorage:living_barrel'),
    //     [
    //         'IXI',
    //         'PCP',
    //         'IXI'
    //     ], {
    //     C: 'the_vault:living_chest_scroll',
    //     X: 'woldsvaults:chroma_core',
    //     I: 'the_vault:vault_meat_block',
    //     P: 'the_vault:black_chromatic_steel_ingot'
    // }).id('sophisticatedstorage:living_barrel')

    // event.shaped(Item.of('sophisticatedstorage:ornate_chest'),
    //     [
    //         'IXI',
    //         'XCX',
    //         'IXI'
    //     ], {
    //     C: 'the_vault:ornate_chest_scroll',
    //     X: 'woldsvaults:chroma_core',
    //     I: 'the_vault:vaulterite_ingot'
    // }).id('sophisticatedstorage:ornate_chest')

    // event.shaped(Item.of('sophisticatedstorage:ornate_barrel'),
    //     [
    //         'IXI',
    //         'PCP',
    //         'IXI'
    //     ], {
    //     C: 'the_vault:ornate_chest_scroll',
    //     X: 'woldsvaults:chroma_core',
    //     I: 'the_vault:vaulterite_ingot',
    //     P: 'the_vault:black_chromatic_steel_ingot'
    // }).id('sophisticatedstorage:ornate_barrel')

    // event.shaped(Item.of('sophisticatedstorage:gilded_chest'),
    //     [
    //         'IXI',
    //         'XCX',
    //         'IXI'
    //     ], {
    //     C: 'the_vault:gilded_chest_scroll',
    //     X: 'woldsvaults:chroma_core',
    //     I: 'woldsvaults:chromatic_gold_ingot'
    // }).id('sophisticatedstorage:gilded_chest')

    // event.shaped(Item.of('sophisticatedstorage:gilded_barrel'),
    //     [
    //         'IXI',
    //         'PCP',
    //         'IXI'
    //     ], {
    //     C: 'the_vault:gilded_chest_scroll',
    //     X: 'woldsvaults:chroma_core',
    //     I: 'woldsvaults:chromatic_gold_ingot',
    //     P: 'the_vault:black_chromatic_steel_ingot'
    // }).id('sophisticatedstorage:gilded_barrel')

    // strongboxUpgrade(Item.of('sophisticatedstorage:ornate_strongbox'),
    //     {
    //         C: Item.of('sophisticatedstorage:ornate_chest'),
    //         X: Item.of('the_vault:perfect_painite'),
    //         I: Item.of('the_vault:ornate_chest_scroll')
    //     })

    // strongboxUpgrade(Item.of('sophisticatedstorage:gilded_strongbox'),
    //     {
    //         C: Item.of('sophisticatedstorage:gilded_chest'),
    //         X: Item.of('woldsvaults:chromatic_gold_ingot'),
    //         I: Item.of('the_vault:gilded_chest_scroll')
    //     })

    // strongboxUpgrade(Item.of('sophisticatedstorage:living_strongbox'),
    //     {
    //         C: Item.of('sophisticatedstorage:living_chest'),
    //         X: Item.of('the_vault:perfect_alexandrite'),
    //         I: Item.of('the_vault:living_chest_scroll')
    //     })
})
