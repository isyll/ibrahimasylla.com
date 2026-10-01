import { notFound } from "next/navigation";

import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Stack } from "@/components/sections/stack";
import { Work } from "@/components/sections/work";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <>
      <Hero locale={lang} dict={dict} />
      <About locale={lang} dict={dict} />
      <Experience locale={lang} dict={dict} />
      <Work locale={lang} dict={dict} />
      <Stack locale={lang} dict={dict} />
      <Education locale={lang} dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
