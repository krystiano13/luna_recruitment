import { it, expect, describe } from "vitest";
import { render } from "@testing-library/react";
import { ModuleEdit } from "../../components/ModuleEdit";
import "@testing-library/jest-dom/vitest";

const mockModule = {
  id: "0a0f77eb1-50a0-4d98-8116-064fc5a84693",
  name: "Hydroponic module 1",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nullam non nisi est sit amet.",
  available: true,
  targetTemperature: 10.0,
};

describe("Module Edit", () => {
  it("should make default values empty", () => {
    const result = render(
      <ModuleEdit module={null} update={() => {}} close={() => {}} />
    );
    const inputs = result.container.querySelectorAll("input");
    const textarea = result.container.querySelector("textarea");

    inputs.forEach((item) => {
      expect(item.defaultValue).toBe("");
    });

    expect(textarea?.value).toBe("");
  });

  it("should set all default values", () => {
    const result = render(
      <ModuleEdit module={mockModule} update={() => {}} close={() => {}} />
    );
    const inputs = result.container.querySelectorAll("input");
    const textarea = result.container.querySelector("textarea");

    inputs.forEach((item) => {
      expect(item.defaultValue).not.toBe("");
    });

    expect(textarea?.value).not.toBe("");
  });
});
