/* Neuropsychiatry free-text cases — vignette + diagnosis, no options.
   Used where a bank prints a case with a written answer rather than an MCQ;
   forcing those into the MCQ schema would mean inventing distractors, which is
   authoring. Schema and grading rules: CLAUDE.md §4 "Free-text cases".
   Concatenated into QUESTIONS by data/questions.js, so the quiz engine, SRS,
   search and progress counters pick them up with no special casing.

   `var`, not `const`: the aggregator reads this off `window`, so an empty or
   missing file degrades to an empty list instead of throwing a ReferenceError. */
var C_NEURO = [
];
