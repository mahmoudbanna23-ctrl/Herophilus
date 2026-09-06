// reprint-map-s14-pd-ep2.js -- generate content/peds/qb-pages/endpoint-p2-s14-reprint-map.md.
//
// The map used to be written by hand, and the resume brief said to "regenerate it from its
// generator"; there was no generator.  This is it.  Prose lives in the template beside the output
// (endpoint-p2-s14-reprint-map.tpl.md); every number, every count and every per-row block is
// measured here from three sources that cannot drift from each other:
//
//   - reprint-s14-pd-ep2.js   -- PLAN, MARKS, EXAM (sliced out as data, never executed as a pass)
//   - the staging array       -- endpoint-p2-s14-mfe3.array.js
//   - the two live bank files -- questions.peds.ep2.js and questions.peds.ep.js
//
// The merged-vs-opened split is re-derived rather than remembered: for each row the clause is
// located inside the target's live source, and the two characters in front of it say which shape
// mergeCitation chose ("; " merged into an existing parenthetical, " (" opened a new one).
//
// Dry run by default; --write to overwrite the map.
const fs = require('fs'), vm = require('vm');
const R = 'D:/claude os/Medical school/Herophilus/';
const D = R + 'app/data/';
const QB = R + 'content/peds/qb-pages/';
const H = R + 'tools/bank-harness/';
const WRITE = process.argv.includes('--write');
const TPL = QB + 'endpoint-p2-s14-reprint-map.tpl.md';
const OUT = QB + 'endpoint-p2-s14-reprint-map.md';

// Part 1's own Model Final Exam 1 ran 30 reprints of 80.  It is the one comparator that lives in
// another chat's stream and cannot be measured from this file's inputs, so it is carried here as a
// named constant rather than smuggled into the prose as if it had been measured.
const PART1_MFE1_REPRINTS = 30;

// ---- PLAN, MARKS and EXAM, sliced out of the pass as data ------------------------------------
// The pass is a script, not a module.  Slicing from `const R =` to the `];` that closes PLAN takes
// exactly the declarations and nothing that writes a file, so there is one source of truth for the
// plan and no second copy of it to fall out of step.
function loadPass() {
  const src = fs.readFileSync(H + 'reprint-s14-pd-ep2.js', 'utf8');
  const from = src.indexOf("const R = ");
  const planAt = src.indexOf('const PLAN = [');
  if (from === -1 || planAt === -1) throw new Error('reprint-s14-pd-ep2.js does not have the shape this generator slices');
  const end = src.indexOf('\n];', planAt);
  if (end === -1) throw new Error('PLAN is not closed by a line-initial "];"');
  const frag = src.slice(from, end + 3);
  return new Function(frag + '\nreturn { EP1: EP1, EP2: EP2, EXAM: EXAM, EXPECTED: EXPECTED, PLAN: PLAN, MARKS: MARKS, STAGING: STAGING, SVAR: SVAR };')();
}

// The same clause builder the pass uses.  Kept identical on purpose: if the two ever diverge the
// clause will not be found in the live source and this generator stops, which is the failure we
// want rather than a map that quietly describes a clause nobody wrote.
function clauseFor(G, F) {
  const where = F.file === G.EP1
    ? 'reprinted in Pediatrics endpoint part2.pdf, ' + G.EXAM + ', p.' + F.p
    : 'reprinted in ' + G.EXAM + ', p.' + F.p;
  if (!F.tail) return where;
  return where + (F.sep === ';' ? '; ' : ', ') + F.tail;
}

const straight = s => String(s).replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"');

function loadArray(file, varName) {
  const ctx = {};
  new vm.Script(fs.readFileSync(file, 'utf8'), { filename: file }).runInNewContext(ctx);
  const a = ctx[varName] || [];
  const out = [];
  let holes = 0;
  for (let i = 0; i < a.length; i++) { if (i in a) out.push(a[i]); else holes++; }
  if (holes) throw new Error(file + ' has ' + holes + ' sparse holes');
  return out;
}

// Sections 12 and 13's reprint counts, read off splice-pd-ep2.js's own arrays rather than recalled.
function siblingCount(sec) {
  const src = fs.readFileSync(H + 'splice-pd-ep2.js', 'utf8');
  const at = src.indexOf('\n  ' + sec + ': {');
  if (at === -1) throw new Error('no section ' + sec + ' in splice-pd-ep2.js');
  const m = /reprints: \[([\s\S]*?)\]/.exec(src.slice(at, at + 4000));
  if (!m) throw new Error('section ' + sec + ' has no reprints array');
  return m[1].split(',').map(x => x.trim()).filter(Boolean).length;
}

// ---- measure ---------------------------------------------------------------------------------
const G = loadPass();
const STAGED = loadArray(G.STAGING, G.SVAR);
const live = {};
live[G.EP2] = loadArray(D + G.EP2, 'Q_PEDS_EP2');
live[G.EP1] = loadArray(D + G.EP1, 'Q_PEDS_EP');
const byId = new Map();
for (const f of [G.EP2, G.EP1]) for (const q of live[f]) byId.set(q.id, { f: f, q: q });
const byN = new Map(STAGED.map(s => [s.n, s]));

if (G.PLAN.length !== G.EXPECTED) throw new Error('PLAN holds ' + G.PLAN.length + ' rows, the pass expects ' + G.EXPECTED);

const rows = [];
for (const F of G.PLAN) {
  const L = byId.get(F.id);
  if (!L) throw new Error('target does not exist: ' + F.id + ' (n' + F.n + ')');
  if (L.f !== F.file) throw new Error('n' + F.n + ': target lives in ' + L.f + ', PLAN says ' + F.file);
  const s = byN.get(F.n);
  if (!s) throw new Error('no staged question with n' + F.n);
  if (s.p !== F.p) throw new Error('n' + F.n + ': staging puts it on p.' + s.p + ', PLAN says p.' + F.p);

  const clause = clauseFor(G, F);
  const src = String(L.q.source);
  const at = src.indexOf(clause);
  // The clause must be readable on its target.  A missing clause means the pass has not run, or has
  // run and been edited since, and either way the map must not be written.
  if (at === -1) throw new Error('n' + F.n + ': the planned clause is not on ' + F.id + ' -- run reprint-s14-pd-ep2.js --write first');
  const lead = src.slice(Math.max(0, at - 2), at);
  let shape;
  if (lead === '; ') shape = 'merges into an existing parenthetical';
  else if (lead === ' (') shape = 'opens a new parenthetical';
  else throw new Error('n' + F.n + ': cannot tell how the clause joined -- the two characters before it are ' + JSON.stringify(lead));
  rows.push({ F: F, q: L.q, clause: clause, merged: lead === '; ', shape: shape, source: src });
}

const merged = rows.filter(r => r.merged).length;
const opened = rows.length - merged;
const drafted = STAGED.map(s => s.n).filter(n => !G.PLAN.some(F => F.n === n)).sort((a, b) => a - b);

// ---- render ----------------------------------------------------------------------------------
const nRe = rows.length, nAll = STAGED.length;
const s12 = siblingCount(12), s13 = siblingCount(13);

const headerStats =
  '**' + nRe + ' of its ' + nAll + ' questions are reprints** of questions the endpoint bank already\n' +
  'carries, the highest ratio this stream has produced: Model Final Exam 1 ran ' + s12 + ' of 80, Model\n' +
  'Final Exam 2 ran ' + s13 + ', and part 1\u2019s own Model Final Exam 1 ran ' + PART1_MFE1_REPRINTS + '. The remaining ' + drafted.length + ' are\n' +
  'drafted as new entries.';

const markTable = [
  '| file | mark | expected after the pass |',
  '|---|---|---|',
].concat(G.MARKS.map(M => '| `' + M.file + '` | `' + M.mark + '` | ' + M.expect + ' |')).join('\n');

const mergeSplit = merged + ' of the ' + nRe + ' targets are in that state; the other ' + opened +
  (opened === 1 ? ' opens' : ' open') + ' a new one.';

const reprintRows = ['## The ' + nRe + ' reprints', '',
  '`p` is the section-14 page. The target is the live entry that gains the clause.', ''];
for (const r of rows) {
  reprintRows.push('### n' + r.F.n + ' — p.' + r.F.p + ' → `' + r.F.id + '`');
  reprintRows.push('');
  reprintRows.push('- file: `' + r.F.file + '`  ·  **' + r.shape + '**');
  reprintRows.push('- current source: `' + r.source + '`');
  reprintRows.push('- clause tail: ' + (r.F.tail ? straight(r.F.tail) : '(none)'));
  reprintRows.push('');
}

const pages = drafted.map(n => 'n' + n + '=' + byN.get(n).p).join('  ');
const draftedBlock = [
  '## The ' + drafted.length + ' questions that are drafted', '',
  '    ' + drafted.map(n => 'n' + n).join(', '), '',
  'Their pages, from the staging:', '',
  '    ' + pages,
].join('\n');

let out = fs.readFileSync(TPL, 'utf8');
const subs = {
  STAGED_N: String(nAll),
  HEADER_STATS: headerStats,
  MARK_TABLE: markTable,
  MERGE_SPLIT: mergeSplit,
  REPRINT_ROWS: reprintRows.join('\n').replace(/\n+$/, ''),
  DRAFTED: draftedBlock,
};
for (const k of Object.keys(subs)) {
  const tok = '{{' + k + '}}';
  if (out.indexOf(tok) === -1) throw new Error('template has no ' + tok + ' marker');
  out = out.split(tok).join(subs[k]);
}
const leftover = out.match(/\{\{[A-Z_]+\}\}/);
if (leftover) throw new Error('template marker left unfilled: ' + leftover[0]);

// The template's own explanatory HTML comment is for whoever edits the template; the generated file
// gets a warning of its own instead.
out = out.replace(/<!--[\s\S]*?-->/,
  '<!-- GENERATED by tools\\bank-harness\\reprint-map-s14-pd-ep2.js from\n' +
  '     endpoint-p2-s14-reprint-map.tpl.md and the measured state of the bank.\n' +
  '     Do not hand-edit: edit the template for prose, the pass for a row, then regenerate. -->');

console.log('rows: ' + nRe + ' reprints (' + merged + ' merged, ' + opened + ' opened), ' + drafted.length + ' drafted, ' + nAll + ' staged');
console.log('siblings measured from splice-pd-ep2.js: section 12 = ' + s12 + ', section 13 = ' + s13);
console.log('marks: ' + G.MARKS.map(M => M.file + ' x' + M.expect).join(', '));

if (!WRITE) {
  const old = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : '';
  console.log('');
  console.log('DRY RUN. ' + (old === out ? 'The map on disk is already identical.' : 'The map would change: ' + old.split('\n').length + ' -> ' + out.split('\n').length + ' lines.'));
  process.exit(0);
}
fs.writeFileSync(OUT, out);
console.log('');
console.log('written: ' + OUT.slice(R.length) + ' (' + out.split('\n').length + ' lines)');
