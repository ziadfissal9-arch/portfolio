"use client";

import { useReveal } from "@/hooks";
import { skillGroups } from "@/data";

export default function Skills() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="container">
        <p className="eyebrow">Stack</p>
        <h2 className="section-heading mt-4">What I work with.</h2>
        <div className="rule mt-8" />

        <div ref={ref} className="reveal mt-12 divide-y" style={{ borderColor: "var(--line)" }}>
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="grid gap-3 border-t py-5 sm:grid-cols-[180px_1fr] sm:gap-8 sm:py-6"
              style={{ borderColor: "var(--line)" }}
            >
              <h3
                className="mono text-[12.5px] tracking-wide"
                style={{ color: "var(--ink-mute)" }}
              >
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip">
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
