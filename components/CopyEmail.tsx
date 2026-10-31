"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    },
    [],
  );

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      void error;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-11 w-full min-w-[9.5rem] items-center justify-center gap-2 rounded-lg border border-line bg-canvas/40 px-4 text-sm font-medium text-ink transition-colors hover:border-line-strong hover:bg-accent-soft sm:w-auto"
    >
      {copied ? (
        <Check className="h-4 w-4 text-accent" aria-hidden="true" />
      ) : (
        <Copy className="h-4 w-4 text-muted" aria-hidden="true" />
      )}
      {copied ? "Copied" : "Copy email"}
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </button>
  );
}
