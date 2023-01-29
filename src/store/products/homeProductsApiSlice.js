import { apiSlice } from "../../apis/apiSlice";

export const productsHomeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchHomeProducts: builder.query({
      query: (category) => {
        return `products?category=${category}&_page=1&_limit=8`;
      },
      providesTags: ["Posts"],
    }),
    fetchHomecategory: builder.query({
      query: (id) => `category?id=${id}`,
      providesTags: ["Posts"],
    }),
  }),
});

export const { useFetchHomeProductsQuery, useFetchHomecategoryQuery } =
  productsHomeApiSlice;
