import type { Localized } from "@/i18n/localized";

import type { TechKey } from "./tech";

export interface Experience {
  company: string;
  url?: string;
  role: Localized;
  period: Localized;
  location: Localized;
  arrangement: Localized;
  description: Localized;
  stack: TechKey[];
}

export const experiences: Experience[] = [
  {
    company: "Soft Valley Labs",
    url: "https://softvalleylabs.com",
    role: { en: "Software Developer", fr: "Développeur logiciel" },
    period: { en: "2024 to Present", fr: "2024 à aujourd’hui" },
    location: { en: "Dakar, Senegal", fr: "Dakar, Sénégal" },
    arrangement: { en: "Full-time · On-site", fr: "Temps plein · Sur site" },
    description: {
      en: "Web and mobile applications, from internal tools to client products.",
      fr: "Applications web et mobiles, des outils internes aux produits clients.",
    },
    stack: ["nextjs", "react", "django"],
  },
  {
    company: "Dscale",
    role: { en: "Web Developer", fr: "Développeur web" },
    period: { en: "2024", fr: "2024" },
    location: { en: "Dubai, UAE", fr: "Dubaï, Émirats arabes unis" },
    arrangement: { en: "Freelance · Remote", fr: "Freelance · À distance" },
    description: {
      en: "Marketing sites with Next.js and a CMS for an international agency.",
      fr: "Sites vitrines avec Next.js et un CMS pour une agence internationale.",
    },
    stack: ["nextjs", "react", "wordpress"],
  },
  {
    company: "Kati360",
    role: { en: "React Developer", fr: "Développeur React" },
    period: { en: "2024", fr: "2024" },
    location: { en: "Dakar, Senegal", fr: "Dakar, Sénégal" },
    arrangement: { en: "Internship · Remote", fr: "Stage · À distance" },
    description: {
      en: "E-commerce interfaces built with React.",
      fr: "Interfaces e-commerce développées avec React.",
    },
    stack: ["react", "redux", "express"],
  },
  {
    company: "Groupe Sonatel",
    url: "https://www.sonatel.sn",
    role: { en: "Full-stack Developer", fr: "Développeur full-stack" },
    period: { en: "2023 to 2024", fr: "2023 à 2024" },
    location: { en: "Dakar, Senegal", fr: "Dakar, Sénégal" },
    arrangement: { en: "Internship · On-site", fr: "Stage · Sur site" },
    description: {
      en: "Internal enterprise applications on a REST microservices architecture.",
      fr: "Applications d’entreprise internes sur une architecture microservices REST.",
    },
    stack: ["symfony", "laravel", "angular"],
  },
];
