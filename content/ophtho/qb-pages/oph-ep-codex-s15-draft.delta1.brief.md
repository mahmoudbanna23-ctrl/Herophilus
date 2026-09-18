# Section 15 draft, rework 1 — edit the existing draft file only

Working root: `D:\claude os\Medical school\Herophilus`. The first pass wrote `content/ophtho/qb-pages/oph-ep-p1-s15-squint.draft.js`
(9 rows) and the validator passes, but review found depth, grounding and hygiene defects. Fix them in place.
Original brief: `content/ophtho/qb-pages/oph-ep-codex-s15-draft.brief.md` — all its rules still bind.

## Write grant

Only `content/ophtho/qb-pages/oph-ep-p1-s15-squint.draft.js`. Edit rows in place; keep ids, `stem`, `options`, `answer`,
`chapter`, `source` exactly as they are. Rewrite only `explanation` and, where noted, `objective`. Do not run git.
Re-run `node tools/bank-harness/val-oph-ep.js --part 1 15` at the end.

## Defects to fix (all rows)

1. **Depth.** Explanations run 71-108 words; the brief asked for about 250 (straight recall) and up to about 450 for
   n:3, n:5, n:10, n:11. Explain why the keyed option is right and why EACH distractor is wrong, using the teaching
   sources named in the original brief. A vignette explanation walks the stem's findings one by one.
2. **Gap tag.** Any fact that is not in the lecture or the book chapter (search `content/ophtho/lectures/L29) Sqint I.txt`,
   `L30) Squint II.txt`, `content/ophtho/book/ch15-squint.txt`, and for n:1 `L3,4) Clinical- Ocular examination.txt`)
   must carry the short tag `not taken from the course material` right after that claim. First pass tagged nothing although
   its report admitted general-knowledge claims (n:1 Seidel and disappearance tests, n:4 "dense media opacity", n:10/n:11
   differential). Grep the sources before deciding a fact is a gap; a fact the source does state needs no tag.
3. **Process language.** n:11 contains "Same option menu as `ophep-squint-10`; the discriminating token here is ..." — delete
   the sentence, and leave no backticks in any explanation. For n:10 and n:11 keep only the plain sentence that options A and D
   print the same text and the printed key is the marked one.
4. **Marker.** The last line stays exactly `Written for this bank — Opthalmology endpoint.pdf prints no explanation here.`
   preceded by a blank line, once per row.

## Row-specific facts (grounded in `content/ophtho/book/ch15-squint.txt`; verify, then use)

- **n:5** — the book states: in paralytic strabismus caused by trauma or diabetes, spontaneous resolution may occur within
  6 months; if resolution does not occur, surgery can correct it. It also says acute-onset paralytic strabismus should be
  investigated for diabetes and an MRI of the brain to exclude serious causes of raised intracranial pressure. Use these:
  6 months is the window (so option 12 months is wrong), immediate surgery is wrong because recovery is expected,
  "None of the above" is wrong because C is right. Do not write "microvascular ischemic" unless the source says it; if you add
  it, tag it.
- **n:9** — DELETE the paragraph headed `Note on the printed key:`; it says nothing. Teach from the book: intermittent
  strabismus means strabismus that is not always manifest; heterophoria sits in that spectrum, is a latent tendency that
  becomes manifest only when binocular vision is interrupted, eyes are aligned perfectly during binocular viewing, and a minor
  degree is normal for most individuals (key C). Option A is wrong because the latent condition is heterophoria, whereas
  heterotropia (tropia) is the manifest deviation present with both eyes open; option B is wrong because heterophoria is not
  manifest during binocular viewing; option D is wrong because A and B are wrong. Then add one short `Note on the printed
  key:` paragraph only to say that the book also states some patients show an intermittent heterotropia and so achieve
  binocular vision part of the time; the printed key stays C.
- **n:10** — left abducent (sixth nerve) palsy: lateral rectus weakness, esotropia, failure to abduct the left eye, face
  turned toward the palsied side to keep the eyes in a position of single vision (tag as general knowledge if the sources do not
  say it). Distractors: left trochlear palsy gives vertical deviation with head tilt; right abducent palsy would fail to
  abduct the RIGHT eye and turn the face right; option D repeats option A's text.
- **n:11** — left trochlear (fourth nerve) palsy: hypertropia of the left eye, weak depression in adduction, diplopia worse
  looking down, chin depression, head tilt to the right (away from the affected side; tag if not in the sources). Distractors:
  abducent palsies give horizontal (esotropic) deviation with abduction failure; option D repeats option A's text.
- **n:1** — keep the correct core (fluorescein stains where epithelium is disrupted; Seidel test; disappearance test;
  rhegmatogenous retinal detachment is diagnosed by dilated fundus examination, not by fluorescein staining). Check
  `L3,4) Clinical- Ocular examination.txt` for how the lecture names these uses; tag only what is not there. Explain each
  of the other three options in a sentence.
- **n:3, n:4, n:6, n:8** — depth only (item 1), tags per item 2. n:3: walk the stem (aligned when both eyes are open, drifts under
  cover, realigns after uncovering => heterophoria); explain esotropia, exotropia, heterotropia as manifest deviations.

## Report

Row count (9), ids 2 and 7 still absent, per row the word count, list every claim you tagged as outside the material, and
paste the validator's final output verbatim.
