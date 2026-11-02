import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const StatsStrip: React.FC = () => {
  return (
    <section className="border-y border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 py-10 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
          {personalInfo.highlights.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-mono text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl tabular-nums">
                {item.value}
              </span>
              <span className="mt-1 text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                {item.label}
              </span>
              <span className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-normal">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
