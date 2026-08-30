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

## Not done yet (first Herophilus session to touch banks does this)
- [ ] User runs `7-install-ocr.bat` (Desktop) — verify `tesseract --version` prints 5.x
- [ ] 300 DPI render + TSV for one already-transcribed range; measure OCR accuracy against
      the shipped questions (ground truth exists!) before trusting the gate on new pages
- [ ] Write the gate + block parser (~200 lines, plain Node/Python, lives in `tools\` or
      scratchpad per project convention)
- [ ] Update `progress\briefs\` bank brief template with the text-first flow
