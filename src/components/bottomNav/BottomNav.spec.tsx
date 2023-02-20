import { describe, beforeEach, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BottomNav from "./BottomNav";
import { MemoryRouter } from "react-router-dom";

describe("BottomNav", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <BottomNav />
      </MemoryRouter>
    );
  });
  afterEach(cleanup);

  it("should display Home link", () => {
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
  it("should display Home icon", () => {
    expect(screen.getByAltText("Home icon")).toBeInTheDocument();
  });

  it("should display Find link", () => {
    expect(screen.getByText("Find")).toBeInTheDocument();
  });
  it("should display Find icon", () => {
    expect(screen.getByAltText("Find icon")).toBeInTheDocument();
  });

  it("should display Bookshelf link", () => {
    expect(screen.getByText("Bookshelf")).toBeInTheDocument();
  });
  it("should display Bookshelf icon", () => {
    expect(screen.getByAltText("Bookshelf icon")).toBeInTheDocument();
  });

  it("should display User link", () => {
    expect(screen.getByText("User")).toBeInTheDocument();
  });
  it("should display User icon", () => {
    expect(screen.getByAltText("User icon")).toBeInTheDocument();
  });
});
