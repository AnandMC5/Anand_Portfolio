import React, { useState } from 'react';
import { clientEngagements } from '../data/portfolioData';
import { MapPin, Globe, CheckCircle, Database, Cpu, ShieldCheck, Copy, Check } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyText = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            01 / Professional Background
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl text-balance">
            Bridging large-scale enterprise data and modern AI intelligence.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            I am a Senior Data Migration Engineer at Tecnotree with 3.8+ years of dedicated experience executing high-stakes migrations for international telecom operators. My engineering practice revolves around bulletproof ETL pipelines, multi-database reconciliations, modern cloud lakehouses, and autonomous AI data agents.
          </p>
        </div>

        {/* 3 Core Engineering Pillars */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 p-7 shadow-sm transition hover:border-cyan-500/30">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 mb-5">
              <Database size={22} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Data Systems & Lakehouses
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Architecting Medallion Lakehouses with Bronze ingestion, Silver cleansing, and Gold star-schema layers using Azure Data Factory, ADLS Gen2, Databricks, PySpark, Snowflake, and dbt.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 p-7 shadow-sm transition hover:border-cyan-500/30">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-5">
              <ShieldCheck size={22} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Telecom BSS & Reconciliation
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Executing 100M+ record migrations across Oracle, Cassandra, MongoDB, and MySQL. Building automated row-count and financial balance validation routines with 100% audit accuracy.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 p-7 shadow-sm transition hover:border-cyan-500/30">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 mb-5">
              <Cpu size={22} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Autonomous AI Data Agents
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Leveraging Groq API (Llama 3.3/70B), RAG, and schema introspection to translate natural language into read-only SQL and generate automated multi-file dataset profiling reports.
            </p>
          </div>
        </div>

        {/* International Client Engagements & Onsite Delivery */}
        <div className="mt-14 rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900/80 dark:to-slate-950 p-8 sm:p-10 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                Key Client Engagements
              </p>
              <h3 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                Global Telecom Transformations
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Globe size={15} />
              <span>UK · Cameroon · Uganda · India</span>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {clientEngagements.map((client) => (
              <div
                key={client.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/90 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 p-6 shadow-sm"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        {client.title}
                      </h4>
                      <div className="mt-1 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <MapPin size={13} className="text-cyan-500" />
                        <span>{client.location}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-semibold text-slate-700 dark:text-slate-300">{client.duration}</span>
                      </div>
                    </div>
                    {client.stats && (
                      <span className="rounded-lg bg-cyan-500/10 px-2.5 py-1 font-mono text-xs font-bold text-cyan-700 dark:text-cyan-400 whitespace-nowrap">
                        {client.stats}
                      </span>
                    )}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {client.description}
                  </p>

                  <ul className="mt-4 space-y-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {client.bulletPoints.map((bp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle size={14} className="mt-0.5 shrink-0 text-cyan-600 dark:text-cyan-400" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                  {client.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/60 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Contact Trust Strip with Copy Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40 p-4 sm:px-6 text-xs text-slate-600 dark:text-slate-300">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-slate-400 font-mono">Email:</span>
              <span className="font-semibold text-slate-800 dark:text-white">anandmc234@gmail.com</span>
              <button
                onClick={() => copyText('anandmc234@gmail.com', 'email')}
                className="p-1 text-slate-400 hover:text-cyan-500 transition cursor-pointer"
                title="Copy Email"
              >
                {copiedEmail ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-400 font-mono">Phone:</span>
              <span className="font-semibold text-slate-800 dark:text-white">+91 9535987114</span>
              <button
                onClick={() => copyText('+91 9535987114', 'phone')}
                className="p-1 text-slate-400 hover:text-cyan-500 transition cursor-pointer"
                title="Copy Phone"
              >
                {copiedPhone ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-slate-500">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            <span>Currently Open to Data Engineering & AI Opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
};
