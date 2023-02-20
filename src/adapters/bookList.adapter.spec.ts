import { describe, it } from "vitest";
import "@testing-library/jest-dom";
import { ApiBook } from "../models/book.interface";
import { adaptBookListToBookPreviewList, adaptBookToBookPreview } from "./bookList.adapter";

describe("adaptBookToBookPreview", () => {
  it("should adapt book api data to book preview", () => {
    const mockApiBook = {
      id: "123",
      volumeInfo: {
        title: "The Hitchhiker's Guide to the Galaxy",
        authors: ["Douglas Adams"],
        imageLinks: { thumbnail: "https://www.example.com/thumbnail.jpg" },
        description: "The Hitchhiker's Guide to the Galaxy is a comedy science fiction series.",
      },
    };
    const expected = {
      id: "123",
      title: "The Hitchhiker's Guide to the Galaxy",
      author: ["Douglas Adams"],
      thumbnail: "https://www.example.com/thumbnail.jpg",
      description: "The Hitchhiker's Guide to the Galaxy is a comedy science fiction series.",
    };
    const result = adaptBookToBookPreview(mockApiBook as ApiBook);
    expect(result).toEqual(expected);
  });

  it("should handle a book api data with no authors", () => {
    const mockApiBook = {
      id: "123",
      volumeInfo: {
        title: "The Hitchhiker's Guide to the Galaxy",
        imageLinks: { thumbnail: "https://www.example.com/thumbnail.jpg" },
        description: "The Hitchhiker's Guide to the Galaxy is a comedy science fiction series.",
      },
    };
    const expected = {
      id: "123",
      title: "The Hitchhiker's Guide to the Galaxy",
      author: [],
      thumbnail: "https://www.example.com/thumbnail.jpg",
      description: "The Hitchhiker's Guide to the Galaxy is a comedy science fiction series.",
    };
    const result = adaptBookToBookPreview(mockApiBook as ApiBook);
    expect(result).toEqual(expected);
  });

  it("should handle a book api data with no thumbnail image link", () => {
    const mockApiBook = {
      id: "123",
      volumeInfo: {
        title: "The Hitchhiker's Guide to the Galaxy",
        authors: ["Douglas Adams"],
        description: "The Hitchhiker's Guide to the Galaxy is a comedy science fiction series.",
      },
    };
    const expected = {
      id: "123",
      title: "The Hitchhiker's Guide to the Galaxy",
      author: ["Douglas Adams"],
      thumbnail: "",
      description: "The Hitchhiker's Guide to the Galaxy is a comedy science fiction series.",
    };
    const result = adaptBookToBookPreview(mockApiBook as ApiBook);
    expect(result).toEqual(expected);
  });
  it("should handle a book api data with no description", () => {
    const mockApiBook = {
      id: "123",
      volumeInfo: {
        title: "The Hitchhiker's Guide to the Galaxy",
        authors: ["Douglas Adams"],
        imageLinks: { thumbnail: "https://www.example.com/thumbnail.jpg" },
      },
    };
    const expectedMockApiBook = {
      id: "123",
      title: "The Hitchhiker's Guide to the Galaxy",
      author: ["Douglas Adams"],
      thumbnail: "https://www.example.com/thumbnail.jpg",
      description: "",
    };
    expect(adaptBookToBookPreview(mockApiBook as ApiBook)).toEqual(expectedMockApiBook);
  });
});

describe("adaptBookListToBookPreviewList", () => {
  it("should adapt a list of API books to a list of book previews", () => {
    const mockApiBooks = [
      {
        id: "1",
        volumeInfo: {
          title: "Book 1",
          authors: ["Author 1"],
          imageLinks: { thumbnail: "http://example.com/thumbnail1.jpg" },
          description: "Description 1",
        },
      },
      {
        id: "2",
        volumeInfo: {
          title: "Book 2",
          authors: ["Author 92"],
          imageLinks: { thumbnail: "http://example.com/thumbnail2.jpg" },
          description: "Description 2",
        },
      },
      {
        id: "3",
        volumeInfo: {
          title: "Book 3",
          authors: ["Author 3"],
          description: "Description 3",
        },
      },
    ];
    const expectedBookPreviews = [
      {
        id: "1",
        title: "Book 1",
        author: ["Author 1"],
        thumbnail: "http://example.com/thumbnail1.jpg",
        description: "Description 1",
      },
      {
        id: "2",
        title: "Book 2",
        author: ["Author 92"],
        thumbnail: "http://example.com/thumbnail2.jpg",
        description: "Description 2",
      },
    ];
    const adaptedBookList = adaptBookListToBookPreviewList(mockApiBooks as ApiBook[]);
    expect(adaptedBookList).toEqual(expectedBookPreviews);
  });

  it("should return an empty list if no book has an image link", () => {
    const mockApiBooks = [
      {
        id: "1",
        volumeInfo: { title: "Book 1", authors: ["Author 1"], description: "Description 1" },
      },
      {
        id: "2",
        volumeInfo: {
          title: "Book 2",
          description: "Description 2",
        },
      },
      {
        id: "3",
        volumeInfo: {
          title: "Book 3",
          authors: ["Author 3"],
          description: "Description 3",
        },
      },
    ];
    const expectedBookPreviews: unknown[] = [];

    const adaptedBookList = adaptBookListToBookPreviewList(mockApiBooks as ApiBook[]);
    expect(adaptedBookList).toEqual(expectedBookPreviews);
  });
});
