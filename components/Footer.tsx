import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 px-6 py-8 text-xs text-muted sm:flex-row sm:items-center">
        <p>
          © {year} {site.name}
        </p>
        <div className="flex items-center gap-5">
          <p className="font-mono">Built with Next.js · Tailwind CSS</p>
          <a href="#top" className="transition-colors hover:text-ink">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
