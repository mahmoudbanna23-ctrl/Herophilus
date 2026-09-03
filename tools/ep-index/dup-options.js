/* Does any SHIPPED question carry the duplicated-option-line defect?
 *
 *     node tools/ep-index/dup-options.js
 *
 * WHY THIS EXISTS
 *   OCR on this corpus sometimes emits a whole option line twice -- seen on 3 of 9 sampled
 *   ophtho pages (p.100 repeated option B, p.400 option B, p.2100 option D with the page
 *   number fused to the first copy). A silent duplicate turns a 4-option question into a
 *   5-option one with a repeated distractor, which is a real content defect: it changes what
 *   the reader is asked, and if the repeat lands at or before the key it moves the answer.
 *
 *   Whether that is an OCR artifact or a defect in the printed page was left open, and the
 *   open question was written down as a risk to shipped content. But the risk is answerable
 *   without re-rendering a single page: if the defect ever survived transcription, the
 *   duplicate is still sitting in the shipped options array. Reading what shipped is cheaper
 *   than re-reading the source, and it answers the question that actually matters -- not
 *   "does the OCR do this" but "did it reach the app".
 *
 * WHAT IT CHECKS, over every bank at once
 *   exact      two options identical after trimming
 *   normalised two options identical after lowercasing and collapsing punctuation/space --
 *              catches a repeat that picked up a fused page number or a stray period
 *   near       two options whose normalised forms are prefixes of one another and differ by
 *              more than 3 characters -- catches a repeat that lost its tail to a line drop
 *
 *   A hit is a candidate, not a verdict: a bank may legitimately print two options that
 *   normalise together (an ophtho list of dioptre values, say). Every hit gets looked at.
 *
 * RESULT OF RECORD -- 2026-09-03, 4,591 shipped questions, all six arrays
 *   42 candidates: 3 exact, 11 normalised, 28 near. Every one was read; NONE is a defect.
 *
 *     exact       3, all ophtho, ALL THREE ALREADY DOCUMENTED AS PRINTED DEFECTS.
 *                 opmcq-c14-5 and opmcq-c14-7 carry "the bank prints options A and D
 *                 identically" in `source`. opqb-t16-693 (B and C both "Patching the right
 *                 eye") documents it at length in `explanation`. p.110 of `ophthalmology
 *                 qb.pdf` was RE-RENDERED AND RE-READ on 2026-09-03 by an independent
 *                 subagent that was given no access to our data: it read A/B/C/D/E and
 *                 confirmed B and C identical on the page, key "Correct Answer: B".
 *     normalised  the normaliser strips characters this material needs -- "- lenses" vs
 *                 "+ lenses" (opqb-t2-101) and "<3/60" vs "= 3/60" (opmcq-c1-27) collapse
 *                 together once punctuation goes. The options differ; the CHECK is blunt.
 *                 Read the raw text, never the normalised form, before calling anything.
 *     near        legitimate ladder distractors -- "Myringotomy" against "Myringotomy with
 *                 insertion of grommet tube". The bank builds questions this way on purpose.
 *
 *   ⚠️ SO THE DUPLICATED-OPTION-LINE CLASS IS CLOSED, AND THE ANSWER IS THE OPPOSITE OF THE
 *   ONE FEARED. It was logged as "unresolved: OCR artifact or printed defect?" and treated as
 *   a silent risk to shipped content. It is a PRINTED DEFECT, it was seen by the human
 *   transcriber every time, and it was recorded rather than corrected -- which is exactly what
 *   the project's own rule demands. Zero defects reached the app from this class. The check
 *   that mattered was already in place: a person looks at the page.
 *
 *   Re-run this after any content batch. It is seconds, it needs no render, and a NEW exact
 *   hit that carries no note in `source` or `explanation` is the thing to chase.
 *
 *   Reads only. Writes nothing, touches no PDF.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DATA = path.join(__dirname, '..', '..', 'app', 'data');

// The data files are classic scripts that assign `var Q_...` -- there is no module system to
// hook, so run them in a sandbox and read the globals back off it. Load order does not matter
// here: each subject file is self-contained and the aggregators are not needed.
const sandbox = { window: {} };
vm.createContext(sandbox);

const files = fs.readdirSync(DATA).filter(f => /^questions\./.test(f));
for (const f of files) {
  try {
    vm.runInContext(fs.readFileSync(path.join(DATA, f), 'utf8'), sandbox, { filename: f });
  } catch (e) {
    console.log('!! %s did not parse: %s', f, e.message);
  }
}

const norm = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

let questions = 0, withOpts = 0;
const hits = [];

for (const [name, val] of Object.entries(sandbox)) {
  if (name === 'window' || !Array.isArray(val)) continue;
  for (const q of val) {
    if (!q || typeof q !== 'object' || !q.id) continue;
    questions++;
    const opts = q.options || q.opts;
    if (!Array.isArray(opts) || opts.length < 2) continue;
    withOpts++;

    const n = opts.map(norm);
    for (let i = 0; i < opts.length; i++) {
      for (let j = i + 1; j < opts.length; j++) {
        let kind = null;
        if (String(opts[i]).trim() === String(opts[j]).trim()) kind = 'exact';
        else if (n[i] === n[j]) kind = 'normalised';
        else if (n[i] && n[j] && (n[i].startsWith(n[j]) || n[j].startsWith(n[i]))
                 && Math.abs(n[i].length - n[j].length) > 3) kind = 'near';
        if (kind) hits.push({ src: name, id: q.id, kind, i, j, a: opts[i], b: opts[j],
                              answer: q.answer });
      }
    }
  }
}

console.log('scanned %d questions across %d arrays; %d carry an options list\n',
            questions, files.length, withOpts);

if (!hits.length) {
  console.log('NO duplicated option pairs in shipped content -- exact, normalised or near.');
  console.log('The defect exists in the OCR text but never survived transcription.');
} else {
  for (const h of hits) {
    console.log('%s  %s  [%s]  options %d and %d  (key=%s)',
                h.kind.toUpperCase().padEnd(10), h.id, h.src, h.i, h.j, h.answer);
    console.log('    %d: %s', h.i, h.a);
    console.log('    %d: %s', h.j, h.b);
  }
  console.log('\n%d candidate pair(s) -- LOOK AT EACH PAGE. A hit is not automatically a defect.',
              hits.length);
}
