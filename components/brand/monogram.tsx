export function Monogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      fill="none"
      strokeWidth={3}
      className={className}
    >
      <rect width="32" height="32" rx="7" className="fill-foreground" />
      <path d="M9 7V25" className="stroke-background" />
      <path
        d="M24.5 11.5A4.5 4.5 0 1 0 20 16A4.5 4.5 0 1 1 15.5 20.5"
        className="stroke-background"
      />
    </svg>
  );
}
