import { ArrowUpRight, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

import { SocialIcon } from "@/components/icons";
import { Section } from "@/components/layout/section";
import { siteConfig, socialLinks } from "@/config/site";
import type { Dictionary } from "@/i18n/get-dictionary";

export function Contact({ dict }: { dict: Dictionary }) {
  return (
    <Section
      id="contact"
      title={dict.contact.title}
      icon={
        <EnvelopeSimple aria-hidden="true" weight="light" className="size-7" />
      }
    >
      <div className="grid gap-12 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <a
            href={`mailto:${siteConfig.email}`}
            className="group inline-flex flex-wrap items-center gap-3 font-display text-3xl tracking-tight underline decoration-border underline-offset-8 transition-colors hover:decoration-brand sm:text-5xl"
          >
            {siteConfig.email}
            <ArrowUpRight
              aria-hidden="true"
              className="size-6 text-brand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:size-8"
            />
          </a>

          <ul className="mt-10 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex h-10 items-center gap-2 rounded-full border px-4 text-muted-foreground text-sm transition-colors hover:border-brand hover:text-brand"
                >
                  <SocialIcon name={link.key} className="size-4" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <figure className="w-44 max-w-full sm:w-52">
          <Image
            src="/images/horizon.webp"
            alt={dict.contact.horizonAlt}
            width={460}
            height={460}
            sizes="13rem"
            className="aspect-square w-full rounded-sm bg-muted object-cover"
          />
        </figure>
      </div>
    </Section>
  );
}
