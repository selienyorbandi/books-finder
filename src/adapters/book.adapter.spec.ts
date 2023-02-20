import { describe, it } from "vitest";
import "@testing-library/jest-dom";
import { ApiBook } from "../models/book.interface";
import { adaptBook } from "./book.adapter";

describe("book adapters", () => {
  const mockApiBook: ApiBook = {
    kind: "books#volume",
    id: "abcdefg",
    etag: "abc123",
    selfLink: "https://www.example.com/book/abcdefg",
    volumeInfo: {
      title: "Example Book",
      subtitle: "A Story of Mocking",
      authors: ["Mock Author"],
      publisher: "Mock Publisher",
      publishedDate: "2022-02-20",
      description: "This is a mock description.",
      industryIdentifiers: [
        {
          type: "ISBN_13",
          identifier: "9781234567890",
        },
        {
          type: "ISBN_10",
          identifier: "1234567890",
        },
      ],
      readingModes: {
        text: true,
        image: false,
      },
      pageCount: 300,
      printedPageCount: 305,
      printType: "BOOK",
      categories: ["Fiction", "Mocking"],
      averageRating: 4.5,
      ratingsCount: 10,
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "preview-1.0.0",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail: "https://www.example.com/book/abcdefg/thumb_small.jpg",
        thumbnail: "https://www.example.com/book/abcdefg/thumb.jpg",
        small: "https://www.example.com/book/abcdefg/small.jpg",
        medium: "https://www.example.com/book/abcdefg/medium.jpg",
        large: "https://www.example.com/book/abcdefg/large.jpg",
        extraLarge: "https://www.example.com/book/abcdefg/xlarge.jpg",
      },
      language: "en",
      previewLink: "https://www.example.com/book/abcdefg/preview",
      infoLink: "https://www.example.com/book/abcdefg/info",
      canonicalVolumeLink: "https://www.example.com/book/abcdefg",
    },
    layerInfo: {
      layers: [
        {
          layerId: "abcdefg",
          volumeAnnotationsVersion: "1.0",
        },
      ],
    },
    saleInfo: {
      country: "US",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 9.99,
        currencyCode: "USD",
      },
      retailPrice: {
        amount: 7.99,
        currencyCode: "USD",
      },
      buyLink: "https://www.example.com/book/abcdefg/buy",
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 9990000,
            currencyCode: "USD",
          },
          retailPrice: {
            amountInMicros: 7990000,
            currencyCode: "USD",
          },
        },
      ],
    },
    accessInfo: {
      country: "",
      viewability: "",
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: "",
      epub: {
        isAvailable: false,
        acsTokenLink: "",
      },
      pdf: {
        isAvailable: false,
        acsTokenLink: "",
      },
      webReaderLink: "",
      accessViewStatus: "",
      quoteSharingAllowed: false,
    },
  };

  const mockAdaptedBook = {
    id: "abcdefg",
    title: "Example Book",
    subtitle: "A Story of Mocking",
    authors: ["Mock Author"],
    publisher: "Mock Publisher",
    publishedDate: "2022-02-20",
    description: "This is a mock description.",
    isbn_10: "1234567890",
    isbn_13: "9781234567890",
    pageCount: 300,
    printType: "BOOK",
    categories: ["Fiction", "Mocking"],
    averageRating: 4.5,
    imageLinks: {
      smallThumbnail: "https://www.example.com/book/abcdefg/thumb_small.jpg",
      thumbnail: "https://www.example.com/book/abcdefg/thumb.jpg",
      small: "https://www.example.com/book/abcdefg/small.jpg",
      medium: "https://www.example.com/book/abcdefg/medium.jpg",
      large: "https://www.example.com/book/abcdefg/large.jpg",
      extraLarge: "https://www.example.com/book/abcdefg/xlarge.jpg",
    },
    language: "en",
    previewLink: "https://www.example.com/book/abcdefg/preview",
    googleBookLink: "https://www.example.com/book/abcdefg",
    isEmbeddable: false,
  };

  it("should take an ApiBook where all of its properties are defined and return a Book", () => {
    expect(adaptBook(mockApiBook)).toEqual(mockAdaptedBook);
  });

  it("should take an ApiBook where authors and categories are undefined an return a Book", () => {
    const mockApiBookWithoutAuthorsAndCategories = {
      ...mockApiBook,
      volumeInfo: {
        ...mockApiBook.volumeInfo,
        authors: undefined,
        categories: undefined,
      },
    };
    const mockAdaptedBookWithoutAuthorsAndCategories = {
      ...mockAdaptedBook,
      authors: [],
      categories: [],
    };
    expect(adaptBook(mockApiBookWithoutAuthorsAndCategories)).toEqual(
      mockAdaptedBookWithoutAuthorsAndCategories
    );
  });

  it("should take an ApiBook where subtitle, description, prinType, language, and previewLink are undefined an return a Book", () => {
    const mockApiBookWithoutSomeProps = {
      ...mockApiBook,
      volumeInfo: {
        ...mockApiBook.volumeInfo,
        subtitle: undefined,
        description: undefined,
        printType: undefined,
        language: undefined,
        previewLink: undefined,
        averageRating: undefined,
        pageCount: undefined,
        canonicalVolumeLink: undefined,
      },
    };
    const mockAdaptedBookWithoutSomeProps = {
      ...mockAdaptedBook,
      subtitle: "",
      description: "",
      printType: "",
      language: "",
      previewLink: "",
      averageRating: NaN,
      pageCount: 0,
      googleBookLink: "",
    };
    expect(adaptBook(mockApiBookWithoutSomeProps)).toEqual(mockAdaptedBookWithoutSomeProps);
  });
  it("should take an ApiBook where isbn_10 and isbn_13 are undefined an return a Book", () => {
    const mockApiBookWithoutIsbn = {
      ...mockApiBook,
      volumeInfo: {
        ...mockApiBook.volumeInfo,
        industryIdentifiers: [],
      },
    };
    const mockAdaptedBookWithoutIsbn = {
      ...mockAdaptedBook,
      isbn_10: "",
      isbn_13: "",
    };
    expect(adaptBook(mockApiBookWithoutIsbn)).toEqual(mockAdaptedBookWithoutIsbn);
  });
});
