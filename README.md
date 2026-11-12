# Wold's Vaults — Greed Rework Test Build

> **This is not the live pack.** It is an unreleased test build of the greed rework, for
> invited testers only. Balance, numbers, drop rates and tree layouts change without warning,
> and worlds may break between updates. **Use a fresh world and a separate instance.** Do not
> point this at anything you care about.
>
> For the real Wold's Vaults, install it from CurseForge and ignore everything below.

---

## What you need first

A normal install of **Wold's Vaults** from the CurseForge or Prism launcher. The updater only replaces
the files this rework changes — it does not install the pack from scratch.

Everything below is powered by [packwiz](https://packwiz.infra.link/), which syncs your
instance against this branch. It only touches files the pack manages: your options, keybinds,
resource packs and shaders are left alone.

**Pack URL** (you'll paste this once):

```
https://raw.githubusercontent.com/Poor-Mans-Physicist/Wolds-Vaults/greed-test-dist/pack.toml
```

---

## Option A — Prism Launcher (recommended — updates itself)

Set this up once and every Play click syncs you to the newest test build. You never update by
hand again.

1. Install [Prism Launcher](https://prismlauncher.org/).
2. `Add Instance` → `CurseForge` → search **Wold's Vaults** → install it.
3. Right-click the instance → `Edit` → `Folder`. This opens the instance folder — go into
   `.minecraft`.
4. Download [packwiz-installer-bootstrap.jar](https://github.com/packwiz/packwiz-installer-bootstrap/releases/latest/download/packwiz-installer-bootstrap.jar)
   into that `.minecraft` folder.
5. Back in Prism: `Edit` → `Settings` → `Custom commands`. Tick **Custom commands** and put
   this in **Pre-launch command**:

   ```
   "$INST_JAVA" -jar packwiz-installer-bootstrap.jar https://raw.githubusercontent.com/Poor-Mans-Physicist/Wolds-Vaults/greed-test-dist/pack.toml
   ```

6. Press Play.

The first sync takes a while. Later ones are quick.

---

## Option B — CurseForge launcher (manual, one double-click per update)

The CurseForge launcher can't run anything before launch, so you run the updater yourself each
time a new build is announced.

1. Install **Wold's Vaults** from the CurseForge launcher as normal.
2. Click the pack → `...` → `Open Folder`. You want the folder containing `mods` and `config`.
3. Download **`update-greed-test.bat`** from the
   [latest test release](https://github.com/Poor-Mans-Physicist/Wolds-Vaults/releases) and put
   it in that folder.
4. Double-click it. Wait for `Done.`
5. Launch the pack from CurseForge.

**Re-run the `.bat` every time an update is posted.** If you don't, the server will reject you
for mismatched content.

---

## Notes

- The updater may ask you to download one or two mods by hand — a few authors block automatic
  downloads. Follow the prompt, drop the file where it asks, and it carries on.
- The `.bat` needs Java. If it can't find any, install
  [Temurin 17](https://adoptium.net/) and run it again.
- **Going back to the live pack:** reinstall Wold's Vaults from CurseForge into a *separate*
  instance. Never run the test updater against an instance you play normally.

## Reporting problems

Post in the test channel with the exact steps, a screenshot, and your `latest.log`. Vault seeds
help a lot for anything loot- or room-related.

---

Wold's Vaults is by [iwolfking](https://github.com/iwolfking/Wolds-Vaults) —
[main repo](https://github.com/iwolfking/Wolds-Vaults),
[official mod](https://github.com/iwolfking/Wolds-Vaults-Official-Mod),
[Discord](https://discord.gg/woldsvaults). This branch is a temporary testing fork and is not
the place to report bugs in the released pack.
