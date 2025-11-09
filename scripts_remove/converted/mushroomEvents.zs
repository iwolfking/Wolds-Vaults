import crafttweaker.api.events.CTEventManager;
import crafttweaker.api.text.TextComponent;
import crafttweaker.api.event.entity.player.interact.EntityInteractEvent;
import crafttweaker.api.event.entity.player.interact.PlayerInteractEvent;

CTEventManager.register<crafttweaker.api.event.entity.player.interact.EntityInteractEvent>((event) => {
    if event.target.getType() == <entitytype:minecraft:mooshroom> && <item:minecraft:oxeye_daisy>.matches(event.itemStack) {
        event.cancel();
        event.setCancellationResult(<constant:minecraft:world/interactionresult:fail>);
        return;
    }
});