// Compare two generations of the parts arrays: which ids changed, in which field, and how.
// usage: node diff-parts.js <oldDir> <newDir>
const fs = require('fs'), path = require('path'), vm = require('vm');
const load = (dir, file, name) => {
  const box = {};
  vm.runInNewContext(fs.readFileSync(path.join(dir, file), 'utf8') + ';this.OUT=' + name, box);
  return box.OUT;
};
const [oldDir, newDir] = process.argv.slice(2);
let changed = 0, other = 0;
[['sa-p1.array.js', 'SA_P1'], ['sa-p2.array.js', 'SA_P2']].forEach(([file, name]) => {
  const a = load(oldDir, file, name), b = load(newDir, file, name);
  if (a.length !== b.length) console.log(file + ': LENGTH ' + a.length + ' -> ' + b.length);
  b.forEach((q, i) => {
    const p = a[i];
    if (!p || p.id !== q.id) { console.log('ID ORDER CHANGED at ' + i); other++; return; }
    Object.keys(q).forEach(k => {
      const x = JSON.stringify(p[k]), y = JSON.stringify(q[k]);
      if (x === y) return;
      // the only allowed change: a space removed after a hyphen/dash
      const onlyHyphen = x.replace(/([-‐‑–]) /g, '$1') === y.replace(/([-‐‑–]) /g, '$1') && y.length < x.length;
      if (onlyHyphen) changed++; else other++;
      let at = 0; while (x[at] === y[at]) at++;
      console.log((onlyHyphen ? 'hyphen ' : 'OTHER  ') + q.id + ' ' + k + ': ...' + y.slice(Math.max(0, at - 18), at + 14));
    });
  });
});
console.log('hyphen-only field changes: ' + changed + '; any other change: ' + other);
process.exit(other ? 1 : 0);
