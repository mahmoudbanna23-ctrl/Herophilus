import zipfile, re, glob, html, os, sys
NL = chr(10)
d = sys.argv[1]
out = sys.argv[2]
files = sorted(glob.glob(os.path.join(d, "*.docx")))
n = 0
for f in files:
    try:
        xml = zipfile.ZipFile(f).read("word/document.xml").decode("utf8")
    except Exception as e:
        print("FAIL", os.path.basename(f), e)
        continue
    xml = xml.replace("</w:p>", NL)
    xml = re.sub("<[^>]+>", "", xml)
    txt = html.unescape(xml)
    base = os.path.splitext(os.path.basename(f))[0]
    open(os.path.join(out, base + ".txt"), "w", encoding="utf8").write(txt)
    n += 1
print("extracted", n, "of", len(files))
