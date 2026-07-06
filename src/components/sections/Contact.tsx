'use client';

import { ScrollReveal } from '@/components/features/ScrollReveal';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { contactInfo } from '@/data/navigation';
import { Mail, Phone, MapPin, Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const contactItems = [
    { icon: Mail, label: 'EMAIL', value: contactInfo.email, href: `mailto:${contactInfo.email}`, color: '#FF2D95' },
    { icon: Phone, label: 'PHONE', value: contactInfo.phone, href: `tel:${contactInfo.phone}`, color: '#00F0FF' },
    { icon: MapPin, label: 'LOCATION', value: contactInfo.location, href: null, color: '#FFD700' },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      <ScrollReveal>
        <SectionHeading
          title="CONTACT ME"
          subtitle="Ready to connect? Let's work together"
          color="pink"
        />
      </ScrollReveal>

      <div className="max-w-3xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactItems.map((item, idx) => {
          const Icon = item.icon;
          const isCopied = copiedIndex === idx;

          return (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div
                className="pixel-card flex flex-col items-center justify-center p-8 h-full group relative overflow-hidden"
                style={{ borderColor: `${item.color}30` }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at center, ${item.color}08, transparent 70%)` }}
                />

                <div
                  className="p-3 border-2 mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300"
                  style={{ borderColor: `${item.color}50`, color: item.color }}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <span
                  className="font-[family-name:var(--font-press-start-2p)] text-[6px] tracking-[0.2em] mb-2 relative z-10"
                  style={{ color: `${item.color}80` }}
                >
                  {item.label}
                </span>

                {item.href ? (
                  <a
                    href={item.href}
                    className="text-foreground font-semibold hover:text-retro-green transition-colors text-center text-sm relative z-10"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-foreground font-semibold text-center text-sm relative z-10">
                    {item.value}
                  </span>
                )}

                <button
                  onClick={() => handleCopy(item.value, idx)}
                  className="mt-5 flex items-center justify-center w-8 h-8 text-muted-foreground hover:text-foreground border border-transparent hover:border-border transition-all relative z-10"
                  title="Copy"
                >
                  {isCopied ? <CheckCircle2 className="w-4 h-4 text-retro-green" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
