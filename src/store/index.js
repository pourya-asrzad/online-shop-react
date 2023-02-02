import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../apis/apiSlice";
import authSlice from "./auth/authSlice";
import searchSlice from "./search-slice";
// import fetchProducts from "./getSlice-rtk-query";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    ui: uiSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});
export default store;
