onEvent("lootjs", (event) => {
    event.addLootTableModifier("minecraft:chests/simple_dungeon").removeLoot(/.*enchanted_book.*/);
});

