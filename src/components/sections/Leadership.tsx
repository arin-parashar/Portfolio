'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/features/ScrollReveal';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { leadership } from '@/data/navigation';
import { Users, FileText } from 'lucide-react';
import { PixelModal } from '@/components/ui/PixelModal';

export function Leadership() {
  const [selectedItem, setSelectedItem] = useState<typeof leadership[0] | null>(null);

  return (
    <section id="leadership" className="py-24 px-6 relative">
      <ScrollReveal>
        <SectionHeading
          title="LEADERSHIP"
          subtitle="Community contributions and leadership (Click for details)"
          color="blue"
        />
      </ScrollReveal>

      <div className={`mx-auto grid gap-6 mt-12 ${
        leadership.length === 1 
          ? 'max-w-2xl grid-cols-1' 
          : 'max-w-4xl grid-cols-1 md:grid-cols-2'
      }`}>
        {leadership.map((item, idx) => (
          <ScrollReveal key={idx} delay={idx * 0.1}>
            <div 
              onClick={() => setSelectedItem(item)}
              className="pixel-card p-6 h-full cursor-pointer group hover:-translate-y-1 transition-all" 
              style={{ borderColor: 'rgba(59,130,246,0.2)' }}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 border-2 border-primary/50 flex items-center justify-center bg-primary/5 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </div>

                <div className="flex-1">
                  <h3
                    className="font-[family-name:var(--font-press-start-2p)] text-[8px] text-primary mb-1 leading-relaxed group-hover:text-primary transition-colors"
                    style={{ textShadow: '0 0 4px rgba(59,130,246,0.3)' }}
                  >
                    {item.role.toUpperCase()}
                  </h3>
                  <div className="text-secondary font-[family-name:var(--font-press-start-2p)] text-[6px] mb-3 group-hover:text-secondary transition-colors">
                    ▸ {item.organization.toUpperCase()}
                  </div>
                  
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
        isOpen={!!selectedItem} 
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.role || 'LEADERSHIP ROLE'}
      >
        {selectedItem && (
          <div className="space-y-6">
            <div className="border-b border-border/50 pb-4">
              <h3 className="text-xl font-bold text-foreground mb-1">{selectedItem.role}</h3>
              <p className="text-primary font-[family-name:var(--font-press-start-2p)] text-[8px] mt-2">{selectedItem.organization}</p>
            </div>

            {/* Credential Viewer */}
            {/* @ts-ignore */}
            {selectedItem.credentialUrl && selectedItem.credentialUrl !== '#' && (
              <div className="w-full bg-black/20 border border-primary/20 rounded-sm overflow-hidden flex flex-col mt-4">
                <div className="bg-primary/10 p-2 border-b border-primary/20 flex justify-between items-center">
                  <span className="font-[family-name:var(--font-press-start-2p)] text-[6px] text-primary">CREDENTIAL VIEWER</span>
                  {/* @ts-ignore */}
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
                  {/* @ts-ignore */}
                  {selectedItem.credentialUrl.toLowerCase().endsWith('.pdf') ? (
                    <iframe 
                      // @ts-ignore
                      src={`${selectedItem.credentialUrl}#toolbar=0`} 
                      className="w-full h-full border-none"
                      title={selectedItem.role}
                    />
                  ) : (
                    <img 
                      // @ts-ignore
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
                <h4 className="font-[family-name:var(--font-press-start-2p)] text-[7px] text-muted-foreground mb-3">ROLE OVERVIEW</h4>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
              
              {/* @ts-ignore - skills might not be typed properly yet */}
              {selectedItem.skills && (
                <div>
                  <h4 className="font-[family-name:var(--font-press-start-2p)] text-[7px] text-muted-foreground mb-3">KEY RESPONSIBILITIES & SKILLS</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.skills.map((skill: string) => (
                      <span key={skill} className="px-3 py-1.5 text-xs text-primary/90 border border-primary/20 bg-primary/5 font-[family-name:var(--font-geist-mono)]">
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
