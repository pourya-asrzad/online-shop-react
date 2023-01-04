import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  showMenu,
};
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleShowMenu(state) {
      state.showMenu = !state.showMenu;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
