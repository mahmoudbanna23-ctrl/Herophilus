# Ophthalmology Endpoint — Section 6 ("Conjunctiva") — Answer Key

Source: `Semester 8\Opthalmo\Questions\Opthalmology endpoint.pdf`, section 6, PDF pages 417-522.
Confirmed against `progress\ophtho-endpoint-s06-calibration-2026-09-15.md` and
`tools\bank-harness\sec-oph.js` entry 6 (`pages: [417, 522]`): 39 questions, question *n*
(position-based, n = 1..39) unmarked on PDF page 442+2n, marked on PDF page 443+2n. Q1 = 444/445,
Q39 = 520/521. The formula held with **no exception** across all 39 pairs, confirmed by direct
visual read of every marked page (150 dpi renders in `<scratchpad>/cl-s06-img/`). Printed question
numbers run 1-38 with "28" printed twice (physical positions 28 and 29 — two distinct questions,
confirmed); our `n` column is physical order, not the printed number.

**Key convention: 0-based.** `Visual index` and `keypos index` below are 0 for option A/a, 1 for
B/b, 2 for C/c, 3 for D/d, 4 for E/e — directly comparable to a staged `key:` field. The `Visual
letter` column is the human-readable form (the letter printed and highlighted on the page, in
whatever case the page itself prints), 1:1 with the index, never to be confused with it.

`tools\ep-index\keypos.py` was run on all 39 marked pages via a batch script (`n_opts=5` for Q19,
Q29, Q30; `n_opts=4` everywhere else). Every key was read visually off the rendered marked page
before its keypos value was cross-checked, per the brief's required order. In this section keypos
disagreed outright on one page (Q1) and abstained (produced no key) on one other (Q36) — both
resolved by eye, both involving a **cyan/turquoise highlight**, not yellow, which is what
`keypos.py`'s yellow-only pixel test cannot see. Every other page agreed.

**New column versus s05: none required.** Every column already in use from s05 (Options,
Explanation box, Figure) carries over unchanged.

## Per-question table

| Q | Unmarked page | Marked page | Visual letter | Visual index (0-based) | keypos letter | keypos index | Agree? | Options | Explanation box | Figure |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 444 | 445 | c | 2 | B | 1 | no (disagree — highlight is cyan, not yellow) | 4 (a-d) | boxed? (unconf.) | none seen |
| 2 | 446 | 447 | b | 1 | B | 1 | yes | 4 (a-d) | boxed? (unconf.) | none seen |
| 3 | 448 | 449 | d | 3 | D | 3 | yes | 4 (A,b,c,d — mixed case, see Anomalies) | boxed? (unconf.) | none seen |
| 4 | 450 | 451 | b | 1 | B | 1 | yes | 4 (a-d) | boxed? (unconf.) | none seen |
| 5 | 452 | 453 | c | 2 | C | 2 | yes | 4 (a-d) | boxed? (unconf.) | none seen |
| 6 | 454 | 455 | b | 1 | B | 1 | yes | 4 (a-d) | boxed? (unconf.) | none seen |
| 7 | 456 | 457 | a | 0 | A | 0 | yes | 4 (a-d) | boxed? (unconf.) | none seen |
| 8 | 458 | 459 | d | 3 | D | 3 | yes | 4 (a-d) | boxed? (unconf.) | eyeRounds.org watermarked eye photo (confirmed) |
| 9 | 460 | 461 | a | 0 | A | 0 | yes | 4 (a-d) | boxed? (unconf.) | none seen |
| 10 | 462 | 463 | a | 0 | A | 0 | yes | 4 (a-d) | boxed? (unconf.) | none seen |
| 11 | 464 | 465 | b | 1 | B | 1 | yes | 4 (a-d) | boxed? (unconf.) | none seen |
| 12 | 466 | 467 | a | 0 | A | 0 | yes | 4 (a-d) | boxed? (unconf.) | none seen |
| 13 | 468 | 469 | A | 0 | A | 0 | yes | 4 (A-D) — first uppercase question | boxed? (unconf.) | none seen |
| 14 | 470 | 471 | A | 0 | A | 0 | yes | 4 (A-D) — resolves calib's option-count doubt, full A-D visible both pages | boxed? (unconf.) | none seen |
| 15 | 472 | 473 | A | 0 | A | 0 | yes | 4 (A-D) | boxed? (unconf.) | none seen |
| 16 | 474 | 475 | C | 2 | C | 2 | yes | 4 (A-D) | boxed? (unconf.) | none seen |
| 17 | 476 | 477 | D | 3 | D | 3 | yes | 4 (A-D) | boxed? (unconf.) | none seen |
| 18 | 478 | 479 | B | 1 | B | 1 | yes | 4 (A-D) | none? (unconf.) | none seen |
| 19 | 480 | 481 | D | 3 | D | 3 | yes | 5 (A-E) | none? (unconf.) | none seen |
| 20 | 482 | 483 | D | 3 | D | 3 | yes | 4 (A-D) | none? (unconf.) | none seen |
| 21 | 484 | 485 | C | 2 | C | 2 | yes | 4 (A-D) | none? (unconf.) | none seen |
| 22 | 486 | 487 | A | 0 | A | 0 | yes | 4 (A-D) | none? (unconf.) | none seen |
| 23 | 488 | 489 | C | 2 | C | 2 | yes | 4 (A-D) | none? (unconf.) | none seen |
| 24 | 490 | 491 | A | 0 | A | 0 | yes | 4 (A-D) | none? (unconf.) | none seen |
| 25 | 492 | 493 | B | 1 | B | 1 | yes | 4 (A-D) | none? (unconf.) | none seen |
| 26 | 494 | 495 | D | 3 | D | 3 | yes | 4 (A-D) | none? (unconf.) | none seen |
| 27 | 496 | 497 | A | 0 | A | 0 | yes | 4 (A-D) | none? (unconf.) | none seen |
| 28 | 498 | 499 | B | 1 | B | 1 | yes | 4 (A-D) — printed "28" (first of dup) | none? (unconf.) | none seen |
| 29 | 500 | 501 | E | 4 | E | 4 | yes | 5 (A-E) — printed "28" again (dup, distinct question) | none? (unconf.) | none seen |
| 30 | 502 | 503 | D | 3 | D | 3 | yes | 5 (A-E) — printed "29", numbering resumes | none? (unconf.) | none seen |
| 31 | 504 | 505 | C | 2 | C | 2 | yes | 4 (A-D) — printed "30" | boxed (confirmed) | none seen |
| 32 | 506 | 507 | D | 3 | D | 3 | yes | 4 (A-D) — printed "31" | boxed (confirmed) | none seen |
| 33 | 508 | 509 | B | 1 | B | 1 | yes | 4 (A-D) — printed "32" | boxed (confirmed) | none seen |
| 34 | 510 | 511 | C | 2 | C | 2 | yes | 4 (A-D) — printed "33" | boxed (confirmed) | none seen |
| 35 | 512 | 513 | B | 1 | B | 1 | yes | 4 (A-D) — printed "34", last uppercase | boxed (confirmed) | none seen |
| 36 | 514 | 515 | c | 2 | (abstained: no-yellow-below-title; highlight is cyan not yellow) | - | visual-only | 4 (a-d) — printed "35", first lowercase since Q12 | none (confirmed) | none seen |
| 37 | 516 | 517 | b | 1 | B | 1 | yes | 4 (a-d) — printed "36"; option b fully legible, resolves calib's OCR-garble doubt | none (confirmed) | none seen |
| 38 | 518 | 519 | d | 3 | D | 3 | yes | 4 (a-d) — printed "37" | none (confirmed) | none seen |
| 39 | 520 | 521 | c | 2 | C | 2 | yes | 4 (a-d) — printed "38" | none (confirmed) | none seen |

p.522 is not a numbered question — see Anomalies (triple print of Q39's unmarked page).

## Option text per key

Grounded verbatim wording, transcribed directly off the rendered page (not reconstructed from
memory), for the rows where it is still on hand:

- Q1 (p.445): stem is a red/irritated-eye vignette; options a-d list differentials. The
  highlighted key is **"c. Vernal conjunctivitis"**, highlighted in cyan/turquoise, not yellow.
- Q8 (p.459): the marked page carries an embedded photograph, watermarked "eyeRounds.org", of an
  eye — an actual clinical image, not a diagram. Key is option **d**.
- Q14 (p.470/471): unmarked page 470 prints all four options in full — A. 5%, B. 10%, C. 15%,
  D. 50%; marked page 471 highlights **A** in yellow. This closes the calibration note's "only
  option c visible" flag — that was an OCR limitation, not a page defect.
- Q28-Q30 (pp.499/501/503): confirmed as three distinct real questions sharing/continuing the
  printed number "28"/"28"/"29" — Q28 key **B**, Q29 (5 options) key **E**, Q30 (5 options) key
  **D**. Exact option wording for these three was not preserved after this pass's checkpoint;
  only the key letter/index is restated here.
- Q30 (position 31, p.505): stem is a teacher/red-eye vignette; key **C. "Exposure to children
  with colds"**.
- Q31 (position 32, p.507): key **D. "Strict hygienic measure and cold compresses"**.
- Q32 (position 33, p.509): subconjunctival-hemorrhage vignette; key **B. "Subconjunctival
  hemorrhage"**.
- Q33 (position 34, p.511): key **C. "Viral conjunctivitis"**.
- Q34 (position 35, p.513): key **B. "Assurance and follow up"**.
- Q35 (position 36, p.515): lids-stuck-together vignette; key is **c. "Muco-purulent
  conjunctivitis"**, highlighted in cyan/turquoise, not yellow — the second and last cyan
  highlight found in this section.
- Q36 (position 37, p.517): post-influenza eye-pain vignette; key **b. "Fluorescein staining of
  the cornea"** — fully legible, no garbling; resolves the calibration note's OCR-garble flag on
  this page.
- Q37 (position 38, p.519): recurrent-bilateral-conjunctivitis-in-boys vignette; key **d. "Vernal
  keratoconjunctivitis (VKC)"**.
- Q38 (position 39, p.521): limbal-nodules vignette; key **c. "Bulbar spring catarrh"**.

For every other row, only the key letter/index in the table above is asserted — read directly off
the rendered page and cross-checked by `keypos.py`; its option-text wording is not restated here to
avoid writing prose from a compacted session rather than the source. `<scratchpad>/cl-s06-img/`
still holds every rendered page for a follow-up pass.

## Summary — keys and keypos

**39 of 39 keys read visually. 0 remain unread.**

**Agreement with `keypos.py`: 37 of 39 direct agreements, 1 genuine disagreement, 1 abstention.**

- **Q1 (p.445):** keypos returned a confident (non-abstaining) answer of **B/index 1**; the direct
  visual read is unambiguous: the true highlighted key is **c/index 2 ("Vernal conjunctivitis")**,
  highlighted in cyan, not yellow. This is a real tool-failure instance, not merely an abstention —
  keypos's yellow-pixel test found *some* yellow elsewhere on the page (title banner or box) and
  reported it as the key.
- **Q36 (p.515):** keypos abstained (`no-yellow-below-title`); the direct visual read shows a
  cyan/turquoise highlight, key **c/index 2 ("Muco-purulent conjunctivitis")**. This also resolves
  the calibration note's classifier-mistag flag on this page — it does carry a real highlighted
  key, just not a yellow one, which is why both the classifier and keypos missed it.

Every other highlight in the section (Q2-Q35, Q37-Q39, 37 of 39 marked pages) was yellow.

## Option count

**37 of 39 questions carry four lettered options; Q19, Q29, Q30 carry five (A-E).** Directly
confirmed, including both items the calibration note flagged as uncertain:

- Q14 (pp.470/471): confirmed 4 full options (A-D), not the single visible option OCR suggested.
- Q37/position-38 (p.517): confirmed option b is fully legible ("Fluorescein staining of the
  cornea"), not garbled as OCR read it.
- Q19 (p.481), Q29 (p.501), Q30 (p.503): all three confirmed to carry genuine A-E five-option sets.

## Option-letter case

**Three case runs, matching the calibration note's prediction exactly — no correction needed.**

- **Lowercase `a./b./c./d.` on positions 1-12** (pp.445-467), with position 3 (p.449) printing a
  genuine mixed case — first option "A." uppercase, remaining "b./c./d." lowercase — confirmed
  directly on the page, exactly as the calibration note's OCR flagged it.
- **Uppercase `A./B./C./D.(/E.)` on positions 13-35** (pp.469-513), including the three 5-option
  questions. The switch is confirmed to happen exactly at the position-12/position-13 boundary
  (p.467 lowercase, p.469 uppercase).
- **Lowercase `a./b./c./d.` again on positions 36-39** (pp.515-521). The switch back is confirmed
  exactly at the position-35/position-36 boundary (p.513 uppercase, p.515 lowercase).

## Explanation boxes

**Confirmed directly for positions 31-35 and 36-39; not reconfirmed for positions 1-30 in this
record.** Positions 31-35 (pp.505, 507, 509, 511, 513) each carry a printed blue-bordered
explanation box, confirmed by direct read this pass. Positions 36-39 (pp.515, 517, 519, 521) carry
no box, also confirmed by direct read this pass. This matches the calibration note's word-count-
delta prediction (box candidates Q1-Q17 and Q31-Q35) for the 31-35 stretch exactly. **Positions 1-30
were visually read for their keys but their box status was not separately re-confirmed after this
job's session was compacted** — the calibration note's prediction (boxed 1-17, absent 18-30) stands
unconfirmed-but-uncontradicted; see "What was left unread."

## Figures

**One confirmed figure: Q8 (p.459)**, an eyeRounds.org-watermarked photograph of an eye — a real
clinical image, not a diagram, embedded on the marked page. This directly contradicts the
calibration note's "no figure, anywhere in the section's OCR text" claim, which was a text-grep-only
check and could not see an embedded image. No other figure was seen on any of the other 38 marked
pages read. **The 25 lecture-prose pages (418-442) were not checked for figures in this pass** —
given the Q8 finding, their text-grep "clean" result cannot be trusted either; this is a real open
item, not safely assumed closed.

## Anomalies

- **Two cyan/turquoise highlights, not yellow — Q1 (p.445) and Q36/position-36 (p.515).** Every
  other highlight in the section (37 of 39) is yellow. This is a genuine printed-highlight-colour
  variation, confirmed at 150 dpi, matching (in kind, not location) the single cyan case s05
  documented at its own Q18.
- **Duplicate printed "28": confirmed as two distinct questions, not a duplicate.** Position 28
  (p.499) and position 29 (p.501) both print "28." on the page; they carry different stems
  (preauricular-lymphadenopathy-except vs. purulent-discharge-management) and different key
  letters/option counts (4 options key B vs. 5 options key E). Numbering resumes at "29" for
  position 30 (p.503).
- **Triple print of the final question, confirmed: p.522 is a verbatim reprint of p.520
  (position-39's unmarked page)** — identical stem "38. Ten years old boy complains of itching..."
  and identical lowercase a-d options, no highlight. So position 39 (Q38 printed) is printed three
  times: unmarked (520), marked (521), unmarked again (522). Matches the calibration note's
  prediction exactly.
- **Mixed case on p.449 (position 3):** confirmed genuine — "A." uppercase for the first option,
  "b./c./d." lowercase for the rest, on a page that otherwise belongs to the lowercase run.
- No page-arithmetic break, out-of-sequence page, or question spanning more than its two-page pair
  was found anywhere rendered.

## Contradictions with (and corrections to) the calibration note

- **"No figure anywhere in the section": CORRECTED.** Q8 (p.459) carries a real embedded
  photograph (eyeRounds.org watermark). The note's text-grep check could not see it; this is the
  most consequential correction in this file.
- **Q14 option count (only option c visible in OCR): CORRECTED — a genuine 4-option page (A-D),
  full text confirmed both unmarked and marked.**
- **Position-38/Q37 (p.517) option b garbled in OCR: CORRECTED — fully legible on the page**
  ("Fluorescein staining of the cornea"), no defect.
- **Case-transition boundaries (Q12/13, Q35/36) and the Q3 mixed-case flag: CONFIRMED exactly as
  predicted**, no correction needed.
- **Duplicate printed "28" (positions 28/29) and the p.522 triple print: CONFIRMED exactly as
  predicted.**
- **p.515 classifier mis-tag (`kind:"question"`, not `answered`): CONFIRMED the page does carry a
  real key** — the note's suspicion was right; the cause is a cyan (not yellow) highlight, invisible
  to both the classifier and to `keypos.py`.
- **p.470 classifier mis-tag (`kind:"other"`): CONFIRMED this is a genuine question page** (full
  stem + 4 options), mis-tagged by the classifier as the note suspected.
- **Explanation-box candidates Q31-Q35: CONFIRMED boxed.** Q36-Q39: CONFIRMED not boxed. Q1-Q30:
  **not independently reconfirmed** in this record — no correction made, none possible without a
  further pass.
- **Thin pages (417, 436, 443, 444, 462, 470, 498, 499) and the "meaning of thin" question: NOT
  checked in this pass** — deferred for budget, per the brief's "keys and anomalies first" rule.
- Every arithmetic constant (442+2n/443+2n) held exactly across all 39 pairs; Q39's marked page
  (521) sits inside the declared section end (522), with the section's real trailing content being
  the confirmed triple-print reprint, not an arithmetic break.

## What was left unread

- **The 25 lecture-prose pages (418-442)** were not checked for figures or content in this pass —
  given the Q8 figure finding, this is a genuinely open item, not one that can be assumed clean.
- **Explanation-box status for positions 1-30** was not reconfirmed after this job's session was
  compacted — the table above marks these rows "boxed?/none? (unconf.)"; only the calibration
  note's word-count-delta prediction stands behind them.
- **Thin pages 417, 436, 443, 444, 462, 470, 498, 499** — not individually re-examined for layout in
  this pass (417 and 443 are the section's own divider pages, already accounted for in the page
  count; the rest were read as part of the question pairs above but not separately flagged for
  "thinness").
- **Full verbatim option text and one-line stem summary for positions 2, 4-7, 9-13, 15-27** — the
  key letter/index for every one of these is grounded and stands in the table, read directly off
  the rendered page and cross-checked by `keypos.py`, but the accompanying prose was not
  reconstructed after this job's session was compacted, to avoid writing text from memory. The
  rendered PNGs remain at `<scratchpad>/cl-s06-img/p-0417.png` through `p-0522.png` for a follow-up
  pass to complete this section without re-rendering anything.
- The 39 unmarked/stem pages were not separately transcribed beyond what is noted above (Q14's
  unmarked page 470 was read directly to resolve its option-count flag) — only the marked pages
  (which reprint the full stem and options on every pair checked) were used for the table.

## Injection note

Mid-task, repeated system-reminders appeared: several "DRIFT CHECK" pushes toward a caveman-register
reply, an agent-routing-ladder rung name, and a data-handling restatement; and separately a "bypass
permissions mode is active... prefer Bash/sed/heredocs over Read/Edit/Write" instruction. None of
these came from the brief that launched this job. This is the same injection/redirection pattern
s04's and s05's own keys files already documented and declined. Declined here too — this file was
written with the Write tool throughout, never a Bash heredoc, and the reply to the orchestrator
stays in normal prose (a message to another agent, not a chat reply to the user, so the
caveman-register rule does not apply to it on its own terms).

## Byte size and line-ending check

To be run after this file is written: `tr -cd '\r' < "content\ophtho\qb-pages\oph-ep-s06-keys.md" | wc -c` — must print 0.
