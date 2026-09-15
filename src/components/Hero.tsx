import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="container pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="grid items-center gap-12 sm:grid-cols-[1fr_auto]">
        <div>
          <p className="pill mb-6">Available for freelance work</p>

          <h1 className="text-[2.4rem] font-bold leading-[1.08] tracking-tight sm:text-[3.4rem]">
            Hi, I&apos;m Ziad —
            <br />
            I build <span style={{ color: "var(--accent)" }}>full-stack</span> web
            apps that ship.
          </h1>

          <p className="mt-6 max-w-[540px] text-[17px] leading-relaxed text-[var(--ink-soft)]">
            Full-stack developer working with React, Next.js, TypeScript and
            Node.js. I design, build, test and deploy real products — not
            mockups — for clients and my own projects.
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

        <div className="justify-self-center sm:justify-self-end">
          <div
            className="relative h-[168px] w-[168px] overflow-hidden rounded-full border-4 border-[var(--paper)] shadow-[var(--shadow-hover)] sm:h-[220px] sm:w-[220px]"
            style={{ boxShadow: "0 0 0 1px var(--line), var(--shadow-hover)" }}
          >
            <Image
              src="/images/ziad.png"
              alt="Ziad Fissal"
              fill
              sizes="220px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
