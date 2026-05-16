import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AppState {
    text: string;
    prompt: string;
}

const initialState: AppState = {
    text: "",
    prompt: "",
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
});

export const { setText, setPrompt } = appSlice.actions;
export default appSlice.reducer;