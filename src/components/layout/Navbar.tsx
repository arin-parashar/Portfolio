'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, Search } from 'lucide-react';
import { MobileNav } from '@/components/layout/MobileNav';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { navItems } from '@/data/navigation';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    });

    navItems.forEach((item) => {
      const id = item.href.replace('#', '');
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const openCommandPalette = () => {
    window.dispatchEvent(new CustomEvent('open-command-palette'));
  };

  // Build health bar segments (10 segments)
  const totalSegments = 10;
  const filledSegments = Math.round((scrollProgress / 100) * totalSegments);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
          isScrolled
            ? 'bg-background/95 border-b-2 border-primary/30'
            : 'bg-transparent border-b-2 border-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2">
            <span
              className="font-[family-name:var(--font-press-start-2p)] text-[10px] sm:text-xs text-primary"
              style={{ textShadow: '0 0 8px rgba(59,130,246,0.4)' }}
            >
              {'<AP/>'}
            </span>
          </Link>

          {/* Pixel Health Bar (scroll progress) */}
          <div className="hidden md:flex items-center gap-2">
            <span className="font-[family-name:var(--font-press-start-2p)] text-[6px] text-primary/60 mr-1">SCROLL</span>
            <div className="flex gap-[2px]">
              {Array.from({ length: totalSegments }).map((_, i) => (
                <div
                  key={i}
                  className="w-2.5 h-3 border border-primary/30 transition-colors duration-150"
                  style={{
                    backgroundColor: i < filledSegments ? '#3B82F6' : 'transparent',
                    boxShadow: i < filledSegments ? '0 0 4px rgba(59,130,246,0.4)' : 'none',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'font-[family-name:var(--font-press-start-2p)] text-[7px] tracking-wide transition-colors hover:text-primary',
                  activeSection === item.href.replace('#', '')
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
                style={
                  activeSection === item.href.replace('#', '')
                    ? { textShadow: '0 0 8px rgba(59,130,246,0.5)' }
                    : undefined
                }
              >
                {activeSection === item.href.replace('#', '') ? '▸ ' : ''}{item.label.toUpperCase()}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={openCommandPalette}
              className="p-2 text-muted-foreground hover:text-primary transition-colors border border-transparent hover:border-primary/30"
              aria-label="Command palette"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-primary"
              onClick={() => setIsMobileNavOpen(true)}
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileNavOpen && (
          <MobileNav
            isOpen={isMobileNavOpen}
            onClose={() => setIsMobileNavOpen(false)}
            activeSection={activeSection}
          />
        )}
      </AnimatePresence>
    </>
  );
}
