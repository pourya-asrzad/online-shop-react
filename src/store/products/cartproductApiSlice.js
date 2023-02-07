import { apiSlice } from "../../apis/apiSlice";
import { username } from "../../configs/variables.config";

export const cartProductSilce = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchCartProduct: builder.query({
      query: (id) => {
        return `mockusers?username=${username}`;
      },
      keepUnusedDataFor: 0.000000001,
      providesTags: ["Posts"],
    }),
  }),
});

export const { useFetchCartProductQuery } = cartProductSilce;
