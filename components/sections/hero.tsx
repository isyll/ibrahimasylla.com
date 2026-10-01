import {
  ArrowUpRight,
  EnvelopeSimple,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import type { CSSProperties } from "react";
import { Fragment } from "react";

import { SocialIcon } from "@/components/icons";
import { StackLayers } from "@/components/illustrations/stack-layers";
import { Container } from "@/components/layout/container";
import { siteConfig, socialLinks } from "@/config/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { pick } from "@/i18n/localized";

const delay = (seconds: number) =>
  ({ "--rise-delay": `${seconds}s` }) as CSSProperties;

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const names = siteConfig.name.split(" ");

  return (
    <section id="top" className="scroll-mt-16">
      <Container className="grid items-center gap-14 py-14 md:grid-cols-[1.1fr_1fr] md:gap-6 md:py-20 lg:min-h-[calc(100svh-4rem)]">
        <div>
          <p
            className="rise flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-muted-foreground text-xs uppercase tracking-[0.14em]"
            style={delay(0)}
          >
            <MapPin aria-hidden="true" weight="light" className="size-4" />
            <span>{pick(siteConfig.location, locale)}</span>
            <span aria-hidden="true" className="hidden text-border sm:inline">
              /
            </span>
            <span>{pick(siteConfig.coordinates, locale)}</span>
          </p>

          <h1
            className="rise mt-7 font-display text-[clamp(3.5rem,10vw,7.5rem)] leading-[0.9] tracking-[-0.03em]"
            style={delay(0.08)}
          >
            {names.map((name, index) => (
              <Fragment key={name}>
                {index > 0 && " "}
                <span className="block">{name}</span>
              </Fragment>
            ))}
          </h1>

          <p className="rise mt-8 flex items-center gap-4" style={delay(0.16)}>
            <span aria-hidden="true" className="h-px w-12 bg-brand" />
            <span className="font-display text-2xl text-brand italic sm:text-3xl">
              {pick(siteConfig.role, locale)}
            </span>
          </p>

          <div
            className="rise mt-10 flex flex-wrap items-center gap-3"
            style={delay(0.24)}
          >
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 font-medium text-background text-sm transition-opacity hover:opacity-85"
            >
              <EnvelopeSimple aria-hidden="true" className="size-4" />
              {dict.hero.email}
            </a>
            <a
              href={pick(siteConfig.resume, locale)}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-11 items-center gap-1.5 rounded-full border px-5 font-medium text-sm transition-colors hover:border-brand hover:text-brand"
            >
              {dict.hero.resume}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
            <ul className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={link.label}
                    className="inline-flex size-11 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:border-brand hover:text-brand"
                  >
                    <SocialIcon name={link.key} className="size-[1.05rem]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rise" style={delay(0.2)}>
          <StackLayers
            alt={dict.hero.layers.alt}
            labels={dict.hero.layers}
            className="mx-auto h-auto w-full max-w-[34rem]"
          />
        </div>
      </Container>
    </section>
  );
}
