import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Code2, Layers, Cloud, Database, Sparkles, Wrench, Search, CheckCircle } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 size={22} />,
    Layers: <Layers size={22} />,
    Cloud: <Cloud size={22} />,
    Database: <Database size={22} />,
    Sparkles: <Sparkles size={22} />,
    Wrench: <Wrench size={22} />,
  };

  return (
    <section id="skills" className="border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/30 dark:bg-slate-900/20 py-20 lg:py-28 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              04 / Technical Capabilities
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl text-balance">
              Engineered for throughput, accuracy & scale.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              A comprehensive technical toolkit spanning high-volume ETL pipelines, cloud lakehouses, distributed databases, and generative AI data agents.
            </p>
          </div>

          {/* Quick Skill Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. PySpark, dbt, SQL)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
            />
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => {
            const filteredSkills = cat.skills.filter((s) =>
              s.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (searchTerm && filteredSkills.length === 0) return null;

            return (
              <div
                key={cat.id}
                className="flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 p-6 shadow-sm transition hover:border-cyan-500/30"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                      {iconMap[cat.iconName] || <Code2 size={22} />}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {filteredSkills.map((s) => (
                      <span
                        key={s.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-50 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/60 transition hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-300"
                      >
                        {s.level === 'Expert' && (
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" title="Expert Proficiency" />
                        )}
                        <span>{s.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>{cat.skills.length} competencies</span>
                  <span className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400">
                    <CheckCircle size={12} /> Production Tested
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
