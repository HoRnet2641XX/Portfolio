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
      className="fixed right-[16px] md:right-[24px] top-1/2 -translate-y-1/2 z-toast flex flex-col gap-[4px]"
      aria-label="セクションナビゲーション"
    >
      {sections.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            aria-label={label}
            aria-current={isActive ? 'true' : undefined}
            className={`flex items-center gap-[10px] px-[10px] py-[8px] min-h-[44px] rounded-sm cursor-pointer transition-all duration-normal ${
              isActive
                ? 'bg-brand/[0.08]'
                : 'hover:bg-white/[0.03]'
            }`}
          >
            {/* Label — always visible */}
            <span
              className={`text-xs font-pixel whitespace-nowrap transition-colors duration-normal ${
                isActive
                  ? 'text-brand'
                  : 'text-content-muted'
              }`}
            >
              {label}
            </span>
            {/* Dot */}
            <span
              className={`block rounded-full shrink-0 transition-all duration-normal ${
                isActive
                  ? 'w-[10px] h-[10px] bg-brand shadow-[0_0_8px_rgba(255,140,50,0.5)]'
                  : 'w-[6px] h-[6px] bg-content-muted'
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
