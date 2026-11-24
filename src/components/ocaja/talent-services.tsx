"use client";

import { motion } from "framer-motion";
import { PILLARS, type Route } from "@/lib/ocaja-data";
import { Icon } from "./icon";
import { Reveal } from "./ui-bits";

export function TalentServices({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <section className="bg-slate-50/70 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#1685f8]">
            Core Engineering Practices
          </p>
          <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-[#021a40] sm:text-4xl">
            Innovate, Scale, Succeed: Your Partner in Next-Gen Tech Solutions
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            From enterprise software and 24/7 cybersecurity to scalable cloud infrastructure, AI automation, and African payment integrations.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, idx) => (
            <Reveal key={p.id} delay={idx * 0.08} className="h-full">
              <div className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1685f8]/40 hover:shadow-[0_20px_40px_-15px_rgba(2,26,64,0.12)]">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#E9EEF7] text-[#021a40] transition-colors duration-300 group-hover:bg-[#021a40] group-hover:text-white">
                      <Icon name={p.icon} className="h-7 w-7" />
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-slate-500">
                      Practice {p.num}
                    </span>
                  </div>

                  <h3 className="mt-6 font-heading text-xl font-bold text-[#021a40] group-hover:text-[#1685f8] transition-colors">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-slate-600">
                    {p.tagline}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => navigate({ name: "pillar", pillarId: p.id })}
                    className="inline-flex cursor-pointer items-center gap-2 text-xs font-bold text-[#021a40] group-hover:text-[#1685f8] transition-colors"
                  >
                    <span>Explore Practice</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 12C6 11.5858 6.33579 11.25 6.75 11.25H15.4393L12.2197 8.03033C11.9268 7.73744 11.9268 7.26256 12.2197 6.96967C12.5126 6.67678 12.9874 6.67678 13.2803 6.96967L17.7803 11.4697C18.0732 11.7626 18.0732 12.2374 17.7803 12.5303L13.2803 17.0303C12.9874 17.3232 12.5126 17.3232 12.2197 17.0303C11.9268 16.7374 11.9268 16.2626 12.2197 15.9697L15.4393 12.75H6.75C6.33579 12.75 6 12.4142 6 12Z"
                        fill="#2AE6FB"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
