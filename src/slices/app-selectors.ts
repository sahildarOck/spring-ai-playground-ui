import type { RootState } from "../store/store";

export const selectAppText = (state: RootState) => state.app.text;
export const selectAppPrompt = (state: RootState) => state.app.prompt;
