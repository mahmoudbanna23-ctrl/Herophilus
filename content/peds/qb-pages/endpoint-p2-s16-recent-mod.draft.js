/* Peds endpoint PART 2, section 16 "Recently modified Questions", pp.1923-1940.

   THIS ARRAY IS EMPTY ON PURPOSE. All 18 staged questions are reprints of entries already live in
   app/data/questions.peds.ep2.js, so the section adds nothing to the bank and drafts nothing. The
   citations were written onto the 18 live entries by tools/bank-harness/reprint-s16-s17-pd-ep2.js;
   the verdict for every one of the 18, and the field-by-field comparison behind it, is in
   endpoint-p2-s16-s17-fold-adjudication.md.

   ⚠️ An empty draft here is the correct outcome, not a failed drafting pass. It is the only such
   section in this stream, and it is what the section's own name promises. val-pd-ep2.js and
   splice-pd-ep2.js both carry `folded: [1…18]` for section 16, which is how they are told that
   every staged entry was deliberately not drafted.

   ⚠️ n11 (p.1933) is in that folded list only because it was run down by hand. The duplicate sweep
   returned no candidate for it at any threshold; grepping the sign rather than the disease found
   pedep2-car-19, whose source already recorded the same variant at p.1763. Adding a fifth option
   and shortening the key text is enough to push a real reprint under a similarity threshold. */
var PEDEP2_S16_RECENT_MOD_DRAFT = [
];
