import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MarkDownPreview {
  content: string;
  preview: string;
}

let initialState = {
  content: "",
} as MarkDownPreview;

const MarkdownState = createSlice({
  name: "markdownState",
  initialState,
  reducers: {
    updateContent(state, action: PayloadAction<string>) {
      state.content = action.payload;
    },
  },
});

export const { updateContent } = MarkdownState.actions;
export default MarkdownState.reducer;
