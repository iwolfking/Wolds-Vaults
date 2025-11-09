onEvent('recipes', event => {

  // Mining Gadget
  event.shaped('mininggadgets:mininggadget', [
    'ADC',
    'EBF',
    'AGH'
  ], {
    A: 'the_vault:vault_diamond',
    B: 'the_vault:gem_pog',
    C: 'the_vault:extraordinary_larimar',
    D: 'the_vault:chromatic_steel_ingot',
    E: 'the_vault:vault_diamond',
    F: 'minecraft:redstone_block',
    G: 'the_vault:chromatic_steel_ingot',
    H: 'the_vault:chromatic_steel_ingot'
  }).id('mininggadgets:mininggadget');

  // Shapeless upgrades
  event.shapeless('mininggadgets:mininggadget_simple', ['mininggadgets:mininggadget']).id('mininggadgets:mininggadget_simple');
  event.shapeless('mininggadgets:mininggadget_fancy', ['mininggadgets:mininggadget_simple']).id('mininggadgets:mininggadget_fancy');
  event.shapeless('mininggadgets:mininggadget', ['mininggadgets:mininggadget_fancy']).id('mininggadgets:mininggadget_reset');

  // Modification Table
  event.shaped('mininggadgets:modificationtable', [
    'ACA',
    'DBD',
    'AAA'
  ], {
    A: 'the_vault:chromatic_steel_ingot',
    B: 'mininggadgets:upgrade_empty',
    C: 'the_vault:gem_pog',
    D: 'the_vault:vault_diamond'
  }).id('mininggadgets:modificationtable');

  // Upgrade Modules
  event.shaped('mininggadgets:upgrade_empty', [
    'AAA',
    'BDB',
    'AAA'
  ], {
    A: 'minecraft:redstone_block',
    B: 'the_vault:vault_diamond',
    D: 'the_vault:magic_silk_block'
  }).id('mininggadgets:upgrade_empty');

  event.shaped('mininggadgets:upgrade_efficiency_1', [
    'ABA',
    'CDC',
    'ABA'
  ], {
    A: 'minecraft:redstone_block',
    B: 'the_vault:chromatic_steel_ingot',
    C: 'mininggadgets:upgrade_empty',
    D: 'the_vault:chromatic_steel_ingot'
  }).id('mininggadgets:upgrade_efficiency_1');

  event.shaped('mininggadgets:upgrade_efficiency_2', [
    'ABA',
    'CDC',
    'ABA'
  ], {
    A: 'the_vault:chromatic_steel_block',
    B: 'the_vault:vault_diamond',
    C: 'mininggadgets:upgrade_efficiency_1',
    D: 'the_vault:vault_diamond'
  }).id('mininggadgets:upgrade_efficiency_2');

  event.shaped('mininggadgets:upgrade_efficiency_3', [
    'ABA',
    'CDC',
    'ABA'
  ], {
    A: 'the_vault:chromatic_steel_block',
    B: 'the_vault:vault_diamond',
    C: 'mininggadgets:upgrade_efficiency_2',
    D: 'the_vault:vault_diamond'
  }).id('mininggadgets:upgrade_efficiency_3');

  event.shaped('mininggadgets:upgrade_efficiency_4', [
    'ABA',
    'CDC',
    'ABA'
  ], {
    A: 'the_vault:chromatic_steel_block',
    B: 'the_vault:black_chromatic_steel_ingot',
    C: 'mininggadgets:upgrade_efficiency_3',
    D: 'the_vault:black_chromatic_steel_ingot'
  }).id('mininggadgets:upgrade_efficiency_4');

  event.shaped('mininggadgets:upgrade_efficiency_5', [
    'ABA',
    'CDC',
    'ABA'
  ], {
    A: 'the_vault:extraordinary_larimar',
    B: 'the_vault:vault_diamond_block',
    C: 'mininggadgets:upgrade_efficiency_4',
    D: 'the_vault:vault_diamond_block'
  }).id('mininggadgets:upgrade_efficiency_5');

  event.shaped('mininggadgets:upgrade_void_junk', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'the_vault:perfect_larimar',
    B: 'the_vault:vault_diamond',
    C: 'mininggadgets:upgrade_empty',
    D: 'the_vault:carbon',
    E: 'the_vault:chromatic_steel_block',
    F: 'the_vault:chromatic_iron_block'
  }).id('mininggadgets:upgrade_void_junk');

  event.shaped('mininggadgets:upgrade_magnet', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'the_vault:vault_diamond',
    B: 'the_vault:perfect_echo_gem',
    C: 'mininggadgets:upgrade_empty',
    D: 'the_vault:chromatic_steel_ingot',
    E: 'minecraft:redstone_block',
    F: 'minecraft:gold_block'
  }).id('mininggadgets:upgrade_magnet');

  event.shaped('mininggadgets:upgrade_three_by_three', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'the_vault:chromatic_steel_ingot',
    B: 'the_vault:gem_pog',
    C: 'mininggadgets:upgrade_empty',
    D: 'the_vault:gem_echo',
    E: 'minecraft:redstone_block',
    F: 'the_vault:vault_diamond_block'
  }).id('mininggadgets:upgrade_three_by_three');

  // Fortune Upgrades
  event.shaped('mininggadgets:upgrade_fortune_1', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'the_vault:vault_diamond',
    B: 'the_vault:chromatic_iron_block',
    C: 'mininggadgets:upgrade_empty',
    D: 'the_vault:gem_echo',
    E: 'the_vault:chromatic_steel_block',
    F: 'the_vault:chromatic_iron_block'
  }).id('mininggadgets:upgrade_fortune_1');

  event.shaped('mininggadgets:upgrade_fortune_2', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'the_vault:vault_diamond',
    B: 'the_vault:chromatic_iron_block',
    C: 'mininggadgets:upgrade_fortune_1',
    D: 'the_vault:gem_echo',
    E: 'the_vault:chromatic_steel_block',
    F: 'the_vault:chromatic_iron_block'
  }).id('mininggadgets:upgrade_fortune_2');

  event.shaped('mininggadgets:upgrade_fortune_3', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'the_vault:vault_diamond_block',
    B: 'the_vault:chromatic_iron_block',
    C: 'mininggadgets:upgrade_fortune_2',
    D: 'the_vault:gem_echo',
    E: 'the_vault:chromatic_steel_block',
    F: 'the_vault:chromatic_steel_block'
  }).id('mininggadgets:upgrade_fortune_3');

  // Range Upgrades
  event.shaped('mininggadgets:upgrade_range_1', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'the_vault:vault_diamond',
    B: 'the_vault:chromatic_iron_block',
    C: 'mininggadgets:upgrade_empty',
    D: 'minecraft:tinted_glass',
    E: 'the_vault:chromatic_steel_block',
    F: 'the_vault:chromatic_iron_block'
  }).id('mininggadgets:upgrade_range_1');

  event.shaped('mininggadgets:upgrade_range_2', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'the_vault:vault_diamond',
    B: 'the_vault:chromatic_iron_block',
    C: 'mininggadgets:upgrade_range_1',
    D: 'minecraft:tinted_glass',
    E: 'the_vault:chromatic_steel_block',
    F: 'the_vault:chromatic_iron_block'
  }).id('mininggadgets:upgrade_range_2');

  event.shaped('mininggadgets:upgrade_range_3', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'the_vault:vault_diamond_block',
    B: 'the_vault:chromatic_iron_block',
    C: 'mininggadgets:upgrade_range_2',
    D: 'minecraft:tinted_glass',
    E: 'the_vault:chromatic_steel_block',
    F: 'the_vault:chromatic_steel_block'
  }).id('mininggadgets:upgrade_range_3');

  // Battery Upgrades
  event.shaped('mininggadgets:upgrade_battery_1', [
    'ABA',
    'CDC',
    'EEE'
  ], {
    A: 'minecraft:smooth_quartz',
    B: 'the_vault:chromatic_iron_block',
    C: 'mininggadgets:upgrade_empty',
    D: 'minecraft:smooth_quartz',
    E: 'minecraft:smooth_quartz'
  }).id('mininggadgets:upgrade_battery_1');

  event.shaped('mininggadgets:upgrade_battery_2', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'the_vault:vault_diamond',
    B: 'the_vault:chromatic_iron_block',
    C: 'mininggadgets:upgrade_battery_1',
    D: 'minecraft:smooth_quartz',
    E: 'the_vault:chromatic_steel_block',
    F: 'minecraft:smooth_quartz'
  }).id('mininggadgets:upgrade_battery_2');

  event.shaped('mininggadgets:upgrade_battery_3', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'the_vault:vault_diamond_block',
    B: 'the_vault:chromatic_steel_block',
    C: 'mininggadgets:upgrade_battery_2',
    D: 'minecraft:gold_block',
    E: 'the_vault:chromatic_steel_block',
    F: 'the_vault:chromatic_steel_block'
  }).id('mininggadgets:upgrade_battery_3');

  // Silk Upgrade
  event.shaped('mininggadgets:upgrade_silk', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'the_vault:magic_silk',
    B: 'minecraft:golden_apple',
    C: 'the_vault:magic_silk_block',
    D: 'the_vault:chromatic_steel_ingot',
    E: 'mininggadgets:upgrade_empty',
    F: 'the_vault:chromatic_steel_ingot'
  }).id('mininggadgets:upgrade_silk');

});
