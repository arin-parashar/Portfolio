'use client';

import { ScrollReveal } from '@/components/features/ScrollReveal';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { skillCategories } from '@/data/skills';

const categoryColors: Record<string, { border: string; text: string; glow: string }> = {
  Languages:            { border: '#39FF14', text: '#39FF14', glow: 'rgba(57,255,20,0.15)' },
  'AI & Machine Learning': { border: '#FF2D95', text: '#FF2D95', glow: 'rgba(255,45,149,0.15)' },
  'Data Engineering':   { border: '#00F0FF', text: '#00F0FF', glow: 'rgba(0,240,255,0.15)' },
  'Web Development':    { border: '#FFD700', text: '#FFD700', glow: 'rgba(255,215,0,0.15)' },
  'DevOps & Tools':     { border: '#FF6B35', text: '#FF6B35', glow: 'rgba(255,107,53,0.15)' },
  'Core Concepts':      { border: '#BF40BF', text: '#BF40BF', glow: 'rgba(191,64,191,0.15)' },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <ScrollReveal>
        <SectionHeading
          title="INVENTORY"
          subtitle="Equipment and abilities acquired"
          color="gold"
        />
      </ScrollReveal>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => {
          const colors = categoryColors[category.name] || categoryColors['Languages'];
          return (
            <ScrollReveal key={category.name} delay={idx * 0.08}>
              <div
                className="pixel-card h-full p-6"
                style={{ borderColor: `${colors.border}40` }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border">
                  <div
                    className="w-3 h-3"
                    style={{ backgroundColor: colors.border, boxShadow: `0 0 6px ${colors.glow}` }}
                  />
                  <h3
                    className="font-[family-name:var(--font-press-start-2p)] text-[8px] tracking-wider"
                    style={{ color: colors.text, textShadow: `0 0 6px ${colors.glow}` }}
                  >
                    {category.name.toUpperCase()}
                  </h3>
                </div>

                {/* Skill items */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-sm bg-background border border-border hover:border-current transition-colors cursor-default group"
                      style={{ color: colors.text }}
                      title={skill.description}
                    >
                      <span className="w-1 h-1 opacity-50 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: colors.border }} />
                      <span className="text-foreground/80 group-hover:text-current transition-colors">
                        {skill.name}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
