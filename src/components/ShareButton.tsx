'use client';

import { useState, useCallback } from 'react';
import { Link2, Check, Share2 } from 'lucide-react';
import { site } from '@/data/site';

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  const share = useCallback(async () => {
    const url = site.url;

    // Prefer native share sheet on mobile
    if (typeof navigator.share === 'function') {
      try {
        await navigator.share({ title: site.name, url });
        return;
      } catch {
        // User cancelled or not supported — fall through to clipboard
      }
    }

    // Clipboard fallback
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API blocked — do nothing
    }
  }, []);

  return (
    <button
      onClick={share}
      aria-label={copied ? 'コピーしました' : 'ポートフォリオの URL をコピー'}
      className="relative p-[8px] rounded block text-content-muted
        hover:text-brand hover:bg-brand-subtle
        focus-visible:text-brand
        transition-all duration-micro cursor-pointer"
    >
      {copied ? (
        <Check size={16} className="text-semantic-success" aria-hidden="true" strokeWidth={2} />
      ) : (
        <>
          {/* Show share icon on mobile, link icon on desktop */}
          <Share2 size={16} aria-hidden="true" strokeWidth={1.5} className="sm:hidden" />
          <Link2 size={16} aria-hidden="true" strokeWidth={1.5} className="hidden sm:block" />
        </>
      )}

      {/* Toast — desktop only */}
      {copied && (
        <span className="absolute -bottom-[28px] left-1/2 -translate-x-1/2 whitespace-nowrap px-[8px] py-[3px] rounded-sm text-[10px] font-pixel bg-surface-raised border border-border text-semantic-success pointer-events-none">
          Copied!
        </span>
      )}
    </button>
  );
}
