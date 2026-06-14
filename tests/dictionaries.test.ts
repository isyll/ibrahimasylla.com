import { describe, expect, it } from "vitest";

import { en } from "@/i18n/dictionaries/en";
import { fr } from "@/i18n/dictionaries/fr";

function keyPaths(value: unknown, prefix = ""): string[] {
  if (Array.isArray(value)) {
    return [`${prefix}[len:${value.length}]`];
  }
  if (value === null || typeof value !== "object") {
    return [prefix];
  }
  return Object.entries(value as Record<string, unknown>)
    .flatMap(([key, child]) =>
      keyPaths(child, prefix ? `${prefix}.${key}` : key),
    )
    .sort();
}

describe("dictionaries", () => {
  it("en and fr expose the same key structure", () => {
    expect(keyPaths(fr)).toEqual(keyPaths(en));
  });

  it("has no empty string values", () => {
    const values: string[] = [];
    const collect = (value: unknown) => {
      if (typeof value === "string") values.push(value);
      else if (Array.isArray(value)) value.forEach(collect);
      else if (value && typeof value === "object")
        Object.values(value).forEach(collect);
    };
    collect(en);
    collect(fr);
    expect(values.every((value) => value.trim().length > 0)).toBe(true);
  });
});
