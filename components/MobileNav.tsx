"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, FileText, Menu, X } from "lucide-react";
import { navLinks } from "@/content/navigation";

export function MobileNav({ resume }: { resume: string }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const close = () => {
    setOpen(false);
    buttonRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close navigation" : "Open navigation"}
        className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface/60 text-muted transition-colors hover:border-line-strong hover:text-ink"
      >
        {open ? (
          <X className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Menu className="h-5 w-5" aria-hidden="true" />
        )}
      </button>

      {open ? (
        <>
          <button
            type="button"
            tabIndex={-1}
            aria-label="Close navigation"
            onClick={close}
            className="fixed inset-x-0 top-16 z-40 h-[calc(100dvh-4rem)] bg-canvas/60 backdrop-blur-sm"
          />
          <nav
            id="mobile-navigation"
            aria-label="Mobile"
            className="fixed inset-x-0 top-16 z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-canvas px-6 pb-6 shadow-2xl"
          >
            <ul className="divide-y divide-line/70">
              {navLinks.map((link, index) => (
                <li key={link.id}>
                  <Link
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex h-12 items-center justify-between text-base text-ink"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-[10px] text-faint">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open résumé in a new tab (PDF)"
              className="mt-5 inline-flex h-11 items-center gap-2 rounded-lg border border-line px-4 text-sm font-medium text-ink transition-colors hover:border-line-strong hover:bg-accent-soft"
            >
              <FileText className="h-4 w-4 text-accent" aria-hidden="true" />
              Résumé
              <ArrowUpRight className="h-3.5 w-3.5 text-muted" aria-hidden="true" />
            </a>
          </nav>
        </>
      ) : null}
    </div>
  );
}
