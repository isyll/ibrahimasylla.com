import type { Metadata } from "next";

import { Document } from "@/components/document";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { baseMetadata, baseViewport } from "@/lib/metadata";

const dict = getDictionary(defaultLocale);

export const metadata: Metadata = {
  ...baseMetadata,
  title: dict.meta.title,
  description: dict.meta.description,
};

export const viewport = baseViewport;

export default function RedirectLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <Document lang={defaultLocale}>{children}</Document>;
}
