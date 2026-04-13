'use client';

import { useEffect, useRef } from 'react';

/**
 * Trailing dot cursor — follows the pointer with a spring-like lag.
 * Hidden on touch devices and when prefers-reduced-motion is set.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Bail on touch-only or reduced motion
    const mq = window.matchMedia('(pointer: fine)');
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mq.matches || rm.matches) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    let raf: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.35);
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.35);
      ringPos.current.x = lerp(ringPos.current.x, mouse.current.x, 0.15);
      ringPos.current.y = lerp(ringPos.current.y, mouse.current.y, 0.15);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    // Add hover scaling for interactive elements
    const addHover = () => {
      document.querySelectorAll('a, button, [role="tab"]').forEach((el) => {
        el.addEventListener('mouseenter', () => {
          ringRef.current?.classList.add('cursor-hover');
          dotRef.current?.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
          ringRef.current?.classList.remove('cursor-hover');
          dotRef.current?.classList.remove('cursor-hover');
        });
      });
    };
    // Delay so DOM is settled
    const t = setTimeout(addHover, 500);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        aria-hidden="true"
      />
    </>
  );
}
