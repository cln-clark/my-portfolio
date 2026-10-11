import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="border-t border-line">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 py-16 md:grid-cols-[200px_1fr] md:gap-12 md:py-20">
        <div className="md:sticky md:top-24 md:self-start">
          <h2 id={`${id}-heading`} className="text-lg font-semibold tracking-tight">
            <span aria-hidden="true" className="mr-2 font-mono text-sm text-muted">
              {String(index).padStart(2, "0")} /
            </span>
            {title}
          </h2>
        </div>
        <Reveal className="min-w-0">
          {children}
        </Reveal>
      </div>
    </section>
  );
}
