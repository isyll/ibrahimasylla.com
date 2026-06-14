import { ArrowUpRight } from "lucide-react";

import { SocialIcon } from "@/components/icons";
import { Section, SectionTitle } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig, socialLinks } from "@/config/site";
import type { Dictionary } from "@/i18n/get-dictionary";

export function Contact({ dict }: { dict: Dictionary }) {
  return (
    <Section id="contact" kicker={dict.contact.kicker}>
      <Reveal>
        <SectionTitle>{dict.contact.title}</SectionTitle>
      </Reveal>

      <Reveal>
        <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-muted-foreground">
          {dict.contact.body}
        </p>
      </Reveal>

      <Reveal>
        <a
          href={`mailto:${siteConfig.email}`}
          className="group mt-8 inline-flex items-center gap-2 font-display text-2xl tracking-tight transition-colors hover:text-muted-foreground sm:text-3xl"
        >
          {siteConfig.email}
          <ArrowUpRight className="size-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </Reveal>

      <Reveal>
        <div className="mt-12">
          <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            {dict.contact.elsewhere}
          </p>
          <ul className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
            {socialLinks
              .filter((link) => link.key !== "email")
              .map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <SocialIcon name={link.key} className="size-4" />
                    {link.label}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
