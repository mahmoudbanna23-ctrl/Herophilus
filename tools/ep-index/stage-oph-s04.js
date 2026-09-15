'use strict';

// Generate an OCR-backed staging array for section 4 ("Lacrimal System") of
// the ophthalmology endpoint, part 1. Modelled on
// tools/ep-index/stage-oph-s03.js -- the row shape, key convention, page
// arithmetic and flagging are copied from it; only section constants and the
// commentary change. Read stage-oph-s03.js and its calibration/keys notes
// before touching this file; do not re-derive any of it.
//
// Arithmetic: question n is unmarked on PDF page 293+2n, marked on 294+2n
// (section 3 ran 229+2n/230+2n -- section-specific, does not carry forward).
// First unmarked page = 295, last marked page = 342.
//
// Key authority: content/ophtho/qb-pages/oph-ep-s04-keys.md (audited
// complete). 24 rows; keys 0-based; visual read + keypos.py agree 24/24.
//
// Section-specific facts (keys.md, visually confirmed, not re-derived here):
//   - Option count: every question has exactly 4 options EXCEPT Q18, which
//     has 5 options A-E (keys.md "Options" column, run at n_opts=5).
//   - Letter case: lowercase a-d on Q1-Q4, uppercase A-E on Q5-Q18, lowercase
//     a-d again on Q19-Q24 (two case transitions; the second one corrects the
//     calibration note -- keys.md wins).
//   - EXPLANATION BOXES ARE DEFERRED, NOT TRANSCRIBED HERE. All rows get
//     expl:"" regardless. Q1-Q6 print a box (recorded per-row as boxPrinted);
//     Q7-Q24 print none.
//   - No figure anywhere in the section (keys.md "Figure" column, "none" on
//     all 24 rows).
//   - Q2/Q4 are near-duplicate questions with DIFFERENT explanation boxes:
//     both stay as separate rows; nothing is folded or deduped.
//   - NO KNOWN SOURCE-PRINTING DEFECT is documented for this section. This
//     script carries no KNOWN_DIGIT_FIX / KNOWN_OPTION_TEXT_FIX entries; if a
//     genuine source defect surfaces later it is recorded in that row's
//     `note`, never silently repaired.
//   - Q13/Q17 both print "except"-style stems (Q17 explicit "except?"; Q13's
//     stem is a conclusion select). Neither is a parsing problem; no special
//     handling is needed here -- the drafting pass must read the "except"
//     framing before reusing these keys.
//
// Stems and options are read from the UNMARKED page only, both OCR passes,
// longer read wins per stem/option span -- same mechanism as section 2/3, and
// for the same reason (the marked page's highlighting adds its own OCR noise).
// The marked page is NOT read by this script: the key is already resolved in
// keys.md and the explanation box is deliberately deferred, so nothing on the
// marked page is needed here.
//
// OCR text is a SEARCH INDEX, not a source: stems/options taken from it are
// image-checked afterwards. Anything carrying a digit, unit, dose, exponent,
// arrow or dash raises `numberCheck` below, exactly the mechanism
// stage-oph-s03.js uses -- flagged, never silently fixed.
//
// KEY CONVENTION: 0-based. `key` below is 0 for option A/a, 1 for B/b, 2 for
// C/c, 3 for D/d, 4 for E/e -- taken directly from keys.md's "Visual index
// (0-based)" column, never recomputed or re-derived from option text.
//
// Usage:
//   node tools/ep-index/stage-oph-s04.js <ocr-dir> <keys-md> <first-unmarked> <last-marked> <out> <staged-var>

const fs = require('fs');
const path = require('path');

function die(message) {
  console.error('stage-oph-s04: ' + message);
  process.exit(2);
}

function usage() {
  die('usage: node stage-oph-s04.js <ocr-dir> <keys-md> <first-unmarked> <last-marked> <out> <staged-var>');
}

function js(value) {
  return JSON.stringify(value);
}

function compact(lines) {
  return lines.map(line => line.trim()).filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();
}

// A short alphanumeric token at the end of a pass is the page's own printed
// page number, sometimes OCR-garbled through a small set of digit
// look-alikes. Dropped before parsing so it is never absorbed as a fragment
// of the last real content line. Some passes print no footer line at all --
// then there is nothing to drop, and the last real content line survives
// untouched. Same helper as stage-oph-s03.js.
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

// Letter-then-punctuation option header. Section 4 runs A-E/a-e (Q18 has five
// options), the matcher handles A-E/a-e for all rows.
function matchOption(line) {
  return /^([A-Ea-e])[.,)]\s*(.*)$/.exec(line);
}

// No KNOWN_DIGIT_FIX / KNOWN_OPTION_TEXT_FIX entries for section 4 -- no
// source-printing defect is documented for this section (same stance as
// section 3; see header comment).
const KNOWN_DIGIT_FIX = {};
const KNOWN_OPTION_TEXT_FIX = {};

// Anomalies noticed while reading the section-4 unmarked pages for this
// script. None is in keys.md. Each was confirmed identical across BOTH
// independent OCR passes (native and 150dpi) -- the same cross-pass bar
// keys.md itself uses to call printed defects genuine. Text is left EXACTLY
// as parsed in every case; none is "fixed" here, only flagged, since none can
// be confirmed against the page image from OCR text alone. Stored alongside
// its question's numberCheck flag in the row `note`.
const OCR_ANOMALY_NOTE = {
  13: 'OCR ANOMALY (unconfirmed, consistent across both OCR passes): option C reads "and took for its cause" for what almost certainly reads "and look for its cause" on p.319. Left exactly as read, not silently corrected -- verify against the page image before drafting.',
  17: 'OCR ANOMALY (unconfirmed, consistent across both OCR passes): option D reads "ifl case of intubation failure" for what almost certainly reads "in case of intubation failure", and the stem reads "are hue" for what almost certainly reads "are true", on p.327. Left exactly as read, not silently corrected -- verify against the page image before drafting.',
  18: 'OCR ANOMALY (unconfirmed, consistent across both OCR passes): option B reads "Acute dacrocystitis" (missing the second o) for what almost certainly reads "Acute dacryocystitis" on p.329. Left exactly as read, not silently corrected -- verify against the page image before drafting.'
};

// Parses stem + options from an UNMARKED page's lines. Matching the next
// expected option letter is done CASE-INSENSITIVELY against the case
// established by option A -- identical to stage-oph-s03.js; it only changes
// which line is recognised as which option's start, never what text is
// stored for that option.
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
  const re = /[0-9Â°%]/;
  return re.test(question.stem) || question.opts.some(o => re.test(o));
}

// oph-ep-s04-keys.md's table carries the same twelve columns as s03's did,
// plus s04's new "Options" column (inserted between "Agree?" and "Explanation
// box") -- this parser matches that exact shape. The boxed/figure columns are
// the last two. Q18's Options cell is "**5 (A-E)**" (bolded in the source);
// the ** markers are stripped with the surrounding whitespace.
function parseKeysMd(text) {
  const re = /^\|\s*(\d+)\s*\|\s*(\d+)\s*\|\s*(\d+)\s*\|\s*([A-Ea-e])\s*\|\s*(\d)\s*\|\s*([A-Ea-e])\s*\|\s*(\d)\s*\|\s*(yes|no)\s*\|\s*\*{0,2}\s*(\d)\s*\(([A-Ea-e])-([A-Ea-e])\)\s*\*{0,2}\s*\|\s*(boxed|not boxed)\s*\|\s*([^|]*?)\s*\|/gm;
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
      optionCount: Number(m[9]),
      optionLetters: m[10] + '-' + m[11],
      boxed: m[12] === 'boxed',
      figure: m[13].trim()
    });
  }
  return map;
}

function render(rows, svar, first, last) {
  const out = [
    '/* OCR-backed staging record. Generated by tools/ep-index/stage-oph-s04.js.',
    '   Source pairs: unmarked p.' + first + ' through marked p.' + last + '.',
    '   KEY CONVENTION: 0-based. `key` is an index into `opts` -- 0=A/a, 1=B/b,',
    '   2=C/c, 3=D/d, 4=E/e -- taken directly from',
    '   content/ophtho/qb-pages/oph-ep-s04-keys.md (visual read + keypos.py,',
    '   24/24 agree) -- this script does not run keypos.py and does not',
    '   re-derive a key.',
    '   `expl` is INTENTIONALLY EMPTY on every row in this file, unlike section',
    '   2 staging. The 6 of 24 questions that print an explanation box',
    '   (Q1-Q6) are recorded per-row as `boxPrinted` and in `note`,',
    '   taken from oph-ep-s04-keys.md own Explanation-box column (visually',
    '   confirmed on all 24 marked pages) -- but the box TEXT itself is never',
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
      'KEY: ' + row.key + ' (' + row.keyLetter + '), from oph-ep-s04-keys.md -- visual read + keypos.py agree, 24/24; not re-derived here.'
    ];
    if (row.numberCheck) notes.push('NUMBER CHECK: stem/options contain a digit, percent sign or dash-range; verify against the page image before drafting.');
    notes.push(row.boxPrinted
      ? 'EXPLANATION BOX PRINTED per oph-ep-s04-keys.md (visually confirmed) -- expl left empty deliberately; transcribe verbatim from p.' + row.markedPage + ' in the drafting pass, never from OCR.'
      : 'NO EXPLANATION BOX PRINTED per oph-ep-s04-keys.md (visually confirmed) -- the draft explanation must be authored from source, not copied from a box.');
    if (row.caseAnomaly) notes.push(row.caseAnomaly);
    if (row.ocrAnomaly) notes.push(row.ocrAnomaly);
    if (row.opts.length !== row.expectedOptions) notes.push('OPTION COUNT: this question prints ' + row.opts.length + ' options, not the ' + row.expectedOptions + ' recorded in oph-ep-s04-keys.md -- reported, not forced.');
    if (row.sourceDefect) notes.push('SOURCE DEFECT (kept verbatim, not corrected away): ' + row.sourceDefect);
    out.push('{ n:' + row.n + ', p:' + row.p + ', key:' + row.key + ',');
    out.push('  stem:' + js(row.stem) + ',');
    out.push('  opts:' + js(row.opts) + ',');
    out.push('  expl:' + js('') + ',');
    out.push('  boxPrinted:' + (row.boxPrinted ? 'true' : 'false') + ',');
    out.push('  keySource:"Confirmed against content/ophtho/qb-pages/oph-ep-s04-keys.md (visual read + keypos.py, 24/24 agree), 2026-09-09. Not re-run or re-derived by this script.",');
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

    // OCR has read leading question numbers as I./I O./I l. on this book
    // (same finding as stage-oph-s01/02/03); the sequential staging n, not
    // the printed token, identifies the entry, so the leading number is
    // stripped either way. The trailing (?!\d) is load-bearing: without it,
    // a stem legitimately starting with a decimal number would have its
    // integer part silently eaten (comment copied from stage-oph-s02.js via
    // stage-oph-s03.js, not weakened).
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
      expectedOptions: key.optionCount,
      numberCheck: hasNumeric(q),
      caseAnomaly,
      ocrAnomaly: OCR_ANOMALY_NOTE[n] || null,
      sourceDefect
    });
  }

  fs.writeFileSync(outFile, render(rows, svar, first, last), 'utf8');

  const summary = rows.map(r => ({ n: r.n, p: r.p, marked: r.markedPage, key: r.key, opts: r.opts.length,
    expected: r.expectedOptions, numberCheck: r.numberCheck, boxPrinted: r.boxPrinted, caseAnomaly: !!r.caseAnomaly }));
  console.log(JSON.stringify({ staged: rows.length, findings, summary }, null, 2));
  if (findings.length) process.exitCode = 1;
}

main(process.argv.slice(2));