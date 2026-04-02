'use client';

import { Github, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  { Icon: Github, label: 'GitHub', href: 'https://github.com' },
  { Icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  { Icon: Mail, label: 'Email', href: 'mailto:hello@example.com' },
];

export function Header() {
  return (
    <header className="pt-[32px] pb-[16px] px-[24px] md:px-[48px] lg:px-[80px]">
      <nav className="flex items-center justify-between" aria-label="Main navigation">
        <a
          href="/"
          className="flex items-center gap-[12px] group transition-opacity duration-150 hover:opacity-80"
          aria-label="Portfolio home"
        >
          <div
            className="w-[32px] h-[32px] rounded-[8px] flex items-center justify-center
              bg-gradient-to-br from-brand to-brand-dark
              shadow-[0_4px_15px_rgba(255,140,50,0.3)]
              group-hover:shadow-[0_4px_20px_rgba(255,140,50,0.45)]
              transition-shadow duration-150"
          >
            <span className="text-xs text-white font-pixel font-bold">P</span>
          </div>
          <span className="text-lg text-content-primary font-display tracking-tight">
            Portfolio
          </span>
        </a>

        <ul className="flex items-center gap-[8px] list-none m-0 p-0" role="list">
          {socialLinks.map(({ Icon, label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-[8px] rounded-[8px] block text-content-tertiary
                  hover:text-brand hover:bg-brand-subtle
                  focus-visible:text-brand
                  transition-all duration-150"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
