# Ophthalmology endpoint — part 1, section 15 calibration, 2026-09-15

Calibration only. This note uses only `content/ophtho/qb-pages/ocr/ep/index.json` and its
`pNNNN.txt` files; no page was rendered or viewed. OCR-derived findings await human image check.

## Range and divider pages

`tools/bank-harness/sec-oph.js` entry 15 is:

> `15: { prefix: 'ophep-squint-', file: 'oph-ep-p1-s15-squint.array.js', svar: 'OPHEP_S15_STAGED', draft: 'oph-ep-p1-s15-squint.draft', chapter: 'op-squint', pages: [1066, 1097], ans: null },`

The OCR index supplied 32 rows, pp.1066–1097, matching that declared inclusive range. p.1066 is
the title divider (`Squint`); pp.1067–1074 are prose/notes; p.1075 is the `Questions` divider;
pp.1076–1097 are the question run. No pages are unassigned.

## Question count and page formula

There are 11 question pairs. This is derived from the contiguous 22-page question run after the
Questions divider: `(1097 - 1076 + 1) / 2 = 11`.

Question *n* is OCR-classified as unmarked on PDF page `1074 + 2n` and marked on PDF page
`1075 + 2n`: Q1 is 1076/1077 and Q11 is 1096/1097. Q11's marked page is the declared section end.

Every pair was tested against the formula and by OCR-text similarity:

| Q | unmarked / marked | similarity | native / hires word delta |
|---|---|---:|---:|
| 1 | 1076 / 1077 | 0.947 | 0 / 0 |
| 2 | 1078 / 1079 | 0.622 | +50 / +50 |
| 3 | 1080 / 1081 | 0.971 | 0 / 0 |
| 4 | 1082 / 1083 | 0.938 | 0 / 0 |
| 5 | 1084 / 1085 | 0.923 | -1 / -1 |
| 6 | 1086 / 1087 | 0.936 | -2 / 0 |
| 7 | 1088 / 1089 | 0.958 | +1 / 0 |
| 8 | 1090 / 1091 | 0.943 | +3 / 0 |
| 9 | 1092 / 1093 | 0.933 | +1 / -9 |
| 10 | 1094 / 1095 | 0.933 | -2 / -2 |
| 11 | 1096 / 1097 | 0.974 | 0 / 0 |

There are no page-formula exceptions. Q2 is the sole text-comparison/word-delta exception: its
marked-page OCR has 50 more words in each OCR pass, reducing token similarity while retaining the
same question/options text.

## Option counts and letter case

OCR derives four options for every question: Q1 has `a–d`; Q2–Q11 have `A–D`. The following marked
pages carry `options-differ`, so their four-option count is flagged rather than settled: Q2 p.1079,
Q6 p.1087, Q8 p.1091, Q9 p.1093, and Q10 p.1095. In each, one OCR pass missed one letter while the
other pass recorded A–D. No other question-page option flags occur.

The OCR text suggests one letter-case transition between Q1 (lowercase) and Q2 (uppercase). OCR is
not sufficient to settle this transition; it needs image check.

## Explanation-box candidates

Q2 (marked p.1079) is the only candidate: its marked-page word count is +50 in both OCR passes
relative to p.1078, and the added OCR text follows the options. The remaining pairs have deltas
from -9 to +3 words in either pass. This identifies a candidate only; whether a printed box exists
must be checked from the image.

## Figure candidates

No OCR text explicitly refers to a figure, photograph, or diagram. OCR cannot exclude a figure or
identify its modality/view, so no figure finding is made from this text-only calibration.

## Classifier mis-tags

The classifier labels p.1069 and p.1071 `kind: answered`, but their OCR text is lecture prose with
lettered subheadings/tables, not a question pair. These are classifier kind contradictions. The
separate `answered: true` boolean also occurs on prose pp.1067–1071; pp.1067, 1068, and 1070 retain
`kind: notes`, while pp.1069 and 1071 are the two kind errors. p.1075 is correctly `kind: notes`
despite being the Questions divider.

## Needs image check

- pp.1066–1097: whether any figure is present; if so, record modality and view only.
- pp.1076–1079: the suggested lowercase-to-uppercase option-letter transition at Q1/Q2.
- p.1079: whether the +50-word addition is a printed explanation box.
- pp.1079, 1087, 1091, 1093, 1095: option count on OCR-flagged marked pages.
- Marked question pages 1077, 1079, 1081, 1083, 1085, 1087, 1089, 1091, 1093, 1095, 1097: any
  highlighted/boxed key mark is not recoverable from OCR; no key is asserted here.

## Unresolved

OCR alone cannot settle printed explanation-box presence, figures, source option-letter case at the
transition, flagged option counts, or any answer marking. No staging or key extraction was done.
