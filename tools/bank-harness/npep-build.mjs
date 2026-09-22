// Neuro endpoint: assemble Codex rows into a splice-ready .draft.js and run the machine checks.
// usage: node npep-build.mjs <token> <chapterId> <chapterName> <rowsDir> <keyread.json> <ocrDir> <outDraft.js> <checks.md>
// (paths relative to the repo root). Checks written to checks.md; a row with any FLAG needs a human/refuter look.
import fs from 'node:fs';

const [TOKEN, CHAPTER, CHNAME, ROWS, KEYS, OCR, OUT, CHECKS] = process.argv.slice(2);
if (!CHECKS) throw new Error('usage: node npep-build.mjs <token> <chapterId> <chapterName> <rowsDir> <keyread.json> <ocrDir> <outDraft.js> <checks.md>');
const pad = p => String(p).padStart(4, '0');
const MARKER = 'Written for this bank — the endpoint file prints no explanation here.';
const fix = s => String(s ?? '').replace(/â€”/g, '—').replace(/Â·/g, '·').replace(/\r/g, '');
const q = s => "'" + fix(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n') + "'";
const keys = fs.existsSync(KEYS) ? JSON.parse(fs.readFileSync(KEYS, 'utf8')) : {};
const rows = fs.readdirSync(ROWS).filter(f => /^n\d+[a-e]?\.json$/.test(f)).map(f => ({ ...JSON.parse(fs.readFileSync(`${ROWS}/${f}`, 'utf8')), _pk: f.replace(/.json$/, '') })).sort((a, b) => a.qPage - b.qPage);
const norm = s => fix(s).toLowerCase().replace(/[^a-z0-9.%<>=\/-]+/g, ' ').trim();
const toks = s => new Set(norm(s).split(' ').filter(t => t.length > 1));
const nums = s => new Set((fix(s).match(/\d+(?:[.,]\d+)?/g) || []));
const ocrText = p => { try { return fs.readFileSync(`${OCR}/p${pad(p)}.txt`, 'utf8'); } catch (e) { return ''; } };

const flags = [], entries = [], seen = new Set();
for (const r of rows) {
  const f = [];
  const kr = keys[r._pk];   // keyread is keyed by PAIR key (row file name), not by printed number
  if (r.key === null || r.key === undefined) f.push('Codex key NULL (no visible mark)');
  else if (!kr) f.push('no independent key read');
  else if (kr.marked === null) f.push('Gemini key read NULL, Codex key ' + 'abcde'[r.key]);
  else if (kr.marked !== 'abcde'[r.key]) f.push(`KEY DISAGREE: Codex ${'abcde'[r.key]} vs Gemini ${kr.marked}`);
  if (kr && kr.printed && kr.printed !== r.options.length) f.push(`option count: Codex ${r.options.length} vs Gemini ${kr.printed}`);
  const oq = ocrText(r.qPage);
  const a = toks(r.stem + ' ' + r.options.join(' ')), b = toks(oq);
  const inter = [...a].filter(x => b.has(x)).length, cov = inter / (a.size || 1), rcov = inter / (b.size || 1), jac = Math.min(cov, rcov);
  if (jac < 0.85) f.push('text vs OCR overlap ' + jac.toFixed(2) + ' (codex-in-ocr ' + cov.toFixed(2) + ', ocr-in-codex ' + rcov.toFixed(2) + ')');
  const na = nums(r.stem + ' ' + r.options.join(' ')), nb = nums(oq);
  const skip = new Set([String(r.n), String(r.pairN), String(r.qPage), String(r.aPage)]);
  const dn = [...na].filter(x => !nb.has(x) && !skip.has(x)).concat([...nb].filter(x => !na.has(x) && !skip.has(x)));
  if (dn.length) f.push('numbers differ from OCR: ' + dn.join(','));
  if (kr && kr.stem !== undefined) {   // second independent reader (Gemini, other house) transcribed the same page
    const cmp = (x, y) => { const tx = toks(x), ty = toks(y), i = [...tx].filter(t => ty.has(t)).length; return Math.min(i / (tx.size || 1), i / (ty.size || 1)); };
    const numDiff = (x, y) => { const nx = nums(x), ny = nums(y); return [...nx].filter(t => !ny.has(t) && !skip.has(t)).concat([...ny].filter(t => !nx.has(t) && !skip.has(t))); };
    const cq = r.stem + ' ' + r.options.join(' '), gq = kr.stem + ' ' + (kr.options || []).join(' ');
    if (!gq.trim()) f.push('Gemini returned no stem/options');
    else {
      const s = cmp(cq, gq);
      if (s < 0.85) f.push('Codex vs Gemini stem/options overlap ' + s.toFixed(2));
      const d = numDiff(cq, gq);
      if (d.length) f.push('numbers differ Codex vs Gemini: ' + d.join(','));
    }
    if (r.box || kr.box) {
      const s = cmp(r.box || '', kr.box || '');
      if (s < 0.85) f.push('Codex vs Gemini box overlap ' + s.toFixed(2) + (r.box ? '' : ' (Codex read no box)'));
      else { const d = numDiff(r.box, kr.box); if (d.length) f.push('box numbers differ Codex vs Gemini: ' + d.join(',')); }
    }
  }
  if (r.pairN !== undefined && r.pairN !== r.n) f.push(`printed number ${r.n} (Codex) vs OCR/inferred ${r.pairN}`);
  if (r.printedNumber === null && r.pairN !== undefined) f.push('Codex saw no printed number');
  if (seen.has(r.n)) f.push('DUPLICATE number ' + r.n + ' in this chapter: id collides');
  seen.add(r.n);
  if (r.figure) f.push('FIGURE: ' + (r.figureDesc || ''));
  const validCh = new Set(JSON.parse(fs.readFileSync(new URL('./neuro-chapters.json', import.meta.url), 'utf8')).map(c => c.id));
  const filed = CHAPTER === 'AUTO' ? (validCh.has(r.chapter) ? r.chapter : null) : CHAPTER;
  if (CHAPTER === 'AUTO' && !filed) f.push('invalid chapter id from Codex: ' + r.chapter);
  else if (CHAPTER !== 'AUTO' && r.chapter !== CHAPTER) f.push('filed elsewhere: ' + r.chapter + ' (' + (r.filingNote || '') + ')');
  const explanation = fix(r.box ? r.box : r.explanation).trim();
  if (!r.box && !explanation.endsWith(MARKER)) f.push('marker missing/mangled');
  if (f.length) flags.push({ n: r.n, f });
  entries.push(`{ id:'npep-${TOKEN}-${r.n}', bank:'endpoint', module:'neuropsych', chapter:${q(filed || 'nr-intro')},
  stem:${q(r.stem)},
  options:[${r.options.map(q).join(', ')}],
  answer:${r.key},
  explanation:${q(explanation)},
  objective:${q(r.objective)},
  source:${q(`Neuro endpoint.pdf, ${CHNAME}, Q${r.n}, p.${r.qPage}${r.aPage ? ` (answer p.${r.aPage})` : ""}`)}
}`);
}
fs.writeFileSync(OUT, `/*\n * "Neuro endpoint.pdf" - ${CHNAME}: ${entries.length} rows built by tools/bank-harness/npep-build.mjs (HEADER TO BE HAND-EDITED).\n */\n\n` + entries.join(',\n\n') + '\n', 'utf8');
fs.writeFileSync(CHECKS, `# ${CHNAME} machine checks\n\nrows ${rows.length}, flagged ${flags.length}\n\n` + flags.map(x => `- n${x.n}: ` + x.f.join(' | ')).join('\n') + '\n', 'utf8');
console.log('rows', rows.length, 'flagged', flags.length, '->', OUT, CHECKS);
