import { it, expect, describe } from "vitest";
import { render } from "@testing-library/react";
import { mockModule } from "../mocks/mockModule";
import { ModuleEdit } from "../../components/ModuleEdit";
import "@testing-library/jest-dom/vitest";

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
