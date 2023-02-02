import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  searchData: null,
  loading: false,
};
const searchSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    searchAnswer(state, action) {
      if (action.payload && action.payload.length > 0) {
        state.searchData = action.payload;
      }

      if (action.payload && action.payload.length == 0) {
        state.searchData = {
          error: 404,
          errorMessage:
            "پوریاکالا هیچ کالایی مطابق بر کلمات ورودی شما پیدا نکرد",
        };
      }
      if (action.payload == "isLoading") {
        state.searchData = "isLoading";
      }
      if (action.payload == "isLoading") {
        state.searchData = "isLoading";
      }
    },
    seLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;
