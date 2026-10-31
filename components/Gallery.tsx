"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

const editorialLayout = [
  "col-span-2 row-span-2 md:col-span-6 md:row-span-2",
  "col-span-1 md:col-span-3",
  "col-span-1 md:col-span-3",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
  "col-span-2 md:col-span-6",
  "col-span-2 md:col-span-6",
];

export function Gallery({
  images,
  label,
  variant = "grid",
}: {
  images: GalleryImage[];
  label: string;
  variant?: "grid" | "editorial";
}) {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const editorial = variant === "editorial";

  const close = useCallback(() => setIndex(null), []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) {
      dialog.showModal();
    } else if (index === null && dialog.open) {
      dialog.close();
    }
  }, [index]);

  const step = useCallback(
    (delta: number) => {
      setIndex((current) =>
        current === null ? current : (current + delta + images.length) % images.length,
      );
    },
    [images.length],
  );

  const open = (position: number, event: React.MouseEvent<HTMLButtonElement>) => {
    triggerRef.current = event.currentTarget;
    setIndex(position);
  };

  const current = index === null ? null : images[index];
  const caption = current ? (current.caption ?? current.alt) : "";

  return (
    <>
      <ul
        className={
          editorial
            ? "grid grid-flow-dense grid-cols-2 auto-rows-[132px] gap-3 sm:auto-rows-[150px] md:grid-cols-12 md:auto-rows-[160px]"
            : "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
        }
      >
        {images.map((image, position) => (
          <li
            key={image.src}
            className={editorial ? editorialLayout[position % editorialLayout.length] : undefined}
          >
            <button
              type="button"
              onClick={(event) => open(position, event)}
              aria-haspopup="dialog"
              aria-label={`Open photo: ${image.caption ?? image.alt}`}
              className={`group relative block w-full overflow-hidden rounded-lg border border-line bg-surface ${
                editorial ? "h-full" : "aspect-square"
              }`}
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes={
                  editorial
                    ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    : "(max-width: 640px) 45vw, (max-width: 768px) 30vw, 160px"
                }
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
              <span
                className={`pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-canvas/95 to-transparent p-3 pt-10 text-left text-xs text-ink transition-opacity ${
                  editorial ? "opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100" : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                }`}
              >
                {image.caption ?? image.alt}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={label}
        aria-describedby={current ? "lightbox-caption" : undefined}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
        onClose={() => {
          setIndex(null);
          triggerRef.current?.focus();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") step(-1);
          if (event.key === "ArrowRight") step(1);
        }}
      >
        {current ? (
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs text-white/70" aria-live="polite">
                {index! + 1} / {images.length}
              </p>
              <button
                type="button"
                onClick={close}
                aria-label="Close photo viewer"
                className="flex h-11 w-11 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="relative h-[72vh] w-full">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="92vw"
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <p id="lightbox-caption" className="min-w-0 truncate text-center text-xs text-white/70">
                {caption}
              </p>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next photo"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
