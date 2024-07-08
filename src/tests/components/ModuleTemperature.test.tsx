import { it, expect, describe } from "vitest";
import { render } from "@testing-library/react";
import { mockModule } from "../mocks/mockModule";
import { ModuleTemperature } from "../../components/ModuleTemperature";
import "@testing-library/jest-dom/vitest";

describe("Module Temperature", () => {
  it("should make temperature text red", () => {
    const result = render(
      <ModuleTemperature module={mockModule} temperature={11} />
    );
    const temperatureText = result.container.querySelector("#temp");

    expect(temperatureText).toBeInTheDocument();
    expect(temperatureText?.className).toContain("text-red-500");
  });

  it("should make temperature text green", () => {
    const result = render(
      <ModuleTemperature module={mockModule} temperature={10.2} />
    );
    const temperatureText = result.container.querySelector("#temp");

    expect(temperatureText).toBeInTheDocument();
    expect(temperatureText?.className).toContain("text-emerald-500");
  });
});
