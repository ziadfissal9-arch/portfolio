"""Add inline SVG icons to every link and contact line in cv.html.

Icons are inlined (never fetched), so they render identically in headless
Chrome when the PDF is generated. Safe to re-run: it no-ops if already applied.
"""
import io, re, sys, os

HERE = os.path.dirname(os.path.abspath(__file__))
p = os.path.join(HERE, "cv.html")
s = io.open(p, encoding="utf-8").read()

if ".ic {" in s:
    print("icons already applied - nothing to do")
    sys.exit(0)

S = '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">'
F = '<svg class="ic" viewBox="0 0 24 24" fill="currentColor">'

GLOBE = S + '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z"/></svg>'
LINK = S + '<path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>'
MAIL = S + '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/></svg>'
PHONE = S + '<path d="M6.5 3h3L11 7 9 8.5a12 12 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4.5 5a2 2 0 0 1 2-2Z"/></svg>'
PIN = S + '<path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"/><circle cx="12" cy="10" r="2.4"/></svg>'

GITHUB = F + '<path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.2.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>'
LINKEDIN = F + '<path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.56V9h3.55v11.45Z"/></svg>'

CSS = """  .ic { width: 10.5px; height: 10.5px; vertical-align: -1.3px; }
  .social { line-height: 1.5; }
  .social .ic { margin-right: 4px; }
  .meta .ic { margin-right: 5px; opacity: 0.7; }
  .project-links { line-height: 1.4; }
  .project-links .ic { width: 9.5px; height: 9.5px; vertical-align: -1px; margin-right: 3px; }
"""

pairs = [
    ("</style>", CSS + "</style>"),

    # --- header: portfolio / github / linkedin
    ('<a href="https://ziad-fissal.vercel.app">ziad-fissal.vercel.app</a>',
     '<a href="https://ziad-fissal.vercel.app">' + GLOBE + 'ziad-fissal.vercel.app</a>'),
    ('<a href="https://github.com/ziadfissal9-arch">github.com/ziadfissal9-arch</a>',
     '<a href="https://github.com/ziadfissal9-arch">' + GITHUB + 'github.com/ziadfissal9-arch</a>'),
    ('<a href="https://www.linkedin.com/in/ziad-fissal-2a4530365">LinkedIn</a>',
     '<a href="https://www.linkedin.com/in/ziad-fissal-2a4530365">' + LINKEDIN + 'LinkedIn</a>'),

    # --- contact meta
    ("<div>ziadfissal9@gmail.com</div>", "<div>" + MAIL + "ziadfissal9@gmail.com</div>"),
    ("<div>+20 115 728 5971</div>", "<div>" + PHONE + "+20 115 728 5971</div>"),
    ("<div>Damietta, Egypt</div>", "<div>" + PIN + "Damietta, Egypt</div>"),
]

missing = [old[:55] for old, _ in pairs if old not in s]
if missing:
    print("!! NOT FOUND:")
    for m in missing:
        print("   ", repr(m))
    sys.exit(1)

for old, new in pairs:
    s = s.replace(old, new, 1)

# --- project links: "Live Demo" gets an external-link arrow, "Code" the GitHub mark.
# The icon sits OUTSIDE the <a> so the underline covers the label text only.
n_demo = s.count(">Live Demo</a>")
n_code = s.count(">Code</a>")
s = re.sub(r'<a href="(https://[^"]+)">Live Demo</a>',
           lambda m: LINK + '<a href="' + m.group(1) + '">Live Demo</a>', s)
s = re.sub(r'<a href="(https://[^"]+)">Code</a>',
           lambda m: GITHUB + '<a href="' + m.group(1) + '">Code</a>', s)

io.open(p, "w", encoding="utf-8", newline="\n").write(s)
print("OK - header + contact icons added; %d Live Demo and %d Code links iconed" % (n_demo, n_code))
