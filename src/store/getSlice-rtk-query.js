import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../configs/variables.config";

const fetchProducts = createApi({
  reducerPath: "fetchProducts",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: (page) => {
        if (page.filter == "null") {
          return `products?_page=${page.page}`;
        } else {
          return `products?category=${page.filter}&_page=${page.page}`;
        }
      },
      providesTags: ["Posts"],
    }),
    fetchsubcategory: builder.query({
      query: () => "subcategory",
      providesTags: ["Posts"],
    }),
    fetchOrders: builder.query({
      query: (page) => {
        if (page.filter == "null") {
          return `orders?_page=${page.page}&_limit=7`;
        } else {
          return `orders?category=${page.filter}&_page=${page.page}&_limit=7`;
        }
      },
      providesTags: ["Posts"],
    }),
    fetchcategory: builder.query({
      query: () => "category",
      providesTags: ["Posts"],
    }),
    createProduct: builder.mutation({
      query: (post) => ({
        url: "products",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});
export const {
  useFetchProductsQuery,
  useCreateProductMutation,
  useFetchsubcategoryQuery,
  useFetchcategoryQuery,
  useFetchOrdersQuery,
} = fetchProducts;
export default fetchProducts;
