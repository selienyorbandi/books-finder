import { combineReducers, configureStore } from "@reduxjs/toolkit";
import booksReducer from "./slices/books.slice";

const rootReducer = combineReducers({
  reducer: booksReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
