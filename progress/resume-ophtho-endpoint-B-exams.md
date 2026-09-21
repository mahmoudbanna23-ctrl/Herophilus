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

## Changed since - 2026-09-21 (part 3) - s27 CLOSED
- s27 Summer Exam CLOSED: 77 live in questions.ophtho.ep2.js (71 -> 148, 0 holes), commit fb297a3, val-oph-ep 0 problems, boot-check 4049/81/156 0 errors (ophtho is a LOCKED module, so the app count does not move; the splice count is the proof). 0 within-bank folds; sec-oph.js row 27 now carries folded: [].
- Staging fixes: n45 Kerotoconus -> Keratoconus, n61 Tension test -> Tensilon test (array + staging). Page 2188 conflict (Codex re-stage said marked/key B) ruled for staging (unmarked, key A). Image check: five Sonnet checkers (non-Codex house for Codex rows) + Codex re-stage diff for the 20 Claude-staged rows.
- ROUTE THAT WORKED FOR s27: Codex gpt-5.6-terra on its own login wrote all 77 expansions via NEW tools/bank-harness/draft-codex-oph-p2.mjs (one exec per row, cwd = lectures folder, two-in-a-row failures stop it, resume-safe; usage: node draft-codex-oph-p2.mjs SEC SLUG FIRSTN LASTN). Gateway work-vision hit 429 twice, work-text 413 on big payloads. The draft.js header written by draft-oph-p2.mjs falsely says work-text; the final header comes from assemble-oph-p2.js. draft-oph-p2.mjs id prefix now comes from sec-oph.js.
- CHECKING: _s27-work/verify-quotes.js (machine layer: every quote + (Lnn, slide|page N) cite must exist in the cited lecture on that slide/page; set PARTS path to the folder of n*.json) found 33 of 77 rows with citation defects in Codex output (wrong slide/page by 1-3, paraphrase in quotation marks, wrong lecture, nonexistent cite). Scripted renumber fixed 26 cites and renamed 32 slide -> page for form-feed lectures. Two independent Opus refuters (n1-38: 13 defective, 15 pairs; n39-77: 10 defective, 14 pairs) then fixed the rest; 30 exact-substring pairs applied by fix-draft-oph-p2.js after _s27-work/fixes2json.js-style conversion (refuters wrote plain-text OLD/NEW blocks, no JSON escaping). Residual verifier flags (17 rows) were judged false positives by the refuters: column-interleave of the two-column slide text, glyph differences, slide-range cites, paired-cite ordering. No key disputed; n6 nuclear-cataract contradiction recorded, n10 and n60 no conflict.
- CODEX DEFECT, NEW: three Codex parts (n15, n66, n77) opened with the literal line "AGENTS.md loaded - Herophilus" in the expansion. Strip a leading agent-banner line from every Codex output before assembling. Grep AGENTS.md across draft-parts as a standing check.
- Refuters cannot re-run verify-quotes on draft-A.txt (it reads parts); a checker over draft-A entries is a 10-line change (build n*.json from the entries) if wanted next time.
- s28 (PDF 2330-2442) = "Exam Night Review" NOTES, no MCQs (26 pages sampled). Only _s28-work/s28.gaps-claude-2330-2332.json exists. OWNER DECISION PENDING: ingest the notes as theory/summary, or close s28 as no-questions. Nothing built.
- OWED at end of stream (in addition to the earlier list above): House alsoIn merges for s27 rows, keyed by row: n1 opmcq-c1-56, n2 opmcq-c16-21, n5 opmcq-c1-55, n7 opmcq-c18-27, n8 opmcq-c17-1 / opqb-t19-790, n9 opmcq-c1-54, n10 opmcq-c4-3, n12 opqb-t4-154, n14 opmcq-c3-27, n17 opmcq-c18-26, n19 opmcq-c5-32, n24 opmcq-c10-26, n25 opmcq-c10-1, n27 opmcq-c1-8, n32 opmcq-c2-32, n34 opmcq-c9-28, n35 opmcq-c1-9, n36 opmcq-c4-18, n38 opmcq-c1-7 / opqb-t14-588, n39 opmcq-c1-6, n40 opmcq-c14-2, n41 opmcq-c14-29, n42 opmcq-c14-28, n44 opmcq-c5-2, n45 opmcq-c8-27, n46 opmcq-c8-26b, n47 opmcq-c19-14, n52 opqb-t11-460, n56 opmcq-c19-35, n58 opmcq-c13-2, n60 opmcq-c19-34, n62 opmcq-c19-1, n65 opmcq-c16-1, n67 opmcq-c13-1. Same-fact but not stem matches, judge each: n15 opmcq-c12-9, n16 opmcq-c19-42, n18 opmcq-c4-29, n22 opmcq-c11-26, n26 opqb-t10-427, n28 opmcq-c4-1. Borderline: n13 opqb-t22-11, n29 n33 n37, weak n49, n51 maybe ophep-retina-37. Full reports: _s27-work/s27.imgcheck-A..E.md. Also n65 (2305) vs 2304 whitespace; s24/s25/s26 fold reprint citations; then pagecov-oph.js --part 2.
- NEXT: 1) owner word on s28. 2) End-of-stream owed list (House alsoIn merges, reprint citations, pagecov-oph.js --part 2). 3) Owner: push of the 11 local commits (2d97e5a..fb297a3) needs a yes; nothing pushed.

## Changed since - 2026-09-21 (part 4) - owner: skip s28, CLOSE OPHTHALMOLOGY FOR GOOD
- OWNER RULING 2026-09-21: s28 (Night Review notes, PDF 2330-2442) is SKIPPED for now. Next session's whole job = finish every other owed item and close ophthalmology. s28 stays a recorded deferral (only _s28-work/s28.gaps-claude-2330-2332.json exists); pagecov-oph.js will show 2330-2442 uncovered - expected, record it, do not chase.
- OWNER RAP 2026-09-21 (twice): labour belongs on Codex / the fleet / omniroute, not the main chat. This session drafting went to Codex but the whole second-layer check went to two Opus refuters; the mechanical half (does each quote exist on the cited slide) is a script or a work-text single-shot per row. Next session: name the rung before each piece, per-item bulk work = a script, Claude keeps judgement only (fold rulings, splice, git, final medical read).
- CLOSE-OUT CHECKLIST, in order. 1) Gather every OWED line into one list: grep -n OWED in this file (lines 138-197 and the s27 block), part 1 = qb-pages/oph-ep-p1-s*.house-collisions.md, s27 = _s27-work/s27.imgcheck-A..E.md, s22-26 owed in the earlier blocks here. 2) House alsoIn merges for the endpoint reprints of House questions (CLAUDE.md section 4: ADD THE BANK, never a second entry, keep the fuller printing, fold the other's citation into source): a script lists candidate pairs per collisions file, CLAUDE decides each, a script applies. 3) Reprint citations for the folds of s24/s25/s26 (s26.folds.json etc.) and ophep-squint-10 (n60 printed Left abducent palsy twice, a book defect). 4) Small carries: s27 n65 (PDF 2305) vs 2304 whitespace; live ophep-orbit-11 lacks the 5th option CT axial section; Exam 5 printing of n65 is fuller than live ophep-eyelids-6. 5) node tools/bank-harness/pagecov-oph.js --part 2 (expect only 2330-2442 uncovered). 6) Final: load every ophtho array and index for holes, boot-check (expect 4049 / 81 / 156, 0 errors, ophtho locked), recount ophtho corpus from disk, then mark OPHTHO endpoint CLOSED in MEMORY.md (non-growing edit) and ledger, commit with explicit paths, ask before any push (12 unpushed local commits, 2d97e5a..4900d16).
- Deferred, NOT part of this close: s28 notes; the two locked-module items (ophtho and neuropsych stay LOCKED_MODULES until the owner unlocks).

## Changed since - 2026-09-21 (part 5, close-out session, ~80 steps used)
- DONE: close-out step 2, reprint citations for the s22-s26 folds, commit c0fa1b4 (276 survivors, only `source` changed, 587 entries, counts 439/148). Plan: `content/ophtho/qb-pages/_close-work/reprint-cites.plan.md`. Script `tools/bank-harness/oph-reprint-cites.js` is idempotent. ophep-squint-10 is in that plan (Exam 5 p.2142-2143).
- IN PROGRESS, step 1 (House alsoIn merges). Pair finder `tools/bank-harness/oph-house-pairs.js` wrote `_close-work/pairs.json` (477 pairs, 339 endpoint ids; seeds from the collision and imgcheck files). It found no s27 pair except 1, so `tools/bank-harness/oph-pairs-extra.js` wrote `_close-work/pairs-extra.json` (42 s27 pairs from the journal row list, endpoint id `ophep2-summer-exam-N`).
- Verdict pass (rung 2, single-shot gateway calls): `work-text` returned HTTP 502 twice (its first seat `opencode-zen/big-pickle` answers 403), so the run names the measured seat instead: `VERDICT_MODEL=groq/openai/gpt-oss-120b`. Gateway throughput is about 7 pairs/min however many shards. Resume-safe; re-run the same commands, they skip finished pairs: `SHARD=i/8 node tools/bank-harness/oph-pairs-verdict.mjs` for i in 0..7 (writes `_close-work/pairs-verdict.shard<i>.json`), and `PAIRS=pairs-extra.json node tools/bank-harness/oph-pairs-verdict.mjs` (writes `pairs-verdict.extra.json`). First 4 results sit in `pairs-verdict.json`.
- Codex job (one 900 s attempt) was building `tools/bank-harness/oph-house-merge.js` from `_close-work/merge-script-brief.md`; check the file exists, `node --check`, run its dry run before anything else. If Codex failed, dispatch once more, then a Claude role with ROUTE-OK.
- MERGE CONVENTION (decided, ENT precedent `entep-ear-3`): the endpoint entry survives with `alsoIn:['house']` and/or `['gradegain']` (from the twin's own `bank` field); the House or Grade Gain twin is DELETED; twin's citation folded into the survivor's `source` as `; also printed in House bank, <twin.source>`; other entries and theory `qs` lists that name the twin are repointed to the survivor. Decisions live in `_close-work/merge-decisions.json`: `{merges:[{survivor,twins,note}]}`. Claude writes it. Ruling policy: metric keyEq and stemJ>=0.8 and verdict same_question and same_key = twin, auto; verdict same_question false = skip; same question but different key = merge, survivor keeps its printed key, note the twin's key in `note`; anything else Claude reads pair by pair. Borderline per the s27 journal: n13 opqb-t22-11, n29 n33 n37, weak n49, n51. Same-fact-not-stem: n15, n16, n18, n22, n26, n28. Known key conflict: n6/ophep-lens-14/opqb-t1-70. Deleted twin ids orphan any local progress keyed to them (ENT already did the same).
- CARRIES: (a) s27 n65 2305 vs 2304 is whitespace only, no edit. (b) ophep-orbit-11: live entry matches its own p.251 (4 options, checked by work-vision); add an explanation note that Exam 5 p.2157-2158 prints a fifth option "CT axial section", key unchanged. (c) ophep-eyelids-6: p.369 NOT re-read (Gemini vision 429); add a note that Exam 5 p.2151-2152 prints the fuller vignette and a fourth option "Dry eye disease", key Acute dacryoadenitis. Both notes go in via the same `note` field or a direct edit.
- OTHER OWED, not yet handled: s22 n8 matches two identical live entries `ophep-optics-refraction-3` and `ophep-orbit-1` (within-bank fold); part-1 duplicates `ophep-retina-12` = `ophep-ocular-systemic-diseases-17`, and `ophep-orbit-10` / `-12` / `ophep-optics-refraction-11`; live `ophep-conjunctiva-3` option d "Adenovirus 44 g" vs plain "Adenovirus" on p.1475 (check its own source page); s22 pages 1443 (n26), 1497 (n53), 1505 (n57), 1517 (n63) print figures the live entries carry no image for; live `ophep-neuro-ophthalmology-19` option B prints Anterior, Exam 3 reprint prints Arteritic (note only); `ophep-vitreous-8` lacks a fifth option printed in s25 n13 (note only). Typos in the source are transcribed silently (standing rule).
- STEP 4 untouched: pagecov (`--part 2`), hole load of all ophtho arrays, `val-oph-ep.js`, boot-check (expect 4049 / 81 / 156, 0 errors), recount from disk, MEMORY.md closure (non-growing, file at 21,942 of 22,528 B), ledger. 13 local commits unpushed plus c0fa1b4; ask before any push.
- Live at handoff (2026-09-21 09:05): 8 shard processes plus the extras process (started about 09:00, roughly 60 min to finish, 106 of 519 verdicts done) and the Codex merge-script job (started 09:01, 900 s cap) were still running detached. Before re-launching any shard, check `Get-CimInstance Win32_Process | ? CommandLine -match 'oph-pairs-verdict'` and count the rows in each `pairs-verdict.shard<i>.json`; two writers on one shard file would corrupt it. A shard is finished when its row count equals its slice of `pairs.json` (pair index mod 8 equals i).


---

## part 5 - CLOSE-OUT DONE 2026-09-21 (ophthalmology endpoint CLOSED)

Checklist part 4 is finished. Ledger entry: `progress\ledger.md` §22. State: `questions.ophtho.js` 1,273 + `questions.ophtho.ep.js` 439 + `questions.ophtho.ep2.js` 148 = 1,860 ophtho entries, 0 holes, 0 duplicate ids, boot 4049 / 81 / 156 with 0 console errors.

**What ran, in order.**
1. House / Grade Gain `alsoIn` merges. Candidates listed by script, rulings written to `content\ophtho\qb-pages\_close-work\merge-decisions.json` (320 survivors, 325 twins), applied by `tools\bank-harness\oph-house-merge.js`. Convention: the endpoint entry survives with `alsoIn`; the twin is deleted; its citation is appended to the survivor's `source` as "; also printed in <House|Grade Gain> bank, <citation>"; references to the twin id are repointed. Independent verifier against `HEAD`: 320 of 320 pass. The first `--write` had an unbounded id-prefix replacement (122 ids corrupted, 8 sparse holes); fixed in the script and re-run on clean copies before touching `app\data`.
2. Reprint citations for the s24/s25/s26 folds and `ophep-squint-10`: commit `c0fa1b4`.
3. Carries: n65 2305 vs 2304 was whitespace only (no edit); `ophep-orbit-11` explanation notes Exam 5's fifth option "CT axial section"; `ophep-eyelids-6` explanation notes Exam 5's fuller vignette and its "Dry eye disease" fourth option (p.369 not re-read). No key moved.
4. Coverage: `node tools\bank-harness\pagecov-oph.js --part 2 --cites-pdf`. **Two findings.** (a) Part 2 has no OCR index; `tools\bank-harness\oph-p2-index.js` derives `content\ophtho\qb-pages\ocr\ep\index.part2.json` from the six s22-27 staging files, with PDF 2330-2442 written `answered:true, kind:'unstaged'` so the skipped s28 shows up as an explicit deferral. (b) Endpoint part-2 `source` strings cite PDF pages, not printed pages, so the run needs `--cites-pdf` (flip = Infinity); a plain `--flip 2151` throws "printed p.2151 does not exist". Result: no answered page in 1391-2329 is uncited; only 2330-2442 (s28) is. The 461 cited-but-unanswered pages are each question's unmarked companion page, an artefact, not a defect. Three pages (1451, 1475, 1487) initially had no citation: s22 q30, q42 and q48 were exact duplicates of live survivors that `s22.folds.json` had missed; Model Exam 1 reprint cites were added by hand to `ophep-optics-refraction-1`, `ophep-conjunctiva-3` and `ophep-uveal-tract-3`.

**Not checked.** `val-oph-ep.js` validates drafts, not the live arrays, so it was not applicable here. `pagecov --part 1` was not re-scored after the merge. The part-2 index is derived from staging, not OCR, so its "answered" flag is only as good as the staged page types.

**Still owed, none blocking** (each is a separate live entry; nothing was merged on a guess):
- A. s22 n8 duplicate `ophep-optics-refraction-3` / `ophep-orbit-1`.
- B. `ophep-conjunctiva-3` option d reads "Adenovirus 44 g" (an OCR-era artefact).
- C. Figures for s22 pages 1443, 1497, 1505, 1517.
- D. `ophep-retina-12` = `ophep-ocular-systemic-diseases-17`; `ophep-orbit-10` / `-12` / `ophep-optics-refraction-11`.
- E. `ophep-neuro-ophthalmology-19` option B, Anterior vs Arteritic.
- F. `ophep-vitreous-8` lacks a fifth option.
- Other within-endpoint duplicates: `ophep-conjunctiva-17`/`-26`, `ophep-glaucoma-13`/`-20`, `ophep-malignancies-eye-adnexa-2`/`-10` and `-3`/`-7`, `ophep-lacrimal-system-7`/`ophep-orbit-8`, `ophep2-model-exam-4-49`/`ophep-ocular-trauma-16`. Summer rows 10, 36 and 47 were deliberately left unmerged.

**Consequence to know.** The 325 deleted House/Grade Gain ids orphan any local progress stored against them, as in ENT. **Push:** the local commits are unpushed; owner decides.

## part 6 - OWED ITEMS A-F CLOSED 2026-09-21 (ophthalmology endpoint stays CLOSED)

State: ophtho arrays 1,273 + 433 + 147 = **1,853** (was 1,860), 0 holes, boot 4049 / 81 / 4 / 156, 0 console errors. Item B, E, F and the survivor fixes are ordinary edits in `app/data/questions.ophtho.ep.js`; the six folds ran through `tools/bank-harness/oph-endpoint-fold.js` (built by Codex terra from `content/ophtho/qb-pages/_close-work/endpoint-fold-brief.md`; fixture proof, dry run and live post-write proof all passed; decisions in `endpoint-fold-decisions.json`, plan in `merge-endpoint.plan.md`).

**Folds (7 twins removed, survivor keeps the id and gains the cite in `source`; `alsoIn` = union; twin explanation dropped):**
- A. `ophep-optics-refraction-3` into `ophep-orbit-1` (Proptosis is not present in; identical printed box).
- D. `ophep-retina-12` into `ophep-ocular-systemic-diseases-17`; `ophep-orbit-12` and `ophep-optics-refraction-11` into `ophep-orbit-10`.
- Others. `ophep-conjunctiva-26` into `-17` (the twin printings read "medication", the survivor "drug"); `ophep-lacrimal-system-7` into `ophep-orbit-8` (twin stem was "A -33year-old ... outer third", survivor is the clean transcription); `ophep2-model-exam-4-49` into `ophep-ocular-trauma-16`.
- **The refuter found two survivors that lacked the printed box their twin carried** (`ophep-ocular-systemic-diseases-17`, `ophep-ocular-trauma-16`; both still ended "prints no explanation here" although p.922 and Model Exam 4 p.1954-1955 print one). Both now carry the box in the "The endpoint file prints this explanation" form. Orbit-1 and orbit-10 already carried identical boxes.
- Kept as pairs (not folds): `ophep-glaucoma-13`/`-20` (-13 adds "lower limb edema and dyspnea" to the stem); `ophep-malignancies-eye-adnexa-2`/`-10` (different option sets, and -10 has a fifth option); `-3`/`-7` (-7 adds the substantive option "Secondaries from other sites"). Summer rows 10, 36 and 47 stay unmerged, as before.

**Page reads (Codex vision, then a Sonnet reader of a different house confirmed):**
- B. `ophep-conjunctiva-3`: endpoint p.448 and Model Exam 1 pp.1474-1475 print plain "Adenovirus"; "Adenovirus 44 g" removed, stem "ofthe" repaired to "of the".
- E. `ophep-neuro-ophthalmology-19`: p.1050 prints option B "Anterior ischemic optic neuropathy" and marks no answer; Model Exam 3 p.1853-1854 prints "Arteritic ischemic optic neuropathy" and highlights B. Printing note added to the explanation; `answer` unmoved.
- F. `ophep-vitreous-8`: p.872 prints four options; Model Exam 4 pp.1882-1883 print "E. None of the above" and the House bank transcription (`house-c12.array.js` n17) also has five. Fifth option added, `answer` still 1 (B); the Model Exam 4 printed box ("Endophthalmitis is usually exogenous, most commonly postoperative or post-traumatic. It's an ophthalmic emergency requiring intravitreal antibiotics.") replaces the false "prints no explanation here" marker; `source` notes the four-versus-five difference. The House pages were NOT re-read as images (the two PNGs rendered for that check were the wrong spread of `ophthalmology MCQ.pdf`, the OSCE section); the House five options rest on the cached transcription.
- C. No figure added. Endpoint p.581 (`ophep-cornea-1`) prints no figure; the diagram on Model Exam 1 p.1443 ("Structure of the Cornea", five labelled layers) sits beside the question and its labels give away the answer, so it is not attached. The other three pages (1497, 1505, 1517) already have images.

**Still open, none blocking.**
- **New finding, not fixed:** 191 entries in `questions.ophtho.ep.js` and 80 in `ep2.js` still end with the marker "prints no explanation here". Some of them may have a Model Exam reprint that prints an explanation box (this session found it on `ophep-vitreous-8`, `-ocular-systemic-diseases-17`, `-ocular-trauma-16`). Needs a scripted sweep over the Model Exam pages, not a hand read.
- `ophep-neuro-ophthalmology-19`: the Model Exam 3 p.1854 box (a giant cell arteritis symptom list) was read once and not captured.
- `ophep-cornea-1` and the s28 pages (PDF 2330-2442, skipped by owner) unchanged.
- Twin ids removed now (7 more) orphan local progress, as before. Push: still owner's decision; the tree is unpushed.

## Part 7 - marker sweep, GCA box, ophtho unlock (2026-09-21)

**Marker sweep CLOSED.** `tools/bank-harness/oph-marker-sweep.js` (built by Codex terra, read-only) compares every marker entry with the boxed rows of the six Model Exam staging files. Counts: marker anywhere ep 217, ep2 80; marker in the last 200 characters ep 216, ep2 80 (the journal's 191 was a hand count and undercounted). It reported 75 candidates over 62 entries (tier 1: 66, tier 2: 7, tier 3 OCR-only: 2); output in `content/ophtho/qb-pages/_close-work/marker-sweep/` (`candidates.json`, `summary.md`). Its fixture, the pre-7d48331 data, returned the three known entries.

**Different-house check.** Staging was Codex, so Gemini (`work-vision`, `gemini-3.1-flash-lite`) re-read all 68 candidate pages through `stage-pages.mjs`. One page (1848) never rendered for Gemini, and its entry (`ophep-conjunctiva-24`) has the same box on p.1832, which Gemini did read. Rules for acceptance: stem matches the entry, the box text agrees at >=0.95 token overlap, every digit token is identical across both reads, and the printed key text matches the entry's `answer` option.
- **Kept out, on purpose:** 7 candidate rows where the exam printing is a sibling with a different key (pulsating vs expanding exophthalmos in `ophep-orbit-15`; middle watery vs inner mucus layer in `ophep-lacrimal-system-16` p.1707; outermost vs innermost choroid layer, `ophep-uveal-tract-16`/`-18` crossed; pediatric vs adult malignancy in `ophep-malignancies-eye-adnexa-9`; `ophep-lacrimal-system-12` p.1826, which is the mucocele sibling, while p.2145 is its real twin). `ophep-glaucoma-20` (the exam stem adds "lower limb edema and dyspnea", i.e. `-13`'s twin) and `ophep2-model-exam-5-6` (OCR only, empty box) stay as they were. `ophep-orbit-15` and `-malignancies-eye-adnexa-9` have no other printing, so they keep the marker.
- **Applied:** 58 entries in `questions.ophtho.ep.js`, all through `tools/bank-harness/oph-marker-apply.js` (built by Codex terra, fixture-proven, dry run then `--write`, second `--write` skips all 58; decisions file `marker-sweep/apply-decisions.json`). ep markers 217 -> 159, ep2 80 -> 80 (no ep2 hit). Six entries with two different printed boxes carry both, each prefixed inside the quote block with its own label ("Model Exam 3, p.1838:"); ROP entry `ophep-pediatric-ophthalmology-14` keeps two boxes that disagree with each other (p.1806 "GA 28 weeks or more", p.1913 "<28 weeks: screen at 31 weeks GA"), recorded as printed, `answer` unmoved. `ophep-malignancies-eye-adnexa-10` gained a source cite for p.1666 (reworded, four options).
- **Refuter (Claude Opus, independent, re-ran the checks):** PASS. Exactly 58 entries differ, only `explanation` changed (plus `source` on `-adnexa-10`), everything else byte-identical, both files `node --check`, 0 holes, 14 of 14 pages read from the image match on question, key and box. It caught one silent typo correction ("commitance" is what p.1838 prints); restored. 44 of the 58 boxes were not looked at on the page; they rest on the two-house text agreement.

**GCA box captured** (`ophep-neuro-ophthalmology-19`, Model Exam 3 p.1853-1854): the five-line symptom list is now in the entry as a box, `source` names p.1853-1854, `answer` unmoved.

**Ophtho module UNLOCKED:** `LOCKED_MODULES` in `app/data/modules.js` is now `['neuropsych']`. `THEORY_LOCKED` stays true. Boot check after: QUESTIONS 5902 (4049 + 1853), THEORY 117, MODULES 4, chapters 156, 120 rendered (117 with questions), ophtho 39 chapters with questions, 0 console errors. The old 4049/81 expectation is stale now.

**Still open, none blocking:** push (owner's yes needed, tree unpushed, recount after `git fetch`). The 159 ep and 80 ep2 markers that remain matched no staged exam box at the sweep thresholds; the sweep reads only the staging rows (not the chapter-half scans), so it is evidence, not proof. Four ids were kept out by hand and still carry the marker: `ophep-orbit-15`, `ophep-malignancies-eye-adnexa-9`, `ophep-glaucoma-20`, `ophep2-model-exam-5-6`. Coverage limit: 44 of the 58 new boxes were never looked at on the page.
