# Section 8 — drafting notes

Binding for every drafting half of peds endpoint part 2 section 8, "Neurological disorders",
pp.930-1078. Written after staging closed at 60/60 and after the duplicate sweep, before any
drafting half exists. Read with `endpoint-p2-s08-chapter-rulings.md` (which chapter each question
goes to), `endpoint-p2-s08-page-map.md` (what is on which page, including three corrections the
staging halves sent back) and `tools/bank-harness/pd-ep2-draft-brief.md` (the format).

Staged 60. **Four are folded and must not be drafted. 56 entries are written.**

## The folds — do not draft these four

`val-pd-ep2.js` and `splice-pd-ep2.js` both carry `folded: [34, 41, 47, 59]`. The validator fails
the half that drafts one anyway, and a folded id must not be pointed at from any sibling entry.

| dropped | survives as | why |
|---|---|---|
| **n47** (p.1051) | **n17** (p.990) | the Ahmed/Gower vignette word-for-word, same answer. Options reordered, two distractors swapped (Romberg → Brudzinski, Chorea → Dyskinesia) without changing what has to be excluded. n17 keeps the fuller question line. |
| **n59** (p.1075) | **n26** (p.1008) | stem and all five options identical in order, same key. An exact reprint. |
| **n34** (p.1024) | **`pedep2-dp-25`** — ALREADY LIVE | identical stem, five identical options in order, same key. The book prints this cerebral-palsy question in section 2 *and* section 8. |
| **n41** (p.1039) | **`pedep2-dp-2`** — ALREADY LIVE | differs by one word ("What age" / "At what age"); options and key identical. |

⚠️ **n34 and n41 are the first CROSS-SECTION folds in this bank.** Their survivors are already in
`questions.peds.ep2.js` under a `pedep2-dp-` id, so no half writes anything for them. What is owed
instead is a `source` line on the live entry naming the section-8 reprint, in the shape this bank
already uses — `Pediatrics endpoint part2.pdf p.145 (reprinted at p.1024)`. **That edit is the main
chat's, after the splice, not a drafting half's.** Do not touch `questions.peds.ep2.js`.

## The pairs — draft BOTH, and cross-reference

The same sweep raised five more pairs. Folding any of them would delete a question the bank teaches.
Each of these gets both entries written, and each entry names its sibling in `explanation`.

- **n6 (p.966) / n51 (p.1059)** — the same Guillain-Barré scenario, but n51 replaces the entire menu
  with lesion-**site** categories (*disorder of neuromuscular transmission*, *disorder of anterior
  horn cell*, *muscle disorder*) where n6 gives disease names (*Guillain-Barré*, *myasthenia
  gravis*, *myotonic dystrophy*, *spinal muscular atrophy*). n6 is febrile, n51 afebrile. n6 asks
  which disease; n51 asks which level of the neuromuscular axis. Draft them as the two halves of one
  teaching point and say so in both.
  ⚠️ n51's stem calls the patient a boy and then uses *she*/*her* twice. **Transcribe it exactly as
  printed** — the stem is byte-identical to staging and a source typo is never repaired silently in
  the stem. Do not remark on it in `explanation`.
- **n28 (p.1012) / n32 (p.1020)** — both "which is true about antiepileptic drugs", and the keys are
  *different true facts*: n28 keys *all AEDs have side effects*, n32 keys *not all cases need
  treatment*. Each one's key appears as the other's negated distractor. One shared table of AED
  principles, anchored in **n28**, pointed at from n32.
- **n34 (p.1024) / n36 (p.1028)** — scored 0.947 on the stem template *"Which of the following is
  not true about cerebral palsy?"* alone; the option sets are different questions. n34 folds into
  `pedep2-dp-25`, so **n36 stands alone** and should point at `pedep2-dp-25`, not at n34.
- **n40 (p.1036) / `pedep2-dp-7`** — the same Clara/Clarissa vignette, both keying *CT or MRI scan
  of the brain*, but dp-7 offers cranial ultrasound and EEG where n40 offers creatine kinase,
  karyotype and thyroid function tests: 4 options against 5, and genuinely different exclusion work.
  Draft n40 in full; name `pedep2-dp-7` as the sibling printing.
- **n53 (p.1063) / `pedep2-res-59`** — not a pair at all, listed so nobody re-raises it: headache
  against bronchiolitis, matched on *"Which of the following statements about X is true?"* alone.

## ⚠️ The shared option menus — PAIRINGS, never folds

Five groups print an identical option list across different vignettes. A shared menu pairs
questions; it never folds them. Anchor the comparative table **once**, in the lowest-numbered entry
of each group, and have the others point at it by id.

| group | options | anchor |
|---|---|---|
| n8, n9, n15 | 5 identical | **n8** |
| n10, n11 | 4 identical | **n10** |
| n14, n16 | 4 identical | **n14** |
| n17, n18, n20 | 5 identical | **n17** |
| n26, n59 | 5 identical | n59 is FOLDED; nothing to pair |

## ⚠️ The figures — four crops, and two of them are not on their own question's page

`fig` is set on n4, n7, n8 and n9. **n8 and n9 are the unusual ones and the page map records why:**
the answered pages 971 and 974 reprint stem, options, key and box but **never the figure**. The EEG
tracings are printed alone on **p.970** and **p.973**, the pages the OCR index labels `notes`.

| n | crop from | what it is |
|---|---|---|
| n4 | **p.961** | colour photograph of an infant's face, eyes deviated downward with white sclera above each iris |
| n7 | **p.968** | colour photograph of a newborn's lower back, raised midline sac-like lesion, a foot visible at the right on a sheepskin. ⚠️ **There is NO caption under this photo** — see the correction below |
| n8 | **p.970** | 16-channel EEG tracing, calibration `200 uV` / `1 s` |
| n9 | **p.973** | 16-channel EEG tracing, calibration `100 uV` / `1 s` |

A cutter addressed to the entry's own `p` would render p.971 and p.974 and find nothing to crop.

### ⚠️ CORRECTION — p.968 has no caption, and this file said it did

The staging recorded "a small caption line is printed beneath the photo but is cut off at the bottom
edge of the slide and not legible", this file repeated it, and half A wrote it into n7's explanation.
**It is not there.** The cutter zoomed the strip between the photo's bottom edge and the explanation
box at 300 dpi: that band is white. The only text below the photo is the explanation box's own
("…ida are associated with / …nceptional folic acid / …s the risk"), which is the box, correctly
excluded from the crop. The sentence has been removed from n7.

What the staging half most likely saw at a lower render was the top of that box. **The lesson is the
one this project keeps paying for: a partial line at the edge of a slide is not evidence of a
truncated caption until something has zoomed in on it.** Nothing was invented from it either way —
the claim was that a line existed and was unreadable, so no text was ever fabricated.

The staged `fig` on n7 **still carries the original wording**, deliberately: staging is the record of
what that half saw on the page, and the record is not rewritten after the fact. This file is the
correction, and this file is what a drafting half reads.

**`imgAlt` must not answer the question.** Half A already wrote alts that hold that line — n4 reads
"Colour close-up clinical photograph of an infant's face and eyes", not *setting-sun sign*; n8 and
n9 read identically as "A 16-channel EEG tracing with amplitude and time calibration bars", because
describing what each tracing *shows* is the answer in both cases. **Do not make them more specific.**
The detailed read of the tracing belongs in `explanation`.

Image basename is **`q-pd-ep2-<page>`, with the 2** — `val-pd-ep2.js` requires it. So the four are
`q-pd-ep2-961`, `q-pd-ep2-968`, `q-pd-ep2-970`, `q-pd-ep2-973`.

## The two explanation boxes printed on their own page

`box` is set on **n4 → p.962** and **n40 → p.1037**. Both `source` lines take the form
`Pediatrics endpoint part2.pdf p.<p> (the explanation box is printed alone on p.<box>)`.

⚠️ **n40's box is itself truncated**, ending mid-sentence at "...brain imaging (MRI" with blank space
below, confirmed at 300 dpi and not a render artefact. Quote it verbatim in the blockquote and
**complete nothing**. The expansion below the rule is where the unfinished thought is carried on,
clearly as this bank's own writing.

## Cross-bank overlap — RECORDED, folded by nobody

⚠️ **n1 through n25 are a one-for-one reprint of House chapter 12**, `pedhd-neuro-1` … `pedhd-neuro-26`,
at 0.75-1.000 stem similarity with **every key agreeing**. This is the largest chapter-shaped
endpoint/House overlap measured in this stream, and it is exactly the shape `MEMORY.md` warns about.

**Nothing is folded across banks, and no half touches `questions.peds.js`.** The two banks merge at
the end of the stream by ADDING a bank to `alsoIn`, never by deleting an entry. It is written down
here so the end-of-stream sweep finds it. Three further House hits sit outside that block: n40 ≈
`pedhd-devp-7` (keys differ), n41 ≈ `pedhd-devp-2`, n47 ≈ `pedhd-neuro-17` (keys differ).

Part 1 raised no fold-grade hit: its best scores are template matches in the 0.55-0.78 band across
`pedep-nut-27`, `pedep-mf3-43` and `pedep-mf3-75`, all of them "most common cause of X" shapes
against n28/n32/n34/n36. **Nothing folds across the part-1/part-2 boundary while both chats are
live**, so these are recorded and left alone.

## One defect repaired in the staging, so nobody re-copies it

Half D captured the book's printed question number into the stem on **all fifteen** of its entries —
`stem:'46. Brain death occurs after…'`. The other three halves stripped it, and **none of the 376
entries already live carries one**. The numbers were stripped from `part-D.js` and the section
re-merged (78350 → 78290 chars, 60 entries, `check-part-ep.js` OK). The array is now clean and
`stem` is byte-identical to it. If a half sees a leading `<N>. ` in its own staged text, that is the
finding — report it, do not quietly keep it.

## The split

| half | n | pages |
|---|---|---|
| A | 1-15 | 955-986 |
| B | 16-30 | 988-1016 |
| C | 31-45 | 1018-1047 |
| D | 46-60 | 1049-1077 |

Half A carries three of the four figures and the House-overlap block. Half C carries n34 and n41,
both folded, so it drafts **13**. Half D carries n47 and n59, both folded, so it drafts **13**.
Halves A and B draft 15 each. **15 + 15 + 13 + 13 = 56.**
