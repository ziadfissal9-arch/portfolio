"use client";

import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks";
import { projects } from "@/data";
import type { Project } from "@/types";
import { GithubIcon } from "@/components/BrandIcons";

function ProjectCard({ project }: { project: Project }) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="reveal card flex flex-col p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold">{project.name}</h3>
          <p className="mt-1 text-[13.5px] text-[var(--ink-mute)]">{project.tagline}</p>
        </div>
        {project.featured && <span className="pill shrink-0">Featured</span>}
      </div>

      <p className="mt-4 flex-1 text-[14.5px] leading-relaxed text-[var(--ink-soft)]">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary !py-2.5 !px-4 text-[13.5px]"
        >
          Live demo
          <ArrowUpRight size={14} />
        </a>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name} source code on GitHub`}
          className="btn btn-outline !py-2.5 !px-4 text-[13.5px]"
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
        <p className="pill mb-4">Work</p>
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
