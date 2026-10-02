import type { SimpleIcon } from "simple-icons";
import {
  siAngular,
  siDart,
  siDjango,
  siDocker,
  siExpress,
  siFlutter,
  siGin,
  siGit,
  siGo,
  siJavascript,
  siLaravel,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPostgresql,
  siPython,
  siReact,
  siRedis,
  siRedux,
  siSpringboot,
  siSymfony,
  siTailwindcss,
  siTypescript,
  siWordpress,
} from "simple-icons";

import type { Localized } from "@/i18n/localized";

export type TechGlyph = "api" | "network" | "orm" | "framework" | "rpc";

export interface Tech {
  label: Localized | string;
  icon?: SimpleIcon;
  glyph?: TechGlyph;
}

export const tech = {
  typescript: { label: "TypeScript", icon: siTypescript },
  javascript: { label: "JavaScript", icon: siJavascript },
  java: { label: "Java", icon: siOpenjdk },
  go: { label: "Go", icon: siGo },
  dart: { label: "Dart", icon: siDart },
  python: { label: "Python", icon: siPython },
  react: { label: "React", icon: siReact },
  nextjs: { label: "Next.js", icon: siNextdotjs },
  angular: { label: "Angular", icon: siAngular },
  tailwind: { label: "Tailwind CSS", icon: siTailwindcss },
  redux: { label: "Redux", icon: siRedux },
  nodejs: { label: "Node.js", icon: siNodedotjs },
  express: { label: "Express.js", icon: siExpress },
  gin: { label: "Gin", icon: siGin },
  gorm: { label: "GORM", glyph: "orm" },
  huma: { label: "Huma v2", glyph: "framework" },
  springboot: { label: "Spring Boot", icon: siSpringboot },
  laravel: { label: "Laravel", icon: siLaravel },
  symfony: { label: "Symfony", icon: siSymfony },
  django: { label: "Django", icon: siDjango },
  wordpress: { label: "WordPress", icon: siWordpress },
  flutter: { label: "Flutter", icon: siFlutter },
  postgresql: { label: "PostgreSQL", icon: siPostgresql },
  redis: { label: "Redis", icon: siRedis },
  docker: { label: "Docker", icon: siDocker },
  grpc: { label: "gRPC", glyph: "rpc" },
  git: { label: "Git", icon: siGit },
  rest: { label: "REST APIs", glyph: "api" },
  networks: {
    label: { en: "Networks & systems", fr: "Réseaux & systèmes" },
    glyph: "network",
  },
} satisfies Record<string, Tech>;

export type TechKey = keyof typeof tech;
