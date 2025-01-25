/*
A KubeJS 1.18.2 Server Script designed to aid server hosts 
or modpack authors in configuring blacklisted items
for their servers.

With usage spanning simple blanket bans, where that 
item or block is removed upon creation.

To usage with FTB Ranks, GameStages, and other custom
conditions so that you may further control the flow
of progression for a server/modpack.

Authored by @ILIKEPIEFOO#4987 on discord.
Version: 1.0.0
*/


//================================
//        MESSAGE CONFIG
//================================
// Whether or not to send a message to the player
// when they interact with a blacklisted block.
const MENTION_BLOCKS = true;

// Whether or not to send a message to the player
// when they pickup a blacklisted item.
const MENTION_ITEMS = true;

// Whether or not to send a message to the SERVER
// when a blacklisted entity is removed.
const MENTION_ENTITIES = false;

//================================
//        LOGGING CONFIG
//================================
// Whether to log the number of items removed from
// player's inventory when a black listed item is
// interacted with.
const LOG_REMOVED_ITEMS = true;


//================================
//       BLACKLIST CONFIG
//================================
global.BLACK_LIST = {
	// For simply removing all creation
	// and usage of an item just give it 
	// the true property like below:
	'tropicraft:bamboo_sign': true,
	'tropicraft:palm_sign': true,
	'tropicraft:mangrove_sign': true,
	'tropicraft:thatch_sign': true,
	'tropicraft:mahogany_sign': true,
	'botania:odin_ring': true,
	'appbot:creative_mana_cell': true,
	'appmek:creative_chemical_cell': true,
	'ae2:creative_item_cell': true,
	'ae2:creative_fluid_cell': true,
	'quark:soul_bead': true,



	// For more advanced use cases 
	// such as rank restriction
	// or custom conditions
	// use the format below
	'minecraft:bedrock': (event) => {
		if (!event.player) return false;
		return !event.player.isCreativeMode();
	}
}

//================================
//       MESSAGE FORMATTER
//================================
function formattedMessage(type, id) {
	return Text.of([
		Text.blue("["),
		Text.red("BLACKLIST"),
		Text.blue("]"),
		Text.yellow(` ${type} `),
		Text.white('"'),
		Text.red(id),
		Text.white(`" is a blacklisted `),
		Text.yellow(type),
		Text.white('!')
	]);
}

//================================
//       INTERNAL LOGIC
//================================

// Called when a blacklisted item is found.
function onBlacklistItem(event, entity, item) {
	// Tell the user they have a blacklisted item.
	if (MENTION_ITEMS)
		entity.tell(
			formattedMessage('Item', item.id)
		);

	// Search the entity's inventory for more blacklisted
	// items of the same kind.
	let count = 0;
	let index = entity.inventory.find(item);
	while (index != -1) {
		count += entity.inventory.get(index).count;
		entity.inventory.set(index, 'minecraft:air');
		index = entity.inventory.find(item);
	}

	// Tell the game to mark the inventory dirty
	// so that (hopefully) ghost items aren't left beind.
	entity.inventory.markDirty();

	// Log the total number of removed items.
	if (LOG_REMOVED_ITEMS)
		console.log(`Removed ${count} banned "${item.id}" items from "${entity}"'s inventory`);
}

// Called when a blacklisted block id is found.
function onBlacklistBlock(event, entity, block) {
	// Tell the user they are interacting with a blacklisted block.
	if (MENTION_BLOCKS)
		entity.tell(
			formattedMessage('Block', block.id)
		);
}

// Used to shorthand the logic for checking 
// if something is blacklisted.
function blackListCheck(event, id) {
	// Quick check to see if the item/block/entity id is 
	// on the blacklist.
	if (!global.BLACK_LIST[id])
		return false;
	// If there is some custom logic behind the blacklist,
	// pass the event through so the custom function can handle it.
	return typeof (global.BLACK_LIST[id]) == 'function' ?
		global.BLACK_LIST[id](event)
		:
		true;
}

// Standard handler for most item-like events.
function basicItemEvent(event) {
	if (blackListCheck(event, event.item.id)) {
		onBlacklistItem(event, event.entity, event.item);
		if (event.canCancel())
			event.cancel();
		if (event.item != null && event.item != undefined)
			event.item.count = 0;
	}
}

// Standard handler for most block-like events.
function basicBlockEvent(event) {
	if (blackListCheck(event, event.block.id)) {
		onBlacklistBlock(event, event.entity, event.block);
		if (event.canCancel())
			event.cancel();
	}
}

// Standard handler for most entity-like events.
function basicEntityEvent(event) {
	// Check if the entity type is blacklisted.
	if (blackListCheck(event, event.entity.type)) {
		// Tell all users on the server that the entity is blacklisted.
		if (MENTION_ENTITIES)
			event.server.tell(
				formattedMessage('Entity Type', event.entity.type)
			);
		// Remove the entity.
		event.entity.remove();
		// Check if the entity is an item entity.
	} else if (event.entity.type == 'minecraft:item' && (event.entity.item != null && event.entity.item != undefined)) {
		// Check if the item is blacklisted.
		if (blackListCheck(event, event.entity.item.id)) {
			// Tell all users on the server that the item entity is blacklisted.
			if (MENTION_ENTITIES)
				event.server.tell(
					formattedMessage('Item Entity', event.entity.item.id)
				);
			// Set the count of the item to zero.
			event.entity.item.count = 0;
			// Remove the entity.
			event.entity.remove();
		}
	}
}

//================================
//       EVENT LISTENERS
//================================
onEvent('item.crafted', basicItemEvent);
onEvent('item.smelted', basicItemEvent);
onEvent('item.food_eaten', basicItemEvent);
onEvent('item.right_click', basicItemEvent);
onEvent('item.left_click', basicItemEvent);
onEvent('item.entity_interact', basicItemEvent);
onEvent('item.pickup', basicItemEvent);
onEvent('item.toss', basicItemEvent);
onEvent('block.left_click', basicItemEvent);
onEvent('block.right_click', basicItemEvent);
onEvent('block.place', basicBlockEvent);
onEvent('block.break', basicBlockEvent);
onEvent('player.inventory.changed', (event) => {
	// We must not cancel the event othwerise this event will be called
	// infinitly.
	if (blackListCheck(event, event.item.id)) {
		onBlacklistItem(event, event.entity, event.item);
	}
});
// Causes ghost entitys somtimes but prevents them from existing in world
// and is fixed by relogging.
onEvent('entity.spawned', basicEntityEvent);
onEvent('entity.check_spawn', basicEntityEvent);
onEvent('entity.hurt', basicEntityEvent);