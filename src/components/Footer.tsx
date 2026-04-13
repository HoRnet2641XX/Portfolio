export function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 px-[24px] md:px-[48px] lg:px-[80px] py-[12px] z-10">
      <div className="flex items-center justify-between gap-[8px]">
        <p className="text-xs text-content-muted font-mono">
          &copy; {new Date().getFullYear()} Portfolio
        </p>
        <span className="text-xs font-mono text-content-muted tabular-nums">
          v1.0.0
        </span>
      </div>
    </footer>
  );
}
