'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface PixelModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function PixelModal({ isOpen, onClose, title, children }: PixelModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
          />
          <div className="fixed inset-0 flex items-center justify-center z-[100] p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full max-w-3xl max-h-[90vh] bg-card border-2 border-primary shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col pointer-events-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b-2 border-primary/20 bg-background">
                <h2 className="font-[family-name:var(--font-press-start-2p)] text-[8px] sm:text-[10px] text-primary" style={{ textShadow: '0 0 8px rgba(59,130,246,0.4)' }}>
                  {title.toUpperCase()}
                </h2>
                <button
                  onClick={onClose}
                  className="p-1.5 hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors border border-transparent hover:border-destructive/30"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Content area with custom scrollbar from globals.css */}
              <div className="p-6 overflow-y-auto">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
