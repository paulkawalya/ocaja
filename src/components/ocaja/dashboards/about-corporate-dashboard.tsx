"use client";

import { Building, MapPin, Users, Award, ShieldCheck, CheckCircle2 } from "lucide-react";

/**
 * High-fidelity Corporate & Regional Operations Dashboard
 * Showcases Ocaja's corporate structure, dual hubs in Kampala and Lusaka, and specialized engineering pods
 */
export function AboutCorporateDashboard() {
  return (
    <div className="flex h-[360px] w-full select-none bg-slate-900 text-[10px] leading-tight text-slate-200 sm:h-[440px] sm:text-xs font-sans">
      {/* Sidebar */}
      <div className="flex w-28 flex-col justify-between border-r border-slate-800 bg-[#071329] p-2.5 sm:w-36 sm:p-3.5">
        <div>
          <div className="flex items-center gap-1.5 pb-3 border-b border-slate-800">
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-blue-600 text-white font-bold text-xs shadow-md">
              <Building className="h-3.5 w-3.5" />
            </span>
            <div>
              <span className="block font-bold text-white">Ocaja Hub</span>
              <span className="block text-[8px] text-blue-400">Regional Footprint</span>
            </div>
          </div>

          <div className="mt-3 space-y-1">
            {[
              { label: "Kampala HQ", active: true },
              { label: "Lusaka Hub", active: false },
              { label: "Engineering Pods", active: false },
              { label: "Certifications", active: false },
              { label: "Partnerships", active: false },
              { label: "Executive Board", active: false },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 font-medium transition-colors ${
                  item.active
                    ? "bg-blue-600/20 text-blue-300 font-bold"
                    : "text-slate-400 hover:bg-slate-800"
                }`}
              >
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1.5 rounded-lg bg-blue-500/10 p-2 border border-blue-500/30 text-[9px] text-blue-300">
          <MapPin className="h-3 w-3 text-blue-400" />
          <span>UG & ZM Dual Hubs</span>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex flex-1 flex-col overflow-hidden bg-[#091836] p-3 sm:p-4">
        {/* Top bar */}
        <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm flex items-center gap-1.5">
              Regional Corporate & Engineering Operations
              <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2 py-0.5 text-[9px] font-semibold text-blue-400 border border-blue-500/30">
                10+ Years Regional Experience
              </span>
            </h4>
            <p className="text-[9px] text-slate-400">Headquartered in Kampala with an active regional delivery hub in Lusaka, Zambia</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-blue-950/80 px-2 py-1 font-mono text-[9px] text-blue-300 border border-blue-800/60">
              45+ Specialized Staff
            </span>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="mt-3 grid grid-cols-4 gap-2">
          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Regional Experience</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">10+ Years</span>
              <span className="text-[8px] font-semibold text-blue-400">Est. 2014</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Enterprise Projects</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">100+ Delivered</span>
              <span className="text-[8px] font-semibold text-emerald-400">100% SLA</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Client Retention</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">98%</span>
              <span className="text-[8px] font-semibold text-emerald-400">Top Tier</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Specialized Pods</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">4 Pods</span>
              <span className="text-[8px] font-semibold text-blue-400">Cross-border</span>
            </div>
          </div>
        </div>

        {/* Middle: Dual Hub Operations & Pods */}
        <div className="mt-3 grid grid-cols-3 gap-2 flex-1 min-h-0">
          {/* Dual Operations Hubs */}
          <div className="col-span-2 rounded-xl border border-slate-800 bg-slate-950/60 p-2.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white text-[10px] sm:text-xs">Dual Country Regional Presence</span>
                <span className="text-[9px] text-blue-300">Synchronized Delivery</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[9px]">
                {/* Kampala */}
                <div className="rounded-lg bg-slate-900 border border-slate-800 p-2.5">
                  <div className="flex items-center gap-1.5 font-bold text-white mb-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span>Uganda HQ (Kampala)</span>
                  </div>
                  <span className="block text-[8px] text-slate-400 leading-snug">
                    Crested Towers, Tall Tower 5th Floor, Hannington Road
                  </span>
                  <div className="mt-2 space-y-1 text-[8px] text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Team:</span>
                      <span className="font-mono text-emerald-400">28 Engineers</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Focus:</span>
                      <span className="font-semibold text-white">FinTech, Core AI & Cloud</span>
                    </div>
                  </div>
                </div>

                {/* Lusaka */}
                <div className="rounded-lg bg-slate-900 border border-slate-800 p-2.5">
                  <div className="flex items-center gap-1.5 font-bold text-white mb-1">
                    <span className="h-2 w-2 rounded-full bg-sky-400" />
                    <span>Zambia Hub (Lusaka)</span>
                  </div>
                  <span className="block text-[8px] text-slate-400 leading-snug">
                    Stand 2093, Mass Media, Off Alick Nkhata Road
                  </span>
                  <div className="mt-2 space-y-1 text-[8px] text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Team:</span>
                      <span className="font-mono text-sky-400">17 Specialists</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Focus:</span>
                      <span className="font-semibold text-white">Fleet IoT & Infrastructure</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom note */}
            <div className="mt-1.5 pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[9px]">
              <span className="text-slate-400">Locally incorporated in Uganda (URSB) & Zambia (PACRA)</span>
              <span className="text-emerald-400 font-medium">Full local tax & regulatory compliance</span>
            </div>
          </div>

          {/* Engineering Pods Mini Panel */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-2.5 flex flex-col justify-between">
            <span className="font-bold text-white text-[10px] sm:text-xs">Engineering Pods</span>
            <div className="mt-1 space-y-1.5 text-[9px]">
              {[
                { name: "FinTech Pod", staff: "12 Devs", lead: "Lead Architect" },
                { name: "IoT & Telematics", staff: "10 Devs", lead: "Hardware Specialist" },
                { name: "Cloud & DevOps", staff: "8 Devs", lead: "Site Reliability Eng" },
                { name: "Security & DPPA", staff: "6 Auditors", lead: "CISO Practice" },
              ].map((p) => (
                <div key={p.name} className="flex items-center justify-between rounded-lg bg-slate-900 p-1.5 border border-slate-800">
                  <div>
                    <span className="block font-medium text-slate-200">{p.name}</span>
                    <span className="block text-[8px] text-slate-400">{p.lead}</span>
                  </div>
                  <span className="font-mono text-[8px] text-blue-400 font-bold">{p.staff}</span>
                </div>
              ))}
            </div>

            <div className="mt-1 rounded-lg bg-blue-500/10 p-1.5 border border-blue-500/20 text-center">
              <span className="text-[8px] font-semibold text-blue-300">Dedicated Practice Teams</span>
            </div>
          </div>
        </div>

        {/* Bottom Certifications Chips */}
        <div className="mt-2.5 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/40 px-3 py-1.5 text-[9px]">
          <span className="font-medium text-slate-400">Institutional Standing:</span>
          <div className="flex flex-wrap gap-1.5">
            {["URSB Registered", "PACRA Registered", "URA Tax Compliant", "ZRA Tax Compliant", "ISO 27001 Aligned", "DPPA Registered"].map((tech) => (
              <span key={tech} className="rounded-md bg-blue-950/60 px-1.5 py-0.5 text-blue-200 border border-blue-800/50">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
