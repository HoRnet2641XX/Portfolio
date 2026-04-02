'use client';

import { motion } from 'framer-motion';
import { Brain, Code2, Palette, Layers } from 'lucide-react';
import type { Category } from '@/data/portfolio';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  active: Category;
  onChange: (cat: Category) => void;
  counts: Record<Category, number>;
}

const categoryConfig: { key: Category; label: string; Icon: typeof Layers }[] = [
  { key: 'all', label: 'All', Icon: Layers },
  { key: 'ai', label: 'AI / ML', Icon: Brain },
  { key: 'dev', label: 'Dev', Icon: Code2 },
  { key: 'design', label: 'Design', Icon: Palette },
];

export function CategoryFilter({ active, onChange, counts }: CategoryFilterProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter by category"
      className="flex gap-[4px] p-[6px] rounded-xl overflow-x-auto bg-surface-overlay border border-border-subtle"
    >
      {categoryConfig.map(({ key, label, Icon }) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            role="tab"
            aria-selected={isActive}
            aria-controls="portfolio-grid"
            onClick={() => onChange(key)}
            className={cn(
              'relative px-[16px] py-[8px] rounded-[8px] flex items-center gap-[8px]',
              'whitespace-nowrap text-sm font-display font-medium',
              'transition-colors duration-150 cursor-pointer',
              isActive ? 'text-brand' : 'text-content-tertiary hover:text-content-secondary',
            )}
          >
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-[8px] bg-brand-subtle border border-brand-muted"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-[8px]">
              <Icon size={16} aria-hidden={true} />
              {label}
              <span
                className={cn(
                  'px-[6px] py-[2px] rounded-[4px] text-xs font-mono tabular-nums',
                  isActive ? 'bg-brand-muted text-brand' : 'bg-border text-content-muted',
                )}
                aria-label={`${counts[key]} projects`}
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
