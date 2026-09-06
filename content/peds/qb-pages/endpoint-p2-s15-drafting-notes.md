# Section 15 — drafting notes

Binding for the section-15 drafting pass, alongside `pd-ep2-draft-brief.md` (the general rules) and
`endpoint-p2-s15-chapter-rulings.md` (the chapter authority, whose table is reproduced below). Where
this file and the staged array disagree, **the staged array wins** — it was read off the page images;
this file was written from the array, the two reprint passes and a fresh scan of `theory.peds.js`.

Section 15, **"Model Final Exam 4"**, pp.1757–1921 of `Pediatrics endpoint part2.pdf`. Staging is
`endpoint-p2-s15-mfe4.array.js` (`PEDEP2_S15_STAGED`, n 1..80, pp.1759–1921). Ids are
`pedep2-mf4-<n>`; **no `pedep2-mf4-*` id exists in the live file yet**, so the whole run is new.

## The page arithmetic is NOT one formula — four boxes shift it

Section 14 had a single clean formula. Section 15 does not, and the difference is the four
explanation boxes that overflow onto a page of their own.

```
p = 1757 + 2n + (number of box rows before n)

box rows: n16 (box p.1790) · n31 (p.1821) · n34 (p.1828) · n52 (p.1865)

n1 … n16    p = 1757 + 2n       pp.1759 … 1789
n17 … n31   p = 1757 + 2n + 1   pp.1792 … 1820
n32 … n34   p = 1757 + 2n + 2   pp.1823 … 1827
n35 … n52   p = 1757 + 2n + 3   pp.1830 … 1864
n53 … n80   p = 1757 + 2n + 4   pp.1867 … 1921
```

Verified by walking all eighty rows: the page step is +2 everywhere except after each box row, where
it is +3. Zero other deviations.

**None of the four box rows is drafted.** n16, n31, n34 and n52 are all reprints, so **no drafted
entry in this section carries a `box` field**, and the whole overflow question is arithmetic only.

**Do not compute a page anyway.** Take `p` from the staged row. The formula is recorded so that a
mismatch is visible, not so that it can be used as a source.

## ⚠️ 80 are staged and only 9 are drafted — the id run is deliberately gapped

**Seventy of the eighty are reprints of questions already live**, and **one more (n75) is a
within-section fold into n67**. That leaves nine. It is the highest reprint ratio this stream has
produced, higher than section 14's fifty-three.

The seventy were executed by two passes, both already run with `--write`:
`tools/bank-harness/reprint-s15-pd-ep2.js` (63) and `tools/bank-harness/reprint-s15-late-pd-ep2.js`
(7). Fifty-six clauses landed on `pedep2-*` entries in `questions.peds.ep2.js`, fourteen on `pedep-*`
entries in `questions.peds.ep.js`. **They must not be drafted.** `val-pd-ep2.js` holds all seventy
plus n75 under `folded:` for section 15 — seventy-one entries — and hard-fails a draft that writes
one.

**Do not draft these `n`:**

```
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 22, 23, 24, 26, 27, 28, 29,
30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 68, 69, 70, 72, 74, 75, 76, 77, 78, 79, 80
```

**Draft exactly these nine:** `n15, n21, n25, n36, n44, n56, n67, n71, n73`.

So the file opens at `pedep2-mf4-15` and closes at `pedep2-mf4-73`; `pedep2-mf4-1` does not exist,
neither does `pedep2-mf4-80`, and the run has seventy-one holes in it. **That is correct and is not
something to fix.**

⚠️ **Seven of the seventy were added after the fold adjudication had closed, and all seven had been
ruled NOT A REPRINT by hand.** n1, n3, n19, n34, n69, n79 and n80. The rule that produced, and it
binds every later section: **a hand ruling made against a stem-ranked candidate list inherits that
list's blind spot, and for a one-line recall question the key text is the right probe, not the stem.**
The full write-up is `endpoint-p2-s15-late-reprint-rulings.md`. Two of the seven —
n1 → `pedep-emg-18` and n19 → `pedep-inf-72` — landed in part 1; a part-1/part-2 match is a
**within-bank** reprint because both files carry `bank:'endpoint'`, and it **never takes `alsoIn`**.

## One drafting pass, not two

| entries | `n` | pages | file |
|---|---|---|---|
| 9 | n15 … n73 | pp.1787–1907 | `endpoint-p2-s15-mfe4.draft.js` |

Nine entries is **one drafting pass**. There is no split, no `part-A/part-B`, no cross-comparison run
and **no `xhalf.js`**. `merge-parts-ep.js` is not invoked either.

The nine are lopsided in character: four are vignettes (n15, n21, n36, n56) and five are one-line
recall (n25, n44, n67, n71, n73). Do not let that flatten the five — a one-line stem still gets every
distractor explained, and three of the five carry the section's most interesting divergences.

## What was measured on the section, before drafting

Every figure below was counted off the staged array by an index walk, not estimated:

- **No figure anywhere in the section.** Not one staging row carries `fig` or `figAlt`. **No entry
  takes `image` or `imgAlt`.** An `image` field here is a hard failure.
- **No `straddle` field on any of the eighty rows**, and the only `box` fields are the four listed
  above, none of them drafted. Every `source` on a drafted entry is the plain shape
  `Pediatrics endpoint part2.pdf p.<staged p>` with no parenthetical tail.
- **All nine print an explanation box.** `expl` is non-empty on all eighty rows, and on the nine it
  runs **13 to 37 words** — n73 is the shortest at 13, n21 the longest at 37. **No entry in this
  section takes the "Written for this bank" marker**; that shape does not occur here at all. Every
  one of the nine takes the **boxed** shape.
- **Every one of the nine prints five options.** Eight of the eighty print four (all reprints), so
  **no four-option row survives into the drafted nine** and there is nothing to leave short.
  `options` takes the staged `opts` verbatim.
- **Every staged `key` is a valid 0-based index into its own `opts`** — zero out of range across all
  eighty.
- **No literal backtick in any staged `stem`, `opts` entry or `expl`** across all eighty rows, so
  nothing transcribed can open an unclosed code span. The parity check still runs on what you write.
- **The keys of the nine sit at index 2, 2, 2, 0, 4, 4, 3, 3, 3** (n15, n21, n25, n36, n44, n56, n67,
  n71, n73 in order). No key is at index 1, which is a coincidence and not a rule — take each from
  the staged row.

## The boxed shape, and the marker every one of the nine closes with

All nine quote their printed box and then close with the curly-apostrophe marker:

```
*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*
```

The box is captured verbatim and unmarked; the expansion above it is yours. The thirteen-word box on
n73 leaves the most to write; n21's thirty-seven-word box leaves the least. **Box length is not a
budget** — the adaptive-depth rule still applies, and n36's vignette earns more than n73's one-liner
regardless of what the book printed beside each.

## ⚠️ Never write "half A", "half B", "draft-A" or "draft-B" inside an entry

`val-pd-ep2.js` carries a LEAK regex that hard-fails a draft containing any of those strings,
alongside `task prompt`, `per the prompt`, `as instructed`, `staging record`,
`the brief asks/says/requires/wants/calls` and `brief's rule`. A second check hard-fails the staging
notation `n:<num>`. Both fire wherever the words appear in the file's entries, **including inside an
explanation**. Name a sibling by its id in backticks and never by a split or a staging number.

There is only one pass here, so the split words have no honest use at all in this section.

## ⚠️ Six defects to RECORD, never correct

The first four are the book's printing. The fifth is in the book's own explanation box. The sixth is
already live in the bank and is not this section's to repair.

**1. n25 prints two different ages for the same fact.** Option C prints **"16 months"**; the
explanation box prints **"Not using single words at 15 months."** Both confirmed legible at 300 dpi.
The key stays as printed — option C, index 2, the highlighted answer — and the discrepancy goes in
the explanation.

**2. ⚠️ n25's three remaining distractors are also not developmental concerns, measured against the
course's own limit-age table.** This is larger than the 15/16-month slip and it must be handled, not
skirted. `nd-5` gives *fixes and follows visually* a limit age of **3 months**, *sits unsupported*
**9 months**, *walks independently* **18 months**. So:

| n25 option | the bank implies | `nd-5` limit age | inside the limit? |
|---|---|---|---|
| Not visually fixing at 5 weeks | a concern | 3 months | yes — not a concern |
| Not sitting unsupported at 7 months | a concern | 9 months | yes — not a concern |
| **Not using single words at 16 months (KEY)** | **not a concern** | 18 months for *6 words with meaning* | yes — agrees with the key |
| Not walking at 17 months | a concern | 18 months | yes — not a concern |
| Not copying a line at 24 months | a concern | not in the table at all | unmeasurable |

The bank is keying against **average ages**, not limit ages, and its own box says so — *"Single
words, e.g. mama and dada, should be heard by about 12 months of age"*, which is exactly `nd-6`'s
12-month cell (**1–2 meaningful words**). **Answer the question as keyed, then say plainly what
`nd-5` prints and that a limit age and an average age are two different instruments.** That is what
makes this entry worth its place. **Do not dispute the key and do not raise it with anyone.**

**3. n36 prints "37."** though it is n36 in section order: the printed sequence runs 35, then 37, and
skips 36 entirely. `pr: 37`, `n: 36`. The offset then holds for twenty-nine rows — **n36 through n64
all print `n + 1`** — which is why **n44 prints as 45 and n56 prints as 57**. Record `pr`, keep `n`
sequential.

**4. ⚠️ The printed number 65 appears twice and the sequence resyncs there.** n64 prints 65 and n65
prints 65 again; from n65 onward `pr === n` for the rest of the section, so **n67, n71 and n73 print
their own numbers**. Neither of the two rows involved is drafted, but the resync is what makes n67's
`pr: 67` correct rather than a transcription slip — recorded so that nobody re-derives it.

**5. ⚠️ n21's printed box names the wrong acid-base disturbance.** The box reads *"In view of her
respiratory status and metabolic acidosis, CPAP is the next most effective step."* The gas printed in
the stem is **pH 7.30 with pCO₂ 7.8 kPa** — a raised CO₂ with a low pH, which is a **respiratory**
acidosis. Capture the box verbatim and unmarked, as always, and correct the classification in the
expansion above it, citing the stem's own numbers. ⚠️ **The vocabulary needed to say this is not in
the material** — see the gap list below. The key does not move: CPAP is right either way, and
`resp-22` prints the CPAP criteria this child meets.

**6. ⚠️ A live defect to work around, not to fix here:** `pedep2-res-14` prints **"Bronchiolitis"
twice**, at option index 0 (the key) and again at index 3. Verified on disk. n15, n21 and n73 all
cite the bronchiolitis corpus and will meet it. Per project rule it is recorded and never silently
corrected; it does not belong to this section and no drafted entry should mention the duplication.

**Cosmetic faults are transcribed silently** and two of them are on drafted rows, so unlike section
14 this pass does meet them: **n67's stem prints `"square.What"`** with no space, and **n25's box
prints `"12monthsofage"`** with the spaces closed up. **n56 prints `SaO2` with a plain non-subscript
digit** and it is transcribed as printed, ASCII. n44's stem carries hard line breaks after
*"bedwetting."* and *"is normal."* — reflow them.

## Chapters — per entry

Straight from `endpoint-p2-s15-chapter-rulings.md`. **Six chapters across nine entries**, and six of
the nine are respiratory or developmental. Read that file for *why* each ruling was made; every one
was set by measuring where the live corpus already puts the topic, and n36's carried ruling was
re-grounded there.

The **anchor** column names sections of `app\data\theory.peds.js` to read before writing. Every id
below was verified live on 2026-09-06 against a loaded `T_PEDS` (51 chapters, 518 sections).

⚠️ **`T_PEDS[<chapter>].sections` is an ARRAY, not an object**, and each section's human-readable
heading is **`h`**, not `title`. Section ids run continuously across sibling chapters, so a prefix
grep gives a false zero. **An anchor may sit in a different chapter from the entry** — n36's principal
anchor is in `emergencies`, and that is normal.

| n | p | chapter | anchors |
|---|---|---|---|
| 15 | 1787 | `resp-bronch` | `resp-22` (the nine admission indications, *poor feeding* among them; **oxygen only when SpO₂ in room air is < 92 %**; NG feeding capped at 80 % of daily requirement), `resp-21`, `resp-20` |
| 21 | 1800 | `resp-bronch` | `resp-22` (**CPAP and PICU: severe respiratory distress · FiO₂ > 0.5 · apnoea**; PICU: failure to hold SpO₂ > 92 % *on* oxygen, deterioration with exhaustion), `emg-3` (respiratory failure — hypercarbia and hypoxia, four mechanisms) |
| 25 | 1808 | `normal-dev` | `nd-5` (the limit ages, all four fields), `nd-6` (the milestone spine — **12 months: 1–2 meaningful words**), `nd-15` (red flags; the limit age *is* the age-specific red flag) |
| 36 | 1832 | `endo-thyroid` | `emg-16` (⚠️ **the only SIADH line in the corpus** — *"Risk of SIADH — for example pneumonia: give two thirds of standard maintenance"*), `endo-33` (CAH — ⚠️ **carries its own gap tag**), `gast-8` (isotonic, hypertonic and hypotonic dehydration) |
| 44 | 1848 | `renal-cakut` | `ren-17` (⚠️ **self-tagged: not written as a topic in any deck**; primary vs secondary enuresis, and the endocrine decks it borrows from), `ren-1` (UTI — the distractor) |
| 56 | 1873 | `respiratory` | `resp-12` (**Foreign body aspiration**, named in the three-patterns wheeze differential), `acc-3` (choking — why toddlers, small airway, food the commonest cause), `acc-4` (the choking algorithm), `emg-6` (BLS — the airway by age) |
| 67 | 1895 | `normal-dev` | `nd-6` (**3 years copies circle · 4 years copies cross · 5 years copies square**), `nd-8` (fine motor and vision — the handout ladder *circle 3 · cross 4 · square 5*, and the 5-year conflict it records) |
| 71 | 1903 | `resp-pneumonia` | `resp-4` (general signs; the WHO tachypnoea thresholds; ⚠️ **the lecture ranks TWO signs, not one**), `resp-3` (age is the pathogen), `resp-5` (local signs by stage) |
| 73 | 1907 | `resp-bronch` | `resp-20` (bronchiolitis — the two definitions that disagree on the age, and RSV), `resp-21`, `resp-1` (pneumonia's definition — the first distractor) |

## ⚠️ Three measured gaps — answer and tag, never declare

Per the standing rule and §8 of the brief: fill from general medical knowledge, carry
**`not taken from the course material`** as a short tag on the specific outside claim, lead with the
answer. Each was established by grepping the concept, the abbreviation and the synonyms over all 518
sections — reproduce that reasoning in the tag rather than asserting a bare absence.

⚠️ **Two of the three are in a DISTRACTOR or a unit, not in a key.** Section 14 learned that a gap
sweep run over keys alone misses them. **Every distractor must be explained, so every distractor is
inside the grounding requirement**, and so is every unit printed in a stem.

1. **n44 — the conditioning alarm.** *"alarm"* returns three hits corpus-wide and **none of them is
   enuresis** (`gast-18`, `nnj-10`, `nnj-11` — unrelated). *"desmopressin"* returns two, both in
   `haem-bleeding` for DDAVP in bleeding disorders, **not** for the wet bed. `ren-17` opens
   **"⚠️ Not written as a topic in any paediatric deck"** and supplies only the definitions. So the
   whole of enuresis treatment is outside the material: tag the bell alarm, how it conditions a deep
   sleeper to wake to a full bladder, and why it is first-line before desmopressin. The **sourced**
   half of n44 is small but real — `ren-17` prints **PRIMARY: never reliably dry · SECONDARY: was dry
   and became wet**, which is exactly what the stem's *"never been dry at night"* is testing, and it
   prints the DKA/diabetes decks' *polyuria and enuresis* against a differential of UTI, which
   answers option A.
2. **n21 — the acid-base vocabulary.** *"respiratory acidosis"* returns **zero** corpus-wide;
   *"metabolic acidosis"* returns eleven, none of them a bronchiolitis gas. *"kPa"* returns **zero** —
   the material never uses kilopascals at all. `emg-3` gives **hypercarbia and hypoxia** as the two
   derangements of respiratory failure and gets you to the physiology, but the classification of the
   gas is unattested. Tag it, convert the number for the reader (pCO₂ 7.8 kPa ≈ 58 mmHg), and keep it
   to one clause — this is a correction to the box, not the entry's subject.
3. **n25 — copying a line at 24 months.** *"copying a line"* is not printed anywhere. `nd-6` gives
   **2 years: makes circles** and `nd-8` gives **12–15 months: scribbles**; neither names a line, and
   neither ranks it. This is the section's distractor gap. Answer it from the ladder either side of
   it and tag the specific age.

## ⚠️ Two partials — the concept is sourced, the specific claim is not

Not gaps. Lead with the sourced part, tag only the sentence that leaves the material.

- **n71 — "the most sensitive clinical sign".** `resp-4` prints the general signs with **tachypnoea
  first**, gives the **WHO age-specific thresholds** (> 60 under 2 months · > 50 at 2–12 months ·
  > 40 at 12 months–5 years · > 30 over 5 years), and lists tachypnoea first among the strongest
  predictors. All sourced. What it actually says about ranking is *"tachypnoea and chest indrawing are
  the two most important signs for diagnosis"* — ⚠️ **two signs, not one, and "most important" is not
  "most sensitive".** Keep the key as printed, give the WHO numbers as the reason fast breathing is
  the sign that is countable and early, and tag the singular ranking. The four distractors are all
  answerable from `resp-4` and `resp-5`, so this one-liner has plenty to say.
- **n36 — how SIADH is diagnosed.** `emg-16` prints the association outright and uses **pneumonia as
  its example**, which is n36's exact scenario, and it prints the consequence — two thirds of standard
  maintenance. That is the sourced half and it is stronger than the chapter rulings expected. What is
  **not** printed anywhere is the diagnostic triad the stem turns on: euvolaemic hyponatraemia with a
  **low plasma osmolality** and an **inappropriately raised urinary sodium**. Tag that. The
  distractors are answerable from the material — `endo-33` covers adrenal hyperplasia and secondary
  adrenal insufficiency (⚠️ under its own gap tag, see below), and diabetes insipidus is the mirror
  image of the key, which is the cleanest way to explain it.

**Straddle to note in the drafting, not to act on:** n36's vignette is a pneumonia admission and the
question is a complication of it. The primary chapter is `endo-thyroid`; note respiratory as
secondary. Do not add a `straddle` field — no drafted row in this section carries one.

## ⚠️ One anchor that carries its own gap tag — do not double-source it

The theory file marks its own outside knowledge, and two anchors this section leans on are marked:

- **`ren-17` (n44, enuresis)** opens **"⚠️ Not written as a topic in any paediatric deck — but the
  reasoning the examiner wants IS printed, in the endocrine decks."** It then says outright that
  *"the stone mechanism, the enuresis definitions and the test ordering are supplied and tagged"*.
  Cite `ren-17` as the project's own write-up, not as the course teaching, and carry the tag onto the
  primary/secondary definitions themselves. There is no second source to fall back on.
- **`endo-33` (n36, the CAH and adrenal distractors)** opens *"The gap: CAH is named as a cause in
  three paediatric decks and taught in none."* Everything it says about CAH is already outside the
  material. It is nonetheless the only section that prints *salt-losing*, *21-hydroxylase* or
  *ambiguous genitalia*. Cite it as the project's own write-up and keep the tag.

## ⚠️ Five pairs that must be NAMED, never folded

Each was re-examined by dumping both option lists in full, under the rule that **a shared option menu
pairs questions, never folds them — name the discriminating token or you matched a template.** All
five held as pairs, and all five were re-probed on **key text** as well as stem, which is the check
section 15 had to learn twice. The discriminating token is given for each; **the drafted entry must
earn its place by turning on that token**, and must name its sibling **by id in backticks**.

- **n21 and `pedep2-mf2-51`** — same key *text* (*Continuous positive airway pressure (CPAP)*) and the
  same chapter. The tokens are two: `pedep2-mf2-51` prints **four** options and asks which treatment
  has *evidence-based benefit* in bronchiolitis — a knowledge question with no patient in it. n21
  prints **five** and asks for the **next step in a named child who is deteriorating on 2 L with a
  documented gas**. One tests the evidence base, the other tests the threshold. `resp-22` holds both
  at once, which is what makes them two questions and not one.
- **n15 and n21** — ⚠️ **each other.** Both are bronchiolitis management vignettes, both are
  `resp-bronch`, and both anchor on `resp-22`. n15's infant has **SpO₂ 96 % in air, alert, well
  perfused** and is admitted for **feeding**; n21's is **RSV-positive, tired, on 2 L, pH 7.30, pCO₂
  7.8 kPa** and needs **CPAP**. The token is the same section's own ladder: *oxygen only below 92 %* ·
  *NG feeding for the poor feeder* · *CPAP for severe distress, FiO₂ > 0.5 or apnoea*. Write them so
  they read as two rungs of one ladder and name each in the other.
- **n56 and the four live foreign-body entries** — `pedep2-res-11`, `pedep2-res-35`,
  `pedep2-res-49` and `pedep2-mf1-15`, all `respiratory`, all keying a foreign body. ⚠️ This is the
  section's nearest miss and it was checked on key text: n56's key is printed **"Foreign body
  aspiration"** where all four live keys read **"Inhaled foreign body"** or **"Inhaled bronchial
  foreign body"**. The token is the presentation. **Every live one prints a witnessed event** — the
  boy who woke coughing and choking, the peanuts, the sudden noisy breathing, the sudden dry
  repetitive cough. **n56 prints none**: a previously healthy 2-year-old simply *found to be cyanosed
  while playing*, SaO₂ 80 %, gasping. That is the question — a foreign body with no history offered —
  and it is why `acc-3`'s *toddlers put objects in their mouths, and their airway is more readily
  occluded* is the anchor rather than a wheeze section.
- **n25 and n67 and the `pedep2-nd-*` run** — both ranked high on the stem sweep through the age
  vocabulary alone. n25's options are **statements** (*"Not using single words at 16 months"*), not
  the bare ages of `pedep2-nd-4`, `pedep2-nd-19` and their neighbours, so even the shared menu is
  only half shared. A shared option menu pairs questions and never folds them. Name both.
- **n73 and `pedep2-res-59` / `pedep2-res-26`** — same subject, same menu vocabulary, and neither
  asks n73's question. `pedep2-res-59` keys *It is caused by viruses only*; `pedep2-res-26` asks
  which feature is **not** typical and keys *Paroxysmal cough*. n73 asks which infection is the
  commonest serious one in infants and keys **Bronchiolitis** at index 3. Different question,
  different key, different key position. Pair, do not fold.

## ⚠️ n67 contradicts a live entry, and both keys stand

`pedep2-nd-8` asks the age of a child who *"has just learned to copy drawing a square"* and keys
**4 years**. n67 asks the age of a child who *"can copy a circle, but not a square"* and keys
**3 years**. Taken together the bank puts the square at 4 and the circle at 3.

`nd-6`'s spine and `nd-8`'s handout ladder both put the square at **5 years** — *circle 3 · cross 4 ·
square 5* — and `nd-8` records that the lecture and the handout already disagree at 5 years, the
lecture's table saying **draws a triangle** where the handout says **copies a square**. `pedep2-mf1-10`
keys *Five years* for drawing a triangle, which agrees with the lecture.

So n67 agrees with the material and `pedep2-nd-8` sits a year early against it. **The `answer` never
moves on either.** Write n67 from `nd-6`'s ladder, state the circle at 3 as the material prints it,
and name `pedep2-nd-8` as the sibling that prints the square a year earlier. Do not edit
`pedep2-nd-8`, and do not raise it with anyone.

## Cross-file overlap — recorded, folded by nobody

House matches raised during adjudication do **not** fold. Do not add `alsoIn`, do not cite House, do
not open `questions.peds.js`. They go to the end-of-stream cross-bank sweep. The measured House
neighbours of the nine are `pedhd-resp-15` (bronchiolitis), `pedhd-resp-12` (foreign body),
`pedhd-renal-9` (enuresis, key *Urinary dipstick*) and the twenty-entry `pedhd-dev-*` run that is
House's whole `normal-dev` chapter, recorded here only so the sweep finds them. All four chapter
assignments agree with the rulings above, which is evidence about House and not a ground for any
ruling here.

## ⚠️ A page number in this section may mean the other book

**Both books print exam sections whose page numbers overlap.** `questions.peds.ep.js` now carries the
mark `reprinted in Pediatrics endpoint part2.pdf, Model Final Exam 4, p.1` **fourteen times** — the
long form, naming the file, precisely because a bare *"Model Final Exam 4, p.1…"* clause on a part-1
entry would be ambiguous. On a part-2 entry the base citation already names part2.pdf, so the bare
clause form is correct there.

Consequence for drafting: **never search either live file for a bare page number or a bare exam name
to check whether something is already cited.** This is what shaped the reprint passes' two
proof-of-run marks — `expect: 56` on `questions.peds.ep2.js` and `expect: 14` on
`questions.peds.ep.js` — and `splice-pd-ep2.js` now names both passes in its failure message.

## Other things measured before drafting

- pp.1757–1758 open the exam; the first question is on p.1759 (n1, a reprint). p.1921 is n80 and the
  section's last page. There is no eighty-first question.
- **The census behind the seventy: 65 distinct targets.** Five are cited twice —
  `pedep2-mf1-51`, `pedep2-nd-19`, `pedep-gi-17`, `pedep2-res-22`, `pedep2-res-25` — and all seven
  late reprints opened a target of their own. A doubled target is expected and is not a defect.
- **Section 15 no longer exercises the overflow-page hard fail** in `val-pd-ep2.js`. n34 was the only
  drafted row of the four box rows; folding it left that check with nothing to fire on, and **no
  section in this stream has exercised it yet.** The comment in `val-pd-ep2.js`'s section-15 block
  says so. Do not read a silent pass there as a passing test.
- Measured absences among the drafted nine, so nobody goes looking: **no nutrition question** · **no
  cardiac, haematology, genetics, malignancy or gastro question** · **no neonatal or perinatal
  question** · **no infection, vaccination, allergy or accident question** · **no mental-health
  question** · **no OSCE content**. Four chapters carry a single entry each — `respiratory` (n56),
  `resp-pneumonia` (n71), `renal-cakut` (n44) and `endo-thyroid` (n36). If a staged entry argues
  otherwise, that disagreement is the finding — report it rather than filing quietly.
- The staging-part gate is **`check-part-ep.js`**. **`check-part-ep2.js` does not exist** — do not
  invoke it. With one pass and no parts, it has nothing to gate here.
- Order of operations after drafting: `node val-pd-ep2.js 15` → `node splice-pd-ep2.js 15 --write` →
  `node tools\boot-check\boot-check.js` → commit explicit paths with `git commit -F <msgfile> --`.

## What this file does NOT settle

Why seventy of eighty are reprints — the four fold-adjudication files and
`endpoint-p2-s15-late-reprint-rulings.md`. Why each chapter was chosen —
`endpoint-p2-s15-chapter-rulings.md`, which this file reproduces but does not replace.
