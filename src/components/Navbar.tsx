"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // lock scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        borderColor: "var(--line)",
        background: "color-mix(in srgb, var(--bg) 82%, transparent)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="container flex h-14 items-center justify-between">
        <a href="#top" className="mono text-[13.5px] font-medium tracking-tight">
          ziad<span style={{ color: "var(--ink-mute)" }}>.</span>fissal
        </a>

        <nav className="hidden items-center gap-8 sm:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/cv/Ziad-Fissal-CV.pdf"
            download
            className="btn btn-ghost !h-9 !px-3.5 !text-[13px]"
          >
            <Download size={14} />
            CV
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-lg border sm:hidden"
            style={{ borderColor: "var(--line-hi)", color: "var(--ink-soft)" }}
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {/* mobile sheet */}
      {open && (
        <div
          className="border-t sm:hidden"
          style={{ borderColor: "var(--line)", background: "var(--bg)" }}
        >
          <nav className="container flex flex-col py-2">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b py-3.5 text-[15px] last:border-b-0"
                style={{ borderColor: "var(--line)", color: "var(--ink-soft)" }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
