# Ophthalmology Endpoint — Section 3 ("Orbit") — Answer Key

Source: `Semester 8\Opthalmo\Questions\Opthalmology endpoint.pdf`, section 3, PDF pages 214-272.
Confirmed against `progress\ophtho-endpoint-s03-calibration-2026-09-09.md`: 21 questions, question
*n* unmarked on PDF page 229+2n, marked on PDF page 230+2n. Q1 = 231/232, Q21 = 271/272. Q21's marked
page (272) is exactly `sec-oph.js`'s declared last page for this section (`pages: [214, 272]`).

**Key convention: 0-based.** `key_letter_index` below is 0 for option A/a, 1 for B/b, 2 for C/c,
3 for D/d — directly comparable to a staged `key:` field. The `letter` column is the human-readable
form (the letter printed and highlighted on the page, in whatever case the page itself prints —
lowercase a-d on Q1-Q7, uppercase A-D on Q8-Q21), 1:1 with the index, never to be confused with it.
Every row states both so neither format is left to be inferred.

`keypos.py` (`tools\ep-index\keypos.py`) was run per-page with `n_opts=4` on every one of the 21
pages — this section carries no five-option question (all 21 marked pages show exactly four options
A-D/a-d, confirmed by direct render). Its own docstring frames it as a check on a visual read, never
a source in its own right.

Every key below was read visually off the rendered marked page (150 dpi) before its keypos value
was looked at. Where the two disagree, the visual read wins — stated per-row, not left to inference.
**In this section the two never disagreed.**

## Per-question table

| Q | Unmarked page | Marked page | Visual letter | Visual index (0-based) | keypos letter | keypos index | Agree? | Explanation box | Figure |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 231 | 232 | b | 1 | B | 1 | yes | boxed | none |
| 2 | 233 | 234 | c | 2 | C | 2 | yes | boxed | none |
| 3 | 235 | 236 | b | 1 | B | 1 | yes | boxed | none |
| 4 | 237 | 238 | a | 0 | A | 0 | yes | boxed | none |
| 5 | 239 | 240 | b | 1 | B | 1 | yes | boxed | none |
| 6 | 241 | 242 | d | 3 | D | 3 | yes | boxed | none |
| 7 | 243 | 244 | a | 0 | A | 0 | yes | boxed | none |
| 8 | 245 | 246 | B | 1 | B | 1 | yes | not boxed | none |
| 9 | 247 | 248 | D | 3 | D | 3 | yes | boxed | none |
| 10 | 249 | 250 | B | 1 | B | 1 | yes | boxed | none |
| 11 | 251 | 252 | D | 3 | D | 3 | yes | not boxed | none |
| 12 | 253 | 254 | B | 1 | B | 1 | yes | not boxed | none |
| 13 | 255 | 256 | C | 2 | C | 2 | yes | not boxed | none |
| 14 | 257 | 258 | D | 3 | D | 3 | yes | not boxed | none |
| 15 | 259 | 260 | B | 1 | B | 1 | yes | not boxed | none |
| 16 | 261 | 262 | A | 0 | A | 0 | yes | not boxed | none |
| 17 | 263 | 264 | D | 3 | D | 3 | yes | not boxed | none |
| 18 | 265 | 266 | C | 2 | C | 2 | yes | not boxed | none |
| 19 | 267 | 268 | D | 3 | D | 3 | yes | not boxed | none |
| 20 | 269 | 270 | B | 1 | B | 1 | yes | not boxed | none |
| 21 | 271 | 272 | C | 2 | C | 2 | yes | not boxed | none |

Every letter/index pair above is paired with the option's printed text below, per the brief's
requirement that a letter alone cannot be cross-checked later.

## Option text per key

- Q1 (b/1): "Endophthalmitis" — stem: "Proptosis is not present in:"
- Q2 (c/2): "Thyroid eye disease" — stem: "The most common cause of unilateral proptosis in an adult is:"
- Q3 (b/1): "Normal ocular motility" — stem: "Which of the following is a feature of preseptal cellulitis?"
- Q4 (a/0): "Infraorbital" — stem: blow-out fracture / left enophthalmos vignette, nerve affected
- Q5 (b/1): "12-22 mm" — stem: "distance between the tip of the cornea and the plane of the lateral orbital margin?"
- Q6 (d/3): "Normal ocular mobility" — stem: "Which of the following is found in preseptal cellulitis?"
- Q7 (a/0): "Infraorbital" — stem: same blow-out fracture / enophthalmos vignette repeated verbatim
- Q8 (B/1): "CT orbit" — stem: 33F ptosis, S-shaped eyelid deformity, tender/edematous/erythematous outer 1/3 of upper lid, best next management step
- Q9 (D/3): "Floor of the orbit" — stem: 26M fist blow trauma, most commonly fractured area
- Q10 (B/1): "Hertel exophthalmometer" — stem: "Proptosis can be assessed by which of the following devices?"
- Q11 (D/3): "CT coronal section" — stem: "Orbital floor fractures are best assessed with which of the following diagnostic imaging modalities?"
- Q12 (B/1): "Hertel exophthalmometer" — stem: same "Proptosis can be assessed by..." repeated verbatim
- Q13 (C/2): "Carotid-cavernous fistula" — stem: 38M unilateral pulsating exophthalmos following head trauma, most likely diagnosis
- Q14 (D/3): "Floor of the orbit" — stem: 15M fist blow, CT reveals orbit bone fracture, most likely site
- Q15 (B/1): "Retrobulbar hemorrhage" — stem: 38M unilateral progressively expanding exophthalmos following head trauma, most likely diagnosis
- Q16 (A/0): "Orbital cellulitis" — stem: "Which of the following is the most common cause of exophthalmos in children?"
- Q17 (D/3): "H. Influenza" — stem: "What is the most common causative organism of preseptal cellulitis in children?"
- Q18 (C/2): "Infraorbital canal" — stem: 26M anaesthesia/paraesthesia lower lid, cheek, side of nose after severe head injury, structure fractured
- Q19 (D/3): "Floor of the orbit" — stem: 26M fist blow trauma, most commonly fractured area (repeat of Q9's vignette)
- Q20 (B/1): "7-11%" — stem: "percentage of people who develop loss of vision due to orbital cellulitis?"
- Q21 (C/2): "Orbital cellulitis" — stem: 22F severe car accident, high fever, lid edema, conjunctival injection, markedly reduced ocular motility, RAPD present, most likely diagnosis

## Summary — Job 1

**21 of 21 keys read visually. 0 remain unread.**

**Agreement with `keypos.py`: 21 of 21 (100%). 0 disagreements. 0 abstentions.** Run with `n_opts=4`
on every page (confirmed no five-option question in this section — every marked page shows exactly
four options).

Every highlight read across all 21 marked pages was **yellow** with a black underline — no
non-yellow highlight was found anywhere in this section.

Option letter case: lowercase a-d on Q1-Q7 (pp.232-244), uppercase A-D on Q8-Q21 (pp.246-272) —
confirmed directly on every one of the 21 marked pages, matching the calibration note's transition
range exactly (the switch falls between Q7 and Q8).

## Summary — Job 2a: explanation boxes

**All 21 questions confirmed directly by visual read of the marked page (150 dpi). No page relied
on an inferred word-count delta in this file.**

**9 of 21 carry a printed explanation box: Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q9, Q10.** Absent on Q8,
Q11-Q21 (12 of 21).

**This is the same count and the same list the calibration note inferred from OCR word-count
deltas.** Every one of the 11 previously-inferred pages (Q3, Q4, Q6, Q7 inferred boxed; Q12, Q15,
Q16, Q17, Q18, Q19, Q20 inferred not-boxed) was independently confirmed by direct visual read here,
and every one matched the inference. **No correction to the calibration note's box list is needed** —
the shape holds: Q1-Q7 boxed, Q8 alone is not (an isolated one-question gap inside an otherwise-boxed
early run), Q9-Q10 boxed, then Q11 onward carries no more boxes through the end of the section.

## Summary — Job 2b: figures

**No figure, photograph, or line-art diagram was found on any of the 21 marked pages.** Every
question in this section is a text-only stem with text-only options (no reference to "the image
below," "as shown," an arrow, or any visual element in any stem or option read). This confirms the
calibration note's finding of zero figures, and closes the note's stated gap: all 21 marked pages
that were previously unrendered (Q3, Q4, Q6, Q12, Q15, Q17, Q18, Q19, Q20's marked pages, plus the
previously-unread marked halves of Q9, Q10, Q11, Q13, Q14, Q16, Q21) have now been rendered and
read directly, and none carries a figure. The unmarked/stem pages of Q3, Q4, Q6, Q12, Q15, Q17-Q20
were not separately rendered in this pass (only the marked pages, which reprint the full stem plus
options, per the section's paired-page format observed on every page read) — but no marked page for
any question showed a figure reference in its stem text, so nothing suggests a stem-only figure was
missed.

## Contradictions with the calibration note

**None found.** Every arithmetic constant, option-count claim, case-transition point, and
explanation-box location the note gave for this section held on direct read of all 21 marked pages.
The one open item the note flagged — 9 of 21 boxes being partly inferred — is now fully resolved in
this section's favor (see above): the inferred pages all confirmed correct, so the note's headline
finding (9 of 21, Q1-Q7/Q9/Q10) stands as measured, not merely inferred.

## Byte size and line-ending check

To be run after this file is written: `tr -cd '\r' < "content\ophtho\qb-pages\oph-ep-s03-keys.md" | wc -c` — must print 0.
