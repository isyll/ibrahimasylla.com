import type { Localized } from "@/i18n/localized";

export interface SkillGroup {
  label: Localized;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: { en: "Languages", fr: "Langages" },
    items: ["TypeScript", "JavaScript", "Java", "PHP", "Dart", "Python"],
  },
  {
    label: { en: "Frontend", fr: "Frontend" },
    items: ["React", "Next.js", "Angular", "Tailwind CSS"],
  },
  {
    label: { en: "Backend", fr: "Backend" },
    items: ["Node.js", "Spring Boot", "Laravel", "Symfony", "Django"],
  },
  {
    label: { en: "Mobile & foundations", fr: "Mobile & fondamentaux" },
    items: ["Flutter", "REST APIs", "Networks & systems", "Git"],
  },
];
