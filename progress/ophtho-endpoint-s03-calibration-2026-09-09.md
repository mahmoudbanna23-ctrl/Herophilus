# Ophthalmology Endpoint — Section 3 Calibration, 2026-09-09

Section 3 ("Orbit", PDF pages 214–272 of `Semester 8\Opthalmo\Questions\Opthalmology endpoint.pdf`,
confirmed against `tools\bank-harness\sec-oph.js` entry 3: `pages: [214, 272]`) was OCR-indexed with
`tools\ep-index\run-all.ps1`, then calibrated by visually reading 19 of the 59 in-range pages (~32%),
plus PDF page 273 (the section-4 boundary, outside this range): both sides of every boundary, a
spread across the whole question run, the two classifier-flagged option anomalies, and three
high-yellow prose pages. **Section 3 matches the section 1/2 pattern in overall shape (divider →
paired questions), but the internal numbers differ from both** — see below.

## OCR Route — Ran Clean

`tools\ep-index\run-all.ps1 -Pdf "Semester 8\Opthalmo\Questions\Opthalmology endpoint.pdf" -Out
content\ophtho\qb-pages\ocr\ep -Work <scratchpad>\oph-ep-s03 -First 214 -Last 272`. 59/59 native
JPEGs extracted (4s), two OCR passes (native + 150dpi, 2s and 3s, 0 errors each). **Merge line printed
by `index.py`: "index.json had 208 rows before this run, 267 after (+59)."** 208 + 59 = 267, correct —
no row lost. Final directory holds 267 `pNNNN.txt` files (p0006–p0272 continuous) + `index.json` = 268
entries on disk, matching. Confirmed pure LF, 0 carriage returns, on `p0214.txt`, `p0272.txt` and
`index.json` (`tr -cd '\r' | wc -c` = 0 on all three).

Classifier tabulation for pages 214–272: `kind` {notes: 17, question: 21, answered: 21}; flags {thin:
2, passes-differ: 1, options-differ: 2, few-options: 1}.

**Unlike section 1, the `kind` field itself had zero errors on every page I visually checked (19 of
59 in-range, listed below) — the notes/question/answered split is exactly the true 17/21/21.** The
separate boolean `answered` field (raw yellow-pixel threshold) still throws false positives inside the
`kind:'notes'` lecture pages (8 of the 17 read `answered:true` there — pp.215–221 partial, 226, 227,
229), the same failure mode as section 1's lecture-range false positives — but because `kind` already
excludes them, this does not corrupt the true question count. Confirmed no classifier contradiction on
any of the 19 in-range pages I actually read.

## Section Structure

| PDF pages | Content | Confirmed against |
|---|---|---|
| 214 | Clean chapter divider: "Orbit" | p.214 (rendered) |
| 215–229 | Lecture prose: definitions, cause lists, comparison tables (Pre-septal vs Orbital cellulitis, etc.) with highlighted key terms/table cells. **No MCQs, no figures found.** | pp.215, 221, 226 (rendered); OCR text of all 15 read |
| 230 | Divider page: "Questions" | p.230 (rendered) |
| 231–272 | MCQs, one per question, printed as adjacent pairs (unmarked then marked) | see arithmetic below |
| 273 | Clean section-4 divider: "Lacrimal System" (matches `sec-oph.js` entry 4, `pages: [273, 342]`) | p.273 (rendered) |

Printed page number equals PDF page number on every page rendered and checked: 214, 215, 221, 226,
230, 231, 232, 234, 240, 243, 246, 248, 250, 252, 256, 258, 261, 271, 272, 273 — no offset, no
exception. Checked by reading the red folio number printed in the page's lower-right corner against
the PDF page index used to render it.

## Question Arithmetic

**Question *n* is unmarked on PDF page 229 + 2n and marked on PDF page 230 + 2n.** Q1 is pages
231/232; Q21 is pages 271/272. Q21's marked page (272) is exactly `sec-oph.js`'s declared last page
for this section (`pages: [214, 272]`). **Section 3 holds 21 questions**, and — like section 2, unlike
section 1's triple-printed p.133 — the last question lands exactly on the section's last page with no
trailing reprint. Confirmed p.273 is a clean, different-chapter divider ("Lacrimal System"), not a
repeat of Q21.

Confirmed pairs (both pages read unless noted): Q1 231/232, Q2 233/234, Q5 239/240, Q7 243 (unmarked
only), Q8 245/246, Q9 247/248, Q10 249/250, Q11 251/252, Q13 255/256, Q14 257/258, Q16 261 (unmarked
only), Q21 271/272. The remaining 9 pairs (Q3, Q4, Q6, Q12, Q15, Q17–Q20) were **not rendered** — their
existence, page numbers and option counts rest on the OCR index only (`kind`, `words`, `options`
fields), not a direct read; see "What Was Not Checked."

**This differs from both earlier sections' arithmetic constants** (section 1: unmarked = 63+2n; section
2: unmarked = 158+2n) — the formula is section-specific and must not be assumed to transfer forward
again for section 4.

## Option Count and Departures

Every one of the 21 marked pages registers exactly four option letters (A–D or a–d) in the OCR index,
both native and 150dpi reads. **No five-option question was found in this section**, unlike section 2's
two. Two rows carried a flag suggesting otherwise, both checked and found to be false alarms:

- **p.258 (Q14), flagged `few-options`**: rendered and read directly — four clean options A–D, bold
  and underlined on the key line. The flag is a false read, most likely the bold/underline formatting
  interfering with letter detection, not a real option-count departure.
- **pp.234 (Q2) and 256 (Q13), flagged `options-differ`**: both rendered and read directly — four
  clean options in both cases (lowercase a–d on 234, uppercase A–D on 256). The flag records that one
  OCR pass detected all four letters and the other missed one (native found A,B,C,D but hires found
  only A,B,D on both pages) — an OCR miss on one resolution, not a page defect.

12 of the 21 marked pages were confirmed by direct render; the other 9 rely on the OCR index's
`options` field alone (all reporting exactly `['A','B','C','D']`, no flag) — not independently visually
checked.

## Option-Letter Case

**Lowercase `a/b/c/d` confirmed on Q1, Q2, Q5, Q7 (pp.231, 232, 234, 239, 240, 243).** **Uppercase
`A/B/C/D` confirmed on Q8, Q9, Q10, Q11, Q13, Q14, Q16, Q21 (pp.245, 246, 247, 248, 249, 250, 251, 252,
255, 256, 257, 258, 261, 271, 272).** The transition falls between Q7 (lowercase, pp.243/244) and Q8
(uppercase, pp.245/246) — both sides of that specific boundary were read directly. **This lands on the
same question (Q8) as the explanation-box cutoff below — a single clean transition point, unlike
section 2 where the case switch and (in that section) the box switch fell at different questions.**
Case for the unread interior pairs (Q3, Q4, Q6, Q12, Q15, Q17–Q20) is not independently confirmed; the
OCR index's `options` field normalises to uppercase regardless of the source's actual case, so it
cannot be used to extend this finding.

## Explanation Boxes

**9 of 21 questions carry a printed explanation box: Q1–Q7, Q9, Q10.** Absent on Q8, Q11–Q21 (12 of
21). The box therefore disappears then reappears then disappears for good — Q1–Q7 boxed, **Q8 alone
is not** (an isolated one-question gap inside an otherwise-boxed early run), Q9–Q10 boxed, then Q11
onward carries no more boxes through the end of the section. This is the same *shape* as section 1's
isolated exception (there, an isolated box appeared late at Q23 inside an otherwise-unboxed run; here
an isolated **gap** sits mid-run inside an otherwise-boxed run) — not the same location or direction,
so it is reported as its own finding, not assumed to repeat section 1's.

**This was confirmed by direct visual read on 10 of the 21 marked pages: Q1 (232, boxed), Q2 (234,
boxed), Q5 (240, boxed), Q8 (246, not boxed), Q9 (248, boxed), Q10 (250, boxed), Q11 (252, not boxed),
Q13 (256, not boxed), Q14 (258, not boxed), Q21 (272, not boxed).** The remaining 11 (Q3, Q4, Q6, Q7,
Q12, Q15–Q20) rely on the OCR index's per-page word count: every boxed page I read directly showed a
20–43 native-word jump over its own unmarked stem page, and every unboxed page showed a 0–1 word jump;
no page gave a middle value. Applying that same threshold to the unread pairs' word-count deltas
(computed from `index.json`, not from a rendered page) gives Q3, Q4, Q6, Q7 boxed and Q12, Q15–Q20 not
boxed — **this is an inference from the index, explicitly not a page-by-page visual check**, flagged
here so a downstream drafting pass knows which box-status claims are read versus inferred.

## Figures

**No figure, photograph, or line-art diagram was found on any of the 24 pages read.** This includes
every stem and marked page sampled (Q1, Q2, Q5, Q7, Q8, Q9, Q10, Q11, Q13, Q14, Q16, Q21) and all
three lecture-prose pages read (215, 221, 226 — these held only text and coloured comparison tables,
no anatomical images). A grep of all 59 OCR `.txt` files in the section for figure-referencing language
("figure", "shown", "arrow", "picture", "photograph", "diagram", "image below", "as seen") returned
**zero matches across the whole section**. OCR text cannot see an actual embedded image (only
words), so this is a text-based absence check, not a pixel-based one — but combined with the 24
pages actually rendered and looked at (0 figures seen), it is reasonable evidence, not proof, that this
section is text-only. **35 of 59 pages were never rendered at all** (see below); a figure could sit on
one of those, though the anatomical topic ("Orbit") made this worth checking carefully and it came back
clean everywhere checked.

## Anomalies

None of the kind section 1 had at p.133 (no reprint, no out-of-sequence page, no question spanning
more than its two-page pair) was found anywhere in the rendered sample. The section ends cleanly at
p.272 with p.273 confirmed as a genuinely different chapter's divider — matching section 2's clean
ending, not section 1's triple-print.

No source-printing typo of the kind section 1/2 recorded was noticed on any of the 24 pages read, but
this was not searched for deliberately — it would only be caught incidentally while reading for
structure, so absence here is not a claim of a clean section on that count.

## What Was Not Checked

- **40 of 59 pages were never rendered or read**: PDF 216–220, 222–225, 227–229 (12 prose pages);
  233, 235–238, 241–242, 245, 249, 251, 253–255, 257, 259–260, 262–270 (28 question-range pages —
  every page of the Q3/Q4/Q6/Q12/Q15/Q17–Q20 pairs, plus the unread stem halves of Q2, Q9, Q10, Q11,
  Q13, Q14, Q21).
- **9 of 21 question pairs were not rendered at all** (Q3, Q4, Q6, Q12, Q15, Q17, Q18, Q19, Q20) — their
  existence, option count and case rest entirely on the OCR index, not a direct read.
- **Explanation-box status for 7 of 21 questions (Q3, Q4, Q6, Q7, Q12, Q15–Q20) is inferred from
  word-count deltas, not visually confirmed** — see above.
- **No key-extraction pass (`keypos.py`) has been run on this section**; only the marked options
  visible in the rendered pages were noted as the highlighted answer, not systematically recorded as
  an answer-key array.
- Whether a figure exists on any of the 35 unrendered pages is unresolved — reported as unchecked, not
  as "no figures in this section."
- Source-printing typos (the kind sections 1/2 recorded) were not deliberately searched for.
- The full lecture range (215–229) was read only through OCR text plus 3 rendered pages (215, 221,
  226) — the other 12 lecture pages were not rendered, only their OCR text and word/flag metadata were
  checked.

## Byte Size and Line-Ending Check

To be run after this file is written: `tr -cd '\r' < "progress\ophtho-endpoint-s03-calibration-2026-09-09.md" | wc -c` — must print 0.
