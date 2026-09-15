"use client";

import { useReveal } from "@/hooks";
import { skillGroups } from "@/data";

export default function Skills() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="border-t border-[var(--line)] py-20 sm:py-24">
      <div className="container">
        <p className="pill mb-4">Skills</p>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Tools I build with
        </h2>

        <div ref={ref} className="reveal mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.label} className="card p-6">
              <h3 className="text-[13px] font-semibold uppercase tracking-wide text-[var(--ink-mute)]">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-[15px] font-medium">
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
