import type { SimpleIcon } from "simple-icons";
import {
  siAngular,
  siDart,
  siDjango,
  siExpress,
  siFlutter,
  siGit,
  siJavascript,
  siLaravel,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPhp,
  siPython,
  siReact,
  siRedux,
  siSpringboot,
  siSymfony,
  siTailwindcss,
  siTypescript,
  siWordpress,
} from "simple-icons";

import type { Localized } from "@/i18n/localized";

export type TechGlyph = "api" | "network";

export interface Tech {
  label: Localized | string;
  icon?: SimpleIcon;
  glyph?: TechGlyph;
}

export const tech = {
  typescript: { label: "TypeScript", icon: siTypescript },
  javascript: { label: "JavaScript", icon: siJavascript },
  java: { label: "Java", icon: siOpenjdk },
  php: { label: "PHP", icon: siPhp },
  dart: { label: "Dart", icon: siDart },
  python: { label: "Python", icon: siPython },
  react: { label: "React", icon: siReact },
  nextjs: { label: "Next.js", icon: siNextdotjs },
  angular: { label: "Angular", icon: siAngular },
  tailwind: { label: "Tailwind CSS", icon: siTailwindcss },
  redux: { label: "Redux", icon: siRedux },
  nodejs: { label: "Node.js", icon: siNodedotjs },
  express: { label: "Express.js", icon: siExpress },
  springboot: { label: "Spring Boot", icon: siSpringboot },
  laravel: { label: "Laravel", icon: siLaravel },
  symfony: { label: "Symfony", icon: siSymfony },
  django: { label: "Django", icon: siDjango },
  wordpress: { label: "WordPress", icon: siWordpress },
  flutter: { label: "Flutter", icon: siFlutter },
  git: { label: "Git", icon: siGit },
  rest: { label: "REST APIs", glyph: "api" },
  networks: {
    label: { en: "Networks & systems", fr: "Réseaux & systèmes" },
    glyph: "network",
  },
} satisfies Record<string, Tech>;

export type TechKey = keyof typeof tech;
