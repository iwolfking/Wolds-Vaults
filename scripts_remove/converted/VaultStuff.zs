/* scripts made by alterNERDtive
for Iskall85's Vaulthunters */

import crafttweaker.api.recipe.SmithingRecipeManager;

var gems = [
  "ashium",
  "bomignite",
  "gorginite",
  "iskallium",
  "petzanite",
  "sparkletine",
  "tubium",
  "upaline",
  "xenium"
] as string[];

for gem in gems {
  <recipetype:minecraft:smithing>.addJsonRecipe("key_" + gem + "_smithing", {
    "base": {"item":"the_vault:blank_key"},
    "addition": {"item":"the_vault:cluster_" + gem},
    "result": {"item":"the_vault:key_" + gem}
  });
}
