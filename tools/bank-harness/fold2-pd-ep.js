// ⚠️ KNOWN BROKEN AS COMMITTED — it asserts and refuses to write, which is correct behaviour;
// it has never written anything. Preserved from the session scratchpad so the next chat does not
// have to rewrite it. THE BUG: fold-pd-ep.js's own output joined `var Q_PEDS_EP = [` to the first
// block with no newline, so the live file now opens `var Q_PEDS_EP = [{` and this carve's
// `isOpen` (which needs `^{`) starts at entry 2 and reports `carved 149, expected 150`.
// THE FIX: recognise the `[{` head as an entry opening, and re-emit `[` + newline + blocks so the
// file returns to two entry shapes instead of three. Then dry-run until it says 150 -> 148.
// Full diagnosis: progress\resume-peds-endpoint.md, "OPEN 2026-09-03".
//
// Second fold pass: the two REWORDED reprints that the exact duplicate-stem check cannot see.
// Same carve as fold.js (two entry styles), but the source rewrite is an explicit old -> new
// string, because pedep-gp-10's source already carries a parenthetical from the first pass.
const fs = require('fs');
const P = 'D:/claude os/Medical school/Herophilus/app/data/questions.peds.ep.js';
const doWrite = process.argv.includes('--write');

const FOLD = {
  'pedep-gp-8': {
    drop: ['pedep-gp-72'],
    from: "source:'Pediatrics endpoint part1.pdf p.44'",
    to:   "source:'Pediatrics endpoint part1.pdf p.44 (the same vignette is printed again on p.175, reworded but with the same options and the same key)'",
  },
  'pedep-gp-10': {
    drop: ['pedep-gp-82'],
    from: "source:'Pediatrics endpoint part1.pdf p.48 (the same question is printed again on p.179)'",
    to:   "source:'Pediatrics endpoint part1.pdf p.48 (the same question is printed again on p.179, and on p.195 with “drive” reworded to “driver”)'",
  },
};

const dropSet = new Set();
Object.values(FOLD).forEach(f => f.drop.forEach(d => dropSet.add(d)));

const src = fs.readFileSync(P, 'utf8');
const lines = src.split('\n');
const isOpen  = L => /^\{(\s|$)/.test(L);
const isClose = L => /^\},?$/.test(L) || / \},?$/.test(L);

const blocks = [];
let head = null;
for (let i = 0; i < lines.length; i++) {
  if (!isOpen(lines[i])) continue;
  if (head === null) head = i;
  let j = i;
  while (j < lines.length && !isClose(lines[j])) j++;
  if (j >= lines.length) { console.error('unterminated block at line ' + (i + 1)); process.exit(2); }
  blocks.push({ end: j, text: lines.slice(i, j + 1).join('\n') });
  i = j;
}
const tailStart = blocks[blocks.length - 1].end + 1;
const idOf = t => (t.match(/id:'([^']+)'/) || [])[1];

const EXPECT = 150;
if (blocks.length !== EXPECT) { console.error('carved ' + blocks.length + ', expected ' + EXPECT); process.exit(2); }
const seen = new Set(blocks.map(b => idOf(b.text)));
for (const d of dropSet) if (!seen.has(d)) { console.error('id to drop not present: ' + d); process.exit(2); }
for (const k of Object.keys(FOLD)) if (!seen.has(k)) { console.error('keeper not present: ' + k); process.exit(2); }

let dropped = 0, sourced = 0;
const kept = [];
for (const b of blocks) {
  const id = idOf(b.text);
  if (dropSet.has(id)) { dropped++; console.log('  drop  ' + id); continue; }
  let t = b.text;
  if (FOLD[id]) {
    const f = FOLD[id];
    if (t.split(f.from).length - 1 !== 1) { console.error('source not matched exactly once for ' + id); process.exit(2); }
    t = t.split(f.from).join(f.to);
    sourced++;
    console.log('  keep  ' + id + '  <- ' + f.drop.join(', '));
  }
  kept.push(t.replace(/\},$/, '}'));
}
console.log('dropped ' + dropped + ' | sources rewritten ' + sourced + ' | ' + blocks.length + ' -> ' + kept.length);

const out = lines.slice(0, head).join('\n') + kept.join(',\n\n') + '\n' + lines.slice(tailStart).join('\n');
if (!doWrite) { console.log('DRY RUN'); process.exit(0); }
fs.writeFileSync(P, out);
console.log('written. bytes ' + src.length + ' -> ' + out.length);
