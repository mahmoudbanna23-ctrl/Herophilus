# Endpoint part 2 — section 15 page map

Section 15 is **Model Final Exam 4**, banner read off p.1757 on 2026-09-06. It runs pp.1757–1921
of `Semester 8\Pedo\Questions\Pediatrics endpoint part2.pdf` and stages **80 questions**.

This file exists because **section 15 does not obey a page formula.** Section 14 held
`p = 1595 + 2n` end to end; here that shape breaks four times. A staging prompt for this section
must carry the explicit page list below, never an arithmetic rule.

## What is in the range

165 pages, measured from `content/peds/qb-pages/ocr/ep2/index.json`:

| kind | count |
|---|---|
| `answered` | 80 |
| `question` (the unanswered twin) | 80 |
| `notes` | 5 |

Answered pages run p.1759 to p.1921. `p = 1759 + 2i` fails at **64 of the 80** — that is the
formula failing, not a data fault.

## The five `notes` pages — all looked at, none is a question

The classifier errs in both directions, and calling a real question `notes` is the expensive
direction: it did exactly that on pp.1889/1890 of the part 1 book. All five were rendered and read
by eye on 2026-09-06. None carries a question number, and none carries an A–E option list.

| page | what is actually printed |
|---|---|
| p.1757 | Section banner, red serif on cream: **Model Final Exam 4** |
| p.1790 | Explanation box, alone on the page — asthma not well controlled, step up by adding a LABA to the current low-dose inhaled steroid |
| p.1821 | Explanation box, alone — sudden bruising and petechiae with a very low platelet count is classic for ITP, contrasted against haemophilia and HUS |
| p.1828 | Explanation box, alone — ALL prognostic factors, good against poor |
| p.1865 | Explanation box, alone — early-onset neonatal sepsis, prolonged rupture of membranes over 24 hours, GBS the commonest cause |

Two things a transcriber must not get wrong:

- **p.1828 prints `<50 ×10⁹/L`.** Read that exponent off the page image. OCR on this project has
  been measured reading a printed 10⁶ as 10⁹ and flattening 10⁶ to 106 — a plausible wrong number
  rather than visible garbage. Exponents, units and doses never come from OCR.
- **p.1865 sets "early-onset neonatal sepsis" bold and underlined on a pale yellow strip.** That is
  emphasis styling inside prose, not an answer-key highlight. There is no question number and no
  option list on the page.

## Boxes printed alone, and which question owns each

The twin always sits at **p−1** of its own answered page, measured across all 80: 75 answered pages
have a twin on both sides (the one after belongs to the *next* question), and the only five with no
twin at p+1 are the four followed by a box page plus p.1921, the section's last. So a box page sits
immediately **after** the question it explains.

| box page | belongs to | that entry's `p` |
|---|---|---|
| p.1790 | n16 | p.1789 |
| p.1821 | n31 | p.1820 |
| p.1828 | n34 | p.1827 |
| p.1865 | n52 | p.1864 |

These four are the only reason the rhythm goes from a 2-page step to a 3-page step, at 1789→1792,
1820→1823, 1827→1830 and 1864→1867.

Each of the four takes `box` set in staging, and the second `source` shape when drafted:

    Pediatrics endpoint part2.pdf p.1789 (the explanation box is printed alone on p.1790)

Section 14 needed none of this — every one of its 80 answered pages printed its own box on the same
page. Do not carry section 14's splice config across.

## Explicit page list

`n` is section-global and sequential. `p` is the answered page.

**part-A, n1–n20, pp.1759–1798**

    n1=1759   n2=1761   n3=1763   n4=1765   n5=1767
    n6=1769   n7=1771   n8=1773   n9=1775   n10=1777
    n11=1779  n12=1781  n13=1783  n14=1785  n15=1787
    n16=1789  n17=1792  n18=1794  n19=1796  n20=1798

**part-B, n21–n40, pp.1800–1840**

    n21=1800  n22=1802  n23=1804  n24=1806  n25=1808
    n26=1810  n27=1812  n28=1814  n29=1816  n30=1818
    n31=1820  n32=1823  n33=1825  n34=1827  n35=1830
    n36=1832  n37=1834  n38=1836  n39=1838  n40=1840

**part-C, n41–n60, pp.1842–1881**

    n41=1842  n42=1844  n43=1846  n44=1848  n45=1850
    n46=1852  n47=1854  n48=1856  n49=1858  n50=1860
    n51=1862  n52=1864  n53=1867  n54=1869  n55=1871
    n56=1873  n57=1875  n58=1877  n59=1879  n60=1881

**part-D, n61–n80, pp.1883–1921**

    n61=1883  n62=1885  n63=1887  n64=1889  n65=1891
    n66=1893  n67=1895  n68=1897  n69=1899  n70=1901
    n71=1903  n72=1905  n73=1907  n74=1909  n75=1911
    n76=1913  n77=1915  n78=1917  n79=1919  n80=1921

The quarter boundaries are page-clean: no box page falls on a boundary, and n16/n31/n34/n52 sit
well inside parts A, B and C respectively.

## Still to check when staging opens

- Whether the printed question numbers run 1–80 as they did in section 14, or restart. Read them;
  a printed number is never assumed.
- p.1922 is the first page of section 16 and is outside this range. Section 15's last answered page
  is p.1921 and its twin is p.1920.
