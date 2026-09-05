# Section 13 — drafting notes

Binding for both section-13 drafting halves, alongside `pd-ep2-draft-brief.md` (the general rules)
and `endpoint-p2-s13-chapter-rulings.md` (the chapter authority, whose table is reproduced below).
Where this file and the staged array disagree, **the staged array wins** — it was read off the page
images; this file was written from the array, the reprint map and the theory scan.

Section 13, **"Model Final Exam 2"**, pp.1434–1593 of `Pediatrics endpoint part2.pdf`. Staging is
`endpoint-p2-s13-mfe2.array.js` (`PEDEP2_S13_STAGED`, n 1..80, pp.1434–1593). Ids are
`pedep2-mf2-<n>`.

## ⚠️ The page arithmetic is not one formula — there is a parity flip at p.1531

```
n1 … n49    p = 1432 + 2n     pp.1434 … 1530   (even)
n50 … n80   p = 1433 + 2n     pp.1533 … 1593   (odd)
```

Verified against the array by walking all eighty entries: **zero deviations from those two
formulas.** p.1531 is the step of three, and it is **n49's explanation box**, adjudicated on the
image during staging — a bordered pale-green box in the same visual format as every other box in
the section, extending n49's Eisenmenger answer. It is not a teaching slide, and it is the only
`box` in the section.

**Do not compute a page.** Take `p` from the staged row.

## ⚠️ 80 are staged and only 51 are drafted — the id run is deliberately gapped

**Twenty-nine of the eighty are reprints of questions already live**, adjudicated page against page
and executed by `tools/bank-harness/reprint-s13-pd-ep2.js --write` on 2026-09-05: twenty-four
clauses landed on `pedep2-*` entries in `questions.peds.ep2.js`, five on `pedep-*` entries in
`questions.peds.ep.js`. **They must not be drafted.** `val-pd-ep2.js` holds the same list under
`folded:` for section 13 and hard-fails any half that writes one.

**Do not draft these `n`:**

```
4, 5, 7, 8, 13, 14, 15, 17, 18, 19, 22, 23, 24, 25, 27, 28, 37, 38, 41, 42, 61, 66, 70, 71, 76,
77, 78, 79, 80
```

So the file opens at `pedep2-mf2-1` and closes at `pedep2-mf2-75`; `pedep2-mf2-76` … `-80` do not
exist and the run has twenty-nine holes in it. **That is correct and is not something to fix.**

⚠️ **Part 1 is now a legitimate fold target and five of the twenty-nine landed there.** Both files
carry `bank:'endpoint'`, so a part-1/part-2 match is a **within-bank** reprint. It is *not* the
House shape: **it never takes `alsoIn`.**

## The two halves

| half | entries | `n` | pages | file |
|---|---|---|---|---|
| A | 26 | n1 … n46 | pp.1434–1524 | `endpoint-p2-s13-mfe2.draft-A.js` |
| B | 25 | n47 … n75 | pp.1526–1583 | `endpoint-p2-s13-mfe2.draft-B.js` |

A's twenty-six: 1, 2, 3, 6, 9, 10, 11, 12, 16, 20, 21, 26, 29, 30, 31, 32, 33, 34, 35, 36, 39, 40,
43, 44, 45, 46.
B's twenty-five: 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 62, 63, 64, 65, 67, 68,
69, 72, 73, 74, 75.

## What was measured on the section, before drafting

Every figure below was counted off the staged array by an index walk, not estimated:

- **No figure anywhere in the section** — all eighty pages were opened as images during staging and
  not one staging row carries `fig`. **No entry takes `image` or `imgAlt`.** An `image` field here
  is a hard failure.
- **One `box`, on n49 → p.1531.** Every other `source` is the plain shape
  `Pediatrics endpoint part2.pdf p.<staged p>` with no parenthetical tail. n49's reads
  `Pediatrics endpoint part2.pdf p.1530 (the explanation box is printed alone on p.1531)`.
- **No straddle.** Every question is printed whole on its answered page.
- **Forty-nine of the 51 print an explanation box; two do not** — n30 and n51, see below.
- **Eighteen of the 51 print four options**, the other thirty-three print five: n10, n11, n12, n29,
  n30, n43, n49, n50, n51, n53, n54, n56, n60, n63, n65, n72, n73, n74. (Across all eighty it is 23
  and 57.) `options` takes the staged `opts` verbatim either way.
- **No shared option menu inside the section.** n78, n79 and n80 run three consecutive
  developmental-milestone vignettes and were checked during staging: n80's ladder is a different
  set of ages, so they are not one menu family — and all three are reprints anyway. There is no
  anchor-and-sibling table to write here and no sibling id any entry is obliged to cite.

## ⚠️ n30 (p.1492) and n51 (p.1535) print NO explanation box

Both were confirmed genuine during staging rather than assumed: the page after each was opened and
is the next question's unanswered twin, not an overflow box. Their staged `expl` is `''`, and both
take the **unboxed** shape from §4b of the brief — no lead line, **no blockquote anywhere in the
entry**, the whole explanation authored, closing with this exact final line:

```
Written for this bank — Pediatrics endpoint part2.pdf prints no explanation here.
```

Em dash, and **never in `source`.** The other forty-nine take the boxed shape, closing with the
curly-apostrophe marker `*The expansion above this line is written for this bank; the box itself is
the endpoint file’s own.*`

**n30 falls in the first half, n51 in the second** — one each.

## ⚠️ Never write "half A", "half B", "draft-A" or "draft-B" inside an entry

`val-pd-ep2.js` carries a LEAK regex that hard-fails a draft containing any of those strings,
alongside `task prompt`, `per the prompt`, `as instructed`, `staging record`,
`the brief asks/says/requires/wants/calls`, `brief's rule` and `n:<num>`. It fires on the words
themselves wherever they appear in the file's entries, including inside an explanation. Name a
sibling by its id in backticks and never by a split or a staging number.

## ⚠️ Two defects to RECORD, never correct

**n54 and n55 share a printed number.** The answered page p.1541 prints "55." as its question
number, but that question's own unanswered twin on p.1540 prints "54." — the book disagrees with
itself between two printings of one question. The printed number 55 is then used again for the
genuinely different question at p.1543. The array stages `n:54, pr:55` for the first and
`n:55, pr:55` for the second; **`n` is the section-global sequential index and does not move.**
Say what the book printed inside `explanation`; do not adjudicate it and do not raise it with
anyone. Part 1 section 1 printed 69 and 81 twice in the same way.

**n64 prints no units.** The five options read `Hemoglobin (10), MCV (70), reticulocyte (10%)` and
so on — no g/dL, no fL anywhere in the question, on either printing. All fifteen numerals were
re-read on a 300 dpi render during staging and are exact. **Transcribe byte-identically** — `stem`
and `options` are compared with `JSON.stringify` — and supply the units in `explanation` as your
own reading, not as a repair. The reticulocyte figures do carry `%`; only Hb and MCV are bare.

## Chapters — per entry

Straight from `endpoint-p2-s13-chapter-rulings.md`. **24 chapters across 51 entries** — a model exam
is mixed by construction, and a result that comes out mostly one chapter is a symptom, not a result.
Read that file for *why* each ruling was made; four of them were set against the obvious topic name
by measuring the live corpus, and a fifth (n52) by measuring the theory.

The **anchor** column names sections of `app\data\theory.peds.js` to read before writing. Every one
of the 79 ids below was verified live on 2026-09-05.

⚠️ **`T_PEDS[<chapter>].sections` is an ARRAY, not an object**, and each section's human-readable
heading is **`h`**, not `title`. (Section 12's drafting notes say "an object keyed by chapter id" —
that is wrong about the sections list; do not copy it forward.) Section ids run continuously across
sibling chapters, so a prefix grep gives a false zero. **An anchor may sit in a different chapter
from the entry** — that is normal and several below do.

### First half

| n | p. | chapter | anchors |
|---|---|---|---|
| 1 | 1434 | `normal-dev` | `nd-5`, `nd-6`, `nd-7` |
| 2 | 1436 | `renal` | `ren-8`, `ren-6`, `ren-7` |
| 3 | 1438 | `neuro-nm` | `neuro-20`, `neuro-18` |
| 6 | 1444 | `neuro-cp` | `neuro-28`, `neuro-27` |
| 9 | 1450 | `haematology` | `haem-8`, `haem-12`, `nnj-6` |
| 10 | 1452 | `haematology` | `haem-8`, `haem-11`, `nnj-6` — **gap, see below** |
| 11 | 1454 | `renal` | `ren-13` |
| 12 | 1456 | `neurological` | `inf-22`, `per-10`, `inf-11` |
| 16 | 1464 | `haematology` | `inf-3` — **partial, see below** |
| 20 | 1472 | `renal-cakut` | `ren-17` |
| 21 | 1474 | `genetics` | `gen-14` (names achondroplasia in the dominant table), `gp-5` |
| 26 | 1484 | `endocrine` | `endo-3`, `endo-4`, `emg-13` — **partial, see below** |
| 29 | 1490 | `neurological` | `mal-20`, `gp-7`, `neuro-1` — **partial, see below** |
| 30 | 1492 | `resp-pneumonia` | `resp-3`, `resp-7` — **partial, see below. Boxless** |
| 31 | 1494 | `gastroenterology` | `gast-3` |
| 32 | 1496 | `infection` | `inf-15`, `inf-2` |
| 33 | 1498 | `neurological` | `neuro-4`, `neuro-5` |
| 34 | 1500 | `endo-thyroid` | `endo-33` — ⚠️ that section carries its **own** gap tag |
| 35 | 1502 | `emergencies` | `card-10` (cyclical cyanosis, bilateral choanal atresia), `prd-3` |
| 36 | 1504 | `haem-bleeding` | `haem-36`, `haem-31`, `ren-11` |
| 39 | 1510 | `cardiac` | `card-9`, `card-8`, `card-1`, `card-2` |
| 40 | 1512 | `resp-bronch` | `inf-15` (the Hib line against croup), `inf-2` |
| 43 | 1518 | `dev-problems` | `dp-9`, `dp-11`, `nd-15` — ⚠️ chapter tension, see below |
| 44 | 1520 | `haem-bleeding` | `haem-44`, `haem-29`, `haem-30` |
| 45 | 1522 | `renal` | `ren-13` |
| 46 | 1524 | `dev-problems` | `dp-9`, `dp-11`, `dp-12`, `gen-18` (fragile X and autism — the fifth option) |

### Second half

| n | p. | chapter | anchors |
|---|---|---|---|
| 47 | 1526 | `malignant-solid` | `mal-19`, `mal-20` — ⚠️ `mal-20`'s medulloblastoma paragraph carries its own gap tag |
| 48 | 1528 | `cardiac-acq` | `card-18` |
| 49 | 1530 (box 1531) | `cardiac` | `card-5`, `card-7` |
| 50 | 1533 | `neonatal-sepsis` | `nsp-2`, `nsp-3`, `nsp-4`, `resp-3` |
| 51 | 1535 | `resp-bronch` | `resp-22`, `resp-21` — **Boxless** |
| 52 | 1537 | `respiratory` | `resp-14` (the "these are not asthma" red-flag table, the corpus's only PCD) |
| 53 | 1539 | `neuro-nm` | `neuro-21`, `neuro-22` |
| 54 | 1541 | `haematology` | `haem-8`, `nnj-6`, `gen-16` — **gap, see below. `pr` is 55** |
| 55 | 1543 | `renal` | `ren-8`, `ren-6` |
| 56 | 1545 | `haematology` | `haem-3`, `haem-8` — **gap, see below** |
| 57 | 1547 | `haem-bleeding` | `haem-37`, `haem-29`, `haem-42` |
| 58 | 1549 | `haem-bleeding` | `haem-36`, `ren-11` |
| 59 | 1551 | `haem-bleeding` | `haem-43`, `haem-44`, `haem-30` |
| 60 | 1553 | `haem-bleeding` | `haem-43`, `haem-44` — pairs with n59 |
| 62 | 1557 | `haem-bleeding` | `haem-35`, `haem-34`, `haem-33` |
| 63 | 1559 | `haematology` | `haem-8`, `haem-11`, `haem-35`, `inf-3` — **gap, see below** |
| 64 | 1561 | `haematology` | `haem-18`, `haem-10`, `haem-12`, `haem-19` |
| 65 | 1563 | `renal` | `ren-12` |
| 67 | 1567 | `respiratory` | `resp-15`, `resp-9`, `resp-12` |
| 68 | 1569 | `respiratory` | `resp-15`, `resp-9` |
| 69 | 1571 | `malignant` | `mal-12` (intrathecal methotrexate to EVERY patient), `mal-11`, `mal-7` |
| 72 | 1577 | `cardiac-cyan` | `card-13`, `card-12` |
| 73 | 1579 | `infection` | `inf-8` (prints the Kernig manoeuvre), `inf-2` |
| 74 | 1581 | `neuro-cp` | `neuro-28`, `per-10` |
| 75 | 1583 | `genetics` | `gen-16`, `gen-13` |

## ⚠️ Four measured gaps — answer and tag, never declare

Per the standing rule and §8 of the brief: fill from general medical knowledge, carry
**`not taken from the course material`** as a short tag on the specific outside claim, lead with the
answer. Each was established by grepping the concept, the abbreviation and the synonyms —
reproduce that reasoning in the tag rather than asserting a bare absence.

1. **n10 — the osmotic fragility test.** "osmotic fragility" returns **zero** corpus-wide; the five
   `osmotic` hits are osmotic *diarrhoea* (`gast-6`, `gast-12`, `gast-15`) and osmotic *diuresis*
   (`endo-2`, `endo-10`). Hereditary spherocytosis itself **is** taught — `haem-8` files it as the
   commonest membrane defect, `haem-11` gives the spherocyte on the film, and `nnj-6` adds the
   splenomegaly and that the diagnosis is *suspected on the smear and the family history*. So the
   disease is sourced and **only the named test carries the tag.** ⚠️ `nnj-6`'s "suspected on the
   peripheral blood smear" sits close to distractor B (CBC) — say why a film that *suggests* is not
   a test that is *diagnostic*.
2. **n56 — haemoglobin electrophoresis.** "electrophoresis" returns **zero** corpus-wide. Sickle
   cell appears eleven times but always as a disease with consequences (`card-16`, `ren-7`, `ren-8`,
   `gast-16`, `gast-18`), never with a diagnostic test. `haem-3` (haemoglobin types and the switch)
   is the nearest teaching and is what makes electrophoresis mean anything; the test itself is
   tagged. Note that this question and n10 are **mirror images** — each is the other's distractor —
   and both tests are outside the material. Cross-reference them.
3. **n54 — the drugs that trigger haemolysis in G6PD deficiency.** G6PD itself is well sourced:
   `haem-8` ranks it the commonest enzyme defect causing haemolysis, `nnj-6` gives the African /
   Mediterranean / Asian descent, the X-linked inheritance with affected female heterozygotes and
   the reticulocyte testing trap, and `gen-16` lists it among X-linked recessive disorders. **The
   trigger list is not taught at all** — "sulfonamide" has one corpus hit and it is `haem-22`, drugs
   causing aplastic anaemia; "primaquine", "fava", "naphthalene" and "oxidant" (in this sense)
   return nothing. So the sulfonamide answer and the oxidant-stress mechanism carry the tag, while
   the ethnicity, the dark urine and the enzyme defect are sourced.
4. **n63 — splenectomy in hereditary spherocytosis.** The management of HS is nowhere: "splenectomy"
   has three hits and not one is HS — `haem-35` (last-line ITP, delay ≥12 months), `haem-11`
   (the post-splenectomy film), `inf-3` (asplenia and encapsulated organisms). ⚠️ **`haem-35` is a
   trap here, not a source** — it makes ITP look like the splenectomy disease, and ITP is not among
   this question's four options. The tag goes on "splenectomy is the definitive treatment in HS";
   `haem-8` and `haem-11` source the extravascular, spleen-mediated destruction that explains why.

## ⚠️ Three partials — the concept is sourced, the specific claim is not

Not gaps. Lead with the sourced part, tag only the sentence that leaves the material.

- **n16 — malaria as a cause of splenomegaly.** `inf-3` **does** make the link the vignette turns
  on: *"Recent travel abroad: e.g. malaria"* under the risk factors for a febrile child. But malaria
  is taught nowhere as a disease — its other two hits are a mortality comparison (`resp-1`) and a
  secondary cause of nephrotic syndrome (`ren-13`). Travel + pallor + splenomegaly is sourced; the
  parasitised-red-cell mechanism of the big spleen is tagged. The distractors are all sourced —
  ALL (`mal-5`, `mal-6`), sickle cell (`haem-8`), Wilms (`mal-22`).
- **n30 — azithromycin.** Atypical pneumonia is well covered: `resp-1` names the atypical organisms,
  `resp-3` is the age-is-the-pathogen table, `resp-5` gives the organism pictures, and **`resp-7`
  names erythromycin** for suspected chlamydia. The macrolide class is therefore sourced and only
  azithromycin as the named agent is tagged. ⚠️ This entry is **boxless**, so the whole explanation
  is authored — explain all four options against `resp-7`'s empiric table.
- **n29 — the red-flag features of headache.** There is no headache section in the corpus and no
  red-flag headache list. What exists: `mal-20` prints *morning headache and vomiting from
  obstructive hydrocephalus*, `gp-7` sends a child with headache or neurological signs for an MRI to
  exclude an intracranial tumour, and `neuro-1` gives the thunderclap headache of subarachnoid
  haemorrhage. Together they source *headache can mean raised intracranial pressure or a tumour*;
  the specific claim that recumbency worsens it — the printed key — is tagged. ⚠️ Three of the four
  options (trauma, visual impairment) are red flags in ordinary practice too; the entry must say
  the key is the one the bank chose, and record the printed key as printed.

## ⚠️ Three anchors that carry their own gap tags — do not double-source them

The theory file marks its own outside knowledge, and three anchors this section leans on are marked:

- **`endo-33` (n34, congenital adrenal hyperplasia)** opens with *"The gap: CAH is named as a cause
  in three paediatric decks and taught in none."* Everything `endo-33` says about CAH is therefore
  already outside the material. Cite it as the project's own write-up, not as the course teaching,
  and keep the tag on the salt-losing crisis and the 17α-hydroxyprogesterone.
- **`mal-20` (n47, brain tumours)** tags its medulloblastoma paragraph *"(the detail not taken from
  the course material)"*. `mal-19` — brain tumours are the commonest **solid** tumour of childhood,
  mostly infratentorial — is genuine course content and is what n47 actually turns on. Take the
  answer from `mal-19` and treat `mal-20`'s medulloblastoma detail as tagged.
- **`ren-12` (n65, haemolytic uraemic syndrome)** opens with *"**⚠️ NOT DESCRIBED IN ANY PAEDIATRIC
  DECK** — L39 names HUS only in the cause tree and as a cause of **haemoglobinuria**, the diarrhoea
  deck only as a stool-culture indication."* and states outright that everything below it is supplied
  from general medical knowledge and tagged. Cite `ren-12` as the anchor — it is where the course
  material stops and the project's own write-up starts — and carry the tag onto the HUS triad itself
  (microangiopathic haemolytic anaemia, thrombocytopenia, acute kidney injury), not merely onto a
  detail of it. **This bullet was missing when the halves were drafted**; half B resolved n65 the
  right way regardless and the omission was found reading the file back.

## ⚠️ n43 and n46 — a chapter tension to record, not to resolve

Both are chaptered **`dev-problems`**, following the seven live autism entries in
`questions.peds.ep2.js`, which are all `dev-problems`. But the *teaching* is in **`dev-nd`**: `dp-9`
through `dp-12` are four consecutive sections on autism spectrum disorder — what it is, the DSM-5
counting rule, the clinical picture and the 6–12-month early signs, the comorbidities and screening
— and `dev-nd` holds only 5 questions, all House.

**Draft them as `dev-problems` and anchor them in `dev-nd`.** Splitting two entries away from their
seven neighbours would help nobody, and re-chaptering nine entries is a corpus-wide decision, not a
section-13 drafting decision. It is recorded here and goes to the end-of-stream sweep. `nd-15` also
prints the referral red flags the vignettes describe: *no response to name by 12 months · no
pointing by 18 months · no joint attention · no pretend play · poor eye contact*.

n43 and n46 are **near-identical questions inside this one section** — same four-year-old picture,
same key, n46 adding a fifth option (Fragile X) and a nursery referral. They were adjudicated during
staging and are **not** a fold. Each must explain its own option set; n46's fifth option is answered
from `gen-18`, which gives fragile X's long face, large ears and macroorchidism with autism.

## Not a drafting job — four amendments I make directly

These are edits to entries that **already exist**. No drafting half writes them and no drafted entry
should assume they have happened.

- ⚠️ **`pedep2-car-12` (from n19, p.1470) contains a paragraph that is now false.** Its explanation
  asserts the page prints only four options and no fifth distractor; p.1470 prints a fifth,
  *Mitral regurgitation*. The paragraph must be **amended**, not left standing behind the new
  citation the reprint pass wrote.
- **`pedep2-gen-28` (from n70), `pedep2-nd-5` (n79) and `pedep2-nd-6` (n80)** each have a printed
  box carrying substance the live explanation lacks — "all of the above are causes of short
  stature"; two-to-three words at one year; the nursery/siblings caveat. **Fold the substance in; a
  citation alone loses it.**

## Cross-file overlap — recorded, folded by nobody

The eighteen House matches in the reprint map (`questions.peds.js`) do **not** fold. Do not add
`alsoIn`, do not cite House, do not open that file. They go to the end-of-stream cross-bank sweep.

⚠️ **n46 (p.1524) is the sharpest of them** — `pedhd-devp-18`, similarity 1.000. It is a
cross-**bank** match, so it is drafted normally and the sweep decides what House gets.

Two live entries are near neighbours of drafted questions and were ruled **not** reprints — do not
cross-reference them either: `pedep2-neu-35` and `pedep2-mal-23` (the latter is n15's target, and
n15 is a reprint, not a drafted entry).

## ⚠️ A page number in this section may mean the other book

**Both books print a section called "Model Final Exam 2."** Part 1's is at part1.pdf pp.1361–1425,
and **33 live part-1 sources already carry the clause "reprinted in Model Final Exam 2, p.NNNN"**
meaning part1.pdf. Part 1's own such clauses cite pp.1330, 1372, 1416, 1468 and 1481 — and p.1468 is
also a real page of *this* section, holding a different question entirely.

Consequence for drafting: **never search either live file for a bare page number or a bare exam name
to check whether something is already cited.** `pedep-inf-73` in part 1 already reads
`… (reprinted in Model Final Exam 2, p.1468, …)` and means part1.pdf. On a part-2 entry the base
citation names part2.pdf, so the bare form is correct there; on a part-1 entry the clause must name
the file.

## Other things measured before drafting

- pp.1432–1433 open the exam; the first question is on p.1434 (n1, drafted). p.1594 opens section 14.
  There is no eighty-first question.
- `pr === n` on 79 of the 80. The one exception is **n54, staged `pr:55`** — see the defects above.
- Every staged `key` is a valid 0-based index into its own `opts`; zero out of range across all 80.
- Measured absences, so no half goes looking: **no nutrition question of any kind** · **no
  vaccination, allergy, accident or mental-health question** · no stroke, no liver, no
  gastro-diarrhoea question among the drafted 51 (`gastroenterology` takes one, pyloric stenosis) ·
  **no OSCE content.** If a staged entry argues otherwise, that disagreement is the finding — report
  it rather than filing quietly.
