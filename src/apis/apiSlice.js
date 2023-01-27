import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut, setCredentials } from "../../src/store/auth/authSlice";
import { API_BASE_URL } from "../configs/variables.config";
import { REFRESH_TOKEN_URL } from "./constants";

const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  credentials: "same-origin",
  prepareHeaders: (headers, { getState, endpoint }) => {
    const token = localStorage.getItem("token");
    if (endpoint === REFRESH_TOKEN_URL) {
      const token = localStorage.getItem("refreshToken");
      headers.set("refreshToken", token);
    } else if (token) {
      headers.set("token", token);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.originalStatus === 401) {
    console.log("sending refresh token");
    // send refresh token to get new access token
    const refreshResult = await baseQuery(
      { url: REFRESH_TOKEN_URL, method: "POST" },
      { ...api, endpoint: REFRESH_TOKEN_URL },
      extraOptions
    );
    console.log(refreshResult);
    if (refreshResult?.data) {
      // store the new token
      api.dispatch(setCredentials({ ...refreshResult.data }));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
