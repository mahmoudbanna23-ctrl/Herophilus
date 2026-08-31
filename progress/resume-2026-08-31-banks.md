# Resume prompt — finish all banks, endpoints deferred (2026-08-31)

> **⚠️ SUPERSEDED the same day.** The user split this into two parallel chats. Use
> `resume-2026-08-31-chatA-ophtho.md` and `resume-2026-08-31-chatB-peds-neuro.md` instead.
> This file is kept only as the single-chat fallback if one of the two chats is dropped.
> ⚠️ It also mislabels the peds bank as "Pediatrics treasure" — the project record says
> **House** (`bank: 'house'`, cover verified on PDF p.1). The Chat B prompt has the correction.

Paste the block below into a fresh session opened at `D:\claude os\Medical school\Herophilus`.

---

Resume Herophilus. This session finishes **every question bank except the endpoint books.**

**Read first, in this order:**
1. `MEMORY.md` — the "Resume here" block. The OCR banner at the top is NEW (2026-08-31, WPS route).
2. `tools\wps-ocr-reference.md` — the verified pipeline, its defects, its exit codes.
3. `progress\briefs\ophtho-bank-brief.md` — before touching ophtho. The bank arithmetic is not obvious.

**DEFERRED — do not start, do not render, do not plan for:**
Opthalmology endpoint (2,442 pp) · Pediatrics endpoint part1 (1,991) + part2 (1,993) ·
Neuro endpoint (2,190). That is 8,616 pages, ~94% of the remaining source. The user decided on
2026-08-31 to defer these and will choose their timing separately; they may study the endpoints
manually from the PDFs instead of putting them in the app. **If you finish the in-scope work, stop
and report — do not roll on into an endpoint book.**

**IN SCOPE, in this order** (the user's chosen order; ~1,100–1,300 questions total):

| # | Bank | Remaining | Note |
|---|---|---|---|
| 1 | Ophthalmology **GG** | **201** | EE3 30 · EE4 20 · EE5 20 · EE6 Photos 35 · Tutorial 27 · Final 69 |
| 2 | Ophthalmology **House** | **~572** | ~1,025 printed − 450 written − 3 folds |
| 3 | **Pediatrics** bank ("Pediatrics treasure", 104 pp) | **count it first** | corpus holds 81; total unmeasured |
| 4 | **Neuropsychiatry & neurosurgery** bank (142 pp) | **~333** | ~491 printed (nr ~330 + ps ~161) − 158 in corpus |

Renders for the next two batches are already staged — GG End Exam 3 and House ch.17
"Ocular malignancies", with three known fold candidates. Paths and warnings are in `MEMORY.md`.

**THE PIPELINE** — this replaces visual-first page reading:

```
pdftoppm -png -r 200 -f <first> -l <last> "<source.pdf>" "<scratch>/<prefix>"
wpscli photo2word "<scratch>/*.png" --output "<scratch>/" --json
```

Then extract text from each `.docx` (it is a zip — read `word/document.xml`, strip tags).
Measured rates: **0.32 s/page render, 1.29 s/page OCR.** The `wpscli.exe` path contains the WPS
version number and breaks on update — re-resolve it from the registry; the command is in
`tools\wps-ocr-reference.md`.

**FIRST TASK — a checkpoint, not the bulk run.**
Run the pipeline on **GG End Exam 3 only**. Compare the OCR output against the ophtho questions
already shipped for those same pages. Report three numbers: how many questions came through
clean, exactly what the OCR got wrong, and whether transcription is measurably faster than the
visual flow. **Then STOP and report.** The user has not yet seen this pipeline produce a real
question, and the throughput multiplier is unmeasured — do not commit the whole bank to an
unproven speedup.

**HARD RULES.** Each of these has already cost this project real work:

- **OCR text is a SEARCH INDEX, never a clinical source.** Confirm every fact against the
  rendered page before it ships. The engine does not invent text, but it does drop and garble it.
- **Never modify, rename, move, or delete a source PDF.** Renders go to the scratchpad and get
  cleaned per chunk.
- **Render and read page images inside a subagent only** — never in the main conversation, where
  every image is re-sent with every later request.
- **Append as you go** (`Edit`-append, never `Write`). Agents die on usage limits; an appending
  agent loses nothing.
- **Contradictions are RECORDED, never corrected** — the note goes in `explanation`, the `answer`
  never moves.
- **Folds are within-bank only**; check *which* option changed before folding. Six fold shapes
  are documented in `MEMORY.md`.
- **Stage explicit paths for commits** — never `git add -A`, never a directory a subagent writes into.
- **Say why a zero is a zero, and say how it was measured.** A count that did not move is a finding.

**Pace, for planning:** measured 110 questions on 2026-08-29 and 121 on 2026-08-30 by the visual
method. At ~115/day the in-scope work is roughly **11–12 working days**, less if OCR helps. Exams:
Peds OSCE 14 Sep · Peds papers 17 Sep · ENT 22 Sep · Ophtho 27 Sep · Neuro 3 Oct · Peds papers
18–19 Oct. Banks are deferred at clean topic boundaries, never cut.
