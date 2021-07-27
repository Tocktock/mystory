import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let initialState = {
  displayStatus: "block",
};

const ModalState = createSlice({
  name: "modalState",
  initialState,
  reducers: {
    toggleModalDisplay(state) {
      const nextModalState =
        state.displayStatus === "hidden" ? "block" : "hidden";
      state.displayStatus = nextModalState;
    },
    hideModal(state) {
      state.displayStatus = "hidden";
    },
    showModal(state) {
      state.displayStatus = "block";
    },
  },
});

export const { toggleModalDisplay, hideModal, showModal } = ModalState.actions;
export default ModalState.reducer;
