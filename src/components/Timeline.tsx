'use client';

import { motion } from 'framer-motion';
import { timeline } from '@/data/profile';

export function Timeline() {
  return (
    <section
      id="timeline"
      className="snap-section px-[24px] md:px-[48px] lg:px-[80px]"
      aria-labelledby="timeline-heading"
    >
      <div className="w-full max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
        >
          {/* Section label */}
          <div className="flex items-center gap-[12px] mb-[28px] md:mb-[40px]">
            <h2 id="timeline-heading" className="text-xl md:text-2xl font-pixel text-content-primary">
              経歴
            </h2>
            <div className="flex-1 h-px pixel-border" aria-hidden="true" />
            <span className="text-xs font-mono text-content-muted">TIMELINE</span>
          </div>

          {/* Timeline entries */}
          <div className="relative">
            {/* Vertical trace line */}
            <div
              className="absolute left-[15px] md:left-[19px] top-[8px] bottom-[8px] w-px border-l border-dashed border-border-brand"
              aria-hidden="true"
            />

            <ol className="space-y-[28px] md:space-y-[40px] list-none m-0 p-0">
              {timeline.map((entry, i) => (
                <motion.li
                  key={entry.year}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                  className="relative pl-[40px] md:pl-[52px]"
                >
                  {/* Node */}
                  <div
                    className="absolute left-[8px] md:left-[12px] top-[4px] w-[14px] h-[14px] md:w-[16px] md:h-[16px] bg-surface-base border-2 border-brand rounded-sm"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-[3px] bg-brand rounded-sm" />
                  </div>

                  {/* Year badge */}
                  <span className="inline-block px-[10px] py-[3px] rounded-sm text-[10px] md:text-xs font-pixel text-brand bg-brand-subtle border border-border-brand mb-[8px]">
                    {entry.year}
                  </span>

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
              ))}
            </ol>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
