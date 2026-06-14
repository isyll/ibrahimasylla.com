import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/utils";

export default function NotFound() {
  const dict = getDictionary(defaultLocale);

  return (
    <main className="flex flex-1 items-center justify-center px-6 py-20">
      <div className="max-w-md text-center">
        <p className="font-mono text-sm text-muted-foreground">404</p>
        <h1 className="mt-4 font-display text-3xl tracking-tight">
          {dict.notFound.title}
        </h1>
        <p className="mt-3 text-muted-foreground">{dict.notFound.body}</p>
        <Link
          href={`/${defaultLocale}`}
          className={cn(buttonVariants(), "mt-8 h-10 px-5")}
        >
          {dict.notFound.home}
        </Link>
      </div>
    </main>
  );
}
