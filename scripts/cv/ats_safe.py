"""Replace typographic separators that ATS text extractors fail to decode.

Chrome embeds a subset font whose ToUnicode map does not cover the middot and
em-dash reliably, so extractors render them as U+FFFD. HR systems read the
extracted text, not the rendered page, so the CV uses ASCII separators instead.
"""
import io, sys, os

HERE = os.path.dirname(os.path.abspath(__file__))
p = os.path.join(HERE, "cv.html")
s = io.open(p, encoding="utf-8").read()
before = s

# separator between inline items -> pipe
s = s.replace("&nbsp;&middot;&nbsp;", " | ")
s = s.replace(" &middot; ", " | ")
s = s.replace("&middot;", "|")

# em / en dashes inside sentences -> plain hyphen
s = s.replace(" &mdash; ", " - ")
s = s.replace("&mdash;", "-")
s = s.replace(" &ndash; ", " - ")
s = s.replace("&ndash;", "-")

if s == before:
    print("nothing to change - already ATS-safe")
    sys.exit(0)

io.open(p, "w", encoding="utf-8", newline="\n").write(s)

left = sum(s.count(e) for e in ("&middot;", "&mdash;", "&ndash;"))
print("ATS-safe separators applied; %d typographic entities remaining" % left)
