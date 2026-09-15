# Ophthalmology Endpoint — Section 13 Calibration, 2026-09-15

Text-only OCR-index calibration. No image was rendered or viewed. No earlier
`progress/ophtho-endpoint-s13-calibration-*.md` file was present at the start.

## Range and divider pages

`tools/bank-harness/sec-oph.js`, `SEC_P1` entry 13, records:

> `13: { prefix: 'ophep-retina-', file: 'oph-ep-p1-s13-retina.array.js', svar: 'OPHEP_S13_STAGED', draft: 'oph-ep-p1-s13-retina.draft', chapter: 'op-ret', pages: [880, 981], ans: null },`

OCR text assigns the 102 in-range pages as follows: p880, a `Retina` divider;
pp.881–898, 18 pages of notes; p899, a `Questions` divider; and pp.900–981,
41 `question`/`answered` adjacent page pairs. This accounts for every page in
the declared 880–981 range. There are no unassigned pages.

## Question count and page formula

There are 41 adjacent pairs: 82 pages from p900 through p981, alternating
`question` then `answered` in the OCR index. For pair ordinal *n* (1–41), the
unmarked page is `898 + 2n` and the marked page is `899 + 2n`. Thus pair 1 is
p900/p901 and pair 41 is p980/p981.

The printed sequence is not a unique 1–41 sequence: the stem at pair ordinal
28 (p954/p955) is printed `27.`, after pair ordinal 27 is also printed `27.`;
the following printed labels are 28 through 40. The count above is therefore
the 41 printed page pairs, not 41 distinct printed question numbers.

## Pair test and exceptions

Every formula pair was tested with stem-token Jaccard similarity between its
two OCR texts. The scores, in pair-ordinal order, are:

`1–41: .483, .571, .643, .291, .222, .681, .659, .531, .469, .683, .455, .639, .895, .952, .878, .956, .951, .917, .889, .935, .905, .909, .913, .831, .793, .763, .726, .808, .962, .959, .879, .892, .938, .905, .943, .957, .950, .952, .961, .970, .943.`

The low early scores at pairs 1–12 are explained by extra OCR text on the
answered pages (box candidates below), not by a page-order break. No formula
pair reverses `question`/`answered`, and no page lies outside its pair. The
printed-number duplication at p954/p955 is the sole labelling exception.

## Option counts and departures

These are OCR-derived option-letter counts, stated as unmarked/marked. A
parenthesized marked count reports differing native/150dpi OCR passes; it is
not a resolved source count.

- Pairs 1–3: 4/4.
- Pair 4 (p906/p907): 4/(4 native, 3 hires) — `passes-differ`, `options-differ`.
- Pair 5 (p908/p909): 4/4 — p908 is `thin`.
- Pairs 6–12: 4/4.
- Pair 13: 5/5.
- Pair 14: 4/4.
- Pair 15 (p928/p929): 5/4 in OCR, with no index flag; unresolved cross-page departure.
- Pairs 16–17: 4/4.
- Pair 18 (p934/p935): 4/(3 native, 4 hires) — `options-differ`.
- Pair 19 (p936/p937): 4/(4 native, 3 hires) — `options-differ`.
- Pairs 20–23: 5/5.
- Pair 24 (p946/p947): 4/(4 native, 3 hires) — `options-differ`.
- Pairs 25–27: 4/4.
- Pair 28, printed `27.` (p954/p955): 5/(5 native, 4 hires) — `options-differ`.
- Pairs 29–32: 5/5.
- Pair 33 (p964/p965): 5/(4 native, 4 hires) — `options-differ`.
- Pairs 34–35: 4/4.
- Pairs 36–37: 5/5.
- Pair 38: 4/4.
- Pair 39 (p976/p977): 4/(4 native, 3 hires) — `options-differ`.
- Pair 40: 5/5.
- Pair 41 (p980/p981): 4/(4 native, 3 hires) — `options-differ`.

## Option-letter case

OCR text preserves lowercase-looking prefixes for pairs 1–8, uppercase-looking
prefixes for pairs 9–27, lowercase-looking prefixes for pairs 28–38, and
uppercase-looking prefixes for pairs 39–41. This is not a settled source-case
record: the index normalizes its option sets to uppercase and OCR text cannot
settle a printed case transition. Candidate transitions needing image checks
are p914–p917 (8→9), p952–p955 (27→28), p974–p977 (38→39); pp.968–p975 use
parenthesized lowercase prefixes, which the simple dot-prefix scan did not
classify but whose OCR text is consistent with lowercase.

## Explanation-box candidates

Native OCR word-count deltas (marked minus unmarked) identify these candidates:
pair 1 +21, 2 +34, 3 +21, 4 +31, 5 +30, 6 +29, 7 +19, 8 +18, 9 +28, 10 +29,
11 +37, 12 +31, 24 +21, 25 +24, 26 +24, and 27 +30. They require image checks
to establish whether a printed box is present. All other pairs have deltas from
-5 through +1.

## Figure candidates

An OCR-text search for `fig`, `figure`, `image`, `photograph`, `diagram`, and
`illustration` returned no matches in pp.880–981. This does not establish that
there are no figures: visual figure status is unresolved for the whole range.

## Classifier mis-tags

The OCR index has `notes=20`, `question=41`, and `answered=41`. Its page-kind
sequence matches the text-only structure above: p880–p899 are notes/dividers,
then p900–p981 alternate question/answered. No text-only classifier kind
contradiction was found. The p899 `Questions` divider is tagged `notes`, which
fits this accounting.

## Needs image check

- Explanation-box presence: marked pp.901, 903, 905, 907, 909, 911, 913, 915,
  917, 919, 921, 923, 947, 949, 951, and 953.
- Option-count and OCR-disagreement pages: pp.906–909, 928–929, 934–935,
  936–937, 946–947, 954–955, 964–965, 976–977, and 980–981.
- Printed option-letter case and the candidate transitions: pp.900–981; the
  boundary-focused sets are pp.914–917, 952–955, 966–977, and 974–977.
- Figures: pp.880–981; no image-based figure determination was made.
- Any answer mark or key: pp.901, 903, 905, 907, 909, 911, 913, 915, 917, 919,
  921, 923, 925, 927, 929, 931, 933, 935, 937, 939, 941, 943, 945, 947, 949,
  951, 953, 955, 957, 959, 961, 963, 965, 967, 969, 971, 973, 975, 977, 979,
  and 981.

## Unresolved

The duplicate printed `27.` at p954/p955 may be a source numbering defect or
an OCR/transcription issue; text-only calibration does not decide it. The
option-count inconsistencies listed above, all box candidates, all visual
figures, printed case transitions, and every answer mark remain for image
checking. No key was extracted or inferred.
