import { it, expect, describe } from "vitest";
import { render } from "@testing-library/react";
import { ModuleTemperature } from "../../components/ModuleTemperature";
import "@testing-library/jest-dom/vitest";

const mockModule = {
  id: "0a0f77eb1-50a0-4d98-8116-064fc5a84693",
  name: "Hydroponic module 1",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nullam non nisi est sit amet.",
  available: true,
  targetTemperature: 10.0,
};

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
