import type { Localized } from "@/i18n/localized";

export interface Project {
  name: string;
  url: string;
  year: string;
  category: Localized;
  description: Localized;
  stack: string[];
}

export const projects: Project[] = [
  {
    name: "ibrahimasylla.com",
    url: "https://github.com/isyll/ibrahimasylla.com",
    year: "2026",
    category: { en: "Personal website", fr: "Site personnel" },
    description: {
      en: "This site. A static, bilingual, single-page site built with Next.js and exported as static HTML.",
      fr: "Ce site. Un site statique et bilingue, d’une seule page, construit avec Next.js et exporté en HTML statique.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Wave",
    url: "https://github.com/isyll/wave",
    year: "2024",
    category: { en: "Mobile application", fr: "Application mobile" },
    description: {
      en: "A faithful rebuild of the Wave money-transfer app, used to explore mobile interface patterns and state management in Flutter.",
      fr: "Une reconstruction fidèle de l’application de transfert d’argent Wave, pour explorer les patterns d’interface mobile et la gestion d’état avec Flutter.",
    },
    stack: ["Flutter", "Dart"],
  },
  {
    name: "VLSM Calculator",
    url: "https://github.com/isyll/vlsmcalculator",
    year: "2024",
    category: { en: "Web tool", fr: "Outil web" },
    description: {
      en: "A focused tool for planning IP address space with variable-length subnet masking, built for clarity over feature count.",
      fr: "Un outil dédié à la planification d’adressage IP par masquage de sous-réseau à longueur variable, pensé pour la clarté plutôt que pour le nombre de fonctionnalités.",
    },
    stack: ["React", "TypeScript"],
  },
];
