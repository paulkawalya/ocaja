"use client";

import { Mail, Globe, Phone, MapPin, ArrowRight, Check, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Logo, PillarMark } from "./logo";
import {
  PILLARS,
  OFFICES,
  CONTACT_EMAIL,
  CONTACT_WEB,
  type Route,
} from "@/lib/ocaja-data";

export function SiteFooter({ navigate }: { navigate: (r: Route) => void }) {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const quickLinks: { label: string; route: Route }[] = [
    { label: "Home", route: { name: "home" } },
    { label: "About Us", route: { name: "about" } },
    { label: "Solutions & Products", route: { name: "solutions" } },
    { label: "Industries & Sectors", route: { name: "sectors" } },
    { label: "How We Work", route: { name: "how-we-work" } },
    { label: "Contact Us", route: { name: "contact" } },
  ];

  return (
    <footer className="mt-auto bg-[#02183c] text-white">
      {/* Talentelgia Top Accent Line */}
      <div className="talentelgia-accent-line" />

      {/* Newsletter Bar */}
      <div className="border-b border-white/10 bg-[#021433] py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2AE6FB]">
              Technology Advisory &amp; Regional Insights
            </span>
            <h4 className="mt-1 font-heading text-lg font-bold text-white">
              Ready to Transform Ideas into Next-Gen Digital Reality?
            </h4>
          </div>

          <div className="w-full max-w-md">
            {subscribed ? (
              <div className="flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2.5 text-xs font-medium text-emerald-300">
                <Check className="h-4 w-4" />
                Thank you! You are subscribed to OCAJA Technology Insights.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="h-10 w-full rounded-full border border-white/20 bg-white/10 px-4 text-xs text-white placeholder-white/50 focus:border-[#2AE6FB] focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex h-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#2AE6FB] px-5 text-xs font-bold uppercase tracking-wider text-[#02183c] transition-colors hover:bg-white"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <Logo reversed />
            <p className="mt-5 max-w-xs font-heading text-[1.05rem] font-semibold leading-snug text-white/90">
              Six Pillars. One Technology Partner.
            </p>
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10">
              <PillarMark className="h-5 w-12 shrink-0 text-white/80" barClass="fill-current" />
              <p className="text-[0.8rem] leading-relaxed text-white/70">
                Serving organisations across Uganda, Zambia and the wider East &amp; Southern
                African region with 24/7 Managed Security, Cloud, AI, and Software Engineering.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              <span>Uganda DPPA &amp; GDPR Aligned · Enterprise Standard</span>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#2AE6FB]">
              Six Practices
            </p>
            <ul className="mt-4 space-y-2.5">
              {PILLARS.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => navigate({ name: "pillar", pillarId: p.id })}
                    className="cursor-pointer text-left text-[0.88rem] text-white/70 transition-colors hover:text-[#2AE6FB]"
                  >
                    {p.menuTitle}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#2AE6FB]">
              Company
            </p>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <button
                    type="button"
                    onClick={() => navigate(l.route)}
                    className="cursor-pointer text-left text-[0.88rem] text-white/70 transition-colors hover:text-[#2AE6FB]"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Offices */}
          <div>
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#2AE6FB]">
              Offices &amp; Direct Access
            </p>
            <div className="mt-4 space-y-5">
              {OFFICES.map((o) => (
                <div key={o.country}>
                  <p className="flex items-center gap-2 text-[0.88rem] font-semibold text-white">
                    <MapPin className="h-3.5 w-3.5 text-[#2AE6FB]" />
                    {o.city}, {o.country}
                    {o.note ? (
                      <span className="rounded-full bg-[#2AE6FB]/10 border border-[#2AE6FB]/30 px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-[#2AE6FB]">
                        {o.note}
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-1.5 pl-[22px] text-[0.8rem] leading-relaxed text-white/60">
                    {o.address}
                  </p>
                  <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 pl-[22px] text-[0.8rem] text-white/70">
                    {o.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s+/g, "")}`}
                        className="hover:text-[#2AE6FB] transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <div className="space-y-1.5 pl-[22px] pt-1">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2 text-[0.85rem] text-white/80 transition-colors hover:text-[#2AE6FB]"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-[#2AE6FB]" />
                  {CONTACT_EMAIL}
                </a>
                <span className="flex items-center gap-2 text-[0.85rem] text-white/80">
                  <Globe className="h-3.5 w-3.5 shrink-0 text-[#2AE6FB]" />
                  {CONTACT_WEB}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#01112b]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-[0.78rem] text-white/50 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} OCAJA Technologies. Driven by Code. Defined by Innovation.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#2AE6FB]">
              <Phone className="h-3 w-3" />
              Kampala Head Office · Lusaka Office
            </span>
            <span>·</span>
            <span>Independent &amp; Vendor-Neutral</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
