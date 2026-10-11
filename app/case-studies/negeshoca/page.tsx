import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Gallery } from "@/components/Gallery";
import { Section } from "@/components/Section";
import { TechIcon } from "@/components/TechIcon";
import { negeshoca } from "@/content/negeshoca";

export const metadata: Metadata = {
  title: "NeGeShoCa Case Study",
  description:
    "How a team of three built an IoT smart checkout system: Arduino hardware, a Kotlin Android app, and Firebase realtime synchronization.",
};

export default function NegeshocaCaseStudy() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pt-12 md:pt-16">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Back to projects
        </Link>

        <div className="mt-8 max-w-3xl">
          <ul className="flex flex-wrap gap-2">
            {negeshoca.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line px-2.5 py-1 font-mono text-xs text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
            {negeshoca.title}
          </h1>
          <p className="mt-3 text-lg text-muted">{negeshoca.subtitle}</p>
          <div className="mt-6">
            <a
              href={negeshoca.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-accent-ink transition-colors hover:bg-accent/90"
            >
              View demo video
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-1 gap-6 border-y border-line py-6 sm:grid-cols-3">
          {negeshoca.meta.map((item) => (
            <div key={item.label}>
              <dt className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
                {item.label}
              </dt>
              <dd className="mt-1 text-sm font-medium">
                {item.value}
                {item.note && (
                  <span className="block text-xs font-normal text-muted">{item.note}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-6 flex flex-wrap gap-2">
          {negeshoca.stack.map((item) => (
            <li
              key={item.name}
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-xs text-muted"
            >
              <TechIcon name={item.icon} />
              {item.name}
            </li>
          ))}
        </ul>
      </section>

      <Section id="overview" index={1} title="Problem & Solution">
        <div className="space-y-8">
          <div>
            <h3 className="text-base font-semibold">The problem</h3>
            <p className="mt-2 max-w-prose text-sm leading-relaxed md:text-base">
              {negeshoca.problem}
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold">The solution</h3>
            <p className="mt-2 max-w-prose text-sm leading-relaxed md:text-base">
              {negeshoca.solution}
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold">Impact</h3>
            <ul className="mt-3 space-y-2">
              {negeshoca.impact.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="role" index={2} title="My Role">
        <p className="max-w-prose text-sm leading-relaxed md:text-base">{negeshoca.role.intro}</p>
        <ul className="mt-6 space-y-4">
          {negeshoca.role.points.map((point) => (
            <li key={point.title} className="flex items-start gap-3">
              <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <p className="max-w-prose text-sm leading-relaxed md:text-base">
                <span className="font-medium">{point.title}</span> — {point.text}
              </p>
            </li>
          ))}
        </ul>
        <blockquote className="mt-8 max-w-prose border-l-2 border-accent/50 pl-5 text-sm leading-relaxed text-muted italic">
          {negeshoca.quote}
        </blockquote>
      </Section>

      <Section id="behind-the-scenes" index={3} title="Behind the Scenes">
        <Gallery images={negeshoca.gallery} label="Behind the scenes photos" />
      </Section>

      <Section id="architecture" index={4} title="Technical Architecture">
        <div className="space-y-8">
          <div>
            <h3 className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
              Hardware layer
            </h3>
            <ul className="mt-3 space-y-3">
              {negeshoca.architecture.hardware.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="rounded-md border border-line px-2 py-0.5 font-mono text-xs text-muted">
                    {item.tag}
                  </span>
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="mt-0.5 text-sm text-muted">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
              Software stack
            </h3>
            <ul className="mt-3 space-y-3">
              {negeshoca.architecture.software.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="w-24 shrink-0 rounded-md border border-line px-2 py-0.5 text-center font-mono text-xs text-muted">
                    {item.tag}
                  </span>
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="mt-0.5 text-sm text-muted">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
              Integration points
            </h3>
            <ul className="mt-3 space-y-2">
              {negeshoca.architecture.integrations.map((item) => (
                <li key={item.title} className="flex items-start gap-3 text-sm">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <p>
                    <span className="font-medium">{item.title}:</span>{" "}
                    <span className="text-muted">{item.text}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="outcomes" index={5} title="Challenges & Outcomes">
        <div className="space-y-8">
          <div>
            <h3 className="text-base font-semibold">Key challenges</h3>
            <ul className="mt-3 space-y-4">
              {negeshoca.challenges.map((item) => (
                <li key={item.title}>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="mt-0.5 max-w-prose text-sm text-muted">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold">Solutions implemented</h3>
            <ul className="mt-3 space-y-2">
              {negeshoca.solutions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 pb-20">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Back to projects
        </Link>
        <a
          href={negeshoca.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent"
        >
          View demo video
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </>
  );
}
