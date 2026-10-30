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
 * OCAJA wordmark.
 * NOTE: the brand guide requires the official logo artwork — replace this
 * wordmark with the supplied SVG once design assets are provided.
 */
export function Logo({
  reversed = false,
  className,
}: {
  reversed?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 select-none",
        reversed ? "text-white" : "text-navy-deep",
        className
      )}
    >
      <span
        className={cn(
          "grid h-9 w-9 shrink-0 place-items-center rounded-xl",
          reversed ? "bg-white/10 ring-1 ring-white/25" : "bg-navy"
        )}
      >
        <PillarMark className="h-4 w-[26px] text-white" barClass="fill-current" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-[1.15rem] font-bold tracking-[0.08em]",
            reversed ? "text-white" : "text-navy-deep"
          )}
        >
          OCAJA
        </span>
        <span
          className={cn(
            "mt-[3px] text-[0.5rem] font-medium tracking-[0.34em]",
            reversed ? "text-white/70" : "text-ojagray"
          )}
        >
          TECHNOLOGIES
        </span>
      </span>
    </span>
  );
}
