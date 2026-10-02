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
  const domain = siteConfig.url.replace(/^https?:\/\/(www\.)?/, "");
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
        <svg width="56" height="56" viewBox="0 0 32 32">
          <title>Ibrahima Sylla</title>
          <defs>
            <clipPath id="disc">
              <circle cx="16" cy="16" r="16" />
            </clipPath>
          </defs>
          <circle cx="16" cy="16" r="16" fill="#223149" />
          <path
            clipPath="url(#disc)"
            d="M0 23C8 19.5 17 19.5 32 24.5V32H0Z"
            fill="#c6803c"
          />
          <path
            d="M18.5 5Q19.5 11.5 26 12.5Q19.5 13.5 18.5 20Q17.5 13.5 11 12.5Q17.5 11.5 18.5 5Z"
            fill="#f7f6f1"
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
