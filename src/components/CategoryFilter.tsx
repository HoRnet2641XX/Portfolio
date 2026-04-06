'use client';

import { motion } from 'framer-motion';
import type { Category } from '@/data/portfolio';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  active: Category;
  onChange: (cat: Category) => void;
  counts: Record<Category, number>;
}

const categoryConfig: { key: Category; label: string }[] = [
  { key: 'all', label: 'ALL' },
  { key: 'ai', label: 'AI/ML' },
  { key: 'dev', label: 'DEV' },
  { key: 'design', label: 'DESIGN' },
];

export function CategoryFilter({ active, onChange, counts }: CategoryFilterProps) {
  return (
    <div
      role="tablist"
      aria-label="カテゴリで絞り込み"
      className="flex gap-[2px] p-[4px] rounded border border-border bg-surface-raised"
    >
      {categoryConfig.map(({ key, label }) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            role="tab"
            aria-selected={isActive}
            aria-controls="portfolio-grid"
            onClick={() => onChange(key)}
            className={cn(
              'relative px-[14px] py-[8px] rounded flex items-center gap-[8px]',
              'whitespace-nowrap text-xs font-pixel tracking-wider',
              'transition-colors duration-micro cursor-pointer',
              isActive ? 'text-brand' : 'text-content-muted hover:text-content-secondary',
            )}
          >
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded bg-brand-subtle border border-border-brand"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-[6px]">
              {label}
              <span
                className={cn(
                  'px-[5px] py-[1px] rounded-sm text-xs font-mono tabular-nums',
                  isActive ? 'text-brand' : 'text-content-muted',
                )}
                aria-label={`${counts[key]}件`}
              >
                {counts[key]}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
