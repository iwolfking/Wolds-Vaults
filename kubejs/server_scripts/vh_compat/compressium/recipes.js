onEvent('block.registry', event => {
    const blockTypes = [
        'dirt', 'sand', 'cobblestone', 'stone', 'gravel', 'andesite',
        'snow', 'diorite', 'granite', 'netherrack', 'obsidian',
        'soulsand', 'endstone', 'clay', 'netherite'
    ];

    const tiers = [2, 3, 4];

    blockTypes.forEach(type => {
        tiers.forEach(tier => {
            // netherite only has tier 1
            if (type === 'netherite' && tier !== 1) return;
            event.get(`compressium:${type}_${tier}`).hardness(4.6);
        });
    });

    // Special case: netherite_1
    event.get('compressium:netherite_1').hardness(4.6);
});
