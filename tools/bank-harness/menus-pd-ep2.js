/* Which questions in a staged part-2 section SHARE AN OPTION MENU.
 *
 *     node tools/bank-harness/menus-pd-ep2.js <staged.array.js>
 *
 * WHY THIS EXISTS
 *   val-pd-ep2.js already derives this and prints it -- but only once a DRAFT exists to
 *   validate, which is too late. The shared-menu list has to be in the drafting task prompt,
 *   because the brief's anchor/sibling rule is the single biggest lever on explanation
 *   length: one entry carries the full table, each sibling stays short and points at it.
 *
 *   Measured 2026-09-04 on section 1: both staging agents reported the shared menus they
 *   noticed, and between them they named three -- all in the first half. The array actually
 *   contains SIX. The three they missed were entirely inside the second half, whose drafting
 *   prompt was then written saying it had none. That prompt was wrong, and the error was
 *   avoidable: the information was in the merged array before either prompt was written.
 *
 *   An agent reports what it noticed. This reports what is there. Run it on the merged array
 *   BEFORE writing either half's drafting prompt.
 *
 * HOW IT GROUPS
 *   Two questions share a menu when their option arrays are equal after lowercasing,
 *   collapsing whitespace, trimming and SORTING. Sorting is deliberate: "reordered, which
 *   moves the key letter" is one of the six recognised fold shapes, and an order-sensitive
 *   detector is blind both to that shape and to the pairing. Byte-for-byte the same key that
 *   val-pd-ep2.js uses, so the two always agree.
 *
 * ⚠️ A SHARED MENU PAIRS QUESTIONS. IT NEVER FOLDS THEM.
 *   Same ladder, and sometimes the same key too -- section 1's n15/n16/n17 share a menu and
 *   two of the three share a key. They are still three different questions. The discriminating
 *   clinical token is the whole of the difference, and a drafter who cannot name it has
 *   matched a template rather than understood the pair. Naming it is the job; folding is not
 *   on the table.
 */
'use strict';
const fs = require('fs');
const vm = require('vm');

const path = process.argv[2];
if (!path) {
  console.error('usage: node tools/bank-harness/menus-pd-ep2.js <staged.array.js>');
  process.exit(2);
}
if (!fs.existsSync(path)) { console.error('no such file: ' + path); process.exit(2); }

vm.runInThisContext(fs.readFileSync(path, 'utf8'), { filename: path });
const varName = Object.keys(globalThis).find(k => /^PEDEP2_S\d+_STAGED$/.test(k));
if (!varName) { console.error(path + ' declares no PEDEP2_S<nn>_STAGED array'); process.exit(2); }
const S = globalThis[varName];

// Identical to val-pd-ep2.js's derivation -- keep the two in step if either changes.
const menus = new Map();
S.forEach(s => {
  const k = JSON.stringify(s.opts.map(o => String(o).toLowerCase().replace(/\s+/g, ' ').trim()).slice().sort());
  if (!menus.has(k)) menus.set(k, []);
  menus.get(k).push(s.n);
});
const shared = [...menus.values()].filter(g => g.length > 1).map(g => g.slice().sort((a, b) => a - b));

console.log(varName + ': ' + S.length + ' entries, ' + (shared.length || 'no') + ' shared menu'
  + (shared.length === 1 ? '' : 's'));
if (!shared.length) {
  console.log('\nNo pairings. Say so in both drafting prompts -- a stated zero is worth more than');
  console.log('silence, because silence reads as "not measured".');
  process.exit(0);
}

shared.sort((a, b) => a[0] - b[0]).forEach(g => {
  const anchor = g[0];
  const rows = g.map(n => S.find(s => s.n === n));
  console.log('\n  n:' + g.join(', n:') + '  -> anchor n:' + anchor);
  console.log('  ladder: ' + JSON.stringify(rows[0].opts));
  rows.forEach(s => {
    const keyText = s.opts[typeof s.key === 'number' ? s.key : 'ABCDEFGHIJ'.indexOf(s.key)];
    console.log('    n:' + s.n + '  p.' + s.p + '  key ' + s.key + ' = ' + JSON.stringify(keyText)
      + '\n        ' + String(s.stem).replace(/\s+/g, ' ').slice(0, 110));
  });
  const keys = new Set(rows.map(s => String(s.key)));
  if (keys.size < rows.length)
    console.log('    ⚠ two or more of these share a KEY as well as a menu -- name the discriminating'
      + '\n      clinical token for each, or you have matched a template.');
});

// Which half each group lands in is what decides whether one drafting prompt can own it.
const spans = shared.filter(g => g.length > 1);
console.log('\nSPLIT CHECK -- a group straddling the A/B handover cannot be anchored by either half');
console.log('alone, so either move the split or give both prompts the same anchor id.');
spans.forEach(g => console.log('  n:' + g.join(', n:') + '  -> spans n' + g[0] + '..n' + g[g.length - 1]));
