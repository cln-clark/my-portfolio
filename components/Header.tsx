import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { PrimaryNav } from "@/components/PrimaryNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { site } from "@/content/site";

export function Header() {
  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-[0.2em] text-ink"
          aria-label="Clark Louise Navales — home"
        >
          CLN<span className="text-accent">.</span>
        </Link>
        <div className="flex items-center gap-2">
          <PrimaryNav resume={site.resume} />
          <ThemeToggle />
          <MobileNav resume={site.resume} />
        </div>
      </div>
    </header>
  );
}
