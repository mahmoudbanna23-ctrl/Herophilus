'use strict';

// Generate an OCR-backed staging array for ophthalmology endpoint section 5
// ("Eyelids"). Stems and options come only from the unmarked OCR page;
// keys, option counts, letter case, boxes and printed defects come only from
// oph-ep-s05-keys.md. OCR is a search index, not a source.
//
// Question n is unmarked on p.357+2n and marked on p.358+2n. All 29 rows
// have four options. The key is 0-based and is never derived from OCR.
//
// Usage:
//   node tools/ep-index/stage-oph-s05.js <ocr-dir> <keys-md> <first-unmarked> <last-marked> <out> <staged-var>

const fs = require('fs');
const path = require('path');

function die(message) {
  console.error('stage-oph-s05: ' + message);
  process.exit(2);
}

function usage() {
  die('usage: node stage-oph-s05.js <ocr-dir> <keys-md> <first-unmarked> <last-marked> <out> <staged-var>');
}

function js(value) { return JSON.stringify(value); }

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

function splitPasses(text) { return text.replace(/\r/g, '').split(/\n--- 150dpi ---\n/); }

function matchOption(line) { return /^([A-Ea-e])[.,)]\s*(.*)$/.exec(line); }

// The keys file records a genuine source defect: B is printed as the digit 8
// on these pages. This only restores the parser's option boundary; it does
// not change stored option text or replace the printed label in any text.
const KNOWN_DIGIT_FIX = {
  14: digitB,
  15: digitB,
  16: digitB,
  17: digitB,
  19: digitB
};

function digitB(line, expected) {
  const m = /^8[.)]\s*(.*)$/.exec(line);
  return m && expected.toUpperCase() === 'B' ? m[1] : null;
}

const SOURCE_DEFECT = {
  10: 'Option B is printed as "Ectroion".',
  14: 'Option B label is printed as digit "8"; the stem contains printed "amor1g".',
  15: 'Option B label is printed as digit "8".',
  16: 'Option B label is printed as digit "8".',
  17: 'Option B label is printed as digit "8".',
  18: 'The stem prints "eye redenss".',
  19: 'Option B label is printed as digit "8".'
};

const PRINTED_NUMBER = {
  22: 21, 23: 21, 24: 22, 25: 22, 26: 23, 27: 23, 28: 24, 29: 25
};

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
      const fixed = digitFix(line, expected);
      if (fixed !== null) { letter = expected; text = fixed; }
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
  return { stem: compact(stemLines), opts: opts.map(o => compact([o])), caseFlags };
}

function bestOf(candidates) {
  let best = null;
  let bestScore = -1;
  for (const candidate of candidates) {
    if (candidate === null) continue;
    const score = candidate.stem.length + candidate.opts.join('').length;
    if (score > bestScore) { best = candidate; bestScore = score; }
  }
  return best;
}

function readPage(ocrDir, page) {
  return fs.readFileSync(path.join(ocrDir, 'p' + String(page).padStart(4, '0') + '.txt'), 'utf8');
}

function hasNumeric(question) {
  return /[0-9Â°%→←↔-]/.test(question.stem) || question.opts.some(o => /[0-9Â°%→←↔-]/.test(o));
}

// s05 has two visual-only rows whose keypos cells contain an abstention
// reason rather than a letter/index. Those are valid audited keys, with a
// null keyposIndex and visualOnly:true, rather than parser failures.
function parseKeysMd(text) {
  const re = /^\|\s*(\d+)\s*\|\s*(\d+)\s*\|\s*(\d+)\s*\|\s*([A-Da-d])\s*\|\s*(\d)\s*\|\s*([^|]*?)\s*\|\s*([^|]*?)\s*\|\s*(yes|visual-only)\s*\|\s*(\d)\s*\(([A-Da-d])-([A-Da-d])[^)]*\)\s*\|\s*(boxed|not boxed)\s*\|\s*([^|]*?)\s*\|/gm;
  const map = new Map();
  let m;
  while ((m = re.exec(text))) {
    const visualOnly = m[8] === 'visual-only';
    const keyposIndex = /^\d$/.test(m[7].trim()) ? Number(m[7].trim()) : null;
    map.set(Number(m[1]), {
      unmarkedPage: Number(m[2]), markedPage: Number(m[3]),
      visualLetter: m[4], visualIndex: Number(m[5]),
      keyposIndex, visualOnly, agree: visualOnly || m[8] === 'yes',
      optionCount: Number(m[9]), boxed: m[12] === 'boxed', figure: m[13].trim()
    });
  }
  return map;
}

function render(rows, svar, first, last) {
  const out = [
    '/* OCR-backed staging record. Generated by tools/ep-index/stage-oph-s05.js.',
    '   Source pairs: unmarked p.' + first + ' through marked p.' + last + '.',
    '   KEY CONVENTION: 0-based. `key` is an index into `opts` -- 0=A/a, 1=B/b,',
    '   2=C/c, 3=D/d -- taken directly from',
    '   content/ophtho/qb-pages/oph-ep-s05-keys.md. The keys file records',
    '   visual/keypos agreement for 27 rows and visual-only keys for Q1 and',
    '   Q18, where keypos abstained; this script does not re-derive a key.',
    '   `expl` is INTENTIONALLY EMPTY on every row. The 11 rows that print an',
    '   explanation box (Q1-Q11) are recorded per-row as `boxPrinted`; its',
    '   text is deferred for image checking and is never taken from OCR. */',
    '',
    'var ' + svar + ' = [',
    ''
  ];
  for (const row of rows) {
    const keyEvidence = row.visualOnly
      ? 'KEY: ' + row.key + ' (' + row.keyLetter + '), from oph-ep-s05-keys.md -- visual read; keypos.py abstained per that file; not re-derived here.'
      : 'KEY: ' + row.key + ' (' + row.keyLetter + '), from oph-ep-s05-keys.md -- visual read + keypos.py agree; not re-derived here.';
    const notes = [keyEvidence];
    if (row.printedNumber !== row.n) notes.push('PRINTED NUMBER: ' + row.printedNumber + '. on the source differs from physical sequence n:' + row.n + '; retained as a distinct question.');
    if (row.numberCheck) notes.push('NUMBER CHECK: OCR text or a recorded source defect contains a digit, unit marker, percent sign, arrow or dash; verify against the page image before drafting.');
    notes.push(row.boxPrinted
      ? 'EXPLANATION BOX PRINTED per oph-ep-s05-keys.md -- expl left empty deliberately; transcribe verbatim from p.' + row.markedPage + ' in the drafting pass, never from OCR.'
      : 'NO EXPLANATION BOX PRINTED per oph-ep-s05-keys.md -- the draft explanation must be authored from source, not copied from a box.');
    if (row.caseAnomaly) notes.push(row.caseAnomaly);
    if (row.opts.length !== row.expectedOptions) notes.push('OPTION COUNT: this question parses as ' + row.opts.length + ' options, not the ' + row.expectedOptions + ' recorded in oph-ep-s05-keys.md -- reported, not forced.');
    if (row.sourceDefect) notes.push('SOURCE DEFECT (kept verbatim, not corrected away): ' + row.sourceDefect);
    out.push('{ n:' + row.n + ', p:' + row.p + ', key:' + row.key + ',');
    out.push('  stem:' + js(row.stem) + ',');
    out.push('  opts:' + js(row.opts) + ',');
    out.push('  expl:' + js('') + ',');
    out.push('  boxPrinted:' + (row.boxPrinted ? 'true' : 'false') + ',');
    out.push('  keySource:' + js('Confirmed against content/ophtho/qb-pages/oph-ep-s05-keys.md (visual read; keypos agreement 27/29, abstained Q1 and Q18), 2026-09-15. Not re-run or re-derived by this script.') + ',');
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
    if (!key.agree) findings.push('n:' + n + ': keys.md records a visual/keypos disagreement');
    if (key.unmarkedPage !== p) findings.push('n:' + n + ': keys.md unmarked page ' + key.unmarkedPage + ' does not match computed unmarked page ' + p);
    if (key.markedPage !== marked) findings.push('n:' + n + ': keys.md marked page ' + key.markedPage + ' does not match computed marked page ' + marked);
    const candidates = splitPasses(readPage(ocrDir, p)).map(part => {
      const parsed = parseStemOptions(stripFooter(part.split('\n'), p), KNOWN_DIGIT_FIX[n] || null);
      return parsed.opts.length ? parsed : null;
    });
    const trusted = bestOf(candidates);
    if (!trusted) { findings.push('n:' + n + ': p.' + p + ': no pass produced any options'); continue; }
    const leading = /^(\d+|[Il]\s*[IlO]?)\.(?!\d)\s*/.exec(trusted.stem);
    trusted.stem = trusted.stem.replace(/^(?:\d+|[Il]\s*[IlO]?)\.(?!\d)\s*/, '');
    const printedNumber = PRINTED_NUMBER[n] || (leading && /^\d+$/.test(leading[1]) ? Number(leading[1]) : n);
    const caseAnomaly = trusted.caseFlags.length
      ? 'OCR CASE ANOMALY (unconfirmed): OCR reads option ' + trusted.caseFlags.map(f => f.found + ' where the question otherwise uses ' + f.expected).join(', ') + ' on p.' + p + '; stored option text is unaffected.'
      : null;
    const q = { stem: trusted.stem, opts: trusted.opts };
    rows.push({
      n, p, markedPage: marked, key: key.visualIndex, keyLetter: key.visualLetter,
      keyposIndex: key.keyposIndex, visualOnly: key.visualOnly, agree: key.agree,
      stem: q.stem, opts: q.opts, boxPrinted: key.boxed, expectedOptions: key.optionCount,
      printedNumber, numberCheck: hasNumeric(q) || n === 14, caseAnomaly, sourceDefect: SOURCE_DEFECT[n] || null
    });
  }
  fs.writeFileSync(outFile, render(rows, svar, first, last), 'utf8');
  const summary = rows.map(r => ({ n: r.n, p: r.p, marked: r.markedPage, key: r.key, opts: r.opts.length,
    expected: r.expectedOptions, numberCheck: r.numberCheck, boxPrinted: r.boxPrinted, visualOnly: r.visualOnly,
    printedNumber: r.printedNumber, caseAnomaly: !!r.caseAnomaly }));
  console.log(JSON.stringify({ staged: rows.length, findings, summary }, null, 2));
  if (findings.length) process.exitCode = 1;
}

main(process.argv.slice(2));
