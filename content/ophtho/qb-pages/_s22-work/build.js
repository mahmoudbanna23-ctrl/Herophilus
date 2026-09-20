// Builds oph-ep-p2-s22-model-exam-1.array.js from the staging JSON. Run with node.
const fs = require('fs');
const R = 'D:/claude os/Medical school/Herophilus/content/ophtho/qb-pages/';
const staged = JSON.parse(fs.readFileSync(R + '_s22-work/oph-ep-p2-s22-model-exam-1.staging.json', 'utf8'));

const nonTheory = staged.filter(r => r.page_type !== 'theory');
if (nonTheory.length !== 154) throw new Error('expected 154 non-theory rows, got ' + nonTheory.length);

const rows = [];
const flags = [];
let n = 0;
for (let i = 0; i < nonTheory.length; i += 2) {
  const um = nonTheory[i], mk = nonTheory[i + 1];
  n++;
  if (um.page_type !== 'question_unmarked' || mk.page_type !== 'question_marked') {
    throw new Error('pair mismatch at n=' + n + ' pdf ' + um.pdf_page + '/' + mk.pdf_page);
  }
  const expectedP = 1390 + 2 * n;
  if (um.pdf_page !== expectedP) throw new Error('page arithmetic off at n=' + n);

  const keyIdx = mk.key_index;
  const letterToIdx = { a: 0, b: 1, c: 2, d: 3, e: 4 };
  const kl = (mk.key_letter || '').toLowerCase();
  const derivedFromLetter = letterToIdx[kl];
  const agree = derivedFromLetter === keyIdx;
  if (!agree) flags.push('n' + n + ' pdf ' + mk.pdf_page + ': key_letter=' + mk.key_letter + ' (idx ' + derivedFromLetter + ') != key_index ' + keyIdx);

  // options: default to marked's; flag+note if unmarked differs (label prefixes etc.)
  const umOpts = um.options || [];
  const mkOpts = mk.options || [];
  const same = umOpts.length === mkOpts.length && umOpts.every((o, idx) => o === mkOpts[idx]);
  if (!same) {
    flags.push('n' + n + ' pdf ' + um.pdf_page + '/' + mk.pdf_page + ': options differ between unmarked and marked -- used marked (clean); unmarked opts=' + JSON.stringify(umOpts));
  }

  const stemSame = um.stem === mk.stem;
  if (!stemSame) {
    flags.push('n' + n + ' pdf ' + um.pdf_page + '/' + mk.pdf_page + ': stem differs between unmarked and marked -- used marked; unmarked stem=' + JSON.stringify(um.stem));
  }

  rows.push({
    n, p: um.pdf_page,
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

fs.writeFileSync(R + '_s22-work/mismatches.txt', flags.length ? flags.join('\n') + '\n' : '(none)\n', 'utf8');

function esc(s) {
  return String(s == null ? '' : s)
    .split('\\').join('\\\\')
    .split('"').join('\\"')
    .split('\n').join('\\n');
}

let out = '';
out += '/* Generated mechanically from the staged s22 source (oph-ep-p2-s22-model-exam-1.staging.json).\n';
out += '   Source pairs: unmarked p.1392 through marked p.1545.\n';
out += '   KEY CONVENTION: 0-based. `key` is an index into `opts` -- 0=A/a, 1=B/b, 2=C/c, 3=D/d --\n';
out += '   taken directly from the staged marked-page key_index; key_letter position checked to agree\n';
out += '   on every row (see build.js output).\n';
out += '   `p` is the row\'s own UNMARKED page; the marked (answered) page is p+1. Numbering is by\n';
out += '   position (pair n, n=1..77, p=1390+2n).\n';
out += '   `fig` is true where either page of the pair stages figure:true. Image-checked 2026-09-20 by\n';
out += '   separate Sonnet runs (s22.imgcheck-*.md). Folds are recorded in sec-oph.js, not here.\n';
out += '   `expl` is verbatim only for boxed rows (boxPrinted true); all other rows keep expl empty. */\n\n';
out += 'var OPHEP2_S22_STAGED = [\n\n';

for (const r of rows) {
  out += '{ n:' + r.n + ', p:' + r.p + ', key:' + (r.key === null ? 'null' : r.key) + ',\n';
  out += '  stem:"' + esc(r.stem) + '",\n';
  out += '  opts:[' + r.opts.map(o => '"' + esc(o) + '"').join(',') + '],\n';
  out += '  expl:"' + esc(r.expl) + '",\n';
  out += '  boxPrinted:' + r.boxPrinted + ', fig:' + r.fig + ',\n';
  out += '  keySource:"Recorded in the staged s22 source (oph-ep-p2-s22-model-exam-1.staging.json, marked p.' + (r.p + 1) + '), 2026-09-20, read by a vision model. Not re-derived by this script.",\n';
  out += '  keypos:{"visualIndex":' + r.key + ',"keyposIndex":' + r.key + ',"agree":' + r.keyLetterAgree + '},\n';
  out += '  keyLetter:"' + esc(r.keyLetter) + '",\n';
  out += '},\n\n';
}

out += '];\n';

fs.writeFileSync(R + 'oph-ep-p2-s22-model-exam-1.array.js', out, 'utf8');
console.log('wrote', rows.length, 'rows');
console.log('flags:', flags.length);
