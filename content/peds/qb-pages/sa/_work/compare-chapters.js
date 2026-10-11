// Compares the first chapter assignment (sa-chapters.json) with the blind second one (factory job results).
// Usage: node compare-chapters.js [job folder]
// Writes chapters-disagree.json (every non-AGREE id). Exit 1 if any of the 353 ids is missing from the comparison.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const SA = 'D:/claude os/Medical school/Herophilus/content/peds/qb-pages/sa/';
const MOD = 'D:/claude os/Medical school/Herophilus/app/data/modules.js';
const JOB = process.argv[2] || 'D:/claude os/Tools/factory/jobs/peds-sa-chapters-check-2026-10-11';

function loadVar(file, name) {
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(SA + file, 'utf8'), ctx);
  return ctx[name];
}
const ids = [...loadVar('sa-p1.array.js', 'SA_P1'), ...loadVar('sa-p2.array.js', 'SA_P2')].map(q => q.id);

const mctx = {};
vm.createContext(mctx);
const mods = vm.runInContext(fs.readFileSync(MOD, 'utf8') + '\n;MODULES', mctx);
const valid = new Set();
for (const g of mods.find(m => m.id === 'pediatrics').groups) for (const c of g.chapters) valid.add(c[0]);

const first = JSON.parse(fs.readFileSync(SA + 'sa-chapters.json', 'utf8'));

function parseAnswer(text) {
  if (typeof text !== 'string') return null;
  let t = text.trim().replace(/^```[a-z]*\s*/i, '').replace(/```\s*$/, '').trim();
  try { return JSON.parse(t); } catch (e) { /* fall through */ }
  const m = t.match(/\{[\s\S]*\}/);
  if (m) { try { return JSON.parse(m[0]); } catch (e) { /* none */ } }
  return null;
}

const rows = [];
const missing = [];
const confusion = {};
const counts = { AGREE: 0, SOFT: 0, DISAGREE: 0, INVALID: 0 };
const bySeat = {};
for (const id of ids) {
  const f = first[id];
  if (!f) { missing.push(id); continue; }
  const rp = path.join(JOB, 'results', id + '.json');
  let second = null, secondSec = '', cls = 'INVALID', model = '';
  if (fs.existsSync(rp)) {
    const r = JSON.parse(fs.readFileSync(rp, 'utf8'));
    model = r.model || '';
    const a = r.ok === false ? null : parseAnswer(r.answer);
    if (a && typeof a.chapter === 'string') {
      second = a.chapter.trim();
      secondSec = typeof a.secondary === 'string' ? a.secondary.trim() : '';
    }
  }
  const fp = f.chapter, fs2 = f.secondary || '';
  if (!second || !valid.has(second)) cls = 'INVALID';
  else if (second === fp) cls = 'AGREE';
  else if ((fs2 && second === fs2) || (secondSec && secondSec === fp)) cls = 'SOFT';
  else cls = 'DISAGREE';
  counts[cls]++;
  bySeat[model] = bySeat[model] || { n: 0, AGREE: 0, SOFT: 0, DISAGREE: 0, INVALID: 0 };
  bySeat[model].n++; bySeat[model][cls]++;
  if (cls !== 'AGREE') {
    rows.push({ id, cls, first: fp, firstSecondary: fs2, second: second || '', secondSecondary: secondSec });
    if (cls === 'SOFT' || cls === 'DISAGREE') {
      const k = [fp, second].sort().join(' <> ');
      confusion[k] = (confusion[k] || 0) + 1;
    }
  }
}

fs.writeFileSync(SA + '_work/chapters-disagree.json', JSON.stringify(rows, null, 1) + '\n');
const top = Object.entries(confusion).sort((a, b) => b[1] - a[1]).slice(0, 8);
console.log('ids', ids.length, 'compared', ids.length - missing.length, 'missing', missing.length);
console.log(JSON.stringify(counts));
console.log('by seat', JSON.stringify(bySeat));
console.log('top pairs (SOFT+DISAGREE, unordered)', JSON.stringify(top));
if (missing.length) { console.error('MISSING from first assignment:', missing.join(',')); process.exit(1); }
