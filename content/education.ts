import type { Localized } from "@/i18n/localized";

export interface Education {
  degree: Localized;
  school: string;
  period: string;
  location: Localized;
}

export const education: Education[] = [
  {
    degree: {
      en: "Master’s in Software Engineering",
      fr: "Master en génie logiciel",
    },
    school: "Institut Supérieur d’Informatique (ISI)",
    period: "2024 — 2026",
    location: { en: "Dakar, Senegal", fr: "Dakar, Sénégal" },
  },
  {
    degree: {
      en: "Bachelor’s in Network Administration & Management",
      fr: "Licence en administration et gestion des réseaux",
    },
    school: "Institut Polytechnique de Dakar — Thomas Sankara",
    period: "2023 — 2024",
    location: { en: "Dakar, Senegal", fr: "Dakar, Sénégal" },
  },
  {
    degree: {
      en: "Professional Certificate, Web & Mobile Development",
      fr: "Certificat professionnel, développement web & mobile",
    },
    school: "Sonatel Academy",
    period: "2023",
    location: { en: "Dakar, Senegal", fr: "Dakar, Sénégal" },
  },
  {
    degree: {
      en: "Advanced Technician Diploma, Network Administration & Management",
      fr: "DTS en administration et gestion des réseaux",
    },
    school: "Institut Polytechnique de Dakar — Thomas Sankara",
    period: "2020 — 2022",
    location: { en: "Dakar, Senegal", fr: "Dakar, Sénégal" },
  },
];
