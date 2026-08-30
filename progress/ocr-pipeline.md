# OCR-gated transcription pipeline — design (2026-08-30, hub session)

Goal: remove the page IMAGE (~1–2k tokens each) from the request for the large majority of the
~1,900 remaining bank pages. OCR text is nearly free; Claude verifies text, not pixels.
Research provenance: workspace hub session 2026-08-30 (two-agent GitHub/OCR sweep). Nothing here
changes content standards — transcription accuracy rules, fold discipline, and citation rules
stay exactly as CLAUDE.md §4 says. Only the reading mechanism changes.

## Architecture (adopt in the bank workflow before the next GG/House batch)

1. **Separate OCR render at 300 DPI grayscale** (`pdftoppm -png -r 300 -gray`) to the
   scratchpad. ⚠️ 150 DPI is BELOW Tesseract's usable floor (its docs put the sweet spot at
   300; a cited case saw ~40% error reduction 150→300). Keep the existing 150 DPI renders for
   the vision fallback — never feed 300 DPI to Claude (image tokens scale with pixels).
2. **Tesseract 5.5** (`C:\Program Files\Tesseract-OCR\tesseract.exe`, installed via Desktop
   `7-install-ocr.bat`) with TSV output → per-word confidence + word boxes. ~0.8 s/page CPU.
3. **Confidence gate** per question block: mean word confidence above threshold AND a clean
   A–E option structure → the block ships to the transcribing agent as TEXT ONLY (no image).
   Below threshold, or any page with a figure → the existing visual read at 150 DPI.
   Calibrate the threshold on the first batch by comparing OCR text vs the visual read on
   ~20 pages before trusting the gate.
4. **Known Tesseract failure classes on medical MCQs — the gate must stay paranoid about:**
   option labels (`A)` vs `4)`, l/1/I), units and decimals (`0.5` vs `O.5`, mg/dL, 10^9/L),
   drug names/eponyms (no dictionary), multi-column layouts (House's two-page landscape!).
   These are exactly the clinically dangerous errors — when in doubt, flag to vision.
5. **Parser discipline (stolen from pokusew/testbook-ocr):** the block parser HALTS LOUDLY
   with details on any unexpected token — never guesses past a malformed block.
6. **Figure detection for free:** invert the TSV word boxes — a large region with NO
   recognized words = a picture. Replaces ad-hoc figure hunting; crops still get LOOKED at
   (that rule is unchanged; no numeric check has ever caught a bad crop).
7. **Optional second opinion (add only if the gate leaks):** RapidOCR (`pip install rapidocr
   onnxruntime` — plain CPU build, NOT directml). Two engines agreeing character-for-character
   beats either engine's self-confidence. Escape hatch beyond that: Mistral OCR Batch API
   (~$1–2 for the whole backlog) — NEVER Gemini free tier (its terms allow human review +
   training on uploads; these are copyrighted commercial banks).

## Expected effect
Image tokens eliminated on an estimated 85–90% of text-only pages; House landscape pages and
figure pages stay visual. The subagent brief changes from "read the rendered pages" to
"here is the OCR text of Q<n>–Q<m>; transcribe from it; the image is available at <path> ONLY
if something looks wrong — say so when you reach for it."

## Status (2026-08-30)
- [x] Tesseract verified: v5.4.0 at `C:\Program Files\Tesseract-OCR\tesseract.exe`
- [x] **Calibration done — `progress\ledger.md` §17q.** 43 shipped questions (GG t16 portrait +
      House c12 landscape 2-up): **0 clinically-material stem/option errors, House keys 20/20.**
      ⚠️ **But five GG key letters were ABSENT from the TSV at ~96 surrounding confidence** —
      confidence cannot see a dropped key letter; **the §5 halt-loudly block grammar is
      load-bearing for key blocks.** Candidate gate: per-block mean conf ≥ 88 AND structural
      parse passes. minConf is useless (zero-edit blocks carry minConf 1–20 from stray marks).
      Untested classes: decimals/units (none in range), word-box figure detection.
- [~] Gate + block parser: brief written (`progress\briefs\ocr-gate-tooling-brief.md`,
      content-free), **OpenCode build launched 2026-08-30 by the hub itself** (the free-lane
      CLIs run from Bash; no user hand-off needed). Hub reviews the diff, runs `--selftest`,
      and tests against the calibration TSVs before landing in `tools\`. ⚠️ The brief predates
      the verdict below — the verdict's changes must be applied on top before the gate runs.
- [x] **Sama debate round DONE 2026-08-30 — run headless via the grok CLI** (brief permits any
      strong outside model; user delegated the lane choice). Full verdict:
      `progress\briefs\ocr-gate-debate-verdict.md`. **ADOPT-WITH-CHANGES.**
- [ ] Update `progress\briefs\ophtho-bank-brief.md` with the text-first flow — **deferred until
      the amended gate exists and is re-calibrated per verdict change (4)**

## Debate verdict (2026-08-30) — ADOPT-WITH-CHANGES, six required changes

The verdict's core findings, all of which stand up: **the confidence half of the gate never
fired in calibration** (threshold 88 fit on the same 43 blocks, 6–7 points below the observed
mass — it rejected nothing); **a mean over all words cannot see a dropped `not`/`except` or a
`hyper`/`hypo` substitution** (one load-bearing word doesn't move a 40-word mean); and **the
calibration was an agreement study against our own previous vision transcript, not against
print** — a shared miss scores as a match. Single most dangerous failure mode: a fluent
high-confidence stem with a silent clinical inversion that parses clean, ships as text, and
the LLM never opens the image.

Required changes before the gate reads any new page:

1. **Keys visual-always** — never text-only for the answer letter (the five absent GG letters
   may be a grayscale-render casualty: recheck in colour).
2. **No text-only success path** — gated blocks send OCR text **plus** a tight 300 DPI crop;
   the transcribing agent must copy-or-escalate, never paraphrase. Optional image is a prompt,
   not a control.
3. **Any digit / unit / Greek / superscript → cannot take the cheap path** until a
   print-checked numeric sample exists.
4. **Re-calibrate end-to-end against print** on a frozen holdout with numbers, tables, a
   figure-heavy chapter and an answer-key page; score the agent's output, not the Tesseract
   stream; pre-register the threshold.
5. **Dangerous-token weighting + box-density deletion check** instead of bare mean ≥ 88
   (negations, numbers, OOV tokens, single-letter keys dominate; a negation-lexicon tripwire
   on `all of the following…` stems missing `except`).
6. **Fallback at 300 DPI, colour at least for key crops** — the current 150 DPI fallback is a
   worse image than the OCR input, which is incoherent.

**Cost-case consequence, stated honestly:** change (2) means the image never fully leaves the
request — the saving shrinks from "no image on ~85–90% of pages" to "a tight per-question crop
instead of full pages", plus OCR text making the read faster/safer. Still a real reduction,
much smaller than designed. **Until changes 1–5 are built and change 4's re-calibration
passes, all batches run the classic visual flow** — which is what GG EE1 and House ch.15 will
use.
