# Rework 2 of the section 17 draft — TRIM to what the sources state, no process language

Working root: `D:\claude os\Medical school\Herophilus`. Read `content/ophtho/qb-pages/oph-ep-codex-s17-draft.brief.md` and
`content/ophtho/qb-pages/oph-ep-codex-s17-rework.brief.md` first; every rule in them still binds. The second draft passed the validator but two independent
reviews found unsourced embellishment, padding and process language. This pass is mostly DELETION.

## Write grant

Rewrite ONLY `content/ophtho/qb-pages/oph-ep-p1-s17-malignancies-eye-adnexa.draft.js` (same `var OPHEP_S17_DRAFT`, 12 entries, same ids/stems/options/answers/
sources/objectives, same two markers). Nothing else. No git. Edit the existing file (`Edit`, or `Write` the whole file); never a shell heredoc.
Run `node tools/bank-harness/val-oph-ep.js --part 1 17` before you report.

## The rule for this pass

Every authored clinical sentence must be supported by a line in `content/ophtho/lectures/L24) Ocular tumors..txt`, `content/ophtho/lectures/L5) Eyelid disease.txt`,
`content/ophtho/book/ch17-malignancies.txt`, `content/ophtho/book/ch16-paediatric.txt` or `content/ophtho/book/ch05-eyelids.txt`. Open the lines. If you cannot find
the line, DELETE the sentence. Do not add outside knowledge; the only tagged claims allowed are the ones listed below. Length follows the sourced content: about
150-300 words of authored text for recall rows, up to about 400 for n:5, n:6, n:8. Shorter and sourced beats longer and padded. No closing summary sentence. No
treatment paragraph unless a source states that treatment.

The text a reader sees must read as teaching, never as bookkeeping. BANNED phrases and ideas inside any explanation: "option menu", "menu", "stem frame", "option
family", "family (a)", "family (c)", "anchor", "foundational", "discriminating token(s)", "key letter", "index", "straight-recall", "this question", "this row",
"course sources", "every statement", "PRIMARY" in capitals, "five-option", "four-option". Write each cross-reference as an ordinary sentence that keeps the plain-text
id, for example: "Compare ophep-malignancies-eye-adnexa-3, the same question asked about adults: there the answer is choroidal melanoma." Name what differs in words
(the age, the site, the tumour), never as a token.

The `answer` never moves. Marker rules unchanged: boxed rows keep the box lines verbatim; each marker appears once, last.

## Per-row fixes (all checked against the sources)

n:1 — Keep only: retinoblastoma arises from primitive retinal cells; about 90 % are diagnosed under 3 years; leukocoria (about 60 %), strabismus such as esotropia
(about 20 %), secondary glaucoma, buphthalmos, ocular inflammation, proptosis from orbital extension; a neglected tumour can extend into the orbit and mimic cellulitis
(L24:393-396). "Pain" is in no source as a retinoblastoma feature: keep the printed box's wording only inside the quoted box, and do not add pain yourself. Drop the
invented list of orbital-cellulitis and cavernous-sinus features; the only sourced fact is orbital venous congestion (ch05:812). Congenital cataract DOES present with
leukocoria (ch16:277, sourced, no tag); the clause that a cataract does not cause pain or proptosis is outside knowledge: keep it once, with the tag
`(not taken from the course material)` immediately after that clause and nowhere else.

n:2 — Melanoma is "less common" (ch17:186): drop "rare pigmented". Say "grows slowly" only because the printed box says it; keep the sourced site (nasal lower lid, medial
canthus), destruction/ulceration/bleeding/loss of lashes, SCC upper lid + lateral canthus, sebaceous carcinoma facts. Rewrite the pointer sentence as ordinary prose:
compare ophep-malignancies-eye-adnexa-10, the same question with a wider list of tumours that includes retinoblastoma and choroidal melanoma, which are not eyelid tumours.
Delete the treatment sentence unless ch17:105-106 supports it (it does: excision and reconstruction; no tag).

n:3 — Say PRIMARY in ordinary lower case. Keep secondaries: they are the commonest intraocular malignancy overall (ch17:73) but not primary; "mostly" belongs where
ch17:225 says it. Explain retinoblastoma, basal cell carcinoma and squamous cell carcinoma EACH in its own sentence (three sentences, not one lump).

n:4 — Delete the sentence claiming a 6-year-old sits "slightly outside" the peak (unsourced; keep only that 90 % are under 3 years, ch L24:357). Say "uveal tract
tumours" where ch17:221 says it, not "uveal malignancies". One sentence each for choroidal melanoma, squamous cell carcinoma, basal cell carcinoma. Replace
"shares option menu characteristics" with an ordinary pointer to ophep-malignancies-eye-adnexa-3 (same tumours asked about adults).

n:5 — Delete "over weeks to months", delete "the hallmark of nodular and ulcerative", delete "excellent local tumor control" and the closing sentence about function and
aesthetics, delete the "foundational anchor for option family (a)" sentence. Keep excision with reconstruction only if ch17:105-106 supports it (no tag). The row has NO
tagged claim now. SCC: flaky, keratin, everted edges, upper lid + lateral canthus. Sebaceous carcinoma: seventh and eighth decades, upper lid more common, masquerades as
chronic blepharitis/recurrent chalazion/chronic conjunctivitis. Retinoblastoma: a child, intraocular. End with a natural pointer such as: "The same four tumours are
asked again in ophep-malignancies-eye-adnexa-8 (a child with leukocoria) and ophep-malignancies-eye-adnexa-10 (the most common eyelid malignancy)."

n:6 — Cut to about 250-350 authored words. Keep: sebaceous carcinoma arises from meibomian glands and glands of Zeis; seventh and eighth decades; upper lid more
common; masquerades as chronic unilateral blepharitis, recurrent chalazion or chronic conjunctivitis; the conjunctivitis should be "properly evaluated" for it
(ch17:176-177); a recurrent chalazion needs a biopsy (ch17:174-175, ch05:368-370); it metastasises easily (ch17:166) so do NOT call it localized. DELETE: "potentially
lethal", "increases the risk of metastasis", "improving survival", "rigorous follow-up", "course sources", every sentence that repeats an earlier one, and the whole
excision/frozen section/Mohs/pagetoid/mapping-biopsy paragraph and its tag. This row has NO tagged claim. Explain the three distractors as three separate
sentences: (a) treat the conjunctivitis only, (b) look for a systemic illness, (d) symptomatic treatment.

n:7 — Delete "Every statement correctly specifies PRIMARY..." and replace the sentence about the shared stem with an ordinary pointer to ophep-malignancies-eye-adnexa-3 (same
question asked of adults, without the option of secondaries). Keep the point that secondaries are the commonest intraocular malignancy overall (ch17:73) but are
not primary: that is the reason the fifth option is wrong. "Metastasis to the liver": check the source wording (ch17:225 "mostly"); remove "hematogenous" unless a
source uses it. Squamous cell carcinoma and basal cell carcinoma: two separate sentences.

n:8 — Replace "primitive neuroectodermal tumors in the pineal or parasellar regions" with what the lecture says (L24 slide 23: ectopic intracranial retinoblastoma);
delete "essential for staging and management"; delete "occurring in adults" and "slow-growing"; remove the tag on the hereditary sentence, because bilateral/multifocal
and sibling screening ARE sourced (ch16:327, 343; ch17:253). The row has NO tagged claim now. Replace the "belongs to option family (a)... five-option menu structure..."
sentence with ordinary pointers: "Compare ophep-malignancies-eye-adnexa-4, the same tumour in a 6-year-old, and ophep-malignancies-eye-adnexa-5, where the same four
lid tumours are asked about an adult with a lid ulcer." Keep the four distractors, one sentence each.

n:9 — Delete "straight-recall", "four-option", "adult-versus-child stem frame". Ordinary pointer: compare ophep-malignancies-eye-adnexa-7 and
ophep-malignancies-eye-adnexa-3, the same question asked about adults (there the answer is choroidal melanoma). One sentence each for choroidal melanoma, squamous cell
carcinoma and basal cell carcinoma.

n:10 — Delete "key letter B (index 1)" and "belongs to option family (a)". Keep pointers as ordinary prose to ophep-malignancies-eye-adnexa-2 (same question, shorter list
of tumours, includes malignant melanoma) and ophep-malignancies-eye-adnexa-5 (the same four eyelid tumours in a case). Keep the sentence that retinoblastoma and
choroidal melanoma are intraocular, not eyelid tumours.

n:11 — Give a reason for each wrong option in ordinary words: "upper lid and medial canthus" pairs SCC's upper lid with BCC's medial canthus; "lower lid and medial
canthus" is the site the sources give for basal cell carcinoma; "lower lid and lateral canthus" pairs BCC's lower lid with SCC's lateral canthus, and neither tumour is
described at that combination. Delete "option family (c)" and "tumor type and exact eyelid subsite" bookkeeping; the pointer to ophep-malignancies-eye-adnexa-12 becomes an
ordinary sentence ("Compare ophep-malignancies-eye-adnexa-12, the same question for basal cell carcinoma").

n:12 — "Temporal part of upper lid" must NOT be called "uncommon": the upper lid and lateral canthus is the SCC site (ch17:120), which is why it is wrong for basal cell
carcinoma. Delete "slow-growing" and "option family (c)". Keep the ordinary pointer to ophep-malignancies-eye-adnexa-11. One sentence each for the three distractors.

## Report

Under 150 words: row count, the id of any row still carrying a tag (expected: only ophep-malignancies-eye-adnexa-1), and the validator's final lines verbatim.
