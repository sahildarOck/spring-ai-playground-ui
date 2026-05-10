import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AppState {
    prompt: string;
}

const initialState: AppState = {
    prompt: "",
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setPrompt: (state, action: PayloadAction<string>) => {
            state.prompt = action.payload;
        },
    },
});