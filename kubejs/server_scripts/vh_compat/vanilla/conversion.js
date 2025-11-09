// scripts made by Douwsky
// Converted to KubeJS 1.18.2 for Vault Hunters

onEvent('recipes', event => {

    // Dyes → concrete/concrete powder recipes
    const dyes = {
        white_dye: 'white',
        red_dye: 'red',
        lime_dye: 'lime',
        light_gray_dye: 'light_gray',
        light_blue_dye: 'light_blue',
        gray_dye: 'gray',
        black_dye: 'black',
        orange_dye: 'orange',
        yellow_dye: 'yellow',
        green_dye: 'green',
        cyan_dye: 'cyan',
        purple_dye: 'purple',
        blue_dye: 'blue',
        brown_dye: 'brown',
        pink_dye: 'pink',
        magenta_dye: 'magenta'
    };

    for (let [dyeId, dyeName] of Object.entries(dyes)) {
        event.shaped(Item.of(`minecraft:${dyeName}_concrete_powder`, 8), [
            ['C', 'C', 'C'],
            ['C', 'D', 'C'],
            ['C', 'C', 'C']
        ], {
            C: '#forge:concrete_powders',
            D: `minecraft:${dyeId}`
        });

        event.shaped(Item.of(`minecraft:${dyeName}_concrete`, 8), [
            ['C', 'C', 'C'],
            ['C', 'D', 'C'],
            ['C', 'C', 'C']
        ], {
            C: '#forge:concrete',
            D: `minecraft:${dyeId}`
        });
    }

    // Golden apple
    event.shaped('minecraft:golden_apple', [
        ['G', 'I', 'G'],
        ['I', 'A', 'I'],
        ['G', 'I', 'G']
    ], {
        G: 'minecraft:gold_block',
        I: 'minecraft:gold_ingot',
        A: 'minecraft:apple'
    });

    // Cage dust
    event.shaped('ispawner:cage_dust', [
        [' ', 'P', ' '],
        ['P', 'S', 'P'],
        [' ', 'P', ' ']
    ], {
        P: 'the_vault:gem_painite',
        S: 'the_vault:chromatic_steel_ingot'
    });

    // Suspicious stews
    const stews = [
        {name: 'weakness_red', flower: 'red_tulip', effect: 18, duration: 180},
        {name: 'weakness_orange', flower: 'orange_tulip', effect: 18, duration: 180},
        {name: 'weakness_white', flower: 'white_tulip', effect: 18, duration: 180},
        {name: 'weakness_pink', flower: 'pink_tulip', effect: 18, duration: 180},
        {name: 'fire_res', flower: 'allium', effect: 12, duration: 80},
        {name: 'wither', flower: 'wither_rose', effect: 20, duration: 80}, // correct id for Wither
        {name: 'blindness', flower: 'azure_bluet', effect: 15, duration: 160},
        {name: 'nightvision', flower: 'poppy', effect: 16, duration: 100},
        {name: 'saturation_dandelion', flower: 'dandelion', effect: 23, duration: 7},
        {name: 'saturation_orchid', flower: 'blue_orchid', effect: 23, duration: 7},
        {name: 'jump', flower: 'cornflower', effect: 8, duration: 120},
        {name: 'poison', flower: 'lily_of_the_valley', effect: 19, duration: 240}
    ];

    stews.forEach(stew => {
        event.shapeless(Item.of(`minecraft:suspicious_stew`, {Effects: [{EffectId: stew.effect, EffectDuration: stew.duration}]}), [
            `minecraft:${stew.flower}`,
            'minecraft:red_mushroom',
            'minecraft:bowl',
            'minecraft:brown_mushroom'
        ])
    });

    onEvent('recipes', event => {
    event.custom({
        type: 'minecraft:brewing',
        potion: 'minecraft:awkward', 
        ingredient: { item: 'minecraft:golden_apple' }, 
        result: 'minecraft:healing' 
    }).id('minecraft:golden_apple_healing');
});


    // Vault Hunters guide books
    event.shapeless('patchouli:guide_book', ['minecraft:book', 'minecraft:cobblestone']).withNBT({'patchouli:book': 'patchouli:the_vault_main_guide'});
    event.shapeless('patchouli:guide_book', ['minecraft:book', 'minecraft:wooden_sword']).withNBT({'patchouli:book': 'patchouli:vault_lexicon'});

    // Bundle
    event.shaped('minecraft:bundle', [
        ['R', 'S', 'R'],
        ['S', ' ', 'S'],
        ['S', 'S', 'S']
    ], {
        R: 'minecraft:rabbit_hide',
        S: 'the_vault:magic_silk'
    });

    // Enercell
    event.shaped('enercell:enercell', [
        ['C', 'E', 'C'],
        ['C', 'B', 'C'],
        ['C', 'L', 'C']
    ], {
        C: 'the_vault:chromatic_steel_ingot',
        E: 'the_vault:vault_essence',
        B: 'the_vault:chromatic_iron_block',
        L: 'the_vault:extraordinary_larimar'
    });

    // Cobweb combining
    event.recipes.mekanism.combining('minecraft:cobweb', 'minecraft:string', 'minecraft:vine');

    // Create mod item applications
    const createRecipes = [
        {output: 'minecraft:cobweb', input: 'minecraft:cobweb', ingredient: 'minecraft:vine', extra: 'minecraft:string'},
        {output: 'minecraft:shroomlight', input: 'minecraft:shroomlight', ingredient: 'minecraft:glowstone', extra: 'minecraft:nether_wart'},
        {output: 'minecraft:dead_horn_coral', input: 'minecraft:dead_horn_coral_block', ingredient: 'minecraft:cactus', extra: 'minecraft:dried_kelp'},
        {output: 'minecraft:horn_coral', input: 'minecraft:horn_coral_block', ingredient: 'minecraft:dead_horn_coral_block', extra: 'minecraft:sunflower'},
        {output: 'minecraft:hanging_roots', input: 'minecraft:hanging_roots', ingredient: 'minecraft:vine', extra: 'minecraft:rotten_flesh'},
        {output: 'minecraft:weeping_vines', input: 'minecraft:weeping_vines', ingredient: 'minecraft:vine', extra: 'minecraft:nether_wart'},
        {output: 'minecraft:dead_bush', input: 'minecraft:dead_bush', ingredient: 'minecraft:grass', extra: 'minecraft:rotten_flesh'},
        {output: 'minecraft:coarse_dirt', input: 'minecraft:coarse_dirt', ingredient: 'minecraft:gravel', extra: 'minecraft:rotten_flesh'},
        {output: 'minecraft:rooted_dirt', input: 'minecraft:rooted_dirt', ingredient: 'minecraft:coarse_dirt', extra: 'minecraft:rotten_flesh'}
    ];

    createRecipes.forEach(r => {
        event.recipes.create.item_application(r.output, [r.input], r.ingredient, r.extra);
    });


    event.shapeless(Item.of('the_vault:augment', {theme: 'the_vault:classic_vault_chaos'}), [
        '#vault:augments',
        '#vault:augments',
        '#vault:augments'
    ]).id('the_vault:augment_classic_vault_chaos');


});
