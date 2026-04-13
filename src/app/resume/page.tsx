import type { Metadata } from 'next';
import Link from 'next/link';
import { about, skillCategories, timeline } from '@/data/profile';
import { portfolioData } from '@/data/portfolio';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Resume',
  description: `${about.name} — ${about.role}`,
};

const featured = portfolioData.filter((p) => p.featured).slice(0, 4);

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-surface-base text-content-primary">
      {/* Top nav */}
      <header className="px-[24px] md:px-[48px] py-[16px] flex items-center justify-between print:hidden">
        <Link
          href="/"
          className="text-sm font-pixel text-content-muted hover:text-brand transition-colors"
        >
          &larr; ポートフォリオに戻る
        </Link>
        <button
          onClick={undefined}
          className="text-xs font-pixel text-brand border border-border-brand bg-brand-subtle px-[16px] py-[8px] rounded-sm hover:bg-brand hover:text-white transition-all duration-micro cursor-pointer print:hidden"
          // onClick handled client-side via the inline script below
          id="print-btn"
        >
          PDF / 印刷
        </button>
      </header>

      {/* A4-ish container */}
      <main className="max-w-[800px] mx-auto px-[32px] md:px-[48px] py-[32px] md:py-[48px]">
        {/* ── Header block ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-[16px] mb-[32px] pb-[20px] border-b border-border">
          <div>
            <h1 className="text-3xl md:text-4xl font-body font-bold text-content-primary mb-[4px]">
              {about.name}
            </h1>
            <p className="text-sm md:text-base font-pixel text-brand">{about.role}</p>
          </div>
          <div className="text-xs font-mono text-content-tertiary text-right space-y-[4px]">
            <div>{about.location}</div>
            <div>{site.socials.email}</div>
            <div className="text-content-muted">{site.url.replace(/^https?:\/\//, '')}</div>
          </div>
        </div>

        {/* ── Summary ── */}
        <section className="mb-[28px]">
          <h2 className="text-xs font-pixel text-brand uppercase tracking-wider mb-[10px]">
            SUMMARY
          </h2>
          {about.bio.map((p, i) => (
            <p
              key={i}
              className="text-sm text-content-secondary font-body leading-relaxed mb-[8px]"
            >
              {p}
            </p>
          ))}
        </section>

        {/* ── Skills ── */}
        <section className="mb-[28px]">
          <h2 className="text-xs font-pixel text-brand uppercase tracking-wider mb-[10px]">
            SKILLS
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-[12px]">
            {skillCategories.map((cat) => (
              <div key={cat.name}>
                <h3 className="text-xs font-pixel text-content-muted mb-[6px]">
                  {cat.label}
                </h3>
                <ul className="space-y-[2px]">
                  {cat.skills.map((s) => (
                    <li
                      key={s.name}
                      className="text-xs font-body text-content-secondary flex items-center justify-between gap-[4px]"
                    >
                      <span className="truncate">{s.name}</span>
                      <span className="font-mono text-[10px] text-brand shrink-0">
                        {'●'.repeat(s.level)}
                        <span className="text-content-muted/30">{'○'.repeat(5 - s.level)}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="mb-[28px]">
          <h2 className="text-xs font-pixel text-brand uppercase tracking-wider mb-[10px]">
            EXPERIENCE
          </h2>
          <div className="space-y-[14px]">
            {timeline.map((entry) => (
              <div key={entry.year} className="flex gap-[14px]">
                <span className="text-xs font-mono text-brand tabular-nums shrink-0 pt-[2px]">
                  {entry.year}
                </span>
                <div>
                  <h3 className="text-sm font-body font-medium text-content-primary">
                    {entry.title}
                  </h3>
                  <p className="text-xs text-content-secondary font-body leading-relaxed">
                    {entry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Featured projects ── */}
        <section className="mb-[28px]">
          <h2 className="text-xs font-pixel text-brand uppercase tracking-wider mb-[10px]">
            FEATURED PROJECTS
          </h2>
          <div className="space-y-[12px]">
            {featured.map((p) => (
              <div
                key={p.id}
                className="flex items-start gap-[14px] border border-border rounded-lg p-[12px] bg-surface-raised"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-[8px] mb-[4px]">
                    <h3 className="text-sm font-body font-medium text-content-primary truncate">
                      {p.title}
                    </h3>
                    <span className="text-[10px] font-mono text-content-muted shrink-0">
                      {p.year}
                    </span>
                  </div>
                  <p className="text-xs text-content-secondary font-body line-clamp-2">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-[4px] mt-[6px]">
                    {p.tags.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-[5px] py-[1px] rounded-sm text-[10px] font-mono text-content-muted border border-border-subtle"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="pt-[16px] border-t border-border-subtle text-center">
          <p className="text-[10px] font-mono text-content-muted">
            Full portfolio: {site.url.replace(/^https?:\/\//, '')}
          </p>
        </footer>
      </main>

      {/* Print trigger script */}
      <script
        id="print-trigger"
        dangerouslySetInnerHTML={{
          __html: `document.getElementById('print-btn')?.addEventListener('click',function(){window.print()})`,
        }}
      />
    </div>
  );
}
