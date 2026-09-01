# Re-run the five-option-cap check across BOTH key styles. The first version matched only
# bare `options:` and therefore skipped the 151 quoted-key entries in questions.neuro.js --
# it scanned 22 of 173 neuro questions and reported "all clear". Escape-aware string scanning
# is kept from the first version (an escape-blind parser once called a 4-option question 8).
import io, glob, re, os

BS = chr(92)
os.chdir(r'D:\claude os\Medical school\Herophilus')


def scan_array(s, start):
    d, j = 0, start
    instr, q, esc = False, '', False
    while j < len(s):
        ch = s[j]
        if instr:
            if esc:
                esc = False
            elif ch == BS:
                esc = True
            elif ch == q:
                instr = False
        elif ch in '"' + chr(39):
            instr, q = True, ch
        elif ch == '[':
            d += 1
        elif ch == ']':
            d -= 1
            if d == 0:
                return s[start + 1:j]
        j += 1
    return s[start + 1:]


def count_items(body):
    if not body.strip():
        return 0
    d, c = 0, 1
    instr, q, esc = False, '', False
    for ch in body:
        if instr:
            if esc:
                esc = False
            elif ch == BS:
                esc = True
            elif ch == q:
                instr = False
            continue
        if ch in '"' + chr(39):
            instr, q = True, ch
        elif ch in '[{(':
            d += 1
        elif ch in ']})':
            d -= 1
        elif ch == ',' and d == 0:
            c += 1
    return c


PAT = re.compile('"?options"?' + BS + 's*:' + BS + 's*' + BS + '[')
dist, over, per_file = {}, [], {}
for fn in sorted(glob.glob('app/data/questions.*.js')) + sorted(glob.glob('app/data/cases.*.js')):
    s = io.open(fn, encoding='utf-8', errors='replace').read()
    n = 0
    for m in PAT.finditer(s):
        c = count_items(scan_array(s, m.end() - 1))
        dist[c] = dist.get(c, 0) + 1
        n += 1
        if c > 5:
            k = max(s.rfind('id:', 0, m.start()), s.rfind('"id"', 0, m.start()))
            over.append((os.path.basename(fn), c, s[k:k + 34].replace(chr(10), ' ')))
    per_file[os.path.basename(fn)] = n

print('options arrays per file:', per_file)
print('total scanned:', sum(per_file.values()))
print('option-count distribution:', dict(sorted(dist.items())))
print('questions with MORE than five options:', len(over))
for o in over[:12]:
    print('   ', o)
