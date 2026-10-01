import {
  Briefcase,
  Code,
  Compass,
  MapPin,
  User,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

import { Section } from "@/components/layout/section";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { pick } from "@/i18n/localized";

export function About({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const facts = [
    {
      Icon: MapPin,
      label: dict.about.location,
      value: pick(siteConfig.location, locale),
    },
    {
      Icon: Briefcase,
      label: dict.about.current,
      value: dict.about.currentValue,
    },
    {
      Icon: Compass,
      label: dict.about.origin,
      value: dict.about.originValue,
    },
    { Icon: Code, label: dict.about.focus, value: dict.about.focusValue },
  ];

  return (
    <Section
      id="about"
      title={dict.about.title}
      icon={<User aria-hidden="true" weight="light" className="size-7" />}
    >
      <div className="grid gap-12 sm:grid-cols-[14rem_1fr] sm:items-center">
        <figure className="relative w-56 max-w-full">
          <span
            aria-hidden="true"
            className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-sm border border-brand/60"
          />
          <Image
            src="/images/portrait.jpg"
            alt={dict.about.portraitAlt}
            width={800}
            height={800}
            sizes="14rem"
            className="relative aspect-[4/5] w-full rounded-sm bg-muted object-cover object-top"
          />
        </figure>

        <dl className="divide-y border-y">
          {facts.map(({ Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4 py-4">
              <Icon
                aria-hidden="true"
                weight="light"
                className="mt-0.5 size-5 shrink-0 text-brand"
              />
              <div>
                <dt className="font-mono text-muted-foreground text-xs uppercase tracking-[0.14em]">
                  {label}
                </dt>
                <dd className="mt-1">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
