import { describe } from "vitest";
import "@testing-library/jest-dom";
import truncateStrings from "./truncateStrings";
import arrayOfStringsToString from "./arrayOfStringsToString";

describe("truncateStrings(string: string | undefined, size: number) : string", () => {
  it("should return an empty string if the string is undefined", () => {
    const result = truncateStrings(undefined, 5);
    expect(result).toBe("");
  });

  it("should return an empty string if the string is empty", () => {
    const result = truncateStrings("", 5);
    expect(result).toBe("");
  });

  it("should return the string if the string is shorter than the size", () => {
    const result = truncateStrings("abc", 5);
    expect(result).toBe("abc");
  });

  it("should return truncated string if the string is equal to the size", () => {
    const result = truncateStrings("abc", 3);
    expect(result).toBe("abc");
  });

  it("should return 'truncated string...' if the string is longer than the size", () => {
    const result = truncateStrings("abc", 2);
    expect(result).toBe("ab...");
  });
});

describe("arrayOfStringsToString(array: string[] | undefined) : string", () => {
  it("should return an empty string if the array is undefined", () => {
    expect(arrayOfStringsToString(undefined)).toBe("");
  });

  it("should return an empty string if the array is empty", () => {
    expect(arrayOfStringsToString([])).toBe("");
  });

  it("should return a string with the array elements separated by commas", () => {
    expect(arrayOfStringsToString(["a", "b", "c"])).toBe("a,b,c");
  });
});
