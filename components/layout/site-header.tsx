"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "@/components/layout/container";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/utils";

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { href: "#about", label: dict.nav.about },
    { href: "#experience", label: dict.nav.experience },
    { href: "#work", label: dict.nav.work },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href={`/${locale}`}
          className="group inline-flex items-center gap-2.5"
        >
          <span className="grid size-7 place-items-center rounded-sm bg-brand font-mono text-[0.7rem] font-semibold text-brand-foreground">
            {siteConfig.initials}
          </span>
          <span className="font-display text-sm font-medium tracking-tight transition-opacity group-hover:opacity-70">
            {siteConfig.name}
          </span>
        </Link>

        <nav
          aria-label={dict.nav.label}
          className="hidden items-center gap-7 sm:flex"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover-line font-mono text-xs tracking-[0.15em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} label={dict.language.label} />
          <span aria-hidden="true" className="h-4 w-px bg-border" />
          <ThemeToggle label={dict.theme.label} />
        </div>
      </Container>
    </header>
  );
}
