import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { TechIcon } from "@/components/TechIcon";
import type { Project } from "@/content/projects";

export function WorkCard({
  project,
  index,
  variant = "compact",
}: {
  project: Project;
  index: number;
  variant?: "featured" | "compact";
}) {
  const featured = variant === "featured";
  const completed = project.status === "completed";

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-colors duration-300 hover:border-line-strong ${
        featured ? "lg:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden border-b border-line/70 ${
          featured
            ? "aspect-[16/10] lg:w-[56%] lg:border-b-0 lg:border-r"
            : "aspect-[16/10]"
        }`}
      >
        <ProjectCover project={project} index={index} featured={featured} />
      </div>

      <div
        className={`flex flex-1 flex-col p-5 md:p-6 ${
          featured ? "lg:justify-center lg:p-8" : ""
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <p className="eyebrow">
            {project.year} · {project.role}
          </p>
          <Status completed={completed} />
        </div>

        <h3 className="mt-4 font-display text-2xl font-medium tracking-[-0.02em] text-ink">
          {project.caseStudyUrl ? (
            <Link
              href={project.caseStudyUrl}
              className="transition-colors group-hover:text-accent"
            >
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>
        {project.subtitle ? (
          <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
        ) : null}
        <p className="mt-4 max-w-prose text-sm leading-relaxed text-ink/90">
          {project.outcome}
        </p>

        <ul className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
          {project.stack.map((item) => (
            <li
              key={item.name}
              className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted"
            >
              <TechIcon name={item.icon} className="h-3.5 w-3.5" />
              {item.name}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-line/70 pt-5">
          {project.caseStudyUrl ? (
            <Link
              href={project.caseStudyUrl}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              Read case study
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          ) : (
            <span className="text-sm text-muted">Currently in progress</span>
          )}
          {project.demoUrl && completed ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {project.demoLabel ?? "Demo"}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function ProjectCover({
  project,
  index,
  featured,
}: {
  project: Project;
  index: number;
  featured: boolean;
}) {
  const number = String(index).padStart(2, "0");
  const sizes = featured
    ? "(max-width: 1024px) 100vw, 55vw"
    : "(max-width: 1024px) 100vw, 32vw";

  if (project.cover) {
    return (
      <>
        <Image
          src={project.cover}
          alt={project.coverAlt ?? ""}
          fill
          sizes={sizes}
          className="object-cover object-left grayscale-[0.3] contrast-[1.05] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4 md:p-5"
        >
          <span className="rounded-full border border-white/15 bg-black/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/80 backdrop-blur">
            {number} / {project.kicker}
          </span>
        </div>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 -right-2 font-display text-[10rem] leading-none text-white/[0.06]"
        >
          {number}
        </span>
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 p-4 md:p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/70">
            {project.stack.map((item) => item.name).join(" · ")}
          </p>
        </div>
      </>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="cover-grid absolute inset-0 flex flex-col justify-between bg-surface-raised p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
          {number} / {project.kicker}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
          {project.status === "completed" ? "Completed" : "In progress"}
        </span>
      </div>
      <span className="pointer-events-none absolute top-8 right-3 font-display text-[8rem] leading-none text-ink/[0.05]">
        {number}
      </span>
      <div className="relative">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
          {project.kicker}
        </p>
        <p className="mt-2 font-display text-2xl font-medium tracking-[-0.02em] text-ink">
          {project.title}
        </p>
        <div className="mt-4 flex items-center gap-2.5 text-muted">
          {project.stack.map((item) => (
            <TechIcon key={item.name} name={item.icon} className="h-4 w-4" />
          ))}
        </div>
      </div>
    </div>
  );
}

function Status({ completed }: { completed: boolean }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${
        completed
          ? "border-accent/40 bg-accent-soft text-accent"
          : "border-line text-muted"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${completed ? "bg-accent" : "bg-faint"}`}
        aria-hidden="true"
      />
      {completed ? "Completed" : "In progress"}
    </span>
  );
}
