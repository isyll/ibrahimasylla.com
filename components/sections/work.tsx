import { ArrowUpRight, SquaresFour } from "@phosphor-icons/react/dist/ssr";

import { ProjectCoverArt } from "@/components/illustrations/project-covers";
import { Section } from "@/components/layout/section";
import { TechChip } from "@/components/tech";
import { siteConfig } from "@/config/site";
import { projects } from "@/content/projects";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { pick } from "@/i18n/localized";

export function Work({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section
      id="work"
      title={dict.work.title}
      icon={
        <SquaresFour aria-hidden="true" weight="light" className="size-7" />
      }
    >
      <ul className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.name} className="flex">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex w-full flex-col overflow-hidden rounded-lg border bg-surface transition-colors hover:border-brand/60"
            >
              <div className="aspect-[8/5] border-b bg-muted text-foreground">
                <ProjectCoverArt cover={project.cover} />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="font-mono text-muted-foreground text-xs uppercase tracking-[0.14em]">
                  {pick(project.category, locale)} · {project.year}
                </p>
                <h3 className="mt-3 flex items-center justify-between gap-2 font-display text-2xl tracking-tight">
                  {project.name}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-brand"
                  />
                </h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  {pick(project.description, locale)}
                </p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-5">
                  {project.stack.map((key) => (
                    <li key={key}>
                      <TechChip name={key} locale={locale} />
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <a
        href={siteConfig.social.github}
        target="_blank"
        rel="noreferrer noopener"
        className="group mt-8 inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-brand"
      >
        {dict.work.github}
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    </Section>
  );
}
