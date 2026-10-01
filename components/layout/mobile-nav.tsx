import { List } from "@phosphor-icons/react/dist/ssr";

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
  return (
    <details className="relative md:hidden">
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
