/* Ophthalmology theory, keyed by chapter id.
   Written in Phase 4 from lecture slides + questions + book. See CLAUDE.md. */
var T_OPHTHO = {
  "op-pupil": {
    "intro": "Bedside technique, examined as rules rather than skills. Four things recur: which light condition unmasks which pupil, reading the swinging flashlight test, the muscle–nerve–action grid, and what an abnormal red reflex colour means.",
    "sections": [
      {
        "id": "pup-1",
        "w": "know",
        "h": "Assessment of the pupil — what is actually looked at",
        "body": "Two steps only, in this order:\n\n- **Size and shape:** observed **at rest, in room light**, before any light is shone.\n- **Pupillary reactions:** direct, consensual, and the swinging flashlight test.\n\n### Size — the vocabulary\n- **Isocoria:** both pupils **round and equal in diameter** — the normal state.\n- **Anisocoria:** any **difference in size** between the two pupils.\n\n### Shape\n- **Normal:** round.\n- **Festooned pupil:** an irregular, scalloped outline from **posterior synechiae in uveitis** — the iris is stuck to the anterior lens capsule at several points, so it dilates only between them.\n\n*Iris signs themselves — iridodialysis, synechiae, rubeosis — are on slide 18 and belong to `op-va`.*\n\nSrc: L3,4 sl.28–29, 31",
        "qs": []
      },
      {
        "id": "pup-2",
        "w": "must",
        "h": "Anisocoria — the light condition tells you which pupil is the abnormal one",
        "body": "**The rule (lecturer-flagged HIGH YIELD):** anisocoria **greater than 1 mm** is assessed in **both very bright and very dim lighting**.\n\n**Why both:** the abnormal pupil is the one that **fails to do its job** — so you unmask it in the light condition that demands that job.\n\n|Anisocoria worse in|The abnormal pupil is the|It failed to|Defective system|Classic cause|\n|---|---|---|---|---|\n|**DIM light**|**small** one|**dilate**|**Sympathetic**|**Horner syndrome**|\n|**BRIGHT light**|**large** one|**constrict**|**Parasympathetic**|**Third nerve palsy**, or **pupillary trauma**|\n\n### Why, in one line each\n- **Dilator pupillae:** **sympathetic**; its job is darkness. Denervate it and the pupil cannot enlarge, so the gap widens as the room darkens.\n- **Sphincter pupillae:** **parasympathetic, CN III**; its job is brightness. Denervate it and the pupil cannot shrink, so the gap widens as the room lightens.\n\n### Horner syndrome — the associated signs\n- **Miosis:** the cardinal sign — unopposed sphincter.\n- **Dilation lag:** the denervated pupil dilates **slowly** in darkness; the most specific bedside sign.\n- **Mild ptosis:** partial, never complete — **Muller muscle** (superior tarsal) is the sympathetically supplied lid elevator and contributes only 1–2 mm *(mechanism not taken from the course material)*.\n- **Apparent enophthalmos · anhydrosis · heterochromia** (the last in congenital cases only).\n\n*Motility is normal and there is no RAPD in Horner — which is what separates it from a third nerve palsy at the bedside.*\n\n*The Horner sign list is printed on `L22) Pupil and Visual pathway`, which is `op-neuro`’s deck — cited only, not counted against this chapter.*\n\nSrc: L3,4 sl.30; L22 (cited only)",
        "qs": [
          "opqb-t1-34",
          "opqb-t1-35"
        ]
      },
      {
        "id": "pup-3",
        "w": "high",
        "h": "Testing the light reactions — the set-up, and direct versus consensual",
        "body": "### The method, in order\n1. **Dim the room light.**\n2. **Ask the patient to fixate a distant object** — this switches off accommodation, so the near reflex cannot contaminate the result.\n3. **Shine a bright light directly into each pupil, slightly temporal to the visual axis.**\n4. **Perform the direct and consensual tests.**\n5. **Perform the swinging flashlight test** for a **RAPD**.\n\n### The two reactions\n- **Direct:** light into one eye, **watch that same pupil** constrict.\n- **Consensual:** light into one eye, **watch the OTHER pupil** — it constricts equally.\n\n### The reflex arc\n**The arc:** retina → **optic nerve** → decussation → **both Edinger–Westphal nuclei** → **third cranial nerve** → **ciliary ganglion** → **sphincter pupillae**.\n\n**The consequence:** the signal crosses to both sides, so **the two pupils are always the same size** whichever eye the light is in. The swinging flashlight test is built on this.\n\nSrc: L3,4 sl.32–33",
        "qs": []
      },
      {
        "id": "pup-4",
        "w": "must",
        "h": "The swinging flashlight test, RAPD, and light–near dissociation",
        "body": "**What it detects:** a **relative afferent pupillary defect (RAPD)**, the **Marcus Gunn pupil** — asymmetric disease of the **optic nerve** or extensive retina.\n\n**How to read it — watch the pupil the light is currently ON:**\n\n|Light swung onto|Normal|RAPD present in that eye|\n|---|---|---|\n|the **good** eye|**constricts**|constricts|\n|the **bad** eye|**constricts**|**DILATES** — both pupils together|\n\n### Why it dilates rather than staying still\nPupil size at any instant reflects the **total light signal the brain is receiving**, not which eye it came from. Swing to the damaged nerve and that total **falls**, so both pupils **release** from the constriction the good eye had driven.\n\n- **The side of the lesion:** the eye the light is on **when both pupils dilate**.\n- **It is RELATIVE:** the test compares the two eyes, so **bilateral symmetrical** disease gives no RAPD.\n- **A media opacity never causes one** — a dense cataract dims the image but the nerve still transmits the light.\n\n### Light–near dissociation\n**The near reflex survives an afferent light defect** — it is driven **cortically**, by the intention to look at something close, not by light on the retina.\n\n- **So in an RAPD:** the **near reflex remains normal** while the direct and consensual light reflexes on that side are impaired.\n\n*The named entities are on `L22) Pupil and Visual pathway` — **Argyll Robertson** (pretectal, small pupils, neurosyphilis; also DM, alcoholism, encephalitis) and **Dorsal Midbrain Syndrome** (pineal tumour, stroke, MS; with upward gaze paralysis, convergence-retraction nystagmus, lid retraction). Cited only, not counted.*\n\nSrc: L3,4 sl.32, 34; L22 (cited only)",
        "qs": [
          "opqb-t1-36",
          "opqb-t1-37",
          "opqb-t1-42"
        ]
      },
      {
        "id": "pup-5",
        "w": "high",
        "h": "Intraocular pressure — the number, and estimating it with two fingers",
        "body": "**Normal range: 10–21 mmHg, mean 16 mmHg.** Lecturer-flagged HIGH YIELD, and it is the one number in this chapter that is asked as a bare recall item.\n\n### The two families of method\n- **Digitally:** a **rough estimation**, and a **comparison between the two eyes**.\n- **Tonometry:** **applanation** or **indentation** — see pup-6.\n\n### Digital tonometry — the technique\n1. **Ask the patient to look down.**\n2. **Place both index fingers on the upper lid, above the level of the tarsus** — never on the tarsal plate itself, which is rigid and transmits nothing.\n3. **Rest the middle, ring and little fingers** on the forehead (one hand) and the temple (the other), to steady them.\n4. **Press alternately** and **test the tension as you would test for fluctuation** — one finger indents while the other feels the displacement.\n\n- **What it is good for:** confirming a **grossly** high or low pressure, and detecting **asymmetry** between the eyes. It cannot give a number *(not taken from the course material)*.\n\n*Full IOP interpretation — diurnal variation, corneal thickness, gonioscopy, target pressure — is `op-glauc`’s.*\n\nSrc: L3,4 sl.36–37",
        "qs": []
      },
      {
        "id": "pup-6",
        "w": "high",
        "h": "Tonometry — applanation versus indentation",
        "body": "|Feature|**Applanation**|**Indentation**|\n|---|---|---|\n|**Named instrument**|**Goldmann** applanation tonometer (slit-lamp mounted); the hand-held version is the Perkins|**Schiotz** tonometer|\n|**Principle**|**flattens** a fixed area of cornea and measures the force needed|**indents** the cornea with a **known weight** and measures how far the plunger sinks|\n|**Read from**|the **blue-light mires** seen through the **bi-prism**, aligned by the adjustment knob|a **scale**, deflected by the plunger|\n|**Parts named on the slide**|bi-prism, mobile feeder arm, control weight and housing, adjustment knob|plunger, weight, scale|\n\n### ⚠️ The Schiotz scale runs backwards\n**A LOW scale reading means a HARD eye and a HIGH IOP.** The harder the globe, the **less** the plunger sinks, so the **smaller** the deflection.\n\n- **The trap:** reading the scale as though it were the pressure inverts every answer *(the direction of the scale is not stated on the slide — not taken from the course material)*.\n\n- **Both need topical anaesthetic**; both touch the cornea, so neither is done through a suspected perforation *(not taken from the course material)*.\n\nSrc: L3,4 sl.38–40",
        "qs": []
      },
      {
        "id": "pup-7",
        "w": "must",
        "h": "The six extraocular muscles — action and nerve supply",
        "body": "- **Four recti:** superior, inferior, medial, lateral.\n- **Two obliques:** superior, inferior.\n- **The trochlea:** the superior oblique runs forward to it at the superomedial rim, then turns sharply back to the upper posterior globe — so it pulls from **in front and medially**.\n\n**The grid the lecturer double-flagged HIGH YIELD:**\n\n|Muscle|Nerve|Action|\n|---|---|---|\n|**Medial rectus**|**III**|**adduction**|\n|**Lateral rectus**|**VI**|**abduction**|\n|**Superior rectus**|**III**|**elevation** — mainly **in ABduction**|\n|**Inferior rectus**|**III**|**depression** — mainly **in ABduction**|\n|**Superior oblique**|**IV**|**depression** — mainly **in ADduction**|\n|**Inferior oblique**|**III**|**elevation** — mainly **in ADduction**|\n\n### Two rules that compress the whole grid\n- **Nerve supply — LR₆ SO₄, everything else III.** The third nerve supplies all four remaining muscles, and separately the levator and the pupil.\n- **Action — recti act vertically in ABduction, obliques in ADduction.** Get that pairing round the right way and every cardinal-position question follows.\n\n*Why: a muscle acts on the axis it most nearly parallels, and turning the eye in or out swings that axis into or out of line with each pull (mechanism not taken from the course material).*\n\nSrc: L3,4 sl.42–43",
        "qs": [
          "opqb-t1-21",
          "opqb-t1-24"
        ]
      },
      {
        "id": "pup-8",
        "w": "must",
        "h": "Testing alignment and movement — light reflex, ductions, versions",
        "body": "### 1. Alignment in the primary position — the corneal light reflex\n- **Normal:** the light reflects **symmetrically** on both corneas, in the same position relative to pupil and visual axis.\n- **In a deviating eye:** the reflection is **eccentric, in the direction OPPOSITE to the deviation** — an eye turned in throws its reflex out.\n- **The amount of deviation can be estimated** from how far off-centre the reflex sits.\n\n### 2. Ductions — one eye at a time\n- **Uniocular** movement, **the other eye occluded**.\n- Each muscle is tested **in its primary field of action**.\n- **Detects:** limitation in one muscle’s direction.\n\n### 3. Versions — both eyes open\n- **Binocular** movement, tested in **all 8 directions of gaze**.\n- **Detects:** **conjugate gaze palsy**, and **overaction or underaction** of a muscle.\n\n### The six cardinal positions, and the muscle each tests\n\n|Direction|Muscle tested|\n|---|---|\n|**Out**|**Lateral rectus**|\n|**In**|**Medial rectus**|\n|**Up & out**|**Superior rectus**|\n|**Down & out**|**Inferior rectus**|\n|**Up & in**|**Inferior oblique**|\n|**Down & in**|**Superior oblique**|\n\n### The four motility words, told apart\n\n|Term|Eyes|Direction|Example|\n|---|---|---|---|\n|**Duction**|**one**|any|abduction, adduction|\n|**Version**|both|**same** (conjugate)|dextroversion — both eyes right|\n|**Vergence**|both|**opposite** (disjugate)|convergence for near|\n|**Fusion**|both|**not a movement** — a **sensory** act|merging the two retinal images into one|\n\n*The deck defines only duction (uniocular) and version (binocular); **vergence** and **fusion** are supplied — not taken from the course material.*\n\nSrc: L3,4 sl.44–47",
        "qs": [
          "opqb-t1-16",
          "opqb-t1-21"
        ]
      },
      {
        "id": "pup-9",
        "w": "must",
        "h": "The red reflex, and what each abnormal colour means",
        "body": "**Normal red reflex:** light reflected off the fundus, seen through the ophthalmoscope, **uninterrupted by shadows**. An intact reflex is evidence that the **cornea, anterior chamber, lens and vitreous are all clear** and are not the cause of reduced vision.\n\n**The colour grid — lecturer-flagged HIGH YIELD across two slides:**\n\n|Reflex|Meaning|Causes|\n|---|---|---|\n|**Normal red**|clear media|—|\n|**Black shadows within a red reflex**|**opacity in the media**, silhouetted|**corneal scar · cataract · vitreous haemorrhage**; **best seen dilated**|\n|**ABSENT reflex**|media totally opaque|**mature cataract** · **dense vitreous haemorrhage** (a **black reflex**)|\n|**GREY reflex**|—|**Retinal detachment**|\n|**YELLOW / WHITE reflex**|**leukocoria**|**Retinoblastoma** · **pus in the vitreous (endophthalmitis)**|\n\n### The one that must never be missed\n**A white or yellow reflex in a child is retinoblastoma until proved otherwise.** It is the reason the red reflex is checked in every paediatric eye examination.\n\n### Pupil colour, the same question asked without an ophthalmoscope\n- **Jet black:** clear media — the **newborn**, and the **aphakic** eye after the lens has been removed. A pupil *regains* its black when the opacity is taken out.\n- **Greyish:** the ageing lens — nuclear sclerosis or immature senile cataract.\n- **White (leukocoria):** mature cataract.\n\n*Full lens and cataract detail is slide 20 and belongs to `op-va`.*\n\nSrc: L3,4 sl.49–52; sl.20 (`op-va`’s, cited only)",
        "qs": [
          "opqb-t1-10",
          "opqb-t1-48"
        ]
      },
      {
        "id": "pup-10",
        "w": "high",
        "h": "Direct ophthalmoscopy and reading the fundus",
        "body": "**Pharmacological dilatation greatly enlarges the field of retina visible** — an undilated pupil gives a narrow cone, a dilated one a wide one.\n\n### The method, numbered as the deck numbers it\n1. **Patient seated, room lights dimmed;** ask them to **fix on a point on the wall straight ahead** and not move the eyes.\n2. **Aperture wheel to the large round white light; focusing wheel to zero.**\n3. **Start about 1 foot away.** **Right eye to right eye, ophthalmoscope in the right hand.** Look straight down the visual axis and you will see the **red reflex**.\n4. **Rest your free hand on the patient’s forehead** to steady yourself.\n5. **Approach slowly at about 15° temporal** to the visual axis, keeping the pupil in view.\n6. **Dial to focus.** When a vessel appears, **follow it to the optic disc, which lies NASAL to the centre of the retina** — the branching of the vessels points like arrows towards the disc.\n7. **Examine the optic disc, the retinal vessels, and the macula.**\n8. **Repeat on the left — left hand, left eye.**\n\n### The fundus landmarks\n**Optic disc · optic cup · retinal artery · retinal vein · macula · fovea.**\n\n### Two disc signs the deck labels but does not define\n- **Cup/disc ratio:** normal roughly **0.3–0.5**; **above 0.6 is suspicious**.\n- **Inter-eye ASYMMETRY above 0.2 is suspicious for glaucoma** whatever the absolute figures — the two discs of one person develop together and should match. So **0.6 against 0.2** is abnormal on asymmetry alone *(not taken from the course material)*.\n- **Temporal myopic crescent:** a pale, sharply bordered arc at the **temporal** disc margin — bare **sclera**, exposed as axial elongation drags the RPE and choroid off the disc.\n- **What it marks:** **myopia**, and an eye at raised risk of retinal tears and detachment *(not taken from the course material)*.\n\nSrc: L3,4 sl.53–58",
        "qs": [
          "opqb-t1-49",
          "opqb-t1-50"
        ]
      }
    ]
  },
  "op-orbit": {
    "intro": "Proptosis dominates: its mechanisms, its commonest causes by age, and the preseptal-versus-orbital split. Thyroid eye disease and the vascular signs carry the rest.",
    "sections": [
      {
        "id": "orb-1",
        "w": "know",
        "h": "The bony orbit — the three openings and what goes through each",
        "body": "- **Bones on the deck figure:** frontal · ethmoid · lacrimal · palatine · **lesser and greater wings of sphenoid** · zygomatic · maxillary.\n- **Landmarks:** optic foramen · supraorbital and trochlear notches · anterior lacrimal crest · infraorbital groove and foramen · zygomatic–maxillary suture.\n\n### The three openings\n\n|Opening|Between|Transmits|\n|---|---|---|\n|**Superior orbital fissure**|**greater and lesser wings of sphenoid**|**III** (superior and inferior branches) · **IV** trochlear · **V** (lacrimal, frontal, nasociliary) · **VI** abducent · **superior ophthalmic vein**|\n|**Inferior orbital fissure**|**greater wing of sphenoid and maxilla**|**maxillary nerve** · **zygomatic nerve** · **inferior ophthalmic vein**|\n|**Optic canal**|within the lesser wing|**optic nerve** · **ophthalmic artery**|\n\n- **Common tendinous ring — INSIDE:** both branches of **III**, **nasociliary**, **VI**.\n- **Common tendinous ring — OUTSIDE:** **lacrimal**, **frontal**, **trochlear (IV)**.\n\n*The deck labels a \"common tendinous ring\" on the figure; the eponym annulus of Zinn is not printed, nor are the four walls named as walls.*\n\nSrc: L10 slides 2–3",
        "qs": []
      },
      {
        "id": "orb-2",
        "w": "know",
        "h": "The orbital syndrome — what any orbital disease looks like, and how it is imaged",
        "body": "### Symptoms\n- **Eyelid and conjunctival swelling:** redness, watering.\n- **Pain:** sometimes on, or exacerbated by, **eye movement**.\n- **Double vision and blurring.**\n- **Pulsing sensation or audible bruit.**\n\n### Signs\n- **Soft tissue involvement:** eyelid and periocular oedema, **skin discoloration**, ptosis, **chemosis and injection**.\n- **Fundus, four findings:** **disc swelling** · **optic atrophy with choroidal folds** · **opticociliary (shunt) vessels with optic atrophy** · **choroidal folds** alone.\n\n### Investigations\n\n|Test|What it is for|\n|---|---|\n|**CT**|**bony structures**, and the **location and size** of space-occupying lesions|\n|**MRI**|**orbital APEX lesions**, orbital tumours, **inflammatory disease**|\n|**Plain X-ray**|**little used** — only initial diagnosis of traumatic bony injury|\n|**Ultrasonography**|—|\n|**Fine needle biopsy**|**suspected neoplastic disease**|\n\nSrc: L10 slides 4, 13, 14",
        "qs": []
      },
      {
        "id": "orb-3",
        "w": "must",
        "h": "Proptosis — the two mechanisms, the commonest causes, the direction, the number",
        "body": "**Proptosis:** forward protrusion of the globe. **Only two mechanisms.**\n\n- **The globe is PUSHED forward** — retrobulbar haemorrhage, tumour, and every other space-occupying orbital lesion.\n- **The bony orbit is SHALLOW** — **premature closure of the sutures**, e.g. **Crouzon syndrome**.\n\n### ⚠️ Five different \"commonest\" facts, and swapping two words changes the answer\n\n|Question|Answer|\n|---|---|\n|Commonest cause of proptosis **in ADULTS**, unilateral **or** bilateral|**THYROID EYE DISEASE**|\n|Commonest cause of proptosis **in CHILDREN**|**ORBITAL CELLULITIS** *(as a \"commonest\" claim, not in course material — L10 says only that orbital cellulitis is \"more common in children\")*|\n|Commonest **orbital tumour in ADULTS**|**CAVERNOUS haemangioma**|\n|Commonest tumour of the orbit and periorbital area **in CHILDHOOD**|**CAPILLARY haemangioma**|\n|Commonest **primary orbital MALIGNANCY in children**|**RHABDOMYOSARCOMA**|\n\n- **⚠️ Unilateral does NOT argue against thyroid.** L23 gives it as commonest cause of **unilateral or bilateral** exophthalmos, and L10 illustrates **asymmetrical** lid retraction.\n\n### Direction and measurement\n- **AXIAL (straight forward):** an intraconal lesion, or thyroid eye disease.\n- **ECCENTRIC / dystopic:** an extraconal mass — **the globe moves AWAY from it**, so direction names the quadrant.\n- **Measured by:** **visualization from above** · **Hertel exophthalmometer**.\n- **⚠️ THE NUMBERS: over 20 mm is proptosis; a difference of 2–3 mm or more between the eyes is suspicious regardless of the absolute value** *(the slide is cut off after \"regardless of the\")*.\n\nSrc: L10 slides 6, 7 (figure only), 8, 26, 40, 41, 46; L23 (thyroid exophthalmos), cited only",
        "qs": [
          "opqb-t3-113",
          "opqb-t3-117",
          "opqb-t3-135"
        ]
      },
      {
        "id": "orb-4",
        "w": "know",
        "h": "Enophthalmos, and the two things that only look like a change in prominence",
        "body": "**Enophthalmos:** the globe is **retracted backwards**.\n\n- **Commonest cause — FRACTURE OF THE ORBITAL FLOOR with orbital fat prolapse.** Also **radiotherapy** and **sclerosing lesions**.\n\n### The two pseudos — a normal globe in an abnormal setting\n\n|  |**PSEUDOenophthalmos**|**PSEUDOproptosis**|\n|---|---|---|\n|Causes|**ptosis** · **phthisis bulbi** (a small globe) · **contralateral proptosis or pseudoproptosis**|**lid retraction** · **high myopia** (a long globe) · **buphthalmos** · **facial asymmetry** · **contralateral enophthalmos**|\n|Rule|the eye is normal; **its neighbour or its lid is not**|same — **measure both eyes before believing either**|\n\n- **⚠️ HORNER SYNDROME PRODUCES APPARENT ENOPHTHALMOS, NEVER PROPTOSIS.** L22 lists its signs: **miosis · dilation lag · ptosis · apparent enophthalmos · anhydrosis · heterochromia** (congenital). The narrowed palpebral aperture is what does it.\n- **Lid retraction is the sign no orbital MASS produces** — a mass pushes, it does not retract. Proptosis **with** lid retraction is thyroid until proved otherwise.\n\nSrc: L10 slides 5, 9; L22 (Horner signs), cited only",
        "qs": [
          "opqb-t3-118"
        ]
      },
      {
        "id": "orb-5",
        "w": "high",
        "h": "Ophthalmoplegia and the dynamic signs — pulsation, bruit, and what a Valsalva proves",
        "body": "**Ophthalmoplegia:** defective ocular motility. **Five causes, and the first is mechanical.**\n\n- **An orbital MASS** — mechanical effect. *(A haematoma behaves as a mass — see orb-13.)*\n- **RESTRICTIVE MYOPATHY** — e.g. thyroid eye disease.\n- **Orbital MYOSITIS.**\n- **TETHERING** of muscle or tissue after an **orbital wall fracture**.\n- **OCULAR MOTOR NERVE involvement** — at the **cavernous sinus**, the **orbital fissures**, or the **posterior orbit**: carotid–cavernous fistula, **Tolosa–Hunt syndrome**, malignant lacrimal gland tumours.\n\n**Restrictive vs neurological:** the deck asks the question and the slide edge cuts off its answer.\n\n- **The answer is the FORCED DUCTION TEST:** grasp the anaesthetised globe and try to rotate it.\n- **Will not move — restrictive.** The muscle is tethered, as in thyroid eye disease or an entrapped blow-out.\n- **Moves freely — neurological.** The muscle is not tethered; the nerve is at fault.\n\n*The test name and its interpretation are supplied (not taken from the course material); the question itself is the deck’s own.*\n\n### The three dynamic signs\n\n|Sign|How elicited|What it means|\n|---|---|---|\n|**Induced/worsened proptosis**|**dependent head position · Valsalva · jugular compression** — all raise venous pressure|**orbital VENOUS anomalies (varices)**, or an infant with **capillary haemangioma**|\n|**PULSATION**|inspection|**an ARTERIOVENOUS communication**, or a **DEFECT IN THE ORBITAL ROOF** — those two only|\n|**BRUIT**|**bell of the stethoscope**|a **larger carotid–cavernous fistula**; **abolished by gently compressing the ipsilateral carotid in the neck**|\n\n- **⚠️ Pulsating exophthalmos is a two-item differential.** Graves disease, cavernous sinus thrombosis and orbital cellulitis all proptose and **none pulsates** — no arterial connection, intact roof.\n\nSrc: L10 slides 10, 11, 12, 19",
        "qs": [
          "opqb-t3-122"
        ]
      },
      {
        "id": "orb-6",
        "w": "must",
        "h": "Thyroid eye disease — the five ocular components and the three lid signs",
        "body": "**Graves disease:** the **commonest form of hyperthyroidism**; **autoimmune**, **IgG antibodies bind the TSH receptor** and stimulate hormone secretion. **More common in females.**\n\n- **Systemic clue that decides a vignette:** **weight loss DESPITE a good appetite**, increased bowel frequency, sweating, heat intolerance, nervousness, irritability, palpitations, weakness, fatigue; goitre, tremor, palmar erythema, warm sweaty skin; sinus tachycardia and arrhythmias. *Full endocrine account in `op-systemic`.*\n\n### a) Soft tissue involvement\n- **Symptoms:** **grittiness, red eyes, lacrimation, photophobia, puffy lids, retrobulbar discomfort.**\n- **Signs:** epibulbar hyperaemia **over a horizontal rectus**, periorbital oedema, chemosis, **fat prolapse into the lids**, **superior limbic keratoconjunctivitis**.\n\n### b) Lid retraction — the three named signs\n\n|Sign|What it is|\n|---|---|\n|**DALRYMPLE**|**moderate bilateral asymmetrical lid retraction**|\n|**KOCHER**|**severe bilateral lid retraction** — the staring look|\n|**VON GRAEFE**|**lid LAG ON DOWNGAZE**|\n\n### c) Proptosis\n- **Bilateral, with lid retraction**; severe proptosis causes **exposure keratopathy and corneal ulceration**.\n\n### d) Restrictive myopathy\n- **Double vision** and discomfort in some positions of gaze; **enlarged extraocular muscle BELLIES** on axial MRI.\n- **⚠️ The INFERIOR RECTUS is affected most often**, order **inferior → medial → superior → lateral rectus, obliques last** — mnemonic **I’M SLO** *(the ranking and mnemonic are not taken from the course material; the restrictive mechanism is the lecturer’s)*.\n- **⚠️ A TIGHT MUSCLE RESTRICTS THE OPPOSITE MOVEMENT.** A fibrosed **inferior** rectus is short, not weak, so the eye will not **ELEVATE** — mimicking a superior rectus **palsy**. Same trap as orb-14.\n\n### e) Optic neuropathy\n- **Impairment of central vision.** **Monitor regularly: visual acuity · colour desaturation · RAPD · visual fields.**\n\nSrc: L10 slides 15–21; L23 (commonest cause of exophthalmos; autoantibody-mediated muscle enlargement), cited only",
        "qs": [
          "opqb-t3-113",
          "opqb-t3-117",
          "opqb-t3-137",
          "opqb-t3-138"
        ]
      },
      {
        "id": "orb-7",
        "w": "high",
        "h": "Treatment of thyroid eye disease — split by activity, and one instruction comes first",
        "body": "### Mild disease\n- **STOP SMOKING** — printed first and larger than everything else on the slide.\n- **Lubricants**; topical anti-inflammatories (**steroids, NSAIDs**).\n- **Head elevation on three pillows during sleep**, to reduce periorbital oedema.\n- **Eyelid taping during sleep**, for mild exposure keratopathy.\n\n### Moderate–severe ACTIVE disease\n- **Systemic steroids** — oral, or **intravenous methylprednisolone for acute compressive optic neuropathy**.\n- **Orbital steroid injections**, occasionally.\n- **Low-dose fractionated radiotherapy.**\n- **ORBITAL WALL DECOMPRESSION** — for **compressive optic neuropathy** or residual proptosis.\n- **Strabismus and lid surgery** for squint and lid retraction, **later**.\n\n*Squint and lid surgery come last because the disease must burn out first. The deck splits treatment by activity without ever saying how activity is scored — no CAS, EUGOGO or NOSPECS anywhere in it.*\n\nSrc: L10 slides 22–23",
        "qs": []
      },
      {
        "id": "orb-8",
        "w": "must",
        "h": "Preseptal vs orbital cellulitis — one septum, four questions",
        "body": "**PRESEPTAL CELLULITIS:** infection of the subcutaneous tissues **ANTERIOR to the orbital septum**.\n\n- **Organisms:** **Staphylococcus aureus** and **Streptococcus pyogenes**.\n- **Causes:** **local skin trauma** (laceration, insect bite) · **spread from periocular infection** — acute hordeolum, dacryocystitis, conjunctivitis, sinusitis · **haematogenous spread** from the upper respiratory tract or middle ear.\n- **Presents as:** a **swollen, often firm, tender red eyelid**, which may be **very severe** — severity of the lid is not the discriminator.\n\n### ⚠️ The four findings that decide it — the deck states them as a contrast\n\n|  |**PRESEPTAL**|**ORBITAL**|\n|---|---|---|\n|**Proptosis**|**ABSENT**|**PRESENT**|\n|**Chemosis**|**ABSENT**|**PRESENT**|\n|**Visual acuity**|**UNIMPAIRED**|may be **reduced**, colour vision impaired|\n|**Pupillary reactions**|**UNIMPAIRED**|**RAPD** may appear|\n|**Ocular motility**|**UNIMPAIRED**|**PAINFUL OPHTHALMOPLEGIA**|\n|CT|opacification **anterior** to the septum|opacification **behind** it, ± both|\n\n- **⚠️ Fever, lid oedema and leucocytosis occur in BOTH** and separate nothing. **Open the swollen lid and test those five things** before calling anything preseptal.\n\nSrc: L10 slides 24, 25, 26",
        "qs": [
          "opqb-t3-134",
          "opqb-t3-124"
        ]
      },
      {
        "id": "orb-9",
        "w": "must",
        "h": "Bacterial orbital cellulitis — the child, the ethmoid, and the treatment order",
        "body": "**A serious infection of the soft tissues BEHIND the orbital septum. MORE COMMON IN CHILDREN.**\n\n- **Organisms:** **Streptococcus pneumoniae · Staphylococcus aureus · Streptococcus pyogenes · Haemophilus influenzae**.\n- **⚠️ SOURCE: THE PARANASAL SINUSES, ESPECIALLY THE ETHMOID** — not metastatic infection, malignancy or lid cellulitis.\n\n### Clinical picture\n- **Systemic:** **malaise and pyrexia, often marked.**\n- **Lids and conjunctiva:** tender, firm, erythematous, warm lids; **chemosis**, injection, sometimes subconjunctival haemorrhage.\n- **Orbit:** **proptosis** · **painful ophthalmoplegia** · **diplopia**.\n- **Nerve:** **reduced VA and impaired colour vision**, raising **optic nerve compression** · **RAPD**.\n- **Fundus:** **choroidal folds and optic disc swelling.**\n- *Proptosis directed **down and out** localises a subperiosteal abscess on the **medial (ethmoid)** wall — the globe moves away from the mass.*\n\n### Complications\n- **Ocular:** **optic neuropathy** · exposure keratopathy · **raised IOP** · endophthalmitis · **OCCLUSION OF THE CENTRAL RETINAL ARTERY OR VEIN** — this is how it blinds.\n- **Subperiosteal abscess — most frequently along the MEDIAL orbital wall.**\n- **Intracranial, uncommon but extremely serious:** **meningitis · brain abscess · CAVERNOUS SINUS THROMBOSIS**.\n\n### Investigations\n- **Tetanus status** if trauma · **white cell count** · **blood cultures** · **culture of nasal discharge** · **high-resolution CT of orbit, sinuses and brain** · **MRI** · **lumbar puncture if meningeal or cerebral signs develop**.\n\n### Treatment — the order is the question\n\n|Step|Detail|\n|---|---|\n|**1 Admit**|**hospital admission is MANDATORY**|\n|**2 IV ANTIBIOTICS — first line**|**aerobe and anaerobe cover** until culture and sensitivity return|\n|**3 Duration**|IV **until apyrexial 4 DAYS**, then **1–3 WEEKS oral**|\n|**4 Monitor**|**optic nerve function**|\n|**5 Surgery**|**abscess drainage considered EARLY**; **orbital decompression** for severe nerve compression|\n\n- **⚠️ DRAINAGE IS CONSIDERED EARLY — NOT after a 10–15 day trial of antibiotics.** It is driven by CT and optic nerve function, and it is *considered*, never automatic.\n- **⚠️ Steroids are not first line here** — this is bacterial. Steroids belong to non-infective orbital inflammation (orb-15).\n\nSrc: L10 slides 26, 27, 28, 29",
        "qs": [
          "opqb-t3-124",
          "opqb-t3-125",
          "opqb-t3-126",
          "opqb-t3-129",
          "opqb-t3-135",
          "opqb-t3-136"
        ]
      },
      {
        "id": "orb-10",
        "w": "must",
        "h": "Cavernous sinus thrombosis — the intracranial complication that kills",
        "body": "**Clotting within the cavernous sinus**, usually from **infection: sinusitis, orbital or preseptal cellulitis, or otitis.**\n\n- **⚠️ MORTALITY: 20 % TREATED, UP TO 100 % UNTREATED.**\n- **Onset:** **rapid** — severe headache, malaise, nausea and vomiting.\n- **⚠️ Unilateral or OFTEN BILATERAL proptosis** — the two sinuses communicate, so crossing to the other eye is the signature.\n- **Chemosis**, and **congestion of the facial, conjunctival and retinal veins**.\n- **Reduced vision**, and **ocular motility signs from cranial nerves III to VI** — every motor nerve to the eye runs in or beside the sinus.\n- **Diagnosis:** **MRI and MR VENOGRAPHY.**\n- **Treatment:** **intravenous antibiotics**, sometimes **surgical drainage**.\n\n*A febrile child with orbital cellulitis who develops painful movements, marked chemosis and falling vision is at risk of this — it is the feared complication, not retinal detachment or conjunctivitis.*\n\nSrc: L10 slides 27, 32",
        "qs": [
          "opqb-t3-131"
        ]
      },
      {
        "id": "orb-11",
        "w": "must",
        "h": "Carotid–cavernous fistula — direct and indirect, and the classic triad",
        "body": "**An arteriovenous fistula between the carotid artery and the cavernous sinus**, raising venous pressure in the sinus **and in everything draining into it**.\n\n|  |**DIRECT**|**INDIRECT (‘dural shunt’)**|\n|---|---|---|\n|Flow|**HIGH-FLOW SHUNT**|low flow|\n|Anatomy|**directly** through a **defect in the intracavernous internal carotid wall**|the intracavernous ICA **stays INTACT**; blood arrives via **meningeal branches of the external or internal carotid**|\n|Cause|**TRAUMA — 75 %**|—|\n|Onset|**days to weeks after head injury**|**gradual onset of redness**|\n|Features|florid|**SUBTLER — may be overlooked**|\n\n### Direct CCF — the classic triad\n- **PULSATILE PROPTOSIS · CONJUNCTIVAL CHEMOSIS · A WHOOSHING NOISE IN THE HEAD.**\n- **Marked epibulbar vascular dilatation**; visual affection.\n- **⚠️ Bruit AND thrill, both ABOLISHED BY IPSILATERAL CAROTID COMPRESSION** — the bedside manoeuvre that proves it.\n- **Increased IOP**, from **raised episcleral venous pressure**.\n- **Anterior segment ischaemia:** corneal epithelial oedema, aqueous cells and flare; severe cases **iris atrophy, cataract, rubeosis iridis**.\n- **Ptosis** from **third nerve involvement**; **optic disc swelling**.\n\n### Indirect CCF\n- **Exaggerated ocular pulsation**, detected on **slit lamp applanation tonometry**.\n- **‘CORKSCREW’ epibulbar vessels.**\n- **Raised IOP, often bilateral but higher on the fistula side.**\n\n### Investigations\n- **CT/MRI: prominence of the SUPERIOR OPHTHALMIC VEIN**, diffuse extraocular muscle enlargement.\n- **Orbital Doppler** — abnormal flow patterns.\n- **Definitive: selective catheter DIGITAL SUBTRACTION ANGIOGRAPHY.**\n\n- **⚠️ CREPITUS ON LID PALPATION IS NOT A CCF SIGN** — crackling under the skin is **surgical emphysema from a fractured orbital wall** (orb-14), a different injury from the same blow.\n\nSrc: L10 slides 33, 34, 35, 36",
        "qs": [
          "opqb-t3-122",
          "opqb-t3-123"
        ]
      }
    ]
  },
  "op-orbit-mass": {
    "intro": "Sorted by what the examiner contrasts: the two infected-globe look-alikes, three orbital emergencies, the tumours by age and speed, and the three socket operations.",
    "sections": [
      {
        "id": "orb-12",
        "w": "must",
        "h": "Endophthalmitis vs panophthalmitis vs cellulitis — two membranes decide everything",
        "body": "**⚠️ THE WHOLE GROUP IS ONE QUESTION: WHICH BOUNDARY HAS THE INFECTION CROSSED — the orbital SEPTUM, or the SCLERA?**\n\n|Where it sits|Condition|**Proptosis**|**Motility**|**Vision**|\n|---|---|---|---|---|\n|Anterior to the **orbital septum**|**Preseptal cellulitis**|**No**|Normal|**Normal**|\n|**Behind the septum**, outside the globe|**Orbital cellulitis**|**Yes**|**Painful ophthalmoplegia**|usually preserved; reduced only if the nerve is compressed|\n|**Inside the sclera** only|**Endophthalmitis**|**No**|**Normal**|**Markedly reduced**|\n|Inside the sclera **and through it**|**Panophthalmitis**|**Yes**|**LIMITED**|**Markedly reduced, often to no light perception**|\n\n- **⚠️ THE EQUATION: PANOPHTHALMITIS = ENDOPHTHALMITIS + MOTILITY LIMITATION.** Nothing inside the globe can restrict an extraocular muscle, so restricted movement means the infection has left the eye *(the panophthalmitis entity and this map are not in the course material — no cached deck defines it; `L37) Red Eye` names the word once, among Stevens–Johnson complications)*.\n- **⚠️ VISION — not pain, redness or swelling — separates ORBITAL CELLULITIS from PANOPHTHALMITIS**, because all three occur in both. Cellulitis inflames tissue *around* the globe; panophthalmitis destroys the retina.\n\n### Endophthalmitis, for the contrast\n- **Most serious vision-threatening complication of cataract surgery**; **24–72 h acute**, or weeks (delayed).\n- **Organisms:** **CoNS (Staphylococcus epidermidis commonest)**, S. aureus, streptococci.\n- **Signs:** **pain, redness, reduced VA, HYPOPYON, yellowish vitreous haze** — an absent red reflex is that haze seen from the front. **No proptosis, no lid swelling, no restricted movement.**\n- **Treatment:** urgent **vitreous tap + intravitreal vancomycin and ceftazidime**.\n- **⚠️ Pain and falling vision after day one of cataract surgery are never “usual” inflammation** — expected inflammation is mild and improving by day three.\n\nSrc: L10 slides 24, 26; L18 (endophthalmitis after cataract surgery), cited only; panophthalmitis supplied and tagged above",
        "qs": [
          "opqb-t3-116",
          "opqb-t3-119",
          "opqb-t3-128"
        ]
      },
      {
        "id": "orb-13",
        "w": "must",
        "h": "Retrobulbar haemorrhage — an orbital compartment syndrome, and the pupil goes big",
        "body": "*Supplied entity: `L10` slide 6 names “retrobulbar hge” once, among causes of proptosis, and no cached deck describes it — all below but the orbital mechanics is not taken from the course material.*\n\n**Orbital compartment syndrome:** the orbit is a bony cone sealed in front by septum and globe, so blood behind the eye cannot escape and pressure rises.\n\n- **Causes:** blunt or penetrating trauma · **retrobulbar anaesthetic injection** · orbital or lid surgery.\n\n|Sign|Why|\n|---|---|\n|**Proptosis**|the globe is the only mobile wall — **L10 slide 6’s mechanism**|\n|**Chemosis**|conjunctival venous and lymphatic drainage obstructed|\n|**TIGHT, tense lids**|septum under tension; lids will not evert, globe will not retropulse — **the most specific sign**|\n|**Raised IOP**|orbital pressure transmitted to the globe|\n|**Ophthalmoplegia**|a haematoma **behaves as an orbital mass** — **L10 slide 10 lists that cause first**|\n|**Falling vision**|**optic nerve and central retinal artery perfusion failing — THE EMERGENCY**|\n|**Mid-dilated pupil + RAPD**|optic nerve ischaemia|\n\n- **⚠️ MIOSIS NEVER OCCURS — the pupil goes LARGE.** L22’s causes of miosis are parasympathomimetics, **Horner’s**, pontine haemorrhage, acute iridocyclitis and trauma; orbital pressure is not among them. A small pupil in an injured eye means **traumatic iritis** or a ruptured globe.\n- **⚠️ Treatment is IMMEDIATE LATERAL CANTHOTOMY AND CANTHOLYSIS**, at the bedside before imaging — **vision is lost permanently within 60–90 minutes**.\n\n*Defect note: one question keys ophthalmoplegia as expected while offering chemosis as a distractor, and the same bank elsewhere lists chemosis among this condition’s signs. Both correct; keyed as printed.*\n\nSrc: L10 slides 4, 6, 10 (orbital mechanics only); L22 (miosis causes), cited only; the entity, its signs and its management are supplied and tagged",
        "qs": [
          "opqb-t3-121",
          "opqb-t3-132"
        ]
      },
      {
        "id": "orb-14",
        "w": "must",
        "h": "Blow-out fracture of the orbital floor — earliest sign, entrapped muscle, late sign",
        "body": "*`L25) Trauma I`’s material, written here because two questions filed in this chapter test it; the full trauma account is `op-trauma`’s.*\n\n- **History:** blunt trauma — **FIST, TENNIS BALL**.\n- **Presentation:** **ecchymosis, oedema, ± SUBCUTANEOUS EMPHYSEMA**, subconjunctival haemorrhage.\n\n### ⚠️ Periorbital (surgical) emphysema — the EARLIEST sign\n- **Why immediate:** the floor is the **maxillary sinus roof**, the medial wall the **lamina papyracea** over the ethmoid — the moment bone breaks, orbit and sinus are one cavity.\n- **Felt as crepitus**, worst on **blowing the nose**. The deck gives it **its own slide, immediately BEFORE the blow-out slides**.\n\n### Diplopia\n- **In BOTH UPGAZE AND DOWNGAZE.**\n- **RESTRICTIVE motility from MECHANICAL ENTRAPMENT of the INFERIOR OBLIQUE or INFERIOR RECTUS**, or adjacent connective tissue and fat.\n- **⚠️ An entrapped INFERIOR rectus limits ELEVATION**, so diplopia is worst looking **up** — a tethered muscle is not weak, and the eye cannot be pulled **away** from it. *Same trap as the fibrosed inferior rectus in orb-6.*\n\n### Other signs\n- **INFRAORBITAL NERVE ANAESTHESIA:** **lower lid, cheek, side of nose, upper lip, upper teeth and gums** — if the fracture involves the infraorbital canal.\n- **ENOPHTHALMOS — SEVERE CASES, AND LATE:** early oedema and haematoma push the eye forward and mask the volume lost into the sinus.\n- **± ocular damage.**\n\n### CT — CORONAL section\n- **Fracture of the floor ± another wall** · **tissue entrapment — the TEAR DROP SIGN** · **± surgical emphysema**.\n\n### Management\n- **REFRAIN FROM BLOWING THE NOSE**, preferably from coughing or sneezing — **the channel that admits air admits sinus organisms**.\n- **Systemic antibiotics** · **surgical intervention when required**.\n\nSrc: L25 slides 18–24, cited only (this deck’s words are counted by `op-trauma`); L10 slide 5 (enophthalmos from floor fracture with fat prolapse)",
        "qs": [
          "opqb-t3-130",
          "opqb-t3-133"
        ]
      },
      {
        "id": "orb-15",
        "w": "high",
        "h": "The other three orbital inflammations — mucormycosis, dacryoadenitis, pseudotumour",
        "body": "### Rhino-orbital MUCORMYCOSIS\n- **Rare, aggressive, often FATAL**; fungi of the family **Mucoraceae**.\n- **⚠️ THE HOST IS THE DIAGNOSIS: DIABETIC KETOACIDOSIS or immunosuppression.**\n- **Mechanism:** **hyphae invade blood vessels → occlusive vasculitis → infarction of orbital tissues**.\n- **⚠️ Infarction on septic necrosis gives the classic BLACK ESCHAR**, and eyelid necrosis.\n- **Treatment:** **correct the immune status** · **IV antifungal** · **daily packing and irrigation with antifungal** · **wide excision of necrotic tissue** · **exenteration may be required** · **hyperbaric oxygen**.\n\n### Acute DACRYOADENITIS\n- **Idiopathic**, or **viral — mumps, Epstein–Barr, cytomegalovirus**.\n- **Rapid onset of discomfort over the gland.**\n- **⚠️ Swelling of the LATERAL lid over the palpebral lobe gives the characteristic S-SHAPED PTOSIS.**\n- Orbital lobe enlargement gives slight **downward and inward dystopia**.\n\n### Idiopathic orbital inflammatory disease (orbital PSEUDOTUMOUR)\n- **Non-neoplastic, non-infective, SPACE-OCCUPYING orbital infiltration with inflammatory features** — it mimics both a tumour and an infection.\n- **Pathology:** **pleomorphic inflammatory cellular infiltration, then reactive fibrosis**.\n- **BIOPSY IS USUALLY NEEDED** — that is what separates it from both look-alikes.\n- **Treatment ladder:** **observation → NSAIDs → ORAL STEROIDS → radiotherapy → surgical debulking.**\n\n*This is the entity steroids are for. An infected orbit gets antibiotics.*\n\nSrc: L10 slides 30, 31, 37",
        "qs": []
      },
      {
        "id": "orb-16",
        "w": "high",
        "h": "Orbital tumours — sorted by age, by speed, and by what the CT does to bone",
        "body": "|Tumour|Who|Signature|CT / management|\n|---|---|---|---|\n|**DERMOID cyst**|—|**a CHORISTOMA** — normal tissue in an abnormal location. **Painless nodule, SUPEROTEMPORAL** (occasionally superonasal)|**CT to exclude bony involvement**; **excision**|\n|**Primary orbital VARICES**|—|**venous–lymphatic malformation**; **thin-walled distensible LOW-FLOW** plexus; **hamartomatous**|**REVERSIBLE PROPTOSIS** on dependent position, Valsalva, jugular compression (orb-5)|\n|**CAPILLARY haemangioma**|**CHILDHOOD**|**COMMONEST ORBITAL AND PERIORBITAL TUMOUR IN CHILDHOOD.** Rapid growth then resolution — **30 % by age 3, ~75 % by age 7**|**Treat principally for AMBLYOPIA**: oral **PROPRANOLOL**, intralesional **triamcinolone**|\n|**CAVERNOUS haemangioma**|**ADULTS**|**COMMONEST ORBITAL TUMOUR IN ADULTS.** **Slowly progressive UNILATERAL proptosis**; **well encapsulated**|**surgical excision**|\n|**PLEOMORPHIC lacrimal gland ADENOMA**|—|**commonest EPITHELIAL lacrimal gland tumour**; benign mixed-cell, from ducts and secretory elements incl. myoepithelial cells. **PAINLESS, SLOW, OVER A YEAR**; superolateral swelling, **S-shaped ptosis**, dystopia|**CT: smooth round/oval, INDENTATION but NO bony destruction**|\n|**Lacrimal gland CARCINOMA**|—|rare, **high morbidity and mortality**. **ADENOID CYSTIC 50 %**, then pleomorphic adenocarcinoma, mucoepidermoid, squamous. **Proptosis of RAPID ONSET**|**CT: BONY EROSION**|\n|**Optic nerve GLIOMA**|**CHILDREN, median 6.5 y**|**~30 % have NEUROFIBROMATOSIS TYPE I**|**CT: FUSIFORM ENLARGEMENT of the optic nerve**|\n|**Optic nerve sheath MENINGIOMA**|adults|from **arachnoid villi meningothelial cells**; commoner in **NF2**. **⚠️ VISUAL LOSS BEFORE PROPTOSIS**|**TRIAD: progressive visual loss + optic atrophy + OPTICOCILIARY SHUNT VESSELS.** Prognosis for life good|\n|**RHABDOMYOSARCOMA**|**CHILDREN**|**commonest soft tissue sarcoma of childhood** and **commonest PRIMARY ORBITAL MALIGNANCY in children**, still rare. From **undifferentiated mesenchymal cells**. **⚠️ RAPID UNILATERAL PROPTOSIS MIMICKING ORBITAL CELLULITIS**|**CT: poorly defined homogeneous mass, adjacent BONY DESTRUCTION**; **incisional biopsy**|\n\n- **⚠️ Speed:** slow and painless = benign (adenoma, cavernous haemangioma); **rapid = carcinoma or rhabdomyosarcoma**. **Bone: indentation = benign, EROSION or DESTRUCTION = malignant.**\n- **⚠️ A child’s proptosis that does not settle on antibiotics is a rhabdomyosarcoma until imaged and biopsied.**\n\nSrc: L10 slides 38, 39, 40, 41, 42, 43, 44, 45, 46",
        "qs": []
      },
      {
        "id": "orb-17",
        "w": "must",
        "h": "The anophthalmic socket — three operations, three different amounts removed",
        "body": "**The deck names all three and defines none** — slide 47 is the three words. **The definitions below are not taken from the course material.**\n\n|Operation|What is removed|What is left|\n|---|---|---|\n|**EVISCERATION**|**all the INNER CONTENTS of the eyeball, including the UVEAL tissue**|**the scleral shell** (and usually the muscles attached to it)|\n|**ENUCLEATION**|**the ENTIRE EYEBALL** — **the optic nerve is cut and the whole globe removed as a whole**|extraocular muscles, orbital fat, periorbita|\n|**EXENTERATION**|**ALL THE ORBITAL CONTENTS** — globe, muscles, fat, and often the lids|bare bony orbit|\n\n- **⚠️ Read the option list for the boundary word:** *inner contents* = evisceration · *entire eyeball* = enucleation · *orbital contents* = exenteration. Both evisceration questions are answered by which of those three phrases appears.\n- **Enucleation is the operation for intraocular malignancy** — the globe must leave intact, because eviscerating a tumour spreads it.\n- **Exenteration** appears in this deck as the last resort in **rhino-orbital mucormycosis** (orb-15).\n\nSrc: L10 slide 47 (the three names); the definitions are supplied and tagged",
        "qs": [
          "opqb-t3-114",
          "opqb-t3-127"
        ]
      },
      {
        "id": "orb-18",
        "w": "know",
        "h": "The acutely inflamed orbit — the deck’s own differential, in five groups",
        "body": "|Group|Causes|\n|---|---|\n|**Infection**|**bacterial orbital cellulitis** · **fungal orbital infection** · **dacryocystitis** · **infective dacryoadenitis**|\n|**Vascular**|**acute orbital haemorrhage** · **cavernous sinus thrombosis** · **carotid–cavernous fistula**|\n|**Neoplasia**|**rapidly progressive retinoblastoma** · **lacrimal gland tumour** · metastatic lesion with inflammation, **lymphoma**, Waldenström macroglobulinaemia · in children **rhabdomyosarcoma, leukaemia, lymphangioma, neuroblastoma**|\n|**Endocrine**|**thyroid eye disease of RAPID ONSET**|\n|**Non-neoplastic inflammation**|**idiopathic orbital inflammatory disease** · **Tolosa–Hunt syndrome** · **orbital myositis** · acute allergic conjunctivitis with lid swelling · **herpes zoster ophthalmicus** · herpes simplex skin rash · **sarcoidosis** · vasculitides (**granulomatosis with polyangiitis**, polyarteritis nodosa) · **scleritis, including posterior scleritis** · **ruptured dermoid cyst**|\n\n- **⚠️ A hot orbit is not automatically an infected orbit.** Four of the five groups are not infections, and two of them — **a rapid thyroid eye disease** and **a rhabdomyosarcoma** — are the ones actually mistaken for cellulitis in practice.\n\nSrc: L10 slide 48 (Table 4.1)",
        "qs": []
      }
    ]
  }
};
