'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { about } from '@/data/profile';
import { site } from '@/data/site';
import { ease, duration, viewportOnce } from '@/lib/animation';

export function ContactCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { ...viewportOnce, margin: '-60px' });

  return (
    <section
      id="contact"
      className="snap-section px-[24px] md:px-[48px] lg:px-[80px] relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background ghost text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="text-[clamp(120px,25vw,300px)] font-pixel text-brand/[0.04] leading-none tracking-tighter">
          CONTACT
        </span>
      </div>

      <div ref={ref} className="relative w-full max-w-[720px] mx-auto text-center">
        <TerminalPrompt inView={inView} />

        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: ease.out }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-pixel text-content-primary leading-[1.05] mb-[16px]"
        >
          一緒に
          <br />
          <span className="text-gradient-brand">つくりませんか。</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: duration.reveal, delay: 0.2 }}
          className="text-sm md:text-base text-content-secondary font-body leading-relaxed max-w-md mx-auto mb-[32px] md:mb-[48px]"
        >
          プロジェクトのご相談、技術的なディスカッション、
          <br className="hidden sm:block" />
          その他お気軽にご連絡ください。
        </motion.p>

        <CTAButtons inView={inView} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: duration.normal, delay: 0.5 }}
          className="flex items-center justify-center gap-[8px] mt-[28px]"
        >
          <span className="led-success animate-pulse-glow" aria-hidden="true" />
          <span className="text-xs font-pixel text-semantic-success">
            現在お仕事を受け付けています
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function TerminalPrompt({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: duration.normal }}
      className="mb-[24px]"
    >
      <span className="text-xs font-mono text-content-muted">
        <span className="text-brand">$</span> open mailto://
      </span>
    </motion.div>
  );
}

function CTAButtons({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: duration.reveal, delay: 0.35 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-[12px]"
    >
      <a
        href={`mailto:${about.email}`}
        className="group/btn relative flex items-center gap-[10px] px-[28px] sm:px-[36px] py-[14px] sm:py-[16px] rounded-sm bg-brand text-white font-pixel text-sm sm:text-base tracking-wider border border-brand w-full sm:w-auto justify-center hover:bg-brand-dark hover:shadow-[0_0_30px_rgba(255,140,50,0.35)] transition-all duration-normal"
      >
        <Mail size={16} aria-hidden="true" />
        メールで連絡
        <ArrowRight
          size={14}
          aria-hidden="true"
          className="transition-transform duration-micro group-hover/btn:translate-x-[6px]"
        />
      </a>

      <a
        href={site.socials.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-[10px] px-[28px] sm:px-[36px] py-[14px] sm:py-[16px] rounded-sm bg-surface-base text-content-secondary font-pixel text-sm sm:text-base tracking-wider border border-border w-full sm:w-auto justify-center hover:text-content-primary hover:border-content-muted transition-all duration-normal"
      >
        SNSで連絡
      </a>
    </motion.div>
  );
}
