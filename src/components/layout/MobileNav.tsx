'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail } from 'lucide-react';
import { navItems } from '@/data/navigation';
import { Icons } from '@/components/ui/icons';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export function MobileNav({ isOpen, onClose, activeSection }: MobileNavProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[60] bg-background/98 md:hidden scanlines"
    >
      <div className="flex flex-col h-full p-6">
        <div className="flex justify-between items-center mb-12">
          <span
            className="font-[family-name:var(--font-press-start-2p)] text-[10px] text-retro-green"
            style={{ textShadow: '0 0 8px rgba(57,255,20,0.4)' }}
          >
            MENU
          </span>
          <button
            onClick={onClose}
            className="p-2 text-muted-foreground hover:text-retro-pink border border-transparent hover:border-retro-pink/30 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center items-start gap-6 pl-4">
          <AnimatePresence>
            {isOpen && navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: i * 0.08, duration: 0.2 }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'font-[family-name:var(--font-press-start-2p)] text-sm tracking-wide transition-colors block',
                    activeSection === item.href.replace('#', '')
                      ? 'text-retro-green neon-green'
                      : 'text-foreground hover:text-retro-green'
                  )}
                >
                  {activeSection === item.href.replace('#', '') ? '▸ ' : '  '}{item.label.toUpperCase()}
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-6 pb-10 justify-center"
        >
          <a href="#" className="text-muted-foreground hover:text-retro-green transition-colors"><Icons.github className="w-5 h-5" /></a>
          <a href="#" className="text-muted-foreground hover:text-retro-cyan transition-colors"><Icons.linkedin className="w-5 h-5" /></a>
          <a href="mailto:arinparashar3@gmail.com" className="text-muted-foreground hover:text-retro-pink transition-colors"><Mail className="w-5 h-5" /></a>
        </motion.div>
      </div>
    </motion.div>
  );
}
