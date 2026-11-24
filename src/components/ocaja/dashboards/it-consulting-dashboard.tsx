"use client";

import { Award, Briefcase, GraduationCap, CheckCircle2, TrendingUp, Compass } from "lucide-react";

/**
 * High-fidelity IT Consulting & Training Dashboard
 * Tailored for Digital Transformation, IT Governance, ISO Compliance, and Workforce Upskilling
 */
export function ItConsultingDashboard() {
  return (
    <div className="flex h-[360px] w-full select-none bg-slate-900 text-[10px] leading-tight text-slate-200 sm:h-[440px] sm:text-xs font-sans">
      {/* Sidebar */}
      <div className="flex w-28 flex-col justify-between border-r border-slate-800 bg-[#071324] p-2.5 sm:w-36 sm:p-3.5">
        <div>
          <div className="flex items-center gap-1.5 pb-3 border-b border-slate-800">
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-teal-600 text-white font-bold text-xs shadow-md">
              <Compass className="h-3.5 w-3.5" />
            </span>
            <div>
              <span className="block font-bold text-white">AdvisoryIQ</span>
              <span className="block text-[8px] text-teal-400">IT Governance</span>
            </div>
          </div>

          <div className="mt-3 space-y-1">
            {[
              { label: "Modernization", active: true },
              { label: "ISO 27001 Audit", active: false },
              { label: "DPPA Readiness", active: false },
              { label: "Corporate Academy", active: false },
              { label: "Enterprise Arch", active: false },
              { label: "Vendor Strategy", active: false },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 font-medium transition-colors ${
                  item.active
                    ? "bg-teal-600/20 text-teal-300 font-bold"
                    : "text-slate-400 hover:bg-slate-800"
                }`}
              >
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1.5 rounded-lg bg-teal-500/10 p-2 border border-teal-500/30 text-[9px] text-teal-300">
          <Award className="h-3 w-3 text-teal-400" />
          <span>Audit Clean / 0 NCs</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden bg-[#09182d] p-3 sm:p-4">
        {/* Top bar */}
        <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm flex items-center gap-1.5">
              Digital Transformation & Governance Roadmap
              <span className="inline-flex items-center rounded-full bg-teal-500/10 px-2 py-0.5 text-[9px] font-semibold text-teal-400 border border-teal-500/30">
                Phase 2 In-Flight
              </span>
            </h4>
            <p className="text-[9px] text-slate-400">Enterprise architecture, regulatory alignment, and workforce technical competency</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-teal-950/80 px-2 py-1 font-mono text-[9px] text-teal-300 border border-teal-800/60">
              Audit Score: 98.6%
            </span>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="mt-3 grid grid-cols-4 gap-2">
          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">IT Maturity Score</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">4.8 / 5.0</span>
              <span className="text-[8px] font-semibold text-teal-400">+32%</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Staff Trained</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">480 Engineers</span>
              <span className="text-[8px] font-semibold text-teal-400">100% Pass</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Open Audit Gaps</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">0 Items</span>
              <span className="text-[8px] font-semibold text-emerald-400">Resolved</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Modernization ROI</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">3.4x</span>
              <span className="text-[8px] font-semibold text-teal-400">Cost Savings</span>
            </div>
          </div>
        </div>

        {/* Middle: Roadmap & Training Matrix */}
        <div className="mt-3 grid grid-cols-3 gap-2 flex-1 min-h-0">
          {/* 3-Year Roadmap */}
          <div className="col-span-2 rounded-xl border border-slate-800 bg-slate-950/60 p-2.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white text-[10px] sm:text-xs">Strategic Modernization Roadmap</span>
                <span className="text-[9px] text-teal-300">Quarterly Milestones</span>
              </div>
              <div className="space-y-2 text-[9px]">
                {[
                  { phase: "Phase 1: Cloud & Data Center Modernization", prog: 100, desc: "Multi-cloud migration & backup redundancy", status: "Completed" },
                  { phase: "Phase 2: Zero-Trust Security & ISO 27001", prog: 85, desc: "RBAC, endpoint EDR, and DPPA privacy audit", status: "On Track" },
                  { phase: "Phase 3: Automated Micro-Services & API Bus", prog: 40, desc: "Core banking & fleet telematics decoupling", status: "Active" },
                ].map((item) => (
                  <div key={item.phase} className="rounded-lg bg-slate-900 border border-slate-800 p-2">
                    <div className="flex items-center justify-between text-slate-200 font-semibold">
                      <span>{item.phase}</span>
                      <span className="text-[8px] font-mono text-teal-400">{item.prog}%</span>
                    </div>
                    <span className="text-[8px] text-slate-400 block mt-0.5">{item.desc}</span>
                    <div className="mt-1 h-1 w-full rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-teal-500 rounded-full" style={{ width: `${item.prog}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Assessment Rating */}
            <div className="mt-1 pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[9px]">
              <span className="text-slate-400">Board Governance Review</span>
              <span className="font-semibold text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3" /> Approved for Fiscal Year 2026/27
              </span>
            </div>
          </div>

          {/* Corporate Academy */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-2.5 flex flex-col justify-between">
            <span className="font-bold text-white text-[10px] sm:text-xs">Corporate Academy</span>
            <div className="mt-1 space-y-1.5 text-[9px]">
              {[
                { track: "Security Awareness", completion: "100%", role: "All Staff" },
                { track: "Cloud Architecture", completion: "94%", role: "DevOps & SysAdmins" },
                { track: "DPPA Data Privacy", completion: "98%", role: "Legal & Operations" },
                { track: "Agile Scrum Delivery", completion: "92%", role: "Product Leads" },
              ].map((trk) => (
                <div key={trk.track} className="rounded-lg bg-slate-900 p-1.5 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-200 font-medium">
                    <span className="truncate">{trk.track}</span>
                    <span className="text-teal-400 font-bold">{trk.completion}</span>
                  </div>
                  <span className="text-[8px] text-slate-400">{trk.role}</span>
                </div>
              ))}
            </div>

            <div className="mt-1 rounded-lg bg-teal-500/10 p-1.5 border border-teal-500/20 text-center">
              <span className="text-[8px] font-semibold text-teal-300">Continuous Capability Building</span>
            </div>
          </div>
        </div>

        {/* Bottom Framework Chips */}
        <div className="mt-2.5 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/40 px-3 py-1.5 text-[9px]">
          <span className="font-medium text-slate-400">Governance Frameworks:</span>
          <div className="flex flex-wrap gap-1.5">
            {["TOGAF 10", "COBIT 2019", "ISO/IEC 27001", "ITIL v4", "DPPA 2019", "ZICTA Data Act"].map((tech) => (
              <span key={tech} className="rounded-md bg-teal-950/60 px-1.5 py-0.5 text-teal-200 border border-teal-800/50">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
