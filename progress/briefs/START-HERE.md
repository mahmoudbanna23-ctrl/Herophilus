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
cd "D:/claude os/Herophilus" && node -e "
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

> Read `D:\claude os\Herophilus\progress\briefs\START-HERE.md` (especially §2–§6 and §10) and
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

> **⚠️ MEASURED ACROSS FIFTEEN CHAPTERS, 2026-08-14 — `PAGES ≈ BODY WORDS ÷ 270`, ±12 %.** Every
> merged chapter, rendered and counted: 243–319 words per page, mean 270, across 1,701–3,826 words
> and 6–15 pages. **So the page test can be run in your head before rendering**, and two things
> follow. **(1) THE OPERATIVE CEILING IS ~2,700 BODY WORDS**, because that is where ~10 pages falls —
> not the formula's number, which every overrunning chapter so far has beaten and been accepted at
> (`ent-audio` +17.3 % → 7 pp · `ent-dysph` +28.8 % → 8 pp · `ent-rhin` +39.1 % → 9 pp). Treat the
> computed budget as the **target** and 2,700 as the **ceiling**; between the two, state the bill and
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

> **⚠️⚠️ THE DRAFT HEADER IS A CLAIM, NOT A MEASUREMENT — ALWAYS RE-COUNT THE FILE.** `ent-rhin`'s
> header read *"MEASURED OUTCOME: 1,836 body words … three compression passes took it there from
> 2,178"*, itemising which duplications went. **The file on disk was 2,682.** The agent had planned
> the pass, written the header describing it, and lost its connection before applying it — so the
> header documented work the file did not contain, in the confident past tense, and it was very
> nearly accepted on that basis. **The links, the section count and the structure were all sound;
> only the number was fiction.** Run the validator on every draft before ruling on it, and where the
> header and the validator disagree, **the file wins and the header gets rewritten.** The same
> applies to a resumed agent: its transcript remembers intentions it may never have executed.

**⚠️ SUM THE CHAPTER'S REAL LECTURE SET, DO NOT COPY THE EXAMPLE ABOVE.** Stridor's budget was set
by hand at 2,400 from L6 alone and the agent was right to challenge it: the chapter also draws on
L12 and L11, so the formula gives the 3,000 cap. Run `wc -w` on the files you actually use.

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
| `ent-otalgia` (L17,18) | **The entire OTORRHOEA half of the deck** — the four discharge types and their cause lists · **CSF otorrhoea** (temporal bone fracture types, halo sign, β2-transferrin, β2-trace protein, head elevation + CSF-pressure-lowering drugs, repair) · "no mucous glands in the EAC" · mucopurulent vs purulent attribution · **bloody otorrhoea and glomus tumours in full** | `ent-otorrhea` | ☐ |
| `ent-otalgia` (L17,18 / L16) | **The safe-vs-unsafe CSOM DISCHARGE table** | `ent-otorrhea` + `ent-csom` | ☐ |
| `ent-otalgia` (L16) | **Acute and coalescent mastoiditis in full**, mastoid fistula, cortical mastoidectomy, the complication lists, cholesteatoma, **Gradenigo's triad in full** | `ent-csom` | ☐ |
| `ent-otalgia` (L22) | The two cartilage-deficient areas and the **end-aural incision**, **fissures of Santorini**, "up and back", Eustachian tube, middle-ear walls and contents, inner ear | `ent-earanat` | ☐ |
| `ent-otalgia` (L15) | **Ramsay Hunt** prognosis (30 % full recovery), aciclovir, the steroid regimen, contrast with Bell's palsy | `ent-facial` | ☐ |
| `ent-otalgia` (L21.1) | **ASOM staging and treatment** | `ent-aom` | ✅ already written |
| `ent-aom` (L21.1) | Otitis externa, otomycosis, **malignant otitis externa**, furunculosis, hard impacted wax, bullous myringitis | `ent-otalgia` | ✅ **delivered 2026-08-14** |
| `ent-csom` (L17,18) | **CSF otorrhoea** in full · **bloody otorrhoea and glomus tumours** | `ent-otorrhea` | ☐ |
| `ent-csom` (L17,18 / L22 / L15) | **Otitis externa in full** · the **four-nerve referred-otalgia** table · ear anatomy detail · facial-nerve disorders | `ent-otalgia` ✅ / `ent-earanat` ☐ / `ent-facial` ☐ |
| `ent-csom` (L4) | **Pharyngeal suppurations** — only the Bezold's → parapharyngeal clause kept | `ent-pharsupp` | ✅ **delivered 2026-08-14** |
| `ent-pharsupp` (L1.2) | Pharyngeal divisions, **Waldeyer's ring**, the constrictors and the **inferior-constrictor dehiscence**, blood supply, nerve-supply diagrams, the swallowing phases. Only the tonsillar bed and **crypta magna** kept | `ent-pharanat` | ☐ |
| `ent-pharsupp` (L5) | **Branchial cyst, thyroglossal cyst**, the neck-mass differential | `ent-neck` | ☐ |
| `ent-pharsupp` (L16) | **Bezold's abscess in full** — mastoiditis, mastoid tip, the compass of spread, cortical mastoidectomy. Only the keyed mastoid-tip → parapharyngeal line kept | `ent-csom` | ☐ |
| `ent-tonsils` (v3) | **Quinsy management** — Hilton's manoeuvre, the incision points, interval tonsillectomy | `ent-pharsupp` | ✅ **delivered 2026-08-14** |
| `ent-earanat` (L20) | L20's whole clinical half — balance physiology, causes and assessment of vertigo, BPPV, Ménière's, vestibular neuritis, the positional tests | `ent-vertigo` | ☐ |
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
| `ent-hoarse` (L1.1) | Laryngeal cartilages, membranes and ligaments, extrinsic muscles, blood supply, the nerve-supply plates, piriform sinus, pre-epiglottic space **as anatomy** | `ent-pharanat` | ☐ |
| `ent-hoarse` (L8) | **The phoniatric evaluation protocol in full** — GRBAS parameter by parameter, VHI / VHI-10 / V-RQoL, the elementary/clinical/instrumental tiers, external laryngeal examination, mirror vs rigid vs flexible vs direct, stroboscopy, aerodynamic measures, the content of voice therapy, dysarthria/dyslalia/aphasia | `ent-phon` | ☐ |
| `ent-hoarse` (L6) | Stridor typing, tracheostomy, the adult and paediatric cause lists | `ent-stridor` | ✅ already written |
| `ent-hoarse` (L30) | **Rhinoscleroma of the nose** — its nasal stages and nasal management | `ent-rhin` | ✅ **delivered 2026-08-14** — `rhin-12`; `hoar-6` keeps the subglottis and the stridor-with-normal-voice line, checked so neither re-argues the other |
| `ent-hoarse` (L17,18) | Referred otalgia in full, the four nerves and their territories | `ent-otalgia` | ✅ already written |
| `ent-nasalmass` (L26) | The **"Reaching a diagnosis" allergic-rhinitis run** and the allergic-rhinitis clinical picture | `ent-rhin` | ✅ **delivered 2026-08-14** — `rhin-2`/`rhin-4`/`rhin-5`. ⚠️ L26's run is **three captioned photographs with no prose**; the written source is L29's own signs slides |
| `ent-nasalmass` (L26) | The **adenoid slides** — obstructive vs non-obstructive adenoid, adenoid facies | `ent-tonsils` | ☐ **⚠️ tonsils is already merged; reconciliation work** |
| `ent-nasalmass` (L30) | **Rhinoscleroma in full** — *Klebsiella rhinoscleromatis*, Egyptian endemicity, the stages, **Mikulicz cells and Russell bodies**, the expansile granuloma on CT, management | `ent-rhin` | ✅ **delivered 2026-08-14** — `rhin-12`. ⚠️ **THIS ROW WAS WRONG: L30 prints FOUR stages, not three** — catarrhal, hypertrophic, atrophic **and cicatricial**. The receiving agent read the deck and corrected it. **A register row is a promise, not a specification — the deck outranks it.** |
| `ent-nasalmass` (L26) | **Septal haematoma beyond the definition** — drainage, septal abscess, cartilage necrosis, saddle nose | `ent-septum` | ✅ **delivered 2026-08-14** — `sept-8` in full, incl. the haematoma-vs-abscess table and the cavernous-sinus route |
| `ent-septum` (L25.1) | **Little's and Woodruff's plexus**, the full epistaxis aetiology, cautery, packing, the arterial ligations | `ent-epistaxis` | ☐ |
| `ent-septum` (L25.2) | **Post-traumatic anosmia** as a subject — only the cribriform-shearing clause kept | `ent-epistaxis` | ☐ |
| `ent-septum` (L24/L31) | The general **nasal-obstruction work-up** — mucosal aetiology lists, turbinate hypertrophy in its own right, NOSE/SNOT-22, rhinomanometry, the decongestant rules · **CSF rhinorrhoea** after mid-facial trauma | `ent-nasalobs` | ☐ |
| `ent-septum` (L24) | **Nasal-valve anatomy in full** and valve reconstruction. Only the Cottle test and the valve's role in obstruction kept | `ent-nasalobs` | ☐ |
| `ent-septum` (L24) | **Wegener's as an entity** — ANCA, the triad, the systemic disease. Only its saddle-nose key kept | `ent-rhin` | ✅ **delivered 2026-08-14** — `rhin-13`, a full row: multisystem autoimmune collagen disorder, necrotising vasculitis, respiratory tract + kidneys + skin, septal ulceration, saddle nose, c-ANCA + ESR + biopsy, steroids + azathioprine/methotrexate |
| `ent-septum` (L24) | The septum's **arterial supply as vascular anatomy** — counted in this chapter's budget as L24's own ILO, but owed as anatomy | `ent-noseanat` | ☐ |
| `ent-audio` (L13,14 lines 422–556) | **The entire dizziness half** — epidemiology, ">90 % benign", "commonest cause is lack of sleep", "80 % from history", the Type I–IV classification, the descriptor list | `ent-vertigo` | ☐ |
| `ent-audio` (L13,14 lines 63–83) | **Static vs dynamic balance** | `ent-vertigo` | ☐ |
| `ent-audio` (L20) | Everything but the fistula test and the investigation categories | `ent-vertigo` | ☐ **⚠️ 2ND CHAPTER TO OWE THIS — `ent-earanat` registered it first and it is still unwritten. Two independent deferrals of one deck means `ent-vertigo` must be written against BOTH rows.** |
| `ent-audio` (L19.1) | The **seven hearing-loss types**, the CHL/SNHL cause lists, treatment | `ent-hearing` | ☐ |
| `ent-audio` (L19.1) | **The pressure transformer system** — areal ratio 17, lever 1.3, product 22, 26 dB | `ent-hearing` | ☐ |
| `ent-audio` (L19.2) | **Tinnitus in full** | `ent-hearing` | ☐ |
| `ent-nasalmass` (L31) | The full **nasal-obstruction aetiology** (mucosal causes, choanal atresia, pyriform aperture stenosis, turbinate hypertrophy, nasal valve dysfunction), **NOSE and SNOT-22**, rhinomanometry, acoustic rhinometry, the decongestant rules | `ent-nasalobs` | ☐ |
| `ent-nasalmass` (L25) | **Epistaxis management as a subject** — packing, cautery, the arterial ligations. Only angiofibroma embolisation kept | `ent-epistaxis` | ☐ |
| `ent-rhin` (L31) | The **nasal-obstruction work-up**, NOSE/SNOT-22, rhinomanometry · **discharge types as a subject** | `ent-nasalobs` | ☐ **2nd chapter to owe this** |
| `ent-rhin` (L27.1/L27.2) | **Acute and chronic rhinosinusitis in full** — only the viral-vs-bacterial line and the AERD/Samter clause kept | `ent-sinusitis` | ☐ |
| `ent-rhin` (L29) | **Nasal polyposis** | `ent-nasalmass` | ✅ already written — `nmass-5` |
| `ent-rhin` (L25.2) | **Smell disorders** as a subject · **epistaxis** | `ent-epistaxis` | ☐ |
| `ent-rhin` (L30) | **Septal perforation and saddle nose as lesions** — verified present in `sept-7`/`sept-8` before deferring | `ent-septum` | ✅ already written |
| `ent-rhin` (L30) | **Laryngeal scleroma** — verified present in `hoar-6` before deferring | `ent-hoarse` | ✅ already written |
| `ent-rhin` (L29) | **Adenoids** | `ent-tonsils` | ☐ **⚠️ tonsils is already merged; reconciliation work. 2nd chapter to owe it** |
| `ent-dysph` (L7) | **The whole swallowing-assessment deck** except its aetiology table — 1,522 of its 1,616 words | `ent-swallow` | ☐ |
| `ent-dysph` (L1.2) | **Pharyngeal anatomy** — only Killian's triangle kept | `ent-pharanat` | ☐ **⚠️ 2ND CHAPTER TO OWE IT — `ent-pharsupp` registered it first** |
| `ent-dysph` (L8) | **The phoniatric protocol** — only the laryngeal click kept | `ent-phon` | ☐ **⚠️ 2ND CHAPTER TO OWE IT — `ent-hoarse` registered it first** |
| `ent-dysph` (L5) | The **neck-mass differential** — only the cystic swelling kept | `ent-neck` | ☐ |
| `ent-dysph` (L2) | The **supraglottic/glottic/subglottic carcinoma table** — verified present in `hoar-8`, which also already carries the Plummer–Vinson-is-premalignant-for-postcricoid-not-laryngeal line | `ent-hoarse` | ✅ already written |

> **⚠️ TWO CHAPTERS CAN DEFER THE SAME FACT TO EACH OTHER — the register is what catches it.**
> `ent-paedlar` sent the full RRP account to `ent-hoarse`; `ent-hoarse`, written afterwards, sent it
> back to `ent-paedlar`. Neither agent was wrong on its own reasoning, and **a circular deferral
> deletes the fact while leaving two headers that both look correct.** Checked 2026-08-14 and it had
> not fired: `paed-8` carries the aetiology, HPV 6/11, the debulking ladder and cidofovir, `hoar-8`
> carries the adult-onset premalignant form. **The check is one grep across both merged chapters for
> the fact's own vocabulary — never a reading of the two headers.** Run it whenever the register
> shows two chapters pointing at each other.

### 14.6 What this costs, said plainly

The notes alone no longer explain why each wrong option is wrong — **the linked questions do**,
and they are one click away in the app. The user was shown this and chose it. Do not re-litigate
it, and do not quietly write the reasoning back in.
