"use client";

import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks";
import { projects } from "@/data";
import type { Project } from "@/types";
import { GithubIcon } from "@/components/BrandIcons";

function ProjectCard({ project }: { project: Project }) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="reveal card p-6 sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <span className="text-lg font-bold">{project.name}</span>{" "}
          <span className="text-[14px] text-[var(--ink-mute)]">/ {project.tagline}</span>
        </div>
        {project.featured && <span className="pill" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>Featured</span>}
      </div>

      <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--ink-soft)]">
        {project.description}
      </p>

      <p className="mt-4 text-[13px]">
        <span className="font-semibold text-[var(--ink)]">Tech Stack: </span>
        <span className="font-medium" style={{ color: "var(--accent)" }}>
          {project.tech.join(" · ")}
        </span>
      </p>

      <div className="mt-5 flex items-center gap-5 text-[13.5px] font-semibold">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline inline-flex items-center gap-1.5"
          style={{ color: "var(--accent)" }}
        >
          Live Demo
          <ArrowUpRight size={14} />
        </a>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name} source code on GitHub`}
          className="link-underline inline-flex items-center gap-1.5"
          style={{ color: "var(--accent)" }}
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
    <section id="work" className="border-t border-[var(--line)] py-20 sm:py-24">
      <div className="container">
        <p className="eyebrow mb-4">Work</p>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Selected projects
        </h2>
        <p className="mt-3 max-w-[560px] text-[15px] text-[var(--ink-soft)]">
          Five full-stack builds, each deployed live with a public
          repository — real auth, real databases, real tests.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
