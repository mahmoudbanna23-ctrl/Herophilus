// split-js.js — one-shot mover: pulls the inline main <script> block out of
// app/index.html into app/js/*.js as classic scripts, byte-for-byte, and
// rewrites index.html to <script src> them in the same order
// (PASS 2 of the b2c split, JS half). Run once: node tools/split/split-js.js
// Safe to re-run only against a fresh, unmodified index.html (it asserts the
// expected line count before touching anything).

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const INDEX = path.join(ROOT, 'app', 'index.html');
const JS_DIR = path.join(ROOT, 'app', 'js');

const raw = fs.readFileSync(INDEX);
const text = raw.toString('utf8');
const lines = text.split(/(?<=\n)/);

if (lines.length !== 5540) {
  throw new Error(`expected 5540 lines in index.html, found ${lines.length} — refusing to run against a changed file`);
}

// The main inline app <script> (not the head theme script, not the
// data/*.js <script src> tags). Confirmed by inspection.
const SCRIPT_OPEN_LINE = 133;   // '<script>'
const SCRIPT_CLOSE_LINE = 5538; // '</script>'

// 1-based inclusive line ranges, contiguous, in source order. Boundaries
// chosen at existing top-level breaks (blank line / section-comment before
// the next function or const), never inside a function, template literal,
// string, or comment. See code-map.md and the report for what each chunk
// mostly holds where it does not match its name exactly.
const ranges = {
  storage:   [134, 557],   // FIREBASE_CONFIG, SCHEDULE consts, S state, bank/schedule fns
  icons:     [558, 576],   // ico()
  theme:     [577, 613],   // currentTheme/setTheme/toggleTheme/paintThemeBtn
  utils:     [614, 713],   // toast/esc/md/ring/confetti/SRS/streak helpers
  theory:    [714, 1377],  // theory chapters/terms/markdown renderer/book reader
  gate:      [1378, 2314], // cloud sync (folded in, no dedicated name) + gate/auth/profiles
  render:    [2315, 2656], // router go()/render()/renderNav/vHome/vModule
  quiz:      [2657, 3873], // quiz flow + review + mock (folded in, no dedicated name)
  sessions:  [3874, 4480], // study session screen, schedule, search; CLEP_POSES/CL_REST
                            // constants land here too (used by clepsydra.js next)
  clepsydra: [4481, 5140], // clepsydra figure + trailing session-tick helpers
                            // (sessStartTick/sessStopTick), kept here to stay contiguous
  boot:      [5141, 5537], // modals/backup/export/import (no dedicated name) + keyboard
                            // handler + search-placeholder IIFE + boot() call/definition
};

function slice(a, b) {
  return lines.slice(a - 1, b).join('');
}

const order = ['storage', 'icons', 'theme', 'utils', 'theory', 'gate', 'render', 'quiz', 'sessions', 'clepsydra', 'boot'];
let cursor = SCRIPT_OPEN_LINE + 1;
for (const name of order) {
  const [a, b] = ranges[name];
  if (a !== cursor) {
    throw new Error(`range for ${name} starts at ${a}, expected ${cursor} — ranges must be contiguous`);
  }
  cursor = b + 1;
}
if (cursor - 1 !== SCRIPT_CLOSE_LINE - 1) {
  throw new Error(`ranges end at line ${cursor - 1}, expected script body to end at ${SCRIPT_CLOSE_LINE - 1}`);
}

const originalScriptBody = slice(SCRIPT_OPEN_LINE + 1, SCRIPT_CLOSE_LINE - 1);
const concatenated = order.map((name) => slice(...ranges[name])).join('');

if (concatenated !== originalScriptBody) {
  throw new Error('assertion failed: concatenation of JS chunks in tag order does not equal the original <script> body byte-for-byte');
}

// Assert bankOf( occurrence count survives (2 total across index.html + js/*).
const beforeBankOf = (text.match(/bankOf\(/g) || []).length;

if (!fs.existsSync(JS_DIR)) fs.mkdirSync(JS_DIR, { recursive: true });
const fileNames = {};
for (const name of order) {
  const filePath = path.join(JS_DIR, `${name}.js`);
  fs.writeFileSync(filePath, slice(...ranges[name]));
  fileNames[name] = filePath;
}

// Build the new head/body: everything up to and including the last data/*.js
// <script src> tag (line 132) is untouched; the inline <script>...</script>
// (133-5538) is replaced by <script src> tags in the same source order;
// everything from line 5539 on (</body></html>) is untouched.
const before = slice(1, SCRIPT_OPEN_LINE - 1); // lines 1-132
const after = slice(SCRIPT_CLOSE_LINE + 1, lines.length); // lines 5539-end

const scriptLines = order.map((name) => `<script src="js/${name}.js"></script>\n`).join('');

const newHtml = before + scriptLines + after;

fs.writeFileSync(INDEX, newHtml);

// Report.
const newLineCount = newHtml.split(/(?<=\n)/).filter((l, i, arr) => !(i === arr.length - 1 && l === '')).length;
console.log('index.html rewritten. New line count:', newLineCount, '(script tags added:', order.length, ')');
console.log('bankOf( occurrences before (whole original index.html):', beforeBankOf);
let totalBankOf = (newHtml.match(/bankOf\(/g) || []).length;
for (const name of order) {
  const content = fs.readFileSync(fileNames[name], 'utf8');
  const lc = content.split(/(?<=\n)/).filter((l, i, arr) => !(i === arr.length - 1 && l === '')).length;
  totalBankOf += (content.match(/bankOf\(/g) || []).length;
  console.log(`  app/js/${name}.js — ${lc} lines`);
}
console.log('bankOf( occurrences after (index.html + all js files):', totalBankOf);
