# Greed update: branch, commit and deploy contract

This file is the rulebook for everyone working on the greed update, people and agents alike.
It lives on the `greed/dev` branch of the pack fork and is excluded from the shipped pack.

## Pushing — read first

**NEVER push to iwolfking's upstream.** We have write access to `iwolfking/Wolds-Vaults-Official-Mod` and `iwolfking/Wolds-Vaults` (the `origin` remote in the addon and pack checkouts). Never push anything to iwolfking's `master` (or any other branch of his repositories) without extremely explicit permission from the user. If the user does ask for it, ask again whether they really mean it, and push only after a second, separate confirmation. Everything we push goes to our forks (`fork` remote, `Poor-Mans-Physicist/...`) and our own open PRs; that is the only push the user normally asks for.

## Repositories

| Repo | Fork (where we push) | Upstream (PR target at ship) |
|---|---|---|
| Addon (Java) | `Poor-Mans-Physicist/Wolds-Vaults-Official-Mod` | `iwolfking/Wolds-Vaults-Official-Mod` |
| Pack (packwiz configs) | `Poor-Mans-Physicist/Wolds-Vaults` | `iwolfking/Wolds-Vaults` |

## Branches

| Branch | Repo | What it is | Who writes to it |
|---|---|---|---|
| `greed/dev` | addon + pack | The working greed update. Always builds and boots. | Direct commits and merges |
| `feature/<name>`, `fix/<name>` | addon or pack | One feature or fix, cut from `greed/dev` | Anyone |
| `greed-test-dist` | pack | What testers and the test server run: `greed/dev` configs plus the addon url-pin | Promotion only |
| `master` | both | Mirror of upstream. Never commit to it. | Nobody |

Rules:

1. Small fixes and balance tweaks may be committed straight to `greed/dev`.
2. Anything bigger than a few files, or anything still being designed, gets its own
   `feature/<name>` branch cut from `greed/dev`, in each repo it touches.
3. Test a feature branch on the local test instance before merging it into `greed/dev`.
4. Merge with `git merge --no-ff feature/<name>` so the feature reads as one unit in history.
5. **Delete a branch as soon as it is merged into `greed/dev`**: the local branch, its worktree
   (`git worktree remove`), and its copy on the fork (`git push fork --delete <branch>`).
   No merged branch survives the merge.
6. Never leave work uncommitted overnight. A WIP commit on the feature branch is better than a
   worktree that exists only on one disk. Push feature branches to the fork.
7. Upstream changes come in by merging upstream `master` into `greed/dev`, never the reverse.

## Commits

- Commit meaningful units: a finished logic change, or a settled config state. Batch small
  tweaks that are still being playtested and commit once they settle.
- Messages: short, imperative, informative ("Halve the Young Kitsune execution roll").
  No joke names, no "round N" labels.
- Addon Java: no comments except Javadoc on important functions. Run the comment audit before
  committing.
- Config values WV owns live in addon datagen (unified datagen: one provider table, output in
  `src/generated`, no pack copy, no Java default table). Change a value in its provider, run
  `runData`, commit the provider and the regenerated files together. A full `runData` with
  `src/generated/resources/.cache` deleted must give zero diff.
- Addon `runData` seeds the base Vault Hunters configs from upstream's pack via
  `gradlew moveModdedConfigs` (run it first); addon `build` needs no pack.
- Pack: never run bare `packwiz refresh` or `packwiz remove` (CRLF hash corruption). After any
  index change, re-hash `index.toml` into `pack.toml` and verify every entry against its staged
  blob. Lint hand-edited `config/the_vault/**/*.json` with a strict JSON parser.
- The pack's `config/the_vault` and `kubejs` stay identical to upstream. A greed edit to an entry
  upstream owns is a config patch in addon `ModConfigPatchesProvider` (only the changed fields);
  a new entry is a VHAPI overlay provider. Never edit the pack copy. Canonical doc:
  `library/DATAGEN.md`.

## Deploy targets

### 1. Local test instance (quick checks)

CurseForge instance `Wold's Vaults - Vault Hunters Expansion (4)`.

- Deploy any branch: build the addon jar from that branch, copy it into `mods/` (back up the old
  jar as `.prev-<date>-<reason>.disabled`), and copy that branch's pack configs over.
- Hand edits to instance configs are allowed for experiments only. Anything worth keeping goes
  back into the pack branch before the feature merges.
- Before deploying, boot-test the jar on the throwaway server at `C:\wvpack\boottest`.
- The instance is never the source of truth; the branches are.

### 2. Testers and the test server (promotion)

When `greed/dev` is worth a test round:

1. Pick the next free tag: `gh release list -R Poor-Mans-Physicist/Wolds-Vaults`.
2. Build the addon jar from the `greed/dev` commit and publish it as release `greed-test-N` on
   the pack fork.
3. Merge pack `greed/dev` into `greed-test-dist`, then repoint the addon pin to the new release
   (`packwiz url add --force -y` + `packwiz pin`; `git diff --stat` shows exactly 3 files).
4. Verify the index, push `greed-test-dist`, push configs to the test server, and restart the
   server from the panel. A sync without a restart breaks every login.

The pin only ever moves on `greed-test-dist`, and only after the build has been tried on the
local instance.

### 3. Ship

At release, `greed/dev` becomes the upstream pull requests (addon and pack). Delete this file
from the pack branch before opening the pack PR.
