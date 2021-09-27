import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    displayStatus: "hidden",
};

const ModalState = createSlice({
    name: "modalState",
    initialState,
    reducers: {
        toggleModalDisplay(state) {
            state.displayStatus = state.displayStatus === "hidden" ? "block" : "hidden";
        },
        hideModal(state) {
            state.displayStatus = "hidden";
        },
        showModal(state) { 
            state.displayStatus = "block";
        },  
    },
});

export const {toggleModalDisplay, hideModal, showModal} = ModalState.actions;
export default ModalState.reducer;
