# Draft section 16 (Pediatric Ophthalmology) of the ophthalmology endpoint book

This brief is a delta on `content/ophtho/qb-pages/oph-ep-s13-draft.brief.md`. Read that brief first (it is ~1,650 words) and follow
every rule in it — entry shapes, markers, the "deletion of anything you cannot source" section, the report format — with the
substitutions below. Where the two disagree, this file wins.

## Write grant

- `content/ophtho/qb-pages/oph-ep-p1-s16-pediatric-ophthalmology.draft.js` — create fresh, `var OPHEP_S16_DRAFT = [ ... ];`. One file, no halves.
- Nothing else. No git. Before reporting run `node tools/bank-harness/val-oph-ep.js --part 1 16` and fix every complaint.
- Write incrementally (two or three entries per `Edit`-append). Stop at about 60 tool calls whatever is left, and say what is left.

## Inputs

- `content/ophtho/qb-pages/oph-ep-p1-s16-pediatric-ophthalmology.array.js` — `var OPHEP_S16_STAGED`, 16 rows. The only source of truth for
  stems, options, keys and pages. `key` is 0-based.
- Draft ONLY n1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 14 (11 entries). n9, 10, 13, 15, 16 are folded into live entries (`sec-oph.js` row 16) and must
  not be drafted. Ids are `ophep-pediatric-ophthalmology-<n>` with n the row's own n (so ids skip 9, 10, 13). `chapter: 'op-peds'`.
- Boxed rows among yours: n1, 2, 4, 5, 6, 7, 8. Unboxed: n3, 11, 12, 14.
- No row carries a figure. The table on marked p.1119 sits inside n1's printed box; it is not a question figure.
- Template for both entry shapes: first four entries of `oph-ep-p1-s14-neuro-ophthalmology.draft.js`.
- Teaching sources, the only ones you may cite, by grep and a narrow read of the hit, never whole: in `content/ophtho/lectures/` —
  `L29) Sqint I.txt` and the second squint lecture if present (amblyopia, esotropia), `L7,8) Refractive errors.txt` (anisometropia, amblyopia),
  `L17) Cataract I.txt` / `L18) Cataract II.txt` (congenital cataract), `L6) Conjunctiva.txt` (ophthalmia neonatorum),
  `L9) lacrimal system..txt` (congenital nasolacrimal duct obstruction), `L24) Ocular tumors..txt` (retinoblastoma, leukocoria),
  `L33,34) The White Eye.txt`, `L27,28) Problems of External Appearance.txt`, `L5) Eyelid disease.txt` (congenital ptosis), and the glaucoma
  lecture (grep `buphthalmos`) for congenital glaucoma. Cite as (L29, slide 12), never a filename.
- A fact no lecture states: keep it short and tag it `not taken from the course material`. Never invent a slide number.
- `source` for each entry: `Opthalmology endpoint.pdf p.<unmarked>-<marked>` in the same form the s14 draft uses.

## Report (max 25 lines)

Entries written, word count, validator result verbatim (last lines), every tagged claim by id, any printed key the lectures contradict
(note it in `explanation` under "Note on the printed key", never move `answer`), anything left undone.
