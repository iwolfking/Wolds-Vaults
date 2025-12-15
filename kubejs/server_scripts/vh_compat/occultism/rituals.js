onEvent("recipes", event => {
    //Infused Lenses
    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_foliot"
        },
        "pentacle_id": "occultism:craft_foliot",
        "duration": 60,
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/craft_infused_lenses"
        },
        "ingredients": [
            {
                "item": "occultism:lenses"
            },
            {
                "tag": "forge:ingots/silver"
            },
            {
                "item": "the_vault:extraordinary_wutodie"
            },
            {
                "item": "woldsvaults:chromatic_gold_ingot"
            }
        ],
        "result": {
            "item": "occultism:infused_lenses"
        }
    }).id('occultism:ritual/craft_infused_lenses')

    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft_with_spirit_name",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_djinni"
        },
        "pentacle_id": "occultism:craft_djinni",
        "duration": 240,
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/craft_dimensional_matrix"
        },
        "ingredients": [
            {
                "item": "compressium:silver_scrap_block_1"
            },
            {
                "item": "compressium:magic_silk_block_1"
            },
            {
                "item": "the_vault:woldsvaults:vault_ingot_block"
            },
            {
                "tag": "forge:ender_pearls"
            }
        ],
        "result": {
            "item": "occultism:dimensional_matrix"
        }
    }).id('occultism:ritual/craft_dimensional_matrix')

    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_djinni"
        },
        "pentacle_id": "occultism:craft_djinni",
        "duration": 120,
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/craft_storage_remote"
        },
        "ingredients": [
            {
                "item": "occultism:storage_remote_inert"
            },
            {
                "item": "the_vault:extraordinary_painite"
            },
            {
                "item": "the_vault:echo_pog"
            },
            {
                "item": "the_vault:black_chromatic_steel_ingot"
            }
        ],
        "result": {
            "item": "occultism:storage_remote"
        }
    }).id('occultism:ritual/craft_storage_remote')

    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft_with_spirit_name",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_djinni"
        },
        "pentacle_id": "occultism:craft_djinni",
        "duration": 60,
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/craft_infused_pickaxe"
        },
        "ingredients": [
            {
                "item": "the_vault:driftwood"
            },
            {
                "item": "the_vault:driftwood"
            },
            {
                "item": "occultism:spirit_attuned_pickaxe_head"
            },
            {
                "tag": "forge:ingots/silver"
            },
            {
                "tag": "forge:ingots/silver"
            }
        ],
        "result": {
            "item": "occultism:infused_pickaxe"
        }
    }).id('occultism:ritual/craft_infused_pickaxe')

    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_djinni"
        },
        "pentacle_id": "occultism:craft_djinni",
        "duration": 60,
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/craft_soul_gem"
        },
        "ingredients": [
            {
                "item": "the_vault:vault_diamond"
            },
            {
                "item": "the_vault:wutodic_silver_ingot"
            },
            {
                "tag": "forge:ingots/silver"
            },
            {
                "item": "woldsvaults:chromatic_gold_ingot"
            },
            {
                "item": "the_vault:eternal_soul"
            },
            {
                "item": "the_vault:eternal_soul"
            },
            {
                "item": "minecraft:soul_sand"
            },
            {
                "item": "minecraft:soul_sand"
            }
        ],
        "result": {
            "item": "occultism:soul_gem"
        }
    }).id('occultism:ritual/craft_soul_gem')

    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft_with_spirit_name",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_foliot"
        },
        "pentacle_id": "occultism:craft_foliot",
        "duration": 240,
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/craft_satchel"
        },
        "ingredients": [
            {
                "item": "sophisticatedbackpacks:backpack"
            },
            {
                "item": "the_vault:magic_silk_block"
            },
            {
                "item": "the_vault:magic_silk_block"
            },
            {
                "tag": "forge:string"
            },
            {
                "tag": "forge:ingots/silver"
            }
        ],
        "result": {
            "item": "occultism:satchel"
        }
    }).id('occultism:ritual/craft_satchel')

    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_djinni"
        },
        "pentacle_id": "occultism:craft_djinni",
        "duration": 90,
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/craft_familiar_ring"
        },
        "ingredients": [
            {
                "item": "occultism:soul_gem"
            },
            {
                "item": "woldsvaults:chromatic_gold_ingot"
            },
            {
                "item": "woldsvaults:chromatic_gold_ingot"
            },
            {
                "tag": "forge:ingots/silver"
            },
            {
                "item": "the_vault:gem_pog"
            }
        ],
        "result": {
            "item": "occultism:familiar_ring"
        }
    }).id('occultism:ritual/craft_familiar_ring')

    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_foliot"
        },
        "pentacle_id": "occultism:craft_foliot",
        "duration": 60,
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/craft_storage_controller_base"
        },
        "ingredients": [
            {
                "item": "occultism:otherstone_pedestal"
            },
            {
                "item": "woldsvaults:chromatic_gold_ingot"
            },
            {
                "item": "woldsvaults:chromatic_gold_block"
            },
            {
                "item": "woldsvaults:chromatic_gold_ingot"
            }
        ],
        "result": {
            "item": "occultism:storage_controller_base"
        }
    }).id('occultism:ritual/craft_storage_controller_base')

    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft_miner_spirit",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_foliot"
        },
        "pentacle_id": "occultism:craft_foliot",
        "duration": 60,
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/craft_miner_foliot_unspecialized"
        },
        "ingredients": [
            {
                "item": "occultism:magic_lamp_empty"
            },
            {
                "item": "occultism:iesnium_pickaxe"
            },
            {
                "item": "the_vault:raw_chromatic_iron"
            },
            {
                "item": "the_vault:black_chromatic_steel_ingot"
            }
        ],
        "result": {
            "item": "occultism:miner_foliot_unspecialized"
        }
    }).id('occultism:ritual/craft_miner_foliot_unspecialized')

    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft_miner_spirit",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_djinni"
        },
        "pentacle_id": "occultism:craft_djinni",
        "duration": 60,
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/craft_miner_djinni_ores"
        },
        "ingredients": [
            {
                "item": "occultism:magic_lamp_empty"
            },
            {
                "item": "occultism:iesnium_pickaxe"
            },
            {
                "item": "woldsvaults:pog_prism"
            },
            {
                "tag": "forge:storage_blocks/iesnium"
            },
            {
                "item": "occultism:spirit_attuned_crystal"
            }
        ],
        "result": {
            "item": "occultism:miner_djinni_ores"
        }
    }).id('occultism:ritual/craft_miner_djinni_ores')

    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft_miner_spirit",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_afrit"
        },
        "pentacle_id": "occultism:craft_afrit",
        "duration": 120,
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/craft_miner_afrit_deeps"
        },
        "ingredients": [
            {
                "item": "occultism:magic_lamp_empty"
            },
            {
                "item": "occultism:iesnium_pickaxe"
            },
            {
                "item": "occultism:spirit_attuned_crystal"
            },
            {
                "item": "occultism:afrit_essence"
            },
            {
                "item": "the_vault:black_chromatic_steel_block"
            },
            {
                "item": "the_vault:echo_pog"
            }
        ],
        "result": {
            "item": "occultism:miner_afrit_deeps"
        }
    }).id('occultism:ritual/craft_miner_afrit_deeps')

    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft_miner_spirit",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_marid"
        },
        "pentacle_id": "occultism:craft_marid",
        "duration": 120,
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/custom_ritual"
        },
        "ingredients": [
            {
                "item": "occultism:magic_lamp_empty"
            },
            {
                "item": "occultism:iesnium_pickaxe"
            },
            {
                "item": "occultism:spirit_attuned_crystal"
            },
            {
                "item": "the_vault:sublime_vault_substance"
            },
            {
                "item": "minecraft:dragon_breath"
            },
            {
                "item": "minecraft:totem_of_undying"
            },
            {
                "item": "the_vault:omega_pog"
            }
        ],
        "result": {
            "item": "occultism:miner_marid_master"
        }
    }).id('occultism:ritual/craft_miner_marid_master')

    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_foliot"
        },
        "pentacle_id": "occultism:craft_foliot",
        "duration": 120,
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/craft_stabilizer_tier1"
        },
        "ingredients": [
            {
                "item": "occultism:otherstone_pedestal"
            },
            {
                "item": "the_vault:chromatic_steel_block"
            },
            {
                "item": "the_vault:extraordinary_larimar"
            },
            {
                "item": "occultism:spirit_attuned_gem"
            }
        ],
        "result": {
            "item": "occultism:storage_stabilizer_tier1"
        }
    }).id('occultism:ritual/craft_stabilizer_tier1')

    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_djinni"
        },
        "pentacle_id": "occultism:craft_djinni",
        "duration": 240,
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/craft_stabilizer_tier2"
        },
        "ingredients": [
            {
                "item": "occultism:storage_stabilizer_tier1"
            },
            {
                "item": "the_vault:vault_diamond_block"
            },
            {
                "item": "the_vault:extraordinary_larimar"
            },
            {
                "item": "occultism:spirit_attuned_gem"
            },
            {
                "item": "occultism:spirit_attuned_gem"
            }
        ],
        "result": {
            "item": "occultism:storage_stabilizer_tier2"
        }
    }).id('occultism:ritual/craft_stabilizer_tier2')

    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_afrit"
        },
        "pentacle_id": "occultism:craft_afrit",
        "duration": 240,
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/craft_stabilizer_tier3"
        },
        "ingredients": [
            {
                "item": "occultism:storage_stabilizer_tier2"
            },
            {
                "item": "woldsvaults:chromatic_gold_block"
            },
            {
                "item": "woldsvaults:pog_prism"
            },
            {
                "item": "occultism:spirit_attuned_crystal"
            }
        ],
        "result": {
            "item": "occultism:storage_stabilizer_tier3"
        }
    }).id('occultism:ritual/craft_stabilizer_tier3')

    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_marid"
        },
        "pentacle_id": "occultism:craft_marid",
        "duration": 240,
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/craft_stabilizer_tier4"
        },
        "ingredients": [
            {
                "item": "occultism:storage_stabilizer_tier3"
            },
            {
                "tag": "forge:storage_blocks/iesnium"
            },
            {
                "item": "the_vault:echo_pog"
            },
            {
                "item": "the_vault:black_chromatic_steel_block"
            },
            {
                "item": "occultism:spirit_attuned_crystal"
            }
        ],
        "result": {
            "item": "occultism:storage_stabilizer_tier4"
        }
    }).id('occultism:ritual/craft_stabilizer_tier4')

    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:craft",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_djinni"
        },
        "pentacle_id": "occultism:craft_djinni",
        "duration": 240,
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/craft_dimensional_mineshaft"
        },
        "ingredients": [
            {
                "item": "javd:portal_block"
            },
            {
                "item": "occultism:otherstone"
            },
            {
                "item": "javd:portal_block"
            },
            {
                "item": "occultism:otherstone"
            },
            {
                "item": "woldsvaults:pog_prism"
            },
            {
                "tag": "forge:storage_blocks/iesnium"
            },
            {
                "item": "occultism:spirit_attuned_crystal"
            }
        ],
        "result": {
            "item": "occultism:dimensional_mineshaft"
        }
    }).id('occultism:ritual/craft_dimensional_mineshaft')

    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:summon_spirit_with_job",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_foliot"
        },
        "pentacle_id": "occultism:summon_foliot",
        "duration": 60,
        "spirit_max_age": 32400,
        "spirit_job_type": "occultism:crush_tier1",
        "entity_to_summon": "occultism:foliot",
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/summon_foliot_crusher"
        },
        "ingredients": [
            {
                "item": "the_vault:raw_chromatic_iron"
            },
            {
                "tag": "forge:raw_materials/gold"
            },
            {
                "tag": "forge:raw_materials/copper"
            },
            {
                "tag": "forge:raw_materials/silver"
            }
        ],
        "result": {
            "item": "occultism:jei_dummy/none"
        }
    }).id('occultism:ritual/summon_foliot_crusher')

    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:summon_spirit_with_job",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_djinni"
        },
        "pentacle_id": "occultism:summon_djinni",
        "duration": 90,
        "spirit_max_age": -1,
        "spirit_job_type": "occultism:crush_tier2",
        "entity_to_summon": "occultism:djinni",
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/summon_djinni_crusher"
        },
        "ingredients": [
            {
                "tag": "forge:dusts/iron"
            },
            {
                "tag": "forge:dusts/gold"
            },
            {
                "item": "the_vault:gem_pog"
            },
            {
                "tag": "forge:dusts/silver"
            }
        ],
        "result": {
            "item": "occultism:jei_dummy/none"
        }
    }).id('occultism:ritual/summon_djinni_crusher')

    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:summon_spirit_with_job",
        "ritual_type": "occultism:summon_spirit_with_job",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_afrit"
        },
        "pentacle_id": "occultism:summon_afrit",
        "duration": 120,
        "spirit_max_age": -1,
        "spirit_job_type": "occultism:crush_tier3",
        "entity_to_summon": "occultism:afrit",
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/summon_afrit_crusher"
        },
        "ingredients": [
            {
                "item": "the_vault:vault_diamond_block"
            },
            {
                "tag": "forge:dusts/iesnium"
            },
            {
                "tag": "forge:dusts/iesnium"
            },
            {
                "item": "woldsvaults:pog_prism"
            }
        ],
        "result": {
            "item": "occultism:jei_dummy/none"
        }
    }).id('occultism:ritual/summon_afrit_crusher')

    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:summon_spirit_with_job",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_marid"
        },
        "pentacle_id": "occultism:summon_marid",
        "duration": 150,
        "spirit_max_age": -1,
        "spirit_job_type": "occultism:crush_tier4",
        "entity_to_summon": "occultism:marid",
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/summon_marid_crusher"
        },
        "ingredients": [
            {
                "item": "the_vault:black_chromatic_steel_block"
            },
            {
                "item": "the_vault:omega_pog"
            },
            {
                "tag": "forge:storage_blocks/iesnium"
            },
            {
                "item": "the_vault:woldsvaults:vault_ingot_block"
            }
        ],
        "result": {
            "item": "occultism:jei_dummy/none"
        }
    }).id('occultism:ritual/summon_marid_crusher')

    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:summon_spirit_with_job",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_djinni"
        },
        "pentacle_id": "occultism:summon_djinni",
        "duration": 60,
        "spirit_max_age": -1,
        "spirit_job_type": "occultism:manage_machine",
        "entity_to_summon": "occultism:djinni",
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/summon_djinni_manage_machine"
        },
        "ingredients": [
            {
                "item": "the_vault:extraordinary_painite"
            },
            {
                "item": "woldsvaults:chromatic_gold_ingot"
            },
            {
                "item": "the_vault:wutodic_silver_ingot"
            },
            {
                "item": "minecraft:furnace"
            }
        ],
        "result": {
            "item": "occultism:book_of_calling_djinni_manage_machine"
        }
    }).id('occultism:ritual/summon_djinni_manage_machine')

    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:summon_spirit_with_job",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_foliot"
        },
        "pentacle_id": "occultism:summon_foliot",
        "duration": 60,
        "spirit_max_age": -1,
        "spirit_job_type": "occultism:transport_items",
        "entity_to_summon": "occultism:foliot",
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/summon_foliot_transport_items"
        },
        "ingredients": [
            {
                "item": "the_vault:perfect_painite"
            },
            {
                "tag": "forge:chests"
            },
            {
                "item": "minecraft:dispenser"
            },
            {
                "item": "minecraft:hopper"
            }
        ],
        "result": {
            "item": "occultism:book_of_calling_foliot_transport_items"
        }
    }).id('occultism:ritual/summon_foliot_transport_items')

    event.custom({
        "type": "occultism:ritual",
        "ritual_type": "occultism:summon_spirit_with_job",
        "activation_item": {
            "item": "occultism:book_of_binding_bound_foliot"
        },
        "pentacle_id": "occultism:summon_foliot",
        "duration": 60,
        "spirit_max_age": -1,
        "spirit_job_type": "occultism:cleaner",
        "entity_to_summon": "occultism:foliot",
        "ritual_dummy": {
            "item": "occultism:ritual_dummy/summon_foliot_cleaner"
        },
        "ingredients": [
            {
                "item": "occultism:brush"
            },
            {
                "item": "the_vault:perfect_painite"
            },
            {
                "item": "minecraft:dispenser"
            },
            {
                "item": "minecraft:hopper"
            }
        ],
        "result": {
            "item": "occultism:book_of_calling_foliot_cleaner"
        }
    }).id('occultism:ritual/summon_foliot_cleaner')
})

