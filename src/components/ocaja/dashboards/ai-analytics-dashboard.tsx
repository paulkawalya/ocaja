"use client";

import { BrainCircuit, Sparkles, Database, Activity, CheckCircle2, FileSpreadsheet } from "lucide-react";

/**
 * High-fidelity AI & Data Analytics Dashboard
 * Tailored for Enterprise AI, Machine Learning, Document OCR, and Predictive Insights
 */
export function AiAnalyticsDashboard() {
  return (
    <div className="flex h-[360px] w-full select-none bg-slate-900 text-[10px] leading-tight text-slate-200 sm:h-[440px] sm:text-xs font-sans">
      {/* Sidebar */}
      <div className="flex w-28 flex-col justify-between border-r border-slate-800 bg-[#090d1f] p-2.5 sm:w-36 sm:p-3.5">
        <div>
          <div className="flex items-center gap-1.5 pb-3 border-b border-slate-800">
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-purple-600 text-white font-bold text-xs shadow-md">
              <BrainCircuit className="h-3.5 w-3.5" />
            </span>
            <div>
              <span className="block font-bold text-white">Cortex AI</span>
              <span className="block text-[8px] text-purple-400">Intelligence Engine</span>
            </div>
          </div>

          <div className="mt-3 space-y-1">
            {[
              { label: "Model Registry", active: true },
              { label: "Document OCR", active: false },
              { label: "Vector Search", active: false },
              { label: "Predictive Ops", active: false },
              { label: "Data Pipelines", active: false },
              { label: "LLM Fine-tuning", active: false },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 font-medium transition-colors ${
                  item.active
                    ? "bg-purple-600/20 text-purple-300 font-bold"
                    : "text-slate-400 hover:bg-slate-800"
                }`}
              >
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1.5 rounded-lg bg-purple-500/10 p-2 border border-purple-500/30 text-[9px] text-purple-300">
          <Sparkles className="h-3 w-3 text-purple-400 animate-pulse" />
          <span>98.4% Accuracy SLA</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden bg-[#0c1129] p-3 sm:p-4">
        {/* Top bar */}
        <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm flex items-center gap-1.5">
              Enterprise Neural Inference Engine
              <span className="inline-flex items-center rounded-full bg-purple-500/10 px-2 py-0.5 text-[9px] font-semibold text-purple-400 border border-purple-500/30">
                1.4M Inferences / 24h
              </span>
            </h4>
            <p className="text-[9px] text-slate-400">OCR extraction, automated financial scoring, and predictive demand modeling</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-purple-950/80 px-2 py-1 font-mono text-[9px] text-purple-300 border border-purple-800/60">
              GPU Cluster: A100 Active
            </span>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="mt-3 grid grid-cols-4 gap-2">
          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">OCR Docs Processed</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">142,500</span>
              <span className="text-[8px] font-semibold text-emerald-400">+18.4%</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Model Accuracy</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">98.4%</span>
              <span className="text-[8px] font-semibold text-purple-400">F1: 0.98</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Inference Latency</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">24ms</span>
              <span className="text-[8px] font-semibold text-emerald-400">Real-time</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Monthly Fuel Savings</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">$18,420</span>
              <span className="text-[8px] font-semibold text-emerald-400">AI Routing</span>
            </div>
          </div>
        </div>

        {/* Middle: Live Models & Analytics */}
        <div className="mt-3 grid grid-cols-3 gap-2 flex-1 min-h-0">
          {/* Active Models */}
          <div className="col-span-2 rounded-xl border border-slate-800 bg-slate-950/60 p-2.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white text-[10px] sm:text-xs">Deployed Enterprise Models</span>
                <span className="text-[9px] text-purple-300">FastAPI & Triton Server</span>
              </div>
              <div className="space-y-1.5 text-[9px]">
                {[
                  { name: "Ocaja-OCR-Invoice-v3", type: "URA / ZRA Tax Extraction", speed: "16ms", accuracy: "99.4%", status: "Active" },
                  { name: "Fleet-Route-Predictor", type: "Fuel & Traffic Optimization", speed: "22ms", accuracy: "98.1%", status: "Active" },
                  { name: "Credit-Scoring-GBM", type: "Micro-finance Default Risk", speed: "9ms", accuracy: "97.8%", status: "Active" },
                  { name: "Enterprise-RAG-Vector", type: "Policy & Knowledge Retrieval", speed: "34ms", accuracy: "98.9%", status: "Active" },
                ].map((m) => (
                  <div key={m.name} className="flex items-center justify-between rounded-lg bg-slate-900 border border-slate-800/80 px-2.5 py-1.5">
                    <div>
                      <span className="font-bold text-white">{m.name}</span>
                      <span className="block text-[8px] text-slate-400">{m.type}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[8px] text-purple-400">{m.speed}</span>
                      <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[8px] font-bold text-emerald-400 border border-emerald-500/30">
                        {m.accuracy}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inference Trend Curve */}
            <div className="mt-2 pt-2 border-t border-slate-800/80">
              <div className="flex items-center justify-between text-[9px] text-slate-400 mb-1">
                <span>Inference Volume & Confidence Curve</span>
                <span className="font-mono text-purple-300">Peak: 1,820 inferences/min</span>
              </div>
              <svg className="h-9 w-full overflow-visible" viewBox="0 0 300 36">
                <path
                  d="M0,30 Q40,24 80,26 T160,14 T240,8 T300,4"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="2"
                />
                <circle cx="300" cy="4" r="3" fill="#a855f7" />
              </svg>
            </div>
          </div>

          {/* Data Assets & Vector DB */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-2.5 flex flex-col justify-between">
            <span className="font-bold text-white text-[10px] sm:text-xs">Data Lake & Vector Storage</span>
            <div className="mt-1 space-y-2 text-[9px]">
              <div className="rounded-lg bg-slate-900 p-2 border border-slate-800">
                <div className="flex items-center justify-between text-slate-300 font-semibold mb-1">
                  <span>Vector Embeddings</span>
                  <Database className="h-3 w-3 text-purple-400" />
                </div>
                <span className="text-white font-bold text-xs">1,840,000 vectors</span>
                <span className="block text-[8px] text-slate-400">Milvus & pgvector cluster</span>
              </div>

              <div className="rounded-lg bg-slate-900 p-2 border border-slate-800">
                <div className="flex items-center justify-between text-slate-300 font-semibold mb-1">
                  <span>ETL Sync Cadence</span>
                  <Activity className="h-3 w-3 text-emerald-400" />
                </div>
                <span className="text-white font-bold text-xs">Streaming 5s</span>
                <span className="block text-[8px] text-slate-400">Kafka / Cloud PubSub</span>
              </div>
            </div>

            <div className="mt-1 rounded-lg bg-purple-500/10 p-1.5 border border-purple-500/20 text-center">
              <span className="text-[8px] font-semibold text-purple-300">DPPA & GDPR Privacy Compliant</span>
            </div>
          </div>
        </div>

        {/* Bottom Stack Chips */}
        <div className="mt-2.5 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/40 px-3 py-1.5 text-[9px]">
          <span className="font-medium text-slate-400">AI Frameworks:</span>
          <div className="flex flex-wrap gap-1.5">
            {["PyTorch", "Hugging Face", "LangChain", "BigQuery ML", "FastAPI", "Milvus", "Apache Spark"].map((tech) => (
              <span key={tech} className="rounded-md bg-purple-950/60 px-1.5 py-0.5 text-purple-200 border border-purple-800/50">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
