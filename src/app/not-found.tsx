export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-base">
      <div className="text-center">
        <h1 className="text-5xl font-display font-bold text-brand mb-[16px]">404</h1>
        <p className="text-lg text-content-secondary mb-[32px]">Page not found</p>
        <a
          href="/"
          className="px-[24px] py-[12px] rounded-[8px] text-sm font-display font-medium
            bg-brand text-white hover:bg-brand-dark transition-colors duration-150 inline-block"
        >
          Back to Portfolio
        </a>
      </div>
    </div>
  );
}
