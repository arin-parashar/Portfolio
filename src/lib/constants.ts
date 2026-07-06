/** Rotating role titles displayed in the hero section. */
export const roles: string[] = [
  'Software Engineer',
  'AI Engineer',
  'Machine Learning Engineer',
];

/** Rotating "currently building" phrases for the hero section. */
export const currentlyBuilding: string[] = [
  'Real-world AI Systems',
  'Edge AI Applications',
  'Computer Vision Solutions',
  'Intelligent Automation',
];

/** Timing configuration for hero text animations (in milliseconds). */
export const HERO_ROTATION_INTERVAL = 3000;
export const HERO_FADE_DURATION = 600;

/** Section identifiers used for scroll-based navigation. */
export const SECTION_IDS = {
  hero: 'hero',
  about: 'about',
  projects: 'projects',
  experience: 'experience',
  skills: 'skills',
  contact: 'contact',
} as const;

/** Breakpoints mirroring the design system (in pixels). */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
