import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UiState from "./types";

const uiInitialState: UiState = {
  alert: "",
};

const uiSlice = createSlice({
  name: "modal",
  initialState: uiInitialState,
  reducers: {
    openModal: (intitialState, action: PayloadAction<string>) => ({
      ...intitialState,
      alert: action.payload,
    }),
    closeModal: (initialState, action: PayloadAction<string>) => ({
      ...initialState,
      alert: "",
    }),
  },
});

export const uiSliceReducer = uiSlice.reducer;

export const {
  openModal: openModalActionCreator,
  closeModal: closeModalActionCreator,
} = uiSlice.actions;
