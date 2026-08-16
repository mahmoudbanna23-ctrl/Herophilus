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
  }
};
