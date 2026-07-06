'use client';

/* CSS-only pixel art Pokéball for the back-to-top button */

export function PixelPokeball({ size = 32 }: { size?: number }) {
  const px = size / 8; // each "pixel" is 1/8th of total size

  return (
    <div
      style={{
        position: 'relative',
        width: size,
        height: size,
        imageRendering: 'pixelated',
      }}
    >
      {/* Top half — red */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: px,
          right: px,
          height: px * 3,
          backgroundColor: '#FF0040',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: px,
          left: 0,
          right: 0,
          height: px * 2,
          backgroundColor: '#FF0040',
        }}
      />

      {/* Center band — black */}
      <div
        style={{
          position: 'absolute',
          top: px * 3,
          left: 0,
          right: 0,
          height: px * 2,
          backgroundColor: '#1a1a1a',
        }}
      />

      {/* Center button */}
      <div
        style={{
          position: 'absolute',
          top: px * 3,
          left: px * 3,
          width: px * 2,
          height: px * 2,
          backgroundColor: '#ffffff',
          border: `${Math.max(1, px * 0.5)}px solid #1a1a1a`,
          zIndex: 2,
        }}
      />

      {/* Bottom half — white */}
      <div
        style={{
          position: 'absolute',
          bottom: px,
          left: 0,
          right: 0,
          height: px * 2,
          backgroundColor: '#e0e0e0',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: px,
          right: px,
          height: px,
          backgroundColor: '#e0e0e0',
        }}
      />

      {/* Border pixels — top corners cut */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: px, height: px, backgroundColor: 'transparent' }} />
      <div style={{ position: 'absolute', top: 0, right: 0, width: px, height: px, backgroundColor: 'transparent' }} />
      {/* Border pixels — bottom corners cut */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: px, height: px, backgroundColor: 'transparent' }} />
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: px, height: px, backgroundColor: 'transparent' }} />
    </div>
  );
}
