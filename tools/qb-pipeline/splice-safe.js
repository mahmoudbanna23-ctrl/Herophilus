// Splice a .draft.js into a shipped corpus file — the .bak-safe variant.
//
//   node tools/qb-pipeline/splice-safe.js <draft.js> <corpus.js> <backup-dir> [--go]
//
// Same insertion mechanics as splice.js (which this does not modify — other
// module chats are running against it). The ONE difference is the backup:
//
//   splice.js writes to  corpusPath + '.bak'
//
// which for app/data/questions.ophtho.js recreates app/data/questions.ophtho.js.bak
// — a file the app LOADS if anything ever globs app/data/*.js, and one MEMORY.md
// already flags for deletion because a stale 1,470-entry copy of it was sitting
// there. A backup that ships is not a backup. This script refuses to write one
// inside app/data at all.
//
// Dry run by default. Written 2026-09-02.

'use strict';
const fs = require('fs');
const path = require('path');
const L = require('./lib.js');

const args = process.argv.slice(2);
const go = args.includes('--go');
const [draftPath, corpusPath, backupDir] = args.filter(a => a !== '--go');
if (!draftPath || !corpusPath || !backupDir) {
  console.error('usage: splice-safe.js <draft> <corpus> <backup-dir> [--go]');
  process.exit(2);
}

// The whole point of this file: never put the backup where the app can load it.
const bdir = path.resolve(backupDir);
if (/[\\/]app[\\/]data([\\/]|$)/i.test(bdir)) {
  console.error('REFUSING: backup dir is inside app/data — the app globs that folder.');
  process.exit(1);
}
if (!fs.existsSync(bdir)) fs.mkdirSync(bdir, { recursive: true });

const draftText = fs.readFileSync(draftPath, 'utf8').replace(/\s+$/, '');
const draft = L.loadDraft(draftPath);          // proves it parses before we touch anything
const beforeArr = L.loadCorpus(corpusPath);
const before = beforeArr.length;

// Ids must not already be shipped, and must be unique within the draft.
const shipped = new Set(beforeArr.map(q => q.id));
const seen = new Set();
const clash = [];
draft.forEach(q => {
  if (shipped.has(q.id)) clash.push(q.id + ': ALREADY SHIPPED');
  if (seen.has(q.id)) clash.push(q.id + ': duplicated within the draft');
  seen.add(q.id);
});
if (clash.length) {
  console.error('REFUSING — id problems:');
  clash.forEach(c => console.error('  ! ' + c));
  process.exit(1);
}

const src = fs.readFileSync(corpusPath, 'utf8');
const close = src.lastIndexOf('];');
if (close < 0) { console.error('no closing "];" in ' + corpusPath); process.exit(1); }

// The corpus is MIXED CRLF/LF — original body CRLF, spliced entries LF — so the
// insertion point is found structurally, never by anchoring on a newline.
const body = draftText.replace(/,\s*$/, '');
const head = src.slice(0, close).replace(/\s+$/, '');
const out = head + ',\n\n' + body + '\n\n' + src.slice(close);

console.log('corpus now      ' + before);
console.log('draft entries   ' + draft.length);
console.log('corpus after    ' + (before + draft.length));
console.log('insertion at    byte ' + close + ' of ' + src.length);
console.log('backup dir      ' + bdir);

if (!go) { console.log('\nDRY RUN — re-run with --go to write'); process.exit(0); }

const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const bak = path.join(bdir, path.basename(corpusPath) + '.' + stamp + '.bak');
fs.writeFileSync(bak, src, 'utf8');
fs.writeFileSync(corpusPath, out, 'utf8');

const afterArr = L.loadCorpus(corpusPath);
const after = afterArr.length;
console.log('\nwrote ' + corpusPath);
console.log('  backup  ' + bak);
console.log('  ' + before + ' -> ' + after + '  (expected ' + (before + draft.length) + ')');

// Array.filter skips sparse holes — index the array instead.
let holes = 0;
for (let i = 0; i < afterArr.length; i++) if (!(i in afterArr)) holes++;
console.log('  sparse holes ' + holes + '   unique ids ' + new Set(afterArr.map(q => q.id)).size);

if (after !== before + draft.length || holes) {
  console.log('MISMATCH — restore from the backup and find out why before doing anything else.');
  process.exit(1);
}
