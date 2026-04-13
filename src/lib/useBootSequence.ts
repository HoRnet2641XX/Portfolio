'use client';

import { useState, useEffect } from 'react';

export interface BootLine {
  text: string;
  delay: number;
}

const DEFAULT_LINES: BootLine[] = [
  { text: '> system.boot()', delay: 0 },
  { text: '  loading modules .......... ok', delay: 400 },
  { text: '  connecting ............... ok', delay: 800 },
  { text: '  auth: verified', delay: 1100 },
  { text: '> portfolio.render()', delay: 1400 },
];

const BOOT_DURATION = 2200;

/**
 * Drives the Hero boot-sequence animation.
 * Returns the current phase and how many lines to show.
 * Respects `prefers-reduced-motion` by skipping straight to "reveal".
 */
export function useBootSequence(lines = DEFAULT_LINES) {
  const [phase, setPhase] = useState<'boot' | 'reveal'>('boot');
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPhase('reveal');
      return;
    }

    const timers = lines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay),
    );
    timers.push(setTimeout(() => setPhase('reveal'), BOOT_DURATION));

    return () => timers.forEach(clearTimeout);
  }, [lines]);

  return { phase, visibleLines, lines, bootDuration: BOOT_DURATION };
}
