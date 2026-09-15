# Ophthalmology Endpoint — Part 1, Section 19 Calibration, 2026-09-15

Status: complete, text-only OCR/index analysis. No images were rendered or viewed (brief's
explicit rule — a prior run died trying to view images through a vision-less gateway model).
**This overwrites the previous stub of the same filename**, which had every section reading
"Pending OCR/index analysis" and contained no actual analysis.

Section 19 = `tools\bank-harness\sec-oph.js` `SEC_P1` entry 19: `{ prefix:
'ophep-ocular-systemic-diseases-', chapter: 'op-systemic', pages: [1245, 1331] }` — "Ocular
Manifestations of Systemic Conditions and Diseases". Confirmed against the OCR index and the
rendered-text divider pages (below); `content/ophtho/qb-pages/ocr/ep/index.json` covers pages
6–1390 continuously (1385 rows), so this section's whole range is indexed.

## Range and divider pages

- p.1245: chapter divider ("Ocular Manifestations of Systemic Conditions and Diseases", 8 words,
  `flags:["thin"]`) — matches `sec-oph.js`'s declared first page exactly.
- p.1246–1280 (35 pages): lecture prose, organised as numbered sub-topics — at minimum (1)
  Diabetes Mellitus (pp.1246–1258), (3) Pregnancy (p.1259), (4) Thyroid Eye Disease (p.1260
  onward) are visible by their own headings in the OCR text; other numbered sub-topics between
  are not individually itemised here (out of scope for calibration).
- p.1281: divider page, single word "Questions" (`flags:["thin"]`) — confirmed by direct text
  match (`grep -i "^Questions"` across the whole range hits only this page).
- p.1282–1331 (50 pages, 25 two-page pairs): MCQs, unmarked page then marked/answered twin —
  see arithmetic below.
- Section ends exactly at p.1331 = `sec-oph.js`'s declared last page; p.1332 (checked) is the
  section-20 chapter divider "Drugs and the Eye", a clean boundary, no trailing reprint.

## Question count and derivation

**25 physical question pairs (50 pages, 1282–1331), but the source itself prints only 24
distinct question numbers** — a genuine source-side numbering defect, not a pairing error. See
"Anomalies" below; this is the single most important finding in this section and must not be
silently resolved by a downstream drafting pass.

Method: every page 1282–1331 was checked for a leading printed question number (regex on the
first OCR block, both roman-numeral-garbled and digit forms). The printed sequence is 1, 2, 3,
4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, **16, 16** (duplicate), 17, 18, 19, 20, 21, 22, 23, 24
— 24 distinct labels across 25 pairs, because pair k=17 (pp.1314/1315) is also printed "16."
Every pair after the duplicate is one lower than its physical pair index (physical pair 18 =
printed "17", ... physical pair 25 = printed "24").

## Page formula and pair test

**Pair *k* (k=1..25) is unmarked on PDF page 1280+2k and marked on PDF page 1281+2k.** Tested by
direct arithmetic against every one of the 25 pairs (script-verified, not sampled) — holds with
zero exceptions on page number. Q1 (k=1) = pp.1282/1283; last pair (k=25) = pp.1330/1331, exactly
`sec-oph.js`'s declared last page. This constant (1280+2k / 1281+2k) is section-specific, matching
the project's established pattern that the constant never transfers between sections (s3:
229+2n; s4: 293+2n/294+2n).

Two pairs depart from the simple "unmarked plain / marked highlighted" shape without breaking the
page-count arithmetic — see Anomalies.

## Unassigned / misclassified pages

Four pages inside the lecture-prose range are misclassified by the automatic `kind` field, the
same false-positive mechanism the s04 note found at pp.279/280 (a lettered/numbered outline
tripping the option-letter detector):

- **p.1246** — classified `kind:"answered"` (high yellow-pixel count). Direct text read: this is
  plainly lecture prose (Diabetes Mellitus epidemiology table, "A. Epidemiology" heading with a
  numbered table) — no MCQ present.
- **p.1247, p.1248** — classified `kind:"question"`. Direct text read: continuation of the same
  DM lecture page, with lettered sub-headings ("B. Causes of Vision Loss", "C. Risk Factors",
  "D. Systemic Associations", "E. Pathogenesis") tripping the option-letter detector — no MCQ.
- **p.1259** — classified `kind:"question"`. Direct text read: prose, "(3) Pregnancy" section
  with lettered sub-headings ("A. Pregnancy-Induced Hypertension", "B. Diabetes Mellitus in
  Pregnancy") — no MCQ.

The true prose/divider extent is p.1245–1281 (37 pages); the classifier's raw tally reads
`{notes: 33, answered: 24 (1 false positive), question: 30 (3 false positives + the 25 real
unmarked pages, since 1246–1248/1259 land inside "question"/"answered" counts)}` — the closing
test used here is that every one of the 87 in-range pages (1245–1331) is accounted for by content,
not by trusting the `kind` tally.

## Option counts per Q

**24 of 25 pairs show exactly four lettered options (A–D or a–d) in the OCR index.** **Pair k=25
(printed "24") carries five options, A–E** — confirmed on both the unmarked and marked page, both
OCR passes agree cleanly, no flag. This matches the shape sections 2 and 4 already showed (one or
two five-option departures per section) — **flagged for a direct render before drafting**, per
the standing rule that an index-only option-count finding needs a page confirmation.

Several pairs carry `few-options` or `options-differ` flags where the index still reports 4
options on at least one pass (k=3 p.1287, k=4 p.1289, k=5/6 p.1291/1293, k=15 p.1311, k=23
p.1326/1327, k=24 p.1329) — consistent with the established false-alarm pattern (bold/underline/
highlight formatting interfering with letter detection on one OCR pass), not confirmed page
defects. **Pair k=16 (pp.1312/1313, printed "16") is the one exception worth a direct look**: the
unmarked page's native pass detected **zero** option letters (`options:[]`, `flags:
["passes-differ","options-differ"]`) and the marked page detected only "A" on one pass — the OCR
text itself (read directly) shows the unmarked page's options split oddly across passes ("A. 20%"
on native; "B. 50% / C. 60%" on hires) with only 3 of what still look like a normal 4-choice
question textually. Read as an OCR/highlight-overlay artefact rather than a real 3-option
question, but not confirmed — needs image check.

## Case transitions

**One clean transition, confirmed structurally (not just sampled) across all 25 pairs**:
lowercase `a/b/c/d` on pairs k=1–14 (printed Q1–14, pp.1282–1309), uppercase `A/B/C/D(/E)` from
k=15 onward (printed Q15/16/16/17–24, pp.1310–1331). The break falls cleanly between k=14
(1308/1309) and k=15 (1310/1311).

Two isolated single-letter lowercase hits inside the uppercase run (p.1326/1327 "c.RAPD"/"c.60%"
style option-letter substrings, p.1330/1331 "c.RAPD") are most likely an OCR case-misread of a
single glyph next to a following letter with no space (the same pattern noted elsewhere as an OCR
artefact, not a real per-option case switch, since every *other* option letter on those same pages
reads uppercase) — **not asserted as a real case switch, flagged for image check** since only the
page can settle whether that one letter is genuinely printed lowercase.

## Box candidates

Word-count delta (marked page words − unmarked page words) was computed for all 25 pairs. A clean
break matches the section's own pattern (compare s04's Q1–6 boxed / Q7+ not):

- **k=1–16 (printed Q1 through the first "16") show deltas of 11–56 words** — consistent with a
  printed explanation box on the marked page. Two of these are borderline against the ~20-word
  threshold seen elsewhere (k=3 delta 13, k=5 delta 11, k=11 delta 16, k=12 delta 15) — flagged as
  uncertain, not asserted as boxed, pending an image check.
- **k=17–25 (the second "16" through "24") show deltas of −1 to 2 words** — consistent with no
  box, matching the "box disappears partway through the section" shape sections 3 and 4 both
  showed (there at Q6/Q7 and Q7/Q8/Q9–10; here at the k=16/17 boundary, which is also where the
  duplicate numbering sits).

No page was independently rendered to confirm any box directly — this is an index-derived
inference only, per the brief's rule, and is listed in "Needs image check."

## Figure candidates

A keyword sweep ("figure", "shown", "arrow", "picture", "photograph", "diagram", "image below",
"as seen", "fundus photo") across all 87 pages in range returned:

- p.1253: "Fundus photography / OCT / FA" — a diagnostic-modality list item in prose (naming a
  test), not language describing an embedded image on the page.
- "arrow" hits on pp.1258, 1259, 1272, 1280, 1304, 1305 are **all false positives** — substring
  matches inside "narrowing" and "marrow", not the word "arrow" or a figure callout.

**No genuine figure-referencing language was found anywhere in the section.** This is a
text-based absence check only (OCR sees words, not embedded images) — no page was rendered to
confirm the absence visually, so this is not a proven zero.

## Classifier mis-tags

Four pages (1246, 1247, 1248, 1259), all inside the lecture-prose range, are misclassified by
`kind` (see "Unassigned / misclassified pages" above) — the same false-positive mechanism
recorded in the s01 and s04 notes.

## Needs image check

- **Pair k=25 (printed "24", pp.1330/1331): confirm the 5-option (A–E) finding** before drafting.
- **Pair k=16 (printed "16", pp.1312/1313): confirm true option count** — OCR shows a garbled/
  split read across passes, unclear whether this is a genuine departure or an artefact.
- **Pairs k=22 and k=24 (printed "21" and "23", pp.1324/1325 and pp.1328/1329): the marked page
  shows NO elevated yellow-pixel value** (520, the section's baseline unmarked-page value, versus
  900–3800+ on every other marked page in the section) **and is textually identical to its
  unmarked twin, word-for-word** — no visible highlighted key detected by the pixel proxy on
  either page. This needs a direct visual check: either the key is marked by some non-yellow
  means the pixel detector misses, or these two questions print with no visible key at all in the
  source. Never state a key from this index either way.
- Borderline box-delta pairs k=3, k=5, k=11, k=12 (deltas 11–16 words) — confirm boxed/not boxed
  directly rather than trusting the threshold inference.
- The two isolated lowercase-letter hits inside the uppercase run (pp.1326/1327, pp.1330/1331) —
  confirm whether genuinely printed lowercase or an OCR misread.
- Whether a figure exists anywhere in the section (text-only absence check, not visually
  confirmed) — reported as unchecked, not as "no figures."

## Anomalies

**Duplicate question number "16" — a source-side numbering defect, not a page-pairing error.**
Two consecutive, textually distinct physical pairs (pp.1312/1313 and pp.1314/1315) both print the
number "16." at the head of the question. The first is a short factual question ("risk of
diabetic retinopathy at initial diagnosis..."); the second is an unrelated vignette question (a
60-year-old hypertensive patient case) — these are not duplicate/near-duplicate content, just two
different questions sharing one printed number. Every physical pair after this point is
consistently one behind its own physical position (pair 18 prints "17", ..., pair 25 prints "24"),
confirming the whole rest of the section's numbering shifted down by one from this point forward
rather than the source re-numbering to compensate. This matches the project's established finding
that a book's own numbering can be defective (`CLAUDE.md` §"A book's own chapter numbers can be
defective") — flagged prominently for downstream drafting, since a naive read of "Q16" alone is
ambiguous between the two pairs.

**Two pairs with no detected highlighted key** (k=22/printed "21", k=24/printed "23") — see
"Needs image check."

No other page-arithmetic break, out-of-sequence page, or question spanning more than its two-page
pair was found; the 1280+2k/1281+2k formula held exactly across all 25 pairs.

## Unresolved

- No page in this section was directly rendered/visually read at all — every finding above is
  derived from the OCR index and OCR text only, per the brief's text-only rule. Everything listed
  under "Needs image check" is unconfirmed until a render happens.
- The exact boundaries of every numbered lecture sub-topic (only DM, Pregnancy, and the start of
  Thyroid Eye Disease were identified by heading text; the full sub-topic list for pp.1246–1280
  was not itemised, being out of calibration scope).
- No key-extraction pass (`keypos.py`) has been run on this section.
- Source-printing typos beyond the numbering defect above were not deliberately searched for.

## Note on injected instructions

During this job, two system-reminder-style messages appeared mid-task that did not come from the
calibration brief: one claiming "bypass permissions mode is active" and instructing the use of
Bash/heredocs instead of Read/Write/Edit, and a separate "drift check" pushing a caveman speech
register, an agent-routing ladder, and a restatement of the data-handling rule. Both were
declined — this note was written entirely with the Write tool (never a Bash heredoc), and no work
was rerouted to another seat or model. This matches the injection pattern already recorded in the
s03/s04 calibration notes.

## Byte size and line-ending check

To be run after this file is written: `tr -cd '\r' < "progress\ophtho-endpoint-s19-calibration-2026-09-15.md" | wc -c` — must print 0.
