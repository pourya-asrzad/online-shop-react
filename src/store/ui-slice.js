import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  showMenu: false,
  showZoom: false,
  selectedProductId: null,
  editBtnToggle_id: {
    btnshow: false,
    dataId: null,
    price: null,
    inventory: null,
  },
  showOrderMenu_id: {
    id: null,
    show: false,
  },
  notificationChange: null,
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
        ...state.editBtnToggle_id,
        btnshow: true,
        dataId: action.payload,
      };
    },
    saveEditHandler(state, action) {
      state.editBtnToggle_id = {
        ...state.editBtnToggle_id,
        btnshow: false,
        dataId: null,
      };
    },
    iputOnChange(state, action) {
      if (action.payload.type == "price") {
        state.editBtnToggle_id = {
          ...state.editBtnToggle_id,
          price: action.payload.value,
        };
      }
      if (action.payload.type == "inventory") {
        state.editBtnToggle_id = {
          ...state.editBtnToggle_id,
          inventory: action.payload.value,
        };
      }
    },
    setSelectedProductId(state, action) {
      state.selectedProductId = action.payload;
    },
    showOrderMenu(state, action) {
      state.showOrderMenu_id = {
        id: action.payload,
        show: true,
      };
    },
    hideOrderMenu(state, action) {
      state.showOrderMenu_id = {
        ...state.showOrderMenu_id,
        show: false,
      };
    },
    changeNotification(state, action) {
      state.notificationChange = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
