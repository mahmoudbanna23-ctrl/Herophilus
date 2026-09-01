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
- **✅ The five-option cap was FIXED 2026-09-02 — this is now a REGRESSION check, not a defect.**
  `app\index.html` had `'ABCDE'[i]` at **4576**, **4591**, **6315**; past index 4 that is
  `undefined`, so eight shipped `questions.neuro.js` questions — `npqb-nr-43` (9 options),
  `npqb-nr-51` (8), and `npqb-nr-113`–`118` (a matching block sharing one 10-option gait list)
  — lettered options `undefined` and told the student **“the answer is undefined”**. All three
  sites now use `OPT_LETTERS` (A–Z). Verified with `node --check` on all 19 script blocks and a
  node harness over the real data: `nr-113` letters **A–J**, answer **F — Parkinson’s disease**.
  ⚠️ **Behaviour the user chose and should not be "corrected" back:** letter keys pick any
  option that is actually shown, so on those eight questions **F picks option F and J picks
  option J** while answering; flag(F)/jump(J) are unchanged on every other question and return
  after reveal. Confirm the cap still holds, both key styles, escape-aware:
  ```bash
  cd "D:/claude os/Medical school/Herophilus" && python tools/count-options.py
  ```
  Also confirmed 2026-09-02: **0 of 3,893 questions have an `answer` index outside their own
  options list** — that would render `undefined` for the same reason. Re-check if it changes.
  **Still not watch work to edit `index.html`** — the 2026-09-02 fix was done on the user’s
  explicit instruction. Without one, report and stop.
- **⚠️ ONE THING THE CAP FIX DID NOT SOLVE — letters are POSITIONAL, the book’s are not.**
  The topic-06 gait matching set is printed in the bank with **non-contiguous** keys —
  **A B C D E F J k L M** (G, H and I are skipped). The app letters strictly by position, so
  measured 2026-09-02 against the data: `npqb-nr-113` app **F** = printed **F** ✅,
  `-116` **B**=**B** ✅, `-118` **D**=**D** ✅, but `npqb-nr-114` app **I** vs printed **L**,
  `-115` app **H** vs printed **K**, `-117` app **G** vs printed **J**. **The option TEXT and
  the scoring are correct in all six** — only the badge letter differs, and each entry’s
  `source` field records the printed key. Mirroring the book would need per-question letter
  data in the bank plus a renderer change. ✅ **DECIDED 2026-09-02: the user ruled the letters
  stay POSITIONAL.** This is settled, not outstanding — if you meet an app letter that differs
  from a printed key, **that is the accepted behaviour, not a defect to report or fix.**
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
