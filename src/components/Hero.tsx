'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTextScramble } from '@/lib/useTextScramble';

/* ── Boot sequence lines ─────────────────────────────── */
const bootLines = [
  { text: '> system.boot()', delay: 0 },
  { text: '  loading modules .......... ok', delay: 400 },
  { text: '  connecting ............... ok', delay: 800 },
  { text: '  auth: verified', delay: 1100 },
  { text: '> portfolio.render()', delay: 1400 },
];

const BOOT_DURATION = 2200; // ms before main content reveals

export function Hero() {
  const [phase, setPhase] = useState<'boot' | 'reveal'>('boot');
  const [visibleLines, setVisibleLines] = useState(0);

  // Reduced motion: skip boot
  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (rm.matches) {
      setPhase('reveal');
      return;
    }

    bootLines.forEach((line, i) => {
      setTimeout(() => setVisibleLines(i + 1), line.delay);
    });
    const timer = setTimeout(() => setPhase('reveal'), BOOT_DURATION);
    return () => clearTimeout(timer);
  }, []);

  const headlineTop = useTextScramble('AI, Dev, Design.', {
    speed: 25,
    delay: BOOT_DURATION + 200,
    enabled: phase === 'reveal',
  });
  const headlineBottom = useTextScramble('一人で、全部。', {
    speed: 30,
    delay: BOOT_DURATION + 600,
    enabled: phase === 'reveal',
  });

  return (
    <section
      id="hero"
      className="snap-section relative px-[24px] md:px-[48px] lg:px-[80px] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Grid bg scoped to hero */}
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden="true" />

      {/* Large decorative glyph */}
      <div
        className="absolute -right-[5%] top-[10%] text-[clamp(200px,40vw,500px)] font-pixel text-brand/[0.03] leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        P
      </div>

      <div className="relative w-full max-w-content">
        {/* ── Boot sequence ─────────────────────────── */}
        <AnimatePresence>
          {phase === 'boot' && (
            <motion.div
              key="boot"
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <div className="font-mono text-xs md:text-sm space-y-[6px]">
                {bootLines.slice(0, visibleLines).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15 }}
                    className={
                      line.text.includes('ok') || line.text.includes('verified')
                        ? 'text-semantic-success'
                        : 'text-content-muted'
                    }
                  >
                    {line.text}
                  </motion.div>
                ))}
                <span className="animate-blink text-brand">█</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Main content ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 'reveal' ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Headline — oversized, deliberate */}
          <h1
            id="hero-heading"
            className="font-pixel tracking-tight mb-[24px] md:mb-[32px]"
          >
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[96px] text-content-primary leading-[1.05]">
              {headlineTop}
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[96px] text-brand leading-[1.05] mt-[4px]">
              {headlineBottom}
            </span>
          </h1>

          {/* Sub — concrete, not vague */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: phase === 'reveal' ? 1 : 0, y: phase === 'reveal' ? 0 : 16 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="max-w-[520px] text-sm sm:text-base text-content-secondary font-body leading-relaxed mb-[48px] md:mb-[64px]"
          >
            RAG / LLM アプリの設計から、Next.js × Go のフルスタック開発、
            Figma でのプロダクトデザインまで。東京拠点。
          </motion.p>

          {/* Stat readout — staggered cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'reveal' ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="flex flex-wrap gap-[12px] md:gap-[16px]"
            role="list"
            aria-label="実績"
          >
            {[
              { value: '12+', label: 'プロジェクト完了', unit: 'SHIPPED' },
              { value: '3', label: 'AI / Dev / Design', unit: 'DOMAINS' },
              { value: '2024→', label: '活動中', unit: 'ACTIVE' },
            ].map((stat, i) => (
              <motion.div
                key={stat.unit}
                initial={{ opacity: 0, y: 12 }}
                animate={{
                  opacity: phase === 'reveal' ? 1 : 0,
                  y: phase === 'reveal' ? 0 : 12,
                }}
                transition={{ duration: 0.35, delay: 1.1 + i * 0.12 }}
                className="flex flex-col gap-[4px] px-[16px] py-[12px] md:px-[20px] md:py-[14px] border border-border rounded bg-surface-raised/60 backdrop-blur-sm min-w-[110px] md:min-w-[130px] group hover:border-border-brand hover:screen-glow transition-all duration-normal"
                role="listitem"
              >
                <span className="text-[10px] md:text-xs font-pixel text-content-muted uppercase tracking-wider">
                  {stat.unit}
                </span>
                <span className="text-xl md:text-2xl text-brand font-mono font-medium tabular-nums">
                  {stat.value}
                </span>
                <span className="text-xs text-content-tertiary font-body">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
