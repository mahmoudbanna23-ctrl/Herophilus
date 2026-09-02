// Splice peds House ch.4 (draft-A + draft-B) into app/data/questions.peds.js
// Structural only: never anchors on a bare newline (file is mixed CRLF/LF).
// Usage: node splice-ch04.js          (dry run, prints the plan)
//        node splice-ch04.js --write  (writes)
const fs = require('fs');
const ROOT = 'D:/claude os/Medical school/Herophilus';
const TGT  = ROOT + '/app/data/questions.peds.js';
const QB   = ROOT + '/content/peds/qb-pages/';

function loadVar(file, name) {
  return eval(fs.readFileSync(file, 'utf8') + ';' + name);
}

const A = loadVar(QB + 'house-ch04-haem.draft-A.js', 'PEDHD_HAEM_DRAFT_A');
const B = loadVar(QB + 'house-ch04-haem.draft-B.js', 'PEDHD_HAEM_DRAFT_B');
const S = loadVar(QB + 'house-ch04-haem.array.js',   'PEDHD_HAEM_STAGED');

// sparse-hole safe
function holes(arr) { const h = []; for (let i = 0; i < arr.length; i++) if (!(i in arr)) h.push(i); return h; }
const bad = [];
if (holes(A).length) bad.push('draft-A holes ' + holes(A));
if (holes(B).length) bad.push('draft-B holes ' + holes(B));
if (A.length !== 13) bad.push('draft-A length ' + A.length + ' expected 13');
if (B.length !== 12) bad.push('draft-B length ' + B.length + ' expected 12');

const ALL = A.concat(B);
const MK = 'Written for this bank \u2014 pediatric .pdf prints no explanation here.';

// id sequence must be pedhd-haem-1 .. -25 in order
ALL.forEach((q, i) => {
  const want = 'pedhd-haem-' + (i + 1);
  if (q.id !== want) bad.push('id[' + i + '] ' + q.id + ' expected ' + want);
  if (q.bank !== 'house') bad.push(q.id + ' bank ' + q.bank);
  if (q.module !== 'pediatrics') bad.push(q.id + ' module ' + q.module);
  const st = S[i];
  if (!st) { bad.push(q.id + ' no staging row'); return; }
  if (q.stem !== st.stem) bad.push(q.id + ' stem drift');
  if (JSON.stringify(q.options) !== JSON.stringify(st.opts)) bad.push(q.id + ' option drift');
  const wantAns = 'ABCDE'.indexOf(st.key);
  if (q.answer !== wantAns) bad.push(q.id + ' key drift: answer ' + q.answer + ' vs printed ' + st.key);
  // marker must be the LAST line of explanation, and must never appear in source
  const lines = String(q.explanation).split('\n');
  if (lines[lines.length - 1].trim() !== MK) bad.push(q.id + ' marker not last line of explanation');
  if (String(q.source).indexOf('prints no explanation here') !== -1) bad.push(q.id + ' marker leaked into source');
});

// chapter tokens must resolve
const M = loadVar(ROOT + '/app/data/modules.js', 'MODULES');
const chs = new Set([].concat(...M.find(x => x.id === 'pediatrics').groups.map(g => g.chapters)).map(c => c[0]));
ALL.forEach(q => { if (!chs.has(q.chapter)) bad.push(q.id + ' unknown chapter ' + q.chapter); });

// id collision against the live file
const live = fs.readFileSync(TGT, 'utf8');
ALL.forEach(q => { if (live.indexOf("'" + q.id + "'") !== -1) bad.push(q.id + ' ALREADY IN LIVE FILE'); });

const liveIds = (live.match(/id\s*:\s*'[a-z0-9-]+'/g) || []).length;
const liveMk  = (live.match(/prints no explanation here/g) || []).length;

console.log('draft-A', A.length, 'draft-B', B.length, 'total', ALL.length);
console.log('live entries', liveIds, 'live markers', liveMk);
console.log('predicted after splice: entries', liveIds + ALL.length, 'markers', liveMk + ALL.length);
console.log('BAD', bad.length);
bad.forEach(x => console.log('  !', x));
if (bad.length) { console.log('\nNOT SPLICING.'); process.exit(1); }

if (process.argv.indexOf('--write') === -1) { console.log('\ndry run only; pass --write'); process.exit(0); }

// structural splice: find the final "];" terminator, insert before it
const close = live.lastIndexOf('];');
if (close === -1) { console.log('no terminator found'); process.exit(1); }
const head = live.slice(0, close);
const tail = live.slice(close);
// the last entry ends with "}" + whitespace; add a comma after it
const lastBrace = head.lastIndexOf('}');
const body = head.slice(0, lastBrace + 1) + ',\n' + fmt(ALL) + head.slice(lastBrace + 1);
fs.writeFileSync(TGT, body + tail, 'utf8');
console.log('written');

function esc(s) { return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n'); }
function fmt(list) {
  return list.map(q => {
    const L = [];
    L.push('  {');
    L.push("    id:'" + q.id + "', bank:'" + q.bank + "', module:'" + q.module + "', chapter:'" + q.chapter + "',");
    L.push("    stem:'" + esc(q.stem) + "',");
    L.push('    options:[' + q.options.map(o => "'" + esc(o) + "'").join(', ') + '],');
    L.push('    answer:' + q.answer + ',');
    if (q.image) {
      L.push("    image:'" + q.image + "', imgAlt:'" + esc(q.imgAlt) + "'" + (q.imgEssential ? ', imgEssential:true' : '') + ',');
    }
    L.push("    explanation:'" + esc(q.explanation) + "',");
    L.push("    objective:'" + esc(q.objective) + "',");
    L.push("    source:'" + esc(q.source) + "'");
    L.push('  }');
    return L.join('\n');
  }).join(',\n');
}
