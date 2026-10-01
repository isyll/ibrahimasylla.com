import { GraduationCap } from "@phosphor-icons/react/dist/ssr";

import { Section } from "@/components/layout/section";
import { education } from "@/content/education";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { pick } from "@/i18n/localized";

export function Education({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <Section
      id="education"
      title={dict.education.title}
      icon={
        <GraduationCap aria-hidden="true" weight="light" className="size-7" />
      }
    >
      <ul className="divide-y border-y">
        {education.map((item) => (
          <li
            key={item.degree.en}
            className="grid gap-x-8 gap-y-1 py-5 sm:grid-cols-[9rem_1fr]"
          >
            <span className="font-mono text-muted-foreground text-xs tabular-nums sm:pt-1">
              {pick(item.period, locale)}
            </span>
            <div>
              <p className="font-medium">{pick(item.degree, locale)}</p>
              <p className="mt-0.5 text-muted-foreground text-sm">
                {item.school}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
