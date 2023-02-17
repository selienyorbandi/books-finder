import truncateStrings from "./truncateStrings";

describe("truncateStrings(string: string | undefined, size: number)", () => {
  it("should return an empty string if the string is undefined", () => {
    const result = truncateStrings(undefined, 5);
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
