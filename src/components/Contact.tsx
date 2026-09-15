import { Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

const EMAIL = "ziadfissal9@gmail.com";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="border-t border-[var(--line)] py-20 sm:py-24">
      <div className="container">
        <div className="card flex flex-col items-start gap-8 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div>
            <p className="pill mb-4">Contact</p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Let&apos;s work together.
            </h2>
            <p className="mt-3 max-w-[440px] text-[15px] text-[var(--ink-soft)]">
              Have a project in mind or an open role? I&apos;m available for
              freelance and contract work — reach out and let&apos;s talk.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            <a href={`mailto:${EMAIL}`} className="btn btn-primary w-full justify-center sm:w-auto">
              <Mail size={16} />
              {EMAIL}
            </a>
            <div className="flex w-full gap-3 sm:w-auto">
              <a
                href="https://github.com/ziadfissal9-arch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="btn btn-outline flex-1 justify-center sm:flex-none"
              >
                <GithubIcon size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ziad-fissal-2a4530365"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="btn btn-outline flex-1 justify-center sm:flex-none"
              >
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-10 flex flex-col items-center gap-4 border-t border-[var(--line)] pt-8 text-[13px] text-[var(--ink-mute)] sm:flex-row sm:justify-between">
        <span>&copy; {year} Ziad Fissal. All rights reserved.</span>
        <a href="/cv/Ziad-Fissal-CV.pdf" download className="inline-flex items-center gap-1.5 font-medium text-[var(--ink)]">
          <Download size={14} />
          Download CV
        </a>
      </div>
    </section>
  );
}
