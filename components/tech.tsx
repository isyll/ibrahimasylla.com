import { ArrowsLeftRight, Graph } from "@phosphor-icons/react/dist/ssr";
import type { TechKey } from "@/content/tech";
import { tech } from "@/content/tech";
import type { Locale } from "@/i18n/config";
import { pick } from "@/i18n/localized";
import { cn } from "@/lib/utils";

export function techLabel(key: TechKey, locale: Locale): string {
  const { label } = tech[key];
  return typeof label === "string" ? label : pick(label, locale);
}

export function TechIcon({
  name,
  className,
}: {
  name: TechKey;
  className?: string;
}) {
  const entry: (typeof tech)[TechKey] = tech[name];

  if ("icon" in entry && entry.icon) {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="currentColor"
        className={cn("size-4 shrink-0", className)}
      >
        <path d={entry.icon.path} />
      </svg>
    );
  }

  const Glyph =
    "glyph" in entry && entry.glyph === "api" ? ArrowsLeftRight : Graph;
  return (
    <Glyph
      aria-hidden="true"
      weight="light"
      className={cn("size-4 shrink-0", className)}
    />
  );
}

export function TechChip({
  name,
  locale,
  className,
}: {
  name: TechKey;
  locale: Locale;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border bg-surface px-2.5 py-1 text-muted-foreground text-xs",
        className,
      )}
    >
      <TechIcon name={name} className="size-3.5 text-foreground/80" />
      {techLabel(name, locale)}
    </span>
  );
}
