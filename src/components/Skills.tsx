'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillCategories } from '@/data/profile';
import { SectionWrapper } from './SectionWrapper';
import { ease, duration, viewportOnce } from '@/lib/animation';

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
  const inView = useInView(ref, viewportOnce);

  return (
    <SectionWrapper
      id="skills"
      className="!justify-start pt-[88px] md:!justify-center md:pt-0"
    >
      <div ref={ref}>
        {/* Label — status-bar style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: duration.normal }}
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

        {/* Terminal-style category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[12px] md:gap-[16px]">
          {skillCategories.map((category, catIdx) => (
            <SkillCategory
              key={category.name}
              category={category}
              catIdx={catIdx}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ── Single skill category card ────────────────────── */

function SkillCategory({
  category,
  catIdx,
  inView,
}: {
  category: (typeof skillCategories)[number];
  catIdx: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: duration.slow, delay: catIdx * 0.08, ease: ease.out }}
      className="group border border-border rounded-lg bg-surface-raised overflow-hidden hover:border-border-brand transition-colors duration-normal"
    >
      {/* Window title bar */}
      <div className="flex items-center gap-[8px] px-[14px] py-[8px] border-b border-border-subtle bg-surface-base/50">
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

      {/* Skill list */}
      <div className="p-[14px] md:p-[16px]">
        <div className="text-xs font-mono text-content-muted mb-[10px]">
          <span className="text-brand">$</span> ls -la {category.label.toLowerCase()}
        </div>

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
  );
}
