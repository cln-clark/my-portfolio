"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import { navLinks } from "@/content/navigation";

export function PrimaryNav({ resume }: { resume: string }) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const active =
    pathname !== "/"
      ? pathname.startsWith("/case-studies")
        ? "projects"
        : null
      : activeSection;

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.1, 0.5] },
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <nav aria-label="Primary" className="hidden md:block">
      <ul className="flex items-center gap-1">
        {navLinks.map((link) => {
          const isActive = active === link.id;
          return (
            <li key={link.id}>
              <Link
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className={`rounded-md px-3 py-2 text-[13px] transition-colors ${
                  isActive
                    ? "bg-accent-soft text-ink"
                    : "text-muted hover:bg-ink/5 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
        <li>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open résumé in a new tab (PDF)"
            className="ml-2 inline-flex h-9 items-center gap-1.5 rounded-md border border-line px-3 text-[12px] font-medium text-ink transition-colors hover:border-line-strong hover:bg-accent-soft"
          >
            <FileText className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            Résumé
          </a>
        </li>
      </ul>
    </nav>
  );
}
