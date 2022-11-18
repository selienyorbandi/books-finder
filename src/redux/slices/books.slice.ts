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
  },
});

export const { resetBooks, setBooksList } = booksSlice.actions;
export default booksSlice.reducer;
