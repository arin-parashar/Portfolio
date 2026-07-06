import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    icon: 'Code',
    skills: [
      { name: 'Python', description: 'Primary language for ML, data engineering, and backend development' },
      { name: 'JavaScript', description: 'Full-stack web development and interactive UI components' },
      { name: 'TypeScript', description: 'Type-safe frontend and backend application development' },
      { name: 'SQL', description: 'Complex queries, window functions, and database optimization' },
      { name: 'C++', description: 'Performance-critical systems and competitive programming' },
      { name: 'Java', description: 'Object-oriented design and enterprise application patterns' },
    ],
  },
  {
    name: 'AI & Machine Learning',
    icon: 'Brain',
    skills: [
      { name: 'PyTorch', description: 'Deep learning model development, training, and deployment' },
      { name: 'TensorFlow', description: 'Production ML pipelines and model serving infrastructure' },
      { name: 'Hugging Face Transformers', description: 'Fine-tuning and deploying large language models' },
      { name: 'Scikit-learn', description: 'Classical ML algorithms, feature engineering, and evaluation' },
      { name: 'OpenCV', description: 'Image processing, video analysis, and computer vision pipelines' },
      { name: 'YOLO', description: 'Real-time object detection and instance segmentation' },
      { name: 'LangChain', description: 'LLM application orchestration and retrieval-augmented generation' },
      { name: 'Edge AI', description: 'Model optimization and deployment on embedded hardware' },
    ],
  },
  {
    name: 'Data Engineering',
    icon: 'Database',
    skills: [
      { name: 'Pandas', description: 'Tabular data manipulation, cleaning, and exploratory analysis' },
      { name: 'NumPy', description: 'Numerical computing, linear algebra, and array operations' },
      { name: 'Apache Spark', description: 'Distributed data processing for large-scale datasets' },
      { name: 'ETL Pipelines', description: 'End-to-end data extraction, transformation, and loading workflows' },
      { name: 'PostgreSQL', description: 'Relational database design, indexing, and query optimization' },
      { name: 'MongoDB', description: 'Document-oriented data modeling and aggregation pipelines' },
      { name: 'AWS', description: 'Cloud infrastructure, data storage, and compute services' },
      { name: 'Azure', description: 'Enterprise cloud computing, analytics, and data solutions' },
    ],
  },
  {
    name: 'Web Development',
    icon: 'Globe',
    skills: [
      { name: 'React', description: 'Component-based UI architecture with hooks and state management' },
      { name: 'Next.js', description: 'Full-stack React framework with SSR and API routes' },
      { name: 'Tailwind CSS', description: 'Utility-first styling for rapid, responsive UI development' },
      { name: 'Node.js', description: 'Server-side JavaScript runtime for backend services' },
      { name: 'FastAPI', description: 'High-performance Python API framework with automatic docs' },
      { name: 'Streamlit', description: 'Rapid prototyping of data-driven web applications' },
    ],
  },
  {
    name: 'DevOps & Tools',
    icon: 'Terminal',
    skills: [
      { name: 'Git', description: 'Version control, branching strategies, and collaborative workflows' },
      { name: 'Docker', description: 'Containerization for reproducible development and deployment' },
      { name: 'Linux', description: 'System administration, shell scripting, and server management' },
      { name: 'CI/CD', description: 'Automated testing, building, and deployment pipelines' },
      { name: 'AWS', description: 'Cloud infrastructure provisioning and managed service integration' },
      { name: 'Jupyter', description: 'Interactive notebooks for research, experimentation, and visualization' },
    ],
  },
  {
    name: 'Core Concepts',
    icon: 'Lightbulb',
    skills: [
      { name: 'Data Structures & Algorithms', description: 'Problem solving, complexity analysis, and optimization' },
      { name: 'System Design', description: 'Scalable architecture patterns and distributed system principles' },
      { name: 'Object-Oriented Design', description: 'SOLID principles, design patterns, and clean architecture' },
      { name: 'Statistical Analysis', description: 'Hypothesis testing, regression, and probabilistic modeling' },
      { name: 'Research Methodology', description: 'Experiment design, ablation studies, and technical writing' },
      { name: 'Agile & Scrum', description: 'Sprint planning, iterative delivery, and team collaboration' },
    ],
  },
];
