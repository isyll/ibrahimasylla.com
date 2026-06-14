import type { Locale } from "./config";
import { en } from "./dictionaries/en";
import { fr } from "./dictionaries/fr";

export type { Dictionary } from "./dictionaries/en";

const dictionaries = { en, fr } as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
