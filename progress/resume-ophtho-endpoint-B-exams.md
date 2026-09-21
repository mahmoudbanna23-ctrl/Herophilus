# START PROMPT — Ophthalmology endpoint, HALF B (exam sections)

**Paste this as the first message of a fresh chat. Open it on Fable 5.1.**
Do not continue an old session into this work (`CLAUDE.md` §9: step count is the cost).

---

You are Chat OPH-B. Workspace `D:\claude os`; project `Medical school\Herophilus`
(its `CLAUDE.md` and `MEMORY.md` auto-load — read them before doing anything).

## Your scope

Transcribe the **exam half** of `Semester 8\Opthalmo\Questions\Opthalmology endpoint.pdf`.

- **Your pages: PDF 1391 – 2442.** 1,052 pages, sections 22–28: Model Exams 1–5, Summer Exam, Exam
  Night Review. A second chat, OPH-A, owns PDF 6–1390 (the 21 chapters). **Never render, read, cite
  or write a question from a page outside your range.**
- Section table with all seven exam ranges:
  **`progress\ophtho-endpoint-section-map-2026-09-07.md`** — read it, it is short, and it means you
  never re-render the TOC.

## ⚠️⚠️ THE PAGE OFFSET BREAKS INSIDE YOUR RANGE — this is your defining hazard

The printed page number equals the PDF page number up to **PDF 2150**. From somewhere in
**PDF 2151–2170** onward it is **+1**: `printed = PDF + 1`, i.e. `PDF = printed − 1`. Verified at
2170 (printed 2171), 2175, 2176, 2180, 2200, 2280, 2331.

**The exact flip page is NOT pinned.** Five samples bracket it; they do not locate it.

**GATE 0 for you: pin it.** Binary-search PDF 2151–2170 — about four single-page renders at 100 dpi,
read the small red number at bottom-right — and write the answer into the section map file. Do this
**before you write any `source` value for a page past 2150.** The closing test is page coverage; an
off-by-one there is a silent, systematic failure across the last ~290 pages.

Decide and record **one** convention for `source` citations (recommendation: cite the book's
**printed** number, since that is what the user sees on the page, and keep a PDF→printed note in the
ledger). Whatever you choose, `pagecov-oph.js` must be told which one, and OPH-A must be told too.

## Read these first, in this order

1. `progress\ophtho-endpoint-section-map-2026-09-07.md` — sections, ranges, the offset evidence.
2. `progress\ophtho-endpoint-scoping-2026-09-06.md` — why the split is shaped this way; the
   do-not-split-the-PDF finding; the OCR conditions.
3. `progress\resume-peds-endpoint-part2.md` — the closed peds endpoint part 2. **This is your
   template**, and it was the exam-heavy half too. Copy its method, not its content.
4. `tools\wps-ocr-reference.md` before your first OCR call.

Do **not** open anything else in `progress\` without checking `progress\READING-COSTS.md` first.

## Your outputs — names are fixed, do not improvise

| Thing | Value |
|---|---|
| Data file | `app\data\questions.ophtho.ep2.js` |
| Array | `Q_OPHTHO_EP2` |
| Id prefix | `ophep2-` |
| Bank | `endpoint` |
| Ledger section | a new section in `progress\ledger.md` |

OPH-A uses `questions.ophtho.ep.js` / `Q_OPHTHO_EP` / `ophep-`. **If you touch any of those three,
you have made the mistake this split exists to prevent.**

## You are blocked on OPH-A for two things

1. **The toolchain.** `tools\bank-harness\` is entirely pediatrics. OPH-A builds
   `val-oph-ep.js`, `splice-oph-ep.js` and `pagecov-oph.js`, each taking `--part 1|2`. You use
   `--part 2`. **Do not build a parallel copy** — two validators on one book is the same class of
   bug as two chats on one file. ⚠️ Never run `val-pd.js` / `splice-pd.js` / `pagecov-ep2.js` on an
   ophthalmology file; they write peds files.
2. **`app\index.html`.** OPH-A adds **both** `<script>` tags and creates your file as a stub with an
   empty `Q_OPHTHO_EP2`. **Do not edit `app\index.html`** — that is the one file the two of you can
   collide in.

**While blocked, do the work that does not depend on either:** pin the offset flip (above), render
and OCR your range into a search index, and map where each of the seven exam sections actually
starts and ends against the map's claimed ranges. That is real progress and none of it can be wasted.

## Method (the parts people get wrong)

- **Render + read scanned pages inside a subagent that returns text only.** An image read in the main
  conversation is re-sent every request for the rest of the session. `pdftoppm -png -r 150 -f <a>
  -l <b> "<source>" "<scratchpad>/oph-epb-"`. **Never modify the source PDF.**
- **Never split the PDF.** Splitting these books makes them *bigger*. You split the page range only.
- **OCR text is a search index, never a clinical source.** ⚠️ Never take an exponent, a unit or a
  dose from OCR — WPS read a printed 10⁶ as 10⁹ and also flattens 10⁶ → 106. Read those off the page
  image.
- **Exit 429 is a rate limit, not a quota** — back off, double the gap (cap 60 s), retry the same
  page. **You share one WPS account with OPH-A**, so the account-wide rate is double what you think
  you are issuing. Pace as if you own half.
- **Read every answered page; trust no printed count**, not the contents page, not the section map's
  own ranges. Render one page past the last page of each section.
- **Exam sections repeat the chapters' content by design.** Expect heavy within-book duplication
  against OPH-A's half. **Nothing folds mid-stream** — log every suspected collision with both ids
  and fold at the end, after both halves are closed. Six fold shapes: project `MEMORY.md`.
- Content standards, explanations, the six-shape duplicate sweep: project `CLAUDE.md` §4.
- **Cache as you go.** Transcription to `content\`, page ranges to `progress\ledger.md`, in the same
  pass. Write entries to disk incrementally (`Edit`-append, never `Write`) so a dead session resumes
  from the file.

## Routing — who does the work (workspace `CLAUDE.md` §9)

Take the lowest rung that can do the job and **say which rung before starting**.

Scanned medical pages **never leave Claude** — the fleet is not an option for transcription here.
That puts page work on rung 3: **`lean-drafter` subagents on Sonnet**, one bounded job each, back
in under ~60 tool calls. Use `haiku` for pure read-only search. Non-page work that *can* leave —
research, formatting, first-draft tool code — goes to the fleet via `/msn` or `opencode-delegate`
first. The main chat reviews and routes; it does not transcribe.

## Closing test

**Page coverage, not a section count.** Every `p.<n>` in every `source` field against every
OCR-`answered` page in PDF 1391–2442, **under the numbering convention you recorded at gate 0**.
`node tools\bank-harness\pagecov-oph.js --part 2`, exit 0.
⚠️ The classifier errs **both** ways — it calls real questions "notes" (the expensive direction) and
prose "questions". An adjudication is not a citation; record each one.

## Rules that end a session badly if broken

- **Commit with `git commit -F <msgfile> -- <explicit paths>`.** Never `git add -A`. Never stage a
  file OPH-A owns. `index.lock` present = the other chat is mid-commit; wait, never delete it.
- **Do not write to `MEMORY.md` or `ledger.md` mid-run** beyond your own appended ledger section.
- **A dirty tree is normal while two chats run.**
- Stop at a clean section boundary. A partial pass reported honestly is a success; a silent gap is
  not.

## Report back

When you stop, append to this file's `## Changed since` block (create it) — never edit the body
above. State: the pinned flip page, the citation convention you chose, sections done, page ranges
covered, entry count from disk (not from a draft header), collisions logged, anything left open.

## Changed since

### 2026-09-20 -- Half B started by the Half A chat (owner: finish all)
- Half A is closed: s1-s21 live, 439 in questions.ophtho.ep.js (commit 809dddb). No second chat exists; this stream now owns PDF 1391-2442 too.
- Method that works, rung 2: one stage-pages.mjs run per section with STAGE_MODEL=work-vision, Poppler bin prepended to PATH, output JSON placed in its own content/ophtho/qb-pages/_sNN-work/ folder so the stager's _manifest.json lands there and never over the tracked one. 155 pages ran in under 10 minutes.
- s22 Model Exam 1 (PDF 1391-1545) STAGED: _s22-work/oph-ep-p2-s22-model-exam-1.staging.json, 153 of 155 pages, 76 unmarked + 76 marked + 1 opener, printed page = PDF page throughout. OWED: p.1505 and p.1522 returned a Base64 400 -- re-save each PNG through System.Drawing and rerun those two pages with a no-render copy of the stager (the s20 fix), then merge. Staging is NOT yet image-checked.
- s23 Model Exam 2 (PDF 1546-1700) staging was launched into _s23-work/ at session end; check the file exists and count its pages before trusting it. Renders were in a session scratchpad and are gone.
- Next: fix the two s22 pages, build the s22 array, sweep against the 439 live chapter questions AND House (expect heavy repeats; fold per the six shapes, exams fold into chapters), add sec rows for part 2 in sec-oph.js, draft only the survivors, separate refuter, splice into questions.ophtho.ep2.js (Q_OPHTHO_EP2, ophep2-). Wire the new data file into index.html and the aggregator at first splice.
- Gate 0 (offset flip in PDF 2151-2170) is not pinned; it falls out of staging s26, every staged page records printed_page.
### 2026-09-20 (later) -- s22 CLOSED, s23 CLOSED as all folds, s24 partial
- Failed pages 1505, 1522, 1559, 1570, 1571 restaged (312690c); s22 and s23 staging both 155/155.
- Aggregator fix 06418ce: Q_OPHTHO_EP and Q_OPHTHO_EP2 were loaded but never concatenated into QUESTIONS. Ophtho stays locked, boot still 4049/81/156.
- s22 Model Exam 1 CLOSED: 77 printed, all 77 image-checked by separate Sonnet runs (_s22-work/s22.imgcheck-*.md). 67 within-bank exact reprints of live ophep- entries (list + reasons in sec-oph.js SEC_P2 row 22; n30, n42, n48 under-scored by the sweep, exact on the page). 10 survivors drafted (Sonnet), refuted (Opus, _s22-work/s22.refuter.md: two false absence tags and missing slide numbers, fixed), spliced: questions.ophtho.ep2.js holds 10, ids ophep2-model-exam-1-{7,25,27,32,34,35,46,50,58,73}. n58 carries app/assets/q/q-oph-ep-1506.jpg. n34 pairs with ophep-uveal-tract-4, not folded. Boot 4049/81/156, 0 errors.
- s23 Model Exam 2 CLOSED with 0 new questions: 77/77 reprints of live ophep- entries (76 exact; n11 p.1568 reworded stem, same options and key = ophep-lacrimal-system-1). Image-checked, _s23-work/s23.imgcheck-A/B.md. No array, draft or splice. p.1701 = Model Exam 3 divider.
- Sweep tool fault: sweep-oph-staged.js printed key DIFF or 0.000 scores on rows the page shows exact (s22 n30/42/48; s23 n5/16/59/68/69). Image read wins; the scorer wants a look.
- OWED at end of stream: reprint citations on the live ophep- survivors of all s22/s23 folds; s22 n8 matches two identical live entries (ophep-optics-refraction-3, ophep-orbit-1) -- a part-1 duplicate to fold; live ophep-conjunctiva-3 option d reads "Adenovirus 44 g" against plain "Adenovirus" on p.1475 -- check its own source page; s22 pages 1443 (n26), 1497 (n53), 1505 (n57), 1517 (n63) print figures the live entries carry no image for.
- s24 Model Exam 3 (PDF 1701-1857): 52 pages staged (1701-1752, printed = PDF), then Gemini 429 daily quota, both flash-lite seats. OWED: 1753-1857 with the no-render stager into _s24-work, then s25-s28. No other vision seat exists on the gateway; next routes are Gemini after reset or Codex own login (`codex exec -i`).
- Gate 0 flip still unpinned (falls out of s26 staging).

- s23 Model Exam 2 (PDF 1546-1700) STAGED, not image-checked: 155 {"theory":1,"question_unmarked":73,"question_marked":76,"ERR":3,"question_single":2} ERR pages: 1559 1570 1571. Failed pages, if any, take the same PNG re-save fix as s22.
### 2026-09-20 (night) -- s25 staged and swept, Codex stager in the repo, s24 tail + s26 staging running detached
- Gemini vision seats stayed 429 (daily quota). Staging moved to Codex own login: tools/bank-harness/stage-codex.mjs, one codex exec -i call per page (gpt-5.6-terra), resume-safe, one retry per page, stops after two failures in a row. About 1 minute a page. Usage: node stage-codex.mjs <first> <last> <renderFolder> <out.json>, renders named p-<page>.png.
- s24 Model Exam 3: rows 1701-1752 Gemini, 1753-1825 Codex; 1826-1857 running in a detached chain (scratchpad chain.sh, logs s24-codex4.log, s26-codex.log, last line CHAIN DONE). Count the file before trusting it. Image checker for Codex-staged rows must not be Codex.
- s25 Model Exam 4 (PDF 1857-2023) STAGED 167/167: 1857 and 2023 are dividers, 82 unmarked + 83 marked, printed = PDF. p.2016 (q74) prints a marked page only, no unmarked twin -- the array builder must not assume strict pairs. Pages 1862 and 1880 failed Codex twice, staged by a Sonnet run (staged_by says so). NOT image-checked.
- s25 sweep saved at _s25-work/s25.sweep.txt (sweep-oph-staged.js now loads ep + ep2, 449 live): 47 of 83 score as exact endpoint reprints, 36 do not: PDF 1867 1871 1873 1881 1883 1885 1887 1893 1899 1905 1915 1917 1921 1923 1929 1933 1941 1947 1951 1967 1971 1973 1975 1977 1979 1987 1989 1993 2003 2005 2009 2011 2015 2016 2018 2022. Scorer under-scores exact rows (see above), so image-check all 83 before ruling folds.
- s26 Model Exam 5 (PDF 2023-2177 rendered to cover the flip) staging queued in the same chain into _s26-work. Gate 0 flip still unpinned until that file exists: read printed_page across 2151-2170 and write it into the section map.
- NEXT: count s24/s26 files; build s24 + s25 arrays (copy _s22-work/build.js, pair by page_type not arithmetic); image-check by a non-Codex house; Claude fold rulings into sec-oph.js; draft survivors through a work-text single-shot script first, Opus refuter, splice, boot-check 4049/81. Then s27 (2176-2330), s28 (2331-2442). Owed list in the block above still stands.
- CORRECTION, same night: the detached chain ended early. Codex own login hit its usage limit (message: try again at 11:36 PM, 2026-09-20). s24 staging holds 136 rows, PDF 1701-1836; MISSING 1837-1857 (1837 failed once on the greeting-only reply, 1838 on the limit). s26 has 0 rows (empty file removed). Renders for s24 (r24) and s26 (r26, 2023-2177, 155 PNG) sit in the old session scratchpad 7081120d-...\scratchpad and may be gone; re-render if so. Restart: node tools/bank-harness/stage-codex.mjs 1837 1857 <r24> <s24 staging>, then 2023 2177 <r26> <_s26-work/oph-ep-p2-s26-model-exam-5.staging.json>. A usage-limit stop is a quota stop, not a failed dispatch on the page; Gemini work-vision after its daily reset is the other route. Launch long runs detached (Start-Process bash chain.sh), the Bash tool kills a job at 10 minutes.

## Changed since - 2026-09-21
- s24 Model Exam 3 CLOSED: staging completed to p.1856 (p.1857 = Model Exam 4 divider), 77 rows, 69 folds, 8 survivors (n43,45,58,59,61,64,70,77) spliced, ep2 10 -> 18, commit 2d97e5a. s25 Model Exam 4 CLOSED: 83 rows, 62 folds, 21 survivors spliced, ep2 18 -> 39, commit 79932e7. Both: val-oph-ep clean, boot 4049/81/156, 0 errors. Neither commit is pushed.
- Drafting route measured: work-text single-shot failed twice (dispatch 1: 1 of 21, then 429 groq and 503 all targets skipped; dispatch 2 gemini-3.1-flash-lite: 429 on all 20), so drafts came from Sonnet lean-drafter with ROUTE-OK. Opus refuter found 6 faults in s24 and 14 in s25, mostly wrong slide numbers on header-less decks and FALSE ABSENCE TAGS (fact printed in a different lecture than the one the drafter opened). Brief the next drafter: grep the whole lectures folder for the sign before tagging an absence.
- New tools in tools/bank-harness: build-oph-p2.js <sec> <slug> (array), draft-oph-p2.mjs (gateway drafter; its unboxed marker text is wrong, assemble fixes it), assemble-oph-p2.js <sec> <slug> "<title>" (fragments _sNN-work/draft-[A-Z].txt -> draft.js, normalises markers, rebuilds source, appends missing boxes), fix-draft-oph-p2.js <sec> <pairs.json> (refuter fixes into the fragments; re-assembling regenerates draft.js, so never hand-edit draft.js).
- s26 Model Exam 5 staging running detached through Codex, p.2101 of 2023-2177 at the time of writing; log in session scratchpad 93be7a60-...\scratchpad\s26-codex.log ends with CHAIN DONE. Offset flip 2151-2170 still UNPINNED.
- OWED, added: reprint citations for the s24 (69) and s25 (62) folds, lists in _s24-work/s24.folds.json and sec-oph.js row 25 * part-1 duplicates ophep-retina-12 = ophep-ocular-systemic-diseases-17, and ophep-orbit-10 / ophep-orbit-12 / ophep-optics-refraction-11 * live ophep-neuro-ophthalmology-19 option B prints Anterior, the Exam 3 reprint prints Arteritic * live typos: ophep-vitreous-8 missing 5th option (s25 n13), s25 n36 target "took", n33 target "lnfraorbital" * House alsoIn: s24 n64 = opmcq-c16-21, same key (endpoint prints ranges reversed, 10-8 years) * s25 n81 key counts dendritic ulcer as laser-treatable, noted in the entry, never disputed.
- NEXT: when s26 staging ends, count rows, pin the flip into progress/ophtho-endpoint-section-map-2026-09-07.md, build-oph-p2.js 26 model-exam-5, sweep, image-check by a non-Codex house, folds, draft, refute, splice. Then s27 (2176-2330), s28 (2331-2442), then pagecov-oph.js --part 2.
- OWNER CALLS CLOSED 2026-09-21 (all four): s19 n1 and s19 n11/n19 stay as printed with their notes * ophep-optics-refraction-18 option A corrected to Strabismus, p.194 printing recorded in the explanation (2acb7b2) * ophep-retina-4 figure kept but veiled: new entry flag imgSpoils:true, qFigure blurs the figure until Q.shown (e130cf0); reusable on any figure that answers its own question; print still shows the blur. Question is answerable without the figure.
- app/js/quiz.js, app/js/storage.js and app/css/components.css carry ANOTHER chat's uncommitted "strike" changes. e130cf0 staged only the veil hunks (HEAD-based blobs through git update-index). Do not commit those three files by pathspec.
- s26 STAGING STOPPED EARLY, measured at /prep 2026-09-21: chain ended, staging holds 102 rows, last PDF page 2126. MISSING 2127-2177 (the flip range 2151-2170 is inside it, so the flip is still UNPINNED). Restart: node tools/bank-harness/stage-codex.mjs 2127 2177 <r26 renders> content/ophtho/qb-pages/_s26-work/oph-ep-p2-s26-model-exam-5.staging.json, detached; renders were in old scratchpad 7081120d-...\scratchpad\r26, re-render with pdftoppm if gone. If Codex is still on its usage limit: stage-pages.mjs with STAGE_MODEL=work-vision.
- s26 gaps inside the staged range too: p.2118 and p.2121 FAILED (greeting-only reply, exit 0), so re-stage 2118, 2121 and 2127-2177. Renders still present at /prep time: old scratchpad 7081120d-...\scratchpad\r26 (261 files). Find every gap by listing pdf_page against 2023-2177, never trust the row count.

## Changed since - 2026-09-21 (part 2)
- s26 staging COMPLETE: 152 rows, PDF 2023-2174, 0 gaps. s26 = 2023-2174; PDF 2175 is the "Summer Exam" divider, so s27 STARTS at 2175 (section map TOC rows 26/27 are one page off; sec-oph.js row 26 corrected).
- FLIP PINNED at PDF 2151: offset 0 through 2150, +1 after. Printed p.2151 (marked page of Exam 5 Q65) is ABSENT from the scan, so Q65 (n64) prints no key; build-oph-p2.js gained an unmarked-only branch for it. `source` cites PDF pages (the tools rebuild it from p/mp); printed = PDF+1 past 2150. Stale "unpinned" wording remains in the section map around the pinned note.
- Exam 5 numbering skips Q49: 76 printed, numbered 1-77, printed Q = n+1 from n49 on. Not a scan hole (printed pages continuous).
- s26 folds ruled: 44 folds, 32 survivors, recorded in sec-oph.js row 26 and _s26-work/s26.folds.json. n66: page marks A (esotropia), its box argues exotropia; key stands, discrepancy noted in the entry.
- s26 drafted: gateway failed twice (work-text HTTP 413 on groq, gemini-3.1-flash-lite HTTP 429 every row), so 23 rows went to two Sonnet lean-drafters writing draft-parts/n<N>.json; draft-oph-p2.mjs assembled, body copied to draft-A.txt. Refuter-1 (first 16): 9 pass, 7 fail, 13 citation fixes applied. Validator warning on n34 is FALSE (box byte-identical, only the blockquote prefix on line 2).
- Seats: work-vision DEAD (60 s timeout). Codex hit its usage limit at p.2312 (resets 04:58). Opus hit a session limit once (04:30).
- s27 staging: _s27-work/oph-ep-p2-s27-summer-exam.staging.json, 135 rows, GAPS 2188, 2305, 2312-2332. Renders in scratchpad 1cad8553 r27 (p-<page>.png); re-render if gone. s28 probably starts PDF 2330 (TOC printed 2331): confirm from the staged divider, move rows past it to _s28-work.
- NEW OWED (end of stream): reprint citations for the 44 s26 folds (s26.folds.json) * Exam 5 printing of n65 is fuller than live ophep-eyelids-6 * live ophep-orbit-11 lacks the 5th option "CT axial section" * n60 / ophep-squint-10 prints "Left abducent palsy" twice (book defect) * House ids in s26.imgcheck-*.md for later alsoIn.
- s27 GAPS STAGED by a Claude Sonnet role (Codex usage limit twice): _s27-work/s27.gaps-claude.json, 23 rows (2188, 2305, 2312-2332), NOT yet merged into the main staging JSON. NEXT CHAT, first step: merge rows with pdf_page <= 2329 into the s27 staging, move 2330-2332 to _s28-work, set sec-oph.js row 27 pages [2175, 2329]. These 23 rows are Claude-staged, so their image-check goes to a NON-Claude seat (Codex after its reset).
- s27 = PDF 2175-2329. PDF 2330 = "Exam Night Review" divider (no printed number visible); 2331 and 2332 are THEORY pages, so s28 may be review text with few or no MCQs: render and sample 2333-2442 before planning a pipeline for it.
- DRAFTER LESSON (s26 refuters, 15 of 32 entries failed on it): lectures L11, L12 and L15,16 carry NO "SLIDE N" headers, so every "slide N" cited from them was invented; cite the form-feed page ordinal as "page N" there. Put this sentence, with the three deck names, in every s27 drafter brief, next to: grep the WHOLE lectures folder for the sign before tagging an absence (s26 n67 tagged two facts that L18 p.4 and L35,36 p.5 print).
- s26 drafting route that worked: Sonnet lean-drafters write _sNN-work/draft-parts/n<N>.json (shape of an existing part), draft-oph-p2.mjs then assembles with no gateway call, body of the .draft.js is copied into draft-A.txt, refuter fixes go through fix-draft-oph-p2.js, then assemble-oph-p2.js. Gateway drafting failed twice (work-text HTTP 413, gemini HTTP 429): go straight to this route for s27 unless the probe shows a changed seat.
