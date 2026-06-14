import { ArrowUpRight } from "lucide-react";

import { Section, SectionTitle } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";
import { projects } from "@/content/projects";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { pick } from "@/i18n/localized";

export function Work({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <Section id="work" kicker={dict.work.kicker}>
      <Reveal>
        <SectionTitle>{dict.work.title}</SectionTitle>
      </Reveal>

      <ul className="mt-8 sm:mt-10">
        {projects.map((project) => (
          <li key={project.name}>
            <Reveal>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group block border-t border-border/60 py-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="inline-flex items-center gap-1 text-base font-medium">
                    {project.name}
                    <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                  </h3>
                  <span className="font-mono text-xs tabular-nums text-muted-foreground">
                    {pick(project.category, locale)} · {project.year}
                  </span>
                </div>
                <p className="mt-3 max-w-prose text-[0.95rem] leading-relaxed text-muted-foreground">
                  {pick(project.description, locale)}
                </p>
                <p className="mt-3 font-mono text-xs text-muted-foreground/80">
                  {project.stack.join("  ·  ")}
                </p>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal>
        <p className="mt-8 border-t border-border/60 pt-6 text-sm text-muted-foreground">
          {dict.work.note}{" "}
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer noopener"
            className="text-foreground underline-offset-4 hover:underline"
          >
            {dict.work.viewGithub}
          </a>
        </p>
      </Reveal>
    </Section>
  );
}
