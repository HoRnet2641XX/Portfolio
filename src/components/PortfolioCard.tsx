'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Download, FileText, Image, Film, ArrowRight } from 'lucide-react';
import type { PortfolioItem } from '@/data/portfolio';
import { cn } from '@/lib/utils';

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.05,
      ease: [0.33, 1, 0.68, 1],
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.97,
    transition: { duration: 0.2, ease: [0.32, 0, 0.67, 0] },
  },
};

const fileIcons = {
  pdf: FileText,
  image: Image,
  video: Film,
  other: Download,
} as const;

export function PortfolioCard({ item, index }: PortfolioCardProps) {
  const hasLinks = item.links?.live || item.links?.github;
  const hasFile = !!item.file;
  const FileIcon = item.file ? fileIcons[item.file.type] : Download;
  const hasDetail = !!item.detail;

  return (
    <motion.article
      layout
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={cn(
        'group relative rounded-lg overflow-hidden h-full',
        'border border-border bg-surface-raised',
        'transition-all duration-normal',
        'hover:border-border-brand hover:screen-glow',
      )}
    >
      {/* Image */}
      <Link href={`/works/${item.id}`} className="block">
        <div className="relative overflow-hidden scanline-overlay h-[160px] md:h-[180px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={`${item.title}のスクリーンショット`}
            className="w-full h-full object-cover transition-transform duration-slow ease-out group-hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-surface-raised via-surface-raised/20 to-transparent"
            aria-hidden="true"
          />

          {/* Year badge */}
          <span className="absolute top-[8px] right-[8px] px-[8px] py-[2px] rounded-sm text-[10px] font-pixel bg-surface-base/80 border border-border text-content-tertiary backdrop-blur-sm">
            {item.year}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-[16px] md:p-[18px] flex flex-col">
        <Link href={`/works/${item.id}`} className="block mb-[4px]">
          <h3 className="text-base md:text-lg font-body font-medium text-content-primary hover:text-brand transition-colors duration-micro line-clamp-1">
            {item.title}
          </h3>
        </Link>
        <p className="text-xs md:text-sm text-content-secondary mb-[12px] leading-relaxed font-body line-clamp-2">
          {item.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-[4px] mb-[12px]" role="list" aria-label="使用技術">
          {item.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              role="listitem"
              className="px-[6px] py-[2px] rounded-sm text-[10px] font-mono bg-surface-base text-content-muted border border-border-subtle"
            >
              {tag}
            </span>
          ))}
          {item.tags.length > 3 && (
            <span className="px-[6px] py-[2px] text-[10px] font-mono text-content-muted">
              +{item.tags.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-[6px] pt-[10px] border-t border-border-subtle mt-auto">
          {item.links?.live && (
            <a
              href={item.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[4px] px-[10px] py-[5px] rounded-sm text-[10px] font-pixel
                bg-brand-subtle text-brand border border-border-brand
                hover:bg-brand hover:text-white transition-all duration-micro"
            >
              <ExternalLink size={10} aria-hidden="true" />
              LIVE
            </a>
          )}
          {item.links?.github && (
            <a
              href={item.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[4px] px-[10px] py-[5px] rounded-sm text-[10px] font-pixel
                bg-surface-base text-content-tertiary border border-border
                hover:text-content-primary hover:border-content-muted transition-all duration-micro"
            >
              <Github size={10} aria-hidden="true" />
              CODE
            </a>
          )}
          {hasFile && item.file && (
            <a
              href={item.file.path}
              download
              className="flex items-center gap-[4px] px-[10px] py-[5px] rounded-sm text-[10px] font-pixel
                bg-surface-base text-content-tertiary border border-border
                hover:text-brand hover:border-border-brand transition-all duration-micro"
            >
              <FileIcon size={10} aria-hidden="true" />
              {item.file.label}
            </a>
          )}

          {hasDetail && (
            <Link
              href={`/works/${item.id}`}
              className="ml-auto flex items-center gap-[3px] text-[10px] font-pixel text-content-muted hover:text-brand transition-colors duration-micro"
            >
              詳細
              <ArrowRight size={10} aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-brand opacity-0 group-hover:opacity-100 transition-opacity duration-normal"
        style={{ imageRendering: 'pixelated' }}
        aria-hidden="true"
      />
    </motion.article>
  );
}
