import { configureStore } from "@reduxjs/toolkit";
import fetchProducts from "./getSlice-rtk-query";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    [fetchProducts.reducerPath]: fetchProducts.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(fetchProducts.middleware);
  },
});
export default store;
