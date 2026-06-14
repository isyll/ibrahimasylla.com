import { ArrowUpRight } from "lucide-react";

import { Section, SectionTitle } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { experiences } from "@/content/experience";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { pick } from "@/i18n/localized";

export function Experience({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <Section id="experience" kicker={dict.experience.kicker}>
      <Reveal>
        <SectionTitle>{dict.experience.title}</SectionTitle>
      </Reveal>

      <ol className="mt-8 sm:mt-10">
        {experiences.map((item) => (
          <li key={item.company}>
            <Reveal>
              <article className="border-t border-border/60 py-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base font-medium">
                    {pick(item.role, locale)}
                    <span className="text-muted-foreground"> · </span>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group inline-flex items-center gap-0.5 text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item.company}
                        <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                      </a>
                    ) : (
                      <span className="text-muted-foreground">
                        {item.company}
                      </span>
                    )}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums">
                    {pick(item.period, locale)}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {pick(item.location, locale)}
                  <span className="text-border"> · </span>
                  {pick(item.arrangement, locale)}
                </p>
                <p className="mt-3 max-w-prose text-[0.95rem] leading-relaxed text-muted-foreground">
                  {pick(item.description, locale)}
                </p>
                <p className="mt-3 font-mono text-xs text-muted-foreground/80">
                  {item.stack.join("  ·  ")}
                </p>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
