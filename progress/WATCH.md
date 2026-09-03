# WATCH.md — the ~12-hourly oversight check

**Created 2026-09-02.** A fresh oversight session reads this file, runs it top to bottom, and
reports. It is deliberately small so the check itself stays cheap.

**You are the watch. You inspect and report. You do not build.** Do not splice, do not draft, do
not edit content files, do not start module work, do not "quickly fix" anything you find. If
something needs doing, name it and stop — the user decides who does it.

**Do not read a module journal whole.** Prices are in `READING-COSTS.md`; use the anchors.

⚠️ **WHERE THE WATCH RUNS — CHANGED 2026-09-03 by the user.** It is no longer a separate Herophilus
chat. **Run it from the main `D:\claude os` chat**, alongside the workspace-level fixes, so several
chats are not live at once. Paths below are absolute and already work from there. Everything above
still binds — inspect and report, do not build, unless the user says so **in that chat**.

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

Both `MEMORY.md` files have been trimmed repeatedly (Herophilus most recently 2026-09-03, 200 → 189,
two blocks verbatim to `memory-archive.md` under `## Pruned from MEMORY.md - 2026-09-03`, dated
pointers left behind). **Do not trim one yourself** — a trim is a documented split, not a delete,
and it is not watch work. Report it.

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

- **✅ CLOSED 2026-09-03 — the duplicated-option-line risk, and the answer inverts it.** It was
  logged as "OCR artifact or printed defect, unresolved, needs a visual check before any endpoint
  question ships". `node tools\ep-index\dup-options.js` scans all 4,591 shipped questions in
  seconds, no render: **3 exact duplicate pairs, all ophtho, all three already documented as
  PRINTED defects** by the transcriber. p.110 of `ophthalmology qb.pdf` was re-rendered and
  re-read blind to confirm it. **Zero defects reached the app.** The 11 "normalised" and 28
  "near" hits are the check being blunt, not content being wrong — read raw option text, never
  the normalised form. **Run it after every content batch; chase only a NEW exact hit that
  carries no note in `source` or `explanation`.**
- **✅ MEASURED 2026-09-03 — answer keys are right, and the tool that checks them is the thing
  that is wrong.** `tools\ep-index\keypos.py` locates the yellow highlight by POSITION, so it
  answers "which option is keyed" from pixels alone — independent of OCR, of `index.json` and of
  the staging file, which no previous check was. Over the four closed endpoint sections, **235
  staged keys: 232 agreed, 2 disagreed, 1 abstained. All three misses were rendered and read by
  eye, and all 235 staged keys were RIGHT** — the misses are the tool's own two limitations
  (an option below the key wrapping; figures printed beside the option column merging bands).
  **Shipped key error rate from this measurement: 0 of 235.** The failure direction is the safe
  one — wasted renders, never a silent pass. ⚠️ **Its calibration is invalidated by any constant
  or logic change and by a different PDF** — the docstring says which; re-run `--calibrate`.

- **✅ RESOLVED 2026-09-02 — peds ch.4 and ch.5 are SPLICED. This is now a floor check, not a
  hold.** `questions.peds.js` read **243** at the 04:00 pass 2026-09-03 (ch.1–11) and Chat B is still adding:
  expect it to **grow, never shrink**. A figure near the old 81 means the COUNT broke, not the file.
  Re-measure the current floor from `MEMORY.md` "Validation state" before judging:
  ```bash
  f="D:/claude os/Medical school/Herophilus/app/data/questions.peds.js"
  echo $(( $(grep -oE '(^|[{, ])id: *[^ ]' "$f" | wc -l) + $(grep -oE '"id" *:' "$f" | wc -l) ))
  ```
  ⚠️⚠️ **`app\data\*.js` MIXES TWO KEY STYLES — count both or the answer is nonsense.**
  `questions.neuro.js` holds **151 entries with JSON-style quoted keys** (`"id": "…"`) and
  **22 with bare keys** (`id: "…"`). A bare-key regex counts 22 of 173 and reads as
  catastrophic loss. **It is not loss** — neuro was 173 q + 7 cases = 180 at a corpus of 3,982
  when that was written; both have since grown. ⚠️ **Never compare against a number written
  here — the corpus moves by the commit. Load the array and read `.length`.**
  This check has now shipped WRONG TWICE — first grepping the invented prefix `pedhouse-`
  (real prefixes are `pedhd-inf-` / `pedhd-renal-` / `pedhd-card-`), then with a bare-key-only
  regex. **Both returned a number that looked like data loss on a perfectly intact file.**
  ⚠️ **Before reporting any count as loss, re-count with the command above and compare against
  `git cat-file -s HEAD:<path>` — bytes rising while a count falls means the COUNT is broken.**
- **Both chats are LIVE, so a dirty tree is now the NORMAL state, not a finding.** At 2026-09-03
  03:20 the endpoint chat owned `resume-peds-endpoint.md`, `*-pd-ep.js`, `merge-parts-ep.js` and
  `endpoint-s03-gastro.part-*.js`; Chat B owned `house-ch12-neurological.array.js`. **Report which
  chat each dirty file belongs to; never stage one.** ⚠️ Report an untracked staging file that has
  not moved in a day — that is a chat that died mid-chapter.
- **✅ ENDPOINT LAUNCHED 2026-09-02 — s1 and s2 are SPLICED. Floor check, not a hold.**
  `app\data\questions.peds.ep.js` read **216** at the 04:10 pass 2026-09-03 (s1 89 + s2 76 = 165,
  folded 165 → 150 → 148; s3 Gastro 148 → 215 → 213 with a fold, `aa6881d`; s4 Accidents
  213 → 216, no fold, `a10bc69`). It moves by the commit — re-measure, never quote this.
  ⚠️ **A FOLD PASS MAKES THIS FILE SHRINK LEGITIMATELY** — unlike
  `questions.peds.js`, a falling count here is not automatically loss. Check the commit message
  says "fold" and that bytes moved with it; if a drop has no fold commit behind it, report it.
  A section that outgrows one file stages as `part-A.js` / `part-B.js`, merged by
  `tools\bank-harness\merge-parts-ep.js` — s3 did; s4 (Accidents) did not need it. **s5 is next.**
- **✅ THE TWO SECOND ANCHORS WERE PLACED 2026-09-03 on the user's instruction. Settled.**
  `resume-ophtho.md` ~41k → **~14k**, `resume-peds.md` ~37k → **~13k**, both via a
  `<!-- RESUME-READ-FROM-HERE-2 -->` marker. **Nothing was deleted or moved** and new entries still
  append below the marker. **Open both journals with `RESUME-READ-FROM-HERE-2`**; anchor 1 still
  works and returns the longer tail. ⚠️ **The live item is now `resume-peds-endpoint.md`** —
  ~14k and growing fast, no anchor at all. When its whole-file read passes ~30k tokens a second
  anchor is due at a clean section boundary. **Measure it every pass; still report, do not build.**
- **Cross-bank integrity, one command, read-only:**
  ```bash
  cd "D:/claude os/Medical school/Herophilus" && node tools/bank-harness/validate-all.js
  ```
  Exit 1 = a hard failure (parse, holes, duplicate id across files, answer outside options,
  dead backticked id). Report the failure line; do not fix it from the watch.
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
- **Source PDFs are originals.** 166 files under `Medical school` (re-counted 2026-09-02; the
  earlier 158 was stale). Confirm the count:
  `find "D:/claude os/Medical school" -iname "*.pdf" | wc -l`

- **⛔ OPTIMIZATION IS CLOSED UNTIL 3 OCT 2026 — user ruling, 2026-09-03.** *"And then: STOP
  optimizing. Go back to drafting the questions."* Deferred by name until after the exams: the
  tight-crop OCR gate, load-bearing-token detection, further OCR-confidence work, alternative OCR
  providers, pipeline state machines, and any further architectural optimization. **Also deferred:
  fixing `keypos.py`'s two known misses** — they are documented in its docstring and neither has
  ever produced a wrong shipped key.
  **The honest accounting of the 2026-09-03 block, so the trade is not re-made blind:** the ~70-step
  cap and the resume-file read-ranges pay back on every later session and cost about an hour — those
  were worth it. `keypos.py` and `dup-options.js` found **zero defects** between them; they are
  insurance against a problem the bank did not have. The block produced **no questions**, against
  124 House + neuro remaining and exams from 14 Sep. **Optimizing is visible and finishable and
  drafting is not — that is the whole reason it keeps winning. Draft first.**

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
