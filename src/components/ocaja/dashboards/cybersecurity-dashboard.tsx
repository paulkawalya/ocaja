"use client";

import { Shield, ShieldAlert, Radio, Lock, Terminal, CheckCircle2, AlertOctagon } from "lucide-react";

export function CybersecurityDashboard() {
  return (
    <div className="flex h-[360px] w-full select-none bg-[#050e24] text-[10px] leading-tight text-slate-200 sm:h-[440px] sm:text-xs font-sans">
      {/* Sidebar */}
      <div className="flex w-28 flex-col justify-between border-r border-white/10 bg-[#030919] p-2.5 sm:w-36 sm:p-3.5">
        <div>
          <div className="flex items-center gap-1.5 pb-3 border-b border-white/10">
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-rose-500 text-white font-bold text-xs shadow-md">
              <Shield className="h-3.5 w-3.5" />
            </span>
            <div>
              <span className="block font-bold text-white">OCAJA SOC</span>
              <span className="block text-[8px] text-emerald-400">Threat Defense</span>
            </div>
          </div>

          <div className="mt-3 space-y-1">
            {[
              { label: "Threat Radar", active: true },
              { label: "Endpoint EDR", active: false },
              { label: "SIEM Logs", active: false },
              { label: "Penetration Tests", active: false },
              { label: "Firewall Rules", active: false },
              { label: "Compliance (DPPA)", active: false },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 font-medium transition-colors ${
                  item.active
                    ? "bg-rose-500/20 text-rose-300 font-bold"
                    : "text-slate-400 hover:bg-white/5"
                }`}
              >
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1.5 rounded-lg bg-emerald-500/10 p-2 border border-emerald-500/30 text-[9px] text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>SOC Armed 24/7</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 slim-scroll">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div>
            <h3 className="font-heading font-bold text-white text-xs sm:text-sm flex items-center gap-2">
              <span>Security Operations Center Live</span>
              <span className="rounded bg-rose-500/20 border border-rose-500/40 text-rose-300 px-1.5 py-0.5 text-[8px] uppercase">
                Zero Breaches
              </span>
            </h3>
            <p className="text-[9px] text-slate-400 hidden sm:block">
              Continuous threat hunting across Kampala, Lusaka, and Cloud nodes.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[9px] font-mono text-cyan-300">
              SIEM: 100% ONLINE
            </span>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            { label: "Threats Blocked Today", val: "38,419", sub: "+4,120 high severity", color: "text-rose-400" },
            { label: "Mean Time To Detect", val: "< 1.8 min", sub: "Automated AI triage", color: "text-cyan-300" },
            { label: "Protected Endpoints", val: "1,420 Nodes", sub: "100% EDR coverage", color: "text-emerald-400" },
            { label: "Firewall Integrity", val: "99.99%", sub: "DDoS mitigation active", color: "text-purple-300" },
          ].map((c) => (
            <div key={c.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
              <span className="block text-[8px] text-slate-400 truncate">{c.label}</span>
              <span className={`block font-heading font-extrabold text-xs sm:text-sm mt-0.5 ${c.color}`}>
                {c.val}
              </span>
              <span className="block text-[8px] text-slate-500 mt-0.5">{c.sub}</span>
            </div>
          ))}
        </div>

        {/* Threat Map & Live Log */}
        <div className="grid gap-2.5 sm:grid-cols-12">
          {/* Radar Visualization */}
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:col-span-6 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="font-bold text-white text-[11px] flex items-center gap-1.5">
                <Radio className="h-3 w-3 text-rose-400 animate-pulse" />
                Live Intrusion Radar
              </span>
              <span className="text-[8px] text-slate-400">Real-Time Ingestion</span>
            </div>

            {/* Radar Circular Visual */}
            <div className="my-2 flex items-center justify-center">
              <div className="relative h-24 w-24 rounded-full border border-cyan-400/30 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full border border-cyan-400/20" />
                <div className="h-8 w-8 rounded-full border border-cyan-400/10" />
                <div className="absolute h-full w-full rounded-full border-t border-cyan-400 animate-spin" />
                <div className="absolute top-3 right-5 h-1.5 w-1.5 rounded-full bg-rose-500 animate-ping" />
                <div className="absolute bottom-5 left-4 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <Lock className="h-4 w-4 text-emerald-400" />
              </div>
            </div>

            <div className="flex justify-between text-[8px] text-slate-400">
              <span>Port Scanning: 0</span>
              <span>DDoS Scrubbing: Active</span>
              <span>Zero-Trust: Enforced</span>
            </div>
          </div>

          {/* Real-Time SIEM Log */}
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:col-span-6 font-mono text-[9px]">
            <span className="block font-bold text-white text-[11px] font-sans border-b border-white/10 pb-2 flex items-center gap-1.5">
              <Terminal className="h-3 w-3 text-cyan-400" />
              SIEM Threat Stream
            </span>
            <div className="mt-2 space-y-1.5 text-slate-300">
              <div className="flex items-center justify-between text-rose-300">
                <span>[18:02:14] SQLi blocked on /api/auth</span>
                <span className="text-white/40">DROP</span>
              </div>
              <div className="flex items-center justify-between text-emerald-300">
                <span>[18:01:50] mTLS handshake: URA EFRIS</span>
                <span className="text-white/40">PASS</span>
              </div>
              <div className="flex items-center justify-between text-cyan-300">
                <span>[18:00:22] MFA Token validated (Kampala HQ)</span>
                <span className="text-white/40">AUTH</span>
              </div>
              <div className="flex items-center justify-between text-amber-300">
                <span>[17:59:04] Brute force threshold exceeded</span>
                <span className="text-white/40">BAN IP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance row */}
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span className="text-[10px] font-bold text-white">
              Data Privacy &amp; Security Compliance:
            </span>
          </div>
          <div className="flex gap-2 text-[8px] font-bold">
            <span className="rounded bg-white/10 px-2 py-0.5 text-cyan-300">Uganda DPPA Certified</span>
            <span className="rounded bg-white/10 px-2 py-0.5 text-emerald-300">ISO 27001 Aligned</span>
            <span className="rounded bg-white/10 px-2 py-0.5 text-purple-300">SOC 2 Type II</span>
          </div>
        </div>
      </div>
    </div>
  );
}
