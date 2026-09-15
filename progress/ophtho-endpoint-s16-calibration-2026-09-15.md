# Ophthalmology Endpoint — Section 16 Calibration, 2026-09-15

This is an OCR-text-only calibration. No images were rendered or viewed. The existing
dated section-16 note was read before this pass; it already contained the range, formula,
option flags, and image-check list. This replacement records the independent OCR recheck.

## Range and Divider Pages

tools/bank-harness/sec-oph.js, SEC_P1 entry 16, states:
16: { prefix: 'ophep-pediatric-ophthalmology-', file: 'oph-ep-p1-s16-pediatric-ophthalmology.array.js', svar: 'OPHEP_S16_STAGED', draft: 'oph-ep-p1-s16-pediatric-ophthalmology.draft', chapter: null, pages: [1098, 1149], ans: null }.

| PDF pages | OCR-text role |
|---|---|
| 1098 | title divider; thin OCR text: Paediatric Ophthalmolog |
| 1099–1116 | prose/notes run |
| 1117 | Questions divider; thin OCR text |
| 1118–1149 | 16 adjacent first/second candidate question pairs |

Every declared page is assigned. There are no unassigned pages.

## Question Count and Formula

The OCR-text Questions divider is p1117. The 32 following pages (p1118–p1149) form
16 adjacent, high-similarity duplicate-text pairs. The OCR-derived question count is 16.

For question n, the first candidate printing is p1116 + 2n and the second is
p1117 + 2n: Q1 is p1118/p1119 and Q16 is p1148/p1149. The second member of Q16 is
the declared endpoint. OCR/index labels suggest the usual question/answered order except
for Q13; whether a printed mark is present remains an image check.

The table records a native-OCR-token test of every pair. LCS/first is the longest common
subsequence divided by the first page's token count; raw texts include OCR artefacts and
folios. The formula has no structural exception. Q4 and Q11 are exact by this raw-token
measure; the other 14 pairs have 0.955–0.982 overlap and are textual, not visual, pair evidence.

| Q | pages | native tokens | Jaccard | LCS/first | result |
|---|---|---:|---:|---:|---|
| 1 | 1118/1119 | 25/97 | .261 | .960 | pair holds |
| 2 | 1120/1121 | 22/48 | .538 | .955 | pair holds |
| 3 | 1122/1123 | 24/24 | .917 | .958 | pair holds |
| 4 | 1124/1125 | 39/66 | .712 | 1.000 | pair holds |
| 5 | 1126/1127 | 41/68 | .627 | .976 | pair holds |
| 6 | 1128/1129 | 35/58 | .667 | .971 | pair holds |
| 7 | 1130/1131 | 24/48 | .512 | .958 | pair holds |
| 8 | 1132/1133 | 31/62 | .460 | .968 | pair holds |
| 9 | 1134/1135 | 33/82 | .462 | .970 | pair holds |
| 10 | 1136/1137 | 50/89 | .621 | .980 | pair holds |
| 11 | 1138/1139 | 46/47 | .974 | 1.000 | pair holds |
| 12 | 1140/1141 | 37/37 | .944 | .973 | pair holds |
| 13 | 1142/1143 | 57/57 | .959 | .982 | pair holds; classifier-role exception below |
| 14 | 1144/1145 | 45/45 | .944 | .978 | pair holds |
| 15 | 1146/1147 | 33/33 | .938 | .970 | pair holds |
| 16 | 1148/1149 | 27/27 | .923 | .963 | pair holds |

## Option Counts and Departures

These are index-derived counts, not printed counts. FLAG identifies an index flag on a
page in the pair; that printed count needs an image check.

| Q | pages | OCR option count | index note |
|---|---|---:|---|
| 1 | 1118/1119 | 4 | FLAG p1119 options-differ (native A–D; hires A,B,D) |
| 2 | 1120/1121 | 4 | — |
| 3 | 1122/1123 | 4 | FLAG p1123 options-differ (native A–D; hires A,B,D) |
| 4 | 1124/1125 | 4 | — |
| 5 | 1126/1127 | 4 | — |
| 6 | 1128/1129 | 4 | — |
| 7 | 1130/1131 | 4 | — |
| 8 | 1132/1133 | 4 | — |
| 9 | 1134/1135 | 4 | FLAG p1135 options-differ (native A–D; hires A,B,D) |
| 10 | 1136/1137 | 4 | — |
| 11 | 1138/1139 | 3 | FLAG p1139 few-options; native p1138 reads A,B,C plus 0. |
| 12 | 1140/1141 | 4 | — |
| 13 | 1142/1143 | 5 | FLAG p1143 options-differ (native A–E; hires A,B,D,E) |
| 14 | 1144/1145 | 4 | — |
| 15 | 1146/1147 | 4 | — |
| 16 | 1148/1149 | 4 | — |

## Option-Letter Case

Index option labels are normalised to uppercase, so they do not establish printed case. Native
OCR reads lowercase a–d on Q1–Q8, uppercase A–D on Q9–Q10, A./B./C./0. on Q11,
A./B./C./d. on Q12, and uppercase A–D(/E) on Q13–Q16. Thus raw OCR has a
lower-to-upper candidate transition at Q9, unreadable/mixed labels at Q11–Q12, and an
uppercase resumption at Q13. These are not printed-case determinations.

## Explanation-Box Candidates

The table uses index native word counts; a positive delta is only an OCR candidate for
additional text, not evidence that an explanation box is printed.

| Q | second page | words | delta | OCR candidate |
|---|---:|---:|---:|---|
| 1 | 1119 | 25/99 | +74 | candidate |
| 2 | 1121 | 22/48 | +26 | candidate |
| 3 | 1123 | 24/24 | 0 | none by delta |
| 4 | 1125 | 42/71 | +29 | candidate |
| 5 | 1127 | 41/68 | +27 | candidate |
| 6 | 1129 | 35/58 | +23 | candidate |
| 7 | 1131 | 24/48 | +24 | candidate |
| 8 | 1133 | 31/64 | +33 | candidate |
| 9 | 1135 | 35/85 | +50 | candidate |
| 10 | 1137 | 51/89 | +38 | candidate |
| 11 | 1139 | 47/48 | +1 | none by delta |
| 12 | 1141 | 37/37 | 0 | none by delta |
| 13 | 1143 | 59/59 | 0 | none by delta |
| 14 | 1145 | 45/45 | 0 | none by delta |
| 15 | 1147 | 35/35 | 0 | none by delta |
| 16 | 1149 | 27/27 | 0 | none by delta |

## Figure Candidates

The OCR-text search found Fundus photography on p1130/p1131, within option text. It found
no figure-reference wording. OCR does not establish figure presence or absence; all in-range
pages remain for image check.

## Classifier Mis-tags and Flags

- p1102 is kind: answered with few-options, but its OCR text is prose/notes, not a question pair.
- p1143 is kind: question, answered: false, despite occupying Q13's second position and having
  near-identical OCR text to p1142. Its printed marking is unresolved.
- p1099–p1110 have answered: true while remaining kind: notes; that boolean does not change page assignment.
- p1098 and p1117 have thin/passes-differ; their text identifies the title and Questions dividers.
- The question-run option flags are p1119, p1123, p1135, p1139, and p1143.

## Needs Image Check

- Figures: p1098–p1149.
- Explanation boxes: candidate second pages p1119, p1121, p1125, p1127, p1129, p1131,
  p1133, p1135, p1137; and p1123, p1139, p1141, p1143, p1145, p1147, p1149 before treating
  no-delta as printed absence.
- Option counts on flagged pages: p1119, p1123, p1135, p1139, p1143; Q11's p1138/p1139
  pair is especially unresolved.
- Option-letter case: p1118–p1149, especially the Q8/Q9 boundary p1132–p1135 and the
  unreliable Q11/Q12 labels p1138–p1141.
- Q13 pair role/marking: p1142/p1143.
- Thin divider layout: p1098 and p1117.

## Anything Unresolved

OCR establishes a 16-pair text pattern and formula, but not printed marks, keys, boxes, figures,
option-case transitions, or true option counts on flagged pages. No staging or key extraction was performed.

