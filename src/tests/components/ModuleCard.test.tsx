import { it, expect, describe } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { mockModule } from "../mocks/mockModule";
import { ModuleCard } from "../../components/ModuleCard";
import "@testing-library/jest-dom/vitest";

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
