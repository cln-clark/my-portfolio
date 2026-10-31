import type { CSSProperties } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  FileText,
  Mail,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CopyEmail } from "@/components/CopyEmail";
import { Gallery } from "@/components/Gallery";
import HoloCard from "@/components/HoloCard";
import { Section } from "@/components/Section";
import { StackGrid } from "@/components/StackGrid";
import { WorkCard } from "@/components/WorkCard";
import { education, workExperience, type TimelineItem } from "@/content/experience";
import { gallery } from "@/content/gallery";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { stack } from "@/content/stack";

const delay = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as CSSProperties;

export default function Home() {
  const featured = projects.find((project) => project.featured) ?? projects[0];
  const secondary = projects.filter((project) => project.id !== featured.id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    email: site.email,
    url: site.url,
    sameAs: [site.linkedin, site.github],
    worksFor: {
      "@type": "Organization",
      name: "Divergent Technologies Philippines, Inc.",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Cavite State University",
    },
    knowsAbout: [
      "Full-stack development",
      "React",
      "Next.js",
      "TypeScript",
      "Rust",
      "Supabase",
      "SQLite",
      "System integrations",
    ],
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

      <div className="relative isolate overflow-hidden">
        <div aria-hidden="true" className="hero-backdrop" />
        <section className="relative mx-auto max-w-6xl px-6 pt-12 pb-14 md:pt-16 md:pb-16">
          <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_280px] md:items-center md:gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-20">
          <div>
            <p className="hero-rise inline-flex items-center gap-2 rounded-full border border-line bg-surface/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to collaborations
            </p>

            <h1
              style={delay(60)}
              className="hero-rise mt-6 max-w-[12ch] font-display text-[clamp(3.25rem,7vw,5.5rem)] leading-[0.95] font-medium tracking-[-0.045em] text-balance text-ink"
            >
              {site.name}
            </h1>

            <p
              style={delay(120)}
              className="hero-rise mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
            >
              {site.role} · Cavite, PH
            </p>

            <p
              style={delay(180)}
              className="hero-rise mt-5 max-w-[54ch] text-lg leading-relaxed text-ink/90 text-pretty md:text-xl"
            >
              {site.hero.lead}
            </p>

            <p
              style={delay(220)}
              className="hero-rise mt-4 inline-flex items-center gap-2 font-mono text-[11px] text-faint"
            >
              <span className="h-px w-5 bg-accent/70" aria-hidden="true" />
              Now · {site.hero.now}
            </p>

            <div style={delay(260)} className="hero-rise mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-medium text-accent-ink transition-colors hover:bg-accent/90"
              >
                View projects
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-line bg-surface/40 px-5 text-sm font-medium text-ink transition-colors hover:border-line-strong hover:bg-accent-soft"
              >
                <Mail className="h-4 w-4 text-muted" aria-hidden="true" />
                Email me
              </a>
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open résumé in a new tab (PDF)"
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-line px-4 text-sm font-medium text-ink transition-colors hover:border-line-strong hover:bg-accent-soft"
              >
                <FileText className="h-4 w-4 text-accent" aria-hidden="true" />
                Résumé
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                  PDF
                </span>
              </a>
            </div>

            <div style={delay(300)} className="hero-rise mt-6 flex items-center gap-2">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-line-strong hover:text-ink"
              >
                <FaLinkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-line-strong hover:text-ink"
              >
                <FaGithub className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <figure style={delay(200)} className="hero-rise md:justify-self-end">
            <HoloCard
              image="/images/myself-portrait.jpg"
              alt="Clark Louise Navales smiling in front of mountains at an overlook"
              preset="shards"
              width={340}
              radius={12}
              intensity={0.26}
              edgeSparkle={0.08}
              frame={3}
              glare={0.35}
            />
          </figure>
          </div>
        </section>
      </div>

      <Section
        id="projects"
        index={1}
        title="Projects"
        description="Systems I've designed, built, and shipped."
      >
        <div className="space-y-4">
          <WorkCard project={featured} index={1} variant="featured" />
          <div className="grid items-start gap-4 lg:grid-cols-2">
            {secondary.map((project, index) => (
              <WorkCard key={project.id} project={project} index={index + 2} />
            ))}
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-xl border border-line bg-surface p-5 transition-colors hover:border-line-strong hover:bg-surface-raised md:p-6"
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow">~/repos</span>
                <ArrowUpRight
                  className="h-4 w-4 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-8">
                <p className="font-display text-xl font-medium text-ink">More on GitHub</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Experiments, utilities, and works in progress.
                </p>
              </div>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                github.com/cln-clark
              </p>
            </a>
          </div>
        </div>
      </Section>

      <Section
        id="about"
        index={2}
        title="About"
        description="The short version, and how I work."
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div className="space-y-5">
            {site.about.map((paragraph) => (
              <p key={paragraph} className="max-w-prose text-base leading-relaxed text-ink/90">
                {paragraph}
              </p>
            ))}
          </div>
          <ol className="border-t border-line">
            {site.principles.map((principle, index) => (
              <li
                key={principle.title}
                className="grid grid-cols-[2.25rem_1fr] gap-4 border-b border-line py-5 last:border-b-0"
              >
                <span className="font-mono text-[11px] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-sm font-medium text-ink">{principle.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{principle.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section
        id="experience"
        index={3}
        title="Experience"
        description="Where I've shipped, and what I've learned."
        action={
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open résumé in a new tab (PDF)"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
          >
            <FileText className="h-4 w-4 text-accent" aria-hidden="true" />
            Résumé
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
              PDF
            </span>
          </a>
        }
      >
        <Timeline items={workExperience} />
        <div className="mt-12 border-t border-line pt-8">
          <h3 className="eyebrow">Education</h3>
          <ul className="mt-5 space-y-5">
            {education.map((item) => (
              <li
                key={`${item.title}-${item.org}`}
                className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-6"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-medium text-ink">{item.title}</p>
                    {item.note ? (
                      <span className="rounded-full border border-accent/40 bg-accent-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                        {item.note}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm text-muted">{item.org}</p>
                </div>
                <div className="font-mono text-[11px] text-muted sm:text-right">
                  <p className={item.period.includes("Present") ? "text-accent" : undefined}>
                    {item.period}
                  </p>
                  <p className="mt-0.5 text-faint">{item.location}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        id="stack"
        index={4}
        title="Stack"
        description="Tools I reach for to get from idea to production."
      >
        <StackGrid groups={stack} />
      </Section>

      <Section
        id="gallery"
        index={5}
        title="Off the Clock"
        description="A few moments outside the terminal."
      >
        <p className="mb-6 max-w-prose text-sm leading-relaxed text-muted">
          Graduation, the Sun Life internship, and the people around it.
        </p>
        <Gallery images={gallery} label="Photo gallery" variant="editorial" />
      </Section>

      <Section
        id="contact"
        index={6}
        title="Contact"
        description="Have something in mind? Let's talk."
      >
        <div className="relative overflow-hidden rounded-2xl border border-line bg-surface p-6 md:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(36rem circle at 85% 0%, var(--accent-soft), transparent 65%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
          />
          <div className="relative">
            <p className="eyebrow flex items-center gap-2">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to collaborations
            </p>
            <h3 className="mt-4 max-w-[16ch] font-display text-3xl font-medium tracking-[-0.03em] text-ink md:text-4xl">
              Let&apos;s build something that ships.
            </h3>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted md:text-base">
              I&apos;m open to collaborations and new opportunities. The fastest way to reach me
              is email.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-8 block font-mono text-base break-all text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent md:text-lg"
            >
              {site.email}
            </a>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <CopyEmail email={site.email} />
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open résumé in a new tab (PDF)"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-line bg-canvas/40 px-4 text-sm font-medium text-ink transition-colors hover:border-line-strong hover:bg-accent-soft sm:w-auto"
              >
                <FileText className="h-4 w-4 text-accent" aria-hidden="true" />
                Résumé
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                  PDF
                </span>
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-line px-4 text-sm font-medium text-ink transition-colors hover:border-line-strong hover:bg-accent-soft sm:w-auto"
              >
                LinkedIn
                <ArrowUpRight className="h-4 w-4 text-muted" aria-hidden="true" />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-line px-4 text-sm font-medium text-ink transition-colors hover:border-line-strong hover:bg-accent-soft sm:w-auto"
              >
                GitHub
                <ArrowUpRight className="h-4 w-4 text-muted" aria-hidden="true" />
              </a>
            </div>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
              Cavite, Philippines · GMT+8
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol>
      {items.map((item) => {
        const current = item.period.includes("Present");
        return (
          <li
            key={`${item.title}-${item.org}`}
            className="grid gap-4 border-b border-line py-6 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-5"
          >
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface font-mono text-[10px] text-muted"
            >
              {item.monogram}
            </span>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="flex items-center gap-2 font-display text-lg font-medium text-ink">
                  {item.title}
                  {current ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  ) : null}
                </h3>
                <p
                  className={`font-mono text-[11px] ${
                    current ? "text-accent" : "text-muted"
                  }`}
                >
                  {item.period}
                </p>
              </div>
              <p className="mt-1 text-sm text-muted">
                {item.org} · {item.location}
              </p>
              {item.summary ? (
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink/90">
                  {item.summary}
                </p>
              ) : null}
              {item.points ? (
                <ul className="mt-3 max-w-prose space-y-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm leading-relaxed text-ink/90"
                    >
                      <ArrowRight
                        className="mt-1 h-3.5 w-3.5 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {item.tech ? (
                <p className="mt-3 max-w-prose font-mono text-[11px] leading-relaxed text-muted">
                  {item.tech.join(" · ")}
                </p>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
