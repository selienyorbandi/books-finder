import BookItem from "./BookItem";
import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import truncateStrings from "../../utils/truncateStrings";

const bookPreviewMock = {
  id: "1a65afq",
  title: "Test Book",
  author: ["Test Author", "Test Author 2"],
  description: "Test Description",
  thumbnail: "test-image.jpg",
};

describe("BookItem(book, detailed=false). Basic view.", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <BookItem book={bookPreviewMock} detailed={false} />
      </MemoryRouter>
    );
  });
  afterEach(cleanup);

  it("should display the book title", () => {
    const title = screen.getByText(truncateStrings(bookPreviewMock.title, 17));
    expect(title).toBeVisible();
  });

  it("should display the book author", () => {
    const author = screen.getByText(
      bookPreviewMock.author ? truncateStrings(bookPreviewMock.author.toString(), 40) : ""
    );
    expect(author).toBeVisible();
  });

  it("should display the book thumbnail", () => {
    const thumbnail = screen.getByAltText(`${bookPreviewMock.title} thumbnail`);
    expect(thumbnail).toBeVisible();
  });
});

describe("BookItem(book, detailed=true). Detailed view.", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <BookItem book={bookPreviewMock} detailed={true} />
      </MemoryRouter>
    );
  });
  afterEach(cleanup);

  it("should display the book description", () => {
    const description = screen.getByText(truncateStrings(bookPreviewMock.description, 100));
    expect(description).toBeVisible();
  });
});
