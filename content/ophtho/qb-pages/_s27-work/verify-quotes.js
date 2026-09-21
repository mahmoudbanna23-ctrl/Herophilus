// Machine layer: every quoted string + (Lnn, slide/page N) cite in the s27 parts must exist in the cited lecture, on the cited slide/page.
const fs = require('fs');
const LEC = 'D:/claude os/Medical school/Herophilus/content/ophtho/lectures/';
const PARTS = 'D:/claude os/Medical school/Herophilus/content/ophtho/qb-pages/_s27-work/draft-parts/';
const norm = s => s.toLowerCase().replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"').replace(/[\u2013\u2014]/g, '-').replace(/\u2192/g, '->').replace(/[\u2022\u25cf\u25aa]/g, ' ').replace(/[^a-z0-9%<>=+.\/'-]+/g, ' ').replace(/\s+/g, ' ').trim();
const files = fs.readdirSync(LEC).filter(f => f.endsWith('.txt'));
const byKey = {}; files.forEach(f => byKey[f.split(')')[0]] = f);
const cache = {};
function load(key) {
  if (cache[key]) return cache[key];
  const f = byKey[key]; if (!f) return (cache[key] = null);
  const raw = fs.readFileSync(LEC + f, 'utf8');
  const segs = {}; // slide/page number -> normalised text
  const hasSlide = /SLIDE\s+\d+/i.test(raw);
  let all = norm(raw);
  if (hasSlide) {
    const parts = raw.split(/^.*?SLIDE\s+(\d+)\b.*$/im); // [pre, n, text, n, text...]
    for (let i = 1; i < parts.length; i += 2) segs[+parts[i]] = (segs[+parts[i]] || '') + ' ' + norm(parts[i + 1] || '');
  }
  const pages = {}; raw.split('\f').forEach((t, i) => pages[i + 1] = norm(t));
  return (cache[key] = { f, all, segs, pages, hasSlide });
}
const out = []; let nq = 0, nbad = 0, ncite = 0;
for (const pf of fs.readdirSync(PARTS).sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)))) {
  const p = JSON.parse(fs.readFileSync(PARTS + pf, 'utf8')); const e = p.expansion; const probs = [];
  const cites = [...e.matchAll(/\((L[\d.,]+),\s*(?:slide|page)s?\s+(\d+)[^)]*\)/g)].map(m => ({ i: m.index, key: m[1], n: +m[2], slide: /slide/.test(m[0]) }));
  ncite += cites.length;
  for (const c of cites) {
    const L = load(c.key);
    if (!L) { probs.push('cite ' + c.key + ' no such lecture'); continue; }
    const container = c.slide && L.hasSlide ? L.segs : L.pages;
    if (!container[c.n]) probs.push('cite ' + c.key + ' #' + c.n + ' does not exist' + (c.slide && !L.hasSlide ? ' (file has no SLIDE headers)' : ''));
  }
  for (const m of e.matchAll(/["\u201c]([^"\u201c\u201d]{15,400})["\u201d]/g)) {
    nq++;
    const next = cites.find(c => c.i >= m.index && c.i - m.index < 500);
    const pieces = m[1].split(/\u2026|\.\.\.| \/ /).map(norm).filter(x => x.length >= 12);
    if (!pieces.length) continue;
    const key = next ? next.key : (p.lecture.split(')')[0]);
    const L = load(key); if (!L) continue;
    for (const piece of pieces) {
      if (!L.all.includes(piece)) {
        // search other lectures
        const other = Object.keys(byKey).filter(k => load(k).all.includes(piece));
        probs.push('QUOTE not in ' + key + (other.length ? ' but in ' + other.join('|') : ' or any lecture') + ': "' + m[1].slice(0, 70) + '"'); nbad++;
      } else if (next) {
        const container = next.slide && L.hasSlide ? L.segs : L.pages;
        if (container[next.n] && !container[next.n].includes(piece)) {
          const where = Object.keys(container).filter(k => container[k].includes(piece)).slice(0, 4);
          probs.push('QUOTE on wrong ' + (next.slide ? 'slide' : 'page') + ' (cited ' + next.n + ', found ' + (where.join(',') || '?') + '): "' + m[1].slice(0, 60) + '"'); nbad++;
        }
      }
    }
  }
  if (probs.length) out.push('n' + p.n + ' [' + p.lecture.split(')')[0] + '] ' + probs.join(' || '));
}
console.log(out.join('\n'));
console.log('--- cites', ncite, 'quotes', nq, 'bad', nbad, 'rows with problems', out.length, 'of', fs.readdirSync(PARTS).length);
