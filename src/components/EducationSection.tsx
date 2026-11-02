import React from 'react';
import { education } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, CheckCircle2, BookOpen } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            07 / Academic Foundation
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl text-balance">
            Education & engineering background.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Formal undergraduate training in Information Science and Engineering with emphasis on algorithms, data management systems, and distributed platforms.
          </p>
        </div>

        <div className="mt-12">
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {education.degree}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                    {education.institution}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      <span>{education.period}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} />
                      <span>{education.location}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 px-4 py-2.5 text-right">
                <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block">
                  Cumulative GPA
                </span>
                <span className="font-mono text-lg font-bold text-slate-900 dark:text-white tabular-nums">
                  {education.grade}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <BookOpen size={13} />
                <span>Key Highlights & Academic Milestones</span>
              </h4>
              <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {education.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-cyan-600 dark:text-cyan-400" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
