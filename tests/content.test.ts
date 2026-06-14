import { describe, expect, it } from "vitest";

import { education } from "@/content/education";
import { experiences } from "@/content/experience";
import { projects } from "@/content/projects";
import { skillGroups } from "@/content/skills";
import { pick } from "@/i18n/localized";

describe("pick", () => {
  it("returns the value for the requested locale", () => {
    const value = { en: "Hello", fr: "Bonjour" };
    expect(pick(value, "en")).toBe("Hello");
    expect(pick(value, "fr")).toBe("Bonjour");
  });
});

describe("content integrity", () => {
  it("experiences provide both locales for translated fields", () => {
    expect(experiences.length).toBeGreaterThan(0);
    for (const item of experiences) {
      expect(item.role.en).toBeTruthy();
      expect(item.role.fr).toBeTruthy();
      expect(item.description.en).toBeTruthy();
      expect(item.description.fr).toBeTruthy();
      expect(item.stack.length).toBeGreaterThan(0);
    }
  });

  it("projects link to absolute https URLs", () => {
    expect(projects.length).toBeGreaterThan(0);
    for (const project of projects) {
      expect(project.url).toMatch(/^https:\/\//);
    }
  });

  it("education and skills are populated", () => {
    expect(education.length).toBeGreaterThan(0);
    expect(skillGroups.every((group) => group.items.length > 0)).toBe(true);
  });
});
