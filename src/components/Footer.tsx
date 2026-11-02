import React from 'react';
import { ArrowUp, Github, Linkedin, Award, Code } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950 py-12 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              Anand M C
            </p>
            <p className="mt-1 text-xs text-slate-500 font-mono">
              Senior Data Migration Engineer · Cloud Lakehouses &amp; AI Agents
            </p>
            <p className="mt-1 text-[11px] text-slate-400">
              © {new Date().getFullYear()} Anand M C. All technical achievements verified.
            </p>
          </div>

          <div className="flex items-center gap-5 text-xs text-slate-500">
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.links.hackerrank}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition"
            >
              HackerRank
            </a>
            <a
              href={personalInfo.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition"
            >
              LeetCode
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 ml-3 px-3 py-1.5 text-[11px] rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition cursor-pointer"
              title="Back to Top"
            >
              <span>Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
