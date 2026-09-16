import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";

const STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "Redux",
  "Tailwind CSS",
];

export default function Hero() {
  const track = [...STACK, ...STACK];

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container pt-20 pb-16 sm:pt-28">
        <div className="grid gap-10 sm:grid-cols-[1fr_220px] sm:items-start">
          <div>
            <p className="eyebrow mb-7">Available for freelance work</p>

            <h1 className="text-[3rem] font-extrabold leading-[0.98] tracking-tight sm:text-[5.2rem]">
              Ziad
              <br />
              Fissal
              <span style={{ color: "var(--accent)" }}>.</span>
            </h1>

            <p className="mt-7 max-w-[520px] text-[17px] leading-relaxed text-[var(--ink-soft)]">
              Full-stack developer building fast, real products with React,
              Next.js, TypeScript and Node.js — for clients and my own
              projects. Design, backend, tests, deployment: all of it.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#work" className="btn btn-primary">
                View my work
                <ArrowUpRight size={16} />
              </a>
              <a href="/cv/Ziad-Fissal-CV.pdf" download className="btn btn-outline">
                <Download size={16} />
                Download CV
              </a>
            </div>
          </div>

          <div className="hidden justify-self-end sm:block">
            <div className="relative h-[220px] w-[180px] rotate-2 border border-[var(--line)] bg-[var(--paper)] p-2 transition-transform duration-300 hover:rotate-0">
              <div className="relative h-full w-full overflow-hidden grayscale hover:grayscale-0 transition-[filter] duration-300">
                <Image
                  src="/images/ziad.png"
                  alt="Ziad Fissal"
                  fill
                  sizes="180px"
                  className="object-cover"
                  priority
                />
              </div>
              <span
                className="absolute -bottom-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold"
                style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
              >
                ZF
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-[var(--line)] py-4" style={{ background: "var(--paper)" }}>
        <div className="marquee-track font-mono text-[13px] text-[var(--ink-mute)]">
          {track.map((item, i) => (
            <span key={i} className="flex items-center px-6 whitespace-nowrap">
              {item}
              <span className="ml-6" style={{ color: "var(--accent)" }}>
                ▹
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
