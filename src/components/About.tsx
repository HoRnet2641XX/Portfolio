'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Mail } from 'lucide-react';
import { about } from '@/data/profile';
import { SectionWrapper } from './SectionWrapper';
import { ease, duration, viewportOnce } from '@/lib/animation';

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, viewportOnce);

  return (
    <SectionWrapper id="about">
      <div ref={ref}>
        <SectionLabel inView={inView} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-[32px] lg:gap-x-[48px]">
          <Biography inView={inView} />
          <SystemInfoCard inView={inView} />
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ── Section label ─────────────────────────────────── */

function SectionLabel({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: duration.normal }}
      className="flex items-baseline gap-[12px] mb-[32px] md:mb-[48px]"
    >
      <span className="text-xs font-mono text-brand tabular-nums">/ 01</span>
      <h2
        id="about-heading"
        className="text-xl md:text-2xl font-pixel text-content-primary"
      >
        自己紹介
      </h2>
      <div className="flex items-center gap-[6px] ml-auto">
        <span className="led" aria-hidden="true" />
        <span className="text-xs font-mono text-content-muted">ABOUT.md</span>
      </div>
    </motion.div>
  );
}

/* ── Left column: pull-quote + bio + meta ──────────── */

function Biography({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: duration.reveal, delay: 0.15, ease: ease.out }}
      className="lg:col-span-7"
    >
      <blockquote className="mb-[28px] md:mb-[36px]">
        <p className="text-2xl sm:text-3xl md:text-4xl font-body font-bold text-content-primary leading-[1.2] tracking-tight">
          課題を見つけ、
          <br />
          <span className="text-gradient-brand">技術で解き、</span>
          <br />
          デザインで届ける。
        </p>
      </blockquote>

      <div className="space-y-[14px] mb-[24px]">
        {about.bio.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: duration.normal, delay: 0.3 + i * 0.1, ease: ease.out }}
            className="text-sm md:text-base text-content-secondary font-body leading-relaxed"
          >
            {p}
          </motion.p>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: duration.normal, delay: 0.5 }}
        className="flex flex-wrap gap-[16px]"
      >
        <div className="flex items-center gap-[8px] text-xs md:text-sm text-content-tertiary">
          <MapPin size={14} className="text-content-muted shrink-0" aria-hidden="true" />
          <span className="font-mono">{about.location}</span>
        </div>
        <div className="flex items-center gap-[8px] text-xs md:text-sm text-content-tertiary">
          <Mail size={14} className="text-content-muted shrink-0" aria-hidden="true" />
          <a
            href={`mailto:${about.email}`}
            className="font-mono hover:text-brand transition-colors duration-micro break-all"
          >
            {about.email}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Right column: SYS.INFO card ───────────────────── */

const sysInfoRows = [
  { key: 'USER', getValue: () => about.nameJa },
  { key: 'ROLE', getValue: () => 'Eng / Designer' },
  { key: 'LOC', getValue: () => about.location },
  { key: 'STACK', getValue: () => 'AI, Web, Design' },
  { key: 'UPTIME', getValue: () => '2024 → now' },
] as const;

function SystemInfoCard({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: duration.reveal, delay: 0.3, ease: ease.out }}
      className="lg:col-span-5 lg:-mt-[24px]"
    >
      <div className="border border-border rounded-lg bg-surface-raised p-[20px] md:p-[24px] screen-glow relative overflow-hidden">
        <div className="absolute inset-0 scanline-overlay pointer-events-none" aria-hidden="true" />

        <div className="relative">
          {/* Header */}
          <div className="flex items-center gap-[8px] mb-[16px] pb-[12px] border-b border-border-subtle">
            <span className="led-success animate-pulse-glow" aria-hidden="true" />
            <span className="text-xs font-pixel text-semantic-success uppercase tracking-wider">
              ACTIVE
            </span>
            <span className="ml-auto text-[10px] font-mono text-content-muted">PID 8080</span>
          </div>

          {/* Key-value rows */}
          <dl className="space-y-[12px]">
            {sysInfoRows.map((item) => (
              <div key={item.key} className="flex justify-between items-baseline gap-[12px]">
                <dt className="text-xs font-pixel text-content-muted shrink-0">{item.key}</dt>
                <dd className="text-xs md:text-sm font-mono text-content-secondary text-right truncate">
                  {item.getValue()}
                </dd>
              </div>
            ))}
          </dl>

          {/* Memory gauge */}
          <div className="mt-[16px] pt-[12px] border-t border-border-subtle">
            <div className="flex items-center justify-between mb-[4px]">
              <span className="text-[10px] font-pixel text-content-muted">MEM</span>
              <span className="text-[10px] font-mono text-brand">87%</span>
            </div>
            <div className="h-[4px] bg-border rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={inView ? { width: '87%' } : {}}
                transition={{ duration: 1.2, delay: 0.6, ease: ease.out }}
                className="h-full bg-brand rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
