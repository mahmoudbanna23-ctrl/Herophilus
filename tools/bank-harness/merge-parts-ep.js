// Merge a peds ENDPOINT section's staging halves into the one array file the harness reads.
//   node tools/bank-harness/merge-parts-ep.js <section>            # dry run
//   node tools/bank-harness/merge-parts-ep.js <section> --write
//
// The halves are written by drafting agents as a bare run of object literals separated by a
// blank line and NOT comma-joined -- one agent per half, each appending incrementally, so
// neither can know whether it owns the last entry in the file. This tool is what turns that
// into a valid array: it splits on the blank line between a closing `}` and the next opening
// `{`, re-joins with commas, and wraps the result in the section's staging var.
//
// ⚠️ The halves are NOT parsed by simply eval'ing the file -- without the commas that is a
// syntax error, and a half that "fails to load" is nearly always this and not a real fault.
//
// Written with the Write tool, not a heredoc: the heredoc collapses \\ to \ and would eat the
// character codes below.
const fs = require('fs');
const R = 'D:/claude os/Medical school/Herophilus/';
const QB = R + 'content/peds/qb-pages/';

const NL = String.fromCharCode(10);
const BLANK = NL + NL;

const SEC = {
  3: { base: 'endpoint-s03-gastro', svar: 'PEDEP_S03_STAGED', title: 'SECTION 3: "Gastroenterology"',
       pages: '393-549', expect: 67 },
  4: { base: 'endpoint-s04-accidents', svar: 'PEDEP_S04_STAGED', title: 'SECTION 4: "Accidents"',
       pages: '550-562', expect: 3 },
};

const secNum = process.argv[2];
const doWrite = process.argv.includes('--write');
const cfg = SEC[secNum];
if (!cfg) { console.error('usage: node merge-parts-ep.js <' + Object.keys(SEC).join('|') + '> [--write]'); process.exit(2); }

// ---- find the halves ----
const parts = fs.readdirSync(QB)
  .filter(f => f.startsWith(cfg.base + '.part-') && f.endsWith('.js'))
  .sort();
if (!parts.length) { console.error('no ' + cfg.base + '.part-X.js found'); process.exit(2); }
console.log('halves: ' + parts.join(', '));

// ---- load each half, commas restored ----
const all = [];
const bodies = [];
for (const f of parts) {
  const raw = fs.readFileSync(QB + f, 'utf8').trim();
  const body = raw.split('}' + BLANK + '{').join('},' + BLANK + '{');
  let arr;
  try { arr = (new Function('return [' + body + ']'))(); }
  catch (e) { console.error(f + ' DOES NOT PARSE: ' + e.message); process.exit(2); }
  console.log('  ' + f + ': ' + arr.length + ' entries, n ' + arr[0].n + '..' + arr[arr.length - 1].n);
  bodies.push(body);
  all.push(...arr);
}

// ---- the checks that have caught something before ----
const fail = [];
if (all.length !== cfg.expect) fail.push('merged ' + all.length + ' entries, section expects ' + cfg.expect);
all.forEach((q, i) => {
  const at = 'n=' + q.n + ' (p.' + q.p + ')';
  if (q.n !== i + 1) fail.push(at + ': n is not the position, expected ' + (i + 1));
  if (!Array.isArray(q.opts) || q.opts.length < 2) fail.push(at + ': ' + (q.opts || []).length + ' options');
  // ⚠️ `key` is a ZERO-BASED index, matching the app's own `answer` and sections 1 and 2.
  // Section 3 was first staged 1-based -- the brief said so and both agents complied -- and was
  // converted here on 2026-09-03. val-pd-ep.js compares q.answer to the staged key with NO
  // conversion, so a 1-based staging file drafts every answer one option too far AND PASSES
  // EVERY CHECK: nothing in the harness knows which option is actually correct. There is no
  // sentinel for "no highlight" -- 0 is the first option. A page with nothing highlighted is
  // an adjudication, recorded in `note`, not a magic key value.
  if (typeof q.key !== 'number') fail.push(at + ': key is not numeric -- it must be a 0-based index, never a letter');
  else if (q.key < 0 || q.key >= q.opts.length) fail.push(at + ': key ' + q.key + ' out of range 0..' + (q.opts.length - 1));
  if (typeof q.stem !== 'string' || q.stem.length < 15) fail.push(at + ': stem missing or too short');
  if (typeof q.expl !== 'string') fail.push(at + ': expl must be a string ("" where the page prints no box)');
  if (typeof q.p !== 'number') fail.push(at + ': p must be the numeric PDF page');
  (q.opts || []).forEach((o, k) => {
    if (/^[A-J][.)]\s/.test(o)) fail.push(at + ' opt ' + (k + 1) + ': carries a printed letter prefix, strip it');
  });
  if (q.fig && !q.figAlt) fail.push(at + ': fig without figAlt');
});
// pages must be strictly increasing -- a repeated or out-of-order page means a half was misassembled
for (let i = 1; i < all.length; i++) {
  if (all[i].p <= all[i - 1].p) fail.push('page order breaks at n=' + all[i].n + ': p.' + all[i].p + ' follows p.' + all[i - 1].p);
}
if (fail.length) { console.error(NL + 'FAILED:'); fail.forEach(f => console.error('  ' + f)); process.exit(1); }

console.log(NL + 'merged ' + all.length + ' entries, n 1..' + all.length + ', pp.' + all[0].p + '-' + all[all.length - 1].p);
console.log('no printed box (expl:""): ' + (all.filter(q => q.expl === '').map(q => 'n' + q.n).join(' ') || 'none'));
console.log('pr != n: ' + (all.filter(q => q.pr !== q.n).map(q => 'n' + q.n + ' prints ' + q.pr).join(', ') || 'none'));
console.log('boxes on their own page: ' + (all.filter(q => q.box).map(q => 'n' + q.n + ' -> p.' + q.box).join(', ') || 'none'));
console.log('figures: ' + (all.filter(q => q.fig).map(q => 'n' + q.n).join(' ') || 'none'));
console.log('notes set on: ' + (all.filter(q => q.note).map(q => 'n' + q.n).join(' ') || 'none'));
console.log('option counts: ' + JSON.stringify(all.reduce((m, q) => { m[q.opts.length] = (m[q.opts.length] || 0) + 1; return m; }, {})));

if (!doWrite) { console.log(NL + 'DRY RUN -- nothing written'); process.exit(0); }

const header = '/* ===========================================================================' + NL +
  '   ENDPOINT - Pediatrics endpoint part1.pdf - ' + cfg.title + NL +
  '   Verbatim staging record. PDF pages ' + cfg.pages + '; PDF page = printed page, offset zero.' + NL +
  '   Merged from ' + parts.join(' + ') + ' by merge-parts-ep.js.' + NL +
  '   ' + NL +
  '   Every question is printed TWICE: an unanswered page, then the ANSWERED page with the key' + NL +
  '   highlighted in yellow and (usually) a bordered explanation box. Only answered pages are' + NL +
  '   staged. `n` is the true sequential index, `pr` what the page prints, `p` the PDF page,' + NL +
  '   `key` a ZERO-BASED INDEX into `opts` (never a letter), matching the app field `answer`,' + NL +
  '   `expl` the printed box verbatim or "".' + NL +
  '   =========================================================================== */' + NL +
  'var ' + cfg.svar + ' = [' + NL + NL;

const out = header + bodies.join(',' + BLANK) + NL + NL + '];' + NL;

// prove it before writing
try { const m = {}; (new Function('m', out + ';m.a = ' + cfg.svar + ';'))(m); if (m.a.length !== all.length) throw new Error('array holds ' + m.a.length); }
catch (e) { console.error('OUTPUT DOES NOT PARSE: ' + e.message); process.exit(2); }

fs.writeFileSync(QB + cfg.base + '.array.js', out);
console.log(NL + 'written: ' + cfg.base + '.array.js (' + out.length + ' chars, ' + all.length + ' entries)');
