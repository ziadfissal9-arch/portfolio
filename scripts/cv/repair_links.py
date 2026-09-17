"""Repair the two anchors damaged when the link icons were moved outside <a>.

1. The header portfolio link lost its opening <a>, leaving a stray </a>.
2. Dar Al-Asalah's "Live Demo" ended up nested inside its own anchor and
   pointing at the portfolio URL instead of the store.
"""
import io, re, sys, os

HERE = os.path.dirname(os.path.abspath(__file__))
p = os.path.join(HERE, "cv.html")
s = io.open(p, encoding="utf-8").read()
before = s

# --- 1. restore the opening <a> on the header portfolio link
if '<p class="social"><a href=' not in s:
    s = s.replace(
        '<p class="social">',
        '<p class="social"><a href="https://ziad-fissal.vercel.app">',
        1,
    )

# --- 2. un-nest Dar Al-Asalah's Live Demo and point it back at the store
s, n = re.subn(
    r'<a href="https://dar-al-asalah\.vercel\.app">(<svg class="ic".*?</svg>)'
    r'<a href="https://ziad-fissal\.vercel\.app">Live Demo</a>',
    lambda m: m.group(1) + '<a href="https://dar-al-asalah.vercel.app">Live Demo</a>',
    s,
    flags=re.S,
)

if s == before:
    print("nothing to repair")
    sys.exit(0)

# --- sanity: anchors must balance and nothing may nest
opens = len(re.findall(r"<a\s+href=", s))
closes = len(re.findall(r"</a>", s))
nested = len(re.findall(r"<a\s+href=[^>]*>(?:(?!</a>).)*?<a\s+href=", s, re.S))
if opens != closes or nested:
    print("!! still broken - opens=%d closes=%d nested=%d" % (opens, closes, nested))
    sys.exit(1)

io.open(p, "w", encoding="utf-8", newline="\n").write(s)
print("repaired: header anchor restored, %d nested Live Demo fixed" % n)
print("anchors balanced: %d open / %d close, 0 nested" % (opens, closes))
