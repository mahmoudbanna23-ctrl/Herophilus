// Compares the first reader (check7 cls) with the blind factory second read.
// Usage: node compare.js   -> writes verdicts.json, disagree.json, missing.json next to this file.
const fs = require('fs');
const path = require('path');
const SRC = 'D:/claude os/Medical school/Herophilus/content/peds/qb-pages/sa/_work/sweep/pairs/check7/pairs-dump.json';
const RES = 'D:/claude os/Tools/factory/jobs/peds-sa-pairs-check-2026-10-11/results';
const OUT = __dirname;

const d = JSON.parse(fs.readFileSync(SRC, 'utf8'));
const verdicts = [];
const missing = [];

function parse(answer) {
  if (typeof answer !== 'string') return null;
  const m = answer.match(/\{[\s\S]*\}/);
  if (!m) return null;
  try {
    const o = JSON.parse(m[0]);
    const v = String(o.verdict || '').toUpperCase().trim();
    if (!['SAME', 'DIFFERENT', 'UNSURE'].includes(v)) return null;
    return { verdict: v, why: String(o.why || '') };
  } catch (e) { return null; }
}

for (const r of d) {
  const id = 'p' + String(r.n).padStart(3, '0');
  const f = path.join(RES, id + '.json');
  const first = r.cls === 'SAME' ? 'SAME' : 'DIFFERENT';
  let res = null;
  if (fs.existsSync(f)) {
    try { res = JSON.parse(fs.readFileSync(f, 'utf8')); } catch (e) { res = null; }
  }
  const p = res && res.ok ? parse(res.answer) : null;
  if (!p) {
    missing.push({ n: r.n, book: r.book.id, other: r.other.id, reason: res ? ('not usable: ' + (res.error || 'bad answer')) : 'no result file' });
    continue;
  }
  verdicts.push({ n: r.n, book: r.book.id, other: r.other.id, first, firstRaw: r.cls, second: p.verdict, why: p.why });
}

const disagree = verdicts.filter(v => v.second === 'UNSURE' || v.second !== v.first);

// control: 11 non-SAME pairs + pedsa-b15-7 / pedep-mf1-37
const ctrl = d.filter(r => r.cls !== 'SAME' || (r.book.id === 'pedsa-b15-7' && r.other.id === 'pedep-mf1-37')).map(r => r.n);
const ctrlRows = ctrl.map(n => verdicts.find(v => v.n === n) || { n, second: 'MISSING' });
const control = {
  total: ctrl.length,
  calledDifferent: ctrlRows.filter(v => v.second === 'DIFFERENT').length,
  calledSame: ctrlRows.filter(v => v.second === 'SAME').length,
  unsure: ctrlRows.filter(v => v.second === 'UNSURE').length,
  missing: ctrlRows.filter(v => v.second === 'MISSING').length,
  rows: ctrlRows.map(v => ({ n: v.n, second: v.second }))
};

fs.writeFileSync(path.join(OUT, 'verdicts.json'), JSON.stringify(verdicts, null, 1));
fs.writeFileSync(path.join(OUT, 'disagree.json'), JSON.stringify(disagree, null, 1));
fs.writeFileSync(path.join(OUT, 'missing.json'), JSON.stringify(missing, null, 1));
const sameAgree = verdicts.filter(v => v.first === 'SAME' && v.second === 'SAME').length;
console.log(JSON.stringify({ pairs: d.length, verdicts: verdicts.length, missing: missing.length, sameAgree, disagree: disagree.length, control }, null, 1));
console.log('first 15 disagree book ids:', disagree.slice(0, 15).map(v => v.book).join(' '));
