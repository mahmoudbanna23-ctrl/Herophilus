# Calibrate ophthalmology endpoint section {SEC} — from the OCR index

Working root: `D:\claude os\Medical school\Herophilus`.

## ⛔ TEXT ONLY — NO IMAGES

Your model has NO vision. A previous run of this exact job rendered pages and tried to view them; the gateway refused (`Provider 'opencode-zen' does not support vision`) and the run died with nothing written. **Never run pdftoppm, never render, never open or view any image.** Work only from the OCR `.txt` files and `index.json`. Everything that needs an image goes in the "needs image check" list — that is the correct output, not a failure. Write the note incrementally (create it early, append as you go) so a dead run leaves something.

## Goal

Write the calibration note for part 1, section {SEC}, in the same shape as the section 4 note, so staging can start. Calibration only: no staging, no keys, no explanations.

## Write grant

1. `progress/ophtho-endpoint-s0{SEC}-calibration-2026-09-15.md` — new. If a `progress/ophtho-endpoint-s0{SEC}-calibration-*.md` already exists, read it first; if it is partial, write the new dated note anyway and say in it what the old one had.
2. Report: `C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\c690134b-326b-4433-a5eb-cb30b9aea267\scratchpad\gw-calib-s0{SEC}-report.md`

No git. Nothing under `Semester 8\`, `app/`, `MEMORY.md`, `CLAUDE.md`, any other `progress/` file. `content/ophtho/qb-pages/ocr/ep/index.json` and `pNNNN.txt` are READ ONLY (another job appends to the index; read it once at start).

## Inputs

- Model notes: `progress/ophtho-endpoint-s04-calibration-2026-09-09.md` (primary), `progress/ophtho-endpoint-s03-calibration-2026-09-09.md`.
- Keys file shape the note must set up: `content/ophtho/qb-pages/oph-ep-s04-keys.md`.
- Section range: entry {SEC} of `SEC_P1` in `tools/bank-harness/sec-oph.js`. Confirm and quote it.
- OCR search index: `content/ophtho/qb-pages/ocr/ep/index.json` and `pNNNN.txt` for that range.

## Facts already established

- Pattern in sections 3–4: a prose/notes run, then a "Questions" divider page, then questions printed twice — unmarked page then marked (answered) page, so Q n sits on a fixed `base+2n` pair. Do not assume it holds here: derive it and test it on every pair.
- The classifier errs both ways: prose tagged `answered` (s04 pp.279/280) and real questions tagged `notes`. The closing test is every page accounted for, never a tag count.
- Option-letter case can switch mid-section, more than once (s04: lower, upper, lower). Record every transition with its Q.
- Option counts vary (s04 Q18 had 5).
- Section 5 only (if {SEC} is 5), known flags: few-options p364, 382, 386, 388, 390, 392, 396; options-differ p362, 368, 370, 374, 412; thin p343, 352, 358, 371, 377.
- Section 6 only (if {SEC} is 6), known flags: thin p417 (divider "Conjunctiva"), p436, p443 (divider "Questions"), p444, p462, p470, p498, p499; few-options p471, p517; options-differ p449, 451, 453, 475, 481, 483, 501, 505.
- OCR is a search index. OCR cannot see highlighted key marks. Never state a key. Anything the note asserts that only an image can settle (box present, figure present, option count on a flagged page, the case transition) goes in an explicit "needs image check" list with page numbers.

## Method

Prefer a small Node script (in `C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\c690134b-326b-4433-a5eb-cb30b9aea267\scratchpad\gw-calib-s0{SEC}\`) over reading 100 pages by hand: page kinds, word counts, option-letter sets, stem-similarity between consecutive pages (the unmarked/marked pair should be near-identical), explanation-box candidates (a marked page with clearly more words than its unmarked twin — use the word-count delta, and widen the box search beyond the first few Q), divider pages. Then read the individual `.txt` files the script flags.

## Note contents (match the s04 note's sections)

Range and divider pages · question count and how it was derived · page formula and every pair it was tested on (list exceptions) · unassigned pages with what they are · option counts per Q (OCR-derived, flagged ones marked) · case transitions · box candidates per Q with word deltas · figure candidates · classifier mis-tags · needs-image-check list · anything unresolved.

## Report (≤40 lines)

Question count, formula, exceptions, box candidates, needs-image-check pages, anything not done. No medical content.
