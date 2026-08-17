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
        "body": "**The rule (lecturer-flagged HIGH YIELD):** anisocoria **greater than 1 mm** is assessed in **both very bright and very dim lighting**.\n\n**Why both:** the abnormal pupil is the one that **fails to do its job** — so you unmask it in the light condition that demands that job.\n\n|Anisocoria worse in|The abnormal pupil is the|It failed to|Defective system|Classic cause|\n|---|---|---|---|---|\n|**DIM light**|**small** one|**dilate**|**Sympathetic**|**Horner syndrome**|\n|**BRIGHT light**|**large** one|**constrict**|**Parasympathetic**|**Third nerve palsy**, or **pupillary trauma**|\n\n### Why, in one line each\n- **Dilator pupillae:** **sympathetic**; its job is darkness. Denervate it and the pupil cannot enlarge, so the gap widens as the room darkens.\n- **Sphincter pupillae:** **parasympathetic, CN III**; its job is brightness. Denervate it and the pupil cannot shrink, so the gap widens as the room lightens.\n\n### Horner syndrome — the associated signs\n- **Miosis:** the cardinal sign — unopposed sphincter.\n- **Dilation lag:** the denervated pupil dilates **slowly** in darkness; the most specific bedside sign.\n- **Mild ptosis:** partial, never complete — **Muller muscle** (superior tarsal) is the sympathetically supplied lid elevator and contributes only 1–2 mm *(mechanism not taken from the course material)*.\n- **Horner triad:** apparent enophthalmos · anhydrosis · heterochromia (the last in congenital cases only).\n\n*Motility is normal and there is no RAPD in Horner — which is what separates it from a third nerve palsy at the bedside.*\n\n*The Horner sign list is printed on `L22) Pupil and Visual pathway`, which is `op-neuro`’s deck — cited only, not counted against this chapter.*\n\nSrc: L3,4 sl.30; L22 (cited only)",
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
        "body": "**What it detects:** a **relative afferent pupillary defect (RAPD)**, the **Marcus Gunn pupil** — asymmetric disease of the **optic nerve** or extensive retina.\n\n**How to read it — watch the pupil the light is currently ON:**\n\n|Light swung onto|Normal|RAPD present in that eye|\n|---|---|---|\n|the **good** eye|**constricts**|constricts|\n|the **bad** eye|**constricts**|**DILATES** — both pupils together|\n\n### Why it dilates rather than staying still\nPupil size at any instant reflects the **total light signal the brain is receiving**, not which eye it came from. Swing to the damaged nerve and that total **falls**, so both pupils **release** from the constriction the good eye had driven.\n\n- **The side of the lesion:** the eye the light is on **when both pupils dilate**.\n- **It is RELATIVE:** the test compares the two eyes, so **bilateral symmetrical** disease gives no RAPD.\n- **A media opacity never causes one** — a dense cataract dims the image but the nerve still transmits the light.\n\n### Light–near dissociation\n**Why it survives:** the near reflex outlives an afferent light defect — it is driven **cortically**, by the intention to look at something close, not by light on the retina.\n\n- **So in an RAPD:** the **near reflex remains normal** while the direct and consensual light reflexes on that side are impaired.\n\n*The named entities are on `L22) Pupil and Visual pathway` — **Argyll Robertson** (pretectal, small pupils, neurosyphilis; also DM, alcoholism, encephalitis) and **Dorsal Midbrain Syndrome** (pineal tumour, stroke, MS; with upward gaze paralysis, convergence-retraction nystagmus, lid retraction). Cited only, not counted.*\n\nSrc: L3,4 sl.32, 34; L22 (cited only)",
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
        "body": "|Feature|**Applanation**|**Indentation**|\n|---|---|---|\n|**Named instrument**|**Goldmann** applanation tonometer (slit-lamp mounted); the hand-held version is the Perkins|**Schiotz** tonometer|\n|**Principle**|**flattens** a fixed area of cornea and measures the force needed|**indents** the cornea with a **known weight** and measures how far the plunger sinks|\n|**Read from**|the **blue-light mires** seen through the **bi-prism**, aligned by the adjustment knob|a **scale**, deflected by the plunger|\n|**Parts named on the slide**|bi-prism, mobile feeder arm, control weight and housing, adjustment knob|plunger, weight, scale|\n\n### ⚠️ The Schiotz scale runs backwards\n**⚠️ Schiøtz is inverse:** a **LOW scale reading** means a **HARD eye** and a **HIGH IOP**. The harder the globe, the **less** the plunger sinks, so the **smaller** the deflection.\n\n- **The trap:** reading the scale as though it were the pressure inverts every answer *(the direction of the scale is not stated on the slide — not taken from the course material)*.\n\n- **Both need topical anaesthetic**; both touch the cornea, so neither is done through a suspected perforation *(not taken from the course material)*.\n\nSrc: L3,4 sl.38–40",
        "qs": []
      },
      {
        "id": "pup-7",
        "w": "must",
        "h": "The six extraocular muscles — action and nerve supply",
        "body": "- **Four recti:** superior, inferior, medial, lateral.\n- **Two obliques:** superior, inferior.\n- **The trochlea:** the superior oblique runs forward to it at the superomedial rim, then turns sharply back to the upper posterior globe — so it pulls from **in front and medially**.\n\n**The HIGH-YIELD grid** — double-flagged by the lecturer:\n\n|Muscle|Nerve|Action|\n|---|---|---|\n|**Medial rectus**|**III**|**adduction**|\n|**Lateral rectus**|**VI**|**abduction**|\n|**Superior rectus**|**III**|**elevation** — mainly **in ABduction**|\n|**Inferior rectus**|**III**|**depression** — mainly **in ABduction**|\n|**Superior oblique**|**IV**|**depression** — mainly **in ADduction**|\n|**Inferior oblique**|**III**|**elevation** — mainly **in ADduction**|\n\n### Two rules that compress the whole grid\n- **Nerve supply — LR₆ SO₄, everything else III.** The third nerve supplies all four remaining muscles, and separately the levator and the pupil.\n- **Action — recti act vertically in ABduction, obliques in ADduction.** Get that pairing round the right way and every cardinal-position question follows.\n\n*Why: a muscle acts on the axis it most nearly parallels, and turning the eye in or out swings that axis into or out of line with each pull (mechanism not taken from the course material).*\n\nSrc: L3,4 sl.42–43",
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
        "body": "**Normal red reflex:** light reflected off the fundus, seen through the ophthalmoscope, **uninterrupted by shadows**. An intact reflex is evidence that the **cornea, anterior chamber, lens and vitreous are all clear** and are not the cause of reduced vision.\n\n**The colour grid — lecturer-flagged HIGH YIELD across two slides:**\n\n|Reflex|Meaning|Causes|\n|---|---|---|\n|**Normal red**|clear media|—|\n|**Black shadows within a red reflex**|**opacity in the media**, silhouetted|**corneal scar · cataract · vitreous haemorrhage**; **best seen dilated**|\n|**ABSENT reflex**|media totally opaque|**mature cataract** · **dense vitreous haemorrhage** (a **black reflex**)|\n|**GREY reflex**|—|**Retinal detachment**|\n|**YELLOW / WHITE reflex**|**leukocoria**|**Retinoblastoma** · **pus in the vitreous (endophthalmitis)**|\n\n### The one that must never be missed\n**⚠️ Leukocoria:** a white or yellow reflex in a child is **retinoblastoma until proved otherwise**. It is the reason the red reflex is checked in every paediatric eye examination.\n\n### Pupil colour, the same question asked without an ophthalmoscope\n- **Jet black:** clear media — the **newborn**, and the **aphakic** eye after the lens has been removed. A pupil *regains* its black when the opacity is taken out.\n- **Greyish:** the ageing lens — nuclear sclerosis or immature senile cataract.\n- **White (leukocoria):** mature cataract.\n\n*Full lens and cataract detail is slide 20 and belongs to `op-va`.*\n\nSrc: L3,4 sl.49–52; sl.20 (`op-va`’s, cited only)",
        "qs": [
          "opqb-t1-10",
          "opqb-t1-48"
        ]
      },
      {
        "id": "pup-10",
        "w": "high",
        "h": "Direct ophthalmoscopy and reading the fundus",
        "body": "**Why dilate:** pharmacological dilatation greatly enlarges the field of retina visible — an undilated pupil gives a narrow cone, a dilated one a wide one.\n\n### The method, numbered as the deck numbers it\n1. **Patient seated, room lights dimmed;** ask them to **fix on a point on the wall straight ahead** and not move the eyes.\n2. **Aperture wheel to the large round white light; focusing wheel to zero.**\n3. **Start about 1 foot away.** **Right eye to right eye, ophthalmoscope in the right hand.** Look straight down the visual axis and you will see the **red reflex**.\n4. **Rest your free hand on the patient’s forehead** to steady yourself.\n5. **Approach slowly at about 15° temporal** to the visual axis, keeping the pupil in view.\n6. **Dial to focus.** When a vessel appears, **follow it to the optic disc, which lies NASAL to the centre of the retina** — the branching of the vessels points like arrows towards the disc.\n7. **Examine the optic disc, the retinal vessels, and the macula.**\n8. **Repeat on the left — left hand, left eye.**\n\n### The fundus landmarks\n**What to name:** optic disc · optic cup · retinal artery · retinal vein · macula · fovea.\n\n### Two disc signs the deck labels but does not define\n- **Cup/disc ratio:** normal roughly **0.3–0.5**; **above 0.6 is suspicious**.\n- **Asymmetry:** an inter-eye difference above **0.2** is suspicious for glaucoma whatever the absolute figures — the two discs of one person develop together and should match. So **0.6 against 0.2** is abnormal on asymmetry alone *(not taken from the course material)*.\n- **Temporal myopic crescent:** a pale, sharply bordered arc at the **temporal** disc margin — bare **sclera**, exposed as axial elongation drags the RPE and choroid off the disc.\n- **What it marks:** **myopia**, and an eye at raised risk of retinal tears and detachment *(not taken from the course material)*.\n\nSrc: L3,4 sl.53–58",
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
        "body": "**Proptosis:** forward protrusion of the globe. **Only two mechanisms.**\n\n- **The globe is PUSHED forward** — retrobulbar haemorrhage, tumour, and every other space-occupying orbital lesion.\n- **The bony orbit is SHALLOW** — **premature closure of the sutures**, e.g. **Crouzon syndrome**.\n\n### ⚠️ Five different \"commonest\" facts, and swapping two words changes the answer\n\n|Question|Answer|\n|---|---|\n|Commonest cause of proptosis **in ADULTS**, unilateral **or** bilateral|**THYROID EYE DISEASE**|\n|Commonest cause of proptosis **in CHILDREN**|**ORBITAL CELLULITIS** *(as a \"commonest\" claim, not in course material — L10 says only that orbital cellulitis is \"more common in children\")*|\n|Commonest **orbital tumour in ADULTS**|**CAVERNOUS haemangioma**|\n|Commonest tumour of the orbit and periorbital area **in CHILDHOOD**|**CAPILLARY haemangioma**|\n|Commonest **primary orbital MALIGNANCY in children**|**RHABDOMYOSARCOMA**|\n\n- **⚠️ Laterality proves nothing:** unilateral does NOT argue against thyroid. L23 gives it as commonest cause of **unilateral or bilateral** exophthalmos, and L10 illustrates **asymmetrical** lid retraction.\n\n### Direction and measurement\n- **AXIAL (straight forward):** an intraconal lesion, or thyroid eye disease.\n- **ECCENTRIC / dystopic:** an extraconal mass — **the globe moves AWAY from it**, so direction names the quadrant.\n- **Measured by:** **visualization from above** · **Hertel exophthalmometer**.\n- **⚠️ THE NUMBERS: over 20 mm is proptosis; a difference of 2–3 mm or more between the eyes is suspicious regardless of the absolute value** *(the slide is cut off after \"regardless of the\")*.\n\nSrc: L10 slides 6, 7 (figure only), 8, 26, 40, 41, 46; L23 (thyroid exophthalmos), cited only",
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
        "body": "**Enophthalmos:** the globe is **retracted backwards**.\n\n- **Commonest cause — FRACTURE OF THE ORBITAL FLOOR with orbital fat prolapse.** Also **radiotherapy** and **sclerosing lesions**.\n\n### The two pseudos — a normal globe in an abnormal setting\n\n|  |**PSEUDOenophthalmos**|**PSEUDOproptosis**|\n|---|---|---|\n|Causes|**ptosis** · **phthisis bulbi** (a small globe) · **contralateral proptosis or pseudoproptosis**|**lid retraction** · **high myopia** (a long globe) · **buphthalmos** · **facial asymmetry** · **contralateral enophthalmos**|\n|Rule|the eye is normal; **its neighbour or its lid is not**|same — **measure both eyes before believing either**|\n\n- **⚠️ Horner never proptoses:** it produces **APPARENT ENOPHTHALMOS**. L22 lists its signs: **miosis · dilation lag · ptosis · apparent enophthalmos · anhydrosis · heterochromia** (congenital). The narrowed palpebral aperture is what does it.\n- **Lid retraction:** the one sign no orbital MASS produces — a mass pushes, it does not retract. Proptosis **with** lid retraction is thyroid until proved otherwise.\n\nSrc: L10 slides 5, 9; L22 (Horner signs), cited only",
        "qs": [
          "opqb-t3-118"
        ]
      },
      {
        "id": "orb-5",
        "w": "high",
        "h": "Ophthalmoplegia and the dynamic signs — pulsation, bruit, and what a Valsalva proves",
        "body": "**Ophthalmoplegia:** defective ocular motility. **Five causes, and the first is mechanical.**\n\n- **An orbital MASS** — mechanical effect. *(A haematoma behaves as a mass — see orb-13.)*\n- **RESTRICTIVE MYOPATHY** — e.g. thyroid eye disease.\n- **Orbital MYOSITIS.**\n- **TETHERING** of muscle or tissue after an **orbital wall fracture**.\n- **OCULAR MOTOR NERVE involvement** — at the **cavernous sinus**, the **orbital fissures**, or the **posterior orbit**: carotid–cavernous fistula, **Tolosa–Hunt syndrome**, malignant lacrimal gland tumours.\n\n**Restrictive vs neurological:** the deck asks the question and the slide edge cuts off its answer.\n\n- **The answer is the FORCED DUCTION TEST:** grasp the anaesthetised globe and try to rotate it.\n- **Will not move — restrictive.** The muscle is tethered, as in thyroid eye disease or an entrapped blow-out.\n- **Moves freely — neurological.** The muscle is not tethered; the nerve is at fault.\n\n*The test name and its interpretation are supplied (not taken from the course material); the question itself is the deck’s own.*\n\n### The three dynamic signs\n\n|Sign|How elicited|What it means|\n|---|---|---|\n|**Induced/worsened proptosis**|**dependent head position · Valsalva · jugular compression** — all raise venous pressure|**orbital VENOUS anomalies (varices)**, or an infant with **capillary haemangioma**|\n|**PULSATION**|inspection|**an ARTERIOVENOUS communication**, or a **DEFECT IN THE ORBITAL ROOF** — those two only|\n|**BRUIT**|**bell of the stethoscope**|a **larger carotid–cavernous fistula**; **abolished by gently compressing the ipsilateral carotid in the neck**|\n\n- **⚠️ Pulsating exophthalmos:** a two-item differential. Graves disease, cavernous sinus thrombosis and orbital cellulitis all proptose and **none pulsates** — no arterial connection, intact roof.\n\nSrc: L10 slides 10, 11, 12, 19",
        "qs": [
          "opqb-t3-122"
        ]
      },
      {
        "id": "orb-6",
        "w": "must",
        "h": "Thyroid eye disease — the five ocular components and the three lid signs",
        "body": "**Graves disease:** the **commonest form of hyperthyroidism**; **autoimmune**, **IgG antibodies bind the TSH receptor** and stimulate hormone secretion. **More common in females.**\n\n- **Systemic clue that decides a vignette:** **weight loss DESPITE a good appetite**, increased bowel frequency, sweating, heat intolerance, nervousness, irritability, palpitations, weakness, fatigue; goitre, tremor, palmar erythema, warm sweaty skin; sinus tachycardia and arrhythmias. *Full endocrine account in `op-systemic`.*\n\n### a) Soft tissue involvement\n- **Symptoms:** **grittiness, red eyes, lacrimation, photophobia, puffy lids, retrobulbar discomfort.**\n- **Signs:** epibulbar hyperaemia **over a horizontal rectus**, periorbital oedema, chemosis, **fat prolapse into the lids**, **superior limbic keratoconjunctivitis**.\n\n### b) Lid retraction — the three named signs\n\n|Sign|What it is|\n|---|---|\n|**DALRYMPLE**|**moderate bilateral asymmetrical lid retraction**|\n|**KOCHER**|**severe bilateral lid retraction** — the staring look|\n|**VON GRAEFE**|**lid LAG ON DOWNGAZE**|\n\n### c) Proptosis\n- **Bilateral, with lid retraction**; severe proptosis causes **exposure keratopathy and corneal ulceration**.\n\n### d) Restrictive myopathy\n- **Double vision** and discomfort in some positions of gaze; **enlarged extraocular muscle BELLIES** on axial MRI.\n- **Muscle order:** the **INFERIOR RECTUS** is affected most often, order **inferior → medial → superior → lateral rectus, obliques last** — mnemonic **I’M SLO** *(the ranking and mnemonic are not taken from the course material; the restrictive mechanism is the lecturer’s)*.\n- **⚠️ Tight, not weak:** a tight muscle restricts the OPPOSITE movement. A fibrosed **inferior** rectus is short, not weak, so the eye will not **ELEVATE** — mimicking a superior rectus **palsy**. Same trap as orb-14.\n\n### e) Optic neuropathy\n- **Impairment of central vision.** **Monitor regularly: visual acuity · colour desaturation · RAPD · visual fields.**\n\nSrc: L10 slides 15–21; L23 (commonest cause of exophthalmos; autoantibody-mediated muscle enlargement), cited only",
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
        "body": "**PRESEPTAL CELLULITIS:** infection of the subcutaneous tissues **ANTERIOR to the orbital septum**.\n\n- **Organisms:** **Staphylococcus aureus** and **Streptococcus pyogenes**.\n- **Causes:** **local skin trauma** (laceration, insect bite) · **spread from periocular infection** — acute hordeolum, dacryocystitis, conjunctivitis, sinusitis · **haematogenous spread** from the upper respiratory tract or middle ear.\n- **Presents as:** a **swollen, often firm, tender red eyelid**, which may be **very severe** — severity of the lid is not the discriminator.\n\n### ⚠️ The four findings that decide it — the deck states them as a contrast\n\n|  |**PRESEPTAL**|**ORBITAL**|\n|---|---|---|\n|**Proptosis**|**ABSENT**|**PRESENT**|\n|**Chemosis**|**ABSENT**|**PRESENT**|\n|**Visual acuity**|**UNIMPAIRED**|may be **reduced**, colour vision impaired|\n|**Pupillary reactions**|**UNIMPAIRED**|**RAPD** may appear|\n|**Ocular motility**|**UNIMPAIRED**|**PAINFUL OPHTHALMOPLEGIA**|\n|CT|opacification **anterior** to the septum|opacification **behind** it, ± both|\n\n- **⚠️ What does NOT separate them:** fever, lid oedema and leucocytosis occur in **BOTH**. and separate nothing. **Open the swollen lid and test those five things** before calling anything preseptal.\n\nSrc: L10 slides 24, 25, 26",
        "qs": [
          "opqb-t3-134",
          "opqb-t3-124"
        ]
      },
      {
        "id": "orb-9",
        "w": "must",
        "h": "Bacterial orbital cellulitis — the child, the ethmoid, and the treatment order",
        "body": "**What it is:** a serious infection of the soft tissues **BEHIND the orbital septum**, and **MORE COMMON IN CHILDREN**.\n\n- **Organisms:** **Streptococcus pneumoniae · Staphylococcus aureus · Streptococcus pyogenes · Haemophilus influenzae**.\n- **⚠️ SOURCE: THE PARANASAL SINUSES, ESPECIALLY THE ETHMOID** — not metastatic infection, malignancy or lid cellulitis.\n\n### Clinical picture\n- **Systemic:** **malaise and pyrexia, often marked.**\n- **Lids and conjunctiva:** tender, firm, erythematous, warm lids; **chemosis**, injection, sometimes subconjunctival haemorrhage.\n- **Orbit:** **proptosis** · **painful ophthalmoplegia** · **diplopia**.\n- **Nerve:** **reduced VA and impaired colour vision**, raising **optic nerve compression** · **RAPD**.\n- **Fundus:** **choroidal folds and optic disc swelling.**\n- *Proptosis directed **down and out** localises a subperiosteal abscess on the **medial (ethmoid)** wall — the globe moves away from the mass.*\n\n### Complications\n- **Ocular:** **optic neuropathy** · exposure keratopathy · **raised IOP** · endophthalmitis · **OCCLUSION OF THE CENTRAL RETINAL ARTERY OR VEIN** — this is how it blinds.\n- **Subperiosteal abscess — most frequently along the MEDIAL orbital wall.**\n- **Intracranial spread** — uncommon but extremely serious: **meningitis · brain abscess · CAVERNOUS SINUS THROMBOSIS**.\n\n### Investigations\n- **Tetanus status** if trauma · **white cell count** · **blood cultures** · **culture of nasal discharge** · **high-resolution CT of orbit, sinuses and brain** · **MRI** · **lumbar puncture if meningeal or cerebral signs develop**.\n\n### Treatment — the order is the question\n\n|Step|Detail|\n|---|---|\n|**1 Admit**|**hospital admission is MANDATORY**|\n|**2 IV ANTIBIOTICS — first line**|**aerobe and anaerobe cover** until culture and sensitivity return|\n|**3 Duration**|IV **until apyrexial 4 DAYS**, then **1–3 WEEKS oral**|\n|**4 Monitor**|**optic nerve function**|\n|**5 Surgery**|**abscess drainage considered EARLY**; **orbital decompression** for severe nerve compression|\n\n- **⚠️ DRAINAGE IS CONSIDERED EARLY — NOT after a 10–15 day trial of antibiotics.** It is driven by CT and optic nerve function, and it is *considered*, never automatic.\n- **⚠️ Steroids are not first line here** — this is bacterial. Steroids belong to non-infective orbital inflammation (orb-15).\n\nSrc: L10 slides 26, 27, 28, 29",
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
        "body": "**What it is:** an arteriovenous fistula between the carotid artery and the cavernous sinus, raising venous pressure in the sinus **and in everything draining into it**.\n\n|  |**DIRECT**|**INDIRECT (‘dural shunt’)**|\n|---|---|---|\n|Flow|**HIGH-FLOW SHUNT**|low flow|\n|Anatomy|**directly** through a **defect in the intracavernous internal carotid wall**|the intracavernous ICA **stays INTACT**; blood arrives via **meningeal branches of the external or internal carotid**|\n|Cause|**TRAUMA — 75 %**|—|\n|Onset|**days to weeks after head injury**|**gradual onset of redness**|\n|Features|florid|**SUBTLER — may be overlooked**|\n\n### Direct CCF — the classic triad\n- **The classic triad:** **PULSATILE PROPTOSIS · CONJUNCTIVAL CHEMOSIS · A WHOOSHING NOISE IN THE HEAD**.\n- **Marked epibulbar vascular dilatation**; visual affection.\n- **⚠️ The bedside proof:** bruit AND thrill, both **ABOLISHED BY IPSILATERAL CAROTID COMPRESSION** — the bedside manoeuvre that proves it.\n- **Increased IOP**, from **raised episcleral venous pressure**.\n- **Anterior segment ischaemia:** corneal epithelial oedema, aqueous cells and flare; severe cases **iris atrophy, cataract, rubeosis iridis**.\n- **Ptosis** from **third nerve involvement**; **optic disc swelling**.\n\n### Indirect CCF\n- **Exaggerated ocular pulsation**, detected on **slit lamp applanation tonometry**.\n- **‘CORKSCREW’ epibulbar vessels.**\n- **Pressure:** raised IOP, often bilateral but higher on the fistula side.\n\n### Investigations\n- **CT/MRI: prominence of the SUPERIOR OPHTHALMIC VEIN**, diffuse extraocular muscle enlargement.\n- **Orbital Doppler** — abnormal flow patterns.\n- **Definitive: selective catheter DIGITAL SUBTRACTION ANGIOGRAPHY.**\n\n- **⚠️ Crepitus is NOT a CCF sign:** crackling under the skin is **surgical emphysema from a fractured orbital wall** (orb-14), a different injury from the same blow.\n\nSrc: L10 slides 33, 34, 35, 36",
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
        "body": "**⚠️ THE WHOLE GROUP IS ONE QUESTION: WHICH BOUNDARY HAS THE INFECTION CROSSED — the orbital SEPTUM, or the SCLERA?**\n\n|Where it sits|Condition|**Proptosis**|**Motility**|**Vision**|\n|---|---|---|---|---|\n|Anterior to the **orbital septum**|**Preseptal cellulitis**|**No**|Normal|**Normal**|\n|**Behind the septum**, outside the globe|**Orbital cellulitis**|**Yes**|**Painful ophthalmoplegia**|usually preserved; reduced only if the nerve is compressed|\n|**Inside the sclera** only|**Endophthalmitis**|**No**|**Normal**|**Markedly reduced**|\n|Inside the sclera **and through it**|**Panophthalmitis**|**Yes**|**LIMITED**|**Markedly reduced, often to no light perception**|\n\n- **⚠️ THE EQUATION: PANOPHTHALMITIS = ENDOPHTHALMITIS + MOTILITY LIMITATION.** Nothing inside the globe can restrict an extraocular muscle, so restricted movement means the infection has left the eye *(the panophthalmitis entity and this map are not in the course material — no cached deck defines it; `L37) Red Eye` names the word once, among Stevens–Johnson complications)*.\n- **⚠️ VISION — not pain, redness or swelling — separates ORBITAL CELLULITIS from PANOPHTHALMITIS**, because all three occur in both. Cellulitis inflames tissue *around* the globe; panophthalmitis destroys the retina.\n\n### Endophthalmitis, for the contrast\n- **Timing:** the most serious vision-threatening complication of cataract surgery — **24–72 h acute**, or weeks (delayed).\n- **Organisms:** **CoNS (Staphylococcus epidermidis commonest)**, S. aureus, streptococci.\n- **Signs:** **pain, redness, reduced VA, HYPOPYON, yellowish vitreous haze** — an absent red reflex is that haze seen from the front. **No proptosis, no lid swelling, no restricted movement.**\n- **Treatment:** urgent **vitreous tap + intravitreal vancomycin and ceftazidime**.\n- **⚠️ Never call it usual:** pain and falling vision after day one of cataract surgery are not expected inflammation — expected inflammation is mild and improving by day three.\n\nSrc: L10 slides 24, 26; L18 (endophthalmitis after cataract surgery), cited only; panophthalmitis supplied and tagged above",
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
        "body": "*Supplied entity: `L10` slide 6 names “retrobulbar hge” once, among causes of proptosis, and no cached deck describes it — all below but the orbital mechanics is not taken from the course material.*\n\n**Orbital compartment syndrome:** the orbit is a bony cone sealed in front by septum and globe, so blood behind the eye cannot escape and pressure rises.\n\n- **Causes:** blunt or penetrating trauma · **retrobulbar anaesthetic injection** · orbital or lid surgery.\n\n|Sign|Why|\n|---|---|\n|**Proptosis**|the globe is the only mobile wall — **L10 slide 6’s mechanism**|\n|**Chemosis**|conjunctival venous and lymphatic drainage obstructed|\n|**TIGHT, tense lids**|septum under tension; lids will not evert, globe will not retropulse — **the most specific sign**|\n|**Raised IOP**|orbital pressure transmitted to the globe|\n|**Ophthalmoplegia**|a haematoma **behaves as an orbital mass** — **L10 slide 10 lists that cause first**|\n|**Falling vision**|**optic nerve and central retinal artery perfusion failing — THE EMERGENCY**|\n|**Mid-dilated pupil + RAPD**|optic nerve ischaemia|\n\n- **⚠️ MIOSIS NEVER OCCURS — the pupil goes LARGE.** L22’s causes of miosis are parasympathomimetics, **Horner’s**, pontine haemorrhage, acute iridocyclitis and trauma; orbital pressure is not among them. A small pupil in an injured eye means **traumatic iritis** or a ruptured globe.\n- **⚠️ Treatment:** IMMEDIATE **LATERAL CANTHOTOMY AND CANTHOLYSIS**, at the bedside before imaging — **vision is lost permanently within 60–90 minutes**.\n\n*Defect note: one question keys ophthalmoplegia as expected while offering chemosis as a distractor, and the same bank elsewhere lists chemosis among this condition’s signs. Both correct; keyed as printed.*\n\nSrc: L10 slides 4, 6, 10 (orbital mechanics only); L22 (miosis causes), cited only; the entity, its signs and its management are supplied and tagged",
        "qs": [
          "opqb-t3-121",
          "opqb-t3-132"
        ]
      },
      {
        "id": "orb-14",
        "w": "must",
        "h": "Blow-out fracture of the orbital floor — earliest sign, entrapped muscle, late sign",
        "body": "*`L25) Trauma I`’s material, written here because two questions filed in this chapter test it; the full trauma account is `op-trauma`’s.*\n\n- **History:** blunt trauma — **FIST, TENNIS BALL**.\n- **Presentation:** **ecchymosis, oedema, ± SUBCUTANEOUS EMPHYSEMA**, subconjunctival haemorrhage.\n\n### ⚠️ Periorbital (surgical) emphysema — the EARLIEST sign\n- **Why immediate:** the floor is the **maxillary sinus roof**, the medial wall the **lamina papyracea** over the ethmoid — the moment bone breaks, orbit and sinus are one cavity.\n- **Felt as crepitus**, worst on **blowing the nose**. The deck gives it **its own slide, immediately BEFORE the blow-out slides**.\n\n### Diplopia\n- **In BOTH UPGAZE AND DOWNGAZE.**\n- **Mechanism:** RESTRICTIVE motility from **MECHANICAL ENTRAPMENT** of the **INFERIOR OBLIQUE or INFERIOR RECTUS**, or adjacent connective tissue and fat.\n- **⚠️ Direction of the defect:** an entrapped **INFERIOR** rectus limits **ELEVATION**, so diplopia is worst looking **up** — a tethered muscle is not weak, and the eye cannot be pulled **away** from it. *Same trap as the fibrosed inferior rectus in orb-6.*\n\n### Other signs\n- **INFRAORBITAL NERVE ANAESTHESIA:** **lower lid, cheek, side of nose, upper lip, upper teeth and gums** — if the fracture involves the infraorbital canal.\n- **ENOPHTHALMOS — SEVERE CASES, AND LATE:** early oedema and haematoma push the eye forward and mask the volume lost into the sinus.\n- **± ocular damage.**\n\n### CT — CORONAL section\n- **Fracture of the floor ± another wall** · **tissue entrapment — the TEAR DROP SIGN** · **± surgical emphysema**.\n\n### Management\n- **REFRAIN FROM BLOWING THE NOSE**, preferably from coughing or sneezing — **the channel that admits air admits sinus organisms**.\n- **Systemic antibiotics** · **surgical intervention when required**.\n\nSrc: L25 slides 18–24, cited only (this deck’s words are counted by `op-trauma`); L10 slide 5 (enophthalmos from floor fracture with fat prolapse)",
        "qs": [
          "opqb-t3-130",
          "opqb-t3-133"
        ]
      },
      {
        "id": "orb-15",
        "w": "high",
        "h": "The other three orbital inflammations — mucormycosis, dacryoadenitis, pseudotumour",
        "body": "### Rhino-orbital MUCORMYCOSIS\n- **Rare, aggressive, often FATAL**; fungi of the family **Mucoraceae**.\n- **⚠️ THE HOST IS THE DIAGNOSIS: DIABETIC KETOACIDOSIS or immunosuppression.**\n- **Mechanism:** **hyphae invade blood vessels → occlusive vasculitis → infarction of orbital tissues**.\n- **⚠️ The classic sign:** infarction on septic necrosis gives the **BLACK ESCHAR**, and eyelid necrosis., and eyelid necrosis.\n- **Treatment:** **correct the immune status** · **IV antifungal** · **daily packing and irrigation with antifungal** · **wide excision of necrotic tissue** · **exenteration may be required** · **hyperbaric oxygen**.\n\n### Acute DACRYOADENITIS\n- **Idiopathic**, or **viral — mumps, Epstein–Barr, cytomegalovirus**.\n- **Rapid onset of discomfort over the gland.**\n- **⚠️ S-shaped ptosis:** swelling of the **LATERAL** lid over the palpebral lobe.\n- Orbital lobe enlargement gives slight **downward and inward dystopia**.\n\n### Idiopathic orbital inflammatory disease (orbital PSEUDOTUMOUR)\n- **What it is:** a non-neoplastic, non-infective, **SPACE-OCCUPYING** orbital infiltration with inflammatory features — it mimics both a tumour and an infection.\n- **Pathology:** **pleomorphic inflammatory cellular infiltration, then reactive fibrosis**.\n- **BIOPSY IS USUALLY NEEDED** — that is what separates it from both look-alikes.\n- **Treatment ladder:** **observation → NSAIDs → ORAL STEROIDS → radiotherapy → surgical debulking.**\n\n*This is the entity steroids are for. An infected orbit gets antibiotics.*\n\nSrc: L10 slides 30, 31, 37",
        "qs": []
      },
      {
        "id": "orb-16",
        "w": "high",
        "h": "Orbital tumours — sorted by age, by speed, and by what the CT does to bone",
        "body": "|Tumour|Who|Signature|CT / management|\n|---|---|---|---|\n|**DERMOID cyst**|—|**a CHORISTOMA** — normal tissue in an abnormal location. **Painless nodule, SUPEROTEMPORAL** (occasionally superonasal)|**CT to exclude bony involvement**; **excision**|\n|**Primary orbital VARICES**|—|**venous–lymphatic malformation**; **thin-walled distensible LOW-FLOW** plexus; **hamartomatous**|**REVERSIBLE PROPTOSIS** on dependent position, Valsalva, jugular compression (orb-5)|\n|**CAPILLARY haemangioma**|**CHILDHOOD**|**COMMONEST ORBITAL AND PERIORBITAL TUMOUR IN CHILDHOOD.** Rapid growth then resolution — **30 % by age 3, ~75 % by age 7**|**Treat principally for AMBLYOPIA**: oral **PROPRANOLOL**, intralesional **triamcinolone**|\n|**CAVERNOUS haemangioma**|**ADULTS**|**COMMONEST ORBITAL TUMOUR IN ADULTS.** **Slowly progressive UNILATERAL proptosis**; **well encapsulated**|**surgical excision**|\n|**PLEOMORPHIC lacrimal gland ADENOMA**|—|**commonest EPITHELIAL lacrimal gland tumour**; benign mixed-cell, from ducts and secretory elements incl. myoepithelial cells. **PAINLESS, SLOW, OVER A YEAR**; superolateral swelling, **S-shaped ptosis**, dystopia|**CT: smooth round/oval, INDENTATION but NO bony destruction**|\n|**Lacrimal gland CARCINOMA**|—|rare, **high morbidity and mortality**. **ADENOID CYSTIC 50 %**, then pleomorphic adenocarcinoma, mucoepidermoid, squamous. **Proptosis of RAPID ONSET**|**CT: BONY EROSION**|\n|**Optic nerve GLIOMA**|**CHILDREN, median 6.5 y**|**~30 % have NEUROFIBROMATOSIS TYPE I**|**CT: FUSIFORM ENLARGEMENT of the optic nerve**|\n|**Optic nerve sheath MENINGIOMA**|adults|from **arachnoid villi meningothelial cells**; commoner in **NF2**. **⚠️ VISUAL LOSS BEFORE PROPTOSIS**|**TRIAD: progressive visual loss + optic atrophy + OPTICOCILIARY SHUNT VESSELS.** Prognosis for life good|\n|**RHABDOMYOSARCOMA**|**CHILDREN**|**commonest soft tissue sarcoma of childhood** and **commonest PRIMARY ORBITAL MALIGNANCY in children**, still rare. From **undifferentiated mesenchymal cells**. **⚠️ RAPID UNILATERAL PROPTOSIS MIMICKING ORBITAL CELLULITIS**|**CT: poorly defined homogeneous mass, adjacent BONY DESTRUCTION**; **incisional biopsy**|\n\n- **⚠️ Speed:** slow and painless = benign (adenoma, cavernous haemangioma); **rapid = carcinoma or rhabdomyosarcoma**. **Bone: indentation = benign, EROSION or DESTRUCTION = malignant.**\n- **⚠️ The child who does not settle:** a proptosis unresponsive to antibiotics is a **rhabdomyosarcoma** until imaged and biopsied.\n\nSrc: L10 slides 38, 39, 40, 41, 42, 43, 44, 45, 46",
        "qs": []
      },
      {
        "id": "orb-17",
        "w": "must",
        "h": "The anophthalmic socket — three operations, three different amounts removed",
        "body": "**The deck names all three and defines none** — slide 47 is the three words. **The definitions below are not taken from the course material.**\n\n|Operation|What is removed|What is left|\n|---|---|---|\n|**EVISCERATION**|**all the INNER CONTENTS of the eyeball, including the UVEAL tissue**|**the scleral shell** (and usually the muscles attached to it)|\n|**ENUCLEATION**|**the ENTIRE EYEBALL** — **the optic nerve is cut and the whole globe removed as a whole**|extraocular muscles, orbital fat, periorbita|\n|**EXENTERATION**|**ALL THE ORBITAL CONTENTS** — globe, muscles, fat, and often the lids|bare bony orbit|\n\n- **⚠️ Read the boundary word:** *inner contents* = evisceration · *entire eyeball* = enucleation · *orbital contents* = exenteration. Both evisceration questions are answered by which of those three phrases appears.\n- **Enucleation:** the operation for intraocular malignancy — the globe must leave intact, because eviscerating a tumour spreads it.\n- **Exenteration** appears in this deck as the last resort in **rhino-orbital mucormycosis** (orb-15).\n\nSrc: L10 slide 47 (the three names); the definitions are supplied and tagged",
        "qs": [
          "opqb-t3-114",
          "opqb-t3-127"
        ]
      },
      {
        "id": "orb-18",
        "w": "know",
        "h": "The acutely inflamed orbit — the deck’s own differential, in five groups",
        "body": "|Group|Causes|\n|---|---|\n|**Infection**|**bacterial orbital cellulitis** · **fungal orbital infection** · **dacryocystitis** · **infective dacryoadenitis**|\n|**Vascular**|**acute orbital haemorrhage** · **cavernous sinus thrombosis** · **carotid–cavernous fistula**|\n|**Neoplasia**|**rapidly progressive retinoblastoma** · **lacrimal gland tumour** · metastatic lesion with inflammation, **lymphoma**, Waldenström macroglobulinaemia · in children **rhabdomyosarcoma, leukaemia, lymphangioma, neuroblastoma**|\n|**Endocrine**|**thyroid eye disease of RAPID ONSET**|\n|**Non-neoplastic inflammation**|**idiopathic orbital inflammatory disease** · **Tolosa–Hunt syndrome** · **orbital myositis** · acute allergic conjunctivitis with lid swelling · **herpes zoster ophthalmicus** · herpes simplex skin rash · **sarcoidosis** · vasculitides (**granulomatosis with polyangiitis**, polyarteritis nodosa) · **scleritis, including posterior scleritis** · **ruptured dermoid cyst**|\n\n- **⚠️ Hot is not infected:** four of the five groups are not infections, and two of them — **a rapid thyroid eye disease** and **a rhabdomyosarcoma** — are the ones actually mistaken for cellulitis in practice.\n\nSrc: L10 slide 48 (Table 4.1)",
        "qs": []
      }
    ]
  },
  "op-glauc": {
    "intro": "Five questions, and three are bare recall about the pressure itself — the range, what a finger can tell you, which way the Schiötz scale runs. The other two are one story: the crowded hyperopic eye, and the drop that must never be instilled into it.",
    "sections": [
      {
        "id": "glc-1",
        "w": "must",
        "h": "Definition — the triad, and the two exceptions that break it",
        "body": "**The triad both decks open on:** elevated **intraocular pressure (IOP)** · **optic nerve affection (cupping)** · **visual field defects**.\n\n**The definition that supersedes it:** glaucoma is **a specific type of optic neuropathy in which IOP is a significant risk factor**.\n\n### The lecturer’s own gloss\n- **Optic neuropathy —** optic nerve disease.\n- **Specific type —** with special characteristics.\n- **Risk factor, not definition —** pressure is what you treat, not what names the disease.\n\n### The two exceptions\n\n|Entity|Optic nerve|IOP|\n|---|---|---|\n|**Normal tension glaucoma**|**neuropathy present**|**normal**|\n|**Ocular hypertension**|**normal**|**elevated**|\n\n*So glaucoma is diagnosed on pressure, disc and field together — never on the pressure alone.*\n\nSrc: L11 lines 47–71; L12 lines 13–23",
        "qs": []
      },
      {
        "id": "glc-2",
        "w": "must",
        "h": "Classification — two axes, and the open-versus-closed spine",
        "body": "### Every glaucoma has a value on each axis\n- **Aetiological —** congenital / developmental · acquired: **primary** (no obvious cause) or **secondary** (a cause is seen).\n- **Gonioscopic —** **open** angle · **narrow / closed** angle.\n\n**Gonioscopy —** visualization of the angle of the anterior chamber.\n\n- **Open angle:** the **trabecular meshwork** is **visibly exposed** to the aqueous humour.\n- **Closed angle:** the meshwork is **not visibly exposed**.\n\n### Open versus closed — the chapter’s spine\n\n|Axis|**Primary OPEN angle**|**Acute ANGLE CLOSURE**|\n|---|---|---|\n|**Gonioscopy**|meshwork **exposed**|meshwork **not exposed**|\n|**Block**|**inside** the meshwork|**iris over** the meshwork|\n|**Onset**|years, insidious|**hours**|\n|**Symptoms**|**usually none**|pain ++++, haloes, vomiting|\n|**Eye**|white, quiet|red, ciliary injection|\n|**Cornea / pupil**|clear / normal|**oedematous / mid-dilated oval fixed**|\n|**Chamber**|normal depth|**shallow**, iris bombé|\n|**Refraction at risk**|**myopia**|**hyperopia**|\n|**Definitive surgery**|**trabeculectomy**|**iridotomy**|\n\nSrc: L11 lines 72–95; L12 lines 24–55",
        "qs": []
      },
      {
        "id": "glc-3",
        "w": "high",
        "h": "Aqueous humour — made, circulated, drained",
        "body": "**IOP elevation is a mismatch —** between aqueous humour **production** and aqueous humour **drainage**.\n\n### The route, in the deck’s three steps\n- **Production:** the **ciliary processes**, around the **lens equator**.\n- **Circulation:** posterior chamber → **pupil** → anterior chamber → **angle** of the anterior chamber.\n- **Drainage:** **trabecular meshwork** → **Schlemm’s canal** → **collector channels** → systemic circulation.\n\n- **Every drug follows from it —** each either cuts production or improves drainage. There is no third option.\n\n*`L1,2) Ocular Anatomy` splits outflow **trabecular (conventional) 90 %** / **uveoscleral (unconventional) 10 %** — `op-intro`’s deck, cited only.*\n\nSrc: L11 lines 96–108; L12 lines 88–102; L1,2 (cited only)",
        "qs": []
      },
      {
        "id": "glc-4",
        "w": "must",
        "h": "Measuring the pressure — the number, the finger, the two tonometers",
        "body": "**Normal range: 10–21 mmHg, mean 16 mmHg.** Lecturer-flagged HIGH YIELD.\n\n### The two families of method\n- **Digitally —** a **rough estimation**, and a **comparison between both eyes**.\n- **Tonometry —** **applanation** or **indentation**.\n\n### Digital palpation — the technique\n- **Position:** the patient **looks down**.\n- **Hands:** both index fingers on the upper lid **above the level of the tarsus**; the other fingers rest on forehead and temple.\n- **Action:** press **alternately**, **testing the tension as in fluctuation**.\n\n- **Good for:** a **grossly** high or low pressure, and **asymmetry** between the eyes *(the restriction to gross departures is not taken from the course material)*.\n- **Cannot do:** give a number, or catch the 24–30 mmHg at which untreated POAG destroys a field.\n\n### The two tonometers\n- **Applanation —** **Goldmann**. **Flattens** a fixed corneal area and measures the force needed.\n- **Indentation —** **Schiötz**, spelled *Schiotz* on the slide. **Indents** the cornea with a **known weight**.\n\n### ⚠️ The Schiötz scale runs backwards\n- **The rule —** a **LOW** scale reading means a **HARD** eye and a **HIGH IOP**.\n- **Why:** a hard globe resists the plunger, so it sinks **less**. The dial reads depth, not pressure; a conversion table converts it.\n- **The trap:** reading the dial as mmHg inverts every answer *(the direction of the scale is not stated on the slide — not taken from the course material)*.\n\n*Full instrument comparison is in `op-pupil`.*\n\nSrc: L3,4 sl.36–40 (`op-pupil`’s deck — cited only, not counted; carried here because three questions turn on it)",
        "qs": [
          "opqb-t1-46",
          "opqb-t1-47",
          "opqb-t1-55"
        ]
      },
      {
        "id": "glc-5",
        "w": "high",
        "h": "Reading the number — what a pressure does and does not mean",
        "body": "**21 is a statistical cut-off —** about two standard deviations above the population mean, **not a threshold at which damage begins** *(not taken from the course material)*.\n\n### Diurnal variation\n- **The number moves —** by roughly **3–5 mmHg**, highest in the **early morning** *(not taken from the course material)*.\n- **So one afternoon reading can miss the peak** — repeat across a day when the diagnosis is uncertain.\n- **It fits the deck:** L11 lists **early-morning headache** as a POAG symptom.\n\n### Central corneal thickness\n- **Applanation measures the cornea too:** a **thick** cornea **over-reads**, a **thin** cornea **under-reads** *(not taken from the course material)*.\n- **A thin cornea is itself a risk factor** for progression, so that patient is doubly under-estimated.\n\n### The other sources of error\n- **Applanation:** corneal oedema or scarring, high astigmatism, wrong fluorescein volume, lid squeezing, breath-holding.\n- **Indentation:** depends on **ocular rigidity**, so Schiötz **under-reads in high myopia** — the eye already at raised risk of POAG.\n\n*Both error lists are not taken from the course material.*\n\n### Gonioscopy\n**The only way to see the angle,** and what separates two diseases with identical pressures and identical discs.\n\n### Target pressure\n- **The definition —** the pressure at which **that** nerve stops deteriorating; set individually, lowered again if the field progresses *(not taken from the course material)*.\n- **The deck’s own aim:** preserve visual function **beyond the patient’s life expectancy**, affordably, with least side effects.\n\nSrc: L11 lines 180–187, 204–205; register row 2 from `op-pupil` (L3,4 sl.36–40)",
        "qs": []
      },
      {
        "id": "glc-6",
        "w": "must",
        "h": "Primary open angle glaucoma — pathology and who gets it",
        "body": "**The pathology in one line:** **increased resistance** to drainage through **trabecular meshwork → Schlemm’s canal → collector channels**. The angle is open; the block is inside it.\n\n### The five predisposing factors\n\n|Factor|The deck’s statement|\n|---|---|\n|**Age**|older, **beyond the 5th decade**|\n|**Gender**|**more common in females**|\n|**Ethnicity**|**more common AND more severe in dark races**|\n|**Family history**|**10-fold increased risk** in **first-degree relatives**|\n|**Refractive state**|**more common in myopia**|\n\n*`L7,8) Refractive errors` independently lists \"high association with primary open angle glaucoma\" under the complications of myopia — cited only.*\n\nSrc: L11 lines 109–124; L7,8 lines 250–251 (cited only)",
        "qs": []
      },
      {
        "id": "glc-7",
        "w": "must",
        "h": "The glaucomatous disc — structural change",
        "body": "**Neural rim thinning is the lesion.** Everything at the disc is rim tissue disappearing and the cup enlarging into the space.\n\n### Two patterns of thinning\n- **Focal —** a **polar notch**, **superior** or **inferior**.\n- **Circumferential —** **generalized** thinning of the neural rim.\n\n### What is seen\n- **Cup/disc ratio —** enlargement **beyond 0.3**, the deck’s threshold.\n- **Splinter haemorrhage** at the disc margin.\n- **Total cupping:** with **nasal shift of the blood vessels** — the end-stage disc.\n\n*The measurement itself — the normal C/D figure, the >0.2 inter-eye asymmetry rule and the temporal myopic crescent — is in `op-pupil`.*\n\nSrc: L11 lines 125–144",
        "qs": []
      },
      {
        "id": "glc-8",
        "w": "must",
        "h": "The glaucomatous field — functional change, and why it is silent",
        "body": "**In the order the disease produces them:**\n\n|Defect|What it is|\n|---|---|\n|**Paracentral scotomata**|in **Bjerrum’s area** — the **10–20 degrees** of central field|\n|**Arcuate scotomata**|**superior** and **inferior**|\n|**Nasal step**|a step across the horizontal meridian, nasally|\n|**Ring scotoma**|a **double arcuate** scotoma|\n|**Constriction of the field**|closing to a **tubular field**|\n|**Temporal island of vision**|the last surviving fragment|\n\n### Visual acuity\n- **Central vision —** lost only in **END-STAGE** disease.\n- **That is the danger:** a patient reading 6/6 can already have lost most of the field, so screening is by disc and field, never by acuity.\n\nSrc: L11 lines 145–157",
        "qs": []
      },
      {
        "id": "glc-9",
        "w": "must",
        "h": "POAG — presentation, examination and the treatment ladder",
        "body": "### Presentation\n- **Most commonly — asymptomatic.** The headline of the slide.\n- **Less commonly —** **headache**, characteristically **early morning**; **frequent change of reading glasses**.\n- **Advanced disease —** **peripheral visual field loss**, then diminution of vision.\n\n### Examination\n**Three things:** optic neuropathy · elevated IOP · **features of secondary glaucoma** — the third stops a secondary cause being treated as primary.\n\n**Referral:** a **potentially blinding disease**, so referral to an ophthalmologist **is a must**.\n\n### The protocol, in order\n\n|Step|What|\n|---|---|\n|**Medical — decrease production**|**beta-blockers · carbonic anhydrase inhibitors · alpha agonists**|\n|**Medical — increase drainage**|**prostaglandin analogues · miotics · alpha agonists**|\n|**Laser**|**laser trabeculoplasty** — argon, or selective|\n|**Surgery**|**trabeculectomy** — a **fistula between the anterior chamber and the subconjunctival space**|\n\n- **Alpha agonists sit in both medical rows —** the deck’s own placement; they cut production and improve outflow.\n\nSrc: L11 lines 180–217",
        "qs": []
      },
      {
        "id": "glc-10",
        "w": "high",
        "h": "Secondary OPEN angle glaucoma — four causes, one common thread",
        "body": "**A cause is seen** for the raised outflow resistance — but **the angle is still open on gonioscopy**. The block is inside the meshwork, not over it.\n\n|Cause|What clogs the meshwork|\n|---|---|\n|**Pseudoexfoliation syndrome**|**pseudoexfoliative material** — fibrillar **basement membrane** material — in the meshwork and **all through the anterior segment**|\n|**Pigment dispersion syndrome**|**pigment chaffed out of the iris**, deposited in the meshwork and throughout the anterior segment|\n|**Steroid induced**|**prolonged intake of potent steroids in a predisposed individual** → **decreased permeability** of the meshwork|\n|**Uveitic**|**inflammatory cells** plus **plasmoid (viscid) aqueous humour** → decreased permeability of the meshwork|\n\nSrc: L11 lines 158–173",
        "qs": []
      },
      {
        "id": "glc-11",
        "w": "must",
        "h": "Angle closure — the crowded eye, and what tips it over",
        "body": "**Two questions, asked separately:** who has an angle capable of closing, and what closes it tonight.\n\n### At risk — crowded anterior segments\n- **Females.**\n- **Hyperopes —** a normal-sized lens in a short eye.\n- **Race —** **South-East Asians**.\n- **Advancing age.**\n- **An affected fellow eye.**\n\n### What raises the risk — the mid-dilated pupil\n- **A dark environment.**\n- **Systemic medications —** **anticholinergics**.\n\n### Why age crowds the angle\n- **The lens grows for life:** nothing is shed, so it thickens, pushes the iris forward and shallows the chamber, worst peripherally.\n- **`L7,8`, under hyperopia:** *\"Predisposition to narrow angle glaucoma due to shallow anterior chamber (especially later in life as the lens becomes thicker).\"*\n\n### Why MID-dilated beats fully dilated\n- **The peripheral iris is at its most bunched** into the angle while pupillary block is still substantial *(mechanism not taken from the course material)*.\n- **So attacks start in the evening —** a dark room, or an anticholinergic; never bright sun.\n\nSrc: L12 lines 109–127; L7,8 lines 339–347 (cited only)",
        "qs": [
          "opqb-t1-23"
        ]
      },
      {
        "id": "glc-12",
        "w": "must",
        "h": "The shallow chamber at the bedside — and the drop you must not give",
        "body": "### The penlight test, in the examination deck’s own words\n- **Shine a light from the temporal side** of the head, across the front of the eye, **parallel to the plane of the iris**.\n- **Look at the nasal aspect of the iris.**\n- **Two-thirds or more in shadow —** the chamber is **probably shallow** and the **angle narrow**.\n\n**Why it works:** a forward-bowed iris casts its own shadow nasally; a deep chamber lets the beam wash across evenly.\n\n### Causes of a shallow chamber\n- **Shallow —** **hypermetropia · angle closure glaucoma** · intumescent cataract · perforated corneal ulcer · surgical wound leak.\n- **Deep —** high myopia · aphakia · **buphthalmos**.\n\n### ⚠️ Do not dilate an occludable angle\n- **A mydriatic drop —** does deliberately what a dark room does by accident *(the drop is not named on the slide, which gives anticholinergics and darkness — not taken from the course material)*.\n- **The test comes before the drop.** It takes five seconds and instils nothing.\n- **Everything else stays safe:** chamber-depth assessment, **undilated** fundus examination, confrontation fields.\n\n### What to do instead\n**Gonioscopy, then laser iridotomy —** it bypasses pupillary block, and dilation is safe afterwards *(the post-iridotomy safety is not taken from the course material)*.\n\nSrc: L3,4 sl.24–26 (`op-va`’s deck — cited only, not counted); L12 lines 109–127, 233–243",
        "qs": [
          "opqb-t1-33"
        ]
      },
      {
        "id": "glc-13",
        "w": "high",
        "h": "The angle-closure continuum — one disease, four stages",
        "body": "**The continuum:** intermittent angle closure → **acute** angle closure (crisis) → **chronic** narrow angle glaucoma → **absolute** glaucoma.\n\n|Stage|Mechanism|Picture|\n|---|---|---|\n|**Intermittent (subacute)**|**short episodes** that **resolve spontaneously**|**minimal or no blurring** · **coloured haloes around light** · **eye pain, brow ache or headache**|\n|**Acute (crisis)**|the angle shuts and stays shut|the emergency|\n|**Chronic narrow angle**|**repeated** attacks → **chronic closure** of the angle|**similar to POAG** — raised IOP, progressive cupping, field changes|\n|**Absolute**|end stage|**blind painful eye**|\n\n### What aborts a subacute attack\n- **Bright illumination** and **sleep** — the deck names both.\n- **Why:** each constricts the pupil, pulling the peripheral iris out of the angle *(mechanism not taken from the course material)*.\n\n### Two treatment lines\n- **Intermittent —** **iridotomy**, laser or surgical. Treat here and the crisis never happens.\n- **Chronic —** the **same protocol as open angle glaucoma**.\n\n**Coloured haloes:** corneal epithelial oedema from an abrupt rise in IOP, so a **danger signal for acute glaucoma** — `L37) Red Eye`, a book chapter rather than a lecture.\n\nSrc: L12 lines 128–164, 244–277; L37 lines 355–360 (cited only)",
        "qs": []
      },
      {
        "id": "glc-14",
        "w": "must",
        "h": "Acute angle-closure glaucoma — the ocular emergency",
        "body": "### Symptoms\n- **Pain — ++++.** The deck grades it that way.\n- **Coloured haloes around light.**\n- **Vision —** **rapid** diminution, **over several hours**.\n- **Redness.**\n- **Nausea and vomiting —** ⚠️ **DDx: acute abdomen.**\n\n### Signs\n- **Diminution of vision.**\n- **IOP ++++ —** a **stony hard** globe.\n- **Corneal oedema —** so **fundus examination and gonioscopy are usually not possible**.\n- **Ciliary injection.**\n- **Pupil —** **mid-dilated, vertically oval, non-reactive**.\n- **Shallow anterior chamber / iris bombé** — forward bowing.\n- **Eyelid oedema.**\n\n### Medical treatment — hospitalise\n- **Lower the pressure:** **systemic acetazolamide** · topical **beta-blockers**, **alpha agonists**, **CAIs**, **miotics (pilocarpine)**.\n- **Hyperosmotic agents:** **IV mannitol** · **oral hypertonic glycerol**.\n- **Topical steroids.**\n\n### Surgical treatment\n- **Iridotomy —** **laser is standard**; surgical otherwise.\n- **Filtering surgery —** **trabeculectomy**.\n\n*The fellow eye is itself listed as at risk, so it is treated prophylactically (not taken from the course material).*\n\nSrc: L12 lines 165–243",
        "flow": {
          "title": "How a mid-dilated pupil blinds an eye in hours",
          "steps": [
            {
              "k": "step",
              "t": "Mid-dilated position of the pupil",
              "n": "dark room · systemic anticholinergic · a mydriatic drop"
            },
            {
              "k": "step",
              "t": "Relative pupil block — aqueous cannot pass the pupil"
            },
            {
              "k": "step",
              "t": "Accumulation of aqueous humour BEHIND the iris",
              "n": "the posterior chamber pressurises"
            },
            {
              "k": "step",
              "t": "IRIS BOMBÉ — the peripheral iris bows forward"
            },
            {
              "k": "step",
              "t": "Narrowing of the angle → increased resistance to aqueous outflow"
            },
            {
              "k": "alert",
              "t": "OCULAR EMERGENCY — rapid severe rise of IOP",
              "n": "stony hard globe · hazy cornea · fixed mid-dilated pupil · vomiting"
            },
            {
              "k": "decision",
              "t": "Is the cornea clear enough to laser?",
              "yes": "Laser iridotomy — the standard, and prophylactically to the fellow eye",
              "no": "Medical lowering first — acetazolamide, topical agents, mannitol — then iridotomy once the cornea clears; trabeculectomy if the pressure persists"
            }
          ]
        },
        "qs": []
      },
      {
        "id": "glc-15",
        "w": "know",
        "h": "Secondary NARROW angle glaucoma — pulled forward or pushed forward",
        "body": "**The definition:** a cause is seen for the gonioscopically narrow angle. Two mechanisms only — **anterior pulling** and **posterior pushing**.\n\n|Cause|Mechanism|How|\n|---|---|---|\n|**Neovascular glaucoma**|**anterior pulling**|a **neovascular membrane** over the meshwork **contracts**, pulling the peripheral iris over the trabeculum|\n|**Iridocorneal endothelial (ICE) syndrome**|**anterior pulling**|a membrane over trabeculum, iris and **posterior cornea** contracts and pulls the same way|\n|**Intraocular tumours**|**posterior pushing**|any **space-occupying lesion in the posterior segment**|\n|**Retinal vein occlusion**|**posterior pushing**|venous congestion → **forward rotation of the iris–lens diaphragm**|\n\n*Rubeosis iridis and the retinal ischaemia behind neovascular glaucoma are `L19.2) Retinal Vascular Disorders`, and belong to `op-ret`.*\n\nSrc: L12 lines 278–304",
        "qs": []
      },
      {
        "id": "glc-16",
        "w": "must",
        "h": "Congenital / developmental glaucoma — pathogenesis and epidemiology",
        "body": "### Two groups\n- **Syndromic —** associated with other congenital anomalies: **aniridia**, **Sturge–Weber syndrome**.\n- **Isolated —** not associated with other congenital anomalies.\n\n### The pathology — three lesions at the angle\n- **Persistent mesodermal membrane** on the trabecular meshwork — **goniodysgenesis**.\n- **Anterior iris insertion** obscuring the trabecular meshwork.\n- **Absent Schlemm’s canal.**\n\n### Secondary effects of a raised IOP in an immature eye\n- **Enlargement of the globe →** increased **corneal diameter**, **broad limbus**, increased **antero-posterior diameter**.\n- **Aqueous into the corneal stroma →** **corneal oedema**.\n- **Optic nerve cupping.**\n\n**Why the eye enlarges:** an infant’s sclera is still distensible *(not taken from the course material)*. The enlarged globe is **buphthalmos** — a word this deck never uses, though `L3,4` and `L33,34` print it.\n\n### Epidemiology — four numbers\n- **Western communities —** rare, **1 in 10,000 live births**.\n- **High consanguinity —** **common**.\n- **Males 65 % · bilateral 70 %.**\n\nSrc: L12 lines 317–368; L3,4 sl.26 and L33,34 (cited only)",
        "qs": []
      },
      {
        "id": "glc-17",
        "w": "must",
        "h": "Congenital glaucoma — clinical picture, look-alikes and treatment",
        "body": "### Symptoms\n- **Photophobia, watering, blepharospasm —** the classic triad, all three the oedematous cornea.\n- **Also —** large eye · abnormal colour of the eye · diminution of vision.\n\n### Signs\n- **Corneal oedema and Haab’s striae —** breaks in **Descemet’s membrane** from stretching *(mechanism not taken from the course material)*.\n- **Enlarged corneal diameter · broad limbus.**\n- **Increased IOP · optic nerve cupping.**\n- **Increased axial length** on **A-scan**.\n\n### The six look-alikes the deck lists\n\n|Differential|What separates it|\n|---|---|\n|**Traumatic corneal oedema, forceps**|birth history; cornea **not enlarged**, IOP normal|\n|**Corneal ulcer**|a **staining epithelial defect**, red eye|\n|**Congenital corneal opacification**|opacity **without** raised IOP or enlargement|\n|**Congenital high myopia**|large eye, **clear cornea**, normal IOP|\n|**Congenital nasolacrimal duct obstruction**|watering **with discharge**, **no photophobia**|\n|**Congenital optic nerve pit**|cupped-looking disc, **normal cornea and IOP**|\n\n*The discriminating column is supplied; the deck prints the six names only — not taken from the course material.*\n\n### Treatment — the cornea chooses the operation\n- **Medical —** **temporary, until surgery**.\n- **Clear cornea →** **goniotomy**.\n- **Opaque cornea →** **trabeculotomy** · **trabeculectomy with antimetabolites** · **synthetic valve implantation**.\n- **Why the cornea decides:** goniotomy is cut under a direct gonioscopic view of the angle *(not taken from the course material)*.\n\nSrc: L12 lines 369–499",
        "qs": []
      }
    ]
  },
  "op-cornea": {
    "intro": "Two shapes dominate. First: which organism, from one clue in the history — a lens, a plant, tap water, a dermatome. Second: which sign proves the cornea is the site — reduced vision and a corneal opacity, never the redness.",
    "sections": [
      {
        "id": "cor-1",
        "w": "know",
        "h": "The cornea in numbers, and its five layers",
        "body": "- **Largest refractive surface of the eye:** supplies **~75 % of total ocular power**.\n- **Completely avascular:** fed by **aqueous humour behind** and **tears in front**.\n- **Most densely innervated tissue in the body** — **trigeminal nerve, ophthalmic division (V1)**.\n- **Transparency is ACTIVE:** the endothelium pumps fluid out continuously.\n\n*Dense V1 innervation is why any epithelial breach hurts out of all proportion to its size (the inference is not drawn on the slide).*\n\n### Key numbers\n\n|Quantity|Value|\n|---|---|\n|**Refractive power**|**~43 D**|\n|**Diameter**|**11.5 mm vertical × 12 mm horizontal**|\n|**Central thickness**|**540 µm** (periphery ~700 µm)|\n|**Endothelial density**|**2,500–3,000 cells/mm²**|\n|**Critical density**|**<700 cells/mm² → oedema risk**|\n|**Innervation**|**CN V1**|\n\n### The five layers\n\n|Layer|Size|What matters|\n|---|---|---|\n|**① Epithelium**|**50 µm**, 5–6 cell layers|**regenerates completely in 5–7 days** · tight junctions give barrier function · **stains with fluorescein when disrupted**|\n|**② Bowman layer**|**12 µm**|acellular condensed collagen · **does NOT regenerate**|\n|**③ Stroma**|**90 % of thickness**|orthogonally arranged collagen lamellae · keratocytes maintain the matrix · **damage → scarring and opacity**|\n|**④ Descemet membrane**|—|**basement membrane of the endothelium**|\n|**⑤ Endothelium**|**single cell layer**|**Na/K ATPase pump** · **cannot regenerate** · cell density critical|\n\n- **⚠️ Two layers never come back: Bowman and endothelium.** An epithelial abrasion heals scarless in days; anything deeper scars, and a failed endothelium needs a graft.\n\nSrc: L15,16 \"Corneal Anatomy: Overview\", \"The Five Layers of the Cornea\" (lines 32–65)",
        "qs": []
      },
      {
        "id": "cor-2",
        "w": "high",
        "h": "Fluorescein — how it is used, what it shows, and the lens that must come out first",
        "body": "**Fluorescein:** a **yellow dye that fluoresces GREEN under the cobalt blue filter** of the slit lamp or ophthalmoscope.\n\n- **It does NOT stain intact epithelium.** It pools where epithelium is **absent or diseased** — so **bright green = an epithelial defect**.\n- **Method:** a **sterile filter-paper strip**, moistened with topical anaesthetic, touched to the **palpebral conjunctiva**; a few blinks spread it.\n\n### ⚠️ Remove SOFT contact lenses first\n- **Why:** a soft lens is a **water-swollen hydrogel**. The dye enters the matrix and **stains it permanently**.\n- **RIGID lenses are exempt:** non-hydrated, they do not absorb the dye.\n- Fluorescein is used **with** a rigid lens deliberately, to read the tear film beneath it.\n- *The instruction and its reason are not taken from the course material — no cached deck states either.*\n- Not a legal matter and not a source of false corneal staining — the lens is simply ruined.\n\n### What fluorescein finds\n- **Corneal abrasion** — a discrete, sharply bordered green area.\n- **Corneal ulcer** — green staining over an infiltrate.\n- **Herpetic dendrite** — the branching pattern with terminal buds; essentially diagnostic.\n- **SEIDEL TEST:** over a suspected break, concentrated dye is **diluted to CLEAR by leaking aqueous**. A positive Seidel means an **open globe**.\n\nSrc: L3,4 slide 16 (the staining method), L25 slide 61 (Seidel), both cited only; L15,16 \"The Five Layers\" (epithelium stains when disrupted); the soft-lens rule is supplied and tagged",
        "qs": [
          "opqb-t1-51"
        ]
      },
      {
        "id": "cor-3",
        "w": "must",
        "h": "Bacterial keratitis — the risk, the organism, and the one instruction that comes first",
        "body": "### Risk factors\n- **CONTACT LENS WEAR — commonest in the developed world.**\n- **Ocular trauma** — agricultural injury, the developing world.\n- **Ocular surface disease** — dry eye, blepharitis, trichiasis.\n- **Previous corneal surgery** — **LASIK → atypical mycobacteria**.\n- **Host risk:** systemic immunosuppression, diabetes, vitamin A deficiency.\n- **Neurotrophic or exposure keratopathy.**\n\n### Organisms\n\n|Group|Organisms|The clue|\n|---|---|---|\n|**Gram-positive**|**Staphylococcus aureus · S. pneumoniae · Streptococcus pyogenes**|the default|\n|**Gram-negative**|**PSEUDOMONAS AERUGINOSA**|**contact lens — rapid, aggressive**|\n|**Neisseria gonorrhoeae**|—|**can penetrate INTACT epithelium**|\n|**Moraxella**|—|**elderly, debilitated**|\n|**Atypical mycobacteria**|—|**post-refractive surgery**|\n|**In the tropics**|—|**fungal must be excluded**|\n\n### Clinical picture\n- **Symptoms — ACUTE onset:** **pain, photophobia, blurred vision, mucopurulent discharge.**\n- **Signs:** **epithelial defect with a stromal infiltrate**, plus **circumcorneal injection**.\n- **Moderate–severe:** **stromal oedema, HYPOPYON, posterior synechiae, chemosis.**\n- **⚠️ Severe: Pseudomonas can produce a DESCEMETOCELE AND PERFORATE WITHIN 24–48 HOURS.**\n\n### Investigation protocol\n- **Corneal scraping** — scalpel no.11 or 21 G needle.\n- **Gram stain** — Gram-positive take crystal violet.\n- **Culture:** **blood agar, chocolate agar, Sabouraud** (fungal).\n- **Confocal microscopy** in vivo for difficult cases.\n- **⚠️ ALWAYS SCRAPE BEFORE STARTING ANTIBIOTICS** — printed as the deck’s clinical pearl and repeated as take-home message 1. Once treated, the culture is lost.\n\n### Treatment\n- **First line: intensive topical FLUOROQUINOLONE** — ciprofloxacin or ofloxacin, **hourly on day 1**, then taper.\n- **New-generation fluoroquinolones** (moxifloxacin, gatifloxacin) for resistant or Gram-positive organisms.\n- **Cycloplegic drops** (cyclopentolate 1 %): reduce **ciliary spasm pain**, prevent synechiae.\n- **⚠️ Steroids:** avoid topical steroids until infection is excluded or controlled.\n- **Admit if:** **central ulcer >2 mm** · threat of perforation · poor compliance · **no improvement in 48 h**.\n- **⚠️ Red flag: a central ulcer with hypopyon is URGENT.**\n\nSrc: L15,16 \"Bacterial Keratitis\" (risk/organisms, features/investigations, treatment), \"Clinical Scenario 1\", \"Red Flags\" (lines 72–120, 497–512, 621–624)",
        "qs": [
          "opqb-t1-62"
        ]
      },
      {
        "id": "cor-4",
        "w": "high",
        "h": "Fungal keratitis — plant matter, feathery edges, and a culture that takes weeks",
        "body": "- **Geography:** commoner in tropical and subtropical climates.\n\n|Fungus|Who|First-line drug|\n|---|---|---|\n|**FILAMENTOUS — Aspergillus, Fusarium**|**trauma with PLANT MATTER**|**NATAMYCIN 5 %**|\n|**CANDIDA**|**immunocompromised**, contact lens wearers, **topical steroid use**|**AMPHOTERICIN B 0.15 %**|\n\n- **Alternatives:** **voriconazole 1–2 %**, econazole 1 %.\n- **Signs:** **FEATHERY margins and SATELLITE lesions**, a **dry rough surface**, hypopyon.\n- **⚠️ Delayed diagnosis:** it **mimics bacterial keratitis**, and the delay is what loses the eye.\n- **Culture: SABOURAUD agar, and it may take WEEKS.** Treat on suspicion, do not wait.\n- **Onset is SLOWER than bacterial** — that, plus the history, is the discriminator.\n\nSrc: L15,16 \"Fungal Keratitis\", \"Red Eye with Corneal Involvement\" (lines 121–134, 219–237)",
        "qs": []
      },
      {
        "id": "cor-5",
        "w": "must",
        "h": "Herpes simplex keratitis — three forms, and one absolute steroid rule",
        "body": "**Why it matters:** the commonest infectious cause of corneal blindness in developed countries.\n\n### Epithelial — dendritic / geographic\n- **Active virus replication in the epithelium.**\n- **Classic DENDRITIC ulcer with TERMINAL BUDS** — the branching pattern is pathognomonic.\n- **Two stains:** fluorescein takes the **ULCER BED**, Rose Bengal the **VIRUS-LADEN MARGINS**.\n- **Geographic** = a large irregular lesion, the same disease spread out.\n- **Treatment: topical antiviral** — **aciclovir 3 % ointment 5×/day** or ganciclovir gel. **Debridement** of infected epithelium is adjunctive.\n\n### Disciform — stromal immune\n- **Immune-mediated ENDOTHELIITIS**, not active replication.\n- **Central disc-like corneal OEDEMA**, with **keratic precipitates under the area of oedema**.\n- **Treatment: TOPICAL STEROIDS + antiviral cover.** This is the form steroids are for.\n\n### Necrotizing stromal\n- **Active virus AND immune response together.**\n- **Necrotising stromal:** progressive stromal necrosis and thinning; may perforate, and very difficult to treat.\n- Combined antiviral + steroid, a careful balance.\n\n### ⚠️ The rule\n- **⚠️ Absolute rule:** NEVER use topical steroids in **EPITHELIAL** herpes keratitis. They **promote viral replication**, convert a dendrite into a **geographic ulcer**, and can end in **perforation**.\n- **Recurrence:** **prophylactic oral aciclovir 400 mg twice daily reduces recurrence by ~50 %.**\n\nSrc: L15,16 \"Herpes Simplex Keratitis: Types & Features\", \"Critical Point\", \"Clinical Scenario 2\" (lines 135–178, 513–528)",
        "qs": []
      },
      {
        "id": "cor-6",
        "w": "high",
        "h": "Herpes zoster ophthalmicus — the nose sign, and the 72-hour window",
        "body": "**What it is:** varicella-zoster reactivation in the **CN V1 (ophthalmic)** dermatome. **1 in 3** people develop herpes zoster in their lifetime.\n\n- **⚠️ HUTCHINSON SIGN:** vesicles on the **TIP or SIDE OF THE NOSE**.\n- **Why it matters:** the **nasociliary branch** is involved, and it also supplies the globe — **HIGH risk of ocular complications**.\n- **Treatment: oral valaciclovir or famciclovir WITHIN 72 HOURS of rash onset.**\n\n### Corneal manifestations\n- **Corneal forms:** punctate epithelial keratitis · **PSEUDODENDRITIC** ulcer · mucous plaques · disciform keratitis · neurotrophic keratopathy.\n\n### Complications\n- Epithelial keratitis · stromal/disciform keratitis · **neurotrophic keratopathy** · **scleritis / episcleritis** · **post-herpetic neuralgia**.\n- **Long term:** post-herpetic neuralgia and **corneal anaesthesia**, which is how it becomes neurotrophic.\n\n### ⚠️ HZO pseudodendrite vs HSV dendrite\n\n|  |**HSV dendrite**|**HZO pseudodendrite**|\n|---|---|---|\n|Size|larger|**SMALLER**|\n|Shape|**branching with TERMINAL BUDS**|**STELLATE, LACKS terminal buds**|\n|Nature|true ulcer, stains in the bed|a raised mucous plaque|\n\nSrc: L15,16 \"Herpes Zoster Ophthalmicus (HZO)\" (lines 179–198)",
        "qs": []
      },
      {
        "id": "cor-7",
        "w": "must",
        "h": "Acanthamoeba keratitis — a lens, water, and pain out of all proportion",
        "body": "**What it is:** a **PROTOZOAL** infection, strongly associated with contact lens wear plus tap water or swimming.\n\n### The classic triad\n- **A contact lens wearer.**\n- **Exposure to water.**\n- **The signature:** **SEVERE PAIN OUT OF PROPORTION** to the clinical signs.\n\n### Signs\n- **PERINEURAL infiltrate — EARLY.**\n- **RING INFILTRATE — LATE, and PATHOGNOMONIC.**\n- **⚠️ Red flag: a ring infiltrate is Acanthamoeba until proven otherwise.**\n- **⚠️ Misdiagnosis:** taken initially for **HSV or bacterial keratitis** — the commonest reason it is caught late.\n\n### Diagnosis and treatment\n- **Confocal microscopy** demonstrates the **cysts in vivo**.\n- **Culture:** **NON-NUTRIENT AGAR WITH AN E. COLI OVERLAY** — a special medium that must be asked for by name.\n- **Treatment: PHMB (polyhexamethylene biguanide) + propamidine isethionate, HOURLY, FOR WEEKS.** Treatment is prolonged.\n- **Prevention: never use tap water with contact lenses; always use lens solution.**\n\nSrc: L15,16 \"Acanthamoeba Keratitis\", \"Red Flags\" (lines 199–218, 621–624)",
        "qs": []
      },
      {
        "id": "cor-8",
        "w": "must",
        "h": "Telling the four infectious keratitides apart",
        "body": "|  |**Bacterial**|**Fungal**|**Herpes simplex**|**Acanthamoeba**|\n|---|---|---|---|---|\n|**History**|**contact lens** / trauma|**trauma with PLANT MATTER**; topical steroids|**RECURRENT episodes**|**contact lens + WATER**|\n|**Onset**|**RAPID**|**SLOW**|days|insidious|\n|**Pain**|severe|moderate|mild–moderate|**SEVERE, OUT OF PROPORTION**|\n|**Ulcer**|**large central/paracentral**|**FEATHERY, SATELLITE lesions**, dry rough surface|**DENDRITIC with terminal buds**, or geographic|**PERINEURAL early, RING late**|\n|**Discharge**|**MUCOPURULENT**|—|watery|—|\n|**Hypopyon**|**common**|present|no|—|\n|**Confirm with**|**Gram + blood/chocolate agar**|**SABOURAUD** (weeks)|clinical; fluorescein pattern|**confocal**; **non-nutrient agar + E. coli**|\n|**First line**|**topical fluoroquinolone hourly**|**natamycin 5 %** (filamentous) · **amphotericin B 0.15 %** (Candida)|**aciclovir 3 %**; disciform = **steroid + antiviral**|**PHMB + propamidine**|\n\n- **⚠️ The deciding clue:** a lens alone → bacterial (Pseudomonas); a lens **plus water** → Acanthamoeba; **vegetable matter** → fungal; **recurrence** → herpes.\n- **⚠️ Steroids are wrong in three of the four** and right only in **disciform** HSV, with antiviral cover.\n\nSrc: L15,16 \"Red Eye with Corneal Involvement: Differential Diagnosis\", \"Summary: Infectious Keratitis at a Glance\" (lines 219–237, 587–607)",
        "qs": []
      },
      {
        "id": "cor-9",
        "w": "must",
        "h": "Keratitis against the other red eyes — vision and the cornea decide",
        "body": "**The tetrad:** severe pain + photophobia + a corneal opacity + reduced vision = **KERATITIS**, and it is sight-threatening.\n\n|  |**Keratitis**|**Conjunctivitis**|**Episcleritis**|**Dry eye**|\n|---|---|---|---|---|\n|**Pain**|**SEVERE**|scratchiness, mild irritation, **NOT severe pain**|**mild ache, tender over the area**|gritty, burning|\n|**Photophobia**|**MARKED**|**normal light sensitivity**|minimal|mild|\n|**Vision**|**REDUCED**|**normal**|**not vision threatening**|fluctuates, clears on blinking|\n|**Cornea**|**OPACITY or ULCER**|clear|clear|punctate staining only|\n|**Redness**|**circumcorneal (ciliary)**|diffuse, worst in the fornices|**sectoral**|mild, interpalpebral|\n|**Discharge**|watery or mucopurulent|**prominent**|**none**|none|\n\n- **⚠️ The two decisive findings:** **REDUCED VISION** and a **CORNEAL OPACITY**. Neither is produced by conjunctival or episcleral disease.\n- **Redness alone decides nothing** — all four eyes are red.\n- **Circumcorneal (ciliary) injection:** points to the **cornea or the anterior chamber**; diffuse fornix-based redness points to the conjunctiva.\n- *The discriminating use of circumcorneal injection is supplied; the sign itself is on the deck.*\n- **Photophobia:** accompanies **iridocyclitis**, alone or **secondary to corneal inflammation** — corneal disease drives ciliary spasm.\n- **⚠️ Referral rule:** any red eye with **reduced vision** is referred, never treated blind.\n- **⚠️ The lens wearer:** a painful red eye in one is **microbial keratitis until proved otherwise**.\n\nSrc: L37 \"Severe pain\", \"Photophobia\", \"Corneal opacities\", episcleritis features (lines 343–353, 178–182, 412–414), cited only; L15,16 \"Bacterial Keratitis\" (circumcorneal injection)",
        "qs": [
          "opqb-t1-62"
        ]
      },
      {
        "id": "cor-10",
        "w": "must",
        "h": "Corneal trauma — abrasion, foreign body, and the burn that is irrigated before it is examined",
        "body": "### Corneal abrasion\n- **Fluorescein delineates the defect.** Treat with **topical antibiotic ± cycloplegic**; **usually heals in 24–48 h**.\n\n### Corneal foreign body\n- **Removal:** under the slit lamp, with a **25 G needle or a burr**.\n- **Always exclude:** a retained **INTRAOCULAR** foreign body — CT scan.\n- **RUST RING** after an iron FB: **remove at 24 h with a burr**, once it has softened overnight.\n\n### ⚠️ Chemical injury — irrigate before anything else\n\n|Step|Action|\n|---|---|\n|**1**|**IMMEDIATE copious irrigation — 1–2 L saline or water**|\n|**2**|**Check pH; target 7.0–7.4**|\n|**3**|**Sweep the fornices for retained particles**|\n|**4**|**THEN examine and refer**|\n\n- **⚠️ DO NOT DELAY FOR EXAMINATION.** Irrigation comes before history, acuity and referral.\n- **⚠️ ALKALI vs acid:** alkali burns are **MORE severe** — **saponification** lets them **penetrate deeper**.\n- *Alkali hydrolyses membrane lipids to soap, so the barrier dissolves ahead of the burn front — the mechanism behind the word is supplied.*\n- **Grading:** **ROPER-HALL I–IV, based on LIMBAL ISCHAEMIA.**\n\n### Penetrating injury\n- **Penetrating injury:** **SHIELD** the eye · **NIL BY MOUTH** · urgent surgical repair · explore for an intraocular foreign body.\n- **Seidel:** a positive test confirms a leaking break (cor-2).\n\nSrc: L15,16 \"Corneal Trauma: Approach & Management\" (lines 546–566); L25 slide 61 (Seidel), cited only",
        "qs": []
      },
      {
        "id": "cor-11",
        "w": "must",
        "h": "Three prescribing errors that blind",
        "body": "### Topical steroids in BACTERIAL keratitis\n- **Potentiate the infection · delay healing.**\n- **Wait until the infection is controlled**, then use judiciously under ophthalmic supervision.\n\n### Topical steroids in EPITHELIAL HSV\n- **What they do:** promote viral replication · cause a geographic ulcer · risk perforation.\n- **When allowed:** only in the **STROMAL / disciform** stage, and with antiviral cover.\n\n### Topical anaesthetics for analgesia\n- **The harm:** **INHIBIT** epithelial healing · **STROMAL MELTING** · anaesthetic keratopathy → **PERFORATION**.\n- **⚠️ Never for outpatient use:** they abolish the pain that would have brought the patient back.\n\n*The fourth error on this slide — LASIK in keratoconus — is in `op-cornea-surg`.*\n\nSrc: L15,16 \"Common Prescribing Errors in Corneal Disease\", top two boxes and bottom-left box (lines 567–582)",
        "qs": []
      }
    ]
  },
  "op-cornea-surg": {
    "intro": "Almost everything here is one question in two directions: is this cornea the wrong SHAPE or the wrong CLARITY? Shape means topography, cross-linking and a rigid lens; clarity means a graft. Refractive surgery questions are keratoconus questions.",
    "sections": [
      {
        "id": "cor-12",
        "w": "must",
        "h": "Corneal ectasia and keratoconus — the signs, the topography, the ladder",
        "body": "**Corneal ectasia:** a group of conditions with **progressive corneal THINNING and PROTRUSION**.\n\n- **Types:** **KERATOCONUS (commonest)** · **pellucid marginal degeneration** · **keratoglobus**.\n- **Iatrogenic ectasia: post-LASIK**, from an insufficient **residual stromal bed**.\n- **⚠️ All of them:** cause **IRREGULAR ASTIGMATISM → reduced BEST SPECTACLE-CORRECTED acuity**. Glasses stop working — that is the problem.\n- **⚠️ Mandatory screen:** ectasia must be excluded before refractive surgery, by corneal **TOPOGRAPHY**.\n\n### Keratoconus — diagnosis\n- **What it is:** progressive **BILATERAL** (often asymmetric) thinning and protrusion.\n- **Course:** onset at **PUBERTY**, progressing until the 3rd–4th decade.\n- **Risk factors: EYE RUBBING · ATOPY · DOWN SYNDROME · connective tissue disorders.**\n- **VOGT STRIAE:** **vertical stromal stress lines** — stretch marks in the deep stroma.\n- **MUNSON SIGN:** a **V-shaped deformity of the LOWER LID ON DOWNGAZE**.\n- **ACUTE HYDROPS:** **sudden stromal oedema from a rupture of Descemet membrane**.\n- **TOPOGRAPHY: INFERIOR STEEPENING, ASYMMETRIC BOWTIE pattern.** This is the diagnostic instrument.\n\n### Management — an ordered ladder\n\n|Step|Option|When|\n|---|---|---|\n|**1**|**Spectacles**|early, mild|\n|**2**|**Soft / rigid contact lenses**|—|\n|**3**|**Scleral lenses**|advanced astigmatism|\n|**4**|**Corneal collagen CROSS-LINKING (CXL)**|to **stabilise progression**|\n|**5**|**Intracorneal ring segments (ICRS / Intacs)**|—|\n|**6**|**Keratoplasty — DALK preferred, or PKP**|end stage|\n\n- **⚠️ AVOID EYE RUBBING** — printed as its own instruction, and the one modifiable driver.\n\nSrc: L15,16 \"Corneal Ectasia\", \"Keratoconus: Diagnosis & Management\" (lines 244–286)",
        "qs": [
          "opqb-t2-99"
        ]
      },
      {
        "id": "cor-13",
        "w": "high",
        "h": "Collagen cross-linking — it stops the disease, it does not fix the vision",
        "body": "**CXL:** **riboflavin (vitamin B2) drops photosensitize the cornea, then UV-A irradiation strengthens the collagen crosslinks.**\n\n- **Effect:** it can **halt or even partially reverse** ectasia progression.\n- **Indication: DOCUMENTED PROGRESSIVE keratoconus in a YOUNG patient.** Documented progression, not merely a diagnosis.\n- **⚠️ CXL DOES NOT IMPROVE VISION — it stabilises progression.** A patient expecting better sight has been mis-consented.\n- **Combined CXL + ICRS**, or CXL + topography-guided ablation, in selected patients.\n- **Also used for:** post-LASIK ectasia (cor-23).\n\nSrc: L15,16 \"Corneal Collagen Cross-Linking (CXL): A Modern Tool\" (lines 287–300)",
        "qs": []
      },
      {
        "id": "cor-14",
        "w": "must",
        "h": "Corneal dystrophies — bilateral, heritable, and sorted by layer",
        "body": "**Definition: BILATERAL, primarily NON-INFLAMMATORY, HERITABLE, PROGRESSIVE opacifying disorders.**\n\n- **Classified by the affected layer:** epithelial · Bowman · stromal · Descemet/endothelial.\n- **Most are AUTOSOMAL DOMINANT; some recessive.**\n\n### The five must-know dystrophies\n\n|Dystrophy|Layer|Deposit / lesion|Inheritance|\n|---|---|---|---|\n|**Epithelial basement membrane (MAP-DOT-FINGERPRINT)**|epithelial|— · presents with **RECURRENT EROSIONS**|—|\n|**GRANULAR** (**TGFB1** gene)|stromal|**BREADCRUMB opacities, CLEAR stroma BETWEEN lesions**|**AD**|\n|**LATTICE**|stromal|**AMYLOID — CONGO RED positive**, lattice lines|**AD**|\n|**MACULAR**|stromal|**GLYCOSAMINOGLYCANS**; **EARLIEST onset, WORST vision**|**AR**|\n|**FUCHS endothelial**|endothelial|**GUTTATA**, oedema, **worse in the MORNING**|—|\n\n- **⚠️ Macular:** the odd one out in three ways at once — **recessive, earliest, worst**. Its stroma between lesions is **cloudy**, unlike granular.\n- **Surgical answer depends on the layer:** stromal dystrophies → **DALK**; **Fuchs → DSAEK / DMEK**.\n\nSrc: L15,16 \"Corneal Dystrophies: Classification & Key Features\" (lines 301–318)",
        "qs": []
      },
      {
        "id": "cor-15",
        "w": "must",
        "h": "Fuchs endothelial dystrophy — the morning blur",
        "body": "**Mechanism:** abnormal endothelial cell function → loss of the dehydrating pump.\n\n### The sequence\n- **First change:** collagen deposited on Descemet membrane → **GUTTATA** (excrescences).\n- **Early: guttata on SPECULAR reflection** — dark spots disrupting the endothelial mosaic.\n- **Progressive → ‘BEATEN METAL’ endothelium.**\n- **Then:** corneal oedema, central stromal then epithelial → **BULLOUS KERATOPATHY**.\n\n### ⚠️ The characteristic symptom\n- **The giveaway:** vision **WORSE IN THE MORNING**, improving through the day.\n- **Why:** overnight the lids are closed, **evaporation stops, oedema is maximal on waking**; through the day evaporation draws the water back out.\n- **Risk factors: FEMALE sex, older age (5th–6th decade).**\n\n### Management\n- **Conservative: hypertonic NaCl 5 %**, and a **hair dryer held 10 cm from the face**.\n- **Surgical: DMEK (preferred) or DSAEK** when vision is significantly affected.\n- **Monitoring:** endothelial cell density, by **SPECULAR MICROSCOPY**.\n\nSrc: L15,16 \"Fuchs’ Endothelial Dystrophy\", \"Clinical Scenario 3\" (lines 319–335, 529–545)",
        "qs": []
      },
      {
        "id": "cor-16",
        "w": "high",
        "h": "Corneal degenerations — arcus, band keratopathy, pterygium and the rest",
        "body": "*Degenerations are acquired, often age-related and frequently unilateral — the opposite of a dystrophy on every axis.*\n\n### Arcus senilis\n- **A lipid arc at the limbus.** **Physiological in the elderly.**\n- **⚠️ Arcus under 45:** check the lipids.\n\n### Band keratopathy\n- **Deposit:** **CALCIUM in BOWMAN LAYER**, in the **INTERPALPEBRAL zone** — the strip the lids leave exposed.\n- **Causes:** **chronic anterior uveitis** · **HYPERCALCAEMIA** · **silicone oil in the anterior chamber**.\n- **Also:** end-stage ocular disease · **gout (hyperuricaemia)** · familial/hereditary · idiopathic age-related.\n- **Treatment: EDTA CHELATION (effective), or excimer laser PTK.**\n\n### Pterygium and pinguecula\n\n|  |**PTERYGIUM**|**PINGUECULA**|\n|---|---|---|\n|What|**fibrovascular growth from conjunctiva ENCROACHING ONTO THE CORNEA**|**yellowish nasal or temporal conjunctival lesion**|\n|Limbus|**CROSSES it**|**does NOT cross it**|\n|Associated with|**UV exposure**|—|\n|Treatment|**surgical excision if it affects vision or induces astigmatism**|—|\n\n### Salzmann nodular degeneration\n- **SUBEPITHELIAL FIBROUS NODULES**; can cause **irregular astigmatism**.\n\n*A shearing injury such as a fingernail damages the epithelial basement membrane, so recurrent erosion may follow for months or years — the same syndrome map-dot-fingerprint dystrophy produces (the traumatic cause is not taken from the course material).*\n\nSrc: L15,16 \"Corneal Degenerations\" (lines 336–359)",
        "qs": []
      },
      {
        "id": "cor-17",
        "w": "high",
        "h": "Neurotrophic and exposure keratopathy — an anaesthetic cornea and an uncovered one",
        "body": "### Neurotrophic keratopathy\n- **Sequence: TRIGEMINAL ANAESTHESIA → epithelial breakdown → PERSISTENT EPITHELIAL DEFECT → MELTING.**\n- **Causes: HSV · HZV · ACOUSTIC NEUROMA SURGERY · diabetes mellitus · TOPICAL ANAESTHETIC ABUSE.**\n- **Treatment: PRESERVATIVE-FREE lubrication · bandage lens · TARSORRHAPHY · CENEGERMIN (nerve growth factor) drops.**\n- **⚠️ The trap:** the cornea does not hurt, so the patient does not complain — and it is found late.\n\n### Exposure keratopathy\n- **Mechanism:** **incomplete lid closure → INFERIOR epithelial breakdown**. The exposed strip is the lower third.\n- **Causes: VII NERVE PALSY (Bell) · THYROID EYE DISEASE · PROPTOSIS.**\n- **Treatment: lubricants · taping the eyelid · moisture chamber · TARSORRHAPHY.**\n\nSrc: L15,16 \"Corneal Degenerations\" (neurotrophic), \"Exposure Keratopathy\" (lines 360–367, 378–387)",
        "qs": []
      },
      {
        "id": "cor-18",
        "w": "high",
        "h": "Peripheral corneal ulceration — three entities, and one needs a systemic work-up",
        "body": "|  |**Marginal keratitis**|**Mooren ulcer**|**Peripheral ulcerative keratitis (PUK)**|\n|---|---|---|---|\n|Mechanism|**IMMUNE reaction to STAPHYLOCOCCAL antigens**|**idiopathic, immune-mediated**|**systemic VASCULITIS**|\n|Appearance|**peripheral SUBEPITHELIAL INFILTRATES with a CLEAR LIMBAL ZONE**|**painful, progressive peripheral ulceration with an OVERHANGING CENTRAL EDGE**|peripheral ulceration|\n|Association|**BLEPHARITIS**|none|**RA · GPA · SLE**|\n|Management|**treat the blepharitis + topical steroids**|**difficult to treat**|**⚠️ URGENT SYSTEMIC WORK-UP**|\n\n- **⚠️ The clear limbal zone:** the marginal-keratitis giveaway. The immune infiltrate sits away from the vessels that fed it.\n- **⚠️ PUK:** not primarily an eye disease. It marks **active systemic vasculitis**, with the eye presenting first.\n\nSrc: L15,16 \"Peripheral Corneal Ulceration & Neurotrophic Keratopathy\" (lines 368–377)",
        "qs": []
      },
      {
        "id": "cor-19",
        "w": "must",
        "h": "Keratoplasty — the indications, the contraindications, and the four operations",
        "body": "**Corneal transplantation: replacement of diseased host tissue with a healthy donor cornea. It is the MOST COMMONLY PERFORMED AND MOST SUCCESSFUL SOLID ORGAN TRANSPLANT.**\n\n### The three indication groups\n- **OPTICAL:** keratoconus, scarring, dystrophies, **pseudophakic bullous keratopathy**.\n- **TECTONIC:** **restore integrity** — descemetocele, perforation.\n- **THERAPEUTIC:** **remove infected tissue** — active keratitis failing medical therapy.\n\n### Contraindications\n- **Ocular:** **active uncontrolled infection** · **dry eye / ocular surface failure** · **uncontrolled glaucoma**.\n- **Prognostic:** **poor visual potential** (retinal or optic nerve disease) · severe systemic illness · **non-compliance risk**.\n\n### The four operations\n\n|  |**PKP**|**DALK**|**DSAEK**|**DMEK**|\n|---|---|---|---|---|\n|**What is replaced**|**FULL THICKNESS, all layers**|**epithelium + stroma down to Descemet; HOST ENDOTHELIUM PRESERVED**|**Descemet stripped, POSTERIOR STROMA transplanted**|**ONLY Descemet + endothelium, 5–10 µm**|\n|**Technique**|—|**BIG BUBBLE**|small incision **~5 mm**|technically most demanding, **graft handling**|\n|**Best for**|scarring, perforations, **failed DALK**|**KERATOCONUS**, stromal dystrophies|**FUCHS**, bullous keratopathy|**FUCHS — preferred**|\n|**Rejection**|**HIGHEST rate**|**NO endothelial rejection risk; lowest overall**|lower than PKP|**LOWEST of the endothelial grafts**|\n|**Recovery / catch**|**SLOWEST**; **sutures in situ 12–18 months**|—|faster than PKP; **slight HYPEROPIC shift, interface haze**|**FASTEST · BEST VISUAL OUTCOMES OF ALL**|\n\n- **⚠️ The pattern:** the less you transplant, the less there is to reject. **DMEK moves 5–10 µm and has the best outcomes of any keratoplasty.**\n\nSrc: L15,16 \"Keratoplasty: Overview & Indications\", \"Types of Keratoplasty: Comparison\" (lines 394–430)",
        "qs": []
      },
      {
        "id": "cor-20",
        "w": "must",
        "h": "Corneal graft rejection — an emergency, and it is treated on suspicion",
        "body": "**⚠️ Red flag:** new blurred vision in a keratoplasty patient is **REJECTION UNTIL PROVED OTHERWISE** — the deck prints it as such.\n\n- **Symptoms: SUDDEN blurred vision, pain, redness, photophobia. This is an EMERGENCY.**\n\n### Signs — **KSS**: **K**rachmer rejection line, **S**ubepithelial infiltrates, **S**tromal oedema\n- **EPITHELIAL rejection:** an **elevated rejection line of abnormal epithelium**, around **3 months post-op**.\n- **STROMAL / ENDOTHELIAL rejection:** **keratic precipitates on the donor endothelium (KRACHMER spots)**, **corneal oedema**, and the **KHODADOUST line**.\n\n### Treatment\n- **INTENSIVE topical steroids — prednisolone acetate 1 % HOURLY.**\n- **Systemic steroids** for severe cases.\n- **⚠️ Treat EARLY:** intensive early treatment **greatly improves the chance of reversing the episode and saving the graft**. Delay costs it.\n\nSrc: L15,16 \"Corneal Graft Rejection: Recognition & Emergency Treatment\", \"Red Flags\" (lines 431–447, 621–629)",
        "qs": []
      },
      {
        "id": "cor-21",
        "w": "must",
        "h": "Refractive surgery — selection, and the two investigations that are mandatory",
        "body": "**Goal: permanently alter corneal curvature to reduce or eliminate refractive error.**\n\n### ⚠️ The two most important pre-operative investigations\n\n|Test|Measures|The question it answers|\n|---|---|---|\n|**CORNEAL TOPOGRAPHY**|**curvature across the WHOLE surface**|**Is the shape normal, or is there an early ectasia?** — **RULE OUT keratoconus**|\n|**PACHYMETRY**|**corneal THICKNESS**|**Is there enough tissue to cut safely?**|\n\n- **⚠️ Why these two:** LASIK is corneal surgery, so the cornea is what is measured — its **SHAPE** and its **THICKNESS**. Biometry (axial length) and keratometry belong to **cataract surgery and IOL power** (L18) — neither is a pre-LASIK test.\n\n### The rest of the mandatory work-up\n- **Refraction STABLE for ≥1 year** · **adequate tear film — Schirmer, TBUT** · **PUPIL SIZE IN DIM LIGHT** · **discontinue contact lenses before mapping**.\n- **Age: typically ≥18–21 years** with a stable refraction.\n\n### Contraindications\n- **FORME FRUSTE KERATOCONUS** · **thin cornea <500 µm** · **unstable refraction** · **dry eye** · **active inflammation**.\n- **⚠️ LASIK IS CONTRAINDICATED IN KERATOCONUS** — it causes severe post-operative ectasia. **CXL + ICRS may be appropriate instead.**\n\n- **Main procedures: LASIK · PRK (surface ablation) · SMILE · phakic IOL.**\n\nSrc: L15,16 \"Refractive Surgery: Principles & Patient Selection\", \"Common Prescribing Errors\" bottom-right box (lines 448–461, 581–586); L18 (keratometry and axial length for IOL power), cited only",
        "qs": [
          "opqb-t2-93"
        ]
      },
      {
        "id": "cor-22",
        "w": "high",
        "h": "The four laser procedures compared",
        "body": "|  |**LASIK**|**PRK (surface ablation)**|**FemtoLASIK**|**SMILE**|\n|---|---|---|---|---|\n|**Access**|**FLAP** cut by microkeratome or femtosecond laser|**epithelium REMOVED; ablation directly on BOWMAN**|**femtosecond flap — more precise, THINNER, no blade**|**femtosecond cuts a LENTICULE inside an INTACT cornea, removed through a 4 mm incision — NO FLAP**|\n|**Recovery**|**FAST, 1–2 days**|**SLOW — 3–5 days of pain, weeks for clarity**|as LASIK|fast|\n|**Risks**|**flap dislocation · ECTASIA · DLK (‘sands of Sahara’)**|**subepithelial HAZE — MMC applied to prevent it**|**still carries all LASIK risks**|**lower infection and ectasia risk; minimal flap issues**|\n|**Advantage**|**wide range — myopia up to −10 D**|**no flap → safer for CONTACT SPORTS and thin corneas**|**better predictability; allows mildly thin corneas**|**less corneal nerve damage → LESS DRY EYE**|\n|**Limit**|—|**used when LASIK is contraindicated**|—|**myopia + astigmatism; hyperopia limited**|\n\n- **⚠️ The flap is the whole trade-off.** A flap buys fast comfortable recovery and costs flap complications and biomechanical strength; no flap costs pain or precision and buys safety.\n\nSrc: L15,16 \"Laser Refractive Procedures: Comparison\" (lines 462–480)",
        "qs": []
      },
      {
        "id": "cor-23",
        "w": "must",
        "h": "Post-LASIK ectasia — the numbers that decide, and what to do if it happens",
        "body": "**⚠️ The feared one:** ectasia is the most feared long-term complication of LASIK.\n\n### Risk factors\n- **FORME FRUSTE KERATOCONUS** · **thin cornea** · **young age** · **high myopia** · **LOW RESIDUAL STROMAL BED (RSB <300 µm)**.\n\n### The numbers\n\n|Measurement|Threshold|Status|\n|---|---|---|\n|**Central corneal thickness**|**<500 µm**|**RELATIVE contraindication** (checklist target **≥500 µm**)|\n|**Residual stromal bed**|**<300 µm**|**⚠️ ABSOLUTE CONTRAINDICATION** (target **≥300 µm** post-op)|\n|**Topography**|**asymmetric bowtie · inferior steepening**|**CONTRAINDICATION** — must be a regular pattern|\n|**Refraction**|unstable|must be **stable ≥1 year**|\n|**Age**|—|**≥21 years**|\n\n- Plus **no forme fruste keratoconus** and **informed consent** — the deck’s full safe-surgery checklist.\n- **⚠️ Red flag: keratoconus-like topography → DO NOT OPERATE.**\n\n### If ectasia develops\n- **CXL to halt progression** (cor-13). **⚠️ DO NOT OFFER MORE LASER** — more ablation removes more of the stroma that is already failing.\n\nSrc: L15,16 \"Screening for Refractive Surgery: Avoiding Ectasia\", \"Top 10 Take-Home Messages\", \"Red Flags\" (lines 481–496, 608–629)",
        "qs": [
          "opqb-t2-93"
        ]
      },
      {
        "id": "cor-24",
        "w": "must",
        "h": "Irregular astigmatism — why keratometry fails, and why a rigid lens works",
        "body": "**IRREGULAR ASTIGMATISM** — the less common type: the **meridia of minimum and maximum power are NOT PERPENDICULAR**, with **irregular change in power between them**.\n\n- **Cause: an irregular, distorted cornea — CORNEAL SCARS and KERATOCONUS.**\n- **⚠️ Clinical signature:** vision does **NOT** improve with a spherical lens — and a cylinder does no better, because a cylinder can only correct one pair of perpendicular meridians.\n\n### ⚠️ Keratometry vs topography — the reason topography exists\n\n|  |**Keratometry**|**Corneal TOPOGRAPHY**|\n|---|---|---|\n|Samples|**a few central points, in TWO meridians**|**the WHOLE corneal surface**|\n|Assumes|**that the two principal meridia are PERPENDICULAR**|**nothing — it maps what is there**|\n|On an irregular cornea|**its own premise is violated, so the reading is misleading**|**shows the actual distorted contour**|\n|Where it is used|**cataract surgery — corneal curvature for IOL power**|**cornea: keratoconus and pre-LASIK screening**|\n\n*The sampling contrast is supplied and tagged; keratometry appears in the course material only as \"Keratometry (corneal curvature)\" in the cataract biometry list.*\n\n### The correction ladder\n\n|Step|Option|\n|---|---|\n|**1**|**Glasses — MILD DEGREES ONLY**|\n|**2**|**RIGID GAS-PERMEABLE (RGP) contact lenses**|\n|**3**|**Intracorneal ring (ICR) segments**|\n|**4**|**Keratoplasty**|\n\n- **⚠️ Why RGP and not a soft toric:** a **soft lens DRAPES onto the cornea** and reproduces the irregularity on its own front surface. A **rigid lens VAULTS over it**, and the **tear film fills the gap** — tears and cornea have almost the same refractive index, so the distorted surface is **optically neutralised** and the lens’s own regular front surface refracts the eye. *(The mechanism is supplied; the deck gives only the answer.)*\n- **⚠️ LASIK is contraindicated here** — it is for **regular** astigmatism, and ablating an already-compromised cornea risks ectasia (cor-23).\n\nSrc: L7,8 \"Astigmatism — Irregular\", \"Treatment\" (lines 402–442), cited only; L18 (keratometry), cited only; L15,16 \"Corneal Ectasia\" (irregular astigmatism reduces best-corrected acuity); the keratometry contrast and the RGP mechanism are supplied and tagged",
        "qs": [
          "opqb-t2-99",
          "opqb-t2-100"
        ]
      }
    ]
  },
  "op-va": {
    "intro": "The first four of the five vital signs, plus the inspection run. Acuity is a fraction and a ladder; the pinhole splits optical blur from disease; the field test is chosen by the acuity; then nine structures are looked at in a fixed order.",
    "sections": [
      {
        "id": "va-1",
        "w": "know",
        "h": "The examination — the order it is done in, and the tools",
        "body": "### The six steps, in the deck’s own order\n1. **Inspection:** eyelids, lacrimal, orbit, conjunctiva, cornea, sclera, iris, lens.\n2. **Anterior chamber:** depth and contents.\n3. **Pupillary reactions.**\n4. **Intraocular pressure (IOP) evaluation.**\n5. **Extraocular muscle actions.**\n6. **Fundus examination.**\n\n**The five vital signs of the eye:** visual acuity · visual field · pupils · extraocular movements · fundus — **± IOP** as the sixth.\n\n### The five tools\n- **Penlight** · **mydriatic eyedrops** · **topical anaesthetic drops** · **direct ophthalmoscope** · **fluorescein strips**.\n- **Named on the slide photographs:** tropicamide, **BENOX 0.4 %** (benoxinate), **FUL-GLO** fluorescein strips.\n\n### The slit lamp\n- **Used by:** the ophthalmologist, for the **anterior segment**.\n- **Also used for:** the **red reflex** and **fundus examination (biomicroscopy)**.\n\n*Steps 3–6 are written in `op-pupil`; the IOP number and its meaning in `op-glauc`.*\n\nSrc: L3,4 sl.2–4; L1,2 lines 390–437 (cited only, not counted)",
        "qs": []
      },
      {
        "id": "va-2",
        "w": "must",
        "h": "Visual acuity — the definition, the fraction, and the charts",
        "body": "**Visual acuity:** a measurement of the **smallest object a person can identify at a given distance**, compared with normal.\n\n**Recorded as a ratio** comparing the patient with a normal person.\n\n### The fraction, and what each number is\n\n- **The formula:** VA = **testing distance (6 m) ÷ the smallest line read**.\n- **Upper number:** the distance **the chart is from the patient** — always **6 m**.\n- **Lower number:** the distance **a normal eye reads that line from**.\n- **So 6/12 means:** sees at **6 m** what a normal eye sees at **12 m**.\n- **6 m (20 ft):** taken as **optical infinity** — accommodation at rest.\n\n### The three charts\n- **Snellen chart:** letters. Needs literacy.\n- **E-chart:** which way the strokes of the **E** point.\n- **Landolt C-chart:** where the **C’s opening** lies.\n\n### The conversion table\n\n|Metres|Feet|Decimal|\n|---|---|---|\n|**6/6**|20/20|**1.0**|\n|6/7.5|20/25|0.8|\n|6/9|20/30|0.67|\n|**6/12**|20/40|**0.5**|\n|**6/18**|20/60|0.33|\n|6/24|20/80|0.25|\n|6/30|20/100|0.2|\n|6/36|20/120|0.16|\n|**6/60**|20/200|**0.1**|\n|6/120|20/400|0.05|\n\nSrc: L1,2 lines 438–470",
        "qs": [
          "opqb-t1-38"
        ]
      },
      {
        "id": "va-3",
        "w": "high",
        "h": "Testing acuity at six metres — the method, and how it is recorded",
        "body": "### The eight steps\n1. **Ensure good illumination** of the room and the chart.\n2. **Position the patient at 6 metres** from the chart, sitting or standing.\n3. **Test one eye at a time** — **first without, then with spectacles** if available.\n4. **Occlude the other eye** with a plain occluder, card or palm — **never pressing on the eye**.\n5. **Ask for the direction** of the E strokes or the C opening, or for the Snellen letters.\n6. **Start at the top of the chart** (the **6/60 optotype**) and work downwards.\n7. **Record the smallest line read as a fraction** — e.g. 6/18.\n8. **Repeat for the other eye.**\n\n### Recording\n- **Report each eye separately, right eye first**, and state **with or without correction**.\n- **The deck’s own example:** without correction Rt 6/18, Lt 6/24; with correction Rt 6/6, Lt 6/12.\n\n*Pressing on the occluded eye distorts its cornea and invalidates the next reading (not in course material).*\n\nSrc: L1,2 lines 471–508",
        "qs": []
      },
      {
        "id": "va-4",
        "w": "must",
        "h": "The pinhole test — the one step that splits optical blur from disease",
        "body": "**The trigger, verbatim:** \"**If 6/6 is not achieved, repeat VA testing using a pinhole occluder** (with or without spectacles).\"\n\n**The principle, verbatim:** \"**The use of the pinhole reduces the need to focus light entering the eye.**\"\n\n### Reading the result\n\n|Pinhole result|The cause is|What follows|\n|---|---|---|\n|**VA IMPROVES**|**refractive error**|correctable with **spectacles or a new prescription**|\n|**VA WORSENS or does not improve**|**another ocular pathology**|the media, retina or optic nerve — dilate and examine|\n\n- **⚠️ The trap:** failing with the patient’s **own** glasses does **not** exclude refractive error — an out-of-date prescription is itself one.\n\n### Why worsening points at the MACULA\n- **The optics:** a pinhole **cuts retinal illumination** and restricts the image to the **central fovea alone** *(not in course material)*.\n- **The result:** a diseased fovea gets dimmer light and no optical help, so **macular oedema and AMD read worse** *(not in course material)*.\n- **Improve instead:** early cataract, myopic and hyperopic astigmatism, keratoconus.\n\n*The pinhole is also called a **stenopic aperture** — the same instrument, and the term the bank uses (not in course material).*\n\nSrc: L1,2 lines 509–517",
        "qs": [
          "opqb-t1-25",
          "opqb-t1-26",
          "opqb-t2-84",
          "opqb-t2-92"
        ]
      },
      {
        "id": "va-5",
        "w": "must",
        "h": "When the top letter cannot be read — the low-vision ladder",
        "body": "**The question the deck asks:** \"What if the patient cannot read the largest (top) letter at 6 metres?\" Taken strictly in order.\n\n### The ladder\n1. **Walk the patient in —** one metre at a time, until the top letter is seen. **Record as 5/60, 4/60, 3/60**; the numerator is the new distance.\n2. **Nothing at 1 metre — count fingers.** Extend **two or more fingers** at varying distances **under 1 metre**.\n3. **Record the distance** at which counting is accurate — e.g. **CF 50 cm**.\n4. **Cannot count fingers — wave your hand.** If seen, record **hand movements (HM)**.\n5. **Cannot detect hand motion — shine a torch.** Seen = **perception of light (PL)**; not seen = **no perception of light (NoPL / NPL)**.\n\n### The ladder as one line\n**6/60 → 5/60 → 4/60 → CF → HM → PL → NPL.** Each rung is only tried after the one above has failed, and **NPL is the floor** — an eye with no light perception at all.\n\nSrc: L1,2 lines 518–543",
        "qs": [
          "opqb-t1-27",
          "opqb-t1-28"
        ]
      },
      {
        "id": "va-6",
        "w": "must",
        "h": "The pre-verbal child, referral, and the blindness figure",
        "body": "**The problem:** every method above needs a patient who can name a letter or point a direction. **Under about three years none of them work** *(not in course material)*.\n\n### Testing a child who cannot read\n- **E-chart / Landolt C:** the deck’s literacy-free charts — but a direction must still be indicated.\n- **CSM:** the **fixation** test, and the bedside standard in infants *(not in course material)*.\n- **Preferential looking:** paired blank and striped cards; the finest stripe the infant looks at gives an acuity *(not in course material)*.\n\n### CSM, and objection to occlusion\n- **C — Central:** the corneal light reflex sits **centrally**.\n- **S — Steady:** fixation held, **no wandering or nystagmus**.\n- **M — Maintained:** fixation **held when the other eye is uncovered**.\n\n- **⚠️ The rule:** a child objects to having the **GOOD** eye covered — it forces vision through the bad one *(not in course material)*.\n- **Reading it:** resisting occlusion of the **RIGHT** eye means the right eye is better, so the **LEFT** is amblyopic.\n\n### The two thresholds\n- **Referral:** the deck’s trigger is that **6/6 was not achieved**. Below 6/6 uncorrected by pinhole, or with symptoms, is referred *(the rule is not in course material)*.\n- **Blindness (WHO):** **best-corrected VA ≤ 3/60** in the better eye *(not in course material)*.\n- **⚠️ A wording difference:** WHO writes the category **< 3/60**; the bank prints **≤ 3/60** and keys it — noted, key as printed.\n\nSrc: L1,2 lines 459, 509–512 (the 6/6 trigger); CSM, preferential looking, the referral rule and the 3/60 figure supplied and tagged — zero hits across all 27 cached decks",
        "qs": [
          "opqb-t1-29",
          "opqb-t1-30",
          "opqb-t2-78",
          "opqb-t1-63",
          "opqb-t1-39"
        ]
      },
      {
        "id": "va-7",
        "w": "must",
        "h": "Visual field testing — the acuity chooses the test",
        "body": "### Which test, and when\n\n|Test|Requirement / scope|\n|---|---|\n|**Confrontation**|**VA = 1/60 or better**|\n|**Light projection**|**VA less than 1/60**|\n|**Amsler grid**|the **central 10°** of the field|\n|**Perimetry**|**manual** or **automated**|\n\n- **Confrontation first:** no equipment, and it gives **gross detection of significant field defects**.\n\n### Confrontation — the method\n1. **Sit ONE metre in front of the patient**, both your eyes level with theirs.\n2. **The patient covers the left eye** with the left palm.\n3. **You close your right eye** — preferably with your palm.\n4. **The patient fixates your left eye**, then **counts your fingers** held midway, in each of **the 4 quadrants**.\n5. **Repeat for the patient’s left eye**, then **record the result**.\n\n**The principle:** the **examiner’s left eye** field is the reference for the **patient’s right eye**, and vice versa.\n\n### The N.B. on the slide\n- **Alternative:** advance a finger **from the periphery** — superior, temporal, inferior, nasal — until **first seen**.\n- **⚠️ Limitation:** gives the field’s **outlines** but **not which quadrants are affected**.\n\n### Light projection\n- **For an eye below 1/60.** Penlight, other eye occluded.\n- **From each quadrant:** superior, inferior, temporal, nasal — the patient names the direction.\n- **Recorded as:** **good light projection (GLP)** or **bad light projection (BLP)**.\n\nSrc: L1,2 lines 544–613",
        "qs": [
          "opqb-t1-31",
          "opqb-t1-40",
          "opqb-t1-41"
        ]
      },
      {
        "id": "va-8",
        "w": "know",
        "h": "Colour vision — the complementary test",
        "body": "- **On the slide:** one of the three **complementary tests** — with upper-eyelid eversion and fluorescein staining. Named, and no more.\n\n### The test itself\n- **Ishihara pseudo-isochromatic plates:** the standard screen for **red–green** defects *(not in course material)*.\n- **How they work:** dots differ from the background **in hue but not brightness**, so only a normal trichromat reads the numeral *(not in course material)*.\n- **Not tested by them:** blue–yellow (tritan) defects, and acuity *(not in course material)*.\n\n*L1,2 lists **colour blindness** among the presenting symptoms; the symptom is `op-vissym`’s.*\n\nSrc: L1,2 lines 424–428 (cited only, not counted); Ishihara supplied and tagged — the only \"Ishihara\" string in all 27 cached decks is L3,4’s own NOT-COVERED note",
        "qs": [
          "opqb-t1-52"
        ]
      },
      {
        "id": "va-9",
        "w": "know",
        "h": "Eyelid, lacrimal and orbit — the inspection checklist",
        "body": "**These slides are labelled photographs.** The deck teaches *what to look for and name*; the diseases themselves belong to the chapters cited below.\n\n### Eyelid — \"you may find\"\n- **Stye** — acute lash-follicle abscess at the lid margin.\n- **Chalazion** — chronic painless meibomian granuloma in the tarsus.\n- **Entropion** — lid margin turned **in**; the lashes rub the cornea.\n- **Ectropion** — lid margin turned **out**; the punctum leaves the tear lake.\n- **Ptosis** — drooping upper lid.\n- **Lagophthalmos** — the lids **fail to close**, so the cornea dries.\n- **BCC** — basal cell carcinoma, the commonest lid malignancy.\n- **Xanthelasma** — yellow lipid plaques, typically medial.\n\n### Lacrimal — \"you may find\"\n- **Dacryoadenitis** — inflamed lacrimal **gland**; swelling is **upper outer** lid.\n- **Dacryocystitis** — inflamed lacrimal **sac**; swelling is **below the medial canthus**.\n- **+ve Regurge** — pressure over the sac returns fluid through the punctum, proving **nasolacrimal duct obstruction**.\n\n### Orbit\n- **Proptosis:** the only orbital sign this deck shows — a lateral view and a **\"worm’s-eye\" (submental) view** to compare globe projection between the two sides.\n\n*Lid disease is `op-lid`’s (`L5`), the lacrimal system `op-lac`’s (`L9`), and proptosis in full — mechanisms, causes by age, direction, the >20 mm and 2–3 mm numbers — is already written in `op-orbit`.*\n\n*Every gloss above beyond the printed label is not in course material.*\n\nSrc: L3,4 sl.5–8",
        "qs": []
      },
      {
        "id": "va-10",
        "w": "high",
        "h": "Conjunctiva — everting the upper lid, and what is then seen",
        "body": "### Why evert\n- **To search for a conjunctival foreign body**, or other conjunctival signs.\n\n### The technique\n1. **Ask the patient to look DOWN** and keep looking down.\n2. **Grasp the upper lashes** between thumb and index finger.\n3. **Press gently downward with a cotton-tipped applicator** over the **superior border of the tarsal plate**.\n4. **Pull the lid margin upward by the lashes** as you press — the lid flips over the applicator.\n5. **Inspect the exposed conjunctival surface with the penlight** for a foreign body or other abnormality.\n6. **A foreign body can be removed** with a cotton-tipped applicator **soaked in topical anaesthetic**.\n\n- **To reverse it:** **release the lid margin** and ask the patient to **look up**, or simply **blink**.\n\n### What you may find\n- **Papillae · follicles · giant papillae** — the three surface reaction patterns.\n- **Pterygium · scarring T4** (trachomatous scarring grade) **· PTCs** (pale trachomatous / conjunctival concretions).\n\n### Redness — three appearances, three meanings\n- **Conjunctival injection:** superficial vessels, **maximal in the fornices**, mobile over the sclera.\n- **Ciliary injection:** deep vessels, **maximal around the limbus** — a **circumcorneal flush**, and the sign of keratitis, iritis or acute glaucoma.\n- **Subconjunctival haemorrhage:** a flat sheet of blood with **no vessels visible within it**.\n\n*The injection distinctions beyond the three printed labels are not in course material; the full discrimination is `op-red`’s and `op-conj`’s.*\n\nSrc: L3,4 sl.9–13",
        "qs": []
      },
      {
        "id": "va-11",
        "w": "high",
        "h": "Cornea — the signs, and staining with fluorescein",
        "body": "### What you may find\n- **Foreign body** · corneal erosion · erosion stained with fluorescein.\n- **Opacity (scarring)** · infective keratitis · dendritic ulcer — the dendritic ulcer being herpes simplex.\n\n### Fluorescein staining — the method, in full\n- **What it is:** a **yellow dye** that gives a **green colour** when illuminated with the **cobalt blue filter** of the ophthalmoscope or slit lamp.\n- **What it is for:** **diagnosing defects of the corneal EPITHELIUM**.\n- **How it is applied:** a **sterile filter-paper strip**, **moistened with topical anaesthetic**, then **touched to the palpebral conjunctiva**.\n- **How it spreads:** **a few blinks** carry it over the cornea.\n- **How it reads:** **areas of bright-green staining denote absent or diseased epithelium**.\n\n*Corneal disease itself is `op-cornea`’s (`L15,16`), which is text-sufficient.*\n\nSrc: L3,4 sl.14–16",
        "qs": []
      },
      {
        "id": "va-12",
        "w": "know",
        "h": "Sclera and iris — what the deck shows",
        "body": "### Sclera — \"you may find\"\n- **Episcleritis** — superficial, sectoral, **usually painless**, self-limiting.\n- **Scleritis** — deep, **boring pain**, a violaceous hue, and sight-threatening.\n\n### Iris — \"you may find\"\n- **Iridodialysis** — the iris root **torn from the ciliary body**, leaving a **D-shaped peripheral gap**. Blunt trauma.\n- **Posterior synechiae** — the iris **adherent to the anterior lens capsule**; the pupil dilates irregularly. Uveitis.\n- **Rubeosis iridis** — **new vessels on the iris surface**, from retinal ischaemia.\n\n*Episcleritis vs scleritis in full, and the uveal disease behind synechiae, are `op-sclera`’s and `op-uvea`’s (`L13,14`). The festooned pupil of synechiae is in `op-pupil`; rubeosis and its retinal cause are in `op-glauc` and `op-ret`.*\n\n*Every gloss above beyond the printed label is not in course material.*\n\nSrc: L3,4 sl.17–18",
        "qs": []
      },
      {
        "id": "va-13",
        "w": "must",
        "h": "Lens — how it is examined, and what the pupil colour means",
        "body": "### How the lens is examined\n- **Focal illumination** · slit lamp · direct ophthalmoscope.\n\n### ⚠️ Pupil colour — the slide, in full\n\n|Pupil colour|What it is|Red reflex|\n|---|---|---|\n|**Black**|**newly born**, and **aphakia** — clear media, no lens|bright and full|\n|**Greyish, in old age**|**Nuclear sclerosis**|**BRIGHT RR**|\n|**Greyish, in old age**|**IMSC** (immature senile cataract)|**DIM RR**|\n|**Leukocoria (white)**|**Mature cataract**|absent|\n\n- **⚠️ The discriminator:** the reflex, not the colour. Both look grey through the pupil; **nuclear sclerosis keeps a bright red reflex** because the opacity is dense but small and central, while **an immature senile cataract dims it** because the cortex is diffusely cloudy.\n\n*`L18` describes the nuclear reflex as \"altered / central dark nucleus\" rather than \"bright\" — noted; L3,4 is this chapter’s deck and prints **bright RR**.*\n\n### The four cataract appearances\n- **IMSC** — immature senile cataract; **incomplete opacification of the cortex**.\n- **MSC** — mature senile cataract; **totally opaque white lens**.\n- **Hypermature, shrunken type** — **shrinkage of the capsule, liquefaction of the cortex**, wrinkled capsule.\n- **Morgagnian** — **liquefied cortex with the nucleus sinking** within the capsule.\n\n### Two more lens signs\n- **Opacities:** appear as DARK SHADOWS against the red reflex — silhouetted, so a small opacity is seen long before it whitens the pupil.\n- **The lens may be SUBLUXATED** — a displaced lens edge is seen crossing the pupil.\n\nSrc: L3,4 sl.19–23; L17 lines 139–147, L18 lines 168–197 (`op-cat`’s decks — cited only, not counted)",
        "qs": []
      },
      {
        "id": "va-14",
        "w": "must",
        "h": "The anterior chamber — depth, and contents",
        "body": "### ⚠️ Assessing depth — the penlight (eclipse) test\n1. **Shine a light from the TEMPORAL side of the head**, across the front of the eye, **parallel to the plane of the iris**.\n2. **Look at the NASAL aspect of the iris.**\n\n- **⚠️ The rule, verbatim —** if **two-thirds or more of the nasal iris is in shadow**, the chamber is **probably shallow** and the **angle narrow**.\n- **Why it works:** a forward-bowed iris casts its own shadow nasally; a deep chamber lets the beam wash across evenly *(not in course material)*.\n- **Graded on the slit lamp as:** **shallow · normal · deep.**\n\n### Causes — the table\n\n|Shallow AC|Deep AC|\n|---|---|\n|**Hypermetropia**|**High myopia**|\n|**Angle closure glaucoma**|**Aphakia**|\n|**Intumescent cataract**|**Buphthalmos**|\n|**Perforated corneal ulcer**|—|\n|**Leakage from a surgical wound**|—|\n\n- **The pattern:** a **short eye or a swollen lens** crowds the chamber; a **long eye or no lens** empties it. The two trauma entries — perforation and wound leak — drain aqueous, so the chamber collapses.\n\n### Contents\n- **Blood — hyphaema.**\n- **Pus — hypopyon.**\n- **Cells & flare — uveitis.**\n\n*The clinical consequence — never dilate an occludable angle, and what to do instead — is written in `op-glauc`.*\n\nSrc: L3,4 sl.24–27",
        "qs": []
      }
    ]
  },
  "op-trauma": {
    "intro": "Trauma is taught as four questions asked in order: is the globe open, was it chemical, was it blunt or sharp, and what has happened behind the eye. Chemical injury is the one emergency treated before it is examined.",
    "sections": [
      {
        "id": "trm-1",
        "w": "must",
        "h": "Chemical injury — the most urgent emergency, and why alkalis are worse",
        "body": "- **The rule:** chemical injuries are the **MOST URGENT ophthalmic emergency**.\n- **Who treats it:** the **first person who sees the patient**, not the ophthalmologist.\n- **⚠️ Alkali vs acid:** **alkali burns are TWICE AS COMMON** — alkalis are more widely used.\n\n### The two chemistries\n\n|  |**ALKALIS**|**ACIDS**|\n|---|---|---|\n|Examples|**NaOH, KOH, Ca(OH)₂, NH₄**|**H₂SO₄, HCl, HNO₃, hypochlorite**|\n|Mechanism|**combine with cell membrane LIPID and stromal MUCOPOLYSACCHARIDES**|**COAGULATE surface proteins**|\n|Result|**DEEP penetration, continuing for WEEKS**|the coagulum is a **PROTECTIVE BARRIER** against further penetration|\n|Damage|**MORE**|less|\n\n- **Third category:** **tear gas compounds**.\n\n### What decides severity — three things\n- **The properties of the chemical.**\n- **The AREA of ocular surface affected.**\n- **The DURATION of exposure.**\n\nSrc: L25 slides 2–4; L26 (chemical names and the two mechanisms)",
        "qs": []
      },
      {
        "id": "trm-2",
        "w": "must",
        "h": "What the burn does to the eye — the surface, the stroma, and the three stages",
        "body": "### The surface\n- **Epithelium:** conjunctival and corneal **epithelial damage**.\n- **⚠️ LIMBAL ISCHAEMIA:** occlusion of the limbal vessels and **loss of LIMBAL STEM CELLS**.\n- **Consequence:** **persistent corneal epithelial defects** with **sterile corneal ulceration and perforation**.\n\n### The stroma\n- **Deep penetration** gives **corneal stromal opacification**, by **denaturation of the collagen bundles**.\n\n### The sequelae\n- **Late:** dry eye · symblepharon · cicatricial entropion · corneal scarring and vascularization.\n\n### The three stages of a severe injury\n\n|Stage|When|Conjunctiva|Cornea|IOP|\n|---|---|---|---|---|\n|**Immediate acute**|**3 days**|**epithelial necrosis, chemosis, LIMBAL BLANCHING**|epithelial necrosis, oedema, opacification|**RAISED — collagen shrinkage**|\n|**Subacute**|**3–7 days**|active inflammatory destruction of tissues|**ULCERATION and PERFORATION**|—|\n|**Late / chronic**|**> 7 days — CICATRIZATION**|scarring → **dry eye, symblepharon, entropion**|scarring, vascularization, opacification|**RAISED — scarring of the EPISCLERAL VENOUS PLEXUS**|\n\n- **⚠️ The IOP rises TWICE:** early from **collagen shrinkage**, late from **episcleral venous scarring**.\n\nSrc: L25 slides 5–6; L26 (the three stages)",
        "qs": []
      },
      {
        "id": "trm-3",
        "w": "must",
        "h": "Grading a chemical injury — limbal ischaemia is the axis",
        "body": "|Grade|Limbal ischaemia|Cornea|Prognosis|\n|---|---|---|---|\n|**I**|**NONE**|clear, **only epithelial damage**|**good** (`L26`: excellent)|\n|**II**|**< 1/3**|**HAZY but iris details VISIBLE**|**good**|\n|**III**|**1/3 – 1/2**|**total epithelial loss, stromal haze, iris details OBSCURED**|**guarded**|\n|**IV**|**> 1/2**|**OPAQUE — iris AND pupil obscured**|**poor** (`L26`: very poor)|\n\n- **⚠️ The axis:** LIMBAL ISCHAEMIA, not corneal haze. The corneal column follows it; the fractions are what separate the grades.\n- **The name:** this is the **ROPER-HALL** classification, graded I–IV on limbal ischaemia — named in `L15,16`, not in either trauma deck.\n\n*Defect note: both decks print the same four grades and the same fractions with different prognosis wording — `L25` good/good/guarded/poor, `L26` excellent/good/guarded/very poor. Neither is treated as the error.*\n\nSrc: L25 slides 7–8; L26 (grading); L15,16 (the Roper-Hall name), cited only",
        "qs": []
      },
      {
        "id": "trm-4",
        "w": "must",
        "h": "First aid — irrigation comes before examination",
        "body": "- **⚠️ START IMMEDIATELY**, by the health care provider; **call an ophthalmologist** at the same time.\n- **COPIOUS IRRIGATION — saline 2 L over 15–30 min.**\n\n### Why irrigation, and why first\n- **To restore the pH of the conjunctival sac** towards normal **as rapidly as possible**.\n- **To decrease the duration of contact** with the chemical.\n\n### Eversion of the upper eyelid\n- **Retained PARTICULATE MATTER** trapped in the **conjunctival fornices** is identified and removed.\n- **With a sterile COTTON SWAB.**\n\n### The emergency-room sequence\n- **Surface anaesthetic**, then **sedation or analgesics**.\n- **Separate the lids** · evert the lids · remove particulate matter.\n- **Irrigation:** copious saline, 2 L over 1 hour.\n- **⚠️ MONITOR WITH LITMUS PAPER** — the end point is a normal pH, not a fixed volume.\n\n### Antidotes\n\n|Agent|Antidote|\n|---|---|\n|**Alkalis**|**boric acid 4 %**|\n|**Lime**|**EDTA**|\n|**Acids**|**sodium bicarbonate 3 %**|\n|**Iodine**|**starch**|\n|**Aniline dyes**|**glycerine**|\n\n*Defect note: the two decks give different irrigation timings for the same 2 L — `L25` 15–30 min, `L26` \"2 L over 1 hour\" in the emergency room. Written as two stages, which is how `L26` lays it out.*\n\nSrc: L25 slides 9–10; L26 (the ER sequence, litmus monitoring and the antidotes)",
        "qs": []
      },
      {
        "id": "trm-5",
        "w": "must",
        "h": "Medical and surgical treatment of a chemical burn",
        "body": "### Topical\n- **Cycloplegic drops** · antibiotic drops · eye patching.\n- **STEROID drops** — to decrease inflammation.\n- **CITRIC ACID** — to inhibit **neutrophil activity**.\n- **Lubricants.**\n\n### Topical and systemic\n- **ASCORBIC ACID** — to **enhance collagen production**.\n- **TETRACYCLINES / systemic DOXYCYCLINE** — to inhibit **COLLAGENASE** and neutrophil activity.\n\n### Systemic\n- **Calcium chelators — EDTA, PENICILLAMINE** — to inhibit collagenase.\n- **Raised IOP:** **oral acetazolamide** or topical medications.\n- **Bandage soft contact lens.**\n- **⚠️ Prevention of SYMBLEPHARON:** **lysis of newly forming adhesions with a sterile GLASS ROD**.\n\n### Surgical\n- **Paracentesis · necrosectomy.**\n- **Conjunctival graft or flap.**\n- **LIMBAL STEM CELL TRANSPLANTATION** · AMNIOTIC MEMBRANE grafting.\n- **KERATOPLASTY** for opaque corneas.\n- **KERATOPROSTHESIS** — severe cases with **blindness and TOTAL limbal stem cell deficiency**.\n\n### Surgery for the sequelae\n- **Symblepharon management** · entropion surgery · glaucoma surgery.\n- **Correction of cicatrising lid deformities**, e.g. cicatricial entropion.\n\nSrc: L25 slides 11–13; L26 (citric acid, chelators, bandage lens, paracentesis, necrosectomy, complication surgery)",
        "qs": []
      },
      {
        "id": "trm-6",
        "w": "know",
        "h": "Physical injuries — three agents, and what each of them causes",
        "body": "|Agent|Injury|\n|---|---|\n|**UV rays**|**PHOTOPHTHALMIA · SNOW BLINDNESS**|\n|**IR rays**|**ECLIPSE BLINDNESS · GLASS BLOWER’S CATARACT**|\n|**Irradiation and burns**|**CATARACT · RETINOPATHY · OPTIC NEUROPATHY**|\n\n- **⚠️ The split is by wavelength and by tissue:** **UV burns the SURFACE**, **infrared burns the LENS**, ionising radiation reaches **lens, retina and nerve**.\n- **Cross-check:** `L17` classifies glass blower’s cataract under traumatic → **physical → HEAT**, alongside mechanical trauma. *The full cataract account is `op-cat`’s.*\n\nSrc: L26 (physical injuries); L17 (heat cataract in the traumatic classification), cited only",
        "qs": []
      },
      {
        "id": "trm-7",
        "w": "must",
        "h": "Blunt trauma, front to back — the lesion list, and the two that give uniocular diplopia",
        "body": "- **Ocular foreign body:** **subtarsal FB** found by **lid eversion**; **corneal FB** seen at the slit lamp. *Removal, rust ring and the burr are in `cor-10`.*\n- **Ecchymosis — the black eye:** periorbital bruising, the commonest visible sign of a blunt blow.\n\n*Surgical emphysema and the orbital floor BLOW-OUT FRACTURE are written in full in `orb-14` — the earliest sign, the entrapped inferior rectus or inferior oblique, infraorbital anaesthesia, the tear drop sign and the never-blow-the-nose rule. Not repeated here.*\n\n### The lesions, front to back\n\n|Lesion|What it is|\n|---|---|\n|**IRIDODIALYSIS**|iris root torn from the ciliary body *(the tear itself is supplied — the slide prints only the name)*. **UNIOCULAR DIPLOPIA**|\n|**VOSSIUS RING**|**pigment ring imprinted on the ANTERIOR LENS CAPSULE** by the pupil margin. **Blunt injury**|\n|**ROSETTE CATARACT**|**the BLUNT-trauma cataract**; **PENETRATING** trauma gives a **DIFFUSE** one|\n|**SUBLUXATION of the lens**|zonular rupture. **UNIOCULAR DIPLOPIA**|\n|**COMMOTIO RETINAE — BERLIN’S OEDEMA**|**retinal oedema with a CHERRY-RED SPOT**|\n|**RETINAL BREAK ± DETACHMENT**|the tear first, then the detachment|\n|**CHOROIDAL RUPTURE**|**concentric crescent TEMPORAL to the disc**|\n\n- **⚠️ UNIOCULAR diplopia:** the deck’s own label, used TWICE — iridodialysis and lens subluxation. **Double vision that persists with the fellow eye covered is a problem INSIDE the eye**, never a muscle or a nerve.\n- **Traumatic cataract management:** **phacoemulsification or ECCE**, timing by severity. *Full account in `op-cat`.*\n\n### ⚠️ What neither trauma deck prints\n*The five below are absent from `L25` by its own not-covered list and from all 27 cached decks; they are not taken from the course material.*\n- **WHITE-EYED blow-out fracture of childhood:** a **trapdoor** fracture with a quiet-looking eye, marked restriction and an oculocardiac reflex — **surgery within 24–48 h**.\n- **Repair window in adults:** **within about 2 weeks**, for persistent diplopia, large floor defects or significant enophthalmos.\n- **MEDIAL WALL fracture:** through the **lamina papyracea**, entrapping the **medial rectus** — the deck says only \"floor ± other orbital wall\".\n- **Orbital ROOF and APEX fractures**, and **traumatic optic neuropathy** — sudden visual loss with an RAPD after blunt head injury.\n\nSrc: L25 slides 15–17, 25, 29–39; L18 (rosette vs diffuse, Vossius ring, phaco/ECCE), cited only; the four fracture facts and the iridodialysis mechanism are supplied and tagged",
        "qs": []
      },
      {
        "id": "trm-8",
        "w": "must",
        "h": "Hyphaema — the grades, the two dangers, and who is admitted",
        "body": "|Grade|Blood filling the anterior chamber|\n|---|---|\n|**I**|**< 1/3**|\n|**II**|**1/3 – 1/2**|\n|**III**|**> 1/2**|\n|**IV**|**TOTAL**|\n\n- **⚠️ Why an old hyphaema turns black:** **impaired aqueous circulation** means **decreased oxygen**, and the initially red blood **turns very dark**. *The name \"eight-ball hyphaema\" is supplied; the mechanism is the slide’s.*\n\n### Complications — two, and both have a time or a target\n- **⚠️ RE-BLEEDING:** common in the FIRST 5 DAYS.\n- **Uncontrolled high IOP**, which causes: **optic nerve damage** · **BLOOD STAINING OF THE CORNEA** · **CRAO**.\n\n### Treatment\n- **⚠️ HOSPITALISATION IS NOT EVERY CASE.** Admit: **children · SICKLE CELL DISEASE · uncontrolled high IOP · coagulation or bleeding disorders**.\n- **Bed rest at 45 degrees** — upright, so blood layers inferiorly and clears the axis.\n- **Cycloplegic — ATROPINE · topical steroid.**\n- **Antiglaucoma medication** if the IOP is raised.\n\n### Surgical evacuation — two indications\n- **Persistently elevated IOP.**\n- **TOTAL hyphaema lasting more than 5 DAYS.**\n\nSrc: L25 slides 25–28",
        "qs": []
      },
      {
        "id": "trm-9",
        "w": "must",
        "h": "Lacerations and the open globe — three lid levels, two mechanisms, one repair",
        "body": "### Eyelid laceration — three levels, in rising order of consequence\n- **Skin wound only** — direct closure.\n- **⚠️ Involving the LID MARGIN:** repaired by direct closure — an **initial margin suture**, **partial-thickness lamellar sutures in the tarsus**, then the **margin sutures tied under the skin sutures**.\n- **⚠️ Involving the LACRIMAL CANALICULI** — the medial laceration that must be recognised before it is closed.\n\n### Cornea and sclera — the mechanism names the injury\n\n|Injury|Object|\n|---|---|\n|**RUPTURED GLOBE**|**BLUNT** object — the wall bursts from within|\n|**LACERATION, partial or full thickness**|**SHARP** object|\n\n- **⚠️ OPEN-GLOBE INJURY:** a ruptured globe OR a full-thickness laceration. A partial-thickness laceration is **not** an open globe.\n- **Treatment:** **repaired with sutures**, under general anaesthesia.\n\n### ⚠️ Sympathetic ophthalmia\n*Not taken from the course material — no cached deck defines it, and `L25` lists it as absent despite its own open-globe section.*\n- **What it is:** **bilateral granulomatous panuveitis** after a **penetrating injury** (or intraocular surgery) to one eye.\n- **The words:** the injured eye is the **exciting** eye, the fellow eye the **sympathising** one.\n- **When:** usually **2 weeks to 3 months** after injury; rare, but it is the reason a penetrating injury is repaired promptly and followed.\n\nSrc: L25 slides 40–45; sympathetic ophthalmia is supplied and tagged",
        "qs": []
      },
      {
        "id": "trm-10",
        "w": "must",
        "h": "Intraocular foreign body — three materials, and the scan you must not order",
        "body": "- **⚠️ The presence of an IOFB:** SUGGESTS GLOBE PENETRATION — it is a marker of an open globe, not a separate problem.\n\n### The three materials\n\n|Material|What it does|\n|---|---|\n|**IRON**|**SIDEROSIS**|\n|**COPPER**|**CHALCOSIS**|\n|**INERT** — stone, glass, plastic, wood|no metallosis|\n\n### Investigation\n- **Plain film X-rays of the head.**\n- **CT SCAN — the workhorse.** It shows the **location and presence of a metallic IOFB**, and the **shape and integrity of the traumatized globe**.\n- **⚠️ DO NOT DO AN MRI** IF A METALLIC IOFB IS SUSPECTED — the single most examinable line in the trauma deck.\n- **Ultrasound may be useful**, including B-scan when the media are opaque.\n\nSrc: L25 slides 46–47, 52–54",
        "qs": []
      },
      {
        "id": "trm-11",
        "w": "must",
        "h": "Ruling out the open globe — the first step, and the five things not to do",
        "body": "- **⚠️ THE OPEN GLOBE IS RULED OUT** BEFORE the detailed history and the focused examination. It is step 1 of the deck’s own three-step approach, and it comes before everything.\n- **Why:** it is the **MOST DEVASTATING of all eye injuries**.\n- **Suspicious history: HAMMERING**, and any high-velocity metal-on-metal work.\n\n### The four signs of a suspected open globe\n- **PEAKED PUPIL** — iris plugging the wound and pointing at it.\n- **Anterior chamber SHALLOW *or* DEEP** — either direction, depending on where the wall failed.\n- **BULLOUS SUBCONJUNCTIVAL HAEMORRHAGE.**\n- **A positive SEIDEL TEST**, detecting leaking aqueous.\n\n### ⚠️ If you suspect it — five instructions, three of them prohibitions\n- **PLACE AN EYE SHIELD** and CALL THE OPHTHALMOLOGIST immediately.\n- **DO NOT PATCH** — pressure can **extrude intraocular contents**.\n- **DO NOT CHECK THE EYE PRESSURE.**\n- **NO further eye examination**, eye drops or ointment on an open globe.\n- **NIL BY MOUTH**, preparing for general anaesthesia.\n\n- **Tetanus:** ascertain **tetanus immunisation status in cases of trauma** — printed in `L10`’s investigation list, not in either trauma deck.\n\nSrc: L25 slides 48–51; L10 slide 29 (tetanus status), cited only",
        "qs": []
      },
      {
        "id": "trm-12",
        "w": "must",
        "h": "The focused history and the four-step examination",
        "body": "### History — three headings\n- **MECHANISM of injury:** **blunt · sharp · chemical**.\n- **TIMING:** \"exactly when did the trauma occur?\"\n- **ASSOCIATED SYMPTOMS:** **vision loss · diplopia · bleeding · flashes and floaters**.\n\n### Past ocular history — three questions\n- **Poor vision since birth** — is the acuity you are measuring new?\n- **Recent eye surgery** — cataract or refractive.\n- **Previous eye trauma.**\n\n### Examination — four steps, in order\n- **STEP 1 — INSPECTION** of lids and brows, conjunctiva, cornea, sclera, anterior chamber, iris and pupils: **periocular ecchymosis · eyelid lacerations · integrity of cornea, sclera and conjunctiva · blood in the anterior chamber · a PEAKED PUPIL**.\n- **STEP 2 — FUNCTION:** **visual acuity · visual fields · pupillary response · extraocular movements**, asking **\"entrapped muscles?\"**.\n- **STEP 3 — OPHTHALMOSCOPY:** looking for **retinal detachment** and **vitreous haemorrhage**.\n- **STEP 4 — SEIDEL TEST**, to assess for a corneal break.\n\n### The Seidel test\n- **Apply fluorescein** to the suspected area.\n- **Normally appears GREEN** under **cobalt blue** light.\n- **⚠️ The dye turns CLEAR** where a break is present, as **leaking aqueous dilutes the fluorescein**.\n\n*The FORCED DUCTION TEST is the named test that separates restrictive from neurological limitation, and it is what step 2’s \"entrapped muscles?\" is asking for — the name is not taken from the course material; `L10` slide 10 announces the list and the slide edge cuts it off.*\n\nSrc: L25 slides 48, 56–61; the forced duction test is supplied and tagged",
        "qs": []
      }
    ]
  }
};
