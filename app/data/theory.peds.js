/* Pediatrics theory, keyed by chapter id.
   Written in Phase 4 from lecture slides + questions + book. See CLAUDE.md. */
var T_PEDS = {
  "cardiac": {
    "intro": "Ten of the twenty-four questions are one skill: name the lesion from its murmur, its click and its second sound. The rest split three ways — the innocent murmur, the blue or collapsing neonate and its duct, and endocarditis on an already abnormal heart.",
    "sections": [
      {
        "id": "card-1",
        "w": "must",
        "h": "Aetiology, the lecturer’s classification, and how CHD declares itself",
        "body": "### Aetiology\n- **Genetic — over 10 %** and rising: whole chromosomes, point mutations, **microdeletions**.\n- **Polygenic:** one affected child **doubles the risk** for later siblings.\n- **Chromosomal:** **Down · Edward · Patau · Turner · Noonan.**\n- **Maternal:** **rubella · drugs · alcohol · lupus · diabetes.**\n\n**Congenital rubella:** cataract (**absent red reflex**), deafness, **symmetrical growth restriction**; the cardiac lesion is a **PDA**, peripheral pulmonary stenosis second *(lesion not in course material)*.\n\n*Down → AVCD. Turner → coarctation (genetics deck, cited only).*\n\n### The six-group classification\n\n|Group|Lesions|\n|---|---|\n|**Left-to-right shunt**|**VSD · PDA · ASD**|\n|**Right-to-left shunt**|**Tetralogy of Fallot**|\n|**Common mixing**|**AVCD**|\n|**Well child with obstruction**|**PS · AS**|\n|**Sick neonate with obstruction**|**CoA · HLHS**|\n|**Cyanotic group**|**F4 · TA · PA · Ebstein anomaly**|\n\n- **VSD is the commonest CHD — 30–40 % of newborns with a CHD.** **PDA about 10 %.**\n- **Tetralogy of Fallot is 10 % of all CHD and the commonest cause of cyanosis after 1 year of age** — the commonest *cyanotic* lesion, never the commonest lesion.\n\n### How it presents\n**Antenatal ultrasound diagnosis · a murmur in an asymptomatic child · growth failure · recurrent chest infection · heart failure · shock · cyanosis, duct-dependent · screening.**\n\nSrc: L33 slides 4–7, 16, 38, 65; L35 pages 8, 10; Turner–CoA from `6) Genetically determined disease_`, cited only",
        "qs": [
          "pedhd-card-2",
          "pedhd-card-22"
        ]
      },
      {
        "id": "card-2",
        "w": "must",
        "h": "Fetal circulation, and why a big shunt stays quiet until 2–8 weeks",
        "body": "### The three fetal shunts\n- **Ductus venosus:** umbilical vein → inferior vena cava.\n- **Ductus arteriosus:** main pulmonary artery → aorta.\n- **Foramen ovale:** anatomic opening between right and left atrium.\n\n|Fetal|Infant|\n|---|---|\n|**Low pressure system**|**High pressure system**|\n|**Right-to-left shunting**|**Left-to-right blood flow**|\n|**Lungs non-functional**|**Lungs functional**|\n|**Increased pulmonary resistance**|**Decreased pulmonary resistance**|\n|**Decreased systemic resistance**|**Increased systemic resistance**|\n\n### The switch at birth\n- **Cord clamped** → low-pressure placental circuit shut down → **systemic resistance rises**.\n- **First breaths** → pulmonary resistance falls, **pulmonary flow rises SIX-FOLD** → **left atrial pressure rises**.\n- Placenta excluded → **right atrial return falls** → **the flap valve of the foramen ovale closes**.\n- **The ductus arteriosus closes within the first few hours or days.**\n\n**⚠️ The exam point:** a large VSD is quiet at birth because **PVR is still high**. It falls over the following weeks, **the left-to-right shunt widens, and the infant declares at 2–8 weeks** — nothing new has gone wrong.\n\n**Infant heart failure:** a large left-to-right shunt until proved otherwise — **breathless and sweaty on feeding, poor weight gain, recurrent chest infections, hepatomegaly**. L35 lists hepatomegaly with increased pulmonary blood flow, so it is expected at this age, not absent.\n\nSrc: L33 slides 10–12, 28; L35 page 52",
        "qs": [
          "pedhd-card-3",
          "pedhd-card-4"
        ]
      },
      {
        "id": "card-3",
        "w": "must",
        "h": "Innocent or pathological — the “S” checklist and what breaks it",
        "body": "**Innocent murmur:** every criterion is an “S” — *“an ‘S’, ‘innoSent’”*.\n\n- **aSymptomatic.**\n- **Soft** blowing murmur.\n- **Systolic only — not diastolic.**\n- **left Sternal edge.**\n\n**Three findings that must be ABSENT: normal heart sounds with no added sounds · no parasternal thrill · no radiation.**\n\n*Innocent murmurs vary with posture and get louder with fever, anaemia and exercise — they are flow, so they follow flow (not in course material).*\n\n### What disqualifies a murmur\n\n|Finding|Why it disqualifies|\n|---|---|\n|**A THRILL**|palpable = **grade 4 or louder**; no innocent murmur is that loud → **echocardiogram**|\n|**Any diastolic murmur**|the criteria allow systolic only|\n|**Added sound — S3, S4, ejection click**|normal heart sounds with **no added sounds** is required|\n|**Radiation** — carotids, axilla, back|a gradient with a direction|\n|**Symptoms** — failure to thrive, breathless feeds, cyanosis|the murmur is not the whole story|\n|**Abnormal pulses** — bounding, absent femorals|a duct or a coarctation|\n\n- **Respiratory sinus arrhythmia is normal in children** and is not a murmur feature at all.\n- **A soft systolic murmur at the left sternal edge in a febrile but well child is a flow murmur: explain it and ask the GP to re-examine after recovery.** No echo, no chest film, no cardiology referral — the fever is the flow.\n\nSrc: L33 slide 8; L36 slides 4–6",
        "qs": [
          "pedhd-card-1",
          "pedhd-card-16",
          "pedhd-card-19",
          "pedhd-card-23"
        ]
      },
      {
        "id": "card-4",
        "w": "must",
        "h": "The murmur signature grid — ten questions are this table",
        "body": "|Lesion|Timing and site|Second sound|Other|\n|---|---|---|---|\n|**VSD**|**PANSYSTOLIC** plateau, **lower left sternal edge**, harsh, ± thrill|**normal P2**|a LOUD murmur means a SMALL defect|\n|**ASD secundum**|**ejection systolic**, **upper left sternal edge** (pulmonary area)|**WIDE, FIXED SPLIT**|tricuspid diastolic flow murmur|\n|**PDA**|**CONTINUOUS “machinery”** through S2, **first intercostal space**|obscured|**bounding pulse**, hyperdynamic circulation|\n|**Pulmonary stenosis**|**ejection systolic**, **upper LEFT sternal edge**, ± thrill|**ejection click; soft, delayed P2**|RV heave when severe|\n|**Aortic stenosis**|**ejection systolic**, **upper RIGHT sternal edge**, **radiates to neck and carotids**|**ejection click, apical; soft, delayed A2**|**small-volume slow-rising pulse; carotid thrill**|\n|**Coarctation, adult type**|ejection systolic, upper sternal edge; **continuous collateral murmur AT THE BACK**|—|**radio-femoral delay; right-arm hypertension**|\n|**Innocent**|**soft** systolic, left sternal edge|**normal, no added sounds**|no thrill, no radiation, no symptoms|\n\n### Three rules the grid turns on\n- **The soft, delayed component of S2 names the valve.** Soft **A2** = aortic stenosis, soft **P2** = pulmonary stenosis. **The click is identical in both.**\n- **Pansystolic vs ejection.** Pansystolic runs S1 → S2 as a **plateau**. Ejection is **diamond-shaped, with a gap at each end**.\n- **Site separates the two pansystolic murmurs:** VSD at the **lower left sternal edge**; **mitral regurgitation at the apex, radiating to the axilla** *(MR not in course material)*.\n\n*A continuous murmur in a child has two common answers: a PDA below the left clavicle, or coarctation collaterals at the back.*\n\nSrc: L33 slides 8, 27–28, 43, 57; L34 slides 5, 16, 32",
        "qs": [
          "pedhd-card-6",
          "pedhd-card-7",
          "pedhd-card-8",
          "pedhd-card-9",
          "pedhd-card-10",
          "pedhd-card-13",
          "pedhd-card-14",
          "pedhd-card-15",
          "pedhd-card-17"
        ]
      },
      {
        "id": "card-5",
        "w": "must",
        "h": "Ventricular septal defect — size decides everything",
        "body": "**VSD:** **30–40 % of all newborns with a CHD** — the commonest defect.\n\n### Anatomical types\n- **Perimembranous — 70–80 %**, the commonest.\n- **Muscular — 5–20 %:** central / mid-muscular, apical, **multiple = Swiss cheese septum**.\n- **Inlet / AV canal type — 5–8 %.**\n- **Supracristal / subaortic — 5–7 %.**\n\n### Haemodynamics\n- **Magnitude of shunt = size + pulmonary vascular resistance.**\n- **Small, about 3 mm:** the defect itself is the resistance → less flow → **PVR normal**.\n- **Large:** minimal resistance at the defect → more flow → **shear and tear, fibrosis** → **high PVR**.\n- Systole: **LV → PA → lungs → pulmonary veins → LA → LV** = **volume overload of LA and LV**.\n- Shunt dilates the pulmonary artery and raises PVR → **pulmonary hypertension**, more with moderate and larger defects.\n- RV pressure rises with time **until Eisenmenger syndrome. Left-to-right early, right-to-left late.**\n\n### Small VSD\n- **Asymptomatic, accidental discovery; normal weight gain and development.**\n- **Pansystolic, harsh, parasternal; normal P2.**\n- **Normal X-ray, normal ECG**; echo diagnostic.\n- **Prognosis: spontaneous closure**, with a risk of **bacterial endocarditis**.\n- **Management: assurance and follow-up**, intervention if needed.\n\n### Moderate and large (unrestrictive) VSD\n- **Well in the immediate postnatal period; symptoms at 2–8 weeks.**\n- **Persistent dyspnoea, sweating, poor feeding, failure to thrive.**\n- **Poor suckling, choking, difficult breathing, exercise intolerance, recurrent chest infection.**\n- **Tachycardia, tachypnoea, bounding pulse, stunted growth, pericardial bulge, pansystolic murmur, normal P2**, lower respiratory tract infection, heart failure.\n- **Late cyanosis means right ventricular failure.**\n\n### Eisenmenger syndrome\n- **Reversal of the shunt to right-to-left**, from raised pulmonary artery pressure and pulmonary vascular disease → **cyanosis and right-sided heart failure**.\n- **Loud pulmonary sound · very short or no systolic murmur · early diastolic murmur of pulmonary regurgitation · murmur of tricuspid regurgitation.**\n- **Around 2 to 3 years of age.**\n- *A VSD murmur that disappears is bad news, not recovery.*\n\n### Management of moderate and large VSD\n- **Furosemide 1 mg/kg every 12 hours (1–3 mg/kg per day) · captopril 0.5–2 mg/kg per day · enalapril 0.1 mg/kg per day · digoxin 10–20 mcg/kg per day.**\n- **Treat the chest infection · review every 2–3 months · manage the failure to thrive · endocarditis prophylaxis.**\n- **Closure: surgical is first choice over 1 year of age**; transcatheter otherwise.\n- **Surgery indicated for: large VSD with pulmonary hypertension · VSD with associated defects · congestive failure not responding to medication.**\n\nSrc: L33 slides 15–16, 25–32",
        "qs": [
          "pedhd-card-3",
          "pedhd-card-4",
          "pedhd-card-9",
          "pedhd-card-14"
        ]
      },
      {
        "id": "card-6",
        "w": "must",
        "h": "Patent ductus arteriosus — the duct that should have shut",
        "body": "**PDA:** persistence of the duct **beyond 72 hours of life**. **About 10 % of CHD** in full-term infants.\n\n### Why it is open, and why it shuts\n- **Fetal role:** carries deoxygenated blood **past the collapsed lungs** to the descending aorta and umbilical arteries.\n- **Held open in utero by: placental prostaglandins · prostaglandins and nitric-oxide-like vasodilators made by the duct itself · hypoxia.**\n- **Closed after birth by: local vasoconstrictors (endothelin) responding to higher arterial oxygen · removal of placental prostaglandin · fewer prostaglandin E2 receptors in the ductal wall.**\n- **Spontaneous closure in 55 % of full-term newborns within the first 60 hours.**\n\n### The preterm duct\n- **Patency is inversely related to gestational age.**\n- **Lower responsiveness of the muscle layer to oxygen.**\n- **Higher sensitivity to the vasodilator effects of prostaglandin E2 and nitric oxide.**\n- *The wall of the duct is muscularised in the preterm, versus a poor muscle layer in the full term.*\n\n### Presentation, investigation, treatment\n- **Volume overload**; ducts vary in **size, length and shape**; the picture depends on **size and pressure gradient**.\n- **Small: asymptomatic.** Otherwise **chest infection, growth failure, heart failure**.\n- **Hyperdynamic circulation → BOUNDING PULSE** · **machinery murmur, first intercostal space** · cardiomegaly · signs of pulmonary hypertension.\n- **CXR: cardiomegaly, LV dilatation.** ECG. **Echo with Doppler is the most reliable non-invasive tool.**\n- **PRETERM: INDOMETHACIN, a COX-2 inhibitor**, oral or **preferably IV (lyophilised)**; **best before 10 days of age and in less mature infants**; **three doses 12–24 hours apart**. **Ibuprofen an evaluated alternative.** Then ligation or transcatheter closure.\n- **INFANTS AND CHILDREN: transcatheter closure — coil occlusion or device**; **surgical ligation, open or thoracoscopic**.\n- **⚠️ Never close a duct the child is living on.** In critical coarctation, AS, PS and TGA the duct **is** the circulation, and **prostaglandin keeps it open**.\n\n*A PDA with absent red reflexes and symmetrical growth restriction is congenital rubella.*\n\nSrc: L33 slides 33–47; L34 slide 57",
        "qs": [
          "pedhd-card-6",
          "pedhd-card-15",
          "pedhd-card-22"
        ]
      },
      {
        "id": "card-7",
        "w": "must",
        "h": "Atrial septal defect and AVCD",
        "body": "### ASD — anatomical types\n- **Secundum — 50–70 %** (the diagram slide says 70 %).\n- **Primum — 30 %** (diagram slide: 20 %) — **atrioventricular septal defect, “AV canal”**.\n- **Sinus venosus — 10 %** (diagram slide: 6–8 %) — **associated with partial anomalous pulmonary venous drainage**.\n- **Coronary sinus ASD — rare**, an unroofed coronary sinus.\n\n*Two different percentage sets are printed on consecutive slides; both are given rather than one chosen.*\n\n### Size decides the shunt\n- **PFO:** under 5 mm, with a flap valve.\n- **Small:** under 8 mm, **no dilatation of the right heart chambers**.\n- **Moderate–large:** over 8 mm, **RA and RV dilate**. Shunt also depends on **right ventricular compliance**.\n- **Spontaneous closure: under 3 mm diagnosed before 3 months → 100 % by 1½ years · 3–8 mm → over 80 % by 1½ years · over 8 mm rarely closes · unlikely after 4 years.**\n\n### Course and signs\n- **Childhood:** left-to-right shunt with a murmur. **With age:** RA and RV dilate. **Adulthood:** increased pulmonary flow, heart failure, pulmonary vascular change, **Eisenmenger physiology**.\n- **Growth usually normal**; tachypnoea only with large defects.\n- **Ejection systolic murmur in the pulmonary area — increased flow ACROSS THE PULMONARY VALVE, not across the defect.**\n- **Wide fixed splitting of S2** · **tricuspid diastolic flow murmur**.\n- Often first noticed as **recurrent respiratory infections and wheeze** in a toddler.\n\n### Investigation and closure\n- **CXR: cardiomegaly (RV, RA) if large · increased pulmonary arterial markings · dilated main pulmonary artery · LV AND LA NOT DILATED.**\n- **Echo:** size in mm, RV volume overload, associations.\n- **No treatment in infants. Moderate and large secundum ASDs need closure, and the role is TRANSCATHETER closure.**\n- **Selection: defect size · shape · patient size (length of the interatrial septum) · transoesophageal echo.** Devices: **Amplatzer occluder, Occlutech, Lifetech, Starway**.\n\n|  |**Surgery**|**Catheter**|\n|---|---|---|\n|Success|**approaching 100 %**|**95 %**|\n|Stay|**5–7 days**|**24 hours**|\n|Complications|postoperative complications|**minor in 1–2 %**, fewer overall|\n|Scar|yes|**none**|\n\n### AVCD\n- **Common in Down syndrome.**\n- **A single five-leaflet (common) valve** between atria and ventricles, **stretching across the entire atrioventricular junction**, and it **tends to leak**.\n- The large defect gives **high pulmonary artery pressure**.\n- **Cyanosis at birth · heart failure at 2 weeks to 3 months.**\n- **Treat the heart failure medically as for a large VSD; surgical repair at 3 to 6 months.**\n\nSrc: L33 slides 49–67",
        "qs": [
          "pedhd-card-8",
          "pedhd-card-13"
        ]
      },
      {
        "id": "card-8",
        "w": "must",
        "h": "Obstruction in a well child — aortic and pulmonary stenosis",
        "body": "**AS and PS:** both give an asymptomatic ejection murmur with a click. **The soft, delayed component of S2 names the valve.**\n\n- **AS: most present with an asymptomatic murmur; severe stenosis gives reduced exercise tolerance, chest pain on exertion, or syncope.**\n- **⚠️ Critical neonatal AS has a DUCT-DEPENDENT SYSTEMIC circulation → severe heart failure leading to SHOCK.**\n- **PS: most asymptomatic, diagnosed clinically by the murmur.**\n- **⚠️ Critical neonatal PS has a DUCT-DEPENDENT PULMONARY circulation → cyanosis in the first few days.**\n\n|  |**Aortic stenosis**|**Pulmonary stenosis**|\n|---|---|---|\n|Murmur|**ejection systolic, upper RIGHT sternal edge**|**ejection systolic, upper LEFT sternal edge**, ± thrill|\n|Radiation|**to the neck and carotids**|little|\n|Click|**apical ejection click**|**at the upper left sternal edge**|\n|Second sound|**A2 delayed and soft**|**P2 delayed and soft**|\n|Pulse|**small volume, slow rising; carotid thrill**|normal|\n|Extra sign|—|**RV impulse, a heave, when severe**|\n|ECG|**left ventricular hypertrophy**|**RVH — UPRIGHT T WAVE IN V1**|\n|CXR|normal or prominent LV with **post-stenotic dilatation of the ascending aorta (aortopathy)**|normal or **post-stenotic dilatation of the pulmonary artery**|\n|Echo, the **gold standard**|degree (mild/mod/severe/critical), LVH, LV function, associations (**CoA, dilated ascending aorta**), aortic regurgitation|degree, RVH, RV function, associations (**ASD, pulmonary branch stenosis**), pulmonary regurgitation|\n|Critical neonatal form|duct-dependent **SYSTEMIC** → **shock**|duct-dependent **PULMONARY** → **cyanosis**|\n|Treatment|**balloon aortic valvoplasty or aortic valve replacement**|**balloon pulmonary valvoplasty by catheter; surgery rarely required**|\n|Indications|**symptoms · severe stenosis · ischaemia on ECG**|**symptoms · severe stenosis**|\n\n*Pure PS is the one exception to the single-S2 rule in cyanotic assessment — it may give a wide split with a softly audible P2.*\n\nSrc: L34 slides 3–27; L35 page 53",
        "qs": [
          "pedhd-card-7",
          "pedhd-card-10",
          "pedhd-card-17"
        ]
      },
      {
        "id": "card-9",
        "w": "must",
        "h": "Coarctation — two different diseases under one name",
        "body": "### Adult type — a well child\n- **Asymptomatic.**\n- **Systemic hypertension in the RIGHT ARM.**\n- **Ejection systolic murmur at the upper sternal edge; collaterals heard as a CONTINUOUS MURMUR AT THE BACK.**\n- **RADIO-FEMORAL DELAY** — blood bypasses the obstruction through chest-wall collaterals, so the leg pulse is late.\n- **CXR: RIB NOTCHING** from large collateral intercostal arteries running under the ribs posteriorly, and the **“3” sign**, a visible notch in the descending aorta at the coarctation site. **ECG: LV hypertrophy.**\n- **Echo:** degree, LVH, LV function, associations — **BAV (bicuspid aortic valve, *expansion not in course material*) and dilated ascending aorta**.\n- **CT aortography:** degree, **collaterals**, relation to surrounding structures.\n- **Management: CoA stenting by catheter** for **symptoms** or **moderate/severe** coarctation; **surgical repair in some patients**.\n\n### Critical neonatal coarctation — a collapsing baby\n- **Examination on the first day of life is usually normal** — the duct is still feeding the descending aorta.\n- **Acute circulatory collapse after a few days, when the duct closes.**\n- **A sick baby, severe heart failure, ABSENT FEMORAL PULSES, severe metabolic acidosis.**\n- **CXR: cardiomegaly from heart failure and shock.** **Echo:** degree, **patency of the PDA**, LV function, associated VSD. **CT aortography:** degree and **arch hypoplasia**.\n- **Surgical CoA repair is the standard curative treatment.**\n\n*Turner syndrome carries coarctation. Prostaglandin E1 causes apnoea, fever and hypotension — have airway support ready (not in course material).*\n\nSrc: L34 slides 28–61",
        "flow": {
          "title": "The collapsed neonate on day 2–7",
          "steps": [
            {
              "k": "step",
              "t": "Shock, pallor, cool mottled skin at 24 hours to 7 days",
              "n": "sepsis and a duct-dependent lesion look identical"
            },
            {
              "k": "step",
              "t": "ALL FOUR pulses · four-limb BP · pre- and post-ductal saturations"
            },
            {
              "k": "decision",
              "t": "Femorals absent, right brachial the only good pulse?",
              "yes": "Critical coarctation until disproved",
              "no": "Sepsis, metabolic disease, another duct-dependent lesion"
            },
            {
              "k": "alert",
              "t": "IV PROSTAGLANDIN E1 BEFORE THE ECHO — the duct is the circulation",
              "n": "antibiotics too; both diagnoses treated until one is excluded"
            },
            {
              "k": "step",
              "t": "Echo confirms; treat the cardiogenic shock and heart failure"
            },
            {
              "k": "step",
              "t": "Surgical repair — the standard curative treatment"
            }
          ]
        },
        "qs": [
          "pedhd-card-12",
          "pedhd-card-20"
        ]
      },
      {
        "id": "card-10",
        "w": "must",
        "h": "Cyanosis — the threshold, the eight types, and what mimics it",
        "body": "**Cyanosis:** a bluish or purplish tinge to the skin and mucous membranes.\n\n- **Threshold — about 5 g/dL** of unoxygenated haemoglobin in the capillaries generates the colour. L33 states it as **reduced haemoglobin exceeding 50 g/L**, seen on the tongue — **the same number in different units**.\n- **Anaemia and polycythaemia shift it:** recognised at a **HIGHER saturation in polycythaemia**, a **LOWER saturation in anaemia**.\n- **Peripheral:** hands, feet, around the mouth. **Central:** seen on the tongue.\n- **Four cause groups: cardiac · respiratory · haematological · neurological.**\n\n### The eight types\n- **Central** — cyanotic CHD.\n- **Peripheral** — hypothermia, congestive cardiac failure.\n- **Mixed** — CHD in shock.\n- **Differential** — **PDA with reversal**.\n- **Reverse differential** — **TGA with PDA with reversal**.\n- **Intermittent** — **Ebstein anomaly**.\n- **Circumoral.**\n- **Cyclical** — **bilateral choanal atresia**.\n\n### True cyanosis versus its mimics\n\n|True cyanosis|Cyanosis-like conditions|\n|---|---|\n|**Associated with CLUBBING**|**Not associated with clubbing**|\n|**ABG confirms**|**Laboratory estimation of methaemoglobin and sulphaemoglobin confirms**|\n\n- **Differential diagnosis: methaemoglobin · sulfhaemoglobin · pseudocyanosis.**\n- **Pseudocyanosis** is a blue tinge with **neither hypoxaemia nor peripheral vasoconstriction**, mostly from **metals — silver nitrate, silver iodide, silver, lead** — or **drugs — phenothiazines, amiodarone, chloroquine hydrochloride**.\n\nSrc: L35 pages 3–6; L33 slide 9",
        "qs": [
          "pedhd-card-11",
          "pedhd-card-18"
        ]
      },
      {
        "id": "card-11",
        "w": "must",
        "h": "Sorting cyanotic CHD at the bedside — four steps, two physiologies",
        "body": "**Shared by all cyanotic CHD:** cyanosis, clubbing, polycythaemia.\n\n|  |**REDUCED pulmonary blood flow**|**INCREASED pulmonary blood flow**|\n|---|---|---|\n|Lesions|**Tetralogy of Fallot 5–7 % · tricuspid atresia · Ebstein anomaly · pulmonary atresia**|**TGA 3–5 % · truncus arteriosus 1–2 % · single ventricle 1–2 % · TAPVC 1–2 % · HLHS 1–3 %**|\n|Growth|**no failure to thrive**|**failure to thrive present**|\n|Heart failure|absent|**CHF present**|\n|Cyanosis|**more cyanosis**|**milder cyanosis**|\n|Spells|**cyanotic spells**|**no cyanotic spells**|\n|Precordium|**quiet**|**hyperactive**|\n|Liver|**no hepatomegaly**|**hepatomegaly**|\n\n### Clues from the second sound and the murmur\n- **Single S2 → TOF physiology, TGA, most admixture lesions. Fixed split → TAPVC. Normal split → excludes a cardiac cause.**\n- *Pure pulmonary stenosis may have a wide split S2 with a softly audible P2.*\n- **Ejection systolic in the pulmonary area — most cases · pansystolic at the lower left sternal border — tricuspid atresia with VSD · continuous — pulmonary atresia · to-and-fro — TOF with absent pulmonary valve.**\n\n### Complications\n- **Clubbing · cyanotic spell · depressed IQ · infective endocarditis · polycythaemia · embolic phenomenon.**\n- **Neurological: stroke · brain abscess · seizures**, and adverse neurodevelopmental outcome — **lower IQ, poor motor skills, poor language skills, cognitive impairment**.\n\nSrc: L35 pages 7–8, 23, 29–30, 47–57",
        "flow": {
          "title": "The four-step approach to a cyanotic child",
          "steps": [
            {
              "k": "step",
              "t": "STEP 1 — DETECT the cyanosis",
              "n": "pitfalls: lighting, anaemia, pigmentation, peripheral cyanosis, mild cyanosis"
            },
            {
              "k": "step",
              "t": "Pulse oximetry, used properly",
              "n": "misleading if used incorrectly: watch 1–2 minutes, stable waveform, displayed rate matching the actual rate, shield the probe from light"
            },
            {
              "k": "step",
              "t": "HYPEROXIA TEST — 100 % oxygen by hood ~10 minutes, then ABG pO2"
            },
            {
              "k": "alert",
              "t": "pO2 under 70 mmHg = CHD VERY LIKELY · under 150 = CHD LIKELY · 150–200 intermediate · over 200 = CHD UNLIKELY"
            },
            {
              "k": "step",
              "t": "STEP 2 — ASSIGN PHYSIOLOGY: pulmonary blood flow reduced or increased"
            },
            {
              "k": "step",
              "t": "STEP 3 — ASSESS SEVERITY",
              "n": "early or neonatal onset · cyanotic spells · cyanosis with CHF · severe cyanosis with no or very soft murmur"
            },
            {
              "k": "step",
              "t": "STEP 4 — CONFIRM: echo diagnoses the majority; catheterisation only in very selected situations; CT and MRI reduce that need further"
            },
            {
              "k": "step",
              "t": "REFER on diagnosis — neonates are likely to need immediate intervention"
            }
          ]
        },
        "qs": [
          "pedhd-card-18",
          "pedhd-card-20",
          "pedhd-card-24"
        ]
      },
      {
        "id": "card-12",
        "w": "must",
        "h": "Tetralogy of Fallot — the four components and the boot-shaped heart",
        "body": "**Tetralogy of Fallot:** described by **Fallot in 1888**. **Incidence 10 % of all congenital heart disease**, and **the most common cardiac malformation responsible for cyanosis after 1 year of age**. *The physiology table puts TOF at 5–7 %; both figures are printed.*\n\n### The four components\n- **Ventricular septal defect.**\n- **Obstruction to right ventricular outflow.**\n- **Overriding of the aorta.**\n- **Right ventricular hypertrophy.**\n\n**Only TWO are actually required:** a **VSD large enough to equalise pressures in both ventricles**, and a **right ventricular outflow tract obstruction**. **RVH is secondary** to the RVOT obstruction and the VSD; **overriding varies**; the **VSD is perimembranous with extension into the subpulmonary region, non-restrictive and large**.\n\n### History and examination\n- **Cyanosis appears AFTER the neonatal period** · **hypoxaemic spells** · low birth weight, developmental delay, easy fatigability.\n- **Cyanosis · clubbing · polycythaemia · tachypnoea.**\n- **RV tap at the left sternal border · systolic thrill in the upper and mid left sternal borders · ejection click originating from the aorta.**\n- **S2 IS SINGLE — the pulmonary component is absent.**\n- **Loud ejection systolic murmur at the mid and upper left sternal border. The murmur is the PULMONARY STENOSIS, not the VSD**, and may be confused with a holosystolic VSD murmur.\n- **⚠️ INTENSITY IS INVERSE TO SEVERITY: the more severe the obstruction, the shorter and softer the murmur. In pulmonary atresia it is absent or very soft.**\n- **Auscultate the BACK for MAPCAs — major aorto-pulmonary collateral arteries.**\n\n### Investigations\n- **Polycythaemia secondary to cyanosis, haematocrit over 65 % · anaemia from relative iron deficiency.**\n- **CXR: normal-sized heart · DECREASED pulmonary vascular markings · concave main pulmonary artery segment with an upturned apex = BOOT-SHAPED HEART, coeur en sabot · right atrial enlargement 25 % · right aortic arch 25 %.**\n- **ECG: right axis deviation, right ventricular hypertrophy.** Echocardiography; angiogram.\n- **Differential of Fallot physiology: TOF · TGA · tricuspid atresia · single ventricle · double outlet right ventricle · corrected TGA · atrioventricular canal defect · malpositions.**\n\nSrc: L35 pages 9–22",
        "qs": [
          "pedhd-card-24"
        ]
      },
      {
        "id": "card-13",
        "w": "must",
        "h": "The hypoxaemic spell, and definitive management of TOF",
        "body": "**Hypoxaemic spell:** also called the **hypercyanotic, tet, cyanotic or hypoxic** spell.\n\n- **Mechanism: infundibular spasm and/or decreased systemic vascular resistance**, increasing the **right-to-left shunt at the VSD** and so **diminishing pulmonary blood flow**.\n- **Peak incidence 2 to 4 months.**\n- **Usually in the morning, after crying, feeding or defecation.**\n- **A severe spell may lead to limpness, convulsion, cerebrovascular accident or even death.**\n\n### Symptoms, and the sign that confirms it\n- **Sudden onset of cyanosis, or deepening of existing cyanosis.**\n- **Sudden onset of dyspnoea.**\n- **Altered consciousness, from irritability to syncope.**\n- **⚠️ DECREASE IN INTENSITY OR DISAPPEARANCE OF THE SYSTOLIC MURMUR** — less blood is crossing the outflow tract.\n- **Haemodynamics: increased activity → increased respiration → increased venous return → fixed pulmonary blood flow → increased right-to-left shunt → increased cyanosis.**\n\n### Treating the spell\n- **KNEE-CHEST POSITION OR SQUATTING** — **decreases systemic venous return and increases systemic vascular resistance at the femoral arteries**, so **pulmonary blood flow rises and cyanosis falls**. Equivalents: knee-chest, sitting with flexed limbs, the mother carrying the child with folded limbs.\n- **Morphine sulphate 0.2 mg/kg SC or IM** — suppresses the respiratory centre, **abolishes hyperpnoea**.\n- **Oxygen has little effect on arterial oxygen saturation.**\n- **Acidosis: sodium bicarbonate 1 mEq/kg IV.**\n- **⚠️ RESPONSE IS JUDGED BY THE MURMUR GETTING LOUDER** as the child becomes less cyanotic — more blood is crossing the stenotic outflow tract.\n- **Not fully responding: phenylephrine 0.02 mg/kg IV** · **propranolol 0.01–0.25 mg/kg slow IV push**, reducing the heart rate and possibly reversing the spell · **ketamine 1–3 mg/kg over 60 seconds**, raising systemic vascular resistance and sedating.\n\n### Medical management of TOF\n- **Oral propranolol 0.5 to 1.5 mg/kg every 6 hours to PREVENT spells.**\n- **Detect and treat relative iron-deficiency anaemia — anaemic children are more susceptible to cerebrovascular complications.**\n- **Good dental hygiene and infective endocarditis prophylaxis.**\n- **Keep the haematocrit under 65 %; phlebotomy may be needed for polycythaemia.**\n\n### Shunt procedures\n- **Indications: neonates with TOF and pulmonary atresia · hypoplastic pulmonary annulus needing a transannular patch · hypoplastic pulmonary arteries · severely cyanotic infants under 3 months · infants under 3 to 4 months with medically unmanageable hypoxic spells.**\n- **Blalock–Taussig:** subclavian artery to ipsilateral PA, **over 3 months of age**.\n- **Gore-Tex interposition:** subclavian to ipsilateral PA, **even under 3 months**.\n- **Waterston** (ascending aorta to right PA) and **Potts** (descending aorta to left PA) — **no longer performed**.\n\nSrc: L35 pages 24–35",
        "qs": [
          "pedhd-card-24"
        ]
      },
      {
        "id": "card-14",
        "w": "high",
        "h": "The other cyanotic lesions, and when to operate",
        "body": "**TGA:** **oxygenated blood circulates within the pulmonary circulation and deoxygenated blood in the systemic circulation. Hypoxia is the result of impaired MIXING — better admixture, better saturation. Early presentation.**\n- **Cyanosis within 24–48 hours in a vigorous baby · NO MURMUR · four equal pulses · single loud S2 · saturations do not improve with oxygen · CXR shows INCREASED pulmonary vascular markings.**\n- **The absent murmur is the clue, not a reassurance** — nothing is obstructed, the two circuits are simply parallel.\n- **Timing: neonatal diagnosis → arterial switch at 10–21 days · after 1 month → atrial switch (Senning) at 3–4 months · TGA with VSD → arterial switch with VSD closure at 1–3 months.**\n\n**Tricuspid atresia:** **marked cyanosis from birth**; **ECG: LEFT axis deviation, right atrial enlargement, LVH** — the one cyanotic lesion with a left axis.\n\n**Ebstein anomaly:** **an abnormal tricuspid valve displaced into the right ventricle**; the **anterior cusp keeps some attachment to the valve ring**, the others adherent to the RV wall. **Intermittent cyanosis · multiple clicks · huge right atrium, “arterialisation” of the RV · regurgitant tricuspid valve.**\n\n**Pulmonary atresia:** **cyanosis at birth**; CXR **concave pulmonary artery segment, apex tilted upward**; continuous murmur.\n\n**Truncus arteriosus:** **early CHF · mild or no cyanosis · systolic ejection click.** **Elective repair by 1–3 months; beyond 3 months, high risk of pulmonary vascular disease.**\n\n**TAPVC:** **fixed split S2. Operate as soon as the diagnosis is made — OBSTRUCTED TAPVC IS A SURGICAL EMERGENCY and any delay may be catastrophic.**\n\n**HLHS:** 1–3 %, and one of the two “sick neonate with obstruction” diagnoses beside coarctation.\n\n**Pulmonary AV fistula:** fistulous vascular communications in the lungs, **large and localised, or multiple, scattered and small**. **Commonest form is Osler–Weber–Rendu syndrome.** Features depend on shunt magnitude; **mild cyanosis**; **routine echo normal — CONTRAST echo is diagnostic.**\n\n### When waiting is justified\n- **Complex two-ventricle states — DORV/VSD/PS, TGA/VSD/PS, cTGA/VSD/PS — wait until cyanosis is apparent, or 4 to 5 years of age.**\n- **Balanced single-ventricle states, SaO2 85–90 % — intervene only if symptoms or cyanosis appear.**\n- *Otherwise early correction is desirable: it avoids adverse cardiac, neurodevelopmental and other consequences.*\n\nSrc: L35 pages 36–46, 58–64; L33 slide 6",
        "qs": [
          "pedhd-card-11",
          "pedhd-card-18"
        ]
      },
      {
        "id": "card-15",
        "w": "must",
        "h": "Arrhythmias — the complex width and the rate decide",
        "body": "**All of them present the same way — palpitation, syncope, heart failure, cardiogenic shock. The ECG separates them.**\n\n|Rhythm|Recognise it by|Treatment|\n|---|---|---|\n|**Respiratory sinus arrhythmia**|rate varying with respiration|**normal in children — none**|\n|**PAC · PVC · ventricular couplets**|isolated ectopic beats|usually benign in a structurally normal heart *(benignity not in course material)*|\n|**SVT**|**regular NARROW-complex tachycardia**; **reentrant atrioventricular**; **HR usually above 180/min, above 220/min in newborns**|**stable → IV ADENOSINE first line** · **unstable → SYNCHRONISED CARDIOVERSION**|\n|**Ventricular tachycardia**|**WIDE-complex tachycardia**|**unstable → cardioversion first line** · **stable → IV amiodarone usually first line, but not always**|\n|**Complete heart block**|**bradycardia with complete atrioventricular dissociation**; **congenital (SLE, CHD)** or **acquired (viral myocarditis, digitalis toxicity)**|**symptomatic → pacemaker implantation**|\n\n- **Vagal manoeuvres come BEFORE adenosine in a stable child** — ice to the face in an infant, Valsalva or blowing through a narrow straw in an older one. **Carotid sinus massage is not used in children, and never bilaterally** *(the ladder is not in course material)*.\n- **Defect note:** House keys the vagal manoeuvre first; L36 prints IV adenosine as first line for the haemodynamically stable patient and does not mention vagal manoeuvres. **Both recorded, key as printed.**\n\nSrc: L36 slides 4–21",
        "qs": [
          "pedhd-card-5"
        ]
      },
      {
        "id": "card-16",
        "w": "high",
        "h": "Myocarditis, dilated cardiomyopathy, Kawasaki and MIS-C",
        "body": "**Viral myocarditis:** **viral-induced myocardial injury**, ranging **from an asymptomatic patient to fulminant carditis with cardiogenic shock**. **Treatment of heart failure and cardiogenic shock is the cornerstone**; **IV immunoglobulins and steroids in some patients**.\n\n**Dilated cardiomyopathy:** **genetic myocardial dysfunction** → **impaired systolic function and a dilated left ventricle with global hypokinesia**. Presents with **heart failure and/or cardiogenic shock**; **same cornerstone**.\n\n**Kawasaki disease:** **immune-mediated vasculitis** with a **high tendency for coronary arteritis**.\n- **IV immunoglobulin is the GOLD STANDARD for treatment.**\n- **Steroids and/or other immunomodulators** in **high-risk and resistant patients, as adjuvant therapy with IVIG**.\n- *The European 2018 consensus criteria are printed as images and are not recoverable from the cached deck. The classic set is fever of 5 days or more plus 4 of 5 — bilateral non-purulent conjunctivitis, lip and oral changes, polymorphous rash, extremity changes, cervical lymphadenopathy (not in course material).*\n\n**MIS-C:** **immune-mediated multiorgan dysfunction after COVID infection**, with a **high tendency for cardiac affection — impaired LV systolic function, mitral regurgitation, pericardial effusion, coronary involvement**.\n- **Diagnosis: fever + acute-phase reactants + multi-organ affection + evidence of COVID infection + exclusion of other differentials.**\n- **Steroids, other immunomodulators and IVIG** inhibit the inflammatory cascade.\n- **COVID reaches the heart three ways: MIS-C · acute COVID infection · vaccine-related myocarditis.**\n\nSrc: L36 slides 22–46",
        "qs": []
      },
      {
        "id": "card-17",
        "w": "must",
        "h": "Infective endocarditis — septicaemia that settles on an abnormal heart",
        "body": "**Infective endocarditis:** a state of **septicaemia resulting in infection of the endocardium**.\n\n- **May occur after: dental extraction · central venous catheter · cardiac surgery.**\n- **May affect: congenitally abnormal valves · rheumatic valve disease · cyanotic congenital heart disease · shunts, e.g. VSD, PDA.**\n\n### Organisms\n- **Common: Streptococcus viridans · Enterococcus faecalis · Staphylococcus aureus.**\n- **HACEK group: Haemophilus, Aggregatibacter, Cardiobacterium, Eikenella, Kingella.**\n- Others: **Pseudomonas, Klebsiella**.\n\n### Clinical manifestations\n- **General: PROLONGED FEVER** · chills, headache, malaise, anorexia · easy fatigue · arthralgia and myalgia · **splenomegaly** · **petechiae in skin and mucous membranes** · **clubbing and splinter haemorrhages under the finger nails if the diagnosis is late**.\n- **Cardiac: tachycardia · NEW MURMURS OR A CHANGING CHARACTER OF AN EXISTING MURMUR · arrhythmias · acute or subacute congestive heart failure.**\n- **Embolic: major systemic and pulmonary emboli, infarcts and abscesses · haematogenous osteoarticular sepsis (spondylodiscitis) · mycotic aneurysms · intracranial ischaemic and haemorrhagic lesions · conjunctival haemorrhages · Janeway lesions.**\n- **Immunological: glomerulonephritis · Osler nodes · Roth spots.**\n\n### Investigation, diagnosis, treatment\n- **Leukocytosis, anaemia · raised ESR (may be LOW in CHF) and raised CRP · POSITIVE BLOOD CULTURE, MULTIPLE, repeated several times if negative · echo evidence of valve vegetations, new valve regurgitation and valve dehiscence · CT heart may detect a paravalvular abscess · urine: microscopic haematuria.**\n- **Diagnosis: MODIFIED DUKE CRITERIA — 2 major, or 1 major + 3 minor, or 5 minor.**\n- **Prophylaxis: antibiotic prophylaxis against bacterial endocarditis.**\n- **Culture positive: appropriate intravenous bactericidal antibiotics parenterally, in large doses, for 4 to 8 WEEKS.**\n- **Culture results unavailable: empirical intravenous antibiotics until they return.**\n- *Draw the cultures before the first dose (sequence not in course material).*\n\nSrc: L36 slides 47–57, recovered from the deck’s .emf images",
        "qs": [
          "pedhd-card-21"
        ]
      },
      {
        "id": "card-18",
        "w": "must",
        "h": "Rheumatic fever and rheumatic heart disease",
        "body": "*L37 is largely a picture deck — the Jones criteria, the treatment slide and the five clinical-picture slides are titles over images. What it states is below; the criteria and the drug regimens are supplied and tagged.*\n\n### The susceptible patient\n**Printed NINE TIMES on consecutive slides — the lecturer’s own emphasis, not nine facts.**\n- **Child 5 to 15 years.**\n- **Immunologic abnormality [HLA].**\n- **Endemic region · over-crowding.**\n- **Upper respiratory tract [throat – tonsils].**\n- **Group A streptococcal infection · rheumatogenic strain [M serotype].**\n- **Persistent infection [untreated].**\n\n### Presentation named on the deck\n- **Preceding pharyngitis – tonsillitis.**\n- **Acute illness: fever · body pains · pallor · rashes · raised ESR.**\n- **Polyarthritis · carditis · chorea · rash · subcutaneous nodules.**\n\n### The Jones criteria (Dr Duckett Jones)\n*Named on the deck and printed as an image; the content below is not in course material.*\n\n|Major (5)|Minor|\n|---|---|\n|**Carditis · Polyarthritis, migratory, large joints · Sydenham chorea · Erythema marginatum · Subcutaneous nodules**|**fever · arthralgia · raised ESR or CRP · PROLONGED PR INTERVAL on ECG**|\n\n**2 major, or 1 major + 2 minor, PLUS evidence of a preceding group A streptococcal infection.**\n\n### Proving the streptococcus\n- **Throat swab.**\n- **ASO test — a high anti-streptolysin O antibody titre.** Streptolysin O is the streptococcal antigen; the host makes anti-streptolysin O against it.\n- *The titre rises then falls over months, so one value is a snapshot.*\n\n### Recurrence, RHD and prophylaxis\n- **Recurrence follows a NEW group A streptococcal throat infection** — which is what secondary prophylaxis prevents.\n- **Valve lesions named: mitral regurgitation · mitral stenosis · aortic regurgitation · aortic stenosis.** *MR is the commonest acute lesion, MS the commonest late one (not in course material).*\n- **Diagnosis of RHD: history of rheumatic fever · a specific cardiac murmur · echocardiography.**\n\n|Severity|Secondary prophylaxis|\n|---|---|\n|**No RHD**|**10 years**|\n|**Mild RHD**|**to 40 years of age**|\n|**Moderate RHD**|**life-long, plus long-term medications**|\n|**Severe RHD**|**surgical valve repair or replacement**|\n\n- **Acute treatment** *(not in course material — the treatment slide is an image)*: **penicillin to eradicate the streptococcus · aspirin or NSAIDs for the arthritis · corticosteroids for severe carditis · bed rest**. **Secondary prophylaxis is intramuscular benzathine penicillin G every 3 to 4 weeks**, oral penicillin V if injection is refused.\n\nSrc: L37 slides 7–37; the Jones table, the acute regimen and the benzathine schedule are not in course material",
        "qs": []
      }
    ]
  },
  "renal": {
    "intro": "Four decks, one habit of mind: prove the infection with a culture, prove the blood is blood and say where it comes from, separate heavy protein from active sediment, and remember that half of these children have a malformation underneath.",
    "sections": [
      {
        "id": "ren-1",
        "w": "must",
        "h": "UTI — the two syndromes, who gets it, and what grows",
        "body": "**UTI:** infection in any part of the urinary tract. **Two clinical categories.**\n\n|  |**Pyelonephritis (upper)**|**Cystitis (lower)**|\n|---|---|---|\n|Fever|**Febrile, systemic**|**Usually afebrile**|\n|Criteria|Bacteriuria + fever **≥ 38 °C**, or loin pain/tenderness with any fever|Dysuria, frequency, **no systemic upset**|\n|Risk|**Scars the growing kidney**|No scarring risk|\n\n### Why it matters\n- **One of the most common and most serious bacterial infections in children.**\n- **⚠️ 50 % have a structural abnormality of their urinary tract.**\n- Pyelonephritis **scars** the growing kidney → **hypertension**, and **progressive CKD if bilateral**.\n- **All symptomatic infant UTIs: diagnose and treat promptly to reduce scarring.**\n\n### Who gets it — the sex ratio inverts at one year\n\n|  |**Infants < 1 year**|**Children > 1 year**|\n|---|---|---|\n|Sex|**Male > female**|**Female > male**|\n|Why|**Higher risk of congenital anomalies**|**Short, straight urethra**|\n\n**Raised risk at any age:** uncircumcised male · toilet training · **constipation** · dysfunctional or infrequent voiding · external irritation (tight clothing, pinworm).\n\n### Route and organism\n- **Ascending:** bowel flora → perineum → urethra → bladder.\n- **Gram-negative bacilli. E. coli 75–90 %** · Klebsiella · Proteus · Pseudomonas · Enterococcus faecalis.\n- **Proteus** — flora beneath the prepuce, i.e. the **uncircumcised** boy.\n- **Pseudomonas** — **urinary stasis**: obstructive uropathy, infrequent voiding, **VUR**, constipation, labial adhesion, neuropathic bladder.\n- **Candida** — urethral catheterisation and stents.\n\nSrc: L38",
        "qs": [
          "pedhd-renal-2",
          "pedhd-renal-4",
          "pedhd-renal-23",
          "pedhd-renal-24"
        ]
      },
      {
        "id": "ren-2",
        "w": "must",
        "h": "How UTI presents, and getting a sample worth culturing",
        "body": "### Infants and pre-verbal children\n- **Fever may be the only manifestation. Threshold > 38 °C.**\n- **Suspect UTI if no other source of fever is found** — the younger the child, the less able to localise infection.\n- **⚠️ Test urine in EVERY infant with unexplained fever > 38 °C, within 24–48 hours.**\n- Symptoms non-specific · **fever usually but not always present** · **septicaemia may develop rapidly**.\n\n### Verbal children\n- **Dysuria · frequency · urgency or hesitancy · new onset or recurrence of incontinence.**\n- **DDx of those symptoms:** cystitis · vulvitis · balanitis · **constipation** · **sexual abuse**.\n- **UTI is the most common cause of haematuria**, seldom the only symptom.\n\n### Collecting the sample\n- **Collect urine BEFORE antibiotics**, unless severe sepsis.\n- **⚠️ If systemically unwell, do NOT delay treatment to obtain a specimen.**\n\n|Child|Methods|\n|---|---|\n|**Toilet-trained**|**Midstream clean-catch sample**|\n|**Not toilet-trained**|**Clean catch by the \"quick-wee\" technique** · adhesive plastic bag · **urethral catheter** · **suprapubic aspiration**|\n\n### What to ask, and what to look for\n- **Past history:** chronic urinary symptoms — incontinence, lack of proper stream, frequency, urgency, **withholding manoeuvres** · previous undiagnosed febrile illnesses.\n- **Family history:** previous UTI · chronic constipation · **VUR — familial in 30–50 %** · genitourinary abnormalities · renal failure · antenatally diagnosed renal abnormality · poor growth.\n- **Examination:** record urine flow · **BP and temperature** · growth parameters · abdominal masses (bladder, faecal, renal).\n- **Perineum and genitalia:** girls — labial adhesions, vulvovaginitis; boys — foreskin, meatal stricture.\n- **If incontinent:** **spinal lesions, perineal sensation, anal tone, lower-limb power and sensation**. Consider **sexual abuse**.\n- **Bloods only if seriously unwell:** serum electrolytes, blood cultures, insert a cannula.\n\nSrc: L38",
        "qs": [
          "pedhd-renal-1",
          "pedhd-renal-14",
          "pedhd-renal-16",
          "pedhd-renal-24"
        ]
      },
      {
        "id": "ren-3",
        "w": "must",
        "h": "Dipstick, microscopy, culture — what confirms a UTI and what does not",
        "body": "### Dipstick — the screening test for all symptomatic children, whatever their age\n- **NITRITE = bacteriuria.** Gram-negative bacteria **reduce urinary nitrate to nitrite**, which reacts to form a coloured **azo dye**.\n- **LEUKOCYTE ESTERASE = pyuria** — the enzyme of white cells. The strip also reads **protein and glucose**.\n- *A negative nitrite does not exclude UTI: nitrate reduction needs hours of bladder dwell time, and a frequently voiding child never provides it (not in course material).*\n\n### Microscopy\n**Bacteriuria** ± haematuria · **pyuria** ± **WBC or granular casts**.\n\n### Culture — the only thing that confirms\n\n|Method|Colony count|Probability|\n|---|---|---|\n|**Suprapubic**|**Any number**|**99 %**|\n|**Catheter**|Any number|**95 %**|\n|**Midstream, 1st**|**> 10⁵ CFU/mL**|**90 %**|\n|**Midstream, 2nd**|> 10⁵ CFU/mL|**95 %**|\n|**Bag specimen**|—|**⚠️ UNACCEPTABLE**|\n\n- **CONFIRMED UTI: a proper CFU count of a SINGLE organism per mL, in a properly collected specimen, PLUS pyuria or bacteriuria, in a SYMPTOMATIC child.**\n- **CONTAMINATION:** growth of **MIXED organisms**. If in doubt, collect another sample.\n- **ASYMPTOMATIC BACTERIURIA:** positive culture with **no manifestations of infection. Benign, does not cause renal injury — except in pregnant women. Do NOT treat with antibiotics.**\n- **⚠️ Clinical picture and urinalysis can SUSPECT a UTI; it cannot be confirmed without the culture.**\n\n### Four results that look alike\n\n|WBC|RBC|Organisms|Casts|Culture|Verdict|\n|---|---|---|---|---|---|\n|100/mm³|none|**none seen**|none|**bag, unavailable**|**Contamination** — invalid sample, and the fever has a source|\n|< 50/mm³|none|none seen|none|**mixed coliforms**|**Contamination** — mixed growth, fever from the chest|\n|> 200/mm³|many|none seen|none|**> 10⁵ coliforms**|**UTI** — heavy pyuria, single organism, symptomatic|\n|50–100/mm³|many|none seen|**RBC casts seen**|**negative at 48 h**|**Glomerulonephritis** — casts plus a sterile culture|\n\nSrc: L38",
        "qs": [
          "pedhd-renal-10",
          "pedhd-renal-11",
          "pedhd-renal-12",
          "pedhd-renal-13",
          "pedhd-renal-14",
          "pedhd-renal-16"
        ]
      },
      {
        "id": "ren-4",
        "w": "must",
        "h": "Treating a UTI — age first, then upper or lower",
        "body": "- **Initiate immediately after the culture is drawn — this reduces the severity of renal scarring.**\n- **Empirical initially, changed as per the culture and sensitivity report.**\n\nSrc: L38",
        "flow": {
          "title": "Immediate treatment by age and level",
          "steps": [
            {
              "k": "alert",
              "t": "Under 3 months, suspected UTI or severely ill: IV antibiotics (co-amoxiclav) at least 5–7 days, THEN prophylaxis",
              "n": "Septicaemia develops rapidly at this age"
            },
            {
              "k": "decision",
              "t": "Over 3 months: bacteriuria + fever ≥ 38 °C, or loin pain/tenderness with any fever?",
              "yes": "UPPER UTI — pyelonephritis",
              "no": "Dysuria with no systemic manifestations — LOWER UTI (cystitis)"
            },
            {
              "k": "decision",
              "t": "Upper UTI — any concern about sepsis?",
              "yes": "IV antibiotic 2–4 days, then oral to complete 7–10 days",
              "no": "Oral antibiotics for 7 days"
            },
            {
              "k": "step",
              "t": "Lower UTI (cystitis): oral antibiotic for 3–5 days",
              "n": "No scarring risk, so the course is short"
            }
          ]
        },
        "qs": [
          "pedhd-renal-5",
          "pedhd-renal-2"
        ]
      },
      {
        "id": "ren-5",
        "w": "must",
        "h": "After the infection — classify it, image it, prevent the next one",
        "body": "### Classify\n- **SIMPLE UTI: responds to treatment within 48 hours.**\n- **ATYPICAL UTI — six criteria:** seriously ill or septicaemia · **poor urine flow** · abdominal or bladder mass · **raised creatinine** · **failure to respond to suitable antibiotics within 48 hours** · **infection with an atypical (non-E. coli) organism**.\n- **RECURRENT UTI — any one of three:** **≥ 2 episodes of acute pyelonephritis** · **≥ 1 pyelonephritis + ≥ 1 cystitis** · **≥ 3 episodes of cystitis**.\n\n### Image — the timing is the examinable part\n- **ULTRASOUND: 6 weeks after treatment**, brought forward to **48–72 hours** for an acute complication or no improvement (**atypical UTI**). **Kidney size, number, location · hydronephrosis · bladder anomalies · post-void residual. NOT the gold standard for scars.**\n- **MCUG / VCUG: 2–3 weeks after treatment. Detects VUR.** Indicated for **suspected urethral obstruction on US (abnormal bladder in a boy)**, suspected VUR, another US abnormality, voiding problems, **recurrent febrile UTI**.\n- **DMSA or MAG-3: functional. Chronic scar = irregular borders and scarring.**\n- *Modality strengths, weaknesses and the 2-month DMSA rule: ren-16.*\n- *No routine imaging after a first simple cystitis; no routine VCUG after a first febrile UTI with a normal ultrasound.*\n\n### Prevent\n- **(I) Wash out ascending organisms: high fluid intake · regular voiding · double voiding · address constipation · perineal hygiene.**\n- **(II) Reduce aggressive organisms** in stool, perineum and under the foreskin: **Lactobacillus acidophilus** probiotic · **antibiotic prophylaxis — controversial** · **circumcision**.\n\n### Follow-up of recurrent UTI, scarring or reflux\n- **Dipstick with any non-specific illness**, to rule out a UTI.\n- Prophylactic antibiotics (controversial) · circumcision in boys.\n- **Urodynamics → clean intermittent catheterisation if neuropathic bladder.**\n- **Anti-VUR surgery** if scarring progresses with higher-grade VUR.\n- **BP monitoring** with dysplasia or scars.\n- **Urinalysis for proteinuria — a marker of CKD progression.**\n- Regular renal growth and function assessment if the defects are bilateral.\n\nSrc: L38; L40",
        "qs": [
          "pedhd-renal-15",
          "pedhd-renal-17",
          "pedhd-renal-23"
        ]
      },
      {
        "id": "ren-6",
        "w": "must",
        "h": "Haematuria — the numbers, and whether it is blood at all",
        "body": "**Haematuria:** an increased number of RBCs in urine.\n\n|  |**Gross**|**Microscopic**|\n|---|---|---|\n|Appearance|**Visibly discoloured — pink, red, dark brown, tea-coloured**, ± small or large **blood clots**|Not visible; found only on **microscopy or dipstick**|\n\n**⚠️ THE DEGREE OF HAEMATURIA BEARS NO RELATIONSHIP TO THE SERIOUSNESS OF THE UNDERLYING CAUSE.**\n\n### Thresholds — and the definition is contested\n- **Persistent > 5 RBCs/hpf** in **uncentrifuged** urine.\n- **Or > 10 RBCs/hpf** on microscopy of **10–15 mL freshly voided, centrifuged** urine.\n- **Or a 1+ positive dipstick.**\n- Healthy children have occasional red cells. **A single examination is positive in 4–6 % of school children — retest. Only 0.5 % persist on repeat samples 2–3 weeks apart.**\n\n### The dipstick detects HAEM, not RBCs\n- It uses the **pseudo-peroxidase activity of haemoglobin (or myoglobin)** to produce an **oxidised chromogen, green-blue**.\n- **⚠️ It does not differentiate haematuria, haemoglobinuria and myoglobinuria.**\n- **Dipstick positive + RBCs on microscopy = haematuria. Dipstick positive + low or absent RBCs = haemoglobinuria or myoglobinuria.**\n- **⚠️ RBCs lyse rapidly in dilute or acidic urine** — a negative microscopy counts only **promptly, on a freshly voided specimen**.\n\n### Red urine with < 5 RBCs/hpf — the mimics\n\n|Haem POSITIVE|Haem NEGATIVE|\n|---|---|\n|**Haemoglobinuria** — intravascular haemolysis (**HUS, favism**)|**Urobilinogen** — haemolytic anaemia (favism) · **bilirubinuria** — direct bilirubin in obstructive jaundice|\n|**Myoglobinuria** — rhabdomyolysis (crush injury)|**Foods** — beets, rhubarb, artificial cereals, drinks and red dyes · **drugs** — methyldopa, rifampicin · **metabolites** — urates, porphyrin|\n\n### Transient haematuria\n- After **fever, illness or extreme exertion** — transient microscopic haematuria and mild proteinuria.\n- **Repeat the dipstick and microscopic urinalysis TWICE within 2 weeks of the initial result.**\n- **Resolves → no further tests. Persists on at least two of the three consecutive samples → further evaluation.**\n\nSrc: L39",
        "qs": [
          "pedhd-renal-3",
          "pedhd-renal-13"
        ]
      },
      {
        "id": "ren-7",
        "w": "must",
        "h": "Glomerular or not — the discriminators, and the red flags",
        "body": "**Four questions, in order.** 1 Haematuria, or just red urine? 2 Only haematuria, or **bleeding elsewhere** — a systemic bleeding disorder? 3 Where does it originate? 4 How to settle it?\n\n|Feature|**GLOMERULAR**|**EXTRA-GLOMERULAR**|\n|---|---|---|\n|**Colour**|**Cola / tea-coloured / brown / burgundy**|**Bright red**|\n|**Clots**|Absent|**⚠️ BLOOD CLOTS ARE PATHOGNOMONIC of lower urinary tract origin**|\n|**RBC morphology**|**Dysmorphic > 20 %** — different sizes and shapes, **acanthocytes**|**Isomorphic** — renal tubulo-interstitial, or extrarenal (tract, bleeding diathesis)|\n|**Casts**|**⚠️ RBC CASTS ARE PATHOGNOMONIC of glomerular origin**|Absent|\n|**Protein**|**> 100 mg/dL indicates glomerular origin**|Absent or trace|\n|**Pain**|**Typically painless** — flank pain only when acute or unusually severe|Dysuria, or colic radiating to the groin|\n\n*Morphology by phase-contrast microscopy on freshly voided urine; casts on fresh urine, or acidic urine stored at 4 °C. Even so, morphology is **not sensitive enough to unequivocally delineate the site**.*\n\n### History pointing at the glomerulus\n- **Pharyngitis or URTI 2–3 weeks ago → post-streptococcal GN. 1–2 days ago → IgA nephropathy.** Also **recent skin infection**, **recent gastrointestinal infection**.\n- **Oedema** (morning puffiness, generalised) · **oliguria** · **hypertension** — headache, mental status change, diplopia, epistaxis · **volume overload / heart failure** · fatigue, rash, arthralgia.\n\n### History pointing lower down\n- **UTI** — dysuria, frequency, abdominal pain; **flank pain with fever and rigors = acute pyelonephritis**.\n- **Urolithiasis** — unilateral flank pain **radiating to the groin**.\n- Vulvovaginitis · surgery or trauma **including non-accidental injury** · sexual activity and STDs · **menarche** · exercise.\n- **Drugs:** rifampicin, metronidazole, nitrofurantoin, NSAIDs, cyclophosphamide, anticoagulants, OTC medicines, **calcium or vitamin D**, herbals. **Foods:** beetroot, berries, candies.\n- **Personal or family history:** **bleeding disorder** · **sickle cell disease or trait** · haematuria · renal disease · stones · **visual or hearing loss** · hypertension · intracerebral bleed · polycystic kidney disease · coagulopathy.\n\n### Examination\n**Manual BP against age, sex and height centiles** · **oedema and ascites** · chest, heart, hepatomegaly · weight and height · eyes, skin, genitalia, joints · abdominal masses · **malformations (VATER)**.\n\n**⚠️ Child abuse must always be suspected in the child with unexplained perineal bruising and haematuria.**\n\n### Red flags — may need URGENT referral to paediatric nephrology\n**Haematuria AND any of: proteinuria · hypertension · fluid overload (oedema, ascites) · deranged renal function.**\n\nSrc: L39",
        "qs": [
          "pedhd-renal-3",
          "pedhd-renal-13",
          "pedhd-renal-20"
        ]
      },
      {
        "id": "ren-8",
        "w": "high",
        "h": "The causes of haematuria — the tree, the newborn, and the recurrent bleeder",
        "body": "\n|**GLOMERULAR**|**EXTRA-GLOMERULAR — upper tract**|**EXTRA-GLOMERULAR — lower tract**|\n|---|---|---|\n|**Familial:** thin basement membrane disease · **Alport syndrome**|**Tubulo-interstitial:** interstitial nephritis|**Urinary tract infection**|\n|**Glomerulonephritis:** acute post-infectious GN (**APSGN**) · MPGN · **SLE** · **IgA nephropathy** · **IgA vasculitis (HSP)** · sickle cell glomerulopathy|**Anatomic:** polycystic kidney disease · **tumour (Wilms)**|**Hypercalciuria** · **renal calculi** · trauma/instrumentation|\n|**Haemolytic uraemic syndrome**|**Vascular: renal vein thrombosis** · **nutcracker syndrome**|Structural abnormality of ureter or bladder (**PUJO**) · **bladder rhabdomyosarcoma** · systemic bleeding disorder · perineal irritation · vaginal bleeding / menarche · rectal fissures · **factitious**|\n\n### Two anchors the examiner keeps returning to\n- **The most common cause of GROSS haematuria in children is bacterial or viral urinary tract infection.**\n- **Most acute glomerulonephritis in children is post-infectious**, most commonly after **group A β-haemolytic streptococcal** infection of **throat or skin**.\n\n### Haematuria in the NEWBORN — a different list\n**Renal vein thrombosis · renal artery thrombosis · autosomal recessive polycystic kidney disease · obstructive uropathy · urinary tract infection · bleeding and clotting disorders · trauma, bladder catheterisation.**\n\n### Recurrent GROSS haematuria — five causes\n**IgA nephropathy · Alport syndrome / thin glomerular basement membrane disease · idiopathic hypercalciuria · nutcracker syndrome · exercise.**\n\n- **⚠️ Recurrent macroscopic episodes, with or without red flags, and no identifiable cause → consider RENAL BIOPSY.**\n- *Stone and Wilms as discriminators: ren-17.*\n\nSrc: L39",
        "qs": [
          "pedhd-renal-3",
          "pedhd-renal-8",
          "pedhd-renal-19"
        ]
      },
      {
        "id": "ren-9",
        "w": "must",
        "h": "APSGN — the trigger, the clock, and what the child looks like",
        "body": "**Acute post-streptococcal glomerulonephritis: immune-complex nephritis after nephritogenic group A β-haemolytic streptococci (GAHS).**\n\n### The two portals of entry\n- **SKIN** — pyoderma / impetigo, **M types 47, 49, 55**; also **scarlet fever**. **Warm weather.**\n- **THROAT** — pharyngitis, **M types 1, 2, 4, 12**. **Cold weather.**\n- **Pathogenesis:** nephritogenic strains → **antibodies to streptococcus (anti-streptolysin O) form in the circulation** → immune-complex deposition.\n\n### Epidemiology\n- **Commonest cause of acute nephritic syndrome / acute GN in children**, and one of the commonest **glomerular** causes of gross haematuria.\n- **Age 2–18 years, peak 6–8. Uncommon under 3** — less streptococcal carriage, possibly immune factors. **Boys 2:1.**\n- **500,000 cases and 5,000 deaths annually; > 90 % from economically disadvantaged areas.** Usually sporadic; epidemics and household clusters (camps, military) where baseline rates are high.\n\n### ⚠️ The latent period IS the diagnosis\n\n|Preceding infection|Latent period|\n|---|---|\n|**Streptococcal pharyngitis**|**1–2 weeks**|\n|**Streptococcal pyoderma**|**3–6 weeks**|\n|Overall range|**1–6 weeks**|\n\n*Subclinical disease blurs the timing. Contrast IgA nephropathy — gross haematuria within **1–2 DAYS** of the URTI.*\n\n### Clinical characteristics at presentation — the spectrum runs from asymptomatic to kidney failure\n- **Haematuria** — asymptomatic microscopic, or **gross, painless, brown, smoky, tea-like or cola-like**.\n- **Hypertension 60–75 %** — mild to moderate, **subsides after diuresis**; **encephalopathy 5–10 %**.\n- **Azotaemia / raised creatinine 30–40 %. Oliguria 25–35 %.**\n- **Oedema** — mild, **face, periorbital, extremities**; ascites and anasarca if kidney or heart failure supervenes.\n- **Proteinuria** — usually normalises after 4 weeks; **nephrotic syndrome in < 5 %**.\n\n### Serious sequelae\n\n|Complication|Frequency|Detail|\n|---|---|---|\n|**Encephalopathy / seizures**|**5–10 %**|**Related to the hypertension** — blurred vision, severe headache, altered mental status and coma, convulsions|\n|**Pulmonary oedema / CHF**|**5–15 %**|**CXR changes up to 50 %.** From HTN or hypervolaemia: respiratory distress, orthopnoea, cough, tachycardia, tachypnoea, **tender hepatomegaly**, gallop, decreased breath sounds, rales, hypoxaemia|\n|**Electrolytes**|—|**Hyperkalaemia**|\n|**Dialysis**|**1–2 %**|**Most often RPGN** — hyperkalaemia, hyperphosphataemia, hypocalcaemia, acidosis, seizures, uraemia|\n\n*Acute hypertension harms by its severity, the **absolute change from baseline**, and **the rate of rise**.*\n\nSrc: L39",
        "qs": [
          "pedhd-renal-20",
          "pedhd-renal-13"
        ]
      },
      {
        "id": "ren-10",
        "w": "high",
        "h": "APSGN — confirming it, treating it, and what NOT to do",
        "body": "### Laboratory investigations\n- **Evidence of GN:** urinalysis — **rusty (smoky) / tea-coloured · dysmorphic RBCs · RBC casts · STERILE PYURIA · proteinuria** (mild to moderate; UPC normal to nephrotic).\n- **KFT may be impaired**, but a significant fall in GFR is unlikely in children.\n- **Hyperkalaemia, hypocalcaemia, metabolic acidosis and hyponatraemia: only in severe patients.**\n- **Evidence of preceding strep:** skin and throat swab · **high ASOT** (throat) · **anti-DNAse B titre** (skin).\n- **Aetiology: activation of the ALTERNATE complement pathway · C3 decreased in 90 %, normal again within 6–8 WEEKS · serum C4 typically NORMAL.** FBC: **mild normochromic anaemia** from haemodilution and low-grade haemolysis.\n- **⚠️ C3 DEPRESSION IS THE MOST COMMON POSITIVE LAB FINDING.**\n- **Imaging:** CXR if needed · kidney ultrasound considered · **MRI brain for PRES — parieto-occipital areas on T2**.\n\n### Histology\n- **LM: diffuse proliferative (exudative) GN** — early PMN infiltration, **endothelial proliferation occluding capillaries**, mesangial proliferation, **crescents in severe cases** (otherwise uncommon).\n- **IF: diffuse C3 and IgG, \"starry sky\". EM: subepithelial electron-dense HUMPS**, plus subendothelial deposits.\n\n### Kidney biopsy — eight indications\n- **1 —** severe renal impairment (**RPGN**). **2 —** nephrotic syndrome.\n- **3 —** **normal C3**. **4 —** no evidence of streptococcal infection.\n- **5 —** persistent gross haematuria or significant proteinuria **> 2 months**.\n- **6 —** persistent impaired kidney function **> 2 months**.\n- **7 —** persistent microscopic haematuria or any proteinuria **> 6–12 months**.\n- **8 —** persistent hypocomplementaemia **> 3 months**.\n\n### Treatment\n- **Hospital for complicated cases** — renal failure, heart failure, encephalopathy.\n- **Supportive: salt restriction · fluid restriction, intake = insensible (400 mL/m²/day) + urine output · rest during the oliguric phase · avoid volume depletion and nephrotoxins.**\n- **Oedema and hypertension: furosemide 1–2 mg/kg/day** plus salt and fluid balance; **CCB (nifedipine)**.\n- **Renal failure:** fluid balance, diuretics, **dialysis if severe**. **RPGN: pulse IV methylprednisolone**, the most common therapy.\n- **Heart failure:** preload reduction (diuretics) · afterload reduction (**CCB, ACE inhibitors**) · inotropes (**dopamine — digitalis should be avoided**). **Hypertensive encephalopathy: IV hydralazine or nitroglycerin.**\n\n### ⚠️ Four historical measures that are NOT recommended\n- **Antibiotics to the patient — rare**, only for an **active bacterial infection at diagnosis. Antibiotics do not alter the course of the GN.**\n- **Antibiotics to the family — no**, except epidemics, a known carrier, a vulnerable contact.\n- **Protracted bed rest — no. \"Rest as needed.\" Limitation of sports — no**, outside the acute phase.\n- **⚠️ PREVENTION: early antibiotic therapy for streptococcal throat and skin infection does NOT eliminate the risk of GN.** Culture family members, especially young children, and treat if positive. **Family pets, particularly dogs, have been reported as carriers.**\n\n### Outcome\n- **Short term excellent — complete recovery > 95 % at 6–8 weeks, mortality < 0.5–1 %.**\n- **Recurrent gross haematuria is common with a new acute illness early after diagnosis** — recrudescence.\n- **⚠️ Hypocomplementaemia > 3 months raises concern for a chronic hypocomplementaemic GN.**\n- **Long term: no residual by 1–2 years** in almost all; a CKD predisposition remains as after any AKI; **2 % develop CKD**; **ESKD uncommon**; **recurrent APSGN quite rare**.\n\nSrc: L39",
        "qs": [
          "pedhd-renal-20"
        ]
      },
      {
        "id": "ren-11",
        "w": "high",
        "h": "IgA nephropathy and IgA vasculitis (HSP) — one deposit, two diseases",
        "body": "**IgA nephropathy is defined by the detection of IgA in glomeruli as dominant or co-dominant with respect to the other immunoglobulins.** Two forms: **primary IgAN (Berger’s GN)**, in the absence of systemic disease, and **IgAN secondary to vasculitis (IgAVN) — Henoch–Schönlein GN**.\n\n### IgA nephropathy\n- **The most common chronic glomerular disease in children.**\n- Commonest in the **second and third decades**; in children **median age 10.9 years**, **uncommon under 3**. **Male > female. East Asians > Whites > Blacks.**\n- **⚠️ SYNPHARYNGITIC HAEMATURIA: gross haematuria within 1–2 DAYS of an upper respiratory or gastrointestinal infection**, ± **loin pain** — children typically present this way, so diagnosis by biopsy is early.\n- Also **asymptomatic microscopic haematuria** with varying proteinuria, ± progressive kidney disease. **Mild to moderate hypertension**, most often with nephritic or nephrotic syndrome.\n- **Function declines slowly, over years. More benign in children than adults** — an uncommon cause of childhood ESKD.\n\n### IgA vasculitis / Henoch–Schönlein purpura\n- **A vasculitis with IgA-dominant immune deposits affecting SMALL VESSELS (capillaries, venules, arterioles), involving SKIN, GUT and GLOMERULI, associated with arthralgia or arthritis.**\n- **The most common vasculitis of childhood. Age 2–11 years, peak 6. White/Asian males more than everyone else. Typically preceded by an upper respiratory infection.** Adult symptoms are worse.\n- **Children: 60–140 per million, nephritis in 20–80 %, median 30 %. Adults: 4–13 per year, peak age 45, nephritis in 80 %.**\n- **Renal involvement in children is highly variable: 70–80 % recover within 4 weeks · 20–28 % have an abnormal urinary sediment for > 1 month · 1–7 % progress to ESKD** long-term; rapid regression is frequent.\n- **Natural history: 95 % full recovery after 3–4 weeks**; rare rapid progression; possible progression over decades. **Monitoring is the management** — follow the urine; **analgesia** for the joint and abdominal pain.\n\n*The purpura sits over the **legs and buttocks**, with arthralgia and abdominal pain, in an **afebrile** child with a **normal platelet count** — which separates it from thrombocytopenic purpura and from meningococcal sepsis.*\n\nSrc: L39",
        "qs": [
          "pedhd-renal-19",
          "pedhd-renal-20"
        ]
      },
      {
        "id": "ren-12",
        "w": "must",
        "h": "Haemolytic uraemic syndrome — the triad after bloody diarrhoea",
        "body": "**⚠️ NOT DESCRIBED IN ANY PAEDIATRIC DECK** — L39 names HUS only in the cause tree and as a cause of **haemoglobinuria**, the diarrhoea deck only as a stool-culture indication. **Everything below is supplied from general medical knowledge and tagged.**\n\n**HUS: microangiopathic haemolytic anaemia + thrombocytopenia + acute kidney injury** *(not in course material)*.\n\n- **Typical (D+) HUS follows bloody diarrhoea** — classically **Shiga-toxin-producing E. coli O157:H7**, from undercooked meat, unpasteurised milk or **farm animal contact** *(not in course material)*.\n- **The renal picture begins 5–10 days after the diarrhoea starts**, as the stools improve: **pallor, oliguria or anuria, irritability, lethargy** *(not in course material)*.\n- **Atypical (D−) HUS** — complement-regulation defect, no diarrhoea, relapsing, worse prognosis *(not in course material)*.\n\n### The blood picture is the diagnosis\n\n|Finding|In HUS|What it excludes|\n|---|---|---|\n|**Haemoglobin**|**Low, with red cell FRAGMENTS (schistocytes) on the film**|Not simple blood loss|\n|**Platelets**|**Low** — consumed in microthrombi|—|\n|**PT and APTT**|**⚠️ NORMAL**|**Excludes DIC**, where both are prolonged|\n|**Urea / creatinine**|**Raised — AKI**|Excludes ITP and simple gastroenteritis|\n\n### The look-alikes an examiner offers\n- **Immune thrombocytopenic purpura:** low platelets **alone** — normal haemoglobin and renal function.\n- **Henoch–Schönlein purpura:** purpura with a **normal platelet count**; nephritis follows a rash, not diarrhoea.\n- **Acute lymphoblastic leukaemia:** blasts, hepatosplenomegaly, lymphadenopathy; no diarrhoeal prodrome.\n- **Post-streptococcal GN:** hypertension and low C3 after throat or skin infection — **no anaemia, no thrombocytopenia**.\n\n### Management\n- **Supportive: fluid and electrolyte balance, transfusion for severe anaemia, dialysis for the AKI**; most children recover renal function. **⚠️ Avoid antibiotics and antimotility agents in Shiga-toxin diarrhoea** — they increase toxin release *(not in course material)*.\n- L39 states one thing directly: **HUS causes intravascular haemolysis, so the urine can be haem-positive with FEW OR NO red cells** — haemoglobinuria, not haematuria.\n\nSrc: L39 (HUS in the cause tree and as a cause of haemoglobinuria); `gastroenterology`’s diarrhoea deck (stool culture in bloody diarrhoea and HUS); the clinical account is supplied and tagged",
        "qs": [
          "pedhd-renal-8",
          "pedhd-renal-22"
        ]
      },
      {
        "id": "ren-13",
        "w": "must",
        "h": "Proteinuria and nephrotic syndrome",
        "body": "### Normal, and the four kinds of abnormal\n- **Urinary protein excretion in the normal child < 100 mg/m²/day, or a total < 150 mg/day. Normal protein-to-creatinine ratio < 20 mg/mmol.**\n- **Four types: TRANSIENT · ORTHOSTATIC · GLOMERULAR · TUBULAR.**\n- **⚠️ ORTHOSTATIC proteinuria: absent in the first-void early morning sample, present later after normal activity. Benign — reassure.** No biopsy, no steroids, no 24-hour collection.\n- **The filtration barrier is CHARGE-selective as well as size-selective: the glomerular basement membrane GLYCOSAMINOGLYCANS repel negatively charged plasma proteins** — not the mesangial matrix, the fenestrated endothelium or the podocyte cell body.\n\n### Nephrotic syndrome\n**Heavy proteinuria + oedema + hypoalbuminaemia.**\n\n|  |**NEPHROTIC**|**NEPHRITIC**|\n|---|---|---|\n|Protein|**Heavy — 4+ on dipstick**|Mild to moderate|\n|Blood|Little or none|**Gross or microscopic haematuria, RBC casts**|\n|**Blood pressure**|**⚠️ NORMAL**|**⚠️ RAISED**|\n|**Complement**|**⚠️ C3 and C4 NORMAL**|**C3 low in APSGN**|\n|Renal function|Normal|Often impaired|\n|Oedema|**Gross — periorbital, ascites, scrotal, pitting**|Mild, facial|\n\n**Aetiology: idiopathic — MINIMAL CHANGE DISEASE.** **Secondary — Henoch–Schönlein purpura · systemic lupus erythematosus · infection · other vasculitides.**\n\n### Minimal change disease = steroid-sensitive nephrotic syndrome\n- **85–90 % of children with nephrotic syndrome. More in boys. Associated with atopy. Often preceded by a URTI. Good prognosis.**\n- **Age 1–10 years · NO macroscopic haematuria · normal blood pressure · normal complement · normal renal function · LIGHT MICROSCOPY NORMAL.**\n- **Work-up, part 1:** urine protein by dipstick or **protein/creatinine ratio** · **serum albumin** · urea, creatinine, electrolytes · urine microscopy · **urine culture**.\n- **Work-up, part 2:** **complement C3, C4** · **antistreptolysin O or anti-DNAse B titres and throat swab** · **malaria screen if travel abroad** · **hepatitis B and C screen** · **FBC and ESR**.\n- **Treatment: CORTICOSTEROIDS** (oral prednisolone) · **management of the oedema** · **steroid-sparing drugs**.\n\n### Complications — four, and the mechanism of the worst\n- **HYPOVOLAEMIA** — intravascular volume low despite the oedema, so diuretics and albumin are second-line.\n- **THROMBOSIS**, including **renal vein thrombosis. ⚠️ Mechanism: urinary loss of ANTITHROMBIN III plus increased hepatic synthesis of procoagulant factors** — not volume overload, not cholesterol-induced endothelial damage.\n- **INFECTION** — bacterial. **HYPERCHOLESTEROLAEMIA.** Effusions (pleural, ascites) follow the oedema.\n- *Reduced glucose tolerance is not a complication of the disease — it is an adverse effect of the steroids that treat it (not in course material).*\n\n### When steroids fail\n- **STEROID-RESISTANT nephrotic syndrome — three patterns: focal segmental glomerulosclerosis · membranoproliferative glomerulonephritis · membranous nephropathy.**\n- **CONGENITAL nephrotic syndrome: first 3 months of life · poor prognosis · not responsive to steroids · treatment only symptomatic.**\n\nSrc: L41 (body and the three MCQ slides)",
        "qs": [
          "pedhd-renal-6",
          "pedhd-renal-7",
          "pedhd-renal-21",
          "pedhd-renal-25"
        ]
      },
      {
        "id": "ren-14",
        "w": "high",
        "h": "CAKUT — the spectrum of renal mass, shape and position",
        "body": "**CAKUT: a spectrum of structural malformations resulting from abnormal development of the kidneys and/or urinary tract (ureters, bladder, urethra).**\n\n### The four numbers\n- **Affects over 1 % of live births.**\n- **Approximately 30 % of all diagnosed congenital anomalies.**\n- **⚠️ THE LEADING CAUSE OF CKD IN CHILDREN — approximately 40–50 % of cases worldwide.**\n- **Sporadic or familial, syndromic or non-syndromic. Identifiable antenatally.**\n\n### Embryology\n- **⚠️ Normal kidney development depends on interaction of the URETERIC BUD with the METANEPHRIC MESENCHYME, in the 5th week** — not mesonephric duct with bladder, not cloaca with urethra.\n- **Serial branching, approximately 15 generations. By the 20th week about 30 % of nephrons are present and the entire urinary system formation is completed. At least 16 signalling agents.**\n\n### Classification — four groups\n**Abnormalities of the renal MASS · abnormalities of SHAPE and POSITION · abnormalities of the URINARY TRACT · less common forms of urinary tract abnormality.**\n\n### Renal agenesis\n- **Unilateral or bilateral. Association with VACTERL.**\n- **⚠️ Absence of BOTH kidneys → severe oligohydramnios → POTTER SEQUENCE, fatal**: **pulmonary hypoplasia**, **limb deformity (talipes)**, **failure to pass urine**.\n\n### Renal dysgenesis — three principal types\n\n|Type|What it is|\n|---|---|\n|**Hypoplasia**|**Small kidney, DECREASED NUMBER of nephrons, NORMAL architecture**|\n|**Dysplasia**|**Abnormalities in metanephric DIFFERENTIATION**|\n|**Cysts**|Simple / multilocular cysts, **multicystic dysplastic kidney**, and may include **polycystic kidney disease**|\n\n- **MCDK — multicystic dysplastic kidney:** **failure of union of the ureteric bud with the nephrogenic mesenchyme.**\n- **Non-functioning large fluid-filled cysts, a \"cluster of grapes\", with NO renal tissue in between.**\n- **A significant proportion involute by 2 years. Nephrectomy only if it stays very large or hypertension develops — rare. Very low risk of malignant transformation.**\n- **POLYCYSTIC KIDNEY DISEASE: BOTH kidneys always affected**, though some or normal function is maintained. **Main childhood symptom is hypertension**; CKD needing renal replacement **in late adulthood**. **Extrarenal: cysts in liver and pancreas, cerebral aneurysms, mitral valve prolapse.**\n\n### Shape and position\n- **ECTOPIC KIDNEY: pelvic, iliac or thoracic**, or to the contralateral side — **fused in most cases = crossed fused ectopia**.\n- **HORSESHOE KIDNEY: fusion of the LOWER POLES. ⚠️ Trapped by the INFERIOR MESENTERIC ARTERY during ascent.** May bring **obstruction, infection or stone formation**. **High association with Turner syndrome.**\n- **DUPLEX KIDNEY:** from a simply bifid renal pelvis to complete division with **two ureters**.\n\nSrc: L40 (body and the six MCQ slides)",
        "qs": [
          "pedhd-renal-26",
          "pedhd-renal-18"
        ]
      },
      {
        "id": "ren-15",
        "w": "must",
        "h": "CAKUT — reflux and obstruction, the lesions that scar kidneys",
        "body": "### Vesicoureteral reflux\n- **⚠️ Predisposes to recurrent UTIs and renal scarring.**\n- **Mechanism: the ureters are displaced LATERALLY and enter DIRECTLY into the bladder rather than at an angle, with a SHORTENED OR ABSENT INTRAMURAL COURSE.**\n- Graded by the **International Reflux Study (IRS) classification**, on **VCUG**. **Familial in 30–50 %.**\n- **Most low-grade cases resolve spontaneously**; surgery (**reimplantation**) is reserved for **recurrent breakthrough infections and/or high grades**.\n\n### Ureteropelvic junction obstruction (UPJO)\n- **⚠️ THE MOST COMMON OBSTRUCTIVE LESION IN CHILDHOOD. Usually INTRINSIC obstruction.**\n- **Approximately 60 % occur on the LEFT; bilateral in 10 %.**\n- **Corrected by PYELOPLASTY in severe cases. Prompt surgical repair if:** abdominal mass · **bilateral severe hydronephrosis** · **solitary kidney** · **diminished function in the involved kidney**.\n\n### Posterior urethral valve\n- **⚠️ OCCURS IN MALES ONLY.** Causes **bladder outlet obstruction**.\n- **Presents with poor stream, urinary tract infections, or renal failure.** Antenatally **bilateral hydronephrosis with a distended bladder in a male**; postnatally **failure to pass urine**.\n- **⚠️ 30 % experience end-stage renal disease or chronic renal insufficiency.**\n- **Treatment: immediate catheterisation, then transurethral (endoscopic) valve ablation**; sometimes a **temporary vesicostomy**.\n- **⚠️ MCUG is MANDATORY in males with bilateral hydronephrosis** — but the ultrasound comes first.\n\n### Less common forms\n- **PRUNE BELLY (Eagle–Barrett) SYNDROME — a triad: lax abdominal wall muscles (AWM deficiency) · intra-abdominal testis · urinary tract distension and abnormalities. 95 % are males.** Associated extra-urological anomalies, e.g. **cardiac**.\n- **BLADDER EXSTROPHY: the bladder protrudes from the abdominal wall with its mucosa exposed · the umbilicus is displaced downwards · the pubic rami are widely separated · the anus is displaced anteriorly**, and there may be **rectal prolapse**.\n\nSrc: L40",
        "qs": [
          "pedhd-renal-17",
          "pedhd-renal-26"
        ]
      },
      {
        "id": "ren-16",
        "w": "high",
        "h": "CAKUT — how it shows itself, what to image, and what to do",
        "body": "### Clinical presentation — seven routes in\n**Antenatal hydronephrosis on routine ultrasound · accidental postnatal discovery in an asymptomatic child · recurrent urinary tract infections · poor urinary flow · failure to thrive · hypertension and proteinuria · chronic kidney disease.**\n\n### The investigations, and what each is for\n\n|Test|Purpose|Limitations|\n|---|---|---|\n|**Renal ultrasound**|**FIRST-LINE. Kidney size, corticomedullary differentiation, system dilatation**, stones, nephrocalcinosis. **Non-invasive, mobile**|**Anatomy, not function. Operator dependent; may not detect all renal scars**|\n|**VCUG / MCUG**|**⚠️ GOLD STANDARD for VUR and PUV. Mandatory in males with bilateral hydronephrosis.** Contrast via urethral catheter; bladder and urethral anatomy|**Invasive and unpleasant beyond infancy · high radiation dose · can introduce infection**|\n|**DMSA**|**Static scan of the renal cortex. Functional renal mass and renal SCARS**|**⚠️ Wait at least 2 MONTHS after a UTI, or you diagnose false \"scars\"**|\n|**MAG3 renogram**|**Dynamic. Measures DRAINAGE**; separates **obstructive from non-obstructive dilatation**. **Furosemide often given**|Isotope and timing dependent|\n|**Bladder urodynamics**|**How well the bladder empties**, and flow rates — bladder abnormality drives recurrent UTI|—|\n|**Laboratory**|**CBC · urea, creatinine, electrolytes · blood gases · urinalysis · urine culture**|—|\n\n**⚠️ Ultrasound gives ANATOMY, not function.** Dysplastic kidneys + hypertension + faltering growth needs **plasma creatinine and electrolytes** to quantify the CKD — repeating the scan adds nothing.\n\n### Principles of management\n- **Antenatal:** with **severe oligohydramnios**, **fetal intervention (shunting)** may be considered **in highly specialised centres**.\n- **Postnatal medical: monitoring growth and development · prophylactic antibiotics** for **high-grade VUR or obstructive uropathy with recurrent infections**, e.g. **trimethoprim or nitrofurantoin** · **blood pressure control**.\n- **Long-term follow-up** where necessary for CKD patients. *Lesion-by-lesion surgery is in ren-15.*\n\n### Complications CAKUT predisposes to\n**Recurrent urinary tract infections · bladder dysfunction · renal scarring · hypertension and proteinuria. ⚠️ The primary mechanism leading from CAKUT to CKD is PROGRESSIVE RENAL SCARRING.**\n\nSrc: L40",
        "qs": [
          "pedhd-renal-18",
          "pedhd-renal-15",
          "pedhd-renal-17"
        ]
      },
      {
        "id": "ren-17",
        "w": "know",
        "h": "Two the decks barely touch — the renal stone, and the wet bed",
        "body": "### Renal stone\n- **What the decks print:** **unilateral flank pain radiating to the groin suggests obstruction by a calculus** · **idiopathic hypercalciuria** causes recurrent gross haematuria (L39, and both sit in ren-8’s tree) · **horseshoe kidney predisposes to stone formation** (L40).\n- **⚠️ The discriminator: colicky loin pain + haematuria + NO proteinuria = stone.** Proteinuria points at the glomerulus; a **palpable mass** at Wilms tumour; **fever with loin pain and rigors** at pyelonephritis.\n- **⚠️ PROTEUS AND STRUVITE:** L38 prints Proteus twice as a urinary pathogen but never links it to stones.\n- **Proteus is UREASE-producing:** it splits urea to ammonia, alkalinises the urine and precipitates magnesium ammonium phosphate — **struvite (infection) stones** *(mechanism not in course material)*.\n- So **recurrent UTI ending in a calculus points at Proteus, not the commoner E. coli**.\n- **First investigation: ULTRASOUND of the kidneys and urinary tract** — the stone and the dilatation, non-invasively. **DMSA is for scars and waits 2 months after infection** (L40).\n\n### Enuresis\n- **⚠️ Not written as a topic in any paediatric deck** — but the reasoning the examiner wants IS printed, in the endocrine decks.\n- **The DKA deck:** **\"polyuria and enuresis\"**, listed against a differential of **UTI**.\n- **The diabetes deck:** **nocturnal enuresis**, among the presenting features of **type 1 diabetes mellitus** *(that account is `endocrine`’s; cited here, not written)*.\n- **PRIMARY: never reliably dry. SECONDARY: wetting returns after at least 6 months of dryness — and always needs a cause sought** *(definitions not in course material)*.\n- **⚠️ THE FIRST TEST IS A URINE DIPSTICK:** one strip screens for **infection** (nitrite, leukocyte esterase) and **diabetes** (glucose) at once — the two causes above.\n- **It comes BEFORE blood glucose, microscopy and culture, ultrasound, and long before a water deprivation test** *(ordering not in course material)*.\n- Other pointers: **constipation** (also a UTI risk factor, L38) · **polydipsia with polyuria** · a **new psychosocial stress such as starting school** *(not in course material)*.\n\nSrc: L39; L40; L38 (Proteus, constipation); `endocrine`’s DKA and diabetes decks (enuresis and polyuria as diabetes presentations — cited only, not counted); the stone mechanism, the enuresis definitions and the test ordering are supplied and tagged",
        "qs": [
          "pedhd-renal-3",
          "pedhd-renal-4",
          "pedhd-renal-9",
          "pedhd-renal-15"
        ]
      }
    ]
  }
};
