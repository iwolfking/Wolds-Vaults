// scripts made by Douwsky
// Converted from CraftTweaker to KubeJS for Vault Hunters 1.18.2

onEvent('recipes', event => {

  // --- XNet Controller ---
  event.shaped('xnet:controller', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'minecraft:repeater',
    B: 'minecraft:comparator',
    C: 'the_vault:perfect_larimar',
    D: 'rftoolsbase:machine_frame',
    E: 'the_vault:chromatic_steel_ingot',
    F: 'the_vault:vault_diamond'
  }).id('xnet:controller')


  // --- XNet Router ---
  event.shaped('xnet:router', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'minecraft:powered_rail',
    B: 'minecraft:comparator',
    C: 'the_vault:perfect_larimar',
    D: 'xnet:controller',
    E: 'the_vault:chromatic_steel_ingot',
    F: 'the_vault:vault_diamond'
  }).id('xnet:router')


  // --- XNet Wireless Router ---
  event.shaped('xnet:wireless_router', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'the_vault:chromatic_steel_ingot',
    B: 'the_vault:vault_diamond',
    C: 'the_vault:extraordinary_larimar',
    D: 'xnet:router',
    E: 'minecraft:redstone_block',
    F: 'the_vault:chromatic_steel_block'
  }).id('xnet:wireless_router')


  // --- XNet Antenna ---
  event.shaped('xnet:antenna', [
    'ABA',
    'ABA',
    'CDC'
  ], {
    A: 'minecraft:iron_bars',
    B: 'the_vault:chromatic_iron_ingot',
    C: 'the_vault:gem_larimar',
    D: 'the_vault:chromatic_iron_ingot'
  }).id('xnet:antenna')


  // --- XNet Antenna Base ---
  event.shaped('xnet:antenna_base', [
    ' A ',
    ' A ',
    'BCD'
  ], {
    A: 'the_vault:chromatic_iron_ingot',
    B: 'the_vault:chromatic_steel_ingot',
    C: 'the_vault:chromatic_iron_block',
    D: 'the_vault:chromatic_steel_ingot'
  }).id('xnet:antenna_base')


  // --- XNet Antenna Dish ---
  event.shaped('xnet:antenna_dish', [
    'ABA',
    'ACA',
    ' B '
  ], {
    A: 'the_vault:chromatic_iron_ingot',
    B: 'the_vault:perfect_larimar',
    C: 'the_vault:chromatic_steel_block'
  }).id('xnet:antenna_dish')


  // --- XNet Routing Cable ---
  event.shaped(Item.of('xnet:netcable_routing', 16), [
    'ABA',
    'CDC',
    'AEA'
  ], {
    A: 'the_vault:magic_silk',
    B: 'the_vault:perfect_larimar',
    C: 'minecraft:redstone_block',
    D: 'the_vault:chromatic_iron_ingot',
    E: 'minecraft:redstone_block'
  }).id('xnet:netcable_routing')


  // --- XNet Connector Cable ---
  event.shaped('xnet:connector_routing', [
    'ABA',
    'CDC',
    'AEA'
  ], {
    A: 'the_vault:magic_silk',
    B: 'the_vault:extraordinary_larimar',
    C: 'minecraft:redstone_block',
    D: 'xnet:netcable_routing',
    E: 'minecraft:redstone_block'
  }).id('xnet:connector_routing')


  // --- XNet Advanced Connector Cable ---
  event.shaped('xnet:advanced_connector_routing', [
    'ABA',
    'CDC',
    'AEA'
  ], {
    A: 'the_vault:magic_silk',
    B: 'the_vault:chromatic_steel_block',
    C: 'minecraft:redstone_block',
    D: 'xnet:connector_routing',
    E: 'the_vault:magic_silk_block'
  }).id('xnet:advanced_connector_routing')


  // --- Dye Variants ---
  const dyes = {
    red_dye: 'red',
    yellow_dye: 'yellow',
    green_dye: 'green',
    blue_dye: 'blue'
  }

  for (const [dyeId, dyeName] of Object.entries(dyes)) {

    // netcable_<color>
    event.shapeless(`xnet:netcable_${dyeName}`, [
      'xnet:netcable_routing',
      `minecraft:${dyeId}`
    ]).id(`xnet:netcable_${dyeName}`)

    // connector_<color>
    event.shapeless(`xnet:connector_${dyeName}`, [
      'xnet:connector_routing',
      `minecraft:${dyeId}`
    ]).id(`xnet:connector_${dyeName}`)

    // advanced_connector_<color>
    event.shapeless(`xnet:advanced_connector_${dyeName}`, [
      'xnet:advanced_connector_routing',
      `minecraft:${dyeId}`
    ]).id(`xnet:advanced_connector_${dyeName}`)
  }

})
