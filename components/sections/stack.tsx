import { Stack as StackIcon } from "@phosphor-icons/react/dist/ssr";

import { Section } from "@/components/layout/section";
import { TechIcon, techLabel } from "@/components/tech";
import { skillGroups } from "@/content/skills";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { pick } from "@/i18n/localized";

export function Stack({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section
      id="stack"
      title={dict.stack.title}
      icon={<StackIcon aria-hidden="true" weight="light" className="size-7" />}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <section
            key={group.label.en}
            className="rounded-lg border bg-surface p-5"
          >
            <h3 className="font-mono text-muted-foreground text-xs uppercase tracking-[0.14em]">
              {pick(group.label, locale)}
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3.5">
              {group.items.map((key) => (
                <li key={key} className="flex items-center gap-2.5 text-sm">
                  <TechIcon name={key} className="size-5 text-foreground/80" />
                  {techLabel(key, locale)}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  );
}
