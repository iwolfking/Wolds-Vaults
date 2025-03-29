let removedOutputsMAGS = [
    'mysticalagriculture:manasteel_seeds',
    'mysticalagriculture:uranium_seeds',
    'mysticalagriculture:osmium_seeds',
    'mysticalagriculture:elementium_seeds',
    'mysticalagriculture:fluorite_seeds',
    'mysticalagriculture:blazing_crystal_seeds',
    'mysticalagriculture:gold_seeds',
    'mysticalagriculture:diamond_seeds',
    'mysticalagriculture:emerald_seeds',
    'mysticalagriculture:netherite_seeds',
    'mysticalagriculture:niotic_crystal_seeds',
    'mysticalagriculture:terrasteel_seeds',
    'mysticalagriculture:spirited_crystal_seeds',
    'mysticalagriculture:certus_quartz_seeds',
    'mysticalagriculture:enderium_seeds',
    'mysticalagriculture:signalum_seeds',
    'mysticalagriculture:lumium_seeds',
    'mysticalagriculture:fluix_seeds',
    'mysticalagriculture:steel_seeds',
    'mysticalagriculture:lapis_lazuli_seeds',
    'mysticalagriculture:uraninite_seeds',
    'mysticalagriculture:obsidian_seeds',
    'mysticalagriculture:redstone_seeds',
    'mysticalagriculture:rubber_seeds',
    'mysticalagriculture:chromatic_iron_seeds',
    'mysticalagriculture:nitro_crystal_seeds',
    'mysticalagriculture:gaia_spirit_seeds',
    'mysticalagriculture:nether_star_seeds',
    'mysticalagriculture:dragon_egg_seeds',
    'mysticalagriculture:energized_steel_seeds',
    'mysticalagriculture:mithril_seeds',
    'mysticalagriculture:invar_seeds'
];
onEvent("recipes", event => {
    removedOutputsMAGS.forEach(id => {
        event.remove({ 'mod': 'mysticalagriculture', 'output': `${id}` })
    })


    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:pogging_seed_base'),
        ingredients: [
            Item.of('botania:manasteel_ingot').toJson(),
            Item.of('mysticalagriculture:tertium_essence').toJson(),
            Item.of('botania:manasteel_ingot').toJson(),
            Item.of('mysticalagriculture:tertium_essence').toJson(),
            Item.of('botania:manasteel_ingot').toJson(),
            Item.of('mysticalagriculture:tertium_essence').toJson(),
            Item.of('botania:manasteel_ingot').toJson(),
            Item.of('mysticalagriculture:tertium_essence').toJson()
        ],
        result: Item.of('mysticalagriculture:manasteel_seeds').toResultJson()
    })

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:pogging_seed_base'),
        ingredients: [
            Item.of('#forge:gems/certus_quartz').toJson(),
            Item.of('mysticalagriculture:tertium_essence').toJson(),
            Item.of('#forge:gems/certus_quartz').toJson(),
            Item.of('mysticalagriculture:tertium_essence').toJson(),
            Item.of('#forge:gems/certus_quartz').toJson(),
            Item.of('mysticalagriculture:tertium_essence').toJson(),
            Item.of('#forge:gems/certus_quartz').toJson(),
            Item.of('mysticalagriculture:tertium_essence').toJson()
        ],
        result: Item.of('mysticalagriculture:certus_quartz_seeds').toResultJson()
    })

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:pogging_seed_base'),
        ingredients: [
            Item.of('botania:elementium_ingot').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('botania:elementium_ingot').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('botania:elementium_ingot').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('botania:elementium_ingot').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
        ],
        result: Item.of('mysticalagriculture:elementium_seeds').toResultJson()
    })

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:pogging_seed_base'),
        ingredients: [
            Item.of('mekanism:ingot_uranium').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('mekanism:ingot_uranium').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('mekanism:ingot_uranium').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('mekanism:ingot_uranium').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
        ],
        result: Item.of('mysticalagriculture:uranium_seeds').toResultJson()
    })

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:pogging_seed_base'),
        ingredients: [
            Item.of('mekanism:ingot_osmium').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('mekanism:ingot_osmium').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('mekanism:ingot_osmium').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('mekanism:ingot_osmium').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
        ],
        result: Item.of('mysticalagriculture:osmium_seeds').toResultJson()
    })

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:pogging_seed_base'),
        ingredients: [
            Item.of('mekanism:fluorite_gem').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('mekanism:fluorite_gem').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('mekanism:fluorite_gem').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('mekanism:fluorite_gem').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
        ],
        result: Item.of('mysticalagriculture:fluorite_seeds').toResultJson()
    })

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:pogging_seed_base'),
        ingredients: [
            Item.of('powah:crystal_blazing').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('powah:crystal_blazing').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('powah:crystal_blazing').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('powah:crystal_blazing').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
        ],
        result: Item.of('mysticalagriculture:blazing_crystal_seeds').toResultJson()
    })

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:pogging_seed_base'),
        ingredients: [
            Item.of('the_vault:vault_diamond_block').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson(),
            Item.of('the_vault:vault_diamond_block').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson(),
            Item.of('the_vault:vault_diamond_block').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson(),
            Item.of('the_vault:vault_diamond_block').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson()
        ],
        result: Item.of('mysticalagriculture:diamond_seeds').toResultJson()
    })

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:echoing_seed_base'),
        ingredients: [
            Item.of('the_vault:chromatic_iron_block').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson(),
            Item.of('the_vault:chromatic_iron_block').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson(),
            Item.of('the_vault:chromatic_iron_block').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson(),
            Item.of('the_vault:chromatic_iron_block').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson()
        ],
        result: Item.of('mysticalagriculture:chromatic_iron_seeds').toResultJson()
    }).id('mysticalagriculture:chromatic_iron_seeds_infusion')

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:pogging_seed_base'),
        ingredients: [
            Item.of('botanicalmachinery:mana_emerald_block').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson(),
            Item.of('botanicalmachinery:mana_emerald_block').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson(),
            Item.of('botanicalmachinery:mana_emerald_block').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson(),
            Item.of('botanicalmachinery:mana_emerald_block').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson()
        ],
        result: Item.of('mysticalagriculture:emerald_seeds').toResultJson()
    })


    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:echoing_seed_base'),
        ingredients: [
            Item.of('the_vault:cluster_netherite').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson(),
            Item.of('the_vault:cluster_netherite').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson(),
            Item.of('the_vault:cluster_netherite').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson(),
            Item.of('the_vault:cluster_netherite').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson()
        ],
        result: Item.of('mysticalagriculture:netherite_seeds').toResultJson()
    }).id('mysticalagriculture:netherite_seeds')

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:echoing_seed_base'),
        ingredients: [
            Item.of('botania:terrasteel_ingot').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson(),
            Item.of('botania:terrasteel_ingot').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson(),
            Item.of('botania:terrasteel_ingot').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson(),
            Item.of('botania:terrasteel_ingot').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson()
        ],
        result: Item.of('mysticalagriculture:terrasteel_seeds').toResultJson()
    })

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:pogging_seed_base'),
        ingredients: [
            Item.of('powah:crystal_niotic').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson(),
            Item.of('powah:crystal_niotic').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson(),
            Item.of('powah:crystal_niotic').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson(),
            Item.of('powah:crystal_niotic').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson()
        ],
        result: Item.of('mysticalagriculture:niotic_crystal_seeds').toResultJson()
    })

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:pogging_seed_base'),
        ingredients: [
            Item.of('powah:crystal_spirited').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson(),
            Item.of('the_vault:perfect_echo_gem').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson(),
            Item.of('powah:crystal_spirited').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson(),
            Item.of('the_vault:perfect_echo_gem').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson()
        ],
        result: Item.of('mysticalagriculture:spirited_crystal_seeds').toResultJson()
    })

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:echoing_seed_base'),
        ingredients: [
            Item.of('thermal:enderium_ingot').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson(),
            Item.of('the_vault:perfect_echo_gem').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson(),
            Item.of('thermal:enderium_ingot').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson(),
            Item.of('the_vault:perfect_echo_gem').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson()
        ],
        result: Item.of('mysticalagriculture:enderium_seeds').toResultJson()
    })

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:pogging_seed_base'),
        ingredients: [
            Item.of('thermal:signalum_ingot').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('thermal:signalum_ingot').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('thermal:signalum_ingot').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('thermal:signalum_ingot').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson()
        ],
        result: Item.of('mysticalagriculture:signalum_seeds').toResultJson()
    })

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:pogging_seed_base'),
        ingredients: [
            Item.of('thermal:lumium_ingot').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('thermal:lumium_ingot').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('thermal:lumium_ingot').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('thermal:lumium_ingot').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson()
        ],
        result: Item.of('mysticalagriculture:lumium_seeds').toResultJson()
    })

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:pogging_seed_base'),
        ingredients: [
            Item.of('thermal:invar_ingot').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('thermal:invar_ingot').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('thermal:invar_ingot').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('thermal:invar_ingot').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson()
        ],
        result: Item.of('mysticalagriculture:invar_seeds').toResultJson()
    })

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:pogging_seed_base'),
        ingredients: [
            Item.of('ae2:fluix_crystal').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('ae2:fluix_crystal').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('ae2:fluix_crystal').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('ae2:fluix_crystal').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson()
        ],
        result: Item.of('mysticalagriculture:fluix_seeds').toResultJson()
    })



    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:pogging_seed_base'),
        ingredients: [
            Item.of('mekanism:ingot_steel').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('mekanism:ingot_steel').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('mekanism:ingot_steel').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('mekanism:ingot_steel').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson()
        ],
        result: Item.of('mysticalagriculture:steel_seeds').toResultJson()
    })

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:pogging_seed_base'),
        ingredients: [
            Item.of('minecraft:lapis_block').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('minecraft:lapis_block').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('minecraft:lapis_block').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('minecraft:lapis_block').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson()
        ],
        result: Item.of('mysticalagriculture:lapis_lazuli_seeds').toResultJson()
    })

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:pogging_seed_base'),
        ingredients: [
            Item.of('the_vault:chromatic_gold_ingot').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('the_vault:chromatic_gold_ingot').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('the_vault:chromatic_gold_ingot').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('the_vault:chromatic_gold_ingot').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson()
        ],
        result: Item.of('mysticalagriculture:gold_seeds').toResultJson()
    })

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:pogging_seed_base'),
        ingredients: [
            Item.of('powah:uraninite').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson(),
            Item.of('powah:uraninite').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson(),
            Item.of('powah:uraninite').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson(),
            Item.of('powah:uraninite').toJson(),
            Item.of('mysticalagriculture:supremium_essence').toJson()
        ],
        result: Item.of('mysticalagriculture:uraninite_seeds').toResultJson()
    })

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:pogging_seed_base'),
        ingredients: [
            Item.of('powah:steel_energized').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('powah:steel_energized').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('powah:steel_energized').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson(),
            Item.of('powah:steel_energized').toJson(),
            Item.of('mysticalagriculture:imperium_essence').toJson()
        ],
        result: Item.of('mysticalagriculture:energized_steel_seeds').toResultJson()
    })

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:pogging_seed_base'),
        ingredients: [
            Item.of('minecraft:obsidian').toJson(),
            Item.of('mysticalagriculture:tertium_essence').toJson(),
            Item.of('minecraft:obsidian').toJson(),
            Item.of('mysticalagriculture:tertium_essence').toJson(),
            Item.of('minecraft:obsidian').toJson(),
            Item.of('mysticalagriculture:tertium_essence').toJson(),
            Item.of('minecraft:obsidian').toJson(),
            Item.of('mysticalagriculture:tertium_essence').toJson()
        ],
        result: Item.of('mysticalagriculture:obsidian_seeds').toResultJson()
    })

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:pogging_seed_base'),
        ingredients: [
            Item.of('minecraft:redstone_block').toJson(),
            Item.of('mysticalagriculture:tertium_essence').toJson(),
            Item.of('minecraft:redstone_block').toJson(),
            Item.of('mysticalagriculture:tertium_essence').toJson(),
            Item.of('minecraft:redstone_block').toJson(),
            Item.of('mysticalagriculture:tertium_essence').toJson(),
            Item.of('minecraft:redstone_block').toJson(),
            Item.of('mysticalagriculture:tertium_essence').toJson()
        ],
        result: Item.of('mysticalagriculture:redstone_seeds').toResultJson()
    })

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:pogging_seed_base'),
        ingredients: [
            Item.of('industrialforegoing:dryrubber').toJson(),
            Item.of('mysticalagriculture:inferium_essence').toJson(),
            Item.of('industrialforegoing:dryrubber').toJson(),
            Item.of('mysticalagriculture:inferium_essence').toJson(),
            Item.of('industrialforegoing:dryrubber').toJson(),
            Item.of('mysticalagriculture:inferium_essence').toJson(),
            Item.of('industrialforegoing:dryrubber').toJson(),
            Item.of('mysticalagriculture:inferium_essence').toJson()
        ],
        result: Item.of('mysticalagriculture:rubber_seeds').toResultJson()
    })

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:pogging_seed_base'),
        ingredients: [
            Item.of('thermal:rubber').toJson(),
            Item.of('mysticalagriculture:inferium_essence').toJson(),
            Item.of('thermal:rubber').toJson(),
            Item.of('mysticalagriculture:inferium_essence').toJson(),
            Item.of('thermal:rubber').toJson(),
            Item.of('mysticalagriculture:inferium_essence').toJson(),
            Item.of('thermal:rubber').toJson(),
            Item.of('mysticalagriculture:inferium_essence').toJson()
        ],
        result: Item.of('mysticalagriculture:rubber_seeds').toResultJson()

    })

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:echoing_seed_base'),
        ingredients: [
            Item.of('mysticalagradditions:dragon_scale').toJson(),
            Item.of('mysticalagradditions:insanium_essence').toJson(),
            Item.of('mysticalagradditions:dragon_scale').toJson(),
            Item.of('mysticalagradditions:insanium_essence').toJson(),
            Item.of('mysticalagradditions:dragon_scale').toJson(),
            Item.of('mysticalagradditions:insanium_essence').toJson(),
            Item.of('mysticalagradditions:dragon_scale').toJson(),
            Item.of('mysticalagradditions:insanium_essence').toJson()
        ],
        result: Item.of('mysticalagriculture:dragon_egg_seeds').toResultJson()
    })

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:echoing_seed_base'),
        ingredients: [
            Item.of('powah:nitro_crystal_block').toJson(),
            Item.of('mysticalagradditions:insanium_essence').toJson(),
            Item.of('powah:nitro_crystal_block').toJson(),
            Item.of('mysticalagradditions:insanium_essence').toJson(),
            Item.of('powah:nitro_crystal_block').toJson(),
            Item.of('mysticalagradditions:insanium_essence').toJson(),
            Item.of('powah:nitro_crystal_block').toJson(),
            Item.of('mysticalagradditions:insanium_essence').toJson()
        ],
        result: Item.of('mysticalagriculture:nitro_crystal_seeds').toResultJson()
    })

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:echoing_seed_base'),
        ingredients: [
            Item.of('botania:life_essence').toJson(),
            Item.of('mysticalagradditions:insanium_essence').toJson(),
            Item.of('botania:life_essence').toJson(),
            Item.of('mysticalagradditions:insanium_essence').toJson(),
            Item.of('botania:life_essence').toJson(),
            Item.of('mysticalagradditions:insanium_essence').toJson(),
            Item.of('botania:life_essence').toJson(),
            Item.of('mysticalagradditions:insanium_essence').toJson()
        ],
        result: Item.of('mysticalagriculture:gaia_spirit_seeds').toResultJson()
    })

    event.custom({
        type: 'mysticalagriculture:infusion',
        input: Ingredient.of('mysticalagriculture:echoing_seed_base'),
        ingredients: [
            Item.of('minecraft:nether_star').toJson(),
            Item.of('mysticalagradditions:insanium_essence').toJson(),
            Item.of('minecraft:nether_star').toJson(),
            Item.of('mysticalagradditions:insanium_essence').toJson(),
            Item.of('minecraft:nether_star').toJson(),
            Item.of('mysticalagradditions:insanium_essence').toJson(),
            Item.of('minecraft:nether_star').toJson(),
            Item.of('mysticalagradditions:insanium_essence').toJson()
        ],
        result: Item.of('mysticalagriculture:nether_star_seeds').toResultJson()
    })



})