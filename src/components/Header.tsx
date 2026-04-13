'use client';

import { useState } from 'react';
import { Github, Twitter, Mail, Menu, X } from 'lucide-react';
import { site } from '@/data/site';
import { ShareButton } from './ShareButton';

const socialLinks = [
  { Icon: Github, label: 'GitHub', href: site.socials.github },
  { Icon: Twitter, label: 'Twitter', href: site.socials.twitter },
  { Icon: Mail, label: 'Email', href: `mailto:${site.socials.email}` },
];

const navLinks = [
  { id: 'about', label: '自己紹介' },
  { id: 'skills', label: '技術' },
  { id: 'timeline', label: '経歴' },
  { id: 'works', label: '作品' },
  { id: 'contact', label: '連絡' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="pt-[24px] pb-[12px] px-[24px] md:px-[48px] lg:px-[80px] bg-surface-base/70 backdrop-blur-xl border-b border-white/[0.04]">
      <nav
        className="flex items-center justify-between"
        aria-label="メインナビゲーション"
      >
        {/* Logo — pixel font with LED */}
        <a
          href="/"
          className="flex items-center gap-[12px] group transition-opacity duration-micro hover:opacity-80"
          aria-label="ポートフォリオ ホーム"
        >
          <div className="relative flex items-center justify-center w-[36px] h-[36px] border border-border-brand bg-surface-raised rounded">
            <span className="text-base text-brand font-pixel">P</span>
            {/* Corner pixel accents */}
            <span className="absolute top-0 left-0 w-[3px] h-[3px] bg-brand" aria-hidden="true" />
            <span className="absolute top-0 right-0 w-[3px] h-[3px] bg-brand" aria-hidden="true" />
            <span className="absolute bottom-0 left-0 w-[3px] h-[3px] bg-brand" aria-hidden="true" />
            <span className="absolute bottom-0 right-0 w-[3px] h-[3px] bg-brand" aria-hidden="true" />
          </div>
          <span className="text-sm text-content-secondary font-pixel tracking-wide">
            ポートフォリオ
          </span>
        </a>

        {/* Right side: status + share + socials (desktop) */}
        <div className="hidden md:flex items-center gap-[16px]">
          {/* Status indicator */}
          <div className="hidden sm:flex items-center gap-[8px] px-[12px] py-[6px] border border-border rounded bg-surface-raised">
            <span className="led-success animate-pulse-glow" aria-hidden="true" />
            <span className="text-xs font-pixel text-semantic-success">
              ONLINE
            </span>
          </div>

          {/* Social links + share */}
          <ul className="flex items-center gap-[4px] list-none m-0 p-0" role="list">
            {socialLinks.map(({ Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-[12px] rounded text-content-muted min-w-[44px] min-h-[44px] flex items-center justify-center
                    hover:text-brand hover:bg-brand-subtle
                    focus-visible:text-brand
                    transition-all duration-micro"
                >
                  <Icon size={16} aria-hidden="true" strokeWidth={1.5} />
                </a>
              </li>
            ))}
            <li>
              <ShareButton />
            </li>
          </ul>
        </div>

        {/* Hamburger button (mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={menuOpen}
          className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded text-content-muted hover:text-brand transition-colors duration-micro"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-[12px] py-[16px] border-t border-border">
          <ul className="flex flex-col gap-[4px] list-none m-0 p-0 mb-[16px]">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className="w-full text-left px-[12px] py-[12px] min-h-[44px] rounded text-sm font-pixel text-content-secondary
                    hover:text-brand hover:bg-brand-subtle
                    transition-all duration-micro"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-[8px] px-[12px] mb-[12px]">
            <span className="led-success animate-pulse-glow" aria-hidden="true" />
            <span className="text-xs font-pixel text-semantic-success">ONLINE</span>
          </div>

          <ul className="flex items-center gap-[4px] list-none m-0 p-0 px-[4px]" role="list">
            {socialLinks.map(({ Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-[12px] rounded text-content-muted min-w-[44px] min-h-[44px] flex items-center justify-center
                    hover:text-brand hover:bg-brand-subtle
                    transition-all duration-micro"
                >
                  <Icon size={16} aria-hidden="true" strokeWidth={1.5} />
                </a>
              </li>
            ))}
            <li>
              <ShareButton />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
