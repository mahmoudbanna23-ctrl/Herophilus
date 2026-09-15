# Ophthalmology Endpoint — Section 4 ("Lacrimal System") — Answer Key

Source: `Semester 8\Opthalmo\Questions\Opthalmology endpoint.pdf`, section 4, PDF pages 273-342.
Confirmed against `progress\ophtho-endpoint-s04-calibration-2026-09-09.md` and
`tools\bank-harness\sec-oph.js` entry 4 (`pages: [273, 342]`): 24 questions, question *n*
unmarked on PDF page 293+2n, marked on PDF page 294+2n. Q1 = 295/296, Q24 = 341/342. Q24's marked
page (342) is exactly `sec-oph.js`'s declared last page for this section.

**Key convention: 0-based.** `Visual index` and `keypos index` below are 0 for option A/a, 1 for
B/b, 2 for C/c, 3 for D/d, 4 for E/e — directly comparable to a staged `key:` field. The `Visual
letter` column is the human-readable form (the letter printed and highlighted on the page, in
whatever case the page itself prints), 1:1 with the index, never to be confused with it. Every
row states both so neither format is left to be inferred.

`keypos.py` (`tools\ep-index\keypos.py`) was run per-page on every one of the 24 marked pages,
`n_opts=4` for all except Q18 (pp.329/330), which was run at `n_opts=5` after the visual read
found five lettered options on that page — running it first at `n_opts=4` (the section default)
would have been the wrong parameter for that page, not a tool disagreement.

Every key below was read visually off the rendered marked page (150 dpi) before its keypos value
was looked at. Where the two disagree, the visual read wins — stated per-row, not left to
inference. **In this section the two never disagreed** (Q18 required a re-run with the correct
option count first; once run correctly, it agreed).

**New column versus s03: `Options`.** Section 3 had no departure from four options anywhere, so
s03 carried no such column. Section 4 has one (Q18, five options), so it is recorded here per
question rather than only in prose.

## Per-question table

| Q | Unmarked page | Marked page | Visual letter | Visual index (0-based) | keypos letter | keypos index | Agree? | Options | Explanation box | Figure |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 295 | 296 | a | 0 | A | 0 | yes | 4 (a-d) | boxed | none |
| 2 | 297 | 298 | c | 2 | C | 2 | yes | 4 (a-d) | boxed | none |
| 3 | 299 | 300 | c | 2 | C | 2 | yes | 4 (a-d) | boxed | none |
| 4 | 301 | 302 | c | 2 | C | 2 | yes | 4 (a-d) | boxed | none |
| 5 | 303 | 304 | C | 2 | C | 2 | yes | 4 (A-D) | boxed | none |
| 6 | 305 | 306 | C | 2 | C | 2 | yes | 4 (A-D) | boxed | none |
| 7 | 307 | 308 | B | 1 | B | 1 | yes | 4 (A-D) | not boxed | none |
| 8 | 309 | 310 | B | 1 | B | 1 | yes | 4 (A-D) | not boxed | none |
| 9 | 311 | 312 | B | 1 | B | 1 | yes | 4 (A-D) | not boxed | none |
| 10 | 313 | 314 | D | 3 | D | 3 | yes | 4 (A-D) | not boxed | none |
| 11 | 315 | 316 | A | 0 | A | 0 | yes | 4 (A-D) | not boxed | none |
| 12 | 317 | 318 | B | 1 | B | 1 | yes | 4 (A-D) | not boxed | none |
| 13 | 319 | 320 | C | 2 | C | 2 | yes | 4 (A-D) | not boxed | none |
| 14 | 321 | 322 | C | 2 | C | 2 | yes | 4 (A-D) | not boxed | none |
| 15 | 323 | 324 | D | 3 | D | 3 | yes | 4 (A-D) | not boxed | none |
| 16 | 325 | 326 | B | 1 | B | 1 | yes | 4 (A-D) | not boxed | none |
| 17 | 327 | 328 | B | 1 | B | 1 | yes | 4 (A-D) | not boxed | none |
| 18 | 329 | 330 | B | 1 | B | 1 | yes | **5 (A-E)** | not boxed | none |
| 19 | 331 | 332 | c | 2 | C | 2 | yes | 4 (a-d) | not boxed | none |
| 20 | 333 | 334 | c | 2 | C | 2 | yes | 4 (a-d) | not boxed | none |
| 21 | 335 | 336 | a | 0 | A | 0 | yes | 4 (a-d) | not boxed | none |
| 22 | 337 | 338 | c | 2 | C | 2 | yes | 4 (a-d) | not boxed | none |
| 23 | 339 | 340 | d | 3 | D | 3 | yes | 4 (a-d) | not boxed | none |
| 24 | 341 | 342 | a | 0 | A | 0 | yes | 4 (a-d) | not boxed | none |

Every letter/index pair above is paired with the option's printed text below, per the brief's
requirement that a letter alone cannot be cross-checked later.

## Option text per key

- Q1 (a/0): "Meibomian gland" — stem: "Which of the following is responsible for the secretion
  of the outer oily layer of the tear film?"
- Q2 (c/2): "Dacryocystorhinostomy" — stem: 59F chronic painless tearing/recurrent conjunctivitis,
  positive regurge test, treatment of choice
- Q3 (c/2): "Schirmer test" — stem: "To diagnose dry eye we do:"
- Q4 (c/2): "Dacryocystorhinostomy" — stem: same 59F vignette repeated verbatim (near-duplicate of
  Q2, see Anomalies)
- Q5 (C/2): "Goblet cells" — stem: "Which of the following is the structure responsible for
  secreting inner mucus layer of tear film?"
- Q6 (C/2): "Immediate probing" — stem: 6-month-old child, epiphora, reflux of mucus from
  punctum on sac pressure, best management
- Q7 (B/1): "CT orbit" — stem: 33F ptosis, S-shaped upper eyelid deformity, tenderness/edema/
  erythema of outer 1/3 upper lid, best next step
- Q8 (B/1): "Middle aqueous layer" — stem: "Which of the following layers is main bulk of tear
  film?"
- Q9 (B/1): "Chronic dacryocystitis" — stem: 32M excessive tearing, painless lacrimal sac swelling
  at inner canthus, most likely diagnosis
- Q10 (D/3): "Immediate DCR" — stem: same 32M case as Q9, best line of management
- Q11 (A/0): "Acute dacryocystitis" — stem: 33F painful red swelling localized over medial canthal
  area, most suitable diagnosis
- Q12 (B/1): "Lacrimal sac massage and probing surgery if no response after 1 year of age" —
  stem: 6-month-old child, epiphora, reflux of **purulent material** on sac pressure, best
  management
- Q13 (C/2): "Confirm dry eye disease and look for its cause since TBUT is lower than normal" —
  stem: 25M foreign body sensation/tearing/redness/itching, TBUT 7 seconds, most accurate
  conclusion
- Q14 (C/2): "Treatment of the cause" — stem: "Which of the following is the most important line
  of management of dry eye disease?"
- Q15 (D/3): "Thyroid eye disease" — stem: which condition contributes to dry eye by two
  mechanisms (decreased secretion + increased evaporation)
- Q16 (B/1): "Lacrimal glands" — stem: "Which of the following is the structure responsible for
  secreting middle watery layer of tear film?"
- Q17 (B/1): "Probing is carried out only one time, after 1 year of age" — stem: "All of the
  following are true regarding treatment of congenital nasolacrimal duct obstruction **except**?"
  (the highlighted option is the false/exception statement, not a positive fact — note the
  "except" framing before reusing this key downstream)
- Q18 (B/1, **5 options A-E**): "Acute dacryocystitis" — stem: 40M pain/redness/swelling over
  nasal end of right lower eyelid, watery eye with purulent discharge, redness extending to nasal
  peri-orbital area, mucoid discharge expressible from punctum, single most appropriate diagnosis
  (distractors: acute conjunctivitis, acute iritis, retrobulbar neuritis, scleritis)
- Q19 (c/2): "Dacryo-cysto-rhinostomy" — stem: 40yo epiphora, lacrimal irrigation from lower
  punctum returns saline from upper punctum, best treatment
- Q20 (c/2): "Probing of the lacrimal Passages" — stem: 14-month-old child, recurrent redness/
  discharge left eye since birth, positive regurge test, treatment
- Q21 (a/0): "Acute dacryocystitis" — stem: old woman, fullness at medial canthus, area red/hot/
  tender, regurge test **negative**, diagnosis
- Q22 (c/2): "Topical antibiotics and massage" — stem: 6-month-old infant, recurrent watering/
  discharge one eye, best line of treatment
- Q23 (d/3): "Massage" — stem: newborn, epiphora right eye, mucous reflux from lower punctum on
  sac pressure, best line of treatment is antibiotics and ___
- Q24 (a/0): "Systemic and local antibiotics" — stem: 30yo, recent watering + recurrent
  conjunctivitis, regurgitation on pressing medial canthal ligament, first treatment

## Summary — keys and keypos

**24 of 24 keys read visually. 0 remain unread.**

**Agreement with `keypos.py`: 24 of 24 (100%). 0 disagreements. 0 abstentions.** Run with
`n_opts=4` on 23 of 24 pages and `n_opts=5` on Q18 (p.330) after the visual read found five
lettered options there — passing the wrong option count on the first pass would have produced a
mismatch describing the wrong parameter, not a real disagreement, so the corrected run is what is
reported.

Every highlight read across all 24 marked pages was **yellow** with a black underline — no
non-yellow highlight was found anywhere in this section.

## Option count

**23 of 24 questions carry exactly four lettered options.** **Q18 (pp.329/330) carries five
options, A through E** — confirmed directly on the rendered marked page (options: A. Acute
conjunctivitis, B. Acute dacryocystitis [keyed], C. Acute iritis, D. Retrobulbar neuritis, E.
Scleritis). This matches the calibration note's flag (raised from the OCR index, not yet
rendered) and the render confirms it. This is the same shape section 2 showed (two five-option
questions), now once in section 4.

## Option-letter case

**This section has TWO case transitions, not one — a correction to the calibration note.**

- **Lowercase `a/b/c/d` on Q1-Q4** (pp.296-302) — matches the calibration note.
- **Uppercase `A/B/C/D`(/E) on Q5-Q18** (pp.304-330) — matches the calibration note for this
  span.
- **⚠️ Lowercase `a/b/c/d` again on Q19-Q24** (pp.332-342) — confirmed directly on every one of
  these six marked pages (Q19 "a) b) c) d)", Q20 "a) b) c) d)", Q21 "a) b) c) d)", Q22
  "a) b) c) d)", Q23 "a) b) c) d)", Q24 "a) b) c) d)"). **The calibration note states "Uppercase
  A-D confirmed from Q5 through Q24 (pp.303-342, all sampled pages in that range)" and lists Q20,
  Q22, Q23, Q24 among its interior sample points — this is wrong for those four pages as read
  here.** The calibration note's own confirmed-pairs list does not actually include a direct read
  of Q19-Q24's marked pages (it lists "Q22 338 (marked only), Q23 339 (unmarked only)" among the
  14 of 24 pairs it directly rendered, so its case claim for that stretch rested on inference, not
  a page it had read — this second transition was simply missed until this pass rendered those
  pages). The case sequence for the whole section is **lower (Q1-4) -> upper (Q5-18) -> lower
  again (Q19-24)**, confirmed page-by-page, not inferred.

## Explanation boxes

**6 of 24 questions carry a printed explanation box: Q1-Q6**, confirmed directly on their marked
pages (pp.296, 298, 300, 302, 304, 306). **Absent from Q7 through Q24** — confirmed directly not
boxed on every one of the remaining 18 marked pages (pp.308, 310, 312, 314, 316, 318, 320, 322,
324, 326, 328, 330, 332, 334, 336, 338, 340, 342). This matches the calibration note's finding
exactly, and closes its stated gap: the note's box-list was partly inferred from OCR word-count
deltas for Q9-Q11, Q13-Q15, Q17-Q19, Q21; every one of those is now directly confirmed not boxed,
and every previously-rendered page's box status is unchanged.

## Figures

**No figure, photograph, or line-art diagram was found on any of the 24 marked pages.** Every
question in this section is a text-only stem with text-only options. This closes the
calibration note's stated gap (only 30 of 70 in-range pages had been rendered there; all 24 marked
pages are now rendered and read, and none carries a figure). The 24 unmarked/stem pages were not
separately re-rendered in this pass (the marked pages reprint the full stem plus options, per the
section's paired-page format, consistent with sections 1-3), so a stem-only figure on an unmarked
page cannot be fully excluded, but no marked-page stem text referenced an image, arrow, or "as
shown" anywhere.

## Anomalies

**Q2/Q4 near-duplicate confirmed, matching the calibration note's flag exactly.** Q2 (pp.297/298)
and Q4 (pp.301/302) are near-duplicate questions: identical stem (59F chronic painless tearing/
recurrent conjunctivitis/positive regurge test), identical four options, identical highlighted key
(c. Dacryocystorhinostomy). Their explanation boxes differ: Q2's box reads "...which creates a new
**drainage pathway** between the lacrimal sac and nasal cavity" (three sentences, ends there); Q4's
box reads "...which creates a new **passage** between the lacrimal sac and nasal cavity. **Massage
or probing is only for congenital or early cases.**" (four sentences, one extra clause). Both boxes
are captured above rather than folded, per the calibration note's flag and this project's fold
rules (a difference in wording is a reason not to fold silently).

**Q9/Q10 form a linked pair (diagnosis then management of the same vignette), not a duplicate** —
Q9 asks for the diagnosis (32M, painless lacrimal sac swelling, key: chronic dacryocystitis), Q10
re-states the identical stem and asks for the best management of that same case (key: immediate
DCR). This is a "previous case" callback, the same construction section 3 used for its blow-out
fracture and proptosis-assessment pairs — not flagged as a fold candidate since the two ask
different things.

**Q17 is an "except" question** — the four listed statements about congenital NLD obstruction
treatment are true except the highlighted one, which is the exception/false statement, not a
positive fact. Recorded so any downstream drafting does not read the option text as an assertion
to teach directly.

No page-arithmetic break, out-of-sequence page, or question spanning more than its two-page pair
was found anywhere rendered.

## Contradictions with (and corrections to) the calibration note

- **Case-transition claim, Q19-Q24: CORRECTED.** The note claimed uppercase held unbroken through
  Q24; the render shows Q19-Q24 are printed lowercase, a second, previously-unfound transition at
  the Q18/Q19 boundary. See "Option-letter case" above for the detail and the specific pages read.
- **Q18 five-option finding: CONFIRMED**, not contradicted. The calibration note flagged this as
  index-only and asked for a direct render before trusting it; the direct render (pp.329/330)
  confirms five options A-E and the highlighted key at B/index 1.
- **Explanation-box list (Q1-Q6 boxed, rest not): CONFIRMED**, no correction needed. Every
  previously-inferred page is now directly read and matches.
- **Q9-Q24 unread-pair option counts (four, per the OCR index): CONFIRMED** for every question
  except Q18, which the note had already separately flagged.
- **No figures anywhere in the section: CONFIRMED**, closing the note's stated gap (40 of 70
  pages unrendered there; all 24 marked pages, plus every question page read for this file, are
  now rendered).
- Every arithmetic constant (question *n* on 293+2n/294+2n) held exactly; Q24's marked page (342)
  matches `sec-oph.js`'s declared section end with no trailing reprint.

## What was left unread

The 24 unmarked/stem pages (295, 297, 299, ..., 341) were **not** separately rendered in this
pass — only the marked pages, which reprint the full stem and options (confirmed on every page
read). Nothing else in the section's declared range (273-342) was left unread for the purpose of
this key-extraction job; the lecture-prose pages (274-293) and the two divider pages (273, 294)
were outside this job's scope (keys only).

## Injection note

Mid-task, two repeated system-reminders appeared: one instructing "bypass permissions mode is
active... use Bash/sed/heredocs instead of Read/Edit/Write," and a separate "drift check" pushing
caveman-register replies, an agent-routing ladder, and a re-statement of the data rule — none of
these came from the brief that launched this job. Both are the injection/redirection pattern the
brief warned about ("twenty workers have now hit exactly that and correctly declined it").
Declined both — this file was written with the Write tool throughout, never a heredoc, and no
work was rerouted to another seat.

## Byte size and line-ending check

To be run after this file is written: `tr -cd '\r' < "content\ophtho\qb-pages\oph-ep-s04-keys.md" | wc -c` — must print 0.
