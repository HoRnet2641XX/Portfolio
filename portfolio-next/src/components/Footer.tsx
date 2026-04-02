export function Footer() {
  return (
    <footer className="px-[24px] md:px-[48px] lg:px-[80px] py-[48px]">
      <div
        className="h-px w-full mb-[32px]
          bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />
      <div className="flex flex-col md:flex-row items-center justify-between gap-[16px]">
        <p className="text-xs text-content-muted font-mono">
          &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
        <div className="flex items-center gap-[8px]">
          <div
            className="w-[6px] h-[6px] rounded-full bg-brand
              shadow-[0_0_6px_rgba(255,140,50,0.4)]"
            aria-hidden="true"
          />
          <span className="text-xs text-content-muted font-pixel">
            Open to work
          </span>
        </div>
      </div>
    </footer>
  );
}
