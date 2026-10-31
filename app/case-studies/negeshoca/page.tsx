import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Gallery } from "@/components/Gallery";
import { Section } from "@/components/Section";
import { TechIcon } from "@/components/TechIcon";
import { negeshoca } from "@/content/negeshoca";

const cover = negeshoca.cover ?? "/images/behind-the-scene/bts5.jpg";
const coverAlt =
  negeshoca.coverAlt ??
  "Close-up of the NeGeShoCa checkout hardware printing a receipt beside a QR payment screen";

const flow = [
  { label: "ESP32 + scanners", note: "Barcode input and gate control" },
  { label: "REST API", note: "Bypassed the unreliable Firebase library" },
  { label: "Firebase RTDB", note: "Realtime cart and inventory state" },
  { label: "Android app", note: "Checkout, monitoring, and live cart" },
  { label: "POS & inventory", note: "Products, sales, and records" },
];

export const metadata: Metadata = {
  title: "NeGeShoCa Case Study",
  description:
    "How a team of three built an IoT smart checkout system: Arduino hardware, a Kotlin Android app, and Firebase realtime synchronization.",
  openGraph: {
    title: "NeGeShoCa Case Study — Clark Louise Navales",
    description:
      "An IoT smart checkout system built with ESP32 firmware, a Kotlin Android app, and Firebase realtime synchronization.",
    images: [{ url: cover, width: 1024, height: 576, alt: coverAlt }],
  },
};

export default function NegeshocaCaseStudy() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-12 md:pt-16">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Back to projects
        </Link>

        <div className="mt-8 max-w-4xl">
          <ul className="flex flex-wrap gap-2">
            {negeshoca.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line bg-surface/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
          <h1 className="mt-5 max-w-[14ch] font-display text-4xl leading-[1.02] font-medium tracking-[-0.04em] text-balance text-ink md:text-6xl">
            {negeshoca.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {negeshoca.subtitle}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={negeshoca.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-medium text-accent-ink transition-colors hover:bg-accent/90"
            >
              View demo video
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              href="/#projects"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-line px-4 text-sm font-medium text-ink transition-colors hover:border-line-strong hover:bg-accent-soft"
            >
              All projects
              <ArrowRight className="h-4 w-4 text-muted" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-xl border border-line bg-surface md:aspect-[21/9]">
          <Image
            src={cover}
            alt={coverAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 1152px"
            preload
            className="object-cover grayscale-[0.25] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-3 p-4 md:p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/75">
              Capstone prototype · Hardware + software
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/75">
              Arduino · Kotlin · Firebase
            </p>
          </div>
        </div>

        <dl className="mt-8 grid grid-cols-1 gap-6 border-y border-line py-6 sm:grid-cols-2 lg:grid-cols-4">
          {negeshoca.meta.map((item) => (
            <div key={item.label}>
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                {item.label}
              </dt>
              <dd className="mt-1.5 text-sm font-medium text-ink">
                {item.value}
                {item.note ? (
                  <span className="block text-xs font-normal text-muted">{item.note}</span>
                ) : null}
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

      <Section
        id="overview"
        index={1}
        title="Problem & Solution"
        description="What was broken, and what the system does about it."
      >
        <div className="space-y-8">
          <div>
            <h3 className="text-base font-semibold text-ink">The problem</h3>
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink/90 md:text-base">
              {negeshoca.problem}
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-ink">The solution</h3>
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink/90 md:text-base">
              {negeshoca.solution}
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-ink">Impact</h3>
            <ul className="mt-3 grid gap-3 sm:grid-cols-3">
              {negeshoca.impact.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-lg border border-line bg-surface p-4 text-sm leading-relaxed text-ink/90"
                >
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="role"
        index={2}
        title="My Role"
        description="Team lead, and the only developer on the build."
      >
        <p className="max-w-prose text-sm leading-relaxed text-ink/90 md:text-base">
          {negeshoca.role.intro}
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {negeshoca.role.points.map((point) => (
            <li
              key={point.title}
              className="rounded-lg border border-line bg-surface p-4"
            >
              <p className="text-sm font-medium text-ink">{point.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{point.text}</p>
            </li>
          ))}
        </ul>
        <blockquote className="mt-8 max-w-3xl border-l-2 border-accent/50 pl-5 text-base leading-relaxed text-ink/90 md:text-lg">
          &ldquo;{negeshoca.quote}&rdquo;
        </blockquote>
      </Section>

      <Section
        id="behind-the-scenes"
        index={3}
        title="Behind the Scenes"
        description="The prototype, the build process, and the team."
      >
        <Gallery images={negeshoca.gallery} label="Behind the scenes photos" />
      </Section>

      <Section
        id="architecture"
        index={4}
        title="Technical Architecture"
        description="How the hardware, cloud, and app fit together."
      >
        <div className="space-y-10">
          <div className="rounded-xl border border-line bg-surface p-5 md:p-6">
            <h3 className="eyebrow">System flow</h3>
            <ol className="mt-5 grid gap-3 lg:grid-cols-5">
              {flow.map((node, index) => (
                <li
                  key={node.label}
                  className="relative rounded-lg border border-line bg-canvas p-3"
                >
                  <p className="font-mono text-[10px] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-sm font-medium text-ink">{node.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{node.note}</p>
                  {index < flow.length - 1 ? (
                    <ArrowRight
                      className="absolute top-1/2 -right-3.5 hidden h-4 w-4 -translate-y-1/2 text-faint md:block"
                      aria-hidden="true"
                    />
                  ) : null}
                </li>
              ))}
            </ol>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="eyebrow">Hardware layer</h3>
              <ul className="mt-3 space-y-3">
                {negeshoca.architecture.hardware.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="rounded-md border border-line px-2 py-0.5 font-mono text-[10px] text-muted">
                      {item.tag}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-ink">{item.title}</p>
                      <p className="mt-0.5 text-sm text-muted">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="eyebrow">Software stack</h3>
              <ul className="mt-3 space-y-3">
                {negeshoca.architecture.software.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="w-20 shrink-0 rounded-md border border-line px-2 py-0.5 text-center font-mono text-[10px] text-muted">
                      {item.tag}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-ink">{item.title}</p>
                      <p className="mt-0.5 text-sm text-muted">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="eyebrow">Integration points</h3>
            <ul className="mt-3 space-y-2">
              {negeshoca.architecture.integrations.map((item) => (
                <li key={item.title} className="flex items-start gap-3 text-sm">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <p className="text-ink/90">
                    <span className="font-medium text-ink">{item.title}:</span>{" "}
                    <span className="text-muted">{item.text}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="outcomes"
        index={5}
        title="Challenges & Outcomes"
        description="What broke, what changed, and what shipped."
      >
        <div className="space-y-8">
          <div>
            <h3 className="text-base font-semibold text-ink">Key challenges</h3>
            <ul className="mt-3 grid gap-4 sm:grid-cols-2">
              {negeshoca.challenges.map((item) => (
                <li
                  key={item.title}
                  className="rounded-lg border border-line bg-surface p-4"
                >
                  <p className="text-sm font-medium text-ink">{item.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-ink">Solutions implemented</h3>
            <ul className="mt-3 space-y-2">
              {negeshoca.solutions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink/90 md:text-base">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 pb-20">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Back to projects
        </Link>
        <a
          href={negeshoca.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
        >
          View demo video
          <ArrowUpRight className="h-4 w-4 text-muted" aria-hidden="true" />
        </a>
      </div>
    </>
  );
}
