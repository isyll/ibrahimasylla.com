import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pick } from "@/i18n/localized";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamic = "force-static";
export const alt = "Ibrahima Sylla · Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const dict = getDictionary(locale);
  const domain = siteConfig.url.replace(/^https?:\/\//, "");

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#0b0f14",
        color: "#fafafb",
        padding: 88,
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 26,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: "#8a93a1",
        }}
      >
        {pick(siteConfig.role, locale)} · {siteConfig.location[locale]}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            width: 72,
            height: 6,
            marginBottom: 34,
            backgroundColor: "#2c5cf6",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 120,
            fontWeight: 700,
            letterSpacing: -3,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 34,
            color: "#c2c8d2",
          }}
        >
          {dict.hero.statement}
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 26, color: "#8a93a1" }}>
        {domain}
      </div>
    </div>,
    { ...size },
  );
}
