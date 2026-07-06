'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/features/ScrollReveal';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { experiences } from '@/data/experience';
import { FileText } from 'lucide-react';
import { PixelModal } from '@/components/ui/PixelModal';
import { Experience as ExperienceType } from '@/types';

export function Experience() {
  const [selectedItem, setSelectedItem] = useState<ExperienceType | null>(null);

  return (
    <section id="experience" className="py-24 px-6 relative">
      <ScrollReveal>
        <SectionHeading
          title="EXPERIENCE"
          subtitle="Professional Timeline (Click for details & certificates)"
          color="cyan"
        />
      </ScrollReveal>

      <div className="max-w-4xl mx-auto space-y-8 mt-12">
        {experiences.map((exp, idx) => (
          <ScrollReveal key={idx} delay={idx * 0.15}>
            <div 
              onClick={() => setSelectedItem(exp)}
              className="pixel-card p-6 sm:p-8 relative overflow-hidden cursor-pointer group hover:-translate-y-1 transition-all"
            >
              {/* Log badge */}
              <div className="absolute top-4 right-4">
                <span
                  className="font-[family-name:var(--font-press-start-2p)] text-[6px] text-primary px-2 py-1 border border-primary/30 bg-primary/10 group-hover:bg-primary/20 transition-colors"
                >
                  // LOGGED
                </span>
              </div>

              {/* Experience header */}
              <div className="mb-6">
                <h3 className="font-[family-name:var(--font-press-start-2p)] text-xs sm:text-sm text-primary mb-2 group-hover:text-primary transition-colors"
                  style={{ textShadow: '0 0 6px rgba(59,130,246,0.3)' }}
                >
                  {exp.company}
                </h3>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-secondary font-[family-name:var(--font-press-start-2p)] text-[7px] group-hover:text-secondary transition-colors">
                    ▸ {exp.role.toUpperCase()}
                  </span>
                  <span className="text-muted-foreground text-xs font-[family-name:var(--font-geist-mono)]">
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-3 mt-4">
                  <span className="text-[10px] text-primary font-[family-name:var(--font-geist-mono)] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FileText className="w-3 h-3" /> CLICK TO VIEW DETAILS
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3 mb-6">
                {exp.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <span className="text-accent shrink-0 mt-0.5 font-[family-name:var(--font-press-start-2p)] text-[6px]">
                      {'>'} 
                    </span>
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              {exp.technologies && (
                <div>
                  <span className="font-[family-name:var(--font-press-start-2p)] text-[6px] text-muted-foreground tracking-wider">
                    TECHNOLOGIES
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 border border-border bg-background text-muted-foreground text-xs font-[family-name:var(--font-geist-mono)] hover:border-primary/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>

      <PixelModal 
        isOpen={!!selectedItem} 
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.company || 'EXPERIENCE'}
      >
        {selectedItem && (
          <div className="space-y-6">
            <div className="border-b border-border/50 pb-4">
              <h3 className="text-xl font-bold text-foreground mb-1">{selectedItem.company}</h3>
              <p className="text-primary font-[family-name:var(--font-press-start-2p)] text-[8px] mt-2">{selectedItem.role}</p>
              <p className="text-muted-foreground text-xs font-[family-name:var(--font-geist-mono)] mt-2">
                {selectedItem.startDate} — {selectedItem.endDate}
              </p>
            </div>

            {/* Credential Viewer */}
            {selectedItem.credentialUrl && selectedItem.credentialUrl !== '#' && (
              <div className="w-full bg-black/20 border border-primary/20 rounded-sm overflow-hidden flex flex-col mt-4">
                <div className="bg-primary/10 p-2 border-b border-primary/20 flex justify-between items-center">
                  <span className="font-[family-name:var(--font-press-start-2p)] text-[6px] text-primary">CREDENTIAL VIEWER</span>
                  <a 
                    href={selectedItem.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[10px] text-primary hover:underline font-[family-name:var(--font-geist-mono)]"
                  >
                    Open in new tab
                  </a>
                </div>
                <div className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center bg-background">
                  {selectedItem.credentialUrl.toLowerCase().endsWith('.pdf') ? (
                    <iframe 
                      src={`${selectedItem.credentialUrl}#toolbar=0`} 
                      className="w-full h-full border-none"
                      title={selectedItem.role}
                    />
                  ) : (
                    <img 
                      src={selectedItem.credentialUrl} 
                      alt={selectedItem.role}
                      className="max-w-full max-h-full object-contain p-2"
                    />
                  )}
                </div>
              </div>
            )}

            <div className="grid gap-6 pt-2">
              <div>
                <h4 className="font-[family-name:var(--font-press-start-2p)] text-[7px] text-muted-foreground mb-3">KEY RESPONSIBILITIES</h4>
                <div className="space-y-3">
                  {selectedItem.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-3 text-foreground/80 text-sm leading-relaxed">
                      <span className="text-accent shrink-0 mt-0.5 font-[family-name:var(--font-press-start-2p)] text-[6px]">
                        {'>'} 
                      </span>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {selectedItem.technologies && (
                <div>
                  <h4 className="font-[family-name:var(--font-press-start-2p)] text-[7px] text-muted-foreground mb-3">TECHNOLOGIES USED</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 text-xs text-primary/90 border border-primary/20 bg-primary/5 font-[family-name:var(--font-geist-mono)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </PixelModal>
    </section>
  );
}
