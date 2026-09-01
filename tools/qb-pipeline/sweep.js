// Six-stage duplicate sweep, A-F. REBUILT 2026-09-02 (see lib.js).
//
//   node tools/qb-pipeline/sweep.js <draft.js|array.js> <corpus.js>
//
// The sweep RANKS candidates. It never folds anything and it never decides.
// Every hit is hand-decided against the two page images, because the six fold
// shapes seen so far are not all machine-separable:
//
//   1 exact
//   2 respelled
//   3 REORDERED  - which MOVES the key letter
//   4 boxed second printing - which moves the explanation marker
//   5 cross-CHAPTER exact
//   6 reworded stem + DROPPED FILLER option
//       -> check WHICH option was dropped or changed before folding
//
// And the trap that is not a fold at all:
//   a SHARED OPTION MENU pairs questions. Name the discriminating token, or
//   you have matched a template rather than a duplicate.

'use strict';
const path = require('path');
const L = require('./lib.js');

const [draftPath, corpusPath] = process.argv.slice(2);
if (!draftPath || !corpusPath) {
  console.error('usage: sweep.js <draft|array> <corpus>');
  process.exit(2);
}

const isDraft = /\.draft\.js$/.test(draftPath);
const incoming = isDraft ? L.loadDraft(draftPath) : L.loadStaging(draftPath);
const corpus = L.loadCorpus(corpusPath);

console.log('incoming ' + incoming.length + '  from ' + path.basename(draftPath));
console.log('corpus   ' + corpus.length + '  from ' + path.basename(corpusPath));
console.log('');

const NEAR = 0.72;   // stem-overlap threshold for stages D and F
const rows = [];

function push(stage, q, hit, why) {
  rows.push({ stage, id: q.id || ('#' + (q.num || q.n || '?')), hit: hit.id || '?', why });
}

// --- A/B/C/E/F against the shipped corpus -----------------------------------
incoming.forEach(q => {
  const qn = L.norm(L.stemOf(q));
  const ql = L.loose(L.stemOf(q));
  const qMenu = L.menuKey(q);
  const qOrder = L.orderKey(q);

  corpus.forEach(c => {
    const cn = L.norm(L.stemOf(c));
    if (!qn || !cn) return;

    if (qn === cn) {
      const sameOrder = qOrder === L.orderKey(c);
      const sameChapter = q.chapter && c.chapter && q.chapter === c.chapter;
      if (sameOrder) {
        push(sameChapter ? 'A exact' : 'E cross-chapter exact', q, c,
             'stem identical, options in the same order');
      } else if (qMenu === L.menuKey(c)) {
        push('C REORDERED', q, c,
             'stem identical, SAME options in a DIFFERENT order — THE KEY LETTER MOVES');
      } else {
        push('A exact stem', q, c, 'stem identical, option sets differ — read both pages');
      }
      return;
    }

    if (ql && ql === L.loose(L.stemOf(c))) {
      push('B respelled', q, c, 'stems differ only by spelling/OCR');
      return;
    }

    const d = L.dice(L.stemOf(q), L.stemOf(c));
    if (d >= NEAR) {
      const nq = (q.options || q.opts || []).length;
      const nc = (c.options || c.opts || []).length;
      push(nq !== nc ? 'F reworded + option dropped' : 'D near stem', q, c,
           'dice ' + d.toFixed(2) + (nq !== nc ? '  options ' + nq + ' vs ' + nc : ''));
      return;
    }

    if (qMenu && qMenu === L.menuKey(c) && d < NEAR) {
      push('! shared menu (PAIR, not a fold)', q, c,
           'identical option menu, different stem — name the discriminating token');
    }
  });
});

// --- within the incoming batch ----------------------------------------------
for (let i = 0; i < incoming.length; i++) {
  for (let j = i + 1; j < incoming.length; j++) {
    const d = L.dice(L.stemOf(incoming[i]), L.stemOf(incoming[j]));
    if (d >= NEAR) {
      rows.push({ stage: 'G within-batch', id: incoming[i].id || ('#' + incoming[i].num),
                  hit: incoming[j].id || ('#' + incoming[j].num), why: 'dice ' + d.toFixed(2) });
    }
  }
}

if (!rows.length) {
  console.log('ZERO candidates at dice >= ' + NEAR + '.');
  console.log('Say WHY the zero is a zero: ' + incoming.length + ' incoming x ' +
              corpus.length + ' shipped = ' + (incoming.length * corpus.length) +
              ' pairs compared on normalised stem, loose stem, option menu and');
  console.log('printed option order. Nothing reached the threshold.');
} else {
  rows.sort((a, b) => a.stage.localeCompare(b.stage));
  rows.forEach(r => console.log(r.stage.padEnd(30) + r.id.padEnd(18) + r.hit.padEnd(20) + r.why));
  console.log('\n' + rows.length + ' candidates. NONE is a decision. Read both pages.');
}
