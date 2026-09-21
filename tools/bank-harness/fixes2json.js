// usage: node fixes2json.js <fixes.txt> <out.json> ; blocks "@@ nN / OLD: / NEW:" -> [[old,new],...]
const fs = require('fs');
const [, , inp, out] = process.argv;
const txt = fs.readFileSync(inp, 'utf8').replace(/\r/g, '');
const pairs = []; let bad = 0;
for (const blk of txt.split(/^@@ /m).slice(1)) {
  const o = blk.match(/^OLD: (.*)$/m), n = blk.match(/^NEW: (.*)$/m);
  if (!o || !n) { bad++; console.log('malformed block:', blk.slice(0, 60)); continue; }
  pairs.push([o[1], n[1]]);
}
fs.writeFileSync(out, JSON.stringify(pairs), 'utf8');
console.log('pairs', pairs.length, 'malformed', bad);
