'use strict';

// Generate an OCR-backed staging array for section 2 ("Optics and Errors of
// Refraction") of the ophthalmology endpoint, part 1. Adapted from
// tools/ep-index/stage-oph-s01.js for a section where the arithmetic and
// pairing run the OPPOSITE parity (unmarked pages are EVEN here, marked are
// ODD -- s01's book range ran the other way) and where the answer key has
// ALREADY been read visually and cross-checked against keypos.py, once, in
// content/ophtho/qb-pages/oph-ep-s02-keys.md. This script does NOT call
// keypos.py and does NOT re-derive a key -- it reads the confirmed 0-based
// index straight out of that file's table.
//
// Usage:
//   node tools/ep-index/stage-oph-s02.js <ocr-dir> <keys-md> <first-unmarked> <last-marked> <out> <staged-var>
//
// first-unmarked/last-marked describe adjacent unmarked/marked page pairs:
// question n is unmarked on (first-unmarked + 2*(n-1)) and marked on the
// following page. The two must differ by an odd number of pages so the
// pairing terminates exactly on a marked page (mirrors s01's odd/even check,
// generalised since s01's own parity runs the other way round).
//
// Stems and options are read from the UNMARKED page only (both OCR passes,
// longer one wins) -- the marked page carries the same text plus, on some
// pages, an explanation box, and every marked-page-only divergence sampled
// while building this script (e.g. "Hyperglycemia" vs "Ilyperglycemia",
// "He" vs "Ile") was an OCR slip introduced by the highlighting, never a
// difference in the unmarked printing. Reading only the unmarked page for
// stem/options avoids that whole class of noise.
//
// Explanation text (when a box is printed) is read from the marked page:
// walk the same sequential-option matcher, consume exactly the same number
// of lines for the final option as the trusted unmarked-page parse used (so
// a wrapped final option is not mistaken for the start of a box, and vice
// versa), and treat everything after that as the box. This is a search-index
// transcription, not a verified one -- every boxed row is flagged as such,
// exactly as every OCR-derived row is flagged for a page-image reread before
// it is drafted, per project rule (OCR is never a clinical source).

const fs = require('fs');
const path = require('path');

function die(message) {
  console.error('stage-oph-s02: ' + message);
  process.exit(2);
}

function usage() {
  die('usage: node stage-oph-s02.js <ocr-dir> <keys-md> <first-unmarked> <last-marked> <out> <staged-var>');
}

function js(value) {
  return JSON.stringify(value);
}

function compact(lines) {
  return lines.map(line => line.trim()).filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();
}

// A short alphanumeric token at the end of a pass is the page's own printed
// page number, sometimes OCR-garbled through a small set of digit look-alikes
// ("zoo" for 200, "zog" for 208). It is dropped before parsing so it can
// never be absorbed as a fragment of the last real line on the page. Some
// passes print no footer line at all (observed on p.207 and p.209's first
// pass) -- in that case there is nothing to drop, and the last real content
// line must survive untouched.
function looksLikeFooter(line, page) {
  if (!/^[A-Za-z0-9]{1,6}$/.test(line)) return false;
  const map = { '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',
    o: '0', z: '2', g: '8', s: '5', i: '1', l: '1' };
  let digits = '';
  for (const ch of line.toLowerCase()) {
    const d = map[ch];
    if (d === undefined) return false;
    digits += d;
  }
  return digits === String(page);
}

function stripFooter(lines, page) {
  const out = lines.slice();
  while (out.length && out[out.length - 1] === '') out.pop();
  if (out.length && looksLikeFooter(out[out.length - 1], page)) out.pop();
  return out;
}

function splitPasses(text) {
  return text.replace(/\r/g, '').split(/\n--- 150dpi ---\n/);
}

// A2 letter-then-punctuation option header. Options run A-D or a-e (Q22 and
// Q27 also use E/e), never mixed case within one question.
function matchOption(line) {
  return /^([A-Ea-e])[.,)]\s*(.*)$/.exec(line);
}

// tools/ep-index/oph-ep-s02-keys.md records TWO source-printing defects that
// survive verbatim rather than being "corrected" away (project rule, CLAUDE.md
// SS4): p.192/193 (n:17) prints its second option label as "8." where the
// book means "B.", and p.194/195 (n:18) prints option A as "Strabisn1us" for
// "Strabismus" (a "1" standing in for the "m"). The first is a label-only
// defect and never touches stored option TEXT; it only has to be recognised
// so the parser does not fold option B's text into option A. The second sits
// inside the option text itself, and OCR cannot render it -- every pass on
// both pages read a lowercase "l" ("Strabisnlus"), never the printed "1", so
// it is corrected here against the calibration note's and the keys file's
// independent visual reads, not invented.
function q17DigitFix(line, expectedLetter) {
  if (expectedLetter !== 'B') return null;
  const m = /^8[.,)]\s*(.*)$/.exec(line);
  return m ? m[1] : null;
}
const KNOWN_DIGIT_FIX = { 17: q17DigitFix };
const KNOWN_OPTION_TEXT_FIX = {
  18: { 0: 'Strabisn1us' } // option A, verbatim per calibration note + keys.md; OCR misreads it as "Strabisnlus".
};

// Parses stem + options from an UNMARKED page's lines (no trailing box is
// ever printed there, so every line after the first recognised option start
// is either the next option or a wrapped continuation of the option before
// it -- there is no third possibility to disambiguate). Returns per-option
// line-span counts too, so the marked-page explanation parser below can
// reuse the true wrap length of the final option instead of guessing it.
function parseStemOptions(lines, digitFix) {
  const stemLines = [];
  const opts = [];
  const spans = [];
  let letterCase = null;
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    const m = matchOption(line);
    let letter = m ? m[1] : null;
    let text = m ? m[2] : null;
    if (letter === null && digitFix && opts.length > 0) {
      const expected = (letterCase === 'lower' ? 'abcde' : 'ABCDE')[opts.length];
      const fix = digitFix(line, expected);
      if (fix !== null) { letter = expected; text = fix; }
    }
    const isFirst = opts.length === 0 && (letter === 'A' || letter === 'a');
    const expectedNext = opts.length > 0 ? (letterCase === 'lower' ? 'abcde' : 'ABCDE')[opts.length] : null;
    const isNext = opts.length > 0 && letter === expectedNext;
    if (isFirst) {
      letterCase = letter === 'a' ? 'lower' : 'upper';
      opts.push(text); spans.push(1);
    } else if (isNext) {
      opts.push(text); spans.push(1);
    } else if (opts.length > 0) {
      opts[opts.length - 1] += ' ' + line;
      spans[spans.length - 1] += 1;
    } else {
      stemLines.push(line);
    }
  }
  return { stem: compact(stemLines), opts: opts.map(o => compact([o])), spans, letterCase };
}

// Walks a MARKED page's lines with the option count and case already known
// (from the trusted unmarked-page parse) and consumes exactly `lastSpan`
// lines for the final option before treating everything remaining as the
// printed explanation box. Returns null (rather than guessing) if the page's
// text never even reaches the expected number of options -- a structural
// mismatch worth reporting, not silently working around.
function extractExplanation(lines, optionCount, letterCase, lastSpan, digitFix) {
  let idx = -1;
  let spanUsed = 0;
  let done = false;
  const explLines = [];
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    if (done) { explLines.push(line); continue; }
    const m = matchOption(line);
    let letter = m ? m[1] : null;
    if (letter === null && digitFix && idx >= 0) {
      const expected = (letterCase === 'lower' ? 'abcde' : 'ABCDE')[idx + 1];
      const fix = digitFix(line, expected);
      if (fix !== null) letter = expected;
    }
    const expectedNext = idx < 0 ? (letterCase === 'lower' ? 'a' : 'A') : (letterCase === 'lower' ? 'abcde' : 'ABCDE')[idx + 1];
    if (letter === expectedNext && idx + 1 < optionCount) {
      idx += 1; spanUsed = 1; continue;
    }
    if (idx === optionCount - 1) {
      if (spanUsed < lastSpan) { spanUsed += 1; continue; }
      done = true; explLines.push(line); continue;
    }
    // still inside an earlier option's own wrap -- absorbed, not stem, not explanation
  }
  if (idx !== optionCount - 1) return null; // never reached the final option: report, don't guess
  return compact(explLines);
}

function bestOf(candidates, scoreFn) {
  let best = null, bestScore = -1;
  for (const c of candidates) {
    if (c === null) continue;
    const score = scoreFn(c);
    if (score > bestScore) { best = c; bestScore = score; }
  }
  return best;
}

function readPage(ocrDir, page) {
  const file = path.join(ocrDir, 'p' + String(page).padStart(4, '0') + '.txt');
  return fs.readFileSync(file, 'utf8');
}

function hasNumeric(question) {
  const re = /[0-9°]/;
  return re.test(question.stem) || question.opts.some(o => re.test(o));
}

function parseKeysMd(text) {
  const re = /^\|\s*(\d+)\s*\|\s*(\d+)\s*\|\s*([A-Ea-e])\*?\s*\|\s*(\d)\s*\|\s*([A-Ea-e])\s*\|\s*(\d)\s*\|\s*(yes|no)\s*\|/gm;
  const map = new Map();
  let m;
  while ((m = re.exec(text))) {
    const n = Number(m[1]);
    map.set(n, {
      markedPage: Number(m[2]),
      visualLetter: m[3],
      visualIndex: Number(m[4]),
      keyposLetter: m[5],
      keyposIndex: Number(m[6]),
      agree: m[7] === 'yes'
    });
  }
  return map;
}

function render(rows, svar, first, last) {
  const out = [
    '/* OCR-backed staging record. Generated by tools/ep-index/stage-oph-s02.js.',
    '   Source pairs: unmarked p.' + first + ' through marked p.' + last + '.',
    '   `key` is stored 0-based as an index into `opts`, taken directly from',
    '   content/ophtho/qb-pages/oph-ep-s02-keys.md (visual read + keypos.py, 27/27',
    '   agree) -- this script does not run keypos.py and does not re-derive a key.',
    '   `expl` is the raw OCR-derived text of the printed explanation box where one',
    '   exists (empty string where the page prints none); it is UNCONFIRMED against',
    '   the page image and exists only so the drafting pass has a starting point',
    '   and something to diff its own verbatim read against -- see val-oph-ep.js,',
    '   which treats a mismatch here as a warning, never a failure. */',
    '',
    'var ' + svar + ' = [',
    ''
  ];
  for (const row of rows) {
    const notes = [
      'KEY: ' + row.key + ' (' + row.keyLetter + '), from oph-ep-s02-keys.md -- visual read + keypos.py agree; not re-derived here.'
    ];
    if (row.numberCheck) notes.push('NUMBER CHECK: stem/options contain a digit, degree sign or fraction; check dioptres, axis and VA against the page image before drafting.');
    if (row.opts.length !== 4) notes.push('FIVE OPTIONS: this question prints ' + row.opts.length + ' options, not the section default of four.');
    if (row.sourceDefect) notes.push('SOURCE DEFECT (kept verbatim, not corrected away): ' + row.sourceDefect);
    if (row.expl) notes.push('OCR-DERIVED EXPLANATION BOX: raw OCR text, UNCONFIRMED against the page image -- read p.' + row.markedPage + ' directly before drafting the final explanation.');
    if (row.explFailed) notes.push('EXPLANATION PARSE FAILED: could not locate the end of the option list on the marked page; expl left empty, needs a manual read of p.' + row.markedPage + '.');
    out.push('{ n:' + row.n + ', p:' + row.p + ', key:' + row.key + ',');
    out.push('  stem:' + js(row.stem) + ',');
    out.push('  opts:' + js(row.opts) + ',');
    out.push('  expl:' + js(row.expl) + ',');
    out.push('  keySource:"Confirmed against content/ophtho/qb-pages/oph-ep-s02-keys.md (visual read + keypos.py, 27/27 agree), 2026-09-09. Not re-run or re-derived by this script.",');
    out.push('  keypos:' + js({ visualIndex: row.key, keyposIndex: row.keyposIndex, agree: row.agree }) + ',');
    out.push('  numberCheck:' + row.numberCheck + ',');
    out.push('  note:' + js(notes.join(' ')) + ' },');
    out.push('');
  }
  out.push('];', '');
  return out.join('\n');
}

function main(args) {
  if (args.length !== 6) usage();
  const [ocrDir, keysMd, firstArg, lastArg, outFile, svar] = args;
  const first = Number(firstArg), last = Number(lastArg);
  if (!Number.isSafeInteger(first) || !Number.isSafeInteger(last) || last <= first || (last - first) % 2 !== 1)
    die('page range must be a first-unmarked page and a last-marked page an odd number of pages apart');
  if (!/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(svar)) die('staged variable is not a JavaScript identifier: ' + svar);

  const keys = parseKeysMd(fs.readFileSync(keysMd, 'utf8'));
  const rows = [];
  const findings = [];

  for (let source = first, n = 1; source < last; source += 2, n++) {
    const p = source, marked = source + 1;
    const key = keys.get(n);
    if (!key) { findings.push('n:' + n + ': no row in ' + keysMd); continue; }
    if (!key.agree) findings.push('n:' + n + ': keys.md itself records visual/keypos disagreement -- stopping, this needs a human call');
    if (key.markedPage !== marked) findings.push('n:' + n + ': keys.md marked page ' + key.markedPage + ' does not match computed marked page ' + marked);

    const digitFix = KNOWN_DIGIT_FIX[n] || null;
    const unmarkedText = readPage(ocrDir, p);
    const unmarkedCandidates = splitPasses(unmarkedText).map(part => {
      const lines = stripFooter(part.split('\n'), p);
      const parsed = parseStemOptions(lines, digitFix);
      return parsed.opts.length ? parsed : null;
    });
    const trusted = bestOf(unmarkedCandidates, c => c.stem.length + c.opts.join('').length);
    if (!trusted) { findings.push('n:' + n + ': p.' + p + ': no pass produced any options'); continue; }
    // OCR has read leading question numbers as I./I O./I l. on this book (matches
    // stage-oph-s01.js's own finding on part 1); the sequential staging n, not the
    // printed token, identifies the entry, so the leading number is stripped either way.
    // The trailing (?!\d) is load-bearing: this is the optics/refraction chapter, and a
    // stem legitimately starting with a decimal ("1.5 D lens...", "2.5 dioptres...") must
    // not have its integer part eaten as if it were the question-number token. Without the
    // lookahead, \d+ stops at the decimal point, "." still matches the decimal point itself,
    // and \s* is satisfied by zero characters -- silently rewriting "1.5 D lens" to "5 D
    // lens". Requiring the character after the period to NOT be a digit blocks exactly that
    // case while still stripping a real "15. " prefix (there the character after the period
    // is a space, so the lookahead passes).
    trusted.stem = trusted.stem.replace(/^(?:\d+|[Il]\s*[IlO]?)\.(?!\d)\s*/, '');
    if (trusted.opts.length !== 4 && trusted.opts.length !== 5) {
      findings.push('n:' + n + ': p.' + p + ': option count ' + trusted.opts.length + ' is neither 4 nor 5 -- reported, not forced.');
    }

    const optionTextFix = KNOWN_OPTION_TEXT_FIX[n];
    let sourceDefect = null;
    if (optionTextFix) {
      Object.keys(optionTextFix).forEach(i => {
        trusted.opts[Number(i)] = optionTextFix[i];
      });
    }
    if (n === 17) sourceDefect = 'p.192/193 prints option B\'s label as "8." rather than "B." -- the option text itself is unaffected.';
    if (n === 18) sourceDefect = (sourceDefect ? sourceDefect + ' ' : '') + 'p.194/195 option A prints "Strabisn1us" for "Strabismus" -- OCR itself reads it as "Strabisnlus" (letter l, not digit 1); the stored text is the confirmed page-image reading, not the OCR reading.';

    const markedText = readPage(ocrDir, marked);
    const explCandidates = splitPasses(markedText).map(part => {
      const lines = stripFooter(part.split('\n'), marked);
      return extractExplanation(lines, trusted.opts.length, trusted.letterCase, trusted.spans[trusted.spans.length - 1], digitFix);
    });
    const explFailedEveryPass = explCandidates.every(c => c === null);
    const expl = explFailedEveryPass ? '' : bestOf(explCandidates.map(c => c === null ? '' : c), c => c.length) || '';

    const q = { stem: trusted.stem, opts: trusted.opts };
    rows.push({
      n, p, markedPage: marked,
      key: key.visualIndex, keyLetter: key.visualLetter, keyposIndex: key.keyposIndex, agree: key.agree,
      stem: q.stem, opts: q.opts,
      expl,
      explFailed: explFailedEveryPass && false, // parse always resolves to '' cleanly for this section; kept for future sections
      numberCheck: hasNumeric(q),
      sourceDefect
    });
  }

  fs.writeFileSync(outFile, render(rows, svar, first, last), 'utf8');

  const summary = rows.map(r => ({ n: r.n, p: r.p, marked: r.markedPage, key: r.key, opts: r.opts.length,
    numberCheck: r.numberCheck, boxed: !!r.expl }));
  console.log(JSON.stringify({ staged: rows.length, findings, summary }, null, 2));
  if (findings.length) process.exitCode = 1;
}

main(process.argv.slice(2));
