'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '12+', label: 'プロジェクト', unit: 'PJ' },
  { value: '3', label: '領域', unit: 'DOMAIN' },
  { value: '2024–26', label: 'タイムライン', unit: 'YEAR' },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="snap-section px-[24px] md:px-[48px] lg:px-[80px]"
      aria-labelledby="hero-heading"
    >
      <div className="w-full max-w-content">
        {/* Terminal-style intro */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-[24px] md:mb-[32px]"
        >
          <span className="text-sm font-mono text-content-muted">
            <span className="text-brand">$</span> portfolio.init()
          </span>
          <span className="animate-blink text-brand ml-[2px] text-sm font-mono">█</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.33, 1, 0.68, 1] }}
          className="font-pixel tracking-tight mb-[20px] md:mb-[24px]"
        >
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-content-primary leading-tight">
            つくる、つなげる、
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand leading-tight mt-[8px]">
            届ける。
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="max-w-lg text-sm sm:text-base text-content-secondary font-body leading-relaxed mb-[32px] md:mb-[48px]"
        >
          AI / フルスタック開発 / デザイン —
          <br className="hidden sm:block" />
          テクノロジーとクリエイティブの交差点で。
        </motion.p>

        {/* Stats — gadget-style readout cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-[12px] md:gap-[16px]"
          role="list"
          aria-label="ポートフォリオ統計"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.55 + i * 0.08 }}
              className="flex flex-col gap-[4px] px-[16px] py-[12px] md:px-[20px] md:py-[14px] border border-border rounded bg-surface-raised screen-glow min-w-[100px] md:min-w-[120px]"
              role="listitem"
            >
              <span className="text-[10px] md:text-xs font-pixel text-content-muted uppercase tracking-wider">
                {stat.unit}
              </span>
              <span className="text-xl md:text-2xl text-brand font-mono font-medium tabular-nums">
                {stat.value}
              </span>
              <span className="text-[10px] md:text-xs text-content-tertiary font-body">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
