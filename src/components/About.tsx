"use client";

import { useReveal } from "@/hooks";

const STATS = [
  { value: "5", label: "Shipped projects" },
  { value: "100%", label: "Real backends" },
  { value: "2025", label: "Started coding" },
];

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="border-t border-[var(--line)] py-20 sm:py-24">
      <div className="container">
        <div ref={ref} className="reveal grid gap-12 sm:grid-cols-[1fr_1fr]">
          <div>
            <p className="pill mb-4">About</p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              I turn ideas into real, working products.
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-[var(--ink-soft)]">
              I started with a certified HTML/CSS/JavaScript program at ITI
              (Information Technology Institute) and have since built and
              shipped several full-stack applications end-to-end: React and
              TypeScript front ends, Node.js/Express backends with MongoDB
              or PostgreSQL, real authentication, and automated tests.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-[var(--ink-soft)]">
              Every project I share has a live demo and a public repository —
              I care about code that&apos;s typed, tested, and actually
              deployed. Currently open to freelance and contract work.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 self-center sm:gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="card p-5 text-center sm:p-6">
                <div className="text-2xl font-bold sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-[12.5px] text-[var(--ink-mute)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
