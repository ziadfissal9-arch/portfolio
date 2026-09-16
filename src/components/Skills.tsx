"use client";

import { useReveal } from "@/hooks";
import { skillGroups } from "@/data";

export default function Skills() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="border-t border-[var(--line)] py-20 sm:py-24">
      <div className="container">
        <p className="eyebrow mb-4">Skills</p>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Technical skills
        </h2>

        <div ref={ref} className="reveal mt-10 flex flex-col gap-4">
          {skillGroups.map((group) => (
            <div key={group.label} className="flex flex-col gap-2 border-b border-[var(--line)] pb-4 last:border-b-0 sm:flex-row sm:items-center sm:gap-6">
              <span className="w-[110px] shrink-0 text-[13px] font-semibold text-[var(--ink-soft)]">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
