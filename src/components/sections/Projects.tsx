'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/features/ScrollReveal';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { getFeaturedProjects } from '@/data/projects';

const projectColors = ['#3B82F6', '#10B981', '#8B5CF6'];

export function Projects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="projects" className="py-24 px-6 relative">
      <ScrollReveal>
        <SectionHeading
          title="PROJECTS"
          subtitle="Featured Work"
          color="blue"
        />
      </ScrollReveal>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {featuredProjects.map((project, idx) => {
          const accentColor = projectColors[idx % projectColors.length];
          return (
            <ScrollReveal key={project.slug} delay={idx * 0.1}>
              <Link href={`/projects/${project.slug}`} className="group block h-full">
                <div
                  className="pixel-card flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
                  style={{ borderColor: `${accentColor}30` }}
                >
                  {/* Card top — decorative */}
                  <div className="h-3 w-full" style={{ backgroundColor: `${accentColor}20` }}>
                    <div className="h-full w-8 ml-4" style={{ backgroundColor: accentColor, opacity: 0.3 }} />
                  </div>

                  {/* Screen area */}
                  <div className="h-40 bg-background relative overflow-hidden flex items-center justify-center border-y-2" style={{ borderColor: `${accentColor}20` }}>
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    {/* Scanlines */}
                    <div className="absolute inset-0" style={{
                      background: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(15,23,42,0.1) 1px, rgba(15,23,42,0.1) 2px)',
                    }} />
                    {/* Category label */}
                    <span
                      className="relative z-10 font-[family-name:var(--font-press-start-2p)] text-[8px] tracking-wider opacity-60 group-hover:opacity-100 transition-opacity"
                      style={{ color: accentColor, textShadow: `0 0 10px ${accentColor}` }}
                    >
                      {project.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <span
                        className="font-[family-name:var(--font-press-start-2p)] text-[7px] px-2 py-1 border"
                        style={{ color: accentColor, borderColor: `${accentColor}40`, backgroundColor: `${accentColor}10` }}
                      >
                        {project.category.toUpperCase()}
                      </span>
                      <span className="font-[family-name:var(--font-press-start-2p)] text-[6px] text-muted-foreground group-hover:text-primary transition-colors">
                        {'>>'}
                      </span>
                    </div>

                    <h3
                      className="font-[family-name:var(--font-press-start-2p)] text-[10px] sm:text-xs text-foreground mb-3 leading-relaxed group-hover:pixel-glow-primary transition-all"
                    >
                      {project.title.toUpperCase()}
                    </h3>

                    <p className="text-muted-foreground text-sm line-clamp-3 mb-5 flex-1">
                      {project.tagline}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="text-[10px] text-muted-foreground px-1.5 py-0.5 border border-border bg-background font-[family-name:var(--font-geist-mono)]">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[10px] text-muted-foreground px-1.5 py-0.5 border border-border bg-background">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
