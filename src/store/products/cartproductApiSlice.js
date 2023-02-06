import { apiSlice } from "../../apis/apiSlice";

export const cartProductSilce = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchCartProduct: builder.query({
      query: (id) => {
        const username = JSON.parse(localStorage.getItem("userinfo")).username;
        return `mockusers?username=${username}`;
      },
      providesTags: ["Posts"],
    }),
  }),
});

export const { useFetchCartProductQuery } = cartProductSilce;
