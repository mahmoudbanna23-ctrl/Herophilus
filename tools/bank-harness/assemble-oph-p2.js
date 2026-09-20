// Assembles _s<sec>-work/draft-*.txt fragments into <base>.draft.js, normalising the two closing
// markers to the validator's exact strings and rebuilding `source` from the array's p/mp.
// Usage: node assemble-oph-p2.js <sec> <slug> "<exam title>"
const fs = require('fs');
const R = 'D:/claude os/Medical school/Herophilus/content/ophtho/qb-pages/';
const [SEC, SLUG, TITLE] = process.argv.slice(2);
const W = R + '_s' + SEC + '-work/', BASE = 'oph-ep-p2-s' + SEC + '-' + SLUG;
const rows = new Function(fs.readFileSync(R + BASE + '.array.js', 'utf8') + ';return OPHEP2_S' + SEC + '_STAGED')();
const folded = require('./sec-oph.js').SEC_P2[SEC].folded;
let body = fs.readdirSync(W).filter(f => /^draft-[A-Z]\.txt$/.test(f)).sort().map(f => fs.readFileSync(W + f, 'utf8').trim()).join('\n\n');
body = body.split('endpoint file\'s own.').join('endpoint file\u2019s own.')
  .split('Written for this bank \u2014 the endpoint file prints no explanation here.').join('Written for this bank \u2014 Opthalmology endpoint.pdf prints no explanation here.');
const surv = rows.filter(r => !folded.includes(r.n));
for (const r of surv) {
  const re = new RegExp('(id:"ophep2-[a-z0-9-]+-' + r.n + '",[\\s\\S]*?source:")[^"]*(")');
  if (!re.test(body)) throw new Error('no entry for n' + r.n);
  body = body.replace(re, '$1Opthalmology endpoint.pdf p.' + (r.markedOnly ? r.mp : r.p + '-' + r.mp) + '$2');
}
let out = '/* Drafted 2026-09-21 -- ophthalmology endpoint, part 2, section ' + SEC + ' (' + TITLE + '),\n   survivors only (n' + surv.map(r => r.n).join(', ') +
  '). The other ' + folded.length + ' staged rows are folded\n   (see tools/bank-harness/sec-oph.js section ' + SEC + ') and are never drafted here.\n   Stems, options and keys are copied byte-identical from the staging array\n   (' + BASE +
  '.array.js); nothing here is re-derived from the page image. */\n\nvar OPHEP2_S' + SEC + '_DRAFT = [\n\n' + body + '\n\n];\n';
// A boxed row drafted without its box: drop the unboxed marker, append the staged box and the boxed marker.
{ const UN = 'Written for this bank — Opthalmology endpoint.pdf prints no explanation here.', LEAD = '**The endpoint file prints this explanation:**';
  const E0 = new Function(out + ';return OPHEP2_S' + SEC + '_DRAFT')();
  for (const e of E0) { const r = rows[+e.id.split('-').pop() - 1];
    if (!r.expl || e.explanation.includes(LEAD)) continue;
    const fixed = e.explanation.split(UN).join('').trimEnd() + '\n\n' + LEAD + '\n\n' + r.expl.split('\n').map(l => '> ' + l).join('\n') + '\n\n*The expansion above this line is written for this bank; the box itself is the endpoint file’s own.*';
    const from = JSON.stringify(e.explanation), i = out.indexOf(from); if (i < 0) throw new Error('cannot locate explanation of ' + e.id + ' (non-JSON escaping)');
    out = out.slice(0, i) + JSON.stringify(fixed) + out.slice(i + from.length); console.log('box appended:', e.id); } }
const A = new Function(out + ';return OPHEP2_S' + SEC + '_DRAFT')();
if (A.length !== surv.length) throw new Error('entries ' + A.length + ' != survivors ' + surv.length);
fs.writeFileSync(R + BASE + '.draft.js', out, 'utf8');
console.log('wrote', A.length, 'entries');
