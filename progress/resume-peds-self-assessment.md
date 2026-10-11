# Resume — Pediatrics "Self assessment" source (state at 2026-10-11)

Owner's task 1 of the 2026-10-11 list: check the three new sources in `Semester 8\Pedo\Questions\`
for duplicates against the live Pediatrics questions, then put all three under a new source filter
"Self assessment". Approved plan (steps 0-8):
`C:\Users\Alfa388\.claude\plans\project-folder-d-claude-os-medical-idempotent-puzzle.md`.
Owner rulings: pictures in the same go; the book's out-of-course topics go to the nearest existing
chapter. **Nothing is committed yet. No live upload without the owner's yes, none 17-19 Oct.**

All work is under `content\peds\qb-pages\sa\` (`_work\` = scripts, briefs, reports).

## Done and checked

| Piece | State |
|---|---|
| Written set 1 / 2 | `sa-p1.array.js` 165, `sa-p2.array.js` 188. `_work\check-parts.js` exit 0, independent check PASS-WITH-NOTES. Zero duplicates against the 1,727 live Pediatrics questions (positive control 5/5). |
| Book | `sa-book.array.js` 452 (229 single-answer, 223 matching sub-items, 31 chapters). `_work\check-book.js` exit 0. Independent text check (Codex) PASS-WITH-NOTES: `_work\refute-book.md`. |
| Book, page look | `_work\check6\small-print.md`: 351 fragments on 89 rendered pages, **no number, unit or exponent mismatch**; keys of 16.3, 17.4, 26.11 confirmed D on the page. Reported "option order" in 6.11 and 7.10 is not a fault: the page prints the letters out of sequence and the array follows the letters. Real fault fixed: 18.7.1-4 stems carried stray list text (`_work\hand-entries.json` `head:18.7` now has a `lead`; rebuilt, only those 4 ids changed; backup `_work\sa-book.before-18-7.js`). |
| Chapters | `sa-chapters.json`, 805 entries; `node _work/check-chapters.js sa-p1.array.js sa-p2.array.js sa-book.array.js` exit 0. 115 flagged `outOfCourse`. |
| Fourth bank | `selfassess` / "Self assessment" / `#5d4b8c` wired in `app\js\storage.js`, `app\index.html`, `app\data\questions.js`, `tools\validate\*`, `app\smoke.*`; `app\data\questions.peds.sa.js` exists with an empty `Q_PEDS_SA`. `CHECK-ALL PASS 4/4`, boot 6956. Left: `selfassess` in `BANK_HEX` (`app\smoke.js`); `app\smoke.js:22` and `tools\bank-harness\oph-endpoint-fold.js:125` still list three banks. |

## Book duplicates — classified; independent check only PARTLY done (see the warning below)

`_work\sweep\pairs\book-pairs.json` (maker: Claude Sonnet). SAME / MENU / DIFF / UNSURE:
House file 272 / 70 / 24 / 0 · Endpoint part 1 118 / 9 / 13 / 8 · Endpoint part 2 187 / 47 / 20 / 7.
**284 distinct book ids have a SAME live partner; none in the two written sets.** Only 273 of 775
pairs were confirmed by a script rule; the rest by reading.

- The 15 UNSURE pairs are ruled in `_work\sweep\pairs\claude-rulings.json` (8 SAME, 7 DIFF) — these
  override `book-pairs.json`. `show-class.js <CLS> [maxStem] [bookIds]` prints pairs side by side.
- Independent check (Codex, different house): brief `_work\brief-7-check-pairs.md` +
  `_work\brief-7a-scope.md`. Run 1 failed (AGENTS.md forbids opening `app\data`). Run 2 read only
  `_work\sweep\pairs\check7\pairs-dump.json` (588 pairs, built by `check7\make-dump.js`) and
  reported **587 AGREE, 1 DISAGREE, 0 DOUBT, 0 missed, 0 not read** (`_work\last-7a.txt`,
  `check7\verdicts.json`, `check7\refute-pairs.md`).
- **The one DISAGREE is right and is ruled DIFF by Claude: `pedsa-b15-7` / `pedep-mf1-37`** — same
  vignette, but the book asks the cause of the respiratory failure (key Pneumocystis jiroveci
  pneumonia, 5 options) and the live item asks the diagnosis (key SCID, 4 other options).
  `pedsa-b15-7` has no other SAME partner, so it stays its own entry (283 at that point; **final count 284**
  once `pedsa-b2-8-3` was ruled SAME, see the third read below). Written into `claude-rulings.json` 2026-10-11 (now 16 rulings: 8 SAME, 8 DIFF); carry a
  look-alike note in its `explanation`.
- ⚠️ **The checker's "0 not read" is NOT supported by its own log** (measured 2026-10-11): only 123
  of the 588 pairs have either id anywhere in `_work\codex-7a.log`, 62 have both; `verdicts.json`
  holds 3 distinct reasons, 576 of them the identical string. 70 SAME pairs have differing key
  text, so it most likely read those by eye and passed the ~507 identical-key pairs by a script
  rule. Treat the 507 as script-checked only. Owed before folding: one provable per-pair read.
- **Third read — Codex, by the owner's direct order 2026-10-11 ("move the pairs read to codex";
  this overrides "never a third Codex try" for this check only).** The factory attempt
  (`Tools\factory\jobs\peds-sa-pairs-check-2026-10-11`, seat `gemini-35-lite`) got 0 usable
  verdicts — that seat is capped at 100 calls a day and was at 513; stopped, lock released.
  Brief `_work\brief-9-pairs-read.md`; input `_work\sweep\pairs\check9\pairs-blind.json` (588, the
  first reader's call removed, built by `check9\make-blind.js`); output
  `check9\verdicts.jsonl` (one line per pair: verdict + what each side asks + a pair-specific
  reason), final message `_work\last-9.txt`, log `_work\codex-9.log`. Launched 2026-10-11 ~05:30
  local on `gpt-5.6-terra`, 50-minute clock; a partial file is resumable (brief says stop at a
  slice boundary — relaunch telling it to continue from the highest `n` written).
  Run 1 read n 1-40 properly (28 distinct pair-specific reasons, control n 1 caught, 0 disagree)
  and stopped honestly when a 20-pair print was cut off. Continuation: `_work\brief-9a-continue.md`
  over `check9\slices\s041.txt`..`s581.txt` (55 files of 10 pairs, plain text), appending to the
  same `verdicts.jsonl`; `_work\last-9a.txt`, `_work\codex-9a.log`; restart-safe (resumes at the
  first `n` not written). Codex stops by itself after ~60 pairs a run (n 100 after run 2, still 0
  disagree), so a background loop relaunches it one run at a time until 588 lines or a run that
  adds nothing (`_work\last-9b-<i>.txt`, `codex-9b-<i>.log`). If the session died mid-loop: count
  the lines in `verdicts.jsonl` and relaunch the same command.
  ✅ **FINISHED 2026-10-11: 588 of 588 read** (9 runs), 0 missing, 0 id mismatch, 441 distinct
  reasons (the repeats are one book item against its several live partners), every reason shares
  words with its own pair, control 10 of 11 not-SAME pairs kept apart. **3 disagreements, judged
  by Claude:** (1) n 173 `pedsa-b15-7`/`pedep-mf1-37` — DIFFERENT, as already ruled. (2) n 251
  `pedsa-b18-8-4`/`pedep2-car-35` — Codex DIFFERENT (book: murmur at upper RIGHT sternal edge;
  live: upper LEFT); **ruled SAME**, in `claude-rulings.json` (17 rulings); the book item folds
  anyway through `pedep2-car-17` and `pedhd-card-17`. ⚠️ Owed, small: check `pedep2-car-35`'s
  "upper left" against its own page (our slip or the bank's print — note it, never move the key).
  (3) n 299 `pedsa-b2-8-3`/`pedep2-mf1-15` — first reader DIFF, Codex SAME: the book gives the
  findings in Fig. 2.7, the live item spells them out (RR 36, apex displaced to the right, reduced
  air entry on the left); same ask, same key. **Settled SAME 2026-10-11** — the picture check
  read Fig. 2.7's text and it matches word for word (item 3 below). **Fold count is 284, stay 168**
  (b15-7 out, b2-8-3 in). Everything else: the 577 first-reader SAME pairs stand.
  **Script check: `node _work/sweep/pairs/check9/check-verdicts.js`** — coverage,
  repeated reasons, reasons sharing no word with the pair, the control (the 11 non-SAME pairs and
  `pedsa-b15-7`/`pedep-mf1-37` must come out DIFFERENT), and `check9\disagree.json`. Any pair it
  calls DIFFERENT or UNSURE, or does not read = the book item stays its own entry unless Claude
  reads the pair and rules otherwise.

Fold rule once confirmed: a book item SAME as a live question gets **no entry**; each live partner
gets `alsoIn:['selfassess']` and the book citation folded into its `source`. The live wording
stays (the Endpoint/House printings are shortened versions of the book item; replacing 284 live
stems was judged not worth the risk — record this in the ledger). MENU pairs are never folded. A
DISAGREE or DOUBT from the checker means the book item is kept as its own entry.

## Still running / owed

1. Blind second chapter sort for the two written sets: DONE, not yet judged. Factory job
   `D:\claude os\Tools\factory\jobs\peds-sa-chapters-check-2026-10-11`, 341 of 353 answered
   (Gemini-house seats): AGREE 276 · SOFT 30 · DISAGREE 35 · INVALID 12, in
   `_work\chapters-disagree.json` (`[{id, cls, first, firstSecondary, second, secondSecondary}]`,
   script `_work\compare-chapters.js`). Most confused: `perinatal`/`perinatal-rd` 5,
   `liver`/`neonatal` 3, `resp-bronch`/`respiratory` 3. Owed: Claude judges the 35 DISAGREE + 12
   INVALID (SOFT = keep the first sort), fixes `sa-chapters.json`.
2. Same blind sort for the 452 book ids: factory job
   `Tools\factory\jobs\queue\peds-sa-chapters-check-book-2026-10-11`, 0 results at the last look —
   it sat behind the pairs job. Outputs expected: `_work\compare-chapters-book.js`,
   `_work\chapters-disagree-book.json` (`cls` AGREE / SWAP / DISAGREE / MISSING). ⚠️ Factory facts
   measured 2026-10-11: ONE job at a time (single `machines\shift.lock`); `run` also runs whatever
   sits in `jobs\queue\` unless env `FACTORY_QUEUE` points at an empty folder (a run here re-ran 3
   old failures of `culture-photo-judge-2026-10-06`, no harm, $0); editing `job.json` redoes every
   item; seats `gemini-36-flash`, `gemini-37-flash`, `gemma-26b` time out, `gemini-35-lite` is
   over its daily cap, `work-text` answered in 1.3 s.
3. **Pictures CUT 2026-10-11 (maker: Claude helper); second look DONE on Codex 2026-10-11** —
   brief `_work\brief-10-check-pictures.md`, `_work\pics\check10\verdicts.jsonl`: 56 lines = all 56
   records / 53 ids, 50 distinct descriptions for 50 files, **every crop OK, no answer leak in any
   picture or `imgAlt`**. 3 "wrong picture for this question", all judged by Claude = **do NOT
   attach**: `pedsa-b9-16-3` and `pedsa-b28-8` (answer-only figures, already ruled out below) and
   **`pedsa-b18-7-3`** (new: Fig. 18.1 is the murmur chart of 18.6.1-5, cited only in its answer —
   the file `q-pd-sa-111.jpg` stays for `pedsa-b18-6-1..5`). **Fig. 2.7 text read off the picture
   settles pair n 299: `pedsa-b2-8-3` = SAME as `pedep2-mf1-15`, ruling written
   (`claude-rulings.json`, 18 rulings). FINAL: 284 book ids fold, 168 stay → 353 + 168 = 521 new
   entries. `stay-ids.json` (169) is now one too many — rebuild it at build time from
   `book-pairs.json` + `claude-rulings.json`; `q-pd-sa-12-1.jpg` becomes unused (leave the file
   out of the commit or delete only with the owner's yes).** `_work\pics\`:
   `stay-ids.json` 169 (fold set 283), `pictures.json` 53 ids / 50 files
   `app\assets\q\q-pd-sa-*.jpg`, all cropped (embedded images are CMYK), 460 px wide upscaled from
   345 px native. ⚠️ The maker looked at them on 7 contact sheets, NOT one by one — the
   independent checker must open each. No picture: `pedsa-b31-2` (other book), `pedsa-b9-16-3`
   (Table 9.1). ⚠️ Answer-only figures (printed with the answer, flagged in `note`): `b9-15-4`,
   `b9-16-3`, `b28-8`, and the answer figures of `b7-3`, `b28-2`, `b28-10` — Claude ruling: NOT
   attached as `image` (would give the answer away); leave them out of the entry. The stay list is
   provisional until the pair re-read (`check8\`) is judged. Original note:
   128 book items cite a figure; 18 of those cite figures in a different book (no
   picture, to be marked; ids in `_work\refute-book.md`). Cut only for items that stay as entries:
   `app\assets\q\q-pd-sa-<page>[-n].jpg`, every crop looked at in a helper, `imgAlt` modality and
   view only; `node tools\boot-check\image-check.js`.
4. Build `app\data\questions.peds.sa.js`: `bank:'selfassess'`, `module:'pediatrics'`, chapter from
   `sa-chapters.json`, answer = printed key, explanation verbatim, `objective` naming any secondary
   or out-of-course topic, `source` = `<file>.pdf p.<N>` + printed number. Matching sub-item stem =
   lead-in + scenario (18.6.1-5 are figure panels only). Written sets 1 and 2 are authored, not
   transcribed — record the origin per `reference.md` §4. Notes to carry in `explanation`: 17.4 key
   taken from the bold heading only; `pedsa-b10-12` and `pedsa-b10-7` have live look-alikes with a
   different key (`pedep-mf1-32`; `pedep-inf-43`, `pedep-mf3-48`, `pedep-neo-30`).
5. `alsoIn` edits to the three live Pediatrics files; parse probe before and after.
6. Verify: `node tools\check-all\check-all.js`, `node tools\bank-harness\validate-all.js peds
   --soft`, counts written + merged = printed, browser look (new chip, a two-pill question, a
   picture question), independent checker.
7. Close: `ledger.md`, `reference.md` bank map, `MEMORY.md` counts, archive; refresh the stale
   `_work\report-2.md`; commit with explicit paths, push to the private remote.

## How the helpers are run

Codex: `timeout -k 10 3000 codex exec -m gpt-5.6-terra -s workspace-write --skip-git-repo-check -C
"<repo>" -o "<_work>/last-N.txt" "<prompt naming the brief files>" < /dev/null >
"<_work>/codex-N.log" 2>&1`, in the background, one at a time. Every brief carries its own write
grant, and must hand Codex its data inside that grant — it will not open `app\data`.

## After task 1

Ask the owner, one at a time: restart the parked character work or something else first (Peds
papers 18-19 Oct)? · save last night's 12 unsaved files to git? · backup choice (paid daily export
vs free with no guarantee). The book is a published title: his owed rights attestation covers
whether its questions may sit on the live site.

## Changed since - 2026-10-11, book topic sort (second opinion)
- Factory job peds-sa-chapters-check-book-2026-10-11 (D:/claude os/Tools/factory/jobs/) ended INCOMPLETE:
  321 of 452 answered, 131 MISSING (quota exhausted twice, clustered in 22 id groups). Seat: work-text
  (groq ~281 calls, openrouter 40). Counts on the answered: AGREE 141, SWAP 1, DISAGREE 179.
- 56% disagreement is too high to trust the free seat; no case was checked by the helper.
- That is the second failed dispatch on this job: no third fleet try. Next rung = a Claude role
  (Sonnet, prompt opens ROUTE-OK) judging every disagreement and every missing item against the
  Pediatrics chapter list, writing content/peds/qb-pages/sa/_work/chapters-rulings.jsonl.
  Claude applies the rulings to sa-chapters.json by script; the step-7 checker samples the mapping.
- Compare script: _work/compare-chapters-book.js, output _work/chapters-disagree-book.json (311 rows).
- Editing that job's job.json again makes the factory redo every item.

## Changed since - 2026-10-11, topics settled, build dispatched
- Topic rulings DONE (Claude Sonnet role): _work/chapters-rulings.jsonl, 358 lines = 47 written-set
  + 311 book; final = first 146, = second 149, neither 63; no invalid chapter id. Finding: the FIRST
  sort had bulk errors (musculoskeletal sent to neuro-nm, skin to allergy, adolescent to mental).
- APPLIED by script _work/apply-chapter-rulings.js: sa-chapters.json now final (805 entries, 212
  moved, 51 chapters used, 227 carry `secondary`); the first sort is kept as
  sa-chapters.first-sort.json. Items 1 and 2 of "Still running / owed" are closed.
- Least-sure ten (for the step-7 checker): pedsa-b26-10, b28-5, b29-2, b29-6, b29-13-3, b25-10,
  b25-11-2, b28-13-2, b28-13-5, b30-1.
- BUILD dispatched to Codex (one clocked attempt), brief _work/brief-11-build.md, report
  _work/last-11.txt, log _work/codex-11.log. It writes ONLY content/peds/qb-pages/sa/_build/:
  build.js, questions.peds.sa.js (521), alsoin-plan.json, apply-alsoin.js (DRY unless --write),
  check.js, QUESTIONS.md. Nothing under app/ is touched by it.
- NEXT: read last-11.txt; run node _build/check.js myself; Claude refuter (different house from the
  Codex builder) checks keys/pages/chapters/fold list on a sample plus every QUESTIONS.md item;
  then Claude copies the file to app/data, runs apply-alsoin.js --write, parse probe, steps 6-7.

## Changed since - 2026-10-11, built, refuted, spliced, tests green (UNCOMMITTED)
- Codex build came back complete; Claude Sonnet refuter (different house) found 2 blockers, both fixed:
  (1) pedsa-b31-3 explanation ran on into the book's index, cut in staging by _work/fix-b31-3.js
  (19,250 chars removed); (2) pedsa-b25-2 lost its question figure because build.js dropped every
  picture carrying any note, filter narrowed to "answer explanation only" notes.
- Two more build.js edits by Claude: the authored marker on the 353 written-set entries now reads
  "Written for this bank — an authored question from Self assessment part N, not transcribed from a
  printed question bank." (the sets print their own explanations); `objective` names the secondary
  chapter by NAME and the out-of-course topic.
- Rebuilt: 521 = p1 165 + p2 188 + book 168; fold 284; pictures 48; _build/check.js PASS.
- SPLICED: app/data/questions.peds.sa.js (521). apply-alsoin.js --write tagged 585 live entries with
  alsoIn selfassess + the book citation in `source`: questions.peds.js 272, .ep.js 121, .ep2.js 192.
  Reconciliation: 805 printed = 353 written-set + 168 new book + 284 merged. Corpus 7,477; peds 2,248.
- tools/validate/counts.json: peds.sa 521. app/smoke.js: total 7477, selfassess in BANK_HEX.
- TESTS: check-all 4/4 PASS (boot 7477, 0 console errors; dist-check still reads the OLD dist, 6,956,
  rebuilt only at upload). validate-all hard checks PASS on peds, peds.ep, peds.sa. image-check
  CLEAN. bankOf( appears only inside banksOf.
- Tool gap found, not fixed: validate-all.js file regex has no digit, so it never opens
  questions.peds.ep2.js / ophtho.ep2.js (check-all's validate does count them).
- Unused pictures on disk (not to commit): q-pd-sa-12-1, -170, -172 + 3 more q-pd-sa (run
  image-check for the list) — figures of folded or excluded ids.
- Notes with no entry to live in (their ids folded) -> ledger: pedsa-b17-4 key from the bold heading
  only; pedsa-b10-12 look-alike pedep-mf1-32 differs in key; pedsa-b10-7 look-alikes pedep-inf-43,
  pedep-mf3-48, pedep-neo-30 differ in key. pedep2-car-35 prints "upper left", the book "upper right
  sternal edge": note only, key never moves.
- Known, left alone: option T cannot be chosen by keyboard (T toggles theme, boot.js:332); only
  pedsa-b15-10-4 and -6 have 20 options, keys I and R, click works. Superscripts in the three PDFs
  come from the text layer, not checked against page images.
- RUNNING: a Claude Sonnet browser look (headless Chrome, screenshots in D:/scratch 2026/sa-look/):
  chip count 1106, two-pill merged question, picture question, 20-option layout, authored marker.
- NEXT: read its report, fix what it finds; ledger.md + reference.md bank map + MEMORY.md counts;
  commit with explicit paths; push private. Live upload only on the owner's yes, never 17-19 Oct.

## Changed since - 2026-10-11, browser look PASS, saved to git
- Browser look (Claude Sonnet, harness D:/scratch 2026/sa-look/run.mjs): 7 of 7 PASS. Chip reads
  "Self assessment 1106" (= 521 + 585), filter count matches, merged question shows two pills
  (#5d4b8c, white text), pedsa-b25-2 figure renders 460x530 with a neutral caption, 20 options lay
  out cleanly at 1366x768 and 820x1180, authored marker shows, 0 console errors.
- ledger.md section 23, reference.md bank map and MEMORY.md counts written. MEMORY.md and
  progress/memory-archive.md are NOT in the commit: they also hold last night's unsaved notes,
  which wait for the owner's yes.
- Not committed on purpose: _work/check6/ (38 MB of page renders), _work/codex-*.log,
  book/all.bbox.html, _work/sa-book.before-18-7.js, the six unused pictures (q-pd-sa-12-1, -43,
  -59, -60, -170, -172).
- OWED, one job: `objective` on all 521 new entries is a filler built from the chapter name
  ("Test Pediatric emergencies."). The validator requires the field and every older entry has a
  real one. Fix = a factory job, one item per entry (stem, options, printed key, printed
  explanation in; one sentence naming what is tested out, from the printed text only), a script
  check, then a sample check by another house; write the result into a side map read by
  _build/build.js, rebuild, check.js, copy to app/data, check-all.
- Seen in the look, existing styling, not this job: wrong-answer verdict is pink on pink (low
  contrast); the mascot's tip bubble covers the figure caption at 1366x768.

## Changed since - 2026-10-11, the six unused pictures
- Three now used: `q-pd-sa-12-1` on live `pedep2-mf1-15`; `q-pd-sa-59` on `pedsa-b9-15-4` and
  `q-pd-sa-60` on `pedsa-b9-16-4`, both with `imgSpoils` (blurred until answered).
- Three left on disk, unused: `q-pd-sa-43`, `-170`, `-172` (answer figures of entries that already
  show a question-side figure; one picture per question). Using them needs a second-picture slot
  in the app, not built.
- Checks: build 521, pictures 50; check-all 4/4; image-check CLEAN; Codex check 3/3 PASS
  (`_work/check-three-attaches.md`). Not looked at on screen after this change; the blur path is
  the one already live for the ophtho entry that uses it.
