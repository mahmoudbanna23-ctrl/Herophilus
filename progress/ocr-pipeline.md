# OCR-gated transcription pipeline — design (2026-08-30, hub session)

## ✅ SETTLED 2026-09-01 — WPS WINS. THE COST LADDER IS CLOSED. DO NOT RUN PILOTS A0–D.

**Ruled by direct measurement on the endpoint PDFs themselves, not from either document.**
Everything below this banner is kept as the research record only. **No pilot is a first task
in any session.** A fresh Chat A starts on the exponent audit; a fresh Chat B starts by
splicing peds ch.4 and ch.5.

**What was measured (2026-09-01, 9 pages of "Opthalmology endpoint.pdf" through the live
pipeline):**

- **The endpoints are NOT scanned books.** Every page is a single **800x450 RGB JPEG at
  96 ppi** — 16:9 slide captures, uniform across the whole 2,442-page file (sampled p3, 100,
  101, 400, 900, 1500, 2100, 2438; a 60-page census at p600–659 returned 60/60 identical).
  Text layer is **0 characters** at every sample point in ophtho, peds part1 and neuro — OCR
  is genuinely required.
- **WPS reads them accurately**, including at native 96 ppi. Medical terms survive intact
  ("indentation (Schiotz) tonometry", "amblyopia", "3rd nerve palsy due to aneurysm of the
  posterior communicating artery"). 200 dpi is marginally better structurally than 96 dpi and
  costs 0.38 s/page — keep rendering at 200.
- **Zero 429s across 9 consecutive calls** at a 3 s gap. The rate ceiling that motivated the
  ladder did not appear on this workload.
- **The ladder solves a problem that does not exist.** Its premise was that OCR is the
  expensive bottleneck. WPS is **$0** on a tier already owned. Rungs A0 (Windows.Media.Ocr)
  and D (Google Cloud Vision) can only compete on throughput, and throughput was not the
  binding constraint when measured. Mistral at ~$19 is moot — there is nothing to buy.

**Endpoint-specific OCR defect classes — these do NOT exist in the banks:**

- ⚠️ **A whole option line gets DUPLICATED.** Seen on 3 of 9 pages: p100 repeated option B,
  p400 repeated option B, p2100 repeated option D with the page number fused to the first
  copy. Position varies. **Not yet established whether this is an OCR artifact or a printed
  defect — it needs a visual check before any endpoint question ships.** A silent duplicate
  turns a 4-option question into a 5-option one with a repeated distractor.
- ⚠️ **Arrows become CJK characters.** p2438 printed an up-arrow and OCR returned
  "glaucoma(个 IOP)". Same defect class as the superscript failure: a plausible-looking wrong
  character, not visible garbage.
- Minor and self-announcing: lost inter-word spaces ("measurement ofIOP"), letter-spacing
  artifacts ("D.All    of    the    above"), one spurious inserted letter ("The i infant").

**Two structural findings worth keeping:**

- **PDF p3 is a contents page carrying an exact topic-to-page-range map** — Squint 1066–1097,
  Pediatric Ophthalmology 1098–1149, Malignancies 1150–1181, Ocular Trauma 1182–1244, Ocular
  Manifestations 1245–1331, Drugs and the Eye 1332–1373, Keys for Diagnosis 1374–1390, Model
  Exams 1–5 at 1391–1545 / 1546–1700 / 1701–1856 / 1857–2022 / 2023–2175, Summer Exam
  2176–2330, Exam Night Review 2331–2442. Read the contents pages before planning any
  endpoint work; do not re-derive this by sweeping.
- **The tail is not MCQs.** p2438 is revision prose, inside "Exam Night Review" (2331–2442).
  Roughly one MCQ per slide holds for the body, not for that section.

**Deferral still stands, on drafting cost — not on OCR cost.** OCR is now cheap and proven.
The expensive step is drafting and verifying each question into the app, measured at
110–121 q/day. At roughly one question per slide the ophtho endpoint alone is on the order of
2,000 questions — far more than fits before 27 Sep alongside the banks. **The endpoints stay
deferred because of drafting time, and that is the user's call to revisit, not a session's.**

---

## ⚠️ ROUTE CHANGE 2026-08-30 (hub research, user-approved pending ~$4 spend confirmation)

> **SUPERSEDED 2026-09-01 — see the SETTLED banner at the top. Mistral is NOT the route; nothing is bought.**

**Mistral OCR Batch API is promoted from escape hatch to PRIMARY route** — $2/1,000 pages
(mistral.ai/pricing/api), on the existing Mistral account with the API-training opt-out
already OFF (verified 2026-08-30). ⚠️ CORRECTED 2026-08-31 (pdfinfo count, haiku agent —
the earlier "~1,900 pages ≈ $3.80" conflated QUESTIONS with pages): the 11 bank PDFs total
**12,537 pages**; ENT (3,364 pp) is already transcribed; **remaining ≈ 9,100–9,200 pages ≈
$18–19** — ophtho endpoint 2,442 · neuro 2,190+142 · peds 1,991+1,993+104 · ophtho GG+House
remainder ~150–300. **User should load ~$20 credit, not $5.** This SUPERSEDES the
six pending Tesseract-gate changes — do not build them. Comparison (researched 2026-08-30,
hub session, sonnet agent, sources in workspace-archive if needed): Azure Doc Intelligence
Read ~$2–3 but new-account setup; Google Doc AI ~$2.85, no ongoing free tier; AWS Textract
rejected (training opt-out needs AWS Organizations policy, unconfirmed for standalone
accounts); MinerU/marker local CPU $0 but days of runtime + unverified accuracy; olmOCR
needs 20GB GPU. No mature purpose-built MCQ extractor exists.

Second confirming sweep 2026-08-31 (sonnet agent, first-hand accounts specifically): the one
real comparable project (pokusew/testbook-ocr) used PAID Google Cloud Vision + manual
correction; every free GitHub MCQ extractor requires an existing text layer (no OCR); Anki
tools run Tesseract underneath; free local vision-OCR (DeepSeek-OCR/olmOCR) needs 7–20GB
VRAM; no Reddit/HN account of anyone doing this size for free. Verdict: nothing beats the
~$3.80 batch. Caveat valid for ALL LLM-OCR incl. Mistral: table/number drift is a known risk
class — the verification pass below is mandatory regardless of engine.

## ⚠️ COST LADDER 2026-08-31 (user ruled ~$19 too much; run pilots IN ORDER before paying)

> **CLOSED 2026-09-01 — see the SETTLED banner at the top. Research record only. DO NOT run these pilots.**

The ground truth that makes free pilots decisive: **thousands of already-shipped transcribed
questions.** Every pilot = OCR ~20 pages we already transcribed → compare against shipped
questions → check the killer failure classes (dropped answer-key letters — Tesseract's
proven fault — decimals, units, option labels, negations). A pilot passes only if it beats
the Tesseract calibration record (§ below), judged with the same paranoia.

0. **Pilot A0 — Windows built-in OCR (free, local, ZERO install — try this first).**
   Windows 10 ships an OCR engine (`Windows.Media.Ocr`), callable from PowerShell on the
   already-rendered PNGs. Decent on printed English, untested on our scans. Cheapest
   possible pilot: if it beats the Tesseract record, nothing else is needed.
1. **Pilot A — PaddleOCR (free, PC, unattended).** `pip install paddleocr` (CPU build;
   Python 3.12 present). Better layout handling than Tesseract on print, same engine class —
   UNVERIFIED on our scans until piloted. GPU route is dead: RTX 3050 laptop has only
   4 GB VRAM (measured 2026-08-31), below every local vision-OCR model's floor.
2. **Pilot B — iPad Apple Vision OCR (free, on-device, no training — passes the data rule).**
   iPad 10th gen via Shortcuts "Extract Text from Image" on the same 20 rendered pages
   (user runs it by hand; renders synced over, text synced back with page numbers intact).
   Clunky at scale — only promote it if Pilot A fails AND B passes clearly.
3. **Pilot C — Mistral tiling trick (pennies).** Mistral bills per page; composite 4 scanned
   pages as a 2×2 grid into one billed page → ~$19 becomes ~$5 (~250 EGP total). UNCONFIRMED:
   needs a tiny paid pilot to verify billing unit + accuracy at reduced size.
4. **Pilot D — Google Cloud Vision OCR (~1,000 pages/month FREE, then ~$1.50/1k —
   UNVERIFIED live).** Enterprise Cloud terms (no training on inputs — distinct from the
   banned Gemini consumer free tier); the proven engine behind the testbook project found
   in the sweep. Needs a Google Cloud account + user-run setup. Free quota alone can't
   carry 9,100 pages before exams — use as free top-up or cheap main engine if A0–C fail.
5. **Floor — Mistral per-module, never upfront.** Ophtho endpoint alone 2,442 pp ≈ $4.90
   (~250 EGP); neuro/peds paid only if reached before their exams. Paid Gemini Flash is a
   possible competitor at this rung — user will fund and ask first; do not pre-verify.

Rules: pilots run in a fresh Herophilus session as its first task; tooling scripts go to the
free lanes; page CONTENT never goes to any free-tier cloud service (Paddle and Apple Vision
are local — fine). A pilot's verdict is written here with numbers, never adjectives.

New flow once an engine passes (any rung): engine reads pages → OCR text → block parser
(halt-loudly rule unchanged) → Claude subagents transcribe/verify from TEXT; visual read at
150 DPI only for figure pages and anything flagged. All accuracy paranoia below (drug names,
decimals, units, option labels, House landscape) still applies to the OCR text —
verification is reduced, never removed. Everything below is kept for the fallback path and
the failure-class checklist.

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
- [x] Gate + block parser: **built by OpenCode 2026-08-30, landed as `tools\ocr-gate.js`**
      (launched from Bash by the hub — the free-lane CLIs run headless, no user hand-off).
      `--selftest` passes (n=27); ambiguity resolutions documented loudly in its header.
      ⚠️ **On the REAL calibration TSVs it HALTs (exit 1) on every page** — the running
      headers (`QUESTION BANK: …`, `Chapterwise MCQs`) sit at ~7–16% page height, below the
      brief's 4% strip, so they land as unconsumed words. Halting loudly is the contracted
      behaviour, but the strip depth needs tuning per bank — fold that into the verdict
      amendment round. **Not wired into any batch; the brief it was built from predates the
      verdict below, whose changes must be applied on top before the gate ever runs.**
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
