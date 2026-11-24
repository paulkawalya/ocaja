"use client";

import { Cloud, Server, Database, Activity, HardDrive, Wifi, RefreshCw } from "lucide-react";

export function CloudDashboard() {
  return (
    <div className="flex h-[360px] w-full select-none bg-[#091b33] text-[10px] leading-tight text-slate-200 sm:h-[440px] sm:text-xs font-sans">
      {/* Sidebar */}
      <div className="flex w-28 flex-col justify-between border-r border-white/10 bg-[#051122] p-2.5 sm:w-36 sm:p-3.5">
        <div>
          <div className="flex items-center gap-1.5 pb-3 border-b border-white/10">
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-sky-500 text-white font-bold text-xs shadow-md">
              <Cloud className="h-3.5 w-3.5" />
            </span>
            <div>
              <span className="block font-bold text-white">CloudPulse</span>
              <span className="block text-[8px] text-sky-400">Hybrid Ops</span>
            </div>
          </div>

          <div className="mt-3 space-y-1">
            {[
              { label: "Overview", active: true },
              { label: "Kubernetes (K8s)", active: false },
              { label: "Databases (RDS)", active: false },
              { label: "Storage & Buckets", active: false },
              { label: "VPC & Networks", active: false },
              { label: "Disaster Recovery", active: false },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 font-medium transition-colors ${
                  item.active
                    ? "bg-sky-500/20 text-sky-300 font-bold"
                    : "text-slate-400 hover:bg-white/5"
                }`}
              >
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1.5 rounded-lg bg-sky-500/10 p-2 border border-sky-500/30 text-[9px] text-sky-300">
          <RefreshCw className="h-3 w-3 animate-spin text-sky-400" />
          <span>Syncing Multi-Cloud</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 slim-scroll">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div>
            <h3 className="font-heading font-bold text-white text-xs sm:text-sm flex items-center gap-2">
              <span>Cloud &amp; Infrastructure Console</span>
              <span className="rounded bg-sky-500/20 border border-sky-500/40 text-sky-300 px-1.5 py-0.5 text-[8px] uppercase">
                99.99% Uptime
              </span>
            </h3>
            <p className="text-[9px] text-slate-400 hidden sm:block">
              Multi-region orchestration across AWS, Microsoft Azure, Google Cloud &amp; Local PoPs.
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="rounded bg-white/10 px-2 py-0.5 text-[8px] font-bold text-sky-300">AWS af-south</span>
            <span className="rounded bg-white/10 px-2 py-0.5 text-[8px] font-bold text-purple-300">Azure EA</span>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            { label: "Active Kubernetes Pods", val: "38 Pods", sub: "Auto-scaled, 0 errors", color: "text-sky-300" },
            { label: "Regional Latency", val: "12ms", sub: "Kampala to Lusaka link", color: "text-emerald-400" },
            { label: "Total Storage Managed", val: "8.4 TB", sub: "Geo-replicated S3/Blob", color: "text-indigo-300" },
            { label: "Backup Status", val: "Verified", sub: "RPO: 5m | RTO: 15m", color: "text-teal-300" },
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

        {/* Server Resource Gauges */}
        <div className="grid gap-2.5 sm:grid-cols-12">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:col-span-7">
            <span className="block font-bold text-white text-[11px] border-b border-white/10 pb-2">
              Virtual Infrastructure Clusters
            </span>
            <div className="mt-2.5 space-y-2">
              {[
                { name: "Production K8s Microservices (af-south)", cpu: "32%", ram: "56%", health: "Optimal" },
                { name: "PostgreSQL High-Availability Master-Replica", cpu: "24%", ram: "64%", health: "Optimal" },
                { name: "Redis In-Memory Session Cache", cpu: "14%", ram: "42%", health: "Optimal" },
                { name: "Kafka Event Broker for Telecom Gateways", cpu: "38%", ram: "52%", health: "Optimal" },
              ].map((cl) => (
                <div key={cl.name} className="flex items-center justify-between text-[9px] border-b border-white/5 pb-1">
                  <div>
                    <span className="text-white/90 font-medium block">{cl.name}</span>
                    <span className="text-slate-400 text-[8px]">CPU: {cl.cpu} · RAM: {cl.ram}</span>
                  </div>
                  <span className="text-emerald-400 font-bold">{cl.health}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:col-span-5 flex flex-col justify-between">
            <span className="block font-bold text-white text-[11px] border-b border-white/10 pb-2">
              Disaster Recovery Readiness
            </span>
            <div className="space-y-2 my-2 text-[9px]">
              <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-2">
                <span className="font-bold text-emerald-300 block">Automated Daily Snapshot</span>
                <span className="text-slate-400 text-[8px]">Completed today at 03:00 EAT (100% integrity)</span>
              </div>
              <div className="rounded-lg bg-sky-500/10 border border-sky-500/20 p-2">
                <span className="font-bold text-sky-300 block">Cold Storage Mirror</span>
                <span className="text-slate-400 text-[8px]">Offsite encrypted archive in Lusaka datacenter</span>
              </div>
            </div>
            <div className="text-[8px] text-slate-400 flex items-center justify-between">
              <span>SLA Target: 99.95%</span>
              <span className="text-emerald-400 font-bold">Achieved: 99.99%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
