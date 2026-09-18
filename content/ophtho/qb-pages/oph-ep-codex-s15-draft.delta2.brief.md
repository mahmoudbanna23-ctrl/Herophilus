# Section 15 draft, rework 2 — edit the existing draft file only

Working root: `D:\claude os\Medical school\Herophilus`. Edit `content/ophtho/qb-pages/oph-ep-p1-s15-squint.draft.js` in
place. Keep every `id`, `stem`, `options`, `answer`, `chapter`, `source` byte-identical; rewrite only `explanation` (and
`objective` where noted). The original brief (`oph-ep-codex-s15-draft.brief.md`) and rework 1
(`oph-ep-codex-s15-draft.delta1.brief.md`) still bind. Do not run git. Write nothing else. Re-run
`node tools/bank-harness/val-oph-ep.js --part 1 15` at the end.

Sources to grep before deciding a fact is a gap (a fact they state needs no tag): `content/ophtho/lectures/L29) Sqint I.txt`,
`content/ophtho/lectures/L30) Squint II.txt`, `content/ophtho/book/ch15-squint.txt`, and for n:1
`content/ophtho/lectures/L3,4) Clinical- Ocular examination.txt`.

## Tag format (all rows)

The gap tag is the exact phrase `not taken from the course material`, written in parentheses right after the claim it
covers: `... leaking incision (not taken from the course material).` One tag per claim, never mid-clause without brackets.
No sentence of the kind "the material does not say".

## Source-citing language (all rows)

Delete every phrase that talks about where a fact came from: "according to the course material", "the book states",
"the source material", "cited in", "the lecture teaches". State the facts plainly.

## Row fixes

- **n:11 (`ophep-squint-11`) — full rewrite, 250-400 words.** It was not reworked and holds a process line with a bare id
  ("ophep-squint-10 uses this same option list"); remove it, no id may appear in any explanation. Open with one plain
  sentence: options A and D print the same text and the printed key is the marked one (B). Then walk the stem: hypertropia of
  the left eye, weak depression of the left eye when adducted (superior oblique's action), diplopia worse looking downwards
  (reading, stairs), chin depression and head tilt to the RIGHT (away from the affected side) => left trochlear (fourth
  cranial nerve) palsy of the superior oblique. Tag the parts the sources lack. Then one sentence per distractor: left and
  right abducent (sixth nerve) palsy cause horizontal, esotropic deviation with failure to abduct, not vertical deviation;
  option D repeats option A.
- **n:5 (`ophep-squint-5`) — clean rewrite, keep about 180-250 words.** Facts from `ch15-squint.txt` (verify): in paralytic
  strabismus from trauma or diabetes, spontaneous resolution may occur within 6 months, and if resolution does not occur
  surgery can correct it; acute-onset paralytic strabismus is investigated for diabetes and an MRI of the brain to exclude
  serious causes of raised intracranial pressure. Keyed option: watchful waiting with good glycemic control for 6 months.
  12 months is wrong because the resolution window is 6 months; immediate surgery is wrong because recovery is expected and
  surgery is reserved for a palsy that does not resolve; "None of the above" is wrong because C is right. Tag as outside the
  material: microvascular ischemic mechanism, "favorable prognosis", any statement that early surgery is "unstable".
- **n:1 (`ophep-squint-1`)** — fix tag format (above). Check the ocular-examination lecture for fluorescein staining, the
  Seidel test and the disappearance test; tag only what it does not state. "Cobalt blue illumination", "binocular indirect
  ophthalmoscopy" and "ultrasound" are general knowledge unless the lecture says them: tag or trim. Keep the answer logic
  (fluorescein highlights epithelial defects, aqueous leak, tear-drainage delay; it does not diagnose a rhegmatogenous
  detachment, which is a posterior-segment fundus diagnosis).
- **n:10 (`ophep-squint-10`)** — replace the muddled face-turn sentence. Left abducent palsy: left lateral rectus weakness,
  esotropia, failure to abduct the left eye, and the face is turned to the left so that the eyes look to the right in the
  orbit, away from the paretic muscle's field of action, which reduces diplopia (tag this as outside the material).
  Distractors: left trochlear palsy = vertical deviation with head tilt; right abducent palsy = the RIGHT eye fails to abduct,
  the right eye is esotropic, the face turns to the right; option D repeats option A. Keep the first sentence about A and D
  printing the same text.
- **n:4, n:6, n:8** — trim or tag the untagged general-knowledge claims: n:4 "microvascular ischemia", "orbital floor
  fracture entrapment"; n:6 and n:8 "adult-onset strabismus", "orbital floor fractures with muscle entrapment", "motor fusion
  mechanism or refractive accommodation" (the book's wording is: comitant = equal deviation in all gaze directions, EOMs normal,
  common in children, may lead to amblyopia, usually benign and rarely neurologic; incomitant = deviation varies with gaze
  direction, from muscle paralysis or mechanical restriction, indicates neurologic or orbital pathology such as 3rd, 4th, 6th nerve
  palsy, thyroid ophthalmopathy, trauma). Prefer the book's wording.
- **n:3 and n:9** — read clean; only apply the tag format and source-citing rules. Leave n:9's `Note on the printed key:`
  paragraph as is.

## Report

Per row word count; every claim you tagged; paste the validator's final output verbatim.
