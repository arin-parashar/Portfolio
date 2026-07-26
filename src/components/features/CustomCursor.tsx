'use client';

import { useEffect, useRef, useCallback } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const hoverRef = useRef(false);
  const clickRef = useRef(false);
  const visibleRef = useRef(false);
  const rafRef = useRef<number>(0);
  const mountedRef = useRef(false);

  const updateCursorDOM = useCallback(() => {
    const el = cursorRef.current;
    if (!el) return;

    const { x, y } = posRef.current;
    const hovering = hoverRef.current;
    const clicking = clickRef.current;

    // Use translate3d for GPU-accelerated positioning
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;

    // Update visual states
    const color = hovering ? '#39FF14' : '#e0e0e0';
    const glow = hovering ? 'rgba(57,255,20,0.6)' : 'rgba(224,224,224,0.3)';
    const dotSize = clicking ? 6 : 4;
    const armLen = hovering ? 10 : 7;

    const dot = el.children[0] as HTMLElement;
    const arms = [el.children[1], el.children[2], el.children[3], el.children[4]] as HTMLElement[];

    if (dot) {
      dot.style.width = `${dotSize}px`;
      dot.style.height = `${dotSize}px`;
      dot.style.left = `${-dotSize / 2}px`;
      dot.style.top = `${-dotSize / 2}px`;
      dot.style.backgroundColor = color;
      dot.style.boxShadow = `0 0 6px ${glow}`;
    }

    // Top arm
    if (arms[0]) {
      arms[0].style.height = `${armLen}px`;
      arms[0].style.top = `${-(armLen + 3)}px`;
      arms[0].style.backgroundColor = color;
      arms[0].style.boxShadow = `0 0 4px ${glow}`;
    }
    // Bottom arm
    if (arms[1]) {
      arms[1].style.height = `${armLen}px`;
      arms[1].style.backgroundColor = color;
      arms[1].style.boxShadow = `0 0 4px ${glow}`;
    }
    // Left arm
    if (arms[2]) {
      arms[2].style.width = `${armLen}px`;
      arms[2].style.left = `${-(armLen + 3)}px`;
      arms[2].style.backgroundColor = color;
      arms[2].style.boxShadow = `0 0 4px ${glow}`;
    }
    // Right arm
    if (arms[3]) {
      arms[3].style.width = `${armLen}px`;
      arms[3].style.backgroundColor = color;
      arms[3].style.boxShadow = `0 0 4px ${glow}`;
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(hover: none)').matches) return;

    mountedRef.current = true;
    visibleRef.current = true;
    if (cursorRef.current) {
      cursorRef.current.style.display = 'block';
    }

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      // Batch DOM updates with rAF — only schedule one frame at a time
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateCursorDOM);
    };

    const onDown = () => {
      clickRef.current = true;
      requestAnimationFrame(updateCursorDOM);
    };
    const onUp = () => {
      clickRef.current = false;
      requestAnimationFrame(updateCursorDOM);
    };

    // Hover tracking for interactive elements
    const selector = 'a, button, [role="button"], input, textarea, select, [data-cursor-hover]';

    const onEnter = () => {
      hoverRef.current = true;
      requestAnimationFrame(updateCursorDOM);
    };
    const onLeave = () => {
      hoverRef.current = false;
      requestAnimationFrame(updateCursorDOM);
    };

    const addHoverListeners = () => {
      document.querySelectorAll(selector).forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.querySelectorAll(selector).forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [updateCursorDOM]);

  const armWidth = 2;

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        zIndex: 9999,
        pointerEvents: 'none',
        display: 'none',
        willChange: 'transform',
      }}
    >
      {/* Center dot */}
      <div
        style={{
          position: 'absolute',
          width: 4,
          height: 4,
          backgroundColor: '#e0e0e0',
          left: -2,
          top: -2,
        }}
      />
      {/* Top arm */}
      <div
        style={{
          position: 'absolute',
          width: armWidth,
          height: 7,
          backgroundColor: '#e0e0e0',
          left: -armWidth / 2,
          top: -10,
        }}
      />
      {/* Bottom arm */}
      <div
        style={{
          position: 'absolute',
          width: armWidth,
          height: 7,
          backgroundColor: '#e0e0e0',
          left: -armWidth / 2,
          top: 3,
        }}
      />
      {/* Left arm */}
      <div
        style={{
          position: 'absolute',
          width: 7,
          height: armWidth,
          backgroundColor: '#e0e0e0',
          left: -10,
          top: -armWidth / 2,
        }}
      />
      {/* Right arm */}
      <div
        style={{
          position: 'absolute',
          width: 7,
          height: armWidth,
          backgroundColor: '#e0e0e0',
          left: 3,
          top: -armWidth / 2,
        }}
      />
    </div>
  );
}
