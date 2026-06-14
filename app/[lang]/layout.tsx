import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { LangSync } from "@/components/lang-sync";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/config/site";
import { isLocale, localeMeta, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dict = getDictionary(lang);
  const path = `/${lang}`;

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: path,
      languages: { en: "/en", fr: "/fr", "x-default": "/en" },
    },
    openGraph: {
      url: `${siteConfig.url}${path}`,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: localeMeta[lang].ogLocale,
      alternateLocale: locales
        .filter((value) => value !== lang)
        .map((value) => localeMeta[value].ogLocale),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <>
      <LangSync locale={lang} />
      <JsonLd locale={lang} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:border focus:border-border focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:shadow-sm"
      >
        {dict.skipToContent}
      </a>
      <SiteHeader locale={lang} dict={dict} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter dict={dict} />
    </>
  );
}
