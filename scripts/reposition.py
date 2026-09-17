"""Drop the e-commerce niche from the positioning copy.

Only the positioning changes (title, profile, hero, metadata, contact copy).
Individual project descriptions keep the word "e-commerce" where it is simply
an accurate description of that project.
"""
import io, sys, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

EDITS = {
    "scripts/cv/cv.html": [
        ('<p class="title">Full-Stack Developer &middot; E-Commerce &amp; Business Web Apps</p>',
         '<p class="title">Full-Stack Developer &middot; React, Next.js &amp; Node.js</p>'),

        ("""        Computer Science graduate and Full-Stack Developer who ships complete e-commerce applications, not
        prototypes. Five production-deployed projects, each with real JWT + bcrypt authentication, a real
        PostgreSQL or MongoDB database, and a server-side checkout that recomputes prices from the database
        instead of trusting the client. I own features end to end: schema, REST API, typed React UI, tests, deploy.""",
         """        Computer Science graduate and Full-Stack Developer who ships complete web applications, not
        prototypes. Five production-deployed projects, each with real JWT + bcrypt authentication, a real
        PostgreSQL or MongoDB database, and server-side logic that validates and recomputes data instead of
        trusting the client. I own features end to end: schema, REST API, typed React UI, tests, deploy."""),

        ("Open to full-stack e-commerce and web application work &mdash; freelance or full-time.",
         "Open to full-stack web application work &mdash; freelance or full-time."),
    ],

    "src/app/layout.tsx": [
        ('title: "Ziad Fissal — Full-Stack Developer for E-Commerce & Web Apps",',
         'title: "Ziad Fissal — Full-Stack Developer",'),
        ('"Full-stack developer building e-commerce stores and business web apps with real databases, real authentication, and real checkout logic. Available for new projects.",',
         '"Full-stack developer building web applications with React, Next.js and Node.js — real databases, real authentication, and real server-side logic. Available for new projects.",'),
        ('"Full-stack developer building e-commerce stores and business web apps with real databases, real authentication, and real checkout logic.",',
         '"Full-stack developer building web applications with React, Next.js and Node.js — real databases, real authentication, and real server-side logic.",'),
    ],

    "src/components/Hero.tsx": [
        ('            I build online stores{" "}', '            I build web apps{" "}'),
        ("""            Full-stack developer specializing in e-commerce and business web
            apps — real databases, real authentication, real checkout logic.
            Not templates, not mockups.""",
         """            Full-stack developer building web applications with React, Next.js
            and Node.js — real databases, real authentication, real server-side
            logic. Not templates, not mockups."""),
    ],

    "src/components/Contact.tsx": [
        ("              Got a store or a web app that needs building? Tell me what it",
         "              Got a web app that needs building? Tell me what it"),
    ],

    "src/data.ts": [
        ('"Every store has real authentication, a real database, and server-side logic that recomputes prices — not hard-coded JSON pretending to be a product catalog.",',
         '"Every project has real authentication, a real database, and server-side logic that validates what it is sent — not hard-coded JSON pretending to be an API.",'),
        ('detail: "We talk through what your store or app actually needs to do — no generic template guessing.",',
         'detail: "We talk through what your app actually needs to do — no generic template guessing.",'),
    ],
}

failed = False
for rel, pairs in EDITS.items():
    path = os.path.join(ROOT, rel)
    s = io.open(path, encoding="utf-8").read()
    done = 0
    for old, new in pairs:
        if old not in s:
            print("  !! NOT FOUND in %s: %s" % (rel, repr(old[:65])))
            failed = True
            continue
        s = s.replace(old, new, 1)
        done += 1
    if done:
        io.open(path, "w", encoding="utf-8", newline="\n").write(s)
    print("%-28s %d/%d applied" % (rel, done, len(pairs)))

sys.exit(1 if failed else 0)
