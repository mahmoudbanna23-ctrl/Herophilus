#!/usr/bin/env node
'use strict';

/* ocr-gate.js — Tesseract-5 TSV → MCQ block segmentation + confidence gate.
 *
 * Reads one or more Tesseract `tsv` outputs (from `tesseract page.png out tsv`)
 * and prints a JSON report on stdout (or to --out FILE) that segments each page
 * into MCQ question/key blocks and gives each block a verdict:
 *   TEXT   — clean enough to ship as text only
 *   VISUAL — below the confidence threshold, or a suspect figure page, or a
 *            recoverable structural oddity; `reasons` says which
 *   HALT   — parser cannot segment the page; raw words are printed to stderr
 *            and the process exits non-zero (never guesses, never skips)
 *
 * Ambiguities in the brief, resolved here (loud, not silent):
 *  - Tesseract TSV rows carry NO page dimensions, so the top/bottom 4%
 *    header/footer bands and the figure grid need a physical page size. The
 *    brief's "page ≈ 2480×3508" is used as the DEFAULT (portrait A4 @300 DPI;
 *    landscape2up swaps to 3508×2480). Pass `--page WxH` to pin a real size.
 *    Inferring from word-box extents was rejected: it under-counts pages with
 *    no running footer, which put the last body lines inside the "footer"
 *    band and silently stripped them.
 *  - `--figure-cells` accepts a FRACTION of the page grid area (default 0.08,
 *    the brief's "≥ 8 %") or an absolute cell count if passed as an integer.
 *  - The brief names a `landscape2up` jump as "backward, non-reset"; any
 *    non-+1, non-reset step (a skipped number reads the same) is flagged as
 *    `qnum-jump` in both profiles.
 *  - Stem-only question blocks (number + stem, no options) are left TEXT:
 *    they are the shared-menu form the brief says not to fail on. Whether
 *    their option menu ever arrived is visible as an empty `labels` array.
 *  - A shared option menu that opens a page (its stems were on the previous
 *    page) is emitted as a qnum:null block rather than silently dropped.
 *  - The brief does not name a reason for duplicate option labels; this tool
 *    uses `label-dup` (gaps use the brief's `label-gap`).
 *  - The suspect key glyphs `l 1 I 4` are matched case-insensitively, so L/i
 *    are also caught.
 *  - "Cannot segment the block at all" is implemented as: any word left
 *    unconsumed by a question or key construction after segmentation. Any
 *    such word halts the run.
 *  - Halt shuts down the whole run on the FIRST offending page.
 *
 * CLI: node tools/ocr-gate.js [--profile portrait|landscape2up] [--threshold N]
 *                               [--figure-cells FRACTION|CELLS] [--page WxH]
 *                               [--out file.json] [--selftest] file.tsv [...]
 */

const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const GRID = { w: 40, h: 56 };

const QNUM_RE = /^\d{1,4}[.)]$/;
const GLUED_RE = /^(\d{1,4}[.)])(\S.*)$/;
const LABEL_RE = /^\(?([a-eA-E])[.)]?\)?$/;
const KEY1_RE = /^(?:Correct\s+Answer|Answer)\s*:\s*([A-E]|[l1I4])?$/i;
const KEY2_RE = /^Correct$/i;
const KEY3_RE = /^Answer\s*:$/i;
const LETTER_RE = /^[A-E]$/;
const SUSPECT_RE = /^[l1I4]$/i;

const round1 = (x) => Math.round(x * 10) / 10;

function usage() {
  return [
    'usage: node ocr-gate.js [--profile portrait|landscape2up] [--threshold N]',
    '                        [--figure-cells FRACTION|CELLS] [--page WxH] [--out file.json]',
    '                        [--selftest] file.tsv [...]',
  ].join('\n');
}

function parseArgs(argv) {
  const o = { profile: 'portrait', threshold: 88, figure: 0.08, out: null, page: null, selftest: false, files: [] };
  let i = 0;
  const need = (name) => {
    const v = argv[i++];
    if (v === undefined) throw new Error(name + ' needs a value');
    return v;
  };
  while (i < argv.length) {
    const a = argv[i++];
    if (a === '--selftest') o.selftest = true;
    else if (a === '--profile') o.profile = need('--profile');
    else if (a === '--threshold') { o.threshold = parseFloat(need('--threshold')); if (Number.isNaN(o.threshold)) throw new Error('--threshold must be a number'); }
    else if (a === '--figure-cells') { const v = need('--figure-cells'); o.figure = /^\d+$/.test(v) ? parseInt(v, 10) : parseFloat(v); }
    else if (a === '--page') { const m = /^(\d+)x(\d+)$/i.exec(need('--page')); if (!m) throw new Error('--page must be WxH, e.g. 2480x3508'); o.page = { w: +m[1], h: +m[2] }; }
    else if (a === '--out') o.out = need('--out');
    else if (a.startsWith('--')) throw new Error('unknown option ' + a);
    else o.files.push(a);
  }
  return o;
}

function readTsv(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const lines = raw.split(/\r?\n/);
  const header = lines.shift();
  if (!header || header.split('\t')[0] !== 'level') throw new Error(file + ': expected Tesseract TSV header row');
  const words = [];
  for (const rowStr of lines) {
    const row = rowStr.split('\t');
    if (row.length < 12 || row[0] !== '5') continue;
    const w = {
      text: row[11],
      left: +row[6] || 0, top: +row[7] || 0, width: +row[8] || 0, height: +row[9] || 0,
      conf: parseFloat(row[10]),
    };
    if (w.text) words.push(w);
  }
  if (!words.length) throw new Error(file + ': no level==5 words found');
  return { page: path.basename(file).replace(/\.[^.]*$/, ''), words };
}

function pageSize(opt) {
  if (opt.page) return opt.page;
  return opt.profile === 'landscape2up' ? { w: 3508, h: 2480 } : { w: 2480, h: 3508 };
}

function stripFurniture(words, H) {
  const dropped = [], kept = [];
  for (const w of words) {
    if (w.top < H * 0.04 || w.top > H * 0.96) dropped.push({ text: w.text, conf: w.conf, left: w.left, top: w.top });
    else kept.push(w);
  }
  return { kept, dropped };
}

function splitColumns(words, W, profile) {
  if (profile !== 'landscape2up') return [words];
  const a = [], b = [];
  for (const w of words) ((w.left + w.width / 2) < W / 2 ? a : b).push(w);
  return [a, b];
}

function figureDetect(words, W, H, opt) {
  const cols = GRID.w, rows = GRID.h;
  const cellW = W / cols, cellH = H / rows;
  const occ = [];
  for (let y = 0; y < rows; y++) occ.push(new Array(cols).fill(false));
  for (const w of words) {
    const x0 = Math.max(0, Math.min(cols - 1, Math.floor(w.left / cellW)));
    const x1 = Math.max(0, Math.min(cols - 1, Math.floor((w.left + w.width) / cellW)));
    const y0 = Math.max(0, Math.min(rows - 1, Math.floor(w.top / cellH)));
    const y1 = Math.max(0, Math.min(rows - 1, Math.floor((w.top + w.height) / cellH)));
    for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) occ[y][x] = true;
  }
  const limit = Number.isInteger(opt.figure) ? opt.figure : Math.floor(opt.figure * cols * rows);
  const seen = [];
  for (let y = 0; y < rows; y++) seen.push(new Array(cols).fill(false));
  const regions = [];
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (occ[y][x] || seen[y][x]) continue;
      const stack = [[x, y]];
      seen[y][x] = true;
      let n = 0, minX = x, maxX = x, minY = y, maxY = y;
      let tTop = false, tBot = false, tLft = false, tRgt = false;
      while (stack.length) {
        const [cx, cy] = stack.pop();
        n++;
        if (cy === 0) tTop = true;
        if (cy === rows - 1) tBot = true;
        if (cx === 0) tLft = true;
        if (cx === cols - 1) tRgt = true;
        if (cx < minX) minX = cx;
        if (cx > maxX) maxX = cx;
        if (cy < minY) minY = cy;
        if (cy > maxY) maxY = cy;
        for (const d of dirs) {
          const nx = cx + d[0], ny = cy + d[1];
          if (nx < 0 || ny < 0 || nx >= cols || ny >= rows) continue;
          if (!occ[ny][nx] && !seen[ny][nx]) { seen[ny][nx] = true; stack.push([nx, ny]); }
        }
      }
      // Margins drain to a page edge AND run a full edge; a gutter between
      // two landscape halves also touches top and bottom. Everything else
      // that is large enough is a suspect figure (false positives accepted).
      const isMargin = (tTop && tBot) || (tLft && tRgt);
      if (n >= limit && !isMargin) {
        regions.push({
          cells: n,
          left: Math.floor(minX * cellW), top: Math.floor(minY * cellH),
          right: Math.ceil((maxX + 1) * cellW), bottom: Math.ceil((maxY + 1) * cellH),
        });
      }
    }
  }
  return { suspect: regions.length > 0, regions };
}

function fakeWord(text, src) {
  return { text, conf: src.conf, left: src.left, top: src.top, width: src.width, height: src.height };
}

function qnumToken(t) { return QNUM_RE.test(t) ? parseInt(t, 10) : null; }

function gluedQnumToken(t) {
  const m = GLUED_RE.exec(t);
  return m ? { num: parseInt(m[1], 10), head: m[1], rest: m[2] } : null;
}

function keyMarker(words, i) {
  const t = words[i].text.trim();
  const m = KEY1_RE.exec(t);
  if (m) return { len: 1, inlineLetter: m[1] || null };
  if (KEY2_RE.test(t) && words[i + 1] && KEY3_RE.test(words[i + 1].text.trim())) return { len: 2, inlineLetter: null };
  return null;
}

function segmentColumn(words, opt) {
  const blocks = [];
  const unconsumed = [];
  let cur = null;
  let pendingStem = [];
  let prevQnum = null, prevQblock = null;

  function closeCur() {
    if (!cur) return;
    if (cur.kind === 'q') {
      if (cur.labels.length === 0) {
        if (cur.qnum != null) pendingStem.push(cur);
      } else {
        pendingStem = [];
      }
      if (cur.qnum != null && prevQnum != null) {
        const legalReset = opt.profile === 'landscape2up' && cur.qnum === 1;
        if (cur.qnum !== prevQnum + 1 && !legalReset) {
          cur.jump = true;
          if (prevQblock) prevQblock.jump = true;
        }
      }
      if (cur.qnum != null) { prevQnum = cur.qnum; prevQblock = cur; }
    }
    blocks.push(cur);
    cur = null;
  }

  let i = 0;
  while (i < words.length) {
    const w = words[i];
    const t = w.text.trim();

    const mk = keyMarker(words, i);
    if (mk) {
      const inline = opt.profile === 'landscape2up' && cur && cur.kind === 'q' && cur.qnum != null;
      if (!inline) { closeCur(); cur = { kind: 'k', qnum: null, labels: [], words: [] }; }
      for (let k = 0; k < mk.len; k++) cur.words.push(words[i + k]);
      i += mk.len;
      let letter = null, fail = null;
      if (mk.inlineLetter) {
        letter = mk.inlineLetter;
        if (!LETTER_RE.test(letter)) fail = 'key-letter-suspect';
      } else {
        const nx = words[i];
        const tx = nx ? nx.text.trim() : '';
        if (tx && LETTER_RE.test(tx)) { letter = tx; cur.words.push(nx); i++; }
        else if (tx && SUSPECT_RE.test(tx)) { letter = tx; fail = 'key-letter-suspect'; cur.words.push(nx); i++; }
        else fail = 'key-letter-missing';
      }
      cur.keyMarker = true;
      cur.keyFail = fail;
      cur.key = letter || null;
      continue;
    }

    const qn = qnumToken(t);
    if (qn != null) {
      closeCur();
      cur = { kind: 'q', qnum: qn, labels: [], words: [w] };
      i++;
      continue;
    }

    const glued = gluedQnumToken(t);
    if (glued) {
      // "682.The" — number glued to the first stem word.
      closeCur();
      cur = { kind: 'q', qnum: glued.num, labels: [], words: [fakeWord(glued.head, w), fakeWord(glued.rest, w)] };
      i++;
      continue;
    }

    const lm = LABEL_RE.exec(t);
    if (lm) {
      if (cur && cur.kind === 'k') { cur.words.push(w); i++; continue; } // letter-like token inside an explanation
      if (!cur) cur = { kind: 'q', qnum: null, labels: [], words: [] };  // shared menu opening the page
      cur.labels.push(lm[1].toLowerCase());
      cur.words.push(w);
      if (pendingStem.length && !cur.menuMarked) {
        // Shared menu: several stem-only questions printed their options once.
        for (const b of pendingStem) b.labels = cur.labels;
        cur.menuMarked = true;
      }
      if (cur.menuMarked) for (const b of pendingStem) b.words.push(w);
      i++;
      continue;
    }

    if (cur) {
      cur.words.push(w);
      if (cur.menuMarked) for (const b of pendingStem) b.words.push(w);
    } else {
      unconsumed.push(w);
    }
    i++;
  }
  closeCur();
  return { blocks, unconsumed };
}

function finalizeBlock(b, page, figureSuspect, opt) {
  const confs = b.words.map((x) => x.conf).filter((c) => Number.isFinite(c) && c >= 0);
  const mean = confs.length ? confs.reduce((s, c) => s + c, 0) / confs.length : 0;
  const min = confs.length ? Math.min.apply(null, confs) : 0;
  const reasons = [];
  if (figureSuspect) reasons.push('figure-on-page');
  if (mean < opt.threshold) reasons.push('low-confidence');
  if (b.keyMarker && b.keyFail) reasons.push(b.keyFail);
  const seen = {};
  const exp = 'abcdef';
  for (let k = 0; k < b.labels.length; k++) {
    const L = b.labels[k];
    if (seen[L]) { reasons.push('label-dup'); break; }
    if (L !== exp[k]) reasons.push('label-gap');
    seen[L] = 1;
  }
  if (b.jump) reasons.push('qnum-jump');
  const uniq = reasons.filter((r, k) => reasons.indexOf(r) === k);
  return {
    page,
    qnum: b.qnum,
    meanConf: round1(mean),
    minConf: round1(min),
    labels: b.labels,
    key: b.key || null,
    verdict: uniq.length ? 'VISUAL' : 'TEXT',
    text: b.words.map((x) => x.text).join(' '),
    reasons: uniq,
  };
}

function haltAndExit(page, col, words) {
  console.error('HALT: cannot segment page ' + page + ', column ' + (col + 1));
  console.error('  reason: ' + words.length + ' word(s) not inside any question/key block');
  console.error('  raw words (left top widthxheight conf "text"):');
  for (const w of words) {
    console.error('    ' + w.left + ' ' + w.top + ' ' + w.width + 'x' + w.height + ' conf=' + w.conf + ' "' + w.text + '"');
  }
  process.exit(1);
}

function pageReport(data, opt) {
  const size = pageSize(opt);
  const { kept, dropped } = stripFurniture(data.words, size.h);
  const fig = figureDetect(kept, size.w, size.h, opt);
  const cols = splitColumns(kept, size.w, opt.profile);
  const blocks = [];
  for (let ci = 0; ci < cols.length; ci++) {
    if (!cols[ci].length) continue;
    const res = segmentColumn(cols[ci], opt);
    if (res.unconsumed.length) haltAndExit(data.page, ci, res.unconsumed);
    for (const b of res.blocks) blocks.push(finalizeBlock(b, data.page, fig.suspect, opt));
  }
  return {
    page: data.page,
    width: size.w,
    height: size.h,
    dropped,
    figureSuspect: fig.suspect,
    figureRegions: fig.regions,
    blocks,
  };
}

function main() {
  let opt;
  try { opt = parseArgs(process.argv.slice(2)); }
  catch (err) { console.error(err.message); console.error(usage()); process.exit(2); }

  if (opt.profile !== 'portrait' && opt.profile !== 'landscape2up') {
    console.error('--profile must be portrait or landscape2up');
    process.exit(2);
  }
  if (opt.selftest) selftest();

  if (!opt.files.length) { console.error(usage()); process.exit(2); }

  const pages = [];
  for (const file of opt.files) {
    let data;
    try { data = readTsv(file); }
    catch (err) { console.error(err.message); process.exit(2); }
    pages.push(pageReport(data, opt));
  }
  const json = JSON.stringify({ profile: opt.profile, threshold: opt.threshold, pages }, null, 2) + '\n';
  if (opt.out) {
    fs.writeFileSync(opt.out, json);
    console.log('wrote ' + opt.out + ' (' + pages.length + ' page(s))');
  } else {
    process.stdout.write(json);
  }
}

/* --------------------------------------------------------------- selftest */

function selftest() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'ocr-gate-'));
  let n = 0;
  const check = (name, cond, ...info) => {
    n++;
    if (!cond) {
      console.error('SELFTEST FAIL: ' + name + (info.length ? '  ' + info.map(JSON.stringify).join(' ') : ''));
      console.error('checks passed before failure: ' + (n - 1));
      process.exit(1);
    }
  };
  const W = (t, x, y, c, w, h) => ({ t, x, y, c, w: w || 220, h: h || 44 });
  const line = (ts, x0, y, c) => { let x = x0; const out = []; for (const t of ts) { out.push(W(t, x, y, c)); x += 230; } return out; };

  const tsv = (words) => {
    let s = 'level\tpage_num\tblock_num\tpar_num\tline_num\tword_num\tleft\ttop\twidth\theight\tconf\ttext\n';
    words.forEach((wd, k) => {
      s += '5\t1\t1\t1\t1\t' + (k + 1) + '\t' + wd.x + '\t' + wd.y + '\t' + wd.w + '\t' + wd.h + '\t' + wd.c + '\t' + wd.t + '\n';
    });
    return s;
  };
  const run = (name, profile, words) => {
    const file = path.join(tmp, name + '.tsv');
    fs.writeFileSync(file, tsv(words));
    return pageReport(readTsv(file), { profile, threshold: 88, figure: 0.08, page: null });
  };
  const options = (xl, y0, c) => {
    const out = [];
    const labels = ['a.', 'b.', 'c.', 'd.'];
    const texts = [['Option', 'one'], ['Option', 'two'], ['Option', 'three'], ['Option', 'four']];
    for (let j = 0; j < 4; j++) {
      out.push(W(labels[j], xl, y0 + j * 90, c));
      out.push(W(texts[j][0], xl + 80, y0 + j * 90, c));
      out.push(W(texts[j][1], xl + 300, y0 + j * 90, c));
    }
    return out;
  };

  /* 1 — clean portrait page → TEXT blocks with correct qnums, labels, keys */
  const clean = [];
  clean.push(W('682.', 200, 300, 98));
  clean.push(...line(['Lorem', 'ipsum', 'dolor', 'sit', 'amet'], 400, 300, 98));
  clean.push(...options(240, 420, 98));
  clean.push(W('683.', 200, 820, 98));
  clean.push(...line(['Ut', 'enim', 'ad', 'minim', 'veniam'], 400, 820, 98));
  clean.push(...options(240, 940, 98));
  clean.push(W('Correct', 200, 1300, 98), W('Answer:', 300, 1300, 98), W('C', 400, 1300, 96));
  clean.push(W('Explanation:', 200, 1390, 98), ...line(['patient', 'recovers', 'fully'], 320, 1390, 98));
  clean.push(W('Correct', 200, 1500, 98), W('Answer:', 300, 1500, 98), W('A', 400, 1500, 97));
  const p1 = run('clean', 'portrait', clean);
  check('clean: 4 blocks', p1.blocks.length === 4);
  check('clean: qnums 682,683', p1.blocks[0].qnum === 682 && p1.blocks[1].qnum === 683);
  check('clean: labels a..d', JSON.stringify(p1.blocks[0].labels) === '["a","b","c","d"]');
  check('clean: all TEXT', p1.blocks.every((b) => b.verdict === 'TEXT'));
  check('clean: keys C,A', p1.blocks[2].key === 'C' && p1.blocks[3].key === 'A');
  check('clean: no figure, no furniture', p1.figureSuspect === false && p1.dropped.length === 0);

  /* 2 — key marker with no letter → VISUAL key-letter-missing */
  const km = [W('1.', 200, 300, 98), ...line(['Lorem', 'ipsum'], 400, 300, 98), ...options(240, 420, 98),
              W('Correct', 200, 900, 98), W('Answer:', 300, 900, 98)];
  const p2 = run('keymissing', 'portrait', km);
  check('key-missing: VISUAL', p2.blocks[p2.blocks.length - 1].verdict === 'VISUAL');
  check('key-missing: reason', p2.blocks[p2.blocks.length - 1].reasons.indexOf('key-letter-missing') >= 0);

  /* 3 — key letter printed as `1` → VISUAL key-letter-suspect */
  const ks = [W('1.', 200, 300, 98), ...line(['Lorem', 'ipsum'], 400, 300, 98), ...options(240, 420, 98),
              W('Correct', 200, 900, 98), W('Answer:', 300, 900, 98), W('1', 400, 900, 98)];
  const p3 = run('keysuspect', 'portrait', ks);
  check('key-suspect: VISUAL', p3.blocks[p3.blocks.length - 1].verdict === 'VISUAL');
  check('key-suspect: reason', p3.blocks[p3.blocks.length - 1].reasons.indexOf('key-letter-suspect') >= 0);

  /* 4 — label sequence a,b,d → VISUAL label-gap */
  const lg = [W('1.', 200, 300, 98), ...line(['Lorem', 'ipsum'], 400, 300, 98),
              W('a.', 240, 420, 98), W('Option', 320, 420, 98), W('one', 540, 420, 98),
              W('b.', 240, 510, 98), W('Option', 320, 510, 98), W('two', 540, 510, 98),
              W('d.', 240, 600, 98), W('Option', 320, 600, 98), W('four', 540, 600, 98)];
  const p4 = run('labelgap', 'portrait', lg);
  check('label-gap: VISUAL', p4.blocks[0].verdict === 'VISUAL');
  check('label-gap: reason', p4.blocks[0].reasons.indexOf('label-gap') >= 0);

  /* 5 — landscape2up: left column parses fully before right, reset-to-1 legal */
  const lcol = [], rcol = [];
  lcol.push(W('1.', 140, 200, 98), ...line(['Lorem', 'ipsum', 'dolor'], 280, 200, 98), ...options(160, 300, 98),
             W('Answer:', 160, 700, 98), W('B', 280, 700, 98));
  lcol.push(W('2.', 140, 800, 98), ...line(['Ut', 'enim', 'ad'], 280, 800, 98), ...options(160, 900, 98),
             W('Answer:', 160, 1300, 98), W('D', 280, 1300, 98));
  rcol.push(W('1.', 1900, 200, 98), ...line(['Minim', 'veniam', 'quis'], 2040, 200, 98), ...options(1920, 300, 98),
             W('Answer:', 1920, 700, 98), W('A', 2040, 700, 98));
  rcol.push(W('2.', 1900, 800, 98), ...line(['Nostrud', 'ullamco', 'labore'], 2040, 800, 98), ...options(1920, 900, 98),
             W('Answer:', 1920, 1300, 98), W('C', 2040, 1300, 98));
  const merged = [];
  let li = 0, ri = 0;
  while (li < lcol.length || ri < rcol.length) {
    for (let k = 0; k < 4 && li < lcol.length; k++) merged.push(lcol[li++]);
    for (let k = 0; k < 4 && ri < rcol.length; k++) merged.push(rcol[ri++]);
  }
  const p5 = run('land', 'landscape2up', merged);
  check('land: 4 blocks', p5.blocks.length === 4);
  check('land: left column first (qnums 1,2,1,2)', JSON.stringify(p5.blocks.map((b) => b.qnum)) === '[1,2,1,2]');
  check('land: inline keys B,D,A,C', JSON.stringify(p5.blocks.map((b) => b.key)) === '["B","D","A","C"]');
  check('land: all TEXT', p5.blocks.every((b) => b.verdict === 'TEXT'));
  check('land: no figure', p5.figureSuspect === false);

  /* 6 — large empty region (word-box ring around a hole) → all VISUAL figure-on-page */
  const fig = [];
  const topTs = ['1.', 'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'neque', 'porro', 'fugit'];
  for (let j = 0; j < topTs.length; j++) fig.push(W(topTs[j], 300 + j * 195, 500, 98));
  for (let j = 0; j < 4; j++) {
    const yy = 560 + j * 570;
    fig.push(W(['a.', 'b.', 'c.', 'd.'][j], 2060, yy, 98, 230, 570));
    fig.push(W(['Sed', 'ut', 'perspiciatis', 'unde'][j], 2310, yy, 98, 170, 570));
  }
  const botTs = ['2.', 'enim', 'ipsam', 'quia', 'voluptas', 'sit', 'aspernatur', 'aut', 'odit', 'aut', 'fugit', 'quoniam'];
  for (let j = 0; j < botTs.length; j++) fig.push(W(botTs[j], 2445 - j * 195, 2940, 98, 220, 80));
  for (let j = 0; j < 4; j++) {
    const yy = 560 + j * 570;
    fig.push(W(['a.', 'b.', 'c.', 'd.'][j], 320, yy, 98, 240, 570));
    fig.push(W(['rerum', 'facilis', 'expedita', 'sed'][j], 580, yy, 98, 170, 570));
  }
  const p6 = run('figure', 'portrait', fig);
  check('figure: suspect true', p6.figureSuspect === true);
  check('figure: 2 blocks', p6.blocks.length === 2);
  check('figure: all blocks VISUAL figure-on-page',
        p6.blocks.every((b) => b.verdict === 'VISUAL' && b.reasons.indexOf('figure-on-page') >= 0));

  /* 7 — mean confidence below threshold → VISUAL low-confidence */
  const lc = [W('1.', 200, 300, 54), ...line(['Lorem', 'ipsum'], 400, 300, 54), ...options(240, 420, 54)];
  const p7 = run('lowconf', 'portrait', lc);
  check('lowconf: VISUAL', p7.blocks[0].verdict === 'VISUAL');
  check('lowconf: reason low-confidence', p7.blocks[0].reasons.indexOf('low-confidence') >= 0);

  /* 8 — unsegmentable region → process exits non-zero, words printed */
  const haltWords = line(['Neque', 'porro', 'quisquam', 'est', 'qui', 'dolorem', 'ipsum', 'quia', 'dolor',
                          'sit', 'amet', 'consectetur', 'adipisci', 'velit', 'sed', 'quia', 'non', 'numquam'],
                         200, 300, 98);
  const haltFile = path.join(tmp, 'halt.tsv');
  fs.writeFileSync(haltFile, tsv(haltWords));
  const r = spawnSync(process.execPath, [path.resolve(process.argv[1]), haltFile], { encoding: 'utf8' });
  check('halt: exits non-zero', r.status !== 0);
  check('halt: page and raw words printed', /HALT/.test(r.stderr) && r.stderr.indexOf('Neque') >= 0);

  /* 9 — header/footer words stripped and reported */
  const hd = [W('CHAPTER', 200, 30, 98), W('SEVEN', 480, 30, 98),
              W('1.', 200, 300, 98), ...line(['Lorem', 'ipsum'], 400, 300, 98), ...options(240, 420, 98),
              W('Page', 200, 3400, 98), W('7', 320, 3400, 98)];
  const p9 = run('header', 'portrait', hd);
  check('header: 4 furniture words dropped', p9.dropped.length === 4);
  check('header: no furniture inside block text', !p9.blocks.some((b) => /CHAPTER|Page|SEVEN|7$/m.test(b.text)));
  check('header: no figure', p9.figureSuspect === false);

  console.log('SELFTEST PASS n=' + n);
  process.exit(0);
}

if (require.main === module) main();