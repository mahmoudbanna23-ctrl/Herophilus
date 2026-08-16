/* op-glauc — "Glaucoma", Ophthalmology.
   Written 2026-08-16 under START-HERE.md §14 (slide-density revision notes),
   §14.1 (budget), §14.2 (two-sided floor), §14.3a (layout) and §14.5
   (deferral register), plus content\ophtho\theory-plan.md.
   Shape copied from content\ophtho\theory-drafts\op-pupil.draft.js and
   content\ent\theory-drafts\ent-nasalobs.draft.js.

   ==========================================================================
   THE DECKS
   ==========================================================================
   BOTH SOURCES ARE TEXT-SUFFICIENT. Nothing was rendered for this chapter.
     - content\ophtho\lectures\L11) Glaucoma Diag, POAG.txt        cited L11
     - content\ophtho\lectures\L12) Glaucoma 2 Cong, PACG, 2ry.txt cited L12
   Same lecturer for both, Prof. Nader Bayoumi. L12 opens by restating L11's
   definition slide verbatim, so the two are one course of teaching split over
   two sittings — merged into one chapter per the project rule.

   Neither cached file carries slide numbers, so every Src line cites LINE
   RANGES in the cache, checkable with sed -n.

   ==========================================================================
   CACHE COMPLETENESS — CHECKED, CLEAN POSITIVE
   ==========================================================================
   The paediatrics finding was that a cache is not necessarily the whole deck.
   Tested here rather than assumed: both source PDFs were re-extracted with
   pdftotext -layout into the scratchpad and the token sets compared.

     - fresh extraction: 754 + 1,020 = 1,774 words
     - cached files:     760 + 1,028 = 1,788 words
     - set difference IN PDF NOT IN CACHE: EMPTY
     - set difference IN CACHE NOT IN PDF: only the two SOURCE: header lines

   The caches are complete. Do not re-extract these two decks.

   ==========================================================================
   THE BUDGET — and one correction to theory-plan.md
   ==========================================================================
   TERM 1 - lecture words. §14.1 measures wc -w on the CACHED files, which
            gives 1,788 including the two SOURCE headers, so the honest deck
            figure is 1,774.
   TERM 2 - 25 x 5 linked questions = 125. Never governs, exactly as
            theory-plan.md predicted for all 26 ophthalmology chapters.
   BUDGET = max(1,774 , 125), floor 600 = 1,774 words.

   ⚠️ THE BRIEF AND theory-plan.md BOTH SAY 2,086, AND THAT NUMBER IS NOT
   REPRODUCIBLE. Measured two ways today — wc -w on the cache, and a fresh
   pdftotext -layout of both source PDFs — the answer is 1,788 and 1,774.
   The plan's own per-deck density columns imply a smaller figure too
   (21 pp x 41 w/pp + 50 pp x 23 w/pp = 1,011 + 1,150 = 2,011), so the 2,086
   appears to come from a page-summed count rather than a whole-file one.
   Reported, not silently inherited; the stricter number is the target.

   ⚠️ NOT A DIAGRAM DECK. Words per line is 4.7 for L11 and 2.0 for L12,
   above the <2 threshold that forces the question term. L12 sits on the line
   because roughly a third of it is single-image "Clinical Picture" slides
   carrying one caption each (Photophobia, Haab's Stria, Corneal Oedema,
   Increased Axial Length). Those captions ARE the teaching and they extract,
   so the text layer is honest here.

   PREDICTED OVERRUN, stated up front per §14.1 and costed at rows x columns
   and framework-slide by framework-slide:
     - 17 sections, ~34 ### sub-heading lines                     ~ 140 w
     - the open-vs-closed discrimination grid, 9 rows x 3         ~ 150 w
     - secondary OPEN angle, 4 entities x 2 columns               ~ 120 w
     - secondary NARROW angle, 4 entities x 3 columns             ~ 130 w
     - the angle-closure continuum, 4 stages x 3                  ~ 130 w
     - congenital differential, 6 look-alikes x 2                 ~ 120 w
     - POAG predisposing factors, 5 x 2                           ~ 100 w
     - visual-field ladder, 6 defects x 2                         ~ 110 w
     - REGISTER ROW 1, the three IOP facts plus the technique     ~ 240 w
     - REGISTER ROW 2, the clinical meaning of the number         ~ 200 w
   The two register rows are ~440 words that come out of NEITHER of my decks,
   and are the whole of the expected overrun. Predicted landing ~2,400-2,500.

   ⚠️⚠️ THE FIRST DRAFT MEASURED 3,292 WORDS / 13.7 pp AND WAS COMPRESSED
   TWICE, and the forecast that preceded it said 2,383 — a forecast written
   in the past tense, which is exactly the header failure this brief warns
   about. NOTHING CAUGHT IT EXCEPT RUNNING THE COUNTER. The structure, the
   links and the citations were all sound; only the number was fiction, and
   it was 909 words out.

   What went out across the two compression passes: connective prose, three
   memory-aid blocks carrying no fact ("two ways to hold the four", "the
   pattern", "the one number to hold"), a four-box primary/secondary grid
   that duplicated glc-10 and glc-15 entry for entry, a duplicated
   myopia/hyperopia discriminator line, one duplicated statement of the
   deck's treatment aim (kept once, in glc-5), and one line of bank
   meta-commentary that §14.3 bans anyway. NO DECK FACT AND NO QUESTION KEY
   WAS REMOVED — the coverage floor is identical across all three versions.

   ⚠️ MEASURED OUTCOME — DO NOT TRUST THIS PARAGRAPH, RE-RUN THE COUNTER.
   The numbers below were taken from disk by script AFTER the final body
   edit, as the genuinely last action; this header is a block comment, so
   writing it cannot move a body word. Verify anyway — where the header and
   the counter disagree, the file wins and the header gets rewritten. The
   counter used is <scratch>\count-glauc.js.

     17 sections · 2,600 body words · intro 46 words · 10.8 printed pages at
     the ÷240 estimator · 5 of 5 questions linked, 0 unlinked, no strays ·
     17 distinct section ids, 0 collisions · 0 paragraphs over 45 words ·
     0 lead bolds without an mdLead anchor · every section carries a Src
     line · 1 flow, 7 steps · file parses under vm.

   That is +46.6 % over the 1,774 budget. Reported, not cut further, and the
   bill is itemised as §14.1 requires:

     - The two register rows are ~440 words of content belonging to NEITHER
       of my decks. Net of them the chapter is ~2,160, i.e. +21.8 % — the
       band in which every overrunning ENT chapter was accepted
       (+17.3 %, +28.8 %, +39.1 %).
     - 10.8 pp is well inside the ~13 pp hard shape and 0.8 of a page over
       the ~10 pp operative one. §14.1 rules that band on PAGES MEASURED,
       never on the estimator, and the estimator's own spread is 238-319
       w/pp — this chapter is table-dense, so it may print shorter than 10.8.
       OFFERED FOR A RENDER, not defended on the estimate.
     - The strict 1,774 is not reachable without deleting a protected fact.
       The next 250 words out would have to come from a grid, and the five
       largest are the open-versus-closed discrimination the chapter exists
       to teach, the two secondary-glaucoma cause tables, the visual-field
       ladder and the congenital differential. Between them they carry every
       question key and most of what the two decks state.
     - If the hub rules that it must come down, the cheapest honest cut is
       the whole of glc-5 (253 w) — but that IS register row 2, so cutting
       it un-discharges a row rather than compressing a chapter.

   ==========================================================================
   ⚠️⚠️ THE TWO REGISTER ROWS OWED TO THIS CHAPTER — BOTH DISCHARGED
   ==========================================================================
   §14.5 carries five open ophthalmology rows. Two are addressed here, both
   deferred from op-pupil, which wrote the IOP examination TECHNIQUE and
   deliberately left the clinical meaning behind.

   ROW 1 — "the three IOP facts its own questions turn on", L3,4 sl.36/37/40.
     VERIFIED AGAINST THE NAMED DECK, not inherited. sed -n '222,261p' on
     content\ophtho\lectures\L3,4) Clinical- Ocular examination.txt returns
     slides 36-40, and the row is EXACT on all three counts:
       - slide 36 prints "Normal range 10-21 mmHg (mean = 16 mmHg)" and is
         marked HIGH YIELD by the transcriber.
       - slide 36 prints "Digitally - Rough estimation - Comparison between
         both eyes"; slide 37 prints the technique in full.
       - slide 40 prints "Indentation tonometry (Schiotz) / Indentation of
         the cornea by known weight" and NOTHING about the direction of the
         scale, exactly as the row warns.
     DISCHARGED IN glc-4, all three as their own lines, the inverse direction
     tagged. Not inherited by reference: three of five questions turn on
     them, so §14.2's floor requires them here. A deliberate duplication.

   ROW 2 — "the clinical MEANING of the number", L3,4 sl.36-40. Diurnal
     variation, central corneal thickness correction, gonioscopy, target
     pressure, applanation sources of error.
     DISCHARGED IN glc-5, one sub-heading each. ⚠️ ROW PARTLY MIS-STATED,
     reported with evidence rather than re-attributed: GONIOSCOPY IS NOT
     OWED BY op-pupil AT ALL — it is not on L3,4, and it is printed on BOTH
     of my own decks, defined identically (L11 lines 84-95, L12 lines 47-55).
     So four of the row's five items are genuine deferrals needing general
     knowledge; the fifth is sourced material this chapter already held.
     Greped before saying so: "gonioscop" hits L11 and L12 and no other file
     in the ophthalmology cache.

   ==========================================================================
   ⚠️ A THIRD INHERITANCE THE REGISTER DID NOT NAME — AND IT IS SOURCED
   ==========================================================================
   opqb-t1-33 turns on a penlight test showing ">2/3 nasal iris shadow".
   Neither of my decks prints it. Before tagging it as general knowledge I
   greped the cache — the standing "read the slide before declaring a gap"
   rule — and found it printed VERBATIM on L3,4 slide 24, which is inside
   op-va's line range, not op-pupil's:

     "Shine a light from the temporal side of the head across the front of
      the eye parallel to the plane of the iris. Look at the nasal aspect of
      the iris. If two-thirds or more of the nasal iris is in shadow, the
      chamber is probably shallow and the angle narrow."

   Slide 26 then gives the shallow-versus-deep anterior chamber table, whose
   shallow column opens with hypermetropia and angle closure glaucoma. So the
   question's whole stem is sourced and no tag was needed. Written into
   glc-12 as CITED ONLY, NOT COUNTED — the words stay charged to op-va, which
   still owns slides 24-26 in full. A register row is opened below so op-va
   does not later believe the slides were spent.

   ==========================================================================
   §14.5 DEFERRAL REGISTER — rows this chapter OWES and rows it DISCHARGES
   ==========================================================================
   | Deferred from | Fact | Owed to | Written? |
   |---|---|---|---|
   | `op-glauc` (L11 lines 125-144) | **Cup/disc ratio as a measurement** — the normal figure, the >0.2 inter-eye asymmetry rule and the myopic crescent. L11 gives only "enlargement of cup/disc ratio > 0.3" as a glaucoma threshold; the measurement itself is already in `op-pupil` (pup-10) and is cross-referenced here rather than re-derived | `op-pupil` | ✅ already written |
   | `op-glauc` (L12 lines 278-304) | **Rubeosis iridis and the retinal ischaemia that drives neovascular glaucoma** — L12 gives the angle mechanism only (membrane over the trabeculum, contraction, peripheral iris pulled over). The retinal cause is `L19.2) Retinal Vascular Disorders` | `op-ret` | ☐ |
   | `op-glauc` (L12 lines 317-325) | **Aniridia and Sturge-Weber as syndromes** — named here only as the two examples of glaucoma associated with other congenital anomalies. Their systemic features belong with the phakomatoses | `op-systemic` | ☐ |
   | `op-pupil` (L3,4 sl.36/37/40) → **DISCHARGED HERE** | The three IOP facts — 10-21 mmHg mean 16 · digital palpation is a rough estimate for gross departures and inter-eye comparison · the Schiotz scale is INVERSE | `op-glauc` | ✅ **written 2026-08-16 — glc-4** |
   | `op-pupil` (L3,4 sl.36-40) → **DISCHARGED HERE** | The clinical meaning of the number — diurnal variation, central corneal thickness, gonioscopy, target pressure, applanation error | `op-glauc` | ✅ **written 2026-08-16 — glc-5**, gonioscopy item reported mis-stated |
   | `op-va` → **owed BY it, newly opened** (L3,4 sl.24-26) | **⚠️ REVERSE DIRECTION — `op-va` must still write slides 24-26 IN FULL**: the penlight assessment of anterior chamber depth and the shallow-versus-deep causes table (hypermetropia, angle closure glaucoma, intumescent cataract, perforated corneal ulcer, surgical wound leak / high myopia, aphakia, buphthalmos). `op-glauc` restated only the two-thirds-shadow rule and the angle-closure rows into glc-12 and **did not charge slide 24-26's words to itself**, so the slides are still unspent | `op-va` | ☐ |

   ==========================================================================
   FACTS SUPPLIED FROM GENERAL KNOWLEDGE AND TAGGED — nine, all greped first
   ==========================================================================
   Every one was checked across all 27 files in content\ophtho\lectures\
   before being tagged, per the rule that has paid thirteen times.

   1. glc-4  The Schiotz scale runs INVERSE. Slide 40 prints only
             "indentation of the cornea by known weight"; the direction is
             absent from the whole cache. op-pupil tagged the same fact.
   2. glc-4  Digital palpation detects only GROSS departures. The deck prints
             "rough estimation" and "comparison between both eyes"; the
             restriction to gross departures is the inference.
   3. glc-5  Diurnal variation. "diurnal" returns ZERO across all 27 files.
   4. glc-5  Central corneal thickness correction. "corneal thickness"
             returns zero; "pachymet" hits only L15,16 Cornea, and there only
             as refractive-surgery screening, never as an IOP correction.
   5. glc-5  Target pressure. "target pressure" returns zero. The deck's own
             aim slide (L11 lines 204-205) is what it operationalises.
   6. glc-5  Applanation sources of error. Not printed anywhere.
   7. glc-11 Why a MID-dilated pupil is worse than a fully dilated one, and
             that a topical mydriatic does what the dark room does. The deck
             asserts mid-dilation and names anticholinergics and darkness,
             and gives no mechanism and no drop.
   8. glc-13 Why bright illumination and sleep abort a subacute attack. The
             deck prints both as resolving factors with no mechanism.
   9. glc-17 The six differential-diagnosis discriminators, Haab's stria as
             breaks in Descemet's membrane, and why an opaque cornea rules
             out goniotomy. L12 prints the DDx as a bare list of six names.
   Plus two one-clause tags: post-iridotomy dilation safety (glc-12) and
   prophylactic iridotomy to the fellow eye (glc-14), both corollaries of
   treatments the deck does print.

   NOT TAGGED, because greping found them printed — five near misses:
     - The penlight two-thirds-shadow test — L3,4 sl.24, verbatim.
     - Lens thickening as the age mechanism of angle closure — L7,8 line 347,
       verbatim: "(especially later in life as the lens becomes thicker)".
     - Coloured haloes as corneal oedema from an abrupt IOP rise — L37 lines
       355-360, in full.
     - Myopia's association with POAG — L11 line 124 AND L7,8 lines 250-251.
     - Buphthalmos as the name for the enlarged globe — L12 never uses the
       word, but L3,4 sl.26 and L33,34 lines 134/151/173 print it.
   Both spellings of the deck's Schiotz and the bank's Schiötz are written
   into glc-4, so a search from either side finds it.

   ==========================================================================
   OMISSIONS — deliberate, and on the record
   ==========================================================================
   - L11's opening and closing WRAP-UP flowcharts (lines 13-44, 218-241) are
     the same diagram twice and are a contents page for the deck. Their
     content is carried in the body; the diagram is not redrawn.
   - L11 lines 45-46, 96, 109, 125-129, 158, 174-179, 194-199 and L12 lines
     56-71, 82-87, 103-108, 305-316 are section title cards and the "wrap-up"
     question list. No content.
   - L12's fourteen single-image "Clinical Picture" and "Pathogenesis" slides
     (lines 338-342, 358, 382-399, 416-451, 482-487) are photographs whose
     captions are already the sign lists in glc-16 and glc-17. The captions
     are carried; the photographs are not described.
   - The full applanation-versus-indentation INSTRUMENT comparison — bi-prism,
     mires, feeder arm, plunger, weight, scale — is written in op-pupil pup-6
     and is cross-referenced, not repeated. Only the three examined facts are
     duplicated, deliberately, per register row 1.
   - No absolute-glaucoma treatment is given because the deck gives none; it
     prints "blind painful eye" and stops. No question touches it.
   - examiner-patterns.md does not exist for ophthalmology and was NOT
     manufactured. Five questions cannot tell you what examiners emphasise.
     Weighting rests on the lecturer's own structure and on clinical
     judgement (§14.2 tests 2 and 3), not on the question spread.
   ========================================================================== */

var THEORY_DRAFT = {
  'op-glauc': {
    intro: 'Five questions, and three are bare recall about the pressure itself — the range, what a finger can tell you, which way the Schiötz scale runs. The other two are one story: the crowded hyperopic eye, and the drop that must never be instilled into it.',
    sections: [

{
  id: 'glc-1', w: 'must',
  h: 'Definition — the triad, and the two exceptions that break it',
  body: [
    '**The triad both decks open on:** elevated **intraocular pressure (IOP)** · **optic nerve affection (cupping)** · **visual field defects**.',
    '',
    '**The definition that supersedes it:** glaucoma is **a specific type of optic neuropathy in which IOP is a significant risk factor**.',
    '',
    '### The lecturer’s own gloss',
    '- **Optic neuropathy —** optic nerve disease.',
    '- **Specific type —** with special characteristics.',
    '- **Risk factor, not definition —** pressure is what you treat, not what names the disease.',
    '',
    '### The two exceptions',
    '',
    '|Entity|Optic nerve|IOP|',
    '|---|---|---|',
    '|**Normal tension glaucoma**|**neuropathy present**|**normal**|',
    '|**Ocular hypertension**|**normal**|**elevated**|',
    '',
    '*So glaucoma is diagnosed on pressure, disc and field together — never on the pressure alone.*',
    '',
    'Src: L11 lines 47–71; L12 lines 13–23'
  ].join('\n'),
  qs: []
},

{
  id: 'glc-2', w: 'must',
  h: 'Classification — two axes, and the open-versus-closed spine',
  body: [
    '### Every glaucoma has a value on each axis',
    '- **Aetiological —** congenital / developmental · acquired: **primary** (no obvious cause) or **secondary** (a cause is seen).',
    '- **Gonioscopic —** **open** angle · **narrow / closed** angle.',
    '',
    '**Gonioscopy —** visualization of the angle of the anterior chamber.',
    '',
    '- **Open angle:** the **trabecular meshwork** is **visibly exposed** to the aqueous humour.',
    '- **Closed angle:** the meshwork is **not visibly exposed**.',
    '',
    '### Open versus closed — the chapter’s spine',
    '',
    '|Axis|**Primary OPEN angle**|**Acute ANGLE CLOSURE**|',
    '|---|---|---|',
    '|**Gonioscopy**|meshwork **exposed**|meshwork **not exposed**|',
    '|**Block**|**inside** the meshwork|**iris over** the meshwork|',
    '|**Onset**|years, insidious|**hours**|',
    '|**Symptoms**|**usually none**|pain ++++, haloes, vomiting|',
    '|**Eye**|white, quiet|red, ciliary injection|',
    '|**Cornea / pupil**|clear / normal|**oedematous / mid-dilated oval fixed**|',
    '|**Chamber**|normal depth|**shallow**, iris bombé|',
    '|**Refraction at risk**|**myopia**|**hyperopia**|',
    '|**Definitive surgery**|**trabeculectomy**|**iridotomy**|',
    '',
    'Src: L11 lines 72–95; L12 lines 24–55'
  ].join('\n'),
  qs: []
},

{
  id: 'glc-3', w: 'high',
  h: 'Aqueous humour — made, circulated, drained',
  body: [
    '**IOP elevation is a mismatch —** between aqueous humour **production** and aqueous humour **drainage**.',
    '',
    '### The route, in the deck’s three steps',
    '- **Production:** the **ciliary processes**, around the **lens equator**.',
    '- **Circulation:** posterior chamber → **pupil** → anterior chamber → **angle** of the anterior chamber.',
    '- **Drainage:** **trabecular meshwork** → **Schlemm’s canal** → **collector channels** → systemic circulation.',
    '',
    '- **Every drug follows from it —** each either cuts production or improves drainage. There is no third option.',
    '',
    '*`L1,2) Ocular Anatomy` splits outflow **trabecular (conventional) 90 %** / **uveoscleral (unconventional) 10 %** — `op-intro`’s deck, cited only.*',
    '',
    'Src: L11 lines 96–108; L12 lines 88–102; L1,2 (cited only)'
  ].join('\n'),
  qs: []
},

{
  id: 'glc-4', w: 'must',
  h: 'Measuring the pressure — the number, the finger, the two tonometers',
  body: [
    '**Normal range: 10–21 mmHg, mean 16 mmHg.** Lecturer-flagged HIGH YIELD.',
    '',
    '### The two families of method',
    '- **Digitally —** a **rough estimation**, and a **comparison between both eyes**.',
    '- **Tonometry —** **applanation** or **indentation**.',
    '',
    '### Digital palpation — the technique',
    '- **Position:** the patient **looks down**.',
    '- **Hands:** both index fingers on the upper lid **above the level of the tarsus**; the other fingers rest on forehead and temple.',
    '- **Action:** press **alternately**, **testing the tension as in fluctuation**.',
    '',
    '- **Good for:** a **grossly** high or low pressure, and **asymmetry** between the eyes *(the restriction to gross departures is not taken from the course material)*.',
    '- **Cannot do:** give a number, or catch the 24–30 mmHg at which untreated POAG destroys a field.',
    '',
    '### The two tonometers',
    '- **Applanation —** **Goldmann**. **Flattens** a fixed corneal area and measures the force needed.',
    '- **Indentation —** **Schiötz**, spelled *Schiotz* on the slide. **Indents** the cornea with a **known weight**.',
    '',
    '### ⚠️ The Schiötz scale runs backwards',
    '- **The rule —** a **LOW** scale reading means a **HARD** eye and a **HIGH IOP**.',
    '- **Why:** a hard globe resists the plunger, so it sinks **less**. The dial reads depth, not pressure; a conversion table converts it.',
    '- **The trap:** reading the dial as mmHg inverts every answer *(the direction of the scale is not stated on the slide — not taken from the course material)*.',
    '',
    '*Full instrument comparison is in `op-pupil`.*',
    '',
    'Src: L3,4 sl.36–40 (`op-pupil`’s deck — cited only, not counted; carried here because three questions turn on it)'
  ].join('\n'),
  qs: ['opqb-t1-46', 'opqb-t1-47', 'opqb-t1-55']
},

{
  id: 'glc-5', w: 'high',
  h: 'Reading the number — what a pressure does and does not mean',
  body: [
    '**21 is a statistical cut-off —** about two standard deviations above the population mean, **not a threshold at which damage begins** *(not taken from the course material)*.',
    '',
    '### Diurnal variation',
    '- **The number moves —** by roughly **3–5 mmHg**, highest in the **early morning** *(not taken from the course material)*.',
    '- **So one afternoon reading can miss the peak** — repeat across a day when the diagnosis is uncertain.',
    '- **It fits the deck:** L11 lists **early-morning headache** as a POAG symptom.',
    '',
    '### Central corneal thickness',
    '- **Applanation measures the cornea too:** a **thick** cornea **over-reads**, a **thin** cornea **under-reads** *(not taken from the course material)*.',
    '- **A thin cornea is itself a risk factor** for progression, so that patient is doubly under-estimated.',
    '',
    '### The other sources of error',
    '- **Applanation:** corneal oedema or scarring, high astigmatism, wrong fluorescein volume, lid squeezing, breath-holding.',
    '- **Indentation:** depends on **ocular rigidity**, so Schiötz **under-reads in high myopia** — the eye already at raised risk of POAG.',
    '',
    '*Both error lists are not taken from the course material.*',
    '',
    '### Gonioscopy',
    '**The only way to see the angle,** and what separates two diseases with identical pressures and identical discs.',
    '',
    '### Target pressure',
    '- **The definition —** the pressure at which **that** nerve stops deteriorating; set individually, lowered again if the field progresses *(not taken from the course material)*.',
    '- **The deck’s own aim:** preserve visual function **beyond the patient’s life expectancy**, affordably, with least side effects.',
    '',
    'Src: L11 lines 180–187, 204–205; register row 2 from `op-pupil` (L3,4 sl.36–40)'
  ].join('\n'),
  qs: []
},

{
  id: 'glc-6', w: 'must',
  h: 'Primary open angle glaucoma — pathology and who gets it',
  body: [
    '**The pathology in one line:** **increased resistance** to drainage through **trabecular meshwork → Schlemm’s canal → collector channels**. The angle is open; the block is inside it.',
    '',
    '### The five predisposing factors',
    '',
    '|Factor|The deck’s statement|',
    '|---|---|',
    '|**Age**|older, **beyond the 5th decade**|',
    '|**Gender**|**more common in females**|',
    '|**Ethnicity**|**more common AND more severe in dark races**|',
    '|**Family history**|**10-fold increased risk** in **first-degree relatives**|',
    '|**Refractive state**|**more common in myopia**|',
    '',
    '*`L7,8) Refractive errors` independently lists "high association with primary open angle glaucoma" under the complications of myopia — cited only.*',
    '',
    'Src: L11 lines 109–124; L7,8 lines 250–251 (cited only)'
  ].join('\n'),
  qs: []
},

{
  id: 'glc-7', w: 'must',
  h: 'The glaucomatous disc — structural change',
  body: [
    '**Neural rim thinning is the lesion.** Everything at the disc is rim tissue disappearing and the cup enlarging into the space.',
    '',
    '### Two patterns of thinning',
    '- **Focal —** a **polar notch**, **superior** or **inferior**.',
    '- **Circumferential —** **generalized** thinning of the neural rim.',
    '',
    '### What is seen',
    '- **Cup/disc ratio —** enlargement **beyond 0.3**, the deck’s threshold.',
    '- **Splinter haemorrhage** at the disc margin.',
    '- **Total cupping:** with **nasal shift of the blood vessels** — the end-stage disc.',
    '',
    '*The measurement itself — the normal C/D figure, the >0.2 inter-eye asymmetry rule and the temporal myopic crescent — is in `op-pupil`.*',
    '',
    'Src: L11 lines 125–144'
  ].join('\n'),
  qs: []
},

{
  id: 'glc-8', w: 'must',
  h: 'The glaucomatous field — functional change, and why it is silent',
  body: [
    '**In the order the disease produces them:**',
    '',
    '|Defect|What it is|',
    '|---|---|',
    '|**Paracentral scotomata**|in **Bjerrum’s area** — the **10–20 degrees** of central field|',
    '|**Arcuate scotomata**|**superior** and **inferior**|',
    '|**Nasal step**|a step across the horizontal meridian, nasally|',
    '|**Ring scotoma**|a **double arcuate** scotoma|',
    '|**Constriction of the field**|closing to a **tubular field**|',
    '|**Temporal island of vision**|the last surviving fragment|',
    '',
    '### Visual acuity',
    '- **Central vision —** lost only in **END-STAGE** disease.',
    '- **That is the danger:** a patient reading 6/6 can already have lost most of the field, so screening is by disc and field, never by acuity.',
    '',
    'Src: L11 lines 145–157'
  ].join('\n'),
  qs: []
},

{
  id: 'glc-9', w: 'must',
  h: 'POAG — presentation, examination and the treatment ladder',
  body: [
    '### Presentation',
    '- **Most commonly — asymptomatic.** The headline of the slide.',
    '- **Less commonly —** **headache**, characteristically **early morning**; **frequent change of reading glasses**.',
    '- **Advanced disease —** **peripheral visual field loss**, then diminution of vision.',
    '',
    '### Examination',
    '**Three things:** optic neuropathy · elevated IOP · **features of secondary glaucoma** — the third stops a secondary cause being treated as primary.',
    '',
    '**Referral:** a **potentially blinding disease**, so referral to an ophthalmologist **is a must**.',
    '',
    '### The protocol, in order',
    '',
    '|Step|What|',
    '|---|---|',
    '|**Medical — decrease production**|**beta-blockers · carbonic anhydrase inhibitors · alpha agonists**|',
    '|**Medical — increase drainage**|**prostaglandin analogues · miotics · alpha agonists**|',
    '|**Laser**|**laser trabeculoplasty** — argon, or selective|',
    '|**Surgery**|**trabeculectomy** — a **fistula between the anterior chamber and the subconjunctival space**|',
    '',
    '- **Alpha agonists sit in both medical rows —** the deck’s own placement; they cut production and improve outflow.',
    '',
    'Src: L11 lines 180–217'
  ].join('\n'),
  qs: []
},

{
  id: 'glc-10', w: 'high',
  h: 'Secondary OPEN angle glaucoma — four causes, one common thread',
  body: [
    '**A cause is seen** for the raised outflow resistance — but **the angle is still open on gonioscopy**. The block is inside the meshwork, not over it.',
    '',
    '|Cause|What clogs the meshwork|',
    '|---|---|',
    '|**Pseudoexfoliation syndrome**|**pseudoexfoliative material** — fibrillar **basement membrane** material — in the meshwork and **all through the anterior segment**|',
    '|**Pigment dispersion syndrome**|**pigment chaffed out of the iris**, deposited in the meshwork and throughout the anterior segment|',
    '|**Steroid induced**|**prolonged intake of potent steroids in a predisposed individual** → **decreased permeability** of the meshwork|',
    '|**Uveitic**|**inflammatory cells** plus **plasmoid (viscid) aqueous humour** → decreased permeability of the meshwork|',
    '',
    'Src: L11 lines 158–173'
  ].join('\n'),
  qs: []
},

{
  id: 'glc-11', w: 'must',
  h: 'Angle closure — the crowded eye, and what tips it over',
  body: [
    '**Two questions, asked separately:** who has an angle capable of closing, and what closes it tonight.',
    '',
    '### At risk — crowded anterior segments',
    '- **Females.**',
    '- **Hyperopes —** a normal-sized lens in a short eye.',
    '- **Race —** **South-East Asians**.',
    '- **Advancing age.**',
    '- **An affected fellow eye.**',
    '',
    '### What raises the risk — the mid-dilated pupil',
    '- **A dark environment.**',
    '- **Systemic medications —** **anticholinergics**.',
    '',
    '### Why age crowds the angle',
    '- **The lens grows for life:** nothing is shed, so it thickens, pushes the iris forward and shallows the chamber, worst peripherally.',
    '- **`L7,8`, under hyperopia:** *"Predisposition to narrow angle glaucoma due to shallow anterior chamber (especially later in life as the lens becomes thicker)."*',
    '',
    '### Why MID-dilated beats fully dilated',
    '- **The peripheral iris is at its most bunched** into the angle while pupillary block is still substantial *(mechanism not taken from the course material)*.',
    '- **So attacks start in the evening —** a dark room, or an anticholinergic; never bright sun.',
    '',
    'Src: L12 lines 109–127; L7,8 lines 339–347 (cited only)'
  ].join('\n'),
  qs: ['opqb-t1-23']
},

{
  id: 'glc-12', w: 'must',
  h: 'The shallow chamber at the bedside — and the drop you must not give',
  body: [
    '### The penlight test, in the examination deck’s own words',
    '- **Shine a light from the temporal side** of the head, across the front of the eye, **parallel to the plane of the iris**.',
    '- **Look at the nasal aspect of the iris.**',
    '- **Two-thirds or more in shadow —** the chamber is **probably shallow** and the **angle narrow**.',
    '',
    '**Why it works:** a forward-bowed iris casts its own shadow nasally; a deep chamber lets the beam wash across evenly.',
    '',
    '### Causes of a shallow chamber',
    '- **Shallow —** **hypermetropia · angle closure glaucoma** · intumescent cataract · perforated corneal ulcer · surgical wound leak.',
    '- **Deep —** high myopia · aphakia · **buphthalmos**.',
    '',
    '### ⚠️ Do not dilate an occludable angle',
    '- **A mydriatic drop —** does deliberately what a dark room does by accident *(the drop is not named on the slide, which gives anticholinergics and darkness — not taken from the course material)*.',
    '- **The test comes before the drop.** It takes five seconds and instils nothing.',
    '- **Everything else stays safe:** chamber-depth assessment, **undilated** fundus examination, confrontation fields.',
    '',
    '### What to do instead',
    '**Gonioscopy, then laser iridotomy —** it bypasses pupillary block, and dilation is safe afterwards *(the post-iridotomy safety is not taken from the course material)*.',
    '',
    'Src: L3,4 sl.24–26 (`op-va`’s deck — cited only, not counted); L12 lines 109–127, 233–243'
  ].join('\n'),
  qs: ['opqb-t1-33']
},

{
  id: 'glc-13', w: 'high',
  h: 'The angle-closure continuum — one disease, four stages',
  body: [
    '**The continuum:** intermittent angle closure → **acute** angle closure (crisis) → **chronic** narrow angle glaucoma → **absolute** glaucoma.',
    '',
    '|Stage|Mechanism|Picture|',
    '|---|---|---|',
    '|**Intermittent (subacute)**|**short episodes** that **resolve spontaneously**|**minimal or no blurring** · **coloured haloes around light** · **eye pain, brow ache or headache**|',
    '|**Acute (crisis)**|the angle shuts and stays shut|the emergency|',
    '|**Chronic narrow angle**|**repeated** attacks → **chronic closure** of the angle|**similar to POAG** — raised IOP, progressive cupping, field changes|',
    '|**Absolute**|end stage|**blind painful eye**|',
    '',
    '### What aborts a subacute attack',
    '- **Bright illumination** and **sleep** — the deck names both.',
    '- **Why:** each constricts the pupil, pulling the peripheral iris out of the angle *(mechanism not taken from the course material)*.',
    '',
    '### Two treatment lines',
    '- **Intermittent —** **iridotomy**, laser or surgical. Treat here and the crisis never happens.',
    '- **Chronic —** the **same protocol as open angle glaucoma**.',
    '',
    '**Coloured haloes:** corneal epithelial oedema from an abrupt rise in IOP, so a **danger signal for acute glaucoma** — `L37) Red Eye`, a book chapter rather than a lecture.',
    '',
    'Src: L12 lines 128–164, 244–277; L37 lines 355–360 (cited only)'
  ].join('\n'),
  qs: []
},

{
  id: 'glc-14', w: 'must',
  h: 'Acute angle-closure glaucoma — the ocular emergency',
  body: [
    '### Symptoms',
    '- **Pain — ++++.** The deck grades it that way.',
    '- **Coloured haloes around light.**',
    '- **Vision —** **rapid** diminution, **over several hours**.',
    '- **Redness.**',
    '- **Nausea and vomiting —** ⚠️ **DDx: acute abdomen.**',
    '',
    '### Signs',
    '- **Diminution of vision.**',
    '- **IOP ++++ —** a **stony hard** globe.',
    '- **Corneal oedema —** so **fundus examination and gonioscopy are usually not possible**.',
    '- **Ciliary injection.**',
    '- **Pupil —** **mid-dilated, vertically oval, non-reactive**.',
    '- **Shallow anterior chamber / iris bombé** — forward bowing.',
    '- **Eyelid oedema.**',
    '',
    '### Medical treatment — hospitalise',
    '- **Lower the pressure:** **systemic acetazolamide** · topical **beta-blockers**, **alpha agonists**, **CAIs**, **miotics (pilocarpine)**.',
    '- **Hyperosmotic agents:** **IV mannitol** · **oral hypertonic glycerol**.',
    '- **Topical steroids.**',
    '',
    '### Surgical treatment',
    '- **Iridotomy —** **laser is standard**; surgical otherwise.',
    '- **Filtering surgery —** **trabeculectomy**.',
    '',
    '*The fellow eye is itself listed as at risk, so it is treated prophylactically (not taken from the course material).*',
    '',
    'Src: L12 lines 165–243'
  ].join('\n'),
  flow: {
    title: 'How a mid-dilated pupil blinds an eye in hours',
    steps: [
      { k: 'step', t: 'Mid-dilated position of the pupil', n: 'dark room · systemic anticholinergic · a mydriatic drop' },
      { k: 'step', t: 'Relative pupil block — aqueous cannot pass the pupil' },
      { k: 'step', t: 'Accumulation of aqueous humour BEHIND the iris', n: 'the posterior chamber pressurises' },
      { k: 'step', t: 'IRIS BOMBÉ — the peripheral iris bows forward' },
      { k: 'step', t: 'Narrowing of the angle → increased resistance to aqueous outflow' },
      { k: 'alert', t: 'OCULAR EMERGENCY — rapid severe rise of IOP', n: 'stony hard globe · hazy cornea · fixed mid-dilated pupil · vomiting' },
      { k: 'decision', t: 'Is the cornea clear enough to laser?', yes: 'Laser iridotomy — the standard, and prophylactically to the fellow eye', no: 'Medical lowering first — acetazolamide, topical agents, mannitol — then iridotomy once the cornea clears; trabeculectomy if the pressure persists' }
    ]
  },
  qs: []
},

{
  id: 'glc-15', w: 'know',
  h: 'Secondary NARROW angle glaucoma — pulled forward or pushed forward',
  body: [
    '**The definition:** a cause is seen for the gonioscopically narrow angle. Two mechanisms only — **anterior pulling** and **posterior pushing**.',
    '',
    '|Cause|Mechanism|How|',
    '|---|---|---|',
    '|**Neovascular glaucoma**|**anterior pulling**|a **neovascular membrane** over the meshwork **contracts**, pulling the peripheral iris over the trabeculum|',
    '|**Iridocorneal endothelial (ICE) syndrome**|**anterior pulling**|a membrane over trabeculum, iris and **posterior cornea** contracts and pulls the same way|',
    '|**Intraocular tumours**|**posterior pushing**|any **space-occupying lesion in the posterior segment**|',
    '|**Retinal vein occlusion**|**posterior pushing**|venous congestion → **forward rotation of the iris–lens diaphragm**|',
    '',
    '*Rubeosis iridis and the retinal ischaemia behind neovascular glaucoma are `L19.2) Retinal Vascular Disorders`, and belong to `op-ret`.*',
    '',
    'Src: L12 lines 278–304'
  ].join('\n'),
  qs: []
},

{
  id: 'glc-16', w: 'must',
  h: 'Congenital / developmental glaucoma — pathogenesis and epidemiology',
  body: [
    '### Two groups',
    '- **Syndromic —** associated with other congenital anomalies: **aniridia**, **Sturge–Weber syndrome**.',
    '- **Isolated —** not associated with other congenital anomalies.',
    '',
    '### The pathology — three lesions at the angle',
    '- **Persistent mesodermal membrane** on the trabecular meshwork — **goniodysgenesis**.',
    '- **Anterior iris insertion** obscuring the trabecular meshwork.',
    '- **Absent Schlemm’s canal.**',
    '',
    '### Secondary effects of a raised IOP in an immature eye',
    '- **Enlargement of the globe →** increased **corneal diameter**, **broad limbus**, increased **antero-posterior diameter**.',
    '- **Aqueous into the corneal stroma →** **corneal oedema**.',
    '- **Optic nerve cupping.**',
    '',
    '**Why the eye enlarges:** an infant’s sclera is still distensible *(not taken from the course material)*. The enlarged globe is **buphthalmos** — a word this deck never uses, though `L3,4` and `L33,34` print it.',
    '',
    '### Epidemiology — four numbers',
    '- **Western communities —** rare, **1 in 10,000 live births**.',
    '- **High consanguinity —** **common**.',
    '- **Males 65 % · bilateral 70 %.**',
    '',
    'Src: L12 lines 317–368; L3,4 sl.26 and L33,34 (cited only)'
  ].join('\n'),
  qs: []
},

{
  id: 'glc-17', w: 'must',
  h: 'Congenital glaucoma — clinical picture, look-alikes and treatment',
  body: [
    '### Symptoms',
    '- **Photophobia, watering, blepharospasm —** the classic triad, all three the oedematous cornea.',
    '- **Also —** large eye · abnormal colour of the eye · diminution of vision.',
    '',
    '### Signs',
    '- **Corneal oedema and Haab’s striae —** breaks in **Descemet’s membrane** from stretching *(mechanism not taken from the course material)*.',
    '- **Enlarged corneal diameter · broad limbus.**',
    '- **Increased IOP · optic nerve cupping.**',
    '- **Increased axial length** on **A-scan**.',
    '',
    '### The six look-alikes the deck lists',
    '',
    '|Differential|What separates it|',
    '|---|---|',
    '|**Traumatic corneal oedema, forceps**|birth history; cornea **not enlarged**, IOP normal|',
    '|**Corneal ulcer**|a **staining epithelial defect**, red eye|',
    '|**Congenital corneal opacification**|opacity **without** raised IOP or enlargement|',
    '|**Congenital high myopia**|large eye, **clear cornea**, normal IOP|',
    '|**Congenital nasolacrimal duct obstruction**|watering **with discharge**, **no photophobia**|',
    '|**Congenital optic nerve pit**|cupped-looking disc, **normal cornea and IOP**|',
    '',
    '*The discriminating column is supplied; the deck prints the six names only — not taken from the course material.*',
    '',
    '### Treatment — the cornea chooses the operation',
    '- **Medical —** **temporary, until surgery**.',
    '- **Clear cornea →** **goniotomy**.',
    '- **Opaque cornea →** **trabeculotomy** · **trabeculectomy with antimetabolites** · **synthetic valve implantation**.',
    '- **Why the cornea decides:** goniotomy is cut under a direct gonioscopic view of the angle *(not taken from the course material)*.',
    '',
    'Src: L12 lines 369–499'
  ].join('\n'),
  qs: []
}

    ]
  }
};
