import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MarkDownPreview {
  content: string;
  category: string[];
  title: string;
}

let initialState = {
  content: "",
  category: [],
  title: "",
} as MarkDownPreview;

const MarkdownState = createSlice({
  name: "markdownState",
  initialState,
  reducers: {
    updateContent(state, action: PayloadAction<string>) {
      state.content = action.payload;
    },
    addCategory(state, action: PayloadAction<string>) {
      state.category.push(action.payload);
    },
    deleteCategory(state, action: PayloadAction<string>) {
      state.category = state.category.filter((v) => v != action.payload);
    },
    updateTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
  },
});

export const { updateContent, addCategory, deleteCategory, updateTitle } =
  MarkdownState.actions;
export default MarkdownState.reducer;
