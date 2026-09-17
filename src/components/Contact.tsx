import { Mail, Phone, MapPin, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

const EMAIL = "ziadfissal9@gmail.com";
const PHONE = "+20 115 728 5971";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="border-t"
      style={{ borderColor: "var(--line)", background: "var(--bg-soft)" }}
    >
      <div className="container py-20 sm:py-24">
        <p className="eyebrow">Contact</p>
        <h2 className="section-heading mt-4 max-w-[560px]">
          Open to full-stack and front-end roles, and to freelance work.
        </h2>

        <div className="mt-10 grid gap-10 sm:grid-cols-[1fr_auto] sm:items-end">
          <div className="space-y-3.5">
            <a
              href={`mailto:${EMAIL}`}
              className="link text-[15px]"
              style={{ color: "var(--ink)" }}
            >
              <Mail size={15} />
              {EMAIL}
            </a>
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="link text-[15px]"
            >
              <Phone size={15} />
              {PHONE}
            </a>
            <p
              className="flex items-center gap-1.5 text-[15px]"
              style={{ color: "var(--ink-soft)" }}
            >
              <MapPin size={15} />
              Damietta, Egypt
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <a
              href="https://github.com/ziadfissal9-arch"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <GithubIcon size={15} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ziad-fissal-2a4530365"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <LinkedinIcon size={15} />
              LinkedIn
            </a>
            <a
              href="/cv/Ziad-Fissal-CV.pdf"
              download
              className="btn btn-primary"
            >
              <Download size={15} />
              Download CV
            </a>
          </div>
        </div>

        <div
          className="mono mt-16 flex flex-col gap-2 border-t pt-6 text-[12px] sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "var(--line)", color: "var(--ink-mute)" }}
        >
          <span>© {year} Ziad Fissal</span>
          <span>Built with Next.js · Deployed on Vercel</span>
        </div>
      </div>
    </footer>
  );
}
