import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import categoryReducer from "../features/categories/categorySlice";
import productReducer from "../features/products/productSlice";
 
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    categories:categoryReducer,
    products:productReducer
  },
});
