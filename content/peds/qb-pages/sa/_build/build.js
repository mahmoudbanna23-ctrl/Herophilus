/* Builds the staged Self assessment output. Run from this directory. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.resolve(__dirname, '..');
const repo = path.resolve(root, '../../../..');
function loadArray(file) {
  const context = {};
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
  const array = Object.values(context).find(Array.isArray);
  if (!array) throw new Error(`No array in ${file}`);
  return array;
}
function readJson(relative) { return JSON.parse(fs.readFileSync(path.join(root, relative), 'utf8')); }
const book = loadArray('sa-book.array.js');
const p1 = loadArray('sa-p1.array.js');
const p2 = loadArray('sa-p2.array.js');
const chapters = readJson('sa-chapters.json');
const pairs = readJson('_work/sweep/pairs/book-pairs.json');
const rulings = readJson('_work/sweep/pairs/claude-rulings.json');
const picturesFile = readJson('_work/pics/pictures.json');
const moduleText = fs.readFileSync(path.join(repo, 'app/data/modules.js'), 'utf8');
const chapterNames = new Map([...moduleText.matchAll(/\['([^']+)'\s*,\s*'([^']+)'\]/g)].map(m => [m[1], m[2]]));
const rulingByPair = new Map(rulings.map(r => [`${r.book}\u0000${r.other}`, r]));
const finalPairs = pairs.map(pair => ({ ...pair, ...(rulingByPair.get(`${pair.book}\u0000${pair.other}`) || {}) }));
const folded = new Set(finalPairs.filter(pair => pair.cls === 'SAME').map(pair => pair.book));
if (folded.size !== 284) throw new Error(`Expected 284 folded book ids, got ${folded.size}`);
if (book.length - folded.size !== 168) throw new Error(`Expected 168 staying book ids, got ${book.length - folded.size}`);
const pictureById = new Map();
for (const picture of picturesFile.pictures) {
  if (!pictureById.has(picture.id)) pictureById.set(picture.id, []);
  pictureById.get(picture.id).push(picture);
}
const excludedPictures = new Set(['pedsa-b9-16-3', 'pedsa-b28-8', 'pedsa-b18-7-3', 'pedsa-b9-15-4']);
const explanationNotes = new Map([
  ['pedsa-b17-4', 'The key was taken from the bold heading only.'],
  ['pedsa-b10-12', 'A look-alike pedep-mf1-32 carries a different key.'],
  ['pedsa-b10-7', 'Look-alikes pedep-inf-43, pedep-mf3-48, pedep-neo-30 carry a different key.'],
  ['pedsa-b15-7', 'A look-alike pedep-mf1-37 asks a different thing.']
]);
function sourceFor(q) {
  if (q.src === 'book') return `Self Assessment Book.pdf p.${q.page} ${q.num}`;
  return `${q.src === 'p1' ? 'Self assessment part 1.pdf' : 'Self assessment part 2.pdf'} p.${q.page} ${q.num}`;
}
function objectiveFor(q, chapter) {
  const primary = chapterNames.get(chapter.chapter);
  if (!primary) throw new Error(`Unknown objective chapter for ${q.id}`);
  const also = chapter.secondary ? (chapterNames.get(chapter.secondary) || chapter.secondary) : '';
  return `Test ${primary}${also ? `, including ${also}` : ''}${chapter.outOfCourse && chapter.note ? ` (outside the course list: ${chapter.note})` : ''}.`;
}
function pictureFor(q, questions) {
  const choices = (pictureById.get(q.id) || []).filter(p => !/answer explanation only/.test(p.note || '') && !excludedPictures.has(q.id));
  if (choices.length > 1) {
    questions.push(`- ${q.id}: ${choices.length} eligible pictures; none attached because the schema holds one image.`);
    return null;
  }
  return choices[0] || null;
}
function buildQuestion(q, questions) {
  const chapter = chapters[q.id];
  if (!chapter) throw new Error(`Missing chapter for ${q.id}`);
  let explanation = q.explanation;
  if (q.src === 'p1' || q.src === 'p2') {
    // The two written sets print their own explanations; what must be recorded is that the QUESTION is authored.
    explanation += `\n\nWritten for this bank — an authored question from ${q.src === 'p1' ? 'Self assessment part 1' : 'Self assessment part 2'}, not transcribed from a printed question bank.`;
  }
  if (explanationNotes.has(q.id)) explanation += ` ${explanationNotes.get(q.id)}`;
  const out = { id: q.id, bank: 'selfassess', module: 'pediatrics', chapter: chapter.chapter,
    stem: q.stem, options: q.options, answer: q.answer, explanation,
    objective: objectiveFor(q, chapter), source: sourceFor(q) };
  if (q.src === 'book') {
    const picture = pictureFor(q, questions);
    if (picture) { out.image = picture.image.replace(/\.jpg$/i, ''); out.imgAlt = picture.imgAlt; }
  }
  return out;
}
const questions = [];
const built = [...p1, ...p2, ...book.filter(q => !folded.has(q.id))].map(q => buildQuestion(q, questions));
if (built.length !== 521) throw new Error(`Expected 521 entries, got ${built.length}`);
for (const q of built.filter(q => q.options.length > 10)) questions.push(`- ${q.id}: ${q.options.length} shared extended-matching options; retained verbatim rather than dropping or altering options.`);
const plan = finalPairs.filter(pair => pair.cls === 'SAME').map(pair => ({
  book: pair.book, live: pair.other, liveFile: pair.otherFile === 'peds.ep2' ? 'questions.peds.ep2.js' : pair.otherFile === 'peds.ep' ? 'questions.peds.ep.js' : 'questions.peds.js',
  cite: sourceFor(book.find(q => q.id === pair.book))
}));
const unknownLiveFile = plan.find(p => !['questions.peds.js', 'questions.peds.ep.js', 'questions.peds.ep2.js'].includes(p.liveFile));
if (unknownLiveFile) throw new Error(`Unknown live file for ${unknownLiveFile.live}: ${unknownLiveFile.liveFile}`);
fs.writeFileSync(path.join(__dirname, 'questions.peds.sa.js'), `var Q_PEDS_SA = ${JSON.stringify(built, null, 2)};\n`);
fs.writeFileSync(path.join(__dirname, 'alsoin-plan.json'), `${JSON.stringify(plan, null, 2)}\n`);
fs.writeFileSync(path.join(__dirname, 'QUESTIONS.md'), `# Build questions\n\n${questions.length ? questions.join('\n') : 'None.'}\n`);
console.log(`built ${built.length}: p1 ${p1.length}, p2 ${p2.length}, book ${book.length - folded.size}; fold ${folded.size}, stay ${book.length - folded.size}; pictures ${built.filter(q => q.image).length}`);
