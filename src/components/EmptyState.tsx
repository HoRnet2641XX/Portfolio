'use client';

import { motion } from 'framer-motion';

interface EmptyStateProps {
  category: string;
  onReset: () => void;
}

export function EmptyState({ category, onReset }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
      className="col-span-full flex flex-col items-center justify-center py-[80px] text-center"
      role="status"
      aria-live="polite"
    >
      <div className="w-[56px] h-[56px] rounded border border-border bg-surface-raised flex items-center justify-center mb-[20px]">
        <span className="text-2xl font-pixel text-content-muted" aria-hidden="true">?</span>
      </div>
      <h3 className="text-lg font-pixel text-content-primary mb-[8px]">
        {category} のプロジェクトはまだありません
      </h3>
      <p className="text-sm text-content-secondary mb-[24px] max-w-sm font-body">
        このカテゴリにはまだプロジェクトがありません。すべての作品を閲覧してください。
      </p>
      <button
        onClick={onReset}
        className="px-[20px] py-[10px] rounded-sm text-xs font-pixel
          bg-brand text-white border border-brand
          hover:bg-brand-dark
          transition-colors duration-micro cursor-pointer"
      >
        すべて表示
      </button>
    </motion.div>
  );
}
