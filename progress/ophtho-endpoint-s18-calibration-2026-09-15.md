# Ophthalmology Endpoint — Section 18 Calibration, 2026-09-15

Calibration only. This is a text-only review of the OCR index and OCR page text files: no page was
rendered or viewed. No keys are recorded here.

## Range and divider pages

`tools/bank-harness/sec-oph.js` entry 18 is quoted as:

```js
18: { prefix: 'ophep-ocular-trauma-', file: 'oph-ep-p1-s18-ocular-trauma.array.js', svar: 'OPHEP_S18_STAGED', draft: 'oph-ep-p1-s18-ocular-trauma.draft', chapter: 'op-trauma', pages: [1182, 1244], ans: null },
```

The in-range OCR pages account as follows:

| PDF pages | OCR-text content |
|---|---|
| 1182 | chapter divider, `Ocular Trauma` |
| 1183-1203 | prose/notes run |
| 1204 | `Questions` divider |
| 1205-1244 | 20 adjacent unmarked/marked question pairs |

There are no unassigned pages in 1182-1244. Page 1182 and page 1204 carry `thin` (and page 1204
also `passes-differ`) flags, but their OCR text identifies the two dividers. The end page 1244 is
the marked half of the final pair, so the section ends cleanly with no trailing page.

## Question count and page formula

There are **20 question pairs**: 40 consecutive question-run pages (1205-1244), divided into two
pages per pair. The formula, tested on every pair ordinal, is:

- unmarked page = `1203 + 2n`
- marked page = `1204 + 2n`

where `n` is the pair ordinal 1-20. Q-pair ordinal 1 is 1205/1206; ordinal 20 is 1243/1244.

Every pair had the expected `question` then `answered` classifier sequence and a token-set Dice
similarity of 0.617-1.000 between its two OCR texts. The lower similarities occur where the marked
text has extra OCR words; they do not break the pair structure.

| Ordinal | OCR label | Pages | Dice |
|---|---|---|---:|
| 1 | `I` | 1205/1206 | 0.737 |
| 2 | 2 | 1207/1208 | 0.697 |
| 3 | 3 | 1209/1210 | 0.700 |
| 4 | 4 | 1211/1212 | 0.840 |
| 5 | 5 | 1213/1214 | 0.846 |
| 6 | 6 | 1215/1216 | 0.840 |
| 7 | 7 | 1217/1218 | 0.854 |
| 8 | 8 | 1219/1220 | 0.680 |
| 9 | 9 | 1221/1222 | 0.617 |
| 10 | `I O` | 1223/1224 | 0.912 |
| 11 | `I I` | 1225/1226 | 0.971 |
| 12 | `I l` | 1227/1228 | 0.970 |
| 13 | 12 | 1229/1230 | 0.919 |
| 14 | 12 | 1231/1232 | 1.000 |
| 15 | 13 | 1233/1234 | 0.941 |
| 16 | 14 | 1235/1236 | 0.964 |
| 17 | 15 | 1237/1238 | 1.000 |
| 18 | 16 | 1239/1240 | 0.908 |
| 19 | 17 | 1241/1242 | 0.980 |
| 20 | 18 | 1243/1244 | 0.926 |

**Formula exceptions: none.** OCR-label departures occur at ordinals 1 (`I`), 10 (`I O`), 11
(`I I`), and 12 (`I l`): these glyph strings are not resolved to printed numbers. Label `12` occurs
on ordinals 13 and 14; their OCR stem text differs, so they are not OCR-identical reprints. Until
image review, use pair ordinal plus pages to identify all 20 pairs; preserve the OCR labels exactly
and do not infer the source labels from them.

## Option counts (OCR-derived)

`4/4` means four detected option letters on unmarked/marked pages. A slash inside a cell records
the two OCR passes on that page. Flagged counts are not settled.

| Ordinal (OCR label) | Pages | OCR option count, unmarked/marked | OCR flags |
|---|---|---|---|
| 1 (`I`) | 1205/1206 | 4/4 | - |
| 2 (2) | 1207/1208 | 4/4 | - |
| 3 (3) | 1209/1210 | 4/4 | - |
| 4 (4) | 1211/1212 | 4/4 | - |
| 5 (5) | 1213/1214 | 4/4 | - |
| 6 (6) | 1215/1216 | 4/4 | - |
| 7 (7) | 1217/1218 | 4/4 | - |
| 8 (8) | 1219/1220 | 4/4 | `thin` on 1219 |
| 9 (9) | 1221/1222 | 4/4 | - |
| 10 (`I O`) | 1223/1224 | 4/4 | - |
| 11 (`I I`) | 1225/1226 | 3/4 and 3/4 | `options-differ` on both |
| 12 (`I l`) | 1227/1228 | 4/4 | - |
| 13 (12) | 1229/1230 | 3/4 and 2/4 | `options-differ` on both |
| 14 (12) | 1231/1232 | 5/5 | - |
| 15 (13) | 1233/1234 | 4/3 | `few-options` on 1234 |
| 16 (14) | 1235/1236 | 4/4 | - |
| 17 (15) | 1237/1238 | 4/4 | - |
| 18 (16) | 1239/1240 | 4/4 | - |
| 19 (17) | 1241/1242 | 4/4 | - |
| 20 (18) | 1243/1244 | 4/3/4 | `options-differ` on 1244 |

## Option-letter case

The OCR text shows lowercase option labels through pair ordinal 8 (1205-1220) and uppercase labels
from pair ordinal 9 (1221-1244). Thus the OCR-indicated transition is between 1219/1220 and
1221/1222. This is not image-settled; see the needs-image-check list.

## Explanation-box candidates from OCR word deltas

These are candidates only. A positive delta is the marked native OCR word count minus the unmarked
native OCR word count; it is not evidence that a printed box is present.

| Ordinal (OCR label) | Marked page | Native word delta | Candidate status |
|---|---:|---:|---|
| 1 (`I`) | 1206 | +28 | candidate |
| 2 (2) | 1208 | +28 | candidate |
| 3 (3) | 1210 | +22 | candidate |
| 4 (4) | 1212 | +30 | candidate |
| 5 (5) | 1214 | +32 | candidate |
| 6 (6) | 1216 | +21 | candidate |
| 7 (7) | 1218 | +28 | candidate |
| 8 (8) | 1220 | +20 | candidate |
| 9 (9) | 1222 | +60 | candidate |
| 10 (`I O`) | 1224 | +29 | candidate |
| 11 (`I I`) | 1226 | 0 | no OCR delta candidate |
| 12 (`I l`) | 1228 | 0 | no OCR delta candidate |
| 13 (12) | 1230 | +2 | no OCR delta candidate |
| 14 (12) | 1232 | 0 | no OCR delta candidate |
| 15 (13) | 1234 | -1 | no OCR delta candidate |
| 16 (14) | 1236 | 0 | no OCR delta candidate |
| 17 (15) | 1238 | 0 | no OCR delta candidate |
| 18 (16) | 1240 | +31 | candidate |
| 19 (17) | 1242 | 0 | no OCR delta candidate |
| 20 (18) | 1244 | +27 | candidate |

## Figure candidates

No OCR text cue matching `figure`, `fig.`, `image`, `shown`, `diagram`, or `see below` was found in
pages 1182-1244. OCR text cannot establish whether a figure is present or absent; figures remain
unresolved pending image review.

## Classifier mis-tags

The `kind` field accounts for 22 `notes` pages (1182-1203), one `notes` divider page (1204), 20
`question` pages, and 20 `answered` pages. The text content is consistent with that structure; no
`kind` contradiction was found from OCR text.

The raw `answered` boolean is true on prose pages 1183-1189 and 1193-1195, while their `kind` remains
`notes`. These are raw-yellow false positives in the prose run, not `kind` mis-tags and not questions.

## Needs image check

- **Figures:** all pages 1182-1244. No figure presence/absence may be concluded from the OCR-only
  review.
- **Explanation boxes:** every marked page 1206, 1208, 1210, 1212, 1214, 1216, 1218, 1220, 1222,
  1224, 1226, 1228, 1230, 1232, 1234, 1236, 1238, 1240, 1242, 1244. Priority OCR-delta candidates:
  1206-1224, 1240, 1244.
- **Option-letter case transition:** 1219-1222, plus the rest of the question run (1205-1244) to
  check that no additional transition is missed.
- **Flagged option counts:** 1219, 1225-1226, 1229-1230, 1233-1234, and 1244. In particular,
  1231-1232 is the sole OCR-consistent five-option pair but still needs image confirmation because
  OCR cannot settle printed option counts.
- **Question labels and pair status:** 1205, 1223-1232, to settle the ambiguous OCR labels `I`,
  `I O`, `I I`, and `I l`, and to determine whether the two OCR-labelled `12` pairs are separate
  source questions rather than an image-only layout effect.

## Unresolved

- All image-dependent points above remain unresolved by design.
- The 20-pair count and page formula are OCR-derived. The ambiguous OCR labels and repeated
  OCR-labelled `12` pairs must be preserved and checked before staging; no key extraction or staging
  was performed.
