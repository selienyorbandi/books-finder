import { describe, beforeEach, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Navbar />;
      </MemoryRouter>
    );
  });
  afterEach(cleanup);

  it("should display logo", () => {
    expect(screen.getByAltText("Books Finder Logo")).toBeInTheDocument();
  });

  it("should display home link", () => {
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("should display find link", () => {
    expect(screen.getByText("Find")).toBeInTheDocument();
  });

  it("should display bookshelf link", () => {
    expect(screen.getByText("Bookshelf")).toBeInTheDocument();
  });

  it("should display sign in link", () => {
    expect(screen.getByText("Sign in")).toBeInTheDocument();
  });

  it("should display sign up button", () => {
    expect(screen.getByText("Sign up")).toBeInTheDocument();
  });
});
