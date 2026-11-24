"use client";

import { Building2, Globe2, Landmark, Stethoscope, ShoppingBag, ShieldCheck, CheckCircle2 } from "lucide-react";

/**
 * High-fidelity Sectors Dashboard
 * Showcases multi-industry digital solutions across Banking, Logistics, Healthcare, and Public Sector
 */
export function SectorsDashboard() {
  return (
    <div className="flex h-[360px] w-full select-none bg-slate-900 text-[10px] leading-tight text-slate-200 sm:h-[440px] sm:text-xs font-sans">
      {/* Sidebar */}
      <div className="flex w-28 flex-col justify-between border-r border-slate-800 bg-[#061124] p-2.5 sm:w-36 sm:p-3.5">
        <div>
          <div className="flex items-center gap-1.5 pb-3 border-b border-slate-800">
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-sky-500 text-white font-bold text-xs shadow-md">
              <Globe2 className="h-3.5 w-3.5" />
            </span>
            <div>
              <span className="block font-bold text-white">SectorsIQ</span>
              <span className="block text-[8px] text-sky-400">Industry Matrix</span>
            </div>
          </div>

          <div className="mt-3 space-y-1">
            {[
              { label: "Banking & SACCOs", active: true },
              { label: "Logistics & Freight", active: false },
              { label: "Healthcare & Labs", active: false },
              { label: "Public Sector E-Gov", active: false },
              { label: "Retail & FMCG", active: false },
              { label: "Telecom / Energy", active: false },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 font-medium transition-colors ${
                  item.active
                    ? "bg-sky-500/20 text-sky-300 font-bold"
                    : "text-slate-400 hover:bg-slate-800"
                }`}
              >
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1.5 rounded-lg bg-emerald-500/10 p-2 border border-emerald-500/30 text-[9px] text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>UG & ZM Active</span>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex flex-1 flex-col overflow-hidden bg-[#0a1733] p-3 sm:p-4">
        {/* Top bar */}
        <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm flex items-center gap-1.5">
              African Industry Solutions Operations
              <span className="inline-flex items-center rounded-full bg-sky-500/10 px-2 py-0.5 text-[9px] font-semibold text-sky-400 border border-sky-500/30">
                120+ Deployments
              </span>
            </h4>
            <p className="text-[9px] text-slate-400">Specialized architectures tailored to local regulatory mandates and market realities</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-sky-950/80 px-2 py-1 font-mono text-[9px] text-sky-300 border border-sky-800/60">
              Avg SLA: 99.96%
            </span>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="mt-3 grid grid-cols-4 gap-2">
          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Banking Txns / Mo</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">12.4M</span>
              <span className="text-[8px] font-semibold text-emerald-400">+14%</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Tracked Vehicles</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">640 Units</span>
              <span className="text-[8px] font-semibold text-sky-400">Live GPS</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Patient Records</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">280,000</span>
              <span className="text-[8px] font-semibold text-emerald-400">DPPA Safe</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Tax Fiscal Sync</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">100%</span>
              <span className="text-[8px] font-semibold text-emerald-400">EFRIS/Smart</span>
            </div>
          </div>
        </div>

        {/* Middle: Industry Matrix & Active Projects */}
        <div className="mt-3 grid grid-cols-3 gap-2 flex-1 min-h-0">
          {/* Industry Verticals Breakdown */}
          <div className="col-span-2 rounded-xl border border-slate-800 bg-slate-950/60 p-2.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white text-[10px] sm:text-xs">Industry Performance & Sector Uptime</span>
                <span className="text-[9px] text-sky-300">Live Telemetry</span>
              </div>
              <div className="space-y-1.5 text-[9px]">
                {[
                  { sector: "Financial Services", metric: "Core Banking & Mobile Money switch", uptime: "99.99%", status: "Optimal" },
                  { sector: "Logistics & Cross-Border", metric: "Transit Corridors & Fuel Anti-Siphon", uptime: "99.85%", status: "Optimal" },
                  { sector: "Healthcare & Pharmaceuticals", metric: "Cold Chain IoT (-20°C to +4°C) & E-Records", uptime: "99.94%", status: "Optimal" },
                  { sector: "Public Sector & E-Gov", metric: "Automated Fiscalization & Citizen Portals", uptime: "99.97%", status: "Optimal" },
                ].map((sec) => (
                  <div key={sec.sector} className="flex items-center justify-between rounded-lg bg-slate-900 border border-slate-800 px-2.5 py-1.5">
                    <div>
                      <span className="font-bold text-white">{sec.sector}</span>
                      <span className="block text-[8px] text-slate-400">{sec.metric}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-emerald-400 font-semibold">{sec.uptime}</span>
                      <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom note */}
            <div className="mt-1.5 pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[9px]">
              <span className="text-slate-400">Compliant with Central Bank & Revenue Authority standards</span>
              <span className="text-sky-400 font-medium">UGX / ZMW multi-currency rails</span>
            </div>
          </div>

          {/* Regional Hubs Mini Panel */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-2.5 flex flex-col justify-between">
            <span className="font-bold text-white text-[10px] sm:text-xs">Regional Nodes</span>
            <div className="mt-1 space-y-1.5 text-[9px]">
              {[
                { node: "Kampala HQ (Crested Towers)", ping: "3ms", status: "Primary Node" },
                { node: "Lusaka Hub (Mass Media)", ping: "14ms", status: "Active Node" },
                { node: "Entebbe Edge Gateway", ping: "8ms", status: "Edge Relay" },
                { node: "Ndola Copperbelt Node", ping: "19ms", status: "Edge Relay" },
              ].map((n) => (
                <div key={n.node} className="rounded-lg bg-slate-900 p-1.5 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-200 font-medium">
                    <span className="truncate">{n.node}</span>
                    <span className="font-mono text-[8px] text-emerald-400">{n.ping}</span>
                  </div>
                  <span className="text-[8px] text-slate-400">{n.status}</span>
                </div>
              ))}
            </div>

            <div className="mt-1 rounded-lg bg-sky-500/10 p-1.5 border border-sky-500/20 text-center">
              <span className="text-[8px] font-semibold text-sky-300">Africa-First Architecture</span>
            </div>
          </div>
        </div>

        {/* Bottom Industry Compliance Chips */}
        <div className="mt-2.5 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/40 px-3 py-1.5 text-[9px]">
          <span className="font-medium text-slate-400">Regulatory Alignments:</span>
          <div className="flex flex-wrap gap-1.5">
            {["Bank of Uganda NPS", "Bank of Zambia Switch", "URA EFRIS", "ZRA Smart Invoice", "DPPA Uganda", "WHO GDP"].map((tech) => (
              <span key={tech} className="rounded-md bg-sky-950/60 px-1.5 py-0.5 text-sky-200 border border-sky-800/50">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
