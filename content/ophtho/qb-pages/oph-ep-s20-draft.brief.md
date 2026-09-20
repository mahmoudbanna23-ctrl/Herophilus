# Draft section 20 (Drugs and the Eye) of the ophthalmology endpoint book

This brief is a delta on `content/ophtho/qb-pages/oph-ep-s13-draft.brief.md`. Read that brief first (it is ~1,650 words) and follow
every rule in it — entry shapes, markers, the "deletion of anything you cannot source" section, the report format — with the
substitutions below. Where the two disagree, this file wins.

## Write grant

- `content/ophtho/qb-pages/oph-ep-p1-s20-drugs-eye.draft.js` — create fresh, `var OPHEP_S20_DRAFT = [ ... ];`. One file, no halves.
- Nothing else. No git. Before reporting run `node tools/bank-harness/val-oph-ep.js --part 1 20` and fix every complaint.
- Write incrementally (two or three entries per `Edit`-append). Stop at about 60 tool calls whatever is left, and say what is left.

## Inputs

- `content/ophtho/qb-pages/oph-ep-p1-s20-drugs-eye.array.js` — `var OPHEP_S20_STAGED`, 15 rows. The only source of truth for stems, options, keys and pages. `key` is 0-based.
- Draft ONLY n3, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15 (11 entries). n1, 2, 4, 10 are folded (`sec-oph.js` row 20) and must not be drafted. Ids are
  `ophep-drugs-eye-<n>` with n the row's own n. `chapter: 'op-drugs'`.
- Boxed rows among yours: n3, 5, 6, 7, 8. Unboxed: n9, 11, 12, 13, 14, 15. No figures.
- Template for both entry shapes: the first three entries of `oph-ep-p1-s16-pediatric-ophthalmology.draft.js`. The file must END at the closing `];` — no `module.exports` line, the splice refuses it.
- Teaching sources, the only ones you may cite, by grep and a narrow read of the hit, never whole, in `content/ophtho/lectures/`: no lecture is dedicated to drugs. Grep the DRUG or the SIGN
  (cycloplegic, atropine, mydriatic, phenylephrine, timolol, pilocarpine, latanoprost, brimonidine, acetazolamide, mannitol, hyperosmotic, steroid, fluorescein, anaesthetic) across all files;
  hits are known in L12 (glaucoma 2), L11 if present (glaucoma 1), L13,14 (uvea), L15,16 (cornea), L22 (pupil), L25/L26 (trauma), L29 (squint), L7,8 (refraction), L1,2.
  Slide numbers: a lecture file's page footer ("14 / 28") CLOSES its slide, so a line belongs to the NEXT footer below it. Cite as (L12, slide 9), never a filename.
- A fact no lecture states: keep it short and tag it `not taken from the course material`. Expect many here. Never invent a slide number.
- Doses, percentages and units: copy from the array row's box or the lecture only; never from memory without the tag.
- `source` for each entry: same form as the s16 draft.

## Report (max 25 lines)

Entries written, word count, validator result verbatim (last lines), every tagged claim by id, any printed key the lectures contradict
(note it in `explanation` under "Note on the printed key", never move `answer`), anything left undone.
