// Byte-level splice of ch.10 draft-A (10) then draft-B (5) into questions.peds.js.
// Entries in both drafts and in the live file sit at column 0, not indented.
// NOTE: draft-A closes its last entry "}," and draft-B closes "}" — carve to the
// closing "];" and trim, rather than anchoring on "\n},".
const fs = require('fs');
const R = 'D:/claude os/Medical school/Herophilus/';
const LIVE = R + 'app/data/questions.peds.js';

function carve(path, varName, expect) {
  const t = fs.readFileSync(path, 'utf8');
  const v = t.indexOf('var ' + varName + ' = [');
  if (v < 0) throw new Error(path + ': var line not found');
  const first = t.indexOf('\n{', v);
  const close = t.lastIndexOf('\n];');
  if (first < 0 || close < first) throw new Error(path + ': entries not found');
  let block = t.slice(first + 1, close);          // "{ … }"  or  "{ … },"
  block = block.replace(/,\s*$/, '').replace(/\s+$/, '');
  const n = (block.match(/\n\{/g) || []).length + 1;
  if (n !== expect) throw new Error(path + ': expected ' + expect + ' entries, counted ' + n);
  return block;
}

const a = carve(R + 'content/peds/qb-pages/house-ch10-nutrition.draft-A.js', 'PEDHD_NUTR_DRAFT_A', 10);
const b = carve(R + 'content/peds/qb-pages/house-ch10-nutrition.draft-B.js', 'PEDHD_NUTR_DRAFT_B', 5);

const live = fs.readFileSync(LIVE, 'utf8');
const tail = '\n}\n];';
const at = live.lastIndexOf(tail);
if (at < 0) throw new Error('live: closing tail not found');
const out = live.slice(0, at) + '\n},\n\n' + a + ',\n\n' + b + '\n];' + live.slice(at + tail.length);
fs.writeFileSync(LIVE, out, 'utf8');
console.log('spliced. bytes ' + live.length + ' -> ' + out.length);
