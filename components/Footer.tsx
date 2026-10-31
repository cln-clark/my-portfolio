import Link from "next/link";
import { FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { navLinks } from "@/content/navigation";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="font-mono text-sm font-semibold tracking-[0.2em] text-ink"
              aria-label="Clark Louise Navales — home"
            >
              CLN<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 max-w-[32ch] text-sm leading-relaxed text-muted">
              Full-stack software engineer building production systems from the interface to
              the database.
            </p>
          </div>

          <div>
            <p className="eyebrow">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
                >
                  <FaLinkedin className="h-3.5 w-3.5" aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
                >
                  <FaGithub className="h-3.5 w-3.5" aria-hidden="true" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open résumé in a new tab (PDF)"
                  className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
                >
                  <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                  Résumé
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <div className="flex items-center gap-5">
            <p className="font-mono">Next.js · Tailwind CSS</p>
            <a href="#top" className="transition-colors hover:text-ink">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
