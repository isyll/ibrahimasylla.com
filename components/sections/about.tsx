import { Section, SectionTitle } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import type { Dictionary } from "@/i18n/get-dictionary";

export function About({ dict }: { dict: Dictionary }) {
  return (
    <Section id="about" kicker={dict.about.kicker} divider={false}>
      <Reveal>
        <SectionTitle>{dict.about.title}</SectionTitle>
      </Reveal>
      <div className="mt-6 space-y-5 text-[1.05rem] leading-relaxed text-muted-foreground sm:mt-8">
        {dict.about.paragraphs.map((paragraph, index) => (
          <Reveal key={index} delay={index * 0.04}>
            <p>{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
