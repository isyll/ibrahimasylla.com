import type { Localized } from "@/i18n/localized";

function normalizeUrl(url: string): string {
  return url.replace(/\/+$/, "");
}

export const siteConfig = {
  name: "Ibrahima Sylla",
  role: { en: "Software Developer", fr: "Développeur logiciel" } as Localized,
  location: { en: "Dakar, Senegal", fr: "Dakar, Sénégal" } as Localized,
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
  gaId: process.env.NEXT_PUBLIC_GA_ID,
};

export type SocialKey = "github" | "linkedin" | "x" | "email";

export const socialLinks: { key: SocialKey; label: string; href: string }[] = [
  { key: "github", label: "GitHub", href: siteConfig.social.github },
  { key: "linkedin", label: "LinkedIn", href: siteConfig.social.linkedin },
  { key: "x", label: "X", href: siteConfig.social.x },
  { key: "email", label: "Email", href: `mailto:${siteConfig.email}` },
];

export const sameAs = [
  siteConfig.social.github,
  siteConfig.social.linkedin,
  siteConfig.social.x,
];
