import { useAppSelector } from "../../store/hooks";

export const useAppText = () => useAppSelector((state) => state.app.text);
export const useAppPrompt = () => useAppSelector((state) => state.app.prompt);
export const useAppResponse = () => useAppSelector((state) => state.app.response);
