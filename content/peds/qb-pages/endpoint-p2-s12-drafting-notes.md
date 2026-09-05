# Section 12 — drafting notes

Binding for both section-12 drafting halves, alongside `pd-ep2-draft-brief.md` (the general rules)
and `endpoint-p2-s12-chapter-rulings.md` (the chapter authority, whose table is reproduced below).
Where this file and the staged array disagree, **the staged array wins** — it was read off the page
images; this file was written from the array, the sweep and the adjudication.

Section 12, **"Model Final Exam 1"**, pp.1270–1431 of `Pediatrics endpoint part2.pdf`. Staging is
`endpoint-p2-s12-mfe1.array.js` (`PEDEP2_S12_STAGED`, n 1..80, pp.1272–1430, `pr` equal to `n`
throughout, page = `1270 + 2n` on every entry). Ids are `pedep2-mf1-<n>`.

## ⚠️ 80 are staged and only 52 are drafted — the id run is deliberately gapped

**Twenty-eight of the eighty are reprints of questions already live in `questions.peds.ep2.js`.**
They were adjudicated page against page in `endpoint-p2-s12-fold-adjudication-A/B/C.md`, and
`tools/bank-harness/reprint-s12-pd-ep2.js` has already run `--write`: each of the twenty-eight live
entries now names p.1272… in its own `source`. **They must not be drafted.** The validator holds the
same list under `folded:` and hard-fails any half that writes one.

**Do not draft these `n`:**

```
1, 2, 5, 6, 8, 18, 19, 21, 22, 23, 26, 30, 31, 32, 34, 43, 45, 52, 53, 56, 57, 58, 60, 62, 66,
68, 72, 75
```

So `pedep2-mf1-1` and `-2` do not exist, the file opens at `pedep2-mf1-3`, and the id run has
twenty-eight holes in it. **That is correct and is not something to fix.** Part 1's own Model Final
Exam 1 ran 30 reprints of 80; this one runs 28.

## The two halves

| half | entries | `n` | pages | file |
|---|---|---|---|---|
| A | 26 | n3 … n41 | pp.1276–1352 | `endpoint-p2-s12-mfe1.draft-A.js` |
| B | 26 | n42 … n80 | pp.1354–1430 | `endpoint-p2-s12-mfe1.draft-B.js` |

Half A's twenty-six: 3, 4, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 24, 25, 27, 28, 29, 33, 35, 36,
37, 38, 39, 40, 41.
Half B's twenty-six: 42, 44, 46, 47, 48, 49, 50, 51, 54, 55, 59, 61, 63, 64, 65, 67, 69, 70, 71, 73,
74, 76, 77, 78, 79, 80.

## What was measured on the section, before drafting

Every figure below was counted off the staged array by an index walk, not estimated:

- **No figure anywhere in the section** — all eighty pages opened as images during staging, and not
  one staging row carries `fig`. **No entry takes `image` or `imgAlt`.** An `image` field here is a
  hard failure.
- **No staging row carries `box`** — no explanation overflows onto its own page. Every `source` is
  the plain shape `Pediatrics endpoint part2.pdf p.<staged p>` with no parenthetical tail.
- **No straddle.** Every question is printed whole on its answered page.
- **Fifty of the 52 print an explanation box; two do not** — see below.
- **Eleven of the 52 print four options**, the other forty-one print five: n11, n14, n16, n44, n46,
  n49, n65, n69, n74, n78, n80. (Across all eighty it is 14 and 66; the other three four-option
  questions are reprints.) `options` takes the staged `opts` verbatim either way.
- **No shared option menu inside the section** — `sweep-staged-ep2.js 12` reported zero. There is no
  anchor-and-sibling table to write here and no sibling id any entry is obliged to cite. Section
  11's shared-ladder machinery does not apply.

## ⚠️ n28 (p.1326) and n41 (p.1352) print NO explanation box

Both were confirmed genuine during staging rather than assumed: the page after each is the next
question's unanswered twin, not an overflow box. Their staged `expl` is `''`, and both take the
**unboxed** shape from §4b of the brief — no lead line, **no blockquote anywhere in the entry**, the
whole explanation authored, closing with this exact final line:

```
Written for this bank — Pediatrics endpoint part2.pdf prints no explanation here.
```

Em dash, and **never in `source`.** The other fifty take the boxed shape, closing with the curly
apostrophe marker `*The expansion above this line is written for this bank; the box itself is the
endpoint file’s own.*`

Both boxless entries fall in **half A**.

## ⚠️ Never write "half A", "half B", "draft-A" or "draft-B" inside an entry

`val-pd-ep2.js` line 367 carries a LEAK regex that hard-fails a draft containing any of those
strings, alongside `task prompt`, `per the prompt`, `as instructed`, `staging record`,
`the brief asks/says/requires` and `n:<num>`. It fires on the words themselves wherever they appear
in the file's entries, including in a provenance comment inside an explanation. Name a sibling by its
id in backticks and never by a split or a staging number.

## Chapters — per entry

Straight from the rulings file. **24 chapters across 52 entries** — a model exam is mixed by
construction, and a result that comes out mostly one chapter is a symptom, not a result.

| n | page | chapter | anchor |
|---|---|---|---|
| 3 | 1276 | `dev-problems` | `dp-5`, `dp-1` |
| 4 | 1278 | `resp-pneumonia` | `resp-5`, `resp-4` |
| 7 | 1284 | `cardiac` | `card-7`, `card-3` |
| 9 | 1288 | `neuro-nm` | `neuro-15`, `neuro-16` |
| 10 | 1290 | `normal-dev` | `nd-8`, `nd-6` |
| 11 | 1292 | `genetics` | `gen-3`, `gen-8`, `gen-1` |
| 12 | 1294 | **`liver`** (ruling 1) | `liv-8`, `liv-4`, `liv-7` |
| 13 | 1296 | `normal-dev` | `nd-6`, `nd-7` |
| 14 | 1298 | `normal-dev` | `nd-1` |
| 15 | 1300 | `respiratory` | `resp-12`, `resp-14` (ruling 3, gap) |
| 16 | 1302 | `genetics` | `gen-4`, `gen-7` |
| 17 | 1304 | `endo-dka` | `endo-13`, `endo-15` |
| 20 | 1310 | `renal-uti` | `ren-1` |
| 24 | 1318 | `genetics` | `gen-6`, `gen-10` |
| 25 | 1320 | `infection-rash` | `inf-31` |
| 27 | 1324 | `cardiac` | `card-3`, `card-4` |
| 28 | 1326 | **`normal-dev`** (ruling 1) | `nd-15`, `nd-8`, `nd-3` — **no box** |
| 29 | 1328 | `respiratory` | `resp-15` |
| 33 | 1336 | `respiratory` | `resp-16` |
| 35 | 1340 | `neurological` | `neuro-4` |
| 36 | 1342 | `endo-thyroid` | `endo-27`, `endo-26` |
| 37 | 1344 | `endocrine` | `endo-2`, `endo-1` |
| 38 | 1346 | `haematology` | `haem-12`, `haem-13`, `haem-8` |
| 39 | 1348 | `haematology` | `haem-8`, `haem-11` (ruling 4, gap) |
| 40 | 1350 | **`genetics`** (ruling 1) | `gen-16`, `gen-13` |
| 41 | 1352 | `normal-dev` | `nd-6`, `nd-8`, `nd-4` — **no box**, ruling 5 |
| 42 | 1354 | **`dev-problems`** (ruling 4) | `dp-8`, `nnj-10`, `dp-7` |
| 44 | 1358 | `neuro-cp` | `neuro-28`, `neuro-27` |
| 46 | 1362 | `resp-bronch` | `resp-21`, `resp-22` |
| 47 | 1364 | `infection-immunity` | `inf-48`, `inf-47` (ruling 4, gap) |
| 48 | 1366 | `neurological` | `neuro-8`, `neuro-10` |
| 49 | 1368 | `neurological` | `neuro-4` |
| 50 | 1370 | **`infection`** (ruling 2) | `inf-15`, `resp-14` |
| 51 | 1372 | **`infection`** (ruling 2) | `inf-15` |
| 54 | 1378 | `cardiac-acq` | `card-17` |
| 55 | 1380 | `cardiac` | `card-6`, `card-4` |
| 59 | 1388 | `malignant-solid` | `mal-19`, `mal-2` |
| 61 | 1392 | `haematology` | `haem-10`, `haem-19`, `haem-13` |
| 63 | 1396 | `haem-bleeding` | `haem-33`, `haem-34`, `haem-32` |
| 64 | 1398 | `neuro-cp` | `neuro-28` |
| 65 | 1400 | `haematology` | `haem-21`, `haem-23`, `haem-12` |
| 67 | 1404 | `resp-pneumonia` | `resp-8`, `resp-6` |
| 69 | 1408 | `genetics` | `gen-6` |
| 70 | 1410 | `cardiac` (ruling 7) | `card-3`, `card-4`, `card-18` |
| 71 | 1412 | `cardiac` (ruling 8) | `card-5`, `card-7` |
| 73 | 1416 | `cardiac` | `card-9`, `card-1` |
| 74 | 1418 | `cardiac-cyan` | `card-13`, `card-11` |
| 76 | 1422 | `malignant` | `mal-9`, `mal-10` |
| 77 | 1424 | `haematology` | `haem-11`, `haem-8` |
| 78 | 1426 | `infection` | `inf-3`, `inf-14` |
| 79 | 1428 | `neuro-cp` | `neuro-27` |
| 80 | 1430 | `neuro-cp` (ruling 9) | `neuro-28`, `per-15`, `nd-4` |

The anchors are theory section ids in `app\data\theory.peds.js` — `T_PEDS['<chapter>'].sections`,
an **object** keyed by chapter id. Read the section body before quoting it; the ids above were
matched on content, not on numbering, and section ids run continuously across sibling chapters so a
prefix grep gives a false zero.

## ⚠️ Five measured gaps — answer and tag, never declare

Per the standing rule and §8 of the brief: fill from general medical knowledge, carry
**`not taken from the course material`** as a short tag on the specific outside claim, lead with the
answer. Each gap below was established by grepping the concept, the abbreviation and the synonyms —
reproduce that reasoning in the tag rather than asserting a bare absence.

1. **n15 — the physical signs of an inhaled foreign body.** "foreign body" appears five times
   corpus-wide and not one describes the clinical picture (`resp-1` aspiration pneumonia, `resp-12`
   infant wheeze causes, `resp-14` asthma mimics, `acc-14` swallowed button batteries, `emg-6` the
   BLS airway algorithm). The fact the question turns on — an obstructing bronchial foreign body
   causes **air trapping**, pushing the mediastinum and apex **away** from the affected side, so an
   apex displaced to the right means a **left**-sided foreign body — is nowhere in the material.
2. **n39 — the molecular lesion in sickle cell disease.** Sickle cell appears in eleven sections but
   always as a disease with consequences (stroke, haematuria, painful crisis, the film in `haem-11`,
   the asplenic risk), never as a molecule. The valine-for-glutamate substitution at position 6 of
   β-globin is not taught. Note that the four distractors each name a mechanism the corpus **does**
   teach — enzyme deficiency = G6PD (`haem-8`), absent red cell precursors = red-cell aplasia
   (`haem-23`), membrane abnormality = spherocytosis (`haem-11`).
3. **n42 — what an Automated Otoacoustic Emission screen measures.** `dp-8` is the hearing-and-vision
   screening section and prints no hearing test at all. "otoacoustic" has exactly **one** corpus hit,
   `nnj-10`: a kernicteric child shows *a failed ABR with normal otoacoustic emissions — auditory
   neuropathy / dyssynchrony*. **That single line is a real source and it kills the hardest
   distractor** — OAE cannot test for auditory neuropathy precisely because it stays normal in it.
   Only the physical mechanism (a cochlear outer-hair-cell echo) is outside knowledge.
4. **n47 — hyper-IgE (Job) syndrome.** "hyper-IgE", "hyperimmunoglobulin" and "Job syndrome" all
   return **zero hits**; `inf-48`'s primary-immunodeficiency list does not include it. The question
   asks only for the **inheritance pattern** and the printed key is autosomal dominant, so `gen-14`
   supplies what dominant inheritance means and only the identification of the syndrome is tagged.
   ⚠️ The stem's "their second male child" reads like an X-linked pedigree and is a deliberate
   distractor — say why two affected males do not establish X-linkage.
5. **n61 — the clinical picture of thalassaemia major.** Added after drafting, on a finding from the
   half that drafted it and re-measured here against `T_PEDS`. "thalass" returns **five** hits and
   every one of them is a list item in a differential rather than a description of the disease:
   `haem-8` (haemoglobinopathies as a cause of haemolysis), `haem-10` (a microcytic column entry),
   `haem-19` (one of four microcytic mimics of iron deficiency), `inf-30` and `gen-15`. The signs the
   question turns on are absent under their own names as well — "chipmunk facies", "maxillary
   overgrowth" and "hair-on-end" return **zero hits** corpus-wide, "bossing" appears only in `nut-24`
   and `gp-10` (rickets, not marrow expansion), and "extramedullary" only in `inf-27` and `mal-12`,
   neither of them haematology. So frontal bossing, maxillary overgrowth and extramedullary
   haematopoiesis as the consequences of marrow expansion are outside knowledge and carry the tag;
   the inheritance and the microcytic film are sourced.

   ⚠️ This gap was not in the pre-drafting scan. The scan searched the concepts the staged stems
   name, and a disease the corpus mentions five times does not look like an absence until the
   mentions are read. **A hit count is not coverage** — the same trap `resp-12`/`resp-14` set for
   n15.

## ⚠️ n41 — a contradiction to RECORD, never correct

The printed key is **10 months** for the mature pincer grasp. The corpus gives the pincer grasp three
different ages: `nd-6` puts *"immature pincer grasp developing"* at 9–10 months, `nd-8`'s fine-motor
table puts *"Transfers objects; pincer grasp"* at 6–9 months with no immature/mature split, and
`nd-15` lists a plain "Pincer grasp (thumb and index)" among normal findings. Only `nd-6` makes the
distinction the key depends on.

**`answer` stays on the bank's printed key.** Quote `nd-6` and `nd-8` side by side and let them
stand. Do not adjudicate, do not correct, do not raise it with anyone. This entry is also boxless, so
the whole explanation is authored and closes with the unboxed marker.

## ⚠️ n80 — the stem contradicts its own arithmetic

The stem describes a child born at 26 weeks, now a 3-year-old, and then says "He is 10 months old".
**Transcribe it byte-identically as printed** — `stem` is compared with `JSON.stringify` — and note
the inconsistency inside `explanation` without repairing it. `per-15` (long-term impact of preterm
birth) is what makes spastic diplegia the preterm's characteristic CP; `nd-4` is where correcting for
prematurity is taught.

## Cross-file overlap — recorded, folded by nobody

`sweep-staged-ep2.js 12` put **13 hits against endpoint part 1** (`questions.peds.ep.js`) and
**27 against House** (`questions.peds.js`). Both files belong to other live chats.

**Nothing folds across banks or across the part-1/part-2 boundary while those chats are live.** Do
not add `alsoIn`, do not cite either book, do not open either file. These go to the end-of-stream
cross-bank sweep only. The twenty-eight *within-part-2* reprints are the only folds this section
has, and they are already done.

Two live entries are near neighbours of drafted questions and were checked and ruled **not**
reprints — do not cross-reference them either: `pedep2-neu-35` (the typical-febrile-seizure "EXCEPT"
question, adjacent to n35) and `pedep2-mal-23` (most common malignant tumour overall, adjacent to
n59).

## Other things measured before drafting

- pp.1270–1271 are the exam's title pages; the first question is on p.1272 (n1, a reprint).
- **p.1431 is a full-page image of a handwritten Arabic supplication** closing the section — not a
  question, not an overflow box. p.1432 opens Model Final Exam 2. There is no eighty-first question.
- Measured absences, so no half goes looking: **no nutrition question of any kind** (no faltering
  growth, feeding, PEM, rickets or vitamin deficiency) · **no gastroenterology** (no vomiting,
  reflux, diarrhoea, constipation or abdominal pain) · no growth, puberty, mental health, allergy,
  accidents, stroke or vaccination question · no glomerular or CAKUT question, `renal-uti` taking the
  only renal entry · **no OSCE content**. If a staged entry argues otherwise, that disagreement is
  the finding — report it rather than filing quietly.
