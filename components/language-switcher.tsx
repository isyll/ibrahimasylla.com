"use client";

import Link from "next/link";
import { Fragment } from "react";

import { locales, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center gap-1.5 font-mono text-xs"
    >
      {locales.map((value, index) => (
        <Fragment key={value}>
          {index > 0 && (
            <span aria-hidden="true" className="text-border">
              /
            </span>
          )}
          <Link
            href={`/${value}`}
            hrefLang={value}
            aria-current={value === locale ? "true" : undefined}
            className={cn(
              "tracking-wide uppercase transition-colors",
              value === locale
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {value}
          </Link>
        </Fragment>
      ))}
    </div>
  );
}
