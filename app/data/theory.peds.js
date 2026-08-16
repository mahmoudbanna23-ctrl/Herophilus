/* Pediatrics theory, keyed by chapter id.
   Written in Phase 4 from lecture slides + questions + book. See CLAUDE.md. */
var T_PEDS = {
  "cardiac": {
    "intro": "Almost everything here is one table: the murmur signature grid. Expect a murmur plus one physical sign and a single best diagnosis, or the age a shunt declares itself. Innocent versus pathological is asked directly — learn the \"S\" checklist and the three findings that break it.",
    "sections": [
      {
        "id": "card-1",
        "w": "must",
        "h": "Aetiology, the lecturer’s classification, and how CHD declares itself",
        "body": "### Aetiology\n- **Genetic — over 10 %** and rising: whole chromosomes, point mutations, **microdeletions**.\n- **Polygenic:** one affected child **doubles the risk** for later siblings.\n- **Chromosomal:** **Down · Edward · Patau · Turner · Noonan.**\n- **Maternal:** **rubella · drugs · alcohol · lupus · diabetes.**\n\n**Congenital rubella:** cataract (**absent red reflex**), deafness, **symmetrical growth restriction**; the cardiac lesion is a **PDA**, peripheral pulmonary stenosis second *(lesion not in course material)*.\n\n*Down → AVCD. Turner → coarctation (genetics deck, cited only).*\n\n### The six-group classification, and what each group LOOKS like\n\n|Group|Symptoms|Lesions|\n|---|---|---|\n|**Left-to-right shunt**|**breathless or asymptomatic**|**VSD · PDA · ASD**|\n|**Right-to-left shunt**|**blue**|**Tetralogy of Fallot** (L34 adds **TGA**)|\n|**Common mixing**|**breathless AND blue**|**AVCD** (L34 adds **complex CHD**)|\n|**Well child with obstruction**|**asymptomatic**|**PS · AS** (L34 adds **adult-type CoA**)|\n|**Sick neonate with obstruction**|**COLLAPSED WITH SHOCK**|**CoA · HLHS**|\n|**Cyanotic group**|blue|**F4 · TA · PA · Ebstein anomaly**|\n\n*The symptom column is L34 slide 2 (Table 18.2); the six groups are L33 slide 6. Two of the five sets are one word — asymptomatic and collapsed — and they are the whole triage.*\n\n- **VSD is the commonest CHD — 30–40 % of newborns with a CHD.** **PDA about 10 %.**\n- **Tetralogy of Fallot is 10 % of all CHD and the commonest cause of cyanosis after 1 year of age** — the commonest *cyanotic* lesion, never the commonest lesion.\n\n### How it presents\n**Antenatal ultrasound diagnosis · a murmur in an asymptomatic child · growth failure · recurrent chest infection · heart failure · shock · cyanosis, duct-dependent · screening.**\n\nSrc: L33 slides 4–7, 16, 38, 65; L34 slide 2 (visual read); L35 pages 8, 10; Turner–CoA from `6) Genetically determined disease_`, cited only",
        "qs": [
          "pedhd-card-2",
          "pedhd-card-22"
        ]
      },
      {
        "id": "card-2",
        "w": "must",
        "h": "Fetal circulation, and why a big shunt stays quiet until 2–8 weeks",
        "body": "### The three fetal shunts\n- **Ductus venosus:** umbilical vein → inferior vena cava.\n- **Ductus arteriosus:** main pulmonary artery → aorta.\n- **Foramen ovale:** anatomic opening between right and left atrium.\n\n|Fetal|Infant|\n|---|---|\n|**Low pressure system**|**High pressure system**|\n|**Right-to-left shunting**|**Left-to-right blood flow**|\n|**Lungs non-functional**|**Lungs functional**|\n|**Increased pulmonary resistance**|**Decreased pulmonary resistance**|\n|**Decreased systemic resistance**|**Increased systemic resistance**|\n\n### The switch at birth\n- **Cord clamped** → low-pressure placental circuit shut down → **systemic resistance rises**.\n- **First breaths** → pulmonary resistance falls, **pulmonary flow rises SIX-FOLD** → **left atrial pressure rises**.\n- Placenta excluded → **right atrial return falls** → **the flap valve of the foramen ovale closes**.\n- **The ductus arteriosus closes within the first few hours or days.**\n\n### Normal saturations and pressures after birth\n*The reference numbers every shunt is read against — a step-up in saturation localises the defect.*\n\n|Chamber|Saturation|Pressure mmHg|\n|---|---|---|\n|**SVC / IVC → right atrium**|**75 %**|**4** (mean)|\n|**Right ventricle**|**75 %**|**25/0**|\n|**Pulmonary artery**|**75 %**|**25/10**|\n|**Pulmonary veins → left atrium**|**95 %**|**6** (mean)|\n|**Left ventricle**|**95 %**|**100/0**|\n|**Aorta**|**95 %**|**100/70**|\n\n**⚠️ The exam point:** a large VSD is quiet at birth because **PVR is still high**. It falls over the following weeks, **the left-to-right shunt widens, and the infant declares at 2–8 weeks** — nothing new has gone wrong.\n\n**Infant heart failure:** a large left-to-right shunt until proved otherwise — **breathless and sweaty on feeding, poor weight gain, recurrent chest infections, hepatomegaly**. L35 lists hepatomegaly with increased pulmonary blood flow, so it is expected at this age, not absent.\n\nSrc: L33 slides 10–12, 20, 28, 56 (slides 20 and 56 by visual read); L35 page 52",
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
        "body": "**VSD:** **30–40 % of all newborns with a CHD** — the commonest defect.\n\n### Anatomical types\n- **Perimembranous — 70–80 %**, the commonest.\n- **Muscular — 5–20 %:** central / mid-muscular, apical, **multiple = Swiss cheese septum**.\n- **Inlet / AV canal type — 5–8 %.**\n- **Supracristal / subaortic — 5–7 %.**\n\n### Haemodynamics\n- **Magnitude of shunt = size + pulmonary vascular resistance.**\n- **Restrictive vs unrestrictive:** a **small VSD is a RESTRICTIVE defect** and is **haemodynamically insignificant**; a **large VSD is unrestrictive**, so the shunt is decided by pulmonary vascular resistance alone.\n- **Small, about 3 mm:** the defect itself is the resistance → less flow → **PVR normal**.\n- **Large:** minimal resistance at the defect → more flow → **shear and tear, fibrosis** → **high PVR**.\n- Systole: **LV → PA → lungs → pulmonary veins → LA → LV** = **volume overload of LA and LV**.\n- Shunt dilates the pulmonary artery and raises PVR → **pulmonary hypertension**, more with moderate and larger defects.\n- RV pressure rises with time **until Eisenmenger syndrome. Left-to-right early, right-to-left late.**\n\n### Haemodynamics of a large VSD — the numbers\n**Oximetry step-up:** right atrium **75 %**, then **right ventricle 85 % and pulmonary artery 85 %** — the jump is the shunt entering at ventricular level. **RV 60/0 · PA 60/30 · LA mean 8 · LV 100/0 · aorta 100/70**, against the normal set in `card-2`.\n\n### Small VSD\n- **Asymptomatic, accidental discovery; normal weight gain and development.**\n- **Pansystolic, harsh, parasternal; normal P2.**\n- **Normal X-ray, normal ECG**; echo diagnostic.\n- **Prognosis: spontaneous closure**, with a risk of **bacterial endocarditis**.\n- **Management: assurance and follow-up**, intervention if needed.\n\n### Moderate and large (unrestrictive) VSD\n- **Well in the immediate postnatal period; symptoms at 2–8 weeks.**\n- **Persistent dyspnoea, sweating, poor feeding, failure to thrive.**\n- **Poor suckling, choking, difficult breathing, exercise intolerance, recurrent chest infection.**\n- **Tachycardia, tachypnoea, bounding pulse, stunted growth, pericardial bulge, pansystolic murmur, normal P2**, lower respiratory tract infection, heart failure.\n- **Late cyanosis means right ventricular failure.**\n\n### Eisenmenger syndrome\n**The chain, step by step:** **left-to-right shunt → increased pulmonary blood flow (shear stress / circumferential stretch) → endothelial dysfunction and vascular remodelling → increase in PVR → inverted shunt, right-to-left → cyanosis.**\n- **What remodelling means:** **smooth muscle cell proliferation · increase in extracellular matrix · intravascular thrombosis.**\n\n- **Reversal of the shunt to right-to-left**, from raised pulmonary artery pressure and pulmonary vascular disease → **cyanosis and right-sided heart failure**.\n- **Loud pulmonary sound · very short or no systolic murmur · early diastolic murmur of pulmonary regurgitation · murmur of tricuspid regurgitation.**\n- **Around 2 to 3 years of age.**\n- *A VSD murmur that disappears is bad news, not recovery.*\n\n### Management of moderate and large VSD\n- **Furosemide 1 mg/kg every 12 hours (1–3 mg/kg per day) · captopril 0.5–2 mg/kg per day · enalapril 0.1 mg/kg per day · digoxin 10–20 mcg/kg per day.**\n- **Treat the chest infection · review every 2–3 months · manage the failure to thrive · endocarditis prophylaxis.**\n- **Closure: surgical is first choice over 1 year of age**; transcatheter otherwise.\n- **Surgery indicated for: large VSD with pulmonary hypertension · VSD with associated defects · congestive failure not responding to medication.**\n\nSrc: L33 slides 15–16, 22–32 (slides 22, 23 and 24 by visual read)",
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
        "body": "**PDA:** persistence of the duct **beyond 72 hours of life**. **About 10 % of CHD** in full-term infants.\n\n### Why it is open, and why it shuts\n- **Fetal role:** carries deoxygenated blood **past the collapsed lungs** to the descending aorta and umbilical arteries.\n- **Held open in utero by: placental prostaglandins · prostaglandins and nitric-oxide-like vasodilators made by the duct itself · hypoxia.**\n- **Closed after birth by: local vasoconstrictors (endothelin) responding to higher arterial oxygen · removal of placental prostaglandin · fewer prostaglandin E2 receptors in the ductal wall.**\n- **Spontaneous closure in 55 % of full-term newborns within the first 60 hours.**\n\n### The preterm duct\n- **Patency is inversely related to gestational age.**\n- **Lower responsiveness of the muscle layer to oxygen.**\n- **Higher sensitivity to the vasodilator effects of prostaglandin E2 and nitric oxide.**\n- *The wall of the duct is muscularised in the preterm, versus a poor muscle layer in the full term.*\n\n### Why the murmur is CONTINUOUS\n- **The gradient never closes:** aortic pressure exceeds pulmonary artery pressure **throughout the cardiac cycle**, so flow across the duct is **continuous** — systolic *and* diastolic. That is the machinery murmur, and no other left-to-right shunt has it.\n- **It is NOT a direct shunt:** the path is **left ventricle → aorta → pulmonary artery → right ventricle**, which is why the LV and LA dilate rather than the right heart first.\n\n### Presentation, investigation, treatment\n- **Volume overload**; ducts vary in **size, length and shape**; the picture depends on **size and pressure gradient**.\n- **Small: asymptomatic.** Otherwise **chest infection, growth failure, heart failure**.\n- **Hyperdynamic circulation → BOUNDING PULSE** · **machinery murmur, first intercostal space** · cardiomegaly · signs of pulmonary hypertension.\n- **CXR: cardiomegaly, LV dilatation.** ECG. **Echo with Doppler is the most reliable non-invasive tool.**\n- **PRETERM: INDOMETHACIN, a COX-2 inhibitor**, oral or **preferably IV (lyophilised)**; **best before 10 days of age and in less mature infants**; **three doses 12–24 hours apart**. **Ibuprofen an evaluated alternative.** Then ligation or transcatheter closure.\n- **INFANTS AND CHILDREN: transcatheter closure — coil occlusion or device**; **surgical ligation, open or thoracoscopic**.\n- **⚠️ Never close a duct the child is living on.** In critical coarctation, AS, PS and TGA the duct **is** the circulation, and **prostaglandin keeps it open**.\n\n*A PDA with absent red reflexes and symmetrical growth restriction is congenital rubella.*\n\nSrc: L33 slides 33–47 (slides 39 and 40 by visual read); L34 slide 57",
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
        "body": "**AS and PS:** both give an asymptomatic ejection murmur with a click. **The soft, delayed component of S2 names the valve.**\n\n- **AS: most present with an asymptomatic murmur; severe stenosis gives reduced exercise tolerance, chest pain on exertion, or syncope.**\n- **⚠️ Critical neonatal AS has a DUCT-DEPENDENT SYSTEMIC circulation → severe heart failure leading to SHOCK.**\n- **PS: most asymptomatic, diagnosed clinically by the murmur.**\n- **⚠️ Critical neonatal PS has a DUCT-DEPENDENT PULMONARY circulation → cyanosis in the first few days.**\n\n|  |**Aortic stenosis**|**Pulmonary stenosis**|\n|---|---|---|\n|Murmur|**ejection systolic, upper RIGHT sternal edge**|**ejection systolic, upper LEFT sternal edge**, ± thrill|\n|Radiation|**to the neck and carotids**|little|\n|Click|**apical ejection click**|**at the upper left sternal edge**|\n|Second sound|**A2 delayed and soft**|**P2 delayed and soft**|\n|Pulse|**small volume, slow rising; carotid thrill**|normal|\n|Extra sign|—|**RV impulse, a heave, when severe**|\n|ECG|**LVH — deep S in V2 + tall R in V6, over 45 mm TOTAL; downgoing T = LV STRAIN and SEVERE stenosis**|**RVH — UPRIGHT T WAVE IN V1** (in children)|\n|CXR|normal or prominent LV with **post-stenotic dilatation of the ascending aorta (aortopathy)**|normal or **post-stenotic dilatation of the pulmonary artery**|\n|Echo, the **gold standard**|degree (mild/mod/severe/critical), LVH, LV function, associations (**CoA, dilated ascending aorta**), aortic regurgitation|degree, RVH, RV function, associations (**ASD, pulmonary branch stenosis**), pulmonary regurgitation|\n|Critical neonatal form|duct-dependent **SYSTEMIC** → **shock**|duct-dependent **PULMONARY** → **cyanosis**|\n|Treatment|**balloon aortic valvoplasty or aortic valve replacement**|**balloon pulmonary valvoplasty by catheter; surgery rarely required**|\n|Indications|**symptoms · severe stenosis · ischaemia on ECG**|**symptoms · severe stenosis**|\n\n**Bicuspid aortic valve on echo:** in the long axis it **retains mobility but DOMES IN SYSTOLE** instead of opening flat — the sign that names it, and the commonest valve behind childhood AS.\n\n*Pure PS is the one exception to the single-S2 rule in cyanotic assessment — it may give a wide split with a softly audible P2.*\n\nSrc: L34 slides 3–27 (slides 7, 9 and 18 by visual read); L35 page 53",
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
        "body": "### Where the narrowing sits, and the four anatomical patterns\n- **Site:** **narrowing of the aorta DISTAL TO THE LEFT SUBCLAVIAN ARTERY, adjacent to the insertion of the arterial duct** — which is why the right arm is hypertensive and the left arm may not be.\n- **Postductal** — beyond the duct; the adult type, survives to present late.\n- **Postductal with collaterals** — the chronic form that notches ribs.\n- **Preductal**, and **extensive preductal** — the neonatal forms, duct-dependent.\n\n**The collateral pathway, named:** **subclavian artery → subscapular artery → INTERCOSTAL ARTERIES → descending aorta**, with the **inferior epigastric artery** feeding the lower route. Those intercostals are what erode the rib undersurfaces.\n\n### Adult type — a well child\n- **Asymptomatic.**\n- **Systemic hypertension in the RIGHT ARM.**\n- **Murmur:** ejection systolic **BETWEEN THE SHOULDER BLADES — or none at all**; collaterals heard as a **CONTINUOUS MURMUR AT THE BACK**.\n- **RADIO-FEMORAL DELAY** — blood bypasses the obstruction through chest-wall collaterals, so the leg pulse is late.\n- **CXR: USUALLY NORMAL in a child.** **RIB NOTCHING** from **aortic-to-aortic collateral arteries** running under the ribs posteriorly appears **only in young people and adults**, alongside the **“3” sign**, a visible notch in the descending aorta at the coarctation site.\n- **ECG: LVH — deep S in V2 + tall R in V6, over 45 mm total, with an UPRIGHT T wave.** A **downgoing T wave means LV strain and SEVERE coarctation and/or hypertension.**\n- **Echo:** degree, LVH, LV function, associations — **bicuspid aortic valve (BAV) and dilated ascending aorta**.\n- **CT aortography:** degree, **collaterals**, relation to surrounding structures.\n- **Management: CoA stenting by catheter** for **symptoms** or **moderate/severe** coarctation; **surgical repair in some patients**.\n\n### Critical neonatal coarctation — a collapsing baby\n- **Examination on the first day of life is usually normal** — the duct is still feeding the descending aorta.\n- **Acute circulatory collapse after a few days, when the duct closes.**\n- **A sick baby, severe heart failure, ABSENT FEMORAL PULSES, severe metabolic acidosis.**\n- **CXR: cardiomegaly from heart failure and shock.** **Echo:** degree, **patency of the PDA**, LV function, associated VSD. **CT aortography:** degree and **arch hypoplasia**.\n- **Duct-dependent SYSTEMIC circulation:** the descending aorta is fed by blood flowing **RIGHT TO LEFT across the duct** — close it and the lower body has no supply.\n- **Surgical CoA repair is the standard curative treatment.** **Prostaglandin: alprostadil (Prostin VR).**\n\n### ⚠️ THE PULSE PATTERN NAMES THE LESION — left heart outflow obstruction in the sick infant\n*All three are duct-dependent, all three collapse, and all three are managed identically. Only the pulses separate them.*\n\n|Lesion|Clinical features|Management|\n|---|---|---|\n|**Coarctation of the aorta**|circulatory collapse · **ABSENT FEMORAL pulses**|**maintain ABC · prostaglandin infusion**|\n|**Interruption of the aortic arch**|circulatory collapse · **absent femorals AND absent LEFT BRACHIAL pulse**|**maintain ABC · prostaglandin infusion**|\n|**Hypoplastic left heart syndrome**|circulatory collapse · **ALL peripheral pulses absent**|**maintain ABC · prostaglandin infusion**|\n\n*Turner syndrome carries coarctation. Prostaglandin E1 causes apnoea, fever and hypotension — have airway support ready (adverse effects not in course material).*\n\nSrc: L34 slides 28–61 (slides 29, 35, 49, 58 and 61 by visual read)",
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
      }
    ]
  },
  "cardiac-cyan": {
    "intro": "The examiner wants the blue neonate sorted at the bedside: duct-dependent or not, and prostaglandin started before imaging. Tetralogy dominates — the four components, the boot-shaped heart, and the hypoxaemic spell, which is asked as management rather than diagnosis.",
    "sections": [
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
        "body": "**TGA:** **oxygenated blood circulates within the pulmonary circulation and deoxygenated blood in the systemic circulation. Hypoxia is the result of impaired MIXING — better admixture, better saturation. Early presentation.**\n- **Cyanosis within 24–48 hours in a vigorous baby · NO MURMUR · four equal pulses · single loud S2 · saturations do not improve with oxygen · CXR shows INCREASED pulmonary vascular markings.**\n- **The absent murmur is the clue, not a reassurance** — nothing is obstructed, the two circuits are simply parallel.\n- **Timing: neonatal diagnosis → arterial switch at 10–21 days · after 1 month → atrial switch (Senning) at 3–4 months · TGA with VSD → arterial switch with VSD closure at 1–3 months.**\n\n**Tricuspid atresia:** **marked cyanosis from birth**; **ECG: LEFT axis deviation, right atrial enlargement, LVH** — the one cyanotic lesion with a left axis.\n\n**Ebstein anomaly:** **an abnormal tricuspid valve displaced into the right ventricle**; the **anterior cusp keeps some attachment to the valve ring**, the others adherent to the RV wall. **Intermittent cyanosis · multiple clicks · huge right atrium, “arterialisation” of the RV · regurgitant tricuspid valve.**\n\n**Pulmonary atresia:** **cyanosis at birth**; CXR **concave pulmonary artery segment, apex tilted upward**; continuous murmur.\n\n**Truncus arteriosus:** **early CHF · mild or no cyanosis · systolic ejection click.** **Elective repair by 1–3 months; beyond 3 months, high risk of pulmonary vascular disease.**\n\n**TAPVC:** **fixed split S2. Operate as soon as the diagnosis is made — OBSTRUCTED TAPVC IS A SURGICAL EMERGENCY and any delay may be catastrophic.**\n\n**HLHS:** 1–3 %, and one of the two “sick neonate with obstruction” diagnoses beside coarctation. **Four anatomical components: small (hypoplastic) ascending aorta · absent (ATRETIC) mitral valve · small (hypoplastic) left ventricle · atrial septal defect.** The whole systemic output crosses a **patent ductus**, so **ALL peripheral pulses go when it shuts** — see the pulse table in `card-9`.\n\n**Pulmonary AV fistula:** fistulous vascular communications in the lungs, **large and localised, or multiple, scattered and small**. **Commonest form is Osler–Weber–Rendu syndrome.** Features depend on shunt magnitude; **mild cyanosis**; **routine echo normal — CONTRAST echo is diagnostic.**\n\n### When waiting is justified\n- **Complex two-ventricle states — DORV/VSD/PS, TGA/VSD/PS, cTGA/VSD/PS — wait until cyanosis is apparent, or 4 to 5 years of age.**\n- **Balanced single-ventricle states, SaO2 85–90 % — intervene only if symptoms or cyanosis appear.**\n- *Otherwise early correction is desirable: it avoids adverse cardiac, neurodevelopmental and other consequences.*\n\nSrc: L35 pages 36–46, 58–64 (page 44 by visual read); L33 slide 6",
        "qs": [
          "pedhd-card-11",
          "pedhd-card-18"
        ]
      }
    ]
  },
  "cardiac-acq": {
    "intro": "Rheumatic fever is asked through the Jones criteria and through prophylaxis, not pathology. Kawasaki appears as a fever that will not settle. Endocarditis is asked as who needs cover and what grows. Arrhythmias reduce to complex width and rate.",
    "sections": [
      {
        "id": "card-15",
        "w": "must",
        "h": "Arrhythmias — the complex width and the rate decide",
        "body": "**All of them present the same way — palpitation, syncope, heart failure, cardiogenic shock. The ECG separates them.**\n\n|Rhythm|Recognise it by|Treatment|\n|---|---|---|\n|**Respiratory sinus arrhythmia**|rate varying with respiration|**normal in children — none**|\n|**PAC · PVC · ventricular couplets**|isolated ectopic beats|usually benign in a structurally normal heart *(benignity not in course material)*|\n|**SVT**|**regular NARROW-complex tachycardia**; **reentrant atrioventricular**; **HR usually above 180/min, above 220/min in newborns**|**stable → IV ADENOSINE first line** · **unstable → SYNCHRONISED CARDIOVERSION**|\n|**Ventricular tachycardia**|**WIDE-complex tachycardia**|**unstable → cardioversion first line** · **stable → IV amiodarone usually first line, but not always**|\n|**Complete heart block**|**bradycardia with complete atrioventricular dissociation**; **congenital (SLE, CHD)** or **acquired (viral myocarditis, digitalis toxicity)**|**symptomatic → pacemaker implantation**|\n\n- **Narrow complex, defined:** **UNDER 120 ms — three small squares.** In SVT the rate runs **250–300 beats/min**, and the strip shows it **breaking straight to sinus rhythm on adenosine** — the response is itself diagnostic.\n- **Vagal manoeuvres come BEFORE adenosine in a stable child** — ice to the face in an infant, Valsalva or blowing through a narrow straw in an older one. **Carotid sinus massage is not used in children, and never bilaterally** *(the ladder is not in course material)*.\n- **Defect note:** House keys the vagal manoeuvre first; L36 prints IV adenosine as first line for the haemodynamically stable patient and does not mention vagal manoeuvres. **Both recorded, key as printed.**\n\nSrc: L36 slides 4–21 (slide 15 by visual read)",
        "qs": [
          "pedhd-card-5"
        ]
      },
      {
        "id": "card-16",
        "w": "high",
        "h": "Myocarditis, dilated cardiomyopathy, Kawasaki and MIS-C",
        "body": "### Aetiology of myocardial disease — the lecturer’s six groups\n\n|Group|Causes|\n|---|---|\n|**1 Hereditary (genetic)**|**dilated · hypertrophic · restrictive cardiomyopathy · myopathies (Duchenne) · glycogen storage diseases**|\n|**2 Infective (myocarditis)**|**viral — coxsackie, measles, mumps, varicella** · **bacterial — diphtheria, mycoplasma**|\n|**3 Metabolic and endocrine**|**beri-beri · kwashiorkor · hypothyroidism · hyperthyroidism**|\n|**4 Connective tissue disease**|**rheumatic fever · systemic lupus erythematosus · MIS-C**|\n|**5 Drugs and toxins**|**adriamycin · iron overload · irradiation**|\n|**6 Miscellaneous**|**Kawasaki disease · sickle cell anaemia**|\n\n*Every other entity in this section sits somewhere in that grid — it is the map, not a list.*\n\n**Viral myocarditis:** **viral-induced myocardial injury**, ranging **from an asymptomatic patient to fulminant carditis with cardiogenic shock**. **Treatment of heart failure and cardiogenic shock is the cornerstone**; **IV immunoglobulins and steroids in some patients**.\n\n**Dilated cardiomyopathy:** **genetic myocardial dysfunction** → **impaired systolic function and a dilated left ventricle with global hypokinesia**. Presents with **heart failure and/or cardiogenic shock**; **same cornerstone**.\n\n**HF drug set:** as the deck names it — **furosemide (Lasix) · spironolactone (Aldactone) · captopril · digoxin (paediatric elixir 0.05 mg/ml) · carvedilol.** Doses for the shunt lesions are in `card-5`; **spironolactone and carvedilol appear only here.** *The cardiogenic-shock algorithm itself is deferred to `emergencies`.*\n\n**Kawasaki disease:** **immune-mediated vasculitis** with a **high tendency for coronary arteritis**.\n- **IV immunoglobulin is the GOLD STANDARD for treatment.**\n- **Steroids and/or other immunomodulators** in **high-risk and resistant patients, as adjuvant therapy with IVIG**.\n\n### Criteria for COMPLETE Kawasaki — AHA 2017, on the European 2018 consensus slide\n**The rule:** **FEVER OF 5 DAYS OR MORE, PLUS FOUR OF THE FIVE BELOW.**\n\n|Criterion|Description|\n|---|---|\n|**1 Conjunctivitis**|**bilateral, BULBAR, conjunctival injection WITHOUT EXUDATE**|\n|**2 Lymphadenopathy**|**cervical, often over 1.5 cm, usually UNILATERAL**|\n|**3 Rash**|**maculopapular, diffuse erythroderma, or erythema multiforme**|\n|**4 Changes of lips or oral mucosa**|**red cracked lips · STRAWBERRY TONGUE · diffuse erythema of the oropharynx**|\n|**5 Changes to extremities**|**erythema and oedema of palms and soles in the ACUTE phase; PERIUNGUAL DESQUAMATION in the SUBACUTE phase**|\n\n- **⚠️ The escape clause: KD may be diagnosed with FEWER THAN FOUR features if CORONARY ARTERY ABNORMALITIES are detected.** That is the whole point of imaging early.\n- **What the imaging shows:** **coronary artery aneurysms — right coronary and left main — with THROMBUS**, on cardiac MRI and angiography; aneurysms are **not confined to the coronaries** and are seen in the **axillary and iliac/femoral** vessels on MR angiography.\n\n**MIS-C:** **immune-mediated multiorgan dysfunction after COVID infection**, with a **high tendency for cardiac affection — impaired LV systolic function, mitral regurgitation, pericardial effusion, coronary involvement**.\n- **Diagnosis, the lecturer’s one-line version: fever + acute-phase reactants + multi-organ affection + evidence of COVID infection + exclusion of other differentials.**\n- **Steroids, other immunomodulators and IVIG** inhibit the inflammatory cascade.\n- **COVID reaches the heart three ways: MIS-C · acute COVID infection · vaccine-related myocarditis.**\n\n### The three published MIS-C case definitions — ALL FOUR findings required in each\n\n|  |**CDC, under 21 years**|**WHO, 0–19 years**|**RCPCH**|\n|---|---|---|---|\n|**1 Fever**|**38 °C or more, or subjective, for 24 h or more**|**3 days or more**|**fever**|\n|**2 Inflammation**|**CRP, ESR, fibrinogen, D-dimer, ferritin, LDH, IL-6, neutrophilia, hypoalbuminaemia**|**ESR, CRP or procalcitonin raised**|**neutrophilia, raised CRP, LYMPHOPENIA**|\n|**3**|**severe illness REQUIRING HOSPITALISATION**|**no other obvious microbial cause**|**single- or multi-organ dysfunction — shock, cardiac, respiratory, renal, GI or neurological**|\n|**4**|**TWO OR MORE organ systems** — cardiac, renal, respiratory, haematological, GI, dermatological, neurological|**multisystem involvement** — rash, bilateral non-purulent conjunctivitis, mucocutaneous inflammation, hypotension or shock, cardiac dysfunction (pericarditis, valvulitis, coronary abnormality on echo or raised BNP), coagulopathy, acute GI symptoms|**exclusion of any other microbial cause** — bacterial sepsis, staphylococcal or streptococcal shock, enterovirus myocarditis|\n\n*The three differ on what they demand: CDC on severity, WHO on breadth of organ involvement, RCPCH on exclusion. Waiting for those exclusion results must not delay expert advice.*\n\nSrc: L36 slides 22–46 (slides 23, 27, 30–39 and 45 recovered by visual read 2026-08-15)",
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
        "body": "*L37 is largely a picture deck. Its Jones criteria table and its treatment ladder were read off the slide images on 2026-08-15 and are now SOURCED, not supplied.*\n\n### The susceptible patient\n**Printed NINE TIMES on consecutive slides — the lecturer’s own emphasis, not nine facts.**\n- **Child 5 to 15 years.**\n- **Immunologic abnormality [HLA].**\n- **Endemic region · over-crowding.**\n- **Upper respiratory tract [throat – tonsils].**\n- **Group A streptococcal infection · rheumatogenic strain [M serotype].**\n- **Persistent infection [untreated].**\n\n### Presentation named on the deck\n- **Preceding pharyngitis – tonsillitis.**\n- **Acute illness: fever · body pains · pallor · rashes · raised ESR.**\n- **Polyarthritis · carditis · chorea · rash · subcutaneous nodules.**\n\n### The Jones criteria (Dr Duckett Jones) — the 1992 update, AHA and WHO\n\n|Major manifestations (5)|Minor manifestations (5)|\n|---|---|\n|**1 Carditis**|**1 Clinical findings**|\n|**2 Polyarthritis**|**2 Arthralgia**|\n|**3 Chorea**|**3 Fever**|\n|**4 Erythema marginatum**|**4 Laboratory findings** — **elevated acute-phase reactants, ESR, C-reactive protein**|\n|**5 Subcutaneous nodules**|**5 PROLONGED PR INTERVAL**|\n\n**2 major, or 1 major + 2 minor, PLUS evidence of a preceding group A streptococcal infection** *(the counting rule itself is not printed on the slide)*.\n\n*What the deck’s photographs show: the rash is ANNULAR with serpiginous ring margins on the trunk; the nodules are firm and painless over extensor surfaces and the spine; the carditis slide pairs an oedematous infant with cardiomegaly on CXR, an echo and an ECG.*\n\n### Proving the streptococcus\n- **Throat swab.**\n- **ASO test — a high anti-streptolysin O antibody titre.** Streptolysin O is the streptococcal antigen; the host makes anti-streptolysin O against it.\n- **The titre is a CURVE, not a value:** the deck plots it rising from the GAS infection at month 0 to a **peak near 800–900 units**, then falling back **over roughly 12 months** — so a single reading dates the infection only loosely, and a rising pair is worth more than a high one.\n\n### Recurrence, RHD and prophylaxis\n- **Recurrence follows a NEW group A streptococcal throat infection** — which is what secondary prophylaxis prevents.\n- **Valve lesions named: mitral regurgitation · mitral stenosis · aortic regurgitation · aortic stenosis.** *MR is the commonest acute lesion, MS the commonest late one (not in course material).*\n- **Diagnosis of RHD: history of rheumatic fever · a specific cardiac murmur · echocardiography.**\n\n|Severity|Secondary prophylaxis|\n|---|---|\n|**No RHD**|**10 years**|\n|**Mild RHD**|**to 40 years of age**|\n|**Moderate RHD**|**life-long, plus long-term medications**|\n|**Severe RHD**|**surgical valve repair or replacement**|\n\n### ⚠️ Treatment follows the STAGE, and each stage has its own duration\n\n|Stage|Treatment|Duration|\n|---|---|---|\n|**Streptococcal infection**|**oral antibiotic**|**10 days**|\n|**Rheumatic fever**|**anti-inflammatory**|**2–4 weeks**|\n|**Rheumatic heart disease**|**LONG-ACTING PENICILLIN**|**5–20 years**|\n\n- **Which anti-inflammatory** *(agents not in course material)*: **aspirin or NSAIDs for the arthritis · corticosteroids for severe carditis · bed rest**.\n- **Which long-acting penicillin** *(the interval is not in course material)*: **intramuscular benzathine penicillin G every 3 to 4 weeks**, oral penicillin V if injection is refused. The **5–20 year** span is the deck’s own, and the severity table above is how it is decided.\n\nSrc: L37 slides 7–37 (slides 23, 27 and 35 by visual read 2026-08-15); only the Jones counting rule, the named anti-inflammatory agents and the benzathine interval remain outside the course material",
        "qs": []
      }
    ]
  },
  "renal-uti": {
    "intro": "The commonest questions are about the sample and the imaging, not the antibiotic: what makes a culture worth acting on, and which child gets an ultrasound. Age decides treatment route. Know what a dipstick can and cannot settle.",
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
      }
    ]
  },
  "renal": {
    "intro": "Glomerular or not is the whole chapter — the discriminators are asked directly. APSGN carries a clock the examiner tests: the interval, the complement, and what not to do. HUS follows bloody diarrhoea. Nephrotic syndrome is asked as its triad and its complications.",
    "sections": [
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
      }
    ]
  },
  "renal-cakut": {
    "intro": "Antenatal hydronephrosis and the scarred kidney drive these questions: what to image and when. Reflux is asked through the damage it causes. Stones and enuresis are thinly covered by the decks and are answered here from general knowledge, tagged.",
    "sections": [
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
  },
  "resp-pneumonia": {
    "intro": "Age is the pathogen — that single table answers more questions than anything else here. Expect the WHO tachypnoea thresholds as numbers, the empiric antibiotic by age and severity, and the rule that community diagnosis is clinical and needs no film.",
    "sections": [
      {
        "id": "resp-1",
        "w": "must",
        "h": "Pneumonia — definition, and the four ways it is classified",
        "body": "### Definition\n- **Pneumonia:** inflammation of the lungs caused by **infectious organisms or physical or chemical irritants**.\n- **Full form:** acute inflammatory **consolidation of alveoli**, or **infiltration of the interstitial tissue** with inflammatory cells, **or both**.\n- **Pneumonitis:** set against pneumonia on the same slide and never defined — in use it is the **non-infectious, irritant or immune** end of the same spectrum *(distinction not in course material)*.\n\n**Scale:** leading cause of death in children worldwide · **1.4 million under-fives a year, more than AIDS, TB and malaria combined** · a child dies every 7 seconds · **only 30 % receive the antibiotics they need**.\n\n### The four classifications\n\n|Axis|Groups|\n|---|---|\n|**Clinical**|**Primary** (no underlying cause) · **Secondary** — pulmonary (bronchiectasis) or extrapulmonary (neurological disease, aspiration in cerebral palsy)|\n|**Combined clinical**|**CAP · HAP · VAP** — the most commonly used|\n|**Anatomical (radiological)**|**Lobar · segmental · bronchopneumonia (bilateral lobular) · interstitial**|\n|**Etiological**|**Infective · non-infective**|\n\n### Combined clinical — the one that picks the antibiotic\nIt **guides initial empiric treatment before the organism is known** and forces the risk factors to be identified.\n\n- **CAP:** pneumonia in someone **not recently hospitalised** — pneumococci, **H. influenzae**, viruses, atypicals.\n- **HAP (nosocomial):** **≥72 h after admission**, or **within 14 days of discharge** — MRSA, Pseudomonas, Enterobacter, Serratia.\n- **VAP:** a subset of nosocomial pneumonia, **after ≥48 h of intubation and mechanical ventilation**.\n\n*Two different clocks: 72 h from admission for HAP, 48 h from intubation for VAP.*\n\n### Etiological groups\n- **Infective:** viral · bacterial · **atypical (mycoplasma, chlamydia)** · mycotic · tuberculous · **parasitic — Loeffler pneumonia**.\n- **Non-infective:** immune-mediated · **aspiration (meconium, hydrocarbon, foreign body)** · **radiation pneumonitis**.\n\nSrc: L30 slides 3–19; L30p",
        "qs": []
      },
      {
        "id": "resp-2",
        "w": "high",
        "h": "How organisms get in, what stops them, and the four stages",
        "body": "### Three routes of entry\n- **Aspiration of oropharyngeal contents.**\n- **Inhalation of aerosolised particles.**\n- **Entry via the blood stream.**\n\n**Three determinants:** **inoculum size · virulence of the organism · host defences.**\n\n### Five things that weaken host defence\n- **Injury to the muco-ciliary apparatus.**\n- **Loss or suppression of the cough reflex.**\n- **Interference with phagocytic function of alveolar macrophages.**\n- **Pulmonary congestion and oedema.**\n- **Accumulation of secretions.**\n\n**Once in the alveolar space:** oedema fluid pours out, **polymorphs accumulate**, the organism multiplies in that fluid and **spreads alveolus to alveolus**.\n\n### Tissue response is organism-specific — and it is what the X-ray shows\n\n|Organism|Response|\n|---|---|\n|**Strep. pneumoniae · H. influenzae**|**Lobar consolidation, necrosis is rare**|\n|**Staphylococci · Gram-negative bacilli**|**Necrosis → cavitation → frank abscess**; a **peribronchial** distribution is characteristic but lobar consolidation may occur|\n|**Viruses**|**Interstitial inflammation, not air-space exudate** — usually **bilateral**, diffuse alveolar damage and interstitial oedema|\n|**Mycoplasma · Chlamydia · Legionella**|**The same interstitial pattern as viruses**|\n|**Mycobacteria · fungi**|**Slow granulomatous response**|\n\n### The four stages of bacterial pneumonia\n**The four stages:** **congestion → red hepatization → grey hepatization → resolution.** The physical signs follow them exactly (resp-5).\n\nSrc: L30 slides 20–33; L30p",
        "qs": []
      },
      {
        "id": "resp-3",
        "w": "must",
        "h": "Age is the pathogen — the single most examinable table here",
        "body": "**The rule:** **child age is a good predictor of the likely pathogen.** This grid is the reason the empiric antibiotic table in resp-7 is also arranged by age.\n\n|Age|Common pathogens|\n|---|---|\n|**0–48 hours**|**Group B streptococci**|\n|**2–14 days**|**E. coli, Klebsiella pneumoniae**, other Enterobacteriaceae, **Legionella**, **L. monocytogenes**, **Staph. aureus**, anaerobes, group B streptococci|\n|**2 weeks – 3 months**|Enterobacteriaceae, group B strep, **S. aureus**, **Staph. epidermidis**, **Candida albicans**, **Chlamydia trachomatis**, **B. pertussis**, H. influenzae, **Strep. pneumoniae**|\n|**3 months – 5 years**|**H. influenzae · Strep. pneumoniae**|\n|**5–10 years**|**Strep. pneumoniae**|\n|**10–21 years**|**Mycoplasma pneumoniae · Strep. pneumoniae · Chlamydia pneumoniae**|\n|**All ages**|**Consider Mycobacterium tuberculosis**|\n\n### The same fact stated the other way, in prose\n- **Neonate under 3 weeks:** infection is **vertical, from the mother during birth**. **Group B streptococci** and **Gram-negative enterococci and bacilli** are commonest.\n- **3 weeks – 3 months:** **most often bacterial**, and **Strep. pneumoniae is the commonest pathogen**.\n- **4 months – 5 years:** **viruses are the most frequent cause overall** in preschool children; **Strep. pneumoniae and H. influenzae** are the commonest **bacterial** ones.\n- **5 years – adolescence:** **pneumococci, mycoplasma and Chlamydophila pneumoniae**.\n- **In general:** **Strep. pneumoniae is the commonest bacterial cause of CAP after the neonatal period.** Less common: **H. influenzae type B, Moraxella catarrhalis, Staph. aureus**.\n\n**Viruses named:** **RSV** · parainfluenza 3 and 1 · influenza A and B · adenovirus · **SARS coronavirus** · avian flu H5N1 · swine flu H1N1.\n\nSrc: L30 slides 36–47; L30p",
        "qs": []
      },
      {
        "id": "resp-4",
        "w": "must",
        "h": "General signs, and the WHO tachypnoea thresholds",
        "body": "**General signs:** **tachypnoea**, fever, dyspnoea, **grunting**, cyanosis, **nasal flaring**, **chest indrawing**, tachycardia.\n\n### WHO age-specific criteria for tachypnoea\n\n|Age|Respiratory rate|\n|---|---|\n|**Under 2 months**|**> 60 / min**|\n|**2–12 months**|**> 50 / min**|\n|**12 months – 5 years**|**> 40 / min**|\n|**Over 5 years**|**> 30 / min**|\n\n### The strongest predictors of pneumonia\n**Fever and cyanosis — PLUS more than one sign of respiratory distress:**\n- **Tachypnoea.**\n- **Cough.**\n- **Nasal flaring.**\n- **Chest indrawing.**\n- **Rales.**\n- **Decreased breath sounds.**\n\n*Take-home message from the same lecture: tachypnoea and chest indrawing are the two most important signs for diagnosis.*\n\n### Atypical presentation — two traps stated explicitly\n- **Consider pneumonia in a child with NECK STIFFNESS** — upper-lobe pneumonia mimicking meningism.\n- **Consider pneumonia in a child with ACUTE ABDOMINAL PAIN** — lower-lobe pneumonia mimicking an abdomen.\n\nSrc: L30 slides 50–58, 111; L30p",
        "qs": []
      },
      {
        "id": "resp-5",
        "w": "high",
        "h": "Local signs by stage, and the three organism pictures",
        "body": "### Lobar pneumonia — the signs follow the pathological stage\n\n|Stage|Signs|\n|---|---|\n|**Congestion**|**Decreased air entry**, decreased vocal resonance and **TVF**, **fine crackling rales**|\n|**Hepatization**|**Decreased chest movement**, **INCREASED TVF and vocal resonance**, decreased air entry, **bronchial breathing**, **NO rales**, **dullness to percussion**|\n|**Resolution**|**Rales REAPPEAR**, bronchial breathing decreases, dullness decreases|\n\n*The discriminator is the rales: present, then absent, then present again. Increased TVF with no rales is the consolidated middle stage.*\n\n**Bronchopneumonia:** the main feature is **medium-sized consonating crepitations** with the general signs. **If confluent, signs of consolidation appear.**\n\n### Three organisms with a picture of their own\n\n**Staphylococcal pneumonia:** indistinguishable from pneumococcal at onset.\n- **Almost exclusively a disease of infants**, but can complicate influenza in older children.\n- **Tissue necrosis → cavitation, abscess formation and pyopneumothorax in rapid sequence.**\n\n**Viral pneumonia:** **preceded by a URTI**, gradual onset.\n- **Dry cough, low-grade or no fever**, dyspnoea, retractions.\n- **Examination is unrevealing** — there is no exudate — and **there may be wheezing**.\n\n**Mycoplasma pneumonia:** gradual onset, **non-productive paroxysmal cough that later turns productive**.\n- **Severity of symptoms exceeds the clinical findings** — the classic discriminator.\n- **Non-pulmonary features:** vomiting, diarrhoea, myalgia, arthritis, skin rash, **myocarditis**, **haemolytic anaemia**, **meningo-encephalitis**.\n- **Longer course than viral pneumonia**, and it occurs in **school-aged children**.\n\nSrc: L30 slides 52–56; L30p",
        "qs": []
      },
      {
        "id": "resp-6",
        "w": "high",
        "h": "Investigations — and the rule that in the community there are none",
        "body": "**In the community:** **there is no indication for ANY test in a child with pneumonia in the community.** Stated flatly on its own slide.\n\n### In hospital\n- **Commonly done:** chest X-ray, CBC, blood culture, serum electrolytes, viral studies, **CRP**, arterial blood gases, ESR.\n- **Pulse oximetry: in EVERY child admitted with pneumonia.**\n- **Acute phase reactants do NOT distinguish bacterial from viral infection in children and should not be measured routinely [grade A].**\n- **Urea and electrolytes** only if severely ill or dehydrated.\n\n### Chest X-ray\n\n|Pattern|Appearance|\n|---|---|\n|**Bacterial**|**Consolidation with an air bronchogram**|\n|**Viral**|**Hyperexpansion**, **parahilar and peribronchial infiltrate**, atelectasis, **hilar adenopathy**|\n\n**⚠️ The trap:** **the X-ray CANNOT reliably differentiate bacterial from viral pneumonia.** Both patterns are described and neither is diagnostic.\n\n**Follow-up X-ray:** not needed after simple consolidation or rapid recovery. **Repeat only for lobar collapse or atelectasis, at 4–6 weeks.** A child who does not recover clinically needs **ultrasound or X-ray to exclude a parapneumonic effusion**.\n\n### When to hunt for the organism in CAP\n**Four indications:** **severe symptoms · hospitalized patients · a complicated clinical course · a community outbreak.**\n\n|Target|Tests|\n|---|---|\n|**Bacterial**|**Blood culture · lung aspiration · pleural fluid** (culture, antigen detection, **CIE**, latex agglutination, **dot ELISA**) · **serology** — urine antigen, serum pneumococcal antigen and antibody|\n|**Mycoplasma**|**Complement fixation test — a rise in paired titre is the GOLD STANDARD** · IgM ELISA · **cold agglutinins**|\n|**Viral**|**Antigen detection in nasopharyngeal aspirate** · viral culture · **a rise in titre in paired sera**|\n\nSrc: L30 slides 59–92; L30p",
        "qs": []
      },
      {
        "id": "resp-7",
        "w": "must",
        "h": "Pneumonia treatment — who is admitted, and the empiric table",
        "body": "### Home or hospital\n- **Home:** for **mild** pneumonia. Families need advice on **managing pyrexia, preventing dehydration and spotting deterioration**, and the child is **reviewed by a GP if deteriorating, or if not improving after 48 hours**.\n\n**Admit:**\n- **All infants from birth to 3 weeks.**\n- **Infants 3 weeks – 3 months WITH FEVER.**\n- **Any child who appears toxic.**\n- **Signs of severe disease, or saturation < 92 %.**\n\n**General management: oxygen if saturation < 92 % · hydration and fluid therapy · fever and pain · monitoring.**\n\n### The five antimicrobial decisions\n**Decide:** **whether to treat at all · which antibiotic · which route · when to switch parenteral to oral · how long.**\n\n- **Early empiric therapy reduces mortality**; once the organism is identified, **narrow the spectrum**.\n- **Duration is 7–10 days**, longer in certain cases.\n- **No response? Think viruses, S. aureus, anaerobes or multi-resistant organisms.**\n\n### Empiric antibiotic for presumed BACTERIAL pneumonia\n\n|Age|Antibiotic|\n|---|---|\n|**Under 2 months**|**Ampicillin + ceftriaxone or cefotaxime** (oral **erythromycin** if chlamydia is suspected)|\n|**2 months – 5 years, mild**|**Oral amoxicillin**|\n|**2 months – 5 years, severe**|**Ceftriaxone or cefotaxime**; add **oxacillin or vancomycin** if Staph. aureus is suspected|\n|**5–21 years**|**Macrolides**, oral or intravenous by severity|\n\n**Atypical:** **Chlamydia pneumoniae → macrolides such as erythromycin.** **Mycoplasma → tetracyclines** if old enough and intolerant of macrolides *(the deck says \"old enough\" and gives no age — conventionally over 8 years, for tooth staining; not in course material)*.\n\n**Viral:** **influenza A → rimantadine or amantadine**; **influenza A or B → oseltamivir or zanamivir**; **beneficial only if started within 48 hours of onset**. **No known effective treatment** for SARS coronavirus, adenovirus, hantavirus or parainfluenza.\n\n**Oral vs IV:** IV achieves high blood and tissue concentration and **ensures eradication**; oral suits mild cases. **Switch therapy** shortens stay, saves drug and nursing cost, cuts hospital-related complications such as **phlebitis or falls**, and raises satisfaction.\n\nSrc: L30 slides 93–103; L30p",
        "qs": []
      },
      {
        "id": "resp-8",
        "w": "know",
        "h": "Prevention, the pneumonia that keeps coming back, and complications",
        "body": "### Prevention\n- **Stop smoking** — it limits lung damage **and** cigarette smoke interferes with the body’s natural defences against pneumonia.\n- **In the newborn:** test and treat pregnant women for **group B streptococci and Chlamydia trachomatis**; **suction the oropharynx** to prevent meconium aspiration.\n- **Vaccinate** against **pneumococci, H. influenzae and influenza**.\n\n**GAPP — the global action plan, three verbs:**\n- **Protect:** promote **breast feeding**, hand washing, **reduce indoor air pollution**.\n- **Prevent:** vaccination.\n- **Treat:** every sick child has access to the right care.\n\n### Recurrent or persistent pneumonia — the eight causes\n**The eight:** **gastro-oesophageal reflux disease · pulmonary congestion · cleft palate · tracheo-oesophageal fistula · immotile cilia · cystic fibrosis · sequestrated lobe · foreign body.**\n\n*Recurrence is an anatomical, aspiration or clearance problem until proved otherwise — the organism is rarely the answer.*\n\n### Complications\n**⚠️ Still unwell at 48 hours:** re-evaluate for a complication — **empyema or abscess**.\n\n- **Empyema.**\n- **Pericarditis.**\n- **Mediastinitis.**\n- **Haematogenous spread** → **meningitis, arthritis, peritonitis**.\n- **Sepsis.**\n\n### The four take-home messages, as printed\n**Take home:** **pneumonia is a leading cause of mortality in the developing world · tachypnoea and chest indrawing are the most important diagnostic signs · empiric CAP treatment is based on the patient’s age and symptoms · prevention is smoking cessation, better housing and immunization.**\n\nSrc: L30 slides 105–111; L30p",
        "qs": []
      }
    ]
  },
  "respiratory": {
    "intro": "Asthma is examined as control and as the acute attack. Expect the severity ladder graded on saturation and speech, the device that suits an age, and the add-on rule. Two of the decks disagree on the spacer age and the saturation cut-off; both readings are given.",
    "sections": [
      {
        "id": "resp-9",
        "w": "must",
        "h": "Asthma — two definitions, four elements, and what “variable” means",
        "body": "### The clinical definition (L31.1)\n**Asthma:** **a chronic inflammatory disease of the airways, with four features:**\n- **Episodic and/or chronic symptoms of airway obstruction** — cough, dyspnoea, chest tightness, wheeze.\n- **Bronchial hyper-responsiveness to triggers.**\n- **Evidence of at least PARTIAL REVERSIBILITY** of the airway obstruction.\n- **Alternative diagnoses are excluded.**\n\n**Four key elements:** **symptoms · airway obstruction · AHR · inflammation** — asthma is a changing mix of them.\n\n### The current definition (L31A)\n**Asthma:** **a heterogeneous disease of chronic airway inflammation**, defined by a **history of recurrent wheeze, cough, shortness of breath and chest tightness that VARY in intensity and over time**, together with **variable expiratory airflow limitation which is reversible**.\n\n- **Airflow limitation may become PERSISTENT later in the disease.**\n- **Airway hyper-responsiveness and inflammation are usually present but are NOT essential to the diagnosis.**\n\n### Unpacking the two loaded words\n- **Heterogeneous:** a **polygenic** disease with **multiple clinical phenotypes**, and a variable one.\n- **Variable:** over **time** (day and night, season), in **intensity**, and in **airflow limitation**.\n- **Expiratory airflow:** the flow pattern as measured by **spirometry and pulmonary function tests**.\n- **Associated with a trigger.**\n- **Atopic asthma is the commonest clinical type** — other allergies and a **family history of atopy** are usual.\n\n*Where the two lectures differ, they differ in emphasis, not in fact: L31.1 makes reversibility definitional, L31A makes it the confirmatory test.*\n\nSrc: L31.1 slides 3–5; L31A pp.1–2",
        "qs": []
      },
      {
        "id": "resp-10",
        "w": "know",
        "h": "Pathogenesis — the iceberg, the mediators, and the TH2 switch",
        "body": "### The chain, and it runs one way\n**One way only:** **airway inflammation → hyper-responsiveness (responses to triggers) → obstruction, usually fully reversible → symptoms (cough, wheeze, dyspnoea).**\n\n**⚠️ The point:** **symptoms are the easiest thing to appreciate and are NOT the fundamental aspect of asthma.** Inflammation is.\n\n**The iceberg:** what is visible above the water is **symptoms**; below it, in order, **airflow obstruction → bronchial hyper-responsiveness → airway inflammation**.\n\n### Immunology\n**Asthma is a TH2-mediated immune response — a skewing away from the normal TH1-mediated response.**\n\n### Cell-derived mediators\n- **Mast cells and eosinophils** are the two named cell sources.\n- **Mediators released:** **histamine · leukotrienes · prostaglandins · PAF · kinins · nitric oxide · growth factors**.\n- **Enzymes:** **ECP, MBP, protein X.**\n- **Cytokines:** **IL-4, IL-5, IL-6, IL-12.**\n- **Many other cells contribute:** macrophages, basophils, neutrophils, **T lymphocytes**, platelets, endothelial and epithelial cells, smooth muscle, fibroblasts, **nerves**.\n\n*Two of these mediators are drug targets written later: leukotrienes (LTRA, resp-16) and nitric oxide (FeNO, resp-15).*\n\nSrc: L31.1 slides 6–8; L31A p.3",
        "qs": []
      },
      {
        "id": "resp-11",
        "w": "know",
        "h": "Who gets it, and the six triggers",
        "body": "**Aetiology:** **asthma is a complex POLYGENIC disorder involving multiple environmental and genetic factors in varying degrees in different individuals.**\n\n### Risk factors, two classes\n- **Host factors:** **genetic predisposition** and **atopy**.\n- **Environmental factors:** they **influence susceptibility** in a predisposed individual, **precipitate exacerbations**, and **make symptoms persist**.\n\n### The six triggering factors, as numbered on the slide\n- **1 — Viral upper respiratory tract infections.**\n- **2 — Exposure to tobacco smoke.**\n- **3 — Food allergy.**\n- **4 — Pets, mites, moulds.**\n- **5 — Cold air, exercise.**\n- **6 — Psychological factors.**\n\n### Tobacco smoke — two separate evidence statements\n- **In pre-school children:** environmental tobacco smoke is associated with **asthma DEVELOPMENT**.\n- **In school-aged children, older children and adults:** it is associated with **EXACERBATIONS**.\n\n*The distinction is deliberate — the same exposure causes the disease in one age group and attacks in another.*\n\n### Epidemiology\n- **Prevalence 5–15 %**; **asthma is the commonest chronic respiratory disease worldwide**.\n- **In Egypt: school age 6.5–20 %, adults 4.4–6.7 %.** **WHO 2022: 9 % of children and 11 % of adolescents.**\n- **Sex: male:female 2:1 before puberty, 1:1 thereafter.**\n- **Onset at any age — 30 % by 1 year, 80–90 % by 5 years.**\n- **One third to one half** of those affected have symptoms that regularly interfere with daily life — waking from sleep, morning cough, **effort intolerance, absence from school**.\n- **Affects all community groups, both genders and all socioeconomic classes.**\n\nSrc: L31.1 slides 9–20; L31A pp.1–2",
        "qs": []
      },
      {
        "id": "resp-12",
        "w": "must",
        "h": "Not every wheezing infant is asthmatic — the three patterns",
        "body": "**Start here:** **approximately HALF of all children wheeze at some time during the first 3 years of life. They are not all asthmatics.** Three patterns are recognised: **viral episodic wheeze · multiple trigger wheeze · asthma.**\n\n|Feature|Viral episodic wheeze|Multiple trigger wheeze|\n|---|---|---|\n|**Trigger**|**Viral infection ONLY**|**Viral infection PLUS cold air, dust, exercise, food**|\n|**Interval symptoms**|**None**|**Present**|\n|**Aetiology**|**Small airway calibre at birth**|**Genetic predisposition, atopy, environmental exposure**|\n|**Risk factors**|**Maternal smoking during and/or after pregnancy · prematurity**|**Positive family history of allergy · other atopic diseases present**|\n|**Prognosis**|**Usually resolves by 5 years**|**May continue to asthma**|\n|**Preventer therapy**|**NO benefit**|**May benefit**|\n\n*The whole table turns on one question — are there symptoms BETWEEN the colds? No interval symptoms means no preventer.*\n\n### The full differential of recurrent or persistent childhood wheeze\n- **Viral episodic wheeze / multiple trigger wheeze.**\n- **Asthma.**\n- **Recurrent anaphylaxis** — e.g. in food allergy.\n- **Chronic aspiration.**\n- **Cystic fibrosis.**\n- **Bronchopulmonary dysplasia.**\n- **Tracheo-bronchomalacia.**\n- **Foreign body aspiration.**\n\nSrc: L31.1 slides 17–19; L31A p.3",
        "qs": []
      },
      {
        "id": "resp-13",
        "w": "must",
        "h": "The clinical picture, and the signs of an attack that is failing",
        "body": "### Onset and course\n- **Acute episode** — cold air, allergen, smoke, paint.\n- **Insidious** — viral respiratory tract infections.\n- **Course:** **variability, unpredictability, recurrence, remission and triggers.**\n\n### Symptoms\n- **Cough — tight and non-productive early.**\n- **Wheeze — MAY BE ABSENT.**\n- **Dyspnoea and chest tightness.**\n- **Others:** URTI, mild fever, vomiting, **abdominal pain**.\n- **Typically:** vary over time and in intensity · **worse at night or on waking** · triggered by exercise, laughter, allergens, cold air · **worsen AFTER end-exercise, which is very distinctive** · appear or worsen with viral infection.\n\n### Signs — and they may be entirely normal between attacks\n- **Inspection:** **hyperinflation** in long-standing asthma; **Harrison sulci** where onset was in early childhood and left untreated; **respiratory distress** — difficult breathing, **audible wheeze with prolonged expiration**, accessory muscle use; tachypnoea and tachycardia.\n- **Palpation:** **decreased chest expansion.**\n- **Percussion:** **hyper-resonant note.**\n- **Auscultation:** **vesicular or harsh vesicular breathing with prolonged expiration**; **decreased breath sounds bilaterally**; **wheeze is the cardinal sign — polyphonic, musical, bilateral, expiratory or inspiratory or both, and may be absent** ± rales.\n- **Evidence of atopy:** nasal, skin, eye — **atopic dermatitis, allergic rhinitis**.\n- **Growth assessment: usually normal.**\n\n### Severe cases — the signs that mean it is failing\n- **Difficulty feeding, talking or walking**; may assume a **hunched-over, tripod-like sitting position**.\n- **⚠️ Vigorous respiration with a SILENT CHEST** — marked decrease of breath sounds with **absent wheezes**.\n- **Cyanosis, drowsiness, confusion.**\n- **Respiratory arrest.**\n\n*A silent chest is not improvement. Wheeze needs airflow to exist.*\n\nSrc: L31.1 slides 22–24; L31A pp.2–3",
        "qs": []
      },
      {
        "id": "resp-14",
        "w": "high",
        "h": "Phenotypes, red flags, and telling asthma from what it is not",
        "body": "### Clinical asthma phenotypes\n\n|Phenotype|Marks|\n|---|---|\n|**Allergic**|**Commonest and most easily recognised**; starts in childhood, past or family history of eczema, allergic rhinitis, food or drug allergy; **responds well to ICS**; **eosinophilic** cell profile|\n|**Non-allergic**|**Less response to ICS**; sputum may be **neutrophilic, eosinophilic or paucigranulocytic**|\n|**Cough variant / cough predominant**|**Cough may be the ONLY symptom** and airflow limitation may be absent; **responds well to ICS**; some later develop wheeze and bronchodilator responsiveness|\n|**With persistent airflow limitation**|Longstanding poorly controlled asthma → **irreversible limitation, thought to be airway wall REMODELLING**|\n|**With obesity**|**A different pattern of airway inflammation**|\n|**Adult-onset (late-onset)**|First presentation in adulthood; **tends to be non-allergic**, often needs **higher ICS doses**|\n\n### Red flags — these are not asthma\n- **Chronic wet productive cough · finger clubbing · growth faltering · chronic diarrhoea** → a **chronic infection** picture: **cystic fibrosis, immunodeficiency or PCD**.\n- **Chest pain** → **pulmonary embolism**.\n- **Cardiac murmur with failure to thrive** → **congenital heart disease or heart failure**.\n\n### Asthma MORE likely — cough, wheeze or difficult breathing PLUS\n**Plus any of:** **symptoms recur frequently · symptoms at night or early morning · triggered by exercise or emotion · history of allergies (AR, AD) · family history of allergy or asthma · widespread wheeze on auscultation · therapeutic response · abnormal lung function.**\n\n### Asthma LESS likely — any one of\n**Any one of:** **symptoms only with a cold · moist cough with sputum · finger clubbing or poor growth · NORMAL SPIROMETRY WHILE SYMPTOMATIC · no response to asthma treatment · clinical features suggesting an alternative diagnosis.**\n\n### The acutely noisy child — wheeze is not stridor *(this grid not in course material)*\n\n|Entity|Age|Noise|Marks|\n|---|---|---|---|\n|**Bronchiolitis**|**Under 12–24 months**|**Expiratory wheeze + crackles**|Coryza first, seasonal, **first episode**|\n|**Asthma**|**Usually over 1 year**|**Expiratory polyphonic wheeze**|**Recurrent**, interval symptoms, reversible|\n|**Croup**|**6 months – 3 years**|**INSPIRATORY stridor, barking cough, hoarse**|Viral, worse at night, **responds to steroids**|\n|**Epiglottitis**|**2–6 years**|**Stridor, muffled voice, drooling**|**Hib**, toxic, **thumbprint sign — secure the airway first**|\n\n*Epiglottitis is taught in full in the `infection` chapter’s bacterial-infection deck; only the discriminating row is carried here.*\n\nSrc: L31.1 slides 25–27; L31A pp.3–4; epiglottitis row from `specific bacterial infection`, cited only",
        "qs": []
      },
      {
        "id": "resp-15",
        "w": "must",
        "h": "Diagnosis — mainly clinical, and the numbers that confirm it",
        "body": "**Chevalier Jackson:** *“All that wheezes is not asthma, and not all asthma wheezes.”*\n\n- **There is NO reliable diagnostic test. Diagnosis is mainly CLINICAL** — history, examination, few tests, or a trial of therapy.\n- **Four pillars: history · physical examination · investigations · therapeutic trial.**\n\n### Under 6 years — ALL THREE criteria must be met\n- **1 — Recurrent acute wheezing episodes:** **at least TWO reported acute wheezing episodes in the past 12 months**, OR **one episode PLUS asthma-like symptoms between episodes** (dry cough, cough in sleep, after laughing, crying or activity).\n- **2 — No likely alternative cause**, except a concurrent viral respiratory infection.\n- **3 — A timely clinical response to asthma treatment.**\n\n**An acute wheezing episode is defined as** wheeze on expiration, accessory muscle use, breathlessness or difficult fast breathing that the **caregiver reports lasted more than 24 hours**, or that **a healthcare worker confirmed as wheeze**.\n\n### Over 6 years — confirm variable expiratory airflow\n- **PEFR by peak flow meter:** fully inhale, mouthpiece between the teeth, **seal with the lips**, one **sharp fast exhalation**. **Poor control shows increased variability — diurnal (morning lower than evening) and day-to-day.**\n- **Spirometry:** blow **as hard and fast as possible for as long as possible**. Measures **FEV1** and **FVC**.\n- **⚠️ The obstructive pattern: LOW FEV1 with a NORMAL FVC → FEV1/FVC ratio < 80 %.**\n- **In mild to moderate asthma, spirometry may be entirely NORMAL when well.**\n- **Reversibility: an improvement of ≥20 % in PEFR or ≥12 % in FEV1 after a bronchodilator is DIAGNOSTIC of asthma.**\n- **Increase in lung function after 4 weeks of ICS-containing treatment.**\n- **A positive bronchial provocation test.**\n\n### The other investigations, and when they are worth doing\n- **Usually NOT needed in children** — good history and examination decide it.\n- **Pulmonary function tests are difficult to perform under 5 years.**\n- **Chest X-ray:** usually normal, may show **hyperinflation**. **Only** to exclude another cause of a wheezy chest, or for signs of severe infection or **asymmetry of chest signs — pneumothorax or collapse**.\n- **Allergy testing: skin prick tests** to identify triggering allergens.\n- **FeNO — fractional exhaled nitric oxide** is a marker of airway inflammation, **elevated in untreated asthma**.\n- **Blood gases: only in life-threatening or refractory cases.**\n\nSrc: L31.1 slides 28–39; L31A pp.4–5",
        "qs": []
      },
      {
        "id": "resp-16",
        "w": "must",
        "h": "The drugs — relievers, controllers, and the add-on rule",
        "body": "### Relievers / rescue — taken ONLY during an acute exacerbation\nThey act quickly to relieve bronchoconstriction and its symptoms.\n- **Rapid-acting inhaled β2-agonists — THE MOST POTENT BRONCHODILATORS.**\n- **Systemic glucocorticosteroids — THE MOST POTENT ANTI-INFLAMMATORY.**\n- **Inhaled anticholinergics.**\n\n|Feature|SABA — salbutamol|LABA — salmeterol, formoterol|\n|---|---|---|\n|**Onset**|**Rapid, 5–10 min** (L31.2 says **10–15 min**)|**Variable**|\n|**Duration**|**2–4 hours**|**Up to 12 hours**|\n|**Acute attack**|**Yes — rescue therapy**|**NOT used in an acute attack**|\n|**Alone?**|**Can be used alone in intermittent asthma**|**MUST be combined with ICS — never alone**|\n|**Trigger to escalate**|**Used > 2 / week → start controller treatment**|—|\n\n**Ipratropium bromide:** an anticholinergic, **by nebulizer only**; used **in young infants when SABA are not effective**, and **added to SABA in severe acute asthma**. **Add-on, never alone.**\n\n### Controllers / preventers — daily, long term, to achieve and maintain control\n- **Inhaled glucocorticosteroids — the GOLD STANDARD**, and the standard treatment of asthma at all ages.\n- **Systemic glucocorticosteroids — the most potent.**\n- **Methylxanthines**, slow release.\n- **Long-acting inhaled β2-agonists.**\n- **Leukotriene receptor antagonists.**\n- **Anti-IgE monoclonal antibody — omalizumab.**\n- **Anti-IL5 monoclonal antibody — mepolizumab.**\n\n**ICS in detail:** the **most effective inhaled prophylactic**. It **decreases airway inflammation, bronchial hyper-reactivity, symptoms and acute exacerbations**, with **no significant side effects at low dose**. **High dose for long duration** risks **impaired growth, adrenal suppression and altered bone metabolism** — so **always the lowest possible dose**.\n\n### Add-on therapy — the age rule\n- **Over 5 years → LABA.**\n- **Under 5 years → LTRA (oral montelukast)**, especially where **asthma and allergic rhinitis coexist**.\n- **Over 5 years, not controlled on ICS + LABA → add LTRA.**\n- **⚠️ Try add-on therapy so that you do NOT increase the dose of ICS.**\n\n**Of no value: antibiotics** in the absence of bacterial infection, **cough medicines and decongestants**. **Antihistamines** are useful only for combined allergic rhinitis.\n\nSrc: L31.2 slides 9–15; L31A pp.6–8",
        "qs": []
      },
      {
        "id": "resp-17",
        "w": "high",
        "h": "Devices — why inhalation wins, and which device at which age",
        "body": "### Why the inhaled route\n- **Site specific** — high concentration delivered directly to the airway.\n- **Permits a very small dose.**\n- **Systemic side effects reduced to a minimum.**\n- **Rapid and predictable relief** with a SABA.\n- **Some drugs — ipratropium — can ONLY be given by inhalation**, being unabsorbed orally.\n- **Drawback: the patient** — improper technique, or refusal for fear of addiction.\n\n### The devices, and what each costs\n\n|Device|Suits|Wins|Loses|\n|---|---|---|---|\n|**MDI alone**|**Adolescents — needs cooperation**|Portable, easy; **deep slow inspiration then breath hold** raises lung deposition and cuts oropharyngeal deposition|**Less useful in an acute attack** — needs a deep breath; limited drugs|\n|**MDI + spacer**|**ALL ages — no cooperation or effort needed**|**Needs only tidal breathing**; **useful in acute attacks** when inspiratory effort is poor|Large; limited drugs; **spacers lose efficacy with time and need replacement**|\n|**Dry powder inhaler**|**≥ 6 years — needs effort**|Easy, portable, raises lung deposition|**Needs high flow**; **not useful in exacerbation**; **clumps with time → more oropharyngeal deposition**|\n|**Breath-actuated MDI**|**> 6 years**|No hand–breath coordination needed|Effort dependent|\n|**Nebulizer**|**Any age**|**Easy, no cooperation, wide drug range, can deliver O₂ in the session — used in acute asthma where oxygen is needed as well**|**Least efficient**; **largest oropharyngeal deposition**; very long sessions; needs electricity and pressurised air|\n\n### Choice of device by age\n\n|Age|Preferred|Alternate|\n|---|---|---|\n|**< 4 years**|**MDI + spacer with FACE MASK**|**Nebulizer with face mask**|\n|**4–6 years**|**MDI + spacer with MOUTHPIECE**|**Nebulizer**|\n|**> 6 years**|**DPI, breath-actuated MDI, or MDI with spacer**|**Nebulizer**|\n\n*Chosen on efficacy of drug delivery, cost effectiveness, safety and convenience.*\n\n*Defect note: L31A gives the spacer thresholds as face mask <3 y and mouthpiece ≥3 y, against L31.2’s <4 y and 4–6 y. Both printed, neither corrected.*\n\nSrc: L31.2 slides 16–19; L31A pp.6–7",
        "qs": []
      },
      {
        "id": "resp-18",
        "w": "high",
        "h": "Long-term management — the six parts, and what control means",
        "body": "### Asthma management has six interrelated parts\n- **1 — Educate the patient into a partnership** (health education).\n- **2 — Assess and monitor severity** by symptom report **and, as far as possible, lung function measurement**.\n- **3 — Avoid exposure to risk factors.**\n- **4 — An individual medication plan for long-term management.**\n- **5 — An individual plan for managing exacerbations.**\n- **6 — Regular follow-up care.**\n\n### The goals of successful management\n- **Symptoms:** **none by day and none by night** — minimal, ideally zero.\n- **Exacerbations:** **none in the previous 6 months.**\n- **Reliever:** **minimal SABA use, ≤ 2 per week.**\n- **Activity:** **normal levels, including exercise.**\n- **Lung function:** **as close to normal as possible.**\n- **Drugs:** **no adverse effects from asthma medication.**\n- **Long term:** **prevent irreversible airflow limitation · prevent asthma mortality.**\n- **Family:** **satisfy patient and family expectations.**\n\n**Complete control — six ticks:** no daytime symptoms · no night-time symptoms · **no limit on activities including exercise** · **no reliever use** · normal lung function · **no exacerbation needing hospitalization or oral steroids in the previous 6 months**.\n\n### Environmental control\n- **Reduce tobacco and other smoke exposure** — **second-hand cigarette smoke or e-cigarette vapour is the most devastating exposure to the airway**.\n- **Dust mites:** encase pillows and mattress; **mite-impermeable bedding may reduce exacerbations requiring hospitalization**.\n- **Pets:** remove from the home, or at least the bedroom.\n- **Cockroaches:** remove food and garbage. **Moulds:** reduce indoor humidity.\n- **Reduce airborne irritants — fumes.**\n- **Allergen immunotherapy is effective for atopic asthma due to a SINGLE allergen.**\n\n### Stepping up and down\n\n|Level of control|Action|\n|---|---|\n|**Controlled**|**Maintain, and find the LOWEST controlling step**|\n|**Partly controlled**|**Consider stepping UP to gain control**|\n|**Uncontrolled**|**Step up until controlled**|\n|**Exacerbation**|**Treat as an exacerbation**|\n\n**Five treatment steps** *(their drug content is printed as an image in both decks; conventionally step 1 as-needed reliever, 2 low-dose ICS, 3 low-dose ICS + LABA, 4 medium or high-dose ICS + LABA, 5 add a biologic or oral steroid — not in course material)*.\n\n**MART therapy:** a **single combined ICS + LABA inhaler used as BOTH maintenance and reliever**, in a small regular dose. **Increase the frequency up to 4 times if symptoms increase.** **Not for small children**; improves compliance and efficacy.\n\n### Risk factors for exacerbation\n**Nine of them:** **poor symptom control · ≥1 exacerbation in the previous year · SABA-only treatment without any ICS · over-use of SABA · incorrect inhaler technique · socioeconomic problems and poor adherence · smoking · low FEV1 · blood eosinophilia.**\n\n**Patient education covers:** what asthma is · regular or as-required medication · **inhaler technique** · the doses · **an asthma action plan** · what to avoid · how to monitor outcome · **when to start rescue medication and when to seek help**.\n\nSrc: L31.2 slides 3–8, 30–31; L31A pp.8–9",
        "qs": []
      },
      {
        "id": "resp-19",
        "w": "must",
        "h": "The acute attack — grading it, admitting it, and treating it",
        "body": "**Exacerbation:** **an acute or sub-acute worsening in symptoms and lung function from the patient’s usual status.** **A patient may present for the FIRST time during an exacerbation.**\n\n**Where each severity is treated: mild at home · moderate and severe in hospital · life-threatening in the PICU.**\n\n### Moderate vs severe (L31.2)\n\n|Feature|Moderate|Severe|\n|---|---|---|\n|**Speech**|**Able to talk**|**Too breathless to talk**|\n|**SpO₂**|**> 92 %**|**< 92 %**|\n|**RR 2–5 y**|**≤ 40 / min**|**> 40 / min**|\n|**RR 5–12 y**|**≤ 30 / min**|**> 30 / min**|\n|**RR 12–18 y**|**≤ 25 / min**|**> 25 / min**|\n|**HR 2–5 y**|**≤ 140 / min**|**> 140 / min**|\n|**HR 5–12 y**|**≤ 125 / min**|**> 125 / min**|\n|**HR 12–18 y**|**≤ 110 / min**|**> 110 / min**|\n|**Chest recession**|**Some intercostal recession**|**Use of accessory neck muscles**|\n\n**⚠️ Tachycardia:** a better guide to severity than respiratory rate — **but it is affected by β2-agonists**.\n\n**Life-threatening: silent chest · cyanosis · poor respiratory effort · exhaustion · arrhythmia and hypotension · altered consciousness · agitation and confusion · PEFR < 33 % of best · SpO₂ < 92 % at ALL ages.**\n\n### The same grading by age (L31A)\n\n|Feature|< 6 y mild/moderate|< 6 y severe|≥ 6 y mild/moderate|≥ 6 y severe|\n|---|---|---|---|---|\n|**Consciousness**|**Conscious**|**Agitated, confused or drowsy**|Same|Same|\n|**Speech**|**Sentences, normal cry**|**Words, or unable to speak**|Same|Same|\n|**SpO₂**|**≥ 92 %**|**< 92 %**|**≥ 90 %**|**< 90 %**|\n|**Heart rate**|**≤ 180 (0–3 y), ≤ 150 (4–5 y)**|**> 180 / > 150**|**< 120**|**> 120**|\n|**Respiratory rate**|**≤ 40**|**> 40**|**≤ 30**|**> 30**|\n|**Wheeze**|—|**A SILENT CHEST indicates severe or life-threatening disease**|—|Same|\n\n*Defect note: L31.2 uses < 92 % at every age; L31A uses < 90 % at 6 years and over. Both printed, neither corrected.*\n\n### Admit if, after high-dose inhaled bronchodilator, the child\n**Admit if:** **persistent breathlessness or tachypnoea · becoming exhausted · PEFR or FEV1 < 50 % of predicted or usual best · SpO₂ < 92 % in air.**\n\n### Treatment\n- **Oxygen if SpO₂ < 92 %**, targeting **94–98 %**.\n- **SABA to all children by MDI and spacer** — except a severe attack, where **nebulizer driven by high-flow oxygen** is used.\n- **A short course of oral steroid for 3–5 days should be given.**\n- **Add nebulized magnesium or nebulized ipratropium INITIALLY in a severe attack.**\n- **IV treatment is given in the ICU.**\n\n**Moderate attack:** SABA via spacer **2–4 puffs, increasing by 2 puffs every 2 minutes to 10 puffs** if needed · **oral prednisolone 1–2 mg/kg** · **monitor response for 15–30 minutes**.\n\n**Severe attack:** **high-flow oxygen** · SABA via spacer **10 puffs or nebulized salbutamol**, reassess and repeat · **oral prednisolone or IV hydrocortisone** · consider **inhaled ipratropium, IV β2-agonist or aminophylline, or nebulized magnesium**.\n\n**Life-threatening:** as for severe, but **nebulized ipratropium is given rather than considered**, response is assessed **continuously**, and **the PICU is involved**.\n\n**Shared aftercare — printed three times:** if responding, **continue bronchodilators every 1–4 hours as needed** · **discharge when stable on 4-hourly treatment** · **continue oral prednisolone for 3–7 days** · **arrange follow-up**.\n\n**Not responding:** **transfer to PICU** · consider the IV therapies not yet used (**magnesium, aminophylline, β2-agonist**) · **chest X-ray for pneumothorax or infection** · **blood gases** · **mechanical ventilation may be needed**.\n\n**Doses, as printed:**\n- **Nebulized salbutamol:** **2.5 mg — 0.5 ml of 0.5 % solution — in 3 ml normal saline.**\n- **± nebulized ipratropium:** **every 20 minutes for the first hour.**\n- **Oral prednisolone:** **1–2 mg/kg**, **max 20 mg under 2 y, 30 mg at 2–6 y.**\n- **IV steroid equivalents:** **dexamethasone 0.15–0.2 mg/kg · hydrocortisone 5–10 mg/kg · methylprednisolone 1–2 mg/kg.**\n- **IV magnesium sulfate:** **40–50 mg/kg infused over 1 hour.**\n\n**The emergency-department algorithm:** assess (history, examination, **PEF or FEV1**) → **bronchodilators, oxygen if needed** → **good response: observe at least 1 hour, discharge if stable** → **incomplete or poor response: ADD SYSTEMIC GLUCOCORTICOSTEROIDS** → good response discharge, **poor response admit** → **respiratory failure: admit to ICU**.\n\nSrc: L31.2 slides 32–46; L31A pp.9–10",
        "qs": []
      }
    ]
  },
  "resp-bronch": {
    "intro": "A wheezing infant with RSV, and the question is almost always what NOT to give — bronchodilators, steroids and antibiotics all appear as distractors. Know the admission thresholds and the two definitions that disagree on the upper age.",
    "sections": [
      {
        "id": "resp-20",
        "w": "must",
        "h": "Bronchiolitis — two definitions that disagree on the age, and RSV",
        "body": "**Bronchiolitis:** an **acute viral respiratory infection involving the terminal and respiratory bronchioli in infants**, producing **small airways obstruction**.\n\n**⚠️ The split:** the European and American guideline definitions differ, and **the difference is the age**.\n- **European:** a **seasonal viral illness in infants under 12 MONTHS**, with **nasal discharge, cough, tachypnoea, retractions and BILATERAL CRACKLES**.\n- **American Academy of Pediatrics:** a disorder in infants **under 24 MONTHS**, most commonly from a **viral lower respiratory tract infection**, characterised by **WHEEZING**.\n\n*The two definitions also pick different cardinal signs — crackles in Europe, wheeze in North America.*\n\n### Aetiology\n- **RSV — 62 %.**\n- **The remaining 38 %:** **human bocavirus · rhinovirus · human metapneumovirus · influenza A and B · parainfluenza 1–3**.\n\n### RSV — structure and why it matters\n- **Single-stranded RNA genome, 10 genes encoding 11 proteins.**\n- **G protein: attachment** to the mucosal epithelium of nose or eyes.\n- **F protein: FUSION** with epithelial cell membranes — **entry into the host cell**, and **fusion with adjacent cells to form syncytia**.\n- **Variation in the G glycoprotein** gives **two major subtypes, groups A and B**, with **12 genotypes of RSV-A and 20 of RSV-B**.\n\n*The F protein is the drug target — every prophylactic in resp-22 is aimed at it.*\n\n### The global burden\n- **RSV is the leading cause of severe respiratory infection.** **22 % of all LRTI is RSV**, **33.8 million cases worldwide**.\n- **Leading cause of paediatric hospitalization — 3.6 million**; **39 % under 6 months**, 61 % from 6 months to 5 years.\n- **Mortality: 46 % under 6 months**, 54 % from 6 months to 5 years. **Over 99 % of deaths are in low-income countries.**\n- **Mortality is 30× higher in HIV infection, 13× in VLBW infants under 1,500 g** compared with over 2,500 g, and **4.3× in primary immunodeficiency**.\n\n**RSV causes three grades of illness: upper respiratory tract infection · lower respiratory tract infection (5 %) · severe illness — bronchiolitis and pneumonia.**\n\nSrc: L32 pp.1–3",
        "qs": []
      },
      {
        "id": "resp-21",
        "w": "must",
        "h": "Who gets it badly, how it obstructs, and the shape of the illness",
        "body": "### Transmission and timing\n- **By droplets, large particles and fomites** — **directly** by contact with infectious secretions, **indirectly** from the environment.\n- **RSV survives 6–12 hours or more on hard, non-porous surfaces.** **Nosocomial infection remains a major problem.**\n- **Incubation 2–8 days.** **Viral shedding: 1–2 days in adults, an average of 9 days in infants, up to 4 weeks in critically ill infants.**\n\n### Risk factors for SEVERE bronchiolitis\n- **Core four: age under 3 months · male sex · low socioeconomic conditions · RSV infection.**\n- **Also: maternal smoking · prematurity with BPD · cardiovascular disease · immunodeficiency · chronic respiratory disease.**\n- **⚠️ The only known PROTECTIVE factor is maternal breastfeeding.**\n\n**The eleven-item high-risk list:**\n- **Prematurity:** **born under 35 weeks’ gestation.**\n- **Age:** **under 3 months at presentation.**\n- **Intake:** **under 50 % of usual fluid intake in the preceding 24 hours.**\n- **Cardiac:** **haemodynamically significant cardiac disease.**\n- **Lung:** **chronic lung disease · BPD.**\n- **Other disease:** **neuromuscular disorder · Down syndrome · immunodeficiency.**\n- **Environmental:** **tobacco smoke or air pollution.**\n- **Social:** distance from hospital, poor circumstances, **parents unable to spot red-flag symptoms**.\n\n### Pathogenesis, in three steps\n- **RSV replicates in and DESTROYS the ciliated epithelial cells lining the airways.**\n- **Either complete obstruction → ATELECTASIS, or a ball-valve effect → alveolar OVERINFLATION.**\n- **Both give V/Q mismatch → hypoxaemia.**\n\n### Diagnosis and the course\n- **Bronchiolitis is diagnosed on CLINICAL GROUNDS ALONE.**\n- **In an infant under 12 months exposed to a child or adult with a respiratory viral infection:** coryza, then signs of lower respiratory infection — **respiratory distress, low SpO₂, rales, and only rarely wheeze in severe cases**.\n- **Timeline: incubation 1–5 days → coryza for 3 days → LRTI symptoms.** **Fever can be present during the coryza and absent once the LRTI starts.**\n- **⚠️ Reduced intake, dehydration and severe respiratory symptoms PEAK 3–5 DAYS after the onset of rhinitis** — the child brought in on day 1 has not yet peaked.\n- **Chest radiographs and blood tests only if clinically indicated.** **ABG only in more severe cases.**\n- **Rapid virus detection** reduces antibiotic use and **matters for cohorting**.\n\nSrc: L32 pp.2–5",
        "qs": []
      },
      {
        "id": "resp-22",
        "w": "must",
        "h": "Bronchiolitis management — mostly supportive, and the drugs that do nothing",
        "body": "### Indications for hospital admission\n**Nine of them:** **respiratory distress · apnoea · tachypnoea · oxygen requirement · poor feeding · dehydration · a requirement for continuous clinical airway clearance · underlying chronic disease · inappropriate social and family conditions.**\n\n**PICU admission: failure to maintain SpO₂ > 92 % ON oxygen therapy · deteriorating respiratory status with exhaustion · recurrent apnoea.**\n\n**CPAP and PICU: severe respiratory distress · need for an FiO₂ > 0.5 · the presence of apnoea.**\n\n### Mild disease\n- **Support breastfeeding in small frequent feeds.**\n- **Clean the upper airways with saline** — an important first step in initial management.\n\n### Severe disease\n- **In severe bronchiolitis, NG feeding or IV hydration to prevent dehydration is limited to no more than 80 % of the daily requirement.**\n- **Oxygen only when SpO₂ in room air is < 92 % in the absence of respiratory distress.** **Pre-warmed and humidified**, by **low-flow nasal cannula or head box**.\n- **HHHFNC — heated humidified high-flow nasal cannula:** reduces the **work of breathing**, prevents **dynamic airway collapse** and improves gas exchange by delivering warmed humidified oxygen at a known FiO₂ and a **flow a little above the infant’s peak inspiratory flow, usually 1–2 L/kg body weight**.\n- **⚠️ HHHFNC does NOT shorten the course of the disease** — it reduces the need for intensive care and mechanical ventilation.\n\n### The drugs with no role\n**No role:** **nebulized hypertonic saline 3 % · nebulized ipratropium (Atrovent) · nebulized ICS or systemic steroids · nebulized DNase · antibiotics except for secondary bacterial infection — NONE has a role.**\n\n**The one exception: nebulized salbutamol or adrenaline may be tried, and CONTINUED ONLY IF THERE IS A GOOD RESPONSE.**\n\n### Discharge criteria — three, and they are specific\n- **SpO₂ stable at 94 % in room air with no respiratory distress for 4 hours, INCLUDING during sleep.**\n- **Adequate daily oral intake — over 75 % of usual — at a level preventing dehydration.**\n- **Adequate parental care and family education about the potential duration of acute symptoms.**\n\n### Prophylaxis — all three target the F protein\n- **Palivizumab:** a **humanised monoclonal anti-RSV antibody** licensed to prevent severe disease from RSV infection.\n- **Nirsevimab (Beyfortus):** a monoclonal antibody against **prefusion F**, given **in early infancy and beyond for high-risk infants**.\n- **RSVpreF maternal (Abrysvo):** a **bivalent RSV A/B prefusion F vaccine given during pregnancy**.\n\nSrc: L32 pp.5–8",
        "qs": []
      }
    ]
  },
  "gastroenterology": {
    "intro": "Bile-stained vomiting is the red flag the examiner builds vignettes around. Pyloric stenosis is asked on the character of the vomit and the age. Reflux is asked as when normal becomes disease, and what needs investigating.",
    "sections": [
      {
        "id": "gast-1",
        "w": "must",
        "h": "Vomiting — the three words, and the seven red flags",
        "body": "### The vocabulary, which is examined\n- **Posseting:** small amounts of milk returned **with swallowed air (wind)**; non-forceful, in **nearly all babies**.\n- **Regurgitation:** the same non-forceful return, **larger and more frequent**.\n- **Vomiting:** the **forceful ejection** of gastric contents.\n\n*Posseting and regurgitation differ in degree, not in kind.*\n\n**Usually benign:** feeding disorders, mild gastro-oesophageal reflux, gastroenteritis. **Potentially serious disorders must be excluded.**\n\n### The red flags\n- **Green bile in the vomit is an EMERGENCY** — suggests **obstructed bowel**.\n- **⚠️ \"Bile\" is an unreliable parental word** — used for **clear acidic stomach contents**.\n- **True haematemesis is a red flag.** **Small quantities** may be **swallowed** — cracked nipple, or nose bleeds in older children.\n- **Systemically unwell:** **infection outside the gut**, especially **urinary tract and CNS**, or other serious illness.\n- **Vomiting with bouts of coughing:** distinguish from **spontaneous, unprovoked** vomiting.\n\n### The two rules of intestinal obstruction\n- **More PROXIMAL = more prominent vomiting, sooner bile-stained** — **unless proximal to the ampulla of Vater**, where there is no bile to stain it.\n- **More DISTAL = more pronounced abdominal distension.**\n\n### Vomiting in infants — the printed summary\n- **Commonest cause:** gastro-oesophageal reflux.\n- **Calculate feed volumes** — **overfeeding is common in bottle-fed infants**.\n- **Transient, with fever, diarrhoea or coryza and cough:** gastroenteritis or respiratory infection — but **consider urine infection, sepsis, meningitis**.\n- **Projectile at 2–8 weeks: exclude pyloric stenosis.**\n- **Bile-stained: potential emergency** — intussusception, malrotation, strangulated inguinal hernia.\n\nSrc: L22",
        "qs": []
      },
      {
        "id": "gast-2",
        "w": "must",
        "h": "Gastro-oesophageal reflux, and when it becomes disease",
        "body": "**Gastro-oesophageal reflux:** involuntary passage of gastric contents into the oesophagus. **Very common in infancy.**\n\n### Why infants reflux — four reasons\n- **Functional immaturity of the lower oesophageal sphincter**, **inappropriately relaxed**.\n- **Predominantly fluid diet · horizontal posture · short intra-abdominal length of oesophagus.**\n\n### Natural history\n- **Most infants with reflux gain weight normally.**\n- **Resolves spontaneously by 12 months** — **maturation of the sphincter**, **upright posture**, **more solids in the diet**.\n- **⚠️ REFLUX IS BENIGN AND SELF-LIMITED. With complications present it is called gastro-oesophageal reflux DISEASE** — that is the whole distinction.\n\n### The five complications that make it disease\n- **Faltering growth** from severe vomiting.\n- **Oesophagitis:** haematemesis, discomfort on feeding or heartburn, **iron-deficiency anaemia**.\n- **Recurrent pulmonary aspiration:** pneumonia, cough or wheeze, **apnoea in preterm infants**.\n- **Dystonic neck posturing — SANDIFER SYNDROME.**\n- **Brief resolved unexplained events** (apparent life-threatening events).\n\n**Commoner in: cerebral palsy · neurodevelopmental disorders · preterm infants · after surgery for oesophageal atresia or diaphragmatic hernia · obesity · hiatus hernia.**\n\n### Investigation — only when the picture is atypical\n**Diagnosed clinically; no investigations required.** Indicated only if the history is atypical, complications are present, or there is **failure to respond to treatment**.\n\n- **24-hour oesophageal pH monitoring** — quantifies **acid** reflux; probe through the nose into the lower oesophagus.\n- **Wireless pH monitoring** — probe placed endoscopically, monitored remotely; **helpful in neurodevelopmental or behavioural problems**.\n- **24-hour impedance monitoring** — also measures **weakly acidic or non-acid reflux**.\n- **Endoscopy with oesophageal biopsies** — identifies oesophagitis, excludes other causes of vomiting.\n- **⚠️ Upper GI contrast study is NOT recommended** to diagnose or assess GORD severity at any paediatric age.\n\n### Management, in order\n- **Parental reassurance · feeding assessment · smaller, more frequent feeds · inert thickening agents.**\n- **Alginate, 1–2 week trial** — a **protective gel above stomach contents**.\n- **GORD: acid suppression** — **H2-receptor antagonists or proton-pump inhibitors (omeprazole)**; they **reduce gastric volume** and treat acid oesophagitis.\n- **⚠️ Prokinetics discouraged:** evidence for gastric-emptying drugs (**domperidone**) is **poor**, side-effects **significant**.\n- **Failure to respond:** consider **cow’s milk protein allergy**, investigate further.\n- **Surgery — NISSEN FUNDOPLICATION:** **fundus wrapped around the intra-abdominal oesophagus**, open or laparoscopic. **Reserved for complications unresponsive to intensive medical treatment, or oesophageal stricture.**\n\nSrc: L22",
        "qs": []
      },
      {
        "id": "gast-3",
        "w": "must",
        "h": "Pyloric stenosis — projectile, non-bilious, and hungry after",
        "body": "**Pyloric stenosis:** **hypertrophy of the pyloric muscle** causing **gastric outlet obstruction**.\n\n### Who gets it\n- **Presents at 2–8 weeks of age, IRRESPECTIVE OF GESTATIONAL AGE.**\n- **Boys 4:1**, particularly **first-born**.\n- **Family history**, especially on the **maternal side**.\n\n### Clinical features\n- **NON-BILIOUS vomiting** — the obstruction is above the ampulla of Vater.\n- **Increases in frequency and forcefulness over time, then becomes PROJECTILE.**\n- **⚠️ FEEDS NORMALLY AFTER VOMITING** — the hungry vomiter. This is the discriminator against gastroenteritis and sepsis.\n- **Weight loss** if presentation is delayed.\n\n### The metabolic signature\n- **HYPOCHLORAEMIC HYPOKALAEMIC METABOLIC ALKALOSIS**, from vomiting stomach contents.\n- **Hyponatraemia may also be present.**\n\n### Diagnosis\n- **Visible gastric peristalsis** — a wave moving **left to right** across the abdomen.\n- **The TEST FEED, classically:** milk **calms the hungry infant** for examination. Diagnostic if the **pyloric mass, feeling like an OLIVE, is palpable in the right upper quadrant** — halfway between the midpoint of the right costal margin and the umbilicus.\n- **⚠️ The stomach is over-distended with air** and often needs **emptying by nasogastric tube** to allow palpation.\n- **ULTRASOUND has replaced the test feed as the standard diagnostic procedure**, showing the **elongated, hypertrophied pylorus**.\n\n### Management\n- **⚠️ CORRECT THE ACID-BASE AND ELECTROLYTE IMBALANCE FIRST** — may take **over 24 hours of IV rehydration**. Operating on an alkalotic infant is the error the sequence prevents.\n- **PYLOROMYOTOMY:** division of the hypertrophied muscle **down to, but NOT including, the mucosa**.\n\nSrc: L22",
        "qs": []
      },
      {
        "id": "gast-4",
        "w": "must",
        "h": "Bile-stained vomiting — the surgical causes",
        "body": "**Green vomit:** obstructed bowel until proved otherwise. The decks name the causes; detail is supplied where they stop.\n\n### Acute intestinal obstruction — the printed list\n**Incarcerated inguinal hernia · intussusception · volvulus · impacted faecal mass · round worm masses.**\n\n*Intussusception is the commonest cause of obstruction in infants after the neonatal period — in full with the acute abdomen.*\n\n### Malrotation and volvulus\n- **Listed** as a serious abdominal emergency of childhood, and among the **abdominal catastrophes** mimicking neonatal sepsis.\n- **Bilious vomiting in a previously well neonate is midgut volvulus until excluded** *(not in course material)*.\n- **Upper GI contrast** shows an abnormal duodenojejunal flexure; **Ladd’s procedure** is the operation *(not in course material)*.\n- **⚠️ The bowel infarcts within hours** — a well-looking baby with green vomit is still an emergency.\n\n### Strangulated inguinal hernia\n- **Listed** as one of the three bile-stained emergencies of infancy.\n- **Irreducible tender inguinoscrotal swelling with vomiting and distension** *(not in course material)*. **Inguinoscrotal pain or swelling is itself on the surgical-consultation list.**\n\n### Hirschsprung disease\n- **A recognised association of Down syndrome**, listed beside **duodenal atresia**.\n- **Absent ganglion cells in the distal bowel** → functional obstruction *(not in course material)*.\n- **No meconium in the first 48 hours · distension · an EMPTY rectum with explosive stool on withdrawal of the finger** *(not in course material)*.\n- **Rectal suction biopsy is diagnostic** *(not in course material)*.\n\n*\"Explosive stool on withdrawal of finger\" is printed in the constipation deck’s rectal-examination list — the sign separating Hirschsprung from functional constipation, where the rectum is loaded.*\n\nSrc: L22; L24 slides 11, 30, 40; Down association from `6) Genetically determined disease_`, cited only; volvulus as a neonatal catastrophe from `11) Neonatal sepsis`, cited only",
        "qs": []
      }
    ]
  },
  "gi-diarrhoea": {
    "intro": "Dehydration assessment and the fluid plan carry these questions: the two signs that decide severity, and which plan follows. Know zinc, the feeding rule, and which drugs are permitted. Constipation is asked through the Rome IV criteria and the four-step treatment.",
    "sections": [
      {
        "id": "gast-5",
        "w": "must",
        "h": "Acute diarrhoea — definitions, burden, types and organisms",
        "body": "### Two definitions, and both are asked\n- **In paediatrics:** an **increase in the FLUIDITY, VOLUME or NUMBER of stools relative to the usual habits of each individual**.\n- **In epidemiological studies:** **three or more loose or watery stools in a 24-hour period** — a loose stool being **one that would take the shape of a container**.\n\n### Burden\n- **A leading cause of morbidity, mortality AND malnutrition in under-fives.**\n- **1.34 million deaths a year, with more than 98 % occurring in the developing world.**\n- **30 million cases a year · 25 % of infant and preschool mortality.**\n\n### The four types\n- **Acute watery diarrhoea** (acute gastroenteritis) — **frequent loose or watery stools WITHOUT visible blood; 80 % of cases**.\n- **Dysentery** — diarrhoea with blood.\n- **Persistent diarrhoea** — post-infectious, **14 days or more**.\n- **Chronic diarrhoea** — recurrent or long-lasting, **non-infectious**.\n\n*Aetiology splits first into acute vs chronic, then infective vs non-infective (e.g. malabsorption).*\n\n### Causes of acute gastroenteritis\n\n|Group|Share|Organisms|\n|---|---|---|\n|**Viruses**|**~70 %**|**Rotaviruses** · noroviruses (Norwalk-like) · enteric adenoviruses · caliciviruses · astroviruses · enteroviruses|\n|**Bacteria**|**10–20 %**|*Campylobacter jejuni* · non-typhoid *Salmonella* spp · enteropathogenic *E. coli* · *Shigella* spp · *Yersinia enterocolitica* · Shiga-toxin-producing *E. coli* · *Salmonella typhi* and *S. paratyphi* · *Vibrio cholerae*|\n|**Protozoa**|**<10 %**|*Cryptosporidium* · *Giardia lamblia* · *Entamoeba histolytica*|\n\n**⚠️ The five most important causes in DEVELOPING countries — a separate, shorter list:** **rotavirus · enterotoxigenic *E. coli* · *Shigella* · *Campylobacter jejuni* · *Cryptosporidium*.**\n\nSrc: L23.1 slides 3–14",
        "qs": []
      },
      {
        "id": "gast-6",
        "w": "must",
        "h": "Pathogenesis, clinical picture, complications and mimics",
        "body": "### Two mechanisms\n- **SECRETORY — the most important:** toxins **bind specific enterocyte receptors**, causing **release of chloride into the intestinal lumen**. Net secretion replaces net absorption.\n- **OSMOTIC:** **damage to the villous brush border** causes **malabsorption of intestinal contents**; retained solute draws water in.\n\n### Clinical picture\n- **Frequent loose or watery stools without visible blood.**\n- **Begins acutely (abruptly).**\n- **Lasts under 14 days, usually under 7.**\n- **May carry:** flatulence, abdominal pain and cramps · nausea and vomiting · fever.\n\n### What the associated symptoms LOCALISE\n\n|Symptom|What it indicates|\n|---|---|\n|**Nausea and vomiting**|non-specific, but indicate **infection in the UPPER intestine**|\n|**Fever**|an **inflammatory process** — but also **dehydration** or **co-infection**|\n|**Severe abdominal pain and TENESMUS**|involvement of the **LARGE INTESTINE and RECTUM**|\n\n**⚠️ History and examination serve exactly two functions:** distinguishing gastroenteritis from **other causes of vomiting and diarrhoea**, and **estimating the degree of dehydration**.\n\n### The three main sequelae\n**Dehydration, which can be fatal · contribution to malnutrition · electrolyte and acid-base disturbance.**\n\n### Complications of acute diarrhoea\n**Hypernatraemia and hyponatraemia · POST-ACIDOTIC TETANY · POST-ACIDOTIC HYPOKALAEMIA · seizures · gastrointestinal complications · nutritional complications · prerenal failure · disseminated intravascular coagulation.**\n\n### Differential diagnosis\n- **Other infections:** urinary tract infection, otitis media, pneumonia, septicaemia.\n- **Surgical:** intussusception, appendicitis, small intestinal obstruction including malrotation.\n- **Drugs:** antibiotics and others.\n- **⚠️ SPURIOUS DIARRHOEA — chronic constipation with OVERFLOW INCONTINENCE.** The child is constipated, not loose.\n- **Non-infectious:** diabetic ketoacidosis, inborn errors of metabolism.\n- **Unmasking:** acute gastroenteritis can reveal **coeliac disease or chronic inflammatory bowel disease**.\n\nSrc: L23.1 slides 16–22, 35, 74",
        "qs": []
      },
      {
        "id": "gast-7",
        "w": "must",
        "h": "Assessing dehydration — four axes and the two-sign rule",
        "body": "### The three degrees, by weight loss\n- **No dehydration:** no clinically detectable signs — usually **under 5 %** of body weight.\n- **Some dehydration:** clinical dehydration — usually **5 % to 10 %**.\n- **Severe dehydration:** usually **over 10 %**.\n- **⚠️ SHOCK: IV bolus 20 ml/kg of 0.9 % NaCl.** A separate state, not the top of the ladder.\n\n### The four axes examined — G, E, M, S\n- **General condition:** lethargic · irritable · normal.\n- **Eyes:** sunken · normal.\n- **Mouth — offer water and WATCH:** drinking poorly · eagerly · normally.\n- **Skin turgor (pinch):** returning very slowly · slowly · immediately.\n\n### Grading the skin pinch\n\n|Grade|Fold visible for|\n|---|---|\n|**Normal**|**goes back immediately**|\n|**Slowly**|**less than 2 seconds**|\n|**Very slowly**|**more than 2 seconds**|\n\n**⚠️ THE CLASSIFICATION RULE: two or more signs in one column place the child in that column.** One sign does not classify a child.\n\n*The column headings themselves are the WHO no / some / severe grades; the deck prints the axes and the two-sign rule but not the grid (headings not in course material).*\n\n### Additional signs of dehydration\n- **Head:** decreased level of consciousness · sunken fontanelle · dry mucous membranes · **eyes sunken AND TEARLESS**.\n- **Circulation:** tachycardia with weak peripheral pulses · prolonged capillary refill · cold extremities · pale or mottled skin · **hypotension**.\n- **Whole body:** tachypnoea · reduced tissue turgor · sudden weight loss · reduced urine output.\n\n*Hypotension is a LATE sign in a child — the pulse, the refill and the consciousness move first.*\n\n### Reassessing severe dehydration\n**Assess hourly**, looking for: **return of a strong radial pulse · level of consciousness · skin turgor · urine output**.\n\nSrc: L23.1 slides 24–31, 49",
        "qs": []
      },
      {
        "id": "gast-8",
        "w": "must",
        "h": "Isotonic, hypertonic and hypotonic dehydration",
        "body": "**Three types, by plasma sodium:** **isonatraemic** — sodium and water lost proportionally, **plasma sodium normal** — plus **hyponatraemic** and **hypernatraemic**.\n\n|  |**Isotonic**|**Hypertonic**|**Hypotonic**|\n|---|---|---|---|\n|Prevalence|**over 75 %**|**10–15 %**|**5–10 %**|\n|Losses|**W = Na**|**W > Na**|**W < Na**|\n|ECF loss|**++**|**+**|**+++**|\n|Thirst|**++**|**++++**|**+**|\n|Skin turgor|**++**|**NOT LOST**|**+++**|\n|Mental state|**lethargy / irritable**|**irritable**|**lethargy**|\n\n### Two rows that decide questions\n- **⚠️ SKIN TURGOR IS NOT LOST IN HYPERTONIC DEHYDRATION.** Water is drawn out of the cells into the extracellular space, so the skin pinches normally while the child is profoundly dry. **Clinical assessment UNDERESTIMATES hypernatraemic dehydration.**\n- **Thirst extreme (++++) in hypertonic, least (+) in hypotonic; ECF loss runs the other way** — greatest in hypotonic (+++).\n\n### Why hypernatraemic dehydration is corrected SLOWLY\n- **Plasma sodium rises 140 → 160 mEq/L, osmolality 280 → 320 mosm/kg**; water leaves the cell and **the brain cell shrinks**.\n- The cell defends its volume by **accumulating ORGANIC OSMOLYTES**, raising its own osmolality (~315) and **restoring its size**.\n- **⚠️ Correct the plasma sodium rapidly and the osmolytes are still inside — water rushes in and the brain SWELLS.** Iatrogenic cerebral oedema.\n- **Check plasma electrolytes, urea, creatinine and glucose** whenever **IV fluids are required** or **hypernatraemia is suspected**.\n\nSrc: L23.1 slides 32–34, 36, 73",
        "qs": []
      },
      {
        "id": "gast-9",
        "w": "must",
        "h": "Fluid therapy — Plans A, B and C",
        "body": "**Two stages: INITIAL rehydration replaces the deficit; SUBSEQUENT therapy supplies maintenance plus ongoing losses.**\n\n### Initial therapy — amount and route follow the degree\n\n|Degree|Amount|Route|Plan|\n|---|---|---|---|\n|**No dehydration (mild)**|**over 50 ml/kg**|**oral**|**A**|\n|**Some (moderate)**|**75 ml/kg (range 50–100)**|**oral or NGT**|**B**|\n|**Severe**|**over 100 ml/kg**|**intravenous**|**C**|\n\n*IV is also used for failure of oral or nasogastric rehydration, at any degree.*\n\n### Plan A — home-based fluids\n**ORS solution · soup, salted or unsalted · yoghurt-based drinks · breast milk · cereal water · plain clean water · fresh fruit juice · weak herbal tea.**\n\n### Plan B — ORS\n\n|Constituent (g/L)|**Rehydran**|**Hydro-Safe**|\n|---|---|---|\n|**Sodium chloride**|**3.5 g**|**2.1 g**|\n|**Trisodium citrate**|**2.9 g**|**2.9 g**|\n|**Potassium chloride**|**1.5 g**|**1.5 g**|\n|**Glucose**|**20 g**|**20 g**|\n|**Osmolarity**|**95 mmol**|**65 mmol**|\n\n- **⚠️ GLUCOSE IS ADDED TO ENSURE MAXIMUM ABSORPTION OF SODIUM AND WATER** — the two enter the enterocyte on a **cotransporter** and water follows sodium across the **tight junction**. That coupling is why ORS works in a secreting gut.\n- **Amount: 50–100 ml/kg (about 75 ml/kg).**\n- **Given SLOWLY — one spoon every 1–2 minutes over 4–6 hours** — cup and spoon, cup, dropper, syringe or nasogastric tube.\n\n### Plan C — intravenous\n- **Fluid, for ALL types of dehydration:** Pansol, Polyelectrolyte or **Ringer’s lactate**.\n- **Amount 100 ml/kg, one third then two thirds, SLOWER FOR YOUNGER children:** **30 ml/kg rapidly over ½–1 hour**, then **70 ml/kg slowly over 2.5–5 hours**.\n\n### Subsequent oral therapy\n- **Maintenance:** normal foods and drinks.\n- **Ongoing losses, after EACH loose stool:** **under 1 year — 50–100 ml (¼–½ cup)**; **over 1 year — 100–200 ml (½–1 cup)**.\n\nSrc: L23.1 slides 40–51",
        "flow": {
          "title": "Reassessing at 4 hours — which plan next",
          "steps": [
            {
              "k": "step",
              "t": "Plan B given: ORS 75 ml/kg over 4–6 hours, plus feeding"
            },
            {
              "k": "decision",
              "t": "Reassess at 4 hours — any signs of dehydration?",
              "yes": "Still some dehydration, or no improvement → repeat Plan B",
              "no": "Shift to Plan A — food-based home fluids and feeding"
            },
            {
              "k": "alert",
              "t": "WORSENING to severe dehydration → shift to Plan C, IV fluids"
            },
            {
              "k": "step",
              "t": "On Plan C, reassess HOURLY: radial pulse, consciousness, skin turgor, urine output"
            },
            {
              "k": "decision",
              "t": "After Plan C — improved?",
              "yes": "Some dehydration → Plan B · none → Plan A",
              "no": "Repeat Plan C"
            }
          ]
        },
        "qs": []
      },
      {
        "id": "gast-10",
        "w": "must",
        "h": "Feeding, zinc, and which drugs are allowed",
        "body": "**Three main lines: FLUID THERAPY · FEEDING · ZINC.** Drugs are the fourth question, and mostly the answer is no.\n\n### Feeding during and after diarrhoea\n- **Breast-fed: continue as usual DURING and AFTER rehydration.**\n- **Formula-fed: same normal formula, same normal concentration, AFTER rehydration.** No dilution.\n- **⚠️ Low-lactose or lactose-free formula ONLY in secondary lactose intolerance.**\n- **Mixed diet: normal feeding**, in **small frequent feeds every 3–4 hours**.\n- **Avoid:** too-sweetened foods · high-fibre foods · foods with a laxative effect · fatty foods.\n\n### Zinc — in ALL types and ALL degrees\n- **Under 6 months: 10 mg for 10–14 days.**\n- **Over 6 months: 20 mg for 10–14 days.**\n\n### The drugs, one by one\n- **Antibiotics: ONLY for cholera and dysentery.** **Antiparasitics** for *Entamoeba histolytica* trophozoites; a specific antibiotic for any associated infection.\n- **⚠️ ANTIMOTILITY AGENTS ARE NOT USED IN CHILDREN — diphenoxylate HCl, loperamide.**\n- **⚠️ ADSORBENTS are mainly cosmetic and CONTRAINDICATED** in childhood gastroenteritis — **no benefit, increased risk of ileus, drowsiness and nausea**.\n- **Antiemetics are NOT routinely recommended.**\n\n### Ondansetron — the one antiemetic with a case\n- **IV ondansetron reduces vomiting episodes and hospital admission in severe cases.**\n- **For:** less vomiting in the first hours · less need for IV fluids in the emergency department · fewer hospitalisations among those needing IV fluids.\n- **Against:** **may increase diarrhoeal episodes** · high cost · **may prolong the QT interval** · studied only in **mildly dehydrated** children, **funded by the manufacturer**.\n- **⚠️ At risk: congenital long QT syndrome, low potassium or magnesium, other QT-prolonging drugs.**\n\n### Probiotics\n- **Definition:** live microbial feeding supplements.\n- **Mechanisms:** synthesis of antimicrobial substances · competition for nutrients · modification of toxins · stimulation of non-specific immune responses.\n- **Benefit:** **especially *Lactobacillus* GG — reduces the DURATION of diarrhoea**; may prevent ***C. difficile*-associated diarrhoea** on antibiotics.\n- **⚠️ Type, regimen and dosage are not yet established.**\n\nSrc: L23.1 slides 38, 53–65",
        "qs": []
      },
      {
        "id": "gast-11",
        "w": "high",
        "h": "Dysentery, admission, discharge and prevention",
        "body": "### Dysentery\n- **5–10 % of acute gastroenteritis in Egypt.**\n- **Causes: *Shigella* 60 % · *Campylobacter jejuni* · *Salmonella* · *E. histolytica*.**\n- **Fluids, feeding and zinc exactly as for acute watery diarrhoea.**\n- **Antibiotics: START with TMP/SMX.** **Modify after 2 days if no improvement** — **ceftriaxone IV for *Shigella***, **metronidazole for amoebiasis**.\n\n### Investigation — usually none\n- **Usually NO investigations are indicated.**\n- **Stool examination in bloody diarrhoea** — **faecal leucocytes indicate bacterial invasion of colonic mucosa**.\n- **Stool culture:** bloody diarrhoea · outbreaks · HUS · immunosuppression · specific pathogen community outbreak · uncertain diagnosis.\n- **Plasma electrolytes, urea, creatinine and glucose** if **IV fluids are required** or **hypernatraemia is suspected**.\n\n### When to return — what parents are told\n**Not able to drink or breastfeed · becomes sicker · develops fever · blood in stool · repeated vomiting · increased thirst.**\n\n### When to admit\n- **Fluid:** severe dehydration · intractable vomiting · unable to maintain hydration orally.\n- **Abdomen:** ileus, shock, abdominal distension or intestinal obstruction.\n- **Course:** treatment failure despite adequate ORS intake.\n- **Judgement:** caregivers cannot provide adequate care, or social/logistical concerns · young age, decreased mental status, uncertain diagnosis.\n\n*Mild-to-moderate dehydration, under 6 months, or frequent stools or vomits: observe in the emergency department a MINIMUM of 4–6 HOURS before discharge.*\n\n### Discharge criteria\n**Sufficient rehydration by weight gain and/or clinical status · IV fluids no longer required · oral intake equals or exceeds losses · medical follow-up available · adequate family teaching** — hand hygiene, expected course, prevention of dehydration, signs of dehydration.\n\n### Prevention\n**Rotavirus immunisation · hand hygiene at home and day care · breastfeeding, protective against severe gastroenteritis · improved complementary feeding including vitamin A · improved case management — ORS, zinc, antibiotics for dysentery.**\n\nSrc: L23.1 slides 36–37, 66–71, 75–76",
        "qs": []
      },
      {
        "id": "gast-12",
        "w": "high",
        "h": "Persistent and chronic diarrhoea",
        "body": "**Persistent diarrhoea:** a **post-infectious** diarrhoea that **begins acutely as watery diarrhoea or as dysentery and lasts 14 DAYS OR MORE**. Also called **post-gastroenteritis syndrome**.\n\n### The numbers\n- **10 % of cases.** **Peak age around 18 months.**\n- **About 10 % of acute episodes in developing countries persist for 2–4 weeks**, with deterioration of nutritional status.\n- **⚠️ Responsible for 35 % of ALL diarrhoea-associated deaths** — a tenth of episodes causing a third of deaths.\n\n### Main sequelae\n**Marked weight loss and malnutrition · secondary immune deficiency and repeated infections.**\n\n### Risk factors — seven, most modifiable\n- **Low birth weight.**\n- **Malnutrition** — **delays mucosal repair**.\n- **Absence of breastfeeding.**\n- **Recent introduction of animal milk.**\n- **Recent or recurrent acute diarrhoea in a very young infant.**\n- **Immunological impairment due to malnutrition.**\n- **⚠️ MISMANAGEMENT — antibiotics, antidiarrhoeals, prolonged starvation.** The treatment causes the disease.\n\n### Pathogenesis — a self-sustaining loop\n- **Pathogens + risk factors → MUCOSAL INJURY → villous flattening and mucosal atrophy → decreased nutrient absorption → protein-energy malnutrition.**\n- **Malnutrition then reduces digestive enzyme secretion** — including **brush-border disaccharidases** — impairing digestion and absorption.\n- **⚠️ The result is an OSMOTIC diarrhoea that PERSISTS AFTER THE INFECTIVE AGENT IS ELIMINATED.** Malnutrition impairs both defence and healing, closing the loop.\n\n### Chronic diarrhoea\n**Recurrent or long-lasting, NON-INFECTIOUS:** **sensitivity to milk or gluten · chronic autoimmune inflammation such as inflammatory bowel disease · congenital causes such as cystic fibrosis.**\n\nSrc: L23.1 slides 77–82, 87",
        "qs": []
      },
      {
        "id": "gast-13",
        "w": "must",
        "h": "Constipation — definition, mechanism, Rome IV and Bristol",
        "body": "**Constipation:** a **delay or difficulty in defecation, present for 2 OR MORE WEEKS, and sufficient to cause significant distress to the patient.** Usually involves **painful or incomplete evacuation of hard stools**.\n\n- **~3 % of all paediatric office visits**, and **10 to 45 % of paediatric gastroenterology clinic visits**. *The abdominal-pain deck gives the second figure as 30 % — both are printed.*\n- **⚠️ FUNCTIONAL CONSTIPATION IS THE MOST COMMON CAUSE of childhood constipation**, and **the most common cause of chronic abdominal pain everywhere**, at all ages.\n\n### Pathophysiology — one mechanism\n- **WITHHOLDING OF STOOLS**, after a **hard, painful or frightening bowel movement**.\n- **Retained stool distends and ENLARGES the rectum**; the **large hard stool becomes impacted**.\n- **⚠️ SOFT OR WATERY STOOL LEAKS ROUND THE IMPACTION AND SOILS THE PANTS** — **overflow incontinence**, which is why a soiling child is constipated, not loose.\n- **Softer stools back up above the impaction into the colon.**\n\n### Rome IV diagnostic criteria for functional constipation\n**Infants and toddlers up to 4 years old — at least TWO of the following present for at least ONE MONTH:**\n- **Two or fewer defecations per week.**\n- **History of excessive stool retention.**\n- **History of painful or hard bowel movements.**\n- **History of large-diameter stools.**\n- **Presence of a large faecal mass in the rectum.**\n\n**In toilet-trained children, two additional criteria may be used:**\n- **At least one episode per week of incontinence AFTER the acquisition of toileting skills.**\n- **History of large-diameter stools that may obstruct the toilet.**\n\n### Bristol Stool Form Scale\n\n|Type|Looks like|Description|\n|---|---|---|\n|**1**|**rabbit droppings**|separate hard lumps, **hard to pass**|\n|**2**|**bunch of grapes**|sausage-shaped but lumpy|\n|**3**|**corn on the cob**|sausage with **surface cracks**|\n|**4**|**sausage**|smooth and soft — **normal**|\n|**5**|**chicken nuggets**|soft blobs, clear-cut edges, passed easily|\n|**6**|**porridge**|fluffy, ragged edges, mushy|\n|**7**|**gravy**|watery, **entirely liquid**|\n\nSrc: L23.2 slides 2–6, 9, 14; the 30 % clinic figure from L24 slide 57",
        "qs": []
      },
      {
        "id": "gast-14",
        "w": "high",
        "h": "Constipation — evaluation and investigation",
        "body": "**⚠️ Ask the CHILD as well as the parents** — parents often under-recognise constipation symptoms.\n\n### Stooling history\n**Defecation frequency · stool consistency, calibre and size · pain during defecation · presence and TIMING of faecal incontinence · stool-withholding behaviour.**\n\n### Associated symptoms and background\n- **Abdominal pain · anorexia, early satiety, nausea and vomiting · weight loss or poor weight gain.**\n- **⚠️ OCCULT CONSTIPATION: the presentation is usually LATE.**\n- **Previous treatment · dietary history · neuromuscular development.**\n- **Behavioural or psychosocial:** death in the family, birth of a sibling, school problems, **SEXUAL ABUSE**.\n\n### Abdominal examination\n- **Tenderness**, often from **gaseous distension of the colon**.\n- **A FAECAL MASS in the LEFT LOWER QUADRANT** — the loaded sigmoid colon.\n\n### Perianal inspection\n**Position of the anus · gluteal cleft deviation · erythema or dermatitis · perianal faeces or faeces on clothes · fissures · haemorrhoids · skin tags · scars of sexual abuse.**\n\n### Anorectal digital examination\n**Perianal sensation (ANAL WINK) · anal tone · size of the rectum · amount and consistency of faeces in the ampulla · sphincter function, contract and relax · EXPLOSIVE STOOL ON WITHDRAWAL OF THE FINGER · occult blood.**\n\n### Investigation\n- **⚠️ Laboratory investigation RARELY uncovers underlying disease** — the two named are **hypothyroidism and coeliac disease**.\n- **Plain abdominal X-ray shows faecal retention, and is useful in exactly two situations:** **uncertainty whether the patient is constipated when rectal examination is impossible (obesity) or refused**; and **to convince parents and children of the need for therapy**.\n\nSrc: L23.2 slides 8, 10–13, 15–17",
        "qs": []
      },
      {
        "id": "gast-15",
        "w": "must",
        "h": "Constipation — the four-step treatment",
        "body": "**A successful approach has FOUR steps: EDUCATION · DISIMPACTION · PREVENTION OF RE-ACCUMULATION · FOLLOW-UP.**\n\n### 1. Education\n**Simple explanations of bowel function, bowel problems and anorectal physiology · the coexistence of BOWEL AND BLADDER problems · that maintenance therapy runs 6 to 24 MONTHS.**\n\n### 2. Disimpaction\n- **Faecal impaction, defined by any of:** a **hard mass in the lower abdomen** · a **dilated rectum filled with stool** on rectal examination · **excessive colonic stool on radiography** · a **positive history of overflow incontinence**.\n- **⚠️ DISIMPACTION MUST PRECEDE MAINTENANCE THERAPY.** Starting stool softeners **without** it causes **treatment failure** and **worsens overflow incontinence**.\n- **Oral or rectal medication for 3–7 days** — oral, rectal, or a combination, all shown effective.\n\n### 3. Maintenance — diet, behaviour, laxatives\n**Aim: regular bowel movements at normal intervals with good evacuation, preventing recurrent impaction and recurrent withholding. Duration may be months or years.**\n\n|Dietary intervention|Strength of recommendation|\n|---|---|\n|**Increased fluids and carbohydrate**|**HIGHLY RECOMMENDED**|\n|**Limit intake of milk**|**Recommended**|\n|**Dietary fibre**|**No evidence to recommend**|\n|**Probiotics**|**No evidence to recommend**|\n\n- **Carbohydrates, especially SORBITOL** — prune, pear and apple juices — increase stool frequency and water content.\n- **Milk:** excess **exacerbates constipation**, but evidence that eliminating it helps refractory cases is **insufficient**. **A time-limited cow’s-milk-free trial** is reasonable in **infants and young children unresponsive to adequate medical and behavioural management** — **cow’s milk intolerance, particularly with atopy**, is associated with chronic constipation.\n- **Behavioural: scheduled toilet sitting 3 to 10 minutes, once or twice a day. NO PUNISHMENT for not stooling; praise and reward for stooling and for sitting.**\n\n### Laxatives\n- **Osmotic: lactulose · polyethylene glycol · magnesium salts.**\n- **Stool softeners: docusate · mineral oil.**\n- **Also available: stimulant and rectal laxatives.**\n- **⚠️ TITRATE: increase every two days until one to two soft stools daily; decrease if loose.** **The commonest reason for non-response is INADEQUATE DOSING.**\n- **Warn that some leaking or soiling may persist at the start**, and give an **emergency plan**.\n\n### 4. Follow-up and prognosis\n**Regular follow-up essential; treatment for AT LEAST SIX MONTHS. Wean only once bowel movements are regular and easy. Relapse rates are high and stooling problems may persist into adulthood. About 50 % recover and come off medication within 6 to 12 months.**\n\nSrc: L23.2 slides 19–29, 31–34, 37",
        "qs": []
      }
    ]
  },
  "gi-abdopain": {
    "intro": "The first question is always surgical, medical or extra-abdominal. Expect the named emergencies with their signs, and a vignette where the abdomen is innocent and the cause is a chest or a metabolic one. Functional pain is a diagnosis with positive criteria, not a leftover.",
    "sections": [
      {
        "id": "gast-16",
        "w": "must",
        "h": "Acute abdominal pain — surgical, medical or extra-abdominal",
        "body": "**Acute abdominal pain:** **severe pain lasting under 5 days that interferes with the child’s activity**. The pathology may be **intra-abdominal, thoracic or systemic**.\n\n- **10 % of childhood primary care office visits · surgical intervention in 10 % to 30 %.**\n- **Mostly benign** (constipation the example). **The point is to pick up the cardinal signs of serious underlying disease.**\n\n### The three-way classification\n\n|Group|Causes|\n|---|---|\n|**Intra-abdominal — SURGICAL**|**acute appendicitis · intestinal obstruction including intussusception · inguinal hernia · peritonitis · inflamed Meckel diverticulum · pancreatitis · trauma**|\n|**Intra-abdominal — MEDICAL**|**non-specific abdominal pain · gastroenteritis · urinary tract (UTI, acute pyelonephritis, hydronephrosis, renal calculus) · Henoch–Schönlein purpura · diabetic ketoacidosis · sickle cell disease · hepatitis · inflammatory bowel disease · constipation · recurrent abdominal pain of childhood · gynaecological in pubertal females · psychological · lead poisoning · acute porphyria (rare) · unknown**|\n|**EXTRA-ABDOMINAL**|**upper respiratory tract infection · lower lobe pneumonia · torsion of the testis · hip and spine**|\n\n*A separate extra-abdominal slide adds: pharyngitis · abdominal migraine · FMF · HUS · drugs · hysterical.*\n\n### The eight serious abdominal emergencies of childhood\n**Appendicitis · intussusception · malrotation/volvulus · bleeding Meckel’s diverticulum · bacterial enterocolitis · pancreatitis · obstruction or strangulated hernia · ovarian or testicular torsion.**\n\n### Common causes, and by age\n**Common: appendicitis · gastroenteritis · urinary tract infection · constipation · mesenteric adenitis · ovulatory/perimenstrual pain.**\n\n|Age|Surgical abdominopelvic emergencies|\n|---|---|\n|**Infancy (<2 y)**|**intussusception · incarcerated hernia · volvulus**|\n|**Preschool (2–5 y)**|**appendicitis · Meckel’s diverticulum · intussusception**|\n|**School (>5 y)**|**appendicitis · testicular torsion**|\n|**Adolescent**|**appendicitis · testicular torsion · ovarian torsion · ectopic pregnancy · cholecystitis**|\n\n### Where the pain is\n**Right upper quadrant — biliary · epigastrium — gastritis · periumbilical — intussusception, small bowel obstruction · right iliac fossa — appendicitis · loins — pyelonephritis, calculi · suprapubic — ovary, tubes, urosepsis · groin — hernia · referred from the chest — pneumonia.**\n\nSrc: L24 slides 3–12, 16",
        "flow": {
          "title": "The child with acute abdominal pain",
          "steps": [
            {
              "k": "step",
              "t": "Rapid cardiopulmonary assessment",
              "n": "appearance · airway, breathing, circulation and vital signs · neurologic status · blood sugar · food and fluid intake"
            },
            {
              "k": "decision",
              "t": "Any history of significant trauma?",
              "yes": "See trauma guidelines",
              "no": "Continue"
            },
            {
              "k": "alert",
              "t": "SURGICAL CONSULTATION if any of: bile-stained vomiting · bloody stool · localised tenderness · distension · guarding · rebound tenderness · palpable mass · inguinoscrotal pain or swelling"
            },
            {
              "k": "decision",
              "t": "Urine dipstick positive for leukocyte esterase or nitrites, or pyuria/bacteriuria?",
              "yes": "Consider urinary tract infection",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Diarrhoea ± vomiting or fever?",
              "yes": "Consider gastroenteritis",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Fever ± tachypnoea, recession, cough, chest pain?",
              "yes": "Consider pneumonia",
              "no": "Continue"
            },
            {
              "k": "decision",
              "t": "Firm stool palpable in the lower abdomen?",
              "yes": "Consider constipation",
              "no": "Consider the less common diagnoses"
            }
          ]
        },
        "qs": []
      },
      {
        "id": "gast-17",
        "w": "must",
        "h": "The named acute causes, and the signs that mean surgery",
        "body": "### Signs suggestive of a surgical cause\n**Absent bowel sounds · bilious vomiting · bloody diarrhoea or occult blood in stool · temperature ≥ 38.0 °C (100.4 °F) · rebound tenderness · rigidity (involuntary guarding) · voluntary guarding.**\n\n**Red flags, the wider list:** the seven above plus **sudden severe pain · pain interrupting sleep · haematemesis and haematochezia · hypotension · tachycardia · WRITHING in pain · jaundice · TINKLING bowel sounds · gross distension.**\n\n*Auscultate BEFORE palpating; stethoscope pressure also tests for tenderness.*\n\n### Investigations\n**CBC and CRP · urinalysis · stool analysis and occult blood.** As indicated: **liver function tests · amylase, lipase · abdominal X-ray (small bowel obstruction) · abdominal ultrasound · CT abdomen, high sensitivity and specificity.**\n\n### Acute infections — the triad\n**Fever, vomiting and abdominal pain:** pharyngitis, especially **group A β-haemolytic streptococcal** · appendicitis · pyelonephritis · early hepatitis · early gastroenteritis.\n\n### Appendicitis\n- **Older children — the classic picture:** **fever, nausea, vomiting, right lower quadrant pain, tenderness and rigidity**.\n- **⚠️ INFANTS: irritability, unexplained crying, refusal of feeding, vomiting, HIGH fever** — causing **diagnostic confusion, delay and PERFORATION**.\n- **Ultrasonography or CT may help establish the diagnosis.**\n- *Rovsing’s sign, psoas sign and the Alvarado score are the named bedside tools (not in course material).*\n\n### Intussusception\n- **Invagination of proximal bowel into a distal segment**, commonly **ileum into caecum through the ileocaecal valve**.\n- **⚠️ COMMONEST CAUSE OF INTESTINAL OBSTRUCTION IN INFANTS AFTER THE NEONATAL PERIOD.**\n- **Any age; peak 3 months to 2 years.**\n- **Paroxysmal colicky pain with drawing up of the legs, a sausage-shaped mass, REDCURRANT-JELLY stool** *(triad not in course material)*.\n- **Ultrasound target sign; reduction by air or contrast enema, surgery if that fails or the bowel perforates** *(not in course material)*.\n- **Henoch–Schönlein purpura can cause intussusception** — a recognised complication.\n\n### Non-specific abdominal pain and mesenteric adenitis\n**Resolves in 24–48 hours. Pain LESS SEVERE than appendicitis, right iliac fossa tenderness VARIABLE. Often with an upper respiratory infection and cervical lymphadenopathy.**\n\n### Acute pancreatitis\n- **Acute onset:** fever, nausea, severe vomiting, **epigastric and periumbilical pain radiating to back or scapula**, tenderness and rigidity; **usually acutely ill or in shock**.\n- **Common:** abdominal pain · irritability in infants · nausea · vomiting · anorexia · tenderness · distension · dehydration.\n- **Uncommon:** back pain · jaundice · fever · feeding intolerance · respiratory distress · ascites · pleural effusion · **CULLEN’S SIGN (umbilicus) and TURNER’S SIGN (flanks)**, the bluish discoloration of intra-abdominal haemorrhage.\n- **⚠️ INSPPIRE criteria — TWO OF THREE:** suggestive abdominal pain · **serum amylase and/or lipase at least THREE TIMES the upper limit of normal** · imaging characteristic of or compatible with acute pancreatitis.\n- **SERUM LIPASE is the test of choice, MORE SPECIFIC than amylase.**\n- **Imaging: ULTRASOUND FIRST CHOICE**; reserve CT and/or MRCP for complicated and severe pancreatitis.\n- **Mechanical obstruction of the pancreatic duct by ASCARIASIS worm** is a listed cause.\n\n*Other named causes: lower lobe pneumonia as referred pain · Henoch–Schönlein vasculitis · diabetic ketoacidosis.*\n\nSrc: L24 slides 18–38; HSP→intussusception from `47)Hemorrhagic disorders `, cited only",
        "qs": []
      },
      {
        "id": "gast-18",
        "w": "must",
        "h": "Chronic abdominal pain — organic or functional",
        "body": "**Chronic or recurrent abdominal pain:** **at least one episode of pain per month for TWO CONSECUTIVE MONTHS, severe enough to interfere with routine functioning.** **Occurs in 10–15 % of children.**\n\n- **Classified into ORGANIC and NON-ORGANIC (\"functional\").**\n- **⚠️ FUNCTIONAL 70 %, ORGANIC 30 %.** *One assessment plate puts organic below 10 % — both figures are printed.*\n- **Functional pain: NO specific inflammatory, anatomic, metabolic or neoplastic cause — but THE PAIN IS GENUINE. Children DO experience pain.**\n- **Aetiology unknown and no diagnostic markers exist for any group, so FUNCTIONAL PAIN IS A DIAGNOSIS OF EXCLUSION** — reached without a **shotgun** work-up.\n- **Perpetuated by its own consequences** — pain behaviour, benefit of pain, excess healthcare visits.\n\n### The four abdominal-pain-related FGIDs (Rome IV, 2016)\n\n|Feature|Diagnosis|\n|---|---|\n|**Abdominal pain with ALTERED BOWEL PATTERN**|**Irritable bowel syndrome**|\n|**Abdominal pain with symptoms of DYSPEPSIA**|**Functional dyspepsia**|\n|**ISOLATED abdominal pain**|**Functional abdominal pain** (not otherwise specified)|\n|**Intense CYCLIC pain with headache, vomiting and/or aura-like symptoms**|**Abdominal migraine**|\n\n*Rome IV also groups vomiting and aerophagia, and constipation and incontinence, as paediatric FGIDs.*\n\n### Organic causes, by system\n- **Gastrointestinal:** parasitic infestations · **CONSTIPATION** · acid peptic disease · carbohydrate malabsorption · inflammatory bowel disease · coeliac disease · eosinophilic GI disorders · chronic appendicitis · malrotation.\n- **Hepatobiliary:** chronic hepatitis · cholelithiasis · cholecystitis · choledochal cyst · liver abscess · sphincter of Oddi dysfunction · biliary dyskinesia. **Pancreatic:** chronic pancreatitis · pseudocyst.\n- **Urinary:** ureteropelvic junction obstruction · recurrent pyelonephritis · recurrent cystitis · hydronephrosis · nephrolithiasis. **Genital:** dysmenorrhoea · endometriosis · haematocolpos · tumour · ovarian cysts · pelvic inflammatory disease.\n- **Systemic:** respiratory infection, tumour or inflammation · **metabolic** — porphyria, diabetes, lead poisoning · **haematological** — angioedema, collagen vascular disease, sickle cell · **peritoneal/musculoskeletal** — FMF, trauma, inflammation, infection · **tumours**.\n\n### Three organic entities given their own slides\n- **Parasitic infestations — helminths:** ***Ascaris lumbricoides*** (roundworm), ***Ancylostoma duodenale*** (hookworm), ***Enterobius vermicularis***, ***Trichuris trichiura*** (whipworm). **Protozoa:** ***Giardia lamblia***, ***E. histolytica***. **Pitfalls: diagnosis · casual relationship (combined aetiology) · improper treatment and recurrence.**\n- **FMF:** mutations in the **MEFV (MEditerranean FeVer) gene**; **usually OVER-diagnosed**; **serum amyloid is an inflammatory marker**; **heterozygous children are common — treat if typical symptoms develop**; **treat compound heterozygotes**.\n- **Acid peptic disease:** **dull aching epigastric pain, related to meals, worse at night or early morning, with nausea and vomiting.** **Children with *H. pylori* gastritis had more severe, prolonged and frequent pain, and the highest frequency of upper GI bleeding.**\n\n### Alarming signals\n- **The pain itself:** age under 5 years · nocturnal symptoms · persistent right upper or right lower pain · referred pain.\n- **Gut:** chronic, bile- or blood-stained vomiting · dysphagia · prolonged, mucoid or bloody diarrhoea.\n- **Beyond the gut:** weight loss or growth retardation · dysuria, haematuria or flank pain · constitutional or extraintestinal manifestations · family history of organic GI disorders.\n\n**Examination: growth deceleration, delayed puberty · jaundice · significant anaemia · rebound, guarding or organomegaly · perianal disease (tags, fissures, fistulas).**\n\n### Organic versus functional\n\n|Clinical feature|**Organic**|**Functional**|\n|---|---|---|\n|Site of pain|**localised**|**vague, midline**|\n|Timing|**may be nocturnal**|**NEVER nocturnal**|\n|Alarm signals|**present**|**absent**|\n|Family history|**IBD, acid peptic disease**|**functional constipation, FGIDs, anxiety, headache**|\n|Other functional symptoms|**absent**|**headache, fatigue, anxiety or obsession**|\n\n### The stepwise algorithm\n- **History → physical examination → initial laboratory tests → any alarm signals?**\n- **Initial screening: CBC with differential · ESR and CRP · liver and renal function · urinalysis · routine stool analysis · stool haemoccult.**\n- **⚠️ Ultrasound ONLY when a specific organic disease is suspected.** The most widely used non-invasive test here, yet **relevant abnormalities are found in under 1 %**, and it turns up **incidental findings such as mesenteric lymphadenitis needing no intervention**.\n- **Alarm signals present → pursue organic causes:** stool and laboratory tests, abdominal imaging, endoscopy → specific treatment.\n- **No alarm signals → working diagnosis of a pain-related FGID**, subtype classified → manage → **REASSESS. No response after 4 weeks → reconsider an organic cause.**\n- **The aim: identify any serious cause WITHOUT unnecessary investigation, while reassuring child and parents.** **Check growth**, and **inspect the perineum for anal fissures**.\n\nSrc: L24 slides 42–73",
        "qs": []
      }
    ]
  },
  "neuro-stroke": {
    "intro": "Small chapter, and the questions are about recognition: which bleed, from which mechanism, and that a child with focal signs needs imaging urgently. Sickle cell is the aetiology most often planted in a vignette.",
    "sections": [
      {
        "id": "neuro-1",
        "w": "must",
        "h": "Intracranial haemorrhage — three bleeds, three mechanisms",
        "body": "### Extradural haemorrhage\n- **Cause:** **direct head trauma**, often with a **skull fracture** — **tearing of the middle meningeal artery**.\n- **Bleeding:** arterial **or** venous, into the extradural space.\n- **Hallmark:** a **lucid interval** until the conscious level deteriorates.\n- **Then:** seizures as the haematoma enlarges.\n- **Focal signs:** **dilatation of the ipsilateral pupil**, **paresis of the contralateral limbs**, unilateral or bilateral **VIth nerve paresis**.\n- **In young children:** the initial presentation may be **anaemia and shock**.\n- **Management:** CT scan · **correct hypovolaemia** · **urgent evacuation** and arrest of the bleeding.\n\n### Subdural haematoma\n- **Mechanism:** **tearing of the bridging veins** as they cross the subdural space.\n- **Characteristic lesion of:** **non-accidental injury** — shaking or direct trauma in infants and toddlers.\n- **Retinal haemorrhages:** typical of **shaking injury**.\n- **Also seen after:** a fall from a considerable height; rarely with **brain shrinkage from atrophy or over-drainage of hydrocephalus**.\n\n### Subarachnoid haemorrhage\n- **Frequency:** **much more common in adults** than in children.\n- **Presentation:** severe headache of **rapid onset — “thunderclap headache”** — with vomiting, confusion, lowered consciousness or coma, and sometimes seizures.\n- **Diagnosis:** CT usually identifies blood in the CSF; **occasionally a lumbar puncture is required**.\n- **Cause:** often an **aneurysm or arteriovenous malformation**, identified on **MR angiography, CT or conventional angiography**.\n- **Treatment:** neurosurgical **or** interventional radiology.\n\n### The discrimination\n\n|Feature|Extradural|Subdural|Subarachnoid|\n|---|---|---|---|\n|**Vessel**|**Middle meningeal artery**|**Bridging veins**|**Aneurysm / AVM**|\n|**Typical setting**|Head trauma + skull fracture|**Non-accidental injury, shaking**|Rare in childhood|\n|**Classic clue**|**Lucid interval**|**Retinal haemorrhages**|**Thunderclap headache**|\n|**Pupil**|**Ipsilateral dilatation**|—|—|\n|**First test**|CT|CT|CT, then **LP if negative**|\n\nSrc: L53 slides 2–7",
        "qs": []
      },
      {
        "id": "neuro-2",
        "w": "must",
        "h": "Childhood stroke — the aetiology grid",
        "body": "**The rule that outranks everything else here:** **the acute onset of a focal neurologic deficit in a child is stroke until proven otherwise.**\n\n**Cerebrovascular disease splits three ways:** **vascular · thromboembolic · haemorrhagic disease.**\n\n### The eight aetiological groups\n\n|Group|Examples|\n|---|---|\n|**Cardiac**|**Congenital cyanotic heart disease**, **Fallot tetralogy**, endocarditis|\n|**Haematological**|**Sickle cell disease**; deficiencies of antithrombotic factors, e.g. **protein S**|\n|**Postinfective**|Following **varicella** or other viral infections|\n|**Inflammatory**|Damage to vessels in autoimmune disease, e.g. **SLE**|\n|**Metabolic / genetic**|**Homocystinuria**; mitochondrial disorders, e.g. **MELAS** (myoclonic epilepsy, lactic acidosis and stroke); **CADASIL** (cerebral autosomal dominant arteriopathy with subcortical infarcts and leukoencephalopathy)|\n|**Vascular malformations**|**Arteriovenous malformation**; **moyamoya disease**, a progressive involution of the cerebral arteries|\n|**Trauma**|**Dissection of the carotid or vertebral arteries**|\n\n### Presentation is decided by the vascular territory\n- **Anterior circulation:** internal carotid, anterior cerebral and **middle cerebral arteries** → **contralateral hemiparesis**.\n- **Posterior circulation:** **vertebrobasilar arteries** → **visual and/or cerebellar signs**.\n- **Commonest focal presentation:** **hemiparesis**.\n- **Also:** acute **visual, speech, sensory or balance** deficits.\n\n*None of these underlying diseases is taught as an entity in any paediatrics deck — they are named here exactly as the aetiology slide names them.*\n\nSrc: L53 slides 8–11",
        "qs": []
      },
      {
        "id": "neuro-3",
        "w": "must",
        "h": "Childhood stroke — investigation and treatment",
        "body": "### Investigations\n- **MRI** — the imaging of choice.\n- **MR angiogram and MR venography.**\n- **Echocardiography** — for the cardiac group.\n- **Thrombophilia and vasculitis screen.**\n- **Metabolic tests** for **homocysteine** and **mitochondrial cytopathy**.\n\n### Acute treatment\n**No thrombolysis:** given the **inadequate safety data, emergency thrombolysis is not recommended for children**. This is the single most examinable sentence in the deck.\n\n**Antithrombotics, early:** **early initiation of antithrombotic strategies is paramount to prevent early reinfarction** — **anticoagulation with heparins**, or **antiplatelet strategies, usually aspirin**, depending on the suspected cause.\n\n**Hyperacute neuroprotection — five essentials:**\n- **Control of blood glucose.**\n- **Temperature control.**\n- **Seizure control.**\n- **Maintenance of cerebral perfusion pressure.**\n- **Early management of cerebral oedema.**\n\n### Disease-specific treatment\n- **Sickle cell disease:** **transfusion therapy**.\n- **Vasculitis:** **immunosuppression**.\n- **Moyamoya:** **revascularization surgery**.\n\n### Long-term — secondary prevention\n- **Arteriopathy:** **antiplatelet therapy**.\n- **Cardiogenic causes:** **anticoagulation**.\n- **Rehabilitation:** **multimodal and family-centred**, targeting motor deficits, language and intellectual impairment, behavioural and social disability, and **epilepsy**.\n\nSrc: L53 slides 12–14",
        "qs": []
      }
    ]
  },
  "neurological": {
    "intro": "Classification carries the questions: focal or generalised, aware or not. Febrile seizures are asked as simple versus complex and what that changes. Expect West and Lennox-Gastaut by their triads, the status epilepticus clock as a timed algorithm, and drug choice by seizure type.",
    "sections": [
      {
        "id": "neuro-4",
        "w": "must",
        "h": "Febrile seizures — simple versus complex",
        "body": "**Definition:** an **epileptic seizure accompanied by a fever in the absence of intracranial infection**, between the ages of **5 months and 6 years**.\n\n**Four predisposing features:** **genetic predisposition** · an affected **first-degree relative** · **early in a viral infection** · **while the temperature is rising rapidly**.\n\n### Simple versus complex\n\n|Feature|Simple|Complex|\n|---|---|---|\n|**Pattern**|**Generalized tonic-clonic**|**Focal**|\n|**Duration**|**Brief**|**Prolonged**|\n|**In the same illness**|**Not repeated**|**Repeated**|\n|**Postictal**|**No post-ictal events**|—|\n|**Later epilepsy**|**1–2 %** — the same as for all children|**4–12 %**|\n\n**Four features predicting RECURRENCE, and they are the same list for both types:** the **younger the child** · the **shorter the duration of the illness** before the fit · the **lower the temperature** at the time of the seizure · a **positive family history**.\n\n**They do not cause brain damage.** The deck states this explicitly of simple febrile seizures.\n\n### Management — six items\n- **Treat the cause of the fever.**\n- **Lumbar puncture** — to exclude the intracranial infection the definition excludes.\n- **Parents:** need **reassurance and information**.\n- **Antipyretics.**\n- **Rescue therapy** — **buccal midazolam** is the agent this lecturer names for a prolonged seizure.\n- **Oral prophylactic antiepileptic drugs** — the slide names none; **intermittent oral clobazam or continuous valproate** are the conventional choices *(agents not in course material)*.\n\nSrc: L54 slides 7–12",
        "qs": []
      },
      {
        "id": "neuro-5",
        "w": "must",
        "h": "Why a child fits — and what is not a seizure at all",
        "body": "### The aetiological classification\n- **Genetic (70–80 %):** also called **“idiopathic”** — caused by **alleles at several loci together rather than a single gene**, so inheritance is **“complex”**.\n- **Structural / metabolic:** cerebral **dysgenesis or malformation** · cerebral **vascular occlusion** · cerebral damage (**congenital infection, hypoxic-ischaemic encephalopathy, intraventricular haemorrhage or ischaemia**) · **cerebral tumour** · **neurodegenerative disorders** · **neurocutaneous syndromes, e.g. tuberous sclerosis**.\n\n### Acute symptomatic seizures\n**The definition:** due to **any cortical brain injury or insult, at the time of the trauma or illness** — not epilepsy.\n- **Structural insults:** **stroke, traumatic brain injury, intracranial infection**.\n- **Metabolic insults:** **hypoglycaemia, hypocalcaemia, hypomagnesaemia, hyponatraemia / hypernatraemia**.\n- **Poisons and toxins.**\n\n### Non-epileptic paroxysmal disorders — convulsive syncope\n**Remember not all seizures are epileptic.** The deck says an **ECG** is mandatory, because **missing convulsive syncope due to an arrhythmia such as long-QT syndrome can be an avoidable fatality**.\n\n- **Expiratory apnoea syncope:** the **“blue breath-holding spells”**.\n- **Vasovagal syncope:** often predominantly **vasodepressor**, but can be predominantly **cardioinhibitory (reflex asystolic syncope)**, or mixed.\n- **Hypovolaemic syncope:** haemorrhage, dehydration, **anaphylaxis**.\n- **Cardiac syncope:** **prolonged Q-T syndrome**.\n\n*Meningitis, encephalitis and raised intracranial pressure are taught in full in the `infection` chapter — this deck names them only as the infection the febrile-seizure definition excludes.*\n\nSrc: L54 slides 34, 60 (both recovered as images)",
        "qs": []
      },
      {
        "id": "neuro-6",
        "w": "must",
        "h": "Epilepsy — the definition and the classification of seizures",
        "body": "**Epilepsy:** **two or more unprovoked seizures 24 hours apart.**\n\n**Epileptic seizure:** **abnormal excessive neuronal electrical activity in the brain**, producing **sudden onset and offset, transient recurrent neurological symptoms and/or signs**.\n\n**The localising principle:** **the site of origin of the abnormal neuronal firing determines the symptoms produced** — motor cortex involved, motor seizure.\n\n**Numbers:** incidence **0.05 %** — **less common during the first year of life** — and prevalence **0.5 %**. **Most epilepsy is “genetic” with complex inheritance.**\n\n### The classification tree\n\n|Focal|Generalized|\n|---|---|\n|**Aware**|**Absence**|\n|**Unaware**|**Myoclonic**|\n|(focal to bilateral)|**Tonic-clonic**|\n\n### The same thing under the older ILAE names\n- **Partial (focal) seizures:** **simple partial** (motor, sensory, autonomic or psychic signs; **consciousness is not impaired**) · **complex partial** (**consciousness is impaired**) · **partial seizures evolving to secondarily generalized seizures**.\n- **Primarily generalized:** **absence (petit mal)** · **myoclonic** · **clonic** · **tonic** · **tonic-clonic (grand mal)** · **atonic**.\n- **Unclassified:** **neonatal seizures** · **infantile spasms**.\n\n*The two naming systems describe the same three focal categories: aware = simple partial, unaware = complex partial, focal to bilateral = secondarily generalised (mapping not in course material).*\n\nSrc: L54 slides 17–21, 14 (recovered as an image)",
        "qs": []
      },
      {
        "id": "neuro-7",
        "w": "high",
        "h": "Focal seizures — by awareness and by lobe",
        "body": "**Onset:** in a **neural network limited to one cerebral hemisphere**, originating in a **relatively small group of dysfunctional neurones**. Manifestations depend on **where the discharge starts and where it moves to**.\n\n**Two general features:** may be **heralded by an aura** — the sensory symptoms, which **reflect the site of origin** — and **may or may not** be associated with a change in consciousness or evolve to a generalised tonic-clonic seizure.\n\n### Focal aware\n- **Consciousness:** the patient **is conscious**.\n- **Features:** **motor** (eye twitches), **sensory** (numbness), **visual** or **psychic** changes.\n\n### Focal unaware\n- **The aura:** immediately before loss of consciousness — an **unusual abdominal sensation**, **olfactory or visual hallucinations**, a **sense of fear**.\n- **Then:** impaired consciousness.\n- **Automatism:** **repeated involuntary movements lasting 2–5 minutes** — **lip smacking**.\n- **Afterwards:** **postictal confusion for several minutes with amnesia except for the aura.**\n\n### Focal to bilateral\n**The mechanism:** during the partial seizure the **epileptiform discharge spreads from the original focus throughout the cortex**, causing a **generalized tonic-clonic convulsion**.\n\n### Semiology by lobe\n- **Frontal:** **motor phenomena**.\n- **Temporal:** **auditory or sensory (smell or taste) phenomena**.\n- **Occipital:** **positive or negative visual phenomena**.\n- **Parietal:** **contralateral altered sensation (dysaesthesia)**.\n\nSrc: L54 slides 22–25, 33 (recovered as an image)",
        "qs": []
      },
      {
        "id": "neuro-8",
        "w": "must",
        "h": "Generalized seizures — the five types",
        "body": "**Four defining features:** **onset in both hemispheres** · **loss of consciousness if longer than 3 seconds** · **no warning** · **symmetrical seizure** with a **bilaterally synchronous discharge on EEG**.\n\n### Absence\n- **The event:** **brief loss of consciousness** — she **stares blankly into space**, with **eye rolling and cessation of activity for seconds**.\n- **What is absent:** **no loss of posture and no aura** — the discriminator against tonic-clonic and focal unaware.\n- **Frequency:** may be repeated **50–100 times a day**.\n- **Recovery:** **immediately after the seizure the patient is fully alert** — no postictal state.\n- **Provocation:** may be followed by, and **precipitated by, hyperventilation**.\n- **Consequence:** **absence seizures impair learning → academic difficulty.**\n\n### Tonic-clonic\n- **Tonic phase:** **tonic contraction of muscles, limb extension and arching of the back**, with an **epileptic cry**, **pallor or cyanosis**. Children **may fall and injure themselves**; they **do not breathe**.\n- **Clonic phase:** **limb jerking and eye rolling**, breathing irregular, cyanosis persists, saliva accumulates.\n- **Three classic accompaniments:** **tongue biting · urinary incontinence · frothing from the mouth.**\n- **Postictal:** **coma, then confusion and amnesia**, consciousness regained gradually **over several hours**.\n\n### The other three\n- **Tonic:** a **generalised increase in tone**.\n- **Myoclonic:** **brief, shock-like, repetitive jerks** of a muscle or group of muscles — *myo* = muscle, *clonus* = **rapidly alternating contraction and relaxation**. **Physiological non-epileptic myoclonus** occurs in **hiccoughs** and on passing through **stage II sleep**.\n- **Atonic:** often **combined with a myoclonic jerk**, followed by **transient loss of muscle tone** causing a **sudden fall to the floor or drop of the head**.\n\nSrc: L54 slides 26–31, 33 (recovered as an image)",
        "qs": []
      },
      {
        "id": "neuro-9",
        "w": "must",
        "h": "Epileptic encephalopathies, and West syndrome",
        "body": "**Definition (ILAE):** a condition in which **the epileptiform EEG abnormalities themselves are believed to contribute to a progressive disturbance**. They are a **heterogeneous group of epilepsy syndromes with severe cognitive and behavioural disturbance**, varying in age of onset, developmental outcome, aetiology, neuropsychological deficits, EEG pattern, seizure type and prognosis — but **all may significantly affect neurological development**.\n\n**The nine named:** early myoclonic encephalopathy · **early infantile epileptic encephalopathy (Ohtahara syndrome)** · **infantile spasms (West syndrome)** · **severe myoclonic epilepsy in infancy (Dravet syndrome)** · migrating partial seizures in infancy · myoclonic status in non-progressive encephalopathies · **Lennox-Gastaut syndrome** · **Landau-Kleffner syndrome** · **epilepsy with continuous spike-waves during slow wave sleep (CSWS)**.\n\n### West syndrome — the triad\n**Epileptic spasms · interictal EEG hypsarrhythmia (the deck spells it “hypsarhythmia”) · developmental regression.** **The diagnosis can still be made if one of the three is missing.**\n\n**Age:** **onset 3–12 months**; **90 % under one year**, range one day to 4.5 years; **peak 3–7 months (50–77 %)**; **after 18 months rare**.\n\n**The spasm:** **violent flexor spasms of head, trunk and limbs followed by extension of the arms**, lasting **1–2 seconds**, in **bursts of 20–30**, **often on waking** or many times a day. **Three types: flexor · extensor · mixed** — the **salaam seizures**, large myoclonic jerks.\n\n**Two traps in the history:** it **may be misinterpreted as colic**, and **social interaction often deteriorates — a useful marker**.\n\n**Three aetiological classes:**\n- **Symptomatic:** an **identified aetiology and/or significant developmental delay** at onset. **Most have an underlying neurological cause.**\n- **Cryptogenic:** **no known aetiology and normal development** at onset.\n- **Genetic:** an abnormality in the **short arm of chromosome X**.\n\n**Treatment:** **hormonal therapy, mainly corticotropin (ACTH)**, and **antiepileptic medication, mainly vigabatrin** · **pyridoxine** · also **valproate, zonisamide, topiramate** · **ketogenic diet**.\n\n**Outcome:** **good initial response in 60–70 %**, but **unwanted side effects and frequent relapses**; **most lose skills and develop learning disability and continuing epilepsy**.\n\nSrc: L54 slides 32–41; slide 35 (recovered as an image)",
        "qs": []
      },
      {
        "id": "neuro-10",
        "w": "must",
        "h": "The epilepsy syndromes grid",
        "body": "**Why syndromes matter:** the ILAE recognises **over twenty electro-clinical epilepsy syndromes**, each defined by a **distinctive combination of clinical features, signs and symptoms, and electrographic patterns**. The classification **provides prognostic, therapeutic and genetic information**.\n\n|Syndrome|Onset|Seizure pattern|Comments|\n|---|---|---|---|\n|**Infantile spasms (West)**|**3–12 months**|Flexor spasms in bursts, on waking|EEG **hypsarrhythmia**; **vigabatrin ± corticosteroids** — in full in neuro-9|\n|**Lennox-Gastaut**|**1–3 years**|**Atonic, atypical absences, tonic in sleep**|EEG **slow 1–3 Hz spike-wave**; **prognosis poor** — in full in neuro-11|\n|**Childhood absence epilepsy**|**4–12 years**|**Momentary unresponsive stare with motor arrest**, minimal eyelid, hand or mouth twitching, **sudden onset, under 30 s**. **No recall** except realising something was missed — may say **“pardon”**. Developmentally normal. **Only 2 % of childhood epilepsy**|**Two-thirds female.** **Induced by hyperventilation** — blowing a windmill 2–3 min, useful during EEG. EEG **fast generalised 3–4 Hz spike and wave**, bilaterally synchronous. **80 % remission in adolescence**; a few evolve to juvenile absence or JME|\n|**Benign rolandic (BCECTS)**|**4–10 years**|**Tonic-clonic seizures in sleep**, or **simple focal seizures with awareness** of abnormal feelings **in the tongue** and **distortion of the face** — the rolandic (centro-temporal) area. **Jacksonian march** to other areas|**15 % of childhood epilepsies.** EEG **focal sharp waves from the rolandic area**, more prominent in sleep. **May not require AEDs. Remits in adolescence**, usually within two years|\n|**Panayiotopoulos**|**1–5 years**|**Autonomic features with vomiting and skin pallor**, unresponsive staring **in sleep**, head and eye deviation, sometimes progressing to a convulsive seizure. **Usually nocturnal, over 5 min**; **one-third to one-half last over 30 min**|**5 % of childhood epilepsies.** EEG **posterior focal sharp waves and occipital discharges when the eyes are shut**. **Remits in childhood.** Some have specific learning difficulties|\n|**Juvenile absence**|**10–20 years**|**Absences and generalised tonic-clonic seizures**, often with **photosensitivity**. **Learning unimpaired**|Characteristic EEG. Response good but **lifelong — remission unlikely**|\n|**Juvenile myoclonic (JME)**|**10–20 years**|**Myoclonic jerks in the first hour after waking** — classically **throwing drinks or cereal about in the morning**; **absences** often precede, from the end of the first decade; **GTCS on awakening**. Learning unimpaired|**Often not recognised by referring clinicians.** Characteristic EEG. Response good but **lifelong**|\n\n*Deck text and this table differ on BCECTS — the text says 10–20 % and a mean onset of 7–9 years, the table 15 % and a range of 4–10. Compatible; both written.*\n\n**Typical versus atypical absence:** typical are **brief staring episodes with behavioural arrest, tens to hundreds daily**, with **generalized 3 Hz spike-and-slow-wave**. **Atypical** absences have a **less clear time of onset and resolution** and are **less complete periods of activity arrest**, with impaired responsiveness or other behavioural change. **Most effective AEDs: ethosuximide, valproic acid, lamotrigine, clonazepam.**\n\n**Benign focal epilepsies in infancy:** a number of syndromes, **both familial and sporadic**, are described in infancy.\n\nSrc: L54 slides 42–52, 35 (recovered as an image)",
        "qs": []
      },
      {
        "id": "neuro-11",
        "w": "high",
        "h": "Lennox-Gastaut syndrome in detail",
        "body": "**Age:** usually presents **before eight years**, **most commonly between three and five**. Some begin **before one year**, and **many cases evolve from other epilepsy syndromes, particularly West syndrome or infantile spasms** — **up to 25 % have a history of infantile spasms**.\n\n### The three defining features\n- **Multiple seizure types:** particularly **tonic and atypical absence**, but also **atonic and myoclonic**. **Periods of non-convulsive status epilepticus occur in most cases at some stage.**\n- **The EEG:** a **slow (less than 2.5 Hz) spike-wave pattern** on the interictal EEG, **generalized** and usually **highest amplitude in the frontal region** — also called an **“atypical spike and wave” pattern**.\n- **Intellectual disability:** occasionally **progressive**, with or without other neurologic abnormalities. **Psychotic symptoms are common.** **Neurodevelopment is often normal before the first seizure.**\n\n### Causes\n**Genetic disorders · neurocutaneous syndromes (e.g. tuberous sclerosis) · hypoxic-ischemic insults · meningitis · head injuries.** **Approximately 40 % have an unknown aetiology**, though these children are increasingly found to have **chromosomal syndromes or de novo mutations**.\n\n### Treatment\n- **Drugs that may help:** **valproate, lamotrigine, topiramate, rufinamide, felbamate, clobazam**.\n- **Diet:** the **ketogenic diet**.\n- **Surgery:** **corpus callosotomy**, or lesional epilepsy surgery.\n\n*The EEG frequency is the fastest way to separate the two encephalopathies: hypsarrhythmia in West, 1–3 Hz slow spike-wave in Lennox-Gastaut, against the 3–4 Hz fast spike-wave of childhood absence epilepsy.*\n\nSrc: L54 slides 43–46",
        "qs": []
      },
      {
        "id": "neuro-12",
        "w": "must",
        "h": "Diagnosing epilepsy — history first, EEG second",
        "body": "**The primary instrument:** the diagnosis is **primarily based on a detailed history from the child and eyewitnesses, substantiated by a video if available** — **increasingly provided on mobile phones**.\n\n**In the history:** any **specific triggers**, and whether the child has **impairments**, since there may be **educational, psychological or social problems**.\n\n**On examination:** check for **skin markers for a neurocutaneous syndrome** and for **neurological abnormalities**. **Although epilepsy is usually genetic (idiopathic), it may be the presentation or a complication of an underlying neurological disorder.**\n\n### Investigations\n- **ECG — do it first, and the reason is stated:** **not all seizures are epileptic**, and **missing convulsive syncope due to an arrhythmia such as long-QT syndrome can be an avoidable fatality**.\n- **EEG.**\n- **Structural imaging:** **MRI and CT are generally required routinely** for childhood epilepsies **unless** there is a characteristic history of **childhood absence epilepsy, juvenile absence epilepsy, juvenile myoclonic epilepsy or childhood rolandic epilepsy** — the four that need no scan.\n- **Functional imaging:** **PET** and **SPECT**.\n- **Metabolic investigations:** indicated if there is **developmental arrest or regression**, or seizures **related to feeds or fasting**, and considered in epilepsies (**not febrile seizures**) **starting in the first 2 years of life**.\n- **Genetic tests:** increasingly useful, especially in **intractable epilepsies with developmental arrest or delay** — the **epileptic encephalopathies**.\n\n### Before treatment is decided\n**Management begins with diagnosis, but this is often uncertain initially**, so the **uncertainty needs explaining** and a plan put in place **to ensure the child’s safety** until more information arrives. A **specialist epilepsy nurse** may provide education and continuing advice on lifestyle.\n\n**The decision whether to treat** rests on **the risk of recurrence, how dangerous or impairing, and how upsetting further seizures would be** in the context of that child’s life.\n\nSrc: L54 slides 53–59",
        "qs": []
      },
      {
        "id": "neuro-13",
        "w": "must",
        "h": "Antiepileptic drugs — choice, principles and side effects",
        "body": "### Six principles\n- **Match the drug to the seizure:** choose an appropriate AED **for the seizure and the epilepsy**.\n- **The wrong AED harms:** **carbamazepine can make absence and myoclonic seizures worse.**\n- **Monotherapy before polytherapy.**\n- **All AEDs have potential unwanted effects**, to be discussed with child and parent.\n- **AED levels are not measured routinely** — except to check compliance.\n- **Stopping:** therapy **may be discontinued after 2 years free of seizures**, but should **usually be continued indefinitely in juvenile absence epilepsy or juvenile myoclonic epilepsy**.\n\n**Rescue therapy:** children with **convulsive seizures with loss of consciousness lasting over 5 minutes** are **given rescue therapy to keep with them — usually buccal midazolam.**\n\n### Drug of choice by seizure type\n\n|Seizure type|First-line|Second-line|\n|---|---|---|\n|**Tonic-clonic**|**Valproate, carbamazepine**|Clobazam, levetiracetam, topiramate|\n|**Absence**|**Valproate, ethosuximide**|Clobazam, levetiracetam, topiramate|\n|**Myoclonic**|**Valproate, levetiracetam**|Clobazam, piracetam, clonazepam|\n|**Focal**|**Carbamazepine, valproate, levetiracetam, lamotrigine**|Clobazam, topiramate, lacosamide, gabapentin|\n\n### Adverse effects\n\n|Drug|Adverse effects|\n|---|---|\n|**Valproate**|**Weight gain, hair loss, teratogenic**, rare **idiosyncratic liver failure**|\n|**Carbamazepine**|**Rash, ataxia**, **liver enzyme induction** — can reduce the effect of oral contraception|\n|**Lamotrigine**|**Rash**, insomnia, ataxia|\n|**Ethosuximide**|**Nausea and vomiting**|\n|**Levetiracetam**|**Irritability**|\n|**Gabapentin**|Insomnia|\n|**Topiramate**|**Weight loss, depression, paraesthesia**|\n|**Vigabatrin**|**Irritability; visual field restriction limits its use mainly to infantile spasms**|\n\n### For intractable epilepsy\n**Ketogenic (low-carb, fat-based) diet · vagal nerve stimulation · epilepsy surgery.**\n\nSrc: L54 slides 60–65; slides 66–67 recovered as images",
        "qs": []
      },
      {
        "id": "neuro-14",
        "w": "must",
        "h": "Status epilepticus — the timed algorithm",
        "body": "**Definition (ILAE):** either **5 or more minutes of continuous seizure activity**, **or recurrent seizures without regaining baseline consciousness**.\n\n### 0–5 minutes — stabilization phase\n- **Stabilize:** **airway, breathing, circulation, disability** — neurologic exam.\n- **Time the seizure from its onset**, monitor vital signs.\n- **Oxygen** by nasal cannula or mask; **consider intubation** if respiratory assistance is needed.\n- **Initiate ECG monitoring.**\n- **Finger-stick glucose:** if **under 60 mg/dl** — **children ≥ 2 years 2 ml/kg D25W IV**, **children under 2 years 4 ml/kg D12.5W IV**.\n- **IV access:** collect electrolytes, haematology, toxicology screen and anticonvulsant drug levels.\n\n### 5–20 minutes — initial therapy\n**A benzodiazepine is the initial therapy of choice.** Choose **one** of three equivalent first-line options:\n- **IM midazolam** — **10 mg** for over 40 kg, **5 mg** for 13–40 kg, single dose.\n- **IV lorazepam** — **0.1 mg/kg/dose**, max 4 mg, may repeat once.\n- **IV diazepam** — **0.15–0.2 mg/kg/dose**, max 10 mg, may repeat once.\n\n**If none of the three is available:** **IV phenobarbital 15 mg/kg** · **rectal diazepam 0.2–0.5 mg/kg**, max 20 mg · **intranasal or buccal midazolam**.\n\n### 20–40 minutes — second therapy\n**There is no evidence-based preferred second agent.** Choose one, **as a single dose**: **IV fosphenytoin 20 mg PE/kg** (max 1500 mg PE) · **IV valproic acid 40 mg/kg** (max 3000 mg) · **IV levetiracetam 60 mg/kg** (max 4500 mg). If none is available, **IV phenobarbital 15 mg/kg** if not already given.\n\n### 40–60 minutes — third therapy\n**No clear evidence guides this phase.** Choices: **repeat second-line therapy**, or **anaesthetic doses of thiopental, midazolam, pentobarbital or propofol — all with continuous EEG monitoring**.\n\n*At every decision point, if the seizure has stopped and the patient is at baseline, revert to symptomatic medical care.*\n\nSrc: L54 slide 68; slide 70 recovered as an image (AES 2016 algorithm)",
        "qs": []
      }
    ]
  },
  "neuro-nm": {
    "intro": "Every question starts with central or peripheral, then localises to one of four sites. Duchenne, SMA and Guillain-Barré are the named entities. Acute flaccid paralysis is asked as a three-way discrimination — polio, GBS, transverse myelitis.",
    "sections": [
      {
        "id": "neuro-15",
        "w": "must",
        "h": "Motor control — the first question is central or peripheral",
        "body": "**The pathway:** movement is **governed by cerebral control centres**, **modulated by sensory inputs** — **joint position, touch, vision, vestibular, auditory** — and signals pass **brainstem → spinal cord → anterior horn → peripheral nerves → muscles**.\n\n### The three central motor control centres\n- **Motor cortex (pre-central gyrus):** **initiates voluntary movement**, via the **corticospinal (pyramidal) tract** — brain to lower motor neurone.\n- **Basal ganglia (deep grey matter):** **stores motor patterns, enables automatic movement**.\n- **Cerebellum:** **controls posture, balance, speech, coordination and movement**.\n\n### Corticospinal (pyramidal) tract disorder\n- **Weakness in characteristic patterns:** **shoulder adduction, elbow flexion, forearm pronation**; **hip and knee extension, ankle plantar flexion**.\n- **Tone and reflexes:** **spasticity, brisk reflexes, extensor plantar responses**.\n- **And:** **loss of fine finger movements**.\n- **The commonest cause named:** **cerebral palsy**.\n\n### Basal ganglia disorder\n**Difficulty in initiating movements** · **dystonia** · **chorea — jerky, involuntary movements** · **athetosis — writhing movements**.\n\n### Cerebellar disorder\n**Difficulty in holding posture:** an **ataxic wide-based gait** · **dysmetria** · **dysdiadochokinesis** · **nystagmus** · **dysarthria** · a **Romberg sign if sensory involvement is present**.\n\n*A positive Romberg points away from the cerebellum and towards the sensory pathway — a cerebellar patient is unsteady with the eyes open.*\n\n*Todd’s paresis, named in the corticospinal cause list, is transient focal weakness for minutes to hours after a focal seizure, mimicking a stroke (definition not in course material).*\n\nSrc: L55 slides 2–13",
        "qs": []
      },
      {
        "id": "neuro-16",
        "w": "high",
        "h": "Causes of the three central motor syndromes",
        "body": "|Site|Causes|\n|---|---|\n|**Corticospinal tract**|**Cerebral dysgenesis** (e.g. neuronal migration disorder) · **acquired brain injury** · **global hypoxia-ischaemia** · **stroke, tumours, ADEM** · **Todd’s paresis, hemiplegic migraine**|\n|**Basal ganglia**|**Severe hypoxia-ischaemia** · **carbon monoxide poisoning** · **post-bypass surgery chorea** · **rheumatic fever (post-streptococcal chorea)** · **mitochondrial disease** · **Wilson disease** · **Huntington disease**|\n|**Cerebellum**|**Genetic: Friedreich ataxia, ataxia telangiectasia** · **alcohol or drug intoxication** (e.g. carbamazepine) · **post-viral cerebellitis** (e.g. varicella) · **posterior fossa tumours** (e.g. medulloblastoma)|\n\n### Ataxia — unsteady gait, and it is not always the cerebellum\n**Five sites can produce it:** **cerebellar ataxia** · **inner ear disorders** · **sensory nerve affection** · **dorsal column affection** · **muscle weakness**.\n\n### Causes of cerebellar ataxia specifically\n- **Toxins:** **ethanol**.\n- **Drugs:** **carbamazepine, lamotrigine**.\n- **Post-infectious cerebellitis:** **varicella**.\n- **Posterior fossa tumours.**\n- **Genetic:** **Friedreich ataxia, ataxia telangiectasia**, and the **hereditary ataxias**.\n- **Mitochondrial disease.**\n- **Miller Fisher syndrome** — a **variant of Guillain-Barré syndrome**.\n\n*The drug list is the practical one: an ataxic child on an AED is ataxic because of the AED until proved otherwise, and both named drugs appear again in the AED side-effect table.*\n\nSrc: L55 slides 14–20",
        "qs": []
      },
      {
        "id": "neuro-17",
        "w": "high",
        "h": "Friedreich ataxia and ataxia telangiectasia",
        "body": "### Friedreich ataxia\n- **Inheritance:** **autosomal recessive**.\n- **Core signs:** **ataxia, dysarthria, pes cavus, distal wasting**.\n- **Sensory:** **loss of joint position and vibration sense** — the dorsal columns.\n- **The paradox:** a **positive Babinski** despite the peripheral features — pyramidal involvement alongside the ataxia.\n- **Systemic:** **optic atrophy, cardiomyopathy, diabetes**.\n- **Life expectancy:** **~40–50 years**.\n\n### Ataxia telangiectasia\n- **Inheritance and defect:** **autosomal recessive**, a **DNA repair defect**.\n- **In toddlers:** **mild motor developmental delay** and **oculomotor incoordination**.\n- **Then:** **difficult balance and coordination**.\n- **The eponymous sign:** **conjunctival and skin telangiectasia by age 4** — it appears AFTER the ataxia, not with it.\n- **Immune:** **immunodeficiency** with **increased susceptibility to infection**.\n- **Malignancy:** **increased cancer risk — lymphoma, ALL**.\n- **Course:** **subsequent deterioration → wheelchair**.\n\n### The discrimination\n\n|Feature|Friedreich|Ataxia telangiectasia|\n|---|---|---|\n|**Inheritance**|**AR**|**AR**|\n|**Defect**|—|**DNA repair**|\n|**Foot**|**Pes cavus**|—|\n|**Eye**|**Optic atrophy**|**Conjunctival telangiectasia by age 4; oculomotor incoordination**|\n|**Systemic**|**Cardiomyopathy, diabetes**|**Immunodeficiency, lymphoma and ALL risk**|\n|**Plantars**|**Extensor (Babinski)**|—|\n\nSrc: L55 slides 21–23",
        "qs": []
      },
      {
        "id": "neuro-18",
        "w": "must",
        "h": "The neuromuscular child — four sites, and how each presents",
        "body": "**Definition:** a **heterogeneous group of diseases caused by affection of any part of the lower motor neuron pathway**.\n\n**Two classifications:** **anatomical** — by site of dysfunction — and **etiological**: **hereditary**, or **acquired** (infection, inflammatory, metabolic).\n\n### The four sites, and what lives at each\n\n|Site|Diseases|\n|---|---|\n|**Anterior horn cell**|**Spinal muscular atrophy · poliomyelitis · acute flaccid myelitis (enterovirus D68)**|\n|**Peripheral nerve**|**Hereditary motor sensory neuropathies (Charcot-Marie-Tooth) · Guillain-Barré syndrome · Bell palsy**|\n|**Neuromuscular junction**|**Myasthenia gravis** (and congenital myasthenic syndromes)|\n|**Muscle**|**Muscular dystrophies** (Duchenne, Becker, limb-girdle, congenital) · **inflammatory myopathies** (benign acute myositis, polymyositis, dermatomyositis) · **myotonic disorders** · **metabolic myopathies** · **congenital myopathies**|\n\n**Common clinical features, whatever the site:** **weakness (progressive or static)** · **floppiness (hypotonia)** · **delayed motor milestones** · **gait abnormality or unsteadiness** · **easy fatiguability** · **muscle pain or cramps — suggesting a metabolic myopathy**.\n\n### Presentation tells you the site\n- **Myopathy:** **waddling gait · hyperlordosis · positive Gowers’ sign** — proximal muscle weakness.\n- **Neuropathy:** **distal wasting and weakness more prominent** · **pes cavus** · **impaired pain, temperature or touch** if sensory · **loss of deep tendon reflexes**.\n- **Anterior horn cell:** **signs of denervation** · **prominent weakness** · **absent reflexes** · **tongue fasciculations** · **more prominent wasting** · **more prominent scoliosis**.\n- **Neuromuscular junction:** **easy progressive fatiguability** · **diurnal worsening through the day** · **bulbar affection** · **ptosis, worse by the end of the day**.\n\n**Gowers’ sign:** **the need to turn prone to rise to standing from a supine position**, **usually after 3 years of age**, indicating **proximal muscle weakness**.\n\nSrc: L56 slides 2–9; L55 slides 24–33; L56 slide 4 recovered as an image",
        "qs": []
      },
      {
        "id": "neuro-19",
        "w": "high",
        "h": "Investigating a neuromuscular disorder",
        "body": "**The approach:** **detailed history · meticulous clinical examination · tailored investigations.** **History and examination may provide useful clues for localization and diagnosis** — and **diagnosis has been made easier by advances in genetic testing**.\n\n### Nine items in the history\n**Pregnancy and delivery (fetal movements, delivery pattern)** · **age of onset** · **onset of weakness — sudden or gradual** · **course — progressive or stationary** · **pattern — proximal or distal** · **any periodic pattern** · **bulbar, ocular or respiratory involvement** · **associated sensory or sphincteric affection** · **family history**.\n\n### Nine items in the examination\n**Muscle bulk — distal atrophy, calf pseudohypertrophy** · **tone and power** · **deep tendon reflexes** · **gait and the test for Gower sign** · **facial features** · **ocular and bulbar muscles** · **spine — lordosis, scoliosis** · **sensory examination** · **systemic — cardiac or pulmonary affection, hepatomegaly, skin rash**.\n\n**Five clinical clues to diagnosis:** **age at presentation · characteristic clinical signs · pattern of progression · family history · associated conditions.**\n\n### Investigations by suspected site\n\n|Suspected site|Tests|\n|---|---|\n|**Myopathy**|**Plasma CK — markedly elevated in Duchenne, Becker and other dystrophies** and in inflammatory myopathies · **DNA testing** · **EMG** · **muscle ultrasound and MRI** to assess and monitor · **muscle biopsy — definitive, histochemistry confirms**|\n|**Neuropathy**|**Nerve conduction studies** — velocity and amplitude, sensory and motor · **EMG, to distinguish neuropathy from myopathy** · **DNA testing** · **nerve (sural) biopsy, rarely needed**|\n|**Anterior horn cell**|**Nerve conduction and EMG — denervation pattern** · **genetic testing**|\n|**Neuromuscular junction**|**Nerve conduction and EMG — myasthenic pattern** · **acetylcholine receptor antibodies** · **genetic testing**|\n\n**Plasma CK, plainly:** a **muscle enzyme**; **if elevated it indicates muscle tissue damage**.\n\nSrc: L56 slides 5–15; L55 slides 26–29",
        "qs": []
      },
      {
        "id": "neuro-20",
        "w": "must",
        "h": "Anterior horn cell — spinal muscular atrophy",
        "body": "**AHC disorders present with:** **weakness, wasting and diminished or absent reflexes** — plus **hypotonia**. **Examples: poliomyelitis and spinal muscular atrophy.**\n\n### Spinal muscular atrophy\n- **Rank:** the **second most common cause of neuromuscular disease after Duchenne muscular dystrophy**.\n- **Incidence:** **1 in 6,000–10,000 live births**.\n- **Inheritance:** **autosomal recessive**, mutations in the **SMN1 gene**.\n- **Mechanism:** **degeneration of the anterior horn cells** → **progressive wasting and weakness of all skeletal muscles**.\n- **The gene story:** **SMN1 is deleted**; the back-up gene **SMN2 makes mostly NON-functional SMN protein**, which is why raising SMN2 output is a treatment strategy.\n- **Phenotypes:** **four are recognized**.\n\n### SMA type 1 — Werdnig-Hoffmann disease\n- **Onset:** **birth to 3 months**, **severe and progressive**.\n- **Antenatal clue:** **diminished fetal movements** during pregnancy.\n- **Signs:** **symmetrical flaccid paralysis** · **muscle wasting** · **absent deep tendon reflexes** · **tongue fasciculations** · **paradoxical breathing pattern** · **weak cry and poor suckling** from bulbar weakness.\n- **Natural history:** **death within the first year from respiratory failure** if untreated.\n\n### The other three types\n\n|Type|Onset|Best motor function|\n|---|---|---|\n|**0**|**Neonatal**|**Most severe, very limited survival**|\n|**1**|**Birth–3 months**|Never sits|\n|**2**|**3–15 months**|**Sit but do not walk**|\n|**3**|**After 1 year**|**Can walk**|\n\n**New treatments:** **exon skipping therapy** — acts through **SMN2 to increase SMN protein** and **improve the clinical expression of SMA in some children** — and **gene therapy**. **All these new treatments are very expensive.**\n\nSrc: L56 slides 16–20; L55 slides 34–39; L56 slide 21 recovered as an image",
        "qs": []
      },
      {
        "id": "neuro-21",
        "w": "must",
        "h": "Peripheral nerve — Charcot-Marie-Tooth and Guillain-Barré",
        "body": "**Peripheral neuropathies are hereditary** — the hereditary motor sensory neuropathies — **or acquired**: **Guillain-Barré syndrome**, and **vitamin deficiencies — thiamine and cyanocobalamine**.\n\n### Charcot-Marie-Tooth disease\n- **What it is:** a **hereditary motor sensory neuropathy** caused by **mutations affecting myelin genes**; **many clinical types**.\n- **Commonest type:** **CMT1A — 70–80 %**.\n- **Inheritance:** **autosomal dominant in 70 %, de novo mutation in 30 %.** *L55 prints the same split as “AD disease 2/3, mutations 1/3” — both figures are the deck’s own.*\n- **Presentation:** the **preschool period**.\n- **Signs:** **bilateral foot drop** · **ankle reflex lost first, then knee** · **pes cavus** · **lower limbs affected more than upper** · **distal weakness more than proximal** · **nerve hypertrophy from demyelination and remyelination**.\n- **Course:** **slowly progressive and chronic, but loss of ambulation is rare** — they **do not lose the ability to walk**.\n\n### Guillain-Barré syndrome\n- **What it is:** an **acute post-infectious polyneuropathy** — **acute flaccid paralysis**.\n- **Mechanism:** an **autoimmune reaction, antibodies against the myelin sheath**.\n- **Trigger:** **2–3 weeks after an upper respiratory tract or GIT infection**. **Can occur at any age.**\n- **Weakness:** **symmetrical, ascending, progressive**, over **days to 2 weeks**; **maximum weakness at 2–4 weeks**.\n- **Reflexes:** **absent**.\n- **Bulbar:** **difficult chewing and swallowing, risk of aspiration, respiratory failure**.\n- **Dysautonomia:** **arrhythmias, blood pressure swings, urinary retention, ileus**.\n- **Prolonged course:** up to **2 years**; **full recovery in 90 %**.\n\n**Three investigations:** **CSF — protein-cell dissociation (raised protein, normal cells)** · **nerve conduction studies — reduced velocities** · **MRI of the spinal cord — nerve root enhancement, and to rule out other spinal lesions**.\n\n*The two decks time the CSF and conduction changes differently — L55 “> week 1” and “> week 2”, L56 “after the 2nd week” for both. Both printed; the protein rise lags the clinical onset either way (lag not in course material).*\n\nSrc: L56 slides 21–26; L55 slides 40–47",
        "qs": []
      },
      {
        "id": "neuro-22",
        "w": "must",
        "h": "Acute flaccid paralysis — polio versus GBS versus transverse myelitis",
        "body": "|Feature|Poliomyelitis / enterovirus|Guillain-Barré|Transverse myelitis|\n|---|---|---|---|\n|**Aetiology**|**Poliovirus**|**Post-infectious**|**Usually unknown; ?immunologically mediated**|\n|**Mechanism**|**Damage of anterior horn cells**|**Demyelinating polyneuropathy of spinal roots**|**Long tracts and peripheral nerve affection**|\n|**Onset of paralysis**|**24–48 hours** to full paralysis|**10 hours to 10 days**|**Hours to 4 days**|\n|**History**|**None or inadequate immunization**, preceding URTI or GE, **often in epidemics**|**Non-specific URTI or GE in the preceding 4–5 days**|**None**|\n|**Fever at onset**|**High, always present** at onset of flaccid paralysis, **gone the following day**|**Not common**|**Rarely present**|\n|**Flaccid paralysis**|**Acute, asymmetrical, patchy, principally proximal**; bulbar and respiratory muscles may be affected|**Acute, symmetrical and distal, ascending**, progressing rapidly to respiratory muscles|**Acute; early symmetrical lower limbs (paraplegia) + sensory loss; late hyperreflexia and optic neuritis**|\n\n**The three discriminators to hold:** **fever at the onset of paralysis** (polio only) · **asymmetry** (polio) versus **symmetry** (GBS and transverse myelitis) · **a sensory level with late hyperreflexia** (transverse myelitis only).\n\n### Course of GBS\n**Regressive in more than 90 %**, recovery beginning in **2–3 weeks**. **Progressive in a few** — bulbar involvement leads to **dysphagia and aspiration**, respiratory muscle involvement to **respiratory failure**. A **chronic relapsing form exists in under 5 %**, improving intermittently or not at all over months to years.\n\n### Management of GBS\n- **Supportive:** **admit once diagnosed even if the general condition is good** — **mechanical ventilation may be needed at any time**.\n- **Specific — one or both:** **IV immunoglobulin 0.4 mg/kg/day for 5 days, total course 2 grams** · **plasma exchange, five exchanges of 50 ml/kg over 7–10 days**.\n- **Corticosteroids have no effect.** Stated twice in the deck.\n- **Physiotherapy** to restore normal function.\n\nSrc: L56 slides 27–30; L55 slide 48",
        "qs": []
      },
      {
        "id": "neuro-23",
        "w": "high",
        "h": "Bell palsy, and the neuromuscular junction",
        "body": "### Bell palsy\n- **What it is:** an **isolated lower motor neurone paresis of the VIIth cranial nerve** → **facial weakness**.\n- **Aetiology:** **often post-infectious — HSV**.\n- **Symptoms:** facial weakness, **sometimes vesicles (herpes)**.\n- **Treatment:** **corticosteroids early** · **aciclovir for HSV**.\n- **Recovery:** **complete, over months**.\n- **Complication:** **conjunctivitis** — the eye that will not close.\n\n**Three differentials of a facial palsy:** **brainstem lesions** — VIth nerve palsy, cerebellar signs, **upper motor neurone signs** · **cerebellopontine angle lesion** — **VIIIth nerve symptoms** · **systemic associations** — **coarctation of the aorta and renal failure, both via hypertension**.\n\n### Myasthenia gravis\n- **The cardinal feature:** **abnormal muscle fatiguability** with **diurnal variation**, which **improves with rest or anticholinesterase drugs**.\n- **Mechanism:** **antibodies to acetylcholine receptors on the postsynaptic membrane**, causing a **decrease in the number of functional cholinergic receptors**.\n- **Age:** juvenile myasthenia usually presents **after 10 years**.\n- **Signs:** **ptosis, ophthalmoplegia, difficult chewing, loss of facial expression**; in some, **generalized and proximal weakness**.\n\n**Diagnosis:** **symptoms improve after IV edrophonium 0.15 mg/kg — the end point is resolution of the ptosis** · or **oral pyridostigmine** · **repetitive nerve stimulation with a decremental response** · **anti-AChR antibodies, positive in 60–80 %** · **anti-MuSK (anti-muscle-specific kinase) antibodies, rare**.\n\n**Treatment:** **pyridostigmine or neostigmine** (cholinesterase inhibitors) · **immunomodulators — prednisolone, mycophenolate mofetil, azathioprine** · **biologicals — rituximab** · **thymectomy, only in the presence of a thymoma** · **plasma exchange, in myasthenic crisis**.\n\n### Congenital myasthenic syndromes\n**Rare genetic** neuromuscular junction failure — **genetic mutations rather than autoimmune** — presenting in the **neonatal period** with **ptosis, ophthalmoplegia, bulbar and respiratory weakness and arthrogryposis**. **Response to anticholinesterases is poor.**\n\nSrc: L55 slides 49–58; L56 slides 31–36",
        "qs": []
      },
      {
        "id": "neuro-24",
        "w": "must",
        "h": "Muscular dystrophies — Duchenne and Becker",
        "body": "**The group:** **inherited disorders causing progressive muscle degeneration** — **Duchenne · Becker · limb-girdle · congenital**.\n\n### Duchenne muscular dystrophy\n- **Genetics:** **X-linked recessive**, **mutations of the dystrophin gene**; **de novo in about 30 %**.\n- **The protein:** **dystrophin connects the muscle fibre cytoskeleton to the extracellular matrix**; its loss causes **progressive, gradual necrosis of myofibres**.\n- **Prevalence:** **1 in 3,000–6,000 male infants**.\n- **Diagnosis:** clinically **around 5 years** — **difficulty running and going upstairs**.\n- **Signs:** **Gowers’ sign · calf pseudohypertrophy · waddling gait**.\n- **Course:** **loss of ambulation by 10–14 years**; **respiratory failure and cardiomyopathy**; **life expectancy reduced to the late twenties**.\n- **Cognition:** **about one-third have learning difficulties**.\n- **Tests:** **elevated CK** and **genetic testing**.\n\n**Management:** **physiotherapy and splinting** · **corticosteroids, to preserve mobility and prevent complications** · **surgery — scoliosis surgery, Achilles tendon lengthening** · **regular pulmonary and cardiac assessment** · **sleep studies once non-ambulant** · **overnight CPAP or non-invasive ventilation in advanced cases** · **exon skipping and gene therapy**.\n\n### Duchenne versus Becker\n\n|Feature|Duchenne|Becker|\n|---|---|---|\n|**Gene**|**Dystrophin**|**Same gene, different mutation**|\n|**Protein**|Absent|**Some functional dystrophin is produced**|\n|**Onset**|**~5 years**|**~11 years**|\n|**Progression**|Rapid|**Milder, slower**|\n|**Ambulation lost**|**10–14 years**|**Preserved into the twenties, lost in the late twenties**|\n|**Life expectancy**|**Late twenties**|**Middle or old age**|\n\n**Limb-girdle muscular dystrophy:** **proximal weakness · possible cardiomyopathy · difficult breathing · elevated plasma CK.**\n\n**Congenital muscular dystrophy:** **autosomal recessive**, **present at birth or early infancy**, **static or slowly progressive proximal weakness and hypotonia → contractures**, **feeding and breathing difficulties**, **decrease in extracellular matrix proteins such as laminin (most common)**, **muscle biopsy shows disrupted fibres — a dystrophic pattern**, and in some types **CNS abnormalities with intellectual disability**.\n\nSrc: L56 slides 37–41; L55 slides 59–65",
        "qs": []
      },
      {
        "id": "neuro-25",
        "w": "high",
        "h": "Congenital, metabolic, inflammatory and myotonic myopathies",
        "body": "### Congenital myopathies\n- **Presentation:** **at birth or in early infancy**.\n- **Defect:** **primarily affecting skeletal muscle fibres**.\n- **Clinically:** **hypotonia and muscle weakness**; **static in some, slowly progressive in others**.\n- **The discriminating test:** **plasma CK is normal or only mildly elevated** — unlike the dystrophies.\n- **Biopsy:** **dystrophic features**.\n\n### Metabolic myopathies\n- **Two mechanisms:** **deposition of storage material**, or **energy-depleting enzyme deficiencies**.\n- **Three main causes:** **glycogen storage disorders** · **disorders of lipid metabolism (fatty acid oxidation defects)** · **mitochondrial cytopathies**.\n- **Presentation:** **floppy infant**; in the older child **muscle weakness and muscle cramps on exercise**.\n\n*Cramps on exercise is the single clue that sends you down the metabolic route — the common clinical features slide names it for that reason.*\n\n### Inflammatory myopathies\n**Benign acute myositis:** assumed to be **post-viral**; **pain and weakness in the affected muscles**, **most commonly the calves**, **causing gait difficulty**; **plasma CK usually raised**; **self-limiting**.\n\n**Dermatomyositis:**\n- **Onset:** a **systemic illness between 5 and 10 years**.\n- **Course:** **gradual onset of proximal myopathy, muscle pain and fever**.\n- **The rash:** a **characteristic violaceous rash on the eyelids** with **periorbital oedema**, and a rash over the **extensor surfaces of joints**.\n- **Labs:** **CK and other inflammatory markers usually raised**.\n- **Biopsy:** **inflammatory cell infiltrate and atrophy**.\n- **Treatment:** **corticosteroids and other immunosuppressants**, plus **physiotherapy to prevent contractures**.\n- **Mortality:** **5–10 %**.\n\n### Myotonic disorders\n**Myotonia:** **delayed relaxation after sustained muscle contraction**, identified **clinically and on EMG**.\n\n**Dystrophia myotonica type I:** a **common illness**, **dominant inheritance** · **muscle weakness** · **prenatally, diminished fetal movement** · **in the newborn, hypotonia with feeding and respiratory difficulties** · **in the older child, myotonia and learning difficulties**. **Examine the mother — she will be hypotonic.**\n\nSrc: L55 slides 66–75; L56 slides 42–47",
        "qs": []
      },
      {
        "id": "neuro-26",
        "w": "must",
        "h": "The floppy infant — central versus peripheral",
        "body": "**Three clinical signs on handling:** **slips through your fingers when picked up** · **floppy posture on ventral suspension** · **marked head lag on pull-to-sit**.\n\n**The fuller list:** **head lag · frog-leg posture · abnormal horizontal suspension response · abnormal ventral suspension response · truncal or peripheral hypotonia**, with **muscle power normal or decreased**. It can be caused by an **upper motor neurone lesion (central hypotonia)** or a **lower motor neurone lesion (peripheral hypotonia)**.\n\n### The table that answers the question\n\n|Characteristic|Central hypotonia|Peripheral hypotonia|\n|---|---|---|\n|**Weakness**|**Mild to moderate**|**Significant**|\n|**Deep tendon reflexes**|**Normal or increased**|**Absent**|\n|**Infantile reflexes**|**Present**|**Absent**|\n|**Pull to sit**|**No or mild head lag**|**Marked head lag**|\n|**Milestones**|**Global developmental delay**|**Isolated motor delay**|\n|**Antigravity movements**|**Intact**|**Weak or absent**|\n|**Central manifestations** (seizures, microcephaly)|**Usually present**|**Absent**|\n\n**The second lecturer’s version of the same split:** **central — poor truncal tone with PRESERVED LIMB TONE, brisk reflexes, dysmorphic features**; **peripheral — poor antigravity movements, reduced or absent reflexes, FROG-LEG POSTURE**. The deck stars both of those two signs as the discriminators.\n\n### Causes\n- **Central:** **cerebral malformations · ischaemic · haemorrhagic and intracranial haemorrhage · HIE · metabolic · inborn errors of metabolism · endocrine · chromosomal (Down syndrome)**.\n- **Peripheral:** **spinal cord injury · anterior horn cell disease · neuromuscular junction disorders · muscle**.\n\nSrc: L56 slides 48–49; L55 slides 76–85",
        "qs": []
      }
    ]
  },
  "neuro-cp": {
    "intro": "Cerebral palsy is defined by what it is not: non-progressive, and a disorder of movement and posture. Expect the type from the clinical picture, the timing of the insult, and management as a multidisciplinary list rather than a drug.",
    "sections": [
      {
        "id": "neuro-27",
        "w": "must",
        "h": "Cerebral palsy — definition, epidemiology and aetiology",
        "body": "**Definition:** an **umbrella term for a permanent disorder of movement and/or posture and motor function due to a non-progressive abnormality of the developing brain; often accompanied by disturbances of cognition, communication, vision, perception, sensation, behaviour, seizure disorder and secondary musculoskeletal problems.**\n\n### The four clauses that carry a fact\n- **Permanent:** **not disappearing**.\n- **A disorder, not a disease:** a **disease** is the condition resulting from a pathophysiological response **so you know the cause**; a **disorder** is a disruption of normal function **so you do not know the cause**.\n- **Non-progressive:** the **pathology is already established and no longer active** — but the **clinical manifestations emerge over time**, as normal is set against abnormal cerebral maturation.\n- **Developing brain:** **conception to the first 2–3 years of life**, the period of motor-milestone achievement. **Injury after 2 years is ACQUIRED BRAIN INJURY, not cerebral palsy.**\n\n**Multi-axial:** CP carries **comorbidities that significantly influence prognosis and quality of life**.\n\n### Epidemiology\n- **Rank:** the **most common cause of motor impairment or disability in children**.\n- **Cause identified in:** **only 50 %**; **no single cause — multifactorial**.\n- **The two most important risk factors:** **prematurity and low birth weight**.\n- **Postnatal factors:** **more important in developing countries**.\n- **Distribution:** **antenatal ~80 % · perinatal ~10 % · postnatal ~10 %**.\n- **Prevalence:** **1.5–2.5 per 1,000** live births in developed countries, **1.5–5.6 per 1,000** in developing ones.\n- **Changing picture:** **most now live well into adulthood**, with **premature “aging”** — **chronic pain, extreme fatigue, osteoporosis, osteoarthritis** and **early loss of ambulation and independence**.\n\n### Risk factors by timing\n\n|Period|Risk factors|\n|---|---|\n|**Prenatal** (conception → onset of labour)|**Prematurity · low birth weight · intrauterine infections (TORCH) · placental insufficiency · maternal disease (pre-eclampsia, eclampsia, uncontrolled gestational diabetes, chronic disease such as renal failure) · cortical migration disorders and congenital structural CNS malformations · thrombotic disorders · uterine bleeding · in vitro fertilization · small for gestational age**|\n|**Perinatal** (28 weeks → 7th day of life)|**Hypoxic-ischemic encephalopathy · birth asphyxia · respiratory anoxia, e.g. respiratory distress · obstructed labour · premature rupture of membranes · neonatal sepsis or meningitis · intracranial haemorrhage · kernicterus**|\n|**Postnatal** (birth → first 2 years)|**CNS infections (meningitis, encephalitis) · severe dehydration ± hypernatraemia · intracranial trauma, including child abuse**|\n\nSrc: L58 slides 2–5",
        "qs": []
      },
      {
        "id": "neuro-28",
        "w": "must",
        "h": "Cerebral palsy — the classifications and the clinical types",
        "body": "**Six classifications are taught:** **etiological · anatomical · clinical · topographic (SCPE) · functional (GMFCS) · clinical types.**\n\n### Anatomical — by site of brain involvement\n- **Pyramidal:** **motor area (4) and paramotor area (6)** → **UMN manifestations** → **spastic CP**.\n- **Extrapyramidal:** **basal ganglia** → **dyskinetic CP**.\n- **Cerebellum and its connections:** → **ataxic CP**.\n\n### SCPE classification — and the note that goes with it\n**Topographic categorization into hemiplegia, quadriplegia and diplegia is NO LONGER USED**; the **Surveillance of Cerebral Palsy in Europe (SCPE)** classification is used instead.\n\n|Type|Share|Features|\n|---|---|---|\n|**Spastic**|**≈ 90 %**|**Increased tone · hyperreflexia · pathological reflexes · Babinski sign.** Subtypes: **bilateral spastic** and **unilateral spastic (hemiplegia)**|\n|**Dyskinetic**|**≈ 6 %**|**Dystonia · chorea · athetosis · fluctuating tone · primitive reflex patterns**|\n|**Ataxic**|**≈ 4 %**|**Loss of coordinated movement · abnormal force, rhythm and accuracy**|\n\n### GMFCS — the functional ladder\n\n|Level|Description|\n|---|---|\n|**I**|**Walks without limitations**|\n|**II**|**Walks with limitations**|\n|**III**|**Walks with an assistive device**|\n|**IV**|**Limited self-mobility; may use powered mobility**|\n|**V**|**Dependent; transported in a manual wheelchair**|\n\n### The four clinical types\n\n|Type|Cause and pattern|Associations and GMFCS|\n|---|---|---|\n|**Unilateral (hemiplegia)**|**Often perinatal stroke**; one side, **arm > leg**|**Visual field defects · seizures · learning difficulties.** Usually **GMFCS I–II**|\n|**Bilateral spastic — diplegia**|**Common in prematurity**; **legs more affected than arms**; **toe walking and scissoring gait**|**Good cognition and communication in many.** Often **GMFCS I–III**|\n|**Bilateral spastic — quadriplegia**|**Extensive brain damage**; **all limbs**|**Intellectual disability, feeding problems, speech difficulties, vision and hearing deficits, seizures**; **high risk of hip dislocation and scoliosis**. Often **GMFCS IV–V**|\n|**Dyskinetic**|**Often perinatal asphyxia or kernicterus**; **involuntary movements**|**Feeding difficulties common; cognition may be preserved.** Frequently **GMFCS IV–V**|\n\n*Arm worse than leg means hemiplegia; legs worse than arms means diplegia, and diplegia is the premature baby’s pattern.*\n\nSrc: L58 slides 6–8",
        "qs": []
      },
      {
        "id": "neuro-29",
        "w": "must",
        "h": "Cerebral palsy — detection, investigation and management",
        "body": "### Early detection\n**Follow up the “at risk” infants:** those **born prematurely**, **following birth asphyxia**, and after **kernicterus**.\n\n**Diagnosis is made by CLINICAL EXAMINATION of four things:** **abnormal muscle tone in the limbs and trunk** · **postural abnormalities** · **hand dysfunction** · **abnormal gait**.\n\n### Investigations — five, and each has a stated trigger\n- **Neuroimaging:** **recommended if the aetiology is not established**. **MRI is preferred to CT** where available — **higher yield of the type and timing of the insult**.\n- **Metabolic or genetic testing:** **not routinely needed**, unless a different diagnosis is suspected — an **inherited neuro-metabolic or degenerative disease**, suggested by **loss of acquired milestones, organomegaly or dysmorphic features**.\n- **TORCH screening:** if congenital infection is suspected, **to prevent further sibling affection**.\n- **Coagulation studies:** for **unexplained cerebral infarction on imaging and hemiplegic CP**, to diagnose a **hereditary coagulation disorder**.\n- **EEG:** **should NOT be done to determine the aetiology of CP** — only for **findings in the history suggesting epileptic seizures**.\n\n**Because of the high incidence of associated conditions, screen every child with CP for:** **intellectual disability (IQ test)** · **ophthalmologic and hearing impairment** · **speech and language disorders** · **swallowing, nutrition and growth (barium studies)** · **secondary joint dislocation or fracture (skeletal X-ray)**.\n\n### Management\n**Tell the parents early:** **the diagnosis as early as possible.** **Prognosis is difficult during infancy** until the severity and pattern of evolving signs and the child’s developmental progress become clearer **over months or years**.\n\n**Two principles:** treat **for the aetiology**, and **for the associated impairments and secondary problems**. A **multidisciplinary approach is essential**, given the **wide range of associated medical, psychological and social problems**.\n\n**Spasticity — treat in an integrated rather than a sequential way:**\n- **Exercise and physical therapy.**\n- **Chemo-denervation:** **botulinum toxin type A** into spastic muscles or at motor points.\n- **Oral anti-spasticity drugs:** **tizanidine, baclofen, diazepam**.\n- **Intra-thecal baclofen** — **not available in Egypt**.\n- **Orthopaedic or neurosurgical:** **tendon lengthening**, **selective dorsal rhizotomy**, **deep brain stimulation**.\n\n**The paediatrician also treats:** **seizures, GORD, failure to thrive, sleep and behaviour problems**, and **coordinates care and developmental follow-up**.\n\n**The team:** neurodevelopmental paediatrician or neurologist, physiatrist, physiotherapist, occupational and speech therapist, psychologist, audiologist, ophthalmologist, nutritionist, social worker, nurse, educational advisor, surgeons.\n\n**Therapists:** start **as soon as possible**, **at home and centre-based**, with **clearly defined goals and specific outcomes**, **empowering child and family**.\n\nSrc: L58 slides 5, 9–14",
        "qs": []
      }
    ]
  },
  "nutrition": {
    "intro": "Two opposite failures of growth. Faltering growth as a description rather than a diagnosis, and the inadequate-intake tree behind it; then obesity — the BMI centile bands, and how far management runs before drugs and surgery.",
    "sections": [
      {
        "id": "nut-1",
        "w": "must",
        "h": "Faltering growth — a description, not a diagnosis",
        "body": "**Definition:** an infant’s **weight falls across two centile spaces**.\n\n**Not a disease:** *\"a description of a relatively common growth pattern\"*, not a diagnosis.\n\n### Is it really growth faltering?\n- **Method:** **plot sequential measurements** on a growth chart → the **growth pattern** → **determine growth velocity**.\n- **Charts:** WHO **weight-for-age**, boys and girls, birth to 2 years, as **z-scores** or **percentiles**.\n- **Accuracy:** **accurate serial measuring and plotting** of **height and weight** on the **appropriate** chart.\n\n### Red flags\n- **Dysmorphic features.**\n- **Weight:** **failure to gain despite adequate caloric intake**.\n- **GIT:** **recurrent vomiting, diarrhoea or dehydration**.\n- **Organomegaly or lymphadenopathy.**\n- **Chest:** signs suggestive of **chronic respiratory disease**.\n- **Developmental delay.**\n\n### Investigation and management\n- **Investigations:** **guided by history and examination** — never routine.\n- **The aim:** **detailed history, physical examination and guided investigation, directed at detecting an organic medical condition**.\n- **Reduced intake:** routine tests **to ensure no organic cause is contributing to poor appetite**.\n- **Treatment:** **dietary and behavioural modification** to **increase energy intake**, plus **monitoring growth**.\n- **Advice works:** **simple behavioural advice** improves the **quantity and the quality** of intake.\n\nSrc: L15.1 slides 2–6, incl. the image-only pp.3–4 recovered by render",
        "qs": []
      },
      {
        "id": "nut-2",
        "w": "must",
        "h": "Causes of faltering growth — the inadequate-intake tree",
        "body": "**Root of the whole tree:** **INADEQUATE INTAKE**, branching into environmental causes and underlying pathology.\n\n### Environmental — inadequate availability of food\n- **Feeding problems:** insufficient breast milk, **poor technique**, **incorrect preparation of formula**.\n- **Food offered:** **insufficient or unsuitable**.\n- **Timing:** **lack of regular feeding times**.\n- **Infant difficult to feed:** **resists feeding**, or is **disinterested**.\n- **Conflict over feeding:** intolerance of normal feeding behaviour — messiness, throwing food — **leading to early cessation of meals**.\n- **Resources:** problems with **budgeting, shopping, cooking food, famine**.\n- **Low socioeconomic status.**\n\n### Psychosocial deprivation\n- **Poor maternal–infant interaction.**\n- **Maternal depression.**\n- **Poor maternal education.**\n\n### Neglect or child abuse\n- **Includes factitious illness:** **deliberate underfeeding to generate weight faltering**.\n\n### Underlying pathology\n- **Impaired suck / swallow:** **oro-motor dysfunction**, neurological disorder e.g. **cerebral palsy**; **cleft palate**.\n- **Chronic illness → anorexia:** **Crohn disease**, **chronic kidney disease**, **cystic fibrosis**, **liver disease**.\n\n*The tree has one root and stops. The other three mechanisms — malabsorption, increased requirement, impaired utilisation — are not in course material and are supplied here.*\n\nSrc: L15.1 p.4 (image-only, rendered at 400 dpi in two crops)",
        "qs": []
      },
      {
        "id": "nut-3",
        "w": "must",
        "h": "Obesity — definition, BMI and the centile bands",
        "body": "**Definition:** an **excessive accumulation of body fat**.\n\n**BMI:** the **most reliable and most commonly used clinical indicator** of obesity.\n- **Formula:** weight in **kg** ÷ height in **metres squared** (kg/m²).\n- **In children:** **plotted on appropriate charts** — BMI is **age- and sex-specific**.\n\n|Band|BMI centile|\n|---|---|\n|**OBESE**|**> 95th centile**|\n|**Overweight**|**85th – 95th centile**|\n|**Healthy weight**|**5th – 85th centile**|\n\n### Causes of childhood obesity\n- **Idiopathic obesity** — the great majority.\n- **Endogenous obesity** — the group worth excluding.\n\n**Endocrine:** **hypothyroidism**, **hypercortisolism**, **acquired hypothalamic syndrome**.\n\n**Syndromic:** e.g. **Prader–Willi syndrome**.\n\n**Gene defects:** e.g. **leptin deficiency**.\n\n*Hypothyroidism as a disease belongs to `endocrine`; Prader–Willi is taught in no paediatrics deck.*\n\nSrc: L15.1 slides 7–9",
        "qs": []
      },
      {
        "id": "nut-4",
        "w": "high",
        "h": "Obesity — management, drugs and surgery",
        "body": "**The three-part message:** **eat healthy · be more active · reduce sedentary activity**.\n\n**Lifestyle, sustained:** **successful management requires sustained changes in lifestyle** — healthier eating, more physical activity, less physical inactivity.\n\n### Drug treatment\n- **When:** **over 12 years**, with **physical co-morbidities** or **severe psychological problems**.\n- **What:** **orlistat**.\n- **Mechanism:** a **lipase inhibitor** — reduces absorption of dietary fat.\n- **Consequence:** **produces steatorrhoea**.\n\n### Bariatric surgery\n- **Maturity:** children who have **almost achieved maturity**.\n- **Threshold:** **very extreme obesity, BMI > 40 kg/m²**.\n- **Or:** **BMI 35 – 40 kg/m² with complications** — e.g. **type 2 diabetes** or **hypertension**.\n- **And:** **all other interventions have failed** to achieve or maintain weight loss.\n\n**The closing point:** **parents and the family environment play a critical role in the development of obesogenic behaviour**.\n\nSrc: L15.1 slides 10–12",
        "qs": []
      },
      {
        "id": "nut-5",
        "w": "must",
        "h": "Nutritional vulnerability, and the four WHO recommendations",
        "body": "**The premise:** **adequate nutrition is critical for optimal child growth and development**.\n\n### Why infants are vulnerable\n- **Low nutritional stores.**\n- **High nutritional demands for rapid growth.**\n\n**Growth energy falls steeply with age:** which is why the first months are the exposed window.\n\n|Age|Share of dietary energy used for growth|\n|---|---|\n|**First 3 months**|**35 %**|\n|**1 year**|**5 %**|\n|**3 years**|**2 %**|\n|**To mid-adolescence**|**1–2 %**|\n\n*Rapid organ growth is by definition a vulnerable period.*\n\n### Optimal infant and young child feeding — WHO Global Strategy, 2002\n- **Early initiation of breastfeeding:** **within 1 hour of birth**.\n- **Exclusive breastfeeding:** **0 to < 6 months**.\n- **Complementary feeding:** **6 to < 24 months** — complementary foods **after 6 months**.\n- **Continued breastfeeding:** **2 years or beyond**.\n\nSrc: L15.2 slides 2–3",
        "qs": []
      }
    ]
  },
  "nutrition-vit": {
    "intro": "Rickets carries this chapter: the four causes, the sign by body region, and the biochemistry that separates it from the differentials. Tetany is asked as latent versus manifest. The other vitamins reduce to one grid, and the examiner picks a deficiency from its sign.",
    "sections": [
      {
        "id": "nut-21",
        "w": "must",
        "h": "Vitamin D — the vitamin that is not a vitamin",
        "body": "**It is a prohormone:** *\"Vitamin D is not really a vitamin. It is a prohormone closely related to classical steroids.\"*\n\n### The two natural forms\n- **D3, cholecalciferol:** **skin, by UV irradiation of 7-dehydrocholesterol**; also **cod liver oil, butter, liver, egg yolk**.\n- **D2:** **UV irradiation of ergosterol in green plants**.\n\n### Sources and requirement\n- **Breast milk is LOW:** only **±30 IU per litre**; **cow’s milk is even lower**.\n- **Adequate if:** mother **and** infant are **exposed sufficiently to sunlight**.\n- **Formulas and baby foods:** **fortified**, **still insufficient for daily needs**.\n- **Daily requirement for infants:** **400 IU (10 µg)**.\n\n### Activation — two hydroxylations\n- **D3 and D2:** **biologically inactive** pro-hormones.\n- **Liver:** → **25 hydroxy-vitamin D (calcidiol)**.\n- **Proximal renal tubules:** → **1,25 dihydroxy-vitamin D (calcitriol)**, **the biologically active form**.\n\n### Physiological actions of calcitriol\n- **GIT:** promotes **calcium and phosphorus absorption** in the small intestine.\n- **Kidney:** **increases Ca and P reabsorption**.\n- **Parathyroid:** **inhibits PTH secretion**.\n- **Immune system:** **differentiation of immune cells**, preventing infection.\n- **Non-skeletal:** **parathyroid gland, brain cells, pancreas, breast**.\n\n*Both readings of the bone action stand: L17 says \"mainly promoting bone formation, growth and teething\"; BK says it affects Ca and P resorption from old bone and deposition in new bone and teeth, through its effect on serum alkaline phosphatase.*\n\nSrc: BK p.31; L17 slides 6, 10, incl. the image-only pp.6–9",
        "qs": []
      },
      {
        "id": "nut-22",
        "w": "must",
        "h": "Infantile rickets — definition and the four causes",
        "body": "**Definition:** a **metabolic disorder of infancy and childhood caused by vitamin D deficiency**, leading to **failure of osteoid tissue to calcify**.\n\n**Two tissues affected:** **growing bones** — defective osteoid mineralization, delayed growth and teething; **skeletal muscles and ligaments** — **rickety myopathy (hypotonia)**, **laxity of ligaments**.\n\n**⚠️ Rickets is the disease of infancy** — of growing bones — **i.e. till the age of 2 years**.\n\n### I — Vitamin D deficiency: defective supply or synthesis (COMMONEST)\n- **Lack of sun exposure:** of the infant **or the pregnant mother**.\n- **Race:** the **black race is more susceptible**, dark skin interfering with ultraviolet rays.\n- **Environment:** **clouds, smoke, dust and ordinary window glass prevent UV** — commoner **in winter, in big smoky towns, in children kept indoors**.\n- **Relative deficiency, increased need:** **prematures, twins, infants recovering from malnutrition**.\n- **⚠️ NB:** **marasmic infants and cretins rarely develop rickets**, because growth is arrested — **atrophic rickets**.\n\n**Congenital rickets:** deficient vitamin D **storage from the pregnant mother**.\n- **Risk factors:** **low maternal vitamin D** in pregnancy · **low sun exposure** in pregnancy · **closely spaced pregnancy**.\n- **Clinical picture:** **early rickets, and early tetany and convulsions**.\n\n### II — Defective activation to calcitriol\n- **Liver disease:** defective **25-hydroxylation**.\n- **Chronic renal disease:** **renal osteodystrophy**, defective **1,25-hydroxylation**.\n- **1-hydroxylase deficiency:** **vitamin D dependent rickets type I** (rare).\n- **Anticonvulsants:** **phenytoin and phenobarbital** → abnormal vitamin D metabolites.\n\n### III — Defective absorption\n- **Malabsorption:** **malabsorption syndromes, coeliac disease, chronic diarrhoea**.\n- **Rachitogenic diets:** **yoghurt and unmodified cow’s milk** — high **phosphorus** cuts Ca absorption; **cereals** — high **phytic acid** forms **insoluble salts with calcium**.\n\n### IV — End-organ resistance\n**Resistance to calcitriol in bone:** **vitamin D dependent rickets type II** (rare).\n\nSrc: BK pp.31–32; L17 slides 12, 18, 20",
        "qs": []
      },
      {
        "id": "nut-23",
        "w": "must",
        "h": "Rickets — pathogenesis and pathology",
        "body": "### The pathogenesis chain\n- **Vitamin D deficiency:** → **↓ intestinal absorption of Ca and P**.\n- **Then:** → **↓ Ca level in blood and ECF**.\n- **Then:** → **stimulation of the parathyroid gland → ↑ PTH**.\n- **PTH on BONE:** **↑ mobilization of Ca** → **serum Ca returns to NORMAL, 9 mg/dl**.\n- **PTH on KIDNEY:** **↓ reabsorption of P** → **↓ serum P, < 3 mg/dl**, with **phosphaturia**.\n- **Result:** **low Ca × P solubility product, < 30**.\n- **End point:** **FAILURE OF CALCIFICATION OF OSTEOID TISSUE**.\n\n*Hence the normal calcium and the low phosphate: the parathyroid buys one at the cost of the other.*\n\n### The order in which changes appear\n- **First, biochemical:** **↑ ALP** and **↓ inorganic phosphate**.\n- **Then, radiological:** seen on **X-ray of the wrist region**.\n- **Lastly, clinical:** **craniotabes, rickety rosary** and the rest.\n\n### Pathology\n**At the ends of long bones:** osteoblasts **continue forming excess osteoid which fails to calcify** → a **wide, irregular zone of non-rigid tissue at the bone–cartilage junction at the metaphysis**.\n\n**That osteoid is easily compressible:** producing the **skeletal abnormalities** — widened ends of long bones, rachitic rosary — and the **X-ray findings** — broadening, cupping, fraying of the epiphyseal line.\n\n**In the shaft:** pre-formed bone is **resorbed and replaced by uncalcified osteoid from the periosteum**, a **shell surrounding the whole shaft** → **rarefaction of cortical bone**, **periosteal elevation**, deformities, **greenstick fractures**.\n\n*Epiphyseal plate zones, epiphyseal side down: resting cartilage · proliferation · hypertrophy · calcification · ossified bone — calcification is what fails.*\n\nSrc: BK pp.32–33; L17 slide 24, incl. the image-only pp.13–15, 22",
        "qs": []
      },
      {
        "id": "nut-24",
        "w": "must",
        "h": "Rickets — early features, head and thorax",
        "body": "### When the bony changes appear\n- **Latency:** **after several months** of vitamin D deficiency.\n- **Usually:** the **second half of the 1st year** and **during the 2nd year**.\n- **Earlier, e.g. 2nd month:** in **breast-fed infants of vitamin D deficient mothers**.\n- **Rare:** **active rickets in late childhood**.\n\n### Early manifestations, under 6 months\n- **Sweating:** **increased**, particularly **around the head**.\n- **Irritability by day.**\n- **Insomnia.**\n- **Chest:** **rachitic rosaries and Harrison sulcus** (below).\n\n**Craniotabes:** **thinning of the outer table of the skull** — **the EARLIEST bony change**.\n- **Elicited by:** **firm gentle pressure over the occiput or posterior parietal bone, AWAY FROM THE SUTURES** — a **ping-pong ball sensation**.\n- **⚠️ The lecture’s caveat:** *\"it is preferable not to try to detect it.\"*\n- **Differentiate from:** craniotabes of **prematurity, osteogenesis imperfecta, hydrocephalus** — **softening generalized or ALONG THE SUTURES**.\n\n### Bony changes — head\n- **Craniotabes:** usually **disappears before the end of the 1st year**.\n- **Anterior fontanelle:** **wider**, **closure delayed**; **sutures wide**.\n- **Bossings:** **frontal and parietal**, from **osteoid deposits around the centres of ossification**.\n- **Head size:** **larger than normal**, and **may remain so throughout life** — a differential for **large head**.\n- **Shape:** bossings plus the **grooves between them** → a **square skull, caput quadratum**; may be **permanently asymmetric**.\n- **Deciduous teeth:** **delayed eruption**, **enamel defect** (dental hypoplasia), sometimes **extensive caries**.\n\n### Bony changes — thorax\n- **Rickety rosary:** enlarged **costochondral junctions**, felt as **a row of beads the size of cherries**, running **down and backwards**.\n- **Pigeon breast, pectus carinatum:** **longitudinal grooves behind the rosary**, **flattened sides of the chest cage**, **sternum and adjacent cartilages projected forward**.\n- **Harrison’s sulcus:** a **horizontal groove at the diaphragm’s attachment** with **flaring of the costal margins below** — the **inward pull of the diaphragm on the soft rib cage**.\n\nSrc: BK pp.33–34; L17 slides 26–28, 31, incl. the image-only p.40",
        "qs": []
      },
      {
        "id": "nut-25",
        "w": "must",
        "h": "Rickets — extremities, spine, pelvis, muscles",
        "body": "**Where changes are greatest:** where **growth is most rapid**; deformities result from **gravity and muscle traction** on the affected bones.\n\n### Extremities\n- **Epiphyseal enlargement:** common, **best felt at the wrists and ankles** — the **Marfan sign**.\n- **Bowlegs or knock-knees:** **genu varum / genu valgum**, from deformed **tibia and fibula**, **once the infant has started to walk**.\n- **Femur and tibia:** may acquire an **anterior convexity**.\n- **Humerus, radius and ulna:** may be **bent as the infant crawls**.\n- **Rickety dwarfism:** when **legs + spine + pelvis** are deformed **together**.\n\n**Greenstick fractures:** a **fracture of the soft bony cortex within the intact periosteum**.\n- **Mechanism:** the bones, being soft, are **not broken completely, only partially**.\n- **Symptoms:** **no pain and no swelling**.\n- **⚠️ Detection:** **only on X-ray**.\n\n### Spinal column\n*Due to laxity of ligaments and hypotonia of muscles — so NOT fixed bony deformities.*\n- **Scoliosis:** mild to moderate lateral curvature — **common**.\n- **Kyphosis:** of the **dorsolumbar region when sitting**.\n- **Lordosis:** of the lumbar region, **exaggerated in the erect posture**.\n\n### Pelvis\n- **Who:** occurs commonly in children with **lordosis**.\n- **Size:** **smaller**, from retarded growth.\n- **Entrance:** **narrowed**, by a **shortened anteroposterior diameter**.\n- **Outlet:** **narrowed**, by **forward displacement of the sacrum**.\n- **⚠️ In females:** if permanent, these **may interfere with normal delivery later on**.\n\n### Ligaments and muscles\n**Motor delay:** from **myopathy, hypotonia, poor muscle development, laxity of ligaments**.\n- **Milestones:** **delayed sitting, standing, walking** — **but language and social milestones NORMAL**.\n- **Acrobatic rickets:** **flaccidity of the whole body**, **hyper-extensibility of joints**.\n- **Pot belly:** hypotonia of **abdominal wall and gastric and intestinal muscle**, plus **ptosis of liver and spleen** by the deformed thoracic cage.\n\nSrc: BK p.34; L17 slide 34",
        "qs": []
      },
      {
        "id": "nut-26",
        "w": "must",
        "h": "Rickets — investigations, complications, differential diagnosis",
        "body": "### Radiology — active rickets\n**The test:** a **radiograph of the WRIST**, best for early diagnosis.\n- **Lower radius and ulna:** **broadening + cupping (concave) + fraying (irregularity)**.\n- **Gap:** **increased distance** between the **calcified ends of radius and ulna** and the **carpal/metacarpal bones** — the non-calcified epiphyseal end does not appear.\n- **Epiphyseal line:** **indistinct**.\n- **Shafts:** **↓ bone density**, **prominent trabeculae**.\n- **Periosteum:** **elevation may be seen**.\n- **Fractures:** **greenstick** type, or deformities.\n\n### Radiology — healing rickets\n- **Timing:** healing takes **2 – 3 weeks** to appear on X-ray after treatment starts.\n- **Line of preparatory calcification:** an **irregular band separated from the bone ends by the uncalcified metaphysial zone of osteoid**.\n- **Then:** that osteoid **calcifies**, the **shaft growing toward the line until united with it**.\n\n### Biochemistry\n\n|Test|In rickets|Normal|\n|---|---|---|\n|**Serum calcium**|**NORMAL** — compensatory hyperparathyroidism|**9 – 11 mg/dl**|\n|**Serum phosphate**|**LOW, < 3 mg/dl**|**4.5 – 6.5 mg/dl**|\n|**Ca × P solubility product**|**LOW, < 30**|**> 40**|\n|**Alkaline phosphatase**|**HIGH**|**5–15 Bodansky U/dl, 145–200 IU/L**|\n\n*The deck closes on its own MCQ, keying \"normal calcium level and low phosphorus level\" as diagnostic of infantile rickets.*\n\n### Complications\n- **Neurological:** **hypocalcaemic tetany**.\n- **Respiratory:** chest deformity → **atelectasis**, **recurrent bronchitis and bronchopneumonia**.\n- **Skeletal:** **fractures and severe bony deformities**, **particularly the pelvis in females**.\n\n### Differential diagnosis, by presenting problem\n\n|Presentation|Differentiate from|\n|---|---|\n|**Delayed motor development**|**Cerebral palsy**, global developmental delay|\n|**Large head**|Other causes of large head|\n|**Head bosses**|**Scurvy, syphilis, achondroplasia**|\n|**Deformities and fractures**|**Physiologic bow legs** — no lab or X-ray features, resolves in a few years; **chondrodysplasia**; **osteogenesis imperfecta**|\n\nSrc: BK p.35; L17 slides 47–48, 50, 58",
        "qs": []
      },
      {
        "id": "nut-27",
        "w": "must",
        "h": "Rickets — prevention and treatment; hypervitaminosis D",
        "body": "### Prevention\n- **Ultraviolet exposure:** of **infant, pregnant and lactating mother** — **direct sunlight, clear sky, around noon**.\n- **Oral supplement:** syrup or drops, **preferably in a water-miscible vehicle**.\n\n|Group|Vitamin D dose|Start|\n|---|---|---|\n|**Breast-fed infants**|**400 IU (10 µg) / day**|**From birth**|\n|**Prematures, twins, infants of mothers with osteomalacia**|**1000 IU / day**|**After birth**|\n|**Pregnant and lactating mother**|**Vitamin D should also be given**|—|\n\n### Treatment of rickets\n- **Daily oral:** **4000 – 6000 IU (50 – 150 µg)** — **healing in 2 to 4 weeks**, demonstrable on X-ray.\n- **Alternative:** a **single huge dose, 600,000 IU (15,000 µg)**, orally or **intramuscularly**.\n- **After healing:** **reduce to 400 IU/day (10 µg/day)**.\n- **Alongside:** ensure **adequate calcium and phosphorus** intake.\n\n### Hypervitaminosis D\n**Cause:** **usually iatrogenic**, from **huge or repeated doses**.\n\n**All manifestations are hypercalcaemic:** appearing **1 – 3 months after** the large dose.\n- **Anorexia, irritability.**\n- **Vomiting** with no apparent cause.\n- **Constipation** with **hard stool pellets**.\n- **Excess thirst and polyuria.**\n- **Dehydration.**\n- **Hypotonia.**\n\n**Complications:** **nephrocalcinosis** and **renal failure**.\n\n**Investigations:** **increased serum calcium**; **ultrasound or X-ray abdomen** for **nephrocalcinosis**.\n\n**Treatment, in order:**\n- **Stop:** **vitamin D and calcium**.\n- **Fluids:** for correction of dehydration.\n- **Rachitogenic diet:** **poor in milk, rich in carbohydrates and cereals**.\n- **Serum Ca > 12 mg/dl:** **prednisone 2 mg/kg/day** until serum Ca **drops to 12**.\n- **Also:** **oral aluminium hydroxide** may be used.\n\nSrc: BK pp.35–37; L17 slides 53–54, 56–57",
        "qs": []
      },
      {
        "id": "nut-28",
        "w": "must",
        "h": "Hypocalcaemia — the calcium fractions and the four causes",
        "body": "**Tetany:** **increased activity of the motor nerve fibres and muscles** due to a **decrease in FREE IONIZED calcium**.\n\n### Plasma calcium — normal total 9 – 11 mg/dL, in two forms\n\n|Fraction|mg/dL|Affected by|\n|---|---|---|\n|**Diffusible — ionized**|**5**|**Plasma pH**|\n|**Diffusible — non-ionized**|**0.5**|—|\n|**Protein-bound**|**4.5**|**Level of plasma proteins**|\n\n### Aetiology AFTER the neonatal period\n**1 Infantile tetany, COMMONEST:** a **complication of infantile rickets**, **precipitated by a febrile illness (infection)** through **failure of the parathyroid compensatory mechanism** or **spontaneous exhaustion of the parathyroid gland**.\n\n*The normal calcium of rickets is borrowed, held up by the parathyroid; tetany is the day that compensation fails (the joining clause is not in course material).*\n\n**2 Hypoparathyroidism.**\n\n**3 Alkalosis, metabolic or respiratory:** at **high pH ionized calcium falls**, **calcium binding to albumin**. Four routes:\n- **Excessive vomiting:** from a single gastric cause, e.g. **congenital pyloric stenosis** → **loss of hydrochloric acid**.\n- **Excess alkalies:** **citrates, bicarbonates or phosphates**.\n- **Hyperventilation of the lungs:** e.g. in some cases of **encephalitis**.\n- **Postacidotic tetany:** **rapid over-correction of acidosis with bicarbonate**, as in **severe dehydration and acidosis in acute diarrhoea**.\n\n**4 Hypomagnesaemia:** **magnesium is necessary for PTH formation and action**.\n\nSrc: BK p.36",
        "qs": []
      },
      {
        "id": "nut-29",
        "w": "must",
        "h": "Tetany — latent, manifest, and its management",
        "body": "### Latent tetany — serum Ca 7 – 9 mg/dl\n*All four signs are due to hyperirritability of the nerves.*\n\n|Sign|How elicited|Response|\n|---|---|---|\n|**Chvostek’s**|**Lightly tap the facial nerve anterior to the ear**|**Facial muscles twitch briefly with each tap**|\n|**Trousseau’s**|**Cuff inflated above systolic pressure**|**Carpal spasm within 4 minutes**|\n|**Erb’s**|**A current under 5 milliamperes**|**Muscle contraction** — normally a stronger current is needed|\n|**Peroneal**|**Tap the peroneal nerve on the neck of the fibula**|**Muscles contract, foot is everted**|\n\n### Manifest tetany — serum Ca less than 7 mg/dl\n- **Onset:** carpal and pedal spasms, **instantaneously or after an attack of fever**.\n- **Carpal spasm:** **IP joints extended**, **MCP joints flexed**, **thumb adducted**, **wrist flexed** — the **obstetrician’s hand, main d’Accoucheur**.\n- **Pedal spasm:** **feet extended and adducted**, **toes plantar flexed**.\n- **Laryngeal spasm:** a **crouping or whooping sound**; **maximal between 6 and 15 months**.\n- **Convulsions:** **generalized**, common in infants and older children.\n\n### Diagnosis\n- **Clinically:** tetany **plus the picture of the aetiological factor** (rickets).\n- **Laboratory:** **low serum calcium**.\n- **Imaging:** **radiographic study** if rickets is suspected.\n- **⚠️ Caution:** **convulsions or laryngeal spasm must be thoroughly investigated before tetany is diagnosed as the aetiology**.\n\n### Management\n- **Emergency:** **IV calcium gluconate, 5 – 10 ml of 10 % solution, slowly over 10 minutes**.\n- **Acute seizure:** **IV diazepam 0.3 mg/kg/dose**.\n- **Laryngeal stridor:** **oxygen inhalation**.\n- **Maintenance:** **oral Ca gluconate or Ca lactate 200 – 500 mg/kg/day**, divided.\n- **And:** **oral vitamin D 4000 U/day** in cases due to rickets.\n- **Cause:** **investigate and treat** it, and the **precipitating condition**, e.g. acute infection.\n\nSrc: BK pp.36–37; L17 p.51 (image)",
        "qs": []
      },
      {
        "id": "nut-30",
        "w": "must",
        "h": "Vitamin A deficiency",
        "body": "### Functions — four\n- **Vision:** **formation of the visual pigment**, essential for **dim light and colour vision**.\n- **Epithelium:** **maintains the integrity of the epithelial surfaces**.\n- **Bone and teeth:** **formation of mucopolysaccharides** in their **matrix**.\n- **Growth:** **essential** for it.\n\n### Sources and requirement\n- **Animal:** **animal fats, milk and milk products, egg yolk, liver — especially cod liver oil**.\n- **Plant:** **yellow and green fruits and vegetables**, e.g. **carrots, rich in carotene**.\n- **Daily requirement:** **4000 IU** (range 1500 – 5000), or **150 – 500 µg retinol equivalents**.\n\n### Causes of deficiency\n- **Deficient intake:** e.g. a **vegetarian diet**.\n- **Impaired absorption:** e.g. **coeliac disease, cholestatic jaundice**.\n- **Deficient storage:** as in **liver cirrhosis**.\n- **Hypoproteinaemia:** **albumin is the carrier** — e.g. in **kwashiorkor**.\n\n### Manifestations — eye\n- **Night blindness.**\n- **Xerophthalmia:** **dryness of the conjunctiva**.\n- **Keratomalacia:** **softening of the cornea**.\n- **Cornea:** **ulceration, necrosis, permanent scar**.\n- **Bitot spots:** **dry white plaques on the bulbar conjunctiva**.\n\n### Manifestations — skin, mucosa, skeleton\n- **Xerosis of skin:** **dry, scaly and rough**.\n- **Follicular hyperkeratosis:** over **buttocks and extensor surfaces of the limbs** — **toad skin**.\n- **Infection:** **recurrent respiratory and urinary** — **epithelial cell metaplasia and low immune response**.\n- **Skeletal:** **faulty epiphyseal bone formation**, **retardation of growth**.\n\n**⚠️ The two associations:** **increased susceptibility to infection** and **increased mortality**.\n\n### Prophylaxis and treatment — WHO and Ministry of Health\n\n|Group|Oral dose|\n|---|---|\n|**Normal children, 1st dose**|**100,000 IU at 9 months**|\n|**Normal children, 2nd dose**|**200,000 IU at 18 months**, with the booster OPV and DPT|\n|**High risk or treatment, < 6 m**|**50,000 IU single dose**|\n|**High risk or treatment, 6 – 12 m**|**100,000 IU single dose**|\n|**High risk or treatment, > 12 m**|**200,000 IU single dose**|\n|**Lactating mothers**|**200,000 IU within 8 weeks of delivery**|\n\n**High risk means:** **severe malnutrition, persistent diarrhoea, respiratory infection, measles**.\n\n**Alternatives:** **5000 – 10,000 IU/day for 2 weeks**; in **malabsorption**, **10,000 – 25,000 IU/day**.\n\nSrc: BK pp.37–38",
        "qs": []
      },
      {
        "id": "nut-31",
        "w": "high",
        "h": "The other vitamins — one grid",
        "body": "**Fat soluble:** **E – D – A – K.** **Water soluble:** **B1 · B2 · B3 · B6 · B12 · folate · C.**\n\n|Vitamin|Function|Deficiency|Source|Daily dose|\n|---|---|---|---|---|\n|**B1 Thiamine**|Co-enzyme in decarboxylation of pyruvic acid → acetyl CoA|**Beri-beri:** polyneuropathy, **tender calves**, areflexia, ophthalmoplegia, **heart failure**, oedema|Liver, meat, milk, cereals, nuts, legumes. **Rice is very poor in thiamin**|**5–25 mg orally**|\n|**B2 Riboflavin**|Co-enzyme in oxidation–reduction (**FAD**)|Anorexia, no weight gain, anaemia, **angular stomatitis, cheilosis, glossitis**, mucositis, **nasolabial seborrhoea**, photophobia, **corneal vascularization**|Liver, meat, milk, cheese, eggs, whole grain, green leafy vegetables|**5–25 mg orally**|\n|**B3 Niacin**|Co-enzyme in oxidation–reduction (**NAD**)|**Pellagra:** photosensitivity, **dermatitis and rough skin over exposed parts**, **dementia, diarrhoea, death**|Liver, meat, fish, whole grain, green leafy veg. **Tryptophan is the precursor; corn is very poor in niacin**|**25–50 mg orally**|\n|**B6 Pyridoxine**|Co-factor in amino acid metabolism|Vomiting, diarrhoea, seborrhoea, scaly dermatitis, **microcytic hypochromic anaemia**, **seizures**, peripheral neuropathy, hyperacusis; **B6 dependency** — no response to usual doses|Liver, meat, whole grain, peanuts, soya. **Children on INH need supplementation**|**5–25 mg**; dependency **10–250 mg orally**|\n|**B10 Folic acid**|DNA synthesis|**Megaloblastic anaemia**|Liver, cheese, cereals, green vegetables|**1 mg orally**|\n|**B12 Cyanocobalamine**|DNA synthesis; co-enzyme in folate metabolism|**Megaloblastic anaemia**, vitiligo, peripheral neuropathy, **spinal posterior and lateral column disease**|Meat, fish, cheese|**50–100 µg IM monthly**|\n|**Biotin**|Co-factor in amino acid metabolism (carboxylase reactions)|Anorexia, nausea, pallor, dermatitis, **alopecia**, glossitis, mental changes, hypotonia, **death**|Meat, yeast, eggs; **normally synthesized by intestinal flora**|**0.15–0.3 mg orally**|\n|**C Ascorbic acid**|Reducing agent; **collagen metabolism** — cartilage, bone matrix, connective tissue of blood vessels|**Scurvy:** irritability, purpura, **bleeding gums**, **periosteal haemorrhages**, bone aches, **pseudoparalysis with frog position of the extremities**|Citrus fruits, green vegetables. **Destroyed by cooking**|**250–500 mg orally**|\n|**E α-tocopherol**|Antioxidant|**Haemolysis in preterm infants**, ataxia, areflexia|Seeds, germ oils, green leafy vegetables|**1–3 IU orally**|\n|**K**|**Carboxylation of clotting factors**|**Haemorrhagic disease of the newborn**, ↑ prothrombin time|Liver, green vegetables, intestinal flora|**1 mg IM once**|\n\nSrc: BK p.39",
        "qs": []
      }
    ]
  },
  "haematology": {
    "intro": "Anaemia is examined through the causes tree and the age-specific normal ranges — know the physiological nadir. Iron deficiency carries the microcytic questions. Bone marrow failure is asked as pancytopenia, and Fanconi anaemia by its non-haematological features.",
    "sections": [
      {
        "id": "haem-1",
        "w": "must",
        "h": "Where blood is made — sites, cells and the lineage tree",
        "body": "### Sites of haemopoiesis\n\n|Age|Site|Duration|\n|---|---|---|\n|**Fetal**|**Yolk sac**|**0 – 2 months**|\n|**Fetal**|**Liver & spleen**|**2nd – 7th month**|\n|**Fetal**|**Bone marrow**|**6 – 7th month onward**|\n|**After birth**|**Bone marrow**|**Infant: ALL bones. Older child: CENTRAL bones**|\n\n**Postnatal ranking:** **vertebrae and pelvis** highest for life, then **sternum, ribs**; **femur and tibia fall away**.\n\n### The three classes of haematopoietic cell\n- **1 —** pluripotential progenitor **stem cells**.\n- **2 —** committed proliferating cells of **myeloid, erythroid and megakaryocytic** lineage.\n- **3 —** postmitotic **maturing cells**.\n\n### The lineage tree\n- **Two limbs:** pluripotent stem cell → **myeloid** and **lymphoid** stem cell.\n- **Myeloid → CFU-GEMM:** then **BFU-E → CFU-E** (red), **CFU-Meg** (platelets), **CFU-GM → CFU-G, CFU-M**, **CFU-Eo**, **CFU-Bas**.\n- **Lymphoid:** **pre-B cell** and **prothymocyte** → B and T lymphoblasts.\n\nSrc: L44 pp.5–9 (pp.5, 6, 8, 9 image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "haem-2",
        "w": "high",
        "h": "Haemopoietic growth factors",
        "body": "**Definition:** **glycoprotein hormones and mediators** regulating **proliferation and differentiation of haemopoietic progenitors** and the **function of mature blood cells**. They **may act locally or circulate**.\n\n|Major cell type produced|Factor|\n|---|---|\n|Granulocytes, monocytes, macrophages & eosinophils|**GM-CSF**|\n|Granulocytes (esp. **neutrophils**)|**G-CSF**|\n|Monocytes & macrophages|**M-CSF**|\n|Granulocytes, monocytes, macrophages, eosinophils, basophils & mast cells|**IL-3 (multi-CSF)**|\n|Eosinophils|**IL-5**|\n|**Erythrocytes & megakaryocytes**|**EPO**|\n|Megakaryocytes|**Thrombopoietin**|\n\n*G-CSF returns as the treatment of Shwachman–Diamond neutropenia; thrombopoietin as the receptor agonists of chronic ITP.*\n\nSrc: L44 pp.10–11 (both image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "haem-3",
        "w": "high",
        "h": "Haemoglobin types and the switch",
        "body": "|Haemoglobin|Chains|% at birth|% at 6th month|\n|---|---|---|---|\n|**Fetal (F)**|**2α + 2γ**|**65 %**|**2 %**|\n|**Adult (A1)**|**2α + 2β**|**34 %**|**95 %**|\n|**Adult (A2)**|**2α + 2δ**|**< 1 %**|**3 %**|\n\n**The switch:** γ gives way to β over the **first six months**.\n\nSrc: L44 p.12",
        "qs": []
      },
      {
        "id": "haem-4",
        "w": "must",
        "h": "Normal haematological values by age",
        "body": "|Age|Hb (g/L)|MCV (fl)|WBC (×10⁹/L)|Platelets (×10⁹/L)|\n|---|---|---|---|---|\n|**Birth**|**145 – 215**|100 – 135|10 – 26|**150 – 450 at ALL ages**|\n|2 weeks|134 – 198|88 – 120|6 – 21|—|\n|**2 months**|**94 – 130**|84 – 105|6 – 18|—|\n|1 year|113 – 141|71 – 85|6 – 17.5|—|\n|2 – 6 years|115 – 135|75 – 87|5 – 17|—|\n|6 – 12 years|115 – 135|77 – 95|4.5 – 14.5|—|\n|**12 – 18 y male**|**130 – 160**|78 – 95|4.5 – 13|—|\n|**12 – 18 y female**|**120 – 160**|78 – 95|4.5 – 13|—|\n\n*⚠️ The 2-month row, 94–130 g/L, is NORMAL here and ANAEMIC by the deck’s own definition slide. Both printed; see haem-6.*\n\nSrc: L44 p.13 (image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "haem-5",
        "w": "must",
        "h": "The physiological nadir — term and preterm",
        "body": "**Term:** Hb **falls in the first few weeks** from reduced production, **nadir 100 g/L at 2 months**.\n\n**Preterm:** a **steeper fall**, mean **65 – 90 g/L at 4 – 8 weeks chronological age**.\n\n### Stores\n- **At birth:** **iron, folic acid and B12 stores are ADEQUATE in both**.\n- **In preterms:** **lower and depleted more quickly** — **maintain by supplements**.\n\nSrc: L44 p.14 (image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "haem-6",
        "w": "must",
        "h": "Anaemia — the definition and the age cut-offs",
        "body": "**Definition:** **reduction of red cell volume (haematocrit) OR haemoglobin concentration below the normal range FOR AGE**.\n\n### L44’s cut-offs\n- **Neonate:** **< 140 g/L**.\n- **1 – 12 months:** **< 100 g/L**.\n- **1 – 12 years:** **< 110 g/L**.\n\n**The load-bearing phrase — *for age*:** 110 g/L is normal at four years and anaemic at birth.\n\n*⚠️ Three different reference sets are printed across the three sources — this one, haem-4’s table and haem-14’s WHO limits. They do not reconcile; all three are carried as printed.*\n\nSrc: L44 p.16",
        "qs": []
      },
      {
        "id": "haem-7",
        "w": "high",
        "h": "Erythropoiesis — three phases, and what it needs",
        "body": "### The three developmental phases\n- **Phase 1 —** ribosome synthesis. **Phase 2 —** haemoglobin accumulation. **Phase 3 —** ejection of the nucleus.\n\n**The cell sequence:** haemocytoblast → **proerythroblast** → early → late erythroblast → **normoblast** → **reticulocyte** → erythrocyte.\n\n**Requirements:** **iron, folate, vitamin B12, other trace nutrients, erythropoietin (EPO) and a FUNCTIONING BONE MARROW**.\n\n*Those six are the anaemia differential read backwards — remove one and a mechanism in haem-8 appears.*\n\nSrc: L44 p.20",
        "qs": []
      },
      {
        "id": "haem-8",
        "w": "must",
        "h": "Causes of anaemia in infants and children — three mechanisms",
        "body": "|Mechanism|Branch|Entities|\n|---|---|---|\n|**Impaired production**|**Red cell aplasia**|**Parvovirus B19** · **Diamond–Blackfan anaemia** (congenital red cell aplasia) · **transient erythroblastopenia of childhood** · rarities: **Fanconi anaemia, aplastic anaemia, leukaemia**|\n|**Impaired production**|**Ineffective erythropoiesis**|**Iron deficiency** · **folic acid deficiency** · **chronic inflammation (juvenile idiopathic arthritis)** · **chronic renal failure** · rarities: **myelodysplasia, lead poisoning**|\n|**Increased destruction (haemolysis)**|Red cell **membrane**|**Hereditary spherocytosis**|\n|**Increased destruction (haemolysis)**|Red cell **enzyme**|**Glucose-6-phosphate dehydrogenase deficiency**|\n|**Increased destruction (haemolysis)**|**Haemoglobinopathies**|**Thalassaemias, sickle cell disease**|\n|**Increased destruction (haemolysis)**|**Immune**|**Haemolytic disease of the newborn** · **autoimmune haemolytic anaemia**|\n|**Blood loss**|Feto-maternal bleeding|—|\n|**Blood loss**|Chronic **GI** blood loss|**Meckel diverticulum**|\n|**Blood loss**|Inherited **bleeding** disorders|**von Willebrand disease**|\n\n*Spherocytosis and G6PD are diseases in `neonatal`; thalassaemia’s inheritance in `genetics`; vWD in haem-41.*\n\nSrc: L44 p.17 (image-only, re-rendered at 300 dpi)",
        "qs": []
      },
      {
        "id": "haem-9",
        "w": "must",
        "h": "Anaemia in the newborn, and anaemia of prematurity",
        "body": "### Anaemia in the newborn — by mechanism\n- **Decreased production:** **Parvovirus B19** · **Diamond–Blackfan anaemia**.\n- **Destruction:** **HDN — Rh, ABO** · **genetic** disorders of haemoglobin, membrane or enzymes.\n- **Blood loss:** **fetomaternal haemorrhage**, **twin-to-twin**, **placental abruption**.\n\n### Anaemia of prematurity — four causes\n- **Inadequate EPO** production. **Decreased RBC life span.**\n- **Frequent blood sampling.** **Iron and folic deficiency at 2 – 3 months.**\n\n**⚠️ The deck’s own highlighted advice:** **DELAY CORD CLAMPING AT BIRTH.**\n\nSrc: L44 pp.18–19 (both image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "haem-10",
        "w": "must",
        "h": "Classification by MCV",
        "body": "|Microcytic|Normocytic|Macrocytic|\n|---|---|---|\n|**Iron deficiency**|**↓ Production**|**Newborn**|\n|**Thalassaemia**|**Blood loss**|**Reticulocytosis**|\n|**Lead poisoning**|**Haemolysis**|**Vitamin B12**|\n|**Chronic disease**|**Chronic disease**|**Folic acid**|\n\n**⚠️ Chronic disease sits in TWO columns** — which is why MCV alone never settles it.\n\n**The matching film:** microcytic — **pencil cells, hypochromia**; normocytic — **normal central pallor**; macrocytic — **oval macrocytes**.\n\nSrc: L44 p.26",
        "qs": []
      },
      {
        "id": "haem-11",
        "w": "high",
        "h": "The blood film — size, shape and inclusions",
        "body": "- **Anisocytosis:** red cells of **unequal SIZE**. **Poikilocytosis:** **different SHAPES**.\n\n### The named shapes\n- **Spherocytes —** loss of central pallor; hereditary spherocytosis.\n- **Sickle cells —** with erythroblasts on the same film.\n- **Target cells and Howell–Jolly bodies —** the post-splenectomy / haemoglobinopathy pair.\n- **G6PD film —** the bite-and-blister picture of oxidative haemolysis.\n- **Pencil cells —** the microcytic, iron-deficient film.\n\nSrc: L44 pp.26–28",
        "qs": []
      },
      {
        "id": "haem-12",
        "w": "must",
        "h": "Reticulocytes, polychromasia and the markers of destruction",
        "body": "### The reticulocyte count — the simple measure of PRODUCTION\n- **What it is:** a **young RBC still containing a small amount of RNA**.\n- **Maturation:** **1 day**, **under the influence of EPO**.\n- **Turnover:** **1/120th** of red cells normally.\n- **Normal values:** **5 % in neonates, 1 % later**.\n\n**Polychromasia:** an **increased reticulocyte count is usually accompanied by peripheral smear RBC polychromasia** — the film sign of the same thing.\n\n### Indirect bilirubin — the marker of DESTRUCTION\n- **Why it works:** **80 % of normal bilirubin production is degraded Hb**.\n- **The caveat:** **in the absence of liver disease** it is an **excellent indicator of RBC destruction**.\n- **Other markers:** **LDH** and **haptoglobin**.\n\nSrc: L44 pp.21–22, 24 (all three image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "haem-13",
        "w": "must",
        "h": "The diagnostic approach to anaemia in children",
        "body": "**Two branches only:** the **reticulocyte count**, then the **bilirubin**. Nothing else is needed to place a child in one of three boxes.\n\nSrc: L44 p.23 (image-only, recovered by render)",
        "flow": {
          "title": "Anaemia → reticulocytes → bilirubin",
          "steps": [
            {
              "k": "decision",
              "t": "Reticulocytes VERY LOW?",
              "yes": "Red cell production reduced — red cell aplasia",
              "no": "Reticulocytes normal or high — go to bilirubin"
            },
            {
              "k": "alert",
              "t": "Likely: Parvovirus B19 · Diamond–Blackfan anaemia. Tests: parvovirus serology · BONE MARROW ASPIRATE",
              "n": "aplasia limb"
            },
            {
              "k": "decision",
              "t": "Bilirubin RAISED?",
              "yes": "HAEMOLYSIS",
              "no": "Blood loss or ineffective erythropoiesis"
            },
            {
              "k": "step",
              "t": "Haemolysis — likely: hereditary spherocytosis · sickle cell disease · β-thalassaemia. Tests: blood film · Hb HPLC",
              "n": "haemolysis limb"
            },
            {
              "k": "step",
              "t": "Bilirubin normal — likely: IRON DEFICIENCY. Tests: blood film · SERUM FERRITIN",
              "n": "blood loss limb"
            }
          ]
        },
        "qs": []
      },
      {
        "id": "haem-14",
        "w": "must",
        "h": "Iron deficiency anaemia — definitions, WHO limits and who gets it",
        "body": "**Iron deficiency:** **insufficient total body iron to maintain normal physiologic functions**.\n\n**Iron deficiency anaemia:** **Hb ≥ 2SD below the mean** for a healthy population of the **same age and sex**, **resulting from ID**.\n\n|WHO lower limits|Hb (g/dL)|Haematocrit (%)|\n|---|---|---|\n|Children **6 – 59 months**|**11**|**33**|\n|Children **5 – 11 years**|**11.5**|**34**|\n|Children **12 – 14 years**|**12**|**36**|\n|**Girls > 15 years**|**12**|**36**|\n|**Boys > 15 years**|**13**|**39**|\n\n### Epidemiology and the two peaks\n- **Rank:** ID is the commonest **nutritional deficiency** worldwide; **IDA the commonest ANAEMIA** worldwide.\n- **Burden:** **25 % of the global population, nearly 2 billion people**; **highest with low socioeconomic status**.\n- **Peak 1 —** infancy and toddlerhood, **6 – 24 months**.\n- **Peak 2 —** adolescence, **especially female** (abnormal uterine bleeding, heavy menstruation).\n\n*⚠️ The handout writes \"≥ 2SD below the mean\"; the inequality is inverted in the source and is reproduced as printed.*\n\nSrc: IDA p.1 (the WHO table is an image, recovered by render)",
        "qs": []
      },
      {
        "id": "haem-15",
        "w": "must",
        "h": "Physiology of iron, and the dietary sources",
        "body": "### Where the iron comes from\n- **Fetal:** **60 % crosses the placenta from maternal blood in the THIRD TRIMESTER**.\n- **Breast milk:** **low iron but 50 % absorbed** — **adequate if totally breastfed for 6 months, unless preterm**.\n- **Formula:** **supplemented with adequate iron**.\n- **Cow’s milk:** **low content AND poor bioavailability** — a **poor source**.\n- **Then solids**, at weaning.\n\n**The absorption figure:** **about 10 % ONLY of dietary iron is absorbed.**\n\n### Dietary sources\n- **High:** **red meat** (beef, lamb) · **liver, kidney** · **oily fish** (pilchards, sardines).\n- **Average:** pulses, beans, peas · **fortified cereals with added vitamin C** · wholemeal · **dark green vegetables** · dried fruit · nuts and seeds.\n- **Avoid in excess in toddlers:** **cow’s milk** · **tea — TANNIN inhibits uptake** · **high-fibre — PHYTATES inhibit absorption**.\n\nSrc: IDA p.2 (the dietary box is an image, recovered by render)",
        "qs": []
      },
      {
        "id": "haem-16",
        "w": "must",
        "h": "Aetiology of iron deficiency anaemia — four mechanisms",
        "body": "### 1 — Inadequate iron supply\n- **Prematurity** and **multiple twins** — decreased stores.\n- **Early cow milk feeding —** low iron **AND blood loss in stools from cow’s milk protein allergy**.\n- **Exclusive breastfeeding after 6 months** without supplement.\n- **Low intake** of iron-containing foods.\n\n### 2 — Increased requirements\n- **Premature infants** · **adolescence** (pubertal growth spurt).\n\n### 3 — Decreased GI absorption\n- **Causes:** **coeliac disease · chronic diarrhoea · inflammatory bowel disease · parasitic infestations**.\n\n### 4 — Blood loss\n- **Sources:** **cow’s milk protein allergy · Meckel’s diverticulum · bleeding diathesis**.\n\n*Cow’s milk appears under BOTH supply and blood loss — the single commonest dietary offender.*\n\nSrc: IDA p.3",
        "qs": []
      },
      {
        "id": "haem-17",
        "w": "must",
        "h": "Clinical manifestations of iron deficiency anaemia",
        "body": "### 1 — General manifestations of anaemia\n- **Pallor:** of **palms, nail beds, oral mucous membranes and conjunctiva**.\n- **Effort:** **exercise intolerance, easy fatigability, lassitude, general weakness**.\n- **Cardiorespiratory:** **dyspnoea and palpitation** on exertion or emotion; **haemic murmurs**.\n- **Cerebral:** **headache, lack of concentration, irritability, syncopal attacks**.\n\n### 2 — GIT manifestations\n- **Mucosal:** **anorexia, atrophic glossitis, dysphagia**.\n- **Pica —** wall plaster, clay; **geophagia —** earth; **pagophagia —** ice.\n\n### 3–5 — CNS, epithelial, immunological\n- **CNS:** **short attention span**, ↓ alertness, ↓ learning ability and school performance.\n- **Epithelial:** **spoon-shaped or concave nails** are adult findings, **UNCOMMON in infants and children**.\n- **Immunological:** **upper respiratory infections are more common**.\n\nSrc: IDA p.3",
        "qs": []
      },
      {
        "id": "haem-18",
        "w": "must",
        "h": "IDA — laboratory findings and the therapeutic trial",
        "body": "### The laboratory picture\n- **CBC:** **↓ Hb, ↓ MCV, ↓ MCH, ↑ RDW**, **normal or low reticulocytes**.\n- **Iron studies:** **↓ ferritin, ↓ serum iron, ↑ TIBC, ↓ T-SAT %**.\n- **Smear:** **anisopoikilocytosis, hypochromia, microcytosis, PENCIL CELLS**.\n- **Consider:** **stool occult blood** and a **coeliac screen** — if a **non-dietary cause** is suggested, or on **failure to respond**.\n\n### Diagnosis rests on three things\n- **1 —** clinical manifestations. **2 —** laboratory findings.\n- **3 — Therapeutic trial: the BEST diagnostic study.**\n\n|Successful oral iron produces|When|\n|---|---|\n|**Improvement in neurologic function**|**24 – 48 hours**|\n|**Reticulocytosis**|**48 – 72 hours, peak day 5 – 7**|\n|**Increase in Hb**|**4 – 30 days (1 g/dL per week)**|\n|**Repletion of iron stores**|**1 – 3 months**|\n\nSrc: IDA p.4",
        "qs": []
      },
      {
        "id": "haem-19",
        "w": "must",
        "h": "IDA — differential diagnosis and prevention",
        "body": "**The differential — other microcytic hypochromic anaemias:** **thalassaemia trait · anaemia of chronic disease · lead poisoning · sideroblastic anaemia**.\n\n### Prevention — two supplementation rules\n- **Term, exclusively breastfed:** at risk **after 4 completed months**. **1 mg/kg/day oral iron FROM 4 MONTHS**, until iron-containing complementary foods (incl. **iron-fortified cereals**) are introduced.\n- **Preterm on human milk:** **2 mg/kg/day BY 1 MONTH**, until weaned to iron-fortified formula or eating foods supplying **2 mg/kg**.\n\n*The two figures move with the two risks: 1 mg/kg from 4 months at term, 2 mg/kg from 1 month preterm.*\n\nSrc: IDA pp.4–5",
        "qs": []
      },
      {
        "id": "haem-20",
        "w": "must",
        "h": "IDA — treatment",
        "body": "**For most children:** **dietary advice plus oral iron supplementation**.\n\n### Dietary advice\n- **Breastfeed at least 6 months** if possible; the alternative is **iron-fortified infant formula**.\n- **Iron-rich foods up, cow milk down.**\n- **Cow milk: NONE under 12 months**, **< 500 mL/day over 12 months**.\n\n### Iron therapy\n- **1 — Oral iron salts, 3 – 6 mg/kg/day**, for **a minimum of 3 MONTHS after the anaemia is corrected**, to replenish stores.\n- **Practical points:** stools turn **black**; may cause **constipation**; may **stain the teeth** — **give through a straw** and brush after; **absorbed better with vitamin C**, e.g. orange juice.\n- **2 — Treat the cause:** correct diet, **treat parasitic infestations**, **stop cow milk**.\n- **3 — Parenteral iron:** only in **malabsorption, poor compliance, or need for rapid correction**.\n- **4 — Newer formulations:** **liposomal iron, iron bisglycinate**, for intolerance to oral salts.\n- **5 — Transfusion:** rarely, except **Hb below 4 g/dL with cardiac dysfunction**, or with infection and hypoxia — **packed cells, 2 – 3 cc/kg**.\n\nSrc: IDA pp.5–6",
        "qs": []
      },
      {
        "id": "haem-21",
        "w": "must",
        "h": "Bone marrow failure and pancytopenia — the definitions",
        "body": "**BMF (aplastic anaemia):** **reduction or absence of ALL 3 blood cell lineages in the marrow**, giving **peripheral reduction of mature erythrocytes, granulocytes and platelets**.\n\n**It may be partial or complete:** the cytopenia may be a **SINGLE CYTOPENIA**, or **progress to pancytopenia**.\n\n**Pancytopenia:** **reduction below normal of all 3 peripheral lineages, OR AT LEAST TWO cell lines**.\n\n### The bone marrow failure syndromes (BMFS)\n- **Acquired →** aplastic anaemia.\n- **Inherited →** **isolated cytopenia**, or **pancytopenia (aplastic anaemia)**.\n\n*The two phrases the deck highlights are `single cytopenia` and `Pancytopenia` — marrow failure need not present with all three lines down.*\n\nSrc: L44 pp.32–34 (p.33 image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "haem-22",
        "w": "must",
        "h": "Aplastic anaemia — aetiology",
        "body": "### Acquired\n- **Drugs:** **antimetabolites, antimitotic agents, gold, chloramphenicol, phenylbutazone, chemotherapy, sulfonamides**.\n- **Radiation.** **Chemicals:** **benzenes, glue, solvents, insecticides**.\n- **Viruses:** **hepatitis A, B, C, E, G**, **parvovirus B19**, **CMV**.\n- **PNH —** paroxysmal nocturnal haemoglobinuria.\n- **Miscellaneous:** pregnancy, connective-tissue and immune disorders, **graft-versus-host disease**, **BM invasion by malignancy** or metabolic disease.\n\n### Idiopathic — and hereditary\n- **Idiopathic: 70 – 80 % of cases** — by far the largest group.\n- **Hereditary:** **Fanconi’s anaemia** · **Shwachman syndrome**.\n\nSrc: L44 p.36 (image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "haem-23",
        "w": "must",
        "h": "Red cell aplasia, the marrow, and how failure presents",
        "body": "### The four diagnostic clues to RED CELL APLASIA\n- **↓ Reticulocytes DESPITE a low Hb** — production has stopped.\n- **Normal bilirubin** — nothing is being destroyed.\n- **Negative Coombs test** — it is not immune.\n- **Marrow: ABSENT RBC PRECURSORS** on examination.\n\n### The marrow itself\n- **Aspiration site:** the **posterior iliac crest** — through cortical bone into spongy bone and marrow.\n- **Normal:** densely cellular between fat spaces. **Aplastic:** **replaced by fat**, only islands of cells.\n\n### Presentation — one line each\n- **Anaemia →** pallor. **Thrombocytopenia →** petechiae and purpuric eruptions.\n- **Neutropenia →** infection: e.g. **haemorrhagic gum lesions from *Capnocytophaga ochraceus*, easily confused with herpes simplex**.\n\nSrc: L44 pp.29–31, 35, 38–39",
        "qs": []
      },
      {
        "id": "haem-24",
        "w": "must",
        "h": "Fanconi anaemia",
        "body": "**Fanconi anaemia:** a **rare condition where the BM fails to produce sufficient blood cells** — **reduced or absent production of RBCs, WBCs and platelets**.\n\n**The two facts that place it —** the **MOST COMMON INHERITED APLASTIC ANAEMIA**, and **autosomal recessive**, from a mutation in **one of 22 FANC genes, mostly FANCA**.\n\n### Typical features\n- **The triad:** **progressive pancytopenia** · **macrocytosis** · **multiple congenital anomalies**.\n- **Diagnosis:** **increased chromosome breakage in peripheral blood lymphocytes**, or **genetic analysis of FANC mutation**.\n\n### The congenital anomalies\n- **Core list:** **short stature** · **abnormal radii and thumbs** · **renal malformations** · **microphthalmia** · **microcephaly** · **café-au-lait spots** · **delayed growth and development** · **may be scoliosis**.\n- **The wider plate adds:** tracheo-oesophageal fistula/atresia, vertebral and cardiac defects, deafness with small ear canals, thyroid dysfunction, **reduced fertility**, **low bone mineral density**, mood disorders.\n\n### Outcome and treatment\n- **⚠️ Termination:** FA frequently **ends in MDS AND/OR AML**.\n- **Treatment: HAEMOPOIETIC STEM CELL TRANSPLANTATION (HSCT)** — the deck’s own highlighted answer.\n- **Others:** **androgen therapy**, **transfusions and growth factors**.\n- **Under development:** **gene therapy**, **metformin**.\n\nSrc: L44 pp.40–48 (all image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "haem-25",
        "w": "must",
        "h": "Shwachman–Diamond syndrome",
        "body": "**Shwachman–Diamond syndrome:** a **rare AUTOSOMAL RECESSIVE syndrome**, from a mutation in the **SBDS gene leading to ABNORMAL RIBOSOMES**. It **primarily affects marrow, pancreas and bones**.\n\n### Characterised by\n- **The four:** **BM failure** · **pancreatic exocrine failure** · **skeletal abnormalities** · **50 % neurocognitive abnormalities**.\n- **Rank:** the **2nd most common cause of exocrine pancreatic insufficiency**.\n\n|Clinical features|Laboratory findings|\n|---|---|\n|**FTT · steatorrhoea · recurrent infection**|**Neutropenia** · anaemia and thrombocytopenia|\n|**Short stature · METAPHYSEAL DYSOSTOSIS**|**Low pancreatic trypsinogen · low faecal elastase**|\n|Dipper rash|**High HbF** · fat-soluble vitamin deficiency|\n\n### Diagnosis, risk and treatment\n- **Diagnosis:** **haematological abnormalities PLUS exocrine pancreatic insufficiency**; bloods show **cytopenias**; **genetic testing for SBDS**; **BM biopsy, aspirate smear, cytology and skeletal survey**.\n- **⚠️ THE DISCRIMINATOR:** the **SWEAT CHLORIDE TEST IS NORMAL in SDS**, which **distinguishes it from cystic fibrosis**.\n- **Increased risk of:** **AML** and **MDS**.\n- **Treatment:** **pancreatic enzyme replacement** and **G-CSF**.\n\nSrc: L44 pp.50–52 (all image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "haem-26",
        "w": "high",
        "h": "Causes of pancytopenia — four mechanisms",
        "body": "|Mechanism|Causes|\n|---|---|\n|**BM underproduction**|**Congenital — IBMFS** (inherited bone marrow failure syndromes). **Acquired — idiopathic AA**, or **secondary**: **drugs, toxins, infections, alcohol, radiation, anorexia, PNH, pregnancy, HLH**|\n|**BM infiltration**|**Malignancy · myelofibrosis · granuloma · nutritional**|\n|**Destruction**|**Autoimmune · HLH**|\n|**Sequestration**|**Hypersplenism**|\n\n**Other frameworks the plate offers:** **marrow cellularity** (hypocellular / non-hypocellular) · **clonality** · **duration** (transient / chronic) · **heredity** (congenital / acquired).\n\nSrc: L44 p.53 (image-only, re-rendered at 300 dpi)",
        "qs": []
      }
    ]
  },
  "haem-bleeding": {
    "intro": "The first question is always platelet or coagulation, answered by the site of bleeding and the screening panel. ITP versus haemophilia versus von Willebrand is the discrimination. DIC is asked as the panel that moves in every direction at once.",
    "sections": [
      {
        "id": "haem-27",
        "w": "must",
        "h": "Haemostasis — primary and secondary",
        "body": "**Haemostasis:** from the Greek, **\"the stoppage of blood flow\"**. At an endothelial injury **bleeding must be prevented at the site AND flow must be maintained**.\n\n### Two stages\n- **Primary:** the **PLATELET and VASCULAR response** to vessel injury.\n- **Secondary:** the **COAGULATION FACTOR response** to that injury.\n\n**Together:** platelets, vessels and factors **stop bleeding and allow vessel repair through a STABLE FIBRIN-PLATELET PLUG at the site of injury**.\n\n### The platelet sequence\n- **Adhesion:** resting platelets bind via **vWF**.\n- **Activation, then release:** **TxA2, ADP, serotonin, fibrinogen, thrombospondin**.\n- **Platelet plug formation.**\n\nSrc: L47 pp.3–11",
        "qs": []
      },
      {
        "id": "haem-28",
        "w": "must",
        "h": "The five haemostatic mechanisms",
        "body": "### I — Vascular\n- **Local vasoconstriction.**\n- **Initiation of the intrinsic pathway** (factor XII).\n- **Activation of the extrinsic pathway** (tissue thromboplastin).\n- **Platelet adhesion and aggregation** — release of **vWF and ADP**.\n\n### II — Platelet\n- **Adhesion**, then **aggregation** — release of **ADP** and **thromboxane A2**.\n\n### III — Coagulation factors, in three steps\n- **Step I:** ends by **activation of factor X**. **Step II:** **active thrombin**. **Step III:** **fibrinogen → fibrin**.\n\n### IV — Coagulation inhibitors · V — Fibrinolysis\n\n*⚠️ Both are named, each given a slide, and neither elaborated — the slides are blank below the heading. Confirmed by rendering pp.22–23.*\n\nSrc: L47 pp.14–23",
        "qs": []
      },
      {
        "id": "haem-29",
        "w": "must",
        "h": "The coagulation cascade — three limbs, three tests",
        "body": "|Limb|Factor sequence|Test|Normal|\n|---|---|---|---|\n|**Intrinsic**|**XII (Hageman) → XI → IX → VIII**, with **HMWK** and **surface active components**|**PTT / aPTT**|**25 – 40 sec**|\n|**Extrinsic**|**Tissue thromboplastin (TF) → VII**|**PT**|**11 – 14 sec**|\n|**Common**|**X → V → II (prothrombin → thrombin) → I (fibrinogen → fibrin)**|**TT**|**15 – 20 sec**|\n\n**Every activation needs Ca²⁺ and phospholipid**, and the **prothrombinase complex (Xa/Va/PL)** converts prothrombin to thrombin.\n\n**Thrombin feeds back:** it activates **V**, **VIII** and **XIII**, the stabilizing factor that cross-links fibrin monomer into a **stable fibrin clot**.\n\n**Where each disease sits:** **haemophilia A at VIII**, **B at IX**, **C at XI** — all intrinsic, so a long PTT with a normal PT; **vWD at VIII** via its carrier; **vitamin K deficiency** at the common and extrinsic limbs, so **both** prolonged.\n\nSrc: L47 pp.7–10, 21 (the cascade slides extract as loose symbols and were read as images)",
        "qs": []
      },
      {
        "id": "haem-30",
        "w": "must",
        "h": "Screening tests for coagulation and bleeding",
        "body": "- **1 —** CBC. **2 —** platelet count. **3 —** platelet function.\n- **4 — T.T.** (thrombin time), **15 – 20 sec**.\n- **5 — PT**, **12 – 14 sec**. **6 — PTT**, **24 – 40 sec**.\n- **7 —** quantitative fibrinogen assay. **8 —** D-dimers.\n\n*⚠️ L47 gives the PTT range three ways — 25–40, 24–40, and 25–45 sec on the haemophilia slide. All three printed.*\n\nSrc: L47 p.24",
        "qs": []
      },
      {
        "id": "haem-31",
        "w": "must",
        "h": "Classification of the haemorrhagic disorders",
        "body": "**Definition:** disorders characterised by an **abnormal bleeding tendency due to a HAEMOSTATIC DEFECT**. Two great branches: **BLEEDING** (platelet, vascular) and **COAGULATION DISEASES** (hereditary, acquired).\n\n|Branch|Sub-branch|Entities|\n|---|---|---|\n|**Bleeding — platelet**|**Thrombocytopenia**|see haem-32|\n|**Bleeding — platelet**|**Platelet dysfunction (thrombasthenia)**|**Inherited: Glanzmann · von Willebrand.** **Acquired: drugs · uraemia**|\n|**Bleeding — vascular**|**Hereditary**|—|\n|**Bleeding — vascular**|**Acquired**|**Vasculitis · metabolic · infection (SBE) · collagenic · scurvy**|\n|**Coagulation — hereditary**|**The haemophilias**|**A · B · C**|\n|**Coagulation — acquired**|—|**DIC** · **haemorrhagic disease of the newborn** · **liver disease** · **anticoagulants**|\n\n*⚠️ The deck files vWD under PLATELET dysfunction, then teaches it as a factor VIII disorder with a long PTT. Both are defensible; it never reconciles them.*\n\nSrc: L47 pp.19, 24–33 (one tree, redrawn nine times; written once)",
        "qs": []
      },
      {
        "id": "haem-32",
        "w": "must",
        "h": "Thrombocytopenia — the causes",
        "body": "### Increased platelet destruction\n- **Immune:** **ITP** · **SLE**.\n- **Non-immune:** **haemolytic uraemic syndrome** · **DIC** · **hypersplenism**.\n\n### Impaired platelet production\n- **Congenital:** **Fanconi anaemia** · **Wiskott–Aldrich syndrome**.\n- **Acquired:** **aplastic anaemia** · **marrow infiltration** · **drug induced**.\n\n**The axis that decides:** destruction leaves **normal or increased megakaryocytes**; impaired production leaves them **reduced**. That is why the marrow is the test when ITP misbehaves.\n\n*Aplastic anaemia and Fanconi as diseases: haem-22, haem-24. HUS in full: `renal`.*\n\nSrc: L47 p.26",
        "qs": []
      },
      {
        "id": "haem-33",
        "w": "must",
        "h": "Immune thrombocytopenic purpura — definition and classification",
        "body": "**ITP:** **autoimmune destruction of platelets by IgG autoantibodies**, giving a **reduced platelet count** and **increased megakaryocytes WITH NO BUDDING** in the marrow.\n\n**The mechanism:** autoantibodies, usually **IgG**, against **one or more platelet membrane glycoproteins**; coated platelets are **recognised by the Fc receptor on splenic macrophages, phagocytosed and destroyed**.\n\n**⚠️ The spleen is the key organ —** it is **both the site of autoantibody production (WHITE pulp) and the site of phagocytosis (RED pulp)**.\n\n### Aetiology and epidemiology\n- **Cause:** unknown in most, but often a **recent viral infection — EBV, varicella, CMV, rubella, hepatitis A, B or C**.\n- **Course in children:** mostly **ACUTE**, resolving spontaneously in **1 – 6 weeks**.\n- **Sex and age:** **males > females**; **any age, PEAK 1 – 6 YEARS**.\n\n|Phase|Definition|\n|---|---|\n|**Newly diagnosed**|**≤ 3 months** from diagnosis|\n|**Persistent**|**3 – 12 months** — no spontaneous remission, or failing to maintain complete remission to therapy|\n|**Chronic**|**> 12 months** from diagnosis|\n\nSrc: L47 pp.34–41",
        "qs": []
      },
      {
        "id": "haem-34",
        "w": "must",
        "h": "ITP — presentation and investigation",
        "body": "### Clinical presentation\n- **History:** a **preceding viral infection 1 – 4 weeks before** the thrombocytopenia.\n- **The classical presentation:** **sudden petechiae and purpura in a PREVIOUSLY HEALTHY CHILD**.\n- **Bleeding:** **epistaxis · bleeding gums · easy bruising**.\n- **Very rarely ICH:** headache, nausea, vomiting, lethargy, irritability, **decreased consciousness**, neurological symptoms.\n- **⚠️ Examination is otherwise NORMAL —** **hepatosplenomegaly, or bone or joint pain, suggests another diagnosis**.\n\n### Laboratory investigations\n- **CBC:** **ISOLATED thrombocytopenia**, **normal platelet shape**.\n- **Smear:** may show **LARGE PLATELETS in acute ITP**.\n- **Marrow aspirate and biopsy — NOT recommended in typical ITP.** Do it on **no response for > 6 months**, or **another cytopenia**. It shows **normal myeloid and erythroid cellularity with normal or increased megakaryocytes**.\n- **Exclude other causes:** **ANA** for SLE, **Coombs** for **Evans syndrome**.\n\nSrc: L47 pp.42–44",
        "qs": []
      },
      {
        "id": "haem-35",
        "w": "must",
        "h": "ITP — management",
        "body": "**The principle:** management is based **largely on the SEVERITY OF BLEEDING, risk factors and degree of thrombocytopenia** — not on the count alone.\n\n### First line, newly diagnosed\n- **Wait and watch —** *irrespective of platelet count*.\n- **Corticosteroids:** a **short course of prednisone**.\n- **IVIg:** a **single dose**, alternative to corticosteroid.\n- **IV anti-D:** for **Rh-positive, non-splenectomised** patients.\n\n### By severity\n- **Mild —** platelets **> 20,000**, **no intracranial or mucous membrane bleeding**: **observation, follow-up, avoid trauma**. Most acute ITP **needs no treatment** and resolves spontaneously.\n- **Moderate —** consider **steroids**.\n- **Symptomatic (active bleeding):** **oral prednisone**; **IVIG when a RAPID rise matters**; **IV anti-D if Rh positive**; **platelet transfusion — TEMPORARY effect only**, for severe bleeding.\n\n### Second line — persistent, chronic or relapsed\n- **TPO receptor agonists:** **romiplostim, eltrombopag**.\n- **Rituximab** on failing first line or splenectomy; also **azathioprine, ciclosporin, mycophenolate mofetil**.\n- **⚠️ Splenectomy: delay ≥ 12 MONTHS**; very rarely indicated in children, the **last option**.\n- **The caution:** chronic refractory treatment **may carry toxicity comparable to the risks of untreated thrombocytopenia**, and may itself harm quality of life.\n\nSrc: L47 pp.45–49",
        "qs": []
      },
      {
        "id": "haem-36",
        "w": "must",
        "h": "Henoch–Schönlein purpura (IgA vasculitis)",
        "body": "**HSP, also known as IgA vasculitis:** the **small vessels of SKIN, JOINTS, INTESTINES and KIDNEYS become inflamed and bleed**. **Most striking feature — a purplish rash, typically lower legs and buttocks.**\n\n### The four main characteristics\n- **Rash (purpura):** **reddish-purple spots like bruises** on **buttocks, legs and feet**; may reach arms, face and trunk; **worse over pressure areas**.\n- **Swollen, sore joints:** **mainly KNEES and ANKLES**; **may PRECEDE the rash by one or two weeks**.\n- **Digestive tract:** **belly pain, nausea, vomiting, bloody stools** — **sometimes before the rash**.\n- **Kidney:** **protein or blood in the urine**, silent without a urine test.\n\n### Histopathology and complications\n- **Renal biopsy — the most definitive tool** for IgAV nephritis and IgA nephropathy; **both show MESANGIAL IgA DEPOSITS**.\n- **IgAV nephritis differs:** **CAPILLARY and SUBENDOTHELIAL IgA deposits** and **NEUTROPHILIC INFILTRATION**.\n- **Most serious complication — KIDNEY DAMAGE:** greater in adults, occasionally needing **dialysis or transplant**.\n- **Bowel:** rarely **INTUSSUSCEPTION**, a section telescoping into itself.\n\n### Treatment\n- **Supportive:** **IV rehydration**, **pain management**, **wound care** for ulcerative lesions.\n- **IgA vasculitis nephritis:** **ACE inhibitors · corticosteroids · plasmapheresis · immunosuppressants**.\n\n*⚠️ The platelet count is NORMAL — HSP is a VASCULAR purpura, which separates it from ITP; a febrile, ill child with purpura is meningococcal sepsis until excluded (both not in course material). Nephritis epidemiology and natural history: `renal`.*\n\nSrc: L47 pp.50–54",
        "qs": []
      },
      {
        "id": "haem-37",
        "w": "must",
        "h": "Haemophilia A — genetics, severity, clinical, laboratory",
        "body": "**Haemophilia A: X-LINKED RECESSIVE.** Factor VIII has two parts, **VIII-Ag** and **VIII-c** (procoagulant): **the ANTIGEN IS NORMAL and VIII-c IS REDUCED**.\n\n|Severity|Factor activity|\n|---|---|\n|**Severe**|**0 – 1 %**|\n|**Moderate**|**1 – 5 %**|\n|**Mild**|**5 – 25 %**|\n|**Carrier female**|**50 – 60 %**|\n\n### Clinical\n- **The setting:** **male, plus a family history**.\n- **Newborn bleeding:** **umbilicus**, **circumcision**, **intracranial haemorrhage**.\n- **Infants and children:** **ecchymosis · ICH · HAEMARTHROSIS · intramuscular haematomas · mucous membrane and GIT bleeding · haematuria · other sites (intraocular, retroperitoneal)**.\n\n### Laboratory\n- **PTT prolonged** (normal 25 – 45 sec); **PT normal**; **factor VIII reduced**.\n- **Prenatal diagnosis:** **chorionic villous biopsy**, plus **genetic counselling**.\n\nSrc: L47 pp.55–58",
        "qs": []
      },
      {
        "id": "haem-38",
        "w": "must",
        "h": "Haemophilia A — treatment",
        "body": "### 1–2 — Prevention\n- **Avoid:** **trauma · IM injection · surgery · ASPIRIN**; **non-violent exercise** only.\n- **Against blood-borne infection:** **proper screening** of products, **immunization against HBV**.\n\n### 3–4 — Education and replacement\n- **Education and psychological rehabilitation.**\n- **Replacement therapy:** **A — plasma. B — cryoprecipitate. C — factor VIII concentrates.** *(Cryoprecipitate is the cold-insoluble plasma fraction, rich in factor VIII, vWF and fibrinogen — not in course material.)*\n\n|Factor VIII concentrate|Dose|\n|---|---|\n|**Haemarthrosis**|**25 units/kg/12 hr**|\n|**Haematuria & GIT**|**50 units/kg/12 hr**|\n|**CNS bleeding**|**75 units/kg/8 hr**|\n\n**Side effects:** **isoimmunization → haemolysis (anti-A and anti-B)** · **infection (AIDS, hepatitis B and C)** · **factor VIII INHIBITORS**.\n\n### 5–7 — The rest of the ladder\n- **Local measures:** **cold compresses**. **Drugs:** **epsilon aminocaproic acid**.\n- **DDAVP (desmopressin)** in **mild and moderate** cases.\n\nSrc: L47 pp.59–62",
        "qs": []
      },
      {
        "id": "haem-39",
        "w": "high",
        "h": "Haemophilia A — inhibitors, emicizumab and ITI",
        "body": "### 8 — Treatment of inhibitors\n- **High doses** of factor · **exchange transfusion or plasmapheresis**.\n- **Factor VII concentrates** · **activated prothrombin complex concentrates (FEIBA)**.\n- **Hemlibra —** a **bispecific factor IX and factor X directed antibody designed to bring them together**. · **ITI**.\n\n**Emicizumab:** a **subcutaneous humanized bispecific IgG4 monoclonal antibody** that **mimics activated FVIII — bridging FIXa and the FX zymogen to accelerate activation of the latter**, recognising **FIX/IXa with one Fab arm and FX/Xa with the other**.\n\n**⚠️ Why it matters:** it is **NOT recognised by FVIII-neutralizing alloinhibitory antibodies**, so it **remains effective in their presence**, and is licensed for **bleed prophylaxis both WITH and WITHOUT inhibitors**.\n\n**ITI (immune tolerance induction):** **frequent FVIII concentrate to induce immune tolerance to exogenous FVIII**. Goals: an **undetectable inhibitor titre** and **restored ability to treat bleeds with FVIII concentrates**.\n\nSrc: L47 pp.63–66",
        "qs": []
      },
      {
        "id": "haem-40",
        "w": "high",
        "h": "Haemophilia B and haemophilia C",
        "body": "**Haemophilia B (Christmas disease):** **15 % of cases**, a **mild X-linked recessive** disease, **laboratory like haemophilia A**. **Treatment: factor IX concentrates and plasma.**\n\n**Haemophilia C:** a **mild autosomal DOMINANT disease**.\n\n*⚠️ Factor XI deficiency is conventionally autosomal RECESSIVE; the deck prints dominant. Noted as printed, not disputed.*\n\nSrc: L47 pp.67–68",
        "qs": []
      },
      {
        "id": "haem-41",
        "w": "must",
        "h": "von Willebrand disease",
        "body": "**vWD:** the **MOST COMMON INHERITED BLEEDING DISORDER**, **0.1 – 1 % of the population**, from a **quantitative OR functional deficiency of von Willebrand factor**. **Affects males AND females.**\n\n**Role of vWF:** **mediates platelet adhesion to damaged endothelium** · **carrier protein for factor VIII** · **essential for proper clotting**.\n\n**Presentation:** **easy bruising**, **mucous membrane bleeding** — **epistaxis, oral mucosa, menorrhagia** — and **post-operative bleeding**.\n\n|Type|Defect|Detail|\n|---|---|---|\n|**Type 1**|**Partial QUANTITATIVE — commonest**|**20 – 50 % of normal**; **autosomal dominant**; **60 – 80 % of all vWD**; mucosal bleeding, bruising, surgical bleeding; diagnosed on the **vWF antigen assay**|\n|**Type 2**|**QUALITATIVE defect**|Subtypes **2A, 2B, 2M, 2N**; **2A commonest** — **selective loss of LARGE and MEDIUM multimers**|\n|**Type 3**|**COMPLETE deficiency — most severe**|**Little or no detectable plasma or platelet vWF**; **profound** bleeding; **mutant gene from BOTH parents**|\n\n### Diagnosis and management\n- **Diagnosis:** **personal and family bleeding history**; **vWF antigen** · **ristocetin cofactor activity (vWF:RCo)** · **factor VIII levels** · **multimer analysis for type 2**.\n- **Antifibrinolytics (tranexamic acid):** for **mucosal bleeding**, alone or as adjunct.\n- **Desmopressin (DDAVP) for TYPE 1** — stimulates vWF release. *(It releases stored vWF and VIII from endothelium, so cannot work in type 3 — not in course material.)*\n- **Severe types:** **vWF/factor VIII concentrates**; **hormonal therapy** for teenage menorrhagia.\n- **Prognosis:** **most children lead normal lives with proper management**, on **regular follow-up**, **monitored for anaemia**.\n\nSrc: L47 pp.69–77",
        "qs": []
      },
      {
        "id": "haem-42",
        "w": "must",
        "h": "von Willebrand disease versus haemophilia",
        "body": "||vWD|Haemophilia|\n|---|---|---|\n|**Symptoms**|**Bruising, epistaxis**|**Joint & muscle bleeding**|\n|**Sex**|**Males = females**|**Males**|\n|**Abnormal protein**|**vWF**|**Factor VIII**|\n|**Chromosome**|**Chr 12**|**X chromosome**|\n|**Inhibitors**|**Rare**|**25 %**|\n|**Bleeding time**|**Abnormal**|**Normal**|\n|**PTT**|**Normal or ↑**|**↑**|\n|**Factor VIII**|**↓ or borderline**|**↓**|\n|**vWF Ag**|**↓ or absent**|**Normal**|\n\n**Why factor VIII falls in vWD at all:** normally **vWF is the carrier that PROTECTS VIII:C from degradation**, and is **released by activated thrombin**.\n\n**So the two defects differ:** **haemophilia A is defective SYNTHESIS of VIII:C** (gene on the X chromosome); **vWD is RAPID DEGRADATION of VIII:C in the absence of vWF** (gene on chromosome 12).\n\nSrc: L47 pp.53, 78 (p.53 is a figure, read by render)",
        "qs": []
      },
      {
        "id": "haem-43",
        "w": "must",
        "h": "Disseminated intravascular coagulation",
        "body": "**DIC:** **widespread deposition of fibrin and microthrombi**. Three consequences run in parallel: **consumption of coagulation factors → bleeding**; **tissue ischaemia and necrosis**; **secondary fibrinolysis → bleeding**.\n\n### Aetiology — a clinical state occurring in a variety of diseases\n- **Metabolic:** **hypoxia · acidosis · endotoxaemia**.\n- **Exogenous:** **snake bite · incompatible blood transfusion**.\n- **Neoplastic:** **promyelocytic leukaemia · malignancy**.\n- **Vascular:** **renal vein thrombosis · giant haemangioma**.\n\n### Clinical picture — four layers\n- **1 —** the picture of the **underlying disease**.\n- **2 — Bleeding:** GIT, **pulmonary haemorrhage**, petechiae, haematuria.\n- **3 — Thrombosis and necrosis:** **convulsion, gangrene, renal failure**.\n- **4 — Intravascular haemolysis:** **microangiopathic haemolytic anaemia**.\n\n### Treatment\n- **1 — Control the original disease, USUALLY SEPSIS.**\n- **2 — Blood components:** **plasma · platelet transfusion · cryoprecipitate**.\n- **3 — Heparin in PURPURA FULMINANS.** **4 —** exchange transfusion in the newborn.\n- **5 —** **antithrombin and protein C concentrates**.\n\nSrc: L47 pp.79–82",
        "qs": []
      },
      {
        "id": "haem-44",
        "w": "must",
        "h": "DIC versus vitamin K deficiency, and haemorrhagic disease of the newborn",
        "body": "|Test|DIC|Vitamin K deficiency|\n|---|---|---|\n|**Bleeding time**|**Prolonged**|**Normal**|\n|**PTT**|**Prolonged**|**Prolonged**|\n|**PT**|**Prolonged**|**Prolonged**|\n|**TT**|**Prolonged**|**Normal**|\n|**Platelet count**|**↓↓**|**Normal**|\n|**FDP**|**Positive**|**Negative**|\n|**Fibrinogen**|**↓↓**|**Normal**|\n|**Burr & helmet cells**|**++**|**−**|\n\n**⚠️ The rows that decide it —** **platelets, fibrinogen and the film**. Vitamin K deficiency touches only the **factor** limbs, so **TT, platelets and fibrinogen stay normal** and there are **no fragmented cells**.\n\n**D-dimer:** a **new antigen formed during digestion of fibrin — CHARACTERISTIC OF DIC**.\n\n### Haemorrhagic disease of the newborn\n- **Where it sits:** an **ACQUIRED coagulation disease**, beside DIC, liver disease and anticoagulants.\n- **Vitamin K’s function:** **carboxylation of clotting factors**; deficiency gives **haemorrhagic disease of the newborn with a prolonged prothrombin time**.\n- **Sources and dose:** **liver, green vegetables, intestinal flora**; **1 mg IM, once**, as prophylaxis and treatment.\n- **Three onset forms:** **early (< 24 h — maternal anticonvulsants or warfarin)**, **classic (day 2 – 7)**, **late (2 – 12 weeks — exclusively breastfed or malabsorbing)** *(not in course material)*.\n\nSrc: L47 pp.31, 80; vitamin K function, sources and dose from BK p.39 (Madkour’s Essentials of Pediatrics ch.3)",
        "qs": []
      }
    ]
  },
  "growth-puberty": {
    "intro": "Short stature is examined through the measurements — height velocity, mid-parental height and the upper-to-lower segment ratio — and through telling familial short stature from constitutional delay. Bone age is the investigation that decides.",
    "sections": [
      {
        "id": "gp-1",
        "w": "must",
        "h": "Determinants of growth, and how height is actually measured",
        "body": "**Influences on growth:** genetics · systemic health · nutrition, sleep and exercise · hormones.\n\n**The hormones named:** **GH/IGF-1** · **thyroid hormone** · **insulin** · **sex steroids** · **glucocorticoids**.\n\n### Measuring height accurately\n- **Calibration:** checked before use.\n- **Head:** **straight, eyes and ears level**.\n- **Traction:** **gentle upward traction on the mastoid process**.\n- **Posture:** **knees straight**, **barefoot, feet flat on the floor**, **heels touching the back of the board**.\n- **Under 2 years:** supine **length** — head aligned and held, child **fully supine (flat)**, knees pressed gently down, moveable baseboard to the feet.\n\n### Growth charts\n|Chart|Recommended for|Basis|\n|---|---|---|\n|**WHO**|**0–24 months**|**based on breast-fed infants**|\n|**CDC**|**2–19 years**|**normally distributed**|\n\n- **Age- and sex-specific:** one chart reads *short* at one tail, *tall* at the other.\n- **Disease-specific charts:** exist for conditions with their own growth pattern.\n- **Correction for gestational age:** through the **first year of life**; in **extremely preterm** infants, **until 2 years**.\n\n**The repeated line:** **a single measurement is less important than the growth trend** — serial measurements show the **pattern**.\n\nSrc: L13 pp.4–10 (pp.5–6 image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "gp-2",
        "w": "must",
        "h": "Height velocity — the numbers, and the pubertal curve",
        "body": "**Height velocity:** centimetres gained per year — what separates a small normal child from a failing one.\n\n|Age|Growth velocity per year|\n|---|---|\n|**Birth – 12 months**|**23–27 cm** (9.1–10.6 in)|\n|**13–24 months**|**10–14 cm** (3.9–5.5 in)|\n|**25–36 months**|**8 cm** (3.1 in)|\n|**37–60 months**|**7 cm** (2.8 in)|\n|**61 months – puberty**|**5–6 cm** (2.0–2.4 in)|\n|**Puberty, females**|**8–12 cm** (3.1–4.7 in)|\n|**Puberty, males**|**10–14 cm** (3.9–5.5 in)|\n\n### Velocity and puberty\n- **Peak height velocity (PHV):** girls reach it **on average 2 years before boys**.\n- **Girls:** spurt early; **menarche falls on the descending limb**, after PHV.\n- **Boys:** later, and **peaking higher** — ~9.5 cm/yr against ~8.5 in girls.\n- **Pathological threshold:** **velocity < 1.5 SD** for age and pubertal staging.\n\nSrc: L13 pp.11–12, 14, 19 (pp.11–12 image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "gp-3",
        "w": "must",
        "h": "Mid-parental height and body proportions",
        "body": "**Mid-parental (target) height:** the child’s genetic height expectation, from both parents.\n\n|Sex|Target height (cm)|\n|---|---|\n|**Girl**|(mother’s height + father’s height **− 13**) ÷ 2|\n|**Boy**|(mother’s height + father’s height **+ 13**) ÷ 2|\n\n*A Parent Height Comparator nomogram on the same slide reads the mid-parental centile off directly.*\n\n### Proportions\n- **Measured:** **upper : lower segment ratio**, **arm span**, **sitting height**.\n- **The landmark:** lower segment is floor to **symphysis pubis**; upper segment is the remainder.\n- **Why:** **disproportion points to a skeletal dysplasia**; proportion points elsewhere.\n\n|Age|Upper : lower segment ratio|\n|---|---|\n|**Newborn**|**1.7 : 1**|\n|**6 months**|**1.6 : 1**|\n|**1 year**|**1.5 : 1**|\n|**2 years**|**1.4 : 1**|\n|**3 years**|**1.3 : 1**|\n|**4 years**|**1.2 : 1**|\n|**5 years**|**1.1 : 1**|\n|**7 years**|**1.0 : 1**|\n\n*The legs outgrow the trunk, so the ratio reaches 1.0 : 1 at about 7 years.*\n\nSrc: L13 pp.15–16 (both image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "gp-4",
        "w": "must",
        "h": "Defining short stature, and the weight-pattern rule",
        "body": "**Four definitions, any one qualifies:**\n- **Height:** **> 2 SD below the mean** for age and sex — **below the 3rd percentile**.\n- **Versus target:** **> 2 SD below mid-parental height**.\n- **Velocity:** **< 1.5 SD** for age and pubertal staging.\n- **Crossing:** **serial measurements cross growth centile lines**.\n\n*Printed as \"> 2 SD below the mean\" — read as MORE than two SD below, i.e. under −2 SD.*\n\n### The weight pattern guides the cause\n|Pattern|Points to|\n|---|---|\n|**Weight affected > height**|**Systemic disease**|\n|**Height affected, weight normal or ↑**|**Endocrine**|\n\n**The N.B. on the slide:** **the height or length centile is markedly discrepant from the weight centile**.\n\n### The same rule read from the obese child\n- **Nutritional obesity:** **obese + TALL**.\n- **Endocrine cause:** **obese + SHORT**, or **poor height velocity**.\n\n*Obesity itself — BMI, the centile bands, causes, drugs and surgery — is in `nutrition`, as are faltering growth and its red flags.*\n\nSrc: L13 pp.18–19, 28",
        "qs": []
      },
      {
        "id": "gp-5",
        "w": "must",
        "h": "Causes of short stature — the tree",
        "body": "**The first split:** **normal variant** or **pathological**, decided by **detailed history, physical examination and mid-parental target height**.\n\n### Normal variants — the most common cause\n- **Familial short stature:** **normal puberty onset**, **bone age = chronological age**.\n- **Constitutional delay of growth and puberty:** **delayed puberty onset**, **bone age < chronological age** — the \"late bloomer\".\n\n### Pathological — proportionate\n- **Congenital:** **chromosomal** · **dysmorphic syndrome** · **IUGR**.\n- **Acquired:** **malnutrition** · **chronic systemic disease** · **psychosocial** · **metabolic disorders**.\n- **Endocrine:** **GH deficiency** · **hypothyroidism** · **hypercortisolism** · **pseudohypoparathyroidism** · **diabetes mellitus**.\n\n### Pathological — disproportionate\n- **Congenital:** **skeletal dysplasia**, e.g. **achondroplasia**.\n- **Acquired:** **rickets** — the disease is in `nutrition`.\n\n### The second tree’s aetiological grid\n|Group|Named causes|\n|---|---|\n|**Deprivation**|primary malnutrition · psychosocial deprivation|\n|**Endocrine**|Cushing disease · GH deficiency · **IGF-1 deficiency (Laron dwarfism)** · hypothyroidism · congenital adrenal hyperplasia · panhypopituitarism|\n|**Treatment**|glucocorticoids · radiation · chemotherapy · bone marrow transplant|\n|**Chronic disease**|GI (coeliac, IBD) · renal (CRF) · infection (chronic UTI) · cardiopulmonary (cystic fibrosis, CHF) · inborn errors of metabolism · immunologic|\n|**Other**|intrauterine growth retardation · bulimia nervosa · anorexia nervosa · **CNS tumours, e.g. craniopharyngioma**|\n|**Dysmorphic features**|**trisomy 21** · **Noonan** · **Prader–Willi** · **Russell–Silver** · **Turner**|\n\n*The deck draws this tree twice, pp.20 and 21, splitting it differently each time; neither is a subset of the other and both are merged here.*\n\nSrc: L13 pp.20–21, 26–27 (both trees image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "gp-6",
        "w": "high",
        "h": "Evaluating the short child",
        "body": "### History\n- **Birth size:** **SGA** — birthweight, gestational age, **intrauterine growth restriction**.\n- **Pregnancy:** maternal health, **alcohol**, **smoking**.\n- **Growth pattern** and **nutrition**, including feeding history.\n- **General health:** long-term illness; **drugs**, e.g. **corticosteroids**.\n- **Family history:** of **growth and puberty**; also **emotional health**.\n- **Mid-parental height calculation.**\n\n### Examination\n- **Accurate height measurement** — the first line of the slide.\n- **Proportions:** **upper/lower segment**, **arm span**.\n- **Dysmorphic features** and **skeletal abnormalities**.\n- **Staging:** **puberty stage** and **thyroid signs**.\n- **Nutritional status.**\n- **Long-term illness:** **coeliac**, **cystic fibrosis**, **Crohn disease**, **chronic kidney disease**.\n- **Endocrine disorder:** **hypothyroidism**, **Cushing syndrome**.\n\n### Four questions to ask of the growth chart\n- **Which centile:** is height **below the 0.4th centile**?\n- **Discrepancy:** is it discrepant from the **weight centile**?\n- **Versus target:** how does it compare with the **mid-parental centile**?\n- **Pattern:** is growth **following or crossing** centiles?\n\nSrc: L13 pp.23–24, 29 (p.29 image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "gp-7",
        "w": "must",
        "h": "Investigations, and bone age",
        "body": "**The rule the deck prints in capitals:** **do not jump to GH tests early**.\n\n### The three steps\n|Step|Tests|\n|---|---|\n|**One**|**CBC** · **ESR** · **renal functions** · **electrolytes** · **LFT**|\n|**Two**|**TSH, fT4** · **coeliac screen**|\n|**Three**|**IGF-1, IGFBP-3** · **bone age** · **karyotyping (all girls)** · **GH testing**|\n\n### Standard investigations for all, and why\n|Test|Reason|\n|---|---|\n|**Full blood count**|anaemia may indicate **nutritional deficiency, coeliac or Crohn disease**|\n|**Creatinine, electrolytes, LFTs**|**renal or hepatic dysfunction** — there may be few symptoms|\n|**Thyroid stimulating hormone**|**acquired hypothyroidism is the commonest ENDOCRINE cause** of short stature, and may have few symptoms|\n|**Anti-tissue transglutaminase + IgA**|**coeliac disease is common** and symptoms are variable, so important to exclude|\n|**Karyotype or microarray**|**all girls** — **Turner syndrome (45,XO)**, whose dysmorphic features may be subtle|\n|**IGF-1**|a useful **screening** test for GH deficiency|\n|**X-ray left hand and wrist, for bone age**|**mild delay** in CDGP; **marked delay** in hypothyroidism or GH deficiency|\n\n### Specialist investigations\n|Test|When|\n|---|---|\n|**CRP and ESR**|symptoms suggesting inflammation, e.g. **Crohn disease**|\n|**Calcium, phosphate, ALP, vitamin D**|renal dysfunction, or **bone deformity such as bowing of the legs**|\n|**Limited skeletal survey**|**disproportion**, to find a skeletal dysplasia — **scoliosis** also shortens|\n|**GH provocation tests**|**slow growth rate with low IGF-1** — in specialist centres|\n|**MRI brain**|**headache or neurological signs**, to exclude an intracranial tumour, e.g. **craniopharyngioma**|\n|**Immunoglobulins and functional antibodies**|**recurrent infections**|\n\n### Bone age\n- **Method:** **Greulich and Pyle** — **X-ray of the left wrist and hand**.\n- **Delayed:** **CDGP**, or an **endocrine** cause.\n- **Normal:** **familial** short stature.\n\nSrc: L13 pp.30, 32, 35 (p.35 the full table, image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "gp-8",
        "w": "must",
        "h": "Familial short stature vs constitutional delay",
        "body": "|Feature|Familial short stature|Constitutional delay of growth|\n|---|---|---|\n|**Sex**|both equally affected|**more common in boys**|\n|**Length at birth**|**normal**|normal — **starts falling below the 5th centile in the first 3 years**|\n|**Family history**|**short stature**|**delayed puberty**|\n|**Parents’ stature**|**short — one or both**|**average**|\n|**Height velocity**|**normal**|**normal**|\n|**Puberty**|**normal**|**delayed**|\n|**Bone age (BA) vs chronological age (CA)**|**BA = CA > height age**|**CA > BA = height age**|\n|**Final height**|**short, but normal for target height**|**normal**|\n\n*Height velocity reads \"normal\" in both columns, so that row does not discriminate. The table turns on puberty timing, the parents and the bone age.*\n\n### The two cases the deck builds it from\n**Case 1, familial:** 11-year-old boy — height **3rd centile**, **normal growth velocity**, **short parents**, **MPH 165 cm**, normal proportions, normal puberty stage, **bone age = chronological age**. Not pathological, not investigated.\n\n**Case 2, CDGP:** 13-year-old boy — **no puberty yet**, father a \"late bloomer\", **Tanner stage 1**, **bone age delayed 2 years**, **normal labs**.\n\n- **Management of case 2:** **reassurance ± puberty induction** — **3–6 months of testosterone injections** to stimulate puberty **at 13–14 years**.\n\nSrc: L13 pp.36, 38–39 (p.39 the comparison table, image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "gp-9",
        "w": "must",
        "h": "Growth hormone deficiency",
        "body": "### The GH/IGF-1 axis\n- **Hypothalamus:** **GHRH** stimulates, **somatostatin (SST)** inhibits; **ghrelin** from the stomach stimulates.\n- **Pituitary:** **GH is secreted in pulses** — the trace is spikes, not a plateau.\n- **Periphery:** GH drives hepatic **IGF-1**, acting on **bone, muscle and fat**.\n\n### Isolated GHD\n- **Incidence:** **1 : 4,000 to 1 : 10,000**.\n- **Course:** **usually asymptomatic**; most cases identified as **\"idiopathic\"**.\n- **Genes:** most mutations involve **GH1** or the **GHRH receptor (GHRHR)**.\n\n### Multiple pituitary hormonal deficiencies (MPHD)\n- **Mechanism:** defects in the **transcription factors** of pituitary ontogeny and cell differentiation.\n- **Early:** **TSH and GH** deficiencies.\n- **Later:** **FSH, LH, PRL and ACTH** deficiencies.\n\n### When to investigate for GHD\n- **Severe short stature:** height **> 3 SD below the mean**.\n- **Discrepancy:** **height affected > weight**.\n- **Versus target:** **> 1.5 SD below mid-parental height**.\n- **Velocity:** **poor — under 4 cm per year**.\n\n### What is found, and how it is confirmed\n- **Biochemistry:** **low IGF-1 and IGFBP-3**.\n- **Skeleton:** **delayed bone age**.\n- **No use of a basal GH level** — because **GH is secreted in pulses**.\n- **Provocation agents:** **glucagon** · **insulin** · **arginine** · **clonidine**.\n- **The positive finding:** **GH levels fail to rise after stimulation**.\n- **How many:** **two provocation tests**, **sequential or on separate days**.\n\n### Looking for the cause\n- **MRI brain:** pituitary view.\n- **Fundus:** **papilledema**.\n- **Visual fields:** **bitemporal hemianopia**, from compression of the **optic chiasma**.\n- **Craniopharyngioma (4 %):** a developmental tumour from the **squamous remnant of Rathke’s pouch** — **not truly malignant, but locally invasive**, growing slowly in the **suprasellar region**.\n\n### Key facts indicating GHD\n- **Neonate:** **hypoglycemia** · **prolonged jaundice** · **microphallus**.\n- **Craniofacial abnormalities.**\n- **Insults:** **cranial irradiation**, **head trauma**, **CNS infection**.\n- **Family:** **consanguinity**, or an **affected family member**.\n\n**Case 4, the picture to recognise:** 6-year-old boy — **growth deceleration**, height **< −3 SD**, **immature face**, **truncal adiposity**, **bone age delayed 3 years**, **low IGF-1**.\n\nSrc: L13 pp.31, 33–34, 42–49 (pp.31, 43 the axis plates, image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "gp-10",
        "w": "high",
        "h": "SGA, mosaic Turner and achondroplasia",
        "body": "### Small for gestational age\n- **The number:** **10 % of intrauterine growth restriction do not catch up**.\n- **Consequence:** persistent SGA is a **licensed indication for GH** (2001).\n\n### Mosaic Turner syndrome\n**Case 3:** 7-year-old girl — **2nd centile**, **weight normal**, **not growing well**, **height velocity 2 cm/yr**, **MPH 168 cm**, normal birth weight, **normal examination**, **bone age delayed 5 years**.\n\n- **The single investigation not to miss:** **karyotype**, in **all girls** with short stature.\n- **Why it hides:** **no, or minimal, manifestations**.\n- **The genetics:** **only a small percentage of cells** carry **45,XO**; the rest are **46,XX**.\n\n*Turner syndrome in full — lymphoedema, neck webbing, the cardiac and renal lesions — is deferred to `genetics`.*\n\n### Achondroplasia — the disproportionate example\n- **Features named on the plate:** **macrocephaly** · **frontal bossing** · **midface hypoplasia** · **rhizomelia (shortened limbs, especially proximally)** · **trident hand** · **genu varum (bowing of the tibia)**.\n\n### The two label plates\n- **Syndromes causing short stature:** **Turner** · **Russell–Silver** · **Down** · **Noonan**.\n- **Endocrinal causes:** **hypothyroidism** · **Cushing syndrome** · **GH deficiency** · **IGF-1 deficiency**.\n\n*The dysmorphic syndromes go to `genetics`; hypothyroidism and Cushing syndrome as diseases to `endocrine`.*\n\nSrc: L13 pp.25–27, 37, 40–41 (p.25 image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "gp-11",
        "w": "high",
        "h": "Treating short stature — growth hormone",
        "body": "### The treatment\n- **What:** **GH deficiency is treated with recombinant human GH**.\n- **How:** **daily subcutaneous injection**.\n\n### Assessing the response\n- **The single most important parameter** in monitoring a child with GHD is **the growth response to GH treatment**.\n- **Measured as:** **increase in height**, and **change in height velocity**.\n\n### Side effects of recombinant GH\n- **Pseudotumor cerebri.**\n- **Slipped capital femoral epiphysis.**\n- **Worsening of scoliosis.**\n- **Insulin resistance.**\n- **Pancreatitis.**\n\n### FDA-approved indications, with the year of licensing\n|Year|Indication|\n|---|---|\n|**1985**|**Growth hormone deficiency**|\n|**1993**|**Chronic renal insufficiency**|\n|**1996**|**Turner syndrome**|\n|**2000**|**Prader–Willi syndrome**|\n|**2001**|**Small for gestational age**|\n|**2003**|**Idiopathic short stature**|\n|**2006**|**Short stature homeobox-containing gene (SHOX) deficiency**|\n|**2007**|**Noonan syndrome**|\n\n### The lecturer’s own four-point summary\n- **Most short children are normal variants.**\n- **Growth charts are diagnostic tools.**\n- **The weight pattern guides the cause.**\n- **A stepwise approach** in short stature.\n\nSrc: L13 pp.51–55 (p.54 image-only, recovered by render)",
        "qs": []
      }
    ]
  },
  "puberty": {
    "intro": "Tanner staging carries this chapter, and the examiner asks the sequence and its first sign in each sex. Precocious puberty is asked as central versus peripheral. Delayed puberty reduces to constitutional delay against the pathological causes.",
    "sections": [
      {
        "id": "gp-12",
        "w": "must",
        "h": "Physiology and onset of puberty",
        "body": "**Puberty:** **a well defined sequence of changes in stages** — and **in the last two decades girls enter puberty at an earlier mean age**.\n\n|Sex|Age of onset|\n|---|---|\n|**Female**|**8–13 years**|\n|**Male**|**9–14 years**|\n\n### GnRH across the lifespan\n- **Ten weeks of gestation:** pulsatile GnRH secretion begins.\n- **Mini-puberty:** a further pulse of activity in infancy.\n- **Then:** **down regulation of secretion** through childhood.\n\n### The re-awakening\n- **One to 3 years before clinical puberty:** **LH during sleep** becomes demonstrable **in a pulsatile fashion**.\n- **What it reflects:** **episodic discharge of hypothalamic gonadotropin-releasing hormone (GnRH)**.\n- **Approaching puberty:** **nocturnal pulses increase in amplitude and frequency**.\n- **Mid puberty:** pulses appear **during the daytime, every 90–120 minutes**.\n- **Approaching menarche:** **pulses are all the time**.\n\n### The gonadotropin chain\n- **Three steps in order:** **maturation of the gonads** → **secretion of sex hormones** → **appearance of secondary sexual characters**.\n- **From about age 8:** the hypothalamus increases **GnRH**, triggering the anterior pituitary to release **LH and FSH**.\n- **Testis:** LH and FSH trigger **testosterone release** and **spermatogenesis**.\n- **Ovary:** they trigger **estrogen release** and **folliculogenesis**.\n- **The switch that permits it:** before puberty both hypothalamus and pituitary are **very sensitive to negative feedback**; **during puberty that sensitivity decreases**, letting sex steroids rise to adult levels.\n\n### Secondary sex characteristics\n- **Male:** penis and scrotum grow · facial hair · **larynx elongates, lowering the voice** · shoulders broaden · body, armpit and pubic hair · musculature increases body-wide.\n- **Female:** **breasts develop and mature** · **hips broaden** · pubic hair grows.\n\nSrc: L14 pp.2–8 (p.8 the HPG-axis plate, image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "gp-13",
        "w": "must",
        "h": "Gonadarche, adrenarche and the growth spurt",
        "body": "**Two physiologic processes:** responsible for pubertal changes — **gonadarche** and **adrenarche**, and **they are not associated**.\n\n| |Gonadarche|Adrenarche|\n|---|---|---|\n|**What it is**|onset of **gonadal activity** from **maturation of the HPG axis**|**maturational increase in adrenal androgen secretion**|\n|**Hormones**|LH/FSH → gonadal sex steroids|**increase of DHEA, DHEA-S**|\n|**Age**|puberty proper|**6–8 years**|\n|**Role**|drives puberty|**not decisive in initiation of puberty**|\n|**Produces**|breast and genital development|**pubic and axillary hair, adult body odor**|\n\n*Either can occur without the other, which is why premature adrenarche is benign.*\n\n### Pubertal growth spurt\n- **Mediated by:** **gonadal steroids — testosterone and estradiol**.\n- **Which dominates:** **estrogen more than androgens**.\n- **Magnitude:** **adds 15 % to final adult height**.\n- **And ends growth:** **sex steroids cause fusion of epiphyseal growth plates and cessation of growth**.\n\n|Estrogen|Effect|\n|---|---|\n|**Direct effect**|**bone growth and osseous maturation**|\n|**Indirect effect**|**increases growth hormone production**|\n\nSrc: L14 pp.9–10",
        "qs": []
      },
      {
        "id": "gp-14",
        "w": "must",
        "h": "The sequence of puberty in each sex",
        "body": "### Female — thelarche first\n|Event|What it is|Interval|\n|---|---|---|\n|**Thelarche**|**breast bud — the FIRST sign**|—|\n|**Pubarche**|**appearance of pubic hair**, with **acceleration of growth**|**6–12 months** later|\n|**Menarche**|**onset of menstrual activity**|**2–2.5 years** later|\n\n- **After menarche:** **growth is coming to an end — only 5 cm remain**.\n\n### Male — testicular growth first\n|Order|Event|\n|---|---|\n|**1**|**growth of testes — > 4 ml in volume / 2.5 cm in diameter — the FIRST sign**|\n|**2**|**thinning of the scrotum**|\n|**3**|**pubarche — pubic hair growth**|\n|**4**|**growth of penis and pigmentation of the scrotum**|\n|**5**|**acceleration of height growth when testicular volume is 12–15 ml**|\n\n### Notes the deck flags\n- **Timing:** the **growth spurt in boys occurs later than girls**, with **greater magnitude**.\n- **Also appear:** **acne, axillary hair, body odour and mood changes**.\n\n*The boys’ plate plots testes rising 3 ml → 20 ml between ages 8 and 17, with penis and pubic-hair stages 2–5 alongside.*\n\nSrc: L14 pp.11–14 (p.13 the sequence chart, image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "gp-15",
        "w": "must",
        "h": "Tanner staging",
        "body": "**Staging system:** **Marshall & Tanner**, for secondary sexual characters.\n- **Boys are rated for:** **genital development** and **pubic hair growth**.\n- **Girls are rated for:** **breast development** and **pubic hair growth**.\n\n### Breast stages\n|Stage|Breast|\n|---|---|\n|**1**|**preadolescent** — juvenile breast, **elevated papilla and small flat areola**|\n|**2**|**breast bud** under hormonal stimulation; **papilla and areola elevate as a small mound**, areolar diameter increases|\n|**3**|**continued enlargement** further elevates the papilla; areola continues to enlarge; **no separation of contours**|\n|**4**|**areola and papilla separate from the contour of the breast to form a SECONDARY MOUND**|\n|**5**|**mature** — the **areolar mound recedes** into the general contour; **papilla continues to project**|\n\n### Pubic hair stages\n|Stage|Girls|Boys|\n|---|---|---|\n|**I**|**no pubic hair**|**no androgen-sensitive pubic hair**|\n|**II**|**sparse, long, pigmented**, straight or slightly curled, **mainly along the labia**|same, **at the base of the penis**|\n|**III**|**darker, coarser, curlier**; spread **sparsely over the junction of the pubes**|**darker, coarser, curlier**; spread **over the junction of the pubes**|\n|**IV**|**adult in type but decreased in total quantity**; **no spread to the medial thighs**|**adult in type**, considerably less than adult; **no spread to the medial thighs**|\n|**V**|adult quantity and type, **inverse triangle of the classically feminine type**; **spread to the medial thighs**|adult quantity and type, **inverse triangle**; **can spread to the medial thighs**|\n\n### Male genital stages, with testicular volume\n|Stage|Genitalia|Volume|Length|\n|---|---|---|---|\n|**I**|**preadolescent**|**3 ml**|**< 2.5 cm**|\n|**II**|**enlargement of scrotum and testes**, **thinning and redness of the scrotal skin**|**4 ml**|**2.5–3.2 cm**|\n|**III**|**further growth of the penis**, initially **in length**, some increase in circumference; testes and scrotum also grow|**10 ml**|**3.6 cm**|\n|**IV**|penis **significantly enlarged in length and circumference**, **glans penis** develops; **distinct darkening of the scrotal skin**|**16 ml**|**4.1–4.5 cm**|\n|**V**|**adult in size and shape**|**25 ml**|**> 4.5 cm**|\n\n**Measuring the testis:** **testicular volume is measured by an orchidometer**.\n\nSrc: L14 pp.15–20 (p.16 the breast plate, image-only, recovered by render); L13 p.13 (the volume column, re-rendered at 260 dpi)",
        "qs": []
      },
      {
        "id": "gp-16",
        "w": "must",
        "h": "Precocious puberty — definition and the benign variants",
        "body": "### Definition\n- **Onset:** secondary sexual characteristics **before 8 years in girls and 9 years in boys**.\n- **Or:** **menarche before 10 years**.\n\n### Why it matters\n- **Short stature:** **tall as a child and short as an adult**.\n- **Psychological and behavioral problems.**\n- **Risk of the underlying cause**, e.g. **CNS tumors**.\n\n*The height paradox follows from the deck’s own growth-spurt slide: the spurt arrives early and the sex steroids fuse the epiphyses early (mechanism not in course material).*\n\n**Four patterns:** of premature sexual development — **premature thelarche** · **premature adrenarche** · **isolated premature menarche** · **gonadotropin dependent precocious puberty**.\n\n### Premature thelarche\n- **What:** **isolated breast development**, **rarely exceeding Tanner 3**.\n- **Age:** **the first 2 years of life mostly**, sometimes **at birth**.\n- **Character:** **may be unilateral or asymmetric**, and **often fluctuates in degree**.\n- **Growth:** **growth and osseous maturation are normal or slightly advanced**.\n- **Differentiated from precocious puberty by:** **absence of other features of puberty**, and **no significant acceleration of growth**.\n- **In the newborn:** **high maternal prolactin** can cause babies to be born with **breast buds and even to lactate** — **self-limited**.\n\n### Premature adrenarche / pubarche\n- **What:** **sexual hair before 8 years in girls or 9 years in boys**, **without other evidence of maturation or growth acceleration**.\n- **Who:** **more frequent in girls than in boys**.\n- **Etiology:** **sensitivity to androgen production by the adrenal gland (6–8 yrs)**.\n- **Course:** **slight increase of growth rate and bone age**; **self-limited**.\n- **The long-term risk:** **girls have higher risk for polycystic ovarian syndrome later on**.\n\n### Atypical premature adrenarche\n- **Defined by systemic androgen effect:** one or more of — **marked growth acceleration** · **clitoral (girls) or phallic (boys) enlargement** · **cystic acne** · **advanced bone age (> 2 SD above the mean for age)**.\n- **Action:** **test adrenal hormones** — **ACTH stimulation test to exclude CAH**.\n\nSrc: L14 pp.21–29",
        "qs": []
      },
      {
        "id": "gp-17",
        "w": "must",
        "h": "Central precocious puberty",
        "body": "| |Central / true / gonadotropin DEPENDENT|Peripheral / pseudo / gonadotropin INDEPENDENT|\n|---|---|---|\n|**Sexuality**|**isosexual**|**isosexual or heterosexual**|\n|**Mechanism**|**stimulation of the HPG axis**|**sex steroids from gonads or adrenals**|\n|**Sequence**|**normal — CONSONANT**|**abnormal — DISSONANT**|\n\n### Central precocious puberty\n- **What it is:** **early activation of the hypothalamic-pituitary-gonadal axis**.\n- **Sex ratio:** **5–10 folds more frequently in girls**, because **ovaries are very sensitive to gonadotrophin secretion**.\n- **In girls:** **idiopathic in 90 %**.\n- **In boys:** a **structural CNS abnormality** in up to **75 %**.\n- **Sequence:** **follows the sequence observed in normal puberty**.\n\n### Aetiology of gonadotropin-dependent precocious puberty\n|Group|Causes|\n|---|---|\n|**No CNS abnormalities**|**idiopathic** · genetic (**GPR54 and KiSS-1 mutations**) · secondary to previous chronic exposure to sex steroids (late treatment of virilizing forms of **congenital adrenal hyperplasia**, after resection of sex-steroid-secreting tumors, **testotoxicosis**, **McCune–Albright syndrome**) · after exposure to **endocrine disrupters**|\n|**CNS abnormalities**|**hypothalamic hamartoma** · tumors (**astrocytoma, craniopharingeoma, ependymoma, optical or hypothalamic glyoma, LH-secreting adenoma, pinealoma, neurofibroma, dysgerminoma**) · congenital malformations (arachnoid cyst, suprasellar cyst, hydrocephaly, spina bifida, **septum-optical dysplasia**, myelomeningocele, vascular malformations) · acquired diseases (encephalitis and meningitis, **tuberculosis and sarcoidosis granulomas**, abscesses, radiation, chemotherapy, head trauma, perinatal asphyxia)|\n|**Endocrine**|**prolonged untreated hypothyroidism**|\n\n### Clinical presentation\n- **Sequence:** **sexual development follows the sequence of normal puberty**.\n- **Brain tumors:** **the only sign may BE the precocious puberty**.\n- **Neurological manifestations.**\n- **Neuroendocrine:** **diabetes insipidus** · **hyperthermia** · **unnatural crying or laughing (gelastic seizures)** · **obesity** · **cachexia**.\n- **Visual:** **visual field defect** · **proptosis** · **decreased visual acuity**.\n\nSrc: L14 pp.31–34 (p.33 the aetiology table, image-only, recovered by render; spellings as printed)",
        "qs": []
      },
      {
        "id": "gp-18",
        "w": "must",
        "h": "Peripheral precocious puberty, and what the testis tells you",
        "body": "### Peripheral (gonadotropin-independent) precocious pseudopuberty\n|Sex|Isosexual|Heterosexual|\n|---|---|---|\n|**Girls**|**McCune–Albright syndrome** · **autonomous ovarian cysts** · ovarian tumors · **granulosa–theca cell tumor associated with Ollier disease** · teratoma, chorionepithelioma · **SCTAT associated with Peutz–Jeghers syndrome** · feminizing adrenocortical tumor · **exogenous estrogens**|**congenital adrenal hyperplasia** · adrenal tumors · ovarian tumors · **glucocorticoid receptor defect** · **exogenous androgens**|\n|**Boys**|**congenital adrenal hyperplasia** · adrenocortical tumor · **Leydig cell tumor** · **familial male precocious puberty** — isolated or **associated with pseudohypoparathyroidism** · **hCG-secreting tumors (CNS, hepatoblastoma)** · **mediastinal tumor associated with Klinefelter syndrome** · teratoma · glucocorticoid receptor defect · **exogenous androgen**|**feminizing adrenocortical tumor** · **SCTAT associated with Peutz–Jeghers syndrome** · **exogenous estrogens**|\n\n### Testicular examination in precocious puberty\n|Finding|Meaning|\n|---|---|\n|**Bilateral enlargement ≥ 4 ml**|**gonadotrophin-DEPENDENT PP**|\n|**Prepubertal testicular size**|**gonadotrophin-INDEPENDENT PP**|\n|**Unilateral enlarged testis**|**gonadal tumor**|\n\n*Peripheral disease drives the characters from outside the axis, so the testes stay small.*\n\nSrc: L14 pp.35–37 (pp.36–37 image-only, both extracting as ZERO words, recovered by render)",
        "qs": []
      },
      {
        "id": "gp-19",
        "w": "high",
        "h": "Precocious puberty — investigations and management",
        "body": "### Investigations\n- **Ultrasound of the ovaries and uterus:** helps **assess the progress of puberty**.\n- **Uterine shape:** **infantile = tubular**; **pubertal = pear-shaped**.\n- **Endometrial lining identification.**\n- **MRI brain with contrast** for the pituitary gland **in gonadotropin-dependent PP**.\n- **Bone age:** characteristically **advanced** in true precocious puberty (not in course material).\n- **Basal LH and a GnRH-stimulation test:** separate central from peripheral biochemically (not in course material).\n\n### Management\n- **Treat the underlying pathology.**\n- **GnRH analogues:** gonadotrophin releasing hormone analogues, **for GDPP**.\n- **Skeleton:** **reducing the rate of skeletal maturation**, which is what protects final height.\n- **Menarche:** **delaying its onset in girls**.\n- **Psychological:** **addressing psychological / behavioral difficulties**.\n\n*Depot leuprolide or triptorelin are the usual agents; the deck names the class only (not in course material).*\n\nSrc: L14 pp.38–39",
        "qs": []
      },
      {
        "id": "gp-20",
        "w": "must",
        "h": "Delayed puberty",
        "body": "**Definition:** **failure of development of any pubertal feature by 13 yrs of age in females or by 14 yrs of age in males**.\n\n### The three aetiological groups\n|Group|Gonadotrophins|\n|---|---|\n|**Constitutional delay** — **a normal variant, the commonest**|normal for the bone age|\n|**Hypogonadotropic hypogonadism**|**low gonadotrphins secretion**|\n|**Hypergonadotropic hypogonadism**|**high gonadotrophin secretion**|\n\n### Constitutional delay — the seven features\n- **The most common cause.**\n- **First-degree relative** with **delayed puberty or short stature**.\n- **Height at or below the third centile.**\n- **Normal birth weight and length.**\n- **Delayed bone age.**\n- **Normal final adult height.**\n- **Need no treatment.**\n\n### Hypogonadotropic hypogonadism\n- **Systemic disorders:** **any chronic illness**.\n- **Acquired hypothyroidism.**\n- **Hypothalamic pituitary disorder:** **isolated**, or part of **panhypopituitarism (tumor / radiation)**.\n- **Kallman syndrome:** associated with **absent sense of smell**.\n\n### Hypergonadotropic hypogonadism\n- **Chromosomal abnormalities:** **Turner syndrome** / **Klinefelter syndrome**.\n- **Acquired gonadal damage:** after **surgery, chemotherapy, radiotherapy, trauma, tortion, autoimmune disorder**.\n\n*Turner is 45,XO — sourced above — and Klinefelter 47,XXY (not in course material; the deck names both without karyotypes).*\n\n### Presentation, and inducing puberty\n| |Boys|Girls|\n|---|---|---|\n|**Frequency**|**commoner in boys**, from **relative insensitivity of the testes to gonadotrophins**|**less common**, from **relative sensitivity of the ovaries to gonadotrophins**|\n|**Induce after**|**14 years of age**|**13 years of age**|\n|**Agent**|**low dose intra-muscular testosterone injections**|**estrogen**|\n|**Purpose**|**acceleration of growth and secondary sexual characteristics**|**acceleration of growth and secondary sexual characteristics**|\n\n### Investigations\n- **Karyotype.**\n- **Thyroid function.**\n- **Pituitary hormones and sex steroids.**\n- **MRI brain if needed.**\n\n*L13 p.38 induces a CDGP boy at 13–14 years with 3–6 months of testosterone where L14 p.46 says after 14; L13 offers \"reassurance ± puberty induction\" where L14 says constitutional delay needs no treatment. Both as printed.*\n\nSrc: L14 pp.41–48",
        "qs": []
      }
    ]
  },
  "perinatal": {
    "intro": "One lecture on what a newborn is classified as and what goes wrong when it arrives too early: the gestational-age and weight bands, resuscitation and Apgar, then the preterm organ by organ — lung, duct, brain, gut, temperature — and the two growth extremes.",
    "sections": [
      {
        "id": "per-1",
        "w": "must",
        "h": "Definitions and the three classifications",
        "body": "**Neonatal period:** the **first 28 days of life**.\n\n### By birth weight\n\n|Class|Weight|\n|---|---|\n|**LBW** — low birth weight|**< 2,500 g**|\n|**VLBW** — very low birth weight|**< 1,500 g**|\n|**ELBW** — extremely low birth weight|**< 1,000 g**|\n\n### By gestational age\n\n|Class|Gestation|\n|---|---|\n|**Preterm birth**|**< 37 weeks**|\n|**Extremely preterm**|**< 28 weeks**|\n|**Very preterm**|**28 – < 32 weeks**|\n|**Moderate or late preterm**|**32 – < 37 weeks**|\n|**Term**|**37 – < 42 weeks**|\n|**Post-term**|**≥ 42 weeks**|\n\n### By birth weight FOR gestational age\n- **Plotted:** birth weight against weeks of gestation, on a centile chart.\n- **LGA:** above the **90th centile**.\n- **AGA:** **10th to 90th** centile.\n- **SGA:** below the **10th centile**.\n\n*Independent of each other: a 1,400 g infant is VLBW whether AGA at 30 weeks or SGA at term.*\n\nSrc: L7 pp.4–7 (pp.6, 7 image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "per-2",
        "w": "high",
        "h": "Assessing the newborn at birth — three scores the material names but never prints",
        "body": "### Apgar score *(not in course material)*\n**Scored at 1 and 5 minutes**, each sign **0, 1 or 2**; **maximum 10**.\n\n|Sign|0|1|2|\n|---|---|---|---|\n|**Appearance** (colour)|Blue or pale|Body pink, **extremities blue**|Completely pink|\n|**Pulse**|Absent|**< 100/min**|**> 100/min**|\n|**Grimace** (reflex irritability)|No response|Grimace|**Cry, cough, sneeze**|\n|**Activity** (tone)|Limp|Some flexion|**Active motion**|\n|**Respiration**|Absent|Slow, irregular|**Good, crying**|\n\n*The HIE cooling criteria enter on Apgar ≤ 5 at 5 minutes — phi-11.*\n\n### Gestational-age assessment *(not in course material)*\n- **New Ballard:** six **neuromuscular** and six **physical** criteria, each **−1 to 5**.\n- **Range:** accurate **20–44 weeks**; do it **within 12 hours** in the very preterm.\n- **Dubowitz:** the older, longer predecessor.\n- *L12 offers \"Ballard score\" as a distractor in its own staging question.*\n\n### Silverman–Andersen retraction score *(not in course material)*\n- **Five signs:** chest movement, intercostal retraction, xiphoid retraction, nasal flaring, expiratory grunt.\n- **Scoring:** each **0–2**; **higher = worse**, the opposite of Apgar.\n- *L9 prints the same signs unscored; the score is nowhere in the corpus.*\n\n### Resuscitation at delivery *(not in course material)*\n- **First:** dry, warm, stimulate, position the airway; assess **breathing and heart rate**.\n- **Apnoeic or HR < 100:** five **inflation breaths**, then positive-pressure ventilation.\n- **HR < 60 despite effective ventilation:** **chest compressions 3:1** with ventilation.\n- **Still < 60:** **adrenaline**, preferably by **umbilical venous catheter**.\n- *No deck teaches it: `3) Pediatric resuscitation` contains \"newborn\" zero times.*\n\nSrc: general medical knowledge, tagged; the Apgar entry point L12 p.47, the retraction signs L9 p.12",
        "qs": []
      },
      {
        "id": "per-3",
        "w": "must",
        "h": "Prematurity — incidence and causes",
        "body": "### Incidence\n- **US livebirths:** **~11 % preterm**; **2 % under 32 weeks**.\n- **By race:** **White 10.5 % · Black 17.5 % · Hispanic 11.5 %**.\n\n### The six causes\n- **Idiopathic —** given its own branch, first.\n- **Intrauterine stretch —** multiple gestation, polyhydramnios, uterine anomalies.\n- **Intrauterine bleeding —** abruption, antepartal haemorrhage.\n- **Infection —** chorioamnionitis, bacterial vaginosis, **PROM**.\n- **Fetal —** **IUGR**, congenital malformation.\n- **Cervical weakness —** incompetent cervix.\n\nSrc: L7 pp.8–9",
        "qs": []
      },
      {
        "id": "per-4",
        "w": "must",
        "h": "Preventing preterm birth — five steps in managing preterm labour",
        "body": "- **1 Antenatal steroid —** accelerates fetal lung maturity.\n- **2 Antibiotics —** for **PROM**, reducing chorioamnionitis and neonatal infection.\n- **3 Tocolysis —** suppresses contractions, prolonging pregnancy or completing the steroid course.\n- **4 Magnesium sulphate —** reduces the incidence of **cerebral palsy**.\n- **5 In-utero transfer —** to a tertiary centre for preterm care.\n\n*Steroid drug and timing in prd-11, where L9 prints them.*\n\nSrc: L7 p.10",
        "qs": []
      },
      {
        "id": "per-5",
        "w": "must",
        "h": "The preterm lung — the signs, the five problems, and RDS type I",
        "body": "- **Rank:** the respiratory system is the **most frequently affected system in the preterm**.\n- **Why:** the **lung is the LAST organ to mature** into a functional state.\n\n### Signs of respiratory distress\n**The five signs:** tachypnoea RR > 60 · nasal flaring · retractions of the chest wall · expiratory grunting · central cyanosis.**\n\n### The five respiratory problems of prematurity\n**The five:** 01 RDS type I · 02 congenital pneumonia · 03 pneumothorax · 04 CLD · 05 apnoea / bradycardia / desaturation.**\n\n### RDS type I\n- **What it is:** a **developmental deficiency of surfactant**.\n\n|Gestation|Incidence|\n|---|---|\n|**< 28 weeks**|**~100 %**|\n|**28 – 30 weeks**|**70 %**|\n|**30 – 32 weeks**|**40 %**|\n|**33 – 35 weeks**|**15 %**|\n\n- **Onset:** distress in the **first 4 hours**.\n- **X-ray:** **fine reticulogranular appearance with air bronchogram**.\n- **Treatment:** **surfactant** (tracheal or nebulised), **NCPAP**, **mechanical ventilation** on CPAP failure.\n\n*RDS in full — surfactant physiology, the cascade, prevention, the treatment ladder — in prd-7 to prd-11.*\n\nSrc: L7 pp.11–14 (p.13 image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "per-6",
        "w": "must",
        "h": "Congenital pneumonia and pneumothorax in the preterm",
        "body": "### Congenital pneumonia\n- **Signs:** respiratory distress, hypotension, temperature instability, apnoea, hypoglycaemia, lethargy, shock.\n- **⚠️ Look-alike:** often **indistinguishable from HMD**, ± signs of septicaemia.\n- **Pathogenesis:** **aspiration of infected amniotic fluid**.\n- **Organisms:** the **same as in neonatal sepsis**.\n\n### Pneumothorax\n- **When:** may be **spontaneous**; most commonly **on mechanical ventilation** with an unhealthy lung (RDS).\n- **Presentation:** **sudden deterioration**, rising oxygen requirement.\n- **Signs:** **decreased breath sounds and chest movement** on that side; **chest bulge**.\n- **Diagnosis:** **transillumination**, then **CXR**. **Treatment:** **chest tube with underwater seal**.\n- **Frequency:** **4 %** of VLBW infants.\n\n### Transillumination\n- **Method:** **high-intensity fibreoptic light**; darken the room, use a **cold light** to avoid burns.\n- **False positive:** skin oedema, subcutaneous air, pneumomediastinum, severe pulmonary interstitial emphysema.\n- **False negative:** thick chest wall, darkly pigmented skin, room too light, weak transilluminator.\n- **⚠️ Definitive test:** the **chest X-ray**, always.\n- **If AP is insufficient:** **lateral decubitus** with the **suspected side up**, after turning for **10–15 minutes**.\n\nSrc: L7 pp.15–18 (pp.17, 18 image-only, recovered by render); frequency L7 p.46",
        "qs": []
      },
      {
        "id": "per-7",
        "w": "must",
        "h": "Apnoea of prematurity and chronic lung disease",
        "body": "### Apnoea of prematurity\n- **What it is:** a **developmental problem with the regulation of respiration**.\n- **Course:** generally **resolves by 36 weeks corrected gestational age**.\n- **Incidence:** **inversely related to gestational age**.\n- **⚠️ May be secondary to:** hypoxia, infection, anaemia, electrolyte disturbance, hypoglycaemia, seizures, heart failure, **aspiration due to gastro-oesophageal reflux**.\n- **The threshold:** **20 seconds** without breathing gives **bradycardia and desaturation**.\n- **Treatment:** gentle physical stimulation, **methylxanthines**, ventilation.\n\n### Chronic lung disease / bronchopulmonary dysplasia\n- **Definition:** **need for oxygen beyond 36 weeks postmenstrual age**.\n- **Mechanism:** **oxygen toxicity**.\n- **Frequency:** **25 %** of VLBW; up to **40 % of the extremely preterm** long term, from reduced exercise tolerance to **home oxygen**.\n\nSrc: L7 pp.19–20; frequencies L7 pp.46, 47 (both image-only)",
        "qs": []
      },
      {
        "id": "per-8",
        "w": "must",
        "h": "The preterm duct — why it stays open and what it does",
        "body": "**Ductus arteriosus:** the normal fetal connection between **pulmonary artery and aorta**, a **right-to-left shunt** in utero.\n\n### Why prematurity keeps it open\n- **Prevalence:** all structural CHD occurs in preterms, but **PDA is markedly more common** than at term.\n- **Normal closure:** ductal constriction at **12–48 hours**.\n- **⚠️ Oxygen:** its role **as a constrictor INCREASES with advancing gestational age**.\n- **⚠️ PGE2:** ductal **sensitivity to PGE2 vasodilatation DECREASES with increasing gestational age**.\n- **Net effect:** the preterm duct has a **weak constrictor and a strong dilator response**.\n\n### The haemodynamically significant PDA\n- **Murmur:** **systolic, ii/vi, upper left sternal border** — not the machinery murmur of the older child.\n- **Pulses:** **bounding**, with a **widened pulse pressure**.\n- **Also:** **metabolic acidosis**, **worsening respiratory status**.\n- **⚠️ It may be SILENT.** No murmur does not exclude it.\n- **Steal phenomenon:** diastolic runoff into the pulmonary circulation → **pulmonary congestion**.\n\n### Diagnosis and treatment\n- **Diagnosis:** suspected clinically and on **CXR**; **confirmed by echocardiogram with Doppler**.\n- **Medical:** **indomethacin**, a **cyclo-oxygenase (prostaglandin) inhibitor** — **12 %** of VLBW.\n- **Surgical:** **ligation** if medical treatment fails — **3 %** of VLBW.\n\n*The duct as a cardiac lesion — fetal role, machinery murmur, transcatheter closure, duct-dependent circulations — in `cardiac`, `card-6`.*\n\nSrc: L7 pp.21–24; frequencies L7 p.46 (image-only)",
        "qs": []
      },
      {
        "id": "per-9",
        "w": "high",
        "h": "Why the preterm gets infected",
        "body": "- **Immunity:** all aspects of immune function are **sub-optimal in vitro**.\n- **IgM:** does **not cross the placenta**.\n- **IgG:** crosses **only in the 3rd trimester** — the earlier the birth, the less maternal antibody.\n- **Barrier:** poor — thin skin, indwelling lines.\n- **Origin:** **infection is often the CAUSE of labour**, so the baby arrives infected.\n- **Spread:** poor ability to **localise** infection, so it becomes **septicaemia**.\n\n### The numbers in the VLBW infant\n- **Early-onset 2 %, late-onset 11 %.**\n- **Early-onset organism:** **group B streptococcus**.\n- **⚠️ Main problem:** **NOSOCOMIAL** infection, mainly **coagulase-negative staphylococcus**.\n\n*Neonatal sepsis as a disease — early versus late onset, markers, management — in `neonatal`.*\n\nSrc: L7 p.25; the numbers L7 p.46 (image-only)",
        "qs": []
      },
      {
        "id": "per-10",
        "w": "must",
        "h": "The preterm brain — IVH, PVL and hydrocephalus",
        "body": "- **The two commonest:** **periventricular–intraventricular haemorrhage (IVH)** and **periventricular leukomalacia (PVL)**.\n- **⚠️ Both are usually SILENT** — found by scanning, not by examining.\n\n### Intraventricular haemorrhage\n- **Source:** the **germinal layer**, whose **fragile subependymal vessels** bleed under **hypoxia**.\n- **Extent:** **germinal layer → intraventricular → parenchymal**.\n- **Frequency:** **25 %** of VLBW, **severe grade III/IV 8 %**.\n- **Grades I–IV** *(not in course material)* — **I** germinal matrix only · **II** intraventricular blood, no dilatation · **III** with dilatation · **IV** parenchymal venous infarction.\n\n### Periventricular leukomalacia\n- **What it is:** **ischaemic white matter injury**, seen as **cystic PVL** on ultrasound.\n- **Frequency:** **3 %** of VLBW.\n\n### Post-haemorrhagic hydrocephalus\n- **Course:** **ventricular dilatation** follows the bleed, and **may need a ventriculo-peritoneal shunt**.\n\n### Cranial ultrasound\n- **Coronal:** the plane runs **ear to ear**. **Sagittal:** the plane runs **front to back**.\n\n*Extradural, subdural and subarachnoid haemorrhage and childhood stroke are in `neuro-stroke`.*\n\nSrc: L7 pp.28–32 (pp.29–32 image-only); frequencies L7 p.46",
        "qs": []
      },
      {
        "id": "per-11",
        "w": "must",
        "h": "Temperature control and the neonatal energy triangle",
        "body": "### Why the preterm cannot hold its temperature\n- **1 Surface area —** large relative to mass, so **heat loss (area) exceeds heat generation (mass)**.\n- **2 Skin —** thin and heat-permeable; **transepidermal water loss is significant in the first week**.\n- **3 Insulation —** little **subcutaneous fat**.\n- **4 Behaviour —** often **nursed naked**, and **cannot curl up or shiver**.\n\n### Keeping it warm\n- **The three measures:** **polyethylene plastic bag or wrap · head cap · thermal mattress** (pre-warmed towels).\n- **Environment:** **neutral thermal environment**, **incubator or radiant warmer**, clothe if possible.\n- **Humidity:** reduces **evaporative** heat loss.\n\n### The neonatal energy triangle\nThree interlocking gears — **hypothermia, hypoglycaemia, hypoxia** — each driving the next.\n\n- **Cold → hypoglycaemia:** ↑metabolism → ↑glucose uptake → ↑use of glycogen → **depleted stores**.\n- **Hypoglycaemia → hypoxia:** ↓surfactant production and **pulmonary vasoconstriction** → ↑work of breathing → respiratory distress.\n- **Cold → acidosis:** ↑metabolism → ↑O₂ consumption → ↑respiratory rate → **demand exceeds supply** → anaerobic metabolism → **↓pH**, which loops back to deplete glycogen.\n- **Brown fat:** its metabolism **releases fatty acids**, the triangle’s third limb.\n\n*So warming is a treatment for hypoglycaemia and for respiratory distress, not only for cold.*\n\nSrc: L7 pp.33–38 (pp.35–37 image-only, the triangle recovered at 300 dpi)",
        "qs": []
      },
      {
        "id": "per-12",
        "w": "must",
        "h": "The preterm gut and necrotizing enterocolitis",
        "body": "- **Function:** the GI tract is **functional during the second trimester**.\n- **The real problem:** **motility and tolerance of feeds**, not absorption.\n- **Sucking and swallowing:** mature from **32 to 36 weeks**.\n- **GI signs:** **gastric residual > 25 % of the prior feed**, emesis, abdominal distension, abdominal tenderness.\n\n### Necrotizing enterocolitis\n- **Rank:** the **most common serious GI problem of the preterm**; **5 %** of VLBW.\n- **Aetiology:** **uncertain** — may involve **ischaemia, mucosal insult, infection**.\n- **Incidence:** **inversely related to gestational age**.\n- **Radiological hallmark:** **pneumatosis intestinalis** — gas in the bowel wall.\n- **Management:** **medical**, or **surgery for bowel necrosis or perforation**.\n- **Bell staging** *(not in course material)* — **I** suspected · **II** definite, pneumatosis on film · **III** advanced, perforation or shock.\n\n### Feeding\n- **Route:** **nasogastric tube feeding until 35–36 weeks postmenstrual age**.\n- **Intolerance:** **parenteral nutrition** is often required.\n\nSrc: L7 pp.39–43 (pp.41, 42 print the same slide twice); frequency and feeding L7 p.46",
        "qs": []
      },
      {
        "id": "per-13",
        "w": "must",
        "h": "Metabolic and the other problems of prematurity",
        "body": "### Metabolic\n- **Hypoglycaemia —** **decreased glycogen stores**. Common.\n- **Hypocalcaemia —** **immature parathyroid gland**.\n- **Hypothermia —** **decreased subcutaneous and brown fat**.\n- **Also:** electrolyte disturbances; **osteopenia of prematurity from phosphate deficiency**.\n\n### The others\n- **Retinopathy of prematurity —** driven by **oxygen therapy**; **5 %** need **laser**.\n- **Fluid and solute retention.**\n- **Hyperbilirubinaemia and kernicterus —** jaundice **common, with a low treatment threshold**.\n- **Anaemia —** often needs **blood transfusion**.\n- **Hearing —** **checked before discharge**.\n\n*Jaundice, kernicterus and neonatal hypoglycaemia as diseases in `neonatal`; anaemia of prematurity in `haematology`, `haem-9`.*\n\nSrc: L7 pp.44–45; thresholds and the 5 % figure L7 p.46 (image-only)",
        "qs": []
      },
      {
        "id": "per-14",
        "w": "high",
        "h": "The numbers in the very low birthweight infant, and life after discharge",
        "body": "**All figures are for infants under 1,500 g.**\n\n|Problem|Frequency|\n|---|---|\n|**Respiratory distress syndrome**|**74 %**|\n|**Nasal CPAP required**|**86 %**|\n|**High-flow nasal cannula**|**75 %**|\n|**Mechanical ventilation**|**64 %**|\n|**Intraventricular haemorrhage** (any)|**25 %**|\n|**Bronchopulmonary dysplasia**|**25 %**|\n|**PDA — medical treatment**|**12 %**|\n|**Late-onset infection**|**11 %**|\n|**IVH — severe, grade III/IV**|**8 %**|\n|**Necrotizing enterocolitis**|**5 %**|\n|**ROP needing laser**|**5 %**|\n|**Pneumothorax**|**4 %**|\n|**PDA — surgical ligation**|**3 %**|\n|**Periventricular leukomalacia**|**3 %**|\n|**Early-onset infection**|**2 %**|\n\n### Following discharge\n- **Support:** specialist **community nursing** where available.\n- **⚠️ Risk:** **respiratory infection and wheezing**, especially **bronchiolitis (RSV)** and **pertussis**; may need intensive care.\n\n*Bronchiolitis as a disease is in `resp-bronch`.*\n\nSrc: L7 p.46 (image-only, recovered at 300 dpi)",
        "qs": []
      },
      {
        "id": "per-15",
        "w": "high",
        "h": "Long-term impact of preterm birth",
        "body": "|Domain|Outcome|Examples|Frequency in survivors|\n|---|---|---|---|\n|**Physical**|**Visual impairment**|**Blindness or high myopia after ROP**; hypermetropia and myopia|**~25 % of all extremely preterm**; also moderately preterm if **oxygen therapy is poorly monitored**|\n|**Physical**|**Hearing impairment**|—|**Up to 5–10 % of extremely preterm**|\n|**Physical**|**Chronic lung disease of prematurity**|Reduced exercise tolerance to **home oxygen**; admission for **LRTI**|**Up to 40 % of extremely preterm**|\n|**Physical**|**Cardiovascular and non-communicable disease**|**↑ blood pressure · reduced lung function · ↑ asthma · growth failure in infancy then accelerated weight gain in adolescence**|Burden still to be quantified|\n|**Neuro**|**Mild — executive dysfunction**|**Learning impairments, dyslexia, reduced academic achievement**|—|\n|**Neuro**|**Moderate to severe — global delay**|**Cognitive impairment · motor impairment · CEREBRAL PALSY**|Depends on **gestational age and quality of care**|\n|**Neuro**|**Psychiatric / behavioural**|**ADHD · anxiety and depression**|—|\n|**Family**|**Family, health service, intergenerational**|Psychosocial and economic cost; **risk of preterm birth in the offspring**|Varies with **medical risk, disability, socioeconomic status**|\n\n*Cerebral palsy in `neuro-cp`; ADHD in `dev-problems`.*\n\nSrc: L7 p.47 (image-only, recovered at 300 dpi)",
        "qs": []
      },
      {
        "id": "per-16",
        "w": "must",
        "h": "Small for gestational age — two shapes of growth restriction",
        "body": "|  |**Asymmetrical IUGR**|**Symmetrical IUGR**|\n|---|---|---|\n|**Body proportions**|**HEAD SPARED**|**Proportionate to the rest of the body**|\n|**Onset**|**After the 18th week**|**After the 18th week** *(as printed)*|\n|**Causes**|**Chronic hypertension · severe malnutrition · genetic mutation (EDS)**|**TORCH · chromosomal anomalies · anaemia · substance abuse (fetal alcohol syndrome)**|\n\n*⚠️ The deck gives both columns the same onset, which cannot discriminate them; the discriminator it does give is head sparing. Recorded as printed.*\n\n### Problems of the SGA infant\n- **Respiratory distress —** **meconium aspiration, pulmonary haemorrhage, pneumothorax**.\n- **Also:** **hypothermia · hypoglycaemia · congenital infection · polycythaemia and hyperbilirubinaemia · necrotizing enterocolitis**.\n\nSrc: L7 pp.48–49",
        "qs": []
      },
      {
        "id": "per-17",
        "w": "must",
        "h": "Large for gestational age and the infant of a diabetic mother",
        "body": "**LGA:** birth weight **above the 90th centile** for gestation.\n\n### Why the IDM is affected\n- **The chain:** **maternal hyperglycaemia → fetal hyperglycaemia → fetal hyperinsulinaemia**.\n- **Insulin is the fetal growth hormone**, so every problem below follows from it, or from its withdrawal at delivery.\n\n### The eleven problems\n- **1–3:** fetal demise · macrosomia · congenital malformations.\n- **4 RDS —** insulin **delays surfactant maturation**.\n- **5 Hyperbilirubinaemia.**\n- **6 Hypoglycaemia —** hyperinsulinaemia outlasts the maternal glucose supply.\n- **7–9:** hypocalcaemia · polycythaemia · renal vein thrombosis.\n- **10 Cardiomyopathy —** **hypertrophic**, with cardiomegaly on the chest film.\n- **11 Named malformations:** **SACRAL HYPOPLASIA** and **SMALL LEFT COLON SYNDROME**.\n- **The cardiomyopathy** *(not in course material)* — **asymmetrical septal hypertrophy**, usually **transient**, resolving over weeks as insulin falls.\n\nSrc: L7 pp.50–53 (pp.50, 53 image-only)",
        "qs": []
      }
    ]
  },
  "perinatal-rd": {
    "intro": "Why a newborn cannot breathe. The seven signs, the pulmonary and extra-pulmonary causes, and the algorithm that lets gestation and time of onset shortlist them — then RDS, TTN and meconium aspiration in full, set side by side at the end.",
    "sections": [
      {
        "id": "prd-1",
        "w": "must",
        "h": "Respiratory distress in the newborn — the size of the problem and who gets it",
        "body": "- **Rank:** one of the most important causes of **NICU admission** and of **mortality**.\n- **Normal rate:** **40–60 per minute**.\n- **Versus the adult:** newborn respiration is **more rapid, shallower and more irregular**.\n\n### Incidence by maturity\n\n|Group|Incidence|\n|---|---|\n|**Full term**|**15 %**|\n|**Late preterm**|**29 %**|\n|**Preterm, GA < 34 weeks**|**93 %**|\n\n### The six at-risk groups\n**The six:** 01 preterm · 02 birth asphyxia · 03 infant of a diabetic mother · 04 caesarean section · 05 maternal fever, prolonged rupture of membranes or foul-smelling amniotic fluid · 06 meconium in the amniotic fluid.**\n\nSrc: L9 pp.6–8",
        "qs": []
      },
      {
        "id": "prd-2",
        "w": "must",
        "h": "The clinical syndrome — seven signs",
        "body": "- **01 Tachypnoea —** rate **> 60 per minute**.\n- **02 Retractions —** **intercostal and subcostal**, with **chest indrawing**.\n- **03 Grunting —** expiration against a partly closed glottis; self-generated PEEP.\n- **04 Nasal flaring.**\n- **05 Cyanosis or desaturation** in severe cases.\n- **06 Decreased air entry.**\n- **07 Poor feeding.**\n\n*Five of these, scored 0–2 each, are the Silverman–Andersen retraction score — per-2.*\n\nSrc: L9 p.12",
        "qs": []
      },
      {
        "id": "prd-3",
        "w": "must",
        "h": "Pulmonary causes",
        "body": "|Group|Conditions|\n|---|---|\n|**Parenchymal**|**Transient tachypnea of the newborn · meconium aspiration and other aspirations · respiratory distress syndrome · pneumonia · pulmonary oedema · pulmonary haemorrhage · pulmonary lymphangiectasia**|\n|**Developmental**|**Lobar emphysema · pulmonary sequestration · cystic adenomatoid malformation · congenital diaphragmatic hernia · tracheo-oesophageal fistula · pulmonary hypoplasia · bronchopulmonary dysplasia**|\n|**Airway**|**Choanal atresia or stenosis · laryngeal web · laryngotracheomalacia or bronchomalacia · subglottic stenosis**|\n|**Mechanical**|**Rib cage anomalies (e.g. Jeune syndrome) · pneumothorax · pneumomediastinum · pleural effusion · chylothorax**|\n\n*Choanal atresia, laryngeal web and subglottic stenosis are named nowhere else in the paediatrics corpus.*\n\nSrc: L9 pp.9–10 (p.10 image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "prd-4",
        "w": "must",
        "h": "Extra-pulmonary causes, and the aetiology map",
        "body": "|Group|Conditions|\n|---|---|\n|**CVS — ↑ pulmonary flow**|**Patent ductus arteriosus · ventricular septal defect · transposition of the great arteries · truncus arteriosus**|\n|**CVS — ↓ pulmonary flow**|**Persistent pulmonary hypertension · pulmonary atresia · tetralogy of Fallot · tricuspid atresia**|\n|**CVS — cardiomegaly**|**Ebstein anomaly · left heart obstruction (coarctation, mitral atresia, TAPVR)**|\n|**Neuromuscular**|**CNS: asphyxia, haemorrhage, malformations, drugs, infection** · **cord: injury, spinal muscular atrophy** · **nerves: phrenic injury, cranial nerve palsy** · **plate: myasthenia gravis** · **muscle: dystrophies**|\n|**Metabolic**|**Metabolic acidosis · hypoglycaemia · hypothermia**|\n|**Haematologic**|**Anaemia · polycythaemia · methaemoglobinaemia**|\n|**Chest wall**|**Thoracic dystrophy**|\n\n### The map by frequency\n- **Pulmonary, COMMON:** **RDS · TTN · pneumonia · meconium aspiration**.\n- **Pulmonary, less common:** **air leak · pulmonary haemorrhage · congenital lobar emphysema · BPD · congenital anomalies**.\n\nSrc: L9 pp.9, 11, 70 (all image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "prd-5",
        "w": "must",
        "h": "The algorithm — gestation and onset decide the shortlist",
        "body": "**Two questions, in order:** preterm or term, and did it start **before or after 6 hours of age**.\n\n|Gestation|Onset|Think|\n|---|---|---|\n|**Preterm**|**< 6 hours**|**HMD · pneumonia · lung anomaly · shock**|\n|**Preterm**|**> 6 hours**|**Pneumonia · congenital heart disease · pulmonary haemorrhage**|\n|**Term**|**< 6 hours**|**TTN · MAS/PPHN · asphyxia · shock · lung anomaly · air leak**|\n|**Term**|**> 6 hours**|**Pneumonia · polycythaemia · congenital heart disease**|\n\nSrc: L9 p.13 (image-only, recovered by render)",
        "qs": [],
        "flow": {
          "title": "Neonatal respiratory distress — sorting by gestation and onset",
          "steps": [
            {
              "k": "step",
              "t": "Respiratory distress — tachypnoea, retractions, grunt",
              "n": "the presenting triad"
            },
            {
              "k": "decision",
              "t": "Preterm or term?",
              "yes": "Preterm → ask the age",
              "no": "Term → ask the age"
            },
            {
              "k": "step",
              "t": "PRETERM, < 6 hours: HMD · pneumonia · lung anomaly · shock",
              "n": "surfactant deficiency dominates"
            },
            {
              "k": "step",
              "t": "PRETERM, > 6 hours: pneumonia · CHD · pulmonary haemorrhage",
              "n": "acquired and cardiac"
            },
            {
              "k": "step",
              "t": "TERM, < 6 hours: TTN · MAS / PPHN · asphyxia · shock · lung anomaly · air leak",
              "n": "transition failures"
            },
            {
              "k": "step",
              "t": "TERM, > 6 hours: pneumonia · polycythaemia · CHD",
              "n": "later onset"
            },
            {
              "k": "alert",
              "t": "Sudden deterioration on a ventilator = pneumothorax until transilluminated and filmed",
              "n": "the one that kills within minutes"
            }
          ]
        }
      },
      {
        "id": "prd-6",
        "w": "high",
        "h": "Lung development — five stages",
        "body": "|Stage|Gestation|Airways|Vasculature|\n|---|---|---|---|\n|**Embryonic**|**5–7 weeks**|**Trachea, right and left bronchus**|Mesenchyme and haematopoietic cells|\n|**Pseudoglandular**|**7–17 weeks**|**Bronchial tree**|Vascular plexus in the lung mesenchyme|\n|**Canalicular**|**17–26 weeks**|**Acinus / ventilatory unit**|**Double-layered capillary network**|\n|**Saccular**|**26–35 weeks**|**Alveolar sac**|**Single-layered capillary network**|\n|**Alveolar**|**36 weeks – 3 years**|**Secondary septation**|Increase in the single-layered network|\n\n**Why it matters:** **type II cells appear in the canalicular–saccular window**, which is why surfactant starts at 24–28 weeks and matures at 35.\n\nSrc: L9 p.22 (image-only, recovered by render); surfactant timing L9 p.18",
        "qs": []
      },
      {
        "id": "prd-7",
        "w": "must",
        "h": "RDS / hyaline membrane disease — surfactant and the first breath",
        "body": "**RDS:** the **leading cause of mortality and pulmonary morbidity in preterm infants**. **Slight male predominance.**\n\n### Incidence\n- **Rule:** **inversely proportional to gestational age**.\n- **Figures:** **60–80 % under 28 weeks**; **15–30 % at 32–36 weeks**.\n\n### The first breath\n- **In utero:** the alveoli are **filled with fetal lung fluid**.\n- **First breaths:** need a negative pressure of **25–30 cm water**.\n- **Subsequent breaths:** **−5 cm H₂O**.\n- **⚠️ In RDS:** extreme negative pressure is needed for **EVERY breath**, because nothing holds the sac open between them.\n\n### Surfactant\n- **What:** a **lipoprotein material** — why **alveoli do not collapse during expiration**.\n- **Source:** **type II alveolar cells**.\n- **Action:** **decreases surface tension inside the alveoli**.\n- **Timing:** **synthesis begins at 24–28 weeks**, **mature by 35 weeks**.\n- **The physics:** **↑ surface tension → collapse**, and **↑ surface tension → ↓ compliance**. Elastin gives recoil; surfactant opposes it.\n\nSrc: L9 pp.14–21, 72 (pp.18–21, 72 image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "prd-8",
        "w": "must",
        "h": "RDS — pathogenesis and pathology",
        "body": "**The short version:** **pulmonary immaturity plus surfactant deficiency** give **poor compliance, atelectasis, decreased gas exchange, severe hypoxia and acidosis**.\n\n### The cascade as the deck draws it\n- **Prematurity →** **surfactant deficiency** and a **structurally immature lung**.\n- **Both →** **atelectasis** → **V/Q mismatch** and **hypoventilation**.\n- **Then →** **hypoxaemia and hypercarbia** → **respiratory and metabolic acidosis**.\n- **Acidosis →** **pulmonary vasoconstriction** → **impaired endothelial and epithelial integrity**.\n- **Finally →** **proteinaceous exudate** → **fibrin** → **RDS**.\n\n### Pathology\n- **The hallmark:** alveolar sacs **lined by EOSINOPHILIC HYALINE MEMBRANE**, derived from **injured epithelial cells** — the disease’s other name.\n\nSrc: L9 pp.23–25 (pp.24, 25 image-only, recovered by render)",
        "qs": [],
        "flow": {
          "title": "RDS — from prematurity to hyaline membrane",
          "steps": [
            {
              "k": "step",
              "t": "Prematurity → surfactant deficiency + structurally immature lung",
              "n": "the two upstream faults"
            },
            {
              "k": "step",
              "t": "Atelectasis",
              "n": "alveoli collapse in expiration"
            },
            {
              "k": "step",
              "t": "V/Q mismatch + hypoventilation → hypoxaemia and hypercarbia",
              "n": ""
            },
            {
              "k": "step",
              "t": "Respiratory and metabolic acidosis",
              "n": "mixed, on the gas"
            },
            {
              "k": "alert",
              "t": "Pulmonary vasoconstriction → impaired endothelial and epithelial integrity",
              "n": "the point of no return without support"
            },
            {
              "k": "step",
              "t": "Proteinaceous exudate → fibrin → hyaline membrane",
              "n": "RDS established"
            }
          ]
        }
      },
      {
        "id": "prd-9",
        "w": "must",
        "h": "RDS — course, radiology and blood gas",
        "body": "- **Onset:** **immediately or shortly after birth**.\n- **First 48 hours:** **aggravates rapidly**, with progressive distress and cyanosis.\n- **Then:** **stabilises and improves over the next few days with proper management**.\n\n### Chest X-ray — three features\n- **Volume:** **small lung volume**.\n- **Parenchyma:** **fine reticulogranular GROUND-GLASS mottling** in both fields.\n- **Through it:** an **AIR BRONCHOGRAM**.\n\n### Laboratory\n- **Gas:** **progressive hypoxaemia · high PCO₂ · mixed respiratory and metabolic acidosis**.\n\n*The deck’s opening case: a 30-week infant delivered by emergency caesarean for pre-eclampsia, tachypnoeic at 70/min with flaring, retractions and grunting within 30 minutes, 85 % in air, PaO₂ 45, PaCO₂ 60, pH 7.25.*\n\nSrc: L9 pp.3, 5, 26–28 (pp.4, 28 image-only)",
        "qs": []
      },
      {
        "id": "prd-10",
        "w": "must",
        "h": "RDS — four complications",
        "body": "- **Intraventricular haemorrhage —** **fragile subependymal vessels in prematures**, plus **hypoxia**.\n- **Patent ductus arteriosus —** **a high PaO₂ is needed to close the duct**, and this infant has none.\n- **Air leak syndromes —** pneumothorax; **usually complications of MECHANICAL VENTILATION**, not of the disease.\n- **Respiratory failure and death.**\n\n*IVH and the preterm duct in full in `perinatal`, per-8 and per-10.*\n\nSrc: L9 p.29",
        "qs": []
      },
      {
        "id": "prd-11",
        "w": "must",
        "h": "RDS — prevention and treatment",
        "body": "### Prevention\n- **Upstream:** prevention of **prematurity** and of the other risk factors.\n- **Antenatal steroids:** **betamethasone or dexamethasone, IM to the mother, 48 hours before delivery, at 34 weeks or less** — **accelerates fetal lung maturity**.\n- *Dose not stated by the deck; the usual course is betamethasone 12 mg IM, two doses 24 hours apart (not in course material).*\n\n### The rationale\n**The aim:** maintain and stabilise the newborn in good condition **UNTIL LUNG MATURITY OCCURS**. Nothing here cures the disease; it buys time.\n\n### The three limbs\n- **1 Supportive care —** delivery-room stabilisation, **thermoregulation**, nutritional support, fluid and electrolyte management, **antibiotic therapy**.\n- **2 Surfactant therapy.**\n- **3 Assisted ventilation.**\n\n### The escalation the deck photographs\n- **Delivery room —** T-piece resuscitator, warmth, early CPAP.\n- **Non-invasive —** **nasal CPAP**, needed by **86 %** of VLBW infants.\n- **Invasive —** intubation and ventilation (**64 %**), with **surfactant** down the tube. The preparation shown is **Survanta (beractant) 25 mg/mL intratracheal suspension**.\n\nSrc: L9 pp.30–34 (pp.32–34 image-only); frequencies L7 p.46",
        "qs": []
      },
      {
        "id": "prd-12",
        "w": "must",
        "h": "Transient tachypnoea of the newborn — the wet lung",
        "body": "**TTN:** also known as **RDS type 2** or **wet lung**.\n\n### Where it sits\n- **Rank:** the **MOST COMMON cause of neonatal respiratory distress** — **over 40 % of cases**.\n- **Rate:** **11 per 1,000 live births**.\n- **Who:** **TERM and LATE PRETERM** neonates, not the very preterm.\n\n### Pathophysiology\n- **Mechanism:** a **mild, transient** form of distress from **delayed clearance of fetal lung fluid by the lymphatics**.\n\n### Fetal lung fluid\n- **Amount:** **20 mL/kg near term**, produced at **2–5 mL/kg/hour**.\n- **Purpose:** its presence is **important for normal fetal lung development**.\n- **How it is made:** **secondary active transport of CHLORIDE ions** from the interstitial space into the lung lumen.\n- **⚠️ The adrenaline switch:** during **labour and delivery** adrenaline rises, so **lung liquid secretion CEASES and resorption BEGINS**.\n- **Without labour:** an **elective caesarean** **delays that switch** — the whole disease.\n\nSrc: L9 pp.35–38, 73 (p.73 image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "prd-13",
        "w": "must",
        "h": "TTN — risk factors, course, diagnosis and management",
        "body": "- **Risk factors:** **elective caesarean section · male gender · maternal diabetes**.\n- **Onset:** **within 2 hours after delivery**, mild to moderate distress.\n- **Duration:** **a few hours to 3 days**.\n- **Chest radiograph:** **perihilar streaking with fluid in the interlobar fissures** — the wet lung.\n- **⚠️ TTN is a CLINICAL diagnosis.** The film supports it; it does not make it.\n- **Management:** **supplemental oxygen or CPAP**; **resolves in 3 days**; **most cases need no active treatment**.\n\nSrc: L9 pp.39–42",
        "qs": []
      },
      {
        "id": "prd-14",
        "w": "must",
        "h": "Meconium aspiration syndrome — meconium and how it gets into the lung",
        "body": "**MAS:** respiratory distress from **aspiration of the meconium, in utero or at delivery**.\n\n### What meconium is\n- **Definition:** the **first stool the newborn passes after birth**.\n- **Composition:** a **greenish-black viscid** material of **bile, intestinal secretions and epithelial debris** from the fetal gut.\n- **⚠️ It is STERILE.**\n\n### How it reaches the airway — two steps, one cause\n- **Step 1:** **acute or chronic fetal HYPOXIA stimulates fetal peristalsis and relaxes the anal sphincter** → meconium passes into the amniotic fluid.\n- **Step 2:** **the same hypoxia stimulates fetal breathing (gasping)** → **aspiration** of the meconium-containing fluid.\n- **⚠️ The number:** **only 4–5 %** of infants with meconium-stained amniotic fluid develop MAS.\n\nSrc: L9 pp.44–46, 74 (p.74 image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "prd-15",
        "w": "must",
        "h": "MAS — the consequences and the pathophysiology loop",
        "body": "|Consequence|What it does|\n|---|---|\n|**Chemical pneumonitis**|**Chemical irritation and inflammation of the lungs**|\n|**Complete obstruction**|**Atelectasis**|\n|**Partial obstruction — BALL VALVE**|**Air trapping → over-inflation and emphysema**, possible **air leak → pneumothorax**|\n|**Persistent pulmonary hypertension**|Right-to-left shunting, refractory hypoxaemia|\n|**Promotion of bacterial growth**|**Meconium is sterile and there is no infection** — but it **attenuates the immune response to infection**|\n|**Surfactant deactivation**|Adds a surfactant-deficient lung to an obstructed one|\n\n### The loop\n- **Three limbs:** meconium aspiration → **mechanical obstruction · chemical inflammation · surfactant inactivation**.\n- **Mechanical limb:** **air trapping → uneven ventilation → AIR LEAKS**.\n- **Chemical and surfactant limbs:** **atelectasis → intrapulmonary shunting**.\n- **⚠️ Both converge:** on **hypoxaemia and acidosis**, which **drives primary pulmonary hypertension** — and **PPHN worsens the hypoxaemia**, closing the loop.\n- **PPHN** *(not in course material)* — failure of pulmonary vascular resistance to fall after birth, shunting **right to left through duct and foramen ovale**; the clue is a **pre-/post-ductal saturation gap**.\n\nSrc: L9 pp.47–49 (p.49 image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "prd-16",
        "w": "must",
        "h": "MAS — who gets it, how it looks, what the film shows",
        "body": "**The typical patient:** a **term or post-term infant who suffered placental insufficiency**, shown as **IUGR, fetal distress and meconium-stained amniotic fluid**.\n\n### Risk factors\n- **Fetal:** **post maturity**, **oligohydramnios**.\n- **Maternal:** **hypertension, pre-eclampsia, eclampsia · diabetes · heavy cigarette smoking · chronic respiratory or cardiovascular disease**.\n\n### Clinically\n- **Staining:** of the **skin, umbilical cord and amniotic fluid**.\n- **Chest:** distress with a **BARREL-SHAPED CHEST**, from over-inflation.\n- **⚠️ The rule:** consider MAS in **ANY** infant born through meconium-stained fluid who develops distress.\n- **Timing:** **some are asymptomatic at birth** and worsen as meconium moves into the **lower tracheobronchial tree**.\n- **Against TTN:** greater distress **immediately after delivery**, and gases with **more acidosis, hypercapnia and hypoxaemia**.\n\n### Chest X-ray\n- **1 Parenchyma:** **bilateral scattered atelectasis, obstructive emphysema and pneumonitis**.\n- **2 Air leak:** **pneumomediastinum or pneumothorax** may be present.\n\nSrc: L9 pp.50–54 (pp.52, 53 image-only)",
        "qs": []
      },
      {
        "id": "prd-17",
        "w": "must",
        "h": "MAS — treatment",
        "body": "### In the delivery room\n- **Suction:** **oral and pharyngeal, as soon as the head is delivered**.\n- **Oxygen supply.**\n\n### In the NICU\n- **Respiratory:** **oxygen and mechanical ventilation if indicated**, judged by the **work of breathing and the blood gases**.\n- **Also:** **prophylactic antibiotics · intravenous fluids**.\n- **Complications:** treat **PPHN** and **pneumothorax**.\n- **⚠️ Expect air leak:** for a post-term baby born apnoeic and floppy with deeply stained meconium, intubated and ventilated, the deck makes **AIR LEAK SYNDROME (pneumothorax)** the commonest NICU complication. *No key is printed with the question; recorded as it stands.*\n\nSrc: L9 pp.55, 66",
        "qs": []
      },
      {
        "id": "prd-18",
        "w": "high",
        "h": "Neonatal pneumonia",
        "body": "### Three acquisition pathways\n- **Congenital —** acquired **in utero**.\n- **Perinatal —** acquired **during the delivery process**.\n- **Postnatal —** acquired **after birth**, in the NICU or at home; presents **early- or late-onset**.\n\n### The definition note\n- **⚠️ The strict definition:** the presence of **POLYMORPHONUCLEAR LEUKOCYTES in the alveoli or interstitium**.\n- **⚠️ Bacteria:** **not strictly necessary** to meet the pathological definition.\n\n### Radiology and its trap\n- **Film:** **lobar consolidation** — the deck shows **right upper lobe**.\n- **⚠️ Trap:** congenital pneumonia is **often indistinguishable from HMD** (per-6).\n\n*Organisms by age, and pneumonia beyond the newborn, in `resp-pneumonia`; neonatal sepsis in `neonatal`.*\n\nSrc: L9 pp.56–58 (p.57 image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "prd-19",
        "w": "high",
        "h": "Pulmonary air leak syndromes",
        "body": "- **What they are:** a **spectrum with one pathophysiology** — **pneumomediastinum and pneumothorax**.\n- **Mechanism:** **over-distension of alveolar sacs or terminal airways** → **disruption of airway integrity** → **dissection of air into surrounding spaces**.\n- **Sign 1:** **sudden respiratory distress** and deterioration, with **altered vital signs and worsening blood gases**.\n- **Sign 2:** **asymmetry of the thorax** in **unilateral** cases.\n\n*Transillumination, its false positives and negatives, and chest-tube drainage are in per-6.*\n\nSrc: L9 pp.59–62",
        "qs": []
      },
      {
        "id": "prd-20",
        "w": "must",
        "h": "Congenital diaphragmatic hernia",
        "body": "### The triad\n- **1 Respiratory distress —** **severe and IMMEDIATE**.\n- **2 Abdomen —** **SCAPHOID (sunken)**.\n- **3 Heart sounds —** **shifted to the RIGHT**.\n\n### Diagnosis\n- **Antenatal:** often on **prenatal ultrasound at 18–20 weeks**.\n\n### Management *(not in course material)*\n- **⚠️ Do NOT bag-mask ventilate —** it inflates the herniated bowel and worsens the compression.\n- **Do:** **intubate early**, pass a **large nasogastric tube** to decompress the gut.\n- **Surgery:** repair **AFTER cardiorespiratory stabilisation**, not as an emergency.\n- **Outcome:** turns on **pulmonary hypoplasia** and associated **PPHN**.\n\nSrc: L9 pp.63–65 (pp.63, 65 image-only)",
        "qs": []
      },
      {
        "id": "prd-21",
        "w": "must",
        "h": "The Big Three side by side — RDS, TTN and MAS",
        "body": "|Variable|**RDS** (hyaline membrane)|**TTN** (wet lung)|**MAS** (aspiration)|\n|---|---|---|---|\n|**Typical patient**|**Preterm**|**Term / late preterm, elective CS**|**Term / post-term, hypoxia or distress**|\n|**Onset and course**|**Immediate, worsens over 48 h**|**< 2 hours, resolves in 3 days**|**Often immediate, progressive; BARREL CHEST**|\n|**Blood gas**|**Progressive hypoxaemia, high PCO₂, mixed acidosis**|**Mild alterations**|**Severe acidosis, hypercapnia, hypoxaemia**|\n|**Core mechanism**|**Surfactant deficiency**|**Fetal lung fluid retention**|**Airway obstruction and chemical pneumonitis**|\n|**Chest X-ray**|**Ground-glass mottling + air bronchogram, small volumes**|**Perihilar streaking, fluid in the fissures**|**Patchy atelectasis, obstructive emphysema, air leak**|\n\n### The mechanism in one line each\n- **RDS —** **high surface tension collapses the sac during expiration**.\n- **TTN —** **interstitial and lymphatic fluid impedes gas exchange**.\n- **MAS —** **viscid meconium blocks airflow and triggers chemical inflammation**.\n\nSrc: L9 pp.71, 75 (both image-only, recovered by render); the X-ray row L9 pp.27, 41, 53",
        "qs": []
      }
    ]
  },
  "perinatal-hie": {
    "intro": "What a period without oxygen does to the brain. The three-part definition, why the damage is delayed and the window six hours wide, Sarnat and Thompson staging, and therapeutic hypothermia — who is cooled, by criteria A, B and C, and how.",
    "sections": [
      {
        "id": "phi-1",
        "w": "must",
        "h": "Hypoxic-ischaemic encephalopathy — a three-part definition",
        "body": "**The definition is an equation:** **intrapartum OR neonatal distress**, **PLUS neonatal neurological symptoms**. Distress alone is not HIE; neurological signs alone are not HIE.\n\n### Intrapartum distress\n- **Obstetrical evidence:** **CTG signs of fetal distress · depressed scalp pH · fresh meconium**.\n- **Obstetrical causes:** **prolapse of the umbilical cord · placental abruption · rupture of the uterus**.\n\n### Neonatal distress — four criteria\n- **Apgar:** **depressed at 5 and/or 10 minutes**.\n- **Ventilation:** needed **post partum for more than 5 minutes**.\n- **pH:** **< 7.1** in the **umbilical cord** or in the **first hour post partum**.\n- **Base deficit:** **> 10 mEq/L**.\n\n### Cerebral dysfunction\n- **Tone and posture:** abnormal.\n- **Consciousness:** abnormal level.\n- **Primitive reflexes:** abnormal, e.g. **sucking**.\n- **Seizures.**\n\n*The Apgar score itself is in per-2 — no deck prints it.*\n\nSrc: L12 pp.3–7 (the definition banner is reprinted over each limb)",
        "qs": []
      },
      {
        "id": "phi-2",
        "w": "high",
        "h": "Magnitude — a problem of quality of life, not of mortality",
        "body": "### The numbers\n- **NICU admissions:** **4.7 %** — El-Shatbi Hospital, **2016**.\n- **Neonatal deaths:** **23 % of all of them** are caused by perinatal asphyxia.\n- **Global:** **0.7–1.2 million birth-asphyxia deaths per year** (WHO 2004).\n\n### Why the figures under-report\n**The four reasons:** 1 lack of a filing system · 2 high incidence of home deliveries · 3 lack of diagnosis · 4 cause of death in healthcare facilities often inadequately documented.**\n\n### The deck’s own point\n- **The message:** *\"not a matter of mortality, it is a matter of life quality.\"*\n- **Moderate HIE:** **50 % of survivors** have long-term disabilities.\n- **Severe HIE:** **90 % of survivors** do.\n\n### School-age outcomes\n\n|Outcome|**Moderate** (n = 181)|**Severe** (n = 11)|\n|---|---|---|\n|**Disabled**|**21 %**|**100 %**|\n|**Cerebral palsy**|**12 %**|**100 %**|\n|**Multiply disabled**|**8 %**|**100 %**|\n|**Cognitive deficits**|**8 %**|**82 %**|\n|**Epilepsy**|**2 %**|**72 %**|\n|**Legal blindness**|**1 %**|**46 %**|\n|**Hearing loss (aids)**|**6 %**|**9 %**|\n\nSrc: L12 pp.8–14 (p.13 image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "phi-3",
        "w": "must",
        "h": "Causes — when, and from where",
        "body": "- **By timing:** **antepartum 50 % · intrapartum 40 % · postpartum 10 %**.\n- **Fetal and cord:** **oligohydramnios · cord prolapse · carboxyhaemoglobin · significant anaemia (isoimmunisation, ruptured vasa praevia)**.\n- **Uterine and placental:** **excessive uterine activity · placental abruption · placental infarction · chorioamnionitis**.\n\n### Maternal — four groups\n\n|Group|Causes|\n|---|---|\n|**↓ arterial oxygen tension**|**Respiratory disease · hypoventilation, seizure, trauma · smoking**|\n|**↓ oxygen-carrying capability**|**Significant anaemia (iron deficiency, haemoglobinopathies) · carboxyhaemoglobin (smokers)**|\n|**↓ uterine blood flow**|**Hypotension (blood loss, sepsis) · regional anaesthesia · maternal positioning**|\n|**Chronic conditions**|**Vasculopathies — SLE, type I diabetes, chronic hypertension · antiphospholipid syndrome**|\n\nSrc: L12 pp.16–20 (p.20 image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "phi-4",
        "w": "must",
        "h": "Pathogenesis — the fetus defends its brain until it cannot",
        "body": "- **Trigger:** **interruption of placental blood flow**.\n- **Response:** **cardiac output is REDISTRIBUTED** — the fetal diving reflex.\n- **Preserved:** **cerebral, myocardial and adrenal** blood flow.\n- **Reduced:** **renal, intestinal and skin** blood flow.\n- **⚠️ Critical threshold:** past it, the **adaptive circulatory mechanisms FAIL**.\n- **Result:** **hypoxic-ischaemic cerebral injury**.\n\n*Which is why kidney, gut and skin are damaged FIRST and the brain LAST: renal failure and NEC after asphyxia mean a longer insult than encephalopathy alone.*\n\nSrc: L12 p.21 (image-only, recovered by render)",
        "qs": [],
        "flow": {
          "title": "Birth asphyxia — redistribution, then failure",
          "steps": [
            {
              "k": "step",
              "t": "Interruption of placental blood flow",
              "n": "abruption, cord prolapse, uterine rupture"
            },
            {
              "k": "step",
              "t": "Cardiac output redistributed",
              "n": "the fetal diving reflex"
            },
            {
              "k": "step",
              "t": "Cerebral, myocardial and adrenal flow PRESERVED",
              "n": "the brain is defended"
            },
            {
              "k": "step",
              "t": "Renal, intestinal and skin flow REDUCED",
              "n": "the price paid for it"
            },
            {
              "k": "alert",
              "t": "Critical threshold — adaptive circulatory mechanisms FAIL",
              "n": "the defence collapses"
            },
            {
              "k": "alert",
              "t": "Hypoxic-ischaemic cerebral injury",
              "n": ""
            }
          ]
        }
      },
      {
        "id": "phi-5",
        "w": "must",
        "h": "The phases of injury — and why the window is six hours",
        "body": "**Injury is not one event.** The insult opens a delay, and most of the damage that disables the child is done after it.\n\n|Phase|Timing|What is happening|\n|---|---|---|\n|**Hypoxic-ischaemic insult**|**~1 hour**|Primary energy failure|\n|**LATENT phase**|**6–15 hours**|Partial recovery — **the therapeutic window**|\n|**SECONDARY phase**|**3–10 days**|**↓ metabolism · cytotoxic oedema · excitotoxins · DELAYED CELL DEATH**|\n\n- **⚠️ The rationale in one sentence:** **hypothermia causes prolongation of the latent phase** — which is why cooling must start **within the first 6 hours**.\n\n*The deck’s own banner obscures the middle box of its diagram; the latent phase is named by the timeline and the banner rather than by the label.*\n\nSrc: L12 p.22 (image-only, recovered at 300 dpi)",
        "qs": []
      },
      {
        "id": "phi-6",
        "w": "must",
        "h": "HIE is a multi-organ disease",
        "body": "**The upstream event:** **hypoxia-ischaemia from failure of oxygenation across the placenta, the umbilicus, or postnatal respiratory depression**.\n\n|Organ|Manifestation|\n|---|---|\n|**Brain**|**Encephalopathy — abnormal neurological signs · SEIZURES**|\n|**Lung**|**Respiratory failure — APNOEA**|\n|**Heart**|**Myocardial dysfunction · PPHN · hypotension**|\n|**Metabolic**|**Hypoglycaemia · hypocalcaemia · hyponatraemia**|\n|**Other**|**Renal failure · DIC**|\n\n*Follows from phi-4: the organs the diving reflex sacrificed are the ones that fail.*\n\nSrc: L12 p.53 (image-only, recovered at 300 dpi; the slide reproduces a textbook figure captioned 11.21)",
        "qs": []
      },
      {
        "id": "phi-7",
        "w": "must",
        "h": "Sarnat staging — the grading everything else keys off",
        "body": "**Modified from Sarnat and Sarnat.** Mild is stage I, moderate II, severe III.\n\n|Sign|**Mild (I)**|**Moderate (II)**|**Severe (III)**|\n|---|---|---|---|\n|**Level of consciousness**|**HYPERALERT**|**Lethargic**|**Coma**|\n|**Muscle tone**|**Normal**|**Mild hypotonia**|**Flaccid**|\n|**Suck**|**Normal / weak**|**Weak / absent**|**Absent**|\n|**Moro**|**Strong**|**Weak / incomplete**|**Absent**|\n|**Seizures**|**Absent**|**Common**|**Frequent, difficult to control**|\n\n- **⚠️ At the mild end:** the discriminator is **HYPERALERTNESS, not depression** — jittery and over-awake, not flat.\n- **⚠️ Who is cooled:** **moderate and severe** only. Mild HIE outcomes are **not always fully favourable**, but routine cooling for it **remains uncertain**.\n\nSrc: L12 p.24; the mild-HIE caveat L12 p.58",
        "qs": []
      },
      {
        "id": "phi-8",
        "w": "high",
        "h": "Thompson score — the bedside numerical alternative",
        "body": "**Nine signs, each 0 to 3.** Unlike Sarnat it gives a single number that can be repeated daily.\n\n|Sign|**0**|**1**|**2**|**3**|\n|---|---|---|---|---|\n|**Tone**|Normal|**Hyper**|**Hypo**|**Flaccid**|\n|**Level of consciousness**|Normal|**Alert, stare**|**Lethargic**|**Comatose**|\n|**Fits**|None|**< 2 per day**|**> 2 per day**|—|\n|**Posture**|Normal|**Fisting and cycling**|**Strong distal flexion**|**Decerebrate**|\n|**Suckling**|Normal|**Poor**|**Absent**|—|\n|**Moro**|Normal|**Partial**|**Absent**|—|\n|**Grasp**|Normal|**Poor**|**Absent**|—|\n|**Respiration**|Normal|**Hyperventilation**|**Brief apnoea**|**Apnoea (IPPV)**|\n|**Fontanelle**|Normal|**Full**|**Tense**|—|\n\n*Five of the nine top out at 2, so the maximum is 22 (not in course material).*\n\nSrc: L12 p.25",
        "qs": []
      },
      {
        "id": "phi-9",
        "w": "must",
        "h": "Neuroimaging and aEEG",
        "body": "- **Four modalities, in order:** **1 cranial ultrasound · 2 CT · 3 MRI · 4 aEEG**.\n- **MRI T1-weighted:** **HIGH signal in the posterior limb of the internal capsule and the thalami**.\n- **MRI T2-weighted:** **LOW signal in the same regions**.\n\n### Amplitude-integrated EEG\n\n|Trace|Upper voltage|Lower voltage|\n|---|---|---|\n|**Normal**|**> 10 µV**|**> 5 µV**|\n|**Moderately abnormal**|**> 10 µV**|**< 5 µV**|\n|**Severely abnormal**|**< 10 µV**|**< 5 µV**|\n\n- **Other use:** **neonatal seizure detection**, on a CFM trace beside the raw EEG.\n- **⚠️ What it is:** an **adjunct** supporting assessment and prognosis — **not a replacement for clinical examination**, and **not useless in cooled infants**.\n\nSrc: L12 pp.26–32, 58 (pp.28, 29, 32 image-only)",
        "qs": []
      },
      {
        "id": "phi-10",
        "w": "must",
        "h": "Therapeutic hypothermia — why it works",
        "body": "**Status:** the **standard evidence-based neuroprotective treatment for moderate-to-severe neonatal HIE**, and the only one. Its purpose is **to reduce SECONDARY brain injury** — the primary insult is already over.\n\n### Not a new idea\n- **Baltimore, 1955:** hypothermia with transfusion of oxygenated blood — **94 % survival, 3 % with neurologic sequelae** at a **42-month** average follow-up (Westin, 1962).\n- **Burnard, 1958:** **asphyxiated newborns run 2 °C cooler** than non-asphyxiated newborns — the body attempts it unaided.\n\n### The evidence base\n**Five trials:** **Cool Cap (Gluckman, Lancet 2005) · NICHD (Shankaran, NEJM 2005) · TOBY (Azzopardi, NEJM 2009) · China Study Group (Zhou, J Peds 2010) · ICE trial (Simbruner, Pediatrics 2016).** Verdict: **effective and safe.**\n\n### Seven mechanisms\n- **1 Cerebral metabolism —** ↓ by **5–7 % per degree Celsius** fall in body temperature.\n- **2–4 Cell death —** ↓ **apoptosis**, ↓ **excitatory amino acids**, ↓ **free radical production**.\n- **5 Seizures —** ↓ **duration**.\n- **6–7 Brain water —** ↓ **blood–brain barrier disruption**, ↓ **cerebral oedema**.\n\nSrc: L12 pp.33–41, 55, 60",
        "qs": []
      },
      {
        "id": "phi-11",
        "w": "must",
        "h": "Who gets cooled — criteria A, B and C",
        "body": "### Criterion A — clinical and laboratory\n- **Apgar:** **≤ 5 at 5 minutes** after birth.\n- **Resuscitation:** continued need **> 10 minutes**.\n- **Fetal distress:** signs of it.\n- **pH:** **< 7.1 within 60 minutes** of birth.\n- **Base deficit:** **≥ 10 mmol/L within 60 minutes** of birth.\n\n### Criterion B — clinical\n- **The rule:** **disturbed consciousness PLUS at least one** of the following.\n- **The four:** **abnormal pupillary reflexes · abnormal muscle tone · absent or weak suck · clinical seizures**.\n\n### Criterion C — aEEG\n- **The recording:** a **CFM record of at least 30 minutes**, obtained **within the first 6 hours of life**.\n- **Qualifying traces:** **1** normal background with some electrical seizure activity · **2** moderately abnormal · **3** severely abnormal.\n\n### The gestational threshold\n- **⚠️ Standard cooling:** neonates **≥ 36 weeks with moderate-to-severe HIE** *(not in course material)*. **A 32-week infant with seizures and a 35-week infant with mild encephalopathy are not standard candidates.**\n\nSrc: L12 pp.47–49; the threshold from L12 pp.61–62 as an unkeyed question, answered from general knowledge",
        "qs": []
      },
      {
        "id": "phi-12",
        "w": "must",
        "h": "How cooling is done",
        "body": "|Parameter|The deck’s value|\n|---|---|\n|**Time of starting**|**As early as possible, within the first 6 hours of birth**|\n|**Target temperature**|**Rectal 33 °C – 35 °C**|\n|**Duration**|**84 hours** *(see the defect note)*|\n|**Technique**|**Active** or **passive** cooling|\n\n*⚠️ Defect: L12 p.51 gives 84 hours, while L12 p.57’s own MCQ offers 12 / 24 / 48 / 72 hours and no key. The trial standard in Cool Cap, NICHD and TOBY is 72 hours (not in course material). Both recorded; neither overwritten.*\n\n### Passive cooling\n- **Step 1:** **switch off the radiant heater**.\n- **Step 2:** **nurse the baby naked**.\n- **⚠️ Cool paks and cool mattress:** **from the REFRIGERATOR, NEVER the FREEZER**, at around **10 °C**.\n\n### Whole body versus selective head cooling\n- **Whole body:** **all brain layers homogeneously cooled**.\n- **Selective head:** meant **to decrease the systemic effects** of hypothermia; **⚠️ unfortunately cools only superficial cortical layers**.\n\nSrc: L12 pp.42–46, 51–52 (pp.42, 45 image-only); the defect from L12 pp.51 and 57",
        "qs": []
      },
      {
        "id": "phi-13",
        "w": "must",
        "h": "Supportive management of the asphyxiated newborn",
        "body": "- **1 Airway —** maintain **oxygenation and ventilation**.\n- **2 Circulation —** maintain **adequate perfusion**.\n- **3 Vasopressors —** where perfusion cannot be maintained otherwise.\n- **4 Homeostasis —** normal **haematocrit, blood glucose and electrolytes, especially CALCIUM**.\n- **5 Seizures —** **phenobarbital, phenytoin, midazolam, lidocaine**.\n\n*⚠️ Phenobarbital is not the neuroprotective treatment — the deck asks this directly, and the answer is therapeutic hypothermia, not phenobarbital, mannitol or exchange transfusion.*\n\n*Neonatal seizures as an entity, and their other causes, are in `neonatal`.*\n\nSrc: L12 pp.50, 55",
        "qs": []
      }
    ]
  },
  "endocrine": {
    "intro": "Type 1 diabetes: classification, the diagnostic numbers, insulin regimens, and what to screen for and when. Ends on hypoglycaemia in the child on insulin — the emergency at the other end of the dose.",
    "sections": [
      {
        "id": "endo-1",
        "w": "must",
        "h": "Diabetes mellitus — definition and classification",
        "body": "**Diabetes mellitus:** a **chronic metabolic disorder characterized by hyperglycemia** due to **impaired insulin secretion, action, or both**.\n\n- **Why classify:** multiple subtypes, each with **different causes, treatments and outcomes** — proper classification is essential.\n- **In children:** **type 1 is the most common form**, usually from **autoimmune destruction of pancreatic beta cells**.\n\n### The classification grid\n|Category|Key mechanism|Important examples|\n|---|---|---|\n|**Type 1 diabetes**|**β-cell destruction → absolute insulin deficiency**|**Autoimmune (most common)**, **idiopathic**|\n|**Type 2 diabetes**|**insulin resistance + relative insulin deficiency**|**obesity-related diabetes**|\n|**Monogenic diabetes**|**single gene defect affecting insulin secretion**|**MODY (HNF1A, GCK)**, **neonatal DM (KCNJ11, INS)**|\n|**Pancreatic disease**|**destruction of pancreas**|**cystic fibrosis**, **pancreatitis**|\n|**Endocrine disorders**|**excess counter-regulatory hormones**|**Cushing syndrome**, **hyperthyroidism**|\n|**Drug-induced**|**insulin resistance or ↓ secretion**|**steroids**, **antipsychotics**|\n|**Genetic syndromes**|**associated chromosomal disorders**|**Turner syndrome**, **Down syndrome**|\n\n### The two monogenic forms, defined\n- **MODY:** *Maturity-Onset Diabetes of the Young* — **single gene mutations affecting insulin secretion**.\n- **Neonatal diabetes:** **diagnosed before 6 months of age**; **may be transient or permanent**.\n\n### Epidemiology\n- **T1DM:** **more than 90 % of paediatric diabetes**.\n- **T2DM:** **once rare in children, now increasingly common** — obesity, lifestyle, genetics, high-risk ethnic populations.\n- **Monogenic:** **rare but underdiagnosed**.\n\n*Cushing syndrome and hyperthyroidism appear here only as causes; both are written as diseases in endo-34 and endo-31. Turner and Down go to `genetics`.*\n\nSrc: DM pp.1–2",
        "qs": []
      },
      {
        "id": "endo-2",
        "w": "must",
        "h": "Type 1 diabetes — aetiology and pathophysiology",
        "body": "**The lesion:** **autoimmune destruction of pancreatic β-cells** in **genetically susceptible individuals**, especially **HLA genes**.\n\n- **Trigger:** **environmental factors such as viral infections (e.g. enterovirus)** may start the autoimmune process.\n- **Result:** **progressive β-cell destruction → absolute insulin deficiency**.\n\n### What insulin deficiency does, step by step\n- **Glucose handling:** **decreased glucose utilization by tissues** and **increased gluconeogenesis**.\n- **Counter-regulation:** **glucagon, cortisol, catecholamines and growth hormone rise** and **worsen the hyperglycaemia**.\n- **Fat:** **increased lipolysis → ketone body formation → metabolic acidosis**.\n- **Protein:** **protein breakdown and weight loss**.\n- **Water and salt:** **osmotic diuresis → dehydration and electrolyte loss**.\n\n*This is the same cascade DKA runs to completion — the diagram in endo-10 is its full form.*\n\nSrc: DM p.2",
        "qs": []
      },
      {
        "id": "endo-3",
        "w": "must",
        "h": "Presentation, diagnostic criteria and prediabetes",
        "body": "### The classic symptoms\n- **The triad:** **polyuria** · **polydipsia** · **weight loss**.\n- **Also:** **polyphagia** · **fatigue** · **nocturnal enuresis** · **abdominal pain**.\n- **DKA may be the first presentation:** **vomiting, abdominal pain, Kussmaul breathing, dehydration, altered consciousness**.\n\n**The pearl the handout prints:** **always check blood glucose in any ill child** presenting with **dehydration, vomiting, abdominal pain or altered consciousness**.\n\n### Diagnosis — confirmed by ANY ONE\n|Test|Threshold|\n|---|---|\n|**Random glucose**|**≥ 200 mg/dL + symptoms**|\n|**Fasting glucose**|**≥ 126 mg/dL**|\n|**OGTT**|**≥ 200 mg/dL**|\n|**HbA1c**|**≥ 6.5 %**|\n\n### Prediabetes — the intermediate state before diabetes\n|Test|Range|\n|---|---|\n|**Fasting**|**100–125 mg/dL**|\n|**OGTT**|**140–199 mg/dL**|\n|**HbA1c**|**5.7–6.4 %**|\n\n- **Why it matters:** **high risk of progression**, and **preventable with lifestyle**.\n\n*Nocturnal enuresis and polyuria can be the first sign of diabetes, which is why the enuresis dipstick reads glucose as well as nitrite — that reasoning is written in `renal`, ren-17.*\n\nSrc: DM pp.3, 6",
        "qs": []
      },
      {
        "id": "endo-4",
        "w": "must",
        "h": "Treating type 1 diabetes — insulin",
        "body": "- **Insulin therapy is essential** and **mandatory** in type 1 diabetes.\n- **Gold standard:** **intensive insulin therapy — the basal–bolus regimen**, by **multiple daily injections or insulin pump**, aiming to **mimic normal pancreatic secretion**.\n- **⚠️ Premix NPH + regular soluble insulin should NOT be considered best practice** for T1DM.\n- **Technology:** **newer analogs, continuous glucose monitoring (CGM) and pumps** improve control and reduce complications.\n- **Dose is not fixed:** needs **vary with age, growth, puberty, activity and illness** — frequent adjustment, individualized care.\n\n### The two components\n|Component|Agents|Timing|Share of total daily dose|Controls|\n|---|---|---|---|---|\n|**Bolus — rapid-acting**|**Lispro, Aspart, Glulisine**|**10–15 min before meals**|**50–70 %**|**post-meal glucose rise**|\n|**Basal — long-acting**|**Glargine, Detemir**|**once or twice daily**|**30–50 %**|**between meals and overnight**|\n|**Basal — ultra-long-acting**|**Degludec**|**once daily**|within the same **30–50 %**|**as above**|\n\n### The rest of the package\n- **Diet:** **carbohydrate counting and nutritional education**.\n- **Activity:** **regular exercise is encouraged**.\n- **Monitoring:** **blood glucose logs** and **HbA1c**.\n\n*Two things no deck names: the honeymoon (partial remission) phase, when residual β-cells briefly cut the insulin requirement after diagnosis, and sick-day rules — never omit insulin during illness, check ketones, give extra fluid (not in course material).*\n\nSrc: DM p.4; the honeymoon phase and sick-day rules are supplied and tagged",
        "qs": []
      },
      {
        "id": "endo-5",
        "w": "high",
        "h": "Treating type 2 diabetes",
        "body": "### Lifestyle modification — first, and always\n- **Diet:** **healthy diet — reduce calories, balanced meals**.\n- **Weight:** **weight reduction**.\n- **Activity:** **regular physical activity**; **limit sedentary behaviour (screen time)**.\n\n### Drugs\n- **Metformin:** **first-line drug in most patients** — it **improves insulin sensitivity**.\n- **Insulin:** **may be indicated if severe hyperglycemia, ketosis or DKA**.\n\n### The rest\n- **Education of patient and family is essential.**\n- **Regular blood glucose monitoring.**\n- **Management of comorbidities:** **hypertension**, **dyslipidemia**, **obesity**.\n\n*T2DM is associated with family history, obesity and a sedentary lifestyle, and is commoner in obese adolescents (DM p.1). Obesity as a disease — BMI, the centile bands, drugs and surgery — is in `nutrition`.*\n\nSrc: DM pp.1, 5",
        "qs": []
      },
      {
        "id": "endo-6",
        "w": "must",
        "h": "Complications, and when to start screening for them",
        "body": "- **Acute complications:** **DKA** and **hypoglycemia**.\n- **Chronic — microvascular:** **nephropathy, retinopathy, neuropathy**.\n- **Chronic — macrovascular disease.**\n\n### The screening schedule\n| |When to commence screening|Screening method and frequency|\n|---|---|---|\n|**Nephropathy**|**T1D: at puberty or age 11 years with 2–5 years diabetes duration** · **T2D: at diagnosis**|**urinary ACR**, **confirmed with a 1st morning urine sample** — **annually**|\n|**Retinopathy**|**T1D: 11 years with 2–5 years diabetes duration** · **T2D: at diagnosis**|**fundus photography or mydriatic ophthalmoscopy** — **every 2–3 years**|\n|**Neuropathy**|**T1D: 11 years with 2–5 years diabetes duration** · **T2D: at diagnosis**|**history, physical examination, clinical tests** — **annually**|\n|**Macrovascular disease**|**T1D: 11 years with 2–5 years diabetes duration** · **T2D: at diagnosis**|**lipid panel every 3 years**; **BP at least annually, ideally at every clinic visit**|\n\n*The nephropathy row alone reads \"at puberty OR age 11\"; the other three give the age only. Printed as it stands.*\n\n*The whole grid is an image on the handout page — the extracted text stops at the heading and prints nothing after it.*\n\nSrc: DM p.6 (the grid is image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "endo-7",
        "w": "high",
        "h": "Follow-up, and the diseases that travel with type 1 diabetes",
        "body": "### Routine monitoring at every visit\n- **Growth:** **height, weight, BMI, growth velocity**.\n- **Puberty:** **pubertal development**.\n- **Control:** **HbA1c every 3 months**, plus **glucose logs**.\n\n### Screening for associated autoimmune disease\n- **Thyroid disease:** **at diagnosis and every 2 years** — **TSH and anti-thyroid antibodies**.\n- **Coeliac disease:** **at diagnosis (or within the first year), then every 2–5 years** — **TTG-IgA is the first-line test**.\n- **Others to remember:** **Addison’s disease**, **autoimmune gastritis**.\n\n### Injection sites — examined at every visit\n- **Look for:** **lipohypertrophy** and **lipoatrophy**.\n- **Educate on:** **proper injection technique**, **rotation of sites**, **avoid reuse of needles**.\n\n*Thyroid screening is the one clinical thread joining diabetes to the thyroid half of this chapter — the disease it looks for is endo-30.*\n\nSrc: DM p.7",
        "qs": []
      },
      {
        "id": "endo-8",
        "w": "high",
        "h": "Hypoglycaemia in the child on insulin",
        "body": "**The gap:** the handout names hypoglycaemia as **one of the two acute complications of T1DM** and teaches nothing about it. What follows is supplied *(not in course material)*.\n\n### Definition and the two symptom groups\n- **Threshold:** **blood glucose below 70 mg/dL** in a child on insulin.\n- **Autonomic, first:** **sweating, tremor, pallor, palpitations, hunger, anxiety**.\n- **Neuroglycopenic, later:** **confusion, irritability, slurred speech, drowsiness, seizure, coma**.\n- **Whipple’s triad:** **low glucose + compatible symptoms + relief on correction**.\n\n### Why it happened — ask every time\n- **Too much insulin**, or **a dose given without the meal it covered**.\n- **A missed or delayed meal**; **unplanned exercise**; **alcohol** in an adolescent.\n\n### Treatment\n- **Conscious:** **15 g of rapid-acting carbohydrate**, **recheck in 15 minutes**, repeat if still low, then a **complex carbohydrate**.\n- **Unconscious or fitting:** **IM glucagon**, or **IV dextrose** if a line is in.\n- **Never give oral glucose to an unconscious child.**\n\n*Two named patterns of morning hyperglycaemia: the **dawn phenomenon** (a physiological pre-waking counter-regulatory surge) and the **Somogyi effect** (rebound after an unrecognised nocturnal hypo — the fix is less insulin, not more).*\n\n*Neonatal hypoglycaemia is a different disease with different causes and is written in `neonatal`, from `10) new Seizures . Birth injuries , Hpoglycemia 2`.*\n\nSrc: DM p.6 names it only; the whole account is supplied and tagged. Neonatal hypoglycaemia cited to `neonatal`, not counted",
        "qs": []
      }
    ]
  },
  "endo-dka": {
    "intro": "The emergency of type 1 diabetes, and frequently its first presentation. The cascade, the misdiagnoses, then management in order — fluids first, insulin an hour later, potassium always, bicarbonate withheld — and cerebral oedema, which is what kills.",
    "sections": [
      {
        "id": "endo-9",
        "w": "must",
        "h": "DKA — what it is, the triad, and how bad it is",
        "body": "- **The leading cause of morbidity and mortality** in children with T1DM.\n- **A potentially life threatening condition.**\n- **Frequently the INITIAL presentation** of children with **new-onset T1DM**.\n- **Public health:** **public awareness campaigns about the early signs of diabetes** reduce the frequency of DKA in new-onset disease.\n\n### The classical triad — all three\n|Component|Threshold|\n|---|---|\n|**Hyperglycemia**|**blood glucose > 200 mg/dL**|\n|**Metabolic acidosis**|**pH < 7.3** and **HCO3 < 18**|\n|**Ketonemia**|**blood β-OHB ≥ 3 mmol/L**, **or moderate/large ketonuria**|\n\n### Severity\n|Severity|pH|HCO3|\n|---|---|---|\n|**Mild**|**< 7.3**|**< 18 mEq/L**|\n|**Moderate**|**< 7.2**|**< 10 mEq/L**|\n|**Severe**|**< 7.1**|**< 5 mEq/L**|\n\n*The bands are ceilings, not exclusive ranges — the mild row repeats the diagnostic threshold, so read down the table and take the worst row the child meets.*\n\n### DKA versus hyperglycaemic hyperosmolar state\n|Feature|DKA|HHS|\n|---|---|---|\n|**Glucose**|**> 200 mg/dL**|**usually > 600 mg/dL**|\n|**pH and ketones**|**pH < 7.3, ketones present**|**pH near normal, ketones minimal**|\n\n*HHS is not taught in any deck; it is supplied because a stem giving very high glucose with a normal pH has no other home (not in course material).*\n\nSrc: L51 pp.4–5, 12; HHS supplied and tagged",
        "qs": []
      },
      {
        "id": "endo-10",
        "w": "must",
        "h": "DKA — the pathophysiological cascade",
        "body": "**The trigger, either of two:** **absolute insulin deficiency**, **or** **stress, infection or insufficient insulin**.\n\n**The response:** **counter-regulatory hormones rise** — **↑ glucagon**, **↑ cortisol**, **↑ catecholamines**, **↑ growth hormone**.\n\n### The four limbs they drive\n|Limb|What follows|\n|---|---|\n|**↑ Lipolysis**|**↑ FFA to liver** → **↑ ketogenesis** → **↓ alkali reserve** → **ACIDOSIS**|\n|**↓ Glucose utilization**|feeds directly into **hyperglycaemia**|\n|**↑ Proteolysis, ↓ protein synthesis**|**↑ gluconeogenic substrates** → **↑ gluconeogenesis**|\n|**↑ Glycogenolysis**|feeds directly into **hyperglycaemia**|\n\n### And then, in order\n- **HYPERGLYCAEMIA** → **glucosuria (osmotic diuresis)**.\n- **Loss of water and electrolytes** → **DEHYDRATION**, worsened by **decreased fluid intake**.\n- **Dehydration** → **hyperosmolarity** and **impaired renal function**.\n- **Impaired renal function** closes the loop by **worsening the hyperglycaemia**.\n- **Acidosis** is compounded by **↑ lactate** from poor tissue perfusion.\n\n*The whole diagram is an image; the deck’s extracted text is the three-word slide title.*\n\nSrc: L51 p.11 (image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "endo-11",
        "w": "must",
        "h": "DKA — clinical signs, the misdiagnoses, and euglycaemic DKA",
        "body": "### The clinical signs\n- **Gut:** **nausea, vomiting**, **abdominal pain**.\n- **Breathing:** **tachypnea**; **rapid and deep (Kussmaul) respiration**; **fruity breath odor**.\n- **Fluid:** **dehydration, which may be difficult to detect**; **continuing polyuria despite the dehydration**.\n- **Brain:** **confusion, drowsiness, loss of consciousness**.\n- **Circulation:** **shock — rapid pulse rate, poor peripheral circulation**.\n\n### The five misdiagnoses that delay the diagnosis in young children\n|The child presents with|And is called|\n|---|---|\n|**Vomiting**|**gastroenteritis or sepsis**|\n|**Abdominal pain**|**acute abdomen**|\n|**Hyperventilation**|**pneumonia or asthma**|\n|**Polyuria and enuresis**|**UTI**|\n|**Polydipsia**|**psychogenic**|\n\n### Euglycaemic DKA\n- **The warning:** children **known to have T1DM may develop DKA with NORMAL blood glucose levels**.\n- **Suspect if:** **nausea or vomiting** · **abdominal pain** · **hyperventilation** · **dehydration** · **reduced level of consciousness**.\n\nSrc: L51 pp.6–8",
        "qs": []
      },
      {
        "id": "endo-12",
        "w": "high",
        "h": "DKA — risk factors",
        "body": "### In newly diagnosed cases\n- **Younger age (< 2 yr).**\n- **Delayed diagnosis.**\n- **Lower socioeconomic status.**\n- **Countries with low prevalence of DM.**\n\n### In known diabetic children\n- **Infections.**\n- **Insulin omission.**\n- **Poor metabolic control**; **previous episodes of DKA**.\n- **Gastroenteritis with persistent vomiting.**\n- **Psychiatric (including eating) disorders.**\n- **Challenging social and family circumstances.**\n- **Peripubertal and adolescent girls.**\n- **Limited access to medical services.**\n- **Failures in insulin pump therapy.**\n\nSrc: L51 pp.9–10",
        "qs": []
      },
      {
        "id": "endo-13",
        "w": "must",
        "h": "DKA — where to manage it, the goals, and the first measures",
        "body": "### Where — four requirements, and what to do without them\n- **A specialist/consultant endocrinologist or paediatrician** with **training and expertise in DKA**.\n- **Experienced nursing staff** trained in **monitoring and management of DKA**.\n- **Written guidelines** for DKA management in children.\n- **A laboratory** giving **frequent and timely measurements** of biochemical variables.\n- **⚠️ If not available — REFER.**\n\n### Goals of therapy\n- **Correct dehydration**; **correct acidosis and reverse ketosis**.\n- **SLOWLY correct hyperosmolarity**; **restore blood glucose to near normal**.\n- **Avoid and treat complications of DKA**; **identify and treat any precipitating event**.\n\n### Immediate assessment — general PALS guidelines\n- **Immediate assessment, vital signs**; **weigh the patient**.\n- **Assess severity of dehydration**; **assess level of consciousness**.\n- **Obtain a blood sample**; **cardiac monitor, ECG**.\n\n### Additional measures\n- **Do NOT give oral fluids**; pass a **nasogastric tube**.\n- **A second peripheral IV catheter** — **avoid CVP**.\n- **Oxygen** in **severe circulatory impairment or shock**; **cardiac monitor**.\n- **Catheterize the bladder** if **unconscious or unable to void on demand**.\n- **Antibiotics to febrile patients AFTER obtaining appropriate cultures** of body fluids.\n\nSrc: L51 pp.14, 17–18, 20",
        "qs": []
      },
      {
        "id": "endo-14",
        "w": "must",
        "h": "DKA — the laboratory work-up, ICU criteria and monitoring",
        "body": "### Initial labs\n- **Blood glucose** · **urine ketones** · **venous blood gases**.\n- **Basic blood chemistry** · **electrolytes (Na, K, Ca, P)** · **BUN, creatinine**.\n\n### Additional labs\n- **CBC** · **CRP** · **urine analysis** · **HbA1c, C-peptide** · **cultures as indicated**.\n\n### Criteria for ICU admission\n- **Severe DKA.**\n- **Compromised circulation.**\n- **Depressed level of consciousness.**\n- **At increased risk of cerebral edema:** **age < 5 yr** · **severe acidosis** · **low pCO2** · **high blood urea nitrogen**.\n\n### Monitoring — hourly, or more often as indicated\n- **Vital signs** · **neurological observations**.\n- **Amount of administered insulin** · **accurate fluid input and output**.\n- **Capillary blood glucose concentration.**\n- **Laboratory tests, 2–4 hourly:** **serum electrolytes, blood gases and urine acetone**.\n\n**What success needs, in the deck’s own words:** **meticulous monitoring**, **timely adjustments in treatment**, and **documentation on a flow chart**.\n\n*The initial-lab list and the hourly list are both images; only the additional labs and the three headings extract.*\n\nSrc: L51 pp.19, 21–23 (the initial labs and the hourly list image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "endo-15",
        "w": "must",
        "h": "DKA — fluid therapy",
        "body": "**Three objectives:** **restoration of circulating volume** · **replacement of the ECF and ICF deficit** · **improved glomerular filtration with enhanced clearance of glucose and ketones from the blood**.\n\n### The three fluid phases\n|Phase|What to give|\n|---|---|\n|**Resuscitation**|**10 mL/kg** **over 30–60 minutes**, **0.9 % normal saline**|\n|**Deficit replacement**|guided by dehydration — but **the degree of dehydration is so difficult to assess**|\n|**Maintenance**|**1.5–2 times normal**, **spread over 36–48 hours**|\n\n### The sequence, and the glucose rule\n- **Start with 0.9 % saline, then 0.45 % saline.**\n- **Add 5 % glucose to the IV fluid when the plasma glucose falls to 250–300 mg/dL.**\n- **10 % dextrose may be necessary** to **prevent hypoglycemia while continuing to infuse insulin** to correct the metabolic acidosis.\n\n### Two arithmetic rules\n- **Subtract the initial resuscitation fluids** from the total.\n- **Urinary losses should NOT routinely be added** to the replacement calculation — **only in rare circumstances**.\n\n*Every number on this page and the next is an image; the extracted text is three empty headings.*\n\nSrc: L51 pp.25–28 (pp.26–27 image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "endo-16",
        "w": "must",
        "h": "DKA — insulin therapy",
        "body": "- **⚠️ NO IV bolus insulin.**\n- **Prime the tubes with insulin** before connecting.\n- **⚠️ Start the insulin infusion 1–2 hr AFTER starting fluid replacement therapy** — fluids first, insulin second.\n- **Dose:** **0.05–0.1 unit/kg/hr**.\n- **How it is made up:** **dilute 5 units regular insulin in 50 mL normal saline**.\n- **Watch:** the **rate of decline of glucose**.\n- **⚠️ Do NOT stop insulin** — give glucose instead if the sugar falls.\n\n### The line\n- **Insulin should preferably NOT be given through a central line.**\n- **Unless it is the only available option**, because its **infusion may be interrupted when other fluids are given through the same line**.\n\n*Both slides are images; the extracted text is the title and the two footer prompts.*\n\nSrc: L51 pp.29–30 (image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "endo-17",
        "w": "must",
        "h": "DKA — potassium, and why bicarbonate is withheld",
        "body": "### Potassium replacement\n- **Continue it throughout IV fluid therapy**, **except in renal failure**.\n- **⚠️ Defer potassium replacement until the child has voided.**\n- **Monitor:** **ECG — T wave changes**.\n- **Dose:** **40 mmol/L**.\n- **Salt:** **KCl or KPO4**.\n\n### Acidosis — bicarbonate is generally CONTRAINDICATED, for three reasons\n- **It causes a paradoxical CNS acidosis** and **decreases CNS oxygenation**.\n- **It corrects the acidosis too fast**, driving **K+ into cells** and causing **hypokalemia**.\n- **It shifts the oxygen dissociation curve to the left**, so **decreases oxygen delivery to the tissues**.\n\n*Bicarbonate treatment also appears in its own right as a risk factor for cerebral oedema — endo-18.*\n\nSrc: L51 pp.31–32 (p.31 image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "endo-18",
        "w": "must",
        "h": "Cerebral oedema — risk and recognition",
        "body": "- **The most serious complication of DKA.**\n- **May develop WITHOUT warning symptoms.**\n- **Asymptomatic cerebral swelling** is believed to **occur more frequently**.\n- **⚠️ Initiate treatment as soon as the condition is SUSPECTED** — not when it is proven.\n\n### Risk factors\n- **The child:** **younger age** · **new onset diabetes** · **longer duration of symptoms**.\n- **At presentation:** **greater hypocapnia** · **increased BUN** · **severe acidosis**.\n- **From the treatment:** **bicarbonate treatment for correction of acidosis** · **an attenuated rise in serum Na during therapy** · **greater volumes of fluid given in the first 4 hr** · **administration of insulin in the first hour of fluid treatment**.\n\n### Signs and symptoms\n- **Headache and slowing of the heart rate.**\n- **Change in neurological status:** **restlessness, irritability, increased drowsiness, incontinence**.\n- **Specific neurological signs:** **cranial nerve palsies**, **papilledema**.\n- **Rising blood pressure**; **decreased O2 saturation**.\n\n### Timing\n- **Usually within the first 12 hr** after treatment has started.\n- **But it can occur BEFORE treatment has begun.**\n- **Rarely as late as 24–48 hr** after the start of treatment.\n\n*Three of the four treatment-related risk factors are the reasons behind endo-15’s and endo-16’s own rules — no bicarbonate, cautious first-4-hour volumes, insulin delayed to the second hour.*\n\nSrc: L51 pp.33–35",
        "qs": []
      },
      {
        "id": "endo-19",
        "w": "must",
        "h": "Cerebral oedema — diagnostic criteria and treatment",
        "body": "**The rule:** diagnose on **1 diagnostic criterion**, **2 major criteria**, **or 1 major and 2 minor criteria**.\n\n### Diagnostic criteria\n- **Abnormal motor or verbal response to pain.**\n- **Decorticate or decerebrate posture.**\n- **Cranial nerve palsy.**\n- **Abnormal neurogenic respiratory pattern:** **grunting, tachypnea, Cheyne–Stokes respiration**.\n\n### Major criteria\n- **Altered mentation / fluctuating level of consciousness.**\n- **Sustained heart rate deceleration.**\n- **Age-inappropriate incontinence.**\n\n### Minor criteria\n- **Vomiting** · **headache** · **lethargy or not easily arousable**.\n- **Diastolic blood pressure > 90 mmHg** · **age < 5 yr**.\n\n### Treatment\n- **Initiate treatment as soon as the condition is suspected**; **admit to PICU**.\n- **Reduce the rate of fluid administration.**\n- **Mannitol 0.5–1 g/kg IV over 10–15 min**, **repeat if there is no initial response**.\n- **Hypertonic saline (3 %) IV 2.5–5 mL/kg over 10–15 min.**\n- **Elevate the head of the bed to 30°.**\n- **Intubation** may be necessary for **impending respiratory failure**.\n\n### Imaging — non-contrast CT\n- **⚠️ Treatment should NOT be delayed while waiting for the result.**\n- **What it is looking for:** a **lesion requiring emergency neurosurgery (intracranial haemorrhage)**, or one that **may necessitate anticoagulation (cerebrovascular thrombosis)**.\n\nSrc: L51 pp.36–37",
        "qs": []
      },
      {
        "id": "endo-20",
        "w": "high",
        "h": "Coming off the drip, and preventing the next episode",
        "body": "### When to shift to the transitional phase — all three\n- **Can take oral fluids without nausea or vomiting.**\n- **Alert.**\n- **Ketosis is resolving:** **pH > 7.3** and **HCO3 > 18**.\n\n**The changeover rule:** **start subcutaneous insulin at least 30 minutes BEFORE stopping the intravenous insulin** — the overlap is what prevents a rebound.\n\n### Prevention\n- **The deck’s closing line:** **management of an episode of DKA is not complete until its cause has been identified and an attempt made to treat it**.\n- **In practice that means:** the **infection**, the **omitted dose**, the **failed pump**, or the **undiagnosed diabetes** — from endo-12’s two risk lists.\n\nSrc: L51 pp.38–39 (p.39 image-only, recovered by render)",
        "qs": []
      }
    ]
  },
  "endo-thyroid": {
    "intro": "The thyroid, then two adrenal disorders. Why a hypothyroid newborn looks normal and is screened on day 3–7 regardless, cretinism if it is missed, goitrous versus non-goitrous, and Graves; then congenital adrenal hyperplasia and Cushing.",
    "sections": [
      {
        "id": "endo-21",
        "w": "know",
        "h": "The thyroid gland — structure and function",
        "body": "### The gland\n- **Shape and position:** a **butterfly-shaped endocrine organ**, **two lobes on either side of the trachea connected by an isthmus**, **just below the larynx in the front of the neck**.\n- **Size:** the **largest endocrine gland**.\n- **Development:** **develops as a bud from the floor of the pharynx** and **descends to its level in the neck**.\n\n### The functional unit\n- **The follicle (acinus)** is the **functional unit of the gland**.\n- **Follicles are lined by epithelial cells and full of colloid.**\n- **Thyroid cells synthesize the hormones, which are STORED in the colloid.**\n\n### What the hormones are for\n- **Normal growth and development:** **linear growth** and **brain maturation**.\n- **Regulation of metabolic rate in every cell of the body.**\n\n*Ectopic thyroid tissue — the commonest developmental defect in congenital hypothyroidism — is a failure of that descent (endo-25).*\n\nSrc: L52 pp.4–7",
        "qs": []
      },
      {
        "id": "endo-22",
        "w": "must",
        "h": "Control, biosynthesis and release",
        "body": "### The axis\n- **Hypothalamus:** **thyrotropin releasing hormone (TRH)**, which **stimulates the anterior pituitary**.\n- **Anterior pituitary:** **thyroid-stimulating hormone (TSH)**.\n- **Thyroid:** **TSH binds receptors on the epithelial cells**, **stimulating synthesis and secretion**.\n\n**The molecule:** the thyroid hormones are **two tyrosines linked together**, with **iodine added at three or four positions on the aromatic rings**.\n\n### Biosynthesis — four steps\n|Step|What happens|\n|---|---|\n|**1 Iodine trapping**|**plasma iodide → iodide** taken into the cell|\n|**2 Organification**|**oxidation to active iodine**, then **iodination of tyrosine** → **mono- and di-iodotyrosine (MIT + DIT)**|\n|**3 Coupling**|MIT and DIT combine → **tri- and tetra-iodothyronine (T3 & T4)**|\n|**4 Storage and release**|stored in colloid, then **T4 and T3 released**|\n\n### Release of stored hormone — four steps\n- **Endocytosis of thyroglobulin.**\n- **Fusion of the endosome with a lysosome.**\n- **Proteolysis of thyroglobulin.**\n- **Diffusion of free thyroid hormones into the blood.**\n\n### What is secreted, and what is active\n- **Secreted:** **a large majority of what the gland releases is T4**.\n- **Active:** **T3 is the considerably MORE active hormone**.\n- **Where T3 comes from:** **some is secreted, but the bulk is derived by deiodination of T4 in peripheral tissues, especially liver and kidney**.\n- **Reverse T3:** deiodination of T4 also yields **reverse T3, a molecule with NO known metabolic activity**.\n\n*Each of the four biosynthetic steps has its own inherited defect — the dyshormonogenesis list in endo-25 is this table read as a set of diseases.*\n\nSrc: L52 pp.8–12",
        "qs": []
      },
      {
        "id": "endo-23",
        "w": "must",
        "h": "Cretinism — the untreated child",
        "body": "**Cretinism:** the deck’s own heading is **“mentally retarded dwarf”** — **mental retardation** with **short stature with infantile proportions** and **developmental delay**.\n\n### The characteristic features\n- **Face:** **coarse facial features** · **puffy eyes** · **hypertelorism** · **flat base of the nose** · **infantile nasolabial configuration**.\n- **Head:** **disproportionately large** · **delayed closure of the fontanels** · **low anterior hair line**.\n- **Hair:** **dry and brittle**.\n- **Mouth:** **large protruded tongue**.\n- **Neck:** **short, with redundant folds**.\n- **Radiology:** **absent lower femoral and upper tibial epiphyses** — printed as a knee radiograph.\n\n### The missed case, as the deck presents it\n- **Short with infantile proportions** · **large tongue** · **hoarse cry** · **umbilical hernia**.\n- **Mental deficiency if not treated early.**\n- **⚠️ But the physical stigmata REVERSE with treatment** — the mental deficit does not.\n\n**Endemic goitrous hypothyroidism:** the same picture arising from **iodine deficiency**, illustrated with adult goitres.\n\n*Short stature, bone age and the growth chart as subjects are `growth-puberty`’s — gp-2, gp-7, gp-8. Kept here only as features of this disease.*\n\nSrc: L52 pp.13–14, 21–24, 31–33 (the radiograph and the photographs are plates; the caption extracts)",
        "qs": []
      },
      {
        "id": "endo-24",
        "w": "must",
        "h": "The newborn — why the diagnosis is missed, and the early signs",
        "body": "### Why it is missed\n- **Mostly ASYMPTOMATIC.** **Affected infants often appear normal at birth.**\n- **If symptomatic, mostly non-specific.**\n- **So:** **the neonatal screen is essential**, and clinically a **high index of suspicion** for the early signs.\n\n### Early signs in the newborn\n|Systemic|Physical|\n|---|---|\n|**Hypothermia**|**large at birth**|\n|**Sluggish and sleepy**|**wide fontanels**; **posterior fontanel > 0.5 cm**|\n|**Feeding difficulty**|**umbilical hernia**|\n|**Respiratory difficulty**|**large tongue**|\n|**Mottling of the skin and cold extremities**|**goiter may be present**|\n|**Constipation**; **hypotonia**|**prolonged physiologic jaundice**|\n\n### Two real records the deck prints as plates\n- **A six-month infant:** **length 56 cm**, **weight 7 kg**, **TSH 74 mU/mL**, **T4 1.6 µg/dL**, **delayed bone age**, with an **umbilical hernia**.\n- **A laboratory slip:** **T4 0.71 µg/mL (normal 7.2–14.4)** with **TSH more than 150 mIU/mL (normal 1.7–9.1)**.\n\n*Prolonged jaundice and umbilical hernia as newborn problems belong to `neonatal`; kept here as signs of this disease.*\n\nSrc: L52 pp.17, 20, 25–26 (pp.17 and 20 image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "endo-25",
        "w": "must",
        "h": "Congenital hypothyroidism — non-goitrous versus goitrous",
        "body": "**The first branch:** **hypothyroidism → non-goitrous or goitrous**. **Whether the child has a goitre tells you which mechanism failed.**\n\n### Non-goitrous — the gland is absent, small or misplaced\n- **95 % developmental defect:** **hypoplasia** · **aplasia or athyrosis** · **ectopia (often hypoplastic)**.\n- **5 % other causes:** **TRH deficiency** · **TSH deficiency** · **TSH unresponsiveness** · **anti-thyroid immunity**.\n\n### Goitrous — the gland is present and being driven\n- **Dyshormonogenesis:** **trapping defect** · **organification defect** · **coupling defect** · **deiodination defect** · **thyroglobulin synthesis defect**.\n- **Iodine deficiency:** **endemic goitrous hypothyroidism**.\n- **Maternal goitrogenic drugs:** **iodides** · **amiodarone** · **antithyroid drugs**.\n\n### The two discriminations the deck examines itself on\n- **Commonest cause in an infant:** **agenesis of the thyroid gland**.\n- **A goitre CAN be found in:** **endemic goitrous hypothyroidism** · **inborn error of thyroxin synthesis** · **maternal drugs containing iodides**.\n- **A goitre is NOT found in:** **agenesis of the gland** · **thyrotropin (TSH) deficiency**.\n\n*The five dyshormonogenetic defects map one-to-one onto the four biosynthetic steps in endo-22.*\n\nSrc: L52 pp.27–29, 54–55",
        "qs": []
      },
      {
        "id": "endo-26",
        "w": "must",
        "h": "Neonatal screening — why it exists",
        "body": "- **Congenital hypothyroidism is the commonest cause of PREVENTABLE mental retardation.**\n- **Treatment has to be early** to obtain **normal mental and physical development**.\n- **Affected infants often appear normal at birth.**\n- **Signs and symptoms in the newborn and young infant are minimal and non-specific**; the **classic signs appear gradually over 3–6 months**.\n- **Only 5–10 % of cases can be diagnosed in the first month without screening**; **before neonatal screening, less than 5 % were diagnosed in the neonatal period**.\n- **⚠️ Delay of diagnosis and treatment beyond the first 1–3 months of life results in IRREVERSIBLE neurological deficits.**\n- **Missed cases will be mentally retarded dwarfs.**\n\n### What screening buys, and what it does not\n- **Buys:** the **best chance for normal or near normal intellectual development**.\n- **Does not buy certainty:** **6–12 % false negative due to laboratory errors**.\n- **⚠️ So physicians should CONTINUE looking for signs and symptoms** suggestive of congenital hypothyroidism.\n\n*Intellectual disability as a subject belongs to `normal-dev`; kept here only as the outcome this programme prevents.*\n\nSrc: L52 pp.30, 34–35",
        "qs": []
      },
      {
        "id": "endo-27",
        "w": "must",
        "h": "Neonatal screening — how it is done in Egypt",
        "body": "- **Who:** **all newborns**.\n- **When:** **the 3rd–7th day after birth**.\n- **Sample:** **blood specimens by heel stick**.\n- **Handling:** **adsorbed onto filter paper**, then **air dried**.\n- **Assay:** **analyzed in a central laboratory for TSH**.\n- **Result:** **abnormal results reported to the parents and to the treatment centre**.\n\n*Egypt screens on TSH; some countries use a T4 screen instead.*\n\n*⚠️ Not cord blood, and not day 1–3 — the deck sets its own MCQ on exactly this.*\n\nSrc: L52 pp.36, 48",
        "qs": []
      },
      {
        "id": "endo-28",
        "w": "must",
        "h": "Treatment of congenital hypothyroidism",
        "body": "### Objectives\n- **Ensure normal growth and development.**\n- **Maintain the serum total T4 in the UPPER HALF of the normal range — 10 to 16 µg/dL.**\n- **With the serum TSH suppressed into the normal range.**\n\n*The deck gives the TSH target twice and differently: p.37 says \"usually below 10 mU/L\", p.38 \"usually below 5 mU/L\". Both as printed.*\n\n### What to give, and how much\n- **L-thyroxine TABLETS only** — **no liquid formulation**.\n\n|Age|Initial dose|\n|---|---|\n|**Newborn and young infant**|**10–15 µg/kg/day**|\n|**Infants 6–12 months**|**6–8 µg/kg/day**|\n|**1–5 years**|**5 µg/kg/day**|\n|**Older children**|**4 µg/kg/day**|\n|**Adults**|**2 µg/kg/day**|\n\n### How to give it\n- **Crush the tablet daily**, **mix with a few mL of water, breast milk or formula**, and feed it to the infant.\n- **⚠️ Do NOT give it with iron or soy protein formula** — they **bind T4 and inhibit absorption**.\n\n### For how long\n- **Most cases are permanent** and **require treatment for life**; **some are transient**.\n- **⚠️ Delay any test for permanency until after 3 years of age.**\n\n**What adequate treatment looks like on paper:** **T4 in the upper normal value for age**, with a **low but DETECTABLE TSH** — not an undetectable one.\n\nSrc: L52 pp.37–40, 47",
        "qs": []
      },
      {
        "id": "endo-29",
        "w": "high",
        "h": "Follow-up, and proving the disease is permanent",
        "body": "### Follow-up\n- **Periodic follow up of growth and development.**\n- **Follow up of total T4 and TSH**, on this schedule:\n\n|When|Interval|\n|---|---|\n|**After starting L-thyroxine**|**at 2 and 4 weeks**|\n|**First year of life**|**every 1 month**|\n|**Between 1 and 3 years**|**every 2 months**|\n|**Thereafter until growth is completed**|**every 3 months**|\n|**Compliance questioned, or abnormal values**|**more frequently**|\n\n### Permanence can be ASSUMED if\n- **The thyroid uptake and/or scan reveals an ectopic gland or absent thyroid tissue.**\n- **The serum TSH is seen to increase above 20 mU/L after the first year of life** — presumably because of **insufficient T4 replacement**.\n\n### When permanence is NOT established — the withdrawal trial\n- **Discontinue L-thyroxine for 30 days**, at some point **after the child is 3 years of age**.\n- **Then measure T4 and TSH.**\n- **If T4 is low and TSH elevated:** **permanent hypothyroidism is confirmed** and **therapy is reinstituted**.\n\nSrc: L52 pp.41–43",
        "qs": []
      },
      {
        "id": "endo-30",
        "w": "high",
        "h": "Acquired hypothyroidism in the older child",
        "body": "**The gap:** the deck teaches CONGENITAL hypothyroidism end to end and never leaves the neonate. What follows is supplied *(not in course material)*.\n\n- **Commonest cause:** **autoimmune (Hashimoto) thyroiditis**, in **older children and adolescents**, **commoner in girls**.\n- **Associations:** **type 1 diabetes**, **Down syndrome**, **Turner syndrome**, **coeliac disease**.\n- **Presentation:** a **firm, non-tender goitre**, **growth deceleration WITH weight gain**, **delayed bone age**, **constipation, cold intolerance, dry skin, lethargy**, **delayed puberty**.\n- **Diagnosis:** **TSH high, free T4 low**, with **anti-TPO and anti-thyroglobulin antibodies**.\n- **Treatment:** **L-thyroxine**, as in endo-28.\n\n### Congenital versus acquired\n|Feature|Congenital|Acquired (Hashimoto)|\n|---|---|---|\n|**Age**|**newborn**|**older child, adolescent**|\n|**Found by**|**neonatal screen**|**goitre or growth failure**|\n|**Risk if missed**|**irreversible mental retardation**|**growth loss, reversible**|\n\n*Two sourced anchors from other chapters: acquired hypothyroidism is the **commonest ENDOCRINE cause of short stature** (`growth-puberty` gp-7), and the **obese-and-SHORT** child is endocrine where the obese-and-tall child is nutritional (gp-4). Every child with T1DM is screened for it 2-yearly — endo-7.*\n\nSrc: the disease is supplied and tagged; the short-stature and obesity anchors are `growth-puberty`’s (L13), cited only, not counted",
        "qs": []
      },
      {
        "id": "endo-31",
        "w": "must",
        "h": "Graves disease",
        "body": "- **The commonest cause of hyperthyroidism in children.**\n- **Less common in children than in adults.**\n- **Can present with non-specific symptoms.**\n- **The mechanism:** **autoimmune thyroiditis secondary to the production of thyroid-stimulating immunoglobulins (TSIs)**.\n\n### Clinical manifestations\n|Group|Features|\n|---|---|\n|**Systemic**|**anxiety, restlessness** · **increased appetite** · **sweating** · **diarrhoea** · **weight loss** · **rapid growth in height** · **advanced bone maturity** · **tremor** · **tachycardia, wide pulse pressure** · **warm, vasodilated peripheries** · **goitre (bruit)**|\n|**Neuropsychiatric**|**learning difficulties / behaviour problems** · **psychosis**|\n|**Eye signs** (uncommon in children)|**exophthalmos** · **ophthalmoplegia** · **lid retraction** · **lid lag**|\n\n### Investigations\n- **Thyroid ultrasound.**\n- **Radioiodine scan:** images at **24 hours after ingestion of iodine-123**; the **Graves thyroid is LARGER and concentrates a HIGHER fraction of radioiodine** than a normal gland.\n- **Thyroid function tests** — but see the note below.\n\n*⚠️ L52 p.59’s TFT panel prints **T4 ↓, T3 ↓, TSH ↓↓** — read at 400 dpi to be sure. Its own case on p.61 gives **T4 > 30 µg/dL** and **T3 > 400 ng/mL** against normal ranges of 4.7–13.5 and 80–200, with **TSH 0.04**. Recorded as printed; the case is the one to learn from.*\n\n### The case the deck builds it on\n- **A 9-year-old girl:** **palpitations, loose stools, 1 kg weight loss despite a good appetite, irritability**.\n- **On examination:** **anxious**, **pulse 130/min**, **BP 110/55 mmHg**, a **diffusely and symmetrically enlarged, firm, non-tender thyroid with an audible bruit**.\n- **Eyes:** **thyroid stare**, **eyelid lag**, **mild proptosis**.\n\n### Treatment\n- **Medical:** **antithyroid drugs** and **beta blockers**.\n- **Definitive:** **radioiodine**, or **surgery**.\n\n*No agent is named on the slide: in practice the antithyroid drug is **carbimazole or methimazole**, with **propylthiouracil** reserved because of hepatotoxicity, and the feared decompensation is **thyroid storm** (not in course material).*\n\nSrc: L52 pp.57–61 (the TFT panel image-only, recovered by render); the drug names and thyroid storm are supplied and tagged",
        "qs": []
      },
      {
        "id": "endo-32",
        "w": "high",
        "h": "Congenital and neonatal thyrotoxicosis",
        "body": "**The mechanism, in one line:** **maternal Graves disease (autoimmune thyroiditis)** → **transplacental passage of thyroid stimulating antibodies to the fetus** → **fetal and neonatal hyperthyroidism**.\n\n### What the baby shows\n- **Goiter.**\n- **IUGR.**\n- **Tachycardia.**\n\n### Course\n- **Transient — within a few months after birth**, as the maternal antibody clears.\n- **⚠️ But it may produce significant morbidity and may be FATAL** — transient is not the same as harmless.\n\n*The deck writes it \"Congenital thyrotoxicosis\" on one line and \"Fetal/Neonatal Thyrotoxicosis\" on the next; they are the same entity seen before and after delivery.*\n\nSrc: L52 pp.63–64",
        "qs": []
      },
      {
        "id": "endo-33",
        "w": "high",
        "h": "Congenital adrenal hyperplasia",
        "body": "**The gap:** CAH is named as a cause in three paediatric decks and taught in none. What follows is supplied *(not in course material)*, except the ACTH test, which is printed.\n\n- **Inheritance:** **autosomal recessive**.\n- **The enzyme:** **21-hydroxylase deficiency in more than 90 %**.\n- **The mechanism:** **cortisol (± aldosterone) cannot be made** → **loss of negative feedback** → **ACTH rises** → **adrenal hyperplasia** and **shunting of precursors into ANDROGENS**.\n\n### How it presents\n- **Girls:** **ambiguous genitalia at birth** — virilization in utero.\n- **Boys:** **normal genitalia**, so nothing is noticed until they collapse.\n- **Salt-losing crisis, at 1–3 weeks:** **vomiting, weight loss, dehydration, shock**, with **hyponatraemia, hyperkalaemia, metabolic acidosis and hypoglycaemia**.\n- **Simple virilizing form:** **precocious pseudopuberty**, and the **tall child who becomes a short adult** through early epiphyseal fusion.\n\n### Diagnosis and treatment\n- **Screening biochemistry:** **17-hydroxyprogesterone raised**.\n- **Confirmation:** **the ACTH stimulation test, to exclude CAH** — printed in `14) Puberty`.\n- **Replace:** **hydrocortisone**, plus **fludrocortisone and salt** in salt-losers.\n- **⚠️ Stress dosing:** the **hydrocortisone dose must be increased during illness, injury or surgery**.\n\n*Late-treated virilizing CAH is one of the listed causes of central precocious puberty, and CAH appears in the peripheral-precocious-puberty lists for both sexes — both written in `growth-puberty`, gp-17 and gp-18.*\n\nSrc: the ACTH stimulation test is `14) Puberty`’s (cited only, not counted); the disease is supplied and tagged",
        "qs": []
      },
      {
        "id": "endo-34",
        "w": "high",
        "h": "Cushing syndrome in childhood",
        "body": "**The gap:** `cushing` returns exactly two hits across all 64 decks and both are one-word entries in a cause list. What follows is supplied *(not in course material)*.\n\n### Causes\n- **Commonest by far:** **exogenous glucocorticoid therapy** — oral, and sometimes high-dose inhaled or topical.\n- **Cushing DISEASE:** a **pituitary ACTH-secreting adenoma** — the commonest endogenous cause in children over 5.\n- **Adrenal:** **adenoma or carcinoma** — commoner in the under-5s.\n- **Ectopic ACTH:** rare in children.\n\n### The paediatric hallmark\n- **⚠️ Growth failure WITH weight gain** — the child is **obese and SHORT**.\n- **That is the discrimination that matters:** **nutritional obesity makes a child obese and TALL** (`growth-puberty` gp-4).\n\n### Other features\n- **Face and trunk:** **moon face** · **buffalo hump** · **central obesity** · **purple striae**.\n- **Skin and hair:** **easy bruising**, **hirsutism**, **acne**.\n- **Systemic:** **hypertension** · **glucose intolerance or frank diabetes** · **osteopenia** · **proximal myopathy**.\n\n### Investigation, in order\n- **Screen:** **24-hour urinary free cortisol**, **late-night salivary cortisol**, or an **overnight low-dose dexamethasone suppression test** — all looking for **loss of the diurnal rhythm**.\n- **Then localise:** **plasma ACTH** separates **ACTH-dependent** from **ACTH-independent** disease, followed by **pituitary or adrenal imaging**.\n\n*Sourced anchors elsewhere: Cushing is listed among the **endocrine causes of short stature** (`growth-puberty` gp-5, gp-10) and among the **endocrine causes of secondary diabetes** (endo-1, DM p.2).*\n\nSrc: named in `13) Short stature` and DM p.2 as a cause only; the disease is supplied and tagged",
        "qs": []
      }
    ]
  },
  "neonatal": {
    "intro": "Jaundice in the term newborn — the commonest reason one is readmitted. Physiological against pathological, the nomograms and the five neurotoxicity risk factors that decide which one applies, phototherapy and exchange transfusion, and kernicterus at the end of it.",
    "sections": [
      {
        "id": "nnj-1",
        "w": "must",
        "h": "Neonatal jaundice — the numbers, and where bilirubin comes from",
        "body": "### How common, and how dangerous\n- **Visible jaundice:** **65 % of newborns**, with a **total serum bilirubin (TSB) above 6 mg/dL** in the first week.\n- **Excessive hyperbilirubinaemia:** **8–10 %** of newborns.\n- **Extreme TSB:** rare, but causes **kernicterus** — **injury to the basal ganglia and brainstem**.\n\n### Bilirubin metabolism\n- **Source:** breakdown of **haem (iron protoporphyrin)** in the **RES and bone marrow**.\n- **Haem oxygenase cleaves it to three:** **iron** (conserved) · **carbon monoxide** (exhaled) · **biliverdin**.\n- **Biliverdin → bilirubin:** by **bilirubin reductase**.\n- **Transport:** unconjugated bilirubin **bound to albumin**, taken up by hepatocytes.\n- **Conjugation:** **uridyl diphosphoglucuronyl transferase (UDPGT, glucuronyl transferase)** attaches **one or two glucuronide molecules**.\n- **Excretion:** into **bile → intestine**, metabolised by **normal gut flora**, passed in stool.\n\n### Why the newborn re-absorbs it — the enterohepatic circulation\n- **Two newborn defects:** **absent gut flora** and **slow GI motility**.\n- **Consequence:** conjugated bilirubin **stagnates in the lumen**.\n- **The enzyme that undoes it:** mucosal **β-glucuronidase** strips the glucuronide off.\n- **Result:** **unconjugated bilirubin is reabsorbed** — the **enterohepatic circulation**.\n\nSrc: L8 pp.2–4",
        "qs": []
      },
      {
        "id": "nnj-2",
        "w": "must",
        "h": "Unconjugated or conjugated — the first fork",
        "body": "- **What sets the level:** the **balance of the rate of production against the rate of excretion**.\n- **⚠️ How it is judged:** an **HOUR-SPECIFIC TSB** against a standard curve of **TSB by age in hours** — never a single number.\n- **Fractionate it:** serum bilirubin splits into an **unconjugated** and a **conjugated** component.\n\n### Which one, and what it means\n- **Unconjugated:** **most neonatal jaundice presenting in the first week**.\n- **Conjugated:** **congenital infections · intrahepatic cholestasis · extrahepatic biliary obstruction**.\n\n*Conjugated hyperbilirubinaemia as a disease — biliary atresia, the infantile cholestasis work-up — is `liver`, from `43)Infantile cholestasis_`.*\n\n**Umbilical hernia** *(not in course material)* **—** a soft, reducible, skin-covered umbilical swelling, common at term and commoner in **prematurity, hypothyroidism and Down syndrome**; **most close by 3–4 years**, and surgery is for persistence, a large defect or incarceration.\n\nSrc: L8 p.5; the umbilical hernia entry supplied and tagged, deferred here by `endocrine`",
        "qs": []
      },
      {
        "id": "nnj-3",
        "w": "must",
        "h": "Physiologic jaundice — four criteria, and the line that makes it pathologic",
        "body": "### The four defining features\n- **Timing of onset:** visible jaundice appearing **AFTER 24 hours of age**.\n- **Rate of rise:** total bilirubin rises by **less than 5 mg/dL (86 µmol/L) per day**.\n- **Peak:** at **3–5 days of age**, and **no higher than 15 mg/dL (258 µmol/L)**.\n- **Resolution:** by **1 week in the full-term** infant, **2 weeks in the preterm**.\n\n### The five factors that produce it\n- **Low UDPGT activity** · **relatively high red cell mass** · **absence of intestinal flora** · **slow intestinal motility** · **increased enterohepatic circulation** in the first days.\n\n### ⚠️ The exclusion that matters most\n**Before 24 hours:** **visible jaundice with a TSB above 5 mg/dL** is **most commonly significant haemolysis** — never physiologic.\n\nSrc: L8 pp.6–7",
        "qs": []
      },
      {
        "id": "nnj-4",
        "w": "must",
        "h": "Pathologic unconjugated hyperbilirubinaemia — the causes tree",
        "body": "Two branches only: **overproduction of bilirubin**, or **decreased conjugation**.\n\n### Overproduction — and the reticulocyte count separates the two halves\n\n|Group|Reticulocytes|Coombs (DAT)|Causes|\n|---|---|---|---|\n|**Immune haemolysis**|**Elevated**|**POSITIVE**|**ABO incompatibility · Rh incompatibility · minor blood group antigen incompatibility**|\n|**Non-immune haemolysis**|**Elevated**|**NEGATIVE**|**Abnormal red cell shapes** — spherocytosis, elliptocytosis, pyknocytosis, stomatocytosis · **red cell enzyme defects** — G6PD, pyruvate kinase, hexokinase · **metabolic defects**|\n|**Non-haemolytic**|**NORMAL**|—|**Extravascular haemorrhage** — cephalhaematoma, extensive bruising, intracranial haemorrhage · **polycythaemia** · **exaggerated enterohepatic circulation** — bowel obstruction, functional ileus · **breastfeeding-associated jaundice**|\n\n### Decreased rate of conjugation\n- **Crigler–Najjar type I:** **complete** glucuronyl transferase deficiency, **autosomal recessive**. Rare, severe.\n- **Crigler–Najjar type II:** **partial** deficiency, **autosomal dominant**.\n- **Gilbert syndrome:** **common, milder**.\n- **Hypothyroidism.**\n\n*Cephalhaematoma as a birth injury, with its own differential, is nns-12; congenital hypothyroidism is `endocrine`.*\n\nSrc: L8 pp.7–9",
        "qs": []
      },
      {
        "id": "nnj-5",
        "w": "must",
        "h": "ABO incompatibility and Rh isoimmunisation",
        "body": "### ABO incompatibility\n- **Who:** **any pregnancy in a type O mother**.\n- **Severity:** usually **mild**, but **UNPREDICTABLE** — maternal **anti-A / anti-B IgG** varies.\n- **The numbers:** **15 % of pregnancies are \"setups\"** (mother O, infant A or B); **33 %** of those are **Coombs-positive**; **under 10 %** of those need therapy.\n- **⚠️ The late trap:** maternal antibody **persists for months**, so the infant may grow **progressively anaemic over the first few weeks**, sometimes needing transfusion.\n\n### Rh isoimmunisation\n- **Character:** **less common, MORE severe, MORE predictable** than ABO.\n- **⚠️ It worsens each time:** severity **increases with each immunised pregnancy**.\n- **Prevention:** **high-titre Rho(D) immune globulin** to the Rh-negative woman after **invasive procedures, miscarriage, abortion, or delivery of an Rh-positive infant**.\n- **At birth:** often **already anaemic**; continued haemolysis gives **hyperbilirubinaemia and worsening anaemia**.\n\n### Erythroblastosis fetalis — the severe end\n- **Triad:** **life-threatening anaemia · generalised oedema · fetal or neonatal heart failure**.\n- **Untreated:** fetal or neonatal **death often results**.\n- **Antenatal cornerstone:** **transfuse the FETUS with Rh-NEGATIVE cells**, into the **umbilical vein** or the **fetal abdominal cavity**.\n- **At delivery:** **phototherapy from birth**, **exchange transfusion frequently needed**.\n- **IVIG** as soon as the diagnosis is made **may reduce the need for exchange** (L8 states no dose).\n- **⚠️ Follow-up:** haemolysis runs until all maternal antibody is gone — **monitor 2–3 months for recurrent anaemia**.\n\n|Feature|ABO|Rh|\n|---|---|---|\n|**Frequency**|**Commoner**|**Less common**|\n|**Severity**|**Usually mild**|**More severe**|\n|**Predictability**|**Unpredictable**|**Predictable**|\n|**Effect of successive pregnancies**|**No trend**|**Worsens each time**|\n|**Preventable antenatally**|**No**|**YES — anti-D**|\n\nSrc: L8 pp.10–11",
        "qs": []
      },
      {
        "id": "nnj-6",
        "w": "must",
        "h": "Hereditary spherocytosis and G6PD deficiency",
        "body": "### Hereditary spherocytosis\n- **Rank:** the **commonest red cell MEMBRANE defect**.\n- **Mechanism:** haemolysis by **decreasing red cell deformability**.\n- **In the newborn:** hyperbilirubinaemia may be **severe enough to need exchange transfusion**.\n- **Sign:** **splenomegaly may be present**.\n- **Diagnosis:** suspected on the **peripheral blood smear** and the **family history**.\n\n### G6PD deficiency\n- **Rank:** the **commonest red cell ENZYME defect causing haemolysis**.\n- **Who:** infants of **African, Mediterranean or Asian descent**.\n- **⚠️ X-linked, but girls are still at risk:** **female heterozygotes** are affected through **X-chromosome inactivation**.\n- **Two mechanisms at once:** increased bilirubin **production**, exaggerated by a **decreased rate of conjugation**.\n- **⚠️ THE TESTING TRAP:** **G6PD activity is HIGH IN RETICULOCYTES**, so a reticulocytosis gives a **falsely normal enzyme test**.\n- **So:** **a low level always raises suspicion**, and a suspect case with a normal result is **retested at 3 months**.\n\n*Both as haematological diseases outside the newborn are `haematology`; the causes tree there names them and points here.*\n\nSrc: L8 pp.12–13",
        "qs": []
      },
      {
        "id": "nnj-7",
        "w": "must",
        "h": "Non-haemolytic overproduction, and the conjugation defects",
        "body": "### Non-haemolytic increased production\n- **Enclosed haemorrhage:** **cephalhaematoma · intracranial haemorrhage · extensive skin bruising**.\n- **Polycythaemia:** increased red cell mass, so **more cells reach senescence each day**.\n- **Bowel obstruction:** functional or mechanical, raising the **enterohepatic circulation**.\n\n### Crigler–Najjar syndrome\n- **Defect:** **UDPGT gene mutations** giving **complete or nearly complete absence of enzyme activity**.\n- **Type I:** complete deficiency, **autosomal recessive**. **Type II:** partial, **autosomal dominant**.\n- **Untreated:** **severe unconjugated hyperbilirubinaemia, encephalopathy, death**.\n- **⚠️ Type II is inducible:** **phenobarbital lowers bilirubin by 30–80 %**. Type I is not.\n- **Cure:** **liver transplantation**.\n\n### Gilbert syndrome\n- **Nature:** **common, mild, autosomal dominant**.\n- **Defect:** low hepatic UDPGT activity from a **polymorphism at the PROMOTER region** — not the coding sequence.\n- **Prevalence:** **~9 % homozygous, 42 % heterozygous**.\n- **Behaviour:** jaundice **whenever the bilirubin load rises**; more **prolonged neonatal and breast-milk jaundice**.\n\nSrc: L8 pp.14–16",
        "qs": []
      },
      {
        "id": "nnj-8",
        "w": "must",
        "h": "Race, prematurity, and the two breastfeeding jaundices",
        "body": "### Unknown or multiple factors\n- **Race:** peak TSB above **12 mg/dL (206 µmol/L)** in **Asians 23 % · whites 10–13 % · African Americans 4 %** — probably **UDPGT polymorphism or G6PD deficiency**.\n- **Prematurity:** **poor enteral intake, delayed stooling, increased enterohepatic circulation, shorter red cell life**.\n- **⚠️ The late-preterm number:** at **35–36 weeks, 13 TIMES more likely than term** to be **readmitted for hyperbilirubinaemia**.\n\n### Breast-FEEDING-associated jaundice — \"lack of breast milk\" jaundice\n- **Incidence:** **9 % of breastfed** infants against **2 % of formula-fed**.\n- **Mechanism:** **poor intake and increased enterohepatic circulation** — a feeding failure, not a milk problem.\n- **⚠️ Read it as a warning:** excessive jaundice **may mean the milk supply is not established**.\n- **Assessing feeding:** monitor **weight, urine output and stool output**.\n- **Management:** **supplemental formula · nurse more often · electric pump every 2 hours · lactation specialist**.\n- **⚠️ Why follow-up exists:** discharge precedes **both the milk supply and the jaundice peak** — AAP advises a **visit 2 days after discharge**.\n\n### Breast-MILK jaundice\n- **Duration:** unconjugated hyperbilirubinaemia **to 2–3 months**, common in breastfed infants.\n- **The diagnostic picture:** **moderate unconjugated hyperbilirubinaemia for 6–12 weeks in a THRIVING breastfed infant**, with **no haemolysis, hypothyroidism or other disease**.\n\n|Feature|Breast-FEEDING jaundice|Breast-MILK jaundice|\n|---|---|---|\n|**Cause**|**Not enough milk taken**|**A property of the milk**|\n|**Timing**|**First week**|**Persists 6–12 weeks, up to 2–3 months**|\n|**Weight**|**Poor gain, excess loss**|**THRIVING**|\n|**Action**|**Feed more, supplement, pump**|**Exclude haemolysis and hypothyroidism, then reassure**|\n\nSrc: L8 pp.17–19",
        "qs": []
      },
      {
        "id": "nnj-9",
        "w": "must",
        "h": "Bilirubin toxicity — what decides whether the brain is hurt",
        "body": "- **The toxic agent:** the **unconjugated bilirubin ANION**, not total bilirubin.\n- **⚠️ No proven cut-off:** it is **unknown whether a fixed level exists above which damage always occurs**.\n- **The barrier:** the **blood–brain barrier protects**, but **its integrity cannot be measured clinically**.\n- **The buffer:** **albumin binds unconjugated bilirubin** and is **protective**.\n- **So two things matter:** **how much albumin is free**, and **whether other anions are displacing bilirubin off it**.\n\n### The five risk determinants\n- **Duration** of hyperbilirubinaemia · **serum albumin concentration** · **associated illness** · **acidosis** · **competing anions**.\n- **⚠️ The two named competitors:** **sulfamethoxazole** and **ceftriaxone** — both compete for the albumin binding site.\n- **Baseline risk:** small in a **healthy term neonate even at 25–30 mg/dL (430–516 µmol/L)**.\n\nSrc: L8 p.20",
        "qs": []
      },
      {
        "id": "nnj-10",
        "w": "must",
        "h": "Acute bilirubin encephalopathy and kernicterus",
        "body": "### Acute bilirubin encephalopathy — evolving injury\n- **Early:** **lethargy, poor feeding**.\n- **Then:** **irritability, high-pitched cry**.\n- **Then:** **arching of the neck (retrocollis) and of the trunk (opisthotonos)**.\n- **Late:** **apnoea, seizures, coma**.\n- **⚠️ The earliest sign is the least alarming:** *\"sleepy and not interested in feeding\"* — nonspecific, and still the trigger.\n- **What it triggers:** detailed **birth, postnatal, feeding and elimination history**, urgent assessment for **bilirubin-induced neurologic dysfunction (BIND)**, and **TSB with albumin**.\n- **Most sensitive test of neurotoxicity:** the **auditory brainstem-evoked response**.\n\n### Kernicterus — chronic, and irreversible\n- **Movement:** **extrapyramidal — choreoathetoid cerebral palsy**.\n- **Eyes:** **gaze abnormality, especially limitation of UPWARD gaze**.\n- **Hearing:** deafness; **a failed ABR with NORMAL otoacoustic emissions** — **auditory neuropathy / dyssynchrony**.\n- **Teeth:** **dysplasia of the enamel of the deciduous teeth**.\n- **Diagnosis is CLINICAL.** **MRI is nearly diagnostic** if abnormality is **isolated to the globus pallidus, subthalamic nuclei, or both**.\n\n|Feature|Acute encephalopathy|Kernicterus|\n|---|---|---|\n|**Timing**|**During the hyperbilirubinaemia**|**The permanent sequel**|\n|**Reversible**|**Potentially**|**NO**|\n|**Hallmark**|**Retrocollis and opisthotonos**|**Choreoathetoid CP + deafness**|\n|**Test**|**ABR, TSB, albumin**|**Clinical; MRI globus pallidus / subthalamic nuclei**|\n\n*Kernicterus is also one of L10’s HAM causes of neonatal seizures, and one of `neurological`’s perinatal risk factors for cerebral palsy.*\n\nSrc: L8 pp.21–22",
        "qs": []
      },
      {
        "id": "nnj-11",
        "w": "must",
        "h": "Who is at risk, how the baby is assessed, and the phototherapy thresholds",
        "body": "### The eight risk factors for severe hyperbilirubinaemia\n- **Bilirubin —** a **predischarge TSB or TcB close to the phototherapy threshold**; **jaundice in the first 24 h**.\n- **Haemolysis —** **blood group incompatibility with a positive direct Coombs**, or **G6PD deficiency**.\n- **Gestational age 35–36 weeks** · **a previous sibling who needed phototherapy**.\n- **Cephalhaematoma or significant bruising** · **exclusive breastfeeding with excessive weight loss**.\n- **Jaundice seen before discharge** · **a macrosomic infant of a diabetic mother**.\n\n### Evaluation\n- **History:** **feeding and elimination**; **birth weight and per cent weight change since birth**.\n- **Examination:** for **sources of excessive haem breakdown**.\n- **Always:** **blood type · Coombs · CBC with smear · serum albumin · TSB**.\n- **G6PD:** if jaundice is **otherwise unexplained**, and in **African-American infants with severe jaundice**.\n- **⚠️ FRACTIONATE the bilirubin** if the infant **appears ill**, or has **prolonged jaundice, acholic stool, hepatosplenomegaly or dark urine** — the cholestasis question.\n- **Transcutaneous bilirubin (TcB)** *(not in course material)* **—** a **non-invasive reflectance screen** for who needs a blood TSB; **unreliable once phototherapy has started** and at high levels, so **a value near the threshold is confirmed on serum**.\n- **Cephalocaudal progression** *(not in course material)* **—** jaundice starts at the **face and descends to the palms and soles as TSB rises**, so **the soles are the alarming site**; visual estimation **never replaces measurement**.\n\n### The AAP 2022 phototherapy thresholds\n- **The plot:** **TSB in mg/dL against age in HOURS**, to **336 h (14 days)**, **one curve per gestational week**.\n- **⚠️ Use TSB — do NOT subtract the direct-reacting or conjugated fraction.**\n- **Two charts, and TABLE 2 picks which:** **Figure 2** with **no neurotoxicity risk factors**, **Figure 3** with **one or more**.\n- **Shape:** thresholds **rise with gestational and postnatal age**, and **plateau at about 96 hours (day 4)**.\n\n|Gestation|Plateau, NO risk factors (Fig 2)|Plateau, ONE OR MORE (Fig 3)|\n|---|---|---|\n|**≥ 40 weeks**|**~21.8 mg/dL**|—|\n|**39 weeks**|**~21.5**|—|\n|**38 weeks**|**~20.8**|**~18.3**|\n|**37 weeks**|**~20.1**|**~18.3**|\n|**36 weeks**|**~19.4**|**~17.0**|\n|**35 weeks**|**~18.7**|**~16.1**|\n\n**TABLE 2 — the five hyperbilirubinaemia neurotoxicity risk factors:**\n- **Gestational age under 38 weeks**, worsening with the degree of prematurity.\n- **Albumin below 3.0 g/dL.**\n- **Isoimmune haemolytic disease** (**positive DAT**), **G6PD deficiency**, or other haemolytic conditions.\n- **Sepsis.**\n- **Instability —** **significant clinical instability in the previous 24 hours**.\n\n*Curve values are read off the printed nomograms and are approximate; the charts are the instrument.*\n\nSrc: L8 pp.23–24, 26–28 (pp.26–28 are image-only nomograms recovered by render; attributed on the slide to Kemper, Newman & Slaughter, Pediatrics 2022, AAP). TcB and cephalocaudal progression supplied and tagged",
        "qs": []
      },
      {
        "id": "nnj-12",
        "w": "must",
        "h": "Phototherapy and exchange transfusion",
        "body": "### Phototherapy\n- **Rank:** the **commonest treatment** of unconjugated hyperbilirubinaemia; **non-invasive and safe**.\n- **Expected effect:** **TSB down 30–40 % in the first 24 hours** with intensive phototherapy.\n- **⚠️ Shield the eyes — to prevent retinal damage.**\n- **Elective start:** TSB about **6 mg/dL (102 µmol/L) BELOW that infant’s predicted exchange level**.\n- **Tool:** the AAP thresholds for **≥ 35 weeks** are in **BiliTool**.\n- **Feed by mouth** where possible, **to cut the enterohepatic circulation**.\n- **Where:** the **mother’s room**, or a room she can stay in with the infant.\n\n### Exchange transfusion — escalation\n- **⚠️ The trigger:** a bilirubin **within 2 mg/dL of the double-volume exchange threshold** demands **rapid escalation**.\n- **Where:** a **NICU that can perform exchange**, before irreversible neurologic damage.\n- **Meanwhile:** **intensive phototherapy immediately, during transport if possible**.\n\n### Exchange transfusion — the procedure\n- **Volume:** **double volume ≈ 160–200 mL/kg body weight**.\n- **Typical indication:** extreme hyperbilirubinaemia from **Rh isoimmunisation, ABO incompatibility or hereditary spherocytosis**.\n- **What it achieves:** **TSB down ~50 %**, **~80 % of sensitised cells and offending antibody removed**, so haemolysis falls.\n- **Three other indications:** **TSB above 30 mg/dL** · **signs of encephalopathy** · **TSB not down 0.5 mg/dL/h after 4 hours of intensive phototherapy**.\n- **⚠️ Decide on TSB —** **NOT on the unconjugated fraction**.\n\n### Complications\n- **Mortality 1–5 %**, worst in the **smallest, most immature, unstable** infants; do it at a **referral centre**.\n- **⚠️ Sudden death —** it **can occur during the procedure in ANY infant**.\n- **Serious complications 5–10 %:** **necrotizing enterocolitis · infection · electrolyte disturbance · thrombocytopenia**.\n\nSrc: L8 pp.25, 28–31",
        "qs": []
      }
    ]
  },
  "neonatal-seiz": {
    "intro": "Seizures, hypoglycaemia and birth injury in the term newborn. Why the newborn brain seizes differently, the eight benign movements it is mistaken for, the treatment algorithm with its doses, and the scalp swellings and nerve palsies of delivery.",
    "sections": [
      {
        "id": "nns-1",
        "w": "must",
        "h": "Neonatal seizures — two definitions, three categories, and the incidence",
        "body": "### The clinical definition\nA **paroxysmal alteration in neurologic function** — **motor, behavioural and/or autonomic** — indicating **neurological damage or a severe illness needing urgent treatment**.\n\n### The electrographic definition\nA pattern of **sudden, repetitive, evolving stereotyped waveform with a beginning and an end**, **duration usually over 10 seconds**.\n\n### The three categories, and why they exist\n- **Epileptic:** clinical phenomena **WITH** an EEG correlate — e.g. **clonic**.\n- **Non-epileptic:** clinical seizures **WITHOUT** an EEG correlate — e.g. **subtle**, **generalised tonic**.\n- **EEG seizures:** **abnormal EEG activity with no clinical correlate**.\n\n### Incidence\n- **Overall:** **1.5–5.5 per 1,000 live births** (National Neonatal Perinatal Database, 2002–03).\n- **⚠️ It rises as gestation and weight fall.**\n- **Preterm against term:** **20.8 against 8.4 per 1,000** — almost double.\n- **Very low birth weight:** **36.1 per 1,000** — more than four-fold.\n\nSrc: L10 pp.2–3, 20",
        "qs": []
      },
      {
        "id": "nns-2",
        "w": "high",
        "h": "Why the newborn brain seizes, and why so much of it is invisible",
        "body": "### The excitation–inhibition imbalance\n\n|Increased excitatory|Decreased inhibitory|\n|---|---|\n|**Overabundance of synaptic connections**|**GABA synapses form BEFORE glutamatergic synapses**|\n|**Overexpression of glutamatergic receptors**|**Lack of a developed inhibitory network**|\n|**Altered composition of NMDA and AMPA receptors**|**Immature astrocyte**|\n|**Excitatory nature of GABA**|**Gap junctions are prevalent and facilitate seizure spread**|\n\n- **⚠️ GABA is EXCITATORY in the newborn brain**, which is why the adult logic of inhibition does not transfer.\n\n### Why the seizure may not be seen\n**The rule:** **seizures produce abnormal MOVEMENTS only if the discharge reaches the MOTOR CORTEX**. A discharge confined elsewhere gives nothing to watch — the mechanism behind the electrographic-only rule in nns-7.\n\nSrc: L10 pp.4–5 (both image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "nns-3",
        "w": "must",
        "h": "Aetiology — HAM, the six injury groups, and what the cause predicts",
        "body": "### HAM — the deck’s own aetiology list\n- **Hypoxic-ischaemic encephalopathy — 40 %** — and **stroke**.\n- **Intracranial haemorrhage.**\n- **Kernicterus / hyperbilirubinaemia.**\n- **Meningitis, encephalitis and septicaemia.**\n- **Metabolic:** **hypocalcaemia and hypoglycaemia**.\n- **Also:** **IEM · brain anomalies · abstinence syndrome · pyridoxine deficiency · genetic and epileptic syndromes**.\n\n### The six major causes of neonatal brain injury\n- **HIE / neonatal encephalopathy:** **commonest acute symptomatic cause at term**; onset **in the first 12–24 hours**; eligible infants **benefit from therapeutic hypothermia**.\n- **IVH / white matter injury:** **preterm ≤ 32 weeks or VLBW** — **germinal matrix fragility**, ventricular bleeding, **posthaemorrhagic ventricular dilatation**.\n- **Perinatal stroke:** often **focal clonic**; suspect it when seizures are **lateralized** or imaging is **unilateral**.\n- **Infection:** meningitis, encephalitis and sepsis, which **also worsen the brain injury**.\n- **Metabolic:** **always check glucose, calcium, magnesium, sodium**; consider **pyridoxine-dependent** or other IEM when **refractory**.\n- **Structural / genetic:** **malformations, channelopathies, neonatal epilepsies** — when **persistent or unexplained**.\n\n### ⚠️ Two rankings the deck asks for directly\n- **Commonest cause in the FULL-TERM infant: HIE.**\n- **Commonest cause in the PRETERM infant: IVH.**\n\n### Why identifying the cause matters\n- **Treat the cause and the seizure can stop** — often without long-term therapy.\n- **⚠️ Prognosis follows the CAUSE —** not the seizure. **Good:** SAH, **late-onset** hypocalcaemia. **High risk:** **hypoglycaemia, cerebral malformations, meningitis**.\n\n*HIE as a disease — Sarnat and Thompson staging, the phases of injury, cooling criteria — is `perinatal-hie` in full.*\n\nSrc: L10 pp.6–8; the term/preterm ranking L10 pp.50–51",
        "qs": []
      },
      {
        "id": "nns-4",
        "w": "must",
        "h": "Types of seizure, and the subtle seizure in detail",
        "body": "|Type|Note|\n|---|---|\n|**Subtle**|**Most common type of seizure**|\n|**Tonic**|**Preterm patients with IVH**|\n|**Clonic**|**Focal clonic has the BEST prognosis**|\n|**Myoclonic**|**WORST prognosis of all types**|\n\n### The five subtle manifestations\n- **Ocular:** **tonic horizontal deviation of the eyes**, or **sustained eye opening with ocular fixation**, or **cycled fluttering**.\n- **Oral–facial–lingual:** **chewing, lip-smacking**.\n- **Limb:** **cycling, paddling**.\n- **Autonomic:** **tachycardia or bradycardia**.\n- **⚠️ Apnoea:** a **rare** manifestation of seizure — with **tachycardia early and bradycardia late**, which is what separates it from apnoea of other causes.\n\nSrc: L10 pp.9–10",
        "qs": []
      },
      {
        "id": "nns-5",
        "w": "must",
        "h": "History and examination — the day of onset does most of the work",
        "body": "### Describing the event\n- **Get a complete description** from the parents, or by **video recording**.\n- **Awake or asleep:** an event only in sleep suggests **benign neonatal sleep myoclonus**.\n\n### Onset by day of life\n- **Day 0–3:** **perinatal asphyxia · intracranial haemorrhage · drug abstinence · metabolic causes**.\n- **Day 4–7:** **sepsis · meningitis · metabolic causes · developmental defects**.\n- **⚠️ Fifth day:** **benign familial neonatal seizure** — the classic \"fifth-day fit\".\n\n### The rest of the history\n- **Antenatal:** **intrauterine infection, maternal diabetes, narcotic addiction**; **sudden increase in fetal movements**.\n- **Feeding:** a **sepsis-like picture AFTER a feed** suggests **IEM**, or **late-onset hypocalcaemia from cow’s milk**.\n- **Family:** **consanguinity**, family history of **seizures, mental retardation, early fetal or neonatal deaths** → **IEM**. Neonatal seizures **in a parent or sibling** → **benign familial neonatal convulsions (BFNC)**.\n- **BFNC** *(not in course material)* **—** **autosomal dominant**, usually **KCNQ2/KCNQ3** channel mutations, **remitting within weeks to months** with **normal development** in most.\n\n### Examination\n- **Vitals**, then **gestational age, birth weight, pallor, malformations**.\n- **⚠️ Jitteriness on general examination** may itself be **hypoglycaemia or hypocalcaemia**.\n- **CNS:** a **bulging anterior fontanelle** → **meningitis or intracranial haemorrhage**; **fundus for chorioretinitis**.\n- **Systemic:** **hepatosplenomegaly or an abnormal urine odour** → **IEM**.\n- **Skin:** **neurocutaneous markers** — **hypopigmented ash-leaf macules of tuberous sclerosis**.\n\nSrc: L10 pp.11, 15–17; the BFNC genetics supplied and tagged",
        "qs": []
      },
      {
        "id": "nns-6",
        "w": "must",
        "h": "The mimics — jitteriness, sleep myoclonus and the benign movement disorders",
        "body": "### Jitteriness against seizure\n\n|Feature|Jitteriness|Seizure|\n|---|---|---|\n|**Stimulus sensitive**|**++**|**−**|\n|**Cessation**|**Passive flexion and gentle grasp stop it**|**Nothing stops it**|\n|**Frequency of jerk**|**5–6 per second**|**2–3 per second**|\n|**Rhythmicity**|**Rhythmic oscillation**|**Fast and slow component**|\n|**Abnormal gaze or eye movement**|**Nil**|**Present**|\n|**Autonomic disturbance**|**Nil**|**Increased HR and BP**|\n|**aEEG**|**Normal**|**Abnormal**|\n\n### Benign neonatal sleep myoclonus\n- **When:** **non-REM sleep**, **preterm** infants, **first week of life**.\n- **⚠️ Backwards to a seizure:** **restraint and benzodiazepines INCREASE the jerks**.\n- **The confirming sign:** **rapidly abolished on arousal**; **EEG normal**.\n\n### The other transient benign paroxysmal movement disorders of infancy\n\n|Disorder|Onset|Resolution|Secondary causes|Testing|\n|---|---|---|---|---|\n|**Jitteriness**|**< 2 weeks**|**< 1 month** (2 months–1 year)|**Yes**|**Biochemical tests, EEG**|\n|**Benign neonatal sleep myoclonus**|**< 2 weeks**|**< 6 months**|**Yes**|**EEG**|\n|**Shuddering**|**< 1 year**|**< 4 years**|**No**|**EEG**|\n|**Benign myoclonus of early infancy**|**6 months** (< 1 year)|**< 2–3 years**|**No**|**EEG, brain MRI**|\n|**Transient idiopathic dystonia of infancy**|**5–10 months**|**< 5 years**|**No**|**Brain MRI**|\n|**Spasmus nutans**|**4–18 months**|**1–2 years after onset**|**Yes**|**Brain MRI; ophthalmological evaluation (VEP, ERG)**|\n|**Paroxysmal tonic upgaze of infancy**|**5 months**|**< 4 years**|**Yes**|**EEG, brain MRI, ophthalmology, CACNA1A sequencing**|\n|**Benign paroxysmal torticollis**|**< 3 months**|**< 4 years**|**No**|**EEG, brain and cervical MRI, CACNA1A sequencing**|\n\nSrc: L10 pp.13–14; the movement-disorder table L10 p.12 (image-only, recovered by render; attributed on the slide to Mosca, Martins & Temudo, Rev Neurol 2022)",
        "qs": []
      },
      {
        "id": "nns-7",
        "w": "must",
        "h": "Investigation — the essential list and the five-step approach",
        "body": "### Table 8.1 — investigations required in neonates with seizures\n\n|Essential (required in all, with few exceptions)|Additional|\n|---|---|\n|**Blood sugar**|**Haematocrit** — if plethoric or at risk of polycythaemia|\n|**Serum sodium and calcium**|**Serum bilirubin** — if icteric|\n|**Cerebrospinal fluid examination**|**Serum magnesium**|\n|**Cranial ultrasound**|**Arterial blood gas and anion gap** — lethargy, vomiting, family history|\n|**EEG and/or amplitude-integrated EEG**|**CT and/or MRI** — if no aetiology after the essential tests|\n|—|**TORCH screen** for congenital infections; **work-up for inborn errors of metabolism**|\n\n### The five-step diagnostic approach\n- **1 Stabilize —** airway, breathing, circulation, temperature, **bedside glucose**; **treat hypoglycaemia immediately**.\n- **2 Rapid reversible causes —** electrolytes, calcium, magnesium, sodium, blood gas, **sepsis screen if indicated**.\n- **3 EEG / aEEG —** **continuous EEG is the GOLD STANDARD**; **aEEG screens and trends, and CAN MISS seizures**.\n- **4 Neuroimaging —** **cranial ultrasound** for IVH and hydrocephalus; **MRI** for stroke, an HIE pattern or malformation.\n- **5 Aetiology-specific work-up —** lumbar puncture, metabolic testing, genetics, stroke evaluation.\n\n### ⚠️ The EEG pearl\n**The pearl:** **many neonatal seizures are electrographic-only** — **never rule them out by observation alone in a high-risk infant**.\n\n*L10 illustrates this with an unlabelled cranial-ultrasound IVH series, one brain-anomaly scan and two MRI slices; it names no grades, so none is written here.*\n\nSrc: L10 pp.18–19, 21–23 (p.18’s table image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "nns-8",
        "w": "must",
        "h": "Treatment — reversible causes first, then the drug ladder",
        "body": "### The principle\n- **⚠️ Reversible cause FIRST —** **hypoglycaemia, hypocalcaemia, hyponatraemia, hypomagnesaemia, infection, toxin or medication**, before any anticonvulsant.\n- **Why:** this **may stop the seizures without any long-term antiseizure therapy**.\n\n### First-line drugs\n- **Phenobarbital** remains the **common first-line** drug; **levetiracetam** is also widely used.\n- **Escalation depends on** the **response, the EEG burden and the aetiology**.\n\n### Monitoring\n- **Watch both —** the **clinical examination AND the EEG trajectory**.\n- **⚠️ Electroclinical uncoupling —** it follows medication: **the movements stop and the discharges do not**.\n\n### The HIE overlay the deck prints here\n- **Who is cooled —** **moderate-to-severe HIE born at ≥ 36 weeks**; **therapeutic hypothermia is standard of care**.\n- **Target 33.5–34.5 °C**, started **within 6 hours of birth**, continued **72 hours**, then **controlled rewarming**.\n- **Where:** centres with **neuromonitoring, neuroimaging and follow-up expertise**.\n\n*Cooling criteria A, B and C and the technique are `perinatal-hie`.*\n\nSrc: L10 pp.24–25; the algorithm below from p.24 (image-only, recovered by render)",
        "flow": {
          "title": "Neonate with seizures",
          "steps": [
            {
              "k": "step",
              "t": "STABILISE AND SAMPLE — identify and characterise the seizure · secure airway, optimise breathing, circulation and temperature · start oxygen if needed · secure IV access and take baseline bloods: sugar, calcium, magnesium, sodium, potassium, arterial blood gas, haematocrit, sepsis screen",
              "n": "step 1"
            },
            {
              "k": "alert",
              "t": "IF HYPOGLYCAEMIC (blood sugar < 40 mg/dL) — 2 mL/kg of 10 % dextrose as a bolus, then a continuous infusion of 6–8 mg/kg/min. IF SUGAR IS NORMAL — withdraw a blood calcium; if abnormal, 2 mL/kg of 10 % calcium gluconate IV UNDER CARDIAC MONITORING",
              "n": "the reversible causes"
            },
            {
              "k": "decision",
              "t": "Seizures persist?",
              "yes": "Go to phenobarbitone",
              "no": "No antiseizure drug needed — the metabolic correction was the treatment"
            },
            {
              "k": "step",
              "t": "PHENOBARBITONE 20 mg/kg IV stat over 20 minutes",
              "n": "first line"
            },
            {
              "k": "step",
              "t": "Seizures continue — repeat phenobarbitone in 10 mg/kg/dose aliquots UNTIL 40 mg/kg IS REACHED",
              "n": "load to the ceiling"
            },
            {
              "k": "step",
              "t": "Seizures continue — PHENYTOIN 20 mg/kg IV slowly over 20 minutes under cardiac monitoring. Levetiracetam or lidocaine may replace phenytoin as the second-line agent",
              "n": "second line"
            },
            {
              "k": "step",
              "t": "Seizures continue — repeat phenytoin 10 mg/kg/dose",
              "n": "second line, repeat"
            },
            {
              "k": "step",
              "t": "Seizures continue — consider a lorazepam or midazolam bolus, and a midazolam infusion if needed",
              "n": "third line"
            },
            {
              "k": "alert",
              "t": "SEIZURES CONTROLLED — wean the antiepileptic slowly to maintenance phenobarbitone",
              "n": "exit"
            }
          ]
        },
        "qs": []
      },
      {
        "id": "nns-9",
        "w": "must",
        "h": "Neonatal hypoglycaemia — thresholds, who gets it, and how",
        "body": "**Why it matters:** neonatal hypoglycaemia carries **long-term neurological sequelae**, and is one of the seizure causes with a **high risk of adverse outcome**.\n\n### Definition — the deck states there is no consensus\n\n|Age|Blood glucose below|\n|---|---|\n|**First 24 hours**|**30 mg/dL**|\n|**1–3 days**|**40 mg/dL**|\n|**After 3 days**|**45 mg/dL**|\n\n### The six risk groups\n- **LGA** infants · **infants of diabetic mothers**.\n- **SGA** infants — **decreased glycogen stores**.\n- **AGA but under 2 kg**, or **preterm under 37 weeks**.\n- **Disease:** **hypoxia · hypothermia · shock · sepsis · RDS · polycythaemia**.\n\n### The four mechanisms\n- **Hyperinsulinaemia —** **PHHI**, persistent hyperinsulinaemic hypoglycaemia of infancy.\n- **Limited glycogen stores —** **preterm and IUGR**.\n- **Increased glucose use —** **polycythaemia, sepsis, hypothermia**.\n- **Reduced glycogenolysis —** or gluconeogenesis: **inborn errors of metabolism, adrenal insufficiency**.\n\n### Symptoms\n- **⚠️ Non-specific —** they **mimic many illnesses**, hence bedside glucose at step 1 of every neonatal algorithm.\n- **Commonest:** **not looking well · lethargic · weak cry · poor feeding · temperature instability · shallow breathing or apnoea**.\n- **CNS:** **hypotonia · jitteriness · convulsion**.\n\nSrc: L10 pp.28–32",
        "qs": []
      },
      {
        "id": "nns-10",
        "w": "must",
        "h": "Hypoglycaemia — the glucose ladder, and when it will not correct",
        "body": "### The bolus\n- **Dose:** **intravenous dextrose 0.2 g/kg (200 mg/kg) over 5–15 minutes**.\n- **In practice:** **2 mL/kg of D10 %** — D10 % being **10 g in 100 mL**.\n\n### The infusion\n- **Then:** a **glucose infusion rate (GIR) of 6–8 mg/kg/min** in maintenance fluid.\n- **⚠️ Peripheral line ceiling: 12.5 %.** Above that needs central access.\n- **Recheck:** glucose **after 15–30 minutes**; if still low, **add 1–2 mg/kg/min to the GIR**.\n\n### The two names for failure\n- **Resistant hypoglycaemia:** a requirement of **GIR ≥ 12 mg/kg/min**.\n- **Persistent hypoglycaemia:** hypoglycaemia **beyond 1 week** despite adequate management.\n- **Then:** **rule out inborn errors of metabolism and hyperinsulinism**.\n- **Drugs to consider:** **hydrocortisone · glucagon · diazoxide · octreotide**.\n\n### Neonatal hypocalcaemia\n- **Where it sits:** a **metabolic cause of neonatal seizure**, beside hypoglycaemia.\n- **The cause named:** **cow’s milk intake**, as a **sepsis-like picture after a feed** — late-onset hypocalcaemia.\n- **⚠️ Prognosis:** **late-onset hypocalcaemia has a GOOD neurodevelopmental outcome**, unlike hypoglycaemia.\n- **Treatment, the deck’s only figure:** **2 mL/kg of 10 % calcium gluconate IV under cardiac monitoring**.\n- **Thresholds** *(not in course material)* **—** total calcium **< 7 mg/dL** or ionised **< 1.1 mmol/L** in the term infant.\n- **Early against late** *(not in course material)* **—** **early, under 72 h:** prematurity, infant of a diabetic mother, birth asphyxia, maternal hyperparathyroidism. **Late, past the first week:** high-phosphate feeds such as **cow’s milk**, maternal vitamin D deficiency, hypomagnesaemia, **DiGeorge syndrome**.\n\nSrc: L10 pp.33–36; the calcium gluconate dose L10 p.24 (image-only). Thresholds and the early/late split supplied and tagged; the row deferring this here is corrected in the header, FINDING 5",
        "qs": []
      },
      {
        "id": "nns-11",
        "w": "must",
        "h": "Birth injuries — the classification, and the anatomy that explains the scalp",
        "body": "### Three groups\n- **Soft tissue —** **caput succedaneum · cephalhaematoma · chignon · bruises and abrasions · subaponeurotic (subgaleal) haemorrhage**.\n- **Nerve palsies —** **brachial plexus (Erb palsy)** · **facial nerve palsy**.\n- **Fractures —** **clavicle · humerus · femur**.\n\n### Two more the deck photographs\n- **Facial in-suffusion —** the congested, bruised face of a **face presentation**.\n- **Forceps mark —** a linear bruise or abrasion along the line of the blade.\n\n### The layers, from outside in — this is what decides the differential\n- **Skin**, then **subcutaneous tissue** — a collection here is a **CAPUT SUCCEDANEUM**, free to spread wherever skin goes.\n- **Galeal aponeurosis**, then the **subgaleal space** — bleeding here is a **SUBAPONEUROTIC (SUBGALEAL) HAEMORRHAGE**, in a space **large enough to reach the orbits and the nape of the neck**.\n- **Periosteum**, then the **parietal bone** — bleeding **under the periosteum** is a **CEPHALHAEMATOMA**; the periosteum is **fixed at the sutures**, so it **cannot cross them**.\n- **Then** the skull bones, **venous sinus** and **dura**.\n\nSrc: L10 pp.37–41 (pp.38, 41 image-only, recovered by render; the layer diagram is captioned \"Location of extracranial haemorrhages\")",
        "qs": []
      },
      {
        "id": "nns-12",
        "w": "must",
        "h": "DD of scalp swellings — the discrimination matrix",
        "body": "|Feature|Caput succedaneum|Cephalhaematoma|Subgaleal haemorrhage|\n|---|---|---|---|\n|**Location**|**At the point of contact; CAN extend across sutures**|**Usually over the parietal bones; DOES NOT cross sutures**|**Beneath the epicranial aponeurosis; may extend to the ORBITS and the NAPE OF THE NECK**|\n|**Characteristic findings**|**Vaguely demarcated; PITTING oedema that SHIFTS WITH GRAVITY**|**Distinct margins; initially firm, MORE FLUCTUANT AFTER 48 h**|**Firm to fluctuant; ill-defined borders; may have CREPITUS or FLUID WAVES**|\n|**Timing**|**Maximal size and firmness AT BIRTH; resolves in 48–72 h**|**INCREASES after birth for 12–24 h; resolution over 2–3 weeks**|**PROGRESSIVE after birth; resolution over 2–3 weeks**|\n|**Volume of blood**|**Minimal**|**Rarely severe**|**MAY BE MASSIVE**, especially with an associated coagulopathy|\n\n### The line the table does not print\n- **⚠️ Can it kill?** **Only the subgaleal** — the space holds enough blood to **exsanguinate the infant**, and a coagulopathy makes that likely.\n\n### Chignon\n- **What it is:** **subcutaneous scalp oedema from a VENTOUSE delivery** — the artificial caput the cup makes.\n- **Shape:** **discrete and circular**, the diameter of the cup.\n\n### Caput succedaneum, in the deck’s own words\n- **Definition:** **oedema of the subcutaneous tissues of the presenting part**.\n- **Duration:** **may last for 48 hours**.\n\n*Cephalhaematoma is also a non-haemolytic cause of jaundice (nnj-4) and a risk factor for severe hyperbilirubinaemia (nnj-11) — enclosed blood is a bilirubin load.*\n\nSrc: L10 pp.42–46 (the matrix on p.42 is image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "nns-13",
        "w": "must",
        "h": "Erb’s palsy",
        "body": "- **The lesion:** the injury can **stretch, rupture or AVULSE the plexus roots from the spinal cord**.\n- **Rank:** the **commonest birth-related brachial plexus injury — 50–60 %**.\n- **Roots:** **C5 and C6**, and **in some cases C7**.\n\n### ⚠️ The position — what the examiner asks for\n**Waiter’s tip:** the affected arm **lies STRAIGHT and LIMP**, with the **hand PRONATED and the fingers FLEXED**.\n\n### Risk factors\n- **The fetus —** **shoulder dystocia · fetal macrosomia · gestational diabetes**.\n- **A second stage of labour over 60 minutes** · **breech presentation**.\n\n### Diagnosis\n- **MRI of the shoulder:** may show **dislocation**; **pseudomeningoceles indicate AVULSION** of the roots.\n- **EMG / nerve conduction studies:** **fibrillation potentials indicate denervation**.\n\n### Treatment\n- **Physiotherapy** — **usually resolves in 4 months**, **up to 2 years** in some, **± surgery**.\n\nSrc: L10 pp.47–48 (the waiter’s tip description from p.48, image-only, recovered by render)",
        "qs": []
      }
    ]
  },
  "neonatal-sepsis": {
    "intro": "Sepsis in the newborn, early-onset and late. Which organisms belong to which onset, the risk factors, why the signs are non-specific enough to be missed, the septic screen, empirical antibiotics and how long they run, and supportive care.",
    "sections": [
      {
        "id": "nsp-1",
        "w": "must",
        "h": "Neonatal sepsis — the definition, the three certainties, and the size of it",
        "body": "**Neonatal sepsis:** a **clinical syndrome** characterised by **signs and symptoms of infection**, **with OR WITHOUT accompanying bacteraemia**, in the **first month of life**.\n\n### The three levels of certainty\n- **Definite —** the syndrome **plus growth of bacteria in a STERILE site**: positive **blood, CSF or BAL** culture.\n- **Probable —** clinical features of sepsis with **STERILE cultures**, usually with **supportive tests** — biomarkers, CSF or urine, chest X-ray.\n- **Possible —** **only** clinical features, **or** **risk factors for early-onset sepsis**, **unsupported by laboratory tests or cultures**.\n\n### Magnitude\n- **WHO 2016:** **46 % of deaths in children under five were neonates**, and **7 % of those were caused by neonatal sepsis**.\n- **⚠️ First week of life —** in developing countries **30–50 % of all deaths are sepsis-related**.\n\nSrc: L11 pp.5–7",
        "qs": []
      },
      {
        "id": "nsp-2",
        "w": "must",
        "h": "Early-onset against late-onset sepsis",
        "body": "|Feature|EONS|LONS|\n|---|---|---|\n|**Timing**|**First 72 hours of life**|**After 72 hours**|\n|**Transmission**|**Vertical OR horizontal**|**Horizontal only**|\n|**Presentation**|**Asymptomatic at birth, pneumonia or septicaemia**|**Septicaemia, septic arthritis, UTI, catheter-associated infection, VAP**|\n|**Risk factors**|**MATERNAL**|**ENVIRONMENTAL**|\n|**Organisms named by the deck**|**GBS and E. coli**|**CONS (Staph. epidermidis), Staph. aureus**|\n\n### The five organs sepsis presents through\n- **Septicaemia and bloodstream infection** · **pneumonia** · **UTI** · **meningitis** · **joint and bone infections**.\n\nSrc: L11 pp.8, 11",
        "qs": []
      },
      {
        "id": "nsp-3",
        "w": "must",
        "h": "The organisms, measured",
        "body": "Percentage of total isolates, early against late onset, from the deck’s own cited dataset.\n\n|Organism|EONS %|LONS %|\n|---|---|---|\n|**Klebsiella species**|**25.5**|**24.6**|\n|**Staphylococcus aureus**|**18.8**|**21.8**|\n|**Escherichia coli**|**11.1**|**11.65**|\n|**CONS**|**9.4**|**0.4**|\n|**Pseudomonas species**|**8**|**5.9**|\n|**Enterobacter species**|**7.6**|**8.2**|\n|**Acinetobacter species**|**5.9**|**7**|\n|**Group D streptococci / Enterococcus**|**2.7**|**3.3**|\n\n### What the numbers say\n- **⚠️ Klebsiella leads BOTH groups —** not GBS, and not E. coli.\n- **Gram-negatives dominate:** **Klebsiella, E. coli, Enterobacter and Acinetobacter together exceed half of all isolates** in both groups.\n- **Staph. aureus is the leading Gram-positive** in both, and **rises** in late onset.\n\n*⚠️ The deck contradicts itself on CONS: this chart makes it a mainly EARLY-onset isolate (9.4 % against 0.4 %), while the EONS/LONS grid in nsp-2 lists CONS as the LATE-onset organism. Both are recorded as printed.*\n\nSrc: L11 p.10 (image-only, recovered by render; attributed on the slide to Chaurasia, BMJ 2019); the conflicting attribution L11 p.8",
        "qs": []
      },
      {
        "id": "nsp-4",
        "w": "must",
        "h": "Group B streptococcus",
        "body": "### The colonisation cascade\n- **15–40 % of pregnant women** have **rectal or vaginal colonisation** with group B streptococci.\n- **About 50 %** of their infants **become colonised**.\n- **Then:** **1–2 % of colonised infants develop early-onset infection**.\n\n### The five risk factors for GBS early-onset disease\n- **Preterm**, especially **preterm prolonged rupture of the membranes**.\n- **Membranes —** **prolonged rupture over 18 hours, or prelabour rupture**.\n- **Fever —** **intrapartum fever above 38 °C, or chorioamnionitis**.\n- **A previous child with GBS infection.**\n- **GBS bacteriuria during pregnancy.**\n\n- **Prevention:** **screening and treating pregnant women** for **group B streptococcus and Chlamydia trachomatis** — the antenatal half of preventing neonatal pneumonia.\n\nSrc: L11 p.9; antenatal screening from `30) Pneumonia`, cited only, deferred here by `respiratory`",
        "qs": []
      },
      {
        "id": "nsp-5",
        "w": "must",
        "h": "Why the neonate is liable, and the three risk lists",
        "body": "### Host — why a newborn is defenceless\n- **Barrier:** **defective skin and mucous membrane barriers**, **decreased acidity**.\n- **Passive immunity:** **lacking in the preterm** — transplacental IgG comes late.\n- **Active immunity:** **defective humoral and cellular response**, **no opsonisation**.\n- **Exposure:** **VLBW and prolonged hospital stay**.\n\n### Maternal\n- **Vulvovaginitis** · **chorioamnionitis** · **UTI and pyrexia** · **sexually transmitted infection and inadequate antenatal care**.\n\n### Intrapartum\n- **Hypoxia** · **need for resuscitation, meconium-stained liquor** · **low Apgar score**.\n- **Prolonged labour over 24 hours, or PROM** · **instrumental or vaginal delivery**.\n\n### Neonatal\n- **Male sex.**\n- **⚠️ Prematurity and low birth weight — a 3- to 10-fold risk**, the single largest factor.\n- **Interventions:** **IV fluids · IV cannulation · NG feeding · central lines, umbilical catheters and PICC lines · ventilation and ETT · urinary catheters**.\n\nSrc: L11 pp.12–15",
        "qs": []
      },
      {
        "id": "nsp-6",
        "w": "must",
        "h": "Clinical picture — general, site by site, and what it imitates",
        "body": "### The general picture\n- **Not doing well** · **off colour, an earthy look**.\n- **Temperature:** **hypothermia OR hyperthermia** — the low reading is the commoner.\n- **Respiratory:** **tachypnoea, apnoea, respiratory distress, shallow breathing**.\n- **Cardiovascular:** **heart rate variability**, then **hypotension and shock**.\n- **Neurological:** **hypoactivity or convulsions**.\n- **Gastrointestinal:** **feed intolerance, vomiting, poor feeding**.\n\n### Site by site\n- **On mechanical ventilation:** **increased secretions, coloured secretions, increased ventilatory settings**.\n- **Meningitis:** **mostly non-specific**; **tense or bulging fontanelle**; **head retraction (opisthotonos)**; **seizure and disturbed sensorium are RARE**.\n- **UTI:** with a **catheter or malformation**; non-specific — **vomiting, fever, PROLONGED JAUNDICE, poor weight gain**.\n- **Bone and joints:** **limited and painful movement**, or fever alone.\n\n### The sepsis-like mimics\n\n|Early onset|Late onset|\n|---|---|\n|**Perinatal asphyxia**|**Left ventricular outflow tract obstruction**|\n|**Hypoglycaemia**|**Patent ductus arteriosus**|\n|**Inborn errors of metabolism**|**Inborn errors of metabolism**|\n|**Viral infection**|**Congenital adrenal hyperplasia**|\n|—|**Abdominal catastrophes such as volvulus**|\n\n*Prolonged jaundice is a presenting sign of neonatal UTI as well as a jaundice problem in its own right — nnj-2 and nnj-8.*\n\nSrc: L11 pp.16–18",
        "qs": []
      },
      {
        "id": "nsp-7",
        "w": "must",
        "h": "The laboratory — what is sent, and the haematological cut-offs",
        "body": "### What is sent\n- **CBC:** **TLC, ANC, I/T ratio, platelet count and volume, PLR, NLR, RDW, toxic granules**.\n- **Inflammatory and immunological markers:** **CRP · procalcitonin · SAA · IL-6 and IL-8 · CD64 (the EARLIEST marker) · CD163 · CD14 (presepsin)**.\n- **⚠️ The \"triple taps\":** **blood culture · CSF analysis and culture · urine analysis and culture**.\n- **Where indicated:** **joint fluid · conjunctival swab · BAL**.\n\n### Haematological markers of sepsis — the cut-offs\n\n|Marker|Cut-off|\n|---|---|\n|**Leucopenia**|**WBC < 5,000/mm³ after 4 h of life**|\n|**Leucocytosis**|**WBC > 20,000/mm³**|\n|**Neutropenia**|**ANC < 1,000/mm³ at ≥ 4 h**|\n|**Neutrophilia**|**ANC ≥ 10,000/mm³**|\n|**High I:T ratio**|**> 0.27 in term, > 0.22 in preterm**|\n|**Platelet count**|**< 120,000/mm³**|\n|**Mean platelet volume**|**cut-off between 8.6 and 11.4**|\n|**NLR**|**1.24 : 6**|\n|**PLR**|**57 : 94**|\n\nSrc: L11 pp.20–21",
        "qs": []
      },
      {
        "id": "nsp-8",
        "w": "must",
        "h": "CRP, procalcitonin, presepsin — and why no single marker works",
        "body": "### Haematological markers on their own\n- **⚠️ The weakness —** they are **poor at discriminating sepsis from no sepsis**.\n- **The sepsis screen:** **NPV 65–95 %**, **PPV very low** — it excludes better than it confirms.\n\n### CRP against procalcitonin\n\n|Feature|CRP|Procalcitonin|\n|---|---|---|\n|**Rise**|**Within 12 h**|**Starts at 4 h**|\n|**Peak**|**48 h**|**8 h — earlier**|\n|**Sensitivity / specificity in LOS**|**62 % / 71 %**|**90 % / 88 %**|\n|**Viral vs bacterial**|**No**|**YES, discriminates**|\n|**Practical gain**|**NPV rises with serial negatives 12–24 h apart**|**Shorter antibiotic duration**|\n\n- **Both markers —** better in **LATE-onset than early-onset sepsis**, and **PCT beats CRP even there**.\n- **⚠️ Best practice is to combine both**, not to choose.\n\n### Presepsin — the early-onset marker\n- **What it is:** the **soluble CD14 fragment**, a **high-affinity receptor complex of lipopolysaccharide**.\n- **Head to head in EOS** against PCT, IL-6 and IL-8, **presepsin was most accurate — 88.9 % sensitivity, 85.7 % specificity**.\n- **Strength:** as accurate as PCT and CRP, **especially in Gram-negative infection**.\n\n### Serum amyloid A\n- **Behaviour:** **rises up to 1,000 times baseline** in response to infection or injury.\n- **⚠️ Confounded by** **hepatic function and nutritional status**; **lowest in cord blood, highest in old age**.\n\n### The conclusion the deck draws\n**The conclusion:** **no single biomarker has sufficient diagnostic accuracy** for neonatal sepsis. What works is **combining biomarkers** or **serial measurement**.\n\nSrc: L11 pp.22–26",
        "qs": []
      },
      {
        "id": "nsp-9",
        "w": "must",
        "h": "Cultures — the gold standards and how they fail",
        "body": "### Blood culture\n- **Technique:** the **volume of inoculated blood to broth ratio is 1:5 or 1:10**.\n- **Time to growth:** **most Gram-positives 24 h, most Gram-negatives 48 h**.\n- **False negative:** **inadequate sample · prior antibiotics · a cold bottle**.\n- **False positive:** **contamination**.\n\n### CSF\n- **Abnormal values:** **WBC > 25 (polymorphs)/µL · protein > 150 mg/dL · glucose < 30**.\n- **⚠️ CSF culture by LP —** the **GOLD STANDARD**, but **prior antibiotics make false negatives common**.\n\n### Urine\n- **Abnormal value:** **WBC > 10 in an uncentrifuged sample**.\n- **⚠️ Urine culture is the GOLD STANDARD**, by **sterile catheterisation or suprapubic sample** — a bag specimen will not do.\n\nSrc: L11 pp.27–28",
        "qs": []
      },
      {
        "id": "nsp-10",
        "w": "must",
        "h": "Antibiotics — choosing them, and how long",
        "body": "### The principle\n- **Empirical choice follows LOCAL data** on organism and antibiogram — **narrowest spectrum, and consider synergism**.\n- **⚠️ After the culture result, step DOWN** to the simplest and narrowest spectrum.\n\n### Where there is no local antibiogram — the general rules\n- **Septicaemia and pneumonia:** **ampicillin + gentamicin or amikacin**.\n- **Meningitis:** **ampicillin + cefotaxime**.\n- **Suspected resistant strains:** **ciprofloxacin or piperacillin-tazobactam + amikacin**.\n- **Second line:** **meropenem**; **add vancomycin if MRSA is suspected**.\n- **Suspected anaerobes (NEC):** **metronidazole or clindamycin**.\n- **Suspected pseudomonas:** **piperacillin-tazobactam**.\n- **⚠️ Third-generation cephalosporins —** **avoid them wherever possible, EXCEPT in meningitis**.\n\n### Duration\n\n|Diagnosis|Duration of antibiotics|\n|---|---|\n|**Suspected infection, clinical course and biomarkers NOT suggestive of sepsis**|**Stop empirical antibiotics once cultures are negative**|\n|**Culture-negative probable or possible sepsis**|**5–7 days**|\n|**Culture-negative sepsis with no meningitis**|**14 days**|\n|**Meningitis**|**21 days**|\n|**Ventriculitis**|**4–6 weeks**|\n|**Bone and joint infection**|**4–6 weeks**|\n|**Deeply seated infection**|**4–6 weeks**|\n\n*⚠️ The table prints \"culture negative\" in the 5–7 day and the 14 day rows, which cannot both apply to one baby; reproduced as printed rather than corrected.*\n\nSrc: L11 pp.30–32",
        "qs": []
      },
      {
        "id": "nsp-11",
        "w": "must",
        "h": "Supportive care — STABLE, and the hypothermia loop",
        "body": "### Why supportive care outranks the antibiotic in the first day\n- **Claim:** supportive care plays the **main role** in managing the septic sick neonate.\n- **⚠️ The first 24 hours —** **most of the mortality there is preventable by supportive care**.\n- **Why:** **antibiotics need at least 12 hours to work**, and their action causes **bacterial lysis with systemic manifestations** — the first day is bought by support, not the drug.\n\n### STABLE\n\n|Letter|Element|What it means|\n|---|---|---|\n|**S**|**Sugar and safe**|**Maintain glucose and electrolyte levels with IV fluid**|\n|**T**|**Temperature control**|**Be aware of the methods of heat loss**|\n|**A**|**Airways**|**Suction · positioning · airway management · oxygen, CPAP and IMV**|\n|**B**|**Blood pressure**|**Circulatory management by fluids and inotropes**|\n|**L**|**Laboratory**|**Blood gas · diagnosis of sepsis**|\n|**E**|**Effective organ management**|**Renal: fluid, adjust, dialysis · coagulation: plasma · seizure: anticonvulsant · anaemia: blood**|\n\n### Hypothermia and sepsis\n- **⚠️ It runs BOTH ways —** which is the whole point of the slide.\n- **Cold causes sepsis:** **hypothermia suppresses immunity**.\n- **Sepsis causes cold:** **neonatal sepsis is manifested by hypothermia**.\n- **So:** **keep neonates at normal temperature** — a treatment, not comfort.\n\n*Hypothermia is one limb of the neonatal energy triangle with hypoglycaemia and hypoxia — drawn in full in `perinatal`.*\n\nSrc: L11 pp.33–35 (the STABLE grid on p.34 is image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "nsp-12",
        "w": "high",
        "h": "Adjunctive therapy",
        "body": "The deck lists **eight adjuncts** beside antibiotics and supportive care — none a substitute for either.\n\n- **IVIG —** pooled immunoglobulin.\n- **GM-CSF and G-CSF —** colony-stimulating factors, aimed at the neutropenia.\n- **Lactoferrin —** with **colostrum and exclusive early breast feeding**, the enteral limb.\n- **Zinc.**\n- **Pentoxyphylline.**\n- **Granulocyte transfusion.**\n- **DVET —** **double volume exchange transfusion**.\n- **Melatonin.**\n\n*The deck names them without ranking or evidence; the list itself is the examinable unit.*\n\nSrc: L11 p.36 (image-only, recovered by render — the cached text is the three words \"Adjuntive therapy .\")",
        "qs": []
      }
    ]
  },
  "nutrition-feed": {
    "intro": "How an infant is fed for the first two years. The physiology behind breastfeeding and where cow's milk falls short, whether the baby is getting enough, the two formula families, and complementary feeding done adequately, safely and on time.",
    "sections": [
      {
        "id": "nut-6",
        "w": "must",
        "h": "Physiology of breastfeeding — two hormones and a local brake",
        "body": "### The five steps\n- **1 Baby:** uses **rooting, sucking and swallowing** reflexes to locate the nipple and feed.\n- **2 Tactile receptors:** in the **nipple** are activated.\n- **3 Hypothalamus:** sends **efferent impulses to the anterior and posterior pituitary**.\n- **4 Anterior pituitary:** **prolactin** stimulates **milk secretion by the cuboidal cells in the acini**.\n- **5 Posterior pituitary:** **oxytocin** contracts the **myoepithelial cells in the alveoli**, forcing milk into the larger ducts — the **let-down reflex**.\n\n**Emotions feed in:** alongside the hormone stimulation produced by suckling at the breast.\n\n### The local brake — autocrine control\n- **Feedback Inhibition of Lactation (FIL):** an **inhibitor in breast milk** that **regulates milk production locally**.\n- **Consequence:** **if the breast remains full of milk, secretion stops** — a full breast can suppress lactation.\n\n### The oxytocin reflex is psychologically switched\n- **Triggering:** thinking **lovingly of the baby**, the **sound** of the baby, the **sight** of the baby, **confidence**.\n- **Suppression:** **worry, stress, pain, doubt**.\n\n### The three neonatal reflexes\n- **Rooting:** something touches the **lips** → the baby **opens the mouth, tongue down and forward**.\n- **Sucking:** something touches the **palate** → the baby sucks.\n- **Swallowing:** the mouth **fills with milk** → the baby swallows.\n\n*Skill, not reflex: the mother learns to position, the baby learns to take the breast.*\n\nSrc: L15.2 pp.4–6 (image-only, recovered by render)",
        "qs": []
      },
      {
        "id": "nut-7",
        "w": "must",
        "h": "Breast versus cow’s milk — quantity, then quality",
        "body": "### Gross composition, g/dL\n\n|Constituent|Breast|Cow|\n|---|---|---|\n|**Protein**|**1**|**3.3**|\n|**Fat**|3.8|3.8|\n|**Lactose**|**7**|**4**|\n|**Mineral**|**0.2**|**0.8**|\n\n*Fat is identical in both.*\n\n### Quality of protein, % of total\n\n|Fraction|Breast|Cow|\n|---|---|---|\n|**Casein**|**30**|**80**|\n|**Lactalbumin, lactoferrin etc.**|**40**|—|\n|**β-lactoglobulin**|**0**|**13**|\n|**Immunoglobulins**|**30**|**7**|\n\n*The chart labels the cow column with three numbers only and leaves its top 7 % whey fraction unnamed.*\n\n### Carbohydrate\n- **Double the lactose:** **7 : 4** in favour of breast milk.\n- **Calcium:** lactose **helps calcium absorption**.\n- **Brain:** **essential for brain cerebrosides**.\n- **Gut flora:** **helps growth of lactobacilli** (probiotics).\n- **Prebiotics:** breast milk contains **FOS and GOS**.\n\n### Fatty acids\n- **Breast:** **60 % unsaturated.**\n- **Cow:** **40 % unsaturated.**\n\nSrc: L15.2 slides 8–9, values read off the 200 dpi render of p.8",
        "qs": []
      },
      {
        "id": "nut-8",
        "w": "high",
        "h": "Breast milk is not one fluid — age, stage and time of day",
        "body": "### By age of the baby, g/dL\n\n|Milk|Lactose|Fat|Protein|\n|---|---|---|---|\n|**Colostrum**|**5**|**3**|**2**|\n|**Mature**|**7**|**3.8**|**1**|\n|**Preterm**|**6**|**3.8**|**2.5**|\n\n*Protein peaks in colostrum and preterm milk, lactose in mature milk.*\n\n### By stage of the feed, g/dL\n\n|Milk|Lactose|Fat|Protein|\n|---|---|---|---|\n|**Foremilk**|7|**1.7**|1|\n|**Hindmilk**|7|**5**|1|\n\n### The three rules for fat\n- **By stage of lactation:** **more in the early months**.\n- **By time of day:** **2.5 times more at mid-day**.\n- **By stage of suckling:** **3 times more in hind milk**.\n\n*Only fat moves — lactose stays 7, protein 1.*\n\nSrc: L15.2 slides 10–11, values read off the 200 dpi render of p.10",
        "qs": []
      },
      {
        "id": "nut-9",
        "w": "must",
        "h": "Advantages of breastfeeding — to the infant and to the mother",
        "body": "### To the infant\n- **Ideal nutrition:** during the **first 4 to 6 months of life**.\n- **Survival:** **life-saving in developing countries**.\n- **Infection:** reduces **gastrointestinal and respiratory infection**, **otitis media**, **necrotizing enterocolitis**.\n- **Relationship:** **enhances the mother–child relationship**.\n- **Later life:** reduces **insulin-dependent diabetes, hypertension, obesity**.\n- **Digestion:** **better digestion and less colic**.\n- **Development:** **better growth and development, physical and mental**.\n- **Composition:** **natural and perfectly balanced**.\n\n### To the mother\n- **Attachment:** promotes **close attachment between mother and baby**.\n- **Birth spacing:** **increases the interval between children** — important in reducing birth rate in developing countries.\n- **Risk:** reduces **breast and ovarian cancer** and **type 2 diabetes**.\n\nSrc: L15.2 slides 6–7, 11–12",
        "qs": []
      },
      {
        "id": "nut-10",
        "w": "must",
        "h": "Management of breastfeeding — initiation, demand, attachment",
        "body": "### Getting started\n- **Early initiation of breastfeeding**, within the first hour.\n- **Early skin-to-skin contact.**\n\n**Demand feeding:** also called **unrestricted** or **baby-led** feeding.\n- **Frequency:** **no restrictions**.\n- **Length:** **no restrictions**.\n- **Order:** **finish the first breast first**.\n\n### Why prelacteal feeds harm\n- **They replace the colostrum:** the baby becomes **more liable to infection** and **more liable to allergy and protein intolerance**.\n- **They obstruct breastfeeding:** a satisfied baby **wants the breast less**; **bottle feeding causes difficulty attaching**; the baby **suckles less**; **starting becomes difficult**.\n\n### Attachment — four signs, both ways\n\n|Sign|Good attachment|Poor attachment|\n|---|---|---|\n|**Chin**|**Touching the breast**|**Not touching the breast**|\n|**Mouth**|**Wide open**|**Not widely open, lips pushed forward**|\n|**Lower lip**|**Turned outward**|**Turned in**|\n|**Areola**|**More visible ABOVE** the mouth|**More, or equal, visible BELOW**|\n\n### Technique\n- **Mother:** relaxation, **comfortable position**.\n- **Then, in order:** **baby positioning** → **proper latch on** → **attachment** → **effective sucking**.\n\n*Engorgement, cracked nipple, blocked duct and mastitis are not in course material; all four are managed by correcting attachment and emptying the breast, mastitis also needing antibiotics.*\n\nSrc: L15.2 slides 13–14, 16, 18–21, incl. the image-only p.17",
        "qs": []
      },
      {
        "id": "nut-11",
        "w": "must",
        "h": "Is the baby getting enough? — the two criterion lists",
        "body": "### Criteria of ADEQUATE breastfeeding\n- **Behaviour:** **calm and satisfied after feeds and in between**.\n- **Sleep:** **sleeps well 2 – 4 hours after nursing**.\n- **Urine:** **6 or more full diapers per day**.\n- **Weight:** **good weight gain, 20 – 30 grams/day**.\n\n**Good motions:** the stools of a **totally breast-fed** baby are **mustard yellow**, **soft to semiliquid**, with an **acidic \"fermentative\" odour**.\n\n**Frequency varies with age:** **one motion after each feed** to **one every 2 – 3 days** — both normal.\n\n### Criteria of INSUFFICIENT breastfeeding\n- **Weight:** **inadequate gain, or weight loss**.\n- **Output:** **inadequate urine and stools**.\n- **Between feeds:** **fretfulness, crying and sucking of fists**.\n- **At the breast:** **unsatisfied**, staying on each breast **more than 30 minutes**.\n- **Sleep:** **sleeplessness or very short sleep**.\n- **Air swallowing** leading to **colic**.\n\nSrc: L15.2 slide 22",
        "qs": []
      },
      {
        "id": "nut-12",
        "w": "know",
        "h": "Infant formula — the two families",
        "body": "### A — Standard formula (cow milk based)\n- **Stage 1** and **Stage 2**.\n\n### B — Special formula\n- **Hydrolyzed formula.**\n- **Amino acid based formula** (elemental).\n- **LBW formula** for the premature.\n- **Lactose free** milk based formula.\n- **Anti reflux** formula.\n- **Metabolic formulas:** for **inborn errors** or certain diseases.\n\n### When breast milk must not be given\n*Not in course material — the lecture lists formula types and never states a contraindication. Supplied: the infant-side absolute contraindication is **classic galactosaemia**; the mother-side ones are **maternal HIV where safe replacement feeding is available**, **active untreated tuberculosis or herpetic lesions on the breast** until treated, and a few **maternal drugs** including cytotoxics and radioactive isotopes.*\n\nSrc: L15.2 slide 23",
        "qs": []
      },
      {
        "id": "nut-13",
        "w": "must",
        "h": "Complementary feeding — the definitions, and what \"weaning\" means",
        "body": "**The WHO rule:** **exclusive breastfeeding until 6 months (180 days)** — *\"only breastmilk, no other liquids or solids, not even water, with the exception of necessary vitamins, mineral supplements or medicines.\"*\n\n**At six months:** complementary foods for the growing child’s increasing needs, **with continued breastfeeding until 2 years or beyond**.\n\n### Definition of complementary feeding\n- **What it is:** giving **other foods or energy containing fluids in addition to breast milk or formula**.\n- **What it is a process of:** the **transition from exclusive breast feeding to family foods**.\n- **When:** typically **6 to 24 months**.\n\n**⚠️ Weaning means CESSATION OF BREASTFEEDING** — not the introduction of solids. The lecture states this on its own line.\n\n### Timely — why six months\n- **The guideline:** *\"All infants should start receiving other foods in addition to breast milk from 6 months onwards.\"*\n- **Nutritional reason:** **nutritional gaps start to appear from 6 months** in exclusively breastfed infants.\n- **Developmental reason:** most infants are **developmentally ready** by this age.\n\n**Four readiness signs:** **upright sitting with minimal support** · **midline head held several minutes unsupported** · **vertical motion of the tongue** · **hand-to-mouth motor skills**.\n\nSrc: L15.2 slides 23–26",
        "qs": []
      },
      {
        "id": "nut-14",
        "w": "must",
        "h": "Complementary feeding — adequate, frequent, right texture",
        "body": "**Four named attributes:** **Timely · Adequate · Properly fed · Safe** — with **frequency, variety, texture** and **active responsive feeding** under them.\n\n**The nutritional gaps:** hardest to fill are **energy, iron, protein, vitamin A and zinc**.\n\n### Frequency\n\n|Age (months)|Energy from complementary feeds (kcal/day)|Meals/day|\n|---|---|---|\n|**6 – 8**|**200**|**2 – 3**|\n|**8 – 12**|**300**|**3 – 4**|\n|**12 – 24**|**550**|**3 – 4**|\n\n**Snacks:** a piece of fruit or bread, **1 – 2 times per day**.\n\n### Introducing a new food\n- **Pace:** **gradually, one at a time, every 3 to 7 days**.\n- **Who accepts more easily:** **breastfed infants**, compared with non-breastfed ones.\n\n### Texture — appropriate for the stage of development\n\n|Age|Texture|\n|---|---|\n|**6 m**|**Pureed, mashed and semisolid**|\n|**8 m**|**Finger foods**|\n|**12 m**|**Family foods**|\n\nSrc: L15.2 slides 25–29",
        "qs": []
      },
      {
        "id": "nut-15",
        "w": "must",
        "h": "Complementary feeding — variety, responsive feeding, safety",
        "body": "### Preparation — strainer, not blender\n- **Do not use a mixer or blender** for vegetable foods.\n- **Why:** it **transforms the food into a liquid form**, **unsuitable for training the baby to swallow semisolid foods**.\n- **Better:** use a **strainer**.\n\n### Variety\n- **What it means:** **eating a wide selection of foods within and among the major food groups**.\n- **The instruction:** **mind the gaps, go up slowly**.\n\n### Active responsive feeding\n- **Cues:** **responds to early hunger and satiety cues**.\n- **Control:** **allows the child to guide feeding**.\n- **Balance:** helping against **encouraging self-feeding**.\n- **Interaction:** **eye contact, touching, smiling and talking**.\n- **Distraction:** **minimized** during meals and feedings.\n- **Range:** offers different **food combinations, tastes, and textures**.\n\n**Two rules of patience:** children are **slow eaters** — **do not hurry the infant while eating**; and **do not be frustrated from mealtime mess**, **children learn out of mess**.\n\n**Why it matters:** **active feeding improves food ingestion and the infant’s nutritional status and development**.\n\n### Safe\n- **Handling:** foods must be **prepared, served, and stored safely**.\n- **Avoid:** foods that may cause **choking or allergy**.\n\nSrc: L15.2 slides 29–31",
        "qs": []
      }
    ]
  },
  "nutrition-pem": {
    "intro": "Protein energy malnutrition. The two classifications, marasmus against kwashiorkor and the findings that separate them, what to examine and measure, and the therapeutic feeds that treat it.",
    "sections": [
      {
        "id": "nut-16",
        "w": "must",
        "h": "Protein energy malnutrition — the two classifications",
        "body": "**Definition:** *\"a range of pathological conditions caused by deficiency of energy + proteins\"*, **usually accompanied by infection**, **most frequent in infants and young children**.\n\n*Severe forms are the visible tip; mild and moderate the submerged bulk.*\n\n### Wellcome classification\n**Weight here means:** the **% of the 50th centile of normal weight for age**.\n\n|Type of PEM|Weight|Oedema|\n|---|---|---|\n|**MILD — Underweight**|**60 – 80 %**|**–**|\n|**SEVERE — Marasmus**|**< 60 %**|**–**|\n|**SEVERE — Kwashiorkor**|**60 – 80 %**|**+**|\n|**SEVERE — Marasmic-kwashiorkor**|**< 60 %**|**+**|\n|**Normal**|**> 80 %**|**–**|\n\n*Oedema is what splits each weight pair.*\n\n### WHO classification\n\n|Criterion|Moderate malnutrition|Severe malnutrition|\n|---|---|---|\n|**Symmetrical oedema**|**No**|**Yes** — *oedematous malnutrition*|\n|**Weight-for-height**|**SD score −2 to −3**|**SD score < −3** — **severe wasting**|\n|**Height-for-age**|**SD score −2 to −3**|**SD score < −3** — **severe stunting**|\n\nSrc: L16 slides 2–5, incl. the image-only pp.8–9 recovered by render",
        "qs": []
      },
      {
        "id": "nut-17",
        "w": "must",
        "h": "The underweight child, and marasmus",
        "body": "### The underweight child (Wt 60 – 80 %)\n- **Growth failure:** weight **60 – 80 %**.\n- **Infection:** **GIT, chest, parasites**.\n- **Associated deficiencies:** vitamins, minerals.\n- **Anaemia:** **iron, folic and protein deficiency**.\n- **Retarded development.**\n- **Behaviour:** **apathy, restlessness, diminished activity**.\n\n### Marasmus — definition and causes\n**Definition:** a form of PEM occurring during the **first 3 years of life**, **usually the 1st year**.\n\n**Nutritional cause:** protein **plus** energy deficiency.\n\n**Non-nutritional causes:** **chronic kidney disease** · **chronic GIT disease and eating disorders** · **malignant disease** · **congenital heart disease** · **metabolic disorders** · **cerebral palsy**.\n\n### Marasmus — clinical features\n- **Growth failure:** weight **< 60 %**.\n- **Loss of subcutaneous fat.**\n- **Muscle wasting:** **limbs and abdomen**.\n- **On inspection:** **thin limbs**, **visible ribs**, a **triangular face**, redundant **skin folds**.\n- **Psychic changes:** **anxious, irritable, excessively crying, little sleeping**.\n- **Absent:** **no oedema · no dermatosis · no hair changes**, or only mild ones.\n\n**Consequences of PEM:** **impaired immunity** · **delayed wound healing** · **increased operative morbidity and mortality** · **permanent intellectual delay**.\n\nSrc: L16 slides 6, 10–13, 16, incl. the image-only p.15 recovered by render",
        "qs": []
      },
      {
        "id": "nut-18",
        "w": "must",
        "h": "Kwashiorkor, marasmic-kwashiorkor, and the discrimination",
        "body": "**Kwashiorkor means \"the one before the last\":** *\"the disease the first child gets when the 2nd one is on the way.\"*\n\n**Definition:** a **severe form of PEM** of the **weaning and post-weaning periods**, when the diet is **persistently deficient in essential proteins**.\n\n### ALWAYS present\n- **Growth failure:** by **weight** and by **mid-arm** circumference.\n- **Oedema WITH NO ASCITES.**\n- **Muscle wasting** and a **disturbed muscle / fat ratio**.\n- **Psychic changes:** apathy.\n\n### USUALLY present\n- **Hair changes:** **dry, uncurled, loss of lustre, pickable, discoloured**.\n- **Dermatosis.**\n- **Hepatomegaly.**\n\n**Marasmic-kwashiorkor:** weight **< 60 %** **and** oedema — the worst cell of the Wellcome grid.\n\n### Telling the two severe forms apart\n\n|Feature|Marasmus|Kwashiorkor|\n|---|---|---|\n|**Weight**|**< 60 %**|**60 – 80 %**|\n|**Oedema**|**Absent**|**Present, no ascites**|\n|**Age**|**First 3 years, usually 1st**|**Weaning / post-weaning**|\n|**Deficiency**|**Protein AND energy**|**Protein, persistently**|\n|**Subcutaneous fat**|**Lost**|Disturbed muscle/fat ratio|\n|**Hair**|**No change, or mild**|**Dry, uncurled, pickable, discoloured**|\n|**Dermatosis**|**Absent**|**Present**|\n|**Liver**|—|**Hepatomegaly**|\n|**Mood**|**Anxious, irritable, crying**|**Apathetic**|\n\nSrc: L16 slides 17–20, 24",
        "qs": []
      },
      {
        "id": "nut-19",
        "w": "high",
        "h": "PEM — clinical assessment and investigations",
        "body": "### 1 — History\n- **Nutritional history**, and a **dietary diary**.\n\n### 2 — Physical examination\n**The labelled signs:** **thin limbs**, **visible ribs**, **triangular face**, **skin folds** — and in kwashiorkor **oedema**, **dermatosis**, **hair change**.\n\n*The cached text jumps from step 1 to step 3; step 2 is a photograph slide — the gap is in the extraction, not the lecture.*\n\n### 3 — Anthropometric data\n- **Length / height:** use **percentile charts**.\n- **Weight:** **for age** and **for height**.\n- **Circumferences:** **head, chest and abdominal**.\n- **Mid-arm circumference:** **11.5 cm**.\n- **Others:** **skin fold thickness**.\n\n*The 11.5 cm figure is printed without its use. Not in course material: MUAC below 11.5 cm at 6–59 months defines severe acute malnutrition and is the standard community screening cut-off.*\n\n### Investigations\n- **Complete blood count + red cell indices.**\n- **Urine:** **urinalysis (pus cells) + culture**.\n- **Stool:** analysis for **ova and parasites**.\n- **Chest radiography.**\n- **Serum albumin** — **in kwashiorkor**.\n- **Specific vitamins and minerals.**\n- **Blood glucose.**\n\nSrc: L16 slides 28–30, incl. the image-only p.15",
        "qs": []
      },
      {
        "id": "nut-20",
        "w": "must",
        "h": "PEM — management, the therapeutic feeds, and the outcome",
        "body": "### Mild PEM — at home\n- **Infections and parasites:** treat them.\n- **Calories:** **100 – 150 kcal/kg/day.**\n- **Proteins:** **2 – 3 g/kg/day.**\n- **Vitamins:** **A, D, folic acid.**\n- **Minerals:** **iron**, and others.\n\n### Severe PEM — the WHO ten steps\n**Steps 1–6 — stabilize the life-threatening complications:** **hypothermia** · **hypoglycaemia and heart failure** · **dehydration** · **electrolyte disturbance** · **infections** · **correct micronutrient and vitamin deficiency**.\n\n**7 — Cautious initial feeding:** **little, frequent, isotonic feeds**; **do not exceed metabolic capacity**; **oral or NGT route**; **parenteral nutrition ONLY as a last resort**.\n\n*Caution guards against refeeding syndrome — the hypophosphataemia, hypokalaemia and hypomagnesaemia of an insulin surge on depleted stores (not in course material).*\n\n**Subsequent feeding:** **high-energy diet + vitamins + minerals**, plus **stimulation and emotional support**.\n\n**Steps 8–10:** **catch-up growth** · **stimulation, play and emotional support** · **follow up after recovery**.\n\n### The three therapeutic products\n- **Starter feed (\"75\"):** **low lactose, low protein, no fibre**, **0.75 kcal per 1 ml**, for **severely malnourished children 6 – 59 months**; **use under medical supervision**.\n- **Catch-up feed (\"100\"):** the **high-protein** formulation, once the child is stabilised.\n- **RUTF:** **ready to use therapeutic food**, in sachets, for **severe acute malnutrition**.\n\n### Criteria of cure\n- **Mood:** **changes disappear in a few days**.\n- **Appetite:** the child **starts to eat with increasing appetite**.\n- **Diarrhoea stops.**\n- **Oedema:** **INCREASES then disappears — 10 days**.\n- **Skin lesions:** **rapid healing in 10 days**.\n- **Weight:** **initial loss, then gain**.\n- **Recovery:** **return to normal health in 3 months**.\n\n### Failure to respond\n- **Feeding problems:** **inappropriate preparation**, **inadequate amounts**.\n- **Undiagnosed conditions:** **otitis media, TB, UTI**; **congenital, chronic and metabolic disease**.\n- **Psychological:** **emotional deprivation**.\n\nSrc: L16 slides 26–27, 31–32, 36–38, incl. the image-only pp.33–35 recovered by render",
        "qs": []
      }
    ]
  }
};
