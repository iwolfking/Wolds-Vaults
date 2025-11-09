onEvent('player.interact.entity', event => {
    if (event.entity.type == 'minecraft:mooshroom' && event.item.id == 'minecraft:oxeye_daisy') {
        event.cancel();
        event.result = 'fail';
    }
});
