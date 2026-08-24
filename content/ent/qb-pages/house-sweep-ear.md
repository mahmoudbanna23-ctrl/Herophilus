# Dr. HOUSE in ENT — six-stage duplicate sweep, Ear section Q45–Q239

**Swept 2026-08-23** against the whole held ENT corpus (1,699 MCQs: endpoint + Grade Gain +
the 41 House entries already merged). 194 staged questions from book pp.33–75.
Harness: `<scratchpad>/t10/hparse.js` + `hsweep.js --from=45`. Every candidate below was
**read side by side**; no fold was taken on a score.

## THIRTY FOLDS — all cross-bank, all into an existing entry

`alsoIn:['house']` is added to the target and the House citation folded into its `source`.
**Never a second entry** (CLAUDE.md §4).

| House Q | folds into | reached by | mechanism |
|---|---|---|---|
| Q45 | `entqb-ear3-58` | C | same key; **House prints FOUR options where Grade Gain prints THREE** (adds *Alpha-hemolytic streptococci*). An added/dropped distractor is a reprint |
| Q49 | `entep-mfe5-23` | B, F 1.00 | same four options in order, same key; House prints a **photo** where endpoint writes *"reveals middle ear effusion"* |
| Q51 | `entep-mfe5-24` | B | stem reworded only |
| Q56 | `entep-ear-197` | E 0.88 | identical; *grommet's*/*grommet* only |
| Q59 | `entep-nose-36` | B, E 0.90 | identical bar the child's age (10 vs 7) |
| Q61 | `entep-ear-141` | B, E 1.00 | stem reworded only |
| Q62 | `entep-ear-236` | C | **same four options REORDERED**, same key |
| Q65 | `entep-mfe5-25` | B | stem reworded only |
| Q71 | `entqb-thr4-220` | B, E 0.92 | *commonest*/*most common* only |
| Q74 | `entep-mfe4-1` | B | stem reworded only |
| Q76 | `entep-ear-201` | B | stem reworded only |
| Q77 | `entep-ear-200` | B | House gives a **vignette**, endpoint a bare statement; same options, same key |
| Q78 | `entep-ear-72` | B, E 0.86 | stem reworded only |
| Q84 | `entep-ear-71` | B, E 1.00 | capitalisation only |
| Q85 | `entep-ear-81` | E 1.00 | typos only (*poster-superior*) |
| Q86 | `entep-ear-199` | B | stem reworded only |
| Q87 | `entep-ear-59` | E 0.86 | typos only (*suppurative media* — the word *otitis* is dropped) |
| Q89 | `entep-ear-92` | B | stem reworded only |
| Q105 | `entep-ear-157` | B, E 0.88 | stem reworded only |
| Q115 | `entep-ear-68` | **A** | **exact, word for word** — the only stage-A hit in 194 |
| Q117 | `entep-ear-188` | B, E 0.94 | stem reworded only |
| Q133 | `entep-ear-149` | E 1.00 | same key; **House prints FIVE options**, adding *None of the above* |
| Q134 | `entep-ear-150` | B, E 1.00 | stem reworded only |
| Q166 | `entep-ear-196` | B | stem reworded only |
| Q174 | `entep-throat-109` | B | same options, same key; **House frames it as tonsillITIS, endpoint as post-tonsillECTOMY** — both glossopharyngeal referred otalgia |
| Q184 | `entep-ear-67` | B, E 0.87 | *Webber's*/*Weber's*, *Rinne'*/*Rinne* |
| Q188 | `entep-mfe5-6` | B | stem reworded only |
| Q199 | `entep-ear-194` | B | stem reworded only |
| **Q212 (2nd printing)** | `entep-ear-198` | B, E 1.00 | identical — see the duplicate-number defect below |
| Q213 | `entep-ear-195` | E 1.00 | abbreviations expanded only |

## HELD AS NEW after side-by-side reading

- **Q50 vs `entep-mfe5-23`** — **same menu, different key.** Q49 (unilateral effusion) keys
  *watchful waiting*; Q50 (an **8-year-old handicapped child**) keys *grommet*. ⚠️ A deliberate pair.
- **Q189 vs `entep-mfe5-6`** — **same menu, different key.** Q188 (traumatic **perforation**) keys
  *Type B with HIGH basic volume*; Q189 (**effusion**) keys *Type B with LOW basic volume*.
  ⚠️ A deliberate pair, and merging either would invert an answer.
- **Q106 vs `entqb-ear4-119`** — both about cholesteatoma; different options, different key.
- **Q107 vs `entep-ear-147`** — **one replaced distractor** (*None of the above* for *Cleft palate*);
  §14c–d holds that as a new question.
- **Q109 vs `entep-ear-232`** — two options differ.
- **Q161 vs `entqb-ear7-179`** — different question; the stem-token match is the generic-stem artefact.
- **Q211 vs `entqb-ear9-248`** — different question.
- **Q212 (1st printing)** — *"All of the following cause continuous vertigo except"*, unrelated to
  the 2nd printing that folds.

## False positives worth reading as noise on sight

- **Q230 vs `entqb-thr2-68`** — a **bare directional option list** (*Left / Right / Up / Down*)
  carries no content, so stage D matched a vestibulo-ocular reflex question to a peritonsillar
  abscess. The recorded ordinal-menu trap, fired again.
- **Q238 vs `enthd-ear-16`** — the epithelium menu; matched nose olfactory epithelium to middle ear.
- **Q36 vs `entqb-nose6-198` and `entqb-nose8-256`** — the permanent **True/False trap**: any two
  two-option items match at B, C and F by construction. Only stage E reads the stem.

## Source defects recorded, keys held as printed (2026-08-11 ruling)

1. **⚠️ Q212 IS PRINTED TWICE ON ONE PAGE (book p.69)** as two entirely different questions.
   The 2nd folds into `entep-ear-198`; the 1st is new. Ids must disambiguate.
2. **⚠️ Q233 IS SKIPPED** (book p.74) — 232 runs straight into 234 with normal spacing. No content
   is missing; the number is simply unused.
3. **⚠️ Q57 / Q58 / Q56 ARE A THREE-QUESTION LADDER ON ONE VIGNETTE AND MUST NOT BE MERGED.**
   Same 7-year-old, same four options: **Q58** *"for 2 days"* → **wait and see**; **Q56**
   *"for 6 months"* → **grommet**; **Q57** *"and snoring with nasal obstruction for 6 months"* →
   **adenoidectomy**. Duration and nasal obstruction are doing all the work.
4. **Q167 prints its option letters A, B, C, B** — the fourth should be D. Key *"B"* is literally
   ambiguous; Q168's back-reference settles it as *Glomus tumor*. Key not disputed.
5. **Q50 stem promises an attached photo of the ear drum and none is printed** (book p.34,
   confirmed at 300 dpi). The only photo on that page belongs to Q49.
6. **Q92** keys *"All of the above"* over four independent claims; **Q91** keys A while option D
   reads *"A and C"*.
7. **Q80 vs Q81** — same four options, stems differing only in *"most serious"* (key B) versus
   *"most common"* (key A).
8. **Q183** back-references *"the opposite pattern of PTA"* while printing its own audiogram, so the
   referent is genuinely ambiguous. Flagged, not resolved.

## Structure established

**The Ear section is TEN chapters, book pp.23–74, questions 1–236:**
1. Surgical anatomy of the ear — p.23 · 2. External ear diseases — p.29 ·
3. Otitis media & middle ear effusion — p.33 · 4. Chronic suppurative otitis media &
complications — p.39 · 5. Facial nerve disorders — p.48 · 6. Tinnitus & hearing loss — p.54 ·
7. Otalgia & otorrhea — p.59 · 8. Basic audiological evaluation — p.62 · 9. Vertigo / dizziness —
p.66 · 10. Vestibular diagnosis — p.72.

**⚠️⚠️ THE NOSE SECTION OPENS ON BOOK p.75 AND THE NUMBERING DOES NOT RESTART** — the first Nose
question is **237**, running straight on from Ear's 236. The Ear section *did* restart at 1 on p.23,
so the two sections behave differently. **Ids cannot be namespaced from the number alone.**
