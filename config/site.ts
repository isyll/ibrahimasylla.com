import type { Localized } from "@/i18n/localized";

function normalizeUrl(url: string): string {
  return url.replace(/\/+$/, "");
}

export const siteConfig = {
  name: "Ibrahima Sylla",
  role: { en: "Software Developer", fr: "Développeur logiciel" } as Localized,
  location: { en: "Dakar, Senegal", fr: "Dakar, Sénégal" } as Localized,
  coordinates: {
    en: "14°41′ N · 17°27′ W",
    fr: "14°41′ N · 17°27′ O",
  } as Localized,
  url: normalizeUrl(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibrahimasylla.com",
  ),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "isyll711@gmail.com",
  resume: {
    en: "/cv/ibrahima-sylla-en.pdf",
    fr: "/cv/ibrahima-sylla-fr.pdf",
  } as Localized,
  social: {
    github: "https://github.com/isyll",
    linkedin: "https://www.linkedin.com/in/ibrahima-sylla-9931a61ba/",
    x: "https://x.com/ibrahimasylla_",
  },
  twitterHandle: "@ibrahimasylla_",
  gaId: process.env.NEXT_PUBLIC_GA_ID,
};

export type SocialKey = "github" | "linkedin" | "x";

export const socialLinks: { key: SocialKey; label: string; href: string }[] = [
  { key: "github", label: "GitHub", href: siteConfig.social.github },
  { key: "linkedin", label: "LinkedIn", href: siteConfig.social.linkedin },
  { key: "x", label: "X", href: siteConfig.social.x },
];

export const sameAs = socialLinks.map((link) => link.href);
