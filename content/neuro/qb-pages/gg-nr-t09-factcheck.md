# Topic 09 "Coma" — draft-A fact-check findings

**What this is.** A read-only fact-check of `gg-nr-t09.draft-A.js` (Grade Gain neurology,
`npqb-nr-177` … `npqb-nr-187`), run 2026-09-09 by a Claude subagent that did not write the draft.
Its report file lived in the session scratchpad and was lost with it; this record is rebuilt from
the checker's final message as relayed in the work chat. Written down 2026-09-15.

**The draft it checked** was the file as it stood on 2026-09-09, before any fix pass. A later
fix-and-expand agent died mid-edit on the weekly usage limit, and the drafts were then committed as
work in progress (`89f2189`). **Whether any of the five fixes below landed is NOT known** — the
review pass must check each one against the current file.

## Cleared — no change

- **Q182, `Müller's muscle`.** The draft says ptosis in Horner's syndrome comes from "loss of
  sympathetic tone to Müller's muscle rather than the levator". Correct: Müller's muscle is the
  superior tarsal muscle, sympathetically innervated, and this is the standard mechanism, correctly
  contrasted with the levator ptosis of a CN III palsy. It was queried because the eponym looked
  out of place; it is right.
- **Clinical content.** Every checkable claim in all 11 entries was marked confirmed: GCS mechanics
  and bands, brain-death criteria, pupil localisation, corneal and gag reflex arcs, locked-in
  syndrome versus persistent vegetative state, spinal-reflex sparing, opioid pinpoint pupils. The
  file states no drug, dose or timing.

## The five findings — provenance, not medicine

The facts at all five places were judged correct. What is wrong is what they are attributed to.

1. **Q181 — false internal cross-reference.** The explanation says GCS 3 was "discussed… in Q179's
   brain-death context". Q179 never mentions a GCS score. Fix: remove the reference; state the
   point directly or point at an entry that actually makes it.
2. **Q187 — citation that does not contain the fact.** The oculocephalic (doll's-eye) reflex
   explanation rides on the `L8) Cranial nerves.txt` citation used for the corneal and gag arcs.
   `L8` never mentions the oculocephalic reflex (grepped, no hit), and the claim carries no
   `not taken from the course material` tag. Fix: keep `L8` for what it covers; tag the doll's-eye
   content as outside knowledge.
3. **Q182 — untagged outside knowledge.** The opening sentence's `L8` citation is correct. The rest
   of that paragraph — the aneurysm / uncal-herniation mechanism and the "down and out" eye — is
   outside knowledge with no tag. Fix: tag it. ⚠️ The checker wrote the aneurysm as "PCA-aneurysm".
   CN III compression is classically a **posterior communicating** artery aneurysm; if the draft
   itself says *posterior cerebral* artery, that is a clinical error the checker passed. The review
   pass must read the draft's exact wording.
4. **Q178 — claim folded into a citation that does not make it.** "The territory involved is not
   one that recovers on its own once infarcted" sits inside an `L10) Stroke.txt` citation that does
   not say this. Fix: separate the claim from the citation and tag it. Q178 is boxed — the fix
   applies to authored prose around the quoted box, never inside it.
5. **Q177 — untagged, uncited.** The bilateral paramedian thalamic lesion claim carries neither a
   citation nor a tag. Fix: tag it.

The tag rule (owner ruling 2026-08-04, Herophilus only): a gap in the material is answered from
general medical knowledge with `not taken from the course material` as a short tag on the claim —
never a dead-end sentence. A citation to a lecture that does not contain the fact is worse than an
honest tag.
