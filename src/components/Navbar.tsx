import Link from "next/link";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="#top" className="text-[15px] font-bold tracking-tight">
          Ziad Fissal
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-[var(--ink-soft)] sm:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="link-underline transition-colors hover:text-[var(--ink)]">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="/cv/Ziad-Fissal-CV.pdf" download className="btn btn-primary !py-2 !px-4 text-[13px]">
          Resume
        </a>
      </div>
    </header>
  );
}
