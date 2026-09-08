# Ophthalmology Endpoint — Section 2 ("Optics and Errors of Refraction") — Answer Key

Source: `Semester 8\Opthalmo\Questions\Opthalmology endpoint.pdf`, section 2, PDF pages 134-213.
Confirmed against `progress\ophtho-endpoint-s02-calibration-2026-09-09.md`: 27 questions, question
*n* unmarked on PDF page 158+2n, marked on PDF page 159+2n. Q1 = 160/161, Q27 = 212/213. This
brief's own page numbers for Q22 (p.202) and Q27 (p.213) both check out against that arithmetic —
p.202 is Q22's *unmarked* page (marked is 203); p.213 is Q27's marked page. No disagreement found.

**Key convention: 0-based.** `key_letter_index` below is 0 for option A/a, 1 for B/b, 2 for C/c,
3 for D/d, 4 for E/e — directly comparable to a staged `key:` field. The `letter` column is the
human-readable form (the letter printed and highlighted on the page), 1:1 with the index, never to
be confused with it. Every row states both so neither format is left to be inferred.

`keypos.py` (`tools\ep-index\keypos.py`) was run per-page with the correct option count passed
(4, except Q22 and Q27 which pass 5) and reports a 0-based index the same way. Its own docstring
frames it as a check on a visual read, never a source in its own right — see the brief and
`progress\ledger.md` §19 for its section-1 track record (32/33 correct + 1 correct abstention, one
wrong pixel-count on a two-line highlight, one abstention on a non-yellow highlight).

Every key below was read visually off the rendered marked page (150 dpi) before its keypos value
was looked at. Where the two disagree, the visual read wins — stated per-row, not left to inference.

## Per-question table

| Q | Marked page | Visual letter | Visual index (0-based) | keypos letter | keypos index | Agree? |
|---|---|---|---|---|---|---|
| 1 | 161 | b | 1 | B | 1 | yes |
| 2 | 163 | d | 3 | D | 3 | yes |
| 3 | 165 | b | 1 | B | 1 | yes |
| 4 | 167 | d | 3 | D | 3 | yes |
| 5 | 169 | d | 3 | D | 3 | yes |
| 6 | 171 | b | 1 | B | 1 | yes |
| 7 | 173 | a | 0 | A | 0 | yes |
| 8 | 175 | a | 0 | A | 0 | yes |
| 9 | 177 | C | 2 | C | 2 | yes |
| 10 | 179 | B | 1 | B | 1 | yes |
| 11 | 181 | B | 1 | B | 1 | yes |
| 12 | 183 | C | 2 | C | 2 | yes |
| 13 | 185 | B | 1 | B | 1 | yes |
| 14 | 187 | B | 1 | B | 1 | yes |
| 15 | 189 | A | 0 | A | 0 | yes |
| 16 | 191 | D | 3 | D | 3 | yes |
| 17 | 193 | B* | 1 | B | 1 | yes |
| 18 | 195 | B | 1 | B | 1 | yes |
| 19 | 197 | D | 3 | D | 3 | yes |
| 20 | 199 | B | 1 | B | 1 | yes |
| 21 | 201 | A | 0 | A | 0 | yes |
| 22 | 203 | E | 4 | E | 4 | yes |
| 23 | 205 | A | 0 | A | 0 | yes |
| 24 | 207 | B | 1 | B | 1 | yes |
| 25 | 209 | C | 2 | C | 2 | yes |
| 26 | 211 | B | 1 | B | 1 | yes |
| 27 | 213 | d | 3 | D | 3 | yes |

`*` Q17 (p.193): the printed option label reads **"8. It's indicated only in..."**, not "B." — a
source printing defect (a glyph swap, the same class of defect the calibration note recorded for
"Strabisn1us" on p.195/Q18's own option A). It is the second option in reading order, in the B
position, so the key is recorded as B / index 1. Not a transcription error on this file's part —
the "8" is what the page prints, and it is called out here rather than silently normalised.

## Summary

**27 of 27 keys read visually. 0 remain.**

**Agreement with `keypos.py`: 27 of 27 (100%). 0 disagreements. 0 abstentions.**

Every highlight read across all 27 marked pages was **yellow** with a black underline — no
cyan or other non-yellow highlight was found anywhere in this section (contrast with section 1,
where p.112 was cyan and defeated keypos outright — see `progress\ledger.md` §19). This section
gave keypos no non-yellow case to fail on.

`keypos.py`'s own `body_bands` figure was cross-checked against the actual number of stem lines +
options visible on every one of the 27 pages (band count = stem-line count + option count,
options never wrapping onto an extra band anywhere in this section except the one case below).
**No page in this section showed keypos detecting an option count different from what the page
prints** — the two 5-option pages (Q22 p.203, Q27 p.213) were passed `n_opts=5` explicitly and
both came back `ok` with the right band arithmetic (8 and 9 bands respectively, matching a 3-line
and 4-line stem plus 5 options).

One page exercised the tool's documented wrap-handling path: **Q20 (p.199)**, where the *keyed*
option (B) itself wraps onto a second line ("...that accompanies" / "aging"). `keypos.py`'s
algorithm is built to survive exactly this case (the wrapped line stays part of the same lit
band), and it did — `lit_bands` showed two yellow bands, `bands_below_highlight:2`, correct
index 1/B, matching the visual read. This is the friendly direction the docstring describes, not
the wrap-below-the-key failure mode that caused section 1's p.344/p.500 misses.

Two anomalies worth flagging for whoever stages this section, neither of which changes a key:
- **Q17 (p.193)**: the option label prints "8." instead of "B." — see the table note above.
- **Q18 (p.195), option A**: prints "Strabisn1us" for "Strabismus" (the calibration note's own
  finding, re-confirmed here on the marked page).

Option letter case is lowercase a-d on Q1-Q8 (pp.161-175), uppercase A-D from Q9 through Q26
(pp.177-211), and reverts to lowercase a-e on Q27 (p.213) — confirmed directly on every one of
these 27 marked pages, matching the calibration note's transition range exactly. Q22 and Q27 are
the only two 5-option questions; every other question in the section carries exactly 4 options,
also confirmed directly by counting the printed rows on each marked page.

No page needed a re-render above 150 dpi — every highlight was unambiguous at that resolution.
