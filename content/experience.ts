import type { Localized } from "@/i18n/localized";

export interface Experience {
  company: string;
  url?: string;
  role: Localized;
  period: Localized;
  location: Localized;
  arrangement: Localized;
  description: Localized;
  stack: string[];
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
      en: "Building professional web and mobile applications across a broad range of technologies, from internal tools to client-facing products.",
      fr: "Conception d’applications web et mobiles professionnelles sur un large éventail de technologies, des outils internes aux produits destinés aux clients.",
    },
    stack: ["Next.js", "React", "Django"],
  },
  {
    company: "Dscale",
    role: { en: "Web Developer", fr: "Développeur web" },
    period: { en: "2024", fr: "2024" },
    location: { en: "Dubai, UAE", fr: "Dubaï, Émirats arabes unis" },
    arrangement: { en: "Freelance · Remote", fr: "Freelance · À distance" },
    description: {
      en: "Designed and shipped modern marketing sites with Next.js and CMS-driven content for an international agency.",
      fr: "Conception et mise en ligne de sites vitrines modernes avec Next.js et des contenus pilotés par CMS pour une agence internationale.",
    },
    stack: ["Next.js", "React", "WordPress"],
  },
  {
    company: "Groupe Sonatel",
    url: "https://www.sonatel.sn",
    role: { en: "Full-stack Developer", fr: "Développeur full-stack" },
    period: { en: "2023 to 2024", fr: "2023 à 2024" },
    location: { en: "Dakar, Senegal", fr: "Dakar, Sénégal" },
    arrangement: { en: "Internship · On-site", fr: "Stage · Sur site" },
    description: {
      en: "Developed internal enterprise applications for the group’s teams on a microservices architecture exposed through REST APIs.",
      fr: "Développement d’applications d’entreprise internes pour les équipes du groupe, sur une architecture microservices exposée via des API REST.",
    },
    stack: ["Symfony", "Laravel", "Angular"],
  },
  {
    company: "Kati360",
    role: { en: "React Developer", fr: "Développeur React" },
    period: { en: "2024", fr: "2024" },
    location: { en: "Dakar, Senegal", fr: "Dakar, Sénégal" },
    arrangement: { en: "Internship · Remote", fr: "Stage · À distance" },
    description: {
      en: "Built fast, reliable e-commerce interfaces with the React ecosystem.",
      fr: "Développement d’interfaces e-commerce rapides et fiables avec l’écosystème React.",
    },
    stack: ["React", "Redux", "Express.js"],
  },
];
