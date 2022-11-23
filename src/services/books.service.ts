const API_URL_VOLUMES = "https://www.googleapis.com/books/v1/volumes";

export async function getBooksByQuery(query: string, page: number, pageSize: number) {
  const startIndex = (page - 1) * pageSize;

  return fetch(
    `${API_URL_VOLUMES}?q=${query}&key=${
      import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
    }&startIndex=${startIndex}&maxResults=${pageSize}`
  ).then(res => res.json());
}

export async function getBookById(id: string) {
  return fetch(`https://www.googleapis.com/books/v1/volumes/${id}`).then(res => res.json());
}
