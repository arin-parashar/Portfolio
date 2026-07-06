'use client';

import { ScrollReveal } from '@/components/features/ScrollReveal';
import { SectionHeading } from '@/components/layout/SectionHeading';

const stats = [
  { label: 'ROLE', value: 'CS Student', color: '#3B82F6' },
  { label: 'EDU', value: 'SRM IST', color: '#10B981' },
  { label: 'YEAR', value: '2026', color: '#8B5CF6' },
  { label: 'CGPA', value: '8.1', color: '#06B6D4' },
];

const statBars = [
  { label: 'AI & ML', value: 90, color: '#3B82F6' },
  { label: 'COMPUTER VISION', value: 85, color: '#10B981' },
  { label: 'DATA ENGINEERING', value: 80, color: '#8B5CF6' },
  { label: 'WEB DEV', value: 75, color: '#F59E0B' },
  { label: 'EDGE AI', value: 85, color: '#06B6D4' },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <ScrollReveal>
        <SectionHeading
          title="ABOUT ME"
          subtitle="Engineer Profile"
          color="cyan"
        />
      </ScrollReveal>

      <div className="max-w-4xl mx-auto">
        <ScrollReveal delay={0.2}>
          <div className="pixel-card p-8 sm:p-10">
            {/* Character name header */}
            <div className="border-b-2 border-border pb-6 mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              {/* Profile Image */}
              <img src="/profile.jpg" alt="Arin Parashar" className="w-24 h-24 sm:w-36 sm:h-36 border-2 border-primary object-cover object-top bg-card rounded-none" />

              <div className="sm:mt-4">
                <h3 className="font-[family-name:var(--font-press-start-2p)] text-sm sm:text-base text-foreground mb-2">
                  ARIN PARASHAR
                </h3>
                <span className="font-[family-name:var(--font-press-start-2p)] text-[8px] text-muted-foreground">
                  SOFTWARE ENGINEER & AI ENGINEER
                </span>
              </div>
            </div>

            {/* Bio text */}
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
              <p>
                Computer Science student at SRM Institute of Science and Technology, graduating in 2026.
                Specializing in <span className="text-primary">AI, Computer Vision, Edge AI, Machine Learning,</span> and <span className="text-secondary">Data Engineering</span>.
              </p>
              <p>
                I believe in solving real engineering problems rather than building toy projects. Every system I build is designed to create tangible impact.
              </p>
            </div>

            {/* Quick stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
              {stats.map((stat) => (
                <div key={stat.label} className="border-2 border-border bg-background p-3 text-center">
                  <div className="font-[family-name:var(--font-press-start-2p)] text-[6px] text-muted-foreground mb-1">
                    {stat.label}
                  </div>
                  <div
                    className="font-[family-name:var(--font-press-start-2p)] text-[9px]"
                    style={{ color: stat.color, textShadow: `0 0 6px ${stat.color}40` }}
                  >
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* RPG stat bars */}
            <div className="space-y-4">
              <h4 className="font-[family-name:var(--font-press-start-2p)] text-[8px] text-muted-foreground mb-4">
                CORE PROFICIENCIES
              </h4>
              {statBars.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <span className="font-[family-name:var(--font-press-start-2p)] text-[6px] text-muted-foreground w-36 shrink-0 text-right">
                    {stat.label}
                  </span>
                  <div className="flex-1 h-4 bg-background border border-border p-[2px]">
                    <div
                      className="h-full transition-all duration-1000"
                      style={{
                        width: `${stat.value}%`,
                        backgroundColor: stat.color,
                        boxShadow: `0 0 8px ${stat.color}40`,
                        backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(15,23,42,0.3) 4px, rgba(15,23,42,0.3) 6px)',
                      }}
                    />
                  </div>
                  <span
                    className="font-[family-name:var(--font-press-start-2p)] text-[7px] w-10 text-right"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
