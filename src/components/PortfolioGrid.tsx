'use client';

import { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Category } from '@/data/portfolio';
import { portfolioData, categories } from '@/data/portfolio';
import { CategoryFilter } from './CategoryFilter';
import { PortfolioCard } from './PortfolioCard';
import { EmptyState } from './EmptyState';

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return portfolioData;
    return portfolioData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const counts = useMemo(() => {
    const c: Record<Category, number> = { all: 0, ai: 0, dev: 0, design: 0 };
    portfolioData.forEach((item) => {
      c.all++;
      c[item.category]++;
    });
    return c;
  }, []);

  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    // Reset scroll position when changing category
    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
  };

  return (
    <section
      id="works"
      className="snap-section px-0 overflow-hidden"
      aria-labelledby="works-heading"
    >
      <div className="w-full h-full flex flex-col justify-center">
        {/* Section header with padding */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[16px] mb-[20px] md:mb-[28px] px-[24px] md:px-[48px] lg:px-[80px]"
        >
          <div>
            <h2
              id="works-heading"
              className="text-xl md:text-2xl font-pixel text-content-primary tracking-tight"
            >
              作品一覧
            </h2>
            <p className="mt-[4px] text-xs md:text-sm text-content-muted font-body">
              横スクロールでブラウズ
            </p>
          </div>
          <CategoryFilter
            active={activeCategory}
            onChange={handleCategoryChange}
            counts={counts}
          />
        </motion.div>

        {/* Horizontal scroll track */}
        <div
          ref={scrollRef}
          className="scroll-track flex-1 flex items-center"
          id="portfolio-grid"
          role="tabpanel"
          aria-label="ポートフォリオ プロジェクト一覧"
        >
          <div className="flex gap-[16px] md:gap-[20px] px-[24px] md:px-[48px] lg:px-[80px] py-[8px]">
            <AnimatePresence mode="popLayout">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="shrink-0 w-[280px] sm:w-[320px] md:w-[360px]"
                  >
                    <PortfolioCard item={item} index={index} />
                  </div>
                ))
              ) : (
                <EmptyState
                  category={categories.find((c) => c.key === activeCategory)?.label || activeCategory}
                  onReset={() => handleCategoryChange('all')}
                />
              )}
            </AnimatePresence>
            {/* End spacer */}
            <div className="shrink-0 w-[24px] md:w-[48px] lg:w-[80px]" aria-hidden="true" />
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex items-center justify-center gap-[8px] mt-[12px] md:mt-[16px] px-[24px]">
          <div className="flex gap-[3px]" aria-hidden="true">
            <span className="w-[16px] h-[3px] rounded-full bg-brand" />
            <span className="w-[8px] h-[3px] rounded-full bg-content-muted" />
            <span className="w-[8px] h-[3px] rounded-full bg-content-muted" />
          </div>
          <span className="text-[10px] font-pixel text-content-muted">
            SWIPE
          </span>
        </div>
      </div>
    </section>
  );
}
