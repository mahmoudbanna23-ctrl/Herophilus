r"""Where the yellow highlight IS, not just how much of it -- an OCR-independent key check.

    python tools\ep-index\keypos.py "<file.pdf>" <page> [n_options]
    python tools\ep-index\keypos.py "<file.pdf>" --calibrate <staged.array.js> [limit]

WHY THIS EXISTS
    extract.py counts yellow pixels and index.py turns that count into "answered / not
    answered". The count is a scalar: it says a highlight exists, never which option it sits
    on. So the answer key has only ever had ONE source -- a human reading the letter off the
    image -- and every automated check downstream compares that letter with itself. That is
    how a whole section came within one pass of being staged an option out (key stored
    0-based, the brief written 1-based, the validator comparing with no conversion), and it
    is why p.584 needed a person rather than a check.

    This measures the highlight's POSITION and reports which option row it lands on. Pixels
    only: no OCR text, no index.json, no staging file. Two measurements sharing no code and
    no assumption. When they disagree, a human looks at the page.

    It is a CHECK, never a source. Disagreement means "render this page", not "change the
    key". Agreement does not make a key right -- both routes still read the same ink.

HOW IT DECIDES
    150 dpi render -> per-row yellow, ink and leftmost-ink profiles over the whole sheet.
      yellow : r>200 g>180 b<120 -- byte-for-byte the test extract.py uses, kept identical on
               purpose so the two agree about what "yellow" means.
      ink    : r+g+b < 380. Contiguous ink rows group into text bands; bands under MIN_BAND
               px tall are dropped as specks.
    The three yellow-or-text things that are not an answer highlight (title banner, footer
    page number, indented explanation block) are excluded by measured properties -- see
    key_index below. What remains is one column of stem lines then option lines, so the
    options are the LAST n_opts bands, and the highlight's yellow-weighted row centroid picks
    one of them -> a 0-based index, directly comparable to a staged `key`.

    Reports None rather than a number whenever the geometry is not clean: no yellow below the
    banner, too few bands for the expected option count, or a centroid landing between bands.
    ABSTAINING IS THE CORRECT OUTPUT on an unusual page. A guess here would be exactly the
    confident-and-wrong result this exists to catch.

CALIBRATE BEFORE TRUSTING IT
    --calibrate replays a staged array (fields n, p, key, opts) and prints agreement,
    disagreement and abstention. Run it on a CLOSED section first. An agreement rate is a
    precondition for use, not proof of correctness: the staged keys it is compared against
    came from the same pixels, read by eye. A high abstention rate is not a failure -- it is
    the tool declining to opine, which costs nothing. A single DISAGREE is worth a render.

CALIBRATION OF RECORD -- 2026-09-03, Pediatrics endpoint part1.pdf
    All four CLOSED sections, 235 staged entries: 232 agree, 2 disagree, 1 abstain, ~0.42 s
    a page.  s01 89/89 . s02 74/76 . s03 66/67 . s04 3/3.

    All three misses were then RENDERED AND READ BY EYE. Every one was this tool being wrong,
    and every staged key was right -- 235/235. So the disagreements measure the tool, not the
    bank, and the failure direction held: three wasted renders, no silent pass. The two causes
    are now known and are NOT worth fixing before the exams (a wasted render is cheap; a
    cleverer band model is not):

      p.344, p.500   THE DOCUMENTED WRAP OVER-COUNT. An option BELOW the key wraps, so the
                     unhighlighted band count runs high and the implied index runs low.
                     p.344: key a, but b and c each wrap -> implied -2, correctly ABSTAINED.
                     p.500: key b, c wraps -> implied 0 against a staged 1, DISAGREED.
      p.238          NEW, AND NOT PREDICTED: figures printed BESIDE the option column. Two
                     images sit to the right of options D and E; their ink keeps every row
                     above the band threshold, so D and E never separate and merge into one
                     band. One band too few below the highlight -> implied 3 against a staged
                     2. The left-margin filter cannot catch this, because the row's leftmost
                     ink is still the option text at x~47 -- the figure only removes the GAP.
                     Any page with art alongside the options can do this.

    SECOND CALIBRATION -- 2026-09-03, s09 "Infection and Immunity", 95 staged entries
    89 agree, 5 disagree, 1 abstain (94.7%). All six were RENDERED AND READ BY EYE, and once
    again EVERY staged key was right: 95/95, and 330/330 across both calibrations. The tool
    has now been wrong nine times and right about a staged key zero times. Its value is
    entirely in the direction of its failures -- it has never yet passed a wrong key.

    Nothing new appeared. All six are the two causes above, and the split is exact:
      p.1079, p.1087, p.1089   figures BESIDE the option column -- the p.238 shape, three
                               times in one section. s09 is the first section of this book to
                               carry figures at all, which is the whole reason the rate jumped
                               from 3-in-235 to 6-in-95. It is a property of the LAYOUT, not
                               of the section's difficulty or of the transcriber.
      p.975, p.1123, p.1003    the wrap over-count. p.975's options are full sentences and
                               several wrap; p.1123's options are CSF value lists and the key
                               itself (option B) wraps to a second line. p.1003 wrapped far
                               enough to imply -1 and correctly ABSTAINED.

    ⚠️ THE PRACTICAL RULE THIS SETTLES: on a section carrying figures or long wrapping
    options, expect ~5% disagreement and BUDGET THE RENDERS. Do not read a falling agreement
    rate as a staging-quality signal -- it is a layout signal. The number that would actually
    mean something is a disagreement that survives a human read, and that has never happened.

    ⚠️ CALIBRATION IS INVALIDATED BY: any change to DPI, MIN_BAND, LEFT_TOL, INK, the 2% lit
    threshold, the yellow test, or the band/margin logic -- and by a different source PDF,
    which is a different scanner, a different banner and a different layout. It is a property
    of (this code, this file), not of the code alone. Re-run --calibrate on the closed sections
    after ANY of those, and replace the numbers above rather than adding to them. Numbers that
    no longer describe the code that produced them are worse than no numbers.

    Never writes anywhere. Never touches the PDF.
"""
import json
import re
import sys
from pathlib import Path

import pymupdf

DPI = 150
MIN_BAND = 4       # px; a text band thinner than this is a speck, not a line
LEFT_TOL = 18      # px; how far right of the option margin a line may start and still count
INK = 380          # r+g+b below this counts as ink


def profiles(pix):
    """Per-row yellow and ink counts, plus each row's leftmost ink column."""
    n, s, w, h = pix.n, pix.samples, pix.width, pix.height
    stride = pix.stride
    yellow, ink, left = [0] * h, [0] * h, [w] * h
    for y in range(h):
        base = y * stride
        yc = ic = 0
        lf = w
        for x in range(w):
            i = base + x * n
            r, g, b = s[i], s[i + 1], s[i + 2]
            if r > 200 and g > 180 and b < 120:
                yc += 1
            if r + g + b < INK:
                ic += 1
                if x < lf:
                    lf = x
        yellow[y], ink[y], left[y] = yc, ic, lf
    return yellow, ink, left


def bands(ink, left, thresh=2):
    """Group contiguous ink rows into text bands: (top, bottom, leftmost ink x)."""
    out, start = [], None
    for y, v in enumerate(ink):
        if v > thresh and start is None:
            start = y
        elif v <= thresh and start is not None:
            if y - start >= MIN_BAND:
                out.append((start, y, min(left[start:y])))
            start = None
    if start is not None and len(ink) - start >= MIN_BAND:
        out.append((start, len(ink), min(left[start:])))
    return out


def key_index(doc, page, n_opts=None):
    """-> (index or None, reason, diagnostics). index is 0-based, matching a staged `key`.

    Three things on these slides are yellow-or-text but are NOT an answer highlight, and each
    is excluded by a measured property rather than a guessed coordinate:

      the title banner   every page carries a yellow band across rows ~0-85, answered or not
                         (measured on pp.37 and 583, both unanswered: 3,197 yellow px each).
                         extract.py never saw it because a 400x225 downscale washes it out --
                         at full resolution it would swamp the centroid. Excluded by ignoring
                         yellow above the bottom of the first text band.
      the page number    a footer band sitting at x>1150 on a 1241-wide render. Excluded by
                         dropping bands whose ink starts past the middle of the page.
      the explanation    on an answered page the worked answer is indented (x~108 against the
                         body's x~47). Excluded by the same left-margin test that finds the
                         option column.

    What is left is stem lines then option lines in one column -- but an option that runs long
    WRAPS onto a second line at the same left margin, so band count is not option count and
    "the last n_opts bands" is unsound. Measured on p.50 / p.183: 4 options occupy 6 bands,
    and ranking from the top put the key one option early on both.

    So rank from the BOTTOM instead, and count only bands the highlight does not touch. The
    keyed option's own wrapped line is highlighted along with its first line, so it drops out
    of the count for free:

        predicted key index = n_opts - 1 - (unhighlighted body bands below the highlight)

    This survives the keyed option wrapping, which is the common case. It over-counts only
    when an option BELOW the key wraps -- and that produces a disagreement, i.e. a wasted
    render, never a silent pass. The failure direction is the safe one.
    """
    pix = doc[page - 1].get_pixmap(dpi=DPI)
    yellow, ink, left = profiles(pix)
    d = {'yellow_px': sum(yellow)}

    all_bands = bands(ink, left)
    if not all_bands:
        return None, 'blank-page', d
    body = [b for b in all_bands if b[2] <= pix.width * 0.5]     # drop the footer page number
    if not body:
        return None, 'no-body-bands', d
    margin = min(b[2] for b in body)
    body = [b for b in body if b[2] <= margin + LEFT_TOL]        # drop the indented explanation
    d['body_bands'] = len(body)
    d['margin_x'] = margin

    # Yellow above the first band's baseline is the title banner, not a highlight.
    floor = body[0][1]
    per_band = [sum(yellow[t:b]) for t, b, _ in body]
    per_band = [v if body[i][0] >= floor else 0 for i, v in enumerate(per_band)]
    d['highlight_px'] = total = sum(per_band)
    if not total:
        return None, 'no-yellow-below-title', d

    # A band counts as highlighted at >=5% of the strongest one: enough to keep the keyed
    # option's wrapped second line (measured 543 against 22,899 on p.50 -- 2.4%, so the
    # threshold is deliberately low) while ignoring stray antialiasing.
    peak = max(per_band)
    lit = [i for i, v in enumerate(per_band) if v >= max(1, peak * 0.02)]
    d['lit_bands'] = [(body[i][0], body[i][1], per_band[i]) for i in lit]
    if len(lit) > 3:
        return None, '%d highlighted bands -- not one option' % len(lit), d

    if n_opts is None:
        return None, 'no-option-count-given', d
    below = len(body) - 1 - lit[-1]          # bands under the highlight, none of them lit
    d['bands_below_highlight'] = below
    idx = n_opts - 1 - below
    if idx < 0 or idx >= n_opts:
        return None, 'implied index %d outside 0..%d (an option below the key wraps?)' \
                     % (idx, n_opts - 1), d
    return idx, 'ok', d


# --- staging-array replay -------------------------------------------------------------
# Entries close as "note:'...' }," -- on the same line as the last field, never on a line of
# their own, so split on the NEXT entry's opening brace rather than matching a close brace.
BLOCK = re.compile(r'\n(?=\{\s*n:\s*\d+)')
FIELDS = re.compile(r'\bn:\s*(\d+).*?\bp:\s*(\d+).*?\bkey:\s*(\d+)', re.S)
OPTLIST = re.compile(r'\bopts:\s*\[(.*?)\],\s*$', re.M | re.S)


def n_options(block):
    """Count entries in the opts array without eval'ing it. None if it cannot be read.

    Counting the separator "','" is NOT enough: sections switch to double quotes whenever an
    option carries a straight apostrophe ("Hirschsprung's disease" sits beside 'Pyloric
    stenosis' in the same array). That undercount silently reported 1, 2 and 3 options for
    5-option questions -- a confident wrong number, which is the exact failure class this
    whole tool exists to catch, so it is counted properly instead.
    """
    m = OPTLIST.search(block)
    if not m:
        return None
    body = m.group(1)
    if not body.strip():
        return None
    n, quote, i = 1, None, 0
    while i < len(body):
        c = body[i]
        if quote:
            if c == '\\':
                i += 1
            elif c == quote:
                quote = None
        elif c in '\'"':
            quote = c
        elif c == ',':
            n += 1
        i += 1
    return n


def calibrate(doc, path, limit=None):
    src = Path(path).read_text(encoding='utf-8')
    blocks = [b for b in BLOCK.split(src) if b.lstrip().startswith('{')]
    if limit:
        blocks = blocks[:limit]
    agree = dis = abstain = 0
    for blk in blocks:
        m = FIELDS.search(blk)
        if not m:
            continue
        n, page, key = int(m.group(1)), int(m.group(2)), int(m.group(3))
        got, why, _ = key_index(doc, page, n_options(blk))
        if got is None:
            abstain += 1
            print('  n=%-4d p=%-5d staged=%d  ABSTAIN  %s' % (n, page, key, why), flush=True)
        elif got == key:
            agree += 1
        else:
            dis += 1
            print('  n=%-4d p=%-5d staged=%d  PIXELS=%d  *** DISAGREE ***' % (n, page, key, got),
                  flush=True)
    tot = agree + dis + abstain
    if not tot:
        print('calibrate: no entries matched -- check the field names (n, p, key, opts)')
        return
    print('\ncalibrate: %d entries -> agree %d, DISAGREE %d, abstain %d '
          '(%.1f%% agreement over the %d it answered)'
          % (tot, agree, dis, abstain, 100.0 * agree / (agree + dis) if agree + dis else 0.0,
             agree + dis))


if __name__ == '__main__':
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    document = pymupdf.open(sys.argv[1])
    if sys.argv[2] == '--calibrate':
        calibrate(document, sys.argv[3], int(sys.argv[4]) if len(sys.argv) > 4 else None)
    else:
        pg = int(sys.argv[2])
        want = int(sys.argv[3]) if len(sys.argv) > 3 else None
        idx, reason, diag = key_index(document, pg, want)
        print(json.dumps({'page': pg, 'key_index': idx,
                          'letter': 'ABCDE'[idx] if idx is not None and idx < 5 else '?',
                          'reason': reason, **diag}, default=str, indent=1))
