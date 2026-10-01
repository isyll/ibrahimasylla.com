import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Container } from "./container";

export function Section({
  id,
  title,
  icon,
  children,
  className,
}: {
  id: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className="scroll-mt-16 border-t">
      <Container className="grid gap-8 py-16 md:grid-cols-[11rem_1fr] md:gap-12 md:py-24">
        <header>
          <div className="md:sticky md:top-28">
            <span className="text-brand">{icon}</span>
            <h2 className="mt-3 font-display text-3xl tracking-tight">
              {title}
            </h2>
          </div>
        </header>
        <div className={cn("min-w-0", className)}>{children}</div>
      </Container>
    </section>
  );
}
