# Drafting brief — Dr. HOUSE in ENT, NOSE TAIL + THROAT (Q391–Q685)

**Range:** House questions **Q391–Q685**, book pp.108–171. **294 staged, 82 folded, 212 to write.**
**Sweep verdicts, fold map and every adjudication: `house-sweep-throat.md` — READ IT BEFORE DRAFTING.**
Q391–Q471 are the **tail of the Nose section**; Q472–Q685 are **Throat**.

## Input / output

Staging is parsed from the transcripts `d-house-ENT-mcq-pdf055-086.md` in this folder. **The
transcript is the source of truth — if this brief and the staging disagree, TRUST THE STAGING and
say so in your report.** (A previous brief of mine named questions as folded that were not; the
agent checked, found the discrepancy, and was right.)

## Schema — copy exactly

```
{ id:'enthd-thr-<n>', bank:'house', module:'ent', chapter:'<chapter-id>',
  stem:'<stem, markdown bold on the load-bearing clause>',
  options:['..','..','..','..'],
  answer:<0-based index — MUST equal the staged key>,
  explanation:'<see below>',
  objective:'<one sentence: the fact this question tests>',
  source:'Dr. HOUSE in ENT, End-of-round MCQs 2025, p.<book page>. <notes>' },
```

Use `enthd-nose-<n>` for questions in the **Nose tail (Q391–Q471)** and `enthd-thr-<n>` for
**Throat (Q472–Q685)**. `<n>` is the printed question number — it is unique and it makes every
entry traceable to a page.

## ⚠️⚠️ THE ONE RULE THAT CHANGED SINCE THE EAR AND NOSE BRIEFS

Every House entry written so far ends with the marker
`Written for this bank — d house ENT mcq prints no explanation here.`
on the verified premise that this bank prints no explanations. **THAT PREMISE IS NOW FALSE FOR
ELEVEN QUESTIONS.** Eleven answer lines in the Throat section print an **editorial parenthesis**
appended to the key letter in the same body face:

| Q | book p. | key | printed parenthesis, verbatim |
|---|---|---|---|
| **607** | 155 | A | some references say dermoid but the professor in the lecture said it's thyroglossal cyst |
| **622** | 158 | D | Because Plummer vinson's syndrome causes cancer esophagus not cancer larynx |
| **623** | 159 | C | by exclusion .. all are precancerous except Reineke's edema |
| **630** | 160 | B | site of transition between 2 epithelium types |
| **631** | 160 | C | to avoid auto-implantation and spread of infection |
| **639** | 162 | A | Because both VCs are not in touch as they are in cadaveric position |
| **640** | 162 | B | Because both VCs are directly adherent to each other |
| **641** | 162 | C | Because the paralysed VC is kept in cadaveric position |
| **642** | 163 | D | because the paralysed VC is adducted so it interferes with inhalation causing dyspnea that is most prominent upon exertion |
| **645** | 163 | A | to preserve the anterior part which is responsible for phonation |
| **647** | 164 | A | due to paralysis of cricothyroid that is responsible for high pitched voice |

**For these eleven, and ONLY these eleven:**

1. **Capture the parenthesis verbatim inside `explanation`, unmarked** — printed text is never
   marked as authored, and it is never tidied, corrected or re-spelled. Reproduce the source's own
   spelling (*Reineke's*, *Plummer vinson's*, *VCs*) exactly.
2. **DO NOT write the standard marker unchanged** — it would be a false statement about the source.
   Write instead, as the final paragraph:
   `The bank prints its own one-line reason for this key, quoted above; the rest of this explanation was written for this bank.`
3. Everything else you write around it is still yours and still needs the rest of the rules below.

**Q607 is the most valuable line in the bank.** It is the source pre-empting a key dispute and
naming **the lecture** as its authority over "some references". Treat it as citable evidence.
⚠️ **Q607, Q623 and Q645 are FOLDS** (into `entep-mfe5-28`, `entqb-thr10-534`, `entep-mfe5-22`) —
the parenthesis goes into the **held** entry when the fold is applied, under the same rules.

⚠️ **Keep checking answer lines for an opening `(`.** Two of these eleven were found only after the
premise had already been called verified. If your staging shows one this table misses, it is real —
report it.

## Non-negotiable rules

1. **`answer` is ALWAYS the bank's printed key.** Never change it. Where a key is arguably wrong,
   say so **inside `explanation`** and keep the key. **Never dispute a key; record it.**
2. **No clinical fact without a citation.** Cite the cached lecture by filename and quote the
   slide's own words. Throat decks, all in `content/ent/lectures/`:
   `L1.1) Surgical anatomy of the larynx` · `L1.2) Anatomy of the pharynx` ·
   `L2) Hoarsness of Voice` · `L3) DISEASES OF THE TONSILS & ADENOIDS` ·
   `L4) PHARYNGEAL SUPPURATIONS` · `L5) NECK MASS` · `L6) Stridor  and tracheostomy` ·
   `L7) Assessment And Management Of Swallowing Disorders` · `L8) Introduction to phoniatrics` ·
   `L9) Snoring & OSA` · `L10) Dysphagia From ENT Perspective` ·
   `L11) Vocal cord paralysis` · `L12) Pediatric Laryngeal Lesions`.
   For the **Nose tail (Q391–Q471)** the decks are `L23`–`L27.2`, `L29`–`L32` (there is no `L28`).
3. **READ THE SLIDE BEFORE DECLARING A GAP** — this project has paid for that 16 times. Grep the
   **shortest stem** and the **misspelling**; this corpus prints `ostio-`, `Wegner's`, `hear loss`.
   ⚠️ **A grep hit you explain away unopened is worse than a miss, because it looks like evidence.
   OPEN THE HIT.**
4. **A GAP IS ANSWERED, NOT DECLARED.** Supply it from general medical knowledge and tag it inline
   — *(not taken from the course material)* — as a short tag on the claim, never a dead-end
   sentence. **Prefer another bank's printed answer to outside knowledge** wherever one exists.
5. **Explain every distractor.** A distractor is wrong for a reason and the reason is usually the
   teaching point.
6. **Never backtick an id you have not verified exists** in `app/data/questions.ent.js`. Grep first.

## ⚠️⚠️ A VERIFIED ABSENCE — NECK TRAUMA (House chapter 8, Q676–Q685)

⚠️⚠️ **THIS CLAIM WAS TOO BROAD AND IS CORRECTED (2026-08-23). `L6) Stridor  and tracheostomy`:413–416
DOES teach external laryngeal trauma** — `Open Trauma: Gun shot, Cut throat / Stab wound & Surgical` ·
`Closed Trauma: Blunt trauma / Hanging`. **I claimed the topic was absent after opening every hit for
`neck trauma`, `strangulation`, `penetrating` and `zone` — but I never grepped the source's own words
(`blunt`, `hanging`, `cut throat`, `stab`). I probed with MY vocabulary, not the source's**, which is
the exact recorded trap that cost five days on `generalized anxiety` vs the deck's `GAD`.

**What IS absent, named precisely:** the word **strangulation** · the **three-zone classification**
(zero across all 34 decks) · the **high/low-velocity taxonomy** · **hyoid-fracture detail** · and
**any ranking of imaging modalities in laryngeal trauma**.

The old, too-broad version is kept above the line only as the lesson: **name the specific thing
absent, and grep the source's vocabulary before writing the word "nowhere".**

**Therefore, for Q676–Q685: go to Grade Gain first, not to outside knowledge.** It prints the
subject — `entqb-thr7-335` (most common zone), `entqb-thr7-337` (strangulation),
`entqb-thr7-369` (blunt vs penetrating), `entqb-thr7-370` (large FB inhalation),
`entqb-thr7-373` (the bullied-patient airway assessment). Cite those. **Tag as outside knowledge
only what neither bank prints.**

## Depth budget (adaptive — 2026-08-13 ruling)

- **~250 words** for straight slide-recall.
- **~520 words** for a clinical vignette, a defective or arguable key, a cross-bank divergence, or
  a gap you had to fill.
- Shared tables live in **one** entry; siblings point at it rather than repeating it.
- `source` is a **citation plus notes**, never a second explanation.

## House style for `explanation`

Open with a **bold one-sentence answer** stating why the key is right. Then the grounding, quoting
the slide. Then **why the others are wrong** — a compact markdown table is usually best. Close with
a **clinical bottom line** and cross-references. Use `\n\n` between paragraphs (a literal
backslash-n pair inside the single-quoted JS string). Markdown tables render.

## Valid chapter ids — use ONE, exactly, assigned BY CONTENT

**Throat:** `ent-pharanat` (pharyngeal and laryngeal anatomy, physiology, congenital) ·
`ent-tonsils` (tonsils, adenoids, tonsillectomy and its complications) · `ent-pharsupp`
(quinsy, parapharyngeal, retropharyngeal, Ludwig's) · `ent-dysph` · `ent-swallow` ·
`ent-stridor` (stridor, tracheostomy, airway foreign body) · `ent-paedlar` (paediatric laryngeal
lesions) · `ent-hoarse` (hoarseness, laryngitis, laryngeal tumours) · `ent-vocal` (vocal cord
paralysis) · `ent-phon` (phoniatrics, voice) · `ent-neck` (neck **masses and swellings only**) ·
⚠️ **NECK AND LARYNGEAL TRAUMA GOES TO `ent-stridor`, NOT `ent-neck`** — corrected 2026-08-23 from
the corpus itself: `ent-neck` holds 49 questions of which **one** mentions trauma, while
`ent-stridor` holds 111 of which **25** are trauma, including `entqb-thr7-335/337/338/369`, the very
Grade Gain siblings these questions pair with. An earlier version of this line said `ent-neck` took
neck trauma; seven entries were filed on it and refiled. **Follow the corpus, not this list.**
`ent-osa`.
**Nose tail:** `ent-noseanat` `ent-epistaxis` `ent-rhin` `ent-sinusitis` `ent-sinuscomp`
`ent-septum` `ent-nasalmass` `ent-nasalobs` `ent-facialpain`.

**A question that straddles gets the primary chapter, with the secondary noted in `source`.**
Chapter by **content**, never by which chapter of the book it sits under.

## ⚠️ Escaping — the project's most expensive problem

- Fields are **single-quoted JS strings**. Use the source's own **curly apostrophes** (’) rather
  than `\'` — more faithful, and immune to the parse bug that has broken these files five times.
- A literal newline inside a field **ends the string**. Use the two-character `\n` sequence.
- A **backtick inside a double-quoted bash string is command substitution** — it has silently blanked
  six terms from a file already. Use a **quoted heredoc** (`<<'EOF'`) or the Edit/Write tool for
  anything containing a backtick, and **every chapter id we write is in backticks**.
- A heredoc over **~9 KB fails to parse**. Append **3–4 entries at a time**, and run `node --check`
  after every append.
- ⚠️ **Write your first 3–4 entries immediately and append in small batches.** Six drafting agents
  have died mid-run on this project, all at the moment of writing. What is on disk survives; what
  you are holding does not. **Never hold more than four unwritten entries.**
- Use a **unique temp-file prefix**. A sibling agent once overwrote another's chunk files mid-run.

## Defects and dependencies already recorded — honour them, do not re-litigate

1. **Back-references.** *"In the previous case…"* is printed verbatim at Q412, Q429, Q496, Q562,
   Q570 and Q633, each pointing at a **different** preceding vignette. **Restate the referenced case
   inside the stem** so the question stands alone in a shuffled deck — the deck order is hashed, so
   the previous question will not be adjacent. ⚠️ **Q701→Q702→Q703 is a THREE-LINK CHAIN**, the
   first in this bank; Q702 and Q703 are unanswerable in isolation.
2. **Figure-dependent questions with no crop yet.** Q616, Q617, Q618 (laryngoscopy photographs),
   Q694–Q699 (barium swallows), Q702 (four-panel, two endoscopic + two axial CT), and Q561's rash
   photograph. ⚠️ **Q697 is 100 % figure-dependent — its stem carries no clinical information at
   all and it cannot be drafted without the crop.** ⚠️⚠️ **Q616/Q617/Q618 differ EXACTLY by what
   their photograph shows** (polyp / nodule / contact granuloma), so `imgAlt` must give **modality
   and view only** — an alt text that names the lesion answers the question. This has given away
   six answers once already.
3. **The chapter numbers printed in this book are defective and must not be used as an index** —
   **the number 9 is printed on two different chapters** (*9. Dysphagia* at p.174 and *9. Clinical
   assessment of voice & swallowing* at p.177). Chapter your entries by **content**, as above.
4. **Q448 carries a cross-bank key divergence.** House keys *Nasal obstruction*; `entqb-nose6-195`
   keys *Purulent rhinorrhea*, on the same four options. **Keep House's printed key** and record the
   divergence in the explanation, citing the other bank. **Do not dispute it and do not raise it.**
5. **Q659's key is anomalous and its sibling's is confirmed.** Q659 (*safest*) and Q660 (*most
   difficult*) print the same three options and **both key Mid**. `entqb-thr8-418` prints *most
   difficult* and also keys Mid, so **Q660 is corroborated** — the oddity is Q659 alone, where no
   cross-bank check exists. Note it; keep the key.
6. **Q685 and Q686/Q687 are a deliberate TRIPLET**, one option block over three airway states, keys
   B/A/C. Q685 also pairs against `entqb-thr7-373`, which keys the *other* option because its stem
   lacks the mandibular-fracture clause. **Never fold any of these.** Other sets to leave alone are
   listed in `house-sweep-throat.md`.
7. **Normalise nothing when you quote the source.** The book prints the same eponym four ways in two
   pages (`Plummer vinson syndrome` / `Plummer vinson’s` / `Plummer vinson` / `Plummer Vinson’s`),
   and prints `Reineke's edema`, `Stretor`, `defintive`, `useually`. **Quote as printed**; you may
   use the correct spelling in your own prose.

## Return

Reply with a **short** report, not the entries: how many you wrote and to which file; every question
you could not complete and exactly why; every gap you filled from outside knowledge and where you
tagged it; every id you cross-referenced; and **anything in this brief that turned out to be wrong.**
**Trust the staging file over any list in this prompt** — briefs here have been wrong twice, and the
agent was right both times.
