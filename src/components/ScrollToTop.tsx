'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = document.getElementById('snap-root');
    if (!container) return;

    const handleScroll = () => {
      setVisible(container.scrollTop > 400);
    };
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    document.getElementById('snap-root')?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
          onClick={scrollToTop}
          aria-label="トップへ戻る"
          className="fixed bottom-[28px] right-[28px] z-toast
            p-[10px] rounded-sm cursor-pointer
            bg-surface-raised border border-border-brand text-brand
            hover:bg-brand hover:text-white
            transition-colors duration-micro
            screen-glow"
        >
          <ArrowUp size={16} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
