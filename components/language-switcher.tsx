"use client";

import Link from "next/link";

import { LocaleFlag } from "@/components/icons";
import { localeNames, locales, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  return (
    <div role="group" aria-label={label} className="flex items-center gap-2.5">
      {locales.map((value) => {
        const active = value === locale;
        return (
          <Link
            key={value}
            href={`/${value}`}
            hrefLang={value}
            aria-current={active ? "true" : undefined}
            title={localeNames[value]}
            className={cn(
              "relative flex items-center rounded-[3px] transition-opacity",
              active ? "opacity-100" : "opacity-40 hover:opacity-100",
            )}
          >
            <span className="sr-only">{localeNames[value]}</span>
            <span className="block h-3.5 overflow-hidden rounded-[3px] ring-1 ring-border/70">
              <LocaleFlag locale={value} className="block h-full w-auto" />
            </span>
            {active && (
              <span
                aria-hidden="true"
                className="absolute -bottom-1.5 left-1/2 h-0.5 w-3.5 -translate-x-1/2 rounded-full bg-brand"
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}
