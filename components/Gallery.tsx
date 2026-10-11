"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface GalleryImage {
  src: string;
  alt: string;
}

export function Gallery({ images, label }: { images: GalleryImage[]; label: string }) {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

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

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {images.map((image, position) => (
          <li key={image.src}>
            <button
              type="button"
              onClick={(event) => open(position, event)}
              aria-haspopup="dialog"
              aria-label={`Open photo: ${image.alt}`}
              className="group relative block aspect-square w-full overflow-hidden rounded-md border border-line"
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 150px"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={label}
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
        {index !== null && (
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs text-white/70" aria-hidden="true">
                {index + 1} / {images.length}
              </p>
              <button
                type="button"
                onClick={close}
                aria-label="Close photo viewer"
                className="flex h-10 w-10 items-center justify-center rounded-md text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="relative h-[72vh] w-full">
              <Image
                src={images[index].src}
                alt={images[index].alt}
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
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <p className="min-w-0 truncate text-center text-xs text-white/70">
                {images[index].alt}
              </p>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next photo"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
