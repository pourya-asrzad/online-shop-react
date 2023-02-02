import { apiSlice } from "../../apis/apiSlice";

export const productsHomeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchSingleProduct: builder.query({
      query: (categoryID) => {
        return `products?id=${categoryID}`;
      },
      providesTags: ["Posts"],
    }),
  }),
});

export const { useFetchSingleProductQuery } = productsHomeApiSlice;
