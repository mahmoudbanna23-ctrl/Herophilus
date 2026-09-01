#!/usr/bin/env python
"""Find the cached theory passage that belongs to a question.

Scope is one module per run (--module ent|ophtho|neuro|peds), which is the
folder split that already exists under content/.

Measured 2026-09-01, counting only actual theory (qb-pages, which are OCR of
the question banks, and the planning registers are excluded):

    module   files   characters    rough tokens
    ent         34      291,042          ~73k
    neuro       35      687,774         ~172k
    peds        64      796,294         ~199k
    ophtho      42    1,587,731         ~397k

Only ENT would comfortably fit in one session; ophtho is ~2.6x over on its own.
So this does not load a module — it retrieves the ~14 lines that matter, per
question, and cites where they came from.

WHAT THIS IS NOT
  It is a SEARCH INDEX, not a clinical source, and not an answer key. It never
  writes to a question file and never touches an `answer`. It hands back
  passages plus citations so a human or an agent can read the real text and
  write the explanation from it. A retrieved passage that has not been read
  against its source has not been verified.

CITATIONS
  145 of 229 cached files carry no page or slide marker of any kind. Where a
  marker exists above the hit it is quoted verbatim; where none exists the tool
  says so in those words. It never infers a page number.

Usage:
  python tools/theory-lookup.py --module ophtho --query "Schiotz tonometry"
  python tools/theory-lookup.py --module ophtho --drafts out.draft.js --out theory.md
"""

import argparse
import io
import os
import re
import sys
import unicodedata
from collections import defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))
PROJECT = os.path.dirname(HERE)
CONTENT = os.path.join(PROJECT, 'content')

# The six page/slide marker forms actually present in the cache, counted by a
# sweep on 2026-09-01. Order is irrelevant — the matched line is quoted whole.
#   --- slide N ---      746    peds + ent lectures
#   SLIDE N —            706    ophtho + neuro lectures
#   ## p.N               182    ent qb-pages
#   ## printed p.N (     129    neuro + ophtho book
#   page N (             122    mixed
#   ## Book p.N          ~17    qb-pages
RE_MARKER = re.compile(
    r'^\s*(?:'
    r'#{1,4}\s*printed\s+p\.\s*\d+'
    r'|={2,}\s*printed\s+p\.\s*\d+'
    r'|#{1,4}\s*book\s+p\.\s*\d+'
    r'|#{1,4}\s*p\.\s*\d+'
    r'|#{1,4}\s*slide\s+\d+'
    r'|-{2,}\s*slide\s+\d+'
    r'|slide\s+\d+\s*[—–-]'
    r'|page\s+\d+\s*\('
    r')', re.IGNORECASE)

RE_SOURCE = re.compile(r'^\s*SOURCE\s*:', re.IGNORECASE)
RE_TOKEN = re.compile(r'[a-z0-9][a-z0-9\'-]*')

# Tolerant id/stem readers: the data files are mixed-style. questions.neuro.js
# is double-quoted ("id": "npqb-nr-1"), everything else single (id:'...').
RE_ID = re.compile(r'["\']?id["\']?\s*:\s*["\']([^"\']+)["\']')
RE_STEM = re.compile(r'["\']?stem["\']?\s*:\s*["\'](.*?)["\']\s*,\s*$')
RE_OPTS = re.compile(r'["\']?options["\']?\s*:\s*\[(.*)\]\s*,\s*$')

# Everyday English plus MCQ furniture. These carry no retrieval signal, and
# leaving them in makes every question match every page.
STOPWORDS = set("""
a an and are as at be been but by can could did do does each for from had has
have he her him his how i if in into is it its may might most much must my no
nor not of on one only or other our out over own she should since so some such
than that the their them then there these they this those through to too under
until up upon us was we were what when where which while who whom why will with
within without would you your yours it's don't
about above after again against all also always among any because before being
below between both during few further here however less many more never new now
often once other others same several still then therefore though thus very well
where whether whose
following except true false correct incorrect best least likely question answer
answers option options choose select statement statements regarding concerning
associated cause caused causes causing feature features finding findings
patient patients case cases year years old man woman male female boy girl
present presents presented presenting history examination investigation
treatment management diagnosis type types include includes including all above
none which what next step commonest common characteristic characteristics
""".split())

# Directories that are not theory. qb-pages hold OCR of the QUESTION banks —
# retrieving those would let a question match itself and read as confirmation.
# theory-plan.md and *-map.md are planning registers, not clinical text.
EXCLUDE_DIRS = ('qb-pages',)
EXCLUDE_FILES = ('theory-plan.md', 'book-map.md', 'visual-read-triage.md',
                 'examiner-patterns.md')


def module_files(module, include_qb, include_plans):
    """Every cached theory file for one module, with exclusions made explicit."""
    root = os.path.join(CONTENT, module)
    if not os.path.isdir(root):
        sys.exit('no such module folder: ' + root)
    kept, dropped = [], []
    for base, dirs, names in os.walk(root):
        dirs.sort()
        for name in sorted(names):
            if not name.lower().endswith(('.txt', '.md')):
                continue
            path = os.path.join(base, name)
            rel = os.path.relpath(path, CONTENT).replace(os.sep, '/')
            parts = rel.split('/')
            if not include_qb and any(d in EXCLUDE_DIRS for d in parts):
                dropped.append((rel, 'question-bank pages, not theory'))
                continue
            if not include_plans and name in EXCLUDE_FILES:
                dropped.append((rel, 'planning register, not clinical text'))
                continue
            kept.append((rel, path))
    return kept, dropped


def read_lines(path):
    with io.open(path, 'r', encoding='utf-8', errors='replace') as fh:
        return fh.read().replace('\r\n', '\n').split('\n')


def tokenize(text):
    """Lowercase word tokens, minus stopwords, short noise and bare numerals.

    Bare numbers are dropped deliberately. A question's "140 beats/min" would
    otherwise match a lecture's "130 beats per minute" and score it as a hit,
    and numbers are the one thing in this corpus that must never be taken from
    cached OCR anyway — WPS has already read a printed 10^6 as 10^9. Mixed
    alphanumerics (t1dm, b12, hba1c) are real terms and are kept.

    Accents are folded to ASCII first. Without this the token pattern breaks a
    word at any non-ASCII letter, and "Schonlein" arrived as "sch" + "nlein"
    (measured 2026-09-01) — which silently destroys exactly the rare eponyms
    that carry the most retrieval signal.
    """
    flat = unicodedata.normalize('NFKD', text.lower())
    flat = flat.encode('ascii', 'ignore').decode('ascii')
    out = []
    for tok in RE_TOKEN.findall(flat):
        if len(tok) < 3 or tok in STOPWORDS:
            continue
        if tok.isdigit():
            continue
        out.append(tok)
        # A hyphenated eponym is emitted whole AND in parts, because the cache
        # is inconsistent about the hyphen: one lecture writes "Henoch-Schonlein"
        # and another "Henoch Schonlein", and a joined-only token matches
        # neither of the two-word spellings.
        if '-' in tok:
            for part in tok.split('-'):
                if len(part) >= 3 and part not in STOPWORDS and not part.isdigit():
                    out.append(part)
    return out


class Corpus(object):
    """One module, held in memory once per run and searched many times."""

    def __init__(self, module, include_qb, include_plans):
        self.module = module
        self.files, self.dropped = module_files(module, include_qb, include_plans)
        if not self.files:
            sys.exit('no .txt/.md theory files under content/' + module)

        self.lines = []      # per file: list of raw lines
        self.source = []     # per file: its SOURCE: provenance line, or ''

        for _, path in self.files:
            lines = read_lines(path)
            self.lines.append(lines)
            provenance = ''
            for line in lines[:6]:
                if RE_SOURCE.match(line):
                    provenance = line.strip()
                    break
            self.source.append(provenance)

        self.n_files = len(self.files)

        # Rarity is measured per LINE, not per file. Measured 2026-09-01: a
        # module holds only 34-64 files, so a file-level count has no
        # resolution — "retinoblastoma" sits in 12 of ophtho's 42 files and
        # "glaucoma" in 26, purely as cross-references, and any file-level
        # ceiling tight enough to exclude noise also excluded glaucoma,
        # cataract, keratitis, uveitis, squint and retinoblastoma. Every major
        # topic in the module scored zero. Lines give ~33,000 units instead of
        # 42, so a topic word and a filler word finally separate.
        line_freq = defaultdict(int)
        for lines in self.lines:
            for line in lines:
                for tok in set(tokenize(line)):
                    line_freq[tok] += 1

        self.n_units = max(1, sum(len(f) for f in self.lines))
        self.doc_freq = line_freq

        # Only genuine filler sits in more than 5% of all lines. This ceiling
        # exists to keep the postings list small, not to discriminate —
        # discrimination is the weight's job.
        self.ceiling = max(50, int(self.n_units * 0.05))
        self.postings = defaultdict(list)   # term -> [(file_idx, line_idx)]
        for fi, lines in enumerate(self.lines):
            for li, line in enumerate(lines):
                for tok in set(tokenize(line)):
                    if 0 < line_freq[tok] <= self.ceiling:
                        self.postings[tok].append((fi, li))

        self.total_chars = sum(len(l) for f in self.lines for l in f)

    def weight(self, term):
        """Rarer term, much higher weight. IDF *squared*, deliberately.

        Plain IDF loses. A term in 1 file of 64 scores ~6 and one in 13 files
        scores ~2.3, so four vague terms beat the one decisive term — which is
        exactly how "pulse + beats + abdomen" outranked "henoch" on 2026-09-01.
        Squaring makes one rare term (36) worth more than four vague ones (21),
        which is the ranking a clinician would want.
        """
        freq = self.doc_freq.get(term, 0)
        if freq <= 0 or freq > self.ceiling:
            return 0.0
        # log2(n_lines / lines_containing_term), no math import for one call.
        ratio = float(self.n_units) / float(freq)
        idf = 0.0
        while ratio > 1.0:
            ratio /= 2.0
            idf += 1.0
        idf = max(idf, 0.5)
        return idf * idf

    def marker_above(self, fi, li):
        """The nearest page/slide marker at or above a line, quoted verbatim.

        Returns '' when the file has none above that point. The caller must
        print that fact rather than omit the citation — 145 of the 229 cached
        files carry no marker at all, and a blank would read as an oversight.
        """
        lines = self.lines[fi]
        for i in range(min(li, len(lines) - 1), -1, -1):
            if RE_MARKER.match(lines[i]):
                return lines[i].strip()
        return ''

    def search(self, text, top, window):
        """Best passages for one query. Returns [(score, fi, start, end, terms)]."""
        terms = {}
        for tok in tokenize(text):
            weight = self.weight(tok)
            if weight > 0:
                terms[tok] = weight
        if not terms:
            return [], terms

        # Gather only the lines that actually contain a query term, then grow
        # clusters out of them. Scoring every window of every file would be
        # ~400k operations per question; this is a few hundred.
        hits = defaultdict(list)   # file_idx -> [(line_idx, term)]
        for term in terms:
            for fi, li in self.postings.get(term, ()):
                hits[fi].append((li, term))

        clusters = []
        for fi, entries in hits.items():
            entries.sort()
            start_i = 0
            while start_i < len(entries):
                first_line = entries[start_i][0]
                end_i = start_i
                while (end_i + 1 < len(entries)
                       and entries[end_i + 1][0] - first_line < window):
                    end_i += 1
                found = {}
                for li, term in entries[start_i:end_i + 1]:
                    found[term] = terms[term]
                score = sum(found.values())
                # A passage matching several distinct rare terms is worth much
                # more than one matching a single term repeatedly.
                score *= (1.0 + 0.25 * (len(found) - 1))
                # TRIED AND REJECTED 2026-09-01: multiplying by 1.6 when the
                # cluster contained the query's single rarest term. It reads
                # well and measured worse — ENT dropped its epistaxis lecture
                # from rank 1 to 2, peds surfaced the stroke lecture over
                # myocardial diseases for a Kawasaki query, and neuro lost the
                # muscle-disease lecture altogether. The rarest term in a
                # question is frequently a one-off OCR artifact, so boosting it
                # amplifies noise. Do not re-add it without a measured win.
                last_line = entries[end_i][0]
                pad = max(0, (window - (last_line - first_line)) // 2)
                clusters.append((score, fi,
                                 max(0, first_line - pad),
                                 min(len(self.lines[fi]) - 1, last_line + pad),
                                 sorted(found, key=lambda t: -found[t])))
                start_i = end_i + 1

        clusters.sort(key=lambda c: -c[0])
        return clusters[:top], terms


def read_questions(path):
    """Pull id / stem / options out of a draft or shipped questions .js file."""
    with io.open(path, 'r', encoding='utf-8', errors='replace') as fh:
        text = fh.read()
    questions, current = [], None
    for raw in text.replace('\r\n', '\n').split('\n'):
        line = raw.strip()
        found_id = RE_ID.search(line)
        if found_id:
            if current and current['stem']:
                questions.append(current)
            current = {'id': found_id.group(1), 'stem': '', 'options': ''}
        if current is None:
            continue
        found_stem = RE_STEM.search(line)
        if found_stem:
            current['stem'] = found_stem.group(1)
        found_opts = RE_OPTS.search(line)
        if found_opts:
            current['options'] = re.sub(r'["\',]+', ' ', found_opts.group(1))
    if current and current['stem']:
        questions.append(current)
    return questions


def render(question, corpus, args, out):
    query = question['stem'] + ' ' + question.get('options', '')
    clusters, terms = corpus.search(query, args.top, args.window)

    out.append('')
    out.append('## ' + question['id'])
    out.append('')
    out.append('**Stem:** ' + question['stem'])
    if terms:
        ranked = sorted(terms, key=lambda t: -terms[t])[:8]
        out.append('')
        out.append('*Search terms, rarest first:* ' + ', '.join(ranked))

    if not clusters:
        out.append('')
        out.append('> **NO SEARCH TERM SURVIVED.** Every word in this question is '
                   'either a stopword or too common across `content/' +
                   corpus.module + '` to discriminate. Nothing was retrieved. '
                   'Write this explanation from the source by hand.')
        return 0

    if clusters[0][0] < args.floor:
        out.append('')
        out.append('> **NO CONFIDENT MATCH** (best score ' +
                   ('%.1f' % clusters[0][0]) + ' is under the floor of ' +
                   ('%.1f' % args.floor) + '). The passages below are the best '
                   'available and may well be irrelevant. Treat as a lead, not '
                   'a source.')

    for rank, (score, fi, start, end, matched) in enumerate(clusters, 1):
        rel, _ = corpus.files[fi]
        marker = corpus.marker_above(fi, start)
        out.append('')
        out.append('### ' + str(rank) + '. `content/' + rel + '` line ' +
                   str(start + 1) + '  ·  score ' + ('%.1f' % score))
        if marker:
            out.append('')
            out.append('**Printed citation (quoted from the file):** `' + marker + '`')
        else:
            out.append('')
            out.append('**No page or slide marker exists above this line in this '
                       'file.** Cite it as `content/' + rel + '` line ' +
                       str(start + 1) + ' — do not infer a page number.')
        if corpus.source[fi]:
            out.append('')
            out.append('*File provenance:* `' + corpus.source[fi] + '`')
        out.append('')
        out.append('*Matched on:* ' + ', '.join(matched[:6]))
        out.append('')
        out.append('```text')
        for li in range(start, end + 1):
            out.append(corpus.lines[fi][li])
        out.append('```')
    return 1


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--module', required=True,
                    choices=['ent', 'ophtho', 'neuro', 'peds'])
    ap.add_argument('--query', help='one ad-hoc lookup, printed to stdout')
    ap.add_argument('--drafts', help='a draft or shipped questions .js file')
    ap.add_argument('--out', help='markdown report path (required with --drafts)')
    ap.add_argument('--top', type=int, default=3, help='passages per question')
    ap.add_argument('--window', type=int, default=14, help='lines per passage')
    # Calibrated 2026-09-01 on 240 real questions, 60 per module. Top-1 scores:
    #   module   min    p10    median   p90
    #   ophtho   424    882    1546     3070
    #   peds     948   1310    2325     4249
    #   ent      276    600     961     1475
    #   neuro    144    305     562     1775
    # 300 sits just under neuro's p10, so it does not false-flag the module
    # with the smallest corpus. It is a crude absolute line, not a threshold of
    # truth: medians differ 4x between modules, so a peds hit at 400 is weak
    # while a neuro hit at 400 is ordinary. Read the printed score, not the flag.
    ap.add_argument('--floor', type=float, default=300.0,
                    help='below this score a match is called unconfident '
                         '(default 300; module-dependent, see notes in source)')
    ap.add_argument('--limit', type=int, default=0, help='first N questions only')
    ap.add_argument('--include-qb', action='store_true',
                    help='also search qb-pages (question OCR — normally excluded)')
    ap.add_argument('--include-plans', action='store_true',
                    help='also search theory-plan / map files')
    args = ap.parse_args()

    if not args.query and not args.drafts:
        sys.exit('give either --query or --drafts')
    if args.drafts and not args.out:
        sys.exit('--drafts needs --out')

    corpus = Corpus(args.module, args.include_qb, args.include_plans)

    if args.query:
        out = ['# Ad-hoc lookup — ' + args.module]
        render({'id': 'query', 'stem': args.query, 'options': ''},
               corpus, args, out)
        text = '\n'.join(out)
        # Windows consoles are cp1252 and raise on the em-dashes in this cache.
        sys.stdout.write(text.encode('ascii', 'replace').decode('ascii'))
        sys.stdout.write('\n')
        return

    questions = read_questions(args.drafts)
    if not questions:
        sys.exit('no questions parsed out of ' + args.drafts)
    if args.limit:
        questions = questions[:args.limit]

    out = []
    out.append('# Theory lookup — ' + args.module)
    out.append('')
    out.append('Generated by `tools/theory-lookup.py` from `' + args.drafts + '`.')
    out.append('')
    out.append('> **These passages are a SEARCH RESULT, not a clinical source and '
               'not an answer key.** Nothing here has been read against the '
               'original PDF. Confirm every fact on the page before it ships, and '
               'never take an exponent, a unit or a dose from cached OCR text.')
    out.append('')
    out.append('- Corpus searched: **' + str(corpus.n_files) + ' files, ' +
               '{:,}'.format(corpus.total_chars) + ' characters** under `content/' +
               args.module + '`')
    out.append('- Questions: **' + str(len(questions)) + '**')
    out.append('- Terms indexed: those on at most ' + '{:,}'.format(corpus.ceiling) +
               ' of ' + '{:,}'.format(corpus.n_units) + ' lines (5% ceiling); '
               'rarity is scored per line, not per file')
    if corpus.dropped:
        out.append('- Deliberately NOT searched (' + str(len(corpus.dropped)) +
                   ' files):')
        reasons = defaultdict(list)
        for rel, why in corpus.dropped:
            reasons[why].append(rel)
        for why in sorted(reasons):
            out.append('  - ' + why + ' — ' + str(len(reasons[why])) + ' files')
    out.append('')
    out.append('---')

    weak = 0
    for question in questions:
        if render(question, corpus, args, out) == 0:
            weak += 1

    with io.open(args.out, 'w', encoding='utf-8', newline='\n') as fh:
        fh.write('\n'.join(out) + '\n')

    print('module   ', args.module)
    print('corpus   ', corpus.n_files, 'files,', corpus.total_chars, 'chars')
    print('questions', len(questions))
    print('no terms ', weak)
    print('written  ', args.out)


if __name__ == '__main__':
    main()
