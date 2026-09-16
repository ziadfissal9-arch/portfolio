"use client";

import { useReveal } from "@/hooks";

const STATS = [
  { value: "05", label: "Shipped projects" },
  { value: "100%", label: "Real backends" },
  { value: "2025", label: "Started coding" },
];

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="border-t border-[var(--line)] py-20 sm:py-28">
      <div className="container">
        <div ref={ref} className="reveal grid gap-14 sm:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow mb-5">
              <span className="index-num mr-2">01</span>About
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              I turn ideas into real, working products.
            </h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-[var(--ink-soft)]">
              I started with a certified HTML/CSS/JavaScript program at ITI
              (Information Technology Institute) and have since built and
              shipped several full-stack applications end-to-end: React and
              TypeScript front ends, Node.js/Express backends with MongoDB
              or PostgreSQL, real authentication, and automated tests.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-[var(--ink-soft)]">
              Every project I share has a live demo and a public repository
              — I care about code that&apos;s typed, tested, and actually
              deployed. Currently open to freelance and contract work.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-[var(--line)] self-center border-y border-[var(--line)]">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex items-baseline justify-between py-6">
                <span className="font-mono text-3xl font-bold sm:text-4xl" style={{ color: "var(--accent)" }}>
                  {stat.value}
                </span>
                <span className="text-[13px] text-[var(--ink-mute)]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
