import { ArrowUpRight } from "lucide-react";

import { Section } from "@/components/layout/section";
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
    <Section
      id="experience"
      index="02"
      kicker={dict.experience.kicker}
      title={dict.experience.title}
    >
      <ol className="border-t border-border/60">
        {experiences.map((item) => (
          <li key={item.company}>
            <Reveal>
              <article className="group grid gap-x-8 gap-y-3 border-b border-border/60 py-7 sm:grid-cols-[9rem_1fr]">
                <div className="font-mono text-xs text-muted-foreground tabular-nums transition-colors group-hover:text-brand">
                  {pick(item.period, locale)}
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-medium">
                    {pick(item.role, locale)}
                    <span className="text-muted-foreground"> · </span>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group/link inline-flex items-center gap-0.5 text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item.company}
                        <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover/link:opacity-100" />
                      </a>
                    ) : (
                      <span className="text-muted-foreground">
                        {item.company}
                      </span>
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {pick(item.location, locale)}
                    <span className="text-border"> · </span>
                    {pick(item.arrangement, locale)}
                  </p>
                  <p className="mt-3 max-w-prose text-[0.95rem] leading-relaxed text-muted-foreground">
                    {pick(item.description, locale)}
                  </p>
                  <p className="mt-4 font-mono text-xs text-muted-foreground/70">
                    {item.stack.join("  ·  ")}
                  </p>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
