'use strict';

// Generate an OCR-backed staging array for section 6 ("Conjunctiva") of the
// ophthalmology endpoint, part 1. Modelled on stage-oph-s04.js: it reads the
// unmarked OCR page only, uses keys.md as the sole key/box authority, and
// emits the same deferred-explanation row shape.
//
// Arithmetic: position n is unmarked p.442+2n and marked p.443+2n. There are
// 39 physical positions (p.444/p.445 through p.520/p.521); p.522 is a reprint.
// `n` is physical position, not the printed question number. In particular,
// printed 28 occurs twice, at n:28 and n:29.
//
// Usage:
// node tools/ep-index/stage-oph-s06.js <ocr-dir> <keys-md> <first-unmarked> <last-marked> <out> <staged-var>

const fs = require('fs');
const path = require('path');

function die(message) {
  console.error('stage-oph-s06: ' + message);
  process.exit(2);
}

function usage() {
  die('usage: node stage-oph-s06.js <ocr-dir> <keys-md> <first-unmarked> <last-marked> <out> <staged-var>');
}

function js(value) {
  return JSON.stringify(value);
}

function compact(lines) {
  return lines.map(line => line.trim()).filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();
}

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

function matchOption(line) {
  return /^([A-Ea-e])[.,)]\s*(.*)$/.exec(line);
}

// No OCR text is silently corrected in this section. Both maps deliberately
// remain empty; uncertain OCR is retained and flagged for the image check.
const KNOWN_DIGIT_FIX = {};
const KNOWN_OPTION_TEXT_FIX = {};

function parseStemOptions(lines, digitFix) {
  const stemLines = [];
  const opts = [];
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
      opts.push(text);
    } else if (isNext) {
      const expectedLiteral = (letterCase === 'lower' ? 'abcde' : 'ABCDE')[opts.length];
      if (letter !== expectedLiteral) caseFlags.push({ index: opts.length, found: letter, expected: expectedLiteral });
      opts.push(text);
    } else if (opts.length > 0) {
      opts[opts.length - 1] += ' ' + line;
    } else {
      stemLines.push(line);
    }
  }
  return { stem: compact(stemLines), opts: opts.map(o => compact([o])), letterCase, caseFlags };
}

function bestOf(candidates, scoreFn) {
  let best = null;
  let bestScore = -1;
  for (const c of candidates) {
    const score = scoreFn(c);
    if (score > bestScore) { best = c; bestScore = score; }
  }
  return best;
}

function readPage(ocrDir, page) {
  return fs.readFileSync(path.join(ocrDir, 'p' + String(page).padStart(4, '0') + '.txt'), 'utf8');
}

// Number, unit, dose, exponent, arrow, or dash: retain the OCR verbatim and
// ask the later image check to inspect it. This includes all dash variants.
function hasNumeric(question) {
  const re = /[0-9°%→←↔\-–—]|\b(?:mg|mcg|g|kg|ml|l|mm|cm|m|km|diopter|diopters|d|h|hr|hrs|min|mins|day|days|week|weeks|month|months|year|years)\b/i;
  return re.test(question.stem) || question.opts.some(o => re.test(o));
}

// The section-6 table has the same columns as s04, but its two keypos
// exceptions use free text rather than a letter/index. Splitting table cells
// is safer than coercing those exceptions into a misleading value.
function parseKeysMd(text) {
  const map = new Map();
  for (const line of text.replace(/\r/g, '').split('\n')) {
    if (!/^\|\s*\d+\s*\|/.test(line)) continue;
    const cells = line.split('|').slice(1, -1).map(cell => cell.trim());
    if (cells.length !== 11) continue;
    const optionMatch = /\d+/.exec(cells[8]);
    map.set(Number(cells[0]), {
      unmarkedPage: Number(cells[1]),
      markedPage: Number(cells[2]),
      visualLetter: cells[3],
      visualIndex: Number(cells[4]),
      keyposLetter: cells[5],
      keyposIndex: /^\d+$/.test(cells[6]) ? Number(cells[6]) : null,
      agree: cells[7] === 'yes',
      agreeText: cells[7],
      optionCount: optionMatch ? Number(optionMatch[0]) : null,
      boxed: cells[9].startsWith('boxed'),
      figure: cells[10]
    });
  }
  return map;
}

function printedNumber(n) {
  return n >= 29 ? n - 1 : n;
}

function render(rows, svar, first, last) {
  const out = [
    '/* OCR-backed staging record. Generated by tools/ep-index/stage-oph-s06.js.',
    '   Source pairs: unmarked p.' + first + ' through marked p.' + last + '.',
    '   KEY CONVENTION: 0-based. `key` is an index into `opts` -- 0=A/a, 1=B/b,',
    '   2=C/c, 3=D/d, 4=E/e -- taken directly from',
    '   content/ophtho/qb-pages/oph-ep-s06-keys.md. The table records two',
    '   keypos exceptions (n:1 disagreement; n:36 abstention); visual keys are',
    '   retained exactly as recorded and are not re-derived here.',
    '   `expl` is INTENTIONALLY EMPTY on every row. `boxPrinted` is copied',
    '   per row from the keys table; explanation text is deferred to a later',
    '   verbatim page-image transcription pass. */',
    '',
    'var ' + svar + ' = [',
    ''
  ];
  for (const row of rows) {
    const notes = [
      'KEY: ' + row.key + ' (' + row.keyLetter + '), from oph-ep-s06-keys.md; not re-derived here.'
    ];
    if (row.numberCheck) notes.push('NUMBER CHECK: stem/options contain a number, unit, dose, exponent, arrow or dash; verify against the page image before drafting.');
    notes.push(row.boxPrinted
      ? 'EXPLANATION BOX PRINTED per oph-ep-s06-keys.md -- expl left empty deliberately; transcribe verbatim from p.' + row.markedPage + ' in the drafting pass, never from OCR.'
      : 'NO EXPLANATION BOX PRINTED per oph-ep-s06-keys.md -- the draft explanation must be authored from source, not copied from a box.');
    if (row.n === 8) notes.push('figure p459');
    if (row.printed !== row.n) notes.push('PRINTED NUMBER: ' + row.printed + ' on source page; n:' + row.n + ' is physical order.');
    if (!row.agree) notes.push('KEYPOS STATUS: ' + row.agreeText + '; visual key from oph-ep-s06-keys.md is retained, not replaced.');
    if (row.caseAnomaly) notes.push(row.caseAnomaly);
    if (row.opts.length !== row.expectedOptions) notes.push('OPTION COUNT: OCR parser found ' + row.opts.length + ' options, not the ' + row.expectedOptions + ' recorded in oph-ep-s06-keys.md -- reported, not forced.');
    out.push('{ n:' + row.n + ', p:' + row.p + ', key:' + row.key + ',');
    out.push('  stem:' + js(row.stem) + ',');
    out.push('  opts:' + js(row.opts) + ',');
    out.push('  expl:' + js('') + ',');
    out.push('  boxPrinted:' + (row.boxPrinted ? 'true' : 'false') + ',');
    out.push('  keySource:' + js('Recorded in content/ophtho/qb-pages/oph-ep-s06-keys.md, 2026-09-15. Not re-run or re-derived by this script.') + ',');
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
  const first = Number(firstArg);
  const last = Number(lastArg);
  if (!Number.isSafeInteger(first) || !Number.isSafeInteger(last) || last <= first || (last - first) % 2 !== 1)
    die('page range must be a first-unmarked page and a last-marked page an odd number of pages apart');
  if (!/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(svar)) die('staged variable is not a JavaScript identifier: ' + svar);

  const keys = parseKeysMd(fs.readFileSync(keysMd, 'utf8'));
  const expectedRows = ((last - first) + 1) / 2;
  if (expectedRows !== 39) die('section 6 requires exactly 39 source pairs');
  const rows = [];
  const findings = [];

  for (let source = first, n = 1; source < last; source += 2, n++) {
    const p = source;
    const marked = source + 1;
    const key = keys.get(n);
    if (!key) die('n:' + n + ': no row in ' + keysMd);
    if (key.unmarkedPage !== p) die('n:' + n + ': keys.md unmarked page ' + key.unmarkedPage + ' does not match computed unmarked page ' + p);
    if (key.markedPage !== marked) die('n:' + n + ': keys.md marked page ' + key.markedPage + ' does not match computed marked page ' + marked);
    if (!Number.isInteger(key.optionCount)) die('n:' + n + ': no recorded option count in ' + keysMd);

    const digitFix = KNOWN_DIGIT_FIX[n] || null;
    const candidates = splitPasses(readPage(ocrDir, p)).map(part =>
      parseStemOptions(stripFooter(part.split('\n'), p), digitFix));
    const trusted = bestOf(candidates, candidate => candidate.stem.length + candidate.opts.join('').length);
    if (!trusted.opts.length) findings.push('n:' + n + ': p.' + p + ': no pass produced any options; staged empty opts without padding');
    trusted.stem = trusted.stem.replace(/^(?:\d+|[Il]\s*[IlO]?)\.(?!\d)\s*/, '');

    const optionTextFix = KNOWN_OPTION_TEXT_FIX[n];
    if (optionTextFix) Object.keys(optionTextFix).forEach(i => { trusted.opts[Number(i)] = optionTextFix[i]; });

    let caseAnomaly = null;
    if (trusted.caseFlags.length) {
      caseAnomaly = 'OCR CASE ANOMALY (unconfirmed): OCR read option ' + trusted.caseFlags.map(f =>
        f.found + ' where the question otherwise uses ' + f.expected).join(', ') + ' on p.' + p + '; stored option text is unaffected; verify against the page image.';
    }

    const q = { stem: trusted.stem, opts: trusted.opts };
    rows.push({
      n, p, markedPage: marked, printed: printedNumber(n),
      key: key.visualIndex, keyLetter: key.visualLetter, keyposIndex: key.keyposIndex,
      agree: key.agree, agreeText: key.agreeText,
      stem: q.stem, opts: q.opts, boxPrinted: key.boxed,
      expectedOptions: key.optionCount, numberCheck: hasNumeric(q), caseAnomaly
    });
  }

  fs.writeFileSync(outFile, render(rows, svar, first, last), 'utf8');
  const summary = rows.map(r => ({ n: r.n, p: r.p, marked: r.markedPage, key: r.key, opts: r.opts.length,
    expected: r.expectedOptions, numberCheck: r.numberCheck, boxPrinted: r.boxPrinted, caseAnomaly: !!r.caseAnomaly,
    keyposStatus: r.agreeText }));
  console.log(JSON.stringify({ staged: rows.length, findings, summary }, null, 2));
}

main(process.argv.slice(2));
