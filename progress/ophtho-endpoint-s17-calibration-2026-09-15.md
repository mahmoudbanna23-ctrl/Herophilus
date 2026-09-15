# Ophthalmology Endpoint — Section 17 Calibration, 2026-09-15

Calibration uses only `content/ophtho/qb-pages/ocr/ep/index.json` and `pNNNN.txt`; no page image was rendered or viewed. An earlier same-date `progress/ophtho-endpoint-s17-calibration-2026-09-15.md` was read before this rewrite. It already recorded the 12-question OCR-derived run, the `1156 + 2n` / `1157 + 2n` page formula, the four positive word-delta candidates, and the p1152--1153 classifier conflict; this note retains and checks those findings against the current one-time index snapshot. This is calibration only: no staging, keys, or answer explanations.

## Range and divider pages

`tools/bank-harness/sec-oph.js`, `SEC_P1` entry 17, reads exactly:

```js
17: { prefix: 'ophep-malignancies-eye-adnexa-', file: 'oph-ep-p1-s17-malignancies-eye-adnexa.array.js', svar: 'OPHEP_S17_STAGED', draft: 'oph-ep-p1-s17-malignancies-eye-adnexa.draft', chapter: 'op-onc', pages: [1150, 1181], ans: null },
```

The declared range is PDF pages 1150–1181. OCR text accounts for every in-range page:

| Pages | OCR-based classification | Account |
|---|---|---|
| 1150 | notes, thin | section-title divider |
| 1151–1156 | notes/prose in the OCR text | prose/notes run |
| 1157 | notes, thin, passes-differ | `Questions` divider |
| 1158–1181 | alternating question/answered OCR kinds | 12 adjacent question pairs |

Page 1182 is outside the declared range and its OCR text is the next section title. There are no unassigned pages inside 1150–1181.

## Question count and derivation

The question run begins immediately after the `Questions` divider at p1157. Twelve alternating unmarked/marked OCR pairs occupy pp1158–1181, so the OCR-derived count is **12 questions**.

Question *n* is unmarked on **1156 + 2n** and marked on **1157 + 2n**. Thus Q1 is 1158/1159 and Q12 is 1180/1181; Q12's marked page is the section's declared last page.

## Page formula and pair tests

The formula was tested against OCR text for every pair. Each marked-page OCR text reprints the corresponding unmarked stem/options; only the marked text sometimes has additional OCR text.

| Q | Unmarked / marked | OCR pair result |
|---|---|---|
| 1 | 1158 / 1159 | matching stem/options; marked page has +27 native and +27 hires words |
| 2 | 1160 / 1161 | matching stem/options; +27 / +27 |
| 3 | 1162 / 1163 | matching stem/options; +21 / +21 |
| 4 | 1164 / 1165 | matching stem/options; +10 / +10 |
| 5 | 1166 / 1167 | matching stem/options; 0 / 0 |
| 6 | 1168 / 1169 | matching stem/options; 0 / 0 |
| 7 | 1170 / 1171 | matching stem/options; -1 / 0 |
| 8 | 1172 / 1173 | matching stem/options; 0 / 0 |
| 9 | 1174 / 1175 | matching stem/options; 0 / 0 |
| 10 | 1176 / 1177 | matching stem/options; +1 / 0 |
| 11 | 1178 / 1179 | matching stem/options; 0 / 0 |
| 12 | 1180 / 1181 | matching stem/options; -1 / -1 |

There is no page-formula exception. OCR text deviations, not pair breaks: p1177's native pass reads the question number as `I O`; p1178/1179 have similar `I l`/`I I` numeral reads; p1181's hires pass corrupts part of the last option. The corresponding other OCR pass or twin page retains the matching content.

## Option counts per question

Counts and letter sets below are OCR-derived only. No question-page classifier flag appears in the index. `*` means the OCR text itself needs an image check before downstream use.

| Q | Pages | OCR option count / set |
|---|---|---|
| 1 | 1158/1159 | 4, a–d |
| 2 | 1160/1161 | 4, a–d |
| 3 | 1162/1163 | 4, A–D |
| 4 | 1164/1165 | 4, A–D |
| 5 | 1166/1167 | 4, A–D |
| 6 | 1168/1169 | 4, A–D |
| 7 | 1170/1171 | 5, A–E |
| 8 | 1172/1173 | 5, A–E |
| 9 | 1174/1175 | 4, A, B, C, E* |
| 10 | 1176/1177 | 5, A–E |
| 11 | 1178/1179 | 4, A–D |
| 12 | 1180/1181 | 4, A–D |

## Case transitions

The OCR text reads lowercase option labels on Q1–Q2 and uppercase labels from Q3–Q12. The OCR-observed transition is therefore **at Q3 (pp1160/1161)**. This is not an image-settled case finding; see the image-check list.

## Box candidates per question

Word deltas are marked minus unmarked, shown native / 150dpi. A positive delta is an OCR candidate only, not a determination that a printed explanation box exists.

| Q | Marked page | Delta (native / 150dpi) | OCR box-candidate status |
|---|---|---|---|
| 1 | 1159 | +27 / +27 | candidate |
| 2 | 1161 | +27 / +27 | candidate |
| 3 | 1163 | +21 / +21 | candidate |
| 4 | 1165 | +10 / +10 | candidate |
| 5 | 1167 | 0 / 0 | no word-delta candidate |
| 6 | 1169 | 0 / 0 | no word-delta candidate |
| 7 | 1171 | -1 / 0 | no word-delta candidate |
| 8 | 1173 | 0 / 0 | no word-delta candidate |
| 9 | 1175 | 0 / 0 | no word-delta candidate |
| 10 | 1177 | +1 / 0 | no word-delta candidate |
| 11 | 1179 | 0 / 0 | no word-delta candidate |
| 12 | 1181 | -1 / -1 | no word-delta candidate |

## Figure candidates

No OCR text names a figure, modality, or view. OCR cannot establish figure presence or absence; there are therefore no OCR-established figure findings.

## Classifier mis-tags

The index labels p1152 and p1153 `kind:"answered"` with `few-options`, but their OCR text is a prose/notes table rather than MCQ text. These are classifier mis-tags. p1151 has `answered:true` while retaining `kind:"notes"`; its OCR text is also prose/notes, so the raw answered boolean is a false-positive signal there without changing the kind. With pp1152–1153 treated as mis-tags, all pages reconcile to the section-title divider, six-page prose run, Questions divider, and 12 question pairs.

## Needs image check

- **pp1158–1181:** key marking is not available from OCR and was not extracted in this calibration.
- **pp1159, 1161, 1163, 1165:** whether the word-delta candidates are printed explanation boxes.
- **pp1158–1163:** the lowercase-to-uppercase case boundary inferred from OCR (Q2/Q3).
- **pp1174–1175:** Q9's OCR option lettering is `A, B, C, E`; inspect the printed option count/lettering rather than assume a missing `D`.
- **pp1150–1181:** figure presence is unresolved by text OCR. If a figure is found, record modality and view only.
- **pp1152–1153:** the classifier's `answered`/`few-options` result conflicts with the OCR prose/table text; an image check is needed if the page-kind classification must be settled beyond OCR.

## Anything unresolved

- Printed boxes, figures, option-label case, and any key marks remain unresolved because this was text-only OCR calibration.
- The page formula and 12-question count are derived from the OCR sequence; no image confirmation was performed.
- No staging, key extraction, or answer/explanation transcription was performed.
