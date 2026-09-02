/* Pediatrics ENDPOINT questions (Pediatrics endpoint part1.pdf).
   Kept apart from questions.peds.js (the House bank) so the two banks can be written by two
   chats at once without either touching the other's file. Same schema per question:
   id, module, chapter, bank, stem, options, answer, explanation, objective, source.
   `var`, not `const`: the aggregator reads these off `window`, so a missing
   file degrades to an empty list instead of throwing a ReferenceError. */
var Q_PEDS_EP = [
];
