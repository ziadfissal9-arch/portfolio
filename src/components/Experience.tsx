"use client";

import { useReveal } from "@/hooks";
import { roles, education } from "@/data";

export default function Experience() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="experience"
      className="border-t py-20 sm:py-28"
      style={{ borderColor: "var(--line)", background: "var(--bg-soft)" }}
    >
      <div className="container">
        <p className="eyebrow">Experience</p>
        <h2 className="section-heading mt-4">Where I&apos;ve worked.</h2>
        <div className="rule mt-8" />

        <div ref={ref} className="reveal mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div className="space-y-10">
            {roles.map((role) => (
              <div key={role.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-[17px] font-semibold">{role.title}</h3>
                  <span
                    className="mono text-[12px]"
                    style={{ color: "var(--ink-mute)" }}
                  >
                    {role.period}
                  </span>
                </div>
                <p
                  className="mt-1 text-[13.5px]"
                  style={{ color: "var(--ink-mute)" }}
                >
                  {role.org}
                </p>

                <ul className="mt-5 space-y-3">
                  {role.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-[14px] leading-[1.7]"
                      style={{ color: "var(--ink-soft)" }}
                    >
                      <span
                        className="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full"
                        style={{ background: "var(--accent)" }}
                        aria-hidden="true"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h3
              className="eyebrow"
              style={{ color: "var(--ink-mute)" }}
            >
              Education
            </h3>
            <div className="mt-6 space-y-6">
              {education.map((e) => (
                <div key={e.title}>
                  <p className="text-[14.5px] font-medium">{e.title}</p>
                  <p
                    className="mt-1 text-[13px]"
                    style={{ color: "var(--ink-mute)" }}
                  >
                    {e.org}
                  </p>
                  <p
                    className="mono mt-0.5 text-[12px]"
                    style={{ color: "var(--ink-mute)" }}
                  >
                    {e.period}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="eyebrow mt-10">Languages</h3>
            <div className="mt-5 space-y-2.5">
              <div className="flex justify-between text-[13.5px]">
                <span style={{ color: "var(--ink-soft)" }}>Arabic</span>
                <span style={{ color: "var(--ink-mute)" }}>Native</span>
              </div>
              <div className="flex justify-between text-[13.5px]">
                <span style={{ color: "var(--ink-soft)" }}>English</span>
                <span style={{ color: "var(--ink-mute)" }}>B2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
