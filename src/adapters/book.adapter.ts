import { ApiBook, Book } from "./../models/book.interface";

export function adaptBook(bookApi: ApiBook): Book {
  const volume = bookApi.volumeInfo;

  return {
    id: bookApi.id,
    title: volume.title,
    subtitle: volume.subtitle || "",
    authors: volume.authors || [],
    publisher: volume.publisher,
    publishedDate: volume.publishedDate,
    description: volume.description || "", //DOMParser
    isbn_10: volume.industryIdentifiers.find(isbn => isbn.type === "ISBN_10")?.identifier || "",
    isbn_13: volume.industryIdentifiers.find(isbn => isbn.type === "ISBN_13")?.identifier || "",
    pageCount: volume.pageCount || 0,
    printType: volume.printType || "",
    categories: volume.categories || [],
    averageRating: volume.averageRating || NaN,
    imageLinks: volume.imageLinks,
    language: volume.language || "",
    previewLink: volume.previewLink || "",
    googleBookLink: volume.canonicalVolumeLink || "",
    isEmbeddable: bookApi.accessInfo.embeddable,
  };
}
