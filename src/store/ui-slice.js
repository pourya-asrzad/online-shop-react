import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  showMenu: false,
  showZoom: false,
  selectedProductId: null,
  editBtnToggle_id: {
    btnshow: false,
    dataId: null,
  },
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
    showZoom(state) {
      state.showZoom = true;
    },
    hideZoom(state) {
      state.showZoom = false;
    },
    editOnClick(state, action) {
      state.editBtnToggle_id = {
        btnshow: true,
        dataId: action.payload,
      };
    },
    setSelectedProductId(state, action) {
      state.selectedProductId = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
