import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

import { Container } from "./container";

export function Section({
  id,
  index,
  kicker,
  title,
  children,
  className,
}: {
  id: string;
  index: string;
  kicker: string;
  title: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border">
      <Container className="py-16 sm:py-24">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] uppercase">
            <span className="text-brand">{index}</span>
            <span aria-hidden="true" className="text-border">
              /
            </span>
            <span className="text-muted-foreground">{kicker}</span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
        </Reveal>
        <div className={cn("mt-10 sm:mt-14", className)}>{children}</div>
      </Container>
    </section>
  );
}
