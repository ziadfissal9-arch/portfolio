import { Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

const EMAIL = "ziadfissal9@gmail.com";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="border-t border-[var(--line)] py-20 sm:py-28">
      <div className="container">
        <p className="eyebrow mb-5">
          <span className="index-num mr-2">04</span>Contact
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
          Let&apos;s work
          <br />
          together.
        </h2>
        <p className="mt-5 max-w-[440px] text-[15px] text-[var(--ink-soft)]">
          Have a project in mind or an open role? I&apos;m available for
          freelance and contract work — reach out and let&apos;s talk.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a href={`mailto:${EMAIL}`} className="btn btn-primary">
            <Mail size={16} />
            {EMAIL}
          </a>
          <a
            href="https://github.com/ziadfissal9-arch"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="btn btn-outline"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ziad-fissal-2a4530365"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="btn btn-outline"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="container mt-14 flex flex-col items-center gap-4 border-t border-[var(--line)] pt-8 text-[13px] text-[var(--ink-mute)] sm:flex-row sm:justify-between">
        <span>&copy; {year} Ziad Fissal. All rights reserved.</span>
        <a href="/cv/Ziad-Fissal-CV.pdf" download className="link-underline inline-flex items-center gap-1.5 font-medium text-[var(--ink)]">
          <Download size={14} />
          Download CV
        </a>
      </div>
    </section>
  );
}
