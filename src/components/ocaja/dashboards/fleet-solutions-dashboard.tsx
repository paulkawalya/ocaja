"use client";

import { Truck, Navigation, Fuel, Radio, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";

/**
 * High-fidelity Solutions Dashboard
 * Showcases Ocaja's flagship products: My Fleet IoT Telematics & OneNode Financial Gateway
 */
export function FleetSolutionsDashboard() {
  return (
    <div className="flex h-[360px] w-full select-none bg-slate-900 text-[10px] leading-tight text-slate-200 sm:h-[440px] sm:text-xs font-sans">
      {/* Sidebar */}
      <div className="flex w-28 flex-col justify-between border-r border-slate-800 bg-[#061226] p-2.5 sm:w-36 sm:p-3.5">
        <div>
          <div className="flex items-center gap-1.5 pb-3 border-b border-slate-800">
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-amber-500 text-white font-bold text-xs shadow-md">
              <Truck className="h-3.5 w-3.5" />
            </span>
            <div>
              <span className="block font-bold text-white">My Fleet IoT</span>
              <span className="block text-[8px] text-amber-400">OneNode Switch</span>
            </div>
          </div>

          <div className="mt-3 space-y-1">
            {[
              { label: "Live Telematics", active: true },
              { label: "Fuel Sensors", active: false },
              { label: "Route Corridors", active: false },
              { label: "OneNode Switch", active: false },
              { label: "Cold Chain IoT", active: false },
              { label: "EFRIS Compliance", active: false },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 font-medium transition-colors ${
                  item.active
                    ? "bg-amber-500/20 text-amber-300 font-bold"
                    : "text-slate-400 hover:bg-slate-800"
                }`}
              >
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1.5 rounded-lg bg-emerald-500/10 p-2 border border-emerald-500/30 text-[9px] text-emerald-300">
          <Radio className="h-3 w-3 text-emerald-400 animate-pulse" />
          <span>142 Vehicles Online</span>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex flex-1 flex-col overflow-hidden bg-[#09172f] p-3 sm:p-4">
        {/* Top bar */}
        <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm flex items-center gap-1.5">
              Regional Fleet Telematics & Transaction Monitor
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-semibold text-emerald-400 border border-emerald-500/30">
                Corridors Normal
              </span>
            </h4>
            <p className="text-[9px] text-slate-400">Uganda (Northern Corridor) & Zambia (Trans-Kalahari / Copperbelt) live telemetry</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-amber-950/80 px-2 py-1 font-mono text-[9px] text-amber-300 border border-amber-800/60">
              GPS Refresh: 2s
            </span>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="mt-3 grid grid-cols-4 gap-2">
          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Active Fleet</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">142 / 144</span>
              <span className="text-[8px] font-semibold text-emerald-400">98.6%</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Daily Kilometers</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">24,850 km</span>
              <span className="text-[8px] font-semibold text-amber-400">Tracked</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Fuel Siphon Alerts</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">0 Incursions</span>
              <span className="text-[8px] font-semibold text-emerald-400">100% Safe</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">OneNode Settlements</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">$1.84M</span>
              <span className="text-[8px] font-semibold text-emerald-400">Daily Vol</span>
            </div>
          </div>
        </div>

        {/* Middle: Map simulation & Live units */}
        <div className="mt-3 grid grid-cols-3 gap-2 flex-1 min-h-0">
          {/* Corridor Tracking Map */}
          <div className="col-span-2 rounded-xl border border-slate-800 bg-slate-950/60 p-2.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white text-[10px] sm:text-xs">Corridor Transit Telemetry</span>
                <span className="text-[9px] text-amber-400 font-mono">Sensors: Ultrasonic Fuel & Temp</span>
              </div>
              <div className="space-y-1.5 text-[9px]">
                {[
                  { reg: "UBH 412K", type: "Container Hauler", speed: "64 km/h", loc: "Malaba Border Point", fuel: "88%", ok: true },
                  { reg: "UAX 889M", type: "Pharma Cold Chain", speed: "52 km/h", loc: "Jinja Highway (-18°C)", fuel: "94%", ok: true },
                  { reg: "ZM 9102B", type: "Bulk Fuel Tanker", speed: "58 km/h", loc: "Lusaka - Ndola Corridor", fuel: "91%", ok: true },
                  { reg: "UBJ 105C", type: "Distribution Van", speed: "38 km/h", loc: "Kampala Metro Hub", fuel: "76%", ok: true },
                ].map((u) => (
                  <div key={u.reg} className="flex items-center justify-between rounded-lg bg-slate-900 border border-slate-800 px-2.5 py-1.5">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3 text-amber-400 shrink-0" />
                      <div>
                        <span className="font-bold text-white">{u.reg}</span>
                        <span className="block text-[8px] text-slate-400">{u.type} • {u.loc}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 text-right">
                      <div>
                        <span className="font-mono text-emerald-400 font-bold">{u.speed}</span>
                        <span className="block text-[8px] text-slate-400">Fuel: {u.fuel}</span>
                      </div>
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fuel consumption curve */}
            <div className="mt-1.5 pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[9px]">
              <span className="text-slate-400">Fleet Efficiency Index: 8.4 km/L</span>
              <span className="text-emerald-400 font-medium">99.8% GPS satellite lock integrity</span>
            </div>
          </div>

          {/* OneNode Switch Mini Panel */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-2.5 flex flex-col justify-between">
            <span className="font-bold text-white text-[10px] sm:text-xs">OneNode Payment Rails</span>
            <div className="mt-1 space-y-1.5 text-[9px]">
              {[
                { rail: "MTN Mobile Money", ping: "12ms", status: "Active" },
                { rail: "Airtel Money Rail", ping: "15ms", status: "Active" },
                { rail: "Visa / Mastercard", ping: "42ms", status: "Active" },
                { rail: "URA EFRIS Gateway", ping: "68ms", status: "Synced" },
              ].map((r) => (
                <div key={r.rail} className="flex items-center justify-between rounded-lg bg-slate-900 p-1.5 border border-slate-800">
                  <span className="font-medium text-slate-200">{r.rail}</span>
                  <span className="font-mono text-[8px] text-emerald-400 font-bold">{r.ping}</span>
                </div>
              ))}
            </div>

            <div className="mt-1 rounded-lg bg-amber-500/10 p-1.5 border border-amber-500/20 text-center">
              <span className="text-[8px] font-semibold text-amber-300">Turn-Key Enterprise Solutions</span>
            </div>
          </div>
        </div>

        {/* Bottom Hardware & Protocol Chips */}
        <div className="mt-2.5 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/40 px-3 py-1.5 text-[9px]">
          <span className="font-medium text-slate-400">Connected Protocols:</span>
          <div className="flex flex-wrap gap-1.5">
            {["CAN-Bus J1939", "GPS/GLONASS", "BLE 5.2", "4G LTE Telematics", "ISO 8583", "REST / gRPC"].map((tech) => (
              <span key={tech} className="rounded-md bg-amber-950/60 px-1.5 py-0.5 text-amber-200 border border-amber-800/50">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
