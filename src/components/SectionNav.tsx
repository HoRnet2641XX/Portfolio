'use client';

import { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: 'トップ' },
  { id: 'about', label: '自己紹介' },
  { id: 'skills', label: '技術' },
  { id: 'timeline', label: '経歴' },
  { id: 'works', label: '作品' },
  { id: 'contact', label: '連絡' },
];

export function SectionNav() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const container = document.getElementById('snap-root');
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the largest visible ratio among intersecting ones.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { root: container, threshold: [0.35, 0.6, 0.85] },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed right-[16px] md:right-[24px] top-1/2 -translate-y-1/2 z-toast flex flex-col gap-[12px]"
      aria-label="セクションナビゲーション"
    >
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          aria-label={label}
          aria-current={active === id ? 'true' : undefined}
          className="group relative flex items-center justify-end cursor-pointer min-w-[44px] min-h-[44px]"
        >
          {/* Label tooltip */}
          <span
            className="absolute right-[20px] px-[8px] py-[3px] rounded-sm text-xs font-pixel
              bg-surface-raised border border-border text-content-secondary
              opacity-0 group-hover:opacity-100 pointer-events-none
              transition-opacity duration-micro whitespace-nowrap"
          >
            {label}
          </span>
          {/* Dot */}
          <span
            className={`block rounded-full transition-all duration-normal ${
              active === id
                ? 'w-[10px] h-[10px] bg-brand shadow-[0_0_8px_rgba(255,140,50,0.5)]'
                : 'w-[6px] h-[6px] bg-content-muted hover:bg-content-tertiary'
            }`}
          />
        </button>
      ))}
    </nav>
  );
}
