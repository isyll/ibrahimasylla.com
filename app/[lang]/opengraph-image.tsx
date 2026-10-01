import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";
import { isLocale, locales } from "@/i18n/config";
import { pick } from "@/i18n/localized";

export const dynamic = "force-static";
export const alt = "Ibrahima Sylla";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontFile = (style: "normal" | "italic") =>
  path.join(
    process.cwd(),
    "node_modules/@fontsource/newsreader/files",
    `newsreader-latin-400-${style}.woff`,
  );

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "en";
  const [regular, italic, portrait] = await Promise.all([
    readFile(fontFile("normal")),
    readFile(fontFile("italic")),
    readFile(path.join(process.cwd(), "public/images/portrait.jpg")),
  ]);
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;
  const domain = siteConfig.url.replace(/^https?:\/\//, "");
  const [first, ...rest] = siteConfig.name.split(" ");

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        position: "relative",
        backgroundColor: "#0a111a",
        color: "#efede7",
        fontFamily: "Newsreader",
        padding: 80,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        {/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative mark inside a generated image. */}
        <svg
          width="56"
          height="56"
          viewBox="0 0 32 32"
          fill="none"
          strokeWidth="3"
        >
          <rect width="32" height="32" rx="7" fill="#efede7" />
          <path stroke="#0a111a" d="M9 7V25" />
          <path
            stroke="#0a111a"
            d="M24.5 11.5A4.5 4.5 0 1 0 20 16A4.5 4.5 0 1 1 15.5 20.5"
          />
        </svg>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 132,
              lineHeight: 0.92,
              letterSpacing: -4,
            }}
          >
            <div style={{ display: "flex" }}>{first}</div>
            <div style={{ display: "flex" }}>{rest.join(" ")}</div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 32,
              fontSize: 46,
              fontStyle: "italic",
              color: "#76bbe2",
            }}
          >
            {pick(siteConfig.role, locale)}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#8d97a6",
          }}
        >
          {pick(siteConfig.location, locale)} · {domain}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          position: "relative",
          width: 360,
          height: 450,
          marginTop: 22,
          marginRight: 14,
        }}
      >
        <div
          style={{
            position: "absolute",
            display: "flex",
            top: 14,
            left: 14,
            width: 360,
            height: 450,
            border: "2px solid #76bbe2",
            borderRadius: 4,
            opacity: 0.6,
          }}
        />
        {/* biome-ignore lint/performance/noImgElement: ImageResponse renders plain img elements. */}
        <img
          src={portraitSrc}
          width={360}
          height={450}
          alt=""
          style={{ borderRadius: 4, objectFit: "cover", objectPosition: "top" }}
        />
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Newsreader", data: regular, style: "normal", weight: 400 },
        { name: "Newsreader", data: italic, style: "italic", weight: 400 },
      ],
    },
  );
}
