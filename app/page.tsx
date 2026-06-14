import type { Metadata } from "next";

import { LocaleRedirect } from "@/components/locale-redirect";
import { defaultLocale } from "@/i18n/config";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: `/${defaultLocale}` },
};

export default function RootPage() {
  return <LocaleRedirect fallback={`/${defaultLocale}`} />;
}
