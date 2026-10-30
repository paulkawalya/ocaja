"use client";

import { Mail, Globe, Phone, MapPin } from "lucide-react";
import { Logo, PillarMark } from "./logo";
import {
  PILLARS,
  OFFICES,
  CONTACT_EMAIL,
  CONTACT_WEB,
  TAGLINE,
  type Route,
} from "@/lib/ocaja-data";

export function SiteFooter({ navigate }: { navigate: (r: Route) => void }) {
  const companyLinks: { label: string; route: Route }[] = [
    { label: "Home", route: { name: "home" } },
    { label: "About Us", route: { name: "about" } },
    { label: "Solutions", route: { name: "solutions" } },
    { label: "Sectors", route: { name: "sectors" } },
    { label: "How We Work", route: { name: "how-we-work" } },
    { label: "Contact", route: { name: "contact" } },
  ];

  return (
    <footer className="mt-auto bg-[#0C1F4A] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <Logo reversed />
            <p className="mt-5 max-w-xs font-heading text-[1.05rem] font-semibold leading-snug text-white/90">
              {TAGLINE}
            </p>
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10">
              <PillarMark className="h-5 w-12 shrink-0 text-white/80" barClass="fill-current" />
              <p className="text-[0.8rem] leading-relaxed text-white/60">
                Serving organisations across Uganda, Zambia and the wider East &amp; Southern
                African region.
              </p>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/45">
              Services
            </p>
            <ul className="mt-4 space-y-2.5">
              {PILLARS.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => navigate({ name: "pillar", pillarId: p.id })}
                    className="cursor-pointer text-left text-[0.88rem] text-white/70 transition-colors hover:text-white"
                  >
                    {p.menuTitle}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/45">
              Company
            </p>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <button
                    type="button"
                    onClick={() => navigate(l.route)}
                    className="cursor-pointer text-left text-[0.88rem] text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Offices */}
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/45">
              Offices
            </p>
            <div className="mt-4 space-y-5">
              {OFFICES.map((o) => (
                <div key={o.country}>
                  <p className="flex items-center gap-2 text-[0.88rem] font-semibold text-white">
                    <MapPin className="h-3.5 w-3.5 text-white/60" />
                    {o.city}, {o.country}
                    {o.note ? (
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-[0.62rem] font-medium uppercase tracking-wider text-white/70">
                        {o.note}
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-1.5 pl-[22px] text-[0.8rem] leading-relaxed text-white/55">
                    {o.address}
                  </p>
                  <p className="mt-1 pl-[22px] text-[0.8rem] text-white/55">
                    {o.phones.join(" · ")}
                  </p>
                </div>
              ))}
              <div className="space-y-1.5 pl-[22px]">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2 text-[0.85rem] text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-white/60" />
                  {CONTACT_EMAIL}
                </a>
                <span className="flex items-center gap-2 text-[0.85rem] text-white/70">
                  <Globe className="h-3.5 w-3.5 shrink-0 text-white/60" />
                  {CONTACT_WEB}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-[0.78rem] text-white/45 sm:flex-row sm:px-8">
          <p>© OCAJA Technologies. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <Phone className="h-3 w-3" />
            Kampala · Lusaka
          </p>
        </div>
      </div>
    </footer>
  );
}
