import React from 'react';
import { certifications } from '../data/portfolioData';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            05 / Verified Credentials
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl text-balance">
            Industry certifications & professional verifications.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Validated domain expertise from Google, IBM, HackerRank, Coursera, Udemy, and industry academies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`flex flex-col justify-between rounded-3xl border p-6 shadow-sm transition-all hover:border-cyan-500/40 hover:shadow-md ${
                cert.highlight
                  ? 'border-cyan-500/30 bg-white dark:bg-slate-900/80 ring-1 ring-cyan-500/10'
                  : 'border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/60'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <Award size={20} />
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {cert.issueDate || 'Verified'}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {cert.name}
                </h3>

                <p className="mt-1 text-xs font-medium text-cyan-600 dark:text-cyan-400">
                  {cert.organization}
                </p>

                {cert.credentialId && (
                  <p className="mt-2 text-[11px] font-mono text-slate-400">
                    ID: <span className="text-slate-600 dark:text-slate-300">{cert.credentialId}</span>
                  </p>
                )}

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                  <CheckCircle size={13} />
                  <span>Credential Verified</span>
                </span>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition"
                >
                  <span>Verify</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
