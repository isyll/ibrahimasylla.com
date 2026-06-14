import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

import { Container } from "./container";

export function Section({
  id,
  kicker,
  children,
  className,
  divider = true,
}: {
  id: string;
  kicker: string;
  children: ReactNode;
  className?: string;
  divider?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24", divider && "border-t border-border/70")}
    >
      <Container>
        <div
          className={cn(
            "grid gap-x-10 gap-y-6 py-16 sm:grid-cols-[7rem_1fr] sm:py-24 lg:grid-cols-[9rem_1fr]",
            className,
          )}
        >
          <div className="sm:pt-1.5">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {kicker}
              </p>
            </Reveal>
          </div>
          <div className="min-w-0">{children}</div>
        </div>
      </Container>
    </section>
  );
}

export function SectionTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-display text-2xl tracking-tight text-balance sm:text-3xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}
