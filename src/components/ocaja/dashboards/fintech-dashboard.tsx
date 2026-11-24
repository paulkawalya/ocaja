"use client";

import {
  TrendingUp,
  TrendingDown,
  Bell,
} from "lucide-react";

/**
 * High-fidelity FinTech Dashboard — used specifically for Digital Financial Services
 */
export function FintechDashboard() {
  return (
    <div className="flex h-[360px] w-full select-none bg-slate-50 text-[10px] leading-tight text-slate-700 sm:h-[440px] sm:text-xs font-sans">
      {/* Mini Sidebar */}
      <div className="flex w-28 flex-col justify-between border-r border-slate-200/80 bg-white p-2.5 sm:w-36 sm:p-3.5">
        <div>
          {/* Brand */}
          <div className="flex items-center gap-1.5 pb-3 border-b border-slate-100">
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-[#00b4db] text-white font-bold text-xs shadow-xs">
              P
            </span>
            <div>
              <span className="block font-bold text-[#021a40]">PayLater</span>
              <span className="block text-[8px] text-slate-400">Finance Made Simple</span>
            </div>
          </div>

          {/* Nav Items */}
          <div className="mt-3 space-y-1">
            {[
              { label: "Dashboard", active: true },
              { label: "Transactions", active: false },
              { label: "Customers", active: false },
              { label: "Loans", active: false },
              { label: "Payments", active: false },
              { label: "Reports", active: false },
              { label: "Analytics", active: false },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 font-medium transition-colors ${
                  item.active
                    ? "bg-[#00b4db]/10 text-[#0083b0] font-bold"
                    : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* User Card */}
        <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-1.5 border border-slate-200/60">
          <div className="h-6 w-6 rounded-full bg-slate-300 font-bold text-center leading-6 text-slate-700 text-[9px]">
            SJ
          </div>
          <div className="truncate">
            <span className="block truncate font-bold text-slate-800 text-[9px]">Sarah Johnson</span>
            <span className="block text-[8px] text-slate-400">Admin</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 slim-scroll">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-200/60 pb-2.5">
          <div>
            <h3 className="font-heading font-bold text-slate-800 text-xs sm:text-sm">
              Welcome back, Sarah 👋
            </h3>
            <p className="text-[9px] text-slate-400 hidden sm:block">
              Here&#39;s what&#39;s happening with your financing platform today.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[9px] font-medium text-slate-600">
              Jan 1, 2026 - Apr 30, 2026
            </span>
            <span className="grid h-6 w-6 place-items-center rounded-full bg-slate-100 text-slate-500">
              <Bell className="h-3 w-3" />
            </span>
          </div>
        </div>

        {/* 5 Stats Cards Row */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          {[
            { label: "Total Received", val: "$48,250", change: "+12.5%", up: true },
            { label: "Total Transactions", val: "1,284", change: "+18.2%", up: true },
            { label: "Active Customers", val: "892", change: "+9.7%", up: true },
            { label: "Pending Payments", val: "$12,430", change: "-4.2%", up: false },
            { label: "Loan Disbursed", val: "$256,760", change: "+14.8%", up: true },
          ].map((card) => (
            <div key={card.label} className="rounded-xl border border-slate-200/80 bg-white p-2 shadow-xs">
              <span className="block text-[8px] text-slate-400 truncate">{card.label}</span>
              <span className="block font-heading font-extrabold text-slate-800 text-[11px] sm:text-xs mt-0.5">
                {card.val}
              </span>
              <span
                className={`mt-1 inline-flex items-center gap-0.5 text-[8px] font-bold ${
                  card.up ? "text-emerald-600" : "text-rose-500"
                }`}
              >
                {card.up ? <TrendingUp className="h-2.5 w-2.5" /> : <TrendingDown className="h-2.5 w-2.5" />}
                {card.change}
              </span>
            </div>
          ))}
        </div>

        {/* Middle Row: Revenue Overview Chart & Recent Transactions */}
        <div className="grid gap-2.5 sm:grid-cols-12">
          {/* Revenue Overview Line Chart */}
          <div className="rounded-xl border border-slate-200/80 bg-white p-3 sm:col-span-8 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-bold text-slate-800 text-[11px]">Revenue Overview</span>
              <span className="text-[8px] text-slate-400">Last 6 Months</span>
            </div>

            {/* Simulated Chart Curve */}
            <div className="mt-2 h-24 sm:h-28 w-full flex items-end">
              <svg viewBox="0 0 300 90" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="fintechGradFull" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00b4db" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#00b4db" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,70 Q40,50 80,60 T160,35 T240,25 T300,10 L300,90 L0,90 Z"
                  fill="url(#fintechGradFull)"
                />
                <path
                  d="M0,70 Q40,50 80,60 T160,35 T240,25 T300,10"
                  fill="none"
                  stroke="#0083b0"
                  strokeWidth="2.5"
                />
                <circle cx="300" cy="10" r="3.5" fill="#0083b0" />
              </svg>
            </div>
            <div className="flex justify-between text-[8px] text-slate-400 pt-1">
              <span>Nov</span>
              <span>Dec</span>
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="rounded-xl border border-slate-200/80 bg-white p-3 sm:col-span-4 shadow-xs">
            <span className="block font-bold text-slate-800 text-[11px] border-b border-slate-100 pb-2">
              Recent Transactions
            </span>
            <div className="mt-2 space-y-2">
              {[
                { name: "Aya Mutesi", amt: "+$1,200", status: "Received", pos: true },
                { name: "John Vwalika", amt: "-$6,500", status: "Loan Disbursed", pos: false },
                { name: "Kampala Fleet Ltd", amt: "+$2,650", status: "Received", pos: true },
                { name: "OneNode Switch", amt: "+$890", status: "Settled", pos: true },
              ].map((tx) => (
                <div key={tx.name} className="flex items-center justify-between text-[9px]">
                  <div>
                    <span className="block font-medium text-slate-700">{tx.name}</span>
                    <span className="block text-[8px] text-slate-400">{tx.status}</span>
                  </div>
                  <span className={`font-bold ${tx.pos ? "text-emerald-600" : "text-slate-800"}`}>
                    {tx.amt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row: Loan Portfolio & Payment Rails */}
        <div className="grid gap-2.5 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200/80 bg-white p-3 shadow-xs flex items-center justify-between">
            <div>
              <span className="block font-bold text-slate-800 text-[11px]">Loan Portfolio</span>
              <span className="block font-extrabold text-slate-900 text-sm mt-1">$256,760</span>
              <span className="block text-[8px] text-emerald-600 mt-0.5">96% Active Repayment Rate</span>
            </div>
            <div className="grid place-items-center h-14 w-14 rounded-full border-4 border-[#00b4db] border-t-emerald-500 font-bold text-[9px]">
              96%
            </div>
          </div>

          <div className="rounded-xl border border-slate-200/80 bg-white p-3 shadow-xs">
            <span className="block font-bold text-slate-800 text-[11px] mb-1.5">Connected Payment Rails</span>
            <div className="flex flex-wrap gap-1.5">
              {["MTN Mobile Money", "Airtel Money", "Pesapal", "OneNode Switch", "URA EFRIS"].map((t) => (
                <span key={t} className="rounded-md bg-slate-100 px-2 py-0.5 text-[8px] font-bold text-slate-700">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
