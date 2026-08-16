# Paediatrics theory — the plan, the map, and the budgets

Built 2026-08-14 by the hub chat. **Paediatrics was moved ahead of Ophthalmology at the user's
instruction**, which matches the calendar: Peds OSCE **14 Sep**, Peds Papers 1+2 **17 Sep**, then
ENT 22 Sep, Ophtho 27 Sep, Neuropsych 3 Oct, Peds Papers again 18–19 Oct.

Format is `progress\briefs\START-HERE.md` **§14**, including the new **§14.3a layout rules**.
This file records only what is specific to paediatrics.

---

## ⚠️⚠️ CHAPTERS ARE SPLIT, NOT COMPRESSED — the user's decision, 2026-08-15

Writing to lecture length worked, and produced chapters of **21–32 printed pages** (mean 25 across
the first five). That is the size the user rejected outright for ENT, and projecting it over 21
chapters gave **~532 pages** against ENT's 259 over *thirty* chapters. The notes were not padded —
they run ~0.7× their lectures, faithful compression rather than the 6–13× inflation that caused the
original complaint. **They are large because paediatrics genuinely has 96,218 words of lectures
against ENT's 34,883.**

Offered *"532 pages holding everything"* versus *"~250 that drop things"*, the user chose a third
option: **split the big chapters.** Nothing is dropped and every unit lands at 3–13 pages.

**Done 2026-08-15 for the five written chapters** — paediatrics **21 → 32 chapters**, project
**104 → 115**:

| Was | Became |
|---|---|
| `cardiac` 21 pp | `cardiac` (Congenital, 10 pp) · `cardiac-cyan` (Cyanotic, 6) · `cardiac-acq` (Acquired, 5) |
| `renal` 22 pp | `renal-uti` (UTI, 5) · `renal` (Glomerular, 12) · `renal-cakut` (CAKUT/stones/enuresis, 6) |
| `respiratory` 27 pp | `resp-pneumonia` (8) · `respiratory` (Asthma, 15) · `resp-bronch` (5) |
| `gastroenterology` 24 pp | `gastroenterology` (Vomiting/reflux, 5) · `gi-diarrhoea` (13) · `gi-abdopain` (6) |
| `neurological` 32 pp | `neuro-stroke` (3) · `neurological` (Seizures/epilepsy, 12) · `neuro-nm` (13) · `neuro-cp` (4) |

**How it was done, and the two things that made it safe:**

- **Boundaries are CONTIGUOUS section ranges from each chapter's own structure.** No section was
  reordered, no prose rewritten, no fact touched — a section kept its body, its `qs` and its `Src:`
  line, and only its parent changed. Every section was checked to land somewhere.
- **⚠️ QUESTIONS WERE REASSIGNED FROM THE THEORY LINKS, NOT BY GUESSWORK.** A section already names
  the questions it teaches in `qs`, so a question's new home is the new chapter of the section that
  links it. All 50 mapped; 0 orphaned. **Ten links crossed a boundary** — a question genuinely
  taught by two sections now in different chapters — and **first-wins would have been arbitrary, so
  all six distinct questions were read and placed by what their ANSWER tests. Five of the six needed
  overriding**, which is why the split script carries an explicit `HOME` map rather than a tie-break
  rule. A question stays *linked* from both chapters either way; only its home moved.
- `SCHEDULE` is keyed by **date and title, never chapter id** (`CLAUDE.md` §4), so restructuring
  cannot break it — and progress is keyed by **question id**, so no answered question was orphaned.

**⚠️ STILL TO SPLIT, when they are written** — apply the same rule, ~12 pages maximum per unit:

| Chapter | Ceiling | Split into |
|---|---:|---|
| `infection` | 12,375 | febrile child & serious infection · the exanthems (both rash decks) · immunity & immunodeficiency |
| `nutrition` | 8,014 | faltering growth, feeding & PEM · rickets and vitamin D (both rickets decks) |
| `neonatal` | 5,969 | judge on the written length; split only if it passes ~13 pp |

---

## ⚠️ THE ONE RULE THAT IS DIFFERENT HERE: NO 3,000-WORD CAP

**User's decision, 2026-08-14.** Paediatrics carries **~4× ENT's lecture load per chapter** —
4,582 lecture words per chapter against ENT's 1,163. Applying §14's 3,000-word cap would have
bound on **12 of 21 chapters** and cut ~75 % of the lecture out of respiratory and infection.
The user chose to let the big chapters run to their lecture length instead.

> **Budget = `max( the chapter's own lecture words , 25 × linked questions , 600 )`. No cap.**

**⚠️ THE BUDGET IS A CEILING, NOT A TARGET.** It exists to stop the ENT failure — notes 6–13×
longer than the lecture they summarise — and nothing more. Slides are full of title lines,
repeated bullets and image captions that telegraphic notes shed, so **a good chapter should land
WELL under its ceiling.** Writing to the ceiling because it is there is the old mistake wearing a
new number.

What has NOT changed: the two-sided coverage floor, the §14.5 deferral register, the omission note,
and the ban on dropping a protected fact to fit. If a chapter genuinely cannot hold its important
lecture content, **say so and itemise the cost** — do not quietly trim.

---

## Per-chapter budgets and deck manifest

`W` = summed words of that chapter's cached decks. `Q` = questions filed today (they will grow —
see the reconciliation pass below). Ceiling = `max(W, 25Q, 600)`.

> **⚠️ COUNT WITH `split(/\s+/)` IN NODE, NEVER `wc -w` — THEY DISAGREE BY 3–6 % AND BOTH OF THE
> FIRST TWO AGENTS REPORTED THE TABLE AS WRONG.** It was not wrong; the per-deck figures quoted in
> their briefs came from `wc` while this table came from node, so the two never reconciled.
> **Cause: `pdftotext` leaves a U+000C form feed at every page break** — 99 of them in
> `39)Hematuria` alone — and JS `\s` merges a form feed with the space beside it while `wc` does
> not. Renal reads **7,174 (node) / 6,699 (`wc`)**, cardiac **7,052 / 6,867**.
> **node is the project convention because `vth.js` measures the finished draft that way**, so a
> ceiling counted with `wc` would be compared against a body counted with node. Nothing here binds —
> both chapters landed far under either figure — but quote ONE counter.

| Chapter | Ceiling | W | Q | Decks (in `content\peds\lectures\`) |
|---|---:|---:|---:|---|
| `respiratory` | ~~12,984~~ **8,859** | 8,859 | 0 | `30) Pneumonia` · `PNEUMONIA` · `31).1)Asthma part 1` · `31).2)Asthma part 2` · `Asthma_` · ~~`Asthma  e-book`~~ · `32)Acute bronchiloitis_` |
| `infection` | 12,375 | 12,375 | 31 | `18) febrile child…` · **`25)Immunodeficiency_` ⚠️THIN** · `infectious diseases causing maculopapular rash` · `…vesicular rash` · `specific bacterial infection` · `typhoid and tuberculosis` · `antibiotic stewardship program` |
| `neurological` | 8,722 | 8,722 | 0 | `53) stroke` · `54) seizures and epilepsy (1)` · `55) Motor_Disorders` · `56) Floppy infant ` · `58) cerebral palsy` |
| `nutrition` | 8,014 | 8,014 | 0 | `15.1) Faltering Growth` · `15.2) Infant Feeding` · `16) P.E.M` · `17) Vitamin D Defficiency Rickets(1)` · `Vitamin deficiency  Rickets` |
| `renal` | 7,174 | 7,174 | 26 | `38)UTI` · `39)Hematuria` · `40)Congenital anomalies of the kidneys…` · `41)Proteinuria -1` |
| `cardiac` | 7,052 | 7,052 | 24 | `33)Congenital acyanotic heart disease_` · **`34)Students Obstructive diseases`** · `35)Cyanotic CHDs` · `36)Myocardial diseases` · `37)RF` |
| `gastroenterology` | 6,688 | 6,688 | 0 | `22)Vomiting` · `23).1) Acute diarrhea` · `23).2)Constipation` · `24)Abdominal pain` |
| `neonatal` | 5,969 | 5,969 | 0 | `8) COMMON PROBLEMS IN THE TERM NEWBORN` · `10) new Seizures . Birth injuries , Hpoglycemia 2` · `11) Neonatal sepsis` |
| `endocrine` | 4,467 | 4,467 | 0 | `51) DKA` · `52) hypothyrodism` · `diabetes mellitus for under grad_8acf…` |
| `haematology` | 3,827 | 3,827 | 0 | **`44)BM FAILURE` ⚠️THIN** · `47)Hemorrhagic disorders ` · `Iron deficiency anemia pdf` |
| `perinatal` | 3,773 | 3,773 | 0 | `7) Intro to neonatology` · `9) Respiratory distress in newborn` · `12) HIE` |
| `malignant` | 3,438 | 3,438 | 0 | `48)Leukemias` · `49)Rhabdomyoma and Brain Tumors Overview` |
| `normal-dev` | 2,803 | 2,803 | 0 | `1) Normal development` · `Lec 1 Normal development_` |
| `genetics` | 2,740 | 2,740 | 0 | `6) Genetically determined disease_` |
| `dev-problems` | 2,584 | 2,584 | 0 | `2) developmental problems` · `Lec 2 Child development_` |
| `allergy` | 2,222 | 2,222 | 0 | `26)allergy_` · `27)Anaphylaxsis` |
| `growth-puberty` | 2,093 | 2,093 | 0 | `13) Short stature` · `14) Puberty` |
| `liver` | 1,565 | 1,565 | 0 | `43)Infantile cholestasis_` · **`42)Viral hepatits_` ⚠️IMAGE-ONLY, not cached** |
| `emergencies` | 1,235 | 1,235 | 0 | `3) Pediatric resuscitation` · `4) Shock in pediatrics_` |
| `accidents` | 875 | 875 | 0 | `5) Poisoning in children_` |
| `mental` | 600 | 0 | 0 | **NO DEDICATED DECK — see below** |

**Totals: 97,075 ceiling words after the respiratory correction, ~404 printed pages at the /240
estimator.** Expect the real figure well below that, for the ceiling-not-target reason above.
**Verified: all 64 cached decks map to a chapter and none is orphaned.**

**⚠️ MEASURED, NOT PREDICTED — the first three chapters all landed at ~74–77 % of ceiling:**

| | Ceiling | Body words | % | Sections | Pages |
|---|---:|---:|---:|---:|---:|
| `cardiac` | 7,052 | 5,157 | 73 % | 18 | 19 |
| `renal` | 7,174 | 5,296 | 74 % | 17 | 18 |
| `respiratory` | 8,859 | 6,521 | 74 % | 22 | 22 |

**Use 74 % of ceiling as the working estimate for the chapters not yet written**, and set each
agent's target band from it rather than quoting the raw ceiling — quoting 12,984 to the respiratory
agent invited a 40-page chapter and only the explicit band prevented one.

---

## ⚠️ Six findings that will each cost a chapter if missed

**1. `34)Students Obstructive diseases` IS CARDIAC, NOT RESPIRATORY.** The title reads respiratory
and it was mis-filed that way once here. It holds **coarctation, aortic stenosis and pulmonary
stenosis** — and `33)Congenital acyanotic heart disease_` returns **zero** hits for any of the
three. Filed wrongly, the cardiac chapter loses exactly the lesions the exam asks about.

**2. `mental` (Mental Health) has no lecture of its own.** Greped: `mental health` appears only in
`Lec 2 Child development_`, and `ADHD` / `attention deficit` / `autism` only in
`2) developmental problems` and the development decks — all of which belong to `dev-problems` and
`normal-dev`. So this chapter is written mostly from **general medical knowledge, tagged**, per
`CLAUDE.md` §4 — *answer the gap, never declare it.* **Do not raid `dev-problems`' content for it;
cross-reference instead, and register anything genuinely moved.**

**3. ⚠️⚠️ THE VISUAL READ IS STANDARD FOR EVERY CHAPTER — NOT A SPECIAL CASE FOR THREE DECKS.**

This plan first scheduled visual reads for three decks. **That was far too narrow.** Measured across
all 66 decks (`imgdep.js` — convert every `.pptx` via PowerPoint COM, then count slides whose
extracted text is under 5 words): **30 decks are ≥25 % pictures, and every chapter carries 8–66 %
image-dependent content.** The three scheduled were indeed the worst, but they are the head of a
long tail, not the whole of it.

**The `gastroenterology` agent proved the value unprompted.** It converted its decks and read the 45
blank slides as contact sheets — about 20 minutes — and recovered, **as sourced rather than tagged**:
the full **Rome IV** functional-constipation criteria, the **Bristol scale**, the ORS cotransport
mechanism, the 13-sign dehydration plate, the surgical/medical/extra-abdominal classification, the
diagnosis-by-age grid, **INSPPIRE criteria**, and **Cullen's and Turner's signs by name**. Roughly
twenty claims moved from *"not in course material"* to cited. That is the whole argument.

**The recipe** — render at 110 dpi, read **FOUR-UP CONTACT SHEETS** (10 reads instead of 40; headings
stay legible at 760 px per slide). For a `.pptx`, convert first with PowerPoint COM, **opening
read-only and exporting to the scratchpad** — `Semester 8\` is never written to. **⚠️ Use a FRESH COM
instance per file:** one bad deck (`14) Puberty`) crashed the session and cascaded twelve failures.

> **⚠️⚠️ TRIAGE BEFORE RENDERING — READ THE BLANK PAGES' TITLES FIRST.** Discovered on the `cardiac`
> patch, which read ~130 blank slides to find that **the value sat in about a dozen.** Split the deck
> on the form feed and print the titles of the blank pages. A title promising a **criterion,
> classification, investigation list, table or algorithm** is worth rendering; a run of
> *"ECHO" / "CATH" / "treatment (Stenting)"* or rhythm-strip titles is procedural photography and is
> not. One command, and it roughly halves the reading.

> **⚠️⚠️ THE CACHED `.txt` FOR A `.pptx` DECK CAN BE INCOMPLETE — THE XML PASS AND THE PDF RENDER
> CAPTURE DIFFERENT TEXT, AND NEITHER IS A SUPERSET.** Found when the `cardiac` patch traced a
> rheumatic-fever regimen that `pdftotext -layout` reads cleanly off the converted deck and that is
> simply **absent from `37)RF.txt`**. Measured across all 14 converted decks:
>
> | Deck | PDF-only vocabulary | Verdict |
> |---|---:|---|
> | **`14) Puberty`** | **33 %** | **REAL AND LARGE — `tanner`, `thelarche`, `menarche`, `gonadarche` all ZERO in the cache.** ✅ Cache repaired 2026-08-15: the PDF extraction is appended under a `SUPPLEMENTARY EXTRACTION` banner, 1,068 → 2,694 words. Both passes kept. |
> | `37)RF` | 8 % | Real but small — the treatment ladder. ✅ Recovered by the cardiac patch. |
> | `36)Myocardial diseases` | 0 % | **Opposite direction — the cache holds 195 words the PDF does not.** The XML pass won here. |
> | the other 11 | 0–3 % | Noise: PDF hyphenation artefacts (`peek-a-`, `mycoplasm`, `impairme`), not content. |
>
> **So this is bounded, not systemic** — one deck badly affected, one mildly, and it is now fixed.
> But **check any `.pptx` deck's cache against `pdftotext -layout` of the converted PDF before
> writing its chapter**, and never assume the cache is the whole deck.

> **⚠️⚠️ THE CEILING UNDER-STATES AN IMAGE-HEAVY CHAPTER, BECAUSE IT COUNTS ONLY WHAT EXTRACTS.**
> `haematology`'s ceiling read 3,827 and the chapter came in at 5,125 — the visual read alone
> recovered **~1,215 words, 3.6× `44)BM FAILURE`'s entire extracted text** (339 words across 54
> slides, 33 of them blank, pages 40–54 fifteen consecutive blanks). **Where a chapter's blank-page
> share is high, treat its ceiling as a floor and expect to exceed it** — that is not inflation, it
> is content the counter could not see. Say so and split rather than compress.

> **⚠️ FRAMEWORK SLIDES COST ~85 WORDS IN THIS FORMAT, NOT ~55.** §14.3a's anchored bullets and
> `###` headings are not free, and costing them at the old rate is what made `haematology`'s own
> prediction a third short. Use 85 in the planning sum.

**Blank-slide share by chapter, all decks pooled** — read this before writing:

| ≥30 % | | 20–30 % | | <20 % | |
|---|---:|---|---:|---|---:|
| `liver` | 66 % | `respiratory` | 30 % | `endocrine` | 20 % |
| `infection` | 60 % | `growth-puberty` | 28 % | `neurological` | 20 % |
| `cardiac` | 41 % | `normal-dev` | 27 % | `accidents` | 13 % |
| `perinatal` | 39 % | `malignant` | 24 % | `genetics` | 8 % |
| `haematology` | 38 % | `neonatal` | 23 % | | |
| `allergy` | 33 % | `dev-problems` | 23 % | | |
| `nutrition` | 32 % | `renal` | 22 % | | |
| `emergencies` | 31 % | | | | |
| `gastroenterology` | 30 % | | | | |

Worst individual decks: `42)Viral hepatits_` **100 %**, `19 and 20) INFECTIOUS DISEASES` **95 %**,
`44)BM FAILURE` **78 %**, `36)Myocardial diseases` **72 %**, `25)Immunodeficiency_` **58 %**,
`34)Students Obstructive diseases` **52 %**, `17) Vitamin D Defficiency Rickets(1)` **50 %**.

**⚠️ A VISUAL-READ PATCH IS OWED ON THE THREE CHAPTERS WRITTEN BEFORE THIS WAS KNOWN** — `cardiac`
(41 %, four of its five decks affected, and its own agent recorded the Kawasaki criteria as
unrecovered), `respiratory` (30 %, partly mitigated: its agent recovered content from the duplicate
pneumonia handout rather than from the images) and `renal` (22 %). **It is a diff, not a rewrite** —
read the blank slides, report what is missing, patch the sections.

**4. ⚠️ THE NUMBERING GAPS ARE NOT MISSING FILES — 21, 28, 29 and 57 WERE NEVER GIVEN OUT.** The
user, 2026-08-14: *"The missing lectures were not given to me by the professor."* Do not hunt for
them, do not raise them. Fill the topic from general knowledge and tag it.

**5. ✅ `19 and 20) INFECTIOUS DISEASES. clean.ppt` IS NOT A GAP EITHER — it is the two cached rash
decks.** It is a 16 MB **old binary `.ppt`** (OLE2, `d0cf11e0`), which is why it never extracted.
Converted via PowerPoint COM to `…\hbth1\infdis.pdf` (106 slides) and checked: measles, rubella and
roseola are all in `infectious diseases causing maculopapular rash`; varicella and Coxsackie in
`…vesicular rash`. **Only three terms are unique to it — `goose-flesh`, `VZIG`, `pleomorphic` — so
the infection agent should skim the converted PDF for those and nothing else.**

**6. Duplicate-looking decks are mostly NOT duplicates — but TWO PAIRS ARE, and the second was
found by an agent after this plan said there was only one.**

| Pair | Verdict |
|---|---|
| `Asthma_` vs `Asthma  e-book` | **BYTE-IDENTICAL.** `diff` returns one line — the `SOURCE:` header. Same MD5 from line 2 on. **Count ONCE.** |
| `30) Pneumonia` vs `PNEUMONIA` | 93 %/91 % overlap. **Count the union once — but read BOTH:** 38 of the pptx's 114 slides extract blank, and the handout uniquely carries the in-hospital test list, the 4–6 week follow-up-CXR rule and the clinical classification prose. |
| `31).1` / `31).2` vs the unnumbered asthma file | 26–27 % — genuinely different lectures. Read all. |
| rickets pair | 40 % — different. |
| the two development pairs | 24–28 % — different. |

> **⚠️ HOW THIS PLAN GOT IT WRONG, so the next module's plan does not repeat it: I tested each
> unnumbered asthma file against the NUMBERED ones and never against EACH OTHER.** Both scored 26 %
> against `31).1`, which looked like independent confirmation and was actually the same wrong
> comparison run twice. **Sweep ALL pairs — an md5 of each file from line 2 onward costs one command
> and is exact**, where a vocabulary ratio is a guess that can miss a byte-identical file. Re-run
> properly afterwards: across all 64 decks there is **exactly one identical pair and one
> near-identical pair**, both above; nothing else exceeds 85 %.

The cost of the miss was a respiratory ceiling of 12,984 when the honest union is **8,859** — the
naive seven-file sum billed both duplicate pairs twice. Corrected in the table above.

---

## Order of work

Two agents at a time — the cap is the **shared usage pool**, not slots. Chapters with questions go
first so both sides of the coverage floor are exercised early; the three visual-read chapters are
scheduled deliberately, not stumbled into.

1. `cardiac`, `renal` — the two with questions besides infection, mid-size, no visual read
2. `respiratory`, `gastroenterology`
3. `neurological`, `nutrition`
4. `neonatal`, `perinatal`
5. `endocrine`, `malignant`
6. `genetics`, `normal-dev`
7. `dev-problems`, `allergy`
8. `growth-puberty`, `emergencies`
9. `accidents`, `mental`
10. **`infection`** (visual read of `25`, plus the three `.ppt`-only terms) — largest chapter
11. **`haematology`** (visual read of `44`), **`liver`** (visual read of `42`)

### ⚠️ The last eight chapters — three things settled 2026-08-16, so no agent re-derives them

**`mental` HAS NO PAEDIATRICS DECK, AND THE ANSWER IS NOT "write it from general knowledge".** It was
recorded as having no source at all. It does have one, in the sibling module:
`content\neuro\lectures\L14) Child Psychiatry.txt` — **1,257 words over 30 pages**, covering tics and
Tourette (17 mentions), intellectual disability, autism, ADHD and learning disability. That is real
course material from the same faculty and the same year, so it is a **cited source**, not a gap to
tag. Cite it as `L14) Child Psychiatry.pdf p.<N>` and say in the header that the deck is borrowed
from Neuropsychiatry.

- **This deliberately overlaps `ps-child` in the Neuropsychiatry module, and that is correct, not
  duplication.** Both exams test child psychiatry. Peds `mental` is written from the
  **paediatrician's** side — recognising it in a general clinic, what to do about it, when to refer —
  and `ps-child` from the psychiatrist's. Write the peds one that way; do not simply mirror the deck.
- At 42 words per page the deck is **image-dependent to the same degree as the worst paediatrics
  decks**, so it gets the full visual read like any other.

**⚠️ `dev-problems`' MAIN DECK IS THE DENSEST-BY-PICTURE IN THE MODULE: `2) developmental problems`
runs 1,355 words over 49 pages = 27 WORDS PER PAGE.** For comparison the whole-module average is
around 145. Its text cache cannot be more than a skeleton, so **a full end-to-end render is the
baseline for that chapter, not a triage decision.** Its second deck, `Lec 2 Child development_`,
is 1,229 words over 8 pages and is ordinary.

**⚠️ `normal-dev`'s TWO DECKS MAY BE NEAR-DUPLICATES — DIFF THEM AGAINST EACH OTHER.** Two decks in
this corpus were byte-identical under different names, and that was missed the first time because
each was compared against a third file rather than against its twin. If one is a subset, count the
union once and never the sum.

**⚠️ A RECONCILIATION PASS IS OWED when the paediatrics banks close.** Only 81 questions exist today
(infection 31, renal 26, cardiac 24 — **18 of 21 chapters have none**), so nearly every chapter is
being written from lectures alone. When the banks are transcribed, re-check each chapter's new
questions against its notes and patch. It is a diff, not a rewrite.
