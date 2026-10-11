// parse-book.js - stage "Self Assessment Book" into sa-book.array.js
// Input: book/all.bbox.html  (pdftotext -bbox-layout, whole book, read-only harvest of the PDF).
// Geometry is used to rebuild reading order: column by x, line by y, option letter re-joined to its text by y.
// Body text height 8.6; question/answer number markers 8.9; headings 11.0; figure labels / captions / page numbers 9.1-10.9
// are dropped from the text stream (captions are kept for the figure-page map). Margin tabs are > 11.5 high or outside x 30..395.
// Hand repairs: _work/hand-entries.json  { "<id>": { stem?, options?, answer?, explanation?, reason } }  applied last.
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const titles = ['', 'The child in society', 'History and examination', 'Normal child development hearing and vision', 'Developmental problems and the child with special needs', 'Care of the sick child and young person', 'Paediatric emergencies', 'Accidents and poisoning', 'Child protection', 'Genetics', 'Perinatal medicine', 'Neonatal medicine', 'Growth and puberty', 'Nutrition', 'Gastroenterology', 'Infection and immunity', 'Allergy', 'Respiratory disorders', 'Cardiac disorders', 'Kidney and urinary tract disorders', 'Genital disorders', 'Liver disorders', 'Malignant disease', 'Haematological disorders', 'Child and adolescent mental health', 'Dermatological disorders', 'Diabetes and endocrinology', 'Inborn errors of metabolism', 'Musculoskeletal disorders', 'Neurological disorders', 'Adolescent medicine', 'Global child health'];
const dec = s => s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n)).replace(/&amp;/g, '&');
const src = fs.readFileSync(path.join(root, 'book', 'all.bbox.html'), 'utf8');
const pageChunks = src.split('<page ').slice(1);
const MID = 217;

const SUP = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '+': '⁺', '-': '⁻', '−': '⁻', '–': '⁻', '(': '⁽', ')': '⁾', 'n': 'ⁿ', 'i': 'ⁱ', '=': '⁼' };
const SUB = { '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉', '+': '₊', '-': '₋', '−': '₋', '(': '₍', ')': '₎', '=': '₌' };
const unmappedSmall = [];
function makeLines(words) { // words of one page, one set -> lines in column order
  const out = [];
  for (const col of [0, 1]) {
    const ws = words.filter(w => (w.x < MID ? 0 : 1) === col).sort((a, b) => a.y - b.y || a.x - b.x);
    const lines = [];
    for (const w of ws) {
      let ln = null;
      for (let i = lines.length - 1; i >= 0 && i >= lines.length - 3; i--) {
        const L = lines[i], lo = Math.max(L.y0, w.y), hi = Math.min(L.y1, w.y + w.h), ov = hi - lo, mh = Math.min(L.y1 - L.y0, w.h);
        if (ov >= 0.4 * mh) { ln = L; break; }
      }
      if (!ln) { ln = { words: [], y0: w.y, y1: w.y + w.h, col }; lines.push(ln); }
      ln.words.push(w);
      if (w.h > 8) { ln.y0 = Math.min(ln.y0, w.y); ln.y1 = Math.max(ln.y1, w.y + w.h); }
    }
    for (const L of lines) {
      L.words.sort((a, b) => a.x - b.x);
      L.x = L.words[0].x; L.h = Math.max(...L.words.filter(w => !(w.h > 10.38 && w.h < 10.46) && w.t !== '•').map(w => w.h), 0) || Math.max(...L.words.map(w => w.h)); // symbol-height words do not set the line height (keeps bold/marker tests honest)
      // raised / lowered small-height words: Unicode super/subscripts, decided by their height against the line's own body text
      const body = L.words.filter(w => w.h >= 7.9), cs = body.map(w => w.y + w.h / 2).sort((a, b) => a - b), ref = cs.length ? cs[Math.floor(cs.length / 2)] : null;
      let t = '';
      for (const w of L.words) {
        let s = w.t;
        if (w.h < 7.9 && w.h > 3 && ref !== null) {
          const c = w.y + w.h / 2, pos = c < ref - 1 ? SUP : c > ref + 1 ? SUB : null;
          if (pos) { const conv = [...s].map(ch => pos[ch]); if (conv.every(Boolean)) s = conv.join(''); else unmappedSmall.push(`${s} (${pos === SUP ? 'raised' : 'lowered'})`); }
        }
        t += (t && w.h >= 7.9 ? ' ' : '') + s;
      }
      L.text = t.replace(/([₀-₉⁰-⁹]) (?=-[a-z])/g, '$1'); // "α₁ -antitrypsin": the page sets the hyphen tight against the subscript
      L.small = L.words.filter(w => w.h < 7.9 && w.h > 3).length > 0;
    }
    lines.sort((a, b) => a.y0 - b.y0);
    out.push(...lines);
  }
  return out;
}

const stream = [], captions = {}; // captions['Fig. 2.1'] = pdf page
pageChunks.forEach((chunk, idx) => {
  const p = idx + 1, body = [], fig = [];
  const re = /<word xMin="([\d.]+)" yMin="([\d.]+)" xMax="([\d.]+)" yMax="([\d.]+)">([^<]*)<\/word>/g;
  let m;
  while ((m = re.exec(chunk))) {
    const w = { x: +m[1], y: +m[2], h: +m[4] - +m[2], t: dec(m[5]).replace(/­/g, '') };
    if (w.x < 30 || w.x >= 395) continue;
    if (w.h > 11.5) continue;
    // symbol-font words (alpha, beta, x, <, >, mu, bullets...) are set 10.4 high, the same band as figure labels: they are body text
    const symbolFont = (w.h > 10.38 && w.h < 10.46) || w.t === '•';
    if (w.h > 9.1 && w.h < 10.95 && !symbolFont) fig.push(w); else body.push(w);
  }
  for (const L of makeLines(fig)) {
    if (process.env.DROPPED && !/^(Figure|Fig\.|Table)\s/.test(L.text)) console.log(`DROPPED p${p} h${L.h.toFixed(1)} | ${L.text}`);
    const c =L.text.match(/^(Figure|Fig\.|Table)\s+(\d+\.\d+[a-z]?)/);
    if (c) { const lab = (c[1] === 'Table' ? 'Table ' : 'Fig. ') + c[2].replace(/[a-z]$/, ''); if (!(lab in captions)) captions[lab] = p; }
  }
  const lines = makeLines(body);
  const colLeft = [Math.min(...lines.filter(l => l.col === 0).map(l => l.x), 999), Math.min(...lines.filter(l => l.col === 1).map(l => l.x), 999)];
  for (const l of lines) stream.push({ p, text: l.text, indent: l.x - colLeft[l.col], h: l.h, nw: l.words.length, small: l.small });
});

if (process.env.DUMP) { const [a, b] = process.env.DUMP.split('-').map(Number); for (const l of stream) if (l.p >= a && l.p <= (b || a)) console.log(`p${l.p} i${l.indent.toFixed(0)} h${l.h.toFixed(1)} n${l.nw}${l.small ? 's' : ''} | ${l.text}`); process.exit(0); }
// ---- blocks
const blocks = [], labelled = [];
let mode = '', kind = '', cur = null;
for (const l of stream) {
  const hd = l.text.match(/^(Questions|Answers):\s*(Single Best Answer|Extended Matching)\s*$/);
  if (hd) { const newMode = hd[1] === 'Questions' ? 'q' : 'a'; kind = hd[2]; if (newMode !== mode) cur = null; mode = newMode; continue; }
  const mk = l.text.match(/^(?:Answer\s+)?(\d{1,2})\.(\d{1,2})(?:\.(\d{1,2}))?\.?$/);
  if (mode && mk && l.nw <= 2 && l.h >= 8.8 && l.h <= 9.05 && +mk[1] >= 1 && +mk[1] <= 31) {
    cur = { num: l.text.replace(/^Answer\s+/, '').replace(/\.$/, ''), mode, page: l.p, lines: [] }; blocks.push(cur); continue;
  }
  // marker line carrying a printed label after the number ("20.2 Testicular swelling"): label dropped from the stem, listed in the log
  const mt = l.text.match(/^(\d{1,2}\.\d{1,2}(?:\.\d{1,2})?)\s+([A-Z][a-z]+(?:\s[a-z]+)*)$/);
  if (mode === 'q' && mt && l.nw <= 4 && l.h >= 8.8 && l.h <= 9.05 && +mt[1].split('.')[0] >= 1 && +mt[1].split('.')[0] <= 31) {
    cur = { num: mt[1], mode, page: l.p, lines: [], label: mt[2] }; blocks.push(cur); labelled.push(mt[1] + ' (' + mt[2] + ')'); continue;
  }
  if (cur) cur.lines.push(l);
}

function join(lines) { // verbatim, whitespace collapsed, de-hyphenated only at a line end
  let t = '';
  for (const l of lines) {
    const s = l.text.trim(); if (!s) continue;
    if (t && /[A-Za-z]-$/.test(t) && /^[a-z]/.test(s)) t = t.slice(0, -1) + s; else t += (t ? ' ' : '') + s;
  }
  return t.replace(/\s+/g, ' ').trim();
}

const qmap = new Map(), amap = new Map(), issues = [];
for (const b of blocks) { const mp = b.mode === 'q' ? qmap : amap; if (mp.has(b.num)) issues.push(`dup marker ${b.mode} ${b.num} p${b.page}`); else mp.set(b.num, b); }

if (process.env.BLOCK) for (const n of process.env.BLOCK.split(',')) for (const b of blocks) if (b.num === n || b.num.startsWith(n + '.') && process.env.SUBS) { console.log(`=== ${b.mode} ${b.num} p${b.page}`); for (const l of b.lines) console.log(`  p${l.p} i${l.indent.toFixed(0)} h${l.h.toFixed(1)}${l.small ? 's' : ''} | ${l.text}`); }
function parseQ(b) {
  const L = b.lines; let i0 = -1;
  for (let i = 0; i < L.length; i++) if (/^A\.(\s|$|1)/.test(L[i].text) && L.slice(i + 1).some(x => /^B\.(\s|$)/.test(x.text))) { i0 = i; break; }
  if (i0 < 0) return { pre: L, opts: [], post: [] };
  const opts = [], post = []; let exp = 65, open = null, ended = false;
  for (let i = i0; i < L.length; i++) {
    const l = L[i], m = l.text.match(/^([A-Z])\.(?:\s*(.*))?$/); // "A.1 -antitrypsin": the alpha glyph is lost by the text layer, kept as extracted
    if (!ended && m && m[1].charCodeAt(0) === exp) { open = { letter: m[1], lines: [{ text: m[2] || '' }], page: l.p }; opts.push(open); exp++; }
    else if (!ended && open && l.indent >= 8 && !/^Hint\b/.test(l.text)) open.lines.push(l); // a printed "Hint" box (bold) after the options belongs to the stem tail
    else { ended = true; post.push(l); }
  }
  return { pre: L.slice(0, i0), opts: opts.map(o => ({ letter: o.letter, text: join(o.lines) })), post, small: L.some(l => l.small) };
}

function figRefs(text, page, where) {
  const got = new Set(), r = [];
  for (const m of text.matchAll(/\b(Fig(?:ure)?s?\.?|Table)\s+(\d+\.\d+)/g)) {
    const lab = (m[1] === 'Table' ? 'Table ' : 'Fig. ') + m[2];
    if (!got.has(lab)) { got.add(lab); r.push({ label: lab, page: captions[lab] || null, where }); }
  }
  return r;
}

const HAND = fs.existsSync(path.join(__dirname, 'hand-entries.json')) ? JSON.parse(fs.readFileSync(path.join(__dirname, 'hand-entries.json'), 'utf8')) : {};
const rows = [], flags = { handHead: [], superscript: [], tail: [], figNoPage: [], keyText: [], keyExc: [], figOnly: [] };
// sub-items whose number is printed only inside a figure (so absent from the text stream) but whose answer block exists
for (const [num, ab] of amap) {
  const bits = num.split('.');
  if (bits.length === 3 && !qmap.has(num) && qmap.has(bits.slice(0, 2).join('.'))) { qmap.set(num, { num, mode: 'q', page: qmap.get(bits.slice(0, 2).join('.')).page, lines: [] }); flags.figOnly.push(num); }
}
for (const [num, qb] of qmap) {
  const bits = num.split('.'), ch = +bits[0];
  const sub = bits.length === 3;
  if (!sub && [...qmap.keys()].some(k => k.startsWith(num + '.'))) continue; // set head
  const ab = amap.get(num);
  const head = sub ? qmap.get(bits.slice(0, 2).join('.')) : qb;
  if (!head) { issues.push(`${num} set head missing`); continue; }
  if (!ab) { issues.push(`${num} answer block missing`); continue; }
  const ph = parseQ(head);
  const ho = HAND['head:' + head.num]; // hand-entered set head / stem: { lead?, options?: [texts], reason }
  if (ho) { if (ho.options) ph.opts = ho.options.map((t, i) => ({ letter: String.fromCharCode(65 + i), text: t })); if (ho.lead) { ph.pre = [{ text: ho.lead }]; ph.post = []; } flags.handHead.push(head.num + ' (' + ho.reason + ')'); }
  if (ph.opts.length < 2) { issues.push(`${num} options not parsed`); continue; }
  let stem, small = ph.small;
  if (sub) {
    const lead = join([...ph.pre, ...ph.post]); const sc = join(qb.lines);
    stem = (lead + ' ' + sc).trim(); small = small || qb.lines.some(l => l.small);
  } else {
    if (ph.post.length) { flags.tail.push(num); }
    stem = join([...ph.pre, ...ph.post]);
  }
  // key
  let key = null, cnt = 0;
  if (sub) {
    const m = ab.lines.length && ab.lines[0].text.match(/^([A-Z])[.:]\s*(.*)$/);
    if (m) { key = m[1]; cnt = 1; if (join([{ text: m[2] }]) !== ph.opts[key.charCodeAt(0) - 65]?.text) flags.keyText.push(num); }
  } else {
    let curL = null, exp = 65, bold = [];
    for (const l of ab.lines) {
      const m = l.text.match(/^([A-Z])\.(?:\s|$)/);
      if (m && m[1].charCodeAt(0) >= exp) { curL = m[1]; exp = m[1].charCodeAt(0) + 1; if (l.h >= 8.75) bold.push(curL); }
      if (/^Correct\b/.test(l.text)) { key = curL; cnt++; if (!/^Correct\./.test(l.text)) flags.keyExc.push(num + ' (printed "Correct" without full stop)'); }
    }
    // text layer lost the word "Correct." but the right option's heading is set bold (height 8.8): key read from that
    if (cnt === 0 && bold.length === 1) { key = bold[0]; cnt = 1; flags.keyExc.push(num + ' ("Correct." absent from text layer; key from the one bold option heading)'); }
  }
  if (cnt !== 1 || !key) { issues.push(`${num} key (Correct. count ${cnt})`); continue; }
  const idx = key.charCodeAt(0) - 65;
  if (idx >= ph.opts.length) { issues.push(`${num} key letter ${key} beyond options`); continue; }
  const expl = join(ab.lines);
  const fig = [...figRefs(join(head.lines), qb.page, 'question'), ...(sub ? figRefs(join(qb.lines), qb.page, 'question') : []), ...figRefs(expl, ab.page, 'answer')];
  const seen = new Set(), figs = fig.filter(f => { const k = f.label + f.where; if (seen.has(k)) return false; seen.add(k); return true; });
  for (const f of figs) if (f.page === null) flags.figNoPage.push(num + ' ' + f.label);
  if (small || ab.lines.some(l => l.small)) flags.superscript.push(num);
  rows.push({ id: 'pedsa-b' + bits.join('-'), src: 'book', num, kind: sub ? 'emq' : 'sba', bookChapter: ch, bookChapterTitle: titles[ch], page: qb.page, ansPage: ab.page, stem, options: ph.opts.map(o => o.text), answer: idx, keyLetter: key, explanation: expl, figs });
}

// ---- hand repairs
const hp = path.join(__dirname, 'hand-entries.json');
if (fs.existsSync(hp)) {
  const hand = JSON.parse(fs.readFileSync(hp, 'utf8'));
  for (const [id, h] of Object.entries(hand)) { if (id.startsWith("head:")) continue;
    let r = rows.find(x => x.id === id);
    if (!r) { r = { id, src: 'book', figs: [] }; rows.push(r); }
    for (const k of Object.keys(h)) if (k !== 'reason') r[k] = h[k];
    if (r.answer !== undefined && r.keyLetter === undefined) r.keyLetter = String.fromCharCode(65 + r.answer);
    const bits = id.replace('pedsa-b', '').split('-'); r.num = bits.join('.'); r.kind = bits.length === 3 ? 'emq' : 'sba'; r.bookChapter = +bits[0]; r.bookChapterTitle = titles[+bits[0]];
    const i = issues.findIndex(s => s.startsWith(r.num + ' ')); if (i >= 0) issues.splice(i, 1);
  }
}
const nk = s => s.split('-').slice(1).map(Number); // pedsa-b14-3
rows.sort((x, y) => { const a = x.num.split('.').map(Number), b = y.num.split('.').map(Number); for (let i = 0; i < 3; i++) { const d = (a[i] || 0) - (b[i] || 0); if (d) return d; } return 0; });
fs.writeFileSync(path.join(root, 'sa-book.array.js'), 'var SA_BOOK = [\n' + rows.map(x => '  ' + JSON.stringify(x)).join(',\n') + '\n];\n', 'utf8');
fs.writeFileSync(path.join(__dirname, 'parse-book.log'), `items ${rows.length}\nunresolved ${issues.length}\n${issues.join('\n')}\n--- flags\nsuperscript/small-height text (${flags.superscript.length}): ${flags.superscript.join(' ')}\ntrailing lines after options, joined into stem (${flags.tail.length}): ${flags.tail.join(' ')}\nfigure label with no caption page (${flags.figNoPage.length}): ${flags.figNoPage.join(' ; ')}\nEMQ printed answer text differs from list option (${flags.keyText.length}): ${flags.keyText.join(' ')}\nhand-entered heads (${flags.handHead.length}): ${flags.handHead.join(' ; ')}\nkey exceptions (${flags.keyExc.length}): ${flags.keyExc.join(' ; ')}\nfigure-only sub-items, scenario is a figure (${flags.figOnly.length}): ${flags.figOnly.join(' ')}\nsmall-height words not convertible to Unicode super/subscripts, kept as extracted (${unmappedSmall.length}): ${[...new Set(unmappedSmall)].join(' ; ')}\nnumber line carries a printed label, label left out of stem (${labelled.length}): ${labelled.join(' ; ')}\n`, 'utf8');
console.log(`wrote ${rows.length}; ${issues.length} unresolved; blocks q ${qmap.size} a ${amap.size}`);
