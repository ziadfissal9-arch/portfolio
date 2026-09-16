"use client";

import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks";
import { projects } from "@/data";
import type { Project } from "@/types";
import { GithubIcon } from "@/components/BrandIcons";

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="reveal card group grid gap-5 border-b border-[var(--line)] p-6 last:border-b-0 sm:grid-cols-[60px_1fr_auto] sm:items-center sm:gap-8 sm:p-8"
      style={{ borderRadius: 0 }}
    >
      <span className="index-num hidden sm:block">{String(index + 1).padStart(2, "0")}</span>

      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-bold transition-colors group-hover:text-[var(--accent)]">
            {project.name}
          </h3>
          {project.featured && <span className="tag" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>Featured</span>}
        </div>
        <p className="mt-1 text-[13.5px] text-[var(--ink-mute)]">{project.tagline}</p>
        <p className="mt-3 max-w-[560px] text-[14.5px] leading-relaxed text-[var(--ink-soft)]">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 sm:flex-col sm:items-stretch">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary !py-2.5 !px-4 justify-center text-[13.5px]"
        >
          Live demo
          <ArrowUpRight size={14} />
        </a>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name} source code on GitHub`}
          className="btn btn-outline !py-2.5 !px-4 justify-center text-[13.5px]"
        >
          <GithubIcon size={14} />
          Code
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="border-t border-[var(--line)] py-20 sm:py-28">
      <div className="container">
        <p className="eyebrow mb-5">
          <span className="index-num mr-2">02</span>Work
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Selected projects
        </h2>
        <p className="mt-3 max-w-[560px] text-[15px] text-[var(--ink-soft)]">
          Five full-stack builds, each deployed live with a public
          repository — real auth, real databases, real tests.
        </p>

        <div className="mt-10 border border-[var(--line)]">
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
