# OCR section 6 of the ophthalmology endpoint book

Working root: `D:\claude os\Medical school\Herophilus`.

## Write grant

- `content/ophtho/qb-pages/ocr/ep/` — `pNNNN.txt` page files and `index.json`, written only by the existing pipeline.
- Your report: `C:\Users\Alfa388\AppData\Local\Temp\claude\D--claude-os-Medical-school-Herophilus\c690134b-326b-4433-a5eb-cb30b9aea267\scratchpad\codex-s06-ocr-report.md`

Nothing else. Do not edit any script. Do not run git. `Semester 8\` is read-only.

## Step 0 — check nothing else is writing the index

`index.json` is rewritten by a read-modify-write that is NOT atomic; a concurrent run can destroy rows.

1. Record `index.json` row count and byte size. The last known good state is 411 rows / 88,006 bytes, covering PDF pages 6–416.
2. Confirm pages 343–416 are present and `.txt` files stop at `p0416.txt`.
3. A previous worker for this exact job died before running anything. Check that no `p0417.txt`–`p0522.txt` exist yet and no lock/partial marker is in the directory.

If anything suggests another run is live, or the count is below 411, stop and write the report. Do not start.

## The run

Section 6 "Conjunctiva" is PDF pages 417–522 (106 pages) of `Semester 8\Opthalmo\Questions\Opthalmology endpoint.pdf`. Confirm from entry 6 of `SEC_P1` in `tools/bank-harness/sec-oph.js`.

Read `tools/ep-index/run-all.ps1` first, then run it over 417–522 the way it expects its range (previous runs used `-First <n> -Last <n>`; if the script needs `-ExecutionPolicy Bypass` to launch, use it). It extracts page images with pymupdf, OCRs each page twice with Windows.Media.Ocr, and merges with `index.py`. It makes no WPS call. Do not modify it and do not substitute another OCR route.

The OCR text is a search index only. Do not judge or correct its content.

## After the run — write the report

- Pages done, any failures with exit code.
- `index.json` rows and bytes before and after. Rows must grow by exactly 106; anything less is the headline finding.
- Confirm pages 6–416 all still present.
- Classifier tag counts for 417–522 (answered / question / notes / other).
- Every `thin`, `few-options`, `options-differ` flag with its page.
- Any `.txt` under ~200 bytes, with whether it looks like a section-divider page (p0343.txt is 31 bytes and legitimately reads only "Eyelids").
- Anything left undone.
