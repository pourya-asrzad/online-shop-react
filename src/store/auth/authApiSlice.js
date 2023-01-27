import { apiSlice } from "../../apis/apiSlice";
import { LOGIN_URL } from "../../apis/constants";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: LOGIN_URL,
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
