"use client";

import { List } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useRef } from "react";

export interface NavItem {
  href: string;
  label: string;
}

export function MobileNav({
  items,
  label,
  menuLabel,
}: {
  items: NavItem[];
  label: string;
  menuLabel: string;
}) {
  const details = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const close = () => details.current?.removeAttribute("open");
    const onPointerDown = (event: PointerEvent) => {
      if (!details.current?.contains(event.target as Node)) close();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <details ref={details} className="relative md:hidden">
      <summary
        aria-label={menuLabel}
        className="flex size-8 cursor-pointer list-none items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground [&::-webkit-details-marker]:hidden"
      >
        <List aria-hidden="true" weight="light" className="size-5" />
      </summary>
      <nav
        aria-label={label}
        className="absolute top-10 right-0 w-48 rounded-lg border bg-surface p-2 shadow-sm"
      >
        <ul>
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => details.current?.removeAttribute("open")}
                className="block rounded-md px-3 py-2 font-mono text-muted-foreground text-xs uppercase tracking-[0.14em] transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
