"use client";

import Link from "next/link";
import { Fragment, useEffect } from "react";

import { siteConfig } from "@/config/site";
import { isLocale, localeNames, locales } from "@/i18n/config";

export function LocaleRedirect({ fallback }: { fallback: string }) {
  useEffect(() => {
    const preferred = navigator.languages
      ?.map((value) => value.slice(0, 2).toLowerCase())
      .find((value) => isLocale(value));
    window.location.replace(preferred ? `/${preferred}` : fallback);
  }, [fallback]);

  return (
    <main className="flex flex-1 items-center justify-center px-6 py-20">
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {siteConfig.name}
        </p>
        <div className="mt-6 flex items-center justify-center gap-3 text-sm">
          {locales.map((value, index) => (
            <Fragment key={value}>
              {index > 0 && (
                <span aria-hidden="true" className="text-border">
                  ·
                </span>
              )}
              <Link
                href={`/${value}`}
                hrefLang={value}
                className="underline-offset-4 transition-colors hover:text-muted-foreground hover:underline"
              >
                {localeNames[value]}
              </Link>
            </Fragment>
          ))}
        </div>
      </div>
    </main>
  );
}
