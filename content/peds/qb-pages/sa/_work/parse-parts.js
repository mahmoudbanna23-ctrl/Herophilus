const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
// a line wrapped right after a hyphen/dash that touches a word ("non-\nprogressive") joins with no space
const collapse = value => value.replace(/(\S[-‐‑–])[ \t]*\n[ \t]*(?=\S)/g, '$1').replace(/\s+/g, ' ').trim();
const output = (name, values) => `var ${name} = [\n${values.map(v => `  ${JSON.stringify(v)}`).join(',\n')}\n];\n`;

// The pages print no per-set lead-in sentence for an EMQ set, only a title line ("EMQ 1 . The vomiting infant").
// 'title' = prepend that title to each numbered stem (kept from the first run); 'none' = numbered stem alone.
// Coordinator ruling: the title now lives in its own field `setTitle`; the stem is the numbered scenario only.
const EMQ_PREFIX = 'none';

// Anything that ends an item's printed text: a block heading, the "Then do Lissauer" pointer, the mixed-mock
// heading, an EMQ set heading, the end-of-file "AFTER THE BANK" trailer. Anchored per line, so no `$` + m trap.
const STOP = /^[ \t]*(?:Block \d+ ·|Then do Lissauer|Mixed mock|EMQ \d+ ·|⏱)/m;
function cutAtStop(s) {
  const m = s.match(STOP);
  return m ? s.slice(0, m.index) : s;
}

function readPart(part) {
  const dir = path.join(root, part), pages = [];
  let text = '';
  for (const file of fs.readdirSync(dir).filter(f => /^p\d{4}\.txt$/.test(f)).sort()) {
    pages.push({ pos: text.length, page: Number(file.slice(1, 5)) });
    text += fs.readFileSync(path.join(dir, file), 'utf8').replace(/\r/g, '').replace(/\f/g, '') + '\n';
  }
  return { text, pages };
}
function pageAt(pages, pos) {
  for (let i = pages.length - 1; i >= 0; i--) if (pos >= pages[i].pos) return pages[i].page;
  return pages[0].page;
}
function idFor(part, num, mock) {
  const prefix = `pedsa${part.slice(1)}`;
  if (mock) return `${prefix}-m-${num.replace(/^M/i, '').split('.').pop()}`;
  const [block, question] = num.split('.'); return `${prefix}-${block}-${question}`;
}
function sectionFinder(text) {
  const blocks = [...text.matchAll(/^[ \t]*(Block \d+ .*?)[ \t]*$/gm)].map(m => ({ pos: m.index, text: collapse(m[1]) }));
  const mocks = [...text.matchAll(/^[ \t]*(Mixed mock.*)[ \t]*$/gmi)].map(m => ({ pos: m.index, text: collapse(m[1]) }));
  return pos => {
    const block = blocks.filter(m => m.pos <= pos).pop(), mock = mocks.filter(m => m.pos <= pos).pop();
    return mock && (!block || mock.pos > block.pos) ? mock.text : (block ? block.text : '');
  };
}
// Line scan: an option starts at a line "X. ..." whose letter is the next one in sequence; any other line
// after the first option is a wrapped continuation of the current option.
function splitSba(before) {
  const lines = before.split('\n'), stem = [], options = [];
  let seen = false;
  for (const line of lines) {
    const next = String.fromCharCode(65 + options.length);
    const m = line.match(/^[ \t]*([A-E])\.[ \t]*(.*)$/);
    if (m && m[1] === next) { options.push(m[2]); seen = true; }
    else if (seen) options[options.length - 1] += ' ' + line;
    else stem.push(line);
  }
  if (options.length !== 5) throw new Error(`expected 5 options, got ${options.length}`);
  return { stem: collapse(stem.join('\n')), options: options.map(collapse) };
}
// EMQ list: collapse, split on " . " that is followed by the next letter and a space; "group B" has no " . " before it.
function emqOptions(source) {
  const flat = collapse(source).replace(/^Options:\s*/, '');
  const parts = flat.split(/\s*·\s+(?=[A-J]\s)/);
  return parts.map((p, i) => {
    const letter = String.fromCharCode(65 + i), m = p.match(/^([A-J])\s+([\s\S]*)$/);
    if (!m || m[1] !== letter) throw new Error(`EMQ option ${i} is not letter ${letter}: ${p.slice(0, 30)}`);
    return m[2].trim();
  });
}
function parse(part) {
  const { text, pages } = readPart(part), sectionAt = sectionFinder(text), items = [];
  const headers = [...text.matchAll(/^[ \t]*((?:\d+\.\d+)|M\d+)[ \t]+·[ \t]+.+?[ \t]*$/gm)];
  for (let i = 0; i < headers.length; i++) {
    const header = headers[i], end = i + 1 < headers.length ? headers[i + 1].index : text.length;
    const chunk = cutAtStop(text.slice(header.index + header[0].length, end));
    const answer = chunk.match(/^[ \t]*Answer:[ \t]*([A-E])\.[ \t]*\n/m);
    if (!answer) throw new Error(`${part} ${header[1]} has no Answer line`);
    const before = chunk.slice(0, answer.index), tail = chunk.slice(answer.index + answer[0].length);
    const keyLetter = answer[1], mock = /^M/i.test(header[1]) || /^Mixed mock/i.test(sectionAt(header.index));
    const parts = splitSba(before);
    const numPos = header.index + header[0].indexOf(header[1]);
    items.push({ id: idFor(part, header[1], mock), src: part, num: header[1], kind: mock ? 'mock' : 'sba',
      block: sectionAt(header.index), page: pageAt(pages, numPos), stem: parts.stem,
      options: parts.options, answer: keyLetter.charCodeAt(0) - 65, keyLetter, explanation: collapse(tail) });
  }
  const emqs = [...text.matchAll(/^[ \t]*EMQ \d+[ \t]+·[ \t]+(.+?)[ \t]*$/gm)];
  for (let i = 0; i < emqs.length; i++) {
    const emq = emqs[i], end = i + 1 < emqs.length ? emqs[i + 1].index : text.length;
    const chunkStart = emq.index, body = text.slice(chunkStart + emq[0].length, end);
    const chunk = cutAtStop(body);
    const listed = chunk.match(/Options:\s*([\s\S]*?)(?=^[ \t]*\d+\.\d+[ \t]*$)/m);
    if (!listed) throw new Error(`${part} ${emq[0]} has no options`);
    const startRel = chunk.search(/^[ \t]*\d+\.\d+[ \t]*$/m), tail = chunk.slice(startRel);
    const stems = [...tail.matchAll(/^[ \t]*(\d+\.\d+)[ \t]*$/gm)], options = emqOptions(listed[1]);
    if (!stems.length) throw new Error(`${part} ${emq[0]} has no stems`);
    for (let j = 0; j < stems.length; j++) {
      const numbered = stems[j], question = tail.slice(numbered.index + numbered[0].length, j + 1 < stems.length ? stems[j + 1].index : tail.length);
      const answer = question.match(/^[ \t]*([A-J])[ \t]+—[ \t]+/m);
      if (!answer) throw new Error(`${part} ${numbered[1]} has no EMQ answer`);
      const keyLetter = answer[1];
      const own = collapse(question.slice(0, answer.index));
      const absolute = chunkStart + emq[0].length + startRel + numbered.index + numbered[0].indexOf(numbered[1]);
      items.push({ id: idFor(part, numbered[1], false), src: part, num: numbered[1], kind: 'emq', block: sectionAt(emq.index),
        setTitle: collapse(emq[1]), page: pageAt(pages, absolute), stem: EMQ_PREFIX === 'title' ? `${collapse(emq[1])} ${own}` : own,
        options, answer: keyLetter.charCodeAt(0) - 65, keyLetter, explanation: collapse(question.slice(answer.index)) });
    }
  }
  return items;
}
fs.writeFileSync(path.join(root, 'sa-p1.array.js'), output('SA_P1', parse('p1')));
fs.writeFileSync(path.join(root, 'sa-p2.array.js'), output('SA_P2', parse('p2')));
