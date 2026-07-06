export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  featured: boolean;
  category: string;
  technologies: string[];
  overview: string;
  problemStatement: string;
  solution: string;
  architecture?: string[];
  challenges: string[];
  optimizations: string[];
  performanceMetrics?: { label: string; value: string }[];
  githubUrl?: string;
  demoUrl?: string;
  researchPaperUrl?: string;
  imageUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  technologies?: string[];
  credentialUrl?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  description?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  grade?: string;
  date?: string;
  credentialUrl?: string;
  description?: string[];
  skills?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
