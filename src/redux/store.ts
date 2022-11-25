import { combineReducers, configureStore } from "@reduxjs/toolkit";
import booksReducer from "./slices/books.slice";
import userReducer from "./slices/user.slice";
const rootReducer = combineReducers({
  booksReducer,
  userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
