import { ArrowUpRight, Briefcase } from "@phosphor-icons/react/dist/ssr";

import { Section } from "@/components/layout/section";
import { TechChip } from "@/components/tech";
import { experiences } from "@/content/experience";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { pick } from "@/i18n/localized";
import { cn } from "@/lib/utils";

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
      title={dict.experience.title}
      icon={<Briefcase aria-hidden="true" weight="light" className="size-7" />}
    >
      <ol className="border-l">
        {experiences.map((item, index) => (
          <li key={item.company} className="relative pb-12 pl-8 last:pb-0">
            <span
              aria-hidden="true"
              className={cn(
                "absolute top-1.5 -left-[5px] size-[9px] rounded-full border border-brand",
                index === 0 ? "bg-brand" : "bg-background",
              )}
            />
            <p className="font-mono text-muted-foreground text-xs tabular-nums">
              {pick(item.period, locale)}
            </p>
            <h3 className="mt-1.5 font-medium text-lg">
              {pick(item.role, locale)}
              <span className="text-muted-foreground"> · </span>
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-0.5 text-muted-foreground transition-colors hover:text-brand"
                >
                  {item.company}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </a>
              ) : (
                <span className="text-muted-foreground">{item.company}</span>
              )}
            </h3>
            <p className="mt-1 text-muted-foreground text-sm">
              {pick(item.location, locale)}
              <span aria-hidden="true"> · </span>
              {pick(item.arrangement, locale)}
            </p>
            <p className="mt-3 max-w-prose text-[0.95rem] leading-relaxed">
              {pick(item.description, locale)}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.stack.map((key) => (
                <li key={key}>
                  <TechChip name={key} locale={locale} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
