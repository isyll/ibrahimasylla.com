import type { Localized } from "@/i18n/localized";

import type { TechKey } from "./tech";

export type ProjectCover = "modernize" | "site" | "wave" | "vlsm";

export interface Project {
  name: string;
  url: string;
  year: string;
  cover: ProjectCover;
  category: Localized;
  description: Localized;
  stack: TechKey[];
}

export const projects: Project[] = [
  {
    name: "dart_modernize",
    url: "https://github.com/isyll/dart_modernize",
    year: "2026",
    cover: "modernize",
    category: { en: "Developer tool", fr: "Outil pour développeurs" },
    description: {
      en: "Modernizes Dart and Flutter code automatically, without changing what it does.",
      fr: "Modernise automatiquement le code Dart et Flutter, sans changer son comportement.",
    },
    stack: ["dart", "flutter"],
  },
  {
    name: "ibrahimasylla.com",
    url: "https://github.com/isyll/ibrahimasylla.com",
    year: "2026",
    cover: "site",
    category: { en: "Personal website", fr: "Site personnel" },
    description: {
      en: "This site: static, bilingual, one page.",
      fr: "Ce site : statique, bilingue, une seule page.",
    },
    stack: ["nextjs", "typescript", "tailwind"],
  },
  {
    name: "Wave",
    url: "https://github.com/isyll/wave",
    year: "2024",
    cover: "wave",
    category: { en: "Mobile application", fr: "Application mobile" },
    description: {
      en: "A rebuild of the Wave money-transfer app.",
      fr: "Une reconstruction de l’application de transfert d’argent Wave.",
    },
    stack: ["flutter", "dart"],
  },
  {
    name: "VLSM Calculator",
    url: "https://github.com/isyll/vlsmcalculator",
    year: "2024",
    cover: "vlsm",
    category: { en: "Web tool", fr: "Outil web" },
    description: {
      en: "IP address planning with variable-length subnet masks.",
      fr: "Planification d’adressage IP par masques de sous-réseau variables.",
    },
    stack: ["react", "typescript"],
  },
];
