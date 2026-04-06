'use client';

import { Github, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  { Icon: Github, label: 'GitHub', href: 'https://github.com' },
  { Icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  { Icon: Mail, label: 'Email', href: 'mailto:hello@example.com' },
];

export function Header() {
  return (
    <header className="pt-[24px] pb-[12px] px-[24px] md:px-[48px] lg:px-[80px]">
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

        {/* Right side: status + socials */}
        <div className="flex items-center gap-[16px]">
          {/* Status indicator */}
          <div className="hidden sm:flex items-center gap-[8px] px-[12px] py-[6px] border border-border rounded bg-surface-raised">
            <span className="led-success animate-pulse-glow" aria-hidden="true" />
            <span className="text-xs font-pixel text-semantic-success">
              ONLINE
            </span>
          </div>

          {/* Social links */}
          <ul className="flex items-center gap-[4px] list-none m-0 p-0" role="list">
            {socialLinks.map(({ Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-[8px] rounded block text-content-muted
                    hover:text-brand hover:bg-brand-subtle
                    focus-visible:text-brand
                    transition-all duration-micro"
                >
                  <Icon size={16} aria-hidden="true" strokeWidth={1.5} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
