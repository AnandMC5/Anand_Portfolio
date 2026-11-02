import React, { useState } from 'react';
import { awards, Award } from '../data/portfolioData';
import { Trophy, FileCheck, Download, ExternalLink, X, Eye, Award as AwardIcon, CheckCircle2 } from 'lucide-react';

export const AwardsSection: React.FC = () => {
  const [selectedAward, setSelectedAward] = useState<Award | null>(null);

  return (
    <section id="awards" className="border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/30 dark:bg-slate-900/20 py-20 lg:py-28 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            06 / Corporate & Academic Honors
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl text-balance">
            Awards, kudos & technical recognitions.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Official commendations awarded for outstanding engineering during high-stakes telecom cutovers and national hackathons. All authentic certificate documents available for inspection.
          </p>
        </div>

        {/* Awards Cards Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award) => (
            <div
              key={award.id}
              className={`flex flex-col justify-between rounded-3xl border p-6 shadow-sm transition-all hover:border-cyan-500/40 hover:shadow-md ${
                award.highlight
                  ? 'border-cyan-500/30 bg-white dark:bg-slate-900/80 ring-1 ring-cyan-500/10'
                  : 'border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/60'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                    <Trophy size={22} />
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {award.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {award.title}
                </h3>

                <p className="mt-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                  {award.organization}
                </p>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {award.description}
                </p>
              </div>

              {/* Action Buttons: View Certificate & Download */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedAward(award)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition cursor-pointer"
                >
                  <Eye size={14} />
                  <span>Inspect Certificate</span>
                </button>

                <a
                  href={award.file}
                  download
                  className="flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
                  title="Download Certificate File"
                >
                  <Download size={14} />
                  <span>Download</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Inspection Modal */}
        {selectedAward && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-3xl rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/80">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                    <AwardIcon size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate max-w-md">
                      {selectedAward.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {selectedAward.organization} · {selectedAward.category}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedAward.file}
                    download
                    className="flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 dark:bg-cyan-500 dark:text-slate-950 rounded-lg hover:opacity-90 transition shadow-sm"
                  >
                    <Download size={13} />
                    <span>Download</span>
                  </a>

                  <a
                    href={selectedAward.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                    title="Open PDF in New Window"
                  >
                    <ExternalLink size={16} />
                  </a>

                  <button
                    onClick={() => setSelectedAward(null)}
                    className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Verified Document Card Body */}
              <div className="p-6 sm:p-8 space-y-6 bg-slate-50 dark:bg-slate-950/50">
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1424] p-6 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                    <CheckCircle2 size={16} />
                    <span>Official Verified Document</span>
                  </div>

                  <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {selectedAward.title}
                  </h4>
                  <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mt-1">
                    Issued by: {selectedAward.organization}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {selectedAward.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                    <div className="text-xs text-slate-500 font-mono">
                      File: {selectedAward.file.split('/').pop()}
                    </div>

                    <div className="flex items-center gap-3">
                      <a
                        href={selectedAward.file}
                        download
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950 hover:opacity-90 transition shadow-sm"
                      >
                        <Download size={14} />
                        <span>Download Certificate PDF</span>
                      </a>
                      <a
                        href={selectedAward.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition"
                      >
                        <ExternalLink size={14} />
                        <span>Open in New Tab</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
