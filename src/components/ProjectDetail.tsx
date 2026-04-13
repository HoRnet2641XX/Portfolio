'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Download,
  FileText,
  Image as ImageIcon,
  Film,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import type { PortfolioItem } from '@/data/portfolio';
import { ease, duration } from '@/lib/animation';

const fileIcons = {
  pdf: FileText,
  image: ImageIcon,
  video: Film,
  other: Download,
} as const;

const categoryLabels: Record<string, string> = {
  ai: 'AI / ML',
  dev: '開発',
  design: 'デザイン',
};

interface ProjectDetailProps {
  item: PortfolioItem;
  prev: PortfolioItem | null;
  next: PortfolioItem | null;
}

export function ProjectDetail({ item, prev, next }: ProjectDetailProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [item.id]);

  return (
    <div className="min-h-screen">
      <div className="noise" aria-hidden="true" />

      <div className="relative z-[1]">
        <DetailHeader item={item} />

        <main className="px-[24px] md:px-[48px] lg:px-[80px] py-[32px] md:py-[48px]">
          <HeroImage item={item} />

          <div className="max-w-[800px]">
            <TitleMeta item={item} />
            <ActionButtons item={item} />
            {item.detail && <DetailSections detail={item.detail} />}
          </div>

          <PrevNextNav prev={prev} next={next} />
        </main>
      </div>
    </div>
  );
}

/* ── Header with back link ─────────────────────────── */

function DetailHeader({ item }: { item: PortfolioItem }) {
  return (
    <header className="sticky top-0 z-[40] px-[24px] md:px-[48px] lg:px-[80px] pt-[24px] pb-[12px] bg-surface-base/70 backdrop-blur-xl border-b border-white/[0.04]">
      <nav className="flex items-center justify-between">
        <Link
          href="/#works"
          className="flex items-center gap-[8px] text-sm font-pixel text-content-muted hover:text-brand transition-colors duration-micro"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          戻る
        </Link>
        <span className="text-xs font-mono text-content-muted">
          {item.year} / {categoryLabels[item.category] || item.category}
        </span>
      </nav>
    </header>
  );
}

/* ── Hero image ────────────────────────────────────── */

function HeroImage({ item }: { item: PortfolioItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: duration.reveal, ease: ease.out }}
      className="relative rounded-lg overflow-hidden border border-border mb-[40px] scanline-overlay h-[280px] md:h-[400px] lg:h-[480px]"
    >
      <NextImage
        src={item.image}
        alt={`${item.title}のスクリーンショット`}
        fill
        sizes="(max-width: 1024px) 100vw, 1200px"
        priority
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-surface-base/60 to-transparent"
        aria-hidden="true"
      />
    </motion.div>
  );
}

/* ── Title + tags ──────────────────────────────────── */

function TitleMeta({ item }: { item: PortfolioItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: duration.normal, delay: 0.1 }}
    >
      <div className="flex flex-wrap items-center gap-[8px] mb-[12px]">
        <span className="px-[10px] py-[3px] rounded-sm text-xs font-pixel text-brand bg-brand-subtle border border-border-brand">
          {categoryLabels[item.category] || item.category}
        </span>
        <span className="text-xs font-mono text-content-muted">{item.year}</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-body font-bold text-content-primary mb-[12px]">
        {item.title}
      </h1>

      <p className="text-base text-content-secondary font-body leading-relaxed mb-[24px]">
        {item.description}
      </p>

      <div className="flex flex-wrap gap-[6px] mb-[32px]">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="px-[8px] py-[3px] rounded-sm text-xs font-mono bg-surface-raised text-content-muted border border-border-subtle"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

/* ── Action buttons (live, code, file) ─────────────── */

function ActionButtons({ item }: { item: PortfolioItem }) {
  const FileIcon = item.file ? fileIcons[item.file.type] : Download;
  const hasAny = item.links?.live || item.links?.github || item.file;
  if (!hasAny) return null;

  return (
    <div className="flex flex-wrap items-center gap-[10px] mb-[48px]">
      {item.links?.live && (
        <a
          href={item.links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-[8px] px-[20px] py-[12px] min-h-[44px] rounded-sm text-sm font-pixel bg-brand text-white border border-brand hover:bg-brand-dark transition-colors duration-micro"
        >
          <ExternalLink size={14} aria-hidden="true" />
          LIVE DEMO
        </a>
      )}
      {item.links?.github && (
        <a
          href={item.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-[8px] px-[20px] py-[12px] min-h-[44px] rounded-sm text-sm font-pixel bg-surface-raised text-content-secondary border border-border hover:text-content-primary hover:border-content-muted transition-colors duration-micro"
        >
          <Github size={14} aria-hidden="true" />
          SOURCE CODE
        </a>
      )}
      {item.file && (
        <a
          href={item.file.path}
          download
          className="flex items-center gap-[8px] px-[20px] py-[12px] min-h-[44px] rounded-sm text-sm font-pixel bg-surface-raised text-content-secondary border border-border hover:text-brand hover:border-border-brand transition-colors duration-micro"
        >
          <FileIcon size={14} aria-hidden="true" />
          {item.file.label}
        </a>
      )}
    </div>
  );
}

/* ── CHALLENGE / APPROACH / RESULT cards ───────────── */

const detailSections = [
  { key: 'CHALLENGE', label: '課題', field: 'challenge', color: 'text-semantic-warning' },
  { key: 'APPROACH', label: 'アプローチ', field: 'approach', color: 'text-semantic-info' },
  { key: 'RESULT', label: '成果', field: 'result', color: 'text-semantic-success' },
] as const;

function DetailSections({
  detail,
}: {
  detail: NonNullable<PortfolioItem['detail']>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: duration.normal, delay: 0.25 }}
      className="space-y-[32px] mb-[48px]"
    >
      {detailSections.map((section) => (
        <div
          key={section.key}
          className="border border-border rounded-lg bg-surface-raised p-[24px]"
        >
          <div className="flex items-center gap-[10px] mb-[12px]">
            <span className={`text-xs font-pixel ${section.color} uppercase tracking-wider`}>
              {section.key}
            </span>
            <div className="flex-1 h-px border-t border-dashed border-border-subtle" aria-hidden="true" />
            <span className="text-xs font-pixel text-content-muted">{section.label}</span>
          </div>
          <p className="text-base text-content-secondary font-body leading-relaxed">
            {detail[section.field]}
          </p>
        </div>
      ))}
    </motion.div>
  );
}

/* ── Prev / Next navigation ────────────────────────── */

function PrevNextNav({
  prev,
  next,
}: {
  prev: PortfolioItem | null;
  next: PortfolioItem | null;
}) {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: duration.normal, delay: 0.4 }}
      className="flex items-stretch gap-[16px] pt-[32px] border-t border-border-subtle"
      aria-label="プロジェクトナビゲーション"
    >
      {prev ? (
        <Link
          href={`/works/${prev.id}`}
          className="flex-1 group flex items-center gap-[12px] p-[16px] rounded-lg border border-border bg-surface-raised hover:border-border-brand hover:screen-glow transition-all duration-normal"
        >
          <ChevronLeft
            size={16}
            className="text-content-muted group-hover:text-brand transition-colors duration-micro"
            aria-hidden="true"
          />
          <div className="min-w-0">
            <span className="block text-xs font-pixel text-content-muted mb-[4px]">PREV</span>
            <span className="block text-sm font-body text-content-secondary group-hover:text-content-primary truncate transition-colors duration-micro">
              {prev.title}
            </span>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <Link
          href={`/works/${next.id}`}
          className="flex-1 group flex items-center justify-end gap-[12px] p-[16px] rounded-lg border border-border bg-surface-raised hover:border-border-brand hover:screen-glow transition-all duration-normal text-right"
        >
          <div className="min-w-0">
            <span className="block text-xs font-pixel text-content-muted mb-[4px]">NEXT</span>
            <span className="block text-sm font-body text-content-secondary group-hover:text-content-primary truncate transition-colors duration-micro">
              {next.title}
            </span>
          </div>
          <ChevronRight
            size={16}
            className="text-content-muted group-hover:text-brand transition-colors duration-micro"
            aria-hidden="true"
          />
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </motion.nav>
  );
}
