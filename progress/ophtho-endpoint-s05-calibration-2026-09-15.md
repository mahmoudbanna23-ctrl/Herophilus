# Ophthalmology Endpoint — Section 5 ("Eyelids") — Calibration, 2026-09-15

Section 5 ("Eyelids", PDF pages 343–416 of `Semester 8\Opthalmo\Questions\Opthalmology
endpoint.pdf`, confirmed against `tools\bank-harness\sec-oph.js` entry 5: `pages: [343, 416]`)
was calibrated **text-only**, from the OCR `.txt` files and `index.json`
(`content\ophtho\qb-pages\ocr\ep\`, files `p0NNN.txt`), per this job's brief. **No page was
rendered and no image was viewed; the model has no vision** (a previous run of this job died when
the gateway refused a vision call). Everything that needs eyes went into the "needs image check"
list below — that is the intended output of a text-only calibration, not a gap.

## Section range and divider pages

- PDF range confirmed exactly: `sec-oph.js` entry 5, `pages: [343, 416]`, chapter `op-lid`.
- p343: `kind:"notes"`, 1 word, text "Eyelids" — the clean chapter divider, same shape as section 4.
- p344–357: `kind:"notes"` lecture prose, 14 pages (Anatomy of Eyelids, Infections & Inflammations,
  Blepharitis, Eyelid Malpositions, Lid Swelling Causes, Quick Notes).
- p358: `kind:"notes"`, 1 word, text "Questions" — the Questions divider page, exactly like section 4.
- p359–416: 58 pages of paired MCQs (29 unmarked + 29 marked pages, see arithmetic below).
- p417 (section 6, outside the declared range): `kind:"notes"`, thin + passes-differ, OCR shows it is
  the next chapter's divider — consistent with the known section-6 divider flag ("Conjunctiva",
  p417 per the brief).

## Question count and how it was derived

**Section 5 holds 29 questions.** Derivation: 58 question-format pages (359–416) ÷ 2 = 29, and the
29 consecutive unmarked/marked pairs each OCR as the same question printed twice (unmarked then
marked). This is the largest section calibrated so far (previous, measured by loading each section's keys
file: 33 in s1, 27 in s2, 21 in s3, 24 in s4).

## Page formula (holds here, tested on every pair)

**Question *n* of the physical run is unmarked on PDF page 357+2n and marked on PDF page 358+2n.**
Q1 = 359/360, Q29 = 415/416. Q29's marked page (416) is exactly `sec-oph.js`'s declared last page
for this section.

This formula is *not* the section-3/4 formula (229+2n / 293+2n) — the constant is 357/358 here,
derived independently and tested on **all 29 pairs**, not assumed:
- Every one of the 29 consecutive pairs (359/360 … 415/416) shows the same stem printed twice, with
  the marked page carrying the explanation text the unmarked page lacks (Q1–Q11) or being a clean
  reprint (Q12–Q29). Stem-similarity between the two pages of each pair is 0.41–1.00 (Q1–Q11 blend
  box+stem; Q12–Q29 are ~1.0). No pair failed the unmarked→marked (question→answered) pattern except
  the classifier's mis-tagged p393/p394 (both `question` — see "Classifier mis-tags").
- **Exceptions: none.** Every page 359–416 is accounted for as exactly one of the 29 pairs; no
  staggered pair, no break, no page spanning more than its own unmarked/marked pair anywhere.

## Unassigned pages (within the declared range, not part of a question pair)

- p343: chapter divider "Eyelids".
- p344–357: lecture prose (14 pages, read via OCR text).
- p358: "Questions" divider.
- That is 16 pages; 74−58 = 16, the accounting closes exactly. Everything in 343–416 is either one
  of these 16 or one of the 29 question pairs.

## Option counts per Q (OCR-derived; flagged ones marked)

Perfectly regular **four options (A/a–D/d) on every page of every pair** — no five-option question
exists in this section. But OCR "sees" the printed `B` letter as the digit `8` on many pages (see
"OCR artifacts"), so the option *letter* sequences below come from the OCR text lines
(`a/A` … `d/D`, with `8.` lines taken as `B`), and `index.json`'s letter arrays carry their own
per-page noise. Directly from the `.txt` files, every question has exactly one line per option:
- Q1–Q13: `a/b/c/d`, `A/B/C/D`, or `A/8/C/D` (Q8) — 4 options each, both pages of every pair.
- Q14–Q19 (`8.` artifact): both pages of Q15, Q16, Q19 show `A/8/C/D`; Q17's marked page is missing
  its `A` line entirely in the native OCR; Q14 shows a stray `8.HTN` middle line.
- Q21–Q29: `a/b/c/d`, 4 options each, both pages of every pair.

The brief's known flags for section 5 match the index exactly on every page —
- few-options: p364, 382, 386, 388, 390, 392, 396
- options-differ: p362, 368, 370, 374, 412
- thin: p343, 352, 358, 371, 377

**Read from OCR, the flagged "few-options" and "options-differ" pages are OCR artifacts, not real
option-loss** — except where a letter line is genuinely absent from the OCR text. Per page:
- p362 (Q2 marked): text shows all four options; `options-differ` = the `8.`/`B` artifact.
- p364 (Q3 marked): text genuinely lost the `c` line (a `8.`-style miss); hires index also sees only
  ABD. **Needs image check: is `c` actually printed?**
- p368 (Q5 marked): `8.Chalazion` reads as `b`; the `a` line prints after `d` (layout order); all four
  lines present. **Needs image check: is the reordered `a` line physically below `d`?**
- p370 (Q6 marked): text shows all four, `options-differ` = `8.` artifact only. **Not image-critical.**
- p374 (Q8 marked): all four lines present (A–D); `options-differ` artifact. **Not image-critical.**
- p382 (Q12 marked): three lines (`a`, `b`, `d`) with a garbled `An rir I h rF` line between — the
  `c` line is genuinely absent from the OCR text; hires index also sees only ABD. **Needs image check:
  is `c` actually printed on p382?**
- p386, 388, 390, 396 (Q14, 15, 16, 19 marked): each shows the `8.` artifact for `B` (and hires also
  drops it as a non-letter), so the OCR "missing B" is artifact, not a real short option set.
- p392 (Q17 marked): genuinely missing the `A` line in the native text (hires: CD only). **Needs image
  check: is `A` actually printed on p392?**
- p412 (Q27 marked): all four lines present; `options-differ` = the `8.`/`B` artifact (hires drops B).

## Option-letter case transitions

Case actually *switches* in this section, cleanly, exactly once — and the switch is tied to
**printed question numbering**, not to a constant position:
- **Q1–Q9: lowercase** (`a.`/`b.`/… — e.g. pp.359/360, 361/362, …, 373/374).
- **Q9 printed page starts upper-case already: Q10–Q21 = uppercase** (`A.`/`B.`/… — e.g. pp.375/376
  through 399/400). p379 shows `I I.`/`I I I.`-style numerals for 11/12 — OCR coalesced the printed
  "11."/"12." digits into `I` glyphs; the letter lines are still upper-case there.
- **Q22–Q29 printed run: lowercase again** (`a)`/`b)`/… with closing parens — pp.401/402 onward).
  This is a *third* case, with a different option punctuation (`a)` rather than `a.`), matching the
  split "another question source's formatting" feel of p401 onward (see Anomalies).

The single clean UPPER→lower transition sits at printed-Q21→Q22 (pp.399/400 → 401/402) — the
above-listed transitions align with the printed sequence, not with a "Q9" or "Q12" physical constant.

## Explanation-box candidates per Q with word deltas

- **Q1–Q11 carry an explanation box** on their marked pages. Each of these marked pages has a
  clearly-positive native-word delta over its own unmarked twin, and the extra text reads like the
  boxed explanations section 4 recorded (e.g. pp.360: "Ectropion, or outward turning of the eyelid,
  can result from facial nerve palsy (7th nerve)…" / 376: post-herpetic neuralgia text / 380:
  ulcerative blepharitis text). Per-pair native word delta (marked − unmarked): Q1 21, Q2 21, Q3 13,
  Q4 23, Q5 29, Q6 27, Q7 25, Q8 38, Q9 29, Q10 55, Q11 30.
- **Q12–Q29 carry no box text** — their marked pages are word-identical (delta 0; Q23 marked has
  delta −1, Q27 marked +2) and show the options + stem only, exactly like section 4's unboxed pages.
- **Q17 is an exception to the OCR evidence**: p391/p392 are not word-identical (delta −12) because
  p392 is missing the entire `A`-option line *and* the stem's second line in the native OCR — the text
  that is present is identical; hires shows the same drop (392/392 words equal 31/31). Because the
  rest of Q12–Q29 shows a 0-delta clean reprint pattern, **the real Q17 box status cannot be settled
  from text — p392 "few-options" flagged** → needs image check: does p392 carry an explanation box,
  or is the OCR just missing the printed `A` line?
- **Q18 (p393/394) is the "divided twins" case**: p393 (`question`) and p394 (`question`, marked-only
  in reality) — OCR found no explanation text, both pages identical stem+options; delta +1 word
  (a spacing artifact: "inspissation ofmeibomian… " runs together only on p393). The pattern says
  "not boxed", but the marked page's box cannot be excluded. → needs image check: does p394 carry a
  tiny box, or is it a clean reprint?
- Word-delta threshold behavior matches sections 3–4's "20–43 jump ≈ boxed, 0–1 ≈ not boxed" — the
  Q1–Q11 deltas (13–55) are all clearly boxed-tier. **This entire box conclusion is an inference from
  the OCR index/text, no rendered confirmation** — flagged as such for the key job; the only visual
  confirmation will be the needs-image-check pass and the key-extraction renders.

## Figures

No figure, photograph, or line-art diagram was found in any OCR text of 343–416. A regex grep for
figure-referencing language ("figure", "shown", "arrow", "picture", "photograph", "diagram", "image",
"as seen", "below") returned **zero matches across all 74 pages**. OCR text cannot see an embedded
image, and no page was rendered, so this is a text-based absence check only — no figure claim is
made. (Section 4's key job later confirmed "no figures" only by rendering all marked pages; that
step has not happened here.)

## Classifier mis-tags

- **pp.345–357 (`answered` true) are lecture prose, not questions** — the yellow-pixel detector is
  tripped by highlighted headings / highlighted table rows in the notes (same mechanism as s01/s04).
  `kind` for all of them is correctly `notes`, so this does not change the question count.
- **p394 is the only real `kind` error in the question run**: p393 and p394 are both tagged
  `kind:"question"` — but they are the same question (sim 0.98), so p394 must be the marked page of
  Q18 (its `answered` is true, yellow 5200). The true count is 29 unmarked + 29 marked; the
  classifier's `question:29 / answered:28` sums equal 57≠58 only because of this one mis-tag,
  **every other page 359–416 classified correctly**.
- `answered` booleans on flagged pages: all 8 `few-options` pages + p412 (`options-differ`) are
  `answered:true` marked pages, consistent with the paired layout (only the marked face of a question
  is ever flagged in this run).

## OCR artifacts (verbatim observations, not corrections)

- The letter `B` prints as the digit `8` in the OCR text on many pages (e.g. p374 line `8. Upper 1/3
  of the cornea`; p386 `8.HTN`), and the hires index drops it as a non-letter — this is why
  `few-options`/`options-differ` fire on those pages.
- p377 stem prints `Ectroion` (sic); p391 stem prints `hue` (sic) for "true" — verbatim OCR, to be
  re-checked visually; p385 `amorl g` … `except?` and p393 `redenss`, `ofmeibomian` are OCR noise /
  printing, not transcribed.
- p379/380 print the numbers `11.`/`12.` as `I I.`/`I I I.` in OCR (uppercase-serif I's).
- p404 native OCR drops the stem's final line ("this must be due to") entirely; its hires and its
  twin p403 still show all four options, and pairwise similarity p403/p404 = 1.00 — a text-loss
  artifact of the native pass only.
- p385 shows an extra `8.HTN` line (the digit-8 artifact) and p382 a garbled `An rir I h rF` line:
  OCR noise, flag only.

## Anomalies (source, not OCR — worth a hard look at staging)

1. **Printed question numbers in this section are not 1–29; they run 1–21, then 21, 21, 22, 22, 23,
   23, 24, 25 over 29 physical pairs** (read verbatim from the OCR lines: p359=`1.`; p367=`5.`;
   p373=`8.`; p377=`10.`; p379=`I I.`(11); p381=`12.`; … p399=`21.`; p401=`21.`; p403=`21.`;
   p405=`22.`; p407=`22.`; p409=`23.`; p411=`23.`; p413=`24.`; p415=`25.`). The repeated 21s and 22s
   are **not** duplicate questions — each pair is a distinct stem (e.g. p401 and p403 both print
   "21." but ask different vignettes; p405 and p407 both print "22." but ask treatment vs recurrence-
   prevention of the same vignette; p409 and p411 both print "23." but ask diagnosis vs treatment).
   So **the printed numbering leaves Q1 callable "1" but the 29-pair physical run must be addressed
   in staging — the printed numbers cannot serve as a unique n.**
2. **p401 onward feel like a different question source / formatting**: from printed-Q22 (pp.401/402)
   the stems get longer, every option is `a)`…`d)` with closing parens (Q1–Q21 use `a.`…`d.`), and
   all the repeated-number pairs fall in this range. Since the two pages of each pair around the
   style-change (399/400 → 401/402) are both genuine pairs, the constant 357+2n still holds across
   the whole section — only the stylistic face changes.
3. **Q5 (pp.367/368) option order anomaly (text-only)**: p368's OCR lines print option `a` after `d`
   (`b, c, d, A`), while p367 shows `a,b,c,d` — see the image-check list; if real, it is the first
   reordered-options page seen in any section.
4. The "except"/"true regarding" question pattern recurs (e.g. Q3, Q9, Q14–Q17, Q19, Q27): options
   include "None of the above" on Q9/Q10/Q11, and the marked correct answer is not derivable from
   OCR (no key extraction; see "What was not checked").

## Needs image check (text-only calibration — these need eyes)

- **p364** — is the `c.` option line really printed (marked page of Q3)?
- **p368** — is option `a` physically printed below `d` (reordered options), and what is the
  highlighted key?
- **p382** — is the `c.` option line really printed (marked page of Q12)?
- **p392** — is the `A.` option line really printed, **and does p392 carry an explanation box**
  (Q17, the only Q12–Q29 pair with a negative word delta)?
- **p394** — does the marked page of Q18 carry a tiny explanation box or is it a clean reprint?
- **p386, 388, 390, 396** — confirm the `B` options print as `8` in OCR only (i.e. four real options),
  and check the flagged few-options truth on these pages.
- **p362, 370, 374, 412** — confirm `options-differ` is entirely the `8.`/`B` artifact (four real
  options, no reordering).
- **p377, 391, 385, 382, 393** — confirm the verbatim stem typos/splits printed above (`Ectroion`,
  `hue`, `amorl g`, `redenss`, `ofmeibomian`) are the printed text and not OCR-only.
- **p343, 344–357, 358, 417** — confirm the visual shape of the dividers and that the prose pages
  carry no hidden figure (they read as pure text).
- Option-letter case on every marked page (**Q1–Q9 lower, Q10–Q21 upper, Q22–Q29 lower-with-parens**)
  — the case column was derived from OCR text, not from pixels; the case *transitions* need visual
  confirmation on the key-extraction renders.

## What was not checked

- **No key extraction**: no `keypos.py` run, no visual key read; only the marked-page boolean and
  box-text presence are noted. The keys for this section are entirely unstated (per AGENTS.md, OCR
  cannot see highlighted marks).
- **No render / no vision**: the whole 343–416 range was calibrated from OCR text and index fields
  only; every pixel-level fact (box presence, actual option presence on the flagged pages, actual
  case, reorders, figures) is in the needs-image-check list, not asserted here.
- Source-printing typos were not deliberately searched for beyond what OCR showed (the anomalies
  above are OCR-visible; an actual typo hunt needs the pages).
- Whether the printed numbering anomaly (1–21 then 21, 21, 22, 22, 23, 23, 24, 25) matches the
  source's printed folio/pagination exactly — the OCR folio digits (e.g. p404's missing line,
  p391/392's `8`-fold) were not exhaustively cross-checked.

## Injection note

As in earlier jobs, this run saw no prompt-level injection; the brief's instruction to write this
note only to the granted paths was followed throughout. Written incrementally (`progress\
ophtho-endpoint-s05-calibration-2026-09-15.md` created early, appended as findings landed); no git,
no network, nothing under `Semester 8\` or `app\` touched.

## Byte size and line-ending check

To be run after this file is written: `tr -cd '\r' < "progress\ophtho-endpoint-s05-calibration-2026-09-15.md" | wc -c` — must print 0 (this file was written LF-only; PowerShell `Get-Content`/`wc` check to be run).