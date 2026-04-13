'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { timeline } from '@/data/profile';
import { SectionWrapper } from './SectionWrapper';
import { ease, duration, viewportOnce } from '@/lib/animation';

/** Generate a stable pseudo-hash from a year string */
function fakeHash(year: string) {
  const seed = year.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  return (seed * 2654435761 >>> 0).toString(16).slice(0, 7);
}

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, viewportOnce);

  return (
    <SectionWrapper id="timeline">
      <div ref={ref}>
        {/* Label — terminal prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: duration.normal }}
          className="mb-[28px] md:mb-[40px]"
        >
          <div className="text-xs font-mono text-content-muted mb-[6px]">
            <span className="text-brand">$</span> git log --graph --oneline
          </div>
          <h2
            id="timeline-heading"
            className="text-xl md:text-2xl font-pixel text-content-primary"
          >
            03 / 経歴
          </h2>
        </motion.div>

        {/* Entries */}
        <div className="relative">
          {/* Vertical trace — uses .trace-line utility from globals.css */}
          <div
            className="absolute left-[15px] md:left-[19px] top-[8px] bottom-[8px] w-[2px] trace-line"
            aria-hidden="true"
          />

          <ol className="space-y-[32px] md:space-y-[44px] list-none m-0 p-0">
            {timeline.map((entry, i) => (
              <TimelineEntry key={entry.year} entry={entry} index={i} inView={inView} />
            ))}
          </ol>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ── Single timeline entry ─────────────────────────── */

function TimelineEntry({
  entry,
  index,
  inView,
}: {
  entry: (typeof timeline)[number];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.15, ease: ease.out }}
      className="relative pl-[44px] md:pl-[56px]"
    >
      {/* Diamond node */}
      <div
        className="absolute left-[7px] md:left-[11px] top-[6px] w-[16px] h-[16px] md:w-[18px] md:h-[18px] rotate-45 bg-surface-base border-2 border-brand"
        aria-hidden="true"
      >
        <div className="absolute inset-[3px] bg-brand rotate-0" />
      </div>

      {/* Commit header */}
      <div className="flex items-center gap-[10px] mb-[8px] flex-wrap">
        <span className="font-mono text-[10px] md:text-xs text-brand tabular-nums">
          {fakeHash(entry.year)}
        </span>
        <span className="px-[8px] py-[2px] rounded-sm text-[10px] md:text-xs font-pixel text-brand bg-brand-subtle border border-border-brand">
          {entry.year}
        </span>
      </div>

      <h3 className="text-base md:text-lg font-body font-medium text-content-primary mb-[6px]">
        {entry.title}
      </h3>

      <p className="text-xs md:text-sm text-content-secondary font-body leading-relaxed mb-[10px]">
        {entry.description}
      </p>

      {entry.tags && (
        <div className="flex flex-wrap gap-[4px] md:gap-[6px]">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="px-[6px] py-[2px] rounded-sm text-[10px] md:text-xs font-mono bg-surface-raised text-content-muted border border-border-subtle"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.li>
  );
}
