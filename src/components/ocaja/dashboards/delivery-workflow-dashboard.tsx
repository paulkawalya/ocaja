"use client";

import { CheckCircle2, GitPullRequest, Layers, Clock, ShieldCheck, Flame } from "lucide-react";

/**
 * High-fidelity Delivery Workflow Dashboard
 * Showcases agile delivery, sprint burndown, code review velocity, and automated quality gates
 */
export function DeliveryWorkflowDashboard() {
  return (
    <div className="flex h-[360px] w-full select-none bg-slate-900 text-[10px] leading-tight text-slate-200 sm:h-[440px] sm:text-xs font-sans">
      {/* Sidebar */}
      <div className="flex w-28 flex-col justify-between border-r border-slate-800 bg-[#0c1222] p-2.5 sm:w-36 sm:p-3.5">
        <div>
          <div className="flex items-center gap-1.5 pb-3 border-b border-slate-800">
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-emerald-600 text-white font-bold text-xs shadow-md">
              <Layers className="h-3.5 w-3.5" />
            </span>
            <div>
              <span className="block font-bold text-white">AgileOps</span>
              <span className="block text-[8px] text-emerald-400">Delivery Velocity</span>
            </div>
          </div>

          <div className="mt-3 space-y-1">
            {[
              { label: "Active Sprint", active: true },
              { label: "Backlog & Scope", active: false },
              { label: "Pull Requests", active: false },
              { label: "QA & Testing", active: false },
              { label: "Deployment Gates", active: false },
              { label: "SLA Monitor", active: false },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 font-medium transition-colors ${
                  item.active
                    ? "bg-emerald-600/20 text-emerald-300 font-bold"
                    : "text-slate-400 hover:bg-slate-800"
                }`}
              >
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1.5 rounded-lg bg-emerald-500/10 p-2 border border-emerald-500/30 text-[9px] text-emerald-300">
          <Flame className="h-3 w-3 text-emerald-400" />
          <span>Sprint 42: On Schedule</span>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex flex-1 flex-col overflow-hidden bg-[#0d162d] p-3 sm:p-4">
        {/* Top bar */}
        <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm flex items-center gap-1.5">
              Sprint 42 Kanban & Delivery Velocity
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-semibold text-emerald-400 border border-emerald-500/30">
                Velocity: 68 Pts
              </span>
            </h4>
            <p className="text-[9px] text-slate-400">Discover → Architecture → Build → Verify → Deploy with zero regression</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-emerald-950/80 px-2 py-1 font-mono text-[9px] text-emerald-300 border border-emerald-800/60">
              PR Turnaround: 1.4h
            </span>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="mt-3 grid grid-cols-4 gap-2">
          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Sprint Completion</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">88%</span>
              <span className="text-[8px] font-semibold text-emerald-400">42 / 48 Pts</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Automated Tests</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">94.2%</span>
              <span className="text-[8px] font-semibold text-emerald-400">Coverage</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Avg Lead Time</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">3.8 Days</span>
              <span className="text-[8px] font-semibold text-emerald-400">Commit to Prod</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Client CSAT</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">98.4%</span>
              <span className="text-[8px] font-semibold text-emerald-400">Sprint Signoff</span>
            </div>
          </div>
        </div>

        {/* Middle: 4 Stage Board & Quality Gates */}
        <div className="mt-3 grid grid-cols-3 gap-2 flex-1 min-h-0">
          {/* Kanban Board Slices */}
          <div className="col-span-2 rounded-xl border border-slate-800 bg-slate-950/60 p-2.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white text-[10px] sm:text-xs">Active Workflow Stages</span>
                <span className="text-[9px] text-emerald-400 font-mono">2-Week Sprint Cadence</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 text-[9px]">
                {/* Column 1 */}
                <div className="rounded-lg bg-slate-900 border border-slate-800 p-2">
                  <div className="font-bold text-indigo-300 mb-1.5 flex items-center justify-between">
                    <span>1. In Development</span>
                    <span className="rounded bg-indigo-500/20 px-1 text-[8px]">2</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="rounded bg-slate-950 p-1.5 border border-slate-800">
                      <span className="block font-medium text-slate-200">#384 MoMo Webhook</span>
                      <span className="block text-[8px] text-slate-400">Idempotency & retry</span>
                    </div>
                    <div className="rounded bg-slate-950 p-1.5 border border-slate-800">
                      <span className="block font-medium text-slate-200">#387 Fuel Sensor CAN</span>
                      <span className="block text-[8px] text-slate-400">J1939 decoder fix</span>
                    </div>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="rounded-lg bg-slate-900 border border-slate-800 p-2">
                  <div className="font-bold text-amber-300 mb-1.5 flex items-center justify-between">
                    <span>2. Review & QA</span>
                    <span className="rounded bg-amber-500/20 px-1 text-[8px]">2</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="rounded bg-slate-950 p-1.5 border border-slate-800">
                      <span className="block font-medium text-slate-200">#381 Biometric Auth</span>
                      <span className="block text-[8px] text-emerald-400">QA Signed off</span>
                    </div>
                    <div className="rounded bg-slate-950 p-1.5 border border-slate-800">
                      <span className="block font-medium text-slate-200">#389 EFRIS V3 XML</span>
                      <span className="block text-[8px] text-amber-400">In Peer Review</span>
                    </div>
                  </div>
                </div>

                {/* Column 3 */}
                <div className="rounded-lg bg-slate-900 border border-slate-800 p-2">
                  <div className="font-bold text-emerald-300 mb-1.5 flex items-center justify-between">
                    <span>3. Deployed to Prod</span>
                    <span className="rounded bg-emerald-500/20 px-1 text-[8px]">4</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="rounded bg-slate-950 p-1.5 border border-slate-800">
                      <span className="block font-medium text-slate-200">#376 Redis Cluster</span>
                      <span className="block text-[8px] text-emerald-400">Live 100%</span>
                    </div>
                    <div className="rounded bg-slate-950 p-1.5 border border-slate-800">
                      <span className="block font-medium text-slate-200">#379 Fleet GPS API</span>
                      <span className="block text-[8px] text-emerald-400">Live 100%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality gate note */}
            <div className="mt-1.5 pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[9px]">
              <span className="text-slate-400">Strict DOD: Unit tests + SonarQube + Security scan before merge</span>
              <span className="text-emerald-400 font-medium">0 Production Rollbacks</span>
            </div>
          </div>

          {/* Delivery Quality Gates */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-2.5 flex flex-col justify-between">
            <span className="font-bold text-white text-[10px] sm:text-xs">Quality Gate Checks</span>
            <div className="mt-1 space-y-1.5 text-[9px]">
              {[
                { gate: "Code Lint & Types", pass: true, detail: "0 errors, TypeScript strict" },
                { gate: "Unit & Integration", pass: true, detail: "418 tests passed (100%)" },
                { gate: "OWASP Vulnerability", pass: true, detail: "0 High / Critical issues" },
                { gate: "Staging Signoff", pass: true, detail: "Product Owner accepted" },
              ].map((g) => (
                <div key={g.gate} className="rounded-lg bg-slate-900 p-1.5 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-200 font-medium">
                    <span>{g.gate}</span>
                    <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                  </div>
                  <span className="text-[8px] text-slate-400">{g.detail}</span>
                </div>
              ))}
            </div>

            <div className="mt-1 rounded-lg bg-emerald-500/10 p-1.5 border border-emerald-500/20 text-center">
              <span className="text-[8px] font-semibold text-emerald-300">Continuous Assurance</span>
            </div>
          </div>
        </div>

        {/* Bottom Delivery Stack Chips */}
        <div className="mt-2.5 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/40 px-3 py-1.5 text-[9px]">
          <span className="font-medium text-slate-400">Agile Toolchain:</span>
          <div className="flex flex-wrap gap-1.5">
            {["Jira Software", "GitHub Actions", "Docker", "SonarQube", "Cypress", "Datadog", "Slack Alerts"].map((tech) => (
              <span key={tech} className="rounded-md bg-emerald-950/60 px-1.5 py-0.5 text-emerald-200 border border-emerald-800/50">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
