import React, { useState } from 'react';
import { projects, Project } from '../data/portfolioData';
import { Github, ExternalLink, ArrowRight, X, Cpu, Layers, CheckCircle2, Workflow } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'Cloud Lakehouse', label: 'Cloud Lakehouse', count: projects.filter(p => p.tag === 'Cloud Lakehouse').length },
    { id: 'Generative AI', label: 'Generative AI', count: projects.filter(p => p.tag === 'Generative AI').length },
    { id: 'Telecom Migration', label: 'Telecom Migrations', count: projects.filter(p => p.tag === 'Telecom Migration').length },
    { id: 'Software Engineering', label: 'Software Systems', count: projects.filter(p => p.tag === 'Software Engineering' || p.tag === 'Data Engineering').length },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'Software Engineering'
    ? projects.filter(p => p.tag === 'Software Engineering' || p.tag === 'Data Engineering')
    : projects.filter(p => p.tag === filter);

  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              03 / Selected Work
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl text-balance">
              Cloud pipelines, AI agents & enterprise migrations.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Explore end-to-end architectures including autonomous SQL agents, Azure/AWS lakehouses, 100M+ telecom cutovers, and modern data platforms.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shrink-0">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  filter === tab.id
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-cyan-400 shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>{tab.label}</span>
                <span className="ml-1.5 text-[10px] font-mono opacity-70">({tab.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 p-6 shadow-sm transition-all hover:border-cyan-500/40 hover:shadow-md"
            >
              <div>
                {/* Card Top: Year & Category */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3 font-mono">
                  <span>{project.year}</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium">{project.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Metrics if present */}
                {project.metrics && (
                  <p className="mt-2 text-xs font-mono font-medium text-slate-700 dark:text-cyan-300/80 bg-slate-50 dark:bg-slate-800/60 px-2.5 py-1 rounded-lg border border-slate-200/60 dark:border-slate-700/60 inline-block">
                    {project.metrics}
                  </p>
                )}

                {/* Short Description */}
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.shortDescription}
                </p>
              </div>

              {/* Bottom: Stack & Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[11px] font-mono text-slate-400 px-1 py-0.5">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition cursor-pointer"
                  >
                    <span>View Architecture</span>
                    <ArrowRight size={14} />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
                      title="GitHub Repository"
                    >
                      <Github size={15} />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Architecture & Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                title="Close"
              >
                <X size={20} />
              </button>

              {/* Modal Header */}
              <div className="pr-10">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-1">
                  <span>{selectedProject.category}</span>
                  <span>·</span>
                  <span>{selectedProject.year}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                {selectedProject.metrics && (
                  <p className="mt-2 text-xs font-mono text-cyan-600 dark:text-cyan-400">
                    {selectedProject.metrics}
                  </p>
                )}
              </div>

              {/* Problem & Solution Breakdown */}
              <div className="mt-6 space-y-5 text-sm leading-relaxed">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono text-amber-500">PROBLEM STATEMENT</span>
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 bg-amber-500/5 border border-amber-500/20 rounded-xl p-3.5">
                    {selectedProject.problem}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono text-emerald-500">ENGINEERING SOLUTION</span>
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-3.5">
                    {selectedProject.solution}
                  </p>
                </div>

                {/* Step-by-Step Architecture Pipeline */}
                {selectedProject.architecture && selectedProject.architecture.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                      <Workflow size={16} className="text-cyan-500" />
                      <span>Pipeline Architecture & Data Flow</span>
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                      {selectedProject.architecture.map((step, i) => (
                        <React.Fragment key={i}>
                          <span className="px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm">
                            {step}
                          </span>
                          {i < selectedProject.architecture!.length - 1 && (
                            <ArrowRight size={14} className="text-cyan-500 shrink-0" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}

                {/* Full Description */}
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1.5">
                    Detailed Implementation
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Full Stack Chips */}
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    Technologies & Libraries
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                >
                  Close
                </button>

                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-cyan-500 dark:text-slate-950 rounded-xl hover:opacity-90 transition shadow-sm"
                  >
                    <Github size={15} />
                    <span>View Repository on GitHub</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
