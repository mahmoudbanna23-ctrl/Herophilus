// Shared loaders for the question-bank pipeline.
//
// REBUILT 2026-09-02. The originals lived in the session scratchpad and were
// destroyed when it was cleared. This is a reconstruction from the rules in
// CLAUDE.md and MEMORY.md, not a recovered copy — it has not been diffed
// against what it replaces, because what it replaces no longer exists.
//
// Two file shapes matter here:
//   * app/data/questions.<mod>.js  — a classic script assigning `var Q_<MOD>`.
//     require() returns undefined for these; they must go through `vm`.
//   * content/**/qb-pages/*.draft.js — a BARE comma-separated run of object
//     literals, no array wrapper. Wrapped in brackets to parse.

'use strict';
const fs = require('fs');
const vm = require('vm');

// Load a classic data script and hand back whichever array it defined.
function loadCorpus(path) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path, 'utf8'), sandbox);
  const pools = [sandbox, sandbox.window];
  let empty = null;
  for (const pool of pools) {
    for (const key of Object.keys(pool)) {
      const val = pool[key];
      if (!Array.isArray(val)) continue;
      if (val.length && val[0] && typeof val[0] === 'object'
          && ('stem' in val[0] || 'id' in val[0])) return val;
      // An EMPTY array is a real answer here: cases.ophtho.js holds zero cases.
      // Keep it as a fallback rather than treating the file as unparseable.
      if (!val.length && empty === null) empty = val;
    }
  }
  if (empty) return empty;
  throw new Error('no question array found in ' + path);
}

// Load a bare entry run (a .draft.js) by bracketing it.
function loadDraft(path) {
  const text = fs.readFileSync(path, 'utf8');
  return new Function('return [' + text + '\n]')();
}

// Staging arrays (.array.js) are classic scripts too, but their variable names
// vary per file (HOUSE_C17_PAGES, HOUSE_C18, window.HOUSE_C20 ...).
const loadStaging = loadCorpus;

// Normalisation. Two strengths, because the fold shapes need both:
// `norm` is for exact and reorder matching; `loose` also collapses the
// letters OCR confuses and drops filler words, for respelling and rewording.
function norm(s) {
  return String(s == null ? '' : s)
    .toLowerCase()
    .replace(/[‘’“”]/g, "'")
    // Signs and comparison operators ARE discriminators in this bank, and the
    // punctuation strip destroys them: `+ve` and `-ve` both normalise to "ve",
    // which scored ch.20 Q3 against Q4 (Jones I vs Jones II) at dice 1.00.
    // Spell them out before the strip — the same finding as the exponent
    // audit's rule that a numeral is read WITH its leading operator.
    .replace(/\+\s?ve\b/g, ' posve ')
    .replace(/[-−]\s?ve\b/g, ' negve ')
    .replace(/<\s?(?=[0-9.])/g, ' lt ')
    .replace(/>\s?(?=[0-9.])/g, ' gt ')
    .replace(/≤\s?(?=[0-9.])/g, ' lte ')
    .replace(/≥\s?(?=[0-9.])/g, ' gte ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

const FILLER = new Set(['a', 'an', 'the', 'of', 'is', 'are', 'in', 'on', 'to',
  'for', 'with', 'which', 'that', 'following', 'all', 'and', 'be', 'his',
  'her', 'he', 'she', 'patient', 'most', 'likely']);

function loose(s) {
  return norm(s)
    .split(' ')
    .filter(w => w && !FILLER.has(w))
    // Short tokens are left alone: the doubled-letter collapse turns the Roman
    // numeral `ii` into `i`, which was the other half of the Q3/Q4 collision.
    .map(w => w.length <= 3 ? w
      : w.replace(/ph/g, 'f').replace(/ie/g, 'i').replace(/ae/g, 'e')
         .replace(/(.)\1+/g, '$1'))
    .join(' ');
}

function tokens(s) { return new Set(loose(s).split(' ').filter(Boolean)); }

function dice(a, b) {
  const A = tokens(a), B = tokens(b);
  if (!A.size || !B.size) return 0;
  let hit = 0;
  for (const t of A) if (B.has(t)) hit++;
  return (2 * hit) / (A.size + B.size);
}

// A question's option MENU, order-independent. A shared menu PAIRS questions;
// it never folds them (MEMORY.md, standing rule).
function menuKey(q) {
  const opts = q.options || q.opts || [];
  return opts.map(norm).sort().join('|');
}

// Options in printed order — a REORDER moves the key letter, so order matters
// when deciding which printing to keep.
function orderKey(q) {
  const opts = q.options || q.opts || [];
  return opts.map(norm).join('|');
}

function stemOf(q) { return q.stem || ''; }

module.exports = { loadCorpus, loadDraft, loadStaging, norm, loose, tokens,
                   dice, menuKey, orderKey, stemOf };
