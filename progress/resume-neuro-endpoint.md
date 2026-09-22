# Neuro Endpoint — resume state

**Owner: this chat.** Separate book from the neuro HOUSE bank (Grade Gain, CLOSED 2026-09-17 at
493, see `resume-neuro.md`). Method/schema/fold conventions carry over from there; this file is
the endpoint-only state.

**Files this chat may write:** `app\data\questions.neuro.js` (bank `endpoint` entries only),
`content\neuro\qb-pages\np-ep-*.array.js` / `*.draft.js`, `app\assets\q\q-np-ep-*.jpg`,
`progress\resume-neuro-endpoint.md`.

---

## 0. Source, measured 2026-09-17

| | |
|---|---|
| File | `Semester 8\Neuro\Questions\Neuro endpoint.pdf` |
| Pages | **2190**, A4 portrait, image-only scan (`pdfinfo` measured) |
| Cover (PDF p.1) | "Neuroscience AlexMed Endpoints" — confirms `bank:'endpoint'`, no house/gradegain branding |
| Format | **one question per page, its answer on the very next page** (verified pp.16-20) — not
  the dense multi-Q-per-page layout the house bank used |
| Page offset | printed page = PDF page, at least across pp.1-20 (checked no further yet —
  ⚠️ ophtho's endpoint had an unpinned flip deep in the file; re-verify per chapter, don't assume
  it holds to p.2189) |

## 1. Chapter map — from the TOC (PDF pp.2-3), by printed page range

Neurology: Localization 6-51 · Stroke 52-111 · Epilepsy 112-199 · Headache 200-282 ·
Multiple sclerosis 283-353 · Hemiplegia+paraplegia 354-372 · Ataxia+low back pain 373-425 ·
Movement disorders 426-494 · CNS infection 495-552 · Neuromuscular disorders 553-637 ·
Cranial nerve disorders 638-677 · Coma 678-726.

Psychiatry: Symptomatology 727-810 · Anxiety disorders 811-906 · Mood disorders 907-1002 ·
Somatic disorders 1003-1089 · Child psychiatry 1090-1124 · Schizophrenia 1125-1219 ·
Emergency 1220-1253 · Dementia+Delirium 1254-1311 · Substance-related disorders 1312-1344 ·
Psychopharmacology 1345-1423.

**Model Final Exams 1-6, pp.1424-2189 (766 pages) — user decision 2026-09-17: DEFERRED.**
Chapters only for now, same treatment as neurosurgery in the house bank. Do not start these
without the user re-raising it.

**These are book-topic ranges, not app chapters.** File each question per the house bank's own
§5 filing rules in `resume-neuro.md` (Localization/exam-technique/tracts → `nr-intro`,
cranial-nerve-specific → `nr-cranial`, etc.) — the endpoint's 22 topics are close to a 1:1 remap
of the house bank's 23, not a new taxonomy.

**Page-range size is not question count** — Localization's 46 pages measured out to only 18
questions once cover/notes/divider overhead (10 pages) was subtracted. Measure every chapter by
reading its answered pages, per the standing rule; do not project from the TOC range alone.

## 2. Id scheme — user decision 2026-09-17

**`npep-<chapter-token>-<n>`**, one token per book-topic, `<n>` = the printed question number
within that topic (each topic restarts its own numbering, confirmed for Localization: Q1-Q18).
E.g. `npep-loc-1` … `npep-loc-18`. Chapter tokens, in TOC order: `loc`, `stroke`, `epilepsy`,
`headache`, `ms`, `hemi`, `ataxia`, `movement`, `cns-inf`, `neuromusc`, `cranial`, `coma`,
`symptom`, `anxiety`, `mood`, `somatic`, `child-psych`, `schiz`, `emergency`, `dementia`,
`substance`, `pharm`. (This is the *staging* token for filenames/ids only — the app `chapter`
field is still one of the 27 fixed neuropsych chapters per §1 above, never one of these.)

**Image naming:** `q-np-ep-<PDF page>.jpg` — the `ep` token is load-bearing, per the house bank's
own naming note (`q-np-gg-<page>.jpg` would collide with this book's own page numbers otherwise).

## 3. Vision route — measured 2026-09-17

Codex solo (`codex exec -i`): **dead**, OpenAI usage limit, resets ~2026-09-20.
Gateway `auto/vision` (`codex-gw.sh`): **dead**, 429 on the first real image call (text-only pong
on the same route worked fine — the vision pool specifically is rate-limited).
**Gemini by key worked** — `gemini-3.6-flash` (the `2.5-flash` id in old references is retired,
404s). Called directly via a small node script (`https` + `x-goog-api-key` header, image never
enters Claude's own context — only the returned text does), not through the `GEMINI_API_KEY`
query-string form. Script pattern: read image(s) as base64, POST to
`generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent`. Batching
~8-10 page images per call read cover+TOC+structure reliably in this session.

## 4. Chapter 1 — Localization — CLOSED 2026-09-17

**17 entries, not 18** — `npep-loc-1` .. `npep-loc-17`, staged by ROUTE-OK Claude lean-drafter
(gateway rungs 1-3 all 429/dead on live probe that day), spliced into `app\data\questions.neuro.js`
(`Q_NEURO`): 493 -> 510. Verified: `node --check` clean, load-and-count `{gradegain:493,
endpoint:17}`, 0 holes, 0 dupe ids, `tools\qb-pipeline\validate.js neuro` clean for this batch (23
pre-existing FAILs on `npqb-nr-228..250`, chapter `nr-demyelinating`, all house/gradegain — none
`npep-loc-*`, out of scope, house bank not reopened).

Count anomaly (18 expected, 17 real): pp.25-26 print two supplementary reference tables (Aphasia/
Dysarthria/Dysphonia; Bulbar vs Pseudobulbar palsy) between Q5's question page and its answer page,
not a separate question — this consumed the page-slot that had been provisionally counted as Q6.
p.52 confirmed as the Stroke chapter's title/divider slide, no question — chapter boundary holds at
Q17 (pp.50-51).

Filing: `nr-cranial` x4 (`npep-loc-1,3,7,14`) · `nr-hemi` x10 (`npep-loc-2,4,6,8,9,10,11,12,13,15`) ·
`nr-intro` x3 (`npep-loc-5,16,17`). `npep-loc-14` (LMN facial palsy + ipsilateral cerebellar signs,
no limb-weakness component) filed `nr-cranial` not `nr-hemi`, accepted as-is — consistent with how
the single-cranial-nerve-pattern items (`-1/-3/-7`) were filed.

Key adjudications (printed key kept, never disputed, per the standing rule):
- `npep-loc-11`: stem names a cerebellar tumor + contralateral limb weakness, keys "Left motor
  cortex" — explanation reasons the weakness must come from a separate corticospinal lesion, since
  a cerebellar lesion alone gives ipsilateral not contralateral signs.
- `npep-loc-13`: **cross-bank key contradiction**, recorded not corrected. Near-verbatim same
  stem/options as live house-bank `npqb-nr-92` (`questions.neuro.js`, chapter `nr-hemi`) — this
  entry keys "Brainstem", the house entry keys "Cervical cord". Both keys transcribed and kept
  exactly as each source prints them; the contradiction is documented in `npep-loc-13`'s own
  `explanation` only. **`npqb-nr-92` itself is NOT edited** — the neuro house bank is closed and
  stays closed, per the original task's scope fence.

Near-duplicates left unfolded (correct per convention — none is an exact fold shape, cross-bank
folds are never a drafting subagent's call): `npep-loc-9`~`npqb-nr-94`, `npep-loc-10`~`npqb-nr-106`,
`npep-loc-12`~`npqb-nr-89`. `npep-loc-8` and `npep-loc-15` are a within-batch Guillain-Barre-pattern
near-duplicate pair, also left unfolded.

Committed: staging+draft, splice, journal (hashes: see `git log --oneline -5`).

## 5. Next concrete action

**Chapter 2, Stroke, printed pp.52-111** — measure the true question count by reading answered
pages (do not project from the 60-page TOC range; Chapter 1's 46-page range was only 17 questions
once overhead was subtracted). Re-probe the routing ladder fresh before dispatching — rate limits
measured 2026-09-17 may not hold on a later day. Same pattern: brief file, dispatch, `.array.js` +
`.draft.js`, Claude-only final read + splice + commit.

**Dispatch attempt 2026-09-17 03:00, killed 3.5h later — vibe hangs with no timeout, no error.**
Brief: `content\neuro\qb-pages\np-ep-stroke.brief.md`. Render phase worked fine: pages 53-120
rendered to `content\neuro\qb-pages\_tmp-stroke\` (confirms Epilepsy boundary sits past printed
p.111, consistent with TOC's p.112). Then `vibe -p "..." --trust --auto-approve --max-turns 200
--output text` sat at ~0 CPU (kernel 15ms, user 0ms via `wmic`) for 3.5 real hours, task output
file stayed empty the whole time, no draft/array files ever written. Flags confirmed correct
against `vibe --help` — not a flag typo. Likely a blocking network/model call with no internal
timeout (Mistral API or the Gemini vision script hung mid-call). Killed via `taskkill`.
**Before retrying vibe: add `--max-price` or `--max-tokens` so a hang errors out instead of
running forever** — a background dispatch's exit-0 does NOT mean it ran (see the earlier
`$TMPDIR`-empty failure same day) and a "completed"/"failed" task-notification only fires on
actual process exit, which a true hang never reaches on its own.
**`_tmp-stroke` renders (pp.53-120) are still on disk — reuse them, do not re-render** before
trying again or switching to a different fleet seat.

**Dispatch attempt 2026-09-18, rung 3 (opencode+OmniRoute), Codex excluded per owner (dead till
2026-09-20).** Gateway was found dead at session start (port 20128 held by a stale unresponsive
PID) — killed it, relaunched clean, confirmed alive via a 401-auth probe (not a hang). Model
`omniroute/auto/coding`. Brief updated to point at rung 3 and to reuse `_tmp-stroke` renders
without re-rendering. Dispatched as background task `bgcs9llde`, output at
`…\ae5a60c4-9fb5-41d7-af96-d224ff70760d\tasks\bgcs9llde.output`. **Check this task's real
progress the same way as the killed vibe attempt — task exit/notification status alone is not
proof of work; check `np-ep-stroke.array.js`/`.draft.js` actually exist and have content before
trusting a "completed" status.**

**Result: exit 0, but no staging files produced — confirmed, `.array.js`/`.draft.js` don't
exist.** Real progress: located Stroke's first question block at printed p.65 (not p.53 — pp.53-64
are intro/overview slides, consistent with Chapter 1's overhead pattern). Blocker: Gemini free
tier exhausted (`RESOURCE_EXHAUSTED`, 20 req/day cap on `gemini-3.6-flash`, already used up this
session before this dispatch even ran) — OpenRouter/Groq vision also tried, unavailable. **The
agent also broke the shared `tools\gemini-vision\ask_gemini_multi.js`**, blind-guessing dead model
ids (`gemini-1.5-flash`, `-latest`, `-pro`, all 404) and adding an obfuscated
base64-decoded-property `process.env` read with no legitimate reason — reverted by hand, confirmed
clean (`git diff` empty). **Lesson: a fleet seat hitting a real blocker (quota) may still
"successfully" edit unrelated shared tool files while flailing — diff shared tools after any
dispatch, not just the deliverable.**

**Correction: p.65 is the "Questions" section-divider slide, not Q1 — Q1 actually starts p.66**
(the earlier note above was wrong, based on the failed dispatch's unverified partial read).

## 6. Chapter 2 — Stroke — CLOSED 2026-09-18

Vision step done via OmniRoute gateway's own Gemini seat (`Tools\omniroute\transcribe-pages.mjs`,
model `gemini/gemini-3.1-flash-lite`, separate quota pool from the direct-key script) — pp.65-120
transcribed clean, 56/56, no 429s. Staging (verify-against-image + schema draft) done by a
ROUTE-OK Claude lean-drafter (ran in the main checkout, not a worktree — an earlier worktree-
isolated attempt failed cleanly since untracked staging inputs don't exist in an isolated copy).

**23 entries, not 24** — `npep-stroke-1..12,14..24` (the source's own printed numbering skips
"13": Q12 on pp.88-89 is followed directly by "14." on pp.90-91, no page 13 exists). Spliced into
`app\data\questions.neuro.js` (`Q_NEURO`): 510 -> 533. Verified: `node --check` clean, load-and-
count 23 stroke entries, 0 dupe ids, 0 id collisions against the live bank,
`tools\qb-pipeline\validate.js neuro` clean for this batch (same 23 pre-existing FAILs on
`npqb-nr-228..250`, chapter `nr-demyelinating`, all house/gradegain, unrelated).

Chapter boundary: p.65 is the Stroke "Questions" divider (not a question), Q1 starts p.66; p.112
confirmed as the Epilepsy title/divider, last Stroke item is Q24 (p.111) — printed-page=PDF-page
offset still holds. All 23 filed to `nr-stroke` (confirmed real, live, distinct neuropsych chapter
id at `app\data\modules.js:240`, already used by house-bank `nr-stroke` entries too).

Transcription notes, printed as-is per the never-dispute-a-key rule: Q5 prints the BP unit as
"mmg" (kept verbatim, noted likely "mmHg"); Q6's stem reads "sed" (kept verbatim, noted likely
"used"); Q8 is the only 5-option question in this chapter. Q23's stem/explanation read as an
uncorrected editorial carryover from Q9 (both are the only rheumatic-heart-disease cases in this
chapter, 14 questions apart) — transcribed exactly as printed, carryover noted in `explanation`,
key not disputed.

Cross-bank near-duplicates (same fact, different phrasing — not an exact fold shape, left
unfolded per the Chapter 1 precedent and the "SIX fold shapes are all within-bank" rule):
`npep-stroke-10`~`npqb-nr-36` (AF as top embolic risk factor), `npep-stroke-14`~`npqb-nr-97`
(DM+HTN+sinus rhythm -> thrombotic stroke), `npep-stroke-16`~`npqb-nr-45` (4.5h tPA window),
`npep-stroke-20`~`npqb-nr-55` (non-contrast CT first). Confirmed real house-bank entries at those
ids, same `nr-stroke` chapter, all `bank:'gradegain'`.

Committed: staging+draft, splice, journal (hashes: see `git log --oneline -5`).

## 7. Chapter 3 Epilepsy — CLOSED 2026-09-18

**38 live** (`npep-epilepsy-1..9,11..28,30..40`), `Q_NEURO` 533 -> 571, staging `827b422`, splice
`9d25bb4`. Printed pp.112-199: p.112 divider, pp.113-119 theory slides,
p.120 "Questions" divider, Q1 p.121, last question Q40 p.198 (answer p.199), Headache divider p.200.
40 printed - 1 skipped number (29) - 1 fold (Q10 folded into Q12: same stem, options reordered, same
key; Q10's printed box carried in Q12's explanation, its citation in Q12's `source`).

Routing that worked: gateway `transcribe-pages.mjs` gave 59/90 pages first pass (503 "capacity busy" is
transient, not the 429 the script stops on); a retry script re-sending only pages with no `.txt`, 10/20/40 s
backoff, got 89/90. p.177 kept failing HTTP 400 "Base64 decoding failed" — the drafter read `p-0177.png` by
eye. Three parallel `lean-drafter` parts (A 112-142, B 143-172, C 173-201), then an Opus refuter on 16
entries (PASS, all keys match the highlighted option). Render names are FOUR-digit `p-0NNN.png`.

Defective keys, printed key kept and noted in `explanation`: Q9 (first unprovoked nocturnal GTC, key "wait for
the second attack"), Q23 (aura only, key complex partial). Q36 keys IV diazepam because its option set has no
lorazepam (Q27 keys IV lorazepam). Q3 (syncope) and Q8 (ECT seizure confirmation) are off-topic but sit in this
section; filed to `nr-epilepsy`. Within-batch near-duplicates left unfolded (reworded stems): 1~14, 4~24, 16~25,
27~36, 32~38. Cross-bank, left as two entries and noted in `source`: `npep-epilepsy-7` = `npqb-nr-176` (identical
stem, options, key), `npep-epilepsy-37`~`npqb-nr-157` (reworded). Sweep A-F: only those two house-bank hits.

Left on disk untracked (delete permission was refused, not committed): `content/neuro/qb-pages/_epilepsy-ocr/`
(renders + OCR) and `np-ep-epilepsy.draft-A/B/C.js` (intermediate parts). Safe to delete.

## 8. Next concrete action

**Chapter 4, Headache, printed pp.200-282** (Headache divider p.200 confirmed; p.201 is the theory slide
"Types of Headache"). Re-probe the routing ladder fresh before dispatching (Codex excluded till
2026-09-20 per owner). Same pattern: brief file, three parallel `lean-drafter` parts, one merged
`.draft.js` (bare entry run — NO `var X = [` wrapper, `splice-safe.js` brackets it itself), Claude-only
final read + fold + splice + commit. Measure the real count from the answered pages, not the TOC range.

**Route that worked for Stroke (reuse it):** (1) `node "D:/claude os/Tools/omniroute/transcribe-pages.mjs"
"<Neuro endpoint.pdf>" <first> <last> "<outdir>"` — gateway Gemini seat, 180 s timeout per page, stops
cleanly on 429; (2) `lean-drafter` with a prompt opening `ROUTE-OK: <why>`, run in the MAIN checkout —
never `isolation:"worktree"` (a worktree holds only committed files; briefs/OCR/renders are untracked,
so the agent sees nothing). Brief tells it to check every OCR page against its PNG, write `.array.js` +
`.draft.js`, delete the OCR/render folders. Do not use `ask_gemini_multi.js` or vibe (see above). Diff
`tools\` after any fleet dispatch. Bash tool eats backslashes — use forward slashes in node/git paths.

Remaining after Epilepsy: Headache, Multiple sclerosis, Hemiplegia+paraplegia, Ataxia+low back
pain, Movement disorders, CNS infection, Neuromuscular disorders, Cranial nerve disorders, Coma,
Symptomatology, Anxiety disorders, Mood disorders, Somatic disorders, Child psychiatry,
Schizophrenia, Emergency, Dementia+Delirium, Substance-related disorders, Psychopharmacology.
Model Final Exams stay deferred/untouched.

## 9. Session note 2026-09-22 (written at /prep, read before section 8)
- Bank split, measured from `app/data/questions.neuro.js`: 571 entries = gradegain 493 + endpoint 78, house 0. Neuro has NO House bank; House and Grade Gain are two separate banks, and the neuro material carries Grade Gain and Endpoint only. Any "House bank (Grade Gain)" wording elsewhere in the neuro notes is wrong.
- `alsoIn` is empty on all 571 entries, so no Grade Gain / Endpoint cross-bank fold pass has run for neuro. Owed after the endpoint chapters, same convention as ENT and ophtho (survivor keeps its id, gains the cite in `source`, `alsoIn` is the union). Whether twins exist is unmeasured.
- The route in section 8 predates the 2026-09-20 ladder (root `CLAUDE.md` section 9); the Codex exclusion "till 2026-09-20" has expired. Re-probe first with `node Tools/omniroute/probe.mjs`. Bulk page reads: a script making single-shot calls to the `work-vision` / `work-text` gateway combos (`Tools/omniroute/stage-pages.mjs` pattern). Drafting: a seat `seats-alive.json` marks capable (Codex on its own login). Claude roles, cheap subagents with a `ROUTE-OK:` prefix, only as the last resort. The main chat never does the labour. Owner order, 2026-09-22: "use codex, the fleet, omniroute, if it comes to claude as a last resort use cheap subagents, never use the main chat". Never `auto/*`; two failed dispatches means a Claude role; Codex never checks Codex.
- Neuro stays LOCKED in the shipped app (`LOCKED_MODULES=['neuropsych']` in `app/data/modules.js`, `LOCKED_SUBJECTS=['neuro']` in `tools/build-launch.js`). Unlocking means editing both, rebuilding, `node tools/dist-check.js`, and the owner redeploys `dist`. Neuro exam 3 Oct 2026.

## 10. Chapter 4 Headache — CLOSED 2026-09-22

**27 live** (`npep-headache-1..4,6..28`), `Q_NEURO` 571 -> 598. Printed pp.200-282: p.200 divider, pp.201-223
theory slides, Q1 p.224 ... Q28 p.281 (answer p.282); pp.220-221 are a lecture slide pair, not a question.
28 printed - 0 skipped - 1 fold (Q5 folded into Q3: same stem, options reordered, same key; both printed boxes
carried in Q3's explanation, Q5's citation in `source`). Within-batch near-duplicates left unfolded: 1~9, 2~28.
Cross-bank, left as two entries and noted in `source`: Q2 = `npqb-nr-132` (identical), Q27 ~ `npqb-nr-129`, Q23 ~
`npqb-nr-123`, Q11 ~ `npqb-nr-130` (reworded). Defective keys: none found.

Route (first run of the NEW script pipeline, section 11): Codex (`gpt-5.6-terra`, own login) read every
question + answer page image; Gemini via gateway `work-vision` read the marked option independently (28/28 agree
with Codex); an Opus refuter checked the rows and its defects were hand-fixed (Q12 two outside-fact tags, Q9
footer). Sweep A-F: `tools/qb-pipeline/sweep.js`. Splice `splice-safe.js --go`, validate.js only the 23 known
`npqb-nr-228..250` failures, boot-check 0 errors (5902/117, neuro locked).

## 11. Script pipeline for the rest of the endpoint (built 2026-09-22, all in `tools/bank-harness/`)
Whole book rendered + Tesseract-OCR'd once: `content/neuro/qb-pages/_ep-work/` (2190 png + txt, untracked,
OCR = SEARCH INDEX only, never a clinical source). Per chapter: `npep-run.mjs <queue.json> <token...>` runs
`npep-pairs.mjs` (question page + answer page from OCR option lines and text similarity; soft pairs = no
options read, Codex may reject with `notQuestion`) -> `npep-codex-rows.mjs` (K parallel Codex drivers, one
question each, reads the PNGs, reports `printedNumber`) + `npep-keyread.mjs` (independent Gemini key read) ->
`npep-build.mjs` (draft + machine checks in `<token>/checks.md`). `npep-finish.mjs` re-runs key reads that hit a
gateway 503 and rebuilds. Queue = `npep-queue.json` (24 entries, incl. Model Final Exams `fe1..fe6`, tokens
map to ids `npep-<token>-<printed n>`). Work folders: `_ep-work/<token>/` (pairs.json, pairs.log, rows/,
keyread.json, checks.md, summary.json); drafts `content/neuro/qb-pages/np-ep-<token>.draft.js`.
Every draft still needs: independent checker on flagged rows, sweep, fold decisions, header, splice, commit.
Model Final Exams are IN SCOPE (owner 2026-09-22), superseding "deferred" above.

## 12. Chapters 5-6 Multiple sclerosis + Hemiplegia and paraplegia — CLOSED 2026-09-22
Pipeline of section 11, first chapters through it. `Q_NEURO` 598 -> 626 (endpoint 105 -> 133).
- **Multiple sclerosis** printed pp.283-353: 24 entries `npep-ms-1..24`, Questions p.305-353. Pages 283-304 lecture slides
  (p.304 has no OCR text, not visually confirmed as a slide, owed if anyone doubts it); p.335 is a lecture slide, not a
  question. No fold. Cross-bank, left as two entries and noted in `source`: Q24 = `npqb-nr-239`, Q3 = `npqb-nr-236`.
  Q13 ~ Q14 (reworded stem, same options reordered, same key) left unfolded, cross-referenced in `source`.
- **Hemiplegia and paraplegia** printed pp.354-372: 4 entries `npep-hemi-1..4`, Questions p.365-371. Sweep zero
  candidates (4 x 598 compared). Codex filed Q3 (cervical hemicord, Brown-Sequard) in `nr-intro`; moved to `nr-hemi`.
- Checked: Codex row vs Gemini full transcription (key, stem, options, box) agrees on all 28; only the noisy
  OCR-overlap flag remained (Codex text fully inside OCR, OCR has extra page text). No refuter run: nothing left to
  refute after the second-house read. Splice `splice-safe.js --go`, validate.js only the 23 known failures,
  boot-check 0 errors (5902/117, neuro locked).
- **BUG FOUND AND FIXED (2026-09-22):** `npep-build.mjs` looked the Gemini key read up by the PRINTED number, but
  `keyread.json` is keyed by PAIR key (row file name). Where printed != pair number (mood, movement, fe2) it compared
  each row against its neighbour and raised false KEY DISAGREE / stem-overlap flags. Now keyed by row file name.
  Any `checks.md` built before this fix is stale; rebuild with `npep-finish.mjs`.
- **State of the run:** 288 rows staged in `_ep-work/` for ataxia, movement, cns (10/19), sympt, anx, mood, fe1, fe2.
  Codex hit its usage limit ~02:29 Cairo, resets 04:03. Gateway `work-vision` (Gemini flash-lite free) is quota-
  exhausted after the key-read passes, so 83 rows have no independent key read yet; rerun `npep-finish.mjs` when
  it recovers. `NPEP_BACKEND=gw` in `npep-codex-rows.mjs` stages rows over the gateway instead of Codex (untested past a 429).
