'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PixelPokeball } from '@/components/pixel-art/PixelPokeball';

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
          className="fixed bottom-6 right-6 z-40 p-2 border-2 border-retro-green/50 bg-card hover:border-retro-green hover:shadow-[0_0_15px_rgba(57,255,20,0.2)] transition-all"
          aria-label="Back to top"
          style={{ animation: 'float-pixel 3s ease-in-out infinite' }}
        >
          <PixelPokeball size={28} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
