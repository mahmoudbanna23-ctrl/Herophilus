// Blind copy of the pair dump for the third read: same records, first reader's call removed.
const fs = require('fs'), path = require('path');
const d = JSON.parse(fs.readFileSync(path.join(__dirname, '../check7/pairs-dump.json'), 'utf8'));
fs.writeFileSync(path.join(__dirname, 'pairs-blind.json'), JSON.stringify(d.map(({ n, book, other }) => ({ n, book, other })), null, 1));
console.log(d.length);
