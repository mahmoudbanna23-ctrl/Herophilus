// pedsa-b31-3: the staged explanation ran past the answer into the book's index (19,945 chars).
// Cuts it at the index heading, inside the staging file, touching nothing else. Safe to re-run.
const fs = require('fs'), path = require('path');
const file = path.join(__dirname, '..', 'sa-book.array.js');
const src = fs.readFileSync(file, 'utf8');
const at = src.indexOf('"id":"pedsa-b31-3"');
if (at < 0) throw new Error('entry not found');
const cut = src.indexOf(' Pagenumbersfollowedby', at);
const nextEntry = src.indexOf('"id":"', at + 10);
if (cut < 0 || (nextEntry > 0 && cut > nextEntry)) { console.log('nothing to cut'); process.exit(0); }
let end = cut;
while (!(src[end] === '"' && src[end - 1] !== '\\')) end++;   // closing quote of the JSON string
const out = src.slice(0, cut) + src.slice(end);
fs.writeFileSync(file, out);
console.log('cut', end - cut, 'chars; file', src.length, '->', out.length);
