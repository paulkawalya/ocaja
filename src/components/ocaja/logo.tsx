"use client";

import { cn } from "@/lib/utils";

/** Six-pillar mark: six upright bars, echoing the numbered-units brand motif. */
export function PillarMark({
  className,
  barClass = "bg-current",
}: {
  className?: string;
  barClass?: string;
}) {
  const bars = [
    { x: 0, h: 10 },
    { x: 7, h: 15 },
    { x: 14, h: 20 },
    { x: 21, h: 13 },
    { x: 28, h: 18 },
    { x: 35, h: 9 },
  ];
  return (
    <svg viewBox="0 0 41 20" className={className} aria-hidden="true">
      {bars.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={20 - b.h}
          width={4}
          height={b.h}
          rx={2}
          className={barClass}
        />
      ))}
    </svg>
  );
}

/**
 * Official OCAJA Technologies Logo Artwork.
 * Displays the official circular circuit-crest emblem with crisp rendering.
 */
export function Logo({
  reversed = false,
  className,
  size = "md",
}: {
  reversed?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "h-9",
    md: "h-12 sm:h-13",
    lg: "h-16",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 select-none transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]",
        className
      )}
    >
      <img
        src={reversed ? "/ocaja-logo-white.png" : "/ocaja-logo-dark.png"}
        alt="OCAJA Technologies"
        className={cn(
          "w-auto object-contain drop-shadow-[0_2px_10px_rgba(42,230,251,0.2)]",
          sizeClasses[size]
        )}
      />
    </span>
  );
}
