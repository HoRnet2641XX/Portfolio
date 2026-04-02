'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import type { PortfolioItem } from '@/data/portfolio';
import { cn } from '@/lib/utils';

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
}

const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 24,
    scale: i % 3 === 1 ? 0.96 : 1,
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.07,
      ease: [0.33, 1, 0.68, 1],
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.25, ease: [0.32, 0, 0.67, 0] },
  },
};

export function PortfolioCard({ item, index }: PortfolioCardProps) {
  return (
    <motion.article
      layout
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={cn(
        'group relative rounded-xl overflow-hidden',
        'border border-border bg-surface-raised',
        'transition-shadow duration-250',
        'hover:shadow-[0_8px_32px_rgba(255,140,50,0.08)]',
        'hover:border-border-brand/40',
        item.featured && 'md:col-span-2',
      )}
    >
      {/* Image */}
      <div className={cn('relative overflow-hidden', item.featured ? 'h-[280px] md:h-[320px]' : 'h-[208px]')}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={`Screenshot of ${item.title}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-surface-raised via-surface-raised/30 to-transparent"
          aria-hidden="true"
        />

        {/* Year badge */}
        <span className="absolute top-[12px] right-[12px] px-[12px] py-[4px] rounded-full text-xs font-pixel bg-brand-muted border border-brand-muted text-brand backdrop-blur-sm">
          {item.year}
        </span>

        {/* Hover actions */}
        <div className="absolute bottom-[12px] right-[12px] flex gap-[8px] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-250">
          <a
            href={item.links?.live || '#'}
            aria-label={`View live demo of ${item.title}`}
            className="p-[8px] rounded-full bg-brand-muted border border-brand-muted text-brand backdrop-blur-sm hover:bg-brand hover:text-white transition-all duration-150"
          >
            <ExternalLink size={14} aria-hidden="true" />
          </a>
          <a
            href={item.links?.github || '#'}
            aria-label={`View source code of ${item.title}`}
            className="p-[8px] rounded-full bg-border border border-border text-content-secondary backdrop-blur-sm hover:bg-content-muted hover:text-content-primary transition-all duration-150"
          >
            <Github size={14} aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-[24px]">
        <h3 className="text-lg font-display font-medium text-content-primary mb-[8px]">
          {item.title}
        </h3>
        <p className="text-sm text-content-secondary mb-[16px] leading-relaxed">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-[8px]" role="list" aria-label="Technologies used">
          {item.tags.map((tag) => (
            <span
              key={tag}
              role="listitem"
              className="px-[8px] py-[4px] rounded-[4px] text-xs font-mono bg-border text-content-tertiary border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-brand to-transparent"
        aria-hidden="true"
      />
    </motion.article>
  );
}
