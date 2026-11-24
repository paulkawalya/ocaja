"use client";

import { Code2, GitBranch, Terminal, Cpu, CheckCircle2, Zap } from "lucide-react";

/**
 * High-fidelity Software & Applications Dashboard
 * Tailored for Custom Software, Mobile PWA, and SaaS Engineering
 */
export function SoftwareDashboard() {
  return (
    <div className="flex h-[360px] w-full select-none bg-slate-900 text-[10px] leading-tight text-slate-200 sm:h-[440px] sm:text-xs font-sans">
      {/* Sidebar */}
      <div className="flex w-28 flex-col justify-between border-r border-slate-800 bg-slate-950 p-2.5 sm:w-36 sm:p-3.5">
        <div>
          <div className="flex items-center gap-1.5 pb-3 border-b border-slate-800">
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-indigo-500 text-white font-bold text-xs shadow-md">
              <Code2 className="h-3.5 w-3.5" />
            </span>
            <div>
              <span className="block font-bold text-white">AppStudio</span>
              <span className="block text-[8px] text-indigo-400">CI/CD & SaaS Hub</span>
            </div>
          </div>

          <div className="mt-3 space-y-1">
            {[
              { label: "Pipelines", active: true },
              { label: "Microservices", active: false },
              { label: "API Gateways", active: false },
              { label: "Mobile Builds", active: false },
              { label: "Telemetry", active: false },
              { label: "Repositories", active: false },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 font-medium transition-colors ${
                  item.active
                    ? "bg-indigo-500/20 text-indigo-300 font-bold"
                    : "text-slate-400 hover:bg-slate-800"
                }`}
              >
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1.5 rounded-lg bg-emerald-500/10 p-2 border border-emerald-500/30 text-[9px] text-emerald-300">
          <GitBranch className="h-3 w-3 text-emerald-400" />
          <span>v2.8.4 Live (main)</span>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex flex-1 flex-col overflow-hidden bg-slate-900 p-3 sm:p-4">
        {/* Top bar */}
        <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm flex items-center gap-1.5">
              Production Release Pipeline
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-semibold text-emerald-400 border border-emerald-500/30">
                100% Passing
              </span>
            </h4>
            <p className="text-[9px] text-slate-400">Zero-downtime rolling deployment to East Africa cluster</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-slate-800 px-2 py-1 font-mono text-[9px] text-indigo-300 border border-slate-700">
              commit #8f92c1d
            </span>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="mt-3 grid grid-cols-4 gap-2">
          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">API Response</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">42ms</span>
              <span className="text-[8px] font-semibold text-emerald-400">-12ms</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Daily Requests</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">3.4M</span>
              <span className="text-[8px] font-semibold text-emerald-400">+22%</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Error Rate</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">0.002%</span>
              <span className="text-[8px] font-semibold text-emerald-400">Healthy</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">App Store Health</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">4.9 ★</span>
              <span className="text-[8px] font-semibold text-indigo-400">iOS & Play</span>
            </div>
          </div>
        </div>

        {/* Middle: CI/CD Pipeline stages & Services */}
        <div className="mt-3 grid grid-cols-3 gap-2 flex-1 min-h-0">
          {/* CI/CD Stages */}
          <div className="col-span-2 rounded-xl border border-slate-800 bg-slate-950/60 p-2.5 flex flex-col justify-between">
            <div>
              <span className="font-bold text-white text-[10px] sm:text-xs">Continuous Delivery Pipeline</span>
              <div className="mt-2 grid grid-cols-4 gap-1.5 text-[9px]">
                {[
                  { stage: "1. Lint & Test", desc: "412 unit tests", status: "Passed", time: "42s", ok: true },
                  { stage: "2. Build Artifacts", desc: "Docker & PWA bundle", status: "Built", time: "1m 18s", ok: true },
                  { stage: "3. Vulnerability Scan", desc: "Trivy zero-cve", status: "Clean", time: "14s", ok: true },
                  { stage: "4. Production Deploy", desc: "Canary 100%", status: "Live", time: "30s", ok: true },
                ].map((s) => (
                  <div key={s.stage} className="rounded-lg bg-slate-900 border border-slate-800 p-2">
                    <div className="flex items-center justify-between text-slate-300 font-semibold mb-1">
                      <span className="truncate">{s.stage}</span>
                      <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0" />
                    </div>
                    <span className="block text-[8px] text-slate-400 truncate">{s.desc}</span>
                    <span className="mt-1 inline-block font-mono text-[8px] text-indigo-400">{s.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Throughput chart */}
            <div className="mt-2 pt-2 border-t border-slate-800/80">
              <div className="flex items-center justify-between text-[9px] text-slate-400 mb-1">
                <span>API Throughput (Req/sec)</span>
                <span className="font-mono text-emerald-400">Peak: 4,820 req/s</span>
              </div>
              <svg className="h-10 w-full overflow-visible" viewBox="0 0 300 40">
                <path
                  d="M0,32 Q30,28 60,30 T120,20 T180,12 T240,16 T300,8"
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="2"
                />
                <circle cx="300" cy="8" r="3" fill="#6366f1" />
              </svg>
            </div>
          </div>

          {/* Microservices Health */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-2.5 flex flex-col justify-between">
            <span className="font-bold text-white text-[10px] sm:text-xs">Microservices Fleet</span>
            <div className="mt-1 space-y-1.5 text-[9px]">
              {[
                { name: "Auth & RBAC (Go)", latency: "14ms", status: "Healthy" },
                { name: "Payment Rail (Node/TS)", latency: "28ms", status: "Healthy" },
                { name: "PWA Web Gateway (Next.js)", latency: "36ms", status: "Healthy" },
                { name: "Push Dispatcher (Rust)", latency: "8ms", status: "Healthy" },
              ].map((svc) => (
                <div key={svc.name} className="flex items-center justify-between rounded-lg bg-slate-900/80 px-2 py-1 border border-slate-800/60">
                  <div className="truncate">
                    <span className="block font-medium text-slate-200 truncate">{svc.name}</span>
                    <span className="block font-mono text-[8px] text-slate-400">{svc.latency}</span>
                  </div>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
              ))}
            </div>
            <div className="mt-1 rounded-lg bg-indigo-500/10 p-1.5 border border-indigo-500/20 text-center">
              <span className="text-[8px] font-semibold text-indigo-300">Modern Polyglot Stack</span>
            </div>
          </div>
        </div>

        {/* Bottom Stack Chips */}
        <div className="mt-2.5 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/40 px-3 py-1.5 text-[9px]">
          <span className="font-medium text-slate-400">Engineered with:</span>
          <div className="flex flex-wrap gap-1.5">
            {["Next.js", "React Native", "TypeScript", "Go", "PostgreSQL", "Docker", "GraphQL"].map((tech) => (
              <span key={tech} className="rounded-md bg-slate-800/90 px-1.5 py-0.5 text-slate-300 border border-slate-700/60">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
