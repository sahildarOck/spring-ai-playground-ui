import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ChatResponse {
  response: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api" }),
  endpoints: (builder) => ({
    getResponse: builder.query<ChatResponse, string>({
      query: (prompt) => ({
        url: "/chat",
        method: "POST",
        body: { prompt },
      }),
    }),
  }),
});

export const { useGetResponseQuery, useLazyGetResponseQuery } = apiSlice;
