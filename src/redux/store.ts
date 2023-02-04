import { combineReducers, configureStore } from "@reduxjs/toolkit";
import booksReducer from "./slices/books.slice";
import authenticationReducer from "./slices/authentication.slice";
import authorizationReducer from "./slices/authorization.slice";

const rootReducer = combineReducers({
  booksReducer,
  authenticationReducer,
  authorizationReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
