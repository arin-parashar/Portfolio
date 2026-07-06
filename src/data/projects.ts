import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'wildguard',
    title: 'WildGuard',
    tagline:
      'Real-Time Human-Wildlife Conflict Monitoring and Automated Response System',
    description:
      'End-to-end edge AI pipeline detecting wildlife near human settlements in real time, triggering automated deterrents and instant alerts to reduce human-wildlife conflict casualties.',
    featured: true,
    category: 'Computer Vision',
    technologies: [
      'Python',
      'PyTorch',
      'MegaDetector',
      'SpeciesNet',
      'Jetson Xavier NX',
      'ESP32',
      'OpenCV',
      'Edge AI',
      'Computer Vision',
    ],
    overview:
      'WildGuard is a comprehensive real-time monitoring system designed to mitigate human-wildlife conflict in rural and peri-urban areas. The system ingests live camera feeds, processes them through a multi-stage AI pipeline running on edge hardware, and autonomously activates deterrent mechanisms while simultaneously alerting local authorities and residents. Built for deployment in resource-constrained environments, WildGuard operates with sub-second latency and maintains high accuracy even under challenging lighting and weather conditions.',
    problemStatement:
      'Human-wildlife conflict is a growing crisis in regions where expanding settlements encroach on natural habitats. Manual monitoring by forest rangers is slow, inconsistent, and cannot scale across vast perimeters. Traditional motion-sensor systems generate excessive false positives from livestock, vehicles, and environmental noise, leading to alert fatigue and delayed responses when genuine threats arise. The lack of species-level identification further hampers targeted intervention strategies.',
    solution:
      'WildGuard implements a multi-stage AI pipeline that combines MegaDetector for robust animal detection with SpeciesNet for fine-grained species classification. A co-occurrence logic engine cross-references detected species against known conflict patterns and proximity to human settlements to compute real-time threat scores. When a threshold is breached, the system dispatches commands to ESP32 microcontrollers that activate buzzer and LED deterrents calibrated to the identified species, while simultaneously pushing alert notifications to registered stakeholders via a lightweight messaging service.',
    architecture: [
      'Camera Feed Ingestion',
      'MegaDetector — Animal Detection',
      'SpeciesNet — Species Classification',
      'Co-occurrence Logic Engine',
      'Threat Assessment Module',
      'ESP32 Microcontroller',
      'Buzzer + LED Deterrents',
      'Alert Notification System',
    ],
    challenges: [
      'Deploying large detection models on edge hardware with limited GPU memory and thermal constraints required aggressive model optimization without sacrificing accuracy on critical species.',
      'Maintaining high recall for nocturnal species under infrared illumination, where fur patterns and body contours appear significantly different from daytime RGB imagery.',
      'Minimizing false positive deterrent activations caused by domestic animals, which share visual features with conflict-prone wildlife species, to prevent desensitization of nearby communities.',
      'Ensuring reliable communication between the Jetson inference node and distributed ESP32 actuators across unstable rural wireless networks with intermittent connectivity.',
      'Handling rapid scene changes from weather events (rain, fog, dust) that degrade image quality and introduce transient artifacts mimicking animal motion signatures.',
    ],
    optimizations: [
      'Converted MegaDetector to TensorRT FP16 precision, reducing inference time by 3.2× while retaining 99.1% of original mAP on the validation set.',
      'Implemented adaptive frame batching that dynamically adjusts batch size based on GPU utilization and thermal readings, sustaining peak throughput without triggering thermal throttling.',
      'Designed a lightweight species embedding cache that bypasses full SpeciesNet inference for previously identified individuals within a configurable temporal window, cutting redundant computation by 40%.',
      'Accelerated pre-processing with GPU-based OpenCV operations (resize, normalize, color-space conversion), eliminating CPU-GPU data transfer bottlenecks in the inference pipeline.',
      'Deployed a priority-weighted message queue between threat assessment and actuator control, ensuring high-severity alerts are dispatched within 50ms even under burst detection scenarios.',
    ],
    performanceMetrics: [
      { label: 'Precision', value: '94.8%' },
      { label: 'Recall', value: '92.5%' },
      { label: 'Latency', value: '200ms' },
    ],
    githubUrl: 'https://github.com/arin-parashar/WildGuard',
    demoUrl: '#',
    researchPaperUrl: '#',
    imageUrl: '#',
  },
  {
    slug: 'notestop',
    title: 'NoteStop',
    tagline: 'Educational NLP Assistant powered by Fine-tuned Language Models',
    description:
      'An intelligent educational assistant that leverages fine-tuned language models to generate high-quality study materials, answer subject-specific questions, and produce concise cheatsheets from lecture content.',
    featured: true,
    category: 'Machine Learning',
    technologies: [
      'Python',
      'PyTorch',
      'TinyLlama',
      'Transformers',
      'NLP',
      'Fine-tuning',
    ],
    overview:
      'NoteStop is an educational NLP assistant built around a fine-tuned TinyLlama model trained on a curated 1.6-million-token dataset of academic content spanning computer science, mathematics, and engineering disciplines. The system supports three core task types — question answering, text summarization, and cheatsheet generation — each optimized through task-specific prompt engineering and instruction tuning. Comprehensive benchmarking against T5, GPT-2, BERT, Mistral, and DeepSeek establishes NoteStop\'s competitive performance profile across accuracy, fluency, and factual grounding metrics.',
    problemStatement:
      'Students often struggle to efficiently distill large volumes of lecture notes and textbook content into actionable study materials. Existing general-purpose language models produce verbose or inaccurate responses when applied to domain-specific academic content without fine-tuning. Manual summarization and cheatsheet creation are time-intensive, and generic QA systems lack the pedagogical awareness needed to generate educationally valuable answers.',
    solution:
      'NoteStop fine-tunes TinyLlama on a carefully curated instruction dataset combining question-answer pairs, summarization examples, and structured cheatsheet templates drawn from verified academic sources. Task routing logic directs user queries to the appropriate generation pipeline, and a post-processing layer enforces format constraints (bullet points for cheatsheets, concise paragraphs for summaries, direct answers for QA). The system was rigorously benchmarked against five competing models across all three task types to validate its effectiveness.',
    challenges: [
      'Curating a high-quality 1.6M token training dataset that balances breadth across subjects with depth in critical topic areas, while filtering out noisy or contradictory source material.',
      'Preventing catastrophic forgetting of general language understanding during domain-specific fine-tuning, which required careful learning rate scheduling and data mixing strategies.',
      'Designing evaluation metrics that capture educational value beyond surface-level text similarity, incorporating factual correctness, pedagogical clarity, and structural coherence.',
      'Optimizing inference latency for interactive use cases where students expect near-instant responses, particularly for on-the-fly QA during study sessions.',
      'Establishing fair and reproducible benchmarking conditions across six models with different architectures, tokenizers, and context window sizes.',
    ],
    optimizations: [
      'Applied LoRA (Low-Rank Adaptation) to reduce trainable parameters by 94% while maintaining 97.3% of full fine-tuning performance on held-out evaluation sets.',
      'Implemented dynamic context windowing that intelligently truncates and prioritizes input content based on information density scoring, maximizing relevant context within token limits.',
      'Designed a response caching layer keyed on semantic similarity of queries, reducing redundant inference calls by 35% during repeated study sessions on the same material.',
      'Used mixed-precision training (BF16) with gradient checkpointing to fit the full fine-tuning pipeline within a single consumer GPU memory budget.',
      'Built an automated evaluation harness that runs all six benchmark models in parallel with standardized prompts, enabling reproducible comparison across model updates.',
    ],
    performanceMetrics: [
      { label: 'Training Tokens', value: '1.6M' },
      { label: 'Models Benchmarked', value: '6' },
      { label: 'Task Types', value: '3' },
    ],
    githubUrl: 'https://github.com/arin-parashar/NoteStop',
    demoUrl: '#',
    imageUrl: '#',
  },
  {
    slug: 'agroanalytics',
    title: 'AgroAnalytics',
    tagline: 'Agricultural Intelligence Platform for Crop Management',
    description:
      'A unified agricultural intelligence platform integrating crop recommendation engines, plant disease detection, and weather forecasting to empower data-driven farming decisions.',
    featured: true,
    category: 'Machine Learning',
    technologies: [
      'Python',
      'YOLOv8',
      'Random Forest',
      'Naive Bayes',
      'XGBoost',
      'SARIMAX',
      'Streamlit',
    ],
    overview:
      'AgroAnalytics is an end-to-end agricultural intelligence platform that consolidates three critical decision-support modules into a single Streamlit-powered interface. The Crop Recommendation module uses ensemble methods (Random Forest and Naive Bayes) trained on soil composition, climate, and historical yield data to suggest optimal crops for a given plot. The Disease Detection module employs a fine-tuned YOLOv8 model to identify plant diseases from leaf imagery with bounding-box localization and severity grading. The Weather Forecasting module leverages SARIMAX time-series models augmented with XGBoost residual correction to deliver hyperlocal precipitation and temperature predictions. Together, these modules provide farmers with actionable insights across the full crop lifecycle.',
    problemStatement:
      'Smallholder farmers in developing regions lack access to integrated decision-support tools, relying instead on fragmented advice, outdated almanacs, and visual inspection for crop selection, disease identification, and weather planning. This leads to suboptimal crop choices, delayed disease treatment, and poor harvest timing — collectively reducing yields by an estimated 20-30% and increasing vulnerability to climate variability.',
    solution:
      'AgroAnalytics unifies three ML-powered modules behind a single intuitive Streamlit dashboard. Farmers input soil test results and GPS coordinates to receive crop recommendations ranked by predicted yield and market value. They upload leaf photographs for instant disease diagnosis with treatment suggestions. And they access 14-day hyperlocal weather forecasts calibrated to their specific microclimate. The platform is designed for low-bandwidth environments with offline-capable inference and minimal compute requirements.',
    challenges: [
      'Sourcing and harmonizing heterogeneous agricultural datasets across different regions, soil taxonomies, and crop classification standards into a unified training corpus.',
      'Achieving reliable disease detection accuracy across diverse lighting conditions, leaf orientations, and disease progression stages in field-captured photographs.',
      'Building weather forecasting models that generalize across microclimates without overfitting to the limited historical data available for many rural weather stations.',
      'Designing an interface accessible to users with varying levels of digital literacy, including support for vernacular language prompts and visual-first interaction patterns.',
      'Balancing model complexity against deployment constraints, ensuring all three modules run smoothly on commodity hardware accessible to agricultural extension centers.',
    ],
    optimizations: [
      'Trained YOLOv8-nano variant for disease detection, achieving 91.2% mAP@0.5 while maintaining sub-100ms inference on CPU-only deployment targets.',
      'Implemented feature importance pruning on Random Forest crop recommendation models, reducing feature dimensionality by 45% with negligible accuracy loss.',
      'Applied XGBoost residual learning on top of SARIMAX base forecasts, improving weather prediction RMSE by 18% compared to standalone statistical models.',
      'Designed progressive image upload with client-side compression, reducing bandwidth requirements by 70% for disease detection photo submissions.',
      'Built an adaptive caching layer for weather forecasts that serves pre-computed predictions for popular regions while computing on-demand forecasts for less-queried areas.',
    ],
    performanceMetrics: [
      { label: 'Disease Detection mAP', value: '91.2%' },
      { label: 'Crop Recommendation Accuracy', value: '95.7%' },
      { label: 'Forecast Horizon', value: '14 Days' },
    ],
    githubUrl: '#',
    demoUrl: '/AgroAnalytics.pdf',
    imageUrl: '#',
  },
];

/** Retrieve a single project by its URL slug. */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Return only the projects marked as featured. */
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

/** Extract a deduplicated, sorted list of all project categories. */
export function getProjectCategories(): string[] {
  const categories = new Set(projects.map((project) => project.category));
  return Array.from(categories).sort();
}
