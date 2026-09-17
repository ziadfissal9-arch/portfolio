"""Trim wordy bullets so the CV fits one page again after the Experience section.

Each trimmed bullet drops a wrapped line without losing a concrete fact.
"""
import io, sys, os

HERE = os.path.dirname(os.path.abspath(__file__))
p = os.path.join(HERE, "cv.html")
s = io.open(p, encoding="utf-8").read()

pairs = [
    ("Built a checkout that recomputes order totals server-side from the database, blocking client-side price tampering; added a role-gated admin dashboard for products and orders.",
     "Built a checkout that recomputes order totals server-side, blocking client-side price tampering, plus a role-gated admin dashboard for products and orders."),

    ("Added server-resolved search, filtering and sorting via shareable query params, a persistent cart and route code splitting; covered by a Vitest suite.",
     "Added server-resolved search, filtering and sorting, a persistent cart and route code splitting; covered by a Vitest suite."),

    ("Built a marketplace as a TypeScript monorepo - Next.js 16 storefront, Express REST API and MongoDB Atlas - deployed end to end on Vercel Functions.",
     "Built a marketplace as a TypeScript monorepo - Next.js 16 storefront, Express REST API and MongoDB Atlas - on Vercel Functions."),

    ("Hardened it for production with rate limiting, security headers and CORS, verified by dedicated security and production-config test suites.",
     "Hardened it for production with rate limiting, security headers and CORS, verified by dedicated security test suites."),

    ("Visualised operational KPIs through interactive area, radar, bar and donut charts, with code-split routes and a mobile-tested layout.",
     "Visualised operational KPIs through interactive area, radar, bar and donut charts, with code-split routes."),

    ("Worked directly with non-technical clients to turn informal briefs into a clear scope, and shipped each site on the agreed deadline.",
     "Worked directly with non-technical clients to turn informal briefs into clear scope, and shipped on the agreed deadline."),

    # a little extra breathing room from spacing
    (".section { margin-top: 10px; }", ".section { margin-top: 9px; }"),
    (".project { margin-top: 7px; }", ".project { margin-top: 6px; }"),
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
print("OK -", len(pairs), "trims applied")
