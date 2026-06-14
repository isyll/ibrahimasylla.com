import { ArrowUp } from "lucide-react";

import { SocialIcon } from "@/components/icons";
import { Container } from "@/components/layout/container";
import { siteConfig, socialLinks } from "@/config/site";
import type { Dictionary } from "@/i18n/get-dictionary";

export function SiteFooter({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1.5">
          <p className="text-sm text-foreground">{dict.footer.colophon}</p>
          <p className="text-xs text-muted-foreground">
            © {year} {siteConfig.name}. {dict.footer.rights}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <ul className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  {...(link.key === "email"
                    ? {}
                    : { target: "_blank", rel: "noreferrer noopener" })}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <SocialIcon name={link.key} className="size-[1.05rem]" />
                </a>
              </li>
            ))}
          </ul>
          <span aria-hidden="true" className="h-4 w-px bg-border" />
          <a
            href="#top"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            {dict.footer.backToTop}
            <ArrowUp className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
