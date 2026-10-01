import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const dict = getDictionary(defaultLocale);

  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: dict.meta.description,
    start_url: `/${defaultLocale}`,
    display: "standalone",
    background_color: "#f7f6f1",
    theme_color: "#f7f6f1",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
