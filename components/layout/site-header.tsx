import Link from "next/link";

import { Monogram } from "@/components/brand/monogram";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

import { Container } from "./container";
import type { NavItem } from "./mobile-nav";
import { MobileNav } from "./mobile-nav";

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const items: NavItem[] = [
    { href: "#about", label: dict.nav.about },
    { href: "#experience", label: dict.nav.experience },
    { href: "#work", label: dict.nav.work },
    { href: "#stack", label: dict.nav.stack },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href={`/${locale}`}
          aria-label={siteConfig.name}
          className="inline-flex items-center gap-3"
        >
          <Monogram className="size-7 shrink-0" />
          <span className="hidden font-display text-lg tracking-tight sm:inline">
            {siteConfig.name}
          </span>
        </Link>

        <nav
          aria-label={dict.nav.label}
          className="hidden items-center gap-7 md:flex"
        >
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-muted-foreground text-xs uppercase tracking-[0.14em] transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} label={dict.language.label} />
          <span aria-hidden="true" className="h-4 w-px bg-border" />
          <ThemeToggle label={dict.theme.label} />
          <MobileNav
            items={items}
            label={dict.nav.label}
            menuLabel={dict.nav.menu}
          />
        </div>
      </Container>
    </header>
  );
}
