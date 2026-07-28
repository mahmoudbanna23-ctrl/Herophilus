# Herophilus — project rules

Herophilus is a medical question bank and revision app for a 2nd-term Semester 8 syllabus at
Alexandria University: ENT, Ophthalmology, Neuropsychiatry, Pediatrics. It is built from the scanned
and digital study material in `Semester 8\`.

Named after Herophilus of Alexandria, who performed the first systematic human dissections there
around 300 BC.

These rules apply to everything inside `D:\claude os\Herophilus`. Workspace-wide rules live in
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
├─ Images\                   the user's original supplied art — source, never edited
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
  source: 'ENT QB p.44'           // file and page
}
```

Id prefixes by source bank: `entqb-`, `enthd-`, `entep-`, `peds-`, `opmcq-`, `opqb-`, `npqb-`.

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
endpoint file prints no explanation here.` If the slides do not cover the point, say `not taken from
the course material` in the explanation itself. The marker is what keeps transcribed and authored
text distinguishable; it is not optional.

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

Written **backwards from the questions**. Read the chapter's question set first, work out what
examiners actually test, then structure the notes around that — not around the textbook's ordering.

Three sources, in this order of use:

1. **Lecture slides** — the backbone. They define the syllabus's own scope and ordering, and they
   cost nothing to read.
2. **Questions + `examiner-patterns.md`** — set the emphasis, the `w` weighting, and the `intro`.
3. **Book** — depth, mechanisms, and whatever the slides skip. Page-cited.

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

If the material does not cover something, **say the material does not cover it.** Do not fill the
gap from general knowledge.

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

**Two asymmetries, both load-bearing — do not "fix" them:**

1. **The rail stays dark in light mode.** A dark sidebar against a light page is deliberate, keeps
   the app recognisable across both themes, and keeps the ~12 hardcoded `#fff` values inside
   `.rail` / `.railprof` / `.railsync` correct instead of white-on-white.
2. **`--gold` stays bright in light mode.** It is a *background* in 7 places and a text colour in
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

**The icon is `Images\Icons\Herophilus 3.png`** (user's choice, 2026-07-28): the navy medallion. Its
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
