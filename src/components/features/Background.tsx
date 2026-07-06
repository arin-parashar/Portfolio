'use client';

import { useEffect, useState, useMemo } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
}

const STAR_COLORS = ['#39FF14', '#FF2D95', '#00F0FF', '#FFD700', '#ffffff', '#ffffff', '#ffffff'];

function generateStars(count: number): Star[] {
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() < 0.3 ? 2 : 1,
      color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 4,
    });
  }
  return stars;
}

export function Background() {
  const [mounted, setMounted] = useState(false);
  const stars = useMemo(() => generateStars(80), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Pixel grid */}
      <div
        className="absolute inset-0 bg-grid"
        style={{ animation: 'grid-scroll 60s linear infinite' }}
      />

      {/* Twinkling pixel stars */}
      {stars.map((star, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            opacity: 0.5,
            animation: `star-twinkle ${star.duration}s ${star.delay}s ease-in-out infinite`,
            boxShadow: star.size > 1 ? `0 0 3px ${star.color}` : 'none',
          }}
        />
      ))}

      {/* Subtle CRT scanlines over everything */}
      <div
        className="absolute inset-0"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Very subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
