import { useId } from "react";

export function Monogram({ className }: { className?: string }) {
  const clipId = useId();

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <defs>
        <clipPath id={clipId}>
          <circle cx="16" cy="16" r="16" />
        </clipPath>
      </defs>
      <circle cx="16" cy="16" r="16" className="fill-[var(--sky)]" />
      <path
        clipPath={`url(#${clipId})`}
        d="M0 23C8 19.5 17 19.5 32 24.5V32H0Z"
        className="fill-ochre"
      />
      <path
        d="M18.5 5Q19.5 11.5 26 12.5Q19.5 13.5 18.5 20Q17.5 13.5 11 12.5Q17.5 11.5 18.5 5Z"
        className="fill-[#f7f6f1]"
      />
    </svg>
  );
}
