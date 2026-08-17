# Herophilus — Memory

Running record, organised around *resuming*. ISO dates; unverified marked as such. Method in
`CLAUDE.md`, per-topic history in `progress\ledger.md`, **full pre-2026-08-17 memory (every war
story, count and verbatim ruling) in `progress\memory-archive.md`** — read the relevant block
there before resuming a paused stream. Where this file and the archive disagree, this file wins.

## Resume here — ✅ Peds theory DONE (51/51). **OPHTHALMOLOGY IN PROGRESS: 21 of 33 chapters** (2026-08-17). Then Neuropsychiatry (27). Banks stay PAUSED.

- **⚠️⚠️ `content\ophtho\theory-plan.md` IS THE MODULE'S WORKING FILE — READ IT FIRST.** It now
  carries **"What writing the first twelve chapters taught"** (splitting, measurement, headers,
  the five ways a register row goes wrong, and *a deck's title does not bound its content*), kept
  there rather than here because this file is capped at 200 lines. Do not re-derive any of it.
- **Ophtho is 33 chapters, not 26 — SIX splits**, each recorded in `modules.js` with its own
  reasoning: `op-orbit`/`op-orbit-mass` (split after printing 14 pp — the expensive way),
  `op-cornea`/`op-cornea-surg`, `op-cat`/`op-cat-surg`, `op-red`/`op-red-mgmt`, `op-ret` **three ways**
  into `op-ret-dr`/`op-ret-vasc`/`op-ret`, and `op-refract`/`op-refract-astig` (all but the first
  forecast BEFORE writing). **Project total 141.**
  ⚠️ **Splits move questions:** 12 refiled at the first two, 1 each at the fourth and fifth, **16 at
  the sixth** — always driven by the theory `qs` links, never a keyword tie-break.
  ✅ **Twenty-one written and individually printed** 2026-08-17: **191 pp, mean 9.1** (ENT 8.6, peds
  8.3); per-chapter table in `theory-plan.md`. Boot: **0 console errors**, **239 sections**, 0 dead
  ids, 0 wrong-chapter, **0 unanchored**, 0 bold-led paragraphs over the 55-w cap,
  **109/138 questions reachable**.
- **⚠️⚠️ CHECK A CHAPTER'S QUESTIONS AGAINST ITS ASSIGNED DECK BEFORE BRIEFING IT.** The plan's
  Decks column is an assignment, **not a coverage guarantee**: **none of `op-va`'s 16 questions is
  answerable from `L3,4`**, its only listed deck — they are `L1,2`'s, whose lines 438–613 (866 w)
  are now counted to `op-va` (**`op-intro`/`op-vissym` must not re-count them**). `op-intro` and
  `op-vissym` share a deck the same way and could hide the same mismatch.
- **⚠️⚠️ `L9` IS READ BUT WAS NEVER CACHED — its 33 pages are effectively UNREAD** (cache still
  **38 words of "CamScanner"×33**, verified on disk 2026-08-17; the 08-16 read wrote findings to
  `theory-plan.md` only). `op-lac` stays render-gated. **Cache in the same pass as the read — a
  read that writes findings only is a read that must be paid twice.**
- **⚠️ Ophtho owes 574 pages of visual reading** (461 PDF pp over 9 decks + 113 `.pptx` slides)
  before the owed-deck chapters can be budgeted — §14's formula breaks there (5.3 q/chapter; the
  lecture term measures the text layer). A blank page here is usually a TEXT slide (inverse of
  peds); **SIX deck patterns — the caption deck** (extracts fully, understates itself badly) **and
  the EMPTY-SLIDE deck** (`L31,32`: four blank "Management" slides), plus **three kinds of blank
  page: text slide · byte-identical filler · broken graphic**. Detail in `theory-plan.md`.
  ✅ `L3,4`, `L10`, `L25` banked. `op-ant` has no deck. **~50 register rows are ophtho's**;
  ~17 closed, 5 notices, **4 undeliverable** (aniridia/Sturge–Weber, sickle management, the ROP
  stages, the axis notation), the rest open.
- ✅ **`L20` 473→2,376 w · `L31,32` 426→2,773 · `L7,8` 1,545→7,004**; ✅ **filler sweep CLEAN NEGATIVE on all ten owed PDFs — DO NOT RE-RUN** (`theory-plan.md`).
- **⚠️⚠️ AFTER A READ, THE DECK'S WORD COUNT IS THE CACHE'S, NEVER `pdftotext`'s.** The `L7,8`
  reader recommended *not* splitting `op-refract` because the deck holds "only 1,540 words" — the
  very number the 88-page render existed to replace; its own transcription holds **4,439**. Split
  anyway at p61; the halves printed **10 and 8 pp**. **A text layer can be word-complete and still
  be wrong**: its p71 put PRK under lenticular surgery where the slide branches both LASIK and PRK
  from corneal. **`pdffonts` per page is the detector for the newest failure — text drawn as VECTOR
  OUTLINES** (`L31,32` p22 returned zero characters in every mode and carried the sign that made
  its case diagnosable).
- **⚠️⚠️ COUNT A CHAPTER'S REGISTER ROWS AND VERIFY EVERY ROW'S *SECOND CLAUSE* BEFORE BRIEFING IT.**
  `op-ret` was named in **twelve rows from six donors and five were wrong** (~29 pp forecast against
  five questions — a question count predicts nothing). **NINE fault shapes now**: over-specified ·
  absent from the deck · wrong deck · wrong slide · circular · wrong receiver · **wrong line** ·
  **stale, because a third chapter delivered it** · **donor under-stating its own coverage** (the
  mirror of the over-stated absence, and it makes the receiver write a duplicate). Row-by-row
  evidence and the census of what each unwritten chapter is owed: `START-HERE.md` §14.5 and
  `theory-plan.md`.
- **⚠️ TEST-PRINT THE JOIN BEFORE ACCEPTING A SPLIT** (a fourth `op-ret` chapter was dropped by
  measurement — 10 pp against the estimator's 15.2). **The ÷240 estimator has over-predicted by
  5, 2, 2, 1.5, 2.3 and 2.1 pages here — plan with it, never clear a chapter with it.**
- **⚠️⚠️ "NO ORPHAN WORDS" IS NOT A VALID CHECK** — it proves every word landed SOMEWHERE, never
  that it landed in the right sentence. **Never accept a reconstruction on a word-conservation
  argument; render the page.** `pdftotext -raw` (draw order) is the tool for any slide whose text
  streams together — it recovered `L33,34` p.19's five overlapping cards. **Text-sufficient is a
  claim about a source's PROSE, never about its tables or its columns** (`theory-plan.md`).
- **⚠️ NEVER `git add` A DIRECTORY WHILE A SUBAGENT IS WRITING INTO IT** (it swept a half-finished
  `L37` append into an unrelated commit). **Stage explicit paths.**
- **Next: EVERY remaining chapter is render-gated except `op-ant`.** Twelve left, and the reading
  order is the debt: **`L1,2` 136 pp** (un-triageable — one running header across 80 blank pages)
  gates `op-intro`+`op-vissym` · `L24` 78 (`op-onc`) · `L27,28` 70 (`op-appear`) · `L29`+`L30` 58
  (`op-squint`) · `L21`+`L22` 45 (`op-neuro`) · `L13,14` 41 (`op-uvea`+`op-sclera`) · `L9` 33
  (`op-lac`) · `L6`+`L5` 113 slides (`op-conj`+`op-lid`). **`op-ant` last: no deck at all, so its
  scope is what the others leave** — the `ent-sinuscomp` shape; grep ~50 terms across the module
  before writing, and `wht-4` is already flagged for it to cross-reference.
- **⚠️ `op-uvea` IS THE MODULE'S MOST BLOCKED CHAPTER** — **five** register rows owed to it and
  `L13,14` extracts **zero characters over 41 pp with no cache at all**.
- **⚠️ TWO interview items, batched, both ASKED 2026-08-17 and not yet answered:** (1) whether to
  fetch the QR code standing where `L31,32` p18's management belongs — decoded offline, exact,
  `https://scan.page/4t7P1B`, **not visited**; (2) `L23` prints `(Fig 9-8)`/`(Fig 9-14)` and `L37`
  is "CHAPTER 4" of an unnamed AAO-family primer, so **`L23` is very probably Chapter 9 of the same
  book** — nothing is cited as a book chapter yet. Settle by **asking**, never guessing.
- **⚠️ ENT is NOT closed**: 25 §14.5 register rows open, **plus 33 bold-led paragraphs over the
  55-word cap** (peds 2, ophtho 0). Located work for the ENT reconciliation pass. ⚠️ **A cap
  auditor must separate BULLETS from PARAGRAPHS** — conflating them faked four failures here.
- **Question banks, frozen mid-flight**: ✅ Endpoint closed · ✅ GG Ear+Nose closed · GG Throat
  t1–t9 + t11 written · **⚠️ only t10 left in GG** — staged complete (66/66 verbatim,
  10 boxes, 10 figures, 10 back-ref chains repaired) but **only 11 of 66 drafted**; 55 remain,
  belongs to the question resume, not theory. Then **House from PDF p.15** (`enthd-`, 41 done,
  next ch.3 Q45, book pp.33–38, render through p.39). GG totals: 1,047 printed / 982 written /
  65 folded. Detail per topic: archive + `ledger.md` §14.
- **⚠️⚠️ REAL EXAM DATES (user, 2026-08-13):** Peds OSCE **14 Sep** · Peds papers **17 Sep** ·
  ENT **22 Sep** · Ophtho **27 Sep** · Neuro **3 Oct** · Peds papers **18–19 Oct**.
  `schedule.js` rebuilt on them (user must press **Reset to the original plan**). Projection:
  theory ~17 Aug; banks Neuro ~7 Sep, ENT ~11 Sep, Peds ~12 Sep, **Ophtho ~25 Sep — the only
  tight one**. Remaining-question counts are **extrapolated ±30%** — report the first real
  page count per bank. **Nothing is dropped — banks are deferred, not cut**; stop only at
  clean topic boundaries.

## Governing decisions (verbatim rulings in the archive)

- **All theory is written from THIS hub chat for all four modules** (2026-08-14); the other
  three chats stand down on theory and resume only their **banks**, Ophtho first. Hub plans,
  validates, renders, commits; **Opus subagents write, cap 2 concurrent** (the usage pool is
  shared — more chats multiply failures, not throughput). **A dead agent's file is usually
  complete: validate it from disk before rewriting** (4 recoveries now). Protocol + prompt:
  `START-HERE.md` §11; paste text `progress\briefs\PASTE-theory-format-changed.md`.
- **Theory format = `START-HERE.md` §14** — the 2026-08-04 brief and first two §14s are DEAD
  (user rejected 30–47 pp chapters; the distractor-essay rule was the cause and is REVOKED).
  Budget `max(lecture words used, 25×q)`, floor 600, **operative ceiling ~2,400 w / ~10 pp**;
  telegraphic; tables by default; §14.3a layout (bold leads need an early colon/em-dash for
  `mdLead()`); §14.5 register — *an unrecorded promise is a deletion*.
- **Peds chapters are SPLIT, not compressed** (user, 2026-08-15): 21 → 51 chapters, project
  → **134**; every chapter ≤13 pp measured by printing. Splitting is safe (`SCHEDULE` by
  date+title, progress by question id) but **reassign questions from the theory `qs` links** —
  automatic tie-breaks misfile most. Method: `content\peds\theory-plan.md`.
- **Writing budget, banks (2026-08-13, supersedes "full depth everywhere"):** adaptive depth —
  ~520 w for vignettes/defects/divergences/gap-fills, **~250 w for straight slide-recall**, every
  distractor still explained; shared tables live in ONE entry, siblings point at an **existing**
  id; `source` is a citation, never a second explanation. **Scope is never cut** (the user
  corrected the first briefs for that). If time runs short, say so loudly — scaling down is theirs.
- **A defective key is noted, never disputed** (2026-08-11) — closes the disputed-key roster.
  Never take a key dispute to the user; interview only for things they can supply.
- **A lecture-numbering gap = the professor withheld it** (2026-08-14, closes the interview) —
  never chase one; fill and tag. ENT `L28`, Peds 21/28/29/57.
- **Publishing agreed, parked until ENT done.** Before first publish: cache-bust the data
  `<script>` tags (verified absent), fix the final domain first (localStorage is per-origin),
  finish folding. Publishing enables Google sign-in. Host undecided (Netlify unreachable);
  public-vs-private undecided (commercial bank content). Full content+design review folds into
  the pre-publish pass.

## The method — what transcription work must never skip

- **Read every answered page; trust no count** — not printed numbering, not the contents page,
  not the map (ranges right 21/21, counts wrong 17/21, always upward). Render **one page past
  the last answer page** (both boundary defects are unpredictable in both directions).
- **Run the full six-stage duplicate sweep (A–F) on every topic**; folds ran 0–20 per topic with
  no trend. The rankings are the instrument, the strict stages a convenience. Stage-blind spots,
  defect shapes 1–6 and the false positives: archive. **Say why a zero is a zero.** Grep drafted
  blocks for a folded id **before** splicing; re-run the dead-id check after every fold.
- **Compute the expected marker delta FIRST, then audit both ways** — five marker faults in five
  shapes (block-missing, in-`source` ×3, lost at writing, spurious on boxed entries; a boxed entry
  takes NO marker). The audit asks *"does `explanation` END with the sentence"*, over the whole
  file. Validator: `<scratchpad>\wrT7\validate.js` (strip trailing `*`s — not optional).
- **Every bank mis-keys itself — go looking.** Mechanism decides: options replaced → new
  entry; identical options, moved key → record in place; bank contradicting its own box →
  correct and record. Cross-bank divergence: hold both, notes in both — **but check the menu
  first: a key is the best option OFFERED.**
- **Read the slide before declaring a gap — paid 13 times**; grep the shortest stem AND the
  misspelling (*ostio-*, *Uvelopalato…*). Re-check staged interview items against lectures
  before raising.
- **⚠️ The end-of-ENT "outside knowledge" list is about half wrong** — re-grep item by item
  before booking book time (8 of 13 checked were printed all along). 67 entries record no
  provenance (46 early Endpoint + all 21 House), not verified. Owed when ENT banks resume;
  roster: archive + `ledger.md` §11.
- **GG structure**: PDF page = book page + 9; **three chapters (Ear/Nose/Throat), numbering
  restarts per section** — ids carry a section+topic token (`entqb-thr1-1`). ~30% carry boxes, but
  box presence is a property of the PAGE. Back-references hit up to 28%; repair every "previous
  case" reference — the deck is shuffled. Figures: **13 of 13 crops wrong first try — LOOK at every
  crop**; an answer-page figure is never cropped (it would reveal the key).

## Validation state

- **Corpus 2,097** (2026-08-14): ENT 1,720 · Neuro 158 · Ophtho 138 · Peds 81. Banks: GG
  1,180 · Endpoint 697 · House 78; 54 shared memberships. Module keys `ent`, `ophtho`,
  `pediatrics`, `neuropsych`. Option counts 2–9 coexist; nothing assumes four.
- **Theory: 102 of 141 chapters** — all ENT (30), all Peds (51), Ophtho 21. ENT 259 pp / mean
  8.6; Peds 340 / 8.3; Ophtho 191 / 9.1. Drafts: `content\<mod>\theory-drafts\` (⚠️ ENT's bare
  `ent-csom/tonsils/aom/stridor` files are the DEAD format; their `*.v2/v3` are current). Best
  models to hand an agent: `ent-nasalobs`, `ent-sinuscomp`, `op-ret`, `op-refract`.
- Last real `file://` boot: **0 console errors, 854 CSS rules, 3 `max-aspect-ratio:5/4`
  blocks, 4 module cards, 2,097 questions, 9/9 poses.** Print harness: `<scratch>\print.sh`.
- **⚠️ `pages ≈ words ÷ 240` is an exact AGGREGATE predictor and ±3 per chapter** — plan a
  module with it, never clear a chapter; print the chapter (seven rules: §14.1).
- **⚠️ A draft header is a claim, not a measurement — re-count from disk after the final
  edit.** Wrong nine times; worst shape a *forecast wearing a measurement's label* whose
  breakdown summed exactly. The sum check alone no longer suffices.

## Environment — what changes what you do first

- Poppler installed (off PATH); `pdftotext` = 0 chars on every book/bank; `Read` rejects
  >100 MB. **`.ps1` files are blocked by execution policy — pass PowerShell inline.**
- **Node v26.7.0 installed** (2026-08-12). No Python, ImageMagick, Ghostscript or `gh` CLI.
  Images via `System.Drawing` (⚠️ `Sort-Object` no-ops on hashtables — `[pscustomobject]`;
  cast `Measure-Object` doubles to `[int]`). ffmpeg off PATH. Headless Chrome is the only
  screenshot/probe route — **⚠️ never under a path containing `--`** (`CLAUDE.md` §7).
- **GitHub, PRIVATE**: `mahmoudbanna23-ctrl/Herophilus`, branches `main` +
  `design/clepsydra-and-sessions` (only off-drive copy of the Clepsydra art). `Semester 8\`
  gitignored. Push method: `ledger.md` §13. **Stage only your own paths — never
  `git add -A`**; `index.lock` means another chat is mid-commit.
- **Measure, then believe**: check the sum, check the auditor, reconcile written + folded =
  printed; a counter that does not move is a finding. **Never write a cross-referenced page
  number or lecture filename from memory** (7/7 and 3/3 wrong) — read the entry's own
  `source`, list the directory.
- Cleanup awaiting approval (nothing without a yes): 173 MB ophtho zip, two Peds PPT stubs,
  `files.zip`.

**⚠️ THE ONE THING THAT MUST SURVIVE ANY SUMMARY: the Clepsydra is the user's own artwork —
do not redraw her, do not draw anything onto her.**
