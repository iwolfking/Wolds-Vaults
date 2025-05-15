let removedOutputsBST = [
    'bonsaitrees3:bonsaipot',
];
onEvent("recipes", event => {
    removedOutputsBST.forEach(id => {
        event.remove({ 'output': `${id}` })
    })

    event.shaped(Item.of('bonsaitrees3:bonsaipot'),
        [
            'BVB',
            'BMB',
            'III'
        ], {
            B: '#forge:ingots/brick',
            V: 'woldsvaults:chroma_core',
            M: 'the_vault:packed_vault_meat_block',
            I: 'the_vault:chromatic_steel_ingot'

        });

    //🌱  Regions_unexplored Saplings

    event.custom({
        type: 'bonsaitrees3:sapling',
        sapling: {
            item: 'regions_unexplored:sculkwood_sapling'
        },
        drops: [
            {
                rolls: 1,
                chance: 0.05,
                result: {
                    item: 'regions_unexplored:sculkwood_sapling'
                }
            },
            {
                rolls: 1,
                chance: 0.9,
                result: {
                    item: 'regions_unexplored:sculkwood_log'
                }
            },
            {
                rolls: 2,
                chance: 0.5,
                result: {
                    item: 'minecraft:stick'
                }
            },
            {
                rolls: 1,
                chance: 0.25,
                result: {
                    item: 'regions_unexplored:sculkwood_leaves'
                },
                requiresSilkTouch: true
            }
        ],
        compatibleSoilTags: [
            'dirt',
            'grass'
        ]
    }).id('bonsaitrees3:regions_unexplored/sculkwood_sapling');

    event.custom({
        type: 'bonsaitrees3:sapling',
        sapling: {
            item: 'regions_unexplored:bamboo_sapling'
        },
        drops: [
            {
                rolls: 1,
                chance: 0.05,
                result: {
                    item: 'regions_unexplored:bamboo_sapling'
                }
            },
            {
                rolls: 1,
                chance: 0.9,
                result: {
                    item: 'regions_unexplored:bamboo_log'
                }
            },
            {
                rolls: 2,
                chance: 0.5,
                result: {
                    item: 'minecraft:stick'
                }
            },
            {
                rolls: 1,
                chance: 0.25,
                result: {
                    item: 'regions_unexplored:bamboo_leaves'
                },
                requiresSilkTouch: true
            }
        ],
        compatibleSoilTags: [
            'dirt',
            'grass'
        ]
    }).id('bonsaitrees3:regions_unexplored/bamboo_sapling');

    event.custom({
        type: 'bonsaitrees3:sapling',
        sapling: {
            item: 'regions_unexplored:silver_birch_sapling'
        },
        drops: [
            {
                rolls: 1,
                chance: 0.05,
                result: {
                    item: 'regions_unexplored:silver_birch_sapling'
                }
            },
            {
                rolls: 1,
                chance: 0.9,
                result: {
                    item: 'minecraft:birch_log'
                }
            },
            {
                rolls: 2,
                chance: 0.5,
                result: {
                    item: 'minecraft:stick'
                }
            },
            {
                rolls: 1,
                chance: 0.25,
                result: {
                    item: 'regions_unexplored:silver_birch_leaves'
                },
                requiresSilkTouch: true
            }
        ],
        compatibleSoilTags: [
            'dirt',
            'grass'
        ]
    }).id('bonsaitrees3:regions_unexplored/silver_birch_sapling');

    event.custom({
        type: 'bonsaitrees3:sapling',
        sapling: {
            item: 'regions_unexplored:baobab_sapling'
        },
        drops: [
            {
                rolls: 1,
                chance: 0.05,
                result: {
                    item: 'regions_unexplored:baobab_sapling'
                }
            },
            {
                rolls: 1,
                chance: 0.9,
                result: {
                    item: 'regions_unexplored:baobab_log'
                }
            },
            {
                rolls: 2,
                chance: 0.5,
                result: {
                    item: 'minecraft:stick'
                }
            },
            {
                rolls: 1,
                chance: 0.25,
                result: {
                    item: 'regions_unexplored:baobab_leaves'
                },
                requiresSilkTouch: true
            }
        ],
        compatibleSoilTags: [
            'dirt',
            'grass'
        ]
    }).id('bonsaitrees3:regions_unexplored/baobab_sapling');

    event.custom({
        type: 'bonsaitrees3:sapling',
        sapling: {
            item: 'regions_unexplored:blackwood_sapling'
        },
        drops: [
            {
                rolls: 1,
                chance: 0.05,
                result: {
                    item: 'regions_unexplored:blackwood_sapling'
                }
            },
            {
                rolls: 1,
                chance: 0.9,
                result: {
                    item: 'regions_unexplored:blackwood_log'
                }
            },
            {
                rolls: 2,
                chance: 0.5,
                result: {
                    item: 'minecraft:stick'
                }
            },
            {
                rolls: 1,
                chance: 0.25,
                result: {
                    item: 'regions_unexplored:blackwood_leaves'
                },
                requiresSilkTouch: true
            }
        ],
        compatibleSoilTags: [
            'dirt',
            'grass'
        ]
    }).id('bonsaitrees3:regions_unexplored/blackwood_sapling');

    event.custom({
        type: 'bonsaitrees3:sapling',
        sapling: {
            item: 'regions_unexplored:cherry_sapling'
        },
        drops: [
            {
                rolls: 1,
                chance: 0.05,
                result: {
                    item: 'regions_unexplored:cherry_sapling'
                }
            },
            {
                rolls: 1,
                chance: 0.9,
                result: {
                    item: 'regions_unexplored:cherry_log'
                }
            },
            {
                rolls: 2,
                chance: 0.5,
                result: {
                    item: 'minecraft:stick'
                }
            },
            {
                rolls: 1,
                chance: 0.25,
                result: {
                    item: 'regions_unexplored:cherry_leaves'
                },
                requiresSilkTouch: true
            }
        ],
        compatibleSoilTags: [
            'dirt',
            'grass'
        ]
    }).id('bonsaitrees3:regions_unexplored/cherry_sapling');

    event.custom({
        type: 'bonsaitrees3:sapling',
        sapling: {
            item: 'regions_unexplored:cypress_sapling'
        },
        drops: [
            {
                rolls: 1,
                chance: 0.05,
                result: {
                    item: 'regions_unexplored:cypress_sapling'
                }
            },
            {
                rolls: 1,
                chance: 0.9,
                result: {
                    item: 'regions_unexplored:cypress_log'
                }
            },
            {
                rolls: 2,
                chance: 0.5,
                result: {
                    item: 'minecraft:stick'
                }
            },
            {
                rolls: 1,
                chance: 0.25,
                result: {
                    item: 'regions_unexplored:cypress_leaves'
                },
                requiresSilkTouch: true
            }
        ],
        compatibleSoilTags: [
            'dirt',
            'grass'
        ]
    }).id('bonsaitrees3:regions_unexplored/cypress_sapling');

    event.custom({
        type: 'bonsaitrees3:sapling',
        sapling: {
            item: 'regions_unexplored:dead_sapling'
        },
        drops: [
            {
                rolls: 1,
                chance: 0.05,
                result: {
                    item: 'regions_unexplored:dead_sapling'
                }
            },
            {
                rolls: 1,
                chance: 0.9,
                result: {
                    item: 'regions_unexplored:dead_log'
                }
            },
            {
                rolls: 2,
                chance: 0.5,
                result: {
                    item: 'minecraft:stick'
                }
            },
            {
                rolls: 1,
                chance: 0.25,
                result: {
                    item: 'regions_unexplored:dead_leaves'
                },
                requiresSilkTouch: true
            }
        ],
        compatibleSoilTags: [
            'dirt',
            'grass'
        ]
    }).id('bonsaitrees3:regions_unexplored/dead_sapling');

    event.custom({
        type: 'bonsaitrees3:sapling',
        sapling: {
            item: 'regions_unexplored:dead_pine_sapling'
        },
        drops: [
            {
                rolls: 1,
                chance: 0.05,
                result: {
                    item: 'regions_unexplored:dead_pine_sapling'
                }
            },
            {
                rolls: 1,
                chance: 0.9,
                result: {
                    item: 'regions_unexplored:pine_log'
                }
            },
            {
                rolls: 2,
                chance: 0.5,
                result: {
                    item: 'minecraft:stick'
                }
            },
            {
                rolls: 1,
                chance: 0.25,
                result: {
                    item: 'regions_unexplored:dead_pine_leaves'
                },
                requiresSilkTouch: true
            }
        ],
        compatibleSoilTags: [
            'dirt',
            'grass'
        ]
    }).id('bonsaitrees3:regions_unexplored/dead_pine_sapling');

    event.custom({
        type: 'bonsaitrees3:sapling',
        sapling: {
            item: 'regions_unexplored:eucalyptus_sapling'
        },
        drops: [
            {
                rolls: 1,
                chance: 0.05,
                result: {
                    item: 'regions_unexplored:eucalyptus_sapling'
                }
            },
            {
                rolls: 1,
                chance: 0.9,
                result: {
                    item: 'regions_unexplored:eucalyptus_log'
                }
            },
            {
                rolls: 2,
                chance: 0.5,
                result: {
                    item: 'minecraft:stick'
                }
            },
            {
                rolls: 1,
                chance: 0.25,
                result: {
                    item: 'regions_unexplored:eucalyptus_leaves'
                },
                requiresSilkTouch: true
            }
        ],
        compatibleSoilTags: [
            'dirt',
            'grass'
        ]
    }).id('bonsaitrees3:regions_unexplored/eucalyptus_sapling');

    event.custom({
        type: 'bonsaitrees3:sapling',
        sapling: {
            item: 'regions_unexplored:joshua_sapling'
        },
        drops: [
            {
                rolls: 1,
                chance: 0.05,
                result: {
                    item: 'regions_unexplored:joshua_sapling'
                }
            },
            {
                rolls: 1,
                chance: 0.9,
                result: {
                    item: 'regions_unexplored:joshua_log'
                }
            },
            {
                rolls: 2,
                chance: 0.5,
                result: {
                    item: 'minecraft:stick'
                }
            },
            {
                rolls: 1,
                chance: 0.25,
                result: {
                    item: 'regions_unexplored:joshua_leaves'
                },
                requiresSilkTouch: true
            }
        ],
        compatibleSoilTags: [
            'dirt',
            'grass'
        ]
    }).id('bonsaitrees3:regions_unexplored/joshua_sapling');

    event.custom({
        type: 'bonsaitrees3:sapling',
        sapling: {
            item: 'regions_unexplored:golden_larch_sapling'
        },
        drops: [
            {
                rolls: 1,
                chance: 0.05,
                result: {
                    item: 'regions_unexplored:golden_larch_sapling'
                }
            },
            {
                rolls: 1,
                chance: 0.9,
                result: {
                    item: 'regions_unexplored:larch_log'
                }
            },
            {
                rolls: 2,
                chance: 0.5,
                result: {
                    item: 'minecraft:stick'
                }
            },
            {
                rolls: 1,
                chance: 0.25,
                result: {
                    item: 'regions_unexplored:golden_larch_leaves'
                },
                requiresSilkTouch: true
            }
        ],
        compatibleSoilTags: [
            'dirt',
            'grass'
        ]
    }).id('bonsaitrees3:regions_unexplored/golden_larch_sapling');

    event.custom({
        type: 'bonsaitrees3:sapling',
        sapling: {
            item: 'regions_unexplored:larch_sapling'
        },
        drops: [
            {
                rolls: 1,
                chance: 0.05,
                result: {
                    item: 'regions_unexplored:larch_sapling'
                }
            },
            {
                rolls: 1,
                chance: 0.9,
                result: {
                    item: 'regions_unexplored:larch_log'
                }
            },
            {
                rolls: 2,
                chance: 0.5,
                result: {
                    item: 'minecraft:stick'
                }
            },
            {
                rolls: 1,
                chance: 0.25,
                result: {
                    item: 'regions_unexplored:larch_leaves'
                },
                requiresSilkTouch: true
            }
        ],
        compatibleSoilTags: [
            'dirt',
            'grass'
        ]
    }).id('bonsaitrees3:regions_unexplored/larch_sapling');

    event.custom({
        type: 'bonsaitrees3:sapling',
        sapling: {
            item: 'regions_unexplored:maple_sapling'
        },
        drops: [
            {
                rolls: 1,
                chance: 0.05,
                result: {
                    item: 'regions_unexplored:maple_sapling'
                }
            },
            {
                rolls: 1,
                chance: 0.9,
                result: {
                    item: 'regions_unexplored:maple_log'
                }
            },
            {
                rolls: 2,
                chance: 0.5,
                result: {
                    item: 'minecraft:stick'
                }
            },
            {
                rolls: 1,
                chance: 0.25,
                result: {
                    item: 'regions_unexplored:maple_leaves'
                },
                requiresSilkTouch: true
            }
        ],
        compatibleSoilTags: [
            'dirt',
            'grass'
        ]
    }).id('bonsaitrees3:regions_unexplored/maple_sapling');

    event.custom({
        type: 'bonsaitrees3:sapling',
        sapling: {
            item: 'regions_unexplored:mauve_sapling'
        },
        drops: [
            {
                rolls: 1,
                chance: 0.05,
                result: {
                    item: 'regions_unexplored:mauve_sapling'
                }
            },
            {
                rolls: 1,
                chance: 0.9,
                result: {
                    item: 'regions_unexplored:mauve_log'
                }
            },
            {
                rolls: 2,
                chance: 0.5,
                result: {
                    item: 'minecraft:stick'
                }
            },
            {
                rolls: 1,
                chance: 0.25,
                result: {
                    item: 'regions_unexplored:mauve_leaves'
                },
                requiresSilkTouch: true
            }
        ],
        compatibleSoilTags: [
            'dirt',
            'grass'
        ]
    }).id('bonsaitrees3:regions_unexplored/mauve_sapling');

    event.custom({
        type: 'bonsaitrees3:sapling',
        sapling: {
            item: 'regions_unexplored:palm_sapling'
        },
        drops: [
            {
                rolls: 1,
                chance: 0.05,
                result: {
                    item: 'regions_unexplored:palm_sapling'
                }
            },
            {
                rolls: 1,
                chance: 0.9,
                result: {
                    item: 'regions_unexplored:palm_log'
                }
            },
            {
                rolls: 2,
                chance: 0.5,
                result: {
                    item: 'minecraft:stick'
                }
            },
            {
                rolls: 1,
                chance: 0.25,
                result: {
                    item: 'regions_unexplored:palm_leaves'
                },
                requiresSilkTouch: true
            }
        ],
        compatibleSoilTags: [
            'dirt',
            'grass'
        ]
    }).id('bonsaitrees3:regions_unexplored/palm_sapling');

    event.custom({
        type: 'bonsaitrees3:sapling',
        sapling: {
            item: 'regions_unexplored:redwood_sapling'
        },
        drops: [
            {
                rolls: 1,
                chance: 0.05,
                result: {
                    item: 'regions_unexplored:redwood_sapling'
                }
            },
            {
                rolls: 1,
                chance: 0.9,
                result: {
                    item: 'regions_unexplored:redwood_log'
                }
            },
            {
                rolls: 2,
                chance: 0.5,
                result: {
                    item: 'minecraft:stick'
                }
            },
            {
                rolls: 1,
                chance: 0.25,
                result: {
                    item: 'regions_unexplored:redwood_leaves'
                },
                requiresSilkTouch: true
            }
        ],
        compatibleSoilTags: [
            'dirt',
            'grass'
        ]
    }).id('bonsaitrees3:regions_unexplored/redwood_sapling');

    event.custom({
        type: 'bonsaitrees3:sapling',
        sapling: {
            item: 'regions_unexplored:willow_sapling'
        },
        drops: [
            {
                rolls: 1,
                chance: 0.05,
                result: {
                    item: 'regions_unexplored:willow_sapling'
                }
            },
            {
                rolls: 1,
                chance: 0.9,
                result: {
                    item: 'regions_unexplored:willow_log'
                }
            },
            {
                rolls: 2,
                chance: 0.5,
                result: {
                    item: 'minecraft:stick'
                }
            },
            {
                rolls: 1,
                chance: 0.25,
                result: {
                    item: 'regions_unexplored:willow_leaves'
                },
                requiresSilkTouch: true
            }
        ],
        compatibleSoilTags: [
            'dirt',
            'grass'
        ]
    }).id('bonsaitrees3:regions_unexplored/willow_sapling');

    //🌱  Ecologics Saplings

    event.custom({
        type: 'bonsaitrees3:sapling',
        sapling: {
            item: 'ecologics:walnut_sapling'
        },
        drops: [
            {
                rolls: 1,
                chance: 0.05,
                result: {
                    item: 'ecologics:walnut_sapling'
                }
            },
            {
                rolls: 1,
                chance: 0.9,
                result: {
                    item: 'ecologics:walnut_log'
                }
            },
            {
                rolls: 2,
                chance: 0.5,
                result: {
                    item: 'minecraft:stick'
                }
            },
            {
                rolls: 1,
                chance: 0.25,
                result: {
                    item: 'ecologics:walnut_leaves'
                },
                requiresSilkTouch: true
            },
            {
                rolls: 1,
                chance: 0.1,
                result: {
                    item: 'ecologics:walnut'
                },
                requiresBeeHive: true
            }
        ],
        compatibleSoilTags: [
            'dirt',
            'grass'
        ]
    }).id('bonsaitrees3:ecologics/walnut_sapling');




})