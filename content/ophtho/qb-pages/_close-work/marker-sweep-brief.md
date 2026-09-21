# Brief - marker sweep (2026-09-21)

## Goal
Find ophthalmology endpoint entries whose explanation still ends with the false-by-default marker
"prints no explanation here" although a Model Exam page of the same book prints an explanation box for the
same question. Pure script, no vision calls, no model calls. You write ONE node script and run it.

## Facts already known
- Marker entries live in `app/data/questions.ophtho.ep.js` (`var Q_OPHTHO_EP`, ids `ophep-*`) and
  `app/data/questions.ophtho.ep2.js` (`var Q_OPHTHO_EP2`, ids `ophep2-*`). Classic scripts, not modules: load with
  `new Function(src + ';return Q_OPHTHO_EP')()`. The marker wording varies slightly ("Written for this bank - the
  endpoint file prints no explanation here." and near variants); match the regex `/prints no explanation here/i`.
  Count two ways and report both: marker anywhere in `explanation`, and marker in the last 200 characters of it.
  The journal says 191 (ep) and 80 (ep2) for the second definition; if your numbers differ, say so, do not force them.
- Exam half of the book (PDF 1391-2329) was already read by vision seats. Six staging files hold one row per PDF page:
  `content/ophtho/qb-pages/_s22-work/oph-ep-p2-s22-model-exam-1.staging.json`, `_s23-work/...s23-model-exam-2...`,
  `_s24-work/...s24-model-exam-3...`, `_s25-work/...s25-model-exam-4...`, `_s26-work/...s26-model-exam-5...`,
  `_s27-work/...s27-summer-exam...`. Row fields: `pdf_page, printed_page, page_type, printed_q, stem, options,
  key_letter, key_index, box_printed, explanation_verbatim, figure`. Some rows are the unmarked question page
  (no box), some the marked page (carries the box). Two pages (1857, 2023) appear in two files.
- The chapter half (PDF 6-1390) has OCR text at `content/ophtho/qb-pages/ocr/ep/p<4-digit page>.txt` (two OCR passes
  concatenated, separated by a `--- 150dpi ---` line). OCR is a search index only.
- `tools/bank-harness/norm.js` exports `base, tight, words, lev, sameOpt, sameSet`. Read it and reuse it for stem and
  option matching; do not write a second normaliser.
- Recent proof that the problem is real: three survivors (`ophep-vitreous-8`, `ophep-ocular-systemic-diseases-17`,
  `ophep-ocular-trauma-16`) carried the marker while a Model Exam reprint printed a box. They were fixed in commit
  `7d48331`. The state BEFORE that commit is your test fixture (see Verify).

## What the script does
File: `tools/bank-harness/oph-marker-sweep.js`. Usage: `node tools/bank-harness/oph-marker-sweep.js [--data <dir>]`
(default `app/data`; the dir must hold `questions.ophtho.ep.js` and `questions.ophtho.ep2.js`). Read only, never writes
into the data dir.
1. Load both arrays, list marker entries (both definitions above).
2. Load all staging rows. Keep rows with `box_printed === true` and non-empty `explanation_verbatim`; also keep the
   rows without a box, because a box may sit on the neighbouring page: for each boxed row also record the question
   stem of the row itself.
3. For every marker entry, compare its stem and options against every boxed staging row (stem via `norm.js`,
   options via `sameSet`/`sameOpt`). Tier 1: normalised stems equal, or token overlap >= 0.9 and option sets match.
   Tier 2: token overlap 0.7-0.9 and at least 60 percent of options match. Anything lower is not reported.
   Do not merge or discard a candidate because another candidate exists for the same entry; list them all.
4. For each candidate record: entry id, file, tier, score, matched pdf_page, printed_q, whether that page is already
   cited in the entry's `source` (source cites pages like `p.1474-1475`; parse ranges), the staged stem, the boxed
   text verbatim, and the entry's current last 200 characters of `explanation`.
5. Pass 2, chapter half, entries of `ophep2-*` only: for each, search the OCR text files for a page whose text holds
   the entry stem (token overlap >= 0.8). For each hit, print the text that follows the last option line of that
   page (drop the page number and the second OCR pass). Report these as tier 3, "OCR text, unverified". If the
   result is noisy or empty, report the counts honestly and do not tune thresholds to manufacture hits.

## Output
Write to `content/ophtho/qb-pages/_close-work/marker-sweep/`: `candidates.json` (array, one object per candidate),
`summary.md` (at most 40 lines: counts under each definition, candidates per tier and per file, entries with more than
one candidate, the fixture result, anything you did not check). Print the summary to stdout too.

## Verify
1. `node --check tools/bank-harness/oph-marker-sweep.js`.
2. Build the fixture: `git show 7d48331^:app/data/questions.ophtho.ep.js` and the same for `questions.ophtho.ep2.js`
   into `content/ophtho/qb-pages/_close-work/marker-sweep/_fixture/`. Run the script with `--data` on that dir. The
   three ids named above MUST appear as tier 1 or tier 2 candidates; if one does not, say which and why (do not
   loosen the thresholds silently, report the score you saw).
3. Run against the live `app/data` and report the counts.

## Where you may write
Only `tools/bank-harness/oph-marker-sweep.js` and `content/ophtho/qb-pages/_close-work/marker-sweep/`. Do not edit
anything under `app/`, do not run any git write command, do not touch `CLAUDE.md` or `MEMORY.md`. Do not render
PDFs or call any model.

## Traps
- Data files mix `id:"x"` and `id:'x'` styles and `ep.js` may hold mixed CRLF/LF: you only read them, so load
  structurally, never by regex over lines.
- Some `options` may be arrays of strings, some may be missing; guard, do not throw.
- The Bash tool collapses double backslashes in heredocs: write code with a file-write tool, not a heredoc.
- Cap on your steps: about 40 tool calls. If the job is not done by 30, write what you have to `summary.md` and stop.
