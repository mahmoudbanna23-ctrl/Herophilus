# Plan: regroup the ophthalmology module on the endpoint book's contents map (2026-09-19)

Owner ruling 2026-09-19: the ophthalmology module's chapters are to be mapped on the endpoint book's own
contents page, not on the lecture decks. Scope answered from two questions:

1. "Rebuild ophtho on the book's 21" (all of it, not only the endpoint questions or only new sections).
2. "21 groups, chapters inside": the book's 21 sections become the **groups** of the ophtho module; the
   lecture-sized chapters stay inside them. Chosen over 21 flat chapters because theory is one entry per chapter
   id and the user ruling of at most 13 printed pages per chapter would break (Retina and Neuro would run to about
   28 pages each).

Source of the map: `progress\ophtho-endpoint-section-map-2026-09-07.md` (the book's Contents page, PDF pp.2-3,
transcribed verbatim there). 21 chapters, then 7 exam-shaped sections (22-28). The exam sections are Part B
(`resume-ophtho-endpoint-B-exams.md`, chat B) and are NOT groups here.

## Measured state (2026-09-19, from disk)

- `modules.js` ophtho block: one group "All lectures", 37 chapters. Ids appear in four files only:
  `questions.ophtho.js` (1,598), `questions.ophtho.ep.js` (338), `modules.js`, `theory.ophtho.js` (one entry per
  chapter id, locked). `index.html` carries none. `tools/boot-check/boot-check.js` counts chapters live, so its
  numbers move by themselves (37 chapters become 37 plus any new ones; group count changes).
- Ophtho stays locked at the aggregator (`LOCKED_MODULES`, `THEORY_LOCKED`), so nothing in the shipped app moves
  until unlock.
- Counts per chapter (House / endpoint) were measured by a scratch script; re-measure before quoting. The
  chapter table below is derived from chapter NAMES, not from reading questions.

## Proposed group table (chapter id, House count / endpoint count at measurement)

| # | Book section (group name, verbatim from the Contents) | Chapters inside | Note |
|---|---|---|---|
| 1 | Examination of the Eye | op-intro (20/0), op-intro-exam (4/34), op-va (30/0), op-ant (2/0), op-pupil (49/0) | op-va and op-pupil are lecture-shaped ("VA, Field, Lid, Lac, Orbit"; "Pupil, EOM, Fundus"): assigned whole to group 1, questions not refiled. Verify against book section 1 before commit. |
| 2 | Optics and Errors of Refraction | op-refract (54/27), op-refract-astig (32/0) | clean |
| 3 | Orbit | op-orbit (39/19), op-orbit-mass (30/0) | clean |
| 4 | Lacrimal System | op-lac (71/23) | clean |
| 5 | Eyelids | op-lid (104/28) | clean |
| 6 | Conjunctiva | op-conj (123/39) | clean |
| 7 | Sclera | op-sclera (34/13) | clean |
| 8 | Cornea | op-cornea (94/28), op-cornea-surg (26/0) | clean |
| 9 | Lens | op-cat (66/25), op-cat-surg (58/0) | clean |
| 10 | Uveal Tract | op-uvea (75/23) | clean |
| 11 | Glaucoma | op-glauc (133/23) | clean |
| 12 | Vitreous | op-vitreous (0/11) | clean, filed 2026-09-19 |
| 13 | Retina | op-ret-dr (52/0), op-ret-vasc (47/0), op-ret (49/0) | clean |
| 14 | Neuro-ophthalmology | op-neuro (35/25), op-neuro-motil (40/0), op-neuro-optic (54/0) | clean |
| 15 | Squint | op-squint (55/8), op-appear (0/0) | op-appear ("Problems of Appearance") is empty; place beside Squint unless the owner says otherwise |
| 16 | Pediatric Ophthalmology | none yet | a chapter is added when endpoint s16 (pdf 1098-1149) is staged |
| 17 | Malignancies of the Eye and its Adnexa | op-onc (35/12) | clean |
| 18 | Ocular Trauma | op-trauma (74/16) | endpoint s18 spliced (`9639a49`, 338 -> 354); ids do not change, so no collision |
| 19 | Ocular Manifestations of Systemic Conditions and Diseases | op-systemic (23/0) | clean |
| 20 | Drugs and the Eye | none yet | empty until endpoint s20 |
| 21 | Keys for Diagnosis | op-acute (26/0), op-white (5/0), op-insid (35/0), op-vissym (19/0), op-red (3/0), op-red-mgmt (2/0) | the symptom-led differential lectures are the closest analogue of a "keys" section; proposal only, verify against book section 21 (pdf 1374-1390) |

Decision made in this plan, subject to check: chapters are assigned to groups WHOLE. No question is refiled and no
chapter id changes, so `questions.*`, `theory.ophtho.js`, `SCHEDULE` and every `wardround.*` key are untouched.
Only if a whole chapter is plainly in the wrong group after reading book section titles does it move, and even then
it moves as a unit.

## Steps

1. Read the book's section titles for sections 1 and 21 (already cached in the section map; only if it is thin,
   render the section-opener pages in a subagent) to settle the two "verify" rows above.
2. Rewrite the ophtho block of `app\data\modules.js`: 21 groups named exactly as the Contents lists them, chapters
   inside as tabulated. Keep the design-history comments beside the chapters they describe. Empty groups (16, 20)
   need a check that the app renders an empty group without error (the app already greys empty chapters; an empty
   GROUP is untested).
3. Update `tools/bank-harness/val-oph-ep.js` and `sec-oph.js` only if they read the group name or count; their
   chapter ids do not change.
4. Verify: `node tools\boot-check\boot-check.js` (0 console errors; chapter count unchanged at 154 plus no new
   ones, group counts move), load `Q_OPHTHO` and `Q_OPHTHO_EP` and confirm every `chapter` id still resolves,
   `node tools\bank-harness\val-oph-ep.js --part 1 <n>` still passes, then render the ophtho module view (unlock
   locally in the scratch copy that boot-check makes, or the Browser pane on a copy) and LOOK at it.
5. Commit with `git commit -F <msg> -- app\data\modules.js <other paths>`; journal in
   `progress\resume-ophtho-endpoint-A-chapters.md` and the `MEMORY.md` resume block.

## Not verified / open

- Whether chapter-level user state exists (theory-read flags and the like). One narrow grep found none; ophtho is
  locked so no user can have produced any, but re-check `index.html` for chapter-keyed state before committing.
- Whether the app renders an empty group (groups 16 and 20) without error.
- The group placements marked "verify" (1 and 21) and `op-appear`.
- Whether the aggregator or the home screen shows group names anywhere that a 21-group ophtho module would make
  unwieldy (ENT and peds group counts are the comparison).
- End-of-stream owes (unchanged by this plan): the House `alsoIn` merges and the `ophep-squint-10` reprint citation.

## Coordination

- Chat B (ophtho endpoint Part B) works in `content\ophtho\qb-pages\`; its s18 is already spliced (`9639a49`,
  `questions.ophtho.ep.js` holds 354). This plan touches `modules.js` only, so it does not collide. Commit with an
  explicit pathspec.
- Baseline before any regroup, measured 2026-09-19: boot-check `QUESTIONS 4049 · THEORY 81 · MODULES 4 · chapters
  154`, 0 console errors; ophtho = 1 group "All lectures", 37 chapters; no question `chapter` id outside `modules.js`.
- Endpoint sections still to come (s13 Retina, s16 Pediatric Ophthalmology, s20 Drugs, s21 Keys) will each add a
  chapter inside the matching group; the s16 chapter is now a chapter inside group 16, not a free-standing chapter.
