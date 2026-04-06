'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail } from 'lucide-react';
import { about } from '@/data/profile';

export function About() {
  return (
    <section
      id="about"
      className="snap-section px-[24px] md:px-[48px] lg:px-[80px]"
      aria-labelledby="about-heading"
    >
      <div className="w-full max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
        >
          {/* Section label */}
          <div className="flex items-center gap-[12px] mb-[24px] md:mb-[32px]">
            <h2 id="about-heading" className="text-xl md:text-2xl font-pixel text-content-primary">
              自己紹介
            </h2>
            <div className="flex-1 h-px pixel-border" aria-hidden="true" />
            <span className="text-xs font-mono text-content-muted">ABOUT</span>
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[24px] lg:gap-[40px]">
            {/* Left: bio */}
            <div>
              <div className="mb-[20px]">
                <h3 className="text-2xl md:text-3xl font-body font-bold text-content-primary mb-[4px]">
                  {about.name}
                </h3>
                <p className="text-xs md:text-sm font-pixel text-brand">{about.role}</p>
              </div>

              <div className="space-y-[12px] mb-[20px]">
                {about.bio.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm md:text-base text-content-secondary font-body leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Meta */}
              <div className="flex flex-wrap gap-[16px]">
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
              </div>
            </div>

            {/* Right: system info card */}
            <div className="border border-border rounded-lg bg-surface-raised screen-glow p-[16px] md:p-[20px] self-start">
              <div className="flex items-center gap-[8px] mb-[14px] pb-[10px] border-b border-border-subtle">
                <span className="led" aria-hidden="true" />
                <span className="text-xs font-pixel text-content-muted uppercase tracking-wider">
                  SYS.INFO
                </span>
              </div>

              <dl className="space-y-[10px]">
                {[
                  { key: 'NAME', value: about.nameJa },
                  { key: 'ROLE', value: 'Engineer / Designer' },
                  { key: 'LOCATION', value: about.location },
                  { key: 'STACK', value: 'AI, Web, Design' },
                  { key: 'STATUS', value: 'Available', highlight: true },
                ].map((item) => (
                  <div key={item.key} className="flex justify-between items-baseline gap-[8px]">
                    <dt className="text-[10px] md:text-xs font-pixel text-content-muted shrink-0">{item.key}</dt>
                    <dd
                      className={`text-xs md:text-sm font-mono text-right ${
                        item.highlight ? 'text-semantic-success' : 'text-content-secondary'
                      }`}
                    >
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
