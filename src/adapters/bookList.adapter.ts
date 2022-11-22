import { BookPreview } from "./../models/book.interface";
import { ApiBook } from "../models/book.interface";

export function adaptBookToBookPreview(bookApi: ApiBook) {
  return {
    id: bookApi.id,
    title: bookApi.volumeInfo.title,
    author: bookApi.volumeInfo.authors,
    thumbnail: bookApi.volumeInfo.imageLinks ? bookApi.volumeInfo.imageLinks.thumbnail : "",
    description: bookApi.volumeInfo.description,
  };
}

export function adaptBookListToBookPreviewList(booksApi: ApiBook[]) {
  const adaptedBookList: BookPreview[] = [];
  booksApi.forEach(book => {
    if (book.volumeInfo.imageLinks) {
      adaptedBookList.push(adaptBookToBookPreview(book));
    }
  });
  return adaptedBookList;
}
