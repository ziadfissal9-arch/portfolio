import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

const STACK = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "MongoDB"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-bg" aria-hidden="true" />

      <div className="container relative pt-20 pb-20 sm:pt-28 sm:pb-24">
        <div className="flex items-center gap-2.5">
          <span className="status-dot" aria-hidden="true" />
          <span className="eyebrow">Available for work</span>
        </div>

        <div className="mt-8 flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between sm:gap-16">
          <div className="max-w-[620px]">
            <h1 className="text-[2.2rem] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[2.9rem]">
              Ziad Fissal
            </h1>
            <p
              className="mono mt-3 text-[14px]"
              style={{ color: "var(--accent)" }}
            >
              Full-Stack Developer
            </p>

            <p
              className="mt-6 text-[16px] leading-[1.7]"
              style={{ color: "var(--ink-soft)" }}
            >
              I build web applications that hold up in production — real
              databases, real authentication, and server-side logic that
              validates what it is sent instead of trusting the client. Five are
              deployed and open source; the code is there to read.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="btn btn-primary">
                View work
                <ArrowDown size={15} />
              </a>
              <a
                href="https://github.com/ziadfissal9-arch"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <GithubIcon size={15} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ziad-fissal-2a4530365"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <LinkedinIcon size={15} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="shrink-0">
            <div
              className="relative h-[120px] w-[120px] overflow-hidden rounded-xl border sm:h-[150px] sm:w-[150px]"
              style={{ borderColor: "var(--line-hi)" }}
            >
              <Image
                src="/images/ziad.png"
                alt="Ziad Fissal"
                fill
                sizes="150px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-2">
          {STACK.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
