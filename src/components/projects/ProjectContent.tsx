'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/features/ScrollReveal';
import { getProjectBySlug } from '@/data/projects';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Icons } from '@/components/ui/icons';

interface ProjectContentProps {
  slug: string;
}

export function ProjectContent({ slug }: ProjectContentProps) {
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center pixel-card p-12">
          <h1 className="font-[family-name:var(--font-press-start-2p)] text-sm text-destructive mb-4">
            404 — FILE NOT FOUND
          </h1>
          <p className="text-muted-foreground mb-6">This project doesn&apos;t exist.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary font-[family-name:var(--font-press-start-2p)] text-[8px] border-2 border-primary px-4 py-2 hover:bg-primary/10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> RETURN HOME
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back nav */}
        <ScrollReveal>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 font-[family-name:var(--font-press-start-2p)] text-[7px]"
          >
            <ArrowLeft className="w-4 h-4" /> BACK TO PROJECTS
          </Link>
        </ScrollReveal>

        {/* Header */}
        <ScrollReveal delay={0.1}>
          <div className="pixel-card p-8 sm:p-10 mb-10">
            <span className="font-[family-name:var(--font-press-start-2p)] text-[7px] text-secondary px-2 py-1 border border-secondary/30 bg-secondary/10">
              {project.category.toUpperCase()}
            </span>
            <h1 className="font-[family-name:var(--font-press-start-2p)] text-sm sm:text-base md:text-lg text-primary mt-5 leading-relaxed"
              style={{ textShadow: '0 0 10px rgba(59,130,246,0.4)' }}
            >
              {project.title.toUpperCase()}
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">{project.tagline}</p>

            {/* Links */}
            <div className="flex gap-3 mt-6 flex-wrap">
              {project.githubUrl && project.githubUrl !== '#' && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border-2 border-primary/50 text-primary font-[family-name:var(--font-press-start-2p)] text-[7px] hover:bg-primary/10 transition-colors">
                  <Icons.github className="w-4 h-4" /> SOURCE CODE
                </a>
              )}
              {project.demoUrl && project.demoUrl !== '#' && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border-2 border-secondary/50 text-secondary font-[family-name:var(--font-press-start-2p)] text-[7px] hover:bg-secondary/10 transition-colors">
                  <ExternalLink className="w-4 h-4" /> {project.demoUrl.toLowerCase().endsWith('.pdf') ? 'DOCUMENTATION' : 'LIVE DEMO'}
                </a>
              )}
              {project.researchPaperUrl && project.researchPaperUrl !== '#' && (
                <a href={project.researchPaperUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border-2 border-accent/50 text-accent font-[family-name:var(--font-press-start-2p)] text-[7px] hover:bg-accent/10 transition-colors">
                  <ExternalLink className="w-4 h-4" /> RESEARCH PAPER
                </a>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Overview */}
        <ScrollReveal delay={0.15}>
          <div className="pixel-card p-8 mb-8">
            <h2 className="font-[family-name:var(--font-press-start-2p)] text-[9px] text-primary mb-4" style={{ textShadow: '0 0 6px rgba(59,130,246,0.3)' }}>
              OVERVIEW
            </h2>
            <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
          </div>
        </ScrollReveal>

        {/* Problem */}
        <ScrollReveal delay={0.2}>
          <div className="pixel-card p-8 mb-8" style={{ borderColor: 'rgba(239,68,68,0.3)' }}>
            <h2 className="font-[family-name:var(--font-press-start-2p)] text-[9px] text-destructive mb-4">
              ⚠ PROBLEM STATEMENT
            </h2>
            <p className="text-muted-foreground leading-relaxed">{project.problemStatement}</p>
          </div>
        </ScrollReveal>

        {/* Solution */}
        <ScrollReveal delay={0.25}>
          <div className="pixel-card p-8 mb-8" style={{ borderColor: 'rgba(16,185,129,0.3)' }}>
            <h2 className="font-[family-name:var(--font-press-start-2p)] text-[9px] text-secondary mb-4" style={{ textShadow: '0 0 6px rgba(16,185,129,0.3)' }}>
              ✓ SOLUTION DEPLOYED
            </h2>
            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
          </div>
        </ScrollReveal>

        {/* Architecture */}
        {project.architecture && project.architecture.length > 0 && (
          <ScrollReveal delay={0.3}>
            <div className="pixel-card p-8 mb-8">
              <h2 className="font-[family-name:var(--font-press-start-2p)] text-[9px] text-accent mb-6" style={{ textShadow: '0 0 6px rgba(139,92,246,0.3)' }}>
                SYSTEM ARCHITECTURE
              </h2>
              <div className="space-y-2">
                {project.architecture.map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-5 h-5 border border-accent/50 bg-accent/10 flex items-center justify-center font-[family-name:var(--font-press-start-2p)] text-[5px] text-accent">
                        {i + 1}
                      </div>
                      {i < project.architecture!.length - 1 && (
                        <div className="w-[1px] h-4 bg-accent/30" />
                      )}
                    </div>
                    <span className="text-foreground/80 text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Performance Metrics */}
        {project.performanceMetrics && project.performanceMetrics.length > 0 && (
          <ScrollReveal delay={0.35}>
            <div className="pixel-card p-8 mb-8" style={{ borderColor: 'rgba(139,92,246,0.3)' }}>
              <h2 className="font-[family-name:var(--font-press-start-2p)] text-[9px] text-accent mb-6" style={{ textShadow: '0 0 6px rgba(139,92,246,0.3)' }}>
                PERFORMANCE METRICS
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.performanceMetrics.map((metric, i) => (
                  <div key={i} className="border-2 border-accent/20 bg-background p-4 text-center">
                    <div className="font-[family-name:var(--font-press-start-2p)] text-sm text-accent mb-1" style={{ textShadow: '0 0 8px rgba(139,92,246,0.4)' }}>
                      {metric.value}
                    </div>
                    <div className="font-[family-name:var(--font-press-start-2p)] text-[5px] text-muted-foreground uppercase">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Technologies */}
        <ScrollReveal delay={0.4}>
          <div className="pixel-card p-8 mb-8">
            <h2 className="font-[family-name:var(--font-press-start-2p)] text-[9px] text-primary mb-4" style={{ textShadow: '0 0 6px rgba(59,130,246,0.3)' }}>
              TECH STACK
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1.5 border border-primary/30 bg-primary/5 text-primary text-sm font-[family-name:var(--font-geist-mono)]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Challenges & Optimizations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <ScrollReveal delay={0.45}>
            <div className="pixel-card p-8 h-full" style={{ borderColor: 'rgba(239,68,68,0.3)' }}>
              <h2 className="font-[family-name:var(--font-press-start-2p)] text-[8px] text-destructive mb-4">
                CHALLENGES
              </h2>
              <div className="space-y-3">
                {project.challenges.map((c, i) => (
                  <div key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="text-destructive shrink-0 font-[family-name:var(--font-press-start-2p)] text-[6px] mt-0.5">{'>'}</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="pixel-card p-8 h-full" style={{ borderColor: 'rgba(16,185,129,0.3)' }}>
              <h2 className="font-[family-name:var(--font-press-start-2p)] text-[8px] text-secondary mb-4">
                OPTIMIZATIONS
              </h2>
              <div className="space-y-3">
                {project.optimizations.map((o, i) => (
                  <div key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="text-secondary shrink-0 font-[family-name:var(--font-press-start-2p)] text-[6px] mt-0.5">{'+'}</span>
                    <span>{o}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Back link */}
        <ScrollReveal delay={0.55}>
          <div className="text-center mt-12">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-primary font-[family-name:var(--font-press-start-2p)] text-[8px] border-2 border-primary px-5 py-3 hover:bg-primary/10 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.1)]"
            >
              <ArrowLeft className="w-4 h-4" /> BACK TO PROJECTS
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
