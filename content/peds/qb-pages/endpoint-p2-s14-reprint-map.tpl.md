# Endpoint part 2 — section 14 reprint map

<!-- GENERATED FILE WARNING lives in the generator; this is the template it fills.
     Prose belongs here. Numbers, counts and per-row blocks belong to the generator and are
     substituted at the {{...}} markers below. Never hand-edit the generated file. -->

Section 14 is **Model Final Exam 3**, pp.1595–1756 of
`Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf`, {{STAGED_N}} questions staged in
`endpoint-p2-s14-mfe3.array.js` as `PEDEP2_S14_STAGED`.

{{HEADER_STATS}}

Every row below was consolidated from the three adjudication files by reading their `## nNN ==`
verdict headings, not their prose summaries — all three quarters miscounted themselves in prose
while being correct in their headings. Every verdict page was checked against the page the staging
staged for that `n`, and all 80 matched.

**Five verdicts were changed afterwards — n33, and then n19, n23, n25 and n51.** Each is described
in its own section below. Every other row is the adjudication's.

## Why part 1 and part 2 are one bank here

Both files carry `bank:'endpoint'`, so a part-1 match is a **within-bank** duplicate exactly like a
part-2 one. It folds by leaving the section-14 question undrafted and citing it on the existing
entry. **It does not take `alsoIn`** — that is only ever for a House match.

## ⚠️ The page-number collision that shaped the proof-of-run marks

`questions.peds.ep.js` **already contains** the string `reprinted in Model Final Exam 3, p.1`,
nineteen times, because **part 1 has a Model Final Exam 3 of its own whose page numbers overlap
part 2's section 14.** `pedep-gp-40` cites `part1.pdf p.109 (reprinted in Model Final Exam 3,
p.1595, …)` and p.1595 is also section 14's banner page in part2.pdf. A mark that did not
distinguish the two files would have counted part 1's own reprints as proof this pass ran.

The two marks below were therefore chosen so that **each measures 0 in the file it is counted in**
before the pass, and the pass scans each file only for its own rows:

{{MARK_TABLE}}

## The two clause shapes

A part-2 target does not name the file, because its `source` already opens with it:

    (reprinted in Model Final Exam 3, p.<page>, <tail>)

A part-1 target must name the file, because its `source` opens with `part1.pdf`:

    (reprinted in Pediatrics endpoint part2.pdf, Model Final Exam 3, p.<page>, <tail>)

Where the target already ends in a parenthetical, the clause **merges into it with `; `** rather
than opening a second one. {{MERGE_SPLIT}}

{{REPRINT_ROWS}}

{{DRAFTED}}

## n33, the one overturned verdict, and the duplicate that overturned it

`endpoint-p2-s14-fold-adjudication-B.md` ruled n33 **NOT A REPRINT**. Two reasons were given, and
both fail.

The first was that the vignette changes the age from 2 days to 3 months and drops the mother's
stated age, which is more than the cosmetic rounding that folds elsewhere. But that is precisely
the shape of three rows the same adjudication pass accepted — **n8** (age 3 → 8, Afro-Caribbean
ethnicity dropped), **n13** (the age dropped outright) and **n22** (age 8 months → 11 months,
Greek-Cypriot ethnicity and the birth-centile detail dropped) — and **n42** is accepted with the
entire vignette stripped out, leaving a bare question. The option list, its order and the key are
untouched here, which is the test the other rows are held to.

The second reason was that `pedep2-gen-24` and `pedep2-car-25` are *"two already-live,
never-folded siblings of exactly this vignette"*, evidence that the bank deliberately keeps this
family as distinct entries. **They were never adjudicated as siblings.** They were staged by two
different passes out of two different sections and never compared to each other, because the
within-bank comparison had not crossed chapter boundaries — the gap already recorded in
`endpoint-p2-s13-missed-folds.md`. The premise was an unexamined duplicate.

`fold-gen24-pd-ep2.js` folded them on 2026-09-06. The two printings share their five options in
the same order and share the key; the stems differ only in `"a 38-year-old primiparous mother"` vs
`"a primiparous mother aged 38"`, one added sentence, and `"he is hypotonic"` vs `"the baby is
hypotonic"` — token overlap 0.830, with no distinguishing token on either side. Both carry a
printed box and the boxes differ, so this is the boxed-second-printing shape crossed with the
cross-chapter shape, and it is within-bank: the fold **deletes**, and takes no `alsoIn`.

The survivor is the **genetics** entry, `pedep2-gen-24`, although the cardiac one carried the
fuller expansion. The chapter was measured, not judged: of the five live entries in this corpus
whose stem names a syndrome and whose key names a cardiac lesion, four sit in `genetics` and one
in `cardiac` — and the one is `pedep2-car-25` itself. Removing it makes the corpus unanimous,
including the House bank's own printing of this same vignette. `pedep2-car-25`'s content was
merged into the survivor rather than discarded: both boxes are quoted, its two
`33) Congenital acyanotic heart disease_.pptx` anchors are carried across, and its natural-history
material is kept. `questions.peds.ep2.js` went 589 → 588.

## n19, n23, n25 and n51 — four rows that were never ruled on at all

n33 was a verdict overturned. These four are different and worse: **no verdict was ever recorded
for them.** The candidate generator produced nothing for each, and the adjudicating quarter read
that silence as a pass. Adjudication B says so in its own words for n51 — *"carried no candidate at
all, per brief"* — and n19, n23 and n25 carry no verdict heading anywhere in any of the three files.

**The rule this produced: a candidate list's silence is not a verdict.** An `n` with no candidate
has not been ruled on; it has been skipped. A fold-adjudication brief must demand a verdict for
every `n` in its range and must never let a quarter fall silent for want of a candidate.

**Stem-overlap ranking is blind to a bare-stem reprint.** A one-sentence stem scores low against
its own twin however identical that twin is — n51's pair scores 0.600 on stem overlap. The
complementary instrument is option-pool overlap plus key-text identity, ignoring the stem entirely.
Both were run over all 31 undrafted rows against all 1,292 live endpoint entries in both files.

The four rulings, each verified on the two page images before being acted on, are written up in
`endpoint-p2-s14-late-reprint-rulings.md` with their divergences. Two of them also moved the key
**text** — n19's en dash printed as a hyphen and n25's key pluralised — which that file did not
record; both were caught by the pass's own `KEYTEXT_OK` gate, which is what that gate is for.

## What the pass must not do

- It must **not** write a clause on a target in the other file. `pedep-neo-20` (n30) and
  `pedep-emg-28` (n42) are the only two part-1 targets, and they are the only two rows that may
  touch `questions.peds.ep.js`.
- It must **not** add `alsoIn` to anything. Five of these targets also have a House twin, recorded
  in the adjudication files and deferred to the closing cross-bank sweep; **nothing folds across
  banks**.
- The `reprints:` array must **not** be added to `splice-pd-ep2.js` until this pass has actually
  run. A guessed array makes the splicer accept missing entries silently. It was added after the
  first run of 48, amended to 49 after n33 was written, and amended to 53 after the four late
  rulings.
