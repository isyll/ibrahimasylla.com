import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Document } from "@/components/document";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/config/site";
import { isLocale, localeMeta, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { baseMetadata, baseViewport } from "@/lib/metadata";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export const viewport = baseViewport;

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
    ...baseMetadata,
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: path,
      languages: { en: "/en", fr: "/fr", "x-default": "/en" },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      url: `${siteConfig.url}${path}`,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: localeMeta[lang].ogLocale,
      alternateLocale: locales
        .filter((value) => value !== lang)
        .map((value) => localeMeta[value].ogLocale),
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      creator: siteConfig.twitterHandle,
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
    <Document lang={localeMeta[lang].htmlLang}>
      <JsonLd locale={lang} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:border focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:shadow-sm"
      >
        {dict.skipToContent}
      </a>
      <SiteHeader locale={lang} dict={dict} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter dict={dict} />
    </Document>
  );
}
