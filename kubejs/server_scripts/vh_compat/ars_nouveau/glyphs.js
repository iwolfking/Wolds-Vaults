onEvent("recipes", event => {
    event.custom({
        "type": "ars_nouveau:glyph",
        "count": 1,
        "inputItems": [
            {
                "item": {
                    "item": "ars_nouveau:manipulation_essence"
                }
            },
            {
                "item": {
                    "item": "minecraft:phantom_membrane"
                }
            },
            {
                "item": {
                    "item": "minecraft:phantom_membrane"
                }
            },
            {
                "item": {
                    "item": "the_vault:phoenix_dust"
                }
            },
            {
                "item": {
                    "tag": "forge:ender_pearls"
                }
            },
            {
                "item": {
                    "tag": "forge:ender_pearls"
                }
            }
        ],
        "exp": 160,
        "output": "ars_nouveau:glyph_intangible"
    }).id('ars_nouveau:glyph_intangible')


    event.custom({
        "type": "ars_nouveau:glyph",
        "count": 1,
        "inputItems": [
            {
                "item": {
                    "item": "minecraft:flint_and_steel"
                }
            },
            {
                "item": {
                    "item": "minecraft:coal"
                }
            },
            {
                "item": {
                    "item": "woldsvaults:carbon_block"
                }
            },
            {
                "item": {
                    "item": "woldsvaults:carbon_block"
                }
            }
        ],
        "exp": 27,
        "output": "ars_nouveau:glyph_ignite"
    }).id('ars_nouveau:glyph_ignite')

    event.custom({
        "type": "ars_nouveau:glyph",
        "count": 1,
        "inputItems": [
            {
                "item": {
                    "item": "ars_nouveau:fire_essence"
                }
            },
            {
                "item": {
                    "item": "minecraft:flint_and_steel"
                }
            },
            {
                "item": {
                    "item": "minecraft:flint_and_steel"
                }
            },
            {
                "item": {
                    "item": "minecraft:fire_charge"
                }
            },
            {
                "item": {
                    "item": "the_vault:extraordinary_painite"
                }
            },
            {
                "item": {
                    "item": "minecraft:blaze_rod"
                }
            }
        ],
        "exp": 55,
        "output": "ars_nouveau:glyph_flare"
    }).id('ars_nouveau:glyph_flare')


    event.custom({
        "type": "ars_nouveau:glyph",
        "count": 1,
        "inputItems": [
            {
                "item": {
                    "item": "ars_nouveau:earth_essence"
                }
            },
            {
                "item": {
                    "item": "minecraft:grindstone"
                }
            },
            {
                "item": {
                    "item": "minecraft:piston"
                }
            },
            {
                "item": {
                    "item": "the_vault:perfect_black_opal"
                }
            }
        ],
        "exp": 55,
        "output": "ars_nouveau:glyph_crush"
    }).id('ars_nouveau:glyph_crush')

    event.custom({
        "type": "ars_nouveau:glyph",
        "count": 1,
        "inputItems": [
            {
                "item": {
                    "item": "ars_nouveau:water_essence"
                }
            },
            {
                "item": {
                    "item": "minecraft:snow_block"
                }
            },
            {
                "item": {
                    "item": "minecraft:snow_block"
                }
            },
            {
                "item": {
                    "item": "the_vault:extraordinary_larimar"
                }
            }
        ],
        "exp": 27,
        "output": "ars_nouveau:glyph_freeze"
    }).id('ars_nouveau:glyph_freeze')

    event.custom({
        "type": "ars_nouveau:glyph",
        "count": 1,
        "inputItems": [
            {
                "item": {
                    "item": "ars_nouveau:fire_essence"
                }
            },
            {
                "item": {
                    "item": "minecraft:blast_furnace"
                }
            },
            {
                "item": {
                    "item": "minecraft:blast_furnace"
                }
            },
            {
                "item": {
                    "item": "the_vault:chromatic_steel_block"
                }
            },
            {
                "item": {
                    "item": "the_vault:extraordinary_painite"
                }
            },
            {
                "item": {
                    "tag": "forge:rods/blaze"
                }
            }
        ],
        "exp": 55,
        "output": "ars_nouveau:glyph_smelt"
    }).id('ars_nouveau:glyph_smelt')

    event.custom({
        "type": "ars_nouveau:glyph",
        "count": 1,
        "inputItems": [
            {
                "item": {
                    "item": "ars_nouveau:earth_essence"
                }
            },
            {
                "item": {
                    "item": "minecraft:bone_block"
                }
            },
            {
                "item": {
                    "item": "minecraft:bone_block"
                }
            },
            {
                "item": {
                    "item": "minecraft:bone_block"
                }
            },
            {
                "item": {
                    "item": "the_vault:extraordinary_wutodie"
                }
            },
            {
                "item": {
                    "item": "the_vault:extraordinary_alexandrite"
                }
            },
            {
                "item": {
                    "tag": "forge:seeds"
                }
            },
            {
                "item": {
                    "tag": "forge:seeds"
                }
            },
            {
                "item": {
                    "tag": "forge:seeds"
                }
            }
        ],
        "exp": 55,
        "output": "ars_nouveau:glyph_grow"
    }).id('ars_nouveau:glyph_grow')

    event.custom({
        "type": "ars_nouveau:glyph",
        "count": 1,
        "inputItems": [
            {
                "item": {
                    "item": "ars_nouveau:water_essence"
                }
            },
            {
                "item": {
                    "item": "the_vault:infinite_water_bucket"
                }
            }
        ],
        "exp": 55,
        "output": "ars_nouveau:glyph_conjure_water"
    }).id('ars_nouveau:glyph_conjure_water')
})