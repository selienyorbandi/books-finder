import { bookSliceEmptyState } from "./../../models/book.interface";
import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: bookSliceEmptyState,
  reducers: {
    resetBooks: () => {
      return bookSliceEmptyState;
    },
  },
});

export const { resetBooks } = booksSlice.actions;
export default booksSlice.reducer;
