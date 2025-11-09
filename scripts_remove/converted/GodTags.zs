/* scripts made by Douwsky
for Iskall85's Vaulthunters */

val pickaxe = [
<block:the_vault:tenos_light_smooth_brick>,
<block:the_vault:tenos_dark_smooth_brick>,
<block:the_vault:tenos_brick_chiseled>,
<block:the_vault:tenos_brick>,
<block:the_vault:idona_gem_block>,
<block:the_vault:idona_light_smooth_brick>,
<block:the_vault:idona_dark_smooth_brick>,
<block:the_vault:idona_brick_chiseled>,
<block:the_vault:idona_brick>,
<block:the_vault:wendarr_jewel_block>,
<block:the_vault:wendarr_gem_block>,
<block:the_vault:wendarr_light_smooth_brick>,
<block:the_vault:wendarr_dark_smooth_brick>,
<block:the_vault:wendarr_brick_chiseled>,
<block:the_vault:wendarr_brick>,
<block:the_vault:velara_gem_block>,
<block:the_vault:velara_light_smooth_brick>,
<block:the_vault:velara_dark_smooth_brick>,
<block:the_vault:velara_brick_chiseled>,
<block:the_vault:velara_brick>,
<block:the_vault:tenos_gem_block>
];

for i, item in pickaxe {
	<tag:blocks:minecraft:mineable/pickaxe>.add(item);
	<tag:blocks:cucumber:mineable/paxel>.add(item);
}

val glass = [
<block:the_vault:wendarr_jewel_glass>,
<block:the_vault:wendarr_jewel_glass_pane>
];

for i, item in glass {
	<tag:blocks:forge:glass>.add(item);
}

val axe = [
<block:the_vault:velara_stripped_log>,
<block:the_vault:velara_planks_slab>,
<block:the_vault:velara_planks_stairs>,
<block:the_vault:velara_vertical_planks>,
<block:the_vault:velara_planks>,
<block:the_vault:velara_log>,
<block:the_vault:velara_mossy_blooming_log>,
<block:the_vault:velara_mossy_log>,
<block:the_vault:tenos_planks>,
<block:the_vault:tenos_vertical_planks>,
<block:the_vault:tenos_log>,
<block:the_vault:tenos_stripped_log>,
<block:the_vault:tenos_bookshelf>,
<block:the_vault:tenos_bookshelf_empty>
];

for i, item in axe {
	<tag:blocks:minecraft:mineable/axe>.add(item);
	<tag:blocks:cucumber:mineable/paxel>.add(item);
}

val leaves = [
<block:the_vault:velara_bush>,
<block:the_vault:velara_leaves>,
<block:the_vault:velara_mossy_block>
];

for i, item in leaves {
	<tag:blocks:minecraft:mineable/hoe>.add(item);
	<tag:blocks:minecraft:leaves>.add(item);
	<tag:blocks:cucumber:mineable/paxel>.add(item);
}

val vine = [
<block:the_vault:velara_vine>
];

for i, item in vine {
	<tag:blocks:minecraft:mineable/axe>.add(item);
	<tag:blocks:minecraft:climbable>.add(item);
	<tag:blocks:minecraft:fall_damage_resetting>.add(item);
	<tag:blocks:cucumber:mineable/paxel>.add(item);
}