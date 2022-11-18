import { adaptBookListToBookPreviewList } from "../adapters/bookList.adapter";

const API_URL_VOLUMES = "https://www.googleapis.com/books/v1/volumes";

export async function getBooksByQuery(query: string, page: number) {
  const startIndex = (page - 1) * 10;

  return fetch(
    `${API_URL_VOLUMES}?q=${query}&key=${
      import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
    }&startIndex=${startIndex}&maxResults=10`
  )
    .then(res => res.json())
    .then(result => adaptBookListToBookPreviewList(result.items));
}
