onEvent('block.registry', event => {
    event.create('the_vault:silver_scrap_1').displayName('1x Compressed Silver Scrap').tagBlock('minecraft:mineable/pickaxe')
    event.create('the_vault:silver_scrap_2').displayName('2x Compressed Silver Scrap').tagBlock('minecraft:mineable/pickaxe')
    event.create('the_vault:chromatic_gold_block').displayName('Block of Chromatic Gold').tagBlock('minecraft:mineable/pickaxe').tag('forge:storage_blocks/chromatic_gold')
    //Gem Blocks
   // event.create('the_vault:block_gem_wutodie').displayName('Block of Wutodie Gem').tagBlock('forge:storage_blocks/wutodie').tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:beacon_base_blocks')
})
