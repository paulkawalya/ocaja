"use client";

import { Cpu, ShieldCheck, Cloud, Code2, BrainCircuit, Compass, CheckCircle2, Layers } from "lucide-react";

/**
 * High-fidelity Services Ecosystem Dashboard
 * Showcases the complete 6-pillar engineering matrix of Ocaja Group
 */
export function ServicesEcosystemDashboard() {
  return (
    <div className="flex h-[360px] w-full select-none bg-slate-900 text-[10px] leading-tight text-slate-200 sm:h-[440px] sm:text-xs font-sans">
      {/* Sidebar */}
      <div className="flex w-28 flex-col justify-between border-r border-slate-800 bg-[#061021] p-2.5 sm:w-36 sm:p-3.5">
        <div>
          <div className="flex items-center gap-1.5 pb-3 border-b border-slate-800">
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-[#1685f8] text-white font-bold text-xs shadow-md">
              <Layers className="h-3.5 w-3.5" />
            </span>
            <div>
              <span className="block font-bold text-white">Ecosystem</span>
              <span className="block text-[8px] text-sky-400">6 Practices</span>
            </div>
          </div>

          <div className="mt-3 space-y-1">
            {[
              { label: "Practice Matrix", active: true },
              { label: "Active Projects", active: false },
              { label: "Resource Pods", active: false },
              { label: "Cross-Discipline", active: false },
              { label: "SLA Monitor", active: false },
              { label: "Delivery Models", active: false },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 font-medium transition-colors ${
                  item.active
                    ? "bg-[#1685f8]/20 text-sky-300 font-bold"
                    : "text-slate-400 hover:bg-slate-800"
                }`}
              >
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1.5 rounded-lg bg-emerald-500/10 p-2 border border-emerald-500/30 text-[9px] text-emerald-300">
          <CheckCircle2 className="h-3 w-3 text-emerald-400" />
          <span>All 6 Pillars Active</span>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex flex-1 flex-col overflow-hidden bg-[#08152e] p-3 sm:p-4">
        {/* Top bar */}
        <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm flex items-center gap-1.5">
              Integrated Multi-Disciplinary Practice Matrix
              <span className="inline-flex items-center rounded-full bg-sky-500/10 px-2 py-0.5 text-[9px] font-semibold text-sky-400 border border-sky-500/30">
                End-to-End Enterprise Capability
              </span>
            </h4>
            <p className="text-[9px] text-slate-400">From low-level hardware telematics to high-frequency core banking switches and cloud infrastructure</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-sky-950/80 px-2 py-1 font-mono text-[9px] text-sky-300 border border-sky-800/60">
              84 Active Projects
            </span>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="mt-3 grid grid-cols-4 gap-2">
          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Core Practices</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">6 Pillars</span>
              <span className="text-[8px] font-semibold text-sky-400">Full Stack</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Ecosystem SLA</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">99.98%</span>
              <span className="text-[8px] font-semibold text-emerald-400">Guaranteed</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Specialist Staff</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">45+ Engineers</span>
              <span className="text-[8px] font-semibold text-sky-400">In-house</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Delivery Success</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">100%</span>
              <span className="text-[8px] font-semibold text-emerald-400">On Target</span>
            </div>
          </div>
        </div>

        {/* Middle: 6 Pillars Cards */}
        <div className="mt-3 grid grid-cols-3 gap-2 flex-1 min-h-0">
          {[
            {
              title: "Digital Financial Services",
              desc: "Mobile Money switches, micro-lending rails, URA EFRIS fiscal sync",
              color: "text-cyan-400",
              border: "border-cyan-500/20",
              tag: "FinTech Hub",
            },
            {
              title: "Cybersecurity & Defense",
              desc: "24/7 SOC monitoring, penetration tests, DPPA & ISO 27001",
              color: "text-rose-400",
              border: "border-rose-500/20",
              tag: "Zero Trust",
            },
            {
              title: "Cloud Infrastructure",
              desc: "AWS, Azure, GCP multi-cloud, Kubernetes, Terraform, RPO < 5m",
              color: "text-blue-400",
              border: "border-blue-500/20",
              tag: "Cloud Native",
            },
            {
              title: "Software & Mobile Apps",
              desc: "High-performance React Native, Next.js, Go microservices, PWAs",
              color: "text-indigo-400",
              border: "border-indigo-500/20",
              tag: "App Studio",
            },
            {
              title: "AI & Data Analytics",
              desc: "Document OCR, predictive fleet fuel models, BigQuery analytics",
              color: "text-purple-400",
              border: "border-purple-500/20",
              tag: "Cortex AI",
            },
            {
              title: "IT Consulting & Training",
              desc: "Enterprise architecture roadmaps, ISO audits, technical academy",
              color: "text-teal-400",
              border: "border-teal-500/20",
              tag: "AdvisoryIQ",
            },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className={`rounded-xl border ${pillar.border} bg-slate-950/70 p-2 sm:p-2.5 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-bold text-[10px] sm:text-xs ${pillar.color}`}>{pillar.title}</span>
                  <span className="rounded bg-slate-900 px-1.5 py-0.5 text-[8px] font-mono text-slate-300">
                    {pillar.tag}
                  </span>
                </div>
                <p className="text-[8px] sm:text-[9px] text-slate-400 leading-snug">{pillar.desc}</p>
              </div>
              <div className="mt-1 flex items-center justify-between text-[8px] text-slate-400 pt-1 border-t border-slate-900">
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="h-2.5 w-2.5" /> Fully Operational
                </span>
                <span className="text-sky-300">Explore →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Engagement Models Chips */}
        <div className="mt-2.5 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/40 px-3 py-1.5 text-[9px]">
          <span className="font-medium text-slate-400">Engagement Models:</span>
          <div className="flex flex-wrap gap-1.5">
            {["Dedicated Engineering Pods", "Turn-Key Solutions", "Managed Services (SLA)", "Technical Advisory & Training"].map((tech) => (
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
