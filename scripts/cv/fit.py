"""Tighten cv.html spacing so the CV fits on a single A4 page."""
import io, sys, os

HERE = os.path.dirname(os.path.abspath(__file__))
p = os.path.join(HERE, "cv.html")
s = io.open(p, encoding="utf-8").read()

pairs = [
    ("padding: 9mm 19mm 3mm;", "padding: 7mm 16mm 3mm;"),
    (".section { margin-top: 13px; }", ".section { margin-top: 10px; }"),
    ("padding-bottom: 4px;\n    margin-bottom: 9px;", "padding-bottom: 3px;\n    margin-bottom: 6px;"),
    (".profile { font-size: 12.5px; line-height: 1.65; margin: 0; color: #334155; }",
     ".profile { font-size: 12.3px; line-height: 1.5; margin: 0; color: #334155; }"),
    ("row-gap: 8px;", "row-gap: 5px;"),
    (".tech-stack { font-size: 11.5px; margin-top: 5px; color: #0f172a; }",
     ".tech-stack { font-size: 11.3px; margin-top: 3px; color: #0f172a; }"),
    (".project ul { margin: 3px 0 0; padding-left: 16px; font-size: 11.6px; line-height: 1.38; color: #334155; }",
     ".project ul { margin: 3px 0 0; padding-left: 16px; font-size: 11.5px; line-height: 1.34; color: #334155; }"),
    ('<div class="section-title" style="margin-top:9px;">Certifications</div>',
     '<div class="section-title" style="margin-top:7px;">Certifications</div>'),
    (".lang-row { display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 6px; }",
     ".lang-row { display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 4px; }"),
    (".footer-note {\n    margin-top: 8px;", ".footer-note {\n    margin-top: 6px;"),
]

missing = [old[:60] for old, _ in pairs if old not in s]
if missing:
    print("!! NOT FOUND:")
    for m in missing:
        print("   ", repr(m))
    sys.exit(1)

for old, new in pairs:
    s = s.replace(old, new, 1)

io.open(p, "w", encoding="utf-8", newline="\n").write(s)
print("OK -", len(pairs), "spacing rules tightened")
