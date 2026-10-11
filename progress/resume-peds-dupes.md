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
