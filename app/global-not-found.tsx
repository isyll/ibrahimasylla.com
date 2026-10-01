import type { Metadata } from "next";
import Link from "next/link";

import { Document } from "@/components/document";
import { defaultLocale, localeNames, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export const metadata: Metadata = {
  title: getDictionary(defaultLocale).notFound.title,
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <Document lang={defaultLocale}>
      <main className="flex flex-1 items-center justify-center px-6 py-20">
        <div className="max-w-md space-y-12 text-center">
          {locales.map((locale) => {
            const dict = getDictionary(locale);
            return (
              <div key={locale} lang={locale}>
                <p className="font-mono text-muted-foreground text-sm">404</p>
                <h1 className="mt-3 font-display text-3xl tracking-tight">
                  {dict.notFound.title}
                </h1>
                <p className="mt-3 text-muted-foreground">
                  {dict.notFound.body}
                </p>
                <Link
                  href={`/${locale}`}
                  hrefLang={locale}
                  className="mt-6 inline-flex h-10 items-center rounded-full bg-foreground px-5 font-medium text-background text-sm transition-opacity hover:opacity-85"
                >
                  {dict.notFound.home} · {localeNames[locale]}
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </Document>
  );
}
