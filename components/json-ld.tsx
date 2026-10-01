import { sameAs, siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";
import { pick } from "@/i18n/localized";

export function JsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: `${siteConfig.url}/${locale}`,
    image: `${siteConfig.url}/images/portrait.jpg`,
    email: `mailto:${siteConfig.email}`,
    jobTitle: pick(siteConfig.role, locale),
    worksFor: { "@type": "Organization", name: "Soft Valley Labs" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dakar",
      addressCountry: "SN",
    },
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is serialized from static, trusted data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
