import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  showMenu: false,
};
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showMenu(state) {
      state.showMenu = true;
    },
    hideMenu(state) {
      state.showMenu = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
