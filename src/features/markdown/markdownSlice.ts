import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MarkDownPreview {
  content: string;
  category: string[];
}

let initialState = {
  content: "",
  category: [],
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
      console.log(action.payload);
      state.category = state.category.filter((v) => v != action.payload);
    },
  },
});

export const { updateContent, addCategory, deleteCategory } =
  MarkdownState.actions;
export default MarkdownState.reducer;
