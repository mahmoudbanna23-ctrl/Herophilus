// Neuro endpoint: shared page classifier. Tesseract often loses the printed question number (the number sits in a graphic
// blob: "J, 55-year-old male...", "yn 32-year-old man..."), so a question page is recognised by its option lines, and a
// question's page is paired with the next page by TEXT SIMILARITY (the answer page repeats the question). The number is a
// bonus read here and is read again by Codex off the image.
import fs from 'node:fs';
export const pad = p => String(p).padStart(4, '0');
export const readOcr = (dir, p) => { try { return fs.readFileSync(`${dir}/p${pad(p)}.txt`, 'utf8'); } catch (e) { return null; } };
export function classify(t) {
  if (t === null) return { kind: 'none' };
  const head = t.split('\n').slice(0, 2).join('\n').replace(/^[\s*#~|_}>@«“”"'`.,:;=—-]+/, '');
  const m = head.match(/^(?:[A-Za-z]{1,2}[\s,]+)?(\d{1,3})\s*[.)]\s*\S/);
  const opts = (t.match(/^\W{0,3}[a-eA-E][.)]\s/gm) || []).length;
  if (opts >= 2) return { kind: 'q', n: m ? +m[1] : null, opts };
  if (m) return { kind: 'numbered-no-options', n: +m[1] };
  return { kind: 'other' };
}
const toks = s => new Set(s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').split(' ').filter(x => x.length > 2));
// share of the question page's tokens found on the candidate answer page
export function sim(tq, ta) { const a = toks(tq), b = toks(ta); if (!a.size) return 0; let i = 0; for (const x of a) if (b.has(x)) i++; return i / a.size; }
