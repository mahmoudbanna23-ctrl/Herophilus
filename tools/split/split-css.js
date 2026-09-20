// split-css.js — one-shot mover: pulls the inline <style> block out of
// app/index.html into app/css/*.css, byte-for-byte, and rewrites index.html
// to <link> them in the same order (PASS 1 of the b2c split, CSS half only).
//
// Run once: node tools/split/split-css.js
// Safe to re-run only against a fresh, unmodified index.html (it asserts the
// expected line count before touching anything).

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const INDEX = path.join(ROOT, 'app', 'index.html');
const CSS_DIR = path.join(ROOT, 'app', 'css');

// Read raw bytes, preserve exactly (mixed line endings possible — never normalise).
const raw = fs.readFileSync(INDEX);
const text = raw.toString('utf8');

// Split into lines keeping the line terminators attached to each line, so
// reassembly is byte-exact regardless of \n vs \r\n.
const lines = text.split(/(?<=\n)/);

if (lines.length !== 8301) {
  throw new Error(`expected 8301 lines in index.html, found ${lines.length} — refusing to run against a changed file`);
}

// 1-based inclusive line ranges, contiguous, in source order.
// Boundaries chosen at existing section-divider comments (see code-map.md);
// contiguous chunks were kept over "tidy" grouping where a concern's rules
// were not contiguous in the source.
const STYLE_OPEN_LINE = 37;   // '<style>'
const STYLE_CLOSE_LINE = 2803; // '</style>'

const ranges = {
  tokens:     [38, 212],   // :root + :root[data-theme="light"] custom properties only
  base:       [213, 230],  // reset, body, button/input, focus-visible, reduced-motion
  layout:     [231, 473],  // Layout / Type / Cards / Chapter rows
  components: [474, 1558], // Question .. Theory (document view) sections
  print:      [1559, 1837],// Print / Save as PDF
  views:      [1838, 2802],// Misc, ground/film/gate visual system, Theme, Clepsydra, Sessions/backup
};

function slice(a, b) {
  // lines[] is 0-indexed; a/b are 1-based inclusive.
  return lines.slice(a - 1, b).join('');
}

// Sanity: ranges must be contiguous and cover the whole style body exactly once.
const order = ['tokens', 'base', 'layout', 'components', 'print', 'views'];
let cursor = STYLE_OPEN_LINE + 1;
for (const name of order) {
  const [a, b] = ranges[name];
  if (a !== cursor) {
    throw new Error(`range for ${name} starts at ${a}, expected ${cursor} — ranges must be contiguous`);
  }
  cursor = b + 1;
}
if (cursor - 1 !== STYLE_CLOSE_LINE - 1) {
  throw new Error(`ranges end at line ${cursor - 1}, expected style body to end at ${STYLE_CLOSE_LINE - 1}`);
}

const originalStyleBody = slice(STYLE_OPEN_LINE + 1, STYLE_CLOSE_LINE - 1);
const concatenated = order.map((name) => slice(...ranges[name])).join('');

if (concatenated !== originalStyleBody) {
  throw new Error('assertion failed: concatenation of CSS chunks in link order does not equal the original <style> body byte-for-byte');
}

// Assert the @media print text is preserved unchanged inside whichever chunk holds it.
const printBlockOriginal = slice(1559, 1837);
if (!concatenated.includes(printBlockOriginal)) {
  throw new Error('assertion failed: the Print / Save as PDF @media print block text changed');
}

// Assert the three max-aspect-ratio:5/4 occurrences all survive the split.
const beforeCount = (originalStyleBody.match(/max-aspect-ratio:5\/4/g) || []).length;
const afterCount = (concatenated.match(/max-aspect-ratio:5\/4/g) || []).length;
if (beforeCount !== 3 || afterCount !== beforeCount) {
  throw new Error(`max-aspect-ratio:5/4 count mismatch — before ${beforeCount}, after ${afterCount}`);
}

// Write the CSS files.
if (!fs.existsSync(CSS_DIR)) fs.mkdirSync(CSS_DIR, { recursive: true });
const fileNames = {};
for (const name of order) {
  const filePath = path.join(CSS_DIR, `${name}.css`);
  fs.writeFileSync(filePath, slice(...ranges[name]));
  fileNames[name] = filePath;
}

// Build the new head: everything up to and including the fonts <script> tag
// (line 36) is untouched; the <style> block (37-2803) is replaced by <link>
// tags in the same source order; everything from line 2804 on is untouched.
const before = slice(1, STYLE_OPEN_LINE - 1); // lines 1-36
const after = slice(STYLE_CLOSE_LINE + 1, lines.length); // lines 2804-end

const linkLines = order.map((name) => `<link rel="stylesheet" href="css/${name}.css">\n`).join('');

const newHtml = before + linkLines + after;

fs.writeFileSync(INDEX, newHtml);

// Report.
const newLineCount = newHtml.split(/(?<=\n)/).filter((l, i, arr) => !(i === arr.length - 1 && l === '')).length;
console.log('index.html rewritten. New line count:', newLineCount, '(link tags added:', order.length, ')');
for (const name of order) {
  const content = fs.readFileSync(fileNames[name], 'utf8');
  const lc = content.split(/(?<=\n)/).filter((l, i, arr) => !(i === arr.length - 1 && l === '')).length;
  console.log(`  app/css/${name}.css — ${lc} lines`);
}
