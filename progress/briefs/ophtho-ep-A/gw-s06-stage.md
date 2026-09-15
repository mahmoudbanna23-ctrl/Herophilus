# Section 6 (Conjunctiva): stage the 39 questions

Working root: `D:\claude os\Medical school\Herophilus`.

## Goal

Produce the staged array for section 6 exactly the way section 3 was staged, ready for an image check by a separate checker. Do NOT write explanations, do NOT build a draft, do NOT validate or splice.

## Write grant — these only

1. `tools/ep-index/stage-oph-s06.js` — new, modelled on `tools/ep-index/stage-oph-s04.js`.
2. `content/ophtho/qb-pages/oph-ep-p1-s06-<slug>.array.js` — new. Take `<slug>` from section 6's entry in the part-1 section table (`tools/bank-harness/sec-oph.js`, `SEC_P1`); never guess it. Match section 3's filename pattern `oph-ep-p1-s03-orbit.array.js`.
3. Report: `C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\c690134b-326b-4433-a5eb-cb30b9aea267\scratchpad\gw-s06-stage-report.md`

No git. Nothing under `Semester 8\`, `app/`, `progress/`, `MEMORY.md`, `CLAUDE.md`. `content/ophtho/qb-pages/ocr/ep/` is READ ONLY. TEXT ONLY: never render or view an image — your model has no vision.

## Facts already established

- Section 6 = PDF pp.417–522, 39 questions. Q n unmarked on p.`442+2n`, marked on p.`443+2n`.
- Keys, option counts, letter case, box flags, printed numbers: `content/ophtho/qb-pages/oph-ep-s06-keys.md`, read off page images — the authority for `answer`, option count, case, `boxPrinted`. 5 options on Q19, Q29, Q30, all others 4 (per the keys file — re-read it, it wins over this brief). Printed "28" appears twice: two distinct questions; `n` is physical order 1–39, record the printed number in `note` where it differs. p522 is a reprint — stage nothing from it. Boxes: n:31–35 confirmed boxed, n:36–39 confirmed none; n:1–30 NOT confirmed by eye yet — set `boxPrinted` from the calibration note `progress/ophtho-endpoint-s06-calibration-2026-09-15.md` candidates and append `boxUnconfirmed` to `note` on every row n:1–30. Letter case: from the keys file. Q8 (p.459) carries a figure: flag it in `note` as `figure p459`; set a figure field only if the s04 row shape has one.
- OCR text `content/ophtho/qb-pages/ocr/ep/pNNNN.txt` is a SEARCH INDEX, not a source: stems/options you take from it will be image-checked afterwards. Flag, never silently fix, anything with a number, unit, dose, exponent, arrow or dash — follow however `stage-oph-s03.js` raises `numberCheck` flags.
- Never fold or dedupe anything; n:28 and n:29 share a printed number but are distinct.

## Method

Read `tools/ep-index/stage-oph-s04.js` and `content/ophtho/qb-pages/oph-ep-p1-s04-lacrimal-system.array.js` first (the newest model; `stage-oph-s03.js` is older). Copy the row shape exactly (field names, order, `expl: ""`, `boxPrinted`, `n`, pages, flags, the `var OPHEP_S0x_STAGED` naming). Adapt page arithmetic and section constants only. Run the script to write the array. Pure LF output (`\r` count 0). If the script's option parser cannot find the recorded option count on a page, stage what it finds, set a flag on that row, and list it — never pad or invent option text.

## Verify

- `node --check` on both new files.
- Load the array in Node `vm`: length 39, holes 0 via `for (let i=0;i<A.length;i++) if(!(i in A))`.
- Per row: option count equals the keys file; key index equals the keys file's key; `boxPrinted` equals the keys file (section 6 rows n:1–30: the calibration candidates, flagged).
- CR count 0.

## Report (≤50 lines)

Slug and filenames used; per-row table n / pages / option count / key / flags; every flag with the reason; verification results; anything not done. No stem or option text in the report.
