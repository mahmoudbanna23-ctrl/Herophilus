# Refute: section 3 orbit draft — PASS

## Check 1 — box warning cause
Mechanically as builder said: validator's `quoted` = only the `> ` lines; compared
against `norm(s.expl)` = the WHOLE staged field. Confirmed for all 9 rows (n1-7,9,10):
staged `expl` starts `"**The endpoint file prints this explanation:** > ..."`, quoted
starts with the bare sentence — diverges at char 0 every time.
But builder's conclusion ("validator design, nothing to fix") is wrong. Section 2's
staging (`oph-ep-p1-s02...array.js`) stores `expl` as the BARE box quote only, no
lead/marker — that's what makes section 2 give 0 warnings on the same validator.
Section 3's staging stores the FULL wrapped markdown in `expl`, breaking the shape
the validator (and s02) assume. **Real defect is in
`content/ophtho/qb-pages/oph-ep-p1-s03-orbit.array.js`** (the "final, image-verified"
staging file): its `expl` field for n1-7,9,10 should hold only the verbatim box text,
matching s02's convention — not lead+quote+marker. Fix: strip the lead line and the
closing `*The expansion...*` marker from `expl` in array.js, leaving the bare quote.

## Check 2 — duplicates
| pair | shape | token | verdict |
|---|---|---|---|
| n:4/n:7 | boxed second printing (identical stem/opts/key, box text differs by one clause: "gums" vs "upper teeth") | `upper teeth` — real, present in n:7's own box | FOLD-eligible shape; builder deferred to PAIR (no adjudication authority yet for this section, matches val comment "no ophthalmology folds adjudicated"). Not a defect, but flag it as unresolved, per builder's own caveat. |
| n:9/n:19 | exact reprint (identical stem, opts+order, key 3; n:9 boxed, n:19 not) | none — box status is the only difference, not textual | same as above: FOLD-eligible, deferred to PAIR |
| n:9/n:14 | shared menu, not reprint (stems differ) | `the floor > medial wall > lateral wall > roof ranking` — present in n:14 | PAIR, correct |
| n:14/n:19 | shared menu, not reprint (stems differ) | tokens distinct per-row, both present | PAIR, correct |
All pointer sentences verified true to their own row's text (tokens actually appear there).

## Check 3 — draft integrity
PASS. 21 entries, 0 holes, ids unique, answer==key, options equal array (count+text),
source page == staged `p`, chapter valid for all 21 (script-verified via vm, not grep).
0 `\r`. 12 unboxed explanations match `expl-unboxed.md` byte-for-byte after removing
only the templated pointer sentence (n:12,14,15,19); n:8,11,13,16-18,20,21 exact match.
Boxed rows: lead→quote→marker order holds; n:7 inserts the pointer sentence between
quote and marker (marker still last) — a shape with no s1/s2 precedent, builder flagged
this honestly, not a violation of "marker last."

No blocking defects found. **One real finding**: check 1's root cause is in
`oph-ep-p1-s03-orbit.array.js`, not "validator design" as builder's report claims —
escalate before that file is edited (brief says array.js is not to be touched).
