import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="container pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="grid items-center gap-12 sm:grid-cols-[1fr_auto]">
        <div>
          <p className="eyebrow mb-6">Available for freelance work</p>

          <h1 className="text-[2.4rem] font-extrabold leading-[1.08] tracking-tight sm:text-[3.2rem]">
            Hi, I&apos;m Ziad —
            <br />
            <span style={{ color: "var(--accent)" }}>Front-End Developer</span>
            <br />
            building with React &amp; Next.js.
          </h1>

          <p className="mt-6 max-w-[540px] text-[17px] leading-relaxed text-[var(--ink-soft)]">
            Computer Science graduate focused on building responsive, modern
            web applications with React, Next.js and TypeScript — clean UI,
            reusable components, and real REST API integration.
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
          <div className="relative h-[168px] w-[168px] overflow-hidden rounded-2xl border border-[var(--line)] shadow-sm sm:h-[210px] sm:w-[210px]">
            <Image
              src="/images/ziad.png"
              alt="Ziad Fissal"
              fill
              sizes="210px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
