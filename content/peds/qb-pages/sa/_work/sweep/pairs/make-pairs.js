// make-pairs.js - classify book-vs-live duplicate candidates. Folds NOTHING, edits no data.
// usage: node make-pairs.js [--book <array.js>] [--var SA_BOOK] [--out <dir>] [--propose]
//   --propose  also write review-proposals.txt (compact dump the human judge reads)
// Judge verdicts live in judge.json (key "bookId|otherId" -> {cls, why}); the script applies them.
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.resolve(__dirname, '..', '..', '..', '..', '..', '..', '..');
const args = process.argv.slice(2);
const arg = (n, d) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : d; };
const BOOKFILE = arg('--book', path.join(ROOT, 'content/peds/qb-pages/sa/sa-book.array.js'));
const BOOKVAR = arg('--var', 'SA_BOOK');
const OUT = arg('--out', __dirname);
const PROPOSE = args.includes('--propose');
const SWEEP = path.join(ROOT, 'content/peds/qb-pages/sa/_work/sweep');

function load(file, name) {
  const code = fs.readFileSync(file, 'utf8') + '\n;this.OUT=' + name + ';';
  const ctx = vm.createContext({});
  vm.runInContext(code, ctx);
  return ctx.OUT;
}
const FILES = [
  { key: 'peds', file: 'app/data/questions.peds.js', v: 'Q_PEDS', cand: 'book-vs-peds.txt' },
  { key: 'peds.ep', file: 'app/data/questions.peds.ep.js', v: 'Q_PEDS_EP', cand: 'book-vs-peds.ep.txt' },
  { key: 'peds.ep2', file: 'app/data/questions.peds.ep2.js', v: 'Q_PEDS_EP2', cand: 'book-vs-peds.ep2.txt' },
  { key: 'sa-p1', file: 'content/peds/qb-pages/sa/sa-p1.array.js', v: 'SA_P1', cand: 'book-vs-p1.txt' },
  { key: 'sa-p2', file: 'content/peds/qb-pages/sa/sa-p2.array.js', v: 'SA_P2', cand: 'book-vs-p2.txt' },
];

const DEACC = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '');
const BR = [[/tumour/g, 'tumor'], [/oesophag/g, 'esophag'], [/anaemi/g, 'anemi'], [/odour/g, 'odor'], [/foetus/g, 'fetus'],
  [/foetal/g, 'fetal'], [/paediatr/g, 'pediatr'], [/haem/g, 'hem'], [/oedema/g, 'edema'], [/diarrhoea/g, 'diarrhea'],
  [/behaviour/g, 'behavior'], [/colour/g, 'color'], [/centre/g, 'center'], [/litre/g, 'liter'], [/ae/g, 'e']];
function norm(s) {
  s = DEACC(String(s == null ? '' : s)).toLowerCase();
  for (const [a, b] of BR) s = s.replace(a, b);
  return s.replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
}
const STOP = new Set(['the', 'a', 'an', 'of', 'in', 'is', 'are', 'to', 'and', 'or', 'with', 'for', 'on', 'at', 'by', 'as', 'be', 'this', 'that', 'which', 'what', 'following', 'one', 'select', 'answer', 'only', 'most', 'likely']);
function stemNorm(s) {
  return norm(s).replace(/select one answer only/g, '').replace(/select (the )?(one )?best (answer|option)/g, '');
}
function toks(s) { return stemNorm(s).split(' ').filter(w => w && !STOP.has(w)); }
function dice(a, b) {
  const A = toks(a), B = toks(b);
  if (!A.length || !B.length) return 0;
  const m = new Map(); for (const w of A) m.set(w, (m.get(w) || 0) + 1);
  let hit = 0; for (const w of B) { const c = m.get(w); if (c > 0) { hit++; m.set(w, c - 1); } }
  return 2 * hit / (A.length + B.length);
}
function lev(a, b) {
  const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    prev = cur;
  }
  return prev[n];
}
function optEq(x, y) {
  const a = norm(x).replace(/ /g, ''), b = norm(y).replace(/ /g, '');
  if (!a && !b) return true; if (!a || !b) return false;
  if (a === b) return true;
  return lev(a, b) / Math.max(a.length, b.length) <= 0.15;
}
const LET = 'ABCDEFGHIJ';
function keyIdx(q) {
  const a = q.answer;
  if (typeof a === 'number') return a;
  if (Array.isArray(a)) return a[0];
  if (typeof a === 'string' && /^[A-J]$/.test(a)) return LET.indexOf(a);
  return -1;
}
function keyText(q) { const i = keyIdx(q); return (q.options && i >= 0 && q.options[i] != null) ? String(q.options[i]) : ''; }
function expLen(q) { return String(q.explanation || '').length; }

function analyse(b, o) {
  const bo = b.options || [], oo = o.options || [];
  const stemDice = dice(b.stem, o.stem);
  const bk = keyText(b), ok = keyText(o);
  const keyTextSame = !!bk && !!ok && optEq(bk, ok);
  const lost = bo.filter(x => !oo.some(y => optEq(x, y)));          // book options the other lacks
  const lostFromBook = oo.filter(x => !bo.some(y => optEq(x, y)));  // other options the book lacks
  const shared = bo.length - lost.length;
  const menuOverlap = shared / Math.max(1, Math.min(bo.length, oo.length));
  const keyedOptionInOther = !!bk && oo.some(y => optEq(bk, y));
  const bi = keyIdx(b), oi = keyIdx(o);
  let fuller;
  if (bo.length !== oo.length) fuller = bo.length > oo.length ? 'book' : 'other';
  else fuller = (String(b.stem).length + expLen(b)) >= (String(o.stem).length + expLen(o)) ? 'book' : 'other';
  return { stemDice: Math.round(stemDice * 100) / 100, keyTextSame, bookOpts: bo.length, otherOpts: oo.length,
    lostOptions: lost, otherExtraOptions: lostFromBook, keyedOptionInOther, keyLetterMoved: bi !== oi, menuOverlap: Math.round(menuOverlap * 100) / 100, fuller };
}
const SIGN = new Set(['not','no','non','except','least','never','only','all','before','after','without','left','right','increased','decreased','increase','decrease','high','higher','low','lower','first','second','third','unlikely','less','more','greater','earlier','later','early','late','both','neither','none','rare','common','commonest','best','worst','false','true','incorrect','correct','exclude','excluded','mother','father','boy','girl','male','female']);
function discr(x, y) {
  const A = stemNorm(x).split(' '), B = stemNorm(y).split(' ');
  const sub = (P, Q) => { const m = new Map(); for (const w of Q) m.set(w, (m.get(w) || 0) + 1); const r = []; for (const w of P) { const c = m.get(w); if (c > 0) m.set(w, c - 1); else r.push(w); } return r; };
  return sub(A, B).concat(sub(B, A)).filter(w => /d/.test(w) || SIGN.has(w));
}
function contain(x, y) { // share of x's content tokens found in y
  const A = toks(x), B = new Map(); for (const w of toks(y)) B.set(w, (B.get(w) || 0) + 1);
  if (!A.length) return 0; let h = 0;
  for (const w of A) { const c = B.get(w); if (c > 0) { h++; B.set(w, c - 1); } }
  return Math.round(100 * h / A.length) / 100;
}
function propose(a) {
  if (a.stemDice >= 0.6 && a.keyTextSame && a.menuOverlap >= 0.6) return 'SAME';
  if (a.menuOverlap >= 0.8 && a.stemDice < 0.6) return 'MENU';
  if (a.stemDice < 0.45 && !a.keyTextSame) return 'DIFF';
  return 'UNSURE';
}

function run() {
  const book = load(BOOKFILE, BOOKVAR);
  const byId = {}; book.forEach(q => byId[q.id] = q);
  const judge = fs.existsSync(path.join(__dirname, 'judge.json')) ? JSON.parse(fs.readFileSync(path.join(__dirname, 'judge.json'), 'utf8')) : {};
  // confirmed-*.txt: first line "CLS<TAB>why", then one "bookId|otherId" per line (pairs a human read and accepted)
  for (const f of fs.readdirSync(__dirname).filter(n => /^confirmed-.*\.txt$/.test(n)).sort()) {
    const ls = fs.readFileSync(path.join(__dirname, f), 'utf8').split(/\r?\n/).filter(Boolean);
    const [cls, why] = ls[0].split('\t');
    for (const k of ls.slice(1)) if (!judge[k]) judge[k] = { cls, why: why + ' [' + f + ']' };
  }
  const rows = [], seen = new Set(), prop = [];
  const arrays = {};
  for (const F of FILES) {
    const arr = load(path.join(ROOT, F.file), F.v);
    arrays[F.key] = arr;
    const oById = {}; arr.forEach(q => { oById[q.id] = q; });
    // candidates: (1) the sweep's own lines (book id first, cross-corpus only), (2) our own scan over all pairs
    const cand = new Set();
    const cf = path.join(SWEEP, F.cand);
    if (fs.existsSync(cf) && BOOKFILE.endsWith('sa-book.array.js')) {
      for (const line of fs.readFileSync(cf, 'utf8').split(/\r?\n/)) {
        const m = line.match(/(\S+)\s+(\S+)\s+(?:dice [\d.]+|identical option menu|stem identical|reworded|.*)$/);
        const ids = line.match(/\b[a-z0-9]+(?:-[a-z0-9]+)+\b/g) || [];
        if (/within-batch/.test(line)) continue;
        const bid = ids.find(i => byId[i]), oid = ids.find(i => oById[i] && !byId[i]);
        if (bid && oid) cand.add(bid + '|' + oid);
      }
    }
    for (const b of book) for (const o of arr) {
      if (b === o) continue;
      const d = dice(b.stem, o.stem);
      const bk = keyText(b), ok = keyText(o);
      if (d >= 0.5 || (d >= 0.35 && bk && ok && optEq(bk, ok))) cand.add(b.id + '|' + o.id);
    }
    for (const k of cand) {
      if (seen.has(F.key + '#' + k)) continue; seen.add(F.key + '#' + k);
      const [bid, oid] = k.split('|');
      const b = byId[bid], o = oById[oid]; if (!b || !o) continue;
      const a = analyse(b, o);
      const p = propose(a);
      let j = judge[k];
      if (!j && p === 'SAME' && a.stemDice >= 0.9) { const ds = discr(b.stem, o.stem); if (!ds.length) j = { cls: 'SAME', why: 'stems differ only in filler words (diff tokens read: none carry a digit, negation, sign, drug or direction); keyed text identical' + (a.keyLetterMoved ? '; key letter moves' : '') + (a.lostOptions.length ? '; other lacks ' + a.lostOptions.length + ' option(s)' : ''), rule: true }; }
      if (!j && p === 'MENU' && !a.keyTextSame) j = { cls: 'MENU', why: 'same option menu (' + Math.round(a.menuOverlap*100) + '% overlap) but stem dice ' + a.stemDice + ' and the keyed answer text differs: different question on a shared list; paired, not folded', rule: true };
      const cls = j ? j.cls : p;
      const why = j ? j.why : ('script ' + p + ' (unjudged)');
      rows.push({ contO: contain(o.stem, b.stem), contB: contain(b.stem, o.stem), judged_by_rule: !!(j && j.rule), book: bid, other: oid, otherFile: F.key, cls, stemDice: a.stemDice, keyTextSame: a.keyTextSame,
        bookOpts: a.bookOpts, otherOpts: a.otherOpts, lostOptions: a.lostOptions, keyedOptionInOther: a.keyedOptionInOther,
        keyLetterMoved: a.keyLetterMoved, fuller: a.fuller, why, judged: !!j, proposed: p, menuOverlap: a.menuOverlap });
      if (PROPOSE && !j && p !== 'DIFF') {
        prop.push({ k, p, a, F: F.key, b, o });
      }
    }
  }
  rows.sort((x, y) => x.book < y.book ? -1 : x.book > y.book ? 1 : (x.otherFile + x.other < y.otherFile + y.other ? -1 : 1));
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, 'book-pairs.json'), JSON.stringify(rows, null, 1));
  if (PROPOSE) {
    prop.sort((x, y) => x.k < y.k ? -1 : 1);
    const L = prop.map(r => {
      const kt = s => keyText(s).slice(0, 60);
      return [r.p + ' ' + r.F + ' ' + r.k + ' d=' + r.a.stemDice + ' kt=' + (r.a.keyTextSame ? 'Y' : 'N') + ' menu=' + r.a.menuOverlap + ' n=' + r.a.bookOpts + '/' + r.a.otherOpts,
        '  B: ' + String(r.b.stem).slice(0, 170) + ' => ' + kt(r.b),
        '  O: ' + String(r.o.stem).slice(0, 170) + ' => ' + kt(r.o)].join('\n');
    });
    fs.writeFileSync(path.join(OUT, 'review-proposals.txt'), L.join('\n'));
    // compact diff view: tokens present on one side only, so the discriminating token is visible
    const sub = (A, B) => { const m = new Map(); for (const w of B) m.set(w, (m.get(w) || 0) + 1); const r = []; for (const w of A) { const c = m.get(w); if (c > 0) m.set(w, c - 1); else r.push(w); } return r; };
    const DL = prop.map(r => {
      const A = stemNorm(r.b.stem).split(' '), B = stemNorm(r.o.stem).split(' ');
      const only = (X, Y) => sub(X, Y).join(' ').slice(0, 90);
      const tag = r.p === 'SAME' && r.a.stemDice < 0.8 ? ' LOWD' : '';
      return r.p[0] + tag + ' ' + r.F + ' ' + r.k.replace('|', ' ') + ' d' + r.a.stemDice + ' ' + (r.a.keyTextSame ? 'K' : 'k') + (r.a.keyLetterMoved ? 'm' : '') + ' n' + r.a.bookOpts + '/' + r.a.otherOpts +
        ' cO' + contain(r.o.stem, r.b.stem) + ' cB' + contain(r.b.stem, r.o.stem) + ' X[' + discr(r.b.stem, r.o.stem).join(',') + ']' + ' | B-only: ' + only(A, B) + ' | O-only: ' + only(B, A) + ' | key: ' + keyText(r.b).slice(0, 40) + (r.a.keyTextSame ? '' : ' // ' + keyText(r.o).slice(0, 40));
    });
    fs.writeFileSync(path.join(OUT, 'review-diffs.txt'), DL.join('\n'));
  }
  // markdown
  if (BOOKFILE.endsWith('sa-book.array.js')) {
    const md = ['# Book duplicate pairs - SAME and UNSURE', '', 'Classification only. Nothing folded. Stems cut at 220 chars.', ''];
    const grp = {};
    rows.filter(r => r.cls === 'SAME' || r.cls === 'UNSURE').forEach(r => { const c = byId[r.book].bookChapter + ' ' + byId[r.book].bookChapterTitle; (grp[c] = grp[c] || []).push(r); });
    for (const c of Object.keys(grp).sort((a, b) => parseInt(a) - parseInt(b))) {
      md.push('## Book chapter ' + c, '');
      for (const r of grp[c]) {
        const b = byId[r.book]; const o = arrays[r.otherFile].find(q => q.id === r.other);
        md.push('### ' + r.cls + ' `' + r.book + '` vs `' + r.other + '` (' + r.otherFile + ')',
          '- book: ' + String(b.stem).slice(0, 220) + ' | key ' + LET[keyIdx(b)] + ': ' + keyText(b) + ' | ' + r.bookOpts + ' opts',
          '- other: ' + String(o.stem).slice(0, 220) + ' | key ' + LET[keyIdx(o)] + ': ' + keyText(o) + ' | ' + r.otherOpts + ' opts',
          '- dice ' + r.stemDice + ', key text same ' + r.keyTextSame + ', key letter moved ' + r.keyLetterMoved + ', fuller ' + r.fuller +
          (r.lostOptions.length ? ', other lacks: ' + r.lostOptions.join('; ') + ' (keyed option kept: ' + r.keyedOptionInOther + ')' : ''),
          '- why: ' + r.why, '');
      }
    }
    fs.writeFileSync(path.join(OUT, 'book-pairs.md'), md.join('\n'));
  }
  // checks
  const dup = new Set(); let dups = 0;
  for (const r of rows) { const k = r.book + '|' + r.otherFile + '|' + r.other; if (dup.has(k)) dups++; dup.add(k); }
  let unresolved = 0;
  for (const r of rows) { if (!byId[r.book]) unresolved++; if (!arrays[r.otherFile].some(q => q.id === r.other)) unresolved++; }
  const counts = {};
  for (const r of rows) { const k = r.otherFile + ' ' + r.cls; counts[k] = (counts[k] || 0) + 1; }
  console.log('rows', rows.length, 'unresolved ids', unresolved, 'duplicate pairs', dups, 'unjudged', rows.filter(r => !r.judged).length);
  console.log(JSON.stringify(counts, null, 1));
  const sameB = new Set(rows.filter(r => r.cls === 'SAME' && ['peds', 'peds.ep', 'peds.ep2'].includes(r.otherFile)).map(r => r.book));
  const sameW = new Set(rows.filter(r => r.cls === 'SAME' && ['sa-p1', 'sa-p2'].includes(r.otherFile)).map(r => r.book));
  console.log('distinct book ids with SAME live partner', sameB.size, '| with SAME written-set partner', sameW.size);
  if (unresolved || dups) process.exitCode = 1;
}
run();
