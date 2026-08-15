# Herophilus — project rules

Herophilus is a medical question bank and revision app for a 2nd-term Semester 8 syllabus at
Alexandria University: ENT, Ophthalmology, Neuropsychiatry, Pediatrics. It is built from the scanned
and digital study material in `Semester 8\`.

Named after Herophilus of Alexandria, who performed the first systematic human dissections there
around 300 BC.

These rules apply to everything inside `D:\claude os\Medical school\Herophilus` — **the project moved
under `Medical school\` on 2026-08-15; the old `D:\claude os\Herophilus` path no longer exists and any
absolute path still pointing there is stale.** Workspace-wide rules live in
`D:\claude os\CLAUDE.md` and still apply here — this file adds to them, it does not replace them.

---

## 1. Layout

```
Herophilus\
├─ CLAUDE.md · MEMORY.md · README.md
├─ app\                      the deployable app — this folder is what ships
│  ├─ index.html             application shell: HTML, CSS, and one inline <script>
│  ├─ assets\                images, ~830 KB total (see §6)
│  │  ├─ mod-<module>.jpg    module card artwork, 760²
│  │  ├─ herophilus-bust.jpg the engraving on the dashboard panel
│  │  └─ herophilus.jpg      the painted portrait (currently unused)
│  └─ data\                  all content, loaded by <script src> before the shell
│     ├─ questions.<sub>.js  MCQs          → var Q_<SUB>
│     ├─ cases.<sub>.js      free-text cases → var C_<SUB>
│     ├─ questions.js        aggregator — concatenates both into QUESTIONS
│     └─ fonts.js            Cinzel + EB Garamond as base64 (see §6); loaded from
│                            <head>, NOT with the other data files
├─ Design\                   design source material — never deployed
│  ├─ Images\                the user's original supplied art — source, never edited
│  └─ Video clip\            ambient footage, added 2026-07-28; not yet used by the app
├─ content\<subject>\        working notes — never deployed
│  ├─ lectures\*.txt         cached lecture-slide text
│  ├─ qb-pages\*.md          verbatim question-bank transcriptions
│  └─ examiner-patterns.md
├─ progress\ledger.md        what has been read, transcribed, and written
├─ archive\                  the pre-split app and the content discarded from it
└─ Semester 8\               source material — read-only, see §5
```

`content\` and `progress\` are working files. Only `app\` is deployed.

---

## 2. Code constraints

Vanilla HTML, CSS and JavaScript. **No framework, no build step, no bundler, no npm.** This is not a
stylistic preference — it is what lets the app run from a `file://` download, deploy by drag-and-drop
to a static host, and work offline. Do not introduce a build pipeline without a strong reason.

**The data files are classic scripts, not ES modules.** ES modules are blocked by CORS over
`file://`; classic scripts are not. A top-level `const` in a classic script lands in the shared
global lexical scope, which is exactly why `index.html` can read `QUESTIONS`, `THEORY`, `MODULES`
and `SCHEDULE` without any import machinery.

**Load order in `index.html` matters.** Per-subject files must load before the aggregators that
concatenate them, and everything in `data\` must load before the inline `<script>`.

**Top-level `let`/`const` are not on `window`.** Per-subject data files therefore use `var`, so the
aggregators can read them off `window` and degrade to an empty list if a file is missing rather than
throwing a `ReferenceError`. When testing, drive the app through real DOM events instead of reaching
for internals.

**Never let a network call strand the boot.** `loadSDK()` has an 8 s timeout and `boot()` a 15 s
race. Slow or blocked CDNs are a real condition for users in Egypt — Netlify was entirely
unreachable during development. The Firebase SDK is optional; the app must degrade to local-only
storage when it fails.

**Never rename the `wardround.*` storage keys.** The prefix is legacy from before the rename and is
invisible to users. Renaming them orphans every existing user's progress.

| Key | Contents |
|---|---|
| `wardround.profiles` | profile list (name, avatar, PIN) |
| `wardround.v3.<profileId>` | per-profile state |
| `wardround.lastprofile` | last used |
| `wardround.v2` | legacy — migrated on first load |
| `wardround.theme` | light/dark — **device**, never synced |
| `wardround.clep` | the Clepsydra's corner, mute and collapsed state — **device** |
| `wardround.bak.<profileId>` | rolling progress snapshots (§8) |

**The source filter must work over the banks a module actually has**, not over all of `BANKS`.
`banksPresent(mod)` exists for this. Filtering over all three let a bank with no questions count as
"still selected", so turning off every *visible* source left the module showing **0 questions** while
the "keep at least one on" guard thought a source was still live. Found by clicking the real chips,
not by reading the code. `S.banks[mod]` stores `[]` when everything present is on, so a bank added
later is included by default rather than silently hidden; `sanitiseBanks()` drops stored ids the
module no longer has.

**Stacking order is deliberate:** gate 200 → confetti 250 → modal 300 → toast 400. Getting this
wrong once made the profile editor open *behind* the sign-in screen, which presented as "nothing
happens".

**The gate is two steps: sign in, then profile** (2026-07-27, user's request). `showGate(step)`
renders one at a time and picks for itself when not told: **signed in, or cloud unavailable →
`profiles`** (a sign-in step would be pointless or a dead end), **otherwise → `signin`**. Each call
rewrites `innerHTML`, which is what replays the staggered entrance animations. `afterSignIn()`
therefore **no longer enters a profile directly** — it hands off to step 2, opening the editor
prefilled from the Google account when that account has no profile yet. The `pullCloud()` that used
to live there moved into `enterProfile()`, which is now the only place a cloud profile is entered.

**Google sign-in cannot work over `file://`** — Firebase needs an http(s) origin and returns
`auth/operation-not-supported-in-this-environment`. Verified in the browser, not assumed. Because
step 1 is now a sign-in screen, `gateSignInStep()` **detects `location.protocol==='file:'` and
swaps the order**: the local path becomes the primary button and the Google button is shown inert
with an explanation. On a hosted copy the normal order returns. Do not remove this — without it,
opening the app by double-clicking the file lands the user on a button that can only fail.

**The Firebase config in the file is fine.** Those keys are public by design; security comes from
the Firestore rules, which restrict each user to their own `users/{uid}` document.

---

## 3. Source material — three tiers, very different costs

This is the single most important operational fact in the project. Check the tier before opening
anything.

| Tier | What | Text layer? | Cost |
|---|---|---|---|
| **Lecture slides** | 140 PDFs + 16 `.pptx`/`.ppt` in `*/Theoritical/PPT/` | **Yes** — 126 of 140 PDFs extract cleanly; `.pptx` extracts fully from XML | Nearly free |
| **Books** | 7 PDFs, 1,637 pages total | **No** — image-only scans | Render + visual read |
| **Question banks** | 7 PDFs in `*/Questions/` | **No** — image-only scans | Render + visual read |

Verified 2026-07-26 by `pdftotext` sweep: lecture slides returned well-formed prose; every book and
every question bank returned **0 characters**.

**Always check `content\<subject>\lectures\*.txt` before rendering anything.** The slide text is
harvested once and cached. Re-rendering something already cached is pure waste.

**Reading scans requires Poppler.** The read tool rejects PDFs over 100 MB outright — that is all 7
books and 3 of the 7 question banks — and needs `pdftoppm` for the rest. Render page ranges to PNG
in the scratchpad and read the images; that sidesteps the size limit entirely, because the PDF is
never opened by the reader.

```bash
pdftoppm -png -r 150 -f <first> -l <last> "<source.pdf>" "<scratchpad>/<prefix>"
```

**Cache everything you read.** A scanned page should be rendered and read once, ever. Write the
transcription to `content\` and record the range in `progress\ledger.md` in the same pass.

---

## 4. Content standards

### Chapters

**A topic the syllabus teaches over two lectures is ONE chapter here.** Never carry a `…1`/`…2`
pair into `MODULES`. This applies to every module, including ones not yet built — if a source's
contents page lists "Glaucoma 1" and "Glaucoma 2", they become a single `op-glauc`. Ten such pairs
were merged on 2026-07-26, taking the count from 114 chapters to 104.

`SCHEDULE` carries **no chapter ids** — it is keyed by date and title only. Chapter restructuring
therefore cannot break it, and the schedule must not be edited to accommodate one.

### Questions

Transcribed from the real question banks — **not authored**. If a question is ever authored rather
than transcribed, its origin must be recorded, so you always know which is which.

### The three question banks

Every module draws on **three** commercial banks. Each question carries a `bank` field naming which
one it came from, and the app shows it on the question and filters by it.

| `bank` | Name on screen | Colour | Identify by |
|---|---|---|---|
| `endpoint` | Endpoint | `#f59e0b` | `*endpoint*.pdf` |
| `house` | House | `#0ea5e9` | cover reads **Dr. HOUSE in …** |
| `gradegain` | Grade Gain | `#ec4899` | cover reads **ASM MINDS' … GRADE GAIN edition**, "GG" |

**Identify by the cover, not the filename.** `ENT QB.pdf` is Grade Gain and `ophthalmology MCQ.pdf`
is House — neither is guessable from its name. Render page 1 before assigning a bank.

| Module | Endpoint | House | Grade Gain |
|---|---|---|---|
| ENT | `ENT endpoint.pdf` | `d house ENT mcq.pdf` | `ENT QB.pdf` |
| Ophthalmology | `Opthalmology endpoint.pdf` | `ophthalmology MCQ.pdf` | `ophthalmology qb.pdf` |
| Neuropsychiatry | `Neuro endpoint.pdf` | **not supplied yet** | `neuropsychiatry & neurosurgery qb.pdf` |
| Pediatrics | `Pediatrics endpoint part1+2.pdf` | `pediatric .pdf` | **not supplied yet** |

A question with no `bank` is treated as `endpoint` — that is where everything transcribed before the
field existed came from. **Set `bank` explicitly on every new question anyway.**

### A question can belong to more than one bank — 2026-08-03

**~~A duplicate spanning two banks is NEVER folded.~~ SUPERSEDED at the user's request.** The banks
reprint each other, so the same question genuinely appears in two of them. It used to be held as
**two entries**, one per bank, so that neither bank's contents were misreported — and the price was
that **ticking both sources showed the learner the same question twice.** The user asked for one
entry that belongs to several banks: visible whichever of its banks is ticked, **exactly once however
many are ticked**, gone only when none of them is.

```js
{ id:'entep-throat-103', bank:'endpoint', alsoIn:['house'], … }
```

`bank` keeps its old meaning — **the bank the question was transcribed from**, which is what the id
prefix and the source citation record. `alsoIn` lists every *other* bank that prints it.

- **⚠️ EVERYTHING THAT TOUCHES A BANK MUST GO THROUGH `banksOf(q)`, NEVER `bankOf(q)`.** The filter,
  `banksPresent()`, the chip counts and the pills all do. Miss one and the failure is **silent and
  asymmetric**: the question filters correctly but is missing from a count, or counts but cannot be
  filtered to. Grep for `bankOf(` after any work here — the only legitimate uses left are inside
  `banksOf` itself and anywhere that genuinely means *origin*.
- **Per-bank counts now sum to MORE than the question count**, because a shared question is really
  one of Endpoint's *and* one of House's. ENT reads 580 + 21 across 600 questions. **That is correct
  and deliberate (user's choice) — do not "fix" it by counting origins.**
- **The card shows one pill per bank**, origin first, via `bankPills(q)`.
- **When the sweep finds a cross-bank match, ADD THE BANK — do not add an entry.** Keep the printing
  with the fuller explanation, fold the other's citation into its `source`, and note the loser's
  chapter as a secondary if it differed.
- **A folded id must lose its backticks everywhere it is still mentioned.** Retired ids written as
  `` `enthd-ear-15` `` are read as live references by the cross-reference checker; three such
  mentions had to be rewritten when this one was folded.

### Question order

`data\questions.js` **shuffles `QUESTIONS` by hashing each id**, so questions are never practised in
the order they were transcribed — which would mean every Ear question before the first Nose one, and
one whole bank before the next.

The hash is FNV-1a **plus a murmur3 finalizer**. The finalizer is not decorative: ids differ only in
their last characters, and plain FNV-1a moves the result by ~1% of the range for a one-character
change, so `entep-ear-211`, `212` and `213` came out adjacent. Measured, not assumed.

Hashing the id rather than calling `Math.random()` buys three things: the order is stable across
reloads, stable across devices so cloud-synced progress lines up, and **a question added later lands
in the middle rather than on the end** — so the order stays mixed as transcription continues and no
module ever needs re-shuffling when it is finished.

```js
{
  id: 'entqb-32',                 // unique; prefix identifies the source bank
  bank: 'gradegain',              // 'endpoint' | 'house' | 'gradegain'
  module: 'ent',                  // must match a MODULES id
  chapter: 'ent-csom',            // must match a chapter id in MODULES
  stem: 'A 34-year-old man...',   // markdown: **bold**, tables
  options: ['...', '...'],        // 2-5 strings
  answer: 1,                      // 0-based index
  explanation: '...',             // markdown; UWorld style
  objective: '...',               // one-line takeaway
  source: 'ENT QB p.44',          // file and page
  image: 'q-2844',                // optional — see below; NEVER a path
  imgAlt: 'Otoscopy of the left ear',   // required whenever `image` is set
  imgEssential: true              // optional — the question is unanswerable without it
}
```

Id prefixes by source bank: `entqb-`, `enthd-`, `entep-`, `peds-`, `opmcq-`, `opqb-`, `npqb-`.

### Questions that print a picture — 2026-08-04

The banks print clinical photographs, and some questions **cannot be answered without them** — Exam
Night Review alone holds 18 pictures, 10 of them load-bearing, 3 being *labelled* anatomy diagrams
("the structure labeled X") that no verbal description can replace. **The user chose to crop them
into the app** rather than describe or skip them.

**`Design\scripts\q-images.ps1` cuts them**, one JPEG per source page into `app\assets\q\`:

```bash
.\q-images.ps1 -Pages 2844,3026 -Pdf "…\ENT endpoint.pdf"        # add -DryRun -Report to tune
```

- **The file is named for its source page — `q-2844.jpg` — so the filename is its own citation** and
  does not have to change when the entry holding it is folded, renumbered or rewritten. Where a
  question is printed twice, use the **answered** page, matching how `source` is cited.
- **⚠️ `image` stores the BASENAME, never a path.** `qImgSrc(name)` builds `assets/q/<name>.jpg` at
  runtime, for the same reason `poseSrc()` and `MOD_ART` exist: a single-file build has no `assets\`
  folder, so a bundler has to rewrite these to data: URIs and needs **one** place to intercept. A
  literal `src` in a template is a broken image the bundler cannot see and that throws nothing.
  **⚠️ No bundler exists in this repo yet** — `bundle.ps1` is referred to in §6 but is not on disk
  and never has been; the single-file build is still owed. Writing paths through `qImgSrc()` is what
  keeps that job cheap when it comes.
- **`imgAlt` is required whenever `image` is set**, and `imgEssential` marks the ones that cannot be
  answered without the picture — the caption says so, because a learner whose images failed to load
  otherwise just sees a question that makes no sense.
- **⚠️ `imgAlt` IS RENDERED AS THE VISIBLE `<figcaption>`, SO IT MUST NOT ANSWER THE QUESTION.**
  Name the **modality and the view** and nothing more — *"Otoscopy of the tympanic membrane"*,
  *"Coronal CT of the paranasal sinuses"*, *"an arrow marks the abnormality"*. **Never name the
  diagnosis, the labelled structure, or the finding the options turn on.** Found 2026-08-04 after
  writing all 17 captions as careful radiological descriptions: they read correctly as alt text and
  **gave away at least six answers on the page** — a caption calling X *"the pars flaccida"* answers
  *"which characteristic does X have"*, and *"a smooth shelf indenting the column posteriorly, no
  retained contrast"* decides cricopharyngeal spasm against Zenker before the learner has thought.
  **The detailed read belongs in the `explanation`**, which is shown only after answering. A blind
  learner is served by the stem plus that explanation; a sighted one is spoiled by a caption.
- **The figure renders between the stem and the options**, which is where the paper prints it and
  the only place it can go: an option chosen before looking at the picture is not an answer.
- **It PRINTS.** Unlike `.mod-art` — a background image browsers drop — it is content, so `@media
  print` keeps it and only caps its width.

**Two traps in the cutter, both of which failed silently and produced a plausible-looking wrong
crop rather than an error:**

- **⚠️ Measure tone spread ACROSS a component, never inside a cell.** A photograph is locally smooth
  — a 12px patch varies by ~6 — while black-on-white text varies by ~77 within every cell it
  touches. A per-cell reading rejects pictures and keeps paragraphs, exactly backwards. The real
  photo was found, sized correctly at 1,999 cells, and thrown away as "flat".
- **⚠️ `Sort-Object -Property` does nothing on an array of hashtables in PowerShell 5.1.** It
  returns them in arbitrary order with no error, so "take the largest component" took whichever one
  the scan happened to reach first. Use `[pscustomobject]`. Verified directly, not assumed.

Two more worth keeping: **cream is not enough to find the page's card** — the rendered sheet is far
taller than the slide and the space below it is pure white, which passes any cream test and runs the
card's bottom edge off the page; require the teal surround beside the row. And **padding must be
asymmetric** — a leader-line label always sits *beside* the picture, the question text always
*above*, so a symmetric pad wide enough to catch the label drags a strip of the question in with it.

**Every crop must be LOOKED AT.** All 18 were rasterised into one contact sheet and checked before
being kept; two rounds were discarded that way, and no numeric check would have caught either.

Where a question straddles two chapters — stridor sits in both ENT and Pediatrics — assign a primary
chapter and **note the secondary**. Do not silently guess.

Where a bank prints no answer key, say so rather than inventing one.

**Fix errors, but never silently overwrite the source.** Nothing may be left incomplete or wrong —
a missing option, a truncated stem, a mis-transcription — because the learner sits an exam on this.
Repair those in place. But where **the source itself** is wrong (a mis-keyed answer, a claim that
contradicts the cached slides), correct it **and record what the bank actually printed**, cited, so
the discrepancy stays visible. A silently corrected key hides from the learner that their bank is
unreliable, and makes transcription indistinguishable from judgement.

**Explanations.** Where the source prints an explanation box, capture it verbatim and leave it
unmarked. Where it prints none, **write the explanation** — grounded in the chapter's cached lecture
slide, naming the slide file in the text — and end it with the marker `Written for this bank — the
endpoint file prints no explanation here.` The marker is what keeps transcribed and authored text
distinguishable; it is not optional.

**⚠️ A GAP IN THE MATERIAL IS ANSWERED, NOT DECLARED — the user's explicit instruction, 2026-08-04.**
Where the slides and the book do not cover a point, **answer it from general medical knowledge** and
give the learner the whole thing: the entity, how it presents, why the distractors are wrong, and the
comparison the examiner is testing. Verbatim: *"If the explanations doesn't exist in the Book and the
PPT you fill it from general medical knowledge. Try to avoid writing 'the course material doesn't
cover this' as much as you can."* **This supersedes the workspace rule in `D:\claude os\CLAUDE.md`
§1/§6 for Herophilus only** — that file still governs the other projects.

- **The tag stays, the refusal goes.** Keep `not taken from the course material` as a short
  parenthetical on the sentence it qualifies, so an unsourced claim is still identifiable when a
  lecturer contradicts it. **What must not survive is the dead end** — a sentence that announces the
  gap and stops, or a `source` field that leads with the gap instead of the grounding. The Vincent's
  angina entry (`entep-throat-103`, p.1555) is the shape to copy: no slide covers it anywhere in the
  32 ENT files, and the explanation still delivers the organisms, the presentation, the treatment and
  a discrimination table against diphtheria.
- **Never present outside knowledge as sourced**, and never blend it into a cited passage without the
  tag. That half of §5 is unchanged — the change is that the gap is *filled*, not that it is hidden.
- **⚠️ INTERVIEW THE USER BEFORE LEAVING ANY POINT UNANSWERED** (their instruction, same date). If a
  point cannot be answered safely even from general knowledge — a disputed key, a claim that needs a
  textbook figure, a place where the honest answer is "this depends on the lecturer" — **stop and ask
  them**, so a solution is found together. Do not write the disclaimer as a way out.
- **Batch the interview, do not fire it per sentence.** 211 passages already carry the tag across 177
  entries; asking once per occurrence would stall every batch. Collect the genuinely unanswerable
  points while writing, then bring them **as one list at the end of the batch**.

### Free-text cases

Some sources print a **vignette and a diagnosis with no options** — `ENT endpoint.pdf` pp.742–760
holds 37 of them. These must **not** be forced into the MCQ schema, because inventing distractors
is authoring. They use `type:'case'` and live in `app\data\cases.<subject>.js` as `var C_<SUBJECT>`,
concatenated into `QUESTIONS` by the aggregator so the quiz engine, SRS, search and progress
counters pick them up with no special casing.

```js
{
  id:'entep-case-18', bank:'endpoint', module:'ent', chapter:'ent-csom', type:'case',
  stem:'A 55-year-old diabetic female...',        // markdown
  answer:'Left CSOM – unsafe type (cholesteatoma) complicated with petrositis',  // source's own, verbatim
  keys:[                                          // what the typed answer must contain
    {label:'Unsafe CSOM / cholesteatoma', terms:['unsafe','cholesteatoma','atticoantral','csom']},
    {label:'Petrositis (Gradenigo)',      terms:['petrositis','gradenigo','apicitis']}
  ],
  explanation:'...', objective:'...', source:'... p.750 (Case 18)'
}
```

The learner types a diagnosis and it is graded on **concepts, never wording**: input is normalised
(lowercase, punctuation stripped), each key matches if **any** of its `terms` appears, and
single-word terms tolerate typos via Levenshtein distance (1 edit above 4 characters, 2 above 7).
Scoring is `got/total` — all keys is "Spot on", some is "Partly right", none is "Not quite".

**A case never reveals the source's diagnosis on its own.** Unlike an MCQ, returning to an already
answered case does **not** restore the graded state — it starts blank again, with a chip recording
the previous score, so the diagnosis must be typed every time. The only way to see the answer
without typing is the explicit **👀 Reveal** button, which scores nothing and records no answer.
`Q.peek` carries that state and must be reset anywhere `Q.shown` is.

**Write `terms` generously.** Include the abbreviation, the full name, common misspellings and the
clinical synonym — `presbycusis` / `presbyacusis` / `age related hearing loss` all had to be listed
before that case graded correctly.

### Theory

**⚠️ THE THEORY IS A NEW STUDY SOURCE, NOT A SUMMARY OF THE LECTURES — the user's explicit
instruction, 2026-08-04.** It must be **sufficient to study and sit the exam from, on its own**,
without opening a slide deck or a book. Verbatim: *"not as a short summary… use them all to make a
new study source on your own that covers every important aspect of the lectures and ignoring the
non-important parts… I want the study notes to be sufficient for me to depend on for my studying and
preparations for the exams. It doesn't necessarily need to be short if it ignores important parts of
the lecture."*

**Length is never the goal. Completeness of the important is the goal.** If a chapter needs 4,000
words, it gets 4,000 words. **Dropping something important to keep it short is the one unacceptable
failure** — the user sits an exam on this.

Written **backwards from the questions**. Read the chapter's question set first, work out what
examiners actually test, then structure the notes around that — not around the textbook's ordering.

**What decides "important"** — the user's answer was *"based on the questions and your judgement."*
Four tests, in this order. Anything meeting **one** of them is in:

1. **The bank asks it.** Any fact that is the key, a distractor, or the discriminator of any
   transcribed question in that chapter — including the *wrong* options, since knowing why they are
   wrong is what the exam tests. This is the hard floor: **every question in a chapter must be
   answerable from that chapter's notes alone.**
2. **The slides give it weight** — a whole slide, a table, a bolded line, a repeated point, or the
   lecturer's own emphasis. The slides define the syllabus's own scope.
3. **Clinical judgement** — it changes management, it is an emergency, it is what distinguishes two
   look-alikes, or missing it harms a patient. Red flags and complications stay in even when the
   bank has never asked.
4. **It is a named/eponymous entity, a classic sign, or a number** the material states — the things
   MCQs are built from.

**What gets dropped**, and it must be *said* that it was dropped: history-of-the-specialty asides,
epidemiology with no bearing on an answer, drug doses the material does not state, mechanism deeper
than the material goes, and anything the slides mention once in passing that no question touches.
Record the omissions per chapter so a gap is a decision on the record, not an accident.

**Use every source in the folder, not three.** Lecture slides and `.pptx`, the book, the transcribed
questions, `examiner-patterns.md`, the Endpoint file's own notes and explanation boxes, and anything
else in `Semester 8\` that proves useful. Order of use:

1. **Lecture slides** — the backbone. They define the syllabus's own scope and ordering, and they
   cost nothing to read.
2. **Questions + `examiner-patterns.md`** — set the emphasis, the `w` weighting, and the `intro`.
3. **Endpoint's own notes/explanation boxes** — what the bank itself thinks the answer turns on.
4. **Book** — depth, mechanisms, and whatever the slides skip. Page-cited.

Anatomy and physiology textbooks are to be added to the folder by the user for diagrams; ask when
one is needed rather than substituting outside knowledge.

**Images, diagrams and charts are wanted** (user, 2026-08-04) — Chrome and Canva are available for
producing them. Anything illustrative must still obey §5: an image taken from the material is cited
like any other fact, and one produced here is marked as produced here. **Assets stay local** — no
CDN, no hotlink, §2 still governs.

Each chapter's `intro` states the *shape* of its questions — what the examiner keeps asking, not
what the topic is.

**Coverage is comprehensive, not a summary.** Every important aspect of the lecture is included.
When something is deliberately left out, say so.

Prefer discrimination tables wherever a question turns on telling two look-alikes apart. Prefer
flowcharts for anything algorithmic. Populate `qs` so the bidirectional question↔notes linking
works.

```js
'ent-csom': {
  intro: 'markdown — how examiners test this chapter',
  sections: [{
    id:'csom-1', h:'Heading', w:'must'|'high'|'know', body:'markdown',
    table:{head:[...],rows:[[...]]},           // optional
    flow:{title:'...',steps:[...]},            // optional
    qs:['entqb-32']                            // linked question ids
  }]
}
```

Flowchart step kinds: `{k:'step',t,n}`, `{k:'alert',t,n}` (red — outcome-changing),
`{k:'decision',t,yes,no}`.

---

## 5. Citations and grounding

**No clinical fact without a page citation.** `<file>.pdf p.<N>`. No citation means it did not come
from the material, and that must be stated explicitly and kept separate from sourced content.

Preserve medical terminology exactly as the source writes it. Do not paraphrase a clinical term into
an approximate one.

**⚠️ Where the material does not cover something, ANSWER IT ANYWAY from general medical knowledge and
tag the claim** — the user's instruction of 2026-08-04, which **reverses the workspace rule for this
project only**. The full contract, including when to stop and interview the user instead, is in §4
under *Explanations*. What survives unchanged: outside knowledge is **always identifiable as such**
and is never passed off as sourced.

All study output is in **English**.

**Never modify, rename, move, or delete anything in `Semester 8\`.** Those are the originals.
Rendered PNGs go to the session scratchpad, never into the source tree.

---

## 6. Design

**Dark cinematic — redesigned 2026-07-27 at the user's request.** Deep navy ground (`--bg:#070d16`)
with layered surfaces, hairline borders, soft elevation and coloured glow. A fixed ambient field of
four slow-drifting blurred orbs sits behind the app. Glass (`backdrop-filter`) on the rail, top bar,
search results and modals. Spring easing (`cubic-bezier(.34,1.56,.64,1)`) is retained for
micro-interactions, plus `cubic-bezier(.22,1,.36,1)` for entrances. Progress rings and confetti
above 80% are unchanged. Question stems remain a serif face at 17px — they read like an exam paper,
and it separates content from interface.

The previous bright, playful look (chunky 2.5 px outlines, hard offset shadows) is preserved at
`archive\index.pre-redesign-2026-07-27.html`.

**ALIVE TO BROWSE, CALM TO READ — the rule that governs all motion.** `render()` writes
`document.body.dataset.view`, and CSS gates the ambient orbs on it. They run on **home, module,
schedule, moved, flagged**; they are **paused and the field dimmed to 30%** on **quiz, mock, review,
theory**. Scroll-reveal (`revealOnScroll()`, an IntersectionObserver) is likewise skipped on those
four. Nothing moves beside a clinical stem — a study tool is not a brochure, and this is the one
design rule not to relax.

**Three token families that must never be re-merged.** The light theme used `--ink` for text,
borders *and* filled backgrounds. On dark they must stay separate or every border turns bright white
and every filled button becomes a white slab:

| Token | Use | Never |
|---|---|---|
| `--tx` / `--ink` | text, near-white | borders, shadows, backgrounds |
| `--line`, `--line-2` | translucent white hairlines | text |
| `--fill` | solid raised fills (buttons, table heads) | text |

The contract is not theoretical. Two live violations were found on 2026-07-27 by auditing rather
than reading: `.bankchip.on` carried `box-shadow:… var(--ink)`, giving every active source chip a
**white halo**, and `.chip.on` used `var(--ink)` as a *fallback background*, which would have drawn a
white chip carrying white text. **Grep for `var(--ink)` outside a `color:` declaration after any
token work.**

### Light and dark — added 2026-07-27

`<html data-theme="light|dark">`, chosen by a **tiny inline script in `<head>` before the
stylesheet**. It has to be there and it has to be inline: anything deferred runs after first paint
and a light-mode user sees a dark flash. Stored in `wardround.theme`; **no stored value means follow
the operating system**, and the `matchMedia` listener keeps doing so until the user picks once.
Theme is a **device** preference, never per-profile and never synced — the same account at night on
a phone and by a window on a laptop wants different answers.

Dark is the bare `:root`; light is `:root[data-theme="light"]`. **Only tokens are restated** — the
rules are shared. Ten tokens exist purely so that stays true: `--sh`/`--sh-soft`/`--sh-deep` (shadow
ink), `--sheen` (the top-light wash on cards), `--tint`/`--tint-2` (input and option fills),
`--stem`/`--prose`/`--strong` (the clinical reading surface), and `--warn` (the 60–79% accuracy
colour, previously a hardcoded `#e08a00` that failed AA on white).

**~~The rail stays dark in light mode.~~ SUPERSEDED 2026-07-28 — the user asked for the rail to
follow the theme, and it now does.** It is parchment in light mode. Two traps came with it:

- **The `--rail` token is a decoy.** The cinematic layer re-declares `.rail` with a hardcoded dark
  `linear-gradient`, so `background-color` computes to `transparent` and `--rail` is never consulted.
  Overriding the token changes *nothing* — **the gradient is what must be replaced.** Diagnosed by
  reading the computed background (`rgba(0,0,0,0)`) while `--rail` correctly read `#eae2d3`: the
  token had applied and done nothing. `backdrop-filter` is also switched off, since an opaque rail
  cannot show a blur and it is the most expensive property on the page.
- **The rail was built assuming a near-black ground**, so about a dozen colours inside it are
  hardcoded `#fff` or lilac rather than tokenised. Flipping the background alone leaves white on
  parchment. All of them are restated under `:root[data-theme="light"]`, and the muted tone is
  `#60533e` — `#6b5c45` was tried first and **failed twice**, at 4.37:1 on `--rail-2` and 4.35:1 on
  the streak gradient. **Measure against the DARKER gradient stop**, not the average: all 12 rail
  elements now clear AA against `#e6dccb`, lowest 4.43:1.

**One asymmetry remains — do not "fix" it:**

1. **`--gold` stays bright in light mode.** It is a *background* in 7 places and a text colour in
   none. `--ok` and `--bad` **do** darken, because `accColor()` returns those as text. Darkening
   gold would put dark text on a dark badge — the opposite of the intended fix.

**Do not put `backdrop-filter` on cards, chapter rows or options.** It is the most expensive thing
on the page and stutters on a long list. Glass is for fixed furniture only.

**The print block re-inverts the palette.** On paper the tokens flip back to ink-on-white inside
`@media print`, or a theory PDF exports blank. Test printing after any token change. **Its selector
must stay `:root, :root[data-theme="light"], :root[data-theme="dark"]`** — a bare `:root` has lower
specificity than the light theme's selector, so once light mode existed the print block lost and
printed a grey page background onto paper.

**Text on a brand colour must be chosen by measurement, not habit.** On the old bright palette, white
on the Endpoint amber `#f59e0b` measured **2.15:1** — the worst reading in the app — so
`.bankchip.on` and `.pill.bankpill` were switched to dark text, and `.tag`/`.eyebrow` on the module
colours had to be left failing because those colours were locked. **Both facts are superseded by the
Greek palette below**, which is dark enough throughout that white text passes everywhere; the
dark-text fix was reverted. The rule survives its example: **measure, never assume.**

### The Greek layer — 2026-07-28

**Rebuilt from artwork the user supplied**, not invented: classical figures in ochre and brass on
parchment, plus icon studies in ink navy, cream and gold. Dark is *the library at night*; light is
*the page itself*. **No cool white or blue-grey anywhere in the text ramp** — beside terracotta and
bronze, a blue-white reads as a colder design pasted on top.

**Module colours were REPLACED at the user's explicit decision.** They had been locked because the
Notion board and PDF schedule share them; the user chose the full Greek palette knowing those two
now diverge until updated.

| Module | Was | Now | |
|---|---|---|---|
| ENT | `#ff5a5f` | `#b4472f` | terracotta |
| Ophthalmology | `#00b37e` | `#5c7a52` | olive |
| Neuropsychiatry | `#8b5cf6` | `#6d4c7d` | tyrian purple |
| Pediatrics | `#3b82f6` | `#2e5f8a` | lapis |

Banks moved too: endpoint `#9a6b1f` bronze, house `#2f6b8f` aegean, gradegain `#8f3f5c` madder.

**Measured consequence:** every one of these is dark enough that **white text on them passes AA**
(4.6–7.1:1). The old bright set failed at 2.15–4.23:1 and that failure had to be left standing. So
`.bankchip.on` and `.pill.bankpill` went **back to white text** — recheck by measurement if these
colours ever change again.

**Type.** Cinzel (display) and EB Garamond (body), both SIL OFL, embedded as base64 in
`data\fonts.js`. **The Windows system serifs are not licensed for embedding — never inline Georgia
or Palatino.** Base64 rather than a `.woff2` next door because **over `file://` a font fetched by
`url()` is blocked as cross-origin** — the same CORS wall that forces classic scripts. The file is
loaded from `<head>` *before* the stylesheet, or the page paints in a fallback and reflows.
Cinzel is a titling face: everything it touches is tracked **out**, and body copy stays Garamond.

**Glyphs, not emoji.** `ICONS` + `ico(name,size)` render stroked SVG on a 24-unit grid in
`currentColor`, so they theme for free — which no emoji can do. `@` in a path string splits
subpaths. Emoji survive only in toasts, profile avatars and the PIN lock, where they are content
rather than interface.

**The four MODULE glyphs are navigation, so being recognised beats being clever** — they say the
specialty first and Greek second. Neuro is a `brain` and Pediatrics a `teddy` (2026-07-28, user
asked for "something more obvious and representative"); they replaced a `labyrinth` that read as a
Greek key and a plain standing figure that read as a generic person. The rest of the set may lean
classical, because nothing navigates by them.

**Draw a glyph, then LOOK at it at 14/18/25px before keeping it.** A first round that was reasoned
out on the grid rendered as a flower and a leaf. There is no substitute for rasterising it — see §7
for how, since the preview pane cannot screenshot.

**Module artwork: the whole painting is shown, never cropped** (user's decision, 2026-07-28). It is
drained to greyscale and re-tinted with `background-blend-mode:color` — hue from the tint, luminance
from the art — which is what makes four separately generated images read as one set.

It was originally a full-bleed background *behind the card's text* at `background-size:cover` and
`opacity:.34`. On a wide short card that threw away about two thirds of a square image: the figure's
head and the whole lower half. The art now owns a **square panel at the top of the card**, so
`aspect-ratio:1` against a square source means `cover` and `contain` are identical and nothing is
lost; opacity went to `.9`/`.82` because it is now the subject rather than a watermark.

- **`.mod-grid` is load-bearing.** Module cards drop to **exactly two per row**, capped at 880px,
  while every other card grid stays at three or more. `repeat(auto-fill,minmax(300px,1fr))` looks
  right but puts four across in the 1180px content column and the painting is a thumbnail again.
- **`button.card.mod-card`, not `.mod-card`.** `button.card` sets `padding:17px` at specificity
  (0,1,1); a bare `.mod-card{padding:0}` loses to it and the art gets an inset frame.
- **The print block hides `.mod-art`.** Browsers do not print background images, so left in it
  reserves a square of blank paper per card.

Sources: ENT is 1254² but the other three are only ~615²; all are re-encoded to 760² JPEG in
`app\assets\`. Displayed near 430px they are fine, and mildly soft on a 2× display — raising the
encode would only help ENT, since 615² is the real ceiling for the other three.

### The ambient film — 2026-07-28

A candlelit Alexandrian desk plays under the whole app: `app\assets\ambient-library.mp4`, 960×540,
**321 KB**, generated by the user from the prompt drafted this session. Source kept at
`Design\Video clip\`. It is the bottom layer of `.ambient` — film, then orbs tinting it, then
`.film-scrim` over both. **Source order IS the stacking order there**; none of those children carries
a `z-index`.

**It is a PING-PONG loop — forward, then reverse — and it has to be.** The source slowly pushes in,
so a plain `loop` snapped back to the wide framing every six seconds, which is the one thing a
background must never do. Cut in ffmpeg, dropping the duplicated turnaround frame at each end:

```bash
ffmpeg -i src.mp4 -filter_complex "[0:v]scale=960:-2,setpts=PTS-STARTPTS,split[a][b];\
[b]reverse,trim=start_frame=1:end_frame=140,setpts=PTS-STARTPTS[r];[a][r]concat=n=2:v=1[out]" \
-map "[out]" -an -c:v libx264 -profile:v main -pix_fmt yuv420p -crf 26 -movflags +faststart out.mp4
```

**ffmpeg is installed** (`winget install Gyan.FFmpeg`) but **is not on this shell's PATH** — call it
by full path out of `%LOCALAPPDATA%\Microsoft\WinGet\Packages\`.

**`.film-scrim` is the contrast guarantee, not a mood effect** — the film never meets the page
unmediated. **Measured, not assumed:** sampling the rendered PNG against the pre-video baseline, the
interior of every card is **identical to four decimal places**, because the cards are opaque; only
bare background changed, and it got *darker* (white-text contrast 16.68:1 → 18.22:1). So the AA audit
still stands. **Re-measure the same way if the scrim or the film opacity moves.**

**The orbs were pulled `.55` → `.38` when the film arrived.** Two ambient systems at full strength
cancel out: the orbs are a 90px blur, and at their old weight they simply fogged the room away.

**Motion obeys the same gate as everything else, in two halves.** CSS fades `.ambient` to `.3` on the
reading views; `syncFilm()` calls `pause()` so the decoder actually stops. **CSS alone is not enough**
— a faded video is still decoding beside a clinical stem. `prefers-reduced-motion` drops the film and
its scrim entirely (`display:none`, poster included), and the print block's existing `.ambient *` rule
already covers it. **`play()` is called with a swallowed `.catch()`**: autoplay refusal is an expected
outcome, not an error, and it degrades to the poster frame.

**The gate runs the film harder than the app** (`.66` dark / `.62` light, `.86` / `.78` portrait) —
the user asked for it to be more obvious there, and a five-second screen with nothing to read on it
can carry it. **The gate block must stay AFTER every shared film rule**: it matches their specificity
exactly and wins on source order alone, so moving it higher silently disables it. What protects the
type is the centre pool, not the film opacity — the pool went to `.88`/`.72` when the film rose, and
both were re-measured together (4.78:1 dark, 5.20:1 light across 5 frames of the loop).

**⚠️ When sampling "the background" behind type, hide the type with a STYLESHEET rule.** An inline
`style.visibility` on `.gstep` is discarded the moment `showGate()` rewrites the gate's innerHTML,
which put the text back into one frame and made the auditor measure the small print as its own
background — a false failure of 0.89:1 among five passes. **A single wild outlier in a set of
otherwise identical readings is a broken probe, not a broken page.**

**Light mode BRIGHTENS the film into a pale print — it does not dim it.** This is the opposite of the
obvious move and the obvious move is wrong: a night scene at low opacity on parchment is a grey
smudge, and the first attempt at `.14` was invisible, which the user reported. `brightness(1.78)`
lifts the shadows off the floor, `contrast(.68)` keeps them there, and what survives reads as a faded
fresco. So light mode runs at **`.42` — HIGHER than dark mode's `.48` is relative to its own ground**,
not lower. Measured after the change: card interiors identical to baseline in both themes, bare
background 9.69:1 → 9.15:1 for dark text, still past AAA.

**Light mode's selector outranks the portrait media query** (`:root[data-theme=…] .ambient .film` is
four classes to the query's two), so portrait values must be restated inside the light block or they
are silently ignored.

**⚠️ PORTRAIT IS A DIFFERENT PICTURE — test it separately, always.** `object-fit:cover` crops to the
middle of the frame, and at 820×1180 that middle is only **~39%** of a 16:9 source. For this clip the
middle band is the scholar's unlit back, and the lamp — the one bright thing in it — sits ~14% from
the left and was cropped away completely. The film shipped **effectively invisible on an iPad**, and
the user reported it twice before it was found, because **every window size tested was
desktop-shaped**. Below `5/4` the framing moves to `object-position:18%` and the film runs at `.72`
against `.48` wide, because in portrait the cards span nearly the full width and only the strip above
the first card and the gaps between sections still show any film at all. **Render at 820×1180 and
1180×820 after any change to the film, the scrim, or the page's max width.**

**The gate carries its OWN copy of the film** (2026-07-28, user's request). `.gate` is opaque and
sits at z-index 200 above `.app`, so the page's film is unreachable from behind it — making `.gate`
transparent would reveal the dashboard, not the film. `gateChrome()` therefore emits a second
`<video class="film">` inside `.gate-amb`, and **every film rule names `.ambient .film,.gate-amb
.film` rather than being duplicated**, so portrait, light mode and reduced motion cannot drift apart.
Gate orbs went `.5` → `.34` for the same reason the page's did. `hideGate()` calls `syncFilm()`:
**a `display:none` video keeps decoding**, so it must be paused explicitly or it runs all session.

**⚠️ The gate is the ONE place type sits directly on the film — and the ground under it MOVES.**
Everywhere else the text is on an opaque card, which is why the film cost nothing in contrast.
`.gate-amb .film-scrim::after` lays a radial pool under the centre column to fix a constant ground.
**Measured across five frames of the loop, with the type hidden so the real ground was sampled:**
worst pixel in the text band gives **4.89:1 dark** (small print `rgb(156,139,113)`) and **5.57:1
light** (`rgb(92,75,54)`) — both past AA. The five frames returning an identical worst pixel is the
pool working, not a broken probe; that was confirmed separately by diffing the lamp side, where
4,633 of 9,801 sampled pixels change.

**The film does not appear on the splash.** It paints an opaque ground over it. That is pre-existing
and was left alone — it is a sub-second loading state and a third decoding video would be waste.

**⚠️ A STRAY `*/` SILENTLY DELETED THE ENTIRE PORTRAIT FIX, AND SCREENSHOTS DID NOT CATCH IT.**
A comment was closed early and four lines of prose left sitting in front of `@media
(max-aspect-ratio:5/4)`. CSS error recovery swallowed the prelude *and the whole media block*, so the
portrait rules never applied — while a before/after screenshot comparison still "looked improved",
because that judgement was made by eye. It was found only by enumerating `document.styleSheets` and
counting parsed `CSSRule`s. **The correct count is THREE `max-aspect-ratio:5/4`
blocks** — page film, light-mode film, gate film — verified 2026-08-02 against
the pre-Clepsydra backup; an earlier note here said two and was wrong.
**After any CSS edit, confirm the rule you just wrote is live** — enumerate `document.styleSheets`,
count parsed `CSSRule`s **recursively** (a top-level count cannot see a swallowed media block), and
check the selector is present. A picture cannot tell you a rule parsed.

> **⚠️ A NAIVE `/*` vs `*/` COUNT IS INVALID ON THIS FILE — it reported 286 vs 291 on a perfectly
> healthy build.** The markdown renderer holds regex literals like `/\*\*(.+?)\*\*/g` and
> `.replace(/;\s*$/,'')`; each contains the substring `*/` and none contains `/*`, so four such lines
> manufacture six phantom unclosed comments. **Balance is a hint, never the verdict** — the verdict
> is the parsed-rule enumeration above, plus a zero-error boot. Verified 2026-08-02: 710 rules,
> **three** `max-aspect-ratio:5/4` blocks, 0 console errors.

**The icon is `Design\Images\Icons\Herophilus 3.png`** (user's choice, 2026-07-28): the navy medallion. Its
circle is cut out of the white square and saved with a transparent surround, so it sits on any
background. The medallion edge is **found by scanning for non-white pixels, not guessed**.

**It is the site icon AND the app's own mark — five places, and all five must move together.** The
first pass wired only the browser tab and left a rod-of-Asclepius glyph in the interface, which the
user caught immediately. The five: `<link rel="icon">`, `<link rel="apple-touch-icon">`, the rail
logo, the splash logo, and the gate — where `.gmark` appears **twice**, once in the `file://` branch
of `gateSignInStep()` and once in the hosted branch. Grep `class="gmark"` and `class="blip"`.

| Size | Where | How |
|---|---|---|
| `icon-48.png` | browser tab | **inlined** as base64 — a *relative* favicon href is unreliable over `file://`, and this app must work double-clicked |
| `icon-96.png` | rail 32px, splash + gate logo 38px | `<img src>` by path |
| `icon-180.png` | gate mark 88px, `apple-touch-icon` | `<img src>` / href by path |

**Only the favicon is inlined.** `<img src>` is not CORS-restricted the way a font or an ES module
is, so a relative path works fine from `file://` — inlining the rest would add ~100 KB of base64 for
nothing. **Do not inline the 180 for `apple-touch-icon` either**: it costs 77 KB for something only
a hosted page ever loads.

**The medallion carries its own styling, so the old badge chrome had to go.** Every mark had sat on
a `linear-gradient(135deg,var(--ent),var(--gold))` rounded square rotated `-6deg`. None of that
survives: the medallion is *already* a navy disc with a gold rule, so a coloured tile behind it
reads as two badges stacked, and rotating a circular seal only tilts the wordmark inside it. All
marks are now transparent-backed, unrotated and `border-radius:50%`. The `.gmark` halo was
recoloured `--ent` → `--gold` to echo the medallion instead of fighting it.

**The rail mark needs its gold hairline.** `--rail` is `#080d14` and the medallion's ground is navy,
so at 32px the disc reads as a dark blob with no edge. `box-shadow:0 0 0 1px rgba(217,180,74,.4)`
fixes it. Found by rasterising the rail at 1:1 — it is invisible in source.

**Two traps this work hit, both worth remembering:**

1. **`ico()` contains single quotes.** Dropped into a single-quoted JS string it closes it and takes
   the *entire inline script* down — every function undefined, blank app. Use backticks. Found only
   because `go is not defined` appeared in a smoke test.
2. **Anything that STORES a colour needs a migration.** An edited schedule saves `{label,text,hex}`
   per item and profile avatars save their colour, so both kept rendering the old palette from
   `localStorage` long after the hex was gone from the source. `migrateColours()` is keyed on the
   old values, so it is idempotent. **Prefer storing a token, not a hex.**

### The Clepsydra — 2026-08-02

A κλεψύδρα is the Alexandrian water clock. She is the study companion: a warm
amber cartoon clock in a chiton and a gold wreath, projected in the corner with
scanlines, a flicker and random glitch bursts, and changing pose with the screen.
**The character is the user's own** — they generated her in Canva after asking
for a Miss Minutes lookalike, which is not something to reproduce; the app
supplies the hologram treatment around their drawing, never the drawing.

**⚠️ SHE IS THE USER'S OWN ARTWORK. DO NOT REDRAW HER, AND DO NOT DRAW ANYTHING
ONTO HER.** Settled three times on 2026-08-02, the same lesson each time:

1. A hand-drawn SVG version was rejected — *"why don't you take the actual exact
   design from Canva instead of redrawing it"*. ~150 lines of generated SVG went.
2. A CSS stephane was drawn over her head when she had no crown. The user then
   supplied poses that **already wear a gold wreath**, and the whole ornament had
   to be deleted — it would have been a second crown.
3. Her single pose could not be turned to face the reader. Rather than accept a
   generated substitute, the user drew nine new poses.

**Every time the answer was: ask for artwork, do not manufacture it.**

### The nine poses — 2026-08-02

`Clypsedra\*.png` (source, never edited) → `app\assets\clep\<pose>.png`, nine
files, 360×360, 1,082 KB total. **She faces the viewer in all nine** and wears
her own wreath and chiton, which retired both the "she cannot face you"
limitation and the CSS crown.

Poses: `waving` `welcoming` `talking` `pointing` `thinking` `surprised`
`dancing` `jumping` `presenting`.

**Cutting them out** (`Design\scripts\poses-cut.ps1`):

- Same method as the first cutout: a **flood fill inward from the border that
  judges each pixel against the NEIGHBOUR it spread from**, not against a fixed
  seed. Her dark contour is a cliff the fill stops at.
- **A brightness threshold cannot do it.** These sit on WHITE, and her chiton,
  her gloves and her eye whites are all cream — "delete the bright pixels"
  deletes exactly those.
- Tolerance **6** here, against 3 for the orange original: a flat white sheet is
  far more uniform than a radial gradient, so the fill needs no slack to cross
  it and the extra headroom only helps at the anti-aliased edge. Two erosion
  passes, and erosion only ever eats pixels that are themselves pale — never her
  outline. 62–72% of each canvas removed.
- `Welcoming.png` arrives **already transparent** and the other eight do not, so
  the border seeding accepts either an alpha-0 pixel or a near-white one.

**Aligning them** (`Design\scripts\poses-align.ps1`) — this is the part that
makes a swap read as one character rather than two:

- **⚠️ Do NOT align on the bounding box.** In `Jumping` and `Waving` her hands
  rise above her head, so the box top is a *hand*; matching box tops sinks her
  body by the height of an arm.
- Seven of the nine arrive on an identical 377² canvas from the same generator,
  so **their framing is already consistent** — they are scaled 360/377 and left
  alone. Only `Presenting` (1254²) and `Welcoming` (1024²) are fitted, and for
  those two the head *is* the topmost thing, so box top + box height works.
- An automatic head-finder was written first and returned head widths of 24–91px
  on a canvas where the head is ~250. **It was abandoned rather than debugged**,
  because the framing was already given by the source.
- **The check is an overlay, not a number**: all nine stacked at 22% opacity. A
  sharp face means they register; a blurred one means they drift. Hers came out
  sharp through the eyes, wreath and toga, with only the arms varying.

**What a flat sprite costs:** blink, wave and the sweeping minute hand are gone —
they were per-part SVG animations and a sprite has no parts. Session progress
lives in the HUD pill and the ring. What still carries her is all on the
container: the bob, the scanlines, the glitch bursts and the glow — **and now the
pose changes, which give back most of what the per-part animation did.**

### Changing pose — the glitch swap

**A hologram does not dissolve, it fails and re-forms.** So the swap is not a
cross-fade: `.cl-stage` holds **two** stacked `<img>`s, `.cl-main` and
`.cl-ghost`. `clepPose(name)` copies the outgoing pose into the ghost, points
the main at the new one, and adds `swap` + `gl` for 460 ms. The ghost is shunted
sideways, squashed on the vertical and dropped in steps while the incoming pose
rises underneath out of phase; the existing burst supplies the shake and the
red/cyan split, so **the two systems cannot drift apart — the swap rides the
glitch rather than reimplementing it.**

- **460 ms is measured, not guessed.** Shorter reads as a flicker rather than a
  change of pose; longer starts to feel like something the reader waits out.
- **⚠️ The class must be removed, the layout forced, then added again.** Without
  `void el.offsetWidth` between them the browser coalesces the two style changes
  and a second swap inside the window silently does nothing.
- **⚠️ The ghost needs a `src` from the moment it is built.** An `<img>` with
  none draws a broken-image glyph in the corner — that shipped for exactly one
  render before a screenshot caught it.
- **Every pose is preloaded** by `clepPreload()`. Without it the first swap to a
  pose shows an *empty* frame: the ghost has already faded and the incoming file
  has not arrived.
- **The same pose twice is a no-op**, or every `render()` would re-tear her.
- **To photograph the transition, freeze it.** Headless gives one frame per run,
  so `Design`-side `strip.ps1` pins the animation with a negative
  `animation-delay` plus `animation-play-state:paused` and takes five runs.

**Which pose goes where.** `CL_POSE_VIEW` maps screen → pose, and anything not
named falls back to `CL_REST` so a view added later cannot throw. Events
override it and then `clepSettle()` returns her to the screen's own pose.

| | |
|---|---|
| home | `welcoming` |
| module, theory, flagged, moved | `pointing` |
| schedule, session | `presenting` |
| quiz, mock, review | `thinking` |
| while a bubble is open | `talking` |
| right answer / wrong answer | `dancing` / `surprised` |
| set finished ≥80%, session completed | `jumping` |

- **The pose follows the screen even when she is MUTED.** Muting silences her,
  it does not freeze her — the call sits above the mute check in `clepOnView()`
  for that reason.
- **`navQ()` has to set the pose itself.** `clepOnView()` cannot: the view key
  has not changed between questions, so its dedupe returns early.
- **`clepSay()` turns her to `talking`, so anything that sets a pose and then
  speaks must pass `{pose:false}`** — otherwise `endSession()`'s jump is
  overwritten by a turn-to-talk in the same tick.
- **`clepShiftLoop()` is ambient drift**, 26–70 s, between the two resting poses
  only, and it is skipped on the reading views, within 9 s of her speaking, and
  whenever an event pose is on display. Those three guards are what keep it from
  becoming noise beside a clinical stem.

**Everything she says is generated from the data the screen renders from**, so a
number she quotes cannot drift out of date with the page. `CL_TIPS` holds one
explainer per view; `clepFacts()` holds app facts. Never hardcode a count there.

- **She is ONE fixed element, so `backdrop-filter` would be affordable — and is
  still not used.** She floats over a scrolling page and a blurred backdrop on a
  fixed element repaints every frame of that scroll.
- **Layering: 150.** Under gate 200, confetti 250, modal 300, toast 400.

### Which corner she stands in — 2026-08-02

**She docks LEFT on the question screens and keeps the right corner everywhere
else** (user's request: she was covering Skip and Next). `CL_LEFT_VIEWS` is
`quiz`, `mock`, `review` — the three that render `.qactions`, whose right-hand
group is pushed against the card's right edge by `margin-left:auto`, which is
exactly where she stood.

- **The row REVERSES, the figure does not just move.** Her bubble, readout and
  tools hang off her; left un-flipped they run off the window. `.clep.left` sets
  `flex-direction:row-reverse`, flips `.cl-col` to `flex-start`, and moves the
  bubble's tail and `transform-origin` to the other side.
- **⚠️ The window's bottom-left corner IS THE RAIL** — 238px wide, full height.
  Docking at the window edge only traded one covered control for another, and a
  worse one: the rail is `position:fixed` too, so unlike the question card that
  overlap **cannot be scrolled away**. Measured at 1440×760, she landed on
  *Review deck* and *Mock exam*. `clepClearRail()` therefore docks her to the
  **rail's right edge**, in the gutter between rail and card.
- **It asks the element, it does not use a breakpoint.** The rail slides
  off-canvas below 860px and there the bare window edge is correct again; one
  `getBoundingClientRect()` test covers both, where a media query would have to
  encode the rail width, the 860px breakpoint and `.qwrap`'s 830px cap at once.
- **Collapsed counts.** The pill looked too small to matter and was not — at
  1366×768 it sat on *Review deck*. `.cl-body` is `display:none` when mini, so
  its rect is all zeros, which reads as "at the window edge" and moves the pill
  for the same reason with no special case.
- **She keeps TWO remembered positions, `pos` and `posQ`.** One would mean a
  single drag on a browse screen puts her back over the buttons the next time a
  question opens. A stored value with only `pos` falls back to the new default
  on the question screens rather than inheriting the browsing one.
- **`clepPlace()` runs from `render()`**, not only from `clepShow()` and resize —
  the corner is a function of the view now.
- **Measured, at 1920×1080 / 1440×760 / 1366×768 / 1280×800 / 1100×900 /
  900×700:** no overlap with the rail or with Skip/Next at any of them, on the
  MCQ screen, the answered screen and the free-text case screen. Below ~1300
  wide her figure overlaps the *card's left edge* — that is fine and deliberate,
  because the card scrolls.
- **⚠️ Her bubble opens over the card on a short window.** It is transient and
  has a close button, and it did the same thing over the card from the right
  corner before. Left alone.
- **⚠️ `.cl-body` must match the artwork's aspect ratio, which is now 1:1.** It is
  `112×112`, and `84×84` at the mobile breakpoint. Change one number without the
  other and `object-fit:contain` letterboxes her inside her own drag handle —
  silently, with no error. **Both sizes must move together.** It grew from 96
  because the shared canvas has headroom: her figure fills ~83% of it rather than
  all of it, so at the old size she rendered visibly smaller than before.
- **⚠️ `.cl-base` sits at `bottom:9%`, not 0.** Her feet land at 89% of the shared
  canvas; a light pool at the box edge floats below her.
- **⚠️ `naturalWidth` is the only check that catches a broken `src`.** A wrong
  path boots clean, throws nothing, logs nothing, and simply shows an empty
  corner. Assert `img.complete && img.naturalWidth > 0`, never mere presence —
  and assert it for **all nine**, not just the one on screen.
- **The `<img>` is fine over `file://`** — images are not CORS-restricted the way
  a font or an ES module is, so a relative path works from a double-clicked copy.
  **Only a bundler would turn them into data: URIs**, because a single file has
  no `assets\` folder. That is why the filename is a **value in `CLEP_POSES`**
  and the path is built at runtime by `poseSrc()` — the same shape as `MOD_ART`
  and `qImgSrc()` — so a bundler rewrites the map's values and drops the
  wrapper. Miss that step and the corner goes empty on the first pose change.
  **⚠️ Correction, 2026-08-04: `bundle.ps1` DOES NOT EXIST and never did.** This
  note used to say it "already does" this; searching the repo found no such
  file. The single-file build is still owed work. What is real is the *shape* —
  every image path in the app is built by a function from a stored basename,
  which is what will make that build a small job rather than a rewrite.
- **⚠️ The screenshot harness must copy the WHOLE `app\` folder.** Copying only
  `index.html` left it with no `assets\clep\` and photographed a broken-image
  glyph that looked exactly like an app bug.
- **The light pool is a DOM element, not part of the sprite.** It has to pulse
  with the bob, and baking it in would drag a grey ellipse onto the parchment
  theme. `@keyframes clPool` **restates `translateX(-50%)` in every frame** — the
  pool is centred with a transform, and a bare `scaleX()` replaces the whole
  transform and shunts it half its width sideways.
- **The figure does NOT re-theme, and must not be made to.** Only her chrome
  flips: panel, text, edge, halo. A filter that "adapts" her for parchment is
  repainting the user's drawing. Three tokens survive — `--cl-1` (bubble bold),
  `--cl-2` (pool, tool hover), `--cl-w` (the small dial on her collapsed pill).
- **~~She wears a CSS stephane.~~ DELETED 2026-08-02, same day it was built.**
  It was drawn because her single pose had no crown. The nine poses **wear a
  gold wreath in the artwork**, so the CSS one became a second crown on her head
  and every rule serving it was removed: `.cl-crown`, `.cr-leaf`, `.cr-band`,
  `.cr-gem`, `.cr-scan`, `--cl-cr`, `clepCrown()`.
  **Do not rebuild it.** Two findings from it are worth keeping anyway:
  - **⚠️ ANY CLOSED SHAPE ON HER HEAD READS AS A HAT at 30px.** A filled dome
    photographed as a **pith helmet**; flattening it only turned it into a
    **beret**. Openwork — a fillet with leaves rising off it — is what reads as
    a crown. Three rounds, each judged by rasterising, none of it visible in the
    source.
  - **⚠️ Ornaments do not centre at 50%.** In the old artwork her head spanned
    x=48..327 of 440, so its centre was **42.6%** of the box; centring on the box
    parked the crown over her ear. **The new poses are centred**, but measure
    before assuming that of any future artwork.
- **Her copy is deliberately short** (user's request, 2026-08-02): the nine
  static `CL_TIPS` went 1,642 → 1,078 characters and `clepFacts()` 926 → 666,
  same information. A companion who talks past the second line stops being read.
- **`.sess-live .grid` restates its columns.** The shared `.g3` asks for a 258px
  minimum, right for the page and wrong beside a 172px ring: three tiles wrapped
  to 2 + 1.
- **Motion, at the user's explicit decision (2026-08-02), is NOT gated on the
  reading views** — she glitches everywhere, including mid-question. The concern
  was raised and overruled. `prefers-reduced-motion` still stops every loop, and
  `clepGlitchLoop()` checks it before scheduling, because CSS alone would leave
  the JS timer running.
- **Idle chatter is the one thing held back from `STILL_VIEWS`.** A tip you
  triggered by arriving is welcome mid-question; an unprompted aside is not.
- **Tips fire once per view per visit**, tracked in `CLEP.seen` (memory only, so
  it resets each session). Tapping her always re-explains. That is the line
  between a companion and a nag.

### Sessions and automatic backup — 2026-08-02

**Every session time is a TIMESTAMP, never "seconds remaining."** A phone that
sleeps, a lid, a reload — all of them stop a decremented countdown and none of
them touch a clock recomputed from when the block started. `S.sess.lost`
accumulates paused time. Questions answered during a session are counted off
`S.answers[id].at`, not tallied as they go, so the count survives a reload.

**The 1 s tick repaints four nodes via `paintSessionLive()`, never `render()`** —
a full render every second rebuilds the page under the reader's cursor.

**Import / Export are gone** (user's request, 2026-08-02). They worked; they
just required remembering to press them. Replaced by `wardround.bak.<profileId>`:
newest three snapshots, then one per day for seven days, then whatever fits a
1.5 MB budget, with two surviving the budget regardless. `loadState()` reaches
for the newest snapshot when the live key is **missing or unparseable** — the
parse got its own `try` for exactly this, since a corrupt value used to drop the
app to memory-only. **It deliberately does not second-guess a state that loads
cleanly**: "your progress looks smaller than it did" is a judgement, and a wrong
one silently overwrites real work. A thinner-but-valid state is offered in the
list instead. The rescue download and file-restore live inside the panel.

---

## 7. Verifying a change

There is no test framework. Verification is ad-hoc but must actually be run:

- Open `app\index.html` as a `file://` URL. It must boot with **zero console errors**, render all
  four modules, and show all 104 chapters (empty ones greyed-out but visible — deliberate, so the
  syllabus shape is always apparent).

> **Gotcha — the preview pane snapshots the files once.** After editing a data file it keeps serving
> the old copy, `location.href` does not change, and re-navigating, cache-busting query strings and
> even copying the app to a fresh path all fail to refresh it. A data file will silently report
> **0 items** while the file on disk is correct. Reload the edited file into the live page instead,
> then validate against that:
>
> ```js
> new Promise(res=>{ const s=document.createElement('script');
>   s.src='data/questions.ent.js?cb='+Date.now();
>   s.onload=()=>res((window.Q_ENT||[]).length); document.head.appendChild(s); })
> ```
>
> `QUESTIONS` and `THEORY` are `const`, built once at boot, so they will not pick the change up —
> rebuild them in the check with `[].concat(window.Q_ENT||[], …)`.

**To actually SEE the app, drive Chrome headless** (`C:\Program Files\Google\Chrome\Application\
chrome.exe`, present on this machine; Edge is too). The preview pane **cannot screenshot** — every
`computer` call returns *"No site is open in this tab"* even with the app clearly loaded. Headless
Chrome renders a real `file://` boot to PNG, which the read tool can then look at. This is how the
2026-07-28 glyphs were judged, and it immediately killed two candidates that were fine on paper.

```bash
chrome --headless=new --disable-gpu --user-data-dir=<scratch>/cud-<name> \
  --screenshot=<scratch>/shot.png --window-size=1300,2700 --hide-scrollbars \
  --virtual-time-budget=9000 "file:///…/index.html"
```

Four things that each cost a wasted run:

- **Copy `app\` into the scratchpad and append the harness there.** Never instrument the real file.
- **The app boots to the gate**, so a plain screenshot only ever shows the sign-in screen. The
  harness must set `profiles=[…]` and call `enterProfile()`. Both are reachable as globals.
- **Kill animations in the harness** (`animation-duration:0s!important;transition:none!important`)
  or the shot catches a keyframe mid-entrance — the first attempt photographed a half-faded gate.
- **One Chrome at a time, each with its own `--user-data-dir`.** Three concurrent invocations all
  silently produce no file. Do not use `2>$null` on the call either; that also swallows the run.
  In practice a run still fails roughly one time in three with no output — **just re-issue it with
  a fresh `--user-data-dir`**; it succeeds on the retry.
- **Stub `showGate` in the harness** (`showGate=function(){}` at parse time). `boot()` raises the
  gate only after `loadSDK()` gives up, which offline is its full **8 s** timeout — long after a
  harness that merely enters a profile and waits. Two shots were of the sign-in screen before this.
- **`IntersectionObserver` never fires under headless virtual time**, so every `.reveal` element
  stays at `opacity:0` and the page photographs half-empty. Force `.reveal{opacity:1!important}`
  in the harness or you will "find" missing content that renders fine for the user.
- **Build the URL into a variable before passing it to Chrome.** PowerShell mangles a query string
  written inline and Chrome receives everything after the first `&` as separate arguments.

> **⚠️ PIXEL-SAMPLED CONTRAST: the box and the pixels must come from ONE frame.**
> Sampling the rendered PNG is the right instrument — it cannot be fooled the way a style-walking
> auditor can. But three separate things each produced phantom failures at ~1.0–1.5:1, and the
> signature is always the same: **the reported "worst background pixel" is the text colour itself.**
> 1. Boxes from a second Chrome run — its own empty `localStorage` changed the modal's height.
> 2. Sharing one `--user-data-dir` between the two runs — the screenshot run inherited the first
>    run's state, wrote an extra snapshot row, and the layout moved again.
> 3. Even `--screenshot` and `--dump-dom` in a single invocation still disagreed for a
>    **`position:fixed` centred modal**, by about one text line.
>
> Measure the **text Range**, not the element box — `getBoundingClientRect()` on the element
> includes its padding and its 1px border, and the border of a pill is the brightest thing in it.
> Fixing that alone moved three readings from 3.7–4.2 to 5.8–15.4.
>
> For normal-flow content this method is sound and was used to clear the companion and the session
> panel. **For a centred modal, compute from the tokens instead** — against the *darker* gradient
> stop — and say that is what you did.

For values rather than pictures, `--dump-dom` with the results written into a `<pre>` works — but
`Start-Process … -RedirectStandardOutput` is needed, since capturing chrome's stdout into a
PowerShell variable returns empty.

> **⚠️ CHECK THE AUDITOR BEFORE BELIEVING THE AUDIT.** Three successive versions of the contrast
> auditor produced false failures: one ignored alpha, one ignored gradients (39 phantom failures on
> the rail), and one took an element's gradient **or** its `background-color` but never both — `body`
> has both, so the walk ran off the top of the document and **273 elements "failed" against a white
> fallback.** A run where nearly everything fails at ~1.04:1 is a broken auditor, not a broken app.
> A correct run must composite alpha, average gradient stops, treat an element's image as a layer
> *over* its own colour, and walk through `<html>`. Seed it with a **real** profile shape too: a
> letter avatar is not reachable in this app (`AVATARS` is all emoji, or a photo), so a harness that
> invents one manufactures a `.rav` failure that cannot happen.
- After any content batch: every question's `module` and `chapter` resolve against `MODULES`; every
  `answer` index is within range of its `options`; every `qs` id in `THEORY` resolves to a real
  question. Counts match `progress\ledger.md`.
- Areas with a history of real bugs, worth re-testing after any change that could touch them:
  schedule reschedule logic, highlight overlap and erase maths, cloud merge, profile data isolation,
  and boot with the Firebase CDN unreachable.

---

@MEMORY.md
