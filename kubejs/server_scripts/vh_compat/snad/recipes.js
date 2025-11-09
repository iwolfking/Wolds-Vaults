// scripts made by Douwsky
// Converted from CraftTweaker to KubeJS for Vault Hunters (1.18.2)

onEvent('block.loot_tables', event => {
  event.addBlock('snad:snad', table => {
    table.addPool(pool => {
      pool.rolls = 1
      pool.survivesExplosion()
      pool.addItem('snad:snad')
    })
  })

  event.addBlock('snad:red_snad', table => {
    table.addPool(pool => {
      pool.rolls = 1
      pool.survivesExplosion()
      pool.addItem('snad:red_snad')
    })
  })

  event.addBlock('snad:suol_snad', table => {
    table.addPool(pool => {
      pool.rolls = 1
      pool.survivesExplosion()
      pool.addItem('snad:suol_snad')
    })
  })
})


// --- Crafting recipes ---
onEvent('recipes', event => {
  event.shaped('snad:snad', [
    'ACA',
    'BDB',
    'ACA'
  ], {
    A: '#forge:sand/colorless',
    B: 'the_vault:vault_essence_1',
    C: '#forge:sand/colorless',
    D: 'the_vault:extraordinary_larimar'
  }).id('snad:snad')

  event.shaped('snad:red_snad', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: '#forge:sand/red',
    B: 'the_vault:vault_essence_1',
    C: 'the_vault:extraordinary_larimar'
  }).id('snad:red_snad')

  event.shaped('snad:suol_snad', [
    'AAA',
    'BCB',
    'AAA'
  ], {
    A: 'minecraft:soul_sand',
    B: 'the_vault:vault_essence_1',
    C: 'the_vault:extraordinary_larimar'
  }).id('snad:suol_snad')

})
