'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-2 border-2 border-primary/50 bg-card hover:border-primary hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
          aria-label="Back to top"
          style={{ animation: 'float-pixel 3s ease-in-out infinite' }}
        >
          {/* 8-bit style arrow */}
          <div className="w-7 h-7 flex items-center justify-center">
            <ChevronUp className="w-5 h-5 text-primary" strokeWidth={3} />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
