import type { SVGProps } from "react";
import { siGithub, siX } from "simple-icons";

import type { SocialKey } from "@/config/site";
import type { Locale } from "@/i18n/config";

type IconProps = SVGProps<SVGSVGElement>;

const LINKEDIN_PATH =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z";

const socialPaths: Record<SocialKey, string> = {
  github: siGithub.path,
  linkedin: LINKEDIN_PATH,
  x: siX.path,
};

export function SocialIcon({
  name,
  className,
}: {
  name: SocialKey;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      className={className}
    >
      <path d={socialPaths[name]} />
    </svg>
  );
}

function FlagFR(props: IconProps) {
  return (
    <svg viewBox="0 0 3 2" aria-hidden="true" {...props}>
      <rect width="3" height="2" fill="#f5f5f5" />
      <rect width="1" height="2" fill="#0050a4" />
      <rect x="2" width="1" height="2" fill="#e1000f" />
    </svg>
  );
}

function FlagEN(props: IconProps) {
  return (
    <svg viewBox="0 0 60 30" aria-hidden="true" {...props}>
      <clipPath id="flag-en-frame">
        <path d="M0 0v30h60V0z" />
      </clipPath>
      <clipPath id="flag-en-quad">
        <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
      </clipPath>
      <g clipPath="url(#flag-en-frame)">
        <path d="M0 0v30h60V0z" fill="#012169" />
        <path d="M0 0 60 30M60 0 0 30" stroke="#fff" strokeWidth="6" />
        <path
          d="M0 0 60 30M60 0 0 30"
          clipPath="url(#flag-en-quad)"
          stroke="#c8102e"
          strokeWidth="4"
        />
        <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
        <path d="M30 0v30M0 15h60" stroke="#c8102e" strokeWidth="6" />
      </g>
    </svg>
  );
}

const flags: Record<Locale, (props: IconProps) => React.ReactNode> = {
  en: (props) => <FlagEN {...props} />,
  fr: (props) => <FlagFR {...props} />,
};

export function LocaleFlag({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  return flags[locale]({ className });
}
