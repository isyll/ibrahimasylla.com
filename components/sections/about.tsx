import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/utils";

export function About({ dict }: { dict: Dictionary }) {
  return (
    <Section
      id="about"
      index="01"
      kicker={dict.about.kicker}
      title={dict.about.title}
    >
      <div className="max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-muted-foreground">
        {dict.about.paragraphs.map((paragraph, index) => (
          <Reveal key={index} delay={index * 0.04}>
            <p className={cn(index === 0 && "text-foreground")}>{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
