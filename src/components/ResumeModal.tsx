import React, { useState } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2, Printer, MapPin, Phone, Mail, Award, Check } from 'lucide-react';
import { personalInfo, education } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl h-[94vh] rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/80 shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
              <FileText size={18} />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Anand M C — Resume
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                Data Engineer | Senior Data Migration Engineer
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg transition cursor-pointer"
              title="Print Resume"
            >
              <Printer size={13} />
              <span>Print</span>
            </button>

            <a
              href="/resume.pdf"
              download="Anand_MC_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 dark:bg-cyan-500 dark:text-slate-950 rounded-lg hover:opacity-90 transition shadow-sm"
              title="Download Original PDF File"
            >
              <Download size={13} />
              <span>Download PDF</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title="Open Raw PDF in New Tab"
            >
              <ExternalLink size={16} />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              title="Close Modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Native Resume Document (Chrome-proof, pixel-perfect ATS layout) */}
        <div className="flex-1 overflow-y-auto bg-slate-100 dark:bg-slate-950 p-3 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 dark:border-slate-800/90 bg-white dark:bg-[#0c1424] p-6 sm:p-10 shadow-lg text-slate-900 dark:text-slate-100 font-sans text-xs sm:text-[13px] leading-relaxed">
            {/* Header Lockup */}
            <div className="text-center pb-5 border-b border-slate-200 dark:border-slate-800">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide uppercase text-slate-900 dark:text-white">
                ANAND M C
              </h1>
              <p className="mt-1 text-xs sm:text-sm font-bold tracking-wider uppercase text-cyan-600 dark:text-cyan-400">
                DATA ENGINEER | SENIOR DATA MIGRATION ENGINEER
              </p>
              
              <div className="mt-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-600 dark:text-slate-300">
                <span>Bengaluru, Karnataka, India</span>
                <span aria-hidden="true">·</span>
                <a href="tel:+919535987114" className="hover:text-cyan-600 dark:hover:text-cyan-400 font-medium">
                  +91 9535987114
                </a>
                <span aria-hidden="true">·</span>
                <button
                  onClick={handleCopyEmail}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 font-medium inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>anandmc234@gmail.com</span>
                  {copiedEmail && <Check size={11} className="text-emerald-500" />}
                </button>
              </div>

              <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 text-xs font-medium text-cyan-700 dark:text-cyan-400">
                <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn
                </a>
                <span aria-hidden="true" className="text-slate-400">·</span>
                <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  GitHub
                </a>
                <span aria-hidden="true" className="text-slate-400">·</span>
                <a href={personalInfo.links.hackerrank} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  HackerRank
                </a>
                <span aria-hidden="true" className="text-slate-400">·</span>
                <a href={personalInfo.links.leetcode} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LeetCode
                </a>
              </div>
            </div>

            {/* Section: Professional Summary */}
            <div className="mt-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-cyan-400 pb-1 mb-2.5">
                PROFESSIONAL SUMMARY
              </h2>
              <ul className="space-y-1.5 list-disc pl-5 text-slate-700 dark:text-slate-300">
                <li>
                  Results-driven Data Engineer with <strong>3.8+ years of experience</strong> delivering enterprise-scale telecom BSS migrations across <strong>100M+ records</strong>.
                </li>
                <li>
                  Proficient in <strong>Python, SQL, Linux Shell, Oracle, MySQL, MongoDB, and Cassandra</strong>, with strong expertise in ETL/ELT pipelines, data transformation, and automated reconciliation.
                </li>
                <li>
                  Hands-on experience building cloud data lakehouses using <strong>Azure Data Factory (ADF), ADLS Gen2, Azure Databricks, PySpark, Delta Lake, Snowflake, and dbt</strong>.
                </li>
                <li>
                  Experienced in developing <strong>AI-powered data agents using Groq API</strong> and LLM-driven NL-to-SQL. Proven track record in production cutovers and on-site client delivery in the UK.
                </li>
              </ul>
            </div>

            {/* Section: Technical Skills */}
            <div className="mt-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-cyan-400 pb-1 mb-2.5">
                TECHNICAL SKILLS
              </h2>
              <ul className="space-y-1.5 list-disc pl-5 text-slate-700 dark:text-slate-300">
                <li>
                  <strong>Programming &amp; Querying:</strong> Python, SQL, Linux Shell Scripting (Bash), PL/SQL
                </li>
                <li>
                  <strong>Data Engineering &amp; ETL:</strong> ETL/ELT Pipelines, Data Migration (100M+ Records), Medallion Lakehouse, Batch Processing, Incremental Loading, Data Reconciliation, Data Cleansing, Source-to-Target Mapping, Validation &amp; Error Handling
                </li>
                <li>
                  <strong>Databases &amp; Warehousing:</strong> Oracle, MySQL, MongoDB, Apache Cassandra, PostgreSQL, Snowflake, dbt, Star Schema, SCD Type 2
                </li>
                <li>
                  <strong>Cloud &amp; Big Data:</strong> Azure Data Factory (ADF), ADLS Gen2, Azure Databricks, Apache Spark / PySpark, Delta Lake, AWS S3
                </li>
                <li>
                  <strong>AI &amp; Modern Analytics:</strong> Groq API (Llama 3.3/70B), LLM Data Agents, Natural Language to SQL, RAG, Data Profiling, FastAPI, Streamlit
                </li>
                <li>
                  <strong>Data Formats &amp; Tools:</strong> Parquet, Delta, JSON, CSV, PSV, Git, GitHub, VS Code, PyCharm, DBeaver, Robo 3T, Docker
                </li>
              </ul>
            </div>

            {/* Section: Professional Experience */}
            <div className="mt-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-cyan-400 pb-1 mb-2.5">
                PROFESSIONAL EXPERIENCE
              </h2>

              {/* Role 1 */}
              <div className="mb-4">
                <div className="flex flex-wrap items-baseline justify-between font-bold text-slate-900 dark:text-white">
                  <span>Senior Data Migration Engineer — Tecnotree | Bengaluru, India</span>
                  <span className="font-mono text-xs font-normal text-slate-600 dark:text-slate-400">October 2024 – Present</span>
                </div>
                <ul className="mt-1.5 space-y-1 list-disc pl-5 text-slate-700 dark:text-slate-300">
                  <li>Architected and executed Python and Shell-based ETL pipelines to migrate 100M+ telecom records from Oracle and Cassandra to MySQL and MongoDB.</li>
                  <li>Engineered automated JSON transformation, data cleansing, and schema validation utilities across heterogeneous databases.</li>
                  <li>Built SQL-driven automated reconciliation engines to verify row counts, balances, and subscriptions, ensuring 100% audit accuracy.</li>
                  <li>Implemented checkpointing, duplicate detection, and rerun logic to increase pipeline resilience and minimize batch downtime.</li>
                  <li>Led cutover triage, root-cause analysis, and SQL performance tuning, ensuring successful production go-lives with international clients.</li>
                </ul>
              </div>

              {/* Role 2 */}
              <div className="mb-4">
                <div className="flex flex-wrap items-baseline justify-between font-bold text-slate-900 dark:text-white">
                  <span>Data Migration Engineer — Tecnotree | Bengaluru, India</span>
                  <span className="font-mono text-xs font-normal text-slate-600 dark:text-slate-400">October 2023 – September 2024</span>
                </div>
                <ul className="mt-1.5 space-y-1 list-disc pl-5 text-slate-700 dark:text-slate-300">
                  <li>Developed Python and SQL scripts automating extraction, transformation, and loading for customer, billing, and subscription entities.</li>
                  <li>Implemented source-to-target mapping, schema checks, and discrepancy reconciliation to resolve data variances before target ingestion.</li>
                  <li>Collaborated with cross-functional DBAs, architects, and QA teams to optimize migration batch workflows and meet delivery milestones.</li>
                </ul>
              </div>

              {/* Role 3 */}
              <div className="mb-4">
                <div className="flex flex-wrap items-baseline justify-between font-bold text-slate-900 dark:text-white">
                  <span>Data Migration Intern — Tecnotree | Bengaluru, India</span>
                  <span className="font-mono text-xs font-normal text-slate-600 dark:text-slate-400">February 2023 – September 2023</span>
                </div>
                <ul className="mt-1.5 space-y-1 list-disc pl-5 text-slate-700 dark:text-slate-300">
                  <li>Built reusable Python utilities for flat-file parsing, data cleansing, normalization, and stage database population.</li>
                  <li>Conducted exploratory source data profiling, constraint testing, and anomaly identification to support migration readiness.</li>
                </ul>
              </div>
            </div>

            {/* Section: Key Projects & Client Engagements */}
            <div className="mt-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-cyan-400 pb-1 mb-2.5">
                KEY PROJECTS &amp; CLIENT ENGAGEMENTS
              </h2>

              <div className="mb-3">
                <div className="flex flex-wrap items-baseline justify-between font-bold text-slate-900 dark:text-white">
                  <span>Lyca UK – Customer &amp; Billing Migration</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium">2 Months Onsite (London, UK)</span>
                </div>
                <ul className="mt-1 space-y-1 list-disc pl-5 text-slate-700 dark:text-slate-300">
                  <li>Delivered on-site in the UK for a Tier-1 MVNO, migrating 100M+ customer, balance, and billing records to a modern BSS stack.</li>
                  <li>Engineered Python, Shell, and SQL routines to parse, validate, and reconcile high-volume pipe-separated (PSV) and CSV flat files.</li>
                  <li>Collaborated with UK client architects on mock cutover drills, issue triage, and production go-live sign-offs.</li>
                </ul>
              </div>

              <div className="mb-3">
                <div className="flex flex-wrap items-baseline justify-between font-bold text-slate-900 dark:text-white">
                  <span>MTN Cameroon, MTN Uganda &amp; Other International OpCos</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium">Multi-Country BSS Transformation</span>
                </div>
                <ul className="mt-1 space-y-1 list-disc pl-5 text-slate-700 dark:text-slate-300">
                  <li>Executed telecom BSS data migration, cleansing, and multi-tier reconciliation across international operating companies.</li>
                  <li>Engineered Oracle to MongoDB reconciliation scripts, resolving structural discrepancies and ensuring 99.9%+ validation compliance.</li>
                </ul>
              </div>
            </div>

            {/* Section: Technical Projects */}
            <div className="mt-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-cyan-400 pb-1 mb-2.5">
                TECHNICAL PROJECTS
              </h2>

              <div className="mb-3">
                <div className="flex flex-wrap items-baseline justify-between font-bold text-slate-900 dark:text-white">
                  <span>GROQ Data Engineering Agent – AI-Powered Data Analysis &amp; Profiling</span>
                  <span className="font-mono text-xs font-normal text-slate-500">October 2026</span>
                </div>
                <p className="text-slate-500 text-xs mt-0.5">
                  <strong>Technologies:</strong> Python, Groq API (Llama 3.3/70B), PostgreSQL, Pandas, Tabulate
                </p>
                <p className="text-slate-500 text-xs">
                  <strong>GitHub:</strong>{' '}
                  <a href="https://github.com/AnandMC5/GROQ_AI_DATA_AGENT" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                    github.com/AnandMC5/GROQ_AI_DATA_AGENT
                  </a>
                </p>
                <ul className="mt-1 space-y-1 list-disc pl-5 text-slate-700 dark:text-slate-300">
                  <li>Built an autonomous SQL Agent that introspects PostgreSQL schemas and parses natural-language prompts into read-only SQL queries.</li>
                  <li>Developed a Profile Agent for CSV, PSV, and XLSX datasets, automating null detection, duplicate auditing, and Markdown reporting.</li>
                </ul>
              </div>

              <div className="mb-3">
                <div className="flex flex-wrap items-baseline justify-between font-bold text-slate-900 dark:text-white">
                  <span>NYC Taxi End-to-End Cloud Data Engineering Pipeline</span>
                  <span className="font-mono text-xs font-normal text-slate-500">October 2026</span>
                </div>
                <p className="text-slate-500 text-xs mt-0.5">
                  <strong>Technologies:</strong> Azure Data Factory (ADF), ADLS Gen2, Azure Databricks, PySpark, Delta Lake, Power BI
                </p>
                <p className="text-slate-500 text-xs">
                  <strong>GitHub:</strong>{' '}
                  <a href="https://github.com/AnandMC5/NYC_TAXI_DATA_ENGINEERING_PROJECT" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                    github.com/AnandMC5/NYC_TAXI_DATA_ENGINEERING_PROJECT
                  </a>
                </p>
                <ul className="mt-1 space-y-1 list-disc pl-5 text-slate-700 dark:text-slate-300">
                  <li>Constructed parameterized ADF pipelines with reusable linked services for automated multi-file ingestion into ADLS Gen2 Bronze layer.</li>
                  <li>Implemented distributed PySpark transformations in Databricks to clean trip records, enforce schemas, and curate Silver &amp; Gold Delta tables.</li>
                </ul>
              </div>

              <div className="mb-3">
                <div className="flex flex-wrap items-baseline justify-between font-bold text-slate-900 dark:text-white">
                  <span>Cloud Data Engineering &amp; Analytics Pipeline – AWS, Snowflake &amp; dbt</span>
                  <span className="font-mono text-xs font-normal text-slate-500">August – September 2026</span>
                </div>
                <p className="text-slate-500 text-xs mt-0.5">
                  <strong>Technologies:</strong> AWS S3, Snowflake, dbt, Python, SQL, Star Schema, SCD Type 2
                </p>
                <p className="text-slate-500 text-xs">
                  <strong>GitHub:</strong>{' '}
                  <a href="https://github.com/AnandMC5/AWS_DBT_SNOWFLAKE_DE_PROJECT" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                    github.com/AnandMC5/AWS_DBT_SNOWFLAKE_DE_PROJECT
                  </a>
                </p>
                <ul className="mt-1 space-y-1 list-disc pl-5 text-slate-700 dark:text-slate-300">
                  <li>Configured AWS S3 staging and Snowflake external stages to ingest raw business datasets into Bronze staging schemas.</li>
                  <li>Built modular dbt models with incremental MERGE/upsert logic, reusable macros, Star Schema modeling, and SCD Type 2 Snapshots.</li>
                </ul>
              </div>
            </div>

            {/* Section: Education */}
            <div className="mt-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-cyan-400 pb-1 mb-2.5">
                EDUCATION
              </h2>
              <div className="flex flex-wrap items-baseline justify-between">
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">
                    Bachelor of Engineering (B.E.) in Information Science &amp; Engineering
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-xs">
                    NIE Institute of Technology (NIE North), Mysuru, Karnataka | 2019 – 2023
                  </p>
                </div>
                <span className="font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400">
                  CGPA: 7.8 / 10
                </span>
              </div>
            </div>

            {/* Section: Certifications & Recognition */}
            <div className="mt-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-cyan-400 pb-1 mb-2.5">
                CERTIFICATIONS &amp; RECOGNITION
              </h2>
              <ul className="space-y-1.5 list-disc pl-5 text-slate-700 dark:text-slate-300">
                <li>
                  <strong>Introduction to Agents</strong> – Mercor (Credential ID: MRC-2026-PSWPJYLF) · Demonstrating rigor, calibration, and clarity in AI agent evaluation.
                </li>
                <li>
                  Google AI Professional Certificate – Google / Coursera
                </li>
                <li>
                  Data Analysis with Python – Coursera (Credential ID: W2VDDJYA4BBT)
                </li>
                <li>
                  Python for Data Science, AI &amp; Development – IBM / Coursera (Credential ID: M5JTL1GSR5DJ)
                </li>
                <li>
                  SQL (Intermediate) Certificate – HackerRank (Credential ID: 44698a3881bf)
                </li>
                <li>
                  Python Programming Zero to Hero – Udemy (Credential ID: UC-80ef1d62-1d25-42bd-a696-2ed44ce9e94b)
                </li>
                <li>
                  <strong>Recognition:</strong> Received internal Kudos at Tecnotree for stellar engineering delivery, operational reliability, and proactive issue resolution during high-stakes telecom cutovers (MTN Cameroon &amp; Lyca UK).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
