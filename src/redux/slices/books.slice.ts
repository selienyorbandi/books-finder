import { bookSliceEmptyState } from "./../../models/book.interface";
import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: bookSliceEmptyState,
  reducers: {
    resetBooks: () => {
      return bookSliceEmptyState;
    },
    setBooksList: (state, action) => {
      const booksList = {
        ...state,
        booksList: {
          ...state.booksList,
          books: action.payload,
        },
      };
      return booksList;
    },
    setTotalItems: (state, action) => {
      const booksList = {
        ...state,
        booksList: {
          ...state.booksList,
          pagination: {
            ...state.booksList.pagination,
            totalItems: action.payload,
          },
        },
      };
      return booksList;
    },
    setCurrentPage: (state, action) => {
      const booksList = {
        ...state,
        booksList: {
          ...state.booksList,
          pagination: {
            ...state.booksList.pagination,
            currentPage: action.payload,
          },
        },
      };
      return booksList;
    },
  },
});

export const { resetBooks, setBooksList, setTotalItems, setCurrentPage } = booksSlice.actions;
export default booksSlice.reducer;
