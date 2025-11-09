onEvent('tags.blocks', event => {
    // Pickaxe-minable blocks
    const pickaxe = [
        'the_vault:tenos_light_smooth_brick',
        'the_vault:tenos_dark_smooth_brick',
        'the_vault:tenos_brick_chiseled',
        'the_vault:tenos_brick',
        'the_vault:idona_gem_block',
        'the_vault:idona_light_smooth_brick',
        'the_vault:idona_dark_smooth_brick',
        'the_vault:idona_brick_chiseled',
        'the_vault:idona_brick',
        'the_vault:wendarr_jewel_block',
        'the_vault:wendarr_gem_block',
        'the_vault:wendarr_light_smooth_brick',
        'the_vault:wendarr_dark_smooth_brick',
        'the_vault:wendarr_brick_chiseled',
        'the_vault:wendarr_brick',
        'the_vault:velara_gem_block',
        'the_vault:velara_light_smooth_brick',
        'the_vault:velara_dark_smooth_brick',
        'the_vault:velara_brick_chiseled',
        'the_vault:velara_brick',
        'the_vault:tenos_gem_block'
    ];

    pickaxe.forEach(item => {
        event.add('minecraft:mineable/pickaxe', item);
        event.add('cucumber:mineable/paxel', item);
    });

    // Glass blocks
    const glass = [
        'the_vault:wendarr_jewel_glass',
        'the_vault:wendarr_jewel_glass_pane'
    ];

    glass.forEach(item => {
        event.add('forge:glass', item);
    });

    // Axe-minable blocks
    const axe = [
        'the_vault:velara_stripped_log',
        'the_vault:velara_planks_slab',
        'the_vault:velara_planks_stairs',
        'the_vault:velara_vertical_planks',
        'the_vault:velara_planks',
        'the_vault:velara_log',
        'the_vault:velara_mossy_blooming_log',
        'the_vault:velara_mossy_log',
        'the_vault:tenos_planks',
        'the_vault:tenos_vertical_planks',
        'the_vault:tenos_log',
        'the_vault:tenos_stripped_log',
        'the_vault:tenos_bookshelf',
        'the_vault:tenos_bookshelf_empty'
    ];

    axe.forEach(item => {
        event.add('minecraft:mineable/axe', item);
        event.add('cucumber:mineable/paxel', item);
    });

    // Leaves
    const leaves = [
        'the_vault:velara_bush',
        'the_vault:velara_leaves',
        'the_vault:velara_mossy_block'
    ];

    leaves.forEach(item => {
        event.add('minecraft:mineable/hoe', item);
        event.add('minecraft:leaves', item);
        event.add('cucumber:mineable/paxel', item);
    });

    // Vine
    const vine = [
        'the_vault:velara_vine'
    ];

    vine.forEach(item => {
        event.add('minecraft:mineable/axe', item);
        event.add('minecraft:climbable', item);
        event.add('minecraft:fall_damage_resetting', item);
        event.add('cucumber:mineable/paxel', item);
    });
});
