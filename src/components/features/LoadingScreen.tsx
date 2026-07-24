'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const bootLines = [
  { text: '> BOOTING KERNEL...', delay: 100 },
  { text: '> MOUNTING FILESYSTEM... OK', delay: 350 },
  { text: '> LOADING SERVICES... OK', delay: 600 },
  { text: '> INITIALIZING ENVIRONMENT... OK', delay: 850 },
  { text: '> ALL SYSTEMS OPERATIONAL', delay: 1100 },
];

const TOTAL_DURATION = 2000;

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);
  const [showInsertCoin, setShowInsertCoin] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('portfolio-loaded')) {
      setIsLoading(false);
      return;
    }

    const timeouts: NodeJS.Timeout[] = [];

    bootLines.forEach((line, index) => {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => [...prev, index]);
      }, line.delay);
      timeouts.push(timeout);
    });

    // Show SYSTEM READY after boot
    timeouts.push(setTimeout(() => setShowInsertCoin(true), 1400));

    // Animate progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 100 / (TOTAL_DURATION / 16);
        return next >= 100 ? 100 : next;
      });
    }, 16);

    // Exit
    timeouts.push(
      setTimeout(() => {
        setIsLoading(false);
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('portfolio-loaded', 'true');
        }
      }, TOTAL_DURATION)
    );

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center scanlines"
          style={{ backgroundColor: '#06060e' }}
        >
          {/* Retro title */}
          <div className="mb-12 text-center">
            <h1
              className="text-retro-green text-xs sm:text-sm md:text-base tracking-widest"
              style={{
                fontFamily: 'var(--font-press-start-2p)',
                textShadow: '0 0 10px rgba(57,255,20,0.5), 0 0 20px rgba(57,255,20,0.3)',
              }}
            >
              ARIN PARASHAR
            </h1>
            <div className="mt-4 text-retro-cyan text-[10px] sm:text-xs" style={{ fontFamily: 'var(--font-press-start-2p)' }}>
              PORTFOLIO v1.0
            </div>
          </div>

          {/* Boot messages */}
          <div className="w-80 sm:w-96 space-y-1.5 mb-12">
            {bootLines.map((line, index) => (
              <AnimatePresence key={index}>
                {visibleLines.includes(index) && (
                  <motion.p
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15 }}
                    className="text-retro-green/80 text-sm font-[family-name:var(--font-geist-mono)]"
                  >
                    {line.text}
                  </motion.p>
                )}
              </AnimatePresence>
            ))}
          </div>

          {/* SYSTEM READY blink */}
          <AnimatePresence>
            {showInsertCoin && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-12"
              >
                <p
                  className="text-retro-gold text-xs sm:text-sm"
                  style={{
                    fontFamily: 'var(--font-press-start-2p)',
                    animation: 'blink 1s step-end infinite',
                    textShadow: '0 0 10px rgba(255,215,0,0.5)',
                  }}
                >
                  SYSTEM READY
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pixel progress bar */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-64 sm:w-80">
            <div className="h-4 border-2 border-retro-green/60 bg-background p-[2px]">
              <div
                className="h-full bg-retro-green transition-none"
                style={{
                  width: `${progress}%`,
                  boxShadow: '0 0 8px rgba(57,255,20,0.4)',
                  /* Chunky pixel segments */
                  backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 6px, #0a0a1a 6px, #0a0a1a 8px)',
                }}
              />
            </div>
            <div className="mt-2 text-center text-retro-green/60 text-xs font-[family-name:var(--font-geist-mono)]">
              {Math.round(progress)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
