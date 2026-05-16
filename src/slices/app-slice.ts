import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { apiSlice } from "./api";

interface AppState {
  text: string;
  prompt: string;
  response: string;
}

const initialState: AppState = {
  text: "",
  prompt: "",
  response: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    setPrompt: (state, action: PayloadAction<string>) => {
      state.prompt = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.getResponse.matchFulfilled,
      (state, action) => {
        state.response = action.payload.response;
      }
    );
  },
});

export const { setText, setPrompt } = appSlice.actions;
export default appSlice.reducer;
