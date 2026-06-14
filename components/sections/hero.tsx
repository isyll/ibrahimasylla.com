import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { pick } from "@/i18n/localized";
import { cn } from "@/lib/utils";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const resume = pick(siteConfig.resume, locale);

  return (
    <section id="top" className="scroll-mt-24">
      <Container className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20 sm:py-28">
        <Reveal>
          <p className="inline-flex items-center gap-2.5 font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60 [animation-duration:2.5s] motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {dict.hero.availability}
          </p>
        </Reveal>

        <Reveal delay={0.06} className="mt-6">
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>
        </Reveal>

        <Reveal delay={0.12} className="mt-5">
          <p className="max-w-xl font-display text-xl text-balance text-muted-foreground sm:text-2xl">
            {dict.hero.statement}
          </p>
        </Reveal>

        <Reveal delay={0.18} className="mt-6">
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            {dict.hero.lead}
          </p>
        </Reveal>

        <Reveal delay={0.24} className="mt-9">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href="#contact"
              className={cn(buttonVariants({ size: "lg" }), "h-10 px-5")}
            >
              {dict.hero.ctaContact}
            </a>
            <a
              href="#work"
              className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              {dict.hero.ctaWork}
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {dict.hero.ctaResume}
              <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
