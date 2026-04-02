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

  const counts = useMemo(() => {
    const c: Record<Category, number> = { all: 0, ai: 0, dev: 0, design: 0 };
    portfolioData.forEach((item) => {
      c.all++;
      c[item.category]++;
    });
    return c;
  }, []);

  return (
    <section
      className="px-[24px] md:px-[48px] lg:px-[80px] py-[64px] md:py-[96px]"
      aria-labelledby="works-heading"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[24px] mb-[48px]"
      >
        <div>
          <h2
            id="works-heading"
            className="text-2xl font-display font-bold text-content-primary tracking-tight"
          >
            Selected Works
          </h2>
          <p className="mt-[4px] text-sm text-content-tertiary">
            Browse projects by category
          </p>
        </div>
        <CategoryFilter
          active={activeCategory}
          onChange={setActiveCategory}
          counts={counts}
        />
      </motion.div>

      {/* Grid - featured items span 2 cols to break uniformity */}
      <motion.div
        layout
        id="portfolio-grid"
        role="tabpanel"
        aria-label="Portfolio projects"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <PortfolioCard key={item.id} item={item} index={index} />
            ))
          ) : (
            <EmptyState
              category={categories.find((c) => c.key === activeCategory)?.label || activeCategory}
              onReset={() => setActiveCategory('all')}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
