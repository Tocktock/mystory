import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PublishBody {
  header: string;
  content: string;
  category: string;
  tag: string;
}

let initialState = {
  content: "",
} as PublishBody;

const PublishState = createSlice({
  name: "publishState",
  initialState,
  reducers: {
    updateContent(state, action: PayloadAction<string>) {
      state.content = action.payload;
    },
  },
});

export const { updateContent } = PublishState.actions;
export default PublishState.reducer;
