import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Stack } from "@/components/sections/stack";
import { Work } from "@/components/sections/work";
import { siteConfig } from "@/config/site";
import { experiences } from "@/content/experience";
import { projects } from "@/content/projects";
import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

describe.each(locales)("sections (%s)", (locale) => {
  const dict = getDictionary(locale);

  it("Hero renders the name and the layered illustration", () => {
    render(<Hero locale={locale} dict={dict} />);
    expect(
      screen.getByRole("heading", { level: 1, name: siteConfig.name }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: dict.hero.layers.alt }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: dict.hero.email })).toHaveAttribute(
      "href",
      `mailto:${siteConfig.email}`,
    );
  });

  it("About renders its heading and portrait", () => {
    render(<About locale={locale} dict={dict} />);
    expect(
      screen.getByRole("heading", { name: dict.about.title }),
    ).toBeInTheDocument();
    expect(screen.getByAltText(dict.about.portraitAlt)).toBeInTheDocument();
  });

  it("Experience lists every position", () => {
    render(<Experience locale={locale} dict={dict} />);
    const entries = screen.getAllByRole("heading", { level: 3 });
    expect(entries).toHaveLength(experiences.length);
  });

  it("Work links every project", () => {
    render(<Work locale={locale} dict={dict} />);
    for (const project of projects) {
      const heading = screen.getByRole("heading", { name: project.name });
      expect(heading.closest("a")).toHaveAttribute("href", project.url);
    }
  });

  it("Stack groups its tools with icons", () => {
    const { container } = render(<Stack locale={locale} dict={dict} />);
    expect(container.querySelectorAll("li svg").length).toBeGreaterThan(10);
  });

  it("Education renders its heading", () => {
    render(<Education locale={locale} dict={dict} />);
    expect(
      screen.getByRole("heading", { name: dict.education.title }),
    ).toBeInTheDocument();
  });

  it("Contact exposes the email and every social link", () => {
    render(<Contact dict={dict} />);
    expect(
      screen.getByRole("link", { name: new RegExp(siteConfig.email) }),
    ).toHaveAttribute("href", `mailto:${siteConfig.email}`);
    const list = screen.getAllByRole("list")[0];
    expect(within(list).getAllByRole("link")).toHaveLength(3);
  });
});
