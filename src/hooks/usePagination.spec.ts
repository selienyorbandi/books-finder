import { renderHook } from "@testing-library/react";
import { describe, it } from "vitest";
import { usePagination } from "./usePagination";

describe("usePagination when there're a few pages and it shouldn't show dots {...} (6 pages or less when siblingCount = 1)", () => {
  it("should return an array with the expected values when there are fewer items than itemsPerPage and it shouldn't show dots", () => {
    const paginationRange = renderHook(() =>
      usePagination({
        totalItems: 4,
        itemsPerPage: 10,
        siblingCount: 1,
        currentPage: 1,
      })
    );
    expect(paginationRange.result.current).toEqual([1]);
  });

  it("should return an array with the expected values when there are more items than itemsPerPage and it shouldn't show dots", () => {
    const paginationRange = renderHook(() =>
      usePagination({
        totalItems: 15,
        itemsPerPage: 5,
        siblingCount: 1,
        currentPage: 2,
      })
    );
    expect(paginationRange.result.current).toEqual([1, 2, 3]);
  });

  it("should return an array with the expected values when the current page is at the beginning and it shouldn't show dots", () => {
    const paginationRange = renderHook(() =>
      usePagination({
        totalItems: 20,
        itemsPerPage: 5,
        siblingCount: 1,
        currentPage: 1,
      })
    );
    expect(paginationRange.result.current).toEqual([1, 2, 3, 4]);
  });

  it("should return an array with the expected values when the current page is in the middle and it shouldn't show dots", () => {
    const paginationRange = renderHook(() =>
      usePagination({
        totalItems: 20,
        itemsPerPage: 5,
        siblingCount: 1,
        currentPage: 3,
      })
    );
    expect(paginationRange.result.current).toEqual([1, 2, 3, 4]);
  });

  it("should return an array with the expected values when the current page is at the end and it shouldn't show dots", () => {
    const paginationRange = renderHook(() =>
      usePagination({
        totalItems: 60,
        itemsPerPage: 10,
        siblingCount: 1,
        currentPage: 6,
      })
    );
    expect(paginationRange.result.current).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe("usePagination when there're more than 7 pages and it should show dots {...} when siblingCount = 1", () => {
  it("should return an array with the expected values when there are more items than itemsPerPage and it should show right dots", () => {
    const paginationRange = renderHook(() =>
      usePagination({
        totalItems: 1000,
        itemsPerPage: 20,
        siblingCount: 1,
        currentPage: 2,
      })
    );
    expect(paginationRange.result.current).toEqual([1, 2, 3, 4, 5, "...", 50]);
  });

  it("should return an array with the expected values when there are more items than itemsPerPage and it should show left dots", () => {
    const paginationRange = renderHook(() =>
      usePagination({
        totalItems: 1000,
        itemsPerPage: 20,
        siblingCount: 1,
        currentPage: 48,
      })
    );
    expect(paginationRange.result.current).toEqual([1, "...", 46, 47, 48, 49, 50]);
  });

  it("should return an array with the expected values when there are more items than itemsPerPage and it should show left and right dots", () => {
    const paginationRange = renderHook(() =>
      usePagination({
        totalItems: 1000,
        itemsPerPage: 20,
        siblingCount: 1,
        currentPage: 30,
      })
    );
    expect(paginationRange.result.current).toEqual([1, "...", 29, 30, 31, "...", 50]);
  });

  it("should return an array with the expected values when the current page is at the beginning and it should show right dots", () => {
    const paginationRange = renderHook(() =>
      usePagination({
        totalItems: 6000,
        itemsPerPage: 20,
        siblingCount: 1,
        currentPage: 1,
      })
    );
    expect(paginationRange.result.current).toEqual([1, 2, 3, 4, 5, "...", 300]);
  });

  it("should return an array with the expected values when the current page is at the end and it should show left dots", () => {
    const paginationRange = renderHook(() =>
      usePagination({
        totalItems: 3000,
        itemsPerPage: 30,
        siblingCount: 1,
        currentPage: 100,
      })
    );
    expect(paginationRange.result.current).toEqual([1, "...", 96, 97, 98, 99, 100]);
  });
});
