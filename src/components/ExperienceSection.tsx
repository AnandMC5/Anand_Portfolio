import React from 'react';
import { experiences } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/30 dark:bg-slate-900/20 py-20 lg:py-28 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            02 / Work History
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl text-balance">
            3.8+ years of delivering enterprise-scale data migrations.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            My professional career at Tecnotree has spanned large-scale telecom BSS cutovers, distributed data validation, automation tooling, and on-site delivery in the United Kingdom.
          </p>
        </div>

        {/* Career Timeline */}
        <div className="mt-14 space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className={`relative rounded-3xl border p-6 sm:p-8 transition-all ${
                exp.current
                  ? 'border-cyan-500/40 bg-white dark:bg-slate-900/80 shadow-lg ring-1 ring-cyan-500/10'
                  : 'border-slate-200 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40 shadow-sm'
              }`}
            >
              {/* Role Header */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                      @{exp.company}
                    </span>
                    {exp.current && (
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                        Current Role
                      </span>
                    )}
                  </div>

                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      <span className="font-medium text-slate-700 dark:text-slate-300">{exp.period}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} />
                      <span>{exp.location}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Briefcase size={13} />
                      <span>{exp.type}</span>
                    </span>
                  </div>
                </div>

                {exp.highlight && (
                  <div className="max-w-md rounded-xl bg-slate-100 dark:bg-slate-800/60 px-3.5 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60">
                    <span className="text-cyan-600 dark:text-cyan-400 font-semibold mr-1.5">Focus:</span>
                    {exp.highlight}
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {exp.description}
              </p>

              {/* Responsibilities */}
              <div className="mt-6">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Key Accomplishments & Responsibilities:
                </p>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan-600 dark:text-cyan-400" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Tags */}
              <div className="mt-7 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs text-slate-400 font-mono mr-1">Stack:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
                  {exp.domains.join(' · ')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
