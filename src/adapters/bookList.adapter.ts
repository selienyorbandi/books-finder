import { BookPreview } from "./../models/book.interface";
import { ApiBook } from "../models/book.interface";

export function adaptBookToBookPreview(bookApi: ApiBook): BookPreview {
  return {
    id: bookApi.id,
    title: bookApi.volumeInfo.title,
    author: bookApi.volumeInfo.authors,
    thumbnail: bookApi.volumeInfo.imageLinks ? bookApi.volumeInfo.imageLinks.thumbnail : "",
    description: bookApi.volumeInfo.description,
  };
}

export function adaptBookListToBookPreviewList(booksApi: ApiBook[]): BookPreview[] {
  const adaptedBookList: BookPreview[] = [];
  booksApi.forEach(book => {
    if (book.volumeInfo.imageLinks) {
      adaptedBookList.push(adaptBookToBookPreview(book));
    }
  });
  return adaptedBookList;
}
