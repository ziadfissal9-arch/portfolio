"""Verify the generated CV PDF: one page, and every link clickable and correct.

Run after regenerating the PDF. Exits non-zero if anything is wrong, so a bad
CV can never be shipped unnoticed.
"""
import io, re, sys, os

HERE = os.path.dirname(os.path.abspath(__file__))
PDF = os.path.join(HERE, "..", "..", "public", "cv", "Ziad-Fissal-CV.pdf")

# label -> the URL that label must point at
EXPECTED = {
    "portfolio":            "https://ziad-fissal.vercel.app/",
    "github profile":       "https://github.com/ziadfissal9-arch",
    "linkedin":             "https://www.linkedin.com/in/ziad-fissal-2a4530365",
    "dar-al-asalah demo":   "https://dar-al-asalah.vercel.app/",
    "dar-al-asalah code":   "https://github.com/ziadfissal9-arch/dar-al-asalah",
    "auratech demo":        "https://auratech-store.vercel.app/",
    "auratech code":        "https://github.com/ziadfissal9-arch/auratech-store",
    "nexacommerce demo":    "https://nexacommerce-alpha.vercel.app/",
    "nexacommerce code":    "https://github.com/ziadfissal9-arch/NexaCommerce",
    "industryos demo":      "https://industryos-dashboard.vercel.app/",
    "industryos code":      "https://github.com/ziadfissal9-arch/industryos-dashboard",
}

MIN_W, MIN_H = 12.0, 6.0  # a clickable area smaller than this is effectively dead

d = io.open(PDF, "rb").read()
errors = []

pages = len(re.findall(rb"/Type\s*/Page[^s]", d))
if pages != 1:
    errors.append("PDF is %d pages - the CV must be exactly 1" % pages)

# collect every link annotation with its clickable rectangle
found = {}
for blk, uri in re.findall(rb"/Subtype\s*/Link(.{0,400}?)/URI\s*\(([^)]*)\)", d, re.S):
    url = uri.decode("latin-1")
    m = re.search(rb"/Rect\s*\[\s*([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)", blk)
    if not m:
        errors.append("%s has no clickable rectangle" % url)
        continue
    x0, y0, x1, y1 = [float(g) for g in m.groups()]
    w, h = x1 - x0, y1 - y0
    # keep the largest rect per URL (an icon may add a second, tiny one)
    if url not in found or w * h > found[url][0] * found[url][1]:
        found[url] = (w, h)

for label, url in sorted(EXPECTED.items()):
    if url not in found:
        errors.append("MISSING: %-22s should link to %s" % (label, url))
        continue
    w, h = found[url]
    if w < MIN_W or h < MIN_H:
        errors.append("TOO SMALL to click: %-22s %.1f x %.1f pt (%s)" % (label, w, h, url))

extra = set(found) - set(EXPECTED.values())
for url in sorted(extra):
    errors.append("UNEXPECTED link in CV: %s" % url)

print("Pages: %d | link annotations: %d | expected links: %d"
      % (pages, len(found), len(EXPECTED)))

if errors:
    print("\nFAILED:")
    for e in errors:
        print("  -", e)
    sys.exit(1)

print("\nAll %d links present, correct and clickable. CV is good to ship." % len(EXPECTED))
