'use client';

import { useState, useEffect, useCallback } from 'react';

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Don't show on touch devices
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(hover: none)').matches) return;

    setIsVisible(true);

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  // Track hover on interactive elements
  useEffect(() => {
    if (!isVisible) return;

    const selector = 'a, button, [role="button"], input, textarea, select, [data-cursor-hover]';

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    const addListeners = () => {
      document.querySelectorAll(selector).forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    addListeners();

    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      document.querySelectorAll(selector).forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const size = isHovering ? 28 : 20;
  const armLen = isHovering ? 10 : 7;
  const armWidth = 2;
  const dotSize = isClicking ? 6 : 4;
  const color = isHovering ? '#39FF14' : '#e0e0e0';
  const glowColor = isHovering ? 'rgba(57,255,20,0.6)' : 'rgba(224,224,224,0.3)';

  return (
    <div
      style={{
        position: 'fixed',
        left: pos.x,
        top: pos.y,
        width: 0,
        height: 0,
        zIndex: 9999,
        pointerEvents: 'none',
        transition: isClicking ? 'none' : undefined,
      }}
    >
      {/* Center dot */}
      <div
        style={{
          position: 'absolute',
          width: dotSize,
          height: dotSize,
          backgroundColor: color,
          left: -dotSize / 2,
          top: -dotSize / 2,
          boxShadow: `0 0 6px ${glowColor}`,
          transition: 'width 0.1s, height 0.1s, left 0.1s, top 0.1s',
        }}
      />
      {/* Top arm */}
      <div
        style={{
          position: 'absolute',
          width: armWidth,
          height: armLen,
          backgroundColor: color,
          left: -armWidth / 2,
          top: -(armLen + 3),
          boxShadow: `0 0 4px ${glowColor}`,
        }}
      />
      {/* Bottom arm */}
      <div
        style={{
          position: 'absolute',
          width: armWidth,
          height: armLen,
          backgroundColor: color,
          left: -armWidth / 2,
          top: 3,
          boxShadow: `0 0 4px ${glowColor}`,
        }}
      />
      {/* Left arm */}
      <div
        style={{
          position: 'absolute',
          width: armLen,
          height: armWidth,
          backgroundColor: color,
          left: -(armLen + 3),
          top: -armWidth / 2,
          boxShadow: `0 0 4px ${glowColor}`,
        }}
      />
      {/* Right arm */}
      <div
        style={{
          position: 'absolute',
          width: armLen,
          height: armWidth,
          backgroundColor: color,
          left: 3,
          top: -armWidth / 2,
          boxShadow: `0 0 4px ${glowColor}`,
        }}
      />
    </div>
  );
}
