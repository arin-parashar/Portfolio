import { NavItem, SocialLink, Certification } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/arin-parashar', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/arin-parashar-209193270/', icon: 'Linkedin' },
  { name: 'Email', url: 'mailto:arinparashar3@gmail.com', icon: 'Mail' },
];

export const contactInfo = {
  email: 'arinparashar3@gmail.com',
  phone: '+91 6261610558',
  location: 'F9 New Panchsheel Nagar, Raipur',
};

export const certifications: Certification[] = [
  {
    title: 'Data Analytics using Deep Learning',
    issuer: 'National University of Singapore (NUS)',
    credentialUrl: '/files/NUS.pdf',
    description: [
      'Participated in an intensive international academic program conducted by the National University of Singapore’s School of Computing. The program focused on applying deep learning techniques to real-world data analytics problems, covering modern AI methodologies, model development, and practical implementation. As part of the program, I collaborated on an AI-powered agricultural decision support platform, gaining valuable experience in machine learning, teamwork, and building end-to-end AI solutions.',
    ],
    skills: [
      'Deep Learning',
      'Machine Learning',
      'Data Analytics',
      'AI Solution Development',
      'Team Collaboration',
    ],
  },
  {
    title: 'Big Data Analytics using Deep Learning',
    issuer: 'AWS Training & Certification',
    credentialUrl: '/files/NUS AWS.pdf',
    description: [
      'Successfully completed the AWS Training and Certification program as part of the Corporate Gurukul Global Academic Internship Programme. The program complemented the NUS curriculum by introducing cloud-enabled AI workflows, data processing fundamentals, and enterprise-oriented approaches to deploying analytics solutions at scale.',
    ],
    skills: [
      'AWS Cloud Fundamentals',
      'Big Data Analytics',
      'Cloud-Based AI Workflows',
      'Data Processing',
    ],
  },
  {
    title: 'Getting Started with Deep Learning',
    issuer: 'NVIDIA',
    credentialUrl: '/files/My Learning _ NVIDIA.pdf',
    description: [
      'Completed NVIDIA’s official Deep Learning course, building a strong foundation in neural networks, GPU-accelerated computing, and modern deep learning workflows. The course reinforced concepts that I later applied in projects involving computer vision, generative AI, and edge AI deployment.',
    ],
    skills: [
      'Deep Learning',
      'Neural Networks',
      'GPU Computing',
      'PyTorch',
      'AI Fundamentals',
    ],
  },
  {
    title: 'Deep Learning for Healthcare Image Analysis (DLHIA)',
    issuer: 'SRM Institute of Science and Technology × NVIDIA',
    credentialUrl: '/files/dlhia.pdf',
    description: [
      'Participated in a three-day hands-on workshop on Deep Learning for Healthcare Image Analysis (DLHIA) organized by SRM Institute of Science and Technology in collaboration with the NVIDIA Deep Learning Institute. The workshop introduced practical deep learning techniques for medical image analysis and provided exposure to AI applications in healthcare using industry-standard tools and methodologies.',
    ],
    skills: [
      'Medical Image Analysis',
      'Deep Learning',
      'Computer Vision',
      'Healthcare AI',
      'NVIDIA DLI',
    ],
  },
];

export const leadership = [
  {
    role: 'Organizing Committee Member',
    organization: 'Civic Youth Conclave 2024',
    credentialUrl: '/files/cyc.pdf',
    description:
      'Served as a member of the Organizing Committee for the 4th Chapter of Civic Youth Conclave, held at Anjaneya University, Raipur, in July 2024. Contributed to the successful execution of the event by assisting with sponsorship outreach, coordinating transportation and logistics, and managing on-ground operations for delegates and participants. The experience strengthened my leadership, communication, and event management skills while working within a collaborative team environment.',
    skills: [
      'Sponsorship Coordination',
      'Event Operations',
      'Logistics & Transportation',
      'Team Collaboration',
      'Leadership & Communication',
    ],
  },
];

export const siteConfig = {
  name: 'Arin Parashar',
  title: 'Arin Parashar — Software Engineer & AI Engineer',
  description:
    'Portfolio of Arin Parashar — Software Engineer and AI Engineer specializing in computer vision, edge AI, machine learning, and full-stack development.',
  url: 'https://arinparashar.dev',
  ogImage: '/og-image.png',
};
