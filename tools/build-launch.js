/* Build the upload-ready dist/ folder for launch, with the two locked
 * subjects' question data genuinely absent — not hidden in the client.
 *
 *   node tools/build-launch.js
 *
 * Ophthalmology and Neuropsychiatry are going behind a "Coming soon" card for
 * this launch. That has to mean the bytes never leave this machine, not that
 * the client happens not to render them — a curious student opening dev
 * tools on the shipped site must not be able to read next month's question
 * bank. So this tool ships a COPY of app/ with those subjects' data files
 * physically removed, never the original app/ folder itself.
 *
 * WHY REMOVING A DATA FILE IS SAFE AT ALL: app/data/questions.js rebuilds one
 * QUESTIONS array from `window.Q_ENT || []`, `window.Q_OPHTHO || []`, etc.,
 * and app/data/theory.js does the same for THEORY with `window.T_* || {}`.
 * Each per-subject file just assigns `var Q_<SUBJECT> = [...]` (classic
 * script, not a module, so it degrades to "was never loaded" rather than a
 * ReferenceError) and the aggregator falls back to an empty array/object when
 * that global never got set. This tool does not take that on faith: it reads
 * both aggregators and confirms the `window.<VAR> || fallback` pattern exists
 * for every variable it is about to orphan, and refuses to build if it can't
 * find it. If a future refactor changes that pattern, this tool stops instead
 * of shipping a page that throws on load.
 *
 * WHY FILES ARE DISCOVERED RATHER THAN NAMED: hardcoding
 * "questions.ophtho.js" here would silently stop protecting anything the day
 * that file is renamed or a sibling is added. Instead this tool intersects
 * three things every run: the <script src> tags actually present in
 * index.html, the actual directory listing of app/data/, and a simple
 * substring match on the locked subjects' names (which the brief, not this
 * tool, gets to name). Three locked-subject files exist today — questions,
 * cases, theory — all three are dropped, because "Coming soon" means the
 * whole subject is absent, not just its quiz questions; leaving the theory
 * notes in would still ship next month's lecture content in plain text.
 *
 * WHY THE CACHE-BUST HASHES FILE BYTES: this app has no build step and no
 * server-side versioning, so students' browsers will happily keep serving a
 * week-old questions.ent.js from cache after a content fix ships. Hashing the
 * file's own bytes (not the clock) means an unchanged file keeps the same
 * `?v=` and a changed one gets a new one automatically — no version number to
 * remember to bump.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.resolve(__dirname, '..');
const APP = path.join(ROOT, 'app');
const DIST = path.join(ROOT, 'dist');
const INDEX_SRC = path.join(APP, 'index.html');

if (!fs.existsSync(INDEX_SRC)) {
  console.error('REFUSING: ' + INDEX_SRC + ' not found — nothing to build.');
  process.exit(1);
}

// Named by the brief, not guessed from the filesystem: which two subjects are
// locked for this launch. Which FILES belong to them is worked out below.
const LOCKED_SUBJECTS = []; // neuro unlocked 2026-09-22 (endpoint book closed), ophtho unlocked 2026-09-21, matches LOCKED_MODULES in app/data/modules.js

/* The Theory section as a whole is locked separately from the two locked
 * subjects, and for a different reason: the summaries there are placeholders
 * that the real book chapters will replace, so they are not being published at
 * all yet. The same rule that governs a locked subject governs them — "coming
 * soon" has to mean the bytes never leave this machine, or a student with dev
 * tools open is reading a draft that was deliberately withheld.
 *
 * The flag is NOT restated here. It is read out of app/data/modules.js, which
 * is where the app itself reads it, so unlocking Theory is still the one-line
 * change it was designed to be and this tool follows it automatically. Parsed
 * without a regex on purpose: the declaration is a single line and a literal
 * scan cannot half-match something that merely mentions the name. */
function readTheoryLocked() {
  const src = fs.readFileSync(path.join(APP, 'data', 'modules.js'), 'utf8');
  const marker = 'THEORY_LOCKED';
  const at = src.indexOf(marker);
  if (at < 0) return null;
  const eq = src.indexOf('=', at);
  const end = src.indexOf(';', eq);
  if (eq < 0 || end < 0) return null;
  const value = src.slice(eq + 1, end).trim();
  if (value === 'true') return true;
  if (value === 'false') return false;
  return null;
}
const THEORY_LOCKED = readTheoryLocked();
if (THEORY_LOCKED === null) {
  console.error('REFUSING: could not read THEORY_LOCKED out of app/data/modules.js. ' +
    'It is either gone, renamed, or no longer a plain true/false — and this tool cannot ' +
    'tell whether the theory notes are meant to ship. Fix the flag or this reader; do not guess.');
  process.exit(1);
}

function rmrf(p) { if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true }); }
function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name), d = path.join(dst, e.name);
    if (e.isDirectory()) copyDir(s, d); else fs.copyFileSync(s, d);
  }
}
function walkFiles(dir) {
  let out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out = out.concat(walkFiles(p));
    else out.push(p);
  }
  return out;
}

// ----------------------------------------------------------------------
// 1. Fresh copy. dist/ is regenerated wholesale every run — never patched —
//    so a stale file from a previous build can never survive into a new one.
// ----------------------------------------------------------------------
rmrf(DIST);
copyDir(APP, DIST);
const INDEX = path.join(DIST, 'index.html');
let html = fs.readFileSync(INDEX, 'utf8');

// ----------------------------------------------------------------------
// 2. Work out which data files belong to the locked subjects, by
//    intersecting index.html's own script tags with app/data's real
//    directory listing — not by naming files up front.
// ----------------------------------------------------------------------
const dataDirFiles = fs.readdirSync(path.join(APP, 'data'));

const scriptTagRe = /<script\b[^>]*\bsrc="([^"]+)"[^>]*>\s*<\/script>/g;
const scriptSrcs = [];
{ let m; while ((m = scriptTagRe.exec(html))) scriptSrcs.push(m[1]); }

const excludedRel = new Set();
for (const src of scriptSrcs) {
  if (/^(?:https?:)?\/\//.test(src) || src.startsWith('data:')) continue; // no CDN links exist, but never bust one if it did
  const base = path.basename(src);
  if (!dataDirFiles.includes(base)) continue; // only touching files that really live in app/data
  if (LOCKED_SUBJECTS.some(k => base.toLowerCase().includes(k))) excludedRel.add(src);
  // Every per-subject theory file while the section is locked — but never
  // theory.js itself, which is the aggregator the app still needs in order to
  // build an empty THEORY map rather than throw.
  if (THEORY_LOCKED && base !== 'theory.js' &&
      base.toLowerCase().startsWith('theory.') && base.toLowerCase().endsWith('.js')) {
    excludedRel.add(src);
  }
}

// Same refusal as the locked subjects get, for the same reason: if the section
// is locked and nothing matched, the naming changed and this tool no longer
// knows what it is meant to be withholding.
if (THEORY_LOCKED) {
  const theoryHits = [...excludedRel].filter(r => path.basename(r) !== 'theory.js' &&
    path.basename(r).toLowerCase().startsWith('theory.'));
  if (!theoryHits.length) {
    console.error('REFUSING: THEORY_LOCKED is true, but no per-subject theory file was found ' +
      'among the <script src> tags in index.html. Either those files were renamed, or they are ' +
      'genuinely gone; either way the exclusion cannot be confirmed and will not be guessed.');
    process.exit(1);
  }
}

// The constraint that matters most here: if a locked subject turns out to
// have NO matching file, that is not "nothing to exclude" — it means the
// naming scheme changed and this tool no longer knows what to drop. Refuse
// rather than ship the subject's data by accident.
for (const subj of LOCKED_SUBJECTS) {
  const hit = [...excludedRel].some(r => path.basename(r).toLowerCase().includes(subj));
  if (!hit) {
    console.error('REFUSING: no data file found for locked subject "' + subj + '" — ' +
      'checked every <script src> in index.html against the app/data/ listing and found ' +
      'nothing matching. Either the subject\'s file was renamed, or it is genuinely gone; ' +
      'either way this tool cannot confirm the exclusion and will not guess.');
    process.exit(1);
  }
}

// ----------------------------------------------------------------------
// 3. Confirm the graceful-degradation design before relying on it. Each
//    excluded file declares one `var NAME = ...`; each aggregator must read
//    `window.NAME || <empty>` for that same NAME, or removing the file would
//    throw instead of quietly shipping nothing for that subject.
// ----------------------------------------------------------------------
function declaredVarName(absPath) {
  const src = fs.readFileSync(absPath, 'utf8');
  const m = src.match(/\bvar\s+([A-Z][A-Za-z0-9_]*)\s*=/);
  return m ? m[1] : null;
}
const AGGREGATORS = ['questions.js', 'theory.js'].map(f => path.join(APP, 'data', f));
const aggregatorSrc = AGGREGATORS.map(f => fs.readFileSync(f, 'utf8')).join('\n');

const designFailures = [];
for (const rel of excludedRel) {
  const abs = path.join(APP, rel);
  const varName = declaredVarName(abs);
  if (!varName) {
    designFailures.push(rel + ': found no top-level "var NAME = ..." to check — cannot confirm it degrades safely.');
    continue;
  }
  const fallbackRe = new RegExp('window\\.' + varName + '\\s*\\|\\|\\s*(?:\\[\\]|\\{\\})');
  if (!fallbackRe.test(aggregatorSrc)) {
    designFailures.push(rel + ' declares ' + varName + ', but neither questions.js nor theory.js ' +
      'reads "window.' + varName + ' || []" / "|| {}" — removing this file would leave a dangling ' +
      'reference instead of an empty subject.');
  }
}
if (designFailures.length) {
  console.error('REFUSING: the graceful-degradation design could not be confirmed for what would be excluded:');
  designFailures.forEach(f => console.error('  - ' + f));
  console.error('Fix the aggregator (or this check) before building — shipping on an unconfirmed assumption here is the one failure that matters.');
  process.exit(1);
}

// ----------------------------------------------------------------------
// 4. Remove the excluded files and their <script> tags.
// ----------------------------------------------------------------------
const excludedReport = [];
for (const rel of excludedRel) {
  const distAbs = path.join(DIST, rel);
  let bytes = 0;
  try { bytes = fs.statSync(distAbs).size; } catch (e) { /* already gone is fine */ }
  fs.rmSync(distAbs, { force: true });
  const escaped = rel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const tagRe = new RegExp('[ \\t]*<script\\b[^>]*\\bsrc="' + escaped + '"[^>]*>\\s*<\\/script>\\r?\\n?', 'g');
  html = html.replace(tagRe, '');
  excludedReport.push({ file: rel, bytes });
}

// ----------------------------------------------------------------------
// 5. Drop image assets that ONLY the excluded subjects reference. This is
//    only done where it can be checked reliably: every app/data/*.js file is
//    scanned for the literal `image:'name'` field (the only form the schema
//    uses — no computed image names exist in this codebase, confirmed by
//    grep before writing this tool), and a name is dropped only if EVERY
//    reference to it came from an excluded file. One reference from a kept
//    subject is enough to keep the image shipped.
// ----------------------------------------------------------------------
const imgRe = /image\s*:\s*['"]([^'"]+)['"]/g;
const keptImageNames = new Set();
const excludedImageNames = new Set();
for (const f of dataDirFiles) {
  if (!f.endsWith('.js')) continue;
  const isExcludedFile = [...excludedRel].some(rel => path.basename(rel) === f);
  const src = fs.readFileSync(path.join(APP, 'data', f), 'utf8');
  let im;
  while ((im = imgRe.exec(src))) {
    (isExcludedFile ? excludedImageNames : keptImageNames).add(im[1]);
  }
}
const imagesToDrop = [...excludedImageNames].filter(n => !keptImageNames.has(n));
let droppedImageBytes = 0, droppedImageCount = 0;
for (const name of imagesToDrop) {
  const p = path.join(DIST, 'assets', 'q', name + '.jpg'); // matches qImgSrc() in index.html
  if (fs.existsSync(p)) {
    droppedImageBytes += fs.statSync(p).size;
    fs.rmSync(p);
    droppedImageCount++;
  }
}

// ----------------------------------------------------------------------
// 6. Cache-bust every remaining local <script src> / <link href> by
//    appending ?v=<hash of that file's own bytes>, computed AFTER the
//    excluded files are gone so nothing gets hashed that isn't shipping.
// ----------------------------------------------------------------------
function bustAttr(html, tag, attr) {
  const re = new RegExp('(<' + tag + '\\b[^>]*\\b' + attr + '=")([^"?]+)("[^>]*>)', 'g');
  return html.replace(re, (whole, pre, url, post) => {
    if (/^(?:https?:)?\/\//.test(url) || url.startsWith('data:')) return whole; // no CDN links, but never touch one if it appeared
    const abs = path.join(DIST, url);
    if (!fs.existsSync(abs)) return whole; // left as-is; caught by the dangling-reference check below
    const hash = crypto.createHash('sha1').update(fs.readFileSync(abs)).digest('hex').slice(0, 10);
    return pre + url + '?v=' + hash + post;
  });
}
html = bustAttr(html, 'script', 'src');
html = bustAttr(html, 'link', 'href');

fs.writeFileSync(INDEX, html, 'utf8');

// ----------------------------------------------------------------------
// 7. The one check that must never be skipped: walk the FINAL html for every
//    local script/link reference and confirm the file is actually there. A
//    build that ships a page 404ing on its own data file is worse than no
//    build at all.
// ----------------------------------------------------------------------
function collectLocalRefs(html) {
  const refs = [];
  const re = /<(?:script|link)\b[^>]*\b(?:src|href)="([^"]+)"/g;
  let m;
  while ((m = re.exec(html))) {
    const url = m[1];
    if (/^(?:https?:)?\/\//.test(url) || url.startsWith('data:')) continue;
    refs.push(url.split('?')[0]);
  }
  return refs;
}
const dangling = collectLocalRefs(html).filter(r => !fs.existsSync(path.join(DIST, r)));
if (dangling.length) {
  console.error('REFUSING: dist/index.html references files that are not in dist/ after the build:');
  dangling.forEach(d => console.error('  - ' + d));
  process.exit(1);
}

// ----------------------------------------------------------------------
// 8. dist/ must never go to GitHub — it is generated, and it is exactly the
//    kind of folder that "helpfully" gets committed once by accident and
//    then drifts from the source forever. .gitignore is the one existing
//    file this tool is allowed to touch, and only to append.
// ----------------------------------------------------------------------
const GITIGNORE = path.join(ROOT, '.gitignore');
let gitignoreNote = 'already listed';
if (fs.existsSync(GITIGNORE)) {
  const gi = fs.readFileSync(GITIGNORE, 'utf8');
  if (!/^dist\/?\s*$/m.test(gi)) {
    const sep = gi.endsWith('\n') ? '' : '\n';
    fs.appendFileSync(GITIGNORE,
      sep + '\n# Generated by tools/build-launch.js — never hand-edited, never committed.\ndist/\n');
    gitignoreNote = 'added';
  }
} else {
  gitignoreNote = 'NOT found — could not add dist/ to it';
}

// ----------------------------------------------------------------------
// 9. Report.
// ----------------------------------------------------------------------
console.log('--- excluded data files (locked subjects: ' + LOCKED_SUBJECTS.join(', ') +
  (THEORY_LOCKED ? '; plus every theory file, section locked' : '') + ') ---');
for (const e of excludedReport) {
  console.log('  ' + e.file + '  (' + e.bytes.toLocaleString() + ' bytes)');
}
console.log('  reason: subject is behind "Coming soon" for this launch; its questions, cases and');
console.log('  theory notes must be genuinely absent from the upload, not just unlinked in the UI.');
if (THEORY_LOCKED) {
  console.log('  theory: THEORY_LOCKED is true in app/data/modules.js, so the summaries are');
  console.log('  withheld whole — they are placeholders for the real book chapters and are not');
  console.log('  being published yet. theory.js itself still ships, and builds an empty map.');
}

console.log('\n--- excluded image assets (referenced only by the excluded subjects) ---');
if (droppedImageCount) {
  console.log('  ' + droppedImageCount + ' file(s), ' + droppedImageBytes.toLocaleString() + ' bytes total');
} else {
  console.log('  none — every image the locked subjects reference is also used by a shipping subject, or none exist');
}

const files = walkFiles(DIST);
const totalBytes = files.reduce((a, f) => a + fs.statSync(f).size, 0);
console.log('\n--- dist/ ---');
console.log('  ' + files.length + ' files, ' + totalBytes.toLocaleString() + ' bytes total');
const largest = files
  .map(f => ({ f: path.relative(DIST, f), size: fs.statSync(f).size }))
  .sort((a, b) => b.size - a.size)
  .slice(0, 10);
console.log('  largest 10:');
largest.forEach(x => console.log('    ' + x.size.toLocaleString().padStart(12) + '  ' + x.f));

console.log('\n.gitignore: dist/ ' + gitignoreNote);

console.log('\n=== READY TO UPLOAD: dist/ is the folder the host serves. ===');
