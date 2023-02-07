import { apiSlice } from "../../apis/apiSlice";

export const productsHomeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchSingleProduct: builder.query({
      query: (categoryID) => {
        return `products?id=${categoryID}`;
      },
      keepUnusedDataFor: 0.0001,
      providesTags: ["Posts"],
    }),
  }),
});

export const { useFetchSingleProductQuery } = productsHomeApiSlice;
