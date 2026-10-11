# Resume - Pediatrics duplicate sweep, model-exam rows, Paper 1 / Paper 2

Status 2026-10-11: plan APPROVED by the owner, NOTHING executed yet. Start with the seat check under Routing, then Step 1.
Append progress under a '## Changed since' block at the bottom, never in the body.

## Paper order - sent by the owner 2026-10-11 (his own list, as a phone screenshot)

Paper 1, in this order: Child development; Pediatric Emergencies; Genetics; Neonatology; Growth; Nutrition; Gastroenterology; Infectious diseases; Allergy and Immunology; Respiratory.

Paper 2, in this order: Cardiology; Nephrology; Hepatology; Hematology and Oncology; Diabetes and endocrinology; Neurology.

Mapping to the app's 21 sections (Claude's reading, section names as in app/data/modules.js):
- Child development = Normal Development + Developmental problems
- Pediatric Emergencies = Pediatric emergencies
- Genetics = Genetics
- Neonatology = Neonatal medicine
- Growth = Growth and puberty
- Nutrition = Nutrition
- Gastroenterology = Gastroenterology
- Infectious diseases = Infection and immunity
- Allergy and Immunology = Allergy
- Respiratory = Respiratory Disorders
- Cardiology = Cardiac Disorders
- Nephrology = Kidney & Urinary tract
- Hepatology = Liver Disorders
- Hematology and Oncology = Hematological Disorders + Malignant Disease
- Diabetes and endocrinology = Diabetes & Endocrine
- Neurology = Neurological Disorders

Not in the list, ruled by the owner 2026-10-11: Accidents and poisoning = Paper 1, right after Pediatric emergencies; Mental Health = Paper 2, right after Neurological Disorders (last).
Perinatal, ruled by the owner 2026-10-11: a NEW section "Perinatal medicine" in Paper 1, right after Neonatal medicine, for the textbook perinatal chapter (antenatal and fetal medicine, resuscitation, newborn examination). The six existing newborn topics stay together in Neonatal medicine; their ids are not renamed. New chapter id must not collide with the existing id perinatal (suggest perinatal-med). Questions are pulled into it by content from the topics they were sorted into (Self assessment book perinatal chapter first, then the other three sources): only the chapter field changes, ids stay, so saved progress is untouched. Read content/peds/perinatal-neonatal-boundary.md first; a seat lists candidates, a different-house checker reviews, Claude rules each move. If none are found the row stays empty and greyed. Update the comment above the Pediatrics groups in app/data/modules.js, which today calls this a coverage gap.
The app keeps its own section names unless the owner says to rename them.

# Plan — Pediatrics duplicate sweep + model-exam rows (2026-10-11)

## Context

Using the app, the owner saw Pediatrics questions repeated, some across sources and some inside
one source. Measured state: Pediatrics holds four sources (House 393, Endpoint part 1 704,
Endpoint part 2 630, Self assessment 521). Self assessment was swept against the other three on
2026-10-11 and merged with `alsoIn`. **House, Endpoint part 1 and Endpoint part 2 were never
cross-merged with each other** (no Pediatrics entry carried `alsoIn` before Self assessment), and
349 Endpoint entries are the eight printed Model Final Exams sitting loose inside topic chapters.

The source filter already behaves the way the owner describes (`bankOn`, `app/js/storage.js:276`:
a question shows when any of its sources is switched on, once). So no filter change is needed —
merging the duplicate entries is what delivers it.

Peds papers are 18-19 Oct. No live upload 17-19 Oct, and none at all without the owner's yes.

## Owner rulings from the interview (binding)

1. Same source printing a question twice: keep one copy, and give Pediatrics a model-exam section
   like Neuro's.
2. A question in a topic and in a model exam: one copy, shown in both places, counted once.
3. Pediatrics only: progress is separate per place — answered inside an exam row, it is still new
   in its topic, and the reverse. Neuro stays as it is today (shared).
4. Near copies (same case, same right answer, wording or option order differ): merge, keep the
   fuller one. If anything medical differs, both stay.
5. Same question, two sources mark different answers: merge, **both answers count as right**, a
   notice under the question tells the student to read the explanation, and the explanation says
   briefly: source A answers X, source B answers Y, what the lecture says, our view. Short.
   This supersedes "the answer never moves" for cross-source clashes only.

6. Pediatrics is rearranged as **Paper 1 and Paper 2** (owner 2026-10-11): topics sit under two
   headings in the owner's order, and "Practise all" splits into Paper 1 and Paper 2 the way Neuro
   splits into Neurology and Psychiatry. **The order is supplied by the owner — never guessed.**
   (Today Pediatrics is one flat list of 21 sections, `app/data/modules.js:365-423`; the app has
   no systemic / non-systemic split.)

## Decisions taken by Claude (told to the owner in plain words)

- Same words but a different picture stay two questions (existing rule, `pedhd-card-6..10`).
- A shared option menu pairs questions, it never merges them.
- Saved progress on a removed copy moves to the kept copy.
- A model-exam question printed in no topic keeps showing in the topic it was sorted into as well
  as in its exam row (same as Neuro).
- Flags, notes, highlights, reports and the review deck belong to the question (shared between
  topic and exam row); only "answered / right / wrong" is per place.
- The Pediatrics total counts a question as done once, if it was answered in either place.
- The sets `pedep-tr1` (29), `pedep-tr2` (16), `pedep2-ra` (6), `pedsa1-m` (10), `pedsa2-m` (4)
  are left where they are; what they are is read off their `source` first and reported.

## Routing

Fresh chat for execution (this one is far past its step budget). Step 0 is the seat check
(`node "D:/claude os/Tools/omniroute/probe.mjs"`, read the verdict lines of `seats-alive.json`).
Sweeps are scripts. Pair judging and clash-note drafting are bulk per-item jobs for the factory or
a Codex text seat. App code goes to a capable seat (Codex may open `app/js`, not `app/data`).
Merge decisions, clash adjudication, the splice, `MEMORY.md`, and git stay with Claude. Every
result: a script check, then one checker from a different house. Two failed dispatches on a job
means a Claude role, never a third try. One test run at a time. Never `auto/*`.

## Steps

**1. Sweep (script).** Reuse `tools/qb-pipeline/sweep.js <array> <corpus>` (six stages A-F, ranks
only) with `tools/bank-harness/norm.js`. Run all ten pairings of the four Pediatrics files — each
against itself and against each other — plus the sweep's negative control so a zero is a measured
zero (model: `content/peds/qb-pages/sa/_work/sweep/control.js`). Load arrays with node `vm`,
never grep-count. Output ranked candidate pairs to a new `content/peds/qb-pages/dupes/`.

**2. Judge the pairs (seat, then Claude).** One bounded job per batch of candidate pairs; reuse
the pair-file shape and tools in `content/peds/qb-pages/sa/_work/sweep/pairs/` (`make-pairs.js`,
`show-class.js`). Each pair gets one class: `exact` · `near` (same case, same key) · `clash`
(same question, different key) · `figure` (same words, different picture) · `menu` (shared
options only) · `different`. Script check: every pair classed once, class in the list, both ids
real. Independent checker (different house): every `clash`, every `near`, a sample of `exact`.
Claude rules the final merge list.

**3. Apply the merges (Claude, scripted splice).** Per merged pair: keep the fuller printing;
cross-source → add the other source to `alsoIn` and fold its citation into `source`; same source
→ no `alsoIn`, extend `source`. Where option order differs, the kept entry's order and key stand.
Every removed id goes into `app/data/folds.js` (`var FOLDED = {deadId: keptId}`). Grep drafts and
`qs` lists for dead ids after every fold; parse-probe each data file after the splice.

**4. Clashes.** Kept entry gets `alsoRight:[index,...]` (the other source's key, re-indexed to the
kept option order). Explanation gains a short note (about 60 words): "<Source A> answers …;
<Source B> answers …; the lecture says … (`<file>.pdf p.<N>`); our view …". Drafted by a seat from
the cached lectures in `content/peds/lectures/`, checked by a different house, final medical read
by Claude. Outside knowledge is tagged `not taken from the course material`. The notice text is
rendered by the app, not typed into the stem.

**5. App changes.**
- *Exam rows.* `tools/exams/build-exams-peds.js` (copy of `build-exams-neuro.js`) writes
  `app/data/exams.peds.js`: `var EXAMS_PEDS = {examId:[ids in printed order]}` from the
  `pedep-mf1..4` / `pedep2-mf1..4` entries, with folded ids replaced by their kept id.
  `app/data/modules.js` (Pediatrics, `:365-423`): new group `Model Final Exams`, eight rows; row
  names read from the entries' `source`, never from memory. `app/index.html`: script tag.
- *Separate progress (Pediatrics only).* In `app/data/questions.js`, after `QUESTIONS` is built,
  build one shadow per exam slot: `Object.create(q)` with own `id` (`examId + '~' + q.id`), `rid`
  (real id) and `exam`. Shadows never enter `QUESTIONS`, so totals, "Practise all" and mock count
  once. `app/js/storage.js`: `qsIn` returns the shadows for an `EXAMS_PEDS` id; `inChapter`
  learns `EXAMS_PEDS`; new `qById(id)` (shadow table first, then real) replaces every inline
  `QUESTIONS.find(x=>x.id===…)` / `.some` — about 20 sites in `quiz.js`, `render.js` (`go()`),
  `boot.js` (keyboard), `theory.js`. `EXAMS_NEURO` code paths stay untouched.
- *Shared things.* Flags, notes, highlights, reports, review-deck scheduling and theory links key
  on `q.rid||q.id`. Module-level totals count a question done if answered in either place.
- *Two right answers.* One helper `isRight(q,pick)` (`pick===q.answer || (q.alsoRight||[]).includes(pick)`)
  replaces the six strict comparisons in `quiz.js`; both accepted options light up; the verdict
  line prints "A or C"; a fixed one-line notice under the stem when `alsoRight` exists.
- *Carry-over.* `foldState(s)` moves `answers`, `flags`, `conf`, `srs`, `hl`, `notes`, `reports`
  and resume pointers from a dead id to its kept id (later answer wins, flags OR, earlier due
  date wins), then deletes the dead key — idempotent. Called at the end of `checkedProgressState`
  (`boot.js`) and of `mergeStates` (`gate.js`), so an un-updated device cannot push dead ids back.
- *Paper 1 / Paper 2.* `app/data/modules.js`: reorder the Pediatrics groups into the owner's
  order and tag each group `paper:1` or `paper:2`. **Chapter ids, group contents and `SCHEDULE`
  are not touched**, so no saved progress moves. `app/js/render.js`: a heading row where the
  paper changes, and the Neuro "Practise all" split (`render.js:326-333`) generalised to split
  Pediatrics by the `paper` tag. A section the owner's order does not mention is reported, never
  placed by guess. **This step waits for the owner's order and runs last; steps 1-4 and the
  rest of step 5 do not depend on it.**
- *Exam rows placement (owner 2026-10-11):* the `Model Final Exams` group is its own section
  after Paper 2, tagged with no paper, so neither Practise-all button serves an exam row.
- No `wardround.*` key is renamed. Everything touching a source still goes through `banksOf(q)`.

**6. Teach the checkers.** `tools/validate/validate.js`: exam ids exist and are unique per exam;
`alsoRight` in range and not equal to `answer`; each `FOLDED` key absent from the data, each value
present. `tools/validate/counts.json` and `app/smoke.js`: new totals. `tools/boot-check/boot-check.js`:
load `exams.peds.js` and `folds.js`. `tools/bank-harness/validate-all.js`: accept `alsoRight`,
and fix the pattern that skips `*.ep2.js`.

## Verification

- `node tools/check-all/check-all.js` 4/4; `node tools/bank-harness/validate-all.js peds --soft`:
  0 holes, 0 duplicate ids, 0 dead ids; `node tools/boot-check/image-check.js` clean.
- Arithmetic: old total − removed = new total; removed = size of `FOLDED`; per-source counts
  re-measured from disk (they may sum over the total — correct).
- Re-run the sweep on the merged files: no `exact` pair left; negative control still fires.
- Headless boot asserts: Pediatrics shows eight exam rows with the printed counts; `QUESTIONS`
  length and "Practise all" total equal the arithmetic; answering in an exam row leaves the topic
  copy new and the reverse; a Neuro exam answer still marks the topic copy answered; an exam
  session resumes; a flag set in an exam row shows in the flagged list; an `alsoRight` question
  accepts both picks and shows the notice; `foldState` twice gives the same state, and merging a
  stale state holding a dead id leaves no dead key.
- Paper split: every one of the 52 Pediatrics chapters sits under exactly one paper; Paper 1 +
  Paper 2 "Practise all" counts add up to the Pediatrics total; Neuro's two buttons unchanged;
  portrait and landscape screenshots (820x1180, 1180x820).
- Source filter spot check: a merged House + Endpoint question appears once with both chips on,
  and under each chip alone.
- Independent checker (different house from the maker) on the merge list, the clash notes and the
  app change.

## Close

`progress/ledger.md` new section, `MEMORY.md` counts, story to `progress/memory-archive.md`,
resume note. `git commit -F <msg> -- <explicit paths>`, push to the private remote. Report to the
owner in plain words: how many repeats were found, how many merged, how many clashes.

## Not in this plan

- P5 character and 3D work, OSCE (parked). Neuro behaviour (unchanged).
- Saving last night's 12 unsaved files; the backup choice (asked separately).
- A second picture slot per question (three leftover Self assessment figures).

## Changed since

- 2026-10-11 seat check run. `work-text` and `work-vision` answer; `COMBO work-text` is NOT ok (member `openrouter/nvidia/nemotron-3-ultra-550b-a55b:free` 429, cooling down) — per ROUTING section 6 the combo gets no work until fixed on the owner's yes, so judging goes to Codex with a Claude refuter as the different-house checker. Codex on its own login is free (only the desktop app's idle servers were running).
- 2026-10-11 Step 1 dispatched to Codex (`gpt-5.6-terra`, 1200 s clock): brief `content/peds/qb-pages/dupes/brief-1-sweep.md`, log `dupes/codex-1.log`, outputs `dupes/candidates.json`, `summary.json`, `report-1.txt`. Dispatch 1 of 2 on this job. Result not yet read.
- 2026-10-11 Step 1 DONE (dispatch 1 of 2 succeeded). Arrays 393 / 704 / 630 / 521, 0 holes. 1,236 unique candidate pairs in `dupes/candidates.json` (120 touch a model-exam entry): peds-peds 144, peds-ep 218, peds-ep2 367, peds-sa 0, ep-ep 113, ep-ep2 5, ep-sa 3, ep2-ep2 129, ep2-sa 2, sa-sa 255. By score: 100 exact 37, 95 cross-chapter exact 7, 80 respelled 15, 75 exact stem 37, 70 reworded + option dropped 76, 60 near stem 376, 10 shared menu 688. Real candidates (non-menu) 548. Control fired on exact, respelled, reordered, reworded; silent on unrelated.
- 2026-10-11 Step 1 checks, both passed. Script: 0 bad ids, 0 self pairs, 0 duplicate pairs. Independent recall (Claude house, different instrument): 83 identical-normalised-stem pairs across the four files, 0 missing from the candidates.
- 2026-10-11 Step 2 split in two. 2a (script only, Codex): brief `dupes/brief-2a-pairs.md` builds `dupes/pairs/auto.json` (machine-decidable `menu` and `exact`), `pairs/batches/batch-NN.json` (at most 100 pairs each, for a reader), `pairs/summary.json`, `pairs/build-pairs.js`. 2b (reader, one Codex job per batch, one at a time): brief `dupes/brief-2b-judge.md`, output `pairs/judged/judge-NN.json`. Then: script check, Claude refuter on every `clash` and `near` plus a sample of `exact`, pictures of `needsEyes` pairs compared by a vision helper, Claude rules the merge list.
- 2026-10-11 Step 2a DONE (dispatch 1 of 2 succeeded), script check passed: auto 655 (`exact/identical` 42, `menu/menu-different-key` 613) + batched 581 in 6 batches (100 x5, 81) = 1,236, 0 bad ids, 0 repeats, no explanation text leaked. PROBE FAULT in `build-pairs.js`: it looked for picture files without the `.jpg` the app adds, so its "102 missing images" and `needsEyes` 105 are wrong. Re-measured with `.jpg`: of the 581 batched pairs 476 have no picture, 10 the same picture, 76 different pictures, 19 a picture on one side only, 0 missing. True list = `dupes/pairs/needs-eyes.json` (95). Ignore `flags.img` and `flags.needsEyes` in the batches.
- 2026-10-11 Step 2b launched: `bash content/peds/qb-pages/dupes/run-2b.sh` (re-runnable, skips a batch whose `pairs/judged/judge-NN.json` exists; 1200 s clock per batch; logs `pairs/judged/codex-NN.log`). A batch that fails once gets ONE more run; a second failure goes to a Claude role.
- 2026-10-11 owner asked for every possible parallel job. Running beside the Codex judging loop: (1) picture compare, factory `vision` job `content/peds/qb-pages/dupes/eyes-job/` (76 pairs with two different pictures, stitched side by side in `eyes-job/img/`; read only `summary.json` + `failures.json`); the 19 one-side-only pairs are for Claude to rule on text. (2) Claude builder A (Sonnet, `ROUTE-OK` Codex occupied): `folds.js`, `tools/exams/build-exams-peds.js`, `exams.peds.js`, Pediatrics groups reorder + `paper` tags + `Perinatal medicine` (`perinatal-med`) + `Model Final Exams` group, render headings and Practise-all split. (3) Claude builder B (Sonnet): shadows, `qById`, `isRight`, `foldState`, self-check `tools/exams/selfcheck-peds-logic.js`. (4) Claude lister (Sonnet): Perinatal candidates in `dupes/perinatal/candidates.json`. None commits. Owed after: Codex (different house) reviews the app diff and the Perinatal list; Step 6 checkers.
- 2026-10-11 OWNER RULING: what belongs to Perinatal is judged from the theoretical (lecture) material, not the textbook chapter list. The running lister was redirected: boundary = `content/peds/lectures/` (plus theory chapter titles), written to `dupes/perinatal/lecture-scope.md`; each `candidates.json` row carries the deciding `lecture`; where `content/peds/perinatal-neonatal-boundary.md` disagrees, the lectures win.
- 2026-10-11 Step 5 builders (Claude roles, two at once, disjoint files) both reported done; NOT yet checked by a different house (Codex review owed once the judging loop frees the seat). Builder A: `tools/exams/build-exams-peds.js`, `app/data/exams.peds.js` (349 = 50/46/60/59 + 49/49/27/9), `app/data/folds.js` (empty), `modules.js` Pediatrics reorder + `paper` tags + `perinatal-med` + `Model Final Exams` group, `index.html` tags, `render.js`, `layout.css` `.paperhdr`. Row names "Model Final Exam N (Endpoint part 1|2)" - the part suffix is the builder's choice (a `source` prints only pdf + page). App has 20 Pediatrics groups, not 21. Builder B: shadows in `questions.js`, `qById` (17 sites), `isRight` (6), `foldState`, `.two-right` rule, `tools/exams/selfcheck-peds-logic.js` (22 assertions pass). Boot check 0 errors both. LEFT OPEN by B (outside its scope, fix in one follow-up): `inDeck` in `utils.js` reads only the real id (wrong answer inside an exam row never reaches the review deck); `clepsydra.js:365` and `:582` count per place; `mockResume` ids not remapped by `foldState`.
- 2026-10-11 Step 2b batches 01-05 back, script check `dupes/pairs/check-judged.js` (writes `pairs/judged/all.json`): 500 pairs, every pair classed once, ids intact. Classes so far: exact 84, near 246, clash 4, figure 23, menu 10, different 133. The 11 "exact but key text differs" lines are spelling only (diarrhea/diarrhoea etc.), not faults. Batch 06 still running.
- 2026-10-11 Step 2b DONE (6 of 6 batches, dispatch 1 each), script check passed after one shape fix (batch 06 returned whole entries in `a`/`b`; `check-judged.js` flattens them): 581 read pairs = exact 84, near 305 (245 cross-source, 60 same-source), clash 4, figure 23, menu 24, different 141. With the 655 machine-classed (exact 42, menu 613) = 1,236. Merged list of verdicts: `dupes/pairs/judged/all.json`. The four `clash` calls to rule: n=1 `pedep2-car-6`/`car-8` and n=5 `pedhd-card-6`/`card-8` (the known same-stem-different-figure set - expect `figure`, never fold), n=226 `pedep-mf2-24`/`pedhd-emg-23` (10 vs 20 mL/kg), n=251 `pedep-mf3-65`/`pedep-mf4-64`.
- 2026-10-11 second read prepared, NOT yet run (factory takes one job at a time; the picture job holds the lock): `dupes/check-job/` (`build.js` writes 393 items = every exact/near/clash, text machine, first verdict hidden; reply `{same,keySame,differs,confidence}`). Run `node "D:/claude os/Tools/factory/factory.mjs" run <check-job>`; then compare with `all.json` by script; Claude rules every disagreement.
- 2026-10-11 Perinatal lister done (`dupes/perinatal/`: `lecture-scope.md`, `candidates.json`, `report.txt`): the lecture cache holds NO perinatal lecture (lectures 7-12 are all neonatal), so by the owner's lecture rule 0 `move`, 401 `stay`, 60 `unsure` (antenatal-fetal 24, newborn-exam 21, resuscitation 13, other 2 - themes no lecture teaches). Owner ASKED (unanswered): move those 60 into the Perinatal row, or leave the row empty. Different-house check of the list still owed.
- 2026-10-11 follow-up builder fixed the three open logic gaps (`inDeck` over shadow ids, once-only totals in `clepsydra.js`, `mockResume` remap in `foldState`; selfcheck 37 assertions, boot 0 errors) and was sent back for three more sites it found: `quiz.js` ~1139/~1163 (`S.answers[q.id].conf` would throw on an exam-only deck question), `desk-data.js:16` (mirrors `inDeck`), `boot.js:169` (counts answers, not questions).
- 2026-10-11 follow-up builder second pass done: the three extra sites fixed (selfcheck 42 assertions pass, boot 0 errors). Every Step 5 file is still uncommitted.
- 2026-10-11 CLAUDE RULING on the 4 `clash` calls: none is a true clash, none merges. n=1 (`pedep2-car-6`/`pedep2-car-8`) and n=5 (`pedhd-card-6`/`pedhd-card-8`) are the same-stem-different-figure set. n=226 (`pedep-mf2-24` vs `pedhd-emg-23`): the doses offered differ, both stay. n=251 (`pedep-mf3-65` vs `pedep-mf4-64`): different statement keyed, both stay. True clashes so far: 0, pending the second read.
- 2026-10-11 picture job finished, dispatch 1: 35 of 76 answered (all by one house, gemini; 20 same, 15 different, all confidence 5), 41 failed on gateway availability ("all targets were skipped by pre-dispatch filters"). Re-run `eyes-job` ONCE more for the 41 after the second read frees the lock; if it fails again the 41 go to a Claude role, never a third run. A "same" call that drives a merge still needs a different-house look.
- 2026-10-11 second read launched (factory text job `dupes/check-job`, 393 items, log `check-job/run.log`).
- 2026-10-11 Step 5 outside review launched after the other chat's Codex job ended: brief `dupes/brief-5-review.md`, report `dupes/review-5/report.md`, log `review-5/codex.log` (1500 s clock, dispatch 1).
- 2026-10-11 Step 5 outside review (Codex, dispatch 1): `VERDICT: holds`, no faults (`dupes/review-5/report.md`). Step 5 app change COMMITTED `2a969e1c` and pushed to the private remote (18 files; selfcheck 42 assertions and boot-check 0 errors re-run just before). NOT uploaded to the live site. `FOLDED` is still empty: no merge applied yet. Still owed on Step 5: the headless checks in "Verification" (exam-row/topic separation in a real page, both screenshots), exam row names confirmed with the owner.
- 2026-10-11 second read running at about 8 pairs a minute (the same factory shift also drains the other chat's queued jobs, so its log `check-job/run.log` mixes in foreign item names). When it ends: `node content/peds/qb-pages/dupes/check-job/compare.js` writes `check-job/disagree.json` (not-same, keys-differ, low confidence, missing); Claude rules each row, then writes `dupes/merge-list.json` = `[{keep,dead}]`.
- 2026-10-11 splice tool being built in dry-run by a Claude role (`dupes/splice/splice.js`, fixture test only, never `--write`); its report was not back when this line was written. If the chat died first: check `dupes/splice/` on disk, the script must pass its own checks on `fixture-list.json` before any real run.
- NEXT, in order: (1) compare + rule the second read; (2) re-run `eyes-job` once for the 41 unanswered picture pairs, then rule picture pairs; (3) owner's Perinatal answer (60 no-lecture questions: move into the new row or leave it empty) - asked twice, unanswered; (4) merge list, real splice, exam builder re-run; (5) Step 6 checkers, Verification, Close.
- 2026-10-11 splice tool BUILT, dry-run proven (Claude role): `node content/peds/qb-pages/dupes/splice/splice.js [--list <path>] [--write]`, default list `dupes/merge-list.json`, without `--write` it writes only to `dupes/splice/out/`. Fixture 4 rows passed (1,648 -> 1,644), five negative runs exit 1. Before counts: House 393, Endpoint p1 704, p2 630, Self assessment 521. `source` fold shape copied from `pedhd-inf-1` (separator `; `). It also rewrites `exams.peds.js` through FOLDED, because the exam builder cannot place a folded model-exam question once its entry is gone (do NOT re-run the exam builder after the splice). OPEN: a dead id still named in another entry's prose fails the tool's check by design; rough count up to 125 of the dead ids are named somewhere. Those mentions must be repointed (dead id -> kept id, or dropped where the mention sits in the kept entry itself) before the real run - script it from the final merge list, Claude reads the result. Not tested: a kept entry inside a CRLF region of the Endpoint p1 file.
- 2026-10-11 second read, factory dispatch 1: stopped "quota exhausted" after 110 of 393 (groq). Of the 110: 103 agree, 6 `notSame`, 1 `keyDiffers` (the known figure pair n=1). The 6 to rule: n=117 (`pedep2-ren-12`/`pedhd-renal-12`, unit mm2 vs mm3 - check the page), n=128 (`pedsa2-11-3`/`pedsa2-13-16`), n=145 (`pedep-emg-32`/`pedep-mf3-25`, CRT >4 s vs >3 s), n=187 (`pedep-gp-10`/`pedep-mf3-30`), n=191 (`pedep-gp-24`/`pedhd-gp-4`), n=206 (`pedep-inf-2`/`pedep-inf-40`). Remaining 283 sent to three Claude readers (Sonnet, blind to the first verdict): input `check-job/claude/batch-K.txt`, output `check-job/claude/out-K-*.jsonl` (`{n,same,keySame,differs,confidence}`). `compare.js` must be taught to read those lines before the final compare.
- 2026-10-11 picture job dispatch 2 launched for the 41 unanswered pairs (log `eyes-job/run2.log`). If it fails again: a Claude role, never a third run.
- 2026-10-11 SECOND READ DONE, 393 of 393 merge candidates (110 groq + 283 Claude readers, `check-job/claude/out-*.jsonl`): 341 agree, 14 `notSame`, 3 `keyDiffers`, 35 low confidence. Tool: `node content/peds/qb-pages/dupes/check-job/compare.js` -> `check-job/disagree.json`.
- 2026-10-11 MERGE LIST BUILT (Claude ruling, not spliced yet). Tool: `node content/peds/qb-pages/dupes/build-merge-list.js` -> `dupes/merge-list.json` (`[{keep,dead}]`), `dupes/merge-stays.json` (every pair that stays, with the reason), `eyes-job/confirm.json`. RULE = LOSSLESS MERGES ONLY: a copy is removed only if the kept copy holds every option of the removed one (same numbers), the same key text, its picture, and a stem at least 80% as long; a different wrong option = something medical differs = both stay; a topic copy is kept over a model-exam copy. Claude's per-pair rulings live in `dupes/rulings.json` (key = pair number n, or `idA|idB` for a machine pair; `merge:false` = both stay; `force:true` = read by Claude, wording / abbreviation / print variant only, bypasses the option and stem checks). 45 rulings so far: 20 stay, 25 forced merges. Current output: 1,236 candidate pairs, 331 groups, **345 copies to remove** (325 cross-source, 23 exam copies folded into their topic copy), **0 true clashes**, no conflicts. Stays: 637 shared-menu, 141 different, 52 real option differences, 23 figure, 20 ruled, 6 picture not compared, 1 pictures differ. The 52 "lossy both ways" were read by Claude: real differences (a swapped wrong option, a dose printed in one only), they stay.
- 2026-10-11 PICTURES: gateway retry answered all it could; 26 pairs handed to a Claude role (20 gemini said "same" and drive a merge = second look by a different house; 6 never answered). Input `eyes-job/claude-todo.json`, output `eyes-job/claude.json` (`[{a,b,same,why}]`). OWED: teach `build-merge-list.js` to read `eyes-job/claude.json` (its verdict replaces the first one for those pairs; `same` false or null = both stay), re-run the builder.
- 2026-10-11 OWNER ANSWERED PERINATAL: "move them into perinatal". DONE: `node content/peds/qb-pages/dupes/perinatal/apply-move.js --write` moved the 60 `unsure` ids to chapter `perinatal-med` (chapter field only, ids unchanged, self-checked: every array equals the old one except those 60 chapters; all four files parse). List with old chapters: `perinatal/move-60.json`. No merge pair straddles the move (every removed copy and its keeper are both in the 60). Comment in `app/data/modules.js` updated. Second look by a different house (Codex, `perinatal/brief-check.md`) launched; result in `perinatal/check-codex.txt` + `check-codex.json` - Claude rules any `no`.
- NEXT, in order (supersedes the NEXT line above): (1) read `eyes-job/claude.json`, wire it into the builder, re-run; (2) read `perinatal/check-codex.txt`, move back any question Claude agrees is not perinatal; (3) script the repointing of removed ids named in other entries' prose (explanations that say "see `<id>`"), then dry run `node content/peds/qb-pages/dupes/splice/splice.js`, then `--write`; parse-probe all four files; do NOT re-run `tools/exams/build-exams-peds.js` after the splice; (4) confirm the exam row names with the owner and report what `pedep-tr1`, `pedep-tr2`, `pedep2-ra`, `pedsa1-m`, `pedsa2-m` are; (5) Step 5 leftovers (headless check of exam rows vs topics, 820x1180 and 1180x820), Step 6 checkers, Verification, Close (ledger section, `MEMORY.md` counts, commit, push). No clash notes needed unless a true clash appears (0 so far).
- 2026-10-11 Perinatal second look DONE (Codex, different house): 58 yes, 1 unsure, 1 no. Claude ruled: pedsa-b11-6 (umbilical granuloma, 2 weeks old) moved BACK to chapter "perinatal" - the source book files it under its Neonatal medicine chapter; marked "stay" in perinatal/candidates.json so apply-move.js cannot re-move it. pedsa-b31-2 (worldwide predictor of neonatal mortality) STAYS in perinatal-med. So 59 questions sit in Perinatal medicine; perinatal/move-60.json now holds 59 rows (name kept).
- 2026-10-11 pictures DONE: a Claude role compared the 26 open pairs - 25 same, 1 not matched (pedep-inf-62 / pedhd-inf-11, narrow crop vs wide, both stay; worth one more look only if time). Verdicts in eyes-job/claude.json; build-merge-list.js reads it over the first verdicts.
- 2026-10-11 MERGE LIST NOW: candidate pairs 1236, groups 336, copies to remove 350 (330 cross-source, 23 exam copies folded into a topic copy), true clashes 0, no conflicts. Stays: 637 shared menu, 141 different, 52 lossy both ways, 23 figure, 19 ruled, 2 pictures differ. NOT SPLICED YET.
- NEXT for a fresh chat, in order: (1) script the repointing of removed ids named in other entries' prose; (2) dry run splice/splice.js, then --write; parse-probe all four data files; do NOT re-run tools/exams/build-exams-peds.js after the splice; (3) Codex review of the Step 5 builders (still owed, different house); (4) headless check of exam rows vs topics, 820x1180 and 1180x820; (5) Step 6 checkers and the Verification list; (6) close: ledger section, MEMORY.md counts, commit, push. Still to ask the owner: exam row names. Uncommitted on purpose: .impeccable/config.json (one false-alarm ignore for app/css/layout.css).
- 2026-10-11 handoff: the second factory picture run (eyes-job, run2.log) was still open at the end of the chat and was STOPPED by hand; it is superseded by eyes-job/claude.json. First act of the next chat: re-run build-merge-list.js and confirm it still prints 350 removed copies, 0 pending pictures, no conflicts, before any splice. Commits so far: c40be229, 18a6ed0f.
