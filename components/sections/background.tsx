import { Section } from "@/components/layout/section";
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
    <Section
      id="background"
      index="04"
      kicker={dict.background.kicker}
      title={dict.background.title}
    >
      <Reveal>
        <h3 className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
          {dict.background.educationLabel}
        </h3>
      </Reveal>
      <ul className="mt-5 border-t border-border/60">
        {education.map((item) => (
          <li key={item.degree.en}>
            <Reveal>
              <div className="grid gap-x-8 gap-y-1 border-b border-border/60 py-4 sm:grid-cols-[9rem_1fr]">
                <span className="font-mono text-xs text-muted-foreground tabular-nums">
                  {pick(item.period, locale)}
                </span>
                <div className="min-w-0">
                  <p className="text-[0.95rem] font-medium">
                    {pick(item.degree, locale)}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.school}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal>
        <h3 className="mt-14 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
          {dict.background.toolkitLabel}
        </h3>
      </Reveal>
      <dl className="mt-5 border-t border-border/60">
        {skillGroups.map((group) => (
          <Reveal key={group.label.en}>
            <div className="grid gap-1 border-b border-border/60 py-4 sm:grid-cols-[9rem_1fr] sm:gap-8">
              <dt className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                {pick(group.label, locale)}
              </dt>
              <dd className="text-[0.95rem]">{group.items.join(", ")}</dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
