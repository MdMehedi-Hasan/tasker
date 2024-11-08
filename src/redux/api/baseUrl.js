import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrl = createApi({
  reducerPath: "baseUrl",
  /* Potential conflict with function name */
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => "/posts",
    }),
  }),
});

export const { useGetAllPostsQuery } = baseUrl;
