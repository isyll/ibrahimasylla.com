import { Section, SectionTitle } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { education } from "@/content/education";
import { skillGroups } from "@/content/skills";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { pick } from "@/i18n/localized";

export function Background({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <Section id="background" kicker={dict.background.kicker}>
      <Reveal>
        <SectionTitle>{dict.background.title}</SectionTitle>
      </Reveal>

      <div className="mt-8 sm:mt-10">
        <Reveal>
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {dict.background.educationLabel}
          </h3>
        </Reveal>
        <ul className="mt-4">
          {education.map((item) => (
            <li key={item.degree.en}>
              <Reveal>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 border-t border-border/60 py-4">
                  <div className="min-w-0">
                    <p className="text-[0.95rem] font-medium">
                      {pick(item.degree, locale)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.school}
                    </p>
                  </div>
                  <span className="font-mono text-xs tabular-nums text-muted-foreground">
                    {item.period}
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <h3 className="mt-12 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {dict.background.toolkitLabel}
          </h3>
        </Reveal>
        <dl className="mt-4 space-y-4">
          {skillGroups.map((group) => (
            <Reveal key={group.label.en}>
              <div className="grid gap-1 border-t border-border/60 py-3 sm:grid-cols-[8rem_1fr] sm:gap-4">
                <dt className="text-sm text-muted-foreground">
                  {pick(group.label, locale)}
                </dt>
                <dd className="text-[0.95rem]">{group.items.join(", ")}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </Section>
  );
}
