"use client";

import { useReveal } from "@/hooks";

const STATS = [
  { value: "5", label: "Shipped projects" },
  { value: "100%", label: "Real backends" },
  { value: "2026", label: "CS graduate" },
];

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="border-t border-[var(--line)] py-20 sm:py-24">
      <div className="container">
        <div ref={ref} className="reveal grid gap-12 sm:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow mb-4">About</p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Computer Science graduate building real products.
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-[var(--ink-soft)]">
              I&apos;m a Front-End Developer focused on building responsive,
              modern web applications with React, Next.js and TypeScript.
              Skilled in reusable component architecture, state management,
              REST API integration, and Node.js fundamentals — with a strong
              focus on clean UI and maintainable code.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-[var(--ink-soft)]">
              Every project I share has a live demo and a public repository.
              Currently open to freelance, contract, and junior front-end
              opportunities.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 self-center sm:gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="card p-5 text-center sm:p-6">
                <div className="text-2xl font-bold sm:text-3xl" style={{ color: "var(--accent)" }}>
                  {stat.value}
                </div>
                <div className="mt-1 text-[12.5px] text-[var(--ink-mute)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
