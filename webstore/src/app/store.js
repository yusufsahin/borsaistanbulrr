import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import categoryReducer from "../features/categories/categorySlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    categories:categoryReducer
  },
});
