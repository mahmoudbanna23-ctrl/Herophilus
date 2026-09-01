// Splice a .draft.js into a shipped corpus file. REBUILT 2026-09-02.
//
//   node tools/qb-pipeline/splice.js <draft.js> <corpus.js> [--go]
//
// Dry run by default. --go writes, after taking a .bak next to the corpus.
//
// The corpus files are MIXED CRLF/LF — original body CRLF, spliced entries LF
// — so nothing here may anchor on a bare newline. The insertion point is found
// structurally: the last closing bracket of the array literal.

'use strict';
const fs = require('fs');
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

fs.writeFileSync(corpusPath + '.bak', src, 'utf8');
fs.writeFileSync(corpusPath, out, 'utf8');

const after = L.loadCorpus(corpusPath).length;
console.log('wrote ' + corpusPath);
console.log('  backup  ' + corpusPath + '.bak');
console.log('  ' + before + ' -> ' + after + '  (expected ' + (before + draft.length) + ')');
if (after !== before + draft.length) {
  console.log('MISMATCH — restore from the .bak and find out why before doing anything else.');
  process.exit(1);
}
