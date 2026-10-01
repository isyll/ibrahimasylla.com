import type { Localized } from "@/i18n/localized";

import type { TechKey } from "./tech";

export interface SkillGroup {
  label: Localized;
  items: TechKey[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: { en: "Languages", fr: "Langages" },
    items: ["typescript", "javascript", "java", "php", "dart", "python"],
  },
  {
    label: { en: "Frontend", fr: "Frontend" },
    items: ["react", "nextjs", "angular", "tailwind"],
  },
  {
    label: { en: "Backend", fr: "Backend" },
    items: ["nodejs", "springboot", "laravel", "symfony", "django"],
  },
  {
    label: { en: "Mobile & foundations", fr: "Mobile & fondamentaux" },
    items: ["flutter", "rest", "networks", "git"],
  },
];
