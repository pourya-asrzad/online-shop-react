import { apiSlice } from "../../apis/apiSlice";

export const addProductSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (credentials) => ({
        url: "products",
        method: "POST",
        body: { ...credentials },
        providesTags: ["Posts"],
      }),
    }),
  }),
});

export const { useAddProductMutation } = addProductSlice;
