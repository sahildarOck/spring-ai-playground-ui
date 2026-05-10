import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AppState {
    prompt: string;
}

const initialState: AppState = {
    prompt: "",
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setPrompt: (state, action: PayloadAction<string>) => {
            state.prompt = action.payload;
        },
    },
});

export const { setPrompt } = appSlice.actions;
export default appSlice.reducer;