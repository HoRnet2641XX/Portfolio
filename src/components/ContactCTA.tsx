'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { about } from '@/data/profile';

export function ContactCTA() {
  return (
    <section
      id="contact"
      className="snap-section px-[24px] md:px-[48px] lg:px-[80px]"
      aria-labelledby="contact-heading"
    >
      <div className="w-full max-w-[640px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
          className="border border-border-brand rounded-lg bg-surface-raised screen-glow p-[24px] sm:p-[32px] md:p-[48px] text-center"
        >
          {/* Terminal prompt */}
          <div className="mb-[20px]">
            <span className="text-xs md:text-sm font-mono text-content-muted">
              <span className="text-brand">$</span> contact --open
            </span>
          </div>

          <h2
            id="contact-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-pixel text-content-primary mb-[12px]"
          >
            お仕事のご相談
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-content-secondary font-body leading-relaxed max-w-md mx-auto mb-[24px] md:mb-[32px]">
            プロジェクトのご相談、技術的なディスカッション、
            その他お気軽にご連絡ください。
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[10px]">
            <a
              href={`mailto:${about.email}`}
              className="group flex items-center gap-[8px] px-[20px] sm:px-[28px] py-[12px] sm:py-[14px] rounded-sm
                bg-brand text-white font-pixel text-xs sm:text-sm tracking-wider
                border border-brand w-full sm:w-auto justify-center
                hover:bg-brand-dark hover:shadow-[0_0_20px_rgba(255,140,50,0.3)]
                transition-all duration-normal"
            >
              <Mail size={14} aria-hidden="true" />
              メールで連絡
              <ArrowRight
                size={12}
                aria-hidden="true"
                className="transition-transform duration-micro group-hover:translate-x-[4px]"
              />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[8px] px-[20px] sm:px-[28px] py-[12px] sm:py-[14px] rounded-sm
                bg-surface-base text-content-secondary font-pixel text-xs sm:text-sm tracking-wider
                border border-border w-full sm:w-auto justify-center
                hover:text-content-primary hover:border-content-muted
                transition-all duration-normal"
            >
              SNSで連絡
            </a>
          </div>

          {/* Availability status */}
          <div className="flex items-center justify-center gap-[8px] mt-[20px]">
            <span className="led-success animate-pulse-glow" aria-hidden="true" />
            <span className="text-[10px] md:text-xs font-pixel text-semantic-success">
              現在お仕事を受け付けています
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
