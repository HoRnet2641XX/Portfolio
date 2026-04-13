'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Category } from '@/data/portfolio';
import { portfolioData, categories } from '@/data/portfolio';
import { CategoryFilter } from './CategoryFilter';
import { PortfolioCard } from './PortfolioCard';
import { EmptyState } from './EmptyState';

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return portfolioData;
    return portfolioData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const counts = useMemo<Record<Category, number>>(() => {
    const c: Record<Category, number> = {
      all: portfolioData.length,
      ai: 0,
      dev: 0,
      design: 0,
    };
    for (const item of portfolioData) c[item.category]++;
    return c;
  }, []);

  return (
    <section
      id="works"
      className="snap-section px-[24px] md:px-[48px] lg:px-[80px] !justify-start pt-[88px] md:!justify-center md:pt-0 overflow-y-auto"
      aria-labelledby="works-heading"
    >
      <div className="w-full max-w-content pb-[32px]">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[16px] mb-[24px] md:mb-[32px]"
        >
          <div>
            <div className="flex items-center gap-[8px] mb-[6px]">
              <span className="text-xs font-mono text-brand tabular-nums">04</span>
              <span className="w-[24px] h-px bg-border-brand" aria-hidden="true" />
              <span className="text-[10px] font-pixel text-content-muted tracking-wider">
                WORKS
              </span>
            </div>
            <h2
              id="works-heading"
              className="text-xl md:text-2xl font-pixel text-content-primary tracking-tight"
            >
              作品一覧
            </h2>
          </div>
          <CategoryFilter
            active={activeCategory}
            onChange={setActiveCategory}
            counts={counts}
          />
        </motion.div>

        {/* ── Bento grid ── */}
        <div
          id="portfolio-grid"
          role="tabpanel"
          aria-label="ポートフォリオ プロジェクト一覧"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.length > 0 ? (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[14px] md:gap-[18px]"
              >
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={
                      item.featured
                        ? 'sm:col-span-2 lg:col-span-2'
                        : ''
                    }
                  >
                    <PortfolioCard item={item} index={index} />
                  </div>
                ))}
              </motion.div>
            ) : (
              <EmptyState
                category={categories.find((c) => c.key === activeCategory)?.label || activeCategory}
                onReset={() => setActiveCategory('all')}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
