"use client";

import { Phone, Mail, ShieldCheck, ArrowRight } from "lucide-react";
import type { Route } from "@/lib/ocaja-data";

export function TopBanner({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <div className="hidden border-b border-white/10 bg-[#091533] px-4 py-2 text-xs text-white/80 md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        {/* Left: SOC status & Regional presence */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 font-medium text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="flex items-center gap-1 text-[0.73rem] font-semibold tracking-wide uppercase">
              <ShieldCheck className="h-3.5 w-3.5" />
              24/7 SOC & Cyber Defense Active
            </span>
          </div>

          <span className="h-3 w-px bg-white/20" />

          <span className="text-white/70">
            Regional Hubs: <strong className="font-semibold text-white">Uganda</strong> (Kampala) &{" "}
            <strong className="font-semibold text-white">Zambia</strong> (Lusaka)
          </span>
        </div>

        {/* Right: Direct contact & quick consultation */}
        <div className="flex items-center gap-5">
          <a
            href="tel:+256772418560"
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Phone className="h-3 w-3 text-cyan-400" />
            <span>UG: +256 772 418 560</span>
          </a>

          <a
            href="tel:+260976335914"
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Phone className="h-3 w-3 text-cyan-400" />
            <span>ZM: +260 976 335 914</span>
          </a>

          <a
            href="mailto:info@ocajatech.com"
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Mail className="h-3 w-3 text-cyan-400" />
            <span>info@ocajatech.com</span>
          </a>

          <button
            type="button"
            onClick={() => navigate({ name: "contact" })}
            className="inline-flex cursor-pointer items-center gap-1 font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
          >
            <span>Book Strategy Call</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
