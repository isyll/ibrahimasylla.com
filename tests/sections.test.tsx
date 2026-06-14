import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { getDictionary } from "@/i18n/get-dictionary";

const dict = getDictionary("en");

describe("sections", () => {
  it("About renders its heading", () => {
    render(<About dict={dict} />);
    expect(
      screen.getByRole("heading", { name: dict.about.title }),
    ).toBeInTheDocument();
  });

  it("Contact exposes a mailto link", () => {
    render(<Contact dict={dict} />);
    const link = screen.getByRole("link", { name: /isyll711@gmail\.com/ });
    expect(link).toHaveAttribute("href", "mailto:isyll711@gmail.com");
  });
});
