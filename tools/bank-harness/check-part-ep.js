// Parse-check ONE endpoint staging half while it is being written.
//   node tools/bank-harness/check-part-ep.js content/peds/qb-pages/endpoint-s05-emergencies.part-A.js
//
// Why this exists: a staging half is a sequence of BARE `{ … }` fragments separated by one blank
// line, with no array wrapper -- so `node --check` on it always fails with "Unexpected token ':'"
// (it reads `{ n:1, …` as a block with a label). The staging brief's "node --check after every
// append" is therefore unusable on a half, and a drafting agent that believes the failure will
// start repairing a file that is fine. This runs the SAME parse merge-parts-ep.js will run,
// so a pass here is the merge's own verdict, one page at a time instead of at the end.
//
// Written with the Write tool: the Bash heredoc collapses \\ to \ and would eat the escapes.
const fs = require('fs');
const NL = String.fromCharCode(10);
const BLANK = NL + NL;

const p = process.argv[2];
if (!p) { console.error('usage: node check-part-ep.js <path to a .part-X.js>'); process.exit(2); }

const raw = fs.readFileSync(p, 'utf8').trim();
if (!raw) { console.error('EMPTY FILE -- write the header and the first entry before checking'); process.exit(1); }

const body = raw.split('}' + BLANK + '{').join('},' + BLANK + '{');
let arr;
try { arr = (new Function('return [' + body + ']'))(); }
catch (e) { console.error('DOES NOT PARSE: ' + e.message); process.exit(1); }

const fail = [];
const warn = [];
const seenN = new Set(), seenP = new Set();
arr.forEach(q => {
  const at = 'n=' + q.n + ' (p.' + q.p + ')';
  if (typeof q.n !== 'number') fail.push(at + ': n is not a number');
  if (typeof q.pr !== 'number') fail.push(at + ': pr is not a number');
  if (typeof q.p !== 'number') fail.push(at + ': p must be the numeric PDF page');
  if (seenN.has(q.n)) fail.push(at + ': n repeats'); seenN.add(q.n);
  if (seenP.has(q.p)) fail.push(at + ': page repeats'); seenP.add(q.p);
  if (!Array.isArray(q.opts) || q.opts.length < 2) fail.push(at + ': ' + ((q.opts || []).length) + ' options');
  // key is a ZERO-BASED index into opts, never a letter. A 1-based half passes every later
  // check in the harness and drafts every answer one option too far.
  if (typeof q.key !== 'number') fail.push(at + ': key is not numeric -- 0-based index, never a letter');
  else if (q.key < 0 || q.key >= (q.opts || []).length) fail.push(at + ': key ' + q.key + ' out of range 0..' + ((q.opts || []).length - 1));
  if (typeof q.stem !== 'string' || q.stem.length < 15) fail.push(at + ': stem missing or too short');
  if (typeof q.expl !== 'string') fail.push(at + ': expl must be a string ("" where the page prints no box)');
  // A printed letter prefix ("A. Cough") is a transcription slip and every option of the entry
  // carries one, because the page prints the whole lettered list the same way. A SINGLE option
  // matching this pattern is far more likely to be real content: "E. coli" is a genuine option on
  // p.521 of part 2 section 5, and stripping it would have produced the option "coli". So two or
  // more in one entry is the slip and fails; exactly one is reported and left for a human to look
  // at, because no regex can tell an abbreviated genus from a list letter.
  const prefixed = (q.opts || []).map((o, k) => (/^[A-Ja-j][.)]\s/.test(o) ? k : -1)).filter(k => k >= 0);
  if (prefixed.length >= 2) {
    fail.push(at + ': opts ' + prefixed.map(k => k + 1).join(', ') + ' carry printed letter prefixes, strip them');
  } else if (prefixed.length === 1) {
    warn.push(at + ' opt ' + (prefixed[0] + 1) + ': starts like a list letter -- ' +
      JSON.stringify(q.opts[prefixed[0]]) + '. Real content (e.g. "E. coli") or a stray prefix? Look at the page.');
  }
  if (q.fig && !q.figAlt) fail.push(at + ': fig without figAlt');
});
for (let i = 1; i < arr.length; i++) {
  if (arr[i].p <= arr[i - 1].p) fail.push('page order breaks at n=' + arr[i].n + ': p.' + arr[i].p + ' follows p.' + arr[i - 1].p);
  if (arr[i].n !== arr[i - 1].n + 1) fail.push('n is not contiguous at n=' + arr[i].n + ' after n=' + arr[i - 1].n);
}

console.log(p.split('/').pop() + ': ' + arr.length + ' entries, n ' + (arr[0] || {}).n + '..' + (arr[arr.length - 1] || {}).n +
  ', pp.' + (arr[0] || {}).p + '-' + (arr[arr.length - 1] || {}).p);
console.log('option counts: ' + JSON.stringify(arr.reduce((m, q) => { m[(q.opts || []).length] = (m[(q.opts || []).length] || 0) + 1; return m; }, {})));
console.log('key positions: ' + JSON.stringify(arr.reduce((m, q) => { m[q.key] = (m[q.key] || 0) + 1; return m; }, {})));
console.log('no printed box (expl:""): ' + (arr.filter(q => q.expl === '').map(q => 'n' + q.n).join(' ') || 'none'));
console.log('pr != n: ' + (arr.filter(q => q.pr !== q.n).map(q => 'n' + q.n + ' prints ' + q.pr).join(', ') || 'none'));
console.log('figures: ' + (arr.filter(q => q.fig).map(q => 'n' + q.n).join(' ') || 'none'));

if (warn.length) { console.log(NL + 'LOOK AT THESE (not failures):'); warn.forEach(w => console.log('  ' + w)); }
if (fail.length) { console.error(NL + 'FAILED:'); fail.forEach(f => console.error('  ' + f)); process.exit(1); }
console.log(NL + 'OK');
