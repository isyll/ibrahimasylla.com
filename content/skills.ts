import type { Localized } from "@/i18n/localized";

import type { TechKey } from "./tech";

export interface SkillGroup {
  label: Localized;
  items: TechKey[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: { en: "Languages", fr: "Langages" },
    items: ["typescript", "javascript", "go", "java", "dart", "python"],
  },
  {
    label: { en: "Frontend & mobile", fr: "Frontend & mobile" },
    items: ["react", "nextjs", "angular", "tailwind", "flutter"],
  },
  {
    label: { en: "Backend", fr: "Backend" },
    items: [
      "gin",
      "gorm",
      "huma",
      "springboot",
      "nodejs",
      "laravel",
      "symfony",
      "django",
    ],
  },
  {
    label: {
      en: "Data & infrastructure",
      fr: "Données & infrastructure",
    },
    items: ["postgresql", "redis", "docker", "grpc", "rest", "networks", "git"],
  },
];
