"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { useReveal } from "@/hooks";
import { projects } from "@/data";
import type { Project } from "@/types";

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const ref = useReveal<HTMLElement>();
  const flip = index % 2 === 1;

  return (
    <article
      ref={ref}
      className="reveal grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
    >
      {/* screenshot */}
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`shot ${flip ? "lg:order-2" : ""}`}
        aria-label={`Open the live ${project.name} site`}
      >
        <Image
          src={project.image}
          alt={`${project.name} — live site`}
          width={1440}
          height={900}
          sizes="(min-width: 1024px) 520px, 100vw"
          className="w-full"
        />
      </a>

      {/* detail */}
      <div className={flip ? "lg:order-1" : ""}>
        <span className="mono text-[11.5px]" style={{ color: "var(--ink-mute)" }}>
          {String(index + 1).padStart(2, "0")}
        </span>

        <h3 className="mt-2 text-[22px] font-semibold tracking-[-0.02em]">
          {project.name}
        </h3>
        <p className="mt-1 text-[14px]" style={{ color: "var(--ink-mute)" }}>
          {project.tagline}
        </p>

        <p
          className="mt-5 text-[14.5px] leading-[1.7]"
          style={{ color: "var(--ink-soft)" }}
        >
          {project.summary}
        </p>

        <ul className="mt-5 space-y-2.5">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="flex gap-3 text-[13.5px] leading-[1.6]"
              style={{ color: "var(--ink-soft)" }}
            >
              <span
                className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full"
                style={{ background: "var(--accent)" }}
                aria-hidden="true"
              />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-7 flex items-center gap-6">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            style={{ color: "var(--ink)" }}
          >
            Live site
            <ArrowUpRight size={15} />
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <GithubIcon size={15} />
            Source
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-20 sm:py-28">
      <div className="container">
        <p className="eyebrow">Selected work</p>
        <h2 className="section-heading mt-4 max-w-[620px]">
          Five applications, deployed and open source.
        </h2>
        <div className="rule mt-8" />

        <div className="mt-16 space-y-24 sm:space-y-28">
          {projects.map((p, i) => (
            <ProjectRow key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
