"""Restructure the CV for job applications seen by HR and ATS.

- PROFILE -> PROFESSIONAL SUMMARY (the label HR and ATS parsers expect)
- Summary now leads with the freelance client work rather than side projects
- Adds an EXPERIENCE section above the projects
- Drops the weakest project (Luminous) to keep the CV on one page
"""
import io, re, sys, os

HERE = os.path.dirname(os.path.abspath(__file__))
p = os.path.join(HERE, "cv.html")
s = io.open(p, encoding="utf-8").read()

if "Freelance Web Developer" in s:
    print("experience section already present - nothing to do")
    sys.exit(0)

# ---------------------------------------------------------------- 1. styles
CSS = """  .job-date { font-size: 11px; font-weight: 700; white-space: nowrap; color: #111827; }
"""
s = s.replace("</style>", CSS + "</style>", 1)

# ------------------------------------------------- 2. section title + summary
s = s.replace(
    '<div class="section-title">Profile</div>',
    '<div class="section-title">Professional Summary</div>', 1)

OLD_SUMMARY = """        Computer Science graduate and Full-Stack Developer who ships complete web applications, not
        prototypes. Five production-deployed projects, each with real JWT + bcrypt authentication, a real
        PostgreSQL or MongoDB database, and server-side logic that validates and recomputes data instead of
        trusting the client. I own features end to end: schema, REST API, typed React UI, tests, deploy."""

NEW_SUMMARY = """        Computer Science graduate and Full-Stack Developer with six months of freelance experience
        delivering client websites end to end. Builds production applications with React, Next.js and Node.js -
        real JWT + bcrypt authentication, a real PostgreSQL or MongoDB database, and server-side logic that
        validates and recomputes data instead of trusting the client. Owns features from schema and REST API
        through typed React UI, tests and deployment."""

if OLD_SUMMARY not in s:
    print("!! summary paragraph not found")
    sys.exit(1)
s = s.replace(OLD_SUMMARY, NEW_SUMMARY, 1)

# ------------------------------------------------------ 3. experience section
EXPERIENCE = """    <div class="section">
      <div class="section-title">Experience</div>

      <div class="project">
        <div class="project-row">
          <span class="project-name">Freelance Web Developer <span class="project-tagline">/ Self-employed, Remote</span></span>
          <span class="job-date">Sep 2025 - Feb 2026</span>
        </div>
        <ul>
          <li>Delivered 5 client websites end to end - business sites, landing pages and an online store - from the initial brief through build, deployment and handover.</li>
          <li>Built responsive, mobile-first interfaces with React and Next.js, including Arabic (RTL) layouts alongside English.</li>
          <li>Worked directly with non-technical clients to turn informal briefs into a clear scope, and shipped each site on the agreed deadline.</li>
        </ul>
      </div>
    </div>

"""

marker = '    <div class="section">\n      <div class="section-title">Selected Projects</div>'
if marker not in s:
    print("!! could not locate the Selected Projects section")
    sys.exit(1)
s = s.replace(marker, EXPERIENCE + marker, 1)

# ------------------------------------------- 4. drop Luminous to stay on 1 page
m = re.search(
    r'\n      <div class="project">\s*<div class="project-row">\s*'
    r'<span class="project-name">Luminous.*?</div>\s*</div>',
    s, re.S)
if not m:
    print("!! Luminous project block not found")
    sys.exit(1)
s = s[:m.start()] + s[m.end():]

io.open(p, "w", encoding="utf-8", newline="\n").write(s)

print("OK:")
print("  - Profile -> Professional Summary")
print("  - summary now leads with the freelance experience")
print("  - Experience section added above Selected Projects")
print("  - Luminous removed (%d projects remain)" % s.count('<div class="project-row">'))
