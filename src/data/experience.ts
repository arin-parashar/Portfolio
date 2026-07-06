import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    company: 'EY',
    role: 'Software Development Intern',
    startDate: 'Jun 2025',
    endDate: 'Jul 2025',
    responsibilities: [
      'Designed and implemented scalable microservices architecture for internal tooling platforms, improving developer productivity across cross-functional teams.',
      'Built RESTful API endpoints with comprehensive input validation, error handling, and automated integration test suites achieving 90%+ code coverage.',
      'Collaborated with senior engineers on performance optimization initiatives, profiling and resolving bottlenecks that reduced average API response times by 35%.',
      'Participated in agile sprint ceremonies, contributing to backlog refinement, sprint planning, and retrospectives while delivering features on schedule.',
      'Authored technical documentation and runbooks for deployed services, streamlining onboarding for subsequent interns and new team members.',
    ],
    technologies: [
      'Python',
      'JavaScript',
      'REST APIs',
      'Microservices',
      'Agile',
    ],
    credentialUrl: '/files/EY.jpeg',
  },
  {
    company: 'KPMG India',
    role: 'Data Engineer Intern',
    startDate: 'Mar 2024',
    endDate: 'Sep 2024',
    responsibilities: [
      'Engineered ETL pipelines processing 500K+ records daily from heterogeneous data sources, transforming raw ingestion feeds into analytics-ready datasets.',
      'Developed automated data quality validation frameworks that detected and flagged schema drift, null-rate anomalies, and distribution shifts in upstream feeds.',
      'Optimized SQL query performance on large-scale data warehouses by redesigning indexing strategies and materialized view refresh schedules, reducing report generation time by 60%.',
      'Built interactive dashboards and reporting modules for stakeholder presentations, translating complex data patterns into actionable business insights.',
      'Implemented data lineage tracking and audit logging for regulatory compliance, ensuring full traceability of transformations across the pipeline.',
    ],
    technologies: [
      'Python',
      'SQL',
      'ETL Pipelines',
      'Data Warehousing',
      'Dashboard Development',
    ],
    credentialUrl: '/files/KPMG.jpeg',
  },
];
