import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

import { SiteAnalytics } from "@/components/analytics";
import { fontVariables } from "@/lib/fonts";

import "@/app/globals.css";

export function Document({
  lang,
  children,
}: {
  lang: string;
  children: ReactNode;
}) {
  return (
    <html lang={lang} suppressHydrationWarning className={fontVariables}>
      <body className="flex min-h-svh flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <SiteAnalytics />
      </body>
    </html>
  );
}
