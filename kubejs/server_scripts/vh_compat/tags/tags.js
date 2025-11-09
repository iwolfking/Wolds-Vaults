onEvent('tags.blocks', event => {

    // Mineable with shovel
    event.add('minecraft:mineable/shovel', [
        'compressium:dirt_1',
        'compressium:dirt_2',
        'compressium:dirt_3',
        'compressium:dirt_4',
        'compressium:dirt_5',
        'compressium:dirt_6',
        'compressium:dirt_7',
        'compressium:dirt_8',
        'compressium:dirt_9'
    ]);

    // Mineable with pickaxe
    event.add('minecraft:mineable/pickaxe', [
        'compressium:dirt_1',
        'compressium:dirt_2',
        'compressium:dirt_3',
        'compressium:dirt_4',
        'compressium:dirt_5',
        'compressium:dirt_6',
        'compressium:dirt_7',
        'compressium:dirt_8',
        'compressium:dirt_9',
        'cfm:post_box'
    ]);

    // Building Gadgets blacklist
    event.add('buildinggadgets:blacklist/generic', [
        'sophisticatedbackpacks:iron_backpack',
        'sophisticatedbackpacks:backpack',
        'sophisticatedbackpacks:gold_backpack',
        'sophisticatedbackpacks:diamond_backpack',
        'sophisticatedbackpacks:netherite_backpack'
    ]);

    // The Vault voidmine exclusions
    event.add('the_vault:voidmine_exclusions', [
        'compressium:dirt_2','compressium:cobblestone_2','compressium:stone_2','compressium:sand_2','compressium:gravel_2',
        'compressium:andesite_2','compressium:snow_2','compressium:diorite_2','compressium:granite_2','compressium:netherrack_2',
        'compressium:obsidian_2','compressium:soulsand_2','compressium:endstone_2','compressium:clay_2',
        'compressium:dirt_3','compressium:cobblestone_3','compressium:stone_3','compressium:sand_3','compressium:gravel_3',
        'compressium:andesite_3','compressium:snow_3','compressium:diorite_3','compressium:granite_3','compressium:netherrack_3',
        'compressium:obsidian_3','compressium:soulsand_3','compressium:endstone_3','compressium:clay_3',
        'compressium:dirt_4','compressium:cobblestone_4','compressium:stone_4','compressium:sand_4','compressium:gravel_4',
        'compressium:andesite_4','compressium:snow_4','compressium:diorite_4','compressium:granite_4','compressium:netherrack_4',
        'compressium:obsidian_4','compressium:soulsand_4','compressium:endstone_4','compressium:clay_4'
    ]);

});

onEvent('tags.items', event => {

    // The Vault spawn eggs
    event.add('the_vault:spawnegg', [
        'alexsmobs:spawn_egg_flutter'
    ]);

    // The Vault passive eggs
    event.add('the_vault:passiveegg', [
        'alexsmobs:spawn_egg_flutter'
    ]);

});
