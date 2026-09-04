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
