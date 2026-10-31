import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function Section({
  id,
  index,
  title,
  description,
  action,
  children,
}: {
  id: string;
  index: number;
  title: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="border-t border-line">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-20 md:grid-cols-[180px_minmax(0,1fr)] md:gap-12 md:py-20">
        <div className="md:sticky md:top-24 md:self-start">
          <p aria-hidden="true" className="font-mono text-[11px] tracking-[0.2em] text-faint">
            {String(index).padStart(2, "0")} /
          </p>
          <h2
            id={`${id}-heading`}
            className="mt-2 font-display text-2xl font-medium tracking-[-0.02em] text-ink md:text-[1.7rem]"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-3 max-w-[24ch] text-sm leading-relaxed text-muted">{description}</p>
          ) : null}
          {action ? <div className="mt-4">{action}</div> : null}
        </div>
        <Reveal className="min-w-0">{children}</Reveal>
      </div>
    </section>
  );
}
