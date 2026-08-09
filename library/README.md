# Wold's Vaults — Design Library

Canonical reference docs for game design **as currently implemented**, verified against
code (decompiles / addon source) and configs. If shipped behavior changes, update the
matching doc here in the same PR/commit cycle. Proposals and rework plans do NOT live
here — they go in `redesign/<project>/`.

Dev-only: this folder (and `redesign/`) is excluded from the shipped pack via the
root `.packwizignore`. Never let `packwiz refresh` index it.

## Index

| Doc | What it covers |
|---|---|
| `GREED_SHOP_CATALOG.md` | Every greed-shop roll, tier and price + shop mechanics. Key facts: tierPools are cumulative (price floor never rises), ~12–15% of slots from tier 6 up are dead, rep resets on tier-up, shop is 100% pack config. |
| `GREED_CHALLENGE_CRYSTALS.md` | All 22 greed-trader challenge crystals: objectives, effective-time math, modifiers resolved to real values, sigils, tier gating. Addon jar redefines 10 of them (jar wins). |
| `GREED_CRATE_BONUS.md` | Greed → completion-crate bonus, every table and line of logic. Headline: mixin hardcodes the scavenger table (commit `c366d7ad`), so 16 of 17 objective tables are dead data. |
| `UNIQUE_GEAR_CATALOG.md` | All 62 runtime uniques (pack + addon-jar merged view) with top roll per modifier, plus verified roll/bracket/imbuement mechanics and the never-rolling identifiers. |
| `CHEST_LOOT_GENERATION_SPEC.md` | The chest loot-content pipeline (chest Q/R → actual items) across base mod + addon: pool resolution, item-rarity weighting, CDF pre-compute. |
| `SKILL_TREE_SCREEN_GUIDE.md` | Talent/prestige/greed skill-screen and tree architecture + the vhapi datagen matrix (which trees are datagen'd vs pack-config-only). |

Decompile trees referenced by these docs (`target_decompiled\`, `addon_decompiled\`, etc.)
still live in `C:\Users\river\wv_decompile\` — only the distilled docs moved here.

## Related folders

- `redesign/greed-rework/` — active greed-system rework: master design doc
  (`WV Greed Rework.md`), balancing workbook, feasibility audit, crate-loot
  implementation spec, ancient-unique design sheets (`_v2.xlsx` is canonical).
- Docs for other in-flight projects (hyper post-launch, damage overflow, strongbox /
  loot-analysis) intentionally remain in `wv_decompile\` until those projects land,
  so they stay visible from every branch.
