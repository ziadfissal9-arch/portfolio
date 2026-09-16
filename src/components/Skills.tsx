"use client";

import { useReveal } from "@/hooks";
import { skillGroups } from "@/data";

export default function Skills() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="border-t border-[var(--line)] py-20 sm:py-28">
      <div className="container">
        <p className="eyebrow mb-5">
          <span className="index-num mr-2">03</span>Skills
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Tools I build with
        </h2>

        <div ref={ref} className="reveal mt-10 grid gap-px overflow-hidden border border-[var(--line)] sm:grid-cols-2 lg:grid-cols-4" style={{ background: "var(--line)" }}>
          {skillGroups.map((group) => (
            <div key={group.label} className="p-6" style={{ background: "var(--bg)" }}>
              <h3 className="font-mono text-[12px] font-semibold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-[14.5px] font-medium text-[var(--ink)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
