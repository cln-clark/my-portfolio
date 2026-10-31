import { TechIcon } from "@/components/TechIcon";
import type { StackCategory } from "@/content/stack";

export function StackGrid({ groups }: { groups: StackCategory[] }) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {groups.map((group) => {
        const slug = group.category
          .toLowerCase()
          .replace(/&/g, "and")
          .replace(/\s+/g, "-");
        return (
          <section
            key={group.category}
            aria-labelledby={`stack-${slug}`}
            className="flex flex-col rounded-xl border border-line bg-surface p-5 md:p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <h3
                id={`stack-${slug}`}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink"
              >
                {group.category}
              </h3>
              <span className="font-mono text-[10px] text-faint">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{group.blurb}</p>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="group/item flex min-w-0 items-center gap-2 text-[13px] text-muted"
                >
                  <TechIcon
                    name={item.icon}
                    className="h-4 w-4 shrink-0 transition-colors group-hover/item:text-accent"
                  />
                  <span className="text-[12px] leading-snug">{item.name}</span>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
