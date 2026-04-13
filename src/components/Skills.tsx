'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillCategories } from '@/data/profile';

/** Render skill level as a bar of filled/empty blocks (terminal style) */
function LevelBlocks({ level }: { level: number }) {
  return (
    <span className="font-mono text-xs tracking-tight" aria-label={`レベル ${level}/5`}>
      {'█'.repeat(level)}
      <span className="text-content-muted/40">{'░'.repeat(5 - level)}</span>
    </span>
  );
}

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      className="snap-section px-[24px] md:px-[48px] lg:px-[80px] !justify-start pt-[88px] md:!justify-center md:pt-0"
      aria-labelledby="skills-heading"
    >
      <div ref={ref} className="w-full max-w-content">
        {/* ── Label — status bar style ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-[20px] md:mb-[28px]"
        >
          <div className="inline-flex items-center gap-[10px] px-[12px] py-[6px] rounded border border-border-brand bg-brand-subtle">
            <span className="text-[10px] font-mono text-brand tabular-nums">02 / STACK</span>
            <span className="w-px h-[10px] bg-border-brand" aria-hidden="true" />
            <h2
              id="skills-heading"
              className="text-base md:text-lg font-pixel text-content-primary"
            >
              技術スタック
            </h2>
          </div>
        </motion.div>

        {/* ── Terminal-style table grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[12px] md:gap-[16px]">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: catIdx * 0.08 }}
              className="group border border-border rounded-lg bg-surface-raised overflow-hidden hover:border-border-brand transition-colors duration-normal"
            >
              {/* Header bar — like a terminal window title */}
              <div className="flex items-center gap-[8px] px-[14px] py-[8px] border-b border-border-subtle bg-surface-base/50">
                {/* Fake traffic lights */}
                <div className="flex gap-[4px]" aria-hidden="true">
                  <span className="w-[6px] h-[6px] rounded-full bg-content-muted/30" />
                  <span className="w-[6px] h-[6px] rounded-full bg-content-muted/30" />
                  <span className="w-[6px] h-[6px] rounded-full bg-content-muted/30" />
                </div>
                <span className="text-[10px] font-mono text-content-muted flex-1 text-center truncate">
                  ~/{category.name}
                </span>
                <span className="text-[10px] font-mono text-content-muted tabular-nums">
                  {category.skills.length}
                </span>
              </div>

              {/* Prompt + listing */}
              <div className="p-[14px] md:p-[16px]">
                {/* Category label */}
                <div className="text-xs font-mono text-content-muted mb-[10px]">
                  <span className="text-brand">$</span> ls -la {category.label.toLowerCase()}
                </div>

                {/* Skill rows */}
                <ul className="space-y-[6px]">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.li
                      key={skill.name}
                      initial={{ opacity: 0, x: -8 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.2,
                        delay: catIdx * 0.08 + skillIdx * 0.03 + 0.2,
                      }}
                      className="flex items-center justify-between gap-[8px]"
                    >
                      <span className="text-xs md:text-sm font-body text-content-secondary truncate">
                        {skill.name}
                      </span>
                      <LevelBlocks level={skill.level} />
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
