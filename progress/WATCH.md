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
⚠️ **Compare each line count against the 200-line CAP, not against a number written here.**
The cap never moves; every recorded total does. Four snapshots were written and invalidated
on 2026-09-02 alone — do not add a fifth. **Flag any file at 195 or more.**

Both `MEMORY.md` files were trimmed on 2026-09-02 (workspace 197 → 190, Herophilus 194 → 179;
blocks moved verbatim to `workspace-archive.md` and `memory-archive.md`, dated pointers left
behind). **Do not trim one yourself** — a trim is a documented split, not a delete, and it is
not watch work. Report it.

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
  ```bash
  f="D:/claude os/Medical school/Herophilus/app/data/questions.peds.js"
  echo $(( $(grep -oE '(^|[{, ])id: *[^ ]' "$f" | wc -l) + $(grep -oE '"id" *:' "$f" | wc -l) ))
  ```
  ⚠️⚠️ **`app\data\*.js` MIXES TWO KEY STYLES — count both or the answer is nonsense.**
  `questions.neuro.js` holds **151 entries with JSON-style quoted keys** (`"id": "…"`) and
  **22 with bare keys** (`id: "…"`). A bare-key regex counts 22 of 173 and reads as
  catastrophic loss. **It is not loss:** 173 q + 7 cases = 180 neuro, and the corpus totals
  **3,982**, matching `MEMORY.md` to the unit (verified 2026-09-02 from disk).
  This check has now shipped WRONG TWICE — first grepping the invented prefix `pedhouse-`
  (real prefixes are `pedhd-inf-` / `pedhd-renal-` / `pedhd-card-`), then with a bare-key-only
  regex. **Both returned a number that looked like data loss on a perfectly intact file.**
  ⚠️ **Before reporting any count as loss, re-count with the command above and compare against
  `git cat-file -s HEAD:<path>` — bytes rising while a count falls means the COUNT is broken.**
- **`content\peds\qb-pages\endpoint-s01-growth-puberty.draft.js`** — 89 questions, committed
  2026-09-02 (`7351007`), a splice fragment opening on a bare `{`, never audited. It is **parked
  endpoint work** under the user's deferral ruling. Nobody should be touching it. If it moved,
  that is worth reporting.
- **⚠️⚠️ THE FIVE-OPTION CAP HAS ALREADY FIRED — it is a LIVE DEFECT, not a latent risk.**
  `app\index.html` **4576** (`'ABCDE'[i]`), **4591**, **6315** assume at most five options.
  **Eight shipped questions exceed it, all in `questions.neuro.js`** (verified 2026-09-02 by
  reading the arrays off disk, not by a regex): `npqb-nr-43` (9 options), `npqb-nr-51` (8),
  and **`npqb-nr-113`–`118`, an extended-matching block sharing one 10-option gait list**.
  Only the first two were ever documented, and only as a FUTURE risk for topic 03.
  **Six of the eight have `answer` at index ≥ 5** (nr-43:6, nr-51:6, nr-113:5, nr-114:8,
  nr-115:7, nr-117:6). For those the app prints **“the answer is undefined”** and renders the
  correct option with the letter `undefined` — the student cannot learn the answer. The 6th
  option onward is also **mouse-only**, since the A–E keyboard shortcut cannot reach it.
  Re-check with the escape-aware scan (both key styles), never a bare `options:` grep — a
  bare-key scan checked 22 of 173 neuro questions and reported all clear:
  ```bash
  cd "D:/claude os/Medical school/Herophilus" && python tools/count-options.py
  ```
  **Do not fix it here — `index.html` is on both work chats' forbidden list and this is watch
  work only. Report it to the user; the fix is theirs to schedule.**
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
