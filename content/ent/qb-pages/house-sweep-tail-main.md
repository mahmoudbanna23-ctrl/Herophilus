# House tail sweep — the end of the Throat run, Q686–Q724 (2026-08-24)

**21 staged questions, 47 candidates, every candidate read.** Verdicts: **FOLD 12 · NEW 9 · HOLD
BOTH 0.** Verdict file: `<scratchpad>\t10\verdicts-main.json`.

Sources read for this file: the two transcripts `d-house-ENT-mcq-pdf087-090.md` (book pp.172–179)
and `d-house-ENT-mcq-pdf091-094.md` (book pp.180–181); every named held entry read out of
`app\data\questions.ent.js` in full, including its `source` field; and the lecture caches
`content\ent\lectures\L6) Stridor  and tracheostomy.txt` and `L8) Introduction to phoniatrics.txt`.
**No PDF was rendered.**

---

## Why HOLD BOTH is zero

**Not one question in this range prints the same menu with a different key.** The two places that
looked like divergences are not:

- **Q706** — two distractors differ numerically (House *1 image*, Grade Gain *2 images*) but the
  **keyed option is identical text**. A divergence in a distractor is not a key divergence, so it
  folds and the difference is recorded. See below; it is the most citable single finding in this
  file.
- **Q686 / Q691 / Q692** — the three-member neck-trauma series and the graded series each print one
  menu with different keys **inside House itself**. That is the deliberate-pair shape, not a
  cross-bank key divergence.

---

## FOLD ×12

| House | book p. | folds into | bank held | caught at | what actually differs |
|---|---|---|---|---|---|
| `Q686` | 172 | `entqb-thr7-373` | gradegain | B 0.98 | `(transnasal)` vs `(trans nasal)`; two stem articles |
| `Q691` | 173 | `entqb-thr7-375` | gradegain | E 1.00 | bare ordinals vs `Grade …`; **fifth option V added** |
| `Q695` | 174 | `entep-enr-37` | endpoint | E 0.58 | House adds two clauses to the stem; same figure |
| `Q701` | 176 | `entqb-thr3-138` | gradegain | F 0.67 | age 50 vs 55; House prints the symptoms GG's box names |
| `Q704` | 176 | `entep-throat-42` | endpoint | **A 1.00** | a serial comma and an apostrophe |
| `Q705` | 177 | `entqb-thr11-579` | gradegain | **A 1.00** | nothing — both misprint `Videofluroscopy` |
| `Q706` | 177 | `entqb-thr11-580` | gradegain | C 1.48 | **two distractors: 1 image vs 2 images** |
| `Q709` | 177 | `entqb-thr11-582` | gradegain | C 1.52 | fifth option `None of the above` added |
| `Q714` | 178 | `entep-throat-27` | endpoint | C 1.35 | fifth option `None of the above.` added |
| `Q721` | 180 | `entqb-thr9-473` | gradegain | E 1.00 | **a swapped distractor — see the override below** |
| `Q723` | 180 | `entqb-thr9-483` | gradegain | E 1.00 | order, and `SNHL` for the expanded term |
| `Q724` | 181 | `entqb-thr9-488` | gradegain | C 1.50 | fifth option `None of the above` added |

### ⚠️ Q706 — the divergence, and what happens to it

Stem identical (House prints curly quotes around the law's name); options **C** and **D** identical;
the keyed text identical, so the key does not move and this is **not** a HOLD BOTH.

| | option A | option B | keyed C |
|---|---|---|---|
| **House Q706** | Retina can only perceive **1 image** each 0.5 seconds | **1 image** each 0.4 seconds | 5 images / second |
| **`entqb-thr11-580`** | Retina can only perceive **2 images** each 0.5 seconds | **2 images** each 0.4 seconds | 5 images / second |

**The held entry already records a defect that House's printing does not have.** Its `source` reads:
*option (b) "2 images each 0.4 seconds" is arithmetically the same rate as the key* — 2 ÷ 0.4 = 5 per
second, so Grade Gain prints two correct options and keys one of them. House's 1 ÷ 0.4 = 2.5 per
second, which is wrong, as a distractor should be.

**On folding, that note must be amended**: the flaw is Grade Gain's printing alone, and the second
bank prints the distractor as **one** image. The lecture backs House — the same entry quotes `L8` as
teaching *the retina can only register 1 image per 0.2 seconds or 5 images per second*, and the
singular *1 image* is the source's own form. **The `answer` does not move; nothing is disputed.**

### ⚠️ Q721 — I am overriding the brief's replaced-distractor rule, and saying so

House prints **Tissue chemistry** where `entqb-thr9-473` prints **Organic theory**. That is a genuine
swap, and the brief calls a swapped distractor the clearest signal of NEW. I fold anyway:

- the stem is the same sentence and the **keyed answer is the same** (*Genetic* / *Genetic theory*);
- the swap is between two **non-keyed** options, **neither of which is taught**. The held entry's own
  source says *the deck lists no theories of causation*, and I verified in the cache that `theor`
  appears in `L8` only inside its `SOURCE:` line, and that neither `tissue chem` nor `organic theor`
  appears in **any** ENT lecture cache.

The rule's stated rationale is *the item is asking something different*. Here it demonstrably is not.
**Record House's `Tissue chemistry` in the folded entry** so the variant is not lost.

### Three folds that close a recorded defect in the corpus

This is the same shape as the four reconstructed stems the Nose sweep repaired.

1. **`Q686` → `entqb-thr7-373`.** That entry's source records a defect: it keys *indirect mirror*
   where `entqb-thr7-372` keys *flexible transnasal* for what reads as the same problem, and *"the
   bank never says so"* about the reconciling clause. **House prints all three members of the series
   with the discriminating clause in each stem**, so the fold supplies the corroboration the note was
   missing.
2. **`Q701` → `entqb-thr3-138`.** That entry's source records *"the printed box describes symptoms
   (earache, neck swelling) that the printed stem does not contain — recorded, not repaired."*
   **House's stem prints exactly those two symptoms.** The fold restores the missing clause from a
   second bank.
3. **`Q691` → `entqb-thr7-375`.** Grade Gain's menu stops at *Grade IV*; `entqb-thr7-374`'s source
   states the Schaefer-Fuhrman classification has **five** grades. House prints five options. The
   fold adds the missing fifth.

### ⚠️ Q686 — which member of the three-question series it is

One menu, three keys, all four options identical in all three printings:

| | stem's discriminating clause | key |
|---|---|---|
| **`Q686` (this one)** | severe neck trauma **without evidence of facial affection**, airway stable, voice abnormal | **Indirect mirror laryngoscopy (transoral)** |
| `enthd-thr-685` (spliced) | **could not open his mouth, mandibular fractures**, airway **stable**, voice abnormal | Flexible fiberoptic laryngoscopy (transnasal) |
| `Q687` (main session) | could not open his mouth, mandibular fractures, airway **severely affected, cyanotic** | Tracheostomy |

**Q686 is the first member — the mouth opens, so the mirror goes in through it.** Verified in the
transcript at book p.172, not inferred from the prompt. The deliberate-pair rule forbids folding it
into either sibling; it folds into the Grade Gain printing of **the same member**,
`entqb-thr7-373`, whose stem also reads *without evidence of facial affection*.

---

## NEW ×9 — and why each zero is a zero

**`Q692` `Q694` `Q698` `Q703` `Q715` `Q716` `Q718` `Q719` `Q720`**

- **`Q692`** (p.173, → `ent-stridor`). Grade-II member of the graded series `Q691`/`Q692`/`Q693`,
  each stem negating the last. The staged candidate `entqb-thr7-375` is the **grade-III** member and
  keys a different grade. **The nearest sibling was never staged**: `entqb-thr7-374` keys *Grade II*
  on the same three findings — but prints them inside a full clinical vignette (30-year-old, blunt
  sports trauma, hoarseness, no respiratory distress, laryngoscopy and imaging, named as
  Schaefer-Fuhrman) where `Q692` is a bare definitional one-liner. Grade Gain itself holds its
  definitional and vignette forms as two entries. Cross-reference both.
  **The grading is not in the material**: `L6`:411–419 classifies trauma as External (Open: gun shot,
  cut throat, stab wound & surgical / Closed: blunt trauma, hanging) and Internal, and **grades
  nothing** — verified in the cache. A drafted entry must carry the outside-knowledge tag.
- **`Q694`** (p.174, → `ent-dysph`). Eleven candidates, all Plummer-Vinson-**answer** questions from
  six printings; the same answer is not the same question. The nearest, `entep-enr-20`, fails on
  three counts: **one option swapped** (House *Nasopharyngeal carcinoma* for endpoint *Esophageal
  stricture*; *Zenker's pouch* = *Zenker's Diverticulum*, so that is the only set difference);
  different patients (25-year-old with angular stomatitis and *other features of IDA* vs 34-year-old,
  8 years of progressive dysphagia, pale, underweight, glazed tongue); and **different figures** —
  House's is a two-panel lateral study with an `L` marker, the held `q-2886` is a single lateral film
  with one arrow. **Q694 needs its own crop.**
- **`Q698`** (p.175, → `ent-dysph`). A corpus-wide search for `caustic|corrosive|potash|alkali`
  returns **three** entries over all 2,216 and none is this question — `entqb-thr5-286` (battery as
  the most dangerous airway foreign body), `entqb-thr7-340` and `entqb-thr7-342` (acid-vs-alkali
  necrosis). No held entry prints a caustic-ingestion stricture. The candidates rank off the keyed
  words alone: `entqb-thr3-123` has no patient at all, and `entqb-thr3-129` is a 50-year-old with
  GERD whose fourth option is *Cricopharyngeal spasm* where House prints *Plummer vinson*.
- **`Q703`** (p.176, → `ent-dysph`). The only candidate, `enthd-nose-441`, scores 1.00 off three
  shared option strings (SCC / Adenocarcinoma / Sarcoma) but asks the commonest malignancy of the
  **nose and paranasal sinuses** and prints *Melanoma* fourth, where `Q703` asks the pathological
  type of a **hypopharyngeal** lesion and prints *Mixed pathology*. **A corpus-wide search for the
  phrase `pathological type` returns zero entries.** The Grade Gain chain that parallels this House
  case runs **two** links (`entqb-thr3-138` → `entqb-thr3-139`) and stops; `entqb-thr3-140` moves on
  to the laryngeal click. Chaptered `ent-dysph` **by content**, not `ent-nasalmass`: the corpus files
  hypopharyngeal and post-cricoid carcinoma in `ent-dysph` (`entep-throat-86`, `entqb-thr3-111`).
- **`Q715`** (p.179, → `ent-hoarse`). `entqb-thr9-486` shares only the keyed term; **three of four
  options are replaced.** House's menu — Habitual/psychogenic, Mutational, Phonasthenia, Dyslalia —
  is `L8`'s own **FUNCTIONAL** voice-disorder column (verified at `L8`:238–243: *Mutational voice
  disorders*, *Phonasthenia*, *Habitual aphonia*), so House tests a discrimination **within** the
  functional group; Grade Gain's — vocal fold nodules, spasmodic dysphonia, acute laryngitis — tests
  functional **against organic**. Stems differ too (12-year-old vs 14-year-old, and Grade Gain adds
  self-consciousness and avoidance).
- **`Q716`** (p.179, → `ent-phon`). The staged `entqb-thr9-475` asks the most common **cause** of
  hyponasality and keys *Adenoid* — a different question, matched at 0.50 off one shared word.
  **The nearest sibling was never staged**: `entqb-thr9-476`, *All of the following are true about
  nasality except*, is keyed on the same false proposition (cleft palate → hyponasality). Still NEW:
  its stem covers nasality as a whole and three of its options concern hypernasality, K/P/D pressure
  consonants and the hot-potato voice, where House's is confined to hyponasality and prints *Closed
  nasality* and the **M→B** substitution, which Grade Gain never prints. A corpus search for
  `hyponasal` returns six entries; all six read. The transcriber's flag stands: `Q716`/`Q717` are a
  **deliberate mirrored *except* pair** with cleft palate printed in both — do not fold them either.
- **`Q718`** (p.179, → `ent-phon`). *Caused by* against *most common cause of* — House prints both
  forms one page apart, `Q718` (five options, keyed *All of the above*) and `Q723` (four options,
  keyed *SNHL*). The staged `entqb-thr9-483` is the most-common-cause question, so it is **`Q723`'s**
  twin, not `Q718`'s: different key, and no held entry prints the fifth option on this stem.
- **`Q719`** (p.180, → `ent-phon`). `entqb-thr9-471` shares the keyed term *Dyslalia* and little
  else: Grade Gain asks from a clinical example (*lack of distinction between the letters K, T, G,
  D*) and offers *Echolalia*; House asks from the definition (*mispronunciation of certain sounds*)
  and offers *Dyslexia* — **a swapped distractor on top of a different stem**. `Q719`/`Q720` are
  themselves a deliberate pair over one menu, drawn from `L8`:51's list (*Dyslalias, Stuttering,
  Nasality, Dysarthria*) with *Dyslexia* substituted for *Nasality*.
- **`Q720`** (p.180, → `ent-phon`). Both candidates score 0.60 on stage F off shared option strings
  and neither asks this: `entqb-thr9-471` keys *Dyslalia* for the K/T/G/D confusion,
  `entqb-thr9-487` keys *Dysarthria* for Parkinsonism. **No held entry asks which condition is
  "disrupted fluency of verbal expression."** The closest text in the corpus is that exact phrase
  printed as a **non-keyed true option** inside `entqb-thr9-474` (*All of the following are true
  about stuttering except*) — a different question shape.

---

## Instrument faults found — the fourth and fifth instances of "a hit names *a* sibling, not *the
nearest* one"

The Throat sweep recorded three (`Q685`, `Q502`, `Q634`). Two more here, both found only by grepping
the corpus directly rather than reading the staging:

| staged question | what the staging showed | the nearest held entry, never shown | why it matters |
|---|---|---|---|
| `Q692` | `entqb-thr7-375` — **grade III**, the wrong grade | **`entqb-thr7-374` — grade II, the same key** | the verdict survives, but the cross-reference would have been missing |
| `Q716` | `entqb-thr9-475` — *most common cause*, a different question | **`entqb-thr9-476` — keyed on the same false proposition** | same |

Neither changed a verdict. Both would have produced an entry that failed to name its true sibling.

## ⚠️ A miss in the main session's own list: `Q702` is not a zero

`Q702` is recorded in `house-sweep-tail.md` under **NEW ×13 — no candidate at all**. The verdict is
almost certainly right, but **"no candidate at all" is not**: `entqb-thr3-139` is the same case, and
it carries **the same four-panel figure** — the held `imgAlt` reads *two endoscopic views of the
hypopharynx and larynx, with two axial cross-sectional images of the neck below*, and House's
transcript note for `Q702` reads *two endoscopic views of the upper aerodigestive tract (upper row)
and two axial CT sections through the neck (lower row)*. Both stems ask the diagnosis *given the
figures*, and both follow the untreated-Plummer-Vinson vignette that `Q701` and `entqb-thr3-138`
share.

**It stays NEW** — House's option list splits the hypopharynx into subsites (*Laryngeal cancer* /
*Hypopharyngeal cancer: Pyriform fossa* / *Hypopharyngeal cancer: Postcricoid area* / *None of the
above*) where Grade Gain prints *Esophageal cancer / Pyriform fossa cancer / Vocal coed nodule /
Nasopharyngeal carcinoma*; only one option survives the comparison — **but the cross-reference must
be recorded, because it resolves a tension already written into the corpus.**

`entqb-thr3-139`'s source says: *"⚠️ TENSION RECORDED: the history predicts a POST-CRICOID tumour,
which the option list does not offer — keyed as printed."* **House offers post-cricoid as option C
and still keys pyriform fossa.** The second bank, given the option Grade Gain withheld, chose the
same answer. That converts the tension from an unresolved suspicion into a corroborated key.

## Drafting notes for whoever writes these entries

- **`Q701` is the head of a three-link chain** (`Q701` → `Q702` → `Q703`) and it **folds**, so
  `Q702` and `Q703` — both NEW — must **restate the vignette**, exactly as `entqb-thr3-139` already
  does (*"⚠️ BACK-REFERENCE REPAIRED"*).
- **`Q694`** needs its own image crop (two-panel lateral barium study, `L` marker, book p.174);
  `imgAlt` must give modality and view only.
- **`Q714`'s** target `entep-throat-27` is already a double citation (endpoint reprints it at p.1481
  Q66), so the folded entry carries **three**.
- **`Q705`** has a **third** printing that is not a fold: `entep-mfe4-2` asks the same fact with a
  different menu (Electromyography, Electroglottography, Videofluoroscopy). It stays a separate
  entry; cross-reference only.
- Every `Q69x`/`Q70x` dysphagia entry in this range is **figure-dependent** except `Q701`, `Q703`
  and `Q704`. The transcripts carry the modality-and-view notes; nothing in them answers a question.
