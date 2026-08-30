# Debate brief — attack the OCR gate before it reads a new page

**Paste this whole file to ChatGPT (or any strong outside model). It is self-contained. Your
job is to ATTACK the decision described below: find the failure modes we missed, the holes in
the calibration, and the ways the gate silently corrupts a medical question bank. Do not be
agreeable. A verdict of "adopt" is only useful if you first tried hard to break it.**

## The decision under attack

We transcribe medical MCQs (stems, options, printed answer keys, printed explanations) from
scanned, image-only PDF question banks into a study app. Accuracy is the top rule: a silently
wrong option or key letter teaches a student the wrong medicine. Until now every page was read
visually by a vision-capable LLM from a 150 DPI render (expensive: ~1–2k tokens per page image).

Proposed change — the reading mechanism only, no content standard changes:

1. Render pages at 300 DPI grayscale; run Tesseract 5.4 with TSV output (per-word confidence +
   pixel boxes).
2. Segment each page into question blocks with a strict parser (question number, stem, option
   labels a–e, key letter). The parser **halts loudly** on anything malformed — it never guesses
   past a bad block.
3. Gate per block: **mean word confidence ≥ 88 AND clean structural parse → the block goes to
   the transcribing LLM as TEXT ONLY** (no image). Anything else — low confidence, structural
   oddity, suspected figure (detected as a large wordless region in the word boxes) — falls back
   to the existing 150 DPI visual read. Pages with figures always stay visual, and every cropped
   figure is still inspected by eye.
4. The transcribing LLM also has the image path available and is told: reach for it if anything
   in the text looks wrong, and say so when you do.

## Calibration evidence (measured 2026-08-30, not estimated)

Ground truth: 43 questions already shipped from earlier visual transcription, spanning both
layout profiles — 23 from a portrait bank (continuous numbering, keys in separate
"Correct Answer: X" blocks), 20 from a landscape bank (two book pages per sheet, numbering
restarts per chapter, keys inline "Answer: X").

- Token-level alignment of every shipped stem+options against the OCR word stream, every
  mismatch read by hand: **0 clinically-material OCR errors in 43/43 questions.** Every diff
  traced to a known non-OCR cause (stems we had deliberately reconstructed, markdown bold
  markers in our data, unicode apostrophes, page headers, an ampersand we had expanded, one
  hyphenation join).
- Two suspected OCR errors were checked against the print and both resolved AGAINST our shipped
  text: the OCR had read the page faithfully; our transcription had anglicised a spelling and
  condensed a clause.
- **Inline answer letters: 20/20 exact** on the landscape bank.
- Mean per-block confidence averaged 93.8 (portrait) and 95.0 (landscape). Every block with
  mean ≥ 85 had zero true OCR content errors.
- **The one real leak: five consecutive key letters were entirely ABSENT from the OCR output**
  (the "Correct Answer:" labels read at ~96 confidence; the letters after them simply do not
  appear as words — likely styled/circled print). Confidence cannot see a missing word. The
  structural rule "a key marker must be followed by exactly one A–E token, else visual fallback"
  catches all five. This is why the parser, not the confidence score, guards key blocks.
- minConf is worthless as a signal: perfectly-read blocks carried minConf 1–20 from stray marks.
- Surprise: the landscape 2-up layout — which OCR literature and our own plan flagged as the
  dangerous one — performed *better* than portrait.

## Known holes we are declaring, not hiding

- **Decimals and units are untested**: the calibration range happened to print none, and
  `0.5` vs `O.5`, mg/dL, 10^9/L are exactly the class we fear. The gate currently has no
  specific defence beyond confidence + the transcribing LLM's own reading.
- **Figure detection by word-box inversion is untested** (the one figure in range was already
  handled visually).
- n = 43 from one contiguous range per bank, chosen because ground truth existed there — not a
  random sample. Later chapters may print differently (tables, smaller fonts, worse scans).
- Drug names and eponyms have no dictionary; a confidently-misread drug name would pass the
  confidence gate. The transcribing LLM is the only line of defence there.
- The transcribing LLM reading OCR text loses the chance to catch what OCR dropped *silently
  mid-stem* (a dropped negation like "not" inside a high-confidence block would be invisible to
  both the gate and the reader).

## Questions to attack

1. Is "mean confidence ≥ 88 + structural parse" the wrong gate? What failure shape passes both
   and still corrupts a stem or option? (We already know dropped words can — how likely, and
   what cheap check catches a dropped negation?)
2. Is the calibration methodologically invalid (sample size, self-selection, measuring against
   our own transcription rather than the print)?
3. Should keys EVER ship from OCR text, given the five-missing-letters finding — or should key
   blocks be visual-always?
4. What would you add for the decimals/units hole given no calibration data exists for it yet —
   block-level regex triggers ("any digit → visual")? Too aggressive?
5. Is a second OCR engine (RapidOCR, character-for-character agreement) worth the complexity
   now, or only if a leak is demonstrated?
6. Anything about scanned medical MCQ banks specifically (typography of answer circles, table
   layouts, hand annotations) that breaks this design in a way we have not listed?

## Verdict format

End with: **ADOPT / ADOPT-WITH-CHANGES (list them, ranked) / REJECT (why)** — and the single
most dangerous failure mode you found.
