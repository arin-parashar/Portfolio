'use client';

import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { Search, FolderOpen, ArrowRight, Download, Mail, HelpCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Icons } from '@/components/ui/icons';
import { motion, AnimatePresence } from 'motion/react';
import { navItems } from '@/data/navigation';
import { projects } from '@/data/projects';

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    const openEvent = () => setOpen(true);

    document.addEventListener('keydown', down);
    window.addEventListener('open-command-palette', openEvent);

    return () => {
      document.removeEventListener('keydown', down);
      window.removeEventListener('open-command-palette', openEvent);
    };
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[70] flex items-start justify-center pt-[20vh] bg-background/70 backdrop-blur-sm">
          <div className="absolute inset-0" onClick={() => setOpen(false)} />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="relative z-10 w-full max-w-lg"
          >
            <Command className="w-full overflow-hidden border-2 border-retro-green bg-card text-foreground shadow-[0_0_30px_rgba(57,255,20,0.15)]">
              <div className="flex items-center border-b-2 border-retro-green/30 px-3">
                <span className="mr-2 text-retro-green font-[family-name:var(--font-press-start-2p)] text-[8px]">&gt;</span>
                <Command.Input
                  placeholder="ENTER COMMAND..."
                  className="flex h-14 w-full bg-transparent py-3 text-sm font-[family-name:var(--font-geist-mono)] text-retro-green outline-none placeholder:text-retro-green/40"
                />
              </div>
              <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
                <Command.Empty className="py-6 text-center text-sm text-muted-foreground font-[family-name:var(--font-press-start-2p)] text-[8px]">
                  COMMAND NOT FOUND
                </Command.Empty>

                <Command.Group heading="▸ NAVIGATE" className="px-2 py-1.5 text-[9px] font-[family-name:var(--font-press-start-2p)] text-retro-cyan/70">
                  {navItems.map((item) => (
                    <Command.Item
                      key={item.href}
                      value={`Go to ${item.label}`}
                      onSelect={() =>
                        runCommand(() => {
                          const el = document.querySelector(item.href);
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        })
                      }
                      className="relative flex cursor-pointer select-none items-center px-2 py-2.5 text-sm outline-none aria-selected:bg-retro-green/10 aria-selected:text-retro-green transition-colors font-[family-name:var(--font-geist-mono)]"
                    >
                      <ArrowRight className="mr-2 h-4 w-4" />
                      <span>{item.label}</span>
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Group heading="▸ PROJECTS" className="px-2 py-1.5 text-[9px] font-[family-name:var(--font-press-start-2p)] text-retro-pink/70 mt-2">
                  {projects.map((project) => (
                    <Command.Item
                      key={project.slug}
                      value={`View ${project.title}`}
                      onSelect={() => runCommand(() => router.push(`/projects/${project.slug}`))}
                      className="relative flex cursor-pointer select-none items-center px-2 py-2.5 text-sm outline-none aria-selected:bg-retro-green/10 aria-selected:text-retro-green transition-colors font-[family-name:var(--font-geist-mono)]"
                    >
                      <FolderOpen className="mr-2 h-4 w-4" />
                      <span>{project.title}</span>
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Group heading="▸ ACTIONS" className="px-2 py-1.5 text-[9px] font-[family-name:var(--font-press-start-2p)] text-retro-gold/70 mt-2">
                  <Command.Item
                    onSelect={() => runCommand(() => window.open('/resume.pdf'))}
                    className="relative flex cursor-pointer select-none items-center px-2 py-2.5 text-sm outline-none aria-selected:bg-retro-green/10 aria-selected:text-retro-green transition-colors font-[family-name:var(--font-geist-mono)]"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    <span>Download Resume</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => window.open('#'))}
                    className="relative flex cursor-pointer select-none items-center px-2 py-2.5 text-sm outline-none aria-selected:bg-retro-green/10 aria-selected:text-retro-green transition-colors font-[family-name:var(--font-geist-mono)]"
                  >
                    <Icons.github className="mr-2 h-4 w-4" />
                    <span>View GitHub</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() =>
                      runCommand(() => {
                        const el = document.querySelector('#contact');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      })
                    }
                    className="relative flex cursor-pointer select-none items-center px-2 py-2.5 text-sm outline-none aria-selected:bg-retro-green/10 aria-selected:text-retro-green transition-colors font-[family-name:var(--font-geist-mono)]"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Contact</span>
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
