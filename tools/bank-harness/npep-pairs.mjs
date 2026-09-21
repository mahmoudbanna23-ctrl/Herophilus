// Neuro endpoint: build pairs.json (question page, answer page) from the OCR, and report every irregularity.
// usage: node npep-pairs.mjs <ocrDir> <firstPage> <lastPage> <out.json>     (paths relative to the repo root)
// A HARD candidate = 2+ option lines. A SOFT candidate = no options read (options in a figure, odd bullets) but numbered with a
// "?" or repeated on the next page (sim >= 0.7); Codex rejects a soft pair that is a lecture slide ({"notQuestion":true}).
// It pairs with the NEXT page when that page repeats its text (sim >= 0.55), else it is a single page (a:null; Codex reads the key
// off it). Pair number = number read by OCR, else last+1 (inferred, listed); Codex reads the printed number off the image and the
// builder flags any disagreement. pk = unique pair key, n<number>[b,c...]. Pages skipped inside the question region are listed.
import fs from 'node:fs';
import { classify, readOcr, sim } from './npep-lib.mjs';
const [DIR, A, B, OUT] = process.argv.slice(2);
if (!OUT) throw new Error('usage: node npep-pairs.mjs <ocrDir> <firstPage> <lastPage> <out.json>');
const pairs = [], odd = [], skipped = [], used = new Set();
let last = 0;
for (let p = +A; p <= +B;) {
  const t = readOcr(DIR, p);
  if (t === null) { odd.push(`p.${p}: NO OCR`); p++; continue; }
  const c = classify(t);
  const t2 = readOcr(DIR, p + 1), s = t2 === null ? 0 : sim(t, t2);
  const hard = c.kind === 'q';
  const soft = !hard && ((s >= 0.7 && t.length >= 100) || (c.kind === 'numbered-no-options' && (s >= 0.55 || /\?/.test(t.slice(0, 300)))));
  if (!hard && !soft) { if (pairs.length) skipped.push(`skip p.${p}: ${t.slice(0, 70).replace(/\s+/g, ' ')}`); p++; continue; }
  const paired = s >= 0.55;
  const c2 = paired ? classify(t2) : { n: null };
  let n = c.n ?? c2.n ?? null, how = '';
  if (c.n != null && c2.n != null && c2.n !== c.n) odd.push(`p.${p}: number ${c.n} vs answer page ${c2.n}`);
  if (n === null) { n = last + 1; how = 'inferred'; odd.push(`p.${p}: number unread, inferred ${n}`); }
  else if (n <= last || n > last + 4) { odd.push(`p.${p}: OCR number ${n} does not follow ${last}, inferred ${last + 1}`); n = last + 1; how = 'inferred'; }
  let pk = 'n' + n; for (const suf of ['b', 'c', 'd', 'e']) { if (!used.has(pk)) break; pk = 'n' + n + suf; }
  used.add(pk);
  if (soft) odd.push(`p.${p} (Q${n}): SOFT pair, no options read; Codex decides if it is a question`);
  if (!paired) odd.push(`p.${p} (Q${n}): single page, no answer page (next page sim ${s.toFixed(2)}); Codex reads the key off it`);
  else if (s < 0.7) odd.push(`p.${p} (Q${n}): weak pair sim ${s.toFixed(2)} with p.${p + 1}`);
  pairs.push({ pk, n, q: p, a: paired ? p + 1 : null, ...(how ? { inferred: true } : {}), ...(soft ? { soft: true } : {}) });
  if (!(soft && how)) last = n;   // a soft pair with a guessed number must not shift the numbering of the real questions
  p += paired ? 2 : 1;
}
fs.writeFileSync(OUT, JSON.stringify(pairs, null, 1));
console.log('pairs', pairs.length, 'soft', pairs.filter(x => x.soft).length, 'numbers', pairs[0]?.n + '..' + pairs[pairs.length - 1]?.n, 'inferred', pairs.filter(x => x.inferred).length);
console.log(odd.join('\n') || 'no irregularities');
console.log(skipped.join('\n'));
