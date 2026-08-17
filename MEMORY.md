# Herophilus — Memory

Running record, organised around *resuming*. ISO dates; unverified marked as such. Method in
`CLAUDE.md`, per-topic history in `progress\ledger.md`, **full pre-2026-08-17 memory (every war
story, count and verbatim ruling) in `progress\memory-archive.md`** — read the relevant block
there before resuming a paused stream. Where this file and the archive disagree, this file wins.

## Resume here — ✅ Peds theory DONE (51/51). **OPHTHALMOLOGY IN PROGRESS: 8 of 28 chapters written** (2026-08-17). Then Neuropsychiatry (27). Banks stay PAUSED.

- **Ophtho is 28 chapters, not 26** — `op-orbit` split after printing 14 pp, `op-cornea` split
  **before** writing (now the preferred order). ✅ Written and page-measured 2026-08-17, all on
  US letter, the machine default: `op-pupil` **8 pp** · `op-orbit` **9** · `op-orbit-mass` **7** ·
  `op-glauc` **12** · `op-cornea` **9** · `op-cornea-surg` **9** · `op-va` **9** · `op-trauma`
  **9** · `op-systemic` **10** · `op-insid` **9** · `op-cat` **9** · `op-cat-surg` **8**. 108 pp
  over 12 chapters, mean 9.0 (ENT 8.6, peds 8.3). Boot verified: **0 console errors**, 136
  sections, 0 dead `qs` ids, 0 wrong-chapter links, 63/138 reachable.
- **⚠️ `op-cat` SPLIT BEFORE WRITING — third ophtho split, and the method is now settled.** One
  chapter forecast at ~4,370 w / **~18 pp**; written as two it printed **9 + 8**. Seam = medical
  vs surgical (`op-cat` + **`op-cat-surg`**, registered in `modules.js`), chosen because both
  lecturers draw it, **zero questions straddle**, and all three inbound register rows land
  diagnosis-side. Split-by-deck and split-by-aetiology were both costed and rejected on the
  record. **Forecast, then split, then write — never split after printing.**
- **⚠️ `L35,36) Chronic visual loss` CARRIES A WHOLE THIRD CATARACT LECTURE** (~450 w, lines
  129–249) that `L17` and `L18` never give — the cataractogenic **drug** list, the **metabolic**
  list, the **intrauterine** causes, two Egypt figures, the 35 %-protein pathogenesis.
  **Both cataract decks name congenital cataract repeatedly and never say what causes it.**
  Counted by `op-insid`, used cited-only by `op-cat`. **A deck's title does not bound its
  content — grep the module before believing a chapter's deck list.**
- **⚠️ LENS-INDUCED GLAUCOMA HAD NO HOME IN THE MODULE** — `phacomorphic`/`phacolytic` return
  **zero** across all of `theory.ophtho.js`, and `L11`/`L12` print neither. Now written in
  `op-cat`; `op-glauc` is merged, so cross-referencing it is reconciliation work.
- ✅ **Two agents running in one file, and two whose reported counts REPRODUCED FROM DISK
  EXACTLY** (`op-insid` 2,619, `op-cat` 2,449 + 1,816) — the first since the header-fault run
  began. Both used the `op-trauma` pattern: **no number written into the file**, the re-measure
  command in the header instead, counts reported to the hub. **That pattern is now standard.**
- **⚠️ A FIFTH WAY A REGISTER ROW CAN BE WRONG — IT IS CIRCULAR.** `op-orbit` deferred the
  thyrotoxic picture and the IgG/TSH mechanism to `op-systemic` while **`orb-6` already carried
  slide 15 whole**, and still pointed here for it. Resolved as a declared overlap (`orb-6` keeps
  its copy — 24 questions sit there; `sys-7` writes the mechanism so the pointer lands). The four
  earlier shapes: over-specified · absent from the deck · wrong deck · **wrong slide**. **Verify
  the row's SECOND clause too — "chapter X carries only Y" is itself a claim.**
- **⚠️ TWO BODY-WORD DEFINITIONS ARE NOW IN CIRCULATION and they differ by ~12 w per section**
  (`Src:` lines in or out — 157 words on `op-systemic` alone). **CANONICAL = `W(s.body)` over
  every section, `Src:` INCLUDED** — that is `vth.js` and every ENT/peds figure. Agents report
  their number *and their definition*; the hub re-counts canonically. A disagreement of roughly
  12 × sections is a definition gap, not a stale header.
  **⚠️ `op-glauc` estimated 10.8 and printed 12 — the estimator missed LOW**, the direction that
  matters. **⚠️ `op-va` estimated 10.8 and printed 9 — it missed HIGH by the same margin.** Both
  in one module: ±3 per chapter is real in both directions. **Print the chapter.**
- **⚠️⚠️ `op-va`'S SIXTEEN QUESTIONS ARE NOT ANSWERABLE FROM `L3,4` — NOT ONE**, and the plan's
  chapter table says `L3,4` is its only deck. They test acuity, pinhole, the low-vision ladder,
  fields and colour, which `L3,4`'s own transcriber says (line 418) are in **`L1,2`** — that deck
  *begins after* visual acuity. **`L1,2` lines 438–613 (866 w) are now COUNTED to `op-va`**;
  lines 390–437 cited only (they restate L3,4 sl.2–4). **`op-intro` and `op-vissym` must not
  re-count them**; lines 1–389 and 614–659 stay theirs. **Check a chapter's questions against
  its assigned deck BEFORE briefing it** — the plan's deck column is not a coverage guarantee.
- **⚠️ ELEVENTH HEADER FAULT (`op-va`), and the cheapest tell yet**: header claimed 2,331 body
  words "taken from disk after the final edit"; disk read **2,596**, and **the gap was the size
  of the one section the agent was writing when it died** (`va-6`, 273 w — which landed complete).
  **Its partner `op-trauma` wrote NO numbers into its header at all**, on the stated reasoning
  that a number in a file must be re-verified after every later edit — and so could not produce
  the fault. **That is now the preferred practice: the agent reports its counts to the hub, the
  hub measures from disk and writes the number in.**
- **⚠️ Both agents died on the session limit at the SAME step — the §14.3a layout pass — and both
  files were complete** (5th and 6th recovery; validate before rewriting, always). The hub
  finished the pass: 20 bold leads with no `mdLead()` anchor, all fixed by moving the bold
  boundary or adding an early colon. **Body words moved by 1 and 5 across the two files — that
  delta is the evidence no fact was touched.**
- **⚠️ Both splits left their questions behind, fixed 2026-08-17**: 9 refiled to `op-orbit-mass`,
  3 to `op-cornea-surg`, driven by the theory `qs` links (the sets were disjoint and summed
  exactly to the parent counts). **A split is not done when the chapter is split — refile the
  questions in the same pass**, per the peds rule that was skipped here.
- **⚠️ Ophtho owes ~726 pages of visual reading before the owed-deck chapters can be budgeted** —
  the §14 formula breaks there (5.3 q/chapter; the lecture term measures the text layer, not the
  lecture; run naively it floors 11 of 26 chapters incl. `op-onc`, a 78-page deck). **Plan at
  `content\ophtho\theory-plan.md` — READ IT FIRST.** A blank page there is usually a TEXT slide
  (inverse of peds). Four deck patterns; three are worth the render. ✅ `L3,4`, `L10`, `L25`
  already banked — do not re-read. `op-ant` has no deck. **12 §14.5 register rows are ophtho's**;
  2 ticked, 1 a notice, 9 open — `op-va` and `op-systemic` are each owed two.
- **Next, no render cost:** `op-va` + `op-trauma` (banked decks, in progress 2026-08-17), then the
  text-sufficient seven — `op-cat`, `op-systemic`, `op-insid`, `op-white`, `op-red` (⚠️ a **book
  chapter**, 5,104 w, the module's largest compression job) and `op-ret` (⚠️ `L20`, 33 pp, owed).
- **⚠️ ENT is NOT closed**: 25 §14.5 register rows open (reconciliation vs merged chapters),
  **plus 33 bold-led paragraphs over the 55-word cap** found 2026-08-16 when the auditor's
  blind spot was fixed (it skipped `*`-opening lines — §14.3a's own bold leads were never
  checked; peds is clean at 2). That is located work for the ENT reconciliation pass.
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
  ~520 w for vignettes/defects/divergences/gap-fills, **~250 w for straight slide-recall**,
  every distractor still explained; shared tables live in ONE entry, siblings point at an
  **existing** id; `source` is a citation, never a second explanation. **Scope is never cut**
  — the user corrected the first briefs for that, verbatim in the archive. If time runs short,
  say so loudly; scaling down is the user's call.
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
- **Run the full six-stage duplicate sweep (A–F) on every topic**; folds ran 0–20 per topic
  with no trend. The rankings are the instrument, the strict stages a convenience (folds have
  reached neither A nor B three times). Stage-blind spots, defect shapes 1–6, true/false and
  bare-ordinal false positives: archive. **Say why a zero is a zero.** Grep drafted blocks for
  a folded id **before** splicing; re-run the dead-id check after every fold.
- **Compute the expected marker delta FIRST, then audit both ways** — five marker faults in
  five shapes (block-missing, in-`source` ×3 incl. 14 pre-existing, sentence lost at writing,
  spurious on boxed entries). A boxed entry takes NO marker. The audit asks *"does
  `explanation` END with the sentence"*, over the whole file. Canonical validator + marker
  definition: `<scratchpad>\wrT7\validate.js` (strip trailing `*`s — not optional).
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
  restarts per section** — ids carry a section+topic token (`entqb-thr1-1`). ~30% carry boxes
  but box presence is a property of the PAGE. Back-references hit up to 28%; repair every
  "previous case" reference — the deck is shuffled. Figures: GG crops by hand, **13 of 13
  wrong first try — LOOK at every crop**; an answer-page figure is never cropped (it would
  reveal the key).

## Validation state

- **Corpus 2,097** (2026-08-14): ENT 1,720 · Neuro 158 · Ophtho 138 · Peds 81. Banks: GG
  1,180 · Endpoint 697 · House 78; 54 shared memberships. Module keys `ent`, `ophtho`,
  `pediatrics`, `neuropsych`. Option counts 2–9 coexist; nothing assumes four.
- **Theory: 81 of 134 chapters** — all ENT (30), all Peds (51). ENT 259 pp / mean 8.6; Peds
  340 pp / mean 8.3. Drafts: `content\ent\theory-drafts\` (⚠️ the bare
  `ent-csom/tonsils/aom/stridor` files are the DEAD format; their `*.v2/v3` are current).
  Best models to hand an agent: `ent-nasalobs`, `ent-sinuscomp`, `ent-otorrhea`.
- Last real `file://` boot: **0 console errors, 854 CSS rules, 3 `max-aspect-ratio:5/4`
  blocks, 4 module cards, 2,097 questions, 81 theory chapters, 9/9 poses.**
- **⚠️ `pages ≈ words ÷ 240` is an exact AGGREGATE predictor and ±3 per chapter** — plan a
  module with it, never clear a chapter; print the chapter. Words and pages move oppositely
  with format; predict overruns entity-by-entity (seven rules: `START-HERE.md` §14.1).
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
