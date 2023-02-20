import { describe, beforeEach, afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loader from "./Loader";

describe("Loader", () => {
  beforeEach(() => {
    render(<Loader />);
  });

  afterEach(cleanup);

  it("should display", () => {
    const loader = document.querySelector(".loader");
    expect(loader).toBeDefined();
  });
});
