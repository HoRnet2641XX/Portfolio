'use client';

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

interface EmptyStateProps {
  category: string;
  onReset: () => void;
}

export function EmptyState({ category, onReset }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
      className="col-span-full flex flex-col items-center justify-center py-[96px] text-center"
      role="status"
      aria-live="polite"
    >
      <div
        className="w-[64px] h-[64px] rounded-xl bg-brand-subtle border border-brand-muted
          flex items-center justify-center mb-[24px]"
      >
        <Search size={24} className="text-brand" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-display font-medium text-content-primary mb-[8px]">
        No {category} projects yet
      </h3>
      <p className="text-sm text-content-secondary mb-[24px] max-w-sm">
        There are no projects in this category at the moment.
        Check back later or browse all works.
      </p>
      <button
        onClick={onReset}
        className="px-[24px] py-[12px] rounded-[8px] text-sm font-display font-medium
          bg-brand text-white
          hover:bg-brand-dark
          transition-colors duration-micro cursor-pointer"
      >
        View all projects
      </button>
    </motion.div>
  );
}
