'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/data/profile';

function SkillBar({ level, delay }: { level: number; delay: number }) {
  return (
    <div className="flex gap-[2px] md:gap-[3px]" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scaleY: 0.5 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: delay + i * 0.04 }}
          className={`w-[5px] md:w-[6px] h-[12px] md:h-[14px] rounded-sm ${
            i < level ? 'bg-brand' : 'bg-border'
          }`}
          style={{ imageRendering: 'pixelated' }}
        />
      ))}
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="snap-section px-[24px] md:px-[48px] lg:px-[80px] overflow-y-auto"
      aria-labelledby="skills-heading"
    >
      <div className="w-full max-w-content py-[24px] md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
        >
          {/* Section label */}
          <div className="flex items-center gap-[12px] mb-[24px] md:mb-[32px]">
            <h2 id="skills-heading" className="text-xl md:text-2xl font-pixel text-content-primary">
              技術スタック
            </h2>
            <div className="flex-1 h-px pixel-border" aria-hidden="true" />
            <span className="text-xs font-mono text-content-muted">SKILLS</span>
          </div>

          {/* Skill categories grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[12px] md:gap-[16px]">
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: catIdx * 0.06 }}
                className="border border-border rounded-lg bg-surface-raised p-[14px] md:p-[18px] hover:border-border-brand hover:screen-glow transition-all duration-normal"
              >
                {/* Category header */}
                <div className="flex items-center justify-between mb-[12px] pb-[8px] border-b border-border-subtle">
                  <span className="text-[10px] md:text-xs font-pixel text-brand uppercase tracking-wider">
                    {category.label}
                  </span>
                  <span className="text-[10px] md:text-xs font-mono text-content-muted">
                    {category.skills.length}
                  </span>
                </div>

                {/* Skills list */}
                <ul className="space-y-[8px]">
                  {category.skills.map((skill, skillIdx) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between gap-[8px]"
                    >
                      <span className="text-xs md:text-sm font-body text-content-secondary truncate">
                        {skill.name}
                      </span>
                      <SkillBar
                        level={skill.level}
                        delay={catIdx * 0.06 + skillIdx * 0.02}
                      />
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
