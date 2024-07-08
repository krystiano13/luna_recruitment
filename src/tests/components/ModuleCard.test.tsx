import { it, expect, describe } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { ModuleCard } from "../../components/ModuleCard";
import "@testing-library/jest-dom/vitest";

const mockModule = {
  id: "0a0f77eb1-50a0-4d98-8116-064fc5a84693",
  name: "Hydroponic module 1",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nullam non nisi est sit amet.",
  available: true,
  targetTemperature: 10.0,
};

describe("Module Card", () => {
  it("Should make actual temperature number red", () => {
    const result = render(
      <BrowserRouter>
        <ModuleCard
          module={mockModule}
          temperature={{ id: mockModule.id, temperature: 20 }}
        />
      </BrowserRouter>
    );

    const tempSpan = result.container.querySelector("#actual_temp");

    expect(tempSpan).toBeInTheDocument();
    expect(tempSpan?.className).toContain("text-red-500");
  });

  it("Should make actual temperature number green", () => {
    const result = render(
      <BrowserRouter>
        <ModuleCard
          module={mockModule}
          temperature={{ id: mockModule.id, temperature: 10.1 }}
        />
      </BrowserRouter>
    );

    const tempSpan = result.container.querySelector("#actual_temp");

    expect(tempSpan).toBeInTheDocument();
    expect(tempSpan?.className).toContain("text-emerald-500");
  });
});
