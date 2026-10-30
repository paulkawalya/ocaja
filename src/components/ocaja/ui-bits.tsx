"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { Route } from "@/lib/ocaja-data";

/* ---------- Motion helpers ---------- */

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.65, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Section primitives ---------- */

export function Kicker({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={cn(
        "mb-4 flex items-center gap-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em]",
        light ? "text-white/70" : "text-ojagray"
      )}
    >
      <span className={cn("h-[2px] w-7 rounded-full", light ? "bg-white/60" : "bg-navy")} />
      {children}
    </p>
  );
}

export function SectionHeading({
  kicker,
  title,
  text,
  align = "left",
  light = false,
  className,
}: {
  kicker?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {kicker ? (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <Kicker light={light}>{kicker}</Kicker>
        </div>
      ) : null}
      <h2
        className={cn(
          "font-heading text-[1.9rem] font-bold leading-[1.12] tracking-tight sm:text-4xl",
          light ? "text-white" : "text-navy-deep"
        )}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={cn(
            "mt-4 text-[1.02rem] leading-relaxed",
            light ? "text-white/75" : "text-ojagray"
          )}
        >
          {text}
        </p>
      ) : null}
    </Reveal>
  );
}

/* ---------- Buttons ---------- */

export function PrimaryButton({
  children,
  onClick,
  className,
  type = "button",
  disabled,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "h-12 cursor-pointer rounded-full bg-navy px-7 text-[0.92rem] font-semibold text-white shadow-lg shadow-navy/25 transition-all hover:-translate-y-0.5 hover:bg-navy-deep hover:shadow-xl hover:shadow-navy/30",
        className
      )}
    >
      {children}
    </Button>
  );
}

export function GhostButton({
  children,
  onClick,
  className,
  light = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  light?: boolean;
}) {
  return (
    <Button
      type="button"
      variant="outline"
      onClick={onClick}
      className={cn(
        "h-12 cursor-pointer rounded-full px-7 text-[0.92rem] font-semibold transition-all hover:-translate-y-0.5",
        light
          ? "border-white/35 bg-white/5 text-white hover:bg-white/15 hover:text-white"
          : "border-navy/25 text-navy hover:bg-navy-tint hover:text-navy-deep",
        className
      )}
    >
      {children}
    </Button>
  );
}

export function TextLink({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group inline-flex cursor-pointer items-center gap-1.5 text-[0.92rem] font-semibold text-navy transition-colors hover:text-navy-deep",
        className
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </button>
  );
}

/* ---------- Page hero for inner pages ---------- */

export function PageHero({
  kicker,
  title,
  tagline,
  outlineNum,
}: {
  kicker: string;
  title: string;
  tagline?: string;
  outlineNum?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-navy-tint bg-mist">
      {outlineNum ? (
        <span
          aria-hidden="true"
          className="num-outline pointer-events-none absolute -right-4 -top-10 hidden select-none font-heading text-[13rem] font-extrabold leading-none md:block lg:text-[17rem]"
        >
          {outlineNum}
        </span>
      ) : (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(32,67,143,0.07),transparent)]"
        />
      )}
      <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-32 sm:px-8 md:pb-20 md:pt-40">
        <Reveal>
          <Kicker>{kicker}</Kicker>
          <h1 className="max-w-3xl font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-navy-deep sm:text-5xl">
            {title}
          </h1>
          {tagline ? (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ojagray">{tagline}</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Closing CTA band ---------- */

export function CtaBand({
  title,
  text,
  buttonLabel,
  onNavigate,
  target,
}: {
  title: string;
  text: string;
  buttonLabel: string;
  onNavigate: (r: Route) => void;
  target?: Route;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
      <Reveal>
        <div className="hero-grid relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0C1F4A_0%,#20438F_60%,#2C51A3_100%)] px-6 py-14 text-center sm:px-12 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-white/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-[2.6rem] sm:leading-[1.1]">
              {title}
            </h2>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-white/75">{text}</p>
            <div className="mt-8 flex justify-center">
              <Button
                onClick={() => onNavigate(target ?? { name: "contact" })}
                className="h-12 cursor-pointer rounded-full bg-white px-8 text-[0.92rem] font-semibold text-navy-deep shadow-xl shadow-navy-deep/30 transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                {buttonLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Numbered pillar card ---------- */

export function PillarCard({
  num,
  title,
  text,
  iconNode,
  badge,
  onClick,
  className,
}: {
  num: string;
  title: string;
  text: string;
  iconNode: ReactNode;
  badge?: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#E7E9F0] bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-navy/30 hover:shadow-[0_24px_48px_-16px_rgba(32,67,143,0.18)] sm:p-7",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-tint text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
          {iconNode}
        </span>
        <span
          aria-hidden="true"
          className="font-heading text-4xl font-extrabold leading-none text-navy/10 transition-colors duration-300 group-hover:text-navy/25"
        >
          {num}
        </span>
      </div>
      <h3 className="mt-5 font-heading text-[1.18rem] font-semibold leading-snug text-navy-deep">
        {title}
      </h3>
      <p className="mt-2.5 flex-1 text-[0.93rem] leading-relaxed text-ojagray">{text}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-navy">
        {badge ?? "Learn more"}
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </button>
  );
}
