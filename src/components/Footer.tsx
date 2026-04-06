export function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 px-[24px] md:px-[48px] lg:px-[80px] py-[12px] z-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-[8px]">
        <p className="text-[10px] text-content-muted font-mono">
          &copy; {new Date().getFullYear()} Portfolio
        </p>
        <div className="flex items-center gap-[12px]">
          <div className="flex items-center gap-[6px]">
            <span className="led animate-pulse-glow" aria-hidden="true" />
            <span className="text-[10px] font-pixel text-content-muted">
              OPEN TO WORK
            </span>
          </div>
          <span className="text-[10px] font-mono text-content-muted" aria-hidden="true">
            //
          </span>
          <span className="text-[10px] font-pixel text-content-muted">
            v1.0.0
          </span>
        </div>
      </div>
    </footer>
  );
}
