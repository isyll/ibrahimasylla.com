import { ArrowUp } from "@phosphor-icons/react/dist/ssr";

import { Monogram } from "@/components/brand/monogram";
import { SocialIcon } from "@/components/icons";
import { siteConfig, socialLinks } from "@/config/site";
import type { Dictionary } from "@/i18n/get-dictionary";

import { Container } from "./container";

export function SiteFooter({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <Container className="flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-start gap-4">
          <Monogram className="mt-0.5 size-8 shrink-0" />
          <div>
            <p className="text-sm">{dict.footer.colophon}</p>
            <p className="mt-1 text-muted-foreground text-xs">
              {dict.footer.typefaces}
            </p>
            <p className="mt-1 font-mono text-muted-foreground text-xs">
              © {year} {siteConfig.name}. {dict.footer.rights}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <ul className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-muted-foreground transition-colors hover:text-brand"
                >
                  <SocialIcon name={link.key} className="size-4" />
                </a>
              </li>
            ))}
          </ul>
          <span aria-hidden="true" className="h-4 w-px bg-border" />
          <a
            href="#top"
            className="inline-flex items-center gap-1 font-mono text-muted-foreground text-xs uppercase tracking-wide transition-colors hover:text-foreground"
          >
            {dict.footer.backToTop}
            <ArrowUp aria-hidden="true" className="size-3.5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
