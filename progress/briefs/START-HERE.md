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

**The user chose full teaching depth on 2026-08-12, knowing it is slower.** The ENT corpus averages
~520 words per explanation in recent work. Match that. Structure that works:

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

## 9. Scope — what NOT to do

- **Do not write theory notes.** `theory.<yours>.js` stays empty. It is an enormous separate job and
  no module has any. Questions with full explanations *are* the study material.
- **Do not touch the app's design, the Clepsydra, the schedule, or the gate.**
- **Do not attempt the module's `endpoint` PDF unless your module file tells you to.** They run
  2,000–4,000 pages for ~700 questions; the compact banks run ~150 pages for ~1,000. Measured
  2026-08-12. **Your module file names the order to work in — follow it.**
- **Do not read a whole PDF.** Explicit page ranges only.
- **Cache everything you read.** A scanned page should be rendered and read once, ever.

---

## 10. Two standing user preferences

- **Report in plain language.** The user has no programming background: *"I don't understand really
  I have no programing / coding background."*
- **Nothing may be left incomplete or wrong** — a missing option, a truncated stem, a
  mis-transcription. Verbatim: *"make sure not to let any information slips as it might affects my
  performance in the exam."* Where the **source itself** is wrong, follow §4(b): key it as printed,
  note the discrepancy.

**Now read your module file.**
