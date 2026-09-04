# Pediatrics endpoint PART 2 — section map and index measurement (2026-09-04)

Source: `Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf` — **1,993 pages, 272 MB**
(`pdfinfo`, 2026-09-04). Page 1 titles it **"Pediatrics Paper 2 AlexMed Endpoints"**.

Search index: `content\peds\qb-pages\ocr\ep2\` — 1,993 `pNNNN.txt` + `index.json`, built
2026-09-04 by `tools\ep-index\run-all.ps1` with **no script edited** (every tool in that folder
takes the PDF and paths as arguments). Extract 149 s, two OCR passes 113 s each.

⚠️ **OCR is a SEARCH INDEX, never a clinical or transcription source.** Every numeral, exponent,
unit, dose and key letter comes off the page image.

## The calibration was re-verified, not assumed

`index.py` hardcodes `YELLOW_MIN = 750`, calibrated on part 1 section 1. Re-measured on part 2
pp.1-20 before the full run: unanswered p.18 = **512**, answered p.19 = **3,200**, notes slides
1,376-3,504. The threshold separates them cleanly. **Unchanged.**

`p.1993` is the only page not holding exactly one embedded JPEG — it draws 0 images and scores 0
yellow. It is the blank back cover. Nothing else rasterised; 1,992 pages were copied out natively.

## The section map — from the book's own contents page (pp.2-3), then verified

The contents page prints **PDF page ranges, not question numbers**. Verified three ways: p.5 is the
"Normal Development" title slide, every page 5-1992 falls inside exactly one range (only pp.1-4 and
the blank p.1993 sit outside), and each range's `answered` count matches its `question` count.

| § | Section | Pages | np | answered | question | notes | Chapter(s) in `modules.js` |
|---|---|---|---|---|---|---|---|
| 1 | Normal Development | 5-75 | 71 | 28 | 28 | 15 | `normal-dev` |
| 2 | Developmental problems | 76-154 | 79 | 30 | 29 | 20 | `dev-problems` `dev-nd` |
| 3 | Genetics | 155-244 | 90 | 42 | 38 | 10 | `genetics` |
| 4 | Hematological Disorders | 245-451 | 207 | 95 | 89 | 23 | `haematology` `haem-bleeding` |
| 5 | Respiratory disorders | 452-606 | 155 | 65 | 65 | 25 | `respiratory` `resp-pneumonia` `resp-bronch` |
| 6 | Cardiac disorders | 607-792 | 186 | 85 | 81 | 20 | `cardiac` `cardiac-cyan` `cardiac-acq` |
| 7 | Kidney & Urinary Tract Disorders | 793-929 | 137 | 55 | 55 | 27 | `renal` `renal-uti` `renal-cakut` |
| 8 | Neurological disorders | 930-1078 | 149 | 60 | 60 | 29 | `neurological` `neuro-stroke` `neuro-nm` `neuro-cp` |
| 9 | Diabetes & Endocrinology | 1079-1145 | 67 | 27 | 26 | 14 | `endocrine` `endo-dka` `endo-thyroid` |
| 10 | Liver disorders | 1146-1210 | 65 | 20 | 20 | 25 | `liver` `liver-hep` |
| 11 | Malignant diseases | 1211-1269 | 59 | 23 | 23 | 13 | `malignant` `malignant-solid` |
| 12 | Model Final Exam 1 | 1270-1431 | 162 | 80 | 80 | 2 | (mixed) |
| 13 | Model Final Exam 2 | 1432-1594 | 163 | 80 | 80 | 3 | (mixed) |
| 14 | Model Final Exam 3 | 1595-1756 | 162 | 80 | 80 | 2 | (mixed) |
| 15 | Model Final Exam 4 | 1757-1921 | 165 | 80 | 80 | 5 | (mixed) |
| 16 | Recently modified Questions | 1922-1940 | 19 | 18 | 0 | 1 | (mixed) |
| 17 | Recently Added Questions | 1941-1949 | 9 | 8 | 0 | 1 | (mixed) |
| 18 | Exam Night Review | 1950-1992 | 43 | 2 | 0 | 41 | — **no questions** |
| | **TOTAL** | | **1,993** | **878** | **834** | **281** | |

**✅ THE `Pages` COLUMN IS CORRECT AND HAS BEEN CONFIRMED BY RENDER. It was briefly "corrected" by
one on 2026-09-04 and has been PUT BACK.** I found a real off-by-one in my own reading of
`index.json` (its keys are a 0-based position; each record's own `page` field is the real 1-based PDF
page — `idx['452'].page === 453`), and then **inferred, without measuring, that this table had been
built the same wrong way.** It had not. A staging agent rendered pp.606–607 hours later: **p.606 is
section 5's Arabic closing supplication and p.607 prints the "Cardiac disorders" banner** — exactly
where this table's §5 ends and its §6 begins, and one page away from where my "correction" put them.

The convention the column actually follows, now confirmed on a rendered page: **a section runs from
its opening notes to its own closing supplication, which is the page after its last answered page.**
§1 last answered 74, closes 75. §2 153 / 154. §3 243 / 244. §4 450 / 451. §5 605 / 606. My inference
had every section ending on its last answered page instead, which is uniform too — that self-
consistency is what made it convincing, and it was worth nothing. **A pattern that fits is not a
measurement.** Rows 6–18 stand as printed; §18's end sits inside a notes run (pp.1989–1993 all
`notes`) and still wants a render.

**How to read the index, every time:** iterate `Object.values(idx)` and key your own map on `e.page`.
Never `idx[String(p)]`. That defect was real — it cost section 5 a whole launch — but it lived in my
profiling code, not in this table.

**⚠️ No new chapter is needed.** Every section maps onto a chapter that already exists in
`modules.js`. `modules.js` is out of this stream's scope and must stay untouched.

## `answered` OVER-COUNTS. The corrected question estimate is ~860, not 878.

`kind == "answered"` means "yellow present AND at least one option letter read". A summary slide
whose bullets are lettered — `A. Beta-Thalassemia`, `B.`, `A) Insulin Therapy` — satisfies both and
is counted as a question. This is the part-1 lesson ("yellow alone over-counts") in a second shape,
and it is why the count below was derived by pairing rather than by summing the flag.

A genuine question prints twice: the unanswered page, then the answered page immediately after. **47
`answered` pages have no `question` page immediately before them.** Every one was read:

| Pages | What they are | Count |
|---|---|---|
| 87, 157, 159, 161, 162, 255, 256, 257, 613, 617, 618, 619, 1082 | **summary slides** with lettered bullets — NOT questions | 13 |
| 1977, 1984 | §18 Exam Night Review — prose revision cards, NOT questions | 2 |
| 322 + 323 | **ONE question (printed no. 27) straddling two answered pages** | 2 pages, 1 q |
| 420, 971, 974, 1097 | genuine questions whose unanswered twin the index missed | 4 |
| 1923-1940 (18), 1942-1949 (8) | §16/§17 print the answered version ONLY — legitimate, single-printing | 26 |

**878 − 15 non-questions − 1 (the 322/323 pair is one question) ≈ 862 questions**, and §18
contributes none. Call it **~860 — an estimate off an OCR index, to be re-measured section by
section as each is staged, never quoted as a count.** Part 1 was ~855, so part 2 is the same size
again.

## Pages that must be read by eye before staging

`few-options` flags an answered page where both OCR passes together found fewer than four option
letters. 29 pages carry it; **15 are the summary slides above** (the flag caught them), leaving
**14 real question pages with an incomplete read**:

> 203, 209, 211, 229, 239, 436, 888, 1028, 1100, 1197, 1292, 1539, 1917, 1943

Other flags: `options-differ` 193, `passes-differ` 19, `thin` 101, `ocr-error` **0**.

## Reprint expectation

Part 1 is the **Paper 1** syllabus (growth, nutrition, gastro, accidents, emergencies, perinatal,
neonatology, allergy, infection); part 2 is **Paper 2** and shares none of those topics. So
endpoint↔endpoint reprinting should be far rarer than the part-1↔House collision rate.

Where reprints WILL concentrate is §12-18 — four model exams plus recently-modified,
recently-added and exam-night-review, **671 pages, a third of the book** — reprinting the body
sections. Part 1's Model Final Exam 1 was 30 reprints of 80. `reprint-pd-ep2.js` checks each
section against part 2, part 1 and House before drafting.

⚠️ **Nothing folds across a live chat's file boundary.** Cross-bank and cross-part collisions are
RECORDED here and merged once, after every stream closes.

## Collision log — RECORD ONLY, nothing is folded while another chat is live

### §1 Normal Development ≡ House `pedhd-dev-*` — 18 of 28, and it is one-for-one

`node tools\bank-harness\reprint-pd-ep2.js 5 75`, 2026-09-04. **18 of the section's 28 answered
pages match a House stem, in order, with no gaps in the House run:**

| p. | House id | | p. | House id | | p. | House id |
|---|---|---|---|---|---|---|---|
| 19 | `pedhd-dev-1` | | 40 | `pedhd-dev-11` | | 52 | `pedhd-dev-17` |
| 24 | `pedhd-dev-3` | | 42 | `pedhd-dev-12` | | 56 | `pedhd-dev-19` |
| 26 | `pedhd-dev-4` | | 44 | `pedhd-dev-13` | | 58 | `pedhd-dev-20` |
| 28 | `pedhd-dev-5` | | 46 | `pedhd-dev-14` | | | |
| 30 | `pedhd-dev-6` | | 48 | `pedhd-dev-15` | | | |
| 32 | `pedhd-dev-7` | | 50 | `pedhd-dev-16` | | | |
| 34 | `pedhd-dev-8` | | | | | | |
| 36 | `pedhd-dev-9` | | | | | | |
| 38 | `pedhd-dev-10` | | | | | | |

0 within-section candidates. `pedhd-dev-2` and `pedhd-dev-18` did not match; pp.22, 54, 60-74
matched nothing.

This is the **chapter-shaped** overlap `MEMORY.md` warns about, in its strongest form yet — a whole
House chapter reprinted in section order, 64% of the section. It says nothing about the rest of
part 2: §1 is the one topic (development) where the two books' syllabi meet, and the part-1 rate
was much lower.

**These are OCR-index candidates, not confirmed reprints.** Nothing is folded, nothing is skipped,
all 28 are staged. When both streams close, each pair is confirmed on the page images, the fuller
printing kept, and the other's citation folded into `source` — one entry with `alsoIn`, per the
standing cross-bank rule. Until then the two files each carry their own entry, deliberately.

## §1 staging closed — the measurements, 2026-09-04

**28 entries, n 1..28, pp.19-74, 0 sparse holes**, merged from two independently staged halves
(pp.19-46 and pp.48-74). `expect: 28` met exactly — no shortfall to explain.

| Measurement | Result |
|---|---|
| printed number vs sequential index | **`pr == n` on all 28** — no repeats (part 1's §1 printed two) |
| explanation boxes | 26 printed, **2 unboxed** (n1, n13) |
| boxes overflowing onto their own page | **none** — alternation held across every pair pp.19-75 |
| figures | **zero**, measured by reading each answered page whole, both halves |
| options | **19 five-option, 9 four-option** |
| shared option ladders | 3, all in pp.19-46: n4/n5, n8/n12, n9/n13 |

### The four-option run is real in the book — checked, because it looked like a reader artefact

Option counts break at p.54, then run four-only from p.60 to the end of the section. That first read
as a handover artefact between two transcribers. **It is not.** Two independent by-eye audits:

- pp.42, 44, 46, 48, 50, 52 (spanning the handover) — **all five options, all six staged correctly.**
  So the break is inside one reader's range, not at the seam.
- pp.54, 60, 74 and their unanswered twins — **four options, and the printed ladder stops at `d`.**
  A ladder ending at D is positive evidence of a genuine four-option question rather than a dropped
  line. Twins agree; staged counts and key indices match an independent read.

The lettering case also drifts (uppercase `A.` early, lowercase `a.` later). Immaterial — `options`
carries no letter prefixes and the app supplies them.

### Key check — the only one that does not compare a key with itself

`python tools\ep-index\keypos.py "…part2.pdf" --calibrate endpoint-p2-s01-normal-dev.array.js`

> **28 entries -> agree 28, DISAGREE 0, abstain 0 (100.0%)**

`keypos.py` measures the yellow highlight's row centroid against the option text bands — pixels
only, no OCR, no staging file, no shared code with the transcriber. **This is the
calibration-of-record for part 2.** ⚠️ Per the tool's own header: agreement does not make a key
right, since both routes still read the same ink. What 28/28 rules out is the failure it was built
for — a section staged one option out.

### Index flags that did NOT reproduce on the image

`thin` p.59; `options-differ` pp.23/24, 26, 38, 46, 47/48, 49/50, 51/52. Every one read as a
complete, undamaged page by the transcriber who owned it. Consistent with OCR being a search index;
**no print defect in §1.** Nine `options-differ` flags, nine false positives — treat the flag as a
prompt to look, never as a finding.

### Boundary proof, read off the pages

p.75 is a closing devotional slide (Arabic dua, no question). **p.76 opens with the red banner
"Developmental problems"** — §2's title. §1 ends at 75 and §2 begins at 76, as mapped.

### Spliced, and the matcher calibrated against the result

`node tools\bank-harness\splice-pd-ep2.js 1 --write` -- validator gate re-ran both halves and
passed, drafted 28 matched staged 28. `app\data\questions.peds.ep2.js` **383 -> 56,069 bytes,
0 -> 28 entries**. Read back off disk: length 28, **0 sparse holes**, ids unique, `pedep2-nd-1..28`,
one bank `endpoint`, one module `pediatrics`, one chapter `normal-dev`, every `answer` in range.

Boot from `file://` after the splice (`node tools\boot-check\boot-check.js`): **0 console errors**,
QUESTIONS 5111, THEORY 153, 153 chapter rows, 4 module cards. (5111 is a corpus mid-run with two
other chats writing -- a reading, not a count.)

`reprint-pd-ep2.js` `SELF_TEST_RANGE` set to `[5, 75]` and run: **28/28 pages matched their own live
entry, first run, no tuning.** That is part 2's calibration-of-record for the reprint matcher, and
it is what makes the section 2 sweep believable. Part 1's 89/89 does not transfer -- part 2's pages
restart at 1. Re-run after any edit to `head()`, `near()` or `norm.js`; anything under 28 is drift
to explain, not a result.

## §2 Developmental problems staged — and a better instrument than the OCR sweep

**29 entries, n 1..29, pp.97-153, merged from two halves (15 + 14), 0 sparse holes.**

`expect` was **lowered from 30 to 29 in `merge-parts-ep2.js`, because a page was looked at.**
p.87 classifies as `answered` and has no unanswered twin; read on the image twice — once building
this map, once as the staging pass's first act — and both times it is a notes slide, **"Types of
CP"**, whose lettered sub-bullets (`B. Dyskinetic CP`, `C. Ataxic CP`, `D. Mixed CP`) carry yellow
and read as options. No stem, no prompt. The `answered` over-count, caught on a real page.

| Measurement | Result |
|---|---|
| `pr == n` | all 29 |
| explanation boxes | **29 printed, 0 unboxed** |
| boxes overflowing onto their own page | none — alternation held pp.96-154 |
| figures | **zero**, every answered page read whole |
| options | 21 five-option, 8 four-option (ladder genuinely stops at `d`) |
| shared option ladders | **4 groups**, derived from the merged array by `menus-pd-ep2.js` |
| index flags | 10 `options-differ` + 1 `passes-differ`, **all false positives** |
| `keypos.py --calibrate` | **29 agree, 0 disagree, 0 abstain** |

Boundary read off the pages: **p.154 is a closing devotional slide, p.155 the red "Genetics"
banner** — the same shape as §1's boundary.

### ⚠⚠ THE REPRINT SWEEP UNDER-REPORTS WHEN THE TWO BOOKS REWORD. Measured here.

`reprint-pd-ep2.js 76 154` found **6** House matches. Comparing the **staged verbatim stems**
against House instead finds **19** — `pedhd-devp-1` through `pedhd-devp-19`, one for one, in page
order, the **entire** House `devp` chapter inside this section's first 19 questions.

The thirteen the sweep missed are not near-misses of noise. They are the endpoint printing a
**condensed rewrite of the same vignette** — same patient names, same numbers:

> Fortuna (8-month-old, left-hand preference) · Jenny (8-week-old, 35 weeks' gestation) ·
> Dorcus (9-month-old, head-and-arms flexion spasms) · Darren (3-year-old, stairs) ·
> Batar (1-week-old, cataracts, head circumference 32 cm) · Moses (5-year-old) ·
> Ronaldo (6-year-old, wide-based gait)

House writes *"who was born at term"*, the endpoint *"born at term"*; House *"because of unusual
movements"*, the endpoint *"due to unusual movements"*. Every such edit costs edit-distance, and
the sweep's 8% tolerance is calibrated for **OCR damage**, not for an editor.

**So a miss in `reprint-pd-ep2.js` is not evidence of absence.** Its hits are worth having — they
cost one step — but the overlap is only measurable once a section is staged, off the staged text.
Recorded in the tool's own header.

### §1's collision count was 18. It is 19. Corrected here.

Re-measured the same way: `pedhd-dev-1..17, 19, 20` all match, **seventeen of them at edit-distance
zero**. The sweep's miss was `pedhd-dev-2` — the endpoint prints *"a well-born 8-week-old baby"*
for House's *"a well 8-week-old baby"*, transcribed as printed.

Two genuine non-reprints, checked by reading rather than by threshold: **`pedhd-dev-18`** is a
22-month-old girl's vignette against the endpoint's bare *"At what age should a child be able to
join two words together in speech?"*, and **`pedhd-dev-21`** has no endpoint counterpart at all.

**Nothing is folded.** House is another chat's live file; all 28 and all 29 stay staged in full.

### ⚠ A WITHIN-PART-2 DUPLICATE: n:4 and n:21 are the same question, patient renamed

`menus-pd-ep2.js` flagged them for sharing a menu **and** a key, which is the flag's whole purpose.
Read side by side, there is no discriminating clinical token to name:

| | n:4, p.103 | n:21, p.137 |
|---|---|---|
| patient | **Fortuna**, 8 months, Black African, born at term | **Fatima**, 8 months, born at term |
| findings | rolls, no crawl, *"dada"* to everyone, grasps with left hand only, no bye-bye | identical, worded *"left hand but not with her right"* |
| options | the same four, same order | the same four, same order |
| key | 3, *"Left-hand preference"* | 3, *"Left-hand preference"* |

This is the **reworded-stem** fold shape, **within one bank and one file** — so unlike every House
collision above, this one is mine to fold. Following part 1's model, it is **staged and spliced
first, then folded as a separate recorded pass** (part 1's §3 ran 148 -> 215 -> 213 the same way).
n:21's printing is marginally fuller and its explanation names cerebral palsy outright; that is the
one to keep, with p.103 folded into `source`. **§2 will therefore go live at 29 and settle at 28.**

The other three groups are true pairings, not folds — n:2/n:3 (autism vs spastic bilateral CP on one
age ladder), n:9/n:11 (congenital infection screen vs creatine kinase on one investigation ladder),
and n:12-n:16, five questions on the single five-way CP-type ladder discriminated by kernicterus,
ex-26-weeker toe-walking, early hand preference, wide-based gait and failure to attain any milestone.

---

## Section 2 CLOSED — 2026-09-04

**Spliced at 29, folded to 28. Live file 28 -> 57 -> 56 entries.**

| | |
|---|---|
| pages | 76–154 |
| `expect` (answered pages) | 30, **corrected to 29** — p.87 is a notes slide |
| staged | 29 |
| drafted | 15 (half A) + 14 (half B) = 29 |
| spliced | 29, live 28 -> 57, 0 holes |
| folded | 1 (`pedep2-dp-21` into `pedep2-dp-4`), live 57 -> **56** |
| words | 3,826 + 2,510 = 6,336, mean 218 |
| boot | 0 console errors, corpus 5,140 -> 5,139 |
| `keypos.py --calibrate` | 29 agree / 0 disagree / 0 abstain |

### The fold: `pedep2-dp-21` -> `pedep2-dp-4`

`menus-pd-ep2.js` flagged n:4 and n:21 as sharing an option menu **and** a key. Read side by
side on p.103 and p.137 they are the same question with the patient renamed — Fortuna and
Fatima, both 8 months, both born at term, the same four milestones, the same four options in
the same text and the same order, the same key. There is no discriminating clinical token,
which is the test the six fold shapes set for telling a genuine fold from a template match.
Half B's drafting agent reached the same conclusion independently and said so plainly rather
than inventing a distinction.

**The pre-draft plan of record said keep n:21 — that was reversed, and the disk is why.** The
plan was written from the staging, where n:21 looked like "the fuller printing" because its
printed box names cerebral palsy outright. Once both were drafted the picture changed: `dp-4`
is the anchor the shared option menu points at and carries the full 305-word table, while
`dp-21` is a 138-word sibling that points **at** `dp-4`. Folding `dp-4` away would have
stranded the anchor and forced a rewrite of the entry that replaced it.

Nothing of `dp-21` was dropped. Its box is worded differently from `dp-4`'s — it names
cerebral palsy where `dp-4`'s says "early hemiparesis and neurological injury" — so it is
carried across **verbatim as a second printing** inside `dp-4`'s explanation, and p.137 is
folded into `dp-4`'s `source`, which now reads
`Pediatrics endpoint part2.pdf p.103; reprinted p.137`.

**Ids were not renumbered.** `pedep2-dp-22` .. `pedep2-dp-29` keep theirs; 21 simply ceases to
exist, and the numbering gap is the record of the fold. Nothing else in the repo referenced
the folded id (grepped before and after).

### Two harness corrections made in this section

1. **`merge-parts-ep2.js` SEC entry 2, `expect` 30 -> 29.** p.87 was read on the image twice:
   it is a "Types of CP" notes slide whose lettered sub-bullets (`B. Dyskinetic CP`,
   `C. Ataxic CP`, `D. Mixed CP`) carry yellow and classify as `answered`. This is the
   documented "answered over-counts" shape, caught on a real page. **The number was lowered
   because a page was looked at, never to make a merge pass.**

2. **`splice-pd-ep2.js` was printing JavaScript string length and calling it bytes.** The live
   file after the splice was 119,697 chars and 120,159 bytes across 231 non-ASCII characters.
   The label invited exactly the bytes-versus-count mismatch `MEMORY.md` treats as evidence of
   a broken count. Relabelled to `chars`, with the measurement recorded in the comment.


---

## Section 3 “Genetics” — STAGED AND MERGED, 2026-09-04

pp.155–244. **38 questions from 42 answered pages**, staged in two halves and merged into
`endpoint-p2-s03-genetics.array.js` (`PEDEP2_S03_STAGED`, n 1..38, pp.168–243, 40,193 chars,
0 sparse holes, every `key` in range, options 4×7 and 5×31).

### The count reconciles twice, by two instruments that share no input

| Instrument | Reading |
|---|---|
| Answered pages minus lettered summary slides read on the image | 42 − 4 (pp.157, 159, 161, 162) = **38** |
| The book’s own printed numbering, never consulted while staging | 1–16, then 17–36 with 24 and 25 each printed twice = 36 + 2 = **38** |

One works off the page images, the other off the page furniture, and they meet. `expect`
lowered 42 -> 38 in `merge-parts-ep2.js` with both reasons in the comment. That is three
sections running on the rule that **`expect` is an answered-page count and an upper bound,
never a question count.**

Both boundaries proved by rendering one page past the range: p.200 is the unanswered twin of
q17, p.245 carries the red “Hematological Disorders” banner.

### What the section holds

- **One shared option menu: n:8 and n:14**, identical 5-option ladder in identical order,
  different keys — a **pairing, never a fold**. Discriminators named at staging time: n:8 is an
  isolated clotting-factor deficiency with only affected males in the pedigree; n:14 is a
  consanguineous Pakistani couple with affected individuals of both sexes. Both also carry
  **different pedigree figures**, which is the `pedhd-card-6..10` shape — the normaliser cannot
  see a figure, so a text-only instrument would have called these a duplicate.
- **Five figures**, all pedigrees: n:8 (p.183), n:14 (p.195), n:36 (p.239), n:37 (p.241),
  n:38 (p.243). Every one carries a `figAlt`.
- **Four pages print no explanation box**: n:35–n:38.
- **One overflowed box**: n:6 -> p.179.
- **n:15 is an explicit follow-on to n:14** — its own stem says “the same couple as in the
  previous question”. Kept as a separate entry, since it is a separately numbered and
  separately highlighted question.

### Two things staging escalated instead of deciding

1. **p.211 (n:22, Klinefelter) prints the previous question’s box.** The box is word-for-word
   the one on p.209 (PEX1 carrier risk) and has nothing to do with karyotypes. **Settled by the
   standing rule: a source defect is RECORDED, never corrected.** The box is quoted verbatim,
   the mismatch is named in the written expansion, and the `answer` does not move (it is
   correct in any case).
2. **p.243 (n:38) has faint illegible text behind the pedigree.** **Settled: it cannot be
   recovered.** 800 × 450 is the hard resolution ceiling of this book — every page embeds one
   800 × 450 JPEG drawn onto an A4 sheet, so `hires/` and `pdftoppm -r 300` are upscales of
   that same image and add no information. The staging judgement (rendering artifact, not a
   printed answer element) stands, and the page is not re-rendered.

### An instruction of mine that was wrong, and an agent that was right to follow it

Half B was told to start `n` at 100 “because the merge step renumbers”. **It does not** —
`merge-parts-ep2.js` VALIDATES that `n` is the position and refuses otherwise, so the merge
failed on all 22 entries. The agent followed the instruction exactly and its file was correct
as written. Renumbered 100..121 -> 17..38 with `pr` and `p` asserted unchanged either side.

### The tally claim from section 3 half A is corrected here

The half-A commit recorded a third measurement of agent step-counting and concluded the fix
worked: told to keep a running tally, an agent reported **63** against a harness-recorded
**66**. The very next agent kept a tally, said so explicitly, itemised the three calls it
wasted on a mistake it caught — and reported **51** against a harness-recorded **83**, 39%
low while doing everything asked. **A tally helps and does not fix it.** Both briefs now say
the honest thing: tally, say it is a tally, and treat your own number as a **floor**. The
superseded claim is corrected in place rather than quietly dropped.

Drafting split **three ways, not two** — A n:1–15, B n:16–27, C n:28–38 — chosen so the shared
menu (n:8/n:14) and the n:14/n:15 follow-on pair each stay inside one half, and so no agent
faces 22 entries against a 70-step cap.


### Section 3 CLOSED AND LIVE — 2026-09-04

**38 spliced. Live file 56 -> 94 entries, 118,741 -> 220,392 chars, 0 holes, 0 duplicate ids,
one bank, one module, every `answer` in range.** Booted from `file://`: **0 console errors**,
corpus 5,139 -> 5,177, chapters now `{normal-dev:28, dev-problems:28, genetics:38}`.

**Drafted in three halves, all ALL CHECKS PASSED**: A n:1–15 (4,002 w), B n:16–27 (3,681 w),
C n:28–38 (3,451 w). 11,134 words over 38 entries, **mean 293** — inside the adaptive budget
with no entry needing a justified overrun.

### Two printed keys left alone, and that is the section’s real content

1. **p.211 (n:22) — the misprinted box is LIVE, word for word.** The endpoint file prints the
   previous question’s explanation there (autosomal-recessive carrier probability) on a question
   asking for Klinefelter’s karyotype. Quoted exactly as printed; the mismatch is named plainly
   underneath so a reader is not left thinking they misunderstood; `answer` unmoved at index 4.
2. **p.233 (n:33) — the harder one.** The stem asks which test is *diagnostic* and keys cell-free
   fetal DNA. Strictly, cffDNA is a screening test confirmed by an invasive karyotype before any
   irreversible decision. The entry says so, tagged as outside the material, and **leaves the key
   at index 1.** Noting a defect and disputing one are different acts; only the first is ours.

**All four unboxed entries (n:35–n:38) carry the unboxed marker** — verified by reading the live
text for the marker, not by trusting the validator’s own pass. **Five figures, all pedigrees**;
every `imgAlt` gives layout and modality only, never the inheritance pattern — which on those
four questions **is** the answer.

### Two faults the agents found that nobody told them to look for

- Half A hit a malformed markdown table row inside a JS string and found it through
  `node --check` before the validator ever saw it.
- Half B had embedded its own outside-knowledge tag **inside a quoted box**, corrupting the
  verbatim text. The validator’s non-fatal `quoted box differs from staging expl` warning caught
  it exactly. **That check earns its keep by being a warning**: a failure would have been argued
  with, a silent pass would have shipped it.

### The tally instruction was wrong twice and is now stated without a direction

Six tallying measurements exist. Three were accurate (55, 18, 63 against 66). Then, on this one
section in one afternoon: **51 against 83** (low 39%), **~20 against 16** (**high 25%**),
**~18–20 against 46** (low 59%), **~15 against 18** (low 17%). **The error has no direction and
cannot be corrected for.** Both briefs previously said “tallying works”, then “treat your number
as a floor”; both are wrong and both are corrected in place, not dropped. What stands: tally, say
it is a tally and not a measurement, and **do not let it decide whether you keep going** — let
the work decide, close out at a clean boundary, hand back.

**Next: §4 Haematology, pp.245–451, `expect: 95`** — the largest body section, splitting across
`haematology` and `haem-bleeding`. `expect` is an answered-page count and an upper bound; the
true question count is measured while staging, as it was three times now.

---

## Section 4 "Hematological Disorders" — STAGING LAUNCHED 2026-09-04

pp.245–451, `expect: 95`. The largest body section: 207 pages, more than sections 1, 2 and 3
put together. Chapters `haematology` (Anaemia and marrow failure) and `haem-bleeding`
(Bleeding and clotting disorders) — both confirmed present in `app\data\modules.js`, read
out of the file rather than assumed.

### The split, and why it is four parts

95 answered pages, split by answered-page count and not by page span, so each agent meets the
same amount of work:

| Part | Answered pages | Range | Structural oddities in it |
|---|---|---|---|
| A | 24 | pp.255–308 | pp.255–257 three consecutive answered, no twins |
| B | 24 | pp.311–357 | notes at 309/312/321; **pp.322+323 consecutive answered** |
| C | 24 | pp.359–405 | none — perfect alternation p.358→405 |
| D | 23 | pp.407–450 | **pp.419+420 consecutive answered**; owns the end boundary |

Four and not three because of the step cap, not because of the arithmetic. Section 3's three
drafting agents each carried 11–15 entries; 95 across three parts is 32 apiece, which is the
size at which an agent starts running the cap rather than the work.

### ⚠️ The index's `answered` field is not the same as `kind: "answered"`

Measured while computing the split, and it would have silently corrupted the count. Filtering
`ocr\ep2\index.json` on the boolean `e.answered` returns **111** pages in pp.245–451; filtering
on `e.kind === 'answered'` returns **95**. The difference is that `notes` pages carry
`answered: true` as well — pp.453 onward are the visible example. **`kind` is the field; the
boolean is not.** `MEMORY.md` already says "yellow alone over-counts" for a different reason;
this is a second way to over-count from the same file.

Separately, the JSON is keyed **0-based** while the `page` field inside each entry is 1-based
(`idx['300'].page === 301`). A split computed off the keys comes out one page low across the
board. Read `.page`, never the key.

### Three alternation breaks, all handed to the agent that owns them

The book prints every question twice — unanswered, then answered — so consecutive answered
pages with no twin between them is a break, and §3 of the staging brief says to check every
one rather than assume the section has none.

- **pp.255, 256, 257** (part A). Three in a row, sitting between two blocks of `notes`
  (pp.245–254 and pp.258–266) with the first real question page at p.267. In section 3 the
  identical signature was **four lettered summary slides** — a slide listing A/B/C/D items,
  which the detector reads as an answered page — and they were correctly not staged. Part A
  reads all three whole and says what they actually are.
- **pp.322 + 323** (part B) and **pp.419 + 420** (part D). Two pairs, same shape. The brief's
  named cause is an explanation box that did not fit and was printed alone on the page after
  the answered page, in which case the first page's entry carries `box:<second page>` and the
  second gets no entry of its own. Part 1 had three of these. But a genuine second question and
  a reprint produce the same signature, so both agents were told to read both pages and report
  what they saw rather than apply the rule. The text sweep independently flagged both pairs as
  near-identical, which is consistent with every one of the three readings and therefore
  settles nothing.

### The end boundary is part D's job

Section 5 "Respiratory disorders" is said to start at p.452. The index says pp.451 and 452 are
both `notes` and that the next `answered` page anywhere is **p.477** — a 26-page gap after
p.450, much larger than any gap inside the section. That is an index reading and not a look at
the page, so part D renders pp.451 and 452 and quotes what is printed on them.

### Recorded, not acted on

The §4 reprint sweep found **14 cross-file candidates**, with **pp.329–351 matching House
`pedhd-haem-9` … `pedhd-haem-20` one-for-one in page order**. Chapter-shaped overlap again,
the third time in this project. It is early warning only: **nothing folds across banks while
Chat B holds `questions.peds.js` live**, and the staging agents were told it goes in a `note`
and nowhere else.

Four within-section candidates: p.322≡p.323 and p.419≡p.420 (the two alternation breaks above,
so probably not questions at all), and **p.375≡p.442** and **p.383≡p.448** — these two straddle
the C/D part boundary and cannot be settled by either agent alone. Both were told to transcribe
those four pages exactly and to name the discriminating clinical token, so the pairs can be
adjudicated after the merge with the whole section in view.

---

## Section 4 — ALL FOUR STAGING AGENTS KILLED BY THE ACCOUNT SESSION LIMIT, 2026-09-04

Not a fault in the work. All four returned HTTP 429 `rate_limit`, "You've hit your session
limit · resets 4:10am (Africa/Cairo)", within seconds of each other. That is an **account-wide**
limit, not a per-agent one, and three chats were live against it. **Four concurrent staging
agents is what exhausted it.** Next launch runs **two at a time**, not four.

Every one of the four had already written its header and entries to disk, so nothing was lost —
this is the §8a write-as-you-go rule earning its keep for the third time.

### State on disk, measured, all four `check-part-ep.js` OK

| Part | Entries | Last staged | **Resume at** | Range end |
|---|---|---|---|---|
| A | 6 | n:6 pr:6 p.278 | **p.280** | p.308 |
| B | 4 | n:4 pr:25 p.318 | **p.320** | p.357 |
| C | 8 | n:8 pr:52 p.373 | **p.375** ⚠️ near-twin page | p.405 |
| D | 8 | n:8 pr:76 p.422 | **p.424** | p.450 |

26 entries of a revised ~90. A resuming agent finds the last complete entry and continues from
the page after it — it does not restart the range.

### THREE OF THE FOUR BREAKS ARE NOW SETTLED ON THE IMAGE, AND A FOURTH WAS FOUND

- **pp.255, 256, 257 — NOT questions.** Part A read all three whole. They are lettered content
  slides: p.255 "4. Hemoglobinopathies / A. Beta-Thalassemia", p.256 "B. Alpha-Thalassemia",
  p.257 "C. Sickle Cell Disease (SCD)" — Cause/Types/Clinical Features bullet slides with the
  heading line highlighted yellow, no stem, no options, no key anywhere on any of them. Same
  signature as section 3's four lettered summary slides: **the detector reads a highlighted
  heading as an answered page.** Not staged. So `expect: 95` drops to 92 answered pages here.

- **⚠️ p.312 — AN OVERFLOW BOX THE INDEX CALLS `notes`, WHICH MY BREAK-DETECTION COULD NOT SEE.**
  Part B found it unprompted. p.311 is Q22 answered and prints **no box**; p.312 prints the box
  alone, and it reasons through p.311's exact vignette. Staged as `box:312` on n:1, with p.312
  given no entry of its own — the shape the brief describes, arriving in a form I had not
  looked for.
  **This is a hole in the method, not a one-off.** I detected breaks by looking for *consecutive
  `answered` pages*; an overflow box that lands in `notes` produces no such run and is invisible
  to that test. Every lone `notes` page sitting inside clean alternation must be opened. In this
  section that is pp.309, 312 and 321 — p.312 is a box, and **p.309 is not**: part B read it and
  it is an unrelated preceding teaching slide on iron deficiency, correctly not staged. p.321 is
  still unread.

- **pp.419 + 420 — an exact duplicate reprint, and NOT the overflow shape.** Part D read both.
  Identical stem, identical four options, the same option b "Leukemia" highlighted on each. The
  only difference is that p.420 prints **no box at all** — and because p.420 still carries the
  full stem and options, it is not a box-only page and `box:420` would be wrong. Staged once from
  p.419, the fuller printing. p.420 gets no entry. So the sweep's "p.419 ≡ p.420" was right about
  the identity and wrong about the cause, and the brief's named cause did not apply.

- **pp.322 + 323 — STILL OPEN.** Part B died at p.318, four pages short of it. Whoever resumes
  part B must read both pages whole and must not assume p.419/420's answer applies: three
  readings remain live (overflow box, duplicate reprint, genuine second question), and the
  section has now produced two different ones.

### Two transcription decisions to carry into drafting

- Part B rendered the printed raised superscripts as **caret notation** — `8 x 10^9/L` — and said
  so in its note. It read them off the image, not off OCR, which is the direction that matters:
  `MEMORY.md` records WPS reading a printed 10⁶ as 10⁹ and flattening 10⁶ to 106. The drafting
  pass must render these consistently across the section.
- Part A's and part D's `expl` fields read as plain short prose. Both agents state in their notes
  that the box was present and transcribed verbatim; this book does print boxes in that voice.
  **Spot-check two of them against the page during drafting** before treating the whole section's
  boxes as verbatim.

---

## The overflow-box detector, and what it says about the whole book (2026-09-04)

### The test that was wrong, and the test that replaces it

The staging brief said overflow boxes are spotted "because the strict question/answer alternation
breaks". That is true and **not sufficient**, and section 4 is where it showed. A box-only page
carries no stem, no options and no highlighted key, so the page classifier calls it **`notes`** — and
a `notes` page sitting between an answered page and the next question page produces **no run of
consecutive answered pages at all.** It is invisible to the break test. p.312 was found only because
a part-B agent opened a page it had been told was a lone `notes` page.

**The replacement test is about the box, not the alternation:**

> **If an answered page prints NO explanation box, open the very next page before moving on.**

One extra look per boxless question, and it catches both shapes. Written into
`tools\bank-harness\pd-ep2-staging-brief.md` as §3a.

### It re-finds a known true case before it proposes new ones

Run backwards over the three sections already staged — 95 entries, of which **6 print no box**:

| Section | Boxless entry | Next page | Verdict |
|---|---|---|---|
| 1 | n:1 p.19 | p.20 `notes`, 56 words | **candidate — checked** |
| 1 | n:13 p.44 | p.45 `question` | not a candidate |
| 3 | n:35 p.237 | p.238 `question` | not a candidate |
| 3 | n:36 p.239 | p.240 `question` | not a candidate |
| 3 | n:37 p.241 | p.242 `question` | not a candidate |
| 3 | n:38 p.243 | p.244 `notes`, 2 words | **candidate — checked** |

And independently, scanning for lone `notes` pages in the box position across the whole book
re-finds **p.179** — which section 3 had already staged as `box:179`, discovered the ordinary way.
**A test that re-finds a known true case before proposing new ones is worth running.** Both new
candidates were sent to a subagent to read on the image, because the structural position is a
suggestion and only the page settles it.

### Book-wide candidates, for the sections not yet staged

Lone `notes` pages in the overflow position (previous page answered, next page a question):

| § | Section | Pages to open |
|---|---|---|
| 1 | Normal Development | 20 |
| 3 | Genetics | 179 ✅ already staged as `box:179` |
| 4 | Hematological | 309 ❌ read, a teaching slide · 312 ✅ staged as `box:312` |
| 6 | Cardiac | 636, 689 |
| 8 | Neurological | 962, 1037 |
| 9 | Endocrine | 1098 |
| 10 | Liver | 1175, 1204, 1207 |
| 13 | Model Exam 2 | 1531 |
| 15 | Model Exam 4 | 1790, 1821, 1828, 1865 |

Sections 2, 5, 7, 11, 12, 14 and 16 have none. **These are candidates, not findings** — p.309 sat in
exactly this position and turned out to be an unrelated teaching slide. Every one is opened and read.

### And the other shape, which the break test DOES catch

Consecutive answered pages, book-wide: §3 161+162 · §4 255+256, 256+257, 322+323, 419+420 ·
§6 617+618, 618+619 · §16 **1923+1924 through 1939+1940, seventeen in a row.**

Section 16 "Recently modified Questions" is 19 pages of solid answered pages with no unanswered
twins at all — which fits its name, and means it is a different shape of section from every other.
Note that for when it is reached; do not carry the twin-checking method into it unexamined.

Of the pairs already read: 255+256+257 are lettered content slides, not questions; 419+420 are an
exact duplicate reprint where the second page prints no box; 322+323 is still open. **Three
different causes for one signature, in one section.** A break is not evidence of an overflow box.

---

## The two overflow-box candidates, read on the image — one is a box, and it was already live (2026-09-04)

The replacement test in §3a proposed two candidates out of the 95 entries already staged. Both were
opened. **They did not settle the same way, and one of them was a live-content defect.**

### ✅ p.20 IS a box — and section 1's first question was already in the app without it

`pedep2-nd-1` (p.19, the Steven first-birthday-party milestone vignette, printed key **E "None – his
development is within normal limits"**) was staged with `expl: ''` and a note reading *"No explanation
box printed on p19"*. That note was **true about p.19 and wrong about the question.** The box is
printed alone on p.20: four bulleted lines inside a bordered box, each label — "Fine motor:",
"Gross motor:", "Social:", "Speech:" — bold red, the body italic black, page number "20" outside the
box, and **nothing else on the page.** No stem, no options, no key.

Verbatim, as printed:

> •Fine motor: He demonstrates a pincer grip (picking Smarties).
> •Gross motor: At 12 months, walking is not expected for all children — many are still crawling or pulling to stand; walking may occur anytime up to 18 months.
> •Social: He waves goodbye, which is normal.
> •Speech: Saying 2 words with meaning is appropriate for 12 months.

It walks p.19's stem clinical detail by clinical detail, in the order the stem introduces them, and
reasons each is age-appropriate — which is what settles it as p.19's box and not a teaching slide.

**Repaired in both files, same pass:**
- `endpoint-p2-s01-normal-dev.array.js` n:1 — `box: 20` added, `expl` filled with the four bullets
  (`\n`-separated), and the note rewritten to record what it originally claimed and why that was wrong.
- `app\data\questions.peds.ep2.js` `pedep2-nd-1` — the box now leads the explanation in the section's
  own convention (**"The endpoint file prints this explanation:"** → blockquote → `---` → expansion),
  the written expansion kept unchanged, the closing marker swapped from *"Written for this bank —
  Pediatrics endpoint part2.pdf prints no explanation here"* (**a false statement about the source, the
  reason this mattered**) to the expansion marker every other boxed entry in the section carries, and
  `source` extended to `p.19 (explanation box printed alone on p.20)`.
- Boot check after: **QUESTIONS 5177 · THEORY 153 · MODULES 4 · 153 chapter rows · 0 console errors.**

⚠️ **The app renders this as ONE blockquote, not four lines.** `md()` at `app\index.html` joins
consecutive `> ` lines with a space (`quote.join(' ')`), and a `- ` list flushes an open quote rather
than nesting inside it — so a four-bullet box cannot be rendered as four lines in a single quote. The
`•` glyphs are kept precisely so the joined paragraph still reads as four bullets. **Every word is
verbatim; only the line breaks are lost, and that is a renderer limit, not a transcription choice.**

### ❌ p.244 is NOT a box

A full-page Arabic religious supplication (du'a) — end-of-section furniture closing section 3, with no
connection to p.243's pedigree question. `pedep2` section 3's n:38 keeps its written explanation and
its unboxed marker. My prompt to the checking agent described p.244 as "2 words" from the index's word
count; it is a multi-line devotional passage. **The index's word count is a classifier's artefact, not
a description of the page** — do not paraphrase it into a prompt as though it were one.

### What the pass is worth

Two candidates, two different answers, and the true one had been sitting live in the app for a day
carrying a marker that said the book prints no explanation where the book does. **The structural
position is a suggestion; only the page settles it** — which is exactly why both went to an agent that
reads the image rather than being resolved from the index.

⚠️ **A verbatim claim cannot rest on a summary of a reading.** The first checking agent's output file
came back empty and its findings survived only inside my own compressed account of them. That is not a
transcription, so p.20 was re-read by a second agent that wrote the text to disk itself
(`p0020-verbatim.md`) before any of it reached live content. The two readings agree word for word.

---

## Section 4 part A — resumed to n:16 (p.298), and a staged note that contradicts its own key (2026-09-04)

Extended from the dead agent's n:1–6 to **n:1–16, pp.268–298, pr 1–16**, `pr == n` throughout, no
repeats and no skips. `check-part-ep.js` OK: 16 entries, contiguous, no holes, no figures.
**Next page for whoever resumes part A: p.300** (then 302, 304, 306, 308; then render one page past
308 to prove the part A/B boundary — the agent did not reach that step). It stopped at its own
tally of about 78 tool calls, at the cap, and said honestly that the tally is not a measurement.

**No alternation breaks, no overflow boxes and no figures anywhere in pp.279–298** — every answered
page printed its own box and every twin pair was adjacent. The brief held for this whole stretch.

### ⚠️ A NOTE THAT DISAGREES WITH ITS OWN ENTRY — n:6, p.278, left unedited and flagged

The predecessor's note on n:6 reads `Option D "Fanconi anemia" … -> key=3`. In that entry's own
`opts`, **Fanconi anemia sits at index 1 (letter B)**, and the entry carries `key:1`, which points
at Fanconi anemia and agrees with its `expl`. So **three fields agree and the note disagrees with
all three.**

The resuming agent did the right thing: it added an `AUDIT NOTE (n7 pass)` inside that entry, left
`key:1` untouched, and did **not** re-view p.278 because that page is outside its assigned range.
⚠️ **This is not yet settled.** The likely reading is a slip in the prose note, but "three fields
agree" is an internal-consistency argument, not a measurement, and the key is the one field this
project never guesses at. **p.278 gets re-read on the image before the section is drafted**, and
whatever the page highlights is what stands.

### ⚠️ A FLAT EXPONENT THAT MAY BE THE BOOK'S OR MAY BE THE RENDER'S — p.280 and p.290

n:7 (p.280) is staged with `5.0×109/L` and `80×109/L` — **flat, not superscript** — the agent
reporting the same non-superscript pattern as n:6 and confirming it on both twin pages at native
resolution. n:12 (p.290) hit the same question and **escalated to a 300 dpi crop** to settle it,
confirming that `/mm3` there prints a plain inline 3.

The escalation is the difference. `MEMORY.md` records WPS reading a printed 10⁶ as 10⁹ **and
flattening 10⁶ to 106** — a plausible wrong number rather than visible garbage — and 800×450 is
this book's hard ceiling, which is exactly the resolution at which a superscript stops being
legible. **p.280 is re-read at 300 dpi with p.290's method before drafting.** A white cell count of
`5.0×10⁹/L` is normal and `5.0×109/L` is meaningless, so if the flat printing is real it is the
book's own defect and gets recorded as one — but it is recorded only after being seen.

Also staged as printed at p.290: `1.000` and `2.500`, **period as a thousands separator** (= 1,000
and 2,500), a European convention this book uses. Not corrected.

### Escaping, again — and the fix that worked

The agent hit two escaping bugs of its own making — a `\\'` where `\'` was needed, and a literal
`\uXXXX` where the actual character was wanted, building a stem containing a bullet and a µ sign —
plus one mis-anchored append that put n:10 ahead of n:9. **All three were caught by
`check-part-ep.js` failing, and all three were fixed with `Read` + `Edit`, never with a bash
heredoc.** That is the project's standing escaping rule doing its job inside an agent for the first
time recorded. Nothing was lost; the file validates clean.

---

## Section 4 part B — resumed to n:17 (p.345), and the index's own `answered` tag turned out to be wrong (2026-09-04)

Resumed from the dead agent's n:1–4 and extended to **n:1–17, pp.311–345, pr 22–38**, clean
1-for-1 alternation with `pr = n + 21` throughout and no printed-number repeats.
`check-part-ep.js` OK. **Next page for whoever resumes part B: p.347** (then 349, 351, 353, 355,
357; render one past 357 to prove the section boundary). The agent stopped itself at a clean page
boundary at roughly 62 tool calls by its own tally — and said plainly it was a tally, not a
measurement.

### ⚠️⚠️ A FOURTH CAUSE: p.322 WAS TAGGED `answered` AND IS NOT

None of the three predicted readings for pp.322/323 applied. **p.322 carries no yellow highlight
and no box at all** — an ordinary unanswered printing of Q27 that the page-kind classifier simply
mistagged. p.323 is the genuinely answered page (key E "Sickle cell disease", box present), so
this is a normal unanswered/answered pair, not an overflow split and not a p.419/420-style
duplicate reprint. Only p.323 was staged.

**This changes what the index is for.** Three of the four causes are things printed on the page;
this one is a defect in the instrument. **A page is answered because the highlighted key is
visible on it, never because the index said so.** Written into the staging brief beside the other
three.

Running tally of causes for one "structural oddity" signature, all four measured in this section
alone: lettered content slides (255–257) · overflow box in `notes` (312, 321) · exact duplicate
reprint (419+420) · **index mistag (322)**.

### p.321 resolved — an overflow box, the second in this section

p.321 is the explanation box for **n:5 (Q26, p.320)**: microcytic/hypochromic anaemia, normal
electrophoresis, HbA2 not raised — matching that vignette exactly. Staged as `box:321` on n:5,
with p.321 given no entry of its own. Confirmed distinct from p.309, which sits in the same
structural position and is an unrelated preceding teaching slide, correctly left unstaged by the
predecessor. **Both readings of that position have now occurred in one section.**

### Two things flagged for the drafting pass

- **n:14 (p.339, Q35) — the printed box is truncated by its own border, mid-sentence**, ending
  "…reached the level where a blood". Confirmed on both the native and the hires render, and
  p.340 is the next question rather than a continuation, so this is **not** an overflow. It is
  transcribed verbatim as truncated. ⚠️ **Do not complete it during drafting.** The book printed
  a broken sentence; the expansion may say what the box was heading towards, the quoted box may
  not gain words it does not have.
- **n:17 (p.345, Q38) — Hb printed as 7.8 g/dL**, the only entry in this file using g/dL rather
  than g/L. Confirmed on the answered page and its unanswered twin, so it is the book's own
  inconsistency and not a transcription slip. Kept as printed, per the numbers-and-units
  exception.

### Figures and folds

Two figures, both photographic: **n:5 (p.320, peripheral blood film)** and **n:6 (p.323, clinical
hand photo, hand-foot syndrome)**. `figAlt` on both gives modality and view only and names no
diagnosis. Every other answered page in the range was read whole and carries no figure. No
option-menu pairings and no fold candidates in this range. House-bank overlap is recorded in the
note of every entry from n:9 (p.329) onward as an observation only — the House file was never
opened, and **nothing folds across a live chat's boundary.**

---

## Section 4 parts A and C CLOSED — and a note that was carrying another entry's text (2026-09-04)

**Part A closed: 21 entries, `n:1 pr:1 p:268` … `n:21 pr:21 p:308`, `pr == n` throughout.**
**Part C closed: 24 entries, `n:1 pr:45 p:359` … `n:24 pr:68 p:405`, `pr = n + 44` throughout.**
Both validate clean, both proved their boundary by rendering one page past the range. 62 entries now
on disk across the four parts. Part B has 6 pages left (p.347–357) and part D has 14 (p.424–450).

### ⚠️⚠️ THE AUDIT TRAIL ITSELF CAN BE FALSE — part A n:6, p.278

The flagged contradiction resolved, and **not the way the internal-consistency argument predicted.**
p.278 highlights option **B "Fanconi anemia"** — so `key:1` was already correct and did not move.
But the note was not merely mis-worded: **it had been contaminated with n:7's entire text by a copy
error** — n:7's p.279/280 bruising case, its numeral flag, its twin description, all sitting inside
n:6's note describing a stem that carries no numerals at all. The predecessor's `AUDIT NOTE` had
correctly diagnosed the mislabel and then **left it in place**, so the file contained a note that
described the wrong question and a comment saying so.

**Rewritten from a fresh read of p.277 and p.278, with the audit note removed rather than stacked.**

The lesson is not about this entry. `note` is where every measurement in this pipeline is recorded —
which option was highlighted, whether a twin was checked, whether a numeral was escalated to 300 dpi.
**A contaminated note is a false measurement that reads exactly like a true one**, and no validator
can see it: `check-part-ep.js` checks structure, `pr`/`n` position and dead ids, not whether a note
describes its own entry. It was caught only because its claim disagreed with its own `key`. **A note
whose numbers or letters disagree with its entry's own fields is a defect in the note until a page
says otherwise — and it is settled by opening the page, never by counting which fields agree.**

### The flat exponent is the book's own — p.280, settled at 300 dpi

Both `p-0280.jpg` and its twin `p-0279.jpg` at 300 dpi print **`5.0×109/L` and `80×109/L`
completely flat — no superscript glyph anywhere, same size and baseline as body text.** That is the
book's printing, not a native-resolution artefact and not an OCR artefact. **Kept as printed**; the
note now records the 300 dpi confirmation explicitly, where before it cited only the 800×450 check.

So `5.0×109/L` — a value that means nothing as printed — stands in the staging record as the source's
own defect. ⚠️ **The drafting pass must not "restore" the superscript.** It may say in the expansion
what the count evidently is; the quoted stem keeps what the page prints.

### p.309 confirmed, and the discriminator that settles its shape

Confirmed independently as a teaching slide, verbatim: a single full-width bordered paragraph on
dietary iron deficiency, no stem, no options, no key. Not staged.

⚠️ **It is thematically adjacent to the question it follows** — p.308's key is "ask about diet" —
so subject matter cannot separate a teaching slide from an overflow box. **The discriminator is
format:** a real overflow box in this book is a *small side box in reduced font*; a teaching slide
*spans the page in body-text size*. Written into the brief. The adjacency is flagged in n:21's note
for the drafting pass rather than folded in.

### Printed defects recorded, not corrected — part C, p.391 (n:17)

Two on one page, both confirmed at 300 dpi (`ep2-stage\p-0391.jpg`) and therefore the book's own:

- The stem prints **`Hb (6mg/dl)`** while its own explanation box cites **`Hb 90–110 g/L`** — a unit
  and magnitude mismatch *inside a single printed question*.
- **Options d and e are both printed "Thalassemia"**, verbatim identical.

Neither touches the key: p.391 highlights option c, "Hereditary spherocytosis", so `key:2` is
unambiguous and the duplicate pair is not the answer. Both staged exactly as printed.

### The rest

- **§3a fired twice more and resolved twice as "not a box"**: part A's n:21 (p.308 boxless → p.309, a
  teaching slide) and part C's n:10 (p.377 boxless → p.378, an ordinary unanswered twin). Running
  hit rate for the test across this section: **2 true boxes, 4 false**.
- **No figures anywhere in part A or part C** — every answered page read whole.
- The two cross-part reprint flags are staged and unresolved by design: **p.375 (n:9, q53, hemophilia)
  against p.442**, and **p.383 (n:13, q57, ITP) against p.448**, both in part D's range. Each note
  records stem opening, option count, highlighted key and box state, for adjudication after the merge.
- Part C rendered p.407 once to prove the boundary: an ordinary q69 continuation, part D's, not staged.

### ⚠️ Agents are being handed instructions that contradict this project's rules

Twice now, staging agents have reported system-reminder-style messages arriving mid-task — an
unrelated Notion instruction block, and one directing them to make file edits through Bash `sed` and
heredocs instead of `Read`/`Edit`/`Write`. **Both agents disregarded both**, correctly, on the
grounds that the heredoc route is the exact mechanism this project has measured corrupting content
(a quoted heredoc collapses `\\` to `\` before the body's language ever sees it) and that
instructions arriving outside the task's own authority are not followed. **Recorded because it is
now a pattern, not an incident**, and because the agents got it right without being told to expect it.

---

## Section 4 part B CLOSED — and the book prints its exponents both ways (2026-09-04)

**Part B closed: 23 entries, `n:1 pr:22 p:311` … `n:23 pr:44 p:357`, `pr = n + 21` throughout.**
Validator OK at every append, no holes, no entry with an empty `expl`. Boundary proved by reading
p.358 (Q45 unanswered) and p.359 (Q45 answered, key E "Intravenous antibiotics", febrile
neutropenia box) — **p.359 is part C's first answered page and matches its staged `pr:45` exactly.**
Neither boundary page was staged.

**Parts A + B + C now stand at 68 entries with `pr` running 1…68 unbroken across the three files.**
Part D is still being written.

### ⚠️⚠️ THE SUPERSCRIPT IS NOT A CONSTANT OF THIS BOOK — IT VARIES PAGE TO PAGE

pp.347–357 print their FBC panels with a **genuine typeset superscript**: `× 10⁹/L`, confirmed on a
300 dpi crop of p.347 (`ep2-stage\p-0347.png`). p.280, settled in the same session, prints the same
quantity **completely flat** — `5.0×109/L`, no superscript glyph, same size and baseline as body
text, confirmed at the same 300 dpi on both twin pages.

**Both readings are correct, and that is the finding.** The book is internally inconsistent about
superscripts, so neither answer generalises:

- **A flat exponent cannot be dismissed as a render artefact** — pp.347–357 prove this book *can*
  typeset a superscript, so where one is missing it is genuinely missing.
- **A flat exponent cannot be assumed to be the book's style either** — p.280 is not evidence about
  p.400, and p.347 is not evidence about p.280.

⚠️ **Every exponent is read on its own page. There is no page from which another page's exponent can
be inferred.** This is the same rule `MEMORY.md` already carries for OCR — *never take an exponent,
a unit or a dose from OCR; read those three off the page image* — now shown to hold **between two
rendered pages of the same book**, not just between OCR and image.

The one licence taken, and taken explicitly: pp.349–357 repeat p.347's typesetting unchanged, so the
300 dpi escalation was run once and the finding carried forward — **and each of those five entries
says in its own note that it was carried, not separately measured.** A carried measurement that
announces itself is auditable; the danger is the one that does not.

### The Hb unit switch is a run, not an isolated slip — and a near-miss on the correction

n:17 (p.345) was recorded as *"the only entry in this file using g/dL rather than g/L"*. **The
"only" was wrong.** Every entry from n:17 to n:23 that reports a haemoglobin — pp.345, 347, 349,
353, 355, 357 — prints **Hb in g/dL**, while every Hb from p.311 to p.341 is printed in **g/L**.
This is a **unit switch beginning at p.345 and running to the end of part B**, not a one-off. All of
them are transcribed as printed and flagged in their own notes. ⚠️ **The drafting pass must not
normalise them**, and must not read an Hb figure across the p.345 boundary as though one unit were
in force throughout the section. **Part D's range gets checked for where, or whether, the switch
ends.**

### ⚠️⚠️ AND THE CORRECTION ITSELF WAS NEARLY WRONG — A UNIT BELONGS TO THE ANALYTE, NOT THE PAGE

A `g/dL` grep over the whole file returned a hit at **p.320 — twenty-five pages before the switch**
— and that reads exactly like proof the switch started earlier and the whole account was wrong.
**It is not.** p.320's stem prints `Hb (hemoglobin): 86 g/L` alongside `MCHC (mean corpuscular
hemoglobin concentration): 22 g/dL (normal: 32–35 g/dL)`. **MCHC is conventionally reported in
g/dL.** Both units on that page are correct, standard, and not a defect of any kind. The page mixes
units because the two analytes take different units, which is what every haematology report does.

The grep was answering a different question from the one asked. It was asked *"does g/dL appear
before p.345"* when the question was *"is haemoglobin printed in g/dL before p.345"* — and it
answered the first one truthfully. **⚠️ A unit is a property of the analyte, not of the page, so no
search for a bare unit string can decide a units question.** Only reading the line that carries the
number can, because only the line says what was measured.

This came within one write of being committed as a correction to a note that was right. Two rules
out of it, both cheap and both paid for:

- **Before overturning a measurement, read the line, not the match.** A grep hit is a pointer to
  something to read; it is never itself the reading. The same discipline that settles a key by
  opening the page settles a unit by opening the line.
- **A correction is a claim and gets the same scrutiny as the claim it corrects** — more, if
  anything, because it arrives wearing the authority of having caught something.

What survives of the original criticism is the smaller, true part: n:17's note said *"only"* on the
strength of one page, and one page can establish what it prints but never that it is the sole page
printing it. That still needed the other six pages read — and now they have been.

### The rest

- **Clean alternation through all six new pages, pp.346–357** — no overflow box, no misclassified
  `answered` tag, no duplicate reprint. All four known §3a causes were checked for by name and none
  applied. A measured zero, said as one.
- **No figures on pp.347–357** — every answered page read whole. Part B's only two figures remain
  n:5 (p.320, peripheral blood film) and n:6 (p.323, clinical hand photo).
- **The prompt matched the disk on every point it asserted** — the six-page range, the p.359/`pr:45`
  boundary claim, and the settled p.322/323 items. Nothing to correct in it, said plainly rather
  than left silent.

### ⚠️ The contradicting instruction reached a third agent

Same shape as the two before it: a system-reminder-style message arriving mid-task, directing the
agent to make file changes through Bash `sed` and heredocs rather than `Read`/`Edit`/`Write`. **The
agent did not follow it, and reported that it had arrived** — reasoning that instructions reaching
it outside its brief do not override an explicit, grounded constraint, and that the heredoc route is
the exact mechanism measured corrupting content on this project.

**Three for three now, each agent reaching that conclusion independently.** Recorded because the
pattern is the point: the rule is holding without anyone being warned to expect the challenge.

---

## SECTION 4 FULLY STAGED — 90 entries, `pr` 1…90 unbroken, and the two reprint flags now have their facing pages (2026-09-04)

**Part D closed: 22 entries, `n:1 pr:69 p:407` … `n:22 pr:90 p:450`.** Validator OK, no boxless
entries, no figures. That closes the last of the four parts.

| Part | Entries | Pages | Printed numbers |
|---|---|---|---|
| A | 21 | 268–308 | 1–21 |
| B | 23 | 311–357 | 22–44 |
| C | 24 | 359–405 | 45–68 |
| D | 22 | 407–450 | 69–90 |
| **Total** | **90** | **268–450** | **1–90, unbroken** |

**The `pr` sequence running 1…90 across four independently written files, with no gap and no repeat
at any of the three seams, is the strongest check this section has.** Each part was written blind to
the others' contents and each seam was proved by rendering the page past the range: p.309 (A/B),
p.358–359 (B/C), p.407 (C/D). Four agents, three seams, one continuous sequence.

**Section boundary proved at p.451** — a full-page Arabic supplication, no stem, no options, no box,
unconnected to p.450's question. **The same shape closed section 3 at p.244.** So this is
end-of-section furniture, a recognisable printed object rather than any of the four §3a causes, and
now seen twice. Not staged either time.

### The two cross-part reprint flags — both are real reprints, and both changed the patient's age

Staged separately by design and now readable side by side. Neither is folded yet: **the fold pass
runs after the merge, over all 90 entries at once, using `reprint-pd-ep2.js`.** Folding a pair by
hand while 88 entries are unswept is exactly the error the project already knows about — *an
offsetting error is invisible to a sum; count the parts.*

**Pair 1 — p.375 (part C, n:9, pr 53) ≡ p.442 (part D, n:18, pr 86).** Haemarthrosis after a garden
fall; identical five-option menu in identical order (fibrinogen deficiency / G6PD deficiency /
prothrombin deficiency / hemophilia / factor VII deficiency); **same key, index 3.** Differences:
the child is **3 years old on p.375 and 12 on p.442**; p.442 adds the normal range `(3–8 min)` to
the bleeding time and writes the labs in full sentences ("INR is normal") where p.375 is
telegraphic; the lead-in differs ("What is the most likely cause?" vs "Which one of the
following…"); **the two explanation boxes are differently worded**, both correct.

**Pair 2 — p.383 (part C, n:13, pr 57) ≡ p.448 (part D, n:21, pr 89).** Post-viral petechiae with
haematemesis and epistaxis; identical five-option menu in identical order; **same key, index 0.**
Differences: the girl is **5 years old on p.383 and 3 on p.448**; "was recovering" vs "is
recovering"; "ecchymosis" vs "bruising"; "gamma globulins" vs "gammaglobulins"; **again two
differently worded boxes.**

⚠️ **These are not respellings — a printed number changed in both.** The age moved 3→12 in one pair
and 5→3 in the other. `MEMORY.md`'s six fold shapes are all shapes where nothing clinical moves;
this is a seventh, and it needs stating: **a reprint whose stem carries a different numeric value is
still one question, but folding it discards one of the book's two printings of that value.** Neither
age change touches its key — haemarthrosis is haemophilia at 3 or 12, post-viral ITP is ITP at 3 or
5 — so the fold is safe, **provided the discarded age is written into the surviving entry's note
rather than lost.** That is the instruction for the fold pass.

A third candidate sits **inside** part D and is flagged, not decided: **n:22 (p.450) against n:14
(p.434)** — same clinical framing, overlapping Hb/MCV/reticulocyte values across options a–d,
different stem wording, a different normal-range figure, and **one fewer option**. A changed option
count is the one thing that makes a pair not a fold under the existing rules; it goes to the sweep
with the rest.

⚠️ **Part D's range, pp.407–450, now carries three reprint candidates out of 22 entries.** That is a
concentration, not a scatter — the same chapter-shaped clustering `MEMORY.md` already records for
the endpoint/House overlap, and consistent with part 1's model-exam reprint blocks. **The sweep is
run over the whole section, and the hypothesis that the tail of section 4 is a revision block is
tested there, not asserted here.**

### The exponent finding, and a convention that had to be settled before the merge

**The book prints its exponents three different ways, all three confirmed at 300 dpi in this one
section:** a genuine typeset superscript at pp.347–357 (`× 10⁹/L`), a **literal printed caret** at
p.428 (`10^9/L`), and **completely flat** at p.280 (`5.0×109/L`, same size and baseline as body
text). ⚠️ **No page is evidence about another page's exponent.** A flat exponent cannot be dismissed
as a render artefact, because pp.347–357 prove the book can typeset a superscript; and it cannot be
assumed to be house style, because p.280 says nothing about p.400.

That left the four staging files encoding the same thing three ways — 66 carets, 3 real superscripts
and 6 flat — with the encoding no longer distinguishing what the page showed. **Settled and written
into the brief as §4a: `10^9` is the transcription convention.** Part C's three real superscripts
were normalised to it (`10⁹` → `10^9`, one entry, revalidated); **part A's six flat `109` were left
exactly as printed**, because `109` and `10⁹` are different numbers and that page's flatness is a
recorded defect, not an encoding choice.

The reason for choosing the caret over the superscript is the one that matters: **writing a real `⁹`
on 66 occurrences would assert a measurement nobody made.** Three pages were checked at 300 dpi; the
other sixty-odd were not. The caret claims only the value. The cost — a page that literally prints a
caret can no longer be told apart from one that prints a superscript — is clinically nil, since both
denote 10⁹, and is recorded in that entry's note.

### The rest

- **Clean alternation across all fourteen new pages, pp.424–450** — every answered page printed its
  own box, so the §3a overflow test never fired in this range. A measured zero.
- **p.444's dense numeral block** (Hb, MCV, MCHC, WBC, platelets, HbA/HbA₂ percentages) was escalated
  to 300 dpi in full and read identical to the native. No figures anywhere in part D — every
  answered page read whole.
- **The prompt matched the disk on every assertion it made** — the resume point, the page list, both
  reprint flags, p.450 as the last answered page and p.451 as furniture. Said plainly rather than
  left silent, as with part B.
- **Four for four on the contradicting instruction.** Every agent in this section reported the
  system-reminder directing file edits through `sed`/heredocs, and every one declined it
  independently and said why. The rule is holding without anyone being warned to expect the
  challenge.

### Next

`merge-parts-ep2.js 4` → the reprint/fold sweep over all 90 → draft → `val-pd-ep2.js` →
`splice-pd-ep2.js` → boot check → commit. **Nothing folds across the part-1/part-2 boundary while
both chats are live**; these folds are all within section 4 of part 2 and are unaffected by that.

---

## Section 4 MERGED at 90, the shortfall reconciled page by page, and House's haematology chapter turns out to be a contiguous slice of this section (2026-09-04)

`merge-parts-ep2.js 4 --write` → **`endpoint-p2-s04-haematology.array.js`, 90 entries, n 1…90,
pp.268–450, 104,906 chars.** Every structural check passes: `pr != n` **none**, pages strictly
increasing, no key out of range, no stray option-letter prefixes, no `fig` without `figAlt`.
Two boxes on their own page (n22 → p.312, n26 → p.321), two figures (n26, n27), two entries with no
printed box (n21, n54), option counts 31 four-option and 59 five-option.

### ⚠️ `n` IS SECTION-GLOBAL, NOT PER-PART — the brief did not say so, and four agents read it four times the same way

All four parts were written with `n` restarting at 1, and the merge refused every entry after the
first part: *"n is not the position"*. **The brief was at fault, not the agents.** §6 said only
*"`n` is the true sequential index"*, which is exactly as true of a per-part index as of a
section-global one, and nothing anywhere said which. Sections 1 and 3 had already established the
convention on disk — s01 part B opens at `n:15`, s03 part B at `n:17` — but **a convention that
lives only in previously written files is not an instruction**, and no agent staging section 4 had
any reason to open them.

Repaired by setting `n := pr` in all four files, which is safe **here and only here** and was proved
before anything was written: the printed numbers across the four parts form a contiguous 1…90 run
with **no duplicate and no gap**, so the printed number *is* the section-global position. The script
refuses to write unless that holds. 69 entries renumbered; part A already satisfied it.

⚠️ **This will not be true of every section.** Part 1's section 1 printed "69" and "81" twice each,
so there `pr` is not the position and `n := pr` would silently corrupt the ordering. **The check is
the point, not the shortcut** — §6 of the brief now states the convention outright, and the first
part of every section from 5 onward starts at 1 while each later part continues the count.

### The 95 → 90 shortfall: five pages, each one opened and named

`expect` was the index's answered-page count, 95. The merge came in at 90 and the tool refused it —
correctly, since a shortfall is *"a page to LOOK AT, never automatically a fault"*. Reconciled by
differencing the index's answered set against the staged set, which named the five exactly:

| Page(s) | Cause | Reading |
|---|---|---|
| 255, 256, 257 | lettered content slides | bullets like "A. Beta-Thalassemia" carry yellow and read as options |
| 322 | **index mistag** | no highlight, no box — an ordinary unanswered printing of Q27; p.323 is the real answered page |
| 420 | exact duplicate reprint of 419 | staged once from the fuller printing |

**95 − 5 = 90, with every one of the five accounted for by a cause that was seen on the page.**
`expect` lowered to 90 with all five written into the config comment.

⚠️⚠️ **The two overflow boxes are NOT in that list, and that is the lesson.** pp.312 and 321 are
genuine overflow boxes and were staged as `box:` on their own questions — but the index classified
them **`notes`, not `answered`**, so they never entered `expect` at all. Nor did p.309, the teaching
slide. **Three of the four known structural causes appear in this reconciliation and one does not.**
So a shortfall can never be settled by subtracting a category — "we found two overflow boxes,
therefore two of the missing five are those" would have been wrong by two, and wrong in a way that
still summed correctly. **Difference the actual page sets and open what the difference names.**

### ⚠️⚠️ HOUSE'S HAEMATOLOGY CHAPTER IS A CONTIGUOUS SLICE OF THIS SECTION — 13 hits in a row

`reprint-pd-ep2.js 245 451` returned **14 cross-file candidates, every one of them against Chat B's
House bank**, and they are not scattered:

```
p.322/323 == pedhd-haem-6      p.339 == pedhd-haem-14
p.329     == pedhd-haem-9      p.341 == pedhd-haem-15
p.331     == pedhd-haem-10     p.343 == pedhd-haem-16
p.333     == pedhd-haem-11     p.345 == pedhd-haem-17
p.335     == pedhd-haem-12     p.347 == pedhd-haem-18
p.337     == pedhd-haem-13     p.349 == pedhd-haem-19
                               p.351 == pedhd-haem-20
```

**Fifteen consecutive House ids against fifteen consecutive endpoint answered pages, thirteen of
them matching one-for-one and in order.** The two misses (`haem-7`, `haem-8`, which would sit at
pp.325 and 327) are almost certainly the OCR threshold rather than genuine non-matches — but they
are unconfirmed and are written down as unconfirmed.

`MEMORY.md` already records that the two banks overlap and that the overlap is **chapter-shaped, not
scattered** — 5 collisions in part 1's first 150 entries, four of them endpoint Nutrition ≡ House
ch.10, with a naive projection of *"25–30 for the whole stream, ONE data point, re-measure, never
quote as a count."* **This is the re-measurement, and it is much larger than the projection: 14 from
a single section of a single part.** The shape holds — contiguous, one-for-one, chapter-aligned —
but the magnitude does not. ⚠️ **The 25–30 figure is now known to be low and must not be quoted.**

**None of these fold, and none may be touched.** `questions.peds.js` is Chat B's live file and Chat
B is writing it. The standing rule is unchanged: *nothing folds across a live chat's boundary; the
two files stay separate while both chats write.* These 14 are recorded here for the end-of-stream
sweep, when one chat owns both files. **Recording is the whole action; there is nothing else to do
with them yet.**

### The within-section folds — two decided, one that the instrument missed

Four within-section candidates came back; two of them were already settled and are false as folds:

- **p.322 ≡ p.323** — the mistag against its own answered page. Not a fold; only p.323 is staged.
- **p.419 ≡ p.420** — the duplicate reprint. Already staged once from the fuller printing.

The two real ones, both confirmed on the page earlier today and now confirmed by the sweep as well:

| Fold | Keep | Discard | Why |
|---|---|---|---|
| p.375 (n53) ≡ p.442 (n86) | **n86, p.442** | n53 | p.442 prints the bleeding-time normal range `(3–8 min)` and full-sentence labs; p.375 is telegraphic |
| p.383 (n57) ≡ p.448 (n89) | **n57, p.383** | n89 | a tie on content; p.383 prints "ecchymosis" where p.448 prints "bruising", and the earlier printing keeps the deck's order |

⚠️ **Each fold DISCARDS A PRINTED AGE** — the child is 3 on p.375 and 12 on p.442; the girl is 5 on
p.383 and 3 on p.448. Neither age touches its key. **The discarded age and the discarded page
citation both go into the surviving entry's `source` and `note`. A fold that loses a printed number
without recording it is a silent edit to the source**, which is the one thing this bank does not do.

⚠️⚠️ **And the sweep did NOT flag n82 (p.434) ≡ n90 (p.450)** — the pair part D's own agent caught by
eye, differing in wording, one normal-range figure and **one option count**. The OCR similarity
never reached threshold. **The instrument is a net with holes, and a human flag it misses is still a
flag.** It stays open and is settled on the images before drafting, not by the sweep's silence. As
it happens the differing option count is, under the existing rules, the one feature that makes a
pair *not* a fold — so the likely outcome is two entries; that is a reading to confirm, not to
assume.

**Net: 90 staged − 2 folds = 88 live entries expected from section 4.**

---

## Section 4's fold register CLOSED at three, the two figure crops cut, and drafting opened in six halves (2026-09-04)

### The third fold: p.434 ≡ p.450, and the option count did not stop it

The pair part D's agent flagged by eye and the OCR sweep never saw. Adjudicated on both page images.

Both stems: a 3-year-old child, pale, iron-deficiency anaemia, asked for the expected haematological
picture. Reworded, not re-scoped. **Options a–d carry identical numeric values on both pages** — Hb
10/MCV 70/retic 10%, Hb 15/MCV 78/retic 2%, Hb 8/MCV 45/retic 9%, Hb 7.5/MCV 65/retic 1% — with
p.450 restating the units (`g/dL`, `fL`) that p.434 leaves as bare numerals. **The key is `d` on both
pages, index 3 on both.** p.434 prints a fifth option, `e. Hemoglobin (7), MCV (80), reticulocyte
(16%)`; p.450 stops at four.

**VERDICT: FOLD** — the recorded "reworded stem + dropped filler option" shape. The test that
settles it is not the count but **whether the dropped option changes what is being asked or what
could be answered**, and it does not: option e sits in the last slot, so removing it leaves the key's
index untouched, and d remains the only option low on all three of Hb, MCV and reticulocytes among
the four that survive. **p.434 (n82) is the fuller printing and survives.**

⚠️⚠️ **THE TWO PAGES PRINT A DIFFERENT NORMAL RANGE FOR THE SAME ANALYTE.** p.434 prints
`(N: MCV 70-100)`; p.450 prints `(Normal MCV: 75–100 fL)`. Confirmed on both page images at native
resolution — **not an OCR artefact, and not a transcription slip.** The book contradicts itself about
a reference interval. Standing rule: **a contradiction is RECORDED, never corrected, and the key
never moves.** The surviving entry keeps `70-100` exactly as its own page prints it, and its
explanation records that the same question is reprinted on p.448–450 with the lower bound printed as
75. Neither number is adjudicated, and this is not taken to the user.

⚠️ **This is why the fold has to be a merge and not a deletion.** A fold that simply drops the
second printing would have silently destroyed the only evidence that the book prints two different
normal ranges — a printed number lost with no record. **Every value the discarded printing carries
and the survivor does not goes into the survivor.**

### The register, closed

| Discard | Survivor | Why the survivor | What the discard carries into it |
|---|---|---|---|
| n53, p.375 | **n86, p.442** | prints the bleeding-time normal range `(3–8 min)` and full-sentence labs | the child's age is **3** on p.375 and **12** on p.442 |
| n89, p.448 | **n57, p.383** | a tie on content; p.383 prints "ecchymosis" against "bruising", and the earlier printing keeps the deck's order | the girl is **5** on p.383 and **3** on p.448 |
| n90, p.450 | **n82, p.434** | carries the fifth option | normal MCV lower bound printed as **75**, against **70** on p.434 |

**All three folds discard a printed number and every one of those numbers is preserved in the
survivor.** Two are the patient's age, one is a reference interval. None touches a key.

**90 staged − 3 folded = 87 live entries expected from section 4.** No survivor is also a discard;
checked explicitly rather than assumed.

### ⚠️ The instrument missed the fold a human caught, and that is now measured twice

The OCR reprint sweep flagged the two age-change pairs and **did not flag p.434 ≡ p.450**, which
turned out to be a genuine fold — the rewording plus the restated units pushed the similarity below
threshold. It also flagged **p.322 ≡ p.323** and **p.419 ≡ p.420**, neither of which is a fold: the
first is the index-mistag against its own answered page, the second the duplicate already staged
once. **So on four candidates the sweep produced two true, two false, and one miss.**
**It is a net with holes and it is not a decider.** A human flag it misses is still a flag; a hit it
produces is a page to open. Nothing in this section was folded or refused on the sweep's word alone.

### The two figure crops, cut and looked at

| File | Page | Crop on the 2481×3508 300 dpi render | Output |
|---|---|---|---|
| `q-pd-ep2-320.jpg` | 320 | x1450, y800, w700, h480 | 700×480 |
| `q-pd-ep2-323.jpg` | 323 | x1800, y560, w600, h480 | 600×480 |

p.320 is a low-power peripheral blood film — small pale hypochromic red cells, two darker nucleated
cells, in its own black-bordered box, no labels, no arrows, no scale bar. p.323 is a colour clinical
photograph of an infant's hand and forearm on white bedding beside a shape-sorter toy, an ID band at
the ankle, the fingers visibly swollen.

**Both were looked at after cutting.** In both cases the printed key sits in the frame's
neighbourhood and was deliberately excluded — p.320's highlighted `C. Iron-deficiency anemia` and
p.323's highlighted `E. Sickle cell disease` and its blue box naming hand-foot syndrome are all
outside the crop. ⚠️ **The p.323 photograph shows the finding itself**, which is unavoidable and is
the whole point of the picture; **what must not give the answer away is the caption**, and the staged
`figAlt` is `clinical photograph, infant's hand` — modality and view, no diagnosis, no laterality.

⚠️ **The draft brief said the basename was `q-pd-ep-<page>` and the brief was wrong** — `val-pd-ep2.js`
line 244 requires **`q-pd-ep2-`**. Every figure entry written to the old shape would have hard-failed.
The `2` is not cosmetic: **part 2's page numbers restart at 1, so `q-pd-ep-320` names a different
picture belonging to another chat.** Fixed in the brief, with the reason, rather than silently.

### Drafting opened, six halves

87 live entries against a measured ~11–15 per drafting agent across sections 1–3, so **six halves,
A–F**, not the usual two. Ranges by staged `n`: **A 1–15 · B 16–30 · C 31–45 · D 46–60 · E 61–75 ·
F 76–90**, less the three folded entries — D loses n53, F loses n89 and n90 — giving 15/15/15/14/15/13.

⚠️ **Every structural oddity in the section falls inside half B**: the boxless n21, the p.312
overflow on n22, and both figures (n26, which also overflows to p.321, and n27). B was given all four
explicitly rather than left to discover them, since three of them are silent hard-fails at the
validator. The fold instructions go to **D** (n57 must absorb p.448's age) and **F** (n86 must absorb
p.375's age, n82 must absorb p.450's normal range).

`val-pd-ep2.js`'s section-4 `ans` was still the index's 95; lowered to 90 with the five-page
reconciliation written beside it, so nobody re-derives the discrepancy from scratch. It is an unused
documentation field — which is exactly why a stale value there survives.

---

## Correction: "every structural oddity falls inside half B" was wrong — there is a second boxless entry in half D (2026-09-04)

The block above says every structural oddity in section 4 falls inside half B. **It does not.** Re-read
off the staged array rather than off this journal:

```
--- figs anywhere ---        n26 p.320 "peripheral blood film, low power"
                             n27 p.323 "clinical photograph, infant's hand"
--- boxless anywhere ---     n21 p.308
                             n54 p.377
--- box overflow anywhere -- n22 p.311 box 312
                             n26 p.320 box 321
```

**`n54` (p.377) is boxless and it is in half D, not half B.** Both figures, both box overflows and the
first boxless entry are in B, which is what produced the claim; the second boxless entry was simply
not looked for outside B's range. The earlier merge block did record `boxless: n21 p.308 n54 p.377`
correctly — the error was introduced later, when the drafting split was described, by generalising
from three of the four oddity kinds. **A claim that a property is confined to one range is a claim
about the WHOLE array and has to be measured over the whole array.**

Half D's task prompt carries the general unboxed rule (no blockquote anywhere; closing line
`Written for this bank — Pediatrics endpoint part2.pdf prints no explanation here.` with an em dash;
the marker never in `source`), so n54 is covered by contract rather than by being pointed at. **It is
checked in D's returned file before that half is accepted** — an unboxed entry that acquires a
blockquote is a silent hard-fail at the validator, exactly the failure mode the "tell B explicitly"
reasoning was meant to prevent.

### The fold pages and keys, re-verified against the staged array

| n | p | key | pairs with | its key | agree? |
|---|---|---|---|---|---|
| 53 | 375 | 3 | **86** (p.442) | 3 | yes |
| 89 | 448 | 0 | **57** (p.383) | 0 | yes |
| 90 | 450 | 3 | **82** (p.434) | 3 | yes |

**Every fold pair carries the same key on both printings**, so no fold in this section moves an
answer — checked on disk, not assumed from the adjudication. The three survivors (n57, n82, n86) and
the three discards (n53, n89, n90) are disjoint sets.

---

## Section 4 drafted, refiled across four chapters, spliced at 87 — and the chapter field turned out to have no instrument behind it (2026-09-04)

All six halves returned and validate. **15 + 15 + 15 + 14 + 15 + 13 = 87**, exactly 90 staged less the
three folded discards. Word counts by half: 4,101 · 4,180 · 4,177 · 3,818 · 3,727 · 3,756 —
**23,759 words, 273 a question**, against a budget of ~250 for slide-recall and ~520 for vignettes.

Every half was cross-checked from disk in the main chat rather than taken on the agent's word:
`answer` against the staged `key` index, `stem` and `options` byte-identical to staging, the exact
`source` string including the box-overflow form, boxed-versus-unboxed shape, the unboxed marker's
presence and its absence from `source`, figure basename and `imgAlt` against the staged `figAlt`, and
the allowed-field set. All clean. **n54 (p.377), the second boxless entry, came out right from the
general rule alone** — half D was never pointed at it, because the journal block that would have
pointed at it was the one that wrongly said every oddity sits in half B.

### ⚠️ THE CHAPTER FIELD WAS WRONG IN 24 ENTRIES AND NOTHING WOULD EVER HAVE CAUGHT IT

**My defect, not the agents'.** I hard-coded `chapter:'haematology'` into the prompts for halves A–D
and let E and F judge per entry. So every ITP, haemophilia, von Willebrand and HSP question in the
first sixty was filed under *Anaemia and marrow failure*, and so were four leukaemia questions and one
child-protection question.

**No instrument sees this.** `val-pd-ep2.js` lines 39–41 say it outright: the `chapter` in the section
config is documentation only, and each entry's own chapter is checked against the real chapter set
from `modules.js`, never against that field. `haematology` and `haem-bleeding` are both real chapters,
so a bleeding disorder filed as anaemia passes every check there is — validator, splicer, boot check —
and surfaces only as a question sitting in the wrong chapter on the shelf. **A field with no
instrument behind it needs a deliberate pass, and the pass has to cover halves that were not suspect.**

One pass over all six halves, by content, filed 24 entries elsewhere:

| Chapter | Count | What moved there |
|---|---|---|
| `haematology` — Anaemia and marrow failure | 51 | unchanged |
| `haem-bleeding` — Bleeding and clotting disorders | 30 | 18 moved from A–D; E and F had already filed 12 |
| `malignant` — Leukaemia | 5 | n30, n45, n47, n49, n58 |
| `accidents` — Accidents and poisoning | 1 | n46 |

**`pedep2-hem-46` leaves haematology altogether.** It is printed inside the haematology section and it
asks which feature of a 5-month-old's spiral humeral fracture suggests non-accidental injury — a child
protection question, not a haematology one. Chapter by content, which is part 1's established
practice: `questions.peds.ep.js` files 216 entries across **36 different chapters**.

**E and F agreed with me on all 28 of their own entries — zero moved back.** That is the useful part
of the measurement: the two halves that were left to judge for themselves reached the same filing an
independent pass reached, so the split is a property of the questions and not of whoever was reading
them. The error was entirely in the four prompts that removed the judgment.

Two straddling cases were decided and left where they were. **n64** ("Which is not a cause of acute
abdomen?") and **n72** ("true medical causes of abdominal pain, EXCEPT") both offer four options that
are all haematological, and the discriminating fact — that thalassaemia does not cause an acute
abdomen where sickle cell disease and HSP do — is a haematology fact. Primary `haematology`, secondary
abdominal pain, per the standing straddle rule. `gi-abdopain` exists and was considered.

### The splicer carried the same fold blindness the validator did

`splice-pd-ep2.js` refused the section: `MISSING: pedep2-hem-53 / -89 / -90 is staged but not drafted`,
and `COUNT: drafts sum to 87 but staging holds 90`. **Identical defect to the validator's, found the
same day for the same reason** — a fold register that lives only in a journal is invisible to every
tool, and a staged discard is indistinguishable from an entry someone forgot.

The splicer already had a `reprints` mechanism, and **it is not the same thing.** A reprint is a model
exam re-printing a question that is already live from a body section; it is folded by extending the
existing entry's `source`, and the splicer has a `REPRINT PASS HAS NOT RUN` check that proves the pass
happened by counting a marker in the live file. A section-4 fold is two printings inside one section,
both staged in the same pass, the survivor drafted in the same batch — **there is no live entry to
extend and no reprint pass to run, so borrowing the reprint machinery would have failed a correct
file on a proof that cannot exist.** A separate `folded: [53, 89, 90]` was added instead, sharing only
the "staged but deliberately not drafted" behaviour, and drafting a folded entry anyway still trips
`EXTRA` — which is what keeps a silent duplicate out of the live bank.

### Spliced and booted

```
questions.peds.ep2.js   94 -> 181 entries   220,855 -> 447,824 chars   holes 0
banks: {"endpoint":181}    ids: no duplicates    answer in range: all
chapters: normal-dev 28 · dev-problems 28 · genetics 38 · haematology 51 ·
          haem-bleeding 30 · malignant 5 · accidents 1        (unknown chapters: none)
boot check: QUESTIONS 5310 · THEORY 153 · MODULES 4 · 153 chapter rows (138 with questions)
            console errors 0
```

`app/index.html` and `app/data/questions.js` already carried their one line each from the section 1–3
splice; neither was touched. **Sections 1–4 of part 2 are live. Section 5 (Respiratory) is next.**

---

## Section 5 launched, stopped, and relaunched — the index is keyed 0-based and it put the whole section one page out (2026-09-04)

**Four staging agents were launched on the wrong pages and stopped minutes later.** The ranges were
A 476–508, B 510–540, C 542–572, D 574–604. Every one of those is the *unanswered twin* of the page
that was meant. Nothing was staged from them; no part file from that launch survived on disk.

### What the defect actually is

`content/peds/qb-pages/ocr/ep2/index.json` is an object. **Its keys are a 0-based position; each
record's own `page` field is the real 1-based PDF page.**

```
idx['452'].page === 453
```

I profiled the section with `idx[String(p)]`, so every page I read was one lower than the page I
named. Because this book alternates unanswered/answered, **a one-page shift does not merely move the
range — it inverts the parity**, turning "odd pages are answered" into "even pages are answered" and
pointing all four agents at the twin. A shift of one page is the most dangerous size of error this
book can produce, precisely because the wrong page looks exactly like a right one: same question,
same options, no key.

### How it was caught, and what the instrument was

Not by a checker — there is none for this. It was caught against **this file**, which already said
"the next `answered` page anywhere is **p.477**" from an earlier pass. My freshly computed 476
contradicted a number this map had recorded, and the contradiction is what forced the re-measure.
Confirmed directly (`idx['452'].page === 453`), then cross-checked against section 4's staged array,
which is verified against images: staged `p` runs 268..450, and `kind` **at key 268** is `question`
while `kind` **at `e.page` 268** is `answered`. The staged data is right; my read was wrong.

Agent C had already reported **"confirmed still unanswered at p560"** before it was stopped — the
alternation check working exactly as it is supposed to, an agent refusing to stage a page that did
not match what its prompt promised. That report is the real instrument, and §4a-pre of
`pd-ep2-staging-brief.md` now tells every future agent that such a mismatch is a finding to report,
never something to work around.

### Section 5's true structure, re-measured on `e.page`

| | |
|---|---|
| p.450 | section 4's last answered page |
| pp.451–475 | teaching notes, **25 pages**, every one `options: 0` |
| p.476 | first unanswered question page |
| pp.476–605 | strict alternation, **EVEN unanswered / ODD answered** |
| answered | **65 pages, 477 … 605**, all odd, zero even |
| pp.606–612 | closing notes; section 6 follows |

Section 4 ran the opposite parity (even answered, odd unanswered) — a 25-page notes block between
them is an odd count, so the parity flips. **Parity is a property of one section, never of the book.
Measure it per section.**

Relaunched ranges: **A 477–509 (n:1–17) · B 511–541 (n:18–33) · C 543–573 (n:34–49) ·
D 575–605 (n:50–65)**, D also rendering pp.606–607 to prove the end boundary. This supersedes
"The end boundary is part D's job" above, which named pp.451–452 from the shifted read.

### ⚠️ AND THEN I OVER-CORRECTED, AND A RENDERED PAGE CAUGHT ME

Having found the key/page defect, I inferred that the `Pages` column at the top of this file had been
built the same wrong way, and subtracted one from rows 1–5. **That inference was wrong and the rows
have been put back.** Part D rendered pp.606–607 to prove its end boundary and reported **p.606 = the
Arabic closing supplication, p.607 = the "Cardiac disorders" banner** — precisely where the original
table ends §5 and opens §6.

The table follows a convention I had not noticed: **a section runs to its own closing supplication,
the page after its last answered page** — §1 74/75, §2 153/154, §3 243/244, §4 450/451, §5 605/606.
My version had each section end on its last answered page. **Both readings are perfectly uniform
across five sections**, which is exactly why the wrong one felt confirmed. Uniformity is not
evidence; one rendered page is. The counts were never in question either way — a uniform shift
preserves them, which is why 65/65/25 came out right even from the wrong window.

Worth separating the two, because they are not the same mistake. The key/page defect was **measured**
and real: `idx['452'].page === 453`, it cost section 5 a whole launch, and it is fixed. The table
"correction" was **inferred** from that defect and cost nothing only because a boundary render was
already scheduled. **The staging pipeline renders one page past every range for exactly this reason,
and this is the first time that rule has caught the main chat rather than an agent.**

## Section 6 "Cardiac disorders" profiled BEFORE staging — it is three runs, not one alternation (2026-09-05)

Section 5 ran a single clean alternation: odd answered, even unanswered, all the way through. **Do
not carry that across the boundary.** Section 6 was profiled page by page off `index.json` before
any agent was launched, iterating `Object.values(idx)` and keying on `e.page`, and it does not
alternate uniformly. pp.607-792, 186 pages:

| Run | Pages | Answered pages | Parity of the answered page |
|---|---|---|---|
| Opening notes | 607-627 | 613, 617, 618, 619 | **neither — no twins** |
| Run 1 | 628-635 | 629, 631, 633, 635 | odd |
| *interruption* | **636** | — | one `notes` page |
| Run 2 | 637-688 | 638, 640 … 688 (26) | **even** |
| *interruption* | **689** | — | one `notes` page |
| Run 3 | 690-791 | 691, 693 … 791 (51) | **odd** |
| Close | 792 | — | the Arabic closing supplication |

**A single interposed notes page flips the parity, and it happens twice.** 636 and 689 each sit
alone between an answered page and the next question page, so the run that follows starts on the
opposite parity from the run before it. A range profiled from either end and extrapolated by
alternation is wrong for two thirds of the section. **Every staging range in section 6 must be built
from the profile, page by page, never from a parity rule.**

Counts reconcile exactly: 4 + 4 + 26 + 51 = **85** pages with `kind:"answered"`, and **81** pages
with `kind:"question"`. That matches the contents-page table's `answered 85 / question 81` and
identifies the difference precisely — **the four answered pages inside the opening notes block
(613, 617, 618, 619) have no unanswered twin.** Every other answered page in the section is the
second half of a question/answer pair.

⚠️ **Those four must be read by eye before anyone decides whether they are questions.** The
`answered` flag is only the yellow threshold, and the whole notes block 608-626 crosses it — notes
slides in this book are yellow-heavy, so `answered:true` is meaningless there. What separates the
four is `kind`, which is a different measurement. They may be worked examples printed inside the
teaching notes rather than bank questions, in which case they are not staged; they may be four
questions the book chose not to print an unanswered face for, in which case they are. **The index
cannot settle it and neither can this note.** Render them.

The section 5 close-out estimate of "answered pages 613/617/618/619 inside the notes run, p.636
interrupting" was measured on a partial sweep and was right about those five pages and blind to
p.689. This profile supersedes it.
