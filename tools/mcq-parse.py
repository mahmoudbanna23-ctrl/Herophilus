#!/usr/bin/env python
"""Turn WPS OCR output into draft question objects.

Reads the .docx files wpscli photo2word produces, parses the MCQs out of them,
and writes a .draft.js array in the project's schema plus a flags report.

This does the MECHANICAL typing only. Every draft it emits is unverified: the
answer key, the exponents, the doses and the images still have to be read off
the rendered page by a human or an agent. The flags file lists what to look at
first. Nothing here is a clinical source.

Usage:
  python tools/mcq-parse.py --docx-dir <folder-of-wps-docx> --prefix opmcq-c19 \
      --module ophtho --bank house --chapter op-drugs --out out.draft.js

Only --docx-dir, --prefix and --out are required.
"""

import argparse
import io
import os
import re
import sys
import zipfile
from xml.etree import ElementTree as ET

NS = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'

# A question stem opens with a printed number: "18.Which of..." / "3) A patient..."
RE_QNUM = re.compile(r'^(\d{1,3})\s*[.)\]:-]\s*(.*)$')
# An option opens with a single letter: "A.It provides..." / "b) Buckle" / "c---Argon"
RE_OPT = re.compile(r'^([A-Ha-h])\s*(?:[.)\]:]|-{1,3})\s*(.*)$')
# Inline answer keys, as printed by the Grade Gain banks.
RE_ANS = re.compile(r'correct\s*answer\s*[:.]?\s*[(\[]?\s*([A-Ha-h])', re.I)
RE_ANS2 = re.compile(r'^answer\s*[:.]?\s*[(\[]?\s*([A-Ha-h])', re.I)

# Things that must never be trusted from OCR — flag for a visual read.
RE_RISK = re.compile(
    r'(\d\s*\^|10\s*\d|x\s*10|/\s*mm|mm\s*Hg|\bmg\b|\bmcg\b|\bml\b|\bIU\b|'
    r'\bg/dL\b|\bmmol\b|\bmEq\b|%|\d\s*:\s*\d|\bdioptre|\bD\b\s*sphere)', re.I)
# CJK range: WPS renders arrows and symbols as Chinese characters.
RE_CJK = re.compile(r'[⺀-鿿豈-﫿]')


def docx_lines(path):
    """Pull the visible paragraph text out of a .docx (it is a zip)."""
    with zipfile.ZipFile(path) as z:
        root = ET.fromstring(z.read('word/document.xml'))
    lines = []
    for para in root.iter(NS + 'p'):
        text = ''.join(node.text or '' for node in para.iter(NS + 't'))
        text = text.strip()
        if text:
            lines.append(text)
    return lines


def page_of(filename):
    """WPS keeps pdftoppm's page number in the name, e.g. ep200-0100.docx."""
    hits = re.findall(r'(\d{2,5})', os.path.basename(filename))
    return hits[-1].lstrip('0') if hits else ''


def tidy(text, page):
    """Repair the OCR artifacts that are safe to repair. Nothing clinical."""
    # A page number fused onto the tail of a line: "...artery2100"
    if page and text.endswith(page) and len(text) > len(page) + 3:
        text = text[: -len(page)].rstrip()
    # Letter-spacing artifacts: "D.All    of    the    above"
    text = re.sub(r'\s{2,}', ' ', text)
    return text.strip()


def is_page_noise(text, page):
    """A bare page number on its own line is furniture, not content."""
    stripped = text.strip()
    return stripped.isdigit() and (not page or stripped.lstrip('0') == page)


def parse_lines(lines, page):
    """Walk one page's lines into zero or more question dicts."""
    questions = []
    current = None
    for raw in lines:
        if is_page_noise(raw, page):
            continue
        line = tidy(raw, page)
        if not line:
            continue

        key = RE_ANS.search(line) or RE_ANS2.match(line)
        if key and current is not None:
            current['key_letter'] = key.group(1).upper()
            continue

        opt = RE_OPT.match(line)
        if opt and current is not None and opt.group(2):
            current['options'].append((opt.group(1).upper(), opt.group(2).strip()))
            continue

        num = RE_QNUM.match(line)
        if num:
            if current is not None:
                questions.append(current)
            current = {'printed': num.group(1), 'stem': num.group(2).strip(),
                       'options': [], 'key_letter': None, 'page': page}
            continue

        # Continuation text: a wrapped stem, or a wrapped option.
        if current is None:
            continue
        if current['options']:
            letter, body = current['options'][-1]
            current['options'][-1] = (letter, (body + ' ' + line).strip())
        else:
            current['stem'] = (current['stem'] + ' ' + line).strip()

    if current is not None:
        questions.append(current)
    for question in questions:
        rescue_first_option(question)
    return questions


def rescue_first_option(question):
    """Recover an option that the slide printed on the same line as the stem.

    "...include EXCEPT: a.Upper lid retraction" leaves option A buried in the
    stem and the question one option short. Only fires when the parsed options
    actually start at a later letter, so an ordinary "vitamin A." is safe.
    """
    if not question['options']:
        return
    first = question['options'][0][0]
    if first == 'A' or first not in 'BCDEFGH':
        return
    wanted = chr(ord(first) - 1)
    pattern = re.compile(r'(?:^|\s)' + wanted + r'\s*[.)\]:]\s*(\S.*)$',
                         re.IGNORECASE)
    found = pattern.search(question['stem'])
    if not found:
        return
    question['options'].insert(0, (wanted, found.group(1).strip()))
    question['stem'] = question['stem'][: found.start()].strip()
    question.setdefault('notes', []).append(
        'option ' + wanted + ' was printed on the stem line and was split out')


def audit(question):
    """Return the list of reasons this draft needs a human's eyes."""
    flags = []
    letters = [letter for letter, _ in question['options']]
    bodies = [body for _, body in question['options']]

    # The endpoint defect: an option line repeated verbatim.
    for i in range(1, len(bodies)):
        if bodies[i] and bodies[i] == bodies[i - 1]:
            flags.append('DUPLICATED OPTION (' + letters[i] + ') — is this an OCR '
                         'artifact or a printed defect? Read the page.')
            break
    if len(letters) != len(set(letters)):
        flags.append('REPEATED OPTION LETTER ' + ','.join(letters) +
                     ' — answer index withheld, set it by hand')
    for note in question.get('notes', []):
        flags.append(note)
    if len(question['options']) < 2:
        flags.append('ONLY ' + str(len(question['options'])) + ' OPTION(S) parsed')
    elif len(question['options']) > 5:
        flags.append(str(len(question['options'])) + ' options — check for a run-on')
    if not question['key_letter']:
        flags.append('NO ANSWER KEY on the page — read it off the source')

    blob = question['stem'] + ' ' + ' '.join(bodies)
    if RE_CJK.search(blob):
        flags.append('CJK CHARACTER present — WPS renders arrows as Chinese '
                     'characters. Read the symbol off the page.')
    if RE_RISK.search(blob):
        flags.append('NUMBER/UNIT/DOSE present — never take these from OCR. '
                     'Read off the page image.')
    for body in bodies:
        if 0 < len(body) < 3:
            flags.append('SUSPICIOUSLY SHORT OPTION: "' + body + '"')
            break
    if re.search(r'[a-z]{2}[A-Z]', question['stem']):
        flags.append('LOST WORD SPACE in stem (e.g. "measurement ofIOP")')
    return flags


def js_string(text):
    """Quote a Python string as a JavaScript single-quoted literal."""
    out = text.replace('\\', '\\\\').replace("'", "\\'")
    out = out.replace('\r', '').replace('\n', '\\n')
    return "'" + out + "'"


def render(question, index, args):
    letters = [letter for letter, _ in question['options']]
    bodies = [body for _, body in question['options']]
    answer = 'null'
    if question['key_letter'] and question['key_letter'] in letters:
        # A repeated letter means the position of the key is ambiguous, and a
        # wrong index is a wrong answer. Refuse to guess.
        if len(letters) == len(set(letters)):
            answer = str(letters.index(question['key_letter']))

    qid = args.prefix + '-' + (question['printed'] or str(index))
    lines = ['{']
    lines.append('  id:' + js_string(qid) + ', bank:' + js_string(args.bank) +
                 ', module:' + js_string(args.module) +
                 ', chapter:' + js_string(args.chapter) + ',')
    lines.append('  stem:' + js_string(question['stem']) + ',')
    lines.append('  options:[' + ','.join(js_string(b) for b in bodies) + '],')
    lines.append('  answer:' + answer + ',')
    lines.append('  explanation:' + js_string('') + ',')
    lines.append('  source:' + js_string(args.source + ' p.' + question['page']) + ',')
    flags = audit(question)
    if flags:
        lines.append('  // UNVERIFIED — ' + ' | '.join(flags))
    lines.append('},')
    return '\n'.join(lines), flags


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--docx-dir', required=True)
    ap.add_argument('--prefix', required=True, help='id prefix, e.g. opmcq-c19')
    ap.add_argument('--out', required=True)
    ap.add_argument('--module', default='ophtho')
    ap.add_argument('--bank', default='house')
    ap.add_argument('--chapter', default='')
    ap.add_argument('--source', default='')
    ap.add_argument('--var', default='', help='JS var name; omit for a bare array')
    args = ap.parse_args()

    files = sorted(f for f in os.listdir(args.docx_dir) if f.lower().endswith('.docx'))
    if not files:
        sys.exit('no .docx files in ' + args.docx_dir)

    blocks, report, total, flagged = [], [], 0, 0
    for name in files:
        path = os.path.join(args.docx_dir, name)
        try:
            questions = parse_lines(docx_lines(path), page_of(name))
        except Exception as exc:
            report.append(name + ': FAILED TO READ — ' + str(exc))
            continue
        if not questions:
            report.append(name + ': 0 questions parsed — check this page by hand')
            continue
        for question in questions:
            total += 1
            block, flags = render(question, total, args)
            blocks.append(block)
            if flags:
                flagged += 1
                report.append(name + ' Q' + question['printed'] + ': ' +
                              ' | '.join(flags))

    body = '\n'.join(blocks)
    if args.var:
        body = 'var ' + args.var + ' = [\n' + body + '\n];\n'
    header = ('/* DRAFT — machine-parsed from WPS OCR by tools/mcq-parse.py.\n'
              '   NOTHING HERE IS VERIFIED. Every answer, exponent, unit and dose\n'
              '   must be read off the rendered page before this ships.\n'
              '   ' + str(total) + ' parsed, ' + str(flagged) + ' flagged. */\n')
    with io.open(args.out, 'w', encoding='utf-8', newline='\n') as fh:
        fh.write(header + body)

    flags_path = os.path.splitext(args.out)[0] + '.flags.txt'
    with io.open(flags_path, 'w', encoding='utf-8', newline='\n') as fh:
        fh.write('parsed ' + str(total) + ' questions from ' + str(len(files)) +
                 ' pages; ' + str(flagged) + ' need a visual check\n\n')
        fh.write('\n'.join(report) + '\n')

    print('parsed   ', total, 'questions from', len(files), 'pages')
    print('flagged  ', flagged, 'for visual check')
    print('written  ', args.out)
    print('flags    ', flags_path)


if __name__ == '__main__':
    main()
