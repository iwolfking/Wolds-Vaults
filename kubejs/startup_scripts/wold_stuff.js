
onEvent('item.registry', event => {
    event.create('mysticalagriculture:pogging_seed_base').group('the_vault')
    event.create('mysticalagriculture:echoing_seed_base').group('the_vault')
    event.create('botania:uninfused_terrasteel_ingot').group('the_vault')
})

onEvent('block.registry', event => {
    event.create('the_vault:silver_scrap_1').displayName('1x Compressed Silver Scrap').tagBlock('minecraft:mineable/pickaxe')
    event.create('the_vault:silver_scrap_2').displayName('2x Compressed Silver Scrap').tagBlock('minecraft:mineable/pickaxe')
    event.create('the_vault:chromatic_gold_block').displayName('Block of Chromatic Gold').tagBlock('minecraft:mineable/pickaxe').tag('forge:storage_blocks/chromatic_gold')
    //Gem Blocks
    event.create('the_vault:block_gem_larimar').displayName('Block of Larimar Gem').tagBlock('forge:storage_blocks/larimar').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_benitoite').displayName('Block of Benitoite Gem').tagBlock('forge:storage_blocks/benitoite').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_wutodie').displayName('Block of Wutodie Gem').tagBlock('forge:storage_blocks/wutodie').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_painite').displayName('Block of Painite Gem').tagBlock('forge:storage_blocks/painite').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_alexandrite').displayName('Block of Alexandrite Gem').tagBlock('forge:storage_blocks/alexandrite').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_black_opal').displayName('Block of Black Opal Gem').tagBlock('forge:storage_blocks/black_opal').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_echo').displayName('Block of Echo Gem').tagBlock('forge:storage_blocks/echo').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_sparkletine').displayName('Block of Sparkletine Gem').tagBlock('forge:storage_blocks/sparkletine').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_iskallium').displayName('Block of Woldium Gem').tagBlock('forge:storage_blocks/iskallium').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_upaline').displayName('Block of Upaline Gem').tagBlock('forge:storage_blocks/upaline').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_xenium').displayName('Block of Xeenium Gem').tagBlock('forge:storage_blocks/xenium').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_petzanite').displayName('Block of Petezanite Gem').tagBlock('forge:storage_blocks/petzanite').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_gorginite').displayName('Block of Gorginite Gem').tagBlock('forge:storage_blocks/gorginite').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_bomignite').displayName('Block of Bomignite Gem').tagBlock('forge:storage_blocks/bomignite').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_tubium').displayName('Block of Tubium Gem').tagBlock('forge:storage_blocks/tubium').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
    event.create('the_vault:block_gem_ashium').displayName('Block of Ashium Gem').tagBlock('forge:storage_blocks/ashium').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
})
