import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Hero3DCanvas } from './Hero3DCanvas';
import { Photo3DCard } from './Photo3DCard';
import { 
  FileText, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Code, 
  Mail, 
  Phone, 
  MapPin, 
  Box, 
  User, 
  ExternalLink,
  Award
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [visualView, setVisualView] = useState<'photo' | '3d'>('photo');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-cyan-500/[0.08] dark:bg-cyan-500/[0.12] blur-[140px]" />
      <div className="pointer-events-none absolute top-48 -right-20 h-[400px] w-[500px] rounded-full bg-indigo-500/[0.06] dark:bg-indigo-500/[0.10] blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Hero Copy & Actions (7 cols) */}
          <div className="lg:col-span-7">
            {/* Trust Kicker / Subtitle */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400 mb-4">
              <span className="font-semibold text-cyan-600 dark:text-cyan-400">Tecnotree Senior Engineer</span>
              <span aria-hidden="true">·</span>
              <span>3.8+ YOE</span>
              <span aria-hidden="true">·</span>
              <span>100M+ Records Migrated</span>
              <span aria-hidden="true">·</span>
              <span>London UK Onsite Delivery</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl text-balance">
              Engineering enterprise <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-400 bg-clip-text text-transparent">data</span> into intelligent <span className="underline decoration-cyan-500/40 underline-offset-8">systems</span>.
            </h1>

            {/* Role & Bio */}
            <p className="mt-4 text-base font-semibold text-slate-700 dark:text-cyan-300/90">
              {personalInfo.role}
            </p>
            <p className="mt-2 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl text-pretty">
              {personalInfo.bio}
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400 rounded-xl transition-all shadow-md cursor-pointer whitespace-nowrap"
              >
                <FileText size={16} />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => scrollTo('projects')}
                className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 rounded-xl transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Explore Projects</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => setVisualView('3d')}
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 hover:bg-cyan-100 dark:hover:bg-cyan-950/70 border border-cyan-200 dark:border-cyan-800/60 rounded-xl transition-all cursor-pointer whitespace-nowrap"
              >
                <Box size={16} />
                <span>View 3D Architecture</span>
              </button>
            </div>

            {/* Social & Contact Bar */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition"
              >
                <Github size={15} />
                <span>GitHub</span>
                <ExternalLink size={12} className="opacity-60" />
              </a>

              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition"
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
                <ExternalLink size={12} className="opacity-60" />
              </a>

              <a
                href={personalInfo.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition"
              >
                <Code size={15} />
                <span>LeetCode</span>
                <ExternalLink size={12} className="opacity-60" />
              </a>

              <a
                href={personalInfo.links.hackerrank}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition"
              >
                <Award size={15} />
                <span>HackerRank</span>
                <ExternalLink size={12} className="opacity-60" />
              </a>

              <div className="hidden sm:flex items-center gap-1.5 text-slate-500">
                <MapPin size={14} />
                <span>Bengaluru, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Stage (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[480px] lg:max-w-none">
              {/* Visual Mode Selector Tabs: Anand's Photo FIRST, 3D Architecture NEXT */}
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-medium">
                  <button
                    onClick={() => setVisualView('photo')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                      visualView === 'photo'
                        ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm font-semibold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <User size={14} />
                    <span>Anand's Photo</span>
                  </button>

                  <button
                    onClick={() => setVisualView('3d')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                      visualView === '3d'
                        ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm font-semibold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Box size={14} />
                    <span>3D Architecture</span>
                  </button>
                </div>

                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  {visualView === 'photo' ? '3D Interactive Portrait' : 'Project Pipeline 3D'}
                </span>
              </div>

              {/* Card Container */}
              <div className="relative aspect-[4/3] sm:aspect-[1/1] max-h-[500px]">
                {visualView === 'photo' ? (
                  <Photo3DCard />
                ) : (
                  <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white/50 dark:bg-slate-900/50 shadow-2xl backdrop-blur-xl">
                    <Hero3DCanvas defaultMode="lakehouse" interactive={true} />
                  </div>
                )}
              </div>

              {/* Floating KPI Badges around image */}
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 p-3 shadow-sm backdrop-blur-sm">
                  <p className="font-mono text-lg font-bold text-cyan-600 dark:text-cyan-400 tabular-nums">100M+</p>
                  <p className="text-slate-600 dark:text-slate-400">Telecom Records Migrated</p>
                </div>
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 p-3 shadow-sm backdrop-blur-sm">
                  <p className="font-mono text-lg font-bold text-indigo-600 dark:text-indigo-400 tabular-nums">2 Months</p>
                  <p className="text-slate-600 dark:text-slate-400">Onsite Cutover (London, UK)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
