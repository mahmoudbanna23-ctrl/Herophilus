// Reprint sweep for an OPHTHO ENDPOINT section, run AFTER it is staged and BEFORE it is drafted.
//   node tools/bank-harness/sweep-oph-staged.js <staging.json>
//
// Compares every answered (question_marked) staged row against
//   (a) every question live in app/data/questions.ophtho.ep.js  -- this bank; FOLD candidate
//   (b) every question live in app/data/questions.ophtho.js      -- House bank; cross-bank, RECORDED
//   (c) every other answered row in the same staging file        -- within-section reprint
// It RESOLVES NOTHING: every hit is looked at on the page images by the caller. Stem arm = bigram
// Dice; option arm = whole-option-set overlap (catches an abbreviated reprint the stem arm misses).
// An option-set match alone is a PAIR (shared menu), never a fold. Modelled on sweep-staged-ep.js
// (peds), whose measured lessons carry over: score both arms, print the negative band, never
// trust a matcher that says yes to everything.
// Written with the Write tool: the Bash heredoc collapses backslashes and would eat the regexes.
const fs = require('fs'), vm = require('vm');
const R = 'D:/claude os/Medical school/Herophilus/';
const { tight, words } = require('./norm.js');

const STEM_T = 0.55, OPT_T = 0.75;

function bigrams(s) {
  const w = words(s || '').split(' ').filter(Boolean);
  if (w.length < 2) return new Set(w);
  const out = new Set();
  for (let i = 0; i < w.length - 1; i++) out.add(w[i] + ' ' + w[i + 1]);
  return out;
}
function dice(A, B) {
  if (!A.size || !B.size) return 0;
  let hit = 0; A.forEach((g) => { if (B.has(g)) hit++; });
  return 2 * hit / (A.size + B.size);
}
function optSet(opts) { return new Set((opts || []).map((o) => tight(String(o)))); }

function live(file, varName) {
  const p = R + 'app/data/' + file;
  vm.runInThisContext(fs.readFileSync(p, 'utf8'), { filename: file });
  const a = globalThis[varName] || [], out = [];
  for (let i = 0; i < a.length; i++) if (i in a) out.push(a[i]); // filter() skips sparse holes
  return out;
}

const file = process.argv[2];
if (!file) { console.error('usage: node sweep-oph-staged.js <staging.json>'); process.exit(2); }
const rows = JSON.parse(fs.readFileSync(file, 'utf8')).filter((r) => r.page_type === 'question_marked');
const EP = live('questions.ophtho.ep.js', 'Q_OPHTHO_EP');
const HO = live('questions.ophtho.js', 'Q_OPHTHO');
console.log('staged answered rows', rows.length, '| live endpoint', EP.length, '| live house', HO.length);

const keyText = (q) => (q.options || [])[q.answer];
const pool = [
  ...EP.map((q) => ({ src: 'EP', id: q.id, stem: q.stem, options: q.options, key: keyText(q), where: q.source })),
  ...HO.map((q) => ({ src: 'HOUSE', id: q.id, stem: q.stem, options: q.options, key: keyText(q), where: q.source })),
  ...rows.map((r) => ({ src: 'SELF', id: 'p' + r.pdf_page, stem: r.stem, options: r.options, key: r.options[r.key_index], where: 'staged p.' + r.pdf_page }))
];
const PB = pool.map((q) => bigrams(q.stem)), PO = pool.map((q) => optSet(q.options));

const best = []; let nHit = 0;
rows.forEach((r) => {
  const A = bigrams(r.stem), O = optSet(r.options), rk = tight(String(r.options[r.key_index]));
  const hits = []; let top = 0;
  pool.forEach((q, k) => {
    if (q.src === 'SELF' && q.id === 'p' + r.pdf_page) return;
    const s = dice(A, PB[k]), o = O.size >= 3 ? dice(O, PO[k]) : 0;
    if (s > top) top = s;
    if (s >= STEM_T || o >= OPT_T) hits.push({ q, s, o });
  });
  best.push(top);
  console.log('\n[q' + r.printed_q + ' p.' + r.pdf_page + '] best stem score ' + top.toFixed(3) + ' | key "' + r.options[r.key_index] + '"');
  if (!hits.length) { console.log('  no candidate'); return; }
  nHit++;
  hits.sort((x, y) => (y.s + y.o) - (x.s + x.o)).slice(0, 5).forEach((h) => {
    const sameKey = h.q.key !== undefined && tight(String(h.q.key)) === rk;
    console.log('  ' + h.q.src + ' ' + h.q.id + '  stem ' + h.s.toFixed(3) + '  opts ' + h.o.toFixed(3) + '  key ' + (sameKey ? 'SAME' : 'DIFF ("' + h.q.key + '")') + '  <' + String(h.q.where || '').slice(0, 70) + '>');
  });
});
best.sort((a, b) => a - b);
console.log('\nrows with a candidate: ' + nHit + '/' + rows.length + ' | best-score median ' + best[Math.floor(best.length / 2)].toFixed(3) + ' | max ' + best[best.length - 1].toFixed(3));
