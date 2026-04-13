import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-surface-base px-[24px] relative overflow-hidden">
      {/* Background ghost text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="text-[clamp(200px,40vw,500px)] font-pixel text-brand/[0.03] leading-none">
          404
        </span>
      </div>

      <div className="relative text-center max-w-md">
        {/* Terminal-style error */}
        <div className="mb-[32px] text-left inline-block w-full">
          <div className="flex items-center gap-[8px] mb-[12px]">
            <span className="w-[6px] h-[6px] rounded-full bg-semantic-error" aria-hidden="true" />
            <span className="text-xs font-mono text-content-muted">
              <span className="text-semantic-error">ERR</span> page_not_found
            </span>
          </div>
          <div className="p-[16px] border border-border rounded bg-surface-raised">
            <code className="text-xs font-mono text-content-secondary block leading-relaxed">
              <span className="text-brand">$</span> cat ./requested-page<br />
              <span className="text-semantic-error">error:</span> No such file or directory<br />
              <span className="text-content-muted">exit code 404</span>
            </code>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-pixel text-content-primary mb-[12px]">
          ページが見つかりません
        </h1>
        <p className="text-sm text-content-secondary font-body leading-relaxed mb-[32px]">
          お探しのページは移動または削除された可能性があります。
        </p>

        <a
          href="/"
          className="inline-flex items-center gap-[8px] px-[24px] py-[14px] rounded-sm
            bg-brand text-white font-pixel text-sm tracking-wider border border-brand
            hover:bg-brand-dark hover:shadow-[0_0_20px_rgba(255,140,50,0.3)]
            transition-all duration-normal"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          ポートフォリオに戻る
        </a>
      </div>
    </div>
  );
}
