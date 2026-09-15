# Ophthalmology Endpoint — Section 5 ("Eyelids") — Answer Key

Source: `Semester 8\Opthalmo\Questions\Opthalmology endpoint.pdf`, section 5, PDF pages 343-416.
Confirmed against `progress\ophtho-endpoint-s05-calibration-2026-09-15.md` and
`tools\bank-harness\sec-oph.js` entry 5 (`pages: [343, 416]`): 29 questions, question *n* unmarked
on PDF page 357+2n, marked on PDF page 358+2n. Q1 = 359/360, Q29 = 415/416. Q29's marked page
(416) is exactly `sec-oph.js`'s declared last page for this section. The formula held with **no
exception** across all 29 pairs, confirmed by direct visual read of every marked page (150 dpi
renders in `<scratchpad>/cl-s05-img/`).

**Key convention: 0-based.** `Visual index` and `keypos index` below are 0 for option A/a, 1 for
B/b, 2 for C/c, 3 for D/d — directly comparable to a staged `key:` field. The `Visual letter`
column is the human-readable form (the letter printed and highlighted on the page, in whatever
case the page itself prints), 1:1 with the index, never to be confused with it.

`tools\ep-index\keypos.py` (pixel-based highlight-position check, `n_opts=4` for every page — no
question in this section departed from four options) was run on all 29 marked pages via a batch
script. Every key below was read visually off the rendered marked page **before** its keypos value
was looked at, per the brief's required order. Where the two disagreed the visual read wins; in
this section keypos never returned a *disagreeing* letter — it abstained (no key produced) on two
pages, Q1 and Q18, both for documented reasons (below), and both were resolved by eye with full
confidence.

**New column versus s04: none required.** Section 4 needed an `Options` column because Q18 there
carried five options; every one of section 5's 29 questions carries exactly four, so the `Options`
column here reads uniformly `4 (a-d)` or `4 (A-D)` depending on the case run in force for that
question (see "Option-letter case" below).

## Per-question table

| Q | Unmarked page | Marked page | Visual letter | Visual index (0-based) | keypos letter | keypos index | Agree? | Options | Explanation box | Figure |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 359 | 360 | d | 3 | (abstained: no-yellow-below-title) | - | visual-only | 4 (a-d) | boxed | none |
| 2 | 361 | 362 | C | 2 | C | 2 | yes | 4 (A-D) | boxed | none |
| 3 | 363 | 364 | C | 2 | C | 2 | yes | 4 (A-D) | boxed | none |
| 4 | 365 | 366 | C | 2 | C | 2 | yes | 4 (A-D) | boxed | none |
| 5 | 367 | 368 | A | 0 | A | 0 | yes | 4 (A-D) | boxed | none |
| 6 | 369 | 370 | C | 2 | C | 2 | yes | 4 (A-D) | boxed | none |
| 7 | 371 | 372 | A | 0 | A | 0 | yes | 4 (a-d) | boxed | none |
| 8 | 373 | 374 | C | 2 | C | 2 | yes | 4 (A-D) | boxed | none |
| 9 | 375 | 376 | B | 1 | B | 1 | yes | 4 (A-D) | boxed | none |
| 10 | 377 | 378 | C | 2 | C | 2 | yes | 4 (A-D) | boxed | none |
| 11 | 379 | 380 | A | 0 | A | 0 | yes | 4 (A-D) | boxed | none |
| 12 | 381 | 382 | C | 2 | C | 2 | yes | 4 (A-D) | not boxed | none |
| 13 | 383 | 384 | C | 2 | C | 2 | yes | 4 (A-D) | not boxed | none |
| 14 | 385 | 386 | C | 2 | C | 2 | yes | 4 (A-D, printed "8" for B — see Anomalies) | not boxed | none |
| 15 | 387 | 388 | C | 2 | C | 2 | yes | 4 (A-D, printed "8" for B) | not boxed | none |
| 16 | 389 | 390 | C | 2 | C | 2 | yes | 4 (A-D, printed "8" for B) | not boxed | none |
| 17 | 391 | 392 | A | 0 | A | 0 | yes | 4 (A-D) | not boxed | none |
| 18 | 393 | 394 | C | 2 | (abstained: no-yellow-below-title; highlight is cyan not yellow) | - | visual-only | 4 (A-D) | not boxed | none |
| 19 | 395 | 396 | D | 3 | D | 3 | yes | 4 (A-D, printed "8" for B) | not boxed | none |
| 20 | 397 | 398 | C | 2 | C | 2 | yes | 4 (A-D) | not boxed | none |
| 21 | 399 | 400 | B | 1 | B | 1 | yes | 4 (A-D) | not boxed | none |
| 22 | 401 | 402 | b | 1 | B | 1 | yes | 4 (a-d, closing paren) | not boxed | none |
| 23 | 403 | 404 | b | 1 | B | 1 | yes | 4 (a-d, closing paren) | not boxed | none |
| 24 | 405 | 406 | d | 3 | D | 3 | yes | 4 (a-d, closing paren) | not boxed | none |
| 25 | 407 | 408 | c | 2 | C | 2 | yes | 4 (a-d, closing paren) | not boxed | none |
| 26 | 409 | 410 | d | 3 | D | 3 | yes | 4 (a-d, closing paren) | not boxed | none |
| 27 | 411 | 412 | d | 3 | D | 3 | yes | 4 (a-d, closing paren) | not boxed | none |
| 28 | 413 | 414 | d | 3 | D | 3 | yes | 4 (a-d, closing paren) | not boxed | none |
| 29 | 415 | 416 | d | 3 | D | 3 | yes | 4 (a-d, closing paren) | not boxed | none |

## Option text per key

Full verbatim option-text-per-key transcription (the letter's exact printed wording plus a
one-line stem summary, as s04 gives for all 24 of its questions) could not be completed for every
one of the 29 questions in this pass: the visual reads that produced the table above were done
earlier in this same job, and the session that holds their exact wording was compacted before this
file was written, leaving the **key letter/index** (grounded, re-derivable from the rendered PNGs
still on disk) but not the full prose for most rows. Rather than reconstruct wording from memory,
this section reports **only what remains directly grounded** from material re-read after the
compaction, or preserved verbatim in working notes at the time:

- Q3 (C/2, p.364): option **c is genuinely present** on the page (the calibration note had flagged
  its presence as unconfirmed from OCR alone) — it is not the highlighted key's text captured here,
  only its presence.
- Q5 (A/0, p.368): options print in **normal a/b/c/d order** — the calibration note's OCR-based
  guess that they were reordered is wrong; key is option A, printed first.
- Q10 (C/2, p.378, marked/reprinted stem): option B is printed **"Ectroion"** — a genuine printed
  typo (missing "p"), not an OCR misread; preserved verbatim per project transcription rules.
- Q12 (C/2, p.382): option **c is genuinely present**, and is itself the highlighted key: "C.
  Anterior blepharitis".
- Q14 (C/2, p.386): the stem contains the genuinely printed word **"amor1g"** (digit "1" for a
  letter, a print defect, confirmed at both 150 dpi and a 300 dpi re-render) and option B prints as
  digit **"8."**, not letter "B." (see Anomalies).
- Q17 (A/0, pp.391/392): full option text, confirmed on the unmarked twin p.391 — stem "17. All of
  the following are true regarding epicanthus except?"; A. "Epicanthal folds are usually bilateral
  and give a false impression of divergent squint" (the highlighted key, i.e. the exception
  statement); the printed option letter for B on this page is likewise the digit **"8."**, not "B.";
  C. "Treatment is mainly for cosmesis"; D. "The only available treatment is surgical."
- Q18 (C/2, p.394): the highlight itself prints in **cyan/turquoise**, not yellow (see Anomalies);
  no explanation box on this page.

For all other rows, only the key letter/index in the table above is asserted — it was read
directly off the rendered page and cross-checked by `keypos.py`, but its accompanying option text
is not restated here to avoid writing prose from memory rather than from the source. A future pass
re-reading `<scratchpad>/cl-s05-img/p-0360.png` through `p-0416.png` (marked pages, even PDF page
numbers 360-416) can fill in the remaining 22 rows without any further rendering.

## Summary — keys and keypos

**29 of 29 keys read visually. 0 remain unread.**

**Agreement with `keypos.py`: 27 of 29 direct agreements, 2 abstentions (not disagreements) — Q1
and Q18.** `keypos.py` never returned a letter that contradicted the visual read anywhere in this
section.

- **Q1 (p.360):** keypos abstained with reason `no-yellow-below-title`; visual read is unambiguous
  (key = d, index 3).
- **Q18 (p.394):** keypos abstained with the same reason string, but the actual cause is different
  and more specific — **the highlight on this page prints in cyan/turquoise, not yellow**, and
  `keypos.py`'s detector only tests for yellow pixels (`r>200 g>180 b<120`). This is a genuine,
  novel page-level finding: every other highlight in this section, and every highlight in s04, was
  yellow. Visual read is unambiguous (key = C, index 2).

Every other highlight read across the section (Q2-Q17, Q19-Q29) was yellow, matching s04's finding
that yellow is the standard highlight colour — Q18 is the sole exception found anywhere across both
sections checked so far.

## Option count

**29 of 29 questions carry exactly four lettered options.** No five-option question was found
anywhere in this section (unlike s04, which had one). This was directly confirmed, including every
item the calibration note flagged as uncertain:

- p.364 (Q3) option c: present.
- p.382 (Q12) option c: present.
- p.392 (Q17) option A: present (it is the highlighted key itself, not missing).
- p.362/370/374/412 (Q2, Q6, Q8, Q27): all four options present, no reordering — confirmed
  artifact-free, closing the calibration note's flag on these four pages.

## Option-letter case

**This section runs three case formats, not the two the calibration note described — a correction,
and the transition point itself is also corrected.**

- **Lowercase `a./b./c./d.` on Q1-Q7** (pp.360-372).
- **Uppercase `A./B./C./D.` on Q8-Q21** (pp.374-400). **The calibration note placed this
  transition one question later, claiming Q1-Q9 lowercase and Q10-Q21 uppercase. The direct render
  shows the switch actually happens between Q7 and Q8**: p.372 (Q7) prints "a. Lagophthalmos / b.
  Ptosis / c. Entropion / d. Ectropion" (lowercase), while p.374 (Q8) prints "A. Middle 1/3... B.
  Upper 1/3... C. Lower 1/3 (key)... D. Whole cornea" (uppercase). This is analogous to the
  correction s04 made to its own calibration note's case claim.
- **Lowercase again, with a closing parenthesis — `a)/b)/c)/d)` — on Q22-Q29** (pp.402-416),
  matching the calibration note's prediction for this stretch exactly.

## Explanation boxes

**11 of 29 questions carry a printed explanation box: Q1-Q11**, confirmed directly on their marked
pages (pp.360, 362, 364, 366, 368, 370, 372, 374, 376, 378, 380). **Absent from Q12 through Q29**,
confirmed directly not boxed on every one of the remaining 18 marked pages, including the two the
calibration note flagged as uncertain — **Q17 (p.392) and Q18 (p.394) are both confirmed boxless**.
This matches the calibration note's exact prediction (Q1-Q11 boxed, Q12-Q29 not) with no
correction needed.

## Figures

No figure, photograph, or line-art diagram was found on any of the 29 marked pages read. The
divider page p.343 ("Eyelids" title) and the section-start divider p.358 ("Questions" title) were
also directly checked and carry no figure, only styled text on a plain background. **The 14
lecture-prose pages (344-357) were not read in this pass** — see "What was left unread" — so a
figure inside the prose portion of the section cannot be excluded, only the divider pages and all
29 question pairs' marked sides.

## Anomalies

**Printed question-numbering anomaly confirmed exactly as the calibration note predicted.**
Physical Q1-Q21 print sequential numbers 1-21. From physical Q22 onward the printed number repeats
across pairs of physical questions: Q22/Q23 both print "21.", Q24/Q25 both print "22." (same
vignette: treatment then recurrence-prevention), Q26/Q27 both print "23." (same vignette: diagnosis
then treatment-except), Q28 prints "24.", Q29 prints "25." Confirmed by direct read of pp.402-416.
These are genuine distinct questions sharing a printed number, not duplicates.

**"B" printed as digit "8" is a genuine printed defect in the source, not an OCR artifact.**
Confirmed at 150 dpi on pp.386, 388, 390, 396 (Q14, Q15, Q16, Q19) and definitively re-confirmed
with a 300 dpi re-render of p.386, which unambiguously shows the digit "8" (not a stylized "B") for
option B, alongside the stem word "amor1g" (containing a literal digit "1", also a genuine print
defect). The identical question stem/options appear cleanly as "B." at p.374 (Q8) — proving the
substitution is intermittent and page-specific within the source, not a systematic OCR misread. It
is present on Q14, Q15, Q16, Q17, Q19 and absent on Q8, Q18, Q20, Q21, and all of Q22-Q29.

**Q18's highlight colour is cyan/turquoise, not yellow** — see "Summary" above. This is the reason
`keypos.py` abstained on that page and is otherwise unremarked in the table (the visual key is not
in doubt).

**Stem typos, printed not OCR-only:** p.378 (Q10, marked/reprinted stem) prints "Ectroion" for
option B. p.393 (Q18, unmarked) prints "eye redenss" for "redness" and, separately, prints
"meibomian gland secretions" **correctly spaced** — this disproves the calibration note's
"ofmeibomian" merged-word claim, which was an OCR-only artifact, not a printed one. p.386 (Q14)
independently confirms "amor1g" is genuinely printed (see above).

No page-arithmetic break, out-of-sequence page, or question spanning more than its two-page pair
was found anywhere rendered.

## Contradictions with (and corrections to) the calibration note

- **Case-transition claim: CORRECTED.** The note placed the lowercase-to-uppercase switch at the
  Q9/Q10 boundary; the render shows it one question earlier, at the Q7/Q8 boundary. See
  "Option-letter case" above.
- **Explanation-box list (Q1-Q11 boxed, rest not): CONFIRMED**, no correction needed, including
  the two pages (Q17, Q18) the note itself flagged as uncertain.
- **Printed-numbering anomaly (1-21 then paired repeats 21/21/22/22/23/23/24/25): CONFIRMED**
  exactly as predicted.
- **"B" reads as "8" (pp.386/388/390/396, and checked also at pp.362/370/374/412): CONFIRMED as a
  genuine printed defect**, not an OCR artifact — the calibration note left this open as an
  assumption; it is now settled by direct visual read at 150 dpi and one 300 dpi re-render.
- **p.364/p.382 option c presence: CONFIRMED present** on both pages, closing the note's flag.
- **p.368 option order: CORRECTED.** The note guessed the options might be reordered from OCR;
  the render shows normal a/b/c/d order.
- **p.392 option A presence and box: CONFIRMED present, CONFIRMED no box.**
- **p.394 box: CONFIRMED no box.** Additionally, and not predicted by the note at all: **the
  highlight colour on this page is cyan, not yellow** — a new finding, not a correction of an
  existing claim.
- **"ofmeibomian" merged word (p.393 per the note): CORRECTED — printed correctly spaced.** This
  was an OCR-only artifact, matching the pattern the note itself warned about (citing s04's "hue"
  vs. "true" case).
- **p.377/p.391/p.385/p.382/p.393 stem typos "Ectroion, hue, amor1g, redenss, ofmeibomian":
  PARTIALLY CONFIRMED, PARTIALLY CORRECTED.** "Ectroion" (p.378, marked twin of p.377) and
  "amor1g" (p.386) and "redenss" (p.393) are genuine printed typos. "ofmeibomian" is corrected
  above (printed with a space). "hue" was **not found anywhere on p.391** — the unmarked twin of
  Q17 was read directly and shows no word resembling "hue"; this specific OCR-flagged fragment
  could not be located in the printed text and is recorded as not confirmed, not asserted false.
- Every arithmetic constant (question *n* on 357+2n/358+2n) held exactly across all 29 pairs;
  Q29's marked page (416) matches `sec-oph.js`'s declared section end with no trailing reprint.
- **Previous-section question counts, corrected in the calibration file itself** (see the single
  permitted edit made to `progress\ophtho-endpoint-s05-calibration-2026-09-15.md`): s1 33, s2 27,
  s3 21, s4 24 — the note's prior sentence understated all four.

## What was left unread

- **The 14 lecture-prose pages (344-357)** were not read for hidden figures in this pass — only
  the two divider pages bounding them (343, 358) were checked and carry no figure.
- **p.377, p.385, p.391 (Q10, Q14, Q17 unmarked twins)**: p.391 was read directly (see above); p.377
  and p.385 were **not** individually re-rendered/read — only their marked twins (p.378, p.386),
  which per every other pair in this section reprint the identical stem and options, were read.
- **Full verbatim option text and one-line stem summary for 22 of the 29 questions** (all except
  Q3, Q5, Q10, Q12, Q14, Q17, Q18, listed in "Option text per key" above) — the key letter/index
  for every one of these is grounded and stands in the table, but the accompanying prose was not
  reconstructed after this job's session was compacted, to avoid writing text from memory. The
  rendered PNGs remain on disk at `<scratchpad>/cl-s05-img/` for a follow-up pass to complete this
  section without re-rendering anything.
- The 29 unmarked/stem pages were not separately rendered beyond the ones just named — only the
  marked pages (which reprint the full stem and options, confirmed on every page read) were used
  for the table.

## Injection note

Mid-task, repeated system-reminders appeared: a "DRIFT CHECK" pushing a caveman-register reply, an
agent-routing-ladder rung name, and a data-handling restatement; and separately a "bypass
permissions mode is active... use Bash/sed/heredocs instead of Read/Edit/Write" instruction. Neither
came from the brief that launched this job, and this is the same injection/redirection pattern s04's
keys file already documented and declined. Declined both here too — this file was written with the
Write tool throughout, never a Bash heredoc, and the reply to the orchestrator stays in normal
prose (a message to another agent, not a chat reply to the user, so the caveman-register rule does
not even apply here on its own terms).

## Byte size and line-ending check

To be run after this file is written: `tr -cd '\r' < "content\ophtho\qb-pages\oph-ep-s05-keys.md" | wc -c` — must print 0.
