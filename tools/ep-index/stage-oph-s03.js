'use strict';

// Generate an OCR-backed staging array for section 3 ("Orbit") of the
// ophthalmology endpoint, part 1. Adapted from tools/ep-index/stage-oph-s02.js.
// Differences from section 2, all measured in
// progress/ophtho-endpoint-s03-calibration-2026-09-09.md and
// content/ophtho/qb-pages/oph-ep-s03-keys.md -- read both before touching this
// file, do not re-derive either:
//
//   - Arithmetic: question n is unmarked on PDF page 229+2n, marked on 230+2n
//     (section 2 ran 158+2n/159+2n -- section-specific, does not carry forward).
//   - Every one of the 21 questions has exactly 4 options (no five-option row,
//     unlike section 2's two). Letters run lowercase a-d on Q1-Q7, uppercase
//     A-D on Q8-Q21 -- confirmed on every one of the 21 unmarked pages read
//     while building this script (231, 233, ..., 271), not merely inferred.
//   - No figure anywhere in this section (keys.md Job 2b, confirmed on all 21
//     marked pages).
//   - EXPLANATION BOXES ARE DEFERRED, NOT TRANSCRIBED HERE. Per the brief, all
//     21 rows get expl:"" regardless of whether the book prints a box --
//     OCR box text is not trustworthy (it bled an adjacent list into one box,
//     collapsed a header+bullets into a run-on, and misread a printed arrow
//     as "-5" on section 2). Which 9 of 21 DO carry a box (Q1-Q7, Q9, Q10) is
//     recorded per-row from oph-ep-s03-keys.md's own "Explanation box" column
//     (visually confirmed on all 21 marked pages, not inferred) as `boxPrinted`
//     and restated in `note`, so the later transcription pass knows which
//     pages to read without re-deriving the list.
//   - NO KNOWN SOURCE-PRINTING DEFECT is documented for this section (the
//     calibration note is explicit that typos were not deliberately searched
//     for). This script therefore carries no KNOWN_OPTION_TEXT_FIX /
//     KNOWN_DIGIT_FIX entries the way section 2's did for its p.192/193 and
//     p.194/195 rows -- if a genuine source defect surfaces later, it is
//     recorded in that row's `note`, never silently repaired.
//   - ONE PARSING FIX WAS REQUIRED AND IS NOT A SOURCE-DEFECT CLAIM: Q20 (both
//     OCR passes, p.269) prints option C's label as lowercase "c." while A, B
//     and D on the same question are uppercase. The stock section-2 option
//     matcher expects a single case per question (set from option A) and,
//     unmodified, would silently swallow options C and D into option B's text
//     as an unrecognised continuation line -- a straight parsing break, not a
//     stylistic one. The fix below is a case-INSENSITIVE match against the
//     expected next letter (so "c" still satisfies expected "C"); it does not
//     touch stored option TEXT and does not decide whether the lowercase "c."
//     is really printed that way in the book or is itself an OCR effect on a
//     genuine uppercase "C." -- flagged unconfirmed in that row's note rather
//     than asserted either way.
//
// Usage:
//   node tools/ep-index/stage-oph-s03.js <ocr-dir> <keys-md> <first-unmarked> <last-marked> <out> <staged-var>
//
// first-unmarked/last-marked describe adjacent unmarked/marked page pairs:
// question n is unmarked on (first-unmarked + 2*(n-1)) and marked on the
// following page, same convention as stage-oph-s02.js.
//
// Stems and options are read from the UNMARKED page only, both OCR passes,
// longer read wins per option/stem span -- same mechanism as section 2, and
// for the same reason (the marked page's own highlighting introduces its own
// OCR noise). The marked page is NOT read by this script at all: the key is
// already resolved in oph-ep-s03-keys.md and the explanation box is
// deliberately deferred (see above), so there is nothing left on the marked
// page this script needs.
//
// KEY CONVENTION: 0-based. `key` below is 0 for option A/a, 1 for B/b, 2 for
// C/c, 3 for D/d -- taken directly from oph-ep-s03-keys.md's "Visual index
// (0-based)" column, never recomputed or re-derived from option text here.

const fs = require('fs');
const path = require('path');

function die(message) {
  console.error('stage-oph-s03: ' + message);
  process.exit(2);
}

function usage() {
  die('usage: node stage-oph-s03.js <ocr-dir> <keys-md> <first-unmarked> <last-marked> <out> <staged-var>');
}

function js(value) {
  return JSON.stringify(value);
}

function compact(lines) {
  return lines.map(line => line.trim()).filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();
}

// A short alphanumeric token at the end of a pass is the page's own printed
// page number, sometimes OCR-garbled through a small set of digit look-alikes.
// Dropped before parsing so it is never absorbed as a fragment of the last
// real content line. Some passes print no footer line at all -- then there is
// nothing to drop, and the last real content line survives untouched.
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

// Letter-then-punctuation option header. Section 3 runs A-D/a-d only (no
// five-option row), but the matcher is left general (A-E/a-e) rather than
// tightened, since tightening it buys nothing and a future section reusing
// this file's shape should not silently break on E.
function matchOption(line) {
  return /^([A-Ea-e])[.,)]\s*(.*)$/.exec(line);
}

// No KNOWN_DIGIT_FIX / KNOWN_OPTION_TEXT_FIX entries for section 3 -- no
// source-printing defect is documented for this section (see header comment).
const KNOWN_DIGIT_FIX = {};
const KNOWN_OPTION_TEXT_FIX = {};

// Two anomalies noticed while building this script (neither is in the
// calibration note or keys.md -- both discovered here, both confirmed
// identical across BOTH independent OCR passes, native and 150dpi, which is
// the same cross-pass-agreement bar the calibration note itself used to call
// other sections' printed defects genuine). Text is left EXACTLY as parsed in
// both cases -- neither is "fixed" here, only flagged, since neither can be
// confirmed against the page image from OCR text alone.
const OCR_ANOMALY_NOTE = {
  20: 'OCR ANOMALY (unconfirmed, consistent across both OCR passes): the stem reads "...20. A Which of the following..." -- a stray "A" sits between the stripped question number and the sentence on p.269 in both passes. Left exactly as read; verify against the page image whether the book prints this token or it is an OCR effect.',
  21: 'OCR ANOMALY (unconfirmed, consistent across both OCR passes): the stem reads "conjunctiva!" (with a literal exclamation mark) for what almost certainly reads "conjunctival" on p.271 in both passes. Left exactly as read, not silently corrected to "conjunctival" -- verify against the page image before drafting.'
};

// Parses stem + options from an UNMARKED page's lines. Matching the next
// expected option letter is done CASE-INSENSITIVELY against the case
// established by option A (see header comment on Q20/p.269) -- this only
// changes which line is recognised as which option's start; it never changes
// what text is stored for that option.
function parseStemOptions(lines, digitFix) {
  const stemLines = [];
  const opts = [];
  const spans = [];
  let letterCase = null;
  const caseFlags = [];
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
    const isFirst = opts.length === 0 && letter && letter.toUpperCase() === 'A';
    const expectedNext = opts.length > 0 ? (letterCase === 'lower' ? 'abcde' : 'ABCDE')[opts.length] : null;
    const isNext = opts.length > 0 && letter && expectedNext && letter.toUpperCase() === expectedNext.toUpperCase();
    if (isFirst) {
      letterCase = letter === 'a' ? 'lower' : 'upper';
      opts.push(text); spans.push(1);
    } else if (isNext) {
      const expectedLiteral = (letterCase === 'lower' ? 'abcde' : 'ABCDE')[opts.length];
      if (letter !== expectedLiteral) caseFlags.push({ index: opts.length, found: letter, expected: expectedLiteral });
      opts.push(text); spans.push(1);
    } else if (opts.length > 0) {
      opts[opts.length - 1] += ' ' + line;
      spans[spans.length - 1] += 1;
    } else {
      stemLines.push(line);
    }
  }
  return { stem: compact(stemLines), opts: opts.map(o => compact([o])), spans, letterCase, caseFlags };
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
  const re = /[0-9°%]/;
  return re.test(question.stem) || question.opts.some(o => re.test(o));
}

// oph-ep-s03-keys.md's table carries TWO more columns than s02's did (an
// "Unmarked page" column inserted before "Marked page", plus trailing
// "Explanation box" and "Figure" columns) -- this parser matches that exact
// shape and must not be assumed interchangeable with s02's parseKeysMd.
function parseKeysMd(text) {
  const re = /^\|\s*(\d+)\s*\|\s*(\d+)\s*\|\s*(\d+)\s*\|\s*([A-Da-d])\s*\|\s*(\d)\s*\|\s*([A-Da-d])\s*\|\s*(\d)\s*\|\s*(yes|no)\s*\|\s*(boxed|not boxed)\s*\|\s*([^|]*?)\s*\|/gm;
  const map = new Map();
  let m;
  while ((m = re.exec(text))) {
    const n = Number(m[1]);
    map.set(n, {
      unmarkedPage: Number(m[2]),
      markedPage: Number(m[3]),
      visualLetter: m[4],
      visualIndex: Number(m[5]),
      keyposLetter: m[6],
      keyposIndex: Number(m[7]),
      agree: m[8] === 'yes',
      boxed: m[9] === 'boxed',
      figure: m[10].trim()
    });
  }
  return map;
}

function render(rows, svar, first, last) {
  const out = [
    '/* OCR-backed staging record. Generated by tools/ep-index/stage-oph-s03.js.',
    '   Source pairs: unmarked p.' + first + ' through marked p.' + last + '.',
    '   KEY CONVENTION: 0-based. `key` is an index into `opts` -- 0=A/a, 1=B/b,',
    '   2=C/c, 3=D/d -- taken directly from',
    '   content/ophtho/qb-pages/oph-ep-s03-keys.md (visual read + keypos.py,',
    '   21/21 agree) -- this script does not run keypos.py and does not',
    '   re-derive a key.',
    '   `expl` is INTENTIONALLY EMPTY on every row in this file, unlike section',
    '   2 staging. The 9 of 21 questions that print an explanation box',
    '   (Q1-Q7, Q9, Q10) are recorded per-row as `boxPrinted` and in `note`,',
    '   taken from oph-ep-s03-keys.md own Explanation-box column (visually',
    '   confirmed on all 21 marked pages) -- but the box TEXT itself is never',
    '   populated from OCR here. It is transcribed in a later pass directly',
    '   from the page image, per project rule (OCR is a search index, never a',
    '   clinical source) -- see val-oph-ep.js, which derives its own BOXED set',
    '   from a non-empty `expl`, so that set will read empty until that later',
    '   pass fills `expl` in. */',
    '',
    'var ' + svar + ' = [',
    ''
  ];
  for (const row of rows) {
    const notes = [
      'KEY: ' + row.key + ' (' + row.keyLetter + '), from oph-ep-s03-keys.md -- visual read + keypos.py agree, 21/21; not re-derived here.'
    ];
    if (row.numberCheck) notes.push('NUMBER CHECK: stem/options contain a digit, percent sign or dash-range; verify against the page image before drafting.');
    notes.push(row.boxPrinted
      ? 'EXPLANATION BOX PRINTED per oph-ep-s03-keys.md (visually confirmed) -- expl left empty deliberately; transcribe verbatim from p.' + row.markedPage + ' in the drafting pass, never from OCR.'
      : 'NO EXPLANATION BOX PRINTED per oph-ep-s03-keys.md (visually confirmed) -- the draft explanation must be authored from source, not copied from a box.');
    if (row.caseAnomaly) notes.push(row.caseAnomaly);
    if (row.ocrAnomaly) notes.push(row.ocrAnomaly);
    if (row.opts.length !== 4) notes.push('OPTION COUNT: this question prints ' + row.opts.length + ' options, not the section default of four -- reported, not forced.');
    if (row.sourceDefect) notes.push('SOURCE DEFECT (kept verbatim, not corrected away): ' + row.sourceDefect);
    out.push('{ n:' + row.n + ', p:' + row.p + ', key:' + row.key + ',');
    out.push('  stem:' + js(row.stem) + ',');
    out.push('  opts:' + js(row.opts) + ',');
    out.push('  expl:' + js('') + ',');
    out.push('  boxPrinted:' + (row.boxPrinted ? 'true' : 'false') + ',');
    out.push('  keySource:"Confirmed against content/ophtho/qb-pages/oph-ep-s03-keys.md (visual read + keypos.py, 21/21 agree), 2026-09-09. Not re-run or re-derived by this script.",');
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
    if (key.unmarkedPage !== p) findings.push('n:' + n + ': keys.md unmarked page ' + key.unmarkedPage + ' does not match computed unmarked page ' + p);
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

    // OCR has read leading question numbers as I./I O./I l. on this book (same
    // finding as stage-oph-s01.js/stage-oph-s02.js); the sequential staging n,
    // not the printed token, identifies the entry, so the leading number is
    // stripped either way. The trailing (?!\d) is load-bearing: without it,
    // a stem legitimately starting with a decimal number would have its
    // integer part silently eaten (see stage-oph-s02.js's own comment on this
    // exact regex -- copied verbatim, not weakened).
    trusted.stem = trusted.stem.replace(/^(?:\d+|[Il]\s*[IlO]?)\.(?!\d)\s*/, '');

    const optionTextFix = KNOWN_OPTION_TEXT_FIX[n];
    let sourceDefect = null;
    if (optionTextFix) {
      Object.keys(optionTextFix).forEach(i => {
        trusted.opts[Number(i)] = optionTextFix[i];
      });
    }

    let caseAnomaly = null;
    if (trusted.caseFlags && trusted.caseFlags.length) {
      caseAnomaly = 'OCR CASE ANOMALY (unconfirmed): both OCR passes read option '
        + trusted.caseFlags.map(f => f.found + ' where the question otherwise uses ' + f.expected).join(', ')
        + ' on p.' + p + ' -- verify against the page image whether the book itself prints a mixed-case '
        + 'label here or this is an OCR effect on a uniformly-cased original; the stored option TEXT is unaffected either way.';
    }

    const q = { stem: trusted.stem, opts: trusted.opts };
    rows.push({
      n, p, markedPage: marked,
      key: key.visualIndex, keyLetter: key.visualLetter, keyposIndex: key.keyposIndex, agree: key.agree,
      stem: q.stem, opts: q.opts,
      boxPrinted: key.boxed,
      numberCheck: hasNumeric(q),
      caseAnomaly,
      ocrAnomaly: OCR_ANOMALY_NOTE[n] || null,
      sourceDefect
    });
  }

  fs.writeFileSync(outFile, render(rows, svar, first, last), 'utf8');

  const summary = rows.map(r => ({ n: r.n, p: r.p, marked: r.markedPage, key: r.key, opts: r.opts.length,
    numberCheck: r.numberCheck, boxPrinted: r.boxPrinted, caseAnomaly: !!r.caseAnomaly }));
  console.log(JSON.stringify({ staged: rows.length, findings, summary }, null, 2));
  if (findings.length) process.exitCode = 1;
}

main(process.argv.slice(2));
