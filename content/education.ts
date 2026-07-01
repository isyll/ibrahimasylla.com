import type { Localized } from "@/i18n/localized";

export interface Education {
  degree: Localized;
  school: string;
  period: Localized;
  location: Localized;
}

export const education: Education[] = [
  {
    degree: {
      en: "Master’s in Software Engineering",
      fr: "Master en génie logiciel",
    },
    school: "Institut Supérieur d’Informatique (ISI)",
    period: { en: "2024 to 2026", fr: "2024 à 2026" },
    location: { en: "Dakar, Senegal", fr: "Dakar, Sénégal" },
  },
  {
    degree: {
      en: "Bachelor’s in Network Administration & Management",
      fr: "Licence en administration et gestion des réseaux",
    },
    school: "Institut Polytechnique de Dakar · Thomas Sankara",
    period: { en: "2023 to 2024", fr: "2023 à 2024" },
    location: { en: "Dakar, Senegal", fr: "Dakar, Sénégal" },
  },
  {
    degree: {
      en: "Professional Certificate, Web & Mobile Development",
      fr: "Certificat professionnel, développement web & mobile",
    },
    school: "Sonatel Academy",
    period: { en: "2023", fr: "2023" },
    location: { en: "Dakar, Senegal", fr: "Dakar, Sénégal" },
  },
  {
    degree: {
      en: "Advanced Technician Diploma, Network Administration & Management",
      fr: "DTS en administration et gestion des réseaux",
    },
    school: "Institut Polytechnique de Dakar · Thomas Sankara",
    period: { en: "2020 to 2022", fr: "2020 à 2022" },
    location: { en: "Dakar, Senegal", fr: "Dakar, Sénégal" },
  },
];
