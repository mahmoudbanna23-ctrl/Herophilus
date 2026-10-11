/* Dry-run merge planner. Pass --write only when an authorized owner is ready to splice. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const repo = path.resolve(__dirname, '../../../../..');
const plan = JSON.parse(fs.readFileSync(path.join(__dirname, 'alsoin-plan.json'), 'utf8'));
const write = process.argv.includes('--write');
function evalQuestions(text, file) { const c = {}; vm.createContext(c); vm.runInContext(text, c, { filename: file }); return Object.values(c).find(Array.isArray); }
function objects(text) {
  const result = []; let start = -1, depth = 0, quote = null, escaped = false, line = false, block = false;
  for (let i = 0; i < text.length; i++) { const ch = text[i], nx = text[i + 1];
    if (line) { if (ch === '\n') line = false; continue; } if (block) { if (ch === '*' && nx === '/') { block = false; i++; } continue; }
    if (quote) { if (escaped) escaped = false; else if (ch === '\\') escaped = true; else if (ch === quote) quote = null; continue; }
    if (ch === '/' && nx === '/') { line = true; i++; continue; } if (ch === '/' && nx === '*') { block = true; i++; continue; } if (ch === '\'' || ch === '"' || ch === '`') { quote = ch; continue; }
    if (ch === '{') { if (depth++ === 0) start = i; } else if (ch === '}' && --depth === 0 && start >= 0) { result.push([start, i + 1]); start = -1; }
  } return result;
}
function modifyObject(text, citations) {
  const id = text.match(/(?:\bid|['"]id['"])\s*:\s*(['"])([^'"]+)\1/); if (!id) return text;
  const quoted = (text.match(/\b(?:id|bank|source)\s*:\s*'/) ? "'" : '"');
  const addition = citations.join('; ');
  let out = text;
  const also = out.match(/(?:\balsoIn|['"]alsoIn['"])\s*:\s*\[([^\]]*)\]/);
  if (also) { if (!also[1].includes('selfassess')) out = out.replace(also[0], also[0].replace(/\]$/, `${also[1].trim() ? ', ' : ''}${quoted}selfassess${quoted}]`)); }
  else out = out.replace(id[0], `${id[0]}, alsoIn:[${quoted}selfassess${quoted}]`);
  const source = out.match(/(?:\bsource|['"]source['"])\s*:\s*(['"])((?:\\.|(?!\1)[\s\S])*)\1/);
  if (!source) throw new Error(`No source for ${id[2]}`);
  if (!source[2].includes(addition)) out = out.replace(source[0], source[0].replace(source[2], `${source[2]}; ${addition}`));
  return out;
}
function equalExcept(a, b) { const x = {...a}, y = {...b}; delete x.alsoIn; delete x.source; delete y.alsoIn; delete y.source; return JSON.stringify(x) === JSON.stringify(y); }
const byFile = new Map(); for (const item of plan) { if (!byFile.has(item.liveFile)) byFile.set(item.liveFile, []); byFile.get(item.liveFile).push(item); }
let touched = 0;
for (const [file, items] of byFile) {
  const target = path.join(repo, 'app/data', file); const oldText = fs.readFileSync(target, 'utf8'); const wanted = new Map();
  for (const item of items) { if (!wanted.has(item.live)) wanted.set(item.live, []); wanted.get(item.live).push(item.cite); }
  const edits = []; for (const [start, end] of objects(oldText)) { const chunk = oldText.slice(start, end); const id = chunk.match(/(?:\bid|['"]id['"])\s*:\s*(['"])([^'"]+)\1/); if (id && wanted.has(id[2])) edits.push([start, end, modifyObject(chunk, wanted.get(id[2]))]); }
  if (edits.length !== wanted.size) throw new Error(`${file}: found ${edits.length} of ${wanted.size} planned live ids`);
  let newText = oldText; for (const edit of edits.reverse()) newText = newText.slice(0, edit[0]) + edit[2] + newText.slice(edit[1]);
  const before = evalQuestions(oldText, file), after = evalQuestions(newText, file); const beforeById = new Map(before.map(q => [q.id, q])); const afterById = new Map(after.map(q => [q.id, q]));
  assertSameEntries(before, after, wanted, file);
  if (write) fs.writeFileSync(target, newText); touched += edits.length; console.log(`${write ? 'wrote' : 'dry'} ${file}: ${edits.length} entries`);
}
console.log(`${write ? 'write' : 'dry'} passed: ${touched} live entries touched`);
function assertSameEntries(before, after, wanted, file) {
  if (before.length !== after.length) throw new Error(`${file}: entry count changed`);
  const afterById = new Map(after.map(q => [q.id, q]));
  for (const old of before) {
    const next = afterById.get(old.id);
    if (!next || (wanted.has(old.id) ? !equalExcept(old, next) : JSON.stringify(old) !== JSON.stringify(next))) {
      throw new Error(`${file}: unsafe edit for ${old.id}`);
    }
  }
}
