import { describe, beforeEach, afterEach, vi, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Paginator from "./Paginator";

describe("Paginator if currentPage is not 0", () => {
  const mockPaginatorProps = {
    currentPage: 1,
    totalItems: 100,
    itemsPerPage: 10,
    onPageChange: vi.fn(),
    siblingCount: 1,
  };

  beforeEach(() => {
    render(
      <Paginator
        currentPage={mockPaginatorProps.currentPage}
        itemsPerPage={mockPaginatorProps.itemsPerPage}
        totalItems={mockPaginatorProps.totalItems}
        siblingCount={mockPaginatorProps.siblingCount}
        onPageChange={mockPaginatorProps.onPageChange}
      />
    );
  });

  afterEach(cleanup);

  it("should display previous page button", () => {
    expect(screen.getByRole("previous-page")).toBeInTheDocument();
  });

  it("should display next page button", () => {
    expect(screen.getByRole("next-page")).toBeInTheDocument();
  });

  it("should display page numbers", () => {
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("should display page dots", () => {
    expect(screen.getByText("…")).toBeInTheDocument();
  });

  it("should call onPageChange when next page button is clicked", () => {
    const nextPageButton = screen.getByRole("next-page");
    fireEvent.click(nextPageButton);
    expect(mockPaginatorProps.onPageChange).toHaveBeenCalledWith(2);
  });

  it("should call onPageChange when previous page button is clicked", () => {
    const previousPageButton = screen.getByRole("previous-page");
    fireEvent.click(previousPageButton);
    expect(mockPaginatorProps.onPageChange).toHaveBeenCalledWith(0);
  });

  it("should call onPageChange when page number is clicked", () => {
    const pageNumber = screen.getByText("3");
    fireEvent.click(pageNumber);
    expect(mockPaginatorProps.onPageChange).toHaveBeenCalledWith(2);
  });
});

describe("Paginator if currentPage is 0", () => {
  const mockPaginatorProps = {
    currentPage: 0,
    totalItems: 100,
    itemsPerPage: 10,
    onPageChange: vi.fn(),
    siblingCount: 1,
  };

  beforeEach(() => {
    render(
      <Paginator
        currentPage={mockPaginatorProps.currentPage}
        itemsPerPage={mockPaginatorProps.itemsPerPage}
        totalItems={mockPaginatorProps.totalItems}
        siblingCount={mockPaginatorProps.siblingCount}
        onPageChange={mockPaginatorProps.onPageChange}
      />
    );
  });

  afterEach(cleanup);

  it("should not display previous page button", () => {
    expect(screen.queryByRole("previous-page")).not.toBeInTheDocument();
  });
  it("should not display next page button", () => {
    expect(screen.queryByRole("next-page")).not.toBeInTheDocument();
  });
  it("should not display page numbers", () => {
    expect(screen.queryByText("1")).not.toBeInTheDocument();
    expect(screen.queryByText("2")).not.toBeInTheDocument();
    expect(screen.queryByText("3")).not.toBeInTheDocument();
    expect(screen.queryByText("4")).not.toBeInTheDocument();
    expect(screen.queryByText("5")).not.toBeInTheDocument();
  });
  it("should not display page dots", () => {
    expect(screen.queryByText("…")).not.toBeInTheDocument();
  });
});
