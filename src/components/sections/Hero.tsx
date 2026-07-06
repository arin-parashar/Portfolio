'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, ChevronDown } from 'lucide-react';
import { roles, currentlyBuilding } from '@/lib/constants';
import { Icons } from '@/components/ui/icons';
import { InteractiveTerminal } from '@/components/pixel-art/InteractiveTerminal';
import { useState, useEffect } from 'react';

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [buildingIndex, setBuildingIndex] = useState(0);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    const buildingInterval = setInterval(() => {
      setBuildingIndex((prev) => (prev + 1) % currentlyBuilding.length);
    }, 2500);
    return () => {
      clearInterval(roleInterval);
      clearInterval(buildingInterval);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto w-full flex flex-col items-center text-center"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-primary/50 bg-card text-primary font-[family-name:var(--font-press-start-2p)] text-[8px] tracking-wider"
            style={{ textShadow: '0 0 6px rgba(59,130,246,0.3)' }}
          >
            <span className="w-2 h-2 bg-primary" style={{ animation: 'blink 1.5s step-end infinite' }} />
            SYSTEM ONLINE
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-[family-name:var(--font-press-start-2p)] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed"
        >
          <span className="pixel-glow-primary">ARIN</span>{' '}
          <span className="pixel-glow-secondary">PARASHAR</span>
        </motion.h1>

        {/* Rotating class selection */}
        <motion.div variants={itemVariants} className="mt-6">
          <span className="font-[family-name:var(--font-press-start-2p)] text-[7px] text-muted-foreground tracking-wider">CURRENT FOCUS</span>
          <div className="h-8 mt-2 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="font-[family-name:var(--font-press-start-2p)] text-[10px] sm:text-xs text-secondary"
                style={{ textShadow: '0 0 8px rgba(16,185,129,0.4)' }}
              >
                ▸ {roles[roleIndex].toUpperCase()}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ═══ TERMINAL WINDOW ═══ */}
        <motion.div variants={itemVariants} className="mt-16 flex justify-center w-full px-4">
          <InteractiveTerminal />
        </motion.div>

        {/* Currently building */}
        <motion.div variants={itemVariants} className="mt-16 flex flex-col items-center">
          <div className="flex gap-1 mb-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-primary/50" />
            ))}
          </div>
          <span className="font-[family-name:var(--font-press-start-2p)] text-[6px] tracking-[0.2em] text-primary/50 uppercase">
            CURRENTLY BUILDING
          </span>
          <div className="h-7 mt-2 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={buildingIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="text-foreground/80 text-lg"
              >
                {currentlyBuilding[buildingIndex]}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            href="#projects"
            className="px-6 py-3 border-2 border-primary bg-primary/10 text-primary font-[family-name:var(--font-press-start-2p)] text-[8px] tracking-wider hover:bg-primary/20 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
          >
            VIEW PROJECTS
          </Link>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 border-2 border-secondary/50 bg-card text-secondary font-[family-name:var(--font-press-start-2p)] text-[8px] tracking-wider hover:border-secondary hover:bg-secondary/10 transition-colors"
          >
            DOWNLOAD RESUME
          </a>
          <Link
            href="#contact"
            className="px-6 py-3 border-2 border-accent/50 bg-card text-accent font-[family-name:var(--font-press-start-2p)] text-[8px] tracking-wider hover:border-accent hover:bg-accent/10 transition-colors"
          >
            CONTACT
          </Link>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={itemVariants} className="mt-10 flex gap-5 justify-center">
          <a href="#" className="p-2 text-muted-foreground hover:text-primary border border-transparent hover:border-primary/30 transition-all">
            <Icons.github className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 text-muted-foreground hover:text-secondary border border-transparent hover:border-secondary/30 transition-all">
            <Icons.linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:arinparashar3@gmail.com" className="p-2 text-muted-foreground hover:text-accent border border-transparent hover:border-accent/30 transition-all">
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="font-[family-name:var(--font-press-start-2p)] text-[5px] text-muted-foreground mb-2 tracking-widest">SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="w-4 h-4 text-primary/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
