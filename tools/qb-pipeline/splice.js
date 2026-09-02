// Splice a .draft.js into a shipped corpus file. REBUILT 2026-09-02.
//
//   node tools/qb-pipeline/splice.js <draft.js> <corpus.js> [--go]
//
// Dry run by default. --go writes, after taking a timestamped backup.
//
// ⚠️ BACKUP PATH FIXED 2026-09-02. This used to write `corpusPath + '.bak'`,
// which for app/data/questions.ophtho.js recreated app/data/questions.ophtho.js.bak
// — a stale 1,470-entry copy sitting in the folder the app loads from. A backup
// that ships is not a backup. Backups now go to `_backups/` at the repo root,
// timestamped so a second splice cannot overwrite the first, and the script
// refuses outright to put one inside app/data.
//
// The CLI is UNCHANGED — same arguments, same dry-run-by-default, same
// insertion mechanics — so commands already in flight in other module chats
// keep working. The only visible difference is the backup path it prints.
//
// The corpus files may be MIXED CRLF/LF — original body CRLF, spliced entries
// LF — so nothing here may anchor on a bare newline. The insertion point is
// found structurally: the last closing bracket of the array literal.

'use strict';
const fs = require('fs');
const path = require('path');
const L = require('./lib.js');

const [draftPath, corpusPath, flag] = process.argv.slice(2);
if (!draftPath || !corpusPath) {
  console.error('usage: splice.js <draft> <corpus> [--go]');
  process.exit(2);
}
const go = flag === '--go';

const draftText = fs.readFileSync(draftPath, 'utf8').replace(/\s+$/, '');
const draft = L.loadDraft(draftPath);          // proves it parses before we touch anything
const before = L.loadCorpus(corpusPath).length;

const src = fs.readFileSync(corpusPath, 'utf8');
const close = src.lastIndexOf('];');
if (close < 0) { console.error('no closing "];" in ' + corpusPath); process.exit(1); }

// The draft is a bare run and must not carry a trailing comma of its own.
const body = draftText.replace(/,\s*$/, '');
const head = src.slice(0, close).replace(/\s+$/, '');
const out = head + ',\n\n' + body + '\n\n' + src.slice(close);

if (!go) {
  console.log('DRY RUN');
  console.log('  corpus now      ' + before);
  console.log('  draft entries   ' + draft.length);
  console.log('  corpus after    ' + (before + draft.length));
  console.log('  insertion at    byte ' + close + ' of ' + src.length);
  console.log('\nre-run with --go to write');
  process.exit(0);
}

// Never leave a backup where the app loads its data from.
const bdir = path.resolve(__dirname, '..', '..', '_backups');
if (/[\\/]app[\\/]data([\\/]|$)/i.test(bdir)) {
  console.error('REFUSING: backup dir is inside app/data — the app loads that folder.');
  process.exit(1);
}
if (!fs.existsSync(bdir)) fs.mkdirSync(bdir, { recursive: true });

const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const bak = path.join(bdir, path.basename(corpusPath) + '.' + stamp + '.bak');

fs.writeFileSync(bak, src, 'utf8');
fs.writeFileSync(corpusPath, out, 'utf8');

const after = L.loadCorpus(corpusPath).length;
console.log('wrote ' + corpusPath);
console.log('  backup  ' + bak);
console.log('  ' + before + ' -> ' + after + '  (expected ' + (before + draft.length) + ')');
if (after !== before + draft.length) {
  console.log('MISMATCH — restore from ' + bak + ' and find out why before doing anything else.');
  process.exit(1);
}
