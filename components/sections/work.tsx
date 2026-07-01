import { ArrowUpRight } from "lucide-react";

import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";
import { projects } from "@/content/projects";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { pick } from "@/i18n/localized";

export function Work({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section
      id="work"
      index="03"
      kicker={dict.work.kicker}
      title={dict.work.title}
    >
      <ul className="border-t border-border/60">
        {projects.map((project) => (
          <li key={project.name}>
            <Reveal>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group grid gap-x-8 gap-y-3 border-b border-border/60 py-7 sm:grid-cols-[9rem_1fr]"
              >
                <div className="font-mono text-xs text-muted-foreground tabular-nums">
                  <span className="transition-colors group-hover:text-brand">
                    {project.year}
                  </span>
                  <span className="mt-1 block text-muted-foreground/70">
                    {pick(project.category, locale)}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="inline-flex items-center gap-1 text-base font-medium">
                    {project.name}
                    <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
                  </h3>
                  <p className="mt-3 max-w-prose text-[0.95rem] leading-relaxed text-muted-foreground">
                    {pick(project.description, locale)}
                  </p>
                  <p className="mt-4 font-mono text-xs text-muted-foreground/70">
                    {project.stack.join("  ·  ")}
                  </p>
                </div>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal>
        <p className="mt-8 text-sm text-muted-foreground">
          {dict.work.note}{" "}
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer noopener"
            className="hover-line text-foreground"
          >
            {dict.work.viewGithub}
          </a>
        </p>
      </Reveal>
    </Section>
  );
}
