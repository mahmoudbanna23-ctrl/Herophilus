# Herophilus — Memory

**⚠️ 2026-08-30: OCR pipeline debate verdict = ADOPT-WITH-CHANGES — READ `progress\ocr-pipeline.md`
(verdict section) BEFORE the next bank batch.** Six required changes (keys visual-always · no
text-only success path, OCR + tight crop with copy-or-escalate · digits/units/Greek never cheap ·
re-calibrate vs PRINT end-to-end · dangerous-token weighting not mean≥88 · 300 DPI colour
fallback). **Until built + re-calibrated, ALL batches run the classic visual flow.** Full verdict:
`progress\briefs\ocr-gate-debate-verdict.md`. Content rules unchanged.

Running record, organised around *resuming*. ISO dates; unverified marked as such. Method in
`CLAUDE.md`, per-topic history in `progress\ledger.md`, **full pre-2026-08-17 memory (every war
story, count and verbatim ruling) in `progress\memory-archive.md`** — read the relevant block
there before resuming a paused stream. Where this file and the archive disagree, this file wins.

## Resume here — ⏳ **OPHTHALMOLOGY IS THE LIVE MODULE, ~889 BANK QUESTIONS LEFT AGAINST 27 SEP** (GG **257**, all exam sections, itemised exactly · House **~632**, estimated as ~1,025 printed − 413 written · endpoint scope still the user's open call). ✅ **ENT IS CLOSED** (three banks, 30 chapters, both theory debts — `ledger.md` §15–§16, war stories in the archive). Ophtho stands at **1,237 questions** (GG **824** = topics 1–20 ✅ ALL TOPICS, only exam sections left · House **413** = ch.1–14), corpus **3,798**, **105 images** — **measured 2026-08-30 by id prefix, never carried forward**; `validate.js` post-§17r: 0 BAD, 0 dead refs, 0 holes, 3,046 markers. Last boot 2026-08-30 post-§17r: **0 console errors, 876 rules, 3 `5/4` blocks, 4 modules, 153 chapters, 1,604 sections, 89 cases.** ✅ **OCR gate calibrated (§17q) AND the debate verdict is IN (2026-08-30, run headless via the grok CLI — the free-lane CLIs run from Bash, no user hand-off): ADOPT-WITH-CHANGES**, six changes in `ocr-pipeline.md`'s verdict section; **the confidence half of the gate never fired in calibration and the calibration was an agreement study against our own transcript, not print** — gate stays frozen until the changes are built and re-calibrated; OpenCode tooling build launched against the pre-verdict brief, its output needs the verdict applied on top before landing. **House ch.14 merged §17r on the classic visual flow** — 28 shipped + 1 FOLDED into `opmcq-c1-4` (fifth fold variant: **cross-CHAPTER within-bank reprint**, E 1.00/F 1.00). ⚠️ **FUTURE FOLD FLAGGED: ch.15 Q2 = ch.14 Q5 and ch.15 Q3 = ch.14 Q7, verbatim, same keys.** Next: GG End Exam 1 (UNBLOCKED — runs classic VISUAL flow per the verdict, renders ready in scratchpad `ee1\`; ids likely `opqb-t21-` but READ the number under the banner, never compute it; past-paper section, expect real folds) or House ch.15 "Squint" (book pp.98–101, visual flow). ⚠️ **THE 2026-08-29 SESSION DIED AFTER MERGING §17o (House ch.13, 27q) AND §17p (GG t20, 40q) BUT BEFORE COMMITTING THEM** — recovered and committed 2026-08-30; the interruption cost bookkeeping only, zero content. ⚠️ **`content\ophtho\book\ch20-drugs.txt` IS AN OPEN CACHING DEBT** (§17p — ch.20 read in full, the verbatim text died with the agent; a cache from memory is worse than none). ⚠️⚠️ **A DISEASE CAN BE TAUGHT IN FULL AND NEVER NAMED — GREP THE SIGN, NOT JUST THE NAME** (§17p: retinitis pigmentosa taught as "bone spicules" in `L21`, as complicated-cataract cause in `L35,36`:167, and in two book chapters, while a name-grep over the decks returned a confident absence; seventeenth absence claim overturned by opening the hit). **35 of 36 ophtho chapters seeded** (`op-appear` is the last empty one). ⚠️⚠️ **A REPAIRED BACK-REFERENCE IS A RECONSTRUCTED STEM AND MUST NOT ANSWER ITS OWN QUESTION** — seven stems and one `imgAlt` in two banks on one day named the *diagnosis* where the source printed only *findings*, two of them handing over their own key (`opmcq-c12-9`, `opqb-t16-699`). **No instrument in the chain can see it**: `stagecheck.js` compares options and keys, `sweep.js` compares stems to *other* stems, nothing compares a stem to its own key. **Read every repaired back-reference against its antecedent by hand.** ⚠️ **AN OFFSETTING ERROR IS INVISIBLE TO A SUM** — the per-bank split in `resume-ophtho.md` was wrong by exactly 37 in both directions while the total stayed right, so every sum check ever run passed. **Count the parts.** ⚠️ **`bounds.js` CANNOT MEASURE A FIGURE THAT SITS IN A COLUMN OF TEXT** (the stem above and options below are ink too, so it returns its own window's edges — which reads exactly like the clipping signature): **use a column/row density profile.** ⚠️ **FIVE FOLD SHAPES SO FAR, all within-bank, none taking an `alsoIn`** (fifth: cross-CHAPTER reprint, House Ch.1 Q4 = Ch.14 Q1, §17r)**:** exact reprint · **respelled** (mucoid/mucous — not a replaced distractor) · **REORDERED, which MOVES THE PRINTED KEY LETTER** (t9 Q392 keys B where Q355 keys C — *a key letter is never the thing to memorise*) · and one where **the second printing was BOXED and the held entry's authored marker had to come OFF**. **Check which printing is boxed before assuming a fold has no marker consequence.** ⚠️⚠️ **AND A SHARED OPTION MENU IS HOW THESE BANKS PAIR QUESTIONS, NOT EVIDENCE THEY ARE ONE:** `opmcq-c6-8` (WHO grade **TT**) and `opmcq-c6-23` (**TS**) print the same five options in the same order with **different keys**, and `sweep.js` scored the stems **1.00** because it filtered tokens on `w.length > 3` and dropped the only discriminating word in either stem. **Folding on it would have deleted the trichiasis question and left the survivor keyed for the wrong grade.** Third appearance of the short-token blindness and the worst — the earlier two made a tool skip work, this one made it return a confident wrong verdict. **Patched (capitalised short tokens survive); verified both ways — false 1.00 → 0.71, all 28 real identity matches held.** **When flagging a duplicate, NAME THE DISCRIMINATING TOKEN; if you cannot, you matched a template.** ✅✅ **THE §14.5 REGISTER IS AT ZERO OPEN ROWS, ALL FOUR MODULES** — ophtho went 39 → 0 today, and like ENT most of it was **bookkeeping, not content**. ✅✅ **ALL ELEVEN BLIND DECKS ARE CACHED — the module has no unread deck left.** **Everything is in `ledger.md` §17 — READ IT FIRST**, with `progress\resume-ophtho.md` and `content\ophtho\theory-plan.md`.
- Deck-coverage war story (eleven near-empty extractions; five on no owed list) moved verbatim
  to `progress\memory-archive.md` (2026-08-24, "Deck-coverage war story"). Standing rules: **the
  blind-deck instrument is chars-per-slide RATIO, never file size** · ✅ all eleven cached
  2026-08-24, no unread deck left · PowerPoint COM: `SaveCopyAs($dest,32)` never `SaveAs`, and
  **check the artifact on disk, not the COM return value.**
- **⚠️⚠️ TWO STALE-VERDICT SHAPES, TWINS. (1) AN "UNDELIVERABLE" IS A STATEMENT ABOUT THE SOURCES READABLE
  WHEN IT WAS WRITTEN, NEVER ABOUT THE MATERIAL** — `onc-10` called four rows undeliverable, every verdict
  reached against the BOOK while `L24` was 78 pages of `CamScanner`; the deck now pays the orbital-tumour
  row in full (`onc-11`). **(2) A DECLARED LOSS IS A CLAIM WITH A DATE ON IT** — `L37`’s Table 4-3 was
  recorded lost and **the render had already been done. Re-test both kinds after any read or render.**
- **⚠️⚠️ FOUR WAYS THIS MODULE MANUFACTURED AN ABSENCE, ALL IN ONE DAY. (1) A DECK'S `NOT COVERED` LIST IS
  SCOPED TO THAT DECK** — I quoted `L9`'s as module-wide and claimed the Schirmer test *"appears nowhere"*;
  `L15,16) Cornea` names it, and the book names the inferior meatus three times. **(2) SPELLING** — `T-sign`
  returns zero because `scl-4` prints **"T SIGN"** with a space, `PHPV` because `wht-8` writes **PFV**; I
  nearly wrote duplicates off both. **(3) A SECTION-ID PREFIX DOES NOT IDENTIFY A CHAPTER** — `cor-` is BOTH
  `op-cornea` and `op-cornea-surg`, **`cts-` is `op-cat-surg`**; `probe.js` now prints chapter/section.
  **(4) A GREP OVER A FILE THAT RECORDS THE FAULT MATCHES ITS OWN RECORD** — a negatives list and a
  damaged-path audit both flagged themselves. **Grep every deck AND book chapter case-insensitively, grep
  the variant spelling, exclude the record, and OPEN THE HIT before writing the absence.**
- **⚠️⚠️ WRITE-INCREMENTALLY IS WHAT SURVIVES A USAGE LIMIT** (two hit today). The agents writing as they went
  left **resumable partials totalling 160 finished slides**; those holding work in memory left nothing. Resume
  by `Edit`-appending from slide *N*+1 — **never `Write`.** ⚠️ **A DEAD AGENT WHOSE LAST WORDS NAME A FAULT IT
  WAS FIXING LEAVES A KNOWN-BAD FILE** — the inverse of the usual rule; check that spot first. ⚠️ **A contact
  sheet is an INDEX, not always the reading surface** — crop the single-slide `raw/` renders; *"ignore `raw/`"
  was wrong advice in every brief.* ⚠️ **A slide can be an exact repeat** · **a 3rd gap type is IMAGE overflow.**
- **⚠️ FIFTH DIVERGENCE SHAPE: DECK-vs-DECK, ON A NUMBER.** Tear-film mucin is **0.2 µm** on `L9` sl.3 and
  **0.02–0.05 µm** on `L1,2` sl.56 while lipid and aqueous agree exactly; the book prints none. Recorded in
  `lac-1`, not resolved. ⚠️ **Two invisible sources cannot contradict each other — every deck-vs-deck check
  in this module was worthless before today.**
- **⚠️ OPHTHO BANK ARITHMETIC — full version in `progress\briefs\ophtho-bank-brief.md`, the reusable
  subagent brief.** GG: **PDF = book + 7**, continuous numbering. House: **A4 LANDSCAPE, TWO book pages
  per PDF page**, `PDF = floor(book/2)+2`, answers **inline**, numbering **restarts each chapter** so ids need
  a `-c<n>-` token. ⚠️ **The "Page As" figure has failed THREE ways** — starting later than stated (t2, t3),
  starting where stated then **spanning three pages** (t6), and being correct (t4, t7, t8): **render past the
  LAST answer page.** Counts exact **eight** times (71,41,26,26,65,52,8,61). ⚠️ **41 t9 entries shipped with
  NO marker and a second agent caught it, not the audit — confirm the box list two ways, then check
  markers = entries − boxes BEFORE splicing.** **Tools `<scratch>\oph\`.**
- **⚠️⚠️ THE ENT BANK WAR STORIES MOVED TO `progress\memory-archive.md` ON 2026-08-24** — 43 lines,
  verbatim, under *"The ENT bank war stories"*. **ENT is closed, so they are reference, not resume state.**
  ⚠️ **But four are GENERAL and apply to the ophthalmology stream now running:** the **British-vs-American
  spelling** trap that shipped a duplicate twice · the **comparator rule** (a typo lives in one word, so the
  tolerance belongs on the word — `norm.js` passes its 39-case self-test unchanged here) · **a stem match is
  not a question match, the options are half the question** · and **a reconstructed stem can leak the next
  question's answer**. **Read them there before sweeping or reconstructing anything.**
- **Neuro theory: 36/36 chapters COMPLETE.** The working-file map, split arithmetic and roster
  moved verbatim to `progress\memory-archive.md` (2026-08-24, "Neuro theory reference") — for
  any neuro work read `content\neuro\theory-plan.md` + `book-map.md` first; **nothing is
  reordered within a chapter; do not re-derive splits here.**
- **⚠️⚠️ THEORY IS DONE (153/153), SO ITS CRAFT RULES, REGISTERS AND BOOK CACHES ARE REFERENCE, NOT
  RESUME STATE — THREE BLOCKS MOVED VERBATIM to `progress\memory-archive.md` (2026-08-23 “Theory craft
  rules and source registers”; 2026-08-24 “Theory war stories” and “Ophthalmology theory craft”).
  READ THEM THERE BEFORE ANY THEORY EDIT.** Worth keeping in front: **A TOOL THAT EDITS SILENTLY WILL
  EVENTUALLY EDIT WRONGLY AND NOBODY WILL SEE IT** (`anchorauto.js` damaged 23 bold leads in seven
  SHIPPED chapters, all 23 passing `vdraft.js` — **read its printed edits**) · **NO PAGE ESTIMATOR IS
  TRUSTWORTHY, only printing settles a split** · **TRIM FIRST BUT A TRIM IS NEVER A FACT** · **A SOURCE
  WORD COUNT UNDER-PREDICTS THIS STYLE BADLY** (`ps-geri` 380 %) · **A DECK'S WORD COUNT IS NOT ITS
  TEACHING COUNT** (measure PICTURE slides) · **A GREP HIT THAT GETS EXPLAINED AWAY IS WORSE THAN A
  MISS** · **A SPLIT MOVES QUESTIONS by the theory `qs` links** · **a Decks column is an ASSIGNMENT,
  NOT COVERAGE** · **VERIFY EVERY REGISTER ROW'S SECOND CLAUSE** · **Scope comes from the LECTURE
  SERIES.** ⚠️ **PSYCHOSURGERY is taught NOWHERE in all 25 psych decks.** ⚠️ **Still OPEN: TWELVE
  `nr-intro`/`nr-exam` questions carry an outside-knowledge tag the book can now replace, `npqb-nr-14`
  first** (book p.12 names the WRONG HALF of the optic radiation; the `answer` does not move) — **banks
  are PAUSED, do NOT sweep this in.** ⚠️ **Ophtho reconciliation is still NOT done** (~63 register rows,
  `va-6`/`pup-10`, five held divergences, `wht-8` — in its `theory-plan.md`); **its book caches exist
  (`content\ophtho\book\`) — do NOT re-read them.**
- ✅✅✅ **ENT IS CLOSED AND ITS COMPLETION DETAIL MOVED TO `progress\memory-archive.md` ON 2026-08-24** —
  three banks (endpoint 3,074 pp · Grade Gain 1,113 printed · House), 30 theory chapters at **261 pp**, the
  26 §14.5 rows, and the House **marker-debt measurement whose first check silently skipped all eleven
  entries by keying on the wrong field**. Write-ups: `ledger.md` §16, §14dd, §15–§15mm, §15o.
- **⚠️⚠️ Contradictions are RECORDED, never corrected — the `answer` NEVER moves; it goes in
  `explanation`, quoting the slide.** The four shapes (deck-vs-book · deck-vs-bank key ·
  bank-vs-bank key · deck-vs-bank rationale) with their ENT examples moved verbatim to
  `progress\memory-archive.md` (2026-08-24, "ENT contradiction shapes"); §15u.
- **⚠️⚠️ MY BRIEFS HAVE BEEN CORRECTED BY THE AGENT THAT READ THE SOURCE SIXTEEN TIMES**, plus five by
  machine checks of my own. **“TRUST THE STAGING AND THE TRANSCRIPT OVER THIS PROMPT, AND TELL ME WHERE
  I WAS WRONG” GOES IN EVERY BRIEF** — it caught a crop brief calling a CT/MRI composite a barium
  swallow, and a back-reference aimed at the wrong question. ⚠️ The reverse fired once — *the agent that
  read the source is usually right* is a **prior, not a verdict.**
- **⚠⚠ SIX INSTRUMENTS HAVE BEEN BLIND TO, OR WRONG ABOUT, THE EXACT FAULT THEY WERE BUILT TO
  CATCH** (roster verbatim in `progress\memory-archive.md`, 2026-08-24, "Six blind instruments").
  **A guard that silently disables a stage, or hides a difference, is worse than a missing one —
  the report still looks complete; read the function before writing the check on it.** §15,
  §15dd, §15ll.
- **⚠️ A BOOK'S OWN CHAPTER NUMBERS CAN BE DEFECTIVE** (House printed 9 twice) — **chapter by content.**
  ⚠️ One eponym printed **four ways in two pages**; one organism **three ways in three sources**.
- **⚠️⚠️ CROPS — THE INK TEST IS `max(r,g,b) < 225 OR (max−min) > 30`, AND THE FIRST HALF IS THE ONE THAT MATTERS.** A **saturation-only** scan is **blind to dark desaturated content, which is what a clinical photograph's edge is made of** — it put one left edge 86 px inside the true one (the strip samples `(93,94,88)`, max−min of 6) and would have discarded **67 %** of `q-op-gg-288`, lesion included. ⚠️ **Reading a page at 4× reduction has the SAME blindness** (right edge read as x 2992, truly 3104) — **bound at full resolution.** ⚠️ **A symmetric clip preserves the aspect ratio**, so ratio alone never suffices; back it with a pixel diff (clean 5.7–8.2 mean abs, a 60 px clip 15.49). **Noise floor ~1 %, MEASURED** from the same photo scanned twice (`254`/`257` differ 1.07 %). ⚠️ **Strict-fill row/column runs generate FALSE failures** — tight ink bounds is the contract (`<scratch>\oph\bounds.js`). ✅ All 8 shipped crops audited clean. ⚠️ **Four of nine cut so far carried printed OPTION TEXT** where the app renders a caption. **LOOK at every crop.** ⚠️⚠️ **THE 3 px PAD IS A MAXIMUM, NOT A REQUIREMENT — TWO FIGURES PRINT A BLACK RULE 1–2 px UNDER THE PHOTOGRAPH** (`opqb-t10-425`, `opqb-t11-479`) and a rule is ink, so the padded bound lays a black bar across the frame; **cut at the picture’s own edge.** ⚠️ **A 2-pixel speck of scanner noise dragged one left bound 119 px out — `bounds.js` alone is not safe on a window, use a column-run profile.** ⚠️⚠️ **AND A STEM WRITTEN TO STAND IN FOR A MISSING FIGURE CANNOT SURVIVE THE FIGURE ARRIVING** — all three topic-10 photo stems stated their own answer and had to be cut back to the bank’s printed one-liner. **The `imgAlt` rule applies to stems.** ⚠️⚠️ **`image` STORES THE BASENAME WITH NO EXTENSION** — `qImgSrc()` appends `.jpg`; a stored `.jpg` builds `…jpg.jpg`, and **a broken `<img>` renders as nothing and logs no console error.** ENT's `q-images.ps1` is template-specific and never fires here.
- **⚠️⚠️ REAL EXAM DATES (user, 2026-08-13):** Peds OSCE **14 Sep** · Peds papers **17 Sep** ·
  ENT **22 Sep** · Ophtho **27 Sep** · Neuro **3 Oct** · Peds papers **18–19 Oct**. `schedule.js`
  rebuilt on them (user presses **Reset to the original plan**). **Nothing is dropped — banks are
  deferred, not cut**; stop at clean topic boundaries.
- ✅ **OPHTHO BANKS COUNTED FOR REAL 2026-08-18: ~1,918 REMAIN** (GG 949 of 1,087, House ~969 of
  ~1,025) against 27 Sep. ⚠️ **~304 are IMAGE questions, every crop looked at — the dominant cost.**
  ⚠️ **56 House STAGED, UNMERGED**; **132 model-exam items are SHORT-ANSWER → `type:'case'`.**

## Governing decisions (verbatim rulings in the archive)

- **All theory is written from THIS hub chat for all four modules** (2026-08-14); the other three chats
  stand down on theory and resume only their **banks**. Hub plans, validates, prints, commits; **Opus
  subagents write, cap 2 concurrent**. **A dead agent's file is usually complete: validate from disk
  before rewriting** (6 recoveries) — **but see the 529 note above: it may not exist at all.** §11.
- **Theory format = `START-HERE.md` §14** — the 2026-08-04 brief and first two §14s are DEAD (user
  rejected 30–47 pp chapters; the distractor-essay rule caused it and is REVOKED). Budget
  `max(source words, 25×q)`, floor 600, **ceiling ~2,400 w / ~10 pp**; telegraphic; tables by default;
  §14.3a layout (bold leads need a `:` or `—` within 44 chars for `mdLead()`); §14.5 register —
  *an unrecorded promise is a deletion*.
- **Chapters are SPLIT, not compressed** (user, 2026-08-15, peds 21 → 51): every chapter ≤13 pp **measured by printing**. Safe (`SCHEDULE` is keyed by date+title, progress by question id) but **reassign questions from the theory `qs` links** — tie-breaks misfile most. ⚠️ **A seam that needs the chapter REORDERED is not a seam** (rejected one at `op-intro`).
- **Writing budget, banks (2026-08-13, supersedes "full depth everywhere"):** adaptive depth — ~520 w for
  vignettes/defects/divergences/gap-fills, **~250 w for straight slide-recall**, every distractor still
  explained; shared tables in ONE entry, siblings point at an **existing** id; `source` is a citation,
  never a second explanation. **Scope is never cut.** If time runs short, **say so loudly — scaling down is theirs.**
- **A defective key is noted, never disputed** (2026-08-11) — never take a key dispute to the user. **A lecture-numbering gap = the professor withheld it** (2026-08-14) — fill and tag, never chase.
- **Publishing agreed, parked until ENT done.** First: **fix the final domain** (localStorage is per-origin), **cache-bust the data `<script>` tags**, fold, review. Host/visibility undecided.

## The method — what transcription work must never skip

- **Read every answered page; trust no count** — not printed numbering, not the contents page, not the map (ranges 21/21 right, counts 17/21 wrong, always upward). **Render one page past the last.**
- **Run the full six-stage duplicate sweep (A–F) on every topic**; folds ran 0–20 with no trend and **the rankings are the instrument**. **Say why a zero is a zero, and say how it was measured.** Grep drafted blocks for a folded id **before** splicing; re-run the dead-id check after every fold. ⚠️ Marker deltas, mis-keyed banks and the sweep's defect shapes 1–6: `progress\memory-archive.md`.
- **Read the slide before declaring a gap — paid 16 times, and a BOOK CROSS-REFERENCE IS NOT A VERDICT.**
  The 16th: a draft called **HOSPITALIZATION** *taught nowhere* when `hospitali[sz]` hits eight decks,
  four of them real teaching. ⚠️ **OPEN THE HIT BEFORE WRITING THE ABSENCE**; grep the shortest stem AND
  the misspelling; **an absence claim must name the specific thing absent, not the topic** — and say how
  it was measured (*"exactly 2 hits across all 29 decks"* beats *"not taught"*). ⚠️ **OPHTHO HAS 29 CACHED LECTURE FILES, NOT 34** — nine merge two lectures each (`L1,2`, `L13,14`, `L15,16`, `L27,28`, `L31,32`, `L33,34`, `L35,36`, `L3,4`, `L7,8`), which is where the inflated count came from; **count the directory, never the lecture numbers.** ⚠️⚠️ **AND TWO DECKS AGREEING IS NOT CORROBORATION WHEN BOTH NOT-COVERED LISTS ARE SCOPED TO THEMSELVES** — `L20` and `L31,32` both record PVD absent; the BOOK names and explains it at p.17, p.41 and p.42.
- **⚠️ Bank sampling and provenance: `progress\memory-archive.md`** — a contents page may print per-section counts (**verify, never trust**); the end-of-ENT "outside knowledge" list is **half wrong**, re-grep item by item; 67 entries record no provenance, roster in `ledger.md` §11.

## Validation state

- **Corpus 3,703** (2026-08-29 — measured per module, not derived): ENT **2,322** (2,240 q + 82
  cases) · **Ophtho 1,142** (GG 784 · House 358) · Neuro 158 (151 + 7) · Peds 81; **89 cases**,
  **105 images**. Module keys `ent`, `ophtho`, `pediatrics`, `neuropsych`.
  Option counts 2–9 coexist. ⚠️ **`grep -c "^  { id:"` UNDERCOUNTS `questions.ophtho.js`** (935 for
  1,142) — the file is mixed CRLF/LF with mixed indentation; **count by id prefix.**
- **Theory: ✅ 153 of 153 chapters, 1,603 sections — COMPLETE.** ENT 30 (259 pp / 8.6) · Peds 51
  (340 / 8.3) · Ophtho 36 (331 / 9.2) · Neuro 36. ENT re-printed **261 pp** after the §16 reshape
  (bullets cost pages: +2). Drafts in `content\<mod>\theory-drafts\` (⚠️ ENT's
  bare `ent-csom/tonsils/aom/stridor` are the DEAD format; their `*.v2/v3` are current). Best models:
  `ent-nasalobs`, `op-ret`, `nr-cranial`, `ps-symptom`, `ps-ocd`, `ps-anxiety`, `ps-schizmgmt`.
- Last real `file://` boot **2026-08-24**: **0 console errors, 876 CSS rules, 3 `max-aspect-ratio:5/4`
  blocks, 4 modules, 153 chapters, 2,699 questions, 89 cases, 1,603 sections.** ⚠️⚠️ **THE SESSION
  SCRATCHPAD STARTS EMPTY AND THE HARNESSES DO NOT LIVE IN THE CURRENT ONE — `find` the temp root
  before rebuilding anything.** Theory/boot set under `3528b857-…\scratchpad` (`print.sh` ·
  `boot.sh`+`bootprobe.js` · `vdraft.js` · `qdump.js` · `shot.sh`); the **House** set under
  `7e50a9f0-…\scratchpad\t10\` (`hparse` · `hsweep` · `deepsweep` · `selfsweep` · `shortkey` ·
  `emptykey` · `norm`+`normtest` · `sweep3` · `adj` · `corpus-selfsweep` · `regress` · `vhouse` ·
  `splice-thr` · **`splice-tail`** · `postsplice` · `foldpatch` · `handedit` · **`mergeapply`**).
  ⚠️⚠️ **`Array.filter` SKIPS SPARSE HOLES — index: `for i… if(!(i in A))`.**
- **⚠️ THE THEORY READER IS AN A4 PAGE (2026-08-19, three user complaints) AND MUST NOT BE MADE WHITE.** 210:297 by `aspect-ratio`; **margins set in JS from the PAGE's width** (percentages resolve against the containing block). Mechanics in the archive.
- **⚠️⚠️ `overflow:hidden` MAKES A BLOCK MONOLITHIC, AND MONOLITHIC MEANS CLIPPED, NOT BROKEN** — `.th-table` silently lost over-tall tables' last rows. Fixed screen-side; print never affected.
- **⚠️ A draft header is a claim, not a measurement — re-count from disk after the final edit.** Wrong nine times; **the sum check alone no longer suffices.** Page divisors: resume block + plan §4.

## Environment — what changes what you do first

- Poppler **25.07.0** (off PATH, under `…\WinGet\Packages\oschwartz10612.Poppler_…\`); `pdftotext` = 0
  chars on every book/bank; `Read` rejects >100 MB. **`.ps1` blocked by policy — pass PowerShell
  inline.** **Node v26.7.0**; no Python, ImageMagick, Ghostscript or `gh`. Images via `System.Drawing`
  (⚠️ `Sort-Object` no-ops on hashtables; cast `Measure-Object` doubles to `[int]`). Headless Chrome is
  the only screenshot/probe route — **⚠️ never under a path containing `--`** (`CLAUDE.md` §7).
- **⚠️⚠️ ESCAPING IS THE PROJECT'S MOST EXPENSIVE PROBLEM — FOUR TRAPS, ALL MEASURED. (1)** `\n` **is a
  real newline and a real newline ENDS A JSON STRING** — writing to a FILE does not save you.
  **(2)** ⚠️⚠️ **the Bash tool's quoted heredoc collapses `\\` to `\`** (`\d`→`d`, `\s`→`s`), corrupting
  paths, citations and MEMORY.md itself — **fired FOUR times, the fourth a plain `cat > file <<'EOF'`
  with a JS body, where `'([\\s\\S]*?)'` shipped as `[sS]`. A QUOTED HEREDOC IS NO PROTECTION WHEN ITS
  BODY IS JS — the collapse happens BEFORE JS sees it. GREP EVERY PATH AND REGEX IN THE FILE AFTER
  WRITING IT; the write reports success either way.** **(3)** a heredoc over **~7 KB** fails to parse —
  **APPEND one section per call.** **(4)** ⚠️⚠️ **a backtick in a DOUBLE-QUOTED bash string is COMMAND
  SUBSTITUTION, and `node -e "…"` IS one** — it blanked six terms from a plan edit, and **every chapter
  id we write is in backticks.** **Fix: `String.fromCharCode(92)`/`(10)`/`(13)`; `node --check` after
  every append; the `Write`/`Edit` tools for anything with a backtick; then GREP THE RESULT.**
  ⚠️ **`app\data\*.js` is MIXED CRLF/LF** — the original body is CRLF, spliced entries are LF, so
  **nothing may anchor on a bare newline**; scan structurally.
- **GitHub, PRIVATE**: `mahmoudbanna23-ctrl/Herophilus`, `main` + `design/clepsydra-and-sessions`
  (only off-drive copy of the Clepsydra art). `Semester 8\` gitignored. Push: `ledger.md` §13.
  **⚠️ Stage EXPLICIT PATHS — never `git add -A`, never a directory a subagent writes into**; `index.lock` = another chat is mid-commit.
- **Measure, then believe:** check the sum, check the auditor, reconcile written + folded = printed; a
  counter that does not move is a finding. **Never write a page number, filename or id from memory**
  (7/7 and 3/3 wrong) — read the `source`, list the directory, grep the id. **An adjudication that is
  not in the map did not happen.**
- Cleanup awaiting approval (nothing without a yes): 173 MB ophtho zip, two Peds PPT stubs, `files.zip`.

**⚠️ THE ONE THING THAT MUST SURVIVE ANY SUMMARY: the Clepsydra is the user's own artwork —
do not redraw her, do not draw anything onto her.**
