'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTextScramble } from '@/lib/useTextScramble';
import { useBootSequence } from '@/lib/useBootSequence';
import { ease, duration } from '@/lib/animation';

const stats = [
  { value: '12+', label: 'プロジェクト完了', unit: 'SHIPPED' },
  { value: '3', label: 'AI / Dev / Design', unit: 'DOMAINS' },
  { value: '2024→', label: '活動中', unit: 'ACTIVE' },
];

export function Hero() {
  const { phase, visibleLines, lines, bootDuration } = useBootSequence();
  const isRevealed = phase === 'reveal';

  const headlineTop = useTextScramble('AI, Dev, Design.', {
    speed: 25,
    delay: bootDuration + 200,
    enabled: isRevealed,
  });
  const headlineBottom = useTextScramble('一人で、全部。', {
    speed: 30,
    delay: bootDuration + 600,
    enabled: isRevealed,
  });

  return (
    <section
      id="hero"
      className="snap-section relative px-[24px] md:px-[48px] lg:px-[80px] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden="true" />

      {/* Decorative background glyph */}
      <div
        className="absolute -right-[5%] top-[10%] text-[clamp(200px,40vw,500px)] font-pixel text-brand/[0.03] leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        P
      </div>

      <div className="relative w-full max-w-content">
        <BootOverlay phase={phase} visibleLines={visibleLines} lines={lines} />
        <MainContent phase={phase} headlineTop={headlineTop} headlineBottom={headlineBottom} />
      </div>
    </section>
  );
}

/* ── Boot sequence overlay ─────────────────────────── */

function BootOverlay({
  phase,
  visibleLines,
  lines,
}: {
  phase: 'boot' | 'reveal';
  visibleLines: number;
  lines: { text: string }[];
}) {
  return (
    <AnimatePresence>
      {phase === 'boot' && (
        <motion.div
          key="boot"
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: duration.normal }}
          className="absolute inset-0 flex flex-col justify-center"
        >
          <div className="font-mono text-xs md:text-sm space-y-[6px]">
            {lines.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: duration.micro }}
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
  );
}

/* ── Main revealed content ─────────────────────────── */

function MainContent({
  phase,
  headlineTop,
  headlineBottom,
}: {
  phase: 'boot' | 'reveal';
  headlineTop: string;
  headlineBottom: string;
}) {
  const isRevealed = phase === 'reveal';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isRevealed ? 1 : 0 }}
      transition={{ duration: duration.reveal, delay: 0.1 }}
    >
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

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: isRevealed ? 1 : 0, y: isRevealed ? 0 : 16 }}
        transition={{ duration: duration.reveal, delay: 0.8 }}
        className="max-w-[520px] text-sm sm:text-base text-content-secondary font-body leading-relaxed mb-[48px] md:mb-[64px]"
      >
        RAG / LLM アプリの設計から、Next.js × Go のフルスタック開発、
        Figma でのプロダクトデザインまで。東京拠点。
      </motion.p>

      <StatCards isRevealed={isRevealed} />
    </motion.div>
  );
}

/* ── Stat readout cards ────────────────────────────── */

function StatCards({ isRevealed }: { isRevealed: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isRevealed ? 1 : 0 }}
      transition={{ duration: duration.reveal, delay: 1.0 }}
      className="flex flex-wrap gap-[12px] md:gap-[16px]"
      role="list"
      aria-label="実績"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.unit}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: isRevealed ? 1 : 0, y: isRevealed ? 0 : 12 }}
          transition={{ duration: duration.slow, delay: 1.1 + i * 0.12, ease: ease.out }}
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
  );
}
