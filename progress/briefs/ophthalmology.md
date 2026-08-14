# Module brief — OPHTHALMOLOGY

> ## ⚠️⚠️ STAND DOWN ON THEORY — 2026-08-14
>
> **This module’s theory is now written by the ENT/hub chat, not here** (user’s decision,
> 2026-08-14). The usage pool is **shared between all four chats**, so four chats running agents
> multiplies session-limit deaths rather than throughput — four died on 13/14 Aug. Theory is also
> far shorter than projected: a chapter written from scratch under §14 takes **~9–10 minutes**
> (`ent-otalgia`, 1,752 words, 75 questions linked, 6 printed pages), so all ~97 remaining
> chapters are **2–3 days**, not two weeks.
>
> **Launch no subagent. Finish and commit the topic you are on — clean topic boundaries only —
> write `progressesume-<mod>.md`, and stop.** Full instruction and the paste text:
> `progressriefsPASTE-theory-format-changed.md`.
>
> **When the banks resume (~17 Aug): **FIRST — you resume before the other two.** ~1,800 questions remain against an exam on **27 Sep**: about 33 days of bank work in 35 days of calendar, the least slack of the four modules.**
>
> ⚠️ Your remaining-question figure is **extrapolated from ENT’s page ratios, ±30 %** — nobody has
> counted your bank’s pages. **Report the first real count to the hub** so the projection is
> corrected rather than trusted.
>
> §13.3’s **reconciliation pass is unchanged and still mandatory** when your banks close: theory
> written now cannot know about a question transcribed in September. It is a diff, not a rewrite.


**Read `progress\briefs\START-HERE.md` first.** It holds the method, the file boundaries, the
schema, the sweep and the validator. This file holds only what is specific to Ophthalmology.

> **⚠️ NEW, 2026-08-13 — READ `START-HERE.md` §12 BEFORE DRAFTING ANYTHING ELSE.** The user revised
> the writing budget: **adaptive depth** (~520 words where it earns it, **~250 for straight
> slide-recall**), **shared comparison tables written ONCE** with siblings pointing at the id, and
> **`source` as a citation, not a second explanation.** It changes **how much is written, never what
> is covered** — every question, every bank, all six sweep stages, every defect and every gap-fill
> stay exactly as they were, and the theory notes remain a study source sufficient to sit the exam
> from. **If time runs short, say so loudly — never trim a bank.** Apply from your next batch; do not
> rewrite finished entries.
>
> **⚠️⚠️ AND READ §13 — THEORY NOW COMES FIRST.** The user set a deadline on 2026-08-13: **both your
> subagent slots write THEORY CHAPTERS from now until ~2026-08-22**, then question banks resume and
> run to completion (~Sep 7). Notes that arrive the week of the exam are notes that get skimmed;
> finishing them by the 22nd leaves ~2 weeks to revise from. **Nothing is dropped — the banks resume
> after.** §13 carries the reconciliation pass you owe when your banks finally close, and the warning
> that §12 depth rules do NOT apply to theory.
>
> **⚠️⚠️ AND §14 WAS REWRITTEN LATE ON 2026-08-13 — THE THEORY FORMAT CHANGED AGAIN AND THE NEW ONE
> IS MUCH SHORTER. READ IT BEFORE YOU BRIEF A SINGLE THEORY SUBAGENT.** The user read printed ENT
> chapters at 30–47 pages against lectures of 977–2,289 words and rejected them: *"toooo much… the
> original sources are much less than yours."* The cause was the old rule *"every question
> answerable from the notes alone including why each wrong option is wrong"* — it duplicated each
> question's own `explanation`, which the app already shows one tap away through the `qs` link.
> **Now: a HARD word budget — body words ≤ the summed word count of that chapter's cached lecture
> files (floor 600, cap 3,000), checked by script at merge.** Coverage stays two-sided: every
> important LECTURE fact, plus every linked question's **key and discriminator** as a line or a
> cell — **but never the distractor essay.** Telegraphic fragments, tables by default, no question
> ids in body text, one `Src:` line per section, `intro` ≤ 50 words. **§14.5 adds a DEFERRAL
> REGISTER: a fact you move to another chapter must be named there, or it is a deletion wearing a
> promise's clothes.**
>
> **⚠️ THE WORKED EXAMPLE THE USER APPROVED is
> `content\ent\theory-drafts\ent-stridor.v2.draft.js` — 14 sections, 3,759 words, 13 printed pages, 113 questions linked, rewritten down from 47 pages.
> Read it and match its density before writing anything. Your module's chapters are far thinner on
> questions than ENT's, so most of yours should land WELL under 2,000 words.**

---

## Your identifiers

| | |
|---|---|
| `module` value | **`ophtho`** |
| Your data file | **`app\data\questions.ophtho.js`** — array `Q_OPHTHO` |
| Your cases file | `app\data\cases.ophtho.js` — array `C_OPHTHO` (exists, empty) |
| Your notes | `content\ophtho\qb-pages\` |
| Your resume file | **`progress\resume-ophtho.md`** — create it in your first hour |
| Your image token | `q-op-…` — e.g. `q-op-gg-44.jpg` |

**Current state: 0 questions.** Everything here is new work.

---

## Your banks, in the order to work them

Three exist. **The page arithmetic decides the order** — measured 2026-08-12 with `pdfinfo`.

| Order | Bank | File | Pages | Notes |
|---|---|---|---|---|
| **1st** | **Grade Gain** | `Semester 8\Opthalmo\Questions\ophthalmology qb.pdf` | **185** | Id prefix **`opqb-`**. ENT's equivalent held ~1,080 questions in 185 pages |
| **2nd** | **House** | `Semester 8\Opthalmo\Questions\ophthalmology MCQ.pdf` | **126** | Id prefix **`opmcq-`**. ⚠️ Its filename says "MCQ" but **its cover reads *Dr. HOUSE in …*** — identify by the cover, never the filename |
| **3rd** | **Endpoint** | `Semester 8\Opthalmo\Questions\Opthalmology endpoint.pdf` | **2,442** | Id prefix **`opep-`**. **In scope and to be done** — it is last only because it is the most expensive per question |

**Then the module's theory notes**, per `START-HERE.md` §9. **All three banks and the theory are your
scope; the order is about sequencing, not about dropping anything.**

**Why that order:** ENT's endpoint file ran **3,075 pages for 697 questions** — 4.4 pages per
question. Grade Gain ran **185 pages for ~1,080** — 0.17 pages per question. The compact banks are
roughly **25× more productive per page read**, so doing them first means the same hours buy far more
coverage earlier. **⚠️ Tell the user when you finish each bank** — not to ask permission to carry on,
but so they can see the pace and steer if they want to.

**⚠️ Confirm each bank's identity by rendering page 1 before assigning `bank`.** In ENT,
`ENT QB.pdf` turned out to be Grade Gain and `ophthalmology MCQ.pdf` is House — neither is
guessable from its name.

---

## Your 26 chapters

Every question's `chapter` must be exactly one of these strings.

| id | Title |
|---|---|
| `op-intro` | Introduction, History |
| `op-va` | VA, Field, Lid, Lac, Orbit |
| `op-ant` | Anterior Segment |
| `op-pupil` | Pupil, EOM, Fundus |
| `op-lid` | Lid |
| `op-conj` | Conjunctiva |
| `op-refract` | Errors of Refraction |
| `op-lac` | Lacrimal System |
| `op-orbit` | Orbit |
| `op-glauc` | Glaucoma |
| `op-sclera` | Sclera |
| `op-uvea` | Uvea |
| `op-cornea` | Cornea |
| `op-red` | Red Eye |
| `op-cat` | Cataract |
| `op-ret` | Retina |
| `op-neuro` | Neuro-ophthalmology |
| `op-systemic` | Systemic Diseases |
| `op-onc` | Oncology |
| `op-trauma` | Trauma |
| `op-appear` | Problems of Appearance |
| `op-squint` | Squint |
| `op-acute` | Acute Visual Loss |
| `op-white` | The White Eye |
| `op-insid` | Insidious Visual Loss |
| `op-vissym` | Visual Symptoms |

**⚠️ THIS LIST OVERLAPS ITSELF DELIBERATELY, AND YOU MUST NOT INVENT A RULE FOR IT.** The syllabus
teaches the same material twice — once by **anatomy** (`op-lid`, `op-lac`, `op-orbit`, `op-cornea`,
`op-ret`) and once by **presenting complaint** (`op-red`, `op-white`, `op-acute`, `op-insid`,
`op-vissym`). `op-va` compounds it by naming five regions in one title.

**The rule: file by what the QUESTION tests, not by what organ it mentions.** A question asking
*"which of these causes a painful red eye"* is `op-red` even though the answer is uveitis;
a question asking *"the commonest complication of anterior uveitis"* is `op-uvea`. **Where a
question genuinely straddles two, assign a primary and NOTE THE SECONDARY in the explanation.
Do not silently guess.**

Record your filing decisions in `progress\resume-ophtho.md` as you go, so the second bank is filed
the same way as the first.

---

## Your lecture cache — 25 files, already extracted

`content\ophtho\lectures\*.txt`. **Check it before rendering anything, and LIST THE DIRECTORY BEFORE
CITING A FILENAME** — citing one from memory has been wrong three times in ENT.

```
L1,2) Ocular Anatomy, Symptomatology & Basic Eye Examination     L21) Optic Nerve
L5) Eyelid disease                                               L22) Pupil and Visual pathway
L6) Conjunctiva                                                  L23) Ocular manifestations of systemic diseases
L7,8) Refractive errors                                          L24) Ocular tumors.
L9) lacrimal system.                                             L26) Trauma II
L10) orbit                                                       L29) Sqint I
L11) Glaucoma Diag, POAG                                         L30) Squint II
L12) Glaucoma 2 Cong, PACG, 2ry                                  L31,32) Acute visual Loss
L15,16) Cornea                                                   L33,34) The White Eye
L17) Cataract I                                                  L35,36) Chronic visual loss
L18) Cataract II                                                 L37) Red Eye
L19.1) Diabetic Retinopathy
L19.2) Retinal Vascular Disorders
L20) Retinal detachment and degenerations
```

**⚠️ THE NUMBERING HAS GAPS: no L3, L4, L13, L14, L25, L27, L28.** In ENT, one such gap turned out
to be a **lecture genuinely missing from the supplied material** — and `L26) Trauma II` here implies
a *Trauma I* that is not cached. **Verify against `Semester 8\Opthalmo\Theoritical\PPT\` before
concluding a lecture is missing**, then raise it with the user as a file they can supply. That is
the one kind of thing worth interviewing them about.

**Lecture slides extract cleanly with `pdftotext`** — they are Tier 1, nearly free. If you find an
uncached deck, extract and cache it rather than rendering it. If `pdftotext` returns almost nothing,
the deck is image-only: **render at 110 dpi and read FOUR-UP CONTACT SHEETS** — 10 reads instead of
40, with headings and bullets still legible at 760 px per slide. That trick was worked out in ENT.

---

## First actions

1. Create `progress\resume-ophtho.md`.
2. Render **pages 1–12** of `ophthalmology qb.pdf` to the scratchpad at `-r 130`. Read every one.
3. From those pages establish and **write down**: the cover and true bank identity; **the PDF-page
   to book-page offset**; whether the book has sections or chapters; how many questions per page;
   **whether questions and answers are on separate pages, and how far apart**; whether explanation
   boxes are printed.
4. Find and transcribe the **contents page** into your resume file as a page map — then treat its
   counts as unreliable and its page ranges as reliable, which is how ENT's behaved.
5. Work the first topic end to end: render → transcribe verbatim into
   `content\ophtho\qb-pages\` → within-bank sweep → write entries → splice → run the validator →
   update your resume file. **Then repeat.** Do not batch five topics of reading before writing any.
