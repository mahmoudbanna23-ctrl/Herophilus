/* op-pupil — "Pupil, EOM, Fundus", Ophthalmology.
   Written 2026-08-16 under START-HERE.md §14 (slide-density revision notes),
   §14.3a (layout) and §14.5 (deferral register), plus
   content\ophtho\theory-plan.md.
   Shape copied from content\peds\theory-drafts\genetics.draft.js and
   content\ent\theory-drafts\ent-nasalobs.draft.js.

   ==========================================================================
   THE DECK, AND THE LINE RANGE THAT IS MINE
   ==========================================================================
   SOLE SOURCE: content\ophtho\lectures\L3,4) Clinical- Ocular examination.txt
     — Dr. Amr Elhady, 59 slides. Cited below as **L3,4**.

   ⚠️ THIS IS A BANKED VISUAL READ, NOT A TEXT EXTRACTION. `pdftotext` returns
   59 characters from the source PDF (one form feed per slide) and nothing
   else. An earlier chat rendered all 59 slides as fifteen 4-up contact sheets
   at 60 dpi and transcribed them. Nothing was re-rendered for this chapter,
   as instructed. The transcriber marked slides 30, 36, 43, 51 and 52
   ⚠️ HIGH YIELD and slides 26, 34 and 43 ⚠️ TABLE; those markers are the
   lecturer's own emphasis and every one of them is carried below as a real
   table or a `must` section.

   ⚠️ THE DECK IS SHARED AND I STAYED INSIDE MY HALF.
     · lines   1–171  (slides 1–27) = **`op-va`'s** — eyelid, lacrimal, orbit,
       conjunctiva, cornea, sclera, iris, lens, anterior-chamber depth and
       contents. NOT written here and NOT counted here.
     · lines 172–403  (slides 28–59) = **MINE** — pupils, IOP, EOM, fundus.
     · lines 404–428  = the transcriber's "NOT COVERED ANYWHERE IN THIS DECK"
       block. Meta, not lecture; counted to neither chapter. It is used below
       to decide which gaps are real before anything was tagged.

   ==========================================================================
   THE BUDGET
   ==========================================================================
   TERM 1 — lecture words in MY line range: `sed -n '172,403p' | wc -w`
            = **1,414**.  (op-va's half is 963; whole file 2,652.)
   TERM 2 — 25 x 12 linked questions = **300**. Never governs, exactly as
            theory-plan.md predicted for all 26 ophthalmology chapters.
   BUDGET = max(1,414, 300), floor 600 = **1,414 words**.

   ⚠️ NOT A DIAGRAM DECK BY THE §14.1 TEST, DESPITE BEING IMAGE-ONLY.
   Words-per-line over my range is **6.1**, far above the <2 threshold that
   forces the question term. That is an artefact worth naming: the deck itself
   is pictures, but the *cache* is a human transcription in which the labels
   of every diagram were written out as prose. So TERM 1 is measuring somebody
   else's careful reading, not a text layer — which is why it is usable here
   and is not usable on the fourteen ophthalmology decks still owed a read.

   PREDICTED OVERRUN, stated up front per §14.1 rather than discovered after:
     · 10 sections x 1 `###`/lead line each                         ~  60 w
     · the slide-43 EOM grid at 6 rows x 3 columns                  ~ 150 w
     · the anisocoria bright/dim grid, 2 x 4                        ~ 120 w
     · the red-reflex colour grid, 4 x 3                            ~ 130 w
     · the tonometry grid, 2 x 4                                    ~ 110 w
     · 5 tagged gap-fills (below), ~55 w each                       ~ 275 w
   The five grids alone are ~510 words and every cell is a fact somebody has
   to write — the `ent-phon` lesson, costed at rows x columns rather than as
   "four tables". Predicted landing was ~1,800–1,900.

   ⚠️ MEASURED OUTCOME — DO NOT TRUST THIS LINE, RE-RUN THE COUNTER. The draft
   header has been wrong thirteen times in this project, and the worst shapes
   were a forecast written in the past tense and a real measurement invalidated
   by a later edit. The number below was taken from disk by script AFTER the
   last body edit (the §14.3a paragraph-splitting pass), and the header is a
   block comment, so writing it cannot move a body word. Verify anyway.

     **10 sections · 2,048 body words · intro 33 words · 8.5 printed pages**
     at the ÷240 estimator · **12 of 12 questions linked** · 0 paragraphs over
     45 words · every section carries a `Src:` line · file parses under `vm`.

   That is **+44.8 % over the 1,414 budget**, and it over-ran my own forecast
   by ~200 words. Reported, not cut. Two reasons, itemised as §14.1 requires:

     · **It is under both real ceilings** — 8.5 pp against the ~13 pp hard
       shape and the ~10 pp operative one; 2,048 against the 2,400-word
       operative ceiling.
     · **The strict 1,414 is not reachable without deleting a protected fact.**
       The next 300 words out would have to come from a grid, and the four
       largest are the anisocoria bright/dim rule (sl.30, HIGH YIELD), the EOM
       action/nerve grid (sl.43, DOUBLE HIGH YIELD), the red-reflex colour
       grid (sl.51–52, HIGH YIELD) and the four motility words — which between
       them carry the keys to **8 of the 12 questions**. Per §14.1, stop at the
       floor and state the bill rather than hit the number by losing an eponym.

   The forecast missed low because I costed ten `###` lines at ~60 words and
   the finished chapter carries **twenty-three** of them, and because the
   §14.3a splitting pass converts one long sentence into two shorter lines
   with their own lead bolds — which raises the whitespace-split word count
   while lowering the printed page count. That is §14.1's words-and-pages
   opposition, seen on a chapter rather than in the abstract.

   ==========================================================================
   ⚠️⚠️ THE IOP DECISION — MADE, AND THE REASON IS A MEASUREMENT, NOT A
   PREFERENCE
   ==========================================================================
   Slides 35–40 (IOP measurement) sit in my line range, but IOP also belongs
   to `op-glauc`, which has its own decks L11/L12. The brief asked for a
   decision and a register row.

   I checked which questions actually test those six slides, and the answer
   settles it: **all three are filed to `op-glauc`, none to `op-pupil`.**

     · `opqb-t1-55` — normal IOP range          → keys 10–21 mmHg   (slide 36)
     · `opqb-t1-46` — digital palpation best for → keys confirming extremely
                       high or low pressures                        (slide 37)
     · `opqb-t1-47` — Schiotz LOW reading means → keys hard eye, high IOP
                                                                    (slide 40)

   DECISION: **the examination technique is written here in full** (pup-5,
   pup-6), because this is the examination chapter and the slides are in my
   range — so those words stay charged to my TERM 1 and nothing is deferred
   out of it. **But `op-glauc` cannot inherit them by reference**: §14.2's hard
   floor is that every question is answerable from ITS OWN chapter's notes, and
   three of `op-glauc`'s five questions turn on these three slides. A register
   row therefore tells `op-glauc` exactly which three facts it must carry
   itself. That is a duplication of three lines, deliberately, against three
   questions going unanswerable.

   What I did NOT write, because it is genuinely glaucoma and not examination:
   what a raised IOP means, diurnal variation, central-corneal-thickness
   correction, gonioscopy, target pressure, and the sources of error in
   applanation. All to `op-glauc`, register row 2.

   ==========================================================================
   §14.5 DEFERRAL REGISTER — rows this chapter OWES
   ==========================================================================
   | Deferred from | Fact | Owed to | Written? |
   |---|---|---|---|
   | `op-pupil` (L3,4 sl.36/37/40) | **The three IOP facts its own questions turn on** — normal range **10–21 mmHg, mean 16** · **digital palpation is a rough estimate, good only for grossly high or low pressures and for comparing the two eyes** · **Schiotz is INVERSE: a LOW scale reading = a hard eye = a HIGH IOP** (the inverse direction is not on the slide and is tagged where it is written). Needed by `opqb-t1-55`, `opqb-t1-46`, `opqb-t1-47`, all filed to `op-glauc` | `op-glauc` | ☐ |
   | `op-pupil` (L3,4 sl.36–40) | **The clinical meaning of the number** — diurnal variation, central corneal thickness correction, gonioscopy, target pressure, applanation sources of error. Deliberately NOT written here; this chapter carries technique only | `op-glauc` | ☐ |
   | `op-pupil` (L3,4 sl.45) | **The corneal light reflex slide in full** — symmetry, the reflex deviating OPPOSITE to the squint, and that the angle can be estimated from it. Written here (pup-8) because it is an alignment-testing slide, but `opqb-t1-43` and `opqb-t2-94` are filed to `op-squint` and turn on it | `op-squint` | ☐ |
   | `op-pupil` (L3,4 sl.43–44) | **The EOM action/nerve-supply grid and the six cardinal positions** — written here in full; named so `op-squint` cross-references rather than re-derives when it writes incomitant deviation | `op-squint` | ☐ |

   ==========================================================================
   ⚠️ ONE FACT ARRIVES FROM `op-va`'s HALF AND ITS WORDS STAY CHARGED THERE
   ==========================================================================
   `opqb-t1-10` ("in which circumstance will the pupil regain a jet-black
   colour" — keys lens removal) is filed to **`op-pupil`**, but the slide that
   answers it is **slide 20, "Lens: Pupil colour"** — black (newborn and
   aphakia) / greyish in old age / leukocoria — which is at line 123, inside
   **`op-va`'s** range.

   This is the declared §14.1 case: a fact arrives by deferral while its words
   stay charged elsewhere. Handling: the pupil-colour triad is restated as
   **three cells inside pup-9's red-reflex grid**, where it belongs
   conceptually anyway (both are "what colour is the pupil, and what does the
   colour mean"). `op-va` keeps slide 20 in full — the cataract stages, the
   bright-versus-dim red reflex of nuclear sclerosis versus IMSC. I am NOT
   counting slide 20's words and `op-va` should not drop it.

   ==========================================================================
   FIVE FACTS SUPPLIED FROM GENERAL KNOWLEDGE AND TAGGED
   ==========================================================================
   Each was checked against the transcriber's own "NOT COVERED" list before
   being tagged, per the "read the slide before declaring a gap" rule.

   1. **Vergence and fusion** (pup-8) — the deck defines ductions as uniocular
      and versions as binocular and stops; the NOT-COVERED block states the
      word "vergence" never appears. `opqb-t1-16` offers all four terms, so
      both missing definitions are supplied and tagged.
   2. **The Schiotz inverse relationship** (pup-6) — slide 40 says only
      "indentation of the cornea by known weight". The direction of the scale
      is what `opqb-t1-47` tests. Supplied and tagged.
   3. **Light–near dissociation** (pup-4) — `opqb-t1-37` turns on it. NOT a
      general-knowledge fill: **`L22) Pupil and Visual pathway` prints it**,
      under Argyll Robertson and Dorsal Midbrain Syndrome. Cited as
      *cited only, not counted* — L22 is `op-neuro`'s deck and none of its
      words are in my TERM 1.
   4. **The Horner sign list** (pup-2) — slide 30 names Horner syndrome and
      gives no signs. Again **not** a gap: L22 prints miosis, dilation lag,
      ptosis, apparent enophthalmos, anhydrosis, heterochromia (congenital).
      Cited only, not counted. The Muller-muscle mechanism of the ptosis IS
      supplied and tagged.
   5. **Cup/disc ratio and the myopic crescent** (pup-10) — the NOT-COVERED
      block is explicit that this deck gives no disc measurement of any kind
      and no C/D figure; slide 58 labels the parts and stops. `opqb-t1-49`
      (asymmetry >0.2) and `opqb-t1-50` (temporal crescent) both need it.
      Supplied and tagged.

   ==========================================================================
   OMISSIONS — deliberate, and on the record
   ==========================================================================
   · **Slide 41 and slide 48** are bare title cards, **slide 35** is a cartoon
     of a figure inflating eyeballs and **slide 59** is "Thank you". No content.
   · **Slide 54's eight labelled parts of the direct ophthalmoscope** (viewing
     window, lens wheel, lens power scale, light adjustment collar, power base
     and handle, mirror, colour adjustment button, aperture adjustment wheel)
     are compressed to the three the method actually uses — aperture wheel,
     focusing/lens wheel, viewing window. The other five are instrument
     nomenclature that no question touches and that changes no answer. This is
     the only place a whole slide was thinned rather than carried.
   · **Slide 42's anatomical diagram** is reduced to the muscle list; the
     trochlea is kept because it explains the superior oblique's action, the
     rest of the orbital anatomy is `op-orbit`'s (its deck L10 is banked at
     3,671 words).
   · **`examiner-patterns.md` does not exist for ophthalmology and was not
     manufactured** — 12 questions cannot tell you what examiners emphasise.
     Weighting below rests on the lecturer's own HIGH YIELD markers
     (tests 2 and 4), not on the question spread.
   ========================================================================== */

var THEORY_DRAFT = {
  'op-pupil': {
    intro: 'Bedside technique, examined as rules rather than skills. Four things recur: which light condition unmasks which pupil, reading the swinging flashlight test, the muscle–nerve–action grid, and what an abnormal red reflex colour means.',
    sections: [

{
  id: 'pup-1', w: 'know',
  h: 'Assessment of the pupil — what is actually looked at',
  body: [
    'Two steps only, in this order:',
    '',
    '- **Size and shape:** observed **at rest, in room light**, before any light is shone.',
    '- **Pupillary reactions:** direct, consensual, and the swinging flashlight test.',
    '',
    '### Size — the vocabulary',
    '- **Isocoria:** both pupils **round and equal in diameter** — the normal state.',
    '- **Anisocoria:** any **difference in size** between the two pupils.',
    '',
    '### Shape',
    '- **Normal:** round.',
    '- **Festooned pupil:** an irregular, scalloped outline from **posterior synechiae in uveitis** — the iris is stuck to the anterior lens capsule at several points, so it dilates only between them.',
    '',
    '*Iris signs themselves — iridodialysis, synechiae, rubeosis — are on slide 18 and belong to `op-va`.*',
    '',
    'Src: L3,4 sl.28–29, 31'
  ].join('\n'),
  qs: []
},

{
  id: 'pup-2', w: 'must',
  h: 'Anisocoria — the light condition tells you which pupil is the abnormal one',
  body: [
    '**The rule (lecturer-flagged HIGH YIELD):** anisocoria **greater than 1 mm** is assessed in **both very bright and very dim lighting**.',
    '',
    '**Why both:** the abnormal pupil is the one that **fails to do its job** — so you unmask it in the light condition that demands that job.',
    '',
    '|Anisocoria worse in|The abnormal pupil is the|It failed to|Defective system|Classic cause|',
    '|---|---|---|---|---|',
    '|**DIM light**|**small** one|**dilate**|**Sympathetic**|**Horner syndrome**|',
    '|**BRIGHT light**|**large** one|**constrict**|**Parasympathetic**|**Third nerve palsy**, or **pupillary trauma**|',
    '',
    '### Why, in one line each',
    '- **Dilator pupillae:** **sympathetic**; its job is darkness. Denervate it and the pupil cannot enlarge, so the gap widens as the room darkens.',
    '- **Sphincter pupillae:** **parasympathetic, CN III**; its job is brightness. Denervate it and the pupil cannot shrink, so the gap widens as the room lightens.',
    '',
    '### Horner syndrome — the associated signs',
    '- **Miosis:** the cardinal sign — unopposed sphincter.',
    '- **Dilation lag:** the denervated pupil dilates **slowly** in darkness; the most specific bedside sign.',
    '- **Mild ptosis:** partial, never complete — **Muller muscle** (superior tarsal) is the sympathetically supplied lid elevator and contributes only 1–2 mm *(mechanism not taken from the course material)*.',
    '- **Apparent enophthalmos · anhydrosis · heterochromia** (the last in congenital cases only).',
    '',
    '*Motility is normal and there is no RAPD in Horner — which is what separates it from a third nerve palsy at the bedside.*',
    '',
    '*The Horner sign list is printed on `L22) Pupil and Visual pathway`, which is `op-neuro`’s deck — cited only, not counted against this chapter.*',
    '',
    'Src: L3,4 sl.30; L22 (cited only)'
  ].join('\n'),
  qs: ['opqb-t1-34', 'opqb-t1-35']
},

{
  id: 'pup-3', w: 'high',
  h: 'Testing the light reactions — the set-up, and direct versus consensual',
  body: [
    '### The method, in order',
    '1. **Dim the room light.**',
    '2. **Ask the patient to fixate a distant object** — this switches off accommodation, so the near reflex cannot contaminate the result.',
    '3. **Shine a bright light directly into each pupil, slightly temporal to the visual axis.**',
    '4. **Perform the direct and consensual tests.**',
    '5. **Perform the swinging flashlight test** for a **RAPD**.',
    '',
    '### The two reactions',
    '- **Direct:** light into one eye, **watch that same pupil** constrict.',
    '- **Consensual:** light into one eye, **watch the OTHER pupil** — it constricts equally.',
    '',
    '### The reflex arc',
    '**The arc:** retina → **optic nerve** → decussation → **both Edinger–Westphal nuclei** → **third cranial nerve** → **ciliary ganglion** → **sphincter pupillae**.',
    '',
    '**The consequence:** the signal crosses to both sides, so **the two pupils are always the same size** whichever eye the light is in. The swinging flashlight test is built on this.',
    '',
    'Src: L3,4 sl.32–33'
  ].join('\n'),
  qs: []
},

{
  id: 'pup-4', w: 'must',
  h: 'The swinging flashlight test, RAPD, and light–near dissociation',
  body: [
    '**What it detects:** a **relative afferent pupillary defect (RAPD)**, the **Marcus Gunn pupil** — asymmetric disease of the **optic nerve** or extensive retina.',
    '',
    '**How to read it — watch the pupil the light is currently ON:**',
    '',
    '|Light swung onto|Normal|RAPD present in that eye|',
    '|---|---|---|',
    '|the **good** eye|**constricts**|constricts|',
    '|the **bad** eye|**constricts**|**DILATES** — both pupils together|',
    '',
    '### Why it dilates rather than staying still',
    'Pupil size at any instant reflects the **total light signal the brain is receiving**, not which eye it came from. Swing to the damaged nerve and that total **falls**, so both pupils **release** from the constriction the good eye had driven.',
    '',
    '- **The side of the lesion:** the eye the light is on **when both pupils dilate**.',
    '- **It is RELATIVE:** the test compares the two eyes, so **bilateral symmetrical** disease gives no RAPD.',
    '- **A media opacity never causes one** — a dense cataract dims the image but the nerve still transmits the light.',
    '',
    '### Light–near dissociation',
    '**The near reflex survives an afferent light defect** — it is driven **cortically**, by the intention to look at something close, not by light on the retina.',
    '',
    '- **So in an RAPD:** the **near reflex remains normal** while the direct and consensual light reflexes on that side are impaired.',
    '',
    '*The named entities are on `L22) Pupil and Visual pathway` — **Argyll Robertson** (pretectal, small pupils, neurosyphilis; also DM, alcoholism, encephalitis) and **Dorsal Midbrain Syndrome** (pineal tumour, stroke, MS; with upward gaze paralysis, convergence-retraction nystagmus, lid retraction). Cited only, not counted.*',
    '',
    'Src: L3,4 sl.32, 34; L22 (cited only)'
  ].join('\n'),
  qs: ['opqb-t1-36', 'opqb-t1-37', 'opqb-t1-42']
},

{
  id: 'pup-5', w: 'high',
  h: 'Intraocular pressure — the number, and estimating it with two fingers',
  body: [
    '**Normal range: 10–21 mmHg, mean 16 mmHg.** Lecturer-flagged HIGH YIELD, and it is the one number in this chapter that is asked as a bare recall item.',
    '',
    '### The two families of method',
    '- **Digitally:** a **rough estimation**, and a **comparison between the two eyes**.',
    '- **Tonometry:** **applanation** or **indentation** — see pup-6.',
    '',
    '### Digital tonometry — the technique',
    '1. **Ask the patient to look down.**',
    '2. **Place both index fingers on the upper lid, above the level of the tarsus** — never on the tarsal plate itself, which is rigid and transmits nothing.',
    '3. **Rest the middle, ring and little fingers** on the forehead (one hand) and the temple (the other), to steady them.',
    '4. **Press alternately** and **test the tension as you would test for fluctuation** — one finger indents while the other feels the displacement.',
    '',
    '- **What it is good for:** confirming a **grossly** high or low pressure, and detecting **asymmetry** between the eyes. It cannot give a number *(not taken from the course material)*.',
    '',
    '*Full IOP interpretation — diurnal variation, corneal thickness, gonioscopy, target pressure — is `op-glauc`’s.*',
    '',
    'Src: L3,4 sl.36–37'
  ].join('\n'),
  qs: []
},

{
  id: 'pup-6', w: 'high',
  h: 'Tonometry — applanation versus indentation',
  body: [
    '|Feature|**Applanation**|**Indentation**|',
    '|---|---|---|',
    '|**Named instrument**|**Goldmann** applanation tonometer (slit-lamp mounted); the hand-held version is the Perkins|**Schiotz** tonometer|',
    '|**Principle**|**flattens** a fixed area of cornea and measures the force needed|**indents** the cornea with a **known weight** and measures how far the plunger sinks|',
    '|**Read from**|the **blue-light mires** seen through the **bi-prism**, aligned by the adjustment knob|a **scale**, deflected by the plunger|',
    '|**Parts named on the slide**|bi-prism, mobile feeder arm, control weight and housing, adjustment knob|plunger, weight, scale|',
    '',
    '### ⚠️ The Schiotz scale runs backwards',
    '**A LOW scale reading means a HARD eye and a HIGH IOP.** The harder the globe, the **less** the plunger sinks, so the **smaller** the deflection.',
    '',
    '- **The trap:** reading the scale as though it were the pressure inverts every answer *(the direction of the scale is not stated on the slide — not taken from the course material)*.',
    '',
    '- **Both need topical anaesthetic**; both touch the cornea, so neither is done through a suspected perforation *(not taken from the course material)*.',
    '',
    'Src: L3,4 sl.38–40'
  ].join('\n'),
  qs: []
},

{
  id: 'pup-7', w: 'must',
  h: 'The six extraocular muscles — action and nerve supply',
  body: [
    '- **Four recti:** superior, inferior, medial, lateral.',
    '- **Two obliques:** superior, inferior.',
    '- **The trochlea:** the superior oblique runs forward to it at the superomedial rim, then turns sharply back to the upper posterior globe — so it pulls from **in front and medially**.',
    '',
    '**The grid the lecturer double-flagged HIGH YIELD:**',
    '',
    '|Muscle|Nerve|Action|',
    '|---|---|---|',
    '|**Medial rectus**|**III**|**adduction**|',
    '|**Lateral rectus**|**VI**|**abduction**|',
    '|**Superior rectus**|**III**|**elevation** — mainly **in ABduction**|',
    '|**Inferior rectus**|**III**|**depression** — mainly **in ABduction**|',
    '|**Superior oblique**|**IV**|**depression** — mainly **in ADduction**|',
    '|**Inferior oblique**|**III**|**elevation** — mainly **in ADduction**|',
    '',
    '### Two rules that compress the whole grid',
    '- **Nerve supply — LR₆ SO₄, everything else III.** The third nerve supplies all four remaining muscles, and separately the levator and the pupil.',
    '- **Action — recti act vertically in ABduction, obliques in ADduction.** Get that pairing round the right way and every cardinal-position question follows.',
    '',
    '*Why: a muscle acts on the axis it most nearly parallels, and turning the eye in or out swings that axis into or out of line with each pull (mechanism not taken from the course material).*',
    '',
    'Src: L3,4 sl.42–43'
  ].join('\n'),
  qs: ['opqb-t1-21', 'opqb-t1-24']
},

{
  id: 'pup-8', w: 'must',
  h: 'Testing alignment and movement — light reflex, ductions, versions',
  body: [
    '### 1. Alignment in the primary position — the corneal light reflex',
    '- **Normal:** the light reflects **symmetrically** on both corneas, in the same position relative to pupil and visual axis.',
    '- **In a deviating eye:** the reflection is **eccentric, in the direction OPPOSITE to the deviation** — an eye turned in throws its reflex out.',
    '- **The amount of deviation can be estimated** from how far off-centre the reflex sits.',
    '',
    '### 2. Ductions — one eye at a time',
    '- **Uniocular** movement, **the other eye occluded**.',
    '- Each muscle is tested **in its primary field of action**.',
    '- **Detects:** limitation in one muscle’s direction.',
    '',
    '### 3. Versions — both eyes open',
    '- **Binocular** movement, tested in **all 8 directions of gaze**.',
    '- **Detects:** **conjugate gaze palsy**, and **overaction or underaction** of a muscle.',
    '',
    '### The six cardinal positions, and the muscle each tests',
    '',
    '|Direction|Muscle tested|',
    '|---|---|',
    '|**Out**|**Lateral rectus**|',
    '|**In**|**Medial rectus**|',
    '|**Up & out**|**Superior rectus**|',
    '|**Down & out**|**Inferior rectus**|',
    '|**Up & in**|**Inferior oblique**|',
    '|**Down & in**|**Superior oblique**|',
    '',
    '### The four motility words, told apart',
    '',
    '|Term|Eyes|Direction|Example|',
    '|---|---|---|---|',
    '|**Duction**|**one**|any|abduction, adduction|',
    '|**Version**|both|**same** (conjugate)|dextroversion — both eyes right|',
    '|**Vergence**|both|**opposite** (disjugate)|convergence for near|',
    '|**Fusion**|both|**not a movement** — a **sensory** act|merging the two retinal images into one|',
    '',
    '*The deck defines only duction (uniocular) and version (binocular); **vergence** and **fusion** are supplied — not taken from the course material.*',
    '',
    'Src: L3,4 sl.44–47'
  ].join('\n'),
  qs: ['opqb-t1-16', 'opqb-t1-21']
},

{
  id: 'pup-9', w: 'must',
  h: 'The red reflex, and what each abnormal colour means',
  body: [
    '**Normal red reflex:** light reflected off the fundus, seen through the ophthalmoscope, **uninterrupted by shadows**. An intact reflex is evidence that the **cornea, anterior chamber, lens and vitreous are all clear** and are not the cause of reduced vision.',
    '',
    '**The colour grid — lecturer-flagged HIGH YIELD across two slides:**',
    '',
    '|Reflex|Meaning|Causes|',
    '|---|---|---|',
    '|**Normal red**|clear media|—|',
    '|**Black shadows within a red reflex**|**opacity in the media**, silhouetted|**corneal scar · cataract · vitreous haemorrhage**; **best seen dilated**|',
    '|**ABSENT reflex**|media totally opaque|**mature cataract** · **dense vitreous haemorrhage** (a **black reflex**)|',
    '|**GREY reflex**|—|**Retinal detachment**|',
    '|**YELLOW / WHITE reflex**|**leukocoria**|**Retinoblastoma** · **pus in the vitreous (endophthalmitis)**|',
    '',
    '### The one that must never be missed',
    '**A white or yellow reflex in a child is retinoblastoma until proved otherwise.** It is the reason the red reflex is checked in every paediatric eye examination.',
    '',
    '### Pupil colour, the same question asked without an ophthalmoscope',
    '- **Jet black:** clear media — the **newborn**, and the **aphakic** eye after the lens has been removed. A pupil *regains* its black when the opacity is taken out.',
    '- **Greyish:** the ageing lens — nuclear sclerosis or immature senile cataract.',
    '- **White (leukocoria):** mature cataract.',
    '',
    '*Full lens and cataract detail is slide 20 and belongs to `op-va`.*',
    '',
    'Src: L3,4 sl.49–52; sl.20 (`op-va`’s, cited only)'
  ].join('\n'),
  qs: ['opqb-t1-10', 'opqb-t1-48']
},

{
  id: 'pup-10', w: 'high',
  h: 'Direct ophthalmoscopy and reading the fundus',
  body: [
    '**Pharmacological dilatation greatly enlarges the field of retina visible** — an undilated pupil gives a narrow cone, a dilated one a wide one.',
    '',
    '### The method, numbered as the deck numbers it',
    '1. **Patient seated, room lights dimmed;** ask them to **fix on a point on the wall straight ahead** and not move the eyes.',
    '2. **Aperture wheel to the large round white light; focusing wheel to zero.**',
    '3. **Start about 1 foot away.** **Right eye to right eye, ophthalmoscope in the right hand.** Look straight down the visual axis and you will see the **red reflex**.',
    '4. **Rest your free hand on the patient’s forehead** to steady yourself.',
    '5. **Approach slowly at about 15° temporal** to the visual axis, keeping the pupil in view.',
    '6. **Dial to focus.** When a vessel appears, **follow it to the optic disc, which lies NASAL to the centre of the retina** — the branching of the vessels points like arrows towards the disc.',
    '7. **Examine the optic disc, the retinal vessels, and the macula.**',
    '8. **Repeat on the left — left hand, left eye.**',
    '',
    '### The fundus landmarks',
    '**Optic disc · optic cup · retinal artery · retinal vein · macula · fovea.**',
    '',
    '### Two disc signs the deck labels but does not define',
    '- **Cup/disc ratio:** normal roughly **0.3–0.5**; **above 0.6 is suspicious**.',
    '- **Inter-eye ASYMMETRY above 0.2 is suspicious for glaucoma** whatever the absolute figures — the two discs of one person develop together and should match. So **0.6 against 0.2** is abnormal on asymmetry alone *(not taken from the course material)*.',
    '- **Temporal myopic crescent:** a pale, sharply bordered arc at the **temporal** disc margin — bare **sclera**, exposed as axial elongation drags the RPE and choroid off the disc.',
    '- **What it marks:** **myopia**, and an eye at raised risk of retinal tears and detachment *(not taken from the course material)*.',
    '',
    'Src: L3,4 sl.53–58'
  ].join('\n'),
  qs: ['opqb-t1-49', 'opqb-t1-50']
}

    ]
  }
};
