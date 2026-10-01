import { describe, expect, it } from "vitest";

import { education } from "@/content/education";
import { experiences } from "@/content/experience";
import { projects } from "@/content/projects";
import { skillGroups } from "@/content/skills";
import { tech } from "@/content/tech";
import { locales } from "@/i18n/config";
import { pick } from "@/i18n/localized";
import { iso, polygon } from "@/lib/iso";

describe("pick", () => {
  it("returns the value for the requested locale", () => {
    const value = { en: "Hello", fr: "Bonjour" };
    expect(pick(value, "en")).toBe("Hello");
    expect(pick(value, "fr")).toBe("Bonjour");
  });
});

describe("content integrity", () => {
  it("experiences provide every locale for translated fields", () => {
    expect(experiences.length).toBeGreaterThan(0);
    for (const item of experiences) {
      for (const locale of locales) {
        expect(item.role[locale]).toBeTruthy();
        expect(item.period[locale]).toBeTruthy();
        expect(item.location[locale]).toBeTruthy();
        expect(item.arrangement[locale]).toBeTruthy();
        expect(item.description[locale]).toBeTruthy();
      }
      expect(item.stack.length).toBeGreaterThan(0);
    }
  });

  it("projects link to absolute https URLs", () => {
    expect(projects.length).toBeGreaterThan(0);
    for (const project of projects) {
      expect(project.url).toMatch(/^https:\/\//);
      for (const locale of locales) {
        expect(project.description[locale]).toBeTruthy();
        expect(project.category[locale]).toBeTruthy();
      }
    }
  });

  it("education and skills are populated", () => {
    expect(education.length).toBeGreaterThan(0);
    expect(skillGroups.every((group) => group.items.length > 0)).toBe(true);
  });

  it("every referenced technology is defined and has a visual", () => {
    const used = [
      ...experiences.flatMap((item) => item.stack),
      ...projects.flatMap((project) => project.stack),
      ...skillGroups.flatMap((group) => group.items),
    ];
    for (const key of used) {
      expect(tech).toHaveProperty(key);
      const entry: (typeof tech)[keyof typeof tech] = tech[key];
      expect("icon" in entry || "glyph" in entry).toBe(true);
    }
  });

  it("no technology is listed twice in the same group", () => {
    for (const group of skillGroups) {
      expect(new Set(group.items).size).toBe(group.items.length);
    }
  });
});

describe("isometric projection", () => {
  it("maps the origin to the origin and lifts points with z", () => {
    expect(iso([0, 0, 0])).toEqual([0, 0]);
    expect(iso([0, 0, 10])[1]).toBe(-10);
  });

  it("serializes polygon points", () => {
    expect(polygon([[0, 0]])).toBe("0,0");
  });
});
