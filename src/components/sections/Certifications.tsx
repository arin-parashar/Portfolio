'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/features/ScrollReveal';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { certifications } from '@/data/navigation';
import { Award, FileText } from 'lucide-react';
import { PixelModal } from '@/components/ui/PixelModal';
import { Certification } from '@/types';

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const isPdf = (url?: string) => url?.toLowerCase().endsWith('.pdf');
  const isImage = (url?: string) => url?.match(/\.(jpeg|jpg|gif|png)$/i) != null;

  return (
    <section id="certifications" className="py-24 px-6 relative">
      <ScrollReveal>
        <SectionHeading
          title="CERTIFICATIONS"
          subtitle="Professional qualifications (Click to view details)"
          color="cyan"
        />
      </ScrollReveal>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {certifications.map((cert, idx) => (
          <ScrollReveal key={idx} delay={idx * 0.1}>
            <div 
              onClick={() => setSelectedCert(cert)}
              className="pixel-card p-6 h-full group cursor-pointer hover:-translate-y-1 transition-all" 
              style={{ borderColor: 'rgba(59,130,246,0.2)' }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="shrink-0 w-10 h-10 border-2 border-primary/50 flex items-center justify-center bg-primary/5 group-hover:bg-primary/20 transition-colors"
                >
                  <Award className="text-primary w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>

                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-press-start-2p)] text-[7px] sm:text-[8px] text-primary leading-relaxed mb-2 group-hover:text-primary transition-colors">
                    {cert.title.toUpperCase()}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 group-hover:text-foreground transition-colors">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-3 mt-4">
                    <span className="text-[10px] text-primary font-[family-name:var(--font-geist-mono)] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <FileText className="w-3 h-3" /> CLICK TO VIEW
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <PixelModal 
        isOpen={!!selectedCert} 
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.title || 'CERTIFICATION'}
      >
        {selectedCert && (
          <div className="space-y-6">
            <div className="border-b border-border/50 pb-4">
              <h3 className="text-xl font-bold text-foreground mb-1">{selectedCert.title}</h3>
              <p className="text-muted-foreground">{selectedCert.issuer}</p>
              
              <div className="flex gap-3 mt-3">
                {selectedCert.grade && (
                  <span className="font-[family-name:var(--font-press-start-2p)] text-[6px] text-secondary px-2 py-1 border border-secondary/30 bg-secondary/10">
                    {selectedCert.grade.toUpperCase()}
                  </span>
                )}
                {selectedCert.date && (
                  <span className="text-xs text-muted-foreground/60 font-[family-name:var(--font-geist-mono)]">
                    {selectedCert.date}
                  </span>
                )}
              </div>
            </div>

            {/* Credential Viewer */}
            {selectedCert.credentialUrl && selectedCert.credentialUrl !== '#' ? (
              <div className="w-full bg-black/20 border border-primary/20 rounded-sm overflow-hidden flex flex-col">
                <div className="bg-primary/10 p-2 border-b border-primary/20 flex justify-between items-center">
                  <span className="font-[family-name:var(--font-press-start-2p)] text-[6px] text-primary">CREDENTIAL VIEWER</span>
                  <a 
                    href={selectedCert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[10px] text-primary hover:underline font-[family-name:var(--font-geist-mono)]"
                  >
                    Open in new tab
                  </a>
                </div>
                <div className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center bg-background">
                  {isPdf(selectedCert.credentialUrl) ? (
                    <iframe 
                      src={`${selectedCert.credentialUrl}#toolbar=0`} 
                      className="w-full h-full border-none"
                      title={selectedCert.title}
                    />
                  ) : isImage(selectedCert.credentialUrl) ? (
                    <img 
                      src={selectedCert.credentialUrl} 
                      alt={selectedCert.title}
                      className="max-w-full max-h-full object-contain p-2"
                    />
                  ) : (
                    <iframe 
                      src={selectedCert.credentialUrl} 
                      className="w-full h-full border-none bg-white"
                      title={selectedCert.title}
                    />
                  )}
                </div>
              </div>
            ) : (
              <div className="w-full h-32 border-2 border-dashed border-muted flex flex-col items-center justify-center text-muted-foreground/50 bg-background/50">
                <FileText className="w-8 h-8 mb-2 opacity-50" />
                <p className="text-sm font-[family-name:var(--font-geist-mono)]">No digital credential linked yet.</p>
                <p className="text-[10px] mt-1">Add file to public/ folder and update URL in navigation.ts</p>
              </div>
            )}

            {/* Description & Skills */}
            <div className="grid gap-6 md:grid-cols-[2fr,1fr] pt-4">
              {selectedCert.description && (
                <div>
                  <h4 className="font-[family-name:var(--font-press-start-2p)] text-[7px] text-muted-foreground mb-3">OVERVIEW</h4>
                  <div className="space-y-2">
                    {selectedCert.description.map((desc, i) => (
                      <p key={i} className="text-foreground/80 text-sm leading-relaxed">
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              )}
              
              {selectedCert.skills && (
                <div>
                  <h4 className="font-[family-name:var(--font-press-start-2p)] text-[7px] text-muted-foreground mb-3">SKILLS ACQUIRED</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 text-[10px] text-primary/80 border border-primary/20 bg-primary/5 font-[family-name:var(--font-geist-mono)]">
                        {skill}
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
