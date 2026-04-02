'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '12+', label: 'Projects' },
  { value: '3', label: 'Domains' },
  { value: '2024–26', label: 'Timeline' },
];

export function Hero() {
  return (
    <section
      className="px-[24px] md:px-[48px] lg:px-[80px] pt-[64px] pb-[96px] md:pt-[96px]"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
          className="flex items-center gap-[12px] mb-[24px]"
        >
          <div
            className="w-[8px] h-[8px] rounded-full bg-brand shadow-[0_0_10px_rgba(255,140,50,0.5)]"
            aria-hidden="true"
          />
          <span className="text-xs font-mono text-content-tertiary uppercase tracking-[0.1em]">
            Creative Portfolio
          </span>
        </motion.div>

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
          className="font-display font-bold tracking-tight mb-[24px] text-4xl md:text-5xl"
          style={{ lineHeight: 1.1 }}
        >
          Crafting Digital
          <br />
          <span className="text-gradient-brand">Experiences</span>
          <span
            className="inline-block w-[12px] h-[12px] rounded-full ml-[12px] align-middle bg-brand shadow-[0_0_20px_rgba(255,140,50,0.4)]"
            aria-hidden="true"
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.33, 1, 0.68, 1] }}
          className="max-w-xl text-base text-content-secondary font-body"
          style={{ lineHeight: 1.7 }}
        >
          AI engineer, full-stack developer, and designer. Building at the
          intersection of technology and creativity.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="flex flex-wrap gap-[32px] mt-[48px]"
        role="list"
        aria-label="Portfolio statistics"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.1, ease: [0.33, 1, 0.68, 1] }}
            className="flex items-baseline gap-[12px]"
            role="listitem"
          >
            <span className="text-3xl text-brand font-display font-bold">
              {stat.value}
            </span>
            <span className="text-xs text-content-tertiary uppercase tracking-[0.05em] font-mono">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
