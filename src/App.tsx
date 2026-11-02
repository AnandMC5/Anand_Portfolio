/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { AwardsSection } from './components/AwardsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Top Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      <main>
        {/* Hero Section with 3D Architecture Canvas & Real Portrait */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* 4-Column High-Precision Stats Strip */}
        <StatsStrip />

        {/* Professional Background & Global Engagements */}
        <AboutSection />

        {/* Professional Experience at Tecnotree */}
        <ExperienceSection />

        {/* Selected Work (10 Projects with Architecture Modals) */}
        <ProjectsSection />

        {/* Core Technical Capabilities & Search */}
        <SkillsSection />

        {/* Verified Industry Certifications */}
        <CertificationsSection />

        {/* Corporate & Academic Honors with PDF Inspector */}
        <AwardsSection />

        {/* Academic Foundation & Degree */}
        <EducationSection />

        {/* Direct Connect & Inquiry Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
