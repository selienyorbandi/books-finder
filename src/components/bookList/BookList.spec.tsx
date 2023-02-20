import { describe, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookList from "./BookList";
import { MemoryRouter } from "react-router-dom";

const bookPreviewListMock = [
  {
    id: "1a65afq",
    title: "Test Book",
    author: ["Test Author", "Test Author 2"],
    description: "Test Description",
    thumbnail: "test-image.jpg",
  },
  {
    id: "96748912651",
    title: "",
    author: ["Test Author 3", "Test Author 4"],
    description: "Test Description 2 ",
    thumbnail: "test-image-2.jpg",
  },
  {
    id: "23132112346a",
    title: "Test Book 3",
    author: ["Test Author 5", "Test Author 6"],
    description: "Test Description 3 ",
    thumbnail: "test-image-3.jpg",
  },
  {
    id: "azxcqweqweqwe",
    title: "Test Book 4",
    author: ["Test Author 7", "Test Author 8"],
    description: "Test Description 4 ",
    thumbnail: "test-image-4.jpg",
  },
];

describe("BookList(bookList, detailed)", () => {
  beforeEach(() => {
    render(
      <>
        <MemoryRouter>
          <BookList bookList={bookPreviewListMock} detailed={true} />
          );
        </MemoryRouter>
      </>
    );
  });
  afterEach(cleanup);

  it("should display a list of books", () => {
    const bookItems = screen.getByRole("booklist");
    expect(bookItems).toBeDefined();
  });

  it("should display only books with a title", () => {
    const bookItems = screen.getAllByRole("bookitem");
    expect(bookItems.length).toBe(3);
  });
});
