import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://news-2p18.onrender.com/api/" }),
  tagTypes: ['Article'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/articles",
    }),
    getArticle: builder.query({
      query: (id) => `articles/${id}`,
      providesTags: ['Article'],
    }),
    getComments: builder.query({
      query: (id) => `articles/${id}/comments`,
    }),
    postVote: builder.mutation({
      // ? We gonna have to do some thinking here. Little diffiult :()
      query: (data) => ({
        url: `/articles/${data.id}`,
        method: "PATCH",
        body: { inc_votes: data.inc_votes },
      }),
      invalidatesTags: ['Article'],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetArticleQuery,
  useGetCommentsQuery,
  usePostVoteMutation,
} = apiSlice;
