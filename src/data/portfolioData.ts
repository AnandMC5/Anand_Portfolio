export interface Project {
  id: string;
  title: string;
  category: string;
  tag: 'Cloud Lakehouse' | 'Generative AI' | 'Telecom Migration' | 'Data Engineering' | 'Software Engineering';
  year: string;
  shortDescription: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  architecture?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  status: 'Completed' | 'In Production' | 'Currently Building';
  metrics?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  domains: string[];
  current: boolean;
  highlight?: string;
}

export interface ClientEngagement {
  id: string;
  title: string;
  roleType: string;
  location: string;
  duration?: string;
  description: string;
  bulletPoints: string[];
  technologies: string[];
  stats?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: { name: string; level?: 'Advanced' | 'Expert' | 'Proficient' }[];
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl: string;
  skills: string[];
  highlight?: boolean;
}

export interface Award {
  id: number;
  title: string;
  category: 'Award' | 'Project Certification' | 'Project Participation' | 'Internship';
  organization: string;
  description: string;
  file: string;
  type: 'pdf';
  highlight?: boolean;
}

export const personalInfo = {
  name: 'Anand M C',
  role: 'Data Engineer | Senior Data Migration Engineer',
  tagline: 'Engineering data into intelligence.',
  bio: 'Results-driven Data Engineer with 3.8+ years of experience delivering enterprise-scale telecom BSS migrations across 100M+ records. Proficient in cloud data lakehouses (ADF, Databricks, PySpark, Snowflake, dbt), enterprise databases, ETL pipelines, and AI data agents.',
  location: 'Bengaluru, Karnataka, India',
  phone: '+91 9535987114',
  email: 'anandmc234@gmail.com',
  experienceYears: '3.8+',
  recordsMigrated: '100M+',
  opCosWorked: '3+ Global',
  profileImage: '/profile.jpg',
  resumeUrl: '/resume.pdf',
  links: {
    github: 'https://github.com/AnandMC5',
    linkedin: 'https://www.linkedin.com/in/anand-m-c-aa145526b/',
    hackerrank: 'https://www.hackerrank.com/profile/anandmc234',
    leetcode: 'https://leetcode.com/u/Anandmc_7777/',
  },
  highlights: [
    { value: '100M+', label: 'Telecom Records Migrated', desc: 'From Oracle & Cassandra to MySQL & MongoDB with 100% audit accuracy' },
    { value: '3.8+', label: 'Years Experience', desc: 'Enterprise data migration, cloud lakehouses & AI-driven engineering' },
    { value: 'London, UK', label: 'Onsite Client Delivery', desc: '2 months onsite in the UK for Tier-1 MVNO production cutover' },
    { value: '10+', label: 'Cloud & AI Projects', desc: 'ADF, Databricks, PySpark, Snowflake, dbt, Groq LLM agents & RAG' },
  ],
};

export const experiences: ExperienceItem[] = [
  {
    id: 'senior-data-migration-engineer',
    company: 'Tecnotree',
    role: 'Senior Data Migration Engineer',
    period: 'October 2024 — Present',
    location: 'Bengaluru, India',
    type: 'Full-time',
    highlight: 'Leading production cutover triage, automated reconciliation engines & 100M+ record migrations',
    description: 'Working on enterprise telecom BSS data migration projects involving large-scale datasets, multi-database validation, automated transformation, and production cutovers for international telecom operators.',
    responsibilities: [
      'Architected and executed Python and Shell-based ETL pipelines to migrate 100M+ telecom records from Oracle and Cassandra to MySQL and MongoDB.',
      'Engineered automated JSON transformation, data cleansing, and schema validation utilities across heterogeneous databases.',
      'Built SQL-driven automated reconciliation engines to verify row counts, balances, and subscriptions, ensuring 100% audit accuracy.',
      'Implemented checkpointing, duplicate detection, and rerun logic to increase pipeline resilience and minimize batch downtime.',
      'Led cutover triage, root-cause analysis, and SQL performance tuning, ensuring successful production go-lives with international clients.',
    ],
    technologies: ['Python', 'SQL', 'Oracle', 'MySQL', 'MongoDB', 'Apache Cassandra', 'PySpark', 'Pandas', 'Linux Shell (Bash)', 'Git'],
    domains: ['Telecom BSS', 'Enterprise Data Migration', 'Automated Reconciliation', 'ETL/ELT Architecture'],
    current: true,
  },
  {
    id: 'data-migration-engineer',
    company: 'Tecnotree',
    role: 'Data Migration Engineer',
    period: 'October 2023 — September 2024',
    location: 'Bengaluru, India',
    type: 'Full-time',
    highlight: 'Automated extraction, source-to-target mapping, and cross-functional cutovers',
    description: 'Worked on telecom data migration initiatives involving extraction, transformation, validation, and loading across multiple heterogeneous source and target databases.',
    responsibilities: [
      'Developed Python and SQL scripts automating extraction, transformation, and loading for customer, billing, and subscription entities.',
      'Implemented source-to-target mapping, schema checks, and discrepancy reconciliation to resolve data variances before target ingestion.',
      'Collaborated with cross-functional DBAs, architects, and QA teams to optimize migration batch workflows and meet delivery milestones.',
      'Processed massive flat-file extracts (PSV/CSV), staging layers, and database-level reconciliations.',
    ],
    technologies: ['Python', 'SQL', 'Oracle', 'MySQL', 'MongoDB', 'Pandas', 'Git', 'Linux'],
    domains: ['Telecom BSS', 'Data Migration', 'ETL Pipelines', 'Data Quality'],
    current: false,
  },
  {
    id: 'data-migration-intern',
    company: 'Tecnotree',
    role: 'Data Migration Intern',
    period: 'February 2023 — September 2023',
    location: 'Bengaluru, India',
    type: 'Internship',
    highlight: 'Foundation in enterprise flat-file parsing, data profiling, and validation',
    description: 'Started professional engineering journey focusing on enterprise telecom data migration workflows, anomaly profiling, and database utilities.',
    responsibilities: [
      'Built reusable Python utilities for flat-file parsing, data cleansing, normalization, and stage database population.',
      'Conducted exploratory source data profiling, constraint testing, and anomaly identification to support migration readiness.',
      'Assisted in identifying data inconsistencies and supported project teams during high-volume cutover preparations.',
    ],
    technologies: ['Python', 'SQL', 'Oracle', 'MySQL', 'Pandas', 'Linux Shell'],
    domains: ['Data Engineering', 'Telecom Systems', 'Data Profiling'],
    current: false,
  },
];

export const clientEngagements: ClientEngagement[] = [
  {
    id: 'lyca-uk',
    title: 'Lyca UK – Customer & Billing Migration',
    roleType: 'Tier-1 MVNO Onsite Engagement',
    location: 'London, UK',
    duration: '2 Months Onsite',
    stats: '100M+ Records',
    description: 'Delivered high-stakes on-site engineering in London for a Tier-1 MVNO, migrating 100M+ customer, balance, and billing records to a modern BSS stack.',
    bulletPoints: [
      'Engineered Python, Shell, and SQL routines to parse, validate, and reconcile high-volume pipe-separated (PSV) and CSV flat files.',
      'Collaborated directly with UK client architects on mock cutover drills, live issue triage, and production go-live sign-offs.',
      'Ensured zero data loss and automated multi-tier financial reconciliation during final cutover.',
    ],
    technologies: ['Python', 'SQL', 'Oracle', 'MySQL', 'MongoDB', 'PSV/CSV Processing', 'Bash', 'Cutover Drills'],
  },
  {
    id: 'mtn-international',
    title: 'MTN Cameroon & MTN Uganda – Multi-Country BSS Transformation',
    roleType: 'International OpCo Transformation',
    location: 'Cameroon & Uganda (Global Delivery)',
    duration: 'Multi-Phase',
    stats: '99.9%+ Accuracy',
    description: 'Executed telecom BSS data migration, cleansing, and multi-tier reconciliation across international operating companies.',
    bulletPoints: [
      'Engineered Oracle to MongoDB and Cassandra reconciliation scripts, resolving structural discrepancies and ensuring 99.9%+ validation compliance.',
      'Built automated staging, checkpointing, and rerun logic to handle volatile network batch transfers.',
      'Received internal Kudos at Tecnotree for stellar delivery during high-stakes cutovers.',
    ],
    technologies: ['Cassandra', 'Oracle', 'MongoDB', 'MySQL', 'Python', 'ETL', 'Incremental Loading'],
  },
];

export const projects: Project[] = [
  {
    id: 'groq-ai-data-agent',
    title: 'GROQ Data Engineering Agent – AI-Powered Analysis & Profiling',
    category: 'AI & Data Engineering',
    tag: 'Generative AI',
    year: 'October 2026',
    status: 'Completed',
    featured: true,
    metrics: 'Llama 3.3/70B • Real-time SQL Generation • Automated Profiling',
    shortDescription: 'Autonomous AI Data Agent using Groq API (Llama 3.3/70B) that introspects PostgreSQL schemas, parses natural language into read-only SQL queries, and generates automated data profiling audits.',
    description: 'An advanced AI engineering tool that empowers data analysts and engineers to converse directly with relational databases and tabular files. The system contains an SQL Agent that safely inspects PostgreSQL catalogs and compiles natural-language prompts into syntactically valid, read-only queries, alongside a File Profiler Agent that automates null detection, duplicate auditing, statistical summaries, and Markdown report generation.',
    problem: 'Ad-hoc data exploration and dataset profiling across large CSV, PSV, and SQL environments is time-consuming and often requires writing repetitive inspection queries or boilerplate Pandas code.',
    solution: 'Engineered an autonomous dual-agent system: an introspective SQL agent that maps database catalogs into schema context for LLaMA 3.3/70B via Groq API (delivering ultra-low inference latency), and a profile agent that digests multiple file formats to detect anomalies and produce structured audit reports.',
    technologies: ['Python', 'Groq API (Llama 3.3/70B)', 'PostgreSQL', 'Pandas', 'Tabulate', 'Prompt Engineering', 'FastAPI'],
    architecture: ['User Natural Language Query', 'Schema Introspection Engine', 'Groq API (Llama 3.3/70B)', 'SQL Validator & Safety Sandbox', 'PostgreSQL Execution', 'Tabular Result & Profile Reporter'],
    githubUrl: 'https://github.com/AnandMC5/GROQ_AI_DATA_AGENT',
  },
  {
    id: 'nyc-taxi-cloud-pipeline',
    title: 'NYC Taxi End-to-End Cloud Data Engineering Pipeline',
    category: 'Cloud & Big Data',
    tag: 'Cloud Lakehouse',
    year: 'October 2026',
    status: 'Completed',
    featured: true,
    metrics: 'ADF • ADLS Gen2 • Databricks • Delta Lake • Power BI',
    shortDescription: 'Enterprise Medallion Lakehouse pipeline using Azure Data Factory (ADF), ADLS Gen2, Azure Databricks, PySpark, and Delta Lake with automated multi-file ingestion and Power BI reporting.',
    description: 'A production-grade cloud lakehouse implementation on Microsoft Azure. Features parameterized Azure Data Factory pipelines with reusable linked services for automated multi-file ingestion into ADLS Gen2 Bronze layer, followed by distributed PySpark transformations in Databricks to clean records, enforce strict schema validation, and curate Silver and Gold Delta tables for analytics.',
    problem: 'Massive, continually growing trip and telemetry datasets require reliable ingestion, distributed transformation, and schema governance without bottlenecks or dirty data propagating downstream.',
    solution: 'Designed and deployed an end-to-end Medallion Lakehouse on Azure. Automated ingestion through ADF into Bronze, executed distributed PySpark cleansing and schema enforcement in Databricks into Silver, and published dimensionally modeled Gold Delta tables for instant Power BI reporting.',
    technologies: ['Azure Data Factory (ADF)', 'ADLS Gen2', 'Azure Databricks', 'Apache Spark / PySpark', 'Delta Lake', 'Power BI', 'SQL'],
    architecture: ['Raw NYC Taxi Data', 'Azure Data Factory (ADF)', 'ADLS Gen2 Bronze', 'Databricks PySpark Cleaning', 'Delta Lake Silver', 'Gold Aggregations & Star Schema', 'Power BI Dashboard'],
    githubUrl: 'https://github.com/AnandMC5/NYC_TAXI_DATA_ENGINEERING_PROJECT',
  },
  {
    id: 'aws-snowflake-dbt-pipeline',
    title: 'Cloud Data Engineering & Analytics Pipeline – AWS, Snowflake & dbt',
    category: 'Cloud Warehousing & Analytics',
    tag: 'Cloud Lakehouse',
    year: 'August – September 2026',
    status: 'Completed',
    featured: true,
    metrics: 'AWS S3 • Snowflake • dbt • SCD Type 2 • Star Schema',
    shortDescription: 'Modern data stack pipeline integrating AWS S3, Snowflake external staging, and modular dbt models with incremental MERGE/upsert logic, reusable macros, Star Schema modeling, and SCD Type 2 snapshots.',
    description: 'A modern cloud data warehouse platform built on Snowflake and orchestrated using dbt. Configured AWS S3 staging and Snowflake external stages to ingest raw business datasets into Bronze staging schemas. Built modular dbt models with incremental MERGE/upsert logic, reusable macros, dimensional star schema modeling, and slowly changing dimension (SCD Type 2) tracking.',
    problem: 'Business entities evolve over time, requiring historical auditability and high-performance analytical queries without reprocessing the entire dataset on every ETL run.',
    solution: 'Architected Snowflake external stages connected to S3 buckets. Built dbt transformations utilizing incremental models for low-cost MERGE operations and dbt snapshots to maintain SCD Type 2 dimension history.',
    technologies: ['AWS S3', 'Snowflake', 'dbt', 'Python', 'SQL', 'Star Schema', 'SCD Type 2', 'Git'],
    architecture: ['Raw Ingestion to AWS S3', 'Snowflake External Stage', 'Bronze Staging Schema', 'dbt Incremental Models', 'Silver Cleansed Schema', 'dbt Snapshots (SCD Type 2)', 'Gold Star Schema'],
    githubUrl: 'https://github.com/AnandMC5/AWS_DBT_SNOWFLAKE_DE_PROJECT',
  },
  {
    id: 'ecommerce-data-engineering-ai-platform',
    title: 'E-Commerce Data Engineering & AI Analytics Platform',
    category: 'Data Engineering + AI',
    tag: 'Data Engineering',
    year: '2026',
    status: 'Completed',
    featured: true,
    metrics: 'Airflow • PostgreSQL • FastAPI • RAG • LLaMA • Docker',
    shortDescription: 'End-to-end data platform combining incremental ETL pipelines, automated data quality validation, dimensional modeling, FastAPI KPI services, and an AI BI copilot.',
    description: 'A production-style e-commerce data platform that processes raw datasets through automated pipelines, loads them into a star schema in PostgreSQL, exposes business intelligence through RESTful APIs, and layers an AI-powered conversational BI agent for decision-makers.',
    problem: 'Raw e-commerce datasets require reliable ingestion, validation, transformation, and analytics before they can support business decisions.',
    solution: 'Built an end-to-end platform with incremental ingestion, automated data quality validation, dimensional modeling, KPI APIs, Airflow orchestration, and an AI BI copilot.',
    technologies: ['Python', 'SQL', 'Pandas', 'PostgreSQL', 'Apache Airflow', 'FastAPI', 'RAG', 'Ollama', 'LLaMA', 'Docker'],
    architecture: ['Raw E-Commerce Datasets', 'Airflow Ingestion & Validation', 'Data Quality Checks', 'PostgreSQL Star Schema', 'FastAPI Services', 'RAG Embeddings & Ollama', 'Streamlit & BI Copilot'],
    githubUrl: 'https://github.com/AnandMC5/ecommerce-data-engineering-ai-platform',
  },
  {
    id: 'openaix-document-engine',
    title: 'OpenAIX – Multi-Format Document Knowledge Engine',
    category: 'Generative AI & RAG',
    tag: 'Generative AI',
    year: '2026',
    status: 'Currently Building',
    featured: false,
    metrics: 'Qdrant • FastEmbed • Ollama • RAG • LLaMA',
    shortDescription: 'An AI knowledge platform for indexing and querying multi-format documents (PDFs, Word, spreadsheets, CSVs) using embeddings, vector search, and RAG.',
    description: 'Building a document ingestion and retrieval architecture that converts multiple enterprise file formats into high-dimensional vector representations and uses Retrieval-Augmented Generation for intelligent, grounded question answering.',
    problem: 'Important business information is fragmented across disparate PDFs, Word documents, spreadsheets, and CSV files, making unified semantic search impossible.',
    solution: 'Developed an asynchronous document parsing pipeline that chunks text, generates embeddings, persists them into Qdrant vector database, and uses context-stuffed prompts for grounded LLM answers.',
    technologies: ['Python', 'FastAPI', 'Ollama', 'LLaMA', 'Qdrant', 'Embeddings', 'RAG', 'Docker'],
    architecture: ['Document Parser', 'Semantic Chunker', 'Vector Embeddings', 'Qdrant Collection', 'Hybrid Search Retriever', 'LLM Context Injection', 'FastAPI Endpoint'],
  },
  {
    id: 'ai-prompt-optimizer',
    title: 'AI Prompt Optimizer & Scorer',
    category: 'Generative AI',
    tag: 'Generative AI',
    year: '2026',
    status: 'Currently Building',
    featured: false,
    metrics: 'Qwen • LLM Evaluation • Multi-Dimensional Scoring',
    shortDescription: 'An AI-powered system that analyzes, scores, and optimizes user prompts across clarity, specificity, constraints, and structure using LLM evaluation.',
    description: 'An intelligent prompting copilot that evaluates developer and analyst prompts against prompt-engineering benchmarks, diagnoses ambiguity or missing constraints, and outputs optimized versions.',
    problem: 'Poorly structured prompts produce inconsistent, incomplete, or hallucinated AI responses. Users need a systematic way to evaluate and improve prompts.',
    solution: 'Engineered a multi-dimensional evaluation rubric executed via LLM service and vector similarity, generating scores and actionable optimization suggestions.',
    technologies: ['Python', 'FastAPI', 'LLM', 'Qwen', 'Prompt Engineering', 'Embeddings', 'RAG', 'Qdrant'],
    architecture: ['User Raw Prompt', 'Rule & Metric Analyzer', 'LLM Evaluation Matrix', 'Rubric Scoring', 'Optimizer Engine', 'Structured Output'],
  },
  {
    id: 'lyca-uk-migration-project',
    title: 'Lyca UK – Enterprise Telecom Migration (100M+ Records)',
    category: 'Telecom Data Migration',
    tag: 'Telecom Migration',
    year: '2025',
    status: 'In Production',
    featured: true,
    metrics: '100M+ Records • Oracle to MongoDB & MySQL • London Onsite',
    shortDescription: 'Large-scale telecom customer and billing data migration involving 100M+ records from Oracle to MongoDB and MySQL with zero downtime cutover.',
    description: 'Migrated 100M+ customer, billing, and subscription records from legacy Oracle source systems into MongoDB and MySQL while maintaining strict financial reconciliation, audit compliance, and SLA guarantees.',
    problem: 'High-volume records needed to be migrated across heterogeneous database schemas under tight maintenance windows without financial discrepancies.',
    solution: 'Created high-performance extraction and transformation pipelines in Python and Bash, implemented automated row-count and financial balance reconciliation, and resolved data variances in real-time during live cutover drills in London.',
    technologies: ['Python', 'SQL', 'Oracle', 'MongoDB', 'MySQL', 'PySpark', 'ETL', 'JSON', 'Data Validation'],
    architecture: ['Oracle Source', 'Flat File / Extract Layer', 'Staging Layer', 'Data Cleansing & Validation', 'ETL Processing', 'MongoDB & MySQL Ingestion', 'Multi-Tier Reconciliation'],
  },
  {
    id: 'mtn-cameroon-uganda-migration',
    title: 'MTN Cameroon & Uganda – BSS Data Transformation',
    category: 'Telecom Data Migration',
    tag: 'Telecom Migration',
    year: '2024–2026',
    status: 'In Production',
    featured: false,
    metrics: 'Multi-Country • Cassandra & Oracle • 99.9%+ Accuracy',
    shortDescription: 'Large-scale telecom customer and billing data migration from Cassandra and Oracle into MongoDB and MySQL with incremental loading and reconciliation.',
    description: 'Designed and implemented staging and validation layers for data cleansing, deduplication, and null handling. Implemented incremental loading and rerun mechanisms to improve migration reliability across international operating companies.',
    problem: 'Large telecom datasets from Cassandra and Oracle needed to be migrated while maintaining data quality, consistency, and complex business rules.',
    solution: 'Architected robust checkpointing and validation scripts that ensured 99.9%+ accuracy and earned internal recognition from engineering leadership.',
    technologies: ['Python', 'SQL', 'Oracle', 'Cassandra', 'MongoDB', 'MySQL', 'ETL', 'Incremental Loading'],
    architecture: ['Cassandra & Oracle', 'Extraction Layer', 'Staging & Deduplication', 'Data Validation', 'Incremental Load', 'Target Databases', 'Reconciliation Audit'],
  },
  {
    id: 'automated-car-parking-system',
    title: 'Automated Car Parking System',
    category: 'Software Engineering',
    tag: 'Software Engineering',
    year: '2023',
    status: 'Completed',
    featured: false,
    metrics: 'Python • Database Management • Automation',
    shortDescription: 'An automated parking management system designed to streamline vehicle entry, parking allocation, and tracking digitally.',
    description: 'Developed an automated parking management application to organize vehicle information and parking operations digitally, eliminating paper-based logs and parking allocation delays.',
    problem: 'Manual parking management leads to inefficient space utilization, longer vehicle processing times, and difficulty tracking parking logs.',
    solution: 'Created an intuitive desktop management system with automated slot allocation, entry/exit timestamping, fee calculation, and reporting.',
    technologies: ['Python', 'Automation', 'Database', 'Application Development', 'SQL'],
    architecture: ['User Interface', 'Parking Allocation Logic', 'Vehicle Registry', 'Relational Database'],
    githubUrl: 'https://github.com/AnandMC5/Automated_Car_Parking_System',
  },
  {
    id: 'life-insurance-management-system',
    title: 'Life Insurance Management System',
    category: 'Software Engineering',
    tag: 'Software Engineering',
    year: '2023',
    status: 'Completed',
    featured: false,
    metrics: 'Python • SQL • CRUD & Policy Tracking',
    shortDescription: 'A centralized application for managing life insurance policies, customer records, and operational workflows.',
    description: 'Centralized insurance policy management software facilitating customer record onboarding, premium calculations, policy status tracking, and agent allocations.',
    problem: 'Insurance operations involve managing vast customer details, policy terms, and renewals that become error-prone through manual processes.',
    solution: 'Developed a relational-backed software application for storing, searching, and updating insurance policies and customer accounts.',
    technologies: ['Python', 'Database', 'Application Development', 'SQL'],
    architecture: ['Application Layer', 'Customer Management', 'Policy Management', 'Relational Database'],
    githubUrl: 'https://github.com/AnandMC5/Life_Insurance_Management_System',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming-querying',
    title: 'Programming & Querying',
    iconName: 'Code2',
    description: 'Core languages and scripting used for high-throughput data processing and automation.',
    skills: [
      { name: 'Python', level: 'Expert' },
      { name: 'SQL', level: 'Expert' },
      { name: 'Linux Shell Scripting (Bash)', level: 'Advanced' },
      { name: 'PL/SQL', level: 'Advanced' },
    ],
  },
  {
    id: 'data-engineering-etl',
    title: 'Data Engineering & ETL',
    iconName: 'Layers',
    description: 'Production architectures, Medallion lakehouses, and high-volume data migration pipelines.',
    skills: [
      { name: 'ETL / ELT Pipelines', level: 'Expert' },
      { name: 'Data Migration (100M+ Records)', level: 'Expert' },
      { name: 'Medallion Lakehouse (Bronze/Silver/Gold)', level: 'Advanced' },
      { name: 'Batch Processing & Incremental Loading', level: 'Expert' },
      { name: 'Data Reconciliation & Auditing', level: 'Expert' },
      { name: 'Data Cleansing & Validation', level: 'Expert' },
      { name: 'Source-to-Target Mapping', level: 'Expert' },
      { name: 'Error Handling & Checkpointing', level: 'Advanced' },
    ],
  },
  {
    id: 'cloud-big-data',
    title: 'Cloud & Big Data Platforms',
    iconName: 'Cloud',
    description: 'Scalable cloud infrastructure, distributed computing, and data lake storage.',
    skills: [
      { name: 'Azure Data Factory (ADF)', level: 'Advanced' },
      { name: 'ADLS Gen2', level: 'Advanced' },
      { name: 'Azure Databricks', level: 'Advanced' },
      { name: 'Apache Spark / PySpark', level: 'Advanced' },
      { name: 'Delta Lake', level: 'Advanced' },
      { name: 'Snowflake', level: 'Advanced' },
      { name: 'dbt (Data Build Tool)', level: 'Advanced' },
      { name: 'AWS S3', level: 'Proficient' },
    ],
  },
  {
    id: 'databases-warehousing',
    title: 'Databases & Warehousing',
    iconName: 'Database',
    description: 'Relational, document, key-value, and analytical data stores.',
    skills: [
      { name: 'Oracle Database', level: 'Expert' },
      { name: 'MySQL', level: 'Expert' },
      { name: 'MongoDB', level: 'Expert' },
      { name: 'Apache Cassandra', level: 'Advanced' },
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'Star Schema & Dimensional Modeling', level: 'Advanced' },
      { name: 'SCD Type 2 Snapshots', level: 'Advanced' },
      { name: 'Query Optimization', level: 'Expert' },
    ],
  },
  {
    id: 'ai-modern-analytics',
    title: 'AI & Modern Analytics',
    iconName: 'Sparkles',
    description: 'Autonomous LLM data agents, RAG architectures, and modern API microservices.',
    skills: [
      { name: 'Groq API (Llama 3.3/70B)', level: 'Advanced' },
      { name: 'LLM Data Agents', level: 'Advanced' },
      { name: 'Natural Language to SQL', level: 'Advanced' },
      { name: 'Retrieval-Augmented Generation (RAG)', level: 'Advanced' },
      { name: 'Qdrant & Vector Embeddings', level: 'Advanced' },
      { name: 'Data Profiling & Auditing', level: 'Expert' },
      { name: 'FastAPI', level: 'Advanced' },
      { name: 'Streamlit & Power BI', level: 'Advanced' },
    ],
  },
  {
    id: 'tools-formats',
    title: 'Formats, DevOps & Tools',
    iconName: 'Wrench',
    description: 'Data interchange formats, version control, and development environments.',
    skills: [
      { name: 'Parquet & Delta Format', level: 'Advanced' },
      { name: 'JSON, PSV, CSV', level: 'Expert' },
      { name: 'Git & GitHub', level: 'Expert' },
      { name: 'Docker', level: 'Proficient' },
      { name: 'DBeaver & Robo 3T', level: 'Expert' },
      { name: 'VS Code & PyCharm', level: 'Expert' },
      { name: 'Grafana & MobaXterm', level: 'Advanced' },
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: 'mercor-introduction-to-agents',
    name: 'Introduction to Agents',
    organization: 'Mercor',
    issueDate: '2026',
    credentialId: 'MRC-2026-PSWPJYLF',
    credentialUrl: 'https://work.mercor.com/learn/verify/MRC-2026-PSWPJYLF',
    skills: ['AI Agents', 'Agent Evaluation', 'Rigor & Calibration', 'Prompt Design'],
    highlight: true,
  },
  {
    id: 'google-ai-professional',
    name: 'Google AI Professional Certificate',
    organization: 'Google / Coursera',
    issueDate: '2025',
    credentialUrl: 'https://www.coursera.org',
    skills: ['Generative AI', 'Deep Learning', 'Applied AI', 'Prompt Engineering'],
    highlight: true,
  },
  {
    id: 'data-analysis-python',
    name: 'Data Analysis with Python',
    organization: 'Coursera',
    issueDate: 'March 2025',
    credentialId: 'W2VDDJYA4BBT',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/W2VDDJYA4BBT',
    skills: ['Python', 'Pandas', 'NumPy', 'Data Analysis', 'Statistical Modeling'],
    highlight: true,
  },
  {
    id: 'python-data-science-ai-development',
    name: 'Python for Data Science, AI & Development',
    organization: 'IBM / Coursera',
    issueDate: 'February 2025',
    credentialId: 'M5JTL1GSR5DJ',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/M5JTL1GSR5DJ',
    skills: ['Python', 'Data Science', 'AI Foundations', 'APIs & Web Scraping'],
    highlight: true,
  },
  {
    id: 'oracle-sql-intermediate',
    name: 'Oracle SQL (Intermediate) Certified',
    organization: 'HackerRank',
    issueDate: 'February 2025',
    credentialId: '44698a3881bf',
    credentialUrl: 'https://www.hackerrank.com/certificates/44698a3881bf',
    skills: ['Oracle SQL', 'Database Querying', 'Joins & Subqueries', 'Query Optimization'],
    highlight: true,
  },
  {
    id: 'python-basic-hackerrank',
    name: 'Python Language (Basic) Certified',
    organization: 'HackerRank Campus Club, AUFS',
    issueDate: 'January 2025',
    credentialId: '42dc27ddd113',
    credentialUrl: 'https://www.hackerrank.com/certificates/42dc27ddd113',
    skills: ['Python', 'Problem Solving', 'Data Structures', 'Algorithms'],
  },
  {
    id: 'complete-python-bootcamp',
    name: 'The Complete Python Bootcamp From Zero to Hero in Python',
    organization: 'Udemy',
    issueDate: 'May 2023',
    credentialId: 'UC-80ef1d62-1d25-42bd-a696-2ed44ce9e94b',
    credentialUrl: 'https://www.udemy.com/certificate/UC-80ef1d62-1d25-42bd-a696-2ed44ce9e94b/',
    skills: ['Python', 'OOP', 'Data Pipelines', 'Automation'],
    highlight: true,
  },
  {
    id: 'claude-101',
    name: 'Claude 101',
    organization: 'Skilljar / Anthropic',
    issueDate: '2024',
    credentialId: 'x3fjv9nxyhg8',
    credentialUrl: 'https://verify.skilljar.com/c/x3fjv9nxyhg8',
    skills: ['Generative AI', 'LLMs', 'Prompt Design'],
  },
  {
    id: 'ai-real-world',
    name: 'Artificial Intelligence in Real World',
    organization: 'upGrad',
    issueDate: 'October 2023',
    credentialUrl: 'https://upgrad.certificate.givemycertificate.com/c/38c6977e-5a0c-447a-b2e0-1229c7385452',
    skills: ['Artificial Intelligence', 'Machine Learning', 'Industry AI'],
  },
  {
    id: 'python-machine-learning',
    name: 'Python for Machine Learning',
    organization: 'Great Learning',
    issueDate: 'July 2022',
    credentialId: 'EQXJYZXH',
    credentialUrl: 'https://www.mygreatlearning.com/certificate/EQXJYZXH',
    skills: ['Python', 'Machine Learning', 'Supervised Learning'],
  },
];

export const awards: Award[] = [
  {
    id: 1,
    title: 'Alpha Team Award',
    category: 'Award',
    organization: 'Tecnotree',
    description: 'Award for outstanding performance, dedication, and valuable contribution across high-impact telecom migration projects.',
    file: '/assets/Team_Award.pdf',
    type: 'pdf',
    highlight: true,
  },
  {
    id: 2,
    title: 'MTNC Phase 1 – Non-GSM Full Go-Live Kudos',
    category: 'Project Certification',
    organization: 'Tecnotree',
    description: 'Official corporate recognition for successful engineering contribution to the high-stakes MTNC Phase 1 Non-GSM Full Go-Live.',
    file: '/assets/Kudos_Kittos_Award_phase1.pdf',
    type: 'pdf',
    highlight: true,
  },
  {
    id: 3,
    title: 'MTNC Phase 2 – GSM Full Go-Live Kudos',
    category: 'Project Certification',
    organization: 'Tecnotree',
    description: 'Recognition for stellar engineering delivery, operational reliability, and proactive issue resolution during MTNC Phase 2 GSM Full Go-Live.',
    file: '/assets/Kudos_Kittos_Award_phase2.pdf',
    type: 'pdf',
    highlight: true,
  },
  {
    id: 4,
    title: 'IEEE Project EXPO – 2023',
    category: 'Project Participation',
    organization: 'IEEE',
    description: 'Certificate of participation in the 7th National Level IEEE Project EXPO – 2023 for innovative engineering work.',
    file: '/assets/IEEE_Project_Expo.pdf',
    type: 'pdf',
    highlight: true,
  },
  {
    id: 5,
    title: 'Web Development Internship (Stage 1)',
    category: 'Internship',
    organization: 'Web Development',
    description: 'Certificate of internship completion in full-stack web applications and software development.',
    file: '/assets/Web_Internship_1.pdf',
    type: 'pdf',
  },
  {
    id: 6,
    title: 'Web Development Internship (Stage 2)',
    category: 'Internship',
    organization: 'Web Development',
    description: 'Certificate of internship completion in backend integration, database modeling, and interface development.',
    file: '/assets/Web_Internship_2.pdf',
    type: 'pdf',
  },
];

export const education = {
  degree: 'Bachelor of Engineering (B.E.) in Information Science & Engineering',
  institution: 'NIE Institute of Technology (NIE North)',
  location: 'Mysuru, Karnataka, India',
  period: '2019 – 2023',
  grade: 'CGPA: 7.8 / 10',
  highlights: [
    'Specialized in Database Management Systems, Data Structures & Algorithms, and Distributed Computing.',
    'Participated in National Level IEEE Project EXPO 2023.',
    'Led multiple software and data engineering initiatives during academic coursework.',
  ],
};
