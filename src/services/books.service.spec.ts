import { describe, it } from "vitest";
import "@testing-library/jest-dom";

import { getBooksByQuery, getBookById } from "./books.service";

describe("BooksService: getBooksByQuery(query: string, page: number, pageSize: number)", () => {
  it("should return an ApiBook[] of the size set by pageSize", async () => {
    const books = await getBooksByQuery("test", 1, 10);

    expect(books).toBeDefined();
    expect(books.items).toBeDefined();
    expect(books.items.length).toBe(10);
  });
  it("should return an object without 'items' property if pageSize is 0", async () => {
    const books = await getBooksByQuery("test", 1, 0);

    expect(books).toBeDefined();
    expect(books.items).not.toBeDefined();
    expect(books.totalItems).toBe(0);
  });
});

describe("BooksService: getBookById(id: string)", () => {
  it("should return an ApiBook with an id property", async () => {
    const book = await getBookById("p3QQjwEACAAJ");

    expect(book).toBeDefined();
    expect(book.id).toBeDefined();
  });

  it("should return an ApiBook with the correct data record", async () => {
    const book = await getBookById("p3QQjwEACAAJ");

    expect(book).toBeDefined();
    expect(book.volumeInfo.title).toBe("Harry Potter y la piedra filosofal");
  });
});
