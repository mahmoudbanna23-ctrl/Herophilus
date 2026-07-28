# Herophilus — medical question bank & revision app

A no-build web app for revising a 2nd-term medical syllabus at Alexandria University. Question bank, high-yield theory notes, study schedule, spaced repetition, and Google-account sync across devices.

Named after Herophilus of Alexandria, who performed the first systematic human dissections there around 300 BC.

---

## Live

| | |
|---|---|
| **App** | `https://steep-feather-4c9b.mahmoud-banna23.workers.dev` |
| **Host** | Cloudflare Workers (static assets, drag-and-drop deploy) |
| **Firebase project** | `ward-round-e4822` (Spark/free plan) |
| **Deploy** | Cloudflare dashboard → worker → **New deployment** → drop the `app\` folder |

Drop the whole `app\` folder — it contains `index.html` and the `data\` folder it loads. The entry
point must stay named **`index.html`** so the bare URL works.

---

## Architecture

**An HTML shell plus plain data files.** No build step, no dependencies, no bundler. CSS and the entire application are inline in `app\index.html` (~198 KB); content lives in `app\data\*.js`.

```
app\
├─ index.html              HTML, CSS, and one inline <script> — all the logic
├─ assets\                 module artwork and the Herophilus medallion (~910 KB)
└─ data\
   ├─ modules.js           MODULES — the syllabus taxonomy
   ├─ schedule.js          SCHEDULE — the default study plan
   ├─ questions.{ent,peds,ophtho,neuro}.js
   ├─ cases.{ent,…}.js     free-text cases (type:'case')
   ├─ questions.js         aggregator → QUESTIONS (MCQs + cases, shuffled)
   ├─ theory.{ent,peds,ophtho,neuro}.js
   ├─ theory.js            aggregator → THEORY
   └─ fonts.js             Cinzel + EB Garamond, base64 — loaded from <head>,
                           before the stylesheet, NOT with the other data files
```

This was deliberate: it must run from a `file://` download, from any static host, and offline. The only network dependency is the Firebase SDK, loaded from CDN at runtime and **fully optional** — the app degrades to local-only storage if it fails.

**Do not introduce a framework or a build pipeline** without a strong reason. Being buildless is what makes this deployable by a non-developer.

### How the data files load

They are `<script src>` tags before the inline script — **classic scripts, not ES modules**, because modules are CORS-blocked over `file://` and classic scripts are not. A top-level `const` in a classic script lands in the shared global lexical scope, so the application reads `QUESTIONS`, `THEORY`, `MODULES` and `SCHEDULE` with no import machinery and no change to any application code.

Per-subject files use `var`, so the aggregators can read them off `window` and degrade to an empty list if one is missing instead of throwing:

```js
const Q_ALL  = [].concat(window.Q_ENT||[], window.Q_PEDS||[], window.Q_OPHTHO||[], window.Q_NEURO||[],
                         window.C_ENT||[], window.C_PEDS||[], window.C_OPHTHO||[], window.C_NEURO||[]);
const THEORY = Object.assign({}, window.T_ENT||{}, window.T_PEDS||{}, window.T_OPHTHO||{}, window.T_NEURO||{});
```

Free-text cases sit in the **same** array as the MCQs, so the quiz engine, SRS, search and progress counters pick them up with no special casing. `QUESTIONS` is then `Q_ALL` **shuffled by hashing each id** (FNV-1a plus a murmur3 finalizer) rather than by `Math.random()`: the order is stable across reloads and across devices — so cloud-synced progress lines up — and a question added later lands in the middle rather than on the end, so no module ever needs re-shuffling when it is finished.

Load order matters: per-subject files before the aggregators, and all of `data\` before the inline script.

**Superseded:** the app was previously one 318 KB file built by a Python script that injected questions into an `app_template.html` placeholder. Python is not installed on the working machine, so that build step was dead. The split replaced it — adding a subject's content is now an isolated file rather than surgery inside a 155 KB single line. The pre-split app is kept at `archive\index.html.2026-07-26.built`.

---

## Data structures

### `QUESTIONS` — array, concatenated from the per-subject files

```js
{
  id: 'entqb-32',                 // unique; prefix = source bank
  bank: 'gradegain',              // 'endpoint' | 'house' | 'gradegain'
  module: 'ent',                  // must match a MODULES id
  chapter: 'ent-csom',            // must match a chapter id in MODULES
  stem: 'A 34-year-old man...',   // markdown: **bold**, tables
  options: ['...', '...'],        // 2–5 strings
  answer: 1,                      // 0-based index
  explanation: '...',             // markdown; UWorld style
  objective: '...',               // one-line takeaway
  source: 'ENT QB p.44'           // file and page
}
```

**Every module draws on three commercial banks**, and `bank` names which one a question came from — the app shows it on the question and filters by it. Id prefixes: `entqb-`, `enthd-`, `entep-`, `peds-`, `opmcq-`, `opqb-`, `npqb-`.

| `bank` | On screen | Colour |
|---|---|---|
| `endpoint` | Endpoint | `#9a6b1f` bronze |
| `house` | House | `#2f6b8f` aegean |
| `gradegain` | Grade Gain | `#8f3f5c` madder |

### Free-text cases — same array, `type:'case'`

Some sources print a vignette and a diagnosis with **no options**. Forcing those into the MCQ shape would mean inventing distractors, so they carry `type:'case'` instead and the learner types the diagnosis:

```js
{
  id:'entep-case-18', bank:'endpoint', module:'ent', chapter:'ent-csom', type:'case',
  stem:'A 55-year-old diabetic female...',
  answer:'Left CSOM – unsafe type (cholesteatoma) complicated with petrositis',  // source's own, verbatim
  keys:[                                          // what the typed answer must contain
    {label:'Unsafe CSOM / cholesteatoma', terms:['unsafe','cholesteatoma','atticoantral','csom']},
    {label:'Petrositis (Gradenigo)',      terms:['petrositis','gradenigo','apicitis']}
  ],
  explanation:'...', objective:'...', source:'... p.750 (Case 18)'
}
```

Grading is on **concepts, never wording**: input is normalised, each key matches if *any* of its `terms` appears, and single-word terms tolerate typos by Levenshtein distance. Score is `got/total`. Write `terms` generously — abbreviation, full name, common misspellings and the clinical synonym.

### `MODULES` — the syllabus taxonomy

```js
{
  id:'ent', name:'ENT', icon:'ear', color:'var(--ent)', hex:'#b4472f',
  groups:[ { name:'Ear', chapters:[ ['ent-csom','CSOM and complications'], ... ] } ]
}
```

**104 chapters** across 4 modules — ENT 30, Ophthalmology 26, Neuropsychiatry 27, Pediatrics 21; counted from `modules.js` on 2026-07-28, matching the last real `file://` boot. (An earlier draft of this file said 94; that was wrong. The count was 114 until split topics — Glaucoma 1/2, Cataract 1/2, Rhinitis 1/2 and seven others — were merged into single chapters on 2026-07-26.) Chapters with no questions render greyed-out but visible — deliberate, so the syllabus shape is always apparent.

### `THEORY` — high-yield notes, keyed by chapter id

```js
'emergencies': {
  intro: 'markdown — how examiners test this chapter',
  sections: [{
    id: 'em-shock',
    h:  'Compensated vs decompensated shock',
    w:  'must' | 'high' | 'know',        // exam weight → colour coding
    body: 'markdown',
    table: { head:[...], rows:[[...]] },  // optional
    flow:  { title:'...', steps:[...] },  // optional, see below
    qs: ['p1-32']                         // linked question ids
  }]
}
```

**Flowchart step kinds:**
```js
{k:'step',     t:'title', n:'note'}
{k:'alert',    t:'title', n:'note'}                 // red — outcome-changing
{k:'decision', t:'question', yes:'...', no:'...'}   // yes/no branch
```

`qs` drives **bidirectional linking**: each section gets a *"Test yourself"* button, and each question gets a *"Read the notes on this"* banner. `qTheory(qid)` builds the reverse index lazily.

### `SCHEDULE` — the default study plan

`[date, tagId, label, mainText, pedsText]`, normalised at runtime by `defaultSchedule()` into:

```js
{ date:'2026-07-25', rest:false, items:[{label, text, hex}] }
```

Users edit their own copy, stored in `S.schedule`. `activeSchedule()` returns `S.schedule || defaultSchedule()`.

---

## State & storage

```js
S = {
  answers:{qid:{pick,ok,at,conf}}, srs:{qid:{lvl,due}}, hl:{qid:[{s,e,c}]},
  flags:{}, conf:{}, sched:{'date|itemIndex':'done'|'missed'},
  schedule:[...] | null, days:{iso:true}, updatedAt: 0
}
```

### Storage keys — **do not rename**

| Key | Contents |
|---|---|
| `wardround.profiles` | profile list (name, avatar, PIN) |
| `wardround.v3.<profileId>` | per-profile state |
| `wardround.lastprofile` | last used |
| `wardround.v2` | legacy — migrated on first load |

The `wardround.*` prefix is legacy from before the rename. **Renaming these orphans every existing user's progress.** They're invisible to users; leave them.

### Sync

Firestore document per user at `users/{uid}`, holding `{state: JSON.stringify(S), updatedAt}`.

- `pullCloud()` on sign-in → `mergeStates()` → save locally
- `schedulePush()` debounces 1.2 s after every `save()`
- **Merge is field-level, not last-write-wins.** Answers merge per question by their `at` timestamp; flags/days/highlights union; `schedule` takes the newer document. Answer q5 on the laptop and q12 on the iPad and both survive.

### Security rules (already published)

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

---

## Features

**Questions** — chapter → quiz flow, keyboard-driven (A–E, Enter, ←/→), confidence rating, flag, jump navigator with a colour-coded status grid (**J**).

**Highlighter** — 4 colours + eraser, persists per question as character offsets, survives re-render and reload. Keys **1–4**, **0** for eraser. `carve()` handles overlaps; `paint()` walks text nodes so highlights span `<strong>`/`<em>`/`<p>` boundaries without corrupting the text.

**Spaced repetition** — wrong answers *and* answers marked "guessed" enter a review deck at 1/3/7/21/60 days. Correct → advance a step; wrong → reset.

**Theory** — continuous scrolling document per lecture, numbered sections, colour-coded by exam weight, table of contents with jump links, and a **print stylesheet** for Save-as-PDF.

**Schedule** — per-subject done/missed markers. Missed work moves to a catch-up slot on a free/rest day; **the rest of the plan never shifts**. A separate Rescheduled page lists only what moved and where it landed. Fully editable per user.

**Profiles** — Netflix-style picker, emoji or uploaded photo avatar, optional PIN (cosmetic, not security — client-side and bypassable; labelled as such in the UI).

**Also:** search across questions *and* notes, timed mock exams by module, progress export/import, streak counter.

---

## Status

Counted from `app\data\` on 2026-07-28, matching the last in-browser verification.

| Module | Chapters | MCQs | Cases | Theory |
|---|---|---|---|---|
| ENT | 30 | 515 | 82 | 0 |
| Pediatrics | 21 | 0 | 0 | 0 |
| Ophthalmology | 26 | 0 | 0 | 0 |
| Neuropsychiatry | 27 | 0 | 0 | 0 |
| **Total** | **104** | **515** | **82** | **0** |

`QUESTIONS.length` is **597** — MCQs and free-text cases share one array. By bank: **576 Endpoint,
21 House, 0 Grade Gain**. All 30 ENT chapters hold at least one question.

**The content was deliberately reset on 2026-07-26.** The app previously held 65 Pediatrics questions and 2 written theory chapters (`emergencies`, `growth-puberty`); these were discarded by decision so that all content is rebuilt to one consistent standard. They remain recoverable in `archive\discarded-content\`.

### Remaining work, in priority order

Questions first across **all four modules**, then theory. Within each phase the module order is:

1. **ENT** — the current revision block
2. **Pediatrics**
3. **Ophthalmology**
4. **Neuropsychiatry**

Theory is then written from all three sources together — lecture slides, the question set, and the book — covering every important aspect of each lecture rather than summarising.

---

## How to add content

### Questions

Tag each question to a `chapter` id from `MODULES`. Where a question straddles two chapters (e.g. stridor sits in both ENT and Pediatrics), assign a primary and note the secondary — don't silently guess.

Sources may or may not ship explanations. Where absent, either write one or leave `explanation` empty; the UI shows an honest placeholder rather than a blank panel.

### Theory

Written **backwards from the questions.** Read the question set for a chapter first, identify what examiners actually test, then structure the notes around that — not around the textbook's ordering.

Each chapter's `intro` should state the *shape* of its questions. Example, for emergencies: *"almost every question is one of three shapes: what is the next step, what number triggers action, or which sign tells you the child is compensating versus failing."*

Prefer discrimination tables over prose wherever a question turns on telling two look-alikes apart. Prefer flowcharts for anything algorithmic.

### Source material

Everything lives in `Semester 8\`, and splits into **three tiers with very different costs** (verified 2026-07-26):

| Tier | What | Text layer? | Cost |
|---|---|---|---|
| **Lecture slides** | 140 PDFs + 16 `.pptx`/`.ppt` in `*/Theoritical/PPT/` | **Yes** — 131 of 140 PDFs extract with `pdftotext`; 15 of 16 PowerPoints extract from `ppt/slides/slide*.xml` | Nearly free |
| **Books** | 7 PDFs, 1,637 pages | **No** — image-only scans | Render + visual read |
| **Question banks** | 7 PDFs in `*/Questions/` | **No** — image-only scans; 846 pages across six, plus `ENT endpoint.pdf` at 3,075 | Render + visual read |

Books and question banks need Poppler (`winget install --id oschwartz10612.Poppler`). Two walls make it unavoidable: the reader rejects PDFs over 100 MB outright — that is all 7 books and 3 of the 7 question banks — and everything under that still needs `pdftoppm`. Render page ranges to PNG in the scratchpad and read the images; the size limit then stops applying, because the PDF itself is never opened by the reader.

```bash
pdftoppm -png -r 150 -f <first> -l <last> "<source.pdf>" "<scratchpad>/<prefix>"
```

No OCR tooling (`tesseract`) is installed and none is needed on this route. Cache every page you read into `content\` and record the range in `progress\ledger.md` — a scanned page should be rendered and read once, ever.

**The lecture text harvest is already done** — 146 files in `content\<subject>\lectures\*.txt` (ENT 32, Pediatrics 64, Ophthalmology 25, Neuropsychiatry 25), one pass, never repeated. **Check that cache before rendering anything.** The 10 files that yielded nothing are listed in `progress\ledger.md` §1.

---

## Gotchas

**Stacking order** is deliberate: gate 200 → confetti 250 → modal 300 → toast 400. Getting this wrong once made the profile editor open *behind* the sign-in screen, appearing as "nothing happens".

**`anthropic-dangerous-direct-browser-access`** — if AI features are ever re-added, this header plus `anthropic-version` must be sent on **every** request, not only when an API key is present. Without it the CORS preflight returns 400 with no `allow-origin`, and the browser reports an opaque "Failed to fetch".

**Never let a network call strand the boot.** `loadSDK()` has an 8 s timeout, `boot()` a 15 s race. Slow or blocked CDNs are a real condition for users in Egypt — Netlify was entirely unreachable during development.

**Top-level `let`/`const` are not on `window`.** Matters only when testing; drive the app through DOM events rather than reaching for internals.

**Firebase config in the file is fine.** Those keys are public by design; security comes from the Firestore rules.

**Never rename storage keys.** See above.

---

## Testing

There is no test framework, and **Node is not installed on the working machine** — the `node --check` and jsdom routes described in earlier drafts of this file are not available. Verification is done in a real browser against the `file://` URL, which is also the environment that matters most.

Baseline after any structural change — open `app\index.html` as a `file://` URL and confirm:

- boots with **zero console errors**
- all four modules render, all 104 chapters present (empty ones greyed-out but visible)
- `QUESTIONS.length` is **597** and `Object.keys(THEORY).length` is **0** — both match `progress\ledger.md`
- `SCHEDULE` still spans 2026-07-25 → 2026-08-31 across 38 days

Per content batch: every question's `module` and `chapter` resolve against `MODULES`; every `answer` index is within range of its `options`; every `qs` id in `THEORY` resolves to a real question.

Areas worth re-testing after any change that could touch them: schedule reschedule logic, highlight overlap/erase maths, cloud merge, profile data isolation, and boot with the Firebase CDN unreachable. Each of these has had a real bug caught by testing.

---

## Design

**Greek, rebuilt 2026-07-28** from artwork the user supplied — classical figures in ochre and brass on parchment. Light and dark both ship (`<html data-theme>`, chosen by an inline script in `<head>` before the stylesheet so light-mode users get no dark flash); dark is *the library at night*, light is *the page itself*. Cinzel and EB Garamond, embedded as base64. Stroked SVG glyphs on a 24-unit grid rather than emoji, so they theme for free. Spring easing (`cubic-bezier(.34,1.56,.64,1)`), progress rings, confetti above 80% on a set. Module artwork is shown whole in a square panel at the top of each card, two cards per row.

**Alive to browse, calm to read.** The ambient background field runs on home, module, schedule, moved and flagged; it is paused and dimmed on quiz, mock, review and theory. Nothing moves beside a clinical stem.

Module colours were **replaced** with the Greek palette at the user's decision: ENT `#b4472f` terracotta, Ophthalmology `#5c7a52` olive, Neuropsychiatry `#6d4c7d` tyrian purple, Pediatrics `#2e5f8a` lapis. Every one is dark enough that white text on it passes AA (4.6–7.1:1); the old bright set — ENT `#ff5a5f`, Ophthalmology `#00b37e`, Neuropsychiatry `#8b5cf6`, Pediatrics `#3b82f6` — failed at 2.15–4.23:1. **The Notion workspace and the PDF schedule still carry the old colours**, a divergence accepted knowingly until they are updated.

Question stems are set in a serif face at 17px — they read like an exam paper, and it separates content from interface.

The app is **WCAG-AA clean**, re-audited 2026-07-28 across 1,294 text elements, 5 views × 2 themes, with zero real failures. **Re-audit after any colour change** — and check the auditor before believing the audit; three successive auditors produced false failures.

The pre-redesign look is preserved at `archive\index.pre-redesign-2026-07-27.html`, the pre-Greek one at `archive\index.pre-greek-2026-07-28.html`.

---

## Related artefacts

- **Notion workspace** — parent page "2nd Term — Semester" with per-module checklists and the master schedule
- **`2nd_term_revision_schedule_daily.pdf`** — day-by-day printed schedule (superseded by the in-app version)
