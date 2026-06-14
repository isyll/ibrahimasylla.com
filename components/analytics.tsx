import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { siteConfig } from "@/config/site";

export function SiteAnalytics() {
  return (
    <>
      <VercelAnalytics />
      <SpeedInsights />
      {siteConfig.gaId ? <GoogleAnalytics gaId={siteConfig.gaId} /> : null}
    </>
  );
}
