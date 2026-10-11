import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CopyEmail } from "@/components/CopyEmail";
import { Gallery } from "@/components/Gallery";
import { Section } from "@/components/Section";
import { TechIcon } from "@/components/TechIcon";
import { experience, type TimelineItem } from "@/content/experience";
import { gallery } from "@/content/gallery";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { stack } from "@/content/stack";

const delay = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as CSSProperties;

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: site.url,
    sameAs: [site.linkedin, site.github],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Imus",
      addressRegion: "Cavite",
      addressCountry: "PH",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="mx-auto max-w-5xl px-6 pt-14 pb-16 md:pt-20 md:pb-24">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_280px] md:gap-14">
          <div>
            <p className="hero-rise inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-muted">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to collaborations
            </p>
            <h1
              style={delay(60)}
              className="hero-rise mt-5 text-4xl font-semibold tracking-tight text-balance md:text-6xl"
            >
              {site.name}
            </h1>
            <p style={delay(120)} className="hero-rise mt-4 font-mono text-sm text-muted">
              {site.role} · {site.location}
            </p>
            <p
              style={delay(180)}
              className="hero-rise mt-6 max-w-prose text-lg leading-relaxed text-pretty whitespace-pre-line"
            >
              {site.statement}
            </p>
            <div style={delay(240)} className="hero-rise mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-accent-ink transition-colors hover:bg-accent/90"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email me
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-ink/30 hover:text-ink"
              >
                <FaLinkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-ink/30 hover:text-ink"
              >
                <FaGithub className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div style={delay(200)} className="hero-rise md:justify-self-end">
            <Image
              src="/images/myself-2.jpeg"
              alt="Clark Louise Navales smiling in front of mountains at an overlook"
              width={2671}
              height={2298}
              sizes="(min-width: 768px) 280px, 60vw"
              loading="eager"
              fetchPriority="high"
              className="w-full max-w-[280px] rounded-lg border border-line"
            />
          </div>
        </div>
      </section>

      <Section id="about" index={1} title="About">
        <div className="max-w-prose space-y-4 text-sm leading-relaxed md:text-base">
          <p>
            I’m a full-stack software engineer. At work, I build features end to end on a production POS platform, from the UI down to the database, 
            and I work on integrations between business systems. My main tools are React, Next.js, TypeScript, Rust, Supabase, and SQLite.
          </p>
          <p>
            I started out with school projects in web, Android, and IoT, which taught me how the pieces of a system connect, 
            from backend logic to the screen to the hardware. Now I get to apply that to something real merchants use every day.
          </p>
          <p>
            I get the most out of taking an idea from sketch to shipped, and then watching it get used.
          </p>
        </div>
      </Section>

      <Section id="experience" index={2} title="Experience">
        <Timeline items={experience} />
      </Section>

      <Section id="projects" index={3} title="Projects">
        <div className="space-y-4">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-lg border border-line p-5 transition-colors hover:border-ink/25 md:p-6"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <h3 className="text-base font-semibold">{project.title}</h3>
                <span
                  className={
                    project.status === "completed"
                      ? "rounded-full border border-accent/40 px-2.5 py-0.5 font-mono text-xs text-accent"
                      : "rounded-full border border-line px-2.5 py-0.5 font-mono text-xs text-muted"
                  }
                >
                  {project.status === "completed" ? "Completed" : "In progress"}
                </span>
              </div>
              {project.subtitle && <p className="mt-1 text-sm text-muted">{project.subtitle}</p>}
              <p className="mt-3 max-w-prose text-sm leading-relaxed">{project.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li
                    key={item.name}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-xs text-muted"
                  >
                    <TechIcon name={item.icon} />
                    {item.name}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap items-center gap-5">
                {project.caseStudyUrl ? (
                  <Link
                    href={project.caseStudyUrl}
                    className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent"
                  >
                    Read case study
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ) : (
                  <span className="text-sm text-muted">Case study coming soon</span>
                )}
                {project.demoUrl && project.status === "completed" && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent"
                  >
                    {project.demoLabel ?? "Demo"}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="stack" index={4} title="Stack">
        <div className="space-y-8">
          {stack.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
                {group.category}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="group/chip inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:border-ink/30 hover:text-ink"
                  >
                    <TechIcon
                      name={item.icon}
                      className="h-3.5 w-3.5 transition-colors group-hover/chip:text-accent"
                    />
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="gallery" index={5} title="Gallery">
        <p className="mb-6 max-w-prose text-sm text-muted">
          A few moments from graduation and the Sun Life internship.
        </p>
        <Gallery images={gallery} label="Photo gallery" />
      </Section>

      <Section id="contact" index={6} title="Contact">
        <p className="max-w-prose text-sm leading-relaxed md:text-base">
          I&apos;m open to new opportunities and collaborations. Feel free to reach out.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-6 block font-mono text-lg break-all underline decoration-line underline-offset-4 transition-colors hover:text-accent"
        >
          {site.email}
        </a>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <CopyEmail email={site.email} />
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-md border border-line px-4 text-sm text-ink transition-colors hover:border-ink/30 hover:bg-ink/5"
          >
            LinkedIn
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-md border border-line px-4 text-sm text-ink transition-colors hover:border-ink/30 hover:bg-ink/5"
          >
            GitHub
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Section>
    </>
  );
}

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol>
      {items.map((item) => (
        <li
          key={`${item.title}-${item.org}`}
          className="grid grid-cols-1 gap-1 border-b border-line py-5 first:pt-0 last:border-none last:pb-0 md:grid-cols-[140px_1fr] md:gap-6"
        >
          <p
            className={`font-mono text-xs md:pt-0.5 ${
              item.period.includes("Present") ? "text-accent" : "text-muted"
            }`}
          >
            {item.period}
          </p>
          <div>
            <h3 className="text-sm font-semibold md:text-base">{item.title}</h3>
            <p className="mt-0.5 text-sm text-muted">{item.org}</p>
            <p className="mt-0.5 text-sm text-muted">{item.location}</p>
            {item.tech && (
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {item.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-line px-2 py-0.5 font-mono text-xs text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            )}
            {item.summary && (
              <p className="mt-3 max-w-prose text-sm leading-relaxed">{item.summary}</p>
            )}
            {item.points && (
              <ul className="mt-2 max-w-prose space-y-1.5">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm leading-relaxed">
                    <ArrowRight
                      className="mt-1 h-3.5 w-3.5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
