const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.resolve(__dirname, '..');
let failed = false;
// same wrap rule as the parser: a line broken right after a hyphen/dash that touches a word joins with no space
const collapse = s => s.replace(/(\S[-‐‑–])[ \t]*\n[ \t]*(?=\S)/g, '$1').replace(/\s+/g, ' ').trim();
const STOP = /^[ \t]*(?:Block \d+ ·|Then do Lissauer|Mixed mock|EMQ \d+ ·|⏱)/;
const SBA_HEAD = /^[ \t]*((?:\d+\.\d+)|M\d+)[ \t]+·[ \t]+.+?[ \t]*$/;
const EMQ_HEAD = /^[ \t]*EMQ \d+[ \t]+·/;
const EMQ_NUM = /^[ \t]*(\d+\.\d+)[ \t]*$/;

function pageFiles(part) {
  const dir = path.join(root, part);
  return fs.readdirSync(dir).filter(f => /^p\d{4}\.txt$/.test(f)).sort()
    .map(f => ({ page: Number(f.slice(1, 5)), text: fs.readFileSync(path.join(dir, f), 'utf8').replace(/\r/g, '').replace(/\f/g, '') }));
}
function rawCounts(pages) {
  const text = pages.map(p => p.text).join('\n');
  return {
    headers: [...text.matchAll(/^\s*(?:\d+\.\d+|M\d+)\s+·\s+.+?\s*$/gm)].length,
    answers: [...text.matchAll(/^\s*Answer:\s*[A-E]\./gm)].length
  };
}
// Independent of the parser: a line-by-line scan of the raw page text. For every item number it returns the
// printed explanation (text after the Answer marker, or after the "X — " line for an EMQ, up to the next item
// header or the end of the block), whitespace collapsed, and for an EMQ the printed size of its option list.
function rawExplanations(pages) {
  const lines = pages.map(p => p.text).join('\n').split('\n');
  const out = new Map(), setSize = new Map();
  let cur = null, mode = null, optionLines = null, setNums = [];
  const close = () => { if (cur) out.set(cur.num, collapse(cur.buf.join('\n'))); cur = null; mode = null; };
  const closeSet = () => {
    if (optionLines) { const n = collapse(optionLines.join(' ')).replace(/^Options:\s*/, '').split(/\s·\s/).length; for (const k of setNums) setSize.set(k, n); }
    optionLines = null; setNums = [];
  };
  for (const line of lines) {
    let m;
    if (STOP.test(line)) { close(); if (EMQ_HEAD.test(line)) { closeSet(); optionLines = []; mode = 'opts'; } else if (mode === 'opts') mode = null; continue; }
    if ((m = line.match(SBA_HEAD))) { close(); cur = { num: m[1], buf: [], on: false }; mode = 'sba'; continue; }
    if (optionLines && mode === 'opts') {
      if (EMQ_NUM.test(line)) mode = 'emqwait'; else { optionLines.push(line); continue; }
    }
    if ((m = line.match(EMQ_NUM))) { close(); cur = { num: m[1], buf: [], on: false }; mode = 'emq'; setNums.push(m[1]); continue; }
    if (!cur) continue;
    if (!cur.on) {
      if (mode === 'sba' && /^[ \t]*Answer:[ \t]*[A-E]\./.test(line)) cur.on = true;
      else if (mode === 'emq' && /^[ \t]*[A-J][ \t]+—[ \t]/.test(line)) { cur.on = true; cur.buf.push(line); }
    } else cur.buf.push(line);
  }
  close(); closeSet();
  return { out, setSize };
}
function load(file, name) {
  const context = {};
  vm.runInNewContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
  return context[name];
}
function check(file, name, part) {
  const items = load(file, name), ids = new Set(), kinds = {}, blocks = {};
  const pages = pageFiles(part), pageText = new Map(pages.map(p => [p.page, p.text]));
  const flat = collapse(pages.map(p => p.text).join('\n'));
  const { out: rawExp, setSize } = rawExplanations(pages);
  let expMismatch = 0, optCut = 0, pageBad = 0, emqSize = 0;
  for (const item of items) {
    kinds[item.kind] = (kinds[item.kind] || 0) + 1;
    blocks[item.block] = (blocks[item.block] || 0) + 1;
    const errors = [];
    if (ids.has(item.id)) errors.push('duplicate id');
    ids.add(item.id);
    if (!item.stem) errors.push('empty stem');
    if (!Array.isArray(item.options) || item.options.length < 2) errors.push('fewer than 2 options');
    if (!Number.isInteger(item.answer) || item.answer < 0 || item.answer >= item.options.length) errors.push('answer out of range');
    if (item.answer !== item.keyLetter.charCodeAt(0) - 65) errors.push('key does not match selected option');
    if (item.options.some(option => /^[A-J]\./.test(option))) errors.push('option retains letter');
    if (/Answer:/.test(item.stem)) errors.push('stem contains Answer:');
    // explanation must equal the printed explanation, recomputed from the raw pages
    const want = rawExp.get(item.num);
    if (want === undefined || item.explanation !== want) { expMismatch++; errors.push(`explanation differs from printed (${item.explanation.length} vs ${want === undefined ? 'none' : want.length} chars)`); }
    // options: no dangling separator, and each one must be followed in the raw text by the next boundary (not cut short)
    item.options.forEach((option, i) => {
      const letter = String.fromCharCode(65 + i), nextLetter = String.fromCharCode(66 + i), last = i === item.options.length - 1;
      if (/[·,]$/.test(option) || option === '') { optCut++; errors.push(`option ${letter} ends with a separator or is empty`); return; }
      let ok;
      if (item.kind === 'emq') {
        const needle = `${letter} ${option}`;
        ok = last ? new RegExp(escape(needle) + ' \\d+\\.\\d+ ').test(flat) : flat.includes(`${needle} · ${nextLetter} `);
      } else {
        const needle = `${letter}. ${option}`;
        ok = flat.includes(last ? `${needle} Answer: ` : `${needle} ${nextLetter}. `);
      }
      if (!ok) { optCut++; errors.push(`option ${letter} is not followed by its printed boundary (cut or altered)`); }
    });
    // page: the item's printed number must literally occur, at a line start, on that page file
    const ptxt = pageText.get(item.page);
    const numRe = item.kind === 'emq' ? new RegExp('^[ \\t]*' + escape(item.num) + '[ \\t]*$', 'm') : new RegExp('^[ \\t]*' + escape(item.num) + '[ \\t]+·', 'm');
    if (!ptxt || !numRe.test(ptxt)) { pageBad++; errors.push(`printed number ${item.num} not on page ${item.page}`); }
    // setTitle: required and non-empty on emq items, absent elsewhere; the stem must not start with it
    if (item.kind === 'emq') {
      if (typeof item.setTitle !== 'string' || !item.setTitle.trim()) errors.push('emq item has empty setTitle');
      else if (item.stem.startsWith(item.setTitle)) errors.push('emq stem starts with its own setTitle');
    } else if ('setTitle' in item) errors.push('non-emq item carries setTitle');
    // EMQ sibling option count must equal the printed list size
    if (item.kind === 'emq' && setSize.get(item.num) !== item.options.length) { emqSize++; errors.push(`EMQ option count ${item.options.length} vs printed ${setSize.get(item.num)}`); }
    if (errors.length) { failed = true; console.error(`${file} ${item.id}: ${errors.join('; ')}`); }
  }
  const emqSets = new Map(), titlesByList = new Map();
  for (const item of items) if (item.kind === 'emq') {
    const k = JSON.stringify(item.options); emqSets.set(k, (emqSets.get(k) || 0) + 1);
    if (!titlesByList.has(k)) titlesByList.set(k, new Set());
    titlesByList.get(k).add(item.setTitle);
  }
  for (const titles of titlesByList.values()) if (titles.size !== 1) { failed = true; console.error(`${file}: siblings of one set differ in setTitle: ${[...titles].join(' | ')}`); }
  const distinctTitles = new Set(items.filter(i => i.kind === 'emq').map(i => i.setTitle)).size;
  console.log(`${file}: distinct setTitle values ${distinctTitles}`);
  const raw = rawCounts(pages), parsed = (kinds.sba || 0) + (kinds.mock || 0);
  console.log(`${file}: total ${items.length}; kind ${JSON.stringify(kinds)}; block ${JSON.stringify(blocks)}`);
  console.log(`${file}: raw headers ${raw.headers}; raw Answer lines ${raw.answers}; parsed SBA+mock ${parsed}`);
  console.log(`${file}: explanation mismatches ${expMismatch}; cut/separator options ${optCut}; wrong page ${pageBad}; EMQ size faults ${emqSize}; distinct EMQ lists ${emqSets.size} (items per list ${[...emqSets.values()].join(',')})`);
  if (raw.headers !== parsed || raw.answers !== parsed) { failed = true; console.error(`${file}: raw and parsed counts differ`); }
  if ([...emqSets.values()].some(n => n !== 5)) { failed = true; console.error(`${file}: an EMQ list is shared by a count of items other than 5`); }
  return { items, kinds, blocks, raw };
}
function escape(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
check('sa-p1.array.js', 'SA_P1', 'p1');
check('sa-p2.array.js', 'SA_P2', 'p2');
if (failed) process.exitCode = 1;
