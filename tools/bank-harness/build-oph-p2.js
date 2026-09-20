// Builds a part-2 section array from its staging JSON, pairing by page_type, never page arithmetic
// (a marked page with no unmarked twin becomes a row of its own, markedOnly:true).
// Usage: node build-oph-p2.js <sec> <slug>     e.g. 25 model-exam-4
const fs = require('fs');
const R = 'D:/claude os/Medical school/Herophilus/content/ophtho/qb-pages/';
const SEC = process.argv[2], SLUG = process.argv[3];
if (!SEC || !SLUG) throw new Error('usage: node build-oph-p2.js <sec> <slug>');
const W = '_s' + SEC + '-work/', BASE = 'oph-ep-p2-s' + SEC + '-' + SLUG;
const staged = JSON.parse(fs.readFileSync(R + W + BASE + '.staging.json', 'utf8'))
  .sort((a, b) => a.pdf_page - b.pdf_page);

const nonTheory = staged.filter(r => r.page_type !== 'theory');

const rows = [];
const flags = [];
let n = 0;
for (let i = 0; i < nonTheory.length; i++) {
  let um = nonTheory[i], mk = nonTheory[i + 1];
  n++;
  let markedOnly = false;
  if (um.page_type === 'question_unmarked' && mk && mk.page_type === 'question_marked' && mk.pdf_page === um.pdf_page + 1) {
    i++;
  } else if (um.page_type === 'question_marked') {
    mk = um; markedOnly = true;
    flags.push('n' + n + ' pdf ' + mk.pdf_page + ': marked page with no unmarked twin');
  } else {
    throw new Error('unpairable row at n=' + n + ' pdf ' + um.pdf_page + ' type ' + um.page_type);
  }

  const keyIdx = mk.key_index;
  const letterToIdx = { a: 0, b: 1, c: 2, d: 3, e: 4 };
  const kl = (mk.key_letter || '').toLowerCase();
  const derivedFromLetter = letterToIdx[kl];
  const agree = derivedFromLetter === keyIdx;
  if (!agree) flags.push('n' + n + ' pdf ' + mk.pdf_page + ': key_letter=' + mk.key_letter + ' (idx ' + derivedFromLetter + ') != key_index ' + keyIdx);

  // options: default to marked's; flag if unmarked differs (label prefixes etc.)
  const umOpts = um.options || [];
  const mkOpts = mk.options || [];
  const same = umOpts.length === mkOpts.length && umOpts.every((o, idx) => o === mkOpts[idx]);
  if (!same) {
    flags.push('n' + n + ' pdf ' + um.pdf_page + '/' + mk.pdf_page + ': options differ between unmarked and marked -- used marked; unmarked opts=' + JSON.stringify(umOpts));
  }
  if (um.stem !== mk.stem) {
    flags.push('n' + n + ' pdf ' + um.pdf_page + '/' + mk.pdf_page + ': stem differs between unmarked and marked -- used marked; unmarked stem=' + JSON.stringify(um.stem));
  }

  rows.push({
    n, p: um.pdf_page, mp: mk.pdf_page, markedOnly,
    key: keyIdx,
    stem: mk.stem,
    opts: mkOpts,
    expl: mk.box_printed ? (mk.explanation_verbatim || '') : '',
    boxPrinted: !!mk.box_printed,
    keyLetterAgree: agree,
    keyLetter: mk.key_letter,
    fig: !!(um.figure || mk.figure),
  });
}

fs.writeFileSync(R + W + 'mismatches.txt', flags.length ? flags.join('\n') + '\n' : '(none)\n', 'utf8');

function esc(s) {
  return String(s == null ? '' : s)
    .split('\\').join('\\\\')
    .split('"').join('\\"')
    .split('\n').join('\\n');
}

let out = '';
out += '/* Generated mechanically from the staged source (' + BASE + '.staging.json).\n';
out += '   KEY CONVENTION: 0-based. `key` is an index into `opts`, taken directly from the staged\n';
out += '   marked-page key_index; key_letter position checked to agree (see mismatches.txt).\n';
out += '   `p` is the row\'s UNMARKED page, `mp` the marked (answered) page; markedOnly rows have p = mp.\n';
out += '   Numbering is by position. `fig` is true where either page stages figure:true.\n';
out += '   Folds are recorded in sec-oph.js, not here.\n';
out += '   `expl` is verbatim only for boxed rows (boxPrinted true); all other rows keep expl empty. */\n\n';
out += 'var OPHEP2_S' + SEC + '_STAGED = [\n\n';

for (const r of rows) {
  out += '{ n:' + r.n + ', p:' + r.p + ', mp:' + r.mp + ', markedOnly:' + r.markedOnly + ', key:' + (r.key == null ? 'null' : r.key) + ',\n';
  out += '  stem:"' + esc(r.stem) + '",\n';
  out += '  opts:[' + r.opts.map(o => '"' + esc(o) + '"').join(',') + '],\n';
  out += '  expl:"' + esc(r.expl) + '",\n';
  out += '  boxPrinted:' + r.boxPrinted + ', fig:' + r.fig + ',\n';
  out += '  keySource:"Recorded in the staged source (' + BASE + '.staging.json, marked p.' + r.mp + '), read by a vision model. Not re-derived by this script.",\n';
  out += '  keyLetterAgree:' + r.keyLetterAgree + ', keyLetter:"' + esc(r.keyLetter) + '",\n';
  out += '},\n\n';
}

out += '];\n';

fs.writeFileSync(R + BASE + '.array.js', out, 'utf8');
console.log('wrote', rows.length, 'rows; flags:', flags.length);
