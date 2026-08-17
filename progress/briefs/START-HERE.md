# START HERE — shared brief for a single-module transcription chat

**Written 2026-08-12.** You are one of four parallel chats working on Herophilus. This file is the
method every module chat shares. **Your own module file sits beside this one** — read that next.

---

## 0. What this project is

Herophilus is a medical question bank and revision app for a 2nd-term Semester 8 syllabus at
Alexandria University: ENT, Ophthalmology, Neuropsychiatry, Pediatrics. Vanilla HTML/CSS/JS, no
build step, runs from a `file://` double-click. **Exam period is approximately early September
2026** — the user's own estimate, not a published date.

The app is finished. **The only work outstanding is content**: transcribing questions out of scanned
commercial question banks into the module data files.

**ENT is done and stays done.** 1,516 questions live there. A separate chat is finishing it. **You
will not touch ENT.**

---

## 1. ⚠️ HARD FILE BOUNDARIES — the one rule that makes four parallel chats safe

Four chats are running at once. They cannot collide **only because each owns a disjoint set of
files.** Breaking this silently destroys another chat's work.

### Files you MAY write

| File | What |
|---|---|
| `app\data\questions.<yours>.js` | **your deliverable** — the MCQs |
| `app\data\cases.<yours>.js` | free-text cases, if your bank prints any (see §5) |
| `app\data\theory.<yours>.js` | **do not write this yet** — see §9 |
| `content\<yours>\qb-pages\*.md` and `*.js` | your verbatim transcriptions and staging files |
| `content\<yours>\lectures\*.txt` | the lecture-text cache (already populated — see your module file) |
| `progress\resume-<yours>.md` | **your ledger and your resume state.** Create it in your first hour |
| `app\assets\q\q-<yourtoken>-*.jpg` | question images, **with your module's token in the filename** |

### ⚠️ Files you must NEVER touch

| File | Why |
|---|---|
| **`app\index.html`** | **already wired for all four modules.** Every script tag you need exists. Two chats editing it corrupts it |
| **`app\data\questions.js`** | the aggregator. Already reads all eight arrays |
| **`app\data\modules.js`**, **`schedule.js`**, **`fonts.js`** | shared |
| **Any other module's `questions.*.js` / `cases.*.js` / `theory.*.js`** | not yours |
| **`MEMORY.md`** and **`progress\ledger.md`** | **shared, and its resume block is ENT-only — ignore it.** Your state goes in `progress\resume-<yours>.md` |
| **`CLAUDE.md`** (either one) | shared rules |
| **`Semester 8\`** — anything at all | **the original sources.** Never modify, rename, move or delete. Rendered PNGs go to the session scratchpad, never into the source tree |

**If you believe a shared file genuinely needs a change, STOP and tell the user.** Do not edit it.

### Git, with four chats in one repo

The repo is **private** — the content comes from commercial question banks and must stay that way.
Commit your own work normally, but **stage only your own files** (`git add` the specific paths from
the table above, never `git add -A`), or you will sweep another chat's half-finished batch into your
commit.

**⚠️ If git reports `index.lock` already exists, another chat is mid-commit. Wait a few seconds and
retry — do not delete the lock file.** Never `git push --force`, and never handle credentials
yourself: plain `git push` works, because git consumes the stored token internally.

---

## 2. The entry schema

```js
{
  id: 'opqb-glauc-32',            // unique; prefix identifies the bank — see your module file
  bank: 'gradegain',              // 'endpoint' | 'house' | 'gradegain' — set it EXPLICITLY, always
  module: 'ophtho',               // must match a MODULES id — your module file gives yours
  chapter: 'op-glauc',            // must match a chapter id in MODULES — full list in your module file
  stem: 'A 34-year-old man...',   // markdown: **bold**, tables
  options: ['...', '...'],        // 2-5 strings. Counts of 2, 3, 4 and 5 all exist and are fine
  answer: 1,                      // 0-based index
  explanation: '...',             // markdown; see §4
  objective: '...',               // one-line takeaway
  source: 'ophthalmology qb.pdf p.44',   // file and page — REQUIRED on every entry
  image: 'q-op-gg-44',            // optional — BASENAME ONLY, never a path
  imgAlt: 'Slit-lamp view of the anterior segment',  // required whenever `image` is set
  imgEssential: true              // optional — the question is unanswerable without the picture
}
```

**`var`, not `const`, at the top of the file** — the aggregator reads the array off `window`, so a
missing or broken file degrades to an empty list instead of throwing.

---

## 3. ⚠️ Six traps in the JavaScript that all fail SILENTLY

These have each cost real work. None throws a useful error.

1. **⚠️ A SYNTAX SLIP IN A DATA FILE FAILS SILENTLY AND LOOKS LIKE A CONTENT BUG.** The app boots,
   throws nothing, and reports **0 questions for your module** because the array never parsed.
   **Run the parse check in §7 after every batch.** Over `file://` the browser gives only
   `Script error. @line 0`; the Node check names the token, which is usually the fix itself.
2. **⚠️ AN APOSTROPHE CLOSES A SINGLE-QUOTED FIELD.** Writing `'Kissing disease'` or `Henle's`
   inside a `'…'` field breaks the file. **This has fired seven times.** Two fixes, in order of
   preference: **use the source's own curly quotes** (`'Kissing disease'`, `Henle's`) — more
   faithful *and* immune — or escape as `\'`. **⚠️ NEVER write `\\'`** — that emits a literal
   backslash and *then* closes the string, failing exactly like no escape at all.
3. **⚠️ `sed -i` with a `\'` replacement silently does nothing** — no error, file unchanged. Use the
   Edit tool for prose containing apostrophes.
4. **⚠️ NEVER PUT A BACKTICKED ID IN TEXT UNLESS THAT ENTRY EXISTS.** Writing `` `opqb-glauc-99` ``
   in an explanation before Q99 is written — or after it has been folded away — creates a dead
   reference. **This has fired six times.** Grep your drafted block for any id you folded *before*
   splicing it in.
5. **⚠️ `image` stores the BASENAME, never a path.** `qImgSrc(name)` builds `assets/q/<name>.jpg` at
   runtime. A literal `src=` in a template is a broken image nothing will catch.
6. **⚠️ `imgAlt` IS RENDERED AS THE VISIBLE CAPTION, SO IT MUST NOT ANSWER THE QUESTION.** Name the
   **modality and the view** and nothing more — *"Slit-lamp view of the anterior segment"*, *"an
   arrow marks the abnormality"*. **Never name the diagnosis or the finding the options turn on.**
   The detailed read belongs in the `explanation`, which is shown only after answering.

---

## 4. What an explanation must contain

> **⚠️⚠️ READ §12 BEFORE THIS SECTION — IT SETS HOW MUCH OF THE BELOW TO WRITE, AND IT SUPERSEDED
> THE OLD "full depth everywhere" RULE ON 2026-08-13.** §4 says **what an explanation must contain**;
> **§12 says how far to take it.** Full ~520 words for clinical vignettes, defective or flagged keys,
> cross-bank divergences, gap-filled tagged answers and discrimination questions; **~250 words for a
> straight slide-recall question**, still carrying the key, the verbatim quote, **why every distractor
> is wrong**, one clinical point and the citation. **Nothing below becomes optional at either length**
> — items 1–5 of the structure are the floor, not the ceiling.

The ENT corpus averages ~520 words per explanation in the work written before that ruling. Structure
that works, at either depth:

- **Lead with the key and why it is right**, in one bolded sentence.
- **Ground it in the lecture slides**, quoted, with the filename named in the text.
- **A discrimination table** wherever the question turns on telling two look-alikes apart.
- **Why each wrong option is wrong** — the exam tests this as much as the key.
- **The clinical bottom line** — what changes management.

### The three content rules that override everything

**(a) ⚠️ A GAP IN THE MATERIAL IS ANSWERED, NOT DECLARED.** The user's explicit instruction,
2026-08-04, verbatim: *"If the explanations doesn't exist in the Book and the PPT you fill it from
general medical knowledge. Try to avoid writing 'the course material doesn't cover this' as much as
you can."* Fill the gap and give the whole answer — the entity, how it presents, why the distractors
are wrong, the comparison being tested. **Keep `not taken from the course material` as a short tag
on the claim**, so an unsourced statement stays identifiable. **What must never survive is a
sentence that announces the gap and stops.**

**⚠️ BUT READ THE SLIDE BEFORE DECLARING A GAP.** This rule has fired six times in ENT — a point
staged as "covered nowhere" turned out to be printed on a cached lecture. Check
`content\<yours>\lectures\` first, every time.

**(b) ⚠️ A DEFECTIVE KEY IS NOTED, NEVER DISPUTED — the user's ruling, 2026-08-11**, verbatim: *"put
the answer as Grade Gain says and put a note beside it that it's not mentioned directly in the
lectures. **Do that with any questions that have errors like that, just leave a note beside.**"*
So: `answer` is **always** the bank's printed key. The discrepancy becomes a short note **inside the
`explanation`** saying what the lecture says, or that none covers it. **Never take a key dispute to
the user.** Interview them only for something they can actually supply, like a missing file.

**(c) The authored-explanation marker.** Where the bank **prints an explanation box**, capture it
verbatim and leave it unmarked. Where it prints none, write the explanation and **end it with**:

```
Written for this bank — <bank filename> prints no explanation here.
```

**⚠️ THE MARKER GOES AT THE END OF `explanation`, NEVER IN `source`.** That fault has fired three
times in ENT and the third cost fourteen entries. **Predict the delta before each splice** — new
entries minus boxed ones — then count and confirm it matched.

---

## 5. Reading the source

**Every question bank is an image-only scan. `pdftotext` returns 0 characters.** Render page ranges
to PNG in the **scratchpad** and read the images — that sidesteps the 100 MB read-tool limit
entirely, because the PDF itself is never opened by the reader.

Poppler is installed but **off PATH**:

```bash
"/c/Users/Alfa388/AppData/Local/Microsoft/WinGet/Packages/oschwartz10612.Poppler_Microsoft.Winget.Source_8wekyb3d8bbwe/poppler-25.07.0/Library/bin/pdftoppm.exe" -png -r 130 -f <first> -l <last> "<source.pdf>" "<scratchpad>/<prefix>"
```

`-r 130` reads a compact two-column bank cleanly without tiling. Raise it if text is soft.

**⚠️ `.ps1` script files are blocked by execution policy — pass PowerShell inline.**

### Eight structural traps, all found the hard way in ENT

1. **⚠️ ESTABLISH THE PDF-PAGE-TO-BOOK-PAGE OFFSET FIRST**, and write it in your resume file. In
   ENT's Grade Gain it is *PDF page = book page + 9*. Yours will differ.
2. **⚠️ SAMPLE THE FIRST TEN PAGES FOR STRUCTURE BEFORE STAGING ANYTHING.** Banks differ wildly:
   ENT's endpoint printed every question **twice**; Grade Gain prints once, ~10 per page, with
   questions and answers on **separate pages that overlap**. **Sample for structure, never for
   rate.**
3. **⚠️ NO CONTENTS PAGE COUNTS THE QUESTIONS, AND THE ERROR IS ALWAYS UPWARD.** ENT's Grade Gain
   contents page was wrong **seventeen times in twenty-one**, once by eleven. Trust a page map for
   *where*; **render the range and count what is printed.**
4. **⚠️ RENDER ONE PAGE PAST THE LAST ANSWER PAGE, EVERY TIME.** A question tail can share the first
   answer page, and answers can run past the last one. Both defects hit ENT, unpredictably, in both
   directions. One nearly lost seven of twenty-three keys.
5. **⚠️ READ EVERY PAGE. Never alternate.** The printed numbering lies.
6. **⚠️ A VIGNETTE CAN BE PRINTED AS A HEADER OVER A NUMBERED BLOCK** — *"For questions 106–109"* +
   a case belonging to no single question. **Restate it into every question that needs it**, or
   those questions ship with no vignette at all. **But not every question under a header inherits
   it** — some ask general questions; giving them the patient invents one.
7. **⚠️ REPAIR EVERY BACK-REFERENCE. THE DECK IS SHUFFLED**, so *"the previous case"* points at
   nothing. Also seen: a stem printing its own number twice; a stem with **no question at all**
   (supply the sentence the options answer); a stem asking **two** questions over one option list;
   and a back-reference that **contradicts its own antecedent**.
8. **⚠️ READ EVERY OPTION AS A SENTENCE.** One ENT option was printed truncated mid-word and
   survived staging and two sweep passes.

### Figures

**Crop only a figure printed WITH the question.** A figure printed on the **answer page** explains
the answer, and `image` renders *between the stem and the options* — cropping it gives the answer
away. **Describe it or transcribe it as markdown instead.**

**⚠️ LOOK AT EVERY CROP.** In ENT, **13 of 13 Grade Gain crops were wrong on the first attempt**,
clipping a label or catching question text. **The trap is the layout, not the measurement.** Crop by
hand with `pdftoppm -x -y -W -H` and rasterise the result before keeping it.

**Name every image with your module's token** — `q-<yourtoken>-<page>.jpg` — so four chats writing
into `app\assets\q\` cannot overwrite each other.

### Free-text cases

Where a bank prints a **vignette and a diagnosis with no options**, do **not** force it into the MCQ
schema — inventing distractors is authoring. Use `type:'case'` in `app\data\cases.<yours>.js`. Full
schema in `CLAUDE.md` §4 under *Free-text cases*. **Write the `terms` arrays generously** —
abbreviation, full name, common misspellings and the clinical synonym.

---

## 6. The duplicate sweep

Banks reprint each other and themselves. In ENT this caught **557+ reprints**.

**⚠️ YOUR MODULE STARTS EMPTY, SO FOR YOUR FIRST BANK THERE IS NOTHING TO SWEEP AGAINST.** Do not
burn time on a cross-bank sweep until your second bank. **Do run a within-bank sweep from the
start** — banks reprint themselves.

Normalise first: lowercase, strip punctuation, **sort the options**. Then six stages:

| | Match on |
|---|---|
| **A** | stem + option set |
| **B** | option set + key |
| **C** | key + option count |
| **D** | ≤1 differing token in the key (symmetric difference) |
| **E** | **stem-token ranking** over all of them |
| **F** | **option-token ranking** over all of them |

**⚠️ E AND F ARE THE INSTRUMENT; A–D ARE A CONVENIENCE.** In three ENT chapters the real fold
reached neither A nor B. **Read the ranked list — do not trust a threshold.** Known blind spots: a
bare ordinal option set (*Grade 1/2/3/4*) or a two-item true/false set matches at 1.00 on nothing;
an abbreviated option set shares no tokens with a spelled-out one (one fold scored **0.13**).

**The folding test:** identical stem + identical key + a **dropped or added** distractor = a
**reprint, fold it**. A **replaced** distractor, or a reworded stem with a replaced option = a **new
question, hold both**. Same options + same key + **different stem** = **not a fold**.

**On a cross-bank match, ADD THE BANK — never add an entry:**

```js
{ id:'opqb-glauc-32', bank:'gradegain', alsoIn:['house'], … }
```

`bank` means *the bank it was transcribed from*; `alsoIn` lists every other bank that prints it. A
**within-bank** reprint takes **no `alsoIn`** — just hold it once.

**⚠️ EVERY BANK MIS-KEYS ITSELF SOMEWHERE. GO LOOKING FOR IT.** Record it per §4(b).

---

## 7. Validating a batch — run this after every splice

```bash
cd "D:/claude os/Medical school/Herophilus" && node -e "
const fs=require('fs'),vm=require('vm');
const c={window:{},console};c.window=c;vm.createContext(c);
for(const f of ['questions.ent.js','questions.peds.js','questions.ophtho.js','questions.neuro.js',
                'cases.ent.js','cases.peds.js','cases.ophtho.js','cases.neuro.js','questions.js']){
  try{ vm.runInContext(fs.readFileSync('app/data/'+f,'utf8'),c) }
  catch(e){ console.log('PARSE FAIL '+f+': '+e.message); process.exit(1) }
}
vm.runInContext(fs.readFileSync('app/data/modules.js','utf8'),c);
const M=vm.runInContext('MODULES',c), Q=vm.runInContext('QUESTIONS',c);
const chaps=new Set(); for(const m of M) for(const g of m.groups) for(const ch of g.chapters) chaps.add(ch[0]);
const mods=new Set(M.map(m=>m.id)), ids=new Set(); let bad=0;
for(const q of Q){
  const e=[];
  if(!mods.has(q.module)) e.push('module '+q.module);
  if(!chaps.has(q.chapter)) e.push('chapter '+q.chapter);
  if(ids.has(q.id)) e.push('DUPLICATE id'); ids.add(q.id);
  if(q.type!=='case'){
    if(!Array.isArray(q.options)||q.options.length<2) e.push('options');
    if(!(q.answer>=0&&q.answer<(q.options||[]).length)) e.push('answer out of range');
  }
  if(!q.source) e.push('no source');
  if(!q.explanation) e.push('no explanation');
  if(q.image&&!q.imgAlt) e.push('image without imgAlt');
  if(e.length){ bad++; console.log(q.id+': '+e.join(', ')) }
}
// dead backticked ids: require a bank prefix AND a trailing digit, or chapter ids match
const txt=Q.map(q=>[q.stem,q.explanation,q.objective,q.source].join(' ')).join(' ');
const refs=new Set((txt.match(/\`[a-z]{2,6}(?:ep|hd|qb|mcq)[a-z0-9-]*[0-9]\`/g)||[]).map(s=>s.slice(1,-1)));
const dead=[...refs].filter(r=>!ids.has(r));
console.log('---'); console.log('QUESTIONS total:', Q.length);
console.log('bad entries:', bad, '| dead backticked ids:', dead.length, dead.slice(0,20).join(' '));
"
```

**⚠️ A DEAD-ID LIST FULL OF IDS THAT OBVIOUSLY EXIST MEANS THE DATA FILE DID NOT PARSE**, not that
the references are wrong. That signature is diagnostic.

**⚠️ AND A COUNTER THAT DOES NOT MOVE IS A FINDING.** If you spliced 30 entries and the total rose
by 0, the array did not parse. Reconcile every batch: **written + folded = printed.**

### Seeing the app

The preview pane **snapshots files once and cannot screenshot**. To actually look at the app, drive
headless Chrome against a **copy of `app\` in the scratchpad** with a harness appended — never
instrument the real file. Full recipe and its six gotchas: `CLAUDE.md` §7. You will rarely need
this; the Node check above covers content work.

---

## 8. Your resume file

**Create `progress\resume-<yours>.md` in your first hour and keep it current.** It is the only thing
that lets your work be picked up cold after a compaction. It must always answer:

- Which bank, which PDF, **the page offset**, and the exact page you stopped on
- The page map: which pages hold questions, which hold answers
- What is transcribed, what is written, what is folded — **and the three numbers reconciling**
- Every defect recorded and every fold applied
- The next concrete action, phrased as execution rather than investigation

---

## 9. Scope — the whole module, in the cheapest order

**⚠️⚠️ THE PARALLEL CHATS EXIST TO GO FASTER, NOT TO DO LESS — the user's explicit correction,
2026-08-12: *"I don't want in your brief to ignore any questions or any important thing in the
theoretical notes. I did the separate chats to speed up not to have unfinished work."***

**Your module's full scope is: every question in every bank it has, then its theory notes.** The
ordering below is about **sequencing for value, not about dropping anything.** Nothing on this list
is optional, and **you may not quietly narrow it.**

### The order, and why

1. **The compact bank(s) first** — Grade Gain and/or House, ~100–185 pages each.
2. **Then the endpoint file** — 2,000–4,000 pages. It is **in scope and must be done**; it goes last
   only because it runs **4.4 pages per question against the compact banks' 0.17** (measured
   2026-08-12), so the same hours buy far more coverage earlier in the compact books.
3. **Then the theory notes for the module** — see below.

**⚠️ Tell the user where you are at each handover between those three.** Not to ask permission to
continue — to keep them informed about pace so the decisions stay theirs.

### Theory notes are IN SCOPE, and the brief for them is demanding

**⚠️ THE THEORY IS A NEW STUDY SOURCE, NOT A SUMMARY OF THE LECTURES** — the user's instruction of
2026-08-04. It must be **sufficient to study and sit the exam from, on its own**, without opening a
slide deck or a book. Verbatim: *"I want the study notes to be sufficient for me to depend on for my
studying… It doesn't necessarily need to be short if it ignores important parts of the lecture."*

**Length is never the goal. Completeness of the important is the goal. Dropping something important
to keep it short is the one unacceptable failure.** If a chapter needs 4,000 words, it gets 4,000.

Write it **backwards from the questions**: read the chapter's transcribed question set first, work
out what examiners actually test, then structure the notes around that. **The hard floor is that
every question in a chapter must be answerable from that chapter's notes alone.**

**Four tests for "important" — anything meeting ONE of them is in:** (1) the bank asks it, including
as a *wrong* option, since knowing why it is wrong is what the exam tests; (2) the slides give it
weight — a whole slide, a table, a bolded or repeated line; (3) clinical judgement — it changes
management, it is an emergency, it distinguishes two look-alikes, or missing it harms a patient;
(4) it is a named entity, a classic sign, or a number the material states.

**What may be dropped, and it must be SAID that it was dropped:** history-of-the-specialty asides,
epidemiology with no bearing on an answer, drug doses the material does not state, mechanism deeper
than the material goes, and anything the slides mention once that no question touches. **Record the
omissions per chapter, so a gap is a decision on the record rather than an accident.**

Full schema, the `w` weighting, `intro`, tables and flowcharts: `CLAUDE.md` §4 under *Theory*.
**Prefer discrimination tables wherever a question turns on telling two look-alikes apart, and
populate `qs` so the question↔notes linking works.**

### Genuinely out of scope

- **The app's design, the Clepsydra, the schedule, the gate** — do not touch any of them.
- **Reading a whole PDF in one go.** Explicit page ranges only — that is a method rule, not a scope
  cut; every page still gets read.

**Cache everything you read.** A scanned page should be rendered and read once, ever.

### ⚠️ If you cannot finish, SAY SO LOUDLY — never scale the work down silently

Scaling the work down is the user's call, not yours. If time or context runs short, **finish what
you are on, write the exact resume state, and report plainly what is left and why.** Never trim a
bank, skip a topic, thin an explanation or shorten the notes to make the remainder fit.

---

## 10. Two standing user preferences

- **Report in plain language.** The user has no programming background: *"I don't understand really
  I have no programing / coding background."*
- **Nothing may be left incomplete or wrong** — a missing option, a truncated stem, a
  mis-transcription. Verbatim: *"make sure not to let any information slips as it might affects my
  performance in the exam."* Where the **source itself** is wrong, follow §4(b): key it as printed,
  note the discrepancy.

---

## 11. ⚠️ SUBAGENT PROTOCOL — adopted 2026-08-12 at the user's decision

Each module chat now runs **hub-and-spoke**: the chat itself is the **hub**, and it launches
**background Opus subagents** to draft topics in parallel. The point is wall-clock speed at the
same quality bar. **Nothing in §§1–10 is relaxed by this section.**

### The one rule that makes it safe: THE HUB IS THE SOLE WRITER

**Subagents draft. The hub merges.** The six-stage sweep and the `alsoIn` fold contract are only
correct when merging happens in one place, in sequence — and two writers on one data file corrupt
it silently (proven five times in ENT).

| | The HUB (your main chat) | A SUBAGENT |
|---|---|---|
| Writes | `questions.<mod>.js`, `cases.<mod>.js`, `theory.<mod>.js`, `resume-<mod>.md`, git commits | `content\<mod>\qb-pages\<bank>-<topic>.array.js` + `.draft.js`, lecture-cache files it transcribed, image crops |
| Never | — | **data files, resume files, MEMORY/ledger/briefs, `index.html`, git — ever** |
| Does | authoritative sweep, fold decisions, splice, §7 validation, marker-delta check, spot-check, commit, interview batching | render → read every page → stage verbatim → ground in lectures → draft finished entries → return a manifest |

### Launching a subagent

- **One topic/chapter of one bank per invocation** — never a whole bank; it will not fit a context.
- `general-purpose` agent, **`model: "opus"`**, **run in background**. **≤ 2 live at once per chat**
  (all four chats share one usage pool — 8 streams total). **Scale to 3 only after a full day with
  no rate-limit stalls**, and drop to 1 after any stall or collision.
- **Prompt template** (keep it lean — the subagent reads the briefs from disk, do not inline them):

> Read `D:\claude os\Medical school\Herophilus\progress\briefs\START-HERE.md` (especially §2–§6 and §10) and
> `progress\briefs\<module>.md`, then follow them exactly. You are drafting ONE topic:
> **<bank name>, topic <n> "<title>"**, questions book pp.X–Y, answers p.Z
> (**PDF page = book page + <k>**), ids `<prefix>-<n>` onward. Method: render the range **plus one
> page past the last answer page** (Poppler command in §5), read EVERY page visually, count what is
> printed (never trust the promised count), stage verbatim to
> `content\<mod>\qb-pages\<bank>-t<n>.array.js` (`var <NAME>_STAGED = [...]` with n/p/key/stem/opts,
> plus box/note/ref where printed). Ground every entry in `content\<mod>\lectures\` — **read the
> slide before declaring a gap**; if a needed deck is uncached or a watermark, read it as 4-up
> contact sheets at 110 dpi and cache the transcription. Then draft FINISHED entries at full depth
> (~520-word explanations, §4 structure, markers/tags/defect notes per §4a–c) to
> `content\<mod>\qb-pages\<bank>-t<n>.draft.js` — entry objects only, comma-separated, no wrapper.
> Run a within-batch duplicate check and list suspected cross-corpus duplicates; do NOT fold
> anything yourself. Image crops go to `app\assets\q\q-<mod token>-<bank token>-<page>.jpg`, looked
> at before keeping, `imgAlt` per §3.6. **You must NOT touch any `app\data\*.js`, any resume file,
> MEMORY.md, the ledger, the briefs, index.html, or git.** Return ONLY a compact manifest — no
> question text: printed/drafted/boxed counts; the page map you actually used + offset; defects
> found (§4b shape); suspected duplicates (question number + normalized key + what it matched);
> gaps filled and tagged; interview items; exact paths of your deliverables; predicted marker
> delta (drafted − boxed).

### Merging a batch (the hub, on each manifest)

1. **Splice ONE batch at a time.** If two banks' batches are waiting, do A fully, then B — B's
   sweep must run against the corpus that already includes A, or cross-bank folds are missed.
2. Run the **authoritative six-stage sweep** (§6) of the draft against the whole corpus. Decide
   folds yourself; apply `alsoIn`/fold notes; **grep the draft for folded ids before splicing**.
3. Splice, then §7 validator, then **marker delta** (predicted vs observed — it has caught five
   faults in ENT, in both directions), then reconcile **written + folded = printed**.
4. **Spot-check 3–5 entries in full and every defect note** against the staged array.
5. Delete the `.draft.js` (the `.array.js` stays as the permanent verbatim record). Commit own
   paths only. Update the resume file, including the **subagent board**:

```
| Slot | Bank | Topic | State (launched / manifest received / merged) | Last manifest counts |
```

6. **Batch interview items** to the user at topic close — never per sentence.

### Theory, when your module's last bank closes

Switch the subagent slots to **one CHAPTER per subagent**: input is that chapter's full question
set + its 1–3 lecture decks + `content\<mod>\examiner-patterns.md` (where it exists); output is
the chapter's complete THEORY entry (the new-study-source brief, `CLAUDE.md` §4) to a draft file.
The hub splices into `theory.<mod>.js` under the same single-writer rules.

**Now read your module file.**

---

## 12. ⚠️ WRITING BUDGET — the user's ruling of 2026-08-13, and it SUPERSEDES the 2026-08-12 "full depth everywhere" choice

The user asked how to go faster and spend fewer tokens **without ignoring anything important**, was
offered the trade-offs explicitly, and chose **adaptive depth** and **write-once tables**. Three
rules follow. **They change how much is written, never WHAT is covered.**

> **⚠️ SCOPE IS UNTOUCHED AND THIS IS NOT NEGOTIABLE.** Every question in every bank is still
> transcribed, every one of the six sweep stages still runs, every defect is still recorded, every
> gap is still *answered* and tagged, and the theory notes are still a new study source sufficient
> to sit the exam from. The user's correction of 2026-08-12 stands verbatim: *"I don't want in your
> brief to ignore any questions or any important thing in the theoretical notes."* **If time runs
> short, say so loudly — never trim a bank.**

### 12.1 Adaptive depth — full depth where it earns it, ~250 words where it does not

**Keep the full ~520-word treatment for:**

- **clinical vignettes** — anything with a patient in it, where management or a differential turns
  on the answer;
- **defective or flagged keys**, and every **cross-bank divergence** — the note has to carry the
  reasoning or it is worthless;
- **gap-filled questions** — where the answer comes from general medical knowledge and is tagged.
  A tagged claim with no supporting depth is the "dead end" the user forbade;
- **discrimination questions** — anything turning on telling two look-alikes apart;
- anything the bank prints **no box** for **and** the lectures cover **thinly**.

**Write ~250 words for a straight slide-recall question** — *"which sentence is on the slide"*, an
`except` list that is one slide's bullets inverted, a definition, a named law. Four things are
mandatory and nothing else is:

1. the **key**, with the **verbatim source quote** that grounds it;
2. **why each wrong option is wrong** — never skipped, the exam tests the distractors;
3. **one** clinical point that makes the fact usable;
4. the citation.

**⚠️ THE TEST IS NOT LENGTH, IT IS WHETHER THE CHAPTER'S NOTES COULD STILL BE WRITTEN FROM THESE
ENTRIES.** If cutting a paragraph would lose a fact the theory pass needs, the paragraph stays.

### 12.2 Write the shared table ONCE

Sibling questions in a topic keep re-printing the same comparison (VFSS vs FEES appeared in four of
topic 11's entries; rigid vs flexible vs direct vs mirror in five). **Put the fullest version in one
entry and give the siblings a single line — "full comparison table in `<id>`."**

- **⚠️ ONLY EVER POINT AT AN ID THAT ALREADY EXISTS.** The dead-id rule is unchanged and this makes
  it easier to break: never backtick a number you have not written yet, and re-run the pre-splice
  grep after every fold.
- The app links questions to each other, so the learner reaches it in one tap.
- **A discrimination table that IS the answer to its own question is not shared** — it stays in
  full, in place.

### 12.3 `source` is a CITATION, not a second explanation

`source` had grown to 150–250 words restating what the explanation already said. **It carries only:**

> bank file + page + printed number; whether a box was printed; the lecture file(s) that ground it,
> named; **where the "not taken from the course material" tags sit**; any defect note; cross-refs.

Quote the lecture **in the explanation**, cite it in `source`. The marker audit anchors on the
**end of `explanation`**, so this is safe — but **⚠️ the marker still must never live in `source`**,
which has been the single most repeated fault in this project.

### 12.4 What did NOT change

**Subagent cap stays at 2 per chat.** The bottleneck is the shared usage pool, not the number of
slots — a third agent adds contention, not throughput. Everything in §§1–11 stands.

---

## 13. ⚠️⚠️ THEORY NOW COMES FIRST — the user's decision of 2026-08-13, and it REVERSES §9's ordering and §11's "when your module's last bank closes"

The user set a deadline, was shown the measured arithmetic, and chose the split. **Read this before
§9 and §11 — where they conflict, this section wins.**

### 13.1 The decision

| | |
|---|---|
| **NOW → ~2026-08-22** | **Both subagent slots write THEORY CHAPTERS.** Question transcription pauses. |
| **~2026-08-22 → ~2026-09-07** | Question banks resume and run to completion. Nothing is dropped. |

**Why this order, and it is not arbitrary.** The exam is approximately early September. **Notes
that arrive the week of the exam are notes the user skims.** The corpus already holds **1,930
questions** and **zero chapters of notes** — so the marginal value of one more chapter of notes is
far higher than one more topic of MCQs. Finishing theory by the 22nd leaves **~2 weeks to actually
revise from it**, which is the entire point of writing it.

**Questions resuming afterwards costs the user nothing**, because `S.answers` is keyed by **question
id** in `wardround.v3.<profileId>`: questions added later are **purely additive**. No counter
resets, no progress is disturbed, nothing already answered has to be re-done. The bank fills in
underneath the learner while they revise.

### 13.2 ⚠️ THE REAL COST OF REORDERING, AND IT MUST NOT BE HIDDEN

`CLAUDE.md` §4 says theory is **written backwards from the questions** — read the chapter's question
set first, then structure the notes around what examiners actually test. **That instrument is now
weaker for three of the four modules**, and the honest numbers are:

| Module | Questions | Chapters | Per chapter | Test 1 strength |
|---|---|---|---|---|
| **ENT** | 1,638 | 30 | **~55** | **Strong — write normally** |
| **Ophthalmology** | 112 | 26 | ~4.3 | **⚠️ Thin** |
| **Neuropsychiatry** | 99 | 27 | ~3.7 | **⚠️ Thin** |
| **Pediatrics** | 81 | 21 | ~3.9 | **⚠️ Thin** |

**What this changes, concretely.** Of the four importance tests in `CLAUDE.md` §4, only **test 1
("the bank asks it")** weakens. **Tests 2, 3 and 4 are untouched** and now carry the weight:

2. **The slides give it weight** — and every module's lecture cache is complete and paid for:
   **ENT 34, Pediatrics 64, Ophthalmology 27, Neuropsychiatry 25 = 150 cached files.** The slides
   *define the syllabus's own scope and ordering*; that was always the backbone, and it still is.
3. **Clinical judgement** — emergencies, red flags, what changes management, what distinguishes two
   look-alikes.
4. **Named entities, classic signs, and numbers** the material states.

**⚠️ SO FOR THE THREE THIN MODULES, LEAN HARDER ON THE SLIDES AND SAY SO IN THE CHAPTER'S OMISSION
NOTE.** Do not pretend a 4-question chapter told you what examiners emphasise. `examiner-patterns.md`
exists for **ENT only** — the other three have none, and inventing one from 4 questions would be
manufacturing evidence.

### 13.3 ⚠️ THE RECONCILIATION PASS — mandatory, and it is what makes this safe

The hard floor in `CLAUDE.md` §4 is **"every question in a chapter must be answerable from that
chapter's notes alone."** Writing notes before the banks close makes that a **moving target**: a
question transcribed in September may not be answerable from notes written in August.

> **⚠️ THEREFORE: WHEN A MODULE'S BANKS FINALLY CLOSE, RE-CHECK EVERY CHAPTER'S NEW QUESTIONS
> AGAINST ITS NOTES AND PATCH THE GAPS.** This is cheap — it is a diff, not a rewrite — and it is
> **not optional.** Without it the theory quietly stops meeting its own contract.

Record it per chapter, so a gap is a decision on the record rather than an accident:

- while writing, append each chapter's `qs` from the questions that **exist now**;
- at reconciliation, add the later ids and patch any fact the notes do not cover;
- the omission note says which pass it was written in.

### 13.4 Working rules for the theory sprint

- **One CHAPTER per subagent invocation.** Input: that chapter's full current question set, its
  1–3 cached lectures, and `examiner-patterns.md` where it exists. Output: the chapter's `THEORY`
  entry drafted to `content\<mod>\theory-drafts\<chapter-id>.draft.js`.
- **Subagents still never touch `theory.<mod>.js`, git, or any data file.** §11's boundaries are
  unchanged — the chat splices.
- **The four theory stub files are already wired** into `index.html` (`theory.ent.js`,
  `theory.peds.js`, `theory.ophtho.js`, `theory.neuro.js`), so nothing shared needs editing.
- **⚠️ §12's adaptive depth DOES NOT APPLY TO THEORY.** It governs question *explanations*. The
  theory brief is unchanged and absolute: **a new study source, sufficient to sit the exam from
  alone, length never the goal, dropping something important the one unacceptable failure.** The
  saving §12 buys is spent here.
- **Chapter budget:** 30 ENT + 26 Ophthalmology + 27 Neuropsychiatry + 21 Pediatrics = **104**.
  Eight streams, ~13 chapters each, ~2 per stream per day.
- **⚠️ If a chat will not make the 22nd, SAY SO EARLY AND LOUDLY.** The user's standing instruction
  holds: never thin the notes to make the remainder fit. Scaling down is their call, not yours.

---

## 14. ⚠️⚠️ THEORY IS SLIDE-DENSITY REVISION NOTES — the user's SECOND ruling of 2026-08-13, which SUPERSEDES the first §14, §13.4, and `CLAUDE.md` §4's "new study source" brief

**The first revision-notes format FAILED and the user said so twice.** Chapters written under it
printed at 30–47 pages against lectures of 977–2,289 words — **6× to 13× the source**. Verbatim:
*"The PDF you send is toooo much… the original sources are much less than yours. Studying from your
source is going to be a waste of time and actually contraindicates the whole purpose of the project
which is making my study easier and faster."*

**The root cause is known and it was a RULE, not sloppiness:** *"every question answerable from the
notes alone, including why each wrong option is wrong"* forced ~450 distractor-rejections per big
chapter into prose — **duplicating explanations the app already holds inside every question
entry**, one click away through the `qs` links. That rule is now REVOKED in that form.

### 14.1 The word budget — hard, computed BEFORE writing, stated in the draft header

> **body words ≤ the summed word count of the chapter's cached lecture files**
> (`wc -w` on `content\<mod>\lectures\<file>.txt`), **floor 600, cap 3,000.**

The lecture is the syllabus; notes the size of the lecture are notes, notes at 9× the lecture are
a second textbook. The four known ENT examples: Stridor (L6) ≈ 2,300 w · Tonsils (L3) ≈ 1,800 w ·
CSOM (L16 + L17,18) ≈ 1,570 w · AOM (L21.1 + L21.2) ≈ 1,000 w. **The validator counts body words
at merge; over budget by >10 % goes back for compression, not into the app.**

> **⚠️ THE 10 % TOLERANCE IS A TRIGGER TO LOOK, NOT THE ACCEPTANCE TEST. THE ACCEPTANCE TEST IS
> PAGES, AND IT IS MEASURED — never inferred from the word count.** Ruled 2026-08-14 on `ent-audio`,
> which came in at **1,701 words against a 1,450 budget, +17.3 %**, and its agent correctly refused
> to cut: reaching the tolerance cost four lecture slides, and reaching the strict budget left **2 of
> 58 questions unanswerable.** It was itemised rather than cut, exactly as the rule below requires.
> **Rendered, it prints at SEVEN PAGES** — the same as `ent-earanat` and `ent-paedlar`, and four
> under `ent-csom`. **The overrun cost nothing on paper**, because it is ten test modalities carried
> in dense grids and a table cell is not a prose word. So: **over 10 %, render the chapter and count
> the pages before ordering compression.** Under ~10 pp with the floor intact, accept it and record
> why. Send it back only when the pages agree with the words. This is the same finding as
> "do not chase the printed page count with word cuts", read from the other end.

> **⚠️ MEASURED ACROSS SEVENTEEN CHAPTERS, 2026-08-14 — `PAGES ≈ BODY WORDS ÷ 240`, AND IT IS A
> ±1-PAGE ESTIMATOR, NOT AN IDENTITY.** **⚠️ CORRECTED ONCE ALREADY: the first version of this rule
> said ÷270 on a 15-chapter mean and then UNDER-PREDICTED TWICE RUNNING** — `ent-hearing` 7.2 → 8,
> `ent-vertigo` 7.0 → 8. The real spread is **238–319 words per page**, which is far too wide to
> divide by the mean. **Divide by 240, the densest observed, so the estimate never under-predicts** —
> under-predicting is the failure that matters, because it accepts a chapter that prints too long.
> The spread itself is informative: the **table-dense** current-format chapters sit at 238–259
> (`ent-vertigo` 238, `ent-audio` 243, `ent-hearing` 245) and the **prose-leaning** ones at 278–319
> (`ent-hoarse` 309, `ent-csom` 319). **A table costs more paper per word than a paragraph** — which
> is the same finding as "converting prose to tables costs paper per word saved", seen from the
> other side. Two things follow. **(1) THE OPERATIVE CEILING IS ~2,400 BODY WORDS**, because that is
> where ~10 pages falls at the dense end —
> not the formula's number, which every overrunning chapter so far has beaten and been accepted at
> (`ent-audio` +17.3 % → 7 pp · `ent-dysph` +28.8 % → 8 pp · `ent-rhin` +39.1 % → 9 pp). Treat the
> computed budget as the **target** and 2,400 as the **ceiling**; between the two, state the bill and
> let the hub rule on pages. **(2) This does NOT contradict "layout owns pages."** Both hold: at a
> fixed layout pages track words, which is why the ratio is tight; but *changing* the layout —
> `break-inside` on tables, cell padding, `<thead>` — moves pages at constant words, which is how AOM
> went 14 pp → 9 pp untouched. **Reformat first, cut second.**
>
> **⚠️ AND THE FORMULA HAS A THIRD FAILURE MODE, FOUND ON `ent-dysph`: A SURVEY CHAPTER DEFEATS BOTH
> TERMS AT ONCE, AND THEY AGREE *BECAUSE* BOTH ARE LOW.** Two terms are meant to be independent
> checks. They are not independent when the chapter is many entities thinly asked: the lecture is a
> survey deck (L10 covers five entities in 1,336 words of bullets, so TERM 1 is low) *and* 62
> questions spread over 13 entities is under 5 each (so TERM 2, which assumes clustering, is low
> too). **Every entity costs ~90 words of floor — what it is, how it presents, what confirms it, what
> treats it — so the real floor is ~90 × entity count**, 1,170 for `ent-dysph` before a single table.
> **Count the chapter's distinct entities at planning time and say the expected overrun up front**,
> instead of discovering it after four compression passes. The three failure modes together: a
> **diagram deck** (L22, 1.2 w/line) starves TERM 1 · a **list-dense deck** (rhinitis: twelve words
> of slide, ten protected facts) starves TERM 1 · a **survey chapter** starves both.
>
> **⚠️ COST THE FRAMEWORK SLIDES SEPARATELY — the entity count alone under-predicts.** `ent-neck`
> predicted 1,650–1,850 and measured 2,410. Its **entity** half was accurate; its **framework** half
> was costed at ~600 and actually cost ~1,100, because L5 carries ten separate framework slides — the
> definition, three numerical rules, three embryonic stages, two borders, the triangles, the age grid,
> the location grid, the examination run, the investigation order, the eight-group classification,
> the metastatic work-up — and **a list of names has no fat in it.** So the planning sum is
> **(~90 × entities) + (framework slides costed one by one)**, not entities alone.
>
> **⚠️ AND COST A COMPARISON GRID AT ROWS × COLUMNS, NOT AS ONE SLIDE.** `ent-phon` costed its four
> grids at ~500 words between them; they came to **746**, which is most of its 487-word
> under-prediction. A four-way discrimination across six axes is twenty-four cells, and **every cell
> is a fact somebody has to write.** The chapters that have predicted accurately — `ent-sinusitis`
> within 8 %, `ent-pharanat`, `ent-vocal` — all costed at that granularity.

> **⚠️⚠️ WORDS AND PAGES MOVE IN OPPOSITE DIRECTIONS WITH FORMAT, SO NEITHER NUMBER CAN BE GAMED.**
> Two measurements, made independently, that only make sense together:
> - **A table costs MORE paper per word than prose** — the table-dense chapters print at 238–259
>   words per page, the prose-leaning ones at 278–319.
> - **A table counts FEWER words per fact than prose.** `ent-neck` converted two tables to bullets and
>   **the measured word count went UP**, because the counter splits on whitespace and a padding-free
>   row like `|**5th**|**TRUE NECK visible**|` is fewer tokens than the same facts in a sentence. Both
>   conversions were reverted.
>
> So tabulating makes a chapter look **cheaper in words and more expensive in pages**, and prose does
> the reverse. **Neither metric alone is the test, and neither may be optimised against.** Choose the
> format the content deserves — a discrimination gets a table, a mechanism gets a sentence — then
> report both numbers honestly and let the page count rule.

> **⚠️⚠️ THE DRAFT HEADER IS A CLAIM, NOT A MEASUREMENT — ALWAYS RE-COUNT THE FILE.** `ent-rhin`'s
> header read *"MEASURED OUTCOME: 1,836 body words … three compression passes took it there from
> 2,178"*, itemising which duplications went. **The file on disk was 2,682.** The agent had planned
> the pass, written the header describing it, and lost its connection before applying it — so the
> header documented work the file did not contain, in the confident past tense, and it was very
> nearly accepted on that basis. **The links, the section count and the structure were all sound;
> only the number was fiction.** Run the validator on every draft before ruling on it, and where the
> header and the validator disagree, **the file wins and the header gets rewritten.** The same
> applies to a resumed agent: its transcript remembers intentions it may never have executed.
>
> **⚠️⚠️ FIFTH OCCURRENCE, AND A HARDER SHAPE: A STALE MEASUREMENT THAT RECONCILES.** `ent-vocal`'s
> header claimed *"taken with the validator on the file AS IT STANDS ON DISK … this paragraph was
> written AFTER the measurement"*, named the method, asserted the order of operations, and gave a
> **per-section breakdown summing exactly to its stated 1,545.** The file was **1,970** — ten sections
> had grown and one been trimmed after the measurement, and the agent hit the session limit before
> re-measuring. **It was a real measurement of an earlier state, presented as final.**
> **⚠️ A SUM THAT RECONCILES PROVES ONLY THAT THE NUMBERS CAME FROM ONE STATE OF THE FILE, NEVER THAT
> IT WAS THE LAST STATE.** An internally consistent breakdown reads as verified and is the most
> convincing way to be wrong — `ent-rhin`'s bare total looked like a claim, this one looked like
> evidence. **Re-measure after the final edit, always; and where an agent dies mid-write, assume every
> number in its header predates its last keystroke and re-derive them all.** The rest of such a header
> usually still stands: the budget, line ranges, diagram-deck numbers and the itemised bill are
> derived from the *deck*, not the draft, so only the outcome paragraph moves.

**⚠️ SUM THE CHAPTER'S REAL LECTURE SET, DO NOT COPY THE EXAMPLE ABOVE.** Stridor's budget was set
by hand at 2,400 from L6 alone and the agent was right to challenge it: the chapter also draws on
L12 and L11, so the formula gives the 3,000 cap. Run `wc -w` on the files you actually use.

> **⚠️⚠️ COUNT ONLY THE PART YOU USE — BY LINE RANGE — AND NEVER COUNT A HALF YOU DEFERRED.**
> Two rules, and the second was found the hard way.
>
> **(a) The line-range rule.** Where a chapter rests on part of a deck, name the line ranges and count
> **only those**; where a deck contributes a single clause, list it as *cited only, not counted*.
> Claiming a whole file for one clause makes the budget meaningless, and dropping it to zero
> understates the chapter. `ent-nasalmass` counted 193 of L31's 456 words across three named ranges;
> `ent-audio` counted 1,009 of L13,14's 1,671 and 305 of L19.1's 661; `ent-hearing` then took 356
> more of L19.1 **by naming ranges around what `ent-audio` had already spent.** That is the standard.
>
> **(b) ⚠️ DEFERRING AND COUNTING ARE OPPOSITES — whatever goes into your deferral list comes OUT of
> your TERM 1.** Found 2026-08-14 by `ent-otorrhea` auditing its own inheritance: `ent-otalgia` had
> counted the **whole 684 words** of `L17,18` while writing only the otalgia half and deferring the
> otorrhoea half onward, and `ent-otorrhea` then correctly counted those same 218 words again. **The
> deck was billed twice across two chapters, inflating the first one's budget by the exact size of
> what it gave away.** Neither chapter's content is wrong and neither needs rewriting — but the budget
> measures what a chapter *carries*, and a chapter cannot carry what it handed on. **State the split
> in your header** — *"lines 3–86 are mine, 87–249 are `ent-otalgia`'s"* — as `ent-otorrhea` and
> `ent-hearing` both did.
>
> **⚠️ One consequence has no clean answer and must simply be stated:** a fact can arrive by deferral
> while its words stay charged elsewhere, when the two chapters split a *slide* rather than a
> section. `ent-hearing`'s seven hearing-loss types sit inside a two-column slide `ent-audio` had
> already counted for the severity ladder. **Say so in the header rather than double-counting or
> silently dropping it.**

> **⚠️⚠️ REVISED 2026-08-14 — THE WORD COUNT ALONE IS NOT THE BUDGET, BECAUSE A DIAGRAM DECK
> EXTRACTS TO ALMOST NOTHING:**
>
> **budget = max( summed lecture words , 25 × the chapter's linked question count ) · floor 600 · cap 3,000**

**Why the second term exists.** `L22) Anatomy of Ear Undergraduate` is **538 words for an entire ear
anatomy lecture** — because it is labelled diagrams, not prose. Measured: **1.2 words per line**
against `L4) PHARYNGEAL SUPPURATIONS`'s 5.4. Its slide reading *"Middle Ear Cavity / Walls (6)"* is
four words on the deck and is six walls with their contents, relations and two facial-nerve segments
in any usable note. The strict formula gave `ent-earanat` **1,261 words for 66 questions** and its
agent overran by 46 % — correctly, and it itemised the bill: reaching 1,261 meant deleting five
sections and leaving **22 of the 66 questions unanswerable**.

**A words-per-line under ~2 means you are looking at a diagram deck; say so in the header and use the
question term.** The second term also tracks the thing that actually drives length — how much of the
chapter the bank tests — which is the other half of the §14.2 floor.

**⚠️ AND DO NOT COUNT A LECTURE YOU CITE ONCE.** `ent-csom`'s agent declined to claim 1,476 words of
headroom for a single clause out of `L4`, and `ent-earanat`'s declined 1,557 from `L15` for one line
about the chorda tympani. Both were right: counting a deck you touch once makes the budget
meaningless. Count what the chapter **rests on**, cite the rest.

> **⚠️⚠️ THE BUDGET IS A CEILING ON WORDS, NEVER A LICENCE TO DELETE A PROTECTED FACT. If you cannot
> reach it without cutting one, STOP AT THE FLOOR AND SAY SO, itemising what the next 200 words
> would cost.** Two agents did exactly that on 2026-08-14 and both were right — the pages came back
> from layout instead. Reporting the miss is a correct outcome; a chapter that hits its number by
> losing an eponym is not.

**⚠️ AND DO NOT CHASE THE PAGE COUNT WITH WORD CUTS — PAGES ARE MOSTLY A LAYOUT PROPERTY.** Measured
2026-08-14: squeezing Tonsils 4,448 → 3,826 words moved the printed chapter **16 pages → 16**.
Prose prints at ~350 words a page and dense tables at ~240, so converting prose to tables — which
this format demands — *costs* paper per word saved. Fixing `break-inside` on tables and their cell
padding took AOM 14 pages → **9** with the text untouched. **Your job is the word budget and the
coverage floor. The print stylesheet owns the page count.**

### 14.2 The two-sided coverage floor — what "important" means now

1. **Everything important the LECTURE states goes in** — every fact, number, classification, list,
   eponym, sign. The user's own caveat, verbatim: *"make sure not to ignore anything important in
   the lecture content."* The omission note records anything left out and why.
2. **Every linked question's TESTED FACT — its key and its discriminator — appears in the notes.**
   The distractor-by-distractor reasoning does **NOT** — it already lives in that question's own
   `explanation`, which the learner reaches through the `qs` link. **One exception:** where the
   real teaching point is telling two look-alikes apart (croup vs epiglottitis, safe vs unsafe
   CSOM), a discrimination table carries it — that is a fact, not commentary.

**The test:** read the chapter's questions with only the notes beside you. For each, **the fact
that decides it must be findable in the notes** — as a line or a cell, not as an essay. If it is
not, a fact was cut and goes back. If the notes also re-argue the wrong options, words go out.

### 14.3 Style — telegraphic

- **Fragments over sentences.** *"Delayed haemorrhage day 5+ = innominate erosion."* Tables and
  bullets by default; prose only where a fact needs a sentence to be true; flowcharts for
  algorithms.
- **BANNED, every occurrence:** the teaching voice ("the highest-yield sentence in…"), ⚠️-essay
  headers, bank meta-commentary in body text, **question ids in body text** (the `qs` array
  carries them), restating a table in prose, connective/framing sentences, long verbatim block
  quotes (quote only the examinable phrase), closing "sieve"/summary sections (100 % duplication —
  measured).
- **Citations: ONE compact source line per section** — `Src: L6; GG pp.146–151` — never per-fact
  clauses. Keep the `(not in course material)` tag on genuinely unsourced claims; compress each
  defect note to one line (*"GG keys X; L6 says Y — noted, key as printed"*).
- **`intro` ≤ 50 words.** Schema unchanged: `w`, `qs`, `table`, `flow`. **`qs` still covers 100 %
  of the chapter's filed questions** — ids in arrays are nearly free.

### 14.3a ⚠️ LAYOUT — how a body is SHAPED (new 2026-08-14, and it is not optional)

The user read the printed ENT chapters and ruled the PDF unappetising: *"it doesn't look apetising
at all. Some parts just look like plain paragraphs."* **This is a LAYOUT rule, not a scope rule —
nothing here removes a fact.** The renderer was restyled the same day and now gives four kinds of
line four different appearances, but **it can only style what the markdown distinguishes.** Write
to these shapes or the styling has nothing to work with.

**⚠️ THE `·`-CHAINED MEGA-PARAGRAPH IS BANNED.** The commonest failure in ENT was packing a whole
clinical entity into one run-on line — the diphtheria block in `ent-tonsils` is **783 characters**
of bold chained with `·`. On paper that is a grey slab. Instead:

```
**DIPHTHERIA (L3):** one-line essence.
- **Organism** — C. diphtheriae, gram-positive bacillus.
- **Never** dislodge the membrane.
```

- **Hard cap ~45 words per paragraph.** Past that, break to `- ` bullets or a table.
- **A bullet is ≤ ~15 words.** Longer means it is really two facts.

**Four line kinds the renderer now styles. Use them deliberately:**

| Write | Renders as | Use for |
|---|---|---|
| `### Heading` | small caps sub-heading in the module colour | **required** once a section covers more than two entities |
| `**Term:** rest` or `**Term —** rest` | *Term* coloured, rest plain bold | the head of every entity block and every `**Term** — fact` bullet |
| `Src: L6; GG pp.146–151` | small muted ruled caption at the section foot | the one citation line — unchanged, now styled |
| `*a whole line in italics*` | muted italic aside | cross-references (*"full table in `ent-csom`"*) and one-line defect notes |

**⚠️ THE COLOURED ANCHOR IS CHOSEN BY PUNCTUATION, SO PUNCTUATE FOR IT.** `mdLead()` colours the
text before the first `:` or `—` **when that falls inside the first 44 characters**, otherwise the
whole bold if it is itself ≤ 44 characters, otherwise nothing. Measured over all 30 ENT chapters,
the **median** bold-opening line carries **71** characters of bold and the longest **440** — which
is exactly why `strong:first-child` was tried, painted whole paragraphs, and was thrown away.
**A lead bold with no early colon gets no anchor and the block loses its marker.** Write
`**Quinsy:** …`, not `**Quinsy is pus between the tonsillar capsule and the lateral wall** …`.

**⚠️ `###` AND THE EXTRA BULLETS COST WORDS LIKE ANY OTHER TEXT.** The budget arithmetic in §14.1
is unchanged and the ~2,400-word / ~10-page ceiling still governs. Breaking a paragraph into
bullets *raises* the word count slightly (the counter splits on whitespace) — that is the
words-and-pages opposition of §14.1 rule (2), and it is not a licence to drop a protected fact.
**Budget the sub-headings when planning: count each `###` as a line, not free.**

### 14.4 Expected size, honestly

Median ENT chapter ~4–6 printed pages; the largest ~8–10; all 30 ENT chapters ≈ 150 pages total.
Tables lower words-per-page, so **report the measured page count, never a promised one.**

### 14.5 ⚠️ CROSS-CHAPTER DEFERRALS — the register, and the rule that makes them safe

A lecture often carries slides that belong to a **different** chapter. Dropping them from the
chapter you are writing is correct — repeating them is duplication — **but a deferral is only safe
if the receiving chapter actually gets it.**

> **⚠️ RULE: A DEFERRED FACT IS NAMED, WITH ITS RECEIVING CHAPTER, IN THE DRAFT HEADER *AND* ADDED
> TO THE REGISTER BELOW. "It belongs elsewhere" is a promise, and an unrecorded promise is a
> deletion.** Verify before deferring that **no question filed under your chapter tests it.**

**Register — owed, not yet written** (tick when the receiving chapter is merged):

| Deferred from | Fact | Owed to | Written? |
|---|---|---|---|
| `ent-stridor` (L6) | **JORRP / RRP** — HPV aetiology, recurrence tendency, airway compromise, no consistently effective treatment | `ent-paedlar` | ✅ **delivered 2026-08-14** — `paed-8` |
| `ent-stridor` (L6) | **Benign laryngeal tumours** — juvenile papillomatosis, **chondroma**, haemangioma | `ent-paedlar` | ✅ **delivered 2026-08-14** — `paed-8`, the whole slide |
| `ent-stridor` (L6) | **Causes of laryngeal paralysis** — central vs peripheral (traumatic, neuritis, neuropathy, neoplastic, idiopathic); surgical: neck/laryngeal trauma, thyroid surgery, **R.N.D**, tracheostomy, **scalene LN biopsy** | `ent-vocal` | ☐ |
| `ent-otalgia` (L17,18) | **The entire OTORRHOEA half of the deck** — the four discharge types and their cause lists · **CSF otorrhoea** (temporal bone fracture types, halo sign, β2-transferrin, β2-trace protein, head elevation + CSF-pressure-lowering drugs, repair) · "no mucous glands in the EAC" · mucopurulent vs purulent attribution · **bloody otorrhoea and glomus tumours in full** | `ent-otorrhea` | ✅ **delivered 2026-08-14** — `otor-1`/`2`/`3`/`4`/`7`/`8` — CSF and glomus written ONCE, not twice to satisfy two promises |
| `ent-otalgia` (L17,18 / L16) | **The safe-vs-unsafe CSOM DISCHARGE table** | `ent-otorrhea` + `ent-csom` | ✅ **delivered 2026-08-14** — `otor-4` — only the four discharge rows; `ent-csom` already carries the full fifteen-row comparison |
| `ent-otalgia` (L16) | **Acute and coalescent mastoiditis in full**, mastoid fistula, cortical mastoidectomy, the complication lists, cholesteatoma, **Gradenigo's triad in full** | `ent-csom` | ☐ |
| `ent-otalgia` (L22) | The two cartilage-deficient areas and the **end-aural incision**, **fissures of Santorini**, "up and back", Eustachian tube, middle-ear walls and contents, inner ear | `ent-earanat` | ☐ |
| `ent-otalgia` (L15) | **Ramsay Hunt** prognosis (30 % full recovery), aciclovir, the steroid regimen, contrast with Bell's palsy | `ent-facial` | ☐ |
| `ent-otalgia` (L21.1) | **ASOM staging and treatment** | `ent-aom` | ✅ already written |
| `normal-dev` (L1 p38, ⚠️IMAGE-ONLY) | **Intellectual subnormality, full definition** — subnormal intellectual function with IQ ≤70 **+** limitation in 2 or more of 10 adaptive skills **+** onset before age 18 years | `dev-problems` | ✅ **delivered 2026-08-16** — verified against the merged chapter, not the row |
| `normal-dev` (L1 p39) | **The ten adaptive skills** — self care, safety, social skills, communication, use of community resources, home living, academic achievement, work, leisure, self direction | `dev-problems` | ✅ **delivered 2026-08-16** — verified against the merged chapter, not the row |
| `normal-dev` (L1 p42) | **The severity grading of intellectual disability** — mild <70–50, moderate <50–35, severe <35–20, profound <20 | `dev-problems` | ✅ **delivered 2026-08-16** — verified against the merged chapter, not the row |
| `normal-dev` (L1 pp.36–37, ⚠️IMAGE-ONLY) | **Aetiology of GDD** — identified in ~40–60 %, often multifactorial. Prenatal (commonest; Down, Fragile X, copy-number variants, Rett, brain malformations, TORCH, teratogens) · perinatal (prematurity, birth asphyxia/HIE, low birth weight) · postnatal (meningitis, encephalitis, trauma incl. non-accidental, metabolic — PKU, hypothyroidism) · idiopathic up to 50 % | `dev-problems` | ✅ **delivered 2026-08-16** — verified against the merged chapter, not the row |
| `normal-dev` (L1 p54, ⚠️IMAGE-ONLY) | **The GDD investigation panel** — brain MRI, gene study, hearing assessment (ABR), fundus/VEP/retinogram, thyroid function/PKU metabolic screen, chromosomal study, autism screening tests, EEG | `dev-problems` | ✅ **delivered 2026-08-16** — verified against the merged chapter, not the row |
| `normal-dev` (L1 pp.55–56) | **Early Augmented Intervention Programs** — as early as possible, best before 2–3 years (critical period), less benefit 3–5 years; repeated sessions daily or at least 3/week; the five session types (cognitive, language, gross motor, fine/occupational, social-communication/behaviour modification) | `dev-problems` | ✅ **delivered 2026-08-16** — verified against the merged chapter, not the row |
| `normal-dev` (L1 p52) | **Autism spectrum disorder triad** — defect in language, defect in socialization, repetitive behaviours/acts/interest; graded mild/moderate/severe. (Only the ASD RED FLAGS are kept here) | `dev-problems` | ✅ **delivered 2026-08-16** — verified against the merged chapter, not the row |
| `normal-dev` (L1 pp.44–51) | **The six "MR diagnosed by face" conditions** — Down syndrome, microcephaly, congenital hypothyroidism, phenylketonuria, severe hydrocephalus, total craniostenosis. ⚠️ PHOTOGRAPHS with captions and no other text; the teaching is the facies itself, so this row needs the RENDER, not the cache | `dev-problems` (and cross-refs to `genetics`, `endocrine`) | ⚠️ **delivered SHORT 2026-08-16** — `dev-nd`/`dev-problems`; the deck holds only the six NAMES (pp.44–51 are photographs with a caption and nothing else), so the facial descriptions are supplied and tagged. Two things WERE in the photographs and are sourced: PKU is captioned *"in dark family"* on both slides, and the set is numbered 1–6, so it is closed. |
| `ent-aom` (L21.1) | Otitis externa, otomycosis, **malignant otitis externa**, furunculosis, hard impacted wax, bullous myringitis | `ent-otalgia` | ✅ **delivered 2026-08-14** |
| `ent-csom` (L17,18) | **CSF otorrhoea** in full · **bloody otorrhoea and glomus tumours** | `ent-otorrhea` | ✅ **delivered 2026-08-14** — `otor-2`/`otor-3`/`otor-7`/`otor-8` — the same deck row 1 deferred, delivered once |
| `ent-csom` (L17,18 / L22 / L15) | **Otitis externa in full** · the **four-nerve referred-otalgia** table · ear anatomy detail · facial-nerve disorders | `ent-otalgia` ✅ / `ent-earanat` ☐ / `ent-facial` ☐ |
| `ent-csom` (L4) | **Pharyngeal suppurations** — only the Bezold's → parapharyngeal clause kept | `ent-pharsupp` | ✅ **delivered 2026-08-14** |
| `ent-pharsupp` (L1.2) | Pharyngeal divisions, **Waldeyer's ring**, the constrictors and the **inferior-constrictor dehiscence**, blood supply, nerve-supply diagrams, the swallowing phases. Only the tonsillar bed and **crypta magna** kept | `ent-pharanat` | ✅ **delivered 2026-08-14** — divisions `pha-1` · Waldeyer’s ring `pha-7` · constrictors + dehiscence `pha-9` · blood supply `pha-6` · nerve plates `pha-10` · swallowing phases `pha-4`. The tonsillar bed and crypta magna are written here too (`pha-5`) because questions key both — the declared "arrives by deferral, words stay charged elsewhere" case |
| `ent-pharsupp` (L5) | **Branchial cyst, thyroglossal cyst**, the neck-mass differential | `ent-neck` | ✅ **delivered 2026-08-14** — `neck-6`/`neck-7`/`neck-3` — **the tongue-protrusion sign is present**, with its mechanism (tract tethered to the foramen caecum through the body of the hyoid), and again as a row of `neck-8` |
| `ent-pharsupp` (L16) | **Bezold's abscess in full** — mastoiditis, mastoid tip, the compass of spread, cortical mastoidectomy. Only the keyed mastoid-tip → parapharyngeal line kept | `ent-csom` | ☐ |
| `ent-tonsils` (v3) | **Quinsy management** — Hilton's manoeuvre, the incision points, interval tonsillectomy | `ent-pharsupp` | ✅ **delivered 2026-08-14** |
| `ent-earanat` (L20) | L20's whole clinical half — balance physiology, causes and assessment of vertigo, BPPV, Ménière's, vestibular neuritis, the positional tests | `ent-vertigo` | ✅ **delivered 2026-08-14** — `vert-1`/`4`/`5`/`7`/`8`/`9`/`12` |
| `ent-earanat` (L16) | Attic-retraction cholesteatoma, safe vs unsafe, perforation types, mastoid disease, the tegmen-erosion complication lists | `ent-csom` | ✅ already written |
| `ent-facial` (L22) | Auricle, EAC, TM layers and landmarks, annulus, middle-ear walls and parts, ossicles, mastoid air-cell types, Eustachian tube, inner ear | `ent-earanat` | ✅ **delivered 2026-08-14** |
| `ent-facial` (L15) | **Myringotomy as a procedure** and its indications. Only the keyed line — myringotomy is the FIRST measure in facial palsy complicating AOM — kept | `ent-aom` | ☐ **⚠️ aom is already merged; add at reconciliation** |
| `ent-paedlar` (L6) | **Causes of laryngeal paralysis** — central vs peripheral and the surgical list. The congenital cord-palsy facts that ARE tested are written in `paed-5` | `ent-vocal` | ☐ **still owed — 2nd chapter to defer it** |
| `ent-paedlar` (L2) | The full **RRP treatment list**, the **adult-onset** form, and the rest of the hoarseness deck | `ent-hoarse` | ✅ **delivered 2026-08-14** — see the circular-deferral note below |
| `ent-paedlar` (L12) | The entire **foreign-body half** — incidence, the six reasons, impaction sites, phases, the expiratory film, rigid bronchoscopy. Verified present in `strid-6`/`strid-7` before deferring | `ent-stridor` | ✅ already written |
| `ent-hoarse` (L2) | **Congenital laryngeal web** in full — incomplete recanalization, sites, laryngofissure + keel, laser excision, tracheostomy | `ent-paedlar` | ☐ **⚠️ paedlar is already merged; reconciliation work** |
| `ent-hoarse` (L2) | **Congenital vocal cord paralysis** in full — left-sided predominance, weak cry, aspiration above the SLN origin, bilateral cord positions | `ent-vocal` / `ent-paedlar` | ☐ |
| `ent-hoarse` (L2) | **The whole aetiology of vocal cord paralysis** — the unilateral ranking (bronchogenic ca 1st, thyroid 2nd, oesophageal 3rd, skull base 4th), the surgical and neurologic lists, bilateral percentages (iatrogenic 80 %, malignancy 10 %, neurologic 5 %), cord positions, RLN-vs-vagus, the management ladders. **Kept here:** only adductor→aspiration, abductor→stridor-with-normal-voice, and the fixation list | `ent-vocal` | ☐ |
| `ent-hoarse` (L2) | **Croup / ALTB** in full (viral, winter, 1–3 y, barking cough, steeple sign) and **acute epiglottitis**. Kept here as names only, being rows of the laryngitis classification one question's option list reproduces | `ent-stridor` ✅ / `ent-paedlar` ☐ | ☐ |
| `ent-hoarse` (L2) | **RRP beyond one line** — the full account and treatment ladder. **Kept here:** HPV 6/11, commonest benign laryngeal tumour, involution at puberty, avoid tracheostomy, mitomycin, adult papilloma premalignant | `ent-paedlar` | ✅ **already there** — `paed-8`, written first |
| `ent-hoarse` (L1.1) | Laryngeal cartilages, membranes and ligaments, extrinsic muscles, blood supply, the nerve-supply plates, piriform sinus, pre-epiglottic space **as anatomy** | `ent-pharanat` | ✅ **delivered 2026-08-14** — `pha-11`–`pha-16`. **The row is unambiguously this chapter’s: 22 of its 44 questions test laryngeal anatomy directly**, the nerve plates alone carrying six |
| `ent-hoarse` (L8) | **The phoniatric evaluation protocol in full** — GRBAS parameter by parameter, VHI / VHI-10 / V-RQoL, the elementary/clinical/instrumental tiers, external laryngeal examination, mirror vs rigid vs flexible vs direct, stroboscopy, aerodynamic measures, the content of voice therapy, dysarthria/dyslalia/aphasia | `ent-phon` | ✅ **delivered 2026-08-14** — `phon-3`–`phon-10` and `phon-14`. **⚠️ ONE PROMISED ITEM IS NOT IN THE DECK — see the note below: L8 prints no "content of voice therapy"** |
| `ent-hoarse` (L6) | Stridor typing, tracheostomy, the adult and paediatric cause lists | `ent-stridor` | ✅ already written |
| `ent-hoarse` (L30) | **Rhinoscleroma of the nose** — its nasal stages and nasal management | `ent-rhin` | ✅ **delivered 2026-08-14** — `rhin-12`; `hoar-6` keeps the subglottis and the stridor-with-normal-voice line, checked so neither re-argues the other |
| `ent-hoarse` (L17,18) | Referred otalgia in full, the four nerves and their territories | `ent-otalgia` | ✅ already written |
| `ent-nasalmass` (L26) | The **"Reaching a diagnosis" allergic-rhinitis run** and the allergic-rhinitis clinical picture | `ent-rhin` | ✅ **delivered 2026-08-14** — `rhin-2`/`rhin-4`/`rhin-5`. ⚠️ L26's run is **three captioned photographs with no prose**; the written source is L29's own signs slides |
| `ent-nasalmass` (L26) | The **adenoid slides** — obstructive vs non-obstructive adenoid, adenoid facies | `ent-tonsils` | ☐ **⚠️ tonsils is already merged; reconciliation work** |
| `ent-nasalmass` (L30) | **Rhinoscleroma in full** — *Klebsiella rhinoscleromatis*, Egyptian endemicity, the stages, **Mikulicz cells and Russell bodies**, the expansile granuloma on CT, management | `ent-rhin` | ✅ **delivered 2026-08-14** — `rhin-12`. ⚠️ **THIS ROW WAS WRONG: L30 prints FOUR stages, not three** — catarrhal, hypertrophic, atrophic **and cicatricial**. The receiving agent read the deck and corrected it. **A register row is a promise, not a specification — the deck outranks it.** |
| `ent-nasalmass` (L26) | **Septal haematoma beyond the definition** — drainage, septal abscess, cartilage necrosis, saddle nose | `ent-septum` | ✅ **delivered 2026-08-14** — `sept-8` in full, incl. the haematoma-vs-abscess table and the cavernous-sinus route |
| `ent-septum` (L25.1) | **Little's and Woodruff's plexus**, the full epistaxis aetiology, cautery, packing, the arterial ligations | `ent-epistaxis` | ☐ |
| `ent-septum` (L25.2) | **Post-traumatic anosmia** as a subject — only the cribriform-shearing clause kept | `ent-epistaxis` | ☐ |
| `ent-septum` (L24/L31) | The general **nasal-obstruction work-up** — mucosal aetiology lists, turbinate hypertrophy in its own right, NOSE/SNOT-22, rhinomanometry, the decongestant rules · **CSF rhinorrhoea** after mid-facial trauma | `ent-nasalobs` | ✅ **delivered 2026-08-14** — work-up half MERGED into `nobs-2`/`3`/`7` — the THIRD independent deferral of one set of slides, delivered once; **CSF rhinorrhoea in full in `nobs-9`** |
| `ent-septum` (L24) | **Nasal-valve anatomy in full** and valve reconstruction. Only the Cottle test and the valve's role in obstruction kept | `ent-nasalobs` | ✅ **delivered 2026-08-14** — `nobs-7`. L24 prints only the Cottle clause, which stays `ent-septum`’s; the rest is tagged as supplied |
| `ent-septum` (L24) | **Wegener's as an entity** — ANCA, the triad, the systemic disease. Only its saddle-nose key kept | `ent-rhin` | ✅ **delivered 2026-08-14** — `rhin-13`, a full row: multisystem autoimmune collagen disorder, necrotising vasculitis, respiratory tract + kidneys + skin, septal ulceration, saddle nose, c-ANCA + ESR + biopsy, steroids + azathioprine/methotrexate |
| `ent-septum` (L24) | The septum's **arterial supply as vascular anatomy** — counted in this chapter's budget as L24's own ILO, but owed as anatomy | `ent-noseanat` | ✅ **delivered 2026-08-14** — `nan-8` — both carotid territories, the ECA’s two terminals, the maxillary artery by part, the septal list. **⚠️ `ent-septum` counted these 31 words AND deferred them, so they are billed twice; the receiving chapter counts what it carries and the sender is not rewritten (the `ent-otalgia`→`ent-otorrhea` precedent). Effect on both budgets nil — TERM 2 governed in each.** Little’s area is named here and pointed at `epi-2`; none of these 40 questions tests it |
| `ent-audio` (L13,14 lines 422–556) | **The entire dizziness half** — epidemiology, ">90 % benign", "commonest cause is lack of sleep", "80 % from history", the Type I–IV classification, the descriptor list | `ent-vertigo` | ✅ **delivered 2026-08-14** — `vert-1`+`vert-2`, fact by fact |
| `ent-audio` (L13,14 lines 63–83) | **Static vs dynamic balance** | `ent-vertigo` | ✅ **delivered 2026-08-14** — `vert-1` |
| `ent-audio` (L20) | Everything but the fistula test and the investigation categories | `ent-vertigo` | ☐ **⚠️ 2ND CHAPTER TO OWE THIS — `ent-earanat` registered it first and it is still unwritten. Two independent deferrals of one deck means `ent-vertigo` must be written against BOTH rows.** |
| `ent-audio` (L19.1) | The **seven hearing-loss types**, the CHL/SNHL cause lists, treatment | `ent-hearing` | ☐ |
| `ent-audio` (L19.1) | **The pressure transformer system** — areal ratio 17, lever 1.3, product 22, 26 dB | `ent-hearing` | ☐ |
| `ent-audio` (L19.2) | **Tinnitus in full** | `ent-hearing` | ☐ |
| `ent-nasalmass` (L31) | The full **nasal-obstruction aetiology** (mucosal causes, choanal atresia, pyriform aperture stenosis, turbinate hypertrophy, nasal valve dysfunction), **NOSE and SNOT-22**, rhinomanometry, acoustic rhinometry, the decongestant rules | `ent-nasalobs` | ✅ **delivered 2026-08-14** — `nobs-2`/`4`/`5`/`7`, scales and objective tests in `nobs-3` |
| `ent-nasalmass` (L25) | **Epistaxis management as a subject** — packing, cautery, the arterial ligations. Only angiofibroma embolisation kept | `ent-epistaxis` | ☐ |
| `ent-rhin` (L31) | The **nasal-obstruction work-up**, NOSE/SNOT-22, rhinomanometry · **discharge types as a subject** | `ent-nasalobs` | ✅ **delivered 2026-08-14** — work-up half MERGED into `nobs-3` (same slides as the row above, not written twice); its own new half, discharge as a subject, in `nobs-8` |
| `ent-rhin` (L27.1/L27.2) | **Acute and chronic rhinosinusitis in full** — only the viral-vs-bacterial line and the AERD/Samter clause kept | `ent-sinusitis` | ✅ **delivered 2026-08-14** — `sin-1`/`3`/`4`/`5`/`6`/`8`/`9`/`10`, both decks end to end. `rhin-8` had deleted *"purulent discharge alone does not mean bacterial"* as this chapter’s fact, so it is written here for the first time |
| `ent-rhin` (L29) | **Nasal polyposis** | `ent-nasalmass` | ✅ already written — `nmass-5` |
| `ent-rhin` (L25.2) | **Smell disorders** as a subject · **epistaxis** | `ent-epistaxis` | ☐ |
| `ent-rhin` (L30) | **Septal perforation and saddle nose as lesions** — verified present in `sept-7`/`sept-8` before deferring | `ent-septum` | ✅ already written |
| `ent-rhin` (L30) | **Laryngeal scleroma** — verified present in `hoar-6` before deferring | `ent-hoarse` | ✅ already written |
| `ent-rhin` (L29) | **Adenoids** | `ent-tonsils` | ☐ **⚠️ tonsils is already merged; reconciliation work. 2nd chapter to owe it** |
| `ent-dysph` (L7) | **The whole swallowing-assessment deck** except its aetiology table — 1,522 of its 1,616 words | `ent-swallow` | ✅ **delivered 2026-08-14** — every slide from L7 line 46 to 377. **⚠️ The promised 1,522 w was inflated**: it included a 32-word title block, a 131-word ILO index (a contents list for the body itself, so counting it bills one file twice) and 75 words already written verbatim in `ent-dysph`. Content delivered whole; only the number moved |
| `ent-dysph` (L1.2) | **Pharyngeal anatomy** — only Killian's triangle kept | `ent-pharanat` | ✅ **delivered 2026-08-14** — same deck as the row above, **delivered once not twice** — `pha-9`. `dys-11` keeps Killian’s only as the SITE of Zenker’s, so the anatomy is here and the lesion stays `ent-dysph`’s |
| `ent-dysph` (L8) | **The phoniatric protocol** — only the laryngeal click kept | `ent-phon` | ✅ **delivered 2026-08-14** — same deck as the row above, **delivered once not twice**. It adds exactly one item row 1 did not name — the laryngeal click as an EXAMINATION item, `phon-5`; `dys-8` keeps its ABSENCE as Moure’s sign |
| `ent-dysph` (L5) | The **neck-mass differential** — only the cystic swelling kept | `ent-neck` | ✅ **delivered 2026-08-14** — `neck-3` — the same grid, organised on the cystic-vs-solid axis it kept |
| `ent-dysph` (L2) | The **supraglottic/glottic/subglottic carcinoma table** — verified present in `hoar-8`, which also already carries the Plummer–Vinson-is-premalignant-for-postcricoid-not-laryngeal line | `ent-hoarse` | ✅ already written |
| `ent-hearing` (L19.2 lines 85–148) | The **otorrhoea slides appended to the cached tinnitus file** | `ent-otorrhea` | ✅ **delivered 2026-08-14** — `otor-1`/`4`/`7` |
| `ent-hearing` (L19.2 lines 120–148) | The **otalgia slides** — verified already written in the merged chapter before deferring, not assumed | `ent-otalgia` | ✅ already written |
| `ent-hearing` (L19.1) | **Glomus as a lesion in its own right** — jugulare/tympanicum, staging, embolisation. Only the pulsatile-tinnitus presentation kept | `ent-otorrhea` | ✅ **delivered 2026-08-14** — `otor-8` — jugulare/tympanicum, Fisch staging A–D, pre-op embolisation |
| `ent-hearing` (L20) | **Ménière's in full** — only the low-frequency audiometric signature kept | `ent-vertigo` | ✅ **delivered 2026-08-14** — `vert-8` |
| `ent-hearing` (L16/L17,18) | **Cholesteatoma / unsafe CSOM** | `ent-csom` | ✅ already written |
| `ent-hearing` (L21.2) | **Secretory otitis media in full** | `ent-aom` | ✅ already written |
| `ent-vertigo` (L20) | L20's **four inner-ear anatomy slides** — verified in `earan-10` (two labyrinths, two fluids) and `earan-11` (the full receptor table) before deferring | `ent-earanat` | ✅ already written |
| `ent-vertigo` (L20/L13,14) | **The vestibular battery as procedures** — verified present in `aud-10` before deferring | `ent-audio` | ✅ already written |
| `ent-vertigo` (L20) | **CSOM / cholesteatoma as subjects** | `ent-csom` | ✅ already written |
| `ent-vertigo` (L20) | **Otosclerosis, ototoxicity and acoustic neuroma as entities** | `ent-hearing` | ✅ already written |
| `ent-otorrhea` (L16) | **Mastoiditis, cholesteatoma and the complication lists** | `ent-csom` | ✅ already written — verified before deferring |
| `ent-otorrhea` (L17,18 lines 87–249 · L19.2 lines 120–148) | **The whole otalgia half** | `ent-otalgia` | ✅ already written — verified before deferring |
| `ent-otorrhea` (L15) | **Facial palsy from temporal-bone fracture as a subject** — only the 10 % longitudinal / 40 % transverse palsy rates kept, which `L15` does print and are therefore sourced | `ent-facial` | ☐ **⚠️ facial is already merged; reconciliation work** |
| `ent-otorrhea` (L19.1) | **Haemotympanum, and the CHL/SNHL lists as hearing loss** | `ent-hearing` | ✅ already written |
| `ent-nasalobs` (L32 lines 6–139) | **Headache in full** — 547 words, the whole facial-pain half of the deck | `ent-facialpain` | ✅ **delivered 2026-08-14** — `fp-1`–`fp-10`, mapped slide by slide. **✅ THIS ROW VERIFIED EXACT: `sed -n '6,139p' | wc -w` returns 547, the figure the row states, and all 134 lines were read against the delivery list — the deck contains everything promised and nothing in range was left uncollected.** |
| `ent-nasalobs` (L23 lines 1–86) | **Nasal anatomy** — 297 words; only the choanal-atresia and CNPAS half (87–177) was claimed here | `ent-noseanat` | ✅ **delivered 2026-08-14** — `nan-3`/`4`/`7`/`8`/`10`/`11` |
| `ent-sinusitis` (L27.1 line 285 · general) | **The complications in full** — pre- vs post-septal cellulitis and the orbital staging, the **lamina papyracea** route, **Pott’s puffy tumour** and the diploic veins, and **sinus → frontal lobe / ear → temporal lobe and cerebellum**. Its two-word orbital caption was **subtracted from this chapter’s TERM 1** rather than counted | `ent-sinuscomp` | ☐ **⚠️ `L28` DOES NOT EXIST — this chapter has no lecture and is written from general knowledge against its own 10 questions. It was deliberately NOT absorbed here; none of `ent-sinusitis`’s 47 tests any of it.** |
| `ent-sinusitis` (L23 lines 1–86) | **Nasal anatomy**, and the **osteomeatal complex as a named unit** | `ent-noseanat` | ✅ **delivered 2026-08-14** — same 86 lines as the row above, **written once, discharging both**. The genuinely new half — the OMC as an anatomical unit — is `nan-5` in full, keyed by four questions. Declared overlap: `sin-2` keeps one bullet naming four components as the SURGICAL rationale; both correct, neither removable |
| `ent-pharanat` (L1.2/L1.1) | **Swallowing going wrong, and every instrument used to look at it** — penetration / aspiration / silent aspiration, the bedside screen, FEES and its white-out, VFSS, manometry, postures, diet, the team. `pha-4` writes the three phases as NORMAL PHYSIOLOGY, including the *"2nd ‘pharyngeal’ phase"* parenthesis a key turns on | `ent-swallow` | ✅ **delivered 2026-08-14** — `swa-2`–`swa-13`. **⚠️⚠️ THE ROW NAMED THE WRONG DECKS.** It attributed this to `L1.2`/`L1.1`; greped, **`L1.1` returns ZERO hits for FEES, VFSS, manometry, aspiration, penetration or screening**, and `L1.2` only the word "deglutition" in two unrelated slides. Every item is in **`L7`** — i.e. in the row above. **The two rows are one deck seen from two chapters, delivered ONCE.** `pha-4`’s boundary is respected: it keeps the phases as normal physiology, `swa-2` adds only what the four phase questions key and `pha-4` lacks |
| `ent-pharanat` (L1.1) | **Vocal cord paralysis as a subject** | `ent-vocal` | ☐ **⚠️⚠️ 3RD CHAPTER TO OWE THIS — `ent-hoarse` and `ent-paedlar` registered it first. See the note below.** |
| `ent-pharanat` (L1.2) | **Congenital laryngeal anomalies** | `ent-paedlar` | ☐ **⚠️ paedlar is already merged; reconciliation work** |
| `op-pupil` (L3,4 sl.36/37/40) | **The three IOP facts its own questions turn on** — normal range **10–21 mmHg, mean 16** · **digital palpation is a rough estimate, good only for grossly high or low pressures and for comparing the two eyes** · **Schiøtz is INVERSE — a LOW scale reading = a hard eye = a HIGH IOP** (the direction is not on the slide and is tagged where written). Needed by `opqb-t1-55`, `opqb-t1-46`, `opqb-t1-47` — **three of `op-glauc`’s five questions**, so it cannot inherit by reference | `op-glauc` | ✅ **delivered 2026-08-17** → `glc-4`, all three carried IN FULL rather than by reference, because three of `op-glauc`’s five questions turn on them. **Row verified EXACT on all three counts** against L3,4 sl.36–40 directly. Verified against the merged chapter |
| `op-pupil` (L3,4 sl.36–40) | **The clinical MEANING of the number** — diurnal variation, central corneal thickness correction, gonioscopy, target pressure, applanation sources of error. Deliberately not written in `op-pupil`, which carries technique only | `op-glauc` | ✅ **delivered 2026-08-17** → `glc-5`, one sub-heading each. ⚠️ **ROW WAS MIS-STATED: gonioscopy is NOT on L3,4** — `gonioscop` returns **zero** there and hits only `L11`/`L12`, `op-glauc`’s own decks, across all 27 cached files. Four of the five items were genuine deferrals; the fifth was already the receiver’s. Verified against the merged chapter |
| `op-pupil` (L3,4 sl.45) | **The corneal light reflex in full** — symmetry, the reflex deviating OPPOSITE to the squint, and estimating the angle from it. Written in `pup-8` as an alignment test, but `opqb-t1-43` and `opqb-t2-94` are `op-squint`’s and turn on it | `op-squint` | ☐ |
| `op-pupil` (L3,4 sl.43–44) | **The EOM action/nerve-supply grid and the six cardinal positions** — written in `pup-7`/`pup-8` in full; named here so `op-squint` cross-references rather than re-derives when it writes incomitant deviation | `op-squint` | ☐ |
| `op-pupil` → **owed TO it** (L3,4 sl.20) | **⚠️ REVERSE DIRECTION — `op-va` must still write slide 20 "Lens: Pupil colour" IN FULL**: the cataract stages and the bright-vs-dim red reflex of nuclear sclerosis versus immature senile cataract. `op-pupil` restated only the black/grey/white triad into `pup-9` and **did not charge slide 20’s words to itself**, so the slide is still unspent | `op-va` | ✅ **delivered 2026-08-17** → `va-13`. ⚠️ **ROW PARTLY MIS-STATED — the SLIDE ATTRIBUTION, not the content.** The bright-vs-dim red reflex IS slide 20, verbatim (*"Grayish in old age — Nuclear sclerosis (bright RR) / IMSC (Dim RR)"*, L3,4 lines 123–129). **The four cataract stages are NOT** — slide 20 names two lens states; IMSC / MSC / hypermature shrunken / Morgagnian are on **slide 21** (lines 131–133). No delivery consequence, both slides being inside 1–171; corrected on the record. Core claim verified exact against merged `pup-9`, which carries the triad only |
| `op-orbit` (L10 sl.15) | **The systemic thyrotoxic picture in full**, plus the IgG / TSH-receptor mechanism behind thyroid eye disease. `op-orbit` carries only the ORBITAL components and the three lid signs | `op-systemic` | ☐ |
| `op-orbit-mass` (L10 sl.42–46) | **Lacrimal gland tumours, optic nerve glioma, optic nerve sheath meningioma and rhabdomyosarcoma — AS ONCOLOGY.** `op-orbit-mass` sorts them as orbital masses by age/speed/bone behaviour in `orb-16`; the tumour biology and staging are not written there | `op-onc` | ☐ |
| `op-orbit-mass` (L10 sl.31) | **Acute dacryoadenitis in full**, plus the lacrimal gland as a structure. `orb-15` gives it one line among the three orbital inflammations | `op-lac` | ☐ |
| `op-orbit-mass` (**L25** sl.18–24) | **⚠️ WRITTEN HERE, WORDS CHARGED THERE — not a debt, a notice.** The blow-out fracture is written in full in `orb-14` because two questions need it, but it is sourced from `L25) Trauma I` and its words are charged to `op-trauma`. **`op-trauma` must not re-spend them, and must check `orb-14` before writing its own floor section.** ⚠️ `L10`’s own not-covered list calls orbital fracture absent — true of `L10`, and the wrong conclusion for the module | `op-trauma` | ✅ **discharged 2026-08-17** — `orb-14` read first, not re-spent, cross-referenced from `trm-7`. ⚠️ **AND `op-trauma` DECLINED THE WORDS TOO**: it excluded L25 lines 181–243 (244 w) from its own TERM 1 on the §14.5 rule that **the budget may understate a chapter, never overstate it**, so those 244 words are charged to *nobody*. That is the declared-harmless case, stated rather than swept into TERM 1 to buy headroom. The three facts `orb-14` does not carry (incl. the **white-eyed trapdoor blow-out of childhood**, surgery within 24–48 h) are supplied in `trm-7` |
| `op-glauc` (L12) | **Rubeosis iridis and the retinal ischaemia behind it** — `op-glauc` writes neovascular glaucoma as a secondary glaucoma; the retinal cause (proliferative diabetic retinopathy, CRVO) belongs to the retina chapter | `op-ret` | ☐ |
| `op-glauc` (L12) | **Aniridia and Sturge–Weber as SYNDROMES** — named in `op-glauc` only as causes of developmental glaucoma; the systemic picture is not written there | `op-systemic` | ☐ |
| `op-va` (**L1,2 lines 438–613**) | **⚠️⚠️ THE WHOLE VA + VISUAL-FIELD EXAMINATION BLOCK IS NOW COUNTED IN `op-va`, 866 words** — definition, the fraction, E/Landolt-C/Snellen charts, the 10-row conversion table, the eight-step method, pinhole, CF/HM/PL/NPL, confrontation, Amsler, perimetry, light projection. **`op-intro` and `op-vissym` must NOT re-count these lines** (deferring and counting are opposites, §14.1(b)); they may cross-reference freely. Lines 390–437 were **cited only, not counted** — they restate L3,4 sl.2–4, already inside `op-va`’s 963. Lines 1–389 and 614–659 remain unspent and are theirs | `op-intro`, `op-vissym` | ☐ **budget notice, not a debt** |
| `op-va` (L3,4 sl.5–6) | **The eight eyelid labels as ENTITIES** — stye, chalazion, entropion, ectropion, ptosis, lagophthalmos, BCC, xanthelasma. L3,4 prints labels on photographs and **no definitions**; `L5) Eyelid disease` owns the teaching incl. levator-function grades. Carried in `op-va` as an inspection checklist only. **No `op-va` question tests any of them — verified across all sixteen** | `op-lid` | ☐ |
| `op-va` (L3,4 sl.7) | **Dacryoadenitis, dacryocystitis and the regurgitation test as entities** — labels only on this deck. `L9) lacrimal system.` is the owning deck; its calibration read holds Jones I/II, the tear-film thicknesses and the gland eponyms, none of which are here. **No `op-va` question tests them** | `op-lac` | ☐ |
| `op-va` (L3,4 sl.11–13) | **Papillae vs follicles vs giant papillae, trachomatous scarring T4, PTCs, pterygium**, and the **conjunctival vs ciliary injection discrimination** — labels only here; `L6) Conjunctiva` and `L37) Red Eye` carry the discrimination. **No `op-va` question tests it** | `op-conj`, `op-red` | ☐ |
| `op-va` (L3,4 sl.14–15) | **Corneal foreign body, erosion, opacity/scarring, infective keratitis, dendritic ulcer as ENTITIES** — labels only here. The fluorescein **method** (sl.16) IS written in `va-11` in full, being examination technique | `op-cornea` | ☐ **⚠️ already merged; reconciliation work** |
| `op-va` (L3,4 sl.17–18) | **Episcleritis vs scleritis**, and **iridodialysis / posterior synechiae / rubeosis iridis** — labels only here. ⚠️ Both receiving chapters are **blocked on a visual read**: `L13,14) Uvea & Sclera` extracts zero characters over 41 pages and has no cache at all | `op-sclera`, `op-uvea` | ☐ |
| `op-va` (L3,4 sl.21–23) | **The four cataract stages and lens subluxation as DISEASES** — named in `va-13` with one-line glosses because register row 1 demands slide 21, but the staging detail (shadow test, VA at each stage, the red-reflex column) is `L17`/`L18`’s and was **cited only, not counted** | `op-cat` | ☐ |
| `op-va` (L3,4 sl.27) | **Hyphaema, hypopyon, cells & flare as DISEASES** — listed in `op-va` as anterior-chamber contents, which is what the slide is. The uveitis grading behind "cells & flare" is not on this deck | `op-uvea`, `op-trauma` | ☐ **⚠️ `op-trauma` already merged; `trm-8` carries hyphaema grading — reconciliation is `op-uvea`’s half only** |
| `op-trauma` (L25 sl.30–33 · L18) | **Traumatic cataract as a CATARACT** — rosette (blunt) vs diffuse (penetrating) in full, subluxation / ectopia lentis, phaco vs ECCE. ⚠️ `L25` sl.30/31 is a photograph titled with the **misspelling "Vossious"**, so `Vossius` returns zero there; `L18` prints the ring and the rosette/diffuse split and was used as the source | `op-cat` | ☐ |
| `op-trauma` (L26 · L17) | **Radiation and heat cataract as CATARACT** — `L17` classifies glass-blower's cataract under Traumatic → Physical → Heat | `op-cat` | ☐ |
| `op-trauma` (L25 sl.35–39) | **Commotio retinae, retinal breaks, retinal detachment and choroidal rupture as RETINAL DISEASE** | `op-ret` | ☐ |
| `op-trauma` (L25 sl.41–42) | **Marginal eyelid laceration repair and canalicular laceration repair with intubation, as PROCEDURES.** `op-trauma` keeps only the three levels of lid laceration, which is the triage `L25` teaches. ⚠️ **Both receiving decks (`L27,28`, `L9`) are on the owed-visual-read list, so neither row can be ticked yet** | `op-appear`, `op-lac` | ☐ |
| `op-trauma` (L25 sl.13 · L26) | **Keratoplasty, keratoprosthesis and limbal stem cell deficiency as CORNEAL disease** — kept in `op-trauma` only as the names on the burn-surgery ladder | `op-cornea-surg` | ☐ **⚠️ already merged; reconciliation work** |
| `op-glauc` (**L3,4** sl.24–26) | **⚠️ REVERSE — `op-va` must still write slides 24–26.** The *>2/3 nasal iris shadow* that `opqb-t1-33` turns on is printed verbatim on slide 24, with the shallow/deep anterior-chamber causes table on slide 26 — inside `op-va`’s range, not `op-pupil`’s. Written into `glc-12` **cited only, words NOT counted**, so the slides are still unspent | `op-va` | ✅ **delivered 2026-08-17** → `va-14`. **ROW VERIFIED EXACT ON EVERY COUNT** — slide 24 (lines 132–140) prints the shadow rule verbatim; slide 26 (lines 149–160) is the shallow/deep table (shallow: hypermetropia, angle-closure, intumescent cataract, perforated corneal ulcer, wound leak · deep: high myopia, aphakia, buphthalmos); both fall at lines 132–160, inside `op-va`’s range; `opqb-t1-33` is `op-glauc`’s and does turn on it; `glc-12`’s own `Src:` says *cited only, not counted*, so the words really were unspent. ⚠️ Declared consequence: sl.24–26 now sit in **two** chapters — `op-glauc` needed it for its question, `op-va` because it is its range and its TERM 1. Deliberate |

> **⚠️⚠️ `ent-otorrhea` IS NOW OWED THE SAME OTORRHOEA DECK BY THREE CHAPTERS INDEPENDENTLY** —
> `ent-otalgia`, `ent-csom` and `ent-hearing`, none of which knew of the others. That is not
> triplicated work, it is **one deck that three chapters each correctly refused**, and it means
> `ent-otorrhea` (29 questions) carries a far larger content debt than its question count suggests.
> **Write it against all three rows at once**, and expect its entity floor — not its question count —
> to set the budget. The same is true, at two rows each, for `ent-vertigo` (L20, from `ent-earanat`
> and `ent-audio`), `ent-pharanat` (L1.2, from `ent-pharsupp` and `ent-dysph`), `ent-phon` (L8, from
> `ent-hoarse` and `ent-dysph`), `ent-nasalobs` (L31, from `ent-nasalmass` and `ent-rhin`) and
> `ent-tonsils` (adenoids, from `ent-nasalmass` and `ent-rhin` — and it is **already merged**, so that
> one is reconciliation work). **⚠️ COUNT THE REGISTER ROWS BEFORE BRIEFING A CHAPTER. A chapter's
> question count does not predict what it has been handed.**

> **⚠️ TWO CHAPTERS CAN DEFER THE SAME FACT TO EACH OTHER — the register is what catches it.**
> `ent-paedlar` sent the full RRP account to `ent-hoarse`; `ent-hoarse`, written afterwards, sent it
> back to `ent-paedlar`. Neither agent was wrong on its own reasoning, and **a circular deferral
> deletes the fact while leaving two headers that both look correct.** Checked 2026-08-14 and it had
> not fired: `paed-8` carries the aetiology, HPV 6/11, the debulking ladder and cidofovir, `hoar-8`
> carries the adult-onset premalignant form. **The check is one grep across both merged chapters for
> the fact's own vocabulary — never a reading of the two headers.** Run it whenever the register
> shows two chapters pointing at each other.


> **⚠️ A SECTION MAY LEGITIMATELY LINK NO QUESTIONS — THAT IS THE LECTURE SIDE OF THE FLOOR, NOT A
> DEFECT. Audited 2026-08-14: exactly 2 of 253 merged sections have an empty `qs`, both in
> `ent-rhin`** — `rhin-1` (the rhinosinusitis classification tree and the nose’s six defences) and
> `rhin-14` (fungal rhinosinusitis). Two is a healthy number: it means the question side of the
> floor is carrying almost all the structure, and the reader still reaches these by browsing.
>
> **⚠️ DO NOT "FIX" `rhin-14` BY DELETING IT OR BY LINKING THE FUNGAL QUESTIONS TO IT.** All twelve
> fungal questions are filed under `ent-sinusitis`, so linking them from `ent-rhin` would register
> as a wrong-chapter error. The split is deliberate and was made with the reason stated: `rhin-14`
> is **L30’s own fungal classification, where the rhinitis deck puts it**, and `sin-11` is the
> **question-facing treatment on the host/organism/lethality axis**, carrying four keys `rhin-14`
> does not — Mucor as the organism, the iron/ketoacidosis mechanism, steroids being indicated in
> allergic and contraindicated in invasive disease, and the mucormycosis vignette. L30’s 227 words
> stay charged to `ent-rhin`. **Writing `sin-11` was the right call: without it twelve questions
> would have had no reachable notes at all.**

> **⚠️ `ent-vocal` (25 questions) IS NOW OWED VOCAL CORD PARALYSIS BY THREE CHAPTERS** — `ent-hoarse`,
> `ent-paedlar` and `ent-pharanat`, none aware of the others. **This is the same shape as
> `ent-otorrhea`**, which turned out to carry the largest content debt in the module behind the
> smallest question count. Between them the three rows owe: the unilateral aetiology ranking
> (bronchogenic ca 1st, thyroid 2nd, oesophageal 3rd, skull base 4th), the surgical and neurologic
> lists, the bilateral percentages (iatrogenic 80 %, malignancy 10 %, neurologic 5 %), the cord
> positions, the RLN-vs-vagus contrast, the management ladders, and congenital cord palsy.
> **Brief it against all three rows at once and let its ENTITY floor set the budget, never its 25
> questions.**

> **✅ HUB RULING, asked for rather than assumed — NASOPHARYNGEAL CARCINOMA DOES HAVE A HOME, IN
> FACT TWO, AND NEITHER IS MISSING.** `ent-pharanat` flagged that no `ent-npc` exists in `MODULES`
> and refused to assume. Checked: **`nmass-8` carries NPC as a full entity (12 questions)** and
> **`aom-11` carries the adult-unilateral-effusion rule (11 questions)** — different angles, different
> question sets, both written. **No row is owed and none should be opened.** Flagging it was still
> correct: a chapter that does not exist cannot be checked for by the validator.

> **⚠️⚠️ A REGISTER ROW IS A CLAIM BY THE DEFERRING CHAPTER, NOT A FACT — VERIFY IT AGAINST THE DECK.
> THREE DIFFERENT WAYS A ROW HAS NOW BEEN WRONG, EACH CAUGHT ONLY BY THE RECEIVING CHAPTER:**
> 1. **It over-specified the content.** The rhinoscleroma row promised **three** stages; `L30` prints
>    **four** — catarrhal, hypertrophic, atrophic *and* cicatricial. `ent-rhin` read the deck and
>    corrected it.
> 2. **It promised something the deck does not contain** — the *"content of voice therapy"* case
>    immediately below.
> 3. **It named the WRONG DECK.** `ent-pharanat` deferred the swallowing assessment as coming from
>    `L1.2`/`L1.1`. `ent-swallow` greped both: **`L1.1` returns zero hits for FEES, VFSS, manometry,
>    aspiration, penetration or screening, and `L1.2` returns only the word "deglutition" inside two
>    unrelated slides.** Every item the row named is in **`L7`** — which is to say, in the *other* row,
>    from `ent-dysph`. **The two rows were one deck seen from two chapters**, and were delivered once.
>
> **The content was real in all three cases. What was wrong was the description of it.** So: read the
> named deck, grep the stem across all 34 files, and where the row and the source disagree, **write
> what the source holds and report the row as mis-stated with the evidence.** Never re-attribute
> quietly, never manufacture the difference, and never tick a row you could not verify.
>
> **⚠️ A ROW CAN ALSO BE ARITHMETICALLY INFLATED.** `ent-swallow`'s promised 1,522 words included a
> 32-word title block, a 131-word ILO index (a contents list for the body already claimed — counting
> it bills the same content twice inside one file), and 75 words already written verbatim in the
> deferring chapter itself. **Content delivered whole; only the number moved.** State the correction
> rather than inheriting the figure.

> **⚠️⚠️ A REGISTER ROW CAN PROMISE SOMETHING THE DECK DOES NOT CONTAIN — AND THE RECEIVING CHAPTER
> MUST SAY SO, NOT MANUFACTURE IT.** `ent-hoarse`’s row promised *"the content of voice therapy"*
> among L8’s protocol. **L8 prints none.** `ent-phon` greped all 34 decks: the phrase appears only
> in L2 and L11, and the goals plus the surgical ladder are **already written in `hoar-11`**. So the
> row was written from the deferring chapter’s expectation of what the deck held, not from the deck.
> **A deferral is a promise about where a fact BELONGS, never a guarantee that it EXISTS.** When the
> receiving chapter cannot find it: grep the whole corpus, check whether the deferring chapter wrote
> it after all, and **report the row as undeliverable with the evidence** — do not quietly fill the
> gap from general knowledge and tick the row, which would make the register a record of fiction.

> **⚠️ THE INVERSE OF DOUBLE-CHARGING ALSO EXISTS AND IS HARMLESS — words charged to NO chapter.**
> L8 lines 213–243 (184 w, voice symptomatology and the functional/MAP/organic tree) are **written in
> `ent-hoarse` but were declined by its budget**, and `ent-phon` excluded them too since that chapter
> already carries them. Nobody billed them. `ent-phon` stated this rather than sweeping them into
> TERM 1 to buy headroom, which is the right call: **the budget may understate a chapter, never
> overstate it.** Under-counting costs nothing; over-counting buys room the content has not earned.
> **⚠️⚠️ THE END-OF-ENT REVIEW'S "RESTS ON OUTSIDE KNOWLEDGE" LIST IS ABOUT HALF WRONG, AND MUST BE
> RE-GREPED ITEM BY ITEM BEFORE ANY BOOK-READING IS PLANNED ON IT.** That list drives the most
> expensive owed work in the project — *"one ENT-nose-book read fixes it"* — and thirteen of its items
> have now been checked by the chapters that inherited them. **Found PRINTED and used as sourced:**
> the Cottle test (`L24`, verbatim) · Samter's triad (`L29`, in full) · the postcricoid risk in
> Plummer–Vinson (`L10`, twice) · globus as a diagnosis of exclusion (`L10`, verbatim) · bird's beak
> (`L10`) · the infantile larynx (`L12`, in full, plus C3–4 and Poiseuille on `L6`) · Reinke's (`L2`)
> · and **five of the seven osteomeatal-complex items** — the term *ostiomeatal complex* itself
> (`L29`), uncinate, bulla, hiatus and infundibulum (`L26`), which the review lists as absent.
> **Confirmed genuinely ABSENT, 0 hits corpus-wide, and correctly tagged:** agger nasi · lamina
> papyracea · nasal lymphatic drainage · the valveless venous route to the cavernous sinus (the
> *complication* is printed three times, the *route* never) · laryngeal lymphatic drainage · rat tail
> and apple core · glomus as an entity · temporal-bone fracture types · aural foreign body, wax and
> syringing · Gerlach and Luschka. **Half printed:** the sneeze reflex — `L23` names "reflex function"
> and `L29` lists "reflexes (cough, sneeze)" among the six defences, but the *arc* is not printed.
>
> **⚠️⚠️ A SPELLING CAN HIDE A HIT, AND IT HAS NOW DONE SO TWICE — GREP THE STEM, NEVER THE WORD.**
> The decks write *ostio-*, so `osteomeatal` returns **0** while `ostiomeatal` is printed; and they
> write **"Uvelopalatopharyngoplasty"**, so `uvulopalato` returns **0** while `uvelopalato` finds it.
> **Both would have produced a confident, wrong "absent from all 34 decks" and a tag on sourced
> material.** Grep the shortest distinctive stem, try the obvious misspelling, and where a deck's
> spelling is non-standard **write both forms into the notes** so a search from either side finds it,
> as `ent-osa` did. **The lesson is the standing one — READ THE SLIDE BEFORE DECLARING A GAP — and
> it has now paid twelve times.** Treat every remaining item on that review list as unverified.


> **✅ AND A ROW CAN BE EXACTLY RIGHT — do not let the three defects above turn into blanket
> distrust.** `ent-nasalobs`’s headache row named the correct deck, the correct line range, and a
> word count that `wc -w` reproduces **to the word**; the receiving chapter read all 134 lines and
> found everything promised present and nothing uncollected. **The verification is cheap — one
> `sed -n` and one read-through — and it is the verification, not suspicion, that is the rule.**
> Check every row; expect most to hold.
### 14.6 What this costs, said plainly

The notes alone no longer explain why each wrong option is wrong — **the linked questions do**,
and they are one click away in the app. The user was shown this and chose it. Do not re-litigate
it, and do not quietly write the reasoning back in.
