// ⚠️ ALREADY RAN, 2026-09-03 (165 -> 150). Kept as the record of what was folded and as the
// pattern for the next fold. ⚠️ ITS FINAL JOIN HAS A DEFECT: `lines.slice(0, head).join('\n') +
// kept.join(...)` puts NO newline between the header and the first block, so it left the live file
// opening `var Q_PEDS_EP = [{`. Valid JS — node --check, the boot check and validate-all.js all
// passed — but it created a THIRD entry shape that broke the next carve. Fix it before re-use.
//
// Fold section 1's self-reprints (and section 2's one pair) in questions.peds.ep.js.
// Byte-level. Entries open on a bare `{` at column 0. Most close on a `},` line at column 0,
// but the LAST entry closes with ` }` appended to its source line -- that is the splicer's
// convention, and a carve that only looks for a bare `}` runs off the end and swallows the `];`.
// Run with --write to rewrite; default is a dry run.
const fs = require('fs');
const P = 'D:/claude os/Medical school/Herophilus/app/data/questions.peds.ep.js';
const doWrite = process.argv.includes('--write');

const FOLD = {
  'pedep-gp-3':  { drop: ['pedep-gp-65'], note: 'the same question is printed again on p.161' },
  'pedep-gp-4':  { drop: ['pedep-gp-68', 'pedep-gp-83'],
                   note: 'the same question is printed again on p.167, and on p.197 with a fifth option added' },
  'pedep-gp-5':  { drop: ['pedep-gp-69'], note: 'the same question is printed again on p.169' },
  'pedep-gp-6':  { drop: ['pedep-gp-71'], note: 'the same question is printed again on p.173' },
  'pedep-gp-9':  { drop: ['pedep-gp-73'], note: 'the same question is printed again on p.177' },
  'pedep-gp-10': { drop: ['pedep-gp-74'], note: 'the same question is printed again on p.179' },
  'pedep-gp-11': { drop: ['pedep-gp-76'], note: 'the same question is printed again on p.183' },
  'pedep-gp-12': { drop: ['pedep-gp-77'], note: 'the same question is printed again on p.185' },
  'pedep-gp-13': { drop: ['pedep-gp-78'], note: 'the same question is printed again on p.187' },
  'pedep-gp-14': { drop: ['pedep-gp-80'], note: 'the same question is printed again on p.191' },
  'pedep-gp-15': { drop: ['pedep-gp-81'], note: 'the same question is printed again on p.193' },
  'pedep-gp-16': { drop: ['pedep-gp-84'], note: 'the same question is printed again on p.199' },
  'pedep-gp-17': { drop: ['pedep-gp-86'], note: 'the same question is printed again on p.203' },
  'pedep-nut-22':{ drop: ['pedep-nut-29'], note: 'the same question is printed again on p.294' },
};

const dropSet = new Set();
Object.values(FOLD).forEach(f => f.drop.forEach(d => dropSet.add(d)));

const src = fs.readFileSync(P, 'utf8');
const lines = src.split('\n');

// TWO entry styles coexist in this file and a carve that knows only one silently merges the other
// into its predecessor. Section 1 and draft-A open on a bare `{` and close on a `},` line; draft-B
// opens `{ id:'...` inline and closes with ` },` appended to its source line. Measured 2026-09-03:
// 127 bare + 38 inline = 165. The assertions below are what caught it.
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
if (!blocks.length) { console.error('no entry blocks found -- the file shape changed'); process.exit(2); }
const tailStart = blocks[blocks.length - 1].end + 1;
console.log('blocks carved: ' + blocks.length + ' | tail: ' + JSON.stringify(lines.slice(tailStart).join('\n')));

const idOf = t => (t.match(/id:'([^']+)'/) || [])[1];

// A block that carved wrongly shows up as a missing id or a short count, never as a crash.
const EXPECT = 165;
if (blocks.length !== EXPECT) { console.error('carved ' + blocks.length + ' blocks, expected ' + EXPECT); process.exit(2); }
const seen = new Set();
for (const b of blocks) {
  const id = idOf(b.text);
  if (!id) { console.error('a carved block has no id -- carve is wrong:\n' + b.text.slice(0, 200)); process.exit(2); }
  if (seen.has(id)) { console.error('duplicate id in carve: ' + id); process.exit(2); }
  seen.add(id);
}
for (const d of dropSet) if (!seen.has(d)) { console.error('id to drop not present: ' + d); process.exit(2); }
for (const k of Object.keys(FOLD)) if (!seen.has(k)) { console.error('keeper not present: ' + k); process.exit(2); }

// pedep-nut-22's explanation names pedep-nut-29 as an unfolded duplicate. Once nut-29 is gone that
// sentence would be a dead id, so it becomes a statement about the two PAGES instead.
const OLD_CITE = '**This exact question is reprinted later in this bank as `pedep-nut-29`** — same stem, same options, same key, with only the explanation box reworded. The two are a within-bank duplicate the bank has not folded; this entry carries the fuller discussion.';
const NEW_CITE = '**The bank prints this exact question twice**, on p.280 and again on p.294 — same stem, same options, same key, with only the explanation box reworded. It is held here once, and both pages are cited.';
let citeFixed = 0;

let dropped = 0, sourced = 0;
const kept = [];
for (const b of blocks) {
  const id = idOf(b.text);
  if (dropSet.has(id)) { dropped++; console.log('  drop  ' + id); continue; }
  let t = b.text;
  if (t.includes(OLD_CITE)) { t = t.split(OLD_CITE).join(NEW_CITE); citeFixed++; }
  if (FOLD[id]) {
    const before = t;
    t = t.replace(/(\n  source:'Pediatrics endpoint part1\.pdf p\.\d+)(')/,
                  '$1 (' + FOLD[id].note + ')$2');
    if (t === before) { console.error('  SOURCE REWRITE FAILED for ' + id); process.exit(2); }
    sourced++;
    console.log('  keep  ' + id + '  <- ' + FOLD[id].drop.join(', '));
  }
  // Normalise every block to end with a bare `}` so the join can add the separators.
  t = t.replace(/\},$/, '}');
  kept.push(t);
}

if (citeFixed !== 1) { console.error('expected exactly 1 nut-29 citation rewrite, made ' + citeFixed); process.exit(2); }
console.log('dropped ' + dropped + ' | sources rewritten ' + sourced + ' | cite rewrites ' + citeFixed
  + ' | entries ' + blocks.length + ' -> ' + kept.length);

const out = lines.slice(0, head).join('\n') + kept.join(',\n\n') + '\n' + lines.slice(tailStart).join('\n');

if (!doWrite) { console.log('DRY RUN. re-run with --write'); process.exit(0); }
fs.writeFileSync(P, out);
console.log('written. bytes ' + src.length + ' -> ' + out.length);
