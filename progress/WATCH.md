# WATCH.md — the ~12-hourly oversight check

**Created 2026-09-02.** A fresh oversight session reads this file, runs it top to bottom, and
reports. It is deliberately small so the check itself stays cheap.

**You are the watch. You inspect and report. You do not build.** Do not splice, do not draft, do
not edit content files, do not start module work, do not "quickly fix" anything you find. If
something needs doing, name it and stop — the user decides who does it.

**Do not read a module journal whole.** Prices are in `READING-COSTS.md`; use the anchors.

---

## 1. Repo state

```bash
cd "D:/claude os/Medical school/Herophilus" && git status --short && git log --oneline -8 && echo "ahead: $(git rev-list --count origin/$(git rev-parse --abbrev-ref HEAD)..HEAD)"
```

Report: dirty files, commits since the last check, and the ahead count. **Never commit or push
from the watch session** unless the user asks in that session.

⚠️ `index.lock` present means a work chat is mid-commit. Wait; never force, never delete it.

## 2. The four auto-loaded files against their 200-line cap

```bash
wc -lc "D:/claude os/CLAUDE.md" "D:/claude os/MEMORY.md" "D:/claude os/Medical school/Herophilus/CLAUDE.md" "D:/claude os/Medical school/Herophilus/MEMORY.md"
```

These are re-sent with **every request**, so growth here is a permanent tax. Baseline measured
2026-09-02, after the workspace `MEMORY.md` trim: **166 / 190 / 190 / 194 lines, 54,521 chars
≈ 13.6k tokens per request.**

⚠️ **Herophilus `MEMORY.md` at 194/200 is the file closest to the cap.** The workspace one
was trimmed 197 → 190 on 2026-09-02 (two superseded blocks moved verbatim to
`workspace-archive.md`, dated pointers left behind). Flag any file at 195 or more. **Do not
trim one yourself** — a trim is a documented split, not a delete, and it is not watch work.
Report it.

If the totals moved, `progress\READING-COSTS.md` is now stale — say so. Its numbers have drifted
twice; **re-measure, never quote it.**

## 3. Are the journals being kept current?

```bash
cd "D:/claude os/Medical school/Herophilus/progress" && ls -la --time-style=+%Y-%m-%d resume-ophtho.md resume-peds.md resume-neuro.md ledger.md | awk '{print $6, $7}'
```

A work chat that ran but left its journal untouched is the failure this watch exists to catch —
that session's findings die with it. Report any journal older than the last commit touching its
module.

## 4. Standing risks — check each is still true, do not act

- **Peds ch.4 (25 q) and ch.5 (20 q) are drafted on disk and NOT SPLICED.** `questions.peds.js`
  should still show 81 until Chat B splices them:
  `grep -c "pedhouse-" "D:/claude os/Medical school/Herophilus/app/data/questions.peds.js"`
- **`content\peds\qb-pages\endpoint-s01-growth-puberty.draft.js`** — 89 questions, committed
  2026-09-02 (`7351007`), a splice fragment opening on a bare `{`, never audited. It is **parked
  endpoint work** under the user's deferral ruling. Nobody should be touching it. If it moved,
  that is worth reporting.
- **The five-option cap is still live and latent.** `app\index.html` lines **4576** (`'ABCDE'[i]`),
  **4591**, **6315** assume at most five options. Verify no shipped question exceeds five:
  ```bash
  cd "D:/claude os/Medical school/Herophilus" && grep -o "options:\s*\[" app/data/questions.*.js | wc -l
  ```
  The real test is neuro topic 03 (Q43 has nine options, Q51 has eight). **`index.html` is on both
  work chats' forbidden list** — if topic 03 is approaching, raise it with the user.
- **Source PDFs are originals.** 158 files, 3.64 GB under `Medical school`. Confirm the count:
  `find "D:/claude os/Medical school" -iname "*.pdf" | wc -l`

## 5. Session hygiene (workspace §9)

Report any work chat that looks older than ~2 days. Every request re-sends the whole session, so
a stale chat costs 5–10× a fresh one. The fix is always: kill it, start fresh from its resume
prompt. **This watch session is subject to the same rule — it is one check, then it dies.**

## 6. What to report back

Three lines, nothing more:

- **Changed:** commits, splices, journals updated since the last check.
- **Stale:** anything whose recorded number no longer matches what you measured.
- **At risk:** caps near breach, unspliced work sitting, a journal not being written.

If nothing changed, say nothing changed. Do not manufacture findings, and do not re-verify things
this file already records as settled.
