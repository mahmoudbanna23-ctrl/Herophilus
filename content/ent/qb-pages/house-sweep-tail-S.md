# House tail sweep — adjudication of the fourth section, S-list (53 questions)

**Scope:** the 53 questions of `Selected department MCQs` (S1–S109) that carried at least one sweep
candidate and were not adjudicated before the brief. 177 candidates, every one read.
**Source:** `Semester 8\ENT\Questions\d house ENT mcq.pdf`, book pp.182–204.
**Transcripts consulted:** `d-house-ENT-mcq-pdf091-094.md`, `d-house-ENT-mcq-pdf095-098.md`,
`d-house-ENT-mcq-pdf099-103.md`.
**Verdict file:** `<scratchpad>\t10\verdicts-S.json`.
**Adjudicated:** 2026-08-24.

## Counts

| Verdict | Count |
|---|---|
| FOLD | 52 |
| HOLD BOTH | 1 |
| NEW | 0 |
| **Total** | **53** |

52 folds land on **45 distinct held entries** — seven entries each receive two S questions, because
the fourth section prints those seven items twice within its own 23 pages.

### Why the NEW count is zero

It is a measured zero, not a default. Every one of the 53 matched a held entry on the identical
clinical question — same fact asked, same option list once printing defects and abbreviations are
normalised, same key. Only two rows in the whole list ever presented the NEW signature the brief
names (a *replaced* distractor rather than a reworded one): **S21 and S70**, whose option c reads
*Bilateral wax* where `entep-ear-57` prints *Unilateral secretory otitis media (middle ear
effusion)*. Both were drafted NEW and both were **overturned by the held entry's own `source`
field**, which records that the endpoint file itself prints both variants and that the project
already folded them:

> `entep-ear-57` — *"ENT AlexMed Endpoints, Ear Questions, p.312 - reprinted at p.366 (Q112), same
> stem and answer, one distractor changed (bilateral wax for unilateral secretory OM); kept once"*

House's fourth section is reprinting endpoint's p.366 printing verbatim. A reprint of an
already-folded printing is a fold. With those two resolved, nothing in the list argued for NEW.

---

## Where the prompt and the brief were wrong

**1. Two of the four flagged "doubly-targeted" held entries are not in this list at all.**
The prompt named `entep-nose-14`, `entep-nose-16`, `entep-ear-80`, `entep-ear-81`. Checked
programmatically against `adj-S.json`:

| Flagged id | Reality |
|---|---|
| `entep-nose-14` | ✅ correct — S4 and S86 |
| `entep-nose-16` | ❌ **not a candidate on any of the 53 rows** |
| `entep-ear-80` | ❌ **not a candidate on any of the 53 rows** (both ids exist in `questions.ent.js`; they simply never appear here) |
| `entep-ear-81` | ✅ correct — S25 and S65 |

The near-misses look like transpositions: `enthd-ear-80` (House, not endpoint) *is* hit twice — by
S69 at stage F and S96 at stage C — but only ever as a losing candidate, never as a fold target;
and `entep-throat-16` (not `entep-nose-16`) *is* genuinely doubly-targeted, by S59 and S106.

**The true set of doubly-targeted fold destinations is seven, not four:**

| Held entry | Receives | Book pages |
|---|---|---|
| `entep-nose-14` | S4, S86 | 183, 199 |
| `entep-nose-5` | S8, S101 | 183, 202 |
| `entep-ear-57` | S21, S70 | 186, 196 |
| `entep-ear-81` | S25, S65 | 187, 195 |
| `entep-mfe4-3` | S26, S68 | 187, 195 |
| `entep-throat-84` | S58, S90 | 193, 200 |
| `entep-throat-16` | S59, S106 | 194, 203 |

**2. `S1 ↔ S78` is not a self-pair.** The prompt listed it among the known internal duplicates. The
two menus are different: S1 offers *Anterior ethmoidal / Posterior ethmoidal / Septal branch of
sphenopalatine / **Greater palatine***, S78 offers ***Labial branch of the facial** / Septal branch
of shenopalatine / Posterior ethmoidal / Anterior ethmoidal*. One distractor is replaced and the
order differs. Endpoint holds them as two separate entries (`entep-nose-53` and `entep-nose-65`) and
each S question folds one-to-one onto its own — **two folds, two destinations, no doubling.**

**3. `S19 ↔ S95` is mischaracterised the same way.** Same stem, but the fourth option differs
genuinely — *Post-tonsillectomy* at S19, *Perichondritis* at S95. Endpoint deliberately keeps both
variants (`entep-ear-76` p.362 and `entep-ear-96` p.412, *"Both kept, confirmed 2026-07-27"*), and
the fourth section reprints both. **Each folds onto its own variant; folding them together would
destroy a distinction the corpus has already ruled on.**

**4. The prompt's arithmetic drifts.** It says "53 questions … 177 candidates" (both correct, both
verified) and then refers to "the 149". Nothing in this list numbers 149.

**5. On the deliberate pair.** The prompt says `S44 ↔ S81` is the chronic/acute pair; the transcript
for pp.188–195 says `S44 ↔ S49`. **Both are true and neither record is wrong** — S44 prints *Chronic
retro-pharyngeal abscess :* against S81's *Acute retro-pharyngeal abscess :* over parallel option
blocks, while S49 is a third, `except`-framed acute question the transcript ties back to S44 on
content. None of S44, S81 is in my list, and S49's fold is against an **endpoint** entry with an
identical stem, so the deliberate-pair rule is not engaged by any verdict here.

---

## Findings for the main session

### ⚠️ An unfolded cross-bank duplicate already in the shipped corpus — `entep-throat-65` / `enthd-thr-648`

Both hold *Biphasic stridor may be due to:* with the same four options in the same order and the
same key. They are separated by nothing but **`tumour` against `tumor`** and a five-dot ellipsis in
the House stem. `entep-throat-65`'s own source documents that this exact spelling difference already
defeated stages A **and** B once against Grade Gain — the British/American trap this project has
been bitten by before — but it does not mention the House entry, so the pair was never folded.
S29 was folded into `enthd-thr-648` (same bank, so it adds a citation rather than an unwarranted
cross-bank claim). **Resolving the pair itself is outside this adjudication.**

### ⚠️ A held entry whose `source` contradicts its own options — `entep-throat-17`

Its source says of the two endpoint printings: *"p.1561 prints it in full as 'Drainage is Peroral
without general anaesthesia' — **the fuller wording is the one kept above**"*. The entry's option D
actually reads only **"Drainage is Peroral"**. S49 reprints the fuller wording, so the fold is
unaffected, but the note and the option disagree and one of them is wrong.

### ⚠️ A sweep ranking defect — S54

The true twin, `entep-throat-4`, was ranked **stage F at 0.86, below** a Grade Gain reorder
(`entqb-thr10-526`, stage C, 1.04) that shares only the key. Two things sank it: the word *Severe*
in *Severe stridor* set `sameKey=false`, and House's unexpanded abbreviation *RLN* wrecked the stem
score. The held entry's source describes this printing word for word. **Had the list been truncated
to a top-N, the correct target would have been cut** — the no-cutoff decision paid again here.

### ⚠️ `sameKey=false` is an abbreviation artifact three times over

S26, S68 (`Unsafe CSOM` vs `Unsafe type of chronic suppurative otitis media`) and S55
(`Lymph node(s)` vs `Lymph node enlargement`) all report `sameKey=false` while pointing at the same
answer, which pushed genuine folds down to stage E. **A key-text comparison that does not normalise
abbreviation and parenthetical expansion will keep manufacturing these.** Of the seven key-text
differences across my 53 fold targets, **six were spelling, abbreviation or an intensifier**
(`tumour`/`tumor`, `Herptic`/`Herpetic`, `Severe stridor`/`Stridor`, and the three above) — and
exactly one was real.

---

## THE ONE HOLD BOTH — in full

### S63 · book p.194 · `d-house-ENT-mcq-pdf095-098.md` · pairs with `entep-mfe6-1`

**Identical menu, opposite key.** This is the hold-both shape exactly.

**House, S63 (printed `63`, options marked `a- b- c- d-`):**

> All of the following may be seen in the tubotympanic type of chronic suppurative otitis media
> EXCEPT:
> a- Intermittent mucopurulent otorrhoea · b- Central tympanic membrane perforation ·
> **c- High incidence of complications** · d- Profuse odourless otorrhoea — **Answer: c**

**Held, `entep-mfe6-1`:**

> All of the following may be seen in the **tubotympanic type** of chronic suppurative otitis media
> **EXCEPT**:
> A) Intermittent mucopurulent otorrhoea · B) Central tympanic membrane perforation ·
> C) High incidence of complications · **D) Profuse odourless otorrhoea** — **key D**

All four options are identical in identical order. The stems are identical. **The keys are
different: House keys c, the held entry keys d.**

Verified against the printed page — the transcript records the answer line at `-r 500` as
unambiguously `Answer: c`, and notes that S63 is one of only two questions in its range that marks
options with a hyphen rather than a full stop, so the option letters were read directly rather than
inferred.

**Neither key is disputed and neither moves.** For the record only, and proposing no change:
`entep-mfe6-1`'s own `source` already carries the note **"DISPUTED KEY — recorded in the end-of-ENT
review"** and lists four sources against it — `L16) Chronic otitis media.pdf`, the sibling
`entep-ear-59`, `entep-ear-72`, and the explanation box at Model Final Exam 7 p.2722. House's fourth
section is now a **fifth independent printing keying c.** That is what the second entry records; the
`answer` on `entep-mfe6-1` stays where it is.

**Not the twin:** `entep-ear-59` also keys c, but over a different fourth option (*Negative Rinne
test in the affected ear*), so it is a different menu and a different item.

**Chapter by content:** `ent-csom`.

---

## Verdicts, question by question

Every held id named anywhere in this record was grepped in `app\data\questions.ent.js` before being
written — **58 ids, each resolving exactly once.** Every `into` is a candidate that appears on that
question's own row, checked programmatically.

### Nose and epistaxis

| Q | p. | Verdict | Into | What differs |
|---|---|---|---|---|
| S1 | 182 | FOLD | `entep-nose-53` | Nothing but emphasis — same stem, same four options in the same order, same key (posterior ethmoidal). Stage A. **Not a pair with S78.** |
| S2 | 182 | FOLD | `entep-nose-3` | Same four options in the same order, same key (sphenopalatine). House states the stem, endpoint asks it — that rephrasing is why it caught at B, not A. |
| S4 | 183 | FOLD | `entep-nose-14` | Same vignette (cardiac 50-year-old), same options, same key. House prints no full stop between *active bleeding* and *All of the following*. **Shares its destination with S86.** |
| S5 | 183 | FOLD | `entep-nose-55` | Same stem, same options, same key. Source defect: the number prints twice — `5. 5.Cacosmia is:`, verified at `-r 300`. |
| S6 | 183 | FOLD | `entep-nose-4` | Same 25-year-old post-root-canal vignette, same four options in order, same key. Missing sentence break in the stem cost it stage A. |
| S8 | 183 | FOLD | `entep-nose-5` | *attacks of sneezing* for *bouts of sneezing*; everything else identical. **Shares its destination with S101.** |
| S72 | 196 | FOLD | `entep-nose-59` | Stage A. Both printings misspell *diphtheria* — House `dipheteria` (verified at `-r 400`), held `diphetria`. |
| S78 | 197 | FOLD | `entep-nose-65` | Stage A, including the shared `shenopalatine` misspelling. **A different menu from S1 — see above.** |
| S86 | 199 | FOLD | `entep-nose-14` | Same question and options as S4; only the vignette's comorbidity differs (diabetic 60 for cardiac 50). The held entry's source already documents Grade Gain making this identical merge and calls it cosmetic. |
| S87 | 199 | FOLD | `entep-nose-68` | Same four coagulation options in order, same key. House prints the headerless tail only, because S86 supplies the vignette; the transcript flags S86/S87 as a linked pair. |
| S100 | 202 | FOLD | `entep-nose-69` | Stage A, exact. The three higher-listed candidates ask histology at other sites. |
| S101 | 202 | FOLD | `entep-nose-5` | Byte-identical to S8. The stage-D `entep-nose-19` shares the option **set** but keys CSF rhinorrhea over a different vignette — a different question, not a hold-both. |
| S102 | 202 | FOLD | `entep-nose-70` | Stage A, including the shared `sever` for *severe*. |

### Ear

| Q | p. | Verdict | Into | What differs |
|---|---|---|---|---|
| S13 | 184 | FOLD | `entep-ear-70` | Stage A; only the apostrophe glyph in *Meniere's*. |
| S19 | 186 | FOLD | `entep-ear-76` | Stage A. **Must not go to `entep-ear-96`** — the Post-tonsillectomy variant is a distinct held entry. Source defect: `diseasesEXCEPT:`. |
| S21 | 186 | FOLD | `entep-ear-57` | One distractor replaced (*Bilateral wax*), but the held entry's source records endpoint printing that same variant at p.366 and folding it. **Shares its destination with S70.** |
| S22 | 186 | FOLD | `entep-ear-78` | Stage A, down to the inconsistent trailing full stops. |
| S23 | 186 | FOLD | `entep-ear-79` | Layout defect only: option a is printed on the stem line, so the transcribed stem ends *"cranial nerve : a. IV nerve"*. Still four options; that run-on cost stage A. |
| S25 | 187 | FOLD | `entep-ear-81` | `All of he following` for *the*. **Shares its destination with S65.** |
| S26 | 187 | FOLD | `entep-mfe4-3` | House contracts three option texts (`Unsafe CSOM`, `Acoustic neuroma`); same answer. `sameKey=false` is an artifact. **Shares its destination with S68.** |
| S60 | 194 | FOLD | `entep-ear-85` | Stage A; only the apostrophe glyph. |
| S63 | 194 | **HOLD BOTH** | `entep-mfe6-1` | **Identical menu, different key — set out in full above.** |
| S65 | 195 | FOLD | `entep-ear-81` | As S25, plus `acute otits media`. **Shares its destination with S25.** |
| S66 | 195 | FOLD | `entep-ear-61` | Same four options in order, same key. *non serviceable hearing* for *profound hearing loss in the affected ear* — the same clinical situation. |
| S68 | 195 | FOLD | `entep-mfe4-3` | Byte-identical to S26. The transcript is right that S57/S68 are **not** duplicates of each other — different questions over three shared options; S57 is untouched. |
| S69 | 196 | FOLD | `entep-ear-56` | `feve,` for *fever,* and `Brudzniski` for *Brudzinski*, both verified at `-r 300`. |
| S70 | 196 | FOLD | `entep-ear-57` | Byte-identical to S21; same overturn. |
| S71 | 196 | FOLD | `entep-ear-91` | `Angiography confirm` without the third-person *s*; otherwise exact. |
| S91 | 200 | FOLD | `entep-ear-92` | `purulent discharge offensive ear discharge` (noun duplicated) and `A adult patient`. |
| S92 | 200 | FOLD | `entep-ear-93` | House prints the headerless tail; the held entry restates S91's vignette so it stands alone. |
| S93 | 200 | FOLD | `entep-ear-94` | `All of the followings` and a space before the colon. |
| S95 | 201 | FOLD | `entep-ear-96` | Stage A. **Must not go to `entep-ear-76`** — the Perichondritis variant is its own entry. The 1.35-ranked `entep-ear-54` is a different stem over the same options. |
| S96 | 201 | FOLD | `entep-mfe4-1` | The held entry names the Gradenigo triad in the stem; House prints it unnamed. |
| S98 | 201 | FOLD | `entep-ear-98` | `statement` for *statements*. **The stage-F `entep-ear-17` is a near-twin whose option D is genuinely different (*May cause mixed hearing loss*)** — S98 belongs on `entep-ear-98`. |
| S99 | 202 | FOLD | `entep-ear-99` | *about Meniere* for *about Meniere's disease*. |

### Throat, larynx and neck

| Q | p. | Verdict | Into | What differs |
|---|---|---|---|---|
| S29 | 188 | FOLD | `enthd-thr-648` | Same options, same key; House's main run prints `tumor`, the fourth section `tumour`. **See the unfolded `entep-throat-65` pair above.** The stage-E `entep-throat-15` replaces the key with *Tracheal stenosis* — different menu, not a hold-both. |
| S30 | 188 | FOLD | `entep-throat-21` | Stem ends *comes from:* rather than *comes from which vessel?*; source prints `comesfrom`. |
| S31 | 188 | FOLD | `entep-throat-66` | `Waldyer's` for *Waldeyer's*. |
| S39 | 190 | FOLD | `entep-throat-71` | Stage A, exact. |
| S40 | 190 | FOLD | `entep-throat-22` | `Supralaryngeal carcinoma` for *Supraglottic laryngeal carcinoma* — **not a swap**: the held entry's source records endpoint's p.1543 printing using the same non-word. Also a fourth spelling of the Plummer–Vinson eponym. |
| S45 | 191 | FOLD | `entep-throat-75` | Key prints as `Herptic pharyngitis`; `thepalatine` unspaced. |
| S49 | 192 | FOLD | `entep-throat-17` | Option d printed **more fully** (*without general anaesthesia*). Deliberate-pair rule not engaged — the fold is against an endpoint entry with an identical stem. |
| S54 | 193 | FOLD | `entep-throat-4` | The held source describes this printing word for word. **Ranking defect — found at stage F, below a Grade Gain reorder.** |
| S55 | 193 | FOLD | `entep-throat-23` | `Lymph node(s)` for *Lymph node enlargement* — the held source records endpoint's p.1573 printing doing the same. Source defect: `55. 55.` printed twice, verified at `-r 500`. |
| S58 | 193 | FOLD | `entep-throat-84` | `Stidor` for *Stridor*. **Shares its destination with S90.** |
| S59 | 194 | FOLD | `entep-throat-16` | House contracts option a. Top score in the list (1.60) and still only stage C. **Shares its destination with S106.** |
| S88 | 199 | FOLD | `entep-throat-90` | `strider` for *stridor*; dropped *is*. |
| S89 | 200 | FOLD | `entep-throat-91` | Stage A; trailing full stops only. |
| S90 | 200 | FOLD | `entep-throat-84` | *a case Suffering of* for *a case with*. **Shares its destination with S58.** |
| S106 | 203 | FOLD | `entep-throat-16` | Byte-identical to S59. |
| S107 | 203 | FOLD | `entep-throat-92` | Punctuation only. The stage-D `entep-throat-63` shares the option set but asks about Horner's syndrome and keys the parapharyngeal abscess — different question, not a hold-both. |
| S108 | 203 | FOLD | `entep-throat-93` | House prints the headerless tail; endpoint restates S107's vignette. The same linked pair on both sides. |
| S109 | 204 | FOLD | `entep-throat-94` | *may due to* for *may be due to*; both spell it `aneurism`. **Last question in the book.** |

---

## Method notes

- Every one of the 177 candidates was read, not just the top-ranked one. Six verdicts turned on a
  candidate that was **not** the highest-scoring row (S26, S40, S54, S55, S68, S95).
- `key` and `heldAnswer` index different arrays; every fold was checked by comparing the **option
  text** the two indices point at, run as an assertion across all 53 rows rather than by eye.
- Held-entry `source` fields were read for the eleven contested rows. **They overturned two draft
  verdicts (S21, S70) and confirmed four others (S40, S49, S54, S55, S86).** The endpoint file's own
  fold history is the most useful evidence in this section, because the fourth section is
  substantially a reprint of that file and therefore reprints its variants too.
